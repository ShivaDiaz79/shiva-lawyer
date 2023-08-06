import React from 'react'
import Layout from '../../../components/Layout'
import ServicioSelector from './components/servicioSelector'

const index = () => {
  return (
    <Layout>
    <div className='bg-red-800 h-full'>
      <ServicioSelector/>
    </div>
    </Layout>
  )
}

export default index