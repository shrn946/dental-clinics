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
											<a href="/dental-7/product-cart" class="nav-link">Products Cart Page</a>
										</li>
										<li class="nav-item">
											<a href="/dental-7/checkout" class="nav-link">Checkout Page</a>
										</li>
										<li class="nav-item">
											<a href="/dental-7/product-details" class="nav-link active">Products Details Page</a>
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
					<h2>Product Details</h2>
					<ul>
						<li>
							<a href="/dental-7">Home</a>
						</li>
						<li>
							<span class="active">Product Details</span>
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

		<!--=== Start Product Details Section ===-->
		<div class="product-details-area default-shape bg-color-linear-3 ptb-100">
			<div class="container">
				<div class="row align-items-center">
					<div class="col-lg-6">
						<div class="product-main-image">
							<img src="/dental-7/assets/images/products/product-1.jpg" alt="Image">
						</div>
					</div>

					<div class="col-lg-6">
						<div class="product-details-main-content">
							<h3>Digital Pressure Machine</h3>
							<div class="old-recent-price">
								<span><del>$500.00</del> $450.00</span>
							</div>
							<span class="stock">In Stock</span>

							<div class="client-review">
								<div class="rating">
									<i class="icofont-star"></i>
									<i class="icofont-star"></i>
									<i class="icofont-star"></i>
									<i class="icofont-star"></i>
									<i class="icofont-star"></i>
								</div>
								<a href="/dental-7/product-details" class="total-reviews">(6 Reviews)</a>
							</div>

							<p>Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Duis mollis, est non commodo luctus. Nulla vitae elit libero pharetra augue. Donec id elit non mi porta gravida at eget metus.</p>

							<fieldset class="choose-size">
								<h4 class="mb-3">Choose A Size</h4>
								<label for="size-xs">
									<input type="radio" name="sizes" id="size-xs" checked="">
									<span>XS</span>
								</label>
								<label for="size-s">
									<input type="radio" name="sizes" id="size-s">
									<span>S</span>
								</label>
								<label for="size-m">
									<input type="radio" name="sizes" id="size-m">
									<span>M</span>
								</label>
								<label for="size-l">
									<input type="radio" name="sizes" id="size-l">
									<span>L</span>
								</label>
								<label for="size-xl">
									<input type="radio" name="sizes" id="size-xl">
									<span>XL</span>
								</label>
							</fieldset>

							<fieldset class="choose-color">
								<h4 class="mb-3">Choose A Color</h4>

								<input type="radio" name="color" id="red" value="red" />
								<label for="red"><span class="red"></span></label>

								<input type="radio" name="color" id="green" />
								<label for="green"><span class="green"></span></label>

								<input type="radio" name="color" id="yellow" />
								<label for="yellow"><span class="yellow"></span></label>

								<input type="radio" name="color" id="olive" />
								<label for="olive"><span class="olive"></span></label>

								<input type="radio" name="color" id="orange" />
								<label for="orange"><span class="orange"></span></label>

								<input type="radio" name="color" id="teal" />
								<label for="teal"><span class="teal"></span></label>

								<input type="radio" name="color" id="blue" />
								<label for="blue"><span class="blue"></span></label>

								<input type="radio" name="color" id="violet" />
								<label for="violet"><span class="violet"></span></label>

								<input type="radio" name="color" id="purple" />
								<label for="purple"><span class="purple"></span></label>

								<input type="radio" name="color" id="pink" />
								<label for="pink"><span class="pink"></span></label>
							</fieldset>

							<ul class="quantity-add-wish d-flex align-items-center">
								<li>
									<div class="cart-quantity">
										<div class="quantity-input">
											<div class="minus">
												<i class="icofont-minus"></i>
											</div>
	
											<input class="form-control box" type="text" placeholder="" aria-label="default input example" value="1">
	
											<div class="plus">
												<i class="icofont-plus"></i>
											</div>
										</div>
									</div>
								</li>

								<li>
									<button type="submit" class="main-btn">
										<span>Add To Cart</span>
									</button>
								</li>

								<li>
									<button type="submit" class="main-btn">
										<span>Wishlist</span>
									</button>
								</li>
							</ul>
						</div>
					</div>

					<div class="col-lg-12 col-md-12">
						<div class="tab product-details-tab pt-100">
							<ul class="nav nav-tabs" id="myTab" role="tablist">
								<li class="nav-item" role="presentation">
									<button class="nav-link active" id="description-tab" data-bs-toggle="tab" data-bs-target="#description" type="button" role="tab" aria-controls="description" aria-selected="true">Description</button>
								</li>
								<li class="nav-item" role="presentation">
									<button class="nav-link" id="additional-tab" data-bs-toggle="tab" data-bs-target="#additional" type="button" role="tab" aria-controls="additional" aria-selected="true">Additional info</button>
								</li>
								<li class="nav-item" role="presentation">
									<button class="nav-link" id="instuctions-tab" data-bs-toggle="tab" data-bs-target="#instuctions" type="button" role="tab" aria-controls="instuctions" aria-selected="true">Care Instructions</button>
								</li>
								<li class="nav-item" role="presentation">
									<button class="nav-link" id="reviews-tab" data-bs-toggle="tab" data-bs-target="#reviews" type="button" role="tab" aria-controls="reviews" aria-selected="false">Reviews <span>(6)</span></button>
								</li>
							</ul>

							<div class="tab-content" id="myTabContent">
								<div class="tab-pane fade show active" id="description" role="tabpanel" aria-labelledby="description-tab">
									<div class="product-details-description-content">
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adlino minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto mollitia inventore facilis quidem odit magnam dolores saepe fuga distinctio ex perspiciatis cum doloremque asperiores sunt quasi sapiente consectetur, pariatur repellendus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, quibusdam aut eveniet ducimus repellendus suscipit ipsam harum molestias neque similique nisi asperiores tempora? Commodi, nemo alias! Distinctio ad inventore possimus. ipsum dolor sit amet consectetur adipisicing elit. Iusto mollitia inventore facilis  perspiciatis cum doloremque asperiores sunt</p>

										<h4 class="mt-4">Best Product:</h4>
										<p class="mb-4">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adlino minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit corporis voluptates ullam, amet nihil, magni consequatur repellendus, distinctio debitis saepe non ut explicabo voluptate quae accusamus dolores soluta beatae officia.</p>

										<div class="row justify-content-center">
											<div class="col-lg-4 col-sm-4">
												<div class="best-product">
													<img src="/dental-7/assets/images/products/product-1.jpg" alt="Image">
												</div>
											</div>
											<div class="col-lg-4 col-sm-4">
												<div class="best-product">
													<img src="/dental-7/assets/images/products/product-2.jpg" alt="Image">
												</div>
											</div>
											<div class="col-lg-4 col-sm-4">
												<div class="best-product">
													<img src="/dental-7/assets/images/products/product-3.jpg" alt="Image">
												</div>
											</div>
										</div>

										<p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adlino minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates quisquam accusamus deserunt tenetur error hic distinctio quidem asperiores dolores. Esse vel ut corrupti natus! Temporibus laudantium in tempore blanditiis doloribus!</p>
									</div>
								</div>

								<div class="tab-pane fade" id="additional" role="tabpanel" aria-labelledby="additional-tab">
									<div class="product-additional-info">
										<div class="table-responsive">
											<table class="table info-table">
												<tbody>
													<tr>
														<td>Specialty</td>
														<td>Themeforest</td>
													</tr>
													<tr>
														<td>Ingredient Type</td>
														<td>Themeforest</td>
													</tr>
													<tr>
														<td>Brand</td>
														<td>Crop Theme</td>
													</tr>
													<tr>
														<td>Package Information</td>
														<td>Box</td>
													</tr>
													<tr>
														<td>Manufacturer</td>
														<td>Prayagh Nutri Product Crop Theme Ltd</td>
													</tr>
													<tr>
														<td>Item part number</td>
														<td>LE 014 - 20pcs Crème Bakes (Pack of 2)</td>
													</tr>
													<tr>
														<td>Net Quantity</td>
														<td>40.00 count</td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
								</div>

								<div class="tab-pane fade" id="instuctions" role="tabpanel" aria-labelledby="instuctions-tab">
									<div class="product-instructions-info">
										<ul>
											<li>
												Store cream Pressure Machine in a refrigerator. Fondant Pressure Machine should be stored in an air conditioned environment.
											</li>
											<li>
												Slice and serve the Pressure Machine at room temperature and make sure it is not exposed to heat.
											</li>
											<li>
												Use a serrated knife to cut a fondant Pressure Machine.
											</li>
											<li>
												Sculptural elements and figurines may contain wire supports or toothpicks or wooden skewers for support.
											</li>
											<li>
												Please check the placement of these items before serving to small children.
											</li>
											<li>
												The Pressure Machine should be consumed within 24 hours.
											</li>
											<li>
												Enjoy your Pressure Machine!
											</li>
										</ul>
									</div>
								</div>

								<div class="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
									<div class="product-review-content">
										<div class="row">
											<div class="col-lg-6">
												<div class="review-progress-wrap">
													<h3>Customer reviews</h3>

													<ul class="total-review">
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

													<div class="progresss-bar">
														<span class="star">5 Star</span>
														<div class="progress">
															<div class="progress-bar bg-success" role="progressbar" aria-label="Success example" style="width: 90%" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
														</div>
														<span class="count">90</span>
													</div>

													<div class="progresss-bar">
														<span class="star">4 Star</span>
														<div class="progress">
															<div class="progress-bar bg-success" role="progressbar" aria-label="Success example" style="width: 70%" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
														</div>
														<span class="count">70</span>
													</div>

													<div class="progresss-bar">
														<span class="star">3 Star</span>
														<div class="progress">
															<div class="progress-bar bg-success" role="progressbar" aria-label="Success example" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
														</div>
														<span class="count">50</span>
													</div>

													<div class="progresss-bar">
														<span class="star">2 Star</span>
														<div class="progress">
															<div class="progress-bar bg-success" role="progressbar" aria-label="Success example" style="width: 30%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
														</div>
														<span class="count">30</span>
													</div>

													<div class="progresss-bar">
														<span class="star">1 Star</span>
														<div class="progress">
															<div class="progress-bar bg-success" role="progressbar" aria-label="Success example" style="width: 10%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
														</div>
														<span class="count">10</span>
													</div>
												</div>
											</div>

											<div class="col-lg-6">
												<div class="product-review-form">
													<form>
														<div class="row">
															<div class="col-lg-6">
																<div class="form-floating">
																	<input type="text" class="form-control" id="firstName" placeholder="First name" value="" required="">
																	<label for="firstName" class="form-label">First name</label>
																	<div class="invalid-feedback"> Valid first name is required.</div>
																</div>
															</div>
															<div class="col-lg-6">
																<div class="form-floating">
																	<input type="text" class="form-control" id="lastName" placeholder="Last name" value="" required="">
																	<label for="lastName" class="form-label">Last name</label>
																	<div class="invalid-feedback"> Valid Last name is required.</div>
																</div>
															</div>
															<div class="col-lg-6">
																<div class="form-floating">
																	<input type="email" class="form-control" id="email" placeholder="Email" value="" required="">
																	<label for="email" class="form-label">Email</label>
																	<div class="invalid-feedback"> Valid Email is required.</div>
																</div>
															</div>
															<div class="col-lg-6">
																<div class="form-floating">
																	<input type="text" class="form-control" id="review" placeholder="Review Title" value="" required="">
																	<label for="review" class="form-label">Review Title</label>
																	<div class="invalid-feedback"> Valid review is required.</div>
																</div>
															</div>
															<div class="col-lg-12">
																<div class="form-floating"><grammarly-extension data-grammarly-shadow-root="true" style="position: absolute; top: 0px; left: 0px; pointer-events: none;" class="cGcvT"></grammarly-extension><grammarly-extension data-grammarly-shadow-root="true" style="mix-blend-mode: darken; position: absolute; top: 0px; left: 0px; pointer-events: none;" class="cGcvT"></grammarly-extension>
																	<textarea name="comment" id="comment" cols="30" rows="7" class="form-control textarea" placeholder="Write Your Comment" spellcheck="false"></textarea>
																	<label for="comment" class="form-label">Write Your Comment</label>
																</div>
															</div>
														</div>
													</form>
												</div>
											</div>
										</div>

										<ul class="review-list-wrap">
											<li class="review-list d-flex">
												<div class="review-img">
													<img src="/dental-7/assets/images/review/review-1.jpg" alt="Image">
												</div>

												<div class="review-content">
													<h4>Dr. Alux</h4>
													<span>14 Sep, 2022 at 12.58 AM</span>
													<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis explicabo deleniti mollitia reprehenderit illo quo consequuntur eos, id facere, expedita quasi, quisquam veniam molestiae. Sint repellat voluptatum ab eligendi tempora.</p>

													<ul class="total-reviews">
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

													<a href="#" class="reply">Replay</a>
												</div>
											</li>

											<li class="review-list review-replay d-flex">
												<div class="review-img">
													<img src="/dental-7/assets/images/review/review-2.jpg" alt="Image">
												</div>

												<div class="review-content">
													<h4>Dr. Juhon</h4>
													<span>07 Sep, 2022 at 09.01 AM</span>
													<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis explicabo deleniti mollitia reprehenderit illo quo consequuntur eos, id facere, expedita quasi, quisquam veniam molestiae. Sint repellat voluptatum ab eligendi tempora.</p>

													<ul class="total-reviews">
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

													<a href="#" class="reply">Replay</a>
												</div>
											</li>

											<li class="review-list d-flex">
												<div class="review-img">
													<img src="/dental-7/assets/images/review/review-3.jpg" alt="Image">
												</div>

												<div class="review-content">
													<h4>Dr. Anne</h4>
													<span>28 Sep, 2022 at 03.58 AM</span>
													<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis explicabo deleniti mollitia reprehenderit illo quo consequuntur eos, id facere, expedita quasi, quisquam veniam molestiae. Sint repellat voluptatum ab eligendi tempora.</p>

													<ul class="total-reviews">
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

													<a href="#" class="reply">Replay</a>
												</div>
											</li>

											<li class="review-list review-replay d-flex">
												<div class="review-img">
													<img src="/dental-7/assets/images/review/review-4.jpg" alt="Image">
												</div>

												<div class="review-content">
													<h4>Dr. Akes</h4>
													<span>22 Sep, 2022 at 01.58 PM</span>
													<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis explicabo deleniti mollitia reprehenderit illo quo consequuntur eos, id facere, expedita quasi, quisquam veniam molestiae. Sint repellat voluptatum ab eligendi tempora.</p>

													<ul class="total-reviews">
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

													<a href="#" class="reply">Replay</a>
												</div>
											</li>

											<li class="review-list d-flex">
												<div class="review-img">
													<img src="/dental-7/assets/images/review/review-5.jpg" alt="Image">
												</div>

												<div class="review-content">
													<h4>Dr. Zeck</h4>
													<span>16 Sep, 2022 at 10.00 AM</span>
													<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis explicabo deleniti mollitia reprehenderit illo quo consequuntur eos, id facere, expedita quasi, quisquam veniam molestiae. Sint repellat voluptatum ab eligendi tempora.</p>

													<ul class="total-reviews">
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

													<a href="#" class="reply">Replay</a>
												</div>
											</li>

											<li class="review-list review-replay d-flex">
												<div class="review-img">
													<img src="/dental-7/assets/images/review/review-6.jpg" alt="Image">
												</div>

												<div class="review-content">
													<h4>Dr. Lubks</h4>
													<span>20 Sep, 2022 at 11.58 AM</span>
													<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis explicabo deleniti mollitia reprehenderit illo quo consequuntur eos, id facere, expedita quasi, quisquam veniam molestiae. Sint repellat voluptatum ab eligendi tempora.</p>

													<ul class="total-reviews">
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

													<a href="#" class="reply">Replay</a>
												</div>
											</li>

											<li>
												<div class="pagination">
													<a href="#" class="next page-count hover-style">
														<div class="inner-border">
															<i class="icofont-simple-left"></i>
														</div>
													</a>
													<a href="#" class="page-count current hover-style" aria-current="page">
														<div class="inner-border">1</div>
													</a>
													<a href="#" class="page-count hover-style">
														<div class="inner-border">2</div>
													</a>
													<a href="#" class="page-count hover-style">
														<div class="inner-border">3</div>
													</a>
													<a href="#" class="page-count hover-style">
														<div class="inner-border">4</div>
													</a>
													
													<a href="#" class="next page-count hover-style">
														<div class="inner-border">
															<i class="icofont-simple-right"></i>
														</div>
													</a>
												</div>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!--=== End Product Details Section ===-->

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
