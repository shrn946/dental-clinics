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
<section class="main-slider style2">
    <div class="slider-box">
        <!-- Banner Carousel -->
        <div class="banner-carousel owl-theme owl-carousel">
            <!-- Slide -->
            <div class="slide">
                <div class="image-layer" style="background-image:url('/eye-1/assets/images/slides/slide-v1-1.jpg')"></div>
                <div class="auto-container">
                    <div class="content text-right">
                        <div class="sub-title">Ã˜Â¹Ã™Å Ã˜Â§Ã˜Â¯Ã˜Â© Ã˜Â§Ã™â€žÃ˜Â¹Ã™Å Ã™Ë†Ã™â€  Ã™Ë†Ã˜Â¹Ã™Å Ã˜Â§Ã˜Â¯Ã˜Â© Ã˜Â§Ã™â€žÃ˜Â¹Ã™Å Ã™Ë†Ã™â€ </div>
                        <h2>Ã™â€ Ã˜Â£Ã˜ÂªÃ™Å  Ã˜Â¹Ã˜Â§Ã™â€žÃ™â€¦Ã™â€¡Ã™â€¦<br> Ã˜Â¥Ã™â€žÃ™â€° <span>Ã˜Â§Ã™â€žÃ˜ÂªÃ˜Â±Ã™Æ’Ã™Å Ã˜Â²</span></h2>
                        <div class="btns-box">
                            <a class="btn-one btn-rtl" href="#"><span class="txt"><i class="fa fa-angle-double-right round" aria-hidden="true"></i>Ã˜Â¥Ã™Æ’Ã˜ÂªÃ˜Â´Ã™ Ã˜Â£Ã™Æ’Ã˜Â«Ã˜Â±</span></a>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Slide -->
            <div class="slide">
                <div class="image-layer" style="background-image:url('/eye-1/assets/images/slides/slide-v1-2.jpg')"></div>
                <div class="auto-container">
                    <div class="content text-center">
                        <div class="sub-title">Ã˜Â¹Ã™Å Ã˜Â§Ã˜Â¯Ã˜Â© Ã˜Â§Ã™â€žÃ˜Â¹Ã™Å Ã™Ë†Ã™â€  Ã™Ë†Ã˜Â¹Ã™Å Ã˜Â§Ã˜Â¯Ã˜Â© Ã˜Â§Ã™â€žÃ˜Â¹Ã™Å Ã™Ë†Ã™â€ </div>
                        <h2>Ã™â€ Ã˜Â£Ã˜ÂªÃ™Å  Ã˜Â¹Ã˜Â§Ã™â€žÃ™â€¦Ã™â€¡Ã™â€¦<br> into <span>Ã˜Â§Ã™â€žÃ˜ÂªÃ˜Â±Ã™Æ’Ã™Å Ã˜Â²</span></h2>
                        <div class="btns-box">
                            <a class="btn-one btn-rtl" href="#"><span class="txt"><i class="fa fa-angle-double-right round" aria-hidden="true"></i>Ã˜Â¥Ã™Æ’Ã˜ÂªÃ˜Â´Ã™ Ã˜Â£Ã™Æ’Ã˜Â«Ã˜Â±</span></a>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Slide -->
            <div class="slide">
                <div class="image-layer" style="background-image:url('/eye-1/assets/images/slides/slide-v1-3.jpg')"></div>
                <div class="auto-container">
                    <div class="content text-center">
                        <div class="sub-title">Ã˜Â¹Ã™Å Ã˜Â§Ã˜Â¯Ã˜Â© Ã˜Â§Ã™â€žÃ˜Â¹Ã™Å Ã™Ë†Ã™â€  Ã™Ë†Ã˜Â¹Ã™Å Ã˜Â§Ã˜Â¯Ã˜Â© Ã˜Â§Ã™â€žÃ˜Â¹Ã™Å Ã™Ë†Ã™â€ </div>
                        <h2>Ã™â€ Ã˜Â£Ã˜ÂªÃ™Å  Ã˜Â¹Ã˜Â§Ã™â€žÃ™â€¦Ã™â€¡Ã™â€¦<br> Ã˜Â¥Ã™â€žÃ™â€° <span>Ã˜Â§Ã™â€žÃ˜ÂªÃ˜Â±Ã™Æ’Ã™Å Ã˜Â²</span></h2>
                        <div class="btns-box">
                            <a class="btn-one btn-rtl" href="#"><span class="txt"><i class="fa fa-angle-double-right round" aria-hidden="true"></i>Ã˜Â¥Ã™Æ’Ã˜ÂªÃ˜Â´Ã™ Ã˜Â£Ã™Æ’Ã˜Â«Ã˜Â±</span></a>
                        </div>
                    </div>
                </div>
            </div>
          
            
        </div>
    </div>
</section>
<!-- End Main Slider -->

