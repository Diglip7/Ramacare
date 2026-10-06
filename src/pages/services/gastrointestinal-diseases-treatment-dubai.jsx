import Layout from '../../../components/Layout';
import Head from "next/head";
import TreatmentHero from '../../../components/TreatmentHero';
import QuickNavigation from '../../../components/QuickNavigation';
// import CertificationsSection from '../../../components/CertificationsSection';
import TreatmentOverview from '../../../components/TreatmentOverview';
import HealingJourney from '../../../components/HealingJourney';
import AyurvedaInfoSection from '../../../components/AyurvedaInfoSection'; 
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
  const subcategoryName = 'Ayurvedic Digestive Treatment';

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
        "item": "https://ramacarepolyclinic.ae/services/ayurveda-dubai/"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Gastrointestinal Diseases Treatment",
        "item": "https://ramacarepolyclinic.ae/services/gastrointestinal-diseases-treatment-dubai/"
      }
    ]
  };
    const digestiveSchema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "MedicalWebPage",
          "@id": "https://ramacarepolyclinic.ae/services/gastrointestinal-diseases-treatment-dubai/#webpage",
          "url": "https://ramacarepolyclinic.ae/services/gastrointestinal-diseases-treatment-dubai/",
          "name": "Ayurvedic Gastric & Digestive Treatment Dubai | Acidity, IBS",
          "inLanguage": "en-AE",
          "about": { "@id": "https://ramacarepolyclinic.ae/services/gastrointestinal-diseases-treatment-dubai/#therapy" },
          "isPartOf": { "@id": "https://ramacarepolyclinic.ae/services/ayurveda-dubai/#webpage" },
          "reviewedBy": { "@id": "https://ramacarepolyclinic.ae/doctors/dr-shamna-keloth-meethal-ayurveda-doctor-dubai/#physician" },
          "lastReviewed": "YYYY-MM-DD"
        },
        {
          "@type": "MedicalTherapy",
          "@id": "https://ramacarepolyclinic.ae/services/gastrointestinal-diseases-treatment-dubai/#therapy",
          "name": "Ayurvedic treatment for digestive problems",
          "alternateName": ["Ayurvedic gastrointestinal diseases treatment", "Ayurvedic treatment for acidity", "Ayurvedic treatment for IBS", "Ayurvedic treatment for constipation", "Amlapitta", "Grahani", "Takradhara", "Dhanyamla Dhara"],
          "description": "Doctor-led Ayurvedic care for acidity, GERD, IBS, bloating, constipation and indigestion at RamaCare Polyclinic, Jumeirah 1, Dubai: consultation with a BAMS doctor, with a GP in the same building to rule out medical causes; herbal medicines such as Triphala, Avipattikar and Hingvastak; Takradhara, Dhanyamla Dhara, Virechana and Basti when suitable; and diet guidance.",
          "relevantSpecialty": "https://schema.org/Ayurvedic",
          "bodyLocation": "Digestive system",
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
        <title key="title">Ayurvedic Gastric & Digestive Treatment Dubai | Acidity, IBS</title>
        <meta
          name="description"
         content="Ayurvedic treatment for acidity, IBS, bloating and constipation in Jumeirah 1, Dubai. BAMS doctor with a GP on site; Takradhara, Virechana, Basti. From AED 200."
          key="description"
        />
        <meta name="robots" content="index, follow" key="robots" />
        <link rel="canonical" href="https://ramacarepolyclinic.ae/services/gastrointestinal-diseases-treatment-dubai/" key="canonical" />

        {/* Open Graph Tags */}
        <meta property="og:type" content="website" key="og:type" />
        <meta property="og:title" content="Ayurvedic Gastric & Digestive Treatment Dubai | Acidity, IBS" key="og:title" />
        <meta
          property="og:description"
          content="Ayurvedic treatment for acidity, IBS, bloating and constipation in Jumeirah 1, Dubai. BAMS doctor with a GP on site; Takradhara, Virechana, Basti. From AED 200."
          key="og:description"
        />
        <meta property="og:url" content="https://ramacarepolyclinic.ae/services/gastrointestinal-diseases-treatment-dubai/" key="og:url" />
        <meta property="og:image" content="https://ramacarepolyclinic.ae/images/gastroin.jpg" key="og:image" />
        <meta property="og:site_name" content="RamaCare Polyclinic" key="og:site_name" />
        <meta property="og:locale" content="en_AE" key="og:locale" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content="Ayurvedic Gastric & Digestive Treatment Dubai | Acidity, IBS" key="twitter:title" />
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(digestiveSchema) }}
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
      <AyurvedaInfoSection content={content?.redFlags} />          {/* NEW: see a doctor first if… */}
      <AyurvedaInfoSection content={content?.conditionGuide} />    {/* NEW: condition-by-condition guide */}
      <AyurvedaInfoSection content={content?.therapiesHerbs} />    {/* NEW: therapies and herbal medicines */}
      <AyurvedaInfoSection content={content?.dubaiDigestion} />    {/* NEW: acidity in the Dubai heat, Ramadan, eating out */}
      <AyurvedaInfoSection content={content?.foodsToAvoid} />      {/* NEW: foods to avoid and habits */}
      <HealingJourney content={content?.healingJourney} />
      <TreatmentBenefits 
        content={content?.benefits}
      />
      <PatientTestimonials content={content?.testimonials} />
      <DoctorsSection content={content?.doctors} />
      <PaymentInsurance content={content?.paymentInsurance} />
      <ContentReviewBadge doctorName="Dr. Shamna Keloth Meethal" pageSlug="gastrointestinal-diseases-treatment-dubai" lastReviewed="2026-01-12" />
      <FAQSection content={content?.faq} />
      <BookConsultation content={content?.bookConsultation} />
    </Layout>
  );
}

