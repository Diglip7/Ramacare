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
import { getSubcategoryContent } from '../../data/subcategoryContent';


export default function SignatureHydraFacialPage() {
  const categoryName = 'Facial';
  const subcategoryName = 'HydraFacial in Dubai';

   // Get content from data file
    const content = getSubcategoryContent('facial-dubai', 'signature-hydra-facial');

  const navItems = [
    { id: 'treatment-info', label: 'Treatment Info' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'benefits', label: 'Benefits' },
    { id: 'why-choose', label: 'Why Choose HydraFacial' },
    { id: 'conditions-we-treat', label: 'Who Is It For' },
    { id: 'our-doctors', label: 'Our Doctors' },
    { id: 'faq', label: 'FAQ' },
    { id: 'book-now', label: 'Book Now' }
  ];

  return (
     <Layout>
      <Head>
  <title key="title">HydraFacial in Dubai | Best HydraFacial Treatment - Rama Care Polyclinic</title>
  <meta name="description" content="Experience the best HydraFacial in Dubai at Rama Care Polyclinic. Deep cleanse, exfoliate & hydrate for an instant glow. DHA-licensed specialists, zero downtime." key="description" />
  <meta name="keywords" content="HydraFacial Dubai, HydraFacial treatment Dubai, best HydraFacial Dubai, HydraFacial cost Dubai, deep cleansing facial, Dubai DHA licensed facial clinic, HydraFacial Jumeirah, non-invasive skin treatment Dubai" />
  
   <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalClinic",
              "name": "Rama Care Polyclinic",
              "url": "https://ramacarepolyclinic.ae/services/hydrafacial-dubai/",
              "telephone": "+971566597878",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "12 Al Dhiyafah Rd - Jumeirah Terrace Building, Ground Floor, Jumeirah 1",
                "addressLocality": "Jumeirah 1",
                "addressRegion": "Dubai",
                "postalCode": "393558",
                "addressCountry": "AE"
              },
              "openingHours": "Su-Sa 10:00-22:00",
              "medicalSpecialty": "Dermatology",
              "priceRange": "$$",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "500"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Facial Treatments",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "MedicalProcedure",
                      "name": "HydraFacial in Dubai",
                      "description": "HydraFacial is a non-invasive, medical-grade skin treatment that combines cleansing, exfoliation, gentle extraction, and deep hydration into one session using patented Vortex-Fusion technology.",
                      "howPerformed": "Performed by DHA-licensed aesthetic specialists using multi-step cleansing, exfoliation, extraction, and antioxidant serum infusion tailored to the skin's needs.",
                      "procedureType": "Non-invasive aesthetic treatment",
                      "preparation": "Arrive with clean skin and avoid heavy makeup.",
                      "followup": "Monthly sessions recommended for optimal skin health."
                    }
                  }
                ]
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": content?.faq?.faqs?.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            })
          }}
        />
</Head>

    <TreatmentHero 
      categoryName="Facial Treatments Dubai"
      subcategoryName="HydraFacial"
      description={content?.hero?.description}
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
     <DoctorsSection content={content?.doctors} customDoctors={content?.doctors?.doctors} />
    
    <PaymentInsurance content={content?.paymentInsurance} />
    <FAQSection content={content?.faq} />
    <BookConsultation content={content?.bookConsultation} />
  </Layout>
  );
}
