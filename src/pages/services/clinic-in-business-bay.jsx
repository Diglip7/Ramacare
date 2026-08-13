import React, { useState, useRef } from 'react';
import Layout from '../../../components/Layout';
import Head from 'next/head';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { useRouter } from 'next/router';

const SITE_URL = 'https://ramacarepolyclinic.ae';
const PAGE_PATH = '/services/clinic-in-business-bay/';

export default function ClinicInBusinessBayPage() {
  const router = useRouter();
  const [openFaq, setOpenFaq] = useState(null);
  const [activeTab, setActiveTab] = useState(0);
  const factorsRef = useRef(null);

  const handleBookAppointment = () => {
    router.push('/book-appointment');
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/971566597878?text=Hello%20RamaCare%20Polyclinic%2C%20I%20would%20like%20to%20inquire%20about%20your%20services.', '_blank');
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const factors = [
    {
      title: 'Qualified healthcare professionals',
      desc: 'Are the doctors and specialists appropriately licensed and experienced in their field?',
      icon: 'ShieldCheck'
    },
    {
      title: 'Range of medical services',
      desc: 'Can the clinic handle your immediate concern, and does it offer related services if follow-up care is needed?',
      icon: 'Stethoscope'
    },
    {
      title: 'Convenient location',
      desc: 'How easily can you get there from home, work, or public transport links?',
      icon: 'MapPin'
    },
    {
      title: 'Appointment availability',
      desc: 'Can you get seen within a reasonable timeframe, especially for non-emergency concerns?',
      icon: 'CalendarDays'
    },
    {
      title: 'Patient communication',
      desc: 'Does the clinic explain conditions and treatment options clearly, in a way you can actually understand?',
      icon: 'MessageSquareText'
    },
    {
      title: 'Continuity of care',
      desc: 'Can you see the same doctor for follow-up visits, or easily access your medical history?',
      icon: 'HeartHandshake'
    },
    {
      title: 'Appropriate diagnostic support',
      desc: 'Does the clinic have access to relevant labs, imaging, or referral pathways when needed?',
      icon: 'Activity'
    },
    {
      title: 'Transparent treatment information',
      desc: 'Are you given clear information about what a treatment involves before you consent to it?',
      icon: 'FileText'
    }
  ];

  const whyChoosePoints = [
    {
      title: 'Multidisciplinary healthcare',
      desc: 'Rather than operating as a single-specialty practice, RamaCare brings together general medicine, physiotherapy, dermatology, dental care, and other services in one location. This is particularly useful for families managing several types of care, or for patients whose conditions involve more than one area of the body.'
    },
    {
      title: 'Patient-centered consultations',
      desc: 'Appointments are structured to allow time for an actual conversation about your symptoms, history, and concerns, not just a quick prescription hand-off.'
    },
    {
      title: 'Experienced healthcare professionals',
      desc: "Our clinicians bring relevant training and clinical experience to their respective specialties, and we're happy to discuss specific practitioner backgrounds during your consultation or via our doctor profile pages."
    },
    {
      title: 'Personalized treatment planning',
      desc: 'No two patients with the same symptom need exactly the same treatment. We aim to tailor recommendations to your individual history, lifestyle, and preferences.'
    },
    {
      title: 'Services under one roof',
      desc: 'If your general physician recommends a referral to physiotherapy or dermatology, that referral can often happen within the same clinic, which can simplify your care.'
    },
    {
      title: 'Reasonable access from surrounding Dubai communities',
      desc: 'Jumeirah 1 sits within reach of several central Dubai neighborhoods, and many of our patients travel from Business Bay, Downtown Dubai, DIFC, and Al Wasl for appointments.'
    }
  ];

  const services = [
    {
      name: 'General Medicine',
      desc: 'Most healthcare journeys start with a general physician. Common reasons patients book a general medicine consultation include ongoing fatigue, recurring infections, unexplained pain, management of chronic conditions like diabetes or high blood pressure, and general wellness check-ups. A proper assessment usually involves discussing your symptoms and history, a physical examination where relevant, and — if needed — a referral for diagnostic tests or a specialist. Follow-up is often just as important as the first visit, particularly for ongoing conditions that need monitoring over time.',
      link: '/services/general-physician-dubai/',
      icon: 'Activity',
      ctaText: 'Explore our general medicine services in Dubai'
    },
    {
      name: 'Physiotherapy',
      desc: 'Physiotherapy can help with a wide range of musculoskeletal issues, from acute injuries to chronic pain. Every physiotherapy plan should start with an individual assessment of your movement, pain patterns, and medical history, since the right approach for a sports injury looks very different from the right approach for chronic lower back pain. Our physiotherapists work with patients on rehabilitation programs designed around their specific condition and recovery goals.',
      link: '/services/physiotherapy-dubai/',
      icon: 'Accessibility',
      ctaText: 'View physiotherapy treatment options at RamaCare'
    },
    {
      name: 'Dermatology and Skin Care',
      desc: 'Skin concerns range from routine issues like acne and eczema to more complex conditions that need careful diagnosis before any treatment begins. Because skin symptoms can sometimes indicate an underlying condition, a professional assessment is important rather than self-treating based on guesswork or information found online. Our dermatology consultations focus on identifying the cause of a concern before recommending a treatment path.',
      link: '/services/aesthetic-dermatology-dubai/',
      icon: 'Sparkles',
      ctaText: 'Meet our dermatology and skin care team'
    },
    {
      name: 'Dental Care',
      desc: 'Regular dental check-ups play a significant role in preventing more serious oral health issues down the line. RamaCare&apos;s dental services cover routine examinations, preventive cleaning, and treatment for common dental issues, with an emphasis on catching problems early rather than only intervening once they&apos;ve become painful or urgent.',
      link: '/services/dental-dubai/',
      icon: 'Smile',
      ctaText: 'Explore our dental clinic services'
    },
    {
      name: 'Gynecology',
      desc: 'Women&apos;s healthcare needs change across different life stages, and having a consistent provider for routine check-ups, reproductive health questions, or specific concerns can make a real difference in comfort and continuity. We encourage patients to consult a gynecologist for anything from routine screening to more specific symptoms that warrant professional evaluation.',
      link: '/services/',
      icon: 'Heart',
      ctaText: 'About gynecology consultations at RamaCare'
    },
    {
      name: 'Pediatrics',
      desc: 'Children have healthcare needs that differ meaningfully from adults, from routine growth and development checks to managing common childhood illnesses. Having a pediatric-aware provider who can track a child&apos;s health over time, rather than seeing a different doctor at every visit, tends to support better long-term outcomes.',
      link: '/services/',
      icon: 'Baby',
      ctaText: 'Pediatric care for your child'
    },
    {
      name: 'Ayurveda',
      desc: 'RamaCare also offers Ayurveda as a complementary wellness option for patients interested in traditional approaches to health and balance. It&apos;s important to be clear here: Ayurveda is a traditional system of wellness practices, and while many patients find value in it as a complementary approach, it should not be treated as a substitute for evidence-based medical diagnosis or treatment where a medical condition is involved. We recommend discussing your full health picture with our team so you can decide, with proper information, whether an Ayurvedic approach, conventional care, or a combination fits your situation.',
      link: '/services/ayurveda-dubai/',
      icon: 'Leaf',
      ctaText: 'Learn more about Ayurvedic treatment at RamaCare'
    }
  ];

  const firstVisitSteps = [
    { title: 'Registration', desc: 'You\'ll complete basic registration details, including any relevant insurance information.' },
    { title: 'Medical history', desc: 'We\'ll ask about your general health background, existing conditions, and any medications you take.' },
    { title: 'Discussion of symptoms', desc: 'This is your chance to explain what\'s brought you in, in as much detail as feels relevant.' },
    { title: 'Physical examination where appropriate', desc: 'Depending on your concern, the clinician may carry out a relevant physical examination.' },
    { title: 'Diagnostic recommendations when necessary', desc: 'If further tests are needed, your doctor will explain why and what they involve.' },
    { title: 'Treatment discussion', desc: 'You\'ll be talked through the recommended options, including what each one involves.' },
    { title: 'Follow-up planning', desc: 'If ongoing care is needed, you\'ll leave with a clear idea of next steps.' }
  ];

  const faqData = [
    { q: 'Where can I find a clinic near Business Bay?', a: 'RamaCare Polyclinic is located in Jumeirah 1, a short drive from Business Bay. While we\'re not physically inside Business Bay, many patients from the area travel to our clinic for multidisciplinary care, and we\'re happy to advise on the route from your specific location.' },
    { q: 'Does RamaCare Polyclinic serve patients from Business Bay?', a: 'Yes. A significant number of our patients live or work in and around Business Bay, along with Downtown Dubai and other central communities. We welcome patients regardless of which Dubai neighborhood they\'re coming from.' },
    { q: 'What healthcare services are available at RamaCare?', a: 'RamaCare offers a multidisciplinary range of services, which may include general medicine, physiotherapy, dermatology, dental care, gynecology, pediatrics, and Ayurveda. Availability of specific specialties can change, so it\'s best to confirm current offerings when booking.' },
    { q: 'Can I consult a general physician near Business Bay?', a: 'Yes, our general medicine team sees patients for routine concerns, persistent symptoms, and preventive checks. If you\'re near Business Bay, our Jumeirah 1 clinic is a reasonably accessible option for general physician consultations.' },
    { q: 'Can I get physiotherapy near Business Bay?', a: 'Physiotherapy is available at RamaCare\'s Jumeirah 1 location, and patients from Business Bay regularly travel here for assessment and treatment of musculoskeletal concerns, sports injuries, and post-injury rehabilitation.' },
    { q: 'Does RamaCare provide dental care?', a: 'Yes, where dental services are part of our current offering, we provide routine examinations and preventive dental care, along with treatment for common dental concerns. Please confirm specific dental services when booking your appointment.' },
    { q: 'Does RamaCare offer Ayurveda?', a: 'RamaCare offers Ayurveda as a complementary wellness service for patients interested in traditional approaches to health. It\'s offered alongside, not as a replacement for, conventional medical care where a diagnosed condition requires it.' },
    { q: 'How can I book an appointment?', a: 'You can book an appointment by contacting RamaCare Polyclinic directly through our website\'s booking page or by calling our clinic in Jumeirah 1. Our team can help you find a suitable time and the right specialist for your concern.' },
    { q: 'What should I bring to my first appointment?', a: 'It\'s helpful to bring a valid ID, your insurance card if applicable, a list of any current medications, and any relevant previous medical records or test results. This helps your clinician get a fuller picture of your health history.' },
    { q: 'Can I see different specialists at the same clinic?', a: 'Yes, one of the practical benefits of a multidisciplinary clinic like RamaCare is that if your doctor recommends a referral to another specialty we offer, that can often be arranged within the same location.' },
    { q: 'Is RamaCare suitable for family healthcare?', a: 'Many families choose RamaCare because it offers services relevant to different age groups and health needs under one roof, from pediatric care for children to general medicine and specialist services for adults.' },
    { q: 'How do I choose the right healthcare provider in Dubai?', a: 'Consider the clinician\'s relevant qualifications, the range of services offered, how accessible the location is for you, how appointments and follow-ups are handled, and how clearly the clinic communicates treatment information. No single factor should be the only one you weigh.' }
  ];

  return (
    <Layout>
      <Head>
        <title key="title">Clinic in Business Bay | RamaCare Polyclinic, Jumeirah 1, Dubai</title>
        <meta
          name="description"
          content="Searching for a clinic in Business Bay? RamaCare Polyclinic in Jumeirah 1 offers multidisciplinary care for nearby residents. Book your consultation today."
          key="description"
        />
        <link rel="canonical" href={`${SITE_URL}${PAGE_PATH}`} />
        <script
          key="schema-webpage"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              '@id': `${SITE_URL}${PAGE_PATH}#webpage`,
              url: `${SITE_URL}${PAGE_PATH}`,
              name: 'Clinic in Business Bay: Multidisciplinary Healthcare at RamaCare Polyclinic',
              description: 'Searching for a clinic in Business Bay? RamaCare Polyclinic in Jumeirah 1 offers multidisciplinary care for nearby residents.',
              inLanguage: 'en-AE',
              isPartOf: { '@id': `${SITE_URL}/#website` },
              about: { '@id': `${SITE_URL}/#organization` },
              datePublished: '2026-08-11',
              dateModified: '2026-08-11'
            })
          }}
        />
        <script
          key="schema-breadcrumb"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
                { '@type': 'ListItem', position: 2, name: 'Locations & Services', item: `${SITE_URL}/services/` },
                { '@type': 'ListItem', position: 3, name: 'Clinic in Business Bay', item: `${SITE_URL}${PAGE_PATH}` }
              ]
            })
          }}
        />
        <script
          key="schema-faq"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: faqData.map((f) => ({
                '@type': 'Question',
                name: f.q,
                acceptedAnswer: { '@type': 'Answer', text: f.a }
              }))
            })
          }}
        />
      </Head>

      {/* ============ NEW VISUALLY DISTINCTIVE HERO CONCEPT ============ */}
      <section className="relative min-h-[90vh] bg-[#FDFCF7] pt-12 md:pt-16 pb-20 px-6 md:px-12 flex flex-col justify-between border-b border-[#E6E2D8] overflow-hidden">
        {/* Decorative Grid and Soft Gradients */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1F5E4B/3_1px,transparent_1px),linear-gradient(to_bottom,#1F5E4B/3_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#1F5E4B]/5 filter blur-3xl" />
        <div className="absolute bottom-10 left-10 w-[400px] h-[400px] rounded-full bg-[#D4A574]/5 filter blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto w-full flex-grow flex flex-col justify-center">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-xs font-medium text-[#5F5F5F]">
            <Link href="/" className="hover:text-[#1F5E4B] transition-colors">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/services" className="hover:text-[#1F5E4B] transition-colors">Services</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page" className="text-[#1F5E4B]">Clinic in Business Bay</span>
          </nav>

          {/* Tagline */}
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-[#D4A574]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#1F5E4B]">RamaCare Polyclinic Dubai</span>
            <span className="text-xs font-semibold text-[#D4A574] px-2.5 py-0.5 rounded-full bg-[#D4A574]/10">Jumeirah 1</span>
          </div>

          {/* Distinctive Centered Editorial Header */}
          <div className="max-w-5xl mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans text-[#1A1A1A] leading-[1.1] font-extrabold tracking-tight">
              Clinic in Business Bay: <span className="text-[#1F5E4B] italic font-serif font-normal">Multidisciplinary Healthcare</span> at RamaCare Polyclinic
            </h1>
          </div>

          {/* Asymmetric Two-Column Body Content & Interactive Quick Card */}
          <div className="grid lg:grid-cols-[1.25fr_0.75fr] gap-12 lg:gap-20 items-stretch">
            {/* Column 1: Editorial Paragraphs */}
            <div className="space-y-6 text-[#5F5F5F] text-base md:text-lg leading-relaxed font-light font-sans flex flex-col justify-center">
              <p className="border-l-4 border-[#1F5E4B] pl-6 py-2 bg-[#1F5E4B]/5 rounded-r-xl">
                If you live or work in Business Bay and are searching for a clinic in Business Bay, you&apos;re probably looking for a healthcare provider that&apos;s easy to reach, offers more than one type of medical service, and treats you as a person rather than a number in a queue.
              </p>
              <p>
                Business Bay itself is primarily a commercial and residential high-rise district, so many people who search for healthcare here actually end up choosing a clinic in a nearby, easily accessible neighborhood rather than one physically inside the district.
              </p>
              <p>
                <strong>RamaCare Polyclinic</strong> is one such option. Our clinic is located in Jumeirah 1, Dubai, a short drive from Business Bay, Downtown Dubai, and surrounding communities. We want to be upfront about that from the start: we are not physically situated inside Business Bay, but we do serve patients who travel from Business Bay and nearby areas for the range of services we provide under one roof. This page explains what we offer, how our services work, and how to decide whether RamaCare is the right healthcare provider for your needs.
              </p>
            </div>

            {/* Column 2: Distinctive High-End Interactive Action Panel */}
            <div className="relative flex flex-col justify-between bg-[#1F5E4B] text-white rounded-3xl p-8 md:p-10 shadow-2xl overflow-hidden group">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#D4A574_0%,transparent_60%)] opacity-30" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/5 rounded-full filter blur-xl" />

              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider text-[#D4A574] font-bold">Location &amp; Booking</span>
                  <div className="flex items-center gap-1.5 text-xs text-[#4ADE80]">
                    <span className="w-2 h-2 rounded-full bg-[#4ADE80] animate-pulse" />
                    Open Daily: 10AM - 10PM
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold font-sans">Travel from Business Bay</h3>
                  <p className="text-sm text-white/80 font-light leading-relaxed">
                    Our medical center in Jumeirah 1 is a well-connected drive from your office or residence. We provide full multi-specialty care in a premium environment.
                  </p>
                </div>

                <div className="flex flex-col gap-3 pt-4">
                  <button
                    onClick={handleBookAppointment}
                    className="w-full bg-[#D4A574] text-white hover:bg-[#bfa068] transition-all py-4 px-6 rounded-xl font-bold text-sm uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <LucideIcons.CalendarDays className="w-4 h-4" />
                    Book Consultation
                  </button>
                  <button
                    onClick={handleWhatsAppClick}
                    className="w-full bg-white/10 text-white hover:bg-white/20 border border-white/20 transition-all py-4 px-6 rounded-xl font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <LucideIcons.MessageSquare className="w-4 h-4" />
                    WhatsApp Booking
                  </button>
                </div>
              </div>

              <div className="relative z-10 mt-8 pt-6 border-t border-white/10 flex items-center gap-3">
                <LucideIcons.MapPin className="w-5 h-5 text-[#D4A574] shrink-0" />
                <span className="text-xs text-white/70 font-light">
                  Ground Floor, Jumeirah Terrace Building, Jumeirah 1, Dubai
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Small Navigation/Scroll Hint */}
        <div className="relative z-10 max-w-7xl mx-auto w-full mt-12 flex justify-between items-center text-xs text-[#5F5F5F] border-t border-[#E6E2D8] pt-6 font-semibold uppercase tracking-wider">
          <span className="flex items-center gap-2">
            <LucideIcons.Stethoscope className="w-4 h-4 text-[#1F5E4B]" />
            DHA Licensed Multi-Specialty Clinic
          </span>
          <span className="flex items-center gap-1">
            Scroll to explore <LucideIcons.ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </span>
        </div>
      </section>

      {/* ============ DECISION FACTORS TABS (MODERN & NOT REPETITIVE) ============ */}
      <section className="py-24 bg-white border-b border-[#E6E2D8]" ref={factorsRef}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <span className="text-xs uppercase tracking-widest font-bold text-[#D4A574]">Key Patient Checklist</span>
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-[#1A1A1A] tracking-tight">
              Looking for a Clinic in Business Bay?
            </h2>
            <p className="text-[#5F5F5F] leading-relaxed font-light">
              When people search for a clinic near their home or office, they&apos;re usually weighing a similar set of factors, whether they realize it or not. Before booking an appointment anywhere, it&apos;s worth thinking through these elements:
            </p>
          </div>

          <div className="grid lg:grid-cols-[1fr_1.4fr_0.9fr] gap-8 items-stretch">
            {/* Left Nav Tabs */}
            <div className="flex flex-col gap-2 justify-center">
              {factors.map((item, idx) => {
                const IconComponent = LucideIcons[item.icon];
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveTab(idx)}
                    className={`flex items-center gap-4 text-left p-4 rounded-xl transition-all duration-300 ${
                      activeTab === idx
                        ? 'bg-[#1F5E4B] text-white shadow-md transform translate-x-2'
                        : 'bg-[#FDFCF7] hover:bg-[#F5F1EA] text-[#1A1A1A] border border-[#E9E2D6]'
                    }`}
                  >
                    {IconComponent && <IconComponent className={`w-5 h-5 ${activeTab === idx ? 'text-white' : 'text-[#1F5E4B]'}`} />}
                    <span className="font-semibold text-xs md:text-sm tracking-wide">{item.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Middle Display Area */}
            <div className="bg-[#FDFCF7] border border-[#E9E2D6] p-8 md:p-10 rounded-3xl min-h-[300px] flex flex-col justify-between relative overflow-hidden shadow-sm">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4A574]/5 rounded-bl-full" />
              <div className="space-y-6 relative z-10">
                <span className="text-xs uppercase tracking-widest text-[#D4A574] font-bold">Priority Detail {activeTab + 1}</span>
                <h3 className="text-xl md:text-2xl font-bold text-[#1A1A1A]">{factors[activeTab].title}</h3>
                <p className="text-sm md:text-base text-[#5F5F5F] leading-relaxed font-light">
                  {factors[activeTab].desc}
                </p>
              </div>
              <div className="pt-6 border-t border-[#E9E2D6] mt-8 text-xs text-[#5F5F5F] italic">
                These factors matter more than proximity alone. A clinic that&apos;s a few extra minutes away but offers better continuity of care, clearer communication, and the right specialists can often serve you better than the nearest option.
              </div>
            </div>

            {/* Right Image Block */}
            <div className="hidden lg:block relative rounded-3xl overflow-hidden border border-[#E9E2D6] shadow-sm">
              <img
                src="/images/general-physician-consultation-ramacare.jpg"
                alt="General physician consulting a patient at RamaCare Polyclinic"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F5E4B]/80 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-6 right-6 text-white text-xs font-bold uppercase tracking-wider text-center">
                Patient-Centric Consultations
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ============ WHY RAMACARE (ASYMMETRICAL GRAPHIC GRID) ============ */}
      <section className="py-24 bg-[#FDFCF7] border-b border-[#E6E2D8]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <span className="text-xs uppercase tracking-widest font-bold text-[#1F5E4B]">Why Patients Choose Us</span>
              <h2 className="text-3xl md:text-4xl font-sans font-bold text-[#1A1A1A]">
                Why Patients Near Business Bay May Choose RamaCare Polyclinic
              </h2>
              <p className="text-[#5F5F5F] leading-relaxed font-light">
                RamaCare Polyclinic was built around a fairly simple idea: patients shouldn&apos;t have to juggle multiple clinics across the city for related health needs. Here&apos;s what that looks like in practice:
              </p>

              <div className="space-y-6">
                {whyChoosePoints.slice(0, 3).map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1F5E4B]/10 text-[#1F5E4B] flex items-center justify-center font-bold text-sm">
                      {idx + 1}
                    </span>
                    <div>
                      <h4 className="font-bold text-[#1A1A1A] text-base mb-1">{item.title}</h4>
                      <p className="text-sm text-[#5F5F5F] leading-relaxed font-light">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-6">
                {whyChoosePoints.slice(3).map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#D4A574]/10 text-[#D4A574] flex items-center justify-center font-bold text-sm">
                      {idx + 4}
                    </span>
                    <div>
                      <h4 className="font-bold text-[#1A1A1A] text-base mb-1">{item.title}</h4>
                      <p className="text-sm text-[#5F5F5F] leading-relaxed font-light">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-6 bg-white border border-[#E9E2D6] rounded-2xl italic text-xs text-[#5F5F5F] shadow-sm">
                We won&apos;t tell you we&apos;re the &quot;best clinic in Dubai&quot; or promise guaranteed results — no responsible healthcare provider can honestly make that claim. What we can tell you is what services we offer and let you make an informed decision.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ HEALTHCARE SERVICES (MODERN GRID CAROUSEL) ============ */}
      <section className="py-24 bg-white border-b border-[#E6E2D8]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16 space-y-4">
            <span className="text-xs uppercase tracking-widest font-bold text-[#D4A574]">Clinical Specialties</span>
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-[#1A1A1A] tracking-tight">
              Healthcare Services Available at RamaCare Polyclinic
            </h2>
            <p className="text-[#5F5F5F] leading-relaxed font-light">
              Explore the range of general and specialized clinical offerings available to patients traveling from Business Bay and surrounding Dubai communities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc, idx) => {
              const IconComponent = LucideIcons[svc.icon];
              return (
                <div
                  key={idx}
                  className="group relative border border-[#E9E2D6] rounded-3xl overflow-hidden bg-white hover:shadow-xl transition-all duration-300 flex flex-col h-full p-8"
                >
                  <div className="flex items-center justify-between mb-6">
                    <span className="w-12 h-12 rounded-2xl bg-[#1F5E4B]/10 text-[#1F5E4B] flex items-center justify-center">
                      {IconComponent && <IconComponent className="w-6 h-6" />}
                    </span>
                    <span className="text-[10px] uppercase tracking-widest text-[#D4A574] font-bold">Specialty {idx + 1}</span>
                  </div>
                  <div className="flex-grow flex flex-col justify-between space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">{svc.name}</h3>
                      <p className="text-sm text-[#5F5F5F] leading-relaxed font-light">{svc.desc}</p>
                    </div>
                    <div className="pt-4 border-t border-[#F5F1EA]">
                      {svc.link && svc.link !== '/services/' && (
                        <Link
                          href={svc.link}
                          className="inline-flex items-center gap-1.5 text-[#1F5E4B] font-bold text-xs uppercase tracking-wider hover:underline"
                        >
                          Learn More <LucideIcons.ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ SERVICE SPOTLIGHTS (GENERAL & PHYSIO) ============ */}
      <section className="py-24 bg-[#FDFCF7] border-b border-[#E6E2D8]">
        <div className="max-w-7xl mx-auto px-6 space-y-24">
          
          {/* General Medicine Spotlight */}
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#1F5E4B]/5 border border-[#1F5E4B]/10 px-3 py-1 rounded-full text-xs font-bold text-[#1F5E4B] uppercase tracking-wider">
                Primary Care Focus
              </div>
              <h2 className="text-3xl md:text-4xl font-sans font-bold text-[#1A1A1A]">
                General Physician Near Business Bay
              </h2>
              <p className="text-[#5F5F5F] leading-relaxed font-light">
                A general physician is often the right first stop for most non-emergency health concerns. It may be worth booking an appointment if you&apos;re dealing with:
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  'Routine health concerns that haven\'t resolved',
                  'Persistent symptoms lasting more than a few days',
                  'A need for preventive health checks or screenings',
                  'Common infections (colds, flu, or UTIs)',
                  'General health assessments before travel or work',
                  'Symptoms that may need a referral to a specialist'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-sm text-[#5F5F5F]">
                    <LucideIcons.CheckCircle2 className="w-4 h-4 text-[#1F5E4B] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-[#5F5F5F] leading-relaxed italic bg-white p-4 rounded-xl border border-[#E9E2D6]">
                We can&apos;t diagnose you through a web page, and we won&apos;t try to. What a general physician consultation can do is help you understand what&apos;s going on and what the appropriate next steps look like, whether that&apos;s simple reassurance, a short course of treatment, or a referral for further investigation.
              </p>
              <div className="pt-2">
                <Link
                  href="/services/general-physician-dubai/"
                  className="inline-flex items-center gap-2 bg-[#1F5E4B] text-white px-6 py-3 rounded-lg font-bold text-xs uppercase tracking-wider hover:bg-[#1a4f40] transition-colors"
                >
                  Explore General Medicine
                </Link>
              </div>
            </div>
            <div>
              <img
                src="/images/general-physician-consultation-ramacare.jpg"
                alt="General physician consulting a patient at RamaCare Polyclinic"
                className="w-full h-80 object-cover rounded-3xl border border-[#E9E2D6] shadow-md"
              />
            </div>
          </div>

          {/* Physiotherapy Spotlight */}
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-16 items-center pt-8">
            <div className="order-2 lg:order-1">
              <img
                src="/images/physiotherapy-treatment-ramacare-dubai.jpg"
                alt="Physiotherapist assisting a patient during a rehabilitation session"
                className="w-full h-80 object-cover rounded-3xl border border-[#E9E2D6] shadow-md"
              />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 bg-[#D4A574]/10 border border-[#D4A574]/20 px-3 py-1 rounded-full text-xs font-bold text-[#D4A574] uppercase tracking-wider">
                Rehabilitation &amp; Movement
              </div>
              <h2 className="text-3xl md:text-4xl font-sans font-bold text-[#1A1A1A]">
                Physiotherapy Near Business Bay
              </h2>
              <p className="text-[#5F5F5F] leading-relaxed font-light">
                What should you look for in physiotherapy care near Business Bay? A good starting point is a clinic that begins with a thorough individual assessment rather than a generic exercise sheet, and that adjusts your treatment plan as your condition changes. Patients typically seek physiotherapy for:
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  'Back pain, whether from posture, injury, or a chronic condition',
                  'Neck pain, often linked to desk work or screen time',
                  'Muscle strains and general muscular discomfort',
                  'Joint pain or stiffness',
                  'Sports-related injuries',
                  'Recovery and rehabilitation after surgery or injury',
                  'General mobility concerns, including age-related changes'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-sm text-[#5F5F5F]">
                    <LucideIcons.CheckCircle2 className="w-4 h-4 text-[#D4A574] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-[#5F5F5F] leading-relaxed italic bg-white p-4 rounded-xl border border-[#E9E2D6]">
                The right treatment plan depends entirely on your specific condition, so an initial assessment always comes before any exercise or manual therapy recommendations.
              </p>
              <div className="pt-2">
                <Link
                  href="/services/physiotherapy-dubai/"
                  className="inline-flex items-center gap-2 bg-white border border-[#D4A574] text-[#D4A574] px-6 py-3 rounded-lg font-bold text-xs uppercase tracking-wider hover:bg-[#D4A574]/5 transition-colors"
                >
                  Explore Physiotherapy Options
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ LOCATION MATTERS & ROUTE CHECK ============ */}
      <section className="py-24 bg-white border-b border-[#E6E2D8]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
            <div className="space-y-8">
              <span className="text-xs uppercase tracking-widest font-bold text-[#1F5E4B]">Accessibility &amp; Travel</span>
              <h2 className="text-3xl md:text-4xl font-sans font-bold text-[#1A1A1A]">
                Why Location Matters for Healthcare
              </h2>
              <div className="space-y-4 text-[#5F5F5F] leading-relaxed font-light text-base">
                <p>
                  Location isn&apos;t just about convenience for a single visit — it affects whether you&apos;re likely to follow through on ongoing care. Patients from Business Bay, Downtown Dubai, Jumeirah, Al Wasl, DIFC, and other nearby communities often weigh accessibility alongside the quality of care available, since a clinic that&apos;s difficult to reach can quietly discourage follow-up appointments, routine checkups, or timely treatment for developing symptoms.
                </p>
                <p>
                  We won&apos;t quote a specific travel time from Business Bay to our Jumeirah 1 clinic, since actual travel time depends heavily on traffic, time of day, and your exact starting point in Business Bay. What we can say is that Jumeirah 1 is a well-connected, centrally located neighborhood that many patients from Business Bay already travel to.
                </p>
              </div>

              {/* Quick Route Visual Mockup */}
              <div className="bg-[#FDFCF7] border border-[#E9E2D6] p-6 rounded-2xl space-y-4">
                <h4 className="font-bold text-sm text-[#1A1A1A] flex items-center gap-2">
                  <LucideIcons.Map className="w-4 h-4 text-[#1F5E4B]" />
                  Check Your Route
                </h4>
                <p className="text-xs text-[#5F5F5F] leading-relaxed">
                  We encourage you to check the route yourself using your preferred maps app before your first visit to ensure it integrates seamlessly with your daily schedule.
                </p>
                <a
                  href="https://maps.google.com/?q=RamaCare+Polyclinic+Jumeirah+1+Dubai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#1F5E4B] font-bold uppercase tracking-wider hover:underline"
                >
                  View on Google Maps <LucideIcons.ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="border border-[#E9E2D6] rounded-3xl p-4 bg-[#FDFCF7] shadow-lg overflow-hidden">
                <div className="w-full h-80 rounded-2xl overflow-hidden border border-[#E9E2D6] relative">
                  <iframe
                    title="RamaCare Polyclinic Location Map"
                    src="https://www.google.com/maps?q=RamaCare+Polyclinic+Jumeirah+1+Dubai&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
  />
</div>
                <div className="flex items-center justify-between mt-3 px-2">
                  <p className="text-xs text-[#5F5F5F] leading-relaxed italic">
                    Ground Floor, Jumeirah Terrace Building, Jumeirah 1, Dubai
                  </p>
                  <a
                    href="https://maps.google.com/?q=RamaCare+Polyclinic+Jumeirah+1+Dubai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#1F5E4B] font-bold uppercase tracking-wider hover:underline shrink-0"
                  >
                    Open Map <LucideIcons.ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CLINIC SELECTION CRITERIA ============ */}
      <section className="py-24 bg-[#FDFCF7] border-b border-[#E6E2D8]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16 space-y-4">
            <span className="text-xs uppercase tracking-widest font-bold text-[#D4A574]">How to Choose</span>
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-[#1A1A1A]">
              How to Choose the Right Clinic Near Business Bay
            </h2>
            <p className="text-[#5F5F5F] leading-relaxed font-light">
              Choosing a clinic is a personal decision, but a few practical checks can help you make a more informed one:
            </p>
          </div>

          <div className="grid lg:grid-cols-[2fr_1fr] gap-8 items-stretch">
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { num: '1', title: 'Medical Specialty', text: 'Does the clinic actually treat the condition or concern you have?' },
                { num: '2', title: 'Clinician Qualifications', text: 'Are the doctors licensed to practice in the UAE, and do their qualifications match their specialty?' },
                { num: '3', title: 'Range of Services', text: 'Would you benefit from having multiple specialties available in one place, in case you need a referral?' },
                { num: '4', title: 'Location & Accessibility', text: 'How will you actually get there, and does that fit your routine?' },
                { num: '5', title: 'Appointment Process', text: 'Is booking straightforward, whether by phone, online, or in person?' },
                { num: '6', title: 'Follow-Up Care', text: 'Will you be able to return to the same provider if your condition needs ongoing management?' },
                { num: '7', title: 'Patient Communication', text: 'Do staff and clinicians explain things clearly and answer your questions?' },
                { num: '8', title: 'Transparent Information', text: 'Is pricing, treatment information, and clinic policy communicated openly before you commit?' }
              ].map((item, idx) => (
                <div key={idx} className="border border-[#E9E2D6] bg-white p-6 rounded-2xl flex flex-col justify-between space-y-4 shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-2xl font-serif font-extrabold text-[#D4A574]/40">{item.num}</span>
                  <div className="space-y-2">
                    <h4 className="font-bold text-sm text-[#1A1A1A]">{item.title}</h4>
                    <p className="text-xs text-[#5F5F5F] leading-relaxed font-light">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative rounded-3xl overflow-hidden border border-[#E9E2D6] shadow-sm min-h-[400px]">
              <img
                src="/images/dental-checkup-ramacare-polyclinic.jpg"
                alt="Dentist performing a routine dental check-up at RamaCare"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F5E4B]/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white text-xs space-y-1">
                <span className="font-bold uppercase tracking-wider block">Dental Care &amp; Cleanings</span>
                <p className="text-[10px] text-white/80 font-light">Prevention-focused dentistry under one roof.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FIRST VISIT TIMELINE ============ */}
      <section className="py-24 bg-white border-b border-[#E6E2D8]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-16 items-start">
            <div className="sticky top-32 space-y-6">
              <span className="text-xs uppercase tracking-widest font-bold text-[#1F5E4B]">Patient Experience</span>
              <h2 className="text-3xl md:text-4xl font-sans font-bold text-[#1A1A1A] tracking-tight">
                Your First Visit to a Clinic
              </h2>
              <p className="text-[#5F5F5F] leading-relaxed font-light">
                If you haven&apos;t been to RamaCare before, here&apos;s generally what you can expect during your first consultation. A good consultation should leave you with a clear understanding of your situation, not just a prescription.
              </p>
              <div className="p-6 bg-[#FDFCF7] border border-[#E9E2D6] rounded-2xl text-xs text-[#5F5F5F] italic">
                There&apos;s no need to feel rushed through any of these stages. We prioritize patient comfort and comprehensive clinical transparency.
              </div>
            </div>

            <div className="relative border-l border-[#E6E2D8] pl-8 space-y-12">
              {firstVisitSteps.map((step, idx) => (
                <div key={idx} className="relative">
                  {/* Timeline node */}
                  <span className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full bg-[#1F5E4B] text-white flex items-center justify-center font-bold text-xs">
                    {idx + 1}
                  </span>
                  <div className="space-y-2">
                    <h4 className="font-bold text-[#1A1A1A] text-lg">{step.title}</h4>
                    <p className="text-sm text-[#5F5F5F] leading-relaxed font-light">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ WHEN TO SEE A DOCTOR ============ */}
      <section className="py-24 bg-[#FDFCF7] border-b border-[#E6E2D8]">
        <div className="max-w-5xl mx-auto px-6 space-y-12 text-center">
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-widest font-bold text-[#D4A574]">Clinical Guidance</span>
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-[#1A1A1A]">
              When Should You See a Doctor?
            </h2>
            <p className="text-[#5F5F5F] leading-relaxed font-light max-w-3xl mx-auto">
              It&apos;s not always obvious when a symptom warrants a professional opinion versus simply monitoring it at home. As a general guide, it&apos;s worth booking a consultation if a symptom is:
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: 'Persistent', text: 'Lasting longer than you would expect for a minor issue.' },
              { title: 'Worsening', text: 'Getting more severe over time rather than improving.' },
              { title: 'Unexplained', text: 'Appearing suddenly without an obvious or clear cause.' },
              { title: 'Affecting Daily Life', text: 'Interfering with work, sleep, mobility, or general functioning.' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white border border-[#E9E2D6] p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-[#1F5E4B] text-sm mb-2">{item.title}</h4>
                <p className="text-xs text-[#5F5F5F] leading-relaxed font-light">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="p-6 bg-red-50 border border-red-100 rounded-2xl text-left max-w-4xl mx-auto">
            <p className="text-xs text-red-800 leading-relaxed font-medium">
              <strong>Emergency Disclaimer:</strong> If you&apos;re experiencing symptoms that could indicate a medical emergency — such as chest pain, difficulty breathing, severe bleeding, sudden confusion, or loss of consciousness — please call the UAE emergency services (<strong>998</strong> for ambulance) or go to your nearest emergency room immediately. This page is intended for general informational purposes only and does not replace urgent or emergency medical care.
            </p>
          </div>
        </div>
      </section>

      {/* ============ ABOUT RAMACARE ============ */}
      <section className="py-24 bg-white border-b border-[#E6E2D8]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1fr_1.2fr] gap-16 items-center">
          <div>
            <img
              src="/images/ramacare-polyclinic-jumeirah-1-dubai.jpg"
              alt="Rama Care Polyclinic reception in Jumeirah 1, Dubai"
              className="w-full h-96 object-cover rounded-3xl border border-[#E9E2D6] shadow-lg"
            />
          </div>
          <div className="space-y-6">
            <span className="text-xs uppercase tracking-widest font-bold text-[#1F5E4B]">About Our Medical Center</span>
            <h2 className="text-3xl font-sans font-bold text-[#1A1A1A]">
              About RamaCare Polyclinic
            </h2>
            <div className="space-y-4 text-sm text-[#5F5F5F] leading-relaxed font-light">
              <p>
                RamaCare Polyclinic takes a multidisciplinary approach to healthcare, bringing together several medical and wellness specialties in one clinic setting. Our aim is to make it easier for patients to access related services without having to coordinate between multiple, disconnected providers across the city.
              </p>
              <p>
                Our clinic is located in Jumeirah 1, Dubai, UAE. We are transparent about this location because we believe patients deserve accurate information before deciding where to seek care — including patients searching specifically for a clinic in Business Bay. While we&apos;re not situated inside Business Bay itself, we regularly serve patients from Business Bay and the surrounding Dubai communities, who choose to travel to us based on the range of services and continuity of care we offer.
              </p>
            </div>
            <div className="pt-2">
              <Link
                href="/polyclinic-in-dubai/"
                className="inline-flex items-center gap-1.5 text-xs text-[#1F5E4B] font-bold uppercase tracking-wider hover:underline"
              >
                Learn More About Our Polyclinic <LucideIcons.ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FAQs SECTION ============ */}
      <section className="py-24 bg-[#FDFCF7] border-b border-[#E6E2D8]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <span className="text-xs uppercase tracking-widest font-bold text-[#D4A574]">Got Questions?</span>
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-[#1A1A1A]">
              Clinic in Business Bay: FAQs
            </h2>
            <p className="text-[#5F5F5F] leading-relaxed font-light">
              Here are answers to the most common questions from patients living or working in Business Bay about our clinic and services.
            </p>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, idx) => (
              <div
                key={idx}
                className="border border-[#E9E2D6] rounded-2xl bg-white overflow-hidden shadow-sm transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="flex items-center justify-between w-full p-6 text-left"
                >
                  <span className="font-bold text-[#1A1A1A] text-sm md:text-base pr-4">{faq.q}</span>
                  <span className={`p-1.5 rounded-full bg-[#1F5E4B]/5 text-[#1F5E4B] transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`}>
                    <LucideIcons.ChevronDown className="w-4 h-4" />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-6 pb-6 border-t border-[#F5F1EA] pt-4">
                        <p className="text-sm text-[#5F5F5F] leading-relaxed font-light">{faq.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CALL TO ACTION (CTA) ============ */}
      <section className="relative py-24 bg-[#1F5E4B] text-white overflow-hidden text-center font-sans">
        {/* Background graphics */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-white filter blur-2xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#D4A574] filter blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 space-y-8">
          <span className="text-xs uppercase tracking-widest font-bold text-[#D4A574]">Get Started Today</span>
          <h2 className="text-4xl md:text-5xl font-sans font-extrabold tracking-tight">
            Ready to Book Your Consultation?
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto leading-relaxed font-light text-base md:text-lg">
            If you&apos;re looking for a healthcare provider that can support you across general medicine, physiotherapy, dermatology, dental care, and other specialties, we&apos;d be glad to help.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Link
              href="/book-appointment/"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#1F5E4B] px-8 py-4 rounded-xl font-bold hover:bg-[#FDFCF7] hover:shadow-lg transition-all text-sm uppercase tracking-wider"
            >
              <LucideIcons.CalendarRange className="w-4 h-4" />
              Book Your Appointment Online
            </Link>
            <button
              onClick={handleWhatsAppClick}
              className="inline-flex items-center justify-center gap-2 bg-[#D4A574] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#bfa068] hover:shadow-lg transition-all text-sm uppercase tracking-wider"
            >
              <LucideIcons.MessageSquareText className="w-4 h-4" />
              Chat on WhatsApp
            </button>
          </div>

          <div className="pt-8 text-xs text-white/50 space-y-2">
            <p>Or call our reception desk directly in Jumeirah 1.</p>
            <div className="flex justify-center gap-6">
              <Link href="/doctors/" className="hover:underline text-white/70">View Individual Doctor Profiles</Link>
              <span>•</span>
              <Link href="/contact-us/" className="hover:underline text-white/70">Get In Touch With Our Team</Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
