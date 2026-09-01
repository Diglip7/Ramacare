import Layout from '../../../components/Layout';
import Head from "next/head";
import TreatmentHero from '../../../components/TreatmentHero';
import QuickNavigation from '../../../components/QuickNavigation';
// import CertificationsSection from '../../../components/CertificationsSection';
import TreatmentOverview from '../../../components/TreatmentOverview';
import HealingJourney from '../../../components/HealingJourney';
import TreatmentBenefits from '../../../components/TreatmentBenefits';
import ServiceExtrasSection from '../../../components/ServiceExtrasSection';
import SkinTreatmentAdditionalContent from '../../../components/SkinTreatmentAdditionalContent';
import PatientTestimonials from '../../../components/VideoTestimonials';
import DoctorsSection from '../../../components/DoctorsSection';
// import PricingPackages from '../../../components/PricingPackages';
import PaymentInsurance from '../../../components/PaymentInsurance';
import FAQSection from '../../../components/Faq';
import BookConsultation from '../../../components/BookConsultation';
import ContentReviewBadge from '../../../components/ContentReviewBadge';
import { getSubcategoryContent } from '../../data/subcategoryContent';
import { DOCTORS } from '../../data/doctors';


export default function BotoxHyperhidrosisPage() {
  const categoryName = 'Aesthetic Dermatology';
  const subcategoryName = 'Botox Hyperhidrosis';

  // Get content from data file - nested path
  const content = getSubcategoryContent('aesthetic-dermatology-dubai', 'skin-treatment/botox-hyperhidrosis');
  const reviewDoctor = DOCTORS['dr-sahar-zomorrodi-general-practitioner-dubai'] || DOCTORS.sahar;

  // Generate FAQ schema dynamically from content
  const faqSchema = content?.faq?.faqs?.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  })) || [];

  const PAGE_URL = 'https://ramacarepolyclinic.ae/services/botox-hyperhidrosis-dubai/';
  const DOCTOR_URL = 'https://ramacarepolyclinic.ae/doctors/dr-sahar-zomorrodi-general-practitioner-dubai';
  const OG_IMAGE = 'https://ramacarepolyclinic.ae/images/botox-hyper.jpg';

  const navItems = [
    { id: 'treatment-info', label: 'Treatment Info' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'benefits', label: 'Benefits' },
    { id: 'recovery-aftercare', label: 'Recovery & Aftercare' },
    { id: 'why-choose-ramacare', label: 'Why Choose Us' },
    { id: 'when-to-consider', label: 'Good Candidate' },
    { id: 'our-doctors', label: 'Our Doctors' },
    { id: 'faq', label: 'FAQ' },
    { id: 'book-now', label: 'Book Now' }
  ];



  return (
    <Layout>
        <Head>
  <title key="title">Botox Hyperhidrosis in Dubai for Excessive Sweating</title>
  <meta name="description" content="Botox hyperhidrosis in Dubai helps manage excessive sweating safely by reducing underarm, palm, and foot sweating under expert medical care." key="description" />
  <meta name="keywords" content="Botox hyperhidrosis in Dubai, Excessive sweating treatment Dubai, Hyperhidrosis treatment Dubai, Botox for sweating Dubai, Underarm sweating treatment, Palmar hyperhidrosis treatment, Non-surgical sweating control, Medical hyperhidrosis care, Sweat reduction treatment Dubai" />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href={PAGE_URL} />

  <meta property="og:type" content="website" />
  <meta property="og:title" content="Botox Hyperhidrosis in Dubai for Excessive Sweating" />
  <meta property="og:description" content="Botox hyperhidrosis in Dubai helps manage excessive sweating safely by reducing underarm, palm, and foot sweating under expert medical care." />
  <meta property="og:url" content={PAGE_URL} />
  <meta property="og:image" content={OG_IMAGE} />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:site_name" content="RamaCare Polyclinic" />
  <meta property="og:locale" content="en_AE" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Botox Hyperhidrosis in Dubai for Excessive Sweating" />
  <meta name="twitter:description" content="Botox hyperhidrosis in Dubai helps manage excessive sweating safely by reducing underarm, palm, and foot sweating under expert medical care." />
  <meta name="twitter:image" content={OG_IMAGE} />

  <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
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
              "item": "https://ramacarepolyclinic.ae/services/aesthetic-dermatology-dubai"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Botox Hyperhidrosis",
              "item": "https://ramacarepolyclinic.ae/services/botox-hyperhidrosis-dubai/"
            }
          ]
        },
        {
          "@type": "MedicalProcedure",
          "name": "Botox Hyperhidrosis Treatment in Dubai",
          "description": "Non-surgical botulinum toxin injection treatment that temporarily blocks nerve signals to overactive sweat glands, significantly reducing excessive sweating in the underarms, palms, soles of the feet, or forehead.",
          "url": "https://ramacarepolyclinic.ae/services/botox-hyperhidrosis-dubai/",
          "procedureType": "https://schema.org/PercutaneousProcedure",
          "bodyLocation": "Underarms, Palms, Feet, Forehead",
          "reviewedBy": {
            "@type": "Physician",
            "name": "Dr. Sahar Zomorrodi",
            "medicalSpecialty": "General Practice",
            "url": "https://ramacarepolyclinic.ae/doctors/dr-sahar-zomorrodi-general-practitioner-dubai/"
          },
          "provider": {
            "@type": "MedicalClinic",
            "name": "RamaCare Polyclinic",
            "url": "https://ramacarepolyclinic.ae/",
            "image": "https://ramacarepolyclinic.ae/images/botox-hyper.jpg",
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
        },
        {
          "@type": "FAQPage",
          "mainEntity": faqSchema
        }
      ]
    })
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
      <ServiceExtrasSection aftercareContent={content?.aftercareContent} whyChooseContent={content?.whyChooseContent} />
      <SkinTreatmentAdditionalContent content={content} />
       <PatientTestimonials content={content?.testimonials} />
       <DoctorsSection content={content?.doctors} />
    
    <PaymentInsurance content={content?.paymentInsurance} />
      <ContentReviewBadge doctorName="Dr. Sahar Zomorrodi" pageSlug="botox-hyperhidrosis-dubai" />
      <FAQSection content={content?.faq} />
      <BookConsultation content={content?.bookConsultation} />
    </Layout>
  );
}
