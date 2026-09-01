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

export default function ManagementofAllergyPage() {
  const categoryName = 'General Physician';
  const subcategoryName = 'Management of Allergy';

  const content = getSubcategoryContent('general-physician-dubai', 'management-of-allergy');

  const CANONICAL_URL = "https://ramacarepolyclinic.ae/services/management-of-allergy-dubai/";
  const PAGE_TITLE = "Management of Allergy in Dubai | RamaCare Polyclinic";
  const PAGE_DESCRIPTION = "Management of allergy in Dubai provides personalised care for skin, food, respiratory, and seasonal allergies with accurate diagnosis and long-term relief plans.";

  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `${CANONICAL_URL}#breadcrumb`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ramacarepolyclinic.ae/" },
          { "@type": "ListItem", "position": 2, "name": "General Physician", "item": "https://ramacarepolyclinic.ae/services/general-physician-dubai/" },
          { "@type": "ListItem", "position": 3, "name": "Management of Allergy", "item": CANONICAL_URL }
        ]
      },
      {
        "@type": "MedicalCondition",
        "@id": `${CANONICAL_URL}#condition`,
        "name": "Allergic Conditions",
        "alternateName": "Allergies",
        "url": CANONICAL_URL,
        "description": "Allergic conditions include immune system reactions to substances such as pollen, food, dust, insect bites, and medications, which can lead to symptoms such as itching, sneezing, rashes, swelling, and respiratory difficulty.",
        "possibleTreatment": {
          "@type": "MedicalTherapy",
          "name": "Allergy Management Therapy",
          "description": "Structured allergy management involving clinical evaluation, diagnostics, avoidance strategies, and guided treatment plans provided by trained healthcare professionals."
        }
      },
      {
        "@type": "MedicalProcedure",
        "@id": `${CANONICAL_URL}#procedure`,
        "name": "Management of Allergy in Dubai",
        "alternateName": "Allergy Treatment",
        "url": CANONICAL_URL,
        "mainEntityOfPage": CANONICAL_URL,
        "description": "Diagnosis and long-term management of skin, food, respiratory, and seasonal allergies through trigger identification, medication management, and lifestyle guidance, delivered by DHA-licensed physicians in Dubai.",
        "procedureType": "Allergy evaluation and management",
        "howPerformed": "Allergy management starts with a detailed history and clinical assessment, followed by appropriate diagnostic testing. Treatment plans may include avoidance strategies, medications, lifestyle guidance, and monitoring.",
        "preparation": "Patients may be advised to prepare an allergy history, list of triggers, and any medication history prior to evaluation.",
        "followup": "Follow-up visits and progress monitoring are recommended to adjust treatment plans as needed.",
        "indication": [
          "Skin allergies",
          "Respiratory allergies",
          "Food sensitivities",
          "Seasonal allergic reactions",
          "Environmental allergies"
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
        <meta name="keywords" content="Management of allergy in Dubai, Allergy treatment Dubai, Allergy clinic Dubai, Skin allergy treatment Dubai, Respiratory allergy treatment in Dubai, Food allergy management in Dubai, Seasonal allergy care Dubai, Chronic allergy treatment in Dubai, Allergy specialist Dubai, Allergy diagnosis and treatment in Dubai" />
        <meta name="robots" content="index, follow" key="robots" />
        <link rel="canonical" href={CANONICAL_URL} key="canonical" />

        {/* Open Graph Tags */}
        <meta property="og:type" content="website" key="og:type" />
        <meta property="og:title" content={PAGE_TITLE} key="og:title" />
        <meta property="og:description" content={PAGE_DESCRIPTION} key="og:description" />
        <meta property="og:url" content={CANONICAL_URL} key="og:url" />
        <meta property="og:image" content="https://ramacarepolyclinic.ae/images/allergy1.jpg" key="og:image" />
        <meta property="og:image:width" content="1200" key="og:image:width" />
        <meta property="og:image:height" content="630" key="og:image:height" />
        <meta property="og:site_name" content="RamaCare Polyclinic" key="og:site_name" />
        <meta property="og:locale" content="en_AE" key="og:locale" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content={PAGE_TITLE} key="twitter:title" />
        <meta name="twitter:description" content="Personalised care for skin, food, respiratory, and seasonal allergies with accurate diagnosis and long-term relief plans." key="twitter:description" />
        <meta name="twitter:image" content="https://ramacarepolyclinic.ae/images/allergy1.jpg" key="twitter:image" />

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
      <ContentReviewBadge doctorName="Dr. Sahar Zomorrodi" pageSlug="management-of-allergy-dubai" />
      <FAQSection content={content?.faq} />
      <BookConsultation content={content?.bookConsultation} />
    </Layout>
  );
}

