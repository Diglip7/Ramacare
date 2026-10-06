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

export default function AyurvedicDietPlanPage() {
  const categoryName = 'Ayurveda';
  const subcategoryName = 'Ayurvedic Diet Plan';

  // Get content from data file
  const content = getSubcategoryContent('ayurveda-dubai', 'ayurvedic-diet-plan');

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
        "name": "Ayurvedic Diet Plan",
        "item": "https://ramacarepolyclinic.ae/services/ayurvedic-diet-plan-dubai/"
      }
    ]
  };

const dietSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://ramacarepolyclinic.ae/services/ayurvedic-diet-plan-dubai/#webpage",
      "url": "https://ramacarepolyclinic.ae/services/ayurvedic-diet-plan-dubai/",
      "name": "Ayurvedic Diet Plan Dubai | Dosha Diet by a BAMS Doctor",
      "inLanguage": "en-AE",
      "about": { "@id": "https://ramacarepolyclinic.ae/services/ayurvedic-diet-plan-dubai/#diet" },
      "isPartOf": { "@id": "https://ramacarepolyclinic.ae/services/ayurveda-dubai/#webpage" },
      "reviewedBy": { "@id": "https://ramacarepolyclinic.ae/doctors/dr-shamna-keloth-meethal-ayurveda-doctor-dubai/#physician" },
      "lastReviewed": "YYYY-MM-DD"
    },
    {
      "@type": "Diet",
      "@id": "https://ramacarepolyclinic.ae/services/ayurvedic-diet-plan-dubai/#diet",
      "name": "Personalised Ayurvedic diet plan",
      "alternateName": ["Ayurvedic diet chart", "Dosha diet", "Vata diet", "Pitta diet", "Kapha diet", "Ayurvedic meal plan"],
      "description": "A diet plan based on your Ayurvedic constitution (Prakriti) and current imbalance, prepared by a BAMS doctor after an in-person consultation: foods to favour and avoid for Vata, Pitta or Kapha, meal timing, incompatible foods (Viruddha Ahara) and seasonal advice for Dubai.",
      "dietFeatures": "Dosha-based food choices, main meal at midday, warm freshly cooked food, the six tastes (Shad Rasa), avoiding incompatible foods",
      "expertConsiderations": "Not a replacement for medical treatment. People with diabetes, thyroid disease, kidney disease, pregnancy or food allergies should follow their doctor's advice; prescribed medicines should not be stopped.",
      "endorsers": { "@id": "https://ramacarepolyclinic.ae/doctors/dr-shamna-keloth-meethal-ayurveda-doctor-dubai/#physician" }
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
        <title key="title">Ayurvedic Diet Plan Dubai | Dosha Diet by a BAMS Doctor</title>
        <meta
          name="description"
          content="Personalised Ayurvedic diet plan in Jumeirah 1, Dubai: foods for your Vata, Pitta or Kapha dosha, meal timing and a written plan from a BAMS doctor. From AED 200."
          key="description"
        />
        <meta name="robots" content="index, follow" key="robots" />
        <link rel="canonical" href="https://ramacarepolyclinic.ae/services/ayurvedic-diet-plan-dubai/" key="canonical" />

        {/* Open Graph Tags */}
        <meta property="og:type" content="website" key="og:type" />
        <meta property="og:title" content="Ayurvedic Diet Plan Dubai | Dosha Diet by a BAMS Doctor" key="og:title" />
        <meta
          property="og:description"
          content="Personalised Ayurvedic diet plan in Jumeirah 1, Dubai: foods for your Vata, Pitta or Kapha dosha, meal timing and a written plan from a BAMS doctor. From AED 200."
          key="og:description"
        />
        <meta property="og:url" content="https://ramacarepolyclinic.ae/services/ayurvedic-diet-plan-dubai/" key="og:url" />
        <meta property="og:image" content="https://ramacarepolyclinic.ae/images/a-diet.jpg" key="og:image" />
        <meta property="og:site_name" content="RamaCare Polyclinic" key="og:site_name" />
        <meta property="og:locale" content="en_AE" key="og:locale" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content="Ayurvedic Diet Plan Dubai | Dosha Diet by a BAMS Doctor" key="twitter:title" />
        <meta
          name="twitter:description"
          content="Personalised Ayurvedic diet plan in Jumeirah 1, Dubai: foods for your Vata, Pitta or Kapha dosha, meal timing and a written plan from a BAMS doctor. From AED 200."
          key="twitter:description"
        />
        <meta name="twitter:image" content="https://ramacarepolyclinic.ae/images/a-diet.jpg" key="twitter:image" />

        {/* Structured Data Schemas */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
          <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(dietSchema) }}
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
      <AyurvedaInfoSection content={content?.doshaFoods} />      {/* NEW: foods by dosha */}
      <AyurvedaInfoSection content={content?.dietRules} />       {/* NEW: core Ayurvedic eating principles */}
      <AyurvedaInfoSection content={content?.sampleDay} />       {/* NEW: example day of meals */}
      <AyurvedaInfoSection content={content?.dietByGoal} />      {/* NEW: links to all 9 diet pages */}
      <AyurvedaInfoSection content={content?.dubaiEating} />     {/* NEW: Ramadan, summer, office eating */}
      <HealingJourney content={content?.healingJourney} />
      <TreatmentBenefits 
        content={content?.benefits}
      />
      <PatientTestimonials content={content?.testimonials} />
      <DoctorsSection content={content?.doctors} />
      <PaymentInsurance content={content?.paymentInsurance} />
      <ContentReviewBadge doctorName="Dr. Shamna Keloth Meethal" pageSlug="ayurvedic-diet-plan-dubai" lastReviewed="2026-01-12" />
      <FAQSection content={content?.faq} />
      <BookConsultation content={content?.bookConsultation} />
    </Layout>
  );
}

