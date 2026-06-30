'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === '/demo-3';

  return (
    <header className={`main-header ${isHome ? 'header-prime' : ''}`}>
      <div className="header-sticky bg-section">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            {/* Logo Start */}
            <Link className="navbar-brand" href="/demo-3">
              <img src={isHome ? "/demo-3/images/logo-white.svg" : "/demo-3/images/logo.svg"} alt="Logo" />
            </Link>
            {/* Logo End */}

            {/* Main Menu Start */}
            <div className="collapse navbar-collapse main-menu">
              <div className="nav-menu-wrapper">
                <ul className="navbar-nav mr-auto" id="menu">
                  <li className="nav-item"><Link className="nav-link" href="/demo-3">Home</Link></li>
                  <li className="nav-item submenu"><Link className="nav-link" href="/demo-3/about">About Us</Link>
                    <ul>
                      <li className="nav-item"><Link className="nav-link" href="/demo-3/team">Our Team</Link></li>
                      <li className="nav-item"><Link className="nav-link" href="/demo-3/testimonials">Testimonials</Link></li>
                    </ul>
                  </li>
                  <li className="nav-item"><Link className="nav-link" href="/demo-3/services">Services</Link></li>
                  <li className="nav-item"><Link className="nav-link" href="/demo-3/contact">Contact Us</Link></li>
                  <li className="nav-item highlighted-menu"><Link className="nav-link" href="/demo-3/appointment">Make an Appointment</Link></li>
                </ul>
              </div>

              {/* Header Btn Start */}
              <div className="header-btn">
                <Link className={isHome ? "btn-default-prime btn-highlighted-prime" : "btn-default"} href="/demo-3/appointment">
                  {isHome ? <span>Make an Appointment</span> : 'Make an Appointment'}
                </Link>
              </div>
              {/* Header Btn End */}                      
            </div>
            {/* Main Menu End */}
            <div className="navbar-toggle"></div>
          </div>
        </nav>
        <div className="responsive-menu"></div>
      </div>
    </header>
  );
}
