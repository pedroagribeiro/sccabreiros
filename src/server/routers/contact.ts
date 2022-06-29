import * as trpc from '@trpc/server';
import { prisma } from '../utils/prisma';
import { z } from 'zod';

export const contactRouter = trpc.router().mutation('submit-contact', {
  input: z.object({
    fullName: z.string(),
    email: z.string(),
    subject: z.string(),
    message: z.string(),
  }),
  async resolve({ input }) {
    const contact = await prisma.contact.create({
      data: { ...input },
    });
    return { success: true, contact };
  },
});
