# Blueprint Visual e Estrutural — Baseado no Modelo de Referência (AquaClean)

Este documento descreve detalhadamente a estrutura, ordem de seções, componentes e estilos visuais identificados a partir dos arquivos de referência da pasta `/04-referencia-visual/`. Trata-se de uma descrição fiel do modelo, sem adições ou códigos.

---

## 1. Estilo Visual Identificado (Design System)

### Paleta de Cores
*   **Fundo Geral / Neutro Claro:** `#FFFFFF`
*   **Fundos de Apoio Claros (Seções de Contraste):**
    *   `#F6F7FB` (Extra Light Background)
    *   `#F0F0F0` (Smooth Dark Background)
    *   `#E9E9E9` (Light Background)
*   **Fundo Escuro / Overlays:**
    *   `#080C14` (Extra Dark Background)
    *   `#000000` (Dark Background)
*   **Cores de Destaque (Brand / Call-to-Actions):**
    *   `#4A6058` (Cor Principal de Botão - Verde Floresta/Cinza-Escuro Muted)
    *   `#7D8D87` (Cor de Hover do Botão - Verde Muted Claro)
*   **Cores de Destaque Secundárias (Teal):**
    *   `#97C6C2` (Teal Suave)
    *   `#C1DDDA` (Teal Claro)
*   **Tipos de Texto:**
    *   `#1F2122` (Títulos / Headings)
    *   `#353738` (Texto Geral / Body)

### Tipografia
*   **Títulos (Headings):** Fonte **Outfit** (Sans-serif)
    *   Peso Visual: **600 (Semibold)**
    *   Tamanhos: Desktop `48px` | Tablet `37px` | Mobile `30px`
    *   Line-height: `1.2em`
    *   Letter-spacing: `-1px` (títulos principais) ou `-0.5px` (títulos secundários)
*   **Texto Geral (Body):** Fonte **Inter** (Sans-serif)
    *   Peso Visual: **400 (Normal)**
    *   Tamanhos: Desktop `16px` | Tablet `15px` | Mobile `14px`
    *   Line-height: `1.4em`
*   **Acentuações / Elementos de Destaque:** Fonte **Outfit**
    *   Peso Visual: **600 (Semibold)**
    *   Tamanhos: Desktop `13px` | Tablet `12px`
    *   Line-height: `1`

### Espaçamentos e Layouts
*   **Espaçamento entre Seções (Paddings):**
    *   Padrão Geral: `7em` superior e `7em` inferior (reduzido para `5em` ou `3em` em seções menores).
    *   Responsivo: `3em` a `5em` no tablet, `2em` a `3em` no mobile.
*   **Bordas Arredondadas (Border Radius):**
    *   Cards, imagens e contêineres principais: `15px`.
    *   Selos circulares e ícones: `50%`.
    *   Botões e campos de formulário arredondados (tipo pílula): `30px` ou `21px`.
*   **Sombras (Box Shadow):**
    *   Aplicada em cards e contêineres sobrepostos: Sombra difusa suave (`horizontal: 0`, `vertical: 0`, `blur: 60px`, `spread: 0`, cor `rgba(0, 0, 0, 0.1)`).

### Tratamento de Imagens
*   Fotos em colunas possuem cantos arredondados de `15px`.
    *   Imagens de fundo utilizam `background-size: cover` e `background-position: center center`.
    *   Uso constante de overlays de gradiente escuro (`#080C14` a `#080C141A` com opacidade de 100%) em fundos fotográficos para garantir legibilidade dos textos.

---

## 2. Estrutura do Header (Cabeçalho)

*   **Comportamento:** Fixo (`sticky` no topo) com layout em duas faixas horizontais de contêineres:
    
    ### Faixa Superior (Top Bar)
    *   **Tipo:** Contêiner em linha (`row`) de altura reduzida.
    *   **Elementos Presentes:**
        *   Esquerda: Lista de ícones (`icon-list`) horizontal contendo telefone (`+6221.2002.2013`) e horário de funcionamento (`09.00 - 21.00`).
        *   Direita: Redes Sociais (`social-icons`) horizontais (Facebook, Instagram, Twitter, Youtube) em cores customizadas.
        *   Comportamento Mobile: Centralizado.

    ### Faixa Principal (Navigation Bar)
    *   **Tipo:** Contêiner em linha (`row`) com alinhamento vertical centralizado.
    *   **Elementos Presentes (Ordem de esquerda para direita):**
        1.  **Logo:** Elemento de imagem alinhado à esquerda com altura fixa de `49px`.
        2.  **Menu de Navegação:** Elemento `nav-menu` alinhado à direita com espaçamento horizontal zerado entre itens.
        3.  **Botão CTA:** Botão "Get Started" alinhado à direita.
    *   **Comportamento Mobile / Tablet:**
        *   O botão CTA é ocultado no mobile.
        *   A coluna do Logo passa a ocupar `80%` (mobile) ou `72%` (tablet) da largura.
        *   O menu de navegação colapsa em um ícone de hambúrguer (`ti-menu`), que ativa uma gaveta mobile (`dropdown_border_radius` de `15px` nos cantos inferiores) e muda o ícone para fechar (`ti-close`). A coluna do menu ocupa `20%` (mobile) ou `8%` (tablet) da largura.

