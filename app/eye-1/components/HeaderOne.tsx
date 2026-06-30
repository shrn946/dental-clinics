'use client';
import React from 'react';

export default function HeaderOne() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `<!-- Main header-->
<header class="main-header header-style-one">
   
    <!--Start Header Top--> 
    <div class="header-top" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">
        <div class="container">
            <div class="outer-box clearfix">
                <div class="header-top-left pull-left">
                    <p>80 broklyn golden street, New York. USA</p>
                </div>
                <div class="header-top-right pull-right">
                    <div class="header-social-link">
                        <ul>
                            <li>
                                <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a> 
                            </li>
                            <li>
                                <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a> 
                            </li>
                            <li>
                                <a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                            </li>
                            <li>
                                <a href="#"><i class="fa fa-pinterest" aria-hidden="true"></i></a> 
                            </li>
                        </ul>
                    </div>
                    <div class="button-box">
                        <a href="#">Book Appointment</a>
                    </div>
                </div>    
            </div>
        </div>    
    </div> 
    <!--Start header Top-->
    <div class="header">
        <div class="container">
            <div class="outer-box clearfix">
                <!--Start Header Left-->
                <div class="header-left clearfix pull-left">
                    <div class="logo">
                        <a href="/eye-1"><img src="/eye-1/assets/images/resources/logo.png" alt="Awesome Logo" title=""></a>
                    </div>
                </div>
                <!--End Header Left-->
                <!--Start Header Right-->
                <div class="header-right pull-right clearfix">
                    <div class="nav-outer clearfix">
                        <!--Mobile Navigation Toggler-->
                        <div class="mobile-nav-toggler">
                            <div class="inner">
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </div>
                        </div>
                        <!-- Main Menu -->
                        <nav class="main-menu style1 navbar-expand-md navbar-light">
                            <div class="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                <ul class="navigation clearfix">
                                    <li class="dropdown current"><a href="#">Home</a>
                                        <ul>
                                            <li><a href="/eye-1">Home Page 01</a></li>
                                            <li><a href="/eye-1/home-2">Home Page 02</a></li>
                                            <li><a href="/eye-1/box-layout">Home Boxed Layout</a></li>
                                            <li><a href="/eye-1/rtl">Home RTL</a></li>
                                            <li><a href="/eye-1/onepage">Home OnePage</a></li>
                                            <li class="dropdown"><a href="#">Header Styles</a>
                                                <ul>
                                                    <li><a href="/eye-1">Header Style One</a></li>
                                                    <li><a href="/eye-1/home-2">Header Style Two</a></li>
                                                </ul>    
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="dropdown"><a href="#">Pages</a>
                                        <ul>
                                            <li><a href="/eye-1/about">About Us</a></li>
                                            <li><a href="/eye-1/doctors">Our Doctors</a></li>
                                            <li><a href="/eye-1/faq">Faq's</a></li>   
                                            <li><a href="/eye-1/404-page">Error Page</a></li>
                                        </ul>
                                    </li>
                                    <li class="dropdown"><a href="#">Services</a>
                                        <ul>
                                            <li><a href="/eye-1/services">View All Services</a></li>
                                            <li><a href="/eye-1/services/surgical-procedure">Surgical Procedure</a></li>
                                            <li><a href="/eye-1/services/all-laser-lasik">All Laser Lasik</a></li>
                                            <li><a href="/eye-1/services/cornea-glaucoma">Cornea & Glaucoma</a></li>
                                            <li><a href="/eye-1/services/eye-surgery">Eye Surgery</a></li>
                                            <li><a href="/eye-1/services/eye-test-care">Eye Test Care</a></li>
                                            <li><a href="/eye-1/services/contact-lenses">Contact Lenses</a></li>
                                        </ul>
                                    </li>
                                    <li class="dropdown"><a href="#">News</a>
                                    	<ul>
                                            <li><a href="/eye-1/blog">Latest News</a></li>
                                            <li><a href="/eye-1/blog/single">News Detail</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="/eye-1/contact">Contact</a></li>
                                </ul>
                            </div>
                        </nav>                        
                        <!-- Main Menu End-->
                    </div>
                    
                    <div class="header-contact">
                        <div class="icon">
                            <span class="icon-customer-service thm-clr"></span>
                        </div>
                        <div class="title">
                            <a href="tel:+11987654321">666 888 0000</a>
                            <p>Mon - Sat: 11:00am to 8:00pm</p>
                        </div>
                    </div>
                    
                           
                </div>
                <!--End Header Right-->
            </div>  
        </div>
    </div>
    <!--End header -->` }} />
  );
}
