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
                        <li class="nav-item active">
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
                        <h1 class="text-white">Contact Us</h1>
                        <p class="text-white text-size-18">Guis nostrud exercitation ullamco laboris nisi aut aliquio modo consenuar irure in reprehenderit esse.</p>
                        <div class="box">
                            <a href="/eye-2" class="text-decoration-none">
                                <span class="mb-0">Home</span>
                            </a>
                            <i class="arrow fa-solid fa-arrow-right"></i>
                            <span class="mb-0 box_span">Contact Us</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
<!-- Contact Info Form -->
<section class="contact-info-form-con">
    <div class="container">
        <div class="row">
            <div class="col-xl-10 col-12 mx-auto">
                <div class="row">
                    <div class="col-lg-5 col-md-12 col-sm-12 col-12">
                        <div class="contact_content" data-aos="fade-up">
                            <div class="contact-box">
                                <figure class="icon">
                                    <img src="/eye-2/assets/images/contact-locationimage.png" alt="image" class="img-fluid">
                                </figure>
                                <div class="box-content">
                                    <h5>Our Location:</h5>
                                    <a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8387096759398!2d144.95320007674053!3d-37.8172467342385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4dd5a05d97%3A0x3e64f855a564844d!2s121%20King%20St%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2s!4v1739525810895!5m2!1sen!2s"
                                         class="text-size-16 text-decoration-none mb-0"> 121 King Street, Melbourne Victoria 3000 Australia
                                    </a>
                                </div>
                            </div>
                            <div class="contact-box">
                                <figure class="icon">
                                    <img src="/eye-2/assets/images/contact-phoneimage.png" alt="image" class="img-fluid">
                                </figure>
                                <div class="box-content">
                                    <h5>Phone Number</h5>
                                    <a href="tel:+61383766284" class="text-decoration-none text text-size-16">(+61 3 8376 6284)</a>
                                    <div class="clearfix"></div>
                                    <a href="tel:+80023456789" class="mb-0 text-decoration-none text text-size-16 mb-0">(+800 2345 6789)</a>
                                </div>
                            </div>
                            <div class="contact-box">
                                <figure class="icon">
                                    <img src="/eye-2/assets/images/contact-emailimage.png" alt="image" class="img-fluid">
                                </figure>
                                <div class="box-content">
                                    <h5>Email us at</h5>
                                    <a href="mailto:info@opticest.com" class="text-decoration-none text-size-16">info@opticest.com</a>
                                    <div class="clearfix"></div>
                                    <a href="mailto:opticest@gmail.com" class="mb-0 text-decoration-none text-size-16 mb-0">opticest@gmail.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-7 col-md-12 col-sm-12 col-12">
                        <div class="contact_form" data-aos="fade-up">
                            <h6>Get in Touch</h6>
                            <h2>Send us a Message</h2>
                            <form id="contactpage" method="post" class="position-relative">
                                <div class="row">
                                    <div class="col-12">
                                        <ul class="list-unstyled mb-0">
                                            <li class="">
                                                <div class="form-group float-left input1 position-relative">
                                                    <input type="text" class="form_style" placeholder="First Name" name="fname" id="fname"> 
                                                </div>
                                            </li>
                                            <li class="">
                                                <div class="form-group float-left position-relative">
                                                    <input type="text" class="form_style" placeholder="Last Name" name="lname" id="lname"> 
                                                </div>
                                            </li>
                                            <li class="">
                                                <div class="form-group float-left input1 position-relative">
                                                    <input type="tel" class="form_style" placeholder="Phone" name="phone" id="phone">
                                                </div>
                                            </li> 
                                            <li class="">
                                                <div class="form-group float-left position-relative">
                                                    <input type="email" class="form_style" placeholder="Email" name="email" id="email">
                                                </div>
                                            </li>
                                            <li class="">
                                                <div class=" form-group message">
                                                    <textarea class="form_style w-100" placeholder="Message" rows="3" name="msg"></textarea>
                                                </div>
                                            </li>
                                            <li class="button">
                                                <div class="manage-button">
                                                    <button type="submit" id="submit" class="submit_now text-white text-decoration-none">Send Now<i class="fa-solid fa-arrow-right"></i></button>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>            
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- Map -->
<div class="map-con">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.3329737833114!2d144.96011341590386!3d-37.80566904135444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2s!4v1669200882885!5m2!1sen!2s" style="border:none;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>
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
