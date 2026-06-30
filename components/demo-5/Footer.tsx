
import HtmlToNext from './HtmlToNext';

export default function Footer() {
  const html = `<footer class="footer-bg footer-p pt-90" style="background: #00173c;">
            <div class="footer-top pb-70">
                <div class="container">
                    <div class="row justify-content-between">
                        
                        <div class="col-xl-4 col-lg-4 col-sm-6">
                            <div class="footer-widget mb-30">
                                <div class="f-widget-title">
                                    <h2 style="font-weight: 800; font-family: var(--font-outfit, sans-serif); color: #ffffff; margin: 0; font-size: 32px; letter-spacing: -1px;">PrimeCare<span style="color: #00bcd4;">.</span></h2>
                                </div>
                                <div class="footer-link">
                                    <p>Mauris non nisi semper, lacinia neque in, dapibus leo. Curabitur sagittis libero tincidunt tempor finibus. Mauris at dignissim ligula, nec tristique orci.Quisque vitae metus.</p>
                                   <div class="f-contact">
                                    <ul>
                                        <li>
                                            <i class="icon fal fa-clock"></i>
                                            <span>Monday - Saturday:<br>9:00am - 10:00Pm</span>
                                        </li>
                                    </ul>
                                    
                                </div>
                                   
                                    
                                </div>
                            </div>
                        </div>
						
                        <div class="col-xl-2 col-lg-2 col-sm-6">
                            <div class="footer-widget mb-30">
                                <div class="f-widget-title">
                                    <h2>Other Links</h2>
                                </div>
                                <div class="footer-link">
                                    <ul>
                                        <li><a href="index-2.html"> Home</a></li>
                                        <li><a href="about.html">About Us</a></li>
                                        <li><a href="services.html">Services</a></li>
                                        <li><a href="projects.html"> Project</a></li>
                                        <li><a href="team.html">Our Team</a></li>
                                        <li><a href="blog.html">Latest Blog</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>  
                        <div class="col-xl-2 col-lg-2 col-sm-6">
                            <div class="footer-widget mb-30">
                                <div class="f-widget-title">
                                    <h2>Our Services</h2>
                                </div>
                                <div class="footer-link">
                                    <ul>                                        
                                        <li><a href="#"> Root Canal</a></li>
										<li><a href="#">Alignment Teeth</a></li>
                                        <li><a href="#"> Cosmetic Teeth</a></li>
                                        <li><a href="#">Oral Hygiene</a></li>
                                        <li><a href="#">Live Advisory</a></li>
                                        <li><a href="#">Cavity Inspection</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-3 col-sm-6">
                            <div class="footer-widget mb-30">
                                <div class="f-widget-title">
                                    <h2>Contact Us</h2>
                                </div>
                                <div class="f-contact">
                                    <ul>
                                        <li>
                                            <i class="icon fal fa-map-marker-check"></i>
                                            <span>1247/Plot No. 39, 15th Phase,<br> LHB Colony, Kanpur</span>
                                        </li>
                                        <li>
                                            <i class="icon fal fa-phone"></i>
                                            <span>1800-121-3637<br>+91-7052-101-786</span>
                                        </li>
                                       <li><i class="icon fal fa-envelope"></i>
                                            <span>
                                                <a href="mailto:info@example.com">info@example.com</a>
                                           <br>
                                           <a href="mailto:help@example.com">help@example.com</a>
                                           </span>
                                        </li>
                                        
                                    </ul>
                                    
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div class="copyright-wrap">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-4">
                          <div class="copy-text">
                                 Copyright © 2022 decare. All rights reserved.       
                            </div>
                        </div>
                        <div class="col-lg-4">          
                            
                                
                        </div>
                        <div class="col-lg-4">
                            <div class="footer-social">                                    
                                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                                    <a href="#"><i class="fab fa-instagram"></i></a>
                                    <a href="#"><i class="fab fa-twitter"></i></a>
                                </div>    
                        </div>
                    </div>
                </div>
            </div>
        </footer>`;
  return <HtmlToNext html={html} />;
}
