import React, { ReactElement } from 'react'
import Layout from '../../components/layouts/Layout'

const Classification = () => {}

Classification.getLayout = (page: ReactElement) => (
  <Layout title="Classificação">{page}</Layout>
)

export default Classification
