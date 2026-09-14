import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from '../../../components/Layout';
import {
  MapPin,
  ShieldCheck,
  Stethoscope,
  Sparkles,
  Activity,
  Smile,
  Leaf,
  HeartPulse,
  Phone,
  ArrowRight,
  ChevronDown,
  CheckCircle2,
  Building2,
  Award,
  Users,
  Calendar,
  ExternalLink,
  Info,
  Check
} from 'lucide-react';

const SEO = {
  title: 'Polyclinic in Jumeirah 1, Dubai | RamaCare Polyclinic',
  metaDescription:
    'Looking for a polyclinic in Jumeirah 1, Dubai? RamaCare provides general medicine, dermatology, dental care, physiotherapy, Ayurveda and wellness services at 12 Al Dhiyafah Road.',
  canonical: 'https://ramacarepolyclinic.ae/services/polyclinic-in-jumeirah-1/',
  ogTitle: 'Polyclinic in Jumeirah 1, Dubai | RamaCare Polyclinic',
  ogDescription:
    'Looking for a polyclinic in Jumeirah 1, Dubai? RamaCare provides general medicine, dermatology, dental care, physiotherapy, Ayurveda and wellness services at 12 Al Dhiyafah Road.',
  ogImage: 'https://ramacarepolyclinic.ae/images/ramacare-polyclinic-jumeirah-1-dubai.jpg',
};

const STATS_8_POINT = [
  { value: '150+', label: 'Treatments & Services', icon: Activity },
  { value: 'DHA-Licensed', label: 'Healthcare Clinic', icon: ShieldCheck },
  { value: '15+', label: 'Years Combined Experience', icon: Award },
  { value: '4.8/5', label: 'Patient Rating', icon: Sparkles },
  { value: 'Multispecialty', label: 'Healthcare Departments', icon: Building2 },
  { value: 'Personalised', label: 'Treatment Plans', icon: HeartPulse },
  { value: 'Experienced', label: 'Healthcare Professionals', icon: Users },
  { value: 'Jumeirah 1', label: '12 Al Dhiyafah Road', icon: MapPin }
];

const DEPARTMENTS_EXPANDABLE = [
  {
    id: 'general-medicine',
    title: 'General Medicine',
    icon: Stethoscope,
    link: '/services/general-physician-dubai/',
    anchorText: 'general physician services in Dubai',
    imageSrc: '/images/general-medicine-ramacare-jumeirah-1.jpg',
    imageAlt: 'General Medicine consultation at RamaCare Polyclinic in Jumeirah 1',
    summary: 'General medicine is often the starting point when a patient has a health concern but is not sure which specialist is appropriate.',
    details: [
      'A general physician consultation may be useful for common illnesses, routine health concerns, preventive checkups, medical assessments, and the ongoing management of certain health conditions.',
      'The purpose of the consultation is to understand the patient’s concern, review relevant medical history, assess the situation, and determine what care may be appropriate.',
      'RamaCare’s general physician service covers primary healthcare, routine health checkups, chronic disease management, acute illness concerns, vaccinations and health counselling.'
    ],
    note: 'Patients should not rely on an online description to determine their diagnosis. If symptoms are persistent, worsening, unusual, or concerning, a professional medical assessment is appropriate.'
  },
  {
    id: 'dermatology',
    title: 'Dermatology & Skin Care',
    icon: Sparkles,
    link: '/services/aesthetic-dermatology-dubai/',
    anchorText: 'aesthetic dermatology services in Dubai',
    link2: '/doctors/',
    anchorText2: 'dermatology and healthcare professionals',
    imageSrc: '/images/dermatology-consultation-ramacare-dubai.jpg',
    imageAlt: 'Dermatology consultation at RamaCare Polyclinic Dubai',
    summary: 'Skin concerns can vary considerably. Acne, pigmentation, changes in skin texture, signs of ageing, unwanted hair, hair thinning, and scars require different approaches.',
    details: [
      'RamaCare’s dermatology and aesthetic services include medical and aesthetic skin care, hair-related treatments, laser-based treatments, skin rejuvenation, injectables and other cosmetic procedures.',
      'The clinic’s dermatology service information emphasizes individualized assessment rather than treating every skin type or concern in exactly the same way.',
      'For patients considering a cosmetic treatment, consultation is particularly important because suitability depends on factors such as skin condition, medical history, treatment goals, and the procedure being considered.'
    ]
  },
  {
    id: 'dental',
    title: 'Dental Care',
    icon: Smile,
    link: '/services/dental-dubai/',
    anchorText: 'dental treatments in Dubai',
    link2: '/services/dental-tooth-filling-dubai/',
    anchorText2: 'dental tooth filling in Dubai',
    imageSrc: '/images/dental-consultation-ramacare-jumeirah-1.jpg',
    imageAlt: 'Dental consultation at RamaCare Polyclinic Jumeirah 1',
    summary: 'Dental problems are easier to address when they are assessed before they become more complicated.',
    details: [
      'A dental consultation can help identify problems involving teeth, gums, restorations, oral health, or cosmetic concerns.',
      'RamaCare’s dental department provides general, restorative, cosmetic and surgical dental services. Treatment options include routine dental assessment, tooth restoration, fillings, root canal-related care, prosthetic and aesthetic dentistry.',
      'For example, a tooth that appears to need a simple filling may actually require a different approach if decay is extensive or the tooth structure has been significantly affected. An examination allows the dentist to determine the appropriate treatment.'
    ]
  },
  {
    id: 'physiotherapy',
    title: 'Physiotherapy & Rehabilitation',
    icon: Activity,
    link: '/services/physiotherapy-dubai/',
    anchorText: 'physiotherapy and rehabilitation in Dubai',
    link2: '/services/dry-needling-dubai/',
    anchorText2: 'dry needling',
    link3: '/services/ultrasound-therapy-dubai/',
    anchorText3: 'ultrasound therapy',
    link4: '/services/electrotherapy-dubai/',
    anchorText4: 'electrotherapy in Dubai',
    imageSrc: '/images/physiotherapy-ramacare-jumeirah-1.jpg',
    imageAlt: 'Physiotherapy consultation at RamaCare Polyclinic in Jumeirah 1',
    summary: 'Physiotherapy focuses on movement, physical function, rehabilitation, and the management of many musculoskeletal concerns.',
    details: [
      'Patients may seek physiotherapy for back or neck discomfort, shoulder or knee problems, sports injuries, mobility limitations, posture-related issues, or recovery after injury or surgery.',
      'Depending on the assessment, treatment may include exercise therapy, manual techniques, mobility work, strengthening, posture correction, or selected treatment modalities.',
      'RamaCare’s physiotherapy services include dry needling, electrotherapy, ultrasound therapy, pelvic floor therapy, scoliosis treatment and functional exercise therapy.'
    ]
  },
  {
    id: 'ayurveda',
    title: 'Ayurveda & Wellness',
    icon: Leaf,
    link: '/services/ayurveda-dubai/',
    anchorText: 'Ayurveda treatment in Dubai',
    imageSrc: '/images/ayurveda-consultation-ramacare-jumeirah-1.jpg',
    imageAlt: 'Ayurveda consultation at RamaCare Polyclinic in Jumeirah 1',
    summary: 'Ayurveda is a traditional system of healthcare that takes a broader approach to wellbeing, lifestyle, diet and individual health patterns.',
    details: [
      'At RamaCare, Ayurveda services include consultations and traditional Ayurvedic therapies. Patients considering Ayurveda discuss their health history and goals with a qualified practitioner so that the suitability of an approach can be assessed appropriately.',
      'RamaCare’s Ayurveda department includes traditional services and wellness therapies, with Dr. Shamna Keloth Meethal listed as a DHA-licensed Ayurveda practitioner with a BAMS qualification and a focus on general Ayurveda and preventive care.'
    ]
  }
];



