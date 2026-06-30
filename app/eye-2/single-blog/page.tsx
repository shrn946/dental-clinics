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
                                    <li class="nav-item active"><a class="dropdown-item nav-link" href="/eye-2/single-blog">Single Blog</a></li>
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
                        <h1 class="text-white">Single Blog</h1>
                        <p class="text-white text-size-18">Guis nostrud exercitation ullamco laboris nisi aut aliquio modo consenuar irure in reprehenderit esse.</p>
                        <div class="box">
                            <a href="/eye-2" class="text-decoration-none">
                                <span class="mb-0">Home</span>
                            </a>
                            <i class="arrow fa-solid fa-arrow-right"></i>
                            <span class="mb-0 box_span">Single Blog</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
    <!-- Single Blog -->
    <section class="singleblog-section blogpage-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-md-12 col-sm-12 col-12">
                    <div class="main-box">
                        <figure class="image1 mb-3" data-aos="fade-up" data-aos-duration="700">
                            <img src="/eye-2/assets/images/singleblog-image1.jpg" alt="image" class="img-fluid" loading="lazy">
                        </figure>
                        <div class="content1" data-aos="fade-up" data-aos-duration="700">
                            <h4>Why You Need Virtual Assistant for Your Company</h4>
                            <div class="span-fa-outer-con">
                            <i class="fa-solid fa-user"></i>
                            <span class="text-size-14 text-mr">By : Admin</span>
                            <i class="mb-0 calendar fa-solid fa-calendar-days"></i>
                            <span class="mb-0 text-size-14">Dec 20,2022</span>
                            </div>
                            <p class="text-size-16">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit
                                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt
                                mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit
                                voluptatem accusantium doloremque laudantium, totam rem aperiam,
                                eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.</p>
                        </div>
                        <div class="content2" data-aos="fade-up" data-aos-duration="700">
                            <figure class="singleblog-quoteimage">
                                <img src="/eye-2/assets/images/singleblog-quoteimage.png" alt="image" class="img-fluid"
                                    loading="lazy">
                            </figure>
                            <p class="mb-0 text-white text-size-18">“Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum dolore eu fugiat nulla pariatur.xcepteur sint occaecat”</p>
                        </div>
                        <p class="text text-size-16">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                            officia deserunt mollit anim id est laborum.
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                            laudantium, totam rem aperiam, eaque ipsa quae
                            ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                            ipsam voluptatem quia voluptas.
                        </p>
                        <div class="content3" data-aos="fade-up" data-aos-duration="700">
                            <figure class="image1 mb-3" data-aos="fade-up">
                                <img src="/eye-2/assets/images/singleblog-image2.jpg" alt="image" class="img-fluid" loading="lazy">
                            </figure>
                            <p class="text text-size-16">Excepteur sint occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum.
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                laudantium, totam rem aperiam, eaque ipsa quae
                                ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                                enim ipsam voluptatem quia voluptas.
                            </p>
                        </div>
                        <div class="content4" data-aos="fade-up" data-aos-duration="700">
                            <div class="row">
                                <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div class="tag">
                                        <h4>Releted Tags</h4>
                                        <ul class="mb-0 list-unstyled ">
                                            <li><a class="button text-decoration-none" href="/eye-2/about">Assistant</a>
                                            </li>
                                            <li><a class="button button2 text-decoration-none"
                                                    href="/eye-2/about">Advice</a></li>
                                            <li><a class="button button3 text-decoration-none"
                                                    href="/eye-2/about">Virtual</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div class="icon">
                                        <h4>Social Share</h4>
                                        <div class="social-icons position-absolute">
                                            <ul class="mb-0 list-unstyled ">
                                                <li><a href="https://www.linkedin.com/login"
                                                        class="text-decoration-none"><i
                                                            class="fa-brands fa-linkedin-in social-networks"></i></a>
                                                </li>
                                                <li><a href="https://www.instagram.com/"
                                                        class="text-decoration-none"><i
                                                            class="fa-brands fa-instagram social-networks"></i></a></li>
                                                <li><a href="https://www.facebook.com/login/"
                                                        class="text-decoration-none"><i
                                                            class="fa-brands fa-facebook-f social-networks"></i></a>
                                                </li>
                                                <li><a href="https://twitter.com/i/flow/login"
                                                        class="text-decoration-none"><i
                                                            class="fa-brands fa-x-twitter social-networks"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="buttons aos-init aos-animate" data-aos="fade-up">
                            <a href="/eye-2/single-blog" class="prev">
                                <span class="prev-text">Prev</span>
                            </a>
                            <a href="/eye-2/single-blog" class="next">
                                <span class="next-text">Next</span>
                            </a>
                        </div>
                        <div class="content5" data-aos="fade-up" data-aos-duration="700">
                            <figure class="singleblog-review1 mb-0">
                                <img src="/eye-2/assets/images/singleblog-review1.jpg" alt="image" class="img-fluid"
                                    loading="lazy">
                            </figure>
                            <div class="content">
                                <h4>Billy wallson</h4>
                                <span class="text-size-16">Senior Director</span>
                                <p class="text-size-16">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ali,
                                </p>
                            </div>
                        </div>
                        <div class="content6" data-aos="fade-up" data-aos-duration="700">
                            <h4>2 Comments</h4>
                            <div class="comment">
                                <div class="image" data-aos="flip-left"><img alt="image"
                                        src="/eye-2/assets/images/singleblog-review2.jpg" class="avatar" loading="lazy"></div>
                                <div class="content">
                                    <h5>Roseanne Williams</h5>
                                    <span class="text-size-14">Dec 29, 2022</span>
                                    <a class="reply text-decoration-none" href="#">Reply</a>
                                    <div class="text_holder">
                                        <p class="text-size-16">Lorem ipsum dolor sit amet, consectetur adipisicing
                                            elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            Ut enim ad minim veniam, quis nostrud exercitation.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="comment">
                                <div class="image" data-aos="flip-left"><img alt="image"
                                        src="/eye-2/assets/images/singleblog-review3.jpg" class="avatar" loading="lazy"></div>
                                <div class="content">
                                    <h5>Samantha Nicolan</h5>
                                    <span class="text-size-14">Dec 29, 2022</span>
                                    <a class="reply text-decoration-none" href="#">Reply</a>
                                    <div class="text_holder">
                                        <p class="text-size-16">Lorem ipsum dolor sit amet, consectetur adipisicing
                                            elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            Ut enim ad minim veniam, quis nostrud exercitation.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="content7" data-aos="fade-up" data-aos-duration="700">
                            <h4>Leave a Comment</h4>
                            <form id="blogpage" method="POST">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="form-group mb-0">
                                            <textarea class="form_style" placeholder="Enter your comment here..."
                                                rows="3" name="msg"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div class="form-group mb-0">
                                            <input type="text" class="form_style" placeholder="Your name" name="name">
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div class="form-group mb-0">
                                            <input type="email" class="form_style" placeholder="Your e-mail"
                                                name="emailid">
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-12">
                                        <div class="form-group mb-0">
                                            <input type="text" class="form_style text-mb" placeholder="Your topic"
                                                name="topic">
                                        </div>
                                    </div>
                                </div>
                                <div class="button text-center">
                                    <button type="submit" class="post_comment">Post Comment</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-12 col-sm-12 col-12 column">
                    <div class="box1" data-aos="fade-up" data-aos-duration="700">
                        <h4>Search News</h4>
                        <form method="POST">
                            <div class="form-row">
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <input type="text" name="search" id="searchblog" class="form-control upper_layer"
                                        placeholder="Search Here...">
                                    <div class="input-group-append form-button">
                                        <button class="btn search" name="btnsearch" id="searchbtn"><i
                                                class="fa-solid fa-magnifying-glass"></i></button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="box1 box2" data-aos="fade-up" data-aos-duration="700">
                        <h4>Popular Category</h4>
                        <ul class="list-unstyled mb-0">
                            <li class="text-size-16"><a href="/eye-2/three-colum-sidbar">Digital business</a></li>
                            <li class="text-size-16"><a href="/eye-2/three-colum-sidbar">Business Consulting</a></li>
                            <li class="text-size-16"><a href="/eye-2/three-colum-sidbar">Consulting</a></li>
                            <li class="mb-0 text-size-16"><a href="/eye-2/three-colum-sidbar">Business & Finance</a></li>
                        </ul>
                    </div>
                    <div class="box1 box3" data-aos="fade-up" data-aos-duration="700">
                        <h4>Follow Us</h4>
                        <div class="social-icons">
                            <ul class="mb-0 list-unstyled ">
                                <li><a href="https://www.linkedin.com/login" class="text-decoration-none"><i
                                            class="fa-brands fa-linkedin-in social-networks"></i></a>
                                </li>
                                <li><a href="https://www.instagram.com/"
                                        class="text-decoration-none"><i
                                            class="fa-brands fa-instagram social-networks"></i></a></li>
                                <li><a href="https://www.facebook.com/login/" class="text-decoration-none"><i
                                            class="fa-brands fa-facebook-f social-networks"></i></a>
                                </li>
                                <li><a href="https://twitter.com/"
                                        class="text-decoration-none"><i
                                            class="fa-brands fa-x-twitter social-networks"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="box1 box4" data-aos="fade-up" data-aos-duration="700">
                        <h4>Tags</h4>
                        <ul class="tag mb-0 list-unstyled">
                            <li><a class="button text-decoration-none" href="/eye-2/about">Assistant</a></li>
                            <li><a class="button button2 text-decoration-none" href="/eye-2/about">Advice</a></li>
                            <li><a class="button button3 text-decoration-none" href="/eye-2/about">Virtual</a></li>
                            <li><a class="button button4 text-decoration-none" href="/eye-2/about">Designer</a></li>
                            <li><a class="button button5 text-decoration-none" href="/eye-2/about">Blog</a></li>
                            <li><a class="button button6 text-decoration-none" href="/eye-2/about">Support</a></li>
                            <li><a class="button button7 text-decoration-none" href="/eye-2/about">Finance</a></li>
                            <li><a class="button button8 text-decoration-none" href="/eye-2/about">Projects</a></li>
                        </ul>
                    </div>
                    <div class="box1 box5" data-aos="fade-up" data-aos-duration="700">
                        <h4>Feeds</h4>
                        <div class="feed">
                            <figure class="feed-image mb-0">
                                <img src="/eye-2/assets/images/singleblog-feed1.jpg" alt="image" class="img-fluid" loading="lazy">
                            </figure>
                            <a href="/eye-2/six-colum-full-wide" class="mb-0">Why You Need Virtual Assistant for Your
                                Company</a>
                        </div>
                        <div class="feed">
                            <figure class="feed-image mb-0">
                                <img src="/eye-2/assets/images/singleblog-feed2.jpg" alt="image" class="img-fluid" loading="lazy">
                            </figure>
                            <a href="/eye-2/six-colum-full-wide" class="mb-0">Why You Need Virtual Assistant for Your
                                Company</a>
                        </div>
                        <div class="feed">
                            <figure class="feed-image mb-0">
                                <img src="/eye-2/assets/images/singleblog-feed3.jpg" alt="image" class="img-fluid" loading="lazy">
                            </figure>
                            <a href="/eye-2/six-colum-full-wide" class="mb-0">Why You Need Virtual Assistant for Your
                                Company</a>
                        </div>
                        <div class="feed feed4">
                            <figure class="feed-image mb-0">
                                <img src="/eye-2/assets/images/singleblog-feed4.jpg" alt="image" class="img-fluid" loading="lazy">
                            </figure>
                            <a href="/eye-2/six-colum-full-wide" class="mb-0">Why You Need Virtual Assistant for Your
                                Company</a>
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
