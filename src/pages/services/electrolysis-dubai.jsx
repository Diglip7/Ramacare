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
import TreatmentAreasAndCare from '../../../components/TreatmentAreasAndCare';
import DetailedServiceContent from '../../../components/DetailedServiceContent';
import ServiceExtrasSection from '../../../components/ServiceExtrasSection';
import { getSubcategoryContent } from '../../data/subcategoryContent';


export default function ElectrolysisPage() {
  const categoryName = 'Aesthetic Dermatology';
  const subcategoryName = 'Electrolysis';

  // Get content from data file - nested path
  const content = getSubcategoryContent('aesthetic-dermatology-dubai', 'skin-treatment/electrolysis');

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
    { id: 'treatment-areas-care', label: 'Areas Treated' },
    { id: 'recovery-aftercare', label: 'Aftercare' },
    { id: 'why-choose-ramacare', label: 'Why Choose Us' },
    { id: 'testimonials', label: 'Success Stories' },
    { id: 'our-doctors', label: 'Our Doctors' },
    { id: 'faq', label: 'FAQ' },
    { id: 'book-now', label: 'Book Now' },
  ];

  return (
    <Layout>
      <Head>
  <title key="title">Electrolysis in Dubai for Permanent Hair Removal Treatment</title>
  <meta name="description" content="Electrolysis in Dubai offers safe, medical-grade permanent hair removal by trained professionals, suitable for all skin types and areas with lasting results." key="description" />
 <meta name="keywords" content="Electrolysis in Dubai, Permanent hair removal in Dubai, Electrolysis hair removal, Medical hair removal Dubai, Facial hair removal Dubai, Body hair removal treatment, Safe electrolysis treatment, Hair removal for all skin types, Professional electrolysis in Dubai" />
  
  {/* Open Graph Meta Tags */}
  <meta property="og:title" content="Electrolysis in Dubai for Permanent Hair Removal Treatment" />
  <meta property="og:description" content="Electrolysis in Dubai offers safe, medical-grade permanent hair removal by trained professionals, suitable for all skin types and areas with lasting results." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://ramacarepolyclinic.ae/services/electrolysis-dubai/" />
  <meta property="og:image" content="https://ramacarepolyclinic.ae/images/electrolysis1.jpg" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="Electrolysis in Dubai - RamaCare Polyclinic" />
  <meta property="og:site_name" content="RamaCare Polyclinic" />
  <meta property="og:locale" content="en_AE" />

  {/* Twitter Card Meta Tags */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Electrolysis in Dubai for Permanent Hair Removal Treatment" />
  <meta name="twitter:description" content="Electrolysis in Dubai offers safe, medical-grade permanent hair removal by trained professionals, suitable for all skin types and areas with lasting results." />
  <meta name="twitter:image" content="https://ramacarepolyclinic.ae/images/electrolysis1.jpg" />

  {/* JSON-LD Schema */}
  <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "MedicalWebPage",
          "@id": "https://ramacarepolyclinic.ae/services/electrolysis-dubai/#webpage",
          "url": "https://ramacarepolyclinic.ae/services/electrolysis-dubai/",
          "name": "Electrolysis in Dubai for Permanent Hair Removal Treatment",
          "description": "Electrolysis in Dubai offers safe, medical-grade permanent hair removal by trained professionals, suitable for all skin types and areas with lasting results.",
          "inLanguage": "en",
          "isPartOf": {
            "@type": "WebSite",
            "url": "https://ramacarepolyclinic.ae/",
            "name": "RamaCare Polyclinic"
          },
          "about": {
            "@type": "MedicalProcedure",
            "name": "Electrolysis"
          },
          "lastReviewed": "2026-08-29",
          "reviewedBy": {
            "@id": "https://ramacarepolyclinic.ae/services/electrolysis-dubai/#physician"
          },
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ramacarepolyclinic.ae/" },
              { "@type": "ListItem", "position": 2, "name": "Aesthetic Dermatology", "item": "https://ramacarepolyclinic.ae/services/aesthetic-dermatology-dubai" },
              { "@type": "ListItem", "position": 3, "name": "Electrolysis", "item": "https://ramacarepolyclinic.ae/services/electrolysis-dubai/" }
            ]
          }
        },
        {
          "@type": "Person",
          "@id": "https://ramacarepolyclinic.ae/services/electrolysis-dubai/#physician",
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
          "@id": "https://ramacarepolyclinic.ae/services/electrolysis-dubai/#faq",
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
      <TreatmentAreasAndCare content={content?.treatmentAreasAndCare} />
      <DetailedServiceContent content={content?.detailedServiceContent} />
      <ServiceExtrasSection 
        aftercareContent={content?.aftercareContent} 
        whyChooseContent={content?.whyChooseContent} 
      />
       <PatientTestimonials content={content?.testimonials} />
       <DoctorsSection content={content?.doctors} />
    
    <PaymentInsurance content={content?.paymentInsurance} />
      <ContentReviewBadge doctorName="Sonita Sinaga" pageSlug="electrolysis-dubai" />
      <FAQSection content={content?.faq} />
      <BookConsultation content={content?.bookConsultation} />
    </Layout>
  );
}
