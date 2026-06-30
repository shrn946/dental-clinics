'use client';
import React, {useEffect} from 'react';
import HeaderOne from '../components/HeaderOne';
import MobileMenu from '../components/MobileMenu';
import Footer from '../components/Footer';

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
<section id="banner" class="main-slider style2">
    <div class="slider-box">
        <!-- Banner Carousel -->
        <div class="banner-carousel owl-theme owl-carousel">
            <!-- Slide -->
            <div class="slide">
                <div class="image-layer" style="background-image:url('/eye-1/assets/images/slides/slide-v1-1.jpg')"></div>
                <div class="auto-container">
                    <div class="content">
                        <div class="sub-title">Optometrist & Eye Care Clinic</div>
                        <h2>We bring their world<br> into <span>Focus</span></h2>
                        <div class="btns-box">
                            <a class="btn-one" href="#"><span class="txt">Discover More<i class="fa fa-angle-double-right round" aria-hidden="true"></i></span></a>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Slide -->
            <div class="slide">
                <div class="image-layer" style="background-image:url('/eye-1/assets/images/slides/slide-v1-2.jpg')"></div>
                <div class="auto-container">
                    <div class="content text-center">
                        <div class="sub-title">Optometrist & Eye Care Clinic</div>
                        <h2>We bring their world<br> into <span>Focus</span></h2>
                        <div class="btns-box">
                            <a class="btn-one" href="#"><span class="txt">Discover More<i class="fa fa-angle-double-right round" aria-hidden="true"></i></span></a>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Slide -->
            <div class="slide">
                <div class="image-layer" style="background-image:url('/eye-1/assets/images/slides/slide-v1-3.jpg')"></div>
                <div class="auto-container">
                    <div class="content text-center">
                        <div class="sub-title">Optometrist & Eye Care Clinic</div>
                        <h2>We bring their world<br> into <span>Focus</span></h2>
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

<!--Start Featured Area-->
<section id="about" class="featured-area">
    <div class="container">
        <div class="row">
            <div class="col-xl-12">
                <div class="top-title">
                    <div class="sec-title">
                        <h2><span>Oktilkal</span> here to help<br> you see better</h2>
                    </div>
                    <div class="text">
                        <p>Lorem ipsum dolor sit amet nsectetur cing elituspe ndisse suscipit sagitis leo sit.</p>
                    </div>    
                </div>
            </div>
        </div>
        <div class="row">
            <!--Start Single Featured Box-->
            <div class="col-xl-3 col-lg-6 col-md-6">
                <div class="single-featured-box text-center">
                    <div class="icon-holder">
                        <span class="icon-testing-glasses"></span>
                    </div>
                    <h3>Laser Eye<br> Correction</h3>
                    <p>Lorem ipsum is free text used by neque est qui lorem.</p>    
                </div>    
            </div>
            <!--End Single Featured Box-->
            <!--Start Single Featured Box-->
            <div class="col-xl-3 col-lg-6 col-md-6">
                <div class="single-featured-box text-center">
                    <div class="icon-holder">
                        <span class="icon-eye-1"></span>
                    </div>
                    <h3>Eye<br> Examination</h3>
                    <p>Lorem ipsum is free text used by neque est qui lorem.</p>    
                </div>    
            </div>
            <!--End Single Featured Box-->
            <!--Start Single Featured Box-->
            <div class="col-xl-3 col-lg-6 col-md-6">
                <div class="single-featured-box text-center">
                    <div class="icon-holder">
                        <span class="icon-optometrist"></span>
                    </div>
                    <h3>Contact<br> Lenses</h3>
                    <p>Lorem ipsum is free text used by neque est qui lorem.</p>    
                </div>    
            </div>
            <!--End Single Featured Box-->
            <div class="col-xl-3 col-lg-6 col-md-6">
                <div class="opening-hours-contact-box">
                    <h3>Opening<br> hours</h3>
                    <ul>
                        <li>
                            <p>Monday</p>
                            <h4>12:00pm - 19:00pm</h4>
                        </li>
                        <li>
                            <p>Tuesday to Friday</p>
                            <h4>8:00am - 19:00pm</h4>
                        </li>
                        <li>
                            <p>Saturday</p>
                            <h4>8:00am - 3:30pm</h4>
                        </li>
                    </ul>
                </div>
            </div>
            
        </div>
    </div>
