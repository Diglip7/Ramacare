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

export default function ExosomesFacialDubaiPage() {
  const categoryName = 'Facial';
  const subcategoryName = 'Exosomes Facial ';

  // Get content from data file
  const content = getSubcategoryContent('facial-dubai', 'exosomes-facial');

  const CANONICAL_URL = "https://ramacarepolyclinic.ae/services/exosomes-facial-dubai/";
  const PAGE_TITLE = "Exosomes Facial Dubai – Advanced Skin Rejuvenation";
  const PAGE_DESCRIPTION = "Exosomes Facial in Dubai is performed by specialists to repair skin, boost collagen, reduce fine lines, and restore a youthful, radiant appearance safely.";

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
            "name": "Facial",
            "item": "https://ramacarepolyclinic.ae/services/facial-dubai/"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Exosomes Facial",
            "item": CANONICAL_URL
          }
        ]
      },
      {
        "@type": "MedicalProcedure",
        "@id": `${CANONICAL_URL}#procedure`,
        "name": "Exosomes Facial in Dubai",
        "description": "Advanced regenerative skin therapy using exosomes to enhance cell-to-cell communication, accelerate skin repair, boost collagen and elastin production, and restore youthful radiance with minimal downtime.",
        "url": CANONICAL_URL,
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
          "image": "https://ramacarepolyclinic.ae/images/exosomes1.jpg",
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
        "@type": "MedicalCondition",
        "@id": `${CANONICAL_URL}#condition`,
        "name": "Facial Skin Rejuvenation Needs",
        "alternateName": "Skin Aging and Texture Concerns",
        "url": CANONICAL_URL,
        "description": "Facial skin rejuvenation needs include concerns such as fine lines, dull complexion, uneven texture, and early signs of aging — commonly addressed with advanced aesthetic treatments.",
        "possibleTreatment": {
          "@type": "MedicalTherapy",
          "name": "Exosomes Facial Therapy",
          "description": "A regenerative aesthetic therapy using bioactive exosomes to support cellular communication and rejuvenation, helping improve skin texture, tone, and overall radiance."
        }
      },
      {
        "@type": "FAQPage",
        "@id": `${CANONICAL_URL}#faq`,
        "mainEntity": (content?.faq?.faqs || []).map((faq) => ({
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
        <title key="title">{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_DESCRIPTION} key="description" />
        <meta name="keywords" content="Exosomes Facial Dubai, Skin rejuvenation Dubai, Anti-aging facial in Dubai, Collagen-boosting facial, Advanced facial treatment, Youthful skin therapy in Dubai, Professional facial in Dubai, Fine lines reduction in Dubai, Skin repair treatment, Cosmetic facial in Dubai" key="keywords" />
        <meta name="robots" content="index, follow" key="robots" />
        <link rel="canonical" href={CANONICAL_URL} key="canonical" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Exosomes Facial Dubai – Advanced Skin Rejuvenation" key="og:title" />
        <meta property="og:description" content="Exosomes Facial in Dubai is performed by specialists to repair skin, boost collagen, reduce fine lines, and restore a youthful, radiant appearance safely." key="og:description" />
        <meta property="og:url" content={CANONICAL_URL} key="og:url" />
        <meta property="og:type" content="website" key="og:type" />
        <meta property="og:image" content="https://ramacarepolyclinic.ae/images/exosomes1.jpg" key="og:image" />
        <meta property="og:site_name" content="RamaCare Polyclinic" key="og:site_name" />
        <meta property="og:locale" content="en_AE" key="og:locale" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content="Exosomes Facial Dubai – Advanced Skin Rejuvenation" key="twitter:title" />
        <meta name="twitter:description" content="Exosomes Facial in Dubai is performed by specialists to repair skin, boost collagen, reduce fine lines, and restore a youthful, radiant appearance safely." key="twitter:description" />
        <meta name="twitter:image" content="https://ramacarepolyclinic.ae/images/exosomes1.jpg" key="twitter:image" />

        {/* Structured Data Schemas */}
        <script
          key="schema-graph"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
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
      <ContentReviewBadge 
        doctorName="Sonita Sinaga" 
        pageSlug="exosomes-facial-dubai" 
        customStatement="This regenerative skincare guide has been clinically reviewed for treatment safety, exosome therapy protocols, and skincare excellence by Sonita Sinaga."
      />
      <FAQSection content={content?.faq} />
      <BookConsultation content={content?.bookConsultation} />
    </Layout>
  );
}
