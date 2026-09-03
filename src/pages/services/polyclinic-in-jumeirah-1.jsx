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
  Check,
  Image as ImageIcon
} from 'lucide-react';

const SEO = {
  title: 'Polyclinic in Jumeirah 1, Dubai | RamaCare Polyclinic',
  metaDescription:
    'Looking for a polyclinic in Jumeirah 1, Dubai? RamaCare Polyclinic offers general medicine, dermatology, dental, physiotherapy and Ayurveda services. Call or book a consultation.',
  canonical: 'https://ramacarepolyclinic.ae/services/polyclinic-in-jumeirah-1/',
  ogTitle: 'Polyclinic in Jumeirah 1, Dubai | RamaCare Polyclinic',
  ogDescription:
    'Multispecialty healthcare clinic in Jumeirah 1, Dubai. General medicine, dermatology, dental, physiotherapy, and Ayurveda under one roof on Al Dhiyafah Road.',
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
  { value: 'Jumeirah 1', label: 'Prime Dubai Location', icon: MapPin }
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
    link: '/services/dental-dubai',
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
    qualification: 'BPT, MPT (Physiotherapy)',
    specialty: 'Musculoskeletal Physiotherapy',
    experience: '8+ Years',
    licensing: 'DHA Licensed Physiotherapist',
    desc: 'Focuses on musculoskeletal physiotherapy, including rehabilitation and management of back, neck, shoulder, and knee concerns. Utilizes an assessment-led approach combining clinical evaluation, manual therapy, and exercise rehabilitation.',
    profileUrl: '/doctors/jeena-mathew-physiotherapist-dubai/',
    anchorText: 'Jeena Mathew’s physiotherapy profile'
  },
  {
    name: 'Dr. Shamna Keloth Meethal',
    qualification: 'BAMS',
    specialty: 'General Ayurveda & Preventive Care',
    experience: '11+ Years',
    licensing: 'DHA Licensed Ayurveda Practitioner',
    desc: 'Provides Ayurvedic consultations focused on classical body constitution analysis (Dosha), preventive wellness, chronic condition management, and personalized lifestyle guidance.',
    profileUrl: '/doctors/dr-shamna-keloth-meethal-ayurveda-doctor-dubai/',
    anchorText: 'Dr. Shamna Keloth Meethal’s profile'
  },
  {
    name: 'Dr. Sahar Zomorrodi',
    qualification: 'Diploma from American Aesthetic Academy',
    specialty: 'General Practice & Aesthetic Medicine',
    experience: '14 Years',
    licensing: 'DHA-Licensed General Practitioner',
    desc: 'Encompasses primary general medicine and non-surgical aesthetic procedures, offering skin rejuvenation, preventive health assessments, and ongoing health management.',
    profileUrl: '/doctors/dr-sahar-zomorrodi-general-practitioner-dubai/',
    anchorText: 'Dr. Sahar Zomorrodi’s profile'
  },
  {
    name: 'Dr. Hirbod Gilandoust',
    qualification: 'DDS / Dental Surgery',
    specialty: 'Esthetic Dentistry & Dental Surgery',
    experience: '7+ Years',
    licensing: 'DHA-Licensed Dentist',
    desc: 'Focuses on aesthetic dental restorations, smile design, prosthetics, tooth fillings, and root canal treatments delivered in an unhurried, patient-centered manner.',
    profileUrl: '/doctors/dr-hirbod-gilandoust-dentist-dubai/',
    anchorText: 'Dr. Hirbod Gilandoust’s profile'
  },
  {
    name: 'Dr. Aparna Balakrishnan',
    qualification: 'BDS',
    specialty: 'General & Cosmetic Dentistry',
    experience: '9+ Years',
    licensing: 'DHA-Licensed Cosmetic Dentist',
    desc: 'Provides comprehensive family dental care, cosmetic restorations, root canal treatments, and routine oral hygiene care with an emphasis on gentle dentistry.',
    profileUrl: '/doctors/dr-aparna-balakrishnan-cosmetic-dentist-dubai/',
    anchorText: 'Dr. Aparna Balakrishnan’s profile'
  },
  {
    name: 'Syamkumar Sasidharan',
    qualification: 'Diploma in Ayurveda Panchakarma Therapy',
    specialty: 'Ayurveda Panchakarma & Holistic Wellness',
    experience: '17+ Years',
    licensing: 'DHA Licensed Practitioner',
    desc: 'Delivers classical Ayurvedic therapies including Panchakarma detox, Abhyanga massage, Shirodhara, and specialized body rejuvenation protocols.',
    profileUrl: '/doctors/dr-syamkumar-ayurvedic-doctor-dubai/',
    anchorText: 'Syamkumar Sasidharan’s profile'
  }
];

