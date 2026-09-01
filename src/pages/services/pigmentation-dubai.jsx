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


export default function PigmentationPage() {
  const categoryName = 'Aesthetic Dermatology';
  const subcategoryName = 'Pigmentation Treatment';
  // Get content from data file - nested path
  const content = getSubcategoryContent('aesthetic-dermatology-dubai', 'skin-treatment/pigmentation');

  return (
    <Layout>
      <Head>
  <title key="title">Pigmentation Treatment in Dubai for Even Skin Tone</title>
  <meta name="description" content="Pigmentation treatment in Dubai helps reduce dark spots, melasma, and uneven skin tone through safe, doctor-guided dermatology care." key="description" />
  <meta name="keywords" content="Pigmentation treatment in Dubai, Dark spots treatment in Dubai, Pigmentation Dubai, Uneven skin tone treatment, Skin discoloration Dubai, Hyperpigmentation treatment, Dermatology treatment Dubai, Skin brightening therapy Dubai" />
  {/* Open Graph Meta Tags */}
  <meta property="og:title" content="Pigmentation Treatment in Dubai for Even Skin Tone" />
  <meta property="og:description" content="Pigmentation treatment in Dubai helps reduce dark spots, melasma, and uneven skin tone through safe, doctor-guided dermatology care." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://ramacarepolyclinic.ae/services/pigmentation-dubai/" />
  <meta property="og:image" content="https://ramacarepolyclinic.ae/images/pig.jpg" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="Pigmentation Treatment in Dubai - RamaCare Polyclinic" />
  <meta property="og:site_name" content="RamaCare Polyclinic" />
  <meta property="og:locale" content="en_AE" />

  {/* Twitter Card Meta Tags */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Pigmentation Treatment in Dubai for Even Skin Tone" />
  <meta name="twitter:description" content="Reduce dark spots, melasma, and uneven skin tone with safe, doctor-guided pigmentation treatment at RamaCare Polyclinic Dubai." />
  <meta name="twitter:image" content="https://ramacarepolyclinic.ae/images/pig.jpg" />

  <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "MedicalWebPage",
          "@id": "https://ramacarepolyclinic.ae/services/pigmentation-dubai/#webpage",
          "url": "https://ramacarepolyclinic.ae/services/pigmentation-dubai/",
          "name": "Pigmentation Treatment in Dubai for Even Skin Tone",
          "description": "Pigmentation treatment in Dubai helps reduce dark spots, melasma, and uneven skin tone through safe, doctor-guided dermatology care.",
          "inLanguage": "en",
          "isPartOf": {
            "@type": "WebSite",
            "url": "https://ramacarepolyclinic.ae/",
            "name": "RamaCare Polyclinic"
          },
          "about": {
            "@type": "MedicalCondition",
            "name": "Hyperpigmentation / Melasma / Uneven Skin Tone"
          },
          "lastReviewed": "2026-08-29",
          "reviewedBy": {
            "@id": "https://ramacarepolyclinic.ae/services/pigmentation-dubai/#reviewer"
          },
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ramacarepolyclinic.ae/" },
              { "@type": "ListItem", "position": 2, "name": "Aesthetic Dermatology", "item": "https://ramacarepolyclinic.ae/services/aesthetic-dermatology-dubai" },
              { "@type": "ListItem", "position": 3, "name": "Pigmentation Treatment", "item": "https://ramacarepolyclinic.ae/services/pigmentation-dubai/" }
            ]
          }
        },
        {
          "@type": "Person",
          "@id": "https://ramacarepolyclinic.ae/services/pigmentation-dubai/#reviewer",
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
          "@id": "https://ramacarepolyclinic.ae/services/pigmentation-dubai/#faq",
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
      <ContentReviewBadge doctorName="Sonita Sinaga" pageSlug="pigmentation-dubai" />
      <FAQSection content={content?.faq} />
      <BookConsultation content={content?.bookConsultation} />
    </Layout>
  );
}
