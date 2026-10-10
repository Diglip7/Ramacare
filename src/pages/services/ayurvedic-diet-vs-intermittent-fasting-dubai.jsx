import React, { useState, useEffect } from 'react';
import Layout from '../../../components/Layout';
import Head from "next/head";
import Image from 'next/image';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { useToast } from '../../../components/Toast';
import ContentReviewBadge from '../../../components/ContentReviewBadge';
import AyurvedaInfoSection from '../../../components/AyurvedaInfoSection'; 

const content = {
  hero: {
    title: "Ayurvedic Diet vs Intermittent Fasting: Which Suits Your Body in Dubai?",
description1: "Intermittent fasting (IF) limits when you eat, for example within an 8-hour window (16:8). Ayurveda has its own fasting tradition, Langhana, but adjusts when and how you fast to your dosha, your digestion (Agni), the season and your strength. This guide compares the two and explains how to choose safely in Dubai's heat.",
description2: "Prepared by RamaCare Polyclinic in Jumeirah 1 and reviewed by Dr. Shamna Keloth Meethal (BAMS). If you have a health condition or take regular medicines, check with a doctor before you start fasting.",
graphic: {
      left: { icon: 'Clock', text: 'Modern Fasting', subtext: '16:8 Window' },
      right: { icon: 'Leaf', text: 'Ayurvedic', subtext: 'Dosha-Based' }
    },
    ctaButtons: {
      primary: { text: 'Book Fasting Consultation' },
      secondary: { text: 'WhatsApp Now', phone: '971566597878' }
    }
  },
  summary: {
    title: 'Does Ayurveda Support Intermittent Fasting?',
    question: 'In short:',
answer: 'Partly. Ayurveda describes fasting (Upavasa) as one of ten Langhana (lightening) therapies and values a long overnight gap and an early, light dinner. But it does not apply one fixed window to everyone: Kapha types usually tolerate longer gaps, while Vata and Pitta types do better with gentler, regular eating. A practical Ayurvedic approach is a 12–14 hour overnight gap with your main meal at midday, adjusted to your dosha and health.' 
  },
  stickyTopBar: {
    text: 'Fasting and Diet Consultation in Jumeirah 1 – Book with Dr. Shamna',
    cta: 'Book Now'
  },
  comparisonSection: {
    title: 'Intermittent Fasting vs Ayurvedic Langhana',
    items: [
      {
        title: 'Intermittent Fasting',
        icon: 'Clock',
        iconColor: 'text-blue-600',
        bgColor: 'bg-[#E3F2FD]',
        features: [
          { text: 'Eating within a set window, for example 16:8 or 14:10, or 5:2 (two low-calorie days a week)', icon: 'Clock', color: 'text-blue-600' },
          { text: 'Not suitable for everyone (see who should not fast)', icon: 'CheckCircle', color: 'text-blue-600' },
          { text: 'Focuses on when you eat', icon: 'AlertCircle', color: 'text-blue-500' },
          { text: 'Some people find it helps with weight and blood sugar; results are similar to other calorie-controlled diets', icon: 'AlertCircle', color: 'text-blue-500' }
        ]
      },
      {
        title: 'Ayurvedic Langhana',
        icon: 'Leaf',
        iconColor: 'text-[#1F5E4B]',
        bgColor: 'bg-[#F1F8E9]',
        features: [
          { text: 'Focuses on when, what and how much you eat', icon: 'Leaf', color: 'text-[#1F5E4B]' },
          { text: 'Adjusted to your dosha, Agni, season and strength', icon: 'CheckCircle', color: 'text-[#1F5E4B]' },
          { text: 'A group of ten lightening approaches, including Upavasa (fasting), Phalahara (fruit-based days) and light mono-diets such as kitchari', icon: 'CheckCircle', color: 'text-[#1F5E4B]' },
          { text: 'Intensive fasting is used therapeutically only under supervision', icon: 'CheckCircle', color: 'text-[#1F5E4B]' }
        ]
      }
    ]
  },
  pittaWarning: {
   title: "Fasting in the Dubai Heat",
    cardTitle: "Why Heat Changes the Picture",
    description: "Dubai summers regularly pass 45°C. In Ayurveda, heat raises Pitta, and long gaps without food or water add to it.",
    riskIntro: "Long fasting windows in the heat can bring:",
    risks: [
      { highlight: "Acidity", text: "and heartburn, especially for Pitta types" },
      { highlight: "Dehydration", text: "with headaches and tiredness" },
      { highlight: "Irritability", text: "and poor concentration" },
      { highlight: "Low energy", text: "if meals lack protein" }
    ],
    solution: "What helps: drink water steadily outside your fasting window, shorten the window in summer, break your fast with something cooling and light (coconut water, buttermilk, fruit), include protein in each meal, and avoid exercising hard in the midday heat."
      },
  ifMethods: {
    id: 'if-methods',
    heading: 'Common Intermittent Fasting Methods',
    table: [
      ['16:8', 'Eat within 8 hours (for example 11am–7pm) and fast for 16 hours. The most popular method.'],
      ['14:10', 'Eat within 10 hours and fast for 14. Gentler, and easier to fit with Ayurvedic meal timing.'],
      ['12:12', 'A 12-hour overnight gap, close to the traditional Ayurvedic routine of an early dinner and a regular breakfast.'],
      ['5:2', 'Eat normally five days a week and much less on two non-consecutive days.']
    ],
    note: 'Longer fasts (18 hours or more, or whole-day fasts) are not advised without medical supervision.'
  },
  ayurvedicTiming: {
    id: 'ayurvedic-meal-timing',
    heading: 'The Ayurvedic Approach to Meal Timing',
    ordered: true,
    items: [
      { text: 'Finish dinner early, ideally by 7–8pm, and keep it light.' },
      { text: 'Keep a 12–14 hour overnight gap, adjusted to your dosha.' },
      { text: 'Make lunch your largest meal, when Agni (digestive fire) is strongest.' },
      { text: 'Eat warm, freshly cooked food and avoid snacking between meals.' },
      { text: 'Break your overnight gap gently: warm water first, then a light breakfast.' }
    ]
  },
  sampleDay: {
    id: 'sample-window',
    heading: 'Sample Day: A 14:10 Ayurvedic Eating Window',
    intro: 'An example only. Your doctor adjusts the timing to your dosha and health.',
    table: [
      ['7:00am', 'Warm water, then herbal tea'],
      ['9:00am', 'Breakfast: oats or poha with nuts, or eggs and toast'],
      ['1:00pm', 'Lunch (main meal): rice or chapati, dal, vegetables, yoghurt or buttermilk'],
      ['4:00pm', 'Fruit or a handful of nuts, if hungry'],
      ['6:30–7:00pm', 'Light dinner: soup with lentils or vegetables'],
      ['7:00pm–9:00am', 'Overnight gap: water and herbal tea only']
    ]
  },
  whoShouldNot: {
    id: 'who-should-not-fast',
    heading: 'Who Should Not Do Intermittent Fasting Without a Doctor\'s Advice?',
    items: [
      { text: 'people with diabetes, especially on insulin or tablets that lower blood sugar' },
      { text: 'pregnant or breastfeeding women' },
      { text: 'under-18s' },
      { text: 'people who are underweight or have a history of eating disorders' },
      { text: 'people with kidney disease, low blood pressure, or other conditions on regular medicines' }
    ],
    note: 'Our GP in the same building can check whether fasting is safe for you.'
  },
  yourVisit: {
    id: 'your-visit',
    heading: 'Your Fasting and Diet Consultation in Jumeirah 1',
    table: [
      ['Doctor', 'Dr. Shamna Keloth Meethal, BAMS, DHA-licensed Ayurvedic doctor (11+ years)'],
      ['Consultation', 'From AED 200, 45–60 minutes'],
      ['Also in the building', 'Our GP, for health checks and blood tests if needed'],
      ['Address', '12 Al Dhiyafah Road, Jumeirah Terrace Building, Ground Floor, Jumeirah 1, Dubai'],
      ['Nearby', 'A few minutes from Satwa and Al Wasl; about 10 minutes from Jumeirah 2, City Walk and La Mer'],
      ['Hours', 'Every day, 10am–10pm']
    ]
  },
  doshaComparison: {
    title: "Fasting by Body Type (Dosha)",
    description: "General Ayurvedic guidance. Your doctor adjusts it to your health.",
    table: {
      headers: ["Body Type (Dosha)", "Suggested approach", "Watch out for"],
      rows: [
        {
          dosha: "Vata",
          sub: "(light build, dry skin, variable appetite)",
          ifRec: "A gentle 12-hour overnight gap; regular meals; do not skip breakfast",
          ayurWarning: "Long fasts can leave Vata types anxious, light-headed or unable to sleep.",
          warningHighlight: "anxious, light-headed"
        },
        {
          dosha: "Pitta",
          sub: "(medium build, strong hunger)",
          ifRec: "A moderate 12–13 hour overnight gap; never skip lunch; cooling drinks",
          ayurWarning: "Long gaps can trigger acidity, headaches and irritability, especially in summer.",
          warningHighlight: "acidity"
        },
        {
          dosha: "Kapha",
          sub: "(solid build, steady appetite)",
          ifRec: "Often suits a longer overnight gap, such as 14–16 hours, if healthy and agreed with your doctor",
          ayurWarning: "Avoid heavy late dinners and long daytime naps; very long fasts are not advised without supervision.",
          warningHighlight: "very long fasts"
        }
      ]
    },
    cta: {
      text: "Not sure of your dosha? Take our dosha test or book a consultation with Dr. Shamna.",
      button: "Take the Dosha Test"
    }
  },
  faq: {
    title: "Intermittent Fasting and Ayurveda: Frequently Asked Questions",
    description: "Answers reviewed by Dr. Shamna Keloth Meethal (BAMS), RamaCare Polyclinic, Jumeirah 1",
    items: [
      { question: "Does Ayurveda support intermittent fasting?", answer: "Partly. Ayurveda describes fasting (Upavasa) as one of ten Langhana therapies and values a long overnight gap with an early, light dinner, but it adjusts the length to your dosha, digestion, season and strength rather than using one fixed window." },
      { question: "What is Langhana in Ayurveda?", answer: "Langhana means lightening therapy. Classical texts list ten types, including fasting (Upavasa), fruit-based days (Phalahara), light diets such as kitchari, exercise and some cleansing therapies. It is used for heaviness, slow digestion and Kapha imbalance." },
      { question: "Which is better: intermittent fasting or an Ayurvedic diet?", answer: "It depends on your body and health. Many people do well combining them: a 12–14 hour overnight gap, the main meal at midday, and food suited to their dosha." },
      { question: "What is the Ayurvedic way to do intermittent fasting?", answer: "Finish dinner early (ideally by 7–8pm), keep a 12–14 hour overnight gap, make lunch your largest meal, eat warm, fresh food, and adjust the gap to your dosha. Avoid long fasts without advice." },
      { question: "Is 16:8 fasting suitable for my dosha?", answer: "Kapha types often tolerate it best. Vata types usually do better with a 12-hour gap, and Pitta types with 12–13 hours and a regular lunch. A dosha assessment helps you decide." },
      { question: "Can I do intermittent fasting in Dubai's summer?", answer: "Yes, with care: shorten the window in the hottest months, drink water steadily outside the fasting window, break the fast with something cooling and light, and avoid hard exercise in the midday heat." },
      { question: "Is intermittent fasting good for weight loss?", answer: "It helps some people eat less overall, and studies show results similar to other calorie-controlled diets. What and how much you eat still matter. See our Ayurvedic diet for weight loss for a personal approach." },
      { question: "Can women with PCOS do intermittent fasting?", answer: "Some women with PCOS find a moderate eating window helps with insulin resistance, but very long fasts can affect cycles, sleep and stress. Speak to a doctor first; see our Ayurvedic PCOS care." },
      { question: "What can I drink during the fasting window?", answer: "Water, warm water and unsweetened herbal teas such as cumin-coriander-fennel tea. Ayurveda advises limiting black coffee on an empty stomach, especially for Pitta and Vata types." },
      { question: "Does intermittent fasting cause muscle loss?", answer: "It can if protein intake is too low. Include protein in every meal, such as dal, dairy, eggs, fish or chicken, and keep up strength exercise." },
      { question: "Who should not do intermittent fasting?", answer: "People with diabetes on medication, pregnant or breastfeeding women, under-18s, people who are underweight or have a history of eating disorders, and people with kidney disease or other conditions on regular medicines, unless their doctor agrees." },
      { 
        question: "How is Ayurvedic fasting different from keto or other diets?", 
        answer: (
          <>
            Ayurveda does not use a fixed macronutrient ratio. It adjusts food, timing and fasting to your dosha, digestion, the season and your health. Read our detailed guide on the{' '}
            <a href="/services/ayurvedic-diet-vs-keto-dubai/" className="text-[#1F5E4B] underline font-semibold hover:text-[#16442d]">
              Ayurvedic diet vs keto
            </a>.
          </>
        ) 
      },
      { question: "How much does a fasting and diet consultation cost?", answer: "A consultation with Dr. Shamna starts from AED 200 and takes 45–60 minutes. If you have a health condition, our GP in the same building can check you first." },
      { question: "Where is RamaCare?", answer: "At 12 Al Dhiyafah Road, Jumeirah Terrace Building, Ground Floor, Jumeirah 1, Dubai, a few minutes from Satwa and Al Wasl and about 10 minutes from Jumeirah 2, City Walk and La Mer. Open every day, 10am–10pm." }
    ],
    footer: { 
      text: "Every body is different. Get advice for yours.", 
      button: "Book a Consultation" 
    }
  },

  authority: {
    title: "Get a Fasting and Diet Plan for Your Body",
    subtitle: "Generic fasting advice does not know your dosha, your health or your medicines. A consultation does.",
    cards: [
      { icon: "ShieldCheck", title: "DHA-Licensed Polyclinic", text: "RamaCare Polyclinic, licence 2036418, Jumeirah 1" },
      { icon: "UserCheck", title: "BAMS Ayurvedic Doctor", text: "Dr. Shamna Keloth Meethal, 11+ years" },
      { icon: "Stethoscope", title: "GP in the Same Building", text: "For checks if you have a health condition or take medicines" },
      { icon: "Sparkles", title: "Plan for Your Dosha", text: "Eating window, meals and drinks suited to you and the Dubai climate" }
    ],
    benefitBox: {
      title: "What Your Consultation Includes",
      items: [ "Dosha and digestion (Agni) assessment", "A suitable eating window and meal timing", "Meals and drinks for your dosha and the Dubai heat", "Herbal advice if needed", "Follow-up as needed" ],
      button: "Book a Fasting Consultation"
    },
    reviewer: "Content Reviewed by Shamna, Ayurvedic Specialist at RamaCare Polyclinic, Dubai."
  },
  finalCTA: {
    title: "Find the Fasting Window That Suits You",
    subtitle: "Book a consultation with Dr. Shamna in Jumeirah 1, from AED 200, for an eating plan matched to your dosha and health.",
    footer: "DHA-licensed polyclinic • Jumeirah 1, Dubai • Open daily 10am–10pm",
    button: "Book Your Fasting Consultation in Jumeirah Today"
  }
};

