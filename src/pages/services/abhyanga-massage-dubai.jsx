import Layout from '../../../components/Layout';
import Head from "next/head";
import TreatmentHero from '../../../components/TreatmentHero';
import QuickNavigation from '../../../components/QuickNavigation';
// import CertificationsSection from '../../../components/CertificationsSection';
import TreatmentOverview from '../../../components/TreatmentOverview';
import AyurvedaInfoSection from '../../../components/AyurvedaInfoSection';
import HealingJourney from '../../../components/HealingJourney';
import TreatmentBenefits from '../../../components/TreatmentBenefits';
import CostAndResults from '../../../components/CostAndResults';
import PatientTestimonials from '../../../components/VideoTestimonials';
import DoctorsSection from '../../../components/DoctorsSection';
// import PricingPackages from '../../../components/PricingPackages';
import PaymentInsurance from '../../../components/PaymentInsurance';
import FAQSection from '../../../components/Faq';
import BookConsultation from '../../../components/BookConsultation';
import ContentReviewBadge from '../../../components/ContentReviewBadge';
import { getSubcategoryContent } from '../../data/subcategoryContent';

export default function AbhyangaMassageTreatmentPage() {
  const categoryName = 'Ayurveda';
  const subcategoryName = 'Kerala Ayurvedic Massage (Abhyanga)';

  // Get content from data file
  const content = getSubcategoryContent('ayurveda-dubai', 'abhyanga-massage');

  // Custom navigation items for Abhyanga Massage page
 const navItems = [
      { id: 'treatment-info', label: 'Overview' },
      { id: 'massage-types', label: 'Massage Types' },
      { id: 'which-massage', label: 'Which Massage?' },
      { id: 'your-session', label: 'Your Session' },
      { id: 'comparison', label: 'Kerala vs Spa' },
      { id: 'faq', label: 'FAQ' },
      { id: 'book-now', label: 'Book Now' },
    ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
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
        "name": "Ayurveda",
        "item": "https://ramacarepolyclinic.ae/services/ayurveda-dubai/"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Kerala Ayurvedic Massage (Abhyanga)",
        "item": "https://ramacarepolyclinic.ae/services/abhyanga-massage-dubai/"
      }
    ]
  };

  const massageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://ramacarepolyclinic.ae/services/abhyanga-massage-dubai/#webpage",
      "url": "https://ramacarepolyclinic.ae/services/abhyanga-massage-dubai/",
      "name": "Kerala Ayurvedic Massage Dubai, Jumeirah 1 | Abhyanga",
      "inLanguage": "en-AE",
      "about": { "@id": "https://ramacarepolyclinic.ae/services/abhyanga-massage-dubai/#therapy" },
      "isPartOf": { "@id": "https://ramacarepolyclinic.ae/services/ayurveda-dubai/#webpage" },
      "reviewedBy": { "@id": "https://ramacarepolyclinic.ae/doctors/dr-shamna-keloth-meethal-ayurveda-doctor-dubai/#physician" },
      "lastReviewed": "YYYY-MM-DD"
    },
    {
      "@type": "MedicalTherapy",
      "@id": "https://ramacarepolyclinic.ae/services/abhyanga-massage-dubai/#therapy",
      "name": "Therapeutic Kerala Ayurvedic massage (Abhyanga)",
      "alternateName": ["Abhyanga", "Abhyangam", "Kerala massage", "Ayurvedic massage", "Therapeutic massage", "Shiro Abhyanga", "Pada Abhyanga", "Pizhichil", "Udwarthanam", "Kizhi", "Potli massage", "Njavarakizhi", "Kati Basti"],
      "description": "Therapeutic Kerala Ayurvedic massage at RamaCare Polyclinic, Jumeirah 1, Dubai: a consultation with a BAMS doctor first, then 60 or 90-minute sessions with classical medicated oils from Kerala, given by Kerala-trained therapists of the same gender as the patient.",
      "relevantSpecialty": "https://schema.org/Ayurvedic",
      "provider": { "@id": "https://ramacarepolyclinic.ae/#clinic" }
    },
    {
      "@type": "Physician",
      "@id": "https://ramacarepolyclinic.ae/doctors/dr-shamna-keloth-meethal-ayurveda-doctor-dubai/#physician",
      "name": "Dr. Shamna Keloth Meethal",
      "gender": "Female",
      "url": "https://ramacarepolyclinic.ae/doctors/dr-shamna-keloth-meethal-ayurveda-doctor-dubai/",
      "medicalSpecialty": "https://schema.org/Ayurvedic",
      "knowsLanguage": ["en", "ml", "hi"],
      "worksFor": { "@id": "https://ramacarepolyclinic.ae/#clinic" }
    }
  ]
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

  return (
    <Layout>
      <Head>
      <title key="title">Kerala Ayurvedic Massage Dubai, Jumeirah 1 | Abhyanga</title>
        <meta
          name="description"
          content="Therapeutic Kerala Ayurvedic massage (Abhyanga) in Jumeirah 1, Dubai: BAMS doctor assessment, Kerala oils, same-gender therapists. 60 or 90-minute sessions."
          key="description"
        />
        <meta name="robots" content="index, follow" key="robots" />
        <link rel="canonical" href="https://ramacarepolyclinic.ae/services/abhyanga-massage-dubai/" key="canonical" />

        {/* Open Graph Tags */}
        <meta property="og:type" content="website" key="og:type" />
        <meta property="og:title" content="Kerala Ayurvedic Massage Dubai, Jumeirah 1 | Abhyanga" key="og:title" />
        <meta
          property="og:description"
          content="Therapeutic Kerala Ayurvedic massage (Abhyanga) in Jumeirah 1, Dubai: BAMS doctor assessment, Kerala oils, same-gender therapists. 60 or 90-minute sessions."
          key="og:description"
        />
        <meta property="og:url" content="https://ramacarepolyclinic.ae/services/abhyanga-massage-dubai/" key="og:url" />
        <meta property="og:image" content="https://ramacarepolyclinic.ae/images/abhyanga.jpg" key="og:image" />
        <meta property="og:image:width" content="1200" key="og:image:width" />
        <meta property="og:image:height" content="630" key="og:image:height" />
        <meta property="og:image:alt" content="Therapeutic Kerala Ayurvedic massage (Abhyanga) at RamaCare Polyclinic, Jumeirah 1, Dubai" key="og:image:alt" />
        <meta property="og:site_name" content="RamaCare Polyclinic" key="og:site_name" />
        <meta property="og:locale" content="en_AE" key="og:locale" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content="Kerala Ayurvedic Massage Dubai, Jumeirah 1 | Abhyanga" key="twitter:title" />
        <meta
          name="twitter:description"
          content="Experience authentic Abhyanga massage in Dubai — traditional Ayurvedic full-body oil therapy for deep relaxation, detox, and rejuvenation."
          key="twitter:description"
        />
        <meta name="twitter:image" content="https://ramacarepolyclinic.ae/images/abhyanga.jpg" key="twitter:image" />

        {/* Structured Data Schemas */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(massageSchema) }}
          />
        {faqSchema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          />
        )}
       
      </Head>

      <TreatmentHero 
        categoryName={categoryName}
        subcategoryName={subcategoryName}
        hero={content?.hero}
      />
      <QuickNavigation navItems={navItems} />
      {/* <CertificationsSection content={content?.certifications} /> */}
      <TreatmentOverview subcategoryName={subcategoryName} content={content?.overview} />
        <AyurvedaInfoSection content={content?.massageTypes} />     {/* NEW: Kerala massage types incl. Kizhi */}
        <AyurvedaInfoSection content={content?.whichMassage} />     {/* NEW: condition-to-massage guide */}
        <AyurvedaInfoSection content={content?.yourSession} />      {/* NEW: what happens in a session */}
        <AyurvedaInfoSection content={content?.whoShouldAvoid} />   {/* NEW: who should avoid or wait */}
        <AyurvedaInfoSection content={content?.gettingHere} />      {/* NEW: Jumeirah 1 and nearby areas */}
        <HealingJourney content={content?.healingJourney} />
      <TreatmentBenefits 
        content={content?.benefits}
      />
      <CostAndResults content={content?.costResults} />
      <PatientTestimonials content={content?.testimonials} />
      <DoctorsSection content={content?.doctors} />
      {/* <PricingPackages content={content?.pricing} /> */}
      <PaymentInsurance content={content?.paymentInsurance} />
      <ContentReviewBadge doctorName="Dr. Shamna Keloth Meethal" pageSlug="abhyanga-massage-dubai" lastReviewed="2026-01-12" />
      <FAQSection content={content?.faq} />
      <BookConsultation content={content?.bookConsultation} />
    </Layout>
  );
}

