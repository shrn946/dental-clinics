import type { Metadata } from 'next';
import Script from 'next/script';
import React from 'react';

export const metadata: Metadata = {
  title: 'Home | Opticest || Eye Care Solutions Specialists',
  description: 'Opticest || Eye Care Solutions Specialists Responsive HTML 5 Template',
};

export default function EyeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/eye-2/assets/bootstrap/bootstrap.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
        <link rel="stylesheet" href="/eye-2/assets/css/style.css" />
        <link rel="stylesheet" href="/eye-2/assets/css/responsive.css" />
        <link rel="stylesheet" href="/eye-2/assets/css/owl.carousel.min.css" />
        <link rel="stylesheet" href="/eye-2/assets/css/owl.theme.default.min.css" />
        <link rel="stylesheet" href="/eye-2/assets/css/aos.css" />
        <link rel="stylesheet" href="/eye-2/assets/css/magnific-popup.css" />
      </head>
      <body>
        {children}

        {/* jQuery library loaded first */}
        <Script src="/eye-2/assets/js/jquery-3.7.1.min.js" strategy="beforeInteractive" />
        
        {/* Supporting Popper and Bootstrap scripts */}
        <Script src="/eye-2/assets/js/popper.min.js" strategy="afterInteractive" />
        <Script src="/eye-2/assets/js/bootstrap.min.js" strategy="afterInteractive" />
        
        {/* Animation and carousel scripts */}
        <Script src="/eye-2/assets/js/aos.js" strategy="afterInteractive" />
        <Script src="/eye-2/assets/js/owl.carousel.js" strategy="afterInteractive" />
        <Script src="/eye-2/assets/js/carousel.js" strategy="afterInteractive" />
        
        {/* Core behavior scripts */}
        <Script src="/eye-2/assets/js/animation.js" strategy="afterInteractive" />
        <Script src="/eye-2/assets/js/back-to-top-button.js" strategy="afterInteractive" />
        <Script src="/eye-2/assets/js/preloader.js" strategy="afterInteractive" />
        <Script src="/eye-2/assets/js/popup-image.js" strategy="afterInteractive" />
        <Script src="/eye-2/assets/js/contact-form.js" strategy="afterInteractive" />
        <Script src="/eye-2/assets/js/contact-validate.js" strategy="afterInteractive" />
        <Script src="/eye-2/assets/js/video.js" strategy="afterInteractive" />
        <Script src="/eye-2/assets/js/video-popup.js" strategy="afterInteractive" />
        <Script src="/eye-2/assets/js/search.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
