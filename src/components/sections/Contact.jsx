import React from 'react';
import ContactForm from '../ui/ContactForm';
import './Contact.css'

const Contact = () => {
  return (
    <section id="contact" className="alternate-bg">
      <div className="container">
        <div className="section-header">
          <h2>Contact Me</h2>
        </div>
        
        <div className="contact-grid">
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <div className="contact-details">
              <p><i className="fas fa-phone"></i>(086) 814 9617</p>
              <p><i className="fas fa-envelope"></i> instructorjd@yahoo.com</p>
              <p><i className="fas fa-map-marker-alt"></i> Castleisland, Co. Kerry</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;