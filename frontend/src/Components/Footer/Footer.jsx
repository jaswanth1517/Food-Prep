import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className='footer-content-left'>
          <img src={assets.logo} alt='Logo' />
          <p>
            Whether it's a rainy evening or a lazy Sunday morning, our mission is simple — to bring the world’s flavors to your doorstep with care, speed, and a dash of delight. From sizzling street eats to gourmet indulgence, we partner with local kitchens and top chefs to make your cravings a reality, right when you want them. No queues, no cooking, no compromises — just comfort, convenience, and unforgettable taste, one order at a time.
          </p>
          <div className='footer-social-icon'>
            <img src={assets.facebook_icon} alt='Facebook' />
            <img src={assets.twitter_icon} alt='Twitter' />
            <img src={assets.linkedin_icon} alt='LinkedIn' />
          </div>
        </div>

        <div className='footer-content-center'>
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className='footer-content-right'>
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-2343-467-9870</li>
            <li>contact@foodHunter.com</li>
          </ul>
        </div>
      </div>

      <hr />
      <p className='footer-copyright'> copyright 2025 © tomato.com - All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
