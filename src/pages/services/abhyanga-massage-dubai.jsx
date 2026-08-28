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

  return (
    <Layout>
      <Head>
        <title key="title">Abhyanga Massage Dubai | Full Body Ayurvedic Oil Massage</title>
        <meta name="description" content="Experience authentic Abhyanga massage in Dubai at RamaCare Polyclinic. A traditional Ayurvedic full-body oil therapy for deep relaxation, detox, and rejuvenation." key="description" />
        <meta name="keywords" content="Abhyanga Massage Dubai, Ayurvedic massage Dubai, Full body oil massage Dubai, Ayurvedic detox therapy, Stress relief massage Dubai, Traditional Ayurveda Dubai, Herbal oil massage Dubai, Relaxation therapy Dubai" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
{
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  "@id": "https://ramacarepolyclinic.ae/services/abhyanga-massage-dubai/#procedure",
  "name": "Abhyanga Massage in Dubai",
  "alternateName": "Full Body Ayurvedic Oil Massage",
  "url": "https://ramacarepolyclinic.ae/services/abhyanga-massage-dubai/",
  "mainEntityOfPage": "https://ramacarepolyclinic.ae/services/abhyanga-massage-dubai/",
  "description": "Abhyanga Massage in Dubai at RamaCare Polyclinic is a traditional Ayurvedic full-body oil therapy designed to relax the body, detoxify naturally, and restore inner balance using warm medicated herbal oils.",
  "procedureType": "Ayurvedic massage and relaxation therapy",
  "bodyLocation": "Full body",
  "howPerformed": "The therapy involves applying warm medicated herbal oil to the entire body using synchronized rhythmic movements to improve circulation, remove toxins, and balance doshas.",
  "preparation": "It is recommended to have a light meal and wear comfortable clothing. The therapist will guide you through the preparation.",
  "followup": "Results are explained in detail with tailored recommendations and a follow-up plan for monitoring and ongoing care.",
  "indication": [
    "Stress and anxiety relief",
    "Muscle stiffness and joint pain",
    "Poor blood circulation",
    "Sleep disturbances",
    "Fatigue and low energy"
  ],
  "provider": {
    "@type": "MedicalClinic",
    "name": "RamaCare Polyclinic - Ayurveda Department",
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
