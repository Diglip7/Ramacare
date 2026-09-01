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

export default function OxygeneoIlluminateFacialPage() {
  const categoryName = 'Facial';
  const subcategoryName = 'Oxygeneo Illuminate Facial';

  // Get content from data file
  const content = getSubcategoryContent('facial-dubai', 'oxygeneo-illuminate-facial');

  const navItems = [
    { id: 'treatment-info', label: 'Treatment Info' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'benefits', label: 'Benefits' },
    { id: 'when-to-consider', label: 'Ideal Candidate' },
    { id: 'recovery-aftercare', label: 'Aftercare' },
    { id: 'why-choose-ramacare', label: 'Why Us' },
    { id: 'testimonials', label: 'Success Stories' },
    { id: 'our-doctors', label: 'Our Doctors' },
    { id: 'faq', label: 'FAQ' },
    { id: 'book-now', label: 'Book Now' }
  ];

  const CANONICAL_URL = "https://ramacarepolyclinic.ae/services/oxygeneo-illuminate-facial-dubai/";
  const PAGE_TITLE = "OxyGeneo Illuminate Facial in Dubai – Brighten Your Skin";
  const PAGE_DESCRIPTION = "OxyGeneo Illuminate Facial in Dubai exfoliates, oxygenates, and brightens skin, leaving it smooth, radiant, and refreshed under professional care.";

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
            "name": "OxyGeneo Illuminate Facial",
            "item": CANONICAL_URL
          }
        ]
      },
      {
        "@type": "Service",
        "@id": `${CANONICAL_URL}#service`,
        "serviceType": "OxyGeneo Illuminate Facial",
        "name": "OxyGeneo Illuminate Facial in Dubai",
        "description": "Advanced 3-in-1 facial treatment combining exfoliation, oxygenation, and nutrient infusion to brighten skin tone, reduce pigmentation, hydrate deeply, and restore a radiant, healthy glow with no downtime.",
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
          "image": "https://ramacarepolyclinic.ae/images/oxy1.jpg",
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
        "name": "Facial Skin Dullness and Texture Concerns",
        "alternateName": "Skin Radiance and Texture Issues",
        "url": CANONICAL_URL,
        "description": "Facial skin dullness and texture concerns include lack of radiance, uneven tone, minor congestion, fine lines, and signs of tired or stressed skin caused by environmental exposure, aging, and lifestyle factors.",
        "possibleTreatment": {
          "@type": "MedicalTherapy",
          "name": "OxyGeneo Illuminate Facial Therapy",
          "description": "A rejuvenating aesthetic therapy that exfoliates, infuses nutrients, and oxygenates the skin’s surface using advanced 3-in-1 OxyGeneo technology to enhance radiance, texture, and hydration."
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
        <meta name="keywords" content="OxyGeneo Illuminate Facial in Dubai, Skin brightening facial in Dubai, Exfoliating facial treatment, Oxygenating facial in Dubai, Radiant skin therapy Dubai, Professional facial treatment, Skin rejuvenation Dubai, Glow-enhancing facial in Dubai, Anti-aging facial in Dubai, Healthy skin facial in Dubai" key="keywords" />
        <meta name="robots" content="index, follow" key="robots" />
        <link rel="canonical" href={CANONICAL_URL} key="canonical" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="OxyGeneo Illuminate Facial in Dubai – Brighten Your Skin" key="og:title" />
        <meta property="og:description" content="OxyGeneo Illuminate Facial in Dubai exfoliates, oxygenates, and brightens skin, leaving it smooth, radiant, and refreshed under professional care." key="og:description" />
        <meta property="og:url" content={CANONICAL_URL} key="og:url" />
        <meta property="og:type" content="website" key="og:type" />
        <meta property="og:image" content="https://ramacarepolyclinic.ae/images/oxy1.jpg" key="og:image" />
        <meta property="og:site_name" content="RamaCare Polyclinic" key="og:site_name" />
        <meta property="og:locale" content="en_AE" key="og:locale" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content="OxyGeneo Illuminate Facial in Dubai – Brighten Your Skin" key="twitter:title" />
        <meta name="twitter:description" content="OxyGeneo Illuminate Facial in Dubai exfoliates, oxygenates, and brightens skin, leaving it smooth, radiant, and refreshed under professional care." key="twitter:description" />
        <meta name="twitter:image" content="https://ramacarepolyclinic.ae/images/oxy1.jpg" key="twitter:image" />

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
      <ContentReviewBadge doctorName="Sonita Sinaga" pageSlug="oxygeneo-illuminate-facial-dubai" />
      <FAQSection content={content?.faq} />
      <BookConsultation content={content?.bookConsultation} />
    </Layout>
  );
}
