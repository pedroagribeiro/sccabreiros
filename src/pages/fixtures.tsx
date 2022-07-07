import React, { ReactElement } from 'react';
import Layout from '../components/layouts/Layout';
import UpcomingFixture from '../components/result/UpcomingFixture';
import { GoDash } from 'react-icons/go';
import { trpc } from '../utils/trpc';

const Fixtures = () => {
  const {
    data: fixtures,
    refetch,
    isLoading,
  } = trpc.useQuery(['fixture.getFixtures']);

  return (
    <div className="px-6 md:px-16 2xl:px-64 mt-8">
      <div className="flex flex-col">
        <button className="flex justify-between px-10 py-6 text-gray-700 hover:text-green-600 text-2xl font-agencygothic">
          <p>July 2022</p>
          <GoDash />
        </button>
        <div className="flex flex-col space-y-6 px-2 md:px-10 mb-6">
          {fixtures?.fixtures.map((fixture, index) => (
            <UpcomingFixture
              key={index}
              date={fixture.date}
              location={fixture.location}
              competition={fixture.competition}
              home_team={fixture.homeTeam}
              away_team={fixture.awayTeam}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

Fixtures.getLayout = (page: ReactElement) => (
  <Layout
    title="Próximos Jogos"
    subpages={[
      { title: 'Próximos jogos', url: '/fixtures' },
      { title: 'Resultados', url: '/results' },
      { title: 'Classificação', url: '/classification' },
    ]}
  >
    {page}
  </Layout>
);

export default Fixtures;
