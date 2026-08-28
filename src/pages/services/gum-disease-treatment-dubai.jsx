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

export default function GumDiseaseTreatmentPage() {
  const categoryName = 'Dental';
  const subcategoryName = 'Gum Disease Treatment';

  // Get content from data file
  const content = getSubcategoryContent('dental-dubai', 'gum-disease-treatment');

  return (
    <Layout>
      <Head>
        <title key="title">Gum Disease Treatment in Dubai | Healthy Gums Care</title>
        <meta name="description" content="Protect your oral health with expert gum disease treatment in Dubai. Safe, effective solutions by licensed dentists to prevent gum infection and maintain healthy gums." key="description" />
        <meta name="keywords" content="Gum disease treatment Dubai, Periodontitis treatment Dubai, Gum infection treatment, Gum care Dubai, Gum disease dentist Dubai, Periodontal therapy Dubai, Gum inflammation treatment, Oral health Dubai, Healthy gums Dubai, dental clinic for gums, Gum treatment near me in Dubai, Professional gum care" />
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
      <ContentReviewBadge doctorName="Dr. Hirbod Gilandoust" pageSlug="gum-disease-treatment-dubai" />
      <FAQSection content={content?.faq} />
      <BookConsultation content={content?.bookConsultation} />
    </Layout>
  );
}
