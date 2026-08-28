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
import DetailedServiceContent from '../../../components/DetailedServiceContent';
import ContentReviewBadge from '../../../components/ContentReviewBadge';
import { getSubcategoryContent } from '../../data/subcategoryContent';

export default function DryNeedlingPage() {
  const categoryName = 'Physiotherapy';
  const subcategoryName = 'Dry Needling';

  // Get content from data file
  const content = getSubcategoryContent('physiotherapy-dubai', 'dry-needling');

  return (
    <Layout>
      <Head>
        <title key="title">Dry Needling in Dubai – Fast Muscle Pain Relief Therapy</title>
        <meta name="description" content="Muscle pain or stiffness? Get dry needling in Dubai to release trigger points and improve movement. Safe, expert physiotherapy care. Book now! " key="description" />
        <meta name="keywords" content="Dry needling therapy in Dubai, Dry needling treatment Dubai, Dry needling Dubai price, Trigger point therapy Dubai, Physiotherapy dry needling Dubai, Muscle pain treatment Dubai, Sports injury physiotherapy Dubai, Dry needling near me, Pain relief physiotherapy Dubai" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalProcedure",
              "@id": "https://ramacarepolyclinic.ae/services/dry-needling-dubai/#procedure",
              "name": "Dry Needling in Dubai",
              "alternateName": "Therapeutic Dry Needling Treatment",
              "url": "https://ramacarepolyclinic.ae/services/dry-needling-dubai/",
              "mainEntityOfPage": "https://ramacarepolyclinic.ae/services/dry-needling-dubai/",
              "description": "Dry needling in Dubai at RamaCare Polyclinic is a therapeutic physiotherapy technique used to alleviate muscle pain, reduce trigger points, and improve musculoskeletal function, administered by experienced physiotherapy practitioners.",
              "procedureType": "Physical therapy technique",
              "bodyLocation": "Muscles and connective tissues",
              "howPerformed": "Dry needling is performed using thin sterile needles inserted into trigger points and tight muscle bands to release tension, reduce pain, and improve muscle function. Sessions are guided by qualified physiotherapists.",
              "preparation": "Patients are advised to wear comfortable clothing and report existing pain areas prior to therapy. No special fasting or preparation is required.",
              "followup": "Follow-up sessions and re-evaluations are recommended to assess progress and update treatment plans.",
              "indication": [
                "Muscle pain and tension",
                "Trigger point pain",
                "Reduced muscle flexibility",
                "Musculoskeletal dysfunction"
              ],
              "possibleComplication": "Temporary muscle soreness or mild bruising may occur at needle sites.",
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
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": content?.faq?.faqs?.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
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
      <DoctorsSection content={content?.doctors} />
      
      <TreatmentOverview 
        subcategoryName={subcategoryName}
        content={content?.overview}
      />
      <HealingJourney content={content?.healingJourney} />
      <TreatmentBenefits 
        content={content?.benefits}
      />
      <DetailedServiceContent content={content?.detailedContent} />
      <PatientTestimonials content={content?.testimonials} />
      <PaymentInsurance content={content?.paymentInsurance} />
      <ContentReviewBadge doctorName="Jeena Mathew" pageSlug="dry-needling-dubai" />
      <FAQSection content={content?.faq} />
      <BookConsultation content={content?.bookConsultation} />
    </Layout>
  );
}
