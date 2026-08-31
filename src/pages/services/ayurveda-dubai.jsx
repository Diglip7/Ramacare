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

export default function AyurvedaCategoryPage() {
  const content = getCategoryContent('ayurveda');

  const ayurvedaSEOContent = [
    "Experience the profound healing power of traditional Ayurveda in Dubai at RamaCare Polyclinic. Our Ayurveda department is dedicated to restoring balance and harmony to your mind, body, and spirit through authentic therapies and personalized wellness plans. Led by experienced Ayurvedic doctors, we provide a holistic alternative for those seeking natural health solutions in Jumeirah 1.",
    {
      type: "heading",
      text: "Authentic Ayurvedic Therapies in Jumeirah 1"
    },
    "Our clinic offers a wide range of classical Ayurvedic treatments, each tailored to your unique body constitution (Dosha). We focus on identifying the root cause of health issues rather than just managing symptoms.",
    {
      type: "list",
      items: [
        "Panchakarma: Deep detoxification and rejuvenation programs.",
        "Abhyanga: Therapeutic herbal oil massages for relaxation and pain relief.",
        "Shirodhara: Specialized head therapy for stress, sleep, and mental clarity.",
        "Ayurvedic Diet & Lifestyle: Personalized nutrition plans based on your body type.",
        "Chronic Condition Management: Natural support for digestive issues, joint pain, and more."
      ]
    },
    "At RamaCare, we blend the wisdom of ancient traditions with modern medical standards to ensure a safe and effective healing journey. Whether you are looking to detoxify, manage stress, or address a specific health concern, our team is here to guide you toward lasting wellness. Discover authentic Ayurveda in Dubai with us."
  ];

  const medicalBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "RamaCare Polyclinic — Ayurveda Department",
    "description": "Authentic Ayurveda treatment in Dubai offering Panchakarma detox, chronic pain relief, stress management, digestive wellness, hormonal balance, and holistic body-mind rejuvenation, delivered by DHA-licensed Ayurvedic doctors (BAMS/MD).",
    "url": "https://ramacarepolyclinic.ae/services/ayurveda-dubai/",
    "image": "https://ramacarepolyclinic.ae/images/a1.jpg",
    "telephone": "+971566597878",
    "priceRange": "$$",
    "medicalSpecialty": "Ayurveda",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "12 Al Dhiyafah Rd - Jumeirah Terrace Building, Ground Floor",
      "addressLocality": "Jumeirah 1",
      "addressRegion": "Dubai",
      "addressCountry": "AE"
    }
  };

  const faqSchema = content?.faq?.faqs?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
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

  const physicianSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Physician",
      "name": "Dr. Shamna Keloth Meethal",
      "medicalSpecialty": "Ayurveda",
      "url": "https://ramacarepolyclinic.ae/doctors/dr-shamna-keloth-meethal-ayurveda-doctor-dubai/",
      "worksFor": {
        "@type": "MedicalClinic",
        "name": "RamaCare Polyclinic"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Physician",
      "name": "Dr. Syamkumar",
      "medicalSpecialty": "Ayurveda",
      "url": "https://ramacarepolyclinic.ae/doctors/dr-syamkumar-ayurvedic-doctor-dubai/",
      "worksFor": {
        "@type": "MedicalClinic",
        "name": "RamaCare Polyclinic"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Physician",
      "name": "Mariya",
      "medicalSpecialty": "Ayurvedic Therapy",
      "url": "https://ramacarepolyclinic.ae/doctors/mariya-ayurvedic-therapist-dubai/",
      "worksFor": {
        "@type": "MedicalClinic",
        "name": "RamaCare Polyclinic"
      }
    }
  ];

  return (
    <Layout>
      <Head>
        <title key="title">Ayurveda Treatment in Dubai | Best Ayurvedic Clinic & Care</title>
        <meta
          name="description"
          content="Restore health naturally with Ayurveda treatment in Dubai. Personalized herbal therapies, Panchakarma, and holistic care by certified Ayurvedic doctors for wellness."
          key="description"
        />
        <meta
          name="keywords"
          content="Ayurveda treatment Dubai, Ayurvedic clinic Dubai, Ayurvedic doctor in Dubai, Panchakarma treatment in Dubai, Herbal therapy Dubai, Holistic health Dubai, Ayurvedic massage Dubai, Traditional Ayurveda Dubai, Ayurveda wellness Dubai, Dosha balancing treatment, Ayurveda Hospital Dubai, Natural healing Dubai"
          key="keywords"
        />
        <meta name="robots" content="index, follow" key="robots" />
        <link rel="canonical" href="https://ramacarepolyclinic.ae/services/ayurveda-dubai/" key="canonical" />

        {/* Open Graph Tags */}
        <meta property="og:type" content="website" key="og:type" />
        <meta property="og:title" content="Ayurveda Treatment in Dubai | Best Ayurvedic Clinic & Care" key="og:title" />
        <meta
          property="og:description"
          content="Restore health naturally with Ayurveda treatment in Dubai. Personalized herbal therapies, Panchakarma, and holistic care by certified Ayurvedic doctors for wellness."
          key="og:description"
        />
        <meta property="og:url" content="https://ramacarepolyclinic.ae/services/ayurveda-dubai/" key="og:url" />
        <meta property="og:image" content="https://ramacarepolyclinic.ae/images/a1.jpg" key="og:image" />
        <meta property="og:image:width" content="1200" key="og:image:width" />
        <meta property="og:image:height" content="630" key="og:image:height" />
        <meta property="og:site_name" content="RamaCare Polyclinic" key="og:site_name" />
        <meta property="og:locale" content="en_AE" key="og:locale" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content="Ayurveda Treatment in Dubai | Best Ayurvedic Clinic & Care" key="twitter:title" />
        <meta
          name="twitter:description"
          content="Restore health naturally with Ayurveda treatment in Dubai. Personalized herbal therapies, Panchakarma, and holistic care by certified Ayurvedic doctors for wellness."
          key="twitter:description"
        />
        <meta name="twitter:image" content="https://ramacarepolyclinic.ae/images/a1.jpg" key="twitter:image" />

        {/* Structured Data Schemas */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalBusinessSchema) }}
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
        category="ayurveda" 
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
      <ContentReviewBadge doctorName="Dr. Shamna Keloth Meethal" pageSlug="ayurveda-dubai" />
      <FAQSection content={content?.faq} />
       {/* <OurFacilitySection content={content?.facility} /> */}
      <BeginYourHealingJourneySection content={content?.booking} />
      <SEOContentSection title="Authentic Ayurveda Treatment in Dubai" content={ayurvedaSEOContent} />
    </Layout>
  );
}