---

## 3. Ordem Exata das Seções (Homepage)

Abaixo está o fluxo vertical da página index, listado de cima para baixo:

### Seção 1: Hero Section (#hero)
*   **Tipo:** Banner principal de tela cheia com fundo dinâmico.
*   **Fundo:** Slideshow de 4 imagens em transição com efeito Ken Burns e overlay de gradiente escuro.
*   **Estrutura de Conteúdo:**
    *   Coluna única de conteúdo alinhada à esquerda (ocupando `50%` da largura no desktop, `65%` no tablet e largura total no mobile).
    *   Título Principal (H1) com tipografia Outfit 48px.
    *   Subtítulo / Descrição curta com tipografia Inter 16px.
    *   Botão CTA principal ("Discover more") com fundo branco, texto na cor principal e hover na cor de hover do botão.

### Seção 2: Contêiner Flutuante de Formulário / Contato (#booking-bar)
*   **Tipo:** Barra de conversão horizontal sobreposta.
*   **Comportamento Visual:** Margem superior negativa (`-6em`) para sobrepor a parte inferior da Hero Section. Fundo branco, cantos arredondados de `15px` e sombra suave de `60px` de desfoque.
*   **Estrutura de Conteúdo:**
    *   **Coluna 1 (Largura 35%):** Fundo fotográfico (carro sujo) com overlay escuro. Contém 2 blocos de ícone horizontais (`icon-box`):
        *   Bloco 1: Ícone de telefone, título "Customer Services" e número de telefone.
        *   Bloco 2: Ícone de e-mail, título "Send a message" e endereço de e-mail.
    *   **Coluna 2 (Largura 65%):** Formulário de agendamento rápido com inputs de cantos arredondados (`30px`) e botão CTA de envio ("Booking Now!") ocupando `33%` da largura (50% no tablet).

### Seção 3: Quem Somos / Sobre (#sobre)
*   **Tipo:** Seção de apresentação em duas colunas.
*   **Estrutura de Conteúdo:**
    *   **Coluna 1 (Largura 45%):** Bloco de texto com alinhamento à esquerda.
        *   Tagline pequena ("Who we are") acima do título.
        *   Título H2 ("Driven by Excellence: AquaClean Journey").
        *   Parágrafo descritivo longo.
        *   Linha divisória horizontal.
        *   2 blocos de ícone horizontais (`icon-box`):
            *   Bloco 1: Ícone de carro, título "Car Wash Services" e descrição curta.
            *   Bloco 2: Ícone de pincel de pintura, título "Detailing Services" e descrição curta.
    *   **Coluna 2 (Largura 55%):** Imagem principal com cantos arredondados (`15px`).
        *   Selo circular flutuante ("15+") representando anos de experiência. Possui formato circular perfeito (`50%` border-radius), fundo branco, sombra projetada e tamanho de `200px` (reduzido para `150px` no mobile).

### Seção 4: Seção de Marcas / Logos (#brands)
*   **Tipo:** Carrossel/Lista estática horizontal de logotipos.
*   **Estrutura de Conteúdo:**
    *   Título centralizado em largura contida (`600px`).
    *   Linha horizontal contendo 7 logotipos de marcas parceiras em formato SVG.
    *   Cada logo possui largura flexível de `19%` no desktop (`23%` no tablet, `45%` no mobile), altura fixa de `70px` e cantos levemente arredondados de `7px`.

### Seção 5: Seção de Valor / Fundo de Destaque (#value-hero)
*   **Tipo:** Banner de transição de conteúdo centrado.
*   **Fundo:** Imagem de fundo fixa com overlay escuro.
*   **Estrutura de Conteúdo:**
    *   Contêiner centralizado e contido (`600px`).
    *   Tagline pequena centralizada ("Our Value").
    *   Título H2 centralizado ("AquaClean: Because Your Car Deserves the Best.").
    *   Parágrafo descritivo centralizado.

