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
import { getSubcategoryContent } from '../../data/subcategoryContent';


export default function ScoliosisTreatmentPage() {
  const categoryName = 'Physiotherapy';
  const subcategoryName = 'Scoliosis Treatment';

  // Get content from data file
  const content = getSubcategoryContent('physiotherapy-dubai', 'scoliosis');

 return (
   <Layout>
    <Head>
  <title key="title">Scoliosis Treatment in Dubai – Expert Spine Pain Relief</title>
  <meta name="description" content="Struggling with scoliosis or back pain? Get expert scoliosis treatment in Dubai. Improve posture, reduce pain & restore mobility. Book now! " key="description" />
  <meta name="keywords" content="Scoliosis treatment in Dubai, Scoliosis physiotherapy Dubai, Spine alignment treatment Dubai, Posture correction therapy Dubai, Back curvature treatment in Dubai, Non-surgical scoliosis treatment, Pediatric scoliosis treatment Dubai, Adult scoliosis management in Dubai, Rehabilitation physiotherapy Dubai, Spine care clinic Dubai" />
  
   <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "MedicalProcedure",
        "@id": "https://ramacarepolyclinic.ae/services/scoliosis-treatment-in-duba/i/#procedure",
        "name": "Scoliosis Treatment in Dubai",
        "alternateName": "Non-surgical Scoliosis Care",
        "url": "https://ramacarepolyclinic.ae/services/scoliosis-treatment-in-duba/i/",
        "mainEntityOfPage": "https://ramacarepolyclinic.ae/services/scoliosis-treatment-in-duba/i/",
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
      <PatientTestimonials content={content?.testimonials} />
    
    <PaymentInsurance content={content?.paymentInsurance} />
     <FAQSection content={content?.faq} />
     <BookConsultation content={content?.bookConsultation} />
   </Layout>
  );
}
