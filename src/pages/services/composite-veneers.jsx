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

export default function CompositeVeneersPage() {
  const categoryName = 'Dental';
  const subcategoryName = 'Composite Veneers';

  // Get content from data file
  const content = getSubcategoryContent('dental-dubai', 'composite-veneers');

  return (
    <Layout>
      <Head>
        <title key="title">Composite Veneers Dubai | Safe & Natural Smile Solutions</title>
        <meta name="description" content="Enhance your smile with composite veneers in Dubai—safe, natural-looking, and durable dental solutions for teeth restoration and cosmetic smile makeovers by expert dentists." key="description" />
        <meta name="keywords" content="Composite veneers Dubai, dental veneers Dubai, Cosmetic dentistry Dubai, Smile makeover Dubai, Tooth restoration in Dubai, Affordable veneers Dubai, Same-day veneers Dubai, Composite bonding Dubai, Durable veneers Dubai, Natural-looking veneers Dubai, DHA-licensed dentist in Dubai, Best veneers Dubai" />
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
      <ContentReviewBadge doctorName="Dr. Hirbod Gilandoust" pageSlug="composite-veneers" />
      <FAQSection content={content?.faq} />
      <BookConsultation content={content?.bookConsultation} />
    </Layout>
  );
}
