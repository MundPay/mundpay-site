# Guia Para Agentes

Este projeto possui instruções auxiliares na pasta `.agents`. Use este arquivo como índice rápido para saber quais instruções ler antes de atuar.

## `.agents/rules.md`

Regras gerais do projeto React + Vite. Cobre componentização, semântica HTML, acessibilidade, i18n, Tailwind, performance, hooks, assets, ícones, animações e TypeScript.

Leitura obrigatória antes de qualquer alteração de código. Sempre leia este arquivo antes de implementar, refatorar, revisar, criar componente, alterar visual, ajustar comportamento ou mexer em arquivos existentes.

## `.agents/recreate-section.md`

Workflow para recriar uma seção visual a partir de referência. Reforça que não se deve copiar HTML, fazer scraping ou depender do código do Framer, e orienta a identificar estrutura, espaçamentos, hierarquia, animações, traduções, responsividade e acessibilidade.

Leia quando a tarefa envolver criar ou reconstruir uma seção da landing page baseada em referência visual.

## `.agents/validate-project.md`

Workflow para auditar o projeto inteiro contra as regras de `.agents/rules.md`. Orienta revisar estrutura, componentes, seções, assets, traduções, tipagem, acessibilidade e semântica, gerando relatório de problemas críticos, médios e melhorias recomendadas.

Leia quando o pedido for validar, auditar ou revisar o projeto de forma geral. Corrija problemas somente após aprovação explícita.

## `.agents/pre-commit-review.md`

Checklist de revisão final antes de concluir uma tarefa. Inclui build, TypeScript, componentização, semântica, acessibilidade, traduções, responsividade, performance, reutilização, ausência de `any`, SVGs espalhados, código morto e textos hardcoded.

Leia antes de finalizar tarefas maiores ou antes de preparar mudanças para commit. Nesta etapa, não faça novas alterações sem aprovação explícita.

## `.agents/create-component.md`

Arquivo reservado para instruções de criação de componentes. Atualmente está vazio.

Leia quando a tarefa for criar um componente novo, caso o arquivo passe a ter conteúdo no futuro. Enquanto estiver vazio, siga `.agents/rules.md` e os padrões existentes do projeto.
