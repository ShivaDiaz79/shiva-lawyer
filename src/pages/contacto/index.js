import React from 'react'
import Layout from '../../../components/Layout'
import SectionContacto from './components/sectionContacto'
import SectionHorarios from './components/sectionHorarios'

const index = () => {
  return (
  <Layout>
    <footer className='mx-auto'>
      <SectionHorarios/>
    </footer>
    <header className='pt-4 px-6'>
      <SectionContacto/>‚
    </header>
  </Layout>
  )
}

export default index