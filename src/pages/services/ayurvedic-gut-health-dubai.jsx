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
    title: "Ayurvedic Gut Health: Restoring 'Agni' for Better Digestion in Dubai",
    description1: "In the medical world of 2026, the gut is recognized as the \"second brain.\" In Ayurveda, this has been known for 5,000 years through the concept of Agni—your metabolic fire. When your Agni is strong, you feel energized and light. When it is weak or flickering, it leads to Ama (toxins), which manifests as bloating, sluggishness, and chronic digestive disorders common in the UAE.",
    description2: "An Ayurvedic Gut Health plan in Dubai is designed to relight this fire, ensuring that every meal you eat in our city's world-class restaurants is processed into vitality rather than waste.",
    ctaButtons: {
      primary: { text: 'Book Digestive Assessment' },
      secondary: { text: 'WhatsApp Consultation', phone: '971566597878' }
    },
    image: '/images/gut.jpg'
  },
  summary: {
    title: 'The "Answer-First" Summary for Digestive Wellness',
    question: 'How can I improve my gut health with Ayurveda?',
    answer: 'The secret lies in "kindling" your Agni. To restore digestion, start by drinking warm ginger water 20 minutes before meals, eating your largest meal at midday when the sun is highest, and avoiding "incompatible foods" (like fruit with dairy). In Dubai\'s climate, managing gut health also requires balancing the cold of air conditioning with warm, spiced, easy-to-digest meals.'
  },
  dubaiGut: {
    title: '1. The "Dubai Gut" Syndrome: Why Digestion Struggles Here',
    items: [
      {
        title: 'The "Ice Water" Habit',
        description: 'Drinking ice-cold water during a 45°C Dubai summer is like throwing water on a campfire. It instantly kills your Agni, leading to undigested food and bloating.',
        icon: 'Droplets'
      },
      {
        title: 'Social Late-Night Dining',
        description: 'Eating a heavy dinner at 9:00 PM in Downtown or Marina means your body is trying to digest while you sleep. This creates Ama, the heavy, sticky residue that causes morning fatigue and "brain fog."',
        icon: 'Moon'
      },
      {
        title: 'High-Stress Rushing',
        description: 'Eating while standing, driving, or answering emails in DIFC keeps the body in "fight or flight" mode, which shuts down the digestive system (The Enteric Nervous System).',
        icon: 'Activity'
      }
    ]
  },
  agniTypes: {
    title: '2. The 4 Types of Agni: Which One is Yours?',
    items: [
      {
        name: 'Vishamagni',
        subtitle: '(Irregular)',
        description: 'Inconsistent hunger and digestion. One day you can eat anything; the next, everything feels heavy.',
        icon: 'Wind',
        color: 'bg-blue-50',
        iconColor: 'text-blue-600'
      },
      {
        name: 'Tikshnagni',
        subtitle: '(Sharp/Hyper)',
        description: 'Intense hunger that turns into irritability. You can digest large meals but feel acidic or burnt.',
        icon: 'Flame',
        color: 'bg-red-50',
        iconColor: 'text-red-600'
      },
      {
        name: 'Mandagni',
        subtitle: '(Slow/Sluggish)',
        description: 'Low appetite, slow metabolism. You feel full quickly and bloated for hours after eating.',
        icon: 'Droplets',
        color: 'bg-[#F0F7F4]',
        iconColor: 'text-teal-600'
      },
      {
        name: 'Samagni',
        subtitle: '(Balanced)',
        description: 'Regular hunger, smooth digestion, energized after meals. The ideal state of metabolic fire.',
        icon: 'Sparkles',
        color: 'bg-green-50',
        iconColor: 'text-green-600'
      }
    ]
  },
  kitchenPharmacy: {
    title: '3. The "Gut-Healing" Kitchen Pharmacy',
    items: [
      {
        name: 'CCF Tea',
        badge: 'Cleanses Ama',
        description: 'Cumin, Coriander, Fennel tea—the Ayurvedic "reset button" for digestion. Drink warm throughout the day.',
        image: '/images/gut1.jpg',
        alt: 'CCF tea (cumin, coriander, fennel) for Ayurvedic gut health in Dubai'
      },
      {
        name: 'Ginger',
        badge: 'Ignites Agni',
        description: 'The digestive fire starter. A thin slice before meals or warm ginger water kindles Agni.',
        image: '/images/gut2.jpg',
        alt: 'Fresh ginger used to ignite Agni in Ayurvedic gut health treatment'
      },
      {
        name: 'A2 Ghee',
        badge: 'Nourishes Tissues',
        description: 'Pure, grass-fed ghee lubricates the intestines and carries nutrients deep into tissues.',
        image: '/images/gut3.jpg',
        alt: 'A2 ghee for tissue nourishment in Ayurvedic gut health'
      },
      {
        name: 'Buttermilk',
        badge: 'Balances Flora',
        description: 'Spiced buttermilk (with cumin, salt, and coriander) is the Ayurvedic "probiotic" for gut flora.',
        image: '/images/gut4.jpg',
        alt: 'Spiced buttermilk as an Ayurvedic probiotic for gut flora balance'
      }
    ]
  },
  paa: {
    title: '4. People Also Ask (PAA) - Gut Health Dubai',
    items: [
      {
        question: 'What is Agni in Ayurveda?',
        answer: 'Agni is your digestive fire—the metabolic force that transforms food into energy, tissues, and vitality. When Agni is strong, digestion is smooth and complete. When weak, it creates Ama (toxins).'
      },
      {
        question: 'How do I know if my Agni is weak?',
        answer: 'Signs include: bloating after meals, white coating on the tongue, sluggishness, brain fog, irregular bowel movements, and feeling heavy even after light meals.'
      },
      {
        question: 'Can Ayurveda help with IBS or acid reflux?',
        answer: 'Yes. Ayurveda addresses the root cause—imbalanced Agni. By restoring digestive fire through diet, herbs, and lifestyle, symptoms like IBS, acid reflux, and constipation often resolve naturally.'
      },
      {
        question: 'What foods should I avoid for gut health in Dubai?',
        answer: 'Ice-cold drinks, heavy late-night meals, incompatible food combinations (fruit with dairy, fish with milk), and excessive raw foods in air-conditioned environments.'
      },
      {
        question: 'How long does it take to restore gut health with Ayurveda?',
        answer: 'Most people notice improvements in 2-4 weeks with consistent dietary changes. Deep healing typically takes 3-6 months as your body rebuilds digestive strength and clears accumulated toxins.'
      }
    ]
  },
  clinicalCare: {
    title: '5. Experience Clinical Digestive Care at RamaCare',
    steps: [
      {
        id: 'Step 1',
        title: 'Agni-Mapping',
        description: 'We assess your unique digestive fire type through pulse diagnosis, intake analysis, and symptom mapping to create a personalized gut health protocol.',
        icon: 'Activity'
      },
      {
        id: 'Step 2',
        title: 'Tongue Diagnosis',
        description: 'Your tongue reveals your digestive state. We examine coating, color, and texture to identify Ama buildup and organ imbalances.',
        icon: 'Eye'
      },
      {
        id: 'Step 3',
        title: 'Personalized Spicing',
        description: 'Based on your Agni type and Dubai lifestyle, we create custom spice blends and meal timing strategies to optimize your digestion.',
        icon: 'Utensils'
      }
    ]
  },
  authorityFooter: {
    title: 'The "Authority" Footer',
    description: 'Transform your energy by healing your core. Start your journey with a professional Ayurvedic Diet Plan Dubai specifically designed for gut health and Agni restoration.',
    cta: 'Book Your Digestive Assessment in Jumeirah Today'
  }
};


