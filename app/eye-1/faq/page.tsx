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


<!--Start breadcrumb area-->     
<section class="breadcrumb-area" style="background-image: url('/eye-1/assets/images/breadcrumb/breadcrumb-1.jpg);">
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
                            <li class="active">FAQs</li>
                        </ul>    
                    </div>
                    
                    <div class="title wow slideInUp animated" data-wow-delay="0.3s" data-wow-duration="1500ms">
                       <h2>FAQs</h2>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</section>
<!--End breadcrumb area-->


<!--Start Faq Content Area-->
<section class="faq-content-area faq-page">
    <div class="container">
        <div class="row">
            <div class="col-xl-12">
                <div class="faq-content-box">
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
                            <div class="accord-btn"><h4>Service thatâ€™ll make you see us with your eyes</h4></div>
                            <div class="accord-content">
                                <p>Suspendisse finibus urna mauris, lorem ipsum is simply free text vitae consequat quam vel. Vestibulum leo ligula, available to the market for the new stuff vitae commodo nisl.</p>
                            </div>
                        </div>
                        <!--End single accordion box-->
                        <!--Start single accordion box-->
                        <div class="accordion accordion-block">
                            <div class="accord-btn"><h4>Weâ€™re ready to protect your vision</h4></div>
                            <div class="accord-content">
                                <p>Suspendisse finibus urna mauris, lorem ipsum is simply free text vitae consequat quam vel. Vestibulum leo ligula, available to the market for the new stuff vitae commodo nisl.</p>
                            </div>
                        </div>
                        <!--End single accordion box-->
                        
                        <!--Start single accordion box-->
                        <div class="accordion accordion-block">
                            <div class="accord-btn"><h4>Lasik eye specialist availbility</h4></div>
                            <div class="accord-content">
                                <p>Suspendisse finibus urna mauris, lorem ipsum is simply free text vitae consequat quam vel. Vestibulum leo ligula, available to the market for the new stuff vitae commodo nisl.</p>
                            </div>
                        </div>
                        <!--End single accordion box-->
                        <!--Start single accordion box-->
                        <div class="accordion accordion-block bordernone">
                            <div class="accord-btn"><h4>The best way to enhance your eye expeirence</h4></div>
                            <div class="accord-content">
                                <p>Suspendisse finibus urna mauris, lorem ipsum is simply free text vitae consequat quam vel. Vestibulum leo ligula, available to the market for the new stuff vitae commodo nisl.</p>
                            </div>
                        </div>
                        <!--End single accordion box-->
                    </div> 
                </div>    
            </div>
            
        </div>
    </div>
</section>
<!--End Faq Content Area-->

<!--Start Emergency Contact Area-->
<section class="emergency-contact-area" style="background-image: url('/eye-1/assets/images/parallax-background/emergency-contact-area-bg.jpg)">
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

<!--Start Contact Form Style1 Area-->
<section class="contact-form-style1-area">
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
