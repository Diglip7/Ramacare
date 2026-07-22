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


export default function MinorInjuryCarePage() {
  const categoryName = 'General Physician';
  const subcategoryName = 'Minor Injury Care';

  // Get content from data file
  const content = getSubcategoryContent('general-physician-dubai', 'minor-injury-care');

  return (
    <Layout>
      <Head>
  <title key="title">Minor Injury Care in Dubai | Fast & Expert Medical Help</title>
  <meta name="description" content="Get expert minor injury care in Dubai for cuts, bruises, sprains, and wounds. Quick, safe treatment by experienced doctors with proper aftercare guidance." key="description" />
  <meta name="keywords" content="Minor injury care in Dubai, Emergency minor injury treatment, Cuts and bruises treatment in Dubai, Sprains and strains care in Dubai, Wound care Dubai, Accident injury treatment in Dubai, First aid clinic Dubai, Injury management Dubai, Quick medical care in Dubai, Minor trauma care in Dubai, Dubai urgent care clinic, Expert injury care in Dubai" />
  
  <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "MedicalCondition",
          "@id": "https://ramacarepolyclinic.ae/services/minor-injury-care/#condition",
          "name": "Minor Injuries",
          "alternateName": "Cuts, Sprains, Bruises & Minor Traumas",
          "url": "https://ramacarepolyclinic.ae/services/minor-injury-care/",
          "description": "Minor injuries include non-life-threatening conditions such as cuts, sprains, bruises, strains, falls, and superficial wounds that require clinical assessment and treatment.",
          "possibleTreatment": {
            "@type": "MedicalTherapy",
            "name": "Minor Injury Care Treatment",
            "description": "Evaluation and treatment of minor injuries including wound care, splinting, bandaging, pain management, and follow-up guidance by trained clinicians at RamaCare Polyclinic in Dubai."
          }
        },
        {
          "@type": "MedicalProcedure",
          "@id": "https://ramacarepolyclinic.ae/services/minor-injury-care/#procedure",
          "name": "Minor Injury Care in Dubai",
          "alternateName": "Minor Trauma & Injury Clinic",
          "url": "https://ramacarepolyclinic.ae/services/minor-injury-care/",
          "mainEntityOfPage": "https://ramacarepolyclinic.ae/services/minor-injury-care/",
          "description": "Comprehensive minor injury care services in Dubai including wound care, sprain evaluation, simple fracture support, soft tissue treatment, and personalized clinical guidance.",
          "procedureType": "Minor injury evaluation and care",
          "howPerformed": "After clinical assessment, treatment may include wound cleaning, dressing, splint/support application, pain relief recommendations, and follow-up advice.",
          "preparation": "No special preparation is needed, just share the injury history and symptoms with the clinician.",
          "followup": "Follow-up visits may be advised to assess healing and adjust care.",
          "indication": [
            "Superficial cuts and abrasions",
            "Sprains and strains",
            "Minor soft tissue injuries",
            "Bruises",
            "Simple falls"
          ],
          "provider": {
            "@type": "MedicalClinic",
            "name": "RamaCare Polyclinic – Minor Injury & General Care",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "12 Al Dhiyafah Rd - Jumeirah Terrace Building, Ground Floor, Jumeirah 1",
              "addressLocality": "Jumeirah 1",
              "addressRegion": "Dubai",
              "postalCode": "393558",
              "addressCountry": "AE"
            },
            "telephone": "+971566597878",
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
