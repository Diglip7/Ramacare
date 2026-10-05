import Layout from "../../components/Layout";
import Head from "next/head";
import HeroSection from "../../components/HeroSection";
import WhyChooseUsSection from "../../components/WhyChooseUsSection";
import AboutAyurvedaSection from "../../components/AboutAyurvedaSection";
import TreatmentSection from "../../components/TreatmentSection";
// import ProgramsSection from "../../components/ProgramsSection";
import ExpertsSection from "../../components/ExpertsSection";
import PatientTestimonials from "../../components/PatientTestimonials";
import WhyAyurvedaDubaiSection from "../../components/WhyAyurvedaDubaiSection";
import FAQSection from "../../components/FAQSection";
// import OurFacilitySection from "../../components/OurFacilitySection";
import BeginYourHealingJourneySection from "../../components/BeginYourHealingJourneySection";
// import SEOContentSection from "../../components/SEOContentSection";


const PAGE_TITLE = "RamaCare Polyclinic Jumeirah 1 | Physio, Skin, Dental, Ayurveda";
const PAGE_DESCRIPTION = "DHA-licensed polyclinic on Al Dhiyafah Road, Jumeirah 1, near Al Satwa. GP, dental, physiotherapy, dermatology and Ayurveda. Open daily 10am to 10pm.";
const SITE = "https://ramacarepolyclinic.ae";
const LAST_REVIEWED = "2026-09-27"; // update whenever homepage facts are re-checked

// Current clinicians with profile pages (source: src/data/doctors.js)
const CLINICIANS = [
  { slug: "dr-sahar-zomorrodi-general-practitioner-dubai", name: "Dr. Sahar Zomorrodi", jobTitle: "General Practitioner", type: "Physician" },
  { slug: "dr-hirbod-gilandoust-dentist-dubai", name: "Dr. Hirbod Gilandoust", jobTitle: "Dentist", type: "Physician" },
  { slug: "dr-aparna-balakrishnan-cosmetic-dentist-dubai", name: "Dr. Aparna Balakrishnan", jobTitle: "General and Cosmetic Dentist", type: "Physician" },
  { slug: "dr-shamna-keloth-meethal-ayurveda-doctor-dubai", name: "Dr. Shamna Keloth Meethal", jobTitle: "Ayurveda Physician (BAMS)", type: "Physician" },
  { slug: "jeena-mathew-physiotherapist-dubai", name: "Jeena Mathew", jobTitle: "Physiotherapist", type: "Person" },
  { slug: "soumya-abraham-dha-licensed-nurse-dubai", name: "Soumya Abraham", jobTitle: "DHA-Licensed Nurse", type: "Person" },
  { slug: "syamkumar-sasidharan-ayurveda-panchakarma-therapist-dubai", name: "Syamkumar Sasidharan", jobTitle: "Ayurveda Panchakarma Therapist", type: "Person" },
  { slug: "mariya-thayyil-muhammed-ayurveda-therapist-dubai", name: "Mariya Thayyil Muhammed", jobTitle: "Ayurveda Therapist", type: "Person" },
  { slug: "nodainne-baves-guerrero-beauty-therapist-dubai", name: "Nodainne Baves Guerrero", jobTitle: "Beauty Therapist", type: "Person" },
  { slug: "sonita-sinaga-aesthetic-therapist-dubai", name: "Sonita Sinaga", jobTitle: "Aesthetic Therapist", type: "Person" }
];

