import React, { ReactElement } from 'react'
import Layout from '../../components/layouts/Layout'

const Membership = () => {}

Membership.getLayout = (page: ReactElement) => (
  <Layout title="Faz-te sócio">{page}</Layout>
)

export default Membership
