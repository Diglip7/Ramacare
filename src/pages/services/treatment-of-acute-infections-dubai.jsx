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

export default function TreatmentofAcuteInfectionsPage() {
  const categoryName = 'General Physician';
  const subcategoryName = 'Treatment of Acute Infections';

  // Get content from data file
  const content = getSubcategoryContent('general-physician-dubai', 'treatment-of-acute-infections');

  const CANONICAL_URL = "https://ramacarepolyclinic.ae/services/treatment-of-acute-infections-dubai/";
  const PAGE_TITLE = "Treatment of Acute Infections in Dubai | Expert Medical Care";
  const PAGE_DESCRIPTION = "Get professional treatment for acute infections in Dubai. Experienced doctors provide fast, safe care for bacterial, viral, and other infections with proper follow-up.";

  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `${CANONICAL_URL}#breadcrumb`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ramacarepolyclinic.ae/" },
          { "@type": "ListItem", "position": 2, "name": "General Physician", "item": "https://ramacarepolyclinic.ae/services/general-physician-dubai/" },
          { "@type": "ListItem", "position": 3, "name": "Treatment of Acute Infections", "item": CANONICAL_URL }
        ]
      },
      {
        "@type": "MedicalCondition",
        "@id": `${CANONICAL_URL}#condition`,
        "name": "Acute Infections",
        "alternateName": "Short-Term Infectious Conditions",
        "url": CANONICAL_URL,
        "description": "Acute infections are rapid-onset infections caused by bacteria, viruses, or other pathogens that lead to symptoms such as fever, pain, inflammation, and systemic illness.",
        "possibleTreatment": {
          "@type": "MedicalTherapy",
          "name": "Acute Infection Treatment",
          "description": "Clinical evaluation, pathogen-specific therapy, antibiotics (when indicated), supportive care, and monitoring provided by trained clinicians."
        }
      },
      {
        "@type": "MedicalProcedure",
        "@id": `${CANONICAL_URL}#procedure`,
        "name": "Treatment of Acute Infections in Dubai",
        "alternateName": "Acute Infection Care & Management",
        "url": CANONICAL_URL,
        "mainEntityOfPage": CANONICAL_URL,
        "description": "Professional diagnosis and treatment for acute infections in Dubai including clinical assessment, targeted therapy, supportive care, and follow-up to ensure recovery.",
        "procedureType": "Medical evaluation and therapy",
        "howPerformed": "Treatment involves history taking, physical examination, diagnostic testing where indicated, and administration of appropriate medications or supportive measures.",
        "preparation": "Patients should share detailed symptom history and any recent infection exposures with the clinician.",
        "followup": "Ongoing monitoring is recommended to assess recovery and response to treatment.",
        "indication": [
          "Fever and systemic illness",
          "Respiratory infections",
          "Urinary tract infections",
          "Skin and soft tissue infections",
          "Gastrointestinal infections"
        ],
        "provider": {
          "@type": "MedicalClinic",
          "name": "RamaCare Polyclinic – Acute Infection Care",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "12 Al Dhiyafah Rd - Jumeirah Terrace Building, Ground Floor, Jumeirah 1",
            "addressLocality": "Jumeirah 1",
            "addressRegion": "Dubai",
            "postalCode": "393558",
            "addressCountry": "AE"
          },
          "telephone": "+971566597878",
          "areaServed": {
            "@type": "City",
            "name": "Dubai"
          },
          "priceRange": "$$"
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
        <meta name="keywords" content="Acute infection treatment in Dubai, Bacterial infection care in Dubai, Viral infection treatment in Dubai, Infectious disease management in Dubai, Dubai urgent infection care, Fever and infection treatment in Dubai, Rapid infection relief in Dubai, Infection diagnosis in Dubai, Antibiotic therapy in Dubai, Dubai infection clinic, Medical treatment for infections in Dubai, Emergency infection care in Dubai" key="keywords" />
        <meta name="robots" content="index, follow" key="robots" />
        <link rel="canonical" href={CANONICAL_URL} key="canonical" />
        {/* Open Graph Tags */}
        <meta property="og:type" content="website" key="og:type" />
        <meta property="og:title" content={PAGE_TITLE} key="og:title" />
        <meta property="og:description" content={PAGE_DESCRIPTION} key="og:description" />
        <meta property="og:url" content={CANONICAL_URL} key="og:url" />
        <meta property="og:image" content="https://ramacarepolyclinic.ae/images/acute1.jpg" key="og:image" />
        <meta property="og:image:width" content="1200" key="og:image:width" />
        <meta property="og:image:height" content="630" key="og:image:height" />
        <meta property="og:site_name" content="RamaCare Polyclinic" key="og:site_name" />
        <meta property="og:locale" content="en_AE" key="og:locale" />
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content={PAGE_TITLE} key="twitter:title" />
        <meta name="twitter:description" content={PAGE_DESCRIPTION} key="twitter:description" />
        <meta name="twitter:image" content="https://ramacarepolyclinic.ae/images/acute1.jpg" key="twitter:image" />
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
      <ContentReviewBadge doctorName="Dr. Sahar Zomorrodi" pageSlug="treatment-of-acute-infections-dubai" />
      <FAQSection content={content?.faq} />
      <BookConsultation content={content?.bookConsultation} />
    </Layout>
  );
}