// Single source for the homepage FAQ: rendered on the page AND used for FAQPage schema.
const HOME_FAQS = [
  {
    question: "Where is RamaCare Polyclinic?",
    answer: "RamaCare Polyclinic is at 12 Al Dhiyafah Road, Jumeirah Terrace Building, ground floor, Jumeirah 1, Dubai. The clinic is on Al Dhiyafah Road between Jumeirah 1 and Al Satwa. Both free and paid parking are available near the building."
  },
  {
    question: "What are the opening hours?",
    answer: "The clinic is open every day, including weekends, from 10am to 10pm. Public holiday hours are posted on our Google Business Profile."
  },
  {
    question: "Is RamaCare licensed by the Dubai Health Authority?",
    answer: "Yes. RamaCare Polyclinic holds DHA facility licence 2036418, and each doctor, dentist, physiotherapist, nurse and therapist holds an individual DHA licence for their role."
  },
  {
    question: "Which services are available under one roof?",
    answer: "General medicine, dentistry, physiotherapy, dermatology and aesthetic treatments, and Ayurveda. If a problem needs care the clinic does not provide, such as imaging or a hospital specialist, the doctor will refer you."
  },
  {
    question: "Do you accept insurance?",
    answer: "RamaCare works on a reimbursement basis. You pay at the clinic and we give you an itemised invoice and the medical report your insurer needs, so you can claim the eligible amount back under your policy."
  },
  {
    question: "Do I need a referral, and can I walk in?",
    answer: "No referral is needed to see the GP, dentist, dermatologist, physiotherapist or Ayurveda physician, and walk-ins are welcome, just as at a walk-in clinic. Booking ahead by phone or WhatsApp is the best way to avoid waiting. Some insurers ask for a doctor's referral before they reimburse physiotherapy, so check your policy first."
  },
  {
    question: "Does RamaCare treat emergencies?",
    answer: "No. RamaCare is an outpatient clinic. For chest pain, difficulty breathing, heavy bleeding, signs of stroke or a serious injury, call 998 or go to the nearest hospital emergency department."
  },
  {
    question: "How do I book an appointment?",
    answer: "Call 04 286 2006, send a WhatsApp message to 056 659 7878, or use the booking form on this page. Tell us which department you need and your preferred time."
  }
];
const heroContent = {
  badge: "DHA-licensed polyclinic, Jumeirah 1",
  titleLine1: "Polyclinic for GP, Dental, Physiotherapy,",
  titleHighlight: " Skin & Ayurveda",
  titleLine2: " in Jumeirah 1",
  subtitle: "RamaCare Polyclinic is a DHA-licensed clinic at 12 Al Dhiyafah Road, Jumeirah 1, close to Al Satwa. Five departments under one roof: general medicine, dentistry, physiotherapy, dermatology and aesthetics, and Ayurveda. Open every day, 10am to 10pm. Walk-ins welcome.",
  ctaText: "Book an appointment",
  stats: [
    { number: "7", label: "Days a week, 10am–10pm" },
    { number: "5", label: "Departments under one roof" },
    { number: "4.8", label: "Google rating" },
    { number: "DHA", label: "Licensed facility" }
  ],
  features: [
    "GP, dental, physiotherapy, dermatology and Ayurveda in one clinic",
    "DHA-licensed doctors, dentists and therapists",
    "Walk-ins welcome, or book by phone or WhatsApp",
    "12 Al Dhiyafah Road, Jumeirah 1"
  ],
  location: "12 Al Dhiyafah Road, Jumeirah 1",
  timing: "Open daily, 10am to 10pm",
  backgroundAlt: "RamaCare Polyclinic, Jumeirah 1, Dubai",
  whatsappMessage: "Hello, I would like to book an appointment at RamaCare Polyclinic."
};
const whyChooseContent = {
  badge: "Why patients choose RamaCare",
  title: "A clinic in Jumeirah 1 with five departments under one roof",
  description: "See a GP, dentist, dermatologist, physiotherapist or Ayurveda doctor at one address, open 10am to 10pm every day. Walk-ins are welcome, so RamaCare also works as a walk-in clinic, and our team speaks English, Arabic, Hindi, Malayalam and Tagalog. Not sure where to start? Book the GP, who can refer you to the right department.",
  cards: [
    { title: "General practitioner (GP)", description: "Many local families use our GP as their family doctor: for fevers, infections, minor injuries and wound stitching, routine check-ups and blood tests, and ongoing care for blood pressure, diabetes, cholesterol and thyroid problems." },
    { title: "Dental clinic", description: "Our dental clinic in Jumeirah 1 offers check-ups, scaling and polishing, fillings, root canal treatment, crowns and bridges, extractions, teeth whitening and veneers with DHA-licensed dentists." },
    { title: "Physiotherapy", description: "Assessment and treatment for back, neck, shoulder and knee pain, sports injuries and rehabilitation after surgery, using exercise therapy, manual therapy, dry needling and electrotherapy where suitable." },
    { title: "Dermatology and aesthetic clinic", description: "See a DHA-licensed dermatologist for acne, pigmentation, hair loss and other skin concerns. Aesthetic treatments include Botox and fillers, laser hair removal, HydraFacial, HIFU and RF microneedling, each offered after a skin consultation." },
    { title: "Ayurvedic clinic", description: "Consultation with a DHA-licensed Ayurveda physician, with therapies such as Abhyanga, Shirodhara and Panchakarma treatment planned after that consultation. Ayurveda is offered alongside, not instead of, medical care." },
    { title: "Insurance and payment", description: "RamaCare works on a reimbursement basis. You receive an itemised invoice and medical report to claim from your insurer. Card and mobile payments are accepted." }
  ]
};
const aboutContent = {
  badge: "About RamaCare Polyclinic",
  title: "A DHA-licensed polyclinic in Jumeirah 1",
  description: "RamaCare Polyclinic is licensed by the Dubai Health Authority (facility licence 2036418) and is operated by Rama Care Polyclinic LLC.",
  paragraphs: [
    "RamaCare Polyclinic is licensed by the Dubai Health Authority (facility licence 2036418) and is operated by Rama Care Polyclinic LLC. Every clinician holds a DHA licence for their own role, and each profile on this website lists their qualifications and experience.",
    "As a multispecialty medical centre, the clinic brings general medicine, dentistry, physiotherapy, dermatology and aesthetic treatments, and Ayurveda together at one address on Al Dhiyafah Road, Jumeirah 1. This means your GP, dentist or physiotherapist can refer you to a colleague down the corridor and share your history, with your consent.",
    "Treatment starts with an assessment. The clinician explains what they found, the options, and what each option involves before anything begins."
  ],
  stats: [
    { number: "7", label: "Days a week" },
    { number: "5", label: "Departments" },
    { number: "4.8", label: "Google rating" }
  ],
  ctaText: "Meet our clinicians",
  imageAlt: "RamaCare Polyclinic, Jumeirah Terrace Building, Jumeirah 1",
  overlayCard: {
    number: "7",
    smallText: "days a week",
    boldText: "Open 10am to 10pm in Jumeirah 1"
  }
};
const locationContent = {
  badge: "Visiting the clinic",
  title: "Finding RamaCare in Jumeirah 1",
  description: "RamaCare is on the ground floor of the Jumeirah Terrace Building, 12 Al Dhiyafah Road, Jumeirah 1.\n\nAl Dhiyafah Road runs between Jumeirah 1 and Al Satwa, so the clinic is a short drive for patients in Jumeirah 1, Al Satwa and nearby areas. Both free and paid parking are available near the building.\n\nThe clinic is open every day from 10am to 10pm. Walk-ins are welcome; to avoid waiting, call 04 286 2006 or WhatsApp 056 659 7878 before you come.",
  benefits: [
    { icon: "Activity", title: "Open 7 days", description: "10am to 10pm, including weekends." },
   { icon: "Sparkles", title: "Walk-ins welcome", description: "Or book ahead by phone, WhatsApp or online." },
    { icon: "Brain", title: "Parking", description: "Free and paid parking near the building." },
    { icon: "Droplets", title: "Insurance", description: "Reimbursement basis, with an itemised invoice and medical report for your claim." }
  ],
 imageAlt: "RamaCare Polyclinic, Jumeirah 1",
  ctaCard: {
    title: "Not an emergency service",
   description: "For chest pain, breathing difficulty, heavy bleeding or a serious injury, call 998 or go to the nearest hospital emergency department."
  },
  bottomSection: {
    title: "RamaCare Polyclinic, Jumeirah 1",
    description: "Ground Floor, Jumeirah Terrace Building, 12 Al Dhiyafah Road, Jumeirah 1, Dubai. Phone 04 286 2006. WhatsApp 056 659 7878. Email query@ramacarepolyclinic.com. Open daily 10am to 10pm. Information last reviewed: 27 September 2026."
 }
};
const treatmentsContent = {
  badge: "Our departments",
  heading: "Our medical services in Jumeirah 1",
  subtitle: "Choose a department to see what it treats, then book with the right clinician."
};
const faqContent = {
  title: "Frequently asked questions",
  description: "Location, hours, licensing, insurance and booking at RamaCare Polyclinic in Jumeirah 1.",
  faqs: HOME_FAQS
};
const testimonialsContent = {
  badge: "Patient stories",
  title: "What patients say about RamaCare",
  subtitle: "Video stories from patients at our Jumeirah 1 clinic, plus our Google reviews.",
  stats: [
    { id: 1, number: "4.8/5", label1: "Average Rating", label2: "Google Reviews", target: 4.8, showStars: true },
    { id: 2, number: "200", label1: "Patient Reviews", label2: "On Google", target: 200 },
    { id: 3, number: "5", label1: "Departments", label2: "Under one roof", target: 5 },
    { id: 4, number: "7", label1: "Days a week", label2: "Open 10am–10pm", target: 7 }
  ]
};
const expertsContent = {
  stats: [],
  ctaSection: {
    title: "Not sure who to see?",
    description: "Book the GP first, or message us on WhatsApp and we will match you with the right clinician in Jumeirah 1.",
    primaryButton: "Book an appointment",
    secondaryButton: "View our team"
  },
  badge: "Our clinical team",
 title: "Meet the team in Jumeirah 1",
  description: "Doctors, dentists, physiotherapists, nurses and therapists, each holding a DHA licence for their own role. Open a profile to see qualifications and experience."
};
const schemaGraph = {
  "@context": "https://schema.org",
  "@graph": [
     {
      "@type": "MedicalClinic",
      "@id": `${SITE}/#clinic`,
      name: "RamaCare Polyclinic",
      legalName: "Rama Care Polyclinic LLC",
      identifier: { "@type": "PropertyValue", propertyID: "DHA Facility Licence", value: "2036418" },
      url: `${SITE}/`,
      logo: `${SITE}/images/Logo.png`,
      image: `${SITE}/images/homepage.jpg`,
      description: "DHA-licensed outpatient polyclinic in Jumeirah 1, Dubai, offering general medicine, dentistry, physiotherapy, dermatology and aesthetic treatments, and Ayurveda.",
      telephone: "+97142862006",
      email: "query@ramacarepolyclinic.com",
      contactPoint: [
        { "@type": "ContactPoint", contactType: "appointments", telephone: "97142862006", availableLanguage: ["English", "Arabic", "Hindi", "Malayalam", "Tagalog"] },
        { "@type": "ContactPoint", contactType: "appointments (WhatsApp)", telephone: "+971566597878", url: "https://wa.me/971566597878", availableLanguage: ["English", "Arabic", "Hindi", "Malayalam", "Tagalog"] }
      ],
      currenciesAccepted: "AED",
      paymentAccepted: "Credit card, debit card, mobile payment",
     openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "10:00",
        closes: "22:00"
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Ground Floor, Jumeirah Terrace Building, 12 Al Dhiyafah Road",
        addressLocality: "Jumeirah 1",
        addressRegion: "Dubai",
        postOfficeBoxNumber: "393558",
        addressCountry: "AE"
      },
      geo: { "@type": "GeoCoordinates", latitude: 25.2395, longitude: 55.2705 },
      hasMap: "https://maps.google.com/?cid=4290863257518002596",
      areaServed: [
        { "@type": "Place", name: "Jumeirah 1, Dubai" },
        { "@type": "Place", name: "Al Satwa, Dubai" },
        { "@type": "City", name: "Dubai" }
      ],
      medicalSpecialty: ["PrimaryCare", "Dentistry", "PhysicalTherapy", "Dermatology"],
      availableService: [
        { "@type": "MedicalTherapy", name: "General medicine consultations", url: `${SITE}/services/general-physician-dubai/` },
        { "@type": "MedicalProcedure", name: "Dental care", url: `${SITE}/services/dental-dubai/` },
        { "@type": "MedicalTherapy", name: "Physiotherapy", url: `${SITE}/services/physiotherapy-dubai/` },
        { "@type": "MedicalProcedure", name: "Dermatology and aesthetic treatments", url: `${SITE}/services/aesthetic-dermatology-dubai/` },
        { "@type": "MedicalTherapy", name: "Ayurveda", url: `${SITE}/services/ayurveda-dubai/` }
      ],
     employee: CLINICIANS.map((c) => ({
        "@type": c.type,
        "@id": `${SITE}/doctors/${c.slug}/#person`,
        name: c.name,
        jobTitle: c.jobTitle,
       url: `${SITE}/doctors/${c.slug}/`
      })),
      sameAs: [
        "https://www.facebook.com/RamaCarePolyClinic/",
        "https://www.instagram.com/ramacarepolyclinic/",
        "https://www.linkedin.com/company/ramacarepolyclinics/",
        "https://www.youtube.com/@ramacarepolyclinic"
      ]
 },
    {
      "@type": "WebSite",
      "@id": `${SITE}/#website`,
      url: `${SITE}/`,
      name: "RamaCare Polyclinic",
     publisher: { "@id": `${SITE}/#clinic` }
     },
    {
     "@type": "MedicalWebPage",
      "@id": `${SITE}/#webpage`,
      url: `${SITE}/`,
      name: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      isPartOf: { "@id": `${SITE}/#website` },
      about: { "@id": `${SITE}/#clinic` },
      lastReviewed: LAST_REVIEWED,
      dateModified: LAST_REVIEWED,
      inLanguage: "en"
     },
    {
      "@type": "FAQPage",
      "@id": `${SITE}/#faq`,
      mainEntity: HOME_FAQS.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer }
      }))
    }
  ]
};
export default function Home() {
  return (
    <Layout>
      <Head>
        <title key="title">{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_DESCRIPTION} key="description" />
        <link rel="canonical" href={`${SITE}/`} key="canonical" />
        <meta name="robots" content="index, follow" key="robots" />
        <meta name="msvalidate.01" content="FB6C6318BA274AFF1EA6E095977EA143" />
        <meta name="google-site-verification" content="VRn7pg1rACQOgcGV13YChuu05_Iu__0QVLXrw9dNGCc" />
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={PAGE_TITLE} key="og:title" />
        <meta property="og:description" content={PAGE_DESCRIPTION} key="og:description" />
         <meta property="og:type" content="website" key="og:type" />
        <meta property="og:url" content={`${SITE}/`} key="og:url" />
        <meta property="og:image" content={`${SITE}/images/homepage.jpg`} key="og:image" />
        <meta property="og:image:alt" content="RamaCare Polyclinic, Jumeirah 1, Dubai" key="og:image:alt" />
        <meta property="og:image:width" content="1200" key="og:image:width" />
        <meta property="og:image:height" content="630" key="og:image:height" />
        <meta property="og:site_name" content="RamaCare Polyclinic" key="og:site_name" />
        <meta property="og:locale" content="en_AE" key="og:locale" />
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content={PAGE_TITLE} key="twitter:title" />
        <meta name="twitter:description" content={PAGE_DESCRIPTION} key="twitter:description" />
        <meta name="twitter:image" content={`${SITE}/images/homepage.jpg`} key="twitter:image" />
        <script
          key="schema-graph"
          type="application/ld+json"
           dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
         />
      </Head>
         <HeroSection content={heroContent} />
      <WhyChooseUsSection content={whyChooseContent} />
      <AboutAyurvedaSection content={aboutContent} />
      <TreatmentSection content={treatmentsContent} />
      <ExpertsSection content={expertsContent} />
      <PatientTestimonials content={testimonialsContent} />
      <WhyAyurvedaDubaiSection content={locationContent} />
      <FAQSection content={faqContent} />
       <BeginYourHealingJourneySection />
      {/* <SEOContentSection title="Your Health, Our Priority: Leading Polyclinic in Jumeirah 1" content={homeSEOContent} /> */}
    </Layout>
  );
}
