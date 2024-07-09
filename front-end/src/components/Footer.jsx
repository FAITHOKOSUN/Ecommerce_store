import React from 'react';
import './Footer.css';
import logoImage from '../assets/logo.png';

import { assets } from '../assets/assets';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="logo-container">
        <img src={logoImage} alt="Company Logo" className="logo" />
        <p className="secured-text">Payment Secured</p>
        
          <img src={assets.PaymentCard1} alt="Payment Card" className="payment-icon" />
          <img src={assets.PaymentCard2} alt="Payment Card" className="payment-icon" />
      
      </div>
        
        <div className="footer-content">
        <div className="links">
          <a href="#about">About Mahogany.com</a>
          <a href="#terms">Terms of Use</a>
          <a href="#privacy">Cookies & Privacy Policy</a>
          <a href="#returns">Returns & Refunds</a>
          <a href="#contact">Contact Us</a>
          <a href="#careers">Careers</a>
        </div>
        <div className="newsletter">
          <p>Stay Updated Here</p>
          <input type="email" placeholder="Enter your email address" />
          <button>Sign me Up!</button>
          <p>
          <img src={assets.socialicons} alt="Payment Card" className="social-icon" />
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        
        <p>© 2024 Mahogany.com All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;

