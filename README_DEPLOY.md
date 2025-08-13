# Deploy na Vercel - Juris Evolve

## 📋 Pré-requisitos

- Node.js >= 18.0.0
- npm >= 8.0.0
- Conta na Vercel

## 🚀 Deploy Automático via GitHub

### 1. Preparar o Repositório

```bash
# Inicializar git (se ainda não foi feito)
git init

# Adicionar todos os arquivos
git add .

# Fazer commit
git commit -m "feat: projeto pronto para deploy na Vercel"

# Adicionar repositório remoto
git remote add origin https://github.com/seu-usuario/juris-evolve.git

# Push para o GitHub
git push -u origin main
```

### 2. Conectar com a Vercel

1. Acesse [vercel.com](https://vercel.com)
2. Faça login com sua conta GitHub
3. Clique em "New Project"
4. Selecione o repositório `juris-evolve`
5. Configure as seguintes opções:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

### 3. Variáveis de Ambiente (se necessário)

Se o projeto usar variáveis de ambiente, adicione-as na seção "Environment Variables" da Vercel:

```
VITE_API_URL=https://sua-api.com
VITE_APP_NAME=Juris Evolve
```

## 🛠️ Deploy Manual via CLI

### 1. Instalar Vercel CLI

```bash
npm i -g vercel
```

### 2. Login na Vercel

```bash
vercel login
```

### 3. Deploy

```bash
# Deploy de desenvolvimento
vercel

# Deploy de produção
vercel --prod
```

## 📦 Build Local

Para testar o build localmente antes do deploy:

```bash
# Instalar dependências
npm install

# Verificar tipos TypeScript
npm run type-check

# Build de produção
npm run build

# Preview do build
npm run preview
```

## 🔧 Configurações do Projeto

### Arquivos de Configuração Criados/Atualizados:

- **`vercel.json`**: Configurações específicas da Vercel
- **`package.json`**: Scripts e engines atualizados
- **`vite.config.ts`**: Otimizações para produção
- **`.nvmrc`**: Versão do Node.js recomendada

### Otimizações Implementadas:

1. **Build otimizado** com code splitting
2. **Minificação** com Terser
3. **Chunks manuais** para vendor e UI
4. **Cache headers** para assets estáticos
5. **Rewrites** para SPA routing
6. **TypeScript check** no build

## 🌐 Domínio Customizado

Para usar um domínio personalizado:

1. Acesse o projeto na Vercel
2. Vá em "Settings" > "Domains"
3. Adicione seu domínio
4. Configure os DNS conforme instruções

## 📊 Monitoramento

A Vercel oferece:

- **Analytics**: Métricas de performance
- **Speed Insights**: Core Web Vitals
- **Function Logs**: Logs em tempo real
- **Edge Network**: CDN global

## 🔍 Troubleshooting

### Build Falha

```bash
# Limpar cache e reinstalar
rm -rf node_modules package-lock.json
npm install

# Verificar tipos
npm run type-check

# Build local
npm run build
```

### Problemas de Routing

O arquivo `vercel.json` já está configurado para SPAs. Se houver problemas:

1. Verifique se todas as rotas estão definidas no React Router
2. Confirme que o `vercel.json` está na raiz do projeto

### Performance

- Use `npm run build` para verificar o tamanho dos chunks
- Analise o bundle com ferramentas como `webpack-bundle-analyzer`
- Otimize imagens e assets

## 📝 Comandos Úteis

```bash
# Desenvolvimento
npm run dev

# Build e type check
npm run build

# Apenas verificação de tipos
npm run type-check

# Lint
npm run lint

# Preview do build
npm run preview
```

## 🎯 Próximos Passos

1. Configure analytics e monitoring
2. Implemente CI/CD com GitHub Actions
3. Configure testes automatizados
4. Otimize SEO e meta tags
5. Implemente PWA se necessário

---

**Projeto pronto para deploy! 🚀**