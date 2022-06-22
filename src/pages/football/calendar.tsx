import React, { ReactElement } from 'react'
import Layout from '../../components/layouts/Layout'

const Calendar = () => {}

Calendar.getLayout = (page: ReactElement) => (
  <Layout title="Calendário">{page}</Layout>
)

export default Calendar
