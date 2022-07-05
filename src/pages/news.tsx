import React, { ReactElement } from 'react';
import Layout from '../components/layouts/Layout';

const News = () => {};

News.getLayout = (page: ReactElement) => (
  <Layout title="Notícias" subpages={[{ title: 'Notícias', url: '/news' }]}>
    {page}
  </Layout>
);

export default News;
