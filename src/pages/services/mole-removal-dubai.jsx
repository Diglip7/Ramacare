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


export default function MoleRemovalPage() {
  const categoryName = 'Aesthetic Dermatology';
  const subcategoryName = 'Mole Removal';

  // Get content from data file - nested path
  const content = getSubcategoryContent('aesthetic-dermatology-dubai', 'laser-treatment/mole-removal');
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
  <title key="title">Mole Removal in Dubai for Safe and Smooth Skin</title>
  <meta name="description" content="Mole removal in Dubai provides safe, doctor-supervised treatments to eliminate unwanted moles, ensuring smooth, healthy, and natural-looking skin." key="description" />
  <meta name="keywords" content="Mole removal in Dubai, Laser mole removal Dubai, Skin mole treatment Dubai, Safe mole removal procedure, Non-surgical mole removal, Dermatology mole treatment, Facial mole removal Dubai, Body mole removal Dubai, Professional mole removal clinic, Skin lesion removal Dubai" />
  
  <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "MedicalCondition",
          "@id": "https://ramacarepolyclinic.ae/services/mole-removal-dubai/#condition",
          "name": "Benign Skin Lesions & Moles",
          "alternateName": "Skin Nevi, Pigmented Skin Blemishes",
          "url": "https://ramacarepolyclinic.ae/services/mole-removal-dubai/",
          "description": "Benign skin lesions, moles, and pigmented skin blemishes are common dermatologic conditions that can cause cosmetic concern or discomfort. They may be evaluated and removed if necessary for aesthetic reasons or symptomatic relief.",
          "possibleTreatment": {
            "@type": "MedicalTherapy",
            "name": "Mole Removal Therapy",
            "description": "Mole removal therapy involves clinical evaluation and safe dermatologic procedures such as excision, shaving, or laser therapy to remove benign skin lesions while minimizing scarring and promoting healing."
          }
        },
        {
          "@type": "MedicalProcedure",
          "@id": "https://ramacarepolyclinic.ae/services/mole-removal-dubai/#procedure",
          "name": "Mole Removal in Dubai",
          "alternateName": "Dermatologic Lesion Excision & Mole Extraction",
          "url": "https://ramacarepolyclinic.ae/services/mole-removal-dubai/",
          "mainEntityOfPage": "https://ramacarepolyclinic.ae/services/mole-removal-dubai/",
          "description": "Mole removal at RamaCare Polyclinic in Dubai is a clinical dermatologic procedure performed to safely remove benign moles, skin lesions, or raised pigmented growths for cosmetic improvement or patient comfort.",
          "procedureType": "Dermatologic surgical procedure",
          "howPerformed": "A trained dermatologist conducts a full assessment of the mole and surrounding skin. Depending on size, depth, and location, the mole may be removed by surgical excision, shave removal, or laser ablation. Local anesthetic is used for patient comfort and sterility is maintained throughout the procedure. Removed tissue may be sent for histopathologic evaluation if indicated.",
          "preparation": "Patients should disclose their full medical history, including medications, allergies, and any prior skin conditions. Avoiding blood‑thinning medications as advised by the clinician and arriving with clean skin can help optimize safety and outcomes.",
          "followup": "Follow-up care typically includes monitoring the healing of the treated area, dressing changes if needed, and reviewing pathology if sent for analysis. Instructions on wound care and signs of infection are provided to support smooth recovery.",
          "indication": [
            "Benign pigmented moles",
            "Raised skin lesions",
            "Cosmetic skin blemishes",
            "Irritating or friction‑related moles",
            "Patient concern over mole appearance"
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
