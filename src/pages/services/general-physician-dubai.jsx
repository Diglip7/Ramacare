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

export default function generalphysiciandubaiCategoryPage() {
  const content = getCategoryContent('general-physician');
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
        <title key="title">General Physician Treatment for Everyday Health Care</title>
        <meta name="description" content="General physician treatment covers routine checkups, diagnosis, and care for common illnesses, infections, and chronic conditions with medical guidance." key="description" />
        <meta name="keywords" content="General physician treatment, General physician care, Primary care doctor, Family medicine treatment, Routine health checkup, Diagnosis and treatment clinic, Chronic disease management, Common illness treatment, Preventive health care, Medical consultation services" />
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
