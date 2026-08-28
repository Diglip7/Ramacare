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

export default function DyslipidemiaDiagnosisandTreatmentPage() {
  const categoryName = 'General Physician';
  const subcategoryName = 'Dyslipidemia Diagnosis and Treatment';

  // Get content from data file
  const content = getSubcategoryContent('general-physician-dubai', 'dyslipidemia-diagnosis-and-treatment');

  return (
    <Layout>
      <Head>
        <title key="title">Dyslipidemia Diagnosis and Treatment for Healthy Cholesterol</title>
        <meta name="description" content="Dyslipidemia diagnosis and treatment focused on managing cholesterol levels, reducing heart disease risk, and supporting long-term cardiovascular health safely." key="description" />
        <meta name="keywords" content="Dyslipidemia diagnosis and treatment, High cholesterol treatment, Lipid profile test, Cholesterol management, Dyslipidemia care, Heart health treatment, High LDL cholesterol, Triglyceride management, Preventive cardiac care" />
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
      <ContentReviewBadge doctorName="Dr. Sahar Zomorrodi" pageSlug="dyslipidemia-diagnosis-and-treatment" />
      <FAQSection content={content?.faq} />
      <BookConsultation content={content?.bookConsultation} />
    </Layout>
  );
}
