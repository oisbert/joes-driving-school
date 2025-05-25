import React from 'react';
import './Hours.css'

const Hours = () => {
  return (
    <section id="hours" className="alternate-bg">
      <div className="container">
        <div className="section-header">
          <h2>Working Hours</h2>
          <div className="section-divider"></div>
        </div>
        
        <div className="hours-container">
          <table className="table">
            <thead>
              <tr>
                <th>Day</th>
                <th>Hours</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Monday - Friday</td>
                <td>9:00 AM - 5:00 PM</td>
              </tr>
              <tr>
                <td>Saturday</td>
                <td>9:00 AM - 1:00 PM</td>
              </tr>
            </tbody>
          </table>
          
          <div className="hours-note">
            <p><i className="fas fa-info-circle"></i>Contact me for special arrangements.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hours;