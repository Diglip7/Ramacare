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

export default function ComprehensivePhysicalExaminationsPage() {
  const categoryName = 'General Physician';
  const subcategoryName = 'Comprehensive Physical Examinations';

  // Get content from data file
  const content = getSubcategoryContent('general-physician-dubai', 'comprehensive-physical-examinations');

  const CANONICAL_URL = "https://ramacarepolyclinic.ae/services/comprehensive-physical-examinations-dubai/";
  const PAGE_TITLE = "Regular Physical Examinations in Dubai | Trusted Care";
  const PAGE_DESCRIPTION = "Regular physical examinations in Dubai with experienced doctors, clear screenings, and personalised advice to detect health issues early and support long-term health.";

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
            "name": "General Physician",
            "item": "https://ramacarepolyclinic.ae/services/general-physician-dubai"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Comprehensive Physical Examinations",
            "item": CANONICAL_URL
          }
        ]
      },
      {
        "@type": "MedicalWebPage",
        "@id": `${CANONICAL_URL}#webpage`,
        "name": "Comprehensive Physical Examinations Dubai",
        "url": CANONICAL_URL,
        "description": PAGE_DESCRIPTION,
        "medicalAudience": "Patient",
        "reviewedBy": {
          "@type": "Person",
          "name": "Dr. Sahar Zomorrodi",
          "jobTitle": "General Practitioner & Aesthetic Specialist",
          "url": "https://ramacarepolyclinic.ae/doctors/dr-sahar-zomorrodi-general-practitioner-dubai/"
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
        <meta name="keywords" content="regular physical examinations in Dubai, physical check-up Dubai, general physical exam Dubai, preventive health check Dubai, routine medical exam Dubai, annual physical examination in Dubai, Primary care examination in Dubai, health screening Dubai, preventive healthcare Dubai" key="keywords" />
        <meta name="robots" content="index, follow" key="robots" />
        <link rel="canonical" href={CANONICAL_URL} key="canonical" />

        {/* Open Graph Tags */}
        <meta property="og:title" content={PAGE_TITLE} key="og:title" />
        <meta property="og:description" content={PAGE_DESCRIPTION} key="og:description" />
        <meta property="og:type" content="article" key="og:type" />
        <meta property="og:url" content={CANONICAL_URL} key="og:url" />
        <meta property="og:image" content="https://ramacarepolyclinic.ae/images/physical-examination.jpg" key="og:image" />
        <meta property="og:image:width" content="1200" key="og:image:width" />
        <meta property="og:image:height" content="630" key="og:image:height" />
        <meta property="og:site_name" content="RamaCare Polyclinic" key="og:site_name" />
        <meta property="og:locale" content="en_AE" key="og:locale" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content={PAGE_TITLE} key="twitter:title" />
        <meta name="twitter:description" content="Experienced doctors, clear screenings, and personalised advice to detect health issues early in Jumeirah 1, Dubai." key="twitter:description" />
        <meta name="twitter:image" content="https://ramacarepolyclinic.ae/images/physical-examination.jpg" key="twitter:image" />

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
      <ContentReviewBadge doctorName="Dr. Sahar Zomorrodi" pageSlug="comprehensive-physical-examinations-dubai" />
      <FAQSection content={content?.faq} />
      <BookConsultation content={content?.bookConsultation} />
    </Layout>
  );
}
