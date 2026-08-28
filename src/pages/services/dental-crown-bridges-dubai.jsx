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


export default function dentaldubaiCrownBridgePage() {
  const categoryName = 'Dental';
  const subcategoryName = 'Dental Crown & Bridges';

  // Get content from data file
  const content = getSubcategoryContent('dental-dubai', 'dental-crown-bridge');

  return (
    <Layout>
      <Head>
        <title key="title">Dental Crown Bridges in Dubai | Durable & Natural Smile</title>
        <meta name="description" content="Restore your smile with dental crown bridges in Dubai. Safe, long-lasting, and natural-looking solutions by licensed dentists for effective tooth replacement." key="description" />
        <meta name="keywords" content="dental crown bridges Dubai, Tooth crown Dubai, dental bridge treatment, Porcelain crown Dubai, Metal ceramic crowns, Tooth replacement in Dubai, Cosmetic dental bridges, Long-lasting dental crowns, Licensed dentist in Dubai, Full mouth restoration Dubai, Affordable crown bridges, Natural-looking dental crowns" />
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
      <ContentReviewBadge doctorName="Dr. Hirbod Gilandoust" pageSlug="dental-crown-bridges-dubai" />
      <FAQSection content={content?.faq} />
      <BookConsultation content={content?.bookConsultation} />
    </Layout>
  );
}
