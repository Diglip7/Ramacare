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

export default function SpecializedHypertensionManagementPage() {
  const categoryName = 'General Physician';
  const subcategoryName = 'Specialized Hypertension Management';

  // Get content from data file
  const content = getSubcategoryContent('general-physician-dubai', 'specialized-hypertension-management');

  return (
    <Layout>
      <Head>
        <title key="title">Specialised Hypertension Treatment in Dubai | Blood Pressure Care</title>
        <meta name="description" content="Get specialised hypertension treatment in Dubai with expert doctors, accurate diagnosis, and personalised care plans to safely control high blood pressure long term." key="description" />
        <meta name="keywords" content="Hypertension treatment in Dubai, High blood pressure treatment in Dubai, Hypertension specialist Dubai, Blood pressure doctor Dubai, Hypertension clinic Dubai, Chronic hypertension management in Dubai, Cardiovascular risk management in Dubai, Hypertension diagnosis and care in Dubai, Lifestyle management for high blood pressure, Hypertension medication Dubai, 24-hour blood pressure monitoring in Dubai" />
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
      <ContentReviewBadge doctorName="Dr. Sahar Zomorrodi" pageSlug="specialized-hypertension-management" />
      <FAQSection content={content?.faq} />
      <BookConsultation content={content?.bookConsultation} />
    </Layout>
  );
}
