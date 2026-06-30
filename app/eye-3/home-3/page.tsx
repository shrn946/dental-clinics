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


    <div class="boxed_wrapper">


        <!-- preloader -->
        <div class="loader-wrap">
            <div class="preloader">
                <div class="preloader-close">x</div>
                <div id="handle-preloader" class="handle-preloader">
                    <div class="animation-preloader">
                        <div class="spinner"></div>
                        <div class="txt-loading">
                            <span data-text-preloader="o" class="letters-loading">
                                o
                            </span>
                            <span data-text-preloader="p" class="letters-loading">
                                p
                            </span>
                            <span data-text-preloader="t" class="letters-loading">
                                t
                            </span>
                            <span data-text-preloader="c" class="letters-loading">
                                c
                            </span>
                            <span data-text-preloader="a" class="letters-loading">
                                a
                            </span>
                            <span data-text-preloader="r" class="letters-loading">
                                r
                            </span>
                            <span data-text-preloader="e" class="letters-loading">
                                e
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- preloader end -->        <!-- main header -->
        <header class="main-header header-style-two">
            <!-- header-top -->
            <div class="header-top">
                <div class="auto-container">
                    <div class="top-inner">
                        <div class="left-column">
                            <ul class="info clearfix">
                                <li><i class="icon-1"></i>Email: <a href="mailto:sample@example.com">sample@example.com</a></li>
                                <li><i class="icon-2"></i>380 Albert St, Melborne</li>
                                <li><i class="icon-3"></i>Call: <a href="tel:123045615523">+1 (230)-456-155-23</a></li>
                            </ul>
                        </div>
                        <div class="right-column">
                            <div class="schedule"><i class="icon-4"></i>Sun-Thu 08:00AM-05:00PM</div>
                            <ul class="social-links clearfix">
                                <li><a href="/eye-3/home-2"><i class="fab fa-facebook-f"></i></a></li>
                                <li><a href="/eye-3/home-2"><i class="fab fa-twitter"></i></a></li>
                                <li><a href="/eye-3/home-2"><i class="fab fa-linkedin-in"></i></a></li>
                                <li><a href="/eye-3/home-2"><i class="fab fa-pinterest-p"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <!-- header-lower -->
            <div class="header-lower">
                <div class="auto-container">
                    <div class="outer-box">
                        <div class="logo-box">
                            <figure class="logo"><a href="/eye-3/home-2"><img src="/eye-3/assets/images/logo.png" alt=""></a></figure>
                        </div>
                        <div class="menu-area clearfix">
                            <!--Mobile Navigation Toggler-->
                            <div class="mobile-nav-toggler">
                                <i class="icon-bar"></i>
                                <i class="icon-bar"></i>
                                <i class="icon-bar"></i>
                            </div>
                            <nav class="main-menu navbar-expand-md navbar-light">
                                <div class="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                    <ul class="navigation clearfix">
	<li class="dropdown"><a href="/eye-3/home-2">Home</a>
		<ul>
			<li><a href="/eye-3/home-2">Home Page 01</a></li>
			<li><a href="/eye-3/home-3">Home Page 02</a></li>
			<li><a href="/eye-3/home-4">Home Page 03</a></li>
		</ul>
	</li>
	<li><a href="/eye-3/about">About Us</a></li>
	<li class="dropdown"><a href="/eye-3/home-2">Treatments</a>
		<ul>
			<li><a href="/eye-3/treatment">Treatment 1</a></li>
			<li><a href="/eye-3/treatment-2">Treatment 2</a></li>
			<li><a href="/eye-3/surgical-procedures">Surgical Procedures</a></li>
			<li><a href="/eye-3/paeditaric-ophthalmology">Paeditaric Ophthalmology</a></li>
			<li><a href="/eye-3/lenses-transitions">Lenses Transitions</a></li>
			<li><a href="/eye-3/laser-surgery">Laser Eye Surgery</a></li>
			<li><a href="/eye-3/vision-correction">Vision Correction</a></li>
			<li><a href="/eye-3/contact-lens">Contact Lens</a></li>
			<li><a href="/eye-3/diabetic-retinopathy">Diabetic Retinopathy</a></li>
		</ul>
	</li>
	<li class="dropdown"><a href="/eye-3/home-2">Pages</a>
		<ul>
			<li class="dropdown"><a href="/eye-3/home-2">Doctors</a>
				<ul>
					<li><a href="/eye-3/team">Doctors 3 Column</a></li>
					<li><a href="/eye-3/team-2">Doctors 4 Column</a></li>
					<li><a href="/eye-3/team-details">Doctor Single</a></li>
				</ul>
			</li>
			<li class="dropdown"><a href="/eye-3/home-2">Portfolio</a>
				<ul>
					<li><a href="/eye-3/portfolio">Portfolio 1</a></li>
					<li><a href="/eye-3/portfolio-2">Portfolio 2</a></li>
				</ul>
			</li>
			<li class="dropdown"><a href="/eye-3/home-2">Shop</a>
				<ul>
					<li><a href="/eye-3/shop">Our Shop</a></li>
					<li><a href="/eye-3/shop-details">Shop Details</a></li>
					<li><a href="/eye-3/cart">Cart page</a></li>
					<li><a href="/eye-3/checkout">Checkout</a></li>
				</ul>
			</li>
			<li><a href="/eye-3/testimonial">Testimonials</a></li>
			<li><a href="/eye-3/faq">Faq’s</a></li>
			<li><a href="/eye-3/appointment">Book Appointment</a></li>
			<li><a href="/eye-3/404-page">404</a></li>
		</ul>
	</li>
	<li class="dropdown"><a href="/eye-3/home-2">Elements</a>
		<div class="megamenu">
			<div class="row clearfix">
				<div class="col-lg-4 column">
					<ul>
						<li>
							<h4>Elements 1</h4>
						</li>
						<li><a href="/eye-3/about-element-1">About Block 01</a></li>
						<li><a href="/eye-3/about-element-2">About Block 02</a></li>
						<li><a href="/eye-3/about-element-3">About Block 03</a></li>
						<li><a href="/eye-3/feature-element-1">Feature Block 01</a></li>
						<li><a href="/eye-3/feature-element-2">Feature Block 02</a></li>
						<li><a href="/eye-3/feature-element-3">Feature Block 03</a></li>
						<li><a href="/eye-3/feature-element-4">Feature Block 04</a></li>
						<li><a href="/eye-3/service-element-1">Service Block 01</a></li>
					</ul>
				</div>
				<div class="col-lg-4 column">
					<ul>
						<li>
							<h4>Elements 2</h4>
						</li>
						<li><a href="/eye-3/service-element-2">Service Block 02</a></li>
						<li><a href="/eye-3/service-element-3">Service Block 03</a></li>
						<li><a href="/eye-3/service-element-4">Service Block 04</a></li>
						<li><a href="/eye-3/team-element-1">Team Block 01</a></li>
						<li><a href="/eye-3/team-element-2">Team Block 02</a></li>
						<li><a href="/eye-3/team-element-3">Team Block 03</a></li>
						<li><a href="/eye-3/team-element-4">Team Block 04</a></li>
						<li><a href="/eye-3/news-element-1">News Block 01</a></li>
					</ul>
				</div>
				<div class="col-lg-4 column">
					<ul>
						<li>
							<h4>Elements 3</h4>
						</li>
						<li><a href="/eye-3/news-element-2">News Block 02</a></li>
						<li><a href="/eye-3/working-element-1">Working Block 01</a></li>
						<li><a href="/eye-3/working-element-2">Working Block 02</a></li>
						<li><a href="/eye-3/chooseus-element-1">Chooseus Block 01</a></li>
						<li><a href="/eye-3/chooseus-element-2">Chooseus Block 02</a></li>
						<li><a href="/eye-3/funfact-element">Funfact Block</a></li>
						<li><a href="/eye-3/cta-element">Cta Block</a></li>
						<li><a href="/eye-3/testimonial-element">Testimonial Block</a></li>
					</ul>
				</div>
			</div>
		</div>
	</li>
	<li class="dropdown"><a href="/eye-3/home-2">Blog</a>
		<ul>
			<li><a href="/eye-3/blog">Blog Grid</a></li>
			<li><a href="/eye-3/blog-2">Blog Standard</a></li>
			<li><a href="/eye-3/blog-details">Blog Details</a></li>
		</ul>
	</li>
	<li><a href="/eye-3/contact">Contact</a></li>
