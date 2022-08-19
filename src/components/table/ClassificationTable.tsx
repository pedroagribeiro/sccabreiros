import React from 'react';
import Image from 'next/image';
import { trpc } from '../../utils/trpc';

type ClassificationProps = {
  season: string;
};

const ClassificationTable = ({ season }: ClassificationProps) => {
  const { data, refetch, isLoading } = trpc.useQuery([
    'classification.season-classification',
    { season },
  ]);
  return data ? (
    <span>
      <div className='flex flex-col rounded-sm shadow-md'>
        <div className='h-1 bg-green-600 rounded-t-sm'></div>
        <div className='flex text-white bg-gray-700'>
          <p className='text-xs px-6 py-4'>
            Campeonato Pró-Nacional A.F Braga - Série A - {season}
          </p>
        </div>
        {/* Para o benjamim */}
        <div className='w-full flex flex-col space-y-6'>
          <table className='w-full bg-white'>
            <thead className='text-gray-700 text-xs md:text-sm'>
              <tr className='h-14 border-b border-gray-200'>
                <th className='border-r border-gray-200'>Posição</th>
                <th className='border-r border-gray-200'>Equipa</th>
                <th className='border-r border-gray-200'>Jogos</th>
                <th className='border-r border-gray-200 hidden md:table-cell'>
                  Vitórias
                </th>
                <th className='border-r border-gray-200 hidden md:table-cell'>
                  Empates
                </th>
                <th className='border-r border-gray-200 hidden md:table-cell'>
                  Derrotas
                </th>
                <th className='border-r border-gray-200 hidden md:table-cell'>
                  +/-
                </th>
                <th>Pontos</th>
              </tr>
            </thead>
            <tbody className='w-full text-sm font-thin'>
              {data.map((table_line) => (
                <tr
                  key={'row-key-' + table_line.position}
                  className='border-b border-gray-200'
                >
                  <td className='text-center border-r border-gray-200 py-4'>
                    {table_line.position}
                  </td>
                  <td className='border-r border-gray-200'>
                    <div className='w-full h-full flex space-x-6 items-center justify-start pl-4'>
                      <Image
                        src='/images/oponents/championship/dumiense.png'
                        alt='dumiense'
                        width={23}
                        height={34}
                      />
                      <p className='mx-4'>{table_line.team}</p>
                    </div>
                  </td>
                  <td className='text-center border-r border-gray-200'>
                    {table_line.games}
                  </td>
                  <td className='text-center border-r border-gray-200 hidden md:table-cell'>
                    {table_line.victories}
                  </td>
                  <td className='text-center border-r border-gray-200 hidden md:table-cell'>
                    {table_line.draws}
                  </td>
                  <td className='text-center border-r border-gray-200 hidden md:table-cell'>
                    {table_line.defeats}
                  </td>
                  <td className='text-center border-r border-gray-200 hidden md:table-cell'>
                    {table_line.plus_minus}
                  </td>
                  <td className='text-center'>{table_line.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Ja nao é para o Benjamim */}
      </div>
    </span>
  ) : (
    <div
      className={`animate-pulse flex animate-bounce min-w-full text-center min-h-screen items-center`}
    >
      <p className='font-teko uppercase w-full text-4xl text-gray-700'>
        Carregando...
      </p>
    </div>
  );
};

export default ClassificationTable;
