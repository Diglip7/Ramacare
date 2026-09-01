import Layout from '../../../components/Layout';
import Head from "next/head";
import TreatmentHero from '../../../components/TreatmentHero';
import QuickNavigation from '../../../components/QuickNavigation';
// import CertificationsSection from '../../../components/CertificationsSection';
import TreatmentOverview from '../../../components/TreatmentOverview';
import HealingJourney from '../../../components/HealingJourney';
import TreatmentBenefits from '../../../components/TreatmentBenefits';
import PatientTestimonials from '../../../components/VideoTestimonials';
import DoctorsSection from '../../../components/DoctorsSection';
// import PricingPackages from '../../../components/PricingPackages';
import PaymentInsurance from '../../../components/PaymentInsurance';
import FAQSection from '../../../components/Faq';
import BookConsultation from '../../../components/BookConsultation';
import ContentReviewBadge from '../../../components/ContentReviewBadge';
import { getSubcategoryContent } from '../../data/subcategoryContent';

export default function GoldenElixirFacialPage() {
  const categoryName = 'Facial';
  const subcategoryName = 'Golden Elixir (24K Gold) Facial';

  // Get content from data file
  const content = getSubcategoryContent('facial-dubai', 'golden-elixir-facial');

  const CANONICAL_URL = "https://ramacarepolyclinic.ae/services/golden-elixir-facial-dubai/";
  const PAGE_TITLE = "Golden Elixir (24K Gold) Facial in Dubai – Radiant Skin";
  const PAGE_DESCRIPTION = "Golden Elixir (24K Gold) Facial in Dubai rejuvenates and nourishes the skin, promoting radiance, hydration, and a youthful, glowing appearance under expert care.";

  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `${CANONICAL_URL}#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://ramacarepolyclinic.ae/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Facial",
            "item": "https://ramacarepolyclinic.ae/services/facial-dubai/"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Golden Elixir (24K Gold) Facial",
            "item": CANONICAL_URL
          }
        ]
      },
      {
        "@type": "Service",
        "@id": `${CANONICAL_URL}#service`,
        "serviceType": "Golden Elixir (24K Gold) Facial",
        "name": "Golden Elixir (24K Gold) Facial in Dubai",
        "description": "Luxury anti-aging facial treatment infusing pure 24K gold particles with antioxidant-rich serums to stimulate collagen production, improve elasticity, brighten skin tone, and restore a radiant, youthful glow.",
        "url": CANONICAL_URL,
        "reviewedBy": {
          "@type": "Person",
          "name": "Sonita Sinaga",
          "jobTitle": "Licensed & Certified Aesthetic Therapist",
          "url": "https://ramacarepolyclinic.ae/doctors/sonita-sinaga-aesthetic-therapist-dubai/"
        },
        "provider": {
          "@type": "MedicalClinic",
          "name": "RamaCare Polyclinic",
          "url": "https://ramacarepolyclinic.ae/",
          "image": "https://ramacarepolyclinic.ae/images/golden1.jpg",
          "telephone": "+971566597878",
          "priceRange": "$$",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "12 Al Dhiyafah Rd, Jumeirah Terrace Building, Ground Floor",
            "addressLocality": "Jumeirah 1",
            "addressRegion": "Dubai",
            "addressCountry": "AE"
          }
        }
      },
      {
        "@type": "MedicalCondition",
        "@id": `${CANONICAL_URL}#condition`,
        "name": "Facial Skin Dullness and Uneven Texture",
        "alternateName": "Skin Appearance Concerns",
        "url": CANONICAL_URL,
        "description": "Facial skin dullness and uneven texture refer to common skin concerns such as lack of radiance, fine lines, pigmentation irregularities, and tired complexion, which often result from aging, sun exposure, or environmental stressors.",
        "possibleTreatment": {
          "@type": "MedicalTherapy",
          "name": "Golden Elixir Facial Therapy",
          "description": "A luxurious aesthetic skin therapy using specialized techniques and nourishing serums to deeply hydrate, exfoliate, and rejuvenate the skin for a radiant, youthful appearance."
        }
      },
      {
        "@type": "FAQPage",
        "@id": `${CANONICAL_URL}#faq`,
        "mainEntity": (content?.faq?.faqs || []).map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
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
        <meta name="keywords" content="Golden Elixir 24K Gold Facial in Dubai, 24K Gold facial treatment Dubai, Luxury facial Dubai, Skin rejuvenation Dubai, Hydrating facial treatment Dubai, Anti-aging facial in Dubai, Radiant skin treatment, Professional facial in Dubai, Glowing skin therapy Dubai, Spa facial treatment Dubai" key="keywords" />
        <meta name="robots" content="index, follow" key="robots" />
        <link rel="canonical" href={CANONICAL_URL} key="canonical" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Golden Elixir (24K Gold) Facial in Dubai – Radiant Skin" key="og:title" />
        <meta property="og:description" content="Golden Elixir (24K Gold) Facial in Dubai rejuvenates and nourishes the skin, promoting radiance, hydration, and a youthful, glowing appearance under expert care." key="og:description" />
        <meta property="og:url" content={CANONICAL_URL} key="og:url" />
        <meta property="og:type" content="website" key="og:type" />
        <meta property="og:image" content="https://ramacarepolyclinic.ae/images/golden1.jpg" key="og:image" />
        <meta property="og:site_name" content="RamaCare Polyclinic" key="og:site_name" />
        <meta property="og:locale" content="en_AE" key="og:locale" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content="Golden Elixir (24K Gold) Facial in Dubai – Radiant Skin" key="twitter:title" />
        <meta name="twitter:description" content="Golden Elixir (24K Gold) Facial in Dubai rejuvenates and nourishes the skin, promoting radiance, hydration, and a youthful, glowing appearance under expert care." key="twitter:description" />
        <meta name="twitter:image" content="https://ramacarepolyclinic.ae/images/golden1.jpg" key="twitter:image" />

        {/* Structured Data Schemas */}
        <script
          key="schema-graph"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
        />
      </Head>

      <TreatmentHero 
        categoryName={categoryName}
        subcategoryName={subcategoryName}
        hero={content?.hero}
      />
      <QuickNavigation />
      
      <TreatmentOverview 
        subcategoryName={subcategoryName}
        content={content?.overview}
      />
      <HealingJourney content={content?.healingJourney} />
      <TreatmentBenefits 
        content={content?.benefits}
      />
      <PatientTestimonials content={content?.testimonials} />
      <DoctorsSection content={content?.doctors} />
      <PaymentInsurance content={content?.paymentInsurance} />
      <ContentReviewBadge 
        doctorName="Sonita Sinaga" 
        pageSlug="golden-elixir-facial-dubai" 
        customStatement="This gold facial treatment guide has been clinically reviewed for treatment safety, facial protocols, and skincare excellence by Sonita Sinaga." 
      />
      <FAQSection content={content?.faq} />
      <BookConsultation content={content?.bookConsultation} />
    </Layout>
  );
}
