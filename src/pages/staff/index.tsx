import React, { ReactElement } from 'react';
import Layout from '../../components/layouts/Layout';
import StaffCard from '../../components/staff/StaffCard';

const Staff = () => {
  return (
    <div className='flex flex-col space-y-8 relative px-4 pb-8 mx-auto mt-8 max-w-2xl sm:px-6 sm:mt-12 lg:px-8 lg:pb-10 lg:max-w-7xl text-gray-700'>
      <div className='flex flex-col space-y-6'>
        <div className='flex flex-col'>
          <h2 className='font-teko uppercase text-4xl text-gray-700 pb-0 font-normal'>
            Equipa Técnica
          </h2>
          <div className='h-1 w-10 bg-green-600'></div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:gap-10 gap-y-4'>
          <StaffCard
            first_name='Dinis'
            second_name='Rodrigues'
            photo='/images/staff/coaches/dinis_rodrigues.png'
            position='Treinador principal'
            number={1}
          />
          <StaffCard
            first_name='Carlos'
            second_name='Costa'
            photo='/images/staff/coaches/carlos_costa.png'
            position='Treinador adjunto'
            number={2}
          />
          <StaffCard
            first_name='Miguel'
            second_name='Costa'
            photo='/images/staff/coaches/miguel.png'
            position='Treinador Guarda-Redes'
            number={3}
          />
          <StaffCard
            first_name='José'
            second_name='Lopes'
            photo='/images/staff/coaches/jose_lopes.png'
            position='Treinador Guarda-Redes'
            number={4}
          />
        </div>
      </div>
      <div className='flex flex-col space-y-6'>
        <div className='flex flex-col'>
          <h2 className='font-teko uppercase text-4xl text-gray-700 pb-0 font-normal'>
            Direção
          </h2>
          <div className='h-1 w-10 bg-green-600'></div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:gap-10 gap-y-4'>
          <StaffCard
            first_name='Álvaro'
            second_name='Ferreira'
            photo='/images/staff/directors/alvaro_ferreira.png'
            position='Presidente'
            number={1}
          />
          <StaffCard
            first_name='Sebastião'
            second_name='Oliveira'
            photo='/images/staff/directors/sebastiao_oliveira.png'
            position='Vice-Presidente'
            number={2}
          />
          <StaffCard
            first_name='Isac'
            second_name='Silva'
            photo='/images/staff/directors/isac_silva.png'
            position='Vice-Presidente'
            number={3}
          />
          <StaffCard
            first_name='Bernardo'
            second_name='Ribeiro'
            photo='/images/staff/directors/bernardo_ribeiro.png'
            position='Diretor Desportivo'
            number={4}
          />
          <StaffCard
            first_name='Pedro'
            second_name='Ribeiro'
            photo='/images/staff/directors/pedro_ribeiro.png'
            position='Tesoureiro & Media'
            number={5}
          />
          <StaffCard
            first_name='Ricardo'
            second_name='Silva'
            photo='/images/staff/directors/ricardo_silva.png'
            position='Secretário'
            number={6}
          />
          <StaffCard
            first_name='Rui'
            second_name='Cruz'
            photo='/images/staff/directors/rui_cruz.png'
            position='Vice-Secretário'
            number={7}
          />
          <StaffCard
            first_name='João'
            second_name='Ribeiro'
            photo='/images/staff/directors/joao_ribeiro.png'
            position='Presidente da Assembleia-Geral'
            number={8}
          />
          <StaffCard
            first_name='Jorge'
            second_name='Gonçalves'
            photo='/images/staff/directors/jorge_gonçalves.png'
            position='Vice-Presidente da Assembleia Geral'
            number={9}
          />
          <StaffCard
            first_name='António'
            second_name='Ferreira'
            photo='/images/staff/directors/antonio_ferreira.png'
            position='Secretário da Assembleia-Geral'
            number={10}
          />
          <StaffCard
            first_name='Manuel'
            second_name='Oliveira'
            photo='/images/staff/directors/manuel_oliveira.png'
            position='Vice-secretário da Assembleia-Geral'
            number={11}
          />
          <StaffCard
            first_name='Francisco'
            second_name='Borges'
            photo='/images/staff/directors/francisco_borges.png'
            position='Presidente do Conselho Fiscal'
            number={12}
          />
          <StaffCard
            first_name='Domingos'
            second_name='Ferreira'
            photo='/images/staff/directors/domingos_ferreira.png'
            position='Vogal do Conselho Fiscal'
            number={13}
          />
          <StaffCard
            first_name='Hélder'
            second_name='Cardoso'
            photo='/images/staff/directors/helder_cardoso.png'
            position='Vogal da Direção'
            number={14}
          />
          <StaffCard
            first_name='Mário'
            second_name='Guimarães'
            photo='/images/staff/directors/mario_guimaraes.png'
            position='Vogal da Direção'
            number={15}
          />
        </div>
      </div>
    </div>
  );
};

Staff.getLayout = (page: ReactElement) => (
  <Layout
    title='Staff'
    description='Fica a conhecer as pessoas que tornam tudo possível.'
    subpages={[{ title: 'Staff', url: '/staff' }]}
  >
    {page}
  </Layout>
);

export default Staff;