### Seção 6: Detalhamento de Valores com Testemunhal Flutuante (#value-details)
*   **Tipo:** Apresentação em duas colunas com card flutuante sobreposto.
*   **Estrutura de Conteúdo:**
    *   **Coluna 1 (Largura 50% - Layout de duas subcolunas):**
        *   Subcoluna 1 (48% de largura): Imagem vertical com cantos arredondados.
        *   Subcoluna 2 (48% de largura):
            *   Imagem vertical com cantos arredondados.
            *   Card flutuante de depoimento sobreposto à esquerda com margem negativa (`-5em`). Possui fundo branco, cantos arredondados de `15px`, padding de `2em` e sombra projetada de `60px`. Contém:
                *   Avaliação em estrelas (star-rating).
                *   Texto do depoimento em destaque com borda lateral esquerda (border-left de `5px`).
                *   Bloco de autor com nome e cargo.
    *   **Coluna 2 (Largura 50%):** Bloco de texto com alinhamento à esquerda.
        *   Título H2 ("AquaClean: Because Your Car Deserves the Best.").
        *   Parágrafo descritivo longo.
        *   2 blocos de ícone horizontais (`icon-box`) de contato:
            *   Bloco 1: Ícone de telefone, título "Customer Services" e número de telefone.
            *   Bloco 2: Ícone de telefone, título "Online Booking" e número de telefone alternativo.
        *   Botão CTA ("Discover more").

### Seção 7: Grade de Serviços (#servicos)
*   **Tipo:** Grade de cards em colunas.
*   **Estrutura de Conteúdo:**
    *   Cabeçalho da seção centralizado em contêiner contido (`600px`): Tagline pequena ("Our Services"), Título H2 ("AquaClean: Keeping Your Car Fresh and Flawless.") e parágrafo de introdução.
    *   Grade de 6 cards de serviços dispostos em 3 colunas (desktop) e 2 colunas (tablet):
        *   **Estrutura de cada card:** Largura de `32%`, fundo branco, cantos arredondados de `15px`, sombra de `60px`.
        *   **Elementos internos do card:**
            *   Imagem de cabeçalho do card: Ocupa toda a largura superior do card (`100%`), recortada nos cantos superiores pelo contêiner do card.
            *   Ícone flutuante: Ícone circular posicionado em cima da linha divisória entre a imagem e o texto, com borda arredondada de `50%`, sombra projetada e fundo com cor contrastante.
            *   Título do Serviço (Heading H3).
            *   Texto descritivo do serviço.
            *   Link/Botão de ação rápida ("Learn more") alinhado com ícone de seta para a direita.

### Seção 8: Processo / Como Funciona (#como-funciona)
*   **Tipo:** Grade de etapas com efeito interativo.
*   **Fundo:** Imagem de fundo sutil (`dashed.png`) que simula caminhos pontilhados conectando as etapas.
*   **Estrutura de Conteúdo:**
    *   Cabeçalho da seção centralizado em contêiner contido (`600px`): Tagline pequena ("How it works") e Título H2 ("Driving Elegance Starts with AquaClean.").
    *   Grade de 4 colunas horizontais contendo cartões de virada interativos (`flip-box`):
        *   **Frente do Card (Círculo):** Formato circular (`50%` border-radius), fundo de cor Teal Suave (`#97C6C2`) misturado com cinza claro. Contém ícone em caixa empilhada (`icon_view: stacked`), título da etapa ("Step 1", "Step 2", etc.) e descrição rápida da ação.
        *   **Verso do Card (Círculo):** Mantém o formato circular com fundo Teal Suave. Contém título detalhado da etapa, parágrafo descritivo longo e botão CTA de ação arredondado em estilo pílula (`21px` border-radius).

### Seção 9: CTA de Vídeo (#video-cta)
*   **Tipo:** Seção com elemento de vídeo integrado e fundo fotográfico.
*   **Fundo:** Imagem de fundo com overlay escuro.
*   **Estrutura de Conteúdo:**
    *   Contêiner centralizado e contido (`720px`).
    *   Caixa de conteúdo interna com fundo escuro semi-transparente (`#080C1480`), cantos arredondados de `14px` e padding interno de `3em`.
    *   Botão de Play de vídeo (`elementskit-video`): botão circular grande (largura `100px`, tamanho do ícone `35px`) com o texto "Play Video".
    *   Título H2 centralizado ("AquaClean: Making Every Drive Memorable.").
    *   Parágrafo descritivo centralizado.
    *   Botão CTA de agendamento ("Book Now") centralizado com ícone de seta para a direita.

