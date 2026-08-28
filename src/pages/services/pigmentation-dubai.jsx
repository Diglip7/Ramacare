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
  
   <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "MedicalCondition",
          "@id": "https://ramacarepolyclinic.ae/services/pigmentation-dubai/#condition",
          "name": "Facial Pigmentation and Uneven Skin Tone",
          "alternateName": "Melasma, Hyperpigmentation & Dark Spots",
          "url": "https://ramacarepolyclinic.ae/services/pigmentation-dubai/",
          "description": "Facial pigmentation and uneven skin tone include conditions such as melasma, post-inflammatory hyperpigmentation, sun-induced dark spots, and other discoloration that can affect the face’s appearance and texture.",
          "possibleTreatment": {
            "@type": "MedicalTherapy",
            "name": "Pigmentation Management Therapy",
            "description": "Comprehensive pigmentation management therapy involving clinical assessment, targeted treatments such as chemical peels, laser therapy, topical agents, and customized skincare protocols designed to reduce pigmentation and even skin tone."
          }
        },
        {
          "@type": "MedicalProcedure",
          "@id": "https://ramacarepolyclinic.ae/services/pigmentation-dubai/#procedure",
          "name": "Pigmentation Treatment in Dubai",
          "alternateName": "Pigmentation Reduction & Tone Correction",
          "url": "https://ramacarepolyclinic.ae/services/pigmentation-dubai/",
          "mainEntityOfPage": "https://ramacarepolyclinic.ae/services/pigmentation-dubai/",
          "description": "Pigmentation treatment in Dubai at RamaCare Polyclinic offers a personalized clinical approach to evaluating and managing facial pigmentation concerns, using advanced aesthetic techniques to reduce discoloration and improve overall skin tone.",
          "procedureType": "Medical and aesthetic dermatology procedure",
          "howPerformed": "A detailed clinical assessment identifies the pigmentation type and severity. Treatments may include chemical peels, topical prescription or cosmeceutical agents, and resurfacing procedures tailored to individual needs.",
          "preparation": "Patients should avoid excessive sun exposure, tanning, and certain skincare products (like retinoids or exfoliants) before treatment. A full medical and skincare history is reviewed prior to therapy.",
          "followup": "Follow-up appointments help monitor skin response, adjust treatment plans, and ensure long-term management of pigmentation, including maintenance and skincare guidance.",
          "indication": [
            "Melasma",
            "Sun-induced hyperpigmentation",
            "Post-inflammatory dark spots",
            "Uneven skin tone",
            "Freckles and age spots"
          ],
          "provider": {
            "@type": "MedicalClinic",
            "name": "RamaCare Polyclinic – Dermatology & Aesthetic Care",
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
