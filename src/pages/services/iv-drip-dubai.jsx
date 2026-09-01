import Layout from '../../../components/Layout';
import ContentReviewBadge from '../../../components/ContentReviewBadge';
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
import SkinTreatmentAdditionalContent from '../../../components/SkinTreatmentAdditionalContent';
import ServiceExtrasSection from '../../../components/ServiceExtrasSection';
import { getSubcategoryContent } from '../../data/subcategoryContent';


export default function IVdripPage() {
  const categoryName = 'Aesthetic Dermatology';
  const subcategoryName = 'IV Drip Therapy';

  // Get content from data file - nested path
  const content = getSubcategoryContent('aesthetic-dermatology-dubai', 'body-shaping/iv-drip');
  
  const navItems = [
    { id: 'treatment-info', label: 'Treatment Info' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'benefits', label: 'Benefits' },
    { id: 'when-to-consider', label: 'Ideal Candidate' },
    { id: 'recovery-aftercare', label: 'Aftercare' },
    { id: 'why-choose-ramacare', label: 'Why Us' },
    { id: 'testimonials', label: 'Success Stories' },
    { id: 'our-doctors', label: 'Our Doctors' },
    { id: 'faq', label: 'FAQ' },
    { id: 'book-now', label: 'Book Now' },
  ];

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
        "name": "Aesthetic Dermatology",
        "item": "https://ramacarepolyclinic.ae/services/aesthetic-dermatology-dubai/"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "IV Drip Therapy",
        "item": "https://ramacarepolyclinic.ae/services/iv-drip-dubai/"
      }
    ]
  };

  const medicalProcedureSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "IV Drip Therapy",
    "description": "Doctor-supervised intravenous vitamin and hydration therapy delivering fluids, vitamins, minerals, electrolytes, and antioxidants directly into the bloodstream, administered by DHA-licensed healthcare professionals in Dubai.",
    "provider": {
      "@type": "MedicalClinic",
      "name": "RamaCare Polyclinic",
      "url": "https://ramacarepolyclinic.ae/",
      "telephone": "+971566597878",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "12 Al Dhiyafah Rd, Jumeirah Terrace Building, Ground Floor",
        "addressLocality": "Jumeirah 1, Dubai",
        "addressCountry": "AE"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": "Dubai"
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
      "name": "Dr. Sahar Zomorrodi",
      "medicalSpecialty": "General Medicine & Aesthetic Care",
      "url": "https://ramacarepolyclinic.ae/doctors/dr-sahar-zomorrodi-general-practitioner-dubai/",
      "worksFor": {
        "@type": "MedicalClinic",
        "name": "RamaCare Polyclinic"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Physician",
      "name": "Sonita Sinaga",
      "medicalSpecialty": "Aesthetic Therapy & Skin Care",
      "url": "https://ramacarepolyclinic.ae/doctors/sonita-sinaga-aesthetic-therapist-dubai/",
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
        <title key="title">IV Drip Therapy in Dubai | RamaCare Polyclinic</title>
        <meta
          name="description"
          content="IV Drip Therapy in Dubai at RamaCare Polyclinic. Experience the benefits of IV Drip Therapy for weight loss, detoxification, and overall wellness. Book your consultation today!"
          key="description"
        />
        <meta
          name="keywords"
          content="IV drip therapy Dubai, Vitamin infusion Dubai, IV hydration therapy Dubai, Wellness drip clinic Dubai, Immune boost IV therapy, Energy boost IV drip, Jet lag recovery IV Dubai, Doctor-supervised IV therapy Dubai, IV vitamin therapy Dubai, RamaCare Polyclinic"
          key="keywords"
        />
        <meta name="robots" content="index, follow" key="robots" />
        <link rel="canonical" href="https://ramacarepolyclinic.ae/services/iv-drip-dubai/" key="canonical" />

        {/* Open Graph Tags */}
        <meta property="og:type" content="website" key="og:type" />
        <meta property="og:title" content="IV Drip Therapy in Dubai | RamaCare Polyclinic" key="og:title" />
        <meta
          property="og:description"
          content="IV Drip Therapy in Dubai at RamaCare Polyclinic. Experience the benefits of IV Drip Therapy for weight loss, detoxification, and overall wellness. Book your consultation today!"
          key="og:description"
        />
        <meta property="og:url" content="https://ramacarepolyclinic.ae/services/iv-drip-dubai/" key="og:url" />
        <meta property="og:image" content="https://ramacarepolyclinic.ae/images/iv-drip.jpg" key="og:image" />
        <meta property="og:image:width" content="1200" key="og:image:width" />
        <meta property="og:image:height" content="630" key="og:image:height" />
        <meta property="og:site_name" content="RamaCare Polyclinic" key="og:site_name" />
        <meta property="og:locale" content="en_AE" key="og:locale" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content="IV Drip Therapy in Dubai | RamaCare Polyclinic" key="twitter:title" />
        <meta
          name="twitter:description"
          content="Experience the benefits of IV Drip Therapy for weight loss, detoxification, and overall wellness."
          key="twitter:description"
        />
        <meta name="twitter:image" content="https://ramacarepolyclinic.ae/images/iv-drip.jpg" key="twitter:image" />

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
        hero={content?.hero}/>
      <QuickNavigation navItems={navItems} />
      <TreatmentOverview 
        subcategoryName={subcategoryName}
        content={content?.overview}/>
      <HealingJourney content={content?.healingJourney} />
      <TreatmentBenefits 
        content={content?.benefits}/>
      <SkinTreatmentAdditionalContent 
        content={{whyChooseSection: content?.whyChooseSection,
                  whenToConsider: content?.whenToConsider,}} />
      <ServiceExtrasSection aftercareContent={content?.aftercareContent} />
      <PatientTestimonials content={content?.testimonials} />
      <DoctorsSection content={content?.doctors} />
      <ContentReviewBadge doctorName="Dr. Sahar Zomorrodi" pageSlug="iv-drip-dubai" />
      <PaymentInsurance content={content?.paymentInsurance} />
      <FAQSection content={content?.faq} />
      <BookConsultation content={content?.bookConsultation} />
    </Layout>
  );
}
