import React, { ReactElement } from 'react';
import Layout from '../../components/layouts/Layout';
import StaffCard from '../../components/staff/StaffCard';

const Staff = () => {
  return (
    <div className="flex flex-col space-y-8 relative px-4 pb-8 mx-auto mt-8 max-w-2xl sm:px-6 sm:mt-12 lg:px-8 lg:pb-10 lg:max-w-7xl text-gray-700">
      <div className="flex flex-col space-y-6">
        <div className="flex flex-col">
          <h2 className="font-agencygothic text-4xl text-gray-700">
            Equipa Técnica
          </h2>
          <div className="h-1 w-10 bg-green-600"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:gap-10 gap-y-4">
          <StaffCard
            first_name="Dinis"
            second_name="Rodrigues"
            photo="/images/staff/coaches/dinis_rodrigues.png"
            position="Treinador principal"
            number={1}
          />
          <StaffCard
            first_name="Carlos"
            second_name="Costa"
            photo="/images/staff/coaches/carlos_costa.png"
            position="Treinador adjunto"
            number={2}
          />
          <StaffCard
            first_name="Miguel"
            second_name="Costa"
            photo="/images/staff/coaches/miguel.png"
            position="Treinador Guarda-Redes"
            number={3}
          />
          <StaffCard
            first_name="José"
            second_name="Lopes"
            photo="/images/staff/coaches/jose_lopes.png"
            position="Treinador Guarda-Redes"
            number={4}
          />
        </div>
      </div>
      <div className="flex flex-col space-y-6">
        <div className="flex flex-col">
          <h2 className="font-agencygothic text-4xl text-gray-700">Direção</h2>
          <div className="h-1 w-10 bg-green-600"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:gap-10 gap-y-4"></div>
      </div>
    </div>
  );
};

Staff.getLayout = (page: ReactElement) => (
  <Layout title="Staff" subpages={[{ title: 'Staff', url: '/staff' }]}>
    {page}
  </Layout>
);

export default Staff;
