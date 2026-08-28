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

export default function OxygeneoIlluminateFacialPage() {
  const categoryName = 'Facial';
  const subcategoryName = 'Oxygeneo Illuminate Facial';

  // Get content from data file
  const content = getSubcategoryContent('facial-dubai', 'oxygeneo-illuminate-facial');

  return (
    <Layout>
      <Head>
        <title key="title">OxyGeneo Illuminate Facial in Dubai – Brighten Your Skin</title>
        <meta name="description" content="OxyGeneo Illuminate Facial in Dubai exfoliates, oxygenates, and brightens skin, leaving it smooth, radiant, and refreshed under professional care." key="description" />
        <meta name="keywords" content="OxyGeneo Illuminate Facial in Dubai, Skin brightening facial in Dubai, Exfoliating facial treatment, Oxygenating facial in Dubai, Radiant skin therapy Dubai, Professional facial treatment, Skin rejuvenation Dubai, Glow-enhancing facial in Dubai, Anti-aging facial in Dubai, Healthy skin facial in Dubai" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "MedicalCondition",
                  "@id": "https://ramacarepolyclinic.ae/services/oxygeneo-illuminate-facial-dubai/#condition",
                  "name": "Facial Skin Dullness and Texture Concerns",
                  "alternateName": "Skin Radiance and Texture Issues",
                  "url": "https://ramacarepolyclinic.ae/services/oxygeneo-illuminate-facial-dubai/",
                  "description": "Facial skin dullness and texture concerns include lack of radiance, uneven tone, minor congestion, fine lines, and signs of tired or stressed skin caused by environmental exposure, aging, and lifestyle factors.",
                  "possibleTreatment": {
                    "@type": "MedicalTherapy",
                    "name": "OxyGeneo Illuminate Facial Therapy",
                    "description": "A rejuvenating aesthetic therapy that exfoliates, infuses nutrients, and oxygenates the skin’s surface using advanced 3-in-1 OxyGeneo technology to enhance radiance, texture, and hydration."
                  }
                },
                {
                  "@type": "MedicalProcedure",
                  "@id": "https://ramacarepolyclinic.ae/services/oxygeneo-illuminate-facial-dubai/#procedure",
                  "name": "OxyGeneo Illuminate Facial in Dubai",
                  "alternateName": "Oxygenating Glow Facial Treatment",
                  "url": "https://ramacarepolyclinic.ae/services/oxygeneo-illuminate-facial-dubai/",
                  "mainEntityOfPage": "https://ramacarepolyclinic.ae/services/oxygeneo-illuminate-facial-dubai/",
                  "description": "The OxyGeneo Illuminate Facial in Dubai at RamaCare Polyclinic is a non-invasive, advanced skin treatment designed to exfoliate, oxygenate, and nourish the skin for improved radiance, texture, and hydration.",
                  "procedureType": "Non-invasive aesthetic skin enhancement",
                  "howPerformed": "Performed using specialized OxyGeneo technology, the treatment combines gentle exfoliation with nutrient infusion and oxygenation to revitalize the skin’s surface and boost glow.",
                  "preparation": "Patients should arrive with clean skin and avoid makeup prior to the session. Prior consultation on skin concerns and sensitivities helps tailor the treatment.",
                  "followup": "Follow-up sessions may be recommended to maintain radiance and hydration based on individual skin needs and clinician assessment.",
                  "indication": [
                    "Dull or tired complexion",
                    "Dry or dehydrated skin",
                    "Uneven skin tone or texture",
                    "Minor skin congestion",
                    "Loss of natural glow"
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
      <ContentReviewBadge doctorName="Sonita Sinaga" pageSlug="oxygeneo-illuminate-facial-dubai" />
      <FAQSection content={content?.faq} />
      <BookConsultation content={content?.bookConsultation} />
    </Layout>
  );
}
