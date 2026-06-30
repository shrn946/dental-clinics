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
                            <li class="active">Services</li>
                        </ul>    
                    </div>
                    
                    <div class="title wow slideInUp animated" data-wow-delay="0.3s" data-wow-duration="1500ms">
                       <h2>Our Services</h2>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</section>
<!--End breadcrumb area-->


<!--Start Services Page Area-->
<section class="services-page-area">
    <div class="container">  
        <div class="row">
            <!--Start Single service Style1-->
            <div class="col-xl-4 col-lg-4">
                <div class="single-service-style1 wow fadeInUp" data-wow-delay="100ms" data-wow-duration="1500ms">
                    <div class="img-holder">
                        <img src="/eye-1/assets/images/services/service-v1-1.jpg" alt="Awesome Image">
                        <div class="icon"><span class="icon-glasses"></span></div>
                    </div>
                    <div class="text-holder">
                        <h3><a href="/eye-1/services/surgical-procedure">Surgical Procedure</a></h3>
                        <p>Lorem ipsum dolor sit amet ctetur cing elituspe ndisse cip</p>
                        <div class="bottom-box">
                            <a class="btn-style3" href="/eye-1/services/surgical-procedure"><i class="fa fa-angle-double-right" aria-hidden="true"></i></a>
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
                        <h3><a href="/eye-1/services/all-laser-lasik">All Laser Lasik</a></h3>
                        <p>Lorem ipsum dolor sit amet ctetur cing elituspe ndisse cip</p>
                        <div class="bottom-box">
                            <a class="btn-style3" href="/eye-1/services/all-laser-lasik"><i class="fa fa-angle-double-right" aria-hidden="true"></i></a>
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
                        <h3><a href="/eye-1/services/cornea-glaucoma">Cornea & Glaucoma</a></h3>
                        <p>Lorem ipsum dolor sit amet ctetur cing elituspe ndisse cip</p>
                        <div class="bottom-box">
                            <a class="btn-style3" href="/eye-1/services/cornea-glaucoma"><i class="fa fa-angle-double-right" aria-hidden="true"></i></a>
                        </div>
                        <div class="counting">03</div> 
                    </div> 
                </div>
            </div>
            <!--End Single service Style1-->
            
            <!--Start Single service Style1-->
            <div class="col-xl-4 col-lg-4">
                <div class="single-service-style1 wow fadeInUp" data-wow-delay="100ms" data-wow-duration="1500ms">
                    <div class="img-holder">
                        <img src="/eye-1/assets/images/services/service-v1-4.jpg" alt="Awesome Image">
                        <div class="icon"><span class="icon-eye-4"></span></div>
                    </div>
                    <div class="text-holder">
                        <h3><a href="/eye-1/services/eye-surgery">Eye Surgery</a></h3>
                        <p>Lorem ipsum dolor sit amet ctetur cing elituspe ndisse cip</p>
                        <div class="bottom-box">
                            <a class="btn-style3" href="/eye-1/services/eye-surgery"><i class="fa fa-angle-double-right" aria-hidden="true"></i></a>
                        </div>
                        <div class="counting">04</div> 
                    </div> 
                </div>
            </div>
            <!--End Single service Style1-->
            <!--Start Single service Style1-->
            <div class="col-xl-4 col-lg-4">
                <div class="single-service-style1 wow fadeInDown" data-wow-delay="100ms" data-wow-duration="1500ms">
                    <div class="img-holder">
                        <img src="/eye-1/assets/images/services/service-v1-5.jpg" alt="Awesome Image">
                        <div class="icon"><span class="icon-eye-test"></span></div>
                    </div>
                    <div class="text-holder">
                        <h3><a href="/eye-1/services/eye-test-care">Eye Test Care</a></h3>
                        <p>Lorem ipsum dolor sit amet ctetur cing elituspe ndisse cip</p>
                        <div class="bottom-box">
                            <a class="btn-style3" href="/eye-1/services/eye-test-care"><i class="fa fa-angle-double-right" aria-hidden="true"></i></a>
                        </div>
                        <div class="counting">05</div> 
                    </div> 
                </div>
            </div>
            <!--End Single service Style1-->
            <!--Start Single service Style1-->
            <div class="col-xl-4 col-lg-4">
                <div class="single-service-style1 wow fadeInUp" data-wow-delay="100ms" data-wow-duration="1500ms">
                    <div class="img-holder">
                        <img src="/eye-1/assets/images/services/service-v1-6.jpg" alt="Awesome Image">
                        <div class="icon"><span class="icon-contact-lens"></span></div>
                    </div>
                    <div class="text-holder">
                        <h3><a href="/eye-1/services/contact-lenses">Contact Lenses</a></h3>
                        <p>Lorem ipsum dolor sit amet ctetur cing elituspe ndisse cip</p>
                        <div class="bottom-box">
                            <a class="btn-style3" href="/eye-1/services/contact-lenses"><i class="fa fa-angle-double-right" aria-hidden="true"></i></a>
                        </div>
                        <div class="counting">06</div> 
                    </div> 
                </div>
            </div>
            <!--End Single service Style1-->
            
        </div>
    </div>
</section>
<!--End Services Page Area-->  


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
