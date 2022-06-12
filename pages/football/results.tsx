import React, { ReactElement } from 'react'
import Layout from '../../components/layouts/Layout'

const Results = () => {}

Results.getLayout = (page: ReactElement) => (
  <Layout title="Últimos resultados">{page}</Layout>
)

export default Results
