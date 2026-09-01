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

export default function MinorInjuryCarePage() {
  const categoryName = 'General Physician';
  const subcategoryName = 'Minor Injury Care';

  const content = getSubcategoryContent('general-physician-dubai', 'minor-injury-care');

  const CANONICAL_URL = "https://ramacarepolyclinic.ae/services/minor-injury-care/";
  const PAGE_TITLE = "Minor Injury Care in Dubai | Fast & Expert Medical Help";
  const PAGE_DESCRIPTION = "Get expert minor injury care in Dubai for cuts, bruises, sprains, and wounds. Quick, safe treatment by experienced doctors with proper aftercare guidance.";

  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `${CANONICAL_URL}#breadcrumb`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ramacarepolyclinic.ae/" },
          { "@type": "ListItem", "position": 2, "name": "General Physician", "item": "https://ramacarepolyclinic.ae/services/general-physician-dubai/" },
          { "@type": "ListItem", "position": 3, "name": "Minor Injury Care", "item": CANONICAL_URL }
        ]
      },
      {
        "@type": "MedicalCondition",
        "@id": `${CANONICAL_URL}#condition`,
        "name": "Minor Injuries",
        "alternateName": "Cuts, Sprains, Bruises & Minor Traumas",
        "url": CANONICAL_URL,
        "description": "Minor injuries include non-life-threatening conditions such as cuts, sprains, bruises, strains, falls, and superficial wounds that require clinical assessment and treatment.",
        "possibleTreatment": {
          "@type": "MedicalTherapy",
          "name": "Minor Injury Care Treatment",
          "description": "Evaluation and treatment of minor injuries including wound care, splinting, bandaging, pain management, and follow-up guidance by trained clinicians at RamaCare Polyclinic in Dubai."
        }
      },
      {
        "@type": "MedicalProcedure",
        "@id": `${CANONICAL_URL}#procedure`,
        "name": "Minor Injury Care",
        "alternateName": "Minor Trauma & Injury Clinic",
        "url": CANONICAL_URL,
        "mainEntityOfPage": CANONICAL_URL,
        "description": "Prompt medical treatment for non-life-threatening injuries including cuts, minor burns, sprains, and bruises, delivered by DHA-licensed physicians in Dubai.",
        "procedureType": "Minor injury evaluation and care",
        "howPerformed": "After clinical assessment, treatment may include wound cleaning, dressing, splint/support application, pain relief recommendations, and follow-up advice.",
        "preparation": "No special preparation is needed, just share the injury history and symptoms with the clinician.",
        "followup": "Follow-up visits may be advised to assess healing and adjust care.",
        "indication": [
          "Superficial cuts and abrasions",
          "Sprains and strains",
          "Minor soft tissue injuries",
          "Bruises",
          "Simple falls"
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
        <meta name="keywords" content="Minor injury care in Dubai, Emergency minor injury treatment, Cuts and bruises treatment in Dubai, Sprains and strains care in Dubai, Wound care Dubai, Accident injury treatment in Dubai, First aid clinic Dubai, Injury management Dubai, Quick medical care in Dubai, Minor trauma care in Dubai, Dubai urgent care clinic, Expert injury care in Dubai" />
        <meta name="robots" content="index, follow" key="robots" />
        <link rel="canonical" href={CANONICAL_URL} key="canonical" />

        {/* Open Graph Tags */}
        <meta property="og:type" content="website" key="og:type" />
        <meta property="og:title" content="Minor Injury Care in Dubai | Fast &amp; Expert Medical Help" key="og:title" />
        <meta property="og:description" content="Get expert minor injury care in Dubai for cuts, bruises, sprains, and wounds. Quick, safe treatment by experienced doctors with proper aftercare guidance." key="og:description" />
        <meta property="og:url" content={CANONICAL_URL} key="og:url" />
        <meta property="og:image" content="https://ramacarepolyclinic.ae/images/minor-injury1.jpg" key="og:image" />
        <meta property="og:image:width" content="1200" key="og:image:width" />
        <meta property="og:image:height" content="630" key="og:image:height" />
        <meta property="og:site_name" content="RamaCare Polyclinic" key="og:site_name" />
        <meta property="og:locale" content="en_AE" key="og:locale" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content="Minor Injury Care in Dubai | Fast & Expert Medical Help" key="twitter:title" />
        <meta name="twitter:description" content="Quick, safe treatment for cuts, bruises, sprains, and wounds by experienced doctors with proper aftercare guidance." key="twitter:description" />
        <meta name="twitter:image" content="https://ramacarepolyclinic.ae/images/minor-injury1.jpg" key="twitter:image" />

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
      <ContentReviewBadge doctorName="Dr. Sahar Zomorrodi" pageSlug="minor-injury-care" />
      <FAQSection content={content?.faq} />
      <BookConsultation content={content?.bookConsultation} />
    </Layout>
  );
}
