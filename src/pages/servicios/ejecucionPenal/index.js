import React from 'react'
import Layout from '../../../../components/Layout'
import SectionEjecucionPenal from './components/sectionEjecucionPenal'

const index = () => {
  return (
    <Layout>

    <header className="bg-black py-4">
        <SectionEjecucionPenal/>
      </header>
      </Layout>
  )
}

export default index