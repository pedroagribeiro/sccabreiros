import React, { ReactElement } from 'react'
import Layout from '../../components/layouts/Layout'
import Image from 'next/image'

const History = () => {
  return (
    <div className="my-16 text-gray-700">
      <div className="max-w-6xl flex flex-col space-y-6 items-center mx-6 md:mx-32 lg:mx-72 text-lg">
        <p>
          O Sporting Clube de Cabreiros foi fundado a 15 de agosto de 1932 o que
          faz do clube um dos mais antigos da Associação de Futebol de Braga.
          Importante também frisar que o clube milita initerruptamente as
          divisões do futebol distrital desde a sua criação.
        </p>
        <p>
          A atividade do clube manifesta-se exclusivamente na modalidade de
          futebol sendo que atualmente o Sporting Clube de Cabreiros possui uma
          equipa de séniores e uma equipa de iniciados.
        </p>
        <p>
          No presente, as instalações do clube localizam-se na Rua da Veiga em
          Cabreiros, onde fica também o Complexo Desportivo de Cabreiros. No
          entanto, o clube já teve outras casas: até à inauguração do novo
          complexo o Cabreiros teve com a sua casa o Campo de Futebol do Monte
          das Cruzes.
        </p>
        <div className="mt-12">
          <Image
            src="/seniors/game.jpg"
            alt="game"
            width={600}
            height={400}
            className="rounded-md"
          />
        </div>
        <p>
          A realidade atual do clube faz com que as principais prioridades
          passem pelo fomento do crescimento da formação e manutenção da equipa
          sénior na divisão que atualmente frequenta: Pró-Nacional da Associação
          de Futebol de Braga. Os objetivos principais da atual direção são
          providenciar aos jovens todas as condições para crescerem enquanto
          jogadores e enquanto pessoas com o objetivo de, no futuro, a equipa
          sénior ser alimentada prioritariamente com talento proveniente da
          terra. Este tipo de estratégia, acreditamos, potencia a
          sustentabilidade do clube e as suas condições de permanência numa
          realidade, cada vez mais, difícil.
        </p>
        <div className="mt-12">
          <Image
            src="/formation/everyone.jpg"
            alt="formation"
            width={600}
            height={400}
            className="rounded-md"
          />
        </div>
      </div>
    </div>
  )
}

History.getLayout = (page: ReactElement) => (
  <Layout title="História">{page}</Layout>
)

export default History
