import * as trpc from '@trpc/server';
import { prisma } from '../utils/prisma';

export const fixtureRouter = trpc.router().query('getFixtures', {
  async resolve() {
    const fixtures = await prisma.fixture.findMany({
      select: {
        date: true,
        location: true,
        venue: true,
        homeTeam: true,
        awayTeam: true,
        homeTeamGoals: true,
        awayTeamGoals: true,
        competition: true,
        round: true,
      },
    });
    return {
      fixtures,
    };
  },
});
