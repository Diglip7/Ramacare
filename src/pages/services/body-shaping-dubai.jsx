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
import TreatmentAdditionalContent from '../../../components/TreatmentAdditionalContent';
import ContentReviewBadge from '../../../components/ContentReviewBadge';
import { getSubcategoryContent } from '../../data/subcategoryContent';

export default function BodyShapingPage() {
  const categoryName = 'Aesthetic Dermatology';
  const subcategoryName = 'Body Shaping';

  // Get content from data file
  const content = getSubcategoryContent('aesthetic-dermatology-dubai', 'body-shaping');

  const navItems = [
    { id: 'treatment-info', label: 'Treatment Info' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'sessions-and-results', label: 'Results & Sessions' },
    { id: 'professional-benefits', label: 'Professional Benefits' },
    { id: 'why-choose', label: 'Why Choose Us' },
    { id: 'conditions-we-treat', label: 'Areas We Treat' },
    { id: 'our-doctors', label: 'Our Doctors' },
    { id: 'faq', label: 'FAQ' },
    { id: 'book-now', label: 'Book Now' }
  ];

  const CANONICAL_URL = "https://ramacarepolyclinic.ae/services/body-shaping-dubai/";
  const PAGE_TITLE = "Body Shaping in Dubai | Expert Non-Surgical Body Sculpting";
  const PAGE_DESCRIPTION = "Achieve your ideal body with expert body shaping in Dubai—safe, non-surgical treatments for fat reduction, contouring, and toning with personalized care.";
  const OG_IMAGE = "https://ramacarepolyclinic.ae/images/body-shaping.jpg";

  // Dynamically generate FAQ schema from subcategory content data
  const rawFaqs = content?.faq?.faqs || content?.faq?.questions || [];

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
            "name": "Aesthetic Dermatology",
            "item": "https://ramacarepolyclinic.ae/services/aesthetic-dermatology-dubai/"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Body Shaping",
            "item": CANONICAL_URL
          }
        ]
      },
      {
        "@type": "MedicalProcedure",
        "@id": `${CANONICAL_URL}#procedure`,
        "name": "Body Shaping in Dubai",
        "description": "Non-surgical body contouring and fat reduction treatments designed to improve body definition, support skin tightening, and enhance overall body confidence using FDA-approved technologies within a DHA-licensed facility.",
        "url": CANONICAL_URL,
        "procedureType": "https://schema.org/NoninvasiveProcedure",
        "bodyLocation": "Body",
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
          "image": OG_IMAGE,
          "telephone": "+971566597878",
          "priceRange": "$$",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "12 Al Dhiyafah Rd - Jumeirah Terrace Building, Ground Floor",
            "addressLocality": "Jumeirah 1",
            "addressRegion": "Dubai",
            "addressCountry": "AE"
          }
        },
        "areaServed": { "@type": "City", "name": "Dubai" }
      },
      ...(rawFaqs.length ? [{
        "@type": "FAQPage",
        "@id": `${CANONICAL_URL}#faq`,
        "mainEntity": rawFaqs.map(item => ({
          "@type": "Question",
          "name": item.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer
          }
        }))
      }] : [])
    ]
  };

  return (
    <Layout>
      <Head>
        <title key="title">{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_DESCRIPTION} key="description" />
        <meta name="keywords" content="Body shaping in Dubai, Body sculpting Dubai, Body contouring Dubai, Non-surgical body shaping in Dubai, Fat reduction Dubai, Slimming treatments in Dubai, Muscle toning in Dubai, Safe body contouring in Dubai, Personalized body treatment Dubai, Cellulite treatment Dubai, Medical body shaping in Dubai, DHA licensed body clinic" />
        <meta name="robots" content="index, follow" key="robots" />
        <link rel="canonical" href={CANONICAL_URL} key="canonical" />

        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="website" key="og:type" />
        <meta property="og:title" content={PAGE_TITLE} key="og:title" />
        <meta property="og:description" content={PAGE_DESCRIPTION} key="og:description" />
        <meta property="og:url" content={CANONICAL_URL} key="og:url" />
        <meta property="og:image" content={OG_IMAGE} key="og:image" />
        <meta property="og:image:width" content="1200" key="og:image:width" />
        <meta property="og:image:height" content="630" key="og:image:height" />
        <meta property="og:site_name" content="RamaCare Polyclinic" key="og:site_name" />
        <meta property="og:locale" content="en_AE" key="og:locale" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content={PAGE_TITLE} key="twitter:title" />
        <meta name="twitter:description" content={PAGE_DESCRIPTION} key="twitter:description" />
        <meta name="twitter:image" content={OG_IMAGE} key="twitter:image" />

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
      <QuickNavigation navItems={navItems} />
    
      <TreatmentOverview 
        subcategoryName={subcategoryName}
        content={content?.overview}
      />
      <HealingJourney content={content?.healingJourney} />
      <TreatmentBenefits 
        content={content?.benefits}
      />
      <TreatmentAdditionalContent content={content} />
      <PatientTestimonials content={content?.testimonials} />
      <DoctorsSection content={content?.doctors} />
    
      <PaymentInsurance content={content?.paymentInsurance} />
      <ContentReviewBadge doctorName="Sonita Sinaga" pageSlug="body-shaping-dubai" />
      <FAQSection content={content?.faq} />
      <BookConsultation content={content?.bookConsultation} />
    </Layout>
  );
}
