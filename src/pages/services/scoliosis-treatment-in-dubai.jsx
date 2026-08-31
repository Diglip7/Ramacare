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

export default function ScoliosisTreatmentPage() {
  const categoryName = 'Physiotherapy';
  const subcategoryName = 'Scoliosis Treatment';

  // Get content from data file
  const content = getSubcategoryContent('physiotherapy-dubai', 'scoliosis');
  const CANONICAL_URL = 'https://ramacarepolyclinic.ae/services/scoliosis-treatment-in-dubai/';

  const faqsForSchema = (content?.faq?.faqs || []).map(faq => ({
    question: faq.question,
    answer: faq.answer
  }));

  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `${CANONICAL_URL}#breadcrumb`,
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
            "name": "Physiotherapy",
            "item": "https://ramacarepolyclinic.ae/services/physiotherapy-dubai/"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Scoliosis Treatment",
            "item": CANONICAL_URL
          }
        ]
      },
      {
        "@type": "MedicalWebPage",
        "@id": `${CANONICAL_URL}#webpage`,
        "url": CANONICAL_URL,
        "name": "Scoliosis Treatment in Dubai – Expert Spine Pain Relief",
        "description": "Struggling with scoliosis or back pain? Get expert scoliosis treatment in Dubai. Improve posture, reduce pain & restore mobility. Book now!",
        "inLanguage": "en",
        "isPartOf": {
          "@type": "WebSite",
          "url": "https://ramacarepolyclinic.ae/",
          "name": "RamaCare Polyclinic"
        },
        "about": {
          "@type": "MedicalCondition",
          "name": "Scoliosis"
        },
        "reviewedBy": {
          "@type": "Person",
          "name": "Jeena Mathew",
          "jobTitle": "Musculoskeletal Physiotherapy Specialist",
          "url": "https://ramacarepolyclinic.ae/doctors/jeena-mathew-physiotherapist-dubai/"
        }
      },
      {
        "@type": "MedicalProcedure",
        "@id": `${CANONICAL_URL}#procedure`,
        "name": "Scoliosis Treatment in Dubai",
        "alternateName": "Non-surgical Scoliosis Care",
        "url": CANONICAL_URL,
        "mainEntityOfPage": CANONICAL_URL,
        "description": "Scoliosis Treatment in Dubai at RamaCare Polyclinic provides personalized non-surgical care, posture correction, physiotherapy, and rehabilitation to manage spinal curvature and improve mobility, guided by experienced clinicians.",
        "procedureType": "Therapeutic spinal care",
        "bodyLocation": "Spine",
        "howPerformed": "Scoliosis treatment involves detailed assessment of spinal curvature, individualized physiotherapy, posture training, corrective exercises, and monitoring to reduce progression and enhance function.",
        "preparation": "Initial clinical evaluation including spinal assessment and imaging (if needed) is performed prior to treatment planning.",
        "followup": "Regular follow-ups and progress assessments are recommended to ensure therapy effectiveness and progression control.",
        "indication": [
          "Spinal curvature (scoliosis)",
          "Posture asymmetry",
          "Back pain linked to scoliosis",
          "Reduced spinal mobility"
        ],
        "possibleComplication": "Mild muscle soreness may occur during early therapy phases.",
        "provider": {
          "@type": "MedicalClinic",
          "name": "RamaCare Polyclinic – Physiotherapy & Rehabilitation Department",
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
        "@type": "FAQPage",
        "@id": `${CANONICAL_URL}#faq`,
        "mainEntity": faqsForSchema.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }
    ]
  };

  return (
    <Layout>
      <Head>
        <title key="title">Scoliosis Treatment in Dubai – Expert Spine Pain Relief</title>
        <meta name="description" content="Struggling with scoliosis or back pain? Get expert scoliosis treatment in Dubai. Improve posture, reduce pain & restore mobility. Book now! " key="description" />
        <meta name="keywords" content="Scoliosis treatment in Dubai, Scoliosis physiotherapy Dubai, Spine alignment treatment Dubai, Posture correction therapy Dubai, Back curvature treatment in Dubai, Non-surgical scoliosis treatment, Pediatric scoliosis treatment Dubai, Adult scoliosis management in Dubai, Rehabilitation physiotherapy Dubai, Spine care clinic Dubai" />
        <meta name="robots" content="index, follow" key="robots" />
        <link rel="canonical" href={CANONICAL_URL} key="canonical" />

        {/* Open Graph Tags */}
        <meta property="og:type" content="article" key="og:type" />
        <meta property="og:title" content="Scoliosis Treatment in Dubai – Expert Spine Pain Relief" key="og:title" />
        <meta property="og:description" content="Struggling with scoliosis or back pain? Get expert scoliosis treatment in Dubai. Improve posture, reduce pain & restore mobility. Book now!" key="og:description" />
        <meta property="og:url" content={CANONICAL_URL} key="og:url" />
        <meta property="og:image" content="https://ramacarepolyclinic.ae/images/scoliosis1.jpg" key="og:image" />
        <meta property="og:image:width" content="1200" key="og:image:width" />
        <meta property="og:image:height" content="630" key="og:image:height" />
        <meta property="og:site_name" content="RamaCare Polyclinic" key="og:site_name" />
        <meta property="og:locale" content="en_AE" key="og:locale" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content="Scoliosis Treatment in Dubai – Expert Spine Pain Relief" key="twitter:title" />
        <meta name="twitter:description" content="Improve posture, reduce pain, and restore mobility with expert non-surgical scoliosis treatment in Jumeirah 1, Dubai." key="twitter:description" />
        <meta name="twitter:image" content="https://ramacarepolyclinic.ae/images/scoliosis1.jpg" key="twitter:image" />

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
      <ContentReviewBadge doctorName="Jeena Mathew" pageSlug="scoliosis-treatment-in-dubai" />
      <FAQSection content={content?.faq} />
      <BookConsultation content={content?.bookConsultation} />
    </Layout>
  );
}