</ul>                                </div>
                            </nav>
                        </div>
                        <div class="nav-right">
                            <div class="search-box-outer search-toggler">
                                <i class="icon-5"></i>
                            </div>
                            <div class="btn-box">
                                <a href="/eye-3/home-2" class="theme-btn btn-one">Appointment</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!--sticky Header-->
            <div class="sticky-header">
                <div class="auto-container">
                    <div class="outer-box">
                        <div class="logo-box">
                            <figure class="logo"><a href="/eye-3/home-2"><img src="/eye-3/assets/images/logo.png" alt=""></a></figure>
                        </div>
                        <div class="menu-area clearfix">
                            <nav class="main-menu clearfix">
                                <!--Keep This Empty / Menu will come through Javascript-->
                            </nav>
                        </div>
                        <div class="nav-right">
                            <div class="search-box-outer search-toggler">
                                <i class="icon-5"></i>
                            </div>
                            <div class="btn-box">
                                <a href="/eye-3/home-2" class="theme-btn btn-one">Appointment</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <!-- main-header end -->


        <!-- banner-section -->
        <section class="banner-style-two centred p_relative">
          <div class="banner-carousel owl-theme owl-carousel owl-dots-none">
            <div class="slide-item p_relative">
              <div class="image-layer p_absolute" style="background-image:url('/eye-3/assets/images/banner/banner-1.jpg)"></div>
              <div class="pattern-layer">
                <div class="pattern-1" style="background-image: url('/eye-3/assets/images/shape/shape-3.png);"></div>
                <div class="pattern-2" style="background-image: url('/eye-3/assets/images/shape/shape-12.png);"></div>
                <div class="pattern-3" style="background-image: url('/eye-3/assets/images/shape/shape-13.png);"></div>
                <div class="eye-icon rotate-me" style="background-image: url('/eye-3/assets/images/icons/icon-1.png);"></div>
              </div>
              <div class="auto-container">
                <div class="content-box">
                  <span class="big-title animation_text_word"></span>
                  <h3>Eye Care & Holistic Health Center</h3>
                  <h2>Eye Care & Holistic Health Center</h2>
                  <p>We solve all your eye care needs by providing personalized and holistic eye care for you and your family!</p>
                  <div class="btn-box">
                    <a href="/eye-3/contact" class="theme-btn btn-one">Contact Now</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="slide-item p_relative">
              <div class="image-layer p_absolute" style="background-image:url('/eye-3/assets/images/banner/banner-2.jpg)"></div>
              <div class="pattern-layer">
                <div class="pattern-1" style="background-image: url('/eye-3/assets/images/shape/shape-3.png);"></div>
                <div class="pattern-2" style="background-image: url('/eye-3/assets/images/shape/shape-12.png);"></div>
                <div class="pattern-3" style="background-image: url('/eye-3/assets/images/shape/shape-13.png);"></div>
                <div class="eye-icon rotate-me" style="background-image: url('/eye-3/assets/images/icons/icon-1.png);"></div>
              </div>
              <div class="auto-container">
                <div class="content-box">
                  <span class="big-title animation_text_word"></span>
                  <h3>Eye Care & Holistic Health Center</h3>
                  <h2>Eye Care & Holistic Health Center</h2>
                  <p>We solve all your eye care needs by providing personalized and holistic eye care for you and your family!</p>
                  <div class="btn-box">
                    <a href="/eye-3/contact" class="theme-btn btn-one">Contact Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- banner-section end -->        <!-- feature-style-two -->
        <section class="feature-style-two p_relative pt_100 pb_100">
          <div class="pattern-layer">
            <div class="pattern-1" style="background-image: url('/eye-3/assets/images/shape/shape-14.png);"></div>
            <div class="pattern-2" style="background-image: url('/eye-3/assets/images/shape/shape-15.png);"></div>
          </div>
          <div class="auto-container">
            <div class="row clearfix">
              <div class="col-lg-3 col-md-6 col-sm-12 feature-block">
                <div class="feature-block-two wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500m">
                  <div class="inner-box">
                    <div class="icon-box"><i class="icon-12"></i></div>
                    <h3><a href="/eye-3/home-3">Qualified Doctors</a></h3>
                    <p>Lorem ipsum dolor sit elit con sectur sed eiusmod tempor labore aliqua.</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-12 feature-block">
                <div class="feature-block-two wow fadeInUp animated" data-wow-delay="200ms" data-wow-duration="1500m">
                  <div class="inner-box">
                    <div class="icon-box"><i class="icon-13"></i></div>
                    <h3><a href="/eye-3/home-3">Modern Equipment</a></h3>
                    <p>Lorem ipsum dolor sit elit con sectur sed eiusmod tempor labore aliqua.</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-12 feature-block">
                <div class="feature-block-two wow fadeInUp animated" data-wow-delay="400ms" data-wow-duration="1500m">
                  <div class="inner-box">
                    <div class="icon-box"><i class="icon-14"></i></div>
                    <h3><a href="/eye-3/home-3">Emergency Help</a></h3>
                    <p>Lorem ipsum dolor sit elit con sectur sed eiusmod tempor labore aliqua.</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-12 feature-block">
                <div class="feature-block-two wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500m">
                  <div class="inner-box">
                    <div class="icon-box"><i class="icon-15"></i></div>
                    <h3><a href="/eye-3/home-3">Individual Approach</a></h3>
                    <p>Lorem ipsum dolor sit elit con sectur sed eiusmod tempor labore aliqua.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- feature-style-two end -->        <!-- about-style-two -->
        <section class="about-style-two p_relative">
          <div class="auto-container">
            <div class="row clearfix">
              <div class="col-lg-6 col-md-12 col-sm-12 content-column">
                <div class="content_block_four">
                  <div class="content-box mt_15">
                    <div class="sec-title mb_25">
                      <span class="sub-title">Who We Are?</span>
                      <h2>The Great Place Of Eyecare Hospital Center</h2>
                    </div>
                    <div class="text">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nost rud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat.</p>
                    </div>
                    <div class="inner-box p_relative mb_40">
                      <div class="single-item">
                        <div class="icon-box"><i class="icon-8"></i></div>
                        <h3>Our Patients <br />Vision</h3>
                      </div>
                      <div class="single-item">
                        <div class="icon-box"><i class="icon-10"></i></div>
                        <h3>Trusted Eye <br />Doctor</h3>
                      </div>
                    </div>
                    <div class="btn-box">
                      <a href="/eye-3/team" class="theme-btn btn-one">View All Team</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-12 col-sm-12 image-column">
                <div class="image_block_three">
                  <div class="image-box ml_13 pr_20 pl_60">
                    <div class="shape">
                      <div class="shape-1" style="background-image: url('/eye-3/assets/images/shape/shape-16.png);"></div>
                      <div class="shape-2" style="background-image: url('/eye-3/assets/images/shape/shape-16.png);"></div>
                    </div>
                    <figure class="image"><img src="/eye-3/assets/images/resource/about-1.png" alt=""></figure>
                    <div class="text p_absolute l_0 b_40">
                      <h2>30</h2>
                      <h4>Years of Experience in This Field</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- about-style-two end -->        <!-- service-style-two -->
        <section class="service-style-two p_relative">
          <div class="pattern-layer">
            <div class="pattern-1 p_absolute l_20 b_20" style="background-image: url('/eye-3/assets/images/shape/shape-18.png);"></div>
            <div class="pattern-2 p_absolute t_20 r_20" style="background-image: url('/eye-3/assets/images/shape/shape-19.png);"></div>
          </div>
          <div class="auto-container">
            <div class="sec-title centred mb_50">
              <span class="sub-title">Our Services</span>
              <h2>A Global Leader, Treatment <br />of eye Disease</h2>
            </div>
            <div class="row clearfix">
              <div class="col-lg-4 col-md-6 col-sm-12 service-block">
                <div class="service-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                  <div class="inner-box">
                    <figure class="image-box">
                      <img src="/eye-3/assets/images/service/service-2.jpg" alt="">
                      <a href="/eye-3/surgical-procedures"><i class="fas fa-link"></i></a>
                    </figure>
                    <div class="lower-content">
                      <div class="icon-box"><i class="icon-17"></i></div>
                      <h3><a href="/eye-3/surgical-procedures">Surgical Procedures</a></h3>
                      <p class="p_relative d_block">Lorem ipsum dolor amet consectur tempor adicing elit sed do usmod tempor incidunt enim minim veniam.</p>
                      <div class="link p_relative d_block"><a href="/eye-3/surgical-procedures">Read More</a></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-12 service-block">
                <div class="service-block-one wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                  <div class="inner-box">
                    <figure class="image-box">
                      <img src="/eye-3/assets/images/service/service-3.jpg" alt="">
                      <a href="/eye-3/paeditaric-ophthalmology"><i class="fas fa-link"></i></a>
                    </figure>
                    <div class="lower-content">
                      <div class="icon-box"><i class="icon-18"></i></div>
                      <h3><a href="/eye-3/paeditaric-ophthalmology">Paeditaric Ophthalmology</a></h3>
                      <p class="p_relative d_block">Lorem ipsum dolor amet consectur tempor adicing elit sed do usmod tempor incidunt enim minim veniam.</p>
                      <div class="link p_relative d_block"><a href="/eye-3/paeditaric-ophthalmology">Read More</a></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-12 service-block">
                <div class="service-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                  <div class="inner-box">
                    <figure class="image-box">
                      <img src="/eye-3/assets/images/service/service-4.jpg" alt="">
                      <a href="/eye-3/lenses-transitions"><i class="fas fa-link"></i></a>
                    </figure>
                    <div class="lower-content">
                      <div class="icon-box"><i class="icon-19"></i></div>
                      <h3><a href="/eye-3/lenses-transitions">Lenses Transitions</a></h3>
                      <p class="p_relative d_block">Lorem ipsum dolor amet consectur tempor adicing elit sed do usmod tempor incidunt enim minim veniam.</p>
                      <div class="link p_relative d_block"><a href="/eye-3/lenses-transitions">Read More</a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- service-style-two end -->        <!-- chooseus-style-two -->
        <section class="chooseus-style-two p_relative">
          <div class="shape p_absolute t_0 r_0" style="background-image: url('/eye-3/assets/images/shape/shape-20.png);"></div>
          <div class="shape-2" style="background-image: url('/eye-3/assets/images/shape/shape-21.png);"></div>
          <div class="video-column" style="background-image: url('/eye-3/assets/images/background/video-bg-2.jpg);">
            <div class="video-inner">
              <div class="video-btn">
                <a href="https://www.youtube.com/watch?v=nfP5N9Yc72A&amp;t=28s" class="lightbox-image" data-caption=""><i class="fas fa-play"></i></a>
              </div>
            </div>
          </div>
          <div class="auto-container">
            <div class="row clearfix">
              <div class="col-lg-6 col-md-12 col-sm-12 offset-lg-6">
                <div class="content_block_five">
                  <div class="content-box ml_70">
                    <div class="sec-title light mb_35">
                      <span class="sub-title">Why Choose</span>
                      <h2 class="mb_25">Great Reasons For People Choose Optcare</h2>
                      <p class="pt_2">Lorem ipsum dolor sit amet consectur adipicing elit sed do esmod tempor incididunt labore aliqua.</p>
                    </div>
                    <div class="inner-box">
                      <div class="row clearfix">
                        <div class="col-lg-6 col-md-6 col-sm-12 single-column">
                          <div class="single-item p_relative d_block">
                            <h4><a href="/eye-3/home-3">Quality Staff</a></h4>
                            <p>Lorem ipsum dolor amet conad sed do usmod tempor.</p>
                          </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-12 single-column">
                          <div class="single-item p_relative d_block">
                            <h4><a href="/eye-3/home-3">Quality Assistance</a></h4>
                            <p>Lorem ipsum dolor amet conad sed do usmod tempor.</p>
                          </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-12 single-column">
                          <div class="single-item p_relative d_block">
                            <h4><a href="/eye-3/home-3">Affordable Price</a></h4>
                            <p>Lorem ipsum dolor amet conad sed do usmod tempor.</p>
                          </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-12 single-column">
                          <div class="single-item p_relative d_block">
                            <h4><a href="/eye-3/home-3">Optimized Solutions</a></h4>
                            <p>Lorem ipsum dolor amet conad sed do usmod tempor.</p>
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
        <!-- chooseus-style-two end -->        <!-- funfact-style-two -->
        <section class="funfact-style-two p_relative">
          <div class="auto-container">
            <div class="inner-container bg-color-2 p_relative">
              <div class="counter-block-one wow slideInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                <div class="inner-box">
                  <div class="icon-box p_relative d_block fs_60"><i class="icon-25"></i></div>
                  <div class="count-outer count-box">
                    <span class="count-text" data-speed="1500" data-stop="90">0</span>
                  </div>
                  <p>Expert Doctors</p>
                </div>
              </div>
              <div class="counter-block-one wow slideInUp animated" data-wow-delay="200ms" data-wow-duration="1500ms">
                <div class="inner-box">
                  <div class="icon-box p_relative d_block fs_60"><i class="icon-26"></i></div>
                  <div class="count-outer count-box">
                    <span class="count-text" data-speed="1500" data-stop="2.6">0</span>
                  </div>
                  <p>Diffrent Services</p>
                </div>
              </div>
              <div class="counter-block-one wow slideInUp animated" data-wow-delay="400ms" data-wow-duration="1500ms">
                <div class="inner-box">
                  <div class="icon-box p_relative d_block fs_60"><i class="icon-27"></i></div>
                  <div class="count-outer count-box">
                    <span class="count-text" data-speed="1500" data-stop="35">0</span>
                  </div>
                  <p>Happy Patients</p>
                </div>
              </div>
              <div class="counter-block-one wow slideInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                <div class="inner-box">
                  <div class="icon-box p_relative d_block fs_60"><i class="icon-28"></i></div>
                  <div class="count-outer count-box">
                    <span class="count-text" data-speed="1500" data-stop="10">0</span>
                  </div>
                  <p>Awards Win</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- funfact-style-two end -->        <!-- team-style-two -->
        <section class="team-style-two">
          <div class="auto-container">
            <div class="sec-title centred mb_60">
              <span class="sub-title">Ophthalmologist</span>
              <h2>The Most Qualified Skillful & <br />Professional staff</h2>
            </div>
            <div class="row clearfix">
              <div class="col-lg-3 col-md-6 col-sm-12 team-block">
                <div class="team-block-two wow fadeInUp animated animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                  <div class="inner-box">
                    <figure class="image-box"><img src="/eye-3/assets/images/team/team-4.jpg" alt=""></figure>
                    <div class="lower-content p_relative d_block">
                      <div class="share-box p_absolute">
                        <a href="/eye-3/home-2" class="share-icon fs_14 d_iblock"><i class="icon-37"></i></a>
                        <ul class="share-links p_absolute clearfix">
                          <li><a href="/eye-3/home-2"><i class="fab fa-facebook-f"></i></a></li>
                          <li><a href="/eye-3/home-2"><i class="fab fa-twitter"></i></a></li>
                          <li><a href="/eye-3/home-2"><i class="fab fa-google-plus-g"></i></a></li>
                        </ul>
                      </div>
                      <h3><a href="/eye-3/team-details">Catherine Denuve</a></h3>
                      <span class="designation">Optegra eye</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-12 team-block">
                <div class="team-block-two wow fadeInUp animated animated" data-wow-delay="200ms" data-wow-duration="1500ms">
                  <div class="inner-box">
                    <figure class="image-box"><img src="/eye-3/assets/images/team/team-5.jpg" alt=""></figure>
                    <div class="lower-content p_relative d_block">
                      <div class="share-box p_absolute">
                        <a href="/eye-3/home-2" class="share-icon fs_14 d_iblock"><i class="icon-37"></i></a>
                        <ul class="share-links p_absolute clearfix">
                          <li><a href="/eye-3/home-2"><i class="fab fa-facebook-f"></i></a></li>
                          <li><a href="/eye-3/home-2"><i class="fab fa-twitter"></i></a></li>
                          <li><a href="/eye-3/home-2"><i class="fab fa-google-plus-g"></i></a></li>
                        </ul>
                      </div>
                      <h3><a href="/eye-3/team-details">Laurence Olivier</a></h3>
                      <span class="designation">Lens replacement</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-12 team-block">
                <div class="team-block-two wow fadeInUp animated animated" data-wow-delay="400ms" data-wow-duration="1500ms">
                  <div class="inner-box">
                    <figure class="image-box"><img src="/eye-3/assets/images/team/team-6.jpg" alt=""></figure>
                    <div class="lower-content p_relative d_block">
                      <div class="share-box p_absolute">
                        <a href="/eye-3/home-2" class="share-icon fs_14 d_iblock"><i class="icon-37"></i></a>
                        <ul class="share-links p_absolute clearfix">
                          <li><a href="/eye-3/home-2"><i class="fab fa-facebook-f"></i></a></li>
                          <li><a href="/eye-3/home-2"><i class="fab fa-twitter"></i></a></li>
                          <li><a href="/eye-3/home-2"><i class="fab fa-google-plus-g"></i></a></li>
                        </ul>
                      </div>
                      <h3><a href="/eye-3/team-details">Susan Hopkins</a></h3>
                      <span class="designation">Cataract surgery</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-12 team-block">
                <div class="team-block-two wow fadeInUp animated animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                  <div class="inner-box">
                    <figure class="image-box"><img src="/eye-3/assets/images/team/team-7.jpg" alt=""></figure>
                    <div class="lower-content p_relative d_block">
                      <div class="share-box p_absolute">
                        <a href="/eye-3/home-2" class="share-icon fs_14 d_iblock"><i class="icon-37"></i></a>
                        <ul class="share-links p_absolute clearfix">
                          <li><a href="/eye-3/home-2"><i class="fab fa-facebook-f"></i></a></li>
                          <li><a href="/eye-3/home-2"><i class="fab fa-twitter"></i></a></li>
                          <li><a href="/eye-3/home-2"><i class="fab fa-google-plus-g"></i></a></li>
                        </ul>
                      </div>
                      <h3><a href="/eye-3/team-details">Keanu Reeves</a></h3>
                      <span class="designation">Clarivu eye</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="more-btn centred mt_60">
              <a href="/eye-3/team-2" class="theme-btn btn-one">View All Team</a>
            </div>
          </div>
        </section>
        <!-- team-style-two end -->        <!-- testimonial-style-two -->
        <section class="testimonial-style-two pt_100">
          <div class="bg-layer" style="background-image: url('/eye-3/assets/images/background/testimonial-bg.jpg);"></div>
          <div class="pattern-layer">
            <div class="pattern-1" style="background-image: url('/eye-3/assets/images/shape/shape-22.png);"></div>
            <div class="pattern-2" style="background-image: url('/eye-3/assets/images/shape/shape-23.png);"></div>
          </div>
          <div class="auto-container">
            <div class="row clearfix">
              <div class="col-xl-6 col-lg-12 col-md-12 content-column">
                <div class="content_block_six">
                  <div class="content-box p_relative z_2">
                    <div class="sec-title p_relative mb_35">
                      <span class="sub-title">Testimonial</span>
                      <h2>What Our Client Say About Optcare</h2>
                    </div>
                    <div class="single-item-carousel owl-carousel owl-theme owl-nav-none dots-style-one">
                      <div class="testimonial-content">
                        <div class="text p_relative d_block">
                          <p>“Adipisicing elit sed do eiusmodim tempor incid labore etax dolore magna aliqua enim minium quis veniam nostrud exer cition ulamco laboris nisar aliquip commodo consequat aute irure dolor in reprehenderit in voluptate”.</p>
                        </div>
                        <div class="author-box">
                          <figure class="author-thumb"><img src="/eye-3/assets/images/resource/testimonial-1.jpg" alt=""></figure>
                          <h3>Rachel McAdams</h3>
                          <span class="designation">Electrician</span>
                        </div>
                      </div>
                      <div class="testimonial-content">
                        <div class="text p_relative d_block">
                          <p>“Adipisicing elit sed do eiusmodim tempor incid labore etax dolore magna aliqua enim minium quis veniam nostrud exer cition ulamco laboris nisar aliquip commodo consequat aute irure dolor in reprehenderit in voluptate”.</p>
                        </div>
                        <div class="author-box">
                          <figure class="author-thumb"><img src="/eye-3/assets/images/resource/testimonial-1.jpg" alt=""></figure>
                          <h3>Rachel McAdams</h3>
                          <span class="designation">Electrician</span>
                        </div>
                      </div>
                      <div class="testimonial-content">
                        <div class="text p_relative d_block">
                          <p>“Adipisicing elit sed do eiusmodim tempor incid labore etax dolore magna aliqua enim minium quis veniam nostrud exer cition ulamco laboris nisar aliquip commodo consequat aute irure dolor in reprehenderit in voluptate”.</p>
                        </div>
                        <div class="author-box">
                          <figure class="author-thumb"><img src="/eye-3/assets/images/resource/testimonial-1.jpg" alt=""></figure>
                          <h3>Rachel McAdams</h3>
                          <span class="designation">Electrician</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- testimonial-style-two end -->        <!-- process-section -->
        <section class="process-section p_relative centred">
          <div class="pattern-layer">
            <div class="pattern-1 rotate-me" style="background-image: url('/eye-3/assets/images/icons/icon-1.png);"></div>
            <div class="pattern-2" style="background-image: url('/eye-3/assets/images/shape/shape-25.png);"></div>
          </div>
          <div class="auto-container">
            <div class="sec-title centred mb_85">
              <span class="sub-title">How It Works</span>
              <h2>How it Helps You to <br />Keep Healthy</h2>
            </div>
            <div class="inner-container p_relative">
              <div class="shape" style="background-image: url('/eye-3/assets/images/shape/shape-24.png);"></div>
              <div class="row clearfix">
                <div class="col-lg-4 col-md-6 col-sm-12 processing-block">
                  <div class="process-block-one">
                    <div class="inner-box">
                      <div class="image-box">
                        <span class="count-text">01</span>
                        <figure class="image"><img src="/eye-3/assets/images/resource/process-1.png" alt=""></figure>
                      </div>
                      <h3>Get Appointment</h3>
                      <p>Book & pay online. We’ll match you with a trusted house cleaner</p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 processing-block">
                  <div class="process-block-one">
                    <div class="inner-box">
                      <div class="image-box">
                        <span class="count-text">02</span>
                        <figure class="image"><img src="/eye-3/assets/images/resource/process-2.png" alt=""></figure>
                      </div>
                      <h3>Start Check-Up</h3>
                      <p>Every cleaner is friendly and reliable.They have been experts</p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 processing-block">
                  <div class="process-block-one">
                    <div class="inner-box">
                      <div class="image-box">
                        <span class="count-text">03</span>
                        <figure class="image"><img src="/eye-3/assets/images/resource/process-3.png" alt=""></figure>
                      </div>
                      <h3>Enjoy Healthy Life</h3>
                      <p>Quisqu tell us risus adpis viera bibe um urna.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- process-section end --><!-- skills-section -->
