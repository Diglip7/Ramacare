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


export default function UltrasoundTherapyPage() {
  const categoryName = 'Physiotherapy';
  const subcategoryName = 'Ultrasound Therapy';

  // Get content from data file
  const content = getSubcategoryContent('physiotherapy-dubai', 'ultrasound-therapy');

  return (
    <Layout>
      <Head>
  <title key="title">Ultrasound Therapy in Dubai | Safe Pain Relief Treatment</title>
  <meta name="description" content="Ultrasound therapy in Dubai helps reduce pain, improve mobility, and speed up healing for muscle and joint conditions with safe, guided physiotherapy care." key="description" />
  <meta name="keywords" content="Ultrasound therapy in Dubai, Therapeutic ultrasound Dubai, Ultrasound physiotherapy Dubai, Pain relief ultrasound therapy, Muscle injury treatment in Dubai, Joint pain therapy in Dubai, Sports injury ultrasound therapy, Physiotherapy ultrasound treatment, Rehabilitation therapy Dubai, Non-surgical pain treatment in Dubai" />
  
   <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: `
{
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  "@id": "https://ramacarepolyclinic.ae/services/ultrasound-therapy-dubai/#procedure",
  "name": "Ultrasound Therapy in Dubai",
  "alternateName": "Therapeutic Ultrasound Treatment",
  "url": "https://ramacarepolyclinic.ae/services/ultrasound-therapy-dubai/",
  "mainEntityOfPage": "https://ramacarepolyclinic.ae/services/ultrasound-therapy-dubai/",
  "description": "Ultrasound Therapy in Dubai at RamaCare Polyclinic offers advanced therapeutic ultrasound treatment for pain relief, soft tissue healing, and musculoskeletal rehabilitation provided by experienced physiotherapists.",
  "procedureType": "Physical therapy",
  "bodyLocation": "Musculoskeletal system",
  "howPerformed": "Ultrasound therapy is performed using a therapeutic ultrasound device that emits sound waves into affected tissues to stimulate circulation, reduce pain, and promote healing. A trained physiotherapist applies the ultrasound gel and moves the ultrasound head over the treatment area.",
  "preparation": "No special preparation is normally required. Patients may be advised to wear comfortable clothing to expose the area being treated.",
  "followup": "Follow-up sessions and progress evaluation are recommended to optimize therapy outcomes.",
  "indication": [
    "Muscle pain",
    "Joint stiffness",
    "Tendon irritation",
    "Soft tissue injury",
    "Inflammation reduction"
  ],
  "possibleComplication": "Temporary mild warmth at the treatment site may occur.",
  "provider": {
    "@type": "MedicalClinic",
    "name": "RamaCare Polyclinic – Physiotherapy Department",
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
    `,
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
      <FAQSection content={content?.faq}
       />
      <BookConsultation content={content?.bookConsultation} />
    </Layout>
  );
}
