import Layout from '../../../components/Layout';
import Head from "next/head";
import TreatmentHero from '../../../components/TreatmentHero';
import QuickNavigation from '../../../components/QuickNavigation';
// import CertificationsSection from '../../../components/CertificationsSection';
import TreatmentOverview from '../../../components/TreatmentOverview';
import HealingJourney from '../../../components/HealingJourney';
import TreatmentBenefits from '../../../components/TreatmentBenefits';
import SkinTreatmentAdditionalContent from '../../../components/SkinTreatmentAdditionalContent';
import PatientTestimonials from '../../../components/VideoTestimonials';
import DoctorsSection from '../../../components/DoctorsSection';
// import PricingPackages from '../../../components/PricingPackages';
import PaymentInsurance from '../../../components/PaymentInsurance';
import FAQSection from '../../../components/Faq';
import BookConsultation from '../../../components/BookConsultation';
import ContentReviewBadge from '../../../components/ContentReviewBadge';
import { getSubcategoryContent } from '../../data/subcategoryContent';


export default function SkinTighteningPage() {
  const categoryName = 'Aesthetic Dermatology';
  const subcategoryName = 'Skin Tightening Treatment';
  const CANONICAL_URL = "https://ramacarepolyclinic.ae/services/skin-tightening-dubai/";

  // Get content from data file - nested path
  const content = getSubcategoryContent('aesthetic-dermatology-dubai', 'skin-treatment/skin-tightening');

  const navItems = [
    { id: 'treatment-info', label: 'Treatment Info' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'benefits', label: 'Benefits' },
    { id: 'why-choose-ramacare', label: 'Why Choose Us' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'our-doctors', label: 'Our Doctors' },
    { id: 'faq', label: 'FAQ' },
    { id: 'book-now', label: 'Book Now' }
  ];

  return (
    <Layout>
      <Head>
        <title key="title">Skin Tightening Treatment in Dubai for Firmer Youthful Skin</title>
        <meta name="description" content="Skin tightening treatment in Dubai helps improve skin firmness and elasticity using safe, non-invasive technologies under expert medical supervision." key="description" />
        <meta name="keywords" content="Skin tightening treatment in Dubai, Non-surgical skin tightening in Dubai, Laser skin tightening Dubai, Facial skin tightening in Dubai, Body skin tightening in Dubai, Anti-aging skin treatment Dubai, Skin firming treatment, Skin laxity treatment Dubai, Advanced skin tightening therapy, Best skin tightening treatment in Dubai, Skin rejuvenation Dubai, Skin tightening treatment in Dubai price, Skin tightening treatment in dubai cost, Best skin tightening treatment in dubai, Skin tightening treatment in dubai for face, Laser skin tightening dubai, Skin tightening treatments for face, Best skin tightening treatments for face, Skin Laser Treatment price in Dubai" />
        <link rel="canonical" href={CANONICAL_URL} />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Skin Tightening Treatment in Dubai for Firmer Youthful Skin" />
        <meta property="og:description" content="Skin tightening treatment in Dubai helps improve skin firmness and elasticity using safe, non-invasive technologies under expert medical supervision." />
        <meta property="og:url" content={CANONICAL_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://ramacarepolyclinic.ae/images/skin-tightening.jpg" />
        <meta property="og:site_name" content="RamaCare Polyclinic" />
        <meta property="og:locale" content="en_AE" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Skin Tightening Treatment in Dubai for Firmer Youthful Skin" />
        <meta name="twitter:description" content="Skin tightening treatment in Dubai helps improve skin firmness and elasticity using safe, non-invasive technologies under expert medical supervision." />
        <meta name="twitter:image" content="https://ramacarepolyclinic.ae/images/skin-tightening.jpg" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
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
                      "name": "Aesthetic Dermatology",
                      "item": "https://ramacarepolyclinic.ae/services/aesthetic-dermatology-dubai"
                    },
                    {
                      "@type": "ListItem",
                      "position": 3,
                      "name": "Skin Tightening Treatment",
                      "item": CANONICAL_URL
                    }
                  ]
                },
                {
                  "@type": "MedicalCondition",
                  "@id": `${CANONICAL_URL}#condition`,
                  "name": "Facial Skin Laxity and Aging Concerns",
                  "alternateName": "Loose or Sagging Skin",
                  "url": CANONICAL_URL,
                  "description": "Facial skin laxity and aging concerns refer to loose, sagging skin, reduced elasticity, early jowling, and age-related changes that diminish facial firmness and contour.",
                  "possibleTreatment": {
                    "@type": "MedicalTherapy",
                    "name": "Skin Tightening Therapy",
                    "description": "Aesthetic skin tightening therapies use energy-based technologies (such as radiofrequency, ultrasound, or laser) or advanced injectable procedures to stimulate collagen production and improve skin firmness and elasticity."
                  }
                },
                {
                  "@type": "MedicalProcedure",
                  "@id": `${CANONICAL_URL}#procedure`,
                  "name": "Skin Tightening Treatment in Dubai",
                  "alternateName": "Non-Surgical Skin Firming Therapy",
                  "url": CANONICAL_URL,
                  "mainEntityOfPage": CANONICAL_URL,
                  "description": "Non-surgical aesthetic procedure using radiofrequency and other energy-based technologies to gently heat deeper skin layers, stimulate collagen and elastin remodeling, and improve skin firmness, elasticity, and contour definition for the face and body.",
                  "procedureType": "https://schema.org/NoninvasiveProcedure",
                  "bodyLocation": "Face, Body",
                  "howPerformed": "Performed by trained clinicians, the skin tightening process typically involves the use of energy-based devices (e.g., radiofrequency or ultrasound) or specialized injectable protocols that stimulate collagen and elastin production to firm and lift the skin.",
                  "preparation": "Patients are advised to consult with the clinician about medical history and skin concerns prior to treatment. Minimal preparation is generally required.",
                  "followup": "Follow-up sessions and clinician-guided aftercare may be recommended to monitor results and schedule maintenance treatments according to individual needs.",
                  "indication": [
                    "Loose or sagging skin",
                    "Reduced skin elasticity",
                    "Early jowling",
                    "Fine lines due to laxity",
                    "Loss of facial contour"
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
                    "image": "https://ramacarepolyclinic.ae/images/skin-tightening.jpg",
                    "telephone": "+971566597878",
                    "priceRange": "$$",
                    "address": {
                      "@type": "PostalAddress",
                      "streetAddress": "12 Al Dhiyafah Rd - Jumeirah Terrace Building, Ground Floor",
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
      <SkinTreatmentAdditionalContent content={content} />
      <PatientTestimonials content={content?.testimonials} />
      <DoctorsSection content={content?.doctors} />
    
      <PaymentInsurance content={content?.paymentInsurance} />
      <ContentReviewBadge 
        doctorName="Sonita Sinaga" 
        pageSlug="skin-tightening-dubai" 
        customStatement="This skin firming treatment guide has been clinically reviewed for treatment safety, radiofrequency protocols, and skincare excellence by Sonita Sinaga."
      />
      <FAQSection content={content?.faq} />
      <BookConsultation content={content?.bookConsultation} />
    </Layout>
  );
}
