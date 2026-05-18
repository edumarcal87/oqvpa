import { defineConfig } from "tinacms";

export default defineConfig({
  branch: process.env.TINA_BRANCH || "main",
  clientId: process.env.TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },

  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public",
    },
  },

  schema: {
    collections: [

      // ── HERO ──────────────────────────────────
      {
        name: "hero",
        label: "Início (Hero)",
        path: "content",
        match: { include: "hero" },
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          {
            type: "string",
            name: "tag",
            label: "Tag de destaque (ex: Ciência · Astronomia)",
          },
          {
            type: "string",
            name: "descricao",
            label: "Descrição",
            ui: { component: "textarea" },
          },
          {
            type: "string",
            name: "btnPrimarioTexto",
            label: "Botão Principal — Texto",
          },
          {
            type: "string",
            name: "btnPrimarioLink",
            label: "Botão Principal — Link",
          },
          {
            type: "string",
            name: "btnSecundarioTexto",
            label: "Botão Secundário — Texto",
          },
          {
            type: "string",
            name: "btnSecundarioLink",
            label: "Botão Secundário — Link",
          },
        ],
      },

      // ── SOBRE ─────────────────────────────────
      {
        name: "sobre",
        label: "Sobre o Bernardo",
        path: "content",
        match: { include: "sobre" },
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: "string", name: "titulo", label: "Título" },
          {
            type: "string",
            name: "paragrafo1",
            label: "Parágrafo 1",
            ui: { component: "textarea" },
          },
          {
            type: "string",
            name: "paragrafo2",
            label: "Parágrafo 2",
            ui: { component: "textarea" },
          },
          {
            type: "string",
            name: "paragrafo3",
            label: "Parágrafo 3",
            ui: { component: "textarea" },
          },
          { type: "string", name: "stat1Numero", label: "Estatística 1 — Número" },
          { type: "string", name: "stat1Label", label: "Estatística 1 — Legenda" },
          { type: "string", name: "stat2Numero", label: "Estatística 2 — Número" },
          { type: "string", name: "stat2Label", label: "Estatística 2 — Legenda" },
          { type: "string", name: "stat3Numero", label: "Estatística 3 — Número" },
          { type: "string", name: "stat3Label", label: "Estatística 3 — Legenda" },
          { type: "string", name: "stat4Numero", label: "Estatística 4 — Número" },
          { type: "string", name: "stat4Label", label: "Estatística 4 — Legenda" },
        ],
      },

      // ── PRÊMIOS ───────────────────────────────
      {
        name: "premios",
        label: "Prêmios e Conquistas",
        path: "content",
        match: { include: "premios" },
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          {
            type: "object",
            name: "lista",
            label: "Lista de Prêmios",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.titulo || "Prêmio" }) },
            fields: [
              { type: "string", name: "icone", label: "Ícone (emoji, ex: 🏆)" },
              { type: "string", name: "titulo", label: "Título" },
              {
                type: "string",
                name: "descricao",
                label: "Descrição",
                ui: { component: "textarea" },
              },
              { type: "string", name: "ano", label: "Ano" },
            ],
          },
        ],
      },

      // ── PROJETOS ──────────────────────────────
      {
        name: "projetos",
        label: "Projetos",
        path: "content",
        match: { include: "projetos" },
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          {
            type: "object",
            name: "lista",
            label: "Lista de Projetos",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.titulo || "Projeto" }) },
            fields: [
              { type: "string", name: "numero", label: "Número (ex: 01)" },
              { type: "string", name: "titulo", label: "Título" },
              { type: "string", name: "descricao", label: "Descrição" },
              { type: "string", name: "badge", label: "Badge (ex: Premiado)" },
              { type: "string", name: "link", label: "Link (opcional, ex: https://...)" },
            ],
          },
        ],
      },

      // ── GALERIA ───────────────────────────────
      {
        name: "galeria",
        label: "Galeria de Quadros",
        path: "content",
        match: { include: "galeria" },
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          {
            type: "object",
            name: "itens",
            label: "Imagens da galeria",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.alt || "Imagem" }) },
            fields: [
              { type: "image", name: "src", label: "Imagem" },
              { type: "string", name: "alt", label: "Descrição da imagem (para acessibilidade)" },
            ],
          },
        ],
      },

      // ── VÍDEOS ────────────────────────────────
      {
        name: "videos",
        label: "Vídeos",
        path: "content",
        match: { include: "videos" },
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          {
            type: "object",
            name: "lista",
            label: "Lista de Vídeos",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.titulo || "Vídeo" }) },
            fields: [
              { type: "string", name: "titulo", label: "Título do vídeo" },
              { type: "string", name: "subtitulo", label: "Subtítulo / episódio" },
              { type: "string", name: "link", label: "Link do YouTube (URL completa)" },
              { type: "image", name: "thumb", label: "Thumbnail (opcional)" },
            ],
          },
        ],
      },

      // ── QUIZ ──────────────────────────────────
      {
        name: "quiz",
        label: "Quiz",
        path: "content",
        match: { include: "quiz" },
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: "string", name: "titulo", label: "Título do Quiz" },
          {
            type: "string",
            name: "descricao",
            label: "Descrição",
            ui: { component: "textarea" },
          },
          {
            type: "object",
            name: "opcoes",
            label: "Opções de categoria",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.texto || "Opção" }) },
            fields: [
              { type: "string", name: "texto", label: "Texto da opção (emoji + nome)" },
            ],
          },
          { type: "string", name: "btnTexto", label: "Texto do botão" },
          { type: "string", name: "btnLink", label: "Link do botão" },
        ],
      },

      // ── LIVRO ─────────────────────────────────
      {
        name: "livro",
        label: "Livro",
        path: "content",
        match: { include: "livro" },
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: "string", name: "titulo", label: "Título" },
          {
            type: "string",
            name: "paragrafo1",
            label: "Parágrafo 1",
            ui: { component: "textarea" },
          },
          {
            type: "string",
            name: "paragrafo2",
            label: "Parágrafo 2",
            ui: { component: "textarea" },
          },
          { type: "string", name: "btn1Texto", label: "Botão 1 — Texto" },
          { type: "string", name: "btn1Link", label: "Botão 1 — Link" },
          { type: "string", name: "btn2Texto", label: "Botão 2 — Texto" },
          { type: "string", name: "btn2Link", label: "Botão 2 — Link" },
        ],
      },

      // ── FOOTER ────────────────────────────────
      {
        name: "footer",
        label: "Rodapé (Footer)",
        path: "content",
        match: { include: "footer" },
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: "string", name: "instagramLink", label: "Link do Instagram" },
          { type: "string", name: "youtubeLink", label: "Link do YouTube" },
          { type: "string", name: "contatoEmail", label: "E-mail de contato" },
          { type: "string", name: "lattesLink", label: "Link do Lattes" },
          { type: "string", name: "portfolioLink", label: "Link do Portfólio (PDF — ex: /oqvpa/files/portfolio.pdf)" },
          { type: "string", name: "copyright", label: "Texto de copyright" },
        ],
      },

    ],
  },
});
