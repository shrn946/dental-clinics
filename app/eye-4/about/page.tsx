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
                    <a href="/eye-4" class="img-responsive"><span class="logo-text" style="font-size: 22px;">Opti<span>Luxe</span></span></a>
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


<!--Start breadcrumb area-->     
<section class="breadcrumb-area" style="background-image: url('/eye-4/assets/images/breadcrumb/breadcrumb-1.jpg');">
    <div class="layer-outer-icon" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
        <img src="/eye-4/assets/images/icon/icon-breadcrumb.png" alt="Icon">
    </div>
    <div class="container">
        <div class="row">
            <div class="col-xl-12">
                <div class="inner-content clearfix">
                    <div class="breadcrumb-menu wow slideInDown animated" data-wow-delay="0.3s" data-wow-duration="1500ms">
                        <ul class="clearfix">
                            <li><a href="/eye-4">Home</a></li>
                            <li class="active">About Us</li>
                        </ul>    
                    </div>
                    
                    <div class="title wow slideInUp animated" data-wow-delay="0.3s" data-wow-duration="1500ms">
                       <h2>About Us</h2>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</section>
<!--End breadcrumb area-->

<!--Start About Style1 Area-->
<section class="about-style1-area">
    <div class="container">
        <div class="row">
            <div class="col-xl-12">
                <div class="about-style1-text-box">
                    <div class="sec-title">
                        <h2><span>Learn</span> more about our optiluxe<br> eye care clinic</h2>
                    </div>
                    <div class="inner-contant">
                        <div class="text-box">
                            <p>There are many variations of pass of lorem ipsum available but the majority have suffered alteration in some form. Injected humour randomised words which don't look even slightly believable you need to be sure there isn't anything embarrassing. Praesent arcu gravida vehicula est node maecenas loareet.</p>
                        </div>
                    </div>    
                </div>
                
                <div class="about-style1-image-box">
                    <div class="row">
                        <div class="col-xl-5">
                            <div class="single-image-box image1">
                                <img src="/eye-4/assets/images/about/about-1.jpg" alt="Awesome Image">
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-6 col-md-12">
                            <div class="single-image-box image2">
                                <img src="/eye-4/assets/images/about/about-2.jpg" alt="Awesome Image">
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-6 col-md-12">
                            <div class="single-image-box">
                                <img src="/eye-4/assets/images/about/about-3.jpg" alt="Awesome Image">
                                <div class="overlay-content">
                                    <div class="icon"><span class="icon-vision-1"></span></div>
                                    <h2>Trusted by more<br> than <span>8700</span> happy<br> patients</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  
                      
            </div>
        </div> 
    </div>    
</section>
<!--End About Style1 Area-->

<!--Start Partner Style3 Area-->
<section class="partner-style3-area">
    <div class="container">
        <div class="row">
            <div class="col-xl-12">
                <div class="partner-box-style3">
                    <!--Start Single Partner Logo Box Style3-->
                    <div class="single-partner-logo-box-style3">
                        <a href="#"><img src="/eye-4/assets/images/brand/brand-v2-1.png" alt="Awesome Image"></a>
                    </div>
                    <!--End Single Partner Logo Box Style3-->
                    <!--Start Single Partner Logo Box Style3-->
                    <div class="single-partner-logo-box-style3">
                        <a href="#"><img src="/eye-4/assets/images/brand/brand-v2-2.png" alt="Awesome Image"></a>
                    </div>
                    <!--End Single Partner Logo Box Style3-->
                    <!--Start Single Partner Logo Box Style3-->
                    <div class="single-partner-logo-box-style3">
                        <a href="#"><img src="/eye-4/assets/images/brand/brand-v2-3.png" alt="Awesome Image"></a>
                    </div>
                    <!--End Single Partner Logo Box Style3-->
                    <!--Start Single Partner Logo Box Style3-->
                    <div class="single-partner-logo-box-style3">
                        <a href="#"><img src="/eye-4/assets/images/brand/brand-v2-4.png" alt="Awesome Image"></a>
                    </div>
                    <!--End Single Partner Logo Box Style3-->
                    <!--Start Single Partner Logo Box Style3-->
                    <div class="single-partner-logo-box-style3">
                        <a href="#"><img src="/eye-4/assets/images/brand/brand-v2-5.png" alt="Awesome Image"></a>
                    </div>
                    <!--End Single Partner Logo Box Style3-->
                </div>
            </div>
        </div>
    </div>
</section> 
<!--End Partner Style3 Area-->

<!--Start Slogan Style3 Area-->
<section class="slogan-style3-area" style="background-image: url('/eye-4/assets/images/parallax-background/slogan-style3-area-bg.jpg')">
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

