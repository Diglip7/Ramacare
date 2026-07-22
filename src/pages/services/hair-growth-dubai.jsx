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


export default function HairGrowthPage() {
  const categoryName = 'Aesthetic Dermatology';
  const subcategoryName = 'Hair Growth Treatment';

  // Get content from data file - nested path
  const content = getSubcategoryContent('aesthetic-dermatology-dubai', 'hair-treatment/hair-growth');

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
  <title key="title">Hair Growth in Dubai with Safe Medical Treatment Options</title>
  <meta name="description" content="Hair growth in Dubai is supported through doctor-guided treatments that strengthen hair follicles, improve scalp health, and promote natural regrowth safely." key="description" />
  <meta name="keywords" content="Hair growth in Dubai, Hair growth treatment Dubai, Hair regrowth solutions, Medical hair growth therapy, Scalp stimulation treatment, Hair restoration Dubai, Non-surgical hair growth, Hair fall control in Dubai, Professional hair care Dubai" />
  
  <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "MedicalCondition",
          "@id": "https://ramacarepolyclinic.ae/services/hair-growth-dubai/#condition",
          "name": "Hair Thinning, Slow Hair Growth & Weak Scalp Conditions",
          "alternateName": "Reduced Hair Density, Weak Hair Roots & Slow Regrowth",
          "url": "https://ramacarepolyclinic.ae/services/hair-growth-dubai/",
          "description": "Hair thinning, slow hair growth, and weak scalp conditions include reduced hair density, diminished hair strength, and other issues where the natural hair growth cycle is disrupted, often due to nutritional, hormonal, stress‑related, or scalp health factors.",
          "possibleTreatment": {
            "@type": "MedicalTherapy",
            "name": "Hair Growth Treatment Therapy",
            "description": "Medically guided hair growth treatment involves personalized clinical strategies such as follicle stimulation therapies, scalp health optimization, regenerative injections, and supportive nutraceutical or lifestyle protocols to promote healthier, thicker natural hair regrowth."
          }
        },
        {
          "@type": "MedicalProcedure",
          "@id": "https://ramacarepolyclinic.ae/services/hair-growth-dubai/#procedure",
          "name": "Hair Growth Treatment in Dubai",
          "alternateName": "Hair Regrowth & Scalp Health Restoration Therapy",
          "url": "https://ramacarepolyclinic.ae/services/hair-growth-dubai/",
          "mainEntityOfPage": "https://ramacarepolyclinic.ae/services/hair-growth-dubai/",
          "description": "Hair growth treatment at RamaCare Polyclinic in Dubai is a clinically supervised, personalized program focused on activating dormant hair follicles, improving scalp health, and supporting the natural hair growth cycle for stronger, denser hair regrowth. Treatments are selected based on individual needs and long‑term goals.",
          "procedureType": "Medical and aesthetic dermatologic treatment",
          "howPerformed": "After a detailed hair and scalp assessment, tailored therapies such as follicle stimulation treatments, scalp nourishment protocols, PRP sessions, mesotherapy, and supportive guidance on diet and lifestyle are used to stimulate natural hair growth and strengthen existing hair.",
          "preparation": "Patients should provide a full medical history including past hair loss treatments, avoid harsh chemical or heat styling immediately before the consultation, and follow clinician guidance for any prerequisites.",
          "followup": "Follow‑up care involves monitoring progress, adjusting treatment plans as needed, scheduling maintenance sessions, and providing ongoing scalp care and lifestyle support to sustain results.",
          "indication": [
            "Slow hair growth or reduced hair density",
            "Hair thinning and weak hair follicles",
            "Post‑hair fall recovery",
            "Scalp health concerns",
            "Stress‑related hair growth issues"
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
