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
import ServiceExtrasSection from '../../../components/ServiceExtrasSection';
import FAQSection from '../../../components/Faq';
import BookConsultation from '../../../components/BookConsultation';
import ContentReviewBadge from '../../../components/ContentReviewBadge';
import { getSubcategoryContent } from '../../data/subcategoryContent';

export default function RootCanalTreatmentPage() {
  const categoryName = 'Dental';
  const subcategoryName = 'Root Canal Treatment';

  // Get content from data file
  const content = getSubcategoryContent('dental-dubai', 'root-canal-treatment');

  return (
    <Layout>
      <Head>
        <title key="title">Root Canal Treatment in Dubai | Trusted Endodontist Care</title>
        <meta name="description" content="Get safe and effective root canal treatment in Dubai. Skilled endodontists remove infection, relieve pain, and restore your tooth for long-lasting dental health." key="description" />
        <meta name="keywords" content="Root canal treatment Dubai, Root canal therapy Dubai, Endodontist Dubai, Painless root canal Dubai, Tooth infection treatment in Dubai, dental clinic Dubai, Emergency root canal Dubai, Tooth restoration in Dubai, Best endodontist in Dubai, DHA-licensed dentist in Dubai, Root canal cost in Dubai, Advanced root canal Dubai" />
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
      <ServiceExtrasSection 
        aftercareContent={content?.recoveryAftercare}
        whyChooseContent={content?.whyChoose}
      />
      <ContentReviewBadge doctorName="Dr. Hirbod Gilandoust" pageSlug="root-canal-treatment-dubai" />
      <FAQSection content={content?.faq} />
      <BookConsultation content={content?.bookConsultation} />
    </Layout>
  );
}