const DOCTORS_LIST = [
  {
    name: 'Jeena Mathew',
    qualification: 'BPT, MPT',
    specialty: 'Musculoskeletal Physiotherapy',
    experience: '8+ Years Experience',
    licensing: 'DHA Licensed Physiotherapist',
    desc: 'Specializes in musculoskeletal rehabilitation, joint mobility, posture correction, and evidence-based physiotherapy.',
    profileUrl: '/doctors/jeena-mathew-physiotherapist-dubai/',
    imageSrc: '/images/Jeena Mathew.jpg'
  },
  {
    name: 'Dr. Shamna Keloth Meethal',
    qualification: 'BAMS',
    specialty: 'General Ayurveda & Preventive Care',
    experience: '11+ Years Experience',
    licensing: 'DHA Licensed Ayurveda Practitioner',
    desc: 'Provides personalized Ayurvedic consultations, classical Dosha constitution analysis, and holistic preventive care.',
    profileUrl: '/doctors/dr-shamna-keloth-meethal-ayurveda-doctor-dubai/',
    imageSrc: '/images/Dr Shamna Keloth Meethal.jpeg'
  },
  {
    name: 'Dr. Sahar Zomorrodi',
    qualification: 'Diploma from American Aesthetic Academy',
    specialty: 'General Practice & Aesthetic Medicine',
    experience: '14 Years Experience',
    licensing: 'DHA-Licensed General Practitioner',
    desc: 'Focuses on primary healthcare consultations, routine medical assessments, and non-surgical aesthetic skin treatments.',
    profileUrl: '/doctors/dr-sahar-zomorrodi-general-practitioner-dubai/',
    imageSrc: '/images/dr-sahar-zomorrodi-general-practitioner-dubai.png'
  },
  {
    name: 'Dr. Hirbod Gilandoust',
    qualification: 'DDS / Dental Surgery',
    specialty: 'Esthetic Dentistry & Dental Surgery',
    experience: '7+ Years Experience',
    licensing: 'DHA-Licensed Dentist',
    desc: 'Specializes in cosmetic smile design, restorative dental treatments, tooth fillings, and gentle root canal care.',
    profileUrl: '/doctors/dr-hirbod-gilandoust-dentist-dubai/',
    imageSrc: '/images/Hirbod.jpg'
  },
  {
    name: 'Dr. Aparna Balakrishnan',
    qualification: 'BDS',
    specialty: 'General & Cosmetic Dentistry',
    experience: '9+ Years Experience',
    licensing: 'DHA-Licensed Cosmetic Dentist',
    desc: 'Delivers comprehensive family dental care, cosmetic restorations, and routine oral hygiene care.',
    profileUrl: '/doctors/dr-aparna-balakrishnan-cosmetic-dentist-dubai/',
    imageSrc: '/images/Dr Aparna.jpg'
  },
  {
    name: 'Syamkumar Sasidharan',
    qualification: 'Diploma in Ayurveda Panchakarma Therapy',
    specialty: 'Ayurveda Panchakarma & Holistic Wellness',
    experience: '17+ Years Experience',
    licensing: 'DHA Licensed Practitioner',
    desc: 'Delivers classical Ayurvedic therapies including Panchakarma detox protocols, Abhyanga massage, and Shirodhara.',
    profileUrl: '/doctors/syamkumar-sasidharan-ayurveda-panchakarma-therapist-dubai/',
    imageSrc: '/images/Syam.jpg'
  }
];

const FAQS_10 = [
  {
    q: 'What services are available at RamaCare Polyclinic in Jumeirah 1?',
    a: 'RamaCare Polyclinic provides healthcare services across five main departments: General Medicine, Dermatology & Aesthetic Care, Dental Care, Physiotherapy & Rehabilitation, and Ayurveda & Wellness.'
  },
  {
    q: 'Where is RamaCare Polyclinic located?',
    a: 'RamaCare Polyclinic is located at 12 Al Dhiyafah Road, Jumeirah Terrace Building, Ground Floor, Jumeirah 1, Dubai.'
  },
  {
    q: 'Which departments are available at RamaCare?',
    a: 'The departments available at RamaCare include General Medicine, Dermatology & Aesthetic Care, Dental, Physiotherapy & Rehabilitation, and Ayurveda & Wellness.'
  },
  {
    q: 'Can I consult a general physician in Jumeirah 1?',
    a: 'Yes. RamaCare provides general physician consultations for routine health assessments, acute symptoms, health counselling, and chronic condition management.',
    link: '/services/general-physician-dubai/',
    linkText: 'View General Physician Services'
  },
  {
    q: 'Does RamaCare offer physiotherapy?',
    a: 'Yes. RamaCare offers comprehensive physiotherapy services including clinical assessments, manual therapy, dry needling, ultrasound therapy, electrotherapy, functional exercise, pelvic floor therapy, and post-surgery rehabilitation.',
    link: '/services/physiotherapy-dubai/',
    linkText: 'View Physiotherapy Services'
  },
  {
    q: 'Does RamaCare provide dermatology?',
    a: 'Yes. RamaCare provides dermatology and aesthetic care covering medical consultations, skin treatments, hair and scalp services, and non-surgical aesthetic procedures.',
    link: '/services/aesthetic-dermatology-dubai/',
    linkText: 'View Dermatology Services'
  },
  {
    q: 'Does RamaCare offer dental care?',
    a: 'Yes. RamaCare provides comprehensive dental care including consultations, routine checkups, tooth fillings, root canal treatments, cosmetic dentistry, and restorative care.',
    link: '/services/dental-dubai/',
    linkText: 'View Dental Services'
  },
  {
    q: 'Does RamaCare provide Ayurveda?',
    a: 'Yes. RamaCare provides traditional Ayurveda services including doctor consultations, constitution analysis, wellness therapies, and Panchakarma-related services.',
    link: '/services/ayurveda-dubai/',
    linkText: 'View Ayurveda Services'
  },
  {
    q: 'How can I book an appointment?',
    a: 'You can book an appointment by calling RamaCare at +971 4 286 2006, messaging via WhatsApp at +971 56 659 7878, or using the online appointment booking request on our website.'
  },
  {
    q: 'Can I contact RamaCare on WhatsApp?',
    a: 'Yes. You can contact RamaCare directly on WhatsApp at +971 56 659 7878 for enquiries, appointment scheduling, and clinic directions.'
  }
];

