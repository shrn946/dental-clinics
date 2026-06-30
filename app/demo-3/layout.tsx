import type { Metadata } from 'next';
import Script from 'next/script';
import { Header, Footer } from '../../components/demo-3';
import DemothreeScriptLoader from '../../components/demo-3/DemothreeScriptLoader';
import Chatbot from '@/components/Chatbot';

export const metadata: Metadata = {
  title: "Denture - Dental Clinic",
  description: "Denture - Dental Clinic Next.js Version",
};

export default function DemothreeRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com/" />
        <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Sora:wght@100..800&display=swap" rel="stylesheet" />
        <link href="/demo-3/css/all.min.css" rel="stylesheet" media="screen" />
        <link href="/demo-3/css/bootstrap.min.css" rel="stylesheet" media="screen" />
        <link href="/demo-3/css/slicknav.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="/demo-3/css/swiper-bundle.min.css" />
        <link href="/demo-3/css/animate.min.css" rel="stylesheet" />
        <link href="/demo-3/css/magnific-popup.css" rel="stylesheet" />
        <link href="/demo-3/css/custom.css" rel="stylesheet" media="screen" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <Chatbot themeColor="#0f54c9" />
        <DemothreeScriptLoader />
      </body>
    </html>
  );
}