<!--Start Featured Area-->
<section dir="rtl" class="featured-area rtl">
    <div class="container">
        <div class="row">
            <div class="col-xl-12">
                <div class="top-title text-right">
                    <div class="sec-title">
                        <h2><span>Oktilkal</span> Ã™â€¡Ã™â€ Ã˜Â§ Ã™â€žÃ™â€žÃ™â€¦Ã˜Â³Ã˜Â§Ã˜Â¹Ã˜Â¯Ã˜Â©<br> Ã˜ÂªÃ˜Â±Ã™â€° Ã˜Â£Ã™Ã˜Â¶Ã™â€ž</h2>
                    </div>
                    <div class="text">
                        <p>Ã™Ë† Ã˜Â³Ã˜Â£Ã˜Â¹Ã˜Â±Ã˜Â¶ Ã™â€¦Ã˜Â«Ã˜Â§Ã™â€ž Ã˜Â­Ã™Å  Ã™â€žÃ™â€¡Ã˜Â°Ã˜Â§Ã˜Å’ Ã™â€¦Ã™â€  Ã™â€¦Ã™â€ Ã˜Â§ Ã™â€žÃ™â€¦ Ã™Å Ã˜ÂªÃ˜Â­Ã™â€¦Ã™â€ž Ã˜Â¬Ã™â€¡Ã˜Â¯ Ã˜Â¨Ã˜Â¯Ã™â€ Ã™Å  Ã˜Â´Ã˜Â§Ã™â€š Ã˜Â¥Ã™â€žÃ˜Â§ Ã™â€¦Ã™â€  Ã˜Â£Ã˜Â¬Ã™â€ž Ã˜Â§Ã™â€žÃ˜Â­Ã˜ÂµÃ™Ë†Ã™â€ž Ã˜Â¹Ã™â€žÃ™â€° Ã™â€¦Ã™Å Ã˜Â²Ã˜Â© Ã˜Â£Ã™Ë† Ã™Ã˜Â§Ã˜Â¦Ã˜Â¯Ã˜Â©Ã˜Å¸ Ã™Ë†Ã™â€žÃ™Æ’Ã™â€  Ã™â€¦Ã™â€  Ã™â€žÃ˜Â¯Ã™Å Ã™â€¡ Ã˜Â§Ã™â€žÃ˜Â­Ã™â€š</p>
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
                    <h3>Ã˜Â¹Ã™Å Ã™â€  Ã˜Â§Ã™â€žÃ™â€žÃ™Å Ã˜Â²Ã˜Â±<br> Ã˜ÂªÃ˜ÂµÃ˜Â­Ã™Å Ã˜Â­</h3>
                    <p>Ã™Ë†Ã˜Â³Ã˜Â£Ã˜Â¹Ã˜Â±Ã˜Â¶ Ã™â€¦Ã˜Â«Ã˜Â§Ã™â€ž Ã˜Â­Ã™Å  Ã™â€žÃ™â€¡Ã˜Â°Ã˜Â§Ã˜Å’ Ã™â€¦Ã™â€  Ã™â€¦Ã™â€ Ã˜Â§ Ã™â€žÃ™â€¦ Ã™Å Ã˜ÂªÃ˜Â­Ã™â€¦Ã™â€ž Ã˜Â¬Ã™â€¡Ã˜Â¯ Ã˜Â¨Ã˜Â¯Ã™â€ Ã™Å  Ã˜Â´ Ã˜Â³Ã˜Â£Ã˜Â¹Ã˜Â±Ã˜Â¶ Ã™â€¦Ã˜Â«Ã˜Â§Ã™â€ž Ã˜Â­Ã™Å  Ã™â€žÃ™â€¡Ã˜Â°Ã˜Â§Ã˜Å’ Ã™â€¦Ã™â€  Ã™â€¦Ã™â€ Ã˜Â§ Ã™â€žÃ™â€¦ Ã™Å Ã˜ÂªÃ˜Â­Ã™â€¦Ã™â€ž Ã˜Â¬Ã™â€¡Ã˜Â¯ Ã˜Â¨Ã˜Â¯Ã™â€ Ã™Å  Ã˜Â´Ã˜Â§Ã™â€š Ã˜Â¥Ã™â€žÃ˜Â§ Ã™â€¦Ã™â€  Ã˜Â£Ã˜Â¬Ã™â€ž Ã˜Â§Ã™â€žÃ˜Â­Ã˜ÂµÃ™Ë†Ã™â€ž</p>    
                </div>    
            </div>
            <!--End Single Featured Box-->
            <!--Start Single Featured Box-->
            <div class="col-xl-3 col-lg-6 col-md-6">
                <div class="single-featured-box text-center">
                    <div class="icon-holder">
                        <span class="icon-eye-1"></span>
                    </div>
                    <h3>Ã˜Â¹Ã™Å Ã™â€ <br> Ã˜Â§Ã™â€žÃ™Ã˜Â­Ã˜Âµ</h3>
                    <p>Ã™Ë†Ã˜Â³Ã˜Â£Ã˜Â¹Ã˜Â±Ã˜Â¶ Ã™â€¦Ã˜Â«Ã˜Â§Ã™â€ž Ã˜Â­Ã™Å  Ã™â€žÃ™â€¡Ã˜Â°Ã˜Â§Ã˜Å’ Ã™â€¦Ã™â€  Ã™â€¦Ã™â€ Ã˜Â§ Ã™â€žÃ™â€¦ Ã™Å Ã˜ÂªÃ˜Â­Ã™â€¦Ã™â€ž Ã˜Â¬Ã™â€¡Ã˜Â¯ Ã˜Â¨Ã˜Â¯Ã™â€ Ã™Å  Ã˜Â´ Ã˜Â³Ã˜Â£Ã˜Â¹Ã˜Â±Ã˜Â¶ Ã™â€¦Ã˜Â«Ã˜Â§Ã™â€ž Ã˜Â­Ã™Å  Ã™â€žÃ™â€¡Ã˜Â°Ã˜Â§Ã˜Å’ Ã™â€¦Ã™â€  Ã™â€¦Ã™â€ Ã˜Â§ Ã™â€žÃ™â€¦ Ã™Å Ã˜ÂªÃ˜Â­Ã™â€¦Ã™â€ž Ã˜Â¬Ã™â€¡Ã˜Â¯ Ã˜Â¨Ã˜Â¯Ã™â€ Ã™Å  Ã˜Â´Ã˜Â§Ã™â€š Ã˜Â¥Ã™â€žÃ˜Â§ Ã™â€¦Ã™â€  Ã˜Â£Ã˜Â¬Ã™â€ž Ã˜Â§Ã™â€žÃ˜Â­Ã˜ÂµÃ™Ë†Ã™â€ž</p>      
                </div>    
            </div>
            <!--End Single Featured Box-->
            <!--Start Single Featured Box-->
            <div class="col-xl-3 col-lg-6 col-md-6">
                <div class="single-featured-box text-center">
                    <div class="icon-holder">
                        <span class="icon-optometrist"></span>
                    </div>
                    <h3>Ã˜Â§Ã˜ÂªÃ˜ÂµÃ™â€ž<br> Ã˜Â§Ã™â€žÃ˜Â¹Ã˜Â¯Ã˜Â³Ã˜Â§Ã˜Âª</h3>
                    <p>Ã™Ë†Ã˜Â³Ã˜Â£Ã˜Â¹Ã˜Â±Ã˜Â¶ Ã™â€¦Ã˜Â«Ã˜Â§Ã™â€ž Ã˜Â­Ã™Å  Ã™â€žÃ™â€¡Ã˜Â°Ã˜Â§Ã˜Å’ Ã™â€¦Ã™â€  Ã™â€¦Ã™â€ Ã˜Â§ Ã™â€žÃ™â€¦ Ã™Å Ã˜ÂªÃ˜Â­Ã™â€¦Ã™â€ž Ã˜Â¬Ã™â€¡Ã˜Â¯ Ã˜Â¨Ã˜Â¯Ã™â€ Ã™Å  Ã˜Â´ Ã˜Â³Ã˜Â£Ã˜Â¹Ã˜Â±Ã˜Â¶ Ã™â€¦Ã˜Â«Ã˜Â§Ã™â€ž Ã˜Â­Ã™Å  Ã™â€žÃ™â€¡Ã˜Â°Ã˜Â§Ã˜Å’ Ã™â€¦Ã™â€  Ã™â€¦Ã™â€ Ã˜Â§ Ã™â€žÃ™â€¦ Ã™Å Ã˜ÂªÃ˜Â­Ã™â€¦Ã™â€ž Ã˜Â¬Ã™â€¡Ã˜Â¯ Ã˜Â¨Ã˜Â¯Ã™â€ Ã™Å  Ã˜Â´Ã˜Â§Ã™â€š Ã˜Â¥Ã™â€žÃ˜Â§ Ã™â€¦Ã™â€  Ã˜Â£Ã˜Â¬Ã™â€ž Ã˜Â§Ã™â€žÃ˜Â­Ã˜ÂµÃ™Ë†Ã™â€ž</p>      
                </div>    
            </div>
            <!--End Single Featured Box-->
            <div class="col-xl-3 col-lg-6 col-md-6">
                <div class="opening-hours-contact-box text-right">
                    <h3>Ã˜Â§Ã™Ã˜ÂªÃ˜ÂªÃ˜Â§Ã˜Â­<br> Ã˜Â³Ã˜Â§Ã˜Â¹Ã˜Â§Ã˜Âª</h3>
                    <ul>
                        <li>
                            <p>Ã˜Â§Ã™â€žÃ˜Â¥Ã˜Â«Ã™â€ Ã™Å Ã™â€ </p>
                            <h4>12:00 Ã™â€¦Ã˜Â³Ã˜Â§Ã˜Â¡Ã™â€¹ - 19:00 Ã™â€¦Ã˜Â³Ã˜Â§Ã˜Â¡Ã™â€¹</h4>
                        </li>
                        <li>
                            <p>Ã˜Â§Ã™â€žÃ˜Â«Ã™â€žÃ˜Â§Ã˜Â«Ã˜Â§Ã˜Â¡ Ã˜Â¥Ã™â€žÃ™â€° Ã˜Â§Ã™â€žÃ˜Â¬Ã™â€¦Ã˜Â¹Ã™â€¡</p>
                            <h4>8:00 Ã˜ÂµÃ˜Â¨Ã˜Â§Ã˜Â­Ã™â€¹Ã˜Â§ - 19:00 Ã™â€¦Ã˜Â³Ã˜Â§Ã˜Â¡Ã™â€¹</h4>
                        </li>
                        <li>
                            <p>Ã™Å Ã™Ë†Ã™â€¦ Ã˜Â§Ã™â€žÃ˜Â³Ã˜Â¨Ã˜Âª</p>
                            <h4>8:00 Ã˜ÂµÃ˜Â¨Ã˜Â§Ã˜Â­Ã™â€¹Ã˜Â§ - 3:30 Ã™â€¦Ã˜Â³Ã˜Â§Ã˜Â¡Ã™â€¹</h4>
                        </li>
                    </ul>
                </div>
            </div>
            
        </div>
    </div>
