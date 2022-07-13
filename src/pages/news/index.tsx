import React, { ReactElement, useState } from 'react';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import Layout from '../../components/layouts/Layout';
import { Formik, Form, Field } from 'formik';
import InfoModal from '../../components/navigation/InfoModal';
import { inferQueryResponse } from '../api/trpc/[trpc]';
import { trpc } from '../../utils/trpc';

const News = () => {
  return <div> </div>;
};

News.getLayout = (page: ReactElement) => (
  <Layout title="Notícias" subpages={[{ title: 'Notícias', url: '/news' }]}>
    {page}
  </Layout>
);

export default News;
