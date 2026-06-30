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
                            <li class="active">News</li>
                        </ul>    
                    </div>
                    
                    <div class="title wow slideInUp animated" data-wow-delay="0.3s" data-wow-duration="1500ms">
                       <h2>Our News</h2>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</section>
<!--End breadcrumb area-->

<!--Start Blog Style1 Area-->
<section class="blog-style1-area">
    <div class="container">
        <div class="row">
            <!--Start Single blog Style1-->
            <div class="col-xl-4 col-lg-6 col-md-6">
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
                                <a class="readmore" href="/eye-1/blog/single">Read More</a>
                            </div>
                            <div class="right">
                                <a class="btn-style3" href="/eye-1/blog/single"><i class="fa fa-angle-double-right" aria-hidden="true"></i></a>
                            </div>
                        </div>
                    </div>
                       
                </div>
            </div>
            <!--End Single blog Style1-->
            <!--Start Single blog Style1-->
            <div class="col-xl-4 col-lg-6 col-md-6">
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
                                <a class="readmore" href="/eye-1/blog/single">Read More</a>
                            </div>
                            <div class="right">
                                <a class="btn-style3" href="/eye-1/blog/single"><i class="fa fa-angle-double-right" aria-hidden="true"></i></a>
                            </div>
                        </div>
                    </div>
                       
                </div>
            </div>
            <!--End Single blog Style1-->
            <!--Start Single blog Style1-->
            <div class="col-xl-4 col-lg-6 col-md-6">
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
                                <a class="readmore" href="/eye-1/blog/single">Read More</a>
                            </div>
                            <div class="right">
                                <a class="btn-style3" href="/eye-1/blog/single"><i class="fa fa-angle-double-right" aria-hidden="true"></i></a>
                            </div>
                        </div>
                    </div>
                       
                </div>
            </div>
            <!--End Single blog Style1-->
            
            
            <!--Start Single blog Style1-->
            <div class="col-xl-4 col-lg-6 col-md-6">
                <div class="single-blog-style1 wow fadeInLeft" data-wow-delay="100ms" data-wow-duration="1500ms">
                    <div class="img-holder">
                        <div class="inner">
                            <img src="/eye-1/assets/images/blog/blog-v1-4.jpg" alt="Awesome Image">
                        </div>
                        <div class="date-box">
                            <h5>10 June</h5>
                        </div>
                    </div> 
                    <div class="text-holder">
                        <h3 class="blog-title"><a href="/eye-1/blog/single">Get a 7 tips for eye lasik experience</a></h3>
                        <ul class="meta-info">
                            <li><span class="icon-user thm-clr"></span><a href="#">Admin</a></li>
                            <li><span class="icon-comments thm-clr"></span><a href="#">2 Comments</a></li>
                        </ul>
                        <div class="text">
                            <p>Lorem ipsum dolor sit amet ctetur cing elituspe ndisse cip <span>...</span></p>    
                        </div>
                        <div class="bottom-box">
                            <div class="left">
                                <a class="readmore" href="/eye-1/blog/single">Read More</a>
                            </div>
                            <div class="right">
                                <a class="btn-style3" href="/eye-1/blog/single"><i class="fa fa-angle-double-right" aria-hidden="true"></i></a>
                            </div>
                        </div>
                    </div>
                       
                </div>
            </div>
            <!--End Single blog Style1-->
            <!--Start Single blog Style1-->
            <div class="col-xl-4 col-lg-6 col-md-6">
                <div class="single-blog-style1 wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                    <div class="img-holder">
                        <div class="inner">
                            <img src="/eye-1/assets/images/blog/blog-v1-5.jpg" alt="Awesome Image">
                        </div>
                        <div class="date-box">
                            <h5>07 June</h5>
                        </div>
                    </div> 
                    <div class="text-holder">
                        <h3 class="blog-title"><a href="/eye-1/blog/single">We give best care to your eyes</a></h3>
                        <ul class="meta-info">
                            <li><span class="icon-user thm-clr"></span><a href="#">Admin</a></li>
                            <li><span class="icon-comments thm-clr"></span><a href="#">2 Comments</a></li>
                        </ul>
                        <div class="text">
                            <p>Lorem ipsum dolor sit amet ctetur cing elituspe ndisse cip <span>...</span></p>    
                        </div>
                        <div class="bottom-box">
                            <div class="left">
                                <a class="readmore" href="/eye-1/blog/single">Read More</a>
                            </div>
                            <div class="right">
                                <a class="btn-style3" href="/eye-1/blog/single"><i class="fa fa-angle-double-right" aria-hidden="true"></i></a>
                            </div>
                        </div>
                    </div>
                       
                </div>
            </div>
            <!--End Single blog Style1-->
            <!--Start Single blog Style1-->
            <div class="col-xl-4 col-lg-6 col-md-6">
                <div class="single-blog-style1 wow fadeInLeft" data-wow-delay="300ms" data-wow-duration="1500ms">
                    <div class="img-holder">
                        <div class="inner">
                            <img src="/eye-1/assets/images/blog/blog-v1-6.jpg" alt="Awesome Image">
                        </div>
                        <div class="date-box">
                            <h5>02 June</h5>
                        </div>
                    </div> 
                    <div class="text-holder">
                        <h3 class="blog-title"><a href="/eye-1/blog/single">You're nothing without your eyes </a></h3>
                        <ul class="meta-info">
                            <li><span class="icon-user thm-clr"></span><a href="#">Admin</a></li>
                            <li><span class="icon-comments thm-clr"></span><a href="#">2 Comments</a></li>
                        </ul>
                        <div class="text">
                            <p>Lorem ipsum dolor sit amet ctetur cing elituspe ndisse cip <span>...</span></p>    
                        </div>
                        <div class="bottom-box">
                            <div class="left">
                                <a class="readmore" href="/eye-1/blog/single">Read More</a>
                            </div>
                            <div class="right">
                                <a class="btn-style3" href="/eye-1/blog/single"><i class="fa fa-angle-double-right" aria-hidden="true"></i></a>
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
