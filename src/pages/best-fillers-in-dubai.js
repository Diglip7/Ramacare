import React from 'react';
import Script from "next/script";
import Head from 'next/head';
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

export default function BestFillersInDubai() {
  return (
    <>
      <Head>
        <title key="title">Best Fillers in Dubai | Premium Dermal Fillers Treatment</title>
        <meta name="description" content="Discover the best dermal fillers in Dubai at Rama Care Polyclinic. Premium non-surgical cosmetic treatments for natural-looking results. Book your consultation today." key="description" />
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
        <OfferSection/>
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
    </>
  );
}
