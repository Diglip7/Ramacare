import Layout from '../../../components/Layout';
import Head from "next/head";
import TreatmentHero from '../../../components/TreatmentHero';
import QuickNavigation from '../../../components/QuickNavigation';
// import CertificationsSection from '../../../components/CertificationsSection';
import TreatmentOverview from '../../../components/TreatmentOverview';
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
  const subcategoryName = 'Abhyanga Massage';

  // Get content from data file
  const content = getSubcategoryContent('ayurveda-dubai', 'abhyanga-massage');

  // Custom navigation items for Abhyanga Massage page
  const navItems = [
    { id: 'treatment-info', label: 'Treatment Info' },
    { id: 'benefits', label: 'Benefits' },
    { id: 'how-it-works', label: 'Process' },
    { id: 'cost-and-results', label: 'Cost' },
    { id: 'comparison', label: 'Comparison' },
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
        "item": "https://ramacarepolyclinic.ae/services/ayurveda-dubai"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Abhyanga Massage",
        "item": "https://ramacarepolyclinic.ae/services/abhyanga-massage-dubai/"
      }
    ]
  };

  const medicalProcedureSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Abhyanga Massage in Dubai",
    "description": "Traditional Ayurvedic full-body oil therapy in Dubai using warm medicated herbal oils to improve circulation, relieve muscle stiffness, remove toxins, and promote deep relaxation.",
    "url": "https://ramacarepolyclinic.ae/services/abhyanga-massage-dubai/",
    "procedureType": "https://schema.org/NoninvasiveProcedure",
    "reviewedBy": {
      "@type": "Physician",
      "name": "Dr. Shamna Keloth Meethal",
      "medicalSpecialty": "Ayurveda",
      "url": "https://ramacarepolyclinic.ae/doctors/dr-shamna-keloth-meethal-ayurveda-doctor-dubai/"
    },
    "provider": {
      "@type": "MedicalClinic",
      "name": "RamaCare Polyclinic",
      "url": "https://ramacarepolyclinic.ae/",
      "image": "https://ramacarepolyclinic.ae/images/abhyanga.jpg",
      "telephone": "+971566597878",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "12 Al Dhiyafah Rd - Jumeirah Terrace Building, Ground Floor",
        "addressLocality": "Jumeirah 1",
        "addressRegion": "Dubai",
        "addressCountry": "AE"
      }
    }
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

  const physicianSchema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": "Dr. Shamna Keloth Meethal",
    "medicalSpecialty": "Ayurveda",
    "url": "https://ramacarepolyclinic.ae/doctors/dr-shamna-keloth-meethal-ayurveda-doctor-dubai/",
    "worksFor": {
      "@type": "MedicalClinic",
      "name": "RamaCare Polyclinic"
    }
  };

  return (
    <Layout>
      <Head>
        <title key="title">Abhyanga Massage Dubai | Full Body Ayurvedic Oil Massage</title>
        <meta
          name="description"
          content="Experience authentic Abhyanga massage in Dubai at RamaCare Polyclinic. A traditional Ayurvedic full-body oil therapy for deep relaxation, detox, and rejuvenation."
          key="description"
        />
        <meta
          name="keywords"
          content="Abhyanga Massage Dubai, Ayurvedic massage Dubai, Full body oil massage Dubai, Ayurvedic detox therapy, Stress relief massage Dubai, Traditional Ayurveda Dubai, Herbal oil massage Dubai, Relaxation therapy Dubai"
          key="keywords"
        />
        <meta name="robots" content="index, follow" key="robots" />
        <link rel="canonical" href="https://ramacarepolyclinic.ae/services/abhyanga-massage-dubai/" key="canonical" />

        {/* Open Graph Tags */}
        <meta property="og:type" content="website" key="og:type" />
        <meta property="og:title" content="Abhyanga Massage Dubai | Full Body Ayurvedic Oil Massage" key="og:title" />
        <meta
          property="og:description"
          content="Experience authentic Abhyanga massage in Dubai at RamaCare Polyclinic. A traditional Ayurvedic full-body oil therapy for deep relaxation, detox, and rejuvenation."
          key="og:description"
        />
        <meta property="og:url" content="https://ramacarepolyclinic.ae/services/abhyanga-massage-dubai/" key="og:url" />
        <meta property="og:image" content="https://ramacarepolyclinic.ae/images/abhyanga.jpg" key="og:image" />
        <meta property="og:image:width" content="1200" key="og:image:width" />
        <meta property="og:image:height" content="630" key="og:image:height" />
        <meta property="og:image:alt" content="Abhyanga Massage Dubai - RamaCare Polyclinic" key="og:image:alt" />
        <meta property="og:site_name" content="RamaCare Polyclinic" key="og:site_name" />
        <meta property="og:locale" content="en_AE" key="og:locale" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content="Abhyanga Massage Dubai | Full Body Ayurvedic Oil Massage" key="twitter:title" />
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalProcedureSchema) }}
        />
        {faqSchema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          />
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianSchema) }}
        />
      </Head>

      <TreatmentHero 
        categoryName={categoryName}
        subcategoryName={subcategoryName}
        hero={content?.hero}
      />
      <QuickNavigation navItems={navItems} />
      {/* <CertificationsSection content={content?.certifications} /> */}
      <TreatmentOverview 
        subcategoryName={subcategoryName}
        content={content?.overview}
      />
      <HealingJourney content={content?.healingJourney} />
      <TreatmentBenefits 
        content={content?.benefits}
      />
      <CostAndResults content={content?.costResults} />
      <PatientTestimonials content={content?.testimonials} />
      <DoctorsSection content={content?.doctors} />
      {/* <PricingPackages content={content?.pricing} /> */}
      <PaymentInsurance content={content?.paymentInsurance} />
      <ContentReviewBadge doctorName="Dr. Shamna Keloth Meethal" pageSlug="abhyanga-massage-dubai" />
      <FAQSection content={content?.faq} />
      <BookConsultation content={content?.bookConsultation} />
    </Layout>
  );
}

