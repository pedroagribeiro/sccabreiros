import React, { ReactElement, useState, useEffect } from 'react';
import Layout from '../../components/layouts/Layout';
import ClassificationTable from '../../components/table/ClassificationTable';
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from 'react-icons/bs';
import { trpc } from '../../utils/trpc';

const Classification = () => {
  const { data, refetch, isLoading } = trpc.useQuery([
    'classification.available-seasons',
  ]);

  const teams = trpc.useQuery(['teams.get-all-teams']);

  const season_slug_to_verbose = (slug: string): string => {
    if (slug === "2017.2018") return "2017/2018"
    if (slug === "2018.2019") return "2018/2019"
    if (slug === "2019.2020") return "2019/2020"
    if (slug === "2020.2021") return "2020/2021"
    if (slug === "2021.2022") return "2021/2022"
    if (slug === "2022.2023") return "2022/2023"
    if (slug === "2022.2023.Relegation") return "2022/2023 - Manutenção"
    else return ""
  }

  const [chosenSeason, setChosenSeason] = useState(6);

  const setNextSeason = () => {
    if (chosenSeason < data!.length - 1) {
      setChosenSeason(chosenSeason + 1);
    }
  };

  const setPreviousSeason = () => {
    if (chosenSeason > 0) {
      setChosenSeason(chosenSeason - 1);
    }
  };

  return data && teams.data ? (
    <div className='px-6 md:px-16 2xl:px-64 mt-8 mb-8'>
      <div className='flex justify-center items-center text-center mb-6 rounded-sm w-full md:w-96 md:ml-6'>
        <button
          onClick={() => setPreviousSeason()}
          className='text-green-600 text-xl'
        >
          <BsFillArrowLeftCircleFill />
        </button>
        <p className='p-2 text-green-600 font-semibold text-xl text-center mx-4'>
          {season_slug_to_verbose(data![chosenSeason])}
        </p>
        <button
          onClick={() => setNextSeason()}
          className='text-green-600 text-xl'
        >
          <BsFillArrowRightCircleFill />
        </button>
      </div>
      <ClassificationTable
        teams={teams.data!.teams}
        season={data![chosenSeason]}
      />
    </div>
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

Classification.getLayout = (page: ReactElement) => (
  <Layout
    title='Classificação'
    description='Nesta secção podem ser consultadas as classificações da nossa equipa sénior nos campeonatos ao longo dos anos.'
    subpages={[
      { title: 'Próximos Jogos', url: '/games/fixtures' },
      { title: 'Resultados', url: '/games/results' },
      { title: 'Classificação', url: '/games/classification' },
    ]}
  >
    {page}
  </Layout>
);

export default Classification;
