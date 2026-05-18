// tina/config.js
import { defineConfig } from "tinacms";
var config_default = defineConfig({
  branch: process.env.TINA_BRANCH || "main",
  clientId: process.env.TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public"
    }
  },
  schema: {
    collections: [
      // ── HERO ──────────────────────────────────
      {
        name: "hero",
        label: "In\xEDcio (Hero)",
        path: "content",
        match: { include: "hero" },
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: "string", name: "tag", label: "Tag de destaque (ex: Ci\xEAncia \xB7 Astronomia)" },
          { type: "string", name: "descricao", label: "Descri\xE7\xE3o", ui: { component: "textarea" } },
          { type: "string", name: "btnPrimarioTexto", label: "Bot\xE3o Principal \u2014 Texto" },
          { type: "string", name: "btnPrimarioLink", label: "Bot\xE3o Principal \u2014 Link" },
          { type: "string", name: "btnSecundarioTexto", label: "Bot\xE3o Secund\xE1rio \u2014 Texto" },
          { type: "string", name: "btnSecundarioLink", label: "Bot\xE3o Secund\xE1rio \u2014 Link" }
        ]
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
          { type: "string", name: "titulo", label: "T\xEDtulo" },
          { type: "string", name: "paragrafo1", label: "Par\xE1grafo 1", ui: { component: "textarea" } },
          { type: "string", name: "paragrafo2", label: "Par\xE1grafo 2", ui: { component: "textarea" } },
          { type: "string", name: "paragrafo3", label: "Par\xE1grafo 3", ui: { component: "textarea" } },
          { type: "string", name: "stat1Numero", label: "Estat\xEDstica 1 \u2014 N\xFAmero" },
          { type: "string", name: "stat1Label", label: "Estat\xEDstica 1 \u2014 Legenda" },
          { type: "string", name: "stat2Numero", label: "Estat\xEDstica 2 \u2014 N\xFAmero" },
          { type: "string", name: "stat2Label", label: "Estat\xEDstica 2 \u2014 Legenda" },
          { type: "string", name: "stat3Numero", label: "Estat\xEDstica 3 \u2014 N\xFAmero" },
          { type: "string", name: "stat3Label", label: "Estat\xEDstica 3 \u2014 Legenda" },
          { type: "string", name: "stat4Numero", label: "Estat\xEDstica 4 \u2014 N\xFAmero" },
          { type: "string", name: "stat4Label", label: "Estat\xEDstica 4 \u2014 Legenda" }
        ]
      },
      // ── PRÊMIOS ───────────────────────────────
      {
        name: "premios",
        label: "Pr\xEAmios e Conquistas",
        path: "content",
        match: { include: "premios" },
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          {
            type: "object",
            name: "lista",
            label: "Lista de Pr\xEAmios",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.titulo || "Pr\xEAmio" }) },
            fields: [
              { type: "string", name: "icone", label: "\xCDcone (emoji, ex: \u{1F3C6})" },
              { type: "string", name: "titulo", label: "T\xEDtulo" },
              { type: "string", name: "descricao", label: "Descri\xE7\xE3o", ui: { component: "textarea" } },
              { type: "string", name: "ano", label: "Ano" }
            ]
          }
        ]
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
              { type: "string", name: "numero", label: "N\xFAmero (ex: 01)" },
              { type: "string", name: "titulo", label: "T\xEDtulo" },
              { type: "string", name: "descricao", label: "Descri\xE7\xE3o" },
              { type: "string", name: "badge", label: "Badge (ex: Premiado)" },
              { type: "string", name: "link", label: "Link (opcional)" }
            ]
          }
        ]
      },
      // ── CURSOS ────────────────────────────────
      {
        name: "cursos",
        label: "Cursos",
        path: "content",
        match: { include: "cursos" },
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: "string", name: "titulo", label: "T\xEDtulo da se\xE7\xE3o" },
          { type: "string", name: "subtitulo", label: "Subt\xEDtulo" },
          { type: "string", name: "descricao", label: "Descri\xE7\xE3o da se\xE7\xE3o", ui: { component: "textarea" } },
          {
            type: "object",
            name: "lista",
            label: "Lista de Cursos",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.titulo || "Curso" }) },
            fields: [
              { type: "string", name: "icone", label: "\xCDcone (emoji)" },
              { type: "string", name: "titulo", label: "Nome do curso" },
              { type: "string", name: "instituicao", label: "Institui\xE7\xE3o" },
              { type: "string", name: "ano", label: "Ano" },
              { type: "string", name: "descricao", label: "Descri\xE7\xE3o", ui: { component: "textarea" } },
              { type: "string", name: "link", label: "Link (opcional)" }
            ]
          }
        ]
      },
      // ── ENGAJAMENTO ───────────────────────────
      {
        name: "engajamento",
        label: "Engajamento Cient\xEDfico",
        path: "content",
        match: { include: "engajamento" },
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: "string", name: "titulo", label: "T\xEDtulo da se\xE7\xE3o" },
          { type: "string", name: "subtitulo", label: "Subt\xEDtulo" },
          { type: "string", name: "descricao", label: "Descri\xE7\xE3o da se\xE7\xE3o", ui: { component: "textarea" } },
          {
            type: "object",
            name: "lista",
            label: "Lista de Engajamentos",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.titulo || "Engajamento" }) },
            fields: [
              { type: "string", name: "icone", label: "\xCDcone (emoji)" },
              { type: "string", name: "titulo", label: "Nome do clube / iniciativa" },
              { type: "string", name: "organizacao", label: "Organiza\xE7\xE3o" },
              { type: "string", name: "ano", label: "Ano" },
              { type: "string", name: "descricao", label: "Descri\xE7\xE3o", ui: { component: "textarea" } },
              { type: "string", name: "link", label: "Link (opcional)" }
            ]
          }
        ]
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
              { type: "string", name: "alt", label: "Descri\xE7\xE3o da imagem" }
            ]
          }
        ]
      },
      // ── VÍDEOS ────────────────────────────────
      {
        name: "videos",
        label: "V\xEDdeos",
        path: "content",
        match: { include: "videos" },
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          {
            type: "object",
            name: "lista",
            label: "Lista de V\xEDdeos",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.titulo || "V\xEDdeo" }) },
            fields: [
              { type: "string", name: "titulo", label: "T\xEDtulo do v\xEDdeo" },
              { type: "string", name: "subtitulo", label: "Subt\xEDtulo / epis\xF3dio" },
              { type: "string", name: "link", label: "Link do YouTube (URL completa)" },
              { type: "image", name: "thumb", label: "Thumbnail (opcional)" }
            ]
          }
        ]
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
          { type: "string", name: "titulo", label: "T\xEDtulo do Quiz" },
          { type: "string", name: "descricao", label: "Descri\xE7\xE3o", ui: { component: "textarea" } },
          {
            type: "object",
            name: "opcoes",
            label: "Op\xE7\xF5es de categoria",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.texto || "Op\xE7\xE3o" }) },
            fields: [
              { type: "string", name: "texto", label: "Texto da op\xE7\xE3o" }
            ]
          },
          { type: "string", name: "btnTexto", label: "Texto do bot\xE3o" },
          { type: "string", name: "btnLink", label: "Link do bot\xE3o" }
        ]
      },
      // ── LIVRO ─────────────────────────────────
      // IMPORTANTE: btn2Texto e btn2Link foram mantidos para não quebrar o schema do Tina Cloud
      // O componente Livro.jsx usa apenas btn1Texto e btn1Link
      {
        name: "livro",
        label: "Livro",
        path: "content",
        match: { include: "livro" },
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: "string", name: "titulo", label: "T\xEDtulo" },
          { type: "string", name: "paragrafo1", label: "Par\xE1grafo 1", ui: { component: "textarea" } },
          { type: "string", name: "paragrafo2", label: "Par\xE1grafo 2", ui: { component: "textarea" } },
          { type: "string", name: "btn1Texto", label: "Bot\xE3o \u2014 Texto" },
          { type: "string", name: "btn1Link", label: "Bot\xE3o \u2014 Link" },
          { type: "string", name: "btn2Texto", label: "Bot\xE3o 2 \u2014 Texto (n\xE3o utilizado)" },
          { type: "string", name: "btn2Link", label: "Bot\xE3o 2 \u2014 Link (n\xE3o utilizado)" }
        ]
      },
      // ── FOOTER ────────────────────────────────
      {
        name: "footer",
        label: "Rodap\xE9 (Footer)",
        path: "content",
        match: { include: "footer" },
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: "string", name: "instagramLink", label: "Link do Instagram" },
          { type: "string", name: "youtubeLink", label: "Link do YouTube" },
          { type: "string", name: "contatoEmail", label: "E-mail de contato" },
          { type: "string", name: "lattesLink", label: "Link do Lattes" },
          { type: "string", name: "portfolioLink", label: "Link do Portf\xF3lio (PDF)" },
          { type: "string", name: "copyright", label: "Texto de copyright" }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
