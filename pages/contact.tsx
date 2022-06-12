import React, { ReactElement } from 'react'
import Layout from '../components/layouts/Layout'

const Contact = () => {}

Contact.getLayout = (page: ReactElement) => (
  <Layout title="Contacte-nos">{page}</Layout>
)

export default Contact
