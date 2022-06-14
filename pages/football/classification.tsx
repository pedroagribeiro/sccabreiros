import React, { ReactElement } from 'react'
import Layout from '../../components/layouts/Layout'
import ClassificationTable from '../../components/table/ClassificationTable'

const Classification = () => {
  return <ClassificationTable />
}

Classification.getLayout = (page: ReactElement) => (
  <Layout title="Classificação">{page}</Layout>
)

export default Classification
