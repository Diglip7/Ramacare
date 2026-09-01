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


export default function DermaRollerPage() {
  const categoryName = 'Aesthetic Dermatology';
  const subcategoryName = 'Derma Roller Treatment';
  const CANONICAL_URL = "https://ramacarepolyclinic.ae/services/derma-roller-dubai/";

  // Get content from data file - nested path
  const content = getSubcategoryContent('aesthetic-dermatology-dubai', 'skin-treatment/derma-roller');

  return (
    <Layout>
      <Head>
        <title key="title">Derma Roller Treatment in Dubai for Skin Renewal Care</title>
        <meta name="description" content="Derma roller treatment in Dubai improves skin texture, reduces acne scars, and boosts collagen through safe, doctor-led microneedling care plans today." key="description" />
        <meta name="keywords" content="Derma roller treatment in Dubai, Microneedling Dubai, Acne scar treatment Dubai, Skin rejuvenation Dubai, Collagen induction therapy, Derma roller for face Dubai, Skin texture improvement, Professional microneedling treatment, Anti-aging skin treatment Dubai, Open pores treatment Dubai, Scar reduction treatment in Dubai, Skin resurfacing Dubai" />
        <link rel="canonical" href={CANONICAL_URL} />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Derma Roller Treatment in Dubai for Skin Renewal Care" />
        <meta property="og:description" content="Derma roller treatment in Dubai improves skin texture, reduces acne scars, and boosts collagen through safe, doctor-led microneedling care plans today." />
        <meta property="og:url" content={CANONICAL_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://ramacarepolyclinic.ae/images/derma.jpg" />
        <meta property="og:site_name" content="RamaCare Polyclinic" />
        <meta property="og:locale" content="en_AE" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Derma Roller Treatment in Dubai for Skin Renewal Care" />
        <meta name="twitter:description" content="Derma roller treatment in Dubai improves skin texture, reduces acne scars, and boosts collagen through safe, doctor-led microneedling care plans today." />
        <meta name="twitter:image" content="https://ramacarepolyclinic.ae/images/derma.jpg" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
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
                      "name": "Aesthetic Dermatology",
                      "item": "https://ramacarepolyclinic.ae/services/aesthetic-dermatology-dubai"
                    },
                    {
                      "@type": "ListItem",
                      "position": 3,
                      "name": "Derma Roller Treatment",
                      "item": CANONICAL_URL
                    }
                  ]
                },
                {
                  "@type": "MedicalCondition",
                  "@id": `${CANONICAL_URL}#condition`,
                  "name": "Skin Texture Irregularities, Fine Lines & Scarring",
                  "alternateName": "Uneven Skin, Acne Scars, Wrinkles",
                  "url": CANONICAL_URL,
                  "description": "Skin concerns such as uneven texture, fine lines, acne scarring, and signs of aging may benefit from microneedling therapy. Derma Roller treatment is designed to stimulate natural skin repair and collagen production to improve overall skin quality.",
                  "possibleTreatment": {
                    "@type": "MedicalTherapy",
                    "name": "Microneedling Therapy",
                    "description": "Microneedling (Derma Rolling) uses controlled micro-injuries to the skin to trigger healing responses, enhance collagen and elastin production, and improve texture, tone, and appearance of skin."
                  }
                },
                {
                  "@type": "MedicalProcedure",
                  "@id": `${CANONICAL_URL}#procedure`,
                  "name": "Derma Roller Treatment in Dubai",
                  "alternateName": "Microneedling Skin Rejuvenation",
                  "url": CANONICAL_URL,
                  "mainEntityOfPage": CANONICAL_URL,
                  "description": "Medical microneedling procedure using a sterile, medical-grade roller with fine needles to create controlled micro-injuries that stimulate collagen and elastin production, improving acne scars, uneven texture, enlarged pores, and fine lines.",
                  "procedureType": "https://schema.org/PercutaneousProcedure",
                  "bodyLocation": "Face",
                  "howPerformed": "A clinician assesses the skin condition and selects an appropriate Derma Roller device. After cleansing and topical numbing (if indicated), the roller is gently moved over treatment areas to create micro-channels that encourage collagen formation. Sessions typically last 20–40 minutes depending on the treatment area.",
                  "preparation": "Patients should share medical and skin history, avoid recent sun exposure and harsh exfoliants, and follow any clinician guidance for prepping the skin area prior to treatment.",
                  "followup": "Post-treatment care includes keeping the area clean, using recommended skin care products, avoiding sun exposure, and scheduling follow-up sessions for optimal results.",
                  "indication": [
                    "Fine lines and early signs of aging",
                    "Acne scars and texture irregularities",
                    "Uneven skin tone and large pores",
                    "Mild stretch marks",
                    "Skin rejuvenation and glow enhancement"
                  ],
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
                    "image": "https://ramacarepolyclinic.ae/images/derma.jpg",
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
      <ContentReviewBadge 
        doctorName="Sonita Sinaga" 
        pageSlug="derma-roller-dubai"
        customStatement="This microneedling treatment guide has been clinically reviewed for treatment safety, collagen-induction protocols, and skincare excellence by Sonita Sinaga."
      />
      <FAQSection content={content?.faq} />
      <BookConsultation content={content?.bookConsultation} />
    </Layout>
  );
}
