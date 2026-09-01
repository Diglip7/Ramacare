import Layout from '../../../components/Layout';
import ContentReviewBadge from '../../../components/ContentReviewBadge';
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
import SkinTreatmentAdditionalContent from '../../../components/SkinTreatmentAdditionalContent';
import ServiceExtrasSection from '../../../components/ServiceExtrasSection';
import { getSubcategoryContent } from '../../data/subcategoryContent';


export default function NailFungusPage() {
  const categoryName = 'Aesthetic Dermatology';
  const subcategoryName = 'Nail Fungus';

  // Get content from data file - nested path
  const content = getSubcategoryContent('aesthetic-dermatology-dubai', 'laser-treatment/nail-fungus');
  const navItems = [
    { id: 'treatment-info', label: 'Treatment Info' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'benefits', label: 'Benefits' },
    { id: 'which-option-right', label: 'Which Option Right?' },
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
  <title key="title">Nail Fungus Treatment in Dubai for Healthy Nails</title>
  <meta name="description" content="Nail fungus treatment in Dubai effectively clears fungal infections, restores nail health, and prevents recurrence using safe, doctor-supervised care." key="description" />
    <meta name="keywords" content="Nail fungus treatment Dubai, Fungal nail infection Dubai, Toenail fungus treatment, Fingernail fungus removal, Medical nail care Dubai, Laser nail fungus treatment, Anti-fungal therapy Dubai, Professional nail treatment, Healthy nails Dubai, Nail infection treatment" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Nail Fungus Treatment in Dubai for Healthy Nails" />
  <meta property="og:description" content="Nail fungus treatment in Dubai effectively clears fungal infections, restores nail health, and prevents recurrence using safe, doctor-supervised care." />
  <meta property="og:url" content="https://ramacarepolyclinic.ae/services/nail-fungus-dubai/" />
  <meta property="og:image" content="https://ramacarepolyclinic.ae/images/nail-fungus.jpg" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:site_name" content="RamaCare Polyclinic" />
  <meta property="og:locale" content="en_AE" />
  
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Nail Fungus Treatment in Dubai for Healthy Nails" />
  <meta name="twitter:description" content="Effectively clears fungal infections, restores nail health, and prevents recurrence using safe, doctor-supervised care." />
  <meta name="twitter:image" content="https://ramacarepolyclinic.ae/images/nail-fungus.jpg" />
  
  <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "MedicalCondition",
          "@id": "https://ramacarepolyclinic.ae/services/nail-fungus-dubai/#condition",
          "name": "Nail Fungus (Onychomycosis)",
          "alternateName": "Fungal Nail Infection",
          "url": "https://ramacarepolyclinic.ae/services/nail-fungus-dubai/",
          "description": "Nail fungus (onychomycosis) is a fungal infection affecting the nails, causing thickening, discoloration, brittleness, and structural changes, often requiring clinical dermatologic treatment for effective resolution.",
          "possibleTreatment": {
            "@type": "MedicalTherapy",
            "name": "Clinical Nail Fungus Therapy",
            "description": "Treatment for nail fungus comprises medically supervised antifungal therapies — including topical and/or oral antifungal medicines, mechanical nail debridement, and adjunctive laser therapy — to eradicate infection and support healthy nail regrowth."
          }
        },
        {
          "@type": "MedicalProcedure",
          "@id": "https://ramacarepolyclinic.ae/services/nail-fungus-dubai/#procedure",
          "name": "Nail Fungus Treatment in Dubai",
          "alternateName": "Onychomycosis Treatment & Fungal Nail Care",
          "url": "https://ramacarepolyclinic.ae/services/nail-fungus-dubai/",
          "mainEntityOfPage": "https://ramacarepolyclinic.ae/services/nail-fungus-dubai/",
          "description": "Nail fungus treatment at RamaCare Polyclinic in Dubai is a dermatologic service focused on diagnosing and treating onychomycosis using evidence‑based antifungal medications, mechanical debridement, and laser therapy when appropriate to clear infection and promote healthier nail growth.",
          "procedureType": "Medical dermatologic procedure",
          "howPerformed": "After a clinical examination and possible diagnostic testing, dermatologists select antifungal medications (topical and/or oral), carefully remove thickened infected nail tissue if needed, and may use specialist laser therapy to target fungal colonies. Treatment plans are tailored based on severity and patient response.",
          "preparation": "Patients should provide a full medical history, avoid unverified home remedies, maintain cleanliness of affected nails, and attend the initial clinical assessment. Disclosure of medications, allergies, and prior treatments supports safe planning.",
          "followup": "Follow‑up visits monitor infection resolution, assess nail regrowth, adjust medications if necessary, and offer hygiene and preventive advice to reduce recurrence risk.",
          "indication": [
            "Discolored or yellow nails",
            "Thickened, brittle, or crumbly nails",
            "Nail deformity with debris",
            "Persistent fungal infection unresponsive to OTC care",
            "Pain or discomfort associated with fungal involvement"
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
          "@id": "https://ramacarepolyclinic.ae/services/nail-fungus-dubai/#webpage",
          "url": "https://ramacarepolyclinic.ae/services/nail-fungus-dubai/",
          "name": "Nail Fungus Treatment in Dubai for Healthy Nails",
          "description": "Nail fungus treatment in Dubai effectively clears fungal infections, restores nail health, and prevents recurrence using safe, doctor-supervised care.",
          "medicalAudience": { "@type": "Patient" },
          "about": { "@id": "https://ramacarepolyclinic.ae/services/nail-fungus-dubai/#condition" },
          "reviewedBy": { "@id": "https://ramacarepolyclinic.ae/services/nail-fungus-dubai/#reviewer" },
          "publisher": {
            "@type": "MedicalOrganization",
            "name": "RamaCare Polyclinic",
            "url": "https://ramacarepolyclinic.ae/"
          },
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ramacarepolyclinic.ae/" },
              { "@type": "ListItem", "position": 2, "name": "Aesthetic Dermatology", "item": "https://ramacarepolyclinic.ae/services/aesthetic-dermatology-dubai/" },
              { "@type": "ListItem", "position": 3, "name": "Nail Fungus Treatment", "item": "https://ramacarepolyclinic.ae/services/nail-fungus-dubai/" }
            ]
          }
        },
        {
          "@type": "Person",
          "@id": "https://ramacarepolyclinic.ae/services/nail-fungus-dubai/#reviewer",
          "name": "Sonita Sinaga",
          "jobTitle": "Licensed & Certified Aesthetic Therapist",
          "hasCredential": "NCLC Laser Certified",
          "url": "https://ramacarepolyclinic.ae/doctors/sonita-sinaga-aesthetic-therapist-dubai/",
          "worksFor": { "@type": "MedicalOrganization", "name": "RamaCare Polyclinic" }
        },
        {
          "@type": "FAQPage",
          "@id": "https://ramacarepolyclinic.ae/services/nail-fungus-dubai/#faq",
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
       <TreatmentAdditionalContent 
              content={{skinTreatmentContent: content?.skinTreatmentContent, }}  />
      <SkinTreatmentAdditionalContent 
              content={{whyChooseSection: content?.whyChooseSection,
                 whenToConsider: content?.whenToConsider,}} />
      <ServiceExtrasSection aftercareContent={content?.aftercareContent} />
       <PatientTestimonials content={content?.testimonials} />
       <DoctorsSection content={content?.doctors} />
       <ContentReviewBadge doctorName="Sonita Sinaga" pageSlug="nail-fungus-dubai" />
    
    <PaymentInsurance content={content?.paymentInsurance} />
      <FAQSection content={content?.faq} />
      <BookConsultation content={content?.bookConsultation} />
    </Layout>
  );
}
