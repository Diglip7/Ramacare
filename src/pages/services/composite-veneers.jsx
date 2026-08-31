import Layout from '../../../components/Layout';
import Head from "next/head";
import TreatmentHero from '../../../components/TreatmentHero';
import QuickNavigation from '../../../components/QuickNavigation';
// import CertificationsSection from '../../../components/CertificationsSection';
import TreatmentOverview from '../../../components/TreatmentOverview';
import HealingJourney from '../../../components/HealingJourney';
import TreatmentBenefits from '../../../components/TreatmentBenefits';
import PatientTestimonials from '../../../components/VideoTestimonials';
import DoctorsSection from '../../../components/DoctorsSection';
// import PricingPackages from '../../../components/PricingPackages';
import PaymentInsurance from '../../../components/PaymentInsurance';
import ServiceExtrasSection from '../../../components/ServiceExtrasSection';
import FAQSection from '../../../components/Faq';
import BookConsultation from '../../../components/BookConsultation';
import ContentReviewBadge from '../../../components/ContentReviewBadge';
import { getSubcategoryContent } from '../../data/subcategoryContent';

export default function CompositeVeneersPage() {
  const categoryName = 'Dental';
  const subcategoryName = 'Composite Veneers';

  // Get content from data file
  const content = getSubcategoryContent('dental-dubai', 'composite-veneers');

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
        "name": "Dental",
        "item": "https://ramacarepolyclinic.ae/services/dental-dubai/"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Composite Veneers",
        "item": "https://ramacarepolyclinic.ae/services/composite-veneers/"
      }
    ]
  };

  const medicalProcedureSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Composite Veneers",
    "description": "Minimally invasive composite resin veneers for chipped, discolored, gapped, or uneven teeth, completed in a single visit by DHA-licensed cosmetic dentists.",
    "provider": {
      "@type": "MedicalClinic",
      "name": "RamaCare Polyclinic",
      "url": "https://ramacarepolyclinic.ae/",
      "telephone": "+971566597878",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "12 Al Dhiyafah Rd, Jumeirah Terrace Building, Ground Floor",
        "addressLocality": "Jumeirah 1, Dubai",
        "addressCountry": "AE"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": "Dubai"
    }
  };

  // Dynamically generated FAQPage Schema from page data
  const faqSchema = content?.faq?.faqs?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": content.faq.faqs.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }
    : null;

  const physicianSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Physician",
      "name": "Dr. Hirbod Gilandoust",
      "medicalSpecialty": "Esthetic Dentistry & Dental Surgery",
      "url": "https://ramacarepolyclinic.ae/doctors/dr-hirbod-gilandoust-dentist-dubai/",
      "worksFor": {
        "@type": "MedicalClinic",
        "name": "RamaCare Polyclinic"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Physician",
      "name": "Dr. Aparna Balakrishnan",
      "medicalSpecialty": "Cosmetic Dentistry",
      "url": "https://ramacarepolyclinic.ae/doctors/dr-aparna-balakrishnan-cosmetic-dentist-dubai/",
      "worksFor": {
        "@type": "MedicalClinic",
        "name": "RamaCare Polyclinic"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Physician",
      "name": "Soumya Abraham",
      "medicalSpecialty": "DHA Licensed Nurse",
      "url": "https://ramacarepolyclinic.ae/doctors/soumya-abraham-dha-licensed-nurse-dubai/",
      "worksFor": {
        "@type": "MedicalClinic",
        "name": "RamaCare Polyclinic"
      }
    }
  ];

  return (
    <Layout>
      <Head>
        <title key="title">Composite Veneers Dubai | Safe & Natural Smile Solutions</title>
        <meta
          name="description"
          content="Enhance your smile with composite veneers in Dubai—safe, natural-looking, and durable dental solutions for teeth restoration and cosmetic smile makeovers by expert dentists."
          key="description"
        />
        <meta
          name="keywords"
          content="Composite veneers Dubai, Dental veneers Dubai, Cosmetic dentistry Dubai, Smile makeover Dubai, Tooth restoration in Dubai, Affordable veneers Dubai, Same-day veneers Dubai, Composite bonding Dubai, Durable veneers Dubai, Natural-looking veneers Dubai, DHA-licensed dentist in Dubai, Best veneers Dubai"
          key="keywords"
        />
        <meta name="robots" content="index, follow" key="robots" />
        <link rel="canonical" href="https://ramacarepolyclinic.ae/services/composite-veneers/" key="canonical" />

        {/* Open Graph Tags */}
        <meta property="og:type" content="website" key="og:type" />
        <meta property="og:title" content="Composite Veneers Dubai | Safe & Natural Smile Solutions" key="og:title" />
        <meta
          property="og:description"
          content="Enhance your smile with composite veneers in Dubai—safe, natural-looking, and durable dental solutions for teeth restoration and cosmetic smile makeovers by expert dentists."
          key="og:description"
        />
        <meta property="og:url" content="https://ramacarepolyclinic.ae/services/composite-veneers/" key="og:url" />
        <meta property="og:image" content="https://ramacarepolyclinic.ae/images/composite-veeners.jpg" key="og:image" />
        <meta property="og:image:width" content="1200" key="og:image:width" />
        <meta property="og:image:height" content="630" key="og:image:height" />
        <meta property="og:site_name" content="RamaCare Polyclinic" key="og:site_name" />
        <meta property="og:locale" content="en_AE" key="og:locale" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content="Composite Veneers Dubai | Safe & Natural Smile Solutions" key="twitter:title" />
        <meta
          name="twitter:description"
          content="Enhance your smile with composite veneers in Dubai—safe, natural-looking, and durable dental solutions by expert dentists."
          key="twitter:description"
        />
        <meta name="twitter:image" content="https://ramacarepolyclinic.ae/images/composite-veeners.jpg" key="twitter:image" />

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
      <QuickNavigation />
    
      <TreatmentOverview 
        subcategoryName={subcategoryName}
        content={content?.overview}
      />
      <HealingJourney content={content?.healingJourney} />
      <TreatmentBenefits 
        content={content?.benefits}
      />
      <PatientTestimonials content={content?.testimonials} />
      <DoctorsSection content={content?.doctors} />
      <PaymentInsurance content={content?.paymentInsurance} />
      <ServiceExtrasSection 
        aftercareContent={content?.recoveryAftercare}
        whyChooseContent={content?.whyChoose}
      />
      <ContentReviewBadge doctorName="Dr. Hirbod Gilandoust" pageSlug="composite-veneers" />
      <FAQSection content={content?.faq} />
      <BookConsultation content={content?.bookConsultation} />
    </Layout>
  );
}

