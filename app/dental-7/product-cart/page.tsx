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
									<a href="#" class="nav-link dropdown-toggle active">
										Shop             
									</a>

									<ul class="dropdown-menu">
										<li class="nav-item">
											<a href="/dental-7/products" class="nav-link">Products Page</a>
										</li>
										<li class="nav-item">
											<a href="/dental-7/product-cart" class="nav-link active">Products Cart Page</a>
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
					<h2>Shop Cart</h2>
					<ul>
						<li>
							<a href="/dental-7">Home</a>
						</li>
						<li>
							<span class="active">Shop Cart</span>
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

		<!--=== Start Shopping Cart Section ===-->
		<section class="shopping-cart-area ptb-100">
			<div class="container">
				<div class="row">
					<div class="col-lg-8">
						<form class="shopping-cart">
							<div class="text-center table-responsive">
								<table class="table table-bordered">
									<thead>
										<tr>
											<th class="text-start" scope="col">Product</th>
											<th scope="col">Price</th>
											<th scope="col">Quantity</th>
											<th scope="col">Total</th>
											<th scope="col">Remove</th>
										</tr>
									</thead> 
																			
									<tbody>
										<tr>
											<td class="cart-thumbnail d-flex flex-row align-items-center">
												<a href="/dental-7/product-details">
													<img src="/dental-7/assets/images/products/product-1.jpg" alt="Image">
												</a>
												<div class="ms-4">
													<a href="/dental-7/product-details">Pressure Machine</a>
													<span>Color: White</span>
													<span>Size: 300</span>
												</div>
											</td>
		
											<td class="cart-price">
												<span class="amount"><del>$500.00</del></span>
												<span class="amount">$450.00</span>
											</td>
		
											<td class="cart-quantity">
												<div class="quantity-input">
													<div class="minus">
														<i class="icofont-minus"></i>
													</div>

													<input class="form-control box" type="text" placeholder="" aria-label="default input example" value="1">

													<div class="plus">
														<i class="icofont-plus"></i>
													</div>
												</div>
											</td>
		
											<td class="cart-total-price">
												<span class="total-price">$450.00</span>
											</td>
		
											<td class="product-delete">
												<a href="#" class="delete">
													<i class="icofont-ui-delete"></i>
												</a>
											</td>
										</tr>

										<tr>
											<td class="cart-thumbnail d-flex flex-row align-items-center">
												<a href="/dental-7/product-details">
													<img src="/dental-7/assets/images/products/product-2.jpg" alt="Image">
												</a>
												<div class="ms-4">
													<a href="/dental-7/product-details">LCD Thermometer</a>
													<span>Color: White & Green</span>
													<span>Size: 150</span>
												</div>
											</td>
		
											<td class="cart-price">
												<span class="amount">$500.00</span>
											</td>
		
											<td class="cart-quantity">
												<div class="quantity-input">
													<div class="minus">
														<i class="icofont-minus"></i>
													</div>

													<input class="form-control box" type="text" placeholder="" aria-label="default input example" value="1">

													<div class="plus">
														<i class="icofont-plus"></i>
													</div>
												</div>
											</td>
		
											<td class="cart-total-price">
												<span class="total-price">$500.00</span>
											</td>
		
											<td class="product-delete">
												<a href="#" class="delete">
													<i class="icofont-ui-delete"></i>
												</a>
											</td>
										</tr>

										<tr>
											<td class="cart-thumbnail d-flex flex-row align-items-center">
												<a href="/dental-7/product-details">
													<img src="/dental-7/assets/images/products/product-3.jpg" alt="Image">
												</a>
												<div class="ms-4">
													<a href="/dental-7/product-details">Medicine</a>
													<span>Color: Black</span>
													<span>Size: 400</span>
												</div>
											</td>
		
											<td class="cart-price">
												<span class="amount"><del>$150.00</del></span>
												<span class="amount">$100.00</span>
											</td>
		
											<td class="cart-quantity">
												<div class="quantity-input">
													<div class="minus">
														<i class="icofont-minus"></i>
													</div>

													<input class="form-control box" type="text" placeholder="" aria-label="default input example" value="1">

													<div class="plus">
														<i class="icofont-plus"></i>
													</div>
												</div>
											</td>
		
											<td class="cart-total-price">
												<span class="total-price">$100.00</span>
											</td>
		
											<td class="product-delete">
												<a href="#" class="delete">
													<i class="icofont-ui-delete"></i>
												</a>
											</td>
										</tr>

										<tr>
											<td class="cart-thumbnail d-flex flex-row align-items-center">
												<a href="/dental-7/product-details">
													<img src="/dental-7/assets/images/products/product-4.jpg" alt="Image">
												</a>
												<div class="ms-4">
													<a href="/dental-7/product-details">Thermometer</a>
													<span>Color: White & blue</span>
													<span>Size: 250</span>
												</div>
											</td>
		
											<td class="cart-price">
												<span class="amount"><del>$500.00</del></span>
												<span class="amount">$300.00</span>
											</td>
		
											<td class="cart-quantity">
												<div class="quantity-input">
													<div class="minus">
														<i class="icofont-minus"></i>
													</div>

													<input class="form-control box" type="text" placeholder="" aria-label="default input example" value="1">

													<div class="plus">
														<i class="icofont-plus"></i>
													</div>
												</div>
											</td>
		
											<td class="cart-total-price">
												<span class="total-price">$300.00</span>
											</td>
		
											<td class="product-delete">
												<a href="#" class="delete">
													<i class="icofont-ui-delete"></i>
												</a>
											</td>
										</tr>

										<tr>
											<td class="cart-thumbnail d-flex flex-row align-items-center">
												<a href="/dental-7/product-details">
													<img src="/dental-7/assets/images/products/product-5.jpg" alt="Image">
												</a>
												<div class="ms-4">
													<a href="/dental-7/product-details">Safety Masks</a>
													<span>Color: Blue</span>
													<span>Size: 100</span>
												</div>
											</td>
		
											<td class="cart-price">
												<span class="amount">$40.00</span>
											</td>
		
											<td class="cart-quantity">
												<div class="quantity-input">
													<div class="minus">
														<i class="icofont-minus"></i>
													</div>

													<input class="form-control box" type="text" placeholder="" aria-label="default input example" value="1">

													<div class="plus">
														<i class="icofont-plus"></i>
													</div>
												</div>
											</td>
		
											<td class="cart-total-price">
												<span class="total-price">$40.00</span>
											</td>
		
											<td class="product-delete">
												<a href="#" class="delete">
													<i class="icofont-ui-delete"></i>
												</a>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</form>
		
						<form class="coupon-form">
							<div class="row">
								<div class="col-lg-8 col-md-7">
									<div class="form-floating input-group">
										<input type="url" class="form-control" placeholder="Enter promo code" id="seo-check">
										<label for="seo-check">Enter promo code</label>
										<button class="main-btn" type="button">
											<span>Apply</span>
										</button>
									</div>
								</div>
		
								<div class="col-lg-4 col-md-5 text-end">
									<button class="main-btn update">
										<span>Update Cart</span>
									</button>
								</div>
							</div>
						</form>
					</div>

					<div class="col-lg-4">
						<div class="your-order">
							<h3>Order Summary</h3>
							<ul>
								<li>Subtotal <span>$1390.00</span></li>
								<li>Discount (10%) <span class="discount">-$139.00</span></li>
								<li>Shipping <span>$10.00</span></li>
								<li>Total <span>$196.00</span></li>
								<li class="total-amount">Grand Total <span>1241</span></li>
							</ul>
							<a href="/dental-7/checkout" class="main-btn">
								<span>Proceed To Checkout</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!--=== End Shopping Cart Section ===-->

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
