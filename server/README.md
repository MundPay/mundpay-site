# Mundpay CRM Sync API

API Node.js/Express independente para receber leads da landing page da Mundpay e encaminhá-los ao Data Crazy. O projeto não contém nem serve frontend.

O modo mock é o padrão de desenvolvimento: registra o lead normalizado e não acessa o Data Crazy. No modo real, a API procura o lead pelo telefone, cria-o se necessário, resolve seu ID e cria o negócio com o atendente e a etapa selecionados.

## Arquitetura e fluxo

```text
POST /api/leads
  -> segurança, CORS e rate limit
  -> validação/normalização estrita (Zod)
  -> mutex em memória
       -> leitura de assignment-state.json
       -> busca/criação do lead no Data Crazy
       -> criação do negócio na etapa e com o atendente escolhidos
       -> confirmação da resposta
       -> escrita atômica do próximo gerente
  -> HTTP 201
```

As responsabilidades estão separadas entre servidor HTTP (`app.ts`/`server.ts`), schema, controller, serviço de distribuição, repositório do estado e cliente do CRM. O arquivo de estado contém somente `{"nextManager":"alex"}` ou `{"nextManager":"brenno"}`. Nenhum lead ou dado pessoal é persistido localmente.

O round-robin é Alex → Brenno → Alex → Brenno. A leitura, chamada externa e atualização do turno ficam dentro do mesmo mutex. Se o CRM falhar, o turno não avança. A gravação usa arquivo temporário exclusivo seguido de `rename` atômico. Estado ausente ou inválido retorna deterministicamente a Alex, sem `Math.random()`.

## Contrato HTTP

### `POST /api/leads`

Requer `Content-Type: application/json` e aceita apenas:

```json
{
  "name": "Nome e sobrenome",
  "email": "email@dominio.com",
  "whatsapp": "+5511999999999",
  "revenue": "up-to-10k",
  "platform": "hotmart",
  "source": "lp",
  "language": "pt-BR",
  "submittedAt": "2026-08-24T12:00:00.000Z"
}
```

`submittedAt` é aceito para compatibilidade, mas não é considerado o horário oficial. A API cria `receivedAt` no servidor. Campos desconhecidos são rejeitados; IDs de gerente, pipeline ou fluxo enviados pelo navegador nunca são aceitos.

Valores de `revenue`: `up-to-10k`, `10k-to-50k`, `50k-to-200k`, `200k-to-1m`, `above-1m`.

Valores de `platform`: `hotmart`, `kiwify`, `perfectpay`, `cartpanda`, `digistore24`, `clickbank`, `other`.

Sucesso (`201`):

```json
{
  "success": true,
  "leadId": "mock_ou_id_do_crm"
}
```

Erros usam JSON sem stack, token, configuração interna ou resposta completa do fornecedor: `400` JSON malformado, `403` origem proibida, `413` body acima do limite, `415` mídia incorreta, `422` validação, `429` limite, `502` falha do CRM, `503` indisponibilidade e `500` erro inesperado.

### `GET /health` e `GET /ready`

Ambos verificam o processo e o acesso de leitura/escrita ao diretório do estado, sem chamar o CRM. `/ready` também expõe somente o modo (`mock` ou `real`), nunca credenciais.

Rotas desconhecidas retornam JSON `404`. A API não possui fallback para `index.html`.

## Desenvolvimento local

Requer Node.js 22 LTS ou mais recente.

```bash
cp .env.example .env
npm install
npm run dev
```

Se a execução for fora do container, ajuste `ASSIGNMENT_STATE_PATH=./data/assignment-state.json`. Scripts disponíveis:

- `npm run dev`: servidor com reload;
- `npm run lint`: análise estática;
- `npm run typecheck`: TypeScript strict;
- `npm test`: testes sem rede e com CRM falso;
- `npm run test:coverage`: cobertura;
- `npm run build`: gera `dist/`;
- `npm start`: executa o build.

Exemplo:

```bash
curl --fail-with-body http://localhost:3000/api/leads \
  -H 'Content-Type: application/json' \
  -d '{"name":"Maria Silva","email":"maria@example.com","whatsapp":"+5511999999999","revenue":"10k-to-50k","platform":"hotmart","source":"lp","language":"pt-BR"}'
```

## Variáveis de ambiente

Consulte [`.env.example`](.env.example). As principais são:

- `CORS_ALLOWED_ORIGINS`: origens adicionais separadas por vírgula, como as portas locais de cada dev; os domínios fixos ficam em `src/config/cors.ts` e `*` é recusado em produção;
- `ASSIGNMENT_STATE_PATH`: caminho do único arquivo persistido;
- `DATACRAZY_MOCK`: `true` habilita o cliente local sem rede;
- `DATACRAZY_*_ATTENDANT_ID`: ID do atendente CRM responsável (Alex ou Brenno);
- `DATACRAZY_*_STAGE_ID`: ID da etapa inicial em que o negócio deve ser criado;
- `DATACRAZY_TIMEOUT_MS`: futuro timeout do adapter oficial e limite usado pelo servidor;
- `RATE_LIMIT_*`, `REQUEST_BODY_LIMIT` e `LOG_LEVEL`: proteções operacionais.

Em modo real, todas as variáveis do Data Crazy são obrigatórias no startup. Nunca use nomes `VITE_*` para secrets.

