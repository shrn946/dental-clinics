'use client';
import React, {useEffect} from 'react';
import HeaderOne from '../components/HeaderOne';
import MobileMenu from '../components/MobileMenu';
import Footer from '../components/Footer';
import AppointmentForm from '../components/AppointmentForm';

export default function AppointmentPage() {
  useEffect(() => {
    // Dispatch event to trigger jQuery custom script initialization
    const timer = setTimeout(() => {
      const $ = (window as any).jQuery;
      if ($) {
        $(window).trigger('resize');
        if ($('.preloader').length) {
          $('.preloader').delay(200).fadeOut(500);
        }
      }
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="boxed_wrapper">
      <HeaderOne />
      <MobileMenu />
      
      {/* Start breadcrumb area */}     
      <section className="breadcrumb-area" style={{ backgroundImage: "url('/eye-1/assets/images/breadcrumb/breadcrumb-1.jpg')" }}>
        <div className="layer-outer-icon" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
          <img src="/eye-1/assets/images/icon/icon-breadcrumb.png" alt="Icon" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="inner-content clearfix">
                <div className="breadcrumb-menu wow slideInDown animated" data-wow-delay="0.3s" data-wow-duration="1500ms">
                  <ul className="clearfix">
                    <li><a href="/eye-1">Home</a></li>
                    <li className="active">Book Appointment</li>
                  </ul>    
                </div>
                
                <div className="title wow slideInUp animated" data-wow-delay="0.3s" data-wow-duration="1500ms">
                   <h2>Book Appointment</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End breadcrumb area */}

      {/* Start Contact Form Style1 Area */}
      <section className="contact-form-style1-area contact-page">
        <div className="container">
          <div className="row">
            <div className="col-xl-5">
              <div className="contact-p-contact-info-box">
                <div className="sec-title">
                  <h2><span>We love</span> to hear from<br /> our customers</h2>
                </div>
                <div className="inner-content">
                  <ul>
                    <li>
                      <div className="icon">
                        <span className="icon-telephone"></span>
                      </div>
                      <div className="text">
                        <a href="tel:+11987654321">666 888 0000</a><br />
                        <a href="tel:+11987654321">92 666 8888 000</a>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-email"></span>
                      </div>
                      <div className="text">
                        <a href="mailto:info@templatepath.com">needhelp@company.com</a><br />
                        <a href="mailto:info@templatepath.com">info@company.com</a>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-pin-1"></span>
                      </div>
                      <div className="text">
                        <p>66 broklyn golden street line<br /> New York, USA</p>
                      </div>
                    </li>
                  </ul>    
                </div>    
              </div>  
            </div>
            <div className="col-xl-7">
              <div className="contact-form contact-page" style={{ background: '#ffffff', padding: '40px', borderRadius: '8px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                <AppointmentForm />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Contact Form Style1 Area */}

      {/* Start contact p map Area */}
      <section className="contact-p-map-area">
        <div className="map-outer">
          <iframe 
            src="https://maps.google.com/maps?q=-37.817085,144.955631&t=&z=13&ie=UTF8&iwloc=&output=embed" 
            width="100%" 
            height="500" 
            style={{ border: 0, display: 'block' }} 
            allowFullScreen={true}
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
      {/* End contact p map Area */}

      {/* Start Emergency Contact Area */}
      <section className="emergency-contact-area" style={{ backgroundImage: "url('/eye-1/assets/images/parallax-background/emergency-contact-area-bg.jpg')" }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-5">
              <div className="emergency-contact-number">
                <div className="icon">
                  <span className="icon-customer-service"></span>
                </div>
                <div className="title">
                  <h2>For Emergency Cases</h2>
                  <a href="tel:+11987654321">666 888 0000</a>
                </div>    
              </div>
            </div>
            <div className="col-xl-4">
              <div className="emergency-contact-text">
                <p>Lorem ipsum dolor sit amet nsectetur cing elituspe ndisse suscipit sagitis leo sit.</p>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="emergency-contact-btns-box">
                <a className="btn-one" href="#"><span className="txt">Book Appointment<i className="fa fa-angle-double-right round" aria-hidden="true"></i></span></a>
              </div>    
            </div>    
          </div>
        </div>
      </section>
      {/* End Emergency Contact Area */}

      {/* Start subscribe Area */}
      <section className="subscribe-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="left pull-left">
                <div className="subscribe-social-links">
                  <ul>
                    <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                  </ul>
                </div>    
              </div>
              <div className="right pull-right">
                <div className="subscribe-content-box clearfix">
                  <div className="subscribe-title">
                    <h3>Newsletter</h3>
                  </div>
                  <div className="subscribe-box">
                    <form className="subscribe-form black_ver" action="#">
                      <input type="email" name="email" placeholder="Your email address" />
                      <button type="submit"><i className="fa fa-angle-double-right" aria-hidden="true"></i></button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End subscribe Area */}

      <Footer />
    </div>
  );
}
