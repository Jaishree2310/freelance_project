import React from 'react';
import { ChevronRight } from 'lucide-react';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="highlight">Elevate</span> Your Career with Expert Mentorship
        </h1>
        <p className="hero-subtitle">Connect with industry leaders and accelerate your growth</p>
        <button className="cta-button">
          Get Started
          <ChevronRight size={20} />
        </button>
      </div>
      <div className="hero-image">
        <div className="orbit">
          <div className="planet planet1"></div>
          <div className="planet planet2"></div>
          <div className="planet planet3"></div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;



