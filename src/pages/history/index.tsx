import React, { ReactElement } from 'react';
import Layout from '../../components/layouts/Layout';
import Image from 'next/image';

const History = () => {
  return (
    <div className="px-6 md:px-16 2xl:px-64 mt-14 mb-8">
      <div className="max-w-6xl flex flex-col space-y-6 items-center mx-6 md:mx-32 lg:mx-72 text-lg text-gray-700">
        <p>
          O <strong>Sporting Clube de Cabreiros</strong> foi fundado a{' '}
          <strong>15 de agosto de 1932</strong> o que faz do clube um dos mais
          antigos da Associação de Futebol de Braga. Ainda durante este ano o
          clube completará <strong>90 anos</strong> de história, sendo que a
          mesma conta os mesmos anos de participação ininterrupta nas provas
          distritais e colaboração com elementos da nossa freguesia.
        </p>
        <div className="w-full flex flex-col space-y-8 justify-around items-center md:flex-row md:space-y-0">
          <div className="flex flex-col space-y-2 items-center">
            <Image
              src="/images/emblema.png"
              alt="emblema"
              width={98}
              height={132}
            />
            <p className="text-sm">Emblema do clube</p>
          </div>
          <div className="flex flex-col space-y-2 items-center">
            <Image
              src="/images/junta_freguesia.png"
              alt="freguesia"
              width={100}
              height={105}
            />
            <p className="text-sm">Brasão da freguesia</p>
          </div>
        </div>
        <p>
          A atividade do clube manifesta-se exclusivamente na modalidade de
          futebol sendo que atualmente o clube possui uma equipa de séniores e
          uma equipa de juvenis.
        </p>
        <p>
          No presente, as instalações do clube localizam-se na{' '}
          <strong>Rua da Veiga em Cabreiros</strong>, onde fica o
          <strong>Complexo Desportivo de Cabreiros</strong>. No entanto, o clube
          já teve outras casas: até à inauguração do novo complexo o Cabreiros
          teve com a sua casa o Campo de Futebol do Monte das Cruzes.
        </p>
        <p>
          A realidade atual do clube faz com que as principais prioridades
          passem pelo <strong>fomento do crescimento da formação</strong> e
          manutenção da equipa sénior na divisão que atualmente frequenta:
          Pró-Nacional da Associação de Futebol de Braga. Os objetivos
          principais da atual direção são providenciar aos jovens todas as
          condições para crescerem enquanto jogadores e enquanto pessoas com o
          objetivo de, no futuro, a equipa sénior ser alimentada
          prioritariamente com talento proveniente da terra. Este tipo de
          estratégia, acreditamos, potencia a sustentabilidade do clube e as
          suas condições de permanência numa realidade, cada vez mais, difícil.
        </p>
        <div className="mt-12 flex flex-col space-y-4 items-center">
          <Image
            src="/formation/everyone.jpg"
            alt="formation"
            width={600}
            height={400}
            className="rounded-md"
          />
          <p className="text-sm">Equipa de iniciados da época 2021/2022</p>
        </div>
      </div>
    </div>
  );
};

History.getLayout = (page: ReactElement) => (
  <Layout title="História" subpages={[{ title: 'História', url: '/history' }]}>
    {page}
  </Layout>
);

export default History;
