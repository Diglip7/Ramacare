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
import TreatmentAdditionalContent from '../../../components/TreatmentAdditionalContent';
import SkinTreatmentAdditionalContent from '../../../components/SkinTreatmentAdditionalContent';
import ServiceExtrasSection from '../../../components/ServiceExtrasSection';
import { getSubcategoryContent } from '../../data/subcategoryContent';


export default function BirthmarkRemovalPage() {
  const categoryName = 'Aesthetic Dermatology';
  const subcategoryName = 'Birthmark Removal';

  // Get content from data file - nested path
  const content = getSubcategoryContent('aesthetic-dermatology-dubai', 'laser-treatment/birthmark-removal');

    const navItems = [
    { id: 'treatment-info', label: 'Treatment Info' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'benefits', label: 'Benefits' },
    { id: 'which-option-right', label: 'Which Option Right?' },
    { id: 'when-to-consider', label: 'Ideal Candidate' },
    { id: 'recovery-aftercare', label: 'Aftercare' },
    { id: 'why-choose-ramacare', label: 'Why Us' },
    { id: 'testimonials', label: 'Success Stories' },
    { id: 'our-doctors', label: 'Our Doctors' },
    { id: 'faq', label: 'FAQ' },
    { id: 'book-now', label: 'Book Now' },
  ];

  // Dynamically generated FAQPage Schema from page data
  const faqSchema = content?.faq?.faqs?.length
    ? {
        "@type": "FAQPage",
        "@id": "https://ramacarepolyclinic.ae/services/birthmark-removal-dubai/#faq",
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

  const jsonLdGraph = [
    {
      "@type": "MedicalWebPage",
      "@id": "https://ramacarepolyclinic.ae/services/birthmark-removal-dubai/#webpage",
      "url": "https://ramacarepolyclinic.ae/services/birthmark-removal-dubai/",
      "name": "Birthmark Removal in Dubai | RamaCare Polyclinic",
      "description": "Birthmark removal in Dubai uses safe, doctor-supervised laser and medical treatments to reduce or remove birthmarks and restore smooth, natural skin.",
      "medicalAudience": { "@type": "Patient" },
      "about": { "@type": "MedicalProcedure", "name": "Birthmark Removal" },
      "reviewedBy": { "@id": "https://ramacarepolyclinic.ae/services/birthmark-removal-dubai/#reviewer" },
      "publisher": {
        "@type": "MedicalOrganization",
        "name": "RamaCare Polyclinic",
        "url": "https://ramacarepolyclinic.ae/"
      }
    },
    {
      "@type": "Person",
      "@id": "https://ramacarepolyclinic.ae/services/birthmark-removal-dubai/#reviewer",
      "name": "Sonita Sinaga",
      "jobTitle": "Licensed & Certified Aesthetic Therapist",
      "hasCredential": "NCLC Laser Certified",
      "url": "https://ramacarepolyclinic.ae/doctors/sonita-sinaga-aesthetic-therapist-dubai/",
      "worksFor": { "@type": "MedicalOrganization", "name": "RamaCare Polyclinic" }
    },
    {
      "@type": "MedicalCondition",
      "@id": "https://ramacarepolyclinic.ae/services/birthmark-removal-dubai/#condition",
      "name": "Benign Birthmarks and Pigmented Skin Marks",
      "alternateName": "Congenital Pigmented Marks, Vascular Birthmarks",
      "url": "https://ramacarepolyclinic.ae/services/birthmark-removal-dubai/",
      "description": "Benign birthmarks are congenital skin marks present at birth or appearing early in life, including pigmented birthmarks (like café‑au‑lait spots or moles) and vascular birthmarks (like hemangiomas).",
      "possibleTreatment": {
        "@type": "MedicalTherapy",
        "name": "Birthmark Removal Therapy",
        "description": "Birthmark removal therapy includes dermatologic laser treatments, surgical excision, or other clinically proven methods to reduce or eliminate benign pigmented or vascular birthmarks."
      }
    },
    {
      "@type": "MedicalProcedure",
      "@id": "https://ramacarepolyclinic.ae/services/birthmark-removal-dubai/#procedure",
      "name": "Birthmark Removal in Dubai",
      "alternateName": "Dermatologic Birthmark Reduction & Correction",
      "url": "https://ramacarepolyclinic.ae/services/birthmark-removal-dubai/",
      "mainEntityOfPage": "https://ramacarepolyclinic.ae/services/birthmark-removal-dubai/",
      "description": "Birthmark removal at RamaCare Polyclinic in Dubai is a dermatologic procedure tailored to the type and characteristics of the birthmark using advanced laser and medical techniques.",
      "procedureType": "Dermatologic surgical/laser procedure",
      "howPerformed": "After a detailed assessment of the birthmark’s type, size, and depth, trained clinicians recommend targeted laser therapy for pigmented or vascular marks, electrosurgical methods, or surgical excision.",
      "preparation": "Patients should share full medical history, avoid sun exposure on the area, and follow clinician guidelines.",
      "followup": "Follow-up care includes monitoring healing, scar management, and sun protection instructions.",
      "indication": [
        "Cosmetically concerning pigmented birthmarks",
        "Vascular birthmarks visible on face or body",
        "Raised or textured skin marks"
      ],
      "provider": {
        "@type": "MedicalClinic",
        "name": "RamaCare Polyclinic – Aesthetic & Dermatology Care",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "12 Al Dhiyafah Rd - Jumeirah Terrace Building, Ground Floor, Jumeirah 1",
          "addressLocality": "Jumeirah 1",
          "addressRegion": "Dubai",
          "postalCode": "393558",
          "addressCountry": "AE"
        },
        "telephone": "+971 56 659 7878",
        "areaServed": {
          "@type": "City",
          "name": "Dubai"
        },
        "priceRange": "$$"
      }
    },
    ...(faqSchema ? [faqSchema] : [])
  ];

  return (
    <Layout>
      <Head>
        <title key="title">Birthmark Removal in Dubai | RamaCare Polyclinic</title>
        <meta name="description" content="Birthmark removal in Dubai uses safe, doctor-supervised laser and medical treatments to reduce or remove birthmarks and restore smooth, natural skin." key="description" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Birthmark Removal in Dubai | RamaCare Polyclinic" />
        <meta property="og:description" content="Birthmark removal in Dubai uses safe, doctor-supervised laser and medical treatments to reduce or remove birthmarks and restore smooth, natural skin." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ramacarepolyclinic.ae/services/birthmark-removal-dubai/" />
        <meta property="og:image" content="https://ramacarepolyclinic.ae/images/birthmark1.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Birthmark Removal Treatment at RamaCare Polyclinic Dubai" />
        <meta property="og:site_name" content="RamaCare Polyclinic" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Birthmark Removal in Dubai | RamaCare Polyclinic" />
        <meta name="twitter:description" content="Birthmark removal in Dubai uses safe, doctor-supervised laser and medical treatments to reduce or remove birthmarks and restore smooth, natural skin." />
        <meta name="twitter:image" content="https://ramacarepolyclinic.ae/images/birthmark1.jpg" />

        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": jsonLdGraph
            })
          }}
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
      <TreatmentAdditionalContent 
              content={{
                skinTreatmentContent: content?.skinTreatmentContent,
              }} 
            />
            <SkinTreatmentAdditionalContent 
              content={{
                whyChooseSection: content?.whyChooseSection,
                 whenToConsider: content?.whenToConsider,
              }} 
            />
            <ServiceExtrasSection aftercareContent={content?.aftercareContent} />
       <PatientTestimonials content={content?.testimonials} />
       <DoctorsSection content={content?.doctors} />
    
    <PaymentInsurance content={content?.paymentInsurance} />
      <ContentReviewBadge doctorName="Sonita Sinaga" pageSlug="birthmark-removal-dubai" />
      <FAQSection content={content?.faq} />
      <BookConsultation content={content?.bookConsultation} />
    </Layout>
  );
}
