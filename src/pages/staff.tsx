import React, { ReactElement } from 'react';
import Layout from '../components/layouts/Layout';
import StaffCard from '../components/staff/StaffCard';

const Staff = () => {
  return (
    <div className="relative px-4 pb-8 mx-auto mt-8 max-w-2xl sm:px-6 sm:mt-20 lg:px-8 lg:pb-0 lg:max-w-7xl bg-gray-100 text-gray-700">
      <div className="flex flex-col space-y-2 pb-10">
        <h2 className="text-green-600 text-2xl font-bold uppercase">
          Equipa Técnica
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:gap-10 gap-y-4">
        <StaffCard
          first_name="Dinis"
          second_name="Rodrigues"
          photo="/staff/coaches/dinis_rodrigues.png"
          position="Treinador principal"
        />
        <StaffCard
          first_name="Carlos"
          second_name="Costa"
          photo="/staff/coaches/carlos_costa.png"
          position="Treinador adjunto"
        />
        <StaffCard
          first_name="Miguel"
          second_name="Costa"
          photo="/staff/coaches/miguel.png"
          position="Treinador Guarda-Redes"
        />
        <StaffCard
          first_name="José"
          second_name="Lopes"
          photo="/staff/coaches/jose_lopes.png"
          position="Treinador Guarda-Redes"
        />
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
