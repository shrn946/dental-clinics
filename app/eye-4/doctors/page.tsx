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
                            <li class="active">Doctors</li>
                        </ul>    
                    </div>
                    
                    <div class="title wow slideInUp animated" data-wow-delay="0.3s" data-wow-duration="1500ms">
                       <h2>Our Doctors</h2>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</section>
<!--End breadcrumb area-->


<!--Start Team Style2 Area-->
<section class="team-style2-area team-page">
    <div class="container">
        <div class="row">
            <!--Start Single Team Member-->
            <div class="col-xl-4 col-lg-6 col-md-6">
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
            <div class="col-xl-4 col-lg-6 col-md-6">
                <div class="single-team-member wow animated fadeInUp" data-wow-delay="0.3s">
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
            <div class="col-xl-4 col-lg-6 col-md-6">
                <div class="single-team-member wow animated fadeInUp" data-wow-delay="0.5s">
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
             
            <!--Start Single Team Member-->
            <div class="col-xl-4 col-lg-6 col-md-6">
                <div class="single-team-member wow animated fadeInUp" data-wow-delay="0.1s">
                    <div class="img-holder">
                        <div class="inner">
                            <img src="/eye-4/assets/images/team/team-v2-4.jpg" alt="Awesome Image">
                            <div class="overlay-style-one bg2"></div>
                        </div>
                    </div>
                    <div class="title-holder">
                        <div class="left">
                            <h3><a href="#">Sarah Albert</a></h3> 
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
            <div class="col-xl-4 col-lg-6 col-md-6">
                <div class="single-team-member wow animated fadeInUp" data-wow-delay="0.3s">
                    <div class="img-holder">
                        <div class="inner">
                            <img src="/eye-4/assets/images/team/team-v2-5.jpg" alt="Awesome Image">
                            <div class="overlay-style-one bg2"></div>
                        </div>
                    </div>
                    <div class="title-holder">
                        <div class="left">
                            <h3><a href="#">John Smith</a></h3> 
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
            <div class="col-xl-4 col-lg-6 col-md-6">
                <div class="single-team-member wow animated fadeInUp" data-wow-delay="0.5s">
                    <div class="img-holder">
                        <div class="inner">
                            <img src="/eye-4/assets/images/team/team-v2-6.jpg" alt="Awesome Image">
                            <div class="overlay-style-one bg2"></div>
                        </div>
                    </div>
                    <div class="title-holder">
                        <div class="left">
                            <h3><a href="#">Anna Martin</a></h3> 
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
