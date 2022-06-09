import type { NextPage } from 'next'
import React, { ReactElement } from 'react'
import Layout from '../components/layouts/Layout'
import PlayerCard from '../components/roaster/PlayerCard'
import { GiLion } from 'react-icons/gi'

const Roaster: NextPage = () => {
  return (
    <div className="relative px-4 pb-8 mx-auto mt-8 max-w-2xl sm:px-6 sm:mt-20 lg:px-8 lg:pb-0 lg:max-w-7xl text-green-600">
      <div className="mb-10">
        <span className="w-full flex space-x-2 mb-4 text-white bg-green-600 rounded-md px-6 py-2 items-center">
          <GiLion size={30} />
          <p className="text-2xl uppercase">Guarda-Redes</p>
        </span>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:gap-10 space-y-8 md:space-y-4">
          <PlayerCard
            fullname="Malhão"
            photo="/roaster/goalkeepers/malhao.png"
            nationality="Portuguesa"
            age={36}
          />
        </div>
      </div>
      <div className="mb-10">
        <span className="w-full flex space-x-2 mb-4 text-white bg-green-600 rounded-md px-6 py-2 items-center">
          <GiLion size={30} />
          <p className="text-2xl uppercase">Defesas</p>
        </span>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:gap-10 space-y-8 md:space-y-4">
          <PlayerCard
            fullname="Francisco Brito"
            photo="/roaster/backline/francisco_brito.png"
            nationality="Portuguesa"
            age={22}
          />
          <PlayerCard
            fullname="Klayve"
            photo="/roaster/backline/klayve.png"
            nationality="Brasileira"
            age={21}
          />
          <PlayerCard
            fullname="Luiz Alberto"
            photo="/roaster/backline/luiz_alberto.png"
            nationality="Brasileira"
            age={39}
          />
          <PlayerCard
            fullname="Ricardo Machado"
            photo="/roaster/backline/ricardo_machado.png"
            nationality="Portuguesa"
            age={28}
          />
          <PlayerCard
            fullname="Ruizinho"
            photo="/roaster/backline/ruizinho.png"
            nationality="Portuguesa"
            age={28}
          />
        </div>
      </div>
      <div className="mb-10">
        <span className="w-full flex space-x-2 mb-4 text-white bg-green-600 rounded-md px-6 py-2 items-center">
          <GiLion size={30} />
          <p className="text-2xl uppercase">Médios</p>
        </span>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:gap-10 space-y-8 md:space-y-4">
          <PlayerCard
            fullname="Jorginho"
            photo="/roaster/mediums/jorginho.png"
            nationality="Portuguesa"
            age={22}
          />
          <PlayerCard
            fullname="Nuno Gomes"
            photo="/roaster/mediums/nuno_gomes.png"
            nationality="Portuguesa"
            age={21}
          />
          <PlayerCard
            fullname="Valtinho"
            photo="/roaster/mediums/valtinho.png"
            nationality="Portuguesa"
            age={28}
          />
        </div>
      </div>
      <div className="mb-10">
        <span className="w-full flex space-x-2 mb-4 text-white bg-green-600 rounded-md px-6 py-2 items-center">
          <GiLion size={30} />
          <p className="text-2xl uppercase">Avançados</p>
        </span>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:gap-10 space-y-8 md:space-y-4">
          <PlayerCard
            fullname="João Tiago"
            photo="/roaster/strikers/joao_tiago.png"
            nationality="Portuguesa"
            age={22}
          />
          <PlayerCard
            fullname="Tekla"
            photo="/roaster/strikers/tekla.png"
            nationality="Portuguesa"
            age={28}
          />
          <PlayerCard
            fullname="Ukra"
            photo="/roaster/strikers/ukra.png"
            nationality="Portuguesa"
            age={22}
          />
        </div>
      </div>
    </div>
  )
}

Roaster.getLayout = (page: ReactElement) => <Layout>{page}</Layout>

export default Roaster
