import React, { ReactElement } from 'react';
import Layout from '../components/layouts/Layout';

const Youngsters = () => {
  return <div></div>;
};

Youngsters.getLayout = (page: ReactElement) => {
  <Layout
    title="Formação"
    subpages={[{ title: 'Formação', url: '/youngsters' }]}
  >
    {page}
  </Layout>;
};

export default Youngsters;
