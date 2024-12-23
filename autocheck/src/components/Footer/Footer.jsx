import React from 'react';
import './Footer.css'; // External CSS file for styling
import certifiedByLogo from '../../assets/car.png'; // Replace with your actual logo
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Contact Details */}
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>123 Service Road</p>
          <p>City, State, ZIP</p>
          <p>Email: contact@autoservice.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>

        {/* Certified By Section */}
        <div className="footer-certified-by">
          <h3>Certified By</h3>
          <img src={certifiedByLogo} alt="Certified By Logo" className="certified-by-logo" />
        </div>

        {/* Useful Links */}
        <div className="footer-links">
          <h3>Useful Links</h3>
          <ul>
          <NavLink to="/about" className="navbar-item">About</NavLink>
            <li><a href="/services">Services</a></li>
            <li><a href="/products">Products</a></li>
            <NavLink to="/contact" className="navbar-item">Contact</NavLink>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