<section class="skills-section p_relative">
  <div class="pattern-layer">
    <div class="pattern-1" style="background-image: url('/eye-3/assets/images/shape/shape-27.png);"></div>
    <div class="pattern-2" style="background-image: url('/eye-3/assets/images/shape/shape-28.png);"></div>
  </div>
  <div class="auto-container">
    <div class="row clearfix">
      <div class="col-lg-6 col-md-12 col-sm-12 image-column">
        <div class="image_block_four">
          <div class="image-box mr_70 pb_100">
            <div class="shape" style="background-image: url('/eye-3/assets/images/shape/shape-26.png);"></div>
            <div class="icon-box rotate-me"><img src="/eye-3/assets/images/icons/icon-1.png" alt=""></div>
            <figure class="image image-1"><img src="/eye-3/assets/images/resource/about-2.jpg" alt=""></figure>
            <figure class="image image-2"><img src="/eye-3/assets/images/resource/about-3.jpg" alt=""></figure>
          </div>
        </div>
      </div>
      <div class="col-lg-6 col-md-12 col-sm-12 content-column">
        <div class="content_block_seven">
          <div class="content-box ml_30">
            <div class="sec-title mb_30">
              <span class="sub-title">Ophthmologist</span>
              <h2 class="mb_15">Eye Care Service Skills For Child and Adults</h2>
              <p class="pt_12">Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt labore aliqua.</p>
            </div>
            <div class="progress-box">
              <div class="progress-box p_relative d_block mb_25">
                <h5>Dedicated Team</h5>
                <div class="bar">
                  <div class="bar-inner count-bar" data-percent="85%"></div>
                  <div class="count-text">85%</div>
                </div>
              </div>
              <div class="progress-box p_relative d_block mb_25">
                <h5>High Tech Equipments</h5>
                <div class="bar">
                  <div class="bar-inner count-bar" data-percent="90%"></div>
                  <div class="count-text">90%</div>
                </div>
              </div>
              <div class="progress-box p_relative d_block">
                <h5>Expert Doctor</h5>
                <div class="bar">
                  <div class="bar-inner count-bar" data-percent="75%"></div>
                  <div class="count-text">75%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<!-- skills-section end --><!-- project-section -->
