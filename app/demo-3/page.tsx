import Link from 'next/link';
import Image from 'next/image';
import { Star, Plus, Check, Phone, Mail, MapPin, Clock, ArrowRight, Search, Play } from 'lucide-react';

export default function Page() {
  return (
    <>


    {/* Hero Section Start */}
    <div className="hero-prime bg-section dark-section dark-section-prime">
        <div className="container">
            <div className="row">
                <div className="col-lg-7">
                    {/* Hero Content Start */}
                    <div className="hero-content-prime">
                        {/* Hero Sub Heading Start */}
                        <div className="hero-sub-heading-prime wow fadeInUp">
                            {/* Satisfy Client Images Start */}
                            <div className="satisfy-client-images-prime">
                                <div className="satisfy-client-image-prime">
                                    <figure className="image-anime">
                                        <img src="/demo-3/images/author-1.jpg" alt="" />
                                    </figure>
                                </div>
                                <div className="satisfy-client-image-prime">
                                    <figure className="image-anime">
                                        <img src="/demo-3/images/author-2.jpg" alt="" />
                                    </figure>
                                </div>
                                <div className="satisfy-client-image-prime">
                                    <figure className="image-anime">
                                        <img src="/demo-3/images/author-3.jpg" alt="" />
                                    </figure>
                                </div>
                                <div className="satisfy-client-image-prime">
                                    <figure className="image-anime">
                                        <img src="/demo-3/images/author-4.jpg" alt="" />
                                    </figure>
                                </div>
                            </div>
                            {/* Satisfy Client Images End */}

                            {/* Satisfy Client Content Start */}
                            <div className="satisfy-client-content-prime">
                                <p>15k Satisficed Patients</p>
                            </div>
                            {/* Satisfy Client Content End */}
                        </div>
                        {/* Hero Sub Heading Start */}
                        
                        {/* Section Title Start */}
                        <div className="section-title">
                            <h1 className="text-anime-style-3" data-cursor="-opaque">Healthy teeth happy life start here</h1>
                            <p className="wow fadeInUp" data-wow-delay="0.2s">Experience gentle, advanced, and affordable dental care designed to keep your smile bright and your life healthier.</p>
                        </div>
                        {/* Section Title End */}

                        {/* Hero Content Body Start */}
                        <div className="hero-content-body-prime wow fadeInUp" data-wow-delay="0.4s">
                            {/* Hero Button Start */}
                            <div className="hero-btn-prime">
                                <a href="/demo-3/contact" className="btn-default-prime btn-highlighted-prime"><span>Get Started Today</span></a>
                            </div>
                            {/* Hero Button End */}

                            {/* Hero Worldwide Client Box Prime Start */}
                            <div className="hero-worldwide-client-box-prime">
                                {/* Satisfy Client Images Start */}
                                <div className="satisfy-client-images-prime">
                                    <div className="satisfy-client-image-prime">
                                        <figure className="image-anime">
                                            <img src="/demo-3/images/author-1.jpg" alt="" />
                                        </figure>
                                    </div>
                                    <div className="satisfy-client-image-prime">
                                        <figure className="image-anime">
                                            <img src="/demo-3/images/author-2.jpg" alt="" />
                                        </figure>
                                    </div>
                                    <div className="satisfy-client-image-prime">
                                        <figure className="image-anime">
                                            <img src="/demo-3/images/author-3.jpg" alt="" />
                                        </figure>
                                    </div>
                                </div>
                                {/* Satisfy Client Images End */}

                                {/* Satisfy Client Content Start */}
                                <div className="satisfy-client-content-prime">
                                    <p>Our <span className="counter">5</span>k+ Patient Worldwide</p>
                                </div>
                                {/* Satisfy Client Content End */}
                            </div>    
                            {/* Hero Worldwide Client Box Prime End */}                        
                        </div>
                        {/* Hero Content Body End */}                       
                    </div>
                    {/* Hero Content End */}
                </div>

                <div className="col-lg-5">
                    {/* Hero image Start */}
                    <div className="hero-image-prime">
                        <figure>
                            <img src="/demo-3/images/hero-image-prime.png" alt="" />
                        </figure>
                    </div>
                    {/* Hero image End */}
                </div>
            </div>
        </div>
    </div>
    {/* Hero Section End */}

    {/* Hero Info List Box Start */}
    <div className="hero-info-list-box-prime bg-section">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12">
                    {/* Hero Info List Start */}
                    <div className="hero-info-item-list-prime">
                        {/* Hero Info Item Start */}
                        <div className="hero-info-item-prime box-1 wow fadeInUp">
                            {/* Hero Info Image Start */}
                            <div className="hero-info-image-prime">
                                <figure className="image-anime">
                                    <img src="/demo-3/images/hero-info-item-prime-image-1.jpg" alt="" />
                                </figure>
                            </div>
                            {/* Hero Info Image End */}
                        </div>
                        {/* Hero Info Item End */}

                        {/* Hero Info Image Item Start */}
                        <div className="hero-info-item-prime box-2 wow fadeInUp" data-wow-delay="0.2s">
                            <div className="icon-box">
                                <img src="/demo-3/images/icon-hero-info-item-prime-1.svg" alt="" />
                            </div>
                            <div className="hero-info-item-contact-prime">
                                <h3>Emergency Appointments Available</h3>
                                <ul>
                                    <li><img src="/demo-3/images/icon-phone-white.svg" alt="" /><a href="tel:123456789">+00-123-456-789</a></li>
                                    <li><img src="/demo-3/images/icon-mail-white.svg" alt="" /><a href="mailto:support@domain.com">support@domain.com</a></li>
                                </ul>
                            </div>
                        </div>
                        {/* Hero Info Image Item End */}

                        {/* Working Hours Item Start */}
                        <div className="hero-info-item-prime box-3 wow fadeInUp" data-wow-delay="0.4s">
                            {/* Hero Info Image Start */}
                            <div className="hero-info-image-prime">
                                <figure className="image-anime">
                                    <img src="/demo-3/images/hero-info-item-prime-image-2.jpg" alt="" />
                                </figure>
                            </div>
                            {/* Hero Info Image End */}
                            {/* Working Hours Header Start */}
                            <div className="working-hours-box-prime">
                                <ul>
                                    <li>Monday to Saturday: <span>9AM to 9PM</span></li>
                                    <li>Sunday: <span>Closed</span></li>
                                </ul>
                            </div>
                            {/* Working Hours Header End */}
                        </div>
                        {/* Working Hours Item End */}

                        {/* Hero Info Video Image Start */}
                        <div className="hero-info-item-prime box-4 wow fadeInUp" data-wow-delay="0.6s">
                            <div className="hero-info-rating-box-prime">
                                <div className="hero-info-rating-prime">
                                    <p>Rating</p>
                                    <div className="hero-info-rating-star-prime">
                                        <Star />
                                        <Star />
                                        <Star />
                                        <Star />
                                        <Star />
                                    </div>
                                </div>
                                <div className="icon-box">
                                    <img src="/demo-3/images/icon-hero-info-item-prime-2.svg" alt="" />
                                </div>
                            </div>
                            {/* Hero Worldwide Client Box Prime Start */}
                            <div className="hero-worldwide-client-box-prime">
                                {/* Satisfy Client Content Start */}
                                <div className="satisfy-client-content-prime">
                                    <p>We comprehensive dental care for patients of all smiles.</p>
                                </div>
                                {/* Satisfy Client Content End */}

                                {/* Satisfy Client Images Start */}
                                <div className="satisfy-client-images-prime">
                                    <div className="satisfy-client-image-prime">
                                        <figure className="image-anime">
                                            <img src="/demo-3/images/author-1.jpg" alt="" />
                                        </figure>
                                    </div>
                                    <div className="satisfy-client-image-prime">
                                        <figure className="image-anime">
                                            <img src="/demo-3/images/author-2.jpg" alt="" />
                                        </figure>
                                    </div>
                                    <div className="satisfy-client-image-prime">
                                        <figure className="image-anime">
                                            <img src="/demo-3/images/author-3.jpg" alt="" />
                                        </figure>
                                    </div>
                                </div>
                                {/* Satisfy Client Images End */}                                
                            </div>    
                            {/* Hero Worldwide Client Box Prime End */}
                        </div>
                        {/* Hero Info Video Image End */}
                    </div>
                    {/* Hero Info List End */}
                </div>
            </div>
        </div>
    </div>    
    {/* Hero Info List Box End */}
    
    {/* About Us Section Start */}
    <div className="about-us-prime">
        <div className="container">
            <div className="row section-row">
                <div className="col-lg-12">
                    {/* Section Title Start */}
                    <div className="section-title section-title-center">
                        <h3 className="wow fadeInUp">About Us</h3>
                        <h2 className="wow fadeInUp" data-wow-delay="0.2s" data-cursor="-opaque">Dedicated to creating healthier <img src="/demo-3/images/about-us-title-img-1.jpg" alt="" /> smiles compassionate <img src="/demo-3/images/about-us-title-img-2.jpg" alt="" /> care advanced technology a patient-first approach always</h2>
                    </div>
                    {/* Section Title End */}
                </div>
            </div>

            <div className="row align-items-center">
                <div className="col-lg-12">
                    {/* About Us Items List Start */}
                    <div className="about-us-items-list-prime">
                        {/* About Us Item Prime Start */}
                        <div className="about-us-item-prime box-1 wow fadeInUp">
                            <div className="about-us-item-image-prime">
                                <figure>
                                    <img src="/demo-3/images/about-us-item-image-prime.jpg" alt="" />
                                </figure>
                            </div>

                            <div className="about-us-item-image-title-prime">
                                <h3>Why Families Count On Us For Dentistry</h3>
                            </div>
                            <div className="about-us-item-image-list">
                                <ul>
                                    <li>Trusted Experts</li>
                                    <li>Gentle Care</li>
                                </ul>
                            </div>
                        </div>
                        {/* About Us Item Prime End */}

                        {/* About Us Item Prime Start */}
                        <div className="about-us-item-prime box-2 wow fadeInUp" data-wow-delay="0.2s">
                            <h2><span>500</span>+</h2>
                            <p>Trusted by over 500 patients who left with healthier teeth, brighter smiles, and lasting confidence.</p>
                        </div>
                        {/* About Us Item Prime End */}

                        {/* About Us Item Prime Start */}
                        <div className="about-us-item-prime box-3 wow fadeInUp" data-wow-delay="0.4s">
                            <div className="about-us-item-content-prime">
                                <h3>Personalized Dental Solutions</h3>
                            </div>
                            <div className="about-us-item-dr-image-prime">
                                <img src="/demo-3/images/about-us-item-dr-image-prime.png" alt="" />
                            </div>
                        </div>
                        {/* About Us Item Prime End */}
                    </div>
                    {/* About Us Items List End */}
                </div>

                <div className="col-lg-12">
                    {/* Section Footer Text Start */}
                    <div className="section-footer-text wow fadeInUp" data-wow-delay="0.8s">
                        <p>Join us and create smiles that truly inspire confidence. <a href="/demo-3/contact">Contact Us</a></p>                            
                        <ul>
                            <li><img src="/demo-3/images/icon-google.svg" alt="" /></li>
                            <li><span className="counter">4.9</span>/5</li>
                            <li>
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                            </li>
                            <li>520 reviews</li>
                        </ul>
                    </div>
                    {/* Section Footer Text End */}
                </div>
            </div>
        </div>
    </div>
    {/* About Us Section End */}

    {/* Our Services Section Start */}
    <div className="our-services-prime bg-section">
        <div className="container">
            <div className="row section-row">
                <div className="col-lg-12">
                    {/* Section Title Start */}
                    <div className="section-title section-title-center">
                        <h3 className="wow fadeInUp">Our services</h3>
                        <h2 className="text-anime-style-3" data-cursor="-opaque">Comprehensive dental services for every family smile</h2>
                    </div>
                    {/* Section Title End */}
                </div>
            </div>

            <div className="row">
                <div className="col-xl-3 col-md-6">
                    {/* Service Item Start */}
                    <div className="service-item-prime box-bg-shape-prime wow fadeInUp">
                        {/* Service Content Start */}
                        <div className="service-item-content-prime">
                            <p>General</p>
                            <h3><a href="/demo-3/services/details">Comprehensive Dental Checkups</a></h3>
                        </div>
                        {/* Service Content End */}

                        {/* Icon-Box Start */}
                        <div className="icon-box">
                            <img src="/demo-3/images/icon-service-item-prime-1.svg" alt="" />
                        </div>
                        {/* Icon-Box End */}
                        
                        {/* Box Readmore Button Start */}
                        <div className="box-readmore-btn-prime">
                            <a href="/demo-3/services/details"><img src="/demo-3/images/arrow-white.svg" alt="" /></a>
                        </div>
                        {/* Box Readmore Button End */}
                    </div>
                    {/* Service Item End */}
                </div>
                
                <div className="col-xl-3 col-md-6">
                    {/* Service Item Start */}
                    <div className="service-item-prime box-bg-shape-prime wow fadeInUp" data-wow-delay="0.2s">
                        {/* Service Content Start */}
                        <div className="service-item-content-prime">
                            <p>Orthodontics</p>
                            <h3><a href="/demo-3/services/details">Orthodontic Braces & Aligners</a></h3>
                        </div>
                        {/* Service Content End */}

                        {/* Icon-Box Start */}
                        <div className="icon-box">
                            <img src="/demo-3/images/icon-service-item-prime-2.svg" alt="" />
                        </div>
                        {/* Icon-Box End */}
                        
                        {/* Box Readmore Button Start */}
                        <div className="box-readmore-btn-prime">
                            <a href="/demo-3/services/details"><img src="/demo-3/images/arrow-white.svg" alt="" /></a>
                        </div>
                        {/* Box Readmore Button End */}
                    </div>
                    {/* Service Item End */}
                </div>

                <div className="col-xl-3 col-md-6">
                    {/* Service Item Start */}
                    <div className="service-item-prime box-bg-shape-prime wow fadeInUp" data-wow-delay="0.4s">
                        {/* Service Content Start */}
                        <div className="service-item-content-prime">
                            <p>Surgery</p>
                            <h3><a href="/demo-3/services/details">Custom Crowns & Bridges</a></h3>
                        </div>
                        {/* Service Content End */}

                        {/* Icon-Box Start */}
                        <div className="icon-box">
                            <img src="/demo-3/images/icon-service-item-prime-3.svg" alt="" />
                        </div>
                        {/* Icon-Box End */}
                        
                        {/* Box Readmore Button Start */}
                        <div className="box-readmore-btn-prime">
                            <a href="/demo-3/services/details"><img src="/demo-3/images/arrow-white.svg" alt="" /></a>
                        </div>
                        {/* Box Readmore Button End */}
                    </div>
                    {/* Service Item End */}
                </div>

                <div className="col-xl-3 col-md-6">
                    {/* Service Item Start */}
                    <div className="service-item-prime box-bg-shape-prime wow fadeInUp" data-wow-delay="0.6s">
                        {/* Service Content Start */}
                        <div className="service-item-content-prime">
                            <p>Emergency</p>
                            <h3><a href="/demo-3/services/details">Emergency Dental Services</a></h3>
                        </div>
                        {/* Service Content End */}

                        {/* Icon-Box Start */}
                        <div className="icon-box">
                            <img src="/demo-3/images/icon-service-item-prime-4.svg" alt="" />
                        </div>
                        {/* Icon-Box End */}
                        
                        {/* Box Readmore Button Start */}
                        <div className="box-readmore-btn-prime">
                            <a href="/demo-3/services/details"><img src="/demo-3/images/arrow-white.svg" alt="" /></a>
                        </div>
                        {/* Box Readmore Button End */}
                    </div>
                    {/* Service Item End */}
                </div>

                <div className="col-lg-12">
                    {/* Section Footer Text Start */}
                    <div className="section-footer-text wow fadeInUp" data-wow-delay="0.8s">
                        <p>Join us and create smiles that truly inspire confidence. <a href="/demo-3/contact">Contact Us</a></p>                            
                        <ul>
                            <li><span className="counter">4.9</span>/5</li>
                            <li>
                                <Star />
                            </li>
                            <li>Our 4k Patient Review</li>
                        </ul>
                    </div>
                    {/* Section Footer Text End */}
                </div>
            </div>
        </div>
    </div>
    {/* Our Services Section End */}

    {/* Why Choose Us Section Start */}
    <div className="why-choose-us-prime">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-xl-6">
                    {/* Why Choose Images Box Start */}
                    <div className="why-choose-images-box-prime wow fadeInUp">
                        {/* Why Choose Image Box Start */}
                        <div className="why-choose-image-box-1-prime">
                            {/* Why Choose Image Start */}
                            <div className="why-choose-image-prime">
                                <figure className="image-anime">
                                    <img src="/demo-3/images/why-choose-image-prime.jpg" alt="" />
                                </figure>
                            </div>
                            {/* Why Choose Image End */}

                            {/* Year Exerience Circle Start */}
                            <div className="year-experience-circle-prime">
                                <img src="/demo-3/images/year-experience-circle.svg" alt="" />
                            </div>
                            {/* Year Exerience Circle End */}
                        </div>
                        {/* Why Choose Image Box End */}

                        {/* Why Choose Image Box Start */}
                        <div className="why-choose-image-box-2-prime">
                            {/* Happy Client Box Start */}
                            <div className="happy-client-box-prime">
                                {/* Happy Client Box Header Start */}
                                <div className="happy-client-box-header-prime">
                                    {/* Satisfy Client Images Start */}
                                    <div className="satisfy-client-images-prime">
                                        <div className="satisfy-client-image-prime">
                                            <figure className="image-anime">
                                                <img src="/demo-3/images/author-1.jpg" alt="" />
                                            </figure>
                                        </div>
                                        <div className="satisfy-client-image-prime">
                                            <figure className="image-anime">
                                                <img src="/demo-3/images/author-2.jpg" alt="" />
                                            </figure>
                                        </div>
                                        <div className="satisfy-client-image-prime">
                                            <figure className="image-anime">
                                                <img src="/demo-3/images/author-3.jpg" alt="" />
                                            </figure>
                                        </div>
                                        <div className="satisfy-client-image-prime add-more">
                                            <Plus />
                                        </div>
                                    </div>
                                    {/* Satisfy Client Images End */} 

                                    {/* Happy Client Box Counter Start */}
                                    <div className="happy-client-box-counter-prime">
                                        <h2><span>98</span>%</h2>
                                    </div>
                                    {/* Happy Client Box Counter End */}
                                </div>
                                {/* Happy Client Box Header End */}

                                {/* Happy Client Box Content Start */}
                                <div className="happy-client-box-content-prime">
                                    <p>Trusted by our happy patient care</p>
                                </div>
                                {/* Happy Client Box Content End */}
                            </div>
                            {/* Happy Client Box End */}

                            {/* Discount Box Start */}
                            <div className="discount-box-prime">
                                <div className="discount-box-content-prime">
                                    <h2><span>25</span>%</h2>
                                    <p>Bigger Discounts, Brighter Smiles - 25% Off Now!</p>
                                </div>
                                <div className="discount-box-image-prime">
                                    <img src="/demo-3/images/discount-box-image-prime.png" alt="" />
                                </div>
                            </div>
                            {/* Discount Box End */}
                        </div>
                        {/* Why Choose Image Box End */}
                    </div>
                    {/* Why Choose Images Box End */}
                </div>

                <div className="col-xl-6">
                    {/* Why Choose Content Start */}
                    <div className="why-choose-content-prime">
                        {/* Section Title Start */}
                        <div className="section-title">
                            <h3 className="wow fadeInUp">Why choose us ?</h3>
                            <h2 className="text-anime-style-3" data-cursor="-opaque">Your trusted dental partner for every family member</h2>
                            <p className="wow fadeInUp" data-wow-delay="0.2s">We provide comprehensive dental care for patients of all ages, ensuring healthy, confident smiles for every member of your family.</p>
                        </div>
                        {/* Section Title End */}

                        {/* Why Choose Item List Start */}
                        <div className="why-choose-item-list-prime wow fadeInUp" data-wow-delay="0.4s">
                            {/* Why Choose Item Start */}
                            <div className="why-choose-item-prime">
                                <div className="icon-box">
                                    <img src="/demo-3/images/icon-why-choose-1.svg" alt="" />
                                </div>
                                <div className="why-choose-item-content-prime">
                                    <p>Friendly Environment</p>
                                </div>
                            </div>
                            {/* Why Choose Item End */}

                            {/* Why Choose Item Start */}
                            <div className="why-choose-item-prime">
                                <div className="icon-box">
                                    <img src="/demo-3/images/icon-why-choose-2.svg" alt="" />
                                </div>
                                <div className="why-choose-item-content-prime">
                                    <p>Experienced Dental</p>
                                </div>
                            </div>
                            {/* Why Choose Item End */}

                            {/* Why Choose Item Start */}
                            <div className="why-choose-item-prime">
                                <div className="icon-box">
                                    <img src="/demo-3/images/icon-why-choose-3.svg" alt="" />
                                </div>
                                <div className="why-choose-item-content-prime">
                                    <p>Personalized Patient care</p>
                                </div>
                            </div>
                            {/* Why Choose Item End */}

                            {/* Why Choose Item Start */}
                            <div className="why-choose-item-prime">
                                <div className="icon-box">
                                    <img src="/demo-3/images/icon-why-choose-4.svg" alt="" />
                                </div>
                                <div className="why-choose-item-content-prime">
                                    <p>Pain-Free Dentistry</p>
                                </div>
                            </div>
                            {/* Why Choose Item End */}
                        </div>
                        {/* Why Choose Item List End */}

                        {/* Why Choose Footer Start */}
                        <div className="why-choose-footer-prime wow fadeInUp" data-wow-delay="0.6s">
                            <div className="why-choose-btn-prime">
                                <a href="#" className="btn-default-prime"><span>Book an Appointment</span></a>
                            </div>
                            <div className="why-choose-dr-sign-prime">
                                <img src="/demo-3/images/why-choose-dr-sign-prime.svg" alt="" />
                            </div>
                        </div>
                        {/* Why Choose Footer End */}    
                    </div>
                    {/* Why Choose Content End */}
                </div>
            </div>
        </div>
    </div>
    {/* Why Choose Us Section End */}

    {/* How It Work Section Start */}
    <div className="how-it-work-prime bg-section dark-section dark-section-prime">
        <div className="container">
            <div className="row section-row">
                <div className="col-lg-12">
                    {/* Section Title Start */}
                    <div className="section-title section-title-center">
                        <h3 className="wow fadeInUp">How It Work</h3>
                        <h2 className="text-anime-style-3" data-cursor="-opaque">Step-by-step care for healthy, confident smiles</h2>
                    </div>
                    {/* Section Title End */}
                </div>
            </div>

            <div className="row">
                <div className="col-xl-3 col-md-6">
                    {/* How It Work Item Start */}
                    <div className="how-it-work-prime-item wow fadeInUp">
                        <div className="how-it-work-header-prime">
                            <p>step 01</p>
                            <h3>Book Appointment</h3>
                        </div>
                        <div className="how-it-work-prime-content">
                            <p>Schedule your visit online or by phone at your convenience.</p>
                        </div>
                    </div>
                    {/* How It Work Item End */}
                </div>

                <div className="col-xl-3 col-md-6">
                    {/* How It Work Item Start */}
                    <div className="how-it-work-prime-item wow fadeInUp" data-wow-delay="0.2s">
                        <div className="how-it-work-header-prime">
                            <p>step 02</p>
                            <h3>Consultation & Checkup</h3>
                        </div>
                        <div className="how-it-work-prime-content">
                            <p>Schedule your visit online or by phone at your convenience.</p>
                        </div>
                    </div>
                    {/* How It Work Item End */}
                </div>

                <div className="col-xl-3 col-md-6">
                    {/* How It Work Item Start */}
                    <div className="how-it-work-prime-item wow fadeInUp" data-wow-delay="0.4s">
                        <div className="how-it-work-header-prime">
                            <p>step 03</p>
                            <h3>Personal Treatment Plan</h3>
                        </div>
                        <div className="how-it-work-prime-content">
                            <p>Schedule your visit online or by phone at your convenience.</p>
                        </div>
                    </div>
                    {/* How It Work Item End */}
                </div>

                <div className="col-xl-3 col-md-6">
                    {/* How It Work Item Start */}
                    <div className="how-it-work-prime-item wow fadeInUp" data-wow-delay="0.6s">
                        <div className="how-it-work-header-prime">
                            <p>step 04</p>
                            <h3>Enjoy a Bright Smile</h3>
                        </div>
                        <div className="how-it-work-prime-content">
                            <p>Schedule your visit online or by phone at your convenience.</p>
                        </div>
                    </div>
                    {/* How It Work Item End */}
                </div>

                <div className="col-lg-12">
                    {/* Section Footer Text Start */}
                    <div className="section-footer-text wow fadeInUp" data-wow-delay="0.8s">
                        <p><span>Free</span> Let's make something great work together. <a href="/demo-3/contact">Get Free Quote</a></p>
                    </div>
                    {/* Section Footer Text End */}
                </div>
            </div>
        </div>
    </div>
    {/* How It Work Section End */}

    {/* Case Study Section Start */}
    <div className="case-study-prime">
        <div className="container">
            <div className="row section-row align-items-center">
                <div className="col-lg-12">
                    {/* Section Title Start */}
                    <div className="section-title section-title-center">
                        <h3 className="wow fadeInUp">Case study</h3>
                        <h2 className="text-anime-style-3" data-cursor="-opaque">Real patient stories, real smiles, real results</h2>
                    </div>
                    {/* Section Title End */}
                </div>
            </div>

            <div className="row">
                <div className="col-xl-4 col-md-6">
                    {/* Case Study Item Start */}
                    <div className="case-study-item box-bg-shape-prime wow fadeInUp">
                        {/* Case Study Image Start*/}
                        <div className="case-study-image-prime">
                            <figure className="image-anime">
                                <img src="/demo-3/images/case-study-1.jpg" alt="" />
                            </figure>
                        </div>
                        {/* Case Study Image End */}

                        {/* Case Study Content Start */}
                        <div className="case-study-item-content-prime">
                            <ul>
                                <li>Implants</li>
                            </ul>
                            <h3><a href="case-study-single.html">Dental Implant Journey</a></h3>
                        </div>
                        {/* Case Study Content End */}

                        {/* Box Readmore Button Start */}
                        <div className="box-readmore-btn-prime">
                            <a href="case-study-single.html"><img src="/demo-3/images/arrow-white.svg" alt="" /></a>
                        </div>
                        {/* Box Readmore Button End */}
                    </div>
                    {/* Case Study Item End */}
                </div>

                <div className="col-xl-4 col-md-6">
                    {/* Case Study Item Start */}
                    <div className="case-study-item box-bg-shape-prime wow fadeInUp" data-wow-delay="0.2s">
                        {/* Case Study Image Start*/}
                        <div className="case-study-image-prime">
                            <figure className="image-anime">
                                <img src="/demo-3/images/case-study-2.jpg" alt="" />
                            </figure>
                        </div>
                        {/* Case Study Image End */}

                        {/* Case Study Content Start */}
                        <div className="case-study-item-content-prime">
                            <ul>
                                <li>Braces</li>
                            </ul>
                            <h3><a href="case-study-single.html">Healthy Smile Renewal</a></h3>
                        </div>
                        {/* Case Study Content End */}

                        {/* Box Readmore Button Start */}
                        <div className="box-readmore-btn-prime">
                            <a href="case-study-single.html"><img src="/demo-3/images/arrow-white.svg" alt="" /></a>
                        </div>
                        {/* Box Readmore Button End */}
                    </div>
                    {/* Case Study Item End */}
                </div>

                <div className="col-xl-4 col-md-6">
                    {/* Case Study Item Start */}
                    <div className="case-study-item box-bg-shape-prime wow fadeInUp" data-wow-delay="0.4s">
                        {/* Case Study Image Start*/}
                        <div className="case-study-image-prime">
                            <figure className="image-anime">
                                <img src="/demo-3/images/case-study-3.jpg" alt="" />
                            </figure>
                        </div>
                        {/* Case Study Image End */}

                        {/* Case Study Content Start */}
                        <div className="case-study-item-content-prime">
                            <ul>
                                <li>Extractions</li>
                            </ul>
                            <h3><a href="case-study-single.html">Gentle Care Experience</a></h3>
                        </div>
                        {/* Case Study Content End */}

                        {/* Box Readmore Button Start */}
                        <div className="box-readmore-btn-prime">
                            <a href="case-study-single.html"><img src="/demo-3/images/arrow-white.svg" alt="" /></a>
                        </div>
                        {/* Box Readmore Button End */}
                    </div>
                    {/* Case Study Item End */}
                </div>
            </div>
        </div>
    </div>
    {/* Case Study Section End */}



    {/* Our Team Start */}
    <div className="our-team-prime">
        <div className="container">
            <div className="row section-row">                
                <div className="col-lg-12">
                    {/* Section Title Start */}
                    <div className="section-title section-title-center">
                        <h3 className="wow fadeInUp">Our Team member</h3>
                        <h2 className="text-anime-style-3" data-cursor="-opaque">Meet the experts behind your healthier smile</h2>
                    </div>
                    {/* Section Title End */}
                </div>
            </div>

            <div className="row">
                <div className="col-xl-3 col-md-6">
                    {/* Team Item Start */}
                    <div className="team-item-prime wow fadeInUp">
                        {/* Team Content Start */}
                        <div className="team-content-prime">
                            <h3><a href="team-single.html">Dr.Jane Roe</a></h3>
                            <p>Chief Dentist</p>
                        </div>
                        {/* Team Content End */}
                        
                        {/* team Image Start */}
                        <div className="team-image-prime">
                            <figure>
                                <img src="/demo-3/images/team-1.png" alt="" />
                            </figure>
                        </div>
                        {/* team Image End */}

                        {/* Team Social List Start */}
                        <div className="team-social-list-prime">
                            <ul>
                                <li><a href="#"><span className="fa-brands fa-pinterest-p" /></a></li>
                                <li><a href="#"><span className="fa-brands fa-x-twitter" /></a></li>
                                <li><a href="#"><span className="fa-brands fa-facebook-f" /></a></li>
                                <li><a href="#"><span className="fa-brands fa-instagram" /></a></li>
                            </ul>
                        </div>
                        {/* Team Social List End */}
                    </div>
                    {/* Team Item End */}
                </div>
                
                <div className="col-xl-3 col-md-6">
                    {/* Team Item Start */}
                    <div className="team-item-prime wow fadeInUp" data-wow-delay="0.2s">
                        {/* Team Content Start */}
                        <div className="team-content-prime">
                            <h3><a href="team-single.html">Dr.Cameron Williamson</a></h3>
                            <p>Assistant Dentist</p>
                        </div>
                        {/* Team Content End */}

                        {/* team Image Start */}
                        <div className="team-image-prime">
                            <figure>
                                <img src="/demo-3/images/team-2.png" alt="" />
                            </figure>
                        </div>
                        {/* team Image End */}

                        {/* Team Social List Start */}
                        <div className="team-social-list-prime">
                            <ul>
                                <li><a href="#"><span className="fa-brands fa-pinterest-p" /></a></li>
                                <li><a href="#"><span className="fa-brands fa-x-twitter" /></a></li>
                                <li><a href="#"><span className="fa-brands fa-facebook-f" /></a></li>
                                <li><a href="#"><span className="fa-brands fa-instagram" /></a></li>
                            </ul>
                        </div>
                        {/* Team Social List End */}
                    </div>
                    {/* Team Item End */}
                </div>

                <div className="col-xl-3 col-md-6">
                    {/* Team Item Start */}
                    <div className="team-item-prime wow fadeInUp" data-wow-delay="0.4s">
                        {/* Team Content Start */}
                        <div className="team-content-prime">
                            <h3><a href="team-single.html">Dr.Marvin McKinney</a></h3>
                            <p>Dentist Specialist</p>
                        </div>
                        {/* Team Content End */}

                        {/* team Image Start */}
                        <div className="team-image-prime">
                            <figure>
                                <img src="/demo-3/images/team-3.png" alt="" />
                            </figure>
                        </div>
                        {/* team Image End */}

                        {/* Team Social List Start */}
                        <div className="team-social-list-prime">
                            <ul>
                                <li><a href="#"><span className="fa-brands fa-pinterest-p" /></a></li>
                                <li><a href="#"><span className="fa-brands fa-x-twitter" /></a></li>
                                <li><a href="#"><span className="fa-brands fa-facebook-f" /></a></li>
                                <li><a href="#"><span className="fa-brands fa-instagram" /></a></li>
                            </ul>
                        </div>
                        {/* Team Social List End */}
                    </div>
                    {/* Team Item End */}
                </div>

                <div className="col-xl-3 col-md-6">
                    {/* Team Item Start */}
                    <div className="team-item-prime wow fadeInUp" data-wow-delay="0.6s">
                        {/* Team Content Start */}
                        <div className="team-content-prime">
                            <h3><a href="team-single.html">Dr.Mary Moe</a></h3>
                            <p>Consultant Dentist</p>
                        </div>
                        {/* Team Content End */}

                        {/* team Image Start */}
                        <div className="team-image-prime">
                            <figure>
                                <img src="/demo-3/images/team-4.png" alt="" />
                            </figure>
                        </div>
                        {/* team Image End */}

                        {/* Team Social List Start */}
                        <div className="team-social-list-prime">
                            <ul>
                                <li><a href="#"><span className="fa-brands fa-pinterest-p" /></a></li>
                                <li><a href="#"><span className="fa-brands fa-x-twitter" /></a></li>
                                <li><a href="#"><span className="fa-brands fa-facebook-f" /></a></li>
                                <li><a href="#"><span className="fa-brands fa-instagram" /></a></li>
                            </ul>
                        </div>
                        {/* Team Social List End */}
                    </div>
                    {/* Team Item End */}
                </div>
            </div>
        </div>
    </div>
    {/* Our Team End */}

    {/* Our Testimonial Section Start */}
    <div className="our-testimonial-prime bg-section">
        <div className="container">
            <div className="row">
                <div className="col-xl-4">
                    <div className="testimonial-title-box-prime">
                        {/* Section Title Start */}
                        <div className="section-title">
                            <h3 className="wow fadeInUp">testimonials</h3>
                            <h2 className="text-anime-style-3" data-cursor="-opaque">What our happy patients say here</h2>
                            <p className="wow fadeInUp" data-wow-delay="0.2s">Discover real stories from patients who trusted us with their smiles and left happier than ever.</p>
                        </div>
                        {/* Section Title End */}

                        {/* Testimonial Rating Box Start */}
                        <div className="testimonial-rating-box-prime wow fadeInUp" data-wow-delay="0.4s">
                            <div className="icon-box">
                                <img src="/demo-3/images/icon-testimonial-rating-prime.svg" alt="" />
                            </div>
                            <div className="testimonial-rating-info-prime">
                                <div className="testimonial-rating-header-prime">
                                    <h2><span className="counter">4.9</span>/5</h2>
                                    <p>
                                        <span className="fa fa-solid fa-star" />
                                        <span className="fa fa-solid fa-star" />
                                        <span className="fa fa-solid fa-star" />
                                        <span className="fa fa-solid fa-star" />
                                        <span className="fa fa-solid fa-star" />
                                    </p>
                                </div>
                                <div className="testimonial-rating-content-prime">
                                    <p>Based on 250 review</p>
                                </div>
                            </div>
                        </div>
                        {/* Testimonial Rating Box End */}
                    </div>
                </div>

                <div className="col-xl-8">
                    {/* Testimonial Slider Box Start */}
                    <div className="testimonial-slider-box-prime">
                        {/* Testimonial Slider Start */}
                        <div className="testimonial-slider-prime">
                            <div className="swiper">
                                <div className="swiper-wrapper" data-cursor-text="Drag">
                                    {/* Testimonial Slide Start */}
                                    <div className="swiper-slide">
                                        <div className="testimonial-item-prime">
                                            <div className="testimonial-item-header">
                                                <div className="testimonial-quote-prime">
                                                    <img src="/demo-3/images/testimonial-quote-prime.svg" alt="" />
                                                </div>
                                                <div className="testimonial-content-prime">
                                                    <p>"The team is amazing! They made me feel comfortable and explained every step. My smile has never looked better."</p>
                                                </div>
                                            </div>
                                            <div className="testimonial-item-body">
                                                <div className="testimonial-author-prime">
                                                    <div className="author-image-prime">
                                                        <figure className="image-anime">
                                                            <img src="/demo-3/images/author-1.jpg" alt="" />
                                                        </figure>
                                                    </div>
                                                    <div className="author-content-prime">
                                                        <h3>Dr.Marvin McKinney</h3>
                                                        <p>Chief Dentist</p>
                                                    </div>
                                                </div> 
                                                <div className="testimonial-counters-prime">
                                                    <div className="testimonial-counter-item-prime">
                                                        <h2><span className="counter">30</span>k</h2>
                                                        <p>Dentist patients</p>
                                                    </div>
                                                    <div className="testimonial-counter-item-prime">
                                                        <h2><span className="counter">10</span>k</h2>
                                                        <p>Complete Cases</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Testimonial Slide End */}
    
                                    {/* Testimonial Slide Start */}
                                    <div className="swiper-slide">
                                        <div className="testimonial-item-prime">
                                            <div className="testimonial-item-header">
                                                <div className="testimonial-quote-prime">
                                                    <img src="/demo-3/images/testimonial-quote-prime.svg" alt="" />
                                                </div>
                                                <div className="testimonial-content-prime">
                                                    <p>"The team is amazing! They made me feel comfortable and explained every step. My smile has never looked better."</p>
                                                </div>
                                            </div>
                                            <div className="testimonial-item-body">
                                                <div className="testimonial-author-prime">
                                                    <div className="author-image-prime">
                                                        <figure className="image-anime">
                                                            <img src="/demo-3/images/author-2.jpg" alt="" />
                                                        </figure>
                                                    </div>
                                                    <div className="author-content-prime">
                                                        <h3>Dr.Ralph Edwards</h3>
                                                        <p>Consultant Dentist</p>
                                                    </div>
                                                </div> 
                                                <div className="testimonial-counters-prime">
                                                    <div className="testimonial-counter-item-prime">
                                                        <h2><span className="counter">38</span>k</h2>
                                                        <p>Dentist patients</p>
                                                    </div>
                                                    <div className="testimonial-counter-item-prime">
                                                        <h2><span className="counter">8.5</span>k</h2>
                                                        <p>Complete Cases</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Testimonial Slide End */}
    
                                    {/* Testimonial Slide Start */}
                                    <div className="swiper-slide">
                                        <div className="testimonial-item-prime">
                                            <div className="testimonial-item-header">
                                                <div className="testimonial-quote-prime">
                                                    <img src="/demo-3/images/testimonial-quote-prime.svg" alt="" />
                                                </div>
                                                <div className="testimonial-content-prime">
                                                    <p>"The team is amazing! They made me feel comfortable and explained every step. My smile has never looked better."</p>
                                                </div>
                                            </div>
                                            <div className="testimonial-item-body">
                                                <div className="testimonial-author-prime">
                                                    <div className="author-image-prime">
                                                        <figure className="image-anime">
                                                            <img src="/demo-3/images/author-3.jpg" alt="" />
                                                        </figure>
                                                    </div>
                                                    <div className="author-content-prime">
                                                        <h3>Dr. Savannah Nguyen</h3>
                                                        <p>Dentist Specialist</p>
                                                    </div>
                                                </div> 
                                                <div className="testimonial-counters-prime">
                                                    <div className="testimonial-counter-item-prime">
                                                        <h2><span className="counter">28</span>k</h2>
                                                        <p>Dentist patients</p>
                                                    </div>
                                                    <div className="testimonial-counter-item-prime">
                                                        <h2><span className="counter">7.9</span>k</h2>
                                                        <p>Complete Cases</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Testimonial Slide End */}
                                </div>
                            </div>
                        </div>
                        {/* Testimonial Slider End */}
                        
                        {/* Section Footer Text Start */}
                        <div className="section-footer-text wow fadeInUp" data-wow-delay="0.2s">
                            <p>Your Smile Journey Starts Here, <a href="/demo-3/contact">Join Now</a></p>
                        </div>
                        {/* Section Footer Text End */}
                    </div>
                    {/* Testimonial Slider Box Start */}   
                </div>
            </div>
        </div>
    </div>
    {/* Our Testimonial Section End */}
    
    {/* Our Blog Section Start */}
    <div className="our-blog-prime">
        <div className="container">
            <div className="row section-row">
                <div className="col-lg-12">
                    {/* Section Title Start */}
                    <div className="section-title section-title-center">
                        <h3 className="wow fadeInUp">latest Blogs</h3>
                        <h2 className="text-anime-style-3" data-cursor="-opaque">Stay informed with expert dental tips and advice</h2>
                    </div>
                    {/* Section Title End */}
                </div>
            </div>

            <div className="row">
                <div className="col-xl-4 col-md-6">
                    {/* Post Item Start */}
                    <div className="post-item-prime wow fadeInUp">
                        {/* Post Featured Image Start*/}
                        <div className="post-featured-image-prime">
                            <a href="#" data-cursor-text="View">
                                <figure className="image-anime">
                                    <img src="/demo-3/images/post-1.jpg" alt="" />
                                </figure>
                            </a>
                        </div>
                        {/* Post Featured Image End */}
                        
                        {/* Post Item Body Start */}
                        <div className="post-item-body-prime">
                            {/* Post Meta Start */}    
                            <div className="post-meta-prime">
                                <ul>
                                    <li><a href="#"><span className="fa-solid fa-calendar-days" />Sep 5, 2025</a></li>
                                </ul>
                            </div>
                            {/* Post Meta End */}
                            
                            {/* Post Item Content Start */}
                            <div className="post-item-content-prime">
                                <h2><a href="#">The Importance of Regular Dental Check-Ups Explained</a></h2>
                            </div>
                            {/* Post Item Content End */}

                            {/* Post Item Readmore Button Start*/}
                            <div className="post-item-btn-prime">
                                <a href="#" className="readmore-btn">read more</a>
                            </div>
                            {/* Post Item Readmore Button End*/}
                        </div>
                        {/* Post Item Body End */}
                    </div>
                    {/* Post Item End */}
                </div>

                <div className="col-xl-4 col-md-6">
                    {/* Post Item Start */}
                    <div className="post-item-prime wow fadeInUp" data-wow-delay="0.2s">
                        {/* Post Featured Image Start*/}
                        <div className="post-featured-image-prime">
                            <a href="#" data-cursor-text="View">
                                <figure className="image-anime">
                                    <img src="/demo-3/images/post-2.jpg" alt="" />
                                </figure>
                            </a>
                        </div>
                        {/* Post Featured Image End */}
                        
                        {/* Post Item Body Start */}
                        <div className="post-item-body-prime">
                            {/* Post Meta Start */}    
                            <div className="post-meta-prime">
                                <ul>
                                    <li><a href="#"><span className="fa-solid fa-calendar-days" />Sep 3, 2025</a></li>
                                </ul>
                            </div>
                            {/* Post Meta End */}
                            
                            {/* Post Item Content Start */}
                            <div className="post-item-content-prime">
                                <h2><a href="#">Why Regular Dental Checkups Save You Money</a></h2>
                            </div>
                            {/* Post Item Content End */}

                            {/* Post Item Readmore Button Start*/}
                            <div className="post-item-btn-prime">
                                <a href="#" className="readmore-btn">read more</a>
                            </div>
                            {/* Post Item Readmore Button End*/}
                        </div>
                        {/* Post Item Body End */}
                    </div>
                    {/* Post Item End */}
                </div>

                <div className="col-xl-4 col-md-6">
                    {/* Post Item Start */}
                    <div className="post-item-prime wow fadeInUp" data-wow-delay="0.4s">
                        {/* Post Featured Image Start*/}
                        <div className="post-featured-image-prime">
                            <a href="#" data-cursor-text="View">
                                <figure className="image-anime">
                                    <img src="/demo-3/images/post-1.jpg" alt="" />
                                </figure>
                            </a>
                        </div>
                        {/* Post Featured Image End */}
                        
                        {/* Post Item Body Start */}
                        <div className="post-item-body-prime">
                            {/* Post Meta Start */}    
                            <div className="post-meta-prime">
                                <ul>
                                    <li><a href="#"><span className="fa-solid fa-calendar-days" />Sep 1, 2025</a></li>
                                </ul>
                            </div>
                            {/* Post Meta End */}
                            
                            {/* Post Item Content Start */}
                            <div className="post-item-content-prime">
                                <h2><a href="#">The Importance of Regular Dental Check-Ups Explained</a></h2>
                            </div>
                            {/* Post Item Content End */}

                            {/* Post Item Readmore Button Start*/}
                            <div className="post-item-btn-prime">
                                <a href="#" className="readmore-btn">read more</a>
                            </div>
                            {/* Post Item Readmore Button End*/}
                        </div>
                        {/* Post Item Body End */}
                    </div>
                    {/* Post Item End */}
                </div>
            </div>
        </div>
    </div>
    {/* Our Blog Section End */}

    
    </>
  );
}
