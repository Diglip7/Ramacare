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

export default function DiabetesMellitusCarePage() {
  const categoryName = 'General Physician';
  const subcategoryName = 'Diabetes Mellitus Care';

  // Get content from data file
  const content = getSubcategoryContent('general-physician-dubai', 'diabetes-mellitus-care-dubai');

  return (
    <Layout>
      <Head>
        <title key="title">Diabetes Mellitus Care in Dubai by Experienced Physicians</title>
        <meta name="description" content="Get trusted diabetes mellitus care in Dubai with accurate diagnosis, lifestyle guidance, and ongoing medical support to help you manage blood sugar safely." key="description" />
        <meta name="keywords" content="Diabetes mellitus care in Dubai, Diabetes treatment Dubai, Diabetes management clinic Dubai, Type 1 diabetes treatment in Dubai, Type 2 diabetes care in Dubai, Blood sugar control in Dubai, Diabetes doctor in Dubai, Endocrine care Dubai, Chronic diabetes management in Dubai" />
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
      <ContentReviewBadge doctorName="Dr. Sahar Zomorrodi" pageSlug="diabetes-mellitus-care-dubai" />
      <FAQSection content={content?.faq} />
      <BookConsultation content={content?.bookConsultation} />
    </Layout>
  );
}
