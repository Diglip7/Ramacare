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
import ContentReviewBadge from '../../../components/ContentReviewBadge';
import { getSubcategoryContent } from '../../data/subcategoryContent';


export default function HairLossPage() {
  const categoryName = 'Aesthetic Dermatology';
  const subcategoryName = 'Hair Loss Treatment';

  // Get content from data file - nested path
  const content = getSubcategoryContent('aesthetic-dermatology-dubai', 'hair-treatment/hair-loss');

  return (
    <Layout>
      <Head>
  <title key="title">Hair Loss in Dubai Diagnosis and Treatment by Specialists</title>
  <meta name="description" content="Hair loss in Dubai is assessed and treated by specialists using safe medical solutions to reduce hair fall, support regrowth, and improve scalp health." key="description" />
  <meta name="keywords" content="Hair loss in Dubai, Hair loss treatment Dubai, Hair fall treatment Dubai, Hair thinning solutions, Medical hair loss care, Hair regrowth treatment Dubai, Scalp health treatment, Hair loss diagnosis Dubai, Non-surgical hair treatment, Professional hair care Dubai" />
  
  <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "MedicalCondition",
          "@id": "https://ramacarepolyclinic.ae/services/hair-loss-dubai/#condition",
          "name": "Hair Loss, Thinning Hair & Scalp Health Concerns",
          "alternateName": "Androgenic Alopecia, Telogen Effluvium, Diffuse Thinning",
          "url": "https://ramacarepolyclinic.ae/services/hair-loss-dubai/",
          "description": "Hair loss and thinning hair include conditions such as androgenic alopecia, diffuse hair thinning, stress‑related shedding, and other patterns of reduced hair density that impact scalp appearance and self‑confidence.",
          "possibleTreatment": {
            "@type": "MedicalTherapy",
            "name": "Hair Loss Management Therapy",
            "description": "Comprehensive hair loss therapy may involve clinical assessment, topical and injectable treatments, PRP (Platelet‑Rich Plasma), mesotherapy, nutrient supplementation, and personalized scalp care protocols to support hair regrowth and reduce shedding."
          }
        },
        {
          "@type": "MedicalProcedure",
          "@id": "https://ramacarepolyclinic.ae/services/hair-loss-dubai/#procedure",
          "name": "Hair Loss Treatment in Dubai",
          "alternateName": "Hair Regeneration & Hair Thinning Management",
          "url": "https://ramacarepolyclinic.ae/services/hair-loss-dubai/",
          "mainEntityOfPage": "https://ramacarepolyclinic.ae/services/hair-loss-dubai/",
          "description": "Hair loss treatment at RamaCare Polyclinic in Dubai offers a personalized approach to diagnosing and managing hair thinning, shedding, and early alopecia using advanced clinical techniques tailored to individual scalp and hair conditions.",
          "procedureType": "Medical and aesthetic dermatologic procedure",
          "howPerformed": "After a detailed scalp and hair assessment, clinicians may recommend targeted therapies such as topical solutions (e.g., minoxidil), injectables, PRP therapy, mesotherapy, nutritional support, and lifestyle guidance. Treatment plans are customized based on the underlying cause and severity of hair loss.",
          "preparation": "Patients should provide a full medical history, current medication list, and any previous hair loss treatments. Avoiding harsh chemical or heat styling before the assessment may help improve diagnostic accuracy.",
          "followup": "Follow‑up appointments monitor progress, adjust treatment protocols, and determine any need for additional sessions to support hair regeneration and long‑term scalp health.",
          "indication": [
            "Diffuse hair thinning",
            "Androgenic hair loss (pattern baldness)",
            "Stress‑related shedding (telogen effluvium)",
            "Patchy hair loss patterns",
            "Weak, brittle hair"
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
      <ContentReviewBadge doctorName="Dr. Sahar Zomorrodi" pageSlug="hair-loss-dubai" />
      <FAQSection content={content?.faq} />
      <BookConsultation content={content?.bookConsultation} />
    </Layout>
  );
}
