import React from 'react'
// import logo from '../logo.svg'
import './styles/navbar.sass'

const Navbar = () => {
  return (
  <div className='navbar'>
    {/* <img src={logo} alt='' className='logo'/> */}
    <div className='rightside'>
      <a href="/blog">Blog</a>
      <a href="/about">Useful Resources</a>
        {/* <a href="/contact">language switch</a> */}
      <a href="/contact">AVATAR</a>
    </div>
  </div>
    
  )
}

export default Navbar