</section>
<!--End Featured Area-->

<!--Start Emergency Contact Area-->
<section class="emergency-contact-area" style="background-image: url('/eye-1/assets/images/parallax-background/emergency-contact-area-bg.jpg')">
    <div class="container">
        <div class="row">
            <div class="col-xl-5">
                <div class="emergency-contact-number">
                    <div class="icon">
                        <span class="icon-customer-service"></span>
                    </div>
                    <div class="title">
                        <h2>For Emergency Cases</h2>
                        <a href="tel:+11987654321">666 888 0000</a>
                    </div>    
                </div>
            </div>
            <div class="col-xl-4">
                <div class="emergency-contact-text">
                    <p>Lorem ipsum dolor sit amet nsectetur cing elituspe ndisse suscipit sagitis leo sit.</p>
                </div>
            </div>
            <div class="col-xl-3">
                <div class="emergency-contact-btns-box">
                    <a class="btn-one" href="#"><span class="txt">Book Appointment<i class="fa fa-angle-double-right round" aria-hidden="true"></i></span></a>
                </div>    
            </div>    
        </div>
    </div>
</section>
<!--End Emergency Contact Area-->

<!--Start Services Style1 Area-->
<section id="services" class="services-style1-area services-style1-instyle2">
    <div class="container">
        <div class="row">
            <div class="col-xl-12">
                <div class="top-title">
                    <div class="sec-title">
                        <h2><span>Services</span> we're offering<br> to our clients</h2>
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


<!--Start Slogan Style3 Area-->
<section class="slogan-style3-area" style="background-image: url('/eye-1/assets/images/parallax-background/slogan-style3-area-bg.jpg')">
    <div class="container">
        <div class="row">
            <div class="col-xl-12">
                <div class="slogan-content-style3 paroller">
                    <div class="title">
                        <h2><span>For a clear</span> tomorrow, Bring<br> their world into focus</h2>
                    </div>
                    <div class="btns-box">
                        <a class="btn-one" href="#"><span class="txt">Discover More<i class="fa fa-angle-double-right round" aria-hidden="true"></i></span></a>
                    </div> 
                </div>    
            </div>    
        </div>
    </div>
</section>
<!--End Slogan Style3 Area-->   


<!--Start Blog Style1 Area-->
<section id="news" class="blog-style1-area graybg">
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
                        <h3 class="blog-title"><a href="/eye-1/blog/single">We're ready to enhance your vision</a></h3>
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
                <div class="single-blog-style1 style1-instyle2 wow fadeInLeft" data-wow-delay="300ms" data-wow-duration="1500ms">
                    <div class="big-text">
                        <h3>We have helped a lot of people to focus on their eye vision, eye sight and get a better quality visual results.</h3>
                        <div class="blog-quote"><img src="/eye-1/assets/images/icon/blog-quote.png" alt="Quote"></div>
                    </div>   
                    <div class="text-holder">
                        <h3 class="blog-title"><a href="/eye-1/blog/single">Protect your eyes from dust and disease. Get a better vision</a></h3>
                        <ul class="meta-info">
                            <li><span class="icon-user thm-clr"></span><a href="#">Admin</a></li>
                            <li><span class="icon-comments thm-clr"></span><a href="#">2 Comments</a></li>
                        </ul>
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

