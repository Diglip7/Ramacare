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

  return (
    <Layout>
      <Head>
        <title key="title">Physiotherapy Treatment in Dubai | Trusted Rehab & Pain Care</title>
        <meta name="description" content="Professional physiotherapy treatment in Dubai for pain relief, sports injuries, post-surgery recovery, and rehabilitation with licensed therapists and tailored care." key="description" />
        <meta name="keywords" content="Physiotherapy treatment in Dubai, Best physiotherapy clinic in Dubai, Physiotherapy Dubai near me, Sports injury physiotherapy Dubai, Post surgery physiotherapy in Dubai, Rehabilitation center Dubai, Pain relief physiotherapy Dubai, Licensed physiotherapist Dubai, Physiotherapy clinics in Dubai, Manual therapy Dubai, Back pain physiotherapy Dubai" />



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
      <SEOContentSection title="Leading Physiotherapy Center in Dubai" content={physioSEOContent} />
    </Layout>
  );
}

