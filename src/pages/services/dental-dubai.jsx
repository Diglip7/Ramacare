import Layout from "../../../components/Layout";
import Head from "next/head";
import HeroSection from "../../../components/HeroSection";
import WhyChooseUsSection from "../../../components/WhyChooseUsSection";
import AboutAyurvedaSection from "../../../components/AboutAyurvedaSection";
import TreatmentSection from "../../../components/TreatmentSection";
import ProgramsSection from "../../../components/ProgramsSection";
import ExpertsSection from "../../../components/ExpertsSection";
import PatientTestimonials from "../../../components/PatientTestimonials";
import WhyAyurvedaDubaiSection from "../../../components/WhyAyurvedaDubaiSection";
import FAQSection from "../../../components/FAQSection";
// import OurFacilitySection from "../../../components/OurFacilitySection";
import BeginYourHealingJourneySection from "../../../components/BeginYourHealingJourneySection";
import SEOContentSection from "../../../components/SEOContentSection";
import ContentReviewBadge from "../../../components/ContentReviewBadge";
import { getCategoryContent } from "../../data/categoryContent";

export default function dentaldubaiCategoryPage() {
  const content = getCategoryContent('dental');


  const medicalProcedureSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Dental Treatment",
    "description": "Comprehensive dental care in Dubai including cosmetic dentistry, veneers, teeth whitening, implants, braces, root canal treatment, and smile makeovers by DHA-licensed dentists.",
    "provider": {
      "@type": "MedicalClinic",
      "name": "RamaCare Polyclinic",
      "url": "https://ramacarepolyclinic.ae/",
      "telephone": "+971566597878",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "12 Al Dhiyafah Rd, Jumeirah Terrace Building, Ground Floor",
        "addressLocality": "Jumeirah 1, Dubai",
        "addressCountry": "AE"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": "Dubai"
    }
  };

  // Fetch FAQs dynamically from page content
  const faqSchema = content?.faq?.faqs?.length
    ? {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": content.faq.faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    }
    : null;

  const physicianSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Physician",
      "name": "Dr. Hirbod Gilandoust",
      "medicalSpecialty": "Esthetic Dentistry & Dental Surgery",
      "url": "https://ramacarepolyclinic.ae/doctors/dr-hirbod-gilandoust-dentist-dubai/",
      "worksFor": {
        "@type": "MedicalClinic",
        "name": "RamaCare Polyclinic"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Physician",
      "name": "Dr. Aparna Balakrishnan",
      "medicalSpecialty": "Cosmetic Dentistry",
      "url": "https://ramacarepolyclinic.ae/doctors/dr-aparna-balakrishnan-cosmetic-dentist-dubai/",
      "worksFor": {
        "@type": "MedicalClinic",
        "name": "RamaCare Polyclinic"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Physician",
      "name": "Soumya Abraham",
      "medicalSpecialty": "DHA Licensed Nurse",
      "url": "https://ramacarepolyclinic.ae/doctors/soumya-abraham-dha-licensed-nurse-dubai/",
      "worksFor": {
        "@type": "MedicalClinic",
        "name": "RamaCare Polyclinic"
      }
    }
  ];

  const dentalSEOContent = [
    "At RamaCare Polyclinic, we provide world-class dental care in Dubai, ensuring that our patients achieve and maintain healthy, beautiful smiles. Our dental department in Jumeirah 1 offers a comprehensive range of services, from routine preventive care to advanced cosmetic enhancements. Our team of experienced dentists is committed to delivering gentle, professional care in a comfortable environment.",
    {
      type: "heading",
      text: "Comprehensive Dental Solutions in Jumeirah 1"
    },
    "Whether you need a simple checkup or a complete smile makeover, we utilize modern dental technology and high-quality materials to ensure the best outcomes for your oral health.",
    {
      type: "list",
      items: [
        "Cosmetic Dentistry: Veneers, composite bonding, and teeth whitening for a perfect smile.",
        "Restorative Treatments: Root canal therapy, dental crowns, and bridges to restore function.",
        "Preventive Care: Professional scaling, polishing, and routine oral health assessments.",
        "Orthodontics: Braces and aligners for proper tooth alignment.",
        "Family Dentistry: Gentle dental care for patients of all ages, including children."
      ]
    },
    "We believe that a healthy smile is the foundation of overall well-being. At RamaCare, we take the time to explain your options and create a customized treatment plan that fits your needs and budget. Experience the best in dental care in Dubai at RamaCare Polyclinic. Book your appointment today."
  ];

  return (
    <Layout>
      <Head>
        <title key="title">Best Dental Clinic in Dubai | Expert Dentists & Care</title>
        <meta
          name="description"
          content="Receive expert dental care at the best dental clinic in Dubai. Safe, personalized treatments for teeth whitening, veneers, implants, braces, and smile makeovers."
          key="description"
        />
        <meta
          name="keywords"
          content="Best Dental clinic in Dubai, Dentist in Dubai, Dental treatment in Dubai, Cosmetic dentistry Dubai, Teeth whitening in Dubai, Dental veneers Dubai, Dental implants Dubai, Braces treatment in Dubai, Smile makeover Dubai, Family dentistry Dubai, DHA-licensed dentist in Dubai, Top dentist Dubai"
          key="keywords"
        />
        <meta name="robots" content="index, follow" key="robots" />
        <link rel="canonical" href="https://ramacarepolyclinic.ae/services/dental-dubai/" key="canonical" />

        {/* Open Graph Tags */}
        <meta property="og:type" content="website" key="og:type" />
        <meta property="og:title" content="Best Dental Clinic in Dubai | Expert Dentists & Care" key="og:title" />
        <meta
          property="og:description"
          content="Receive expert dental care at the best dental clinic in Dubai. Safe, personalized treatments for teeth whitening, veneers, implants, braces, and smile makeovers."
          key="og:description"
        />
        <meta property="og:url" content="https://ramacarepolyclinic.ae/services/dental-dubai/" key="og:url" />
        <meta property="og:image" content="https://ramacarepolyclinic.ae/images/d1.jpg" key="og:image" />
        <meta property="og:image:width" content="1200" key="og:image:width" />
        <meta property="og:image:height" content="630" key="og:image:height" />
        <meta property="og:site_name" content="RamaCare Polyclinic" key="og:site_name" />
        <meta property="og:locale" content="en_AE" key="og:locale" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content="Best Dental Clinic in Dubai | Expert Dentists & Care" key="twitter:title" />
        <meta
          name="twitter:description"
          content="Receive expert dental care at the best dental clinic in Dubai. Personalized treatments for teeth whitening, veneers, implants, braces & smile makeovers."
          key="twitter:description"
        />
        <meta name="twitter:image" content="https://ramacarepolyclinic.ae/images/d1.jpg" key="twitter:image" />

        {/* Structured Data Schemas */}
      
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalProcedureSchema) }}
        />
        {faqSchema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          />
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianSchema) }}
        />
      </Head>

      <HeroSection content={content?.hero} />
      <WhyChooseUsSection content={content?.whyChooseUs} />
      <AboutAyurvedaSection content={content?.about} />
      <TreatmentSection
        category="dental"
        content={{
          ...content?.treatments,
          consultationHeading: content?.treatments?.consultationCTA?.heading,
          consultationSubtext: content?.treatments?.consultationCTA?.subtext,
          consultationButtonText: content?.treatments?.consultationCTA?.buttonText,
          consultationBgColor: content?.treatments?.consultationCTA?.backgroundColor,
          consultationButtonColor: content?.treatments?.consultationCTA?.buttonColor
        }}
      />
      <ProgramsSection content={content?.programs} />
      <ExpertsSection content={content?.experts} />
      <PatientTestimonials content={content?.successStories} />
      <WhyAyurvedaDubaiSection content={content?.whyDubai} />
      <ContentReviewBadge doctorName="Dr. Hirbod Gilandoust" pageSlug="dental-dubai" />
      <FAQSection content={content?.faq} />
      {/* <OurFacilitySection content={content?.facility} /> */}
      <BeginYourHealingJourneySection content={content?.booking} />
      <SEOContentSection title="Premium Dental Care in Dubai" content={dentalSEOContent} />
    </Layout>
  );
}
