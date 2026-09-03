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
        <meta name="keywords" content="Electrotherapy in Dubai, Electrotherapy treatment Dubai, Physiotherapy electrotherapy, TENS therapy Dubai, IFC therapy Dubai, NMES therapy Dubai, Pain relief physiotherapy Dubai, Muscle stimulation therapy, Electrotherapy physiotherapy clinic, Rehabilitation therapy Dubai" key="keywords" />
        <link rel="canonical" href="https://ramacarepolyclinic.ae/services/electrotherapy-dubai/" key="canonical" />
        <meta name="robots" content="index, follow" key="robots" />

        {/* Open Graph Tags */}
        <meta property="og:type" content="article" key="og:type" />
        <meta property="og:title" content="Electrotherapy in Dubai for Pain Relief and Physiotherapy" key="og:title" />
        <meta property="og:description" content="Electrotherapy in Dubai offers safe physiotherapy treatment for pain relief, muscle stimulation, and faster recovery using TENS, IFC, and NMES under expert care." key="og:description" />
        <meta property="og:url" content="https://ramacarepolyclinic.ae/services/electrotherapy-dubai/" key="og:url" />
        <meta property="og:image" content="https://ramacarepolyclinic.ae/images/electro1.jpg" key="og:image" />
        <meta property="og:image:width" content="1200" key="og:image:width" />
        <meta property="og:image:height" content="630" key="og:image:height" />
        <meta property="og:site_name" content="RamaCare Polyclinic" key="og:site_name" />
        <meta property="og:locale" content="en_AE" key="og:locale" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content="Electrotherapy in Dubai for Pain Relief and Physiotherapy" key="twitter:title" />
        <meta name="twitter:description" content="Safe physiotherapy treatment for pain relief, muscle stimulation, and faster recovery using TENS, IFC, and NMES with DHA-licensed therapists in Jumeirah 1." key="twitter:description" />
        <meta name="twitter:image" content="https://ramacarepolyclinic.ae/images/electro1.jpg" key="twitter:image" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "BreadcrumbList",
                  "@id": "https://ramacarepolyclinic.ae/services/electrotherapy-dubai/#breadcrumb",
                  "itemListElement": [
                    {
                      "@type": "ListItem",
                      "position": 1,
                      "name": "Home",
                      "item": "https://ramacarepolyclinic.ae/"
                    },
                    {
                      "@type": "ListItem",
                      "position": 2,
                      "name": "Physiotherapy",
                      "item": "https://ramacarepolyclinic.ae/services/physiotherapy-dubai/"
                    },
                    {
                      "@type": "ListItem",
                      "position": 3,
                      "name": "Electrotherapy",
                      "item": "https://ramacarepolyclinic.ae/services/electrotherapy-dubai/"
                    }
                  ]
                },
                {
                  "@type": "MedicalWebPage",
                  "@id": "https://ramacarepolyclinic.ae/services/electrotherapy-dubai/#webpage",
                  "url": "https://ramacarepolyclinic.ae/services/electrotherapy-dubai/",
                  "name": "Electrotherapy Dubai",
                  "description": "Electrotherapy in Dubai offers safe physiotherapy treatment for pain relief, muscle stimulation, and faster recovery using TENS, IFC, and NMES under expert care.",
                  "inLanguage": "en",
                  "isPartOf": {
                    "@type": "WebSite",
                    "url": "https://ramacarepolyclinic.ae/",
                    "name": "RamaCare Polyclinic"
                  },
                  "about": {
                    "@type": "MedicalCondition",
                    "name": "Musculoskeletal Rehabilitation and Pain Management"
                  },
                  "reviewedBy": {
                    "@type": "Person",
                    "name": "Jeena Mathew",
                    "jobTitle": "Musculoskeletal Physiotherapy Specialist",
                    "url": "https://ramacarepolyclinic.ae/doctors/jeena-mathew-physiotherapist-dubai/"
                  },
                  "breadcrumb": {
                    "@id": "https://ramacarepolyclinic.ae/services/electrotherapy-dubai/#breadcrumb"
                  },
                  "publisher": {
                    "@type": "MedicalClinic",
                    "name": "RamaCare Polyclinic",
                    "address": {
                      "@type": "PostalAddress",
                      "streetAddress": "12 Al Dhiyafah Rd, Jumeirah Terrace Building, Ground Floor",
                      "addressLocality": "Jumeirah 1, Dubai",
                      "addressCountry": "AE"
                    }
                  }
                },
                {
                  "@type": "MedicalProcedure",
                  "@id": "https://ramacarepolyclinic.ae/services/electrotherapy-dubai/#procedure",
                  "name": "Electrotherapy in Dubai",
                  "alternateName": "Physiotherapy Electrotherapy Treatment",
                  "url": "https://ramacarepolyclinic.ae/services/electrotherapy-dubai/",
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
                      "streetAddress": "12 Al Dhiyafah Rd, Jumeirah Terrace Building, Ground Floor",
                      "addressLocality": "Jumeirah 1, Dubai",
                      "addressCountry": "AE"
                    },
                    "telephone": "+971 56 659 7878"
                  }
                },
                ...(content?.faq?.faqs && content.faq.faqs.length > 0 ? [{
                  "@type": "FAQPage",
                  "@id": "https://ramacarepolyclinic.ae/services/electrotherapy-dubai/#faq",
                  "mainEntity": content.faq.faqs.map(faq => ({
                    "@type": "Question",
                    "name": faq.question,
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": faq.answer
                    }
                  }))
                }] : [])
              ]
            })
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
