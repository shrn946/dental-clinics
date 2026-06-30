'use client';
import React, {useEffect} from 'react';

export default function Page() {
  useEffect(() => {
    const timer = setTimeout(() => {
      const $ = (window as any).jQuery;
      if ($) {
        $(window).trigger('resize');
        if (typeof (window as any).AOS !== 'undefined') {
          (window as any).AOS.refresh();
        }
      }
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div dangerouslySetInnerHTML={{ __html: `

<!-- Back to top button -->
<a id="button"></a>
<div class="home3_banner_outer position-relative">
    <!-- Topbar -->
    <div class="top-bar-con top-bar-con3">
        <div class="container">
            <div class="top-bar-box">
                <div class="top-bar-info">
                    <ul class="list-unstyled mb-0">
                        <li class="info">
                            <img src="/eye-2/assets/images/header3-phoneimage.png" alt="image" class="img-fluid">
                            <a href="tel:+568925896325" class="text-decoration-none">
                                <span class="number">+5689 2589 6325</span>
                            </a>
                        </li>
                        <li class="info">
                            <img src="/eye-2/assets/images/header3-locationimage.png" alt="image" class="img-fluid">
                            <a href="https://www.google.com/maps/course/21+King+St,+Melbourne+VIC+3000,+Australia/@-37.8199805,144.9529083,18z/data=!4m6!3m5!1s0x6ad65d52754eaecb:0x22f367daf52cbd47!8m2!3d-37.819936!4d144.9570765!16s%2Fg%2F11c2dj2n2c?entry=ttu"
                                class="text-decoration-none address mb-0">21 King Street Melbourne, Australia
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="top-bar-social">
                    <div class="info">
                        <img src="/eye-2/assets/images/header3-clockimage.png" alt="image" class="img-fluid">
                        <p class="mb-0">Mon - Sat 8:00 am - 9:00 pm</p>
                    </div>
                    <ul class="list-unstyled mb-0 social-icons">
                        <li><a href="https://www.facebook.com/" class="text-decoration-none"><i class="fa-brands fa-facebook social-networks" aria-hidden="true"></i></a></li>
                        <li><a href="https://twitter.com/" class="text-decoration-none"><i class="fa-brands fa-x-twitter social-networks" aria-hidden="true"></i></a></li>
                        <li><a href="https://pk.linkedin.com/" class="text-decoration-none"><i class="fa-brands fa-linkedin social-networks" aria-hidden="true"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <header class="header">
        <div class="container">
            <nav class="navbar navbar-expand-lg navbar-light p-0">
                <a class="navbar-brand" href="/eye-2">
                    <figure class="logo mb-0"><img src="/eye-2/assets/images/logo.png" alt="image" class="img-fluid"></figure>
                </a>
                <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    <span class="navbar-toggler-icon"></span>
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item dropdown active">
                            <a class="nav-link dropdown-toggle dropdown-color navbar-text-color" href="#"
                                id="navbarDropdown1" role="button" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false"> Home </a>
                            <div class="dropdown-menu drop-down-content">
                                <ul class="list-unstyled drop-down-pages">
                                    <li class="nav-item"><a class="dropdown-item nav-link" href="/eye-2">Home 1</a></li>
                                    <li class="nav-item active"><a class="dropdown-item nav-link" href="/eye-2/home-2">Home 2</a></li>
                                    <li class="nav-item"><a class="dropdown-item nav-link" href="/eye-2/home-3">Home 3</a></li>
                                </ul>
                            </div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/eye-2/about">About Us</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/eye-2/service">Services</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle dropdown-color navbar-text-color" href="#"
                                id="navbarDropdown2" role="button" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false"> Pages </a>
                            <div class="dropdown-menu drop-down-content">
                                <ul class="list-unstyled drop-down-pages">
                                    <li class="nav-item"><a class="dropdown-item nav-link" href="/eye-2/service-detail">Service Details</a></li>
                                    <li class="nav-item"><a class="dropdown-item nav-link" href="/eye-2/case-studies">Case Studies</a></li>
                                    <li class="nav-item"><a class="dropdown-item nav-link" href="/eye-2/pricing">Pricing</a></li>
                                    <li class="nav-item"><a class="dropdown-item nav-link" href="/eye-2/team">Team</a></li>
                                    <li class="nav-item"><a class="dropdown-item nav-link" href="/eye-2/review">Review</a></li>
                                    <li class="nav-item"><a class="dropdown-item nav-link" href="/eye-2/faq">Faq's</a></li>
                                    <li class="nav-item"><a class="dropdown-item nav-link" href="/eye-2/404-page">404</a></li>
                                    <li class="nav-item"><a class="dropdown-item nav-link" href="/eye-2/coming-soon">Coming Soon</a></li>
                                </ul>
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle dropdown-color navbar-text-color" href="#"
                                id="navbarDropdown3" role="button" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false"> Blog </a>
                            <div class="dropdown-menu drop-down-content">
                                <ul class="list-unstyled drop-down-pages">
                                    <li class="nav-item"><a class="dropdown-item nav-link" href="/eye-2/blog">Blog</a></li>
                                    <li class="nav-item"><a class="dropdown-item nav-link" href="/eye-2/single-blog">Single Blog</a></li>
                                    <li class="nav-item"><a class="dropdown-item nav-link" href="/eye-2/load-more">Load More</a></li>
                                    <li class="nav-item"><a class="dropdown-item nav-link" href="/eye-2/one-column">One Column</a></li>
                                    <li class="nav-item"><a class="dropdown-item nav-link" href="/eye-2/two-column">Two Column</a></li>
                                    <li class="nav-item"><a class="dropdown-item nav-link" href="/eye-2/three-column">Three Column</a></li>
                                    <li class="nav-item"><a class="dropdown-item nav-link" href="/eye-2/three-colum-sidbar">Three Column Sidebar</a></li>
                                    <li class="nav-item"><a class="dropdown-item nav-link" href="/eye-2/four-column">Four Column</a></li>
                                    <li class="nav-item"><a class="dropdown-item nav-link" href="/eye-2/six-colum-full-wide">Six Column</a></li>
                                </ul>
                            </div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/eye-2/contact">Contact Us</a>
                        </li>
                    </ul>
                    <div class="last_list">
                        <a class="search" href="#search"><i class="search-box fa-solid fa-magnifying-glass"></i></a>
                        <a href="/eye-2/contact" class="text-decoration-none get_started">Appointment<i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </nav>
        </div>
    </header>
    <!-- Search Form -->
    <div id="search" class=""> 
        <span class="close">X</span>
        <form role="search" id="searchform" method="get">
            <input value="" name="q" type="search" placeholder="Type to Search">
        </form>
    </div>
    <!-- Banner -->
    <section class="banner2-con position-relative">
        <figure class="banner-leftimage image mb-0">
            <img src="/eye-2/assets/images/banner2-leftimage.png" alt="image" class="img-fluid">
        </figure>
        <div class="container">
            <div class="row" data-aos="fade-up">
                <div class="col-lg-6 col-12">
                    <div class="banner_content">
                        <h1>Find Expert <span>Solutions</span> For Your Eyes</h1>
                        <p class="text-size-18">Explore personalized eye care solutions provided by our skilled specialists for overall eye health.</p>
                        <div class="button_wrapper">
                            <a href="/eye-2/contact" class="text-decoration-none primary_btn">Make Appointment<i class="fa-solid fa-arrow-right"></i></a>
                            <a href="/eye-2/contact" class="text-decoration-none primary_btn secondary_btn">Read More<i class="fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
<!-- About -->
<section class="about2-con position-relative">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-xl-6 col-lg-6 col-12 text-lg-left text-center order-lg-1 order-2">
                <div class="about_wrapper position-relative" data-aos="fade-up">
                    <figure class="about-image1 image mb-0">
                        <img src="/eye-2/assets/images/about2-image1.png" alt="image" class="img-fluid">
                    </figure>
                    <figure class="about-image2 image mb-0">
                        <img src="/eye-2/assets/images/about2-image2.jpg" alt="image" class="img-fluid">
                    </figure>
                </div>
            </div>
            <div class="col-xl-6 col-lg-6 col-12 order-lg-2 order-1">
                <div class="about_content" data-aos="fade-up">
                    <h6>About Us</h6>
                    <h2>Eye Care Solutions for All Ages</h2>
                    <p class="text1 text-size-18">Quis nostrud exercitation ullamco laboris nisi aut aliquio modo consequat ruis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore.
                    </p>
                    <p class="text2 text-size-18">Dolor in reprehenderit in voluptate velit esse cillum dolore aeu fugiat nulla pariatur.</p>
                    <div class="about_button">
                        <a href="/eye-2/about" class="text-decoration-none primary_btn">Read More<i class="fa-solid fa-arrow-right"></i></a>
                        <div class="phone_wrapper">
                            <img src="/eye-2/assets/images/about2-phoneicon.png" alt="image" class="img-fluid phone">
                            <div class="phone_content">
                                <span>Call us Today!</span>
                                <a href="tel:+568925896325" class="text-decoration-none d-block number">+5689 2589 6325</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- Service -->
<section class="service2-con position-relative">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="service_content text-center" data-aos="fade-up">
                    <h6>What We Offer</h6>
                    <h2>We Provide Best Services</h2>
                </div>
            </div>
        </div>
        <div class="row" data-aos="fade-up">
            <div class="owl-carousel owl-theme">
                <div class="item">
                    <div class="service-box">
                        <div class="upper_portion position-relative">
                            <figure class="image mb-0">
                                <img src="/eye-2/assets/images/service2-image1.jpg" class="img-fluid" alt="image">
                            </figure>
                            <figure class="icon mb-0">
                                <img src="/eye-2/assets/images/service2-icon1.png" alt="image" class="img-fluid">
                            </figure>
                        </div>
                        <div class="lower_portion">
                            <h5>Laser Eye Surgery</h5>
                            <p class="text-size-16">Duis aute irure dolor in reprehen aerit in voluptate aesse cillum dolor nostrum exercitationem...</p>
                            <a href="/eye-2/service" class="text-decoration-none arrow">Learn More<i class="fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="service-box">
                        <div class="upper_portion position-relative">
                            <figure class="image mb-0">
                                <img src="/eye-2/assets/images/service2-image2.jpg" class="img-fluid" alt="image">
                            </figure>
                            <figure class="icon mb-0">
                                <img src="/eye-2/assets/images/service2-icon2.png" alt="image" class="img-fluid">
                            </figure>
                        </div>
                        <div class="lower_portion">
                            <h5>Transitions Lenses</h5>
                            <p class="text-size-16">Nuis aute irure dolor in reprehen aerit in voluptate aesse cillum dolor nostrum exercitationem...</p>
                            <a href="/eye-2/service" class="text-decoration-none arrow">Learn More<i class="fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="service-box">
                        <div class="upper_portion position-relative">
                            <figure class="image mb-0">
                                <img src="/eye-2/assets/images/service2-image3.jpg" class="img-fluid" alt="image">
                            </figure>
                            <figure class="icon mb-0">
                                <img src="/eye-2/assets/images/service2-icon3.png" alt="image" class="img-fluid">
                            </figure>
                        </div>
                        <div class="lower_portion">
                            <h5>Surgical Procedures</h5>
                            <p class="text-size-16">Muis aute irure dolor in reprehen aerit in voluptate aesse cillum dolor nostrum exercitationem...</p>
                            <a href="/eye-2/service" class="text-decoration-none arrow">Learn More<i class="fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="service-box">
                        <div class="upper_portion position-relative">
                            <figure class="image mb-0">
                                <img src="/eye-2/assets/images/service2-image1.jpg" class="img-fluid" alt="image">
                            </figure>
                            <figure class="icon mb-0">
                                <img src="/eye-2/assets/images/service2-icon1.png" alt="image" class="img-fluid">
                            </figure>
                        </div>
                        <div class="lower_portion">
                            <h5>Laser Eye Surgery</h5>
                            <p class="text-size-16">Duis aute irure dolor in reprehen aerit in voluptate aesse cillum dolor nostrum exercitationem...</p>
                            <a href="/eye-2/service" class="text-decoration-none arrow">Learn More<i class="fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="service-box">
                        <div class="upper_portion position-relative">
                            <figure class="image mb-0">
                                <img src="/eye-2/assets/images/service2-image2.jpg" class="img-fluid" alt="image">
                            </figure>
                            <figure class="icon mb-0">
                                <img src="/eye-2/assets/images/service2-icon2.png" alt="image" class="img-fluid">
                            </figure>
                        </div>
                        <div class="lower_portion">
                            <h5>Transitions Lenses</h5>
                            <p class="text-size-16">Nuis aute irure dolor in reprehen aerit in voluptate aesse cillum dolor nostrum exercitationem...</p>
                            <a href="/eye-2/service" class="text-decoration-none arrow">Learn More<i class="fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="service-box">
                        <div class="upper_portion position-relative">
                            <figure class="image mb-0">
                                <img src="/eye-2/assets/images/service2-image3.jpg" class="img-fluid" alt="image">
                            </figure>
                            <figure class="icon mb-0">
                                <img src="/eye-2/assets/images/service2-icon3.png" alt="image" class="img-fluid">
                            </figure>
                        </div>
                        <div class="lower_portion">
                            <h5>Surgical Procedures</h5>
                            <p class="text-size-16">Muis aute irure dolor in reprehen aerit in voluptate aesse cillum dolor nostrum exercitationem...</p>
                            <a href="/eye-2/service" class="text-decoration-none arrow">Learn More<i class="fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="service-box">
                        <div class="upper_portion position-relative">
                            <figure class="image mb-0">
                                <img src="/eye-2/assets/images/service2-image1.jpg" class="img-fluid" alt="image">
                            </figure>
                            <figure class="icon mb-0">
                                <img src="/eye-2/assets/images/service2-icon1.png" alt="image" class="img-fluid">
                            </figure>
                        </div>
                        <div class="lower_portion">
                            <h5>Laser Eye Surgery</h5>
                            <p class="text-size-16">Duis aute irure dolor in reprehen aerit in voluptate aesse cillum dolor nostrum exercitationem...</p>
                            <a href="/eye-2/service" class="text-decoration-none arrow">Learn More<i class="fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="service-box">
                        <div class="upper_portion position-relative">
                            <figure class="image mb-0">
                                <img src="/eye-2/assets/images/service2-image2.jpg" class="img-fluid" alt="image">
                            </figure>
                            <figure class="icon mb-0">
                                <img src="/eye-2/assets/images/service2-icon2.png" alt="image" class="img-fluid">
                            </figure>
                        </div>
                        <div class="lower_portion">
                            <h5>Transitions Lenses</h5>
                            <p class="text-size-16">Nuis aute irure dolor in reprehen aerit in voluptate aesse cillum dolor nostrum exercitationem...</p>
                            <a href="/eye-2/service" class="text-decoration-none arrow">Learn More<i class="fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="service-box">
                        <div class="upper_portion position-relative">
                            <figure class="image mb-0">
                                <img src="/eye-2/assets/images/service2-image3.jpg" class="img-fluid" alt="image">
                            </figure>
                            <figure class="icon mb-0">
                                <img src="/eye-2/assets/images/service2-icon3.png" alt="image" class="img-fluid">
                            </figure>
                        </div>
                        <div class="lower_portion">
                            <h5>Surgical Procedures</h5>
                            <p class="text-size-16">Muis aute irure dolor in reprehen aerit in voluptate aesse cillum dolor nostrum exercitationem...</p>
                            <a href="/eye-2/service" class="text-decoration-none arrow">Learn More<i class="fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- Choose -->
<section class="casechoose-con position-relative">
    <figure class="choose-lefttopimage image mb-0">
        <img src="/eye-2/assets/images/choose-lefttopimage.png" alt="image">
    </figure>
    <div class="container">
        <div class="row align-items-center">
            <div class="col-xl-5 col-lg-6 col-12 order-lg-1 order-2">
                <div class="choose_content" data-aos="fade-up">
                    <h6>OUR VISION</h6>
                    <h2 class="text-white">Why You Should Choose Opticest</h2>
                    <p class="text text-white text-size-18">Duis nostrud exercitation ullamco laboris nisi aut aliuio modo consequat ruis aute irure dolor in reprehenderit in 
                        voluptate velit esse cillum dolore.
                    </p>
                    <div class="propertise">
                        <ul class="list-unstyled mb-0 list1">
                            <li>
                                <i class="fa fa-check" aria-hidden="true"></i>
                                <p class="mb-0 text-white text-size-16">Modern Equipment</p>
                            </li>
                            <li>
                                <i class="fa fa-check" aria-hidden="true"></i>
                                <p class="mb-0 text-white text-size-16">Qualified Doctors</p>
                            </li>
                        </ul>
                        <ul class="list-unstyled mb-0 list2">
                            <li>
                                <i class="fa fa-check" aria-hidden="true"></i>
                                <p class="mb-0 text-white text-size-16">Couples Vision Therapy</p>
                            </li>
                            <li>
                                <i class="fa fa-check" aria-hidden="true"></i>
                                <p class="mb-0 text-white text-size-16">Visual Satisfaction</p>
                            </li>
                        </ul>
                    </div>
                    <a href="/eye-2/about" class="text-decoration-none primary_btn">Make Appointment<i class="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
            <div class="col-xl-7 col-lg-6 col-12 text-lg-left text-center order-lg-2 order-1">
                <div class="choose_wrapper position-relative" data-aos="fade-up">
                    <figure class="choose-rightbackground mb-0">
                        <img src="/eye-2/assets/images/choose-rightbackground.jpg" alt="image" class="img-fluid">
                    </figure>
                    <figure class="choose-logoimage mb-0">
                        <img src="/eye-2/assets/images/choose-logoimage.png" alt="image" class="img-fluid">
                    </figure>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- Statistic -->
<section class="statistic-con statistic2-con position-relative">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="statistic_content text-center" data-aos="fade-up">
                    <h6>Our Statistics</h6>
                    <h2>Eye Health Facts and Figures</h2>
                </div>
            </div>
        </div>
        <div class="row all_row" data-aos="fade-up">
            <div class="col-lg-3 col-md-6 col-sm-6 col-12 all_column">
                <div class="statistic-box">
                    <figure class="icon">
                        <img src="/eye-2/assets/images/statistic2-icon1.png" alt="image" class="img-fluid">
                    </figure>
                    <span class="number counter">95</span>
                    <sup class="plus">+</sup>
                    <span class="text">Awards Win</span>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6 col-12 all_column">
                <div class="statistic-box">
                    <figure class="icon">
                        <img src="/eye-2/assets/images/statistic2-icon2.png" alt="image" class="img-fluid">
                    </figure>
                    <span class="number counter">100</span>
                    <sup class="plus">%</sup>
                    <span class="text">Satisfied Patients</span>
                </div> 
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6 col-12 all_column">
                <div class="statistic-box">
                    <figure class="icon">
                        <img src="/eye-2/assets/images/statistic2-icon3.png" alt="image" class="img-fluid">
                    </figure>
                    <span class="number counter">50</span>
                    <sup class="plus">+</sup>
                    <span class="text">Years of Experience</span>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6 col-12 all_column">
                <div class="statistic-box">
                    <figure class="icon">
                        <img src="/eye-2/assets/images/statistic2-icon4.png" alt="image" class="img-fluid">
                    </figure>
                    <span class="number counter">130</span>
                    <sup class="plus">+</sup>
                    <span class="text">Expert Doctors</span>
                </div> 
            </div>
        </div>
    </div>
</section>
<!-- Contact -->
<section class="contact-con contact2-con position-relative">
    <div class="container">
        <div class="row">
            <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 text-lg-left text-center order-lg-1 order-2">
                <div class="contact_wrapper">
                    <figure class="contact-image1 mb-0">
                        <img src="/eye-2/assets/images/contact2-image1.png" alt="image">
                    </figure>
                    <figure class="contact-image2 mb-0">
                        <img src="/eye-2/assets/images/contact2-image2.png" alt="image" class="img-fluid">
                    </figure>
                </div>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 order-lg-2 order-1">
                <div class="contact_content" data-aos="fade-up">
                    <h6>Get Appointment</h6>
                    <h2>Book Appointment for Consultation</h2>
                    <form id="contactpage" method="post" class="position-relative">
                        <div class="form-group input1 float-left">
                            <input type="text" class="form_style" placeholder="Name" name="fname" id="fname">
                        </div>
                        <div class="form-group float-left">
                            <input type="tel" class="form_style" placeholder="Phone" name="phone" id="phone">
                        </div>
                        <div class="form-group input1 float-left">
                            <input type="email" class="form_style" placeholder="Email" name="email" id="email">
                        </div>
                        <div class="form-group float-left">
                            <select class="form-control" required>
                                <option value="" disabled selected hidden>Department</option>
                                <option value="general">General</option>
                                <option value="cardiology">Cardiology</option>
                                <option value="neurology">Neurology</option>
                            </select>
                        </div>
                        <div class="form-group input1 float-left">
                            <input type="date" class="form_style" name="date" id="date">
                        </div>
                        <div class="form-group float-left time">
                            <input type="time" class="form_style" name="time" id="time">
                            <i class="fa-solid fa-clock"></i>
                        </div>
                        <button type="submit" id="submit" class="submit_now text-decoration-none">Book Appointment<i class="fa-solid fa-arrow-right"></i></button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- Case -->
<section class="case-con case2-con position-relative">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="case_content text-center" data-aos="fade-up">
                    <h6>Recent Activities</h6>
                    <h2>Our Latest Case Studies</h2>
                </div>
            </div>
        </div>
        <div class="row" data-aos="fade-up">
            <div class="col-12">
                <div class="owl-carousel owl-theme">
                    <div class="item">
                        <div class="case-box">
                            <figure class="case-image mb-0">
                                <img src="/eye-2/assets/images/case-image1.jpg" alt="image" class="img-fluid">
                            </figure>
                            <div class="content">
                                <div class="text">
                                    <h5>Refractive Nature</h5>
                                    <p class="text-size-16 mb-0">Nulla pariatur maiores...</p>
                                </div>
                                <a href="#" class="text-decoration-none" data-toggle="modal" data-target="#blog-model-1">
                                    <i class="fa-solid fa-arrow-right"></i>
                                </a>
                            </div>
                        </div> 
                    </div>
                    <div class="item">
                        <div class="case-box">
                            <figure class="case-image mb-0">
                                <img src="/eye-2/assets/images/case-image2.jpg" alt="image" class="img-fluid">
                            </figure>
                            <div class="content">
                                <div class="text">
                                    <h5>Retinal Surgery</h5>
                                    <p class="text-size-16 mb-0">Eulla pariatur maiores...</p>
                                </div>
                                <a href="#" class="text-decoration-none" data-toggle="modal" data-target="#blog-model-2">
                                    <i class="fa-solid fa-arrow-right"></i>
                                </a>
                            </div>
                        </div> 
                    </div>
                    <div class="item">
                        <div class="case-box">
                            <figure class="case-image mb-0">
                                <img src="/eye-2/assets/images/case-image3.jpg" alt="image" class="img-fluid">
                            </figure>
                            <div class="content">
                                <div class="text">
                                    <h5>Glaucoma Surgery</h5>
                                    <p class="text-size-16 mb-0">Mulla pariatur maiores...</p>
                                </div>
                                <a href="#" class="text-decoration-none" data-toggle="modal" data-target="#blog-model-3">
                                    <i class="fa-solid fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="case-box">
                            <figure class="case-image mb-0">
                                <img src="/eye-2/assets/images/case-image1.jpg" alt="image" class="img-fluid">
                            </figure>
                            <div class="content">
                                <div class="text">
                                    <h5>Refractive Nature</h5>
                                    <p class="text-size-16 mb-0">Nulla pariatur maiores...</p>
                                </div>
                                <a href="#" class="text-decoration-none" data-toggle="modal" data-target="#blog-model-1">
                                    <i class="fa-solid fa-arrow-right"></i>
                                </a>
                            </div>
                        </div> 
                    </div>
                    <div class="item">
                        <div class="case-box">
                            <figure class="case-image mb-0">
                                <img src="/eye-2/assets/images/case-image2.jpg" alt="image" class="img-fluid">
                            </figure>
                            <div class="content">
                                <div class="text">
                                    <h5>Retinal Surgery</h5>
                                    <p class="text-size-16 mb-0">Eulla pariatur maiores...</p>
                                </div>
                                <a href="#" class="text-decoration-none" data-toggle="modal" data-target="#blog-model-2">
                                    <i class="fa-solid fa-arrow-right"></i>
                                </a>
                            </div>
                        </div> 
                    </div>
                    <div class="item">
                        <div class="case-box">
                            <figure class="case-image mb-0">
                                <img src="/eye-2/assets/images/case-image3.jpg" alt="image" class="img-fluid">
                            </figure>
                            <div class="content">
                                <div class="text">
                                    <h5>Glaucoma Surgery</h5>
                                    <p class="text-size-16 mb-0">Mulla pariatur maiores...</p>
                                </div>
                                <a href="#" class="text-decoration-none" data-toggle="modal" data-target="#blog-model-3">
                                    <i class="fa-solid fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="case-box">
                            <figure class="case-image mb-0">
                                <img src="/eye-2/assets/images/case-image1.jpg" alt="image" class="img-fluid">
                            </figure>
                            <div class="content">
                                <div class="text">
                                    <h5>Refractive Nature</h5>
                                    <p class="text-size-16 mb-0">Nulla pariatur maiores...</p>
                                </div>
                                <a href="#" class="text-decoration-none" data-toggle="modal" data-target="#blog-model-1">
                                    <i class="fa-solid fa-arrow-right"></i>
                                </a>
                            </div>
                        </div> 
                    </div>
                    <div class="item">
                        <div class="case-box">
                            <figure class="case-image mb-0">
                                <img src="/eye-2/assets/images/case-image2.jpg" alt="image" class="img-fluid">
                            </figure>
                            <div class="content">
                                <div class="text">
                                    <h5>Retinal Surgery</h5>
                                    <p class="text-size-16 mb-0">Eulla pariatur maiores...</p>
                                </div>
                                <a href="#" class="text-decoration-none" data-toggle="modal" data-target="#blog-model-2">
                                    <i class="fa-solid fa-arrow-right"></i>
                                </a>
                            </div>
                        </div> 
                    </div>
                    <div class="item">
                        <div class="case-box">
                            <figure class="case-image mb-0">
                                <img src="/eye-2/assets/images/case-image3.jpg" alt="image" class="img-fluid">
                            </figure>
                            <div class="content">
                                <div class="text">
                                    <h5>Glaucoma Surgery</h5>
                                    <p class="text-size-16 mb-0">Mulla pariatur maiores...</p>
                                </div>
                                <a href="#" class="text-decoration-none" data-toggle="modal" data-target="#blog-model-3">
                                    <i class="fa-solid fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- Help -->
<section class="help2-con position-relative">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-9 col-12">
                <div class="help_content" data-aos="fade-up">
                    <h6>Need Help?</h6>
                    <h2 class="text-white">Tailored Eye Care Solutions from Experienced Professionals</h2>
                    <div class="help_wrapper">
                        <a href="/eye-2/contact" class="text-decoration-none primary_btn">Make Appointment<i class="fa-solid fa-arrow-right"></i></a>
                        <a href="/eye-2/contact" class="text-decoration-none primary_btn secondary_btn">Read More<i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-12">
                <div class="help_video position-relative" data-aos="fade-up">
                    <a class="popup-vimeo video-icon text-decoration-none" href="/eye-2/assets/video/video_preview_h264.mp4">
                        <div class="mb-0 icon">
                            <img src="/eye-2/assets/images/help2-playicon.png" alt="image" class="thumb img-fluid" style="cursor: pointer">                                
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- Testimonial -->
<section class="testimonial2-con position-relative">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="testimonial_content text-center" data-aos="fade-up">
                    <h6>Testimonials</h6>
                    <h2>What Our Patients Say!</h2>
                </div>
            </div>
        </div>
        <div class="row" data-aos="fade-up">
            <div class="col-12">
                <div class="owl-carousel owl-theme">
                    <div class="item">
                        <div class="testimonial-box">
                            <figure class="testimonial-personimage mb-0">
                                <img src="/eye-2/assets/images/testimonial2-personimage1.jpg" alt="image" class="img-fluid">
                            </figure>
                            <div class="content">
                                <p class="text-size-16">“ Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremrue laudantium, totam rem aperiam,
                                    eaque ipsa ruae facere possimus ”
                                </p>
                                <ul class="list-unstyled">
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                </ul>
                                <span class="name">Merina Doe</span>
                                <span class="review">Happy Customer</span>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="testimonial-box">
                            <figure class="testimonial-personimage mb-0">
                                <img src="/eye-2/assets/images/testimonial2-personimage2.jpg" alt="image" class="img-fluid">
                            </figure>
                            <div class="content">
                                <p class="text-size-16">“ Red ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremrue laudantium, totam rem aperiam,
                                    eaque ipsa ruae facere possimus ”
                                </p>
                                <ul class="list-unstyled">
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                </ul>
                                <span class="name">Kevin Parker</span>
                                <span class="review">Happy Customer</span>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="testimonial-box">
                            <figure class="testimonial-personimage mb-0">
                                <img src="/eye-2/assets/images/testimonial2-personimage1.jpg" alt="image" class="img-fluid">
                            </figure>
                            <div class="content">
                                <p class="text-size-16">“ Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremrue laudantium, totam rem aperiam,
                                    eaque ipsa ruae facere possimus ”
                                </p>
                                <ul class="list-unstyled">
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                </ul>
                                <span class="name">Merina Doe</span>
                                <span class="review">Happy Customer</span>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="testimonial-box">
                            <figure class="testimonial-personimage mb-0">
                                <img src="/eye-2/assets/images/testimonial2-personimage2.jpg" alt="image" class="img-fluid">
                            </figure>
                            <div class="content">
                                <p class="text-size-16">“ Red ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremrue laudantium, totam rem aperiam,
                                    eaque ipsa ruae facere possimus ”
                                </p>
                                <ul class="list-unstyled">
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                </ul>
                                <span class="name">Kevin Parker</span>
                                <span class="review">Happy Customer</span>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="testimonial-box">
                            <figure class="testimonial-personimage mb-0">
                                <img src="/eye-2/assets/images/testimonial2-personimage1.jpg" alt="image" class="img-fluid">
                            </figure>
                            <div class="content">
                                <p class="text-size-16">“ Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremrue laudantium, totam rem aperiam,
                                    eaque ipsa ruae facere possimus ”
                                </p>
                                <ul class="list-unstyled">
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                </ul>
                                <span class="name">Merina Doe</span>
                                <span class="review">Happy Customer</span>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="testimonial-box">
                            <figure class="testimonial-personimage mb-0">
                                <img src="/eye-2/assets/images/testimonial2-personimage2.jpg" alt="image" class="img-fluid">
                            </figure>
                            <div class="content">
                                <p class="text-size-16">“ Red ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremrue laudantium, totam rem aperiam,
                                    eaque ipsa ruae facere possimus ”
                                </p>
                                <ul class="list-unstyled">
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                </ul>
                                <span class="name">Kevin Parker</span>
                                <span class="review">Happy Customer</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- Faq -->
<section class="faq-con faqpage-con position-relative">
    <div class="container">
        <div class="row">
            <div class="col-12 mx-auto">
                <div class="faq_content text-center" data-aos="fade-up">
                    <h6>Faq's</h6>
                    <h2>Frequently Asked Questions</h2>
                </div>
            </div>
        </div>
        <div class="faq" data-aos="fade-up">
            <div class="accordian-section-inner position-relative">
                <div class="accordian-inner">
                    <div id="faq_accordion1">
                        <div class="row">
                            <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                                <div class="accordion-card">
                                    <div class="card-header" id="headingOne">
                                        <a href="#" class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                            <h4>What should I expect during my first visit?</h4>
                                        </a>
                                    </div>
                                    <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#faq_accordion1">
                                        <div class="card-body">
                                            <p class="text-size-16 text-left mb-0">Beatae vitae dicta sunt explicabo nemo enim ipsam voluptatem quia voluptas aspernatur aurodit 
                                                aut fugit, sed neatae vitae dicta ripiscing elit
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-card">
                                    <div class="card-header" id="headingTwo">
                                        <a href="#" class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            <h4>Are contact lenses safe to wear?</h4>
                                        </a>
                                    </div>
                                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#faq_accordion1">
                                        <div class="card-body">
                                            <p class="text-size-16 text-left mb-0">Beatae vitae dicta sunt explicabo nemo enim ipsam voluptatem quia voluptas aspernatur aurodit 
                                                aut fugit, sed neatae vitae dicta ripiscing elit
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-card">
                                    <div class="card-header" id="headingThree">
                                        <a href="#" class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            <h4>What are the signs that I need an optometrist?</h4>
                                        </a>
                                    </div>
                                    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#faq_accordion1">
                                        <div class="card-body">
                                            <p class="text-size-16 text-left mb-0">Beatae vitae dicta sunt explicabo nemo enim ipsam voluptatem quia voluptas aspernatur aurodit 
                                                aut fugit, sed neatae vitae dicta ripiscing elit
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-card">
                                    <div class="card-header" id="headingFour">
                                        <a href="#" class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                            <h4>Do you accept insurance for eye exams? </h4>
                                        </a>
                                    </div>
                                    <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#faq_accordion1">
                                        <div class="card-body">
                                            <p class="text-size-16 text-left mb-0">Beatae vitae dicta sunt explicabo nemo enim ipsam voluptatem quia voluptas aspernatur aurodit 
                                                aut fugit, sed neatae vitae dicta ripiscing elit
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                                <div class="accordion-card">
                                    <div class="card-header" id="headingFive">
                                        <a href="#" class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                            <h4>How can I maintain good eye health?</h4>
                                        </a>
                                    </div>
                                    <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-parent="#faq_accordion1">
                                        <div class="card-body">
                                            <p class="text-size-16 text-left mb-0">Beatae vitae dicta sunt explicabo nemo enim ipsam voluptatem quia voluptas aspernatur aurodit 
                                                aut fugit, sed neatae vitae dicta ripiscing elit
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-card">
                                    <div class="card-header" id="headingSix">
                                        <a href="#" class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                            <h4>Are contact lenses safe to wear?</h4>
                                        </a>
                                    </div>
                                    <div id="collapseSix" class="collapse" aria-labelledby="headingSix" data-parent="#faq_accordion1">
                                        <div class="card-body">
                                            <p class="text-size-16 text-left mb-0">Beatae vitae dicta sunt explicabo nemo enim ipsam voluptatem quia voluptas aspernatur aurodit 
                                                aut fugit, sed neatae vitae dicta ripiscing elit
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-card">
                                    <div class="card-header" id="headingSeven">
                                        <a href="#" class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                            <h4>Can children wear contact lenses?</h4>
                                        </a>
                                    </div>
                                    <div id="collapseSeven" class="collapse" aria-labelledby="headingSeven" data-parent="#faq_accordion1">
                                        <div class="card-body">
                                            <p class="text-size-16 text-left mb-0">Beatae vitae dicta sunt explicabo nemo enim ipsam voluptatem quia voluptas aspernatur aurodit 
                                                aut fugit, sed neatae vitae dicta ripiscing elit
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-card">
                                    <div class="card-header" id="headingEight">
                                        <a href="#" class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                            <h4>How do I choose the right glasses?</h4>
                                        </a>
                                    </div>
                                    <div id="collapseEight" class="collapse" aria-labelledby="headingEight" data-parent="#faq_accordion1">
                                        <div class="card-body">
                                            <p class="text-size-16 text-left mb-0">Beatae vitae dicta sunt explicabo nemo enim ipsam voluptatem quia voluptas aspernatur aurodit 
                                                aut fugit, sed neatae vitae dicta ripiscing elit
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- Article -->
<section class="article-con position-relative">
    <div class="container">
        <div class="row">
            <div class="col-lg-10 col-12 mx-auto">
                <div class="article_content text-center" data-aos="fade-up">
                    <h6>Latest Articles</h6>
                    <h2>Our Latest Blog Posts</h2>
                </div>
            </div>
        </div>
        <div class="article_wrapper">
            <div class="row" data-aos="fade-up">
                <div class="col-lg-7 col-md-12 col-sm-12 col-12">
                    <div class="article-box article-bigbox position-relative">
                        <figure class="article-image mb-0">
                            <img src="/eye-2/assets/images/article-image1.jpg" alt="image" class="img-fluid">
                        </figure>
                        <div class="box-content">
                            <div class="content">
                                <div class="admin">
                                    <img src="/eye-2/assets/images/article-adminicon.png" alt="image" class="img-fluid">
                                    <span class="name">Joseph Dan</span>
                                </div>
                                <div class="calendar">
                                    <img src="/eye-2/assets/images/article-calendaricon.png" alt="image" class="img-fluid">
                                    <span class="date">April 15, 2024</span>
                                </div>
                            </div>
                            <a href="/eye-2/single-blog" class="text-decoration-none"><h5>Understanding Blue Light and Your Eyes</h5></a>
                            <a href="/eye-2/single-blog" class="text-decoration-none arrow">Learn More<i class="fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-5 col-md-12 col-sm-12 col-12">
                    <div class="article-box">
                        <figure class="article-image">
                            <img src="/eye-2/assets/images/article-image2.jpg" alt="image" class="img-fluid">
                        </figure>
                        <div class="box-content">
                            <div class="content">
                                <div class="admin">
                                    <img src="/eye-2/assets/images/article-adminicon.png" alt="image" class="img-fluid">
                                    <span class="name">Joseph Dan</span>
                                </div>
                                <div class="calendar">
                                    <img src="/eye-2/assets/images/article-calendaricon.png" alt="image" class="img-fluid">
                                    <span class="date">April 15, 2024</span>
                                </div>
                            </div>
                            <a href="/eye-2/single-blog" class="text-decoration-none"><h5>Top Tips for Healthy Eyes</h5></a>
                            <a href="/eye-2/single-blog" class="text-decoration-none arrow">Learn More<i class="fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>
                    <div class="article-box">
                        <figure class="article-image">
                            <img src="/eye-2/assets/images/article-image3.jpg" alt="image" class="img-fluid">
                        </figure>
                        <div class="box-content">
                            <div class="content">
                                <div class="admin">
                                    <img src="/eye-2/assets/images/article-adminicon.png" alt="image" class="img-fluid">
                                    <span class="name">Joseph Dan</span>
                                </div>
                                <div class="calendar">
                                    <img src="/eye-2/assets/images/article-calendaricon.png" alt="image" class="img-fluid">
                                    <span class="date">April 15, 2024</span>
                                </div>
                            </div>
                            <a href="/eye-2/single-blog" class="text-decoration-none"><h5>How to Choose the Right Glasses</h5></a>
                            <a href="/eye-2/single-blog" class="text-decoration-none arrow">Learn More<i class="fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>
                    <div class="article-box">
                        <figure class="article-image">
                            <img src="/eye-2/assets/images/article-image4.jpg" alt="image" class="img-fluid">
                        </figure>
                        <div class="box-content">
                            <div class="content">
                                <div class="admin">
                                    <img src="/eye-2/assets/images/article-adminicon.png" alt="image" class="img-fluid">
                                    <span class="name">Joseph Dan</span>
                                </div>
                                <div class="calendar">
                                    <img src="/eye-2/assets/images/article-calendaricon.png" alt="image" class="img-fluid">
                                    <span class="date">April 15, 2024</span>
                                </div>
                            </div>
                            <a href="/eye-2/single-blog" class="text-decoration-none"><h5>Signs You Need an Eye Exam</h5></a>
                            <a href="/eye-2/single-blog" class="text-decoration-none arrow">Learn More<i class="fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- Footer -->
<section class="footer-con position-relative">
    <figure class="mb-0 footer-leftimage">
        <img src="/eye-2/assets/images/footer-leftimage.png" alt="image" class="img-fluid">
    </figure>
    <div class="container position-relative">
        <div class="row">
            <div class="col-12">
                <div class="upper_portion" data-aos="fade-up">
                    <div class="heading">
                        <h3 class="mb-0">Subscribe to Our Newsletter</h3>
                    </div>
                    <form action="javascript:;">
                        <div class="form-group position-relative mb-0">
                            <input type="text" class="form_style" placeholder="Enter Your Email Address:" name="email">
                            <button>Subscribe<i class="fa-solid fa-arrow-right"></i></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="middle_portion">
            <div class="row">
                <div class="col-lg-3 col-md-12 col-sm-12 col-12">
                    <div class="logo-content">
                        <a href="/eye-2" class="footer-logo">
                            <figure class="mb-0"><img src="/eye-2/assets/images/footer-logo.png" alt="image"></figure>
                        </a>
                        <p class="text text-size-14">Nemo enim ipsam voluptatem quia voluptas sit asperna tur aut odit aut fugit, sed quia conseuntur
                            magni dolor es eos rui ratione...
                        </p>
                        <ul class="list-unstyled mb-0 social-icons">
                            <li><a href="https://www.facebook.com/" class="text-decoration-none"><i class="fa-brands fa-facebook social-networks" aria-hidden="true"></i></a></li>
                            <li><a href="https://twitter.com/" class="text-decoration-none"><i class="fa-brands fa-x-twitter social-networks" aria-hidden="true"></i></a></li>
                            <li><a href="https://pk.linkedin.com/" class="text-decoration-none"><i class="fa-brands fa-linkedin social-networks" aria-hidden="true"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-4 col-6">
                    <div class="links">
                        <h5 class="heading">Useful Links</h5>
                        <ul class="list-unstyled mb-0">
                            <li><i class="fa-solid fa-arrow-right"></i><a href="/eye-2" class="text-decoration-none">Home</a></li>
                            <li><i class="fa-solid fa-arrow-right"></i><a href="/eye-2/about" class="text-decoration-none">About</a></li>
                            <li><i class="fa-solid fa-arrow-right"></i><a href="/eye-2/service" class="text-decoration-none">Services</a></li>
                            <li><i class="fa-solid fa-arrow-right"></i><a href="/eye-2/team" class="text-decoration-none">Team</a></li>
                            <li><i class="fa-solid fa-arrow-right"></i><a href="/eye-2/blog" class="text-decoration-none">Blog</a></li>
                            <li><i class="fa-solid fa-arrow-right"></i><a href="/eye-2/contact" class="text-decoration-none">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-4 col-6">
                    <div class="timing">
                        <h5 class="heading">Working Hours</h5>
                        <ul class="list-unstyled mb-0">
                            <li><p>Monday – Saturday</p><span>8:00 am – 9:00 pm</span></li>
                            <li><p>Sunday – Thursday</p><span>9.00 am – 6.00 pm</span></li>
                            <li><p>Friday – Saturday</p><span>10.00 am – 8.00 pm</span></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-4 col-12">
                    <div class="contact">
                        <h5 class="heading">Contact Us</h5>
                        <ul class="list-unstyled mb-0">
                            <li class="text">
                                <i class="fa-solid fa-phone"></i>
                                <a href="tel:+568925896325" class="text-decoration-none">+5689 2589 6325</a>
                            </li>
                            <li class="text">
                                <i class="fa-solid fa-envelope"></i>
                                <a href="mailto:info@opticest.com" class="text-decoration-none">Info@opticest.com</a>
                            </li>
                            <li class="text">
                                <i class="fa-solid fa-location-dot"></i>
                                <a href="https://www.google.com/maps/course/21+King+St,+Melbourne+VIC+3000,+Australia/@-37.8199805,144.9529083,18z/data=!4m6!3m5!1s0x6ad65d52754eaecb:0x22f367daf52cbd47!8m2!3d-37.819936!4d144.9570765!16s%2Fg%2F11c2dj2n2c?entry=ttu"
                                    class="text-decoration-none address mb-0">21 King Street Melbourne, 3000, Australia
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="fixed-form-container">
        <div class="image">
            <figure class="footer-contactimage mb-0">
                <img src="/eye-2/assets/images/footer-contactimage.png" alt="image" class="img-fluid">
            </figure>
        </div>
        <div class="body" style="display: none;">
            <form action="javascript:;">
                <div class="form-group mb-0">
                    <input type="text" class="form_style" placeholder="Name" name="fname">
                </div>
                <div class="form-group mb-0">
                    <input type="email" class="form_style" placeholder="Email" name="email">
                </div>
                <div class="form-group mb-0">
                    <input type="tel" class="form_style" placeholder="Phone" name="phone">
                </div>
                <div class="form-group mb-0">
                    <textarea class="form_style" placeholder="Message" rows="3" name="msg"></textarea>
                </div>
                <button type="submit" class="submit_now text-decoration-none">Submit Now<i class="fa-solid fa-arrow-right"></i></button>
            </form>
        </div>
    </div>
    <div class="copyright">
        <p class="mb-0">Copyright ©opticest.com, All Rights Reserved 2024</p>
    </div>
</section>
<!-- Project SECTION POPUP -->
<div class="project_modal">
    <div id="blog-model-1" class="modal fade blog-model-con" tabindex="-1" style="display: none;" aria-hidden="true">
        <div class="modal-dialog">
           <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true" ><i class="fa-solid fa-x"></i></span></button>
                </div>
                <div class="modal-body">
                    <div class="blog-box-item mb-0">
                        <div class="blog-img">
                            <figure class="mb-0">
                                <img src="/eye-2/assets/images/case-image1.jpg" alt="image" class="img-fluid">
                            </figure>
                        </div>
                        <div class="project_content">
                            <h4>Refractive Nature</h4>
                            <span class="text">Eiusmod enim tempor incididunt aut labore et dolore magna aliua ruis nostrud exercitation ullamco laboris.</span>
                            <div class="properties">
                                <ul class="list-unstyled mb-0">
                                    <li class="text-size-16"><i class="circle fa fa-check" aria-hidden="true"></i>Excepteur sint occaecat</li>
                                    <li class="text-size-16"><i class="circle fa fa-check" aria-hidden="true"></i>Rerum hic tenetur a sapiente</li>
                                    <li class="text-size-16"><i class="circle fa fa-check" aria-hidden="true"></i>Duis aute irure dolor</li>
                                </ul>
                            </div>
                            <span class="text">Amet consectetur adipiscing elit adipis eleifend dictum poten mattis viverra eget quam lacus enimcing inti porttitor bibenu relit duiteri nisl areo nuam lacus.</span>
                            <a href="/eye-2/contact" class="text-decoration-none primary_btn">Read More<i class="fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="project_modal">
    <div id="blog-model-2" class="modal fade blog-model-con" tabindex="-1" style="display: none;" aria-hidden="true">
        <div class="modal-dialog">
           <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true" ><i class="fa-solid fa-x"></i></span></button>
                </div>
                <div class="modal-body">
                    <div class="blog-box-item mb-0">
                        <div class="blog-img">
                            <figure class="mb-0">
                                <img src="/eye-2/assets/images/case-image2.jpg" alt="image" class="img-fluid">
                            </figure>
                        </div>
                        <div class="project_content">
                            <h4>Retinal Surgery</h4>
                            <span class="text">Eiusmod enim tempor incididunt aut labore et dolore magna aliua ruis nostrud exercitation ullamco laboris.</span>
                            <div class="properties">
                                <ul class="list-unstyled mb-0">
                                    <li class="text-size-16"><i class="circle fa fa-check" aria-hidden="true"></i>Excepteur sint occaecat</li>
                                    <li class="text-size-16"><i class="circle fa fa-check" aria-hidden="true"></i>Rerum hic tenetur a sapiente</li>
                                    <li class="text-size-16"><i class="circle fa fa-check" aria-hidden="true"></i>Duis aute irure dolor</li>
                                </ul>
                            </div>
                            <span class="text">Amet consectetur adipiscing elit adipis eleifend dictum poten mattis viverra eget quam lacus enimcing inti porttitor bibenu relit duiteri nisl areo nuam lacus.</span>
                            <a href="/eye-2/contact" class="text-decoration-none primary_btn">Read More<i class="fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="project_modal">
    <div id="blog-model-3" class="modal fade blog-model-con" tabindex="-1" style="display: none;" aria-hidden="true">
        <div class="modal-dialog">
           <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true" ><i class="fa-solid fa-x"></i></span></button>
                </div>
                <div class="modal-body">
                    <div class="blog-box-item mb-0">
                        <div class="blog-img">
                            <figure class="mb-0">
                                <img src="/eye-2/assets/images/case-image3.jpg" alt="image" class="img-fluid">
                            </figure>
                        </div>
                        <div class="project_content">
                            <h4>Glaucoma Surgery</h4>
                            <span class="text">Eiusmod enim tempor incididunt aut labore et dolore magna aliua ruis nostrud exercitation ullamco laboris.</span>
                            <div class="properties">
                                <ul class="list-unstyled mb-0">
                                    <li class="text-size-16"><i class="circle fa fa-check" aria-hidden="true"></i>Excepteur sint occaecat</li>
                                    <li class="text-size-16"><i class="circle fa fa-check" aria-hidden="true"></i>Rerum hic tenetur a sapiente</li>
                                    <li class="text-size-16"><i class="circle fa fa-check" aria-hidden="true"></i>Duis aute irure dolor</li>
                                </ul>
                            </div>
                            <span class="text">Amet consectetur adipiscing elit adipis eleifend dictum poten mattis viverra eget quam lacus enimcing inti porttitor bibenu relit duiteri nisl areo nuam lacus.</span>
                            <a href="/eye-2/contact" class="text-decoration-none primary_btn">Read More<i class="fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- PRE LOADER -->
<div class="loader-mask">
    <div class="loader">
        <div></div>
        <div></div>
    </div>
</div>
<!-- Latest compiled JavaScript -->

















    ` }} />
  );
}
