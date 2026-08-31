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

export default function TeethScalingPolishingPage() {
  const categoryName = 'Dental';
  const subcategoryName = 'Teeth Scaling & Polishing';

  // Get content from data file
  const content = getSubcategoryContent('dental-dubai', 'teeth-scaling-polishing');

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
        "name": "Dental",
        "item": "https://ramacarepolyclinic.ae/services/dental-dubai/"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Teeth Scaling & Polishing",
        "item": "https://ramacarepolyclinic.ae/services/teeth-scaling-polishing-dubai/"
      }
    ]
  };

  const medicalProcedureSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Teeth Scaling & Polishing in Dubai",
    "description": "Professional preventive dental procedure to remove plaque, tartar, and surface stains using ultrasonic and manual scaling followed by polishing, improving oral health, gum health, and restoring a fresh, bright smile.",
    "url": "https://ramacarepolyclinic.ae/services/teeth-scaling-polishing-dubai/",
    "procedureType": "https://schema.org/NoninvasiveProcedure",
    "bodyLocation": "Teeth",
    "reviewedBy": {
      "@type": "Physician",
      "name": "Dr. Hirbod Gilandoust",
      "medicalSpecialty": "Dentistry",
      "url": "https://ramacarepolyclinic.ae/doctors/dr-hirbod-gilandoust-dentist-dubai/"
    },
    "provider": {
      "@type": "MedicalClinic",
      "name": "RamaCare Polyclinic",
      "url": "https://ramacarepolyclinic.ae/",
      "image": "https://ramacarepolyclinic.ae/images/teeth-scaling1.jpg",
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

  // Dynamically generated FAQPage Schema from page data
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

  const physicianSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Physician",
      "name": "Dr. Hirbod Gilandoust",
      "medicalSpecialty": "Esthetic Dentistry & Dental Surgery",
      "url": "https://ramacarepolyclinic.ae/doctors/dr-hirbod-gilandoust-dentist-dubai/",
      "worksFor": {
        "@type": "MedicalClinic",
        "name": "RamaCare Polyclinic"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Physician",
      "name": "Dr. Aparna Balakrishnan",
      "medicalSpecialty": "Cosmetic Dentistry",
      "url": "https://ramacarepolyclinic.ae/doctors/dr-aparna-balakrishnan-cosmetic-dentist-dubai/",
      "worksFor": {
        "@type": "MedicalClinic",
        "name": "RamaCare Polyclinic"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Physician",
      "name": "Soumya Abraham",
      "medicalSpecialty": "DHA Licensed Nurse",
      "url": "https://ramacarepolyclinic.ae/doctors/soumya-abraham-dha-licensed-nurse-dubai/",
      "worksFor": {
        "@type": "MedicalClinic",
        "name": "RamaCare Polyclinic"
      }
    }
  ];

  return (
    <Layout>
      <Head>
        <title key="title">Teeth Scaling & Polishing in Dubai | Professional Dental Care</title>
        <meta
          name="description"
          content="Maintain healthy teeth with professional scaling and polishing in Dubai. Safe, effective dental cleaning by licensed dentists for a brighter, fresher smile."
          key="description"
        />
        <meta
          name="keywords"
          content="Teeth scaling in Dubai, Teeth Polishing in Dubai, Dental cleaning in Dubai, Professional teeth cleaning, Plaque removal Dubai, Tartar removal Dubai, Oral hygiene Dubai, Licensed dentist in Dubai, Routine dental cleaning, Preventive dental care in Dubai, Healthy teeth Dubai, Bright Smile Dental Care"
          key="keywords"
        />
        <meta name="robots" content="index, follow" key="robots" />
        <link rel="canonical" href="https://ramacarepolyclinic.ae/services/teeth-scaling-polishing-dubai/" key="canonical" />

        {/* Open Graph Tags */}
        <meta property="og:type" content="website" key="og:type" />
        <meta property="og:title" content="Teeth Scaling & Polishing in Dubai | Professional Dental Care" key="og:title" />
        <meta
          property="og:description"
          content="Maintain healthy teeth with professional scaling and polishing in Dubai. Safe, effective dental cleaning by licensed dentists for a brighter, fresher smile."
          key="og:description"
        />
        <meta property="og:url" content="https://ramacarepolyclinic.ae/services/teeth-scaling-polishing-dubai/" key="og:url" />
        <meta property="og:image" content="https://ramacarepolyclinic.ae/images/teeth-scaling1.jpg" key="og:image" />
        <meta property="og:image:width" content="1200" key="og:image:width" />
        <meta property="og:image:height" content="630" key="og:image:height" />
        <meta property="og:site_name" content="RamaCare Polyclinic" key="og:site_name" />
        <meta property="og:locale" content="en_AE" key="og:locale" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content="Teeth Scaling & Polishing in Dubai | Professional Dental Care" key="twitter:title" />
        <meta
          name="twitter:description"
          content="Maintain healthy teeth with professional scaling and polishing in Dubai. Safe, effective dental cleaning by licensed dentists for a brighter, fresher smile."
          key="twitter:description"
        />
        <meta name="twitter:image" content="https://ramacarepolyclinic.ae/images/teeth-scaling1.jpg" key="twitter:image" />

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
      <ContentReviewBadge doctorName="Dr. Hirbod Gilandoust" pageSlug="teeth-scaling-polishing-dubai" />
      <FAQSection content={content?.faq} />
      <BookConsultation content={content?.bookConsultation} />
    </Layout>
  );
}

