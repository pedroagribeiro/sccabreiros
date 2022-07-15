import * as trpc from '@trpc/server';
import { z } from 'zod';
import { prisma } from '../utils/prisma';
import moment from 'moment';

const turn_date_to_text = (date: Date) => {
  const m = moment(date).locale('pt');
  return m.format('dddd[,] D [de] MMMM YYYY');
};

const turn_date_to_month_year = (date: Date) => {
  const m = moment(date).locale('pt');
  return m.format('MMMM YYYY');
};

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

      const news_map = new Map() as Map<String, any[]>;

      news.forEach((news_post) => {
        const month_year = turn_date_to_month_year(news_post.date);
        const updated_news_post = {
          ...news_post,
          textDate: turn_date_to_text(news_post.date),
        };

        if (news_map.has(month_year)) {
          news_map.get(month_year)?.push({ ...updated_news_post });
        } else {
          news_map.set(month_year, [{ ...updated_news_post }]);
        }
      });

      return { news: Array.from(news_map) };
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
