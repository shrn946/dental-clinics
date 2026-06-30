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
									<a href="#" class="nav-link dropdown-toggle">
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
											<a href="/dental-7/home-4" class="nav-link">Home Page Four</a>
										</li>
									</ul>
								</li>

								<li class="nav-item">
									<a href="/dental-7/about-us" class="nav-link">About Us</a>
								</li>

								<li class="nav-item">
									<a href="#" class="nav-link dropdown-toggle active">
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
											<a href="/dental-7/faq" class="nav-link active">FAQ Page</a>
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

		<!--=== Start Page Banner Section ===-->
		<section class="page-banner-section bg-color-ebeef5 ptb-100">
			<div class="container">
				<div class="page-banner-content">
					<h2>FAQ</h2>
					<ul>
						<li>
							<a href="/dental-7">Home</a>
						</li>
						<li>
							<span class="active">FAQ</span>
						</li>
					</ul>
				</div>
			</div>
			<div class="page-banner-shape-1 shape">
				<img src="/dental-7/assets/images/banner/banner-shape-1.png" alt="Image">
			</div>
			<div class="page-banner-shape-2 shape">
				<img src="/dental-7/assets/images/banner/banner-shape-1.png" alt="Image">
			</div>
		</section>
		<!--=== End Page Banner Section ===-->

		<!--=== Start FAQ Section ===-->
		<section class="faq-section ptb-100">
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

		<!--=== Start Subscribe Section ===-->
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
