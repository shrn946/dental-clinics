'use client';
import { usePathname } from 'next/navigation';
import HtmlToNext from './HtmlToNext';

export default function Header() {
  const pathname = usePathname();
  let html = `<header class="header-area header-three">  
           <div class="header-top second-header d-none d-md-block">`;
           
  if (pathname !== '/demo-5' && !pathname.match(/^\/demo-5\/home/)) {
    html = html.replace('header-area header-three', 'header-area header');
  }
  
  html += `
                <div class="container">
                    <div class="row align-items-center">      
                        <div class="col-lg-8 col-md-8 d-none d-lg-block">
                             <div class="header-cta">
                               <ul>                                   
                                    <li>
                                        <i class="icon fal fa-envelope"></i>
                                        <span>info@example.com</span>
                                    </li>
                                    <li>
                                        <i class="icon fal fa-phone"></i>
                                        <span>+91-7052-101-786</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 d-none d-lg-block text-right">
                           <div class="header-social">
                                <span>
                                    <a href="#" title="Facebook"><i class="fab fa-facebook-f"></i></a>
                                    <a href="#" title="LinkedIn"><i class="fab fa-instagram"></i></a>               
                                    <a href="#" title="Twitter"><i class="fab fa-twitter"></i></a>
                                    <a href="#" title="Twitter"><i class="fab fa-youtube"></i></a>
                                   </span>                    
                                   <!--  /social media icon redux -->                               
                            </div>
                        </div>
                         
                        
                    </div>
                </div>
            </div>		
			  <div id="header-sticky" class="menu-area">
                <div class="container">
                    <div class="second-menu">
                        <div class="row align-items-center">
                            <div class="col-xl-2 col-lg-2">
                                <div class="logo">
                                    <a href="index-2.html" style="text-decoration: none;">
                                        <h2 style="font-weight: 800; font-family: var(--font-outfit, sans-serif); color: #104cba; margin: 0; font-size: 32px; letter-spacing: -1px;">PrimeCare<span style="color: #00bcd4;">.</span></h2>
                                    </a>
                                </div>
                            </div>
                           <div class="col-xl-7 col-lg-7">
                              
                                <div class="main-menu text-right text-xl-right">
                                    <nav id="mobile-menu">
                                          <ul>
                                            <li class="has-sub">
                                                <a href="index-2.html">Home</a>
                                                <ul>													
													<li><a href="index-2.html">Home Page 01</a></li>
													<li><a href="index-3.html">Home Page 02</a></li>													
													<li><a href="index-4.html">Home Page 03</a></li>													
												</ul>
                                            </li>
                                            <li><a href="about.html">About Us</a></li>        
                                            
                                              <li class="has-sub">
                                                <a href="services.html">Services</a>
                                                <ul>													
													<li><a href="single-service.html"> Root Canal</a></li>
                                                    <li><a href="single-service.html">Alignment Teeth</a></li>
                                                    <li><a href="single-service.html"> Cosmetic Teeth</a></li>
                                                    <li><a href="single-service.html">Oral Hygiene</a></li>
                                                    <li><a href="single-service.html">Live Advisory</a></li>
                                                    <li><a href="single-service.html">Cavity Inspection</a></li>
                                                    <li><a href="services.html">Services</a></li>
												</ul>
                                            </li>  
                                              <li class="has-sub"><a href="#">Pages</a>
												<ul>
                                                    <li><a href="projects.html">Gallery</a></li>
                                                    
                                                    <li><a href="pricing.html">Pricing</a></li>
                                                    <li><a href="faq.html">Faq</a></li>
                                                    <li><a href="team.html">Team</a></li>
                                                    <li><a href="team-single.html">Team Details</a></li>
                                                    <li><a href="shop.html">Shop</a></li>
													<li><a href="shop-details.html">Shop Details</a>
                                                  </li></ul>
											</li>
                                            <li class="has-sub"> 
                                                <a href="blog.html">Blog</a>
                                                <ul>
                                                    <li><a href="blog.html">Blog</a></li>
                                                    <li><a href="blog-details.html">Blog Details</a></li>
                                                </ul>
                                            </li>


                                            <li><a href="contact.html">Contact</a></li>                                               
                                        </ul>
                                    </nav>
                                </div>
                            </div>   
                             <div class="col-xl-3 col-lg-3 text-right d-none d-lg-block mt-25 mb-25 text-right text-xl-right">
                                <div class="login">
                                    <ul>
                                        <li>
                                            <div class="second-header-btn">
                                               <a href="contact.html" class="btn">Book Appointment</a>
                                            </div>
                                        </li>
                                    </ul>
                                
                                </div>
                               
                            </div>
                            
                                <div class="col-12">
                                    <div class="mobile-menu"></div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>`;
  return <HtmlToNext html={html} />;
}
