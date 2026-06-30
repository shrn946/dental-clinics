
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
                                    <h2>Faq</h2>    
                                    <div class="breadcrumb-wrap">
                              
                                <nav aria-label="breadcrumb">
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item"><a href="index-2.html">Home</a></li>
                                        <li class="breadcrumb-item active" aria-current="page">Faq </li>
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
			 <!-- team-area -->
            <section id="faq" class="faq-area pt-120 pb-120">             
                <div class="container">   
                    <div class="row">
                        <div class="col-lg-6 col-md-6">
                            <div class="faq-wrap">
                                <div class="accordion" id="accordionExample">
                                    <div class="card">
                                        <div class="card-header" id="headingOne">
                                            <h2 class="mb-0">
                                                <button class="faq-btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-bs-expanded="true" aria-bs-controls="collapseOne">
                                                    Breaking The Rules Using SQLite To Demo Web?
                                                </button>
                                            </h2>
                                        </div>
                                        <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample" style="">
                                            <div class="card-body">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div class="card-header" id="headingTwo">
                                            <h2 class="mb-0">
                                                <button class="faq-btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-bs-expanded="true" aria-bs-controls="collapseTwo">
                                                    Monthly Web Development Update Pragmatic Releasing?
                                                </button>
                                            </h2>
                                        </div>
                                        <div id="collapseTwo" class="collapse show" aria-labelledby="headingTwo" data-bs-parent="#accordionExample" style="">
                                            <div class="card-body">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div class="card-header" id="headingThree">
                                            <h2 class="mb-0">
                                                <button class="faq-btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-bs-expanded="false" aria-bs-controls="collapseThree">
                                                    How To Use Underlined Text To Improve User Experience
                                                </button>
                                            </h2>
                                        </div>
                                        <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample" style="">
                                            <div class="card-body">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div class="card-header" id="headingFour">
                                            <h2 class="mb-0">
                                                <button class="faq-btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-bs-expanded="false" aria-bs-controls="collapseFour">
                                                    Understanding CSS Layout And The Block Formatting
                                                </button>
                                            </h2>
                                        </div>
                                        <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                            <div class="card-body">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                            <div class="faq-wrap">
                                <div class="accordion" id="accordionExample1">
                                    <div class="card">
                                        <div class="card-header" id="headingfive">
                                            <h2 class="mb-0">
                                                <button class="faq-btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefive" aria-bs-expanded="false" aria-bs-controls="collapsefive">
                                                    Breaking The Rules Using SQLite To Demo Web?
                                                </button>
                                            </h2>
                                        </div>
                                        <div id="collapsefive" class="collapse" aria-labelledby="headingfive" data-bs-parent="#accordionExample1" style="">
                                            <div class="card-body">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div class="card-header" id="headingSix">
                                            <h2 class="mb-0">
                                                <button class="faq-btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-bs-expanded="true" aria-bs-controls="collapseSix">
                                                    Monthly Web Development Update Pragmatic Releasing?
                                                </button>
                                            </h2>
                                        </div>
                                        <div id="collapseSix" class="collapse show" aria-labelledby="headingSix" data-bs-parent="#accordionExample" style="">
                                            <div class="card-body">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div class="card-header" id="headingSeveen">
                                            <h2 class="mb-0">
                                                <button class="faq-btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeveen" aria-bs-expanded="false" aria-bs-controls="collapseSeveen">
                                                    How To Use Underlined Text To Improve User Experience
                                                </button>
                                            </h2>
                                        </div>
                                        <div id="collapseSeveen" class="collapse" aria-labelledby="headingSeveen" data-bs-parent="#accordionExample" style="">
                                            <div class="card-body">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div class="card-header" id="headingEighte">
                                            <h2 class="mb-0">
                                                <button class="faq-btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEighte" aria-bs-expanded="false" aria-bs-controls="collapseEighte">
                                                    Understanding CSS Layout And The Block Formatting
                                                </button>
                                            </h2>
                                        </div>
                                        <div id="collapseEighte" class="collapse" aria-labelledby="headingEighte" data-bs-parent="#accordionExample">
                                            <div class="card-body">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                      
                        
                    </div>
                </div>
            </section>
            <!-- team-area-end -->   
         
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
