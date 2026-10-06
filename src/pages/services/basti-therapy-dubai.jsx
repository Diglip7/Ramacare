import Layout from '../../../components/Layout';
import Head from "next/head";
import TreatmentHero from '../../../components/TreatmentHero';
import QuickNavigation from '../../../components/QuickNavigation';
// import CertificationsSection from '../../../components/CertificationsSection';
import TreatmentOverview from '../../../components/TreatmentOverview';
import BastiTherapySections from '../../../components/BastiTherapySections';
import AyurvedaInfoSection from '../../../components/AyurvedaInfoSection';
import HealingJourney from '../../../components/HealingJourney';
import TreatmentBenefits from '../../../components/TreatmentBenefits';
import ScientificExplanation from '../../../components/ScientificExplanation';
import CostAndResults from '../../../components/CostAndResults';
import PatientTestimonials from '../../../components/VideoTestimonials';
import DoctorsSection from '../../../components/DoctorsSection';
// import PricingPackages from '../../../components/PricingPackages';
import PaymentInsurance from '../../../components/PaymentInsurance';
import FAQSection from '../../../components/Faq';
import BookConsultation from '../../../components/BookConsultation';
import ContentReviewBadge from '../../../components/ContentReviewBadge';
import { getSubcategoryContent } from '../../data/subcategoryContent';


