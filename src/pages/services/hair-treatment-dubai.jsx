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
import FAQSection from '../../../components/Faq';
import BookConsultation from '../../../components/BookConsultation';
import TreatmentAdditionalContent from '../../../components/TreatmentAdditionalContent';
import ContentReviewBadge from '../../../components/ContentReviewBadge';
import { getSubcategoryContent } from '../../data/subcategoryContent';

export default function HairTreatmentPage() {
  const categoryName = 'Aesthetic Dermatology';
  const subcategoryName = 'Hair Treatment';

  // Get content from data file
  const content = getSubcategoryContent('aesthetic-dermatology-dubai', 'hair-treatment');

  const navItems = [
    { id: 'treatment-info', label: 'Treatment Info' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'professional-benefits', label: 'Professional Benefits' },
    { id: 'why-choose', label: 'Why Choose Us' },
    { id: 'causes', label: 'Causes' },
    { id: 'our-doctors', label: 'Our Doctors' },
    { id: 'faq', label: 'FAQ' },
    { id: 'book-now', label: 'Book Now' }
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ramacarepolyclinic.ae/" },
      { "@type": "ListItem", "position": 2, "name": "Aesthetic Dermatology", "item": "https://ramacarepolyclinic.ae/services/aesthetic-dermatology-dubai/" },
      { "@type": "ListItem", "position": 3, "name": "Hair Treatment", "item": "https://ramacarepolyclinic.ae/services/hair-treatment-dubai/" }
    ]
  };

  const medicalProcedureSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Hair Treatment",
    "description": "Personalized hair fall, scalp health, and hair regrowth treatment programs including PRP therapy and mesotherapy, delivered by DHA-licensed practitioners.",
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
    "areaServed": { "@type": "City", "name": "Dubai" }
  };

  // Dynamically generate FAQ schema from subcategory content data
  const rawFaqs = content?.faq?.faqs || content?.faq?.questions || [];
  const faqSchema = rawFaqs.length ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": rawFaqs.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  } : null;

  return (
    <Layout>
      <Head>
        <title key="title">Hair Treatment in Dubai – Stop Hair Fall & Regrow Hair Fast</title>
        <meta name="description" content="Struggling with hair fall or thinning? Get expert hair treatment in Dubai for stronger, healthier hair. Safe, effective care. Book now!" key="description" />
        <meta name="keywords" content="Hair treatment in Dubai, Hair treatment in Jumeirah 1, Hair loss treatment Dubai, Hair restoration Dubai, PRP hair treatment Dubai, Mesotherapy hair treatment Dubai, Hair transplant Dubai, Thinning hair solutions Dubai, Scalp treatment Dubai, Medical hair clinic Dubai, DHA licensed hair clinic, Hair care specialists in Dubai, Advanced hair therapy Dubai" />

        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Hair Treatment in Dubai | RamaCare Polyclinic" />
        <meta property="og:description" content="Struggling with hair fall or thinning? Get expert hair treatment in Dubai for stronger, healthier hair. DHA-licensed specialists. Book now!" />
        <meta property="og:url" content="https://ramacarepolyclinic.ae/services/hair-treatment-dubai/" />
        <meta property="og:image" content="https://ramacarepolyclinic.ae/images/hairs.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="RamaCare Polyclinic" />
        <meta property="og:locale" content="en_AE" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hair Treatment in Dubai | RamaCare Polyclinic" />
        <meta name="twitter:description" content="Struggling with hair fall or thinning? Get expert hair treatment in Dubai for stronger, healthier hair. DHA-licensed specialists." />
        <meta name="twitter:image" content="https://ramacarepolyclinic.ae/images/hairs.jpg" />

        {/* Structured Data Schemas */}
        <script
          key="breadcrumb-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema, null, 2) }}
        />
        <script
          key="medical-procedure-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalProcedureSchema, null, 2) }}
        />
        {faqSchema && (
          <script
            key="faq-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema, null, 2) }}
          />
        )}
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
      <TreatmentAdditionalContent content={content} />
      <PatientTestimonials content={content?.testimonials} />
      <DoctorsSection content={content?.doctors} />
      <PaymentInsurance content={content?.paymentInsurance} />
      <ContentReviewBadge doctorName="Dr. Sahar Zomorrodi" pageSlug="hair-treatment-dubai" />
      <FAQSection content={content?.faq} />
      <BookConsultation content={content?.bookConsultation} />
    </Layout>
  );
}
