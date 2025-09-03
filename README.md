# PORTALES - Arte como Portal Digital

<div align="center">
  <img src="src/assets/LOGO.png" alt="PORTALES Logo" width="120" height="120">
  
  <h3>Transforme sua arte em portais digitais</h3>
  
  [![CI/CD](https://github.com/GabrielJaccoud/portales-app/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/GabrielJaccoud/portales-app/actions/workflows/ci-cd.yml)
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  [![React](https://img.shields.io/badge/React-19-blue.svg)](https://reactjs.org/)
  [![Vite](https://img.shields.io/badge/Vite-6.3-purple.svg)](https://vitejs.dev/)
</div>

## 🌟 Sobre o Projeto

O PORTALES é uma plataforma inovadora que conecta arte física e digital através de realidade aumentada e inteligência artificial. Artistas podem criar "portais digitais" associados às suas obras físicas, que são descobertos por usuários através de um scanner de RA.

### ✨ Funcionalidades Principais

- **🎨 Modo Criador**: Transforme suas obras de arte em portais digitais interativos
- **🔍 Modo Explorador**: Use a câmera para descobrir portais ocultos em obras de arte
- **🛒 Marketplace**: Descubra e explore portais criados por outros artistas
- **👤 Perfil**: Gerencie seus portais e acompanhe suas interações

## 🚀 Demo

🔗 **[Ver Demo ao Vivo](https://gabrieljaccoud.github.io/portales-app/)**

## 🛠️ Tecnologias

### Frontend
- **React 19** - Framework principal
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Framework CSS utilitário
- **shadcn/ui** - Biblioteca de componentes
- **Framer Motion** - Animações
- **Lucide React** - Ícones

### DevOps & CI/CD
- **GitHub Actions** - Pipeline CI/CD
- **GitHub Pages** - Deploy automático
- **Lighthouse CI** - Análise de performance
- **ESLint** - Linting de código

## 📦 Instalação

### Pré-requisitos
- Node.js 18+ 
- pnpm (recomendado) ou npm

### Passos

1. **Clone o repositório**
   ```bash
   git clone https://github.com/GabrielJaccoud/portales-app.git
   cd portales-app
   ```

2. **Instale as dependências**
   ```bash
   pnpm install
   ```

3. **Inicie o servidor de desenvolvimento**
   ```bash
   pnpm run dev
   ```

4. **Acesse a aplicação**
   ```
   http://localhost:5173
   ```

## 📁 Estrutura do Projeto

```
portales-app/
├── src/
│   ├── components/          # Componentes React
│   │   ├── ui/             # Componentes base (shadcn/ui)
│   │   ├── PortalButton.jsx
│   │   ├── PortalCard.jsx
│   │   ├── Navigation.jsx
│   │   ├── CosmicLoader.jsx
│   │   └── FloatingParticles.jsx
│   ├── hooks/              # Hooks customizados
│   ├── lib/                # Utilitários
│   ├── assets/             # Imagens e recursos
│   ├── App.jsx             # Componente principal
│   ├── App.css             # Estilos customizados
│   └── main.jsx            # Entry point
├── docs/                   # Documentação
│   ├── CONTRIBUTING.md
│   ├── ARCHITECTURE.md
│   └── TECHNICAL_SPEC.md
├── .github/                # GitHub Actions
│   └── workflows/
│       └── ci-cd.yml
├── public/                 # Arquivos públicos
└── README.md
```

## 🎨 Design System

### Paleta de Cores (Tech-Místico)
- **Background**: `oklch(0.08 0.02 270)` - Azul escuro profundo
- **Primary**: `oklch(0.65 0.25 270)` - Roxo vibrante
- **Accent**: `oklch(0.75 0.20 45)` - Dourado místico
- **Foreground**: `oklch(0.98 0.02 270)` - Branco azulado

### Efeitos Visuais
- **Glassmorphism**: Efeitos de vidro com blur
- **Partículas Flutuantes**: Animações cósmicas de fundo
- **Gradientes**: Transições suaves entre cores
- **Hover Effects**: Interações responsivas

## 📜 Scripts Disponíveis

```bash
# Desenvolvimento
pnpm run dev          # Inicia servidor de desenvolvimento
pnpm run dev --host   # Inicia com acesso externo

# Build
pnpm run build        # Gera build de produção
pnpm run preview      # Preview do build

# Qualidade de Código
pnpm run lint         # Executa ESLint
pnpm run lint:fix     # Corrige problemas automaticamente

# Deploy
pnpm run deploy       # Deploy para GitHub Pages
```

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Veja nosso [Guia de Contribuição](docs/CONTRIBUTING.md) para mais detalhes.

### Processo Rápido

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'feat: Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📋 Roadmap

### 🎯 Fase 1: MVP (2 semanas)
- [x] Interface React básica
- [x] Navegação entre telas
- [x] Design system implementado
- [ ] Autenticação simples
- [ ] Upload de imagens

### 🚀 Fase 2: Core Features (4 semanas)
- [ ] Scanner de realidade aumentada
- [ ] Backend com APIs
- [ ] Integração com IA para reconhecimento
- [ ] Sistema de portais funcionais

### ⭐ Fase 3: Marketplace (3 semanas)
- [ ] Descoberta de portais
- [ ] Sistema de avaliações
- [ ] Perfis de usuário
- [ ] Features sociais

### 🔥 Fase 4: Avançado (2 semanas)
- [ ] Integração blockchain/NFT
- [ ] Analytics avançados
- [ ] App mobile (React Native)
- [ ] Monetização

## 📊 Performance

### Métricas Alvo
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

### Lighthouse Score
- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 90+
- **SEO**: 90+

## 📄 Documentação

- 📖 [Guia de Contribuição](docs/CONTRIBUTING.md)
- 🏗️ [Arquitetura do Sistema](docs/ARCHITECTURE.md)
- 🔧 [Especificação Técnica](docs/TECHNICAL_SPEC.md)

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👥 Equipe

- **Gabriel Jaccoud** - *Desenvolvedor Principal* - [@GabrielJaccoud](https://github.com/GabrielJaccoud)

## 🙏 Agradecimentos

- [React](https://reactjs.org/) - Framework incrível
- [Vite](https://vitejs.dev/) - Build tool super rápido
- [Tailwind CSS](https://tailwindcss.com/) - CSS utilitário
- [shadcn/ui](https://ui.shadcn.com/) - Componentes lindos
- [Lucide](https://lucide.dev/) - Ícones perfeitos

---

<div align="center">
  <p>Feito com ❤️ para conectar arte e tecnologia</p>
  <p>
    <a href="https://github.com/GabrielJaccoud/portales-app">⭐ Star no GitHub</a> •
    <a href="https://github.com/GabrielJaccoud/portales-app/issues">🐛 Reportar Bug</a> •
    <a href="https://github.com/GabrielJaccoud/portales-app/issues">💡 Sugerir Feature</a>
  </p>
</div>




## 🔮 Evolução Futura: Integração com Geração de Mundo

Estamos planejando uma evolução significativa para o PORTALES, visando a integração com tecnologias avançadas de geração de mundo (inspiradas em modelos como o Genie-3 da Google DeepMind) e aprimorando a IA eAREAL. O objetivo é criar experiências de realidade aumentada ainda mais dinâmicas e personalizadas, onde os ambientes e interações se adaptam ao contexto e às escolhas do usuário.

### Visão Geral:

- **Mundos AR Dinâmicos:** Capacitar a eAREAL para gerar ou adaptar ambientes de RA em tempo real, respondendo a dados do usuário ou eventos específicos.
- **Narrativas Adaptativas:** Permitir que a IA crie e modifique elementos visuais e interativos nos portais de RA, tornando cada experiência única e contextualizada.
- **Personalização Profunda:** Aprofundar a conexão entre a arte digital e o estado do usuário, refletindo suas interações e progresso de forma visualmente impactante.

### Próximos Passos (Fases Iniciais):

1.  **Preparação do Backend:** Implementação de uma camada de abstração para futuras integrações com geradores de mundo, incluindo novas estruturas de dados para registrar ações de geração.
2.  **Evolução da eAREAL:** Aprimoramento da lógica da eAREAL para identificar "gatilhos criativos" e formular prompts contextuais para os sistemas de geração de mundo.
3.  **Prototipagem:** Desenvolvimento de protótipos iniciais para simular a geração de elementos de RA e validar o fluxo de dados.

Esta iniciativa posicionará o PORTALES na vanguarda da interseção entre arte, realidade aumentada e inteligência artificial generativa, oferecendo uma plataforma verdadeiramente inovadora para artistas e exploradores.


