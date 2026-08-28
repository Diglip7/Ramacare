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


export default function DermaRollerPage() {
  const categoryName = 'Aesthetic Dermatology';
  const subcategoryName = 'Derma Roller Treatment';

  // Get content from data file - nested path
  const content = getSubcategoryContent('aesthetic-dermatology-dubai', 'skin-treatment/derma-roller');

  return (
    <Layout>
      <Head>
  <title key="title">Derma Roller Treatment in Dubai for Skin Renewal Care</title>
  <meta name="description" content="Derma roller treatment in Dubai improves skin texture, reduces acne scars, and boosts collagen through safe, doctor-led microneedling care plans today." key="description" />
  <meta name="keywords" content="Derma roller treatment in Dubai, Microneedling Dubai, Acne scar treatment Dubai, Skin rejuvenation Dubai, Collagen induction therapy, Derma roller for face Dubai, Skin texture improvement, Professional microneedling treatment, Anti-aging skin treatment Dubai, Open pores treatment Dubai, Scar reduction treatment in Dubai, Skin resurfacing Dubai" />
  
  <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "MedicalCondition",
          "@id": "https://ramacarepolyclinic.ae/services/derma-roller-dubai/#condition",
          "name": "Skin Texture Irregularities, Fine Lines & Scarring",
          "alternateName": "Uneven Skin, Acne Scars, Wrinkles",
          "url": "https://ramacarepolyclinic.ae/services/derma-roller-dubai/",
          "description": "Skin concerns such as uneven texture, fine lines, acne scarring, and signs of aging may benefit from microneedling therapy. Derma Roller treatment is designed to stimulate natural skin repair and collagen production to improve overall skin quality.",
          "possibleTreatment": {
            "@type": "MedicalTherapy",
            "name": "Microneedling Therapy",
            "description": "Microneedling (Derma Rolling) uses controlled micro‑injuries to the skin to trigger healing responses, enhance collagen and elastin production, and improve texture, tone, and appearance of skin."
          }
        },
        {
          "@type": "MedicalProcedure",
          "@id": "https://ramacarepolyclinic.ae/services/derma-roller-dubai/#procedure",
          "name": "Derma Roller Microneedling in Dubai",
          "alternateName": "Microneedling Skin Rejuvenation",
          "url": "https://ramacarepolyclinic.ae/services/derma-roller-dubai/",
          "mainEntityOfPage": "https://ramacarepolyclinic.ae/services/derma-roller-dubai/",
          "description": "Derma Roller microneedling at RamaCare Polyclinic in Dubai is a minimally invasive dermatologic procedure that uses fine needles to create controlled micro‑injuries on the skin, stimulating natural repair mechanisms to improve texture, reduce fine lines, and minimize scarring.",
          "procedureType": "Dermatologic microneedling procedure",
          "howPerformed": "A clinician assesses the skin condition and selects an appropriate Derma Roller device. After cleansing and topical numbing (if indicated), the roller is gently moved over treatment areas to create micro‑channels that encourage collagen formation. Sessions typically last 20–40 minutes depending on the treatment area.",
          "preparation": "Patients should share medical and skin history, avoid recent sun exposure and harsh exfoliants, and follow any clinician guidance for prepping the skin area prior to treatment.",
          "followup": "Post‑treatment care includes keeping the area clean, using recommended skin care products, avoiding sun exposure, and scheduling follow‑up sessions for optimal results. Patients are advised on recovery expectations and skin maintenance.",
          "indication": [
            "Fine lines and early signs of aging",
            "Acne scars and texture irregularities",
            "Uneven skin tone and large pores",
            "Mild stretch marks",
            "Skin rejuvenation and glow enhancement"
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
      <ContentReviewBadge doctorName="Sonita Sinaga" pageSlug="derma-roller-dubai" />
      <FAQSection content={content?.faq} />
      <BookConsultation content={content?.bookConsultation} />
    </Layout>
  );
}
