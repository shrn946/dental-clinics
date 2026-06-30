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
									<a href="#" class="nav-link dropdown-toggle active">
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
											<a href="/dental-7/single-services" class="nav-link active">Single Services Page</a>
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
					<h2>Single Services</h2>
					<ul>
						<li>
							<a href="/dental-7">Home</a>
						</li>
						<li>
							<span class="active">Single Services</span>
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

		<!--=== Start Services Details Section ===-->
		<section class="services-details-area ptb-100">
			<div class="container">
				<div class="row">
					<div class="col-lg-4">
						<div class="sidebar-wrap me-15">
							<div class="main-sidebar-item services-category">
								<h3>Our Services</h3>

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
									<li>
										<a href="/dental-7/services" class="text-center">
											View All
										</a>
									</li>
								</ul>
							</div>

							<div class="main-sidebar-item work-time">
								<h3>Work Time</h3>

								<ul>
									<li>
										Mon - Thu
										<span>08:00 - 21:00</span>
									</li>
									<li>
										Friday
										<span>09:00 - 20:00</span>
									</li>
									<li>
										Saturday
										<span>09:00 - 20:00</span>
									</li>
								</ul>
							</div>

							<div class="main-sidebar-item contact-us">
								<h3>Contact Us</h3>

								<div class="row">
									<div class="col-lg-12 col-sm-6">
										<div class="form-floating form-group">
											<input type="text" class="form-control" id="yourName" placeholder="Your Name" value="" required="">
											<label for="yourName" class="form-label">Your Name</label>
											<div class="invalid-feedback"> Valid patient your name is required.</div>
										</div>
									</div>
									<div class="col-lg-12 col-sm-6">
										<div class="form-floating form-group">
											<input type="email" class="form-control" id="yourEmail" placeholder="Your Email" value="" required="">
											<label for="yourEmail" class="form-label">Your Email</label>
											<div class="invalid-feedback"> Valid your email address is required.</div>
										</div>
									</div>
									<div class="col-lg-12 col-sm-6">
										<div class="form-floating form-group">
											<input type="text" class="form-control" id="yourPhone" placeholder="Your Phone" value="" required="">
											<label for="yourPhone" class="form-label">Your Phone</label>
											<div class="invalid-feedback"> Valid your phone number is required.</div>
										</div>
									</div>
									<div class="col-lg-12 col-sm-6">
										<div class="form-floating form-group">
											<input type="text" class="form-control" id="yourSubject" placeholder="Your Subject" value="" required="">
											<label for="yourSubject" class="form-label">Your Contact Subject</label>
											<div class="invalid-feedback"> Valid your subject number is required.</div>
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
										<button type="submit" class="main-btn">
											<span>Send Message</span>
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div class="col-lg-8">
						<div class="services-details-content ms-15">
							<div class="services-img-1">
								<img src="/dental-7/assets/images/services/services-1.jpg" alt="Image">
							</div>
							<h3>Dental Sealants</h3>
							<p>Unhappy with your smile? Dentists have an array of tools and techniques at their disposal for improving the appearance of your smile. dental servicesIsaacson Gentle Dentistry, which is located in White Bear Lake, MN, offers a complete range of dental services. Dr. Daniel Isaacson and Dr. Mike Weisbrod are some of the finest dentists in White Bear Lake, MN. Here are twelve common dental services that you should know about ffers a complete range of dental services. Dr. Daniel.</p>
							<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati eos maxime, saepe unde omnis quidem accusantium ut at aut odio ex perspiciatis dicta voluptas, quia facere deserunt vel doloremque eligendi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi eius obcaecati ab. Accusantium voluptas maiores vero. Mollitia quae minus praesentium cumque debitis nobis nesciunt aliquid iure? Fugiat architecto numquam tenetur amet consectetur adipisicing elit. Obcaecati eos maxime.</p>
							<h4>Watch The Sealants Video</h4>
							<div class="services-img-1">
								<img src="/dental-7/assets/images/services/services-2.jpg" alt="Image">

								<div class="video-btn">
									<a href="https://www.youtube.com/watch?v=d4V3qheys0s&amp;ab_channel=BlueSkyBio" class="popup-youtube">
										<span><i class="icofont-ui-play"></i></span>
									</a>
								</div>
							</div>
							<h4>Advantages Dental Sealants</h4>
							<p>Dentists have an array of tools and techniques at their disposal for improving the appearance of your smile. dental servicesIsaacson Gentle Dentistry, which is located in White Bear</p>

							<ul>
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

							<h4>Why Do Dental Sealant</h4>
							<p>The end of another year is upon us. But before you prepare to ring in the new year, glance over your dental insurance plan. For many patients, prepaid dental benefits often go unused sit amet consectetur adipisicing elit. Obcaecati eos maxim.</p>

							<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati eos maxime, saepe unde omnis quidem accusantium ut at aut odio ex perspiciatis dicta voluptas, quia facere deserunt vel doloremque eligendi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi eius obcaecati ab. Accusantium voluptas maiores vero. Mollitia quae minus praesentium cumque debitis nobis nesciunt aliquid iure? Fugiat architecto numquam tenetur amet consectetur adipisicing elit. Obcaecati eos maxime.</p>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!--=== End Services Details Section ===-->

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
