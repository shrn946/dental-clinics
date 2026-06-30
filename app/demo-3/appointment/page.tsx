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
                        <h1 className="text-anime-style-3" data-cursor="-opaque">Book appointment</h1>
                        <nav className="wow fadeInUp">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="/demo-3">home</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Book appointment</li>
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
    <div className="page-book-appointment">
        <div className="container">
            <div className="row">
                <div className="col-xl-6">
                    {/**/}
                    <div className="appointment-content-box">
                        {/**/}
                        <div className="section-title">
                            <h3 className="wow fadeInUp">Booking now</h3>
                            <h2 className="text-anime-style-3" data-cursor="-opaque">Make an appointment</h2>
                            <p className="wow fadeInUp" data-wow-delay="0.2s">Your healthy smile starts with a simple click. Book your appointment today and let our experts provide the care you deserve</p>
                        </div>
                        {/**/}

                        {/**/}
                        <div className="appointment-form wow fadeInUp" data-wow-delay="0.4s">
                            <form id="appointmentForm" action="#" method="POST" data-toggle="validator">
                                <div className="row">                                
                                    <div className="form-group col-md-6 mb-4">
                                        <input type="text" name="fname" className="form-control" id="fname" placeholder="First Name" required />
                                        <div className="help-block with-errors"></div>
                                    </div>
                                    
                                    <div className="form-group col-md-6 mb-4">
                                        <input type="text" name="lname" className="form-control" id="lname" placeholder="Last Name" required />
                                        <div className="help-block with-errors"></div>
                                    </div>

                                    <div className="form-group col-md-12 mb-4">
                                        <input type="email" name ="email" className="form-control" id="email" placeholder="E-mail" required />
                                        <div className="help-block with-errors"></div>
                                    </div>

                                    <div className="form-group col-md-12 mb-4">
                                        <input type="text" name="phone" className="form-control" id="phone" placeholder="Phone No." required />
                                        <div className="help-block with-errors"></div>
                                    </div>                                 
                                                                        
                                    <div className="form-group col-md-6 mb-4">
                                        <select name="services" className="form-control form-select" id="services" required defaultValue="">
                                            <option value="" disabled>Select a Service</option>
                                            <option value="pediatric_dentistry">Pediatric Dentistry</option>
                                            <option value="orthodontics">Orthodontics</option>
                                            <option value="pediatric_dentistry">Pediatric Dentistry</option>
                                            <option value="cosmetic_dentistry">Cosmetic Dentistry</option>
                                            <option value="restorative_dentistry">Restorative Dentistry</option>
                                            <option value="specialized_services">Specialized Services</option>
                                        </select>
                                        <div className="help-block with-errors"></div>
                                    </div>
                
                                    <div className="form-group col-md-6 mb-4">
                                        <input type="date" name="date" className="form-control" id="date" required />
                                        <div className="help-block with-errors"></div>
                                    </div>
                
                                    <div className="col-md-12">
                                        <div className="appointment-form-btn">
                                            <button type="submit" className="btn-default"><span>Submit Message</span></button>
                                            <div id="msgSubmit" className="h3 hidden"></div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        {/**/}
                    </div>
                    {/**/}
                </div>

                <div className="col-xl-6">
                    {/**/}
                    <div className="appointment-image-box wow fadeInUp" data-wow-delay="0.2s">
                        <div className="appointment-image">
                            <figure className="image-anime">
                                <img src="/demo-3/images/appointment-image.jpg" alt="" />
                            </figure>
                        </div>

                        <div className="appointment-timing-box">
                            <div className="appointment-timing-header">
                                <h3>Working Hours</h3>
                                <img src="/demo-3/images/icon-clock-white.svg" alt="" />
                            </div>
                            <div className="appointment-timing-body">
                                <ul>
                                    <li><span>Monday - Saturday:</span> 8 AM -7 PM</li>
                                    <li><span>Saturday:</span> Closed</li>
                                </ul>
                            </div>
                        </div>
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
