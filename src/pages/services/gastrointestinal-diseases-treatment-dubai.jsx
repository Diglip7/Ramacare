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

export default function GastrointestinalDiseasesTreatmentPage() {
  const categoryName = 'Ayurveda';
  const subcategoryName = 'Gastrointestinal Diseases Treatment';

  // Get content from data file
  const content = getSubcategoryContent('ayurveda-dubai', 'gastrointestinal-diseases-treatment');

  return (
    <Layout>
      <Head>
        <title key="title">Gastrointestinal Treatment in Dubai | Digestive Health Care</title>
        <meta name="description" content="Receive expert gastrointestinal treatment in Dubai for stomach, intestinal, and digestive issues. Personalized care, modern diagnostics, and effective solutions for lasting health." key="description" />
        <meta name="keywords" content="Gastrointestinal treatment in Dubai, Digestive health Dubai, Stomach problem treatment in Dubai, Intestinal disorders in Dubai, Gut health care Dubai, Gastroenterologist Dubai, Digestive disorder solutions Dubai, Ayurvedic digestive treatment in Dubai, Gastroscopy Dubai, Gastro prevention Dubai, DHA licensed gastro clinic in Dubai, IBS treatment Dubai" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "MedicalCondition",
                  "@id": "https://ramacarepolyclinic.ae/services/gastrointestinal-diseases-treatment-dubai/#condition",
                  "name": "Gastrointestinal Disorders and Digestive Health Conditions",
                  "alternateName": "Digestive Disorders, GI Conditions",
                  "url": "https://ramacarepolyclinic.ae/services/gastrointestinal-diseases-treatment-dubai/",
                  "description": "Gastrointestinal disorders are conditions affecting the digestive system, including the esophagus, stomach, small and large intestines. Common issues include acidity/heartburn, gastritis, irritable bowel syndrome (IBS), bloating, constipation, diarrhea and other chronic digestive symptoms. Tailored diagnosis and treatment can help restore digestive health and improve quality of life.",
                  "possibleTreatment": {
                    "@type": "MedicalTherapy",
                    "name": "Gastrointestinal Disorder Treatment",
                    "description": "Treatment for gastrointestinal conditions typically involves medical evaluation, diagnostic testing (such as labs and imaging), evidence‑based medications, dietary and lifestyle guidance, and ongoing management to relieve symptoms and support digestive health under clinical supervision."
                  }
                },
                {
                  "@type": "MedicalProcedure",
                  "@id": "https://ramacarepolyclinic.ae/services/gastrointestinal-diseases-treatment-dubai/#procedure",
                  "name": "Gastrointestinal Diseases Treatment in Dubai",
                  "alternateName": "Digestive System Care & Management",
                  "url": "https://ramacarepolyclinic.ae/services/gastrointestinal-diseases-treatment-dubai/",
                  "mainEntityOfPage": "https://ramacarepolyclinic.ae/services/gastrointestinal-diseases-treatment-dubai/",
                  "description": "Comprehensive gastrointestinal (GI) treatment at RamaCare Polyclinic in Dubai includes clinical evaluation, diagnostic testing, personalized treatment planning, prescription medications, dietary guidance and ongoing follow‑up for a wide range of digestive conditions. The approach focuses on symptom relief, correct diagnosis and long‑term digestive health support.",
                  "procedureType": "Medical treatment and management",
                  "howPerformed": "A trained clinician conducts a detailed medical consultation, evaluates symptoms and history, orders appropriate diagnostic tests (e.g., blood tests, stool analysis, imaging), and formulates a personalized treatment plan. Interventions include medical therapy, diet and lifestyle recommendations, and follow‑up monitoring to adjust treatment based on response.",
                  "preparation": "Patients should share a complete medical history, current medications and detailed symptom information before the consultation. Clinicians may advise fasting before certain tests if required, and discuss current diet, lifestyle and triggers relevant to digestive symptoms.",
                  "followup": "Follow-up care includes assessing treatment response, optimizing medications, monitoring symptoms and recommending lifestyle modifications. Additional consultations, further testing or specialist referrals may be advised for chronic or complex conditions.",
                  "indication": [
                    "Acidity and heartburn",
                    "Gastritis or stomach discomfort",
                    "Irritable bowel syndrome (IBS)",
                    "Bloating, gas and indigestion",
                    "Constipation or diarrhea",
                    "Chronic digestive symptoms requiring evaluation"
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
      <ContentReviewBadge doctorName="Dr. Shamna Keloth Meethal" pageSlug="gastrointestinal-diseases-treatment-dubai" />
      <FAQSection content={content?.faq} />
      <BookConsultation content={content?.bookConsultation} />
    </Layout>
  );
}
