import React, { useState, useEffect } from 'react';
import Layout from '../../../components/Layout';
import Head from "next/head";
import { motion, AnimatePresence } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { useToast } from '../../../components/Toast';
import { useRouter } from 'next/router';
import ContentReviewBadge from '../../../components/ContentReviewBadge';
import AyurvedaInfoSection from '../../../components/AyurvedaInfoSection'; 

const content = {
  hero: {
    title: 'Ayurvedic Detox Diet Plan in Dubai: A Doctor-Planned Kitchari Reset',
    description: 'An Ayurvedic detox diet is a short, gentle reset that rests your digestion with simple, warm food, mainly kitchari (mung dal and rice), instead of juices or fasting. At RamaCare Polyclinic in Jumeirah 1, Dubai, it starts with a consultation with Dr. Shamna Keloth Meethal (BAMS), who checks that it suits you and decides how long it should last. Your plan includes preparation days, kitchari reset days, a gradual return to normal food and a follow-up, with optional therapies at the clinic.',
    summary: {
      title: 'How Do You Do an Ayurvedic Detox?',
      question: 'In short:',
      answer: 'Prepare for a few days by cutting caffeine, sugar, alcohol and processed food; then eat freshly cooked kitchari with warm water or cumin-coriander-fennel tea for the number of days your doctor advises; rest more than usual; and return to normal food gradually. In Ayurveda this gives Agni (digestive fire) a rest. Ghee or Triphala should only be taken if the doctor prescribes them.'
    },
    ctaButtons: {
      primary: { text: 'Start Your Detox Plan' },
      secondary: { text: 'WhatsApp Consultation', phone: '971566597878' }
    },
    topBanner: 'Dubai Detox Program – 5 to 7 Day Ayurvedic Reset',
    badges: [ 'DHA-licensed polyclinic', 'Jumeirah 1', 'Length set by your doctor' ]
  },
  essential: {
    title: 'Why People in Dubai Choose an Ayurvedic Detox Diet',
    items: [
      { title: 'Eating Out and Late Dinners', description: 'Frequent restaurant meals, brunches and late dinners leave many people feeling heavy and bloated; a few days of simple food gives digestion a rest.', icon: 'Utensils' },
      { title: 'Caffeine and Sugar Habits', description: 'Office routines often run on coffee, energy drinks and sweets; the preparation days help you reset these habits gently.', icon: 'Coffee' },
      { title: 'After Holidays, Ramadan or Summer', description: 'Many people plan a short reset after travel, festive eating or the summer, at a change of season, as Ayurveda traditionally advises.', icon: 'CalendarDays' }
    ]
  },
  phases: {
    title: 'How RamaCare\'s Ayurvedic Detox Plan Works',
    subtitle: 'Six steps, planned and reviewed by Dr. Shamna. The length of each step depends on your health and goals.',
    items: [
      { step: 1, title: 'Step 1: Consultation', description: 'Dr. Shamna (BAMS) reviews your health, digestion, medicines and goals, assesses your dosha and Agni, and decides whether a detox diet suits you and for how long. If needed, our GP in the same building can arrange tests first. From AED 200.' },
      { step: 2, title: 'Step 2: Preparation Days', description: 'At home, gradually cut caffeine, sugar, alcohol, meat and processed food, eat regular warm meals and go to bed earlier.' },
      { step: 3, title: 'Step 3: Kitchari Reset Days', description: 'Freshly cooked kitchari (split mung dal and basmati rice with mild spices) for meals, with warm water or cumin-coriander-fennel tea. Ghee or Triphala only if the doctor prescribes them.' },
      { step: 4, title: 'Step 4: Optional Clinic Therapies', description: 'If suitable, therapies such as Abhyanga (oil massage), Udwarthanam (herbal powder massage), herbal steam or lymphatic drainage, given by a therapist of your own gender in 60–90 minute sessions.' },
      { step: 5, title: 'Step 5: Reintroduction Days', description: 'Return to normal food gradually: soups and steamed vegetables first, then your usual diet. Avoid a heavy brunch or late dinner straight after.' },
      { step: 6, title: 'Step 6: Follow-Up', description: 'A follow-up with Dr. Shamna to review how you felt and plan simple habits, or a deeper Panchakarma programme if you need one.' }
    ],
    phases: [
      { step: 1, title: 'Step 1: Consultation', description: 'Dr. Shamna (BAMS) reviews your health, digestion, medicines and goals, assesses your dosha and Agni, and decides whether a detox diet suits you and for how long. If needed, our GP in the same building can arrange tests first. From AED 200.' },
      { step: 2, title: 'Step 2: Preparation Days', description: 'At home, gradually cut caffeine, sugar, alcohol, meat and processed food, eat regular warm meals and go to bed earlier.' },
      { step: 3, title: 'Step 3: Kitchari Reset Days', description: 'Freshly cooked kitchari (split mung dal and basmati rice with mild spices) for meals, with warm water or cumin-coriander-fennel tea. Ghee or Triphala only if the doctor prescribes them.' },
      { step: 4, title: 'Step 4: Optional Clinic Therapies', description: 'If suitable, therapies such as Abhyanga (oil massage), Udwarthanam (herbal powder massage), herbal steam or lymphatic drainage, given by a therapist of your own gender in 60–90 minute sessions.' },
      { step: 5, title: 'Step 5: Reintroduction Days', description: 'Return to normal food gradually: soups and steamed vegetables first, then your usual diet. Avoid a heavy brunch or late dinner straight after.' },
      { step: 6, title: 'Step 6: Follow-Up', description: 'A follow-up with Dr. Shamna to review how you felt and plan simple habits, or a deeper Panchakarma programme if you need one.' }
    ]
  },
  // In the content object:
kitchariRecipe: {
  id: 'kitchari-recipe',
  heading: 'Simple Kitchari Recipe for Your Kitchari Cleanse (Serves 2)',
  items: [
    { text: 'Ingredients: ½ cup split yellow mung dal, ½ cup basmati rice, 4–6 cups water, 1 tsp ghee or oil (as your doctor advises), ½ tsp cumin seeds, a pinch of asafoetida (hing), 1 tsp grated ginger, ½ tsp turmeric, ½ tsp ground coriander, rock salt to taste, and soft vegetables such as zucchini, carrot or spinach.' },
    { text: 'Rinse the dal and rice well until the water runs clear.' },
    { text: 'Warm the ghee or oil, add cumin seeds, hing and ginger for a few seconds, then turmeric and coriander.' },
    { text: 'Add the dal, rice and water; simmer for 30–40 minutes until soft and porridge-like, adding vegetables for the last 10 minutes.' },
    { text: 'Add salt and fresh coriander. Make it fresh each day and eat it warm.' }
  ],
  note: 'Your doctor may adjust the spices for your dosha. If you have kidney disease or need a low-salt diet, ask first.'
},
sampleDay: {
  id: 'sample-day',
  heading: 'Sample Kitchari Reset Day',
  intro: 'An example only. Your plan is set by your doctor.',
  table: [
    ['On waking', 'A glass of warm water'],
    ['Breakfast', 'A small bowl of kitchari, or stewed apple with cinnamon'],
    ['Lunch (main meal)', 'Kitchari with soft cooked vegetables'],
    ['Afternoon', 'Cumin-coriander-fennel (CCF) tea'],
    ['Dinner (early)', 'A smaller bowl of kitchari or a light vegetable soup'],
    ['Through the day', 'Warm water or CCF tea; rest, gentle walks, early bedtime']
  ]
},
detoxVsPanchakarma: {
  id: 'detox-vs-panchakarma',
  heading: 'Ayurvedic Detox Diet vs Panchakarma',
  table: [
    ['What it is', 'Detox diet: a gentle, food-based reset at home. Panchakarma: a clinical programme of supervised therapies.'],
    ['Length', 'Detox diet: set by your doctor, usually short. Panchakarma: 7, 14 or 21 days.'],
    ['Therapies', 'Detox diet: optional massage, steam or lymphatic drainage. Panchakarma: Vamana, Virechana, Basti, Nasya or Raktamokshana.'],
    ['Best for', 'Detox diet: a seasonal reset or after heavy eating. Panchakarma: long-standing digestive, skin, joint or weight concerns.'],
    ['At RamaCare', 'Both start with a consultation with Dr. Shamna, who advises which suits you.']
  ],
  note: 'Read more: Panchakarma treatment in Dubai (/services/panchakarma-treatment-dubai/).'
},
whoShouldNot: {
  id: 'who-should-not',
  heading: 'Who Should Not Do a Detox Diet?',
  intro: 'Do not start a detox diet on your own if you:',
  items: [
    { text: 'are pregnant or breastfeeding' },
    { text: 'have diabetes or take regular medicines, unless your doctor agrees' },
    { text: 'are underweight or have a history of eating disorders' },
    { text: 'are under 18, or recovering from illness or surgery' },
    { text: 'are fasting for Ramadan (plan it before or after)' }
  ],
  note: 'At RamaCare, Dr. Shamna and our GP can check what is safe for you.'
},
yourVisit: {
  id: 'your-visit',
  heading: 'Your Detox Consultation in Jumeirah 1',
  table: [
    ['Doctor', 'Dr. Shamna Keloth Meethal, BAMS, DHA-licensed Ayurvedic doctor (11+ years)'],
    ['Consultation', 'From AED 200, 45–60 minutes'],
    ['Therapies, if added', 'Same-gender, Kerala-trained therapists; 60–90 minute sessions; prices confirmed when you book'],
    ['Address', '12 Al Dhiyafah Road, Jumeirah Terrace Building, Ground Floor, Jumeirah 1, Dubai'],
    ['Nearby', 'A few minutes from Satwa and Al Wasl; about 10 minutes from Jumeirah 2, City Walk and La Mer'],
    ['Hours', 'Every day, 10am–10pm']
  ]
},
  spices: {
    title: 'Three Spices Used in an Ayurvedic Detox Diet',
    description: 'These traditional Ayurvedic spices help ignite Agni (digestive fire) and flush Ama (toxins) – essential for clearing the effects of stress and heavy Dubai dining.',
    items: [
      {
        title: 'Coriander (Dhania)',
        description: 'Cooling in Ayurvedic terms, which makes it popular in the Dubai heat; used in kitchari and CCF tea.',
        image: '/images/detox.jpg'
      },
      {
        title: 'Cumin (Jeera)',
        description: 'Traditionally used for gas and bloating after meals.',
        image: '/images/detox1.jpg'
      },
      {
        title: 'Fennel (Saunf)',
        description: 'Chewed after meals or brewed as tea; traditionally used to settle digestion and sweet cravings.',
        image: '/images/detox2.jpg'
      }
    ]
  },
  faqs: {
   title: 'Ayurvedic Detox Diet: Frequently Asked Questions',
    items: [
      { question: 'What is an Ayurvedic detox diet?', answer: 'It is a short, gentle reset using simple, warm, easy-to-digest food, mainly kitchari (mung dal and rice), with spiced drinks and more rest. In Ayurveda it gives Agni (digestive fire) a rest. At RamaCare it is planned by Dr. Shamna Keloth Meethal (BAMS).' },
      { question: 'How does the detox plan at RamaCare work?', answer: 'A consultation with Dr. Shamna (from AED 200), then preparation days at home, kitchari reset days, optional clinic therapies, gradual reintroduction of foods, and a follow-up. The doctor decides the length of each step.' },
      { question: 'How long does an Ayurvedic detox diet last?', answer: 'Your doctor decides, based on your health and goals. Many plans include a few preparation days, a few kitchari days and a few days to return to normal food.' },
      { question: 'What is kitchari and how do I make it?', answer: 'Kitchari is split yellow mung dal and basmati rice cooked together with mild spices such as cumin, turmeric, coriander and ginger, and soft vegetables. The recipe is on this page.' },
      { question: 'What can I eat and drink during the detox?', answer: 'Freshly made kitchari, soft cooked vegetables, warm water and cumin-coriander-fennel tea. Avoid caffeine, alcohol, sugar, cold drinks, raw and processed food unless your doctor advises otherwise.' },
      { question: 'Will I feel tired or hungry?', answer: 'Some people feel more tired, hungry or have a mild headache in the first days, often from cutting caffeine and sugar. Rest more and eat enough kitchari. Tell your doctor if you feel unwell, dizzy or very weak.' },
      { question: 'Can I do the detox while working?', answer: 'Yes. Many people follow it alongside office work: cook kitchari in the morning, take it in a flask, and keep evenings quiet. Plan your reset for a lighter week.' },
      { question: 'Is a detox diet the same as Panchakarma?', answer: 'No. A detox diet is a gentle, food-based reset you follow at home. Panchakarma is a clinical programme of 7–21 days with supervised therapies such as Virechana or Basti. The doctor tells you which suits you.' },
      { question: 'Do I need ghee or Triphala during the detox?', answer: 'Only if the doctor prescribes them. Taking medicated ghee or herbal laxatives on your own is not advised.' },
      { question: 'Who should not do a detox diet?', answer: 'Pregnant or breastfeeding women, people with diabetes or other conditions on regular medicines (unless their doctor agrees), people who are underweight or have a history of eating disorders, under-18s, and anyone recovering from illness or surgery.' },
      { question: 'Can I do a detox diet during Ramadan?', answer: 'It is better to plan it before or after Ramadan. A kitchari reset is popular in the weeks after Ramadan to return gently to regular meals.' },
      { question: 'Which clinic therapies can I add?', answer: 'If suitable, Abhyanga (oil massage), Udwarthanam (herbal powder massage), herbal steam and lymphatic drainage, given by a therapist of your own gender in 60–90 minute sessions.' },
      { question: 'Will an Ayurvedic detox help me lose weight?', answer: 'Some people feel lighter, but short-term weight change is mostly fluid. For lasting weight goals, see our Ayurvedic diet for weight loss.' },
      { question: 'When is the best time for a detox in Dubai?', answer: 'Ayurveda recommends a reset at a change of season. In Dubai, many people choose the cooler months, the weeks after Ramadan, or after holidays.' },
      { question: 'How much does it cost?', answer: 'The consultation with Dr. Shamna starts from AED 200. Any therapies are priced according to your plan and confirmed when you book.' },
      { question: 'Where is RamaCare?', answer: '12 Al Dhiyafah Road, Jumeirah Terrace Building, Ground Floor, Jumeirah 1, Dubai, a few minutes from Satwa and Al Wasl and about 10 minutes from Jumeirah 2, City Walk and La Mer. Open every day, 10am–10pm.' }
      ]
  },
  experience: {
    title: 'Why Do a Guided Detox at RamaCare?',
    items: [
      { title: 'Doctor-Planned', description: 'Dr. Shamna (BAMS) checks it is right for you, sets the length and reviews you afterwards.', icon: 'Stethoscope' },
      { title: 'GP in the Same Building', description: 'If you take regular medicines or have a health condition, our GP can check you first.', icon: 'HeartPulse' },
      { title: 'Spices and Diet for Your Dosha', description: 'Your kitchari spices and food choices are adjusted for your dosha and the Dubai climate.', icon: 'Leaf' },
      { title: 'Optional Therapies', description: 'Abhyanga, Udwarthanam, herbal steam and lymphatic drainage, with a therapist of your own gender.', icon: 'Sparkles' }
    ]
  },
  authorityFooter: {
    title: 'Ready for a Gentle Reset?',
    description: 'Book a consultation with Dr. Shamna in Jumeirah 1, from AED 200. She will tell you whether a detox diet or another plan suits you.',
    cta: 'Book Your Detox Consultation',
    buttonText: 'Book Your Detox Consultation'
  },
  reviewer: {
    name: 'Dr. Shamna Keloth Meethal',
    role: 'BAMS, Ayurveda Doctor (DHA Licensed)'
  }
};

