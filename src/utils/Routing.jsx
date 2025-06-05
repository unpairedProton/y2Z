import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../pages/Home.jsx'


const Routing = () => {
  return (
        <Routes>
            <Route path='/' element={<Home/>}></Route>
        </Routes>
  )
}

export default Routing