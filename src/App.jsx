import React from 'react'
import './App.css'
import Shop from './pages/shop/Shop'
import { Link, Route, Router, Routes } from 'react-router-dom'
import Cart from './pages/cart/Cart'
import Header from './comp/header/Header'
export default function App() {
  return (


 <>






 <Routes>
  <Route path='/' element={<Shop/>}/>
  <Route path='/chair/:id' element={<Cart/>}/>

</Routes>
 
 </>



  )
}
