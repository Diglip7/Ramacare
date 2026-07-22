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
import { getSubcategoryContent } from '../../data/subcategoryContent';


export default function CarbonLaserTreatmentPage() {
  const categoryName = 'Aesthetic Dermatology';
  const subcategoryName = 'Carbon Laser Treatment';

  // Get content from data file - nested path
  const content = getSubcategoryContent('aesthetic-dermatology-dubai', 'laser-treatment/carbon-laser-treatment');

  return (
    <Layout>
      <Head>
  <title key="title">Carbon Laser Treatment in Dubai | Skin Rejuvenation</title>
  <meta name="description" content="Experience safe and effective Carbon Laser treatment in Dubai for glowing, clear skin. Reduce pigmentation, acne scars, and fine lines with expert care." key="description" />
  <meta name="keywords" content="Carbon Laser Dubai, Carbon Laser facial Dubai, Acne scar treatment Dubai, Skin rejuvenation Dubai, Pigmentation removal Dubai, Laser skin therapy Dubai, Carbon peel Dubai, Anti-ageing skin treatment Dubai, Glowing skin treatment Dubai, Dermatology laser Dubai, Non-surgical skin treatment in Dubai, Laser facial clinic Dubai" />

  
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "MedicalCondition",
          "@id": "https://ramacarepolyclinic.ae/services/carbon-laser-dubai/#condition",
          "name": "Skin Dullness, Enlarged Pores, Mild Texture Issues & Pigmentation",
          "alternateName": "Uneven Skin Tone, Acne‑Prone Texture & Visible Pores",
          "url": "https://ramacarepolyclinic.ae/services/carbon-laser-dubai/",
          "description": "Conditions such as dull complexion, enlarged pores, uneven texture, superficial pigmentation, and acne‑prone skin can affect the overall appearance and radiance of the face. Carbon laser therapy targets these concerns by promoting exfoliation, boosting collagen, and enhancing skin clarity.",
          "possibleTreatment": {
            "@type": "MedicalTherapy",
            "name": "Carbon Laser Skin Rejuvenation Therapy",
            "description": "Carbon laser therapy uses a carbon‑based lotion applied to the skin followed by laser pulses that are absorbed by the carbon particles. This process exfoliates dead skin cells, reduces oil and impurities, stimulates collagen formation, and improves surface texture and tone."
          }
        },
        {
          "@type": "MedicalProcedure",
          "@id": "https://ramacarepolyclinic.ae/services/carbon-laser-dubai/#procedure",
          "name": "Carbon Laser Treatment in Dubai",
          "alternateName": "Carbon Peel / Nano Laser Peel",
          "url": "https://ramacarepolyclinic.ae/services/carbon-laser-dubai/",
          "mainEntityOfPage": "https://ramacarepolyclinic.ae/services/carbon-laser-dubai/",
          "description": "Carbon laser treatment at RamaCare Polyclinic in Dubai is a non‑invasive cosmetic dermatology procedure designed to exfoliate the skin, refine texture, reduce superficial pigmentation, shrink enlarged pores, and enhance complexion clarity using a carbon mask and laser energy.",
          "procedureType": "Non‑invasive cosmetic laser procedure",
          "howPerformed": "A carbon‑based lotion is first applied to the cleansed skin. Once the carbon particles penetrate pores and attach to debris, a specialized laser emits targeted pulses that vaporize the carbon, removing dead skin cells, impurities, and excess oil. The laser energy also stimulates collagen production, improving overall texture and tone.",
          "preparation": "Patients are advised to arrive with clean skin and avoid heavy exfoliation, retinoids, or sun exposure shortly before the session. A detailed medical and skin history should be discussed with the clinician during consultation.",
          "followup": "Follow‑up care typically includes monitoring skin response, advising on gentle skincare, sunscreen usage, and planning additional sessions as needed to maintain and enhance outcomes.",
          "indication": [
            "Dull or lackluster skin",
            "Enlarged pores",
            "Uneven texture or tone",
            "Superficial pigmentation",
            "Acne‑prone or congested skin"
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
       <PatientTestimonials content={content?.testimonials} />
       <DoctorsSection content={content?.doctors} />
    
    <PaymentInsurance content={content?.paymentInsurance} />
      <FAQSection content={content?.faq} />
      <BookConsultation content={content?.bookConsultation} />
    </Layout>
  );
}
