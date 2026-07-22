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


export default function AyurvedicDietPlanPage() {
  const categoryName = 'Ayurveda';
  const subcategoryName = 'Ayurvedic Diet Plan';

  // Get content from data file
  const content = getSubcategoryContent('ayurveda-dubai', 'ayurvedic-diet-plan');

  return (
    <Layout>
      <Head>
  <title key="title">Ayurvedic Diet Plan in Dubai | Personalized Meal Guidance</title>
  <meta name="description" content="Follow a personalized Ayurvedic diet plan in Dubai to balance your doshas, support digestion, boost immunity, and maintain a healthy weight naturally and safely." key="description" />
  <meta name="keywords" content="Ayurvedic diet plan Dubai, Dosha-based diet Dubai, Ayurvedic meal plan Dubai, Personalized diet plan Dubai, Ayurvedic nutrition Dubai, Weight Management Ayurveda Dubai, Digestive Health Ayurveda Dubai, Immunity-boosting diet in Dubai, Healthy eating Ayurveda Dubai, Ayurveda lifestyle Dubai, Herbal diet recommendations in Dubai, Ayurvedic food types in Dubai" />
  
   <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: `
{
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  "@id": "https://ramacarepolyclinic.ae/services/ayurvedic-diet-plan-dubai/#procedure",
  "name": "Ayurvedic Diet Plan in Dubai",
  "alternateName": "Personalized Ayurvedic Nutrition Plan",
  "url": "https://ramacarepolyclinic.ae/services/ayurvedic-diet-plan-dubai/",
  "mainEntityOfPage": "https://ramacarepolyclinic.ae/services/ayurvedic-diet-plan-dubai/",
  "description": "Ayurvedic Diet Plan in Dubai at RamaCare Polyclinic offers personalized nutrition guidance based on Ayurvedic principles to support wellness, balance body constitution, improve digestion and promote holistic health.",
  "procedureType": "Therapeutic dietary consultation",
  "bodyLocation": "Whole body",
  "howPerformed": "The treatment includes an Ayurvedic consultation to assess body constitution (dosha), followed by personalized diet recommendations using traditional Ayurvedic nutrition principles tailored to your health goals.",
  "preparation": "Patients are advised to prepare their current diet history and details of lifestyle habits before the consultation.",
  "followup": "Regular monitoring and follow-up consultations are recommended to adjust diet plans, assess progress and adapt nutritional recommendations.",
  "indication": [
    "Digestive imbalance",
    "Weight management",
    "Overall wellness",
    "Stress and metabolic support"
  ],
  "possibleComplication": "No serious complications; some initial adjustment to dietary changes may occur.",
  "provider": {
    "@type": "MedicalClinic",
    "name": "RamaCare Polyclinic – Ayurvedic & Wellness Department",
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
        hero={content?.hero}/>
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

