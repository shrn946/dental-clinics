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
        <header class="main-header header-style-two home-3">
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
<section class="banner-style-three p_relative">
  <div class="pattern-layer">
    <div class="pattern-1" style="background-image: url('/eye-3/assets/images/shape/shape-32.png);"></div>
    <div class="pattern-2" style="background-image: url('/eye-3/assets/images/shape/shape-33.png);"></div>
  </div>
  <div class="banner-carousel owl-theme owl-carousel owl-dots-none owl-nav-none">
    <div class="slide-item p_relative">
      <div class="auto-container">
        <div class="content-inner p_relative">
          <div class="content-box">
            <h2>Eye Care and Holistic Health Center</h2>
            <p>We solve all your eye care needs by providing personalized and holistic eye care for you and your family!</p>
            <div class="btn-box">
              <a href="/eye-3/contact" class="theme-btn btn-one">Contact Now</a>
            </div>
          </div>
          <div class="image-box">
            <figure class="image"><img src="/eye-3/assets/images/banner/banner-img-4.png" alt=""></figure>
            <span class="text-one">Opt</span>
            <span class="text-two">care</span>
          </div>
        </div>
      </div>
    </div>
    <div class="slide-item p_relative">
      <div class="auto-container">
        <div class="content-inner p_relative">
          <div class="content-box">
            <h2>Eye Care and Holistic Health Center</h2>
            <p>We solve all your eye care needs by providing personalized and holistic eye care for you and your family!</p>
            <div class="btn-box">
              <a href="/eye-3/contact" class="theme-btn btn-one">Contact Now</a>
            </div>
          </div>
          <div class="image-box">
            <figure class="image"><img src="/eye-3/assets/images/banner/banner-img-5.png" alt=""></figure>
            <span class="text-one">Opt</span>
            <span class="text-two">care</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<!-- banner-section end --><!-- consultancy-section -->
<section class="consultancy-section">
  <div class="auto-container">
    <div class="inner-container">
      <h2>Quick Online Consultancy Only <br />on Few Minutes</h2>
      <form action="https://z.commonsupport.com/php/optcare/contact.php" method="post">
        <div class="row clearfix">
          <div class="col-lg-4 col-md-6 col-sm-12 column">
            <div class="form-group">
              <input type="text" name="name" placeholder="Your name" required="">
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12 column">
            <div class="form-group">
              <input type="email" name="email" placeholder="Email" required="">
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12 column">
            <div class="form-group">
              <div class="icon"><i class="fas fa-angle-down"></i></div>
              <input type="text" name="date" placeholder="Appointment date" id="datepicker">
            </div>
          </div>
        </div>
        <div class="message-btn">
          <button type="submit" class="theme-btn btn-one">Contact Now</button>
        </div>
      </form>
    </div>
  </div>
</section>
<!-- consultancy-section end --><!-- service-style-three -->
<section class="service-style-three centred">
  <div class="pattern-layer">
    <div class="pattern-1" style="background-image: url('/eye-3/assets/images/shape/shape-34.png);"></div>
    <div class="pattern-2" style="background-image: url('/eye-3/assets/images/shape/shape-35.png);"></div>
    <div class="pattern-3" style="background-image: url('/eye-3/assets/images/shape/shape-36.png);"></div>
  </div>
  <div class="auto-container">
    <div class="sec-title-two mb_100">
      <h5 class="d_block fs_18 mb_20">Our Services</h5>
      <h2 class="d_block fs_40 fw_bold">A Global Leader, Treatment <br />of eye Disease</h2>
    </div>
    <div class="row clearfix">
      <div class="col-lg-3 col-md-6 col-sm-12 service-block">
        <div class="service-block-two wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
          <div class="inner-box">
            <div class="icon-box"><i class="icon-17"></i></div>
            <h3><a href="/eye-3/surgical-procedures">Surgical <br />Procedures</a></h3>
            <p>Lorem ipsum dolor amet cons ectur tempor adicing elit sed do usmod tempor.</p>
            <div class="link-text"><a href="/eye-3/surgical-procedures">Read More</a></div>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-12 service-block">
        <div class="service-block-two wow fadeInUp animated" data-wow-delay="200ms" data-wow-duration="1500ms">
          <div class="inner-box">
            <div class="icon-box"><i class="icon-18"></i></div>
            <h3><a href="/eye-3/surgical-procedures">Paeditaric Ophthalmology</a></h3>
            <p>Lorem ipsum dolor amet cons ectur tempor adicing elit sed do usmod tempor.</p>
            <div class="link-text"><a href="/eye-3/surgical-procedures">Read More</a></div>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-12 service-block">
        <div class="service-block-two wow fadeInUp animated" data-wow-delay="400ms" data-wow-duration="1500ms">
          <div class="inner-box">
            <div class="icon-box"><i class="icon-19"></i></div>
            <h3><a href="/eye-3/surgical-procedures">Lenses <br />Transitions</a></h3>
            <p>Lorem ipsum dolor amet cons ectur tempor adicing elit sed do usmod tempor.</p>
            <div class="link-text"><a href="/eye-3/surgical-procedures">Read More</a></div>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-12 service-block">
        <div class="service-block-two wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
          <div class="inner-box">
            <div class="icon-box"><i class="icon-20"></i></div>
            <h3><a href="/eye-3/surgical-procedures">Laser <br />Eye Surgery</a></h3>
            <p>Lorem ipsum dolor amet cons ectur tempor adicing elit sed do usmod tempor.</p>
            <div class="link-text"><a href="/eye-3/surgical-procedures">Read More</a></div>
          </div>
        </div>
      </div>
    </div>
    <div class="more-btn mt_60">
      <a href="/eye-3/treatment" class="theme-btn btn-one">View All Service</a>
    </div>
  </div>
