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
import SkinTreatmentAdditionalContent from '../../../components/SkinTreatmentAdditionalContent';
import ServiceExtrasSection from '../../../components/ServiceExtrasSection';
import { getSubcategoryContent } from '../../data/subcategoryContent';


export default function MesotherapyPage() {
  const categoryName = 'Aesthetic Dermatology';
  const subcategoryName = 'Mesotherapy';

  // Get content from data file - nested path
  const content = getSubcategoryContent('aesthetic-dermatology-dubai', 'skin-treatment/mesotherapy');

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

  return (
    <Layout>
      <Head>
  <title key="title">Mesotherapy in Dubai for Skin and Hair Rejuvenation</title>
  <meta name="description" content="Mesotherapy in Dubai delivers vitamins and nutrients into the skin to improve texture, reduce hair loss, and support healthy skin and scalp care." key="description" />
  <meta name="keywords" content="Mesotherapy in Dubai, Mesotherapy treatment Dubai, Skin mesotherapy Dubai, Hair mesotherapy Dubai, Skin rejuvenation treatment, Hair loss treatment Dubai, Vitamin injection therapy, Non-surgical aesthetic treatment, Professional mesotherapy care" />

  {/* Open Graph Meta Tags */}
  <meta property="og:title" content="Mesotherapy in Dubai for Skin and Hair Rejuvenation" />
  <meta property="og:description" content="Mesotherapy in Dubai delivers vitamins and nutrients into the skin to improve texture, reduce hair loss, and support healthy skin and scalp care." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://ramacarepolyclinic.ae/services/mesotherapy-dubai/" />
  <meta property="og:image" content="https://ramacarepolyclinic.ae/images/meso.jpg" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="Mesotherapy in Dubai - RamaCare Polyclinic" />
  <meta property="og:site_name" content="RamaCare Polyclinic" />
  <meta property="og:locale" content="en_AE" />

  {/* Twitter Card Meta Tags */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Mesotherapy in Dubai for Skin and Hair Rejuvenation" />
  <meta name="twitter:description" content="Mesotherapy in Dubai delivers vitamins and nutrients into the skin to improve texture, reduce hair loss, and support healthy skin and scalp care." />
  <meta name="twitter:image" content="https://ramacarepolyclinic.ae/images/meso.jpg" />

  <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "MedicalWebPage",
          "@id": "https://ramacarepolyclinic.ae/services/mesotherapy-dubai/#webpage",
          "url": "https://ramacarepolyclinic.ae/services/mesotherapy-dubai/",
          "name": "Mesotherapy in Dubai for Skin and Hair Rejuvenation",
          "description": "Mesotherapy in Dubai delivers vitamins and nutrients into the skin to improve texture, reduce hair loss, and support healthy skin and scalp care.",
          "inLanguage": "en",
          "isPartOf": {
            "@type": "WebSite",
            "url": "https://ramacarepolyclinic.ae/",
            "name": "RamaCare Polyclinic"
          },
          "about": {
            "@type": "MedicalProcedure",
            "name": "Mesotherapy"
          },
          "lastReviewed": "2026-08-29",
          "reviewedBy": {
            "@id": "https://ramacarepolyclinic.ae/services/mesotherapy-dubai/#physician"
          },
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ramacarepolyclinic.ae/" },
              { "@type": "ListItem", "position": 2, "name": "Aesthetic Dermatology", "item": "https://ramacarepolyclinic.ae/services/aesthetic-dermatology-dubai" },
              { "@type": "ListItem", "position": 3, "name": "Mesotherapy", "item": "https://ramacarepolyclinic.ae/services/mesotherapy-dubai/" }
            ]
          }
        },
        {
          "@type": "Person",
          "@id": "https://ramacarepolyclinic.ae/services/mesotherapy-dubai/#physician",
          "name": "Sonita Sinaga",
          "jobTitle": "Licensed & Certified Aesthetic Therapist",
          "hasCredential": "NCLC Laser Certified",
          "worksFor": {
            "@type": "MedicalOrganization",
            "name": "RamaCare Polyclinic"
          },
          "url": "https://ramacarepolyclinic.ae/doctors/sonita-sinaga-aesthetic-therapist-dubai/"
        },
        {
          "@type": "FAQPage",
          "@id": "https://ramacarepolyclinic.ae/services/mesotherapy-dubai/#faq",
          "mainEntity": content?.faq?.faqs?.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          })) || []
        }
      ]
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
      <SkinTreatmentAdditionalContent content={content} />
      <ServiceExtrasSection aftercareContent={content?.aftercareContent} />
       <PatientTestimonials content={content?.testimonials} />
       <DoctorsSection content={content?.doctors} />
    
    <PaymentInsurance content={content?.paymentInsurance} />
      <ContentReviewBadge doctorName="Sonita Sinaga" pageSlug="mesotherapy-dubai" />
      <FAQSection content={content?.faq} />
      <BookConsultation content={content?.bookConsultation} />
    </Layout>
  );
}
