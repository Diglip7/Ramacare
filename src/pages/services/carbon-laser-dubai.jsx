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

export default function CarbonLaserTreatmentPage() {
  const categoryName = 'Aesthetic Dermatology';
  const subcategoryName = 'Carbon Laser Treatment';

  const content = getSubcategoryContent('aesthetic-dermatology-dubai', 'laser-treatment/carbon-laser-treatment');

  if (!content) {
    return (
      <Layout>
        <div className="py-24 text-center">
          <p className="text-red-500">Service data not found.</p>
        </div>
      </Layout>
    );
  }

  const CANONICAL_URL = "https://ramacarepolyclinic.ae/services/carbon-laser-dubai/";
  const PAGE_TITLE = "Carbon Laser Treatment in Dubai | Skin Rejuvenation";
  const PAGE_DESCRIPTION = "Experience safe and effective Carbon Laser treatment in Dubai for glowing, clear skin. Reduce pigmentation, acne scars, and fine lines with expert care.";
  const OG_IMAGE = "https://ramacarepolyclinic.ae/images/carbon.jpg";

  const { faqs } = content?.faq || {};

  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": `${CANONICAL_URL}#webpage`,
        "url": CANONICAL_URL,
        "name": PAGE_TITLE,
        "description": PAGE_DESCRIPTION,
        "inLanguage": "en",
        "isPartOf": {
          "@type": "WebSite",
          "url": "https://ramacarepolyclinic.ae/",
          "name": "RamaCare Polyclinic"
        },
        "about": {
          "@type": "MedicalCondition",
          "name": "Acne / Oily Skin / Pigmentation (Carbon Laser Peel)"
        },
        "reviewedBy": {
          "@id": `${CANONICAL_URL}#reviewer`
        },
        "publisher": {
          "@type": "MedicalOrganization",
          "name": "RamaCare Polyclinic",
          "url": "https://ramacarepolyclinic.ae/"
        }
      },
      {
        "@type": "Person",
        "@id": `${CANONICAL_URL}#reviewer`,
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
        "@type": "MedicalCondition",
        "@id": `${CANONICAL_URL}#condition`,
        "name": "Skin Dullness, Enlarged Pores, Mild Texture Issues & Pigmentation",
        "alternateName": "Uneven Skin Tone, Acne-Prone Texture & Visible Pores",
        "url": CANONICAL_URL,
        "description": "Conditions such as dull complexion, enlarged pores, uneven texture, superficial pigmentation, and acne-prone skin can affect the overall appearance and radiance of the face. Carbon laser therapy targets these concerns by promoting exfoliation, boosting collagen, and enhancing skin clarity.",
        "possibleTreatment": {
          "@type": "MedicalTherapy",
          "name": "Carbon Laser Skin Rejuvenation Therapy",
          "description": "Carbon laser therapy uses a carbon-based lotion applied to the skin followed by laser pulses that are absorbed by the carbon particles. This process exfoliates dead skin cells, reduces oil and impurities, stimulates collagen formation, and improves surface texture and tone."
        }
      },
      {
        "@type": "MedicalProcedure",
        "@id": `${CANONICAL_URL}#procedure`,
        "name": "Carbon Laser Treatment in Dubai",
        "alternateName": "Carbon Peel / Hollywood Peel / Nano Laser Peel",
        "url": CANONICAL_URL,
        "mainEntityOfPage": CANONICAL_URL,
        "description": "Carbon laser treatment at RamaCare Polyclinic in Dubai is a non-invasive cosmetic dermatology procedure designed to exfoliate the skin, refine texture, reduce superficial pigmentation, shrink enlarged pores, and enhance complexion clarity using a carbon mask and laser energy.",
        "procedureType": "Non-invasive cosmetic laser procedure",
        "howPerformed": "A carbon-based lotion is first applied to cleansed skin. Once carbon particles penetrate pores and attach to debris, a specialized laser emits targeted pulses that vaporize the carbon, removing dead skin cells, impurities, and excess oil.",
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
          "telephone": "+971 56 659 7878"
        }
      },
      {
        "@type": "FAQPage",
        "@id": `${CANONICAL_URL}#faq`,
        "mainEntity": (faqs || []).map(function (f) {
          return {
            "@type": "Question",
            "name": f.question ? f.question.trim() : "",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": f.answer ? f.answer.trim() : ""
            }
          };
        })
      }
    ]
  };

  return (
    <Layout>
      <Head>
        <title key="title">{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_DESCRIPTION} key="description" />
        <meta name="robots" content="index, follow" key="robots" />
        <link rel="canonical" href={CANONICAL_URL} key="canonical" />

        {/* Open Graph Tags */}
        <meta property="og:type" content="website" key="og:type" />
        <meta property="og:title" content={PAGE_TITLE} key="og:title" />
        <meta property="og:description" content={PAGE_DESCRIPTION} key="og:description" />
        <meta property="og:url" content={CANONICAL_URL} key="og:url" />
        <meta property="og:image" content={OG_IMAGE} key="og:image" />
        <meta property="og:image:width" content="1200" key="og:image:width" />
        <meta property="og:image:height" content="630" key="og:image:height" />
        <meta property="og:image:alt" content="Carbon Laser Treatment in Dubai - RamaCare Polyclinic" key="og:image:alt" />
        <meta property="og:site_name" content="RamaCare Polyclinic" key="og:site_name" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content={PAGE_TITLE} key="twitter:title" />
        <meta name="twitter:description" content="Reduce pigmentation, acne scars, and fine lines with safe, DHA-approved Carbon Laser Treatment in Dubai." key="twitter:description" />
        <meta name="twitter:image" content={OG_IMAGE} key="twitter:image" />

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
      <ContentReviewBadge doctorName="Sonita Sinaga" pageSlug="carbon-laser-dubai" />
      <FAQSection content={content?.faq} />
      <BookConsultation content={content?.bookConsultation} />
    </Layout>
  );
}
