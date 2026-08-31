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

export default function GastrointestinalDiseasesTreatmentPage() {
  const categoryName = 'Ayurveda';
  const subcategoryName = 'Gastrointestinal Diseases Treatment';

  // Get content from data file
  const content = getSubcategoryContent('ayurveda-dubai', 'gastrointestinal-diseases-treatment');

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
        "item": "https://ramacarepolyclinic.ae/services/ayurveda-dubai"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Gastrointestinal Diseases Treatment",
        "item": "https://ramacarepolyclinic.ae/services/gastrointestinal-diseases-treatment-dubai/"
      }
    ]
  };

  const medicalProcedureSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Gastrointestinal Diseases Treatment in Dubai",
    "description": "Comprehensive treatment for gastrointestinal conditions including acidity, gastritis, IBS, bloating, constipation, and digestive health management through medical evaluation and personalized Ayurvedic therapies.",
    "url": "https://ramacarepolyclinic.ae/services/gastrointestinal-diseases-treatment-dubai/",
    "procedureType": "https://schema.org/NoninvasiveProcedure",
    "reviewedBy": {
      "@type": "Physician",
      "name": "Dr. Shamna Keloth Meethal",
      "medicalSpecialty": "Ayurveda",
      "url": "https://ramacarepolyclinic.ae/doctors/dr-shamna-keloth-meethal-ayurveda-doctor-dubai/"
    },
    "provider": {
      "@type": "MedicalClinic",
      "name": "RamaCare Polyclinic",
      "url": "https://ramacarepolyclinic.ae/",
      "image": "https://ramacarepolyclinic.ae/images/gastroin.jpg",
      "telephone": "+971566597878",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "12 Al Dhiyafah Rd - Jumeirah Terrace Building, Ground Floor",
        "addressLocality": "Jumeirah 1",
        "addressRegion": "Dubai",
        "addressCountry": "AE"
      }
    }
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

  const physicianSchema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": "Dr. Shamna Keloth Meethal",
    "medicalSpecialty": "Ayurveda",
    "url": "https://ramacarepolyclinic.ae/doctors/dr-shamna-keloth-meethal-ayurveda-doctor-dubai/",
    "worksFor": {
      "@type": "MedicalClinic",
      "name": "RamaCare Polyclinic"
    }
  };

  return (
    <Layout>
      <Head>
        <title key="title">Gastrointestinal Treatment in Dubai | Digestive Health Care</title>
        <meta
          name="description"
          content="Receive expert gastrointestinal treatment in Dubai for stomach, intestinal, and digestive issues. Personalized care, modern diagnostics, and effective solutions for lasting health."
          key="description"
        />
        <meta
          name="keywords"
          content="Gastrointestinal treatment in Dubai, Digestive health Dubai, Stomach problem treatment in Dubai, Intestinal disorders in Dubai, Gut health care Dubai, Gastroenterologist Dubai, Digestive disorder solutions Dubai, Ayurvedic digestive treatment in Dubai, Gastroscopy Dubai, Gastro prevention Dubai, DHA licensed gastro clinic in Dubai, IBS treatment Dubai"
          key="keywords"
        />
        <meta name="robots" content="index, follow" key="robots" />
        <link rel="canonical" href="https://ramacarepolyclinic.ae/services/gastrointestinal-diseases-treatment-dubai/" key="canonical" />

        {/* Open Graph Tags */}
        <meta property="og:type" content="website" key="og:type" />
        <meta property="og:title" content="Gastrointestinal Treatment in Dubai | Digestive Health Care" key="og:title" />
        <meta
          property="og:description"
          content="Receive expert gastrointestinal treatment in Dubai for stomach, intestinal, and digestive issues. Personalized care, modern diagnostics, and effective solutions for lasting health."
          key="og:description"
        />
        <meta property="og:url" content="https://ramacarepolyclinic.ae/services/gastrointestinal-diseases-treatment-dubai/" key="og:url" />
        <meta property="og:image" content="https://ramacarepolyclinic.ae/images/gastroin.jpg" key="og:image" />
        <meta property="og:site_name" content="RamaCare Polyclinic" key="og:site_name" />
        <meta property="og:locale" content="en_AE" key="og:locale" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content="Gastrointestinal Treatment in Dubai | Digestive Health Care" key="twitter:title" />
        <meta
          name="twitter:description"
          content="Receive expert gastrointestinal treatment in Dubai for stomach, intestinal, and digestive issues. Personalized care and effective solutions."
          key="twitter:description"
        />
        <meta name="twitter:image" content="https://ramacarepolyclinic.ae/images/gastroin.jpg" key="twitter:image" />

        {/* Structured Data Schemas */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalProcedureSchema) }}
        />
        {faqSchema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          />
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianSchema) }}
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
      <ContentReviewBadge doctorName="Dr. Shamna Keloth Meethal" pageSlug="gastrointestinal-diseases-treatment-dubai" />
      <FAQSection content={content?.faq} />
      <BookConsultation content={content?.bookConsultation} />
    </Layout>
  );
}

