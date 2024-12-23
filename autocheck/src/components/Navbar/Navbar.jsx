import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/shell.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <a href="/" className="navbar-logo">
          <img src={logo} alt="Company Logo" className="logo-image" />
        </a>

        {/* Menu Toggle for Mobile */}
        <button className="navbar-toggle" onClick={handleMenuToggle}>
          <div className={`navbar-toggle-icon ${isMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        {/* Navigation Links */}
        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <NavLink to="/" className="navbar-item">Home</NavLink>
          <NavLink to="/clients" className="navbar-item">Clients</NavLink>
          <NavLink to="/about" className="navbar-item">About</NavLink>
          <NavLink to="/contact" className="navbar-item">Contact</NavLink>
          <NavLink to="/generate" className="navbar-item">Generate Invoice</NavLink>
          <NavLink to="/card" className="navbar-item">Create Card</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
