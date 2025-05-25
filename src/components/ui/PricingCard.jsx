import React from 'react';
import Button from './Button';
import './PricingCard';

const PricingCard = ({ title, price, color, features }) => {
  return (
    <div className="pricing-card">
      <div className="pricing-header" style={{ backgroundColor: color }}>
        <h3>{title}</h3>
      </div>
      <div className="pricing-content">
        <div className="price">{price}</div>
        <ul className="feature-list">
          {features.map((feature, index) => (
            <li key={index}>
              <i className="fas fa-check"></i> {feature}
            </li>
          ))}
        </ul>
        <Button href="#contact" text="Book Now" fullWidth />
      </div>
    </div>
  );
};

export default PricingCard;