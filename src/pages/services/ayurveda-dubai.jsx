import Layout from "../../../components/Layout";
import Head from "next/head";
import Link from "next/link";
import HeroSection from "../../../components/HeroSection";
import AyurvedaInfoSection from "../../../components/AyurvedaInfoSection";
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

export default function AyurvedaCategoryPage() {
  const content = getCategoryContent('ayurveda');

  const ayurvedaSEOContent = [
    "RamaCare Polyclinic's Ayurveda department offers doctor-led Ayurvedic care in Jumeirah 1, Dubai. Every patient is first assessed by Dr. Shamna Keloth Meethal (BAMS), and therapies are given by Kerala-trained, DHA-licensed therapists: a male therapist for men and a female therapist for women.",
    <>
      Read more about{" "}
      <Link href="/services/abhyanga-massage-dubai/" className="text-[#007474] hover:underline font-medium">
        therapeutic Kerala massage
      </Link>
      ,{" "}
      <Link href="/services/panchakarma-treatment-dubai/" className="text-[#007474] hover:underline font-medium">
        Panchakarma
      </Link>
      ,{" "}
      <Link href="/services/kizhi-therapy-dubai/" className="text-[#007474] hover:underline font-medium">
        Kizhi therapy
      </Link>{" "}
      and our{" "}
      <Link href="/services/ayurvedic-clinic-in-jumeirah/" className="text-[#007474] hover:underline font-medium">
        Jumeirah clinic
      </Link>
      .
    </>
  ];

const ayurvedaSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://ramacarepolyclinic.ae/services/ayurveda-dubai/#webpage",
      "url": "https://ramacarepolyclinic.ae/services/ayurveda-dubai/",
      "name": "Ayurvedic Clinic in Dubai, Jumeirah 1 | Ayurveda Treatment",
      "inLanguage": "en-AE",
      "about": { "@id": "https://ramacarepolyclinic.ae/#clinic" },
      "specialty": "https://schema.org/Ayurvedic",
      "reviewedBy": { "@id": "https://ramacarepolyclinic.ae/doctors/dr-shamna-keloth-meethal-ayurveda-doctor-dubai/#physician" },
      "lastReviewed": "YYYY-MM-DD",
      "breadcrumb": { "@id": "https://ramacarepolyclinic.ae/services/ayurveda-dubai/#breadcrumb" }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://ramacarepolyclinic.ae/services/ayurveda-dubai/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ramacarepolyclinic.ae/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://ramacarepolyclinic.ae/services/" },
        { "@type": "ListItem", "position": 3, "name": "Ayurveda", "item": "https://ramacarepolyclinic.ae/services/ayurveda-dubai/" }
      ]
    },
    {
      "@type": ["MedicalClinic", "LocalBusiness"],
      "@id": "https://ramacarepolyclinic.ae/#clinic",
      "name": "RamaCare Polyclinic",
      "legalName": "Rama Care Polyclinic LLC",
      "url": "https://ramacarepolyclinic.ae/",
      "telephone": "+971566597878",
      "contactPoint": [{ "@type": "ContactPoint", "telephone": "+97142862006", "contactType": "customer service", "availableLanguage": ["en", "ar", "hi", "ml", "tl"] }],
      "email": "query@ramacarepolyclinic.com",
      "image": "https://ramacarepolyclinic.ae/images/ayurveda-therapy-room-jumeirah-1.jpg",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "12 Al Dhiyafah Road, Jumeirah Terrace Building, Ground Floor",
        "addressLocality": "Jumeirah 1, Dubai",
        "addressRegion": "Dubai",
        "addressCountry": "AE"
      },
      "geo": { "@type": "GeoCoordinates", "latitude": 25.2395, "longitude": 55.2705 },
      "hasMap": "https://maps.google.com/maps?cid=4290863257518002596",
      "openingHoursSpecification": [{
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "10:00", "closes": "22:00"
      }],
      "areaServed": ["Jumeirah 1", "Jumeirah 2", "Al Satwa", "Al Wasl", "City Walk", "Palm Jumeirah", "Emirates Hills", "Al Karama", "Bur Dubai", "Dubai"],
      "knowsLanguage": ["en", "ar", "hi", "ml", "tl"],
      "identifier": { "@type": "PropertyValue", "propertyID": "DHA Facility Licence", "value": "2036418" },
      "isAcceptingNewPatients": true,
      "medicalSpecialty": ["https://schema.org/Ayurvedic", "https://schema.org/Physiotherapy", "https://schema.org/Dermatology", "https://schema.org/Dentistry"],
      "sameAs": [
        "https://maps.google.com/maps?cid=4290863257518002596",
        "https://www.facebook.com/RamaCarePolyClinic/",
        "https://www.instagram.com/ramacarepolyclinic/",
        "https://www.linkedin.com/company/ramacarepolyclinics/",
        "https://www.youtube.com/@ramacarepolyclinic"
      ],
      "availableService": [
        { "@type": "MedicalProcedure", "name": "Ayurvedic consultation and Prakriti assessment" },
        { "@type": "MedicalTherapy", "name": "Panchakarma", "url": "https://ramacarepolyclinic.ae/services/panchakarma-treatment-dubai/" },
        { "@type": "MedicalTherapy", "name": "Therapeutic Kerala massage (Abhyanga)", "url": "https://ramacarepolyclinic.ae/services/abhyanga-massage-dubai/" },
        { "@type": "MedicalTherapy", "name": "Kizhi (herbal bolus) therapy", "url": "https://ramacarepolyclinic.ae/services/kizhi-therapy-dubai/" },
        { "@type": "MedicalTherapy", "name": "Shirodhara", "url": "https://ramacarepolyclinic.ae/services/shirodhara-therapy-in-dubai/" },
        { "@type": "MedicalTherapy", "name": "Nasya", "url": "https://ramacarepolyclinic.ae/services/nasya-therapy-dubai/" },
        { "@type": "MedicalTherapy", "name": "Basti", "url": "https://ramacarepolyclinic.ae/services/basti-therapy-dubai/" },
        { "@type": "MedicalTherapy", "name": "Pizhichil" },
        { "@type": "MedicalTherapy", "name": "Udwarthanam" }
      ]
    },
    {
      "@type": "Physician",
      "@id": "https://ramacarepolyclinic.ae/doctors/dr-shamna-keloth-meethal-ayurveda-doctor-dubai/#physician",
      "name": "Dr. Shamna Keloth Meethal",
      "url": "https://ramacarepolyclinic.ae/doctors/dr-shamna-keloth-meethal-ayurveda-doctor-dubai/",
      "medicalSpecialty": "https://schema.org/Ayurvedic",
      "knowsLanguage": ["en", "ml", "hi"],
      "hasCredential": { "@type": "EducationalOccupationalCredential", "credentialCategory": "degree", "name": "BAMS (Bachelor of Ayurvedic Medicine and Surgery)" },
      "worksFor": { "@id": "https://ramacarepolyclinic.ae/#clinic" }
    },
    {
      "@type": "Person",
      "name": "Syamkumar Sasidharan",
      "jobTitle": "Ayurveda Panchakarma Therapist",
      "knowsLanguage": ["en", "ml", "hi"],
      "hasCredential": { "@type": "EducationalOccupationalCredential", "credentialCategory": "diploma", "name": "Diploma in Ayurveda Panchakarma Therapy" },
      "url": "https://ramacarepolyclinic.ae/doctors/syamkumar-sasidharan-ayurveda-panchakarma-therapist-dubai/",
      "worksFor": { "@id": "https://ramacarepolyclinic.ae/#clinic" }
    },
    {
      "@type": "Person",
      "name": "Mariya Thayyil Muhammed",
      "jobTitle": "Ayurveda Therapist",
      "knowsLanguage": ["en", "ml", "hi"],
      "url": "https://ramacarepolyclinic.ae/doctors/mariya-thayyil-muhammed-ayurveda-therapist-dubai/",
      "worksFor": { "@id": "https://ramacarepolyclinic.ae/#clinic" }
    }
  ]
};
  const faqSchema = content?.faq?.faqs?.length
    ? {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": content.faq.faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.question.trim(),
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer.trim()
        }
      }))
    }
    : null;

  return (
    <Layout>
      <Head>
       <title key="title">Ayurvedic Clinic in Dubai, Jumeirah 1 | Ayurveda Treatment</title>
        <meta
          name="description"
          content="DHA-licensed Ayurvedic clinic in Jumeirah 1, Dubai. BAMS doctor, Kerala-trained therapists, Panchakarma, Abhyanga and Kizhi. Open daily 10am–10pm."
          key="description"
        />
        <meta name="robots" content="index, follow" key="robots" />
        <link rel="canonical" href="https://ramacarepolyclinic.ae/services/ayurveda-dubai/" key="canonical" />

        {/* Open Graph Tags */}
        <meta property="og:type" content="website" key="og:type" />
        <meta property="og:title" content="Ayurvedic Clinic in Dubai, Jumeirah 1 | Ayurveda Treatment" key="og:title" />
        <meta
          property="og:description"
         content="DHA-licensed Ayurvedic clinic in Jumeirah 1, Dubai. BAMS doctor, Kerala-trained therapists, Panchakarma, Abhyanga and Kizhi. Open daily 10am–10pm."
          key="og:description"
        />
        <meta property="og:url" content="https://ramacarepolyclinic.ae/services/ayurveda-dubai/" key="og:url" />
        <meta property="og:image" content="https://ramacarepolyclinic.ae/images/ayurveda-therapy-room-jumeirah-1.jpg" key="og:image" />
        <meta property="og:image:width" content="1200" key="og:image:width" />
        <meta property="og:image:height" content="630" key="og:image:height" />
        <meta property="og:site_name" content="RamaCare Polyclinic" key="og:site_name" />
        <meta property="og:locale" content="en_AE" key="og:locale" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content="Ayurvedic Clinic in Dubai, Jumeirah 1 | Ayurveda Treatment" key="twitter:title" />
        <meta
          name="twitter:description"
          content="DHA-licensed Ayurvedic clinic in Jumeirah 1, Dubai. BAMS doctor, Kerala-trained therapists, Panchakarma, Abhyanga and Kizhi. Open daily 10am–10pm."
          key="twitter:description"
        />
        <meta name="twitter:image" content="https://ramacarepolyclinic.ae/images/ayurveda-therapy-room-jumeirah-1.jpg" key="twitter:image" />

        {/* Structured Data Schemas */}
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(ayurvedaSchema) }}
          />
          {faqSchema && (
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
          )}
      </Head>

      <HeroSection content={content?.hero} />
      <AboutAyurvedaSection content={content?.about} />            {/* answer-first paragraph */}
      <AyurvedaInfoSection content={content?.atAGlance} />          {/* NEW */}
      <ExpertsSection content={content?.experts} />  
      <TreatmentSection
        category="ayurveda"
        content={{
          ...content?.treatments,
          consultationHeading: content?.treatments?.consultationCTA?.heading,
          consultationSubtext: content?.treatments?.consultationCTA?.subtext,
          consultationButtonText: content?.treatments?.consultationCTA?.buttonText,
          consultationBgColor: content?.treatments?.consultationCTA?.backgroundColor,
          consultationButtonColor: content?.treatments?.consultationCTA?.buttonColor
        }}
      />
      <AyurvedaInfoSection content={content?.conditions} />         {/* NEW */}
      <WhyChooseUsSection content={content?.whyChooseUs} />         {/* now "Ayurveda inside a polyclinic" */}
      <ProgramsSection content={content?.programs} />
      <AyurvedaInfoSection content={content?.firstVisit} />         {/* NEW */}
      <AyurvedaInfoSection content={content?.cost} />               {/* NEW */}
      <AyurvedaInfoSection content={content?.chooseClinic} />       {/* NEW */}
      <WhyAyurvedaDubaiSection content={content?.whyDubai} />
      <PatientTestimonials content={content?.successStories} />
      <ContentReviewBadge doctorName="Dr. Shamna Keloth Meethal" pageSlug="ayurveda-dubai" lastReviewed="2026-01-12" />
      <FAQSection content={content?.faq} />
      <AyurvedaInfoSection content={content?.gettingHere} />        {/* NEW */}
      <BeginYourHealingJourneySection content={content?.booking} />
      <SEOContentSection title="Ayurveda at RamaCare, Jumeirah 1" content={ayurvedaSEOContent} />
    </Layout>
  );
}
