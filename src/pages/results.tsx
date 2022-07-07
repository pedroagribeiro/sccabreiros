import React, { ReactElement } from 'react';
import { FaFireExtinguisher } from 'react-icons/fa';
import Layout from '../components/layouts/Layout';
import PastFixture from '../components/result/PastFixture';
import { trpc } from '../utils/trpc';

const Results = () => {
  const {
    data: fixtures,
    refetch,
    isLoading,
  } = trpc.useQuery(['fixture.getFixtures']);
  console.log(fixtures?.fixtures);
  return (
    <div className="flex justify-center items-center mt-16 mb-16 text-gray-700">
      <div className="max-w-6xl flex flex-col space-y-0 items-center mx-6 md:mx-32 lg:mx-72 ">
        <div className="grid grid-cols-1 space-y-6 md:space-y-0 md:grid-cols-2 md:gap-8">
          {fixtures?.fixtures.map((fixture) => (
            <PastFixture
              key={fixture.competition + fixture.round}
              date={fixture.date}
              location={fixture.location}
              venue_name={fixture.venue}
              home_team={fixture.homeTeam}
              away_team={fixture.awayTeam}
              home_scored_goals={fixture.homeTeamGoals}
              away_scored_goals={fixture.awayTeamGoals}
              competition={fixture.competition}
              round={fixture.round}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

Results.getLayout = (page: ReactElement) => (
  <Layout
    title="Resultados"
    subpages={[
      { title: 'Próximos Jogos', url: '/fixtures' },
      { title: 'Resultados', url: '/results' },
      { title: 'Classificação', url: '/classification' },
    ]}
  >
    {page}
  </Layout>
);

export default Results;
