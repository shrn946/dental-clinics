import type { Metadata } from 'next';
import './demo-2.css';
import { Header, Footer, ScrollObserver } from './components';
import Chatbot from '@/components/Chatbot';

export const metadata: Metadata = {
  title: "Smile Care – Premium Dental Clinic",
  description: "Separate dental clinic website built cleanly in React and Next.js.",
};

export default function DemotwoRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Load standard FontAwesome icons */}
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
          precedence="default"
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <ScrollObserver />
        <Chatbot themeColor="#2e3192" />
      </body>
    </html>
  );
}
