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

export default function AnalysisOfIndividualTreatmentPage() {
  const categoryName = 'Ayurveda';
  const subcategoryName = 'Analysis of the Individual';

  // Get content from data file
  const content = getSubcategoryContent('ayurveda-dubai', 'analysis-of-individual');

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
        "name": "Analysis of the Individual",
        "item": "https://ramacarepolyclinic.ae/services/analysis-of-individual-dubai/"
      }
    ]
  };

  const medicalProcedureSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Analysis of the Individual in Dubai",
    "description": "Comprehensive Ayurvedic health assessment evaluating Prakriti (body constitution), Vikriti (current dosha imbalance), digestive strength, and lifestyle factors to create a precise, personalized, root-cause-based treatment plan.",
    "url": "https://ramacarepolyclinic.ae/services/analysis-of-individual-dubai/",
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
      "image": "https://ramacarepolyclinic.ae/images/analysis.jpg",
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
        <title key="title">Individual Analysis in Dubai | Ayurvedic Health Assessment</title>
        <meta
          name="description"
          content="Get a personalized analysis of your health in Dubai. Ayurvedic experts assess your dosha, lifestyle, and body constitution to create natural wellness plans."
          key="description"
        />
        <meta
          name="keywords"
          content="Analysis of the individual Dubai, Ayurvedic body analysis Dubai, Dosha assessment Dubai, Personalized Ayurveda Dubai, Ayurvedic consultation in Dubai, Health evaluation in Dubai, Holistic wellness Dubai, Ayurvedic lifestyle guidance, Natural treatment Dubai, Ayurveda expert in Dubai, Individual health assessment, Traditional Ayurveda Dubai"
          key="keywords"
        />
        <meta name="robots" content="index, follow" key="robots" />
        <link rel="canonical" href="https://ramacarepolyclinic.ae/services/analysis-of-individual-dubai/" key="canonical" />

        {/* Open Graph Tags */}
        <meta property="og:type" content="website" key="og:type" />
        <meta property="og:title" content="Individual Analysis in Dubai | Ayurvedic Health Assessment" key="og:title" />
        <meta
          property="og:description"
          content="Get a personalized analysis of your health in Dubai. Ayurvedic experts assess your dosha, lifestyle, and body constitution to create natural wellness plans."
          key="og:description"
        />
        <meta property="og:url" content="https://ramacarepolyclinic.ae/services/analysis-of-individual-dubai/" key="og:url" />
        <meta property="og:image" content="https://ramacarepolyclinic.ae/images/analysis.jpg" key="og:image" />
        <meta property="og:site_name" content="RamaCare Polyclinic" key="og:site_name" />
        <meta property="og:locale" content="en_AE" key="og:locale" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content="Individual Analysis in Dubai | Ayurvedic Health Assessment" key="twitter:title" />
        <meta
          name="twitter:description"
          content="Get a personalized analysis of your health in Dubai. Ayurvedic experts assess your dosha, lifestyle, and body constitution to create natural wellness plans."
          key="twitter:description"
        />
        <meta name="twitter:image" content="https://ramacarepolyclinic.ae/images/analysis.jpg" key="twitter:image" />

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
      <ContentReviewBadge doctorName="Dr. Shamna Keloth Meethal" pageSlug="analysis-of-individual-dubai" />
      <FAQSection content={content?.faq} />
      <BookConsultation content={content?.bookConsultation} />
    </Layout>
  );
}

