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

const content = {
  hero: {
    title: 'Cooling Your Pitta: Ayurvedic Diet Tips for the Dubai Summer',
    mainDescription: 'When the desert sun peaks and temperatures in Dubai soar above 45°C, your body undergoes an internal "heat wave." In Ayurveda, this season is dominated by Pitta, the energy of fire and water. If left unmanaged, the intense UAE summer can lead to burnout, skin inflammation, and digestive acidity.',
    highlightBox: 'An Ayurvedic Diet for the Dubai Summer is your internal air conditioning. It isn\'t just about drinking cold water—it\'s about choosing foods that chemically cool your blood and calm your nervous system.',
    ctaButtons: {
      primary: { text: 'Book Summer Cooling Consultation', link: '/book-appointment' },
      secondary: { text: 'WhatsApp Now', phone: '971566597878' }
    },
    imageCard: {
      title: 'Desert Heat → Cooling Herbs',
      subtitle: ''
    }
  },
  summary: {
    badge: 'Answer-First Summary',
    title: 'The "Answer-First" Summary for Summer Cooling',
    question: 'How can I reduce body heat during the Dubai summer?',
    answer: 'To pacify Pitta, focus on the three "Cooling Tastes": Sweet, Bitter, and Astringent. Incorporate hydrating foods like watermelon, cucumber, and coconut water, and use cooling spices like fennel and coriander. Avoid "heating" triggers like red chilies, caffeine, and vinegar-heavy foods, which can worsen heat-related irritability and acidity.',
    cta: ''
  },
  pittaCrisis: {
    title: 'Why the "Dubai Summer" is a Pitta Crisis',
    description: 'At RamaCare Polyclinic, we see a surge in "heat-stress" symptoms during the months of June through September. The Dubai environment creates a perfect storm for Pitta imbalance:',
    items: [
      {
        title: 'Extreme External Heat',
        description: 'High UV exposure increases the fire element in the skin and liver.',
        icon: 'Leaf'
      },
      {
        title: 'The "AC Transition" Shock',
        description: 'Moving from 50°C outdoors to 20°C indoors confuses the body\'s thermoregulation, often leading to respiratory "summer colds."',
        icon: 'Wind'
      },
      {
        title: 'Dehydration & Electrolyte Loss',
        description: 'Excessive sweating in the humidity of Dubai Marina or Jumeirah leads to the depletion of vital minerals, causing fatigue and "brain fog."',
        icon: 'Droplets'
      }
    ]
  },
  superfoods: {
    title: '2. Top 5 Cooling Superfoods for UAE Residents',
    description: 'These are essential items for your next trip to Spinneys, Waitrose, or Lulu Hypermarket:',
    items: [
      {
        title: 'Fresh Coconut Water',
        description: 'Nature\'s electrolyte drink. Rich in potassium and natural cooling properties. Drink fresh, not packaged.',
        icon: '🥥'
      },
      {
        title: 'Watermelon & Muskmelon',
        description: 'Over 90% water content. Sweet taste pacifies Pitta. The mild diuretic action helps flush heat from the kidneys.',
        icon: '🍉'
      },
      {
        title: 'Coriander & Mint',
        description: 'Cooling herbs that reduce internal inflammation. Add fresh to salads, or brew as tea.',
        icon: '🌿'
      },
      {
        title: 'Barley (Yava)',
        description: 'Ancient cooling grain. Make barley water by boiling and straining. Reduces body heat and supports liver function.',
        icon: '🌾'
      },
      {
        title: 'Gulkand (Rose Petal Jam)',
        description: 'Traditional cooling preparation. 1 teaspoon daily reduces acidity, body heat, and emotional irritability.',
        icon: '🌹'
      }
    ]
  },
  summerSip: {
    title: '3. The "Summer Sip" Protocol: 3 DIY Cooling Drinks',
    items: [
      {
        title: 'Fennel & Rose Cooler',
        recipe: 'Soak 1 tsp fennel seeds + 3-4 dried rose petals in 500ml water overnight. Strain and sip throughout the day.',
        benefit: 'Reduces internal heat and calms the digestive tract.'
      },
      {
        title: 'The Ayurvedic "Buttermilk" (Takra)',
        recipe: 'Blend 1 cup yogurt + 2 cups water + pinch of cumin + fresh coriander. Drink at lunch.',
        benefit: 'Probiotic-rich and cools the stomach. The "cooling food" for pitta digestion.'
      },
      {
        title: 'Coriander Seed Tea',
        recipe: 'Boil 1 tsp coriander seeds in 2 cups water for 5 minutes. Strain and drink warm or room temperature.',
        benefit: 'Flushes toxins, cools the liver, and reduces skin inflammation.'
      }
    ]
  },
  paa: {
    title: '4. People Also Ask (PAA) - Dubai Summer Edition',
    items: [
      {
        question: 'Can I eat spicy food during the summer if I live in Dubai?',
        answer: 'We recommend minimizing "pungent" spices (chili, garlic, raw onion) during peak summer. If you must have spice, balance it with cooling sides like cucumber raita or extra Ghee.'
      },
      {
        question: 'Why do I feel more irritable and angry when it\'s hot in Dubai?',
        answer: 'In Ayurveda, "Pitta" governs both body temperature and emotions like anger. High external heat "cooks" the Pitta in your mind. A cooling diet and Sheetali Pranayama (cooling breath) can significantly calm "summer road rage" and irritability.'
      },
      {
        question: 'Is it okay to eat salads all day during a Dubai summer?',
        answer: 'While salads are cooling, they are also "Vata-increasing" (dry and rough). For best results, have your raw salad at lunch when your digestion is strongest, and stick to cooked, cooling meals like mung dal and rice for dinner.'
      }
    ]
  },
  beatHeat: {
    title: '5. Beat the Heat at RamaCare Polyclinic',
    description: 'Don\'t wait for a heat stroke to take action. At our Jumeirah 1 clinic, we offer specialized Summer Wellness Assessments.',
    items: [
      {
        title: 'Pitta-Analysis',
        description: 'Find out how much "fire" is currently in your system.'
      },
      {
        title: 'Customized Hydration Plans',
        description: 'Beyond water, we tell you exactly which infusions your body type needs.'
      },
      {
        title: 'Cooling Therapies',
        description: 'Experience Takradhara (medicated buttermilk poured on the forehead), the gold standard for cooling the brain and nervous system in the UAE summer.'
      }
    ],
    cta: 'Book Your Summer Cooling Consultation'
  },
  authorityFooter: {
    title: 'The "Authority" Footer',
    description: 'Stay energized and balanced even in the peak of August. Start your journey with a professional Ayurvedic Diet Plan Dubai tailored for the desert climate.',
    cta: 'Book Your Summer Cooling Consultation in Jumeirah Today'
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
        "name": "Ayurvedic Diet Tips for Dubai Summer | RamaCare",
        "description": "Discover Ayurvedic diet tips to cool Pitta and manage heat stress during the intense Dubai summer at RamaCare Polyclinic Jumeirah.",
        "inLanguage": "en",
        "isPartOf": {
          "@type": "WebSite",
          "url": "https://ramacarepolyclinic.ae/",
          "name": "RamaCare Polyclinic"
        },
        "about": {
          "@type": "MedicalCondition",
          "name": "Heat Stress / Pitta Imbalance (Seasonal)"
        },
        "lastReviewed": "2026-08-29",
        "reviewedBy": {
          "@id": "https://ramacarepolyclinic.ae/services/ayurvedic-diet-dubai-summer/#physician"
        },
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ramacarepolyclinic.ae/" },
            { "@type": "ListItem", "position": 2, "name": "Ayurveda", "item": "https://ramacarepolyclinic.ae/services/ayurveda-dubai/" },
            { "@type": "ListItem", "position": 3, "name": "Ayurvedic Diet for Dubai Summer", "item": "https://ramacarepolyclinic.ae/services/ayurvedic-diet-dubai-summer/" }
          ]
        }
      },
      {
        "@type": "Physician",
        "@id": "https://ramacarepolyclinic.ae/services/ayurvedic-diet-dubai-summer/#physician",
        "name": "Dr. Shamna Keloth Meethal",
        "medicalSpecialty": "Ayurveda",
        "honorificSuffix": "BAMS",
        "hasCredential": "DHA Licensed Ayurveda Doctor",
        "worksFor": {
          "@type": "MedicalOrganization",
          "name": "RamaCare Polyclinic"
        },
        "url": "https://ramacarepolyclinic.ae/doctors/dr-shamna-keloth-meethal-ayurveda-doctor-dubai/"
      },
      {
        "@type": "FAQPage",
        "@id": "https://ramacarepolyclinic.ae/services/ayurvedic-diet-dubai-summer/#faq",
        "mainEntity": faqsForSchema
      }
    ]
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hello RamaCare, I'm interested in Ayurvedic Diet Tips for the Dubai Summer. Please help me book a consultation.");
    window.open(`https://wa.me/${content.hero.ctaButtons.secondary.phone}?text=${message}`, '_blank');
  };

  const handleBookAppointment = () => {
    router.push('/book-appointment');
  };

  return (
    <Layout>
      {ToastComponent}
      <Head>
        <title key="title">Ayurvedic Diet Tips for Dubai Summer | RamaCare</title>
        <meta name="description" content="Discover Ayurvedic diet tips to cool Pitta and manage heat stress during the intense Dubai summer at RamaCare Polyclinic Jumeirah." key="description" />
        <meta name="robots" content="index, follow" key="robots" />
        <link rel="canonical" href="https://ramacarepolyclinic.ae/services/ayurvedic-diet-dubai-summer/" key="canonical" />

        {/* Open Graph Tags */}
        <meta property="og:type" content="website" key="og:type" />
        <meta property="og:title" content="Ayurvedic Diet Tips for Dubai Summer | RamaCare" key="og:title" />
        <meta property="og:description" content="Discover Ayurvedic diet tips to cool Pitta and manage heat stress during the intense Dubai summer at RamaCare Polyclinic Jumeirah." key="og:description" />
        <meta property="og:url" content="https://ramacarepolyclinic.ae/services/ayurvedic-diet-dubai-summer/" key="og:url" />
        <meta property="og:image" content="https://ramacarepolyclinic.ae/images/pitta.jpg" key="og:image" />
        <meta property="og:image:width" content="1200" key="og:image:width" />
        <meta property="og:image:height" content="630" key="og:image:height" />
        <meta property="og:image:alt" content="Ayurvedic Diet Tips for the Dubai Summer - RamaCare Polyclinic" key="og:image:alt" />
        <meta property="og:site_name" content="RamaCare Polyclinic" key="og:site_name" />
        <meta property="og:locale" content="en_AE" key="og:locale" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content="Ayurvedic Diet Tips for Dubai Summer | RamaCare" key="twitter:title" />
        <meta name="twitter:description" content="Cool Pitta and beat the Dubai heat with Ayurvedic diet tips from RamaCare Polyclinic Jumeirah." key="twitter:description" />
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

            <Link href="/book-appointment">
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

            <Link href="/book-appointment">
              <button className="mb-12 rounded-lg bg-[#1F5E4B] px-12 py-4 text-base font-bold text-white transition-all hover:bg-[#16493a]">
                {content.authorityFooter.cta}
              </button>
            </Link>

            {/* Related Reading */}
            <div className="mx-auto max-w-4xl mt-12 mb-8">
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-6">Related Ayurvedic Guides</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
                <a href="/services/ayurvedic-detox-diet-plan-dubai/" className="bg-[#E9E2D6] hover:bg-[#d8cfc0] p-5 rounded-xl flex items-center justify-between transition-all group">
                  <span className="font-bold text-[#1A1A1A] text-sm">Detox Diet Plan</span>
                  <LucideIcons.ArrowRight className="w-4 h-4 text-[#1F5E4B] group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="/services/ayurvedic-diet-plan-dubai/" className="bg-[#E9E2D6] hover:bg-[#d8cfc0] p-5 rounded-xl flex items-center justify-between transition-all group">
                  <span className="font-bold text-[#1A1A1A] text-sm">Ayurvedic Diet Plan</span>
                  <LucideIcons.ArrowRight className="w-4 h-4 text-[#1F5E4B] group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="/services/ayurvedic-gut-health-dubai/" className="bg-[#E9E2D6] hover:bg-[#d8cfc0] p-5 rounded-xl flex items-center justify-between transition-all group">
                  <span className="font-bold text-[#1A1A1A] text-sm">Ayurvedic Gut Health</span>
                  <LucideIcons.ArrowRight className="w-4 h-4 text-[#1F5E4B] group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            <ContentReviewBadge doctorName="Dr. Shamna Keloth Meethal" pageSlug="ayurvedic-diet-dubai-summer" />
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
          <Link href="/book-appointment">
            <button className="whitespace-nowrap rounded-lg bg-[#1F5E4B] px-8 py-3 text-base font-bold text-white transition-all hover:bg-[#16493a]">
              Book Now
            </button>
          </Link>
        </div>
      </div>
     </Layout>
   );
 }
