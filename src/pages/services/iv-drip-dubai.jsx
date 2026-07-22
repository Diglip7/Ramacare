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
import SkinTreatmentAdditionalContent from '../../../components/SkinTreatmentAdditionalContent';
import ServiceExtrasSection from '../../../components/ServiceExtrasSection';
import { getSubcategoryContent } from '../../data/subcategoryContent';


export default function IVdripPage() {
  const categoryName = 'Aesthetic Dermatology';
  const subcategoryName = 'IV Drip Therepy';

  // Get content from data file - nested path
  const content = getSubcategoryContent('aesthetic-dermatology-dubai', 'body-shaping/iv-drip');
   const navItems = [
    { id: 'treatment-info', label: 'Treatment Info' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'benefits', label: 'Benefits' },
    { id: 'when-to-consider', label: 'Ideal Candidate' },
    { id: 'recovery-aftercare', label: 'Aftercare' },
    { id: 'why-choose-ramacare', label: 'Why Us' },
    { id: 'testimonials', label: 'Success Stories' },
    { id: 'our-doctors', label: 'Our Doctors' },
    { id: 'faq', label: 'FAQ' },
    { id: 'book-now', label: 'Book Now' },
  ];

  return (
    <Layout>
      <Head>
        <title key="title">IV Drip Therapy in Dubai | RamaCare Polyclinic</title>
        <meta name="description" content="IV Drip Therapy in Dubai at RamaCare Polyclinic. Experience the benefits of IV Drip Therapy for weight loss, detoxification, and overall wellness. Book your consultation today!" key="description" />
        <meta name="keywords" content="IV Drip Therapy, weight loss, detoxification, overall wellness, RamaCare Polyclinic, Dubai" />
        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "MedicalCondition",
          "@id": "https://ramacarepolyclinic.ae/services/iv-drip-dubai/#condition",
          "name": "Dehydration, Nutrient Deficiencies, Fatigue & Low Immunity",
          "alternateName": "Hydration Imbalance, Vitamin & Mineral Deficit",
          "url": "https://ramacarepolyclinic.ae/services/iv-drip-dubai/",
          "description": "Conditions such as dehydration, low immunity, nutrient deficiencies, chronic fatigue, and stress can negatively impact energy levels and overall wellness. These issues may benefit from medically supervised IV nutrient and hydration therapy to support rapid rehydration and nutrient delivery.",
          "possibleTreatment": {
            "@type": "MedicalTherapy",
            "name": "Intravenous (IV) Drip Therapy",
            "description": "Intravenous (IV) drip therapy delivers fluids, vitamins, minerals, and antioxidants directly into the bloodstream under clinical supervision to support hydration, energy levels, immune function, and overall wellness more rapidly and effectively than oral supplementation." 
          }
        },
        {
          "@type": "MedicalProcedure",
          "@id": "https://ramacarepolyclinic.ae/services/iv-drip-dubai/#procedure",
          "name": "IV Drip Therapy in Dubai",
          "alternateName": "Intravenous Nutrient & Hydration Therapy",
          "url": "https://ramacarepolyclinic.ae/services/iv-drip-dubai/",
          "mainEntityOfPage": "https://ramacarepolyclinic.ae/services/iv-drip-dubai/",
          "description": "IV drip therapy at RamaCare Polyclinic in Dubai is a medically supervised treatment that delivers hydration, vitamins, minerals, and antioxidants directly into the bloodstream to replenish essential nutrients, improve energy, support immunity, and enhance overall wellness.",
          "procedureType": "Intravenous medical wellness procedure",
          "howPerformed": "A trained clinician conducts a health assessment and determines a personalized IV drip formula. A sterile IV line is placed into a vein to deliver fluids and nutrients directly into the bloodstream over a session typically lasting 30–45 minutes.",
          "preparation": "Patients should share a full medical history, inform clinicians of existing conditions and medications, and follow any guidance provided for optimal nutrient absorption and safety.",
          "followup": "Follow‑up care may include monitoring nutrient levels, scheduling additional IV drip sessions based on health goals and outcomes, and ongoing wellness guidance to support hydration and immune function.",
          "indication": [
            "Dehydration & rapid fluid replenishment",
            "Low energy levels & chronic fatigue",
            "Immune support & nutrient deficiencies",
            "Travel exhaustion or jet lag",
            "Support during recovery from illness or stress"
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
        hero={content?.hero}/>
    <QuickNavigation navItems={navItems} />
    <TreatmentOverview 
      subcategoryName={subcategoryName}
      content={content?.overview}/>
      <HealingJourney content={content?.healingJourney} />
      <TreatmentBenefits 
        content={content?.benefits}/>
      <SkinTreatmentAdditionalContent 
              content={{whyChooseSection: content?.whyChooseSection,
                 whenToConsider: content?.whenToConsider,}} />
      <ServiceExtrasSection aftercareContent={content?.aftercareContent} />
      <PatientTestimonials content={content?.testimonials} />
      <DoctorsSection content={content?.doctors} />
      <PaymentInsurance content={content?.paymentInsurance} />
      <FAQSection content={content?.faq} />
      <BookConsultation content={content?.bookConsultation} />
      </Layout>
  );
}
