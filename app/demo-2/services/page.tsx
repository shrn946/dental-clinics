'use client';

import Link from 'next/link';
import { PageHeader } from '../components';

export default function DemotwoServices() {
  const servicesList = [
    { title: 'General Dentistry', icon: '/demo-2/assets/uploads/2024/05/dental-icon-1.png', desc: 'Comprehensive routine cleanings, digital checkups, and standard restorative dental fillings.' },
    { title: 'Cosmetic Dentistry', icon: '/demo-2/assets/uploads/2024/05/dental-icon-2.png', desc: 'Veneers, dental bonding, and full-smile restoration procedures for an aesthetic look.' },
    { title: 'Teeth Whitening', icon: '/demo-2/assets/uploads/2024/05/dental-icon-3.png', desc: 'Advanced in-office professional laser teeth whitening for immediate, bright results.' },
    { title: 'Orthodontics Aligners', icon: '/demo-2/assets/uploads/2024/05/dental-icon-4.png', desc: 'Traditional clear braces and premium invisible aligners designed to straighten teeth.' },
    { title: 'Dental Implants', icon: '/demo-2/assets/uploads/2024/05/dental-icon-5.png', desc: 'State-of-the-art permanent single-tooth or full-arch replacements that look natural.' },
    { title: 'Oral Surgery', icon: '/demo-2/assets/uploads/2024/05/dental-icon-6.png', desc: 'Wisdom teeth extractions, bone grafting, and general outpatient corrective surgeries.' },
    { title: 'Periodontics Care', icon: '/demo-2/assets/uploads/2024/05/dental-icon-7.png', desc: 'Gum therapy, deep cleanings, and specialized bone regeneration for gum health.' },
    { title: 'Pediatric Dentistry', icon: '/demo-2/assets/uploads/2024/05/dental-icon-8.png', desc: 'Gentle, friendly specialized pediatric checkups and sealants for children.' }
  ];

  return (
    <main>
      <PageHeader title="Clinical Services" />

      {/* Services Section */}
      <section className="section-padding">
        <div className="container">
          <div className="title-center">
            <span className="subtitle">Clinical Expertise</span>
            <h2 className="main-title">Explore Our Treatments</h2>
          </div>

          <div className="grid-3">
            {servicesList.map((svc, idx) => (
              <div key={idx} className="info-card" style={{ padding: '40px 30px' }}>
                <div className="info-card-icon" style={{ marginBottom: '25px' }}>
                  <img src={svc.icon} alt={svc.title} />
                </div>
                <h3 className="info-card-title">{svc.title}</h3>
                <p className="info-card-desc" style={{ marginBottom: '25px' }}>{svc.desc}</p>
                <Link href="/demo-2/appointment" className="btn-secondary" style={{ padding: '10px 24px', fontSize: '13px', borderRadius: '4px' }}>
                  Book Service
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services CTA Section */}
      <section className="cta-banner" style={{ backgroundColor: 'var(--primary-color)' }}>
        <div className="container cta-banner-content">
          <div>
            <h2 style={{ color: '#fff' }}>Need an Emergency Dental Consultation?</h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '16px', marginTop: '5px' }}>Our trauma and root canal specialists are on-call 24 hours a day.</p>
          </div>
          <Link href="/demo-2/contact" className="btn-primary" style={{ border: 'none' }}>
            Contact Emergency Desk
          </Link>
        </div>
      </section>
    </main>
  );
}
