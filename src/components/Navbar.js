import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo1 from '../images/logo.jpg'

const Navbar = () => {
  const [isMobile,setIsMobile] = useState(false);
  return (
   
  <nav className='navbar'>
   <img className='logo1' src={logo1} alt='logo'/>
   <ul className={isMobile? "nav-links-mobile" : "nav-links" }
   onClick={() => setIsMobile(false)}
   >
      <Link to="/" className='home'>
        <li>Home</li>
      </Link>
      <Link to="/eroi" className='about'>
        <li>Eroi</li>
      </Link>
      <Link to="/film" className='skills'>
        <li>Film</li>
      </Link>
      <Link to="/fumetti" className='skills'>
        <li>Fumetti</li>
      </Link>
      <Link to="/login" className='skills'>
        <li>Login</li>
      </Link>
   </ul>
   <button className='mobile-menu-icon'
   onClick={() => setIsMobile(!isMobile)}
   >
   {isMobile ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
 </button>
  </nav>

  )
}

export default Navbar