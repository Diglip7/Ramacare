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
import SkinTreatmentAdditionalContent from '../../../components/SkinTreatmentAdditionalContent';
import ServiceExtrasSection from '../../../components/ServiceExtrasSection';
import ContentReviewBadge from '../../../components/ContentReviewBadge';
import { getSubcategoryContent } from '../../data/subcategoryContent';

export default function FacePRPinDubaiPage() {
    const categoryName = 'Facial';
    const subcategoryName = 'Face PRP';

    // Get content from data file
    const content = getSubcategoryContent('facial-dubai', 'face-prp');

    const navItems = [
        { id: 'treatment-info', label: 'Treatment Info' },
        { id: 'how-it-works', label: 'How It Works' },
        { id: 'benefits', label: 'Benefits' },
        { id: 'when-to-consider', label: 'Ideal Candidate' },
        { id: 'recovery-aftercare', label: 'Aftercare' },
        { id: 'why-choose-ramacare', label: 'Why Us' },
        { id: 'testimonials', label: 'Success Stories' },
        { id: 'our-doctors', label: 'Our Doctors' },
        { id: 'faq', label: 'FAQ' },
        { id: 'book-now', label: 'Book Now' },
    ];

    const CANONICAL_URL = "https://ramacarepolyclinic.ae/services/face-prp-in-dubai/";
    const PAGE_TITLE = "Face PRP in Dubai – Skin Rejuvenation by Experts";
    const PAGE_DESCRIPTION = "Face PRP in Dubai is performed by specialists to stimulate collagen, improve skin texture, reduce fine lines, and restore a youthful, healthy glow.";

    const schemaGraph = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "BreadcrumbList",
          "@id": `${CANONICAL_URL}#breadcrumb`,
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
              "name": "Facial",
              "item": "https://ramacarepolyclinic.ae/services/facial-dubai/"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Face PRP",
              "item": CANONICAL_URL
            }
          ]
        },
        {
          "@type": "MedicalProcedure",
          "@id": `${CANONICAL_URL}#procedure`,
          "name": "Face PRP in Dubai",
          "alternateName": "Platelet-Rich Plasma Facial Rejuvenation",
          "description": "Non-surgical Platelet-Rich Plasma (PRP) skin rejuvenation treatment using the patient's own concentrated platelets to stimulate collagen production, improve skin texture and elasticity, and reduce fine lines and acne scars.",
          "url": CANONICAL_URL,
          "mainEntityOfPage": CANONICAL_URL,
          "procedureType": "https://schema.org/NoninvasiveProcedure",
          "bodyLocation": "Face",
          "howPerformed": "After a clinical consultation and skin assessment, a small sample of your blood is drawn and centrifuged to isolate platelet-rich plasma. PRP is then injected into targeted areas of the face to encourage collagen stimulation and cellular regeneration.",
          "preparation": "Patients should arrive with clean skin and share their medical history before the procedure. Minimal preparation is required.",
          "followup": "Multiple sessions over weeks are recommended for optimal skin rejuvenation results, with aftercare guidance provided by clinicians.",
          "indication": [
            "Fine lines and wrinkles",
            "Dull or uneven skin tone",
            "Acne scars and pigmentation concerns",
            "Loss of facial elasticity",
            "General facial skin rejuvenation"
          ],
          "reviewedBy": {
            "@type": "Person",
            "name": "Sonita Sinaga",
            "jobTitle": "Licensed & Certified Aesthetic Therapist",
            "url": "https://ramacarepolyclinic.ae/doctors/sonita-sinaga-aesthetic-therapist-dubai/"
          },
          "provider": {
            "@type": "MedicalClinic",
            "name": "RamaCare Polyclinic",
            "url": "https://ramacarepolyclinic.ae/",
            "image": "https://ramacarepolyclinic.ae/images/face-prp1.jpg",
            "telephone": "+971566597878",
            "priceRange": "$$",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "12 Al Dhiyafah Rd, Jumeirah Terrace Building, Ground Floor",
              "addressLocality": "Jumeirah 1",
              "addressRegion": "Dubai",
              "addressCountry": "AE"
            }
          }
        },
        {
          "@type": "FAQPage",
          "@id": `${CANONICAL_URL}#faq`,
          "mainEntity": (content?.faq?.faqs || []).map((faq) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        }
      ]
    };

  return (
    <Layout>
      <Head>
        <title key="title">{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_DESCRIPTION} key="description" />
        <meta name="keywords" content="Face PRP in Dubai, PRP facial treatment Dubai, Skin rejuvenation Dubai, Collagen stimulation facial, Anti-aging PRP treatment, Facial rejuvenation therapy, Fine lines reduction in Dubai, Youthful skin treatment in Dubai, Platelet-rich plasma facial, Professional PRP skin therapy" key="keywords" />
        <meta name="robots" content="index, follow" key="robots" />
        <link rel="canonical" href={CANONICAL_URL} key="canonical" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Face PRP in Dubai – Skin Rejuvenation by Experts" key="og:title" />
        <meta property="og:description" content="Face PRP in Dubai is performed by specialists to stimulate collagen, improve skin texture, reduce fine lines, and restore a youthful, healthy glow." key="og:description" />
        <meta property="og:url" content={CANONICAL_URL} key="og:url" />
        <meta property="og:type" content="website" key="og:type" />
        <meta property="og:image" content="https://ramacarepolyclinic.ae/images/face-prp1.jpg" key="og:image" />
        <meta property="og:site_name" content="RamaCare Polyclinic" key="og:site_name" />
        <meta property="og:locale" content="en_AE" key="og:locale" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content="Face PRP in Dubai – Skin Rejuvenation by Experts" key="twitter:title" />
        <meta name="twitter:description" content="Face PRP in Dubai is performed by specialists to stimulate collagen, improve skin texture, reduce fine lines, and restore a youthful, healthy glow." key="twitter:description" />
        <meta name="twitter:image" content="https://ramacarepolyclinic.ae/images/face-prp1.jpg" key="twitter:image" />

        {/* Structured Data Schemas */}
        <script
          key="schema-graph"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
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
      <SkinTreatmentAdditionalContent content={content} />
      <ServiceExtrasSection aftercareContent={content?.aftercareContent} />
      <PatientTestimonials content={content?.testimonials} />
      <DoctorsSection content={content?.doctors} />
      <PaymentInsurance content={content?.paymentInsurance} />
      <ContentReviewBadge doctorName="Sonita Sinaga" pageSlug="face-prp-in-dubai" />
      <FAQSection content={content?.faq} />
      <BookConsultation content={content?.bookConsultation} />
    </Layout>
  );
}
