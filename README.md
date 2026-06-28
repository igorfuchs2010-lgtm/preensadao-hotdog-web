# 🌭 Cachorrão Prensado - Site Oficial

Site moderno, responsivo e atrativo para o **Cachorrão Prensado**, tradicional cachorro-quente prensado localizado na Rua XV de Novembro em Guarapuava - PR.

## 📋 Sobre o Projeto

Este é um site institucional completo com todas as funcionalidades necessárias para divulgar o Cachorrão Prensado e facilitar pedidos online via WhatsApp.

## ✨ Funcionalidades

### 🏠 Página Inicial
- Hero impactante com gradiente animado
- Slogan destacado: *"O cachorro-quente prensado tradicional de Guarapuava"*
- Botão de pedido rápido para WhatsApp
- Animações suaves e elementos flutuantes

### 🍔 Cardápio Completo
- **Filtros por categoria**: Tradicionais, Especiais, Combos, Extras
- **10+ itens** detalhados com descrições e preços
- Botão de pedido individual por item
- Cards animados com efeitos hover

**Itens do Cardápio:**
- Cachorrão Completo - R$ 18,90
- Cachorrão Simples - R$ 14,90
- Cachorrão Duplo - R$ 22,90
- Cachorrão Bacon - R$ 22,90
- Cachorrão Cheddar - R$ 23,90
- Cachorrão Ovo - R$ 19,90
- Combo Casal - R$ 44,90
- Combo Família - R$ 79,90
- Porção de Batata Frita - R$ 16,90
- Refrigerante Lata - R$ 6,00

### 👨‍🍳 Sobre Nós
- História e tradição na Rua XV de Novembro
- Cards de diferenciais (Ingredientes Frescos, Receita Tradicional, Feito na Hora, Delivery Rápido)

### 🔥 Promoções Semanais
- Destaque: Cachorrão Duplo + Refri
- Combo Casal (Terça/Quarta)
- Sexta do Bacon
- Combo Família no Sábado
- Domingo em Família (brinde batata)

### 💬 Depoimentos
- 6 depoimentos de clientes reais
- Sistema de 5 estrelas
- Avatares personalizados

### 📍 Localização
- Mapa interativo do Google Maps (coordenadas reais: -25.3902434, -51.4625697)
- Rua XV de Novembro, Centro, Guarapuava - PR
- Horário completo de funcionamento
- Botão "Como Chegar"

### 📞 Contato
- WhatsApp, telefone e e-mail
- Formulário com máscara automática de telefone
- Links para Instagram, Facebook, TikTok
- Integração direta com WhatsApp

### 🛒 Pedidos Online
- Botão flutuante de WhatsApp (em todas as páginas)
- Pedidos diretos do cardápio com 1 clique
- CTA final "Peça já" destacado

## 🎨 Design

- **Paleta de cores quentes**: Vermelho (#E63946), Laranja (#F77F00), Amarelo (#FCBF49)
- **Tipografia**: Bebas Neue (títulos), Pacifico (destaques), Poppins (corpo)
- **Estilo**: Jovem, vibrante e acolhedor
- **Animações**: Suaves e modernas (parallax, fade-in, hover effects)

## 📱 Responsividade

✅ Mobile-first
✅ Breakpoints: 480px, 768px, 992px
✅ Menu hamburger funcional
✅ Layout adaptativo para tablets e desktops

## 🚀 Como Usar

### Opção 1: Abrir Diretamente
Simplesmente abra o arquivo `index.html` no seu navegador.

### Opção 2: Servidor Local (Recomendado)

**Com Python:**
```bash
cd preensadao
python -m http.server 8000
# Acesse: http://localhost:8000
```

**Com Node.js:**
```bash
npx serve
```

## 🌐 Site no Ar

O site está disponível online no GitHub Pages:

👉 **https://igorfuchs2010-lgtm.github.io/preensadao-hotdog-web/**

## 📁 Estrutura de Arquivos

```
preensadao/
├── index.html              # Estrutura HTML completa
├── styles.css              # Todos os estilos e responsividade
├── script.js               # Interatividade e animações
├── README.md               # Este arquivo
├── .gitignore              # Arquivos ignorados pelo Git
└── .github/workflows/      # Deploy automático
    └── deploy.yml
```

## ⚙️ Personalizações Necessárias

Antes de colocar em produção, você precisa ajustar:

### 📞 Telefone/WhatsApp
Substitua `5542999999999` pelo número real em **todos os arquivos**:
```bash
# Buscar todas as ocorrências:
5542999999999
# Substituir por: SEU_NUMERO_AQUI
```

### 📍 Endereço
A localização já está configurada com as coordenadas reais do Google Maps. Ajuste o número/endereço específico se necessário.

### 🕐 Horário de Funcionamento
Atualize os horários em `index.html` conforme real funcionamento.

### 📱 Redes Sociais
Atualize os links em `index.html`:
```html
<a href="https://instagram.com/cachorraoprensado" ...>
<a href="https://facebook.com/cachorraoprensado" ...>
```

### 💰 Preços e Itens
Edite os preços e descrições dos itens no `index.html` (seção cardápio).

## 🌐 Publicação Online

Este site está publicado via **GitHub Pages** com deploy automático:
- Cada commit é automaticamente publicado em ~1 minuto
- Domínio: `igorfuchs2010-lgtm.github.io/preensadao-hotdog-web`

## 🎁 Easter Egg 🥚

Clique 5 vezes no logo do Cachorrão Prensado para ativar uma chuva de emojis de lanches! 🌭🍔🍟

## 📊 Compatibilidade

✅ Chrome, Firefox, Edge, Safari (versões modernas)
✅ iOS Safari e Chrome Mobile
✅ Tablets e smartphones
✅ Leitores de tela (semântica HTML5)

## 📝 Recursos Técnicos

- HTML5 semântico
- CSS3 com variáveis customizadas
- JavaScript vanilla (sem dependências)
- Font Awesome 6.5 (ícones)
- Google Fonts (Bebas Neue, Pacifico, Poppins)
- Intersection Observer API (animações)
- Scroll suave nativo
- SEO otimizado (meta tags)
- GitHub Actions (deploy automático)

---

**Feito com 💛 em Guarapuava - PR**

*"O cachorro-quente prensado tradicional de Guarapuava"* 🌭