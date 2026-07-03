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


export default function FacePRPinDubaiPage() {
    const categoryName = 'Facial';
    const subcategoryName = 'Face PRP';

    // Get content from data file
    const content = getSubcategoryContent('facial-dubai', 'face-prp');

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
  <title key="title">Face PRP in Dubai – Skin Rejuvenation by Experts</title>
  <meta name="description" content="Face PRP in Dubai is performed by specialists to stimulate collagen, improve skin texture, reduce fine lines, and restore a youthful, healthy glow." key="description" />
  <meta name="keywords" content="Face PRP in Dubai, PRP facial treatment Dubai, Skin rejuvenation Dubai, Collagen stimulation facial, Anti-aging PRP treatment, Facial rejuvenation therapy, Fine lines reduction in Dubai, Youthful skin treatment in Dubai, Platelet-rich plasma facial, Professional PRP skin therapy" />
  
   <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "@id": "https://ramacarepolyclinic.ae/services/face-prp-in-dubai/#procedure",
      "name": "Face PRP Treatment in Dubai",
      "alternateName": "Platelet-Rich Plasma Facial Rejuvenation",
      "url": "https://ramacarepolyclinic.ae/services/face-prp-in-dubai/",
      "mainEntityOfPage": "https://ramacarepolyclinic.ae/services/face-prp-in-dubai/",
      "description": "Face PRP (Platelet-Rich Plasma) therapy in Dubai is a non-surgical aesthetic treatment that uses your own clinically prepared plasma to stimulate collagen production, improve skin elasticity, reduce fine lines, and rejuvenate facial skin naturally.",
      "procedureType": "Aesthetic regenerative skin procedure",
      "howPerformed": "After a clinical consultation and skin assessment, a small sample of your blood is drawn and centrifuged to isolate platelet-rich plasma. PRP is then injected into targeted areas of the face to encourage collagen stimulation and cellular regeneration.",
      "preparation": "Patients should arrive with clean skin and share their medical history before the procedure. Minimal preparation is required.",
      "followup": "Multiple sessions over weeks are recommended for optimal skin rejuvenation results, with aftercare guidance provided by clinicians.",
      "indication": [
        "Fine lines and wrinkles",
        "Dull or uneven skin tone",
        "Acne scars and pigmentation concerns",
        "Loss of facial elasticity",
        "General facial skin rejuvenation"
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
        "telephone": "+971566597878",
        "areaServed": {
          "@type": "City",
          "name": "Dubai"
        },
        "priceRange": "$$"
      }
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
