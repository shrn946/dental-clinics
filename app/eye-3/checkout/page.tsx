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
            <h1>Checkout</h1>
            <ul class="bread-crumb clearfix">
                <li><a href="/eye-3/home-2">Home</a></li>
                <li>Checkout</li>
            </ul>
        </div>
    </div>
</section>
<!-- End Page Title -->




<!-- checkout-section -->
<section class="checkout-section p_relative pt_120 pb_120">
    <div class="container">
        <div class="coupon-box p_relative d_block mb_50 pl_30 pt_20 pr_30 pb_20 d_block fs_16">Have a Coupon? <a href="/eye-3/checkout" class="d_iblock">Click here to enter your code</a></div>
        <div class="row">
            <div class="col-lg-6 col-md-12 col-sm-12 left-column">
                <div class="inner-box">
                    <div class="billing-info p_relative d_block mb_55">
                        <h4 class="sub-title d_block fs_30 lh_40 mb_30">Billing Details</h4>
                        <form action="#" method="post" class="billing-form p_relative d_block">
                            <div class="row">
                                <div class="col-lg-6 col-md-6 col-sm-12 form-group">
                                    <label class="p_relative d_block fs_16 color_black mb_2">First Name*</label>
                                    <div class="field-input">
                                        <input type="text" name="first_name">
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-12 form-group">
                                    <label class="p_relative d_block fs_16 color_black mb_2">Last Name*</label>
                                    <div class="field-input">
                                        <input type="text" name="last_name">
                                    </div>
                                </div>
                                <div class="col-lg-12 col-md-12 col-sm-12 form-group">
                                    <label class="p_relative d_block fs_16 color_black mb_2">Company Name*</label>
                                    <div class="field-input">
                                        <input type="text" name="company_name">
                                    </div>
                                </div>
                                <div class="col-lg-12 col-md-12 col-sm-12 form-group">
                                    <label class="p_relative d_block fs_16 color_black mb_2">Email Address*</label>
                                    <div class="field-input">
                                        <input type="email" name="email">
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-12 form-group">
                                    <label class="p_relative d_block fs_16 color_black mb_2">Phone Number*</label>
                                    <div class="field-input">
                                        <input type="text" name="phone">
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-12 form-group">
                                    <label class="p_relative d_block fs_16 color_black mb_2">Country*</label>
                                    <div class="select-column select-box">
                                        <select class="selectmenu" id="ui-id-1">
                                            <option selected="selected">Select Option</option>
                                            <option>United State</option>
                                            <option>Australia</option>
                                            <option>Canada</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-lg-12 col-md-12 col-sm-12 form-group">
                                    <label class="p_relative d_block fs_16 color_black mb_2">Address*</label>
                                    <div class="field-input">
                                        <input type="text" name="address" class="address">
                                        <input type="text" name="address">
                                    </div>
                                </div>
                                <div class="col-lg-12 col-md-12 col-sm-12 form-group">
                                    <label class="p_relative d_block fs_16 color_black mb_2">Town/City*</label>
                                    <div class="field-input">
                                        <input type="text" name="town_city">
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-12 form-group">
                                    <label class="p_relative d_block fs_16 color_black mb_2">State*</label>
                                    <div class="select-column select-box">
                                        <select class="selectmenu" id="ui-id-2">
                                            <option selected="selected">Select Option</option>
                                            <option>United State</option>
                                            <option>Australia</option>
                                            <option>Canada</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-12 form-group">
                                    <label class="p_relative d_block fs_16 color_black mb_2">Zip Code*</label>
                                    <div class="field-input">
                                        <input type="text" name="zip">
                                    </div>
                                </div>
                                <div class="form-group col-lg-12 col-md-12 col-sm-12">
                                    <div class="create-acc p_relative d_block mt_3">
                                        <div class="check-box">
                                            <input class="check" type="checkbox" id="checkbox">
                                            <label for="checkbox">Create an Account?</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="additional-info">
                        <div class="note-book p_relative d_block">
                            <label class="p_relative d_block fs_16 color_black mb_2">Order Notes</label>
                            <textarea name="note_box" placeholder="Notes about your order, e.g. special notes for your delivery"></textarea>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12 right-column">
                <div class="inner-box">
                    <div class="order-info p_relative d_block pt_45 pr_50 pb_25 pl_50 mb_60">
                        <h4 class="sub-title d_block fs_24 lh_30 mb_25">Your Order</h4>
                        <div class="order-product">
                            <ul class="order-list clearfix">
                                <li class="p_relative d_block clearfix pt_17 pb_16">
                                    <h6 class="fs_18 lh_20 pull-left fw_medium">Tankless Instant Electric <br />Water Heater</h6>
                                    <span class="p_relative d_block pull-right fs_16 fw_medium color_black">$70.30</span>
                                </li>
                                <li class="p_relative d_block clearfix pt_17 pb_16">
                                    <h6 class="fs_18 lh_20 pull-left fw_medium">Glass Pendant Light Hanging <br />Lamps Lighting</h6>
                                    <span class="p_relative d_block pull-right fs_16 fw_medium color_black">$25.50</span>
                                </li>
                                <li class="p_relative d_block clearfix pt_17 pb_16">
                                    <h6 class="fs_18 lh_20 pull-left fw_medium">Westek Battery Operated <br />Wall Sconces</h6>
                                    <span class="p_relative d_block pull-right fs_16 fw_medium color_black">$90.00</span>
                                </li>
                                <li class="sub-total p_relative d_block clearfix pt_17 pb_16">
                                    <h6 class="fs_18 fw_medium lh_20 pull-left">Sub Total</h6>
                                    <span class="p_relative d_block pull-right fs_16 fw_medium color_black light">$150.00</span>
                                </li>
                                <li class="order-total p_relative d_block clearfix pt_17 pb_16">
                                    <h6 class="fs_18 fw_bold lh_20 pull-left">Order Total</h6>
                                    <span class="p_relative d_block pull-right fs_16 fw_bold color_black">$150.00</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="payment-info p_relative d_block pt_45 pr_50 pb_50 pl_50">
                        <h4 class="sub-title d_block fs_24 lh_30 mb_40">Payment</h4>
                        <div class="payment-inner p_relative d_block pt_25 pr_30 pb_20 pl_30 mb_30">
                            <div class="option-block pb_12 mb_13">
                                <div class="check-box">
                                    <input class="check" type="checkbox" id="checkbox2" checked>
                                    <label for="checkbox2" class="fs_16 fw_medium color_black">Direct Bank Transfer</label>
                                </div>
                                <p class="fs_14 font_family_poppins pl_30">Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
                            </div>
                            <div class="option-block clearfix">
                                <div class="check-box pull-left mr_25">
                                    <input class="check" type="checkbox" id="checkbox3">
                                    <label for="checkbox3" class="fs_16 fw_medium color_black">Paypal</label>
                                </div>
                                <div class="link pull-left">
                                    <a href="/eye-3/checkout" class="fs_16 fw_medium color_black">What is Paypal?</a>
                                </div>
                            </div>
                        </div>
                        <div class="btn-box">
                            <a href="/eye-3/checkout" class="theme-btn btn-one">Place Your Order</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- checkout-section end -->


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
