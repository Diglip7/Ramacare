import React, { useState } from 'react';
import Layout from '../../../components/Layout';
import Head from "next/head";
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { useToast } from '../../../components/Toast';
import ContentReviewBadge from '../../../components/ContentReviewBadge';
import AyurvedaInfoSection from '../../../components/AyurvedaInfoSection';

const content = {
  hero: {
    title: 'Ayurvedic Summer Diet for Dubai: Cooling Foods for Pitta and the Heat',
    mainDescription: 'When Dubai temperatures pass 45°C, many people notice acidity, prickly heat, headaches, irritability and tiredness. Ayurveda calls summer Grishma, the season when Pitta (fire) rises and digestion weakens, and it has a classical seasonal routine for it, Grishma Ritucharya.',
    highlightBox: 'In short, the Ayurvedic summer diet favours sweet, cooling, light and liquid foods, and cuts back on salty, sour, spicy and very hot foods. This guide from RamaCare Polyclinic in Jumeirah 1 adapts it to Dubai life.',
    ctaButtons: {
      primary: { text: 'Book Summer Cooling Consultation', link: '/book-appointment/' },
      secondary: { text: 'WhatsApp Now', phone: '971566597878' }
    },
    imageCard: {
      title: 'Desert Heat → Cooling Herbs',
      subtitle: ''
    }
  },
  summary: {
    badge: 'Quick answer',
    title: 'How Can I Reduce Body Heat in the Dubai Summer?',
    question: 'In short:',
    answer: 'Choose cooling foods with sweet, bitter and astringent tastes: cucumber, melons, coconut water, leafy greens, rice, mung dal and buttermilk. Use cooling spices such as fennel, coriander and mint. Cut back on chilli, pickles, vinegar, fried food, alcohol and excess coffee. Drink plenty of room-temperature water through the day (Ayurveda advises against ice-cold drinks with meals), and avoid the midday sun and hard exercise in the heat.',
    cta: ''
  },
  pittaCrisis: {
    title: 'Why the Dubai Summer Affects Your Body',
    description: 'At RamaCare Polyclinic, we see a surge in "heat-stress" symptoms during the months of June through September. The Dubai environment creates a perfect storm for Pitta imbalance:',
    items: [
      {
        title: 'Intense Heat and Sun',
        description: 'From May to September, heat and strong sun raise Pitta in Ayurvedic terms, often felt as acidity, prickly heat, irritability and skin sensitivity.',
        icon: 'Leaf'
      },
      {
        title: 'Hot Outdoors, Cold Indoors',
        description: 'Moving between the heat and strong air-conditioning, and drinking iced drinks, can upset digestion; Ayurveda says digestive fire is already weak in summer.',
        icon: 'Wind'
      },
      {
        title: 'Sweat, Fluid and Salt Loss',
        description: 'Heavy sweating in Dubai\'s humidity loses water and salts, causing tiredness, headaches and cramps if you do not drink enough.',
        icon: 'Droplets'
      }
    ]
  },
  superfoods: {
    title: 'Five Cooling Foods for the Dubai Summer',
    description: 'Traditional Ayurvedic summer foods, easy to find in Dubai:',
    items: [
      {
        title: 'Fresh Coconut Water',
        description: 'Naturally contains potassium and is a traditional summer drink in Ayurveda. Fresh is best. People with diabetes or kidney disease should check with their doctor first.',
        icon: '🥥'
      },
      {
        title: 'Watermelon and Muskmelon',
        description: 'Over 90% water. The sweet taste is traditionally used to balance Pitta. Eat them on their own, in moderate portions if you have diabetes.',
        icon: '🍉'
      },
      {
        title: 'Coriander and Mint',
        description: 'Cooling herbs in Ayurveda. Add fresh to salads and raita, or brew as a light tea.',
        icon: '🌿'
      },
      {
        title: 'Barley (Yava)',
        description: 'A traditional cooling grain. Barley water (boiled, strained and cooled to room temperature) is a classic summer drink.',
        icon: '🌾'
      },
      {
        title: 'Gulkand (Rose Petal Preserve)',
        description: 'A traditional cooling preparation, taken in small amounts (about a teaspoon). It is high in sugar, so avoid it if you have diabetes.',
        icon: '🌹'
      }
    ]
  },
  coolingTable: {
    id: 'cooling-vs-heating',
    heading: 'Cooling vs Heating Foods in Ayurveda',
    table: [
      ['Favour (cooling)', 'Cucumber, melons, coconut, leafy greens, zucchini, rice, barley, mung dal, milk, buttermilk, ghee in small amounts, sweet ripe fruits, fennel, coriander, mint, cardamom'],
      ['Limit (heating)', 'Chilli and very spicy food, garlic and raw onion in large amounts, pickles, vinegar, tomato-heavy and sour dishes, fried and salty snacks, alcohol, excess coffee and energy drinks'],
      ['Tastes', 'Favour sweet, bitter and astringent; reduce salty, sour and pungent, as the classical summer routine (Grishma Ritucharya) advises']
    ]
  },
  sampleDay: {
    id: 'summer-sample-day',
    heading: 'Sample Ayurvedic Summer Day in Dubai',
    intro: 'An example only. Your plan depends on your dosha and health.',
    table: [
      ['On waking', 'A glass of room-temperature water, or coriander seed water'],
      ['Breakfast', 'Oats or poha with sweet fruit, or idli with coconut chutney'],
      ['Mid-morning', 'Fresh coconut water or a few slices of melon'],
      ['Lunch (main meal)', 'Rice, mung dal, a cooked green vegetable, cucumber salad and buttermilk'],
      ['Afternoon (stay indoors)', 'Fennel and rose water; rest in the hottest hours'],
      ['Dinner (early)', 'Light vegetable soup or kitchari'],
      ['Exercise', 'Early morning walk or indoor yoga; avoid 11am–4pm outdoors']
    ]
  },
  heatSafety: {
    id: 'heat-safety',
    heading: 'Heat Exhaustion and Heatstroke: When to Get Help',
    intro: 'Diet helps you cope with summer, but heat illness needs action. Based on NHS guidance:',
    items: [
      { text: 'Heat exhaustion: tiredness, dizziness, headache, cramps, nausea, heavy sweating, intense thirst. Move somewhere cool, lie down, drink water or a rehydration drink, and cool the skin. You should feel better within about 30 minutes.' },
      { text: 'Heatstroke is an emergency: a very high temperature (around 40°C or more), hot skin that is not sweating, confusion, fast breathing or heartbeat, a seizure or loss of consciousness, or no improvement after 30 minutes. Call 998 for an ambulance.' },
      { text: 'Take extra care with older people, young children, pregnant women and anyone with heart or kidney disease or diabetes, and anyone working outdoors.' }
    ],
    note: 'Source: NHS, Heat exhaustion and heatstroke (https://www.nhs.uk/conditions/heat-exhaustion-heatstroke/). For a medical check, see our GP (/services/general-physician-dubai/).'
  },
  summerProblems: {
    id: 'summer-problems',
    heading: 'Common Summer Problems and Where to Get Help at RamaCare',
    items: [
      { text: 'Prickly heat (heat rash) and itchy skin: Ayurvedic skin treatment', href: '/services/skin-diseases-treatment-dubai/' },
      { text: 'Acidity and heartburn in the heat: Ayurvedic digestive treatment', href: '/services/gastrointestinal-diseases-treatment-dubai/' },
      { text: 'Hair fall and dandruff in summer: Ayurvedic hair fall treatment', href: '/services/ayurvedic-hairfall-treatment-dubai/' },
      { text: 'Stress and poor sleep: Shirodhara and Takradhara', href: '/services/shirodhara-therapy-in-dubai/' }
    ]
  },
  yourVisit: {
    id: 'your-visit',
    heading: 'Your Summer Consultation in Jumeirah 1',
    table: [
      ['Doctor', 'Dr. Shamna Keloth Meethal, BAMS, DHA-licensed Ayurvedic doctor (11+ years)'],
      ['Consultation', 'From AED 200, 45–60 minutes'],
      ['Therapies', 'Takradhara, Shirodhara, Abhyanga, with same-gender therapists'],
      ['Address', '12 Al Dhiyafah Road, Jumeirah Terrace Building, Ground Floor, Jumeirah 1, Dubai'],
      ['Nearby', 'A few minutes from Satwa and Al Wasl; about 10 minutes from Jumeirah 2, City Walk and La Mer'],
      ['Hours', 'Every day, 10am–10pm; evening slots avoid the midday heat']
    ]
  },
  summerSip: {
    title: 'Three Ayurvedic Cooling Drinks',
    items: [
      {
        title: 'Fennel and Rose Water',
        recipe: 'Soak 1 tsp fennel seeds and a few dried rose petals in 500 ml water overnight. Strain and sip through the day.',
        benefit: 'Traditionally used to cool and settle digestion.'
      },
      {
        title: 'Ayurvedic Buttermilk (Takra)',
        recipe: 'Blend 1 cup yoghurt with 2 cups water, a pinch of roasted cumin and fresh coriander. Drink at lunch.',
        benefit: 'Ayurveda prefers thin buttermilk to thick yoghurt in summer; it is traditionally used for digestion.'
      },
      {
        title: 'Coriander Seed Water',
        recipe: 'Boil 1 tsp coriander seeds in 2 cups water for 5 minutes, strain and drink at room temperature.',
        benefit: 'A traditional cooling drink for Pitta.'
      }
    ]
  },
  paa: {
    title: 'Ayurvedic Summer Diet: Frequently Asked Questions',
    items: [
      { question: 'What is the Ayurvedic summer diet?', answer: 'Ayurveda calls summer Grishma and recommends sweet, cooling, light and liquid foods, such as rice, mung dal, cucumber, melons, coconut water, milk and buttermilk, while reducing salty, sour, spicy and very hot foods. This is the classical summer routine, Grishma Ritucharya.' },
      { question: 'Which foods should I avoid in the Dubai summer?', answer: 'Cut back on chilli and very spicy food, pickles, vinegar, fried and salty snacks, alcohol and excess coffee or energy drinks, which Ayurveda considers heating.' },
      { question: 'Should I drink ice-cold water in summer?', answer: 'Ayurveda advises against ice-cold drinks, especially with meals, because they weaken digestion. Drink plenty of cool or room-temperature water through the day instead.' },
      { question: 'Can I eat spicy food in the Dubai summer?', answer: 'Keep it mild. If you do eat spicy food, balance it with cooling sides like cucumber raita, rice and buttermilk.' },
      { question: 'Is yoghurt good in summer?', answer: 'Ayurveda prefers thin buttermilk (yoghurt blended with water and cumin) to thick yoghurt in summer, as yoghurt is considered heating and heavy.' },
      { question: 'Are salads good in summer?', answer: 'Yes, at lunch when digestion is strongest. For dinner, cooked and cooling meals such as mung dal and rice are easier to digest.' },
      { question: 'Why do I feel irritable in the heat?', answer: 'Ayurveda links heat and irritability to Pitta. A cooling diet, enough water, rest in the hottest hours and Sheetali (cooling) breathing are traditional ways to stay calm.' },
      { question: 'What are the signs of heat exhaustion?', answer: 'Tiredness, dizziness, headache, muscle cramps, nausea, heavy sweating and intense thirst. Move to a cool place, drink water and cool the skin; you should feel better within about 30 minutes.' },
      { question: 'When is heat an emergency?', answer: 'Call 998 (ambulance) for signs of heatstroke: a very high temperature, hot skin without sweating, confusion, fast breathing or heartbeat, a seizure or fainting, or if someone is still unwell after 30 minutes of cooling.' },
      { question: 'Is coconut water safe if I have diabetes or kidney disease?', answer: 'Coconut water contains natural sugar and potassium. People with diabetes should limit it, and people with kidney disease should check with their doctor first.' },
      { question: 'When should I exercise in the Dubai summer?', answer: 'Early in the morning or indoors. Ayurveda advises against hard exercise in the summer heat, and medical guidance agrees: avoid the hottest hours, roughly 11am to 4pm.' },
      { question: 'Which Ayurvedic therapies help in summer?', answer: 'Takradhara and Shirodhara (calming streams over the forehead) and coconut-oil Abhyanga are traditional summer therapies. At RamaCare they follow a consultation with Dr. Shamna.' },
      { question: 'Where can I get an Ayurvedic summer diet plan near Jumeirah 1?', answer: 'At RamaCare Polyclinic, 12 Al Dhiyafah Road, Jumeirah 1, a few minutes from Satwa and Al Wasl and about 10 minutes from Jumeirah 2, City Walk and La Mer. Open every day 10am–10pm, so you can come in the cooler evening hours. Consultation from AED 200.' }
    ]
  },
  beatHeat: {
    title: 'Summer Care at RamaCare Polyclinic',
    description: 'A consultation with Dr. Shamna Keloth Meethal (BAMS), from AED 200, includes your dosha (Pitta) assessment and a summer diet and routine plan for Dubai.',
    items: [
      { title: 'Dosha and Pitta Assessment', description: 'Find out how much the heat is affecting your digestion, skin and sleep, in Ayurvedic terms.' },
      { title: 'Summer Diet and Drinks Plan', description: 'Which foods and drinks suit your body type in the heat, with cautions if you have diabetes or kidney problems.' },
      { title: 'Cooling Therapies', description: 'Takradhara, Shirodhara and coconut-oil Abhyanga, given by therapists of your own gender, if suitable.' }
    ],
    cta: 'Book Your Summer Cooling Consultation'
  },
  authorityFooter: {
    title: 'Stay Comfortable Through the Dubai Summer',
    description: 'Book a summer consultation with Dr. Shamna in Jumeirah 1, including evening slots up to 10pm. For a full plan, see our Ayurvedic diet plan in Dubai.',
    cta: 'Book a Summer Consultation'
  },
  reviewer: {
    name: 'Shamna',
    role: 'Ayurvedic Specialist at RamaCare Polyclinic, Dubai.'
  }
};

