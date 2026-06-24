# Workflow: Validar Projeto

Objetivo:

Auditar todo o projeto e identificar violações das regras definidas em `rules.md`.

Passos:

1. Ler integralmente `rules.md`.

2. Analisar:

* Estrutura de pastas.
* Componentes.
* Seções.
* Assets.
* Traduções.
* Tipagem.
* Acessibilidade.
* Semântica HTML.

3. Identificar:

* Componentes grandes demais.
* SVGs fora de components/icons.
* Uso de any.
* Uso desnecessário de useEffect.
* Textos não internacionalizados.
* HTML não semântico.
* Código duplicado.
* Componentes não reutilizados.
* Valores arbitrários desnecessários do Tailwind.

4. Gerar relatório.

Formato:

## Problemas críticos

...

## Problemas médios

...

## Melhorias recomendadas

...

5. Corrigir apenas após aprovação explícita.
