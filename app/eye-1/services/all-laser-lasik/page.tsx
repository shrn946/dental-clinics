'use client';
import React, {useEffect} from 'react';
import HeaderOne from '../../components/HeaderOne';
import MobileMenu from '../../components/MobileMenu';
import Footer from '../../components/Footer';

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


<!--Start breadcrumb area-->     
<section class="breadcrumb-area" style="background-image: url('/eye-1/assets/images/breadcrumb/breadcrumb-1.jpg');">
    <div class="layer-outer-icon" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
        <img src="/eye-1/assets/images/icon/icon-breadcrumb.png" alt="Icon">
    </div>
    <div class="container">
        <div class="row">
            <div class="col-xl-12">
                <div class="inner-content clearfix">
                    <div class="breadcrumb-menu wow slideInDown animated" data-wow-delay="0.3s" data-wow-duration="1500ms">
                        <ul class="clearfix">
                            <li><a href="/eye-1">Home</a></li>
                            <li class="active">Services Single</li>
                        </ul>    
                    </div>
                    
                    <div class="title wow slideInUp animated" data-wow-delay="0.3s" data-wow-duration="1500ms">
                       <h2>All Laser Lasik</h2>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</section>
<!--End breadcrumb area-->

<!--Start Services details Area-->
<section class="services-details-area">
    <div class="container">  
        <div class="row">
            <div class="col-xl-8 col-lg-7">
                <div class="services-details-content">
                    <div class="services-details-image1">
                        <img src="/eye-1/assets/images/services/services-details-2.jpg" alt="Awesome Image">
                        <div class="icon"><span class="icon-glasses"></span></div>    
                    </div>
                    <div class="services-details-text1">
                        <h2>All Laser Lasik</h2>
                        <p>There are many variations passages of lorem ipsum available but the majority have suffered alteration. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Start up money or a decent amount of savings will get you started cleaning business Suspen disse convallis nulla vel bibendum porta. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    <div class="services-details-text2">
                        <div class="row">
                            <div class="col-xl-5">
                                <div class="img-box">
                                    <img src="/eye-1/assets/images/services/services-details-small.jpg" alt="Awesome Image">
                                </div>
                            </div>
                            <div class="col-xl-7">
                                <div class="text-box">
                                    <h3>Lasik Benefits</h3>
                                    <p>When an unknown printer took a galley of type and scrambled it to make specimen book.</p>
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
                    <div class="service-details-faq-box">
                        <div class="accordion-box">
                            <!--Start single accordion box-->
                            <div class="accordion accordion-block">
                                <div class="accord-btn active"><h4>A good test could save your eye vision</h4></div>
                                <div class="accord-content collapsed">
                                    <p>Suspendisse finibus urna mauris, lorem ipsum is simply free text vitae consequat quam vel. Vestibulum leo ligula, available to the market for the new stuff vitae commodo nisl.</p>
                                </div>
                            </div>
                            <!--End single accordion box-->
                            <!--Start single accordion box-->
                            <div class="accordion accordion-block">
                                <div class="accord-btn"><h4>Service thatÃ¢â‚¬â„¢ll make you see us with your eyes</h4></div>
                                <div class="accord-content">
                                    <p>Suspendisse finibus urna mauris, lorem ipsum is simply free text vitae consequat quam vel. Vestibulum leo ligula, available to the market for the new stuff vitae commodo nisl.</p>
                                </div>
                            </div>
                            <!--End single accordion box-->
                            <!--Start single accordion box-->
                            <div class="accordion accordion-block bordernone">
                                <div class="accord-btn"><h4>WeÃ¢â‚¬â„¢re ready to protect your vision</h4></div>
                                <div class="accord-content">
                                    <p>Suspendisse finibus urna mauris, lorem ipsum is simply free text vitae consequat quam vel. Vestibulum leo ligula, available to the market for the new stuff vitae commodo nisl.</p>
                                </div>
                            </div>
                            <!--End single accordion box-->
                        </div> 
                    </div>
                    <div class="services-details-text3">
                        <h2>The best way to protect your eyes</h2>
                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                </div>
            </div>
            
            <div class="col-xl-4 col-lg-5">
                <div class="services-details-sidebar">
                    <div class="single-sidebar1">
                        <div class="title">
                            <h3>Categories</h3>
                        </div>
                        <div class="page-links">
                            <ul>
                                <li><a href="/eye-1/services/surgical-procedure">Surgical Procedure</a></li>
                                <li class="active"><a href="/eye-1/services/all-laser-lasik">All Laser Lasik</a></li>
                                <li><a href="/eye-1/services/cornea-glaucoma">Cornea & Glaucoma</a></li>
                                <li><a href="/eye-1/services/eye-surgery">Eye Surgery</a></li>
                                <li><a href="/eye-1/services/eye-test-care">Eye Test Care</a></li>
                                <li><a href="/eye-1/services/contact-lenses">Contact Lenses</a></li>
                            </ul>
                        </div>    
                    </div>
                    <div class="single-sidebar2" style="background-image: url('/eye-1/assets/images/sidebar/single-sidebar2-bg.jpg')">
                        <a href="#">Book Appointment</a>
                        <h2>We protect<br> your eye<br> vision</h2>       
                    </div> 
                        
                </div>    
            </div>
         
            
        </div>
    </div>
</section>
<!--End Services details Area-->

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
