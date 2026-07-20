import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const eventos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/eventos' }),
  schema: ({ image }) =>
    z.object({
      titulo: z.string(),
      data: z.coerce.date(),
      fotos: z.array(image()).default([]),
    }),
});

const empresas = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/empresas' }),
  schema: z.object({
    nome: z.string(),
    descricao: z.string().optional(),
    site: z.string().optional(),
    portfolio: z.string(),
    ordem: z.number().default(0),
  }),
});

export const collections = { eventos, empresas };
