# Cachorrão Prensado - Site Oficial

Site institucional do **Cachorrão Prensado**, tradicional cachorro-quente prensado no centro de Guarapuava - PR, pertinho da Praça Clève.

## Informações do Estabelecimento

- **Endereço:** Rua XV de Novembro, 6968 - Centro, Guarapuava - PR (CEP 85010-000)
- **Telefone / WhatsApp:** (42) 3623-1368
- **Horário:** Todos os dias, das 18h às 23h
- **Instagram:** [@cachorraoprensadoxv_](https://www.instagram.com/cachorraoprensadoxv_/)
- **Google Maps:** [Cachorrão Prensado](https://www.google.com/maps/place/Cachorr%C3%A3o+Prensado/@-25.3902434,-51.4625697,17z) — 4,4 (348+ avaliações)

## Sobre o Projeto

Site feito pra divulgar o Cachorrão Prensado e facilitar pedidos pelo WhatsApp. Os dados foram tirados do Google Maps, do Instagram e de avaliações reais.

## O que tem no site

### Página inicial
Hero com endereço em destaque, botões pra pedir pelo WhatsApp e ver rota no Google Maps, além de estatísticas reais (4,4 no Google, 348+ avaliações).

### Cardápio
Filtros por categoria (Tradicionais, Frango, Especiais, Combos, Extras), fotos reais dos pratos, botão de pedido por item direto no WhatsApp.

Cardápio inclui:
- Cachorrão Tradicional, Simples e Prensadão
- Cachorrão de Frango e Frango com Cheddar
- Bacon Lover, Cheddar Duplo, Da Casa
- Combos Casal e Família
- Porções, refrigerantes e sucos naturais

### Sobre Nós
Texto sobre o cachorrão, com a foto real da fachada.

### Promoções da Semana
- Cachorrão de Frango + Refri
- Combo Casal (segunda e terça)
- Quarta do Bacon (quarta e quinta)
- Combo Família (sexta e sábado)
- Domingo em Família (brinde batata)

### Depoimentos
6 avaliações reais do Google e RestaurantGuru, com as fotos dos pratos.

### Localização
Mapa do Google Maps (coordenadas reais), endereço completo, horário.

### Contato
WhatsApp, telefone e Instagram. Formulário que abre conversa pré-formatada no WhatsApp.

### Pedidos Online
Botão flutuante de WhatsApp em todas as páginas, pedidos do cardápio com 1 clique.

## Design

- Paleta quente: vermelho (#E63946), laranja (#F77F00), amarelo (#FCBF49)
- Fontes: Bebas Neue (títulos), Pacifico (destaques), Poppins (corpo)
- Animações suaves, parallax no hero, fade-in no scroll

## Responsividade

- Mobile-first
- Breakpoints: 480px, 768px, 992px
- Menu hamburger funcional

## Como rodar localmente

Abrir o `index.html` no navegador, ou usar um servidor local:

```bash
cd preensadao
python -m http.server 8000
# Acessar: http://localhost:8000
```

Ou com Node.js:

```bash
npx serve
```

## Site no ar

Publicado via GitHub Pages: https://igorfuchs2010-lgtm.github.io/preensadao-hotdog-web/

## Estrutura

```
preensadao/
├── index.html              # Estrutura HTML completa
├── styles.css              # Estilos e responsividade
├── script.js               # Interatividade e animações
├── README.md               # Este arquivo
├── .gitignore              # Arquivos ignorados pelo Git
├── assets/
│   └── photos/             # Fotos reais do estabelecimento
└── .github/workflows/      # Deploy automático
    └── deploy.yml
```

## Personalizações

Todos os dados já estão preenchidos com informações reais:

- **Telefone/WhatsApp:** (42) 3623-1368 (wa.me/554236231368)
- **Endereço:** Rua XV de Novembro, 6968 - Centro, Guarapuava - PR
- **Horário:** Todos os dias das 18h às 23h
- **Instagram:** @cachorraoprensadoxv_

Pra atualizar preço de algum item do cardápio, editar diretamente o `index.html`.

## Deploy

Cada commit na `main` é publicado automaticamente via GitHub Actions em cerca de 1 minuto.

## Easter egg

Clicar 5 vezes no logo do Cachorrão Prensado na barra de navegação. Funciona, fica a dica.

## Compatibilidade

- Chrome, Firefox, Edge, Safari (versões modernas)
- iOS Safari e Chrome Mobile
- Tablets e smartphones
- Leitores de tela (HTML5 semântico)

## Recursos Técnicos

- HTML5 semântico
- CSS3 com variáveis customizadas
- JavaScript vanilla (sem dependências)
- Font Awesome 6.5
- Google Fonts (Bebas Neue, Pacifico, Poppins)
- Intersection Observer API
- GitHub Actions (deploy automático)

---

Feito em Guarapuava - PR.