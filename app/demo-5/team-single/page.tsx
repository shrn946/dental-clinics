
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
                                    <h2>Team Details</h2>    
                                    <div class="breadcrumb-wrap">
                              
                                <nav aria-label="breadcrumb">
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item"><a href="index-2.html">Home</a></li>
                                        <li class="breadcrumb-item active" aria-current="page">Team Details </li>
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
             <!-- Project Detail -->
            <section class="team-area-content">
                <div class="container">

                    <!-- Lower Content -->
                    <div class="lower-content">
                        <div class="row">
                             <div class="col-lg-3 col-md-12 col-sm-12 text-center">
                                 <div class="team-img-box">
                                     <img src="img/team/team01.png" alt="img">
                                 </div>

                            </div>

                            <div class="text-column col-lg-9 col-md-12 col-sm-12">
                               <div class="s-about-content pl-30 wow fadeInRight" data-animation="fadeInRight" data-delay=".2s">  
                                        <p>Pleasure and praising pain was born and I will give you a complete account of the systems, and expound the actually teachings of the great explorer of the truth, the master-builder of human uts happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally Nor who loves or pursues or desires to obtain pain of itself.</p>
                                        <div class="row">
                                            <div class="col-lg-6">
                                                <div class="skills-content s-about-content mt-20">
                                                    <div class="skills">
                                                        <div class="skill mb-30">
                                                          <div class="skill-name">Design</div>
                                                          <div class="skill-bar">
                                                            <div class="skill-per" id="80"></div>
                                                          </div>
                                                        </div>
                                                         <div class="skill mb-30">
                                                          <div class="skill-name">Easy Manage</div>
                                                          <div class="skill-bar">
                                                            <div class="skill-per" id="90"></div>
                                                          </div>
                                                        </div>
                                                          <div class="skill mb-30">
                                                          <div class="skill-name">Project Organize</div>
                                                          <div class="skill-bar">
                                                            <div class="skill-per" id="70"></div>
                                                          </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="per-info">
                                                     <h4>Personal Info</h4> 
                                                        <ul>
                                                            <li>
                                                                <div class="icon"><i class="fal fa-envelope"></i> <strong>Email</strong></div>
                                                                <div class="text">info@webexample.com</div>
                                                            </li>    
                                                            <li>
                                                                <div class="icon"><i class="fal fa-phone"></i> <strong>Phone</strong></div>
                                                                <div class="text">980-786-098-09</div>
                                                            </li>    
                                                            <li>
                                                                <div class="icon"><i class="fal fa-map-marker-alt"></i><strong>Address</strong></div>
                                                                <div class="text">12/A, Miranda City Hall, NYC</div>
                                                            </li>    
                                                            <li>
                                                                <div class="icon"><i class="fal fa-globe"></i><strong>Website</strong></div>
                                                                <div class="text">www.webexample.com</div>
                                                            </li>    
                                                        </ul>     
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                            </div>


                        </div>
                    </div>

                </div>
            </section>
            <!--End Project Detail -->
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
