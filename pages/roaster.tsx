import type { NextPage } from 'next'
import React, { ReactElement } from 'react'
import Layout from '../components/layouts/Layout'
import PlayerCard from '../components/roaster/PlayerCard'
import { GiLion } from 'react-icons/gi'

const Roaster = () => {
  return (
    <div className="relative px-4 pb-8 mx-auto mt-8 max-w-2xl sm:px-6 sm:mt-20 lg:px-8 lg:pb-0 lg:max-w-7xl text-green-600">
      <div className="mb-10 ">
        <span className="w-full flex space-x-2 mb-4 rounded-md px-6 py-2 items-center md:justify-start justify-center">
          <GiLion size={30} />
          <p className="text-2xl uppercase">Guarda-Redes</p>
        </span>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:gap-10 gap-y-4">
          <PlayerCard
            number={1}
            fullname="Malhão"
            photo="/roaster/goalkeepers/malhao.png"
            nationality="PT"
            age={36}
          />
        </div>
      </div>
      <div className="mb-10">
        <span className="w-full flex space-x-2 mb-4 rounded-md px-6 py-2 items-center md:justify-start justify-center">
          <GiLion size={30} />
          <p className="text-2xl uppercase">Defesas</p>
        </span>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:gap-10 gap-y-4">
          <PlayerCard
            number={4}
            fullname="Francisco Brito"
            photo="/roaster/backline/francisco_brito.png"
            nationality="PT"
            age={22}
          />
          <PlayerCard
            number={25}
            fullname="Klayve"
            photo="/roaster/backline/klayve.png"
            nationality="BR"
            age={21}
          />
          <PlayerCard
            number={22}
            fullname="Luiz Alberto"
            photo="/roaster/backline/luiz_alberto.png"
            nationality="BR"
            age={39}
          />
          <PlayerCard
            number={3}
            fullname="Ricardo Machado"
            photo="/roaster/backline/ricardo_machado.png"
            nationality="PT"
            age={28}
          />
          <PlayerCard
            number={5}
            fullname="Ruizinho"
            photo="/roaster/backline/ruizinho.png"
            nationality="PT"
            age={28}
          />
        </div>
      </div>
      <div className="mb-10">
        <span className="w-full flex space-x-2 mb-4 rounded-md px-6 py-2 items-center md:justify-start justify-center">
          <GiLion size={30} />
          <p className="text-2xl uppercase">Médios</p>
        </span>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:gap-10 gap-y-4">
          <PlayerCard
            number={38}
            fullname="Jorginho"
            photo="/roaster/mediums/jorginho.png"
            nationality="PT"
            age={22}
          />
          <PlayerCard
            number={25}
            fullname="Nuno Gomes"
            photo="/roaster/mediums/nuno_gomes.png"
            nationality="PT"
            age={21}
          />
          <PlayerCard
            number={10}
            fullname="Valtinho"
            photo="/roaster/mediums/valtinho.png"
            nationality="PT"
            age={28}
          />
        </div>
      </div>
      <div className="mb-10">
        <span className="w-full flex space-x-2 mb-4 rounded-md px-6 py-2 items-center md:justify-start justify-center">
          <GiLion size={30} />
          <p className="text-2xl uppercase">Avançados</p>
        </span>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:gap-10 gap-y-4">
          <PlayerCard
            number={9}
            fullname="João Tiago"
            photo="/roaster/strikers/joao_tiago.png"
            nationality="PT"
            age={22}
          />
          <PlayerCard
            number={90}
            fullname="Tekla"
            photo="/roaster/strikers/tekla.png"
            nationality="PT"
            age={28}
          />
          <PlayerCard
            number={30}
            fullname="Ukra"
            photo="/roaster/strikers/ukra.png"
            nationality="PT"
            age={22}
          />
        </div>
      </div>
    </div>
  )
}

Roaster.getLayout = (page: ReactElement) => <Layout>{page}</Layout>

export default Roaster
