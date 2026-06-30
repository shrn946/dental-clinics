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
<div class="sub_banner position-relative">
    <!-- Topbar -->
    <div class="top-bar-con">
        <div class="container">
            <div class="top-bar-box">
                <div class="top-bar-info">
                    <ul class="list-unstyled mb-0">
                        <li class="info">
                            <img src="/eye-2/assets/images/header-phoneimage.png" alt="image" class="img-fluid">
                            <a href="tel:+568925896325" class="text-decoration-none">
                                <span class="number">+5689 2589 6325</span>
                            </a>
                        </li>
                        <li class="info">
                            <img src="/eye-2/assets/images/header-locationimage.png" alt="image" class="img-fluid">
                            <a href="https://www.google.com/maps/course/21+King+St,+Melbourne+VIC+3000,+Australia/@-37.8199805,144.9529083,18z/data=!4m6!3m5!1s0x6ad65d52754eaecb:0x22f367daf52cbd47!8m2!3d-37.819936!4d144.9570765!16s%2Fg%2F11c2dj2n2c?entry=ttu"
                                class="text-decoration-none address mb-0">21 King Street Melbourne, Australia
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="top-bar-social">
                    <div class="info">
                        <img src="/eye-2/assets/images/header-clockimage.png" alt="image" class="img-fluid">
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
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle dropdown-color navbar-text-color" href="#"
                                id="navbarDropdown1" role="button" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false"> Home </a>
                            <div class="dropdown-menu drop-down-content">
                                <ul class="list-unstyled drop-down-pages">
                                    <li class="nav-item"><a class="dropdown-item nav-link" href="/eye-2">Home 1</a></li>
                                    <li class="nav-item"><a class="dropdown-item nav-link" href="/eye-2/home-2">Home 2</a></li>
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
                        <li class="nav-item dropdown active">
                            <a class="nav-link dropdown-toggle dropdown-color navbar-text-color" href="#"
                                id="navbarDropdown2" role="button" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false"> Pages </a>
                            <div class="dropdown-menu drop-down-content">
                                <ul class="list-unstyled drop-down-pages">
                                    <li class="nav-item"><a class="dropdown-item nav-link" href="/eye-2/service-detail">Service Details</a></li>
                                    <li class="nav-item"><a class="dropdown-item nav-link" href="/eye-2/case-studies">Case Studies</a></li>
                                    <li class="nav-item active"><a class="dropdown-item nav-link" href="/eye-2/pricing">Pricing</a></li>
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
    <!-- Sub banner -->
    <section class="sub_banner_con position-relative">
        <div class="container position-relative">
            <div class="row">
                <div class="col-xl-6 col-lg-8 col-md-12 col-12">
                    <div class="sub_banner_content" data-aos="fade-up">
                        <h1 class="text-white">Pricing</h1>
                        <p class="text-white text-size-18">Guis nostrud exercitation ullamco laboris nisi aut aliquio modo consenuar irure in reprehenderit esse.</p>
                        <div class="box">
                            <a href="/eye-2" class="text-decoration-none">
                                <span class="mb-0">Home</span>
                            </a>
                            <i class="arrow fa-solid fa-arrow-right"></i>
                            <span class="mb-0 box_span">Pricing</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
