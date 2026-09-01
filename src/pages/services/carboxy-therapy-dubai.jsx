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
import ContentReviewBadge from '../../../components/ContentReviewBadge';
import SkinTreatmentAdditionalContent from '../../../components/SkinTreatmentAdditionalContent';
import ServiceExtrasSection from '../../../components/ServiceExtrasSection';
import { getSubcategoryContent } from '../../data/subcategoryContent';


export default function CarboxyTherapyPage() {
  const categoryName = 'Aesthetic Dermatology';
  const subcategoryName = 'Carboxy Therapy';

  // Get content from data file - nested path
  const content = getSubcategoryContent('aesthetic-dermatology-dubai', 'skin-treatment/carboxy-therapy');

  // Generate FAQ schema dynamically from content
  const faqSchema = content?.faq?.faqs?.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  })) || [];

  const navItems = [
    { id: 'treatment-info', label: 'Treatment Info' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'benefits', label: 'Benefits' },
    { id: 'when-to-consider', label: 'Ideal Candidate' },
    { id: 'recovery-aftercare', label: 'Aftercare' },
    { id: 'why-choose-ramacare', label: 'Why Us' },
    { id: 'testimonials', label: 'Success Stories' },
    { id: 'our-doctors', label: 'Our Doctors' },
    { id: 'faq', label: 'FAQ' },
    { id: 'book-now', label: 'Book Now' },
  ];

  return (
    <Layout>
      <Head>
        <title key="title">Carboxy Therapy in Dubai for Skin and Body Rejuvenation</title>
        <meta name="description" content="Carboxy therapy in Dubai improves circulation, skin texture, and elasticity using safe carbon dioxide therapy under expert medical supervision." key="description" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Carboxy Therapy in Dubai for Skin and Body Rejuvenation" />
        <meta property="og:description" content="Carboxy therapy in Dubai improves circulation, skin texture, and elasticity using safe carbon dioxide therapy under expert medical supervision." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ramacarepolyclinic.ae/services/carboxy-therapy-dubai/" />
        <meta property="og:image" content="https://ramacarepolyclinic.ae/images/carboxy.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Carboxy Therapy in Dubai - RamaCare Polyclinic" />
        <meta property="og:site_name" content="RamaCare Polyclinic" />
        <meta property="og:locale" content="en_AE" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Carboxy Therapy in Dubai for Skin and Body Rejuvenation" />
        <meta name="twitter:description" content="Carboxy therapy in Dubai improves circulation, skin texture, and elasticity using safe carbon dioxide therapy under expert medical supervision." />
        <meta name="twitter:image" content="https://ramacarepolyclinic.ae/images/carboxy.jpg" />

        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "BreadcrumbList",
                  "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ramacarepolyclinic.ae/" },
                    { "@type": "ListItem", "position": 2, "name": "Aesthetic Dermatology", "item": "https://ramacarepolyclinic.ae/services/aesthetic-dermatology-dubai" },
                    { "@type": "ListItem", "position": 3, "name": "Carboxy Therapy", "item": "https://ramacarepolyclinic.ae/services/carboxy-therapy-dubai/" }
                  ]
                },
                {
                  "@type": "MedicalProcedure",
                  "name": "Carboxy Therapy in Dubai",
                  "description": "Carboxy therapy in Dubai improves circulation, skin texture, and elasticity using safe carbon dioxide therapy under expert medical supervision.",
                  "url": "https://ramacarepolyclinic.ae/services/carboxy-therapy-dubai/",
                  "procedureType": "Minimally invasive aesthetic therapy",
                  "bodyLocation": "Face and Body",
                  "reviewedBy": {
                    "@type": "Person",
                    "name": "Sonita Sinaga",
                    "jobTitle": "Licensed & Certified Aesthetic Therapist",
                    "hasCredential": "NCLC Laser Certified",
                    "worksFor": {
                      "@type": "MedicalOrganization",
                      "name": "RamaCare Polyclinic"
                    },
                    "url": "https://ramacarepolyclinic.ae/doctors/sonita-sinaga-aesthetic-therapist-dubai/"
                  },
                  "provider": {
                    "@type": "MedicalClinic",
                    "name": "RamaCare Polyclinic",
                    "url": "https://ramacarepolyclinic.ae/",
                    "image": "https://ramacarepolyclinic.ae/images/carboxy.jpg",
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
      <SkinTreatmentAdditionalContent content={content} />
      <ServiceExtrasSection aftercareContent={content?.aftercareContent} />
       <PatientTestimonials content={content?.testimonials} />
       <DoctorsSection content={content?.doctors} />
    
    <PaymentInsurance content={content?.paymentInsurance} />
      <ContentReviewBadge doctorName="Sonita Sinaga" pageSlug="carboxy-therapy-dubai" />
      <FAQSection content={content?.faq} />
      <BookConsultation content={content?.bookConsultation} />
    </Layout>
  );
}
