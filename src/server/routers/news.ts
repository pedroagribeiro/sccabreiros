import * as trpc from '@trpc/server';
import { z } from 'zod';
import { prisma } from '../utils/prisma';

export const newsRouter = trpc
  .router()
  .query('getAllNews', {
    async resolve() {
      const news = await prisma.newsPost.findMany({
        include: {
          player: false,
          fixture: false,
        },
      });
      return { news };
    },
  })
  .query('getNewsPost', {
    input: z.object({
      id: z.number(),
    }),
    async resolve({ input }) {
      const news_post = await prisma.newsPost.findUnique({
        where: { id: input.id },
      });
      return { news_post };
    },
  });
