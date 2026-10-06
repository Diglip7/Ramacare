import Layout from '../../../components/Layout';
import Head from "next/head";
import TreatmentHero from '../../../components/TreatmentHero';
import QuickNavigation from '../../../components/QuickNavigation';
// import CertificationsSection from '../../../components/CertificationsSection';
import TreatmentOverview from '../../../components/TreatmentOverview';
import AyurvedaInfoSection from '../../../components/AyurvedaInfoSection';
import HealingJourney from '../../../components/HealingJourney';
import TreatmentBenefits from '../../../components/TreatmentBenefits';
import PanchakarmaWhyChoose from '../../../components/PanchakarmaWhyChoose';
import PatientTestimonials from '../../../components/VideoTestimonials';
import DoctorsSection from '../../../components/DoctorsSection';
// import PricingPackages from '../../../components/PricingPackages';
import PaymentInsurance from '../../../components/PaymentInsurance';
import FAQSection from '../../../components/Faq';
import BookConsultation from '../../../components/BookConsultation';
import ContentReviewBadge from '../../../components/ContentReviewBadge';
import { getSubcategoryContent } from '../../data/subcategoryContent';

export default function PanchakarmaTreatmentPage() {
  const categoryName = 'Ayurveda';
  const subcategoryName = 'Panchakarma Treatment';

  // Get content from data file
  const content = getSubcategoryContent('ayurveda-dubai', 'panchakarma-treatment');

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
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
        "name": "Ayurveda",
        "item": "https://ramacarepolyclinic.ae/services/ayurveda-dubai/"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Panchakarma Treatment",
        "item": "https://ramacarepolyclinic.ae/services/panchakarma-treatment-dubai/"
      }
    ]
  };

const panchakarmaSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://ramacarepolyclinic.ae/services/panchakarma-treatment-dubai/#webpage",
      "url": "https://ramacarepolyclinic.ae/services/panchakarma-treatment-dubai/",
      "name": "Panchakarma Treatment Dubai | 7, 14 & 21-Day Programmes",
      "inLanguage": "en-AE",
      "about": { "@id": "https://ramacarepolyclinic.ae/services/panchakarma-treatment-dubai/#therapy" },
      "isPartOf": { "@id": "https://ramacarepolyclinic.ae/services/ayurveda-dubai/#webpage" },
      "reviewedBy": { "@id": "https://ramacarepolyclinic.ae/doctors/dr-shamna-keloth-meethal-ayurveda-doctor-dubai/#physician" },
      "lastReviewed": "YYYY-MM-DD"
    },
    {
      "@type": "MedicalTherapy",
      "@id": "https://ramacarepolyclinic.ae/services/panchakarma-treatment-dubai/#therapy",
      "name": "Panchakarma",
      "alternateName": ["Panchakarma treatment", "Ayurvedic detox programme", "Vamana", "Virechana", "Basti", "Nasya", "Raktamokshana", "Karkidaka Chikitsa"],
      "description": "Classical Ayurvedic cleansing programme of 7, 14 or 21 days at RamaCare Polyclinic, Jumeirah 1, Dubai: preparation (Snehapana, Abhyanga, Swedana), one or more of the five main therapies (Vamana, Virechana, Basti, Nasya, Raktamokshana) and a recovery diet, planned by a BAMS doctor after a consultation.",
      "relevantSpecialty": "https://schema.org/Ayurvedic",
      "contraindication": ["Pregnancy", "Acute fever or infection", "Severe heart or kidney disease", "Recent surgery"],
      "provider": { "@id": "https://ramacarepolyclinic.ae/#clinic" }
    },
    {
      "@type": "Physician",
      "@id": "https://ramacarepolyclinic.ae/doctors/dr-shamna-keloth-meethal-ayurveda-doctor-dubai/#physician",
      "name": "Dr. Shamna Keloth Meethal",
      "url": "https://ramacarepolyclinic.ae/doctors/dr-shamna-keloth-meethal-ayurveda-doctor-dubai/",
      "medicalSpecialty": "https://schema.org/Ayurvedic",
      "knowsLanguage": ["en", "ml", "hi"],
      "worksFor": { "@id": "https://ramacarepolyclinic.ae/#clinic" }
    }
  ]
};

  const faqSchema = content?.faq?.faqs?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": content.faq.faqs.map((faq) => ({
          "@type": "Question",
          "name": faq.question.trim(),
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer.trim()
          }
        }))
      }
    : null;


  return (
    <Layout>
      <Head>
        <title key="title">Panchakarma Treatment Dubai | 7, 14 & 21-Day Programmes</title>
        <meta
          name="description"
          content="Classical Panchakarma in Jumeirah 1, Dubai: Vamana, Virechana, Basti, Nasya and Raktamokshana in 7–21 day programmes by a BAMS doctor. From AED 200."
          key="description"
        />
        <meta name="robots" content="index, follow" key="robots" />
        <link rel="canonical" href="https://ramacarepolyclinic.ae/services/panchakarma-treatment-dubai/" key="canonical" />

        {/* Open Graph Tags */}
        <meta property="og:type" content="website" key="og:type" />
        <meta property="og:title" content="Panchakarma Treatment Dubai | 7, 14 & 21-Day Programmes" key="og:title" />
        <meta
          property="og:description"
          content="Classical Panchakarma in Jumeirah 1, Dubai: Vamana, Virechana, Basti, Nasya and Raktamokshana in 7–21 day programmes by a BAMS doctor. From AED 200."
          key="og:description"
        />
        <meta property="og:url" content="https://ramacarepolyclinic.ae/services/panchakarma-treatment-dubai/" key="og:url" />
        <meta property="og:image" content="https://ramacarepolyclinic.ae/images/panchakarma.jpg" key="og:image" />
        <meta property="og:image:width" content="1200" key="og:image:width" />
        <meta property="og:image:height" content="630" key="og:image:height" />
        <meta property="og:image:alt" content="Panchakarma Treatment in Dubai - RamaCare Polyclinic" key="og:image:alt" />
        <meta property="og:site_name" content="RamaCare Polyclinic" key="og:site_name" />
        <meta property="og:locale" content="en_AE" key="og:locale" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content="Panchakarma Treatment Dubai | 7, 14 & 21-Day Programmes" key="twitter:title" />
        <meta
          name="twitter:description"
          content="Discover authentic Panchakarma treatment in Dubai for detox, stress relief, immunity boost, and rejuvenation."
          key="twitter:description"
        />
        <meta name="twitter:image" content="https://ramacarepolyclinic.ae/images/panchakarma.jpg" key="twitter:image" />

        {/* Structured Data Schemas */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
          <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(panchakarmaSchema) }}
    />
        {faqSchema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          />
        )}
      </Head>

      <TreatmentHero 
        categoryName={categoryName}
        subcategoryName={subcategoryName}
        hero={content?.hero}
      />
      <QuickNavigation />
    
      <TreatmentOverview subcategoryName={subcategoryName} content={content?.overview} />
      <AyurvedaInfoSection content={content?.fiveTherapies} />    {/* NEW: the 5 main therapies */}
      <AyurvedaInfoSection content={content?.threePhases} />      {/* NEW: Purva, Pradhana, Paschat Karma */}
      <AyurvedaInfoSection content={content?.programmes} />       {/* NEW: 7, 14 and 21-day programmes */}
      <AyurvedaInfoSection content={content?.bestTime} />         {/* NEW: best time of year, Karkidaka */}
      <AyurvedaInfoSection content={content?.prepareAftercare} /> {/* NEW: before, during, after */}
      <AyurvedaInfoSection content={content?.whoShouldNot} />     {/* NEW: who should not have it */}
      <HealingJourney content={content?.healingJourney} />
      <TreatmentBenefits 
        content={content?.benefits}
      />
      <PanchakarmaWhyChoose content={content?.panchakarmaWhyChoose} />
      <PatientTestimonials content={content?.testimonials} />
      <DoctorsSection content={content?.doctors} />
      <PaymentInsurance content={content?.paymentInsurance} />
      <ContentReviewBadge doctorName="Dr. Shamna Keloth Meethal" pageSlug="panchakarma-treatment-dubai" lastReviewed="2026-01-12" />
      <FAQSection content={content?.faq} />
      <BookConsultation content={content?.bookConsultation} />
    </Layout>
  );
}

