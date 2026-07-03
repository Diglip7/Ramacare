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
  
  <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "MedicalCondition",
          "@id": "https://ramacarepolyclinic.ae/services/mesotherapy-dubai/#condition",
          "name": "Skin Rejuvenation, Hydration Deficits & Localized Fat/Cellulite Concerns",
          "alternateName": "Dull Skin, Fine Lines, Uneven Texture & Localized Fat Deposits",
          "url": "https://ramacarepolyclinic.ae/services/mesotherapy-dubai/",
          "description": "Skin rejuvenation and hydration deficit conditions include premature signs of aging, loss of elasticity or radiance, uneven texture, and localized areas of mild fat or cellulite that may benefit from targeted micro‑injections of vitamins, enzymes, and other solutions.",
          "possibleTreatment": {
            "@type": "MedicalTherapy",
            "name": "Mesotherapy",
            "description": "Mesotherapy is a minimally invasive therapy involving micro‑injections of tailored vitamins, hyaluronic acid, enzymes, and other active agents into the middle layer of the skin to rejuvenate, hydrate, improve texture, and support reduction of mild localized fat or cellulite."
          }
        },
        {
          "@type": "MedicalProcedure",
          "@id": "https://ramacarepolyclinic.ae/services/mesotherapy-dubai/#procedure",
          "name": "Mesotherapy Treatment in Dubai",
          "alternateName": "Mesotherapy Skin Rejuvenation & Local Contouring",
          "url": "https://ramacarepolyclinic.ae/services/mesotherapy-dubai/",
          "mainEntityOfPage": "https://ramacarepolyclinic.ae/services/mesotherapy-dubai/",
          "description": "Mesotherapy at RamaCare Polyclinic in Dubai is a customized minimally invasive cosmetic treatment that uses a series of micro‑injections to deliver vitamins, hyaluronic acid, enzymes, and specialized solutions to improve skin hydration, texture, elasticity, and help with localized contouring.",
          "procedureType": "Minimally invasive injection therapy",
          "howPerformed": "A trained clinician administers multiple micro‑injections of a tailored solution into the mesoderm (middle layer) of the skin using fine needles. The selected cocktail of nutrients and actives helps stimulate collagen, improve moisture retention, refine skin texture, and support localized fat reduction.",
          "preparation": "Patients should arrive with clean skin, avoid blood‑thinning medications or harsh exfoliants prior to treatment, and provide a full medical and skincare history to the clinician to ensure safety and optimal outcomes.",
          "followup": "Follow‑up care may include monitoring of skin response, scheduling additional sessions for cumulative improvement, and guidance on supportive skincare to maintain results.",
          "indication": [
            "Loss of skin hydration and radiance",
            "Fine lines and early signs of aging",
            "Uneven skin texture",
            "Localized cellulite appearance",
            "Mild localized fat deposits"
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
      <SkinTreatmentAdditionalContent content={content} />
      <ServiceExtrasSection aftercareContent={content?.aftercareContent} />
       <PatientTestimonials content={content?.testimonials} />
       <DoctorsSection content={content?.doctors} />
    
    <PaymentInsurance content={content?.paymentInsurance} />
      <FAQSection content={content?.faq} />
      <BookConsultation content={content?.bookConsultation} />
    </Layout>
  );
}
