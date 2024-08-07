import React, { useState } from 'react'
import { FaSearch, FaShoppingBag, FaTimes } from 'react-icons/fa'
import logo from '../../public/logo.png'
import {  FaBars, FaUser } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu =()=>{
    setIsMenuOpen(!isMenuOpen)
  }


  const navItems = [
    {title: "Jewelry & Accessories", path: "/"},
    {title: "Clothing & shoes", path: "/"},
    {title: "Home & Living", path: "/"},
    {title: "Wedding & Party", path: "/"},
    {title: "Toys & Entertainment", path: "/"},
    {title: "Art & Collections", path: "/"},
    {title: "Craft Supplies & Tools", path: "/"}
  ]


  return (
    <div className='max-w-screen-2xl xl:px-28 px-4 lg:mx-16 mx-10 absolute top-0 right-0 left-0'>
      <nav className='flex justify-between items-center md:py-4 pt-6 pb-3'>
        <FaSearch className='text-black w-5 h-5 cursor-pointer hidden md:block'/>
        <a href="/"><img src={logo} alt="" className='w-32'/></a>

        {/* account and shopping btn */}
        <div className='text-lg text-black sm:flex items-center gap-4 hidden '>
          <a href="/" className='flex items-center gap-2'><FaUser/>Acount</a>
          <a href="/" className='flex items-center gap-2'><FaShoppingBag/>Shopping</a>
        </div>

        {/* navbar for sm devices */}
        <div className='lg:hidden'>
          <button onClick={toggleMenu}> 
            {
              isMenuOpen ? <FaTimes/> : <FaBars className='w-5 h-5 text-black'/>
            }
          </button>
        </div>
      </nav>
      <hr />

      {/* category itemd */}
      <div className='pt-4'>
        <ul className='lg:flex items-center justify-between text-black gap-5 hidden'>
          {
            navItems.map(({title,path}) => (
              <li key={title} className='hover:text-orange-500'>
                <Link to="/">{title}</Link>
              </li>
            ))
          }
        </ul>
      </div>

      {/* only mobile menu items */}
      <div>
      <ul className={`bg-black text-white px-6 py-4 rounded ${isMenuOpen ? "" :"hidden" }`}>
          {
            navItems.map(({title,path}) => (
              <li key={title} className='hover:text-orange-500 my-3 cursor-pointer'>
                <Link to="/">{title}</Link>
              </li>
            ))
          }
        </ul>
      </div>

    </div>
  )
}

export default Navbar