export default function AyurvedicDetoxDietPlanPage() {
  const { showToast, ToastComponent } = useToast();
  const [openFaq, setOpenFaq] = useState(0);
  const router = useRouter();

  const faqsForSchema = content.faqs.items.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer.replace(/<[^>]*>/g, '')
    }
  }));

  const schemaGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://ramacarepolyclinic.ae/services/ayurvedic-detox-diet-plan-dubai/#webpage",
      "url": "https://ramacarepolyclinic.ae/services/ayurvedic-detox-diet-plan-dubai/",
      "name": "Ayurvedic Detox Diet Plan Dubai | Kitchari Reset, Jumeirah 1",
      "inLanguage": "en-AE",
      "about": { "@id": "https://ramacarepolyclinic.ae/services/ayurvedic-detox-diet-plan-dubai/#diet" },
      "isPartOf": { "@id": "https://ramacarepolyclinic.ae/services/ayurveda-dubai/#webpage" },
      "reviewedBy": { "@id": "https://ramacarepolyclinic.ae/doctors/dr-shamna-keloth-meethal-ayurveda-doctor-dubai/#physician" },
      "lastReviewed": "YYYY-MM-DD",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ramacarepolyclinic.ae/" },
          { "@type": "ListItem", "position": 2, "name": "Ayurveda", "item": "https://ramacarepolyclinic.ae/services/ayurveda-dubai/" },
          { "@type": "ListItem", "position": 3, "name": "Ayurvedic Detox Diet Plan", "item": "https://ramacarepolyclinic.ae/services/ayurvedic-detox-diet-plan-dubai/" }
        ]
      }
    },
    {
      "@type": "Diet",
      "@id": "https://ramacarepolyclinic.ae/services/ayurvedic-detox-diet-plan-dubai/#diet",
      "name": "Ayurvedic detox diet (kitchari reset)",
      "alternateName": ["Ayurvedic detox", "Kitchari cleanse", "Kitchari reset", "Ayurvedic cleanse"],
      "description": "A doctor-planned Ayurvedic detox diet at RamaCare Polyclinic, Jumeirah 1, Dubai: a consultation with a BAMS doctor, preparation days, a kitchari mono-diet with warm spiced drinks, optional clinic therapies, gradual reintroduction of foods and a follow-up. The length is decided by the doctor.",
      "dietFeatures": "Preparation days, kitchari (mung dal and rice) meals, CCF tea and warm water, gradual reintroduction; ghee or Triphala only if prescribed",
      "expertConsiderations": "Not suitable during pregnancy or breastfeeding, for people with diabetes on medication without medical advice, for people who are underweight or have a history of eating disorders, or during Ramadan fasting.",
      "endorsers": { "@id": "https://ramacarepolyclinic.ae/doctors/dr-shamna-keloth-meethal-ayurveda-doctor-dubai/#physician" }
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

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hello RamaCare, I'm interested in the Ayurvedic Detox Diet Plan. Please help me book a consultation.");
    window.open(`https://wa.me/${content.hero.ctaButtons.secondary.phone}?text=${message}`, '_blank');
  };

  const handleBookAppointment = () => {
    router.push('/book-appointment/');
  };

  return (
    <Layout>
      {ToastComponent}
      <Head>
        <title key="title">Ayurvedic Detox Diet Plan Dubai | Kitchari Reset, Jumeirah 1</title>
        <meta name="description" content="A doctor-planned Ayurvedic detox diet in Jumeirah 1, Dubai: preparation, a kitchari reset, optional therapies and follow-up with a BAMS doctor. From AED 200." key="description" />
        <meta name="robots" content="index, follow" key="robots" />
        <link rel="canonical" href="https://ramacarepolyclinic.ae/services/ayurvedic-detox-diet-plan-dubai/" key="canonical" />

        {/* Open Graph Tags */}
        <meta property="og:type" content="website" key="og:type" />
        <meta property="og:title" content="Ayurvedic Detox Diet Plan Dubai | Kitchari Reset, Jumeirah 1" key="og:title" />
        <meta property="og:description" content="A doctor-planned Ayurvedic detox diet in Jumeirah 1, Dubai: preparation, a kitchari reset, optional therapies and follow-up with a BAMS doctor. From AED 200." key="og:description" />
        <meta property="og:url" content="https://ramacarepolyclinic.ae/services/ayurvedic-detox-diet-plan-dubai/" key="og:url" />
        <meta property="og:image" content="https://ramacarepolyclinic.ae/images/detox3.png" key="og:image" />
        <meta property="og:image:width" content="1200" key="og:image:width" />
        <meta property="og:image:height" content="630" key="og:image:height" />
        <meta property="og:image:alt" content="Ayurvedic kitchari detox diet planned by a doctor at RamaCare Polyclinic, Jumeirah 1, Dubai" key="og:image:alt" />
        <meta property="og:site_name" content="RamaCare Polyclinic" key="og:site_name" />
        <meta property="og:locale" content="en_AE" key="og:locale" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content="Ayurvedic Detox Diet Plan Dubai | Kitchari Reset, Jumeirah 1" key="twitter:title" />
        <meta name="twitter:description" content="A doctor-planned Ayurvedic detox diet in Jumeirah 1, Dubai: preparation, a kitchari reset, optional therapies and follow-up with a BAMS doctor. From AED 200." key="twitter:description" />
        <meta name="twitter:image" content="https://ramacarepolyclinic.ae/images/detox3.png" key="twitter:image" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaGraph)
          }}
        />
      </Head>

      {/* Top Banner */}
      <div className="bg-[#F2EFE9] py-3 px-4 border-b border-[#E9E2D6] hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <p className="text-[#1A1A1A] text-sm md:text-base flex-1 text-center font-medium">
            {content.hero.topBanner}
          </p>
          <button
            onClick={handleBookAppointment}
            className="bg-[#1F5E4B] text-white px-6 py-2 rounded-full text-base font-bold hover:bg-[#163f35] transition-all"
          >
            Start Your Detox Plan
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        {/* Breadcrumbs */}
        <nav className="flex flex-wrap items-center gap-y-1.5 text-xs font-semibold text-[#5F5F5F] mb-6  tracking-wider">
          <a href="/" className="hover:text-[#1F5E4B] transition-colors">Home</a>
          <span className="mx-2">/</span>
          <a href="/services/ayurveda-dubai/" className="hover:text-[#1F5E4B] transition-colors">Ayurveda</a>
          <span className="mx-2">/</span>
          <span className="text-gray-400">Ayurvedic detox diet plan</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-6 leading-tight">
              {content.hero.title}
            </h1>
            <p className="text-[#5F5F5F] text-lg mb-10 leading-relaxed">
              {content.hero.description}
            </p>

            {/* Summary Box */}
            <div className="bg-[#F2EFE9] p-8 rounded-2xl mb-10 border border-[#E9E2D6]">
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">
                {content.hero.summary.title}
              </h3>
              <p className="text-[#1A1A1A] leading-relaxed">
                <span className="font-bold">{content.hero.summary.question}</span> {content.hero.summary.answer}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button
                onClick={handleBookAppointment}
                className="bg-[#1F5E4B] text-white px-8 py-4 rounded-full font-bold hover:bg-[#163f35] transition-all shadow-lg flex items-center justify-center gap-2"
              >
                {content.hero.ctaButtons.primary.text}
              </button>
              <button
                onClick={handleWhatsAppClick}
                className="bg-white text-[#1F5E4B] px-8 py-4 rounded-full font-bold border-2 border-[#1F5E4B] hover:bg-[#1F5E4B] hover:text-white transition-all text-center flex items-center justify-center gap-2"
              >
                <LucideIcons.MessageCircle size={20} />
                {content.hero.ctaButtons.secondary.text}
              </button>
            </div>

            {/* Trust Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-8 border-t border-[#E9E2D6]/40">
              <div className="flex items-center gap-2">
                <LucideIcons.ShieldCheck className="w-5 h-5 text-[#1F5E4B]" />
                <span className="text-xs font-semibold text-gray-700">DHA Licensed Facility</span>
              </div>
              <div className="flex items-center gap-2">
                <LucideIcons.Clock className="w-5 h-5 text-[#1F5E4B]" />
                <span className="text-xs font-semibold text-gray-700">BAMS doctor-planned</span>
              </div>
              <div className="flex items-center gap-2">
                <LucideIcons.Users className="w-5 h-5 text-[#1F5E4B]" />
                <span className="text-xs font-semibold text-gray-700">From AED 200</span>
              </div>
              <div className="flex items-center gap-2">
                <LucideIcons.Star className="w-5 h-5 text-[#1F5E4B]" />
                <span className="text-xs font-semibold text-gray-700">4.8★ Google rating</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-[32px] shadow-2xl w-full max-w-[500px] ml-auto mr-4 mb-4">
              <img
                src="/images/detox3.png"
                alt="Ayurvedic detox bowl with herbs"
                className="rounded-[32px] shadow-2xl w-full h-auto"
              />
              {/* Floating Card */}
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-[24px] shadow-2xl hidden md:block z-10 border border-[#F5F1EA]">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#1F5E4B] rounded-full flex items-center justify-center text-white shadow-lg">
                    <LucideIcons.Check size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] text-[#5F5F5F] font-bold uppercase tracking-widest mb-1">Plan length</p>
                    <p className="text-lg font-bold text-[#1A1A1A]">set by your doctor</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 1: Why a Dubai Detox */}
      <section className="bg-[#F5F1EA] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-[40px] font-bold text-[#1A1A1A] mb-12 text-center"
          >
            {content.essential.title}
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {content.essential.items.map((item, idx) => {
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-10 rounded-[24px] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all"
                >
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">
                    {item.title}
                  </h3>
                  <p className="text-[#5F5F5F] leading-relaxed text-base">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 2: The Phases */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-[40px] font-bold text-[#1A1A1A] mb-4"
            >
              {content.phases.title}
            </motion.h2>
            <p className="text-[#5F5F5F] text-lg mb-12 max-w-3xl mx-auto leading-relaxed">
              {content.phases.subtitle}
            </p>
          </div>

          <div className="space-y-8 mb-20 max-w-5xl mx-auto">
            {content.phases.items.map((phase, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex gap-6 items-start"
              >
                <div className="w-16 h-16 bg-[#1F5E4B] rounded-full flex items-center justify-center text-white text-xl font-bold shrink-0 shadow-lg">
                  {phase.step}
                </div>
                <div className="bg-[#F5F1EA] p-8 md:p-10 rounded-[32px] flex-1 border border-[#E9E2D6]">
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">{phase.title}</h3>
                  {phase.subtitle && (
                    <p className="text-[#1F5E4B] italic mb-4 text-base leading-relaxed font-medium">
                      {phase.subtitle}
                    </p>
                  )}
                  <p className="text-[#5F5F5F] leading-relaxed whitespace-pre-line text-base">
                    {phase.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-[32px] overflow-hidden shadow-2xl max-w-5xl mx-auto"
          >
            <img
              src="/images/a-diet.jpg"
              alt="Ayurvedic detox diet bowl with wholesome ingredients"
              className="w-full h-[300px] sm:h-[450px] object-cover rounded-[32px]"
            />
          </motion.div>
        </div>
      </section>
<AyurvedaInfoSection content={content.kitchariRecipe} />
<AyurvedaInfoSection content={content.sampleDay} />
<AyurvedaInfoSection content={content.detoxVsPanchakarma} />
<AyurvedaInfoSection content={content.whoShouldNot} />
      {/* Section 3: Top 3 Spices */}
      <section className="bg-[#F5F1EA] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-12 text-center"
          >
            {content.spices.title}
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {content.spices.items.map((spice, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-white rounded-[32px] overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-[#E9E2D6]/50" >
                <div className="h-64 overflow-hidden">
                  <img
                    src={spice.image}
                    alt={spice.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">{spice.title}</h3>
                  <p className="text-[#5F5F5F] leading-relaxed text-base">
                    {spice.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: FAQs */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-12 text-center">
            {content.faqs.title}
          </motion.h2>

          <div className="space-y-4 max-w-4xl mx-auto">
            {content.faqs.items.map((faq, idx) => (
              <div key={idx} className="bg-[#F5F1EA] rounded-2xl overflow-hidden transition-all duration-300">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-[#E9E2D6] transition-colors"
                >
                  <span className="font-bold text-[#1A1A1A] text-lg pr-4">{faq.question}</span>
                  <LucideIcons.ChevronDown className={`text-[#1F5E4B] transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div
                        className="px-6 pb-6 text-[#5F5F5F] leading-relaxed text-base"
                        dangerouslySetInnerHTML={{ __html: faq.answer }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Experience RamaCare */}
      <section className="bg-[#F5F1EA] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-12 text-center">
            {content.experience.title}
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {content.experience.items.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm text-center flex flex-col items-center"
              >
                <div className="w-16 h-16 bg-[#1F5E4B] rounded-full flex items-center justify-center text-white mb-6">
                  <LucideIcons.Check size={32} />
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">{item.title}</h3>
                <p className="text-[#5F5F5F] leading-relaxed text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
<AyurvedaInfoSection content={content.yourVisit} />
      {/* Section 6: Authority Footer (CTA) */}
      <section className="bg-[#1F5E4B] text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-8"
          >
            {content.authorityFooter.title}
          </motion.h2>
          <p className="text-lg md:text-xl text-[#F2EFE9] mb-12 leading-relaxed">
            {content.authorityFooter.description}
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleBookAppointment}
            className="bg-white text-[#1F5E4B] px-10 py-5 rounded-full font-bold text-lg md:text-xl shadow-xl hover:bg-gray-50 transition-all"
          >
            {content.authorityFooter.buttonText}
          </motion.button>
        </div>
      </section>

      {/* Related Services */}
      <section className="bg-white py-16 md:py-24 border-t border-[#E9E2D6]/40">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] text-center mb-10">
            Related Ayurvedic Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a href="/services/panchakarma-treatment-dubai/" className="bg-[#F5F1EA] hover:bg-[#E9E2D6] p-6 rounded-2xl flex items-center justify-between transition-all group shadow-sm">
              <span className="font-bold text-[#1A1A1A] group-hover:text-[#1F5E4B]">Panchakarma Treatment</span>
              <LucideIcons.ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#1F5E4B] transition-transform group-hover:translate-x-1" />
            </a>
            <a href="/services/ayurvedic-gut-health-dubai/" className="bg-[#F5F1EA] hover:bg-[#E9E2D6] p-6 rounded-2xl flex items-center justify-between transition-all group shadow-sm">
              <span className="font-bold text-[#1A1A1A] group-hover:text-[#1F5E4B]">Ayurvedic Gut Health &amp; Agni Self-Check</span>
              <LucideIcons.ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#1F5E4B] transition-transform group-hover:translate-x-1" />
            </a>
            <a href="/services/ayurvedic-diet-plan-dubai/" className="bg-[#F5F1EA] hover:bg-[#E9E2D6] p-6 rounded-2xl flex items-center justify-between transition-all group shadow-sm">
              <span className="font-bold text-[#1A1A1A] group-hover:text-[#1F5E4B]">Ayurvedic Diet Plan</span>
              <LucideIcons.ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#1F5E4B] transition-transform group-hover:translate-x-1" />
            </a>
            <a href="/services/ayurvedic-diet-weight-loss-dubai/" className="bg-[#F5F1EA] hover:bg-[#E9E2D6] p-6 rounded-2xl flex items-center justify-between transition-all group shadow-sm">
              <span className="font-bold text-[#1A1A1A] group-hover:text-[#1F5E4B]">Ayurvedic Diet for Weight Loss</span>
              <LucideIcons.ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#1F5E4B] transition-transform group-hover:translate-x-1" />
            </a>
            <a href="/services/abhyanga-massage-dubai/" className="bg-[#F5F1EA] hover:bg-[#E9E2D6] p-6 rounded-2xl flex items-center justify-between transition-all group shadow-sm">
              <span className="font-bold text-[#1A1A1A] group-hover:text-[#1F5E4B]">Kerala Ayurvedic Massage</span>
              <LucideIcons.ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#1F5E4B] transition-transform group-hover:translate-x-1" />
            </a>
            <a href="/services/prakriti-dosha-assessment-dubai/" className="bg-[#F5F1EA] hover:bg-[#E9E2D6] p-6 rounded-2xl flex items-center justify-between transition-all group shadow-sm">
              <span className="font-bold text-[#1A1A1A] group-hover:text-[#1F5E4B]">Prakriti &amp; Dosha Assessment</span>
              <LucideIcons.ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#1F5E4B] transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>

      {/* Content Reviewer Badge */}
      <ContentReviewBadge doctorName="Dr. Shamna Keloth Meethal" pageSlug="ayurvedic-detox-diet-plan-dubai" lastReviewed="2026-01-12" />
    </Layout>
  );
}
