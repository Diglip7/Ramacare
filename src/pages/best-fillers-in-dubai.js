import React from 'react';
import Script from "next/script";
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import HeroSection from '../../components/LandingHeroSection';
import PromoBanner from '../../components/LandingPromoBanner';
import StatsSection from '../../components/StatsSection';
import OfferSection from '../../components/OfferSection';
// import FloatingChat from '@/components/FloatingChat';
import PricingSection from '../../components/PricingSection';
import WhyUsSection from '../../components/WhyUsSection';
import TreatmentsSection from '../../components/LandingTreatmentsSection';
import ResultsSection from '../../components/ResultsSection';
import TestimonialsSection from '../../components/TestimonialsSection';
import RiskFreeSection from '../../components/RiskFreeSection';
import FAQSection from '../../components/LandingFAQSection';
import ConsultationSection from '../../components/ConsultationSection';
import GoogleReviews from '../../components/GoogleReviews';
import Footer from '../../components/LandingFooter';
import DiscountModal from '../../components/DiscountModal';

// Set to false whenever you want to restore the full landing page
const IS_COMING_SOON = true;

export default function BestFillersInDubai() {
  return (
    <>
      <Head>
        <title key="title">Best Fillers in Dubai | Coming Soon - RamaCare Polyclinic</title>
        <meta name="description" content="Discover the best dermal fillers in Dubai at RamaCare Polyclinic. Our new page is coming soon. Contact us for consultations." key="description" />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://ramacarepolyclinic.ae/best-fillers-in-dubai/" />
        <link rel="icon" type="image/png" href="/images/Logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>
      <Script id="google-tag-manager" strategy="beforeInteractive">
                {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-PM7WDXBW');`}
      </Script>

      {IS_COMING_SOON ? (
        <div className="font-sans min-h-screen bg-gradient-to-br from-[#fffdfa] via-[#fbf6f0] to-[#f5ede4] flex flex-col justify-between text-[#1a1a1a]">
          <noscript
            dangerouslySetInnerHTML={{
                        __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PM7WDXBW"
          height="0" width="0" style="display:none;visibility:hidden"></iframe>`
            }}
          />

          {/* Simple Top Navigation / Branding */}
          <header className="w-full px-6 py-6 flex items-center justify-between max-w-6xl mx-auto">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/Logo.png"
                alt="RamaCare Polyclinic Logo"
                width={150}
                height={50}
                className="h-10 w-auto object-contain"
                priority
              />
            </Link>
            <a
              href="tel:+971542669345"
              className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-[#B8860B] hover:text-[#916b08] transition"
            >
              <span>📞 +971 54 266 9345</span>
            </a>
          </header>

          {/* Main Coming Soon Card */}
          <main className="flex-1 flex items-center justify-center px-6 py-12">
            <div className="max-w-xl w-full text-center bg-white/85 backdrop-blur-md rounded-2xl shadow-xl border border-[#ece4d9] p-8 sm:p-12">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B8860B]/10 text-[#B8860B] text-xs font-semibold tracking-wider uppercase mb-6">
                <span className="w-2 h-2 rounded-full bg-[#B8860B] animate-pulse"></span>
                Aesthetic Dermatology
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111827] tracking-tight mb-4">
                Coming Soon
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg text-[#555555] leading-relaxed mb-8">
                We are currently updating our Dermal Fillers showcase to bring you an upgraded experience. In the meantime, our DHA-licensed specialists are available for consultations.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  href="/"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-lg bg-[#B8860B] text-white font-semibold text-sm shadow-md hover:bg-[#a0740b] transition"
                >
                  Visit Main Website
                </Link>
                <a
                  href="https://wa.me/971542669345?text=Hello%20RamaCare%20Polyclinic,%20I%20would%20like%20to%20inquire%20about%20Fillers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-lg border border-[#B8860B] text-[#B8860B] font-semibold text-sm hover:bg-[#B8860B]/10 transition"
                >
                  WhatsApp Inquiries
                </a>
              </div>

              {/* Clinic Perks */}
              <div className="mt-8 pt-8 border-t border-[#eee6dc] grid grid-cols-3 gap-2 text-center text-xs text-[#666666]">
                <div>
                  <p className="font-semibold text-[#1a1a1a]">DHA Licensed</p>
                  <p className="text-[11px] text-[#888888]">Polyclinic Dubai</p>
                </div>
                <div>
                  <p className="font-semibold text-[#1a1a1a]">FDA Approved</p>
                  <p className="text-[11px] text-[#888888]">Premium Fillers</p>
                </div>
                <div>
                  <p className="font-semibold text-[#1a1a1a]">Jumeirah 1</p>
                  <p className="text-[11px] text-[#888888]">Prime Location</p>
                </div>
              </div>
            </div>
          </main>

          {/* Minimal Footer */}
          <footer className="w-full py-6 text-center text-xs text-[#888888] border-t border-[#ebe3d7] px-4">
            <p className="mb-1">
              Ground Floor, Jumeirah Terrace Building, 12 Al Dhiyafah Rd – Jumeirah 1 – Dubai
            </p>
            <p>© 2026 RamaCare Polyclinic. All rights reserved.</p>
          </footer>
        </div>
      ) : (
        <div className="font-sans">
          <noscript
            dangerouslySetInnerHTML={{
                          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PM7WDXBW"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`
            }}
          />
          <PromoBanner />
          <DiscountModal />
          <HeroSection />
          <StatsSection />
          <OfferSection />
          {/* <FloatingChat /> */}
          <PricingSection />
          <WhyUsSection />
          <TreatmentsSection />
          <ResultsSection />
          <TestimonialsSection />
          <RiskFreeSection />
          <FAQSection />
          <ConsultationSection />
          <GoogleReviews />
          <Footer />
        </div>
      )}
    </>
  );
}
