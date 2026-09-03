import React, { useState } from 'react';
import Layout from '../../../components/Layout';
import Head from "next/head";
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { useToast } from '../../../components/Toast';
import { useRouter } from 'next/router';
import ContentReviewBadge from '../../../components/ContentReviewBadge';

const content = {
  hero: {
    title: "Ayurvedic Diet vs. Keto Diet: A Dubai Perspective on Sustainable Wellness",
    highlight: "In Dubai's extreme climate, not every diet works the same.",
    description1: "In the quest for the perfect body in the city of gold, two heavyweights dominate the conversation: the modern, high-fat Keto Diet and the ancient, balance-based Ayurvedic Diet. While both promise weight loss, their impact on the body—especially in the extreme climate of the UAE—is vastly different. Ayurveda uses a constitutional approach to health, starting with a custom <a href=\"/services/ayurvedic-diet-plan-dubai/\" class=\"text-[#2D5A41] underline font-bold\">Ayurvedic Diet Plan</a> tailored to your specific body type.",
    description2: "At RamaCare Polyclinic, we often see patients who have \"burned out\" on Keto and are looking for a more personalized, long-term solution. Here is a clinical breakdown of how these two diets perform in the Dubai environment.",
    ctaButtons: {
      primary: { text: 'Book Your Comparative Consultation in Jumeirah Today' },
      secondary: { text: 'WhatsApp Consultation', phone: '971566597878' }
    },
    footer: "DHA-Licensed Experts • Personalized Plan"
  },
  summary: {
    title: 'The "Answer-First" Summary: Which is Better?',
    description: 'Should I choose Keto or Ayurveda in Dubai? While Keto offers rapid short-term weight loss by inducing ketosis, it is often too "heating" and "drying" for the Dubai climate, leading to irritability and digestive heat. Ayurveda offers a personalized alternative that promotes sustainable fat loss by balancing your specific Dosha, making it safer for long-term health and better suited for the high-heat UAE environment.'
  },
  philosophy: {
    title: 'The Core Philosophy: Fat vs. Fire',
    items: [
      {
        title: 'The Keto Diet:',
        description: 'Focuses on shifting the body\'s fuel source from glucose to fats. It is a "one-size-fits-all" metabolic hack that requires strict macronutrient counting (75% fat, 20% protein, 5% carbs).',
        icon: 'Activity'
      },
      {
        title: 'The Ayurvedic Diet:',
        description: 'Focuses on Agni (Digestive Fire). It views food as information. Instead of counting macros, you eat according to your body type (Vata, Pitta, or Kapha) and the current Dubai season.',
        icon: 'Leaf'
      }
    ]
  },
  riskySummer: {
    title: '2. Why Keto Can Be Risky in the Dubai Summer',
    items: [
      {
        title: 'The Problem',
        description: 'High-fat diets generate internal heat, compounding Dubai\'s already extreme temperatures and causing metabolic stress.',
        icon: 'AlertTriangle',
        iconColor: 'text-red-500'
      },
      {
        title: 'The Result',
        description: 'Dehydration, irritability, skin dryness, and digestive discomfort become common side effects in hot climates.',
        icon: 'Thermometer',
        iconColor: 'text-orange-500'
      },
      {
        title: 'The Ayurvedic Fix',
        description: 'Cooling foods, hydration-focused meals, and climate-adapted nutrition that works with Dubai\'s environment, not against it.',
        icon: 'Droplets',
        iconColor: 'text-[#1F5E4B]'
      }
    ]
  },
  comparisonTable: {
    title: '3. Comparison Table: At a Glance',
    headers: ['Feature', 'Keto Diet', 'Ayurvedic Diet'],
    rows: [
      { feature: 'Primary Goal', keto: 'Ketosis (Fat Burning)', ayurveda: 'Agni (Metabolic Balance)' },
      { feature: 'Sustainability', keto: 'Hard to maintain socially in Dubai', ayurveda: 'Easy to adapt to local restaurants' },
      { feature: 'Personalization', keto: 'Low (Same for everyone)', ayurveda: 'High (Based on your Dosha)' },
      { feature: 'Effect on Energy', keto: 'Initial "crash" followed by focus', ayurveda: 'Consistent energy from Day 1' },
      { feature: 'Digestive Impact', keto: 'Can cause constipation/heaviness', ayurveda: 'Promotes daily detoxification' }
    ],
    cta: 'Book Your Comparative Consultation in Jumeirah Today'
  },
  middlePath: {
    title: '4. The "Middle Path" for Dubai Professionals',
    description1: 'You work in DIFC. You travel frequently. You attend high-end brunches and business dinners. The Keto Diet requires you to turn down the bread basket and explain your choices every time.',
    description2: 'Ayurveda allows you to eat intelligently based on your constitution, not based on rigid rules. It\'s not about restriction—it\'s about optimization.',
    quote: '"We work with your lifestyle, not against it."',
    cta: 'Book Your Comparative Consultation in Jumeirah Today'
  },
  paa: {
    title: '5. People Also Ask (PAA) - Dubai Perspective',
    items: [
      {
        question: 'Can I lose weight as quickly on Ayurveda as I can on Keto?',
        answer: 'While Keto may show rapid initial water weight loss, Ayurveda focuses on sustainable fat loss that doesn\'t compromise your metabolic health. Most patients see consistent, healthy weight reduction within 2-4 weeks while maintaining energy and digestive comfort.'
      },
      {
        question: 'Is Ayurveda compatible with Dubai\'s restaurant scene?',
        answer: 'Absolutely. Unlike Keto, which requires strict macro counting, Ayurveda teaches you how to make intelligent choices at any restaurant based on your body type and the season. You\'ll learn to navigate menus with confidence.'
      },
      {
        question: 'What if I\'ve already tried Keto and it didn\'t work?',
        answer: 'Many of our patients come to us after experiencing Keto burnout. We help you understand why it didn\'t work for your specific constitution and design a personalized Ayurvedic approach that addresses the root causes. If needed, this may include clinic-based metabolic cleansing therapies like <a href=\"/services/panchakarma-treatment-dubai/\" class=\"text-[#1F5E4B] underline font-bold\">Panchakarma Treatment in Dubai</a>.'
      },
      {
        question: 'How long does it take to see results with Ayurveda?',
        answer: 'Most patients notice improved energy and digestion within the first week. Visible weight loss and body composition changes typically occur within 2-4 weeks, with sustainable results continuing long-term.'
      },
      {
        question: 'Do I need to give up my favorite foods?',
        answer: 'Not necessarily. Ayurveda is about balance and timing, not elimination. We help you understand when and how to enjoy your favorite foods in a way that supports your health goals and body type.'
      }
    ]
  },
  idealPlan: {
    title: '6. Discover Your Ideal Plan at RamaCare',
    description: 'Whether you\'re exploring Ayurveda for the first time or recovering from a restrictive diet, our DHA-licensed practitioners provide personalized consultations that consider your body type, lifestyle, and the unique demands of living in Dubai.',
    features: [
      { text: 'DHA Licensed', icon: 'ShieldCheck' },
      { text: 'Jumeirah 1 Location', icon: 'MapPin' },
      { text: 'Clinical Consultation', icon: 'Stethoscope' }
    ],
    cta1: 'Book Your Comparative Consultation in Jumeirah Today',
    cta2: 'Explore our Ayurvedic Diet Plan Dubai'
  },
  retargeting: {
    text: '"Still unsure? Get a personalized diagnosis in 15 minutes."',
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
        "name": "Ayurvedic Diet vs. Keto Diet Dubai | Which is Better for You?",
        "description": "Comparing the Keto Diet and Ayurvedic Diet for the Dubai lifestyle. Discover which plan offers sustainable weight loss and better energy for the UAE climate. Visit RamaCare Jumeirah.",
        "inLanguage": "en",
        "isPartOf": {
          "@type": "WebSite",
          "url": "https://ramacarepolyclinic.ae/",
          "name": "RamaCare Polyclinic"
        },
        "about": {
          "@type": "MedicalCondition",
          "name": "Weight Management / Dietary Comparison (Ayurveda vs Keto)"
        },
        "lastReviewed": "2026-08-29",
        "reviewedBy": {
          "@id": "https://ramacarepolyclinic.ae/services/ayurvedic-diet-vs-keto-dubai/#physician"
        },
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ramacarepolyclinic.ae/" },
            { "@type": "ListItem", "position": 2, "name": "Ayurveda", "item": "https://ramacarepolyclinic.ae/services/ayurveda-dubai" },
            { "@type": "ListItem", "position": 3, "name": "Ayurvedic Diet vs. Keto Diet", "item": "https://ramacarepolyclinic.ae/services/ayurvedic-diet-vs-keto-dubai/" }
          ]
        }
      },
      {
        "@type": "Physician",
        "@id": "https://ramacarepolyclinic.ae/services/ayurvedic-diet-vs-keto-dubai/#physician",
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
        "@id": "https://ramacarepolyclinic.ae/services/ayurvedic-diet-vs-keto-dubai/#faq",
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
    router.push('/book-appointment');
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
        <title key="title">Ayurvedic Diet vs. Keto Diet Dubai | Which is Better for You?</title>
        <meta name="description" content="Comparing the Keto Diet and Ayurvedic Diet for the Dubai lifestyle. Discover which plan offers sustainable weight loss and better energy for the UAE climate. Visit RamaCare Jumeirah." key="description" />
        <meta name="robots" content="index, follow" key="robots" />
        <link rel="canonical" href="https://ramacarepolyclinic.ae/services/ayurvedic-diet-vs-keto-dubai/" key="canonical" />

        {/* Open Graph Tags */}
        <meta property="og:type" content="website" key="og:type" />
        <meta property="og:title" content="Ayurvedic Diet vs. Keto Diet Dubai | Which is Better for You?" key="og:title" />
        <meta property="og:description" content="Comparing the Keto Diet and Ayurvedic Diet for the Dubai lifestyle. Discover which plan offers sustainable weight loss and better energy for the UAE climate. Visit RamaCare Jumeirah." key="og:description" />
        <meta property="og:url" content="https://ramacarepolyclinic.ae/services/ayurvedic-diet-vs-keto-dubai/" key="og:url" />
        <meta property="og:image" content="https://ramacarepolyclinic.ae/images/ayurvedic-diet-vs-keto-dubai-og.jpg" key="og:image" />
        <meta property="og:image:width" content="1200" key="og:image:width" />
        <meta property="og:image:height" content="630" key="og:image:height" />
        <meta property="og:image:alt" content="Ayurvedic Diet vs Keto Diet Comparison in Dubai - RamaCare Polyclinic" key="og:image:alt" />
        <meta property="og:site_name" content="RamaCare Polyclinic" key="og:site_name" />
        <meta property="og:locale" content="en_AE" key="og:locale" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content="Ayurvedic Diet vs. Keto Diet Dubai | Which is Better for You?" key="twitter:title" />
        <meta name="twitter:description" content="Keto or Ayurveda? See which approach offers safer, more sustainable weight loss for Dubai's climate and lifestyle." key="twitter:description" />
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

    

      {/* Related Reading */}
      <section className="bg-white py-16 md:py-24 border-t border-[#E9E2D6]/40">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-10">
            Related Ayurvedic Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
            <a href="/services/ayurvedic-detox-diet-plan-dubai/" className="bg-[#F5F1EA] hover:bg-[#E9E2D6] p-6 rounded-2xl flex items-center justify-between transition-all group shadow-sm">
              <span className="font-bold text-[#1A1A1A] group-hover:text-[#1F5E4B]">Detox Diet Plan</span>
              <LucideIcons.ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#1F5E4B] transition-transform group-hover:translate-x-1" />
            </a>
            <a href="/services/ayurvedic-diet-plan-dubai/" className="bg-[#F5F1EA] hover:bg-[#E9E2D6] p-6 rounded-2xl flex items-center justify-between transition-all group shadow-sm">
              <span className="font-bold text-[#1A1A1A] group-hover:text-[#1F5E4B]">Ayurvedic Diet Plan</span>
              <LucideIcons.ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#1F5E4B] transition-transform group-hover:translate-x-1" />
            </a>
            <a href="/services/ayurvedic-gut-health-dubai/" className="bg-[#F5F1EA] hover:bg-[#E9E2D6] p-6 rounded-2xl flex items-center justify-between transition-all group shadow-sm">
              <span className="font-bold text-[#1A1A1A] group-hover:text-[#1F5E4B]">Ayurvedic Gut Health</span>
              <LucideIcons.ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#1F5E4B] transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>

      {/* Content Reviewer Badge */}
      <ContentReviewBadge doctorName="Dr. Shamna Keloth Meethal" pageSlug="ayurvedic-diet-vs-keto-dubai" />
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
