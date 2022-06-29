import * as trpc from '@trpc/server';
import { z } from 'zod';
import { prisma } from '../utils/prisma';

export const membershipRouter = trpc.router().mutation('submit-membership', {
  input: z.object({
    fullName: z.string(),
    birthdate: z.date(),
    address: z.string(),
    postalCode: z.string(),
    location: z.string(),
    phone: z.string(),
    photo: z.string(),
    email: z.string(),
  }),
  async resolve({ input }) {
    const membership = await prisma.member.create({
      data: { ...input },
    });
    return { success: true, membership };
  },
});