</section>
<!--End Featured Area-->

<!--Start Emergency Contact Area-->
<section dir="rtl" class="emergency-contact-area rtl" style="background-image: url('/eye-1/assets/images/parallax-background/emergency-contact-area-bg.jpg')">
    <div class="container">
        <div class="row">
            <div class="col-xl-5">
                <div class="emergency-contact-number">
                    <div class="icon">
                        <span class="icon-customer-service"></span>
                    </div>
                    <div class="title">
                        <h2>Ã™â€žÃ˜Â­Ã˜Â§Ã™â€žÃ˜Â§Ã˜Âª Ã˜Â§Ã™â€žÃ˜Â·Ã™Ë†Ã˜Â§Ã˜Â±Ã˜Â¦</h2>
                        <a href="tel:+11987654321">666 888 0000</a>
                    </div>    
                </div>
            </div>
            <div class="col-xl-4">
                <div class="emergency-contact-text">
                    <p>Ã™Ë† Ã˜Â³Ã˜Â£Ã˜Â¹Ã˜Â±Ã˜Â¶ Ã™â€¦Ã˜Â«Ã˜Â§Ã™â€ž Ã˜Â­Ã™Å  Ã™â€žÃ™â€¡Ã˜Â°Ã˜Â§Ã˜Å’ Ã™â€¦Ã™â€  Ã™â€¦Ã™â€ Ã˜Â§ Ã™â€žÃ™â€¦ Ã™Å Ã˜ÂªÃ˜Â­Ã™â€¦Ã™â€ž Ã˜Â¬Ã™â€¡Ã˜Â¯ Ã˜Â¨Ã˜Â¯Ã™â€ Ã™Å  Ã˜Â´Ã˜Â§Ã™â€š Ã˜Â¥Ã™â€žÃ˜Â§ Ã™â€¦Ã™â€  Ã˜Â£Ã˜Â¬Ã™â€ž Ã˜Â§Ã™â€žÃ˜Â­Ã˜ÂµÃ™Ë†Ã™â€ž Ã˜Â¹Ã™â€žÃ™â€° Ã™â€¦Ã™Å Ã˜Â²Ã˜Â© Ã˜Â£Ã™Ë† Ã™Ã˜Â§Ã˜Â¦Ã˜Â¯Ã˜Â©Ã˜Å¸ Ã™Ë†Ã™â€žÃ™Æ’Ã™â€ </p>
                </div>
            </div>
            <div class="col-xl-3">
                <div class="emergency-contact-btns-box">
                    <a class="btn-one btn-rtl" href="#"><span class="txt">Ã™â€¦Ã™Ë†Ã˜Â¹Ã˜Â¯ Ã˜Â§Ã™â€žÃ™Æ’Ã˜ÂªÃ˜Â§Ã˜Â¨<i class="fa fa-angle-double-right round" aria-hidden="true"></i></span></a>
                </div>    
            </div>    
        </div>
    </div>
</section>
<!--End Emergency Contact Area-->

