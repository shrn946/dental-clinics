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
                        <h1 className="text-anime-style-3" data-cursor="-opaque">Pediatric dentistry</h1>
                        <nav className="wow fadeInUp">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="/demo-3">home</a></li>
                                <li className="breadcrumb-item"><a href="/demo-3/services">services</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Pediatric dentistry</li>
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
    <div className="page-service-single">
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    {/**/}
                    <div className="page-single-sidebar">
                        {/**/}
                        <div className="page-category-list wow fadeInUp">
                            <h3>Discover Our Services</h3>
                            <ul>
                                <li><a href="#">Orthodontics</a></li>
                                <li><a href="#">Cosmetic Dentistry</a></li>
                                <li><a href="#">Restorative Dentistry</a></li>
                                <li><a href="#">Specialized Services</a></li>
                                <li><a href="#">Preventive Dentistry</a></li>
                            </ul>
                        </div>
                        {/**/}

                        {/**/}
                        <div className="sidebar-cta-box wow fadeInUp" data-wow-delay="0.25s">
                            {/**/}
                            <div className="sidebar-cta-header">
                                <img src="/demo-3/images/icon-clock-white.svg" alt="" />
                                <h3>Working Hours :</h3>
                            </div>
                            {/**/}
                            
                            {/**/}
                            <div className="sidebar-cta-body">
                                {/**/}
                                <div className="sidebar-cta-list">
                                    <ul>
                                        <li>Monday - Friday: <span>8AM - 7PM</span></li>
                                        <li>Saturday: <span>8AM - 5PM</span></li>
                                        <li>Sunday: <span>Closed</span></li>
                                    </ul>
                                </div>
                                {/**/}
                                
                                {/**/}
                                <div className="sidebar-cta-btn">
                                    <a href="/demo-3/appointment" className="btn-default">Make an Appointment</a>
                                </div>
                                {/**/}
                            </div>
                            {/**/}
                        </div>
                        {/**/}
                    </div>
                </div>

                <div className="col-lg-8">
                    {/**/}
                    <div className="service-single-content">
                        {/**/}
                        <div className="page-single-image">
                            <figure className="image-anime reveal">
                                <img src="/demo-3/images/service-single-image.jpg" alt="" />
                            </figure>
                        </div>
                        {/**/}
                        
                        {/**/}
                        <div className="service-entry">
                            <p className="wow fadeInUp">Our specialized services are designed to handle complex dental needs with precision and care. Whether it's pediatric dentistry for your little ones, TMJ therapy to relieve jaw discomfort, oral cancer screenings for early detection, or urgent emergency care, our expert team delivers advanced solutions tailored to your unique situation. With a focus on accuracy, comfort, and long-term results, we go beyond general dentistry.</p>

                            {/**/}
                            <div className="service-entry-item-list">
                                {/**/}
                                <div className="service-entry-item wow fadeInUp" data-wow-delay="0.2s">
                                    <div className="icon-box">
                                        <img src="/demo-3/images/icon-service-entry-item-1.svg" alt="" />
                                    </div>
                                    <div className="service-entry-item-content">
                                        <h3>TMJ & Bite Therapy</h3>
                                        <p>TMJ & Bite Therapy focuses on diagnosing and treating jaw joint disorders, teeth alignment.</p>
                                        <ul>
                                            <li>AskADentist</li>
                                            <li>DentalCareHelp</li>
                                        </ul>
                                    </div>
                                </div>
                                {/**/}

                                {/**/}
                                <div className="service-entry-item wow fadeInUp" data-wow-delay="0.4s">
                                    <div className="icon-box">
                                        <img src="/demo-3/images/icon-service-entry-item-2.svg" alt="" />
                                    </div>
                                    <div className="service-entry-item-content">
                                        <h3>Oral Cancer Screening</h3>
                                        <p>TMJ & Bite Therapy focuses on diagnosing and treating jaw joint disorders, teeth alignment.</p>
                                        <ul>
                                            <li>HealthySmile</li>
                                            <li>SmileSupport</li>
                                        </ul>
                                    </div>
                                </div>
                                {/**/}
                            </div>
                            {/**/}

                            {/**/}
                            <div className="service-why-choose-box">
                                <h2 className="text-anime-style-3">Why Choose This Service</h2>
                                <p className="wow fadeInUp">Choosing the right dental service is about more than just fixing a problem—it's about trusting a team that , technology, and personalized care. We focus on delivering precise, comfortable, and lasting results that fit your unique needs.</p>

                                {/**/}
                                <div className="service-why-choose-body">
                                    {/**/}
                                    <div className="service-why-choose-list">
                                        {/**/}
                                        <div className="service-why-choose-item wow fadeInUp" data-wow-delay="0.2s">
                                            <div className="icon-box">
                                                <img src="/demo-3/images/icon-service-why-choose-1.svg" alt="" />
                                            </div>
                                            <div className="service-why-choose-item-content">
                                                <h3>Advanced Technology</h3>
                                                <p>We use the latest diagnostic tools and treatment techniques to ensure accurate.</p>
                                            </div>
                                        </div>
                                        {/**/}

                                        {/**/}
                                        <div className="service-why-choose-item wow fadeInUp" data-wow-delay="0.4s">
                                            <div className="icon-box">
                                                <img src="/demo-3/images/icon-service-why-choose-2.svg" alt="" />
                                            </div>
                                            <div className="service-why-choose-item-content">
                                                <h3>Personalized Treatment:</h3>
                                                <p>Every patient receives a customized treatment plan tailored to their specific needs.</p>
                                            </div>
                                        </div>
                                        {/**/}
                                        
                                        {/**/}
                                        <div className="service-why-choose-item wow fadeInUp" data-wow-delay="0.6s">
                                            <div className="icon-box">
                                                <img src="/demo-3/images/icon-service-why-choose-3.svg" alt="" />
                                            </div>
                                            <div className="service-why-choose-item-content">
                                                <h3>Patient Comfort</h3>
                                                <p>We focus on providing a gentle, stress-free experience for all our patients.</p>
                                            </div>
                                        </div>
                                        {/**/}
                                    </div>
                                    {/**/}

                                    {/**/}
                                    <div className="service-why-choose-imgae">
                                        <figure className="image-anime reveal">
                                            <img src="/demo-3/images/service-why-choose-image.jpg" alt="" />
                                        </figure>
                                    </div>
                                    {/**/}
                                </div>
                                {/**/}
                            </div>
                            {/**/}

                            {/**/}
                            <div className="service-purpose-box">
                                <h2 className="text-anime-style-3">Purpose driven goals for every path</h2>
                                <p className="wow fadeInUp">Choosing the right dental service is about more than just fixing a problem—it's about trusting a team that , technology, and personalized care. We focus on delivering precise, comfortable, and lasting results that fit your unique needs.</p>

                                {/**/}
                                <div className="service-purpose-images">
                                    {/**/}
                                    <div className="service-purpose-img">
                                        <figure className="image-anime reveal">
                                            <img src="/demo-3/images/service-purpose-img-1.jpg" alt="" />
                                        </figure>
                                    </div>
                                    {/**/}

                                    {/**/}
                                    <div className="service-purpose-img">
                                        <figure className="image-anime reveal">
                                            <img src="/demo-3/images/service-purpose-img-2.jpg" alt="" />
                                        </figure>
                                    </div>
                                    {/**/}
                                </div>
                                {/**/}
                            </div>
                            {/**/}

                            {/**/}
                            <div className="service-care-box">
                                <h2 className="text-anime-style-3">Dedicated care for every patient.</h2>
                                <p className="wow fadeInUp">Our goal is to deliver dental care that exceeds expectations at every step. We use advanced technology, techniques, and a patient-centered approach to ensure accuracy, comfort, and long-term results. </p>

                                {/**/}
                                <div className="service-care-list wow fadeInUp" data-wow-delay="0.2s">
                                    <ul>
                                        <li>Experienced dental professionals you can trust</li>
                                        <li>Stric quality safety standard in every procedur</li>
                                        <li>Long-lasting results designed to protect</li>
                                        <li>Focus on patient comfort and stress-free visits</li>
                                    </ul>
                                </div>
                                {/**/}
                            </div>
                            {/**/}
                        </div>
                        {/**/}

                        {/**/}
                        <div className="page-single-faqs">
                            {/**/}
                            <div className="section-title">
                                <h2 className="text-anime-style-3" data-cursor="-opaque">Frequently asked questions</h2>
                            </div>
                            {/**/}

                            {/**/}
                            <div className="faq-accordion" id="faqaccordion">
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
