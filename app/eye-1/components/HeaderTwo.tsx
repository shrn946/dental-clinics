'use client';
import React from 'react';

export default function HeaderTwo() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `<!--Start Header style2--> 
    <div class="header-style2">
        <div class="container">
            <div class="outer-box clearfix">
                <div class="header-style2-left pull-left">
                    <div class="logo">
                        <a href="/eye-1"><img src="/eye-1/assets/images/resources/logo.png" alt="Awesome Logo" title=""></a>
                    </div>
                </div>
                <div class="header-style2-right pull-right">
                    <div class="header-contact-info-box">
                        <ul>
                            <li>
                                <div class="icon">
                                    <span class="icon-phone-call thm-clr"></span>
                                </div>
                                <div class="title">
                                    <h4><a href="tel:+11987654321">666 888 0000</a></h4>
                                    <p>Phone line</p>
                                </div>
                            </li>
                            <li>
                                <div class="icon">
                                    <span class="icon-message thm-clr"></span>
                                </div>
                                <div class="title">
                                    <h4><a href="mailto:info@templatepath.com">needhelp@company.com</a></h4>
                                    <p>Email address</p>
                                </div>
                            </li>
                            <li>
                                <div class="icon">
                                    <span class="icon-placeholder thm-clr"></span>
                                </div>
                                <div class="title">
                                    <h4>80 Broklyn Golden Street, USA</h4>
                                    <p>Visit us</p>
                                </div>
                            </li>
                            
                        </ul>    
                    </div>
                </div> 
                   
            </div>
        </div>    
    </div> 
    
    <!--Start header Bottom-->
    <div class="header-style2-bottom">
        <div class="container">
            <div class="outer-box clearfix">
                <!--Start Header Style2 Bottom Left-->
                <div class="header-style2-bottom-left pull-left clearfix">
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
                        <nav class="main-menu style2 navbar-expand-md navbar-light">
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
                                            <li><a href="/eye-1/faq">Faqâ€™s</a></li>   
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
                     
                </div>
                <!--End Header Style2 Bottom Left-->
                
                <!--Start Header Style2 Bottom Right-->
                <div class="header-style2-bottom-right clearfix pull-right">
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
                    <div class="btns-box">
                        <a class="btn-one style2" href="#">
                            <span class="txt">Book Appointment<i class="fa fa-angle-double-right round" aria-hidden="true"></i></span>
                        </a>
                    </div>
                </div>
                <!--End Header Style2 Bottom Right-->
                
            </div>  
        </div>
    </div>
    <!--End header -->` }} />
  );
}
