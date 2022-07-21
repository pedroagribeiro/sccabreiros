import React, { ReactElement } from 'react';
import Layout from '../../components/layouts/Layout';
import Image from 'next/image';

const Youngsters = () => {
  return (
    <div className="flex flex-col space-y-8 relative px-4 pb-8 mx-auto mt-8 max-w-2xl sm:px-6 sm:mt-12 lg:px-8 lg:pb-10 lg:max-w-7xl text-gray-700">
      <div className="flex flex-col space-y-6">
        <div className="flex flex-col">
          <h2 className="text-4xl text-gray-700 font-teko uppercase pb-0 font-normal">
            Objetivos
          </h2>
          <div className="h-1 w-10 bg-green-600"></div>
        </div>
        <div className="flex flex-col space-y-4 px-4 lg:px-32 text-center md:text-left">
          <p className="">
            Os nossos objetivos passam por fomentar o crescimento do nosso
            projeto de formação e obviamente expandir o número de atletas. Na
            época de 2021/2022 apenas tivemos uma equipa de iniciados a competir
            na série C da 2ª divisão da Associação de Futebol de Braga.
          </p>
          <p className="">
            Um dos objetivos mais imediatos é conseguir ter atletas suficientes
            para na época de 2022/2023 inscrever e competir com, pelo menos,
            mais uma equipa.
          </p>
        </div>
      </div>
      <div className="flex flex-col space-y-6">
        <div className="flex flex-col">
          <h2 className="text-4xl text-gray-700 font-teko uppercase pb-0 font-normal">
            Horários
          </h2>
          <div className="h-1 w-10 bg-green-600"></div>
        </div>
        <div className="flex flex-col space-y-4 px-4 lg:px-32 text-center md:text-left">
          <p className="">
            Os treinos dos escalões de formação ocorrem todas as terças-feiras e
            quintas-feiras às 18:30, sendo que nos próximos tempos não são
            restritos a nenhum escalão específico e todos os que quiserem
            aparecer são bem-vindos.
          </p>
        </div>
      </div>
      <div className="flex flex-col space-y-6">
        <div className="flex flex-col">
          <h2 className="text-4xl text-gray-700 font-teko uppercase pb-0 font-normal">
            Valores
          </h2>
          <div className="h-1 w-10 bg-green-600"></div>
        </div>
        <div className="flex flex-col space-y-4 px-4 lg:px-32 text-center md:text-left">
          <p className="">
            O objetivo principal do nosso projeto de formação é a transmissão
            dos valores do <strong>desportivismo</strong>,{' '}
            <strong>educação</strong>, <strong>respeito</strong> e{' '}
            <strong>profissionalismo</strong>.
          </p>
          <div className="mt-12 flex flex-col space-y-4 items-center">
            <Image
              src="/images/formation/everyone.jpg"
              alt="formation"
              width={600}
              height={400}
              className="rounded-md"
            />
            <p className="text-sm">Equipa de iniciados da época 2021/2022</p>
          </div>
        </div>
      </div>
    </div>
  );
};

Youngsters.getLayout = (page: ReactElement) => (
  <Layout
    title="Formação"
    subpages={[{ title: 'Formação', url: '/youngsters' }]}
  >
    {page}
  </Layout>
);

export default Youngsters;
