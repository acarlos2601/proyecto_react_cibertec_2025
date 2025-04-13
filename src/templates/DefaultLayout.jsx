import React from 'react'
import Header from '../components/header'
import { Footer } from '../components/footer'
import { Outlet } from 'react-router-dom'

const DefaultLayout = () => {
  return (
    <div className='template-container'>
        <Header />
        <main className='layout-container' >
            <Outlet />
        </main> 
        <Footer />
    </div>
  )
}

export default DefaultLayout

