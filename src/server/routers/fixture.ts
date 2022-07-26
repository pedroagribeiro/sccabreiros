import * as trpc from '@trpc/server';
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

export const fixtureRouter = trpc
  .router()
  .query('getPastFixtures', {
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
        where: {
          date: {
            lt: new Date(),
          },
        },
      });

      const updated_fixtures_map = new Map() as Map<String, any[]>;

      fixtures
        .sort((fixture) => -fixture.date.getTime())
        .forEach((fixture) => {
          const month_year = turn_date_to_month_year(fixture.date);
          const updated_fixture = {
            ...fixture,
            textDate: turn_date_to_text(fixture.date),
          };
          if (updated_fixtures_map.has(month_year)) {
            updated_fixtures_map.get(month_year)?.push({ ...updated_fixture });
          } else {
            updated_fixtures_map.set(month_year, [{ ...updated_fixture }]);
          }
        });

      return {
        fixtures: Array.from(updated_fixtures_map),
      };
    },
  })
  .query('getUpcomingFixtures', {
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
        where: {
          date: {
            gte: new Date(),
          },
        },
      });

      const updated_fixtures_map = new Map() as Map<String, any[]>;

      fixtures
        .sort((fixture) => fixture.date.getTime())
        .forEach((fixture) => {
          const month_year = turn_date_to_month_year(fixture.date);
          const updated_fixture = {
            ...fixture,
            textDate: turn_date_to_text(fixture.date),
          };
          if (updated_fixtures_map.has(month_year)) {
            updated_fixtures_map.get(month_year)?.push({ ...updated_fixture });
          } else {
            updated_fixtures_map.set(month_year, [{ ...updated_fixture }]);
          }
        });

      return {
        fixtures: Array.from(updated_fixtures_map),
      };
    },
  })
  .query('getUpcomingFixture', {
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
        where: {
          date: {
            gte: new Date(),
          },
        },
      });

      fixtures.sort((fixture) => fixture.date.getTime());

      const selected_fixture = {
        ...fixtures[0],
        textDate: turn_date_to_text(fixtures[0].date),
      };

      return {
        fixture: selected_fixture,
      };
    },
  });
