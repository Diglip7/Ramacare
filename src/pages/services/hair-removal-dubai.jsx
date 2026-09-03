import Layout from '../../../components/Layout';
import Head from "next/head";
import TreatmentHero from '../../../components/TreatmentHero';
import QuickNavigation from '../../../components/QuickNavigation';
// import CertificationsSection from '../../../components/CertificationsSection';
import TreatmentOverview from '../../../components/TreatmentOverview';
import HealingJourney from '../../../components/HealingJourney';
import TreatmentBenefits from '../../../components/TreatmentBenefits';
import WhyChooseSection from '../../../components/PanchakarmaWhyChoose';
import HairRemovalAdditionalInfo from '../../../components/HairRemovalAdditionalInfo';
import PatientTestimonials from '../../../components/VideoTestimonials';
import DoctorsSection from '../../../components/DoctorsSection';
// import PricingPackages from '../../../components/PricingPackages';
import PaymentInsurance from '../../../components/PaymentInsurance';
import FAQSection from '../../../components/Faq';
import BookConsultation from '../../../components/BookConsultation';
import ContentReviewBadge from '../../../components/ContentReviewBadge';
import { getSubcategoryContent } from '../../data/subcategoryContent';


export default function HairRemovalPage() {
  const categoryName = 'Aesthetic Dermatology';
  const subcategoryName = 'Hair Removal';

  // Get content from data file - nested path
  const content = getSubcategoryContent('aesthetic-dermatology-dubai', 'hair-treatment/hair-removal');

  return (
    <Layout>
      <Head>
        <title key="title">Laser Hair Removal Dubai | Permanent Hair Reduction Treatment</title>
        <meta name="description" content="Get safe and effective Laser Hair Removal in Dubai at RamaCare Polyclinic. Reduce unwanted hair on the face and body with advanced laser technology and personalized treatment plans." key="description" />
        <meta name="keywords" content="Hair removal in Dubai, Laser hair removal Dubai, Permanent hair removal Dubai, Medical hair removal treatment, Facial hair removal Dubai, Body hair removal Dubai, Safe hair removal methods, Professional hair removal clinic, Skin-friendly hair removal Dubai" />

        <meta property="og:title" content="Laser Hair Removal Dubai | Permanent Hair Reduction Treatment" />
        <meta property="og:description" content="Get safe and effective Laser Hair Removal in Dubai at RamaCare Polyclinic. Reduce unwanted hair on the face and body with advanced laser technology and personalized treatment plans." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ramacarepolyclinic.ae/services/hair-removal-dubai/" />
        <meta property="og:image" content="https://ramacarepolyclinic.ae/images/hair-removal.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Laser Hair Removal in Dubai - RamaCare Polyclinic" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Laser Hair Removal Dubai | Permanent Hair Reduction Treatment" />
        <meta name="twitter:description" content="Safe, DHA-supervised laser hair removal in Dubai using advanced technology for face and body, tailored to your skin and hair type." />
        <meta name="twitter:image" content="https://ramacarepolyclinic.ae/images/hair-removal.jpg" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "MedicalCondition",
                  "@id": "https://ramacarepolyclinic.ae/services/hair-removal-dubai/#condition",
                  "name": "Excess or Unwanted Hair Growth",
                  "alternateName": "Unwanted Body and Facial Hair / Hair Follicle Growth Concern",
                  "url": "https://ramacarepolyclinic.ae/services/hair-removal-dubai/",
                  "description": "Excess or unwanted hair growth refers to hair on facial or body areas where it is undesirable for aesthetic or comfort reasons, often treated with advanced dermatologic and cosmetic procedures to reduce or remove hair permanently or long‑term. Treatments vary by hair type, skin tone, and target area.",
                  "possibleTreatment": {
                    "@type": "MedicalTherapy",
                    "name": "Hair Removal Therapy",
                    "description": "Medical hair removal therapies such as laser hair reduction or electrolysis use targeted energy to slow hair regrowth or permanently disable hair follicles for smoother, hair‑free skin."
                  }
                },
                {
                  "@type": "MedicalProcedure",
                  "@id": "https://ramacarepolyclinic.ae/services/hair-removal-dubai/#procedure",
                  "name": "Hair Removal Treatment in Dubai",
                  "alternateName": "Laser Hair Removal & Medical Hair Reduction",
                  "url": "https://ramacarepolyclinic.ae/services/hair-removal-dubai/",
                  "mainEntityOfPage": "https://ramacarepolyclinic.ae/services/hair-removal-dubai/",
                  "description": "Hair removal treatment at RamaCare Polyclinic in Dubai offers medically supervised aesthetic procedures — including advanced laser hair reduction and other hair‑targeting methods — designed to reduce unwanted hair on the face and body with long‑lasting results.",
                  "procedureType": "Medical and aesthetic dermatologic procedure",
                  "howPerformed": "After an initial consultation and skin/hair assessment, trained clinicians apply advanced laser energy or other clinically approved techniques (e.g., laser hair reduction) to target hair follicles, damaging them to slow or inhibit regrowth over a series of sessions. Protocols and energy settings are customized based on hair thickness, skin type, and treatment area.",
                  "preparation": "Patients are advised to avoid recent waxing or plucking, arrive with clean skin, shave the treatment area if instructed, and disclose any medications or skin sensitivities prior to the session. Some procedures may use protective eyewear or topical cooling gels.",
                  "followup": "Follow‑up sessions are typically scheduled several weeks apart to progressively treat hair in different growth cycles. Clinicians monitor skin tolerance, adjust energy settings if needed, and advise on maintenance or touch‑up treatments.",
                  "indication": [
                    "Unwanted facial hair",
                    "Unwanted body hair",
                    "Ingrown hairs",
                    "Areas unsuitable for waxing or shaving",
                    "Long‑term hair reduction goals"
                  ],
                  "provider": {
                    "@type": "MedicalClinic",
                    "name": "RamaCare Polyclinic – Aesthetic & Dermatology Care",
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
                },
                {
                  "@type": "MedicalWebPage",
                  "@id": "https://ramacarepolyclinic.ae/services/hair-removal-dubai/#webpage",
                  "url": "https://ramacarepolyclinic.ae/services/hair-removal-dubai/",
                  "name": "Laser Hair Removal Dubai | Permanent Hair Reduction Treatment",
                  "description": "Get safe and effective Laser Hair Removal in Dubai at RamaCare Polyclinic. Reduce unwanted hair on the face and body with advanced laser technology and personalized treatment plans.",
                  "inLanguage": "en",
                  "isPartOf": {
                    "@type": "WebSite",
                    "url": "https://ramacarepolyclinic.ae/",
                    "name": "RamaCare Polyclinic"
                  },
                  "about": {
                    "@id": "https://ramacarepolyclinic.ae/services/hair-removal-dubai/#condition"
                  },
                  "lastReviewed": "2026-08-29",
                  "reviewedBy": {
                    "@id": "https://ramacarepolyclinic.ae/services/hair-removal-dubai/#reviewer"
                  },
                  "breadcrumb": {
                    "@type": "BreadcrumbList",
                    "itemListElement": [
                      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ramacarepolyclinic.ae/" },
                      { "@type": "ListItem", "position": 2, "name": "Aesthetic Dermatology", "item": "https://ramacarepolyclinic.ae/services/aesthetic-dermatology-dubai" },
                      { "@type": "ListItem", "position": 3, "name": "Hair Removal", "item": "https://ramacarepolyclinic.ae/services/hair-removal-dubai/" }
                    ]
                  }
                },
                {
                  "@type": "Person",
                  "@id": "https://ramacarepolyclinic.ae/services/hair-removal-dubai/#reviewer",
                  "name": "Sonita Sinaga",
                  "jobTitle": "Licensed & Certified Aesthetic Therapist",
                  "hasCredential": "NCLC Laser Certified",
                  "worksFor": {
                    "@type": "MedicalOrganization",
                    "name": "RamaCare Polyclinic"
                  },
                  "url": "https://ramacarepolyclinic.ae/doctors/sonita-sinaga-aesthetic-therapist-dubai/"
                },
                {
                  "@type": "FAQPage",
                  "@id": "https://ramacarepolyclinic.ae/services/hair-removal-dubai/#faq",
                  "mainEntity": content?.faq?.faqs?.map(faq => ({
                    "@type": "Question",
                    "name": faq.question,
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": faq.answer
                    }
                  })) || []
                }
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
      <QuickNavigation navItems={[
        { id: 'treatment-info', label: 'Treatment Info' },
        { id: 'how-it-works', label: 'How It Works' },
        { id: 'benefits', label: 'Benefits' },
        { id: 'why-choose', label: 'Why Choose Us' },
        { id: 'hair-removal-info', label: 'Treatment Areas & Care' },
        { id: 'testimonials', label: 'Success Stories' },
        { id: 'our-doctors', label: 'Our Doctors' },
        { id: 'faq', label: 'FAQ' },
        { id: 'book-now', label: 'Book Now' },
      ]} />

      <TreatmentOverview
        subcategoryName={subcategoryName}
        content={content?.overview}
      />
      <HealingJourney content={content?.healingJourney} />
      <TreatmentBenefits
        content={content?.benefits}
      />
      <WhyChooseSection content={content?.whyChoose} />
      <HairRemovalAdditionalInfo content={content?.hairRemovalInfo} />
      <PatientTestimonials content={content?.testimonials} />
      <DoctorsSection content={content?.doctors} />

      <PaymentInsurance content={content?.paymentInsurance} />
      <ContentReviewBadge doctorName="Sonita Sinaga" pageSlug="hair-removal-dubai" />
      <FAQSection content={content?.faq} />
      <BookConsultation content={content?.bookConsultation} />
    </Layout>
  );
}
