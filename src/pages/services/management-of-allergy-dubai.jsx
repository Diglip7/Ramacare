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

export default function ManagementofAllergyPage() {
  const categoryName = 'General Physician';
  const subcategoryName = 'Management of Allergy';

  // Get content from data file
  const content = getSubcategoryContent('general-physician-dubai', 'management-of-allergy');

  return (
    <Layout>
      <Head>
        <title key="title">Management of Allergy in Dubai With Expert Medical Care</title>
        <meta name="description" content="Management of allergy in Dubai provides personalised care for skin, food, respiratory, and seasonal allergies with accurate diagnosis and long-term relief plans." key="description" />
        <meta name="keywords" content="Management of allergy in Dubai, Allergy treatment Dubai, Allergy clinic Dubai, Skin allergy treatment Dubai, Respiratory allergy treatment in Dubai, Food allergy management in Dubai, Seasonal allergy care Dubai, Chronic allergy treatment in Dubai, Allergy specialist Dubai, Allergy diagnosis and treatment in Dubai" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "MedicalCondition",
                  "@id": "https://ramacarepolyclinic.ae/services/management-of-allergy-dubai/#condition",
                  "name": "Allergic Conditions",
                  "alternateName": "Allergies",
                  "url": "https://ramacarepolyclinic.ae/services/management-of-allergy-dubai/",
                  "description": "Allergic conditions include immune system reactions to substances such as pollen, food, dust, insect bites, and medications, which can lead to symptoms such as itching, sneezing, rashes, swelling, and respiratory difficulty.",
                  "possibleTreatment": {
                    "@type": "MedicalTherapy",
                    "name": "Allergy Management Therapy",
                    "description": "Structured allergy management involving clinical evaluation, diagnostics, avoidance strategies, and guided treatment plans provided by trained healthcare professionals."
                  }
                },
                {
                  "@type": "MedicalProcedure",
                  "@id": "https://ramacarepolyclinic.ae/services/management-of-allergy-dubai/#procedure",
                  "name": "Management of Allergy in Dubai",
                  "alternateName": "Allergy Treatment",
                  "url": "https://ramacarepolyclinic.ae/services/management-of-allergy-dubai/",
                  "mainEntityOfPage": "https://ramacarepolyclinic.ae/services/management-of-allergy-dubai/",
                  "description": "Allergy management in Dubai at RamaCare Polyclinic offers comprehensive evaluation and personalized treatment plans for allergic conditions including skin allergies, food sensitivities, respiratory allergies, and more, guided by qualified clinicians.",
                  "procedureType": "Allergy evaluation and management",
                  "howPerformed": "Allergy management starts with a detailed history and clinical assessment, followed by appropriate diagnostic testing. Treatment plans may include avoidance strategies, medications, lifestyle guidance, and monitoring.",
                  "preparation": "Patients may be advised to prepare an allergy history, list of triggers, and any medication history prior to evaluation.",
                  "followup": "Follow-up visits and progress monitoring are recommended to adjust treatment plans as needed.",
                  "indication": [
                    "Skin allergies",
                    "Respiratory allergies",
                    "Food sensitivities",
                    "Seasonal allergic reactions",
                    "Environmental allergies"
                  ],
                  "provider": {
                    "@type": "MedicalClinic",
                    "name": "RamaCare Polyclinic – Allergy & General Healthcare",
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
      <ContentReviewBadge doctorName="Dr. Sahar Zomorrodi" pageSlug="management-of-allergy-dubai" />
      <FAQSection content={content?.faq} />
      <BookConsultation content={content?.bookConsultation} />
    </Layout>
  );
}