## Configuração obrigatória no servidor (produção)

Esta seção concentra toda a configuração necessária para publicar a API com Docker e Nginx. O cenário adotado pelo `docker-compose.yml` é: **API em container e Nginx instalado diretamente no servidor**.

### 1. Prepare o ambiente

Configure as variáveis descritas em [`.env.example`](.env.example), mantenha `DATACRAZY_MOCK=false` e forneça as credenciais reais por `.env` protegido ou pelo gerenciador de secrets do servidor. Nunca grave o `.env` na imagem.

O build multi-stage compila o TypeScript, instala somente dependências de produção e executa como usuário `node`, não-root. O volume `mundpay-crm-state` mantém o estado do round-robin em `/app/data`.

### 2. Suba a API

```bash
docker compose up -d --build --force-recreate
docker compose ps
```

O Compose publica a API somente no loopback do servidor:

```yaml
ports:
  - "127.0.0.1:3000:3000"
```

Não abra a porta `3000` no firewall ou security group. Exponha publicamente apenas `80` e `443`; todo acesso externo à API deve passar pelo Nginx.

### 3. Configure o Nginx

O frontend e a API continuam independentes. No bloco HTTPS que atende os domínios da Mundpay, encaminhe `/api` para a porta local da API:

```nginx
server {
    listen 443 ssl http2;
    server_name mundpay.com www.mundpay.com mundpay.com.br www.mundpay.com.br;

    # Certificado e configuração do frontend omitidos.

    location ~ ^/(api/|health$|ready$) {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $remote_addr;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_connect_timeout 5s;
        proxy_read_timeout 20s;
    }
}
```

O Nginx deve sobrescrever `X-Forwarded-For`, como no exemplo, porque o Express confia em exatamente um proxy (`trust proxy = 1`) para identificar o IP usado no rate limit.

Após editar o arquivo do Nginx, valide e recarregue a configuração:

```bash
sudo nginx -t
sudo systemctl reload nginx
```

O TLS termina no Nginx; o Express permanece HTTP apenas na comunicação local entre o proxy e a API.

### 4. Valide o deploy

Confirme que a porta não está exposta em todas as interfaces:

```bash
ss -ltnp | grep ':3000'
```

O resultado deve mostrar `127.0.0.1:3000`, nunca `0.0.0.0:3000` ou `[::]:3000`. Em seguida, teste a API pelo domínio público, passando pelo Nginx:

```bash
curl --fail-with-body https://mundpay.com/health
```

### Caso o Nginx também esteja em container

`127.0.0.1` dentro do container do Nginx aponta para o próprio Nginx, não para a API. Nesse cenário, coloque ambos em uma rede Docker compartilhada, remova `ports` da API, use apenas `expose: 3000` e configure `proxy_pass http://crm-api:3000;`. A porta continuará inacessível fora da rede Docker.

Se a API for publicada em um subdomínio, o frontend pode chamar `https://api.mundpay.com/api/leads`, e a origem do frontend deve constar na allowlist fixa ou em `CORS_ALLOWED_ORIGINS`.

## Segurança, privacidade e operação

Helmet, remoção de `x-powered-by`, JSON pequeno, rate limit exclusivo do endpoint, allowlist CORS, request ID, timeout HTTP, shutdown gracioso e validação de ambiente são aplicados no startup. Os logs operacionais não registram headers, cookies, token ou body. Por solicitação de desenvolvimento, o modo mock imprime somente os campos permitidos do lead após validação e normalização; não o utilize com dados pessoais reais em produção.

Esta implementação suporta **somente uma instância e um processo Node**. Mutex em memória e arquivo local não coordenam réplicas, cluster mode nem sobreposição blue/green. Antes de escalar horizontalmente, migre o turno e o lock para Redis ou banco compartilhado, com operação transacional.

Existe uma janela inevitável sem idempotência confirmada: o Data Crazy pode criar o negócio e a conexão cair antes da API receber a resposta. Nesse caso o turno não avança, mas uma tentativa do frontend pode duplicar o negócio. O `externalId` não é enviado porque o Data Crazy o exibe no card e não há confirmação de que funcione como chave de idempotência.

Uma falha rara de disco entre a confirmação do CRM e o `rename` do estado tem consequência parecida: a API retorna `500`, o turno não é confirmado e uma nova tentativa pode duplicar o negócio. O evento é registrado sem dados pessoais para intervenção operacional.

## Integração real com Data Crazy

Com `DATACRAZY_MOCK=false`, o cliente usa autenticação Bearer e executa:

1. `GET /api/v1/leads` por telefone para evitar recriar um contato existente;
2. `POST /api/v1/leads` quando ele não existe;
3. nova busca por telefone quando a criação não retorna body, conforme o OpenAPI público;
4. `POST /api/v1/businesses` somente com `leadId`, `stageId` e `attendantId`.

O cliente usa `fetch`, timeout com `AbortController` e validação Zod das respostas. Requisições de criação não são repetidas automaticamente enquanto o Data Crazy não confirmar uma chave de idempotência, evitando duplicações silenciosas. Ainda deve ser confirmado no painel se entrar nas etapas configuradas dispara a automação padrão. Os testes usam respostas HTTP simuladas e nunca acessam o CRM real.
