import * as trpc from '@trpc/server';
import { z } from 'zod';
import { prisma } from '../utils/prisma';

export const membershipRouter = trpc.router().mutation('submit-membership', {
  input: z.object({
    fullName: z.string(),
    birthdate: z.any(),
    address: z.string(),
    postalCode: z.string(),
    location: z.string(),
    phone: z.string(),
    photo: z.string(),
    email: z.string(),
  }),
  async resolve({ input }) {
    console.log(input);
    const membership = await prisma.member.create({
      data: {
        ...input,
        birthdate: new Date(input.birthdate),
      },
    });
    return { success: true };
  },
});
