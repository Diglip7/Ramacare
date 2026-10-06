import Layout from '../../../components/Layout';
import Head from "next/head";
import TreatmentHero from '../../../components/TreatmentHero';
import QuickNavigation from '../../../components/QuickNavigation';
// import CertificationsSection from '../../../components/CertificationsSection';
import TreatmentOverview from '../../../components/TreatmentOverview';
import AyurvedaInfoSection from '../../../components/AyurvedaInfoSection'; 
import HealingJourney from '../../../components/HealingJourney';
import TreatmentBenefits from '../../../components/TreatmentBenefits';
import PatientTestimonials from '../../../components/VideoTestimonials';
import DoctorsSection from '../../../components/DoctorsSection';
// import PricingPackages from '../../../components/PricingPackages';
import PaymentInsurance from '../../../components/PaymentInsurance';
import FAQSection from '../../../components/Faq';
import BookConsultation from '../../../components/BookConsultation';
import ContentReviewBadge from '../../../components/ContentReviewBadge';
import { getSubcategoryContent } from '../../data/subcategoryContent';

export default function PCOSTreatmentPage() {
  const categoryName = 'Ayurveda';
  const subcategoryName = 'Ayurvedic PCOS Treatment';

  // Get content from data file
  const content = getSubcategoryContent('ayurveda-dubai', 'pcos-treatment');

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
        "name": "PCOS Treatment",
        "item": "https://ramacarepolyclinic.ae/services/pcos-treatment-dubai/"
      }
    ]
  };

      const pcosSchema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "MedicalWebPage",
          "@id": "https://ramacarepolyclinic.ae/services/pcos-treatment-dubai/#webpage",
          "url": "https://ramacarepolyclinic.ae/services/pcos-treatment-dubai/",
          "name": "Ayurvedic PCOS & PCOD Treatment Dubai | Female Doctors",
          "inLanguage": "en-AE",
          "about": { "@id": "https://ramacarepolyclinic.ae/services/pcos-treatment-dubai/#therapy" },
          "isPartOf": { "@id": "https://ramacarepolyclinic.ae/services/ayurveda-dubai/#webpage" },
          "audience": { "@type": "PeopleAudience", "suggestedGender": "female" },
          "reviewedBy": { "@id": "https://ramacarepolyclinic.ae/doctors/dr-shamna-keloth-meethal-ayurveda-doctor-dubai/#physician" },
          "lastReviewed": "YYYY-MM-DD"
        },
        {
          "@type": "MedicalTherapy",
          "@id": "https://ramacarepolyclinic.ae/services/pcos-treatment-dubai/#therapy",
          "name": "Ayurvedic PCOS treatment",
          "alternateName": ["Ayurvedic PCOD treatment", "Ayurveda for PCOS", "Ayurvedic treatment for polycystic ovary syndrome", "Ayurvedic treatment for irregular periods"],
          "description": "Ayurvedic care for PCOS and PCOD at RamaCare Polyclinic, Jumeirah 1, Dubai, by a female BAMS doctor, with a female GP in the same building who arranges hormone and blood-sugar tests: herbal medicines, Virechana, Basti, Nasya, Udwarthanam and Shirodhara when suitable, and a PCOS diet, usually over at least three to six menstrual cycles. Complementary to medical care.",
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
        <title key="title">Ayurvedic PCOS & PCOD Treatment Dubai | Female Doctors</title>
        <meta
          name="description"
          content="Ayurvedic PCOS care in Jumeirah 1, Dubai by a female BAMS doctor, with a female GP for hormone tests. Herbs, Virechana, Basti and diet. From AED 200."
          key="description"
        />
        <meta name="robots" content="index, follow" key="robots" />
        <link rel="canonical" href="https://ramacarepolyclinic.ae/services/pcos-treatment-dubai/" key="canonical" />

        {/* Open Graph Tags */}
        <meta property="og:type" content="website" key="og:type" />
        <meta property="og:title" content="Ayurvedic PCOS & PCOD Treatment Dubai | Female Doctors" key="og:title" />
        <meta
          property="og:description"
          content="Ayurvedic PCOS care in Jumeirah 1, Dubai by a female BAMS doctor, with a female GP for hormone tests. Herbs, Virechana, Basti and diet. From AED 200."
          key="og:description"
        />
        <meta property="og:url" content="https://ramacarepolyclinic.ae/services/pcos-treatment-dubai/" key="og:url" />
        <meta property="og:image" content="https://ramacarepolyclinic.ae/images/pcos.jpg" key="og:image" />
        <meta property="og:image:width" content="1200" key="og:image:width" />
        <meta property="og:image:height" content="630" key="og:image:height" />
        <meta property="og:image:alt" content="Ayurvedic PCOS Treatment in Dubai - RamaCare Polyclinic" key="og:image:alt" />
        <meta property="og:site_name" content="RamaCare Polyclinic" key="og:site_name" />
        <meta property="og:locale" content="en_AE" key="og:locale" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content="Ayurvedic PCOS & PCOD Treatment Dubai | Female Doctors" key="twitter:title" />
        <meta
          name="twitter:description"
          content="Manage PCOS naturally in Dubai with Ayurvedic therapies, Panchakarma detox, herbal remedies, diet, and lifestyle guidance."
          key="twitter:description"
        />
        <meta name="twitter:image" content="https://ramacarepolyclinic.ae/images/pcos.jpg" key="twitter:image" />

        {/* Structured Data Schemas */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        {faqSchema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          />
        )}
        <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pcosSchema) }}
      />
      </Head>

      <TreatmentHero 
        categoryName={categoryName}
        subcategoryName={subcategoryName}
        hero={content?.hero}
      />
      <QuickNavigation />
     <TreatmentOverview subcategoryName={subcategoryName} content={content?.overview} />
      <AyurvedaInfoSection content={content?.testsFirst} />       {/* NEW: tests with our female GP */}
      <AyurvedaInfoSection content={content?.pcosTypes} />        {/* NEW: PCOS types */}
      <AyurvedaInfoSection content={content?.therapiesHerbs} />   {/* NEW: therapies and herbs */}
      <AyurvedaInfoSection content={content?.timeline} />         {/* NEW: what to expect, cycle by cycle */}
      <AyurvedaInfoSection content={content?.lifestyle} />        {/* NEW: diet, exercise, Dubai and Ramadan */}
      <HealingJourney content={content?.healingJourney} />
      <TreatmentBenefits 
        content={content?.benefits}
      />
      <PatientTestimonials content={content?.testimonials} />
      <DoctorsSection content={content?.doctors} />
      <PaymentInsurance content={content?.paymentInsurance} />
      <ContentReviewBadge doctorName="Dr. Shamna Keloth Meethal" pageSlug="pcos-treatment-dubai" lastReviewed="2026-01-12" />
      <FAQSection content={content?.faq} />
      <AyurvedaInfoSection content={content?.sources} />          {/* NEW: medical sources and review */}
      <BookConsultation content={content?.bookConsultation} />
    </Layout>
  );
}

