import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img className='logo' src={assets.logo23} alt="" />
      <img className='profile' src={assets.cheficon} alt="" />
    </div>
  )
}

export default Navbar
