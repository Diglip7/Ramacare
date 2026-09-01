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


export default function ScarsRemovalPage() {
  const categoryName = 'Aesthetic Dermatology';
  const subcategoryName = 'Scars Removal';

  // Get content from data file - nested path
  const content = getSubcategoryContent('aesthetic-dermatology-dubai', 'laser-treatment/scars-removal');

  // Generate FAQ schema dynamically from content
  const faqSchema = content?.faq?.faqs?.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  })) || [];

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
        <title key="title">Scars Removal in Dubai | RamaCare Polyclinic</title>
        <meta name="description" content="Scars removal in Dubai uses advanced laser and medical treatments to reduce acne, surgical, or injury scars, restoring smooth and healthy-looking skin." key="description" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Scars Removal in Dubai | RamaCare Polyclinic" />
        <meta property="og:description" content="Scars removal in Dubai uses advanced laser and medical treatments to reduce acne, surgical, or injury scars, restoring smooth and healthy-looking skin." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ramacarepolyclinic.ae/services/scars-removal-dubai/" />
        <meta property="og:image" content="https://ramacarepolyclinic.ae/images/scars-removal-treatment-dubai.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Scars Removal Treatment at RamaCare Polyclinic Dubai" />
        <meta property="og:site_name" content="RamaCare Polyclinic" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Scars Removal in Dubai | RamaCare Polyclinic" />
        <meta name="twitter:description" content="Scars removal in Dubai uses advanced laser and medical treatments to reduce acne, surgical, or injury scars, restoring smooth and healthy-looking skin." />
        <meta name="twitter:image" content="https://ramacarepolyclinic.ae/images/scars.jpg" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "BreadcrumbList",
                  "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ramacarepolyclinic.ae/" },
                    { "@type": "ListItem", "position": 2, "name": "Aesthetic Dermatology", "item": "https://ramacarepolyclinic.ae/services/aesthetic-dermatology-dubai/" },
                    { "@type": "ListItem", "position": 3, "name": "Scars Removal", "item": "https://ramacarepolyclinic.ae/services/scars-removal-dubai/" }
                  ]
                },
                {
                  "@type": "MedicalWebPage",
                  "@id": "https://ramacarepolyclinic.ae/services/scars-removal-dubai/#webpage",
                  "url": "https://ramacarepolyclinic.ae/services/scars-removal-dubai/",
                  "name": "Scars Removal in Dubai | RamaCare Polyclinic",
                  "description": "Scars removal in Dubai uses advanced laser and medical treatments to reduce acne, surgical, or injury scars, restoring smooth and healthy-looking skin.",
                  "medicalAudience": { "@type": "Patient" },
                  "about": { "@type": "MedicalProcedure", "name": "Scar Removal" },
                  "reviewedBy": { "@id": "https://ramacarepolyclinic.ae/services/scars-removal-dubai/#reviewer" },
                  "publisher": {
                    "@type": "MedicalOrganization",
                    "name": "RamaCare Polyclinic",
                    "url": "https://ramacarepolyclinic.ae/"
                  }
                },
                {
                  "@type": "Person",
                  "@id": "https://ramacarepolyclinic.ae/services/scars-removal-dubai/#reviewer",
                  "name": "Sonita Sinaga",
                  "jobTitle": "Licensed & Certified Aesthetic Therapist",
                  "hasCredential": "NCLC Laser Certified",
                  "url": "https://ramacarepolyclinic.ae/doctors/sonita-sinaga-aesthetic-therapist-dubai/",
                  "worksFor": { "@type": "MedicalOrganization", "name": "RamaCare Polyclinic" }
                },
                {
                  "@type": "MedicalCondition",
                  "@id": "https://ramacarepolyclinic.ae/services/scars-removal-dubai/#condition",
                  "name": "Skin Scarring and Texture Irregularities",
                  "alternateName": "Acne Scars, Surgical Scars & Traumatic Scars",
                  "url": "https://ramacarepolyclinic.ae/services/scars-removal-dubai/",
                  "description": "Skin scars — including acne scars, surgical scars, injury-related scars, and other texture irregularities — can affect the smoothness, appearance, and confidence of the skin. They often involve fibrous tissue that alters normal skin texture.",
                  "possibleTreatment": {
                    "@type": "MedicalTherapy",
                    "name": "Scar Remediation Therapy",
                    "description": "Scar remediation therapy may include a combination of clinical treatments such as laser resurfacing, fractional CO₂ laser, microneedling, chemical peels, or other dermatologic procedures designed to improve scar texture, reduce visibility, and stimulate healthy skin remodeling."
                  }
                },
                {
                  "@type": "MedicalProcedure",
                  "@id": "https://ramacarepolyclinic.ae/services/scars-removal-dubai/#procedure",
                  "name": "Scar Removal Treatment in Dubai",
                  "alternateName": "Acne & Traumatic Scar Reduction",
                  "url": "https://ramacarepolyclinic.ae/services/scars-removal-dubai/",
                  "mainEntityOfPage": "https://ramacarepolyclinic.ae/services/scars-removal-dubai/",
                  "description": "Scar removal treatment at RamaCare Polyclinic in Dubai is a customized dermatologic procedure that employs advanced technologies and clinically proven techniques to reduce the appearance of scars and improve overall skin texture.",
                  "procedureType": "Medical and aesthetic dermatologic procedure",
                  "howPerformed": "After evaluating scar type and severity, trained clinicians may recommend fractional laser resurfacing (like CO₂ laser), ablative or non-ablative lasers, microneedling, chemical peels, or a combination of these methods. The chosen modalities stimulate collagen production and skin remodeling to minimize scar appearance.",
                  "preparation": "Patients should provide a full medical and dermatologic history, avoid recent sun exposure, and discuss current medications or skincare products. Clinicians will outline any specific pre-treatment care needed for optimal results.",
                  "followup": "Follow-up care includes monitoring skin healing, assessing treatment response, schedule additional sessions if needed, and recommending supportive skincare and sun protection to maintain results and promote healthy tissue recovery.",
                  "indication": [
                    "Acne scars (pitted or hypertrophic)",
                    "Surgical scars",
                    "Traumatic scars",
                    "Stretch marks and texture irregularities",
                    "Uneven skin surface post-injury"
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
                  "@type": "FAQPage",
                  "@id": "https://ramacarepolyclinic.ae/services/scars-removal-dubai/#faq",
                  "mainEntity": faqSchema
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
      <ContentReviewBadge doctorName="Sonita Sinaga" pageSlug="scars-removal-dubai" />
      
      <PaymentInsurance content={content?.paymentInsurance} />
      <FAQSection content={content?.faq} />
      <BookConsultation content={content?.bookConsultation} />
    </Layout>
  );
}
