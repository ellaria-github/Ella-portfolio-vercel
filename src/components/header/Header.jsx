import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './headersocials'
import IMG from '../../assets/me.jpg'
const Header = () => {
  return (
  <header>
    <div className="container header__container">
      <h5>Hello I'm</h5>
      <h1> Emmanuella  Ibeleme</h1>
      <div className="me">
      <img src={IMG} alt='me'/>
      </div>
      <h5 className="text-light">Fullstack Developer</h5>
      
      
      
      
      <CTA />
      <HeaderSocials />

      <a href="#contact" className='scroll__down'>Scroll Down</a>
      



    </div>
    
  </header>
  )
}

export default Header