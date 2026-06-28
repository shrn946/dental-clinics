'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    return pathname === path ? 'active' : '';
  };

  return (
    <header className="main-header">
      <div className={`header-sticky ${scrolled ? 'sticky-active' : ''}`}>
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            {/* Logo Start */}
            <Link className="navbar-brand" href="/">
              <Image src="/images/untitled_logo.png" alt="Logo" width={160} height={80} unoptimized priority />
            </Link>
            {/* Logo End */}

            {/* Main Menu Start */}
            <div className="collapse navbar-collapse main-menu">
              <div className="nav-menu-wrapper">
                <ul className="navbar-nav mr-auto" id="menu">
                  <li className="nav-item">
                    <Link className={`nav-link ${isActive('/')}`} href="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className={`nav-link ${isActive('/about')}`} href="/about">
                      About Us
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className={`nav-link ${isActive('/services')}`} href="/services">
                      Services
                    </Link>
                  </li>
                  <li className="nav-item submenu">
                    <a className="nav-link" href="#">
                      Pages
                    </a>
                    <ul>
                      <li className="nav-item">
                        <Link className="nav-link" href="/testimonials">
                          Testimonials
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" href="/faq">
                          FAQs
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" href="/appointment">
                          Book Appointment
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" href="/privacy-policy">
                          Privacy Policy
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link className={`nav-link ${isActive('/contact')}`} href="/contact">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
              {/* Contact Now Box Start */}
              <div className="contact-now-box d-inline-flex">
                <div className="icon-box">
                  <img src="/images/icon-phone-header.svg" alt="Phone" />
                </div>
                <div className="contact-now-box-content">
                  <p>Need help ?</p>
                  <h3>(+01) 789 987 645</h3>
                </div>
              </div>
              {/* Contact Now Box End */}
              {/* Header Appointment Button */}
              <div className="header-btn d-inline-flex ms-3">
                <Link href="/appointment" className="btn-default">
                  Book Appointment
                </Link>
              </div>
            </div>
            {/* Main Menu End */}
            
            {/* Mobile Toggle Button */}
            <button className={`navbar-toggle ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)} style={{ border: 'none', background: 'none', padding: 0 }} aria-label="Toggle Navigation">
              <div className={`slicknav_btn ${isOpen ? 'slicknav_open' : 'slicknav_collapsed'}`}>
                <span className="slicknav_icon">
                  <span className="slicknav_icon-bar"></span>
                  <span className="slicknav_icon-bar"></span>
                  <span className="slicknav_icon-bar"></span>
                </span>
              </div>
            </button>
          </div>
        </nav>
        
        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="slicknav_menu">
            <ul className="slicknav_nav">
              <li>
                <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
              </li>
              <li>
                <Link href="/about" onClick={() => setIsOpen(false)}>About Us</Link>
              </li>
              <li>
                <Link href="/services" onClick={() => setIsOpen(false)}>Services</Link>
              </li>
              <li className={`slicknav_parent ${isSubmenuOpen ? 'slicknav_open' : 'slicknav_collapsed'}`}>
                <div className="slicknav_row" onClick={() => setIsSubmenuOpen(!isSubmenuOpen)}>
                  <span>Pages</span>
                  <span className="slicknav_arrow_icon">▸</span>
                </div>
                {isSubmenuOpen && (
                  <ul>
                    <li>
                      <Link href="/testimonials" onClick={() => { setIsOpen(false); setIsSubmenuOpen(false); }}>Testimonials</Link>
                    </li>
                    <li>
                      <Link href="/faq" onClick={() => { setIsOpen(false); setIsSubmenuOpen(false); }}>FAQs</Link>
                    </li>
                    <li>
                      <Link href="/appointment" onClick={() => { setIsOpen(false); setIsSubmenuOpen(false); }}>Book Appointment</Link>
                    </li>
                    <li>
                      <Link href="/privacy-policy" onClick={() => { setIsOpen(false); setIsSubmenuOpen(false); }}>Privacy Policy</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <Link href="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
