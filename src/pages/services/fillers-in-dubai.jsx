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


export default function FillersPage() {
  const categoryName = 'Aesthetic Dermatology';
  const subcategoryName = 'Fillers';

  // Get content from data file - nested path
  const content = getSubcategoryContent('aesthetic-dermatology-dubai', 'skin-treatment/fillers');

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
  <title key="title">Fillers in Dubai for Natural Facial Volume and Contour</title>
  <meta name="description" content="Fillers in Dubai help restore facial volume, smooth lines, and enhance contours using safe, doctor-administered treatments for natural-looking results." key="description" />
  <meta name="keywords" content="Fillers in Dubai, Dermal fillers Dubai, Facial fillers treatment, Anti-aging fillers Dubai, Lip fillers Dubai, Cheek fillers Dubai, Wrinkle reduction treatment, Non-surgical facial enhancement, Hyaluronic acid fillers, Aesthetic injectables Dubai" />
  
  <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "MedicalCondition",
          "@id": "https://ramacarepolyclinic.ae/services/fillers-in-dubai/#condition",
          "name": "Facial Volume Loss and Aging Concerns",
          "alternateName": "Facial Lines, Wrinkles & Loss of Volume",
          "url": "https://ramacarepolyclinic.ae/services/fillers-in-dubai/",
          "description": "Facial volume loss and aging concerns include reduced facial fullness, fine lines, deeper folds, loss of youthful contours, and changes in skin elasticity often seen with aging or environmental effects.",
          "possibleTreatment": {
            "@type": "MedicalTherapy",
            "name": "Dermal Filler Therapy",
            "description": "Aesthetic injectable therapy using hyaluronic acid or other biocompatible fillers to restore facial volume, soften wrinkles, and enhance contours for a more youthful appearance."
          }
        },
        {
          "@type": "MedicalProcedure",
          "@id": "https://ramacarepolyclinic.ae/services/fillers-in-dubai/#procedure",
          "name": "Facial Fillers Treatment in Dubai",
          "alternateName": "Dermal Filler Injections",
          "url": "https://ramacarepolyclinic.ae/services/fillers-in-dubai/",
          "mainEntityOfPage": "https://ramacarepolyclinic.ae/services/fillers-in-dubai/",
          "description": "Facial fillers treatment in Dubai at RamaCare Polyclinic is a minimally invasive aesthetic procedure that uses injectable dermal fillers to restore volume, reduce lines, and enhance facial contours.",
          "procedureType": "Minimally invasive aesthetic injection therapy",
          "howPerformed": "Performed by trained clinicians, the treatment involves precise injections of quality dermal filler products into targeted facial areas such as cheeks, lips, nasolabial folds, and under-eye regions to add volume and smooth lines.",
          "preparation": "Patients should attend with clean skin and disclose their medical history, any prior injectable treatments, and medication/supplement use. Avoiding blood-thinning medications or supplements before the session may be advised.",
          "followup": "Follow-up visits may be recommended to assess results and schedule maintenance sessions based on individual goals and treatment outcomes.",
          "indication": [
            "Loss of facial volume",
            "Fine lines and wrinkles",
            "Flattened or hollowed cheeks",
            "Thin lips or uneven lip contour",
            "Under-eye hollows"
          ],
          "provider": {
            "@type": "MedicalClinic",
            "name": "RamaCare Polyclinic – Aesthetic & Dermatology Care",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Jumeirah Terrace Building, Ground Floor",
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
      <SkinTreatmentAdditionalContent content={content} />
      <ServiceExtrasSection aftercareContent={content?.aftercareContent} />
       <PatientTestimonials content={content?.testimonials} />
       <DoctorsSection content={content?.doctors} />
    
    <PaymentInsurance content={content?.paymentInsurance} />
      <FAQSection content={content?.faq} />
      <BookConsultation content={content?.bookConsultation} />
    </Layout>
  );
}
