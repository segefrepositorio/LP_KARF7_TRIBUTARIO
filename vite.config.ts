import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react({
      // Otimizações React para produção
      babel: {
        plugins: mode === 'production' ? [
          ['babel-plugin-react-remove-properties', { properties: ['data-testid'] }]
        ] : []
      }
    }),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: 'es2020', // Melhor suporte moderno
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'terser',
    cssCodeSplit: true,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        // Otimização avançada de chunks
        manualChunks: {
          // Core React
          'react-vendor': ['react', 'react-dom'],
          // Animações (carregamento tardio)
          'animations': ['gsap', 'scrollreveal'],
          // UI Components (carregamento tardio)
          'ui-components': [
            '@radix-ui/react-accordion', 
            '@radix-ui/react-dialog', 
            '@radix-ui/react-dropdown-menu',
            '@radix-ui/react-popover',
            '@radix-ui/react-tooltip'
          ],
          // Ícones (carregamento tardio)
          'icons': ['lucide-react', 'react-icons'],
          // Utilitários
          'utils': ['clsx', 'tailwind-merge', 'class-variance-authority']
        },
        // Nomes de arquivo otimizados para cache
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    },
    terserOptions: {
      compress: {
        drop_console: mode === 'production',
        drop_debugger: mode === 'production',
        pure_funcs: mode === 'production' ? ['console.log', 'console.info'] : []
      }
    }
  },
  optimizeDeps: {
    include: [
      'react', 
      'react-dom', 
      'react/jsx-runtime',
      'clsx',
      'tailwind-merge'
    ],
    exclude: [
      'gsap', 
      'scrollreveal' // Carregamento tardio para animações
    ]
  },
  // Configurações de performance
  esbuild: {
    target: 'es2020',
    legalComments: 'none',
    minifyIdentifiers: mode === 'production',
    minifySyntax: mode === 'production',
    minifyWhitespace: mode === 'production'
  }
}));
