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


export default function dentaldubaiVeneersPage() {
  const categoryName = 'Dental';
  const subcategoryName = 'Dental Veneers';

  // Get content from data file
  const content = getSubcategoryContent('dental-dubai', 'dental-veneers');

  return (
    <Layout>
      <Head>
        <title key="title">Dental Veneers in Dubai | Trusted Smile Makeover Experts</title>
        <meta name="description" content="Transform your smile with dental veneers in Dubai. Expert porcelain and composite solutions for natural, durable, and personalized cosmetic results by certified dentists." key="description" />
        <meta name="keywords" content="dental veneers Dubai, Porcelain veneers Dubai, Composite veneers Dubai, Cosmetic dentistry Dubai, Smile makeover Dubai, Tooth restoration in Dubai, Same-day veneers Dubai, Natural-looking veneers Dubai, Emax veneers Dubai, Affordable veneers Dubai, DHA-licensed dentist in Dubai, Best dental veneers Dubai, dental veneers Jumeirah 1, Best dental veneers Jumeirah 1" />
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
      <ContentReviewBadge doctorName="Dr. Hirbod Gilandoust" pageSlug="dental-veneers-dubai" />
      <FAQSection content={content?.faq} />
      <BookConsultation content={content?.bookConsultation} />
    </Layout>
  );
}
