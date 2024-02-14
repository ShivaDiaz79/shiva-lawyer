import React from 'react'
import Layout from '../../../components/Layout'
import SectionContacto from './components/sectionContacto'
import SectionHorarios from './components/sectionHorarios'
import ContactPage from './components/ContactPage'



const index = () => {
  return (
  <Layout>
    <footer className='mx-auto'>
    
    </footer>
    <header className='pt-4 px-6'>
      <SectionContacto/>‚
    </header>
    <footer className=''>
  <ContactPage/>
    </footer>
  </Layout>
  )
}

export default index