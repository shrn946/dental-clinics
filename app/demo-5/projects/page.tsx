
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
                                    <h2>Gallery</h2>    
                                    <div class="breadcrumb-wrap">
                              
                                <nav aria-label="breadcrumb">
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item"><a href="index-2.html">Home</a></li>
                                        <li class="breadcrumb-item active" aria-current="page">Gallery </li>
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
             <!-- gallery-area -->
            <section id="work" class="pt-105 pb-95">
                <div class="container-fluid"> 
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="masonry-gallery-huge">
                        <div class="grid col2">

                            
                            <div class="grid-item hover-zoomin banking">
                                 <a class="popup-image" href="img/gallery/protfolio-img02.png">
                                        <figure class="gallery-image">
                                          <img src="img/gallery/protfolio-img02.png" alt="img" class="img">      
                                        </figure>
                                    </a>


                            </div>
                             <div class="grid-item hover-zoomin financial">
                               <a class="popup-image" href="img/gallery/protfolio-img03.png">
                                        <figure class="gallery-image">
                                          <img src="img/gallery/protfolio-img03.png" alt="img" class="img">      
                                        </figure>
                                    </a>

                            </div>
                            <div class="grid-item hover-zoomin financial">   
                                <a class="popup-image" href="img/gallery/protfolio-img01.png">
                                    <figure class="gallery-image">
                                      <img src="img/gallery/protfolio-img01.png" alt="img" class="img">   
                                    </figure>
                                </a>

                            </div>
                            <div class="grid-item hover-zoomin insurance">
                                   <a class="popup-image" href="img/gallery/protfolio-img06.png">
                                        <figure class="gallery-image">
                                          <img src="img/gallery/protfolio-img06.png" alt="img" class="img">  
                                        </figure>
                                    </a>
                            </div> 
                                <div class="grid-item hover-zoomin banking insurance">    
                                   <a class="popup-image" href="img/gallery/protfolio-img04.png">
                                        <figure class="gallery-image">
                                          <img src="img/gallery/protfolio-img04.png" alt="img" class="img">    
                                        </figure>
                                    </a>
                            </div>
                            <div class="grid-item hover-zoomin financial">
                            <a class="popup-image" href="img/gallery/protfolio-img05.png">
                                        <figure class="gallery-image">
                                          <img src="img/gallery/protfolio-img05.png" alt="img" class="img">      
                                        </figure>
                                    </a>

                            </div>
                            
                                       
                            </div>
                    </div>
                        
                        </div>
                    
                    </div>
					
                </div>
            </section>
             <!-- gallery-area-end -->

         
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
