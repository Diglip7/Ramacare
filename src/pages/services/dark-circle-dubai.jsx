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
import { getSubcategoryContent } from '../../data/subcategoryContent';


export default function DarkCirclePage() {
  const categoryName = 'Aesthetic Dermatology';
  const subcategoryName = 'Dark Circle Treatment';

  // Get content from data file - nested path
  const content = getSubcategoryContent('aesthetic-dermatology-dubai', 'skin-treatment/dark-circle');

  return (
    <Layout>
      <Head>
         <title key="title">Dark Circle Treatment in Dubai – Brighten Under Eyes Fast</title>
          <meta name="description" content="Tired of dark circles under your eyes? Get expert treatment in Dubai to reduce pigmentation, puffiness & dullness. Safe, effective care. Book now!" key="description" />
          <meta name="keywords" content="Dark circle treatment Dubai, Under eye dark circles treatment, Dark circles removal Dubai, Periorbital hyperpigmentation treatment, Tear trough treatment Dubai, Under eye fillers Dubai, PRP for dark circles, Laser treatment for dark circles, Eye bags treatment Dubai, DHA licensed dermatology clinic" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Dark Circle Treatment in Dubai – Brighten Under Eyes Fast" />
        <meta property="og:description" content="Tired of dark circles under your eyes? Get expert treatment in Dubai to reduce pigmentation, puffiness & dullness. Safe, effective care. Book now!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ramacarepolyclinic.ae/services/dark-circle-dubai/" />
        <meta property="og:image" content="https://ramacarepolyclinic.ae/images/dark.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Dark Circle Treatment in Dubai - RamaCare Polyclinic" />
        <meta property="og:site_name" content="RamaCare Polyclinic" />
        <meta property="og:locale" content="en_AE" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dark Circle Treatment in Dubai – Brighten Under Eyes Fast" />
        <meta name="twitter:description" content="Reduce under-eye pigmentation, puffiness, and dullness with safe, DHA-licensed dark circle treatment at RamaCare Polyclinic Dubai." />
        <meta name="twitter:image" content="https://ramacarepolyclinic.ae/images/dark.jpg" />

        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "MedicalWebPage",
          "@id": "https://ramacarepolyclinic.ae/services/dark-circle-dubai/#webpage",
          "url": "https://ramacarepolyclinic.ae/services/dark-circle-dubai/",
          "name": "Dark Circle Treatment in Dubai – Brighten Under Eyes Fast",
          "description": "Tired of dark circles under your eyes? Get expert treatment in Dubai to reduce pigmentation, puffiness & dullness. Safe, effective care.",
          "inLanguage": "en",
          "isPartOf": {
            "@type": "WebSite",
            "url": "https://ramacarepolyclinic.ae/",
            "name": "RamaCare Polyclinic"
          },
          "about": {
            "@type": "MedicalCondition",
            "name": "Under-Eye Dark Circles / Periorbital Hyperpigmentation"
          },
          "lastReviewed": "2026-08-29",
          "reviewedBy": {
            "@id": "https://ramacarepolyclinic.ae/services/dark-circle-dubai/#reviewer"
          },
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ramacarepolyclinic.ae/" },
              { "@type": "ListItem", "position": 2, "name": "Aesthetic Dermatology", "item": "https://ramacarepolyclinic.ae/services/aesthetic-dermatology-dubai" },
              { "@type": "ListItem", "position": 3, "name": "Dark Circle Treatment", "item": "https://ramacarepolyclinic.ae/services/dark-circle-dubai/" }
            ]
          }
        },
        {
          "@type": "MedicalCondition",
          "@id": "https://ramacarepolyclinic.ae/services/dark-circle-dubai/#condition",
          "name": "Periorbital Dark Circles & Under-Eye Discoloration",
          "alternateName": "Dark Circles, Under-Eye Shadows, Periorbital Hyperpigmentation",
          "url": "https://ramacarepolyclinic.ae/services/dark-circle-dubai/",
          "description": "Periorbital dark circles and under-eye discoloration include pigmentation, vascular shadows, hollowness underneath the eyes, and other factors that contribute to a tired or aged appearance around the eyes.",
          "possibleTreatment": {
            "@type": "MedicalTherapy",
            "name": "Dark Circle Management Therapy",
            "description": "Comprehensive management of under-eye dark circles using targeted aesthetic treatments such as fillers, topical agents, laser therapy, chemical peels, and specialized skin rejuvenation protocols tailored to the underlying cause."
          }
        },
        {
          "@type": "MedicalProcedure",
          "@id": "https://ramacarepolyclinic.ae/services/dark-circle-dubai/#procedure",
          "name": "Dark Circle Treatment in Dubai",
          "alternateName": "Under-Eye Dark Circle Correction & Rejuvenation",
          "url": "https://ramacarepolyclinic.ae/services/dark-circle-dubai/",
          "mainEntityOfPage": "https://ramacarepolyclinic.ae/services/dark-circle-dubai/",
          "description": "Dark circle treatment at RamaCare Polyclinic in Dubai is a personalized aesthetic procedure aimed at addressing under-eye pigmentation, hollowness, vascular shadows, and skin laxity using advanced dermatologic and cosmetic techniques.",
          "procedureType": "Medical and aesthetic dermatologic procedure",
          "howPerformed": "After a detailed clinical assessment of the under-eye region, clinicians may use one or a combination of approaches such as hyaluronic acid fillers to restore volume, laser or light therapies for pigmentation, chemical peels, and topical agents to enhance skin quality depending on the cause of dark circles.",
          "preparation": "Patients should disclose their full medical and skincare history, avoid strong exfoliants or irritants before treatment, arrive with clean skin, and follow any pre-procedure guidance given by the clinician.",
          "followup": "Follow-up care involves monitoring response, adjusting treatment plans if necessary, and recommending appropriate skincare to maintain improvement over time.",
          "indication": [
            "Under-eye pigmentation or discoloration",
            "Hollowness beneath the eyes",
            "Visible vascular shadows",
            "Fine lines and skin laxity around the eyes",
            "Tired or aged under-eye appearance"
          ],
          "provider": {
            "@type": "MedicalClinic",
            "name": "RamaCare Polyclinic – Aesthetic & Dermatology Care",
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
        },
        {
          "@type": "Person",
          "@id": "https://ramacarepolyclinic.ae/services/dark-circle-dubai/#reviewer",
          "name": "Sonita Sinaga",
          "jobTitle": "Licensed & Certified Aesthetic Therapist",
          "hasCredential": "NCLC Laser Certified",
          "worksFor": {
            "@type": "MedicalOrganization",
            "name": "RamaCare Polyclinic"
          },
          "url": "https://ramacarepolyclinic.ae/doctors/sonita-sinaga-aesthetic-therapist-dubai/"
        },
        {
          "@type": "FAQPage",
          "@id": "https://ramacarepolyclinic.ae/services/dark-circle-dubai/#faq",
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
     <QuickNavigation />
    
    <TreatmentOverview 
      subcategoryName={subcategoryName}
      content={content?.overview}
    />
      <HealingJourney content={content?.healingJourney} />
      <TreatmentBenefits 
        content={content?.benefits}
      />
       <PatientTestimonials content={content?.testimonials} />
       <DoctorsSection content={content?.doctors} />
    
    <PaymentInsurance content={content?.paymentInsurance} />
      <ContentReviewBadge doctorName="Sonita Sinaga" pageSlug="dark-circle-dubai" />
      <FAQSection content={content?.faq} />
      <BookConsultation content={content?.bookConsultation} />
    </Layout>
  );
}
