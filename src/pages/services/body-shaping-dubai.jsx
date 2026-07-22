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
import TreatmentAdditionalContent from '../../../components/TreatmentAdditionalContent';
import { getSubcategoryContent } from '../../data/subcategoryContent';


export default function BodyShapingPage() {
  const categoryName = 'Aesthetic Dermatology';
  const subcategoryName = 'Body Shaping';

  // Get content from data file
  const content = getSubcategoryContent('aesthetic-dermatology-dubai', 'body-shaping');

  const navItems = [
    { id: 'treatment-info', label: 'Treatment Info' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'sessions-and-results', label: 'Results & Sessions' },
    { id: 'professional-benefits', label: 'Professional Benefits' },
    { id: 'why-choose', label: 'Why Choose Us' },
    { id: 'conditions-we-treat', label: 'Areas We Treat' },
    { id: 'our-doctors', label: 'Our Doctors' },
    { id: 'faq', label: 'FAQ' },
    { id: 'book-now', label: 'Book Now' }
  ];

  return (
    <Layout>
      <Head>
  <title key="title">Body Shaping in Dubai | Expert Non-Surgical Body Sculpting</title>
  <meta name="description" content="Achieve your ideal body with expert body shaping in Dubai—safe, non-surgical treatments for fat reduction, contouring, and toning with personalized care." key="description" />
  <meta name="keywords" content="Body shaping in Dubai, Body sculpting Dubai, Body contouring Dubai, Non-surgical body shaping in Dubai, Fat reduction Dubai, Slimming treatments in Dubai, Muscle toning in Dubai, Safe body contouring in Dubai, Personalized body treatment Dubai, Cellulite treatment Dubai, Medical body shaping in Dubai, DHA licensed body clinic" />
  
  <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "MedicalCondition",
          "@id": "https://ramacarepolyclinic.ae/services/body-shaping-dubai/#condition",
          "name": "Localized Fat Deposits and Body Contouring Concerns",
          "alternateName": "Stubborn Fat, Uneven Body Contours",
          "url": "https://ramacarepolyclinic.ae/services/body-shaping-dubai/",
          "description": "Localized fat deposits and uneven body contours can affect the shape and appearance of areas such as the abdomen, flanks, thighs, arms, and chin. These concerns may not respond adequately to diet and exercise alone and can benefit from medically supervised body shaping treatments.",
          "possibleTreatment": {
            "@type": "MedicalTherapy",
            "name": "Body Shaping Therapy",
            "description": "Body shaping therapy includes non‑invasive and minimally invasive procedures designed to reduce localized fat, tighten skin, and improve body contours using energy‑based technologies such as laser, radiofrequency, ultrasound, or cryolipolysis."
          }
        },
        {
          "@type": "MedicalProcedure",
          "@id": "https://ramacarepolyclinic.ae/services/body-shaping-dubai/#procedure",
          "name": "Body Shaping Treatment in Dubai",
          "alternateName": "Fat Reduction & Contouring Procedures",
          "url": "https://ramacarepolyclinic.ae/services/body-shaping-dubai/",
          "mainEntityOfPage": "https://ramacarepolyclinic.ae/services/body-shaping-dubai/",
          "description": "Body shaping at RamaCare Polyclinic in Dubai involves personalized fat reduction and body contouring treatments using proven technologies. The treatment plan is tailored to the patient’s goals, body area, and underlying tissue characteristics.",
          "procedureType": "Non‑invasive/Minimally Invasive Body Contouring Procedure",
          "howPerformed": "After a detailed consultation and assessment of body areas, trained clinicians select the most appropriate body shaping modality — such as cryolipolysis (fat freezing), radiofrequency energy, ultrasound lipolysis, or laser‑assisted contouring. Protective measures and comfort options (e.g., cooling, topical numbing) are used based on the technology and patient preference.",
          "preparation": "Patients should provide a complete medical history, avoid excessive sun exposure on target areas, and follow any clinician‑recommended pre‑treatment instructions to optimize outcomes. Maintaining healthy hydration and avoiding certain medications may be advised.",
          "followup": "Post‑treatment follow‑up includes monitoring treated areas for optimal fat reduction and skin tightening, scheduling additional sessions as needed, and recommending supportive lifestyle guidance to maintain results. Instructions on activity levels and self‑care are provided.",
          "indication": [
            "Localized fat deposits resistant to diet and exercise",
            "Body contour refinement in areas such as abdomen, flanks, thighs, arms, or chin",
            "Improvement of mild skin laxity",
            "Individuals seeking non‑surgical contouring options"
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
        <TreatmentAdditionalContent content={content} />
       <PatientTestimonials content={content?.testimonials} />
       <DoctorsSection content={content?.doctors} />
    
    <PaymentInsurance content={content?.paymentInsurance} />
      <FAQSection content={content?.faq} />
      <BookConsultation content={content?.bookConsultation} />
    </Layout>
  );
}

