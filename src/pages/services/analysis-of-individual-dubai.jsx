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


export default function AnalysisOfIndividualTreatmentPage() {
  const categoryName = 'Ayurveda';
  const subcategoryName = 'Analysis-Of-Individual';

  // Get content from data file
  const content = getSubcategoryContent('ayurveda-dubai', 'analysis-of-individual');

  return (
    <Layout>
      <Head>
  <title key="title">Individual Analysis in Dubai | Ayurvedic Health Assessment</title>
  <meta name="description" content="Get a personalized analysis of your health in Dubai. Ayurvedic experts assess your dosha, lifestyle, and body constitution to create natural wellness plans." key="description" />
  <meta name="keywords" content="Analysis of the individual Dubai, Ayurvedic body analysis Dubai, Dosha assessment Dubai, Personalized Ayurveda Dubai, Ayurvedic consultation in Dubai, Health evaluation in Dubai, Holistic wellness Dubai, Ayurvedic lifestyle guidance, Natural treatment Dubai, Ayurveda expert in Dubai, Individual health assessment, Traditional Ayurveda Dubai" />
  
    <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: `
{
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  "@id": "https://ramacarepolyclinic.ae/services/analysis-of-individual-dubai/#procedure",
  "name": "Individual Health Analysis in Dubai",
  "alternateName": "Comprehensive Health Assessment",
  "url": "https://ramacarepolyclinic.ae/services/analysis-of-individual-dubai/",
  "mainEntityOfPage": "https://ramacarepolyclinic.ae/services/analysis-of-individual-dubai/",
  "description": "Individual Health Analysis in Dubai at RamaCare Polyclinic provides a thorough and personalized examination of your overall health using advanced diagnostics, expert clinical evaluations, and lifestyle assessments to identify health needs and risks early.",
  "procedureType": "Health assessment and diagnostic evaluation",
  "bodyLocation": "Whole body",
  "howPerformed": "The analysis starts with a detailed consultation about medical history and lifestyle, followed by diagnostic tests, physical assessment, and lifestyle evaluation. Results are reviewed to create a personalized wellness and treatment plan.",
  "preparation": "Patients may need to undergo fasting prior to certain tests. Instructions are provided before the appointment.",
  "followup": "Results are explained in detail with tailored recommendations and a follow-up plan for monitoring and ongoing care.",
  "indication": [
    "Preventive healthcare evaluation",
    "Chronic condition risk assessment",
    "Lifestyle and nutritional assessment",
    "Overall health optimisation"
  ],
  "provider": {
    "@type": "MedicalClinic",
    "name": "RamaCare Polyclinic - Comprehensive Care Department",
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
    <FAQSection content={content?.faq} />
    <BookConsultation content={content?.bookConsultation} />
  </Layout>
  );
}

