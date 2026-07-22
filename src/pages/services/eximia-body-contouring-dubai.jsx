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

export default function BodyShapingPage() {
  const categoryName = 'Aesthetic Dermatology';
  const subcategoryName = 'Eximia Body Contouring';

  // Get content from data file - nested path
  const content = getSubcategoryContent('aesthetic-dermatology-dubai', 'body-shaping/eximia-body-contouring');
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
  <title key="title">Eximia Body Contouring in Dubai for Slim and Toned Body</title>
  <meta name="description" content="Eximia body contouring in Dubai helps reduce fat, tighten skin, and sculpt your body safely using advanced non-invasive technology under expert care." key="description" />
  <meta name="keywords" content="Eximia body contouring Dubai, Non-surgical body sculpting Dubai, Fat reduction treatment Dubai, Skin tightening Dubai, Body slimming treatment Dubai, Professional body contouring, Non-invasive fat removal, Toned body treatment Dubai, Body shaping therapy, Expert body contouring clinic" />
  
  <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "MedicalCondition",
          "@id": "https://ramacarepolyclinic.ae/services/eximia-body-contouring-dubai/#condition",
          "name": "Localized Fat Deposits, Loose Skin, and Cellulite",
          "alternateName": "Body Contouring Concerns, Stubborn Fat Pockets",
          "url": "https://ramacarepolyclinic.ae/services/eximia-body-contouring-dubai/",
          "description": "Localized fat deposits, loose skin, and cellulite can resist diet and exercise. Eximia body contouring treatments are non‑surgical options that help break down fat, tighten skin, and improve body contours under clinical supervision. ",
          "possibleTreatment": {
            "@type": "MedicalTherapy",
            "name": "Eximia Body Contouring Therapy",
            "description": "Eximia body contouring therapy uses a combination of radiofrequency, ultrasound, vacuum massage, and mechanical stimulation to target stubborn fat, enhance circulation, tighten skin, and smooth cellulite for improved body tone and shape."
          }
        },
        {
          "@type": "MedicalProcedure",
          "@id": "https://ramacarepolyclinic.ae/services/eximia-body-contouring-dubai/#procedure",
          "name": "Eximia Body Contouring in Dubai",
          "alternateName": "Non‑Surgical Body Contouring Treatment",
          "url": "https://ramacarepolyclinic.ae/services/eximia-body-contouring-dubai/",
          "mainEntityOfPage": "https://ramacarepolyclinic.ae/services/eximia-body-contouring-dubai/",
          "description": "Eximia Body Contouring at RamaCare Polyclinic in Dubai is a non‑surgical, non‑invasive body shaping procedure that combines advanced technologies to reduce localized fat, firm lax skin, and improve body contours with minimal downtime. ",
          "procedureType": "Non‑invasive body contouring procedure",
          "howPerformed": "After an initial consultation and body assessment, clinicians select customized Eximia settings that utilize radiofrequency, ultrasound, and mechanical stimuli. Sessions typically last 30‑60 minutes and involve controlled energy delivery to the treatment areas to stimulate fat breakdown, tighten skin tissue, and improve circulation. ",
          "preparation": "Patients should share a full medical history, avoid excessive sun exposure on treatment areas, and follow clinician guidance on skin preparation prior to sessions. ",
          "followup": "Post‑treatment care includes hydration guidance, monitoring healing and contour improvements, and scheduling follow‑up sessions as needed to achieve optimal results. ",
          "indication": [
            "Localized stubborn fat resistant to diet and exercise",
            "Loose, sagging skin on body areas",
            "Visible cellulite and uneven skin texture",
            "Post‑weight loss body laxity",
            "Individuals seeking non‑surgical body contouring"
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
