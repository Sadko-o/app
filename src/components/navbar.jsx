import React from 'react'
import './styles/navbar.sass'
import { SwitchLanguage } from './switchLanguage'
import user from '../assets/User.png'

const Navbar = () => {
  return (
  <div className='navbar'>
    <div className='rightside'>
      <a href="/blog" className='navBar-text'>Blog</a>
      <a href="/about" className='navBar-text'>Useful Resources</a>
      <SwitchLanguage/>
      <img className="user" src={user} alt="user"/>
    </div>
  </div>
    
  )
}

export default Navbar