<!-- Pricing -->
<section class="pricing-con position-relative">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="pricing_content text-center" data-aos="fade-up">
                    <h6>OUR PRICING</h6>
                    <h2>Great Prices We Offer</h2>
                </div>
            </div>
        </div>
        <div class="row all_row" data-aos="fade-up">
            <div class="col-lg-4 col-md-6 col-sm-6 col-12 mx-auto all_column">
                <div class="pricing-box all_boxes">
                    <div class="content">
                        <h5>Basic</h5>
                        <p class="text text-size-16">Reiciendis voluptatibus maiores conseruatur perferendis.</p>
                        <div class="value">
                            <sup class="dollar">$</sup>
                            <span class="number counter">70</span>
                            <span class="month">/checkup</span>
                        </div>
                    </div>
                    <ul class="list-unstyled all_boxes">
                        <li>
                            <i class="fa fa-check"></i>
                            <p class="mb-0 text-size-16">Comprehensive eye exam</p>
                        </li>
                        <li>
                            <i class="fa fa-check"></i>
                            <p class="mb-0 text-size-16">Basic prescription for glasses</p>
                        </li>
                        <li>
                            <i class="fa fa-check"></i>
                            <p class="mb-0 text-size-16">Personalized vision care</p>
                        </li>
                        <li>
                            <i class="fa fa-check"></i>
                            <p class="mb-0 text-size-16">Follow-up consultation</p>
                        </li>
                    </ul>
                    <a href="/eye-2/contact" class="text-decoration-none primary_btn">Get Started<i class="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-6 col-12 mx-auto all_column">
                <div class="pricing-box all_boxes">
                    <div class="content">
                        <h5>Enhanced</h5>
                        <p class="text text-size-16">Reiciendis voluptatibus maiores conseruatur perferendis.</p>
                        <div class="value">
                            <sup class="dollar">$</sup>
                            <span class="number counter">80</span>
                            <span class="month">/checkup</span>
                        </div>
                    </div>
                    <ul class="list-unstyled all_boxes">
                        <li>
                            <i class="fa fa-check"></i>
                            <p class="mb-0 text-size-16">All features of the Basic Vision</p>
                        </li>
                        <li>
                            <i class="fa fa-check"></i>
                            <p class="mb-0 text-size-16">Advanced diagnostic testing</p>
                        </li>
                        <li>
                            <i class="fa fa-check"></i>
                            <p class="mb-0 text-size-16">20% discount on eyewear</p>
                        </li>
                        <li>
                            <i class="fa fa-check"></i>
                            <p class="mb-0 text-size-16">Priority scheduling for follow-up</p>
                        </li>
                    </ul>
                    <a href="/eye-2/contact" class="text-decoration-none primary_btn">Get Started<i class="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-6 col-12 mx-auto all_column">
                <div class="pricing-box all_boxes mb-0">
                    <div class="content">
                        <h5>Premium</h5>
                        <p class="text text-size-16">Reiciendis voluptatibus maiores conseruatur perferendis.</p>
                        <div class="value">
                            <sup class="dollar">$</sup>
                            <span class="number counter">90</span>
                            <span class="month">/checkup</span>
                        </div>
                    </div>
                    <ul class="list-unstyled all_boxes">
                        <li>
                            <i class="fa fa-check"></i>
                            <p class="mb-0 text-size-16">All features of the Enhanced Vision</p>
                        </li>
                        <li>
                            <i class="fa fa-check"></i>
                            <p class="mb-0 text-size-16">Customized contact lens fitting</p>
                        </li>
                        <li>
                            <i class="fa fa-check"></i>
                            <p class="mb-0 text-size-16">Annual eye health screenings</p>
                        </li>
                        <li>
                            <i class="fa fa-check"></i>
                            <p class="mb-0 text-size-16">Complimentary eyewear cleaning</p>
                        </li>
                    </ul>
                    <a href="/eye-2/contact" class="text-decoration-none primary_btn">Get Started<i class="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- About -->
<section class="pricingabout-con position-relative">
    <div class="container">
        <div class="row">
            <div class="col-lg-7 col-md-12 col-sm-12 col-12 order-lg-1 order-2">
                <div class="about_content position-relative" data-aos="fade-up">
                    <div class="content">
                        <h6>About Us</h6>
                        <h2>We Provide Expert Solutions For Eyes</h2>
                        <p class="text text-size-18">Quis nostrud exercitation ullamco laboris nisi aut aliquio modo consequat ruis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore.
                        </p>
                        <div class="propertise">
                            <ul class="list-unstyled mb-0 list1">
                                <li>
                                    <i class="fa fa-check" aria-hidden="true"></i>
                                    <p class="mb-0 text-size-16">Modern Equipment</p>
                                </li>
                                <li>
                                    <i class="fa fa-check" aria-hidden="true"></i>
                                    <p class="mb-0 text-size-16">Qualified Doctors</p>
                                </li>
                            </ul>
                            <ul class="list-unstyled mb-0 list2">
                                <li>
                                    <i class="fa fa-check" aria-hidden="true"></i>
                                    <p class="mb-0 text-size-16">Couples Vision Therapy</p>
                                </li>
                                <li>
                                    <i class="fa fa-check" aria-hidden="true"></i>
                                    <p class="mb-0 text-size-16">Visual Satisfaction</p>
                                </li>
                            </ul>
                        </div>
                        <a href="/eye-2/about" class="text-decoration-none primary_btn">Read More<i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
            <div class="col-lg-5 col-md-12 col-sm-12 col-12 order-lg-2 order-1">
                <div class="about_wrapper position-relative">
                    <figure class="about-image mb-0">
                        <img src="/eye-2/assets/images/pricingabout-rightbackground.jpg" alt="image" class="image-fluid">
                    </figure>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- Testimonial -->
