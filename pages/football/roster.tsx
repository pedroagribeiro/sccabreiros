import React, { ReactElement } from 'react'
import Layout from '../../components/layouts/Layout'
import PlayerCard from '../../components/roster/PlayerCard'

const Roster = () => {
  return (
    <div className="relative px-4 pb-8 mx-auto mt-8 max-w-2xl sm:px-6 sm:mt-20 lg:px-8 lg:pb-0 lg:max-w-7xl bg-gray-100 text-gray-700">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:gap-10 gap-y-4">
        <PlayerCard
          zerozero={420909}
          position="Guarda-Redes"
          number={1}
          first_name="Malhão"
          photo="/roster/goalkeepers/malhao.png"
          nationality="PT"
          age={36}
        />
        <PlayerCard
          zerozero={807849}
          position="Defesa Central"
          number={4}
          first_name="Francisco"
          second_name="Brito"
          photo="/roster/backline/francisco_brito.png"
          nationality="PT"
          age={22}
        />
        <PlayerCard
          zerozero={693872}
          position="Defesa Esquerdo"
          number={25}
          first_name="Klayve"
          photo="/roster/backline/klayve.png"
          nationality="BR"
          age={21}
        />
        <PlayerCard
          zerozero={66887}
          position="Defesa Central"
          number={22}
          first_name="Luiz"
          second_name="Alberto"
          photo="/roster/backline/luiz_alberto.png"
          nationality="BR"
          age={39}
        />
        <PlayerCard
          zerozero={424671}
          position="Defesa Central"
          number={3}
          first_name="Ricardo"
          second_name="Machado"
          photo="/roster/backline/ricardo_machado.png"
          nationality="PT"
          age={28}
        />
        <PlayerCard
          zerozero={167092}
          position="Defesa Esquerdo"
          number={5}
          first_name="Ruizinho"
          photo="/roster/backline/ruizinho.png"
          nationality="PT"
          age={28}
        />
        <PlayerCard
          zerozero={647721}
          position="Médio Centro"
          number={38}
          first_name="Jorginho"
          photo="/roster/mediums/jorginho.png"
          nationality="PT"
          age={22}
        />
        <PlayerCard
          zerozero={807835}
          position="Médio Centro"
          number={25}
          first_name="Nuno"
          second_name="Gomes"
          photo="/roster/mediums/nuno_gomes.png"
          nationality="PT"
          age={21}
        />
        <PlayerCard
          zerozero={610925}
          position="Médio Centro"
          number={10}
          first_name="Valtinho"
          photo="/roster/mediums/valtinho.png"
          nationality="PT"
          age={28}
        />
        <PlayerCard
          zerozero={635892}
          position="Avançado"
          number={9}
          first_name="João"
          second_name="Tiago"
          photo="/roster/strikers/joao_tiago.png"
          nationality="PT"
          age={22}
        />
        <PlayerCard
          zerozero={418173}
          position="Avançado"
          number={90}
          first_name="Tekla"
          photo="/roster/strikers/tekla.png"
          nationality="PT"
          age={28}
        />
        <PlayerCard
          zerozero={805673}
          position="Avançado Esquerdo"
          number={30}
          first_name="Ukra"
          photo="/roster/strikers/ukra.png"
          nationality="PT"
          age={22}
        />
        <PlayerCard
          zerozero={446060}
          position="Avançado Direito"
          number={97}
          first_name="Binho"
          photo="/roster/strikers/binho.png"
          nationality="BR"
          age={24}
        />
      </div>
    </div>
  )
}

Roster.getLayout = (page: ReactElement) => (
  <Layout title="Plantel 2022/2023">{page}</Layout>
)

export default Roster