<!--Start Services Style1 Area-->
<section dir="rtl" class="services-style1-area services-style1-instyle2 rtl">
    <div class="container">
        <div class="row">
            <div class="col-xl-12">
                <div class="top-title text-right">
                    <div class="sec-title">
                        <h2><span>Ã˜Â®Ã˜Â¯Ã™â€¦Ã˜Â§Ã˜Âª</span> Ã™â€ Ã˜Â­Ã™â€  Ã™â€ Ã™â€šÃ˜Â¯Ã™â€¦<br> Ã™â€žÃ˜Â¹Ã™â€¦Ã™â€žÃ˜Â§Ã˜Â¦Ã™â€ Ã˜Â§</h2>
                    </div>
                    <div class="text">
                        <p>Ã™Ë† Ã˜Â³Ã˜Â£Ã˜Â¹Ã˜Â±Ã˜Â¶ Ã™â€¦Ã˜Â«Ã˜Â§Ã™â€ž Ã˜Â­Ã™Å  Ã™â€žÃ™â€¡Ã˜Â°Ã˜Â§Ã˜Å’ Ã™â€¦Ã™â€  Ã™â€¦Ã™â€ Ã˜Â§ Ã™â€žÃ™â€¦ Ã™Å Ã˜ÂªÃ˜Â­Ã™â€¦Ã™â€ž Ã˜Â¬Ã™â€¡Ã˜Â¯ Ã˜Â¨Ã˜Â¯Ã™â€ Ã™Å  Ã˜Â´Ã˜Â§Ã™â€š Ã˜Â¥Ã™â€žÃ˜Â§ Ã™â€¦Ã™â€  Ã˜Â£Ã˜Â¬Ã™â€ž Ã˜Â§Ã™â€žÃ˜Â­Ã˜ÂµÃ™Ë†Ã™â€ž Ã˜Â¹Ã™â€žÃ™â€° Ã™â€¦Ã™Å Ã˜Â²Ã˜Â© Ã˜Â£Ã™Ë† Ã™Ã˜Â§Ã˜Â¦Ã˜Â¯Ã˜Â©Ã˜Å¸ Ã™Ë†Ã™â€žÃ™Æ’Ã™â€  Ã™â€¦Ã™â€  Ã™â€žÃ˜Â¯Ã™Å Ã™â€¡ Ã˜Â§Ã™â€žÃ˜Â­Ã™â€š</p>
                    </div>    
                </div>
            </div>
        </div>    
        <div class="row text-right">
            <!--Start Single service Style1-->
            <div class="col-xl-4 col-lg-4">
                <div class="single-service-style1 wow fadeInUp" data-wow-delay="100ms" data-wow-duration="1500ms">
                    <div class="img-holder">
                        <img src="/eye-1/assets/images/services/service-v1-1.jpg" alt="Awesome Image">
                        <div class="icon"><span class="icon-glasses"></span></div>
                    </div>
                    <div class="text-holder">
                        <h3><a href="#">Ã˜Â§Ã™â€žÃ˜Â¥Ã˜Â¬Ã˜Â±Ã˜Â§Ã˜Â¡ Ã˜Â§Ã™â€žÃ˜Â¬Ã˜Â±Ã˜Â§Ã˜Â­Ã™Å </a></h3>
                        <p>Ã™Ë† Ã˜Â³Ã˜Â£Ã˜Â¹Ã˜Â±Ã˜Â¶ Ã™â€¦Ã˜Â«Ã˜Â§Ã™â€ž Ã˜Â­Ã™Å  Ã™â€žÃ™â€¡Ã˜Â°Ã˜Â§Ã˜Å’ Ã™â€¦Ã™â€  Ã™â€¦Ã™â€ Ã˜Â§ Ã™â€žÃ™â€¦ Ã™Å Ã˜ÂªÃ˜Â­Ã™â€¦Ã™â€ž Ã˜Â¬Ã™â€¡Ã˜Â¯ Ã˜Â¨Ã˜Â¯Ã™â€ Ã™Å  Ã˜Â´Ã˜Â§Ã™â€š Ã˜Â¥Ã™â€žÃ˜Â§ Ã™â€¦Ã™â€  Ã˜Â£Ã˜Â¬Ã™â€ž Ã˜Â§Ã™â€žÃ˜Â­Ã˜ÂµÃ™Ë†Ã™â€ž Ã˜Â¹Ã™â€žÃ™â€° Ã™â€¦Ã™Å Ã˜Â²Ã˜Â© Ã˜Â£Ã™Ë† Ã™Ã˜Â§Ã˜Â¦Ã˜Â¯Ã˜Â©Ã˜Å¸</p>
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
                        <h3><a href="#">Ã™Æ’Ã™â€ž Ã˜Â§Ã™â€žÃ™â€žÃ™Å Ã˜Â²Ã™Æ’ Ã˜Â§Ã™â€žÃ™â€žÃ™Å Ã˜Â²Ã˜Â±</a></h3>
                        <p>Ã™Ë† Ã˜Â³Ã˜Â£Ã˜Â¹Ã˜Â±Ã˜Â¶ Ã™â€¦Ã˜Â«Ã˜Â§Ã™â€ž Ã˜Â­Ã™Å  Ã™â€žÃ™â€¡Ã˜Â°Ã˜Â§Ã˜Å’ Ã™â€¦Ã™â€  Ã™â€¦Ã™â€ Ã˜Â§ Ã™â€žÃ™â€¦ Ã™Å Ã˜ÂªÃ˜Â­Ã™â€¦Ã™â€ž Ã˜Â¬Ã™â€¡Ã˜Â¯ Ã˜Â¨Ã˜Â¯Ã™â€ Ã™Å  Ã˜Â´Ã˜Â§Ã™â€š Ã˜Â¥Ã™â€žÃ˜Â§ Ã™â€¦Ã™â€  Ã˜Â£Ã˜Â¬Ã™â€ž Ã˜Â§Ã™â€žÃ˜Â­Ã˜ÂµÃ™Ë†Ã™â€ž Ã˜Â¹Ã™â€žÃ™â€° Ã™â€¦Ã™Å Ã˜Â²Ã˜Â© Ã˜Â£Ã™Ë† Ã™Ã˜Â§Ã˜Â¦Ã˜Â¯Ã˜Â©Ã˜Å¸</p>
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
                        <h3><a href="#">Ã˜Â§Ã™â€žÃ™â€šÃ˜Â±Ã™â€ Ã™Å Ã˜Â© Ã™Ë†Ã˜Â§Ã™â€žÃ˜Â¬Ã™â€žÃ™Ë†Ã™Æ’Ã™Ë†Ã™â€¦Ã˜Â§</a></h3>
                        <p>Ã™Ë† Ã˜Â³Ã˜Â£Ã˜Â¹Ã˜Â±Ã˜Â¶ Ã™â€¦Ã˜Â«Ã˜Â§Ã™â€ž Ã˜Â­Ã™Å  Ã™â€žÃ™â€¡Ã˜Â°Ã˜Â§Ã˜Å’ Ã™â€¦Ã™â€  Ã™â€¦Ã™â€ Ã˜Â§ Ã™â€žÃ™â€¦ Ã™Å Ã˜ÂªÃ˜Â­Ã™â€¦Ã™â€ž Ã˜Â¬Ã™â€¡Ã˜Â¯ Ã˜Â¨Ã˜Â¯Ã™â€ Ã™Å  Ã˜Â´Ã˜Â§Ã™â€š Ã˜Â¥Ã™â€žÃ˜Â§ Ã™â€¦Ã™â€  Ã˜Â£Ã˜Â¬Ã™â€ž Ã˜Â§Ã™â€žÃ˜Â­Ã˜ÂµÃ™Ë†Ã™â€ž Ã˜Â¹Ã™â€žÃ™â€° Ã™â€¦Ã™Å Ã˜Â²Ã˜Â© Ã˜Â£Ã™Ë† Ã™Ã˜Â§Ã˜Â¦Ã˜Â¯Ã˜Â©Ã˜Å¸</p>
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
                        <h2><span>Ã™Ë†Ã˜Â§Ã˜Â¶Ã˜Â­</span> Ã˜ÂºÃ˜Â¯Ã˜Â§ Ã˜Å’ Ã˜Â£Ã˜Â­Ã˜Â¶Ã˜Â±<br>Ã˜Â¹Ã˜Â§Ã™â€žÃ™â€¦Ã™â€¡Ã™â€¦ Ã˜Â¥Ã™â€žÃ™â€° Ã˜Â§Ã™â€žÃ˜ÂªÃ˜Â±Ã™Æ’Ã™Å Ã˜Â²</h2>
                    </div>
                    <div class="btns-box">
                        <a class="btn-one btn-rtl" href="#"><span class="txt"><i class="fa fa-angle-double-right round" aria-hidden="true"></i>Ã˜Â¥Ã™Æ’Ã˜ÂªÃ˜Â´Ã™ Ã˜Â£Ã™Æ’Ã˜Â«Ã˜Â±</span></a>
                    </div> 
                </div>    
            </div>    
        </div>
    </div>
</section>
<!--End Slogan Style3 Area-->   


<!--Start Before After Work Area-->
<section class="before-after-work-area">
    <div class="shape">
        <img class="float-bob-y" src="/eye-1/assets/images/shape/shape-5.png" alt="Shape">
    </div>
    <div class="container">
        <div class="sec-title text-center">
            <h2><span>Oktilcal</span>Ã™â€šÃ˜Â¨Ã™â€ž Ã™Ë†Ã˜Â¨Ã˜Â¹Ã˜Â¯ Ã˜Â§Ã™â€žÃ˜Â¹Ã™â€¦Ã™â€ž<br> Ã˜Â¹Ã˜Â±Ã˜Â¶ Ã˜Â§Ã™â€žÃ˜Â´Ã˜Â±Ã˜Â§Ã˜Â¦Ã˜Â­</h2>
        </div>
        <div class="row">
            <div class="col-xl-12">
                <div class="before-after-content">
                    <div class="before-after">
                        <div class="before-after-twentytwenty" id="wrinkle-before-after">
                            <img src="/eye-1/assets/images/resources/before-1.jpg" alt="Awesome Image">    
                            <img src="/eye-1/assets/images/resources/after-1.jpg" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!--End Before After Work Area-->

