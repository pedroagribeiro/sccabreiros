import React, { ReactElement } from 'react';
import Layout from '../components/layouts/Layout';

const Facilities = () => {
  return <div></div>;
};

Facilities.getLayout = (page: ReactElement) => {
  <Layout
    title="Instalações"
    subpages={[{ title: 'Instalações', url: '/facilities' }]}
  >
    {page}
  </Layout>;
};

export default Facilities;
