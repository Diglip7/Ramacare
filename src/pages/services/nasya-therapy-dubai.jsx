import Layout from '../../../components/Layout';
import Head from "next/head";
import TreatmentHero from '../../../components/TreatmentHero';
import QuickNavigation from '../../../components/QuickNavigation';
import TreatmentOverview from '../../../components/TreatmentOverview';
import BastiTherapySections from '../../../components/BastiTherapySections';
import AyurvedaInfoSection from '../../../components/AyurvedaInfoSection'; 
import HealingJourney from '../../../components/HealingJourney';
import TreatmentBenefits from '../../../components/TreatmentBenefits';
import CostAndResults from '../../../components/CostAndResults';
import PatientTestimonials from '../../../components/VideoTestimonials';
import DoctorsSection from '../../../components/DoctorsSection';
import PaymentInsurance from '../../../components/PaymentInsurance';
import FAQSection from '../../../components/Faq';
import BookConsultation from '../../../components/BookConsultation';
import ContentReviewBadge from '../../../components/ContentReviewBadge';
import { getSubcategoryContent } from '../../data/subcategoryContent';

export default function NasyaTherapyPage() {
  const categoryName = 'Ayurveda';
  const subcategoryName = 'Nasya Therapy';

  // Get content from data file
  const content = getSubcategoryContent('ayurveda-dubai', 'nasya-therapy');

  // Custom navigation items for Nasya Therapy page
  const navItems = [
  { id: 'treatment-info', label: 'What Is Nasya' },
  { id: 'nasya-types', label: 'Types & Oils' },
  { id: 'nasya-procedure', label: 'What Happens' },
  { id: 'sinus-or-allergy', label: 'Sinus & Allergies' },
  { id: 'who-should-not', label: 'Who Should Not' },
  { id: 'faq', label: 'FAQ' },
  { id: 'book-now', label: 'Book Now' },
];

  const faqsForSchema = content?.faq?.faqs?.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer.replace(/<[^>]*>/g, '')
    }
  })) || [];

  const schemaGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://ramacarepolyclinic.ae/services/nasya-therapy-dubai/#webpage",
      "url": "https://ramacarepolyclinic.ae/services/nasya-therapy-dubai/",
      "name": "Nasya (Nasyam) Therapy Dubai | Ayurvedic Sinus Care, Jumeirah 1",
      "inLanguage": "en-AE",
      "about": { "@id": "https://ramacarepolyclinic.ae/services/nasya-therapy-dubai/#therapy" },
      "isPartOf": { "@id": "https://ramacarepolyclinic.ae/services/ayurveda-dubai/#webpage" },
      "reviewedBy": { "@id": "https://ramacarepolyclinic.ae/doctors/dr-shamna-keloth-meethal-ayurveda-doctor-dubai/#physician" },
      "lastReviewed": "YYYY-MM-DD",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ramacarepolyclinic.ae/" },
          { "@type": "ListItem", "position": 2, "name": "Ayurveda", "item": "https://ramacarepolyclinic.ae/services/ayurveda-dubai/" },
          { "@type": "ListItem", "position": 3, "name": "Nasya Therapy", "item": "https://ramacarepolyclinic.ae/services/nasya-therapy-dubai/" }
        ]
      }
    },
    {
      "@type": "MedicalTherapy",
      "@id": "https://ramacarepolyclinic.ae/services/nasya-therapy-dubai/#therapy",
      "name": "Nasya (Ayurvedic nasal therapy)",
      "alternateName": ["Nasyam", "Nasya Karma", "Ayurvedic nasal therapy", "Sneha Nasya", "Marsha Nasya", "Pratimarsha Nasya", "Pradhamana Nasya", "Navana Nasya"],
      "description": "Nasya is the Panchakarma therapy in which medicated oils, herbal juices or powders are given through the nose, traditionally used for conditions of the head, sinuses and neck. At RamaCare Polyclinic, Jumeirah 1, Dubai, it follows a consultation with a BAMS doctor, uses oils such as Anu Taila chosen for the patient, and is given by a same-gender therapist in 60–90 minute sessions including face massage and steam.",
      "relevantSpecialty": "https://schema.org/Ayurvedic",
      "bodyLocation": "Nose, sinuses, head and neck",
      "contraindication": ["Acute cold or fever", "Nosebleeds", "Pregnancy", "Immediately after meals or bathing"],
      "provider": { "@id": "https://ramacarepolyclinic.ae/#clinic" }
    },
    {
      "@type": "Physician",
      "@id": "https://ramacarepolyclinic.ae/doctors/dr-shamna-keloth-meethal-ayurveda-doctor-dubai/#physician",
      "name": "Dr. Shamna Keloth Meethal",
      "gender": "Female",
      "url": "https://ramacarepolyclinic.ae/doctors/dr-shamna-keloth-meethal-ayurveda-doctor-dubai/",
      "medicalSpecialty": "https://schema.org/Ayurvedic",
      "knowsLanguage": ["en", "ml", "hi"],
      "worksFor": { "@id": "https://ramacarepolyclinic.ae/#clinic" }
    },
    {
      "@type": "FAQPage",
      "mainEntity": faqsForSchema
    }
  ]
};

  return (
    <Layout>
      <Head>
        <title key="title">Nasya (Nasyam) Therapy Dubai | Ayurvedic Sinus Care, Jumeirah 1</title>
        <meta name="description" content="Nasya (Nasyam) in Jumeirah 1, Dubai: medicated oil nasal therapy with Anu Taila and other oils, after a BAMS doctor consultation. Same-gender therapists." key="description" />
        <meta name="robots" content="index, follow" key="robots" />
        <link rel="canonical" href="https://ramacarepolyclinic.ae/services/nasya-therapy-dubai/" key="canonical" />

        {/* Open Graph Tags */}
        <meta property="og:type" content="website" key="og:type" />
        <meta property="og:title" content="Nasya (Nasyam) Therapy Dubai | Ayurvedic Sinus Care, Jumeirah 1" key="og:title" />
        <meta property="og:description" content="Nasya (Nasyam) in Jumeirah 1, Dubai: medicated oil nasal therapy with Anu Taila and other oils, after a BAMS doctor consultation. Same-gender therapists." key="og:description" />
        <meta property="og:url" content="https://ramacarepolyclinic.ae/services/nasya-therapy-dubai/" key="og:url" />
        <meta property="og:image" content="https://ramacarepolyclinic.ae/images/nasya-therapy-dubai-og.jpg" key="og:image" />
        <meta property="og:image:width" content="1200" key="og:image:width" />
        <meta property="og:image:height" content="630" key="og:image:height" />
        <meta property="og:image:alt" content="Nasya (Nasyam) Ayurvedic nasal therapy at RamaCare Polyclinic, Jumeirah 1, Dubai" key="og:image:alt" />
        <meta property="og:site_name" content="RamaCare Polyclinic" key="og:site_name" />
        <meta property="og:locale" content="en_AE" key="og:locale" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content="Nasya (Nasyam) Therapy Dubai | Ayurvedic Sinus Care, Jumeirah 1" key="twitter:title" />
        <meta name="twitter:description" content="Nasya (Nasyam) in Jumeirah 1, Dubai: medicated oil nasal therapy with Anu Taila and other oils, after a BAMS doctor consultation. Same-gender therapists." key="twitter:description" />
        <meta name="twitter:image" content="https://ramacarepolyclinic.ae/images/nasya-therapy-dubai-og.jpg" key="twitter:image" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaGraph)
          }}
        />
      </Head>

      <TreatmentHero 
        categoryName={categoryName}
        subcategoryName={subcategoryName}
        hero={content?.hero}
      />
      <QuickNavigation navItems={navItems} />
      
      {/* 1. Treatment Overview */}
      <div id="treatment-info">
        <TreatmentOverview 
          subcategoryName={subcategoryName}
          content={content?.overview}
        />
      </div>

      <BastiTherapySections sectionType="conditions" content={content?.overview} />
      <AyurvedaInfoSection content={content?.nasyaTypes} />       {/* NEW: types and oils */}
      <AyurvedaInfoSection content={content?.nasyaProcedure} />   {/* NEW: what happens */}
      <AyurvedaInfoSection content={content?.sinusAllergy} />     {/* NEW: sinus, allergies, Dubai triggers, when to see the GP */}
      <AyurvedaInfoSection content={content?.whoShouldNot} />     {/* NEW: who should not */}
      <AyurvedaInfoSection content={content?.gettingHere} />      {/* NEW: Jumeirah 1 and nearby areas */}

      {/* 3. How It Works - Healing Journey */}
      <div id="how-it-works">
        <HealingJourney content={content?.healingJourney} />
      </div>

      {/* 4. Treatment Benefits */}
      <div id="benefits">
        <TreatmentBenefits 
          content={content?.benefits}
        />
      </div>

      {/* 5. Types of Nasya Therapy */}
      <BastiTherapySections sectionType="types" content={content?.treatmentProcess} />

      {/* 6. Why Choose Us */}
      <BastiTherapySections sectionType="whyChoose" content={content?.panchakarmaWhyChoose} />

      {/* 7. Cost & Recovery */}
      <div id="cost-and-results">
        <CostAndResults content={content?.costResults} />
      </div>

      {/* 9. Testimonials, Doctors, Payment, FAQ */}
      <div id="faq">
        <PatientTestimonials content={content?.testimonials} />
        <DoctorsSection content={content?.doctors} />
        <PaymentInsurance content={content?.paymentInsurance} />
        <ContentReviewBadge doctorName="Dr. Shamna Keloth Meethal" pageSlug="nasya-therapy-dubai" lastReviewed="2026-01-12" />
        <FAQSection content={content?.faq} />
      </div>

      {/* 10. Book Consultation */}
      <div id="book-now">
        <BookConsultation content={content?.bookConsultation} />
      </div>
    </Layout>
  );
}
