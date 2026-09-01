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


export default function FillersPage() {
  const categoryName = 'Aesthetic Dermatology';
  const subcategoryName = 'Fillers';

  // Get content from data file - nested path
  const content = getSubcategoryContent('aesthetic-dermatology-dubai', 'skin-treatment/fillers');

  // Generate FAQ schema dynamically from content
  const faqSchema = content?.faq?.faqs?.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  })) || [];

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
  <title key="title">Fillers in Dubai for Natural Facial Volume and Contour</title>
  <meta name="description" content="Fillers in Dubai help restore facial volume, smooth lines, and enhance contours using safe, doctor-administered treatments for natural-looking results." key="description" />

  {/* Open Graph Meta Tags */}
  <meta property="og:title" content="Fillers in Dubai for Natural Facial Volume and Contour" />
  <meta property="og:description" content="Fillers in Dubai help restore facial volume, smooth lines, and enhance contours using safe, doctor-administered treatments for natural-looking results." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://ramacarepolyclinic.ae/services/fillers-in-dubai/" />
  <meta property="og:image" content="https://ramacarepolyclinic.ae/images/filler.jpg" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="Fillers in Dubai - RamaCare Polyclinic" />
  <meta property="og:site_name" content="RamaCare Polyclinic" />
  <meta property="og:locale" content="en_AE" />

  {/* Twitter Card Meta Tags */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Fillers in Dubai for Natural Facial Volume and Contour" />
  <meta name="twitter:description" content="Fillers in Dubai help restore facial volume, smooth lines, and enhance contours using safe, doctor-administered treatments for natural-looking results." />
  <meta name="twitter:image" content="https://ramacarepolyclinic.ae/images/filler.jpg" />

  {/* JSON-LD Schema */}
  <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "MedicalWebPage",
          "@id": "https://ramacarepolyclinic.ae/services/fillers-in-dubai/#webpage",
          "url": "https://ramacarepolyclinic.ae/services/fillers-in-dubai/",
          "name": "Fillers in Dubai for Natural Facial Volume and Contour",
          "description": "Fillers in Dubai help restore facial volume, smooth lines, and enhance contours using safe, doctor-administered treatments for natural-looking results.",
          "inLanguage": "en",
          "isPartOf": {
            "@type": "WebSite",
            "url": "https://ramacarepolyclinic.ae/",
            "name": "RamaCare Polyclinic"
          },
          "about": {
            "@type": "MedicalProcedure",
            "name": "Dermal Fillers"
          },
          "lastReviewed": "2026-08-29",
          "reviewedBy": {
            "@id": "https://ramacarepolyclinic.ae/services/fillers-in-dubai/#physician"
          },
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ramacarepolyclinic.ae/" },
              { "@type": "ListItem", "position": 2, "name": "Aesthetic Dermatology", "item": "https://ramacarepolyclinic.ae/services/aesthetic-dermatology-dubai" },
              { "@type": "ListItem", "position": 3, "name": "Fillers", "item": "https://ramacarepolyclinic.ae/services/fillers-in-dubai/" }
            ]
          }
        },
        {
          "@type": "Physician",
          "@id": "https://ramacarepolyclinic.ae/services/fillers-in-dubai/#physician",
          "name": "Dr. Sahar Zomorrodi",
          "medicalSpecialty": "General Practice",
          "honorificSuffix": "MD",
          "hasCredential": "DHA Licensed General Practitioner",
          "worksFor": {
            "@type": "MedicalOrganization",
            "name": "RamaCare Polyclinic"
          },
          "url": "https://ramacarepolyclinic.ae/doctors/dr-sahar-zomorrodi-general-practitioner-dubai/"
        },
        {
          "@type": "FAQPage",
          "@id": "https://ramacarepolyclinic.ae/services/fillers-in-dubai/#faq",
          "mainEntity": faqSchema
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
      <ContentReviewBadge doctorName="Dr. Sahar Zomorrodi" pageSlug="fillers-in-dubai" />
      <FAQSection content={content?.faq} />
      <BookConsultation content={content?.bookConsultation} />
    </Layout>
  );
}
