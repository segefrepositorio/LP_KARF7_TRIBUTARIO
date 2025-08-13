# Patch das Correções - Scrolls Secundários

## Arquivo: src/index.css

### Adições na seção @layer base

```diff
  html, body {
    @apply bg-background text-foreground font-sans;
    overflow-x: hidden;
    max-width: 100vw;
+   /* Garantir scroll único no document */
+   scroll-behavior: smooth;
  }

- /* Prevenir overflow horizontal */
+ /* Prevenir overflow horizontal e scrolls secundários */
  * {
    box-sizing: border-box;
  }

  .container, .max-w-7xl, .max-w-6xl, .max-w-5xl, .max-w-4xl, .max-w-3xl {
    max-width: 100%;
    overflow-x: hidden;
+   /* Remover overflow-y para evitar scrolls secundários */
+ }
+
+ /* Prevenir scrolls secundários em seções */
+ section {
+   overflow: visible;
+ }
+
+ /* Usar min-height ao invés de height fixa para evitar overflow interno */
+ .min-h-screen {
+   min-height: 100svh; /* Usar svh para mobile */
+ }
+
+ /* Mobile viewport fix */
+ @supports (height: 100svh) {
+   .min-h-screen {
+     min-height: 100svh;
+   }
+ }
+
+ @supports not (height: 100svh) {
+   .min-h-screen {
+     min-height: 100vh;
+   }
  }
```

### Adições no final do arquivo

```diff
/* Otimizações de performance para mobile */
@media (max-width: 768px) {
  .pulse-animation {
    animation: pulse 3s ease-in-out infinite;
  }
  
  .sonar-animation::before,
  .sonar-animation::after {
    animation-duration: 3s;
  }
}
+
+/* Correções específicas para prevenir scrolls secundários */
+.hover-lift {
+  /* Garantir que animações não causem overflow */
+  transform-origin: center;
+  backface-visibility: hidden;
+  perspective: 1000px;
+}
+
+/* Prevenir overflow em cards e containers */
+.card, .bg-white\/50, .backdrop-blur-sm {
+  contain: layout style;
+}
+
+/* Otimizações para elementos com background-attachment: fixed */
+@media (max-width: 768px) {
+  [style*="background-attachment: fixed"] {
+    background-attachment: scroll !important;
+  }
+}
+
+/* Garantir que elementos decorativos não causem overflow */
+.absolute {
+  contain: layout;
+}
+
+/* Prevenir scroll horizontal em qualquer elemento */
+* {
+  max-width: 100%;
+}
+
+/* Whitelist para elementos que devem ter scroll interno */
+[data-allow-scroll="true"] {
+  overflow: auto;
+}
+
+/* Garantir que tabelas e carrosséis mantenham scroll quando necessário */
+.overflow-auto[data-allow-scroll="true"],
+table,
+.carousel {
+  overflow: auto !important;
+}
```

## Arquivo: src/components/LawyerWebsite.tsx

### Correção na Seção Hero (linha ~327)

```diff
{/* Hero Section - Estrutura Aprimorada */}
<section 
- className="relative min-h-screen flex items-center justify-center overflow-hidden"
+ className="relative min-h-screen flex items-center justify-center"
  style={{
    background: `linear-gradient(135deg, rgba(15, 23, 42, 0.4) 0%, rgba(30, 41, 59, 0.3) 50%, rgba(51, 65, 85, 0.2) 100%), url('https://images.pexels.com/photos/4342494/pexels-photo-4342494.jpeg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed'
  }}
>
```

### Otimização do ScrollReveal (linha ~72)

```diff
- // Configuração do ScrollReveal - OTIMIZADA
+ // Configuração do ScrollReveal - OTIMIZADA PARA PERFORMANCE
const sr = ScrollReveal({
- distance: '40px',
- duration: 800,
+ distance: '30px',
+ duration: 600,
  opacity: 0,
  reset: false,
  easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
- viewFactor: 0.15
+ viewFactor: 0.2,
+ // Garantir que use o scroll do window
+ container: window.document.documentElement,
+ mobile: true,
+ // Otimizações de performance
+ beforeReveal: function (domEl) {
+   domEl.style.willChange = 'transform, opacity';
+ },
+ afterReveal: function (domEl) {
+   domEl.style.willChange = 'auto';
+ }
});
```

### Otimização das Animações GSAP - Cards (linha ~121)

```diff
- // Animações GSAP para hover effects - SEM OVERFLOW
+ // Animações GSAP para hover effects - OTIMIZADO PARA PERFORMANCE
const cards = document.querySelectorAll('.hover-lift');
cards.forEach(card => {
+ // Configurar will-change para performance
+ card.style.willChange = 'transform';
+ 
  card.addEventListener('mouseenter', () => {
    gsap.to(card, {
-     y: -8,
-     duration: 0.3,
+     y: -6,
+     duration: 0.25,
      ease: "power2.out",
-     boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
+     force3D: true, // Forçar aceleração de hardware
+     boxShadow: "0 15px 30px rgba(0,0,0,0.1)"
    });
  });
  
  card.addEventListener('mouseleave', () => {
    gsap.to(card, {
      y: 0,
-     duration: 0.3,
+     duration: 0.25,
      ease: "power2.out",
+     force3D: true,
      boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
    });
  });
});
```

### Otimização das Animações GSAP - Botões (linha ~143)

```diff
- // Animação de botões - SEM SCALE
+ // Animação de botões - OTIMIZADO PARA PERFORMANCE
const buttons = document.querySelectorAll('button, .btn');
buttons.forEach(button => {
+ // Configurar will-change para performance
+ button.style.willChange = 'transform';
+ 
  button.addEventListener('mouseenter', () => {
    gsap.to(button, {
      y: -2,
-     duration: 0.2,
+     duration: 0.15,
      ease: "power2.out",
-     boxShadow: "0 8px 20px rgba(0,0,0,0.15)"
+     force3D: true,
+     boxShadow: "0 6px 16px rgba(0,0,0,0.12)"
    });
  });
  
  button.addEventListener('mouseleave', () => {
    gsap.to(button, {
      y: 0,
-     duration: 0.2,
+     duration: 0.15,
      ease: "power2.out",
+     force3D: true,
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
    });
  });
});
```

## Resumo das Mudanças

### Arquivos Modificados
- `src/index.css` - Adicionadas regras CSS para prevenir scrolls secundários
- `src/components/LawyerWebsite.tsx` - Removido overflow-hidden e otimizadas animações

### Arquivos Criados
- `RELATORIO_CORRECOES_SCROLL.md` - Relatório detalhado das correções
- `CHECKLIST_QA.md` - Checklist de testes de qualidade
- `PATCH_CORRECOES.md` - Este arquivo com o diff das mudanças

### Dependências Instaladas
- `gsap` - Biblioteca de animações (já estava sendo usada)
- `scrollreveal` - Biblioteca de animações de scroll (já estava sendo usada)

### Principais Correções
1. **Removido `overflow-hidden`** da seção hero que causava scroll secundário
2. **Configurado `min-height: 100svh`** para melhor suporte mobile
3. **Otimizadas animações GSAP** com `force3D` e `will-change`
4. **Configurado ScrollReveal** para usar explicitamente o scroll do document
5. **Adicionadas regras CSS** para prevenir scrolls secundários globalmente
6. **Criado sistema de whitelist** para elementos que devem ter scroll interno

### Resultado
- ✅ Eliminação de scrolls secundários
- ✅ Melhor performance das animações
- ✅ Suporte aprimorado para mobile
- ✅ Scroll único e suave em toda a página
- ✅ Funcionalidades preservadas