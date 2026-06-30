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

<!-- Page Title -->
<section class="page-title">
    <div class="bg-layer" style="background-image: url('/eye-3/assets/images/background/page-title.jpg);"></div>
    <div class="auto-container">
        <div class="content-box">
            <h1>Blog Details</h1>
            <ul class="bread-crumb clearfix">
                <li><a href="/eye-3/home-2">Home</a></li>
                <li>Blog Details</li>
            </ul>
        </div>
    </div>
</section>
<!-- End Page Title -->



<!-- sidebar-page-container -->
<section class="sidebar-page-container p_relative">
    <div class="auto-container">
        <div class="row clearfix">
            <div class="col-lg-8 col-md-12 col-sm-12 content-side">
                <div class="blog-details-content">
                    <div class="news-block-one">
                        <div class="inner-box">
                            <figure class="image-box">
                                <img src="/eye-3/assets/images/news/news-15.jpg" alt="">
                            </figure>
                            <div class="lower-content">
                                <div class="inner">
                                    <div class="category"><a href="/eye-3/blog-details">Glaucoma</a></div>
                                    <h3>How do Inherited Retinal Diseases Happen?</h3>
                                    <ul class="post-info clearfix">
                                        <li><i class="icon-34"></i>10 Oct, 2021</li>
                                        <li><i class="icon-35"></i><a href="/eye-3/blog-details">Ashley Bronks</a></li>
                                    </ul>
                                    <p>Lorem ipsum dolor sit amet consectur adipisicing elit sed do eiusmod tempor aliqua nisenim ad minim veniam quis nostrud exercitation ullamco laboris nisi aliquip ecommodo consequat duis aute reprehenderit in voluptate. velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                                    <p>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                                    <ul class="list-style-one clearfix">
                                        <li>High-quality work</li>
                                        <li>Emergency power solutions</li>
                                        <li>Straightforward pricing</li>
                                        <li>Wiring and installation</li>
                                        <li>Rapid response times</li>
                                        <li>Full-service electrical layout</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="content-one">
                        <div class="row clearfix">
                            <div class="col-lg-6 col-md-6 col-sm-12 text-column">
                                <div class="text mr_30">
                                    <h3>Comprehensive Eye Exams</h3>
                                    <p>Lorem ipsum dolor sit amet consectur adipisicing elit sed do eiusmod tempor incidunt labore dolore magna aliqua enim minim veniam, quis nostrud ex ercitation ullamco laboris nisi ut aliquip exea com modo consequat duis aute irure dolor in reprehend erit in voluptate velit esse cillum dolore fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    <p>Sed perspiciatis unde omnis iste natus error sit vol uptatem accusantium doloremque laudantium totam rem aperiam eaque.</p>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-12 image-column">
                                <figure class="image-box"><img src="/eye-3/assets/images/news/news-18.jpg" alt=""></figure>
                            </div>
                        </div>
                    </div>
                    <blockquote>
                        <div class="shape" style="background-image: url('/eye-3/assets/images/shape/shape-54.png);"></div>
                        <div class="icon-box"><i class="icon-29"></i></div>
                        <p>Lorem ipsum dolor amet con sectur elitadicing elit sed do usmod tempor uincididunt <br />enim minim veniam nostrud.</p>
                        <h5>Kevin Spacey</h5>
                    </blockquote>
                    <div class="content-two">
                        <h3>Surgical Procedures</h3>
                        <p>Consectur adipisicing elit sed do eiusmod tempor aliqua nisenim ad minim veniam quis nostrud exercitation ulamo laboris nisi aliquip ecommodo consequat duis aute reprehenderit in voluptate velit esse cillum dolore euga fugiat nulla pariatur excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.</p>
                    </div>
                    <div class="post-tags">
                        <ul class="tags-list clearfix">
                            <li>
                                <h5>Tags:</h5>
                            </li>
                            <li><a href="/eye-3/blog-details">Eyecare</a></li>
                            <li><a href="/eye-3/blog-details">Glass</a></li>
                            <li><a href="/eye-3/blog-details">Lens</a></li>
                        </ul>
                    </div>
                    <div class="author-box">
                        <figure class="author-thumb"><img src="/eye-3/assets/images/news/author-1.jpg" alt=""></figure>
                        <h3>Gerard Butler</h3>
                        <p>Enim ad minim veniam quis nostrud exercitation lamco laboris nisi ex ea commodo consequat aute irure dolor in reprehenderit.</p>
                    </div>
                    <div class="comments-form-area">
                        <h3>Leave a Comment</h3>
                        <div class="form-inner">
                            <form method="post" action="https://z.commonsupport.com/php/optcare/sendemail.php" id="contact-form">
                                <div class="row clearfix">
                                    <div class="col-lg-6 col-md-6 col-sm-12 form-group">
                                        <input type="text" name="username" placeholder="Your Name" required="">
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-12 form-group">
                                        <input type="email" name="email" placeholder="Your email" required="">
                                    </div>
                                    <div class="col-lg-12 col-md-12 col-sm-12 form-group">
                                        <input type="text" name="phone" required="" placeholder="Phone">
                                    </div>
                                    <div class="col-lg-12 col-md-12 col-sm-12 form-group">
                                        <textarea name="message" placeholder="Message"></textarea>
                                    </div>
                                    <div class="col-lg-12 col-md-12 col-sm-12 form-group">
                                        <div class="check-box">
                                            <input class="check" type="checkbox" id="checkbox">
                                            <label for="checkbox">I agree that my submitted data is being collected and stored. *</label>
                                        </div>
                                    </div>
                                    <div class="col-lg-12 col-md-12 col-sm-12 form-group message-btn mr-0">
                                        <button class="theme-btn btn-one" type="submit" name="submit-form">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                <div class="blog-sidebar ml_40">
                    <div class="sidebar-widget search-widget">
                        <div class="widget-title">
                            <h3>Search</h3>
                        </div>
                        <div class="search-form">
                            <form action="https://z.commonsupport.com/php/optcare/blog-2.php" method="post">
                                <div class="form-group">
                                    <input type="search" name="search-field" placeholder="Search" required="">
                                    <button type="submit"><i class="icon-50"></i></button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="sidebar-widget category-widget">
                        <div class="widget-title">
                            <h3>Categories</h3>
                        </div>
                        <div class="widget-content">
                            <ul class="category-list clearfix">
                                <li><a href="/eye-3/blog-details">All Categories</a></li>
                                <li><a href="/eye-3/blog-details">Surgical Procedures</a></li>
                                <li><a href="/eye-3/blog-details">Paeditaric Ophthalmology</a></li>
                                <li><a href="/eye-3/blog-details">Lenses Transitions</a></li>
                                <li><a href="/eye-3/blog-details">Laser Eye Surgery</a></li>
                                <li><a href="/eye-3/blog-details">Vision Correction</a></li>
                                <li><a href="/eye-3/blog-details">Contact Lens</a></li>
                                <li><a href="/eye-3/blog-details">Diabetic Retinopathy</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="sidebar-widget post-widget">
                        <div class="widget-title">
                            <h3>Recent Posts</h3>
                        </div>
                        <div class="post-inner">
                            <div class="post">
                                <figure class="post-thumb"><a href="/eye-3/blog-details"><img src="/eye-3/assets/images/news/post-1.jpg" alt=""></a></figure>
                                <h4><a href="/eye-3/blog-details">Visual Field Assessment in Low Vision</a></h4>
                                <span class="post-date"><i class="icon-34"></i>10 Oct, 2022</span>
                            </div>
                            <div class="post">
                                <figure class="post-thumb"><a href="/eye-3/blog-details"><img src="/eye-3/assets/images/news/post-2.jpg" alt=""></a></figure>
                                <h4><a href="/eye-3/blog-details">Domiciliary Optometry in The United Kingdom</a></h4>
                                <span class="post-date"><i class="icon-34"></i>09 Oct, 2022</span>
                            </div>
                            <div class="post">
                                <figure class="post-thumb"><a href="/eye-3/blog-details"><img src="/eye-3/assets/images/news/post-3.jpg" alt=""></a></figure>
                                <h4><a href="/eye-3/blog-details">What Shape of Glasses Is Best for You?</a></h4>
                                <span class="post-date"><i class="icon-34"></i>08 Oct, 2022</span>
                            </div>
                        </div>
                    </div>
                    <div class="sidebar-widget archives-widget">
                        <div class="widget-title">
                            <h3>Archives</h3>
                        </div>
                        <div class="widget-content">
                            <ul class="archives-list clearfix">
                                <li><a href="/eye-3/blog-details">November 2016 (3)</a></li>
                                <li><a href="/eye-3/blog-details">December 2017 (8)</a></li>
                                <li><a href="/eye-3/blog-details">January 2018 (2)</a></li>
                                <li><a href="/eye-3/blog-details">February 2019 (10)</a></li>
                                <li><a href="/eye-3/blog-details">March 2020 (2)</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="sidebar-widget tags-widget">
                        <div class="widget-title">
                            <h3>Tags</h3>
                        </div>
                        <div class="widget-content">
                            <ul class="tags-list clearfix">
                                <li><a href="/eye-3/blog-details">Eyecare</a></li>
                                <li><a href="/eye-3/blog-details">Glass</a></li>
                                <li><a href="/eye-3/blog-details">Lens</a></li>
                                <li><a href="/eye-3/blog-details">Surgery</a></li>
                                <li><a href="/eye-3/blog-details">Medicine</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- sidebar-page-container end -->


<!-- subscribe-section -->
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
