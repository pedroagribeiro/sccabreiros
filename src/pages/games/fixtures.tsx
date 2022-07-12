import React, { ReactElement, useState, useEffect, useCallback } from 'react';
import Layout from '../../components/layouts/Layout';
import UpcomingFixture from '../../components/result/Fixture';
import { GoDash, GoPlus } from 'react-icons/go';
import { trpc } from '../../utils/trpc';

const Fixtures = () => {
  const {
    data: fixtures,
    refetch,
    isLoading,
  } = trpc.useQuery(['fixture.getUpcomingFixtures']);

  const [dropdownsStatus, setDropdownsStatus] = useState(new Map([]));

  const updateDropdownStatus = (month_year: string) => {
    if (dropdownsStatus.has(month_year)) {
      const new_state = new Map(dropdownsStatus);
      const prev_value = dropdownsStatus.get(month_year);
      new_state.set(month_year, !prev_value);
      setDropdownsStatus(new_state);
    } else {
      const new_state = new Map(dropdownsStatus);
      new_state.set(month_year, false);
      setDropdownsStatus(new_state);
    }
  };

  const isItLoading = () => {
    const r = isLoading ? 'animate-bounce' : 'hidden';
    return r;
  };

  return (
    <div className="px-6 md:px-16 2xl:px-64 mt-8 mb-8">
      <div className="flex flex-col">
        <div
          className={`animate-pulse flex ${isItLoading()} min-w-full text-center min-h-screen items-center`}
        >
          <p className="font-teko uppercase w-full font-agencygothic text-4xl text-gray-700">
            Carregando...
          </p>
        </div>
        {fixtures?.fixtures
          .sort((fixture) => fixture[1][0])
          .map((month_year_fixtures) => {
            return (
              <span key={month_year_fixtures[0] as string}>
                <button
                  className="w-full flex justify-between px-10 py-6 text-gray-700 hover:text-green-600 text-2xl font-agencygothic"
                  onClick={() =>
                    updateDropdownStatus(month_year_fixtures[0] as string)
                  }
                >
                  <p className="uppercase">{month_year_fixtures[0]}</p>
                  <GoDash
                    className={`${
                      dropdownsStatus.get(month_year_fixtures[0]) === false
                        ? 'hidden'
                        : 'block'
                    }`}
                  />
                  <GoPlus
                    className={`${
                      dropdownsStatus.get(month_year_fixtures[0]) === false
                        ? 'block'
                        : 'hidden'
                    }`}
                  />
                </button>
                <div
                  className={`flex flex-col space-y-6 px-2 md:px-10 mb-6 ${
                    dropdownsStatus.get(month_year_fixtures[0]) === false
                      ? 'hidden'
                      : 'block'
                  }`}
                >
                  {month_year_fixtures[1].map((fixture, index) => (
                    <UpcomingFixture
                      key={index}
                      date={fixture.date}
                      textDate={fixture.textDate}
                      venue={fixture.venue}
                      competition={fixture.competition}
                      home_team={fixture.homeTeam}
                      away_team={fixture.awayTeam}
                      home_team_goals={fixture.homeTeamGoals!}
                      away_team_goals={fixture.awayTeamGoals!}
                    />
                  ))}
                </div>
              </span>
            );
          })}
      </div>
    </div>
  );
};

Fixtures.getLayout = (page: ReactElement) => (
  <Layout
    title="Próximos Jogos"
    subpages={[
      { title: 'Próximos jogos', url: '/games/fixtures' },
      { title: 'Resultados', url: '/games/results' },
      { title: 'Classificação', url: '/games/classification' },
    ]}
  >
    {page}
  </Layout>
);

export default Fixtures;
