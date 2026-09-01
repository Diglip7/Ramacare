import Layout from '../../../components/Layout';
import Head from "next/head";
import TreatmentHero from '../../../components/TreatmentHero';
import QuickNavigation from '../../../components/QuickNavigation';
// import CertificationsSection from '../../../components/CertificationsSection';
import TreatmentOverview from '../../../components/TreatmentOverview';
import HealingJourney from '../../../components/HealingJourney';
import TreatmentBenefits from '../../../components/TreatmentBenefits';
import ServiceExtrasSection from '../../../components/ServiceExtrasSection';
import SkinTreatmentAdditionalContent from '../../../components/SkinTreatmentAdditionalContent';
import PatientTestimonials from '../../../components/VideoTestimonials';
import DoctorsSection from '../../../components/DoctorsSection';
// import PricingPackages from '../../../components/PricingPackages';
import PaymentInsurance from '../../../components/PaymentInsurance';
import FAQSection from '../../../components/Faq';
import BookConsultation from '../../../components/BookConsultation';
import ContentReviewBadge from '../../../components/ContentReviewBadge';
import { getSubcategoryContent } from '../../data/subcategoryContent';


export default function SkinAllergyPage() {
  const categoryName = 'Aesthetic Dermatology';
  const subcategoryName = 'Skin Allergy Treatment';
  const CANONICAL_URL = "https://ramacarepolyclinic.ae/services/skin-allergy-dubai/";

  // Get content from data file - nested path
  const content = getSubcategoryContent('aesthetic-dermatology-dubai', 'skin-treatment/skin-allergy');

  const navItems = [
    { id: 'treatment-info', label: 'Treatment Info' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'benefits', label: 'Benefits' },
    { id: 'recovery-aftercare', label: 'Recovery & Aftercare' },
    { id: 'why-choose-ramacare', label: 'Why Choose Us' },
    { id: 'when-to-consider', label: 'Good Candidate' },
    { id: 'our-doctors', label: 'Our Doctors' },
    { id: 'faq', label: 'FAQ' },
    { id: 'book-now', label: 'Book Now' }
  ];

  return (
    <Layout>
      <Head>
        <title key="title">Skin Allergy Treatment in Dubai for Safe Symptom Relief</title>
        <meta name="description" content="Skin allergy treatment in Dubai helps diagnose causes, relieve itching and rashes, and restore skin health through safe, doctor-guided medical care." key="description" />
        <meta name="keywords" content="Skin allergy treatment in Dubai, Skin allergy care Dubai, Allergy rash treatment Dubai, Itching skin treatment in Dubai, Dermatitis treatment Dubai, Skin infection and allergy care, Eczema treatment Dubai, Medical skin treatment Dubai, Allergy diagnosis and treatment, Sensitive skin treatment Dubai" />
        <link rel="canonical" href={CANONICAL_URL} />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Skin Allergy Treatment in Dubai for Safe Symptom Relief" />
        <meta property="og:description" content="Skin allergy treatment in Dubai helps diagnose causes, relieve itching and rashes, and restore skin health through safe, doctor-guided medical care." />
        <meta property="og:url" content={CANONICAL_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://ramacarepolyclinic.ae/images/skin-allergy.jpg" />
        <meta property="og:site_name" content="RamaCare Polyclinic" />
        <meta property="og:locale" content="en_AE" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Skin Allergy Treatment in Dubai for Safe Symptom Relief" />
        <meta name="twitter:description" content="Skin allergy treatment in Dubai helps diagnose causes, relieve itching and rashes, and restore skin health through safe, doctor-guided medical care." />
        <meta name="twitter:image" content="https://ramacarepolyclinic.ae/images/skin-allergy.jpg" />

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
                      "name": "Skin Allergy Treatment",
                      "item": CANONICAL_URL
                    }
                  ]
                },
                {
                  "@type": "MedicalWebPage",
                  "@id": `${CANONICAL_URL}#webpage`,
                  "name": "Skin Allergy Treatment in Dubai",
                  "url": CANONICAL_URL,
                  "description": "Medically guided diagnosis and treatment for allergic skin reactions including eczema, contact dermatitis, hives, and allergic rashes, focused on identifying triggers, relieving symptoms, and preventing recurrence.",
                  "medicalAudience": {
                    "@type": "Patient"
                  },
                  "about": {
                    "@type": "MedicalCondition",
                    "name": "Skin Allergy"
                  },
                  "reviewedBy": {
                    "@type": "Person",
                    "name": "Dr. Sahar Zomorrodi",
                    "jobTitle": "General Practitioner, MD",
                    "url": "https://ramacarepolyclinic.ae/doctors/dr-sahar-zomorrodi-general-practitioner-dubai/"
                  },
                  "publisher": {
                    "@type": "MedicalClinic",
                    "name": "RamaCare Polyclinic",
                    "url": "https://ramacarepolyclinic.ae/",
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
                  "@type": "MedicalCondition",
                  "@id": `${CANONICAL_URL}#condition`,
                  "name": "Skin Allergy and Dermatitis Conditions",
                  "alternateName": "Allergic Skin Reactions",
                  "url": CANONICAL_URL,
                  "description": "Skin allergy and dermatitis conditions include immune-mediated reactions of the skin to allergens such as chemicals, cosmetics, plants, insect bites, and environmental substances, leading to redness, itching, swelling, rash, irritation, or hives.",
                  "possibleTreatment": {
                    "@type": "MedicalTherapy",
                    "name": "Allergic Dermatitis Management Therapy",
                    "description": "Comprehensive skin allergy management involving clinical evaluation, trigger identification, avoidance strategies, topical and systemic treatments, and ongoing follow-up provided by dermatology specialists."
                  }
                },
                {
                  "@type": "MedicalProcedure",
                  "@id": `${CANONICAL_URL}#procedure`,
                  "name": "Skin Allergy Diagnosis and Treatment in Dubai",
                  "alternateName": "Dermatitis Evaluation & Management",
                  "url": CANONICAL_URL,
                  "mainEntityOfPage": CANONICAL_URL,
                  "description": "Skin allergy diagnosis and treatment in Dubai at RamaCare Polyclinic offers thorough clinical assessment and tailored management plans for allergic skin reactions, including contact dermatitis, eczema, urticaria, and other related conditions.",
                  "procedureType": "Allergy assessment and dermatologic management",
                  "howPerformed": "Assessment begins with detailed clinical history and physical examination, may include diagnostic allergy testing (patch tests, blood testing), and individualized treatment using topical agents, antihistamines, moisturizers, and avoidance strategies.",
                  "preparation": "Patients should compile a list of known or suspected triggers, previous treatments, skincare products used, and any medication history prior to consultation.",
                  "followup": "Regular follow-up is recommended to monitor treatment response, adjust medications, and provide education on trigger avoidance and skin care.",
                  "indication": [
                    "Contact dermatitis",
                    "Eczema (atopic dermatitis)",
                    "Urticaria (hives)",
                    "Itchy skin reactions",
                    "Allergic rash and irritation"
                  ],
                  "reviewedBy": {
                    "@type": "Person",
                    "name": "Dr. Sahar Zomorrodi",
                    "jobTitle": "General Practitioner, MD",
                    "url": "https://ramacarepolyclinic.ae/doctors/dr-sahar-zomorrodi-general-practitioner-dubai/"
                  },
                  "provider": {
                    "@type": "MedicalClinic",
                    "name": "RamaCare Polyclinic",
                    "url": "https://ramacarepolyclinic.ae/",
                    "image": "https://ramacarepolyclinic.ae/images/skin-allergy.jpg",
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
      <ServiceExtrasSection aftercareContent={content?.aftercareContent} whyChooseContent={content?.whyChooseContent} />
      <SkinTreatmentAdditionalContent content={content} />
      <PatientTestimonials content={content?.testimonials} />
      <DoctorsSection content={content?.doctors} />
    
      <PaymentInsurance content={content?.paymentInsurance} />
      <ContentReviewBadge 
        doctorName="Dr. Sahar Zomorrodi" 
        pageSlug="skin-allergy-dubai" 
        customStatement="This skin allergy and medical dermatology guide has been clinically reviewed for diagnostic accuracy, allergy management protocols, and patient safety by Dr. Sahar Zomorrodi."
      />
      <FAQSection content={content?.faq} />
      <BookConsultation content={content?.bookConsultation} />
    </Layout>
  );
}
