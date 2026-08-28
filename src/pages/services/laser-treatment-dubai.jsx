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

export default function LaserTreatmentPage() {
  const categoryName = 'Aesthetic Dermatology';
  const subcategoryName = 'Laser Treatment';

  // Get content from data file
  const content = getSubcategoryContent('aesthetic-dermatology-dubai', 'laser-treatment');

  const navItems = [
    { id: 'treatment-info', label: 'Treatment Info' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'sessions-and-results', label: 'Sessions & Results' },
    { id: 'professional-benefits', label: 'Professional Benefits' },
    { id: 'why-choose', label: 'Why Choose Us' },
    { id: 'conditions-we-treat', label: 'Conditions We Treat' },
    { id: 'our-doctors', label: 'Our Doctors' },
    { id: 'faq', label: 'FAQ' },
    { id: 'book-now', label: 'Book Now' }
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
        "name": "Aesthetic Dermatology",
        "item": "https://ramacarepolyclinic.ae/services/aesthetic-dermatology-dubai/"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Laser Treatment",
        "item": "https://ramacarepolyclinic.ae/services/laser-treatment-dubai/"
      }
    ]
  };

  const medicalProcedureSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Laser Treatment in Dubai",
    "description": "Advanced laser treatments for hair removal, skin rejuvenation, pigmentation correction, acne scar treatment, and anti-aging concerns using FDA-approved technology within a DHA-licensed facility.",
    "url": "https://ramacarepolyclinic.ae/services/laser-treatment-dubai/",
    "procedureType": "https://schema.org/NoninvasiveProcedure",
    "bodyLocation": "Skin",
    "provider": {
      "@type": "MedicalClinic",
      "name": "RamaCare Polyclinic",
      "url": "https://ramacarepolyclinic.ae/",
      "image": "https://ramacarepolyclinic.ae/images/laser.jpg",
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
        <title key="title">Laser Treatment in Dubai | Safe & Advanced Laser Clinic</title>
        <meta name="description" content="Experience expert laser treatment in Dubai for hair removal, skin rejuvenation, and pigmentation. Personalized care with safe, advanced technology by licensed specialists." key="description" />
        <meta name="keywords" content="Laser treatment in Dubai, Laser clinic Dubai, Laser hair removal Dubai, Skin laser treatment Dubai, Laser pigmentation treatment Dubai, Laser skin rejuvenation Dubai, DHA licensed laser clinic, Advanced laser therapy Dubai, Medical laser clinic Dubai, Safe laser treatment in Dubai, Cosmetic laser treatment Dubai, Pico laser treatment Dubai" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Laser Treatment in Dubai | Safe & Advanced Laser Clinic" />
        <meta property="og:description" content="Expert laser treatment in Dubai for hair removal, skin rejuvenation, and pigmentation. Personalized care with safe, advanced technology by licensed specialists." />
        <meta property="og:url" content="https://ramacarepolyclinic.ae/services/laser-treatment-dubai/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://ramacarepolyclinic.ae/images/laser.jpg" />
        <meta property="og:site_name" content="RamaCare Polyclinic" />
        <meta property="og:locale" content="en_AE" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Laser Treatment in Dubai | Safe & Advanced Laser Clinic" />
        <meta name="twitter:description" content="Expert laser treatment in Dubai for hair removal, skin rejuvenation, and pigmentation. Personalized care with safe, advanced technology by licensed specialists." />
        <meta name="twitter:image" content="https://ramacarepolyclinic.ae/images/laser.jpg" />

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
      <ContentReviewBadge doctorName="Sonita Sinaga" pageSlug="laser-treatment-dubai" />
      <FAQSection content={content?.faq} />
      <BookConsultation content={content?.bookConsultation} />
    </Layout>
  );
}