export default function AyurvedicDietVsIntermittentFastingDubaiPage() {
  const router = useRouter();
  const { showToast, ToastComponent } = useToast();
  const [showTopBar, setShowTopBar] = useState(false);
  const [bannerText] = useState("Fasting and Diet Consultation in Jumeirah 1 – Book with Dr. Shamna");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) { 
        setShowTopBar(true);
      } else {
        setShowTopBar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const faqsForSchema = content.faq.items.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": typeof faq.answer === 'string' ? faq.answer : "Ayurveda does not use a fixed macronutrient ratio. It adjusts food, timing and fasting to your dosha, digestion, the season and your health. Read our detailed guide on the Ayurvedic diet vs keto."
    }
  }));

  const schemaGraph = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "MedicalWebPage",
          "@id": "https://ramacarepolyclinic.ae/services/ayurvedic-diet-vs-intermittent-fasting-dubai/#webpage",
          "url": "https://ramacarepolyclinic.ae/services/ayurvedic-diet-vs-intermittent-fasting-dubai/",
          "name": "Ayurvedic Diet vs Intermittent Fasting Dubai | Dosha Guide",
          "description": "A doctor-reviewed guide from RamaCare Polyclinic, Jumeirah 1, Dubai, comparing intermittent fasting (16:8, 14:10, 5:2) with Ayurvedic Langhana and meal timing, with fasting guidance by dosha, the Dubai heat, and who should not fast.",
          "inLanguage": "en-AE",
          "about": [
            { "@type": "Thing", "name": "Intermittent fasting" },
            { "@type": "Thing", "name": "Langhana and Upavasa (fasting) in Ayurveda" }
          ],
          "isPartOf": { "@id": "https://ramacarepolyclinic.ae/services/ayurveda-dubai/#webpage" },
          "reviewedBy": { "@id": "https://ramacarepolyclinic.ae/doctors/dr-shamna-keloth-meethal-ayurveda-doctor-dubai/#physician" },
          "lastReviewed": "YYYY-MM-DD",
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ramacarepolyclinic.ae/" },
              { "@type": "ListItem", "position": 2, "name": "Ayurveda", "item": "https://ramacarepolyclinic.ae/services/ayurveda-dubai/" },
              { "@type": "ListItem", "position": 3, "name": "Ayurvedic Diet vs Intermittent Fasting", "item": "https://ramacarepolyclinic.ae/services/ayurvedic-diet-vs-intermittent-fasting-dubai/" }
            ]
          }
        },
        {
          "@type": "Physician",
          "@id": "https://ramacarepolyclinic.ae/doctors/dr-shamna-keloth-meethal-ayurveda-doctor-dubai/#physician",
          "name": "Dr. Shamna Keloth Meethal",
          "gender": "Female",
          "url": "https://ramacarepolyclinic.ae/doctors/dr-shamna-keloth-meethal-ayurveda-doctor-dubai/",
          "medicalSpecialty": "https://schema.org/Ayurvedic",
          "knowsLanguage": ["en", "ml", "hi"],
          "worksFor": { "@id": "https://ramacarepolyclinic.ae/#clinic" }
        },
        {
          "@type": "FAQPage",
          "mainEntity": faqsForSchema
        }
      ]
    };

  const handleWhatsAppClick = (sourceMessage = "") => {
    const finalMessage = (typeof sourceMessage === 'string' && sourceMessage !== "") 
      ? sourceMessage 
      : "Hello RamaCare, I'm interested in a Fasting Consultation. Please help me book an appointment.";
      
    const message = encodeURIComponent(finalMessage);
    window.open(`https://wa.me/${content.hero.ctaButtons.secondary.phone}?text=${message}`, '_blank');
  };

  const scrollToForm = () => {
    router.push('/book-appointment/');
  };

  return (
    <Layout>
      {ToastComponent}

      {/* Sticky Top Bar */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: showTopBar ? 0 : -100 }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 right-0 bg-[#1F5E4B] text-white shadow-lg py-3 z-50">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex items-center justify-between gap-4">
            <p className="text-sm md:text-base font-medium">
              {bannerText}
            </p>
            <button
              onClick={scrollToForm}
              className="bg-white text-[#1F5E4B] px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors text-sm md:text-base font-bold whitespace-nowrap">
              {content.stickyTopBar.cta}
            </button>
          </div>
        </div>
      </motion.div>

      <Head>
        <title key="title">Ayurvedic Diet vs Intermittent Fasting Dubai | Dosha Guide</title>
        <meta name="description" content="Intermittent fasting or Ayurvedic meal timing? A doctor-reviewed guide to 16:8, Langhana and fasting by dosha, from RamaCare, Jumeirah 1, Dubai." key="description" />
        <meta name="robots" content="index, follow" key="robots" />
        <link rel="canonical" href="https://ramacarepolyclinic.ae/services/ayurvedic-diet-vs-intermittent-fasting-dubai/" key="canonical" />

        {/* Open Graph Tags */}
        <meta property="og:type" content="website" key="og:type" />
        <meta property="og:title" content="Ayurvedic Diet vs Intermittent Fasting Dubai | Dosha Guide" key="og:title" />
        <meta property="og:description" content="Intermittent fasting or Ayurvedic meal timing? A doctor-reviewed guide to 16:8, Langhana and fasting by dosha, from RamaCare, Jumeirah 1, Dubai." key="og:description" />
        <meta property="og:url" content="https://ramacarepolyclinic.ae/services/ayurvedic-diet-vs-intermittent-fasting-dubai/" key="og:url" />
        <meta property="og:image" content="https://ramacarepolyclinic.ae/images/ayurvedic-diet-intermittent-fasting-dubai-og.jpg" key="og:image" />
        <meta property="og:image:width" content="1200" key="og:image:width" />
        <meta property="og:image:height" content="630" key="og:image:height" />
        <meta property="og:image:alt" content="Ayurvedic diet vs intermittent fasting guide from RamaCare Polyclinic, Jumeirah 1, Dubai" key="og:image:alt" />
        <meta property="og:site_name" content="RamaCare Polyclinic" key="og:site_name" />
        <meta property="og:locale" content="en_AE" key="og:locale" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content="Ayurvedic Diet vs Intermittent Fasting Dubai | Dosha Guide" key="twitter:title" />
        <meta name="twitter:description" content="Intermittent fasting or Ayurvedic meal timing? A doctor-reviewed guide to 16:8, Langhana and fasting by dosha, from RamaCare, Jumeirah 1, Dubai." key="twitter:description" />
        <meta name="twitter:image" content="https://ramacarepolyclinic.ae/images/ayurvedic-diet-intermittent-fasting-dubai-og.jpg" key="twitter:image" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaGraph)
          }}
        />
      </Head>

      {/* Hero Section  */}
      <section className="bg-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Breadcrumbs */}
          <nav className="flex flex-wrap items-center gap-y-1.5 text-xs font-semibold text-[#5F5F5F] mb-6  tracking-wider">
            <a href="/" className="hover:text-[#1F5E4B] transition-colors">Home</a>
            <span className="mx-2">/</span>
            <a href="/services/ayurveda-dubai/" className="hover:text-[#1F5E4B] transition-colors">Ayurveda</a>
            <span className="mx-2">/</span>
            <span className="text-gray-400">Ayurvedic diet vs. intermittent fasting</span>
          </nav>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#1A1A1A] leading-tight mb-6">
              {content.hero.title}
            </h1>
            <p 
              className="text-base md:text-lg text-[#5F5F5F] leading-relaxed"
              dangerouslySetInnerHTML={{ __html: content.hero.description1 }}
            />
            <p 
              className="text-base md:text-lg text-[#5F5F5F] leading-relaxed"
              dangerouslySetInnerHTML={{ __html: content.hero.description2 }}
            />
            {/* Summary Section */}
            <div className="bg-[#E9E2D6] p-6 rounded-2xl space-y-3 border border-[#1F5E4B]/10 my-8">
              <h3 className="text-[#1F5E4B] font-bold text-lg">
                {content.summary.title}
              </h3>
              <div className="space-y-2">
                <p className="text-[#1A1A1A] font-bold">
                  {content.summary.question}
                </p>
                <p className="text-[#5F5F5F] text-base leading-relaxed">
                  {content.summary.answer}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={scrollToForm}
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-lg text-white bg-[#1F5E4B] hover:bg-[#1F5E4B]/90 transition-colors shadow-md min-w-[200px]">
                {content.hero.ctaButtons.primary.text}
              </button>
              <button
                onClick={() => handleWhatsAppClick("Hello RamaCare, I'm interested in a Fasting Consultation. Please help me book an appointment.")}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-transparent text-base font-bold rounded-lg text-white bg-[#25D366] hover:bg-[#25D366]/90 transition-colors shadow-md min-w-[200px]" >
                <LucideIcons.MessageCircle className="w-5 h-5" />
                <span>WhatsApp Now</span>
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative min-h-[500px] rounded-3xl overflow-hidden shadow-sm">
            <div className="absolute inset-0">
              {/* Image placeholder - replace src with your image */}
              <Image
                src="/images/fasting.jpg"
                alt="Ayurvedic Diet vs Intermittent Fasting"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>

      {/* Comparison Section - Section 1 */}
      <section className="bg-[#F5F1EA] py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-12 text-center">
            {content.comparisonSection.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {content.comparisonSection.items.map((column, colIndex) => {
              const HeaderIcon = LucideIcons[column.icon];
              return (
                <div key={colIndex} className={`bg-white p-8 rounded-2xl shadow-sm space-y-4 border ${colIndex === 0 ? 'border-blue-600/10' : 'border-[#1F5E4B]/10'}`}>
                  <div className="flex items-center gap-3 mb-6">
                    <HeaderIcon className={`w-8 h-8 ${column.iconColor}`} />
                    <h3 className="text-xl md:text-2xl font-bold text-[#1A1A1A]">
                      {column.title}
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {column.features.map((feature, featureIndex) => {
                      const FeatureIcon = LucideIcons[feature.icon];
                      const isAlert = feature.icon === 'AlertCircle';
                      return (
                        <div key={featureIndex} className="flex items-start gap-2">
                          <FeatureIcon className={`w-5 h-5 mt-0.5 flex-shrink-0 ${isAlert ? 'text-orange-500' : feature.color}`} />
                          <p className="text-base text-[#5F5F5F] leading-snug">
                            {feature.text.split(/(Dosha-specific|Ojas)/).map((part, i) => 
                              (part === 'Dosha-specific' || part === 'Ojas') ? <strong key={i} className="font-bold">{part}</strong> : part
                            )}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pitta Warning Section - Section 2 */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] text-center mb-12 md:mb-16">
            {content.pittaWarning.title}
          </h2>
          
          <div className="bg-gradient-to-r from-orange-50 to-[#E9E2D6] p-8 md:p-12 rounded-2xl border-l-4 border-orange-500">
            <div className="flex items-start gap-4 mb-6">
              <LucideIcons.AlertTriangle className="w-8 h-8 text-orange-500 flex-shrink-0 mt-1" />
              <h3 className="text-2xl md:text-3xl font-bold text-[#1A1A1A]">
                {content.pittaWarning.cardTitle}
              </h3>
            </div>

            <div className="space-y-6 max-w-4xl">
              <p className="text-lg text-[#5F5F5F] leading-relaxed">
                Dubai's summer temperatures regularly exceed <span className="text-orange-600 font-bold">45°C</span>, creating a high-Pitta environment. In Ayurveda, Pitta represents heat and transformation in the body.
              </p>
              
              <p className="text-lg text-[#5F5F5F] font-medium">
                {content.pittaWarning.riskIntro}
              </p>

              <ul className="grid md:grid-cols-2 gap-4">
                {content.pittaWarning.risks.map((risk, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                    <span className="text-base text-[#5F5F5F]">
                      <span className="font-bold text-[#1A1A1A]">{risk.highlight}</span> {risk.text}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="bg-white/60 p-6 rounded-2xl border border-orange-100 mt-8">
                <p className="text-[#1F5E4B] text-base md:text-lg leading-relaxed">
                  <span className="font-bold">The Ayurvedic Solution:</span> Cooling foods at Iftar (coconut water, cucumber, mint), shorter fasting windows for Pitta types, and strategic hydration protocols designed for the UAE climate.
                </p>
              </div>
            </div>

            {/* Temperature Scale */}
            <div className="mt-12 pt-8 border-t border-orange-100/50">
              <div className="flex items-center gap-4 max-w-[600px] mx-auto">
                <LucideIcons.Thermometer className="w-8 h-8 text-orange-500" />
                <div className="h-2 flex-1 max-w-md bg-gradient-to-r from-yellow-300 via-orange-400 to-red-600 rounded-full" />
                <span className="text-orange-600 font-bold text-[18px] whitespace-nowrap">45°C+</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    <AyurvedaInfoSection content={content.ifMethods} />
    <AyurvedaInfoSection content={content.ayurvedicTiming} />
    <AyurvedaInfoSection content={content.sampleDay} />

      {/* Dosha Comparison Table Section - Section 4 */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[1031px] mx-auto px-4 md:px-0">
          <div className="text-center mb-8">
            <h2 className="text-[36px] font-bold text-[#1A1A1A] mb-8 leading-tight">
              {content.doshaComparison.title}
            </h2>
            <p className="text-[18px] text-[#5F5F5F] max-w-[768px] mx-auto leading-relaxed mb-12">
              {content.doshaComparison.description}
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl shadow-sm border border-gray-100">
            <table className="w-full text-left border-collapse bg-white">
              <thead>
                <tr className="bg-[#1F5E4B] text-white">
                  {content.doshaComparison.table.headers.map((header, index) => (
                    <th key={index} className="p-6 text-base font-bold whitespace-nowrap">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {content.doshaComparison.table.rows.map((row, index) => (
                  <tr key={index} className="border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors">
                    <td className="p-6">
                      <div className="font-bold text-[#1A1A1A] text-lg">{row.dosha}</div>
                      <div className="text-[#5F5F5F] text-sm">{row.sub}</div>
                    </td>
                    <td className="p-6 text-[#5F5F5F] text-base leading-relaxed">
                      {row.ifRec}
                    </td>
                    <td className="p-6 text-[#5F5F5F] text-base leading-relaxed">
                      {row.ayurWarning.split(row.warningHighlight).map((part, i, arr) => (
                        <React.Fragment key={i}>
                          {part}
                          {i < arr.length - 1 && (
                            <span className={row.dosha === 'Kapha' ? 'text-[#1F5E4B] font-bold' : 'text-orange-600 font-bold'}>
                              {row.warningHighlight}
                            </span>
                          )}
                        </React.Fragment>
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 bg-[#E9E2D6] p-6 rounded-xl text-center w-full min-h-[168px] flex flex-col items-center justify-center">
            <p className="text-[#1A1A1A] text-[18px] mb-8 leading-relaxed max-w-[983px]">
              {content.doshaComparison.cta.text}
            </p>
            <a
              href="/services/prakriti-dosha-assessment-dubai/#dosha-quiz"
              className="bg-[#1F5E4B] text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-[#1F5E4B]/90 transition-colors shadow-md inline-block"
            >
              {content.doshaComparison.cta.button}
            </a>
          </div>
        </div>
      </section>
<AyurvedaInfoSection content={content.whoShouldNot} />
      {/* FAQ Section - Section 5 */}
      <section className="bg-[#F5F1EA] py-16 md:py-24">
        <div className="max-w-[896px] mx-auto px-4 md:px-0">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-[36px] font-bold text-[#1A1A1A] mb-4 leading-tight">
              {content.faq.title}
            </h2>
            <p className="text-[18px] text-[#5F5F5F] max-w-[768px] mx-auto leading-relaxed">
              {content.faq.description}
            </p>
          </div>

          <div className="space-y-4 mb-12">
            {content.faq.items.map((item, index) => (
              <details key={index} className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none group-open:bg-[#F5F1EA]/30 hover:bg-[#F5F1EA]/50 transition-colors">
                  <span className="text-lg font-bold text-[#1A1A1A] pr-4">{item.question}</span>
                  <div className="transition-transform duration-300 group-open:rotate-180">
                    <LucideIcons.ChevronDown className="w-6 h-6 text-[#1F5E4B]" />
                  </div>
                </summary>
                <div className="p-6 pt-0 text-[18px] text-[#5F5F5F] leading-relaxed border-t border-gray-50/50">
                  {item.answer}
                </div>
              </details>
            ))}

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center w-full min-h-[156px] flex flex-col items-center justify-center mt-12">
              <p className="text-[#1A1A1A] text-[18px] mb-4 max-w-[832px]">
                <strong className="font-bold text-[18px]">Still unsure?</strong> Every body is different. Get personalized answers.
              </p>
              <button
                onClick={() => handleWhatsAppClick("Hello RamaCare, I have some questions about intermittent fasting and my diet.")}
                className="bg-[#1F5E4B] text-white px-8 py-3 rounded-lg font-bold text-base hover:bg-[#1F5E4B]/90 transition-colors"
              >
                {content.faq.footer.button}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Authority Section - Section 6 */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-6">
              {content.authority.title}
            </h2>
            <p className="text-lg text-[#5F5F5F] max-w-3xl mx-auto leading-relaxed">
              {content.authority.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {content.authority.cards.map((card, index) => {
              const CardIcon = LucideIcons[card.icon];
              return (
                <div key={index} className="bg-[#F5F1EA]/50 p-6 rounded-2xl text-center flex flex-col items-center justify-center space-y-4">
                  <div className="p-3 bg-white rounded-xl shadow-sm text-[#1F5E4B]">
                    <CardIcon className="w-8 h-8" />
                  </div>
                  <h4 className="font-bold text-[#1A1A1A]">{card.title}</h4>
                  <p className="text-[#5F5F5F] text-xs md:text-sm">{card.text}</p>
                </div>
              );
            })}
          </div>

          <div className="bg-[#1F5E4B] rounded-[2.5rem] p-8 md:p-12 lg:p-16 text-white text-center relative overflow-hidden">
            <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-10">
              {content.authority.benefitBox.title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5 text-left mb-10">
              {content.authority.benefitBox.items.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <LucideIcons.Check className="w-5 h-5 flex-shrink-0" />
                  <span className="text-base md:text-lg">{item}</span>
                </div>
              ))}
            </div>
            <button
              onClick={() => handleWhatsAppClick("Hello RamaCare, I'd like to book a fasting and diet consultation with Dr. Shamna.")}
              className="bg-white text-[#1F5E4B] px-10 py-4 rounded-xl font-bold text-lg hover:bg-[#F5F1EA] transition-colors shadow-xl">
              {content.authority.benefitBox.button}
            </button>
          </div>
          </div>
        </div>
      </section>

      {/* Related Reading */}
      <section className="bg-white py-16 md:py-24 border-t border-[#E9E2D6]/40">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] text-center mb-10">
            Related Ayurvedic Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
            <a href="/services/ayurvedic-diet-plan-dubai/" className="bg-[#F5F1EA] hover:bg-[#E9E2D6] p-6 rounded-2xl flex items-center justify-between transition-all group shadow-sm">
              <span className="font-bold text-[#1A1A1A] group-hover:text-[#1F5E4B]">Ayurvedic Diet Plan</span>
              <LucideIcons.ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#1F5E4B] transition-transform group-hover:translate-x-1" />
            </a>
            <a href="/services/ayurvedic-diet-weight-loss-dubai/" className="bg-[#F5F1EA] hover:bg-[#E9E2D6] p-6 rounded-2xl flex items-center justify-between transition-all group shadow-sm">
              <span className="font-bold text-[#1A1A1A] group-hover:text-[#1F5E4B]">Ayurvedic Diet for Weight Loss</span>
              <LucideIcons.ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#1F5E4B] transition-transform group-hover:translate-x-1" />
            </a>
            <a href="/services/pcos-treatment-dubai/" className="bg-[#F5F1EA] hover:bg-[#E9E2D6] p-6 rounded-2xl flex items-center justify-between transition-all group shadow-sm">
              <span className="font-bold text-[#1A1A1A] group-hover:text-[#1F5E4B]">Ayurvedic PCOS Treatment</span>
              <LucideIcons.ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#1F5E4B] transition-transform group-hover:translate-x-1" />
            </a>
            <a href="/services/ayurvedic-diet-diabetes-dubai/" className="bg-[#F5F1EA] hover:bg-[#E9E2D6] p-6 rounded-2xl flex items-center justify-between transition-all group shadow-sm">
              <span className="font-bold text-[#1A1A1A] group-hover:text-[#1F5E4B]">Ayurvedic Diet for Diabetes</span>
              <LucideIcons.ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#1F5E4B] transition-transform group-hover:translate-x-1" />
            </a>
            <a href="/services/ayurvedic-detox-diet-plan-dubai/" className="bg-[#F5F1EA] hover:bg-[#E9E2D6] p-6 rounded-2xl flex items-center justify-between transition-all group shadow-sm">
              <span className="font-bold text-[#1A1A1A] group-hover:text-[#1F5E4B]">Ayurvedic Detox Diet</span>
              <LucideIcons.ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#1F5E4B] transition-transform group-hover:translate-x-1" />
            </a>
            <a href="/services/prakriti-dosha-assessment-dubai/" className="bg-[#F5F1EA] hover:bg-[#E9E2D6] p-6 rounded-2xl flex items-center justify-between transition-all group shadow-sm">
              <span className="font-bold text-[#1A1A1A] group-hover:text-[#1F5E4B]">Prakriti & Dosha Assessment</span>
              <LucideIcons.ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#1F5E4B] transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>

      {/* Content Reviewer Badge */}
      <ContentReviewBadge doctorName="Dr. Shamna Keloth Meethal" pageSlug="ayurvedic-diet-vs-intermittent-fasting-dubai" lastReviewed="2026-01-12" />
      <AyurvedaInfoSection content={content.yourVisit} />

      {/* Final CTA Banner */}
      <section className="bg-[#1F5E4B] py-20 md:py-24 lg:py-32 relative overflow-hidden text-center">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Master the art of fasting <br className="hidden md:block" /> without the burnout
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Elevate your health with a professional Ayurvedic Diet Plan Dubai that respects your body's unique needs and the UAE's cultural traditions.
          </p>
          <button
            onClick={scrollToForm}
            className="bg-white text-[#1F5E4B] px-12 py-5 rounded-lg font-bold text-lg md:text-xl hover:bg-[#F5F1EA] transition-all transform hover:scale-105 shadow-2xl"
          >
            Book Your Fasting Consultation in Jumeirah Today
          </button>
          <p className="text-white/80 text-sm md:text-base mt-6">
            DHA-licensed polyclinic • Jumeirah 1, Dubai • Open daily 10am–10pm
          </p>
        </div>
      </section>
    </Layout>
  );
}
