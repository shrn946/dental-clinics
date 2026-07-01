import type { Metadata } from 'next';
import Script from 'next/script';
import React from 'react';
import AccordionHandler from './components/AccordionHandler';

export const metadata: Metadata = {
  title: 'OptiLuxe - Premium Optometrist & Advanced Eye Care Clinic',
  description: 'Experience state-of-the-art vision correction, professional eye exams, and personalized optical treatments at OptiLuxe Eye Clinic.',
};

export default function EyeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/eye-4/assets/images/resources/favicon.png" type="image/x-icon" />
        <link rel="stylesheet" href="/eye-4/assets/css/aos.css" />
        <link rel="stylesheet" href="/eye-4/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/eye-4/assets/css/imp.css" />
        <link rel="stylesheet" href="/eye-4/assets/css/custom-animate.css" />
        <link rel="stylesheet" href="/eye-4/assets/css/flaticon.css" />
        <link rel="stylesheet" href="/eye-4/assets/css/font-awesome.min.css" />
        <link rel="stylesheet" href="/eye-4/assets/css/owl.css" />
        <link rel="stylesheet" href="/eye-4/assets/css/magnific-popup.css" />
        <link rel="stylesheet" href="/eye-4/assets/css/scrollbar.css" />
        <link rel="stylesheet" href="/eye-4/assets/css/hiddenbar.css" />
        <link rel="stylesheet" href="/eye-4/assets/css/color.css" />
        <link href="/eye-4/assets/css/color/theme-color.css" id="jssDefault" rel="stylesheet" />
        <link rel="stylesheet" href="/eye-4/assets/css/style.css" />
        <link rel="stylesheet" href="/eye-4/assets/css/responsive.css" />
      </head>
      <body>
        <div className="boxed_wrapper">
          {children}
        </div>
        <AccordionHandler />

        {/* jQuery and other critical libraries */}
        <Script src="/eye-4/assets/js/jquery.js" strategy="beforeInteractive" />
        
        {/* Core and library scripts */}
        <Script src="/eye-4/assets/js/aos.js" strategy="afterInteractive" />
        <Script src="/eye-4/assets/js/appear.js" strategy="afterInteractive" />
        <Script src="/eye-4/assets/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
        <Script src="/eye-4/assets/js/bootstrap-select.min.js" strategy="afterInteractive" />
        <Script src="/eye-4/assets/js/isotope.js" strategy="afterInteractive" />
        <Script src="/eye-4/assets/js/jquery.bootstrap-touchspin.js" strategy="afterInteractive" />
        <Script src="/eye-4/assets/js/jquery.countdown.min.js" strategy="afterInteractive" />
        <Script src="/eye-4/assets/js/jquery.countTo.js" strategy="afterInteractive" />
        <Script src="/eye-4/assets/js/jquery.easing.min.js" strategy="afterInteractive" />
        <Script src="/eye-4/assets/js/jquery.enllax.min.js" strategy="afterInteractive" />
        <Script src="/eye-4/assets/js/jquery.fancybox.js" strategy="afterInteractive" />
        <Script src="/eye-4/assets/js/jquery.mixitup.min.js" strategy="afterInteractive" />
        <Script src="/eye-4/assets/js/jquery.paroller.min.js" strategy="afterInteractive" />
        <Script src="/eye-4/assets/js/jquery.polyglot.language.switcher.js" strategy="afterInteractive" />
        <Script src="/eye-4/assets/js/nouislider.js" strategy="afterInteractive" />
        <Script src="/eye-4/assets/js/owl.js" strategy="afterInteractive" />
        <Script src="/eye-4/assets/js/timePicker.js" strategy="afterInteractive" />
        <Script src="/eye-4/assets/js/validation.js" strategy="afterInteractive" />
        <Script src="/eye-4/assets/js/wow.js" strategy="afterInteractive" />
        <Script src="/eye-4/assets/js/jquery.magnific-popup.min.js" strategy="afterInteractive" />
        <Script src="/eye-4/assets/js/slick.js" strategy="afterInteractive" />
        <Script src="/eye-4/assets/js/lazyload.js" strategy="afterInteractive" />
        <Script src="/eye-4/assets/js/scrollbar.js" strategy="afterInteractive" />
        <Script src="/eye-4/assets/js/tilt.jquery.js" strategy="afterInteractive" />
        <Script src="/eye-4/assets/js/jquery.bxslider.min.js" strategy="afterInteractive" />
        <Script src="/eye-4/assets/js/jquery-ui.js" strategy="afterInteractive" />
        <Script src="/eye-4/assets/js/parallax.min.js" strategy="afterInteractive" />
        <Script src="/eye-4/assets/js/jquery.tinyscrollbar.js" strategy="afterInteractive" />
        <Script src="/eye-4/assets/js/jQuery.style.switcher.min.js" strategy="afterInteractive" />
        <Script src="/eye-4/assets/js/custom.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
