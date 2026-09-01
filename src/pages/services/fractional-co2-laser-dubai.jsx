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


export default function FractionalCo2LaserPage() {
  const categoryName = 'Aesthetic Dermatology';
  const subcategoryName = 'Fractional CO2 Laser';

  // Get content from data file - nested path
  const content = getSubcategoryContent('aesthetic-dermatology-dubai', 'laser-treatment/fractional-co2-laser');

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
  <title key="title">Fractional CO2 Laser in Dubai | RamaCare Polyclinic</title>
  <meta name="description" content="Fractional CO2 laser in Dubai improves skin texture, reduces scars, fine lines, and pigmentation, delivering smoother, youthful skin under expert care." key="description" />
  
  <meta property="og:title" content="Fractional CO2 Laser in Dubai | RamaCare Polyclinic" />
  <meta property="og:description" content="Fractional CO2 laser in Dubai improves skin texture, reduces scars, fine lines, and pigmentation, delivering smoother, youthful skin under expert care." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://ramacarepolyclinic.ae/services/fractional-co2-laser-dubai/" />
  <meta property="og:image" content="https://ramacarepolyclinic.ae/images/fractional-co2-laser-treatment-dubai.jpg" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="Fractional CO2 Laser Treatment for skin resurfacing at RamaCare Polyclinic Dubai" />
  <meta property="og:site_name" content="RamaCare Polyclinic" />
  
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Fractional CO2 Laser in Dubai | RamaCare Polyclinic" />
  <meta name="twitter:description" content="Fractional CO2 laser in Dubai improves skin texture, reduces scars, fine lines, and pigmentation, delivering smoother, youthful skin under expert care." />
  <meta name="twitter:image" content="https://ramacarepolyclinic.ae/images/fractional-co2-laser-treatment-dubai.jpg" />
  
  <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "MedicalCondition",
          "@id": "https://ramacarepolyclinic.ae/services/fractional-co2-laser-dubai/#condition",
          "name": "Skin Texture Irregularities, Scarring & Aging Signs",
          "alternateName": "Fine Lines, Wrinkles, Acne Scars & Uneven Texture",
          "url": "https://ramacarepolyclinic.ae/services/fractional-co2-laser-dubai/",
          "description": "Skin texture irregularities, fine lines, wrinkles, acne scars, stretch marks, and other surface irregularities can impact skin smoothness and appearance. Fractional CO2 laser therapy helps improve these conditions by stimulating skin remodeling and collagen regeneration.",
          "possibleTreatment": {
            "@type": "MedicalTherapy",
            "name": "Fractional CO2 Laser Therapy",
            "description": "Fractional CO2 laser therapy is a minimally invasive dermatologic laser procedure that uses controlled fractional laser energy to resurface the skin, improve texture, reduce scars, and stimulate new collagen formation for smoother, younger‑looking skin."
          }
        },
        {
          "@type": "MedicalProcedure",
          "@id": "https://ramacarepolyclinic.ae/services/fractional-co2-laser-dubai/#procedure",
          "name": "Fractional CO2 Laser Treatment in Dubai",
          "alternateName": "CO2 Laser Skin Resurfacing & Texture Correction",
          "url": "https://ramacarepolyclinic.ae/services/fractional-co2-laser-dubai/",
          "mainEntityOfPage": "https://ramacarepolyclinic.ae/services/fractional-co2-laser-dubai/",
          "description": "Fractional CO2 laser treatment at RamaCare Polyclinic in Dubai is an advanced, minimally invasive laser procedure designed to improve skin texture, reduce fine lines and wrinkles, and treat acne scars and other surface irregularities by promoting collagen remodeling.",
          "procedureType": "Minimally invasive laser dermatologic procedure",
          "howPerformed": "A trained clinician delivers controlled fractional carbon dioxide laser energy in micro‑columns into the skin. This stimulates natural wound healing and collagen production, resurfacing aged or scarred skin while leaving surrounding tissue intact for faster healing.",
          "preparation": "Patients are advised to avoid recent sun exposure, certain skincare products (like retinoids), and harsh exfoliants before treatment. Clinicians will review medical history, skin condition, and set expectations during a consultation.",
          "followup": "Follow‑up care includes monitoring healing, providing wound care guidance, and scheduling additional sessions if needed to achieve optimal results. Patients may experience temporary redness, peeling, or sensitivity during recovery.",
          "indication": [
            "Fine lines and wrinkles",
            "Acne and surgical scars",
            "Uneven skin texture",
            "Sun‑damaged skin",
            "Stretch marks"
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
        },
        {
          "@type": "MedicalWebPage",
          "@id": "https://ramacarepolyclinic.ae/services/fractional-co2-laser-dubai/#webpage",
          "url": "https://ramacarepolyclinic.ae/services/fractional-co2-laser-dubai/",
          "name": "Fractional CO2 Laser in Dubai | RamaCare Polyclinic",
          "description": "Fractional CO2 laser in Dubai improves skin texture, reduces scars, fine lines, and pigmentation, delivering smoother, youthful skin under expert care.",
          "medicalAudience": { "@type": "Patient" },
          "about": { "@type": "MedicalProcedure", "name": "Fractional CO2 Laser Skin Resurfacing" },
          "reviewedBy": { "@id": "https://ramacarepolyclinic.ae/services/fractional-co2-laser-dubai/#reviewer" },
          "publisher": {
            "@type": "MedicalOrganization",
            "name": "RamaCare Polyclinic",
            "url": "https://ramacarepolyclinic.ae/"
          }
        },
        {
          "@type": "Person",
          "@id": "https://ramacarepolyclinic.ae/services/fractional-co2-laser-dubai/#reviewer",
          "name": "Sonita Sinaga",
          "jobTitle": "Licensed & Certified Aesthetic Therapist",
          "hasCredential": "NCLC Laser Certified",
          "url": "https://ramacarepolyclinic.ae/doctors/sonita-sinaga-aesthetic-therapist-dubai/",
          "worksFor": { "@type": "MedicalOrganization", "name": "RamaCare Polyclinic" }
        },
        {
          "@type": "FAQPage",
          "@id": "https://ramacarepolyclinic.ae/services/fractional-co2-laser-dubai/#faq",
          "mainEntity": content?.faq?.faqs?.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          })) || []
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
       <FAQSection content={content?.faq} />
    
     <PaymentInsurance content={content?.paymentInsurance} />
      <ContentReviewBadge doctorName="Sonita Sinaga" pageSlug="fractional-co2-laser-dubai" />
      <BookConsultation content={content?.bookConsultation} />
    </Layout>
  );
}