<!--Start Faq Content Area-->
<section class="faq-content-area rtl">
    <div class="layer-outer">
        <div class="left-box" style="background-image: url('/eye-1/assets/images/parallax-background/faq-left-box.jpg')"></div>
        <div class="right-box" style="background-image: url('/eye-1/assets/images/parallax-background/faq-right-box.jpg')"></div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-xl-6">
                <div class="faq-title-box text-right">
                    <div class="sec-title">
                        <h2 class="clrwhite"><span>Ã™Ã™Å  Ã™Æ’Ã˜Â«Ã™Å Ã˜Â± Ã™â€¦Ã™â€  Ã˜Â§Ã™â€žÃ˜Â£Ã˜Â­Ã™Å Ã˜Â§Ã™â€ </span> Ã˜Â·Ã™â€žÃ˜Â¨Ã˜Âª<br> Ã˜Â§Ã™â€žÃ˜Â£Ã˜Â³Ã˜Â¦Ã™â€žÃ˜Â©</h2>
                    </div>
                    <div class="text">
                        <p>Ã™Ë† Ã˜Â³Ã˜Â£Ã˜Â¹Ã˜Â±Ã˜Â¶ Ã™â€¦Ã˜Â«Ã˜Â§Ã™â€ž Ã˜Â­Ã™Å  Ã™â€žÃ™â€¡Ã˜Â°Ã˜Â§Ã˜Å’ Ã™â€¦Ã™â€  Ã™â€¦Ã™â€ Ã˜Â§ Ã™â€žÃ™â€¦ Ã™Å Ã˜ÂªÃ˜Â­Ã™â€¦Ã™â€ž Ã˜Â¬Ã™â€¡Ã˜Â¯ Ã˜Â¨Ã˜Â¯Ã™â€ Ã™Å  Ã˜Â´Ã˜Â§Ã™â€š Ã˜Â¥Ã™â€žÃ˜Â§ Ã™â€¦Ã™â€  Ã˜Â£Ã˜Â¬Ã™â€ž Ã˜Â§Ã™â€žÃ˜Â­Ã˜ÂµÃ™Ë†Ã™â€ž Ã˜Â¹Ã™â€žÃ™â€° Ã™â€¦Ã™Å Ã˜Â²Ã˜Â© Ã˜Â£Ã™Ë† Ã™Ã˜Â§Ã˜Â¦Ã˜Â¯Ã˜Â©Ã˜Å¸ Ã™Ë†Ã™â€žÃ™Æ’Ã™â€  Ã™â€¦Ã™â€  Ã™â€žÃ˜Â¯Ã™Å Ã™â€¡ Ã˜Â§Ã™â€žÃ˜Â­Ã™â€š Ã˜Â£Ã™â€  Ã™Å Ã™â€ Ã˜ÂªÃ™â€šÃ˜Â¯</p>
                    </div>
                    <ul>
                        <li>
                            <span class="icon-vision-2"></span>
                            <h4>Ã˜Â±Ã˜Â¤Ã™Å Ã˜Â© Ã˜Â§Ã™â€žÃ˜Â¹Ã™Å Ã™â€ </h4>
                        </li>
                        <li>
                            <span class="icon-eye-2"></span>
                            <h4>Ã˜Â¹Ã˜Â¯Ã˜Â³Ã˜Â© Ã˜Â¬Ã˜Â¯Ã™Å Ã˜Â¯Ã˜Â©</h4>
                        </li>
                    </ul>    
                </div>    
            </div>
            <div class="col-xl-6">
                <div class="faq-content-box">
                    <div class="accordion-box text-right">
                        <!--Start single accordion box-->
                        <div class="accordion accordion-block">
                            <div class="accord-btn active"><h4>Ã˜Â§Ã˜Â®Ã˜ÂªÃ˜Â¨Ã˜Â§Ã˜Â± Ã˜Â¬Ã™Å Ã˜Â¯ Ã™Å Ã™â€¦Ã™Æ’Ã™â€  Ã˜Â£Ã™â€  Ã™Å Ã™â€ Ã™â€šÃ˜Â° Ã˜Â±Ã˜Â¤Ã™Å Ã˜Â© Ã˜Â¹Ã™Å Ã™â€ Ã™Å Ã™Æ’</h4></div>
                            <div class="accord-content collapsed">
                                <p>Ã™Ë† Ã˜Â³Ã˜Â£Ã˜Â¹Ã˜Â±Ã˜Â¶ Ã™â€¦Ã˜Â«Ã˜Â§Ã™â€ž Ã˜Â­Ã™Å  Ã™â€žÃ™â€¡Ã˜Â°Ã˜Â§Ã˜Å’ Ã™â€¦Ã™â€  Ã™â€¦Ã™â€ Ã˜Â§ Ã™â€žÃ™â€¦ Ã™Å Ã˜ÂªÃ˜Â­Ã™â€¦Ã™â€ž Ã˜Â¬Ã™â€¡Ã˜Â¯ Ã˜Â¨Ã˜Â¯Ã™â€ Ã™Å  Ã˜Â´Ã˜Â§Ã™â€š Ã˜Â¥Ã™â€žÃ˜Â§ Ã™â€¦Ã™â€  Ã˜Â£Ã˜Â¬Ã™â€ž Ã˜Â§Ã™â€žÃ˜Â­Ã˜ÂµÃ™Ë†Ã™â€ž Ã˜Â¹Ã™â€žÃ™â€° Ã™â€¦Ã™Å Ã˜Â²Ã˜Â© Ã˜Â£Ã™Ë† Ã™Ã˜Â§Ã˜Â¦Ã˜Â¯Ã˜Â©Ã˜Å¸ Ã™Ë†Ã™â€žÃ™Æ’Ã™â€  Ã™â€¦Ã™â€  Ã™â€žÃ˜Â¯Ã™Å Ã™â€¡ Ã˜Â§Ã™â€žÃ˜Â­Ã™â€š Ã˜Â£Ã™â€  Ã™Å Ã™â€ Ã˜ÂªÃ™â€šÃ˜Â¯ Ã˜Â´Ã˜Â®Ã˜Âµ Ã™â€¦Ã˜Â§ Ã˜Â£Ã˜Â±Ã˜Â§Ã˜Â¯ Ã˜Â£Ã™â€  Ã™Å Ã˜Â´Ã˜Â¹Ã˜Â± Ã˜Â¨Ã˜Â§Ã™â€žÃ˜Â³Ã˜Â¹Ã˜Â§Ã˜Â¯Ã˜Â© Ã˜Â§Ã™â€žÃ˜ÂªÃ™Å  Ã™â€žÃ˜Â§ Ã˜ÂªÃ˜Â´Ã™Ë†Ã˜Â¨Ã™â€¡Ã˜Â§ Ã˜Â¹Ã™Ë†Ã˜Â§Ã™â€šÃ˜Â¨ Ã˜Â£Ã™â€žÃ™Å Ã™â€¦Ã˜Â© Ã˜Â£Ã™Ë† Ã˜Â¢Ã˜Â®Ã˜Â± Ã˜Â£Ã˜Â±Ã˜Â§Ã˜Â¯ Ã˜Â£Ã™â€  Ã™Å Ã˜ÂªÃ˜Â¬Ã™â€ Ã˜Â¨ Ã˜Â§Ã™â€žÃ˜Â£Ã™â€žÃ™â€¦ Ã˜Â§Ã™â€žÃ˜Â°Ã™Å  Ã˜Â±Ã˜Â¨Ã™â€¦Ã˜Â§ Ã˜ÂªÃ™â€ Ã˜Â¬Ã™â€¦ Ã˜Â¹Ã™â€ Ã™â€¡ Ã˜Â¨Ã˜Â¹Ã˜Â¶ Ã˜Â§Ã™â€žÃ™â€¦Ã˜ÂªÃ˜Â¹Ã˜Â© Ã˜Å¸ </p>
                            </div>
                        </div>
                        <!--End single accordion box-->
                        <!--Start single accordion box-->
                        <div class="accordion accordion-block">
                            <div class="accord-btn"><h4>Ã˜Â®Ã˜Â¯Ã™â€¦Ã˜Â© Ã˜ÂªÃ˜Â¬Ã˜Â¹Ã™â€žÃ™Æ’ Ã˜ÂªÃ˜Â±Ã˜Â§Ã™â€ Ã˜Â§ Ã˜Â¨Ã˜Â£Ã™â€¦ Ã˜Â¹Ã™Å Ã™â€ Ã™Å Ã™Æ’</h4></div>
                            <div class="accord-content">
                                <p>Ã™Ë† Ã˜Â³Ã˜Â£Ã˜Â¹Ã˜Â±Ã˜Â¶ Ã™â€¦Ã˜Â«Ã˜Â§Ã™â€ž Ã˜Â­Ã™Å  Ã™â€žÃ™â€¡Ã˜Â°Ã˜Â§Ã˜Å’ Ã™â€¦Ã™â€  Ã™â€¦Ã™â€ Ã˜Â§ Ã™â€žÃ™â€¦ Ã™Å Ã˜ÂªÃ˜Â­Ã™â€¦Ã™â€ž Ã˜Â¬Ã™â€¡Ã˜Â¯ Ã˜Â¨Ã˜Â¯Ã™â€ Ã™Å  Ã˜Â´Ã˜Â§Ã™â€š Ã˜Â¥Ã™â€žÃ˜Â§ Ã™â€¦Ã™â€  Ã˜Â£Ã˜Â¬Ã™â€ž Ã˜Â§Ã™â€žÃ˜Â­Ã˜ÂµÃ™Ë†Ã™â€ž Ã˜Â¹Ã™â€žÃ™â€° Ã™â€¦Ã™Å Ã˜Â²Ã˜Â© Ã˜Â£Ã™Ë† Ã™Ã˜Â§Ã˜Â¦Ã˜Â¯Ã˜Â©Ã˜Å¸ Ã™Ë†Ã™â€žÃ™Æ’Ã™â€  Ã™â€¦Ã™â€  Ã™â€žÃ˜Â¯Ã™Å Ã™â€¡ Ã˜Â§Ã™â€žÃ˜Â­Ã™â€š Ã˜Â£Ã™â€  Ã™Å Ã™â€ Ã˜ÂªÃ™â€šÃ˜Â¯ Ã˜Â´Ã˜Â®Ã˜Âµ Ã™â€¦Ã˜Â§ Ã˜Â£Ã˜Â±Ã˜Â§Ã˜Â¯ Ã˜Â£Ã™â€  Ã™Å Ã˜Â´Ã˜Â¹Ã˜Â± Ã˜Â¨Ã˜Â§Ã™â€žÃ˜Â³Ã˜Â¹Ã˜Â§Ã˜Â¯Ã˜Â© Ã˜Â§Ã™â€žÃ˜ÂªÃ™Å  Ã™â€žÃ˜Â§ Ã˜ÂªÃ˜Â´Ã™Ë†Ã˜Â¨Ã™â€¡Ã˜Â§ Ã˜Â¹Ã™Ë†Ã˜Â§Ã™â€šÃ˜Â¨ Ã˜Â£Ã™â€žÃ™Å Ã™â€¦Ã˜Â© Ã˜Â£Ã™Ë† Ã˜Â¢Ã˜Â®Ã˜Â± Ã˜Â£Ã˜Â±Ã˜Â§Ã˜Â¯ Ã˜Â£Ã™â€  Ã™Å Ã˜ÂªÃ˜Â¬Ã™â€ Ã˜Â¨ Ã˜Â§Ã™â€žÃ˜Â£Ã™â€žÃ™â€¦ Ã˜Â§Ã™â€žÃ˜Â°Ã™Å  Ã˜Â±Ã˜Â¨Ã™â€¦Ã˜Â§ Ã˜ÂªÃ™â€ Ã˜Â¬Ã™â€¦ Ã˜Â¹Ã™â€ Ã™â€¡ Ã˜Â¨Ã˜Â¹Ã˜Â¶ Ã˜Â§Ã™â€žÃ™â€¦Ã˜ÂªÃ˜Â¹Ã˜Â© Ã˜Å¸</p>
                            </div>
                        </div>
                        <!--End single accordion box-->
                        <!--Start single accordion box-->
                        <div class="accordion accordion-block bordernone">
                            <div class="accord-btn"><h4>Ã™â€ Ã˜Â­Ã™â€  Ã˜Â¹Ã™â€žÃ™â€° Ã˜Â§Ã˜Â³Ã˜ÂªÃ˜Â¹Ã˜Â¯Ã˜Â§Ã˜Â¯ Ã™â€žÃ˜Â­Ã™â€¦Ã˜Â§Ã™Å Ã˜Â© Ã˜Â±Ã˜Â¤Ã™Å Ã˜ÂªÃ™Æ’</h4></div>
                            <div class="accord-content">
                                <p>Ã™Ë† Ã˜Â³Ã˜Â£Ã˜Â¹Ã˜Â±Ã˜Â¶ Ã™â€¦Ã˜Â«Ã˜Â§Ã™â€ž Ã˜Â­Ã™Å  Ã™â€žÃ™â€¡Ã˜Â°Ã˜Â§Ã˜Å’ Ã™â€¦Ã™â€  Ã™â€¦Ã™â€ Ã˜Â§ Ã™â€žÃ™â€¦ Ã™Å Ã˜ÂªÃ˜Â­Ã™â€¦Ã™â€ž Ã˜Â¬Ã™â€¡Ã˜Â¯ Ã˜Â¨Ã˜Â¯Ã™â€ Ã™Å  Ã˜Â´Ã˜Â§Ã™â€š Ã˜Â¥Ã™â€žÃ˜Â§ Ã™â€¦Ã™â€  Ã˜Â£Ã˜Â¬Ã™â€ž Ã˜Â§Ã™â€žÃ˜Â­Ã˜ÂµÃ™Ë†Ã™â€ž Ã˜Â¹Ã™â€žÃ™â€° Ã™â€¦Ã™Å Ã˜Â²Ã˜Â© Ã˜Â£Ã™Ë† Ã™Ã˜Â§Ã˜Â¦Ã˜Â¯Ã˜Â©Ã˜Å¸ Ã™Ë†Ã™â€žÃ™Æ’Ã™â€  Ã™â€¦Ã™â€  Ã™â€žÃ˜Â¯Ã™Å Ã™â€¡ Ã˜Â§Ã™â€žÃ˜Â­Ã™â€š Ã˜Â£Ã™â€  Ã™Å Ã™â€ Ã˜ÂªÃ™â€šÃ˜Â¯ Ã˜Â´Ã˜Â®Ã˜Âµ Ã™â€¦Ã˜Â§ Ã˜Â£Ã˜Â±Ã˜Â§Ã˜Â¯ Ã˜Â£Ã™â€  Ã™Å Ã˜Â´Ã˜Â¹Ã˜Â± Ã˜Â¨Ã˜Â§Ã™â€žÃ˜Â³Ã˜Â¹Ã˜Â§Ã˜Â¯Ã˜Â© Ã˜Â§Ã™â€žÃ˜ÂªÃ™Å  Ã™â€žÃ˜Â§ Ã˜ÂªÃ˜Â´Ã™Ë†Ã˜Â¨Ã™â€¡Ã˜Â§ Ã˜Â¹Ã™Ë†Ã˜Â§Ã™â€šÃ˜Â¨ Ã˜Â£Ã™â€žÃ™Å Ã™â€¦Ã˜Â© Ã˜Â£Ã™Ë† Ã˜Â¢Ã˜Â®Ã˜Â± Ã˜Â£Ã˜Â±Ã˜Â§Ã˜Â¯ Ã˜Â£Ã™â€  Ã™Å Ã˜ÂªÃ˜Â¬Ã™â€ Ã˜Â¨ Ã˜Â§Ã™â€žÃ˜Â£Ã™â€žÃ™â€¦ Ã˜Â§Ã™â€žÃ˜Â°Ã™Å  Ã˜Â±Ã˜Â¨Ã™â€¦Ã˜Â§ Ã˜ÂªÃ™â€ Ã˜Â¬Ã™â€¦ Ã˜Â¹Ã™â€ Ã™â€¡ Ã˜Â¨Ã˜Â¹Ã˜Â¶ Ã˜Â§Ã™â€žÃ™â€¦Ã˜ÂªÃ˜Â¹Ã˜Â© Ã˜Å¸</p>
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


