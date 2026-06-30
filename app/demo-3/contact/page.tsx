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
                        <h1 className="text-anime-style-3" data-cursor="-opaque">Contact us</h1>
                        <nav className="wow fadeInUp">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="/demo-3">home</a></li>
                                <li className="breadcrumb-item active" aria-current="page">contact us</li>
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
    <div className="page-contact-us">
        <div className="container">
            <div className="row">
                <div className="col-xl-6">
                    {/**/}
                    <div className="contact-us-form">
                        {/**/}
                        <div className="section-title">
                            <h3 className="wow fadeInUp">get in touch</h3>
                            <h2 className="text-anime-style-3" data-cursor="-opaque">Reach out to schedule your next dental visit</h2>
                            <p className="wow fadeInUp" data-wow-delay="0.2s">Whether you have a question, need expert advice, or are ready to book your next appointment, our team is here to help. by phone, email,</p>
                        </div>
                        {/**/}

                        {/**/}
                        <div className="contact-form">
                            <form id="contactForm" action="#" method="POST" data-toggle="validator" className="wow fadeInUp" data-wow-delay="0.2s">
                                <div className="row">
                                    <div className="form-group col-md-6 mb-4">
                                        <label className="form-label">First Name*</label>
                                        <input type="text" name="fname" className="form-control" id="fname" placeholder="Enter First Name *" required />
                                        <div className="help-block with-errors"></div>
                                    </div>

                                    <div className="form-group col-md-6 mb-4">
                                        <label className="form-label">Last Name*</label>
                                        <input type="text" name="lname" className="form-control" id="lname" placeholder="Enter Last Name *" required />
                                        <div className="help-block with-errors"></div>
                                    </div>

                                    <div className="form-group col-md-6 mb-4">
                                        <label className="form-label">Email Address*</label>
                                        <input type="email" name ="email" className="form-control" id="email" placeholder="Enter Email Address *" required />
                                        <div className="help-block with-errors"></div>
                                    </div>

                                    <div className="form-group col-md-6 mb-4">
                                        <label className="form-label">Phone Number*</label>
                                        <input type="text" name="phone" className="form-control" id="phone" placeholder="Enter Phone Number *" required />
                                        <div className="help-block with-errors"></div>
                                    </div>

                                    <div className="form-group col-md-12 mb-5">
                                        <label className="form-label">Message</label>
                                        <textarea name="message" className="form-control" id="message" rows={4} placeholder="Write message..."></textarea>
                                        <div className="help-block with-errors"></div>
                                    </div>

                                    <div className="col-md-12">
                                        <button type="submit" className="btn-default"><span>send message</span></button>
                                        <div id="msgSubmit" className="h3 hidden"></div>
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
                    <div className="contact-image-box">
                        {/**/}
                        <div className="contact-us-image">
                            <figure className="image-anime">
                                <img src="/demo-3/images/contact-us-img.jpg" alt="" />
                            </figure>
                        </div>
                        {/**/}

                        {/**/}
                        <div className="contact-info-list">
                            {/**/}
                            <div className="contact-info-item wow fadeInUp">
                                {/**/}
                                <div className="icon-box">
                                    <img src="/demo-3/images/icon-phone-white.svg" alt="" />
                                </div>
                                {/**/}

                                {/**/}
                                <div className="contact-info-content">
                                    <h3>Phone Number</h3>
                                    <p><a href="tel:+789345601">+(0) 789345601</a></p>
                                </div>
                                {/**/}
                            </div>
                            {/**/}

                            {/**/}
                            <div className="contact-info-item wow fadeInUp" data-wow-delay="0.2s">
                                {/**/}
                                <div className="icon-box">
                                    <img src="/demo-3/images/icon-mail-white.svg" alt="" />
                                </div>
                                {/**/}

                                {/**/}
                                <div className="contact-info-content">
                                    <h3>Email Address</h3>
                                    <p><a href="mailto:domain@gmail.com">domain@gmail.com</a></p>
                                </div>
                                {/**/}
                            </div>
                            {/**/}

                            {/**/}
                            <div className="contact-info-item location-info-item wow fadeInUp" data-wow-delay="0.4s">
                                {/**/}
                                <div className="icon-box">
                                    <img src="/demo-3/images/icon-location-white.svg" alt="" />
                                </div>
                                {/**/}

                                {/**/}
                                <div className="contact-info-content">
                                    <h3>Our Location</h3>
                                    <p>Ground Floor, Crescent Medical Plaza,Opposite Grand City Mall, Palm Street,Miami, FL 33101, USA</p>
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

    {/**/}
    <div className="google-map">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    {/**/}
                    <div className="google-map-iframe">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96737.10567336128!2d-74.08535042841811!3d40.739265258395164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1703158537552!5m2!1sen!2sin" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
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
