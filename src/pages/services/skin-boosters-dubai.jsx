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


export default function SkinBoostersPage() {
  const categoryName = 'Aesthetic Dermatology';
  const subcategoryName = 'Skin Boosters';

  // Get content from data file - nested path
  const content = getSubcategoryContent('aesthetic-dermatology-dubai', 'skin-treatment/skin-boosters');
  const CANONICAL_URL = "https://ramacarepolyclinic.ae/services/skin-boosters-dubai/";

  return (
    <Layout>
      <Head>
        <title key="title">Skin Boosters in Dubai – Hydrate and Rejuvenate Your Skin</title>
        <meta name="description" content="Skin boosters in Dubai provide deep hydration, improve skin texture, and restore a youthful, radiant glow under professional supervision." key="description" />
        <meta name="keywords" content="Skin boosters in Dubai, Skin hydration treatment Dubai, Facial rejuvenation Dubai, Anti-aging skin therapy, Professional skin booster treatment, Radiant skin treatment Dubai, Skin texture improvement, Youthful skin therapy in Dubai, Skin revitalization Dubai, Deep hydration facial Dubai" />
        <link rel="canonical" href="https://ramacarepolyclinic.ae/services/skin-boosters-dubai/" />
        <meta property="og:title" content="Skin Boosters in Dubai – Hydrate and Rejuvenate Your Skin" />
        <meta property="og:description" content="Skin boosters in Dubai provide deep hydration, improve skin texture, and restore a youthful, radiant glow under professional supervision." />
        <meta property="og:url" content="https://ramacarepolyclinic.ae/services/skin-boosters-dubai/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://ramacarepolyclinic.ae/images/skinbooster.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Skin Boosters in Dubai – Hydrate and Rejuvenate Your Skin" />
        <meta name="twitter:description" content="Skin boosters in Dubai provide deep hydration, improve skin texture, and restore a youthful, radiant glow under professional supervision." />
        <meta name="twitter:image" content="https://ramacarepolyclinic.ae/images/skinbooster.jpg" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "MedicalCondition",
                  "@id": "https://ramacarepolyclinic.ae/services/skin-boosters-dubai/#condition",
                  "name": "Facial Skin Dehydration and Texture Concerns",
                  "alternateName": "Skin Hydration and Rejuvenation Needs",
                  "url": "https://ramacarepolyclinic.ae/services/skin-boosters-dubai/",
                  "description": "Facial skin dehydration and texture concerns include dry or dull skin, fine lines, uneven texture, and loss of elasticity or glow often caused by aging, environmental factors, lifestyle, and reduced skin hydration.",
                  "possibleTreatment": {
                    "@type": "MedicalTherapy",
                    "name": "Skin Booster Therapy",
                    "description": "Aesthetic injectable treatments designed to deeply hydrate, revitalize, and improve the quality of the skin by delivering nourishing hyaluronic acid or other rejuvenating agents into the superficial layers of the skin."
                  }
                },
                {
                  "@type": "MedicalProcedure",
                  "@id": "https://ramacarepolyclinic.ae/services/skin-boosters-dubai/#procedure",
                  "name": "Skin Boosters Treatment in Dubai",
                  "alternateName": "Dermal Skin Hydration Boost Therapy",
                  "url": "https://ramacarepolyclinic.ae/services/skin-boosters-dubai/",
                  "mainEntityOfPage": "https://ramacarepolyclinic.ae/services/skin-boosters-dubai/",
                  "description": "Skin Boosters treatment in Dubai at RamaCare Polyclinic is a minimally invasive aesthetic procedure that enhances skin hydration, elasticity, radiance, and overall texture using targeted injectable formulations.",
                  "procedureType": "Minimally invasive aesthetic injection therapy",
                  "howPerformed": "Performed by trained clinicians, the procedure involves delivering small amounts of hydrating and rejuvenating injectable agents into targeted facial areas with fine needles to boost moisture and improve skin quality.",
                  "preparation": "Patients should attend with clean skin and disclose their medical and skincare history. Avoiding blood-thinning medications or supplements prior to treatment may be advised.",
                  "followup": "Clinical follow-up may be recommended to monitor results and schedule repeat sessions based on individual skin goals.",
                  "indication": [
                    "Dry or dehydrated skin",
                    "Lack of skin radiance",
                    "Fine lines and early signs of aging",
                    "Uneven skin texture",
                    "Loss of skin elasticity"
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
      <ContentReviewBadge doctorName="Sonita Sinaga" pageSlug="skin-boosters-dubai" customStatement="This skin hydration treatment guide has been clinically reviewed for treatment safety, injectable protocols, and skincare excellence by Sonita Sinaga." />
      <FAQSection content={content?.faq} />
      <BookConsultation content={content?.bookConsultation} />
    </Layout>
  );
}
