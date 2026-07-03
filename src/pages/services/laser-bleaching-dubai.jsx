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


export default function LaserBleachingPage() {
  const categoryName = 'Aesthetic Dermatology';
  const subcategoryName = 'Laser Bleaching for Skin';

  // Get content from data file - nested path
  const content = getSubcategoryContent('aesthetic-dermatology-dubai', 'laser-treatment/laser-bleaching');

  const navItems = [
    { id: 'treatment-info', label: 'Treatment Info' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'benefits', label: 'Benefits' },
    { id: 'which-option-right', label: 'Which Option Right?' },
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
  <title key="title">Laser Bleaching in Dubai for Brighter and Even Skin</title>
  <meta name="description" content="Laser bleaching in Dubai reduces dark spots, pigmentation, and uneven skin tone, restoring a radiant, smooth complexion under expert medical care." key="description" />
  <meta name="keywords" content="Laser bleaching in Dubai, Skin brightening laser Dubai, Pigmentation reduction Dubai, Dark spots treatment Dubai, Facial laser treatment Dubai, Even skin tone treatment, Non-surgical skin brightening, Professional laser therapy Dubai, Skin rejuvenation Dubai, Safe laser skin treatment" />
  
   <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "MedicalCondition",
          "@id": "https://ramacarepolyclinic.ae/services/laser-bleaching-dubai/#condition",
          "name": "Unwanted Dark or Prominent Body or Facial Hair Pigmentation",
          "alternateName": "Hair Pigment Visibility & Cosmetic Hair Aesthetics",
          "url": "https://ramacarepolyclinic.ae/services/laser-bleaching-dubai/",
          "description": "Unwanted dark or prominent body or facial hair pigmentation can affect aesthetic appearance and confidence, particularly when traditional removal methods are not desired or feasible. Laser bleaching targets the hair pigment to make hair lighter and less noticeable.",
          "possibleTreatment": {
            "@type": "MedicalTherapy",
            "name": "Laser Hair Bleaching Therapy",
            "description": "Laser hair bleaching is a cosmetic dermatologic therapy that uses controlled laser light to break down melanin within the hair shaft, reducing hair colour intensity and visibility without removing the hair follicle itself."
          }
        },
        {
          "@type": "MedicalProcedure",
          "@id": "https://ramacarepolyclinic.ae/services/laser-bleaching-dubai/#procedure",
          "name": "Laser Hair Bleaching in Dubai",
          "alternateName": "Pigment Reduction Laser Treatment for Hair",
          "url": "https://ramacarepolyclinic.ae/services/laser-bleaching-dubai/",
          "mainEntityOfPage": "https://ramacarepolyclinic.ae/services/laser-bleaching-dubai/",
          "description": "Laser hair bleaching at RamaCare Polyclinic in Dubai is a personalized cosmetic treatment that uses advanced laser technology to lighten the colour of unwanted hair — making it less noticeable and blending more naturally with the surrounding skin tone. It’s ideal for individuals who prefer lighter, finer looking hair without invasive removal.",
          "procedureType": "Minimally invasive dermatologic cosmetic procedure",
          "howPerformed": "After a clinical consultation and assessment of hair type and skin tone, a trained clinician uses a specialized laser device that emits controlled light energy. The laser energy is absorbed by the melanin pigment in the hair shafts, breaking it down and causing gradual lightening of the hair colour over multiple sessions. Protective eyewear and safety precautions are used during the procedure.",
          "preparation": "Patients are advised to present with clean skin in the treatment area and disclose any skin sensitivities, medications, or recent sun exposure. The clinician will review hair characteristics, discuss expected results, and outline any pre‑treatment care needed.",
          "followup": "Follow‑up sessions may be scheduled based on individual response and desired degree of hair lightening. Post‑treatment care includes protecting the area from excessive sun exposure and following any skin care guidance provided by the clinician.",
          "indication": [
            "Unwanted dark facial hair",
            "Unwanted body hair with high contrast against skin tone",
            "Desire for cosmetic hair lightening instead of removal",
            "Areas where traditional removal methods are unsuitable",
            "Hair aesthetic enhancement for confidence and cosmetic blending"
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
