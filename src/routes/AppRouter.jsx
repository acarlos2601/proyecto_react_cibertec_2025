import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Productos from '../pages/Productos'
import { CustomLayout, DefaultLayout } from '../templates'
import NotFound from '../pages/NotFound'
import Usuarios from '../pages/Usuarios'

const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<DefaultLayout />} >
                <Route path='/' element={ <Home/> } />
                <Route path='/login' element={ <Login /> } />
                <Route path='/productos' element = { <Productos /> } /> 
                <Route path='/usuarios'  element = { <Usuarios /> } />
            </Route>

            <Route element={<CustomLayout /> } >
                <Route path='*'element={<NotFound />} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter