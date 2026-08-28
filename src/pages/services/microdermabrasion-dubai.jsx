import Layout from '../../../components/Layout';
import Head from "next/head";
import TreatmentHero from '../../../components/TreatmentHero';
import QuickNavigation from '../../../components/QuickNavigation';
// import CertificationsSection from '../../../components/CertificationsSection';
import TreatmentOverview from '../../../components/TreatmentOverview';
import HealingJourney from '../../../components/HealingJourney';
import TreatmentBenefits from '../../../components/TreatmentBenefits';
import SkinTreatmentAdditionalContent from '../../../components/SkinTreatmentAdditionalContent';
import PatientTestimonials from '../../../components/VideoTestimonials';
import DoctorsSection from '../../../components/DoctorsSection';
// import PricingPackages from '../../../components/PricingPackages';
import PaymentInsurance from '../../../components/PaymentInsurance';
import FAQSection from '../../../components/Faq';
import BookConsultation from '../../../components/BookConsultation';
import ContentReviewBadge from '../../../components/ContentReviewBadge';
import { getSubcategoryContent } from '../../data/subcategoryContent';


export default function MicrodermabrasionPage() {
  const categoryName = 'Aesthetic Dermatology';
  const subcategoryName = 'Microdermabrasion';

  // Get content from data file - nested path
  const content = getSubcategoryContent('aesthetic-dermatology-dubai', 'skin-treatment/microdermabrasion');

  return (
    <Layout>
      <Head>
  <title key="title">Microdermabrasion in Dubai for Smooth Radiant Skin</title>
  <meta name="description" content="Microdermabrasion in Dubai gently exfoliates the skin to improve texture, reduce dullness, unclog pores, and support a clearer, healthier complexion." key="description" />
  <meta name="keywords" content="Microdermabrasion in Dubai, Skin exfoliation treatment Dubai, Microdermabrasion facial Dubai, Skin rejuvenation Dubai, Dead skin removal treatment, Open pores treatment Dubai, Skin texture improvement, Professional facial treatment Dubai, Non-invasive skin treatment, Clear skin therapy Dubai, Microdermabrasion in dubai price, Microdermabrasion in dubai cost, Best microdermabrasion in dubai, Microdermabrasion in dubai offers, Microdermabrasion near me, Microdermabrasion benefits, Microdermabrasion meaning, Microdermabrasion vs HydraFacial" />
  
   <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "MedicalCondition",
          "@id": "https://ramacarepolyclinic.ae/services/microdermabrasion-dubai/#condition",
          "name": "Facial Skin Texture and Surface Concerns",
          "alternateName": "Uneven Texture, Mild Scarring & Dull Skin",
          "url": "https://ramacarepolyclinic.ae/services/microdermabrasion-dubai/",
          "description": "Facial skin texture and surface concerns include uneven skin feel, mild surface scarring, clogged pores, dullness, and early signs of aging that affect the smooth appearance and glow of the skin.",
          "possibleTreatment": {
            "@type": "MedicalTherapy",
            "name": "Microdermabrasion Therapy",
            "description": "A non-invasive dermatologic therapy using controlled exfoliation to remove dead skin cells, improve surface texture, stimulate gentle skin renewal, and enhance overall complexion clarity."
          }
        },
        {
          "@type": "MedicalProcedure",
          "@id": "https://ramacarepolyclinic.ae/services/microdermabrasion-dubai/#procedure",
          "name": "Microdermabrasion Treatment in Dubai",
          "alternateName": "Crystal/Diamond Microdermabrasion Facial",
          "url": "https://ramacarepolyclinic.ae/services/microdermabrasion-dubai/",
          "mainEntityOfPage": "https://ramacarepolyclinic.ae/services/microdermabrasion-dubai/",
          "description": "Microdermabrasion treatment in Dubai at RamaCare Polyclinic is a non-invasive aesthetic dermatology procedure that gently exfoliates the skin’s outer layer to improve texture, clarity, and tone.",
          "procedureType": "Non-invasive aesthetic dermatology procedure",
          "howPerformed": "This procedure involves using a specialized microdermabrasion device that emits fine crystals or diamond tips to abrade the skin’s surface, followed by vacuum suction to remove dead skin cells and impurities, helping reveal smoother, brighter skin.",
          "preparation": "Patients are advised to avoid heavy exfoliants, retinoids, or sun exposure before the session and arrive with clean skin. A full skincare history should be discussed with the clinician.",
          "followup": "Follow-up sessions may be recommended at regular intervals for optimal texture improvement, and clinicians may advise appropriate aftercare to maintain results.",
          "indication": [
            "Uneven skin texture",
            "Dull or tired complexion",
            "Mild surface scarring",
            "Clogged or enlarged pores",
            "Fine lines and early aging signs"
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
       <SkinTreatmentAdditionalContent content={content} />
       <PatientTestimonials content={content?.testimonials} />
       <DoctorsSection content={content?.doctors} />
    
    <PaymentInsurance content={content?.paymentInsurance} />
      <ContentReviewBadge doctorName="Sonita Sinaga" pageSlug="microdermabrasion-dubai" />
      <FAQSection content={content?.faq} />
      <BookConsultation content={content?.bookConsultation} />
    </Layout>
  );
}
