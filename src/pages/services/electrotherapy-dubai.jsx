import Layout from '../../../components/Layout';
import Head from "next/head";
import TreatmentHero from '../../../components/TreatmentHero';
import QuickNavigation from '../../../components/QuickNavigation';
// import CertificationsSection from '../../../components/CertificationsSection';
import TreatmentOverview from '../../../components/TreatmentOverview';
import HealingJourney from '../../../components/HealingJourney';
import TreatmentBenefits from '../../../components/TreatmentBenefits';
import ServiceWhyChoose from '../../../components/ServiceWhyChoose';
import PatientTestimonials from '../../../components/VideoTestimonials';
import DoctorsSection from '../../../components/DoctorsSection';
// import PricingPackages from '../../../components/PricingPackages';
import PaymentInsurance from '../../../components/PaymentInsurance';
import FAQSection from '../../../components/Faq';
import BookConsultation from '../../../components/BookConsultation';
import ContentReviewBadge from '../../../components/ContentReviewBadge';
import { getSubcategoryContent } from '../../data/subcategoryContent';

export default function ElectrotherapyPage() {
  const categoryName = 'Physiotherapy';
  const subcategoryName = 'Electrotherapy';

  // Get content from data file
  const content = getSubcategoryContent('physiotherapy-dubai', 'electrotherapy');

  const navItems = [
    { id: 'treatment-info', label: 'Treatment Info' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'benefits', label: 'Benefits' },
    { id: 'why-choose-us', label: 'Why Choose Us' },
    { id: 'testimonials', label: 'Success Stories' },
    { id: 'our-doctors', label: 'Our Doctors' },
    { id: 'faq', label: 'FAQ' },
    { id: 'book-now', label: 'Book Now' },
  ];

  return (
    <Layout>
      <Head>
        <title key="title">Electrotherapy in Dubai for Pain Relief and Physiotherapy</title>
        <meta name="description" content="Electrotherapy in Dubai offers safe physiotherapy treatment for pain relief, muscle stimulation, and faster recovery using TENS, IFC, and NMES under expert care." key="description" />
        <meta name="keywords" content="Electrotherapy in Dubai, Electrotherapy treatment Dubai, Physiotherapy electrotherapy, TENS therapy Dubai, IFC therapy Dubai, NMES therapy Dubai, Pain relief physiotherapy Dubai, Muscle stimulation therapy, Electrotherapy physiotherapy clinic, Rehabilitation therapy Dubai" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
{
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  "@id": "https://ramacarepolyclinic.ae/services/electrotherapy-dubai/#procedure",
  "name": "Electrotherapy in Dubai",
  "alternateName": "Physiotherapy Electrotherapy Treatment",
  "url": "https://ramacarepolyclinic.ae/services/electrotherapy-dubai/",
  "mainEntityOfPage": "https://ramacarepolyclinic.ae/services/electrotherapy-dubai/",
  "description": "Electrotherapy in Dubai at RamaCare Polyclinic offers advanced physiotherapy treatment using electrical stimulation to relieve pain, improve muscle function, and support tissue healing, provided by experienced physiotherapists.",
  "procedureType": "Physical therapy",
  "bodyLocation": "Musculoskeletal system",
  "howPerformed": "Electrotherapy is performed using therapeutic electrical stimulation devices such as TENS, EMS, Interferential Current, and other modalities to help reduce pain, improve circulation, and enhance muscle activation in the affected areas.",
  "preparation": "No special preparation is required. Patients should wear comfortable clothing to expose the area being treated.",
  "followup": "Follow-up sessions and periodic assessment are recommended to monitor progress and adjust therapy as needed.",
  "indication": [
    "Acute or chronic pain",
    "Muscle weakness",
    "Nerve stimulation",
    "Post-injury rehabilitation",
    "Inflammation reduction"
  ],
  "possibleComplication": "Mild skin irritation or tingling may occur at electrode sites.",
  "provider": {
    "@type": "MedicalClinic",
    "name": "RamaCare Polyclinic – Physiotherapy Department",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "12 Al Dhiyafah Rd - Jumeirah Terrace Building, Ground Floor, Jumeirah 1",
      "addressLocality": "Jumeirah 1",
      "addressRegion": "Dubai",
      "postalCode": "393558",
      "addressCountry": "AE"
    },
    "telephone": "+971 56 659 7878",
    "areaServed": {
      "@type": "City",
      "name": "Dubai"
    },
    "priceRange": "$$"
  }
}
            `,
          }}
        />
      </Head>
      <TreatmentHero 
        categoryName={categoryName}
        subcategoryName={subcategoryName}
        hero={content?.hero}
      />
      <QuickNavigation navItems={navItems} />
      <TreatmentOverview 
        subcategoryName={subcategoryName}
        content={content?.overview}
      />
      <HealingJourney content={content?.healingJourney} />
      <TreatmentBenefits 
        content={content?.benefits}
      />
      <ServiceWhyChoose content={content?.whyChoose} />
      <PatientTestimonials content={content?.testimonials} />
      <DoctorsSection content={content?.doctors} />
      <PaymentInsurance content={content?.paymentInsurance} />
      <ContentReviewBadge doctorName="Jeena Mathew" pageSlug="electrotherapy-dubai" />
      <FAQSection content={content?.faq} />
      <BookConsultation content={content?.bookConsultation} />
    </Layout>
  );
}
