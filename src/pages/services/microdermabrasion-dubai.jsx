import Layout from '../../../components/Layout';
import Head from "next/head";
import TreatmentHero from '../../../components/TreatmentHero';
import QuickNavigation from '../../../components/QuickNavigation';
// import CertificationsSection from '../../../components/CertificationsSection';
import TreatmentOverview from '../../../components/TreatmentOverview';
import HealingJourney from '../../../components/HealingJourney';
import TreatmentBenefits from '../../../components/TreatmentBenefits';
import SkinTreatmentAdditionalContent from '../../../components/SkinTreatmentAdditionalContent';
import PatientTestimonials from '../../../components/VideoTestimonials';
import DoctorsSection from '../../../components/DoctorsSection';
// import PricingPackages from '../../../components/PricingPackages';
import PaymentInsurance from '../../../components/PaymentInsurance';
import FAQSection from '../../../components/Faq';
import BookConsultation from '../../../components/BookConsultation';
import ContentReviewBadge from '../../../components/ContentReviewBadge';
import { getSubcategoryContent } from '../../data/subcategoryContent';


export default function MicrodermabrasionPage() {
  const categoryName = 'Aesthetic Dermatology';
  const subcategoryName = 'Microdermabrasion';

  // Get content from data file - nested path
  const content = getSubcategoryContent('aesthetic-dermatology-dubai', 'skin-treatment/microdermabrasion');

  // Generate FAQ schema dynamically from content
  const faqSchema = content?.faq?.faqs?.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  })) || [];

  return (
    <Layout>
      <Head>
        <title key="title">Microdermabrasion in Dubai for Smooth Radiant Skin</title>
        <meta name="description" content="Microdermabrasion in Dubai gently exfoliates the skin to improve texture, reduce dullness, unclog pores, and support a clearer, healthier complexion." key="description" />
        <meta name="keywords" content="Microdermabrasion in Dubai, Skin exfoliation treatment Dubai, Microdermabrasion facial Dubai, Skin rejuvenation Dubai, Dead skin removal treatment, Open pores treatment Dubai, Skin texture improvement, Professional facial treatment Dubai, Non-invasive skin treatment, Clear skin therapy Dubai, Microdermabrasion in dubai price, Microdermabrasion in dubai cost, Best microdermabrasion in dubai, Microdermabrasion in dubai offers, Microdermabrasion near me, Microdermabrasion benefits, Microdermabrasion meaning, Microdermabrasion vs HydraFacial" />
        <meta property="og:title" content="Microdermabrasion in Dubai for Smooth Radiant Skin" />
        <meta property="og:description" content="Microdermabrasion in Dubai gently exfoliates the skin to improve texture, reduce dullness, unclog pores, and support a clearer, healthier complexion." />
        <meta property="og:url" content="https://ramacarepolyclinic.ae/services/microdermabrasion-dubai/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://ramacarepolyclinic.ae/images/skinbooster.jpg" />
        <meta property="og:site_name" content="RamaCare Polyclinic" />
        <meta property="og:locale" content="en_AE" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Microdermabrasion in Dubai for Smooth Radiant Skin" />
        <meta name="twitter:description" content="Microdermabrasion in Dubai gently exfoliates the skin to improve texture, reduce dullness, unclog pores, and support a clearer, healthier complexion." />
        <meta name="twitter:image" content="https://ramacarepolyclinic.ae/images/skinbooster.jpg" />
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
                      "name": "Microdermabrasion",
                      "item": "https://ramacarepolyclinic.ae/services/microdermabrasion-dubai/"
                    }
                  ]
                },
                {
                  "@type": "MedicalProcedure",
                  "name": "Microdermabrasion in Dubai",
                  "description": "Non-invasive skin resurfacing treatment using medical-grade exfoliation technology to remove dead skin cells, unclog pores, improve skin texture, and stimulate natural skin renewal for a brighter, smoother complexion.",
                  "url": "https://ramacarepolyclinic.ae/services/microdermabrasion-dubai/",
                  "procedureType": "https://schema.org/NoninvasiveProcedure",
                  "bodyLocation": "Face",
                  "reviewedBy": {
                    "@type": "Person",
                    "name": "Sonita Sinaga",
                    "jobTitle": "Licensed & Certified Aesthetic Therapist",
                    "url": "https://ramacarepolyclinic.ae/doctors/sonita-sinaga-aesthetic-therapist-dubai/"
                  },
                  "provider": {
                    "@type": "MedicalClinic",
                    "name": "RamaCare Polyclinic",
                    "url": "https://ramacarepolyclinic.ae/",
                    "image": "https://ramacarepolyclinic.ae/images/skinbooster.jpg",
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
      <QuickNavigation />

      <TreatmentOverview
        subcategoryName={subcategoryName}
        content={content?.overview}
      />
      <HealingJourney content={content?.healingJourney} />
      <TreatmentBenefits
        content={content?.benefits}
      />
      <SkinTreatmentAdditionalContent content={content} />
      <PatientTestimonials content={content?.testimonials} />
      <DoctorsSection content={content?.doctors} />

      <PaymentInsurance content={content?.paymentInsurance} />
      <ContentReviewBadge doctorName="Sonita Sinaga" pageSlug="microdermabrasion-dubai" />
      <FAQSection content={content?.faq} />
      <BookConsultation content={content?.bookConsultation} />
    </Layout>
  );
}
