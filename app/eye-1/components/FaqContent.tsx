'use client';
import React from 'react';

export default function FaqContent() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `<!--Start Faq Content Area-->
<section class="faq-content-area">
    <div class="layer-outer">
        <div class="left-box" style="background-image: url('/eye-1/assets/images/parallax-background/faq-left-box.jpg')"></div>
        <div class="right-box" style="background-image: url('/eye-1/assets/images/parallax-background/faq-right-box.jpg')"></div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-xl-6">
                <div class="faq-title-box">
                    <div class="sec-title">
                        <h2 class="clrwhite"><span>Frequently</span> asked<br> questions</h2>
                    </div>
                    <div class="text">
                        <p>There are many variations of passages of orem Ipsum available but the majority have alteration.</p>
                    </div>
                    <ul>
                        <li>
                            <span class="icon-vision-2"></span>
                            <h4>Eye Vision</h4>
                        </li>
                        <li>
                            <span class="icon-eye-2"></span>
                            <h4>New Lense</h4>
                        </li>
                    </ul>    
                </div>    
            </div>
            <div class="col-xl-6">
                <div class="faq-content-box">
                    <div class="accordion-box">
                        <!--Start single accordion box-->
                        <div class="accordion accordion-block">
                            <div class="accord-btn active"><h4>A good test could save your eye vision</h4></div>
                            <div class="accord-content collapsed">
                                <p>Suspendisse finibus urna mauris, lorem ipsum is simply free text vitae consequat quam vel. Vestibulum leo ligula, available to the market for the new stuff vitae commodo nisl.</p>
                            </div>
                        </div>
                        <!--End single accordion box-->
                        <!--Start single accordion box-->
                        <div class="accordion accordion-block">
                            <div class="accord-btn"><h4>Service thatÃ¢â‚¬â„¢ll make you see us with your eyes</h4></div>
                            <div class="accord-content">
                                <p>Suspendisse finibus urna mauris, lorem ipsum is simply free text vitae consequat quam vel. Vestibulum leo ligula, available to the market for the new stuff vitae commodo nisl.</p>
                            </div>
                        </div>
                        <!--End single accordion box-->
                        <!--Start single accordion box-->
                        <div class="accordion accordion-block bordernone">
                            <div class="accord-btn"><h4>WeÃ¢â‚¬â„¢re ready to protect your vision</h4></div>
                            <div class="accord-content">
                                <p>Suspendisse finibus urna mauris, lorem ipsum is simply free text vitae consequat quam vel. Vestibulum leo ligula, available to the market for the new stuff vitae commodo nisl.</p>
                            </div>
                        </div>
                        <!--End single accordion box-->
                        
                       
                    </div> 
                </div>    
            </div>
            
            
            
        </div>
    </div>
</section>
<!--End Faq Content Area-->` }} />
  );
}
