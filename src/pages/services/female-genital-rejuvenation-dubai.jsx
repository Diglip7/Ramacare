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


export default function FemaleGenitalRejuvenationPage() {
  const categoryName = 'Aesthetic Dermatology';
  const subcategoryName = 'Female Genital Rejuvenation';

  // Get content from data file - nested path
  const content = getSubcategoryContent('aesthetic-dermatology-dubai', 'laser-treatment/female-genital-rejuvenation');
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
        "@id": "https://ramacarepolyclinic.ae/services/female-genital-rejuvenation-dubai/#faq",
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
      "@id": "https://ramacarepolyclinic.ae/services/female-genital-rejuvenation-dubai/#webpage",
      "url": "https://ramacarepolyclinic.ae/services/female-genital-rejuvenation-dubai/",
      "name": "Female Genital Rejuvenation in Dubai | RamaCare Polyclinic",
      "description": "Female genital rejuvenation restores vaginal health, tightness, and comfort using safe, minimally invasive treatments under expert medical supervision.",
      "medicalAudience": { "@type": "Patient" },
      "about": { "@type": "MedicalProcedure", "name": "Female Genital Rejuvenation" },
      "reviewedBy": { "@id": "https://ramacarepolyclinic.ae/services/female-genital-rejuvenation-dubai/#physician" },
      "publisher": {
        "@type": "MedicalOrganization",
        "name": "RamaCare Polyclinic",
        "url": "https://ramacarepolyclinic.ae/"
      }
    },
    {
      "@type": "Physician",
      "@id": "https://ramacarepolyclinic.ae/services/female-genital-rejuvenation-dubai/#physician",
      "name": "Dr. Sahar Zomorrodi",
      "medicalSpecialty": "General Practice",
      "honorificSuffix": "MD",
      "hasCredential": "DHA Licensed General Practitioner",
      "url": "https://ramacarepolyclinic.ae/doctors/dr-sahar-zomorrodi-general-practitioner-dubai/",
      "worksFor": { "@type": "MedicalOrganization", "name": "RamaCare Polyclinic" }
    },
    {
      "@type": "MedicalCondition",
      "@id": "https://ramacarepolyclinic.ae/services/female-genital-rejuvenation-dubai/#condition",
      "name": "Female Genital Laxity, Discomfort & Aesthetic Concerns",
      "alternateName": "Vaginal Laxity, Pelvic Floor Weakness & Genital Aesthetic Concerns",
      "url": "https://ramacarepolyclinic.ae/services/female-genital-rejuvenation-dubai/",
      "description": "Female genital laxity, vaginal looseness, discomfort during intercourse, urinary leakage, and aesthetic concerns of the external genitalia can occur due to aging, childbirth, hormonal changes, or other pelvic floor weakening factors.",
      "possibleTreatment": {
        "@type": "MedicalTherapy",
        "name": "Genital Rejuvenation Therapy",
        "description": "Genital rejuvenation therapy uses non-surgical or minimally invasive medical techniques — such as focused energy devices, laser therapy, or injectables — to tighten, tone, and improve the functional and aesthetic condition of the vaginal and external genital tissues."
      }
    },
    {
      "@type": "MedicalProcedure",
      "@id": "https://ramacarepolyclinic.ae/services/female-genital-rejuvenation-dubai/#procedure",
      "name": "Female Genital Rejuvenation in Dubai",
      "alternateName": "Vaginal Tightening & Aesthetic Genital Therapy",
      "url": "https://ramacarepolyclinic.ae/services/female-genital-rejuvenation-dubai/",
      "mainEntityOfPage": "https://ramacarepolyclinic.ae/services/female-genital-rejuvenation-dubai/",
      "description": "Female genital rejuvenation at RamaCare Polyclinic in Dubai is a customized medical or aesthetic procedure aimed at improving genital laxity, enhancing tissue tone and elasticity, and addressing functional or cosmetic concerns of the vaginal and external genital region.",
      "procedureType": "Minimally invasive pelvic floor and aesthetic therapy",
      "howPerformed": "After a clinical consultation and assessment of individual anatomy and goals, a trained clinician uses non-surgical technologies such as fractional laser, radiofrequency, or energy-based devices to stimulate tissue remodeling, collagen production, and tightening of the vaginal and external genital tissues.",
      "preparation": "Patients should provide a complete medical and gynecologic history, discuss any medications, hormonal therapies, or recent treatments, and follow clinician instructions for pre-procedure hygiene.",
      "followup": "Follow-up care typically includes monitoring outcomes, scheduling maintenance sessions if needed, and providing guidance on pelvic floor exercises, topical care, and activity restrictions.",
      "indication": [
        "Vaginal laxity or looseness",
        "Decreased sensation during intercourse",
        "Mild stress urinary leakage",
        "External genital aesthetic concerns",
        "Post-childbirth pelvic floor weakening"
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
        <title key="title">Female Genital Rejuvenation in Dubai | RamaCare Polyclinic</title>
        <meta name="description" content="Female genital rejuvenation restores vaginal health, tightness, and comfort using safe, minimally invasive treatments under expert medical supervision." key="description" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Female Genital Rejuvenation in Dubai | RamaCare Polyclinic" />
        <meta property="og:description" content="Female genital rejuvenation restores vaginal health, tightness, and comfort using safe, minimally invasive treatments under expert medical supervision." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ramacarepolyclinic.ae/services/female-genital-rejuvenation-dubai/" />
        <meta property="og:image" content="https://ramacarepolyclinic.ae/images/female-genital-rejuvenation-dubai.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Female Genital Rejuvenation Treatment at RamaCare Polyclinic Dubai" />
        <meta property="og:site_name" content="RamaCare Polyclinic" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Female Genital Rejuvenation in Dubai | RamaCare Polyclinic" />
        <meta name="twitter:description" content="Female genital rejuvenation restores vaginal health, tightness, and comfort using safe, minimally invasive treatments under expert medical supervision." />
        <meta name="twitter:image" content="https://ramacarepolyclinic.ae/images/female-genital-rejuvenation-dubai.jpg" />

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
       <ContentReviewBadge doctorName="Dr. Sahar Zomorrodi" pageSlug="female-genital-rejuvenation-dubai" />
    
    <PaymentInsurance content={content?.paymentInsurance} />
      <FAQSection content={content?.faq} />
      <BookConsultation content={content?.bookConsultation} />
    </Layout>
  );
}