export default function AyurvedicDietDubaiSummerPage() {
  const { showToast, ToastComponent } = useToast();
  const router = useRouter();

  const faqsForSchema = content.paa.items.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }));

  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": "https://ramacarepolyclinic.ae/services/ayurvedic-diet-dubai-summer/#webpage",
        "url": "https://ramacarepolyclinic.ae/services/ayurvedic-diet-dubai-summer/",
        "name": "Ayurvedic Summer Diet Dubai | Cooling Foods for Pitta & Heat",
        "inLanguage": "en-AE",
        "about": [
          { "@id": "https://ramacarepolyclinic.ae/services/ayurvedic-diet-dubai-summer/#diet" },
          { "@type": "Thing", "name": "Heat exhaustion and heatstroke" }
        ],
        "isPartOf": { "@id": "https://ramacarepolyclinic.ae/services/ayurveda-dubai/#webpage" },
        "reviewedBy": { "@id": "https://ramacarepolyclinic.ae/doctors/dr-shamna-keloth-meethal-ayurveda-doctor-dubai/#physician" },
        "lastReviewed": "YYYY-MM-DD",
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ramacarepolyclinic.ae/" },
            { "@type": "ListItem", "position": 2, "name": "Ayurveda", "item": "https://ramacarepolyclinic.ae/services/ayurveda-dubai/" },
            { "@type": "ListItem", "position": 3, "name": "Ayurvedic Summer Diet", "item": "https://ramacarepolyclinic.ae/services/ayurvedic-diet-dubai-summer/" }
          ]
        }
      },
      {
        "@type": "Diet",
        "@id": "https://ramacarepolyclinic.ae/services/ayurvedic-diet-dubai-summer/#diet",
        "name": "Ayurvedic summer diet (Grishma Ritucharya) for Dubai",
        "alternateName": ["Pitta diet", "Pitta-pacifying diet", "Ayurvedic cooling foods", "Grishma Ritucharya"],
        "description": "The classical Ayurvedic summer regimen adapted for Dubai by RamaCare Polyclinic, Jumeirah 1: sweet, cooling, light and liquid foods; fewer salty, sour, pungent and very hot foods; room-temperature drinks instead of iced; avoiding midday sun and heavy exertion.",
        "dietFeatures": "Cucumber, melons, coconut water, buttermilk, rice, mung dal, leafy greens, sweet ripe fruit, fennel, coriander and mint; limit chilli, pickles, vinegar, fried food, alcohol and excess caffeine",
        "expertConsiderations": "People with diabetes should watch sweet fruits, coconut water and gulkand; people with kidney disease should follow their doctor's fluid and potassium advice. Seek urgent help for heatstroke symptoms.",
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
    const message = encodeURIComponent("Hello RamaCare, I'm interested in Ayurvedic Diet Tips for the Dubai Summer. Please help me book a consultation.");
    window.open(`https://wa.me/${content.hero.ctaButtons.secondary.phone}?text=${message}`, '_blank');
  };

  const handleBookAppointment = () => {
    router.push('/book-appointment/');
  };

  return (
    <Layout>
      {ToastComponent}
      <Head>
        <title key="title">Ayurvedic Summer Diet Dubai | Cooling Foods for Pitta & Heat</title>
        <meta name="description" content="Ayurvedic summer diet for Dubai: cooling foods for Pitta, foods to limit, drinks, a sample day and heat-illness warning signs, from RamaCare, Jumeirah 1." key="description" />
        <meta name="robots" content="index, follow" key="robots" />
        <link rel="canonical" href="https://ramacarepolyclinic.ae/services/ayurvedic-diet-dubai-summer/" key="canonical" />

        {/* Open Graph Tags */}
        <meta property="og:type" content="website" key="og:type" />
        <meta property="og:title" content="Ayurvedic Summer Diet Dubai | Cooling Foods for Pitta & Heat" key="og:title" />
        <meta property="og:description" content="Ayurvedic summer diet for Dubai: cooling foods for Pitta, foods to limit, drinks, a sample day and heat-illness warning signs, from RamaCare, Jumeirah 1." key="og:description" />
        <meta property="og:url" content="https://ramacarepolyclinic.ae/services/ayurvedic-diet-dubai-summer/" key="og:url" />
        <meta property="og:image" content="https://ramacarepolyclinic.ae/images/pitta.jpg" key="og:image" />
        <meta property="og:image:width" content="1200" key="og:image:width" />
        <meta property="og:image:height" content="630" key="og:image:height" />
        <meta property="og:image:alt" content="Ayurvedic cooling summer foods and drinks for the Dubai heat, RamaCare Polyclinic, Jumeirah 1" key="og:image:alt" />
        <meta property="og:site_name" content="RamaCare Polyclinic" key="og:site_name" />
        <meta property="og:locale" content="en_AE" key="og:locale" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content="Ayurvedic Summer Diet Dubai | Cooling Foods for Pitta & Heat" key="twitter:title" />
        <meta name="twitter:description" content="Ayurvedic summer diet for Dubai: cooling foods for Pitta, foods to limit, drinks, a sample day and heat-illness warning signs, from RamaCare, Jumeirah 1." key="twitter:description" />
        <meta name="twitter:image" content="https://ramacarepolyclinic.ae/images/pitta.jpg" key="twitter:image" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaGraph)
          }}
        />
      </Head>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white px-6 py-16 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-7xl">
          {/* Breadcrumbs */}
          <nav className="flex flex-wrap items-center gap-y-1.5 text-xs font-semibold text-[#5F5F5F] mb-6 tracking-wider">
            <a href="/" className="hover:text-[#1F5E4B] transition-colors">Home</a>
            <span className="mx-2">/</span>
            <a href="/services/ayurveda-dubai/" className="hover:text-[#1F5E4B] transition-colors">Ayurveda</a>
            <span className="mx-2">/</span>
            <span className="text-gray-400">Ayurvedic Diet for Dubai Summer</span>
          </nav>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="mb-6 text-4xl lg:text-6xl font-semibold text-[#1A1A1A] leading-[1.15] tracking-tight">
                {content.hero.title}
              </h1>
              <p className="mb-6 text-lg leading-relaxed text-[#5F5F5F]">
                {content.hero.mainDescription}
              </p>

              <div className="mb-8 rounded-lg p-6 bg-[#E9E2D6]">
                <p className="text-base leading-relaxed text-[#1A1A1A]">
                  <strong>An Ayurvedic Diet for the Dubai Summer</strong> {content.hero.highlightBox.split('An Ayurvedic Diet for the Dubai Summer')[1]}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href={content.hero.ctaButtons.primary.link}>
                  <button
                    className="bg-[#1F5E4B] text-white px-8 py-4 rounded-lg hover:bg-[#16493a] transition-all duration-300 hover:shadow-xl flex items-center justify-center gap-2 font-medium w-full"
                  >
                    {content.hero.ctaButtons.primary.text}
                  </button>
                </Link>
                <button
                  onClick={handleWhatsAppClick}
                  className="border-2 border-[#1F5E4B] text-[#1F5E4B] px-8 py-4 rounded-lg hover:bg-[#1F5E4B] hover:text-white transition-all duration-300 flex items-center justify-center gap-2 font-medium"
                >
                  <LucideIcons.MessageCircle className="w-5 h-5" />
                  {content.hero.ctaButtons.secondary.text}
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square w-full relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#6FC5A6] to-[#699F86] shadow-inner">
                <Image
                  src="/images/pitta.jpg"
                  alt="Ayurvedic Diet Tips for Dubai Summer"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Subtle texture overlay */}
                <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] z-10"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section className="bg-[#F5F1EA] px-6 py-16 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border-2 border-[#1F5E4B] p-8 lg:p-12 bg-white"
          >
            <div className="mb-4 inline-block rounded-full bg-[#E9E2D6] px-4 py-2 text-sm font-medium text-[#5F5F5F]">
              {content.summary.badge}
            </div>

            <h2 className="mb-6 text-3xl lg:text-4xl font-bold text-[#1A1A1A] leading-tight">
              {content.summary.title}
            </h2>

            <p className="text-[#1A1A1A] text-lg leading-relaxed">
              <strong>{content.summary.question}</strong> {content.summary.answer}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pitta Crisis Section */}
      <section className="px-6 py-20 lg:px-12 bg-white">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="mb-4 text-4xl font-bold text-[#1A1A1A]">
              {content.pittaCrisis.title}
            </h2>
            <p className="text-lg text-[#5F5F5F] max-w-4xl">
              {content.pittaCrisis.description}
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {content.pittaCrisis.items.map((item, idx) => {
              const Icon = LucideIcons[item.icon];
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-[#F5F1EA] p-8 rounded-2xl flex flex-col items-start text-left"
                >
                  <div className="mb-6 text-[#1F5E4B]">
                    <Icon size={32} />
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-[#1A1A1A]">
                    {item.title}
                  </h3>
                  <p className="text-[#5F5F5F] leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Superfoods Section */}
      <section className="px-6 py-20 lg:px-12 bg-[#F5F1EA]">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="mb-4 text-4xl font-bold text-[#1A1A1A]">
              {content.superfoods.title}
            </h2>
            <p className="text-lg text-[#5F5F5F] max-w-4xl">
              {content.superfoods.description}
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {content.superfoods.items.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm flex flex-col items-start text-left"
              >
                <div className="mb-6 text-4xl">
                  {item.icon}
                </div>
                <h3 className="mb-4 text-xl font-bold text-[#1A1A1A]">
                  {item.title}
                </h3>
                <p className="text-[#5F5F5F] leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <AyurvedaInfoSection content={content.coolingTable} />
      {/* Summer Sip Section */}
      <section className="px-6 py-20 lg:px-12 bg-white">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12">
            <h2 className="mb-12 text-4xl font-bold text-[#1A1A1A]">
              {content.summerSip.title}
            </h2>
            <div className="mb-12 overflow-hidden rounded-2xl bg-[#E9E2D6]">
              <div className="aspect-video w-full relative">
                <Image
                  src="/images/summer.jpg"
                  alt="Ayurvedic Cooling Summer Drinks"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

          <div className="space-y-6">
            {content.summerSip.items.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="rounded-xl bg-[#F5F1EA] p-8"
              >
                <h3 className="mb-3 text-2xl font-bold text-[#1A1A1A]">
                  {item.title}
                </h3>
                <div className="space-y-0">
                  <p className="mb-3 text-base text-[#5F5F5F]">
                    <strong className="font-bold">Recipe:</strong> {item.recipe}
                  </p>
                  <p className="mb-3 text-base text-[#1F5E4B]">
                    <strong className="font-bold">Benefit:</strong> {item.benefit}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <AyurvedaInfoSection content={content.sampleDay} />
      <AyurvedaInfoSection content={content.heatSafety} />
      <AyurvedaInfoSection content={content.summerProblems} />
      {/* PAA Section */}
      <section className="px-6 py-20 lg:px-12 bg-[#F5F1EA]">
        <div className="mx-auto max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center text-4xl font-bold text-[#1A1A1A]"
          >
            {content.paa.title}
          </motion.h2>

          <div className="space-y-4">
            {content.paa.items.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="rounded-xl bg-white shadow-sm overflow-hidden"
              >
                <details className="group">
                  <summary className="flex cursor-pointer items-center justify-between px-6 py-5 list-none hover:bg-[#F5F1EA] transition-all duration-300">
                    <span className="text-base font-bold text-[#1A1A1A] pr-4">
                      {item.question}
                    </span>
                    <span className="transition-transform duration-300 group-open:rotate-180">
                      <LucideIcons.ChevronDown size={24} className="text-[#1F5E4B]" />
                    </span>
                  </summary>
                  <div className="px-6 pb-5 text-base leading-relaxed text-[#5F5F5F] bg-white border-t border-[#F5F1EA]/30">
                    <div className="pt-4">
                      {item.answer}
                    </div>
                  </div>
                </details>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <AyurvedaInfoSection content={content.yourVisit} />
      {/* Beat the Heat Section */}
      <section className="px-6 py-20 lg:px-12 bg-white">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[2rem] bg-[#1F5E4B] p-8 lg:p-12 text-center text-white"
          >
            <div className="mb-8 flex justify-center">
              <LucideIcons.Sparkles size={48} className="text-white" />
            </div>

            <h2 className="mb-6 text-3xl lg:text-4xl font-bold leading-tight">
              {content.beatHeat.title}
            </h2>

            <p className="mx-auto mb-12 max-w-2xl text-lg opacity-90">
              {content.beatHeat.description}
            </p>

            <div className="mb-12 grid gap-6 md:grid-cols-3">
              {content.beatHeat.items.map((item, idx) => (
                <div key={idx} className="rounded-2xl bg-white/10 p-6 text-left backdrop-blur-sm">
                  <h3 className="mb-3 text-lg font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/80">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <Link href="/book-appointment/">
              <button className="rounded-lg bg-white px-10 py-4 text-lg font-bold text-[#1F5E4B] transition-all hover:bg-gray-100">
                {content.beatHeat.cta}
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Authority Footer */}
      <section className="px-6 py-20 lg:px-12 bg-[#F5F1EA]">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6 text-3xl lg:text-[40px] font-bold text-[#1A1A1A] leading-tight">
              {content.authorityFooter.title}
            </h2>

            <p className="mb-8 text-lg leading-relaxed text-[#5F5F5F]">
              {content.authorityFooter.description}
            </p>

            <Link href="/book-appointment/">
              <button className="mb-12 rounded-lg bg-[#1F5E4B] px-12 py-4 text-base font-bold text-white transition-all hover:bg-[#16493a]">
                {content.authorityFooter.cta}
              </button>
            </Link>

            {/* Related Reading */}
            <div className="mx-auto max-w-4xl mt-12 mb-8">
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-6">Related Ayurvedic Guides</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
                <a href="/services/ayurvedic-diet-plan-dubai/" className="bg-[#E9E2D6] hover:bg-[#d8cfc0] p-5 rounded-xl flex items-center justify-between transition-all group">
                  <span className="font-bold text-[#1A1A1A] text-sm">Ayurvedic Diet Plan</span>
                  <LucideIcons.ArrowRight className="w-4 h-4 text-[#1F5E4B] group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="/services/skin-diseases-treatment-dubai/" className="bg-[#E9E2D6] hover:bg-[#d8cfc0] p-5 rounded-xl flex items-center justify-between transition-all group">
                  <span className="font-bold text-[#1A1A1A] text-sm">Ayurvedic Skin Treatment</span>
                  <LucideIcons.ArrowRight className="w-4 h-4 text-[#1F5E4B] group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="/services/gastrointestinal-diseases-treatment-dubai/" className="bg-[#E9E2D6] hover:bg-[#d8cfc0] p-5 rounded-xl flex items-center justify-between transition-all group">
                  <span className="font-bold text-[#1A1A1A] text-sm">Ayurvedic Digestive Treatment</span>
                  <LucideIcons.ArrowRight className="w-4 h-4 text-[#1F5E4B] group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="/services/shirodhara-therapy-in-dubai/" className="bg-[#E9E2D6] hover:bg-[#d8cfc0] p-5 rounded-xl flex items-center justify-between transition-all group">
                  <span className="font-bold text-[#1A1A1A] text-sm">Shirodhara Therapy</span>
                  <LucideIcons.ArrowRight className="w-4 h-4 text-[#1F5E4B] group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="/services/abhyanga-massage-dubai/" className="bg-[#E9E2D6] hover:bg-[#d8cfc0] p-5 rounded-xl flex items-center justify-between transition-all group">
                  <span className="font-bold text-[#1A1A1A] text-sm">Kerala Ayurvedic Massage</span>
                  <LucideIcons.ArrowRight className="w-4 h-4 text-[#1F5E4B] group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="/services/prakriti-dosha-assessment-dubai/" className="bg-[#E9E2D6] hover:bg-[#d8cfc0] p-5 rounded-xl flex items-center justify-between transition-all group">
                  <span className="font-bold text-[#1A1A1A] text-sm">Prakriti & Dosha Assessment</span>
                  <LucideIcons.ArrowRight className="w-4 h-4 text-[#1F5E4B] group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
            <ContentReviewBadge doctorName="Dr. Shamna Keloth Meethal" pageSlug="ayurvedic-diet-dubai-summer" lastReviewed="2026-01-12" />
          </motion.div>
        </div>
      </section>

      {/* Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-[#E9E2D6] p-4 shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 flex-col sm:flex-row text-center sm:text-left">
          <div className="flex flex-col">
            <p className="text-[#1A1A1A] font-bold text-sm mb-0.5">Ready to beat the Dubai summer heat?</p>
            <p className="text-[#5F5F5F] text-sm">Book your personalized Ayurvedic consultation today</p>
          </div>
          <Link href="/book-appointment/">
            <button className="whitespace-nowrap rounded-lg bg-[#1F5E4B] px-8 py-3 text-base font-bold text-white transition-all hover:bg-[#16493a]">
              Book Now
            </button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
