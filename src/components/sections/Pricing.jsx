import React from 'react';
import PricingCard from '../ui/PricingCard';
import './Pricing.css'

const Pricing = () => {
  const pricingOptions = [
    {
      title: "1 Lesson",
      price: "€50",
      color: "#3498db",
      features: [
        "1 hour duration per lesson",
        "",
        "",
        ""
      ]
    },
    {
      title: "3 Lessons",
      price: "€135",
      color: "#3498db",
      features: [
        "1 hour duration per lesson",
        "",
        "",
        ""
      ]
    },
    {
      title: "6 Lessons",
      price: "€270",
      color: "#3498db",
      features: [
        "1 hour duration per lesson",
        "",
        "",
        ""
      ]
    },
    {
      title: "12 Lessons",
      price: "€540",
      color: "#3498db",
      features: [
        "12 hour duration per lesson",
        "",
        "",
        ""
      ]
    }
  ];

  return (
    <section id="pricing">
      <div className="container">
        <div className="section-header">
          <h2>Pricing Plans</h2>
          <div className="section-divider"></div>
        </div>
        
        <div className="pricing-grid">
          {pricingOptions.map((option, index) => (
            <PricingCard 
              key={index}
              title={option.title}
              price={option.price}
              color={option.color}
              features={option.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;