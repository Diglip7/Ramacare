import React, { useState } from 'react';
import Layout from '../../../components/Layout';
import Head from "next/head";
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { useToast } from '../../../components/Toast';
import { useRouter } from 'next/router';
import ContentReviewBadge from '../../../components/ContentReviewBadge';
import AyurvedaInfoSection from '../../../components/AyurvedaInfoSection';

const content = {
  hero: {
    title: "Ayurvedic Diet vs Keto Diet: Which Suits You in Dubai?",
    highlight: "Two very different ways of eating. The right one depends on your body, health and routine.",
    description1: "The keto (ketogenic) diet is very low in carbohydrates and high in fat, so the body burns fat for fuel (ketosis). The Ayurvedic diet has no fixed macros: it adjusts what, when and how much you eat to your dosha, your digestion (Agni) and the season. This guide compares them honestly, including side effects and who should avoid keto.",
    description2: "Prepared by RamaCare Polyclinic in Jumeirah 1 and reviewed by Dr. Shamna Keloth Meethal (BAMS). If you have a health condition or take regular medicines, speak to a doctor before changing your diet.",
    ctaButtons: {
      primary: { text: 'Book a Diet Consultation in Jumeirah 1' },
      secondary: { text: 'WhatsApp Consultation', phone: '971566597878' }
    },
    footer: "DHA-licensed polyclinic • Jumeirah 1, Dubai"
  },
  summary: {
    title: 'Keto or Ayurvedic Diet: Which Is Better?',
    description: 'Neither is best for everyone. Keto can lead to quick early weight loss (partly water) but is hard for many people to keep up, and it is not suitable for some health conditions. An Ayurvedic diet is more flexible and easier to fit into Dubai life, and many people use a lower-carb Ayurvedic approach, cutting sugar and refined carbs while keeping whole grains and lentils in moderation. In Ayurvedic terms, Kapha types usually do best with lower-carb eating, while Vata and Pitta types often feel better with more balance.' 
  },
  philosophy: {
  title: 'How Each Diet Works',
    items: [
      {
        title: 'The Keto Diet:',
        description: 'Usually about 70–75% of calories from fat, 20–25% from protein and 5–10% from carbohydrates (often under 50g of carbs a day). Cutting carbs this far makes the body produce ketones from fat for energy. It follows the same basic rules for everyone.',
        icon: 'Activity'
      },
      {
        title: 'The Ayurvedic Diet:',
        description: 'Focuses on Agni (digestive fire) and your dosha (Vata, Pitta or Kapha). Instead of counting macros, you choose foods, meal times and portions that suit your body and the season, such as warm, freshly cooked meals and an early, light dinner.',
        icon: 'Leaf'
      }
    ]
  },
  riskySummer: {
    title: 'Keto in the Dubai Heat: What to Watch For',
    items: [
      {
        title: 'Fluids and Electrolytes', 
        description: 'Low-carb diets make the body lose more water and salts at first. In Dubai\'s heat and air-conditioning, that can mean headaches, cramps and tiredness, so drinking enough and getting enough salts matters.',
        icon: 'AlertTriangle',
        iconColor: 'text-red-500'
      },
      {
        title: 'Common Early Side Effects', 
        description: 'Many people get "keto flu" in the first days (headache, tiredness, irritability, poor sleep), and constipation is common because of lower fibre.',
        icon: 'Thermometer',
        iconColor: 'text-orange-500'
      },
      {
        title: 'The Ayurvedic View', 
        description: 'Ayurveda regards very heavy, oily food in hot weather as aggravating Pitta, and favours lighter, cooling, freshly cooked meals in summer, whichever approach you follow.',
        icon: 'Droplets',
        iconColor: 'text-[#1F5E4B]'
      }
    ]
  },
  comparisonTable: {
    title: 'Keto vs Ayurvedic Diet: At a Glance',
    headers: ['Feature', 'Keto Diet', 'Ayurvedic Diet'],
   rows: [
    { feature: 'Main idea', keto: 'Very low carb, high fat, to reach ketosis', ayurveda: 'Eat for your dosha, digestion and the season' },
    { feature: 'Carbohydrates', keto: 'Usually under 50g a day', ayurveda: 'Whole grains and lentils in amounts that suit you' },
    { feature: 'Personalisation', keto: 'Same basic rules for everyone', ayurveda: 'Adjusted to your dosha and health' },
    { feature: 'Early weeks', keto: 'Quick early weight loss (partly water); "keto flu" is common', ayurveda: 'Gradual changes; fewer early side effects' },
    { feature: 'Eating out in Dubai', keto: 'Possible, but needs careful ordering', ayurveda: 'Flexible; easier with family and work meals' },
    { feature: 'Medical check advised', keto: 'Yes, especially with diabetes, kidney disease or medicines', ayurveda: 'Yes, if you have a health condition' }
      ],
    cta: 'Book Your Comparative Consultation in Jumeirah Today'
  },
  middlePath: {
    title: 'A Middle Path: The Ayurvedic Lower-Carb Approach',
    description1: 'If keto feels too strict, many people do well with a lower-carb Ayurvedic approach: cut sugar, sweet drinks and refined flour; fill half the plate with vegetables; include protein at every meal (dal, paneer, eggs, fish or chicken); keep whole grains such as millet, barley or brown rice to a small portion at lunch; use healthy fats in moderation; and have an early, light dinner.',
    description2: 'In Ayurvedic terms this is Kapha-balancing eating, and it fits Dubai life: business lunches, brunches and family meals, without counting macros.',
    quote: '"We work with your lifestyle, not against it."',
    cta: 'Book Your Comparative Consultation in Jumeirah Today'
  },
  whoShouldNot: {
  id: 'who-should-not-keto',
  heading: 'Who Should Not Do a Keto Diet Without Medical Advice?',
  items: [
    { text: 'pregnant or breastfeeding women' },
    { text: 'people with diabetes treated with medication' },
    { text: 'people with kidney, liver, pancreas or gallbladder disease' },
    { text: 'people with a history of eating disorders' },
    { text: 'under-18s' }
  ],
  note: 'Our GP in the same building can check blood sugar, cholesterol and kidney function before you start.'
},
sampleDay: {
  id: 'lower-carb-sample-day',
  heading: 'Sample Day: Ayurvedic Lower-Carb Eating in Dubai',
  intro: 'An example only. Your plan is set for your dosha and health.',
  table: [
    ['Morning', 'Warm water, then two eggs or paneer with sautéed vegetables'],
    ['Lunch (main meal)', 'Grilled fish or chicken, or dal; a large portion of vegetables; a small portion of millet or brown rice'],
    ['Afternoon', 'A handful of nuts, or cucumber and buttermilk'],
    ['Dinner (early)', 'Vegetable and lentil soup, or a light salad with grilled protein'],
    ['Avoid', 'Sugary drinks, sweets, white bread and heavy late-night meals']
  ]
},
yourVisit: {
  id: 'your-visit',
  heading: 'Your Diet Consultation in Jumeirah 1',
  table: [
    ['Doctor', 'Dr. Shamna Keloth Meethal, BAMS, DHA-licensed Ayurvedic doctor (11+ years)'],
    ['Consultation', 'From AED 200, 45–60 minutes'],
    ['Also in the building', 'Our GP, for blood tests if needed'],
    ['Address', '12 Al Dhiyafah Road, Jumeirah Terrace Building, Ground Floor, Jumeirah 1, Dubai'],
    ['Nearby', 'A few minutes from Satwa and Al Wasl; about 10 minutes from Jumeirah 2, City Walk and La Mer'],
    ['Hours', 'Every day, 10am–10pm']
  ]
},
  paa: {
    title: 'Keto vs Ayurvedic Diet: Frequently Asked Questions',
    items: [
      { question: 'Is keto or an Ayurvedic diet better for weight loss?', answer: 'Both can help. Keto often brings faster weight loss in the first weeks, partly from water, while longer-term results are similar to other calorie-controlled diets. The best diet is one you can keep up safely; many people find a lower-carb Ayurvedic approach easier to sustain.' },
      { question: 'What is the keto diet?', answer: 'A very low-carbohydrate, high-fat diet, usually under 50g of carbs a day, with about 70–75% of calories from fat. Cutting carbs this far makes the body burn fat and produce ketones for energy (ketosis).' },
      { question: 'Does Ayurveda allow a keto diet?', answer: 'Ayurveda has no keto tradition, but it does recommend lighter, lower-sugar eating for Kapha imbalance and weight gain. A strict keto diet is usually seen as too heavy and oily for Pitta types, especially in hot weather.' },
      { question: 'Is keto safe in Dubai\'s heat?', answer: 'Low-carb diets cause extra water and salt loss at first, which can add to dehydration in the heat. If you follow keto, drink enough, get enough electrolytes and watch for headaches, cramps or dizziness.' },
      { question: 'What is keto flu?', answer: 'A group of symptoms many people get in the first days of keto: headache, tiredness, irritability, nausea and poor sleep. It usually passes within a week or two.' },
      { question: 'Who should not do a keto diet?', answer: 'People who are pregnant or breastfeeding, have diabetes treated with medication, have kidney, liver, pancreas or gallbladder disease, have a history of eating disorders, or are under 18, unless a doctor supervises it.' },
      { question: 'Can keto raise cholesterol?', answer: 'In some people, keto raises LDL ("bad") cholesterol. If you follow keto, have your cholesterol checked before and after a few months.' },
      { question: 'What is an Ayurvedic lower-carb diet?', answer: 'Cutting sugar, sweet drinks and refined flour, filling half the plate with vegetables, including protein at each meal, keeping whole grains to small portions, and eating an early, light dinner. In Ayurveda this is Kapha-balancing eating.' },
      { question: 'Which dosha suits low-carb eating?', answer: 'Kapha types usually do best with lower-carb, lighter food. Vata types often feel worse on very low-carb diets, and Pitta types need cooling, regular meals. A dosha assessment helps you choose.' },
      { question: 'Can I eat out in Dubai on either diet?', answer: 'Yes. For keto, choose grilled meat or fish with vegetables and skip bread and rice. For an Ayurvedic approach, choose freshly cooked dishes like dal, grilled fish, vegetables and a small portion of rice, and avoid heavy late dinners.' },
      { question: 'Should I get blood tests before trying keto?', answer: 'It is a good idea, especially if you have a health condition. Our GP in the same building can check blood sugar, cholesterol and kidney function before you start and after a few months.' },
      { question: 'Does RamaCare offer a keto diet plan in Dubai?', answer: 'No. RamaCare does not offer keto diet plans or meal plans. We offer Ayurvedic diet consultations with Dr. Shamna (from AED 200), and our GP can arrange blood tests if you are following or considering keto.' },
      { question: 'How long before I see results?', answer: 'It varies. Keto often shows early weight change in the first weeks; Ayurvedic eating usually brings gradual changes in digestion, energy and weight. Your doctor reviews progress at follow-ups.' },
      { question: 'Where is RamaCare?', answer: 'At 12 Al Dhiyafah Road, Jumeirah Terrace Building, Ground Floor, Jumeirah 1, Dubai, a few minutes from Satwa and Al Wasl and about 10 minutes from Jumeirah 2, City Walk and La Mer. Open every day, 10am–10pm.' }
    ]
  },
  idealPlan: {
    title: 'Get a Diet Plan That Suits Your Body',
    description: 'Book a consultation with Dr. Shamna Keloth Meethal (BAMS) in Jumeirah 1, from AED 200. She assesses your dosha, digestion and health and builds an eating plan you can keep, with blood tests through our GP if needed.',
    features: [
      { text: 'DHA-licensed polyclinic', icon: 'ShieldCheck' },
      { text: 'Jumeirah 1, near Satwa and Al Wasl', icon: 'MapPin' },
      { text: 'GP in the same building', icon: 'Stethoscope' }
    ],
    cta1: 'Book a Diet Consultation',
    cta2: 'Explore our Ayurvedic Diet Plan' 
  },
  retargeting: {
    text: 'Still unsure which approach suits you? Talk to Dr. Shamna in Jumeirah 1.',
    cta: 'WhatsApp Now'
  },
  reviewer: {
    text: 'Content Reviewed by Shamna, Ayurvedic Specialist at RamaCare Polyclinic, Dubai.'
  }
};

