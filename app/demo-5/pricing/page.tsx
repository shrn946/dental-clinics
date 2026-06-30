
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
                                    <h2>Pricing</h2>    
                                    <div class="breadcrumb-wrap">
                              
                                <nav aria-label="breadcrumb">
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item"><a href="index-2.html">Home</a></li>
                                        <li class="breadcrumb-item active" aria-current="page">Pricing</li>
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
			<!-- pricing-area -->
            <section id="pricing" class="pricing-area pt-120 pb-60 fix p-relative">
                <div class="container"> 
                   <div class="row">
                        <div class="col-lg-4 col-md-6">
                          <div class="pricing-box pricing-box2 text-center mb-60">
                                    <div class="pricing-head">   
                                        <div class="icon">
                                             <img src="img/icon/pr-icon1.png" alt="img">
                                        </div>
                                        <h3>Basic Plan</h3>  
                                            <div class="price-count">
                                                <h2>$49 <span>/ Monthly</span></h2>
                                            </div> 
                                        <hr>
                                    </div>

                                    <div class="pricing-body mt-20 mb-30 text-left">
                                       <ul>
                                            <li>Aliquam quis justo at lorem</li>
                                            <li>Fusce sodales, urna et tempus</li>
                                            <li>Vestibulum blandit lorem quis</li>
                                            <li>Orci varius natoque penatibus</li>
                                            <li>Aliquam a nisl congue, auctor</li>
                                        </ul>
                                    </div>             

                                    <div class="pricing-btn">
                                       <a href="contact.html" class="btn ss-btn">Choose Plan</a>
                                    </div>
                                </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                             <div class="pricing-box pricing-box2 active text-center mb-60">
                                    <div class="pricing-head">   
                                        <div class="icon">
                                             <img src="img/icon/pr-icon2.png" alt="img">
                                        </div>
                                        <h3>Standard Plan </h3>  
                                            <div class="price-count">
                                            <h2>$99 <span>/ Monthly</span></h2>
                                        </div> 
                                        <hr>
                                    </div>

                                    <div class="pricing-body mt-20 mb-30 text-left">
                                       <ul>
                                            <li>Aliquam quis justo at lorem</li>
                                            <li>Fusce sodales, urna et tempus</li>
                                            <li>Vestibulum blandit lorem quis</li>
                                            <li>Orci varius natoque penatibus</li>
                                            <li>Aliquam a nisl congue, auctor</li>
                                        </ul>
                                    </div>             

                                    <div class="pricing-btn">
                                        <a href="contact.html" class="btn ss-btn">Choose Plan</a>
                                    </div>
                                </div>
                      
                        </div>
                         <div class="col-lg-4 col-md-6">
                             <div class="pricing-box pricing-box2 text-center mb-60">
                                    <div class="pricing-head">   
                                        <div class="icon">
                                             <img src="img/icon/pr-icon3.png" alt="img">
                                        </div>
                                        <h3>Unlimited Plan</h3>  
                                            <div class="price-count">
                                            <h2>$149 <span>/ Monthly</span></h2>
                                        </div> 
                                        <hr>
                                    </div>

                                    <div class="pricing-body mt-20 mb-30 text-left">
                                       <ul>
                                           <li>Aliquam quis justo at lorem</li>
                                            <li>Fusce sodales, urna et tempus</li>
                                            <li>Vestibulum blandit lorem quis</li>
                                            <li>Orci varius natoque penatibus</li>
                                            <li>Aliquam a nisl congue, auctor</li>
                                        </ul>
                                    </div>             

                                    <div class="pricing-btn">
                                        <a href="contact.html" class="btn ss-btn">Choose Plan</a>
                                    </div>
                                </div>
                             
                           
                        </div>
                    </div>
                </div>
            </section>
            <!-- pricing-area-end -->
          
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
