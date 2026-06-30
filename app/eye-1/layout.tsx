import type { Metadata } from 'next';
import Script from 'next/script';
import React from 'react';

export const metadata: Metadata = {
  title: 'Home One || Oktilcal || Optometrist & Eye Care',
  description: 'Oktilcal || Optometrist & Eye Care Responsive HTML 5 Template',
};

export default function EyeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/eye-1/assets/css/aos.css" />
        <link rel="stylesheet" href="/eye-1/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/eye-1/assets/css/imp.css" />
        <link rel="stylesheet" href="/eye-1/assets/css/custom-animate.css" />
        <link rel="stylesheet" href="/eye-1/assets/css/flaticon.css" />
        <link rel="stylesheet" href="/eye-1/assets/css/font-awesome.min.css" />
        <link rel="stylesheet" href="/eye-1/assets/css/owl.css" />
        <link rel="stylesheet" href="/eye-1/assets/css/magnific-popup.css" />
        <link rel="stylesheet" href="/eye-1/assets/css/scrollbar.css" />
        <link rel="stylesheet" href="/eye-1/assets/css/hiddenbar.css" />
        <link rel="stylesheet" href="/eye-1/assets/css/color.css" />
        <link href="/eye-1/assets/css/color/theme-color.css" id="jssDefault" rel="stylesheet" />
        <link rel="stylesheet" href="/eye-1/assets/css/style.css" />
        <link rel="stylesheet" href="/eye-1/assets/css/responsive.css" />
      </head>
      <body>
        <div className="boxed_wrapper">
          {children}
        </div>

        {/* jQuery and other critical libraries */}
        <Script src="/eye-1/assets/js/jquery.js" strategy="beforeInteractive" />
        
        {/* Core and library scripts */}
        <Script src="/eye-1/assets/js/aos.js" strategy="afterInteractive" />
        <Script src="/eye-1/assets/js/appear.js" strategy="afterInteractive" />
        <Script src="/eye-1/assets/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
        <Script src="/eye-1/assets/js/bootstrap-select.min.js" strategy="afterInteractive" />
        <Script src="/eye-1/assets/js/isotope.js" strategy="afterInteractive" />
        <Script src="/eye-1/assets/js/jquery.bootstrap-touchspin.js" strategy="afterInteractive" />
        <Script src="/eye-1/assets/js/jquery.countdown.min.js" strategy="afterInteractive" />
        <Script src="/eye-1/assets/js/jquery.countTo.js" strategy="afterInteractive" />
        <Script src="/eye-1/assets/js/jquery.easing.min.js" strategy="afterInteractive" />
        <Script src="/eye-1/assets/js/jquery.enllax.min.js" strategy="afterInteractive" />
        <Script src="/eye-1/assets/js/jquery.fancybox.js" strategy="afterInteractive" />
        <Script src="/eye-1/assets/js/jquery.mixitup.min.js" strategy="afterInteractive" />
        <Script src="/eye-1/assets/js/jquery.paroller.min.js" strategy="afterInteractive" />
        <Script src="/eye-1/assets/js/jquery.polyglot.language.switcher.js" strategy="afterInteractive" />
        <Script src="/eye-1/assets/js/nouislider.js" strategy="afterInteractive" />
        <Script src="/eye-1/assets/js/owl.js" strategy="afterInteractive" />
        <Script src="/eye-1/assets/js/timePicker.js" strategy="afterInteractive" />
        <Script src="/eye-1/assets/js/validation.js" strategy="afterInteractive" />
        <Script src="/eye-1/assets/js/wow.js" strategy="afterInteractive" />
        <Script src="/eye-1/assets/js/jquery.magnific-popup.min.js" strategy="afterInteractive" />
        <Script src="/eye-1/assets/js/slick.js" strategy="afterInteractive" />
        <Script src="/eye-1/assets/js/lazyload.js" strategy="afterInteractive" />
        <Script src="/eye-1/assets/js/scrollbar.js" strategy="afterInteractive" />
        <Script src="/eye-1/assets/js/tilt.jquery.js" strategy="afterInteractive" />
        <Script src="/eye-1/assets/js/jquery.bxslider.min.js" strategy="afterInteractive" />
        <Script src="/eye-1/assets/js/jquery-ui.js" strategy="afterInteractive" />
        <Script src="/eye-1/assets/js/parallax.min.js" strategy="afterInteractive" />
        <Script src="/eye-1/assets/js/jquery.tinyscrollbar.js" strategy="afterInteractive" />
        <Script src="/eye-1/assets/js/jQuery.style.switcher.min.js" strategy="afterInteractive" />
        <Script src="/eye-1/assets/js/custom.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
