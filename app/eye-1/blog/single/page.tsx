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
                            <li class="active">News Details</li>
                        </ul>    
                    </div>
                    
                    <div class="title wow slideInUp animated" data-wow-delay="0.3s" data-wow-duration="1500ms">
                       <h2>News Details</h2>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</section>
<!--End breadcrumb area-->



<!--Start Blog single Area-->
<section class="blog-single-area">
    <div class="container">
        <div class="row">
            <div class="col-xl-8 col-lg-7">
                <div class="blog-post">
                   
                    <div class="single-blog-style1">
                        <div class="img-holder">
                            <img src="/eye-1/assets/images/blog/blog-detail-v1-1.jpg" alt="Awesome Image">
                            <div class="date-box">
                                <h5>20 June</h5>
                            </div>
                        </div> 
                        <div class="text-holder">
                            <h3 class="blog-title">Protect your eyes from dust and disease</h3>
                            <ul class="meta-info">
                                <li><span class="icon-user thm-clr"></span><a href="#">Admin</a></li>
                                <li><span class="icon-comments thm-clr"></span><a href="#">2 Comments</a></li>
                            </ul>
                            <div class="text">
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p> 
                            </div>
                        </div>
                    </div>
                      
                    <div class="blog-details-text-box-one">
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes.</p>    
                    </div>
                      
                    <div class="tag-box">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="tag pull-left">
                                    <div class="title"><h3>Tags:</h3></div>
                                    <ul>
                                        <li><a href="#">Lenses,</a></li>
                                        <li><a href="#">Eye Care.</a></li>
                                    </ul>
                                </div>
                                <div class="right pull-right">
                                    <ul class="social-links-style1 float-left fix">
                                        <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i class="fa fa-skype" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                    </ul>  
                                </div>
                            </div>
                        </div>
                    </div>
                      
                    <div class="blog-detail-author-box">
                        <div class="img-box">
                            <img src="/eye-1/assets/images/blog/blog-detail-author.jpg" alt="Awesome Image">
                        </div>
                        <div class="text-box">
                            <h3>Christine Eve</h3>
                            <p>Lorem ipsum is simply free text used copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed veritatis et quasi architecto.</p>
                        </div> 
                    </div> 
                       
                    <!--Start comment box-->
                    <div class="comment-box">
                        <div class="title">
                            <h3>Comments</h3>
                        </div>
                        <div class="outer-box">
                            <div class="row">
                                <div class="col-md-12">
                                    <!--Start single comment-->
                                    <div class="single-comment">
                                        <div class="single-comment-box">
                                            <div class="img-holder">
                                                <img src="/eye-1/assets/images/blog/comment-1.png" alt="Awesome Image">
                                            </div>
                                            <div class="text-holder">
                                                <h3>Jessica Brown <span>20 May, 2020 . 4:00 pm</span></h3>
                                                <p>Lorem Ipsum is simply dummy free text of the available pr and typesetting been the industry standard dummy text ever sincer purus.</p>
                                                <div class="reply-button">
                                                    <a class="btn-one style2" href="#">
                                                        <span class="txt">Reply<i class="fa fa-angle-double-right round" aria-hidden="true"></i></span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!--End single comment-->
                                    <!--Start single comment-->
                                    <div class="single-comment">
                                        <div class="single-comment-box">
                                            <div class="img-holder">
                                                <img src="/eye-1/assets/images/blog/comment-2.png" alt="Awesome Image">
                                            </div>
                                            <div class="text-holder">
                                                <h3>David Martin <span>20 May, 2020 . 4:00 pm</span></h3>
                                                <p>Lorem Ipsum is simply dummy free text of the available pr and typesetting been the industry standard dummy text ever sincer purus.</p>
                                                <div class="reply-button">
                                                    <a class="btn-one style2" href="#">
                                                        <span class="txt">Reply<i class="fa fa-angle-double-right round" aria-hidden="true"></i></span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!--End single comment-->
                            
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--End comment box-->
                    
                    <!--Start add comment box-->
                    <div class="add-comment-box">
                        <div class="title">
                            <h3>Leave a Reply</h3>
                        </div>
                        <form id="add-comment-form" action="#">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <input type="text" name="fname" value="" placeholder="Name" required="">
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <input type="email" name="femail" value="" placeholder="Email" required="">
                                        </div>
                                        <div class="col-md-6">
                                            <input type="text" name="fsubject" value="" placeholder="Subject">
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <textarea name="message" placeholder="Massage" required=""></textarea>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="button-box">
                                                <button class="btn-one" type="submit">
                                                    <span class="txt">Post Comments<i class="fa fa-angle-double-right round" aria-hidden="true"></i></span>
                                                </button>    
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <!--End add comment box-->       
                </div>
            </div>
            
            <!--Start sidebar Wrapper-->
            <div class="col-xl-4 col-lg-5 col-md-9 col-sm-12">
                <div class="sidebar-wrapper">
                    <!--Start single sidebar-->
                    <div class="single-sidebar wow fadeInUp animated" data-wow-delay="0.1s" data-wow-duration="1200ms">
                        <div class="sidebar-search-box">
                            <form class="search-form" action="#">
                                <input placeholder="Search...." type="text">
                                <button type="submit"><i class="fa fa-search" aria-hidden="true"></i></button>
                            </form>
                        </div>
                    </div>
                    <!--End single sidebar-->
                    
                    <!--Start single sidebar-->
                    <div class="single-sidebar latest-posts-box wow fadeInUp animated" data-wow-delay="0.5s" data-wow-duration="1200ms">
                        <div class="title">
                            <h3>Latest Posts</h3>
                        </div>
                        <ul class="latest-posts">
                            <li>
                                <div class="inner">   
                                    <div class="img-box">
                                        <img src="/eye-1/assets/images/sidebar/latest-post-1.png" alt="Awesome Image">
                                        <div class="overlay-content">
                                            <a href="#"><i class="fa fa-link" aria-hidden="true"></i></a>
                                        </div>    
                                    </div>
                                    <div class="title-box">
                                        <h4><a href="#">Get a 7 tips for eye lasik experience</a></h4>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="inner">   
                                    <div class="img-box">
                                        <img src="/eye-1/assets/images/sidebar/latest-post-2.png" alt="Awesome Image">
                                        <div class="overlay-content">
                                            <a href="#"><i class="fa fa-link" aria-hidden="true"></i></a>
                                        </div>    
                                    </div>
                                    <div class="title-box">
                                        <h4><a href="#">Youâ€™re nothing without your eyes</a></h4>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="inner">   
                                    <div class="img-box">
                                        <img src="/eye-1/assets/images/sidebar/latest-post-3.png" alt="Awesome Image">
                                        <div class="overlay-content">
                                            <a href="#"><i class="fa fa-link" aria-hidden="true"></i></a>
                                        </div>    
                                    </div>
                                    <div class="title-box">
                                        <h4><a href="#">We give best care to your eyes</a></h4>
                                    </div>
                                </div>
                            </li>
                            
                        </ul>     
                    </div>
                    <!--End single sidebar-->
                    
                    <!--Start sidebar categories Box-->
                    <div class="single-sidebar categories-box wow fadeInUp animated" data-wow-delay="0.3s" data-wow-duration="1200ms">
                        <div class="title">
                            <h3>Categories</h3>
                        </div>
                        <div class="categories">
                            <ul>
                                <li><a href="/eye-1/services/surgical-procedure">Eye Care</a></li>
                                <li class="active"><a href="/eye-1/services/all-laser-lasik">Surgery</a></li>
                                <li><a href="/eye-1/services/cornea-glaucoma">Contact Lenses</a></li>
                                <li><a href="/eye-1/services/eye-surgery">Vision Correction</a></li>
                                <li><a href="/eye-1/services/eye-test-care">Glaucoma</a></li>
                                <li><a href="/eye-1/services/contact-lenses">Eye Specialist</a></li>
                            </ul>
                        </div>  
                    </div>
                    <!--End sidebar categories Box-->
                    
                    <!--Start single sidebar-->
                    <div class="single-sidebar popular-tag-box last-child wow fadeInUp animated" data-wow-delay="0.7s" data-wow-duration="1200ms">
                        <div class="title">
                            <h3>Tags</h3>
                        </div>
                        <ul class="popular-tag">
                            <li><a href="#">Eyecare,</a></li>
                            <li><a href="#">Lenses,</a></li>
                            <li><a href="#">Vision,</a></li>
                            <li><a href="#">Glaucoma,</a></li>
                            <li><a href="#"> Eyespecialist,</a></li>
                            <li><a href="#">Eyes,</a></li>
                            <li><a href="#">Surgeries,</a></li>
                        </ul>     
                    </div>
                    <!--End single sidebar-->
                    
                    
                </div>    
            </div>
            <!--End Sidebar Wrapper-->
            
        </div>
    </div>    
</section>
<!--End Blog single Area-->
  
  
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
