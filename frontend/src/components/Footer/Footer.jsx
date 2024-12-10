import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>"CurryKart – Your Flavorful Companion!"
Bringing the finest Indian cuisines and global delicacies straight to your doorstep. From aromatic curries to sizzling snacks, enjoy fresh, fast, and fabulous meals anytime.
🌟 Savor the taste of happiness with CurryKart.</p>
            <div className="footer-social-icons">
                <img src={assets.fb24} alt="" />
                <a href='https://www.instagram.com/curry_kart365?igsh=MWR2NmowcHRvNnR3OA%3D%3D&utm_source=qr'><img src={assets.instagram24} alt="" /></a>
                <img src={assets.x24} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91 8960107836</li>
                <li>currykartonline@gmail.com </li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © CurryKart.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
