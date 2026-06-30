import Link from 'next/link';
import Image from 'next/image';
import { Star, Plus, Check, Phone, Mail, MapPin, Clock, ArrowRight, Search, Play } from 'lucide-react';
import { FaPinterestP, FaTwitter as Twitter, FaFacebookF as Facebook, FaInstagram as Instagram } from 'react-icons/fa';

export default function Page() {
  return (
    <>
{/*  Page Header Start  */}
    <div className="page-header bg-section dark-section">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-12">
                    {/*  Page Header Box Start  */}
                    <div className="page-header-box">
                        <h1 className="text-anime-style-3" data-cursor="-opaque">Our testimonials</h1>
                        <nav className="wow fadeInUp">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="/demo-3">home</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Our testimonials</li>
                            </ol>
                        </nav>
                    </div>
                    {/*  Page Header Box End  */}
                </div>
            </div>
        </div>
    </div>
    {/*  Page Header End  */}

    {/*  Page Testimonials Start  */}
    <div className="page-testimonials">
        <div className="container">
            <div className="row">
                <div className="col-xl-4 col-md-6">
                    {/*  Testimonial Item Start  */}
                    <div className="testimonial-item wow fadeInUp">
                        <div className="testimonial-item-header">
                            <div className="testimonial-rating">
                                <span className="fa-solid fa-star"></span>
                                <span className="fa-solid fa-star"></span>
                                <span className="fa-solid fa-star"></span>
                                <span className="fa-solid fa-star"></span>
                                <span className="fa-solid fa-star"></span>
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
                                    <h3>Savannah Nguyen</h3>
                                    <p>Chief Dentist</p>
                                </div>
                            </div> 
                            <div className="testimonial-quote">
                                <img src="/demo-3/images/testimonial-quote.svg" alt="" />
                            </div>
                        </div>
                    </div>
                    {/*  Testimonial Item End  */}
                </div>

                <div className="col-xl-4 col-md-6">
                    {/*  Testimonial Item Start  */}
                    <div className="testimonial-item wow fadeInUp" data-wow-delay="0.2s">
                        <div className="testimonial-item-header">
                            <div className="testimonial-rating">
                                <span className="fa-solid fa-star"></span>
                                <span className="fa-solid fa-star"></span>
                                <span className="fa-solid fa-star"></span>
                                <span className="fa-solid fa-star"></span>
                                <span className="fa-solid fa-star"></span>
                            </div>
                            <div className="testimonial-content">
                                <p>"I always hated the way my teeth looked in photos, but I was terrified of the dentist. From the moment I walked"</p>
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
                                    <h3>Bessie Cooper</h3>
                                    <p>Orthodontist</p>
                                </div>
                            </div> 
                            <div className="testimonial-quote">
                                <img src="/demo-3/images/testimonial-quote.svg" alt="" />
                            </div>
                        </div>
                    </div>
                    {/*  Testimonial Item End  */}
                </div>

                <div className="col-xl-4 col-md-6">
                    {/*  Testimonial Item Start  */}
                    <div className="testimonial-item wow fadeInUp" data-wow-delay="0.4s">
                        <div className="testimonial-item-header">
                            <div className="testimonial-rating">
                                <span className="fa-solid fa-star"></span>
                                <span className="fa-solid fa-star"></span>
                                <span className="fa-solid fa-star"></span>
                                <span className="fa-solid fa-star"></span>
                                <span className="fa-solid fa-star"></span>
                            </div>
                            <div className="testimonial-content">
                                <p>"Finding a dentist you can trust for the whole family is tough. My daughter was nervous about her first check-up,"</p>
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
                                    <h3>Kristin Watson</h3>
                                    <p>Consultant Dentist</p>
                                </div>
                            </div> 
                            <div className="testimonial-quote">
                                <img src="/demo-3/images/testimonial-quote.svg" alt="" />
                            </div>
                        </div>
                    </div>
                    {/*  Testimonial Item End  */}
                </div>

                <div className="col-xl-4 col-md-6">
                    {/*  Testimonial Item Start  */}
                    <div className="testimonial-item wow fadeInUp" data-wow-delay="0.6s">
                        <div className="testimonial-item-header">
                            <div className="testimonial-rating">
                                <span className="fa-solid fa-star"></span>
                                <span className="fa-solid fa-star"></span>
                                <span className="fa-solid fa-star"></span>
                                <span className="fa-solid fa-star"></span>
                                <span className="fa-solid fa-star"></span>
                            </div>
                            <div className="testimonial-content">
                                <p>"needed major dental work after years of neglect — multiple cavities, gum issues, and even missing teeth."</p>
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
                                    <h3>Cody Fisher</h3>
                                    <p>Pediatric Dentist</p>
                                </div>
                            </div> 
                            <div className="testimonial-quote">
                                <img src="/demo-3/images/testimonial-quote.svg" alt="" />
                            </div>
                        </div>
                    </div>
                    {/*  Testimonial Item End  */}
                </div>

                <div className="col-xl-4 col-md-6">
                    {/*  Testimonial Item Start  */}
                    <div className="testimonial-item wow fadeInUp" data-wow-delay="0.8s">
                        <div className="testimonial-item-header">
                            <div className="testimonial-rating">
                                <span className="fa-solid fa-star"></span>
                                <span className="fa-solid fa-star"></span>
                                <span className="fa-solid fa-star"></span>
                                <span className="fa-solid fa-star"></span>
                                <span className="fa-solid fa-star"></span>
                            </div>
                            <div className="testimonial-content">
                                <p>"I avoided going to the dentist for almost ten years because of bad childhood experiences. When I finally decided"</p>
                            </div>
                        </div>
                        <div className="testimonial-body">
                            <div className="testimonial-author">
                                <div className="author-image">
                                    <figure className="image-anime">
                                        <img src="/demo-3/images/author-5.jpg" alt="" />
                                    </figure>
                                </div>
                                <div className="author-content">
                                    <h3>Darlene Robertson</h3>
                                    <p>Public Health Dentist</p>
                                </div>
                            </div> 
                            <div className="testimonial-quote">
                                <img src="/demo-3/images/testimonial-quote.svg" alt="" />
                            </div>
                        </div>
                    </div>
                    {/*  Testimonial Item End  */}
                </div>

                <div className="col-xl-4 col-md-6">
                    {/*  Testimonial Item Start  */}
                    <div className="testimonial-item wow fadeInUp" data-wow-delay="1s">
                        <div className="testimonial-item-header">
                            <div className="testimonial-rating">
                                <span className="fa-solid fa-star"></span>
                                <span className="fa-solid fa-star"></span>
                                <span className="fa-solid fa-star"></span>
                                <span className="fa-solid fa-star"></span>
                                <span className="fa-solid fa-star"></span>
                            </div>
                            <div className="testimonial-content">
                                <p>"I was nervous about getting dental implants, but Dr. Webb's team made the whole process so easy and stress-free."</p>
                            </div>
                        </div>
                        <div className="testimonial-body">
                            <div className="testimonial-author">
                                <div className="author-image">
                                    <figure className="image-anime">
                                        <img src="/demo-3/images/author-6.jpg" alt="" />
                                    </figure>
                                </div>
                                <div className="author-content">
                                    <h3>Robert Fox</h3>
                                    <p>Dental Surgeon</p>
                                </div>
                            </div> 
                            <div className="testimonial-quote">
                                <img src="/demo-3/images/testimonial-quote.svg" alt="" />
                            </div>
                        </div>
                    </div>
                    {/*  Testimonial Item End  */}
                </div>
            </div>
        </div>
    </div>
    {/*  Page Testimonials End  */}

    {/*  Why Choose Us Section Start  */}
    <div className="why-choose-us bg-section dark-section">
        <div className="container">
            <div className="row section-row">
                <div className="col-lg-12">
                    {/*  Section Title Start  */}
                    <div className="section-title section-title-center">
                        <h3 className="wow fadeInUp">Why choose us</h3>
                        <h2 className="text-anime-style-3" data-cursor="-opaque">Delivering gentle dental care with experience and trust</h2>
                    </div>
                    {/*  Section Title End  */}
                </div>
            </div>

            <div className="row align-items-center">
                <div className="col-lg-4 col-md-6 order-1">
                    {/*  Why Choose Item List Start  */}
                    <div className="why-choose-item-list">
                        {/*  Why Choose Item Start  */}
                        <div className="why-choose-item wow fadeInUp" data-wow-delay="0.2s">
                            <div className="icon-box">
                                <img src="/demo-3/images/icon-why-choose-1.svg" alt="" />
                            </div>
                            <div className="why-choose-item-content">
                                <h3>State-of-Art Technology</h3>
                                <p>We use advanced dental technology to ensure precise, safe, and comfortable treatments for every patient.</p>
                            </div>
                        </div>
                        {/*  Why Choose Item End  */}

                        {/*  Why Choose Item Start  */}
                        <div className="why-choose-item wow fadeInUp" data-wow-delay="0.4s">
                            <div className="icon-box">
                                <img src="/demo-3/images/icon-why-choose-2.svg" alt="" />
                            </div>
                            <div className="why-choose-item-content">
                                <h3>Patient-Centered Approach</h3>
                                <p>We use advanced dental technology to ensure precise, safe, and comfortable treatments for every patient.</p>
                            </div>
                        </div>
                        {/*  Why Choose Item End  */}
                    </div>
                    {/*  Why Choose Item List End  */}
                </div>

                <div className="col-lg-4 order-lg-2 order-md-3 order-2">
                    {/*  Why Choose Image Start  */}
                    <div className="why-choose-image wow fadeInUp" data-wow-delay="0.2s">
                        <figure>
                            <img src="/demo-3/images/why-choose-image.png" alt="" />
                        </figure>
                    </div>
                    {/*  Why Choose Image End  */}
                </div>

                <div className="col-lg-4 col-md-6 order-lg-2 order-md-2 order-3">
                    {/*  Why Choose Item List Start  */}
                    <div className="why-choose-item-list">
                        {/*  Why Choose Item Start  */}
                        <div className="why-choose-item wow fadeInUp" data-wow-delay="0.2s">
                            <div className="icon-box">
                                <img src="/demo-3/images/icon-why-choose-3.svg" alt="" />
                            </div>
                            <div className="why-choose-item-content">
                                <h3>Gentle Compassionate Care</h3>
                                <p>We use advanced dental technology to ensure precise, safe, and comfortable treatments for every patient.</p>
                            </div>
                        </div>
                        {/*  Why Choose Item End  */}

                        {/*  Why Choose Item Start  */}
                        <div className="why-choose-item wow fadeInUp" data-wow-delay="0.4s">
                            <div className="icon-box">
                                <img src="/demo-3/images/icon-why-choose-4.svg" alt="" />
                            </div>
                            <div className="why-choose-item-content">
                                <h3>Family-Friendly Environment</h3>
                                <p>We use advanced dental technology to ensure precise, safe, and comfortable treatments for every patient.</p>
                            </div>
                        </div>
                        {/*  Why Choose Item End  */}
                    </div>
                    {/*  Why Choose Item List End  */}
                </div>
            </div>
        </div>
    </div>
    {/*  Why Choose Us Section End  */}

    {/*  What We Do Section Start  */}
    <div className="what-we-do">
        <div className="container">
            <div className="row section-row">
                <div className="col-lg-12">
                    {/*  Section Title Start  */}
                    <div className="section-title section-title-center">
                        <h3 className="wow fadeInUp">what we do</h3>
                        <h2 className="text-anime-style-3" data-cursor="-opaque">Personalized dentistry services for every stage of life</h2>
                    </div>
                    {/*  Section Title End  */}
                </div>
            </div>

            <div className="row">
                <div className="col-lg-4 col-md-6">
                    {/*  What We Do Item Start  */}
                    <div className="what-we-do-item wow fadeInUp" data-wow-delay="0.2s">
                        <div className="what-we-do-image">
                            <figure>
                                <img src="/demo-3/images/what-we-do-image-1.png" alt="" />
                            </figure>
                        </div>
                        <div className="what-we-do-content">
                            <h3>Restorative Treatments</h3>
                            <p>We restore damaged or missing teeth with crowns, bridges, and implants, bringing.</p>
                        </div>
                    </div>
                    {/*  What We Do Item End  */}
                </div>

                <div className="col-lg-4 col-md-6">
                    {/*  What We Do Item Start  */}
                    <div className="what-we-do-item wow fadeInUp" data-wow-delay="0.4s">
                        <div className="what-we-do-content">
                            <h3>Progress Treatments</h3>
                            <p>We restore damaged or missing teeth with crowns, bridges, and implants, bringing.</p>
                        </div>                        
                        <div className="what-we-do-image">
                            <figure>
                                <img src="/demo-3/images/what-we-do-image-2.png" alt="" />
                            </figure>
                        </div>
                    </div>
                    {/*  What We Do Item End  */}
                </div>

                <div className="col-lg-4 col-md-6">
                    {/*  What We Do Item Start  */}
                    <div className="what-we-do-item wow fadeInUp" data-wow-delay="0.6s">
                        <div className="what-we-do-image">
                            <figure>
                                <img src="/demo-3/images/what-we-do-image-3.png" alt="" />
                            </figure>
                        </div>
                        <div className="what-we-do-content">
                            <h3>Appointment Treatment</h3>
                            <p>We restore damaged or missing teeth with crowns, bridges, and implants, bringing.</p>
                        </div>
                    </div>
                    {/*  What We Do Item End  */}
                </div>

                <div className="col-lg-12">
                    {/*  Section Footer Text Start  */}
                    <div className="section-footer-text wow fadeInUp" data-wow-delay="0.8s">
                        <p>Join us and create smiles that truly inspire confidence. <a href="/demo-3">Contact Us</a></p>                            
                        <ul>
                            <li><span className="counter">4.9</span>/5</li>
                            <li><span className="fa-solid fa-star"></span></li>
                            <li>Our 4k Patient Review</li>
                        </ul>
                    </div>
                    {/*  Section Footer Text End  */}
                </div>
            </div>
        </div>
    </div>
    {/*  What We Do Section End  */}

    {/*  Our Expert Section Start  */}
    <div className="our-expert bg-section dark-section parallaxie">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    {/*  Our Expert Section Start  */}
                    <div className="our-expert-section">
                        {/*  Our Expert Content Start  */}
                        <div className="our-expert-content">
                            {/*  Section Title Start  */}
                            <div className="section-title">
                                <h2 className="text-anime-style-3" data-cursor="-opaque">Expert dentistry dedicated to lifelong oral health</h2>
                            </div>
                            {/*  Section Title End  */}

                            {/*  Our Expert List Start  */}
                            <div className="our-expert-list wow fadeInUp" data-wow-delay="0.2s">
                                <ul>
                                    <li>General Dentistry</li>
                                    <li>Emergency Dentistry</li>
                                </ul>
                            </div>
                            {/*  Our Expert List End  */}
                        </div>
                        {/*  Our Expert Content End  */}

                        {/*  Our Expert Box Start  */}
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
                        {/*  Our Expert Box End  */}
                    </div>
                    {/*  Our Expert Section End  */}
                </div>
            </div>
        </div>
    </div>
    {/*  Our Expert Section End  */}

    {/*  Our FAQs Section Start  */}
    <div className="our-faqs">
        <div className="container">
            <div className="row">
                <div className="col-xl-6">
                    {/*  FAQs Content Start  */}
                    <div className="faqs-content">
                        {/*  Section Title Start  */}
                        <div className="section-title">
                            <h3 className="wow fadeInUp">FAQs</h3>
                            <h2 className="text-anime-style-3" data-cursor="-opaque">Frequently asked questions about your dental care</h2>
                        </div>
                        {/*  Section Title End  */}

                        {/*  FAQ CTA Box Start  */}
                        <div className="faq-cta-box wow fadeInUp" data-wow-delay="0.2s">
                            {/*  FAQ CTA Content Start  */}
                            <div className="faq-cta-content">
                                <h3>Still have a dental question?</h3>
                                <p>Can't find the answer you're looking for? Send us a message, and our dental team.</p>
                            </div>
                            {/*  FAQ CTA Content End  */}

                            {/*  FAQ CTA Button Start  */}
                            <div className="faq-cta-btn">
                                <a href="/demo-3" className="btn-default">Make an Appointment</a>
                            </div>
                            {/*  FAQ CTA Button End  */}
                        </div>
                        {/*  FAQ CTA Box End  */}
                    </div>
                    {/*  FAQs Content End  */}
                </div>

                <div className="col-xl-6">
                    {/*  FAQ Accordion Start  */}
                    <div className="faq-accordion" id="accordion">
                        {/*  FAQ Item Start  */}
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
                        {/*  FAQ Item End  */}

                        {/*  FAQ Item Start  */}
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
                        {/*  FAQ Item End  */}

                        {/*  FAQ Item Start  */}
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
                        {/*  FAQ Item End  */}

                        {/*  FAQ Item Start  */}
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
                        {/*  FAQ Item End  */}

                        {/*  FAQ Item Start  */}
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
                        {/*  FAQ Item End  */}
                    </div>
                    {/*  FAQ Accordion End  */}
                </div>
            </div>
        </div>
    </div>
    {/*  Our FAQs Section End  */}
    </>
  );
}
