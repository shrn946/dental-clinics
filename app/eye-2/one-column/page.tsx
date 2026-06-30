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
                        <li class="nav-item dropdown active">
                            <a class="nav-link dropdown-toggle dropdown-color navbar-text-color" href="#"
                                id="navbarDropdown3" role="button" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false"> Blog </a>
                            <div class="dropdown-menu drop-down-content">
                                <ul class="list-unstyled drop-down-pages">
                                    <li class="nav-item"><a class="dropdown-item nav-link" href="/eye-2/blog">Blog</a></li>
                                    <li class="nav-item"><a class="dropdown-item nav-link" href="/eye-2/single-blog">Single Blog</a></li>
                                    <li class="nav-item"><a class="dropdown-item nav-link" href="/eye-2/load-more">Load More</a></li>
                                    <li class="nav-item active"><a class="dropdown-item nav-link" href="/eye-2/one-column">One Column</a></li>
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
                        <h1 class="text-white">One Column</h1>
                        <p class="text-white text-size-18">Guis nostrud exercitation ullamco laboris nisi aut aliquio modo consenuar irure in reprehenderit esse.</p>
                        <div class="box">
                            <a href="/eye-2" class="text-decoration-none">
                                <span class="mb-0">Home</span>
                            </a>
                            <i class="arrow fa-solid fa-arrow-right"></i>
                            <span class="mb-0 box_span">One Column</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
    <!-- ======================================= -->
    <!-- ==========   {One Column*}   ========== -->
    <!-- ======================================= -->
    <div class="blog-posts blogpage-section background-gradient">
        <div class="container">
            <div class="row wow fadeInUp" style="visibility: visible; animation-name: fadeInUp;">
                <div id="blog" class="col-xl-12">
                    <div class="blog-box onecolumn-blog float-left w-100 post-item mb-4">
                        <div class="post-item-wrap position-relative">
                            <div class="post-image">
                                <a href="/eye-2/single-blog"><img alt="image" src="/eye-2/assets/images/post-featured.jpg"
                                        loading="lazy"></a>
                            </div>
                            <div class="lower-portion">
                                <div class="span-i-con">
                                <i class="fa-solid fa-user"></i>
                                <span class="text-size-14 text-mr">By : Admin</span>
                                <i class="tag-mb fa-solid fa-tag"></i>
                                <span class="text-size-14">Virtual Assistant</span>
                                </div>
                                <p class="mb-0 text-size-16">Curabitur pulvinar euismod ante, ac sagittis ante posuere
                                    ac. Vivamus luctus commodo dolor porta feugiat. Fusce at velit id ligula ac sagittis
                                    ante posuere ac pharetra laoreet commodo dolor porta.</p>
                            </div>
                            <div class="button-portion loadone_twocol">
                                <div class="date">
                                    <i class="mb-0 calendar-ml fa-solid fa-calendar-days"></i>
                                    <span class="mb-0 text-size-14">Dec 20,2022</span>
                                </div>
                                <div class="button">
                                    <a class="mb-0 read_more text-decoration-none" href="/eye-2/single-blog">Read
                                        More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="blog-box onecolumn-blog float-left w-100 post-item mb-4">
                        <div class="post-item-wrap position-relative">
                            <div id="blogslider" class="carousel slide" data-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src="/eye-2/assets/images/post-featured2.jpg" alt="image" loading="lazy">
                                    </div>
                                    <div class="carousel-item">
                                        <img src="/eye-2/assets/images/post-featured3.jpg" alt="image" loading="lazy">
                                    </div>
                                    <div class="carousel-item">
                                        <img src="/eye-2/assets/images/post-featured4.jpg" alt="image" loading="lazy">
                                    </div>
                                </div>
                                <a class="carousel-control-prev" href="#blogslider" data-slide="prev">
                                    <span class="carousel-control-prev-icon"></span>
                                </a>
                                <a class="carousel-control-next" href="#blogslider" data-slide="next">
                                    <span class="carousel-control-next-icon"></span>
                                </a>
                            </div>
                            <div class="lower-portion">
                                <div class="span-i-con">
                                <i class="fa-solid fa-user"></i>
                                <span class="text-size-14 text-mr">By : Admin</span>
                                <i class="tag-mb fa-solid fa-tag"></i>
                                <span class="text-size-14">Virtual Assistant</span>
                                </div>
                                <p class="mb-0 text-size-16">Curabitur pulvinar euismod ante, ac sagittis ante posuere
                                    ac. Vivamus luctus commodo dolor porta feugiat. Fusce at velit id ligula ac sagittis
                                    ante posuere ac pharetra laoreet commodo dolor porta.</p>
                            </div>
                            <div class="button-portion loadone_twocol">
                                <div class="date">
                                    <i class="mb-0 calendar-ml fa-solid fa-calendar-days"></i>
                                    <span class="mb-0 text-size-14">Dec 20,2022</span>
                                </div>
                                <div class="button">
                                    <a class="mb-0 read_more text-decoration-none" href="/eye-2/single-blog">Read
                                        More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="blog-box onecolumn-blog float-left w-100 post-item mb-4">
                        <div class="post-item-wrap position-relative">
                            <div class="post-image">
                                <a href="/eye-2/single-blog"><img alt="image" src="/eye-2/assets/images/post-featured4.jpg"
                                        loading="lazy"></a>
                            </div>
                            <div class="lower-portion">
                                <div class="span-i-con">
                                <i class="fa-solid fa-user"></i>
                                <span class="text-size-14 text-mr">By : Admin</span>
                                <i class="tag-mb fa-solid fa-tag"></i>
                                <span class="text-size-14">Virtual Assistant</span>
                                </div>
                                <p class="mb-0 text-size-16">Curabitur pulvinar euismod ante, ac sagittis ante posuere
                                    ac. Vivamus luctus commodo dolor porta feugiat. Fusce at velit id ligula ac sagittis
                                    ante posuere ac pharetra laoreet commodo dolor porta.</p>
                            </div>
                            <div class="button-portion loadone_twocol">
                                <div class="date">
                                    <i class="mb-0 calendar-ml fa-solid fa-calendar-days"></i>
                                    <span class="mb-0 text-size-14">Dec 20,2022</span>
                                </div>
                                <div class="button">
                                    <a class="mb-0 read_more text-decoration-none" href="/eye-2/single-blog">Read
                                        More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="blog-box onecolumn-blog float-left w-100 post-item mb-4">
                        <div class="post-item-wrap position-relative">
                            <div class="post-audio position-relative">
                                <a href="/eye-2/single-blog"><img alt="image" src="/eye-2/assets/images/post-featured3.jpg"
                                        loading="lazy"> </a>
                                <!-- <audio class="position-absolute" controls="">
                                    <source src="horse.ogg" type="audio/ogg">
                                    <source src="/eye-2/assets/audio/horse.mp3" type="audio/mpeg">
                                </audio> -->
                            </div>
                            <div class="lower-portion">
                                <div class="span-i-con">
                                <i class="fa-solid fa-user"></i>
                                <span class="text-size-14 text-mr">By : Admin</span>
                                <i class="tag-mb fa-solid fa-tag"></i>
                                <span class="text-size-14">Virtual Assistant</span>
                                </div>
                                <p class="mb-0 text-size-16">Curabitur pulvinar euismod ante, ac sagittis ante posuere
                                    ac. Vivamus luctus commodo dolor porta feugiat. Fusce at velit id ligula ac sagittis
                                    ante posuere ac pharetra laoreet commodo dolor porta.</p>
                            </div>
                            <div class="button-portion loadone_twocol">
                                <div class="date">
                                    <i class="mb-0 calendar-ml fa-solid fa-calendar-days"></i>
                                    <span class="mb-0 text-size-14">Dec 20,2022</span>
                                </div>
                                <div class="button">
                                    <a class="mb-0 read_more text-decoration-none" href="/eye-2/single-blog">Read
                                        More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="blog-box onecolumn-blog float-left w-100 post-item mb-4">
                        <div class="post-item-wrap position-relative">
                            <div class="post-video">
                                <div class="embed-container"><iframe
                                        src="https://player.vimeo.com/video/157467640?background=1"></iframe></div>
                            </div>
                            <div class="lower-portion">
                                <div class="span-i-con">
                                <i class="fa-solid fa-user"></i>
                                <span class="text-size-14 text-mr">By : Admin</span>
                                <i class="tag-mb fa-solid fa-tag"></i>
                                <span class="text-size-14">Virtual Assistant</span>
                                </div>
                                <p class="mb-0 text-size-16">Curabitur pulvinar euismod ante, ac sagittis ante posuere
                                    ac. Vivamus luctus commodo dolor porta feugiat. Fusce at velit id ligula ac sagittis
                                    ante posuere ac pharetra laoreet commodo dolor porta.</p>
                            </div>
                            <div class="button-portion loadone_twocol">
                                <div class="date">
                                    <i class="mb-0 calendar-ml fa-solid fa-calendar-days"></i>
                                    <span class="mb-0 text-size-14">Dec 20,2022</span>
                                </div>
                                <div class="button">
                                    <a class="mb-0 read_more text-decoration-none" href="/eye-2/single-blog">Read
                                        More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="blog-box onecolumn-blog float-left w-100 post-item mb-4">
                        <div class="post-item-wrap position-relative">
                            <div class="post-video">
                                <div class="embed-container"><iframe width="560" height="376"
                                    src="https://www.youtube.com/embed/dA8Smj5tZOQ"></iframe></div>
                            </div>
                            <div class="lower-portion">
                                <div class="span-i-con">
                                <i class="fa-solid fa-user"></i>
                                <span class="text-size-14 text-mr">By : Admin</span>
                                <i class="tag-mb fa-solid fa-tag"></i>
                                <span class="text-size-14">Virtual Assistant</span>
                                </div>
                                <p class="mb-0 text-size-16">Curabitur pulvinar euismod ante, ac sagittis ante posuere
                                    ac. Vivamus luctus commodo dolor porta feugiat. Fusce at velit id ligula ac sagittis
                                    ante posuere ac pharetra laoreet commodo dolor porta.</p>
                            </div>
                            <div class="button-portion loadone_twocol">
                                <div class="date">
                                    <i class="mb-0 calendar-ml fa-solid fa-calendar-days"></i>
                                    <span class="mb-0 text-size-14">Dec 20,2022</span>
                                </div>
                                <div class="button">
                                    <a class="mb-0 read_more text-decoration-none" href="/eye-2/single-blog">Read
                                        More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
