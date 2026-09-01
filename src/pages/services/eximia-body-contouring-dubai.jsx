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

export default function BodyShapingPage() {
  const categoryName = 'Aesthetic Dermatology';
  const subcategoryName = 'Eximia Body Contouring';

  // Get content from data file - nested path
  const content = getSubcategoryContent('aesthetic-dermatology-dubai', 'body-shaping/eximia-body-contouring');
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
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ramacarepolyclinic.ae/" },
      { "@type": "ListItem", "position": 2, "name": "Aesthetic Dermatology", "item": "https://ramacarepolyclinic.ae/services/aesthetic-dermatology-dubai/" },
      { "@type": "ListItem", "position": 3, "name": "Eximia Body Contouring", "item": "https://ramacarepolyclinic.ae/services/eximia-body-contouring-dubai/" }
    ]
  };

  const medicalProcedureSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Eximia Body Contouring",
    "description": "Non-surgical body contouring combining radiofrequency, ultrasound, vacuum therapy, and mechanical stimulation to reduce localized fat, tighten skin, and improve body contours, delivered by DHA-licensed specialists in Dubai.",
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
    "areaServed": { "@type": "City", "name": "Dubai" }
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
      "medicalSpecialty": "General Practitioner & Aesthetic Care",
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
      "medicalSpecialty": "Aesthetic Therapist",
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
        <title key="title">Eximia Body Contouring in Dubai for Slim and Toned Body</title>
        <meta name="description" content="Eximia body contouring in Dubai helps reduce fat, tighten skin, and sculpt your body safely using advanced non-invasive technology under expert care." key="description" />
        <meta name="keywords" content="Eximia body contouring Dubai, Non-surgical body sculpting Dubai, Fat reduction treatment Dubai, Skin tightening Dubai, Body slimming treatment Dubai, Professional body contouring, Non-invasive fat removal, Toned body treatment Dubai, Body shaping therapy, Expert body contouring clinic" />
        <meta name="robots" content="index, follow" key="robots" />
        <link rel="canonical" href="https://ramacarepolyclinic.ae/services/eximia-body-contouring-dubai/" key="canonical" />

        {/* Open Graph Tags */}
        <meta property="og:type" content="website" key="og:type" />
        <meta property="og:title" content="Eximia Body Contouring in Dubai for Slim and Toned Body" key="og:title" />
        <meta
          property="og:description"
          content="Eximia body contouring in Dubai helps reduce fat, tighten skin, and sculpt your body safely using advanced non-invasive technology under expert care."
          key="og:description"
        />
        <meta property="og:url" content="https://ramacarepolyclinic.ae/services/eximia-body-contouring-dubai/" key="og:url" />
        <meta property="og:image" content="https://ramacarepolyclinic.ae/images/eximia.jpg" key="og:image" />
        <meta property="og:image:width" content="1200" key="og:image:width" />
        <meta property="og:image:height" content="630" key="og:image:height" />
        <meta property="og:site_name" content="RamaCare Polyclinic" key="og:site_name" />
        <meta property="og:locale" content="en_AE" key="og:locale" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content="Eximia Body Contouring in Dubai for Slim and Toned Body" key="twitter:title" />
        <meta
          name="twitter:description"
          content="Reduces fat, tightens skin, and sculpts your body safely using advanced non-invasive technology."
          key="twitter:description"
        />
        <meta name="twitter:image" content="https://ramacarepolyclinic.ae/images/eximia.jpg" key="twitter:image" />

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
      <QuickNavigation navItems={navItems} />
      <TreatmentOverview 
        subcategoryName={subcategoryName}
        content={content?.overview}
      />
      <HealingJourney content={content?.healingJourney} />
      <TreatmentBenefits 
        content={content?.benefits}
      />
      <SkinTreatmentAdditionalContent 
        content={{whyChooseSection: content?.whyChooseSection,
                  whenToConsider: content?.whenToConsider,}} />
      <ServiceExtrasSection aftercareContent={content?.aftercareContent} />
      <PatientTestimonials content={content?.testimonials} />
      <DoctorsSection content={content?.doctors} />
      <ContentReviewBadge doctorName="Sonita Sinaga" pageSlug="eximia-body-contouring-dubai" />
      <PaymentInsurance content={content?.paymentInsurance} />
      <FAQSection content={content?.faq} />
      <BookConsultation content={content?.bookConsultation} />
    </Layout>
  );
}
