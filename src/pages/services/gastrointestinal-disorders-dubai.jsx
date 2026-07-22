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


export default function GastrointestinalDisordersPage() {
  const categoryName = 'General Physician';
  const subcategoryName = 'Gastrointestinal Disorders';

  // Get content from data file
  const content = getSubcategoryContent('general-physician-dubai', 'gastrointestinal-disorders');

  return (
    <Layout>
      <Head>
  <title key="title">Gastrointestinal Disorders Treatment in Dubai Care</title>
  <meta name="description" content="Gastrointestinal disorders treatment in Dubai offers expert care for acidity, IBS, constipation, ulcers, and digestive issues with accurate diagnosis and guidance." key="description" />
  <meta name="keywords" content="Gastrointestinal disorders treatment in Dubai, Digestive disorders treatment in Dubai, Stomach problem treatment in Dubai, IBS treatment Dubai, Acidity and gas treatment in Dubai, Gut Health Clinic Dubai, Digestive health care Dubai, Gastrointestinal care Dubai, Ayurvedic digestive treatment in Dubai, Chronic digestive disorder treatment" />
  
  <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "MedicalCondition",
          "@id": "https://ramacarepolyclinic.ae/services/gastrointestinal-disorders-dubai/#condition",
          "name": "Gastrointestinal Disorders",
          "alternateName": "GI Disorders",
          "url": "https://ramacarepolyclinic.ae/services/gastrointestinal-disorders-dubai/",
          "description": "Gastrointestinal disorders are conditions that affect the digestive tract, including symptoms like abdominal pain, bloating, indigestion, heartburn, constipation, diarrhea and other related digestive dysfunctions.",
          "possibleTreatment": {
            "@type": "MedicalTherapy",
            "name": "Gastrointestinal Disorder Treatment",
            "description": "Comprehensive assessment and treatment for gastrointestinal issues at RamaCare Polyclinic in Dubai involving medical evaluation, diagnostic procedures, lifestyle support and therapeutic interventions."
          }
        },
        {
          "@type": "MedicalProcedure",
          "@id": "https://ramacarepolyclinic.ae/services/gastrointestinal-disorders-dubai/#procedure",
          "name": "Gastrointestinal Disorders Treatment in Dubai",
          "alternateName": "GI Care & Digestive Health Treatment",
          "url": "https://ramacarepolyclinic.ae/services/gastrointestinal-disorders-dubai/",
          "mainEntityOfPage": "https://ramacarepolyclinic.ae/services/gastrointestinal-disorders-dubai/",
          "description": "Gastrointestinal disorders treatment in Dubai at RamaCare Polyclinic provides comprehensive digestive health care, evaluation, and management for conditions such as indigestion, IBS, gastritis, bloating and related symptoms by experienced clinicians.",
          "procedureType": "Diagnostic and therapeutic gastrointestinal care",
          "howPerformed": "Treatment begins with detailed history, clinical assessment, and appropriate diagnostic testing including imaging and lab work. Personalized treatment plans may include dietary advice, medical therapy, lifestyle modification and follow-up support.",
          "preparation": "Patients may be advised to fast before certain diagnostic tests and bring a record of symptoms and medical history.",
          "followup": "Ongoing monitoring and follow-up visits are recommended to assess improvement and adjust therapy as required.",
          "indication": [
            "Abdominal pain",
            "Indigestion",
            "Bloating and gas",
            "Heartburn",
            "Constipation or diarrhea"
          ],
          "provider": {
            "@type": "MedicalClinic",
            "name": "RamaCare Polyclinic – Gastroenterology & Wellness",
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
      <FAQSection content={content?.faq} />
      <BookConsultation content={content?.bookConsultation} />
    </Layout>
  );
}
