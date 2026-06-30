
import Header from '@/components/demo-5/Header';
import Footer from '@/components/demo-5/Footer';
import HtmlToNext from '@/components/demo-5/HtmlToNext';

export default function Page() {
  const html = `
        <!-- header -->
        
        <!-- header-end -->
        <!-- main-area -->
        <main>
            
            <!-- search-popup -->
		<div class="modal fade bs-example-modal-lg search-bg popup1" tabindex="-1" role="dialog">
			<div class="modal-dialog modal-lg" role="document">
				<div class="modal-content search-popup">
					<div class="text-center">
						<a href="#" class="close2" data-dismiss="modal" aria-label="Close">× close</a>
					</div>
					<div class="row search-outer">
						<div class="col-md-11"><input type="text" placeholder="Search for products..."></div>
						<div class="col-md-1 text-right"><a href="#"><i class="fa fa-search" aria-hidden="true"></i></a></div>
					</div>
				</div>
			</div>
		</div>
		<!-- /search-popup -->
            <!-- breadcrumb-area -->
            <section class="breadcrumb-area d-flex align-items-center" style="background-image:url(img/bg/bdrc-bg.png);">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-xl-12 col-lg-12">
                            <div class="breadcrumb-wrap text-left">
                                <div class="breadcrumb-title">
                                    <h2>Service</h2>    
                                    <div class="breadcrumb-wrap">
                              
                                <nav aria-label="breadcrumb">
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item"><a href="index-2.html">Home</a></li>
                                        <li class="breadcrumb-item active" aria-current="page">Service</li>
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
			 <!-- service-details2-area -->
            <section id="service-details2" class="service-details-two pt-120 pb-85 p-relative">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-4 col-md-6 col-sm-12 mb-15">
                            <div class="about-content s-about-content">                          
                                <ul class="sr-tw-ul">
                                    <li>
                                      <div class="icon"><img src="img/icon/fe-icon01.png" alt="icon01"></div>
                                        <div class="text">
                                          <h4>Root Canal</h4> 
                                            <p>Aenean eleifend turpis tellus, nec laoreet metus elementum ac.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12 mb-15">
                            <div class="about-content s-about-content">
                                <ul class="sr-tw-ul">
                                    <li>
                                        <div class="icon"><img src="img/icon/fe-icon05.png" alt="icon01"></div>
                                        <div class="text">
                                          <h4>Alignment Teeth</h4> 
                                            <p>Aenean eleifend turpis tellus, nec laoreet metus elementum ac.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12 mb-15">
                            <div class="about-content s-about-content">
                                <ul class="sr-tw-ul">
                                     <li>
                                       <div class="icon"><img src="img/icon/fe-icon07.png" alt="icon01"></div>
                                        <div class="text">
                                           <h4>Cosmetic Teeth</h4> 
                                            <p>Aenean eleifend turpis tellus, nec laoreet metus elementum ac.</p>
                                        </div>
                                    </li>                               
                                </ul>
                            </div>
                        </div>
                       
					   <div class="col-lg-4 col-md-6 col-sm-12 mb-15">
                            <div class="about-content s-about-content">
                                 <ul class="sr-tw-ul">
                                    <li>
                                        <div class="icon"><img src="img/icon/fe-icon04.png" alt="icon01"></div>
                                         <div class="text pt-10">
                                           <h4>Oral Hygiene</h4> 
                                            <p>Aenean eleifend turpis tellus, nec laoreet metus elementum ac.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12 mb-15">
                            <div class="about-content s-about-content">
                                 <ul class="sr-tw-ul">
                                    <li>
                                         <div class="icon"><img src="img/icon/fe-icon06.png" alt="icon01"></div>
                                         <div class="text pt-10">
                                           <h4>Live Advisory</h4> 
                                            <p>Aenean eleifend turpis tellus, nec laoreet metus elementum ac.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12 mb-15">
                            <div class="about-content s-about-content">
                                 <ul class="sr-tw-ul">
                                     <li>
                                         <div class="icon"><img src="img/icon/fe-icon08.png" alt="icon01"></div>
                                         <div class="text pt-10">
                                           <h4>Cavity Inspection</h4> 
                                            <p>Aenean eleifend turpis tellus, nec laoreet metus elementum ac.</p>
                                        </div>
                                    </li>
                               
                                </ul>
                            </div>
                        </div>
                     
                    </div>
                </div>
            </section>
            <!-- service-details2-area-end -->
            <!-- booking-area -->
            <section id="booking" class="booking-area p-relative">
                <div class="container">
                    <form action="#" class="contact-form">
							<div class="row">
                                <div class="col-lg-12"> 
                                    <ul>
                                        <li> 
                                            <div class="contact-field p-relative c-name">  
                                                <input type="text" placeholder="Enter Name">
                                                <i class="fal fa-user"></i>
                                            </div>      
                                        </li>
                                        <li>
                                            <div class="contact-field p-relative c-email">    
                                                <input type="text" placeholder="Select Your Location...">
                                                <i class="fal fa-map-marker-alt"></i>
                                            </div> 
                                        </li>
                                        <li>
                                             <div class="contact-field p-relative c-subject mb-20">                     
                                                  <select class="custom-select" id="inputGroupSelect04" aria-label="Example select with button addon">
                                                    <option selected="">Select Department...</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                  </select>
                                                 <i class="far fa-angle-down"></i>
                                            </div>
                                        
                                        </li>
                                        <li>
                                            <div class="slider-btn">                                          
                                            <button class="bk-btn" data-animation="fadeInRight" data-delay=".8s">Submit Now</button>
                                        </div>     
                                        </li>
                                    </ul>
                                </div>
                          
                            </div>
                        
                    </form>
                </div>
            </section>
            <!-- booking-area-end -->
             <!-- testimonial-area -->
            <section class="testimonial-area pb-115 p-relative fix" style="background-color: #f6f8fc;">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="section-title text-center mb-50 wow fadeInDown animated" data-animation="fadeInDown" data-delay=".4s">
                                <h5>Testimonial</h5>
                                <h2>
                                 What Our Clients Says
                                </h2>
                             
                            </div>
                           
                        </div>
                        
                        <div class="col-lg-12">
                            <div class="testimonial-active">
                                <div class="single-testimonial">
                                     <div class="testi-author">
                                        <img src="img/testimonial/testi_avatar.png" alt="img">
                                    </div>
                                    <div class="review mb-30"><img src="img/testimonial/review-icon.png" alt="img"></div>
                                    <p>“Morbi neque nisi, tincidunt nec erat vitae, viverra porttitor lorem. Fusce tempor nunc at luctus blandit. Donec eget fermentum magna.we dedicate financial on services the teams serve all Curabitur ac tortor ante. Sed quis dignissim”</p>
                                    <div class="ta-info">
                                            <h6>Margie Dose</h6>
                                            <span>Web Developer</span>
                                        </div>
                                    <div class="qt-img">
                                    <img src="img/testimonial/qt-icon.png" alt="img">
                                    </div>
                                </div>
                                <div class="single-testimonial">
                                    <div class="testi-author">
                                        <img src="img/testimonial/testi_avatar_02.png" alt="img">
                                    </div>
                                    <div class="review mb-30"><img src="img/testimonial/review-icon.png" alt="img"></div>
                                  <p>“Morbi neque nisi, tincidunt nec erat vitae, viverra porttitor lorem. Fusce tempor nunc at luctus blandit. Donec eget fermentum magna.we dedicate financial on services the teams serve all Curabitur ac tortor ante. Sed quis dignissim”</p>
                                    <div class="ta-info">
                                            <h6>Jone Walker</h6>
                                            <span>Web Designer</span>
                                        </div>
                                     <div class="qt-img">
                                    <img src="img/testimonial/qt-icon.png" alt="img">
                                    </div>
                                </div>
                              <div class="single-testimonial">
                                  <div class="testi-author">
                                        <img src="img/testimonial/testi_avatar_02.png" alt="img">
                                    </div>
                                 <div class="review mb-30"><img src="img/testimonial/review-icon.png" alt="img"></div>
                                    <p>“Morbi neque nisi, tincidunt nec erat vitae, viverra porttitor lorem. Fusce tempor nunc at luctus blandit. Donec eget fermentum magna.we dedicate financial on services the teams serve all Curabitur ac tortor ante. Sed quis dignissim”</p>
                                    <div class="ta-info">
                                            <h6>Dose Robot</h6>
                                            <span>Web Developer</span>
                                        </div>
                                    <div class="qt-img">
                                    <img src="img/testimonial/qt-icon.png" alt="img">
                                    </div>
                                </div>
                                <div class="single-testimonial">
                                     <div class="testi-author">
                                        <img src="img/testimonial/testi_avatar.png" alt="img">
                                    </div>
                                    <div class="review mb-30"><img src="img/testimonial/review-icon.png" alt="img"></div>
                                  <p>“Morbi neque nisi, tincidunt nec erat vitae, viverra porttitor lorem. Fusce tempor nunc at luctus blandit. Donec eget fermentum magna.we dedicate financial on services the teams serve all Curabitur ac tortor ante. Sed quis dignissim”</p>
                                   <div class="ta-info">
                                            <h6>Jone Walker</h6>
                                            <span>Web Designer</span>
                                        </div>
                                     <div class="qt-img">
                                    <img src="img/testimonial/qt-icon.png" alt="img">
                                    </div>
                                </div>
                                <div class="single-testimonial">
                                     <div class="testi-author">
                                        <img src="img/testimonial/testi_avatar_02.png" alt="img">
                                    </div>
                                    <div class="review mb-30"><img src="img/testimonial/review-icon.png" alt="img"></div>
                                    <p>“Morbi neque nisi, tincidunt nec erat vitae, viverra porttitor lorem. Fusce tempor nunc at luctus blandit. Donec eget fermentum magna.we dedicate financial on services the teams serve all Curabitur ac tortor ante. Sed quis dignissim”</p>
                                   <div class="ta-info">
                                           <h6>Margie Dose</h6>
                                            <span>Web Developer</span>
                                        </div>
                                    <div class="qt-img">
                                    <img src="img/testimonial/qt-icon.png" alt="img">
                                    </div>
                                </div>
                                <div class="single-testimonial">
                                    <div class="testi-author">
                                        <img src="img/testimonial/testi_avatar.png" alt="img">
                                    </div>
                                    <div class="review mb-30"><img src="img/testimonial/review-icon.png" alt="img"></div>
                                  <p>“Morbi neque nisi, tincidunt nec erat vitae, viverra porttitor lorem. Fusce tempor nunc at luctus blandit. Donec eget fermentum magna.we dedicate financial on services the teams serve all Curabitur ac tortor ante. Sed quis dignissim”</p>
                                    <div class="ta-info">
                                            <h6>Jone Walker</h6>
                                            <span>Web Designer</span>
                                        </div>
                                     <div class="qt-img">
                                    <img src="img/testimonial/qt-icon.png" alt="img">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- testimonial-area-end -->
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
