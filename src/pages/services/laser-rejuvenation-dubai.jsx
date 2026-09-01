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


export default function LaserRejuvenationPage() {
  const categoryName = 'Aesthetic Dermatology';
  const subcategoryName = 'Laser Rejuvenation';

  // Get content from data file - nested path
  const content = getSubcategoryContent('aesthetic-dermatology-dubai', 'laser-treatment/laser-rejuvenation');

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

  // Dynamically generated FAQPage Schema from page data
  const faqSchema = content?.faq?.faqs?.length
    ? {
        "@type": "FAQPage",
        "@id": "https://ramacarepolyclinic.ae/services/laser-rejuvenation-dubai/#faq",
        "mainEntity": content.faq.faqs.map((faq) => ({
          "@type": "Question",
          "name": faq.question.trim(),
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer.trim()
          }
        }))
      }
    : null;

  const jsonLdGraph = [
    {
      "@type": "MedicalWebPage",
      "@id": "https://ramacarepolyclinic.ae/services/laser-rejuvenation-dubai/#webpage",
      "url": "https://ramacarepolyclinic.ae/services/laser-rejuvenation-dubai/",
      "name": "Laser Rejuvenation in Dubai | RamaCare Polyclinic",
      "description": "Laser rejuvenation in Dubai helps reduce wrinkles, fine lines, and pigmentation while improving skin texture and glow through safe, expert care.",
      "medicalAudience": { "@type": "Patient" },
      "about": { "@type": "MedicalProcedure", "name": "Laser Skin Rejuvenation" },
      "reviewedBy": { "@id": "https://ramacarepolyclinic.ae/services/laser-rejuvenation-dubai/#reviewer" },
      "publisher": {
        "@type": "MedicalOrganization",
        "name": "RamaCare Polyclinic",
        "url": "https://ramacarepolyclinic.ae/"
      }
    },
    {
      "@type": "Person",
      "@id": "https://ramacarepolyclinic.ae/services/laser-rejuvenation-dubai/#reviewer",
      "name": "Sonita Sinaga",
      "jobTitle": "Licensed & Certified Aesthetic Therapist",
      "hasCredential": "NCLC Laser Certified",
      "url": "https://ramacarepolyclinic.ae/doctors/sonita-sinaga-aesthetic-therapist-dubai/",
      "worksFor": { "@type": "MedicalOrganization", "name": "RamaCare Polyclinic" }
    },
    {
      "@type": "MedicalCondition",
      "@id": "https://ramacarepolyclinic.ae/services/laser-rejuvenation-dubai/#condition",
      "name": "Skin Aging, Texture Irregularities & Pigmentation Concerns",
      "alternateName": "Dull Skin, Fine Lines, Uneven Tone & Texture",
      "url": "https://ramacarepolyclinic.ae/services/laser-rejuvenation-dubai/",
      "description": "Skin concerns such as loss of radiance, uneven texture, fine lines, superficial pigmentation, early signs of aging, and dull complexion benefit from advanced laser rejuvenation therapy.",
      "possibleTreatment": {
        "@type": "MedicalTherapy",
        "name": "Laser Rejuvenation Therapy",
        "description": "Laser rejuvenation therapy uses controlled laser energy to target skin at various depths, stimulating collagen production and improving skin texture, tone, and radiance."
      }
    },
    {
      "@type": "MedicalProcedure",
      "@id": "https://ramacarepolyclinic.ae/services/laser-rejuvenation-dubai/#procedure",
      "name": "Laser Rejuvenation Treatment in Dubai",
      "alternateName": "Skin Rejuvenation Laser Therapy",
      "url": "https://ramacarepolyclinic.ae/services/laser-rejuvenation-dubai/",
      "mainEntityOfPage": "https://ramacarepolyclinic.ae/services/laser-rejuvenation-dubai/",
      "description": "Laser rejuvenation at RamaCare Polyclinic in Dubai is an advanced dermatologic laser procedure designed to improve skin texture, reduce fine lines and superficial pigmentation, and enhance overall skin clarity.",
      "procedureType": "Non-invasive cosmetic laser procedure",
      "howPerformed": "A trained clinician directs controlled laser pulses over the treatment area to remove damaged surface cells, encourage collagen remodeling, and improve evenness of tone.",
      "preparation": "Patients should avoid sun exposure, discontinue harsh exfoliants or retinoids before treatment, and discuss skin sensitivities during consultation.",
      "followup": "Follow-up care includes monitoring skin response, advising on gentle skincare, strict sun protection, and scheduling additional sessions.",
      "indication": [
        "Dull or tired complexion",
        "Superficial pigmentation or sun spots",
        "Fine lines and early signs of aging",
        "Uneven skin texture"
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
    ...(faqSchema ? [faqSchema] : [])
  ];

  return (
    <Layout>
      <Head>
        <title key="title">Laser Rejuvenation in Dubai | RamaCare Polyclinic</title>
        <meta name="description" content="Laser rejuvenation in Dubai helps reduce wrinkles, fine lines, and pigmentation while improving skin texture and glow through safe, expert care." key="description" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Laser Rejuvenation in Dubai | RamaCare Polyclinic" />
        <meta property="og:description" content="Laser rejuvenation in Dubai helps reduce wrinkles, fine lines, and pigmentation while improving skin texture and glow through safe, expert care." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ramacarepolyclinic.ae/services/laser-rejuvenation-dubai/" />
        <meta property="og:image" content="https://ramacarepolyclinic.ae/images/rejuvenation.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Laser Rejuvenation Treatment for youthful skin at RamaCare Polyclinic Dubai" />
        <meta property="og:site_name" content="RamaCare Polyclinic" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Laser Rejuvenation in Dubai | RamaCare Polyclinic" />
        <meta name="twitter:description" content="Laser rejuvenation in Dubai helps reduce wrinkles, fine lines, and pigmentation while improving skin texture and glow through safe, expert care." />
        <meta name="twitter:image" content="https://ramacarepolyclinic.ae/images/rejuvenation.jpg" />

        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": jsonLdGraph
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
       <ContentReviewBadge doctorName="Sonita Sinaga" pageSlug="laser-rejuvenation-dubai" />
    
    <PaymentInsurance content={content?.paymentInsurance} />
      <FAQSection content={content?.faq} />
      <BookConsultation content={content?.bookConsultation} />
    </Layout>
  );
}
