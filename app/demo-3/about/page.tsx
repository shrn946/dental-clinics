import Link from 'next/link';
import Image from 'next/image';
import { Star, Plus, Check, Phone, Mail, MapPin, Clock, ArrowRight, Search, Play } from 'lucide-react';
import { FaPinterestP, FaTwitter as Twitter, FaFacebookF as Facebook, FaInstagram as Instagram } from 'react-icons/fa';

export default function Page() {
  return (
    <>


    {/**/}
    <div className="page-header bg-section dark-section">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-12">
                    {/**/}
                    <div className="page-header-box">
                        <h1 className="text-anime-style-3" data-cursor="-opaque">About us</h1>
                        <nav className="wow fadeInUp">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="/demo-3">home</a></li>
                                <li className="breadcrumb-item active" aria-current="page">About us</li>
                            </ol>
                        </nav>
                    </div>
                    {/**/}
                </div>
            </div>
        </div>
    </div>
    {/**/}

    {/**/}
    <div className="about-us">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-xl-6">
                    {/**/}
                    <div className="about-us-images wow fadeInUp">
                        {/**/}
                        <div className="about-image-box-1">
                            {/**/}
                            <div className="about-image">
                                <figure>
                                    <img src="/demo-3/images/about-us-image-1.png" alt="" />
                                </figure>
                            </div>
                            {/**/}
                        </div>
                        {/**/}

                        {/**/}
                        <div className="about-image-box-2">
                            {/**/}
                            <div className="about-image">
                                <figure className="image-anime reveal">
                                    <img src="/demo-3/images/about-us-image-2.jpg" alt="" />
                                </figure>
                                
                                {/**/}
                                <div className="year-experience-circle">
                                    <img src="/demo-3/images/year-experience-circle.svg" alt="" />
                                </div>
                                {/**/}
                            </div>
                            {/**/}
                            
                            {/**/}
                            <div className="about-counter-box">
                                <div className="about-counter-info">
                                    <h2><span className="counter">4.9</span>/5</h2>
                                    <ul>
                                        <li><Star /></li>
                                        <li><Star /></li>
                                        <li><Star /></li>
                                        <li><Star /></li>
                                        <li><Star /></li>
                                    </ul>
                                </div>
                                <div className="about-counter-content">
                                    <p>Average patient satisfact rating.</p>
                                </div>
                            </div>
                            {/**/}
                        </div>
                        {/**/}
                    </div>
                    {/**/}
                </div>

                <div className="col-xl-6">
                    {/**/}
                    <div className="about-us-content">
                        {/**/}
                        <div className="section-title">
                            <h3 className="wow fadeInUp">About Us</h3>
                            <h2 className="text-anime-style-3" data-cursor="-opaque">Your trusted dental partner for every family member</h2>
                            <p className="wow fadeInUp" data-wow-delay="0.2s">We provide comprehensive dental care for patients of all ages, ensuring healthy, confident smiles for every member of your family.</p>
                        </div>
                        {/**/}

                        {/**/}
                        <div className="about-us-list wow fadeInUp" data-wow-delay="0.4s">
                            <ul>
                                <li>Experience Team of Dental Professional</li>
                                <li>Gentle and Compassionate Care</li>
                            </ul>
                        </div>
                        {/**/}

                        {/**/}
                        <div className="about-author-body wow fadeInUp" data-wow-delay="0.6s">
                            <div className="about-author-content">
                                <h3>Trusted by Over 5,000+ Patient Worldwide</h3>
                            </div>
                            <div className="satisfy-client-images">
                                <div className="satisfy-client-image">
                                    <figure className="image-anime">
                                        <img src="/demo-3/images/author-1.jpg" alt="" />
                                    </figure>
                                </div>
                                <div className="satisfy-client-image">
                                    <figure className="image-anime">
                                        <img src="/demo-3/images/author-2.jpg" alt="" />
                                    </figure>
                                </div>
                                <div className="satisfy-client-image">
                                    <figure className="image-anime">
                                        <img src="/demo-3/images/author-3.jpg" alt="" />
                                    </figure>
                                </div>
                                <div className="satisfy-client-image">
                                    <figure className="image-anime">
                                        <img src="/demo-3/images/author-4.jpg" alt="" />
                                    </figure>
                                </div>
                                <div className="satisfy-client-image add-more">
                                    <span className="fa fa-solid fa-plus" />
                                </div>
                            </div>
                        </div>
                        {/**/}

                        {/**/}
                        <div className="about-us-footer wow fadeInUp" data-wow-delay="0.8s">
                            {/**/}
                            <div className="about-us-btn">
                                <a href="/demo-3/contact" className="btn-default">contact us</a>
                            </div>
                            {/**/}

                            {/**/}
                            <div className="about-contact-box">
                                <div className="icon-box">
                                    <img src="/demo-3/images/icon-phone-accent.svg" alt="" />
                                </div>
                                <div className="about-contact-box-content">
                                    <p>Need Help?</p>
                                    <h3><a href="tel:+123254896">+123-254-896</a></h3>
                                </div>
                            </div>
                            {/**/}
                        </div>
                        {/**/}
                    </div>
                    {/**/}
                </div>
            </div>
        </div>
    </div>
    {/**/}

    {/**/}
    <div className="our-approach bg-section">
        <div className="container">
            <div className="row section-row">
                <div className="col-lg-12">
                    {/**/}
                    <div className="section-title section-title-center">
                        <h3 className="wow fadeInUp">Our Approach</h3>
                        <h2 className="text-anime-style-3" data-cursor="-opaque">Compassionate dental care built on modern expertise</h2>
                    </div>
                    {/**/}
                </div>
            </div>

            <div className="row">
                <div className="col-xl-4 col-md-6">
                    {/**/}
                    <div className="approach-item box-bg-shape wow fadeInUp" data-wow-delay="0.2s">
                        <div className="approach-item-content">
                            <h3>Our Mission</h3>
                            <p>Our Mission is to redefine dental care innovation, compassion, and excellence.</p>
                        </div>
                        <div className="approach-item-list">
                            <ul>
                                <li>Compassion Guides Every Action</li>
                                <li>Integrity in Every Treatment</li>
                                <li>Compassion in Every Treatment</li>
                            </ul>
                        </div>
                        <div className="icon-box">
                            <img src="/demo-3/images/icon-approach-1.svg" alt="" />
                        </div>
                    </div>
                    {/**/}
                </div>

                <div className="col-xl-4 col-md-6">
                    {/**/}
                    <div className="approach-item box-bg-shape wow fadeInUp" data-wow-delay="0.4s">
                        <div className="approach-item-content">
                            <h3>Our Vision</h3>
                            <p>Our vision is to redefine dental care innovation, compassion, and excellence.</p>
                        </div>
                        <div className="approach-item-list">
                            <ul>
                                <li>Compassion Guides Every Action</li>
                                <li>Integrity in Every Treatment</li>
                                <li>Compassion in Every Treatment</li>
                            </ul>
                        </div>
                        <div className="icon-box">
                            <img src="/demo-3/images/icon-approach-2.svg" alt="" />
                        </div>
                    </div>
                    {/**/}
                </div>

                <div className="col-xl-4 col-md-6">
                    {/**/}
                    <div className="approach-item box-bg-shape wow fadeInUp" data-wow-delay="0.6s">
                        <div className="approach-item-content">
                            <h3>Our Value</h3>
                            <p>Our Value is to redefine dental care innovation, compassion, and excellence.</p>
                        </div>
                        <div className="approach-item-list">
                            <ul>
                                <li>Compassion Guides Every Action</li>
                                <li>Integrity in Every Treatment</li>
                                <li>Compassion in Every Treatment</li>
                            </ul>
                        </div>
                        <div className="icon-box">
                            <img src="/demo-3/images/icon-approach-3.svg" alt="" />
                        </div>
                    </div>
                    {/**/}
                </div>

                <div className="col-lg-12">
                    {/**/}
                    <div className="section-footer-text wow fadeInUp" data-wow-delay="0.8s">
                        <p>Join us and create smiles that truly inspire confidence. <a href="/demo-3/contact">Contact Us</a></p>
                    </div>
                    {/**/}
                </div>
            </div>
        </div>
    </div>
    {/**/}

    {/**/}
    <div className="our-features">
        <div className="container">
            <div className="row">                
                <div className="col-lg-12">
                    {/**/}
                    <div className="feature-content">
                        {/**/}
                        <div className="section-title section-title-center">
                            <h3 className="wow fadeInUp">Our Feature</h3>
                            <h2 className="text-anime-style-3" data-cursor="-opaque">Modern dentistry focused on your comfort and care</h2>
                        </div>
                        {/**/}

                        {/**/}
                        <div className="feature-btn wow fadeInUp" data-wow-delay="0.2s">
                            <a href="/demo-3/appointment" className="btn-default">Make an Appointment</a>
                        </div>
                        {/**/}
                    </div>
                    {/**/}                 
                </div>
            </div>

            <div className="row">
                <div className="col-lg-12">
                    {/**/}
                    <div className="feature-box-list">
                        {/**/}
                        <div className="feature-box-1">
                            <div className="feature-item-1 wow fadeInUp">
                                <div className="icon-box">
                                    <img src="/demo-3/images/icon-feature-item-1.svg" alt="" />
                                </div>
                                <div className="feature-item-content">
                                    <h3>Experienced Dental Team</h3>
                                    <p>Skilled professionals committed to gentle, personalized care.</p>
                                </div>
                            </div>
    
                            <div className="feature-item-2 wow fadeInUp" data-wow-delay="0.2s">
                                <div className="feature-image">
                                    <figure className="image-anime">
                                        <img src="/demo-3/images/feature-image-1.jpg" alt="" />
                                    </figure>
                                </div>
                                <div className="feature-item-content">
                                    <h3>Commitment to Long-Term Oral Health</h3>
                                </div>
                            </div>
                        </div>      
                        {/**/}              
    
                        {/**/}
                        <div className="feature-highlighted-box wow fadeInUp" data-wow-delay="0.4s">
                            <div className="satisfy-client-images">
                                <div className="satisfy-client-image">
                                    <figure className="image-anime">
                                        <img src="/demo-3/images/author-1.jpg" alt="" />
                                    </figure>
                                </div>
                                <div className="satisfy-client-image">
                                    <figure className="image-anime">
                                        <img src="/demo-3/images/author-2.jpg" alt="" />
                                    </figure>
                                </div>
                                <div className="satisfy-client-image">
                                    <figure className="image-anime">
                                        <img src="/demo-3/images/author-3.jpg" alt="" />
                                    </figure>
                                </div>
                                <div className="satisfy-client-image add-more">
                                    <span className="fa fa-solid fa-plus" />
                                </div>
                            </div>
    
                            <div className="feature-highlighted-content">
                                <h2><span className="counter">5</span>k+</h2>
                                <p>Patient Worldwide</p>
                            </div>
                        </div>
                        {/**/}
    
                        {/**/}
                        <div className="feature-box-2">
                            <div className="feature-item-2 wow fadeInUp" data-wow-delay="0.6s">
                                <div className="feature-image">
                                    <figure className="image-anime">
                                        <img src="/demo-3/images/feature-image-2.jpg" alt="" />
                                    </figure>
                                </div>
                                <div className="feature-item-content">
                                    <h2><span className="counter">24</span>/7</h2>
                                    <p>Because your dental health can't wait.</p>
                                </div>
                            </div>
                            
                            <div className="feature-item-1 wow fadeInUp" data-wow-delay="0.8s">
                                <div className="feature-item-content">
                                    <h3>Advanced Technologies for Comfortable Treatments</h3>
                                </div>
                                <div className="feature-charactor-image">
                                    <figure>
                                        <img src="/demo-3/images/feature-image-3.png" alt="" />
                                    </figure>
                                </div>
                            </div>
                        </div>
                        {/**/}
                    </div>
                    {/**/}
                </div>

                <div className="col-lg-12">
                    {/**/}
                    <div className="section-footer-text section-satisfy-img wow fadeInUp" data-wow-delay="1s">
                        {/**/}
                        <div className="satisfy-client-images">
                            <div className="satisfy-client-image">
                                <figure className="image-anime">
                                    <img src="/demo-3/images/author-1.jpg" alt="" />
                                </figure>
                            </div>
                            <div className="satisfy-client-image">
                                <figure className="image-anime">
                                    <img src="/demo-3/images/author-2.jpg" alt="" />
                                </figure>
                            </div>
                            <div className="satisfy-client-image">
                                <figure className="image-anime">
                                    <img src="/demo-3/images/author-3.jpg" alt="" />
                                </figure>
                            </div>
                            <div className="satisfy-client-image">
                                <figure className="image-anime">
                                    <img src="/demo-3/images/author-4.jpg" alt="" />
                                </figure>
                            </div>
                        </div>
                        {/**/}
                        
                        <p>Join us to build smarter, faster, and future-ready technology solutions.</p>
                    </div>
                    {/**/}
                </div>
            </div>
        </div>
    </div>
    {/**/}

    {/**/}
    <div className="why-choose-us bg-section dark-section">
        <div className="container">
            <div className="row section-row">
                <div className="col-lg-12">
                    {/**/}
                    <div className="section-title section-title-center">
                        <h3 className="wow fadeInUp">Why choose us</h3>
                        <h2 className="text-anime-style-3" data-cursor="-opaque">Delivering gentle dental care with experience and trust</h2>
                    </div>
                    {/**/}
                </div>
            </div>

            <div className="row align-items-center">
                <div className="col-lg-4 col-md-6 order-1">
                    {/**/}
                    <div className="why-choose-item-list">
                        {/**/}
                        <div className="why-choose-item wow fadeInUp" data-wow-delay="0.2s">
                            <div className="icon-box">
                                <img src="/demo-3/images/icon-why-choose-1.svg" alt="" />
                            </div>
                            <div className="why-choose-item-content">
                                <h3>State-of-Art Technology</h3>
                                <p>We use advanced dental technology to ensure precise, safe, and comfortable treatments for every patient.</p>
                            </div>
                        </div>
                        {/**/}

                        {/**/}
                        <div className="why-choose-item wow fadeInUp" data-wow-delay="0.4s">
                            <div className="icon-box">
                                <img src="/demo-3/images/icon-why-choose-2.svg" alt="" />
                            </div>
                            <div className="why-choose-item-content">
                                <h3>Patient-Centered Approach</h3>
                                <p>We use advanced dental technology to ensure precise, safe, and comfortable treatments for every patient.</p>
                            </div>
                        </div>
                        {/**/}
                    </div>
                    {/**/}
                </div>

                <div className="col-lg-4 order-lg-2 order-md-3 order-2">
                    {/**/}
                    <div className="why-choose-image wow fadeInUp" data-wow-delay="0.2s">
                        <figure>
                            <img src="/demo-3/images/why-choose-image.png" alt="" />
                        </figure>
                    </div>
                    {/**/}
                </div>

                <div className="col-lg-4 col-md-6 order-lg-2 order-md-2 order-3">
                    {/**/}
                    <div className="why-choose-item-list">
                        {/**/}
                        <div className="why-choose-item wow fadeInUp" data-wow-delay="0.2s">
                            <div className="icon-box">
                                <img src="/demo-3/images/icon-why-choose-3.svg" alt="" />
                            </div>
                            <div className="why-choose-item-content">
                                <h3>Gentle Compassionate Care</h3>
                                <p>We use advanced dental technology to ensure precise, safe, and comfortable treatments for every patient.</p>
                            </div>
                        </div>
                        {/**/}

                        {/**/}
                        <div className="why-choose-item wow fadeInUp" data-wow-delay="0.4s">
                            <div className="icon-box">
                                <img src="/demo-3/images/icon-why-choose-4.svg" alt="" />
                            </div>
                            <div className="why-choose-item-content">
                                <h3>Family-Friendly Environment</h3>
                                <p>We use advanced dental technology to ensure precise, safe, and comfortable treatments for every patient.</p>
                            </div>
                        </div>
                        {/**/}
                    </div>
                    {/**/}
                </div>
            </div>
        </div>
    </div>
    {/**/}
    
    {/**/}
    <div className="how-it-work">
        <div className="container">
            <div className="row">
                <div className="col-xl-6">
                    {/**/}
                    <div className="how-it-work-image-box wow fadeInUp">
                        {/**/}
                        <div className="how-it-work-image">
                            <figure className="image-anime">
                                <img src="/demo-3/images/how-it-work-image.jpg" alt="" />
                            </figure>
                        </div>
                        {/**/}

                        {/**/}
                        <div className="work-client-box">
                            {/**/}
                            <div className="satisfy-client-images">
                                <div className="satisfy-client-image">
                                    <figure className="image-anime">
                                        <img src="/demo-3/images/author-1.jpg" alt="" />
                                    </figure>
                                </div>
                                <div className="satisfy-client-image">
                                    <figure className="image-anime">
                                        <img src="/demo-3/images/author-2.jpg" alt="" />
                                    </figure>
                                </div>
                                <div className="satisfy-client-image">
                                    <figure className="image-anime">
                                        <img src="/demo-3/images/author-3.jpg" alt="" />
                                    </figure>
                                </div>
                                <div className="satisfy-client-image">
                                    <figure className="image-anime">
                                        <img src="/demo-3/images/author-4.jpg" alt="" />
                                    </figure>
                                </div>
                                <div className="satisfy-client-image add-more">
                                    <h3><span className="counter">15</span>K+</h3>
                                </div>
                            </div>
                            {/**/}

                            {/**/}
                            <div className="satisfy-client-content">
                                <p><span>98%</span> Satisfaction Rate</p>
                            </div>
                            {/**/}
                        </div>
                        {/**/}
                    </div>
                    {/**/}
                </div>

                <div className="col-xl-6">
                    {/**/}
                    <div className="how-it-work-content">
                        {/**/}
                        <div className="section-title">
                            <h3 className="wow fadeInUp">How it work</h3>
                            <h2 className="text-anime-style-3" data-cursor="-opaque">How we make dentistry easy and comfortable</h2>
                        </div>
                        {/**/}

                        {/**/}
                        <div className="work-step-item-list wow fadeInUp" data-wow-delay="0.2s">
                            {/**/}
                            <div className="work-step-item">
                                <div className="work-step-no">
                                    <h3>01</h3>
                                </div>
                                <div className="work-step-item-content">
                                    <h3>Schedule Your Visit</h3>
                                    <p>Contact us online or by phone to set up an appointment at a time that works for you.</p>
                                </div>
                            </div>
                            {/**/}

                            {/**/}
                            <div className="work-step-item">
                                <div className="work-step-no">
                                    <h3>02</h3>
                                </div>
                                <div className="work-step-item-content">
                                    <h3>Comprehensive</h3>
                                    <p>During your first visit, we take the time to listen. We'll review your dental history.</p>
                                </div>
                            </div>
                            {/**/}
                            
                            {/**/}
                            <div className="work-step-item">
                                <div className="work-step-no">
                                    <h3>03</h3>
                                </div>
                                <div className="work-step-item-content">
                                    <h3>Personalized Treatment</h3>
                                    <p>Based on your goals and exam results, we create a tailored treatment and plans.</p>
                                </div>
                            </div>
                            {/**/}

                            {/**/}
                            <div className="work-step-item">
                                <div className="work-step-no">
                                    <h3>04</h3>
                                </div>
                                <div className="work-step-item-content">
                                    <h3>Gentle Treatment</h3>
                                    <p>Whether you're here for route cleaning, cosmetic work, or a restorative procedure.</p>
                                </div>
                            </div>
                            {/**/}
                        </div>
                        {/**/}
                    </div>
                    {/**/}
                </div>
            </div>
        </div>
    </div>
    {/**/}

    {/**/}
    <div className="our-expert bg-section dark-section parallaxie">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    {/**/}
                    <div className="our-expert-section">
                        {/**/}
                        <div className="our-expert-content">
                            {/**/}
                            <div className="section-title">
                                <h2 className="text-anime-style-3" data-cursor="-opaque">Expert dentistry dedicated to lifelong oral health</h2>
                            </div>
                            {/**/}

                            {/**/}
                            <div className="our-expert-list wow fadeInUp" data-wow-delay="0.2s">
                                <ul>
                                    <li>General Dentistry</li>
                                    <li>Emergency Dentistry</li>
                                </ul>
                            </div>
                            {/**/}
                        </div>
                        {/**/}

                        {/**/}
                        <div className="our-expert-box wow fadeInUp" data-wow-delay="0.4s">
                            <div className="expert-box-content">
                                <h4>patient rate</h4>
                                <h3>Average rate</h3>
                                <p>Our experienced team provides advanced.</p>
                                <h2><span className="counter">90</span><sub>bpm</sub></h2>
                            </div>
                            <div className="expert-box-image">
                                <img src="/demo-3/images/expert-box-rate-image.png" alt="" />
                            </div>
                        </div>
                        {/**/}
                    </div>
                    {/**/}
                </div>
            </div>
        </div>
    </div>
    {/**/}
    
    {/**/}
    <div className="our-team">
        <div className="container">
            <div className="row section-row">
                <div className="col-lg-12">
                    {/**/}
                    <div className="section-title section-title-center">
                        <h3 className="wow fadeInUp">Our Team</h3>
                        <h2 className="text-anime-style-3" data-cursor="-opaque">Trusted professionals creating smiles with expert care</h2>
                    </div>
                    {/**/}
                </div>
            </div>

            <div className="row">
                <div className="col-xl-3 col-md-6">
                    {/**/}
                    <div className="team-item wow fadeInUp">
                        <div className="team-image box-bg-shape">
                            <figure>
                                <img src="/demo-3/images/team-1.png" alt="" />
                            </figure>
                            <div className="team-social-list">
                                <div className="team-social-icon">
                                    <ul>
                                        <li><a href="#"><span className="fab fa-facebook-f" /></a></li>
                                        <li><a href="#"><Twitter /></a></li>
                                        <li><a href="#"><span className="fab fa-linkedin-in" /></a></li>
                                    </ul>
                                </div>

                                <div className="team-readmore-btn">
                                    <a href="#"><img src="/demo-3/images/icon-share.svg" alt="" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="team-content">
                            <h3><a href="team-single.html">Dr.Savannah Nguyen</a></h3>
                            <p>Chief Dentist</p>
                        </div>
                    </div>
                    {/**/}
                </div>
                
                <div className="col-xl-3 col-md-6">
                    {/**/}
                    <div className="team-item wow fadeInUp" data-wow-delay="0.2s">
                        <div className="team-image box-bg-shape">
                            <figure>
                                <img src="/demo-3/images/team-2.png" alt="" />
                            </figure>
                            <div className="team-social-list">
                                <div className="team-social-icon">
                                    <ul>
                                        <li><a href="#"><span className="fab fa-facebook-f" /></a></li>
                                        <li><a href="#"><Twitter /></a></li>
                                        <li><a href="#"><span className="fab fa-linkedin-in" /></a></li>
                                    </ul>
                                </div>

                                <div className="team-readmore-btn">
                                    <a href="#"><img src="/demo-3/images/icon-share.svg" alt="" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="team-content">
                            <h3><a href="team-single.html">Dr.Theresa Webb</a></h3>
                            <p>Implantologist</p>
                        </div>
                    </div>
                    {/**/}
                </div>
                
                <div className="col-xl-3 col-md-6">
                    {/**/}
                    <div className="team-item wow fadeInUp" data-wow-delay="0.4s">
                        <div className="team-image box-bg-shape">
                            <figure>
                                <img src="/demo-3/images/team-3.png" alt="" />
                            </figure>
                            <div className="team-social-list">
                                <div className="team-social-icon">
                                    <ul>
                                        <li><a href="#"><span className="fab fa-facebook-f" /></a></li>
                                        <li><a href="#"><Twitter /></a></li>
                                        <li><a href="#"><span className="fab fa-linkedin-in" /></a></li>
                                    </ul>
                                </div>

                                <div className="team-readmore-btn">
                                    <a href="#"><img src="/demo-3/images/icon-share.svg" alt="" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="team-content">
                            <h3><a href="team-single.html">Dr.Jenny Wilson</a></h3>
                            <p>Pediatric Dentist</p>
                        </div>
                    </div>
                    {/**/}
                </div>
                
                <div className="col-xl-3 col-md-6">
                    {/**/}
                    <div className="team-item wow fadeInUp" data-wow-delay="0.6s">
                        <div className="team-image box-bg-shape">
                            <figure>
                                <img src="/demo-3/images/team-4.png" alt="" />
                            </figure>
                            <div className="team-social-list">
                                <div className="team-social-icon">
                                    <ul>
                                        <li><a href="#"><span className="fab fa-facebook-f" /></a></li>
                                        <li><a href="#"><Twitter /></a></li>
                                        <li><a href="#"><span className="fab fa-linkedin-in" /></a></li>
                                    </ul>
                                </div>

                                <div className="team-readmore-btn">
                                    <a href="#"><img src="/demo-3/images/icon-share.svg" alt="" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="team-content">
                            <h3><a href="team-single.html">Dr.Ronald Richards</a></h3>
                            <p>Gum Care Specialist</p>
                        </div>
                    </div>
                    {/**/}
                </div>
            </div>
        </div>
    </div>
    {/**/}

    {/**/}
    <div className="our-testimonial bg-section">
        <div className="container">
            <div className="row section-row align-items-center">
                <div className="col-lg-12">
                    {/**/}
                    <div className="section-title section-title-center">
                        <h3 className="wow fadeInUp">testimonials</h3>
                        <h2 className="text-anime-style-3" data-cursor="-opaque">Happy patients sharing their dental care journey</h2>
                    </div>
                    {/**/}
                </div>
            </div>

            <div className="row">
                <div className="col-lg-12">
                    {/**/}
                    <div className="testimonial-slider">
                        <div className="swiper">
                            <div className="swiper-wrapper" data-cursor-text="Drag">
                                {/**/}
                                <div className="swiper-slide">
                                    <div className="testimonial-item">
                                        <div className="testimonial-item-header">
                                            <div className="testimonial-rating">
                                                <Star />
                                                <Star />
                                                <Star />
                                                <Star />
                                                <Star />
                                            </div>                              
                                            <div className="testimonial-content">
                                                <p>"The team is amazing! They made me feel comfortable and explained every step. My smile has never looked better."</p>
                                            </div>
                                        </div>                                        
                                        <div className="testimonial-body">
                                            <div className="testimonial-author">
                                                <div className="author-image">
                                                    <figure className="image-anime">
                                                        <img src="/demo-3/images/author-1.jpg" alt="" />
                                                    </figure>
                                                </div>
                                                <div className="author-content">
                                                    <h3>Dr. Savannah Nguyen</h3>
                                                    <p>Chief Dentist</p>
                                                </div>
                                            </div> 
                                            <div className="testimonial-quote">
                                                <img src="/demo-3/images/testimonial-quote.svg" alt="" />
                                            </div>                                              
                                        </div>                                    
                                    </div>
                                </div>
                                {/**/}

                                {/**/}
                                <div className="swiper-slide">
                                    <div className="testimonial-item">
                                        <div className="testimonial-item-header">
                                            <div className="testimonial-rating">
                                                <Star />
                                                <Star />
                                                <Star />
                                                <Star />
                                                <Star />
                                            </div>                              
                                            <div className="testimonial-content">
                                                <p>"The team is amazing! They made me feel comfortable and explained every step. My smile has never looked better."</p>
                                            </div>
                                        </div>
                                        <div className="testimonial-body">
                                            <div className="testimonial-author">
                                                <div className="author-image">
                                                    <figure className="image-anime">
                                                        <img src="/demo-3/images/author-2.jpg" alt="" />
                                                    </figure>
                                                </div>
                                                <div className="author-content">
                                                    <h3>Dr. Bessie Cooper</h3>
                                                    <p>Orthodontist</p>
                                                </div>
                                            </div> 
                                            <div className="testimonial-quote">
                                                <img src="/demo-3/images/testimonial-quote.svg" alt="" />
                                            </div>                                              
                                        </div>                                  
                                    </div>
                                </div>
                                {/**/}

                                {/**/}
                                <div className="swiper-slide">
                                    <div className="testimonial-item">
                                        <div className="testimonial-item-header">
                                            <div className="testimonial-rating">
                                                <Star />
                                                <Star />
                                                <Star />
                                                <Star />
                                                <Star />
                                            </div>                              
                                            <div className="testimonial-content">
                                                <p>"The team is amazing! They made me feel comfortable and explained every step. My smile has never looked better."</p>
                                            </div>
                                        </div>
                                        <div className="testimonial-body">
                                            <div className="testimonial-author">
                                                <div className="author-image">
                                                    <figure className="image-anime">
                                                        <img src="/demo-3/images/author-3.jpg" alt="" />
                                                    </figure>
                                                </div>
                                                <div className="author-content">
                                                    <h3>Dr. Kristin Watson</h3>
                                                    <p>Consultant Dentist</p>
                                                </div>
                                            </div> 
                                            <div className="testimonial-quote">
                                                <img src="/demo-3/images/testimonial-quote.svg" alt="" />
                                            </div>                                              
                                        </div>                                   
                                    </div>
                                </div>
                                {/**/}

                                {/**/}
                                <div className="swiper-slide">
                                    <div className="testimonial-item">
                                        <div className="testimonial-item-header">
                                            <div className="testimonial-rating">
                                                <Star />
                                                <Star />
                                                <Star />
                                                <Star />
                                                <Star />
                                            </div>                              
                                            <div className="testimonial-content">
                                                <p>"The team is amazing! They made me feel comfortable and explained every step. My smile has never looked better."</p>
                                            </div>
                                        </div>
                                        <div className="testimonial-body">
                                            <div className="testimonial-author">
                                                <div className="author-image">
                                                    <figure className="image-anime">
                                                        <img src="/demo-3/images/author-4.jpg" alt="" />
                                                    </figure>
                                                </div>
                                                <div className="author-content">
                                                    <h3>Dr. Cody Fisher</h3>
                                                    <p>Pediatric Dentist</p>
                                                </div>
                                            </div> 
                                            <div className="testimonial-quote">
                                                <img src="/demo-3/images/testimonial-quote.svg" alt="" />
                                            </div>                                              
                                        </div>                                   
                                    </div>
                                </div>
                                {/**/}
                            </div>
                            <div className="testimonial-pagination"></div>
                        </div>
                    </div>
                    {/**/}
                </div>

                <div className="col-lg-12">
                    {/**/}
                    <div className="section-footer-text wow fadeInUp" data-wow-delay="0.2s">
                        <ul>
                            <li><span className="counter">4.9</span>/5</li>
                            <li><Star /></li>
                            <li>Our 4k Patient Review</li>
                        </ul>
                    </div>
                    {/**/}
                </div>
            </div>
        </div>
    </div>
    {/**/}

    {/**/}
    <div className="our-faqs">
        <div className="container">
            <div className="row">
                <div className="col-xl-6">
                    {/**/}
                    <div className="faqs-content">
                        {/**/}
                        <div className="section-title">
                            <h3 className="wow fadeInUp">FAQs</h3>
                            <h2 className="text-anime-style-3" data-cursor="-opaque">Frequently asked questions about your dental care</h2>
                        </div>
                        {/**/}

                        {/**/}
                        <div className="faq-cta-box wow fadeInUp" data-wow-delay="0.2s">
                            {/**/}
                            <div className="faq-cta-content">
                                <h3>Still have a dental question?</h3>
                                <p>Can't find the answer you're looking for? Send us a message, and our dental team.</p>
                            </div>
                            {/**/}

                            {/**/}
                            <div className="faq-cta-btn">
                                <a href="/demo-3/appointment" className="btn-default">Make an Appointment</a>
                            </div>
                            {/**/}
                        </div>
                        {/**/}
                    </div>
                    {/**/}
                </div>

                <div className="col-xl-6">
                    {/**/}
                    <div className="faq-accordion" id="accordion">
                        {/**/}
                        <div className="accordion-item wow fadeInUp">
                            <h2 className="accordion-header" id="heading1">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                                    Q1. How often should I visit the dentist?
                                </button>
                            </h2>
                            <div id="collapse1" className="accordion-collapse collapse show" aria-labelledby="heading1" data-bs-parent="#accordion">
                                <div className="accordion-body">
                                    <p>Most patients benefit from a check-up every six months. Regular visits help detect problems early and keep your teeth and gums healthy.</p>
                                </div>
                            </div>
                        </div>
                        {/**/}

                        {/**/}
                        <div className="accordion-item wow fadeInUp" data-wow-delay="0.2s">
                            <h2 className="accordion-header" id="heading2">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                                    Q2. Are dental treatments painful?
                                </button>
                            </h2>
                            <div id="collapse2" className="accordion-collapse collapse" aria-labelledby="heading2" data-bs-parent="#accordion">
                                <div className="accordion-body">
                                    <p>Most patients benefit from a check-up every six months. Regular visits help detect problems early and keep your teeth and gums healthy.</p>
                                </div>
                            </div>
                        </div>
                        {/**/}

                        {/**/}
                        <div className="accordion-item wow fadeInUp" data-wow-delay="0.4s">
                            <h2 className="accordion-header" id="heading3">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                                    Q3. Do you accept insurance and payment plans?
                                </button>
                            </h2>
                            <div id="collapse3" className="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#accordion">
                                <div className="accordion-body">
                                    <p>Most patients benefit from a check-up every six months. Regular visits help detect problems early and keep your teeth and gums healthy.</p>
                                </div>
                            </div>
                        </div>
                        {/**/}

                        {/**/}
                        <div className="accordion-item wow fadeInUp" data-wow-delay="0.6s">
                            <h2 className="accordion-header" id="heading4">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                                    Q4. How do I know if I need a filling, crown, or implant?
                                </button>
                            </h2>
                            <div id="collapse4" className="accordion-collapse collapse" aria-labelledby="heading4" data-bs-parent="#accordion">
                                <div className="accordion-body">
                                    <p>Most patients benefit from a check-up every six months. Regular visits help detect problems early and keep your teeth and gums healthy.</p>
                                </div>
                            </div>
                        </div>
                        {/**/}

                        {/**/}
                        <div className="accordion-item wow fadeInUp" data-wow-delay="0.8s">
                            <h2 className="accordion-header" id="heading5">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                                    Q5. Can children be treated at your clinic?
                                </button>
                            </h2>
                            <div id="collapse5" className="accordion-collapse collapse" aria-labelledby="heading5" data-bs-parent="#accordion">
                                <div className="accordion-body">
                                    <p>Most patients benefit from a check-up every six months. Regular visits help detect problems early and keep your teeth and gums healthy.</p>
                                </div>
                            </div>
                        </div>
                        {/**/}
                    </div>
                    {/**/}
                </div>
            </div>
        </div>
    </div>
    {/**/}

    
    </>
  );
}
