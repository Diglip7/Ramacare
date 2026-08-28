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

export default function TreatmentofAcuteInfectionsPage() {
  const categoryName = 'General Physician';
  const subcategoryName = 'Treatment of Acute Infections';

  // Get content from data file
  const content = getSubcategoryContent('general-physician-dubai', 'treatment-of-acute-infections');

  return (
    <Layout>
      <Head>
        <title key="title">Treatment of Acute Infections in Dubai | Expert Medical Care</title>
        <meta name="description" content="Get professional treatment for acute infections in Dubai. Experienced doctors provide fast, safe care for bacterial, viral, and other infections with proper follow-up." key="description" />
        <meta name="keywords" content="Acute infection treatment in Dubai, Bacterial infection care in Dubai, Viral infection treatment in Dubai, Infectious disease management in Dubai, Dubai urgent infection care, Fever and infection treatment in Dubai, Rapid infection relief in Dubai, Infection diagnosis in Dubai, Antibiotic therapy in Dubai, Dubai infection clinic, Medical treatment for infections in Dubai, Emergency infection care in Dubai" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "MedicalCondition",
                  "@id": "https://ramacarepolyclinic.ae/services/treatment-of-acute-infections-dubai/#condition",
                  "name": "Acute Infections",
                  "alternateName": "Short-Term Infectious Conditions",
                  "url": "https://ramacarepolyclinic.ae/services/treatment-of-acute-infections-dubai/",
                  "description": "Acute infections are rapid-onset infections caused by bacteria, viruses, or other pathogens that lead to symptoms such as fever, pain, inflammation, and systemic illness.",
                  "possibleTreatment": {
                    "@type": "MedicalTherapy",
                    "name": "Acute Infection Treatment",
                    "description": "Clinical evaluation, pathogen-specific therapy, antibiotics (when indicated), supportive care, and monitoring provided by trained clinicians."
                  }
                },
                {
                  "@type": "MedicalProcedure",
                  "@id": "https://ramacarepolyclinic.ae/services/treatment-of-acute-infections-dubai/#procedure",
                  "name": "Treatment of Acute Infections in Dubai",
                  "alternateName": "Acute Infection Care & Management",
                  "url": "https://ramacarepolyclinic.ae/services/treatment-of-acute-infections-dubai/",
                  "mainEntityOfPage": "https://ramacarepolyclinic.ae/services/treatment-of-acute-infections-dubai/",
                  "description": "Professional diagnosis and treatment for acute infections in Dubai including clinical assessment, targeted therapy, supportive care, and follow-up to ensure recovery.",
                  "procedureType": "Medical evaluation and therapy",
                  "howPerformed": "Treatment involves history taking, physical examination, diagnostic testing where indicated, and administration of appropriate medications or supportive measures.",
                  "preparation": "Patients should share detailed symptom history and any recent infection exposures with the clinician.",
                  "followup": "Ongoing monitoring is recommended to assess recovery and response to treatment.",
                  "indication": [
                    "Fever and systemic illness",
                    "Respiratory infections",
                    "Urinary tract infections",
                    "Skin and soft tissue infections",
                    "Gastrointestinal infections"
                  ],
                  "provider": {
                    "@type": "MedicalClinic",
                    "name": "RamaCare Polyclinic – Acute Infection Care",
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
      <ContentReviewBadge doctorName="Dr. Sahar Zomorrodi" pageSlug="treatment-of-acute-infections-dubai" />
      <FAQSection content={content?.faq} />
      <BookConsultation content={content?.bookConsultation} />
    </Layout>
  );
}
