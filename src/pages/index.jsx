import Layout from "../../components/Layout";
import Script from "next/script";
import Head from "next/head";
import HeroSection from "../../components/HeroSection";
import WhyChooseUsSection from "../../components/WhyChooseUsSection";
import AboutAyurvedaSection from "../../components/AboutAyurvedaSection";
import TreatmentSection from "../../components/TreatmentSection";
import ProgramsSection from "../../components/ProgramsSection";
import ExpertsSection from "../../components/ExpertsSection";
import PatientTestimonials from "../../components/PatientTestimonials";
import WhyAyurvedaDubaiSection from "../../components/WhyAyurvedaDubaiSection";
import FAQSection from "../../components/FAQSection";
// import OurFacilitySection from "../../components/OurFacilitySection";
import BeginYourHealingJourneySection from "../../components/BeginYourHealingJourneySection";
import SEOContentSection from "../../components/SEOContentSection";

export default function Home() {
  const homeSEOContent = [
    "RamaCare Polyclinic is your premier destination for high-quality healthcare in Dubai. Located in the heart of Jumeirah 1, our DHA-licensed medical center is dedicated to providing comprehensive medical services that cater to the diverse needs of our patients. We believe in a holistic approach to healing, combining the wisdom of traditional Ayurveda with the precision of modern medicine.",
    {
      type: "heading",
      text: "Comprehensive Medical Services in Jumeirah 1"
    },
    "Our polyclinic offers a wide range of specialized treatments, ensuring that you and your family receive the best possible care under one roof. Whether you are seeking physiotherapy in Dubai for pain management, advanced dental care for a perfect smile, or expert dermatology services for healthy skin, our team of experienced doctors is here to support you.",
    {
      type: "list",
      items: [
        "Expert Ayurveda Treatments: Authentic healing for mind and body balance.",
        "Advanced Physiotherapy: Helping you move better and live pain-free with personalized rehab plans.",
        "Dermatology & Skin Care: Specialized treatments for acne, pigmentation, and anti-aging.",
        "Premium Dental Services: Complete oral healthcare from routine checkups to cosmetic dentistry.",
        "General Physician Consultations: Primary care for everyday health and chronic condition management."
      ]
    },
    {
      type: "heading",
      text: "Why Choose RamaCare Polyclinic Dubai?"
    },
    "Choosing the right polyclinic in Dubai is crucial for your health journey. At RamaCare, we prioritize patient satisfaction and ethical medical practices. Our facility is equipped with modern medical technology, and our DHA-licensed specialists are committed to delivering results-oriented care. We understand that every patient is unique, which is why we create customized wellness plans tailored to your specific health goals.",
    "Visit us in Jumeirah 1 today and experience a new standard of healthcare. From our welcoming environment to our professional medical team, we are dedicated to helping you achieve and maintain optimal health. Book your free consultation now and take the first step toward a healthier, happier life."
  ];

  return (
    <Layout>
      <Head>
        <title key="title">Polyclinic in Dubai | Multispecialty Healthcare | RamaCare</title>
       <meta name="description" content=" Looking for a polyclinic in Dubai? RamaCare offers Ayurveda, physiotherapy & skin treatments in Jumeirah with expert doctors. Book your consultation today." key="description" />
       <meta name="msvalidate.01" content="FB6C6318BA274AFF1EA6E095977EA143" />
       <meta name="keywords" content="RamaCare Polyclinic Dubai, Polyclinic in Dubai, Trusted polyclinic in Dubai, Multi-Specialty Clinic Dubai, Medical clinic Dubai, DHA licensed polyclinic, Family healthcare Dubai, Affordable healthcare Dubai, Polyclinic in Jumeirah 1, Medical clinic Jumeirah 1, Best Polyclinic in Jumeirah 1" />
       <meta name="google-site-verification" content="VRn7pg1rACQOgcGV13YChuu05_Iu__0QVLXrw9dNGCc" /> 

       
       <script type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify([
      {
        "@context": "https://schema.org",
        "@type": ["MedicalClinic", "LocalBusiness"],
        "@id": "https://ramacarepolyclinic.ae/#organization",
        "name": "RamaCare Polyclinic",
        "alternateName": "Rama Care Polyclinic Dubai",
        "url": "https://ramacarepolyclinic.ae/",
        "logo": "https://ramacarepolyclinic.ae/images/Logo.png",
        "image": "https://ramacarepolyclinic.ae/images/Logo.png",
        "description": "DHA-licensed multi-specialty polyclinic in Jumeirah 1, Dubai offering expert care in Dermatology, Dental, Physiotherapy, and Ayurveda.",
        "telephone": "+971566597878",
        "email": "query@ramacarepolyclinic.com",
        "priceRange": "$$",
        "openingHours": "Mo-Su 10:00-22:00",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "12 Al Dhiyafah Rd - Jumeirah Terrace Building, Ground Floor, Jumeirah 1",
          "addressLocality": "Dubai",
          "postalCode": "393558",
          "addressCountry": "AE"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "25.2345",
          "longitude": "55.2712"
        },
        "areaServed": {
          "@type": "City",
          "name": "Dubai"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "542",
          "bestRating": "5",
          "worstRating": "1"
        },
        "medicalSpecialty": [
          "General Medicine",
          "Dermatology",
          "Dental Care",
          "Physiotherapy",
          "Ayurveda"
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What services do you offer at RamaCare Polyclinic?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We provide a wide range of healthcare services, including general medicine, dermatology, dental care, physiotherapy, Ayurveda, and facial treatments—all under one roof in Jumeirah 1, Dubai."
            }
          },
          {
            "@type": "Question",
            "name": "Where is RamaCare Polyclinic located?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "RamaCare Polyclinic is located in Jumeirah 1, Dubai, Ground Floor, Jumeirah Terrace Building. We provide easy access and a comfortable clinical environment for all our patients."
            }
          },
          {
            "@type": "Question",
            "name": "Are your doctors DHA-licensed?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, all our doctors and specialists are DHA-licensed and follow strict clinical standards to ensure safe and effective treatment for every patient."
            }
          },
          {
            "@type": "Question",
            "name": "How can I book an appointment?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can book an appointment by calling us at +971566597878, sending a WhatsApp message, or using the online booking option on our website."
            }
          }
        ]
      }
    ])
  }}
  />
        </Head>
       <Script
  src="https://www.googletagmanager.com/gtag/js?id=G-G2WWSZYF7W"
  strategy="afterInteractive"/>

<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-G2WWSZYF7W');
  `}
</Script>
      <HeroSection />
      <WhyChooseUsSection />
      <AboutAyurvedaSection />
      <TreatmentSection />
      <ProgramsSection />
      <ExpertsSection />
      <PatientTestimonials />
      <WhyAyurvedaDubaiSection />
      <FAQSection />
      {/* <OurFacilitySection /> */}
      <BeginYourHealingJourneySection />
      <SEOContentSection title="Your Health, Our Priority: Leading Polyclinic in Jumeirah 1" content={homeSEOContent} />
    </Layout>
  );
}
