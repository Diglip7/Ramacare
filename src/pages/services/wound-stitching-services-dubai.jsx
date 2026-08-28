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

export default function WoundStitchingServicesPage() {
  const categoryName = 'General Physician';
  const subcategoryName = 'Wound Stitching Services';

  // Get content from data file
  const content = getSubcategoryContent('general-physician-dubai', 'wound-stitching-services');

  return (
    <Layout>
      <Head>
        <title key="title">Wound Stitching Services in Dubai With Skilled Medical Care</title>
        <meta name="description" content="Wound stitching services in Dubai offer safe, timely care for cuts and injuries using sterile techniques, expert doctors, and proper aftercare for faster healing." key="description" />
        <meta name="keywords" content="Wound stitching services in Dubai, Emergency wound stitching in Dubai, Cut and laceration treatment in Dubai, Minor injury treatment in Dubai, Stitches removal Dubai, Wound care clinic Dubai, Accident injury treatment in Dubai, First aid and suturing in Dubai, Surgical stitching in Dubai" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "MedicalCondition",
                  "@id": "https://ramacarepolyclinic.ae/services/wound-stitching-services-dubai/#condition",
                  "name": "Acute Wounds and Lacerations",
                  "alternateName": "Cuts, Lacerations & Open Wounds",
                  "url": "https://ramacarepolyclinic.ae/services/wound-stitching-services-dubai/",
                  "description": "Open cuts and skin lacerations that require professional wound stitching and care to prevent infection, promote healing, and reduce scarring.",
                  "possibleTreatment": {
                    "@type": "MedicalTherapy",
                    "name": "Wound Stitching Therapy",
                    "description": "Professional medical wound stitching (suturing) performed by qualified clinicians to safely close wounds and support optimal healing outcomes."
                  }
                },
                {
                  "@type": "MedicalProcedure",
                  "@id": "https://ramacarepolyclinic.ae/services/wound-stitching-services-dubai/#procedure",
                  "name": "Wound Stitching Services in Dubai",
                  "alternateName": "Wound Suturing & Wound Closure",
                  "url": "https://ramacarepolyclinic.ae/services/wound-stitching-services-dubai/",
                  "mainEntityOfPage": "https://ramacarepolyclinic.ae/services/wound-stitching-services-dubai/",
                  "description": "Expert wound stitching services in Dubai including prompt wound assessment, sterile suturing, local anesthesia care, and follow-up monitoring to ensure safe healing and minimal scarring.",
                  "procedureType": "Minor surgical wound closure",
                  "howPerformed": "Qualified medical professionals perform wound assessment, sterilization, local anesthesia, precise suturing, and dressing in a sterile clinical environment.",
                  "preparation": "Clean the wound area and share medical history; follow any pre-procedure advice from the clinician.",
                  "followup": "Scheduled follow-up wound checks and stitch removal where required.",
                  "indication": [
                    "Cuts and lacerations",
                    "Deep wounds that won’t close naturally",
                    "Sports injuries",
                    "Workplace or household trauma",
                    "Open wounds needing expert closure"
                  ],
                  "provider": {
                    "@type": "MedicalClinic",
                    "name": "RamaCare Polyclinic – General & Emergency Care",
                    "address": {
                      "@type": "PostalAddress",
                      "streetAddress": "12 Al Dhiyafah Rd - Jumeirah Terrace Building, Ground Floor, Jumeirah 1",
                      "addressLocality": "Jumeirah 1",
                      "addressRegion": "Dubai",
                      "postalCode": "393558",
                      "addressCountry": "AE"
                    },
                    "telephone": "+971566597878",
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
      <ContentReviewBadge doctorName="Dr. Sahar Zomorrodi" pageSlug="wound-stitching-services-dubai" />
      <FAQSection content={content?.faq} />
      <BookConsultation content={content?.bookConsultation} />
    </Layout>
  );
}
