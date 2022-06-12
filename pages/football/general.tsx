import React, { ReactElement } from 'react'
import Layout from '../../components/layouts/Layout'

const GeneralView = () => {}

GeneralView.getLayout = (page: ReactElement) => (
  <Layout title="Vista geral">{page}</Layout>
)

export default GeneralView