export default function PolyclinicInJumeirah1Page() {
  const [openFaq, setOpenFaq] = useState(null);
  const [expandedDept, setExpandedDept] = useState('general-medicine');

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const schemaData = [
    {
      '@context': 'https://schema.org',
      '@type': 'MedicalClinic',
      'name': 'RamaCare Polyclinic',
      'image': 'https://ramacarepolyclinic.ae/images/ramacare-polyclinic-jumeirah-1-dubai.jpg',
      'url': 'https://ramacarepolyclinic.ae/services/polyclinic-in-jumeirah-1/',
      'telephone': '+971566597878',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': '12 Al Dhiyafah Rd, Jumeirah Terrace Building, Ground Floor',
        'addressLocality': 'Jumeirah 1',
        'addressRegion': 'Dubai',
        'addressCountry': 'AE'
      },
      'medicalSpecialty': [
        'GeneralMedicine',
        'Dermatology',
        'Dentistry',
        'Physiotherapy',
        'Ayurveda'
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      'name': 'RamaCare Polyclinic',
      'url': 'https://ramacarepolyclinic.ae/',
      'logo': 'https://ramacarepolyclinic.ae/images/Logo.png'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'Home',
          'item': 'https://ramacarepolyclinic.ae/'
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'name': 'Services',
          'item': 'https://ramacarepolyclinic.ae/services/'
        },
        {
          '@type': 'ListItem',
          'position': 3,
          'name': 'Polyclinic in Jumeirah 1',
          'item': 'https://ramacarepolyclinic.ae/services/polyclinic-in-jumeirah-1/'
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': FAQS_10.map((faq) => ({
        '@type': 'Question',
        'name': faq.q,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': faq.a
        }
      }))
    }
  ];

  return (
    <Layout>
      <Head>
        <title>{SEO.title}</title>
        <meta name="description" content={SEO.metaDescription} />
        <link rel="canonical" href={SEO.canonical} />

        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={SEO.ogTitle} />
        <meta property="og:description" content={SEO.ogDescription} />
        <meta property="og:url" content={SEO.canonical} />
        <meta property="og:image" content={SEO.ogImage} />
        <meta property="og:site_name" content="RamaCare Polyclinic" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={SEO.title} />
        <meta name="twitter:description" content={SEO.metaDescription} />
        <meta name="twitter:image" content={SEO.ogImage} />

        {/* JSON-LD Schemas */}
        {schemaData.map((s, idx) => (
          <script
            key={idx}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
          />
        ))}
      </Head>

      {/* ===== HERO SECTION WITH BLURRED BACKGROUND CLINIC IMAGE & MERGED STATS ===== */}
      <section className="relative overflow-hidden text-white py-16 md:py-24 border-b border-[#D4A574]/30 shadow-2xl">
        {/* Full-width Blurred Clinic Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/ramacare-polyclinic-jumeirah-1-dubai.jpg"
            alt="RamaCare Polyclinic in Jumeirah 1 Dubai"
            className="w-full h-full object-cover scale-105 filter blur-[0.5px] brightness-[0.75]"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
          {/* Balanced Custom Gradient Overlay for Clear Background Image Visibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/80 via-[#1b5e3f]/70 to-[#1b5e3f]/65" />
          <div className="absolute inset-0 bg-[radial-gradient(#D4A574_1px,transparent_1px)] [background-size:24px_24px] opacity-15" />
        </div>

        <div className="relative z-10 w-full max-w-[95%] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          {/* Breadcrumb */}
          <nav className="flex items-center justify-center space-x-2 text-sm text-white/80" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#D4A574] transition-colors font-medium">Home</Link>
            <span>/</span>
            <Link href="/services/" className="hover:text-[#D4A574] transition-colors font-medium">Services</Link>
            <span>/</span>
            <span className="text-[#D4A574] font-semibold">Polyclinic in Jumeirah 1</span>
          </nav>

          {/* Animated Gold/Emerald Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/15 backdrop-blur-md text-[#D4A574] text-xs sm:text-sm font-bold border border-[#D4A574]/40 shadow-xl uppercase tracking-widest">
            <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-ping" />
            <Building2 className="w-4 h-4 text-[#D4A574]" />
            <span>Multispecialty Healthcare Hub in Jumeirah 1</span>
          </div>

          {/* Impactful Centered H1 */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight max-w-5xl mx-auto drop-shadow-md">
            Polyclinic in <span className="bg-gradient-to-r from-[#F7E1AD] via-[#D4A574] to-[#F7E1AD] bg-clip-text text-transparent">Jumeirah 1, Dubai</span>
          </h1>

          {/* 40-60 WORD AEO DIRECT ANSWER LUXURY GLASS CARD */}
          <div className="max-w-4xl mx-auto bg-white/15 backdrop-blur-xl border border-white/25 rounded-3xl p-6 sm:p-8 shadow-2xl text-left sm:text-center space-y-4">
            <div className="flex items-center justify-center gap-2 font-bold text-[#D4A574] text-xs uppercase tracking-widest">
              <Info className="w-4 h-4" />
              <span>About RamaCare Polyclinic</span>
            </div>
            <p className="font-medium text-white/95 text-base sm:text-lg leading-relaxed">
              RamaCare Polyclinic is a multispecialty healthcare clinic in Jumeirah 1, Dubai, located at 12 Al Dhiyafah Road, Jumeirah Terrace Building, Ground Floor. The clinic provides general medicine, dermatology and aesthetic care, dental care, physiotherapy and rehabilitation, and Ayurveda and wellness services.
            </p>
            <p className="font-medium text-white/90 text-sm sm:text-base leading-relaxed">
              Patients can choose the department relevant to their healthcare concern and receive an individual assessment from a qualified healthcare professional.
            </p>

            {/* Quick Contact & Location Info Details */}
            <div className="pt-4 border-t border-white/20 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm text-white/95 text-center">
              <div className="flex items-center justify-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#D4A574] flex-shrink-0" />
                <span>12 Al Dhiyafah Rd, Ground Floor, Jumeirah 1</span>
              </div>
              <div className="flex items-center justify-center gap-1.5">
                <Phone className="w-4 h-4 text-[#D4A574] flex-shrink-0" />
                <span>Phone / WhatsApp: +971 56 659 7878</span>
              </div>
              <div className="flex items-center justify-center gap-1.5">
                <Phone className="w-4 h-4 text-[#D4A574] flex-shrink-0" />
                <span>Landline: +971 4 286 2006</span>
              </div>
            </div>
          </div>

          {/* Centered Action CTAs: Book an Appointment, WhatsApp Now, Call RamaCare */}
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-5 pt-2">
            <Link
              href="/book-appointment/"
              className="inline-flex items-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 bg-[#D4A574] hover:bg-[#c39563] text-gray-950 rounded-2xl font-extrabold shadow-xl hover:shadow-2xl hover:scale-105 transition-all text-sm sm:text-base"
            >
              <Calendar className="w-5 h-5 text-gray-950" />
              <span>Book an Appointment</span>
            </Link>
            <a
              href="https://wa.me/971566597878"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-2xl font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all text-sm sm:text-base"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
              </svg>
              <span>WhatsApp Now</span>
            </a>
            <a
              href="tel:+971566597878"
              className="inline-flex items-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 bg-white/15 hover:bg-white/25 text-white rounded-2xl font-bold border border-white/30 backdrop-blur-md shadow-xl hover:scale-105 transition-all text-sm sm:text-base"
            >
              <Phone className="w-5 h-5 text-[#D4A574]" />
              <span>Call RamaCare</span>
            </a>
          </div>

          {/* MERGED 8-POINT STATS & FEATURES GRID INSIDE HERO FOLD */}
          <div className="pt-8 border-t border-white/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              {STATS_8_POINT.map((stat, idx) => {
                const IconComp = stat.icon;
                return (
                  <div key={idx} className="bg-white/15 backdrop-blur-xl p-4 rounded-2xl border border-white/20 flex items-center gap-3 text-left hover:bg-white/25 transition-all shadow-lg">
                    <div className="w-10 h-10 rounded-xl bg-[#D4A574]/20 flex items-center justify-center flex-shrink-0 text-[#D4A574] border border-[#D4A574]/30">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-base sm:text-lg font-bold text-white leading-tight">{stat.value}</div>
                      <div className="text-xs text-white/80 font-medium">{stat.label}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ===== MAIN CONTENT & INTERACTIVE SECTIONS ===== */}
      <section className="py-14 md:py-20 bg-white w-full">
        <div className="w-full max-w-[95%] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

          {/* Section: RamaCare Polyclinic at a Glance */}
          <div className="bg-[#FAF8F5] rounded-3xl p-6 sm:p-10 border border-[#E8DFC8] shadow-md space-y-8">
            <div className="text-center max-w-3xl mx-auto space-y-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1F5E4B]/10 text-[#1F5E4B] text-xs font-bold uppercase tracking-wider">
                <Building2 className="w-4 h-4" />
                <span>Overview</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1A1A1A]">
                RamaCare Polyclinic at a Glance
              </h2>
              <p className="text-gray-600 text-sm sm:text-base">
                Key facts, credentials, and clinical departments available at our Jumeirah 1 medical center.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card 1: Location & Address */}
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[#1F5E4B]/10 text-[#1F5E4B] flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Location &amp; Address</h3>
                <div className="text-sm text-gray-600 space-y-1">
                  <p className="font-semibold text-gray-800">Jumeirah 1, Dubai</p>
                  <p>12 Al Dhiyafah Road, Jumeirah Terrace Building, Ground Floor</p>
                </div>
              </div>

              {/* Card 2: Multispecialty Healthcare Departments */}
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-3 lg:col-span-2">
                <div className="w-12 h-12 rounded-xl bg-[#D4A574]/20 text-[#9C7443] flex items-center justify-center">
                  <Stethoscope className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Multispecialty Healthcare Clinic</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-gray-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#1F5E4B] flex-shrink-0" />
                    <span>General Medicine</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#1F5E4B] flex-shrink-0" />
                    <span>Dermatology &amp; Aesthetic Care</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#1F5E4B] flex-shrink-0" />
                    <span>Dental Care</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#1F5E4B] flex-shrink-0" />
                    <span>Physiotherapy &amp; Rehabilitation</span>
                  </div>
                  <div className="flex items-center gap-2 sm:col-span-2">
                    <CheckCircle2 className="w-4 h-4 text-[#1F5E4B] flex-shrink-0" />
                    <span>Ayurveda &amp; Wellness</span>
                  </div>
                </div>
              </div>

              {/* Card 3: Trust & Licensing */}
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[#10B981]/10 text-[#10B981] flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Licensing &amp; Rating</h3>
                <div className="text-sm text-gray-600 space-y-2">
                  <div className="flex items-center gap-2 font-medium text-gray-800">
                    <Award className="w-4 h-4 text-[#1F5E4B]" />
                    <span>DHA-Licensed Healthcare Clinic</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Activity className="w-4 h-4 text-[#1F5E4B]" />
                    <span>150+ Treatments &amp; Services</span>
                  </div>
                  <div className="flex items-center gap-2 text-amber-700 font-semibold">
                    <Sparkles className="w-4 h-4 text-amber-500 fill-amber-400" />
                    <span>4.8 / 5 Patient Rating</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 1: About RamaCare Polyclinic */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1A1A1A] leading-tight">
                  About RamaCare Polyclinic
                </h2>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  RamaCare Polyclinic brings multiple healthcare disciplines together at its Jumeirah 1 location in Dubai.
                </p>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  The clinic provides access to general medicine, dermatology and aesthetic care, dental services, physiotherapy and rehabilitation, and Ayurveda and wellness services.
                </p>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  A multispecialty clinic can be useful when patients are unsure which healthcare department is most appropriate for their concern. The appropriate department and treatment depend on the patient's symptoms, medical history, and professional assessment.
                </p>
              </div>

              {/* Subsection: Healthcare in Jumeirah 1, Jumeirah, and Dubai */}
              <div className="pt-4 border-t border-gray-100 space-y-3">
                <h3 className="text-xl sm:text-2xl font-bold text-[#1F5E4B]">
                  Healthcare in Jumeirah 1, Jumeirah, and Dubai
                </h3>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  RamaCare is located in Jumeirah 1, within the wider Jumeirah area of Dubai. Patients may search for healthcare services using terms such as polyclinic in Jumeirah 1, clinic in Jumeirah, healthcare clinic in Jumeirah or polyclinic in Dubai. RamaCare's primary physical location is Jumeirah 1.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-[#F9F7F2] p-7 rounded-3xl border border-gray-200 space-y-5 shadow-sm">
                <div className="flex items-center gap-3">
                  <Building2 className="w-7 h-7 text-[#1F5E4B]" />
                  <h3 className="text-xl font-bold text-[#1A1A1A]">Clinic Reception & Facility</h3>
                </div>
                {/* IMAGE 2: ramacare-polyclinic-reception-jumeirah-1.jpg */}
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-gray-300 bg-slate-200">
                  <img
                    src="/images/ramacare-polyclinic-reception-jumeirah-1.jpg"
                    alt="RamaCare Polyclinic reception in Jumeirah 1"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      if (e.currentTarget.nextSibling) {
                        e.currentTarget.nextSibling.style.display = 'flex';
                      }
                    }}
                  />
                  <div className="hidden w-full h-full bg-[#1F5E4B]/5 flex-col items-center justify-center p-4 text-center">
                    <Users className="w-10 h-10 text-[#1F5E4B] mb-2" />
                    <span className="text-xs font-bold text-gray-800">ramacare-polyclinic-reception-jumeirah-1.jpg</span>
                    <span className="text-[11px] text-gray-500 mt-1">Alt: RamaCare Polyclinic reception in Jumeirah 1</span>
                  </div>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed font-medium">
                  Clean, calm, and sterile reception designed to accommodate individuals and families comfortably during appointments.
                </p>
              </div>
            </div>
          </div>

          {/* Section 2: Five Dedicated Healthcare Department Sections */}
          <div className="space-y-12 border-t border-gray-200 pt-12">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1F5E4B]/10 text-[#1F5E4B] text-xs font-bold uppercase tracking-wider">
                Clinical Departments
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1A1A1A]">
                Healthcare Services at RamaCare Polyclinic
              </h2>
              <p className="text-gray-600 text-base sm:text-lg">
                Explore our five dedicated departments in Jumeirah 1, each led by qualified healthcare professionals.
              </p>
            </div>

            <div className="space-y-8">
              {/* 1. General Medicine */}
              <div className="bg-[#FAF8F5] border border-[#E8DFC8] rounded-3xl p-6 sm:p-10 shadow-sm transition-all hover:shadow-md">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-8 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-[#1F5E4B] text-white flex items-center justify-center shadow-sm">
                        <Stethoscope className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-extrabold text-[#1A1A1A]">General Medicine</h3>
                        <p className="text-xs text-[#1F5E4B] font-bold uppercase tracking-wider">Primary Care &amp; Assessment</p>
                      </div>
                    </div>
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                      General medicine serves as a key starting point for general health concerns, routine medical assessments, investigating new symptoms, and the ongoing management of chronic or acute health conditions.
                    </p>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      During a consultation, a qualified general physician evaluates your medical history, performs clinical examinations, and recommends personalized diagnostic pathways or specialized care tailored to your health goals.
                    </p>
                    <div className="pt-2">
                      <Link
                        href="/services/general-physician-dubai/"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#1F5E4B] hover:bg-[#184B3C] text-white font-bold rounded-xl text-sm transition-all shadow-md hover:shadow-lg"
                      >
                        <span>View General Medicine Services</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                  <div className="lg:col-span-4">
                    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-gray-300 bg-slate-200 shadow-sm">
                      <img
                        src="/images/general-medicine-ramacare-jumeirah-1.jpg"
                        alt="General Medicine consultation at RamaCare Polyclinic in Jumeirah 1"
                        className="w-full h-full object-cover"
                        onError={(e) => { e.currentTarget.style.display = 'none'; }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* 2. Dermatology & Aesthetic Care */}
              <div className="bg-[#FAF8F5] border border-[#E8DFC8] rounded-3xl p-6 sm:p-10 shadow-sm transition-all hover:shadow-md">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-8 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-[#D4A574] text-gray-950 flex items-center justify-center shadow-sm">
                        <Sparkles className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-extrabold text-[#1A1A1A]">Dermatology &amp; Aesthetic Care</h3>
                        <p className="text-xs text-[#9C7443] font-bold uppercase tracking-wider">Clinical &amp; Cosmetic Dermatology</p>
                      </div>
                    </div>
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                      Our dermatology services address a broad range of skin and hair concerns, including acne management, pigmentation, skin texture refinement, hair thinning, and anti-aging treatments.
                    </p>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      Every skin type is unique, and suitable treatments depend on thorough individual assessment, skin analysis, medical history, and clinical diagnosis before any therapeutic or aesthetic procedure is performed.
                    </p>
                    <div className="pt-2">
                      <Link
                        href="/services/aesthetic-dermatology-dubai/"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#1F5E4B] hover:bg-[#184B3C] text-white font-bold rounded-xl text-sm transition-all shadow-md hover:shadow-lg"
                      >
                        <span>View Dermatology &amp; Skin Services</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                  <div className="lg:col-span-4">
                    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-gray-300 bg-slate-200 shadow-sm">
                      <img
                        src="/images/dermatology-consultation-ramacare-dubai.jpg"
                        alt="Dermatology consultation at RamaCare Polyclinic Dubai"
                        className="w-full h-full object-cover"
                        onError={(e) => { e.currentTarget.style.display = 'none'; }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. Dental Care */}
              <div className="bg-[#FAF8F5] border border-[#E8DFC8] rounded-3xl p-6 sm:p-10 shadow-sm transition-all hover:shadow-md">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-8 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-[#1F5E4B] text-white flex items-center justify-center shadow-sm">
                        <Smile className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-extrabold text-[#1A1A1A]">Dental Care</h3>
                        <p className="text-xs text-[#1F5E4B] font-bold uppercase tracking-wider">Preventive, Restorative &amp; Cosmetic Dentistry</p>
                      </div>
                    </div>
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                      Our dental department provides comprehensive oral examinations, preventive dental cleanings, restorative dentistry (including fillings, crowns, and root canals), and appropriate cosmetic dental services.
                    </p>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      Early evaluation helps identify dental and periodontal concerns before they progress, allowing our DHA-licensed dentists to recommend conservative and effective solutions for lasting oral health.
                    </p>
                    <div className="pt-2">
                      <Link
                        href="/services/dental-dubai/"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#1F5E4B] hover:bg-[#184B3C] text-white font-bold rounded-xl text-sm transition-all shadow-md hover:shadow-lg"
                      >
                        <span>View Dental Services</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                  <div className="lg:col-span-4">
                    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-gray-300 bg-slate-200 shadow-sm">
                      <img
                        src="/images/dental-consultation-ramacare-jumeirah-1.jpg"
                        alt="Dental consultation at RamaCare Polyclinic Jumeirah 1"
                        className="w-full h-full object-cover"
                        onError={(e) => { e.currentTarget.style.display = 'none'; }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* 4. Physiotherapy & Rehabilitation */}
              <div className="bg-[#FAF8F5] border border-[#E8DFC8] rounded-3xl p-6 sm:p-10 shadow-sm transition-all hover:shadow-md">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-8 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-[#D4A574] text-gray-950 flex items-center justify-center shadow-sm">
                        <Activity className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-extrabold text-[#1A1A1A]">Physiotherapy &amp; Rehabilitation</h3>
                        <p className="text-xs text-[#9C7443] font-bold uppercase tracking-wider">Movement, Mobility &amp; Pain Recovery</p>
                      </div>
                    </div>
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                      Physiotherapy at RamaCare focuses on movement restoration, pain management, functional recovery, and rehabilitation after injury or surgery.
                    </p>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      Following a comprehensive clinical evaluation, personalized treatment plans may incorporate evidence-based modalities where already available, including:
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs sm:text-sm font-semibold text-gray-800">
                      <div className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#1F5E4B]" /><span>Manual therapy</span></div>
                      <div className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#1F5E4B]" /><span>Exercise therapy</span></div>
                      <div className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#1F5E4B]" /><span>Dry needling</span></div>
                      <div className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#1F5E4B]" /><span>Electrotherapy</span></div>
                      <div className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#1F5E4B]" /><span>Ultrasound therapy</span></div>
                      <div className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#1F5E4B]" /><span>Rehabilitation</span></div>
                    </div>
                    <div className="pt-2">
                      <Link
                        href="/services/physiotherapy-dubai/"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#1F5E4B] hover:bg-[#184B3C] text-white font-bold rounded-xl text-sm transition-all shadow-md hover:shadow-lg"
                      >
                        <span>View Physiotherapy Services</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                  <div className="lg:col-span-4">
                    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-gray-300 bg-slate-200 shadow-sm">
                      <img
                        src="/images/physiotherapy-ramacare-jumeirah-1.jpg"
                        alt="Physiotherapy consultation at RamaCare Polyclinic in Jumeirah 1"
                        className="w-full h-full object-cover"
                        onError={(e) => { e.currentTarget.style.display = 'none'; }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* 5. Ayurveda & Wellness */}
              <div className="bg-[#FAF8F5] border border-[#E8DFC8] rounded-3xl p-6 sm:p-10 shadow-sm transition-all hover:shadow-md">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-8 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-[#1F5E4B] text-white flex items-center justify-center shadow-sm">
                        <Leaf className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-extrabold text-[#1A1A1A]">Ayurveda &amp; Wellness</h3>
                        <p className="text-xs text-[#1F5E4B] font-bold uppercase tracking-wider">Traditional Holistic Care</p>
                      </div>
                    </div>
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                      Our Ayurveda department offers authentic consultations and traditional Ayurvedic wellness therapies aimed at supporting overall balance, lifestyle health, and preventive care.
                    </p>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      Led by DHA-licensed Ayurvedic doctors, treatments focus on personalized diet, herbal protocols, and traditional therapeutic therapies suited to individual constitution without unsupported medical claims.
                    </p>
                    <div className="pt-2">
                      <Link
                        href="/services/ayurveda-dubai/"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#1F5E4B] hover:bg-[#184B3C] text-white font-bold rounded-xl text-sm transition-all shadow-md hover:shadow-lg"
                      >
                        <span>View Ayurveda Services</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                  <div className="lg:col-span-4">
                    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-gray-300 bg-slate-200 shadow-sm">
                      <img
                        src="/images/ayurveda-consultation-ramacare-jumeirah-1.jpg"
                        alt="Ayurveda consultation at RamaCare Polyclinic in Jumeirah 1"
                        className="w-full h-full object-cover"
                        onError={(e) => { e.currentTarget.style.display = 'none'; }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 5: Which RamaCare Department May Be Right for You? */}
          <div className="space-y-6 border-t border-gray-200 pt-12 w-full">
            <div className="w-full max-w-full space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#1F5E4B]/10 text-[#1F5E4B] text-xs font-bold rounded-full">
                <Info className="w-4 h-4" />
                <span>Department Guidance</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1A1A1A]">
                Which RamaCare Department May Be Right for You?
              </h2>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                If you are unsure where to begin, use this general overview to identify the department that most closely aligns with your primary healthcare or wellness concern.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm bg-white">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#FAF8F5] border-b border-gray-200 text-[#1F5E4B]">
                    <th className="py-4 px-6 font-bold text-base sm:text-lg">Concern</th>
                    <th className="py-4 px-6 font-bold text-base sm:text-lg">Potential Department</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-sm sm:text-base text-gray-800">
                  <tr className="hover:bg-gray-50/80 transition-colors">
                    <td className="py-4 px-6 font-medium text-gray-900">General health concern</td>
                    <td className="py-4 px-6">
                      <Link href="/services/general-physician-dubai/" className="font-semibold text-[#1F5E4B] hover:underline inline-flex items-center gap-1.5">
                        General Medicine
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50/80 transition-colors">
                    <td className="py-4 px-6 font-medium text-gray-900">Skin or hair concern</td>
                    <td className="py-4 px-6">
                      <Link href="/services/aesthetic-dermatology-dubai/" className="font-semibold text-[#1F5E4B] hover:underline inline-flex items-center gap-1.5">
                        Dermatology &amp; Aesthetic Care
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50/80 transition-colors">
                    <td className="py-4 px-6 font-medium text-gray-900">Tooth or gum concern</td>
                    <td className="py-4 px-6">
                      <Link href="/services/dental-dubai/" className="font-semibold text-[#1F5E4B] hover:underline inline-flex items-center gap-1.5">
                        Dental Care
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50/80 transition-colors">
                    <td className="py-4 px-6 font-medium text-gray-900">Pain, movement or rehabilitation</td>
                    <td className="py-4 px-6">
                      <Link href="/services/physiotherapy-dubai/" className="font-semibold text-[#1F5E4B] hover:underline inline-flex items-center gap-1.5">
                        Physiotherapy &amp; Rehabilitation
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50/80 transition-colors">
                    <td className="py-4 px-6 font-medium text-gray-900">Ayurvedic consultation or wellness</td>
                    <td className="py-4 px-6">
                      <Link href="/services/ayurveda-dubai/" className="font-semibold text-[#1F5E4B] hover:underline inline-flex items-center gap-1.5">
                        Ayurveda &amp; Wellness
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-[#FAF8F5] p-4.5 rounded-2xl border border-[#E8DFC8] flex items-start gap-3 text-xs sm:text-sm text-gray-700">
              <Info className="w-5 h-5 text-[#1F5E4B] flex-shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                <strong>Disclaimer:</strong> This table is a general guide and does not provide a diagnosis. The appropriate department depends on the individual&apos;s symptoms, medical history and professional assessment.
              </p>
            </div>
          </div>

          {/* Section 6: Comprehensive Service Directory */}
          <div className="bg-gradient-to-br from-[#1F5E4B] via-[#184B3C] to-[#0F3B2E] text-white p-8 sm:p-12 rounded-3xl space-y-10 shadow-2xl relative overflow-hidden w-full">
            {/* Ambient Background Glow */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#D4A574]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-4 w-full max-w-full">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white/10 text-[#D4A574] text-xs font-bold rounded-full border border-[#D4A574]/30 uppercase tracking-wider">
                <Building2 className="w-4 h-4" />
                <span>Comprehensive Service Directory</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white">
                Treatments &amp; Services in Jumeirah 1
              </h2>
              <p className="text-white/95 text-base sm:text-lg leading-relaxed font-medium">
                A local healthcare hub should make it easy to move from a broad concern to the relevant service.
              </p>
              <p className="text-white/90 text-base sm:text-lg leading-relaxed">
                RamaCare&apos;s service directory covers a wide range of treatments across its healthcare departments. Patients can explore the complete{' '}
                <Link href="/services/" className="text-[#D4A574] font-bold underline hover:text-white transition-colors">
                  medical services and treatments directory
                </Link>{' '}
                before deciding which department may be appropriate.
              </p>
            </div>

            {/* 5 Department Service Columns with Internal Service Links */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              {/* General Medicine */}
              <div className="bg-white/10 p-6 rounded-2xl border border-white/15 backdrop-blur-md space-y-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <Stethoscope className="w-6 h-6 text-[#D4A574]" />
                    <h3 className="font-bold text-lg text-white">General Medicine</h3>
                  </div>
                  <ul className="space-y-2.5 text-sm text-white/90">
                    <li>
                      <Link href="/services/general-physician-dubai/" className="hover:text-[#D4A574] transition-colors flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#D4A574] flex-shrink-0" />
                        <span>General physician consultations</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/comprehensive-physical-examinations-dubai/" className="hover:text-[#D4A574] transition-colors flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#D4A574] flex-shrink-0" />
                        <span>Primary healthcare</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/routine-check-ups-dubai/" className="hover:text-[#D4A574] transition-colors flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#D4A574] flex-shrink-0" />
                        <span>Routine health assessments</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/specialized-hypertension-management/" className="hover:text-[#D4A574] transition-colors flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#D4A574] flex-shrink-0" />
                        <span>Health counselling</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/diabetes-mellitus-care-dubai/" className="hover:text-[#D4A574] transition-colors flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#D4A574] flex-shrink-0" />
                        <span>Chronic condition management</span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="pt-3 border-t border-white/10">
                  <Link href="/services/general-physician-dubai/" className="text-xs font-bold text-[#D4A574] hover:text-white inline-flex items-center gap-1.5">
                    View General Medicine Services <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Dermatology & Aesthetic Care */}
              <div className="bg-white/10 p-6 rounded-2xl border border-white/15 backdrop-blur-md space-y-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <Sparkles className="w-6 h-6 text-[#D4A574]" />
                    <h3 className="font-bold text-lg text-white">Dermatology &amp; Aesthetic Care</h3>
                  </div>
                  <ul className="space-y-2.5 text-sm text-white/90">
                    <li>
                      <Link href="/services/aesthetic-dermatology-dubai/" className="hover:text-[#D4A574] transition-colors flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#D4A574] flex-shrink-0" />
                        <span>Dermatology consultations</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/skin-treatment-dubai/" className="hover:text-[#D4A574] transition-colors flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#D4A574] flex-shrink-0" />
                        <span>Skin treatments</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/hair-treatment-dubai/" className="hover:text-[#D4A574] transition-colors flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#D4A574] flex-shrink-0" />
                        <span>Hair and scalp services</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/laser-rejuvenation-dubai/" className="hover:text-[#D4A574] transition-colors flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#D4A574] flex-shrink-0" />
                        <span>Skin rejuvenation</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/hydrafacial-dubai/" className="hover:text-[#D4A574] transition-colors flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#D4A574] flex-shrink-0" />
                        <span>Relevant aesthetic services</span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="pt-3 border-t border-white/10">
                  <Link href="/services/aesthetic-dermatology-dubai/" className="text-xs font-bold text-[#D4A574] hover:text-white inline-flex items-center gap-1.5">
                    View Dermatology &amp; Skin Services <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Dental Care */}
              <div className="bg-white/10 p-6 rounded-2xl border border-white/15 backdrop-blur-md space-y-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <Smile className="w-6 h-6 text-[#D4A574]" />
                    <h3 className="font-bold text-lg text-white">Dental</h3>
                  </div>
                  <ul className="space-y-2.5 text-sm text-white/90">
                    <li>
                      <Link href="/services/dental-dubai/" className="hover:text-[#D4A574] transition-colors flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#D4A574] flex-shrink-0" />
                        <span>Dental consultations</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/dental-tooth-filling-dubai/" className="hover:text-[#D4A574] transition-colors flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#D4A574] flex-shrink-0" />
                        <span>Fillings</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/root-canal-treatment-dubai/" className="hover:text-[#D4A574] transition-colors flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#D4A574] flex-shrink-0" />
                        <span>Root canal treatment</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/hollywood-smile-treatment-dubai/" className="hover:text-[#D4A574] transition-colors flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#D4A574] flex-shrink-0" />
                        <span>Cosmetic dentistry</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/dental-crown-bridges-dubai/" className="hover:text-[#D4A574] transition-colors flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#D4A574] flex-shrink-0" />
                        <span>Restorative dentistry</span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="pt-3 border-t border-white/10">
                  <Link href="/services/dental-dubai/" className="text-xs font-bold text-[#D4A574] hover:text-white inline-flex items-center gap-1.5">
                    View Dental Services <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Physiotherapy */}
              <div className="bg-white/10 p-6 rounded-2xl border border-white/15 backdrop-blur-md space-y-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <Activity className="w-6 h-6 text-[#D4A574]" />
                    <h3 className="font-bold text-lg text-white">Physiotherapy</h3>
                  </div>
                  <ul className="space-y-2.5 text-sm text-white/90">
                    <li>
                      <Link href="/services/physiotherapy-dubai/" className="hover:text-[#D4A574] transition-colors flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#D4A574] flex-shrink-0" />
                        <span>Physiotherapy assessment</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/post-surgery-rehabilitation-dubai/" className="hover:text-[#D4A574] transition-colors flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#D4A574] flex-shrink-0" />
                        <span>Rehabilitation</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/dry-needling-dubai/" className="hover:text-[#D4A574] transition-colors flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#D4A574] flex-shrink-0" />
                        <span>Dry needling</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/ultrasound-therapy-dubai/" className="hover:text-[#D4A574] transition-colors flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#D4A574] flex-shrink-0" />
                        <span>Ultrasound therapy</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/electrotherapy-dubai/" className="hover:text-[#D4A574] transition-colors flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#D4A574] flex-shrink-0" />
                        <span>Electrotherapy</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/functional-exercises-dubai/" className="hover:text-[#D4A574] transition-colors flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#D4A574] flex-shrink-0" />
                        <span>Functional exercise</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/pelvic-floor-therapy-dubai/" className="hover:text-[#D4A574] transition-colors flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#D4A574] flex-shrink-0" />
                        <span>Pelvic floor physiotherapy</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/scoliosis-treatment-in-dubai/" className="hover:text-[#D4A574] transition-colors flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#D4A574] flex-shrink-0" />
                        <span>Scoliosis-related physiotherapy</span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="pt-3 border-t border-white/10">
                  <Link href="/services/physiotherapy-dubai/" className="text-xs font-bold text-[#D4A574] hover:text-white inline-flex items-center gap-1.5">
                    View Physiotherapy Services <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Ayurveda */}
              <div className="bg-white/10 p-6 rounded-2xl border border-white/15 backdrop-blur-md space-y-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <Leaf className="w-6 h-6 text-[#D4A574]" />
                    <h3 className="font-bold text-lg text-white">Ayurveda</h3>
                  </div>
                  <ul className="space-y-2.5 text-sm text-white/90">
                    <li>
                      <Link href="/services/ayurveda-dubai/" className="hover:text-[#D4A574] transition-colors flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#D4A574] flex-shrink-0" />
                        <span>Ayurveda consultations</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/abhyanga-massage-dubai/" className="hover:text-[#D4A574] transition-colors flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#D4A574] flex-shrink-0" />
                        <span>Traditional Ayurvedic therapies</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/ayurvedic-detox-diet-plan-dubai/" className="hover:text-[#D4A574] transition-colors flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#D4A574] flex-shrink-0" />
                        <span>Wellness services</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/panchakarma-treatment-dubai/" className="hover:text-[#D4A574] transition-colors flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#D4A574] flex-shrink-0" />
                        <span>Panchakarma-related services where applicable</span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="pt-3 border-t border-white/10">
                  <Link href="/services/ayurveda-dubai/" className="text-xs font-bold text-[#D4A574] hover:text-white inline-flex items-center gap-1.5">
                    View Ayurveda Services <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative z-10 space-y-4 pt-4 border-t border-white/20 w-full">
              <p className="text-white/90 text-base sm:text-lg leading-relaxed bg-white/10 p-5 rounded-2xl border border-white/15 backdrop-blur-md font-medium">
                If you are unsure which service is suitable, contacting the clinic before booking can help you identify the appropriate department. A healthcare professional can then assess your individual situation and discuss suitable options.
              </p>
            </div>
          </div>

          {/* Section 7: Why Choose RamaCare Polyclinic in Jumeirah 1? */}
          <div className="space-y-8 border-t border-gray-200 pt-14 w-full">
            <div className="w-full max-w-full space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#1F5E4B]/10 text-[#1F5E4B] text-xs font-bold rounded-full">
                <Award className="w-4 h-4" />
                <span>Patient-Centered Care Standard</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A]">
                Why Choose RamaCare Polyclinic in Jumeirah 1?
              </h2>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                Choosing a healthcare clinic is a personal decision. Different patients have different priorities, whether that means finding a local general physician, arranging physiotherapy, addressing a dental problem, discussing a skin concern, or exploring Ayurveda.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
              <div className="bg-[#F9F7F2] p-6 rounded-3xl border border-gray-200 space-y-4 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#1F5E4B]/10 flex items-center justify-center text-[#1F5E4B]">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg text-[#1A1A1A]">Multispecialty Healthcare</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    RamaCare brings multiple healthcare departments together at one Jumeirah 1 location, including general medicine, dermatology, dental, physiotherapy, and Ayurveda.
                  </p>
                </div>
              </div>

              <div className="bg-[#F9F7F2] p-6 rounded-3xl border border-gray-200 space-y-4 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#1F5E4B]/10 flex items-center justify-center text-[#1F5E4B]">
                    <Users className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg text-[#1A1A1A]">Identifiable Healthcare Professionals</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Display real healthcare professionals with their qualifications, specialties and licensing information so patients can review practitioner profiles before booking.
                  </p>
                </div>
                <div className="pt-2">
                  <Link
                    href="/doctors/"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1F5E4B] hover:underline"
                  >
                    <span>View Healthcare Professionals</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              <div className="bg-[#F9F7F2] p-6 rounded-3xl border border-gray-200 space-y-4 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#1F5E4B]/10 flex items-center justify-center text-[#1F5E4B]">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg text-[#1A1A1A]">Assessment-Led Care</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Treatment recommendations depend on the patient&apos;s individual concern, health history, and professional assessment rather than standardized packages.
                  </p>
                </div>
              </div>

              <div className="bg-[#F9F7F2] p-6 rounded-3xl border border-gray-200 space-y-4 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#1F5E4B]/10 flex items-center justify-center text-[#1F5E4B]">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg text-[#1A1A1A]">Located in Jumeirah 1</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    RamaCare Polyclinic is located at 12 Al Dhiyafah Road, Jumeirah Terrace Building, Ground Floor, Jumeirah 1, Dubai.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 8: Doctors & Healthcare Professionals (Compact Cards) */}
          <div className="space-y-8 border-t border-gray-200 pt-12 w-full">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 w-full">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#1F5E4B]/10 text-[#1F5E4B] text-xs font-bold rounded-full mb-2">
                  <Users className="w-4 h-4" />
                  <span>Clinical Team</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A]">
                  Doctors &amp; Healthcare Professionals
                </h2>
                <p className="text-sm text-gray-600 mt-1">
                  Meet our DHA-licensed clinical team across physiotherapy, Ayurveda, general practice, dentistry, and aesthetic medicine.
                </p>
              </div>
              <Link
                href="/doctors/"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#1F5E4B] hover:underline whitespace-nowrap"
              >
                <span>View Healthcare Professionals</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              {DOCTORS_LIST.map((doc, idx) => (
                <div key={idx} className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col justify-between space-y-4 hover:shadow-lg transition-shadow">
                  <div className="space-y-3.5">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden bg-emerald-100 flex-shrink-0 border-2 border-[#1F5E4B] shadow-md relative">
                        <img
                          src={doc.imageSrc}
                          alt={doc.name}
                          className="w-full h-full object-cover object-[center_15%] scale-110"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            if (e.currentTarget.nextSibling) {
                              e.currentTarget.nextSibling.style.display = 'flex';
                            }
                          }}
                        />
                        <div className="hidden w-full h-full bg-emerald-100 flex items-center justify-center text-[#1F5E4B] font-bold text-xl">
                          {doc.name.charAt(0)}
                        </div>
                      </div>
                      <div>
                        <h3 className="font-bold text-base text-[#1A1A1A] leading-tight">{doc.name}</h3>
                        <p className="text-xs text-[#1F5E4B] font-bold mt-1">{doc.specialty}</p>
                      </div>
                    </div>
                    <div className="text-xs text-gray-600 space-y-1 pt-2.5 border-t border-gray-100">
                      <div><span className="font-bold text-gray-800">Qualification:</span> {doc.qualification}</div>
                      <div><span className="font-bold text-gray-800">Experience:</span> {doc.experience}</div>
                      <div><span className="font-bold text-gray-800">License:</span> {doc.licensing}</div>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed pt-1">{doc.desc}</p>
                  </div>

                  <div className="pt-3 border-t border-gray-100">
                    <Link
                      href={doc.profileUrl}
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#FAF8F5] hover:bg-[#1F5E4B] text-[#1F5E4B] hover:text-white rounded-xl text-xs font-bold transition-all border border-[#E8DFC8]"
                    >
                      <span>View Full Profile</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 9: What to Expect During Your Visit */}
          <div className="space-y-6 border-t border-gray-200 pt-12 w-full">
            <div className="w-full max-w-full">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#1F5E4B]/10 text-[#1F5E4B] text-xs font-bold rounded-full mb-3">
                <CheckCircle2 className="w-4 h-4" />
                <span>Patient Journey</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A]">
                What to Expect During Your Visit
              </h2>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mt-2">
                The exact experience can differ depending on the department and reason for your appointment, but a typical healthcare visit follows a straightforward five-step sequence.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 w-full">
              {[
                {
                  step: '1',
                  title: 'Appointment Booking',
                  desc: 'Patients can contact RamaCare by phone, WhatsApp or online booking to schedule a consultation.'
                },
                {
                  step: '2',
                  title: 'Initial Consultation',
                  desc: 'The healthcare professional discusses the patient\'s concern and relevant medical history.'
                },
                {
                  step: '3',
                  title: 'Clinical Assessment',
                  desc: 'Assessment depends on the department and reason for the visit.'
                },
                {
                  step: '4',
                  title: 'Treatment Recommendations',
                  desc: 'The healthcare professional explains suitable options based on the assessment.'
                },
                {
                  step: '5',
                  title: 'Follow-Up',
                  desc: 'Follow-up depends on the patient\'s condition and personalized treatment plan.'
                }
              ].map((st, i) => (
                <div key={i} className="bg-white border-2 border-gray-200 p-5 rounded-2xl relative space-y-3 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="w-9 h-9 rounded-xl bg-[#1F5E4B] text-white flex items-center justify-center text-sm font-bold shadow-md">
                      {st.step}
                    </div>
                    <h3 className="font-bold text-base text-[#1A1A1A]">{st.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{st.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 10: Who Can Benefit From a Multispecialty Clinic? */}
          <div className="space-y-6 border-t border-gray-200 pt-12 w-full">
            <div className="w-full max-w-full space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#1F5E4B]/10 text-[#1F5E4B] text-xs font-bold rounded-full">
                <Users className="w-4 h-4" />
                <span>Multispecialty Healthcare</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A]">
                Who Can Benefit From a Multispecialty Clinic?
              </h2>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                A multispecialty clinic can be useful for people with different healthcare needs because not every concern belongs to the same medical discipline.
              </p>
            </div>

            <div className="space-y-3 w-full">
              <h3 className="font-bold text-base text-[#1A1A1A]">RamaCare provides care for:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
                {[
                  'Patients seeking general medical care',
                  'Patients with skin or hair concerns',
                  'Patients requiring dental care',
                  'Patients with pain or rehabilitation needs',
                  'Patients seeking physiotherapy',
                  'Patients interested in Ayurvedic consultation',
                  'Patients looking for selected aesthetic services'
                ].map((bullet, bIdx) => (
                  <div key={bIdx} className="bg-[#FAF8F5] p-4.5 rounded-2xl border border-[#E8DFC8] flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#1F5E4B] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-800 font-medium leading-relaxed">{bullet}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#1F5E4B]/5 p-5 rounded-2xl border border-[#1F5E4B]/20 text-[#1A1A1A] w-full text-sm sm:text-base font-medium">
              If you are unsure which department is appropriate, contact the clinic before booking. A qualified healthcare professional can then determine the suitable department and options based on your individual assessment.
            </div>
          </div>

          {/* Section 11: Frequently Asked Questions (Semantic HTML format) */}
          <section className="space-y-8 border-t border-gray-200 pt-12 w-full">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#1F5E4B]/10 text-[#1F5E4B] text-xs font-bold rounded-full mb-2">
                <Info className="w-4 h-4" />
                <span>Patient Information</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A]">
                Frequently Asked Questions
              </h2>
              <p className="text-sm text-gray-600 mt-1">
                Direct answers to common questions about healthcare services, departments, and booking at RamaCare Polyclinic in Jumeirah 1.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
              {FAQS_10.map((faq, idx) => (
                <div
                  key={idx}
                  className="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm hover:shadow-md transition-shadow space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <h3 className="font-bold text-base text-[#1A1A1A] leading-snug">
                      {faq.q}
                    </h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                  {faq.link && (
                    <div className="pt-2 border-t border-gray-100">
                      <Link
                        href={faq.link}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1F5E4B] hover:underline"
                      >
                        <span>{faq.linkText}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Section 12: Jumeirah 1 Location & Contact */}
          <div className="bg-gradient-to-br from-[#1F5E4B] via-[#184B3C] to-[#0F3B2E] text-white p-8 sm:p-12 md:p-14 rounded-3xl space-y-10 shadow-2xl relative overflow-hidden border border-[#D4A574]/30">
            {/* Ambient Background Glow */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#D4A574]/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#10B981]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white/10 text-[#D4A574] text-xs font-bold rounded-full border border-[#D4A574]/30 uppercase tracking-wider">
                  <MapPin className="w-4 h-4" />
                  <span>Jumeirah 1 Location &amp; Contact</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                  Jumeirah 1 Location &amp; Contact
                </h2>

                <p className="text-white/90 text-base sm:text-lg leading-relaxed font-medium">
                  RamaCare Polyclinic is located on Al Dhiyafah Road in Jumeirah 1, Dubai. The clinic brings multiple healthcare disciplines together at one convenient location.
                </p>

                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/15 space-y-4 text-sm text-white/95 shadow-lg">
                  <div className="space-y-1">
                    <p className="font-bold text-white text-base">RamaCare Polyclinic</p>
                    <p className="text-white/90">12 Al Dhiyafah Road</p>
                    <p className="text-white/90">Jumeirah Terrace Building, Ground Floor</p>
                    <p className="text-white/90">Jumeirah 1, Dubai, UAE</p>
                  </div>

                  <div className="pt-3 border-t border-white/15 space-y-2 text-xs sm:text-sm">
                    <div>
                      <span className="text-white/70">Phone / WhatsApp: </span>
                      <a href="https://wa.me/971566597878" target="_blank" rel="noopener noreferrer" className="underline font-bold text-[#D4A574] hover:text-white">
                        +971 56 659 7878
                      </a>
                    </div>
                    <div>
                      <span className="text-white/70">Landline: </span>
                      <a href="tel:+97142862006" className="underline font-bold text-[#D4A574] hover:text-white">
                        +971 4 286 2006
                      </a>
                    </div>
                    <div>
                      <span className="text-white/70">Email: </span>
                      <a href="mailto:query@ramacarepolyclinic.ae" className="underline font-bold text-[#D4A574] hover:text-white">
                        query@ramacarepolyclinic.ae
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap gap-4 text-sm font-bold">
                  <Link
                    href="/book-appointment/"
                    className="inline-flex items-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 bg-[#D4A574] text-gray-950 rounded-2xl font-extrabold hover:bg-[#c39563] transition-all shadow-xl hover:scale-105"
                  >
                    <Calendar className="w-5 h-5 text-gray-950" />
                    <span>Book an Appointment</span>
                  </Link>
                  <a
                    href="https://wa.me/971566597878"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-2xl font-bold shadow-xl hover:scale-105 transition-all"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                    </svg>
                    <span>WhatsApp Now</span>
                  </a>
                  <a
                    href="tel:+97142862006"
                    className="inline-flex items-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 border-2 border-white/40 text-white rounded-2xl font-bold hover:bg-white/15 transition-all backdrop-blur-md hover:scale-105"
                  >
                    <Phone className="w-5 h-5 text-[#D4A574]" />
                    <span>Call Now</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Verified Clinic Image & Location */}
              <div className="lg:col-span-5 relative z-10 space-y-4">
                <div className="relative w-full aspect-video rounded-3xl overflow-hidden border-2 border-[#D4A574]/40 shadow-2xl bg-slate-900 group">
                  <img
                    src="/images/ramacare-polyclinic-location-al-dhiyafah-road.jpg"
                    alt="RamaCare Polyclinic location on Al Dhiyafah Road Jumeirah 1 Dubai"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
                <div className="relative w-full aspect-video rounded-3xl overflow-hidden border-2 border-white/20 shadow-xl bg-slate-900 group">
                  <img
                    src="/images/ramacare-polyclinic-reception-jumeirah-1.jpg"
                    alt="RamaCare Polyclinic reception in Jumeirah 1 Dubai"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Medical Disclaimer */}
            <div className="pt-6 border-t border-white/20 relative z-10">
              <p className="text-xs text-white/70 leading-relaxed max-w-5xl">
                Medical information on this page is provided for general educational purposes and does not replace an individual consultation, examination or professional medical advice.
              </p>
            </div>
          </div>

        </div>
      </section>
    </Layout>
  );
}
