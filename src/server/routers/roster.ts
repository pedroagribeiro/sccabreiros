import * as trpc from '@trpc/server';
import { z } from 'zod';
import { prisma } from '../utils/prisma';

export const rosterRouter = trpc
  .router()
  .query('getFullRoster', {
    async resolve() {
      const roster = await prisma.roster.findMany({});
      return { roster };
    },
  })
  .query('getGoalkeeperPlayer', {
    async resolve() {
      const goalkeeper_roster = await prisma.roster.findMany({
        where: {
          position: 'Guarda-redes',
        },
      });
      return {
        goalkeeper_roster,
      };
    },
  })
  .query('getDefensePlayers', {
    async resolve() {
      const defense_roster = await prisma.roster.findMany({
        where: { position: 'Defesa' },
      });
      return {
        defense_roster,
      };
    },
  })
  .query('getMidfieldPlayers', {
    async resolve() {
      const midfield_roster = await prisma.roster.findMany({
        where: {
          position: 'Médio',
        },
      });
      return { midfield_roster };
    },
  })
  .query('getStrikerPlayers', {
    async resolve() {
      const striker_roster = await prisma.roster.findMany({
        where: {
          position: 'Avançado',
        },
      });
      return { striker_roster };
    },
  });
