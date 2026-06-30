
import Header from '@/components/demo-5/Header';
import Footer from '@/components/demo-5/Footer';
import HtmlToNext from '@/components/demo-5/HtmlToNext';

export default function Page() {
  const html = `
        <!-- header -->
        
        <!-- header-end -->
        <!-- main-area -->
        <main>
            
            <!-- breadcrumb-area -->
            <section class="breadcrumb-area d-flex align-items-center" style="background-image:url(img/bg/bdrc-bg.png)">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-xl-12 col-lg-12">
                            <div class="breadcrumb-wrap text-left">
                                <div class="breadcrumb-title">
                                    <h2>About Us</h2>    
                                    <div class="breadcrumb-wrap">
                              
                                <nav aria-label="breadcrumb">
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item"><a href="index-2.html">Home</a></li>
                                        <li class="breadcrumb-item active" aria-current="page">About Us</li>
                                    </ol>
                                </nav>
                            </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
            <!-- breadcrumb-area-end -->
             <!-- about-area -->
            <section class="about-area about-p pt-120 pb-120 p-relative fix">
                <div class="container">
                    <div class="row justify-content-center align-items-center">
                         <div class="col-lg-6 col-md-12 col-sm-12">
                            <div class="s-about-img p-relative  wow fadeInLeft animated" data-animation="fadeInLeft" data-delay=".4s">
                                <img src="img/features/about_img.png" alt="img">   
                               <div class="about-text second-about">
                                    <span>50</span>
                                    <p>Years of Experience</p>
                                </div>
                            </div>
                          
                        </div>
                        
					<div class="col-lg-6 col-md-12 col-sm-12">
                            <div class="about-content s-about-content  wow fadeInRight  animated" data-animation="fadeInRight" data-delay=".4s">
                                <div class="about-title second-title pb-25">  
                                    <h5>About Us</h5>
                                    <h2>We Care For Your Dental Health</h2>                                   
                                </div>
                                   <p>Aliquam ac sem et diam iaculis efficitur. Morbi in enim odio. Nullam quis volutpat est, sed dapibus sapien. Cras condimentum eu velit id tempor. Curabitur purus sapien, cursus sed nisl tristique, commodo vehicula arcu.</p>
                                  <p>Aliquam erat volutpat. Aliquam enim massa, sagittis blandit ex mattis, ultricies posuere sapien. Morbi a dignissim enim. Fusce elementum, augue in elementum porta, sapien nunc volutpat ex, a accumsan nunc lectus eu lectus.</p>
                                 <div class="slider-btn mt-20">                                          
                                     <a href="about.html" class="btn ss-btn smoth-scroll">Read More</a>				
                                </div>
                            </div>
                        </div>
                     
                    </div>
                </div>
            </section>
            <!-- about-area-end -->
             <!-- call-area -->
            <div class="call-area" style="background-image:url(img/bg/call-bg.png); background-repeat: no-repeat; background-position: bottom;">
                <div class="container">
                    <div class="row align-items-center">
                         <div class="col-lg-5 col-md-5 col-sm-12">
                             <div class="single-counter-img fadeInUp animated" data-animation="fadeInDown animated" data-delay=".2s">
								 <img src="img/bg/call-man.png" alt="img" class="img">
                            </div>
                        </div>
                      <div class="col-lg-7 col-md-7 col-sm-12">        
                          <div class="call-text">
                              <h5>Book Dentail Appointment</h5>
                                <h2>We Are open And Welcoming Patients</h2>
                                <a href="#" class="btn">Book Appointment</a>
                          </div>
                       </div>
                       
                    </div>
                </div>
            </div>
            <!-- call-area-end -->
         
             <!-- team-area -->
            <section class="team-area2 fix p-relative pt-105 pb-80">  
                <div class="container">  
                    <div class="row">   
                        <div class="col-lg-12 p-relative">
                           <div class="section-title center-align mb-50 text-center wow fadeInDown animated" data-animation="fadeInDown" data-delay=".4s">
                               <h5>Our Doctor</h5>
                                <h2>
                                    Best Expert Dentist
                                </h2>
                             
                            </div>
                        </div>                        
                         
                    </div>
                   <div class="row team-active">                   
                        <div class="col-xl-4">
                            <div class="single-team mb-40">
                                <div class="team-thumb">
                                    <div class="brd">
                                         <img src="img/team/team01.png" alt="img">
                                        
                                    </div>
                                </div>
                                <div class="team-info">
                                    <h4><a href="team-single.html">Howard Holmes</a></h4>
                                    <p>Dentist</p>
                                    <div class="team-social">
                                        <ul>
                                            <li><a href="#"><i class="fab fa-facebook-f"></i></a></li> 
                                            <li> <a href="#"><i class="fab fa-twitter"></i></a></li>   
                                            <li><a href="#"><i class="fab fa-instagram"></i></a></li>   
                                        </ul>       
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4">
                            <div class="single-team mb-40">
                                <div class="team-thumb">
                                    <div class="brd">
                                        <img src="img/team/team02.png" alt="img">
                                    </div>                                     
                                </div>
                                <div class="team-info">
                                    <h4><a href="team-single.html">Ella Thompson</a></h4>
                                    <p>Dentist</p>
                                    <div class="team-social">
                                        <ul>
                                            <li><a href="#"><i class="fab fa-facebook-f"></i></a></li> 
                                            <li> <a href="#"><i class="fab fa-twitter"></i></a></li>   
                                            <li><a href="#"><i class="fab fa-instagram"></i></a></li>   
                                        </ul>       
                                    </div>
                                </div>
                            </div>
                        </div>
                       <div class="col-xl-4">
                            <div class="single-team mb-40">
                                <div class="team-thumb">
                                    <div class="brd">
                                        <img src="img/team/team03.png" alt="img">
                                    </div>
                                    
                                </div>
                                <div class="team-info">
                                    <h4><a href="team-single.html">Vincent Cooper</a></h4>
                                    <p>Dentist</p>
                                    <div class="team-social">
                                        <ul>
                                            <li><a href="#"><i class="fab fa-facebook-f"></i></a></li> 
                                            <li> <a href="#"><i class="fab fa-twitter"></i></a></li>   
                                            <li><a href="#"><i class="fab fa-instagram"></i></a></li>   
                                        </ul>       
                                    </div>
                                </div>
                            </div>
                        </div>
                         <div class="col-xl-4">
                            <div class="single-team mb-40">
                                <div class="team-thumb">
                                    <div class="brd">
                                         <img src="img/team/team04.png" alt="img">
                                    </div>
                                
                                </div>
                                <div class="team-info">
                                    <h4><a href="team-single.html">Danielle Bryant</a></h4>
                                    <p>Dentist</p>
                                    <div class="team-social">
                                        <ul>
                                            <li><a href="#"><i class="fab fa-facebook-f"></i></a></li> 
                                            <li> <a href="#"><i class="fab fa-twitter"></i></a></li>   
                                            <li><a href="#"><i class="fab fa-instagram"></i></a></li>   
                                        </ul>       
                                    </div>
                                </div>
                            </div>
                        </div>
                       <div class="col-xl-4">
                            <div class="single-team mb-40">
                                <div class="team-thumb">
                                    <div class="brd">
                                        <img src="img/team/team03.png" alt="img">
                                    </div>
                                    
                                </div>
                                <div class="team-info">
                                    <h4><a href="team-single.html">Vincent Cooper</a></h4>
                                    <p>Dentist</p>
                                    <div class="team-social">
                                        <ul>
                                            <li><a href="#"><i class="fab fa-facebook-f"></i></a></li> 
                                            <li> <a href="#"><i class="fab fa-twitter"></i></a></li>   
                                            <li><a href="#"><i class="fab fa-instagram"></i></a></li>   
                                        </ul>       
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
            <!-- team-area-end --> 
           <!-- faq-area -->
            <section class="faq-area fix" style="background-color: #0e264f;">
                <div class="container">
    
                    <div class="row align-items-center">                        
                       
                        <div class="col-lg-6">
                           <div class="section-title mb-50">
                               <h5>FAQ</h5>
                                <h2>Frequently Asked Question</h2>
                            </div>
                            <div class="faq-wrap">
                                <div class="accordion" id="accordionExample">
                                    <div class="card">
                                        <div class="card-header" id="headingThree">
                                            <h2 class="mb-0">
                                                <button class="faq-btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-bs-expanded="true" aria-bs-controls="collapseThree">
                                                   Vivamus rhoncus ante a ipsum imperdiet ?
                                                </button>
                                            </h2>
                                        </div>
                                        <div id="collapseThree" class="collapse show" aria-bs-labelledby="headingThree" data-bs-parent="#accordionExample">
                                            <div class="card-body">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div class="card-header" id="headingOne">
                                            <h2 class="mb-0">
                                                <button class="faq-btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-bs-expanded="false" aria-bs-controls="collapseOne">
                                                   Integer id dolor at nisi laoreet iaculis vitae ?
                                                </button>
                                            </h2>
                                        </div>
                                        <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div class="card-body">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div class="card-header" id="headingTwo">
                                            <h2 class="mb-0">
                                                <button class="faq-btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-bs-expanded="false" aria-bs-controls="collapseTwo">
                                                  Donec venenatis elit dignissim, posuere ?
                                                </button>
                                            </h2>
                                        </div>
                                        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                            <div class="card-body">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                            </div>
                                        </div>
                                    </div>
                                     <div class="card">
                                        <div class="card-header" id="headingOne">
                                            <h2 class="mb-0">
                                                <button class="faq-btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#headingFour" aria-bs-expanded="false" aria-bs-controls="headingFour">
                                                  Curabitur varius, massa sit amet egestas ?
                                                </button>
                                            </h2>
                                        </div>
                                        <div id="headingFour" class="collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                            <div class="card-body">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                            </div>
                                        </div>
                                    </div>
                                                                      
                                </div>
                            </div>
                        </div>
                         <div class="col-lg-6">
                            <div class="faq-img text-right">
                                <img src="img/bg/faq-img.png" alt="img" class="img">
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- faq-aread-end -->
             <!-- blog-area -->
            <section id="blog" class="blog-area p-relative fix pt-90 pb-90">
                <div class="container">
                    <div class="row align-items-center"> 
                        <div class="col-lg-12">
                            <div class="section-title center-align mb-50 text-center wow fadeInDown animated" data-animation="fadeInDown" data-delay=".4s">
                                <h5>Our Blog</h5>
                                <h2>
                                 Latest Blog &amp; News
                                </h2>
                               
                            </div>
                           
                        </div>
                    </div>
                    <div class="row">
                       <div class="col-lg-4 col-md-6">
                            <div class="single-post2 hover-zoomin mb-30 wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s">
                                <div class="blog-thumb2">
                                    <a href="blog-details.html"><img src="img/blog/inner_b1.jpg" alt="img"></a>
                                </div>                    
                                <div class="blog-content2">    
                                    <div class="date-home">
                                        <i class="fal fa-calendar-alt"></i> 24th March 2021
                                    </div>
                                    <h4><a href="blog-details.html">Cras accumsan nulla nec lacus ultricies placerat.</a></h4> 
                                    <p>Curabitur sagittis libero tincidunt tempor finibus. Mauris at dignissim ligula, nec tristique orci.</p>
                                    <div class="blog-btn"><a href="blog-details.html">Read More</a></div>
                                     
                                </div>
                            </div>
                        </div>
                         <div class="col-lg-4 col-md-6">
                            <div class="single-post2 mb-30 hover-zoomin wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s">
                                <div class="blog-thumb2">
                                    <a href="blog-details.html"><img src="img/blog/inner_b2.jpg" alt="img"></a>
                                </div>
                                <div class="blog-content2">                                    
                                    <div class="date-home">
                                        <i class="fal fa-calendar-alt"></i> 24th March 2021
                                    </div>
                                    <h4><a href="blog-details.html">Dras accumsan nulla nec lacus ultricies placerat.</a></h4> 
                                    <p>Curabitur sagittis libero tincidunt tempor finibus. Mauris at dignissim ligula, nec tristique orci.</p>
                                    <div class="blog-btn"><a href="blog-details.html">Read More</a></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="single-post2 mb-30 hover-zoomin wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s">
                                <div class="blog-thumb2">
                                    <a href="blog-details.html"><img src="img/blog/inner_b3.jpg" alt="img"></a>
                                </div>
                                <div class="blog-content2">                                    
                                    <div class="date-home">
                                        <i class="fal fa-calendar-alt"></i> 24th March 2021
                                    </div>
                                    <h4><a href="blog-details.html">Seas accumsan nulla nec lacus ultricies placerat.</a></h4> 
                                    <p>Curabitur sagittis libero tincidunt tempor finibus. Mauris at dignissim ligula, nec tristique orci.</p>
                                    <div class="blog-btn"><a href="blog-details.html">Read More</a></div>
                                </div>
                            </div>
                        </div>
                
                        
                    </div>
                </div>
            </section>
            <!-- blog-area-end -->
         
        </main>
        <!-- main-area-end -->
        <!-- footer -->
        
        <!-- footer-end -->

		<!-- JS here -->
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
    


`;
  
  return (
    <>
      <Header />
      <HtmlToNext html={html} />
      <Footer />
    </>
  );
}
