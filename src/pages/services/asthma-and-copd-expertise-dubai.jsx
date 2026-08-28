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

export default function AsthmaandCOPDExpertisePage() {
  const categoryName = 'General Physician';
  const subcategoryName = 'Asthma and COPD Expertise';

  // Get content from data file
  const content = getSubcategoryContent('general-physician-dubai', 'asthma-and-copd-expertise');

  return (
    <Layout>
      <Head>
        <title key="title">Asthma and COPD Specialist in Dubai for Expert Lung Care</title>
        <meta name="description" content="Consult an experienced asthma and COPD specialist in Dubai for accurate diagnosis, inhaler management, and long-term lung care tailored to your condition." key="description" />
        <meta name="keywords" content="Asthma and COPD specialist in Dubai, Asthma treatment Dubai, COPD treatment in Dubai, Lung care specialist Dubai, Respiratory clinic Dubai, Pulmonologist in Dubai, Chronic asthma management Dubai, COPD breathing treatment in Dubai, Adult asthma specialist in Dubai, Inhaler therapy Dubai, Chronic lung disease treatment in Dubai, Respiratory health care in Dubai" />
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
      <ContentReviewBadge doctorName="Dr. Sahar Zomorrodi" pageSlug="asthma-and-copd-expertise-dubai" />
      <FAQSection content={content?.faq} />
      <BookConsultation content={content?.bookConsultation} />
    </Layout>
  );
}
