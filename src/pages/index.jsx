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
        <link rel="canonical" href="https://ramacarepolyclinic.ae/" />
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
          key="twitter:description"
        />
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
                  alternateName: 'Rama Care Polyclinic Dubai',
                  url: 'https://ramacarepolyclinic.ae/',
                  logo: 'https://ramacarepolyclinic.ae/images/Logo.png',
                  image: 'https://ramacarepolyclinic.ae/images/homepage.jpg',
                  description:
                    'DHA-licensed multi-specialty polyclinic in Jumeirah 1, Dubai offering expert care in Dermatology, Dental, Physiotherapy, General Medicine, and Ayurveda.',
                  telephone: '+971566597878',
                  email: 'query@ramacarepolyclinic.com',
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
                    ratingValue: '4.9',
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
                      name: 'What services do you offer?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'We provide a wide range of healthcare services, including general medicine, dermatology, dental care, physiotherapy, Ayurveda, and facial treatments—all under one roof.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'Where is RamaCare Polyclinic located?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'RamaCare Polyclinic is located in Jumeirah 1, Dubai, with easy access and a comfortable clinical environment for patients and families.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'Are your doctors DHA-licensed?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Yes, all our doctors and specialists are DHA-licensed and follow strict clinical standards to ensure safe and effective treatment.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'How can I book an appointment?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'You can book an appointment by calling us, sending a WhatsApp message, or using the online booking option on our website.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'Do you accept health insurance?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Yes, we accept selected health insurance plans. Please contact our team to confirm your coverage.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'What makes RamaCare different?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'We focus on personalized care, clear communication, and a combination of modern medical treatment with holistic wellness approaches.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'Do you provide dental treatments?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Yes, we offer complete dental care, including routine check-ups, cleaning, fillings, and cosmetic treatments.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'What skin treatments are available?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Our dermatology services include treatment for acne, pigmentation, skin damage, and anti-aging care.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'Is Ayurveda available?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Yes, we provide Ayurvedic treatments focused on natural healing, detoxification, and long-term wellness.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'Do you offer physiotherapy services?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Yes, we offer physiotherapy for pain relief, injury recovery, and improving mobility and strength.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'Can I visit for routine check-ups?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Yes, we provide regular health check-ups and preventive care for individuals and families.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'Do you treat chronic conditions?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Yes, we help manage chronic conditions such as diabetes, hypertension, and long-term pain through structured care plans.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'Is your clinic suitable for family healthcare?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Yes, we provide care for patients of all ages, making it convenient for families to access multiple services in one place.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'What should I expect during my first visit?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'During your first visit, our doctor will review your medical history, understand your concerns, and recommend a suitable treatment plan.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'How do you ensure quality care?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'We follow strict clinical protocols, use modern diagnostic tools, and prioritize patient safety, hygiene, and transparent communication.',
                      },
                    },
                  ],
                },
              ],
            }),
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
