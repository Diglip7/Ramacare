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
import TreatmentAreasAndCare from '../../../components/TreatmentAreasAndCare';
import DetailedServiceContent from '../../../components/DetailedServiceContent';
import ServiceExtrasSection from '../../../components/ServiceExtrasSection';
import { getSubcategoryContent } from '../../data/subcategoryContent';


export default function ElectrolysisPage() {
  const categoryName = 'Aesthetic Dermatology';
  const subcategoryName = 'Electrolysis';

  // Get content from data file - nested path
  const content = getSubcategoryContent('aesthetic-dermatology-dubai', 'skin-treatment/electrolysis');

  const navItems = [
    { id: 'treatment-info', label: 'Treatment Info' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'benefits', label: 'Benefits' },
    { id: 'treatment-areas-care', label: 'Areas Treated' },
    { id: 'recovery-aftercare', label: 'Aftercare' },
    { id: 'why-choose-ramacare', label: 'Why Choose Us' },
    { id: 'testimonials', label: 'Success Stories' },
    { id: 'our-doctors', label: 'Our Doctors' },
    { id: 'faq', label: 'FAQ' },
    { id: 'book-now', label: 'Book Now' },
  ];

  return (
    <Layout>
      <Head>
  <title key="title">Electrolysis in Dubai for Permanent Hair Removal Treatment</title>
  <meta name="description" content="Electrolysis in Dubai offers safe, medical-grade permanent hair removal by trained professionals, suitable for all skin types and areas with lasting results." key="description" />
  <meta name="keywords" content="Electrolysis in Dubai, Permanent hair removal in Dubai, Electrolysis hair removal, Medical hair removal Dubai, Facial hair removal Dubai, Body hair removal treatment, Safe electrolysis treatment, Hair removal for all skin types, Professional electrolysis in Dubai" />
  
  <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "MedicalCondition",
          "@id": "https://ramacarepolyclinic.ae/services/electrolysis-dubai/#condition",
          "name": "Excess or Unwanted Hair Growth",
          "alternateName": "Hirsutism & Unwanted Hair",
          "url": "https://ramacarepolyclinic.ae/services/electrolysis-dubai/",
          "description": "Excess or unwanted hair growth refers to coarse or persistent hair on areas of the face or body where it is undesirable, often caused by hormonal factors, genetics, or other underlying conditions. This can impact confidence and aesthetic appearance.",
          "possibleTreatment": {
            "@type": "MedicalTherapy",
            "name": "Electrolysis Hair Removal Therapy",
            "description": "A hair removal therapy that uses controlled electrical energy to permanently destroy hair follicles, preventing future hair growth and improving skin smoothness."
          }
        },
        {
          "@type": "MedicalProcedure",
          "@id": "https://ramacarepolyclinic.ae/services/electrolysis-dubai/#procedure",
          "name": "Electrolysis Hair Removal in Dubai",
          "alternateName": "Permanent Hair Removal Treatment",
          "url": "https://ramacarepolyclinic.ae/services/electrolysis-dubai/",
          "mainEntityOfPage": "https://ramacarepolyclinic.ae/services/electrolysis-dubai/",
          "description": "Electrolysis hair removal in Dubai at RamaCare Polyclinic is a precise, minimally invasive procedure that uses an electrical current to ablate individual hair follicles, achieving long‑term reduction or permanent removal of unwanted hair.",
          "procedureType": "Minimally invasive hair removal therapy",
          "howPerformed": "A trained clinician inserts a fine probe into the hair follicle and applies controlled electric current to disable the follicle’s ability to produce hair. Each follicle is treated individually for effective permanent results.",
          "preparation": "Patients should shave the treatment area prior to the session, avoid waxing/plucking for several weeks, and disclose medical history and skin sensitivities to the clinician.",
          "followup": "Multiple sessions may be advised to target all active follicles, and follow‑up appointments help monitor progress and schedule additional treatments if required.",
          "indication": [
            "Unwanted facial hair",
            "Excess body hair",
            "Hirsutism due to hormonal imbalance",
            "Persistent coarse hair",
            "Areas unsuitable for laser hair removal"
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
      <TreatmentAreasAndCare content={content?.treatmentAreasAndCare} />
      <DetailedServiceContent content={content?.detailedServiceContent} />
      <ServiceExtrasSection 
        aftercareContent={content?.aftercareContent} 
        whyChooseContent={content?.whyChooseContent} 
      />
       <PatientTestimonials content={content?.testimonials} />
       <DoctorsSection content={content?.doctors} />
    
    <PaymentInsurance content={content?.paymentInsurance} />
      <ContentReviewBadge doctorName="Sonita Sinaga" pageSlug="electrolysis-dubai" />
      <FAQSection content={content?.faq} />
      <BookConsultation content={content?.bookConsultation} />
    </Layout>
  );
}
