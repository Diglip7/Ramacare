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


export default function PCOSTreatmentPage() {
  const categoryName = 'Ayurveda';
  const subcategoryName = 'PCOS Treatment';

  // Get content from data file
  const content = getSubcategoryContent('ayurveda-dubai', 'pcos-treatment');

  return (
    <Layout>
      <Head>
  <title key="title">Ayurvedic PCOS Treatment in Dubai | Hormone Balance Naturally</title>
  <meta name="description" content="Manage PCOS naturally in Dubai with Ayurvedic therapies, Panchakarma detox, herbal remedies, diet, and lifestyle guidance for hormonal balance and fertility support." key="description" />
  <meta name="keywords" content="Ayurvedic PCOS treatment Dubai, PCOS management Dubai, Hormone balance Dubai, Panchakarma for PCOS Dubai, Herbal PCOS remedies Dubai, Women’s Health Dubai, PCOS diet and lifestyle in Dubai, Ayurvedic gynecology Dubai, Fertility support Dubai, PCOS therapy Dubai, DHA licensed Ayurvedic doctor in Dubai, Holistic PCOS treatment Dubai" />
   
   <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: `
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalCondition",
      "@id": "https://ramacarepolyclinic.ae/services/pcos-treatment-dubai/#condition",
      "name": "Polycystic Ovary Syndrome (PCOS)",
      "alternateName": "PCOS",
      "url": "https://ramacarepolyclinic.ae/services/pcos-treatment-dubai/",
      "description": "PCOS (Polycystic Ovary Syndrome) is a hormonal disorder common in women of reproductive age that can cause irregular periods, fertility issues, weight gain, acne, and hormonal imbalance.",
      "possibleTreatment": {
        "@type": "MedicalTherapy",
        "name": "PCOS Treatment",
        "description": "Personalized clinical and lifestyle based PCOS treatment at RamaCare Polyclinic in Dubai focusing on hormone balance, metabolic support, and symptomatic relief."
      }
    },
    {
      "@type": "MedicalProcedure",
      "@id": "https://ramacarepolyclinic.ae/services/pcos-treatment-dubai/#procedure",
      "name": "PCOS Treatment in Dubai",
      "alternateName": "Polycystic Ovary Syndrome Treatment",
      "url": "https://ramacarepolyclinic.ae/services/pcos-treatment-dubai/",
      "mainEntityOfPage": "https://ramacarepolyclinic.ae/services/pcos-treatment-dubai/",
      "description": "Comprehensive PCOS treatment in Dubai at RamaCare Polyclinic combining medical evaluation, hormonal assessment, lifestyle guidance, and tailored therapy by experienced healthcare professionals.",
      "procedureType": "Medical management and supportive therapy",
      "howPerformed": "PCOS treatment begins with hormonal and metabolic evaluation, followed by personalized medical and lifestyle therapy, including diet modification, herbal support (where appropriate), and clinical monitoring.",
      "preparation": "Initial consultation involving hormone level testing, ultrasound scans, and medical history assessment is conducted prior to treatment planning.",
      "followup": "Regular follow-up appointments, monitoring of hormone levels, metabolic tracking, and adjustment of the therapy plan are recommended to ensure optimal care.",
      "indication": [
        "Irregular menstruation",
        "Hormonal imbalance",
        "Fertility difficulties",
        "Acne or weight gain related to PCOS"
      ],
      "provider": {
        "@type": "MedicalClinic",
        "name": "RamaCare Polyclinic",
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