export default function AyurvedicDietVsKetoDubaiPage() {
  const { showToast, ToastComponent } = useToast();
  const [activeAccordion, setActiveAccordion] = useState(0);
  const [showTopBar, setShowTopBar] = useState(false);
  const router = useRouter();

  const faqsForSchema = content.paa.items.map(faq => ({
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
      "@id": "https://ramacarepolyclinic.ae/services/ayurvedic-diet-vs-keto-dubai/#webpage",
      "url": "https://ramacarepolyclinic.ae/services/ayurvedic-diet-vs-keto-dubai/",
      "name": "Ayurvedic Diet vs Keto Diet Plan Dubai | Which Suits You?",
      "description": "A balanced, doctor-reviewed comparison of the ketogenic (keto) diet and the Ayurvedic diet from RamaCare Polyclinic, Jumeirah 1, Dubai: how each works, common side effects, who should avoid keto, eating in the Dubai heat, and a lower-carb Ayurvedic option.",
      "inLanguage": "en-AE",
      "about": [
        { "@type": "Thing", "name": "Ketogenic diet" },
        { "@type": "Thing", "name": "Ayurvedic diet" }
      ],
      "isPartOf": { "@id": "https://ramacarepolyclinic.ae/services/ayurveda-dubai/#webpage" },
      "reviewedBy": { "@id": "https://ramacarepolyclinic.ae/doctors/dr-shamna-keloth-meethal-ayurveda-doctor-dubai/#physician" },
      "lastReviewed": "YYYY-MM-DD",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ramacarepolyclinic.ae/" },
          { "@type": "ListItem", "position": 2, "name": "Ayurveda", "item": "https://ramacarepolyclinic.ae/services/ayurveda-dubai/" },
          { "@type": "ListItem", "position": 3, "name": "Ayurvedic Diet vs Keto Diet", "item": "https://ramacarepolyclinic.ae/services/ayurvedic-diet-vs-keto-dubai/" }
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

  React.useEffect(() => {
    const handleScroll = () => {
      // Show top bar after hero section (around 600px)
      if (window.scrollY > 600) {
        setShowTopBar(true);
      } else {
        setShowTopBar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hello RamaCare, I'm interested in comparing the Ayurvedic Diet and Keto Diet. Please help me book a consultation.");
    window.open(`https://wa.me/${content.hero.ctaButtons.secondary.phone}?text=${message}`, '_blank');
  };

  const handleBookAppointment = () => {
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
        className="fixed top-0 left-0 right-0 bg-white shadow-lg border-b-2 border-[#1F5E4B] py-3 z-50"
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-sm md:text-base text-[#1A1A1A] font-medium">
              Ready to find your personalized wellness path?
            </p>
            <button 
              onClick={handleBookAppointment}
              className="bg-[#1F5E4B] text-white px-6 py-2 rounded-lg hover:bg-[#164436] transition-colors text-sm md:text-base font-bold whitespace-nowrap"
            >
              Book Consultation Now
            </button>
          </div>
        </div>
      </motion.div>

      <Head>
        <title key="title">Ayurvedic Diet vs Keto Diet Plan Dubai | Which Suits You?</title>
        <meta name="description" content="Keto or Ayurvedic diet? A balanced, doctor-reviewed comparison: how each works, side effects, who should avoid keto, and a lower-carb Ayurvedic option. RamaCare, Jumeirah 1." key="description" />
        <meta name="robots" content="index, follow" key="robots" />
        <link rel="canonical" href="https://ramacarepolyclinic.ae/services/ayurvedic-diet-vs-keto-dubai/" key="canonical" />

        {/* Open Graph Tags */}
        <meta property="og:type" content="website" key="og:type" />
        <meta property="og:title" content="Ayurvedic Diet vs Keto Diet Plan Dubai | Which Suits You?" key="og:title" />
        <meta property="og:description" content="Keto or Ayurvedic diet? A balanced, doctor-reviewed comparison: how each works, side effects, who should avoid keto, and a lower-carb Ayurvedic option. RamaCare, Jumeirah 1." key="og:description" />
        <meta property="og:url" content="https://ramacarepolyclinic.ae/services/ayurvedic-diet-vs-keto-dubai/" key="og:url" />
        <meta property="og:image" content="https://ramacarepolyclinic.ae/images/ayurvedic-diet-vs-keto-dubai-og.jpg" key="og:image" />
        <meta property="og:image:width" content="1200" key="og:image:width" />
        <meta property="og:image:height" content="630" key="og:image:height" />
        <meta property="og:image:alt" content="Ayurvedic diet vs keto diet comparison from RamaCare Polyclinic, Jumeirah 1, Dubai" key="og:image:alt" />
        <meta property="og:site_name" content="RamaCare Polyclinic" key="og:site_name" />
        <meta property="og:locale" content="en_AE" key="og:locale" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content="Ayurvedic Diet vs Keto Diet Plan Dubai | Which Suits You?" key="twitter:title" />
        <meta name="twitter:description" content="Keto or Ayurvedic diet? A balanced, doctor-reviewed comparison: how each works, side effects, who should avoid keto, and a lower-carb Ayurvedic option. RamaCare, Jumeirah 1." key="twitter:description" />
        <meta name="twitter:image" content="https://ramacarepolyclinic.ae/images/ayurvedic-diet-vs-keto-dubai-og.jpg" key="twitter:image" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaGraph)
          }}
        />
      </Head>

      {/* 1. Hero Section */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 py-12 md:py-20 bg-white">
        {/* Breadcrumbs */}
        <nav className="flex flex-wrap items-center gap-y-1.5 text-xs font-semibold text-[#5F5F5F] mb-6 tracking-wider">
          <a href="/" className="hover:text-[#1F5E4B] transition-colors">Home</a>
          <span className="mx-2">/</span>
          <a href="/services/ayurveda-dubai/" className="hover:text-[#1F5E4B] transition-colors">Ayurveda</a>
          <span className="mx-2">/</span>
          <span className="text-gray-400">Ayurvedic diet vs. keto</span>
        </nav>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#1A1A1A] leading-tight mb-6">
              {content.hero.title}
            </h1>
            
            <div className="inline-block bg-[#2D5A41] text-white px-6 py-4 rounded-lg text-lg font-medium mb-6">
              "{content.hero.highlight}"
            </div>

            <p 
              className="text-base md:text-lg text-[#5F5F5F] leading-relaxed"
              dangerouslySetInnerHTML={{ __html: content.hero.description1 }}
            />
            <p 
              className="text-base md:text-lg text-[#5F5F5F] leading-relaxed"
              dangerouslySetInnerHTML={{ __html: content.hero.description2 }}
            />
            
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <button
                onClick={handleBookAppointment}
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-sm font-semibold rounded-lg text-white bg-[#2D5A41] hover:bg-[#234733] transition-colors shadow-sm w-full sm:w-auto sm:max-w-xs text-center leading-tight"
              >
                {content.hero.ctaButtons.primary.text}
              </button>
              <button
                onClick={handleWhatsAppClick}
                className="inline-flex flex-col items-center justify-center px-5 py-3 border border-[#2D5A41] text-xs font-medium rounded-lg text-[#2D5A41] bg-white hover:bg-gray-50 transition-colors shadow-sm w-full sm:w-auto sm:min-w-[160px]"
              >
                <span className="font-bold text-sm">WhatsApp Consultation</span>
              </button>
            </div>

            <div className="text-sm text-[#5F5F5F] pt-2">
              {content.hero.footer}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[400px] md:h-[500px] rounded-[32px] overflow-hidden shadow-2xl flex items-center justify-center"
          >
            <img 
              src="/images/ayurvedic-diet-vs-keto-dubai.jpg" 
              alt="Comparing Ayurvedic diet and Keto diet approaches for weight loss in Dubai" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* 2. Summary Section */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 py-12 md:py-16 bg-white">
        <div className="bg-[#E9E2D6] rounded-2xl p-8 md:p-12 shadow-sm">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-white rounded-full p-2 mt-1 flex-shrink-0">
              <LucideIcons.CheckCircle2 className="w-8 h-8 text-[#2D5A41]" />
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-[#1A1A1A]">
              {content.summary.title}
            </h2>
          </div>
          <p className="text-base md:text-lg text-[#5F5F5F] leading-relaxed ml-0 md:ml-16">
            {content.summary.description}
          </p>
        </div>
      </section>

      {/* 3. Core Philosophy Section */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 py-12 md:py-16 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] text-center mb-8 md:mb-12">
          {content.philosophy.title}
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {content.philosophy.items.map((item, index) => {
            return (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className={`p-8 rounded-2xl border-2 ${index === 0 ? 'border-gray-200' : 'border-[#1F5E4B]'} bg-white hover:shadow-lg transition-shadow duration-300`}
              >
                <h3 className="text-xl md:text-2xl font-bold text-[#1A1A1A] mb-4">
                  {item.title}
                </h3>
                <p className="text-base md:text-lg text-[#5F5F5F] leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 4. Why Keto Can Be Risky Section */}
      <section className="bg-[#F5F1EA]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 py-16 md:py-24">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] text-center mb-12 md:mb-16">
            {content.riskySummer.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {content.riskySummer.items.map((item, index) => {
              const Icon = LucideIcons[item.icon];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`p-8 rounded-2xl bg-white shadow-sm border-2 ${index === 2 ? 'border-[#1F5E4B]' : 'border-transparent'}`}
                >
                  <div className={`mb-6 ${item.iconColor}`}>
                    <Icon className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#1A1A1A] mb-4">
                    {item.title}
                  </h3>
                  <p className="text-base text-[#5F5F5F] leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Comparison Table Section */}
      <section className="bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 py-16 md:py-24">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] text-center mb-12 md:mb-16">
            {content.comparisonTable.title}
          </h2>
          <div className="overflow-x-auto rounded-xl shadow-sm border border-gray-100">
            <table className="w-full text-left border-collapse bg-white">
              <thead>
                <tr className="bg-[#1F5E4B] text-white">
                  {content.comparisonTable.headers.map((header, index) => (
                    <th key={index} className="px-6 py-4 font-bold text-base md:text-lg">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {content.comparisonTable.rows.map((row, index) => (
                  <tr 
                    key={index} 
                    className={`${index % 2 === 0 ? 'bg-white' : 'bg-[#F5F1EA]'} border-b border-gray-50`}
                  >
                    <td className="px-6 py-4 font-bold text-[#1A1A1A] text-base">{row.feature}</td>
                    <td className="px-6 py-4 text-[#5F5F5F] text-base">{row.keto}</td>
                    <td className="px-6 py-4 text-[#5F5F5F] text-base">{row.ayurveda}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-12 text-center">
            <button
              onClick={handleBookAppointment}
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-lg text-white bg-[#1F5E4B] hover:bg-[#164436] transition-colors shadow-md"
            >
              {content.comparisonTable.cta}
            </button>
          </div>
        </div>
      </section>

      {/* 6. Middle Path Section */}
      <section className="bg-[#F5F1EA]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 py-12 md:py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] text-center mb-8 md:mb-12">
            {content.middlePath.title}
          </h2>
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg text-center max-w-4xl mx-auto border border-gray-100">
            <div className="space-y-6">
              <p className="text-base md:text-lg text-[#5F5F5F] leading-relaxed">
                {content.middlePath.description1}
              </p>
              <p className="text-base md:text-lg text-[#5F5F5F] leading-relaxed">
                {content.middlePath.description2}
              </p>
              <p className="text-base md:text-lg font-bold text-[#1A1A1A] italic">
                {content.middlePath.quote}
              </p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <button
              onClick={handleBookAppointment}
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-lg text-white bg-[#1F5E4B] hover:bg-[#164436] transition-colors shadow-md"
            >
              {content.middlePath.cta}
            </button>
          </div>
        </div>
      </section>
<AyurvedaInfoSection content={content.sampleDay} />
<AyurvedaInfoSection content={content.whoShouldNot} />
      {/* 7. PAA Section */}
      <section className="bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 py-12 md:py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] text-center mb-8 md:mb-12">
            {content.paa.title}
          </h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {content.paa.items.map((item, index) => (
              <div 
                key={index} 
                className="bg-white border-2 border-[#E9E2D6] rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setActiveAccordion(activeAccordion === index ? -1 : index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-[#F5F1EA] transition-colors group"
                >
                  <span className={`text-lg font-bold ${activeAccordion === index ? 'text-[#1A1A1A]' : 'text-[#4A4A4A]'}`}>
                    {item.question}
                  </span>
                  <LucideIcons.ChevronDown className={`w-6 h-6 transition-transform duration-300 ${activeAccordion === index ? 'rotate-180 text-[#1F5E4B]' : 'text-gray-400'}`} />
                </button>
                  <motion.div
                    initial={false}
                    animate={{ height: activeAccordion === index ? 'auto' : 0, opacity: activeAccordion === index ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div 
                      className="px-6 pb-4 text-[#5F5F5F] text-base leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: item.answer }}
                    />
                  </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Ideal Plan Section */}
      <section className="bg-[#1F5E4B] text-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              {content.idealPlan.title}
            </h2>
            <p className="text-lg md:text-xl opacity-90 leading-relaxed">
              {content.idealPlan.description}
            </p>
            
            <div className="flex flex-wrap justify-center gap-8 md:gap-12 py-6">
              {content.idealPlan.features.map((feature, index) => {
                const Icon = LucideIcons[feature.icon];
                return (
                  <div key={index} className="flex items-center gap-3">
                    <Icon className="w-6 h-6 text-white" />
                    <span className="text-lg font-medium">{feature.text}</span>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={handleBookAppointment}
                className="w-full md:w-auto px-8 py-4 bg-white text-[#1F5E4B] font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                {content.idealPlan.cta1}
              </button>
              <button
                onClick={() => router.push('/services/ayurvedic-diet-plan-dubai/')}
                className="w-full md:w-auto px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-[#1F5E4B] transition-all"
              >
                {content.idealPlan.cta2}
              </button>
            </div>
          </div>
        </div>
      </section>

    <AyurvedaInfoSection content={content.yourVisit} />

      {/* Related Reading */}
      <section className="bg-white py-16 md:py-24 border-t border-[#E9E2D6]/40">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-10">
            Related Ayurvedic Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
            <a href="/services/ayurvedic-diet-weight-loss-dubai/" className="bg-[#F5F1EA] hover:bg-[#E9E2D6] p-6 rounded-2xl flex items-center justify-between transition-all group shadow-sm">
              <span className="font-bold text-[#1A1A1A] group-hover:text-[#1F5E4B]">Ayurvedic Diet for Weight Loss</span>
              <LucideIcons.ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#1F5E4B] transition-transform group-hover:translate-x-1" />
            </a>
            <a href="/services/ayurvedic-diet-vs-intermittent-fasting-dubai/" className="bg-[#F5F1EA] hover:bg-[#E9E2D6] p-6 rounded-2xl flex items-center justify-between transition-all group shadow-sm">
              <span className="font-bold text-[#1A1A1A] group-hover:text-[#1F5E4B]">Ayurvedic Diet vs Intermittent Fasting</span>
              <LucideIcons.ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#1F5E4B] transition-transform group-hover:translate-x-1" />
            </a>
            <a href="/services/ayurvedic-diet-diabetes-dubai/" className="bg-[#F5F1EA] hover:bg-[#E9E2D6] p-6 rounded-2xl flex items-center justify-between transition-all group shadow-sm">
              <span className="font-bold text-[#1A1A1A] group-hover:text-[#1F5E4B]">Ayurvedic Diet for Diabetes</span>
              <LucideIcons.ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#1F5E4B] transition-transform group-hover:translate-x-1" />
            </a>
            <a href="/services/pcos-treatment-dubai/" className="bg-[#F5F1EA] hover:bg-[#E9E2D6] p-6 rounded-2xl flex items-center justify-between transition-all group shadow-sm">
              <span className="font-bold text-[#1A1A1A] group-hover:text-[#1F5E4B]">Ayurvedic PCOS Treatment</span>
              <LucideIcons.ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#1F5E4B] transition-transform group-hover:translate-x-1" />
            </a>
            <a href="/services/ayurvedic-diet-plan-dubai/" className="bg-[#F5F1EA] hover:bg-[#E9E2D6] p-6 rounded-2xl flex items-center justify-between transition-all group shadow-sm">
              <span className="font-bold text-[#1A1A1A] group-hover:text-[#1F5E4B]">Ayurvedic Diet Plan</span>
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
      <ContentReviewBadge doctorName="Dr. Shamna Keloth Meethal" pageSlug="ayurvedic-diet-vs-keto-dubai" lastReviewed="2026-01-12" />
  {/* 9. Retargeting Strip */}
      <section className="sticky bottom-0 z-40 bg-[#E9E2D6] border-t-2 border-b-2 border-[#1F5E4B] py-3 md:py-4">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[#1A1A1A] font-medium text-center md:text-left">
              {content.retargeting.text}
            </p>
            <button
              onClick={handleWhatsAppClick}
              className="bg-[#1F5E4B] text-white px-8 py-2 md:py-3 rounded-lg font-bold hover:bg-[#164436] transition-colors whitespace-nowrap"
            >
              {content.retargeting.cta}
            </button>
          </div>
        </div>
      </section>
    
    </Layout>
  );
}
