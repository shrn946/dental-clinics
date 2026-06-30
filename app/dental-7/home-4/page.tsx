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

		<!--=== Start Preloader Section ===-->
		<div class="preloader">
            <div class="content">
                <div class="ball"></div>
                <div class="ball"></div>
                <div class="ball"></div>
                <div class="ball"></div>
                <div class="ball"></div>
                <div class="ball"></div>
                <div class="ball"></div>
                <div class="ball"></div>
                <div class="ball"></div>
                <div class="ball"></div>
            </div>
        </div>
		<!--=== End Preloader Section ===-->

		<!--=== Start Navbar Section ===-->
		<div class="navbar-section">
			<!--=== Start Main Navbar Section ===-->
			<div class="main-nav">
				<div class="container">
					<nav class="navbar navbar-expand-md navbar-light">
						<a class="navbar-brand" href="/dental-7">
							<img src="/dental-7/assets/images/logo.png" alt="Logo">
						</a> 
						
						<div class="collapse navbar-collapse for-mobile-menu" id="navbarSupportedContent">
							<ul class="navbar-nav m-auto">
								<li class="nav-item">
									<a href="#" class="nav-link dropdown-toggle active">
										Home             
									</a>

									<ul class="dropdown-menu">
										<li class="nav-item">
											<a href="/dental-7" class="nav-link">Home Page One</a>
										</li>
										<li class="nav-item">
											<a href="/dental-7/home-2" class="nav-link">Home Page Two</a>
										</li>
										<li class="nav-item">
											<a href="/dental-7/home-3" class="nav-link">Home Page Three</a>
										</li>
										<li class="nav-item">
											<a href="/dental-7/home-4" class="nav-link active">Home Page Four</a>
										</li>
									</ul>
								</li>

								<li class="nav-item">
									<a href="/dental-7/about-us" class="nav-link">About Us</a>
								</li>

								<li class="nav-item">
									<a href="#" class="nav-link dropdown-toggle">
										Pages            
									</a>

									<ul class="dropdown-menu">
										<li class="nav-item">
											<a href="/dental-7/about-us" class="nav-link">About Us</a>
										</li>
										<li class="nav-item">
											<a href="#" class="nav-link dropdown-toggle">
												Services             
												<i class="icofont-rounded-down"></i>  
											</a>
		
											<ul class="dropdown-menu">
												<li class="nav-item">
													<a href="/dental-7/services" class="nav-link">Services Page</a>
												</li>
												<li class="nav-item">
													<a href="/dental-7/pricing-plan" class="nav-link">Pricing Plan Page</a>
												</li>
												<li class="nav-item">
													<a href="/dental-7/single-services" class="nav-link">Single Services Page</a>
												</li>
											</ul>
										</li>
										<li class="nav-item">
											<a href="#" class="nav-link dropdown-toggle">
												Authentication       
												<i class="icofont-rounded-down"></i>      
											</a>
		
											<ul class="dropdown-menu">
												<li class="nav-item">
													<a href="/dental-7/sign-in" class="nav-link">Sign In Page</a>
												</li>
												<li class="nav-item">
													<a href="/dental-7/sign-up" class="nav-link">Sign Up Page</a>
												</li>
												<li class="nav-item">
													<a href="/dental-7/appointment" class="nav-link">Appointment Page</a>
												</li>
											</ul>
										</li>
										
										<li class="nav-item">
											<a href="#" class="nav-link dropdown-toggle">
												Blog        
												<i class="icofont-rounded-down"></i>      
											</a>

											<ul class="dropdown-menu">
												<li class="nav-item">
													<a href="/dental-7/blog" class="nav-link">Blog Page</a>
												</li>
												<li class="nav-item">
													<a href="/dental-7/single-blog" class="nav-link">Single Blog Page</a>
												</li>
											</ul>
										</li>
										<li class="nav-item">
											<a href="/dental-7/appointment" class="nav-link">Appointment Page</a>
										</li>
										<li class="nav-item">
											<a href="/dental-7/doctors" class="nav-link">Doctors Page</a>
										</li>
										<li class="nav-item">
											<a href="/dental-7/faq" class="nav-link">FAQ Page</a>
										</li>
										<li class="nav-item">
											<a href="/dental-7/testimonials" class="nav-link">Testimonials Page</a>
										</li>
										<li class="nav-item">
											<a href="/dental-7/contact-us" class="nav-link">Contact Us Page</a>
										</li>
										<li class="nav-item">
											<a href="/dental-7/privacy-policy" class="nav-link">Privacy Policy Page</a>
										</li>
										<li class="nav-item">
											<a href="/dental-7/terms-conditions" class="nav-link">Terms & Conditions Page</a>
										</li>
										<li class="nav-item">
											<a href="/dental-7/404-page" class="nav-link">Error Page</a>
										</li>
									</ul>
								</li>

								<li class="nav-item">
									<a href="#" class="nav-link dropdown-toggle">
										Services             
									</a>

									<ul class="dropdown-menu">
										<li class="nav-item">
											<a href="/dental-7/services" class="nav-link">Services Page</a>
										</li>
										<li class="nav-item">
											<a href="/dental-7/pricing-plan" class="nav-link">Pricing Plan Page</a>
										</li>
										<li class="nav-item">
											<a href="/dental-7/single-services" class="nav-link">Single Services Page</a>
										</li>
									</ul>
								</li>
								
								<li class="nav-item">
									<a href="#" class="nav-link dropdown-toggle">
										Shop             
									</a>

									<ul class="dropdown-menu">
										<li class="nav-item">
											<a href="/dental-7/products" class="nav-link">Products Page</a>
										</li>
										<li class="nav-item">
											<a href="/dental-7/product-cart" class="nav-link">Products Cart Page</a>
										</li>
										<li class="nav-item">
											<a href="/dental-7/checkout" class="nav-link">Checkout Page</a>
										</li>
										<li class="nav-item">
											<a href="/dental-7/product-details" class="nav-link">Products Details Page</a>
										</li>
										<li class="nav-item">
											<a href="/dental-7/payment" class="nav-link">Payment Page</a>
										</li>
									</ul>
								</li>

								<li class="nav-item">
									<a href="#" class="nav-link dropdown-toggle">
										Blog            
									</a>

									<ul class="dropdown-menu">
										<li class="nav-item">
											<a href="/dental-7/blog" class="nav-link">Blog Page</a>
										</li>
										<li class="nav-item">
											<a href="/dental-7/single-blog" class="nav-link">Single Blog Page</a>
										</li>
									</ul>
								</li>
								
								<li class="nav-item">
									<a href="/dental-7/contact-us" class="nav-link">Contact Us</a>
								</li>
							</ul>

							<div class="others-options">
								<ul>
									<li>
										<a href="/dental-7/appointment" class="main-btn">
											<span>Appointment</span>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</nav>
				</div>
			</div>
			<!--=== End Main Navbar Section ===-->

			<!--=== Start Mobile Navbar Section ===-->
			<div class="mobile-nav">
				<div class="container">
					<div class="mobile-menu">
						<div class="logo">
							<a href="/dental-7">
								<img src="/dental-7/assets/images/logo.png" alt="Logo">
							</a>
						</div>
					</div>
				</div>
			</div>
			<!--=== End Mobile Navbar Section ===-->
		</div>
		<!--=== End Navbar Section ===-->

		<!--=== Start Banner Section ===-->
		<section class="hero-slider-area">
			<div class="hero-slider-wrap owl-carousel owl-theme">
				<div class="slider-item slider-item-bg-1">
					<div class="d-table">
						<div class="d-table-cell">
							<div class="container">
								<div class="slider-text one">
									<span class="up-title">Welcome To Toothst Template</span>
									<h1>SPECIALIZING COSMETIC MEDICAL SURGERY</h1>
									<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil architecto laborum eaque! Deserunt maxime, minus quas molestiae reiciendis.</p>

									<div class="slider-btn">
										<a class="main-btn" href="/dental-7/appointment">
											<span>Book An Appointment</span>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="slider-item slider-item-bg-2">
					<div class="d-table">
						<div class="d-table-cell">
							<div class="container">
								<div class="slider-text two">
									<span class="up-title">Welcome To Toothst Template</span>
									<h1>EXCEPTIONAL MEDICAL SPECIALTY HEALTHCARE</h1>
									<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil architecto laborum eaque! Deserunt maxime, minus quas molestiae reiciendis.</p>
									
									<div class="slider-btn">
										<a class="main-btn" href="/dental-7/appointment">
											<span>Book An Appointment</span>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!--=== End Banner Section ===-->

		<!--=== Start Services Section ===-->
		<section class="services-section pt-100 pb-70">
			<div class="container">
				<div class="main-section-title wow fadeInUp delay-0-2s">
					<span class="up-title">Our services</span>
					<h2>Our Services And Efforts To Solve Your Problem</h2>
				</div>

				<div class="row d-flex justify-content-center">
					<div class="col-lg-3 col-sm-6">
						<div class="main-services-box hover-style wow fadeInUp delay-0-2s">
							<div class="inner-border">
								<div class="icon">
									<img src="/dental-7/assets/images/icon/icon-1.svg" alt="Image">
								</div>
								<h3>
									<a href="/dental-7/single-services">Tooth Clean</a>
								</h3>
								<p>The history of dentistry is almost as ancient a the history of humanity and civilization dentistry</p>
								<a href="/dental-7/single-services" class="main-detail-btn">
									Learn More
									<i class="icofont-simple-right"></i>
								</a>
							</div>
						</div>
					</div>

					<div class="col-lg-3 col-sm-6">
						<div class="main-services-box hover-style wow fadeInUp delay-0-4s">
							<div class="inner-border">
								<div class="icon">
									<img src="/dental-7/assets/images/icon/icon-2.svg" alt="Image">
								</div>
								<h3>
									<a href="/dental-7/single-services">Root Canals</a>
								</h3>
								<p>The history of dentistry is almost as ancient a the history of humanity and civilization dentistry</p>
								<a href="/dental-7/single-services" class="main-detail-btn">
									Learn More
									<i class="icofont-simple-right"></i>
								</a>
							</div>
						</div>
					</div>

					<div class="col-lg-3 col-sm-6">
						<div class="main-services-box hover-style wow fadeInUp delay-0-6s">
							<div class="inner-border">
								<div class="icon">
									<img src="/dental-7/assets/images/icon/icon-3.svg" alt="Image">
								</div>
								<h3>
									<a href="/dental-7/single-services">Extractions</a>
								</h3>
								<p>The history of dentistry is almost as ancient a the history of humanity and civilization dentistry</p>
								<a href="/dental-7/single-services" class="main-detail-btn">
									Learn More
									<i class="icofont-simple-right"></i>
								</a>
							</div>
						</div>
					</div>

					<div class="col-lg-3 col-sm-6">
						<div class="main-services-box hover-style wow fadeInUp delay-0-8s">
							<div class="inner-border">
								<div class="icon">
									<img src="/dental-7/assets/images/icon/icon-4.svg" alt="Image">
								</div>
								<h3>
									<a href="/dental-7/single-services">Whitening</a>
								</h3>
								<p>The history of dentistry is almost as ancient a the history of humanity and civilization dentistry</p>
								<a href="/dental-7/single-services" class="main-detail-btn">
									Learn More
									<i class="icofont-simple-right"></i>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!--=== End Services Section ===-->

		<!--=== Start About Us Section ===-->
		<section class="about-us-section pb-100">
			<div class="container-fluid">
				<div class="row align-items-center">
					<div class="col-lg-6 ps-0">
						<div class="about-img me-15 wow fadeInUp delay-0-2s">
							<img src="/dental-7/assets/images/about-img.png" alt="Image">
						</div>
					</div>
					<div class="col-lg-6">
						<div class="about-content ms-15">
							<span class="up-title wow fadeInUp delay-0-2s">About Toothst</span>
							<h2 class="wow fadeInUp delay-0-4s">Why You Come To Our Toothst Dental Center</h2>
							<p class="wow fadeInUp delay-0-6s">A sealant is a liquid solution that is painted on to the biting surface of a clean tooth, and which sets as a durable plastic material It forms a physical barrier that stops food and other bacteria from collecting in the fissures liquid solution that is painted on to the biting.</p>

							<ul>
								<li class="hover-style wow fadeInUp delay-0-2s">
									<div class="inner-border">
										<i class="icofont-shield-alt"></i>
										Tooth decay that has caused a cavity 
									</div>
								</li>
								<li class="hover-style wow fadeInUp delay-0-4s">
									<div class="inner-border">
										<i class="icofont-shield-alt"></i>
										A sealant is a liquid solution that is painted
									</div>
								</li>
								<li class="hover-style wow fadeInUp delay-0-6s">
									<div class="inner-border">
										<i class="icofont-shield-alt"></i>
										The dentist or hygienist then cleans
									</div>
								</li>
								<li class="hover-style wow fadeInUp delay-0-8s">
									<div class="inner-border">
										<i class="icofont-shield-alt"></i>
										Your dentist will inspect each tooth using
									</div>
								</li>
							</ul>

							<a href="/dental-7/about-us" class="main-btn">
								<span>About Us</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!--=== End About Us Section ===-->

		<!--=== Start Doctors Section ===-->
		<section class="our-doctors-section pb-70">
			<div class="container">
				<div class="main-section-title wow fadeInUp delay-0-2s">
					<span class="up-title">Our Doctors</span>
					<h2>Our Experienced Physicians Strive For Improved Services</h2>
				</div>

				<div class="row justify-content-center">
					<div class="col-lg-4 col-sm-6">
						<div class="main-doctors-item hover-style wow fadeInUp delay-0-2s">
							<div class="inner-border">
								<div class="doctor-img">
									<img src="/dental-7/assets/images/doctors/doctor-1.jpg" alt="Image">
	
									<ul>
										<li>
											<a href="https://www.facebook.com/" target="_blank">
												<i class="icofont-facebook"></i>
											</a>
										</li>
										<li>
											<a href="https://www.twitter.com/" target="_blank">
												<i class="icofont-twitter"></i>
											</a>
										</li>
										<li>
											<a href="https://www.linkedin.com/" target="_blank">
												<i class="icofont-linkedin"></i>
											</a>
										</li>
										<li>
											<a href="https://www.instagram.com/" target="_blank">
												<i class="icofont-instagram"></i>
											</a>
										</li>
									</ul>
								</div>
								<h3>Jhun Dew</h3>
								<span>Registered Nurse</span>
							</div>
						</div>
					</div>

					<div class="col-lg-4 col-sm-6">
						<div class="main-doctors-item hover-style wow fadeInUp delay-0-4s">
							<div class="inner-border">
								<div class="doctor-img">
									<img src="/dental-7/assets/images/doctors/doctor-2.jpg" alt="Image">
	
									<ul>
										<li>
											<a href="https://www.facebook.com/" target="_blank">
												<i class="icofont-facebook"></i>
											</a>
										</li>
										<li>
											<a href="https://www.twitter.com/" target="_blank">
												<i class="icofont-twitter"></i>
											</a>
										</li>
										<li>
											<a href="https://www.linkedin.com/" target="_blank">
												<i class="icofont-linkedin"></i>
											</a>
										</li>
										<li>
											<a href="https://www.instagram.com/" target="_blank">
												<i class="icofont-instagram"></i>
											</a>
										</li>
									</ul>
								</div>
								<h3>Chel Smith</h3>
								<span>Physical Therapist</span>
							</div>
						</div>
					</div>

					<div class="col-lg-4 col-sm-6">
						<div class="main-doctors-item hover-style wow fadeInUp delay-0-6s">
							<div class="inner-border">
								<div class="doctor-img">
									<img src="/dental-7/assets/images/doctors/doctor-3.jpg" alt="Image">
	
									<ul>
										<li>
											<a href="https://www.facebook.com/" target="_blank">
												<i class="icofont-facebook"></i>
											</a>
										</li>
										<li>
											<a href="https://www.twitter.com/" target="_blank">
												<i class="icofont-twitter"></i>
											</a>
										</li>
										<li>
											<a href="https://www.linkedin.com/" target="_blank">
												<i class="icofont-linkedin"></i>
											</a>
										</li>
										<li>
											<a href="https://www.instagram.com/" target="_blank">
												<i class="icofont-instagram"></i>
											</a>
										</li>
									</ul>
								</div>
								<h3>Zeck Stret</h3>
								<span>Pharmacist</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			<img src="/dental-7/assets/images/doctor-shape.png" class="doctor-shape shape" alt="Image">
		</section>
		<!--=== End Doctors Section ===-->

		<!--=== Start Counter Section ===-->
		<section class="counter-section bg-color-ebeef5 pt-100 pb-70">
			<div class="container">
				<div class="row justify-content-center">
					<div class="col-lg-3 col-sm-6">
						<div class="main-counter-item wow fadeInUp delay-0-2s">
							<h2 class="counter">163</h2>
							<h3>Awards</h3>
						</div>
					</div>

					<div class="col-lg-3 col-sm-6">
						<div class="main-counter-item wow fadeInUp delay-0-4s">
							<h2 class="counter">20</h2>
							<h3>Qualified Staff</h3>
						</div>
					</div>

					<div class="col-lg-3 col-sm-6">
						<div class="main-counter-item wow fadeInUp delay-0-6s">
							<h2 class="counter">290</h2>
							<h2 class="point">+</h2>
							<h3>Happy Clients</h3>
						</div>
					</div>

					<div class="col-lg-3 col-sm-6">
						<div class="main-counter-item wow fadeInUp delay-0-8s">
							<h2 class="counter">781</h2>
							<h3>Qualified Staff</h3>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!--=== End Counter Section ===-->

		<!--=== Start Testimonials Section ===-->
		<section class="testimonials-section ptb-100">
			<div class="container">
				<div class="main-section-title wow fadeInUp delay-0-2s">
					<span class="up-title">Our Testimonials</span>
					<h2>Our Special Customers Says</h2>
				</div>

				<div class="owl-carousel owl-theme testimonials-slide">
					<div class="main-testimonials hover-style wow fadeInUp delay-0-2s">
						<div class="inner-border">
							<img src="/dental-7/assets/images/testimonials/testimonials-1.jpg" alt="Image">
						
							<div class="testimonials-content">
								<h3>Zeck Smith</h3>
								<span>App Developer</span>
								<p>“Your service is very good which has fascinated me. Hope to have good quality service soon”</p>
								<ul>
									<li>
										<i class="icofont-star"></i>
									</li>
									<li>
										<i class="icofont-star"></i>
									</li>
									<li>
										<i class="icofont-star"></i>
									</li>
									<li>
										<i class="icofont-star"></i>
									</li>
									<li>
										<i class="icofont-star"></i>
									</li>
								</ul>
							</div>
						</div>
					</div>

					<div class="main-testimonials hover-style wow fadeInUp delay-0-4s">
						<div class="inner-border">
							<img src="/dental-7/assets/images/testimonials/testimonials-2.jpg" alt="Image">
						
							<div class="testimonials-content">
								<h3>Juhon Smith</h3>
								<span>Web Designer</span>
								<p>“Your service is very good which has fascinated me. Hope to have good quality service soon”</p>
								<ul>
									<li>
										<i class="icofont-star"></i>
									</li>
									<li>
										<i class="icofont-star"></i>
									</li>
									<li>
										<i class="icofont-star"></i>
									</li>
									<li>
										<i class="icofont-star"></i>
									</li>
									<li>
										<i class="icofont-star"></i>
									</li>
								</ul>
							</div>
						</div>
					</div>

					<div class="main-testimonials hover-style wow fadeInUp delay-0-6s">
						<div class="inner-border">
							<img src="/dental-7/assets/images/testimonials/testimonials-3.jpg" alt="Image">
						
							<div class="testimonials-content">
								<h3>Steven Dew</h3>
								<span>UI/UX Designer</span>
								<p>“Your service is very good which has fascinated me. Hope to have good quality service soon”</p>
								<ul>
									<li>
										<i class="icofont-star"></i>
									</li>
									<li>
										<i class="icofont-star"></i>
									</li>
									<li>
										<i class="icofont-star"></i>
									</li>
									<li>
										<i class="icofont-star"></i>
									</li>
									<li>
										<i class="icofont-star"></i>
									</li>
								</ul>
							</div>
						</div>
					</div>

					<div class="main-testimonials hover-style wow fadeInUp delay-0-8s">
						<div class="inner-border">
							<img src="/dental-7/assets/images/testimonials/testimonials-4.jpg" alt="Image">
						
							<div class="testimonials-content">
								<h3>Anne Kew</h3>
								<span>Web Developer</span>
								<p>“Your service is very good which has fascinated me. Hope to have good quality service soon”</p>
								<ul>
									<li>
										<i class="icofont-star"></i>
									</li>
									<li>
										<i class="icofont-star"></i>
									</li>
									<li>
										<i class="icofont-star"></i>
									</li>
									<li>
										<i class="icofont-star"></i>
									</li>
									<li>
										<i class="icofont-star"></i>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>

			<img src="/dental-7/assets/images/testimonials/testimonials-shape.png" class="shape shape" alt="Image">
		</section>
		<!--=== End Testimonials Section ===-->

		<!--=== Start FAQ Section ===-->
		<section class="faq-section pb-100">
			<div class="container">
				<div class="main-section-title wow fadeInUp delay-0-2s">
					<span class="up-title">FAQ</span>
					<h2>Frequently Asked Questions</h2>
				</div>

				<div class="row">
					<div class="col-lg-6">
						<div class="faq-content mr-15 wow fadeInUp delay-0-4s">
							<div class="accordion" id="accordionExample">
								<div class="accordion-item">
									<h2 class="accordion-header" id="headingOne">
										<button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Which Is Correct FAQ Or FAQs?</button>
									</h2>
									<div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
										<div class="accordion-body">
											<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nihil eaque consequuntur tenetur cumque eveniet adipisci illo, accusantium suscipit optio autem excepturi magnam! A cum ipsam consectetur ex, tenetur recusandae.</p>
										</div>
									</div>
								</div>

								<div class="accordion-item">
									<h2 class="accordion-header" id="headingTwo">
										<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Do You Need An Apostrophe In Faqs?</button>
									</h2>
									<div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
										<div class="accordion-body">
											<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nihil eaque consequuntur tenetur cumque eveniet adipisci illo, accusantium suscipit optio autem excepturi magnam! A cum ipsam consectetur ex, tenetur recusandae.</p>
										</div>
									</div>
								</div>

								<div class="accordion-item">
									<h2 class="accordion-header" id="headingThree">
										<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">How Do You Use Faq?</button>
									</h2>
									<div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
										<div class="accordion-body">
											<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nihil eaque consequuntur tenetur cumque eveniet adipisci illo, accusantium suscipit optio autem excepturi magnam! A cum ipsam consectetur ex, tenetur recusandae.</p>
										</div>
									</div>
								</div>

								<div class="accordion-item">
									<h2 class="accordion-header" id="headingFour">
										<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">Why Showcases Expertise, Trust  Authority?</button>
									</h2>
									<div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
										<div class="accordion-body">
											<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nihil eaque consequuntur tenetur cumque eveniet adipisci illo, accusantium suscipit optio autem excepturi magnam! A cum ipsam consectetur ex, tenetur recusandae.</p>
										</div>
									</div>
								</div>
								
								<div class="accordion-item">
									<h2 class="accordion-header" id="headingFive">
										<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">What Does Q Stand For In Faq?</button>
									</h2>
									<div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
										<div class="accordion-body">
											<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nihil eaque consequuntur tenetur cumque eveniet adipisci illo, accusantium suscipit optio autem excepturi magnam! A cum ipsam consectetur ex, tenetur recusandae.</p>
										</div>
									</div>
								</div>

								<div class="accordion-item">
									<h2 class="accordion-header" id="headingSix">
										<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">Why Faq Pages Are A Priority?</button>
									</h2>
									<div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
										<div class="accordion-body">
											<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nihil eaque consequuntur tenetur cumque eveniet adipisci illo, accusantium suscipit optio autem excepturi magnam! A cum ipsam consectetur ex, tenetur recusandae.</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div class="col-lg-6">
						<div class="faq-img ms-15 wow fadeInUp delay-0-6s"></div>
					</div>
				</div>
			</div>

			<img src="/dental-7/assets/images/faq-shape-1.png" class="shape shape-1" alt="Image">
			<img src="/dental-7/assets/images/faq-shape-2.png" class="shape shape-2" alt="Image">
		</section>
		<!--=== End FAQ Section ===-->

		<!--=== Start Blog Section ===-->
		<section class="blog-section pb-100">
			<div class="container">
				<div class="main-section-title wow fadeInUp delay-0-2s">
					<span class="up-title">Our Blog</span>
					<h2>You Can Read The Blog To Know More About Us</h2>
				</div>

				<div class="blog-slide owl-carousel owl-theme">
					<div class="main-blog-item hover-style wow fadeInUp delay-0-2s">
						<div class="inner-border">
							<a href="/dental-7/single-blog" class="blog-img">
								<img src="/dental-7/assets/images/blog/blog-1.jpg" alt="Image">
							</a>

							<div class="blog-content">
								<span>October 26, 2017</span>
								<h3>
									<a href="/dental-7/single-blog">Dental Implants: Amazing Benefits For</a>
								</h3>

								<ul class="d-flex justify-content-between">
									<li>
										<a href="/dental-7/single-blog" class="main-detail-btn">
											Learn More
											<i class="icofont-simple-right"></i>
										</a>
									</li>
									<li>
										<a href="/dental-7/single-blog" class="author">
											<i class="icofont-user-alt-3"></i>
											By Irfan
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>

					<div class="main-blog-item hover-style wow fadeInUp delay-0-4s">
						<div class="inner-border">
							<a href="/dental-7/single-blog" class="blog-img">
								<img src="/dental-7/assets/images/blog/blog-2.jpg" alt="Image">
							</a>

							<div class="blog-content">
								<span>October 30, 2017</span>
								<h3>
									<a href="/dental-7/single-blog">Use Your Dental Benefit Before The End.</a>
								</h3>

								<ul class="d-flex justify-content-between">
									<li>
										<a href="/dental-7/single-blog" class="main-detail-btn">
											Learn More
											<i class="icofont-simple-right"></i>
										</a>
									</li>
									<li>
										<a href="/dental-7/single-blog" class="author">
											<i class="icofont-user-alt-3"></i>
											By Alex
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>

					<div class="main-blog-item hover-style wow fadeInUp delay-0-6s">
						<div class="inner-border">
							<a href="/dental-7/single-blog" class="blog-img">
								<img src="/dental-7/assets/images/blog/blog-3.jpg" alt="Image">
							</a>

							<div class="blog-content">
								<span>October 19, 2017</span>
								<h3>
									<a href="/dental-7/single-blog">Root Canal Vs. Tooth Extraction: What To</a>
								</h3>

								<ul class="d-flex justify-content-between">
									<li>
										<a href="/dental-7/single-blog" class="main-detail-btn">
											Learn More
											<i class="icofont-simple-right"></i>
										</a>
									</li>
									<li>
										<a href="/dental-7/single-blog" class="author">
											<i class="icofont-user-alt-3"></i>
											By Irfan
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>

					<div class="main-blog-item hover-style wow fadeInUp delay-0-8s">
						<div class="inner-border">
							<a href="/dental-7/single-blog" class="blog-img">
								<img src="/dental-7/assets/images/blog/blog-1.jpg" alt="Image">
							</a>

							<div class="blog-content">
								<span>October 26, 2017</span>
								<h3>
									<a href="/dental-7/single-blog">Dental Implants: Amazing Benefits For</a>
								</h3>

								<ul class="d-flex justify-content-between">
									<li>
										<a href="/dental-7/single-blog" class="main-detail-btn">
											Learn More
											<i class="icofont-simple-right"></i>
										</a>
									</li>
									<li>
										<a href="/dental-7/single-blog" class="author">
											<i class="icofont-user-alt-3"></i>
											By Irfan
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>

			<img src="/dental-7/assets/images/blog/blog-shape-1.png" class="shape shape-1" alt="Image">
			<img src="/dental-7/assets/images/blog/blog-shape-2.png" class="shape shape-2" alt="Image">
		</section>	
		<!--=== End Blog Section ===-->

		<!--=== Start Appointment Section ===-->
		<section class="appointment-section pb-100">
			<div class="container-fluid">
				<div class="row align-items-center">
					<div class="col-lg-6">
						<div class="appointment-content ms-15 wow fadeInUp delay-0-2s">
							<span class="up-title">Make An Appointment</span>
							<h2>Appointments Should Be Written In Your Planner</h2>
							<p>A sealant is a liquid solution that is painted on to the biting surface of a clean tooth, and which sets as a durable plastic material It forms a physical barrier that stops food and other bacteria from collecting in the fissures liquid solution that is painted on to the biting.</p>

							<form class="appointment-form">
								<div class="row">
									<div class="col-lg-6 col-sm-6">
										<div class="form-floating form-group">
											<input type="text" class="form-control" id="patientName" placeholder="Patient Name" value="" required="">
											<label for="patientName" class="form-label">Patient Name</label>
											<div class="invalid-feedback"> Valid patient name is required.</div>
										</div>
									</div>
									<div class="col-lg-6 col-sm-6">
										<div class="form-floating form-group">
											<input type="email" class="form-control" id="emailAddress" placeholder="Email Address" value="" required="">
											<label for="emailAddress" class="form-label">Email Address</label>
											<div class="invalid-feedback"> Valid email address is required.</div>
										</div>
									</div>
									<div class="col-lg-6 col-sm-6">
										<div class="form-floating form-group">
											<input type="text" class="form-control" id="phoneNumber" placeholder="Phone Number" value="" required="">
											<label for="phoneNumber" class="form-label">Phone Number</label>
											<div class="invalid-feedback"> Valid phone number is required.</div>
										</div>
									</div>
									<div class="col-lg-6 col-sm-6">
										<div class="form-group">
											<select class="form-select form-control" aria-label="Default select example">
												<option selected>Gender</option>
												<option value="1">Mail</option>
												<option value="2">Femail</option>
											</select>
										</div>
									</div>
									<div class="col-lg-6 col-sm-6">
										<div class="form-group">
											<input type="text" class="form-control" placeholder="Date">
										</div>
									</div>
									<div class="col-lg-6 col-sm-6">
										<div class="form-group">
											<select class="form-select form-control" aria-label="Default select example">
												<option selected>Department</option>
												<option value="1">Dental</option>
												<option value="2">Medical</option>
											</select>
										</div>
									</div>
									<div class="col-lg-12">
										<button type="submit" class="main-btn">
											<span>Submit</span>
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>

					<div class="col-lg-6 pe-0">
						<div class="appointment-img ms-15 wow fadeInUp delay-0-4s">
							<img src="/dental-7/assets/images/appointment-img.png" alt="Image">
						</div>
					</div>
				</div>
			</div>

			<img src="/dental-7/assets/images/appointment-shape.png" class="appointment-shape shape" alt="Image">
		</section>
		<!--=== End Appointment Section ===-->

		<!--=== Strat Subscribe Section ===-->
		<section class="subscribe-section bg-color-2668f5 ptb-100">
			<div class="container">
				<div class="row align-items-center">
					<div class="col-lg-6">
						<div class="subscribe-content wow fadeInUp delay-0-2s">
							<h2>Subscribe To Get The Latest News</h2>
						</div>
					</div>
					
					<div class="col-lg-6">
						<form class="form-floating form-group subscribe-form wow fadeInUp delay-0-4s">
							<input type="email" class="form-control" id="yourEmails" placeholder="Your Email" value="" required="">
							<label for="yourEmails" class="form-label">Your Email</label>
							<div class="invalid-feedback"> Valid your email address is required.</div>

							<button type="submit" class="main-btn">
								<span>Subscribe</span>
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
		<!--=== End Subscribe Section ===-->

		<!--=== Start Footer Section ===-->
		<section class="footer-section pt-100 pb-70">
			<div class="container">
				<div class="row">
					<div class="col-lg-3 col-sm-6">
						<div class="main-footer-item wow fadeInUp delay-0-2s">
							<a href="/dental-7" class="footer-logo">
								<img src="/dental-7/assets/images/logo.png" alt="Image">
							</a>
							<p>A sealant is a liquid solution that is painted on to the biting surface of a clean tooth, and which sets as liquid solution that.</p>

							<ul class="footer-social-link">
								<li>
									<a href="https://www.facebook.com/" target="_blank" class="hover-style">
										<span class="inner-border">
											<i class="icofont-facebook"></i>
										</span>
									</a>
								</li>
								<li>
									<a href="https://www.twitter.com/" target="_blank" class="hover-style">
										<span class="inner-border">
											<i class="icofont-twitter"></i>
										</span>
									</a>
								</li>
								<li>
									<a href="https://www.linkedin.com/" target="_blank" class="hover-style">
										<span class="inner-border">
											<i class="icofont-linkedin"></i>
										</span>
									</a>
								</li>
								<li>
									<a href="https://www.instagram.com/" target="_blank" class="hover-style">
										<span class="inner-border">
											<i class="icofont-instagram"></i>
										</span>
									</a>
								</li>
							</ul>
						</div>
					</div>

					<div class="col-lg-3 col-sm-6">
						<div class="main-footer-item wow fadeInUp delay-0-4s">
							<h3>Useful Link</h3>

							<ul class="useful-link">
								<li>
									<a href="/dental-7/about-us">About Us</a>
								</li>
								<li>
									<a href="/dental-7/services">Services</a>
								</li>
								<li>
									<a href="/dental-7/appointment">Appointment</a>
								</li>
								<li>
									<a href="/dental-7/blog">Blog</a>
								</li>
							</ul>
						</div>
					</div>

					<div class="col-lg-3 col-sm-6">
						<div class="main-footer-item wow fadeInUp delay-0-6s">
							<h3>Our Services</h3>

							<ul class="useful-link">
								<li>
									<a href="/dental-7/services">Services</a>
								</li>
								<li>
									<a href="/dental-7/pricing-plan">Pricing Plan</a>
								</li>
								<li>
									<a href="/dental-7/doctors">Doctors</a>
								</li>
								<li>
									<a href="/dental-7/testimonials">Testimonials</a>
								</li>
							</ul>
						</div>
					</div>

					<div class="col-lg-3 col-sm-6">
						<div class="main-footer-item wow fadeInUp delay-0-8s">
							<h3>Our Location</h3>

							<ul class="address-info">
								<li>
									<i class="icofont-location-pin"></i>
									USA Softball Hall Of Fame Stadium
								</li>
								<li>
									<i class="icofont-envelope"></i>
									<a href="mailto:toothst@gmail.com">toothst@gmail.com</a>
								</li>
								<li>
									<i class="icofont-envelope"></i>
									<a href="mailto:info@gmail.com">info@gmail.com</a>
								</li>
								<li>
									<i class="icofont-ui-call"></i>
									<a href="tel:+125748569">+12 574 8569</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!--=== End Footer Section ===-->

		<!--=== Start Copy Right Section ===-->
		<div class="copy-right-section">
			<div class="container">
				<div class="row">
					<div class="col-lg-8 col-md-7">
						<p>Copyright © <span>Toothst</span> Is Proudly Owned by <a href="https://croptheme.com/" target="_blank">Crop Theme</a></p>
					</div>
					<div class="col-lg-4 col-md-5">
						<ul>
							<li>
								<a href="/dental-7/terms-conditions">Terms & Condition</a>
							</li>
							<li>
								<a href="/dental-7/privacy-policy">Privacy Policy</a>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<!--=== Start back To Top Section ===-->
			<div class="back-to-top">
				<i class="icofont-simple-up"></i>
			</div>
			<!--=== End Back To Top Section ===-->
		</div>
		<!--=== End Copy Right Section ===-->

		<ul class="rtl-buy">
			<li>
				<a href="https://croptheme.com/tf/toothst/toothst-rtl/">RTL</a>
			</li>
			<li>
				<a href="https://themeforest.net/item/blad-ai-blood-donation-activism-campaign-html-template/41923002" target="_blank" class="bg-color">BUY</a>
			</li>
		</ul>

        <!--=== JS Link ===-->
         
        
		
		
		
        
        
        
        
		
    
    ` }} />
  );
}
