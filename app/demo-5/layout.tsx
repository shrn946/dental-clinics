import type { Metadata } from 'next';
import Demo5ScriptLoader from '@/components/demo-5/Demo5ScriptLoader';
import Chatbot from '@/components/Chatbot';

export const metadata: Metadata = {
  title: 'PrimeCare | Premium Dental Services',
  description: 'Experience state-of-the-art dental care with PrimeCare. We offer premium cosmetic dentistry, general checkups, and specialized treatments in a modern, comfortable environment.',
};

export default function Demo5Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link rel="stylesheet" href="/demo-5/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/demo-5/css/animate.min.css" />
        <link rel="stylesheet" href="/demo-5/css/magnific-popup.css" />
        <link rel="stylesheet" href="/demo-5/fontawesome/css/all.min.css" />
        <link rel="stylesheet" href="/demo-5/css/dripicons.css" />
        <link rel="stylesheet" href="/demo-5/css/slick.css" />
        <link rel="stylesheet" href="/demo-5/css/meanmenu.css" />
        <link rel="stylesheet" href="/demo-5/css/default.css" />
        <link rel="stylesheet" href="/demo-5/css/style.css" />
        <link rel="stylesheet" href="/demo-5/css/responsive.css" />
      </head>
      <body>
        {children}
        <Chatbot />
        <Demo5ScriptLoader />
      </body>
    </html>
  );
}
