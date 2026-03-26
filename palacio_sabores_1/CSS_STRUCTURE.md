# Estrutura de CSS do Projeto AçaíBerry

## Organização dos Arquivos

O CSS foi separado em múltiplos arquivos para facilitar a manutenção e leitura do código:

### 📁 `/css/`

#### **base.css**
- Reset e normalização (reset CSS universal)
- Variáveis CSS (cores, espaçamento, fonts)
- Estilos base de elementos HTML (html, body, a, img, ul, etc.)
- Classe `.container` e `.section-padding` reutilizáveis

#### **animations.css**
- Definição de `@keyframes` (fadeInUp, fadeIn)
- Classes de animação reutilizáveis (.animate-fade-in-up, .animate-fade-in)
- Animações gerais do projeto

#### **buttons.css**
- Classe base `.btn`
- Variações: `.btn-cta`, `.btn-outline`, `.btn-sm`
- Estados hover e transições

#### **header.css**
- Navegação fixa (`.header`)
- Logo
- Links de navegação desktop (`.nav-links`)
- Menu mobile (`.mobile-toggle`, `.mobile-menu`)
- Estilos responsivos do header

#### **hero.css**
- Seção hero completa
- Background com overlay
- Layout hero grid
- Imagem com efeito de glow
- Badges e textos da seção

#### **sections.css**
- **Why Choose Us**: cards de features com ícones
- **Products**: grid de produtos, badges, imagens com hover
- **B2B**: seção de parceiros com formulário
- Todos os estilos dessas três seções principais

#### **footer.css**
- Layout do rodapé
- Grid de colunas do footer
- Links sociais
- Informações de contato
- Estilos de links e redes sociais

#### **responsive.css**
- Media queries organizadas por breakpoint
- `@media (max-width: 1024px)` - Tablets
- `@media (max-width: 768px)` - Mobile
- `@media (max-width: 480px)` - Mobile pequeno

---

## Variáveis CSS Globais

Todas as cores e espaçamentos estão centralizados em `base.css`:

```css
:root {
  --primary: #4B0082;           /* Roxo principal */
  --primary-fg: #ffffff;        /* Texto em fundo roxo */
  --accent: #310062;            /* Roxo mais escuro */
  --background: #F8F9FA;        /* Fundo principal */
  --foreground: #1F2232;        /* Texto principal */
  --card: #ffffff;              /* Fundo de cards */
  --muted: #ECECEE;             /* Cinza claro */
  --muted-fg: #6B6E7B;          /* Texto cinza */
  --cta: #ff6000;               /* Laranja CTA */
  --cta-fg: #ffffff;            /* Texto em CTA */
  --border: #E4E4E7;            /* Cor de bordas */
  --radius: 0.75rem;            /* Border radius padrão */
}
```

---

## Como Adicionar Novos Estilos

1. **Estilos de novo componente?** → Crie um novo arquivo em `/css/`
2. **Estilo global/base?** → Adicione em `base.css`
3. **Animação?** → Adicione em `animations.css`
4. **Media queries?** → Adicione em `responsive.css` (organize por breakpoint)

---

## Ordem de Carregamento (no HTML)

Os arquivos CSS devem ser carregados nesta ordem:

1. `base.css` - Precisa ser primeiro (variáveis, reset)
2. `animations.css`
3. `buttons.css`
4. `header.css`
5. `hero.css`
6. `sections.css`
7. `footer.css`
8. `responsive.css` - Deve ser por último (sobrescreve responsivamente)

---

## Benefícios desta Estrutura

✅ **Manutenção facilitada** - Cada arquivo tem responsabilidade clara  
✅ **Reutilização** - Variáveis CSS centralizadas  
✅ **Performance** - Possibilidade de cache em browsers  
✅ **Escalabilidade** - Fácil adicionar novos arquivos  
✅ **Leitura** - HTML limpo sem blocos de CSS massivos  

---

## Próximos Passos (Recomendações)

- [ ] Implementar pré-processador CSS (SCSS/SASS) para melhor organização
- [ ] Setup de minificação de CSS para produção
- [ ] Validação automática de CSS
- [ ] Considerar metodologia BEM (Block Element Modifier) para classes