<section class="testimonial-con position-relative">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="testimonial_content text-center" data-aos="fade-up">
                    <h6>Testimonials</h6>
                    <h2>What Our Patients Say!</h2>
                </div>
            </div>
            <div class="col-xl-10 col-12 mx-auto position-relative">
                <figure class="testimonial-sideimage mb-0" data-aos="fade-up">
                    <img src="/eye-2/assets/images/testimonial-sideimage.png" alt="image" class="img-fluid">
                </figure>
                <div id="testimonialcarousel" class="carousel slide" data-ride="carousel" data-aos="fade-up">
                    <div class="testimonial_carousel text-center position-relative">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div class="testimonial-box">
                                    <ul class="list-unstyled">
                                        <li><i class="fa-solid fa-star"></i></li>
                                        <li><i class="fa-solid fa-star"></i></li>
                                        <li><i class="fa-solid fa-star"></i></li>
                                        <li><i class="fa-solid fa-star"></i></li>
                                        <li><i class="fa-solid fa-star"></i></li>
                                    </ul>
                                    <p class="text-size-18 paragarph">“Quia voluptas aspernatur aurodit aut fugit, beatae vitae dicta sunt explicabo nemo enim ipsam voluptatem
                                        sed neatae vitae dicta ripiscing elit, sed do euismod tempor incidunt labore are dolore magna aliqua ut enim a
                                        minim adipiscing elit, sed do euismod tempor incidunt labore minima veniam.”
                                    </p>
                                    <div class="lower_content">
                                        <span class="name">Katrina Parker</span>
                                        <span class="review">Happy Client</span>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="testimonial-box">
                                    <ul class="list-unstyled">
                                        <li><i class="fa-solid fa-star"></i></li>
                                        <li><i class="fa-solid fa-star"></i></li>
                                        <li><i class="fa-solid fa-star"></i></li>
                                        <li><i class="fa-solid fa-star"></i></li>
                                        <li><i class="fa-solid fa-star"></i></li>
                                    </ul>
                                    <p class="text-size-18 paragarph">“Beatae vitae dicta sunt explicabo nemo enim ipsam voluptatem quia voluptas aspernatur aur odit aut fugit,
                                        sed neatae vitae dicta ripiscing elit, sed do euismod tempor incidunt labore aredolore magna aliqua ut enim ad minim adipiscing elit,
                                        sed do euismod tempor incidunt labore minima veniam.”
                                    </p>
                                    <div class="lower_content">
                                        <span class="name">Fergus Douchebag</span>
                                        <span class="review">Happy Customer</span>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="testimonial-box">
                                    <ul class="list-unstyled">
                                        <li><i class="fa-solid fa-star"></i></li>
                                        <li><i class="fa-solid fa-star"></i></li>
                                        <li><i class="fa-solid fa-star"></i></li>
                                        <li><i class="fa-solid fa-star"></i></li>
                                        <li><i class="fa-solid fa-star"></i></li>
                                    </ul>
                                    <p class="text-size-18 paragarph">“Tempor incidunt labore are dolore magna aliqua ut enim a beatae vitae dicta sunt explicabo nemo enim
                                        ipsam voluptatem quia voluptas aspernatur aurodit aut fugit, sed neatae vitae dicta ripiscing elit, sed do euismod
                                        minim adipiscing elit, sed do euismod tempor incidunt labore minima veniam.”
                                    </p>
                                    <div class="lower_content">
                                        <span class="name">Erika Neurth</span>
                                        <span class="review">Happy Customer</span>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="testimonial-box">
                                    <ul class="list-unstyled">
                                        <li><i class="fa-solid fa-star"></i></li>
                                        <li><i class="fa-solid fa-star"></i></li>
                                        <li><i class="fa-solid fa-star"></i></li>
                                        <li><i class="fa-solid fa-star"></i></li>
                                        <li><i class="fa-solid fa-star"></i></li>
                                    </ul>
                                    <p class="text-size-18 paragarph">“Incidunt labore are dolore magna aliqua ut enim a minim adipiscing elit, sed do euismod tempor
                                        incidunt labore minima veniam. Beatae vitae dicta sunt explicabo nemo enim ipsam voluptatem quia voluptas aspernatur aurodit 
                                        aut fugit, sed neatae vitae dicta ripiscing elit, sed do euismod tempor”
                                    </p>
                                    <div class="lower_content">
                                        <span class="name">Alina James</span>
                                        <span class="review">Happy Client</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Indicators -->
                    <ul class="carousel-indicators">
                        <li data-target="#testimonialcarousel" data-slide-to="0" class="active">
                            <figure class="mb-0 image1">
                                <img src="/eye-2/assets/images/testimonial-personimage1.jpg" alt="image" class="img-fluid invert_effect">
                            </figure>
                        </li>
                        <li data-target="#testimonialcarousel" data-slide-to="1">
                            <figure class="mb-0 image2">
                                <img src="/eye-2/assets/images/testimonial-personimage2.jpg" alt="image" class="img-fluid invert_effect">
                            </figure>
                        </li>
                        <li data-target="#testimonialcarousel" data-slide-to="2">
                            <figure class="mb-0 image3">
                                <img src="/eye-2/assets/images/testimonial-personimage3.jpg" alt="image" class="img-fluid invert_effect">
                            </figure>
                        </li>
                        <li data-target="#testimonialcarousel" data-slide-to="3">
                            <figure class="mb-0 image4">
                                <img src="/eye-2/assets/images/testimonial-personimage4.jpg" alt="image" class="img-fluid invert_effect">
                            </figure>
                        </li>
                    </ul>
                    <div class="pagination_outer">
                        <button class="carousel-control-prev" type="button" data-target="#testimonialcarousel" data-slide="prev">
                            <i class="fa-solid fa-arrow-left"></i>
                        </button>
                        <button class="carousel-control-next" type="button" data-target="#testimonialcarousel" data-slide="next">
                            <i class="fa-solid fa-arrow-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- Faq -->
