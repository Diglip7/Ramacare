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

export default function GoldenElixirFacialPage() {
  const categoryName = 'Facial';
  const subcategoryName = 'Golden Elixir (24K Gold) Facial';

  // Get content from data file
  const content = getSubcategoryContent('facial-dubai', 'golden-elixir-facial');

  return (
    <Layout>
      <Head>
        <title key="title">Golden Elixir (24K Gold) Facial in Dubai – Radiant Skin</title>
        <meta name="description" content="Golden Elixir (24K Gold) Facial in Dubai rejuvenates and nourishes the skin, promoting radiance, hydration, and a youthful, glowing appearance under expert care." key="description" />
        <meta name="keywords" content="Golden Elixir 24K Gold Facial in Dubai, 24K Gold facial treatment Dubai, Luxury facial Dubai, Skin rejuvenation Dubai, Hydrating facial treatment Dubai, Anti-aging facial Din ubai, Radiant skin treatment, Professional facial in Dubai, Glowing skin therapy Dubai, Spa facial treatment Dubai" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "MedicalCondition",
                  "@id": "https://ramacarepolyclinic.ae/services/golden-elixir-facial-dubai/#condition",
                  "name": "Facial Skin Dullness and Uneven Texture",
                  "alternateName": "Skin Appearance Concerns",
                  "url": "https://ramacarepolyclinic.ae/services/golden-elixir-facial-dubai/",
                  "description": "Facial skin dullness and uneven texture refer to common skin concerns such as lack of radiance, fine lines, pigmentation irregularities, and tired complexion, which often result from aging, sun exposure, or environmental stressors.",
                  "possibleTreatment": {
                    "@type": "MedicalTherapy",
                    "name": "Golden Elixir Facial Therapy",
                    "description": "A luxurious aesthetic skin therapy using specialized techniques and nourishing serums to deeply hydrate, exfoliate, and rejuvenate the skin for a radiant, youthful appearance."
                  }
                },
                {
                  "@type": "MedicalProcedure",
                  "@id": "https://ramacarepolyclinic.ae/services/golden-elixir-facial-dubai/#procedure",
                  "name": "Golden Elixir Facial in Dubai",
                  "alternateName": "Luxury Facial Skin Rejuvenation",
                  "url": "https://ramacarepolyclinic.ae/services/golden-elixir-facial-dubai/",
                  "mainEntityOfPage": "https://ramacarepolyclinic.ae/services/golden-elixir-facial-dubai/",
                  "description": "The Golden Elixir Facial in Dubai at RamaCare Polyclinic is a premium aesthetic skin treatment designed to deeply nourish, rejuvenate, and restore the skin’s radiance and texture using high-quality serums and expert techniques.",
                  "procedureType": "Non-invasive aesthetic skin enhancement",
                  "howPerformed": "Performed by trained skin care specialists, the Golden Elixir Facial involves cleansing, exfoliation, infusion of hydrating and rejuvenating serums, and massage techniques tailored to the individual’s skin type and concerns.",
                  "preparation": "Minimal preparation is needed; patients should arrive with clean skin and avoid makeup before the session.",
                  "followup": "Follow-up sessions may be recommended to maintain hydration, glow, and overall skin health based on individual skin needs.",
                  "indication": [
                    "Dull or tired complexion",
                    "Uneven skin texture",
                    "Fine lines and early signs of aging",
                    "Dry or dehydrated skin",
                    "Loss of skin radiance"
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
      <ContentReviewBadge doctorName="Sonita Sinaga" pageSlug="golden-elixir-facial-dubai" />
      <FAQSection content={content?.faq} />
      <BookConsultation content={content?.bookConsultation} />
    </Layout>
  );
}
