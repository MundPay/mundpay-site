# Regras para Agentes — Landing Page React + Vite

## Objetivo

Esta aplicação é uma landing page construída com React + Vite, recriando visualmente uma página originalmente feita no Framer.

O objetivo é produzir código limpo, componentizado, performático, acessível, responsivo e fácil de manter.

A referência visual serve apenas como inspiração para layout, animações e comportamento.

Nenhuma parte da implementação deve depender do HTML, DOM ou código-fonte do site original.

---

# Critérios de Conclusão

Antes de considerar qualquer tarefa concluída, verificar:

- Componentização
- Semântica HTML
- Acessibilidade
- Internacionalização (i18n)
- Responsividade
- Performance
- Reutilização
- Tipagem TypeScript

Se algum desses pontos estiver comprometido, a implementação não está pronta.

---

# 1. Nunca fazer scraping ou renderização direta do site original

É proibido:

- Fazer fetch do HTML do site de referência.
- Fazer parse de HTML externo.
- Copiar DOM do Framer.
- Utilizar dangerouslySetInnerHTML.
- Colar HTML gigante dentro de strings.
- Renderizar conteúdo obtido por scraping.

Errado:

```tsx
const html = await fetch(url).then((r) => r.text());

return <div dangerouslySetInnerHTML={{ __html: html }} />;
```

A implementação deve ser feita utilizando componentes React próprios.

---

# 2. Componentização obrigatória

Cada seção principal deve possuir seu próprio componente.

Evitar arquivos gigantes contendo múltiplas seções.

Exemplo:

```txt
src/
  sections/
    Hero/
      Hero.tsx

    Features/
      Features.tsx

    Testimonials/
      Testimonials.tsx

    CTA/
      CTA.tsx
```

Cada arquivo deve possuir uma única responsabilidade.

## Como componentizar

Componentes devem ter responsabilidade clara, nome direto e arquivo próprio.

Regra geral:

- Um componente reutilizável deve ficar em seu próprio arquivo.
- O nome do arquivo deve ser igual ao nome do componente.
- Evitar declarar componentes dentro de outros componentes.
- Componentes internos só são aceitáveis em casos raros: quando são muito pequenos, não possuem reutilização, não carregam regra de domínio, não recebem props relevantes e melhoram claramente a leitura local.
- Se um bloco visual for usado mais de uma vez, inclusive dentro do mesmo arquivo, ele deve virar componente.
- Antes de criar um componente novo, verificar se já existe componente equivalente no projeto.

Nomes devem ser específicos e curtos.

Preferir:

```txt
FooterLink.tsx
FooterLink

FooterStoreButton.tsx
FooterStoreButton

PricingCard.tsx
PricingCard
```

Evitar nomes longos, genéricos ou presos ao detalhe de implementação:

```txt
FooterColumnNavigationExternalInternalLink.tsx
FooterColumnLink
GenericLinkRenderer
ReusableTextItem
```

Errado:

```tsx
export function FooterColumns() {
  function FooterColumnLink() {
    return <a href="/me-ajuda">Ajuda</a>;
  }

  return <FooterColumnLink />;
}
```

Correto:

```tsx
// FooterLink.tsx
type FooterLinkProps = {
  href: string;
  children: React.ReactNode;
};

export function FooterLink({ href, children }: FooterLinkProps) {
  return <a href={href}>{children}</a>;
}
```

```tsx
// FooterColumns.tsx
import { FooterLink } from "./FooterLink";

export function FooterColumns() {
  return <FooterLink href="/me-ajuda">Ajuda</FooterLink>;
}
```

---

# 3. Limite de responsabilidade por arquivo

Nenhum componente deve crescer indefinidamente.

Sinais de que um componente precisa ser dividido:

- Mais de 200-300 linhas.
- Muitos hooks.
- Muitos handlers.
- Muitos blocos condicionais.
- Muitos map().
- Múltiplas áreas visuais distintas.

Errado:

```txt
Hero.tsx

- Hero
- Features
- Stats
- Testimonials
- CTA
```

Correto:

```txt
Hero.tsx
HeroFeatures.tsx
HeroStats.tsx
HeroTestimonials.tsx
HeroCTA.tsx
```

---

# 4. Separar dados de layout

Listas repetitivas devem utilizar arrays e mapeamento.

Correto:

```tsx
const features = [
  {
    title: "Fast Setup",
    description: "...",
  },
];
```

Evitar repetição manual de estruturas idênticas.

---

# 5. JSX limpo

Evitar JSX excessivamente grande.

Quando um bloco visual cresce, transformá-lo em componente.

Correto:

```tsx
<FeatureCard title={feature.title} description={feature.description} />
```

---

# 6. Semântica HTML

Utilizar HTML semântico.

Preferir:

```html
<header></header>
<nav></nav>
<main></main>
<section></section>
<article></article>
<aside></aside>
<footer></footer>
```

Evitar:

```html
<div>
  <div>
    <div>
      <div></div>
    </div>
  </div>
</div>
```

---

## Hierarquia de títulos

A página deve possuir apenas um h1.

Utilizar hierarquia lógica:

```html
<h1>Main title</h1>

<section>
  <h2>Features</h2>

  <article>
    <h3>Feature Card</h3>
  </article>
</section>
```

Evitar pular níveis sem necessidade.

---

## Elementos corretos para cada contexto

Botões:

```tsx
<button>
```

Links:

```tsx
<a href="/about">
```

Nunca:

```tsx
<div onClick={...}>
```

---

# 7. Acessibilidade (A11y)

Todo componente deve ser acessível.

Obrigatório:

- Imagens com alt.
- Inputs com label.
- Botões utilizando button.
- Links utilizando a.
- SVGs decorativos com aria-hidden.
- Navegação por teclado funcional.
- Estados de foco preservados.