export default function BastiTherapyPage() {
  const categoryName = 'Ayurveda';
  const subcategoryName = 'Basti Therapy';

  // Get content from data file
  const content = getSubcategoryContent('ayurveda-dubai', 'basti-therapy');

  // Custom navigation items for Basti Therapy page
  const navItems = [
  { id: 'treatment-info', label: 'What Is Basti' },
  { id: 'basti-types', label: 'Types & Courses' },
  { id: 'basti-procedure', label: 'What Happens' },
  { id: 'basti-vs-kati-basti', label: 'Basti vs Kati Basti' },
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
                "@id": "https://ramacarepolyclinic.ae/services/basti-therapy-dubai/#webpage",
                "url": "https://ramacarepolyclinic.ae/services/basti-therapy-dubai/",
                "name": "Basti Therapy Dubai | Ayurvedic Medicated Enema, Jumeirah 1",
                "inLanguage": "en-AE",
                "about": { "@id": "https://ramacarepolyclinic.ae/services/basti-therapy-dubai/#therapy" },
                "isPartOf": { "@id": "https://ramacarepolyclinic.ae/services/ayurveda-dubai/#webpage" },
                "reviewedBy": { "@id": "https://ramacarepolyclinic.ae/doctors/dr-shamna-keloth-meethal-ayurveda-doctor-dubai/#physician" },
                "lastReviewed": "YYYY-MM-DD",
                "breadcrumb": {
                  "@type": "BreadcrumbList",
                  "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ramacarepolyclinic.ae/" },
                    { "@type": "ListItem", "position": 2, "name": "Ayurveda", "item": "https://ramacarepolyclinic.ae/services/ayurveda-dubai/" },
                    { "@type": "ListItem", "position": 3, "name": "Basti Therapy", "item": "https://ramacarepolyclinic.ae/services/basti-therapy-dubai/" }
                  ]
                }
              },
              {
                "@type": "MedicalTherapy",
                "@id": "https://ramacarepolyclinic.ae/services/basti-therapy-dubai/#therapy",
                "name": "Basti (Ayurvedic medicated enema therapy)",
                "alternateName": ["Basti", "Vasti", "Basti Karma", "Ayurvedic enema", "Anuvasana Basti", "Niruha Basti", "Matra Basti"],
                "description": "Basti is the Panchakarma therapy in which medicated oil or herbal decoction is given as an enema. It is considered the principal Ayurvedic therapy for Vata. At RamaCare Polyclinic, Jumeirah 1, Dubai, it follows a consultation with a BAMS doctor and is given by a same-gender therapist in 60–90 minute sessions.",
                "relevantSpecialty": "https://schema.org/Ayurvedic",
                "contraindication": ["Diarrhoea", "Rectal bleeding", "Painful piles or fissure", "Pregnancy", "Recent abdominal surgery"],
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
        <title key="title">Basti Therapy Dubai | Ayurvedic Medicated Enema, Jumeirah 1</title>
        <meta name="description" content="Basti (Vasti), the Ayurvedic medicated enema therapy for Vata, in Jumeirah 1, Dubai. BAMS doctor consultation first, same-gender therapists, 60–90 min sessions." key="description" />
        <meta name="robots" content="index, follow" key="robots" />
        <link rel="canonical" href="https://ramacarepolyclinic.ae/services/basti-therapy-dubai/" key="canonical" />

        {/* Open Graph Tags */}
        <meta property="og:type" content="website" key="og:type" />
        <meta property="og:title" content="Basti Therapy Dubai | Ayurvedic Medicated Enema, Jumeirah 1" key="og:title" />
        <meta property="og:description" content="Basti (Vasti), the Ayurvedic medicated enema therapy for Vata, in Jumeirah 1, Dubai. BAMS doctor consultation first, same-gender therapists, 60–90 min sessions." key="og:description" />
        <meta property="og:url" content="https://ramacarepolyclinic.ae/services/basti-therapy-dubai/" key="og:url" />
        <meta property="og:image" content="https://ramacarepolyclinic.ae/images/basti-therapy.jpg" key="og:image" />
        <meta property="og:image:width" content="1200" key="og:image:width" />
        <meta property="og:image:height" content="630" key="og:image:height" />
        <meta property="og:image:alt" content="Ayurvedic Basti therapy room at RamaCare Polyclinic, Jumeirah 1, Dubai" key="og:image:alt" />
        <meta property="og:site_name" content="RamaCare Polyclinic" key="og:site_name" />
        <meta property="og:locale" content="en_AE" key="og:locale" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content="Basti Therapy Dubai | Ayurvedic Medicated Enema, Jumeirah 1" key="twitter:title" />
        <meta name="twitter:description" content="Basti (Vasti), the Ayurvedic medicated enema therapy for Vata, in Jumeirah 1, Dubai. BAMS doctor consultation first, same-gender therapists, 60–90 min sessions." key="twitter:description" />
        <meta name="twitter:image" content="https://ramacarepolyclinic.ae/images/basti-therapy.jpg" key="twitter:image" />

        {/* Structured Data Schemas */}
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
      <AyurvedaInfoSection content={content?.bastiTypes} />       {/* NEW: types and classical courses */}
      <AyurvedaInfoSection content={content?.bastiProcedure} />   {/* NEW: what happens, step by step */}
      <AyurvedaInfoSection content={content?.bastiVsKati} />      {/* NEW: Basti vs Kati, Janu, Greeva Basti */}
      <AyurvedaInfoSection content={content?.whoShouldNot} />     {/* NEW: who should not have Basti */}
      <AyurvedaInfoSection content={content?.gettingHere} /> 

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

      {/* 5. Types of Basti Therapy */}
      <BastiTherapySections sectionType="types" content={content?.treatmentProcess} />

      {/* 6. Why Choose Us */}
      <BastiTherapySections sectionType="whyChoose" content={content?.panchakarmaWhyChoose} />

      {/* 7. Gut Health & Detox Signs */}
      <div id="gut-health">
        <ScientificExplanation content={content?.scientificExplanation} />
      </div>

      {/* 8. Cost & Recovery */}
      <div id="cost-and-results">
        <CostAndResults content={content?.costResults} />
      </div>

      {/* 9. Testimonials, Doctors, Payment, FAQ */}
      <div id="faq">
        <PatientTestimonials content={content?.testimonials} />
        <DoctorsSection content={content?.doctors} />
        
        <PaymentInsurance content={content?.paymentInsurance} />
        <ContentReviewBadge doctorName="Dr. Shamna Keloth Meethal" pageSlug="basti-therapy-dubai" lastReviewed="2026-01-12" />
        <FAQSection content={content?.faq} />
      </div>

      {/* 10. Book Consultation */}
      <div id="book-now">
        <BookConsultation content={content?.bookConsultation} />
      </div>
    </Layout>
  );
}
