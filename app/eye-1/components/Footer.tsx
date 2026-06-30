'use client';
import React from 'react';

export default function Footer() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `<!--Start footer area-->  
<footer class="footer-area">
    <div class="layer-outer">
        <div class="shape1 zoom-fade">
            <img src="/eye-1/assets/images/shape/footer-shape-1.png" alt="Shape1">
        </div>
        <div class="shape2" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="2000" 
        style="background-image: url('/eye-1/assets/images/shape/footer-shape-2.png')">     
        </div>    
    </div>
    <div class="footer">
        <div class="container">
            <div class="row">
                <!--Start single footer widget-->
                <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 wow animated fadeInUp" data-wow-delay="0.1s">
                    <div class="single-footer-widget marbtm">
                        <div class="our-company-info">
                            <div class="footer-logo">
                                <a href="/eye-1"><img src="/eye-1/assets/images/footer/footer-logo.png" alt="Awesome Footer Logo" title="Logo"></a>    
                            </div>
                            <div class="text">
                                <p>There are many variations of passages of lorem ipsum available, but the majority suffered.</p>
                            </div>
                            <div class="btns-box">
                                <a class="btn-one style2" href="#">
                                    <span class="txt">Book Appointment<i class="fa fa-angle-double-right round" aria-hidden="true"></i></span>
                                </a>
                            </div>
                        </div>      
                    </div>
                </div>
                <!--End single footer widget-->
                <!--Start single footer widget-->
                <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 wow animated fadeInUp" data-wow-delay="0.3s">
                    <div class="single-footer-widget martop16 marbtm">
                        <div class="title">
                            <h3>Links</h3>
                        </div>
                        <div class="link1 clearfix">
                            <ul class="pull-left">
                                <li><a href="#">About</a></li>    
                                <li><a href="#">Treatments</a></li>             
                                <li><a href="#">Our Doctors</a></li>             
                                <li><a href="#">Before & After</a></li>             
                                <li><a href="#">Site Map</a></li>                         
                            </ul>
                            <ul class="pull-left marlft40">
                                <li><a href="#">Contact</a></li>    
                                <li><a href="#">Help</a></li>    
                                <li><a href="#">Privacy Policy</a></li>    
                                <li><a href="#">Appointment</a></li>    
                            </ul>
                        </div>
                    </div>
                </div>
                <!--End single footer widget-->
                <!--Start single footer widget-->
                <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 wow animated fadeInUp" data-wow-delay="0.5s">
                    <div class="single-footer-widget martop16">
                        <div class="title">
                            <h3>News</h3>
                        </div>
                        <ul class="footer-news-links clearfix">
                            <li class="single-news">
                                <div class="img-holder">
                                    <img src="/eye-1/assets/images/footer/footer-news-1.jpg" alt="Awesome Image">
                                    <div class="overlay-content">
                                        <a href="#"><i class="fa fa-link" aria-hidden="true"></i></a>
                                    </div>
                                </div>
                                <div class="title-holder">
                                    <p>Jan 16, 2020</p>
                                    <h5><a href="#">The best eye care services for kids</a></h5>
                                </div>    
                            </li>
                            <li class="single-news">
                                <div class="img-holder">
                                    <img src="/eye-1/assets/images/footer/footer-news-2.jpg" alt="Awesome Image">
                                    <div class="overlay-content">
                                        <a href="#"><i class="fa fa-link" aria-hidden="true"></i></a>
                                    </div>
                                </div>
                                <div class="title-holder">
                                    <p>Jan 16, 2020</p>
                                    <h5><a href="#">You're nothing without  your eyes</a></h5>
                                </div>    
                            </li>
                        </ul>                     	  
                    </div>
                </div>
                <!--End single footer widget-->
                <!--Start single footer widget-->
                <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 wow animated fadeInUp" data-wow-delay="0.7s">
                    <div class="single-footer-widget pdtop martop16">
                        <div class="title">
                            <h3>Contact</h3>
                        </div>
                        <div class="footer-contact-info">
                            <ul>
                                <li>
                                    <div class="icon">
                                        <span class="icon-telephone thm-clr"></span>
                                    </div>
                                    <div class="text">
                                        <p><a href="tel:+11987654321">666 888 0000</a></p>
                                    </div>
                                </li>
                                <li>
                                    <div class="icon">
                                        <span class="icon-email thm-clr"></span>
                                    </div>
                                    <div class="text">
                                        <p><a href="mailto:info@templatepath.com">needhelp@company.com</a></p>
                                    </div>
                                </li>
                                <li>
                                    <div class="icon">
                                        <span class="icon-pin-1 thm-clr"></span>
                                    </div>
                                    <div class="text">
                                        <p>66 broklyn golden street line<br> New York, USA</p>
                                    </div>
                                </li> 
                            </ul>
                        </div>                     	  
                    </div>
                </div>
                <!--End single footer widget-->
            </div>
        </div>
    </div>
    
    <div class="footer-bottom">
        <div class="container">
            <div class="outer-box">
                <div class="copyright-text text-center">
                    <p>&copy; Copyright 2020 by <a href="#">oktilcal</a></p>
                </div>
            </div>    
        </div>    
    </div>
    
</footer>   
<!--End footer area-->` }} />
  );
}
