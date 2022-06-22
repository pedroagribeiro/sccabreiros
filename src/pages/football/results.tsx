import React, { ReactElement } from 'react'
import Layout from '../../components/layouts/Layout'
import PastFixture from '../../components/result/PastFixture'

const Results = () => {
  return (
    <div className="flex justify-center items-center mt-16 mb-16 text-gray-700">
      <div className="max-w-6xl flex flex-col space-y-0 items-center mx-6 md:mx-32 lg:mx-72 ">
        <div className="grid grid-cols-1 space-y-6 md:space-y-0 md:grid-cols-2 md:gap-8">
          <PastFixture
            date="16/04/2022"
            location="home"
            venue_name="Complexo Desportivo de Cabreiros"
            result_type="defeat"
            home_team="S.C Cabreiros"
            away_team="G.D.R Esporões"
            home_scored_goals={0}
            away_scored_goals={1}
            home_team_symbol_path="/emblema.png"
            away_team_symbol_path="/oponents/championship/gdr_esporoes.png"
            competition="Pró-Nacional A.F Braga"
            round="Jornada 26"
          />
          <PastFixture
            date="26/03/2022"
            location="home"
            venue_name="Complexo Desportivo de Cabreiros"
            result_type="defeat"
            home_team="S.C Cabreiros"
            away_team="Dumiense/CJP II"
            home_scored_goals={1}
            away_scored_goals={2}
            home_team_symbol_path="/emblema.png"
            away_team_symbol_path="/oponents/championship/dumiense.png"
            competition="Pró-Nacional A.F Braga"
            round="Jornada 24"
          />
          <PastFixture
            date="13/03/2022"
            location="home"
            venue_name="Complexo Desportivo de Cabreiros"
            result_type="defeat"
            home_team="S.C Cabreiros"
            away_team="F.C Marinhas"
            home_scored_goals={1}
            away_scored_goals={0}
            home_team_symbol_path="/emblema.png"
            away_team_symbol_path="/oponents/championship/fc_marinhas.png"
            competition="Pró-Nacional A.F Braga"
            round="Jornada 22"
          />
          <PastFixture
            date="24/10/2021"
            location="away"
            venue_name="Campo 1º de Janeiro"
            result_type="win"
            home_team="S.C Ucha"
            away_team="S.C Cabreiros"
            home_scored_goals={0}
            away_scored_goals={5}
            home_team_symbol_path="/oponents/championship/sc_ucha.png"
            away_team_symbol_path="/emblema.png"
            competition="Pró-Nacional A.F Braga"
            round="Jornada 7"
          />
        </div>
      </div>
    </div>
  )
}

Results.getLayout = (page: ReactElement) => (
  <Layout title="Últimos resultados">{page}</Layout>
)

export default Results
