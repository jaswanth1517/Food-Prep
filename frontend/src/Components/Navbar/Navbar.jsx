import React, { useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import LoginPopup from '../LoginPopup/LoginPopup';

const Navbar = () => { 
  const [menu, setMenu] = useState('home');
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className='Navbar'>
      <Link to="/"><img src={assets.logo} alt='logo' className='logo' /></Link>
      
      <ul className="Navbar-menu">
        <Link to='/' onClick={() => setMenu("home")} className={menu === 'home' ? 'active' : ''}>home</Link>
        <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ''}>menu</a>
        <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ''}>mobile-app</a>
        <a href='#footer' onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ''}>contact-us</a>
      </ul>

      <div className="Navbar-right">
        <img src={assets.search_icon} alt="search" />
        <div className='navbar-search-icon'>
        <Link to='/cart'>
        <img src={assets.basket_icon} alt='' />
        </Link> 
          <div className='dot'></div>
        </div>
        <button onClick={() => setShowLogin(true)}>sign in</button>
      </div>

      {showLogin && <LoginPopup setShowLogin={setShowLogin} />} {/* ✅ FIXED: added popup render */}
    </div>
  );
};

export default Navbar;
