import React from 'react'
import Layout from '../../../../components/Layout'
import SectionFamilia from './components/sectionFamilia'
const index = () => {
  return (
    <Layout>
     <header className="bg-black py-4">
        <SectionFamilia/>
      </header>
    </Layout>
  )
}

export default index