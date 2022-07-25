import React, { ReactElement } from 'react';
import Layout from '../../components/layouts/Layout';
import ClassificationTable from '../../components/table/ClassificationTable';

const Classification = () => {
  return (
    <div className="px-6 md:px-16 2xl:px-64 mt-8 mb-8">
      <ClassificationTable />
    </div>
  );
};

Classification.getLayout = (page: ReactElement) => (
  <Layout
    title="Classificação"
    description="Nesta secção podem ser consultadas as classificações da nossa equipa sénior nos campeonatos ao longo dos anos."
    subpages={[
      { title: 'Próximos Jogos', url: '/games/fixtures' },
      { title: 'Resultados', url: '/games/results' },
      { title: 'Classificação', url: '/games/classification' },
    ]}
  >
    {page}
  </Layout>
);

export default Classification;
