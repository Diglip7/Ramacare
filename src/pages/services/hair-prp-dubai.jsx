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
import TreatmentAdditionalContent from '../../../components/TreatmentAdditionalContent';
import SkinTreatmentAdditionalContent from '../../../components/SkinTreatmentAdditionalContent';
import ServiceExtrasSection from '../../../components/ServiceExtrasSection';
import { getSubcategoryContent } from '../../data/subcategoryContent';


export default function HairPRPPage() {
  const categoryName = 'Aesthetic Dermatology';
  const subcategoryName = 'Hair PRP';

  // Get content from data file - nested path
  const content = getSubcategoryContent('aesthetic-dermatology-dubai', 'hair-treatment/hair-prp');

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
  <title key="title">Hair PRP in Dubai for Natural Hair Regrowth Treatment</title>
  <meta name="description" content="Hair PRP in Dubai uses platelet-rich plasma to strengthen hair follicles, reduce hair fall, and support natural regrowth under expert medical care." key="description" />
  <meta name="keywords" content="Hair PRP in Dubai, PRP hair treatment Dubai, Hair regrowth treatment Dubai, Platelet rich plasma for hair, Hair fall reduction Dubai, Scalp stimulation therapy, Non-surgical hair restoration, Medical hair loss treatment, Professional PRP therapy Dubai" />

  {/* Open Graph Meta Tags */}
  <meta property="og:title" content="Hair PRP in Dubai for Natural Hair Regrowth Treatment" />
  <meta property="og:description" content="Hair PRP in Dubai uses platelet-rich plasma to strengthen hair follicles, reduce hair fall, and support natural regrowth under expert medical care." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://ramacarepolyclinic.ae/services/hair-prp-dubai/" />
  <meta property="og:image" content="https://ramacarepolyclinic.ae/images/hair-prp1.jpg" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="Hair PRP Treatment in Dubai - RamaCare Polyclinic" />
  <meta property="og:site_name" content="RamaCare Polyclinic" />
  <meta property="og:locale" content="en_AE" />

  {/* Twitter Card Meta Tags */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Hair PRP in Dubai for Natural Hair Regrowth Treatment" />
  <meta name="twitter:description" content="Platelet-rich plasma therapy in Dubai to strengthen hair follicles, reduce hair fall, and support natural regrowth under expert medical care." />
  <meta name="twitter:image" content="https://ramacarepolyclinic.ae/images/hair-prp1.jpg" />

  <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "MedicalWebPage",
          "@id": "https://ramacarepolyclinic.ae/services/hair-prp-dubai/#webpage",
          "url": "https://ramacarepolyclinic.ae/services/hair-prp-dubai/",
          "name": "Hair PRP in Dubai for Natural Hair Regrowth Treatment",
          "description": "Hair PRP in Dubai uses platelet-rich plasma to strengthen hair follicles, reduce hair fall, and support natural regrowth under expert medical care.",
          "inLanguage": "en",
          "isPartOf": {
            "@type": "WebSite",
            "url": "https://ramacarepolyclinic.ae/",
            "name": "RamaCare Polyclinic"
          },
          "about": {
            "@type": "MedicalCondition",
            "name": "Hair Thinning / Hair Loss (PRP Therapy)"
          },
          "lastReviewed": "2026-08-29",
          "reviewedBy": {
            "@id": "https://ramacarepolyclinic.ae/services/hair-prp-dubai/#physician"
          },
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ramacarepolyclinic.ae/" },
              { "@type": "ListItem", "position": 2, "name": "Aesthetic Dermatology", "item": "https://ramacarepolyclinic.ae/services/aesthetic-dermatology-dubai" },
              { "@type": "ListItem", "position": 3, "name": "Hair PRP", "item": "https://ramacarepolyclinic.ae/services/hair-prp-dubai/" }
            ]
          }
        },
        {
          "@type": "MedicalCondition",
          "@id": "https://ramacarepolyclinic.ae/services/hair-prp-dubai/#condition",
          "name": "Hair Thinning, Shedding & Scalp Weakness",
          "alternateName": "Androgenic Alopecia, Telogen Effluvium, Diffuse Hair Loss",
          "url": "https://ramacarepolyclinic.ae/services/hair-prp-dubai/",
          "description": "Hair thinning and shedding include conditions like androgenic alopecia, stress‑related telogen effluvium, and diffuse hair loss patterns that result in reduced hair density and weakened scalp health.",
          "possibleTreatment": {
            "@type": "MedicalTherapy",
            "name": "Platelet‑Rich Plasma (PRP) Therapy for Hair Regrowth",
            "description": "PRP therapy uses concentrated platelets from the patient’s own blood to deliver growth factors into the scalp, stimulating hair follicles, promoting hair regrowth, improving hair thickness, and supporting scalp health."
          }
        },
        {
          "@type": "MedicalProcedure",
          "@id": "https://ramacarepolyclinic.ae/services/hair-prp-dubai/#procedure",
          "name": "Hair PRP Treatment in Dubai",
          "alternateName": "Platelet‑Rich Plasma (PRP) Hair Regeneration Therapy",
          "url": "https://ramacarepolyclinic.ae/services/hair-prp-dubai/",
          "mainEntityOfPage": "https://ramacarepolyclinic.ae/services/hair-prp-dubai/",
          "description": "Hair PRP treatment at RamaCare Polyclinic in Dubai is a minimally invasive regenerative procedure designed to stimulate hair regrowth, strengthen hair follicles, and reduce shedding using platelet‑rich plasma derived from the patient’s own blood.",
          "procedureType": "Minimally invasive regenerative dermatologic procedure",
          "howPerformed": "A small blood sample is drawn from the patient and processed to concentrate platelets. The platelet‑rich plasma is then injected into targeted areas of the scalp where thinning or hair loss is present. Growth factors within the plasma help activate dormant follicles and support hair regeneration.",
          "preparation": "Patients should avoid blood‑thinning medications and supplements before the procedure, arrive with clean hair and scalp, and discuss any medical conditions or medications with the clinician to ensure safety and tailor the treatment plan.",
          "followup": "Follow‑up sessions may assess hair growth progress, schedule additional PRP treatments if necessary, and advise on supportive scalp care and lifestyle measures to maintain long‑term results.",
          "indication": [
            "Diffuse hair thinning",
            "Androgenic alopecia (pattern hair loss)",
            "Telogen effluvium (stress‑related shedding)",
            "Weak or fine hair",
            "Reduced scalp health"
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
          "@type": "Physician",
          "@id": "https://ramacarepolyclinic.ae/services/hair-prp-dubai/#physician",
          "name": "Dr. Sahar Zomorrodi",
          "medicalSpecialty": "General Practice & Aesthetic Medicine",
          "honorificSuffix": "MD",
          "hasCredential": "DHA Licensed General Practitioner",
          "worksFor": {
            "@type": "MedicalOrganization",
            "name": "RamaCare Polyclinic"
          },
          "url": "https://ramacarepolyclinic.ae/doctors/dr-sahar-zomorrodi-general-practitioner-dubai/"
        },
        {
          "@type": "FAQPage",
          "@id": "https://ramacarepolyclinic.ae/services/hair-prp-dubai/#faq",
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
        content={{
          skinTreatmentContent: content?.skinTreatmentContent,
        }} 
      />
      <SkinTreatmentAdditionalContent 
        content={{
          whyChooseSection: content?.whyChooseSection,
          whenToConsider: content?.whenToConsider,
        }} 
      />
      <ServiceExtrasSection aftercareContent={content?.aftercareContent} />
       <PatientTestimonials content={content?.testimonials} />
       <DoctorsSection content={content?.doctors} />
    
     <PaymentInsurance content={content?.paymentInsurance} />
      <ContentReviewBadge doctorName="Dr. Sahar Zomorrodi" pageSlug="hair-prp-dubai" />
      <FAQSection content={content?.faq} />
      <BookConsultation content={content?.bookConsultation} />
    </Layout>
  );
}
