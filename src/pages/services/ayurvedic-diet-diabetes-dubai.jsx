import React, { useState } from 'react';
import Layout from '../../../components/Layout';
import Head from "next/head";
import Image from 'next/image';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { useToast } from '../../../components/Toast';
import ContentReviewBadge from '../../../components/ContentReviewBadge';

const content = {
  hero: {
    badge: 'Ayurvedic Diet for Diabetes',
    title: 'Ayurvedic Diet for Diabetes in Dubai: A Clinical Path to Blood Sugar Balance',
    description: 'Managing Type 2 Diabetes or Prediabetes while living in a high-convenience environment like Dubai can be challenging. An Ayurvedic Diet for Diabetes in Dubai is not just about "cutting sugar"; it is about reviving your body\'s metabolic intelligence to process glucose effectively.',
    summary: {
      title: 'The "Answer-First" Summary for Diabetes Management',
      content: 'Can Ayurveda help manage Diabetes in the UAE? <strong className="text-[#1F5E4B]">Yes.</strong> Ayurveda classifies diabetes as Madhumeha. By focusing on a "Kapha-reducing" diet—incorporating bitter herbs (Amla, Karela), low-glycemic ancient grains, and strictly timed meals—residents in Dubai can significantly improve their HbA1c levels and reduce insulin resistance within 90 days of clinical adherence.'
    },
    ctaButtons: {
      primary: {
        text: 'Book Your Glucose Assessment',
        icon: 'Calendar'
      },
      secondary: {
        text: 'WhatsApp Consultation',
        phone: '+971 56 659 7878'
      }
    },
    image: {
      src: '/images/diab.jpg',
      alt: 'Ayurvedic diabetes diet in Dubai'
    },
    stats: {
      title: 'BLOOD SUGAR IMPROVEMENT',
      before: { label: 'Before', value: '180 mg/dL' },
      after: { label: 'After 90 Days', value: '110 mg/dL' },
      note: '*Disclaimer: Individual results may vary. This program complements but does not replace standard medical care or prescribed treatments.'
    }
  },
  environmentalChallenges: {
    title: '1. The "Dubai Diabetes" Factor: Environmental Challenges',
    items: [
      {
        id: 1,
        title: 'Sedentary Lifestyle',
        icon: 'Car',
        description: 'The reliance on cars and the lack of "incidental walking" in Dubai leads to stagnant Kapha, which is the root cause of metabolic slowdown.'
      },
      {
        id: 2,
        title: 'The "Desert Thirst"',
        icon: 'Coffee',
        description: 'Many residents mistake thirst for hunger, leading to overeating. Furthermore, drinking sugary "fresh" juices common in Dubai cafes causes dangerous glucose spikes.'
      },
      {
        id: 3,
        title: 'High-Stress Work Culture',
        icon: 'Briefcase',
        description: 'Stress triggers cortisol, which directly opposes insulin, making diabetes management harder for those in DIFC or Business Bay.'
      }
    ]
  },
  dietaryPillars: {
    title: '2. Dietary Pillars for Blood Sugar Control',
    subtitle: 'Managing blood sugar effectively starts with understanding Low-Glycemic Load (GL) — a core principle in Ayurvedic dietary planning.',
    bannerImage: '/images/diab1.jpg',
    favor: {
      title: 'Foods to Favor',
      description: 'The "Sugar-Balance" List - These are easily accessible at Organic Foods & Café or Spinneys:',
      items: [
        {
          title: 'The "Diamond" Grain: Barley (Yava)',
          description: 'Ayurveda considers barley the premier grain for diabetics because it is "scraping" in nature, helping to clear excess fat and sugar from the channels.'
        },
        {
          title: 'Bitter Power',
          description: 'Incorporating bitter gourd (Karela), fenugreek leaves, and turmeric. Bitterness is the natural antagonist to the "sweetness" of diabetes.'
        },
        {
          title: 'Protein-First',
          description: 'Moong dal and chickpeas provide the fiber necessary to slow down sugar absorption.'
        }
      ]
    },
    avoid: {
      title: 'Foods to Avoid',
      items: [
        {
          title: 'Deep-Fried Arabic Sweets',
          description: 'High in both trans-fats and refined sugar, these are "Agni" killers.'
        },
        {
          title: 'Sweet Tropical Fruits',
          description: 'While "natural," excessive consumption of high-sugar dates or mangoes can hinder progress. Limit these to small morning portions.'
        },
        {
          title: 'Heavy Evening Meals',
          description: 'Digestion is weakest at night. A heavy dinner in Dubai is the fastest way to wake up with high fasting blood sugar.'
        }
      ]
    }
  },
  
  glucoseProtocol: {
    title: '3. The 3-Step Ayurvedic "Glucose Protocol"',
    steps: [
      {
        id: 1,
        title: 'Step 1',
        subtitle: 'Ushapan (Early Morning)',
        description: 'Drinking copper-charged water with crushed Jamun (Indian Blackberry) seed powder or cinnamon.',
        icon: 'Sunrise'
      },
      {
        id: 2,
        title: 'Step 2',
        subtitle: 'Laghubhojana (Light Eating)',
        description: 'Ensuring the largest meal is at noon when the sun (and your internal fire) is at its peak.',
        icon: 'Sun'
      },
      {
        id: 3,
        title: 'Step 3',
        subtitle: 'Triphala Integration',
        description: 'Taking Triphala at night to ensure healthy bowel movements, which is essential for clearing metabolic waste (Ama).',
        icon: 'Moon'
      }
    ]
  },
  faqs: {
    title: '4. People Also Ask (PAA) - Diabetes Dubai',
    subtitle: 'Common questions about Ayurvedic diabetes management in Dubai',
    items: [
      {
        question: 'Can Ayurveda cure Type 2 Diabetes?',
        answer: 'Ayurveda does not "cure" diabetes in the conventional sense, but it can significantly manage and even reverse insulin resistance when combined with lifestyle and dietary changes. The goal is to restore metabolic balance (Agni) and reduce Kapha accumulation.'
      },
      {
        question: 'Is an Ayurvedic diet safe alongside my current diabetes medication?',
        answer: 'Yes, an Ayurvedic diet can complement modern diabetes treatment. However, it is crucial to work with both your endocrinologist and Ayurvedic practitioner to monitor your blood sugar levels and adjust medications as needed. Never stop prescribed medication without medical supervision.'
      },
      {
        question: 'How long does it take to see results with an Ayurvedic diet for diabetes?',
        answer: 'Most patients begin to see improvements in their fasting blood sugar within 2-4 weeks of strict adherence. HbA1c levels typically show significant improvement within 90 days. However, results vary based on individual constitution (Prakriti) and level of compliance.'
      },
      {
        question: 'What is the best time to eat for diabetes management in Ayurveda?',
        answer: 'Ayurveda emphasizes eating your largest meal at midday (12-1 PM) when your digestive fire (Agni) is strongest. Breakfast should be light, and dinner should be the smallest meal, preferably before 7 PM to allow proper digestion before sleep.'
      },
      {
        question: 'Can I find Ayurvedic herbs in Dubai?',
        answer: 'Yes! Many Ayurvedic herbs like turmeric, fenugreek, cinnamon, and bitter gourd are readily available at stores like Organic Foods & Café, Spinneys, and specialized Indian grocery stores. For therapeutic-grade herbs, consult with an Ayurvedic clinic.'
      },
      {
        question: 'Do I need to follow a strict vegetarian diet for diabetes management?',
        answer: 'While Ayurveda often recommends a plant-based diet for Kapha-related conditions like diabetes, it is not mandatory to be strictly vegetarian. The focus is on light, easily digestible proteins like moong dal, fish, and chicken, while avoiding heavy red meats and fried foods.'
      }
    ]
  },
  whyChoose: {
    title: '5. Why Choose RamaCare Polyclinic for Diabetes?',
    subtitle: "As a premier Polyclinic in Jumeirah 1, we don't just provide a PDF diet plan. We offer:",
    features: [
      {
        title: 'Prakriti Analysis',
        description: 'Understanding if your diabetes is Vata, Pitta, or Kapha dominant.',
        icon: 'UserRound'
      },
      {
        title: 'DHA-Licensed Expertise',
        description: 'Professional medical oversight for your safety.',
        icon: 'Shield'
      },
      {
        title: 'Integrative Monitoring',
        description: 'We encourage you to bring your latest blood reports so we can track your HbA1c progress together.',
        icon: 'TrendingUp'
      }
    ],
    trustBadges: [
      { label: 'Licensed by', value: 'DHA Dubai', icon: 'Shield' },
      { label: 'Certified', value: 'Ayurvedic Specialists', icon: 'Award' },
      { label: 'Trusted by', value: '500+ Patients', icon: 'Users' }
    ]
  },
  finalCTA: {
    badge: 'EXCLUSIVE OFFER',
    title: 'Still Thinking?',
    description: "We understand that starting a new health journey can feel overwhelming. That's why we're offering a FREE glucose consultation to help you take the first step.",
    stats: [
      { label: 'Limited Slots This Week', value: 'Only 5 consultation slots remaining this month', icon: 'Clock' },
      { label: 'Proven Results', value: 'Significant HbA1c improvement observed within 90 days*', icon: 'TrendingUp' }
    ],
    graph: {
      title: 'Average Patient HbA1c Improvement',
      before: { label: 'Before Treatment', value: '8.5%' },
      after: { label: 'After Treatment', value: '6.0%' },
      duration: 'After 90 Days'
    },
    buttonText: 'Claim Your Free Consultation'
  },
  bookingForm: {
    title: 'Ready to Take Control of Your Metabolic Health?',
    description: 'If you are ready to take control of your metabolic health, start with a professional Ayurvedic Diet Plan Dubai. Our targeted diabetes programs are designed for the unique lifestyle of the UAE resident.',
    formTitle: 'Book Your Glucose Assessment in Jumeirah Today',
    fields: {
      name: 'Full Name *',
      phone: 'Phone Number *',
      email: 'Email Address *',
      time: 'Preferred Time'
    },
    buttons: {
      confirm: 'Confirm Appointment',
      whatsapp: 'WhatsApp Instantly'
    }
  }
};

