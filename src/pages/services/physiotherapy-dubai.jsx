import Layout from "../../../components/Layout";
import ContentReviewBadge from "../../../components/ContentReviewBadge";
import Head from "next/head";
import Link from "next/link";
import HeroSection from "../../../components/HeroSection";
import WhyChooseUsSection from "../../../components/WhyChooseUsSection";
import AboutAyurvedaSection from "../../../components/AboutAyurvedaSection";
import TreatmentSection from "../../../components/TreatmentSection";
import PhysioServicesList from "../../../components/PhysioServicesList";
import ProgramsSection from "../../../components/ProgramsSection";
import ExpertsSection from "../../../components/ExpertsSection";
import PatientTestimonials from "../../../components/PatientTestimonials";
import WhyAyurvedaDubaiSection from "../../../components/WhyAyurvedaDubaiSection";
import FAQSection from "../../../components/FAQSection";
import BeginYourHealingJourneySection from "../../../components/BeginYourHealingJourneySection";
import SEOContentSection from "../../../components/SEOContentSection";
import { getCategoryContent } from "../../data/categoryContent";
import { GOOGLE_MAPS_URL } from "../../data/clinicStats";
import { getGoogleRating } from "../../../lib/googleRating";

const SITE = "https://ramacarepolyclinic.ae";
const PAGE = `${SITE}/services/physiotherapy-dubai/`;
const PAGE_TITLE = "Physiotherapy Clinic in Jumeirah 1, Dubai | RamaCare";
const PAGE_DESCRIPTION = "DHA-licensed physiotherapy in Jumeirah 1, Dubai: back, neck, sports and stroke rehab, dry needling and shockwave. Open daily 10am–10pm, same-day slots.";
const JEENA_ID = `${SITE}/doctors/jeena-mathew-physiotherapist-dubai/#person`;