const FAQS_10 = [
  {
    q: 'What services are available at a polyclinic in Jumeirah 1?',
    a: 'RamaCare Polyclinic provides general physician care, dermatology and aesthetic services, dental care, physiotherapy and rehabilitation, Ayurveda and wellness services, and facial/aesthetic treatments. The full service directory provides the current treatment categories.'
  },
  {
    q: 'Where is RamaCare Polyclinic located?',
    a: 'RamaCare Polyclinic is located at 12 Al Dhiyafah Rd, Jumeirah Terrace Building, Ground Floor, Jumeirah 1, Dubai.'
  },
  {
    q: 'Which departments are available at RamaCare Polyclinic?',
    a: 'The clinic’s main service categories include Aesthetic Dermatology, Dental, Ayurveda, Physiotherapy, General Physician care and Facial treatments.'
  },
  {
    q: 'Can I consult a general physician in Jumeirah 1?',
    a: 'Yes. RamaCare provides general physician services covering routine health concerns, medical assessment, preventive care and management of certain ongoing health conditions.'
  },
  {
    q: 'Does RamaCare Polyclinic offer physiotherapy?',
    a: 'Yes. Physiotherapy services include rehabilitation and treatments such as dry needling, electrotherapy, ultrasound therapy, pelvic floor therapy, scoliosis treatment and functional exercise therapy. Suitability depends on individual assessment.'
  },
  {
    q: 'Does the clinic provide dermatology treatments?',
    a: 'Yes. RamaCare provides medical and aesthetic dermatology services addressing various skin and hair concerns, including acne, pigmentation, skin rejuvenation and selected aesthetic treatments. The appropriate treatment depends on professional assessment.'
  },
  {
    q: 'Does the clinic offer dental care?',
    a: 'Yes. The dental department provides general, restorative and cosmetic dental care, including services such as dental fillings and other treatments based on the patient’s clinical needs.'
  },
  {
    q: 'Does the clinic provide Ayurveda treatment?',
    a: 'Yes. Ayurveda is one of RamaCare’s healthcare departments, with consultations and traditional Ayurvedic therapies available through its Ayurveda team.'
  },
  {
    q: 'How can I book an appointment?',
    a: 'You can contact RamaCare on +971 56 659 7878, call the landline at +971 4 286 2006, email query@ramacarepolyclinic.ae, or use the clinic’s online appointment process.'
  },
  {
    q: 'Where is RamaCare Polyclinic located in Dubai?',
    a: 'RamaCare Polyclinic is located on Al Dhiyafah Road, Jumeirah 1, Dubai, at Jumeirah Terrace Building, Ground Floor.'
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
            className="w-full h-full object-cover scale-105 filter blur-sm brightness-[0.45]"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
          {/* Official Project Green Theme (#1F5E4B / #184B3C) Glassmorphic Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#1F5E4B]/90 via-[#184B3C]/85 to-[#1F5E4B]/95 backdrop-blur-[1px]" />
          <div className="absolute inset-0 bg-[radial-gradient(#D4A574_1px,transparent_1px)] [background-size:24px_24px] opacity-15" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
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
          <div className="max-w-4xl mx-auto bg-white/15 backdrop-blur-xl border border-white/25 rounded-3xl p-6 sm:p-8 shadow-2xl text-left sm:text-center space-y-3">
            <div className="flex items-center justify-center gap-2 font-bold text-[#D4A574] text-xs uppercase tracking-widest">
              <Info className="w-4 h-4" />
              <span>About RamaCare Polyclinic</span>
            </div>
            <p className="font-medium text-white/95 text-base sm:text-lg leading-relaxed">
              RamaCare Polyclinic is a multispecialty healthcare clinic in Jumeirah 1, Dubai, providing general medicine, dermatology and aesthetic care, dental services, physiotherapy and rehabilitation, and Ayurveda and wellness services. Located on Al Dhiyafah Road, the clinic gives patients access to different healthcare services and qualified healthcare professionals in one local setting.
            </p>
          </div>

          {/* Centered Luxury Action Buttons */}
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 pt-2">
            <a
              href="tel:+971566597878"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#D4A574] hover:bg-[#c39563] text-gray-950 rounded-2xl font-extrabold shadow-xl hover:shadow-2xl hover:scale-105 transition-all text-base sm:text-lg"
            >
              <Phone className="w-5 h-5 text-gray-950" />
              <span>Call +971 56 659 7878</span>
            </a>
            <Link
              href="/book-appointment/"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white/15 hover:bg-white/25 text-white rounded-2xl font-bold border border-white/30 backdrop-blur-md shadow-xl hover:scale-105 transition-all text-base sm:text-lg"
            >
              <Calendar className="w-5 h-5 text-[#D4A574]" />
              <span>Book Appointment</span>
            </Link>
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
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

          {/* Section 1: Multispecialty Healthcare in Jumeirah 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1A1A1A] leading-tight">
                Multispecialty Healthcare in Jumeirah 1
              </h2>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                Finding the right healthcare provider is not always about choosing the clinic with the longest list of services. For many patients, it is about knowing where to go for a particular concern, understanding what type of professional they need, and having clear information before booking.
              </p>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                RamaCare Polyclinic provides several healthcare departments from its location in Jumeirah 1, Dubai. The range includes general medicine, dermatology and aesthetic care, dental care, physiotherapy and rehabilitation, and Ayurveda and wellness services.
              </p>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                A polyclinic can be useful when different types of healthcare are available within the same clinic setting. Instead of assuming that every concern requires the same type of treatment, patients can choose the appropriate department based on their symptoms, goals, and professional assessment.
              </p>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                The important point is that treatment should begin with the right assessment. A skin concern may require a dermatologist, ongoing musculoskeletal pain may be appropriate for physiotherapy assessment, and a tooth problem should be evaluated by a dentist. The most suitable service depends on the individual situation.
              </p>
              <p className="text-[#1F5E4B] text-base sm:text-lg leading-relaxed font-bold bg-[#1F5E4B]/5 p-4 rounded-xl border border-[#1F5E4B]/20">
                RamaCare’s services are provided from 12 Al Dhiyafah Rd, Jumeirah Terrace Building, Ground Floor, Jumeirah 1, Dubai, making the clinic a local healthcare option for people specifically looking for medical services in this part of Dubai.
              </p>
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

          {/* Section 2: Interactive Expandable Department Cards */}
          <div className="space-y-8 border-t border-gray-200 pt-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1F5E4B]/10 text-[#1F5E4B] text-xs font-bold uppercase tracking-wider mb-2">
                Interactive Department Explorer
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1A1A1A]">
                Healthcare Services Available at RamaCare Polyclinic
              </h2>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mt-2">
                RamaCare’s current services directory includes multiple departments covering medical, dental, rehabilitation, aesthetic, and traditional wellness care. Click any department below to explore detailed clinical information.
              </p>
            </div>

            <div className="space-y-4">
              {DEPARTMENTS_EXPANDABLE.map((dept) => {
                const IconComp = dept.icon;
                const isExpanded = expandedDept === dept.id;

                return (
                  <div
                    key={dept.id}
                    className="border-2 border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all"
                  >
                    <button
                      onClick={() => setExpandedDept(isExpanded ? null : dept.id)}
                      className={`w-full px-6 py-5 text-left flex items-center justify-between gap-4 transition-colors ${isExpanded ? 'bg-[#F9F7F2]' : 'hover:bg-gray-50'
                        }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-[#1F5E4B] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                          <IconComp className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-lg sm:text-xl font-bold text-[#1A1A1A]">{dept.title}</h3>
                          <p className="text-xs text-gray-600 line-clamp-1">{dept.summary}</p>
                        </div>
                      </div>
                      <ChevronDown className={`w-5 h-5 text-[#1F5E4B] transition-transform duration-300 flex-shrink-0 ${isExpanded ? 'rotate-180' : ''}`} />
                    </button>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="px-6 pb-6 pt-4 border-t border-gray-200 space-y-4 bg-white text-base text-gray-700">
                            {dept.details.map((para, pIdx) => (
                              <p key={pIdx} className="leading-relaxed text-sm sm:text-base">{para}</p>
                            ))}

                            {dept.note && (
                              <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-xs sm:text-sm text-amber-900 font-medium">
                                {dept.note}
                              </div>
                            )}

                            {/* IMAGES 3, 4, 5, 6 embedded based on department with exact src and alt text */}
                            <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden border border-gray-300 bg-slate-200 my-2">
                              <img
                                src={dept.imageSrc}
                                alt={dept.imageAlt}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                  e.currentTarget.style.display = 'none';
                                  if (e.currentTarget.nextSibling) {
                                    e.currentTarget.nextSibling.style.display = 'flex';
                                  }
                                }}
                              />
                              <div className="hidden w-full h-full bg-[#1F5E4B]/5 flex-col items-center justify-center p-4 text-center">
                                <ImageIcon className="w-8 h-8 text-[#1F5E4B] mb-2" />
                                <span className="text-xs font-bold text-gray-800">{dept.imageSrc.replace('/images/', '')}</span>
                                <span className="text-[11px] text-gray-600 mt-1 font-medium">Alt: {dept.imageAlt}</span>
                              </div>
                            </div>

                            <div className="flex flex-wrap gap-4 pt-2 border-t border-gray-100">
                              <Link href={dept.link} className="inline-flex items-center gap-2 text-sm font-bold text-[#1F5E4B] hover:underline">
                                <span>{dept.anchorText}</span>
                                <ArrowRight className="w-4 h-4" />
                              </Link>
                              {dept.link2 && (
                                <>
                                  <span className="text-gray-300">|</span>
                                  <Link href={dept.link2} className="inline-flex items-center gap-2 text-sm font-bold text-[#1F5E4B] hover:underline">
                                    <span>{dept.anchorText2}</span>
                                    <ArrowRight className="w-4 h-4" />
                                  </Link>
                                </>
                              )}
                              {dept.link3 && (
                                <>
                                  <span className="text-gray-300">|</span>
                                  <Link href={dept.link3} className="inline-flex items-center gap-2 text-sm font-bold text-[#1F5E4B] hover:underline">
                                    <span>{dept.anchorText3}</span>
                                    <ArrowRight className="w-4 h-4" />
                                  </Link>
                                </>
                              )}
                              {dept.link4 && (
                                <>
                                  <span className="text-gray-300">|</span>
                                  <Link href={dept.link4} className="inline-flex items-center gap-2 text-sm font-bold text-[#1F5E4B] hover:underline">
                                    <span>{dept.anchorText4}</span>
                                    <ArrowRight className="w-4 h-4" />
                                  </Link>
                                </>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>


          {/* Section 5: Treatments & Services in Jumeirah 1 (Verbatim Brief Content) */}
          <div className="bg-gradient-to-br from-[#1F5E4B] via-[#184B3C] to-[#0F3B2E] text-white p-8 sm:p-12 rounded-3xl space-y-8 shadow-2xl relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#D4A574]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-4 max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white/10 text-[#D4A574] text-xs font-bold rounded-full border border-[#D4A574]/30 uppercase tracking-wider">
                <Building2 className="w-4 h-4" />
                <span>Comprehensive Service Directory</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white">
                Treatments & Services in Jumeirah 1
              </h2>
              <p className="text-white/95 text-base sm:text-lg leading-relaxed font-medium">
                A local healthcare hub should make it easy to move from a broad concern to the relevant service.
              </p>
              <p className="text-white/90 text-base sm:text-lg leading-relaxed">
                RamaCare’s service directory covers a wide range of treatments across its healthcare departments. Patients can explore the complete{' '}
                <Link href="/services/" className="text-[#D4A574] font-bold underline hover:text-white transition-colors">
                  medical services and treatments directory
                </Link>{' '}
                before deciding which department may be appropriate.
              </p>
            </div>

            <div className="relative z-10 space-y-4">
              <h3 className="text-sm font-extrabold text-[#D4A574] uppercase tracking-widest">Examples include:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 text-xs sm:text-sm text-white/95">
                {[
                  'General physician consultations and primary healthcare',
                  'Dermatology and aesthetic skin treatments',
                  'Hair and scalp-related treatments',
                  'Skin rejuvenation services',
                  'Dental consultations and restorative dentistry',
                  'Tooth fillings and other dental treatments',
                  'Physiotherapy and rehabilitation',
                  'Dry needling',
                  'Ultrasound therapy',
                  'Electrotherapy',
                  'Functional exercise therapy',
                  'Pelvic floor therapy',
                  'Scoliosis-related physiotherapy',
                  'Ayurveda consultations',
                  'Traditional Ayurvedic therapies and wellness services'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white/10 hover:bg-white/15 p-3.5 rounded-2xl border border-white/15 backdrop-blur-md transition-all shadow-md">
                    <CheckCircle2 className="w-5 h-5 text-[#D4A574] flex-shrink-0" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10 space-y-4 pt-4 border-t border-white/20">
              <p className="text-white/90 text-base sm:text-lg leading-relaxed">
                The clinic’s services directory currently organizes its offerings across Aesthetic Dermatology, Dental, Ayurveda, Physiotherapy, General Physician and Facial categories.
              </p>
              <p className="text-white/90 text-base sm:text-lg leading-relaxed bg-white/10 p-5 rounded-2xl border border-white/15 backdrop-blur-md font-medium">
                If you are unsure which service is suitable, contacting the clinic before booking can help you identify the appropriate department. A healthcare professional can then assess your individual situation and discuss suitable options.
              </p>
            </div>
          </div>

          {/* Section 6: Why Choose RamaCare Polyclinic in Jumeirah 1? (Verbatim Brief Content) */}
          <div className="space-y-8 border-t border-gray-200 pt-14">
            <div className="max-w-4xl space-y-3">
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-[#F9F7F2] p-6 rounded-3xl border border-gray-200 space-y-3 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#1F5E4B]/10 flex items-center justify-center text-[#1F5E4B]">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg text-[#1A1A1A]">Multidisciplinary Setup</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    One practical consideration is having several healthcare disciplines available at one clinic location. RamaCare’s multidisciplinary setup brings together medical, dental, physiotherapy, dermatology, aesthetic and Ayurveda services in Jumeirah 1.
                  </p>
                </div>
              </div>

              <div className="bg-[#F9F7F2] p-6 rounded-3xl border border-gray-200 space-y-3 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#1F5E4B]/10 flex items-center justify-center text-[#1F5E4B]">
                    <Users className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg text-[#1A1A1A]">Identifiable Professionals</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Another consideration is the availability of identifiable healthcare professionals. Patients can review professional profiles, qualifications and areas of practice before deciding who may be appropriate for their needs. The clinic’s{' '}
                    <Link href="/doctors/" className="text-[#1F5E4B] font-bold underline hover:text-[#184b3c]">
                      doctor directory
                    </Link>{' '}
                    lists healthcare professionals across physiotherapy, Ayurveda, dentistry, general practice, dermatology, aesthetic care and related services.
                  </p>
                </div>
              </div>

              <div className="bg-[#F9F7F2] p-6 rounded-3xl border border-gray-200 space-y-3 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#1F5E4B]/10 flex items-center justify-center text-[#1F5E4B]">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg text-[#1A1A1A]">Personalized Assessment</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    The clinic also emphasizes personalized assessment. This is particularly relevant in healthcare because the same symptom can have different causes, and the appropriate treatment can vary from one person to another.
                  </p>
                </div>
              </div>

              <div className="bg-[#F9F7F2] p-6 rounded-3xl border border-gray-200 space-y-3 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#1F5E4B]/10 flex items-center justify-center text-[#1F5E4B]">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg text-[#1A1A1A]">Prime Location</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    For someone specifically searching for a polyclinic in Jumeirah 1, the physical location is also important. RamaCare Polyclinic is located on Al Dhiyafah Road at Jumeirah Terrace Building, Ground Floor.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 6: Doctors & Healthcare Professionals (8 Doctor Cards) */}
          <div className="space-y-8 border-t border-gray-200 pt-12">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A]">
                  Doctors & Healthcare Professionals
                </h2>
                <p className="text-sm text-gray-600 mt-1">
                  Meet our DHA-licensed clinical team across physiotherapy, Ayurveda, general practice, dentistry, and dermatology.
                </p>
              </div>
              <Link
                href="/doctors/"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#1F5E4B] hover:underline"
              >
                <span>RamaCare healthcare professionals</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {DOCTORS_LIST.map((doc, idx) => (
                <div key={idx} className="bg-white border border-gray-200 rounded-2xl p-5 flex flex-col justify-between space-y-4 hover:shadow-lg transition-shadow">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-[#1F5E4B] font-bold text-base flex-shrink-0 border border-emerald-200">
                        {doc.name.charAt(0)}
                      </div>
                      <div>
                        <h3 className="font-bold text-base text-[#1A1A1A] leading-tight">{doc.name}</h3>
                        <p className="text-xs text-[#1F5E4B] font-bold mt-0.5">{doc.specialty}</p>
                      </div>
                    </div>
                    <div className="text-xs text-gray-600 space-y-1 pt-2 border-t border-gray-100">
                      <div><span className="font-bold text-gray-800">Qualification:</span> {doc.qualification}</div>
                      <div><span className="font-bold text-gray-800">Experience:</span> {doc.experience}</div>
                      <div><span className="font-bold text-gray-800">Licensing:</span> {doc.licensing}</div>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed pt-1">{doc.desc}</p>
                  </div>

                  <div className="pt-2 border-t border-gray-100">
                    <Link
                      href={doc.profileUrl}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1F5E4B] hover:underline"
                    >
                      <span>{doc.anchorText}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 7: What to Expect During Your Visit (Verbatim Brief Content) */}
          <div className="space-y-6 border-t border-gray-200 pt-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#1F5E4B]/10 text-[#1F5E4B] text-xs font-bold rounded-full mb-3">
                <CheckCircle2 className="w-4 h-4" />
                <span>Patient Care Sequence</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A]">
                What to Expect During Your Visit
              </h2>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mt-2">
                The exact experience can differ depending on the department and reason for your appointment, but a typical healthcare visit may follow a straightforward sequence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {[
                {
                  step: '1',
                  title: 'Appointment Booking',
                  desc: 'Contact the clinic by phone, WhatsApp or through the appointment request process. Tell the team which service or healthcare professional you are interested in seeing.'
                },
                {
                  step: '2',
                  title: 'Initial Consultation',
                  desc: 'Your healthcare professional will discuss your reason for visiting and ask relevant questions about your symptoms, health history or treatment goals.'
                },
                {
                  step: '3',
                  title: 'Clinical Assessment',
                  desc: 'Depending on the department, the professional may perform a physical, dental, skin, medical or functional assessment. Additional evaluation may be recommended when appropriate.'
                },
                {
                  step: '4',
                  title: 'Treatment Recommendations',
                  desc: 'If treatment is suitable, your healthcare professional can explain the available options, expected process, potential considerations and what may be appropriate for your situation.'
                },
                {
                  step: '5',
                  title: 'Follow-Up Where Appropriate',
                  desc: 'Some conditions or treatments require more than one visit, while others may not. Follow-up recommendations depend on the individual assessment and treatment plan.'
                }
              ].map((st, i) => (
                <div key={i} className="bg-white border-2 border-gray-200 p-5 rounded-2xl relative space-y-3 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-9 h-9 rounded-xl bg-[#1F5E4B] text-white flex items-center justify-center text-sm font-bold shadow-md">
                    {st.step}
                  </div>
                  <h3 className="font-bold text-base text-[#1A1A1A]">{st.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{st.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-gray-700 text-base leading-relaxed bg-[#F9F7F2] p-4 rounded-xl border border-gray-200">
              The clinic’s appointment information similarly describes a process involving registration, consultation, assessment and discussion of treatment options.
            </p>
          </div>

          {/* Section 8: Who Can Benefit From a Multispecialty Clinic? (Verbatim Brief Content) */}
          <div className="space-y-6 border-t border-gray-200 pt-12">
            <div className="max-w-3xl space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#1F5E4B]/10 text-[#1F5E4B] text-xs font-bold rounded-full">
                <Users className="w-4 h-4" />
                <span>Multidisciplinary Advantages</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A]">
                Who Can Benefit From a Multispecialty Clinic?
              </h2>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                A multispecialty clinic can be useful for people with different healthcare needs because not every concern belongs to the same medical discipline.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-bold text-base text-[#1A1A1A]">You may be looking for:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  'A general physician for a health concern or routine assessment',
                  'A dermatologist for a skin or hair concern',
                  'A dentist for tooth, gum or oral health problems',
                  'A physiotherapist for pain, mobility or rehabilitation needs',
                  'An Ayurveda practitioner for traditional Ayurvedic consultation and wellness support',
                  'Aesthetic professionals for selected skin and cosmetic treatments'
                ].map((bullet, bIdx) => (
                  <div key={bIdx} className="bg-[#F9F7F2] p-4.5 rounded-2xl border border-gray-200 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#1F5E4B] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-800 font-medium leading-relaxed">{bullet}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3 text-gray-700 text-base leading-relaxed pt-2">
              <p className="font-medium">
                The important step is choosing care based on the actual concern rather than selecting a treatment simply because it is popular online.
              </p>
              <p className="bg-[#1F5E4B]/5 p-5 rounded-2xl border border-[#1F5E4B]/20 text-[#1A1A1A]">
                If you are unsure which department is appropriate, the clinic can help direct your enquiry. A qualified healthcare professional can then determine whether the requested treatment is suitable after assessment.
              </p>
            </div>
          </div>



          {/* Section 10: 10-Question Visible FAQ Accordion */}
          <div className="space-y-6 border-t border-gray-200 pt-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A]">
                Frequently Asked Questions
              </h2>
              <p className="text-sm text-gray-600 mt-1">
                Common questions about our healthcare services, location, and booking at RamaCare Polyclinic in Jumeirah 1.
              </p>
            </div>

            <div className="space-y-3">
              {FAQS_10.map((faq, idx) => (
                <div
                  key={idx}
                  className="border-2 border-gray-200 rounded-2xl overflow-hidden bg-white transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 font-bold text-base text-[#1A1A1A] hover:bg-gray-50 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-[#1F5E4B] transition-transform duration-200 flex-shrink-0 ${openFaq === idx ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {openFaq === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-6 pb-5 text-sm text-gray-700 leading-relaxed border-t border-gray-100 pt-4 bg-[#F9F7F2]">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* Section 11: Unified Master Location & Final CTA Section (Merges Location + Final CTA + Medical Disclaimer) */}
          <div className="bg-gradient-to-br from-[#1F5E4B] via-[#184B3C] to-[#0F3B2E] text-white p-8 sm:p-12 md:p-14 rounded-3xl space-y-10 shadow-2xl relative overflow-hidden border border-[#D4A574]/30">
            {/* Ambient Background Glow */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#D4A574]/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#10B981]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white/10 text-[#D4A574] text-xs font-bold rounded-full border border-[#D4A574]/30 uppercase tracking-wider">
                  <MapPin className="w-4 h-4" />
                  <span>Prime Jumeirah 1 Location & Contact</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                  Looking for a Polyclinic in Jumeirah 1, Dubai?
                </h2>

                <p className="text-white/90 text-base sm:text-lg leading-relaxed font-medium">
                  RamaCare Polyclinic is located at <strong className="text-white font-bold">12 Al Dhiyafah Rd, Jumeirah Terrace Building, Ground Floor, Jumeirah 1, Dubai</strong>. The location places the clinic directly within Jumeirah 1 and makes the address particularly relevant for patients searching for a polyclinic in Jumeirah 1 or healthcare services in this part of Dubai.
                </p>

                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/15 space-y-3 text-sm text-white/95 shadow-lg">
                  <p className="font-bold text-[#D4A574] uppercase text-xs tracking-wider">For appointments or questions about the appropriate department, contact the clinic directly:</p>
                  <div className="space-y-1.5 font-medium">
                    <div className="font-bold text-white text-base">RamaCare Polyclinic</div>
                    <div className="text-white/90">12 Al Dhiyafah Rd, Jumeirah Terrace Building, Ground Floor, Jumeirah 1, Dubai</div>
                    <div className="pt-1 flex flex-wrap gap-4 text-xs sm:text-sm">
                      <div>Phone / WhatsApp: <a href="tel:+971566597878" className="underline font-bold text-[#D4A574] hover:text-white">+971 56 659 7878</a></div>
                      <div>Landline: <a href="tel:+97142862006" className="underline font-bold text-[#D4A574] hover:text-white">+971 4 286 2006</a></div>
                    </div>
                    <div className="text-xs sm:text-sm">Email: <a href="mailto:query@ramacarepolyclinic.ae" className="underline font-bold text-[#D4A574] hover:text-white">query@ramacarepolyclinic.ae</a></div>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap gap-4 text-sm font-bold">
                  <Link
                    href="/book-appointment/"
                    className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#D4A574] text-gray-950 rounded-2xl font-extrabold hover:bg-[#c39563] transition-all shadow-xl hover:scale-105"
                  >
                    <Calendar className="w-5 h-5 text-gray-950" />
                    <span>Book an Appointment</span>
                  </Link>
                  <Link
                    href="/contact-us/"
                    className="inline-flex items-center gap-2.5 px-8 py-4 border-2 border-white/40 text-white rounded-2xl font-bold hover:bg-white/15 transition-all backdrop-blur-md hover:scale-105"
                  >
                    <span>Contact RamaCare Polyclinic</span>
                    <ArrowRight className="w-5 h-5 text-[#D4A574]" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Location Map Graphic Image */}
              <div className="lg:col-span-5 relative z-10">
                <div className="relative w-full aspect-square rounded-3xl overflow-hidden border-2 border-[#D4A574]/40 shadow-2xl bg-slate-900 group">
                  <img
                    src="/images/ramacare-polyclinic-location-al-dhiyafah-road.jpg"
                    alt="RamaCare Polyclinic location on Al Dhiyafah Road Jumeirah 1 Dubai"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      if (e.currentTarget.nextSibling) {
                        e.currentTarget.nextSibling.style.display = 'flex';
                      }
                    }}
                  />
                  <div className="hidden w-full h-full bg-[#1F5E4B]/20 flex-col items-center justify-center p-6 text-center border border-white/20">
                    <MapPin className="w-14 h-14 text-[#D4A574] mb-3" />
                    <span className="text-sm font-bold text-white">ramacare-polyclinic-location-al-dhiyafah-road.jpg</span>
                    <span className="text-xs text-white/70 mt-1">Alt: RamaCare Polyclinic location on Al Dhiyafah Road Jumeirah 1 Dubai</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Verbatim Medical Disclaimer */}
            <div className="pt-6 border-t border-white/20 relative z-10">
              <p className="text-xs text-white/70 leading-relaxed max-w-5xl">
                Medical information on this page is intended for general educational purposes and does not replace an individual consultation, examination or professional medical advice. Treatment suitability, expected outcomes and follow-up requirements vary between patients.
              </p>
            </div>
          </div>

        </div>
      </section>
    </Layout>
  );
}
