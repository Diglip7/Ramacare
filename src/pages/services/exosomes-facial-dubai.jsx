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

  return (
    <Layout>
      <Head>
        <title key="title">Exosomes Facial Dubai – Advanced Skin Rejuvenation</title>
        <meta name="description" content="Exosomes Facial in Dubai is performed by specialists to repair skin, boost collagen, reduce fine lines, and restore a youthful, radiant appearance safely." key="description" />
        <meta name="keywords" content="Exosomes Facial Dubai, Skin rejuvenation Dubai, Anti-aging facial in Dubai, Collagen-boosting facial, Advanced facial treatment, Youthful skin therapy in Dubai, Professional facial Din ubai, Fine lines reduction in Dubai, Skin repair treatment, Cosmetic facial in Dubai" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "MedicalCondition",
                  "@id": "https://ramacarepolyclinic.ae/services/exosomes-facial-dubai/#condition",
                  "name": "Facial Skin Rejuvenation Needs",
                  "alternateName": "Skin Aging and Texture Concerns",
                  "url": "https://ramacarepolyclinic.ae/services/exosomes-facial-dubai/",
                  "description": "Facial skin rejuvenation needs include concerns such as fine lines, dull complexion, uneven texture, and early signs of aging — commonly addressed with advanced aesthetic treatments.",
                  "possibleTreatment": {
                    "@type": "MedicalTherapy",
                    "name": "Exosomes Facial Therapy",
                    "description": "A regenerative aesthetic therapy using bioactive exosomes to support cellular communication and rejuvenation, helping improve skin texture, tone, and overall radiance."
                  }
                },
                {
                  "@type": "MedicalProcedure",
                  "@id": "https://ramacarepolyclinic.ae/services/exosomes-facial-dubai/#procedure",
                  "name": "Exosomes Facial in Dubai",
                  "alternateName": "Advanced Regenerative Facial Treatment",
                  "url": "https://ramacarepolyclinic.ae/services/exosomes-facial-dubai/",
                  "mainEntityOfPage": "https://ramacarepolyclinic.ae/services/exosomes-facial-dubai/",
                  "description": "The Exosomes Facial treatment in Dubai at RamaCare Polyclinic is an advanced aesthetic procedure designed to promote skin rejuvenation by delivering bioactive exosomes that help stimulate cellular repair, improve texture, and enhance radiance.",
                  "procedureType": "Regenerative aesthetic dermatology procedure",
                  "howPerformed": "Performed by trained clinicians, the treatment involves careful preparation of exosome formulations applied or infused into the skin using specialized techniques tailored to each patient’s needs.",
                  "preparation": "Patients should arrive with clean skin and avoid makeup prior to treatment. Clinicians will review medical history and skincare concerns before starting.",
                  "followup": "Follow-up sessions may be recommended based on skin goals and clinician assessment to maintain results and support overall rejuvenation.",
                  "indication": [
                    "Fine lines and wrinkles",
                    "Dull or uneven skin tone",
                    "Signs of aging",
                    "Dehydrated skin",
                    "Loss of elasticity"
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
      <ContentReviewBadge doctorName="Sonita Sinaga" pageSlug="exosomes-facial-dubai" />
      <FAQSection content={content?.faq} />
      <BookConsultation content={content?.bookConsultation} />
    </Layout>
  );
}
