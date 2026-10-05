import Layout from '../../../components/Layout';
import Head from "next/head";
import TreatmentHero from '../../../components/TreatmentHero';
import QuickNavigation from '../../../components/QuickNavigation';
// import CertificationsSection from '../../../components/CertificationsSection';
import TreatmentOverview from '../../../components/TreatmentOverview';
import AyurvedaInfoSection from '../../../components/AyurvedaInfoSection';   // created in the Ayurveda hub work
import DoshaQuiz from '../../../components/DoshaQuiz'; 
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

 export default function PrakritiDoshaAssessmentPage() {
  const categoryName = 'Ayurveda';
  const subcategoryName = 'Prakriti & Dosha Assessment';

  // Get content from data file
  const content = getSubcategoryContent('ayurveda-dubai', 'analysis-of-individual');

 const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ramacarepolyclinic.ae/" },
    { "@type": "ListItem", "position": 2, "name": "Ayurveda", "item": "https://ramacarepolyclinic.ae/services/ayurveda-dubai/" },
    { "@type": "ListItem", "position": 3, "name": "Prakriti & Dosha Assessment", "item": "https://ramacarepolyclinic.ae/services/prakriti-dosha-assessment-dubai/" }
  ]
};

  const prakritiSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": "https://ramacarepolyclinic.ae/services/prakriti-dosha-assessment-dubai/#webpage",
        "url": "https://ramacarepolyclinic.ae/services/prakriti-dosha-assessment-dubai/",
        "name": "Prakriti & Dosha Assessment Dubai | Ayurvedic Consultation",
        "inLanguage": "en-AE",
        "about": { "@id": "https://ramacarepolyclinic.ae/services/prakriti-dosha-assessment-dubai/#procedure" },
        "isPartOf": { "@id": "https://ramacarepolyclinic.ae/services/ayurveda-dubai/#webpage" },
        "reviewedBy": { "@id": "https://ramacarepolyclinic.ae/doctors/dr-shamna-keloth-meethal-ayurveda-doctor-dubai/#physician" },
        "lastReviewed": "YYYY-MM-DD"
      },
      {
        "@type": "DiagnosticProcedure",
        "@id": "https://ramacarepolyclinic.ae/services/prakriti-dosha-assessment-dubai/#procedure",
        "name": "Ayurvedic Prakriti and dosha assessment",
        "alternateName": ["Ayurvedic consultation", "Dosha test", "Prakriti analysis", "Nadi Pariksha", "Ashtavidha Pariksha", "Ayurvedic pulse diagnosis"],
        "description": "An in-person Ayurvedic consultation with a BAMS doctor to assess your constitution (Prakriti) and current imbalance (Vikriti) of Vata, Pitta and Kapha, using pulse diagnosis (Nadi Pariksha), tongue and eye examination and a detailed history. 45–60 minutes, from AED 200.",
        "procedureType": "https://schema.org/NoninvasiveProcedure",
        "relevantSpecialty": "https://schema.org/Ayurvedic",
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
        <title key="title">Prakriti & Dosha Assessment Dubai | Ayurvedic Consultation</title>
        <meta
          name="description"
          content="Find your dosha with a Prakriti assessment in Jumeirah 1, Dubai: Nadi Pariksha (pulse diagnosis), tongue and eye exam by a BAMS doctor. From AED 200."
          key="description"
        />
        <meta name="robots" content="index, follow" key="robots" />
        <link rel="canonical" href="https://ramacarepolyclinic.ae/services/prakriti-dosha-assessment-dubai/" key="canonical" />

        {/* Open Graph Tags */}
        <meta property="og:type" content="website" key="og:type" />
        <meta property="og:title" content="Prakriti & Dosha Assessment Dubai | Ayurvedic Consultation" key="og:title" />
        <meta
          property="og:description"
          content="Find your dosha with a Prakriti assessment in Jumeirah 1, Dubai: Nadi Pariksha (pulse diagnosis), tongue and eye exam by a BAMS doctor. From AED 200."
          key="og:description"
        />
        <meta property="og:url" content="https://ramacarepolyclinic.ae/services/prakriti-dosha-assessment-dubai/" key="og:url" />
        <meta property="og:image" content="https://ramacarepolyclinic.ae/images/analysis.jpg" key="og:image" />
        <meta property="og:site_name" content="RamaCare Polyclinic" key="og:site_name" />
        <meta property="og:locale" content="en_AE" key="og:locale" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content="Prakriti & Dosha Assessment Dubai | Ayurvedic Consultation" key="twitter:title" />
        <meta
          name="twitter:description"
          content="Find your dosha with a Prakriti assessment in Jumeirah 1, Dubai: Nadi Pariksha (pulse diagnosis), tongue and eye exam by a BAMS doctor. From AED 200."
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(prakritiSchema) }}
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
      <AyurvedaInfoSection content={content?.doshaGuide} />      {/* NEW: the three doshas */}
      <DoshaQuiz />                                               {/* NEW: find your dosha quiz */}
      <AyurvedaInfoSection content={content?.ashtavidha} />      {/* NEW: the eight-fold examination */}
      <AyurvedaInfoSection content={content?.balanceDoshas} />   {/* NEW: how to balance each dosha */}
      <HealingJourney content={content?.healingJourney} />
      <TreatmentBenefits 
        content={content?.benefits}
      />
      <PatientTestimonials content={content?.testimonials} />
      <DoctorsSection content={content?.doctors} />
      <PaymentInsurance content={content?.paymentInsurance} />
      <ContentReviewBadge doctorName="Dr. Shamna Keloth Meethal" pageSlug="prakriti-dosha-assessment-dubai" lastReviewed="2026-01-12" />
      <FAQSection content={content?.faq} />
      <BookConsultation content={content?.bookConsultation} />
    </Layout>
  );
}

