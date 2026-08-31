import Layout from '../../../components/Layout';
import Head from "next/head";
import TreatmentHero from '../../../components/TreatmentHero';
import QuickNavigation from '../../../components/QuickNavigation';
// import CertificationsSection from '../../../components/CertificationsSection';
import TreatmentOverview from '../../../components/TreatmentOverview';
import HealingJourney from '../../../components/HealingJourney';
import TreatmentBenefits from '../../../components/TreatmentBenefits';
import ServiceWhyChoose from '../../../components/ServiceWhyChoose';
import FunctionalEverydayActivities from '../../../components/FunctionalEverydayActivities';
import PatientTestimonials from '../../../components/VideoTestimonials';
import DoctorsSection from '../../../components/DoctorsSection';
// import PricingPackages from '../../../components/PricingPackages';
import PaymentInsurance from '../../../components/PaymentInsurance';
import FAQSection from '../../../components/Faq';
import BookConsultation from '../../../components/BookConsultation';
import ContentReviewBadge from '../../../components/ContentReviewBadge';
import { getSubcategoryContent } from '../../data/subcategoryContent';

export default function FunctionalExercisesPage() {
  const categoryName = 'Physiotherapy';
  const subcategoryName = 'Functional Exercise';

  // Get content from data file
  const content = getSubcategoryContent('physiotherapy-dubai', 'functional-exercises');

  const CANONICAL_URL = 'https://ramacarepolyclinic.ae/services/functional-exercises-dubai/';

  const navItems = [
    { id: 'treatment-info', label: 'Treatment Info' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'benefits', label: 'Benefits' },
    { id: 'everyday-activities', label: 'Everyday Activities' },
    { id: 'why-choose-us', label: 'Why Choose Us' },
    { id: 'testimonials', label: 'Success Stories' },
    { id: 'our-doctors', label: 'Our Doctors' },
    { id: 'faq', label: 'FAQ' },
    { id: 'book-now', label: 'Book Now' },
  ];

  const faqsForSchema = (content?.faq?.faqs || []).map(faq => ({
    question: faq.question,
    answer: faq.answer
  }));

  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `${CANONICAL_URL}#breadcrumb`,
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
            "name": "Physiotherapy",
            "item": "https://ramacarepolyclinic.ae/services/physiotherapy-dubai/"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Functional Exercise",
            "item": CANONICAL_URL
          }
        ]
      },
      {
        "@type": "MedicalWebPage",
        "@id": `${CANONICAL_URL}#webpage`,
        "url": CANONICAL_URL,
        "name": "Functional Exercises Dubai for Rehab and Physiotherapy Care",
        "description": "Functional exercises in Dubai support rehabilitation and physiotherapy by improving strength, balance, and movement through guided programs tailored to daily activities.",
        "inLanguage": "en",
        "isPartOf": {
          "@type": "WebSite",
          "url": "https://ramacarepolyclinic.ae/",
          "name": "RamaCare Polyclinic"
        },
        "about": {
          "@type": "MedicalCondition",
          "name": "Deconditioning and Movement Disorders"
        },
        "reviewedBy": {
          "@type": "Person",
          "name": "Jeena Mathew",
          "jobTitle": "Musculoskeletal Physiotherapy Specialist",
          "url": "https://ramacarepolyclinic.ae/doctors/jeena-mathew-physiotherapist-dubai/"
        }
      },
      {
        "@type": "MedicalProcedure",
        "@id": `${CANONICAL_URL}#procedure`,
        "name": "Functional Exercises in Dubai",
        "alternateName": "Physiotherapy Functional Exercise Program",
        "url": CANONICAL_URL,
        "mainEntityOfPage": CANONICAL_URL,
        "description": "Functional Exercises in Dubai at RamaCare Polyclinic offers targeted therapeutic exercise programs designed to improve strength, flexibility, balance, and functional mobility as part of comprehensive physiotherapy care.",
        "procedureType": "Physical therapy exercise program",
        "bodyLocation": "Whole body / Musculoskeletal system",
        "howPerformed": "Functional exercises are performed through personalized exercise regimens tailored to the patient’s needs, focusing on improving strength, coordination, balance, and daily functional movement under the guidance of experienced physiotherapists.",
        "preparation": "Patients are advised to wear comfortable clothing suitable for movement and to follow any preparatory guidance provided by the therapist.",
        "followup": "Regular re-assessments and progress tracking sessions are recommended to monitor improvement and update exercise plans.",
        "indication": [
          "Reduced mobility",
          "Muscle weakness",
          "Post-injury or post-surgical rehabilitation",
          "Balance and coordination deficits",
          "Functional strength improvement"
        ],
        "possibleComplication": "Temporary muscle soreness may occur after exercise sessions.",
        "provider": {
          "@type": "MedicalClinic",
          "name": "RamaCare Polyclinic – Physiotherapy & Rehabilitation Department",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "12 Al Dhiyafah Rd - Jumeirah Terrace Building, Ground Floor, Jumeirah 1",
            "addressLocality": "Jumeirah 1",
            "addressRegion": "Dubai",
            "postalCode": "393558",
            "addressCountry": "AE"
          },
          "telephone": "+971 56 659 7878",
          "areaServed": {
            "@type": "City",
            "name": "Dubai"
          },
          "priceRange": "$$"
        }
      },
      {
        "@type": "FAQPage",
        "@id": `${CANONICAL_URL}#faq`,
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
        <title key="title">Functional Exercises Dubai for Rehab and Physiotherapy Care</title>
        <meta name="description" content="Functional exercises in Dubai support rehabilitation and physiotherapy by improving strength, balance, and movement through guided programs tailored to daily activities." key="description" />
        <meta name="keywords" content="Functional exercises in Dubai, Functional training Dubai, Rehab exercises in Dubai, Physiotherapy exercises in Dubai, Movement therapy Dubai, Post injury rehabilitation in Dubai, Strength and mobility exercises, Core stability training Dubai, Physical therapy Dubai, Functional rehab programs in Dubai" />
        <meta name="robots" content="index, follow" key="robots" />
        <link rel="canonical" href={CANONICAL_URL} key="canonical" />

        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Functional Exercises Dubai for Rehab and Physiotherapy Care" />
        <meta property="og:description" content="Functional exercises in Dubai support rehabilitation and physiotherapy by improving strength, balance, and movement through guided programs tailored to daily activities." />
        <meta property="og:url" content={CANONICAL_URL} />
        <meta property="og:image" content="https://ramacarepolyclinic.ae/images/excercise1.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="RamaCare Polyclinic" />
        <meta property="og:locale" content="en_AE" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Functional Exercises Dubai for Rehab and Physiotherapy Care" />
        <meta name="twitter:description" content="Functional exercises in Dubai support rehabilitation by improving strength, balance, and movement through guided programs." />
        <meta name="twitter:image" content="https://ramacarepolyclinic.ae/images/excercise1.jpg" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaGraph)
          }}
        />
      </Head>
      <TreatmentHero
        categoryName={categoryName}
        subcategoryName={subcategoryName}
        hero={content?.hero}
      />
      <QuickNavigation navItems={navItems} />

      <TreatmentOverview
        subcategoryName={subcategoryName}
        content={content?.overview}
      />
      <HealingJourney content={content?.healingJourney} />
      <TreatmentBenefits
        content={content?.benefits}
      />
      <FunctionalEverydayActivities content={content?.everydayActivities} />
      <ServiceWhyChoose
        content={content?.whyChoose}
        customExpectationTitle="Patients choose RamaCare because we provide the following:"
      />
      <PatientTestimonials content={content?.testimonials} />
      <DoctorsSection content={content?.doctors} />
      <PaymentInsurance content={content?.paymentInsurance} />
      <ContentReviewBadge doctorName="Jeena Mathew" pageSlug="functional-exercises-dubai" />
      <FAQSection content={content?.faq} />
      <BookConsultation content={content?.bookConsultation} />
    </Layout>
  );
}