### Seção 10: Seção de Diferenciais (#diferenciais)
*   **Tipo:** Grade de diferenciais em colunas.
*   **Estrutura de Conteúdo:**
    *   Cabeçalho da seção centralizado em contêiner contido (`600px`): Tagline pequena ("WHY CHOOSE US") e Título H2 ("Outstanding Car Wash Service Excellence").
    *   Grade de 6 blocos dispostos em 3 colunas (desktop) e 2 colunas (tablet):
        *   Cada bloco (largura `32%`) possui cantos arredondados de `15px` e padding de `2em`.
        *   Cada bloco contém um widget de caixa de ícone (`icon-box`): Ícone de tamanho grande (`42px`), título do diferencial e descrição curta.

### Seção 11: Depoimentos / Carrossel (#depoimentos)
*   **Tipo:** Seção de depoimentos dinâmicos.
*   **Fundo:** Fundo sutil com estampa de bolhas (`bubblee-AquaClean.png`) e overlay de cor cinza claro semi-transparente (`#F6F7FBF2` a `75%` de opacidade).
*   **Estrutura de Conteúdo:**
    *   Cabeçalho da seção centralizado em contêiner contido (`600px`): Tagline pequena ("Testimonial"), Título H2 ("Client Feedback & Reviews") e avaliação geral em estrelas.
    *   Carrossel de depoimentos (`testimonial-carousel`):
        *   Os slides individuais possuem cantos arredondados de `15px` e padding interno de `3%`.
        *   Cada slide possui foto do cliente (tamanho `70px`, com borda branca espessa de `5px` ao redor), texto do depoimento e nome do cliente.

### Seção 12: CTA Final de Fidelidade (#fidelidade-cta)
*   **Tipo:** Banner de fechamento e conversão de duas colunas com alinhamento assimétrico.
*   **Fundo:** Imagem de fundo fotográfica de largura total.
*   **Estrutura de Conteúdo:**
    *   **Coluna 1 (Largura 50%):** Totalmente vazia para dar visibilidade à imagem de fundo.
    *   **Coluna 2 (Largura 50%):** Alinhada à direita (`flex-align-items: flex-end` no desktop). Contém:
        *   Título H2 na cor branca ("Join Our Loyalty Program for Exclusive Discounts on Your Next Car Wash.").
        *   Parágrafo descritivo longo.
        *   Botão CTA ("Discover More") alinhado à esquerda dentro da coluna de conteúdo.

---

## 4. Estrutura do Footer (Rodapé)

*   **Comportamento:** Rodapé completo dividido em duas áreas principais:

    ### Área Superior do Rodapé (Main Footer)
    *   **Tipo:** Contêiner em linha (`row`) dividido em 4 colunas verticais com padding de `3em` superior/inferior:
        1.  **Coluna 1 (Largura 30%):**
            *   Logo em formato reduzido (`49px` de altura).
            *   Parágrafo longo de descrição institucional.
            *   Ícones de redes sociais horizontais alinhados à esquerda (Facebook, Instagram, Twitter, Youtube) em cores customizadas.
        2.  **Coluna 2 (Largura 20%):**
            *   Título de seção: "Support".
            *   Lista vertical de links de suporte (`icon-list`), sem ícones associados (apenas links em formato texto).
        3.  **Coluna 3 (Largura 20%):**
            *   Título de seção: "Get in Touch".
            *   Lista vertical com 3 blocos de contato com ícone (`icon-list`): endereço físico, e-mails e telefones de contato.
        4.  **Coluna 4 (Largura 30%):**
            *   Título de seção: "News Letter".
            *   Texto de chamada de inscrição.
            *   Formulário de e-mail integrado (`form`) com input de cantos arredondados apenas à esquerda (`30px`) e botão CTA de envio ("sign up") com cantos arredondados apenas à direita (`30px`), formando um único bloco visual acoplado.
    *   **Responsividade (Tablet/Mobile):**
        *   A Coluna 1 passa a ocupar 100% da largura no tablet, centralizando o texto, o logo e as redes sociais.
        *   A Coluna 2 ocupa 40% (mobile) ou 20% (tablet).
        *   A Coluna 3 ocupa 60% (mobile) ou 35% (tablet).
        *   A Coluna 4 ocupa largura total (mobile) ou 45% (tablet).

    ### Área de Direitos Autorais (Copyright Bar)
    *   **Tipo:** Faixa inferior estreita com borda superior fina de `1px`.
    *   **Elementos Presentes:**
        *   Esquerda: Texto de Copyright ("Copyright © 2023 AquaClean, All rights reserved...").
        *   Direita: Links horizontais de políticas de Termos de Serviço, Privacidade e Cookies (`icon-list`).
        *   Comportamento Mobile: Elementos empilhados e centralizados.
