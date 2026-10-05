import Layout from '../../../components/Layout';
import Head from "next/head";
import TreatmentHero from '../../../components/TreatmentHero';
import QuickNavigation from '../../../components/QuickNavigation';
// import CertificationsSection from '../../../components/CertificationsSection';
import TreatmentOverview from '../../../components/TreatmentOverview';
import AyurvedaInfoSection from '../../../components/AyurvedaInfoSection';  
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
  const subcategoryName = 'Ayurvedic Skin Treatment';

  // Get content from data file
  const content = getSubcategoryContent('ayurveda-dubai', 'skin-diseases-treatment');

  // Custom navigation items for this page
  const navItems = [
    { id: 'treatment-info', label: 'Treatment Overview' },
    { id: 'skin-condition-guide', label: 'Conditions', href: '#skin-condition-guide' },
    { id: 'which-doctor', label: 'Which Doctor', href: '#which-doctor' },
    { id: 'benefits', label: 'Benefits' },
    { id: 'treatment-process', label: 'Treatment Process' },
    { id: 'dubai-skin', label: 'Heat Rash', href: '#dubai-skin' },
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
        "name": "Skin Diseases Treatment",
        "item": "https://ramacarepolyclinic.ae/services/skin-diseases-treatment-dubai/"
      }
    ]
  };

      const skinSchema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "MedicalWebPage",
          "@id": "https://ramacarepolyclinic.ae/services/skin-diseases-treatment-dubai/#webpage",
          "url": "https://ramacarepolyclinic.ae/services/skin-diseases-treatment-dubai/",
          "name": "Ayurvedic Skin Treatment Dubai | Eczema, Psoriasis, Acne",
          "inLanguage": "en-AE",
          "about": { "@id": "https://ramacarepolyclinic.ae/services/skin-diseases-treatment-dubai/#therapy" },
          "isPartOf": { "@id": "https://ramacarepolyclinic.ae/services/ayurveda-dubai/#webpage" },
          "reviewedBy": { "@id": "https://ramacarepolyclinic.ae/doctors/dr-shamna-keloth-meethal-ayurveda-doctor-dubai/#physician" },
          "lastReviewed": "YYYY-MM-DD"
        },
        {
          "@type": "MedicalTherapy",
          "@id": "https://ramacarepolyclinic.ae/services/skin-diseases-treatment-dubai/#therapy",
          "name": "Ayurvedic skin treatment",
          "alternateName": ["Ayurvedic treatment for eczema", "Ayurvedic treatment for psoriasis", "Ayurvedic treatment for acne", "Ayurvedic treatment for skin allergy", "Kushtha chikitsa", "Takradhara", "Virechana", "Lepa"],
          "description": "Doctor-led Ayurvedic care for eczema, psoriasis, acne, skin allergies, urticaria, fungal infections, pigmentation and heat rash: consultation with a BAMS doctor, herbal medicines, external applications (Lepa, medicated oils), Takradhara and Virechana when suitable, and diet guidance, offered as complementary care alongside dermatology.",
          "relevantSpecialty": "https://schema.org/Ayurvedic",
          "bodyLocation": "Skin",
          "provider": { "@id": "https://ramacarepolyclinic.ae/#clinic" }
        },
        {
          "@type": "Physician",
          "@id": "https://ramacarepolyclinic.ae/doctors/dr-shamna-keloth-meethal-ayurveda-doctor-dubai/#physician",
          "name": "Dr. Shamna Keloth Meethal",
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
        <title key="title">Ayurvedic Skin Treatment Dubai | Eczema, Psoriasis, Acne</title>
        <meta
          name="description"
          content="Ayurvedic treatment for eczema, psoriasis, acne, skin allergy and heat rash in Jumeirah 1, Dubai. BAMS doctor, dermatologist on site. From AED 200."
          key="description"
        />
       
        <meta name="robots" content="index, follow" key="robots" />
        <link rel="canonical" href="https://ramacarepolyclinic.ae/services/skin-diseases-treatment-dubai/" key="canonical" />

        {/* Open Graph Tags */}
        <meta property="og:type" content="website" key="og:type" />
        <meta property="og:title" content="Ayurvedic Skin Treatment Dubai | Eczema, Psoriasis, Acne" key="og:title" />
        <meta
          property="og:description"
          content="Ayurvedic treatment for eczema, psoriasis, acne, skin allergy and heat rash in Jumeirah 1, Dubai. BAMS doctor, dermatologist on site. From AED 200."
          key="og:description"
        />
        <meta property="og:url" content="https://ramacarepolyclinic.ae/services/skin-diseases-treatment-dubai/" key="og:url" />
        <meta property="og:image" content="https://ramacarepolyclinic.ae/images/skin1.jpg" key="og:image" />
        <meta property="og:site_name" content="RamaCare Polyclinic" key="og:site_name" />
        <meta property="og:locale" content="en_AE" key="og:locale" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content="Ayurvedic Skin Treatment Dubai | Eczema, Psoriasis, Acne" key="twitter:title" />
        <meta
          name="twitter:description"
          content="Ayurvedic treatment for eczema, psoriasis, acne, skin allergy and heat rash in Jumeirah 1, Dubai. BAMS doctor, dermatologist on site. From AED 200."
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
      dangerouslySetInnerHTML={{ __html: JSON.stringify(skinSchema) }}
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
    
     <TreatmentOverview subcategoryName={subcategoryName} content={content?.overview} />
      <div id="skin-conditions" className="invisible -mt-20"></div>
      <AyurvedaInfoSection content={content?.conditionGuide} />       {/* NEW: condition-by-condition guide */}
      <AyurvedaInfoSection content={content?.eczemaVsPsoriasis} />    {/* NEW: eczema vs psoriasis */}
      <AyurvedaInfoSection content={content?.whichDoctor} />          {/* NEW: which doctor to see */}
      <BastiTherapySections sectionType="whyChoose" content={content?.whyChoose} />
    
      {/* How It Works Section */}
      <ContentSection type="howItWorks" content={content?.howItWorks} />
    
      {/* Treatment Process Section */}
      <HealingJourney content={content?.healingJourney} sectionId="treatment-process" />
    
      {/* Digestive Health Section */}
      <ContentSection type="digestiveHealth" content={content?.digestiveHealth} />
    
      {/* Diet & Lifestyle Section */}
      <ContentSection type="dietLifestyle" content={content?.dietLifestyle} />
      <AyurvedaInfoSection content={content?.dubaiSkin} />            {/* NEW: heat rash, sweat, AC and water */}
    
      {/* Recovery & Aftercare Section */}
      <ContentSection type="recoveryAftercare" content={content?.recoveryAftercare} />
    
      <TreatmentBenefits 
        content={content?.benefits}
      />
      <PatientTestimonials content={content?.testimonials} />
      <DoctorsSection content={content?.doctors} />
    
      <PaymentInsurance content={content?.paymentInsurance} />
      <ContentReviewBadge doctorName="Dr. Shamna Keloth Meethal" pageSlug="skin-diseases-treatment-dubai" lastReviewed="2026-01-12" />
      <FAQSection content={content?.faq} />
      <AyurvedaInfoSection content={content?.sources} />
      <BookConsultation content={content?.bookConsultation} />
    </Layout>
  );
}

