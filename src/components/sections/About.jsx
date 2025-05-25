import React from 'react';
import './About.css'

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="section-header">
          <h2>About Me</h2>
          <div className="section-divider"></div>
        </div>
        
        <div className="features-grid">
          <div className="feature">
            <h3><i className="fas fa-user-tie"></i>Experience & Background</h3>
            <p>I began my career as a driving instructor in Dublin, where I gained valuable experience working across all the city’s driving test centres. In 2001, I relocated to County Kerry and established my own driving school. Since then, I have been providing high-quality driving lessons in both the Tralee and Killarney areas.</p>
          </div>
          
          <div className="feature">
            <h3><i className="fas fa-car"></i>Proven Success</h3>
            <p>Over the years, I’ve had the privilege of teaching hundreds of learners, helping them build the confidence and skills needed to become safe, competent drivers. My students have consistently achieved excellent results, with a first-time pass rate of around 70% — well above the national average.</p>
          </div>
          
          <div className="feature">
            <h3><i className="fas fa-graduation-cap"></i>Professional Accreditation</h3>
            <p>I am a fully qualified and ADI (Approved Driving Instructor) registered instructor, having held this certification since the programme was first introduced. My commitment to professionalism, up-to-date training methods, and a patient, friendly approach ensures every pupil gets the best possible start on the road.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
