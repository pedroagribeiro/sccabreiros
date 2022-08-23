import * as trpc from '@trpc/server';
import { prisma } from '../utils/prisma';

export const teamsRouter = trpc.router().query('get-all-teams', {
  async resolve() {
    const teams = await prisma.team.findMany({});
    return { teams };
  },
});
