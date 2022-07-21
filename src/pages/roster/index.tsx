import React, { ReactElement } from 'react';
import Layout from '../../components/layouts/Layout';
import PlayerCard from '../../components/roster/PlayerCard';
import { trpc } from '../../utils/trpc';
import Trpc from '../api/trpc/[trpc]';

const Roster = () => {
  const data = trpc.useQuery(['roster.getFullRoster']);

  const isItLoading = () => {
    const r = data.isLoading ? 'animate-bounce' : 'hidden';
    return r;
  };

  return (
    <div>
      <div
        className={`animate-pulse flex ${isItLoading()} min-w-full text-center min-h-screen items-center`}
      >
        <p className="font-teko uppercase w-full text-4xl text-gray-700">
          Carregando...
        </p>
      </div>

      <div className="flex flex-col space-y-8 relative px-4 pb-8 mx-auto mt-8 max-w-2xl sm:px-6 sm:mt-12 lg:px-8 lg:pb-10 lg:max-w-7xl text-gray-700">
        <div className="flex flex-col space-y-6">
          <div className="flex flex-col">
            <h2 className="text-4xl text-gray-700 font-teko uppercase pb-0 font-normal">
              Guarda-Redes
            </h2>
            <div className="h-1 w-10 bg-green-600"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:gap-10 gap-y-4">
            {data.data?.roster
              .filter((player) => player.position == 'Guarda-redes')
              .sort((p1, p2) => p1.number - p2.number)
              .map((player) => (
                <PlayerCard
                  key={player.fullname + player.number}
                  zerozero={player.zerozeroId}
                  position={player.position}
                  number={player.number}
                  fullname={player.fullname}
                  nickname={player.nickname}
                  photo={player.photo}
                  nationality={player.nationality}
                  age={player.age}
                />
              ))}
          </div>
        </div>
        <div className="flex flex-col space-y-6">
          <div className="flex flex-col">
            <h2 className="text-4xl text-gray-700 font-teko uppercase pb-0 font-normal">
              Defesas
            </h2>
            <div className="h-1 w-10 bg-green-600"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:gap-10 gap-y-4">
            {data.data?.roster
              .filter((player) => player.position == 'Defesa')
              .sort((p1, p2) => p1.number - p2.number)
              .map((player) => (
                <PlayerCard
                  key={player.fullname + player.number}
                  zerozero={player.zerozeroId}
                  position={player.position}
                  number={player.number}
                  fullname={player.fullname}
                  nickname={player.nickname}
                  photo={player.photo}
                  nationality={player.nationality}
                  age={player.age}
                />
              ))}
          </div>
        </div>
        <div className="flex flex-col space-y-6">
          <div className="flex flex-col">
            <h2 className="text-4xl text-gray-700 font-teko uppercase pb-0 font-normal">
              Médios
            </h2>
            <div className="h-1 w-10 bg-green-600"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:gap-10 gap-y-4">
            {data.data?.roster
              .filter((player) => player.position == 'Médio')
              .sort((p1, p2) => p1.number - p2.number)
              .map((player) => (
                <PlayerCard
                  key={player.fullname + player.number}
                  zerozero={player.zerozeroId}
                  position={player.position}
                  number={player.number}
                  fullname={player.fullname}
                  nickname={player.nickname}
                  photo={player.photo}
                  nationality={player.nationality}
                  age={player.age}
                />
              ))}
          </div>
        </div>
        <div className="flex flex-col space-y-6">
          <div className="flex flex-col">
            <h2 className="text-4xl text-gray-700 font-teko uppercase pb-0 font-normal">
              Avançados
            </h2>
            <div className="h-1 w-10 bg-green-600"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:gap-10 gap-y-4">
            {data.data?.roster
              .filter((player) => player.position == 'Avançado')
              .sort((p1, p2) => p1.number - p2.number)
              .map((player) => (
                <PlayerCard
                  key={player.fullname + player.number}
                  zerozero={player.zerozeroId}
                  position={player.position}
                  number={player.number}
                  fullname={player.fullname}
                  nickname={player.nickname}
                  photo={player.photo}
                  nationality={player.nationality}
                  age={player.age}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

Roster.getLayout = (page: ReactElement) => (
  <Layout title="Plantel" subpages={[{ title: 'Plantel', url: '/roster' }]}>
    {page}
  </Layout>
);

export default Roster;
