import React, { useState, useEffect } from 'react';
import Layout from '../../../components/Layout';
import Head from "next/head";
import Image from 'next/image';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { useToast } from '../../../components/Toast';
import ContentReviewBadge from '../../../components/ContentReviewBadge';

const content = {
  hero: {
    title: "Ayurvedic Diet vs. Intermittent Fasting: Navigating Ramadan & Beyond in Dubai",
    description1: "In the fitness circles of Dubai Marina and the corporate hubs of DIFC, Intermittent Fasting (IF) is hailed as the ultimate health hack. Meanwhile, millions in the UAE practice spiritual fasting during the Holy Month of Ramadan. But how does this stack up against the ancient Ayurvedic practice of Langhana (Lightening Therapy), often used alongside professional detox treatments like <a href=\"/services/panchakarma-treatment-dubai/\" class=\"text-[#1F5E4B] underline font-bold\">Panchakarma Treatment in Dubai</a>?",
    description2: "At RamaCare Polyclinic, we believe that fasting is a powerful tool, but without an Ayurvedic foundation, it can often lead to muscle loss, dehydration, and \"rebound\" weight gain in the harsh Dubai climate.",
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
    title: 'The "Answer-First" Summary: Is Fasting Ayurvedic?',
    question: 'How does Ayurveda view Intermittent Fasting?',
    answer: 'Ayurveda has practiced fasting for millennia under the name Langhana. However, unlike the modern "16:8" window which is the same for everyone, Ayurveda insists that fasting must be Dosha-specific. For instance, a "Vata" body type in Dubai should avoid long fasts to prevent anxiety, while a "Kapha" type thrives on them. When combined with the Dubai lifestyle, Ayurveda ensures your fasting window doesn\'t deplete your Ojas (vitality).'
  },
  stickyTopBar: {
    text: 'Ramadan & Fasting Health Consultation in Dubai - Limited Slots Available',
    cta: 'Book Now'
  },
  comparisonSection: {
    title: '1. Intermittent Fasting vs. Ayurvedic Langhana',
    items: [
      {
        title: 'Modern Intermittent Fasting',
        icon: 'Clock',
        iconColor: 'text-blue-600',
        bgColor: 'bg-[#E3F2FD]',
        features: [
          { text: 'One-size-fits-all approach (typically 16:8)', icon: 'Clock', color: 'text-blue-600' },
          { text: 'Focuses on time-restricted eating', icon: 'CheckCircle', color: 'text-blue-600' },
          { text: 'May not account for individual constitution', icon: 'AlertCircle', color: 'text-blue-500' },
          { text: 'Can lead to dehydration in Dubai\'s climate', icon: 'AlertCircle', color: 'text-blue-500' }
        ]
      },
      {
        title: 'Ayurvedic Langhana',
        icon: 'Leaf',
        iconColor: 'text-[#1F5E4B]',
        bgColor: 'bg-[#F1F8E9]',
        features: [
          { text: 'Dosha-specific fasting protocols', icon: 'Leaf', color: 'text-[#1F5E4B]' },
          { text: 'Considers climate, season, and individual digestion', icon: 'CheckCircle', color: 'text-[#1F5E4B]' },
          { text: 'Protects Ojas (vitality and immunity)', icon: 'CheckCircle', color: 'text-[#1F5E4B]' },
          { text: 'Includes hydration and cooling strategies for UAE heat', icon: 'CheckCircle', color: 'text-[#1F5E4B]' }
        ]
      }
    ]
  },
  pittaWarning: {
    title: "2. Fasting in the Dubai Heat: The Pitta Warning",
    cardTitle: "Climate Consideration Critical",
    description: "Dubai's summer temperatures regularly exceed 45°C, creating a high-Pitta environment. In Ayurveda, Pitta represents heat and transformation in the body.",
    riskIntro: "When you combine external heat with internal heat from fasting, you risk:",
    risks: [
      { highlight: "Hyperacidity", text: "and inflammation" },
      { highlight: "Dehydration", text: "leading to headaches and fatigue" },
      { highlight: "Irritability", text: "and mood swings (\"hangry\" episodes)" },
      { highlight: "Muscle breakdown", text: "without proper nutrition timing" }
    ],
    solution: "The Ayurvedic Solution: Cooling foods at Iftar (coconut water, cucumber, mint), shorter fasting windows for Pitta types, and strategic hydration protocols designed for the UAE climate."
  },
  ramadanOptimization: {
    title: "3. Optimizing Ramadan with Ayurveda",
    description: "Ramadan fasting is spiritually profound, but without the right approach, it can deplete rather than rejuvenate. Here's how RamaCare integrates Ayurvedic wisdom with Ramadan observance.",
    protocols: [
      {
        title: "Iftar Protocol (Breaking Fast)",
        icon: "Moon",
        steps: [
          { icon: "Droplets", title: "Step 1: Hydrate First", text: "Start with dates + coconut water or fresh lime water to rehydrate and balance electrolytes.", color: "text-blue-500" },
          { icon: "Soup", title: "Step 2: Warm Soup", text: "Light lentil or vegetable soup to gently awaken digestion (Agni).", color: "text-orange-500" },
          { icon: "Utensils", title: "Step 3: Balanced Meal", text: "After 20-30 minutes, eat a balanced meal with protein, healthy fats, and complex carbs. Avoid heavy fried foods.", color: "text-green-500" }
        ],
        tip: "Ayurvedic Tip: Chew slowly and stop at 75% fullness to prevent indigestion"
      },
      {
        title: "Suhoor Protocol (Pre-Dawn)",
        icon: "Sunrise",
        steps: [
          { icon: "Droplets", title: "Hydration Focus", text: "Drink 2-3 glasses of water or herbal tea. Add a pinch of pink salt for electrolytes.", color: "text-blue-500" },
          { icon: "Apple", title: "Sustained Energy Foods", text: "Oats, dates, nuts, yogurt, fruits. Avoid refined sugar and excess salt.", color: "text-green-500" },
          { icon: "Leaf", title: "Cooling Herbs", text: "Include mint, fennel seeds, or coriander to keep Pitta balanced during the day", color: "text-[#1F5E4B]" }
        ],
        tip: "Timing: Eat at least 30 minutes before Fajr to allow proper digestion"
      }
    ]
  },
  doshaComparison: {
    title: "4. Comparison: Fasting by Body Type (Dosha)",
    description: "Your body type (Dosha) determines how you should fast. Here's what modern IF recommends versus what Ayurveda warns.",
    table: {
      headers: ["Body Type (Dosha)", "IF Recommendation", "Ayurvedic Warning"],
      rows: [
        {
          dosha: "Vata",
          sub: "(Thin, Dry)",
          ifRec: "Short windows (12-14 hours)",
          ayurWarning: "Long fasts cause insomnia and tremors.",
          warningHighlight: "insomnia and tremors"
        },
        {
          dosha: "Pitta",
          sub: "(Hot, High Hunger)",
          ifRec: "Moderate with cooling liquids",
          ayurWarning: "Can lead to intense \"hangry\" episodes and acidity.",
          warningHighlight: "\"hangry\" episodes and acidity"
        },
        {
          dosha: "Kapha",
          sub: "(Heavy, Slow)",
          ifRec: "Can handle 18-20 hour fasts",
          ayurWarning: "Best for this type; clears stagnation and lethargy.",
          warningHighlight: "Best for this type"
        }
      ]
    },
    cta: {
      text: "Don't know your Dosha? Book a consultation at RamaCare for a personalized body type assessment and custom fasting plan.",
      button: "Get Your Dosha Assessment"
    }
  },
  faq: {
    title: "5. People Also Ask (PAA) - Fasting in Dubai",
    description: "Common questions about fasting, Ramadan, and Ayurveda in the UAE",
    items: [
      {
        question: "Is intermittent fasting safe during Ramadan?",
        answer: "Yes, when done correctly. Combining IF with Ramadan requires careful management of hydration and electrolyte balance to ensure you don't deplete your energy levels."
      },
      {
        question: "Can I do 16:8 fasting in Dubai's summer?",
        answer: "It depends on your Dosha. Pitta types may struggle with long windows in extreme heat, while Kapha types might find it beneficial. Always prioritize hydration."
      },
      {
        question: "What should I eat during Iftar to avoid weight gain?",
        answer: "Focus on rehydrating first, then warm soups, followed by a balanced meal of proteins and complex carbs. Avoid heavy fried foods and refined sugars."
      },
      {
        question: "Will fasting boost my immunity or weaken it?",
        answer: "Correct fasting (Langhana) strengthens Ojas and immunity. Incorrect fasting that leads to exhaustion can weaken your body's defenses."
      },
      {
        question: "How is Ayurvedic fasting different from keto or other diets?",
        answer: "Ayurveda is constitutional. It doesn't follow a fixed macronutrient ratio but adjusts based on your unique body type, the season, and your current health state."
      }
    ],
    footer: {
      text: "Still unsure? Every body is different. Get personalized answers.",
      button: "Book Free Consultation"
    }
  },
  authority: {
    title: "6. Consult the Experts at RamaCare Polyclinic",
    subtitle: "Why trust generic fasting advice when you can work with DHA-licensed Ayurvedic specialists who understand both ancient wisdom and modern Dubai lifestyles?",
    cards: [
      { icon: "ShieldCheck", title: "DHA Licensed", text: "Fully accredited by Dubai Health Authority" },
      { icon: "UserCheck", title: "Expert Practitioners", text: "Certified Ayurvedic specialists with years of experience" },
      { icon: "Users", title: "Thousands Helped", text: "Trusted by Dubai's health-conscious community" },
      { icon: "Sparkles", title: "Personalized Care", text: "Customized plans based on your unique Dosha" }
    ],
    benefitBox: {
      title: "What You'll Get in Your Consultation",
      items: [
        "Comprehensive Dosha assessment",
        "Personalized fasting schedule",
        "Dubai climate-adapted meal plans",
        "Ramadan optimization strategies",
        "Herbal recommendations",
        "Ongoing support and follow-up"
      ],
      button: "Schedule Your Consultation Now"
    },
    reviewer: "Content Reviewed by Shamna, Ayurvedic Specialist at RamaCare Polyclinic, Dubai."
  },
  finalCTA: {
    title: "Master the art of fasting without the burnout",
    subtitle: "Elevate your health with a professional Ayurvedic Diet Plan Dubai that respects your body's unique needs and the UAE's cultural traditions.",
    button: "Book Your Fasting Consultation in Jumeirah Today",
    footer: "Limited slots available • DHA Licensed • Located in Jumeirah, Dubai"
  }
};

