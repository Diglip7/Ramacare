import Layout from '../../../components/Layout';
import Head from "next/head";
import TreatmentHero from '../../../components/TreatmentHero';
import QuickNavigation from '../../../components/QuickNavigation';
// import CertificationsSection from '../../../components/CertificationsSection';
import TreatmentOverview from '../../../components/TreatmentOverview';
import HealingJourney from '../../../components/HealingJourney';
import TreatmentBenefits from '../../../components/TreatmentBenefits';
import ServiceExtrasSection from '../../../components/ServiceExtrasSection';
import SkinTreatmentAdditionalContent from '../../../components/SkinTreatmentAdditionalContent';
import PatientTestimonials from '../../../components/VideoTestimonials';
import DoctorsSection from '../../../components/DoctorsSection';
// import PricingPackages from '../../../components/PricingPackages';
import PaymentInsurance from '../../../components/PaymentInsurance';
import FAQSection from '../../../components/Faq';
import BookConsultation from '../../../components/BookConsultation';
import { getSubcategoryContent } from '../../data/subcategoryContent';


export default function BotoxHyperhidrosisPage() {
  const categoryName = 'Aesthetic Dermatology';
  const subcategoryName = 'Botox Hyperhidrosis';

  // Get content from data file - nested path
  const content = getSubcategoryContent('aesthetic-dermatology-dubai', 'skin-treatment/botox-hyperhidrosis');

  const navItems = [
    { id: 'treatment-info', label: 'Treatment Info' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'benefits', label: 'Benefits' },
    { id: 'recovery-aftercare', label: 'Recovery & Aftercare' },
    { id: 'why-choose-ramacare', label: 'Why Choose Us' },
    { id: 'when-to-consider', label: 'Good Candidate' },
    { id: 'our-doctors', label: 'Our Doctors' },
    { id: 'faq', label: 'FAQ' },
    { id: 'book-now', label: 'Book Now' }
  ];

  return (
    <Layout>
        <Head>
  <title key="title">Botox Hyperhidrosis in Dubai for Excessive Sweating</title>
  <meta name="description" content="Botox hyperhidrosis in Dubai helps manage excessive sweating safely by reducing underarm, palm, and foot sweating under expert medical care." key="description" />
  <meta name="keywords" content="Botox hyperhidrosis in Dubai, Excessive sweating treatment Dubai, Hyperhidrosis treatment Dubai, Botox for sweating Dubai, Underarm sweating treatment, Palmar hyperhidrosis treatment, Non-surgical sweating control, Medical hyperhidrosis care, Sweat reduction treatment Dubai" />
  
  <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "MedicalCondition",
          "@id": "https://ramacarepolyclinic.ae/services/botox-hyperhidrosis-dubai/#condition",
          "name": "Hyperhidrosis (Excessive Sweating)",
          "alternateName": "Excessive Sweating Disorder",
          "url": "https://ramacarepolyclinic.ae/services/botox-hyperhidrosis-dubai/",
          "description": "Hyperhidrosis is a medical condition characterized by excessive sweating that can affect the underarms, palms, feet, and other body areas, often beyond what is required for normal thermoregulation, impacting daily comfort and confidence.",
          "possibleTreatment": {
            "@type": "MedicalTherapy",
            "name": "Botox (Botulinum Toxin) Therapy for Hyperhidrosis",
            "description": "Botox therapy for hyperhidrosis involves targeted injections of botulinum toxin into affected areas to temporarily block the nerve signals that stimulate excessive sweat gland activity, reducing sweating for several months."
          }
        },
        {
          "@type": "MedicalProcedure",
          "@id": "https://ramacarepolyclinic.ae/services/botox-hyperhidrosis-dubai/#procedure",
          "name": "Botox Hyperhidrosis Treatment in Dubai",
          "alternateName": "Botulinum Toxin Injections for Excessive Sweating",
          "url": "https://ramacarepolyclinic.ae/services/botox-hyperhidrosis-dubai/",
          "mainEntityOfPage": "https://ramacarepolyclinic.ae/services/botox-hyperhidrosis-dubai/",
          "description": "Botox Hyperhidrosis treatment in Dubai at RamaCare Polyclinic is a minimally invasive medical procedure that uses botulinum toxin injections to reduce excessive sweating in targeted areas such as the underarms, palms, or soles of the feet.",
          "procedureType": "Minimally invasive medical injection therapy",
          "howPerformed": "During the procedure, trained clinicians administer precise injections of botulinum toxin into the sweat gland–rich areas. The toxin blocks nerve signals to sweat glands, significantly reducing excessive sweating.",
          "preparation": "Patients are advised to arrive with clean, dry skin and provide a full medical history including any medications or previous treatments. Avoidance of certain blood-thinning medications or supplements beforehand may be recommended.",
          "followup": "Follow-up sessions may be scheduled to evaluate effectiveness and determine retreatment intervals, as results typically last several months.",
          "indication": [
            "Excessive underarm sweating (axillary hyperhidrosis)",
            "Excessive palm sweating",
            "Excessive foot sweating",
            "Sweat-related discomfort impacting daily activities"
          ],
          "provider": {
            "@type": "MedicalClinic",
            "name": "RamaCare Polyclinic – Aesthetic & Medical Care",
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
      <ServiceExtrasSection aftercareContent={content?.aftercareContent} whyChooseContent={content?.whyChooseContent} />
      <SkinTreatmentAdditionalContent content={content} />
       <PatientTestimonials content={content?.testimonials} />
       <DoctorsSection content={content?.doctors} />
    
    <PaymentInsurance content={content?.paymentInsurance} />
      <FAQSection content={content?.faq} />
      <BookConsultation content={content?.bookConsultation} />
    </Layout>
  );
}
