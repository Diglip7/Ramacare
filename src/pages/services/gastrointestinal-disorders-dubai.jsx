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

export default function GastrointestinalDisordersPage() {
  const categoryName = 'General Physician';
  const subcategoryName = 'Gastrointestinal Disorders';

  const content = getSubcategoryContent('general-physician-dubai', 'gastrointestinal-disorders');

  const CANONICAL_URL = "https://ramacarepolyclinic.ae/services/gastrointestinal-disorders-dubai/";
  const PAGE_TITLE = "Gastrointestinal Disorders Treatment in Dubai | RamaCare";
  const PAGE_DESCRIPTION = "Gastrointestinal disorders treatment in Dubai offers expert care for acidity, IBS, constipation, ulcers, and digestive issues with accurate diagnosis and guidance.";

  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `${CANONICAL_URL}#breadcrumb`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ramacarepolyclinic.ae/" },
          { "@type": "ListItem", "position": 2, "name": "General Physician", "item": "https://ramacarepolyclinic.ae/services/general-physician-dubai/" },
          { "@type": "ListItem", "position": 3, "name": "Gastrointestinal Disorders", "item": CANONICAL_URL }
        ]
      },
      {
        "@type": "MedicalCondition",
        "@id": `${CANONICAL_URL}#condition`,
        "name": "Gastrointestinal Disorders",
        "alternateName": "GI Disorders",
        "url": CANONICAL_URL,
        "description": "Gastrointestinal disorders are conditions that affect the digestive tract, including symptoms like abdominal pain, bloating, indigestion, heartburn, constipation, diarrhea and other related digestive dysfunctions.",
        "possibleTreatment": {
          "@type": "MedicalTherapy",
          "name": "Gastrointestinal Disorder Treatment",
          "description": "Comprehensive assessment and treatment for gastrointestinal issues at RamaCare Polyclinic in Dubai involving medical evaluation, diagnostic procedures, lifestyle support and therapeutic interventions."
        }
      },
      {
        "@type": "MedicalProcedure",
        "@id": `${CANONICAL_URL}#procedure`,
        "name": "Gastrointestinal Disorders Treatment in Dubai",
        "alternateName": "GI Care & Digestive Health Treatment",
        "url": CANONICAL_URL,
        "mainEntityOfPage": CANONICAL_URL,
        "description": "Diagnosis and treatment for GERD, gastritis, IBS, IBD, constipation, and other digestive disorders, delivered by DHA-licensed general physicians in Dubai.",
        "procedureType": "Diagnostic and therapeutic gastrointestinal care",
        "howPerformed": "Treatment begins with detailed history, clinical assessment, and appropriate diagnostic testing including imaging and lab work. Personalized treatment plans may include dietary advice, medical therapy, lifestyle modification and follow-up support.",
        "preparation": "Patients may be advised to fast before certain diagnostic tests and bring a record of symptoms and medical history.",
        "followup": "Ongoing monitoring and follow-up visits are recommended to assess improvement and adjust therapy as required.",
        "indication": [
          "Abdominal pain",
          "Indigestion",
          "Bloating and gas",
          "Heartburn",
          "Constipation or diarrhea"
        ],
        "provider": {
          "@type": "MedicalClinic",
          "name": "RamaCare Polyclinic",
          "url": "https://ramacarepolyclinic.ae/",
          "telephone": "+971566597878",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "12 Al Dhiyafah Rd, Jumeirah Terrace Building, Ground Floor",
            "addressLocality": "Jumeirah 1, Dubai",
            "addressCountry": "AE"
          },
          "areaServed": { "@type": "City", "name": "Dubai" }
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
        <meta name="keywords" content="Gastrointestinal disorders treatment in Dubai, Digestive disorders treatment in Dubai, Stomach problem treatment in Dubai, IBS treatment Dubai, Acidity and gas treatment in Dubai, Gut Health Clinic Dubai, Digestive health care Dubai, Gastrointestinal care Dubai, Ayurvedic digestive treatment in Dubai, Chronic digestive disorder treatment" />
        <meta name="robots" content="index, follow" key="robots" />
        <link rel="canonical" href={CANONICAL_URL} key="canonical" />

        {/* Open Graph Tags */}
        <meta property="og:type" content="website" key="og:type" />
        <meta property="og:title" content={PAGE_TITLE} key="og:title" />
        <meta property="og:description" content={PAGE_DESCRIPTION} key="og:description" />
        <meta property="og:url" content={CANONICAL_URL} key="og:url" />
        <meta property="og:image" content="https://ramacarepolyclinic.ae/images/gastroin1.jpg" key="og:image" />
        <meta property="og:image:width" content="1200" key="og:image:width" />
        <meta property="og:image:height" content="630" key="og:image:height" />
        <meta property="og:site_name" content="RamaCare Polyclinic" key="og:site_name" />
        <meta property="og:locale" content="en_AE" key="og:locale" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content={PAGE_TITLE} key="twitter:title" />
        <meta name="twitter:description" content="Expert care for acidity, IBS, constipation, ulcers, and digestive issues with accurate diagnosis and guidance." key="twitter:description" />
        <meta name="twitter:image" content="https://ramacarepolyclinic.ae/images/gastroin1.jpg" key="twitter:image" />

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
      <ContentReviewBadge doctorName="Dr. Sahar Zomorrodi" pageSlug="gastrointestinal-disorders-dubai" />
      <FAQSection content={content?.faq} />
      <BookConsultation content={content?.bookConsultation} />
    </Layout>
  );
}

