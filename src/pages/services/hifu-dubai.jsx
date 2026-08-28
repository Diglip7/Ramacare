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
import SkinTreatmentAdditionalContent from '../../../components/SkinTreatmentAdditionalContent';
import ServiceExtrasSection from '../../../components/ServiceExtrasSection';
import { getSubcategoryContent } from '../../data/subcategoryContent';


export default function HIFUPage() {
  const categoryName = 'Aesthetic Dermatology';
  const subcategoryName = 'HIFU';

  // Get content from data file - nested path
  const content = getSubcategoryContent('aesthetic-dermatology-dubai', 'skin-treatment/hifu');

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
  <title key="title">HIFU in Dubai for Non-Surgical Skin Lifting Treatment</title>
  <meta name="description" content="HIFU in Dubai helps lift and tighten sagging skin using focused ultrasound technology under expert medical supervision for natural-looking results." key="description" />
  <meta name="keywords" content="HIFU in Dubai, HIFU treatment Dubai, Non-surgical skin tightening Dubai, HIFU face lifting Dubai, Skin lifting treatment Dubai, Anti-aging HIFU treatment, Facial skin tightening Dubai, Ultrasound skin therapy, Aesthetic skin care Dubai" />
  
  <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "MedicalCondition",
          "@id": "https://ramacarepolyclinic.ae/services/hifu-dubai/#condition",
          "name": "Facial Skin Laxity and Aging Changes",
          "alternateName": "Loose Skin & Loss of Elasticity",
          "url": "https://ramacarepolyclinic.ae/services/hifu-dubai/",
          "description": "Facial skin laxity and aging changes refer to loose or sagging skin, reduced elasticity, diminished facial contour, and age-related signs that often occur due to collagen loss and natural aging processes.",
          "possibleTreatment": {
            "@type": "MedicalTherapy",
            "name": "High-Intensity Focused Ultrasound (HIFU) Therapy",
            "description": "HIFU is a non-invasive skin tightening therapy using focused ultrasound energy to stimulate deep collagen formation and tissue lifting, improving skin firmness and contour without surgery."
          }
        },
        {
          "@type": "MedicalProcedure",
          "@id": "https://ramacarepolyclinic.ae/services/hifu-dubai/#procedure",
          "name": "HIFU Skin Tightening in Dubai",
          "alternateName": "Non-Surgical Ultrasound Skin Lift",
          "url": "https://ramacarepolyclinic.ae/services/hifu-dubai/",
          "mainEntityOfPage": "https://ramacarepolyclinic.ae/services/hifu-dubai/",
          "description": "HIFU Skin Tightening in Dubai at RamaCare Polyclinic is a non-surgical aesthetic procedure that uses high-intensity focused ultrasound energy to target deep skin layers, stimulate collagen production, and lift and tighten sagging skin.",
          "procedureType": "Non-invasive aesthetic dermatology procedure",
          "howPerformed": "The clinician uses a specialized HIFU device to deliver focused ultrasound energy to specific layers beneath the skin’s surface. This stimulates collagen remodeling and tissue tightening over following weeks.",
          "preparation": "Patients are advised to avoid heavy makeup on the day of treatment and disclose their medical history. No significant pre-treatment preparation is typically required.",
          "followup": "Follow-up sessions may be recommended depending on skin laxity severity and treatment goals, along with clinician-guided aftercare for optimal results.",
          "indication": [
            "Loose or sagging skin",
            "Reduced skin elasticity",
            "Jowling or loss of jawline definition",
            "Fine lines and aging signs",
            "Desire for non-surgical lifting"
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
      <SkinTreatmentAdditionalContent content={content} />
      <ServiceExtrasSection aftercareContent={content?.aftercareContent} />
       <PatientTestimonials content={content?.testimonials} />
       <DoctorsSection content={content?.doctors} />
    
    <PaymentInsurance content={content?.paymentInsurance} />
      <ContentReviewBadge doctorName="Sonita Sinaga" pageSlug="hifu-dubai" />
      <FAQSection content={content?.faq} />
      <BookConsultation content={content?.bookConsultation} />
    </Layout>
  );
}
