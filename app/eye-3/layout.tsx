import type { Metadata } from 'next';
import Script from 'next/script';
import React from 'react';

export const metadata: Metadata = {
  title: 'Home | Optcare || Optometrist & Eye Care',
  description: 'Optcare || Optometrist & Eye Care Responsive HTML 5 Template',
};

export default function EyeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts */}
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
        
        {/* Stylesheets */}
        <link rel="stylesheet" href="/eye-3/assets/css/font-awesome-all.css" />
        <link rel="stylesheet" href="/eye-3/assets/css/flaticon.css" />
        <link rel="stylesheet" href="/eye-3/assets/css/owl.css" />
        <link rel="stylesheet" href="/eye-3/assets/css/bootstrap.css" />
        <link rel="stylesheet" href="/eye-3/assets/css/jquery.fancybox.min.css" />
        <link rel="stylesheet" href="/eye-3/assets/css/animate.css" />
        <link rel="stylesheet" href="/eye-3/assets/css/color.css" />
        <link rel="stylesheet" href="/eye-3/assets/css/elpath.css" />
        <link rel="stylesheet" href="/eye-3/assets/css/jquery-ui.css" />
        <link rel="stylesheet" href="/eye-3/assets/css/style.css" />
        <link rel="stylesheet" href="/eye-3/assets/css/responsive.css" />
      </head>
      <body>
        <div className="boxed_wrapper">
          {children}
        </div>

        {/* jQuery library loaded first */}
        <Script src="/eye-3/assets/js/jquery.js" strategy="beforeInteractive" />
        
        {/* Core and library scripts */}
        <Script src="/eye-3/assets/js/popper.min.js" strategy="afterInteractive" />
        <Script src="/eye-3/assets/js/bootstrap.min.js" strategy="afterInteractive" />
        
        {/* Plugin scripts */}
        <Script src="/eye-3/assets/js/owl.js" strategy="afterInteractive" />
        <Script src="/eye-3/assets/js/wow.js" strategy="afterInteractive" />
        <Script src="/eye-3/assets/js/validation.js" strategy="afterInteractive" />
        <Script src="/eye-3/assets/js/jquery.fancybox.js" strategy="afterInteractive" />
        <Script src="/eye-3/assets/js/appear.js" strategy="afterInteractive" />
        <Script src="/eye-3/assets/js/scrollbar.js" strategy="afterInteractive" />
        <Script src="/eye-3/assets/js/isotope.js" strategy="afterInteractive" />
        <Script src="/eye-3/assets/js/jquery.nice-select.min.js" strategy="afterInteractive" />
        <Script src="/eye-3/assets/js/jquery-ui.js" strategy="afterInteractive" />
        <Script src="/eye-3/assets/js/jquery.bootstrap-touchspin.js" strategy="afterInteractive" />
        
        {/* Theme script */}
        <Script src="/eye-3/assets/js/script.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
