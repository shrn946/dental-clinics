import Link from 'next/link';
import Image from 'next/image';
import { Star, Plus, Check, Phone, Mail, MapPin, Clock, ArrowRight, Search, Play } from 'lucide-react';
import { FaPinterestP, FaTwitter as Twitter, FaFacebookF as Facebook, FaInstagram as Instagram, FaLinkedinIn } from 'react-icons/fa';

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
                        <h1 className="text-anime-style-3" data-cursor="-opaque">Our team</h1>
                        <nav className="wow fadeInUp">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="/demo-3">home</a></li>
                                <li className="breadcrumb-item active" aria-current="page">our team</li>
                            </ol>
                        </nav>
                    </div>
                    {/*  Page Header Box End  */}
                </div>
            </div>
        </div>
    </div>
    {/*  Page Header End  */}

    {/*  Page Team Start  */}
    <div className="page-team">
        <div className="container">
            <div className="row">
                <div className="col-xl-3 col-md-6">
                    {/*  Team Item Start  */}
                    <div className="team-item wow fadeInUp">
                        <div className="team-image box-bg-shape">
                            <figure>
                                <img src="/demo-3/images/team-1.png" alt="" />
                            </figure>
                            <div className="team-social-list">
                                <div className="team-social-icon">
                                    <ul>
                                        <li><a href="#"><Facebook /></a></li>
                                        <li><a href="#"><Twitter /></a></li>
                                        <li><a href="#"><FaLinkedinIn /></a></li>
                                    </ul>
                                </div>

                                <div className="team-readmore-btn">
                                    <a href="#"><img src="/demo-3/images/icon-share.svg" alt="" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="team-content">
                            <h3><a href="/demo-3">Dr.Savannah Nguyen</a></h3>
                            <p>Chief Dentist</p>
                        </div>
                    </div>
                    {/*  Team Item End  */}
                </div>
                
                <div className="col-xl-3 col-md-6">
                    {/*  Team Item Start  */}
                    <div className="team-item wow fadeInUp" data-wow-delay="0.2s">
                        <div className="team-image box-bg-shape">
                            <figure>
                                <img src="/demo-3/images/team-2.png" alt="" />
                            </figure>
                            <div className="team-social-list">
                                <div className="team-social-icon">
                                    <ul>
                                        <li><a href="#"><Facebook /></a></li>
                                        <li><a href="#"><Twitter /></a></li>
                                        <li><a href="#"><FaLinkedinIn /></a></li>
                                    </ul>
                                </div>

                                <div className="team-readmore-btn">
                                    <a href="#"><img src="/demo-3/images/icon-share.svg" alt="" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="team-content">
                            <h3><a href="/demo-3">Dr.Theresa Webb</a></h3>
                            <p>Implantologist</p>
                        </div>
                    </div>
                    {/*  Team Item End  */}
                </div>
                
                <div className="col-xl-3 col-md-6">
                    {/*  Team Item Start  */}
                    <div className="team-item wow fadeInUp" data-wow-delay="0.4s">
                        <div className="team-image box-bg-shape">
                            <figure>
                                <img src="/demo-3/images/team-3.png" alt="" />
                            </figure>
                            <div className="team-social-list">
                                <div className="team-social-icon">
                                    <ul>
                                        <li><a href="#"><Facebook /></a></li>
                                        <li><a href="#"><Twitter /></a></li>
                                        <li><a href="#"><FaLinkedinIn /></a></li>
                                    </ul>
                                </div>

                                <div className="team-readmore-btn">
                                    <a href="#"><img src="/demo-3/images/icon-share.svg" alt="" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="team-content">
                            <h3><a href="/demo-3">Dr.Jenny Wilson</a></h3>
                            <p>Pediatric Dentist</p>
                        </div>
                    </div>
                    {/*  Team Item End  */}
                </div>
                
                <div className="col-xl-3 col-md-6">
                    {/*  Team Item Start  */}
                    <div className="team-item wow fadeInUp" data-wow-delay="0.6s">
                        <div className="team-image box-bg-shape">
                            <figure>
                                <img src="/demo-3/images/team-4.png" alt="" />
                            </figure>
                            <div className="team-social-list">
                                <div className="team-social-icon">
                                    <ul>
                                        <li><a href="#"><Facebook /></a></li>
                                        <li><a href="#"><Twitter /></a></li>
                                        <li><a href="#"><FaLinkedinIn /></a></li>
                                    </ul>
                                </div>

                                <div className="team-readmore-btn">
                                    <a href="#"><img src="/demo-3/images/icon-share.svg" alt="" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="team-content">
                            <h3><a href="/demo-3">Dr.Ronald Richards</a></h3>
                            <p>Gum Care Specialist</p>
                        </div>
                    </div>
                    {/*  Team Item End  */}
                </div>

                <div className="col-xl-3 col-md-6">
                    {/*  Team Item Start  */}
                    <div className="team-item wow fadeInUp" data-wow-delay="0.8s">
                        <div className="team-image box-bg-shape">
                            <figure>
                                <img src="/demo-3/images/team-5.png" alt="" />
                            </figure>
                            <div className="team-social-list">
                                <div className="team-social-icon">
                                    <ul>
                                        <li><a href="#"><Facebook /></a></li>
                                        <li><a href="#"><Twitter /></a></li>
                                        <li><a href="#"><FaLinkedinIn /></a></li>
                                    </ul>
                                </div>

                                <div className="team-readmore-btn">
                                    <a href="#"><img src="/demo-3/images/icon-share.svg" alt="" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="team-content">
                            <h3><a href="/demo-3">dr.Ralph Edwards</a></h3>
                            <p>Lead Dentist</p>
                        </div>
                    </div>
                    {/*  Team Item End  */}
                </div>
                
                <div className="col-xl-3 col-md-6">
                    {/*  Team Item Start  */}
                    <div className="team-item wow fadeInUp" data-wow-delay="1s">
                        <div className="team-image box-bg-shape">
                            <figure>
                                <img src="/demo-3/images/team-6.png" alt="" />
                            </figure>
                            <div className="team-social-list">
                                <div className="team-social-icon">
                                    <ul>
                                        <li><a href="#"><Facebook /></a></li>
                                        <li><a href="#"><Twitter /></a></li>
                                        <li><a href="#"><FaLinkedinIn /></a></li>
                                    </ul>
                                </div>

                                <div className="team-readmore-btn">
                                    <a href="#"><img src="/demo-3/images/icon-share.svg" alt="" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="team-content">
                            <h3><a href="/demo-3">Dr.Floyd Miles</a></h3>
                            <p>Cosmetic Specialist</p>
                        </div>
                    </div>
                    {/*  Team Item End  */}
                </div>
                
                <div className="col-xl-3 col-md-6">
                    {/*  Team Item Start  */}
                    <div className="team-item wow fadeInUp" data-wow-delay="1.2s">
                        <div className="team-image box-bg-shape">
                            <figure>
                                <img src="/demo-3/images/team-7.png" alt="" />
                            </figure>
                            <div className="team-social-list">
                                <div className="team-social-icon">
                                    <ul>
                                        <li><a href="#"><Facebook /></a></li>
                                        <li><a href="#"><Twitter /></a></li>
                                        <li><a href="#"><FaLinkedinIn /></a></li>
                                    </ul>
                                </div>

                                <div className="team-readmore-btn">
                                    <a href="#"><img src="/demo-3/images/icon-share.svg" alt="" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="team-content">
                            <h3><a href="/demo-3">Dr.Kathryn Murphy</a></h3>
                            <p>Pediatric Dentist</p>
                        </div>
                    </div>
                    {/*  Team Item End  */}
                </div>
                
                <div className="col-xl-3 col-md-6">
                    {/*  Team Item Start  */}
                    <div className="team-item wow fadeInUp" data-wow-delay="1.4s">
                        <div className="team-image box-bg-shape">
                            <figure>
                                <img src="/demo-3/images/team-8.png" alt="" />
                            </figure>
                            <div className="team-social-list">
                                <div className="team-social-icon">
                                    <ul>
                                        <li><a href="#"><Facebook /></a></li>
                                        <li><a href="#"><Twitter /></a></li>
                                        <li><a href="#"><FaLinkedinIn /></a></li>
                                    </ul>
                                </div>

                                <div className="team-readmore-btn">
                                    <a href="#"><img src="/demo-3/images/icon-share.svg" alt="" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="team-content">
                            <h3><a href="/demo-3">Dr.Arlene McCoy</a></h3>
                            <p>teeth Specialist</p>
                        </div>
                    </div>
                    {/*  Team Item End  */}
                </div>
            </div>
        </div>
    </div>
    {/*  Page Team End  */}
    </>
  );
}
