import React from 'react'
import Layout from '../../../../components/Layout'
import SectionNotarial from './components/sectionNotarial'

const index = () => {
  return (
    <Layout>
     <header className="bg-black py-4">
        <SectionNotarial/>
      </header>
    </Layout>
  )
}

export default index