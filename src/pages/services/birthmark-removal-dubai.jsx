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


export default function BirthmarkRemovalPage() {
  const categoryName = 'Aesthetic Dermatology';
  const subcategoryName = 'Birthmark Removal';

  // Get content from data file - nested path
  const content = getSubcategoryContent('aesthetic-dermatology-dubai', 'laser-treatment/birthmark-removal');

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
  <title key="title">Birthmark Removal in Dubai for Clear, Even Skin</title>
  <meta name="description" content="Birthmark removal in Dubai uses safe, doctor-supervised laser and medical treatments to reduce or remove birthmarks and restore smooth, natural skin." key="description" />
  <meta name="keywords" content="Birthmark removal in Dubai, Laser birthmark removal Dubai, Medical birthmark treatment, Skin lesion removal Dubai, Safe birthmark treatment, Dermatology birthmark care, Facial birthmark removal, Body birthmark treatment, Non-surgical birthmark removal, Professional skin treatment Dubai" />
  
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "MedicalCondition",
          "@id": "https://ramacarepolyclinic.ae/services/birthmark-removal-dubai/#condition",
          "name": "Benign Birthmarks and Pigmented Skin Marks",
          "alternateName": "Congenital Pigmented Marks, Vascular Birthmarks",
          "url": "https://ramacarepolyclinic.ae/services/birthmark-removal-dubai/",
          "description": "Benign birthmarks are congenital skin marks present at birth or appearing early in life, including pigmented birthmarks (like café‑au‑lait spots or moles) and vascular birthmarks (like hemangiomas). These can be of cosmetic concern or cause psychosocial discomfort.",
          "possibleTreatment": {
            "@type": "MedicalTherapy",
            "name": "Birthmark Removal Therapy",
            "description": "Birthmark removal therapy may include dermatologic laser treatments, surgical excision, or other clinically proven methods to reduce or eliminate the appearance of benign pigmented or vascular birthmarks while minimizing scarring and preserving surrounding tissue integrity."
          }
        },
        {
          "@type": "MedicalProcedure",
          "@id": "https://ramacarepolyclinic.ae/services/birthmark-removal-dubai/#procedure",
          "name": "Birthmark Removal in Dubai",
          "alternateName": "Dermatologic Birthmark Reduction & Correction",
          "url": "https://ramacarepolyclinic.ae/services/birthmark-removal-dubai/",
          "mainEntityOfPage": "https://ramacarepolyclinic.ae/services/birthmark-removal-dubai/",
          "description": "Birthmark removal at RamaCare Polyclinic in Dubai is a dermatologic procedure tailored to the type and characteristics of the birthmark. Clinicians use advanced techniques such as laser therapy, electrosurgery, or surgical excision to safely reduce or eliminate the appearance of benign skin marks.",
          "procedureType": "Dermatologic surgical/laser procedure",
          "howPerformed": "After a detailed assessment of the birthmark’s type, size, and depth, trained clinicians recommend the most appropriate removal method. Options may include targeted laser therapy for pigmented or vascular marks, electrosurgical methods, or precise surgical excision. Local anesthesia is used when appropriate to ensure patient comfort.",
          "preparation": "Patients should share a full medical and skin history, including any prior treatments to the mark. Avoiding recent sun exposure on the area and discontinuing certain topical products (as advised by the clinician) can help optimize results.",
          "followup": "Follow‑up care includes monitoring the treated area for healing, scar management, and scheduling additional sessions if needed for optimal cosmetic outcomes. Instructions on wound care and sun protection are provided to support healing.",
          "indication": [
            "Cosmetically concerning pigmented birthmarks",
            "Vascular birthmarks visible on face or body",
            "Raised or textured skin marks",
            "Birthmarks causing psychosocial discomfort",
            "Birthmarks unresponsive to conservative care"
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
              content={{
                skinTreatmentContent: content?.skinTreatmentContent,
              }} 
            />
            <SkinTreatmentAdditionalContent 
              content={{
                whyChooseSection: content?.whyChooseSection,
                 whenToConsider: content?.whenToConsider,
              }} 
            />
            <ServiceExtrasSection aftercareContent={content?.aftercareContent} />
       <PatientTestimonials content={content?.testimonials} />
       <DoctorsSection content={content?.doctors} />
    
    <PaymentInsurance content={content?.paymentInsurance} />
      <FAQSection content={content?.faq} />
      <BookConsultation content={content?.bookConsultation} />
    </Layout>
  );
}
