import React from 'react'
import '../styles/Navbar.css' // Assuming you have a CSS file for styles
import { Link } from 'react-router-dom'
import  logo from '../assets/icons/logo.svg'

const Navbar = () => {
  return (
    <header className='w-full p-4 flex flex-col'>
        <Link to={'/'}  >
        <img  className='h-8 w-auto' src={logo} alt="" />
        </Link>

    <button id="hamburger" className="lg:hidden text-white p-2 z-50" aria-label="Toggle navigation menu">
      <div className="burger">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </button>

        <nav className='w-full'>

        </nav>
    </header>
  )
}

export default Navbar