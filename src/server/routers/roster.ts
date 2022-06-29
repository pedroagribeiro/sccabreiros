import * as trpc from '@trpc/server';
import { z } from 'zod';
import { prisma } from '../utils/prisma';

export const rosterRouter = trpc.router().query('getRoster', {
  async resolve() {
    const roster = await prisma.roster.findMany({});
    return {
      roster,
    };
  },
});
