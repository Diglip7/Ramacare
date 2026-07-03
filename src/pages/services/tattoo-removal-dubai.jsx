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
import TreatmentAdditionalContent from '../../../components/TreatmentAdditionalContent';
import SkinTreatmentAdditionalContent from '../../../components/SkinTreatmentAdditionalContent';
import ServiceExtrasSection from '../../../components/ServiceExtrasSection';
import { getSubcategoryContent } from '../../data/subcategoryContent';


export default function TattooRemovalPage() {
  const categoryName = 'Aesthetic Dermatology';
  const subcategoryName = 'Tattoo Removal';

  // Get content from data file - nested path
  const content = getSubcategoryContent('aesthetic-dermatology-dubai', 'laser-treatment/tattoo-removal');
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

  return (
    <Layout>
      <Head>
  <title key="title">Tattoo Removal in Dubai for Safe and Effective Results</title>
  <meta name="description" content="Tattoo removal in Dubai uses advanced laser treatments to safely fade or remove unwanted tattoos, restoring clear, natural-looking skin under expert care." key="description" />
  <meta name="keywords" content="Tattoo removal in Dubai, Laser tattoo removal Dubai, Professional tattoo removal, Unwanted tattoo removal, Non-surgical tattoo removal, Safe tattoo fading Dubai, Tattoo lightening treatment, Permanent tattoo removal Dubai, Skin restoration after tattoo, Expert tattoo removal clinic" />
  
  <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "MedicalCondition",
          "@id": "https://ramacarepolyclinic.ae/services/tattoo-removal-dubai/#condition",
          "name": "Unwanted Tattoos and Persistent Pigmented Ink",
          "alternateName": "Regret Tattoos, Unwanted Body Art",
          "url": "https://ramacarepolyclinic.ae/services/tattoo-removal-dubai/",
          "description": "Unwanted tattoos and persistent pigmented ink may be removed or faded using medically supervised laser treatments. Tattoo removal addresses aesthetic concerns, career or lifestyle changes, and residual ink from amateur or traumatic tattoos.",
          "possibleTreatment": {
            "@type": "MedicalTherapy",
            "name": "Laser Tattoo Removal Therapy",
            "description": "Laser tattoo removal therapy uses focused light pulses to break tattoo pigment into smaller particles that the body’s natural processes gradually eliminate while preserving the surrounding skin."
          }
        },
        {
          "@type": "MedicalProcedure",
          "@id": "https://ramacarepolyclinic.ae/services/tattoo-removal-dubai/#procedure",
          "name": "Laser Tattoo Removal in Dubai",
          "alternateName": "Tattoo Fading and Ink Reduction Treatment",
          "url": "https://ramacarepolyclinic.ae/services/tattoo-removal-dubai/",
          "mainEntityOfPage": "https://ramacarepolyclinic.ae/services/tattoo-removal-dubai/",
          "description": "Laser tattoo removal at RamaCare Polyclinic in Dubai uses advanced Q‑switched and picosecond laser technologies to break down tattoo pigment safely and effectively, tailored to tattoo characteristics, skin type, and treatment goals.",
          "procedureType": "Dermatologic laser procedure",
          "howPerformed": "After a detailed consultation and assessment of tattoo size, colors, ink density, and skin type, the clinician selects appropriate laser wavelengths (e.g., Q‑switched Nd:YAG, picosecond lasers) to target tattoo pigment. Protective eyewear is worn and numbing or cooling options are offered for comfort. Multiple sessions spaced over weeks may be required to progressively fade or remove the tattoo.",
          "preparation": "Patients should share complete medical and skin history, avoid sun exposure and tanning before treatment, stop irritant products as advised, and ensure the treatment area is clean and free of lotions or oils prior to laser sessions.",
          "followup": "Post‑treatment care includes keeping the area clean, applying recommended ointments or dressings, protecting the skin from sun exposure, and spacing follow‑up sessions as per the clinician’s guidance for optimal pigment clearance and healing.",
          "indication": [
            "Unwanted body art or tattoos",
            "Fading prior cosmetic tattoos or microblading",
            "Amateur and professional tattoo removal",
            "Lingering ink from traumatic tattoos",
            "Preparation for cover‑up tattoo work"
          ],
          "provider": {
            "@type": "MedicalClinic",
            "name": "RamaCare Polyclinic – Aesthetic & Dermatology Care",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Jumeirah Terrace Building, Ground Floor",
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
              content={{skinTreatmentContent: content?.skinTreatmentContent, }}  />
      <SkinTreatmentAdditionalContent 
              content={{whyChooseSection: content?.whyChooseSection,
                 whenToConsider: content?.whenToConsider,}} />
      <ServiceExtrasSection aftercareContent={content?.aftercareContent} />
       <PatientTestimonials content={content?.testimonials} />
       <DoctorsSection content={content?.doctors} />
    
    <PaymentInsurance content={content?.paymentInsurance} />
      <FAQSection content={content?.faq} />
      <BookConsultation content={content?.bookConsultation} />
    </Layout>
  );
}
