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

export default function DiabetesMellitusCarePage() {
  const categoryName = 'General Physician';
  const subcategoryName = 'Diabetes Mellitus Care';

  // Get content from data file
  const content = getSubcategoryContent('general-physician-dubai', 'diabetes-mellitus-care-dubai');

  const CANONICAL_URL = "https://ramacarepolyclinic.ae/services/diabetes-mellitus-care-dubai/";
  const PAGE_TITLE = "Diabetes Mellitus Care in Dubai by Experienced Physicians";
  const PAGE_DESCRIPTION = "Get trusted diabetes mellitus care in Dubai with accurate diagnosis, lifestyle guidance, and ongoing medical support to help you manage blood sugar safely.";

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
            "name": "Diabetes Mellitus Care",
            "item": CANONICAL_URL
          }
        ]
      },
      {
        "@type": "MedicalWebPage",
        "@id": `${CANONICAL_URL}#webpage`,
        "name": "Diabetes Mellitus Care Dubai",
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
        <meta name="keywords" content="Diabetes mellitus care in Dubai, Diabetes treatment Dubai, Diabetes management clinic Dubai, Type 1 diabetes treatment in Dubai, Type 2 diabetes care in Dubai, Blood sugar control in Dubai, Diabetes doctor in Dubai, Endocrine care Dubai, Chronic diabetes management in Dubai" key="keywords" />
        <meta name="robots" content="index, follow" key="robots" />
        <link rel="canonical" href={CANONICAL_URL} key="canonical" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Diabetes Mellitus Care in Dubai by Experienced Physicians" key="og:title" />
        <meta property="og:description" content={PAGE_DESCRIPTION} key="og:description" />
        <meta property="og:type" content="article" key="og:type" />
        <meta property="og:url" content={CANONICAL_URL} key="og:url" />
        <meta property="og:image" content="https://ramacarepolyclinic.ae/images/diabetes1.jpg" key="og:image" />
        <meta property="og:image:width" content="1200" key="og:image:width" />
        <meta property="og:image:height" content="630" key="og:image:height" />
        <meta property="og:site_name" content="RamaCare Polyclinic" key="og:site_name" />
        <meta property="og:locale" content="en_AE" key="og:locale" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content="Diabetes Mellitus Care in Dubai by Experienced Physicians" key="twitter:title" />
        <meta name="twitter:description" content="Accurate diagnosis, lifestyle guidance, and ongoing medical support to manage blood sugar safely in Jumeirah 1, Dubai." key="twitter:description" />
        <meta name="twitter:image" content="https://ramacarepolyclinic.ae/images/diabetes1.jpg" key="twitter:image" />

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
      <ContentReviewBadge doctorName="Dr. Sahar Zomorrodi" pageSlug="diabetes-mellitus-care-dubai" />
      <FAQSection content={content?.faq} />
      <BookConsultation content={content?.bookConsultation} />
    </Layout>
  );
}
