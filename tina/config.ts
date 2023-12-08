import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      // English
      {
        name: "index_en",
        label: "Inglés",
        path: "content/english",
        fields: [
          {
            name: "banner",
            label: "Cabecera ('banner')",
            required: true,
            type: "object",
            fields: [
                {
                  label: 'Título',
                  name: 'title',
                  type: 'string',
                },
                {
                  label: 'Subtítulo',
                  name: 'subtitle',
                  type: 'string',
                },
                {
                  label: 'Contenido',
                  name: 'content',
                  type: 'string',
                },
                {
                  label: 'Imagen',
                  name: 'image',
                  type: 'string',
                },
                {
                  label: "Botón 'contacto'",
                  name: 'button',
                  type: "object",
                  fields: [
                    {
                      label: 'Activado',
                      name: 'enable',
                      type: 'boolean',
                    },
                    {
                      label: 'Texto del botón',
                      name: 'label',
                      type: 'string',
                    },
                  ]
                },
            ]
          },
          {
            type: "rich-text",
            name: "body",
            label: "Cuerpo",
            isBody: true,
          },
          ],
      },
      // Spanish
      {
        name: "index_es",
        label: "Español",
        path: "content/spanish",
        fields: [
          {
            name: "banner",
            label: "Cabecera ('banner')",
            required: true,
            type: "object",
            fields: [
              {
                label: 'Título',
                name: 'title',
                type: 'string',
              },
              {
                label: 'Subtítulo',
                name: 'subtitle',
                type: 'string',
              },
              {
                label: 'Cuerpo',
                name: 'content',
                type: 'string',
              },
              {
                label: 'Imagen',
                name: 'image',
                type: 'string',
              },
              {
                label: "Botón 'contacto'",
                name: 'button',
                type: "object",
                fields: [
                  {
                    label: 'Activado',
                    name: 'enable',
                    type: 'boolean',
                  },
                  {
                    label: 'Texto del botón',
                    name: 'label',
                    type: 'string',
                  },
                  ]
              },
              ]
          },
          {
            type: "rich-text",
            name: "body",
            label: "Cuerpo",
            isBody: true,
          },
          ],
      },
    ],
  },
});