export default function AyurvedicGutHealthDubaiPage() {
  const { showToast, ToastComponent } = useToast();
  const [activeAccordion, setActiveAccordion] = useState(1);
  const router = useRouter();

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hello RamaCare, I'm interested in the Ayurvedic Gut Health service. Please help me book an assessment.");
    window.open(`https://wa.me/${content.hero.ctaButtons.secondary.phone}?text=${message}`, '_blank');
  };

  const handleBookAppointment = () => {
    router.push('/book-appointment');
  };

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
        "@id": "https://ramacarepolyclinic.ae/services/ayurvedic-gut-health-dubai/#webpage",
        "url": "https://ramacarepolyclinic.ae/services/ayurvedic-gut-health-dubai/",
        "name": "Ayurvedic Gut Health Dubai | Restore Agni & Better Digestion",
        "description": "Heal your gut naturally. Our DHA-licensed Ayurvedic plans in Dubai focus on restoring 'Agni' to eliminate bloating, IBS, and toxins. Visit RamaCare Polyclinic in Jumeirah 1.",
        "inLanguage": "en",
        "isPartOf": {
          "@type": "WebSite",
          "url": "https://ramacarepolyclinic.ae/",
          "name": "RamaCare Polyclinic"
        },
        "about": {
          "@type": "MedicalCondition",
          "name": "Digestive Health / Gut Health (Agni Balance)"
        },
        "lastReviewed": "2026-08-29",
        "reviewedBy": {
          "@id": "https://ramacarepolyclinic.ae/services/ayurvedic-gut-health-dubai/#physician"
        },
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ramacarepolyclinic.ae/" },
            { "@type": "ListItem", "position": 2, "name": "Ayurveda", "item": "https://ramacarepolyclinic.ae/services/ayurveda-dubai" },
            { "@type": "ListItem", "position": 3, "name": "Ayurvedic Gut Health", "item": "https://ramacarepolyclinic.ae/services/ayurvedic-gut-health-dubai/" }
          ]
        }
      },
      {
        "@type": "Physician",
        "@id": "https://ramacarepolyclinic.ae/services/ayurvedic-gut-health-dubai/#physician",
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
        "@id": "https://ramacarepolyclinic.ae/services/ayurvedic-gut-health-dubai/#faq",
        "mainEntity": faqsForSchema
      }
    ]
  };

  return (
    <Layout>
      {ToastComponent}
      <Head>
        <title key="title">Ayurvedic Gut Health Dubai | Restore Agni & Better Digestion</title>
        <meta name="description" content="Heal your gut naturally. Our DHA-licensed Ayurvedic plans in Dubai focus on restoring 'Agni' to eliminate bloating, IBS, and toxins. Visit RamaCare Polyclinic in Jumeirah 1." key="description" />
        <meta name="robots" content="index, follow" key="robots" />
        <link rel="canonical" href="https://ramacarepolyclinic.ae/services/ayurvedic-gut-health-dubai/" key="canonical" />

        {/* Open Graph Tags */}
        <meta property="og:type" content="website" key="og:type" />
        <meta property="og:title" content="Ayurvedic Gut Health Dubai | Restore Agni & Better Digestion" key="og:title" />
        <meta property="og:description" content="Heal your gut naturally. Our DHA-licensed Ayurvedic plans in Dubai focus on restoring 'Agni' to eliminate bloating, IBS, and toxins. Visit RamaCare Polyclinic in Jumeirah 1." key="og:description" />
        <meta property="og:url" content="https://ramacarepolyclinic.ae/services/ayurvedic-gut-health-dubai/" key="og:url" />
        <meta property="og:image" content="https://ramacarepolyclinic.ae/images/ayurvedic-gut-health-dubai-og.jpg" key="og:image" />
        <meta property="og:image:width" content="1200" key="og:image:width" />
        <meta property="og:image:height" content="630" key="og:image:height" />
        <meta property="og:image:alt" content="Ayurvedic Gut Health in Dubai - RamaCare Polyclinic" key="og:image:alt" />
        <meta property="og:site_name" content="RamaCare Polyclinic" key="og:site_name" />
        <meta property="og:locale" content="en_AE" key="og:locale" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content="Ayurvedic Gut Health Dubai | Restore Agni & Better Digestion" key="twitter:title" />
        <meta name="twitter:description" content="Heal your gut naturally with DHA-licensed Ayurvedic plans in Dubai focused on restoring 'Agni' and eliminating bloating, IBS, and toxins." key="twitter:description" />
        <meta name="twitter:image" content="https://ramacarepolyclinic.ae/images/ayurvedic-gut-health-dubai-og.jpg" key="twitter:image" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaGraph)
          }}
        />
      </Head>

      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#F5F1EA] to-white px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          {/* Breadcrumbs */}
          <nav className="flex flex-wrap items-center gap-y-1.5 text-xs font-semibold text-[#5F5F5F] mb-6 lowercase tracking-wider">
            <a href="/" className="hover:text-[#2D5A41] transition-colors">Home</a>
            <span className="mx-2">/</span>
            <a href="/services/ayurveda-dubai/" className="hover:text-[#2D5A41] transition-colors">Ayurveda</a>
            <span className="mx-2">/</span>
            <span className="text-gray-400">Ayurvedic gut health</span>
          </nav>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl font-bold tracking-tight text-[#1A1A1A] sm:text-5xl lg:text-6xl mb-6 leading-tight">
                {content.hero.title}
              </h1>
              <p className="text-lg text-[#5F5F5F] leading-relaxed mb-6">
                {content.hero.description1}
              </p>
              <p className="text-lg text-[#5F5F5F] leading-relaxed mb-8">
                {content.hero.description2}
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={handleBookAppointment}
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#2D5A41] hover:bg-[#234733] transition-colors shadow-sm"
                >
                  <LucideIcons.Calendar className="w-5 h-5 mr-2" />
                  {content.hero.ctaButtons.primary.text}
                </button>
                <button
                  onClick={handleWhatsAppClick}
                  className="inline-flex items-center justify-center px-6 py-3 border border-[#2D5A41] text-base font-medium rounded-md text-[#2D5A41] bg-white hover:bg-gray-50 transition-colors shadow-sm"
                >
                  <LucideIcons.MessageCircle className="w-5 h-5 mr-2" />
                  {content.hero.ctaButtons.secondary.text}
                </button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={content.hero.image}
                alt="Ayurvedic herbs and spices for gut health"
                className="w-full h-[500px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Summary Section */}
      <section className="bg-[#E9E2D6] py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-6">
            {content.summary.title}
          </h2>
          <p className="text-lg text-[#5F5F5F] leading-relaxed">
            <span className="font-bold text-[#1A1A1A]">{content.summary.question}</span> {content.summary.answer}
          </p>
        </div>
      </section>

      {/* 3. Dubai Gut Syndrome Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] text-center mb-12">
            {content.dubaiGut.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {content.dubaiGut.items.map((item, index) => {
              const IconComponent = LucideIcons[item.icon];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-[#F0F7F4] rounded-xl flex items-center justify-center mb-6">
                    <IconComponent className="w-6 h-6 text-[#2D5A41]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. 4 Types of Agni Section */}
      <section className="bg-[#F5F1EA] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] text-center mb-12">
            {content.agniTypes.title}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {content.agniTypes.items.map((item, index) => {
              const IconComponent = LucideIcons[item.icon];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`${item.color} p-8 rounded-2xl text-center flex flex-col items-center border border-transparent hover:border-gray-200 transition-all`}
                >
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm">
                    <IconComponent className={`w-6 h-6 ${item.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-1">{item.name}</h3>
                  <p className="text-sm font-medium text-gray-500 mb-4">{item.subtitle}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Kitchen Pharmacy Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] text-center mb-16">
            {content.kitchenPharmacy.title}
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {content.kitchenPharmacy.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-[#E9E2D6]"
              >
                <div className="h-48 overflow-hidden">
                  <img src={item.image} alt={item.alt || item.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-[#1A1A1A]">{item.name}</h3>
                    <span className="text-xs font-bold px-3 py-1 bg-[#1F5E4B] text-white rounded-full">
                      {item.badge}
                    </span>
                  </div>
                  <p className="text-[#5F5F5F] text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PAA Section */}
      <section className="bg-[#F5F1EA] py-20 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] text-center mb-12">
            {content.paa.title}
          </h2>
          
          <div className="space-y-4 mt-12">
            {content.paa.items.map((item, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100"
              >
                <button
                  onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-bold text-[#1A1A1A]">{item.question}</span>
                  <LucideIcons.ChevronDown 
                    className={`w-5 h-5 text-gray-400 transition-transform ${activeAccordion === index ? 'rotate-180' : ''}`} 
                  />
                </button>
                {activeAccordion === index && (
                  <div className="px-6 pb-5">
                    <p className="text-gray-600 leading-relaxed text-sm">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Floating Action Button */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="hidden lg:block fixed top-1/2 right-8 -translate-y-1/2 z-40"
          >
            <button 
              onClick={handleWhatsAppClick}
              className="bg-[#2D5A41] text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105 font-bold text-sm">
              Save Your Agni Score
            </button>
          </motion.div>
        </div>
      </section>

      {/* 7. Clinical Digestive Care Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] text-center mb-16">
            {content.clinicalCare.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-12 mt-12">
            {content.clinicalCare.steps.map((step, index) => {
              const IconComponent = LucideIcons[step.icon];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative bg-white p-8 rounded-2xl border-2 border-[#1A5F3F] shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="absolute -top-4 left-6 bg-[#1A5F3F] text-white px-4 py-1 rounded-full text-xs font-bold">
                    {step.id}
                  </div>
                  <div className="w-12 h-12 bg-[#F0F7F4] rounded-full flex items-center justify-center mb-6 mt-2">
                    <IconComponent className="w-6 h-6 text-[#1A5F3F]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>


      {/* 8. Authority Footer Section */}
      <section className="bg-[#1A5F3F] py-20 px-6 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {content.authorityFooter.title}
          </h2>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-10 max-w-3xl mx-auto">
            {content.authorityFooter.description}
          </p>
          <button
            onClick={handleBookAppointment}
            className="bg-white text-[#1A5F3F] px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all shadow-xl transform hover:scale-105 flex items-center justify-center mx-auto"
          >
            <LucideIcons.Calendar className="w-6 h-6 mr-3" />
            {content.authorityFooter.cta}
          </button>
        </div>
      </section>

      {/* Reviewer Section */}
      <ContentReviewBadge doctorName="Dr. Shamna Keloth Meethal" pageSlug="ayurvedic-gut-health-dubai" />


      {/* Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#E9E2D6] shadow-lg z-40 p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="hidden md:block">
            <p className="text-sm font-bold text-[#1A1A1A]">Ready to restore your Agni?</p>
            <p className="text-xs text-[#5F5F5F]">Book your digestive assessment today</p>
          </div>
          <button
            onClick={handleBookAppointment}
            className="flex items-center gap-2 bg-[#1F5E4B] text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all font-bold whitespace-nowrap"
          >
            <LucideIcons.Calendar className="w-5 h-5" />
            Book Assessment
          </button>
        </div>
      </div>


      {/* WhatsApp Floating Button */}
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg hover:shadow-xl transition-shadow"
      >
        <LucideIcons.MessageCircle className="w-8 h-8 text-white" />
      </button>

    </Layout>
  );
}
