import Layout from '../../../components/Layout';
import Head from "next/head";
import TreatmentHero from '../../../components/TreatmentHero';
import QuickNavigation from '../../../components/QuickNavigation';
// import CertificationsSection from '../../../components/CertificationsSection';
import TreatmentOverview from '../../../components/TreatmentOverview';
import BastiTherapySections from '../../../components/BastiTherapySections';
import ContentSection from '../../../components/ContentSection';
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


export default function SkinDiseasesTreatmentPage() {
  const categoryName = 'Ayurveda';
  const subcategoryName = 'Ayurvedic Skin Disease Treatment';

  // Get content from data file
  const content = getSubcategoryContent('ayurveda-dubai', 'skin-diseases-treatment');

  // Custom navigation items for this page
  const navItems = [
    { id: 'treatment-info', label: 'Treatment Overview' },
    { id: 'why-choose-us', label: 'Why Choose' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'benefits', label: 'Benefits' },
    { id: 'treatment-process', label: 'Treatment Process' },
    { id: 'digestive-health', label: 'Digestive Health' },
    { id: 'cost-and-results', label: 'Recovery' },
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
        "name": "Skin Diseases Treatment",
        "item": "https://ramacarepolyclinic.ae/services/skin-diseases-treatment/"
      }
    ]
  };

  const medicalProcedureSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Ayurvedic Skin Disease Treatment in Dubai",
    "description": "Holistic Ayurvedic treatment for skin conditions including acne, eczema, psoriasis, fungal and allergic skin concerns, and pigmentation, focused on balancing doshas, improving digestion, and supporting long-term skin wellness through herbal medicines, external applications, and detoxification therapies.",
    "url": "https://ramacarepolyclinic.ae/services/skin-diseases-treatment/",
    "procedureType": "https://schema.org/NoninvasiveProcedure",
    "bodyLocation": "Skin",
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
      "image": "https://ramacarepolyclinic.ae/images/skin1.jpg",
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
        <title key="title">Skin Diseases Treatment Dubai | Expert Dermatology Care</title>
        <meta
          name="description"
          content="Receive safe and natural Ayurvedic treatment for skin diseases in Dubai. Personalized care for acne, eczema, psoriasis, rashes, and healthy glowing skin."
          key="description"
        />
        <meta
          name="keywords"
          content="Skin diseases treatment Dubai, Ayurvedic skin treatment Dubai, Acne treatment Dubai, Eczema treatment Dubai, Psoriasis treatment Dubai, Rashes treatment Ayurveda Dubai, Natural skin care Dubai, Holistic skin treatment Dubai, Ayurvedic dermatologist in Dubai, Herbal skin therapy Dubai, Personalized skin care Dubai, Ayurvedic remedies for skin issues"
          key="keywords"
        />
        <meta name="robots" content="index, follow" key="robots" />
        <link rel="canonical" href="https://ramacarepolyclinic.ae/services/skin-diseases-treatment/" key="canonical" />

        {/* Open Graph Tags */}
        <meta property="og:type" content="website" key="og:type" />
        <meta property="og:title" content="Skin Diseases Treatment Dubai | Expert Dermatology Care" key="og:title" />
        <meta
          property="og:description"
          content="Receive safe and natural Ayurvedic treatment for skin diseases in Dubai. Personalized care for acne, eczema, psoriasis, rashes, and healthy glowing skin."
          key="og:description"
        />
        <meta property="og:url" content="https://ramacarepolyclinic.ae/services/skin-diseases-treatment/" key="og:url" />
        <meta property="og:image" content="https://ramacarepolyclinic.ae/images/skin1.jpg" key="og:image" />
        <meta property="og:site_name" content="RamaCare Polyclinic" key="og:site_name" />
        <meta property="og:locale" content="en_AE" key="og:locale" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content="Skin Diseases Treatment Dubai | Expert Dermatology Care" key="twitter:title" />
        <meta
          name="twitter:description"
          content="Receive safe and natural Ayurvedic treatment for skin diseases in Dubai. Personalized care for acne, eczema, psoriasis, rashes, and healthy glowing skin."
          key="twitter:description"
        />
        <meta name="twitter:image" content="https://ramacarepolyclinic.ae/images/skin1.jpg" key="twitter:image" />

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
    
      <TreatmentOverview 
        subcategoryName={subcategoryName}
        content={content?.overview}
      />
    
      {/* Skin Conditions anchor point - scrolls to the skin conditions card within Treatment Overview */}
      <div id="skin-conditions" className="invisible -mt-20"></div>
    
      {/* Why Choose Section */}
      <BastiTherapySections 
        sectionType="whyChoose"
        content={content?.whyChoose}
      />
    
      {/* How It Works Section */}
      <ContentSection type="howItWorks" content={content?.howItWorks} />
    
      {/* Treatment Process Section */}
      <HealingJourney content={content?.healingJourney} sectionId="treatment-process" />
    
      {/* Digestive Health Section */}
      <ContentSection type="digestiveHealth" content={content?.digestiveHealth} />
    
      {/* Diet & Lifestyle Section */}
      <ContentSection type="dietLifestyle" content={content?.dietLifestyle} />
    
      {/* Recovery & Aftercare Section */}
      <ContentSection type="recoveryAftercare" content={content?.recoveryAftercare} />
    
      <TreatmentBenefits 
        content={content?.benefits}
      />
      <PatientTestimonials content={content?.testimonials} />
      <DoctorsSection content={content?.doctors} />
    
      <PaymentInsurance content={content?.paymentInsurance} />
      <ContentReviewBadge doctorName="Dr. Shamna Keloth Meethal" pageSlug="skin-diseases-treatment" />
      <FAQSection content={content?.faq} />
      <BookConsultation content={content?.bookConsultation} />
    </Layout>
  );
}

