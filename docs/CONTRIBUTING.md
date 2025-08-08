# Guia de Contribuição - PORTALES

Obrigado por seu interesse em contribuir com o projeto PORTALES! Este documento fornece diretrizes para contribuir com o desenvolvimento do aplicativo.

## Como Contribuir

### 1. Fork e Clone

1. Faça um fork do repositório
2. Clone seu fork localmente:
   ```bash
   git clone https://github.com/SEU_USERNAME/portales-app.git
   cd portales-app
   ```

### 2. Configuração do Ambiente

1. Instale as dependências:
   ```bash
   pnpm install
   ```

2. Inicie o servidor de desenvolvimento:
   ```bash
   pnpm run dev
   ```

### 3. Criando uma Branch

Crie uma branch para sua feature ou correção:
```bash
git checkout -b feature/nome-da-feature
# ou
git checkout -b fix/nome-do-bug
```

### 4. Padrões de Código

- Use ESLint para manter a consistência do código
- Siga as convenções de nomenclatura do React
- Escreva componentes funcionais com hooks
- Use TypeScript quando possível
- Mantenha os componentes pequenos e reutilizáveis

### 5. Commits

Use mensagens de commit descritivas seguindo o padrão:
```
tipo(escopo): descrição

feat(components): adiciona componente PortalScanner
fix(navigation): corrige bug na navegação mobile
docs(readme): atualiza instruções de instalação
```

Tipos de commit:
- `feat`: nova funcionalidade
- `fix`: correção de bug
- `docs`: documentação
- `style`: formatação, ponto e vírgula, etc
- `refactor`: refatoração de código
- `test`: adição ou correção de testes
- `chore`: tarefas de manutenção

### 6. Pull Request

1. Faça push da sua branch:
   ```bash
   git push origin feature/nome-da-feature
   ```

2. Abra um Pull Request no GitHub
3. Descreva suas mudanças claramente
4. Aguarde a revisão

## Estrutura do Projeto

```
portales-app/
├── src/
│   ├── components/     # Componentes React
│   ├── hooks/         # Hooks customizados
│   ├── lib/           # Utilitários
│   ├── assets/        # Imagens e recursos
│   └── App.jsx        # Componente principal
├── docs/              # Documentação
├── .github/           # Workflows GitHub
└── public/            # Arquivos públicos
```

## Diretrizes de Design

### Tema "Tech-Místico"
- Use a paleta de cores definida (roxo, azul neon, dourado)
- Implemente efeitos glassmorphism
- Adicione animações suaves
- Mantenha partículas flutuantes no background

### Componentes UI
- Use shadcn/ui como base
- Customize com as cores do PORTALES
- Mantenha consistência visual
- Priorize acessibilidade

## Reportando Bugs

Ao reportar bugs, inclua:
- Descrição clara do problema
- Passos para reproduzir
- Comportamento esperado vs atual
- Screenshots se aplicável
- Informações do ambiente (browser, OS)

## Sugerindo Features

Para sugerir novas funcionalidades:
- Descreva o problema que a feature resolve
- Explique a solução proposta
- Considere alternativas
- Adicione mockups se possível

## Código de Conduta

- Seja respeitoso e inclusivo
- Aceite feedback construtivo
- Foque no que é melhor para o projeto
- Ajude outros contribuidores

## Dúvidas?

Se tiver dúvidas, abra uma issue ou entre em contato através dos canais oficiais do projeto.

---

**Obrigado por contribuir com o PORTALES!** 🚀

