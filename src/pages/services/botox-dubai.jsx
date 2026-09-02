import Layout from '../../../components/Layout';
import Head from "next/head";
import TreatmentHero from '../../../components/TreatmentHero';
import QuickNavigation from '../../../components/QuickNavigation';
// import CertificationsSection from '../../../components/CertificationsSection';
import TreatmentOverview from '../../../components/TreatmentOverview';
import HealingJourney from '../../../components/HealingJourney';
import TreatmentBenefits from '../../../components/TreatmentBenefits';
import TreatmentAreasAndCare from '../../../components/TreatmentAreasAndCare';
import PatientTestimonials from '../../../components/VideoTestimonials';
import DoctorsSection from '../../../components/DoctorsSection';
// import PricingPackages from '../../../components/PricingPackages';
import PaymentInsurance from '../../../components/PaymentInsurance';
import FAQSection from '../../../components/Faq';
import BookConsultation from '../../../components/BookConsultation';
import ContentReviewBadge from '../../../components/ContentReviewBadge';
import { getSubcategoryContent } from '../../data/subcategoryContent';


export default function BotoxPage() {
  const categoryName = 'Aesthetic Dermatology';
  const subcategoryName = 'Botox';

  // Get content from data file - nested path
  const content = getSubcategoryContent('aesthetic-dermatology-dubai', 'skin-treatment/botox');

  return (
    <Layout>
    <Head>
  <title key="title">Botox in Dubai for Wrinkle Reduction and Facial Rejuvenation</title>
  <meta name="description" content="Botox in Dubai helps reduce fine lines and wrinkles, relax facial muscles, and restore a refreshed look through safe, doctor-administered treatment." key="description" />
  <meta name="keywords" content="Botox in Dubai, Botox treatment Dubai, Wrinkle reduction Dubai, Anti-aging Botox, Facial Botox treatment, Forehead lines treatment, Crow’s feet Botox, Non-surgical facial rejuvenation, Medical Botox Dubai" />
  {/* Open Graph Meta Tags */}
  <meta property="og:title" content="Botox in Dubai for Wrinkle Reduction and Facial Rejuvenation" />
  <meta property="og:description" content="Botox in Dubai helps reduce fine lines and wrinkles, relax facial muscles, and restore a refreshed look through safe, doctor-administered treatment." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://ramacarepolyclinic.ae/services/botox-dubai/" />
  <meta property="og:image" content="https://ramacarepolyclinic.ae/images/Facial assessment consultation for Botox price.jpg" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="Botox in Dubai - RamaCare Polyclinic" />
  <meta property="og:site_name" content="RamaCare Polyclinic" />
  <meta property="og:locale" content="en_AE" />

  {/* Twitter Card Meta Tags */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Botox in Dubai for Wrinkle Reduction and Facial Rejuvenation" />
  <meta name="twitter:description" content="Botox in Dubai helps reduce fine lines and wrinkles, relax facial muscles, and restore a refreshed look through safe, doctor-administered treatment." />
  <meta name="twitter:image" content="https://ramacarepolyclinic.ae/images/Facial assessment consultation for Botox price.jpg" />

  <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "MedicalWebPage",
          "@id": "https://ramacarepolyclinic.ae/services/botox-dubai/#webpage",
          "url": "https://ramacarepolyclinic.ae/services/botox-dubai/",
          "name": "Botox in Dubai for Wrinkle Reduction and Facial Rejuvenation",
          "description": "Botox in Dubai helps reduce fine lines and wrinkles, relax facial muscles, and restore a refreshed look through safe, doctor-administered treatment.",
          "inLanguage": "en",
          "isPartOf": {
            "@type": "WebSite",
            "url": "https://ramacarepolyclinic.ae/",
            "name": "RamaCare Polyclinic"
          },
          "about": {
            "@type": "MedicalProcedure",
            "name": "Botox (Botulinum Toxin) Injection"
          },
          "lastReviewed": "2026-08-29",
          "reviewedBy": {
            "@id": "https://ramacarepolyclinic.ae/services/botox-dubai/#physician"
          },
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ramacarepolyclinic.ae/" },
              { "@type": "ListItem", "position": 2, "name": "Aesthetic Dermatology", "item": "https://ramacarepolyclinic.ae/services/aesthetic-dermatology-dubai" },
              { "@type": "ListItem", "position": 3, "name": "Botox", "item": "https://ramacarepolyclinic.ae/services/botox-dubai/" }
            ]
          }
        },
        {
          "@type": "Physician",
          "@id": "https://ramacarepolyclinic.ae/services/botox-dubai/#physician",
          "name": "Dr. Sahar Zomorrodi",
          "medicalSpecialty": "General Practice",
          "honorificSuffix": "MD",
          "hasCredential": "DHA Licensed General Practitioner, Diploma from American Aesthetic Academy",
          "worksFor": {
            "@type": "MedicalOrganization",
            "name": "RamaCare Polyclinic"
          },
          "url": "https://ramacarepolyclinic.ae/doctors/dr-sahar-zomorrodi-general-practitioner-dubai/"
        },
        {
          "@type": "FAQPage",
          "@id": "https://ramacarepolyclinic.ae/services/botox-dubai/#faq",
          "mainEntity": content?.faq?.faqs?.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          })) || []
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
     <QuickNavigation navItems={[
      { id: 'treatment-info', label: 'Treatment Info' },
      { id: 'how-it-works', label: 'How It Works' },
      { id: 'benefits', label: 'Benefits' },
      { id: 'botox-treatment-areas', label: 'Treatment Areas & Care' },
      { id: 'testimonials', label: 'Success Stories' },
      { id: 'our-doctors', label: 'Our Doctors' },
      { id: 'faq', label: 'FAQ' },
      { id: 'book-now', label: 'Book Now' },
    ]} />
    
    <TreatmentOverview 
      subcategoryName={subcategoryName}
      content={content?.overview}
    />
      <HealingJourney content={content?.healingJourney} />
      <TreatmentBenefits 
        content={content?.benefits}
      />
      <TreatmentAreasAndCare content={content?.botoxTreatmentAreas} sectionId="botox-treatment-areas" />
       <PatientTestimonials content={content?.testimonials} />
       <DoctorsSection content={content?.doctors} />
    
    <PaymentInsurance content={content?.paymentInsurance} />
      <ContentReviewBadge doctorName="Dr. Sahar Zomorrodi" pageSlug="botox-dubai" />
      <FAQSection content={content?.faq} />
      <BookConsultation content={content?.bookConsultation} />
    </Layout>
  );
}
