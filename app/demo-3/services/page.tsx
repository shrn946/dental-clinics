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
                        <h1 className="text-anime-style-3" data-cursor="-opaque">Our services</h1>
                        <nav className="wow fadeInUp">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="/demo-3">home</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Our services</li>
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
    <div className="page-services">
        <div className="container">
            <div className="row">
                <div className="col-xl-4 col-md-6">
                    {/**/}
                    <div className="service-item box-bg-shape wow fadeInUp">
                        <div className="service-item-image">
                            <figure>
                                <img src="/demo-3/images/service-item-image-1.png" alt="" />
                            </figure>
                        </div>
                        {/**/}
                        <div className="service-item-content">
                            <h3><a href="/demo-3/services/details">Pediatric Dentistry</a></h3>
                            <p>Our orthodontic treatments, including brace, clear aligner gently straighten teeth.</p>
                            <ul>
                                <li>Braces</li>
                                <li>Clear Aligners</li>
                            </ul>
                        </div>
                        {/**/}
                        
                        {/**/}
                        <div className="box-readmore-btn">
                            <a href="/demo-3/services/details"><img src="/demo-3/images/arrow-white.svg" alt="" /></a>
                        </div>
                        {/**/}
                    </div>
                    {/**/}
                </div>
                
                <div className="col-xl-4 col-md-6">
                    {/**/}
                    <div className="service-item box-bg-shape wow fadeInUp" data-wow-delay="0.2s">
                        <div className="service-item-image">
                            <figure>
                                <img src="/demo-3/images/service-item-image-2.png" alt="" />
                            </figure>
                        </div>                            

                        {/**/}
                        <div className="service-item-content">
                            <h3><a href="/demo-3/services/details">Orthodontics</a></h3>
                            <p>Our orthodontic treatments, including brace, clear aligner gently straighten teeth.</p>
                            <ul>
                                <li>Braces</li>
                                <li>Clear Aligners</li>
                            </ul>
                        </div>
                        {/**/}
                        
                        {/**/}
                        <div className="box-readmore-btn">
                            <a href="/demo-3/services/details"><img src="/demo-3/images/arrow-white.svg" alt="" /></a>
                        </div>
                        {/**/}
                    </div>
                    {/**/}
                </div>

                <div className="col-xl-4 col-md-6">
                    {/**/}
                    <div className="service-item box-bg-shape wow fadeInUp" data-wow-delay="0.4s">
                        <div className="service-item-image">
                            <figure>
                                <img src="/demo-3/images/service-item-image-3.png" alt="" />
                            </figure>
                        </div>                            

                        {/**/}
                        <div className="service-item-content">
                            <h3><a href="/demo-3/services/details">Pediatric Dentistry</a></h3>
                            <p>Our orthodontic treatments, including brace, clear aligner gently straighten teeth.</p>
                            <ul>
                                <li>Braces</li>
                                <li>Clear Aligners</li>
                            </ul>
                        </div>
                        {/**/}
                        
                        {/**/}
                        <div className="box-readmore-btn">
                            <a href="/demo-3/services/details"><img src="/demo-3/images/arrow-white.svg" alt="" /></a>
                        </div>
                        {/**/}
                    </div>
                    {/**/}
                </div>

                <div className="col-xl-4 col-md-6">
                    {/**/}
                    <div className="service-item box-bg-shape wow fadeInUp" data-wow-delay="0.6s">
                        <div className="service-item-image">
                            <figure>
                                <img src="/demo-3/images/service-item-image-4.png" alt="" />
                            </figure>
                        </div>
                        {/**/}
                        <div className="service-item-content">
                            <h3><a href="/demo-3/services/details">Cosmetic Dentistry</a></h3>
                            <p>Our orthodontic treatments, including brace, clear aligner gently straighten teeth.</p>
                            <ul>
                                <li>Braces</li>
                                <li>Clear Aligners</li>
                            </ul>
                        </div>
                        {/**/}
                        
                        {/**/}
                        <div className="box-readmore-btn">
                            <a href="/demo-3/services/details"><img src="/demo-3/images/arrow-white.svg" alt="" /></a>
                        </div>
                        {/**/}
                    </div>
                    {/**/}
                </div>
                
                <div className="col-xl-4 col-md-6">
                    {/**/}
                    <div className="service-item box-bg-shape wow fadeInUp" data-wow-delay="0.8s">
                        <div className="service-item-image">
                            <figure>
                                <img src="/demo-3/images/service-item-image-5.png" alt="" />
                            </figure>
                        </div>                            

                        {/**/}
                        <div className="service-item-content">
                            <h3><a href="/demo-3/services/details">Restorative Dentistry</a></h3>
                            <p>Our orthodontic treatments, including brace, clear aligner gently straighten teeth.</p>
                            <ul>
                                <li>Braces</li>
                                <li>Clear Aligners</li>
                            </ul>
                        </div>
                        {/**/}
                        
                        {/**/}
                        <div className="box-readmore-btn">
                            <a href="/demo-3/services/details"><img src="/demo-3/images/arrow-white.svg" alt="" /></a>
                        </div>
                        {/**/}
                    </div>
                    {/**/}
                </div>

                <div className="col-xl-4 col-md-6">
                    {/**/}
                    <div className="service-item box-bg-shape wow fadeInUp" data-wow-delay="1s">
                        <div className="service-item-image">
                            <figure>
                                <img src="/demo-3/images/service-item-image-6.png" alt="" />
                            </figure>
                        </div>                            

                        {/**/}
                        <div className="service-item-content">
                            <h3><a href="/demo-3/services/details">Specialized Services</a></h3>
                            <p>Our orthodontic treatments, including brace, clear aligner gently straighten teeth.</p>
                            <ul>
                                <li>Braces</li>
                                <li>Clear Aligners</li>
                            </ul>
                        </div>
                        {/**/}
                        
                        {/**/}
                        <div className="box-readmore-btn">
                            <a href="/demo-3/services/details"><img src="/demo-3/images/arrow-white.svg" alt="" /></a>
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