<section class="project-section alternat-2 p_relative">
  <div class="outer-container">
    <div class="project-carousel-2 owl-carousel owl-theme owl-dots-none owl-nav-none">
      <div class="project-block-one">
        <div class="inner-box">
          <figure class="image-box"><img src="/eye-3/assets/images/project/project-5.jpg" alt=""></figure>
          <div class="view-btn"><a href="/eye-3/assets/images/project/project-5.jpg" class="lightbox-image" data-fancybox="gallery"><i class="icon-33"></i></a></div>
          <div class="text">
            <h3><a href="/eye-3/home-2">Living Modern Design</a></h3>
            <span>Residential</span>
          </div>
        </div>
      </div>
      <div class="project-block-one">
        <div class="inner-box">
          <figure class="image-box"><img src="/eye-3/assets/images/project/project-6.jpg" alt=""></figure>
          <div class="view-btn"><a href="/eye-3/assets/images/project/project-6.jpg" class="lightbox-image" data-fancybox="gallery"><i class="icon-33"></i></a></div>
          <div class="text">
            <h3><a href="/eye-3/home-2">Living Modern Design</a></h3>
            <span>Residential</span>
          </div>
        </div>
      </div>
      <div class="project-block-one">
        <div class="inner-box">
          <figure class="image-box"><img src="/eye-3/assets/images/project/project-7.jpg" alt=""></figure>
          <div class="view-btn"><a href="/eye-3/assets/images/project/project-7.jpg" class="lightbox-image" data-fancybox="gallery"><i class="icon-33"></i></a></div>
          <div class="text">
            <h3><a href="/eye-3/home-2">Living Modern Design</a></h3>
            <span>Residential</span>
          </div>
        </div>
      </div>
      <div class="project-block-one">
        <div class="inner-box">
          <figure class="image-box"><img src="/eye-3/assets/images/project/project-8.jpg" alt=""></figure>
          <div class="view-btn"><a href="/eye-3/assets/images/project/project-8.jpg" class="lightbox-image" data-fancybox="gallery"><i class="icon-33"></i></a></div>
          <div class="text">
            <h3><a href="/eye-3/home-2">Living Modern Design</a></h3>
            <span>Residential</span>
          </div>
        </div>
      </div>
      <div class="project-block-one">
        <div class="inner-box">
          <figure class="image-box"><img src="/eye-3/assets/images/project/project-9.jpg" alt=""></figure>
          <div class="view-btn"><a href="/eye-3/assets/images/project/project-9.jpg" class="lightbox-image" data-fancybox="gallery"><i class="icon-33"></i></a></div>
          <div class="text">
            <h3><a href="/eye-3/home-2">Living Modern Design</a></h3>
            <span>Residential</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<!-- project-section end --><!-- news-section -->
