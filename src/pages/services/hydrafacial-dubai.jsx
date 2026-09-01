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

export default function SignatureHydraFacialPage() {
  const categoryName = 'Facial';
  const subcategoryName = 'HydraFacial in Dubai';

  // Get content from data file
  const content = getSubcategoryContent('facial-dubai', 'signature-hydra-facial');

  const navItems = [
    { id: 'treatment-info', label: 'Treatment Info' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'benefits', label: 'Benefits' },
    { id: 'why-choose', label: 'Why Choose HydraFacial' },
    { id: 'conditions-we-treat', label: 'Who Is It For' },
    { id: 'our-doctors', label: 'Our Doctors' },
    { id: 'faq', label: 'FAQ' },
    { id: 'book-now', label: 'Book Now' }
  ];

  const CANONICAL_URL = "https://ramacarepolyclinic.ae/services/hydrafacial-dubai/";
  const PAGE_TITLE = "HydraFacial in Dubai | Best HydraFacial Treatment - RamaCare Polyclinic";
  const PAGE_DESCRIPTION = "Experience the best HydraFacial in Dubai at RamaCare Polyclinic. Deep cleanse, exfoliate & hydrate for an instant glow. DHA-licensed specialists, zero downtime.";

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
            "name": "Facial Treatments Dubai",
            "item": "https://ramacarepolyclinic.ae/services/facial-dubai/"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "HydraFacial",
            "item": CANONICAL_URL
          }
        ]
      },
      {
        "@type": "MedicalWebPage",
        "@id": `${CANONICAL_URL}#webpage`,
        "name": "HydraFacial Dubai",
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
        "@type": "MedicalClinic",
        "@id": "https://ramacarepolyclinic.ae/#clinic",
        "name": "RamaCare Polyclinic",
        "url": "https://ramacarepolyclinic.ae/",
        "telephone": "+971566597878",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "12 Al Dhiyafah Rd, Jumeirah Terrace Building, Ground Floor",
          "addressLocality": "Jumeirah 1, Dubai",
          "addressCountry": "AE"
        },
        "openingHours": "Su-Sa 10:00-22:00",
        "medicalSpecialty": "Dermatology",
        "priceRange": "$$",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "500"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Facial Treatments",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "MedicalProcedure",
                "name": "HydraFacial in Dubai",
                "description": "HydraFacial is a non-invasive, medical-grade skin treatment that combines cleansing, exfoliation, gentle extraction, and deep hydration into one session using patented Vortex-Fusion technology.",
                "howPerformed": "Performed by DHA-licensed aesthetic specialists using multi-step cleansing, exfoliation, extraction, and antioxidant serum infusion tailored to the skin's needs.",
                "procedureType": "Non-invasive aesthetic treatment",
                "preparation": "Arrive with clean skin and avoid heavy makeup.",
                "followup": "Monthly sessions recommended for optimal skin health."
              }
            }
          ]
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
        <meta name="keywords" content="HydraFacial Dubai, HydraFacial treatment Dubai, best HydraFacial Dubai, HydraFacial cost Dubai, deep cleansing facial, Dubai DHA licensed facial clinic, HydraFacial Jumeirah, non-invasive skin treatment Dubai" key="keywords" />
        <meta name="robots" content="index, follow" key="robots" />
        <link rel="canonical" href={CANONICAL_URL} key="canonical" />

        {/* Open Graph Tags */}
        <meta property="og:title" content={PAGE_TITLE} key="og:title" />
        <meta property="og:description" content={PAGE_DESCRIPTION} key="og:description" />
        <meta property="og:type" content="article" key="og:type" />
        <meta property="og:url" content={CANONICAL_URL} key="og:url" />
        <meta property="og:image" content="https://ramacarepolyclinic.ae/images/signature.jpg" key="og:image" />
        <meta property="og:image:width" content="1200" key="og:image:width" />
        <meta property="og:image:height" content="630" key="og:image:height" />
        <meta property="og:site_name" content="RamaCare Polyclinic" key="og:site_name" />
        <meta property="og:locale" content="en_AE" key="og:locale" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content={PAGE_TITLE} key="twitter:title" />
        <meta name="twitter:description" content="Deep cleanse, exfoliate, and hydrate for an instant glow with DHA-licensed specialists in Jumeirah 1, Dubai. Zero downtime." key="twitter:description" />
        <meta name="twitter:image" content="https://ramacarepolyclinic.ae/images/signature.jpg" key="twitter:image" />

        {/* Structured Data Schemas */}
        <script
          key="schema-graph"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
        />
      </Head>

      <TreatmentHero 
        categoryName="Facial Treatments Dubai"
        subcategoryName="HydraFacial"
        description={content?.hero?.description}
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
      <DoctorsSection content={content?.doctors} customDoctors={content?.doctors?.doctors} />
      <PaymentInsurance content={content?.paymentInsurance} />
      <ContentReviewBadge doctorName="Sonita Sinaga" pageSlug="hydrafacial-dubai" />
      <FAQSection content={content?.faq} />
      <BookConsultation content={content?.bookConsultation} />
    </Layout>
  );
}
