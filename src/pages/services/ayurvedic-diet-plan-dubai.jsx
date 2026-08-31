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
        "item": "https://ramacarepolyclinic.ae/services/ayurveda-dubai"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Ayurvedic Diet Plan",
        "item": "https://ramacarepolyclinic.ae/services/ayurvedic-diet-plan-dubai/"
      }
    ]
  };

  const medicalProcedureSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Ayurvedic Diet Plan in Dubai",
    "description": "Personalized nutrition program based on individual body constitution (Prakriti) and current imbalances (Vikriti), including dosha-based meal planning, food timing guidance, herbal supplements, and lifestyle advice to support digestion, immunity, and long-term wellness.",
    "url": "https://ramacarepolyclinic.ae/services/ayurvedic-diet-plan-dubai/",
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
      "image": "https://ramacarepolyclinic.ae/images/a-diet.jpg",
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
        <title key="title">Ayurvedic Diet Plan in Dubai | Personalized Meal Guidance</title>
        <meta
          name="description"
          content="Follow a personalized Ayurvedic diet plan in Dubai to balance your doshas, support digestion, boost immunity, and maintain a healthy weight naturally and safely."
          key="description"
        />
        <meta
          name="keywords"
          content="Ayurvedic diet plan Dubai, Dosha-based diet Dubai, Ayurvedic meal plan Dubai, Personalized diet plan Dubai, Ayurvedic nutrition Dubai, Weight Management Ayurveda Dubai, Digestive Health Ayurveda Dubai, Immunity-boosting diet in Dubai, Healthy eating Ayurveda Dubai, Ayurveda lifestyle Dubai, Herbal diet recommendations in Dubai, Ayurvedic food types in Dubai"
          key="keywords"
        />
        <meta name="robots" content="index, follow" key="robots" />
        <link rel="canonical" href="https://ramacarepolyclinic.ae/services/ayurvedic-diet-plan-dubai/" key="canonical" />

        {/* Open Graph Tags */}
        <meta property="og:type" content="website" key="og:type" />
        <meta property="og:title" content="Ayurvedic Diet Plan in Dubai | Personalized Meal Guidance" key="og:title" />
        <meta
          property="og:description"
          content="Follow a personalized Ayurvedic diet plan in Dubai to balance your doshas, support digestion, boost immunity, and maintain a healthy weight naturally and safely."
          key="og:description"
        />
        <meta property="og:url" content="https://ramacarepolyclinic.ae/services/ayurvedic-diet-plan-dubai/" key="og:url" />
        <meta property="og:image" content="https://ramacarepolyclinic.ae/images/a-diet.jpg" key="og:image" />
        <meta property="og:site_name" content="RamaCare Polyclinic" key="og:site_name" />
        <meta property="og:locale" content="en_AE" key="og:locale" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content="Ayurvedic Diet Plan in Dubai | Personalized Meal Guidance" key="twitter:title" />
        <meta
          name="twitter:description"
          content="Follow a personalized Ayurvedic diet plan in Dubai to balance your doshas, support digestion, boost immunity, and maintain a healthy weight naturally and safely."
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
      <ContentReviewBadge doctorName="Dr. Shamna Keloth Meethal" pageSlug="ayurvedic-diet-plan-dubai" />
      <FAQSection content={content?.faq} />
      <BookConsultation content={content?.bookConsultation} />
    </Layout>
  );
}

