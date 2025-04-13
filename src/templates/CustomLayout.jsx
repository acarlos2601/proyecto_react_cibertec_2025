import React from 'react'
import { Outlet } from 'react-router-dom'

const CustomLayout = () => {
  return (
    <div className='template-container'>
        <main className='layout-container' >
            <div>
                <Outlet />
            </div>
            
        </main> 
    </div>
  )
}

export default CustomLayout