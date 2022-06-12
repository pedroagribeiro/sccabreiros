import React, { ReactElement } from 'react'
import Layout from '../../components/layouts/Layout'
import Image from 'next/image'
import OfficialPartner from '../../components/partners/OfficialPartner'

const Partners = () => {
  return (
    <div className="flex flex-col items-center md:items-start px-4 pb-8 mx-auto mt-8 max-w-2xl sm:px-6 sm:mt-20 lg:px-8 lg:pb-0 lg:max-w-7xl text-green-600">
      <h3 className="text-3xl md:text-start">Patrocinadores oficiais</h3>
      <div className="flex flex-col space-y-6 mt-10 mb-16">
        <OfficialPartner
          image="/partners/cpw.png"
          name="CPW Engenharia"
          description="Fundada em Maio de 2010 com sede em Povoa de Lanhoso, a empresa CPW desenvolve a sua atividade na área da construção civil, dedicando-se maioritariamente à execução de empreitadas de obras públicas."
          website="https://cpwengenharia.webnode.pt/"
          facebook="https://www.facebook.com/CPW-Engenharia-109867074482676/"
        />
        <OfficialPartner
          image="/partners/ledechem.png"
          name="Ledechem"
          description="Em 2020, a Ledechem apresentou-se com uma nova imagem corporativa. O objectivo era reforçar e sublinhar a filosofia inovadora da empresa. Hoje, a Ledechem é uma referência portuguesa no sector, trazendo produtos certificados para o mercado, investindo continuamente na eco-eficiência."
          website="https://ledechem.pt/en/"
          facebook="https://www.facebook.com/ledechem/"
          instagram="https://www.instagram.com/ledechem.pt/"
        />
        <OfficialPartner
          image="/partners/lp_rr_contabilidade.png"
          name="LP & RR - Contabilidade & Seguros"
          description="Promover o desenvolvimento dos seus clientes permitindo que os ambientes económicos, financeiros e tributários não representem problemas, mas vantagens. Atingir o sucesso pela cooperação com os seus clientes. Ser um verdadeiro parceiro dos seus clientes, oferecendo um serviço altamente especializado, qualificado e profissional."
          website="https://www.lp-rr.com/?"
          facebook="https://www.facebook.com/LuisPereiraeRuiRamos/"
        />
      </div>
    </div>
  )
}

Partners.getLayout = (page: ReactElement) => (
  <Layout title="Parceiros">{page}</Layout>
)
export default Partners