</section>
<!-- service-style-three end --><!-- chooseus-style-three -->
<section class="chooseus-style-three p_relative">
  <div class="bg-layer"></div>
  <div class="pattern-layer" style="background-image: url('/eye-3/assets/images/shape/shape-38.png);"></div>
  <figure class="image-layer"><img src="/eye-3/assets/images/resource/chooseus-1.png" alt=""></figure>
  <div class="auto-container">
    <div class="row clearfix">
      <div class="col-lg-6 col-md-12 col-sm-12 offset-lg-6">
        <div class="content_block_eight">
          <div class="content-box p_relative d_block">
            <div class="shape" style="background-image: url('/eye-3/assets/images/shape/shape-37.png);"></div>
            <div class="text p_relative d_block">
              <h2>Great Reasons For People Choose Optcare</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do tempor incididunt labore aliqua.</p>
            </div>
            <div class="inner-box">
              <div class="row clearfix">
                <div class="col-lg-6 col-md-6 col-sm-12 single-column">
                  <div class="single-item">
                    <h4><a href="/eye-3/home-4">Quality Staff</a></h4>
                    <p>Lorem ipsum dolor amet conad sed do usmod tempor.</p>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12 single-column">
                  <div class="single-item">
                    <h4><a href="/eye-3/home-4">Quality Assistance</a></h4>
                    <p>Lorem ipsum dolor amet conad sed do usmod tempor.</p>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12 single-column">
                  <div class="single-item">
                    <h4><a href="/eye-3/home-4">Affordable Price</a></h4>
                    <p>Lorem ipsum dolor amet conad sed do usmod tempor.</p>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12 single-column">
                  <div class="single-item">
                    <h4><a href="/eye-3/home-4">Optimized Solutions</a></h4>
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
<!-- chooseus-style-three end --><!-- process-section -->
<section class="process-section alternat-2 p_relative centred">
  <div class="pattern-layer">
    <div class="pattern-3" style="background-image: url('/eye-3/assets/images/shape/shape-40.png);"></div>
    <div class="pattern-4" style="background-image: url('/eye-3/assets/images/shape/shape-41.png);"></div>
  </div>
  <div class="auto-container">
    <div class="sec-title-two centred mb_85">
      <h5 class="mb_25">How It Works</h5>
      <h2 class="d_block fs_40 fw_bold">How it Helps You to <br />Keep Healthy</h2>
    </div>
    <div class="inner-container p_relative">
      <div class="shape" style="background-image: url('/eye-3/assets/images/shape/shape-39.png);"></div>
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
<!-- process-section end --><!-- faq-section -->
<section class="faq-section p_relative">
  <div class="pattern-layer">
    <div class="pattern-1" style="background-image: url('/eye-3/assets/images/shape/shape-44.png);"></div>
    <div class="pattern-2" style="background-image: url('/eye-3/assets/images/shape/shape-45.png);"></div>
  </div>
  <div class="auto-container">
    <div class="row clearfix">
      <div class="col-lg-6 col-md-12 col-sm-12 content-column">
        <div class="content_block_nine">
          <div class="content-box mr_30 p_relative">
            <div class="sec-title-two mb_50">
              <h5 class="mb_25">Faq's</h5>
              <h2 class="d_block fs_40 fw_bold">Frequently Asked <br />Question</h2>
            </div>
            <div class="accordion-inner">
              <ul class="accordion-box">
                <li class="accordion block active-block">
                  <div class="acc-btn active">
                    <div class="icon-outer"><i class="far fa-angle-down"></i></div>
                    <h5>Do You Do Residential Work?</h5>
                  </div>
                  <div class="acc-content current">
                    <div class="text">
                      <p>Lorem ipsum dolor sit elit consectur sed eiusmod tempor set aliquat enim minim veniam exercitation ullamco nis laboris aliquip commodo.</p>
                    </div>
                  </div>
                </li>
                <li class="accordion block">
                  <div class="acc-btn">
                    <div class="icon-outer"><i class="far fa-angle-down"></i></div>
                    <h5>Are You Licensed and Insured?</h5>
                  </div>
                  <div class="acc-content">
                    <div class="text">
                      <p>Lorem ipsum dolor sit elit consectur sed eiusmod tempor set aliquat enim minim veniam exercitation ullamco nis laboris aliquip commodo.</p>
                    </div>
                  </div>
                </li>
                <li class="accordion block">
                  <div class="acc-btn">
                    <div class="icon-outer"><i class="far fa-angle-down"></i></div>
                    <h5>Do You Do Commercial Electrical Repair?</h5>
                  </div>
                  <div class="acc-content">
                    <div class="text">
                      <p>Lorem ipsum dolor sit elit consectur sed eiusmod tempor set aliquat enim minim veniam exercitation ullamco nis laboris aliquip commodo.</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6 col-md-12 col-sm-12 image-column">
        <div class="image_block_five">
          <div class="image-box ml_45 p_relative">
            <div class="shape">
              <div class="shape-1" style="background-image: url('/eye-3/assets/images/shape/shape-42.png);"></div>
              <div class="shape-2" style="background-image: url('/eye-3/assets/images/shape/shape-43.png);"></div>
            </div>
            <figure class="image image-1"><img src="/eye-3/assets/images/resource/about-4.jpg" alt=""></figure>
            <figure class="image image-2"><img src="/eye-3/assets/images/resource/about-5.jpg" alt=""></figure>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<!-- faq-section end --><!-- team-style-three -->
