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


export default function CarboxyTherapyPage() {
  const categoryName = 'Aesthetic Dermatology';
  const subcategoryName = 'Carboxy Therapy';

  // Get content from data file - nested path
  const content = getSubcategoryContent('aesthetic-dermatology-dubai', 'skin-treatment/carboxy-therapy');

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
  <title key="title">Carboxy Therapy in Dubai for Skin and Body Rejuvenation</title>
  <meta name="description" content="Carboxy therapy in Dubai improves circulation, skin texture, and elasticity using safe carbon dioxide therapy under expert medical supervision." key="description" />
  <meta name="keywords" content="Carboxy therapy in Dubai, Carboxytherapy treatment Dubai, Skin rejuvenation Dubai, Dark circles treatment Dubai, Cellulite reduction therapy, Skin tightening treatment Dubai, Body contouring Dubai, Non-surgical aesthetic treatment, Professional skin therapy in Dubai" />
  
  <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "MedicalCondition",
          "@id": "https://ramacarepolyclinic.ae/services/carboxy-therapy-dubai/#condition",
          "name": "Skin Circulation, Texture, and Rejuvenation Concerns",
          "alternateName": "Skin Blood Flow and Surface Quality Issues",
          "url": "https://ramacarepolyclinic.ae/services/carboxy-therapy-dubai/",
          "description": "Skin circulation, texture, and rejuvenation concerns include dull complexion, uneven texture, mild scarring, pigmentation irregularities, and localized loss of elasticity often related to poor microcirculation and aging.",
          "possibleTreatment": {
            "@type": "MedicalTherapy",
            "name": "Carboxy Therapy",
            "description": "A minimally invasive aesthetic therapy that uses controlled carbon dioxide (CO₂) injections to improve local blood flow, stimulate collagen production, and enhance skin texture and tone."
          }
        },
        {
          "@type": "MedicalProcedure",
          "@id": "https://ramacarepolyclinic.ae/services/carboxy-therapy-dubai/#procedure",
          "name": "Carboxy Therapy in Dubai",
          "alternateName": "CO₂ Aesthetic Skin Rejuvenation",
          "url": "https://ramacarepolyclinic.ae/services/carboxy-therapy-dubai/",
          "mainEntityOfPage": "https://ramacarepolyclinic.ae/services/carboxy-therapy-dubai/",
          "description": "Carboxy Therapy in Dubai at RamaCare Polyclinic is a minimally invasive aesthetic procedure designed to improve skin circulation, texture, tone, and rejuvenation by administering controlled carbon dioxide gas under the skin.",
          "procedureType": "Minimally invasive aesthetic therapy",
          "howPerformed": "The procedure involves the clinician administering controlled carbon dioxide (CO₂) gas beneath the skin in targeted treatment areas using fine cannulas or needles, which stimulates microcirculation and collagen response to enhance skin quality.",
          "preparation": "Patients should attend with clean skin, disclose their medical history, and avoid blood-thinning medications or supplements prior to treatment if advised by the clinician.",
          "followup": "Follow-up sessions may be recommended based on individual response, skin condition, and treatment goals. Clinician-guided aftercare helps optimize results.",
          "indication": [
            "Dull or uneven skin tone",
            "Poor local circulation or dull complexion",
            "Mild scarring or textural irregularities",
            "Localized loss of skin elasticity",
            "Fine lines and early signs of aging"
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
