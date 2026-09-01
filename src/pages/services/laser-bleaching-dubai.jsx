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
import TreatmentAdditionalContent from '../../../components/TreatmentAdditionalContent';
import SkinTreatmentAdditionalContent from '../../../components/SkinTreatmentAdditionalContent';
import ServiceExtrasSection from '../../../components/ServiceExtrasSection';
import { getSubcategoryContent } from '../../data/subcategoryContent';


export default function LaserBleachingPage() {
  const categoryName = 'Aesthetic Dermatology';
  const subcategoryName = 'Laser Bleaching for Skin';

  // Get content from data file - nested path
  const content = getSubcategoryContent('aesthetic-dermatology-dubai', 'laser-treatment/laser-bleaching');

  const navItems = [
    { id: 'treatment-info', label: 'Treatment Info' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'benefits', label: 'Benefits' },
    { id: 'which-option-right', label: 'Which Option Right?' },
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
        "@id": "https://ramacarepolyclinic.ae/services/laser-bleaching-dubai/#faq",
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
      "@id": "https://ramacarepolyclinic.ae/services/laser-bleaching-dubai/#webpage",
      "url": "https://ramacarepolyclinic.ae/services/laser-bleaching-dubai/",
      "name": "Laser Bleaching for Skin in Dubai | RamaCare Polyclinic",
      "description": "Laser bleaching in Dubai reduces dark spots, pigmentation, and uneven skin tone, restoring a radiant, smooth complexion under expert medical care.",
      "medicalAudience": { "@type": "Patient" },
      "about": { "@type": "MedicalProcedure", "name": "Laser Bleaching for Skin" },
      "reviewedBy": { "@id": "https://ramacarepolyclinic.ae/services/laser-bleaching-dubai/#reviewer" },
      "publisher": {
        "@type": "MedicalOrganization",
        "name": "RamaCare Polyclinic",
        "url": "https://ramacarepolyclinic.ae/"
      }
    },
    {
      "@type": "Person",
      "@id": "https://ramacarepolyclinic.ae/services/laser-bleaching-dubai/#reviewer",
      "name": "Sonita Sinaga",
      "jobTitle": "Licensed & Certified Aesthetic Therapist",
      "hasCredential": "NCLC Laser Certified",
      "url": "https://ramacarepolyclinic.ae/doctors/sonita-sinaga-aesthetic-therapist-dubai/",
      "worksFor": { "@type": "MedicalOrganization", "name": "RamaCare Polyclinic" }
    },
    {
      "@type": "MedicalCondition",
      "@id": "https://ramacarepolyclinic.ae/services/laser-bleaching-dubai/#condition",
      "name": "Skin Pigmentation, Dark Patches & Uneven Skin Tone",
      "alternateName": "Melanin Hyperpigmentation & Sun Discoloration",
      "url": "https://ramacarepolyclinic.ae/services/laser-bleaching-dubai/",
      "description": "Excess melanin production, sun exposure, hormonal changes, and friction can cause localized skin darkening, uneven skin tone, and stubborn dark patches on facial and body areas.",
      "possibleTreatment": {
        "@type": "MedicalTherapy",
        "name": "Laser Bleaching for Skin Therapy",
        "description": "Laser bleaching for skin is a non-surgical dermatologic procedure that uses controlled laser energy to break down excess melanin, helping reduce dark spots and restore an even skin tone."
      }
    },
    {
      "@type": "MedicalProcedure",
      "@id": "https://ramacarepolyclinic.ae/services/laser-bleaching-dubai/#procedure",
      "name": "Laser Bleaching for Skin in Dubai",
      "alternateName": "Pigment Reduction Laser Treatment",
      "url": "https://ramacarepolyclinic.ae/services/laser-bleaching-dubai/",
      "mainEntityOfPage": "https://ramacarepolyclinic.ae/services/laser-bleaching-dubai/",
      "description": "Laser bleaching for skin at RamaCare Polyclinic in Dubai is a non-invasive cosmetic treatment that uses medical-grade laser technology to lighten hyperpigmentation, reduce dark spots, and restore a luminous, even skin tone.",
      "procedureType": "Non-surgical dermatologic cosmetic procedure",
      "howPerformed": "A certified clinician applies controlled laser light to targeted pigmented areas, breaking down excess melanin particles which are then naturally cleared by the body over multiple treatment sessions.",
      "preparation": "Patients should avoid sun exposure and harsh chemical exfoliants before treatment and disclose any skin sensitivities or medical history during consultation.",
      "followup": "Post-treatment aftercare includes applying sunscreen daily, keeping the skin hydrated, and scheduling follow-up sessions as recommended.",
      "indication": [
        "Uneven skin tone and hyperpigmentation",
        "Sun spots and tanning",
        "Underarm and intimate area darkening",
        "Dark patches resistant to topical creams"
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
        <title key="title">Laser Bleaching for Skin in Dubai | RamaCare Polyclinic</title>
        <meta name="description" content="Laser bleaching in Dubai reduces dark spots, pigmentation, and uneven skin tone, restoring a radiant, smooth complexion under expert medical care." key="description" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Laser Bleaching for Skin in Dubai | RamaCare Polyclinic" />
        <meta property="og:description" content="Laser bleaching in Dubai reduces dark spots, pigmentation, and uneven skin tone, restoring a radiant, smooth complexion under expert medical care." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ramacarepolyclinic.ae/services/laser-bleaching-dubai/" />
        <meta property="og:image" content="https://ramacarepolyclinic.ae/images/laser-bleach.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Laser Bleaching Treatment for pigmentation at RamaCare Polyclinic Dubai" />
        <meta property="og:site_name" content="RamaCare Polyclinic" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Laser Bleaching for Skin in Dubai | RamaCare Polyclinic" />
        <meta name="twitter:description" content="Laser bleaching in Dubai reduces dark spots, pigmentation, and uneven skin tone, restoring a radiant, smooth complexion under expert medical care." />
        <meta name="twitter:image" content="https://ramacarepolyclinic.ae/images/laser-bleach.jpg" />

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
        }} 
      />
      <ServiceExtrasSection aftercareContent={content?.aftercareContent} />
       <PatientTestimonials content={content?.testimonials} />
        <DoctorsSection content={content?.doctors} />
        <ContentReviewBadge doctorName="Sonita Sinaga" pageSlug="laser-bleaching-dubai" />
    
    <PaymentInsurance content={content?.paymentInsurance} />
      <FAQSection content={content?.faq} />
      <BookConsultation content={content?.bookConsultation} />
    </Layout>
  );
}
