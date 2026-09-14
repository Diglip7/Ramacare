import Layout from "../../../components/Layout";
import ContentReviewBadge from "../../../components/ContentReviewBadge";
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
import { getCategoryContent } from "../../data/categoryContent";

export default function physiotherapydubaiCategoryPage() {
  const content = getCategoryContent('physiotherapy');
  const physioSEOContent = [
    "RamaCare Polyclinic provides physiotherapy and rehabilitation services in Jumeirah 1, Dubai. Patients can receive an individual assessment for pain, stiffness, reduced mobility, sports injuries, posture-related concerns and rehabilitation needs.",
    "Depending on the assessment, physiotherapy may include therapeutic exercise, manual therapy, dry needling, electrotherapy and other rehabilitation techniques.",
    "The clinic is located on Al Dhiyafah Road in Jumeirah 1, making it convenient for patients looking for physiotherapy near Jumeirah, Al Satwa and surrounding Dubai areas.",
    "Treatment recommendations depend on the patient’s condition and clinical assessment."
  ];

  const faqsForSchema = (content?.faq?.faqs || []).map(faq => ({
    question: faq.question,
    answer: faq.answer
  }));

  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": "https://ramacarepolyclinic.ae/services/physiotherapy-dubai/#webpage",
        "url": "https://ramacarepolyclinic.ae/services/physiotherapy-dubai/",
        "name": "Physiotherapy in Dubai | RamaCare Polyclinic",
        "description": "Get personalised physiotherapy and rehabilitation in Jumeirah 1, Dubai. RamaCare offers manual therapy, exercise therapy, dry needling, electrotherapy and more.",
        "inLanguage": "en",
        "isPartOf": {
          "@type": "WebSite",
          "url": "https://ramacarepolyclinic.ae/",
          "name": "RamaCare Polyclinic"
        },
        "about": {
          "@type": "MedicalBusiness",
          "name": "RamaCare Polyclinic - Physiotherapy & Rehabilitation",
          "url": "https://ramacarepolyclinic.ae/services/physiotherapy-dubai/",
          "telephone": "+971566597878",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "12 Al Dhiyafah Rd - Jumeirah Terrace Building, Ground Floor",
            "addressLocality": "Jumeirah 1",
            "addressRegion": "Dubai",
            "addressCountry": "AE"
          }
        },
        "reviewedBy": {
          "@type": "Person",
          "name": "Jeena Mathew",
          "jobTitle": "DHA-Licensed Physiotherapist",
          "url": "https://ramacarepolyclinic.ae/doctors/jeena-mathew-physiotherapist-dubai/"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ramacarepolyclinic.ae/services/physiotherapy-dubai/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://ramacarepolyclinic.ae/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://ramacarepolyclinic.ae/services/"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Physiotherapy in Dubai",
            "item": "https://ramacarepolyclinic.ae/services/physiotherapy-dubai/"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://ramacarepolyclinic.ae/services/physiotherapy-dubai/#faq",
        "mainEntity": faqsForSchema.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }
    ]
  };

  return (
    <Layout>
      <Head>
        <title key="title">Physiotherapy in Dubai | RamaCare Polyclinic</title>
        <meta name="description" content="Get personalised physiotherapy and rehabilitation in Jumeirah 1, Dubai. RamaCare offers manual therapy, exercise therapy, dry needling, electrotherapy and more." key="description" />
        <meta name="keywords" content="physiotherapy in Dubai, physiotherapy in Jumeirah 1, physiotherapy clinic in Dubai, physiotherapy Jumeirah, physiotherapy and rehabilitation, sports injury rehabilitation, back pain physiotherapy, neck pain physiotherapy, knee rehabilitation, physiotherapy assessment" key="keywords" />
        <meta name="robots" content="index, follow" key="robots" />
        <link rel="canonical" href="https://ramacarepolyclinic.ae/services/physiotherapy-dubai/" key="canonical" />

        {/* Open Graph Tags */}
        <meta property="og:type" content="article" key="og:type" />
        <meta property="og:title" content="Physiotherapy in Dubai | RamaCare Polyclinic" key="og:title" />
        <meta property="og:description" content="Get personalised physiotherapy and rehabilitation in Jumeirah 1, Dubai. RamaCare offers manual therapy, exercise therapy, dry needling, electrotherapy and more." key="og:description" />
        <meta property="og:url" content="https://ramacarepolyclinic.ae/services/physiotherapy-dubai/" key="og:url" />
        <meta property="og:image" content="https://ramacarepolyclinic.ae/images/phy3.jpg" key="og:image" />
        <meta property="og:image:width" content="1200" key="og:image:width" />
        <meta property="og:image:height" content="630" key="og:image:height" />
        <meta property="og:site_name" content="RamaCare Polyclinic" key="og:site_name" />
        <meta property="og:locale" content="en_AE" key="og:locale" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content="Physiotherapy in Dubai | RamaCare Polyclinic" key="twitter:title" />
        <meta name="twitter:description" content="Get personalised physiotherapy and rehabilitation in Jumeirah 1, Dubai. RamaCare offers manual therapy, exercise therapy, dry needling, electrotherapy and more." key="twitter:description" />
        <meta name="twitter:image" content="https://ramacarepolyclinic.ae/images/phy3.jpg" key="twitter:image" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaGraph)
          }}
        />
      </Head>

      <HeroSection content={content?.hero} />
      <WhyChooseUsSection content={content?.whyChooseUs} />
      <AboutAyurvedaSection content={content?.about} />
      <TreatmentSection
        category="physiotherapy"
        content={{
          ...content?.treatments,
          consultationHeading: content?.treatments?.consultationCTA?.heading,
          consultationSubtext: content?.treatments?.consultationCTA?.subtext,
        }}
      />
      <ProgramsSection content={content?.programs} />
      <ExpertsSection content={content?.experts} />
      <PatientTestimonials content={content?.successStories} />
      <WhyAyurvedaDubaiSection content={content?.whyDubai} />
      <FAQSection content={content?.faq} />
      {/* <OurFacilitySection content={content?.facility} /> */}
      <BeginYourHealingJourneySection content={content?.booking} />
      <ContentReviewBadge 
        doctorName="Jeena Mathew" 
        doctorRole="DHA Licensed Physiotherapist"
        doctorCredentials="BPT, MPT (Physiotherapy) · DHA Licensed Physiotherapist"
        pageSlug="physiotherapy-dubai" 
        customStatement="This page has been reviewed for general physiotherapy and rehabilitation information. Individual treatment recommendations depend on a patient’s symptoms, medical history, physical assessment and rehabilitation goals."
      />
      <SEOContentSection title="Physiotherapy in Jumeirah 1, Dubai" content={physioSEOContent} />
    </Layout>
  );
}

