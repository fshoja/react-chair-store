import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
     <header>
      <Link className='btn2' to='/'>
      <button >Back</button>
      </Link>

  
  </header>
  )
}