<section class="team-style-three p_relative centred">
  <div class="auto-container">
    <div class="sec-title-two mb_50">
      <h5 class="mb_25">Experience Team</h5>
      <h2 class="d_block fs_40 fw_bold">The Most Qualified Skillful & <br />Professional staff</h2>
    </div>
    <div class="row clearfix">
      <div class="col-lg-3 col-md-6 col-sm-12 team-block">
        <div class="team-block-three wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
          <div class="inner-box">
            <figure class="image-box"><img src="/eye-3/assets/images/team/team-4.jpg" alt=""></figure>
            <div class="lower-content">
              <div class="share-icon"><a href="/eye-3/home-4"><i class="icon-37"></i></a></div>
              <ul class="social-links clearfix">
                <li><a href="/eye-3/home-4"><i class="fab fa-facebook-f"></i></a></li>
                <li><a href="/eye-3/home-4"><i class="fab fa-twitter"></i></a></li>
                <li><a href="/eye-3/home-4"><i class="fab fa-linkedin-in"></i></a></li>
              </ul>
              <h3><a href="/eye-3/team-details">Catherine Denuve</a></h3>
              <span class="designation">Optegra eye</span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-12 team-block">
        <div class="team-block-three wow fadeInUp animated" data-wow-delay="200ms" data-wow-duration="1500ms">
          <div class="inner-box">
            <figure class="image-box"><img src="/eye-3/assets/images/team/team-5.jpg" alt=""></figure>
            <div class="lower-content">
              <div class="share-icon"><a href="/eye-3/home-4"><i class="icon-37"></i></a></div>
              <ul class="social-links clearfix">
                <li><a href="/eye-3/home-4"><i class="fab fa-facebook-f"></i></a></li>
                <li><a href="/eye-3/home-4"><i class="fab fa-twitter"></i></a></li>
                <li><a href="/eye-3/home-4"><i class="fab fa-linkedin-in"></i></a></li>
              </ul>
              <h3><a href="/eye-3/team-details">Catherine Denuve</a></h3>
              <span class="designation">Lens replacement</span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-12 team-block">
        <div class="team-block-three wow fadeInUp animated" data-wow-delay="400ms" data-wow-duration="1500ms">
          <div class="inner-box">
            <figure class="image-box"><img src="/eye-3/assets/images/team/team-6.jpg" alt=""></figure>
            <div class="lower-content">
              <div class="share-icon"><a href="/eye-3/home-4"><i class="icon-37"></i></a></div>
              <ul class="social-links clearfix">
                <li><a href="/eye-3/home-4"><i class="fab fa-facebook-f"></i></a></li>
                <li><a href="/eye-3/home-4"><i class="fab fa-twitter"></i></a></li>
                <li><a href="/eye-3/home-4"><i class="fab fa-linkedin-in"></i></a></li>
              </ul>
              <h3><a href="/eye-3/team-details">Catherine Denuve</a></h3>
              <span class="designation">Cataract surgery</span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-12 team-block">
        <div class="team-block-three wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
          <div class="inner-box">
            <figure class="image-box"><img src="/eye-3/assets/images/team/team-7.jpg" alt=""></figure>
            <div class="lower-content">
              <div class="share-icon"><a href="/eye-3/home-4"><i class="icon-37"></i></a></div>
              <ul class="social-links clearfix">
                <li><a href="/eye-3/home-4"><i class="fab fa-facebook-f"></i></a></li>
                <li><a href="/eye-3/home-4"><i class="fab fa-twitter"></i></a></li>
                <li><a href="/eye-3/home-4"><i class="fab fa-linkedin-in"></i></a></li>
              </ul>
              <h3><a href="/eye-3/team-details">Catherine Denuve</a></h3>
              <span class="designation">Clarivu eye</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="more-btn mt_60">
      <a href="/eye-3/team-2" class="theme-btn btn-one">View All Team</a>
    </div>
  </div>
