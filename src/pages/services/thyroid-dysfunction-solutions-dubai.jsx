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

export default function ThyroidDysfunctionSolutionsPage() {
  const categoryName = 'General Physician';
  const subcategoryName = 'Thyroid Dysfunction Solutions';

  // Get content from data file
  const content = getSubcategoryContent('general-physician-dubai', 'thyroid-dysfunction-solutions');

  return (
    <Layout>
      <Head>
        <title key="title">Thyroid Dysfunction Solutions in Dubai | Expert Care</title>
        <meta name="description" content="Get trusted thyroid dysfunction solutions in Dubai with accurate diagnosis and personalised care. Our doctors help manage hypothyroidism and hyperthyroidism safely." key="description" />
        <meta name="keywords" content="Thyroid dysfunction solutions in Dubai, Thyroid treatment Dubai, Hypothyroidism treatment in Dubai, Hyperthyroidism treatment Dubai, Thyroid disorder management in Dubai, Thyroid specialist Dubai, Thyroid diagnosis Dubai, Hormonal imbalance treatment in Dubai, Endocrinology clinic Dubai" />
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
      <ContentReviewBadge doctorName="Dr. Sahar Zomorrodi" pageSlug="thyroid-dysfunction-solutions-dubai" />
      <FAQSection content={content?.faq} />
      <BookConsultation content={content?.bookConsultation} />
    </Layout>
  );
}