<section class="faq-con position-relative">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                <div class="faq_content" data-aos="fade-up">
                    <h6>Faq’s</h6>
                    <h2>Frequently Asked Questions</h2>
                    <div class="accordian-section-inner position-relative">
                        <div class="accordian-inner">
                            <div id="faq_accordion">
                                <div class="accordion-card">
                                    <div class="card-header" id="headingOne">
                                        <a href="#" class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                            <h4 class="mb-0">What should I expect during my first visit?</h4>
                                        </a>
                                    </div>
                                    <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#faq_accordion">
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
                                            <h4 class="mb-0">Are contact lenses safe to wear?</h4>
                                        </a>
                                    </div>
                                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#faq_accordion">
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
                                            <h4 class="mb-0">What are the signs that I need an optometrist?</h4>
                                        </a>
                                    </div>
                                    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#faq_accordion">
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
                                            <h4 class="mb-0">Do you accept insurance for eye exams </h4>
                                        </a>
                                    </div>
                                    <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#faq_accordion">
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
            <div class="col-lg-6 col-md-12 col-sm-12 col-12 text-lg-left text-center">
                <div class="faq_wrapper position-relative" data-aos="fade-up">
                    <figure class="faq-image mb-0">
                        <img src="/eye-2/assets/images/faq-image.jpg" alt="image" class="img-fluid">
                    </figure>
                    <figure class="faq-circle mb-0">
                        <img src="/eye-2/assets/images/faq-circle.png" alt="image" class="img-fluid">
                    </figure>
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