<section class="news-section p_relative">
  <div class="auto-container">
    <div class="sec-title centred mb_50">
      <span class="sub-title">Articles</span>
      <h2>Resources to Keep You Informed <br />with Our Blog</h2>
    </div>
    <div class="row clearfix">
      <div class="col-lg-4 col-md-6 col-sm-12 news-block">
        <div class="news-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
          <div class="inner-box">
            <figure class="image-box">
              <img src="/eye-3/assets/images/news/news-1.jpg" alt="">
              <a href="/eye-3/blog-details"><i class="fas fa-link"></i></a>
            </figure>
            <div class="lower-content">
              <div class="inner">
                <div class="category"><a href="/eye-3/blog-details">Glaucoma</a></div>
                <h3><a href="/eye-3/blog-details">How do Inherited Retinal Diseases Happen?</a></h3>
                <ul class="post-info clearfix">
                  <li><i class="icon-34"></i>10 Oct, 2021</li>
                  <li><i class="icon-35"></i><a href="/eye-3/blog-details">Ashley Bronks</a></li>
                </ul>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor inc ididunt labore.</p>
                <div class="link"><a href="/eye-3/blog-details">Read more</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 col-sm-12 news-block">
        <div class="news-block-one wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
          <div class="inner-box">
            <figure class="image-box">
              <img src="/eye-3/assets/images/news/news-2.jpg" alt="">
              <a href="/eye-3/blog-details"><i class="fas fa-link"></i></a>
            </figure>
            <div class="lower-content">
              <div class="inner">
                <div class="category"><a href="/eye-3/blog-details">Paediatric</a></div>
                <h3><a href="/eye-3/blog-details">Prepare to Speak with Your Eye Specialist.</a></h3>
                <ul class="post-info clearfix">
                  <li><i class="icon-34"></i>09 Oct, 2021</li>
                  <li><i class="icon-35"></i><a href="/eye-3/blog-details">Ashley Bronks</a></li>
                </ul>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor inc ididunt labore.</p>
                <div class="link"><a href="/eye-3/blog-details">Read more</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 col-sm-12 news-block">
        <div class="news-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
          <div class="inner-box">
            <figure class="image-box">
              <img src="/eye-3/assets/images/news/news-3.jpg" alt="">
              <a href="/eye-3/blog-details"><i class="fas fa-link"></i></a>
            </figure>
            <div class="lower-content">
              <div class="inner">
                <div class="category"><a href="/eye-3/blog-details">Glaucoma</a></div>
                <h3><a href="/eye-3/blog-details">Some Eye Problems are Minor and don't...</a></h3>
                <ul class="post-info clearfix">
                  <li><i class="icon-34"></i>08 Oct, 2021</li>
                  <li><i class="icon-35"></i><a href="/eye-3/blog-details">Ashley Bronks</a></li>
                </ul>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor inc ididunt labore.</p>
                <div class="link"><a href="/eye-3/blog-details">Read more</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<!-- news-section end --><!-- cta-section -->
