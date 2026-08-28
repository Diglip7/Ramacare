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

export default function TeethDenturesPage() {
  const categoryName = 'Dental';
  const subcategoryName = 'Teeth Dentures';

  // Get content from data file
  const content = getSubcategoryContent('dental-dubai', 'teeth-dentures');

  return (
    <Layout>
      <Head>
        <title key="title">Teeth Dentures in Dubai | Natural & Comfortable Solutions</title>
        <meta name="description" content="Restore your smile with teeth dentures in Dubai. Choose from full, partial, or implant-supported options designed for comfort, natural appearance, and long-lasting results." key="description" />
        <meta name="keywords" content="Teeth dentures Dubai, Dentures Dubai, Full dentures Dubai, Partial dentures Dubai, Implant-supported dentures Dubai, Removable dentures Dubai, Affordable dentures Dubai, DHA-licensed dentist in Dubai, dental prosthetics Dubai, Smile restoration Dubai, Comfortable dentures Dubai, Natural-looking dentures in Dubai" />
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
      <ContentReviewBadge doctorName="Dr. Hirbod Gilandoust" pageSlug="teeth-dentures-dubai" />
      <FAQSection content={content?.faq} />
      <BookConsultation content={content?.bookConsultation} />
    </Layout>
  );
}