Antes de concluir uma tarefa verificar se ela continua utilizável sem mouse.

---

# 8. Internacionalização (i18n)

O projeto possui suporte a:

- pt-BR
- en

Todo texto exibido ao usuário deve utilizar o sistema de tradução quando fizer sentido.

Correto:

```tsx
<h2>{t("hero.title")}</h2>
```

---

## Deve utilizar tradução

- Títulos
- Descrições
- Botões
- Menus
- Labels
- Placeholders
- Tooltips
- Mensagens

---

## Não deve utilizar tradução

- URLs
- Emails
- Endereços
- Nomes próprios
- Marcas
- Ferramentas
- Tecnologias
- Nomes de produtos definidos pelo cliente

Exemplos:

```txt
React
Vite
Framer
Laravel
Stripe
GitHub
OpenAI
```

---

# 9. Organização de traduções

Utilizar chaves organizadas.

Correto:

```json
{
  "hero": {
    "title": "...",
    "description": "..."
  }
}
```

Evitar:

```json
{
  "text1": "...",
  "text2": "...",
  "text3": "..."
}
```

---

# 10. CSS e Tailwind

Utilizar o sistema definido pelo projeto.

Preferir classes existentes do Tailwind.

Antes de criar valores customizados verificar se já existe uma classe equivalente.

Correto:

```tsx
className = "mt-24 px-8 text-4xl";
```

Evitar:

```tsx
className = "mt-[147px] px-[73px] text-[43px]";
```

Evitar:

```tsx
style={{
  marginTop: 147,
  padding: 73,
}}
```

Valores arbitrários devem ser utilizados apenas quando forem realmente necessários para manter fidelidade visual.

---

# 11. Performance

Evitar:

- Dependências desnecessárias.
- Re-renderizações desnecessárias.
- Código duplicado.
- Imagens pesadas sem otimização.
- Animações excessivamente custosas.

---

# 12. Hooks

Não utilizar useEffect sem necessidade real.

Antes de criar um useEffect verificar:

- O valor pode ser calculado diretamente durante renderização?
- O valor pode vir de props?
- O valor pode ser derivado de outro estado?

Evitar useEffect para:

- Valores derivados.
- Cálculos simples.
- Estruturas estáticas.
- Inicializações desnecessárias.

Landing pages normalmente possuem poucos casos legítimos para useEffect.

---

# 13. Evitar abstrações prematuras

Não criar abstrações genéricas sem necessidade real.

Evitar:

```txt
GenericContentRenderer
UniversalSection
DynamicBlockFactory
RenderEngine
MegaWrapper
```

quando existe apenas um uso.

Priorizar simplicidade.

---

# 14. Reutilização antes de criação

Antes de criar um novo componente verificar se já existe um equivalente.

Evitar:

```txt
PrimaryButton
HeroButton
MainButton
LandingButton
```

quando todos possuem a mesma responsabilidade.

Priorizar reutilização antes de duplicação.

---

# 15. Estrutura de ícones

Nunca inserir SVG diretamente dentro de páginas ou seções.

Todo SVG deve ser transformado em componente próprio.

Estrutura:

```txt
src/
  components/
    icons/
      ArrowRightIcon.tsx
      CheckIcon.tsx
      PlayIcon.tsx
```

---

## Regras

- Um arquivo = um ícone.
- Um componente = um ícone.
- Não agrupar vários ícones no mesmo arquivo.
- Não duplicar SVGs.
- Utilizar currentColor sempre que possível.
- Reutilizar ícones existentes.

---

# 16. Assets

Organização recomendada:

```txt
src/
  assets/
    images/
    icons/
    animations/

public/
```

Regras:

- Arquivos importados por componentes ficam em src/assets.
- Arquivos acessados diretamente por URL ficam em public.

---

# 17. Animações

Animações devem ser implementadas utilizando:

- CSS
- Framer Motion
- Lottie

quando apropriado.

Não copiar scripts do Framer.

Não injetar scripts externos.

Preferir animações isoladas em componentes próprios.

Exemplo:

```txt
components/
  AnimatedLogo/
    AnimatedLogo.tsx
```

---

# 18. TypeScript

Não utilizar any.

Sempre tipar:

- Props
- Retornos
- Objetos
- Arrays

Preferir:

- type
- interface
- unknown
- generics

quando apropriado.

---

# 19. Imports

Manter imports organizados.

Remover:

- Código morto.
- Imports não utilizados.
- Variáveis não utilizadas.
- Componentes não utilizados.

---

# 20. Página principal

A página principal deve apenas compor seções.

Exemplo:

```tsx
export function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <BenefitsSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </>
  );
}
```

A página principal não deve conter toda a lógica da landing page.

---

# 21. Fidelidade visual

Ao recriar uma interface baseada no Framer:

Observar:

- Espaçamentos
- Tipografia
- Cores
- Responsividade
- Hover
- Animações
- Hierarquia visual

Implementar utilizando React nativo e componentes próprios.

A referência visual não deve se transformar em código copiado.

---

# Regra Final

Se a solução envolver qualquer uma das situações abaixo, ela deve ser considerada incorreta e refeita:

- Scraping de HTML.
- Parse de HTML externo.
- dangerouslySetInnerHTML.
- HTML gigante dentro de strings.
- Componentes gigantes com múltiplas responsabilidades.
- Uso de any.
- SVGs espalhados pelo projeto.
- Ignorar semântica HTML.
- Ignorar acessibilidade.
- Ignorar internacionalização.
- Criar abstrações desnecessárias.
- Duplicar componentes existentes.
- Utilizar useEffect sem necessidade.
- Ignorar padrões já definidos no projeto.