<section class="cta-section alternat-2 p_relative bg-color-1">
  <div class="pattern-layer">
    <div class="pattern-1" style="background-image: url('/eye-3/assets/images/shape/shape-29.png);"></div>
    <div class="pattern-2" style="background-image: url('/eye-3/assets/images/shape/shape-30.png);"></div>
  </div>
  <div class="auto-container">
    <div class="row clearfix">
      <div class="col-lg-6 col-md-12 col-sm-12 image-column">
        <div class="image-box mr_25 mt_60">
          <div class="shape" style="background-image: url('/eye-3/assets/images/shape/shape-30.png);"></div>
          <figure class="image p_relative z_1"><img src="/eye-3/assets/images/resource/car-1.png" alt=""></figure>
        </div>
      </div>
      <div class="col-lg-6 col-md-12 col-sm-12 content-column">
        <div class="content-box ml_35">
          <div class="sec-title left mb_25">
            <span class="sub-title">Emergency Need</span>
            <h2>Need a Doctor <br />for Check-up? Call for an <span>Emergency Service!</span></h2>
          </div>
          <div class="text">
            <p>All of our services are backed by our 100% satisfaction guarantee Our electricians can install anything.</p>
          </div>
          <div class="support-box">
            <div class="icon-box"><i class="icon-32"></i></div>
            <h4>For Emergency</h4>
            <h3><a href="tel:123045615523">+1 (230)-456-155-23</a></h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<!-- cta-section end -->





        <!-- main-footer -->
        <footer class="main-footer p_relative">
            <div class="footer-top">
                <div class="auto-container">
                    <div class="top-inner">
                        <ul class="footer-menu">
                            <li><a href="/eye-3/home-2">Management</a></li>
                            <li><a href="/eye-3/home-2">About Us</a></li>
                            <li><a href="/eye-3/home-2">Company</a></li>
                        </ul>
                        <div class="footer-logo">
                            <figure class="logo"><a href="/eye-3/home-2"><img src="/eye-3/assets/images/footer-logo.png" alt=""></a></figure>
                        </div>
                        <ul class="footer-menu">
                            <li><a href="/eye-3/home-2">Career</a></li>
                            <li><a href="/eye-3/home-2">Location</a></li>
                            <li><a href="/eye-3/home-2">Contact </a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="widget-section">
                <div class="auto-container">
                    <div class="row clearfix">
                        <div class="col-lg-4 col-md-6 col-sm-12 footer-column">
                            <div class="about-widget footer-widget mr_40">
                                <div class="widget-title">
                                    <h3>About</h3>
                                </div>
                                <div class="widget-content">
                                    <p>Lorem ipsum dolor amet consecto adi pisicing elit sed eiusm tempor incididunt labore dolore magna aliqua enim ad minim.</p>
                                    <ul class="social-links clearfix">
                                        <li><a href="/eye-3/home-2"><i class="fab fa-facebook-f"></i></a></li>
                                        <li><a href="/eye-3/home-2"><i class="fab fa-twitter"></i></a></li>
                                        <li><a href="/eye-3/home-2"><i class="fab fa-vimeo-v"></i></a></li>
                                        <li><a href="/eye-3/home-2"><i class="fab fa-google-plus-g"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-12 footer-column">
                            <div class="links-widget footer-widget ml_100">
                                <div class="widget-title">
                                    <h3>Links</h3>
                                </div>
                                <div class="widget-content">
                                    <ul class="links-list clearfix">
                                        <li><a href="/eye-3/home-2">About</a></li>
                                        <li><a href="/eye-3/home-2">Services</a></li>
                                        <li><a href="/eye-3/home-2">Job</a></li>
                                        <li><a href="/eye-3/home-2">opportunities</a></li>
                                        <li><a href="/eye-3/home-2">Location</a></li>
                                        <li><a href="/eye-3/home-2">Article</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-6 col-sm-12 footer-column">
                            <div class="links-widget footer-widget ml_30">
                                <div class="widget-title">
                                    <h3>Services</h3>
                                </div>
                                <div class="widget-content">
                                    <ul class="links-list clearfix">
                                        <li><a href="/eye-3/home-2">About</a></li>
                                        <li><a href="/eye-3/home-2">Services</a></li>
                                        <li><a href="/eye-3/home-2">Job</a></li>
                                        <li><a href="/eye-3/home-2">opportunities</a></li>
                                        <li><a href="/eye-3/home-2">Location</a></li>
                                        <li><a href="/eye-3/home-2">Article</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-12 footer-column">
                            <div class="contact-widget footer-widget ml_50">
                                <div class="widget-title">
                                    <h3>Contacts</h3>
                                </div>
                                <div class="widget-content">
                                    <ul class="info clearfix">
                                        <li>Flat 20, Reynolds Neck, North Helenaville, FV77 8WS</li>
                                        <li><a href="tel:23055873407">+2(305) 587-3407</a></li>
                                        <li><a href="mailto:sample@example.com">sample@example.com</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-bottom centred">
                <div class="auto-container">
                    <div class="copyright">
                        <p><a href="/eye-3/home-2">Optcare</a> &copy; 2026 All Right Reserved</p>
                    </div>
                </div>
            </div>
        </footer>
        <!-- main-footer end --></div><!-- /.page-wrapper -->


        <!-- Mobile Menu  -->
        <div class="mobile-menu">
            <div class="menu-backdrop"></div>
            <div class="close-btn"><i class="fas fa-times"></i></div>

            <nav class="menu-box">
                <div class="nav-logo"><a href="/eye-3/home-2"><img src="/eye-3/assets/images/logo-2.png" alt="" title=""></a></div>
                <div class="menu-outer"><!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header--></div>
                <div class="contact-info">
                    <h4>Contact Info</h4>
                    <ul>
                        <li>Chicago 12, Melborne City, USA</li>
                        <li><a href="tel:+8801682648101">+88 01682648101</a></li>
                        <li><a href="mailto:info@example.com">info@example.com</a></li>
                    </ul>
                </div>
                <div class="social-links">
                    <ul class="clearfix">
                        <li><a href="/eye-3/home-2"><span class="fab fa-twitter"></span></a></li>
                        <li><a href="/eye-3/home-2"><span class="fab fa-facebook-square"></span></a></li>
                        <li><a href="/eye-3/home-2"><span class="fab fa-pinterest-p"></span></a></li>
                        <li><a href="/eye-3/home-2"><span class="fab fa-instagram"></span></a></li>
                        <li><a href="/eye-3/home-2"><span class="fab fa-youtube"></span></a></li>
                    </ul>
                </div>
            </nav>
        </div><!-- End Mobile Menu -->        <!--Search Popup-->
        <div id="search-popup" class="search-popup">
            <div class="popup-inner">
                <div class="upper-box clearfix">
                    <figure class="logo-box pull-left"><a href="/eye-3/home-2"><img src="/eye-3/assets/images/logo.png" alt=""></a></figure>
                    <div class="close-search pull-right"><span class="far fa-times"></span></div>
                </div>
                <div class="overlay-layer"></div>
                <div class="auto-container">
                    <div class="search-form">
                        <form method="post" action="https://z.commonsupport.com/php/optcare/index.php">
                            <div class="form-group">
                                <fieldset>
                                    <input type="search" class="form-control" name="search-input" value="" placeholder="Type your keyword and hit" required>
                                    <button type="submit"><i class="far fa-search"></i></button>
                                </fieldset>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>        <!-- scroll to top -->
        <button class="scroll-top scroll-to-target" data-target="html">
          <i class="fal fa-long-arrow-up"></i>
        </button>    <!-- jequery plugins -->
    
    
    
    
    
    
    
    
    
    
    
    
    


    <!-- map script -->
    
    
    

    <!-- main-js -->
    
    ` }} />
  );
}
