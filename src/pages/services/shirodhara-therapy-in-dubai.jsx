import Layout from '../../../components/Layout';
import Head from "next/head";
import TreatmentHero from '../../../components/TreatmentHero';
import QuickNavigation from '../../../components/QuickNavigation';
// import CertificationsSection from '../../../components/CertificationsSection';
import TreatmentOverview from '../../../components/TreatmentOverview';
import HealingJourney from '../../../components/HealingJourney';
import ScientificExplanation from '../../../components/ScientificExplanation';
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

export default function ShirodharaTherapyTreatmentPage() {
  const categoryName = 'Ayurveda';
  const subcategoryName = 'Shirodhara Therapy';

  // Get content from data file
  const content = getSubcategoryContent('ayurveda-dubai', 'shirodhara-therapy');

  // Custom navigation items for Shirodhara Therapy page
  const navItems = [
    { id: 'treatment-info', label: 'Overview' },
    { id: 'benefits', label: 'Benefits' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'scientific-explanation', label: 'Scientific Explanation' },
    { id: 'cost-and-results', label: 'Cost' },
    { id: 'comparison', label: 'Comparison' },
    { id: 'our-doctors', label: 'Doctors' },
    { id: 'faq', label: 'FAQs' },
    { id: 'book-now', label: 'Book Now' },
  ];

  return (
    <Layout>
      <Head>
        <title key="title">Shirodhara Therapy in Dubai | Relaxing Ayurvedic Treatment</title>
        <meta name="description" content="Experience Shirodhara Therapy in Dubai at RamaCare Polyclinic. A traditional Ayurvedic treatment involving a continuous flow of warm herbal oil on the forehead for deep relaxation and mental clarity." key="description" />
        <meta name="keywords" content="Shirodhara Therapy Dubai, Ayurvedic Shirodhara Dubai, Stress relief treatment Dubai, Ayurvedic oil pouring therapy, Mental wellness Dubai, Holistic healing Dubai, Traditional Shirodhara Dubai, Relaxation therapy Dubai, Ayurvedic head massage Dubai" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
{
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  "@id": "https://ramacarepolyclinic.ae/services/shirodhara-therapy-in-dubai/#procedure",
  "name": "Shirodhara Therapy in Dubai",
  "alternateName": "Ayurvedic Oil Pouring Therapy",
  "url": "https://ramacarepolyclinic.ae/services/shirodhara-therapy-in-dubai/",
  "mainEntityOfPage": "https://ramacarepolyclinic.ae/services/shirodhara-therapy-in-dubai/",
  "description": "Shirodhara Therapy in Dubai at RamaCare Polyclinic is a deeply relaxing Ayurvedic treatment where warm medicated oil is gently poured in a continuous stream over the forehead (the 'third eye' area) to calm the nervous system and promote mental clarity.",
  "procedureType": "Ayurvedic treatment and relaxation therapy",
  "bodyLocation": "Head and forehead",
  "howPerformed": "The therapy involves the patient lying down while a steady stream of warm herbal oil is poured from a specific height onto the forehead in a rhythmic motion. This is often preceded or followed by a gentle head massage.",
  "preparation": "It is recommended to have a light meal and wear comfortable clothing. Hair should be washed after the session as it will be oily.",
  "followup": "Results are explained in detail with tailored recommendations and a follow-up plan for monitoring and ongoing care.",
  "indication": [
    "Stress and anxiety relief",
    "Insomnia and sleep disorders",
    "Mental fatigue and headaches",
    "Hypertension management",
    "Overall nervous system relaxation"
  ],
  "provider": {
    "@type": "MedicalClinic",
    "name": "RamaCare Polyclinic - Ayurveda Department",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "12 Al Dhiyafah Rd - Jumeirah Terrace Building, Ground Floor, Jumeirah 1",
      "addressLocality": "Jumeirah 1",
      "addressRegion": "Dubai",
      "postalCode": "393558",s
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
      <HealingJourney content={content?.healingJourney} />
      <TreatmentBenefits 
        content={content?.benefits}
      />
      <ScientificExplanation content={content?.scientificExplanation} />
      <CostAndResults content={content?.costResults} />
      <PatientTestimonials content={content?.testimonials} />
      <DoctorsSection content={content?.doctors} />
      
      <PaymentInsurance content={content?.paymentInsurance} />
      <ContentReviewBadge doctorName="Dr. Shamna Keloth Meethal" pageSlug="shirodhara-therapy-in-dubai" />
      <FAQSection content={content?.faq} />
      <BookConsultation content={content?.bookConsultation} />
    </Layout>
  );
}
