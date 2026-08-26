# Mundpay Landing Page

Landing page institucional da Mundpay criada com React + Vite. O projeto recria a experiência visual da página de referência com componentes React próprios, suporte a internacionalização e seções reutilizáveis para a home, página de ajuda, documentos legais e página 404.

## Tecnologias

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- React Router
- i18next / react-i18next
- Motion
- Lottie React
- Lenis
- ESLint

## Como rodar

Instale as dependências:

```bash
npm install
```

Rode o ambiente local:

```bash
npm run dev
```

Gere a build de produção:

```bash
npm run build
```

Rode o lint:

```bash
npm run lint
```

Visualize a build localmente:

```bash
npm run preview
```

## Mapa do projeto

### Entrada e rotas

- `src/main.tsx`: inicializa React, Router e i18n.
- `src/App.tsx`: define as rotas principais.
- `src/pages/home/HomePage.tsx`: compõe a home a partir das seções.
- `src/pages/help/HelpPage.tsx`: página de ajuda em `/help` (inglês), `/me-ajuda` (português) e no alias `/ajuda`.
- `src/pages/legal/**`: documentos legais.
- As páginas legais aceitam aliases históricos definidos em `src/pages/legal/legalRoutes.ts`.
- `src/pages/not-found/**`: página 404.

### Home

- `src/components/layout/SiteShell.tsx`: base visual da home.
- `src/components/home/AnnouncementBar.tsx`: barra superior.
- `src/components/home/HeroSection.tsx`: hero, navbar, mockup e modal inicial.
- `src/components/home/benefits/**`: benefícios principais.
- `src/components/home/features/**`: tabs e conteúdo da seção de recursos.
- `src/components/home/loyalty-security/**`: painéis e animações de segurança/fidelização.
- `src/components/home/earnings-cta/**`: CTA verde.
- `src/components/home/global-sales/**`: vendas globais, idiomas, moedas e métodos de pagamento.
- `src/components/home/pricing/**`: tabela de taxas.
- `src/components/home/awards/**`: prêmios.
- `src/components/home/success-platform/**`: cards da plataforma.
- `src/components/home/integrations/**`: grade de integrações.
- `src/components/home/customer-stories/**`: depoimentos e carrossel.
- `src/components/home/app-download/**`: download do app e botões de loja.
- `src/components/home/blog-carousel/**`: carrossel de posts.
- `src/components/home/footer/**`: footer principal.

### Página de ajuda

- `src/pages/help/HelpNavbar.tsx`: navbar da página de ajuda.
- `src/pages/help/HelpHero.tsx`: conteúdo principal, contatos e CTA de chat.
- `src/pages/help/HelpFooter.tsx`: footer específico da ajuda, alinhado visualmente ao footer da home.
- `src/pages/help/helpData.ts`: links, contatos e dados estruturais da página.

### Internacionalização

- `src/i18n/index.ts`: configuração do i18n.
- `src/i18n/resources.ts`: idiomas suportados.
- `src/i18n/locales/en/**`: traduções em inglês.
- `src/i18n/locales/pt-BR/**`: traduções em português.

### Assets e UI compartilhada

- `src/assets/mundpayAssets.ts`: mapa central dos assets usados pelos componentes.
- `src/assets/image/**`: imagens, SVGs importados e marcas.
- `src/assets/media/**`: vídeos.
- `src/assets/lottie/**`: animações Lottie.
- `src/assets/font/**`: fontes locais.
- `src/components/icons/**`: componentes de ícones SVG.
- `src/components/brand/Logo.tsx`: logo reutilizável.

## Workflows de agentes

A pasta `.agents` guarda instruções operacionais para auditoria e manutenção do projeto.

- `.agents/rules.md`: regras gerais do projeto. Use como referência principal antes de criar ou alterar componentes, seções, assets, traduções ou padrões de código.
- `.agents/validate-project.md`: workflow de auditoria geral. Use quando for necessário revisar o projeto inteiro e gerar um relatório de problemas críticos, médios e melhorias recomendadas.
- `.agents/pre-commit-review.md`: checklist final antes de concluir uma tarefa ou preparar commit. Use para validar build, TypeScript, acessibilidade, i18n, componentização, responsividade e ausência de código morto.
- `.agents/recreate-section.md`: workflow para recriar uma seção visual a partir de referência. Use quando a tarefa for implementar ou refinar uma seção inspirada em um layout externo, sem copiar HTML ou fazer scraping.
- `.agents/create-component.md`: arquivo reservado para um workflow de criação de componentes. No momento está vazio.

## SEO e otimizações iniciais

O projeto inclui uma base leve de SEO para a revisão inicial:

- `index.html`: metadados principais, canonical, Open Graph, Twitter card, favicon, theme color, preconnect para LottieLab e JSON-LD de organização.
- `src/seo/routeSeo.ts`: configuração central de títulos, descrições, canonicals e regras de indexação por rota.
- `src/seo/Seo.tsx`: atualiza metadados de navegação no client-side conforme a rota atual do React Router.
- `public/robots.txt` e `public/sitemap.xml`: arquivos públicos básicos para descoberta e indexação.

Por enquanto, a URL canônica padrão é `https://mundpay.com`. Se o domínio final mudar, atualize `VITE_SITE_URL`, `public/robots.txt` e `public/sitemap.xml`.

Como a aplicação é uma SPA em Vite, a próxima etapa para SEO mais robusto deve considerar prerender, SSG ou SSR, principalmente antes de campanhas e indexação ampla.

## Observações

- Textos exibidos ao usuário devem passar pelo i18n quando fizer sentido.
- SVG inline deve ficar em `src/components/icons`.
- A home deve continuar sendo composta por seções em `HomePage.tsx`, sem concentrar a landing inteira em um único arquivo.
