import Layout from '../../../components/Layout';
import Head from "next/head";
import TreatmentHero from '../../../components/TreatmentHero';
import QuickNavigation from '../../../components/QuickNavigation';
// import CertificationsSection from '../../../components/CertificationsSection';
import TreatmentOverview from '../../../components/TreatmentOverview';
import HealingJourney from '../../../components/HealingJourney';
import TreatmentBenefits from '../../../components/TreatmentBenefits';
import SkinTreatmentAdditionalContent from '../../../components/SkinTreatmentAdditionalContent';
import PatientTestimonials from '../../../components/VideoTestimonials';
import DoctorsSection from '../../../components/DoctorsSection';
// import PricingPackages from '../../../components/PricingPackages';
import PaymentInsurance from '../../../components/PaymentInsurance';
import FAQSection from '../../../components/Faq';
import BookConsultation from '../../../components/BookConsultation';
import { getSubcategoryContent } from '../../data/subcategoryContent';


export default function SkinTighteningPage() {
  const categoryName = 'Aesthetic Dermatology';
  const subcategoryName = 'Skin Tightening Treatment';

  // Get content from data file - nested path
  const content = getSubcategoryContent('aesthetic-dermatology-dubai', 'skin-treatment/skin-tightening');

  const navItems = [
    { id: 'treatment-info', label: 'Treatment Info' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'benefits', label: 'Benefits' },
    { id: 'why-choose-ramacare', label: 'Why Choose Us' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'our-doctors', label: 'Our Doctors' },
    { id: 'faq', label: 'FAQ' },
    { id: 'book-now', label: 'Book Now' }
  ];

  return (
    <Layout>
        <Head>
  <title key="title">Skin Tightening Treatment in Dubai for Firmer Youthful Skin</title>
  <meta name="description" content="Skin tightening treatment in Dubai helps improve skin firmness and elasticity using safe, non-invasive technologies under expert medical supervision." key="description" />
  <meta name="keywords" content="Skin tightening treatment in Dubai, Non-surgical skin tightening in Dubai, Laser skin tightening Dubai, Facial skin tightening in Dubai, Body skin tightening in Dubai, Anti-aging skin treatment Dubai, Skin firming treatment, Skin laxity treatment Dubai, Advanced skin tightening therapy, Best skin tightening treatment in Dubai, Skin rejuvenation Dubai, Skin tightening treatment in Dubai price, Skin tightening treatment in dubai cost, Best skin tightening treatment in dubai, Skin tightening treatment in dubai for face, Laser skin tightening dubai, Skin tightening treatments for face, Best skin tightening treatments for face, Skin Laser Treatment price in Dubai" />
  
  <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "MedicalCondition",
          "@id": "https://ramacarepolyclinic.ae/services/skin-tightening-dubai/#condition",
          "name": "Facial Skin Laxity and Aging Concerns",
          "alternateName": "Loose or Sagging Skin",
          "url": "https://ramacarepolyclinic.ae/services/skin-tightening-dubai/",
          "description": "Facial skin laxity and aging concerns refer to loose, sagging skin, reduced elasticity, early jowling, and age-related changes that diminish facial firmness and contour.",
          "possibleTreatment": {
            "@type": "MedicalTherapy",
            "name": "Skin Tightening Therapy",
            "description": "Aesthetic skin tightening therapies use energy-based technologies (such as radiofrequency, ultrasound, or laser) or advanced injectable procedures to stimulate collagen production and improve skin firmness and elasticity."
          }
        },
        {
          "@type": "MedicalProcedure",
          "@id": "https://ramacarepolyclinic.ae/services/skin-tightening-dubai/#procedure",
          "name": "Skin Tightening Treatment in Dubai",
          "alternateName": "Non-Surgical Skin Firming Therapy",
          "url": "https://ramacarepolyclinic.ae/services/skin-tightening-dubai/",
          "mainEntityOfPage": "https://ramacarepolyclinic.ae/services/skin-tightening-dubai/",
          "description": "Skin Tightening treatment in Dubai at RamaCare Polyclinic is a non-surgical aesthetic procedure designed to improve skin laxity, firmness, and contour using advanced technologies and targeted techniques.",
          "procedureType": "Non-invasive aesthetic dermatology procedure",
          "howPerformed": "Performed by trained clinicians, the skin tightening process typically involves the use of energy-based devices (e.g., radiofrequency or ultrasound) or specialized injectable protocols that stimulate collagen and elastin production to firm and lift the skin.",
          "preparation": "Patients are advised to consult with the clinician about medical history and skin concerns prior to treatment. Minimal preparation is generally required.",
          "followup": "Follow-up sessions and clinician-guided aftercare may be recommended to monitor results and schedule maintenance treatments according to individual needs.",
          "indication": [
            "Loose or sagging skin",
            "Reduced skin elasticity",
            "Early jowling",
            "Fine lines due to laxity",
            "Loss of facial contour"
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
       <PatientTestimonials content={content?.testimonials} />
       <DoctorsSection content={content?.doctors} />
    
    <PaymentInsurance content={content?.paymentInsurance} />
      <FAQSection content={content?.faq} />
      <BookConsultation content={content?.bookConsultation} />
    </Layout>
  );
}
