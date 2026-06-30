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
                <div class="image-layer" style="background-image:url('/eye-1/assets/images/slides/slide-v1-1.jpg)"></div>
                <div class="auto-container">
                    <div class="content text-right">
                        <div class="sub-title">Ø¹ÙŠØ§Ø¯Ø© Ø§Ù„Ø¹ÙŠÙˆÙ† ÙˆØ¹ÙŠØ§Ø¯Ø© Ø§Ù„Ø¹ÙŠÙˆÙ†</div>
                        <h2>Ù†Ø£ØªÙŠ Ø¹Ø§Ù„Ù…Ù‡Ù…<br> Ø¥Ù„Ù‰ <span>Ø§Ù„ØªØ±ÙƒÙŠØ²</span></h2>
                        <div class="btns-box">
                            <a class="btn-one btn-rtl" href="#"><span class="txt"><i class="fa fa-angle-double-right round" aria-hidden="true"></i>Ø¥ÙƒØªØ´Ù Ø£ÙƒØ«Ø±</span></a>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Slide -->
            <div class="slide">
                <div class="image-layer" style="background-image:url('/eye-1/assets/images/slides/slide-v1-2.jpg)"></div>
                <div class="auto-container">
                    <div class="content text-center">
                        <div class="sub-title">Ø¹ÙŠØ§Ø¯Ø© Ø§Ù„Ø¹ÙŠÙˆÙ† ÙˆØ¹ÙŠØ§Ø¯Ø© Ø§Ù„Ø¹ÙŠÙˆÙ†</div>
                        <h2>Ù†Ø£ØªÙŠ Ø¹Ø§Ù„Ù…Ù‡Ù…<br> into <span>Ø§Ù„ØªØ±ÙƒÙŠØ²</span></h2>
                        <div class="btns-box">
                            <a class="btn-one btn-rtl" href="#"><span class="txt"><i class="fa fa-angle-double-right round" aria-hidden="true"></i>Ø¥ÙƒØªØ´Ù Ø£ÙƒØ«Ø±</span></a>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Slide -->
            <div class="slide">
                <div class="image-layer" style="background-image:url('/eye-1/assets/images/slides/slide-v1-3.jpg)"></div>
                <div class="auto-container">
                    <div class="content text-center">
                        <div class="sub-title">Ø¹ÙŠØ§Ø¯Ø© Ø§Ù„Ø¹ÙŠÙˆÙ† ÙˆØ¹ÙŠØ§Ø¯Ø© Ø§Ù„Ø¹ÙŠÙˆÙ†</div>
                        <h2>Ù†Ø£ØªÙŠ Ø¹Ø§Ù„Ù…Ù‡Ù…<br> Ø¥Ù„Ù‰ <span>Ø§Ù„ØªØ±ÙƒÙŠØ²</span></h2>
                        <div class="btns-box">
                            <a class="btn-one btn-rtl" href="#"><span class="txt"><i class="fa fa-angle-double-right round" aria-hidden="true"></i>Ø¥ÙƒØªØ´Ù Ø£ÙƒØ«Ø±</span></a>
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
                        <h2><span>Oktilkal</span> Ù‡Ù†Ø§ Ù„Ù„Ù…Ø³Ø§Ø¹Ø¯Ø©<br> ØªØ±Ù‰ Ø£ÙØ¶Ù„</h2>
                    </div>
                    <div class="text">
                        <p>Ùˆ Ø³Ø£Ø¹Ø±Ø¶ Ù…Ø«Ø§Ù„ Ø­ÙŠ Ù„Ù‡Ø°Ø§ØŒ Ù…Ù† Ù…Ù†Ø§ Ù„Ù… ÙŠØªØ­Ù…Ù„ Ø¬Ù‡Ø¯ Ø¨Ø¯Ù†ÙŠ Ø´Ø§Ù‚ Ø¥Ù„Ø§ Ù…Ù† Ø£Ø¬Ù„ Ø§Ù„Ø­ØµÙˆÙ„ Ø¹Ù„Ù‰ Ù…ÙŠØ²Ø© Ø£Ùˆ ÙØ§Ø¦Ø¯Ø©ØŸ ÙˆÙ„ÙƒÙ† Ù…Ù† Ù„Ø¯ÙŠÙ‡ Ø§Ù„Ø­Ù‚</p>
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
                    <h3>Ø¹ÙŠÙ† Ø§Ù„Ù„ÙŠØ²Ø±<br> ØªØµØ­ÙŠØ­</h3>
                    <p>ÙˆØ³Ø£Ø¹Ø±Ø¶ Ù…Ø«Ø§Ù„ Ø­ÙŠ Ù„Ù‡Ø°Ø§ØŒ Ù…Ù† Ù…Ù†Ø§ Ù„Ù… ÙŠØªØ­Ù…Ù„ Ø¬Ù‡Ø¯ Ø¨Ø¯Ù†ÙŠ Ø´ Ø³Ø£Ø¹Ø±Ø¶ Ù…Ø«Ø§Ù„ Ø­ÙŠ Ù„Ù‡Ø°Ø§ØŒ Ù…Ù† Ù…Ù†Ø§ Ù„Ù… ÙŠØªØ­Ù…Ù„ Ø¬Ù‡Ø¯ Ø¨Ø¯Ù†ÙŠ Ø´Ø§Ù‚ Ø¥Ù„Ø§ Ù…Ù† Ø£Ø¬Ù„ Ø§Ù„Ø­ØµÙˆÙ„</p>    
                </div>    
            </div>
            <!--End Single Featured Box-->
            <!--Start Single Featured Box-->
            <div class="col-xl-3 col-lg-6 col-md-6">
                <div class="single-featured-box text-center">
                    <div class="icon-holder">
                        <span class="icon-eye-1"></span>
                    </div>
                    <h3>Ø¹ÙŠÙ†<br> Ø§Ù„ÙØ­Øµ</h3>
                    <p>ÙˆØ³Ø£Ø¹Ø±Ø¶ Ù…Ø«Ø§Ù„ Ø­ÙŠ Ù„Ù‡Ø°Ø§ØŒ Ù…Ù† Ù…Ù†Ø§ Ù„Ù… ÙŠØªØ­Ù…Ù„ Ø¬Ù‡Ø¯ Ø¨Ø¯Ù†ÙŠ Ø´ Ø³Ø£Ø¹Ø±Ø¶ Ù…Ø«Ø§Ù„ Ø­ÙŠ Ù„Ù‡Ø°Ø§ØŒ Ù…Ù† Ù…Ù†Ø§ Ù„Ù… ÙŠØªØ­Ù…Ù„ Ø¬Ù‡Ø¯ Ø¨Ø¯Ù†ÙŠ Ø´Ø§Ù‚ Ø¥Ù„Ø§ Ù…Ù† Ø£Ø¬Ù„ Ø§Ù„Ø­ØµÙˆÙ„</p>      
                </div>    
            </div>
            <!--End Single Featured Box-->
            <!--Start Single Featured Box-->
            <div class="col-xl-3 col-lg-6 col-md-6">
                <div class="single-featured-box text-center">
                    <div class="icon-holder">
                        <span class="icon-optometrist"></span>
                    </div>
                    <h3>Ø§ØªØµÙ„<br> Ø§Ù„Ø¹Ø¯Ø³Ø§Øª</h3>
                    <p>ÙˆØ³Ø£Ø¹Ø±Ø¶ Ù…Ø«Ø§Ù„ Ø­ÙŠ Ù„Ù‡Ø°Ø§ØŒ Ù…Ù† Ù…Ù†Ø§ Ù„Ù… ÙŠØªØ­Ù…Ù„ Ø¬Ù‡Ø¯ Ø¨Ø¯Ù†ÙŠ Ø´ Ø³Ø£Ø¹Ø±Ø¶ Ù…Ø«Ø§Ù„ Ø­ÙŠ Ù„Ù‡Ø°Ø§ØŒ Ù…Ù† Ù…Ù†Ø§ Ù„Ù… ÙŠØªØ­Ù…Ù„ Ø¬Ù‡Ø¯ Ø¨Ø¯Ù†ÙŠ Ø´Ø§Ù‚ Ø¥Ù„Ø§ Ù…Ù† Ø£Ø¬Ù„ Ø§Ù„Ø­ØµÙˆÙ„</p>      
                </div>    
            </div>
            <!--End Single Featured Box-->
            <div class="col-xl-3 col-lg-6 col-md-6">
                <div class="opening-hours-contact-box text-right">
                    <h3>Ø§ÙØªØªØ§Ø­<br> Ø³Ø§Ø¹Ø§Øª</h3>
                    <ul>
                        <li>
                            <p>Ø§Ù„Ø¥Ø«Ù†ÙŠÙ†</p>
                            <h4>12:00 Ù…Ø³Ø§Ø¡Ù‹ - 19:00 Ù…Ø³Ø§Ø¡Ù‹</h4>
                        </li>
                        <li>
                            <p>Ø§Ù„Ø«Ù„Ø§Ø«Ø§Ø¡ Ø¥Ù„Ù‰ Ø§Ù„Ø¬Ù…Ø¹Ù‡</p>
                            <h4>8:00 ØµØ¨Ø§Ø­Ù‹Ø§ - 19:00 Ù…Ø³Ø§Ø¡Ù‹</h4>
                        </li>
                        <li>
                            <p>ÙŠÙˆÙ… Ø§Ù„Ø³Ø¨Øª</p>
                            <h4>8:00 ØµØ¨Ø§Ø­Ù‹Ø§ - 3:30 Ù…Ø³Ø§Ø¡Ù‹</h4>
                        </li>
                    </ul>
                </div>
            </div>
            
        </div>
    </div>
