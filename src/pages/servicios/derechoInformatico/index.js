import React from 'react'
import Layout from '../../../../components/Layout'
import SectionInformatico from './components/sectionInformatico'
const index = () => {
  return (
    <Layout>
     <header className="bg-black py-4">
        <SectionInformatico/>
      </header>
    </Layout>
  )
}

export default index