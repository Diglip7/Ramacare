import Layout from "../../../components/Layout";
import Head from "next/head";
import HeroSection from "../../../components/HeroSection";
import WhyChooseUsSection from "../../../components/WhyChooseUsSection";
import AboutAyurvedaSection from "../../../components/AboutAyurvedaSection";
import TreatmentSection from "../../../components/TreatmentSection";
import ProgramsSection from "../../../components/ProgramsSection";
import ExpertsSection from "../../../components/ExpertsSection";
import PatientTestimonials from "../../../components/PatientTestimonials";
import WhyAyurvedaDubaiSection from "../../../components/WhyAyurvedaDubaiSection";
import FAQSection from "../../../components/FAQSection";
// import OurFacilitySection from "../../../components/OurFacilitySection";
import BeginYourHealingJourneySection from "../../../components/BeginYourHealingJourneySection";
import SEOContentSection from "../../../components/SEOContentSection";
import ContentReviewBadge from "../../../components/ContentReviewBadge";
import { getCategoryContent } from "../../data/categoryContent";

export default function AestheticDermatologyCategoryPage() {
  const content = getCategoryContent('aesthetic-dermatology');
  const dermatologySEOContent = [
    "RamaCare Polyclinic is your destination for advanced aesthetic dermatology in Dubai. Our clinic specializes in helping patients achieve healthy, radiant skin through a combination of medical expertise and innovative cosmetic treatments. Our DHA-licensed dermatologists are experts in managing a wide range of skin concerns, from acne and pigmentation to anti-aging and rejuvenation.",
    {
      type: "heading",
      text: "Advanced Skin & Hair Treatments in Jumeirah 1"
    },
    "We offer a comprehensive suite of treatments designed to enhance your natural beauty and boost your confidence. Each procedure is performed in our modern facility using the latest technology and safety standards.",
    {
      type: "list",
      items: [
        "Laser Hair Removal: Long-lasting results for smooth, hair-free skin.",
        "Facial Rejuvenation: Personalized facials and peels for a glowing complexion.",
        "PRP Therapy: Using your body's natural healing power for skin and hair restoration.",
        "Injectables & Fillers: Expertly administered treatments for youthful contours.",
        "Medical Dermatology: Professional management of skin conditions like eczema and psoriasis."
      ]
    },
    "At RamaCare, we understand that every skin type is different. That's why we start every journey with a detailed skin analysis and consultation. Our team will create a personalized care plan that addresses your specific needs and ensures safe, effective results. Experience the best in dermatology care in Dubai at RamaCare Polyclinic."
  ];

  return (
    <Layout>
      <Head>
        <title key="title">Aesthetic Dermatology in Dubai | RamaCare Polyclinic</title>
        <meta name="description" content="Advanced aesthetic dermatology in Dubai — laser treatments, PRP therapy, hair restoration & body contouring by DHA-licensed specialists. Book your consultation today." key="description" />
        <meta name="keywords" content="Aesthetic Dermatology Dubai, Skin Treatment Dubai, Clear skin treatment Dubai, Healthy skin Dubai, Dermatology clinic Dubai, Acne treatment Dubai, Anti-aging skin care Dubai, Skin rejuvenation Dubai, Laser skin treatment Dubai, Pigmentation treatment Dubai, Medical skin clinic Dubai, Personalized skin care Dubai, DHA licensed dermatology clinic" />

        {/* Open Graph & Twitter Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Aesthetic Dermatology in Dubai | RamaCare Polyclinic" />
        <meta property="og:description" content="Advanced aesthetic dermatology in Dubai — laser treatments, PRP therapy, hair restoration & body contouring by DHA-licensed specialists. Book your consultation today." />
        <meta property="og:url" content="https://ramacarepolyclinic.ae/services/aesthetic-dermatology-dubai/" />
        <meta property="og:image" content="https://ramacarepolyclinic.ae/images/aesth.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="RamaCare Polyclinic" />
        <meta property="og:locale" content="en_AE" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Aesthetic Dermatology in Dubai | RamaCare Polyclinic" />
        <meta name="twitter:description" content="Advanced aesthetic dermatology in Dubai — laser treatments, PRP therapy, hair restoration & body contouring by DHA-licensed specialists." />
        <meta name="twitter:image" content="https://ramacarepolyclinic.ae/images/aesth.jpg" />

        {/* BreadcrumbList Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
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
                  "item": "https://ramacarepolyclinic.ae/services/aesthetic-dermatology-dubai/"
                }
              ]
            })
          }}
        />

        {/* MedicalProcedure Service Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalProcedure",
              "name": "Aesthetic Dermatology",
              "description": "Advanced aesthetic dermatology services in Dubai including laser treatments, PRP therapy, hair restoration, injectables, and body contouring by DHA-licensed dermatologists.",
              "provider": {
                "@type": "MedicalClinic",
                "name": "RamaCare Polyclinic",
                "url": "https://ramacarepolyclinic.ae/",
                "telephone": "+971566597878",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "12 Al Dhiyafah Rd, Jumeirah Terrace Building, Ground Floor",
                  "addressLocality": "Jumeirah 1, Dubai",
                  "addressCountry": "AE"
                }
              },
              "areaServed": {
                "@type": "City",
                "name": "Dubai"
              }
            })
          }}
        />

        {/* FAQPage Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is aesthetic dermatology?",
                  "acceptedAnswer": { "@type": "Answer", "text": "Aesthetic dermatology focuses on improving skin, hair, and body appearance using medically approved treatments like lasers, injectables, and facials while maintaining long-term skin health and safety." }
                },
                {
                  "@type": "Question",
                  "name": "Why choose aesthetic dermatology in Dubai?",
                  "acceptedAnswer": { "@type": "Answer", "text": "Dubai offers advanced technology, DHA-licensed dermatologists, and international treatment standards, making aesthetic dermatology in Dubai safe, effective, and trusted for visible, natural-looking results." }
                },
                {
                  "@type": "Question",
                  "name": "Are aesthetic dermatology treatments safe?",
                  "acceptedAnswer": { "@type": "Answer", "text": "Yes, when performed by DHA-licensed dermatologists using evidence-based procedures, aesthetic dermatology treatments are safe, minimally invasive, and customized to suit individual skin types and concerns." }
                },
                {
                  "@type": "Question",
                  "name": "Which skin problems can aesthetic dermatology treat?",
                  "acceptedAnswer": { "@type": "Answer", "text": "Aesthetic dermatology treats acne, scars, pigmentation, wrinkles, dull skin, uneven tone, and aging signs through advanced medical and cosmetic procedures tailored to each patient." }
                },
                {
                  "@type": "Question",
                  "name": "How long do aesthetic dermatology results last?",
                  "acceptedAnswer": { "@type": "Answer", "text": "Results depend on treatment type and lifestyle. Laser and injectables offer long-lasting benefits, while maintenance sessions and proper skincare help sustain healthy, youthful skin over time." }
                },
                {
                  "@type": "Question",
                  "name": "Is laser treatment suitable for all skin types?",
                  "acceptedAnswer": { "@type": "Answer", "text": "Yes, modern laser technology is designed for all skin tones. Dermatologists adjust settings after skin assessment to ensure safe, effective laser treatments with minimal risk." }
                },
                {
                  "@type": "Question",
                  "name": "What is the downtime after aesthetic treatments?",
                  "acceptedAnswer": { "@type": "Answer", "text": "Most aesthetic dermatology treatments involve little to no downtime. Mild redness or swelling may occur but usually resolves quickly, allowing return to daily activities." }
                },
                {
                  "@type": "Question",
                  "name": "Are aesthetic treatments painful?",
                  "acceptedAnswer": { "@type": "Answer", "text": "Most procedures are well-tolerated. Dermatologists use cooling systems or topical anesthesia to minimize discomfort and ensure a comfortable treatment experience." }
                },
                {
                  "@type": "Question",
                  "name": "Can aesthetic dermatology help with hair loss?",
                  "acceptedAnswer": { "@type": "Answer", "text": "Yes, treatments like PRP therapy, mesotherapy, and scalp treatments help reduce hair fall, improve scalp health, and stimulate natural hair regrowth safely." }
                },
                {
                  "@type": "Question",
                  "name": "At what age should aesthetic dermatology treatments start?",
                  "acceptedAnswer": { "@type": "Answer", "text": "Preventive aesthetic treatments can start in the mid-20s, while corrective procedures are suitable later, depending on skin condition, goals, and the dermatologist's recommendations." }
                },
                {
                  "@type": "Question",
                  "name": "Are aesthetic dermatology treatments permanent?",
                  "acceptedAnswer": { "@type": "Answer", "text": "Some treatments offer long-term improvement, but aging and lifestyle factors continue. Maintenance sessions and proper skincare help prolong results and maintain skin health." }
                },
                {
                  "@type": "Question",
                  "name": "How many sessions are required for laser hair removal?",
                  "acceptedAnswer": { "@type": "Answer", "text": "Typically, 6–8 laser hair removal sessions are recommended for optimal, long-lasting results, depending on hair type, skin tone, and treatment area." }
                },
                {
                  "@type": "Question",
                  "name": "Can multiple aesthetic treatments be combined?",
                  "acceptedAnswer": { "@type": "Answer", "text": "Yes, dermatologists often combine treatments like facials, lasers, and injectables for comprehensive results, ensuring safety and enhanced overall skin improvement." }
                },
                {
                  "@type": "Question",
                  "name": "Is aesthetic dermatology suitable for sensitive skin?",
                  "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. Treatments are customized after skin analysis, ensuring gentle, safe options for sensitive skin while minimizing irritation and maximizing results." }
                },
                {
                  "@type": "Question",
                  "name": "How do I choose the right aesthetic dermatology clinic in Dubai?",
                  "acceptedAnswer": { "@type": "Answer", "text": "Choose a clinic with DHA-licensed dermatologists, modern technology, transparent pricing, strong patient reviews, and personalized treatment plans focused on long-term skin health." }
                }
              ]
            })
          }}
        />
      </Head>

      <HeroSection content={content?.hero} />
      <WhyChooseUsSection content={content?.whyChooseUs} />
      <AboutAyurvedaSection content={content?.about} />
      <TreatmentSection 
        category="aesthetic-dermatology" 
        content={{
          ...content?.treatments,
          consultationHeading: content?.treatments?.consultationCTA?.heading,
          consultationSubtext: content?.treatments?.consultationCTA?.subtext,
          consultationButtonText: content?.treatments?.consultationCTA?.buttonText,
          consultationBgColor: content?.treatments?.consultationCTA?.backgroundColor,
          consultationButtonColor: content?.treatments?.consultationCTA?.buttonColor
        }} 
      />
      <ProgramsSection content={content?.programs} />
      <ExpertsSection content={content?.experts} />
      <PatientTestimonials content={content?.successStories} />
      <WhyAyurvedaDubaiSection content={content?.whyDubai} />
      <ContentReviewBadge doctorName="Sonita Sinaga" pageSlug="aesthetic-dermatology-dubai" />
      <FAQSection content={content?.faq} />
     {/* <OurFacilitySection content={content?.facility} /> */}
      <BeginYourHealingJourneySection content={content?.booking} />
      <SEOContentSection title="Aesthetic Dermatology Excellence in Dubai" content={dermatologySEOContent} />
    </Layout>
  );
}