<!--Start Contact Form Style1 Area-->
<section id="contact" class="contact-form-style1-area">
    <div class="shape" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1500">
        <img class="float-bob-y" src="/eye-1/assets/images/shape/shape-4.png" alt="Shape">
    </div>
    <div class="container">
        <div class="row">
            <div class="col-xl-7">
                <div class="contact-form home-p">
                    <div class="sec-title">
                        <h2><span>We love</span> to hear from our<br> customers</h2>
                    </div>
                    <form id="contact-form" name="contact_form" class="default-form2" action="https://mehedi.asiandevelopers.com/demo/oktilcal/assets/inc/sendmail.php" method="post">
                        <div class="row">
                            <div class="col-xl-6 col-lg-6">
                                <div class="input-box"> 
                                    <input type="text" name="form_name" value="" placeholder="Your name" required="">
                                </div>
                                <div class="input-box"> 
                                    <input type="text" name="form_phone" value="" placeholder="Phone number">
                                </div>     
                            </div>
                            <div class="col-xl-6 col-lg-6">
                                <div class="input-box"> 
                                    <input type="email" name="form_email" value="" placeholder="Email address" required="">
                                </div>
                                <div class="input-box"> 
                                    <input type="text" name="form_subject" value="" placeholder="Subject">
                                </div>      
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xl-12"> 
                                <div class="input-box">    
                                    <textarea name="form_message" placeholder="Write message" required=""></textarea>
                                </div>
                            </div>
                        </div> 
                        <div class="row">
                            <div class="col-xl-12">
                                <div class="button-box">
                                    <input id="form_botcheck" name="form_botcheck" class="form-control" type="hidden" value="">
                                    <button class="btn-one" type="submit" data-loading-text="Please wait...">
                                        <span class="txt">Send Massage<i class="fa fa-angle-double-right round" aria-hidden="true"></i></span>
                                    </button>    
                                </div>
                            </div>
                        </div> 
                         
                    </form>
                </div>
                    
            </div>
            
            <div class="col-xl-5">
                <div class="contact-image-box clearfix" data-aos="fade-left" data-aos-easing="linear" data-aos-duration="300">
                    <img src="/eye-1/assets/images/resources/contact-image.jpg" alt="Awesome Image">
                </div>    
            </div>
            
        </div>
    </div>
</section>
<!--End Contact Form Style1 Area-->


<!--Start Partner Style2 Area-->
<section class="partner-style2-area" style="background-image: url('/eye-1/assets/images/parallax-background/partner-style2-area-bg.jpg')">
    <div class="container">
        <div class="row">
            <div class="col-xl-12">
                <div class="partner-box-style2">
                    <!--Start Single Partner Logo Box Style2-->
                    <div class="single-partner-logo-box-style2">
                        <a href="#"><img src="/eye-1/assets/images/brand/brand-1.png" alt="Awesome Image"></a>
                    </div>
                    <!--End Single Partner Logo Box Style2-->
                    <!--Start Single Partner Logo Box Style2-->
                    <div class="single-partner-logo-box-style2">
                        <a href="#"><img src="/eye-1/assets/images/brand/brand-2.png" alt="Awesome Image"></a>
                    </div>
                    <!--End Single Partner Logo Box Style2-->
                    <!--Start Single Partner Logo Box Style2-->
                    <div class="single-partner-logo-box-style2">
                        <a href="#"><img src="/eye-1/assets/images/brand/brand-3.png" alt="Awesome Image"></a>
                    </div>
                    <!--End Single Partner Logo Box Style2-->
                    <!--Start Single Partner Logo Box Style2-->
                    <div class="single-partner-logo-box-style2">
                        <a href="#"><img src="/eye-1/assets/images/brand/brand-4.png" alt="Awesome Image"></a>
                    </div>
                    <!--End Single Partner Logo Box Style2-->
                    <!--Start Single Partner Logo Box Style2-->
                    <div class="single-partner-logo-box-style2">
                        <a href="#"><img src="/eye-1/assets/images/brand/brand-5.png" alt="Awesome Image"></a>
                    </div>
                    <!--End Single Partner Logo Box Style2-->
                </div>
            </div>
        </div>
    </div>
    
</section> 
<!--End Partner Style2 Area-->


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
                
                <div class="right clearfix pull-right">
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