export default function AyurvedicDietDiabetesPage() {
  const { showToast, ToastComponent } = useToast();
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [showFloatingBar, setShowFloatingBar] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    time: ''
  });

  const faqsForSchema = content.faqs.items.map(faq => ({
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
        "@id": "https://ramacarepolyclinic.ae/services/ayurvedic-diet-diabetes-dubai/#webpage",
        "url": "https://ramacarepolyclinic.ae/services/ayurvedic-diet-diabetes-dubai/",
        "name": "Ayurvedic Diet for Diabetes Dubai | Natural Blood Sugar Control",
        "description": "Manage Type 2 Diabetes and Prediabetes naturally. Our DHA-licensed Ayurvedic diet plans in Dubai focus on insulin sensitivity and glucose balance through ancient wisdom.",
        "inLanguage": "en",
        "isPartOf": {
          "@type": "WebSite",
          "url": "https://ramacarepolyclinic.ae/",
          "name": "RamaCare Polyclinic"
        },
        "about": {
          "@type": "MedicalCondition",
          "name": "Type 2 Diabetes / Prediabetes (Madhumeha)"
        },
        "lastReviewed": "2026-08-29",
        "reviewedBy": {
          "@id": "https://ramacarepolyclinic.ae/services/ayurvedic-diet-diabetes-dubai/#physician"
        },
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ramacarepolyclinic.ae/" },
            { "@type": "ListItem", "position": 2, "name": "Ayurveda", "item": "https://ramacarepolyclinic.ae/services/ayurveda-dubai/" },
            { "@type": "ListItem", "position": 3, "name": "Ayurvedic Diet for Diabetes", "item": "https://ramacarepolyclinic.ae/services/ayurvedic-diet-diabetes-dubai/" }
          ]
        }
      },
      {
        "@type": "Physician",
        "@id": "https://ramacarepolyclinic.ae/services/ayurvedic-diet-diabetes-dubai/#physician",
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
        "@id": "https://ramacarepolyclinic.ae/services/ayurvedic-diet-diabetes-dubai/#faq",
        "mainEntity": faqsForSchema
      }
    ]
  };

  const scrollToForm = () => {
    const formElement = document.getElementById('booking-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.email) {
      showToast('Please fill in all required fields (Name, Phone, and Email).', 'error');
      return;
    }
    
    try {
      const response = await fetch('/api/appointment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.name,
          phone: formData.phone,
          email: formData.email,
          preferredTime: formData.time,
          source: 'ayurvedic-diet-diabetes-dubai'
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        showToast('Appointment request submitted successfully!', 'success');
        setFormData({
          name: '',
          phone: '',
          email: '',
          time: ''
        });
      } else {
        showToast(result.message || 'Failed to submit appointment. Please try again.', 'error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      showToast('An error occurred. Please try again later.', 'error');
    }
  };

  return (
    <Layout>
      {ToastComponent}
      <Head>
        <title key="title">Ayurvedic Diet for Diabetes Dubai | Natural Blood Sugar Control</title>
        <meta name="description" content="Manage Type 2 Diabetes and Prediabetes naturally. Our DHA-licensed Ayurvedic diet plans in Dubai focus on insulin sensitivity and glucose balance through ancient wisdom. Book at RamaCare Jumeirah." key="description" />
        <meta name="robots" content="index, follow" key="robots" />
        <link rel="canonical" href="https://ramacarepolyclinic.ae/services/ayurvedic-diet-diabetes-dubai/" key="canonical" />

        {/* Open Graph Tags */}
        <meta property="og:type" content="website" key="og:type" />
        <meta property="og:title" content="Ayurvedic Diet for Diabetes Dubai | Natural Blood Sugar Control" key="og:title" />
        <meta property="og:description" content="Manage Type 2 Diabetes and Prediabetes naturally. Our DHA-licensed Ayurvedic diet plans in Dubai focus on insulin sensitivity and glucose balance through ancient wisdom. Book at RamaCare Jumeirah." key="og:description" />
        <meta property="og:url" content="https://ramacarepolyclinic.ae/services/ayurvedic-diet-diabetes-dubai/" key="og:url" />
        <meta property="og:image" content="https://ramacarepolyclinic.ae/images/diab.jpg" key="og:image" />
        <meta property="og:image:width" content="1200" key="og:image:width" />
        <meta property="og:image:height" content="630" key="og:image:height" />
        <meta property="og:site_name" content="RamaCare Polyclinic" key="og:site_name" />
        <meta property="og:locale" content="en_AE" key="og:locale" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content="Ayurvedic Diet for Diabetes Dubai | Natural Blood Sugar Control" key="twitter:title" />
        <meta name="twitter:description" content="Manage Type 2 Diabetes and Prediabetes naturally with DHA-licensed Ayurvedic diet plans at RamaCare Polyclinic Dubai." key="twitter:description" />
        <meta name="twitter:image" content="https://ramacarepolyclinic.ae/images/diab.jpg" key="twitter:image" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaGraph)
          }}
        />
      </Head>

      {/* Top Info Bar */}
      <div className="bg-[#1F5E4B] text-white py-2 px-4">
        <div className="container mx-auto max-w-7xl flex items-center justify-center gap-2 text-sm font-medium">
          <LucideIcons.ShieldCheck size={16} />
          <span>Trusted Diabetes Care in Jumeirah 1 | DHA Licensed</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#F5F1EA] py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          {/* Breadcrumbs */}
          <nav className="flex flex-wrap items-center gap-y-1.5 text-xs font-semibold text-[#5F5F5F] mb-6 tracking-wider">
            <a href="/" className="hover:text-[#1F5E4B] transition-colors">Home</a>
            <span className="mx-2">/</span>
            <a href="/services/ayurveda-dubai/" className="hover:text-[#1F5E4B] transition-colors">Ayurveda</a>
            <span className="mx-2">/</span>
            <span className="text-gray-400">Ayurvedic Diet for Diabetes</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col"
            >
              <h1 className="text-4xl font-semibold md:text-5xl lg:text-6xl mb-6 text-[#1A1A1A] leading-tight">
                {content.hero.title}
              </h1>
              <p className="text-base md:text-lg text-[#5F5F5F] leading-relaxed mb-8">
                {content.hero.description}
              </p>

              {content.hero.summary && (
                <div className="bg-[#E9E2D6] p-6 rounded-lg mb-8 border-l-4 border-[#1F5E4B] flex flex-col gap-4">
                  <div className="space-y-2">
                    <h3 className="text-xl md:text-2xl font-bold text-[#1F5E4B]">
                      {content.hero.summary.title}
                    </h3>
                    <div className="text-lg font-bold text-[#1A1A1A]">
                      {content.hero.badge}
                    </div>
                  </div>
                  <p 
                    className="text-[#1A1A1A] leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: content.hero.summary.content }}
                  />
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={scrollToForm}
                  className="bg-[#1F5E4B] text-white px-8 py-4 rounded-lg hover:bg-[#164435] transition-all flex items-center justify-center gap-2 shadow-lg font-bold text-base"
                >
                  <LucideIcons.Calendar size={20} />
                  {content.hero.ctaButtons.primary.text}
                </button>
                <a target="_blank" rel="nofollow noopener noreferrer" 
                  href={`https://wa.me/${content.hero.ctaButtons.secondary.phone.replace(/[\s+]/g, '')}`}
                  className="bg-white text-[#1F5E4B] px-8 py-4 rounded-lg hover:bg-gray-50 transition-all flex items-center justify-center gap-2 border-2 border-[#1F5E4B] font-bold text-base shadow-sm"
                >
                  <LucideIcons.MessageCircle size={20} />
                  {content.hero.ctaButtons.secondary.text}
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative aspect-square rounded-[32px] overflow-hidden shadow-2xl">
                <Image
                  src={content.hero.image.src}
                  alt={content.hero.image.alt}
                  fill
                  className="object-cover"
                  priority
                />
                
                {/* Blood Sugar Improvement Card Overlay */}
                <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm p-6 rounded-lg shadow-xl">
                  <h4 className="text-sm font-bold text-[#1F5E4B] tracking-wider mb-3 uppercase">
                    {content.hero.stats.title}
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <p className="text-xs text-gray-500 font-medium">{content.hero.stats.before.label}</p>
                      <div className="bg-red-100 h-16 rounded flex items-end justify-center pb-2">
                        <span className="text-sm  text-[#1A1A1A]">
                          {content.hero.stats.before.value}
                        </span>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs text-gray-500 font-medium">{content.hero.stats.after.label}</p>
                      <div className="bg-emerald-100 h-16 rounded flex items-end justify-center pb-2">
                        <span className="text-sm  text-[#1A1A1A]">
                          {content.hero.stats.after.value}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="mt-2 text-[12px] text-gray-400">
                    {content.hero.stats.note}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 1: Environmental Challenges */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-12 text-center md:text-left"
          >
            {content.environmentalChallenges.title}
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {content.environmentalChallenges.items.map((item, index) => {
              const Icon = LucideIcons[item.icon] || LucideIcons.Activity;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-[#F5F1EA] p-8 rounded-2xl flex flex-col hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-[#1F5E4B] rounded-xl flex items-center justify-center text-white shadow-lg mb-8">
                    <Icon size={28} />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">{item.title}</h3>
                    <p className="text-[#5F5F5F] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 2: Dietary Pillars */}
      <section className="py-16 md:py-24 bg-[#F5F1EA]">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4"
            >
              {content.dietaryPillars.title}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#5F5F5F] text-lg leading-relaxed"
            >
              {content.dietaryPillars.subtitle}
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-64 md:h-96 rounded-3xl overflow-hidden mb-12 shadow-xl"
          >
            <Image 
              src={content.dietaryPillars.bannerImage}
              alt="Dietary Pillars for Diabetes"
              fill
              className="object-cover"
            />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Foods to Favor */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 border border-emerald-100">
                  <LucideIcons.CheckCircle2 size={24} />
                </div>
                <h3 className="text-2xl font-bold text-[#1A1A1A]">{content.dietaryPillars.favor.title}</h3>
              </div>
              <p className="text-[#5F5F5F] italic mb-8 text-sm leading-relaxed">
                {content.dietaryPillars.favor.description}
              </p>
              <div className="space-y-8">
                {content.dietaryPillars.favor.items.map((item, idx) => (
                  <div key={idx} className="border-l-2 border-[#1F5E4B] pl-6 py-1">
                    <h4 className="font-bold text-[#1A1A1A] mb-2">{item.title}</h4>
                    <p className="text-sm text-[#5F5F5F] leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Foods to Avoid */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-rose-50 flex items-center justify-center text-rose-600 border border-rose-100">
                  <LucideIcons.XCircle size={24} />
                </div>
                <h3 className="text-2xl font-bold text-[#1A1A1A]">{content.dietaryPillars.avoid.title}</h3>
              </div>
              <div className="space-y-8 mt-12">
                {content.dietaryPillars.avoid.items.map((item, idx) => (
                  <div key={idx} className="border-l-2 border-rose-600 pl-6 py-1">
                    <h4 className="font-bold text-[#1A1A1A] mb-2">{item.title}</h4>
                    <p className="text-sm text-[#5F5F5F] leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3: Glucose Protocol */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-12 text-center md:text-left"
          >
            {content.glucoseProtocol.title}
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6 relative">
            {content.glucoseProtocol.steps.map((step, index) => {
              const Icon = LucideIcons[step.icon] || LucideIcons.Activity;
              return (
                <React.Fragment key={step.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-[#F5F1EA] p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border border-[#E9E2D6] flex flex-col items-start gap-6"
                  >
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center shadow-sm ${
                      index === 0 ? 'bg-orange-50 text-orange-500' :
                      index === 1 ? 'bg-yellow-50 text-yellow-500' :
                      'bg-blue-50 text-blue-500'
                    }`}>
                      <Icon size={28} />
                    </div>
                    <div className="space-y-4">
                      <div>
                        <span className="text-[#1F5E4B] font-bold text-lg block mb-1">{step.title}</span>
                        <h3 className="text-xl font-bold text-[#1A1A1A]">{step.subtitle}</h3>
                      </div>
                      <p className="text-[#5F5F5F] leading-relaxed text-sm">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                  {index < content.glucoseProtocol.steps.length - 1 && (
                    <div className="hidden lg:flex items-center justify-center text-[#1F5E4B]/30 absolute top-1/2 -translate-y-1/2" style={{ left: `${(index + 1) * 33.33 - 2}%` }}>
                      <LucideIcons.ArrowRight size={32} />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 4: People Also Ask */}
      <section className="py-16 md:py-24 bg-[#F5F1EA]">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
          <div className="text-center md:text-left mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4"
            >
              {content.faqs.title}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#5F5F5F] text-lg"
            >
              {content.faqs.subtitle}
            </motion.p>
          </div>

          <div className="space-y-4">
            {content.faqs.items.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-xl shadow-sm overflow-hidden border border-white"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? -1 : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-bold text-[#1A1A1A] pr-8">{faq.question}</span>
                  <div className={`transition-transform duration-300 ${openFaqIndex === index ? 'rotate-180' : ''}`}>
                    <LucideIcons.ChevronDown className="text-[#1F5E4B]" size={20} />
                  </div>
                </button>
                <motion.div
                  initial={false}
                  animate={{ 
                    height: openFaqIndex === index ? 'auto' : 0,
                    opacity: openFaqIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 text-[#5F5F5F] leading-relaxed text-sm bg-gray-50/50">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Why Choose RamaCare */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4"
            >
              {content.whyChoose.title}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#5F5F5F] text-lg max-w-2xl mx-auto"
            >
              {content.whyChoose.subtitle}
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 mb-20">
            {content.whyChoose.features.map((feature, idx) => {
              const Icon = LucideIcons[feature.icon] || LucideIcons.Activity;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="text-center flex flex-col items-center"
                >
                  <div className="w-16 h-16 bg-[#1F5E4B] text-white rounded-full flex items-center justify-center mb-6 shadow-lg">
                    <Icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">{feature.title}</h3>
                  <p className="text-[#5F5F5F] text-sm leading-relaxed max-w-xs">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 pt-8 border-t border-gray-100">
            {content.whyChoose.trustBadges.map((badge, idx) => {
              const Icon = LucideIcons[badge.icon] || LucideIcons.CheckCircle;
              return (
                <div key={idx} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#F5F1EA] rounded-full flex items-center justify-center text-[#1F5E4B]">
                    <Icon size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-[#5F5F5F] uppercase font-bold tracking-wider">{badge.label}</p>
                    <p className="font-bold text-[#1A1A1A]">{badge.value}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA Section: Still Thinking? */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#1F5E4B] to-[#164435] text-white overflow-hidden relative">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <div className="space-y-4">
                <span className="inline-block px-4 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-bold tracking-widest uppercase border border-white/20">
                  {content.finalCTA.badge}
                </span>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                  {content.finalCTA.title}
                </h2>
                <p className="text-white/80 text-lg leading-relaxed max-w-xl">
                  {content.finalCTA.description}
                </p>
              </div>

              <div className="space-y-6">
                {content.finalCTA.stats.map((stat, idx) => {
                  const Icon = LucideIcons[stat.icon] || LucideIcons.Info;
                  return (
                    <div key={idx} className="flex items-start gap-4 group">
                      <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white shrink-0 group-hover:bg-white group-hover:text-[#1F5E4B] transition-colors">
                        <Icon size={20} />
                      </div>
                      <div>
                        <p className="font-bold text-white text-base">{stat.label}</p>
                        <p className="text-white/60 text-sm">{stat.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <button 
                onClick={scrollToForm}
                className="bg-white text-[#1F5E4B] px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all shadow-xl"
              >
                {content.finalCTA.buttonText}
              </button>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20 shadow-2xl"
            >
              <h3 className="text-xl font-bold mb-10 text-center">{content.finalCTA.graph.title}</h3>
              
              <div className="space-y-12">
                <div className="space-y-3">
                  <div className="flex justify-between items-end">
                    <span className="text-sm font-medium text-white/80">{content.finalCTA.graph.before.label}</span>
                    <span className="text-xl font-bold">{content.finalCTA.graph.before.value}</span>
                  </div>
                  <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '85%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-rose-400 rounded-full shadow-[0_0_20px_rgba(251,113,133,0.5)]"
                    />
                  </div>
                </div>

                <div className="flex justify-center relative">
                  <div className="bg-white/10 px-4 py-1.5 rounded-full text-xs font-bold border border-white/10">
                    {content.finalCTA.graph.duration}
                  </div>
                  <div className="absolute top-1/2 left-0 right-0 h-px bg-white/10 -z-10" />
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-end">
                    <span className="text-sm font-medium text-white/80">{content.finalCTA.graph.after.label}</span>
                    <span className="text-xl font-bold text-emerald-400">{content.finalCTA.graph.after.value}</span>
                  </div>
                  <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '60%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 1 }}
                      className="h-full bg-emerald-400 rounded-full shadow-[0_0_20px_rgba(52,211,153,0.5)]"
                    />
                  </div>
                </div>
              </div>

              <p className="mt-10 text-[11px] text-center text-white/40 italic">
                *Based on clinical observations of patient compliance at RamaCare Polyclinic. Individual results may vary.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 6: Booking Form Section */}
      <section id="booking-form" className="py-16 md:py-24 bg-[#1F5E4B] text-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl mb-6"
            >
              {content.bookingForm.title}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-lg text-white/90 leading-relaxed max-w-3xl mx-auto"
            >
              If you are ready to take control of your metabolic health, start with a professional <strong className="text-white">Ayurvedic Diet Plan Dubai</strong>. Our targeted diabetes programs are designed for the unique lifestyle of the UAE resident.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-2xl"
          >
            <h3 className="text-2xl mb-6 text-[#1A1A1A] text-center">
              {content.bookingForm.formTitle}
            </h3>

            <form className="space-y-6" onSubmit={handleFormSubmit}>
              <div>
                <label className="block text-[#1A1A1A] mb-2">{content.bookingForm.fields.name}</label>
                <input 
                  type="text" 
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#1F5E4B] focus:ring-2 focus:ring-[#1F5E4B]/20 outline-none transition-all text-[#1A1A1A]"
                  required
                />
              </div>

              <div>
                <label className="block text-[#1A1A1A] mb-2">{content.bookingForm.fields.phone}</label>
                <input 
                  type="tel" 
                  placeholder="+971 XX XXX XXXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#1F5E4B] focus:ring-2 focus:ring-[#1F5E4B]/20 outline-none transition-all text-[#1A1A1A]"
                  required
                />
              </div>

              <div>
                <label className="block text-[#1A1A1A] mb-2">{content.bookingForm.fields.email}</label>
                <input 
                  type="email" 
                  placeholder="yourname@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#1F5E4B] focus:ring-2 focus:ring-[#1F5E4B]/20 outline-none transition-all text-[#1A1A1A]"
                  required
                />
              </div>

              <div>
                <label className="block text-[#1A1A1A] mb-2">{content.bookingForm.fields.time}</label>
                <select 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#1F5E4B] focus:ring-2 focus:ring-[#1F5E4B]/20 outline-none transition-all text-[#1A1A1A] bg-white appearance-none cursor-pointer"
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                >
                  <option value="">Select a time slot</option>
                  <option value="morning">Morning (9 AM - 12 PM)</option>
                  <option value="afternoon">Afternoon (12 PM - 4 PM)</option>
                  <option value="evening">Evening (4 PM - 8 PM)</option>
                </select>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                <button 
                  type="submit"
                  className="bg-[#1F5E4B] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#164435] transition-all flex items-center justify-center gap-2 shadow-lg"
                >
                  <LucideIcons.CalendarCheck size={20} />
                  {content.bookingForm.buttons.confirm}
                </button>
                <a 
                  href={`https://wa.me/${content.hero.ctaButtons.secondary.phone.replace(/[\s+]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="bg-[#00B853] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#009E47] transition-all flex items-center justify-center gap-2 shadow-lg"
                >
                  <LucideIcons.MessageCircle size={20} />
                  {content.bookingForm.buttons.whatsapp}
                </a>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Related Reading */}
      <section className="bg-white py-16 md:py-24 border-t border-[#E9E2D6]/40">
        <div className="container mx-auto px-6 text-center max-w-5xl">
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

      <ContentReviewBadge doctorName="Dr. Shamna Keloth Meethal" pageSlug="ayurvedic-diet-diabetes-dubai" />

      {/* Floating Bottom Bar */}
      {showFloatingBar && (
        <motion.div 
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-[#1F5E4B] to-[#164435] text-white py-4 px-4 z-50 shadow-[0_-4px_20px_rgba(0,0,0,0.3)] border-t border-white/10"
        >
          <div className="container mx-auto max-w-7xl flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="hidden sm:flex w-8 h-8 bg-white/10 rounded-full items-center justify-center text-emerald-400 animate-pulse">
                <LucideIcons.Clock size={16} />
              </div>
              <p className="text-xs sm:text-sm font-medium tracking-wide">
                <span className="font-bold text-emerald-400">Limited Slots Available:</span> Book your glucose assessment today
              </p>
            </div>
            
            <div className="flex items-center gap-2">
              <button 
                onClick={scrollToForm}
                className="bg-white text-[#1F5E4B] px-6 py-3 rounded-lg font-bold text-sm hover:bg-gray-100 transition-all flex items-center gap-2 shadow-lg"
              >
                <LucideIcons.Calendar size={18} />
                Book Now
              </button>
              <button 
                onClick={() => setShowFloatingBar(false)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors text-white/40 hover:text-white"
              >
                <LucideIcons.X size={20} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </Layout>
  );
}