export default function AyurvedicDietVsIntermittentFastingDubaiPage() {
  const router = useRouter();
  const { showToast, ToastComponent } = useToast();
  const [showTopBar, setShowTopBar] = useState(false);
  const [bannerText, setBannerText] = useState("Fasting & Nutrition Consultation in Dubai - Optimize Your Health Today");

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

  useEffect(() => {
    const today = new Date();
    // Ramadan 2026 is approx mid-Feb to mid-March
    const isRamadanSeason = (today.getMonth() === 1 && today.getDate() >= 1) || (today.getMonth() === 2 && today.getDate() <= 25);
    if (isRamadanSeason) {
      setBannerText("Ramadan & Fasting Health Consultation in Dubai - Book Your Custom Diet Protocol");
    } else {
      setBannerText("Fasting & Nutrition Consultation in Dubai - Optimize Your Health Today");
    }
  }, []);

  const faqsForSchema = content.faq.items.map(faq => ({
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
        "@id": "https://ramacarepolyclinic.ae/services/ayurvedic-diet-vs-intermittent-fasting-dubai/#webpage",
        "url": "https://ramacarepolyclinic.ae/services/ayurvedic-diet-vs-intermittent-fasting-dubai/",
        "name": "Ayurvedic Diet vs. Intermittent Fasting Dubai | Ramadan Guide",
        "description": "Compare Intermittent Fasting and Ayurvedic 'Langhana.' Learn how to fast safely in Dubai's heat and optimize your Ramadan nutrition with RamaCare Polyclinic Jumeirah.",
        "inLanguage": "en",
        "isPartOf": {
          "@type": "WebSite",
          "url": "https://ramacarepolyclinic.ae/",
          "name": "RamaCare Polyclinic"
        },
        "about": {
          "@type": "MedicalCondition",
          "name": "Fasting Protocols / Dosha-Based Nutrition (Langhana)"
        },
        "lastReviewed": "2026-08-29",
        "reviewedBy": {
          "@id": "https://ramacarepolyclinic.ae/services/ayurvedic-diet-vs-intermittent-fasting-dubai/#physician"
        },
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ramacarepolyclinic.ae/" },
            { "@type": "ListItem", "position": 2, "name": "Ayurveda", "item": "https://ramacarepolyclinic.ae/services/ayurveda-dubai" },
            { "@type": "ListItem", "position": 3, "name": "Ayurvedic Diet vs. Intermittent Fasting", "item": "https://ramacarepolyclinic.ae/services/ayurvedic-diet-vs-intermittent-fasting-dubai/" }
          ]
        }
      },
      {
        "@type": "Physician",
        "@id": "https://ramacarepolyclinic.ae/services/ayurvedic-diet-vs-intermittent-fasting-dubai/#physician",
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
        "@id": "https://ramacarepolyclinic.ae/services/ayurvedic-diet-vs-intermittent-fasting-dubai/#faq",
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
        <title key="title">Ayurvedic Diet vs. Intermittent Fasting Dubai | Ramadan Guide</title>
        <meta name="description" content="Compare Intermittent Fasting and Ayurvedic 'Langhana.' Learn how to fast safely in Dubai's heat and optimize your Ramadan nutrition with RamaCare Polyclinic Jumeirah." key="description" />
        <meta name="robots" content="index, follow" key="robots" />
        <link rel="canonical" href="https://ramacarepolyclinic.ae/services/ayurvedic-diet-vs-intermittent-fasting-dubai/" key="canonical" />

        {/* Open Graph Tags */}
        <meta property="og:type" content="website" key="og:type" />
        <meta property="og:title" content="Ayurvedic Diet vs. Intermittent Fasting Dubai | Ramadan Guide" key="og:title" />
        <meta property="og:description" content="Compare Intermittent Fasting and Ayurvedic 'Langhana.' Learn how to fast safely in Dubai's heat and optimize your Ramadan nutrition with RamaCare Polyclinic Jumeirah." key="og:description" />
        <meta property="og:url" content="https://ramacarepolyclinic.ae/services/ayurvedic-diet-vs-intermittent-fasting-dubai/" key="og:url" />
        <meta property="og:image" content="https://ramacarepolyclinic.ae/images/ayurvedic-diet-intermittent-fasting-dubai-og.jpg" key="og:image" />
        <meta property="og:image:width" content="1200" key="og:image:width" />
        <meta property="og:image:height" content="630" key="og:image:height" />
        <meta property="og:image:alt" content="Ayurvedic Diet vs Intermittent Fasting in Dubai - RamaCare Polyclinic" key="og:image:alt" />
        <meta property="og:site_name" content="RamaCare Polyclinic" key="og:site_name" />
        <meta property="og:locale" content="en_AE" key="og:locale" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content="Ayurvedic Diet vs. Intermittent Fasting Dubai | Ramadan Guide" key="twitter:title" />
        <meta name="twitter:description" content="Learn how Ayurvedic Langhana compares to modern intermittent fasting, and how to fast safely in Dubai's heat and during Ramadan." key="twitter:description" />
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

      {/* Ramadan Optimization Section - Section 3 */}
      <section className="bg-[#F5F1EA] py-16 md:py-24 px-4">
        <div className="max-w-[1031px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-[36px] font-bold text-[#1A1A1A] mb-8 leading-tight">
              {content.ramadanOptimization.title}
            </h2>
            <p className="text-[18px] text-[#5F5F5F] max-w-[768px] mx-auto leading-relaxed mb-12">
              {content.ramadanOptimization.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 text-left">
            {content.ramadanOptimization.protocols.map((protocol, pIndex) => {
              const ProtocolIcon = LucideIcons[protocol.icon];
              const isIftar = pIndex === 0;
              return (
                <div key={pIndex} className="bg-white p-8 rounded-2xl flex flex-col h-full border border-gray-100">
                  <div className="flex items-center gap-4 mb-8">
                    <ProtocolIcon className="w-10 h-10 text-[#1F5E4B]" strokeWidth={1.5} />
                    <h3 className="text-[24px] font-bold text-[#1A1A1A]">
                      {protocol.title}
                    </h3>
                  </div>

                  <div className="space-y-8 flex-grow">
                    {protocol.steps.map((step, sIndex) => {
                      const StepIcon = LucideIcons[step.icon];
                      return (
                        <div key={sIndex} className="flex gap-4">
                          <div className="mt-1">
                            <StepIcon className={`w-6 h-6 ${sIndex === 0 ? 'text-blue-500' : sIndex === 1 ? 'text-orange-500' : 'text-green-500'}`} strokeWidth={1.5} />
                          </div>
                          <div>
                            <h4 className="font-bold text-[#1A1A1A] text-[18px] mb-1">{step.title}</h4>
                            <p className="text-[#5F5F5F] text-[16px] leading-relaxed">{step.text}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-6 p-4 bg-[#E9E2D6] rounded-lg text-[14px] text-[#1A1A1A] leading-relaxed">
                    {isIftar ? (
                      <p><span className="font-bold">Ayurvedic Tip:</span> {protocol.tip.replace('Ayurvedic Tip: ', '')}</p>
                    ) : (
                      <p><span className="font-bold">Timing:</span> {protocol.tip.replace('Timing: ', '')}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

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
              <strong className="font-bold text-[18px]">Don't know your Dosha?</strong> Book a consultation at RamaCare for a personalized body type assessment and custom fasting plan.
            </p>
            <button
              onClick={() => handleWhatsAppClick("Hello RamaCare, I'd like to book a Dosha Assessment for Fasting & Ramadan.")}
              className="bg-[#1F5E4B] text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-[#1F5E4B]/90 transition-colors shadow-md"
            >
              {content.doshaComparison.cta.button}
            </button>
          </div>
        </div>
      </section>

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
                onClick={() => handleWhatsAppClick("Hello RamaCare, I have some questions about Fasting & Ramadan. Can I get a free consultation?")}
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
              onClick={() => handleWhatsAppClick("Hello RamaCare, I'm interested in an Expert Consultation for the Fasting & Ramadan program.")}
              className="bg-white text-[#1F5E4B] px-10 py-4 rounded-xl font-bold text-lg hover:bg-[#F5F1EA] transition-colors shadow-xl"
            >
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
      <ContentReviewBadge doctorName="Dr. Shamna Keloth Meethal" pageSlug="ayurvedic-diet-vs-intermittent-fasting-dubai" />

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
            Limited slots available • DHA Licensed • Located in Jumeirah, Dubai
          </p>
        </div>
      </section>
    </Layout>
  );
}
