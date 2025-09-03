# Arquitetura do PORTALES

Este documento descreve a arquitetura técnica do aplicativo PORTALES, incluindo decisões de design, padrões utilizados e estrutura do código.

## Visão Geral

O PORTALES é uma aplicação web progressiva (PWA) construída com React que permite transformar obras de arte físicas em portais digitais interativos através de realidade aumentada.

## Arquitetura Frontend

### Stack Tecnológico

- **React 19**: Framework principal para UI
- **Vite**: Build tool e servidor de desenvolvimento
- **Tailwind CSS**: Framework CSS utilitário
- **shadcn/ui**: Biblioteca de componentes
- **Framer Motion**: Animações e microinterações
- **Lucide React**: Ícones
- **pnpm**: Gerenciador de pacotes

### Estrutura de Componentes

```
src/
├── components/
│   ├── ui/                 # Componentes base (shadcn/ui)
│   ├── PortalButton.jsx    # Botão customizado
│   ├── PortalCard.jsx      # Card de portal
│   ├── Navigation.jsx      # Navegação inferior
│   ├── CosmicLoader.jsx    # Loader animado
│   └── FloatingParticles.jsx # Partículas de fundo
├── hooks/
│   └── use-mobile.js       # Hook para detecção mobile
├── lib/
│   └── utils.js            # Utilitários (cn, etc.)
└── assets/
    └── LOGO.png            # Logo oficial
```

### Padrões de Design

#### 1. Composição de Componentes
- Componentes pequenos e focados
- Props bem definidas
- Reutilização através de composição

#### 2. Estado Local vs Global
- Estado local com `useState` para UI simples
- Context API para estado compartilhado (futuro)
- React Query para estado do servidor (futuro)

#### 3. Estilização
- Tailwind CSS para estilos utilitários
- CSS customizado para animações específicas
- Variáveis CSS para tema consistente

## Design System

### Paleta de Cores (Tech-Místico)

```css
:root {
  --background: oklch(0.08 0.02 270);     /* Azul escuro */
  --foreground: oklch(0.98 0.02 270);     /* Branco azulado */
  --primary: oklch(0.65 0.25 270);        /* Roxo vibrante */
  --accent: oklch(0.75 0.20 45);          /* Dourado */
  --card: oklch(0.12 0.03 270);           /* Azul card */
  --border: oklch(0.25 0.05 270);         /* Borda sutil */
}
```

### Componentes Customizados

#### PortalButton
- Variantes: default, outline, ghost, cosmic
- Efeitos de hover com gradientes
- Animações de shimmer

#### PortalCard
- Layout consistente para portais
- Estados visuais (active, featured, inactive)
- Hover effects com transformações

#### Navigation
- Navegação inferior fixa
- Indicadores de aba ativa
- Ícones com labels

### Animações e Efeitos

#### Partículas Flutuantes
- Geradas dinamicamente
- Movimento suave com CSS animations
- Performance otimizada

#### Glassmorphism
- Backdrop blur effects
- Transparência sutil
- Bordas luminosas

## Estrutura de Dados

### Portal Object
```javascript
{
  id: number,
  title: string,
  artist: string,
  image: string,
  views: number,
  likes: number,
  status: 'active' | 'inactive' | 'featured',
  content: {
    type: 'video' | 'audio' | 'nft' | 'website',
    url: string,
    metadata: object
  }
}
```

### User Object (Futuro)
```javascript
{
  id: string,
  name: string,
  email: string,
  avatar: string,
  role: 'creator' | 'explorer' | 'admin',
  subscription: 'free' | 'pro',
  createdPortals: Portal[],
  favoritePortals: Portal[]
}
```

## Performance

### Otimizações Implementadas

1. **Code Splitting**: Componentes carregados sob demanda
2. **Lazy Loading**: Imagens carregadas conforme necessário
3. **CSS Optimization**: Tailwind purge para CSS mínimo
4. **Bundle Analysis**: Vite bundle analyzer

### Métricas Alvo

- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

## Segurança

### Medidas Implementadas

1. **Content Security Policy**: Headers de segurança
2. **Input Sanitization**: Validação de dados
3. **HTTPS Only**: Comunicação segura
4. **Dependency Scanning**: Auditoria automática

## Acessibilidade

### Padrões Seguidos

- **WCAG 2.1 AA**: Conformidade com diretrizes
- **Semantic HTML**: Estrutura semântica
- **ARIA Labels**: Acessibilidade para screen readers
- **Keyboard Navigation**: Navegação por teclado
- **Color Contrast**: Contraste adequado

## CI/CD Pipeline

### GitHub Actions Workflows

1. **Test**: Linting, testes, build
2. **Deploy**: GitHub Pages deployment
3. **Security**: Auditoria de dependências
4. **Lighthouse**: Análise de performance

### Ambientes

- **Development**: Local development server
- **Staging**: Preview deployments (PRs)
- **Production**: GitHub Pages

## Futuras Expansões

### Backend Architecture (Planejado)

```
Backend Services:
├── API Gateway
├── Authentication Service
├── Portal Management Service
├── AI Recognition Service
├── File Storage Service
└── Analytics Service
```

### Mobile App (React Native)

- Código compartilhado com web
- Funcionalidades de câmera nativas
- Push notifications
- Offline capabilities

### Integrações Planejadas

- **AI Services**: Google Vision, AWS Rekognition
- **Blockchain**: NFT minting, wallet integration
- **Payment**: Stripe, PayPal
- **Analytics**: Google Analytics, Mixpanel
- **Storage**: AWS S3, Cloudinary

## Monitoramento

### Ferramentas (Futuro)

- **Error Tracking**: Sentry
- **Performance**: New Relic
- **Analytics**: Google Analytics
- **Uptime**: Pingdom

---

Esta arquitetura foi projetada para ser escalável, mantível e performática, seguindo as melhores práticas de desenvolvimento React moderno.



