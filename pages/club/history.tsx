import React, { ReactElement } from 'react'
import Layout from '../../components/layouts/Layout'

const History = () => {}

History.getLayout = (page: ReactElement) => (
  <Layout title="História">{page}</Layout>
)

export default History
