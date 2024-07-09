import React from 'react';
import './Footer.css';
import logoImage from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div><img src={logoImage} alt="Company Logo" className="logo" />Payment Secured</div>
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
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Mahogany.com All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
