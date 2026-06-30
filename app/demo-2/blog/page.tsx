'use client';

import Link from 'next/link';
import { PageHeader } from '../components';

export default function DemotwoBlog() {
  const postsList = [
    { id: 1, title: 'How to Choose the Perfect Toothbrush', date: 'May 12, 2026', image: '/demo-2/assets/uploads/2024/05/dental-blog-img-1.jpg', desc: 'Understanding the differences between soft, medium, and hard bristles for optimal gum health and clean enamel.' },
    { id: 2, title: 'The Impact of Sugar on Children\'s Teeth', date: 'May 18, 2026', image: '/demo-2/assets/uploads/2024/05/dental-blog-img-2.jpg', desc: 'Clinical strategies and dietary habits to prevent early childhood caries, decay, and dynamic bacterial build-up.' },
    { id: 3, title: 'Dental Implants vs Bridges: Pros & Cons', date: 'May 24, 2026', image: '/demo-2/assets/uploads/2024/05/dental-blog-img-3.jpg', desc: 'Analyzing the lifetime value, recovery timelines, procedural pain levels, and visual appearance of both restorations.' },
    { id: 4, title: '5 Simple Steps to Prevent Gum Disease', date: 'June 01, 2026', image: '/demo-2/assets/uploads/2024/05/dental-blog-img-1.jpg', desc: 'Best practices in flossing, antimicrobial mouthwashes, and regular cleanings to prevent bleeding gums.' },
    { id: 5, title: 'What to Expect During a Root Canal Treatment', date: 'June 08, 2026', image: '/demo-2/assets/uploads/2024/05/dental-blog-img-2.jpg', desc: 'Debunking the pain myths surrounding endodontic therapy and understanding modern dental anesthetics.' },
    { id: 6, title: 'How Clear Aligners Compare to Traditional Braces', date: 'June 15, 2026', image: '/demo-2/assets/uploads/2024/05/dental-blog-img-3.jpg', desc: 'Examining treatment durations, dietary restrictions, cleaning ease, and visibility of orthodontic clear trays.' }
  ];

  return (
    <main>
      <PageHeader title="Latest News & Articles" />

      {/* Blog Grid Section */}
      <section className="section-padding">
        <div className="container">
          <div className="grid-3">
            {postsList.map((post) => (
              <div key={post.id} className="blog-card">
                <div className="blog-image">
                  <img src={post.image} alt={post.title} />
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <span><i className="fa-solid fa-calendar-days"></i> {post.date}</span>
                    <span><i className="fa-solid fa-comment"></i> 0 Comments</span>
                  </div>
                  <h3 className="blog-title">
                    <Link href="/demo-2/blog">{post.title}</Link>
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--text-light)', marginBottom: '20px' }}>{post.desc}</p>
                  <Link href="/demo-2/blog" className="blog-link">
                    Read Article <i className="fa-solid fa-arrow-right-long" style={{ marginLeft: '4px' }}></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
