import Layout from '../../../components/Layout';
import Head from "next/head";
import TreatmentHero from '../../../components/TreatmentHero';
import QuickNavigation from '../../../components/QuickNavigation';
// import CertificationsSection from '../../../components/CertificationsSection';
import TreatmentOverview from '../../../components/TreatmentOverview';
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
        "item": "https://ramacarepolyclinic.ae/services/ayurveda-dubai"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Panchakarma Treatment",
        "item": "https://ramacarepolyclinic.ae/services/panchakarma-treatment/"
      }
    ]
  };

  const medicalProcedureSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Panchakarma Treatment in Dubai",
    "description": "Authentic Ayurvedic Panchakarma detoxification and rejuvenation therapy in Dubai combining oil therapy, herbal steam, cleansing protocols, and personalized care to balance doshas, boost immunity, and relieve stress.",
    "url": "https://ramacarepolyclinic.ae/services/panchakarma-treatment/",
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
      "image": "https://ramacarepolyclinic.ae/images/panchakarma.jpg",
      "telephone": "+971566597878",
      "priceRange": "$$$",
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
        <title key="title">Panchakarma Treatment in Dubai | Ayurvedic Detox & Wellness</title>
        <meta
          name="description"
          content="Discover authentic Panchakarma treatment in Dubai for detox, stress relief, immunity boost, and rejuvenation. Affordable pricing, Bur Dubai & Al Nahda centers available."
          key="description"
        />
        <meta
          name="keywords"
          content="Panchakarma treatment in Dubai, Ayurvedic Panchakarma Dubai, Panchakarma treatment cost in Dubai, Panchakarma treatment price list, Panchakarma Bur Dubai, Panchakarma Ayurvedic Centre, Panchakarma Ayurveda centre reviews, Panchakarma Al Nahda, Ayurvedic treatment in Dubai, Panchakarma treatment near me, Body detox Ayurveda Dubai, Stress Relief Ayurveda Dubai"
          key="keywords"
        />
        <meta name="robots" content="index, follow" key="robots" />
        <link rel="canonical" href="https://ramacarepolyclinic.ae/services/panchakarma-treatment/" key="canonical" />

        {/* Open Graph Tags */}
        <meta property="og:type" content="website" key="og:type" />
        <meta property="og:title" content="Panchakarma Treatment in Dubai | Ayurvedic Detox & Wellness" key="og:title" />
        <meta
          property="og:description"
          content="Discover authentic Panchakarma treatment in Dubai for detox, stress relief, immunity boost, and rejuvenation. Affordable pricing, Bur Dubai & Al Nahda centers available."
          key="og:description"
        />
        <meta property="og:url" content="https://ramacarepolyclinic.ae/services/panchakarma-treatment/" key="og:url" />
        <meta property="og:image" content="https://ramacarepolyclinic.ae/images/panchakarma.jpg" key="og:image" />
        <meta property="og:image:width" content="1200" key="og:image:width" />
        <meta property="og:image:height" content="630" key="og:image:height" />
        <meta property="og:image:alt" content="Panchakarma Treatment in Dubai - RamaCare Polyclinic" key="og:image:alt" />
        <meta property="og:site_name" content="RamaCare Polyclinic" key="og:site_name" />
        <meta property="og:locale" content="en_AE" key="og:locale" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content="Panchakarma Treatment in Dubai | Ayurvedic Detox & Wellness" key="twitter:title" />
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
      <PanchakarmaWhyChoose content={content?.panchakarmaWhyChoose} />
      <PatientTestimonials content={content?.testimonials} />
      <DoctorsSection content={content?.doctors} />
      <PaymentInsurance content={content?.paymentInsurance} />
      <ContentReviewBadge doctorName="Dr. Shamna Keloth Meethal" pageSlug="panchakarma-treatment" />
      <FAQSection content={content?.faq} />
      <BookConsultation content={content?.bookConsultation} />
    </Layout>
  );
}

