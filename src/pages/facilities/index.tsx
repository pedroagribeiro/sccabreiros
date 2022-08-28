import React, { ReactElement } from 'react';
import Layout from '../../components/layouts/Layout';
import Image from 'next/image';
import { HiLocationMarker } from 'react-icons/hi';
import { FaDirections } from 'react-icons/fa';

const Facilities = () => {
  return (
    <div className="flex flex-col space-y-8 relative px-4 pb-8 mx-auto mt-8 max-w-2xl sm:px-6 sm:mt-12 lg:px-8 lg:pb-10 lg:max-w-7xl text-gray-700">
      <div className="flex flex-col space-y-6">
        <div className="flex flex-col">
          <h2 className="text-4xl text-gray-700 font-teko uppercase pb-0 font-normal">
            Infraestrutura
          </h2>
          <div className="h-1 w-10 bg-green-600"></div>
        </div>
        <div className="flex flex-col space-y-4 px-4 lg:px-32 text-center md:text-left">
          <div>
            <Image
              src="/images/facilities/outside.jpeg"
              alt="outside"
              width={4032}
              height={3024}
              className="rounded-md"
            />
          </div>
          <p className="">
            Esta é a entrada do{' '}
            <strong>Complexo Desportivo de Cabreiros</strong>, local por onde os
            adeptos de ambas as equipas podem entrar para disfrutar dos jogos.
          </p>
          <div>
            <Image
              src="/images/facilities/sponsors.jpeg"
              alt="outside"
              width={4032}
              height={3024}
              className="rounded-md"
            />
          </div>
          <p className="">
            Este é o local onde os nossos patrocinadores oficias têm destaque,
            logo por cima da entrada para os balneários.
          </p>
          <div>
            <Image
              src="/images/facilities/stands.jpeg"
              alt="outside"
              width={4032}
              height={3024}
              className="rounded-md"
            />
          </div>
          <p className="">
            Estas são as bancadas do nosso complexo onde os adeptos podem
            disfrutar dos jogos protegidos dos elementos.
          </p>
          <div>
            <Image
              src="/images/facilities/balneario.jpeg"
              alt="outside"
              width={4032}
              height={3024}
              className="rounded-md"
            />
          </div>
          <p className="">
            Por fim, este é o balneário que é impreterivelmente utilizado pela
            nossa equipa sénior. Nele está escrito o nosso lema:{' '}
            <strong>
              Só é vencido aquele que admite a si mesmo que está derrotado!
            </strong>
          </p>
        </div>
      </div>
      <div className="flex flex-col space-y-6">
        <div className="flex flex-col">
          <h2 className="text-4xl text-gray-700 font-teko uppercase">
            Localização
          </h2>
          <div className="h-1 w-10 bg-green-600"></div>
        </div>
        <div className="flex flex-col space-y-4 items-center">
          <div className="flex space-x-2 items-center">
            <HiLocationMarker className="text-xl" />
            <p className="text-md">Lugar da Veiga, 4705-388 Cabreiros</p>
          </div>
          <button className="bg-gray-700 rounded-md text-white text-md p-4">
            <a
              href="https://www.google.com/maps/dir/41.5494826,-8.5830915/Sporting+Clube+de+Cabreiros/@41.5469208,-8.6005537,12z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0xd24ff59a5c87107:0xcb29ae4484692fd2!2m2!1d-8.4810956!2d41.5391717?hl=en"
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex space-x-2 items-center">
                <FaDirections className="text-xl" />
                <p>Direções</p>
              </div>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

Facilities.getLayout = (page: ReactElement) => (
  <Layout
    title="Instalações"
    description="Estas são as instalações que temos disponíveis para a prática desportiva."
    subpages={[{ title: 'Instalações', url: '/facilities' }]}
  >
    {page}
  </Layout>
);

export default Facilities;
