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
  const subcategoryName = 'Skin Diseases Treatment in Ayurveda';

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

  return (
    <Layout>
      <Head>
  <title key="title">Skin Diseases Treatment Dubai | Expert Dermatology Care</title>
  <meta name="description" content="Receive safe and natural Ayurvedic treatment for skin diseases in Dubai. Personalized care for acne, eczema, psoriasis, rashes, and healthy glowing skin." key="description" />
  <meta name="keywords" content="Skin diseases treatment Dubai, Ayurvedic skin treatment Dubai, Acne treatment Dubai, Eczema treatment Dubai, Psoriasis treatment Dubai, Rashes treatment Ayurveda Dubai, Natural skin care Dubai, Holistic skin treatment Dubai, Ayurvedic dermatologist in Dubai, Herbal skin therapy Dubai, Personalized skin care Dubai, Ayurvedic remedies for skin issues" />
  
   <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: `
{
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  "@id": "https://ramacarepolyclinic.ae/services/skin-diseases-treatmen/t/#procedure",
  "name": "Skin Diseases Treatment in Dubai",
  "alternateName": "Dermatology & Skin Condition Treatment",
  "url": "https://ramacarepolyclinic.ae/services/skin-diseases-treatmen/t/",
  "mainEntityOfPage": "https://ramacarepolyclinic.ae/services/skin-diseases-treatmen/t/",
  "description": "Comprehensive skin diseases treatment in Dubai at RamaCare Polyclinic for acne, eczema, psoriasis, dermatitis, infections, rashes and other dermatological conditions by DHA-licensed dermatologists.",
  "procedureType": "Dermatological medical procedure",
  "bodyLocation": "Skin",
  "howPerformed": "Skin disease treatment is performed through clinical evaluation, diagnostic assessment, topical/systemic therapy and personalized dermatology protocols tailored to specific conditions.",
  "preparation": "Initial consultation with skin evaluation and possible diagnostic tests are performed to plan the treatment.",
  "followup": "Scheduled follow-up visits and skin care guidance are recommended to track progress and manage chronic or recurring conditions.",
  "indication": [
    "Acne and breakouts",
    "Eczema and dermatitis",
    "Psoriasis",
    "Skin infections",
    "Rashes and irritation",
    "Pigmentation disorders"
  ],
  "possibleComplication": "Mild irritation or temporary sensitivity may occur depending on treatment type.",
  "provider": {
    "@type": "MedicalClinic",
    "name": "RamaCare Polyclinic - Dermatology Department",
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
}
    `,
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
    
    <HealingJourney content={content?.healingJourney} />
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

