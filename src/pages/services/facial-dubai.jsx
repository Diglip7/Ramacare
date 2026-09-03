import Layout from "../../../components/Layout";
import Head from "next/head";
import HeroSection from "../../../components/HeroSection";
import WhyChooseUsSection from "../../../components/WhyChooseUsSection";
import AboutAyurvedaSection from "../../../components/AboutAyurvedaSection";
import TreatmentSection from "../../../components/TreatmentSection";
import ProgramsSection from "../../../components/ProgramsSection";
import ExpertsSection from "../../../components/ExpertsSection";
import VideoTestimonials from "../../../components/VideoTestimonials";
import WhyAyurvedaDubaiSection from "../../../components/WhyAyurvedaDubaiSection";
import FAQSection from "../../../components/FAQSection";
// import OurFacilitySection from "../../../components/OurFacilitySection";
import BeginYourHealingJourneySection from "../../../components/BeginYourHealingJourneySection";
import SEOContentSection from "../../../components/SEOContentSection";
import ContentReviewBadge from "../../../components/ContentReviewBadge";
import { getCategoryContent } from "../../data/categoryContent";

export default function facialdubaiCategoryPage() {
  const content = getCategoryContent('facial');
  const facialSEOContent = [
    "Rediscover your natural glow with expert facial treatments in Dubai at RamaCare Polyclinic. Our skin care specialists in Jumeirah 1 offer a curated selection of advanced facials and rejuvenation procedures designed to address various skin concerns and promote long-term skin health. Whether you want to combat signs of aging, treat acne, or simply relax with a deep-cleansing treatment, we have the perfect solution for you.",
    {
      type: "heading",
      text: "Specialized Facial Rejuvenation in Jumeirah 1"
    },
    "We use high-quality medical-grade products and innovative techniques to deliver visible results. Each facial is customized after a professional assessment of your skin's unique needs.",
    {
      type: "list",
      items: [
        "Deep Cleansing Facials: Removing impurities and restoring skin clarity.",
        "Anti-Aging Facials: Reducing the appearance of fine lines and wrinkles.",
        "Hydration Treatments: Restoring moisture and plumpness to dull skin.",
        "Chemical Peels: Improving skin texture and tone through controlled exfoliation.",
        "Brightening Facials: Targeting pigmentation and evening out skin complexion."
      ]
    },
    "At RamaCare, we believe that consistent skin care is essential for maintaining a youthful and healthy appearance. Our team will provide you with expert advice and a personalized home-care regimen to complement your in-clinic treatments. Visit us for the most effective facial treatments in Dubai."
  ];

  const CANONICAL_URL = "https://ramacarepolyclinic.ae/services/facial-dubai/";
  const PAGE_TITLE = "Facial Treatments in Dubai | Expert Skin Care Clinic";
  const PAGE_DESCRIPTION = "Professional facial treatments in Dubai offering safe, personalized care for acne, pigmentation, aging, and dull skin, delivered by experienced skin specialists you can trust.";

  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": `${CANONICAL_URL}#webpage`,
        "name": "Facial Treatments Dubai",
        "url": CANONICAL_URL,
        "description": PAGE_DESCRIPTION,
        "medicalAudience": "Patient",
        "reviewedBy": {
          "@type": "Person",
          "name": "Sonita Sinaga",
          "jobTitle": "Licensed & Certified Aesthetic Therapist",
          "url": "https://ramacarepolyclinic.ae/doctors/sonita-sinaga-aesthetic-therapist-dubai/"
        },
        "publisher": {
          "@type": "MedicalClinic",
          "name": "RamaCare Polyclinic",
          "url": "https://ramacarepolyclinic.ae/",
          "telephone": "+971566597878",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "12 Al Dhiyafah Rd, Jumeirah Terrace Building, Ground Floor",
            "addressLocality": "Jumeirah 1, Dubai",
            "addressCountry": "AE"
          }
        }
      },
      {
        "@type": "FAQPage",
        "@id": `${CANONICAL_URL}#faq`,
        "mainEntity": (content?.faq?.faqs || []).map((f) => ({
          "@type": "Question",
          "name": f.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.answer
          }
        }))
      }
    ]
  };

  return (
    <Layout>
      <Head>
        <title key="title">{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_DESCRIPTION} key="description" />
        <meta name="keywords" content="facial treatments in Dubai, skin care clinic Dubai, advanced facial treatment Dubai, acne facial treatment Dubai, anti-aging facial Dubai, pigmentation treatment Dubai, medical facial Dubai, professional skin treatment Dubai, dermatology facial Dubai" key="keywords" />
        <meta name="robots" content="index, follow" key="robots" />
        <link rel="canonical" href={CANONICAL_URL} key="canonical" />

        {/* Open Graph Tags */}
        <meta property="og:title" content={PAGE_TITLE} key="og:title" />
        <meta property="og:description" content={PAGE_DESCRIPTION} key="og:description" />
        <meta property="og:type" content="article" key="og:type" />
        <meta property="og:url" content={CANONICAL_URL} key="og:url" />
        <meta property="og:image" content="https://ramacarepolyclinic.ae/images/facial-treat.jpg" key="og:image" />
        <meta property="og:image:width" content="1200" key="og:image:width" />
        <meta property="og:image:height" content="630" key="og:image:height" />
        <meta property="og:site_name" content="RamaCare Polyclinic" key="og:site_name" />
        <meta property="og:locale" content="en_AE" key="og:locale" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content={PAGE_TITLE} key="twitter:title" />
        <meta name="twitter:description" content="Safe, personalized facial care for acne, pigmentation, aging, and dull skin from DHA-licensed specialists in Jumeirah 1, Dubai." key="twitter:description" />
        <meta name="twitter:image" content="https://ramacarepolyclinic.ae/images/facial-treat.jpg" key="twitter:image" />

        {/* Structured Data Schemas */}
        <script
          key="schema-graph"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
        />
      </Head>

      <HeroSection content={content?.hero} />
      <WhyChooseUsSection content={content?.whyChooseUs} />
      <AboutAyurvedaSection content={content?.about} />
      <TreatmentSection
        category="facial"
        content={{
          ...content?.treatments,
          consultationHeading: content?.treatments?.consultationCTA?.heading,
          consultationSubtext: content?.treatments?.consultationCTA?.subtext,
          consultationButtonText: content?.treatments?.consultationCTA?.buttonText,
          consultationBgColor: content?.treatments?.consultationCTA?.backgroundColor,
          consultationButtonColor: content?.treatments?.consultationCTA?.buttonColor
        }}
      />
      <ProgramsSection content={content?.programs} />
      <ExpertsSection content={content?.experts} />
      <VideoTestimonials content={content?.successStories} />
      <WhyAyurvedaDubaiSection content={content?.whyDubai} />
      <ContentReviewBadge doctorName="Sonita Sinaga" pageSlug="facial-dubai" />
      <FAQSection content={content?.faq} />
      {/* <OurFacilitySection content={content?.facility} /> */}
      <BeginYourHealingJourneySection content={content?.booking} />
      <SEOContentSection title="Advanced Facial Treatments in Dubai" content={facialSEOContent} />
    </Layout>
  );
}
