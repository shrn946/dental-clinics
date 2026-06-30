'use client';

import { useState } from 'react';
import { PageHeader } from '../components';

export default function DemotwoFAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const faqs = [
    { q: 'How often should I visit the dentist?', a: 'Clinical guidelines recommend scheduling a professional cleaning and examination once every six months to prevent calculus buildup and monitor oral health.' },
    { q: 'Do you accept major PPO insurance plans?', a: 'Yes! We participate in-network with all leading PPO insurance providers. Our front desk staff will handle billing and claims on your behalf.' },
    { q: 'What payment options do you offer for implants?', a: 'We accept credit cards, debit cards, and partner with CareCredit to offer zero-percent financing options up to 24 months for implant therapies.' },
    { q: 'Is professional teeth whitening safe for enamel?', a: 'Yes. Our clinical whitening uses medical-grade peroxide gel and laser activation under doctor supervision, which does not damage enamel structure.' },
    { q: 'What is the clinic emergency policy?', a: 'For emergencies like broken crowns, knocked-out teeth, or sudden toothaches, we offer same-day appointments. Please call our emergency line directly.' },
    { q: 'How do invisible aligners work?', a: 'Invisible aligners use a sequence of custom thermoplastic trays to apply gradual forces to teeth, straightening them comfortably over 6 to 18 months.' }
  ];

  return (
    <main>
      <PageHeader title="Frequently Asked Questions" />

      {/* FAQ Grid Section */}
      <section className="section-padding">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="title-center">
            <span className="subtitle">Queries</span>
            <h2 className="main-title">Common Dental Questions</h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                style={{ 
                  backgroundColor: 'var(--bg-light)', 
                  borderRadius: '6px', 
                  border: '1px solid var(--border-color)',
                  overflow: 'hidden'
                }}
              >
                <button 
                  onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                  style={{ 
                    width: '100%', 
                    padding: '20px 25px', 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center', 
                    background: 'transparent',
                    border: 'none',
                    textAlign: 'left',
                    fontFamily: 'var(--primary-font)',
                    fontSize: '18px',
                    fontWeight: '600',
                    color: 'var(--primary-color)',
                    cursor: 'pointer'
                  }}
                >
                  <span>{faq.q}</span>
                  <i className={`fa-solid ${activeIndex === idx ? 'fa-minus' : 'fa-plus'}`} style={{ color: 'var(--accent-color)', fontSize: '14px' }}></i>
                </button>
                
                {activeIndex === idx && (
                  <div 
                    style={{ 
                      padding: '0 25px 20px 25px', 
                      fontSize: '14.5px', 
                      color: 'var(--text-light)',
                      borderTop: '1px solid rgba(0,0,0,0.02)'
                    }}
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
