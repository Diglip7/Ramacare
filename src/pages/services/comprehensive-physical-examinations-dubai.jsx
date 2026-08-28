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

export default function ComprehensivePhysicalExaminationsPage() {
  const categoryName = 'General Physician';
  const subcategoryName = 'Comprehensive Physical Examinations';

  // Get content from data file
  const content = getSubcategoryContent('general-physician-dubai', 'comprehensive-physical-examinations');

  return (
    <Layout>
      <Head>
        <title key="title">Regular Physical Examinations in Dubai | Trusted Care</title>
        <meta name="description" content="Regular physical examinations in Dubai with experienced doctors, clear screenings, and personalised advice to detect health issues early and support long-term health." key="description" />
        <meta name="keywords" content="regular physical examinations in Dubai, physical check-up Dubai, general physical exam Dubai, preventive health check Dubai, routine medical exam Dubai, annual physical examination in Dubai, Primary care examination in Dubai, health screening Dubai, preventive healthcare Dubai" />
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
      <ContentReviewBadge doctorName="Dr. Sahar Zomorrodi" pageSlug="comprehensive-physical-examinations-dubai" />
      <FAQSection content={content?.faq} />
      <BookConsultation content={content?.bookConsultation} />
    </Layout>
  );
}
