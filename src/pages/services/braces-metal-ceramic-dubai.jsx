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

export default function BracesMetalCeramicPage() {
  const categoryName = 'Dental';
  const subcategoryName = 'Braces (Metal & Ceramic)';

  // Get content from data file
  const content = getSubcategoryContent('dental-dubai', 'braces-metal-ceramic');

  return (
    <Layout>
      <Head>
        <title key="title">Braces Metal & Ceramic in Dubai | Smile Correction Experts</title>
        <meta name="description" content="Achieve a perfect smile with metal or ceramic braces in Dubai. Safe, effective orthodontic treatment by licensed dentists for all ages, tailored to your needs." key="description" />
        <meta name="keywords" content="Braces Dubai, Metal braces Dubai, Ceramic braces Dubai, Orthodontic treatment Dubai, Teeth alignment Dubai, dental braces for adults, Kids braces Dubai, Invisible braces Dubai, Smile correction Dubai, Affordable braces Dubai, Licensed orthodontist in Dubai, Corrective dental braces" />
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
      <ContentReviewBadge doctorName="Dr. Hirbod Gilandoust" pageSlug="braces-metal-ceramic-dubai" />
      <FAQSection content={content?.faq} />
      <BookConsultation content={content?.bookConsultation} />
    </Layout>
  );
}
