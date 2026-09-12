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
        <meta
          name="description"
          content="Looking for a polyclinic in Dubai? RamaCare offers Ayurveda, physiotherapy & skin treatments in Jumeirah with expert doctors. Book your consultation today."
          key="description"
        />
        <meta
          name="keywords"
          content="RamaCare Polyclinic Dubai, Polyclinic in Dubai, Trusted polyclinic in Dubai, Multi-Specialty Clinic Dubai, Medical clinic Dubai, DHA licensed polyclinic, Family healthcare Dubai, Affordable healthcare Dubai, Polyclinic in Jumeirah 1, Medical clinic Jumeirah 1, Best Polyclinic in Jumeirah 1"
          key="keywords"
        />
        <link rel="canonical" href="https://ramacarepolyclinic.ae/" key="canonical" />
        <meta name="robots" content="index, follow" key="robots" />
        <meta name="msvalidate.01" content="FB6C6318BA274AFF1EA6E095977EA143" />
        <meta name="google-site-verification" content="VRn7pg1rACQOgcGV13YChuu05_Iu__0QVLXrw9dNGCc" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Polyclinic in Dubai | Multispecialty Healthcare | RamaCare" key="og:title" />
        <meta
          property="og:description"
          content="Looking for a polyclinic in Dubai? RamaCare offers Ayurveda, physiotherapy & skin treatments in Jumeirah with expert doctors. Book your consultation today."
          key="og:description"
        />
        <meta property="og:type" content="website" key="og:type" />
        <meta property="og:url" content="https://ramacarepolyclinic.ae/" key="og:url" />
        <meta property="og:image" content="https://ramacarepolyclinic.ae/images/homepage.jpg" key="og:image" />
        <meta property="og:image:alt" content="RamaCare Polyclinic — Premium healthcare clinic in Dubai, Jumeirah 1" key="og:image:alt" />
        <meta property="og:image:width" content="1200" key="og:image:width" />
        <meta property="og:image:height" content="630" key="og:image:height" />
        <meta property="og:site_name" content="RamaCare Polyclinic" key="og:site_name" />
        <meta property="og:locale" content="en_AE" key="og:locale" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content="Polyclinic in Dubai | Multispecialty Healthcare | RamaCare" key="twitter:title" />
        <meta
          name="twitter:description"
          content="DHA-licensed polyclinic in Jumeirah 1, Dubai offering Ayurveda, physiotherapy, dermatology, dental, and general medicine under one roof."
          key="twitter:description" />
        <meta name="twitter:image" content="https://ramacarepolyclinic.ae/images/homepage.jpg" key="twitter:image" />

        {/* Structured JSON-LD Schema (@graph: MedicalClinic, FAQPage) */}
        <script
          key="schema-graph"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': ['MedicalClinic', 'LocalBusiness'],
                  '@id': 'https://ramacarepolyclinic.ae/#organization',
                  name: 'RamaCare Polyclinic',
                  alternateName: 'RamaCare Polyclinic Dubai',
                  url: 'https://ramacarepolyclinic.ae/',
                  logo: 'https://ramacarepolyclinic.ae/images/Logo.png',
                  image: 'https://ramacarepolyclinic.ae/images/homepage.jpg',
                  description:
                    'DHA-licensed multi-specialty polyclinic in Jumeirah 1, Dubai offering expert care in Dermatology, Dental, Physiotherapy, General Medicine, and Ayurveda.',
                  telephone: '+971566597878',
                  email: 'query@ramacarepolyclinic.ae',
                  priceRange: '$$',
                  openingHoursSpecification: {
                    '@type': 'OpeningHoursSpecification',
                    dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                    opens: '10:00',
                    closes: '22:00',
                  },
                  address: {
                    '@type': 'PostalAddress',
                    streetAddress: '12 Al Dhiyafah Rd - Jumeirah Terrace Building, Ground Floor, Jumeirah 1',
                    addressLocality: 'Dubai',
                    postalCode: '393558',
                    addressCountry: 'AE',
                  },
                  geo: {
                    '@type': 'GeoCoordinates',
                    latitude: '25.2345',
                    longitude: '55.2712',
                  },
                  areaServed: {
                    '@type': 'City',
                    name: 'Dubai',
                  },
                  aggregateRating: {
                    '@type': 'AggregateRating',
                    ratingValue: '4.8',
                    reviewCount: '542',
                    bestRating: '5',
                    worstRating: '1',
                  },
                  medicalSpecialty: [
                    'General Medicine',
                    'Dermatology',
                    'Dental Care',
                    'Physiotherapy',
                    'Ayurveda',
                  ],
                  sameAs: [
                    'https://www.facebook.com/RamaCarePolyClinic/',
                    'https://www.instagram.com/ramacarepolyclinic/',
                    'https://www.linkedin.com/company/ramacarepolyclinics/',
                    'https://www.youtube.com/@ramacarepolyclinic',
                  ],
                },
                {
                  '@type': 'FAQPage',
                  '@id': 'https://ramacarepolyclinic.ae/#faq',
                  mainEntity: [
                    {
                      '@type': 'Question',
                      name: 'What is the address of the RamaCare Polyclinic in Jumeirah 1 Dubai?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'RamaCare Polyclinic is situated at 12 Al Dhiyafah Road, Jumeirah Terrace Building, Ground Floor, Jumeirah 1, Dubai. Provides medical physiotherapy, Ayurveda, dermatology, dental, and wellness services to patients from Jumeirah 1 and the surrounding areas of Dubai, all within one building.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'Is RamaCare Polyclinic located in Jumeirah 1?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'RRamaCare Polyclinic is a healthcare clinic situated in Jumeirah 1, Dubai. At this clinic patients are able to obtain a variety of healthcare services in one place, such as physiotherapy, Ayurveda, dermatology and skin care, dental care, and general healthcare. The fact that the clinic is located in Jumeirah 1 means that it is convenient for those patients who are seeking a clinic in Jumeirah.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'What services are offered by RamaCare Polyclinic in Dubai?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'RamaCare Polyclinic offers a range of healthcare services in Dubai. These services include physiotherapy, Ayurveda, dermatology and skin care, dental care, family healthcare, and other medical treatments. The service that is best for a patient will depend on the patient’s symptoms, needs, and treatment goals. A consultation is necessary to determine the suitable care for a patient’s specific condition.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'Is the RamaCare Polyclinic licensed by the DHA?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'RamaCare Polyclinic holds a license from the DHA. The license number is 2036418. All healthcare professionals at RamaCare Polyclinic are proper. Work within the limits of their individual clinical roles.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'How do I go about booking an appointment at RamaCare Polyclinic in Jumeirah?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'You can book an appointment at RamaCare Polyclinic in Jumeirah by using WhatsApp, by phone, or through the appointment system on the website. When you contact the clinic, just let them know the service you need and your preferred time for the appointment. Then the staff will help you find a doctor or a consultation.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'Does RamaCare offer physiotherapy in Jumeirah 1?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Yes, RamaCare Polyclinic provides physiotherapy in Jumeirah 1, Dubai. Physiotherapy can help with pain, sports injuries, mobility issues, rehabilitation needs, and other physical health problems. The physiotherapist will first assess your symptoms, movement patterns, and daily functional needs before recommending a treatment plan.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'What Ayurveda treatments are on offer at RamaCare in Jumeirah?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'RamaCare Polyclinic offers Ayurveda consultations and treatments in Jumeirah 1, Dubai. If you have health concerns, an Ayurvedic practitioner may recommend certain therapies, lifestyle changes, and traditional Ayurvedic practices. Each treatment is tailored to the individual after a consultation, ensuring care that fits your unique condition.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'What skin treatments and dermatology services are available at RamaCare in Jumeirah?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'RamaCare Polyclinic offers dermatology and skin-care services in Jumeirah 1. The clinic deals with skin problems. The types of services offered can include treatment for acne, pigmentation, uneven skin tone, skin texture, and the signs of aging. These services depend on your needs. A consultation is done to find out which treatment is right for your skin.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'Does RamaCare offer treatment in Jumeirah?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'The truth is that RamaCare Polyclinic provides care in Jumeirah 1, Dubai. Dental treatment is part of the clinic\'s range of healthcare services. It can include an assessment, preventive care, and suitable restorative or other dental procedures. The treatment that is suggested depends on your condition and the results of your consultation.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'Is it possible for me to have a health check-up at RamaCare in Jumeirah?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Yes, you can have a health check-up at RamaCare Polyclinic in Jumeirah 1. This includes health assessments and consultations with a healthcare professional. During your visit, the doctor will review your history, discuss any symptoms you may have, and assess your current health condition. If needed, additional tests or referrals to specialists may be suggested based on your needs.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: ' Does RamaCare offer healthcare services to families in Jumeirah?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Yes, RamaCare Polyclinic serves families in Jumeirah, Dubai. It provides a range of healthcare services for all ages. These include medicine, dental care, physiotherapy, dermatology, Ayurveda, and other treatments. The services offered depend on each individual’s health needs. Are tailored accordingly.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'What can I expect when I go for my visit to RamaCare Polyclinic?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'On your first visit, the focus will be on understanding your health concern, reviewing your medical background, and identifying your treatment needs. Your doctor or healthcare provider will listen to your symptoms, examine you if required, and explain the options. They will also guide you through the steps based on your condition and the type of care you need.',
                      },
                    },
                  ],
                },
              ],
            }),
          }}
        />
      </Head>
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