</section>
<!--End Featured Area-->

<!--Start Emergency Contact Area-->
<section dir="rtl" class="emergency-contact-area rtl" style="background-image: url('/eye-1/assets/images/parallax-background/emergency-contact-area-bg.jpg)">
    <div class="container">
        <div class="row">
            <div class="col-xl-5">
                <div class="emergency-contact-number">
                    <div class="icon">
                        <span class="icon-customer-service"></span>
                    </div>
                    <div class="title">
                        <h2>Ù„Ø­Ø§Ù„Ø§Øª Ø§Ù„Ø·ÙˆØ§Ø±Ø¦</h2>
                        <a href="tel:+11987654321">666 888 0000</a>
                    </div>    
                </div>
            </div>
            <div class="col-xl-4">
                <div class="emergency-contact-text">
                    <p>Ùˆ Ø³Ø£Ø¹Ø±Ø¶ Ù…Ø«Ø§Ù„ Ø­ÙŠ Ù„Ù‡Ø°Ø§ØŒ Ù…Ù† Ù…Ù†Ø§ Ù„Ù… ÙŠØªØ­Ù…Ù„ Ø¬Ù‡Ø¯ Ø¨Ø¯Ù†ÙŠ Ø´Ø§Ù‚ Ø¥Ù„Ø§ Ù…Ù† Ø£Ø¬Ù„ Ø§Ù„Ø­ØµÙˆÙ„ Ø¹Ù„Ù‰ Ù…ÙŠØ²Ø© Ø£Ùˆ ÙØ§Ø¦Ø¯Ø©ØŸ ÙˆÙ„ÙƒÙ†</p>
                </div>
            </div>
            <div class="col-xl-3">
                <div class="emergency-contact-btns-box">
                    <a class="btn-one btn-rtl" href="#"><span class="txt">Ù…ÙˆØ¹Ø¯ Ø§Ù„ÙƒØªØ§Ø¨<i class="fa fa-angle-double-right round" aria-hidden="true"></i></span></a>
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
                        <h2><span>Ø®Ø¯Ù…Ø§Øª</span> Ù†Ø­Ù† Ù†Ù‚Ø¯Ù…<br> Ù„Ø¹Ù…Ù„Ø§Ø¦Ù†Ø§</h2>
                    </div>
                    <div class="text">
                        <p>Ùˆ Ø³Ø£Ø¹Ø±Ø¶ Ù…Ø«Ø§Ù„ Ø­ÙŠ Ù„Ù‡Ø°Ø§ØŒ Ù…Ù† Ù…Ù†Ø§ Ù„Ù… ÙŠØªØ­Ù…Ù„ Ø¬Ù‡Ø¯ Ø¨Ø¯Ù†ÙŠ Ø´Ø§Ù‚ Ø¥Ù„Ø§ Ù…Ù† Ø£Ø¬Ù„ Ø§Ù„Ø­ØµÙˆÙ„ Ø¹Ù„Ù‰ Ù…ÙŠØ²Ø© Ø£Ùˆ ÙØ§Ø¦Ø¯Ø©ØŸ ÙˆÙ„ÙƒÙ† Ù…Ù† Ù„Ø¯ÙŠÙ‡ Ø§Ù„Ø­Ù‚</p>
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
                        <h3><a href="#">Ø§Ù„Ø¥Ø¬Ø±Ø§Ø¡ Ø§Ù„Ø¬Ø±Ø§Ø­ÙŠ</a></h3>
                        <p>Ùˆ Ø³Ø£Ø¹Ø±Ø¶ Ù…Ø«Ø§Ù„ Ø­ÙŠ Ù„Ù‡Ø°Ø§ØŒ Ù…Ù† Ù…Ù†Ø§ Ù„Ù… ÙŠØªØ­Ù…Ù„ Ø¬Ù‡Ø¯ Ø¨Ø¯Ù†ÙŠ Ø´Ø§Ù‚ Ø¥Ù„Ø§ Ù…Ù† Ø£Ø¬Ù„ Ø§Ù„Ø­ØµÙˆÙ„ Ø¹Ù„Ù‰ Ù…ÙŠØ²Ø© Ø£Ùˆ ÙØ§Ø¦Ø¯Ø©ØŸ</p>
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
                        <h3><a href="#">ÙƒÙ„ Ø§Ù„Ù„ÙŠØ²Ùƒ Ø§Ù„Ù„ÙŠØ²Ø±</a></h3>
                        <p>Ùˆ Ø³Ø£Ø¹Ø±Ø¶ Ù…Ø«Ø§Ù„ Ø­ÙŠ Ù„Ù‡Ø°Ø§ØŒ Ù…Ù† Ù…Ù†Ø§ Ù„Ù… ÙŠØªØ­Ù…Ù„ Ø¬Ù‡Ø¯ Ø¨Ø¯Ù†ÙŠ Ø´Ø§Ù‚ Ø¥Ù„Ø§ Ù…Ù† Ø£Ø¬Ù„ Ø§Ù„Ø­ØµÙˆÙ„ Ø¹Ù„Ù‰ Ù…ÙŠØ²Ø© Ø£Ùˆ ÙØ§Ø¦Ø¯Ø©ØŸ</p>
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
                        <h3><a href="#">Ø§Ù„Ù‚Ø±Ù†ÙŠØ© ÙˆØ§Ù„Ø¬Ù„ÙˆÙƒÙˆÙ…Ø§</a></h3>
                        <p>Ùˆ Ø³Ø£Ø¹Ø±Ø¶ Ù…Ø«Ø§Ù„ Ø­ÙŠ Ù„Ù‡Ø°Ø§ØŒ Ù…Ù† Ù…Ù†Ø§ Ù„Ù… ÙŠØªØ­Ù…Ù„ Ø¬Ù‡Ø¯ Ø¨Ø¯Ù†ÙŠ Ø´Ø§Ù‚ Ø¥Ù„Ø§ Ù…Ù† Ø£Ø¬Ù„ Ø§Ù„Ø­ØµÙˆÙ„ Ø¹Ù„Ù‰ Ù…ÙŠØ²Ø© Ø£Ùˆ ÙØ§Ø¦Ø¯Ø©ØŸ</p>
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
<section class="slogan-style3-area" style="background-image: url('/eye-1/assets/images/parallax-background/slogan-style3-area-bg.jpg)">
    <div class="container">
        <div class="row">
            <div class="col-xl-12">
                <div class="slogan-content-style3 paroller">
                    <div class="title">
                        <h2><span>ÙˆØ§Ø¶Ø­</span> ØºØ¯Ø§ ØŒ Ø£Ø­Ø¶Ø±<br>Ø¹Ø§Ù„Ù…Ù‡Ù… Ø¥Ù„Ù‰ Ø§Ù„ØªØ±ÙƒÙŠØ²</h2>
                    </div>
                    <div class="btns-box">
                        <a class="btn-one btn-rtl" href="#"><span class="txt"><i class="fa fa-angle-double-right round" aria-hidden="true"></i>Ø¥ÙƒØªØ´Ù Ø£ÙƒØ«Ø±</span></a>
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
            <h2><span>Oktilcal</span>Ù‚Ø¨Ù„ ÙˆØ¨Ø¹Ø¯ Ø§Ù„Ø¹Ù…Ù„<br> Ø¹Ø±Ø¶ Ø§Ù„Ø´Ø±Ø§Ø¦Ø­</h2>
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
        <div class="left-box" style="background-image: url('/eye-1/assets/images/parallax-background/faq-left-box.jpg)"></div>
        <div class="right-box" style="background-image: url('/eye-1/assets/images/parallax-background/faq-right-box.jpg)"></div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-xl-6">
                <div class="faq-title-box text-right">
                    <div class="sec-title">
                        <h2 class="clrwhite"><span>ÙÙŠ ÙƒØ«ÙŠØ± Ù…Ù† Ø§Ù„Ø£Ø­ÙŠØ§Ù†</span> Ø·Ù„Ø¨Øª<br> Ø§Ù„Ø£Ø³Ø¦Ù„Ø©</h2>
                    </div>
                    <div class="text">
                        <p>Ùˆ Ø³Ø£Ø¹Ø±Ø¶ Ù…Ø«Ø§Ù„ Ø­ÙŠ Ù„Ù‡Ø°Ø§ØŒ Ù…Ù† Ù…Ù†Ø§ Ù„Ù… ÙŠØªØ­Ù…Ù„ Ø¬Ù‡Ø¯ Ø¨Ø¯Ù†ÙŠ Ø´Ø§Ù‚ Ø¥Ù„Ø§ Ù…Ù† Ø£Ø¬Ù„ Ø§Ù„Ø­ØµÙˆÙ„ Ø¹Ù„Ù‰ Ù…ÙŠØ²Ø© Ø£Ùˆ ÙØ§Ø¦Ø¯Ø©ØŸ ÙˆÙ„ÙƒÙ† Ù…Ù† Ù„Ø¯ÙŠÙ‡ Ø§Ù„Ø­Ù‚ Ø£Ù† ÙŠÙ†ØªÙ‚Ø¯</p>
                    </div>
                    <ul>
                        <li>
                            <span class="icon-vision-2"></span>
                            <h4>Ø±Ø¤ÙŠØ© Ø§Ù„Ø¹ÙŠÙ†</h4>
                        </li>
                        <li>
                            <span class="icon-eye-2"></span>
                            <h4>Ø¹Ø¯Ø³Ø© Ø¬Ø¯ÙŠØ¯Ø©</h4>
                        </li>
                    </ul>    
                </div>    
            </div>
            <div class="col-xl-6">
                <div class="faq-content-box">
                    <div class="accordion-box text-right">
                        <!--Start single accordion box-->
                        <div class="accordion accordion-block">
                            <div class="accord-btn active"><h4>Ø§Ø®ØªØ¨Ø§Ø± Ø¬ÙŠØ¯ ÙŠÙ…ÙƒÙ† Ø£Ù† ÙŠÙ†Ù‚Ø° Ø±Ø¤ÙŠØ© Ø¹ÙŠÙ†ÙŠÙƒ</h4></div>
                            <div class="accord-content collapsed">
                                <p>Ùˆ Ø³Ø£Ø¹Ø±Ø¶ Ù…Ø«Ø§Ù„ Ø­ÙŠ Ù„Ù‡Ø°Ø§ØŒ Ù…Ù† Ù…Ù†Ø§ Ù„Ù… ÙŠØªØ­Ù…Ù„ Ø¬Ù‡Ø¯ Ø¨Ø¯Ù†ÙŠ Ø´Ø§Ù‚ Ø¥Ù„Ø§ Ù…Ù† Ø£Ø¬Ù„ Ø§Ù„Ø­ØµÙˆÙ„ Ø¹Ù„Ù‰ Ù…ÙŠØ²Ø© Ø£Ùˆ ÙØ§Ø¦Ø¯Ø©ØŸ ÙˆÙ„ÙƒÙ† Ù…Ù† Ù„Ø¯ÙŠÙ‡ Ø§Ù„Ø­Ù‚ Ø£Ù† ÙŠÙ†ØªÙ‚Ø¯ Ø´Ø®Øµ Ù…Ø§ Ø£Ø±Ø§Ø¯ Ø£Ù† ÙŠØ´Ø¹Ø± Ø¨Ø§Ù„Ø³Ø¹Ø§Ø¯Ø© Ø§Ù„ØªÙŠ Ù„Ø§ ØªØ´ÙˆØ¨Ù‡Ø§ Ø¹ÙˆØ§Ù‚Ø¨ Ø£Ù„ÙŠÙ…Ø© Ø£Ùˆ Ø¢Ø®Ø± Ø£Ø±Ø§Ø¯ Ø£Ù† ÙŠØªØ¬Ù†Ø¨ Ø§Ù„Ø£Ù„Ù… Ø§Ù„Ø°ÙŠ Ø±Ø¨Ù…Ø§ ØªÙ†Ø¬Ù… Ø¹Ù†Ù‡ Ø¨Ø¹Ø¶ Ø§Ù„Ù…ØªØ¹Ø© ØŸ </p>
                            </div>
                        </div>
                        <!--End single accordion box-->
                        <!--Start single accordion box-->
                        <div class="accordion accordion-block">
                            <div class="accord-btn"><h4>Ø®Ø¯Ù…Ø© ØªØ¬Ø¹Ù„Ùƒ ØªØ±Ø§Ù†Ø§ Ø¨Ø£Ù… Ø¹ÙŠÙ†ÙŠÙƒ</h4></div>
                            <div class="accord-content">
                                <p>Ùˆ Ø³Ø£Ø¹Ø±Ø¶ Ù…Ø«Ø§Ù„ Ø­ÙŠ Ù„Ù‡Ø°Ø§ØŒ Ù…Ù† Ù…Ù†Ø§ Ù„Ù… ÙŠØªØ­Ù…Ù„ Ø¬Ù‡Ø¯ Ø¨Ø¯Ù†ÙŠ Ø´Ø§Ù‚ Ø¥Ù„Ø§ Ù…Ù† Ø£Ø¬Ù„ Ø§Ù„Ø­ØµÙˆÙ„ Ø¹Ù„Ù‰ Ù…ÙŠØ²Ø© Ø£Ùˆ ÙØ§Ø¦Ø¯Ø©ØŸ ÙˆÙ„ÙƒÙ† Ù…Ù† Ù„Ø¯ÙŠÙ‡ Ø§Ù„Ø­Ù‚ Ø£Ù† ÙŠÙ†ØªÙ‚Ø¯ Ø´Ø®Øµ Ù…Ø§ Ø£Ø±Ø§Ø¯ Ø£Ù† ÙŠØ´Ø¹Ø± Ø¨Ø§Ù„Ø³Ø¹Ø§Ø¯Ø© Ø§Ù„ØªÙŠ Ù„Ø§ ØªØ´ÙˆØ¨Ù‡Ø§ Ø¹ÙˆØ§Ù‚Ø¨ Ø£Ù„ÙŠÙ…Ø© Ø£Ùˆ Ø¢Ø®Ø± Ø£Ø±Ø§Ø¯ Ø£Ù† ÙŠØªØ¬Ù†Ø¨ Ø§Ù„Ø£Ù„Ù… Ø§Ù„Ø°ÙŠ Ø±Ø¨Ù…Ø§ ØªÙ†Ø¬Ù… Ø¹Ù†Ù‡ Ø¨Ø¹Ø¶ Ø§Ù„Ù…ØªØ¹Ø© ØŸ</p>
                            </div>
                        </div>
                        <!--End single accordion box-->
                        <!--Start single accordion box-->
                        <div class="accordion accordion-block bordernone">
                            <div class="accord-btn"><h4>Ù†Ø­Ù† Ø¹Ù„Ù‰ Ø§Ø³ØªØ¹Ø¯Ø§Ø¯ Ù„Ø­Ù…Ø§ÙŠØ© Ø±Ø¤ÙŠØªÙƒ</h4></div>
                            <div class="accord-content">
                                <p>Ùˆ Ø³Ø£Ø¹Ø±Ø¶ Ù…Ø«Ø§Ù„ Ø­ÙŠ Ù„Ù‡Ø°Ø§ØŒ Ù…Ù† Ù…Ù†Ø§ Ù„Ù… ÙŠØªØ­Ù…Ù„ Ø¬Ù‡Ø¯ Ø¨Ø¯Ù†ÙŠ Ø´Ø§Ù‚ Ø¥Ù„Ø§ Ù…Ù† Ø£Ø¬Ù„ Ø§Ù„Ø­ØµÙˆÙ„ Ø¹Ù„Ù‰ Ù…ÙŠØ²Ø© Ø£Ùˆ ÙØ§Ø¦Ø¯Ø©ØŸ ÙˆÙ„ÙƒÙ† Ù…Ù† Ù„Ø¯ÙŠÙ‡ Ø§Ù„Ø­Ù‚ Ø£Ù† ÙŠÙ†ØªÙ‚Ø¯ Ø´Ø®Øµ Ù…Ø§ Ø£Ø±Ø§Ø¯ Ø£Ù† ÙŠØ´Ø¹Ø± Ø¨Ø§Ù„Ø³Ø¹Ø§Ø¯Ø© Ø§Ù„ØªÙŠ Ù„Ø§ ØªØ´ÙˆØ¨Ù‡Ø§ Ø¹ÙˆØ§Ù‚Ø¨ Ø£Ù„ÙŠÙ…Ø© Ø£Ùˆ Ø¢Ø®Ø± Ø£Ø±Ø§Ø¯ Ø£Ù† ÙŠØªØ¬Ù†Ø¨ Ø§Ù„Ø£Ù„Ù… Ø§Ù„Ø°ÙŠ Ø±Ø¨Ù…Ø§ ØªÙ†Ø¬Ù… Ø¹Ù†Ù‡ Ø¨Ø¹Ø¶ Ø§Ù„Ù…ØªØ¹Ø© ØŸ</p>
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
                        <h2><span>Ø¢Ø®Ø±</span> Ø§Ù„Ø£Ø®Ø¨Ø§Ø± ÙˆØ§Ù„ØªØ­Ø¯ÙŠØ«Ø§Øª<br> Ù…Ø¨Ø§Ø´Ø±Ø© Ù…Ù† Ø§Ù„Ù…Ø¯ÙˆÙ†Ø©</h2>
                    </div>
                    <div class="text">
                        <p>Ùˆ Ø³Ø£Ø¹Ø±Ø¶ Ù…Ø«Ø§Ù„ Ø­ÙŠ Ù„Ù‡Ø°Ø§ØŒ Ù…Ù† Ù…Ù†Ø§ Ù„Ù… ÙŠØªØ­Ù…Ù„ Ø¬Ù‡Ø¯ Ø¨Ø¯Ù†ÙŠ Ø´Ø§Ù‚ Ø¥Ù„Ø§ Ù…Ù† Ø£Ø¬Ù„ Ø§Ù„Ø­ØµÙˆÙ„ Ø¹Ù„Ù‰ Ù…ÙŠØ²Ø© Ø£Ùˆ ÙØ§Ø¦Ø¯Ø©ØŸ ÙˆÙ„ÙƒÙ† Ù…Ù† Ù„Ø¯ÙŠÙ‡ Ø§Ù„Ø­Ù‚ Ø£Ù† ÙŠÙ†ØªÙ‚Ø¯ Ø´Ø®Øµ</p>
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
                            <h5>20 ÙŠÙˆÙ†ÙŠÙˆ</h5>
                        </div>
                    </div> 
                    <div class="text-holder">
                        <h3 class="blog-title"><a href="/eye-1/blog/single">Ø§Ù„Ø¢Ù† ÙŠÙ…ÙƒÙ†Ùƒ Ø±Ø¤ÙŠØ© Ø§Ù„Ù…Ø³ØªÙ‚Ø¨Ù„ Ø§Ù„Ø£ÙØ¶Ù„</a></h3>
                        <ul class="meta-info">
                            <li><span class="icon-user thm-clr"></span><a href="#">Ù…Ø´Ø±Ù</a></li>
                            <li><span class="icon-comments thm-clr"></span><a href="#">2 ØªØ¹Ù„ÙŠÙ‚</a></li>
                        </ul>
                        <div class="text">
                            <p>Ùˆ Ø³Ø£Ø¹Ø±Ø¶ Ù…Ø«Ø§Ù„ Ø­ÙŠ Ù„Ù‡Ø°Ø§ØŒ Ù…Ù† Ù…Ù†Ø§ Ù„Ù… ÙŠØªØ­Ù…Ù„ Ø¬Ù‡Ø¯ Ø¨Ø¯Ù†ÙŠ Ø´Ø§Ù‚ Ø¥Ù„Ø§ Ù…Ù† Ø£Ø¬Ù„ Ø§Ù„Ø­ØµÙˆÙ„ Ø¹Ù„Ù‰ Ù…ÙŠØ²Ø© Ø£Ùˆ  <span>...</span></p>    
                        </div>
                        <div class="bottom-box">
                            <div class="left">
                                <a class="readmore" href="#">Ù‚Ø±Ø§Ø¡Ø© Ø§Ù„Ù…Ø²ÙŠØ¯</a>
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
                            <h5>15 ÙŠÙˆÙ†ÙŠÙˆ</h5>
                        </div>
                    </div> 
                    <div class="text-holder">
                        <h3 class="blog-title"><a href="/eye-1/blog/single">Ø§Ù„Ø¢Ù† ÙŠÙ…ÙƒÙ†Ùƒ Ø±Ø¤ÙŠØ© Ø§Ù„Ù…Ø³ØªÙ‚Ø¨Ù„ Ø§Ù„Ø£ÙØ¶Ù„</a></h3>
                        <ul class="meta-info">
                            <li><span class="icon-user thm-clr"></span><a href="#">Ù…Ø´Ø±Ù</a></li>
                            <li><span class="icon-comments thm-clr"></span><a href="#">2 ØªØ¹Ù„ÙŠÙ‚</a></li>
                        </ul>
                        <div class="text">
                            <p>Ùˆ Ø³Ø£Ø¹Ø±Ø¶ Ù…Ø«Ø§Ù„ Ø­ÙŠ Ù„Ù‡Ø°Ø§ØŒ Ù…Ù† Ù…Ù†Ø§ Ù„Ù… ÙŠØªØ­Ù…Ù„ Ø¬Ù‡Ø¯ Ø¨Ø¯Ù†ÙŠ Ø´Ø§Ù‚ Ø¥Ù„Ø§ Ù…Ù† Ø£Ø¬Ù„ Ø§Ù„Ø­ØµÙˆÙ„ Ø¹Ù„Ù‰ Ù…ÙŠØ²Ø© Ø£Ùˆ  <span>...</span></p>    
                        </div>
                        <div class="bottom-box">
                            <div class="left">
                                <a class="readmore" href="#">Ù‚Ø±Ø§Ø¡Ø© Ø§Ù„Ù…Ø²ÙŠØ¯</a>
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
                        <h3>Ùˆ Ø³Ø£Ø¹Ø±Ø¶ Ù…Ø«Ø§Ù„ Ø­ÙŠ Ù„Ù‡Ø°Ø§ØŒ Ù…Ù† Ù…Ù†Ø§ Ù„Ù… ÙŠØªØ­Ù…Ù„ Ø¬Ù‡Ø¯ Ø¨Ø¯Ù†ÙŠ Ø´Ø§Ù‚ Ø¥Ù„Ø§ Ù…Ù† Ø£Ø¬Ù„ Ø§Ù„Ø­ØµÙˆÙ„ Ø¹Ù„Ù‰ Ù…ÙŠØ²Ø© Ø£Ùˆ ÙØ§Ø¦Ø¯Ø©ØŸ ÙˆÙ„ÙƒÙ† Ù…Ù† Ù„Ø¯ÙŠÙ‡ Ø§Ù„Ø­Ù‚ Ø£Ù† ÙŠÙ†ØªÙ‚Ø¯ Ø´Ø®Øµ Ù…Ø§ Ø£Ø±Ø§Ø¯ Ø£Ù† ÙŠØ´Ø¹Ø± Ø¨Ø§Ù„Ø³Ø¹Ø§Ø¯Ø© Ø§Ù„ØªÙŠ Ù„Ø§ ØªØ´ÙˆØ¨Ù‡Ø§ Ø¹ÙˆØ§Ù‚Ø¨ Ø£Ù„ÙŠÙ…Ø© Ø£Ùˆ Ø¢Ø®</h3>
                        <div class="blog-quote"><img src="/eye-1/assets/images/icon/blog-quote.png" alt="Quote"></div>
                    </div>   
                    <div class="text-holder">
                        <h3 class="blog-title"><a href="/eye-1/blog/single">Ùˆ Ø³Ø£Ø¹Ø±Ø¶ Ù…Ø«Ø§Ù„ Ø­ÙŠ Ù„Ù‡Ø°Ø§ØŒ Ù…Ù† Ù…Ù†Ø§ Ù„Ù… ÙŠØªØ­Ù…Ù„ Ø¬Ù‡Ø¯ Ø¨Ø¯Ù†ÙŠ Ø´Ø§Ù‚ Ø¥Ù„Ø§ Ù…Ù†Ø§Ù„Ø­ØµÙˆÙ„   </a></h3>
                        <ul class="meta-info">
                            <li><span class="icon-user thm-clr"></span><a href="#">Ù…Ø´Ø±Ù</a></li>
                            <li><span class="icon-comments thm-clr"></span><a href="#">2 ØªØ¹Ù„ÙŠÙ‚</a></li>
                        </ul>
                        <div class="bottom-box">
                            <div class="left">
                                <a class="readmore" href="#">Ù‚Ø±Ø§Ø¡Ø© Ø§Ù„Ù…Ø²ÙŠØ¯</a>
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
                        <h2><span>Ù†Ø­Ù† Ù†Ø­Ø¨</span> Ù†Ø³Ù…Ø¹ Ù…Ù†<br> Ø§Ù„Ø²Ø¨Ø§Ø¦Ù†</h2>
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
                                        <span class="txt">Ø¥Ø±Ø³Ø§Ù„ ØªØ¯Ù„ÙŠÙƒ<i class="fa fa-angle-double-right round" aria-hidden="true"></i></span>
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
<section dir="rtl" class="partner-style2-area" style="background-image: url('/eye-1/assets/images/parallax-background/partner-style2-area-bg.jpg)">
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
                            <h3>Ø§Ù„Ù†Ø´Ø±Ø© Ø§Ù„Ø¥Ø®Ø¨Ø§Ø±ÙŠØ©</h3>
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
