import type { Metadata } from 'next';
import Script from 'next/script';
import React from 'react';
import Preloader from '@/components/dental-7/Preloader';

export const metadata: Metadata = {
  title: 'Toothst | Dental Clinic Next.js Website',
  description: 'Toothst | Dental Clinic Next.js Website Responsive Template',
};

export default function DentalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Stylesheets */}
        <link rel="stylesheet" href="/dental-7/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/dental-7/assets/css/owl.theme.default.min.css" />
        <link rel="stylesheet" href="/dental-7/assets/css/owl.carousel.min.css" />
        <link rel="stylesheet" href="/dental-7/assets/css/icofont.min.css" />
        <link rel="stylesheet" href="/dental-7/assets/css/meanmenu.css" />
        <link rel="stylesheet" href="/dental-7/assets/css/animate.min.css" />
        <link rel="stylesheet" href="/dental-7/assets/css/magnific-popup.min.css" />
        <link rel="stylesheet" href="/dental-7/assets/css/style.css" />
        <link rel="stylesheet" href="/dental-7/assets/css/responsive.css" />
        <link rel="icon" type="image/png" href="/dental-7/assets/images/favicon.png" />
      </head>
      <body>
        <Preloader />
        {children}

        {/* jQuery library loaded first */}
        <Script src="/dental-7/assets/js/jquery.min.js" strategy="beforeInteractive" />
        
        {/* Core and library scripts */}
        <Script src="/dental-7/assets/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
        <Script src="/dental-7/assets/js/jquery.meanmenu.js" strategy="afterInteractive" />
        <Script src="/dental-7/assets/js/owl.carousel.min.js" strategy="afterInteractive" />
        <Script src="/dental-7/assets/js/carousel-thumbs.min.js" strategy="afterInteractive" />
        <Script src="/dental-7/assets/js/wow.min.js" strategy="afterInteractive" />
        <Script src="/dental-7/assets/js/magnific-popup.min.js" strategy="afterInteractive" />
        <Script src="/dental-7/assets/js/counterup.min.js" strategy="afterInteractive" />
        <Script src="/dental-7/assets/js/waypoints.min.js" strategy="afterInteractive" />
        
        {/* Theme script */}
        <Script src="/dental-7/assets/js/custom.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