export default function physiotherapydubaiCategoryPage({ googleRating }) {
  const content = getCategoryContent('physiotherapy');

  // ----- Live Google rating (refreshed daily, see getStaticProps) -----
  const ratingLabel = googleRating.rating.toFixed(1);
  const reviewCount = googleRating.count;

  const heroStats = [
    { number: '7', label: 'Days a week, 10am–10pm' },
    { number: '5', label: 'Departments under one roof' },
    { number: ratingLabel, label: `Google rating · ${reviewCount} reviews` },
    { number: 'DHA', label: 'Licensed facility' }
  ];
  const aboutStats = [
    { number: '7', label: 'Days a week' },
    { number: '5', label: 'Departments' },
    { number: ratingLabel, label: 'Google rating' }
  ];
  const testimonialStats = [
    { id: 1, number: `${ratingLabel}/5`, label1: 'Average Rating', label2: 'Google Reviews', target: googleRating.rating, showStars: true },
    { id: 2, number: `${reviewCount}`, label1: 'Google Reviews', label2: 'RamaCare Polyclinic', target: reviewCount },
    { id: 3, number: '5', label1: 'Departments', label2: 'Under one roof', target: 5 },
    { id: 4, number: '7', label1: 'Days a week', label2: 'Open 10am–10pm', target: 7 }
  ];

  // ----- Bottom local text block -----
  const linkClass = "text-[#007474] hover:underline font-medium";
  const physioSEOContent = [
    { type: 'heading', text: 'Physiotherapy at RamaCare: quick facts' },
    {
      type: 'list',
      items: [
        'Address: Ground floor, Jumeirah Terrace Building, 12 Al Dhiyafah Road, Jumeirah 1, Dubai (near Al Satwa)',
        'Opening hours: every day, 10am to 10pm, including weekends',
        'Appointments: same-day when slots are free; walk-ins welcome',
        'Physiotherapist: Jeena Mathew, BPT, MPT, DHA-licensed, 8+ years of experience',
        'Insurance: pay at the clinic and claim back from your insurer (reimbursement, no direct billing)',
        'Referral: not needed to book; our GP in the same clinic can review you if your insurer asks for one',
        'Price: physiotherapy assessment from AED 200',
        'Clinic team languages: English, Arabic, Hindi, Malayalam and Tagalog',
        'Parking: free and paid parking nearby',
        'Licence: DHA facility licence 2036418',
        'Book: call 04 286 2006 or WhatsApp 056 659 7878'
      ]
    },
    "RamaCare Polyclinic provides physiotherapy on the ground floor of Jumeirah Terrace Building, 12 Al Dhiyafah Road, Jumeirah 1, Dubai. The clinic is a short drive from Al Satwa, Al Hudaiba, Al Bada’a and Jumeirah 2, with free and paid parking nearby.",
    "Physiotherapy is available every day from 10am to 10pm, with same-day appointments when slots are free. Walk-ins are welcome. Treatment is planned after an individual assessment and may include manual therapy, exercise rehabilitation, dry needling, shockwave, electrotherapy, kinesio taping or cupping.",
    <>
      Insurance is by reimbursement: you pay at the clinic and claim from your insurer. Before your first session, read{" "}
      <Link href="/services/physiotherapy-insurance-dubai/" className={linkClass}>physiotherapy insurance in Dubai</Link>{" "}
      and{" "}
      <Link href="/services/physiotherapy-cost-dubai/" className={linkClass}>physiotherapy cost in Dubai</Link>.
    </>,
    <>
      If you need a medical review or referral, our{" "}
      <Link href="/services/general-physician-dubai/" className={linkClass}>general physician in Jumeirah 1</Link>{" "}
      works in the same building. For back pain, some patients compare or combine approaches: see{" "}
      <Link href="/services/ayurveda-vs-physiotherapy-for-back-pain-dubai/" className={linkClass}>Ayurveda vs physiotherapy for back pain</Link>.
    </>,
    <>
      Prefer an Ayurvedic massage? See{" "}
      <Link href="/services/abhyanga-massage-dubai/" className={linkClass}>Kerala Ayurvedic massage in Dubai</Link>.
    </>,
    <>
      <span lang="ar" dir="rtl" className="block text-right">
        تقدّم راما كير بوليكلينك خدمات العلاج الطبيعي في جميرا 1، دبي، في 12 شارع الضيافة. العيادة مفتوحة يومياً من 10 صباحاً حتى 10 مساءً، مع مواعيد متاحة في نفس اليوم.
      </span>
    </>
  ];

  // ----- Schema -----
  const faqsForSchema = (content?.faq?.faqs || []).map(faq => ({
    question: faq.question,
    answer: faq.answer
  }));

  const service = (name, path) => ({
    "@type": "PhysicalTherapy",
    name,
    ...(path ? { url: `${SITE}${path}` } : {})
  });

  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": `${PAGE}#webpage`,
        url: PAGE,
        name: PAGE_TITLE,
        description: PAGE_DESCRIPTION,
        inLanguage: "en",
        isPartOf: { "@id": `${SITE}/#website` },
        about: { "@id": `${PAGE}#physiotherapy` },
        mainEntity: { "@id": `${PAGE}#physiotherapy` },
        breadcrumb: { "@id": `${PAGE}#breadcrumb` },
        specialty: "https://schema.org/Physiotherapy",
        reviewedBy: { "@id": JEENA_ID },
        lastReviewed: "2026-10-15" // change to the deploy date
      },
      {
        "@type": ["Physiotherapy", "MedicalClinic"],
        "@id": `${PAGE}#physiotherapy`,
        name: "RamaCare Polyclinic – Physiotherapy",
        url: PAGE,
        image: `${SITE}/images/phy3.jpg`,
        description: PAGE_DESCRIPTION,
        parentOrganization: { "@id": `${SITE}/#clinic` },
        medicalSpecialty: "https://schema.org/Physiotherapy",
        identifier: { "@type": "PropertyValue", propertyID: "DHA Facility Licence", value: "2036418" },
        telephone: "+97142862006",
        contactPoint: [{
          "@type": "ContactPoint",
          contactType: "appointments",
          telephone: "+97142862006",
          availableLanguage: ["English", "Arabic", "Hindi", "Malayalam", "Tagalog"]
        }, {
          "@type": "ContactPoint",
          contactType: "appointments (WhatsApp)",
          telephone: "+971566597878",
          url: "https://wa.me/971566597878",
          availableLanguage: ["English", "Arabic", "Hindi", "Malayalam", "Tagalog"]
        }],
        address: {
          "@type": "PostalAddress",
          streetAddress: "12 Al Dhiyafah Road, Jumeirah Terrace Building, Ground Floor",
          addressLocality: "Jumeirah 1",
          addressRegion: "Dubai",
          addressCountry: "AE"
        },
        geo: { "@type": "GeoCoordinates", latitude: 25.2395, longitude: 55.2705 },
        hasMap: GOOGLE_MAPS_URL,
        openingHoursSpecification: [{
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "10:00",
          closes: "22:00"
        }],
        areaServed: [
          { "@type": "Place", name: "Jumeirah 1, Dubai" },
          { "@type": "Place", name: "Al Satwa, Dubai" },
          { "@type": "Place", name: "Al Hudaiba, Dubai" },
          { "@type": "Place", name: "Al Bada'a, Dubai" },
          { "@type": "Place", name: "Jumeirah 2, Dubai" },
          { "@type": "City", name: "Dubai" }
        ],
        employee: { "@id": JEENA_ID },
        availableService: [
          service("Physiotherapy assessment"),
          service("Back pain physiotherapy", "/services/back-pain-treatment-dubai/"),
          service("Sciatica physiotherapy", "/services/sciatica-treatment-dubai/"),
          service("Slipped disc physiotherapy", "/services/slip-disc-treatment-dubai/"),
          service("Neck pain physiotherapy", "/services/neck-pain-treatment-dubai/"),
          service("Cervical spondylosis physiotherapy", "/services/cervical-spondylosis-treatment-dubai/"),
          service("Shoulder pain physiotherapy", "/services/shoulder-pain-treatment-dubai/"),
          service("Frozen shoulder physiotherapy", "/services/frozen-shoulder-treatment-dubai/"),
          service("Knee pain physiotherapy", "/services/knee-pain-treatment-dubai/"),
          service("Joint pain physiotherapy", "/services/joint-pain-treatment-dubai/"),
          service("Plantar fasciitis physiotherapy", "/services/plantar-fasciitis-treatment-dubai/"),
          service("Sports injury rehabilitation", "/services/sports-injury-rehabilitation-dubai/"),
          service("Post-surgery rehabilitation", "/services/post-surgery-rehabilitation-dubai/"),
          service("Dry needling", "/services/dry-needling-dubai/"),
          service("Ultrasound therapy", "/services/ultrasound-therapy-dubai/"),
          service("Electrotherapy", "/services/electrotherapy-dubai/"),
          service("Pelvic floor physiotherapy", "/services/pelvic-floor-therapy-dubai/"),
          service("Scoliosis physiotherapy", "/services/scoliosis-treatment-in-dubai/"),
          service("Functional exercise therapy", "/services/functional-exercises-dubai/"),
          service("Neurological and stroke rehabilitation"),
          service("Paediatric physiotherapy"),
          service("Manual therapy"),
          service("Shockwave therapy"),
          service("Kinesio taping"),
          service("Cupping therapy"),
          service("TMJ physiotherapy")
        ]
      },
      {
        "@type": "Person",
        "@id": JEENA_ID,
        name: "Jeena Mathew",
        jobTitle: "DHA-Licensed Physiotherapist",
         knowsLanguage: ['English', 'Hindi', 'Malayalam'],
        url: `${SITE}/doctors/jeena-mathew-physiotherapist-dubai/`,
        worksFor: { "@id": `${SITE}/#clinic` },
        hasCredential: [
          { "@type": "EducationalOccupationalCredential", credentialCategory: "Bachelor of Physiotherapy (BPT)" },
          { "@type": "EducationalOccupationalCredential", credentialCategory: "Master of Physiotherapy (MPT)" }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${PAGE}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
          { "@type": "ListItem", position: 2, name: "Services", item: `${SITE}/services/` },
          { "@type": "ListItem", position: 3, name: "Physiotherapy in Jumeirah 1", item: PAGE }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": `${PAGE}#faq`,
        mainEntity: faqsForSchema.map(faq => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer }
        }))
      }
    ]
  };

  return (
    <Layout>
      <Head>
        <title key="title">{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_DESCRIPTION} key="description" />
        <meta name="robots" content="index, follow" key="robots" />
        <link rel="canonical" href={PAGE} key="canonical" />

        {/* Open Graph Tags */}
        <meta property="og:type" content="website" key="og:type" />
        <meta property="og:title" content={PAGE_TITLE} key="og:title" />
        <meta property="og:description" content={PAGE_DESCRIPTION} key="og:description" />
        <meta property="og:url" content={PAGE} key="og:url" />
        <meta property="og:image" content={`${SITE}/images/phy3.jpg`} key="og:image" />
        <meta property="og:image:width" content="1200" key="og:image:width" />
        <meta property="og:image:height" content="630" key="og:image:height" />
        <meta property="og:site_name" content="RamaCare Polyclinic" key="og:site_name" />
        <meta property="og:locale" content="en_AE" key="og:locale" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content={PAGE_TITLE} key="twitter:title" />
        <meta name="twitter:description" content={PAGE_DESCRIPTION} key="twitter:description" />
        <meta name="twitter:image" content={`${SITE}/images/phy3.jpg`} key="twitter:image" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
        />
      </Head>
      <HeroSection content={{ ...content?.hero, stats: heroStats, ratingLabel, disableBreadcrumbSchema: true }} />
      <WhyChooseUsSection content={content?.whyChooseUs} />
      <AboutAyurvedaSection content={{ ...content?.about, stats: aboutStats }} />
      <TreatmentSection
        category="physiotherapy"
        content={{
          ...content?.treatments,
          consultationHeading: content?.treatments?.consultationCTA?.heading,
          consultationSubtext: content?.treatments?.consultationCTA?.subtext,
        }}
      />
      <PhysioServicesList content={content?.moreServices} />
      <ProgramsSection content={content?.programs} />
      <ExpertsSection content={content?.experts} />
      <PatientTestimonials content={{ ...content?.successStories, stats: testimonialStats }} />
      <WhyAyurvedaDubaiSection content={content?.whyDubai} />
      <FAQSection content={content?.faq} />
      <BeginYourHealingJourneySection content={content?.booking} />
      <ContentReviewBadge
        doctorName="Jeena Mathew"
        doctorRole="DHA Licensed Physiotherapist"
        doctorCredentials="BPT, MPT (Physiotherapy) · DHA Licensed Physiotherapist"
        pageSlug="physiotherapy-dubai"
        customStatement="This page has been reviewed for general physiotherapy and rehabilitation information. Individual treatment recommendations depend on a patient’s symptoms, medical history, physical assessment and rehabilitation goals."
      />
      <SEOContentSection title="Physiotherapy in Jumeirah 1, Dubai" content={physioSEOContent} />
    </Layout>
  );
}

// Fetches the live Google rating at build time and refreshes it once a day.
export async function getStaticProps() {
  const googleRating = await getGoogleRating();
  return { props: { googleRating }, revalidate: 86400 };
}