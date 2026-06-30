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
									<a href="#" class="nav-link dropdown-toggle active">
										Blog            
									</a>

									<ul class="dropdown-menu">
										<li class="nav-item">
											<a href="/dental-7/blog" class="nav-link">Blog Page</a>
										</li>
										<li class="nav-item">
											<a href="/dental-7/single-blog" class="nav-link active">Single Blog Page</a>
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
					<h2>Single Blog</h2>
					<ul>
						<li>
							<a href="/dental-7">Home</a>
						</li>
						<li>
							<span class="active">Single Blog</span>
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

		<!--=== Start Blog Details Section ===-->
		<section class="blog-details-area ptb-100">
			<div class="container">
				<div class="row">
					<div class="col-lg-4">
						<div class="sidebar-wrap me-15">
							<div class="main-sidebar-item recent-post">
								<h3>Recent Post</h3>

								<div class="main-recent-post-item">
									<a href="/dental-7/single-blog" class="post-img">
										<div class="main-img bg-1"></div>
									</a>
									<div class="post-info">
										<h4 class="post-title">
											<a href="/dental-7/single-blog">In The Past, Diseased Teeth Often Had To Be</a>
										</h4>
										<span class="date">
											<i class="icofont-calendar"></i>
											May 15, 2022
										</span>
									</div>
								</div>
								
								<div class="main-recent-post-item">
									<a href="/dental-7/single-blog" class="post-img">
										<div class="main-img bg-2"></div>
									</a>
									<div class="post-info">
										<h4 class="post-title">
											<a href="/dental-7/single-blog">Use Your Dental Benefit Before The</a>
										</h4>
										<span class="date">
											<i class="icofont-calendar"></i>
											May 20, 2022
										</span>
									</div>
								</div>

								<div class="main-recent-post-item">
									<a href="/dental-7/single-blog" class="post-img">
										<div class="main-img bg-3"></div>
									</a>
									<div class="post-info">
										<h4 class="post-title">
											<a href="/dental-7/single-blog">Have You Lost Most Or All Of Your Teeth?</a>
										</h4>
										<span class="date">
											<i class="icofont-calendar"></i>
											May 25, 2022
										</span>
									</div>
								</div>

								<div class="main-recent-post-item">
									<a href="/dental-7/single-blog" class="post-img">
										<div class="main-img bg-4"></div>
									</a>
									<div class="post-info">
										<h4 class="post-title">
											<a href="/dental-7/single-blog">You Should Visit The Dentist Every Six </a>
										</h4>
										<span class="date">
											<i class="icofont-calendar"></i>
											May 29, 2022
										</span>
									</div>
								</div>

								<div class="main-recent-post-item">
									<a href="/dental-7/single-blog" class="post-img">
										<div class="main-img bg-5"></div>
									</a>
									<div class="post-info">
										<h4 class="post-title">
											<a href="/dental-7/single-blog">Dental Implants: Amazing Benefits For</a>
										</h4>
										<span class="date">
											<i class="icofont-calendar"></i>
											May 30, 2022
										</span>
									</div>
								</div>
							</div>

							<div class="main-sidebar-item services-category">
								<h3>Our Category's</h3>

								<ul>
									<li>
										<a href="/dental-7/services">
											Tooth Clean
											<i class="icofont-simple-right"></i>
										</a>
									</li>
									<li>
										<a href="/dental-7/services">
											Root Canals
											<i class="icofont-simple-right"></i>
										</a>
									</li>
									<li>
										<a href="/dental-7/services">
											Dental Sealants
											<i class="icofont-simple-right"></i>
										</a>
									</li>
									<li>
										<a href="/dental-7/services">
											Whitening
											<i class="icofont-simple-right"></i>
										</a>
									</li>
									<li>
										<a href="/dental-7/services">
											Dental Bonding
											<i class="icofont-simple-right"></i>
										</a>
									</li>
									<li>
										<a href="/dental-7/services">
											Extractions
											<i class="icofont-simple-right"></i>
										</a>
									</li>
									<li>
										<a href="/dental-7/services">
											Dental Bonding
											<i class="icofont-simple-right"></i>
										</a>
									</li>
								</ul>
							</div>

							<div class="main-sidebar-item services-category">
								<h3>Archives</h3>

								<ul>
									<li>
										<a href="/dental-7/services">
											December 2020
											<span>(03)</span>
										</a>
									</li>
									<li>
										<a href="/dental-7/services">
											November 2020
											<span>(06)</span>
										</a>
									</li>
									<li>
										<a href="/dental-7/services">
											October 2020
											<span>(14)</span>
										</a>
									</li>
									<li>
										<a href="/dental-7/services">
											September 2020
											<span>(02)</span>
										</a>
									</li>
									<li>
										<a href="/dental-7/services">
											August 2020
											<span>(08)</span>
										</a>
									</li>
								</ul>
							</div>

							<div class="main-sidebar-item tag">
								<h3>Tags</h3>

								<ul>
									<li>
										<a href="/dental-7/services">
											Dental
										</a>
									</li>
									<li>
										<a href="/dental-7/services">
											Doctors
										</a>
									</li>
									<li>
										<a href="/dental-7/services">
											Tooth
										</a>
									</li>
									<li>
										<a href="/dental-7/services">
											Business
										</a>
									</li>
									<li>
										<a href="/dental-7/services">
											Hospital
										</a>
									</li>
									<li>
										<a href="/dental-7/services">
											Root Canals
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>

					<div class="col-lg-8">
						<div class="blog-details-content ms-15">
							<div class="blog-intro">
								<img src="/dental-7/assets/images/blog/blog-10.jpg" alt="Image">

								<ul class="admin">
									<li>
										<span>October 24, 2019</span>
									</li>
									<li>
										<a href="/dental-7/single-blog" class="author">
											By Irfan
										</a>
									</li>
								</ul>

								<h2>Unhappy With Your Smile Dentists Have An Array Of Tools</h2>
							</div>

							<p>Unhappy with your smile? Dentists have an array of tools and techniques at their disposal for improving the appearance of your smile. dental servicesIsaacson Gentle Dentistry, which is located in White Bear Lake, MN, offers a complete range of dental services. Dr. Daniel Isaacson and Dr. Mike Weisbrod are some</p>
							<p>Both root canals and extractions have numerous myths surrounding them. The myths have created a poor reputation for both dental care treatments. Realistically, each treatment is suitable</p>

							<div class="mb-gap-30"></div>

							<blockquote>
								What Are Dental Crowns? Dental crowns are a specific type of dental restoration designed to improve the function and appearance of teeth. What Are Dental Crowns? Dental crowns are a specific type of dental restoration designed  Dental crowns are a specific type of dental restoration
							</blockquote>

							<div class="mb-gap-30"></div>

							<div class="row">
								<div class="col-lg-4">
									<div class="main-blog-item-img">
										<img src="/dental-7/assets/images/blog/blog-1.jpg" alt="Image">
									</div>
								</div>
								<div class="col-lg-4">
									<div class="main-blog-item-img">
										<img src="/dental-7/assets/images/blog/blog-2.jpg" alt="Image">
									</div>
								</div>
								<div class="col-lg-4">
									<div class="main-blog-item-img">
										<img src="/dental-7/assets/images/blog/blog-3.jpg" alt="Image">
									</div>
								</div>
							</div>

							<p>Dentists have an array of tools and techniques at their disposal for improving the appearance of your smile. dental servicesIsaacson Gentle Dentistry, which is located in White Bear</p>

							<ul class="fe-list">
								<li>
									<span>1</span>
									Both root canals and extractions have numerous myths surrounding them. The myths have created a poor reputation for both dental care treatments. Realistically, each treatment is suitable
								</li>
								<li>
									<span>2</span>
									What Are Dental Crowns? Dental crowns are a specific type of dental restoration designed to improve the function and appearance of teeth. Crowns are made
								</li>
								<li>
									<span>3</span>
									Fluoride treatments are common in dental offices, public health centers, and schools. Although fluoride has largely been accepted as a dental treatment
								</li>
								<li>
									<span>4</span>
									Bad breath is among the most common complaints of children and adults. One estimate suggests that up to 30% of adults complain of having bad breath. Could tonsil stones be the culprit
								</li>
							</ul>

							<div class="tag-socila d-flex justify-content-between align-items-center">
								<ul class="tag">
									<li>
										<span>Tags:</span>
									</li>
									<li>
										<a href="#">Most</a>
									</li>
									<li>
										<a href="#">Health</a>
									</li>
									<li>
										<a href="#">Crowns</a>
									</li>
									<li>
										<a href="#">Both</a>
									</li>
								</ul>
								<ul class="social">
									<li>
										<span>Social:</span>
									</li>
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

							<div class="comment-wrap">
								<h3>3 Comments</h3>
								<ul>
									<li>
										<img src="/dental-7/assets/images/blog/comment-1.jpg" alt="Image">
										<h4>Alex Dew</h4>
										<span>February 29, 2012</span>
										<p>Your smile is part of your personality. It defines you. That’s why it’s so important to take good care of your teeth and gums. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit labore saepe harum, impedit officia libero nulla adipisci magni rem blanditiis deleniti corporis inventore explicabo quisquam eveniet doloribus tempore.</p>
										<a href="#" class="replay">Replay</a>
									</li>
									<li>
										<img src="/dental-7/assets/images/blog/comment-2.jpg" alt="Image">
										<h4>Juhon</h4>
										<span>February 29, 2012</span>
										<p>Your smile is part of your personality. It defines you. That’s why it’s so important to take good care of your teeth and gums. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit labore saepe harum, impedit officia libero nulla adipisci magni rem blanditiis deleniti corporis inventore explicabo quisquam eveniet doloribus tempore.</p>
										<a href="#" class="replay">Replay</a>
									</li>
									<li>
										<img src="/dental-7/assets/images/blog/comment-3.jpg" alt="Image">
										<h4>Anne Dew</h4>
										<span>February 29, 2012</span>
										<p>Your smile is part of your personality. It defines you. That’s why it’s so important to take good care of your teeth and gums. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit labore saepe harum, impedit officia libero nulla adipisci magni rem blanditiis deleniti corporis inventore explicabo quisquam eveniet doloribus tempore.</p>
										<a href="#" class="replay">Replay</a>
									</li>
								</ul>
							</div>

							<div class="leave-replay">
								<h3>Leave a Reply</h3>

								<form>
									<div class="row">
										<div class="col-lg-6">
											<div class="form-floating form-group">
												<input type="text" class="form-control" id="yourName" placeholder="Your Name" value="" required="">
												<label for="yourName" class="form-label">Your Name</label>
												<div class="invalid-feedback"> Valid patient your name is required.</div>
											</div>
										</div>
										<div class="col-lg-6">
											<div class="form-floating form-group">
												<input type="email" class="form-control" id="yourEmail" placeholder="Your Email" value="" required="">
												<label for="yourEmail" class="form-label">Your Email</label>
												<div class="invalid-feedback"> Valid your email address is required.</div>
											</div>
										</div>
										<div class="col-lg-6">
											<div class="form-floating form-group">
												<input type="text" class="form-control" id="yourPhone" placeholder="Your Phone" value="" required="">
												<label for="yourPhone" class="form-label">Your Phone</label>
												<div class="invalid-feedback"> Valid your phone number is required.</div>
											</div>
										</div>
										<div class="col-lg-6">
											<div class="form-floating form-group">
												<input type="text" class="form-control" id="yourWebsiteurl" placeholder="Your Website URL" value="" required="">
												<label for="yourWebsiteurl" class="form-label">Your Website URL</label>
												<div class="invalid-feedback"> Valid your website number is required.</div>
											</div>
										</div>
										<div class="col-lg-12">
											<div class="form-floating form-group">
												<textarea class="form-control textarea" cols="30" rows="5" placeholder="Write Your Message Here" id="message"></textarea>
												<label for="message" class="form-label">Write Your Message Here</label>
												<div class="invalid-feedback"> Valid Write Your Message Here is required.</div>
											</div>
										</div>
										<div class="col-lg-12">
											<div class="form-group">
												<div class="form-check">
													<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
													<label class="form-check-label" for="flexCheckDefault">
														Save my name and email in this browser for the next time I comment.
													</label>
												</div>
											</div>
										</div>
										<div class="col-lg-12">
											<button type="submit" class="main-btn">
												<span>Post A Comment</span>
											</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!--=== End Blog Details Section ===-->

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