<!--Start Team Style2 Area-->
<section class="team-style2-area">
    <div class="container">
        <div class="row">
            <div class="col-xl-12">
                <div class="top-title">
                    <div class="sec-title">
                        <h2><span>Expert</span> & experienced<br> eye specialists</h2>
                    </div>
                    <div class="text">
                        <p>Lorem ipsum dolor sit amet nsectetur cing elituspe ndisse suscipit sagitis leo sit.</p>
                    </div>    
                </div>
            </div>
        </div>
        <div class="row">
            <!--Start Single Team Member-->
            <div class="col-xl-4 col-lg-4">
                <div class="single-team-member wow animated fadeInUp" data-wow-delay="0.1s">
                    <div class="img-holder">
                        <div class="inner">
                            <img src="/eye-4/assets/images/team/team-v2-1.jpg" alt="Awesome Image">
                            <div class="overlay-style-one bg2"></div>
                        </div>
                    </div>
                    <div class="title-holder">
                        <div class="left">
                            <h3><a href="#">Michale Hardson</a></h3> 
                            <p>Specialist</p>     
                        </div>
                        <div class="right">
                            <div class="team-social-links">
                                <ul>
                                    <li>
                                        <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a> 
                                    </li>
                                    <li>
                                        <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a> 
                                    </li>
                                </ul>
                            </div>
                        </div>      
                    </div>
                </div>   
            </div>
            <!--End Single Team Member-->  
            <!--Start Single Team Member-->
            <div class="col-xl-4 col-lg-4">
                <div class="single-team-member wow animated fadeInUp" data-wow-delay="0.1s">
                    <div class="img-holder">
                        <div class="inner">
                            <img src="/eye-4/assets/images/team/team-v2-2.jpg" alt="Awesome Image">
                            <div class="overlay-style-one bg2"></div>
                        </div>
                    </div>
                    <div class="title-holder">
                        <div class="left">
                            <h3><a href="#">Christine Rose</a></h3> 
                            <p>Specialist</p>     
                        </div>
                        <div class="right">
                            <div class="team-social-links">
                                <ul>
                                    <li>
                                        <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a> 
                                    </li>
                                    <li>
                                        <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a> 
                                    </li>
                                </ul>
                            </div>
                        </div>      
                    </div>
                </div>   
            </div>
            <!--End Single Team Member-->  
            <!--Start Single Team Member-->
            <div class="col-xl-4 col-lg-4">
                <div class="single-team-member wow animated fadeInUp" data-wow-delay="0.1s">
                    <div class="img-holder">
                        <div class="inner">
                            <img src="/eye-4/assets/images/team/team-v2-3.jpg" alt="Awesome Image">
                            <div class="overlay-style-one bg2"></div>
                        </div>
                    </div>
                    <div class="title-holder">
                        <div class="left">
                            <h3><a href="#">David Cooper</a></h3> 
                            <p>Specialist</p>     
                        </div>
                        <div class="right">
                            <div class="team-social-links">
                                <ul>
                                    <li>
                                        <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a> 
                                    </li>
                                    <li>
                                        <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a> 
                                    </li>
                                </ul>
                            </div>
                        </div>      
                    </div>
                </div>   
            </div>
            <!--End Single Team Member-->  
              
        </div>
    </div>
</section>
<!--End Team Style2 Area-->


<!--Start Welcome Area-->
<section class="welcome-area style2">
    <div class="container">
        <div class="row">
           
            <div class="col-xl-7">
                <div class="welcome-image-box style2">
                    <img src="/eye-4/assets/images/resources/welcome-3.jpg" alt="Awesome Image">
                    <div class="experience-box">
                        <h2>20</h2>
                        <h3>Years of<br> practicing</h3>    
                    </div>
                </div>    
            </div>
            
            <div class="col-xl-5">
                <div class="welcome-content-box style2">
                    <div class="sec-title">
                        <h2><span>We make</span> a difference<br> in their life</h2>
                    </div>
                    <div class="inner-content">
                        <h3>There are many variations of pass of lorem ipsum available but the majority have suffered alteration in some form.</h3>
                        <div class="text">
                            <p>Injected humour randomised words which don't look even slightly believable you need to be sure there isn't anything embarrassing.</p>
                        </div>
                        <div class="bottom-box">
                            <div class="author-info-box1">
                                <div class="image-box">
                                    <div class="inner">
                                        <img src="/eye-4/assets/images/resources/author-1.png" alt="Awesome Image">
                                    </div>
                                </div>
                                <div class="signature-box">
                                    <img src="/eye-4/assets/images/resources/signature.png" alt="Signature">
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



<!--Start Slogan Area-->
<section class="slogan-area" style="background-image: url('/eye-4/assets/images/parallax-background/slogan-area-bg.jpg')">
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
