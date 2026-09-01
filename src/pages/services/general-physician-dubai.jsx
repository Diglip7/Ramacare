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

export default function GeneralPhysicianDubaiCategoryPage() {
  const content = getCategoryContent('general-physician');

  const CANONICAL_URL = "https://ramacarepolyclinic.ae/services/general-physician-dubai/";
  const PAGE_TITLE = "General Physician in Dubai | RamaCare Polyclinic";
  const PAGE_DESCRIPTION = "General physician treatment covers routine checkups, diagnosis, and care for common illnesses, infections, and chronic conditions with medical guidance.";

  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `${CANONICAL_URL}#breadcrumb`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ramacarepolyclinic.ae/" },
          { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://ramacarepolyclinic.ae/services/" },
          { "@type": "ListItem", "position": 3, "name": "General Physician", "item": CANONICAL_URL }
        ]
      },
      {
        "@type": "MedicalBusiness",
        "@id": `${CANONICAL_URL}#business`,
        "name": "General Physician Services",
        "description": "Comprehensive primary healthcare in Dubai including diagnosis, chronic disease management, acute illness treatment, and preventive health checkups by DHA-licensed general physicians.",
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
        "areaServed": { "@type": "City", "name": "Dubai" }
      },
      {
        "@type": "Physician",
        "@id": `${CANONICAL_URL}#physician`,
        "name": "Dr. Sahar Zomorrodi",
        "medicalSpecialty": "General Practice",
        "honorificSuffix": "MD",
        "hasCredential": "DHA Licensed General Practitioner",
        "url": "https://ramacarepolyclinic.ae/doctors/dr-sahar-zomorrodi-general-practitioner-dubai/",
        "worksFor": {
          "@type": "MedicalOrganization",
          "name": "RamaCare Polyclinic"
        }
      },
      {
        "@type": "FAQPage",
        "@id": `${CANONICAL_URL}#faq`,
        "mainEntity": (content?.faq?.faqs || []).map((f) => ({
          "@type": "Question",
          "name": f.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.answer
          }
        }))
      }
    ]
  };

  const gpSEOContent = [
    "Your health is in good hands with our expert general physicians in Dubai at RamaCare Polyclinic. Our primary care department in Jumeirah 1 is dedicated to providing comprehensive medical services for patients of all ages. Whether you need a routine checkup, management of a chronic condition, or treatment for an acute illness, our DHA-licensed doctors are here to provide personalized and compassionate care.",
    {
      type: "heading",
      text: "Comprehensive Primary Healthcare in Jumeirah 1"
    },
    "We focus on preventive medicine and early diagnosis to help you maintain optimal health. Our physicians take the time to listen to your concerns and develop effective treatment plans.",
    {
      type: "list",
      items: [
        "Routine Health Checkups: Comprehensive assessments for overall well-being.",
        "Chronic Disease Management: Expert care for hypertension, diabetes, and more.",
        "Acute Illness Treatment: Fast and effective care for infections, fevers, and minor injuries.",
        "Vaccinations & Immunizations: Protecting you and your family from preventable diseases.",
        "Health Counseling: Expert advice on nutrition, lifestyle, and stress management."
      ]
    },
    "At RamaCare, we believe in building long-term relationships with our patients based on trust and professional excellence. Our polyclinic is equipped with modern diagnostic tools to ensure accurate assessments and the best possible outcomes. Experience high-quality primary healthcare in Dubai with RamaCare Polyclinic. Book your consultation today."
  ];

  return (
    <Layout>
      <Head>
        <title key="title">{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_DESCRIPTION} key="description" />
        <meta name="keywords" content="General physician treatment, General physician care, Primary care doctor, Family medicine treatment, Routine health checkup, Diagnosis and treatment clinic, Chronic disease management, Common illness treatment, Preventive health care, Medical consultation services" />
        <meta name="robots" content="index, follow" key="robots" />
        <link rel="canonical" href={CANONICAL_URL} key="canonical" />

        {/* Open Graph Tags */}
        <meta property="og:type" content="website" key="og:type" />
        <meta property="og:title" content={PAGE_TITLE} key="og:title" />
        <meta property="og:description" content={PAGE_DESCRIPTION} key="og:description" />
        <meta property="og:url" content={CANONICAL_URL} key="og:url" />
        <meta property="og:image" content="https://ramacarepolyclinic.ae/images/gp.jpg" key="og:image" />
        <meta property="og:image:width" content="1200" key="og:image:width" />
        <meta property="og:image:height" content="630" key="og:image:height" />
        <meta property="og:site_name" content="RamaCare Polyclinic" key="og:site_name" />
        <meta property="og:locale" content="en_AE" key="og:locale" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content={PAGE_TITLE} key="twitter:title" />
        <meta name="twitter:description" content="General physician treatment covers routine checkups, diagnosis, and care for common illnesses and chronic conditions." key="twitter:description" />
        <meta name="twitter:image" content="https://ramacarepolyclinic.ae/images/gp.jpg" key="twitter:image" />

        {/* Structured Data Schemas */}
        <script
          key="schema-graph"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
        />
      </Head>

      <HeroSection content={content?.hero} />
      <WhyChooseUsSection content={content?.whyChooseUs} />
      <AboutAyurvedaSection content={content?.about} />
      <TreatmentSection 
        category="general-physician" 
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
      <ContentReviewBadge doctorName="Dr. Sahar Zomorrodi" pageSlug="general-physician-dubai" />
      <FAQSection content={content?.faq} />
       {/* <OurFacilitySection content={content?.facility} /> */}
      <BeginYourHealingJourneySection content={content?.booking} />
      <SEOContentSection title="Expert General Physician Services in Dubai" content={gpSEOContent} />
    </Layout>
  );
}

