'use client';
import React from 'react';

export default function Hero() {
  return (
    <section className="parallax-hero-section">
      {/* Dark Overlay */}
      <div className="parallax-hero-overlay"></div>

      {/* Hero Content */}
      <div className="auto-container" style={{ width: '100%' }}>
        <div className="parallax-hero-content" data-aos="zoom-out" data-aos-duration="1800">
          <h3 data-aos="fade-down" data-aos-delay="200">Welcome to OptiLuxe</h3>
          <h2 data-aos="fade-up" data-aos-delay="400">
            Advanced <i>Ophthalmology</i><br /> & Luminous <i>Eye Care</i>
          </h2>
          <p data-aos="fade-up" data-aos-delay="600">
            Experience state-of-the-art vision correction and personalized clinical treatments. 
            Our certified specialists utilize cutting-edge medical technology to care for your eyes.
          </p>
          <div className="btns-box" data-aos="fade-up" data-aos-delay="800">
            <a className="btn-one" href="/eye-4/appointment">
              <span className="txt">
                Book Appointment
                <i className="fa fa-angle-double-right round" style={{ marginLeft: '10px' }} aria-hidden="true"></i>
              </span>
            </a>
            <a className="btn-two" href="/eye-4/services">
              <span className="txt">Our Services</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
