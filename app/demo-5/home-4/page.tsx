
import Header from '@/components/demo-5/Header';
import Footer from '@/components/demo-5/Footer';
import HtmlToNext from '@/components/demo-5/HtmlToNext';

export default function Page() {
  const html = `
        <!-- header -->
        
        <!-- header-end -->
        <!-- main-area -->
        <main>
            
            <!-- search-popup -->
		<div class="modal fade bs-example-modal-lg search-bg popup1" tabindex="-1" role="dialog">
			<div class="modal-dialog modal-lg" role="document">
				<div class="modal-content search-popup">
					<div class="text-center">
						<a href="#" class="close2" data-dismiss="modal" aria-label="Close">× close</a>
					</div>
					<div class="row search-outer">
						<div class="col-md-11"><input type="text" placeholder="Search for products..."></div>
						<div class="col-md-1 text-right"><a href="#"><i class="fa fa-search" aria-hidden="true"></i></a></div>
					</div>
				</div>
			</div>
		</div>
		<!-- /search-popup -->
           <!-- slider-area -->
            <section id="home" class="slider-area fix p-relative">
               
                <div class="slider-active" style="background: #00173c;">
				<div class="single-slider slider-bg d-flex slider-four slider-bg-three align-items-center" style="background-image: url(img/slider/slider_img01.html); background-size: cover;">
                        <div class="container">
                           <div class="row justify-content-center align-items-center">
                              
                                 <div class="col-lg-10 col-md-10 text-center">
                                    <div class="slider-content s-slider-content slider-text-2 mt-20">
                                         <h2 data-animation="fadeInUp" data-delay=".4s">We Are Best Solution Dental Service</h2>                                
                                            <p data-animation="fadeInUp" data-delay=".4s">Nunc eu laoreet ipsum, id pulvinar quam. Mauris non nisi semper, lacinia neque in, dapibus leo. Quisque vitae metus porttitor, hendrerit lectus scelerisque, vehicula lectus.</p>     
                                         <div class="slider-btn mt-20">     
                                            <a href="contact.html" class="btn ss-btn" data-animation="fadeInLeft" data-delay=".4s">Contact Us</a>
                                        </div>        
                                                              
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                                    <!-- video -->
                     <video id="my-video" class="video2" muted="" loop="" autoplay="">
                        <source src="img/slider/slider-vedio.mp4" type="video/mp4">
                        <source src="img/slider/slider-vedio.html" type="video/ogg">
                        <source src="img/slider/slider-vedio-2.html" type="video/webm">
                    </video><!-- /video -->
                    </div>

                    
                    </div>
                    
               
            </section>
            <!-- slider-area-end -->
            <!-- service-details2-area -->
            <section id="service-details2" class="service-details-two pt-120 pb-105 p-relative">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-12">
                            <div class="section-title center-align mb-50 text-center">
                                <h5>Our Services</h5>
                                <h2>
                                  What We Provide
                                </h2>
                             
                            </div>
                           
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12">
                            <div class="about-content s-about-content">
                          
                                <ul class="sr-tw-ul text-right">
                                <li>
                                  
                                    <div class="text">
                                      <h4>Root Canal</h4> 
                                        <p>Aenean eleifend turpis tellus, nec laoreet metus elementum ac.</p>
                                    </div>
                                      <div class="icon-right"><img src="img/icon/fe-icon01.png" alt="icon01"></div>
                                </li>
                                <li>
                                    
                                    <div class="text">
                                      <h4>Alignment Teeth</h4> 
                                        <p>Aenean eleifend turpis tellus, nec laoreet metus elementum ac.</p>
                                    </div>
                                    <div class="icon-right"><img src="img/icon/fe-icon05.png" alt="icon01"></div>
                                </li>
                                 <li>
                                   
                                    <div class="text">
                                       <h4>Cosmetic Teeth</h4> 
                                        <p>Aenean eleifend turpis tellus, nec laoreet metus elementum ac.</p>
                                    </div>
                                      <div class="icon-right"><img src="img/icon/fe-icon07.png" alt="icon01"></div>
                                </li>
                                
                               
                            </ul>
                              
                        
                            </div>
                        </div>
                         <div class="col-lg-4 col-md-12 col-sm-12 text-center d-none d-lg-block">
                            <div class="sd-img">
                                <img src="img/features/services-img-details2.png" alt="img">    
                            </div>
                          
                        </div>
                        
					<div class="col-lg-4 col-md-6 col-sm-12">
                            <div class="about-content s-about-content">
                          
                                 <ul class="sr-tw-ul">
                                <li>
                                    <div class="icon"><img src="img/icon/fe-icon04.png" alt="icon01"></div>
                                     <div class="text pt-10">
                                       <h4>Oral Hygiene</h4> 
                                        <p>Aenean eleifend turpis tellus, nec laoreet metus elementum ac.</p>
                                    </div>
                                </li>
                                <li>
                                     <div class="icon"><img src="img/icon/fe-icon06.png" alt="icon01"></div>
                                     <div class="text pt-10">
                                       <h4>Live Advisory</h4> 
                                        <p>Aenean eleifend turpis tellus, nec laoreet metus elementum ac.</p>
                                    </div>
                                </li>
                                 <li>
                                     <div class="icon"><img src="img/icon/fe-icon08.png" alt="icon01"></div>
                                     <div class="text pt-10">
                                       <h4>Cavity Inspection</h4> 
                                        <p>Aenean eleifend turpis tellus, nec laoreet metus elementum ac.</p>
                                    </div>
                                </li>
                               
                            </ul>
                              
                        
                            </div>
                        </div>
                     
                    </div>
                </div>
            </section>
            <!-- service-details2-area-end -->
            
             <!-- about-area -->
            <section class="about-area about-p pb-120 p-relative fix">
                <div class="container">
                    <div class="row justify-content-center align-items-center">
                         <div class="col-lg-6 col-md-12 col-sm-12">
                            <div class="s-about-img p-relative  wow fadeInLeft animated" data-animation="fadeInLeft" data-delay=".4s">
                                <img src="img/features/about_img.png" alt="img">   
                               <div class="about-text second-about">
                                    <span>50</span>
                                    <p>Years of Experience</p>
                                </div>
                            </div>
                          
                        </div>
                        
					<div class="col-lg-6 col-md-12 col-sm-12">
                            <div class="about-content s-about-content  wow fadeInRight  animated" data-animation="fadeInRight" data-delay=".4s">
                                <div class="about-title second-title pb-25">  
                                    <h5>About Us</h5>
                                    <h2>We Care For Your Dental Health</h2>                                   
                                </div>
                                   <p>Aliquam ac sem et diam iaculis efficitur. Morbi in enim odio. Nullam quis volutpat est, sed dapibus sapien. Cras condimentum eu velit id tempor. Curabitur purus sapien, cursus sed nisl tristique, commodo vehicula arcu.</p>
                                  <p>Aliquam erat volutpat. Aliquam enim massa, sagittis blandit ex mattis, ultricies posuere sapien. Morbi a dignissim enim. Fusce elementum, augue in elementum porta, sapien nunc volutpat ex, a accumsan nunc lectus eu lectus.</p>
                                 <div class="slider-btn mt-20">                                          
                                     <a href="about.html" class="btn ss-btn smoth-scroll">Read More</a>				
                                </div>
                            </div>
                        </div>
                     
                    </div>
                </div>
            </section>
            <!-- about-area-end -->
             <!-- booking-area -->
            <section id="booking" class="booking-area p-relative">
                <div class="container">
                    <form action="#" class="contact-form">
							<div class="row">
                                <div class="col-lg-12"> 
                                    <ul>
                                        <li> 
                                            <div class="contact-field p-relative c-name">  
                                                <input type="text" placeholder="Enter Name">
                                                <i class="fal fa-user"></i>
                                            </div>      
                                        </li>
                                        <li>
                                            <div class="contact-field p-relative c-email">    
                                                <input type="text" placeholder="Select Your Location...">
                                                <i class="fal fa-map-marker-alt"></i>
                                            </div> 
                                        </li>
                                        <li>
                                             <div class="contact-field p-relative c-subject mb-20">                     
                                                  <select class="custom-select" id="inputGroupSelect04" aria-label="Example select with button addon">
                                                    <option selected="">Select Department...</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                  </select>
                                                 <i class="far fa-angle-down"></i>
                                            </div>
                                        
                                        </li>
                                        <li>
                                            <div class="slider-btn">                                          
                                            <button class="bk-btn" data-animation="fadeInRight" data-delay=".8s">Submit Now</button>
                                        </div>     
                                        </li>
                                    </ul>
                                </div>
                          
                            </div>
                        
                    </form>
                </div>
            </section>
            <!-- booking-area-end -->
             <!-- testimonial-area -->
            <section class="testimonial-area pb-115 p-relative fix" style="background-color: #f6f8fc;">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="section-title text-center mb-50 wow fadeInDown animated" data-animation="fadeInDown" data-delay=".4s">
                                <h5>Testimonial</h5>
                                <h2>
                                 What Our Clients Says
                                </h2>
                             
                            </div>
                           
                        </div>
                        
                        <div class="col-lg-12">
                            <div class="testimonial-active">
                                <div class="single-testimonial">
                                     <div class="testi-author">
                                        <img src="img/testimonial/testi_avatar.png" alt="img">
                                    </div>
                                    <div class="review mb-30"><img src="img/testimonial/review-icon.png" alt="img"></div>
                                    <p>“Morbi neque nisi, tincidunt nec erat vitae, viverra porttitor lorem. Fusce tempor nunc at luctus blandit. Donec eget fermentum magna.we dedicate financial on services the teams serve all Curabitur ac tortor ante. Sed quis dignissim”</p>
                                    <div class="ta-info">
                                            <h6>Margie Dose</h6>
                                            <span>Web Developer</span>
                                        </div>
                                    <div class="qt-img">
                                    <img src="img/testimonial/qt-icon.png" alt="img">
                                    </div>
                                </div>
                                <div class="single-testimonial">
                                    <div class="testi-author">
                                        <img src="img/testimonial/testi_avatar_02.png" alt="img">
                                    </div>
                                    <div class="review mb-30"><img src="img/testimonial/review-icon.png" alt="img"></div>
                                  <p>“Morbi neque nisi, tincidunt nec erat vitae, viverra porttitor lorem. Fusce tempor nunc at luctus blandit. Donec eget fermentum magna.we dedicate financial on services the teams serve all Curabitur ac tortor ante. Sed quis dignissim”</p>
                                    <div class="ta-info">
                                            <h6>Jone Walker</h6>
                                            <span>Web Designer</span>
                                        </div>
                                     <div class="qt-img">
                                    <img src="img/testimonial/qt-icon.png" alt="img">
                                    </div>
                                </div>
                              <div class="single-testimonial">
                                  <div class="testi-author">
                                        <img src="img/testimonial/testi_avatar_02.png" alt="img">
                                    </div>
                                 <div class="review mb-30"><img src="img/testimonial/review-icon.png" alt="img"></div>
                                    <p>“Morbi neque nisi, tincidunt nec erat vitae, viverra porttitor lorem. Fusce tempor nunc at luctus blandit. Donec eget fermentum magna.we dedicate financial on services the teams serve all Curabitur ac tortor ante. Sed quis dignissim”</p>
                                    <div class="ta-info">
                                            <h6>Dose Robot</h6>
                                            <span>Web Developer</span>
                                        </div>
                                    <div class="qt-img">
                                    <img src="img/testimonial/qt-icon.png" alt="img">
                                    </div>
                                </div>
                                <div class="single-testimonial">
                                     <div class="testi-author">
                                        <img src="img/testimonial/testi_avatar.png" alt="img">
                                    </div>
                                    <div class="review mb-30"><img src="img/testimonial/review-icon.png" alt="img"></div>
                                  <p>“Morbi neque nisi, tincidunt nec erat vitae, viverra porttitor lorem. Fusce tempor nunc at luctus blandit. Donec eget fermentum magna.we dedicate financial on services the teams serve all Curabitur ac tortor ante. Sed quis dignissim”</p>
                                   <div class="ta-info">
                                            <h6>Jone Walker</h6>
                                            <span>Web Designer</span>
                                        </div>
                                     <div class="qt-img">
                                    <img src="img/testimonial/qt-icon.png" alt="img">
                                    </div>
                                </div>
                                <div class="single-testimonial">
                                     <div class="testi-author">
                                        <img src="img/testimonial/testi_avatar_02.png" alt="img">
                                    </div>
                                    <div class="review mb-30"><img src="img/testimonial/review-icon.png" alt="img"></div>
                                    <p>“Morbi neque nisi, tincidunt nec erat vitae, viverra porttitor lorem. Fusce tempor nunc at luctus blandit. Donec eget fermentum magna.we dedicate financial on services the teams serve all Curabitur ac tortor ante. Sed quis dignissim”</p>
                                   <div class="ta-info">
                                           <h6>Margie Dose</h6>
                                            <span>Web Developer</span>
                                        </div>
                                    <div class="qt-img">
                                    <img src="img/testimonial/qt-icon.png" alt="img">
                                    </div>
                                </div>
                                <div class="single-testimonial">
                                    <div class="testi-author">
                                        <img src="img/testimonial/testi_avatar.png" alt="img">
                                    </div>
                                    <div class="review mb-30"><img src="img/testimonial/review-icon.png" alt="img"></div>
                                  <p>“Morbi neque nisi, tincidunt nec erat vitae, viverra porttitor lorem. Fusce tempor nunc at luctus blandit. Donec eget fermentum magna.we dedicate financial on services the teams serve all Curabitur ac tortor ante. Sed quis dignissim”</p>
                                    <div class="ta-info">
                                            <h6>Jone Walker</h6>
                                            <span>Web Designer</span>
                                        </div>
                                     <div class="qt-img">
                                    <img src="img/testimonial/qt-icon.png" alt="img">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- testimonial-area-end -->
          <!-- pricing-area -->
            <section id="pricing" class="pricing-area pt-120 pb-60 fix p-relative">
                <div class="container"> 
                   <div class="row">
                       <div class="col-lg-12">
                            <div class="section-title text-center mb-50 wow fadeInDown animated" data-animation="fadeInDown" data-delay=".4s">
                                <h5>Testimonial</h5>
                                <h2>
                                 What Our Clients Says
                                </h2>
                             
                            </div>
                           
                        </div>
                        
                        <div class="col-lg-4 col-md-6">
                          <div class="pricing-box pricing-box2 text-center mb-60">
                                    <div class="pricing-head">   
                                        <div class="icon">
                                             <img src="img/icon/pr-icon1.png" alt="img">
                                        </div>
                                        <h3>Basic Plan</h3>  
                                            <div class="price-count">
                                                <h2>$49 <span>/ Monthly</span></h2>
                                            </div> 
                                        <hr>
                                    </div>

                                    <div class="pricing-body mt-20 mb-30 text-left">
                                       <ul>
                                            <li>Aliquam quis justo at lorem</li>
                                            <li>Fusce sodales, urna et tempus</li>
                                            <li>Vestibulum blandit lorem quis</li>
                                            <li>Orci varius natoque penatibus</li>
                                            <li>Aliquam a nisl congue, auctor</li>
                                        </ul>
                                    </div>             

                                    <div class="pricing-btn">
                                       <a href="contact.html" class="btn ss-btn">Choose Plan</a>
                                    </div>
                                </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                             <div class="pricing-box pricing-box2 active text-center mb-60">
                                    <div class="pricing-head">   
                                        <div class="icon">
                                             <img src="img/icon/pr-icon2.png" alt="img">
                                        </div>
                                        <h3>Standard Plan </h3>  
                                            <div class="price-count">
                                            <h2>$99 <span>/ Monthly</span></h2>
                                        </div> 
                                        <hr>
                                    </div>

                                    <div class="pricing-body mt-20 mb-30 text-left">
                                       <ul>
                                            <li>Aliquam quis justo at lorem</li>
                                            <li>Fusce sodales, urna et tempus</li>
                                            <li>Vestibulum blandit lorem quis</li>
                                            <li>Orci varius natoque penatibus</li>
                                            <li>Aliquam a nisl congue, auctor</li>
                                        </ul>
                                    </div>             

                                    <div class="pricing-btn">
                                        <a href="contact.html" class="btn ss-btn">Choose Plan</a>
                                    </div>
                                </div>
                      
                        </div>
                         <div class="col-lg-4 col-md-6">
                             <div class="pricing-box pricing-box2 text-center mb-60">
                                    <div class="pricing-head">   
                                        <div class="icon">
                                             <img src="img/icon/pr-icon3.png" alt="img">
                                        </div>
                                        <h3>Unlimited Plan</h3>  
                                            <div class="price-count">
                                            <h2>$149 <span>/ Monthly</span></h2>
                                        </div> 
                                        <hr>
                                    </div>

                                    <div class="pricing-body mt-20 mb-30 text-left">
                                       <ul>
                                           <li>Aliquam quis justo at lorem</li>
                                            <li>Fusce sodales, urna et tempus</li>
                                            <li>Vestibulum blandit lorem quis</li>
                                            <li>Orci varius natoque penatibus</li>
                                            <li>Aliquam a nisl congue, auctor</li>
                                        </ul>
                                    </div>             

                                    <div class="pricing-btn">
                                        <a href="contact.html" class="btn ss-btn">Choose Plan</a>
                                    </div>
                                </div>
                             
                           
                        </div>
                    </div>
                </div>
            </section>
            <!-- pricing-area-end -->
             <!-- faq-area -->
            <section class="faq-area fix" style="background-color: #0e264f;">
                <div class="container">
    
                    <div class="row align-items-center">                        
                       
                        <div class="col-lg-6">
                           <div class="section-title mb-50">
                               <h5>FAQ</h5>
                                <h2>Frequently Asked Question</h2>
                            </div>
                            <div class="faq-wrap">
                                <div class="accordion" id="accordionExample">
                                    <div class="card">
                                        <div class="card-header" id="headingThree">
                                            <h2 class="mb-0">
                                                <button class="faq-btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-bs-expanded="true" aria-bs-controls="collapseThree">
                                                   Vivamus rhoncus ante a ipsum imperdiet ?
                                                </button>
                                            </h2>
                                        </div>
                                        <div id="collapseThree" class="collapse show" aria-bs-labelledby="headingThree" data-bs-parent="#accordionExample">
                                            <div class="card-body">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div class="card-header" id="headingOne">
                                            <h2 class="mb-0">
                                                <button class="faq-btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-bs-expanded="false" aria-bs-controls="collapseOne">
                                                   Integer id dolor at nisi laoreet iaculis vitae ?
                                                </button>
                                            </h2>
                                        </div>
                                        <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div class="card-body">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div class="card-header" id="headingTwo">
                                            <h2 class="mb-0">
                                                <button class="faq-btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-bs-expanded="false" aria-bs-controls="collapseTwo">
                                                  Donec venenatis elit dignissim, posuere ?
                                                </button>
                                            </h2>
                                        </div>
                                        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                            <div class="card-body">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                            </div>
                                        </div>
                                    </div>
                                     <div class="card">
                                        <div class="card-header" id="headingOne">
                                            <h2 class="mb-0">
                                                <button class="faq-btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#headingFour" aria-bs-expanded="false" aria-bs-controls="headingFour">
                                                  Curabitur varius, massa sit amet egestas ?
                                                </button>
                                            </h2>
                                        </div>
                                        <div id="headingFour" class="collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                            <div class="card-body">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                            </div>
                                        </div>
                                    </div>
                                                                      
                                </div>
                            </div>
                        </div>
                         <div class="col-lg-6">
                            <div class="faq-img text-right">
                                <img src="img/bg/faq-img.png" alt="img" class="img">
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- faq-aread-end -->
             <!-- team-area -->
            <section class="team-area2 fix p-relative pt-105 pb-80">  
                <div class="container">  
                    <div class="row">   
                        <div class="col-lg-12 p-relative">
                           <div class="section-title center-align mb-50 text-center wow fadeInDown animated" data-animation="fadeInDown" data-delay=".4s">
                               <h5>Our Doctor</h5>
                                <h2>
                                    Best Expert Dentist
                                </h2>
                             
                            </div>
                        </div>                        
                         
                    </div>
                   <div class="row team-active">                   
                        <div class="col-xl-4">
                            <div class="single-team mb-40">
                                <div class="team-thumb">
                                    <div class="brd">
                                         <img src="img/team/team01.png" alt="img">
                                        
                                    </div>
                                </div>
                                <div class="team-info">
                                    <h4><a href="team-single.html">Howard Holmes</a></h4>
                                    <p>Dentist</p>
                                    <div class="team-social">
                                        <ul>
                                            <li><a href="#"><i class="fab fa-facebook-f"></i></a></li> 
                                            <li> <a href="#"><i class="fab fa-twitter"></i></a></li>   
                                            <li><a href="#"><i class="fab fa-instagram"></i></a></li>   
                                        </ul>       
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4">
                            <div class="single-team mb-40">
                                <div class="team-thumb">
                                    <div class="brd">
                                        <img src="img/team/team02.png" alt="img">
                                    </div>                                     
                                </div>
                                <div class="team-info">
                                    <h4><a href="team-single.html">Ella Thompson</a></h4>
                                    <p>Dentist</p>
                                    <div class="team-social">
                                        <ul>
                                            <li><a href="#"><i class="fab fa-facebook-f"></i></a></li> 
                                            <li> <a href="#"><i class="fab fa-twitter"></i></a></li>   
                                            <li><a href="#"><i class="fab fa-instagram"></i></a></li>   
                                        </ul>       
                                    </div>
                                </div>
                            </div>
                        </div>
                       <div class="col-xl-4">
                            <div class="single-team mb-40">
                                <div class="team-thumb">
                                    <div class="brd">
                                        <img src="img/team/team03.png" alt="img">
                                    </div>
                                    
                                </div>
                                <div class="team-info">
                                    <h4><a href="team-single.html">Vincent Cooper</a></h4>
                                    <p>Dentist</p>
                                    <div class="team-social">
                                        <ul>
                                            <li><a href="#"><i class="fab fa-facebook-f"></i></a></li> 
                                            <li> <a href="#"><i class="fab fa-twitter"></i></a></li>   
                                            <li><a href="#"><i class="fab fa-instagram"></i></a></li>   
                                        </ul>       
                                    </div>
                                </div>
                            </div>
                        </div>
                         <div class="col-xl-4">
                            <div class="single-team mb-40">
                                <div class="team-thumb">
                                    <div class="brd">
                                         <img src="img/team/team04.png" alt="img">
                                    </div>
                                
                                </div>
                                <div class="team-info">
                                    <h4><a href="team-single.html">Danielle Bryant</a></h4>
                                    <p>Dentist</p>
                                    <div class="team-social">
                                        <ul>
                                            <li><a href="#"><i class="fab fa-facebook-f"></i></a></li> 
                                            <li> <a href="#"><i class="fab fa-twitter"></i></a></li>   
                                            <li><a href="#"><i class="fab fa-instagram"></i></a></li>   
                                        </ul>       
                                    </div>
                                </div>
                            </div>
                        </div>
                       <div class="col-xl-4">
                            <div class="single-team mb-40">
                                <div class="team-thumb">
                                    <div class="brd">
                                        <img src="img/team/team03.png" alt="img">
                                    </div>
                                    
                                </div>
                                <div class="team-info">
                                    <h4><a href="team-single.html">Vincent Cooper</a></h4>
                                    <p>Dentist</p>
                                    <div class="team-social">
                                        <ul>
                                            <li><a href="#"><i class="fab fa-facebook-f"></i></a></li> 
                                            <li> <a href="#"><i class="fab fa-twitter"></i></a></li>   
                                            <li><a href="#"><i class="fab fa-instagram"></i></a></li>   
                                        </ul>       
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
            <!-- team-area-end --> 
            <!-- call-area -->
            <div class="call-area" style="background-image:url(img/bg/call-bg.png); background-repeat: no-repeat; background-position: bottom;">
                <div class="container">
                    <div class="row align-items-center">
                         <div class="col-lg-5 col-md-5 col-sm-12">
                             <div class="single-counter-img fadeInUp animated" data-animation="fadeInDown animated" data-delay=".2s">
								 <img src="img/bg/call-man.png" alt="img" class="img">
                            </div>
                        </div>
                      <div class="col-lg-7 col-md-7 col-sm-12">        
                          <div class="call-text">
                              <h5>Book Dentail Appointment</h5>
                                <h2>We Are open And Welcoming Patients</h2>
                                <a href="#" class="btn">Book Appointment</a>
                          </div>
                       </div>
                       
                    </div>
                </div>
            </div>
            <!-- call-area-end -->
              <!-- blog-area -->
            <section id="blog" class="blog-area p-relative fix pt-90 pb-90">
                <div class="container">
                    <div class="row align-items-center"> 
                        <div class="col-lg-12">
                            <div class="section-title center-align mb-50 text-center wow fadeInDown animated" data-animation="fadeInDown" data-delay=".4s">
                                <h5>Our Blog</h5>
                                <h2>
                                 Latest Blog &amp; News
                                </h2>
                               
                            </div>
                           
                        </div>
                    </div>
                    <div class="row">
                       <div class="col-lg-4 col-md-6">
                            <div class="single-post2 hover-zoomin mb-30 wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s">
                                <div class="blog-thumb2">
                                    <a href="blog-details.html"><img src="img/blog/inner_b1.jpg" alt="img"></a>
                                </div>                    
                                <div class="blog-content2">    
                                    <div class="date-home">
                                        <i class="fal fa-calendar-alt"></i> 24th March 2021
                                    </div>
                                    <h4><a href="blog-details.html">Cras accumsan nulla nec lacus ultricies placerat.</a></h4> 
                                    <p>Curabitur sagittis libero tincidunt tempor finibus. Mauris at dignissim ligula, nec tristique orci.</p>
                                    <div class="blog-btn"><a href="blog-details.html">Read More</a></div>
                                     
                                </div>
                            </div>
                        </div>
                         <div class="col-lg-4 col-md-6">
                            <div class="single-post2 mb-30 hover-zoomin wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s">
                                <div class="blog-thumb2">
                                    <a href="blog-details.html"><img src="img/blog/inner_b2.jpg" alt="img"></a>
                                </div>
                                <div class="blog-content2">                                    
                                    <div class="date-home">
                                        <i class="fal fa-calendar-alt"></i> 24th March 2021
                                    </div>
                                    <h4><a href="blog-details.html">Dras accumsan nulla nec lacus ultricies placerat.</a></h4> 
                                    <p>Curabitur sagittis libero tincidunt tempor finibus. Mauris at dignissim ligula, nec tristique orci.</p>
                                    <div class="blog-btn"><a href="blog-details.html">Read More</a></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="single-post2 mb-30 hover-zoomin wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s">
                                <div class="blog-thumb2">
                                    <a href="blog-details.html"><img src="img/blog/inner_b3.jpg" alt="img"></a>
                                </div>
                                <div class="blog-content2">                                    
                                    <div class="date-home">
                                        <i class="fal fa-calendar-alt"></i> 24th March 2021
                                    </div>
                                    <h4><a href="blog-details.html">Seas accumsan nulla nec lacus ultricies placerat.</a></h4> 
                                    <p>Curabitur sagittis libero tincidunt tempor finibus. Mauris at dignissim ligula, nec tristique orci.</p>
                                    <div class="blog-btn"><a href="blog-details.html">Read More</a></div>
                                </div>
                            </div>
                        </div>
                
                        
                    </div>
                </div>
            </section>
            <!-- blog-area-end -->
         
        </main>
        <!-- main-area-end -->
        <!-- footer -->
        
        <!-- footer-end -->

		<!-- JS here -->
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
    


`;
  
  return (
    <>
      <Header />
      <HtmlToNext html={html} />
      <Footer />
    </>
  );
}
