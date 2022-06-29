import React, { ReactElement } from 'react';
import Layout from '../../components/layouts/Layout';
import PlayerCard from '../../components/roster/PlayerCard';
import { trpc } from '../../utils/trpc';

const Roster = () => {
  const {
    data: roster,
    refetch,
    isLoading,
  } = trpc.useQuery(['roster.getRoster']);

  return (
    <div className="relative px-4 pb-8 mx-auto mt-8 max-w-2xl sm:px-6 sm:mt-20 lg:px-8 lg:pb-0 lg:max-w-7xl bg-gray-100 text-gray-700">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:gap-10 gap-y-4">
        {roster?.roster.map((player) => (
          <PlayerCard
            key={player.firstName + player.number}
            zerozero={player.zerozeroId}
            position={player.position}
            number={player.number}
            first_name={player.firstName}
            second_name={player.secondName}
            photo={player.photo}
            nationality={player.nationality}
            age={player.age}
          />
        ))}
      </div>
    </div>
  );
};

Roster.getLayout = (page: ReactElement) => (
  <Layout title="Plantel 2022/2023">{page}</Layout>
);

export default Roster;