</section>
<!-- team-style-three end --><!-- funfact-style-two -->
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
<!-- funfact-style-two end --><!-- skills-section -->
<section class="skills-section alternat-2 p_relative">
  <div class="pattern-layer">
    <div class="pattern-3" style="background-image: url('/eye-3/assets/images/shape/shape-47.png);"></div>
    <div class="pattern-4" style="background-image: url('/eye-3/assets/images/shape/shape-48.png);"></div>
  </div>
  <div class="auto-container">
    <div class="row clearfix">
      <div class="col-lg-6 col-md-12 col-sm-12 image-column">
        <div class="image_block_four">
          <div class="image-box mr_45 pb_100">
            <div class="shape" style="background-image: url('/eye-3/assets/images/shape/shape-46.png);"></div>
            <div class="icon-box rotate-me"><img src="/eye-3/assets/images/icons/icon-1.png" alt=""></div>
            <figure class="image image-1"><img src="/eye-3/assets/images/resource/about-2.jpg" alt=""></figure>
            <figure class="image image-2"><img src="/eye-3/assets/images/resource/about-6.jpg" alt=""></figure>
          </div>
        </div>
      </div>
      <div class="col-lg-6 col-md-12 col-sm-12 content-column">
        <div class="content_block_seven">
          <div class="content-box ml_30">
            <div class="sec-title-two mb_30">
              <h5 class="mb_20">Ophthmologist Skills</h5>
              <h2 class="d_block fs_40 fw_bold mb_25">Eye Care Service Skills For Child and Adults</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt labore aliqua.</p>
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
<!-- skills-section end --><!-- testimonial-style-three -->
<section class="testimonial-style-three centred p_relative">
  <div class="shape">
    <div class="shape-1" style="background-image: url('/eye-3/assets/images/shape/shape-49.png);"></div>
    <div class="shape-2" style="background-image: url('/eye-3/assets/images/shape/shape-50.png);"></div>
  </div>
  <div class="auto-container">
    <div class="sec-title-two mb_50">
      <h5 class="mb_20">Testimonials</h5>
      <h2 class="d_block fs_40 fw_bold mb_25">What Our Patient’s Say <br />About Optcare</h2>
    </div>
    <div class="two-item-carousel owl-carousel owl-theme owl-nav-none dots-style-one">
      <div class="testimonial-content">
        <div class="inner-box">
          <div class="light-icon"><i class="icon-29"></i></div>
          <ul class="rating clearfix">
            <li><i class="icon-40"></i></li>
            <li><i class="icon-40"></i></li>
            <li><i class="icon-40"></i></li>
            <li><i class="icon-40"></i></li>
            <li><i class="icon-40"></i></li>
          </ul>
          <p>Adipisicing elit sed do eiusmodim tempor incid labore dolore magna aliqua enim minium veniam nostrud exercition ulamco laboris nisar aliquip commodo consequat duis aute dolor in reprehenderit in voluptate.</p>
          <h4>Rachel McAdams</h4>
          <span class="designation">Electrician</span>
        </div>
      </div>
      <div class="testimonial-content">
        <div class="inner-box">
          <div class="light-icon"><i class="icon-29"></i></div>
          <ul class="rating clearfix">
            <li><i class="icon-40"></i></li>
            <li><i class="icon-40"></i></li>
            <li><i class="icon-40"></i></li>
            <li><i class="icon-40"></i></li>
            <li><i class="icon-40"></i></li>
          </ul>
          <p>Adipisicing elit sed do eiusmodim tempor incid labore dolore magna aliqua enim minium veniam nostrud exercition ulamco laboris nisar aliquip commodo consequat duis aute dolor in reprehenderit in voluptate.</p>
          <h4>Jhon Haris</h4>
          <span class="designation">Electrician</span>
        </div>
      </div>
      <div class="testimonial-content">
        <div class="inner-box">
          <div class="light-icon"><i class="icon-29"></i></div>
          <ul class="rating clearfix">
            <li><i class="icon-40"></i></li>
            <li><i class="icon-40"></i></li>
            <li><i class="icon-40"></i></li>
            <li><i class="icon-40"></i></li>
            <li><i class="icon-40"></i></li>
          </ul>
          <p>Adipisicing elit sed do eiusmodim tempor incid labore dolore magna aliqua enim minium veniam nostrud exercition ulamco laboris nisar aliquip commodo consequat duis aute dolor in reprehenderit in voluptate.</p>
          <h4>Rachel McAdams</h4>
          <span class="designation">Electrician</span>
        </div>
      </div>
      <div class="testimonial-content">
        <div class="inner-box">
          <div class="light-icon"><i class="icon-29"></i></div>
          <ul class="rating clearfix">
            <li><i class="icon-40"></i></li>
            <li><i class="icon-40"></i></li>
            <li><i class="icon-40"></i></li>
            <li><i class="icon-40"></i></li>
            <li><i class="icon-40"></i></li>
          </ul>
          <p>Adipisicing elit sed do eiusmodim tempor incid labore dolore magna aliqua enim minium veniam nostrud exercition ulamco laboris nisar aliquip commodo consequat duis aute dolor in reprehenderit in voluptate.</p>
          <h4>Jhon Haris</h4>
          <span class="designation">Electrician</span>
        </div>
      </div>
      <div class="testimonial-content">
        <div class="inner-box">
          <div class="light-icon"><i class="icon-29"></i></div>
          <ul class="rating clearfix">
            <li><i class="icon-40"></i></li>
            <li><i class="icon-40"></i></li>
            <li><i class="icon-40"></i></li>
            <li><i class="icon-40"></i></li>
            <li><i class="icon-40"></i></li>
          </ul>
          <p>Adipisicing elit sed do eiusmodim tempor incid labore dolore magna aliqua enim minium veniam nostrud exercition ulamco laboris nisar aliquip commodo consequat duis aute dolor in reprehenderit in voluptate.</p>
          <h4>Rachel McAdams</h4>
          <span class="designation">Electrician</span>
        </div>
      </div>
      <div class="testimonial-content">
        <div class="inner-box">
          <div class="light-icon"><i class="icon-29"></i></div>
          <ul class="rating clearfix">
            <li><i class="icon-40"></i></li>
            <li><i class="icon-40"></i></li>
            <li><i class="icon-40"></i></li>
            <li><i class="icon-40"></i></li>
            <li><i class="icon-40"></i></li>
          </ul>
          <p>Adipisicing elit sed do eiusmodim tempor incid labore dolore magna aliqua enim minium veniam nostrud exercition ulamco laboris nisar aliquip commodo consequat duis aute dolor in reprehenderit in voluptate.</p>
          <h4>Jhon Haris</h4>
          <span class="designation">Electrician</span>
        </div>
      </div>
    </div>
  </div>
</section>
<!-- testimonial-style-three end --><!-- project-section -->
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
    <div class="sec-title-two mb_50 centred">
      <h5 class="mb_20">Articles</h5>
      <h2 class="d_block fs_40 fw_bold mb_25">Resources to Keep You Informed <br />with Our Blog</h2>
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
<!-- news-section end --><!-- subscribe-section -->
<section class="subscribe-section p_relative bg-color-2">
  <div class="auto-container">
    <div class="row clearfix">
      <div class="col-lg-6 col-md-12 col-sm-12 text-column">
        <div class="text">
          <h2><i class="icon-41"></i>Join Us & Increase Your <br />Business.</h2>
        </div>
      </div>
      <div class="col-lg-6 col-md-12 col-sm-12 form-column">
        <div class="form-inner ml_30 mt_5">
          <form action="https://z.commonsupport.com/php/optcare/index-3.php" method="post">
            <div class="form-group">
              <input type="email" name="email" placeholder="Your email address" required="">
              <button type="submit" class="theme-btn">Subscribe</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>
<!-- subscribe-section end -->




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
