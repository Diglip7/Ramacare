import Layout from '../../../components/Layout';
import Head from "next/head";
import TreatmentHero from '../../../components/TreatmentHero';
import QuickNavigation from '../../../components/QuickNavigation';
// import CertificationsSection from '../../../components/CertificationsSection';
import TreatmentOverview from '../../../components/TreatmentOverview';
import HealingJourney from '../../../components/HealingJourney';
import TreatmentBenefits from '../../../components/TreatmentBenefits';
import TreatmentAreasAndCare from '../../../components/TreatmentAreasAndCare';
import PatientTestimonials from '../../../components/VideoTestimonials';
import DoctorsSection from '../../../components/DoctorsSection';
// import PricingPackages from '../../../components/PricingPackages';
import PaymentInsurance from '../../../components/PaymentInsurance';
import FAQSection from '../../../components/Faq';
import BookConsultation from '../../../components/BookConsultation';
import ContentReviewBadge from '../../../components/ContentReviewBadge';
import { getSubcategoryContent } from '../../data/subcategoryContent';


export default function BotoxPage() {
  const categoryName = 'Aesthetic Dermatology';
  const subcategoryName = 'Botox';

  // Get content from data file - nested path
  const content = getSubcategoryContent('aesthetic-dermatology-dubai', 'skin-treatment/botox');

  return (
    <Layout>
      <Head>
  <title key="title">Botox in Dubai for Wrinkle Reduction and Facial Rejuvenation</title>
  <meta name="description" content="Botox in Dubai helps reduce fine lines and wrinkles, relax facial muscles, and restore a refreshed look through safe, doctor-administered treatment." key="description" />
  <meta name="keywords" content="Botox in Dubai, Botox treatment Dubai, Wrinkle reduction Dubai, Anti-aging Botox, Facial Botox treatment, Forehead lines treatment, Crow’s feet Botox, Non-surgical facial rejuvenation, Medical Botox Dubai" />
  
  <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "MedicalCondition",
          "@id": "https://ramacarepolyclinic.ae/services/botox-dubai/#condition",
          "name": "Facial Dynamic Wrinkles and Muscle-Related Aging Signs",
          "alternateName": "Expression Lines and Wrinkle Formation",
          "url": "https://ramacarepolyclinic.ae/services/botox-dubai/",
          "description": "Facial dynamic wrinkles and muscle-related aging signs include forehead lines, frown lines, crow’s feet, and other expression-related creases resulting from repeated facial muscle activity and aging changes.",
          "possibleTreatment": {
            "@type": "MedicalTherapy",
            "name": "Botulinum Toxin (Botox) Therapy",
            "description": "Botox therapy involves controlled injections of botulinum toxin to temporarily relax facial muscles responsible for dynamic wrinkles, reducing their appearance and creating a smoother facial expression."
          }
        },
        {
          "@type": "MedicalProcedure",
          "@id": "https://ramacarepolyclinic.ae/services/botox-dubai/#procedure",
          "name": "Botox Treatment in Dubai",
          "alternateName": "Botulinum Toxin Cosmetic Injections",
          "url": "https://ramacarepolyclinic.ae/services/botox-dubai/",
          "mainEntityOfPage": "https://ramacarepolyclinic.ae/services/botox-dubai/",
          "description": "Botox treatment in Dubai at RamaCare Polyclinic is a minimally invasive cosmetic procedure that uses botulinum toxin injections to reduce the appearance of dynamic facial wrinkles and fine lines for a refreshed, youthful look.",
          "procedureType": "Minimally invasive aesthetic injection therapy",
          "howPerformed": "During the treatment, trained clinicians administer precise, small doses of botulinum toxin into targeted facial muscles. This temporarily inhibits muscle contraction, softening dynamic wrinkles and expression lines.",
          "preparation": "Patients are advised to arrive with clean skin and disclose their full medical history, including medications, allergies, and previous aesthetic treatments. Avoiding blood-thinning medications prior may be recommended.",
          "followup": "Follow-up may include a review of results and touch-ups as necessary to maintain optimal outcomes, usually over subsequent weeks.",
          "indication": [
            "Forehead lines",
            "Frown lines (glabellar lines)",
            "Crow’s feet",
            "Bunny lines",
            "Excessive muscle activity causing expression wrinkles"
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
     <QuickNavigation navItems={[
      { id: 'treatment-info', label: 'Treatment Info' },
      { id: 'how-it-works', label: 'How It Works' },
      { id: 'benefits', label: 'Benefits' },
      { id: 'botox-treatment-areas', label: 'Treatment Areas & Care' },
      { id: 'testimonials', label: 'Success Stories' },
      { id: 'our-doctors', label: 'Our Doctors' },
      { id: 'faq', label: 'FAQ' },
      { id: 'book-now', label: 'Book Now' },
    ]} />
    
    <TreatmentOverview 
      subcategoryName={subcategoryName}
      content={content?.overview}
    />
      <HealingJourney content={content?.healingJourney} />
      <TreatmentBenefits 
        content={content?.benefits}
      />
      <TreatmentAreasAndCare content={content?.botoxTreatmentAreas} sectionId="botox-treatment-areas" />
       <PatientTestimonials content={content?.testimonials} />
       <DoctorsSection content={content?.doctors} />
    
    <PaymentInsurance content={content?.paymentInsurance} />
      <ContentReviewBadge doctorName="Dr. Sahar Zomorrodi" pageSlug="botox-dubai" />
      <FAQSection content={content?.faq} />
      <BookConsultation content={content?.bookConsultation} />
    </Layout>
  );
}
