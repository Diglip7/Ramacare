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

export default function TeethCompositeRestorationPage() {
  const categoryName = 'Dental';
  const subcategoryName = 'Teeth Composite Restoration';

  // Get content from data file
  const content = getSubcategoryContent('dental-dubai', 'teeth-composite-restoration');

  return (
    <Layout>
      <Head>
        <title key="title">Tooth Composite Restoration | Durable & Natural Dental Care</title>
        <meta name="description" content="Restore your teeth with composite restoration for a natural look and long-lasting results. Safe, pain-free dental treatment by licensed dentists for healthy smiles." key="description" />
        <meta name="keywords" content="Tooth composite restoration, dental composite filling, Composite bonding treatment, Tooth repair Dubai, Cosmetic dental restoration, Durable tooth restoration, Natural-looking fillings, DHA licensed dentist in Dubai, Smile restoration Dubai, Tooth repair treatment, Affordable composite restoration, dental repair solutions" />
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
      <ContentReviewBadge doctorName="Dr. Hirbod Gilandoust" pageSlug="teeth-composite-restoration-dubai" />
      <FAQSection content={content?.faq} />
      <BookConsultation content={content?.bookConsultation} />
    </Layout>
  );
}
