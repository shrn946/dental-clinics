'use client';
import React from 'react';

export default function About() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `<!--Start Welcome Area-->
<section class="welcome-area">
    <div class="container">
        <div class="row">
           
            <div class="col-xl-7">
                <div class="welcome-image-box">
                    <img src="/eye-1/assets/images/resources/welcome-1.jpg" alt="Awesome Image">
                    <div class="experience-box">
                        <h2>20</h2>
                        <h3>Years of<br> practicing</h3>    
                    </div>
                    <div class="image2">
                        <img src="/eye-1/assets/images/resources/welcome-2.jpg" alt="Awesome Image">
                    </div>
                </div>    
            </div>
            
            <div class="col-xl-5">
                <div class="welcome-content-box">
                    <div class="sec-title">
                        <h2><span>Introducing</span> the quality<br> optometrist clinic</h2>
                    </div>
                    <div class="inner-content">
                        <div class="text">
                            <p>Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua lonm andhn.</p>
                        </div>
                        <ul>
                            <li>Nsectetur cing elit.</li>
                            <li>Suspe ndisse suscipit sagittis leo.</li>
                            <li>Entum estibulum dignissim posuere.</li>
                        </ul>
                        <div class="bottom-box">
                            <div class="left pull-left">
                                <div class="text2">
                                    <p>Have any question?</p>
                                    <a href="#">Book an appointment</a>
                                </div>
                                <div class="author-info-box1">
                                    <div class="image-box">
                                        <div class="inner">
                                            <img src="/eye-1/assets/images/resources/author-1.png" alt="Awesome Image">
                                        </div>
                                    </div>
                                    <div class="signature-box">
                                        <img src="/eye-1/assets/images/resources/signature.png" alt="Signature">
                                    </div>    
                                </div>
                            </div> 
                            <div class="right pull-right">
                                <div class="patients-box text-center">
                                    <i class="icon-vision"></i>
                                    <h2><span class="timer" data-from="1" data-to="8700" data-speed="5000" data-refresh-interval="50">8700</span></h2>
                                    <p>Patients</p>
                                </div>    
                            </div>   
                        </div>
                    </div>    
                </div>    
            </div>
            
        </div>
    </div>
</section>
<!--End Welcome Area-->` }} />
  );
}
