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
