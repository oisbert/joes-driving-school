import React from 'react';
import Button from '../ui/Button';
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <h1>Professional Driving Instructor</h1>
        <p className="hero-description">
          "Your Success Is My Reputation"
        </p>
        <Button href="#contact" text="Book a Lesson Today" />
      </div>
    </section>
  );
};

export default Hero;