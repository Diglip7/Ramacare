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
    "Recover your mobility and live pain-free with expert physiotherapy in Dubai at RamaCare Polyclinic. Our specialized physiotherapy department in Jumeirah 1 offers advanced rehabilitation services for a wide range of musculoskeletal and neurological conditions. Our DHA-licensed physiotherapists use evidence-based techniques and personalized treatment plans to help you achieve your recovery goals.",
    {
      type: "heading",
      text: "Advanced Rehabilitation Services in Jumeirah 1"
    },
    "Whether you are recovering from surgery, managing chronic pain, or seeking to improve your athletic performance, we provide focused care designed to restore function and improve your quality of life.",
    {
      type: "list",
      items: [
        "Manual Therapy: Hands-on techniques to mobilize joints and soft tissues.",
        "Sports Injury Rehab: Specialized care for athletes to get back in the game safely.",
        "Post-Operative Rehabilitation: Personalized plans to ensure optimal recovery after surgery.",
        "Pain Management: Effective strategies for back pain, neck pain, and joint issues.",
        "Posture Correction: Expert guidance to improve ergonomics and prevent future injuries."
      ]
    },
    "At RamaCare, we utilize modern equipment and therapeutic exercises to deliver lasting results. We take a holistic approach to rehabilitation, addressing the underlying causes of your pain to prevent recurrence. Experience the highest standard of physiotherapy care in Dubai. Book your free consultation with our specialists today."
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
        "name": "Physiotherapy Treatment in Dubai | Trusted Rehab & Pain Care",
        "description": "Professional physiotherapy treatment in Dubai for pain relief, sports injuries, post-surgery recovery, and rehabilitation with licensed therapists and tailored care.",
        "inLanguage": "en",
        "isPartOf": {
          "@type": "WebSite",
          "url": "https://ramacarepolyclinic.ae/",
          "name": "RamaCare Polyclinic"
        },
        "about": {
          "@type": "MedicalCondition",
          "name": "Musculoskeletal and Neurological Rehabilitation"
        },
        "reviewedBy": {
          "@type": "Person",
          "name": "Jeena Mathew",
          "jobTitle": "Musculoskeletal Physiotherapy Specialist",
          "url": "https://ramacarepolyclinic.ae/doctors/jeena-mathew-physiotherapist-dubai/"
        },
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ramacarepolyclinic.ae/" },
            { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://ramacarepolyclinic.ae/services/" },
            { "@type": "ListItem", "position": 3, "name": "Physiotherapy Treatment", "item": "https://ramacarepolyclinic.ae/services/physiotherapy-dubai/" }
          ]
        }
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
        <title key="title">Physiotherapy Treatment in Dubai | Trusted Rehab & Pain Care</title>
        <meta name="description" content="Professional physiotherapy treatment in Dubai for pain relief, sports injuries, post-surgery recovery, and rehabilitation with licensed therapists and tailored care." key="description" />
        <meta name="keywords" content="Physiotherapy treatment in Dubai, Best physiotherapy clinic in Dubai, Physiotherapy Dubai near me, Sports injury physiotherapy Dubai, Post surgery physiotherapy in Dubai, Rehabilitation center Dubai, Pain relief physiotherapy Dubai, Licensed physiotherapist Dubai, Physiotherapy clinics in Dubai, Manual therapy Dubai, Back pain physiotherapy Dubai" key="keywords" />
        <meta name="robots" content="index, follow" key="robots" />
        <link rel="canonical" href="https://ramacarepolyclinic.ae/services/physiotherapy-dubai/" key="canonical" />

        {/* Open Graph Tags */}
        <meta property="og:type" content="article" key="og:type" />
        <meta property="og:title" content="Physiotherapy Treatment in Dubai | Trusted Rehab & Pain Care" key="og:title" />
        <meta property="og:description" content="Professional physiotherapy treatment in Dubai for pain relief, sports injuries, post-surgery recovery, and rehabilitation with licensed therapists and tailored care." key="og:description" />
        <meta property="og:url" content="https://ramacarepolyclinic.ae/services/physiotherapy-dubai/" key="og:url" />
        <meta property="og:image" content="https://ramacarepolyclinic.ae/images/phy3.jpg" key="og:image" />
        <meta property="og:image:width" content="1200" key="og:image:width" />
        <meta property="og:image:height" content="630" key="og:image:height" />
        <meta property="og:site_name" content="RamaCare Polyclinic" key="og:site_name" />
        <meta property="og:locale" content="en_AE" key="og:locale" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content="Physiotherapy Treatment in Dubai | Trusted Rehab & Pain Care" key="twitter:title" />
        <meta name="twitter:description" content="Professional physiotherapy for pain relief, sports injuries, and post-surgery recovery with DHA-licensed therapists in Jumeirah 1, Dubai." key="twitter:description" />
        <meta name="twitter:image" content="https://ramacarepolyclinic.ae/images/phy3.jpg" key="twitter:image" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaGraph)
          }}
        />
      </Head>

      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-100 py-3">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-y-1 text-xs sm:text-sm font-semibold text-[#5F5F5F]">
            <a href="/" className="hover:text-[#1F5E4B] transition-colors">Home</a>
            <span className="mx-2 text-gray-300">/</span>
            <a href="/services/" className="hover:text-[#1F5E4B] transition-colors">Services</a>
            <span className="mx-2 text-gray-300">/</span>
            <span className="text-gray-400">Physiotherapy Treatment</span>
          </nav>
        </div>
      </div>

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
      <ContentReviewBadge doctorName="Jeena Mathew" pageSlug="physiotherapy-dubai" />
      <SEOContentSection title="Leading Physiotherapy Center in Dubai" content={physioSEOContent} />
    </Layout>
  );
}

