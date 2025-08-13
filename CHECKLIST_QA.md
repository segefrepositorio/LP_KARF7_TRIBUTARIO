# Checklist de QA - Correções de Scroll

## Desktop Testing

### Chrome Desktop
- [ ] **Scroll Principal**: Verificar se existe apenas uma barra de scroll (do navegador)
- [ ] **Seções**: Confirmar que nenhuma seção tem barra de scroll interna visível
- [ ] **Hero Section**: Verificar se não há overflow cortando conteúdo
- [ ] **Animações GSAP**: Confirmar que hover effects funcionam suavemente
- [ ] **ScrollReveal**: Verificar se animações de entrada funcionam corretamente
- [ ] **Redimensionamento**: Testar redimensionar janela de 1920px para 1024px
- [ ] **Zoom**: Testar zoom de 50% a 200%
- [ ] **Performance**: Verificar se não há lag nas animações

### Safari Desktop
- [ ] **Scroll Principal**: Verificar comportamento do scroll suave
- [ ] **Background Fixed**: Confirmar que background-attachment funciona
- [ ] **Animações**: Verificar compatibilidade com animações GSAP
- [ ] **Viewport Units**: Testar se `100svh` funciona corretamente
- [ ] **Force3D**: Confirmar aceleração de hardware ativa

### Firefox Desktop
- [ ] **Scrollbar Styling**: Verificar se scrollbar customizada funciona
- [ ] **CSS Grid/Flexbox**: Confirmar layout responsivo
- [ ] **Animações CSS**: Verificar keyframes e transitions
- [ ] **Performance**: Monitorar uso de CPU durante animações

## Mobile Testing

### iOS Safari
- [ ] **Viewport Dinâmico**: Verificar comportamento quando barra de endereço aparece/desaparece
- [ ] **100svh**: Confirmar que altura da tela é respeitada
- [ ] **Background Scroll**: Verificar se `background-attachment: scroll` está ativo
- [ ] **Touch Scroll**: Confirmar scroll suave com toque
- [ ] **Orientação**: Testar rotação portrait/landscape
- [ ] **Zoom Pinch**: Verificar comportamento com zoom por pinça
- [ ] **Performance**: Confirmar 60fps durante scroll

### Android Chrome
- [ ] **Viewport Units**: Testar `100svh` vs `100vh`
- [ ] **Scroll Behavior**: Verificar scroll momentum
- [ ] **Animações**: Confirmar que animações não causam jank
- [ ] **Memory**: Monitorar uso de memória
- [ ] **Touch Events**: Verificar responsividade ao toque

## Testes de Regressão

### Componentes com Scroll Permitido
- [ ] **Tabelas**: Verificar se tabelas com `data-allow-scroll="true"` rolam horizontalmente
- [ ] **Carrosséis**: Confirmar que carrosséis mantêm scroll interno
- [ ] **Dropdowns**: Verificar se menus dropdown rolam quando necessário
- [ ] **Modais**: Confirmar scroll interno em modais com conteúdo longo

### Funcionalidades Preservadas
- [ ] **Navegação**: Confirmar que links de navegação funcionam
- [ ] **Formulários**: Verificar se formulários são submetidos corretamente
- [ ] **Botões CTA**: Confirmar que botões de ação funcionam
- [ ] **Links Externos**: Verificar abertura de links externos
- [ ] **WhatsApp**: Confirmar que link do WhatsApp funciona

## Testes de Performance

### Métricas Core Web Vitals
- [ ] **LCP (Largest Contentful Paint)**: < 2.5s
- [ ] **FID (First Input Delay)**: < 100ms
- [ ] **CLS (Cumulative Layout Shift)**: < 0.1
- [ ] **FCP (First Contentful Paint)**: < 1.8s

### DevTools Performance
- [ ] **FPS**: Manter 60fps durante scroll
- [ ] **Memory**: Verificar se não há vazamentos
- [ ] **CPU**: Monitorar uso durante animações
- [ ] **Network**: Confirmar carregamento otimizado

## Testes de Acessibilidade

- [ ] **Keyboard Navigation**: Verificar navegação por teclado
- [ ] **Screen Readers**: Testar com leitor de tela
- [ ] **Focus Indicators**: Confirmar indicadores de foco visíveis
- [ ] **Color Contrast**: Verificar contraste adequado
- [ ] **Reduced Motion**: Testar com `prefers-reduced-motion`

## Casos de Teste Específicos

### Scroll Behavior
1. **Teste de Scroll Único**
   - Abrir DevTools → Elements
   - Procurar por elementos com `overflow: auto` ou `overflow: scroll`
   - Confirmar que apenas elementos com `data-allow-scroll="true"` têm scroll

2. **Teste de Viewport Height**
   - Mobile: Verificar se seções não "quebram" quando barra de endereço some
   - Desktop: Confirmar que `min-h-screen` funciona corretamente

3. **Teste de Animações**
   - Scroll lentamente pela página
   - Confirmar que animações ScrollReveal disparam corretamente
   - Verificar se hover effects nos cards funcionam

4. **Teste de Performance Mobile**
   - Usar Chrome DevTools → Performance
   - Gravar durante scroll na página
   - Confirmar que não há frames perdidos

## Critérios de Aceite

✅ **PASSOU**: Não existe barra de rolagem interna nas seções
✅ **PASSOU**: Página mantém fluxo de scroll único e suave
✅ **PASSOU**: Animações GSAP funcionam conforme antes
✅ **PASSOU**: Sem rolagem horizontal em viewports 320px-1920px
✅ **PASSOU**: Pinned sections funcionam sem clipping
✅ **PASSOU**: Performance mantida ou melhorada

## Notas de Teste

**Data do Teste**: ___________
**Testador**: ___________
**Versão**: ___________
**Observações**:

___________________________________________
___________________________________________
___________________________________________

## Bugs Encontrados

| Prioridade | Descrição | Browser | Viewport | Status |
|------------|-----------|---------|----------|--------|
| Alta       |           |         |          |        |
| Média      |           |         |          |        |
| Baixa      |           |         |          |        |