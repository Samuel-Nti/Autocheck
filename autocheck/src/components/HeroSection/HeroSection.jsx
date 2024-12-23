import React from 'react';
import './HeroSection.css'; // External CSS file for styling
import heroImage from '../../assets/heroauto.jpg'; // Example hero image

const HeroSection = () => {
  return (
    <section className="hero-section">
      <img src={heroImage} alt="Hero Background" className="hero-image" />
      <div className="hero-text">
        <h1>Welcome to Auto Service</h1>
        <p>Your one-stop solution for all your auto service needs.</p>
        <button className="cta-button">Get Started</button>
      </div>
    </section>
  );
};

export default HeroSection;
