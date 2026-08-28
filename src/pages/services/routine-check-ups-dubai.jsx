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

export default function ExpertiseinRoutineCheckUpsPage() {
  const categoryName = 'General Physician';
  const subcategoryName = 'Expertise in Routine Check-Ups';

  // Get content from data file
  const content = getSubcategoryContent('general-physician-dubai', 'expertise-in-routine-check-ups');

  return (
    <Layout>
      <Head>
        <title key="title">Expertise in Routine Check-Ups in Dubai | Preventive Care</title>
        <meta name="description" content="Expertise in routine check-ups in Dubai with trusted doctors, clear screenings, and personalised health plans to detect issues early and support long-term health." key="description" />
        <meta name="keywords" content="routine check-ups in Dubai, general health check-up Dubai, preventive health screening Dubai, Annual medical check-up in Dubai, routine medical examination in Dubai, Primary care check-up in Dubai, health assessment Dubai, Early disease detection in Dubai, preventive healthcare Dubai" />
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
      <ContentReviewBadge doctorName="Dr. Sahar Zomorrodi" pageSlug="routine-check-ups-dubai" />
      <FAQSection content={content?.faq} />
      <BookConsultation content={content?.bookConsultation} />
    </Layout>
  );
}
