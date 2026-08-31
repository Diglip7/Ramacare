import Layout from '../../../components/Layout';
import Head from "next/head";
import TreatmentHero from '../../../components/TreatmentHero';
import QuickNavigation from '../../../components/QuickNavigation';
// import CertificationsSection from '../../../components/CertificationsSection';
import TreatmentOverview from '../../../components/TreatmentOverview';
import BastiTherapySections from '../../../components/BastiTherapySections';
import HealingJourney from '../../../components/HealingJourney';
import TreatmentBenefits from '../../../components/TreatmentBenefits';
import ScientificExplanation from '../../../components/ScientificExplanation';
import CostAndResults from '../../../components/CostAndResults';
import PatientTestimonials from '../../../components/VideoTestimonials';
import DoctorsSection from '../../../components/DoctorsSection';
// import PricingPackages from '../../../components/PricingPackages';
import PaymentInsurance from '../../../components/PaymentInsurance';
import FAQSection from '../../../components/Faq';
import BookConsultation from '../../../components/BookConsultation';
import ContentReviewBadge from '../../../components/ContentReviewBadge';
import { getSubcategoryContent } from '../../data/subcategoryContent';


export default function BastiTherapyPage() {
  const categoryName = 'Ayurveda';
  const subcategoryName = 'Basti Therapy';

  // Get content from data file
  const content = getSubcategoryContent('ayurveda-dubai', 'basti-therapy');

  // Custom navigation items for Basti Therapy page
  const navItems = [
    { id: 'treatment-info', label: 'Overview' },
    { id: 'conditions-treated', label: 'Conditions' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'benefits', label: 'Benefits' },
    { id: 'treatment-process', label: 'Treatment Types' },
    { id: 'why-choose-us', label: 'Why Choose Us' },
    { id: 'gut-health', label: 'Gut Health' },
    { id: 'cost-and-results', label: 'Cost & Recovery' },
    { id: 'faq', label: 'FAQ' },
    { id: 'book-now', label: 'Book Now' },
  ];

  const faqsForSchema = content?.faq?.faqs?.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer.replace(/<[^>]*>/g, '')
    }
  })) || [];

  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": "https://ramacarepolyclinic.ae/services/basti-therapy-dubai/#webpage",
        "url": "https://ramacarepolyclinic.ae/services/basti-therapy-dubai/",
        "name": "Basti Therapy in Dubai | Ayurvedic Detox & Vata Balance Treatment",
        "description": "Experience authentic Basti Therapy in Dubai for digestive health, joint pain relief, and Vata dosha balance. DHA-licensed clinic with personalized Panchakarma detox programs.",
        "inLanguage": "en",
        "isPartOf": {
          "@type": "WebSite",
          "url": "https://ramacarepolyclinic.ae/",
          "name": "RamaCare Polyclinic"
        },
        "about": {
          "@type": "MedicalTherapy",
          "name": "Basti Therapy"
        },
        "lastReviewed": "2026-08-29",
        "reviewedBy": {
          "@id": "https://ramacarepolyclinic.ae/services/basti-therapy-dubai/#physician"
        },
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ramacarepolyclinic.ae/" },
            { "@type": "ListItem", "position": 2, "name": "Ayurveda", "item": "https://ramacarepolyclinic.ae/services/ayurveda-dubai" },
            { "@type": "ListItem", "position": 3, "name": "Basti Therapy", "item": "https://ramacarepolyclinic.ae/services/basti-therapy-dubai/" }
          ]
        }
      },
      {
        "@type": "Physician",
        "@id": "https://ramacarepolyclinic.ae/services/basti-therapy-dubai/#physician",
        "name": "Dr. Shamna Keloth Meethal",
        "medicalSpecialty": "Ayurveda",
        "honorificSuffix": "BAMS",
        "hasCredential": "DHA Licensed Ayurveda Doctor",
        "worksFor": {
          "@type": "MedicalOrganization",
          "name": "RamaCare Polyclinic"
        },
        "url": "https://ramacarepolyclinic.ae/doctors/dr-shamna-keloth-meethal-ayurveda-doctor-dubai/"
      },
      {
        "@type": "MedicalProcedure",
        "@id": "https://ramacarepolyclinic.ae/services/basti-therapy-dubai/#procedure",
        "name": "Basti Therapy in Dubai",
        "alternateName": "Ayurvedic Basti Detox & Vata Balance Treatment",
        "url": "https://ramacarepolyclinic.ae/services/basti-therapy-dubai/",
        "mainEntityOfPage": "https://ramacarepolyclinic.ae/services/basti-therapy-dubai/",
        "description": "Basti Therapy in Dubai at RamaCare Polyclinic offers traditional Ayurvedic detoxification treatment designed to support digestive wellness, remove accumulated toxins, and restore natural Vata dosha balance through personalized herbal therapies.",
        "procedureType": "Ayurvedic detox treatment",
        "bodyLocation": "Colon and digestive system",
        "howPerformed": "Basti Therapy involves administration of herbal oils or medicated decoctions to support colon cleansing, detoxification, and Vata balance. Preparatory procedures such as Abhyanga Massage and mild steam therapy may be recommended before the main detox procedure.",
        "preparation": "Patients undergo initial Ayurvedic consultation and assessment of body constitution (dosha), digestive health, and lifestyle habits before beginning Basti Therapy.",
        "followup": "Post-therapy guidance and follow-up assessments are recommended to support balanced recovery and monitor digestive wellness progress.",
        "indication": [
          "Digestive disorders",
          "Vata dosha imbalance",
          "Joint pain and stiffness",
          "Chronic constipation",
          "Stress and nervous system imbalance",
          "Detoxification and wellness"
        ],
        "possibleComplication": "Mild temporary digestive changes may occur during detoxification depending on therapy intensity and individual body constitution.",
        "provider": {
          "@type": "MedicalClinic",
          "name": "RamaCare Polyclinic – Ayurvedic & Wellness Department",
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
          "priceRange": "$$$"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://ramacarepolyclinic.ae/services/basti-therapy-dubai/#faq",
        "mainEntity": faqsForSchema
      }
    ]
  };

  return (
    <Layout>
      <Head>
        <title key="title">Basti Therapy in Dubai | Ayurvedic Detox & Vata Balance Treatment</title>
        <meta name="description" content="Experience authentic Basti Therapy in Dubai for digestive health, joint pain relief, and Vata dosha balance. DHA-licensed clinic with personalized Panchakarma detox programs." key="description" />
        <meta name="robots" content="index, follow" key="robots" />
        <link rel="canonical" href="https://ramacarepolyclinic.ae/services/basti-therapy-dubai/" key="canonical" />

        {/* Open Graph Tags */}
        <meta property="og:type" content="website" key="og:type" />
        <meta property="og:title" content="Basti Therapy in Dubai | Ayurvedic Detox & Vata Balance Treatment" key="og:title" />
        <meta property="og:description" content="Experience authentic Basti Therapy in Dubai for digestive health, joint pain relief, and Vata dosha balance. DHA-licensed clinic with personalized Panchakarma detox programs." key="og:description" />
        <meta property="og:url" content="https://ramacarepolyclinic.ae/services/basti-therapy-dubai/" key="og:url" />
        <meta property="og:image" content="https://ramacarepolyclinic.ae/images/basti-therapy.jpg" key="og:image" />
        <meta property="og:image:width" content="1200" key="og:image:width" />
        <meta property="og:image:height" content="630" key="og:image:height" />
        <meta property="og:image:alt" content="Basti Therapy in Dubai - RamaCare Polyclinic" key="og:image:alt" />
        <meta property="og:site_name" content="RamaCare Polyclinic" key="og:site_name" />
        <meta property="og:locale" content="en_AE" key="og:locale" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content="Basti Therapy in Dubai | Ayurvedic Detox & Vata Balance Treatment" key="twitter:title" />
        <meta name="twitter:description" content="Experience authentic Basti Therapy in Dubai for digestive health, joint pain relief, and Vata dosha balance." key="twitter:description" />
        <meta name="twitter:image" content="https://ramacarepolyclinic.ae/images/basti-therapy.jpg" key="twitter:image" />

        {/* Structured Data Schemas */}
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
      
      
      {/* 1. Treatment Overview */}
      <div id="treatment-info">
        <TreatmentOverview 
          subcategoryName={subcategoryName}
          content={content?.overview}
        />
      </div>

      {/* 2. Conditions Treated */}
      <BastiTherapySections sectionType="conditions" content={content?.overview} />

      {/* 3. How It Works - Healing Journey */}
      <div id="how-it-works">
        <HealingJourney content={content?.healingJourney} />
      </div>

      {/* 4. Treatment Benefits */}
      <div id="benefits">
        <TreatmentBenefits 
          content={content?.benefits}
        />
      </div>

      {/* 5. Types of Basti Therapy */}
      <BastiTherapySections sectionType="types" content={content?.treatmentProcess} />

      {/* 6. Why Choose Us */}
      <BastiTherapySections sectionType="whyChoose" content={content?.panchakarmaWhyChoose} />

      {/* 7. Gut Health & Detox Signs */}
      <div id="gut-health">
        <ScientificExplanation content={content?.scientificExplanation} />
      </div>

      {/* 8. Cost & Recovery */}
      <div id="cost-and-results">
        <CostAndResults content={content?.costResults} />
      </div>

      {/* 9. Testimonials, Doctors, Payment, FAQ */}
      <div id="faq">
        <PatientTestimonials content={content?.testimonials} />
        <DoctorsSection content={content?.doctors} />
        
        <PaymentInsurance content={content?.paymentInsurance} />
        <ContentReviewBadge doctorName="Dr. Shamna Keloth Meethal" pageSlug="basti-therapy-dubai" />
        <FAQSection content={content?.faq} />
      </div>

      {/* 10. Book Consultation */}
      <div id="book-now">
        <BookConsultation content={content?.bookConsultation} />
      </div>
    </Layout>
  );
}