<!--Start Blog Style1 Area-->
<section dir="rtl" class="blog-style1-area graybg rtl">
    <div class="container">
        <div class="row">
            <div class="col-xl-12">
                <div class="top-title text-right">
                    <div class="sec-title">
                        <h2><span>Ã˜Â¢Ã˜Â®Ã˜Â±</span> Ã˜Â§Ã™â€žÃ˜Â£Ã˜Â®Ã˜Â¨Ã˜Â§Ã˜Â± Ã™Ë†Ã˜Â§Ã™â€žÃ˜ÂªÃ˜Â­Ã˜Â¯Ã™Å Ã˜Â«Ã˜Â§Ã˜Âª<br> Ã™â€¦Ã˜Â¨Ã˜Â§Ã˜Â´Ã˜Â±Ã˜Â© Ã™â€¦Ã™â€  Ã˜Â§Ã™â€žÃ™â€¦Ã˜Â¯Ã™Ë†Ã™â€ Ã˜Â©</h2>
                    </div>
                    <div class="text">
                        <p>Ã™Ë† Ã˜Â³Ã˜Â£Ã˜Â¹Ã˜Â±Ã˜Â¶ Ã™â€¦Ã˜Â«Ã˜Â§Ã™â€ž Ã˜Â­Ã™Å  Ã™â€žÃ™â€¡Ã˜Â°Ã˜Â§Ã˜Å’ Ã™â€¦Ã™â€  Ã™â€¦Ã™â€ Ã˜Â§ Ã™â€žÃ™â€¦ Ã™Å Ã˜ÂªÃ˜Â­Ã™â€¦Ã™â€ž Ã˜Â¬Ã™â€¡Ã˜Â¯ Ã˜Â¨Ã˜Â¯Ã™â€ Ã™Å  Ã˜Â´Ã˜Â§Ã™â€š Ã˜Â¥Ã™â€žÃ˜Â§ Ã™â€¦Ã™â€  Ã˜Â£Ã˜Â¬Ã™â€ž Ã˜Â§Ã™â€žÃ˜Â­Ã˜ÂµÃ™Ë†Ã™â€ž Ã˜Â¹Ã™â€žÃ™â€° Ã™â€¦Ã™Å Ã˜Â²Ã˜Â© Ã˜Â£Ã™Ë† Ã™Ã˜Â§Ã˜Â¦Ã˜Â¯Ã˜Â©Ã˜Å¸ Ã™Ë†Ã™â€žÃ™Æ’Ã™â€  Ã™â€¦Ã™â€  Ã™â€žÃ˜Â¯Ã™Å Ã™â€¡ Ã˜Â§Ã™â€žÃ˜Â­Ã™â€š Ã˜Â£Ã™â€  Ã™Å Ã™â€ Ã˜ÂªÃ™â€šÃ˜Â¯ Ã˜Â´Ã˜Â®Ã˜Âµ</p>
                    </div>    
                </div>
            </div>
        </div>
        <div class="row text-right">
            <!--Start Single blog Style1-->
            <div class="col-xl-4 col-lg-4">
                <div class="single-blog-style1 wow fadeInLeft" data-wow-delay="100ms" data-wow-duration="1500ms">
                    <div class="img-holder">
                        <div class="inner">
                            <img src="/eye-1/assets/images/blog/blog-v1-1.jpg" alt="Awesome Image">
                        </div>
                        <div class="date-box">
                            <h5>20 Ã™Å Ã™Ë†Ã™â€ Ã™Å Ã™Ë†</h5>
                        </div>
                    </div> 
                    <div class="text-holder">
                        <h3 class="blog-title"><a href="/eye-1/blog/single">Ã˜Â§Ã™â€žÃ˜Â¢Ã™â€  Ã™Å Ã™â€¦Ã™Æ’Ã™â€ Ã™Æ’ Ã˜Â±Ã˜Â¤Ã™Å Ã˜Â© Ã˜Â§Ã™â€žÃ™â€¦Ã˜Â³Ã˜ÂªÃ™â€šÃ˜Â¨Ã™â€ž Ã˜Â§Ã™â€žÃ˜Â£Ã™Ã˜Â¶Ã™â€ž</a></h3>
                        <ul class="meta-info">
                            <li><span class="icon-user thm-clr"></span><a href="#">Ã™â€¦Ã˜Â´Ã˜Â±Ã™</a></li>
                            <li><span class="icon-comments thm-clr"></span><a href="#">2 Ã˜ÂªÃ˜Â¹Ã™â€žÃ™Å Ã™â€š</a></li>
                        </ul>
                        <div class="text">
                            <p>Ã™Ë† Ã˜Â³Ã˜Â£Ã˜Â¹Ã˜Â±Ã˜Â¶ Ã™â€¦Ã˜Â«Ã˜Â§Ã™â€ž Ã˜Â­Ã™Å  Ã™â€žÃ™â€¡Ã˜Â°Ã˜Â§Ã˜Å’ Ã™â€¦Ã™â€  Ã™â€¦Ã™â€ Ã˜Â§ Ã™â€žÃ™â€¦ Ã™Å Ã˜ÂªÃ˜Â­Ã™â€¦Ã™â€ž Ã˜Â¬Ã™â€¡Ã˜Â¯ Ã˜Â¨Ã˜Â¯Ã™â€ Ã™Å  Ã˜Â´Ã˜Â§Ã™â€š Ã˜Â¥Ã™â€žÃ˜Â§ Ã™â€¦Ã™â€  Ã˜Â£Ã˜Â¬Ã™â€ž Ã˜Â§Ã™â€žÃ˜Â­Ã˜ÂµÃ™Ë†Ã™â€ž Ã˜Â¹Ã™â€žÃ™â€° Ã™â€¦Ã™Å Ã˜Â²Ã˜Â© Ã˜Â£Ã™Ë†  <span>...</span></p>    
                        </div>
                        <div class="bottom-box">
                            <div class="left">
                                <a class="readmore" href="#">Ã™â€šÃ˜Â±Ã˜Â§Ã˜Â¡Ã˜Â© Ã˜Â§Ã™â€žÃ™â€¦Ã˜Â²Ã™Å Ã˜Â¯</a>
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
                            <h5>15 Ã™Å Ã™Ë†Ã™â€ Ã™Å Ã™Ë†</h5>
                        </div>
                    </div> 
                    <div class="text-holder">
                        <h3 class="blog-title"><a href="/eye-1/blog/single">Ã˜Â§Ã™â€žÃ˜Â¢Ã™â€  Ã™Å Ã™â€¦Ã™Æ’Ã™â€ Ã™Æ’ Ã˜Â±Ã˜Â¤Ã™Å Ã˜Â© Ã˜Â§Ã™â€žÃ™â€¦Ã˜Â³Ã˜ÂªÃ™â€šÃ˜Â¨Ã™â€ž Ã˜Â§Ã™â€žÃ˜Â£Ã™Ã˜Â¶Ã™â€ž</a></h3>
                        <ul class="meta-info">
                            <li><span class="icon-user thm-clr"></span><a href="#">Ã™â€¦Ã˜Â´Ã˜Â±Ã™</a></li>
                            <li><span class="icon-comments thm-clr"></span><a href="#">2 Ã˜ÂªÃ˜Â¹Ã™â€žÃ™Å Ã™â€š</a></li>
                        </ul>
                        <div class="text">
                            <p>Ã™Ë† Ã˜Â³Ã˜Â£Ã˜Â¹Ã˜Â±Ã˜Â¶ Ã™â€¦Ã˜Â«Ã˜Â§Ã™â€ž Ã˜Â­Ã™Å  Ã™â€žÃ™â€¡Ã˜Â°Ã˜Â§Ã˜Å’ Ã™â€¦Ã™â€  Ã™â€¦Ã™â€ Ã˜Â§ Ã™â€žÃ™â€¦ Ã™Å Ã˜ÂªÃ˜Â­Ã™â€¦Ã™â€ž Ã˜Â¬Ã™â€¡Ã˜Â¯ Ã˜Â¨Ã˜Â¯Ã™â€ Ã™Å  Ã˜Â´Ã˜Â§Ã™â€š Ã˜Â¥Ã™â€žÃ˜Â§ Ã™â€¦Ã™â€  Ã˜Â£Ã˜Â¬Ã™â€ž Ã˜Â§Ã™â€žÃ˜Â­Ã˜ÂµÃ™Ë†Ã™â€ž Ã˜Â¹Ã™â€žÃ™â€° Ã™â€¦Ã™Å Ã˜Â²Ã˜Â© Ã˜Â£Ã™Ë†  <span>...</span></p>    
                        </div>
                        <div class="bottom-box">
                            <div class="left">
                                <a class="readmore" href="#">Ã™â€šÃ˜Â±Ã˜Â§Ã˜Â¡Ã˜Â© Ã˜Â§Ã™â€žÃ™â€¦Ã˜Â²Ã™Å Ã˜Â¯</a>
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
                        <h3>Ã™Ë† Ã˜Â³Ã˜Â£Ã˜Â¹Ã˜Â±Ã˜Â¶ Ã™â€¦Ã˜Â«Ã˜Â§Ã™â€ž Ã˜Â­Ã™Å  Ã™â€žÃ™â€¡Ã˜Â°Ã˜Â§Ã˜Å’ Ã™â€¦Ã™â€  Ã™â€¦Ã™â€ Ã˜Â§ Ã™â€žÃ™â€¦ Ã™Å Ã˜ÂªÃ˜Â­Ã™â€¦Ã™â€ž Ã˜Â¬Ã™â€¡Ã˜Â¯ Ã˜Â¨Ã˜Â¯Ã™â€ Ã™Å  Ã˜Â´Ã˜Â§Ã™â€š Ã˜Â¥Ã™â€žÃ˜Â§ Ã™â€¦Ã™â€  Ã˜Â£Ã˜Â¬Ã™â€ž Ã˜Â§Ã™â€žÃ˜Â­Ã˜ÂµÃ™Ë†Ã™â€ž Ã˜Â¹Ã™â€žÃ™â€° Ã™â€¦Ã™Å Ã˜Â²Ã˜Â© Ã˜Â£Ã™Ë† Ã™Ã˜Â§Ã˜Â¦Ã˜Â¯Ã˜Â©Ã˜Å¸ Ã™Ë†Ã™â€žÃ™Æ’Ã™â€  Ã™â€¦Ã™â€  Ã™â€žÃ˜Â¯Ã™Å Ã™â€¡ Ã˜Â§Ã™â€žÃ˜Â­Ã™â€š Ã˜Â£Ã™â€  Ã™Å Ã™â€ Ã˜ÂªÃ™â€šÃ˜Â¯ Ã˜Â´Ã˜Â®Ã˜Âµ Ã™â€¦Ã˜Â§ Ã˜Â£Ã˜Â±Ã˜Â§Ã˜Â¯ Ã˜Â£Ã™â€  Ã™Å Ã˜Â´Ã˜Â¹Ã˜Â± Ã˜Â¨Ã˜Â§Ã™â€žÃ˜Â³Ã˜Â¹Ã˜Â§Ã˜Â¯Ã˜Â© Ã˜Â§Ã™â€žÃ˜ÂªÃ™Å  Ã™â€žÃ˜Â§ Ã˜ÂªÃ˜Â´Ã™Ë†Ã˜Â¨Ã™â€¡Ã˜Â§ Ã˜Â¹Ã™Ë†Ã˜Â§Ã™â€šÃ˜Â¨ Ã˜Â£Ã™â€žÃ™Å Ã™â€¦Ã˜Â© Ã˜Â£Ã™Ë† Ã˜Â¢Ã˜Â®</h3>
                        <div class="blog-quote"><img src="/eye-1/assets/images/icon/blog-quote.png" alt="Quote"></div>
                    </div>   
                    <div class="text-holder">
                        <h3 class="blog-title"><a href="/eye-1/blog/single">Ã™Ë† Ã˜Â³Ã˜Â£Ã˜Â¹Ã˜Â±Ã˜Â¶ Ã™â€¦Ã˜Â«Ã˜Â§Ã™â€ž Ã˜Â­Ã™Å  Ã™â€žÃ™â€¡Ã˜Â°Ã˜Â§Ã˜Å’ Ã™â€¦Ã™â€  Ã™â€¦Ã™â€ Ã˜Â§ Ã™â€žÃ™â€¦ Ã™Å Ã˜ÂªÃ˜Â­Ã™â€¦Ã™â€ž Ã˜Â¬Ã™â€¡Ã˜Â¯ Ã˜Â¨Ã˜Â¯Ã™â€ Ã™Å  Ã˜Â´Ã˜Â§Ã™â€š Ã˜Â¥Ã™â€žÃ˜Â§ Ã™â€¦Ã™â€ Ã˜Â§Ã™â€žÃ˜Â­Ã˜ÂµÃ™Ë†Ã™â€ž   </a></h3>
                        <ul class="meta-info">
                            <li><span class="icon-user thm-clr"></span><a href="#">Ã™â€¦Ã˜Â´Ã˜Â±Ã™</a></li>
                            <li><span class="icon-comments thm-clr"></span><a href="#">2 Ã˜ÂªÃ˜Â¹Ã™â€žÃ™Å Ã™â€š</a></li>
                        </ul>
                        <div class="bottom-box">
                            <div class="left">
                                <a class="readmore" href="#">Ã™â€šÃ˜Â±Ã˜Â§Ã˜Â¡Ã˜Â© Ã˜Â§Ã™â€žÃ™â€¦Ã˜Â²Ã™Å Ã˜Â¯</a>
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
<section dir="rtl" class="contact-form-style1-area rtl">
    <div class="shape" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1500">
        <img class="float-bob-y" src="/eye-1/assets/images/shape/shape-4.png" alt="Shape">
    </div>
    <div class="container">
        <div class="row">
            <div class="col-xl-7">
                <div class="contact-form home-p text-right">
                    <div class="sec-title">
                        <h2><span>Ã™â€ Ã˜Â­Ã™â€  Ã™â€ Ã˜Â­Ã˜Â¨</span> Ã™â€ Ã˜Â³Ã™â€¦Ã˜Â¹ Ã™â€¦Ã™â€ <br> Ã˜Â§Ã™â€žÃ˜Â²Ã˜Â¨Ã˜Â§Ã˜Â¦Ã™â€ </h2>
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
                                    <button class="btn-one btn-rtl" type="submit" data-loading-text="Please wait...">
                                        <span class="txt">Ã˜Â¥Ã˜Â±Ã˜Â³Ã˜Â§Ã™â€ž Ã˜ÂªÃ˜Â¯Ã™â€žÃ™Å Ã™Æ’<i class="fa fa-angle-double-right round" aria-hidden="true"></i></span>
                                    </button>    
                                </div>
                            </div>
                        </div> 
                         
                    </form>
                </div>
                    
            </div>
            
            <div class="col-xl-5">
                <div class="contact-image-box clearfix" data-aos="fade-left" data-aos-easing="linear" data-aos-duration="300">
                    <img src="/eye-1/assets/images/resources/contact-image-rtl.jpg" alt="Awesome Image">
                </div>    
            </div>
            
        </div>
    </div>
</section>
<!--End Contact Form Style1 Area-->


<!--Start Partner Style2 Area-->
<section dir="rtl" class="partner-style2-area" style="background-image: url('/eye-1/assets/images/parallax-background/partner-style2-area-bg.jpg')">
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
<section dir="rtl" class="subscribe-area rtl">
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
                            <h3>Ã˜Â§Ã™â€žÃ™â€ Ã˜Â´Ã˜Â±Ã˜Â© Ã˜Â§Ã™â€žÃ˜Â¥Ã˜Â®Ã˜Â¨Ã˜Â§Ã˜Â±Ã™Å Ã˜Â©</h3>
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
