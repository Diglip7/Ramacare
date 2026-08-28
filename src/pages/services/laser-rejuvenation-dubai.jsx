import Layout from '../../../components/Layout';
import ContentReviewBadge from '../../../components/ContentReviewBadge';
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


export default function LaserRejuvenationPage() {
  const categoryName = 'Aesthetic Dermatology';
  const subcategoryName = 'Laser Rejuvenation';

  // Get content from data file - nested path
  const content = getSubcategoryContent('aesthetic-dermatology-dubai', 'laser-treatment/laser-rejuvenation');

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
  <title key="title">Laser Rejuvenation in Dubai for Youthful, Radiant Skin</title>
  <meta name="description" content="Laser rejuvenation in Dubai helps reduce wrinkles, fine lines, and pigmentation while improving skin texture and glow through safe, expert care." key="description" />
  <meta name="keywords" content="Laser rejuvenation in Dubai, Skin rejuvenation Dubai, Anti-aging laser treatment Dubai, Wrinkle reduction Dubai, Fine lines treatment Dubai, Pigmentation correction Dubai, Facial laser therapy Dubai, Non-surgical skin rejuvenation, Professional laser skin treatment, Youthful skin treatment Dubai" />
  
  <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "MedicalCondition",
          "@id": "https://ramacarepolyclinic.ae/services/laser-rejuvenation-dubai/#condition",
          "name": "Skin Aging, Texture Irregularities & Pigmentation Concerns",
          "alternateName": "Dull Skin, Fine Lines, Uneven Tone & Texture",
          "url": "https://ramacarepolyclinic.ae/services/laser-rejuvenation-dubai/",
          "description": "Skin concerns such as loss of radiance, uneven texture, fine lines, superficial pigmentation, early signs of aging, and dull complexion can benefit from advanced laser rejuvenation therapy to promote clearer, firmer, and more youthful skin.([turn0search0])",
          "possibleTreatment": {
            "@type": "MedicalTherapy",
            "name": "Laser Rejuvenation Therapy",
            "description": "Laser rejuvenation therapy uses controlled laser energy to target skin at various depths, stimulating collagen production, resurfacing damaged skin cells, and improving texture, tone, and overall facial radiance.([turn0search0])"
          }
        },
        {
          "@type": "MedicalProcedure",
          "@id": "https://ramacarepolyclinic.ae/services/laser-rejuvenation-dubai/#procedure",
          "name": "Laser Rejuvenation Treatment in Dubai",
          "alternateName": "Skin Rejuvenation Laser Therapy",
          "url": "https://ramacarepolyclinic.ae/services/laser-rejuvenation-dubai/",
          "mainEntityOfPage": "https://ramacarepolyclinic.ae/services/laser-rejuvenation-dubai/",
          "description": "Laser rejuvenation at RamaCare Polyclinic in Dubai is an advanced dermatologic laser procedure designed to improve skin texture, reduce fine lines and superficial pigmentation, and enhance overall skin clarity. It uses targeted laser energy to stimulate the skin’s natural repair mechanisms and collagen production.([turn0search0])",
          "procedureType": "Non‑invasive cosmetic laser procedure",
          "howPerformed": "During a laser rejuvenation session, a trained clinician directs controlled laser pulses over the treatment area. These energy pulses penetrate the skin to remove damaged surface cells, encourage collagen remodeling, and improve evenness of tone while leaving surrounding tissue unharmed. Protective measures such as eyewear and cooling are used for comfort.([turn0search0])",
          "preparation": "Patients are advised to avoid extensive sun exposure, discontinue harsh exfoliants or retinoids before treatment, and discuss any skin sensitivities or medical history with their clinician during consultation.([turn0search0])",
          "followup": "Follow‑up care typically includes monitoring skin response, advising on gentle skincare, strict sun protection, and planning additional sessions to achieve and maintain optimal results.([turn0search0])",
          "indication": [
            "Dull or tired complexion",
            "Superficial pigmentation or sun spots",
            "Fine lines and early signs of aging",
            "Uneven skin texture",
            "Loss of skin radiance"
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
       <ContentReviewBadge doctorName="Sonita Sinaga" pageSlug="laser-rejuvenation-dubai" />
    
    <PaymentInsurance content={content?.paymentInsurance} />
      <FAQSection content={content?.faq} />
      <BookConsultation content={content?.bookConsultation} />
    </Layout>
  );
}
