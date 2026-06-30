'use client';
import React, {useEffect} from 'react';
import HeaderOne from './components/HeaderOne';
import MobileMenu from './components/MobileMenu';
import Footer from './components/Footer';

export default function Page() {
  useEffect(() => {
    // Dispatch event to trigger jQuery custom script initialization
    const timer = setTimeout(() => {
      const $ = (window as any).jQuery;
      if ($) {
        $(window).trigger('resize');
        if ($('.preloader').length) {
          $('.preloader').delay(200).fadeOut(500);
        }
      }
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="boxed_wrapper">
      <HeaderOne />
      <MobileMenu />
      <div dangerouslySetInnerHTML={{ __html: `

<div class="preloader"></div>



    
    <!--Sticky Header-->
    <div class="sticky-header">
        <div class="container">
            <div class="clearfix">
                <!--Logo-->
                <div class="logo float-left">
                    <a href="/eye-1" class="img-responsive"><img src="/eye-1/assets/images/resources/logo.png" alt="" title=""></a>
                </div>
                <!--Right Col-->
                <div class="right-col float-right">
                    <!-- Main Menu -->
                    <nav class="main-menu clearfix">
                    <!--Keep This Empty / Menu will come through Javascript-->
                    </nav>   
                </div>
            </div>
        </div>
    </div>
    <!--End Sticky Header-->
    
     
</header>


<!-- Start Main Slider -->
<section class="main-slider style1">
    <div class="slider-box">
        <!-- Banner Carousel -->
        <div class="banner-carousel owl-theme owl-carousel">
            <!-- Slide -->
            <div class="slide">
                <div class="icon-holder">
                    <img src="/eye-1/assets/images/icon/eye.png" alt="Eye Icon">
                </div>
                <div class="image-layer" style="background-image:url('/eye-1/assets/images/slides/slide-v1-1.jpg')"></div>
                <div class="auto-container">
                    <div class="content right">
                        <h3>Welcome to Oktilcal</h3>
                        <h2>Optometrist<br> & eyes care<br> specialist</h2>
                        <div class="btns-box">
                            <a class="btn-one" href="#"><span class="txt">Discover More<i class="fa fa-angle-double-right round" aria-hidden="true"></i></span></a>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Slide -->
            <div class="slide">
                <div class="icon-holder">
                    <img src="/eye-1/assets/images/icon/eye.png" alt="Eye Icon">
                </div>
                <div class="image-layer" style="background-image:url('/eye-1/assets/images/slides/slide-v1-2.jpg')"></div>
                <div class="auto-container">
                    <div class="content right">
                        <h3>Welcome to Oktilcal</h3>
                        <h2>Optometrist<br> & eyes care<br> specialist</h2>
                        <div class="btns-box">
                            <a class="btn-one" href="#"><span class="txt">Discover More<i class="fa fa-angle-double-right round" aria-hidden="true"></i></span></a>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Slide -->
            <div class="slide">
                <div class="icon-holder">
                    <img src="/eye-1/assets/images/icon/eye.png" alt="Eye Icon">
                </div>
                <div class="image-layer" style="background-image:url('/eye-1/assets/images/slides/slide-v1-3.jpg')"></div>
                <div class="auto-container">
                    <div class="content right">
                        <h3>Welcome to Oktilcal</h3>
                        <h2>Optometrist<br> & eyes care<br> specialist</h2>
                        <div class="btns-box">
                            <a class="btn-one" href="#"><span class="txt">Discover More<i class="fa fa-angle-double-right round" aria-hidden="true"></i></span></a>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</section>
<!-- End Main Slider -->


<!--Start Welcome Area-->
<section class="welcome-area">
    <div class="container">
        <div class="row">
           
            <div class="col-xl-7">
                <div class="welcome-image-box">
                    <img src="/eye-1/assets/images/resources/welcome-1.jpg" alt="Awesome Image">
                    <div class="experience-box">
                        <h2>20</h2>
                        <h3>Years of<br> practicing</h3>    
                    </div>
                    <div class="image2">
                        <img src="/eye-1/assets/images/resources/welcome-2.jpg" alt="Awesome Image">
                    </div>
                </div>    
            </div>
            
            <div class="col-xl-5">
                <div class="welcome-content-box">
                    <div class="sec-title">
                        <h2><span>Introducing</span> the quality<br> optometrist clinic</h2>
                    </div>
                    <div class="inner-content">
                        <div class="text">
                            <p>Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua lonm andhn.</p>
                        </div>
                        <ul>
                            <li>Nsectetur cing elit.</li>
                            <li>Suspe ndisse suscipit sagittis leo.</li>
                            <li>Entum estibulum dignissim posuere.</li>
                        </ul>
                        <div class="bottom-box">
                            <div class="left pull-left">
                                <div class="text2">
                                    <p>Have any question?</p>
                                    <a href="#">Book an appointment</a>
                                </div>
                                <div class="author-info-box1">
                                    <div class="image-box">
                                        <div class="inner">
                                            <img src="/eye-1/assets/images/resources/author-1.png" alt="Awesome Image">
                                        </div>
                                    </div>
                                    <div class="signature-box">
                                        <img src="/eye-1/assets/images/resources/signature.png" alt="Signature">
                                    </div>    
                                </div>
                            </div> 
                            <div class="right pull-right">
                                <div class="patients-box text-center">
                                    <i class="icon-vision"></i>
                                    <h2><span class="timer" data-from="1" data-to="8700" data-speed="5000" data-refresh-interval="50">8700</span></h2>
                                    <p>Patients</p>
                                </div>    
                            </div>   
                        </div>
                    </div>    
                </div>    
            </div>
            
        </div>
    </div>
</section>
<!--End Welcome Area-->

<!--Start Certified Area-->
<section class="certified-area">
    <div class="outer-container">
        <div class="outer-box">
            <div class="row">
                <div class="col-xl-5">
                    <div class="certified-content-box">
                        <div class="sec-title">
                            <h2><span>Oktilcal</span> certified<br> & professional<br> eye clinic</h2>
                        </div>
                        <div class="text">
                            <p>Lorem ipsum dolor sit amet, consectetur<br> notted adipisicing elit</p>
                            <div class="btns-box">
                                <a class="btn-one style2" href="#"><span class="txt">Book Appointment<i class="fa fa-angle-double-right round" aria-hidden="true"></i></span></a>
                            </div>
                        </div>    
                    </div>    
                </div>
                <div class="col-xl-3">
                    <div class="certified-image-box1">
                        <img src="/eye-1/assets/images/resources/certified-image-1.jpg" alt="Awesome Image">
                    </div>        
                </div>
                <div class="col-xl-4">
                    <div class="certified-box clearfix">
                        <div class="icon-box">
                            <div class="eye-box"><img src="/eye-1/assets/images/icon/eye-2.png" alt="Eye Icon"></div>
                        </div>
                        <ul class="clearfix">
                            <li>
                                <img src="/eye-1/assets/images/resources/certificate-1.jpg" alt="Awesome Image">    
                            </li>
                            <li>
                                <img src="/eye-1/assets/images/resources/certificate-2.jpg" alt="Awesome Image">    
                            </li>
                            <li>
                                <img src="/eye-1/assets/images/resources/certificate-3.jpg" alt="Awesome Image">    
                            </li>
                            <li>
                                <img src="/eye-1/assets/images/resources/certificate-4.jpg" alt="Awesome Image">    
                            </li>
                        </ul>
                    </div>        
                </div>
                
            </div>
        </div>
    </div>
</section>
<!--End Certified Area-->

<!--Start Services Style1 Area-->
<section class="services-style1-area">
    <div class="container">
        <div class="row">
            <div class="col-xl-12">
                <div class="top-title">
                    <div class="sec-title">
                        <h2 class="clrwhite"><span>Services</span> weÃ¢â‚¬â„¢re offering<br> to our clients</h2>
                    </div>
                    <div class="text">
                        <p>Lorem ipsum dolor sit amet nsectetur cing elituspe ndisse suscipit sagitis leo sit.</p>
                    </div>    
                </div>
            </div>
        </div>    
        <div class="row">
            <!--Start Single service Style1-->
            <div class="col-xl-4 col-lg-4">
                <div class="single-service-style1 wow fadeInUp" data-wow-delay="100ms" data-wow-duration="1500ms">
                    <div class="img-holder">
                        <img src="/eye-1/assets/images/services/service-v1-1.jpg" alt="Awesome Image">
                        <div class="icon"><span class="icon-glasses"></span></div>
                    </div>
                    <div class="text-holder">
                        <h3><a href="#">Surgical Procedure</a></h3>
                        <p>Lorem ipsum dolor sit amet ctetur cing elituspe ndisse cip</p>
                        <div class="bottom-box">
                            <a class="btn-style3" href="#"><i class="fa fa-angle-double-right" aria-hidden="true"></i></a>
                        </div>
                        <div class="counting">01</div> 
                    </div> 
                </div>
            </div>
            <!--End Single service Style1-->
            <!--Start Single service Style1-->
            <div class="col-xl-4 col-lg-4">
                <div class="single-service-style1 wow fadeInDown" data-wow-delay="100ms" data-wow-duration="1500ms">
                    <div class="img-holder">
                        <img src="/eye-1/assets/images/services/service-v1-2.jpg" alt="Awesome Image">
                        <div class="icon"><span class="icon-visualization"></span></div>
                    </div>
                    <div class="text-holder">
                        <h3><a href="#">All Laser Lasik</a></h3>
                        <p>Lorem ipsum dolor sit amet ctetur cing elituspe ndisse cip</p>
                        <div class="bottom-box">
                            <a class="btn-style3" href="#"><i class="fa fa-angle-double-right" aria-hidden="true"></i></a>
                        </div>
                        <div class="counting">02</div> 
                    </div> 
                </div>
            </div>
            <!--End Single service Style1-->
            <!--Start Single service Style1-->
            <div class="col-xl-4 col-lg-4">
                <div class="single-service-style1 wow fadeInUp" data-wow-delay="100ms" data-wow-duration="1500ms">
                    <div class="img-holder">
                        <img src="/eye-1/assets/images/services/service-v1-3.jpg" alt="Awesome Image">
                        <div class="icon"><span class="icon-vision-1"></span></div>
                    </div>
                    <div class="text-holder">
                        <h3><a href="#">Cornea & Glaucoma</a></h3>
                        <p>Lorem ipsum dolor sit amet ctetur cing elituspe ndisse cip</p>
                        <div class="bottom-box">
                            <a class="btn-style3" href="#"><i class="fa fa-angle-double-right" aria-hidden="true"></i></a>
                        </div>
                        <div class="counting">03</div> 
                    </div> 
                </div>
            </div>
            <!--End Single service Style1-->
        </div>
    </div>
</section>
<!--End Services Style1 Area-->  

<!--Start Slogan Area-->
<section class="slogan-area" style="background-image: url('/eye-1/assets/images/parallax-background/slogan-area-bg.jpg')">
    <div class="container">
        <div class="row">
            <div class="col-xl-12">
                <div class="slogan-content">
                    <div class="left paroller">
                        <div class="title">
                            <h2>Are you looking for a eye care<br> consultation?</h2>
                        </div>
                    </div>
                    <div class="right">
                        <div class="btns-box">
                            <a class="btn-one" href="#"><span class="txt">Book Appointment<i class="fa fa-angle-double-right round" aria-hidden="true"></i></span></a>
                        </div> 
                    </div>
                    
                </div>    
            </div>    
        </div>
    </div>
</section>
<!--End Slogan Area-->

<!--Start Choose Area-->
<section class="choose-area">
    <div class="container">
        <div class="row">
            <div class="col-xl-5">
                <div class="choose-left-box clearfix">
                    <div class="video-holder-box clearfix">
                        <img src="/eye-1/assets/images/resources/video-gallery-bg.jpg" alt="">
                        <div class="icon">
                            <a class="video-popup" title="Oktilcal Video Gallery" href="https://www.youtube.com/watch?v=p25gICT63ek">
                                <span class="icon-play-button"></span>
                            </a>
                        </div>
                    </div>
                </div>    
            </div>
            <div class="col-xl-7">
                <div class="choose-content-box">
                    <div class="sec-title">
                        <h2><span>Oktilcal</span> why you should<br> choose our services</h2>
                    </div>
                    <div class="inner-content">
                       
                        <div class="choose-tabs tabs-box">
                            
                            <div class="tab-button-column clearfix">
                                <ul class="tab-buttons clearfix">
                                    <li data-tab="#eye-treatment" class="tab-btn active-btn">Eye Treatment</li>
                                    <li data-tab="#lasik-care" class="tab-btn">Lasik Care</li>
                                    <li data-tab="#contact-lenses" class="tab-btn">Contact Lenses</li>
                                </ul>
                            </div>
                            
                            <div class="choose-column clearfix">
                                <div class="inner">
                                    <div class="tabs-content">
                                        <!--Tab-->
                                        <div class="tab active-tab" id="eye-treatment">
                                            <div class="choose-tab-content-box">
                                                <div class="top-content">
                                                    <p>There are many variations of passages of but the majority have in some form, by injected humou or words which don't look even slightly believable of but the majority have suffered.</p>
                                                </div>
                                                <div class="bottom-content">
                                                    <div class="image-box">
                                                        <img src="/eye-1/assets/images/resources/choose-1.png" alt="Awesome Image">
                                                    </div>
                                                    <div class="text-box">
                                                        <ul>
                                                            <li>Nsectetur cing elit</li>
                                                            <li>Suspe ndisse suscipit sagittis leo</li>
                                                            <li>Entum estibulum dignissim posuere</li>
                                                            <li>Lorem Ipsum on the tend to repeat</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <!--Tab-->
                                        <div class="tab" id="lasik-care">
                                            <div class="choose-tab-content-box">
                                                <div class="top-content">
                                                    <p>There are many variations of passages of but the majority have in some form, by injected humou or words which don't look even slightly believable of but the majority have suffered.</p>
                                                </div>
                                                <div class="bottom-content">
                                                    <div class="image-box">
                                                        <img src="/eye-1/assets/images/resources/choose-1.png" alt="Awesome Image">
                                                    </div>
                                                    <div class="text-box">
                                                        <ul>
                                                            <li>Nsectetur cing elit</li>
                                                            <li>Suspe ndisse suscipit sagittis leo</li>
                                                            <li>Entum estibulum dignissim posuere</li>
                                                            <li>Lorem Ipsum on the tend to repeat</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div> 
                                        </div>
                                        
                                        <!--Tab-->
                                        <div class="tab" id="contact-lenses">
                                            <div class="choose-tab-content-box">
                                                <div class="top-content">
                                                    <p>There are many variations of passages of but the majority have in some form, by injected humou or words which don't look even slightly believable of but the majority have suffered.</p>
                                                </div>
                                                <div class="bottom-content">
                                                    <div class="image-box">
                                                        <img src="/eye-1/assets/images/resources/choose-1.png" alt="Awesome Image">
                                                    </div>
                                                    <div class="text-box">
                                                        <ul>
                                                            <li>Nsectetur cing elit</li>
                                                            <li>Suspe ndisse suscipit sagittis leo</li>
                                                            <li>Entum estibulum dignissim posuere</li>
                                                            <li>Lorem Ipsum on the tend to repeat</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>  
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="happy-patients-box">
                        <div class="icon">
                            <i class="icon-eye"></i>    
                        </div>
                        <div class="title">
                            <h2>86,700</h2>
                            <span>Happy patients in 20 years</span>
                        </div>
                    </div>   
                    
                </div>
            </div>
            
        </div>
    </div>
</section>
<!--End Choose Area-->

<!--Start Testimonial style1 Area-->
<section class="testimonial-style1-area">
    <div class="shape1 zoom-fade">
        <img src="/eye-1/assets/images/shape/shape-2.png" alt="Shape1">
    </div>
    <div class="shape2 float-bob">
        <img src="/eye-1/assets/images/shape/shape-3.png" alt="Shape2">
    </div>
    <div class="container">
        <div class="row">
            <div class="col-xl-12">
                <div class="top-title">
                    <div class="sec-title">
                        <h2><span>What</span> our customers are<br> talking about us</h2>
                    </div>
                    <div class="text">
                        <p>Lorem ipsum dolor sit amet nsectetur cing elituspe ndisse suscipit sagitis leo sit.</p>
                    </div>    
                </div>
            </div>
        </div>
        <div class="row"> 
            <div class="col-xl-4 col-lg-4">
                <!--Start Single Testimonial Style1-->
                <div class="single-testimonial-style1 text-center  wow fadeInUp" data-wow-delay="100ms" data-wow-duration="1500ms">
                    <div class="inner-content">
                        <div class="bg" style="background-image: url('/eye-1/assets/images/pattern/single-testimonial-style1-bg.png')"></div>
                        <div class="bg-overlay" style="background-image: url('/eye-1/assets/images/pattern/single-testimonial-style1-bg-overlay.png')"></div>
                        <div class="quote-icon">
                            <img class="main-icon" src="/eye-1/assets/images/icon/quote-1.png" alt="Quote Icon">
                            <div class="overlay-icon">
                                <img src="/eye-1/assets/images/icon/quote-2.png" alt="Quote Icon">    
                            </div>
                        </div>      
                        <div class="text-box">
                            <p>I was very impresed by the optilkal service lorem ipsum is simply free text used by copy typing refreshing. Neque porro est qui dolorem ipsum quia.</p>
                        </div>
                        <div class="img-box">
                            <img src="/eye-1/assets/images/testimonial/tes-v1-1.png" alt="Awesome Image">
                        </div>
                    </div>
                    <div class="client-info-box">
                        <h3>Jessica Brown</h3>
                        <span>Customer</span>
                    </div>
                </div>
                <!--End Single Testimonial Style1-->
            </div>
            <div class="col-xl-4 col-lg-4">
                <!--Start Single Testimonial Style1-->
                <div class="single-testimonial-style1 text-center  wow fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                    <div class="inner-content">
                        <div class="bg" style="background-image: url('/eye-1/assets/images/pattern/single-testimonial-style1-bg.png')"></div>
                        <div class="bg-overlay" style="background-image: url('/eye-1/assets/images/pattern/single-testimonial-style1-bg-overlay.png')"></div>
                        <div class="quote-icon">
                            <img class="main-icon" src="/eye-1/assets/images/icon/quote-1.png" alt="Quote Icon">
                            <div class="overlay-icon">
                                <img src="/eye-1/assets/images/icon/quote-2.png" alt="Quote Icon">    
                            </div>
                        </div>      
                        <div class="text-box">
                            <p>I was very impresed by the optilkal service lorem ipsum is simply free text used by copy typing refreshing. Neque porro est qui dolorem ipsum quia.</p>
                        </div>
                        <div class="img-box">
                            <img src="/eye-1/assets/images/testimonial/tes-v1-1.png" alt="Awesome Image">
                        </div>
                    </div>
                    <div class="client-info-box">
                        <h3>David Coper</h3>
                        <span>Customer</span>
                    </div>
                </div>
                <!--End Single Testimonial Style1-->
            </div>
            <div class="col-xl-4 col-lg-4">
                <!--Start Single Testimonial Style1-->
                <div class="single-testimonial-style1 text-center  wow fadeInUp" data-wow-delay="100ms" data-wow-duration="1500ms">
                    <div class="inner-content">
                        <div class="bg" style="background-image: url('/eye-1/assets/images/pattern/single-testimonial-style1-bg.png')"></div>
                        <div class="bg-overlay" style="background-image: url('/eye-1/assets/images/pattern/single-testimonial-style1-bg-overlay.png')"></div>
                        <div class="quote-icon">
                            <img class="main-icon" src="/eye-1/assets/images/icon/quote-1.png" alt="Quote Icon">
                            <div class="overlay-icon">
                                <img src="/eye-1/assets/images/icon/quote-2.png" alt="Quote Icon">    
                            </div>
                        </div>      
                        <div class="text-box">
                            <p>I was very impresed by the optilkal service lorem ipsum is simply free text used by copy typing refreshing. Neque porro est qui dolorem ipsum quia.</p>
                        </div>
                        <div class="img-box">
                            <img src="/eye-1/assets/images/testimonial/tes-v1-1.png" alt="Awesome Image">
                        </div>
                    </div>
                    <div class="client-info-box">
                        <h3>Sarah Albert</h3>
                        <span>Customer</span>
                    </div>
                </div>
                <!--End Single Testimonial Style1-->
            </div>
              
        </div>
    </div>
</section>
<!--End Testimonial Style1 Area--> 

<!--Start Partner Area-->
<section class="partner-area">
    <div class="layer-outer" style="background-image: url('/eye-1/assets/images/parallax-background/partner-area-bg.png')"></div>
    <div class="container">
        <div class="row">
            <div class="col-xl-12">
                <div class="partner-box">
                    <!--Start Single Partner Logo Box-->
                    <div class="single-partner-logo-box">
                        <a href="#"><img src="/eye-1/assets/images/brand/brand-1.png" alt="Awesome Image"></a>
                    </div>
                    <!--End Single Partner Logo Box-->
                    <!--Start Single Partner Logo Box-->
                    <div class="single-partner-logo-box">
                        <a href="#"><img src="/eye-1/assets/images/brand/brand-2.png" alt="Awesome Image"></a>
                    </div>
                    <!--End Single Partner Logo Box-->
                    <!--Start Single Partner Logo Box-->
                    <div class="single-partner-logo-box marleft-minus">
                        <a href="#"><img src="/eye-1/assets/images/brand/brand-3.png" alt="Awesome Image"></a>
                    </div>
                    <!--End Single Partner Logo Box-->
                    <!--Start Single Partner Logo Box-->
                    <div class="single-partner-logo-box">
                        <a href="#"><img src="/eye-1/assets/images/brand/brand-4.png" alt="Awesome Image"></a>
                    </div>
                    <!--End Single Partner Logo Box-->
                    <!--Start Single Partner Logo Box-->
                    <div class="single-partner-logo-box">
                        <a href="#"><img src="/eye-1/assets/images/brand/brand-5.png" alt="Awesome Image"></a>
                    </div>
                    <!--End Single Partner Logo Box-->
                </div>
            </div>
        </div>
    </div>
    
</section> 
<!--End Partner Area-->

<!--Start Service Style2 Area-->
<section class="service-style2-area">
    <div class="layer-outer-shape paroller" style="background-image: url('/eye-1/assets/images/shape/service-style2-area-shape.png')"></div>
    <div class="container">
        <div class="row">
            <div class="col-xl-6">
                <div class="service-style2-left">
                    <div class="sec-title">
                        <h2 class="clrwhite"><span>Service</span> thatÃ¢â‚¬â„¢ll make you<br> see better future</h2>
                    </div>
                    <div class="row">
                        <!--Start Single Service Style2-->
                        <div class="col-xl-6 col-lg-6 col-md-6">
                            <div class="single-service-style2">
                                <div class="title">
                                    <h5>Qualified Doctors</h5>
                                </div>
                                <div class="text">
                                    <p>Lorem ipsum dolor sit amt con sectetur notte elit sed do.</p>
                                </div>    
                            </div>
                        </div>
                        <!--End Single Service Style2-->
                        <!--Start Single Service Style2-->
                        <div class="col-xl-6 col-lg-6 col-md-6">
                            <div class="single-service-style2">
                                <div class="title">
                                    <h5>Qualified Doctors</h5>
                                </div>
                                <div class="text">
                                    <p>Lorem ipsum dolor sit amt con sectetur notte elit sed do.</p>
                                </div>    
                            </div>
                        </div>
                        <!--End Single Service Style2-->
                        <!--Start Single Service Style2-->
                        <div class="col-xl-6 col-lg-6 col-md-6">
                            <div class="single-service-style2">
                                <div class="title">
                                    <h5>Qualified Doctors</h5>
                                </div>
                                <div class="text">
                                    <p>Lorem ipsum dolor sit amt con sectetur notte elit sed do.</p>
                                </div>    
                            </div>
                        </div>
                        <!--End Single Service Style2-->
                        <!--Start Single Service Style2-->
                        <div class="col-xl-6 col-lg-6 col-md-6">
                            <div class="single-service-style2">
                                <div class="title">
                                    <h5>Qualified Doctors</h5>
                                </div>
                                <div class="text">
                                    <p>Lorem ipsum dolor sit amt con sectetur notte elit sed do.</p>
                                </div>    
                            </div>
                        </div>
                        <!--End Single Service Style2-->
                    </div>
                    <div class="bottom-box">
                        <div class="left">   
                            <div class="any-question-box">
                                <div class="icon">
                                    <span class="icon-customer-service"></span>
                                </div>
                                <div class="title">
                                    <span>Have any question?</span>
                                    <h3>Book an appointment</h3>
                                </div>  
                            </div>
                        </div>
                        <div class="right">
                            <div class="phone-number">
                                <a href="tel:+11987654321">666 888 0000</a>
                            </div>
                        </div>
                    </div>  
                    
                </div>    
            </div>
            
            <div class="col-xl-6">
                <div class="service-style2-right">
                    <img src="/eye-1/assets/images/services/service-style2-right-img.jpg" alt="Awesome Image">
                </div>    
            </div>
            
        </div>
    </div>
</section>
<!--End Service Style2 Area-->

<!--Start home map area-->
<section class="home-map-area">
    <div class="outer-container">
        <div class="map-outer">
            <!--Map Canvas-->
            <div class="map-canvas"
                data-zoom="12"
                data-lat="-37.817085"
                data-lng="144.955631"
                data-type="roadmap"
                data-hue="#ffc400"
                data-title="Envato"
                data-icon-path="assets/images/resources/map-marker.png"
                data-content="Melbourne VIC 3000, Australia<br><a href='mailto:info@youremail.com'>info@youremail.com</a>">
            </div>
        </div>    
    </div>
</section>
<!--End home map area-->


<!--Start Blog Style1 Area-->
<section class="blog-style1-area">
    <div class="container">
        <div class="row">
            <div class="col-xl-12">
                <div class="top-title">
                    <div class="sec-title">
                        <h2><span>Latest</span> news & updates<br> directly from blog</h2>
                    </div>
                    <div class="text">
                        <p>Lorem ipsum dolor sit amet nsectetur cing elituspe ndisse suscipit sagitis leo sit.</p>
                    </div>    
                </div>
            </div>
        </div>
        <div class="row">
            <!--Start Single blog Style1-->
            <div class="col-xl-4 col-lg-4">
                <div class="single-blog-style1 wow fadeInLeft" data-wow-delay="100ms" data-wow-duration="1500ms">
                    <div class="img-holder">
                        <div class="inner">
                            <img src="/eye-1/assets/images/blog/blog-v1-1.jpg" alt="Awesome Image">
                        </div>
                        <div class="date-box">
                            <h5>20 June</h5>
                        </div>
                    </div> 
                    <div class="text-holder">
                        <h3 class="blog-title"><a href="/eye-1/blog/single">Now you can see the better future</a></h3>
                        <ul class="meta-info">
                            <li><span class="icon-user thm-clr"></span><a href="#">Admin</a></li>
                            <li><span class="icon-comments thm-clr"></span><a href="#">2 Comments</a></li>
                        </ul>
                        <div class="text">
                            <p>Lorem ipsum dolor sit amet ctetur cing elituspe ndisse cip <span>...</span></p>    
                        </div>
                        <div class="bottom-box">
                            <div class="left">
                                <a class="readmore" href="#">Read More</a>
                            </div>
                            <div class="right">
                                <a class="btn-style3" href="#"><i class="fa fa-angle-double-right" aria-hidden="true"></i></a>
                            </div>
                        </div>
                    </div>
                       
                </div>
            </div>
            <!--End Single blog Style1-->
            <!--Start Single blog Style1-->
            <div class="col-xl-4 col-lg-4">
                <div class="single-blog-style1 wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                    <div class="img-holder">
                        <div class="inner">
                            <img src="/eye-1/assets/images/blog/blog-v1-2.jpg" alt="Awesome Image">
                        </div>
                        <div class="date-box">
                            <h5>15 June</h5>
                        </div>
                    </div> 
                    <div class="text-holder">
                        <h3 class="blog-title"><a href="/eye-1/blog/single">Protect your eyes from dust and disease</a></h3>
                        <ul class="meta-info">
                            <li><span class="icon-user thm-clr"></span><a href="#">Admin</a></li>
                            <li><span class="icon-comments thm-clr"></span><a href="#">2 Comments</a></li>
                        </ul>
                        <div class="text">
                            <p>Lorem ipsum dolor sit amet ctetur cing elituspe ndisse cip <span>...</span></p>    
                        </div>
                        <div class="bottom-box">
                            <div class="left">
                                <a class="readmore" href="#">Read More</a>
                            </div>
                            <div class="right">
                                <a class="btn-style3" href="#"><i class="fa fa-angle-double-right" aria-hidden="true"></i></a>
                            </div>
                        </div>
                    </div>
                       
                </div>
            </div>
            <!--End Single blog Style1-->
            <!--Start Single blog Style1-->
            <div class="col-xl-4 col-lg-4">
                <div class="single-blog-style1 wow fadeInLeft" data-wow-delay="300ms" data-wow-duration="1500ms">
                    <div class="img-holder">
                        <div class="inner">
                            <img src="/eye-1/assets/images/blog/blog-v1-3.jpg" alt="Awesome Image">
                        </div>
                        <div class="date-box">
                            <h5>12 June</h5>
                        </div>
                    </div> 
                    <div class="text-holder">
                        <h3 class="blog-title"><a href="/eye-1/blog/single">WeÃ¢â‚¬â„¢re ready to enhance your vision</a></h3>
                        <ul class="meta-info">
                            <li><span class="icon-user thm-clr"></span><a href="#">Admin</a></li>
                            <li><span class="icon-comments thm-clr"></span><a href="#">2 Comments</a></li>
                        </ul>
                        <div class="text">
                            <p>Lorem ipsum dolor sit amet ctetur cing elituspe ndisse cip <span>...</span></p>    
                        </div>
                        <div class="bottom-box">
                            <div class="left">
                                <a class="readmore" href="#">Read More</a>
                            </div>
                            <div class="right">
                                <a class="btn-style3" href="#"><i class="fa fa-angle-double-right" aria-hidden="true"></i></a>
                            </div>
                        </div>
                    </div>
                       
                </div>
            </div>
            <!--End Single blog Style1-->
          
        </div>
    </div>
</section>
<!--End Blog Style1 Area-->

<!--Start Slogan Style2 Area-->
<section class="slogan-style2-area">
    <div class="icon-holder">
        <img src="/eye-1/assets/images/icon/icon.png" alt="Icon">
    </div>
    <div class="outer-container">
        <div class="row">
            <!--Start Slogan Single Box-->
            <div class="col-xl-6">
                <div class="slogan-single-box">
                    <div class="img-holder">
                        <div class="inner">
                            <img src="/eye-1/assets/images/resources/slogan-single-1.jpg" alt="">
                        </div>
                        <div class="overlay-content">
                            <h2>We only give best care<br> to your eyes.</h2>
                            <div class="btns-box">
                                <a class="btn-one gray" href="#">
                                    <span class="txt">Book Appointment<i class="fa fa-angle-double-right round" aria-hidden="true"></i></span>
                                </a>
                            </div>
                        </div>    
                    </div>
                </div>
            </div>
            <!--End Slogan Single Box--> 
            <!--Start Slogan Single Box-->
            <div class="col-xl-6">
                <div class="slogan-single-box">
                    <div class="img-holder">
                        <div class="inner gray-bg">
                            <img src="/eye-1/assets/images/resources/slogan-single-2.jpg" alt="">
                        </div>
                        <div class="overlay-content">
                            <h2>Best lasik clinic helping<br> your visions.</h2>
                            <div class="btns-box">
                                <a class="btn-one" href="#">
                                    <span class="txt">Book Appointment<i class="fa fa-angle-double-right round" aria-hidden="true"></i></span>
                                </a>
                            </div>
                        </div>    
                    </div>
                </div>
            </div>
            <!--End Slogan Single Box-->      
        </div>
    </div>
</section>
<!--End Slogan Style2 Area-->

<!--Start subscribe Area-->
<section class="subscribe-area">
    <div class="container">
        <div class="row">
            <div class="col-xl-12">
               
                <div class="left pull-left">
                    <div class="subscribe-social-links">
                        <ul>
                            <li>
                                <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a> 
                            </li>
                            <li>
                                <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a> 
                            </li>
                            <li>
                                <a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                            </li>
                            <li>
                                <a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a> 
                            </li>
                        </ul>
                    </div>    
                </div>
                
                <div class="right pull-right">
                    <div class="subscribe-content-box clearfix">
                        <div class="subscribe-title">
                            <h3>Newsletter</h3>
                        </div>
                        <div class="subscribe-box">
                            <form class="subscribe-form black_ver" action="#">
                                <input type="email" name="email" placeholder="Your email address">
                                <button type="submit"><i class="fa fa-angle-double-right" aria-hidden="true"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</section>
<!--End subscribe Area-->



` }} />
      <Footer />
    </div>
  );
}
