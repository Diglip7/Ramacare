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
  <title key="title">Best dental Clinic in Dubai | Expert Dentists & Care</title>
  <meta name="description" content="Receive expert dental care at the best dental clinic in Dubai. Safe, personalized treatments for teeth whitening, veneers, implants, braces, and smile makeovers." key="description" />
  <meta name="keywords" content="Best dental clinic in Dubai, Dentist in Dubai, dental treatment in Dubai, Cosmetic dentistry Dubai, Teeth whitening in Dubai, dental veneers Dubai, dental implants Dubai, Braces treatment in Dubai, Smile makeover Dubai, Family dentistry Dubai, DHA-licensed dentist in Dubai, Top dentist Dubai" />
  
  
        
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

