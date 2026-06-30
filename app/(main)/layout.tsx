import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScriptInit from "@/components/ScriptInit";
import ScriptLoader from "@/components/ScriptLoader";
import Preloader from "@/components/Preloader";
import Chatbot from '@/components/Chatbot';
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta-sans",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Primecare - Dentist & Dental Clinic",
    default: "Primecare - Dentist & Dental Clinic",
  },
  description: "Commitment to your smile's health and beauty. Experience top-quality dental care focused on your smile's health and beauty.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zxx" className={`${plusJakartaSans.variable}`}>
      <head>
        {/* Favicon */}
        <link rel="shortcut icon" type="image/x-icon" href="/images/favicon.png" />
        
        {/* Static Stylesheets */}
        <link href="/css/bootstrap.min.css" rel="stylesheet" media="screen" />
        <link href="/css/slicknav.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="/css/swiper-bundle.min.css" />
        <link href="/css/all.css" rel="stylesheet" media="screen" />
        <link href="/css/animate.css" rel="stylesheet" />
        <link rel="stylesheet" href="/css/magnific-popup.css" />
        <link rel="stylesheet" href="/css/twentytwenty.css" />
        <link rel="stylesheet" href="/css/mousecursor.css" />
        <link href="/css/custom.css" rel="stylesheet" media="screen" />
      </head>
      <body>
        <Preloader />

        {/* Mouse Cursor Start */}
        <div className="custom-cursor">
          <div className="cursor"></div>
          <div className="cursor-two"></div>
        </div>
        {/* Mouse Cursor End */}
        
        <Header />
        {children}
        <Footer />
        <Chatbot themeColor="#00bcd4" />

        {/* Essential Scripts initialized here */}
        <ScriptInit />
        <ScriptLoader />
      </body>
    </html>
  );
}
