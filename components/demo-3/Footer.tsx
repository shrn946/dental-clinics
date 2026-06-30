import Link from 'next/link';
import { FaPinterestP, FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="main-footer bg-section dark-section">
      <div className="container">
        <div className="row">
          <div className="col-xl-4">
            {/* Footer About Start */}
            <div className="footer-about">
              {/* Footer Logo Start */}
              <div className="footer-logo">
                <img src="/demo-3/images/footer-logo.svg" alt="Footer Logo" />
              </div>
              {/* Footer Logo End */}

              {/* About Footer Content Start */}
              <div className="about-footer-content">
                <p>Comprehensive dental services, confident smiles through, personalized care.</p>
              </div>           
              {/* About Footer Content End */}
                  
              {/* Footer Social Link Start */}
              <div className="footer-social-links">
                <ul>
                  <li><a href="#"><FaPinterestP /></a></li>
                  <li><a href="#"><FaTwitter /></a></li>
                  <li><a href="#"><FaFacebookF /></a></li>
                  <li><a href="#"><FaInstagram /></a></li>
                </ul>
              </div>
              {/* Footer Social Link End */}
            </div>
            {/* Footer About End */}
          </div>

          <div className="col-xl-8">
            {/* Footer Links Box Start */}
            <div className="footer-links-box">
              {/* Footer Links Start */}
              <div className="footer-links">
                <h3>quick links</h3>
                <ul>
                  <li><Link href="/demo-3">Home</Link></li>
                  <li><Link href="/demo-3/about">About us</Link></li>
                  <li><Link href="/demo-3/services">Services</Link></li>
                  <li><Link href="/demo-3/appointment">Appointment</Link></li>
                </ul>
              </div>
              {/* Footer Links End */}

              {/* Footer Links Start */}
              <div className="footer-links">
                <h3>Support</h3>
                <ul>
                  <li><a href="#">Help</a></li>
                  <li><a href="#">Term's & Condition </a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><Link href="/demo-3/contact">Contact Us</Link></li>
                </ul>
              </div>
              {/* Footer Links End */}
          
              {/* Footer Links Start */}
              <div className="footer-links">
                <h3>Our Services</h3>
                <ul>
                  <li><Link href="/demo-3/services/pediatric-dentistry">Pediatric Dentistry</Link></li>
                  <li><Link href="/demo-3/services/orthodontics">Orthodontics</Link></li>
                  <li><Link href="/demo-3/services/preventive-dentistry">Preventive Dentistry</Link></li>
                  <li><Link href="/demo-3/services/cosmetic-dentistry">Cosmetic Dentistry</Link></li>
                </ul>
              </div>
              {/* Footer Links End */}
          
              {/* Footer Links Start */}
              <div className="footer-links footer-contact-links">
                <h3>Contact Us</h3>
                {/* Footer Contact Box Start */}
                <div className="footer-contact-box">
                  <div className="footer-contact-box-title">
                    <h3><a href="mailto:Domain@gmail.com">domain@gmail.com</a></h3>
                    <h3><a href="tel:789345601">(+0) 789345601</a></h3>
                  </div>
                  <div className="footer-contact-box-hour">
                    <p>Mon to Sat: <span>9AM to 9PM </span></p>
                  </div>
                </div>
                {/* Footer Contact Box End */}
              </div>
              {/* Footer Links End */}
            </div>
            {/* Footer Links Box End */}
          </div>

          <div className="col-lg-12">
            {/* Footer Copyright Text Start */}
            <div className="footer-copyright-text">
              <p>Copyright © 2025 All Rights Reserved.</p>
            </div>
            {/* Footer Copyright Text End */}
          </div>
        </div>
      </div>
    </footer>
  );
}
