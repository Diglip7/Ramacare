import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../../../components/Layout';
import BookConsultation from '../../../components/BookConsultation';
import DoctorsSection from '../../../components/DoctorsSection';
import ContentReviewBadge from '../../../components/ContentReviewBadge';
import { DOCTOR_GROUPS, DOCTORS } from '../../data/doctors';
import {
  Calendar,
  CheckCircle,
  ChevronDown,
  ChevronRight,
  Search,
  AlertTriangle,
  Moon,
  Clock,
  UserCheck,
  ShieldCheck,
  Activity,
  Heart,
  TrendingUp,
  MapPin,
  Sparkles
} from 'lucide-react';

export default function InsomniaTreatmentPage() {
  const [activeTab, setActiveTab] = useState('acute');
  const [faqSearch, setFaqSearch] = useState('');
  const [activeFaq, setActiveFaq] = useState(null);

  const seo = {
    title: "Insomnia Treatment Dubai | RamaCare Sleep Wellness Clinic",
    metaDescription: "Struggling with sleep? Get personalized Insomnia Treatment Dubai care from DHA-licensed experts at RamaCare. Book your sleep wellness consultation today.",
    canonical: "https://ramacarepolyclinic.ae/services/insomnia-treatment-dubai/"
  };

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services/" },
    { label: "Physiotherapy", href: "/services/physiotherapy-dubai/" },
    { label: "Insomnia Treatment", href: "/services/insomnia-treatment-dubai/" }
  ];

  const symptoms = [
    "Trouble falling asleep at bedtime",
    "Frequent waking during the night",
    "Waking earlier than intended",
    "Persistent daytime fatigue",
    "Poor concentration and reduced mental clarity",
    "Irritability or a short temper",
    "Low energy and motivation",
    "Noticeable mood changes",
    "Reduced work or academic productivity",
    "Tension headaches",
    "Muscle tension, particularly in the neck, shoulders, and back"
  ];

  const causes = [
    "Stress and anxiety — an overactive mind at bedtime is one of the most common triggers",
    "Depression and other mood-related conditions",
    "Shift work — irregular schedules disrupt the body's natural circadian rhythm",
    "Jet lag, common among frequent travelers and Dubai's international workforce",
    "Excessive screen time, especially in the hour before bed",
    "Poor sleep habits, such as inconsistent bedtimes or stimulating activity late at night",
    "Chronic pain, including neck pain and back pain that make it difficult to find a comfortable position",
    "Hormonal changes, including those related to menopause or thyroid function",
    "Certain medications that interfere with sleep architecture",
    "Caffeine consumption, particularly later in the day",
    "Alcohol, which can disrupt sleep quality even when it initially feels sedating",
    "Underlying medical conditions that may require specialist input"
  ];

  const earlyAssessmentBenefits = [
    "Identifying underlying causes, whether physical, psychological, or lifestyle-related",
    "Preventing acute sleep difficulty from becoming chronic",
    "Improving daily function, including concentration, mood, and energy",
    "Supporting better long-term physical and mental wellbeing",
    "Building a personalized care plan rather than relying on generic advice"
  ];

  const assessmentSteps = [
    { name: "Medical history", desc: "Reviewing existing health conditions and baseline health background." },
    { name: "Lifestyle review", desc: "Covering work schedule, travel habits, and daily routine." },
    { name: "Sleep habit assessment", desc: "Evaluating bedtime routine and sleep environment." },
    { name: "Stress evaluation", desc: "Understanding emotional and mental contributors." },
    { name: "Physical assessment", desc: "Checking for muscular tension or discomfort." },
    { name: "Pain assessment", desc: "Particularly related to the neck, shoulders, and back." },
    { name: "Medication review", desc: "Identifying anything that may be affecting sleep." },
    { name: "Goal setting", desc: "Ensuring the wellness plan aligns with your personal targets." }
  ];

  const supportivePlans = [
    "Lifestyle counseling to identify and adjust habits that interfere with sleep",
    "Sleep hygiene education, covering practical, evidence-informed routines",
    "Relaxation techniques to help calm an overactive mind before bed",
    "Stress management strategies tailored to your daily pressures",
    "Physiotherapy to address muscle tension contributing to discomfort at night",
    "Exercise guidance appropriate to your fitness level and schedule",
    "Breathing exercises to support the body's natural relaxation response",
    "Personalized wellness plans that evolve as your sleep improves",
    "Ayurvedic wellness consultation, where appropriate, as a complementary layer of support"
  ];

  const healthyTips = [
    "Keeping a consistent sleep and wake schedule, even on weekends",
    "Building a screen-free bedtime routine, avoiding phones and laptops before sleep",
    "Practicing relaxation techniques, such as progressive muscle relaxation",
    "Engaging in regular exercise, ideally earlier in the day",
    "Following a healthy, balanced diet",
    "Reducing caffeine, especially in the afternoon and evening",
    "Staying appropriately hydrated throughout the day",
    "Practicing meditation or mindfulness before bed",
    "Using breathing exercises to ease the body into rest",
    "Creating a quiet, comfortable sleeping environment, free from excess light and noise"
  ];

  const sleepBenefits = [
    "Increased daytime energy",
    "Better focus and mental clarity",
    "Improved mood and emotional resilience",
    "Stronger immune function",
    "Reduced overall stress levels",
    "Better physical recovery, especially after exercise or injury",
    "Higher productivity at work or study",
    "An overall improved quality of life"
  ];

  const whyChooseUs = [
    "DHA-licensed healthcare professionals conducting every assessment",
    "Personalized wellness plans built around your unique symptoms and lifestyle",
    "Evidence-informed supportive care, not one-size-fits-all advice",
    "In-house physiotherapy services to address physical contributors to poor sleep",
    "Ayurvedic wellness expertise for patients seeking complementary, holistic support",
    "Modern, comfortable facilities designed with patient comfort in mind",
    "A genuinely patient-centered approach, with time taken to listen and understand your concerns",
    "A convenient Dubai location, making ongoing care easy to access"
  ];

  const faqs = [
    { question: "What is insomnia?", answer: "Insomnia is a sleep disorder involving persistent difficulty falling asleep, staying asleep, or waking too early, despite having adequate opportunity to rest." },
    { question: "What causes insomnia?", answer: "Common causes include stress, anxiety, poor sleep habits, chronic pain, hormonal changes, certain medications, caffeine, alcohol, and underlying medical or mental health conditions." },
    { question: "When should I seek professional help for sleep problems?", answer: "If sleep difficulty occurs several nights a week for more than a few weeks, or is affecting your daily function, it is a good time to seek a professional assessment." },
    { question: "Can stress cause insomnia?", answer: "Yes. Stress and anxiety are among the most common contributors to both short-term and chronic insomnia, often by keeping the mind alert at bedtime." },
    { question: "Can physiotherapy improve sleep?", answer: "Physiotherapy can help by addressing muscle tension, poor posture, and pain that make it difficult to relax or find a comfortable sleeping position." },
    { question: "Can neck pain affect sleep?", answer: "Yes. Neck tension and discomfort can make it harder to fall asleep and can contribute to waking during the night." },
    { question: "Can Ayurveda support better sleep?", answer: "Ayurvedic wellness guidance, including daily routine recommendations and relaxation-focused practices, may offer complementary support as part of a broader wellness plan." },
    { question: "How long does supportive sleep care take to show results?", answer: "This varies from person to person, depending on the underlying causes and how consistently lifestyle recommendations are followed. Your care plan will include realistic expectations discussed during your consultation." },
    { question: "Can lifestyle changes really improve insomnia?", answer: "For many people, consistent sleep schedules, reduced screen time, and stress management can meaningfully improve sleep quality over time." },
    { question: "Is exercise good for sleep?", answer: "Regular physical activity, particularly earlier in the day, is generally associated with improved sleep quality for most people." },
    { question: "What foods may support better sleep?", answer: "A balanced diet with reduced caffeine and alcohol, particularly in the evening, is generally recommended to support healthier sleep patterns." },
    { question: "Can poor sleep affect my overall health?", answer: "Yes. Ongoing poor sleep can affect mood, concentration, immune function, and long-term physical health." },
    { question: "Will I need medication for insomnia?", answer: "Not necessarily. Our approach focuses on supportive, lifestyle-based care. If medication or specialist evaluation is needed, we will refer you appropriately." },
    { question: "Can insomnia become chronic if left untreated?", answer: "Yes, acute insomnia can develop into chronic insomnia if underlying causes are not addressed, which is why early assessment is encouraged." },
    { question: "Why choose RamaCare for Insomnia Treatment in Dubai?", answer: "RamaCare offers personalized, DHA-licensed assessments combined with physiotherapy and Ayurvedic wellness support, all tailored to your individual sleep concerns." }
  ];

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(faqSearch.toLowerCase()) ||
    faq.answer.toLowerCase().includes(faqSearch.toLowerCase())
  );

  // SEO Schemas
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.answer
      }
    }))
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "Insomnia Treatment Dubai",
    "url": "https://ramacarepolyclinic.ae/services/insomnia-treatment-dubai",
    "description": "DHA-licensed sleep wellness support at RamaCare Polyclinic, Jumeirah, Dubai. Address insomnia using physiotherapy, lifestyle guidance, and Ayurvedic consultations.",
    "reviewedBy": {
      "@type": "Physician",
      "name": "Dr. Sahar Zomorrodi",
      "medicalSpecialty": "General Practice",
      "url": "https://ramacarepolyclinic.ae/doctors/dr-sahar-zomorrodi-general-practitioner-dubai"
    }
  };

  return (
    <Layout>
      <Head>
        <title key="title">{seo.title}</title>
        <meta name="description" content={seo.metaDescription} key="description" />
        <link rel="canonical" href={seo.canonical} key="canonical" />

        {/* Structured Data Schemas */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      </Head>

      <div className="bg-[#FCFDFB] text-[#1A1A1A] antialiased">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden pt-10 pb-16 md:pt-14 md:pb-24 bg-gradient-to-br from-[#1F5E4B]/10 via-[#F0F7F4] to-white">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#D4A574]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1F5E4B]/5 rounded-full blur-3xl" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumbs */}
            <nav className="flex flex-wrap items-center gap-y-1 text-xs font-semibold text-[#5F5F5F] mb-6 uppercase tracking-wider">
              {breadcrumbs.map((b, i) => (
                <React.Fragment key={i}>
                  {i > 0 && <span className="mx-2 text-gray-300">/</span>}
                  <a href={b.href} className="hover:text-[#1F5E4B] transition-colors">{b.label}</a>
                </React.Fragment>
              ))}
            </nav>

            <div className="grid lg:grid-cols-12 gap-12 items-center">
              {/* Left Column (Content) */}
              <div className="lg:col-span-7 text-left">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#1F5E4B]/10 text-[#1F5E4B] text-xs font-bold uppercase tracking-wider mb-6">
                  Sleep Wellness Dubai
                </span>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1A1A1A] tracking-tight mb-4 leading-tight">
                  Insomnia Treatment Dubai
                </h1>

                <p className="text-[#D4A574] text-base sm:text-lg font-bold tracking-wide mb-6 uppercase">
                  Restful Nights Start With the Right Support
                </p>



                <p className="text-[#5F5F5F] text-sm sm:text-base leading-relaxed mb-8">
                  If you have spent weeks — or months — staring at the ceiling, exhausted but unable to switch off, you are not alone. Sleep difficulties are one of the most common health concerns among adults living and working in Dubai's fast-paced environment. At RamaCare Polyclinic, our approach to Insomnia Treatment Dubai combines personalized care, holistic wellness support, and evidence-informed lifestyle guidance, all delivered by DHA-licensed healthcare professionals who take the time to understand what is really disrupting your sleep.
                </p>

                <p className="text-sm text-[#5F5F5F] leading-relaxed mb-8 border-l-2 border-[#1F5E4B] pl-4">
                  Our Sleep Wellness Dubai team looks beyond the symptom of &quot;not sleeping&quot; to understand the physical tension, stress patterns, and daily habits that may be contributing to your poor rest. Whether your sleep struggles are new or long-standing, our goal is to help you build a personalized path back toward calmer nights and more energized days.
                </p>

                <div className="flex flex-wrap gap-4">
                  <a href="/book-appointment" className="px-8 py-4 bg-[#1F5E4B] hover:bg-[#153f32] text-white font-bold rounded-xl text-sm transition-all shadow-md flex items-center gap-2">
                    <Moon className="w-4 h-4" />
                    Book Your Insomnia Treatment Dubai Consultation →
                  </a>
                </div>
              </div>

              {/* Right Column (Hero Image) */}
              <div className="lg:col-span-5 relative">
                <div className="bg-[#FCFDFB] p-4 rounded-3xl border border-gray-150 shadow-lg">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-3">
                    <Image
                      src="/images/DHA-licensed healthcare professional.jpg"
                      alt="DHA-licensed healthcare professional discussing sleep problems with a patient during an Insomnia Treatment Dubai consultation"
                      title="DHA-licensed healthcare professional discussing sleep problems during a consultation"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <p className="text-xs text-[#5F5F5F] italic text-center px-2">
                    DHA-licensed sleep specialist conducting a thorough consultation at RamaCare.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section className="py-12 md:py-20 px-4 bg-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#F9F7F2] p-8 sm:p-12 rounded-3xl shadow-sm border border-[#D4A574]/20 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-3 h-full bg-[#1F5E4B]" />
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] mb-6 pl-4">Introduction</h2>
              <div className="space-y-6 text-[#5F5F5F] text-base leading-relaxed pl-4">
                <p>
                  Sleep is not a luxury — it is a biological necessity. During deep sleep, the body repairs tissue, consolidates memory, regulates hormones, and restores the nervous system. When sleep is consistently disrupted, the effects ripple into nearly every area of life: concentration suffers, mood becomes unstable, immunity weakens, and long-term physical health can be affected.
                </p>
                <p>
                  Insomnia, broadly defined as persistent difficulty falling asleep, staying asleep, or waking too early despite having the opportunity to rest, affects a significant portion of adults at some point in their lives. The Sleep Problems Dubai patients most often describe to us are tied to long working hours, frequent travel, high stress levels, and constant screen exposure, all of which make quality sleep harder to achieve. When this kind of Difficulty Sleeping Dubai residents experience turns into a nightly pattern rather than an occasional frustration, it is worth taking seriously.
                </p>
                <p>
                  Seeking Insomnia Treatment Dubai support early — rather than waiting for sleep problems to become entrenched — can make a meaningful difference. A structured, professional assessment helps identify contributing factors and allows a personalized wellness plan to be built around your specific circumstances, rather than relying on generic advice or trial-and-error remedies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT IS INSOMNIA? */}
        <section className="py-12 md:py-20 px-4 bg-[#F5F1E8]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
                What Is Insomnia?
              </h2>
              <p className="text-base sm:text-lg text-[#5F5F5F] leading-relaxed">
                Insomnia is a sleep disorder characterized by ongoing difficulty initiating or maintaining sleep, even when a person has adequate time and an appropriate environment for rest.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
              <button
                onClick={() => setActiveTab('acute')}
                className={`p-6 rounded-2xl text-left border transition-all ${activeTab === 'acute'
                  ? 'bg-white border-[#1F5E4B] text-[#1A1A1A] shadow-md ring-1 ring-[#1F5E4B]'
                  : 'bg-[#FCFDFB] border-gray-200 text-[#5F5F5F] hover:border-gray-300'}`}
              >
                <h3 className="font-bold text-lg mb-2 text-[#1A1A1A]">Acute Insomnia</h3>
                <p className="text-sm leading-relaxed text-[#5F5F5F]">
                  Short-term sleep disruption, often triggered by stress, travel, illness, or a specific life event, typically lasting days to a few weeks.
                </p>
              </button>

              <button
                onClick={() => setActiveTab('chronic')}
                className={`p-6 rounded-2xl text-left border transition-all ${activeTab === 'chronic'
                  ? 'bg-white border-[#1F5E4B] text-[#1A1A1A] shadow-md ring-1 ring-[#1F5E4B]'
                  : 'bg-[#FCFDFB] border-gray-200 text-[#5F5F5F] hover:border-gray-300'}`}
              >
                <h3 className="font-bold text-lg mb-2 text-[#1A1A1A]">Chronic Insomnia</h3>
                <p className="text-sm leading-relaxed text-[#5F5F5F]">
                  The Chronic Insomnia Dubai patients describe to us most often involves sleep difficulty occurring at least three nights a week for three months or longer, often requiring a more structured, multi-factor approach to management.
                </p>
              </button>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-150 max-w-4xl mx-auto shadow-sm">
              <h4 className="font-bold text-base text-[#D4A574] mb-4">Insomnia can present in different ways, including:</h4>
              <ul className="grid sm:grid-cols-2 gap-4 text-sm text-[#1A1A1A]">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1F5E4B] mt-2 flex-shrink-0" />
                  <span>Difficulty falling asleep at the start of the night</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1F5E4B] mt-2 flex-shrink-0" />
                  <span>Difficulty staying asleep, with frequent waking</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1F5E4B] mt-2 flex-shrink-0" />
                  <span>Waking too early and being unable to fall back asleep</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1F5E4B] mt-2 flex-shrink-0" />
                  <span>Sleep that does not feel restorative, even after a full night in bed</span>
                </li>
              </ul>
              <p className="text-xs text-[#5F5F5F] italic mt-6 border-t border-gray-100 pt-4 text-center">
                Recognizing which pattern applies to you is an important first step, and it is something our team explores carefully during your assessment.
              </p>
            </div>
          </div>
        </section>

        {/* COMMON SYMPTOMS OF INSOMNIA */}
        <section className="py-12 md:py-20 px-4 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              {/* Text Column */}
              <div className="lg:col-span-7">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">Common Symptoms of Insomnia</h2>
                <p className="text-base text-[#5F5F5F] mb-6">
                  Insomnia does not only affect the hours you spend in bed — it shapes how you feel and function throughout the day:
                </p>
                <div className="grid sm:grid-cols-2 gap-3 mb-6">
                  {symptoms.map((symp, idx) => (
                    <div key={idx} className="flex items-center space-x-3 p-3 bg-[#FCFDFB] rounded-xl border border-gray-150 shadow-sm">
                      <span className="w-2 h-2 rounded-full bg-[#D4A574] flex-shrink-0" />
                      <span className="text-xs sm:text-sm font-semibold text-gray-700">{symp}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-[#5F5F5F] italic">
                  If several of these symptoms feel familiar, a professional evaluation can help clarify what is contributing to your sleep problems.
                </p>
              </div>

              {/* Image Column */}
              <div className="lg:col-span-5">
                <div className="bg-[#FCFDFB] p-4 rounded-3xl border border-gray-150 shadow-md">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-3">
                    <Image
                      src="/images/Relaxing bedtime routine.jpg"
                      alt="Relaxing bedtime routine consultation at RamaCare Polyclinic"
                      title="Relaxing bedtime routine consultation at RamaCare Polyclinic"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <p className="text-xs text-[#5F5F5F] italic text-center px-2">
                    Understanding your routine habits helps formulate better sleeping schedules.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CAUSES AND RISK FACTORS */}
        <section className="py-12 md:py-20 px-4 bg-[#F5F1E8]">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">Causes and Risk Factors</h2>
              <p className="text-base sm:text-lg text-[#5F5F5F]">
                Sleep problems rarely have a single cause. In our experience supporting patients across Dubai, insomnia is often the result of overlapping physical, psychological, and lifestyle factors:
              </p>
            </div>

            <div className="space-y-3 max-w-3xl mx-auto">
              {causes.map((c, idx) => (
                <div key={idx} className="flex items-start space-x-3 p-4 bg-white rounded-xl border border-gray-150 shadow-sm">
                  <CheckCircle className="w-5 h-5 text-[#1F5E4B] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-[#1A1A1A] leading-relaxed">{c}</span>
                </div>
              ))}
            </div>

            <p className="text-xs text-[#5F5F5F] italic text-center mt-8">
              Because so many factors can contribute to poor sleep, a thorough, individualized assessment is essential rather than assuming a single cause.
            </p>
          </div>
        </section>

        {/* WHY EARLY ASSESSMENT MATTERS */}
        <section className="py-12 md:py-20 px-4 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              {/* Image Column */}
              <div className="lg:col-span-5 order-last lg:order-first">
                <div className="bg-[#FCFDFB] p-4 rounded-3xl border border-gray-150 shadow-md">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-3">
                    <Image
                      src="/images/Physiotherapist treating neck tension.jpg"
                      alt="Physiotherapist treating neck tension contributing to poor sleep in Dubai"
                      title="Physiotherapist treating neck tension contributing to poor sleep in Dubai"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <p className="text-xs text-[#5F5F5F] italic text-center px-2">
                    Physiotherapy helps reduce somatic tension that keeps the mind awake.
                  </p>
                </div>
              </div>

              {/* Text Column */}
              <div className="lg:col-span-7">
                <span className="text-xs text-[#D4A574] font-bold uppercase tracking-widest block mb-2">Getting the Right Sleep Support Early</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-6">Why Early Assessment Matters</h2>
                <p className="text-base text-[#5F5F5F] mb-6">
                  Many people delay seeking help for sleep problems, hoping the issue will resolve on its own. While occasional poor sleep is normal, ongoing difficulty deserves attention because early assessment can help with:
                </p>
                <div className="grid sm:grid-cols-2 gap-3 mb-6">
                  {earlyAssessmentBenefits.map((b, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <span className="w-2 h-2 rounded-full bg-[#1F5E4B] mt-1.5 flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-gray-700">{b}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-[#5F5F5F] leading-relaxed italic border-t border-gray-100 pt-4">
                  <strong>Important:</strong> Persistent, severe, or worsening sleep disorders may require evaluation by a qualified sleep medicine specialist or mental health professional. At RamaCare, our role is to provide supportive, holistic care and lifestyle-based guidance, and we will refer patients onward when specialist evaluation is appropriate.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ASSESSMENT PROCESS AT RAMACARE */}
        <section className="py-12 md:py-20 px-4 bg-[#F5F1E8]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">Assessment Process at RamaCare</h2>
              <p className="text-base sm:text-lg text-[#5F5F5F]">
                Our Insomnia Treatment Dubai service begins with a comprehensive, unhurried assessment conducted by our DHA-licensed healthcare professionals. This typically includes a review of:
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {assessmentSteps.map((step, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-150 shadow-sm hover:border-[#1F5E4B]/40 transition-all flex flex-col justify-between">
                  <div>
                    <span className="text-xs text-[#D4A574] font-semibold tracking-wider">Step 0{idx + 1}</span>
                    <h4 className="font-bold text-base text-[#1A1A1A] mt-2 mb-2">{step.name}</h4>
                    <p className="text-xs text-[#5F5F5F] leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-sm text-[#5F5F5F] italic text-center mt-10 max-w-xl mx-auto">
              This assessment allows our team to build a plan that reflects your specific symptoms and circumstances, rather than a one-size-fits-all approach.
            </p>
          </div>
        </section>

        {/* SUPPORTIVE CARE APPROACH */}
        <section className="py-12 md:py-20 px-4 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">Insomnia Treatment Dubai at RamaCare: Our Supportive Care Approach</h2>
              <p className="text-base sm:text-lg text-[#D4A574] font-semibold italic">
                This is what genuine Poor Sleep Treatment Dubai support should look like: a personalized plan built around your specific situation, not a generic checklist.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
              {supportivePlans.map((plan, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-[#FCFDFB] border border-gray-150 flex items-start space-x-3 hover:border-[#D4A574]/45 transition-all shadow-sm">
                  <CheckCircle className="w-5 h-5 text-[#D4A574] mt-0.5 flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-gray-700 leading-relaxed">{plan}</span>
                </div>
              ))}
            </div>

            <div className="max-w-3xl mx-auto bg-[#F9F7F2] p-6 rounded-2xl border border-[#D4A574]/20 text-center text-xs text-[#5F5F5F] leading-relaxed shadow-sm">
              <strong>Supportive Wellness Care:</strong> RamaCare does not claim to cure insomnia, and we are committed to referring patients with persistent or severe sleep disorders to the appropriate specialist for further evaluation and management.
            </div>
          </div>
        </section>

        {/* PHYSIOTHERAPY FOR BETTER SLEEP */}
        <section className="py-12 md:py-20 px-4 bg-[#F5F1E8]">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              {/* Text Column */}
              <div className="lg:col-span-7">
                <span className="text-xs text-[#D4A574] font-bold uppercase tracking-widest block mb-2">Physiotherapy for Better Sleep Dubai</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">Addressing the Physical Side of Insomnia</h2>
                <p className="text-base text-[#5F5F5F] leading-relaxed mb-6">
                  Physical discomfort is an often-overlooked contributor to poor sleep, and it frequently overlaps with the Stress Related Insomnia Dubai patients experience, since tension held in the body and tension held in the mind tend to reinforce one another. Tight muscles, poor posture, and unresolved pain can make it genuinely difficult to relax and stay asleep. Our Physiotherapy Dubai team works alongside our sleep wellness service to help address:
                </p>
                <div className="grid sm:grid-cols-2 gap-3 mb-6">
                  <div className="flex items-center space-x-2"><CheckCircle className="w-4 h-4 text-[#1F5E4B]" /><span className="text-xs sm:text-sm text-gray-750 text-gray-700 font-medium">Neck tension</span></div>
                  <div className="flex items-center space-x-2"><CheckCircle className="w-4 h-4 text-[#1F5E4B]" /><span className="text-xs sm:text-sm text-gray-750 text-gray-700 font-medium">Shoulder tightness</span></div>
                  <div className="flex items-center space-x-2"><CheckCircle className="w-4 h-4 text-[#1F5E4B]" /><span className="text-xs sm:text-sm text-gray-750 text-gray-700 font-medium">Back pain</span></div>
                  <div className="flex items-center space-x-2"><CheckCircle className="w-4 h-4 text-[#1F5E4B]" /><span className="text-xs sm:text-sm text-gray-750 text-gray-700 font-medium">General muscle stiffness</span></div>
                  <div className="flex items-center space-x-2"><CheckCircle className="w-4 h-4 text-[#1F5E4B]" /><span className="text-xs sm:text-sm text-gray-750 text-gray-700 font-medium">Poor posture from desk hours</span></div>
                  <div className="flex items-center space-x-2"><CheckCircle className="w-4 h-4 text-[#1F5E4B]" /><span className="text-xs sm:text-sm text-gray-750 text-gray-700 font-medium">Night-time settling discomfort</span></div>
                </div>
                <p className="text-xs sm:text-sm text-[#5F5F5F] leading-relaxed">
                  Techniques used may include manual therapy, targeted stretching, exercise therapy, guided relaxation exercises, and postural correction. By reducing physical tension, many patients find it easier to relax both body and mind at bedtime. If pain in specific areas is a major factor for you, our team can also guide you toward focused care, such as <a href="/services/neck-pain-treatment-dubai" className="text-[#D4A574] hover:underline font-bold">Neck Pain Treatment Dubai</a>, <a href="/services/shoulder-pain-treatment-dubai" className="text-[#D4A574] hover:underline font-bold">Shoulder Pain Treatment Dubai</a>, or <a href="/services/back-pain-treatment-dubai" className="text-[#D4A574] hover:underline font-bold">Back Pain Treatment Dubai</a>.
                </p>
              </div>

              {/* Image Column */}
              <div className="lg:col-span-5">
                <div className="bg-[#FCFDFB] p-4 rounded-3xl border border-gray-150 shadow-md">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-3">
                    <Image
                      src="/images/Ayurvedic wellness consultation.jpg"
                      alt="Ayurvedic wellness consultation for improving sleep quality at RamaCare"
                      title="Ayurvedic wellness consultation for improving sleep quality"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <p className="text-xs text-[#5F5F5F] italic text-center px-2">
                    Ayurvedic wellness consultation for improving sleep quality at RamaCare.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AYURVEDIC WELLNESS SUPPORT */}
        <section className="py-12 md:py-20 px-4 bg-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] mb-4">Ayurvedic Wellness Support for Sleep</h2>
              <p className="text-base text-[#5F5F5F]">
                For patients interested in a more traditional, holistic layer of care, RamaCare offers Ayurvedic Sleep Support Dubai consultations as part of a broader wellness plan. This may include:
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="p-5 rounded-xl bg-[#FCFDFB] border border-gray-150 shadow-sm"><h4 className="font-bold text-sm text-[#D4A574] mb-2">Practitioner Consult</h4><p className="text-xs text-[#5F5F5F]">A personalized consultation with an Ayurvedic wellness practitioner.</p></div>
              <div className="p-5 rounded-xl bg-[#FCFDFB] border border-gray-150 shadow-sm"><h4 className="font-bold text-sm text-[#D4A574] mb-2">Dinacharya Routines</h4><p className="text-xs text-[#5F5F5F]">Guidance on daily routine patterns aligned with circadian rhythms.</p></div>
              <div className="p-5 rounded-xl bg-[#FCFDFB] border border-gray-150 shadow-sm"><h4 className="font-bold text-sm text-[#D4A574] mb-2">Relaxation Therapies</h4><p className="text-xs text-[#5F5F5F]">Easing physical and mental tension using traditional external therapies.</p></div>
              <div className="p-5 rounded-xl bg-[#FCFDFB] border border-gray-150 shadow-sm"><h4 className="font-bold text-sm text-[#D4A574] mb-2">Grounding Diet</h4><p className="text-xs text-[#5F5F5F]">Warm dietary recommendations supporting digestive rest and evening relaxation.</p></div>
            </div>

            <p className="text-xs text-[#5F5F5F] text-center italic">
              Ayurvedic support at RamaCare is offered as a complementary approach within your overall wellness plan, alongside — not instead of — appropriate medical evaluation when needed. Learn more about our broader offering on our <a href="/services/ayurveda-dubai" className="text-[#D4A574] hover:underline font-bold">Ayurveda Dubai</a> page.
            </p>
          </div>
        </section>

        {/* HEALTHY SLEEP HABITS AND TIPS */}
        <section className="py-12 md:py-20 px-4 bg-[#F5F1E8]">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              {/* Image Column */}
              <div className="lg:col-span-5">
                <div className="bg-[#FCFDFB] p-4 rounded-3xl border border-gray-150 shadow-md">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-3">
                    <Image
                      src="/images/homepage.jpg"
                      alt="Peaceful sleep environment illustrating healthy sleep habits Dubai"
                      title="Peaceful sleep environment illustrating healthy sleep habits"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <p className="text-xs text-[#5F5F5F] italic text-center px-2">
                    Creating a calm, cool, and quiet sleep environment supports circadian rhythm alignment.
                  </p>
                </div>
              </div>

              {/* Text Column */}
              <div className="lg:col-span-7">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">Healthy Sleep Habits and Tips</h2>
                <p className="text-base text-[#5F5F5F] mb-6">
                  Alongside professional support, small daily changes can meaningfully improve sleep quality over time:
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {healthyTips.map((tip, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-[#1F5E4B] flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-gray-700 font-medium">{tip}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BENEFITS OF BETTER SLEEP */}
        <section className="py-12 md:py-20 px-4 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">The Benefits of Better Sleep</h2>
              <p className="text-base text-[#5F5F5F]">
                Improving sleep quality does not just affect how you feel at night — it influences nearly every part of daily life.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {sleepBenefits.map((b, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#FCFDFB] border border-gray-150 shadow-sm flex items-center space-x-3 hover:shadow-md transition-all">
                  <Sparkles className="w-5 h-5 text-[#D4A574] flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-[#1A1A1A]">{b}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="py-12 md:py-20 px-4 bg-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-6 text-center">Why Choose RamaCare Polyclinic for Insomnia Treatment in Dubai?</h2>
            <p className="text-center text-sm text-[#5F5F5F] max-w-2xl mx-auto mb-10">
              Patients across Dubai choose RamaCare for our combination of clinical care and genuine wellness expertise. We are known as a Sleep Clinic Dubai residents recommend to friends and colleagues. We also offer the kind of Natural Sleep Support Dubai patients increasingly look for alongside conventional care.
            </p>
            <div className="space-y-4 max-w-xl mx-auto">
              {whyChooseUs.map((w, idx) => (
                <div key={idx} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#1F5E4B] mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-gray-700 font-medium leading-relaxed">{w}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEARCHABLE FAQ SECTION */}
        <section className="py-12 md:py-20 px-4 bg-[#F5F1E8]">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] mb-4">Frequently Asked Questions</h2>
              <p className="text-base text-[#5F5F5F]">Browse answers regarding sleep cycle support, physiotherapy, and wellness tips.</p>
            </div>

            {/* Search Input */}
            <div className="relative max-w-md mx-auto mb-10">
              <input
                type="text"
                placeholder="Search FAQs..."
                value={faqSearch}
                onChange={(e) => setFaqSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#1F5E4B] text-sm text-[#1A1A1A]"
              />
              <Search className="w-5 h-5 text-[#5F5F5F] absolute left-4 top-1/2 transform -translate-y-1/2" />
            </div>

            {/* Accordions */}
            <div className="space-y-3">
              {filteredFaqs.map((faq, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div key={idx} className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                    <button
                      onClick={() => setActiveFaq(isOpen ? null : idx)}
                      className="w-full flex justify-between items-center p-5 text-left font-bold text-[#1A2521] hover:text-[#1F5E4B] transition-colors text-sm sm:text-base"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown className={`w-5 h-5 text-[#5F5F5F] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="px-5 pb-5 pt-1 text-[#5F5F5F] text-sm sm:text-base leading-relaxed border-t border-gray-100">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}

              {filteredFaqs.length === 0 && (
                <div className="text-center py-8">
                  <p className="text-gray-500 text-sm">No matching questions found.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* CLINICAL BOOKING APPOINTMENT / LEAD FORM */}
        <BookConsultation
          content={{
            badge: 'Start Your Recovery',
            title: seo.title.replace('| RamaCare Sleep Wellness Clinic', '').trim(),
            description: 'Work with DHA-licensed physical therapists and holistic wellness experts to find a calmer, more restorative path back to sleep.',
            getInTouchTitle: 'Get In Touch',
            requestAppointmentTitle: 'Request Appointment',
            submitButtonText: 'Confirm Free Consultation',
            contactInfo: {
              phone: '+971 04 286 2006',
              whatsapp: '971566597878',
              email: 'query@ramacarepolyclinic.com',
              address: {
                line1: '12 Al Dhiyafah Rd - Jumeirah Terrace Building,',
                line2: 'Ground Floor, Jumeirah 1 - Dubai'
              }
            },
            clinicHours: {
              weekdays: 'Sunday - Saturday:',
              weekdaysTime: '10:00 AM - 10:00 PM',
              friday: 'Friday:',
              fridayTime: '10:00 AM - 8:00 PM'
            },
            statCards: [
              { title: 'DHA Licensed', description: 'Certified Clinic' },
              { title: 'Holistic Approach', description: 'Ayurveda & Physio' },
              { title: 'Personalized Plans', description: 'Tailored to Assessment' },
              { title: '4.9/5 Rating', description: 'Patient Reviews' }
            ],
            concerns: [
              { value: 'insomnia-treatment-dubai', label: 'Insomnia / Sleep wellness' },
              { value: 'stress-treatment-dubai', label: 'Stress Management' },
              { value: 'anxiety-treatment-dubai', label: 'Anxiety supportive care' },
              { value: 'neck-pain-treatment-dubai', label: 'Neck / back pain' }
            ]
          }}
        />

        {/* DOCTORS SHOWCASE */}
        <section className="py-12 md:py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <DoctorsSection customDoctors={[DOCTORS.sahar, DOCTORS['dr-shamna-keloth-meethal-ayurveda-doctor-dubai']]} />
          </div>
        </section>

        {/* CONCLUSION */}
        <section className="py-12 md:py-20 px-4 bg-[#1F5E4B] text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">Conclusion</h2>
            <div className="text-white/90 text-base sm:text-lg leading-relaxed mb-8">
              Struggling with sleep can affect every part of your day, from your energy and focus to your mood and overall wellbeing. At RamaCare Polyclinic, our Insomnia Treatment Dubai service is built around understanding your unique situation, addressing physical tension through physiotherapy, offering complementary Ayurvedic wellness support where appropriate, and guiding you toward healthier, more sustainable sleep habits.
            </div>
            <div className="w-16 h-0.5 bg-[#D4A574] mx-auto mb-6" />
            <p className="text-sm text-white/80 max-w-xl mx-auto leading-relaxed mb-8">
              If poor sleep has been affecting your life, you do not have to manage it alone. Our DHA-licensed team is here to listen, assess, and build a personalized plan to help you move toward calmer, more restorative nights.
            </p>
            <div className="flex justify-center gap-4">
              <a href="/book-appointment" className="px-6 py-3 bg-[#D4A574] hover:bg-[#b08455] text-white font-bold rounded-xl text-xs sm:text-sm transition-all shadow-md">
                Book Appointment
              </a>
              <a href="/contact-us" className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-bold border border-white/20 rounded-xl text-xs sm:text-sm transition-all">
                Contact Us
              </a>
            </div>
          </div>
        </section>

        {/* Medical Disclaimer */}
        <section className="py-10 bg-gray-50 border-t border-gray-150 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs text-gray-500 leading-relaxed">
              <strong className="text-gray-700">Medical Disclaimer:</strong> This content is for general informational purposes and does not constitute medical advice or a diagnosis. Individual results and recovery timelines vary. Patients with persistent or severe sleep disorders should seek evaluation from an appropriate sleep medicine or mental health specialist. For personal medical concerns, please Contact Us or Book an Appointment to speak with our licensed healthcare team.
            </p>
          </div>
        </section>

        {/* Content Reviewer Badge */}
        <ContentReviewBadge doctorName="Dr. Sahar Zomorrodi" pageSlug="/services/insomnia-treatment-dubai/" />
      </div>
    </Layout>
  );
}

// Framer motion stub for compatibility if not globally imported
function AnimatePresence({ children }) {
  return <>{children}</>;
}

function motion_div({ children, ...props }) {
  return <div {...props}>{children}</div>;
}
const motion = {
  div: motion_div
};
