import React, { useState } from 'react';
import Layout from '../../../components/Layout';
import Head from "next/head";
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import ContentReviewBadge from '../../../components/ContentReviewBadge';
import AyurvedaInfoSection from '../../../components/AyurvedaInfoSection';

const content = {
  hero: {
    badge: 'Ayurvedic Diet for Thyroid',
    title: 'Ayurvedic Diet for Thyroid in Dubai: What to Eat and How to Take Your Medicine',
    description: 'Thyroid problems such as an underactive thyroid (hypothyroidism) are common in the UAE, often bringing tiredness, weight gain, feeling cold and thinning hair. Diet cannot replace thyroid medicine, but it supports how you feel and how well your medicine works. This guide from RamaCare Polyclinic in Jumeirah 1 combines medical guidance with Ayurvedic advice, reviewed by Dr. Shamna Keloth Meethal (BAMS), with thyroid care from our GP in the same building.',
    summary: {
      title: 'Can Diet Help Thyroid Problems?',
      content: 'Yes, as support. The most important rule is timing: take your thyroid tablet (levothyroxine) with water on an empty stomach, 30–60 minutes before breakfast, and keep soy, coffee and high-fibre foods away from it, and calcium or iron about four hours apart. Beyond that, eat a balanced diet with enough iodine (iodised salt, dairy, eggs, fish) and selenium from food. Ayurveda sees an underactive thyroid as a Kapha and weak-digestion (Agni) imbalance and favours warm, cooked, lightly spiced meals. Never change your medicine without your doctor.'
    },
    ctaButtons: {
      primary: {
        text: 'Book Thyroid Consultation',
        icon: 'calendar',
        link: '/book-appointment/'
      },
      secondary: {
        text: 'WhatsApp Consultation',
        phone: '971566597878',
        icon: 'whatsapp'
      }
    },
    image: {
      src: '/images/th1.jpg',
      alt: 'Ayurvedic diet plan and warming spices for thyroid health at RamaCare Dubai'
    }
  },
  localContext: {
    title: 'Thyroid Health in Dubai: What Matters',
    items: [
      {
        id: 1,
        icon: 'Activity',
        title: 'Taking Your Tablet Correctly', 
        description: 'Busy mornings and coffee straight after the tablet are a common reason thyroid levels stay off target. Consistent timing helps your doctor find the right dose.'
      },
      {
        id: 2,
        icon: 'Sun',
        title: 'Iodine and Vitamin D', 
        description: 'Using iodised salt at home and eating dairy, eggs and fish usually provides enough iodine. Low vitamin D is common in the UAE; our GP can check it.'
      },
      {
        id: 3,
        icon: 'Wind',
        title: 'Feeling Cold and Sluggish', 
        description: 'Many people with an underactive thyroid feel the cold of air-conditioning more. Ayurveda links this to Kapha and advises warm, cooked food and warm drinks.'
      }
    ]
  },
  dietaryStrategies: {
    title: 'Diet for an Underactive Thyroid (Hypothyroidism)',
    description: 'If you feel sluggish, cold, and are gaining weight easily, your diet needs to be "stimulating" and "warming."',
    favor: {
      title: 'Foods to Favour',
      subtitle: 'A balanced diet with these nutrients:',
      locationInfo: 'Available at Waitrose, Spinneys, and Organic Foods & Café:',
      items: [
        {
          title: 'Iodine (in normal amounts)', 
          description: 'Iodised salt at home, milk, yoghurt, eggs and sea fish. Note: Himalayan pink salt contains very little iodine.'
        },
        {
          title: 'Selenium From Food', 
          description: 'Eggs, fish, sunflower seeds, lentils, or an occasional Brazil nut. Avoid selenium supplements unless your doctor advises them.'
        },
        {
          title: 'Protein, Vegetables and Whole Grains', 
          description: 'Dal, fish, eggs or chicken with plenty of cooked vegetables and whole grains such as millet, oats or brown rice.'
        },
        {
          title: 'Warm, Lightly Spiced Food', 
          description: 'Ayurveda favours warm, cooked meals with ginger, cumin and black pepper for Kapha and slow digestion.'
        }
      ]
    },
    avoid: {
      title: 'Thyroid Foods to Avoid or Time',
      subtitle: 'What matters is timing and amount:',
      items: [
        {
          title: 'Soy, Coffee and High-Fibre Foods Near Your Tablet', 
          description: 'You do not need to avoid them, but keep them away from your levothyroxine; wait at least 30–60 minutes after the tablet.'
        },
        {
          title: 'Calcium and Iron Supplements', 
          description: 'Take them about 4 hours apart from your thyroid tablet.'
        },
        {
          title: 'Iodine or Kelp Supplements', 
          description: 'Avoid unless your doctor advises them; too much iodine can worsen some thyroid conditions.'
        },
        { 
          title: 'Raw Cabbage and Broccoli in Very Large Amounts',
          description: 'Cooked cruciferous vegetables in normal portions are fine for most people.'
        }
      ]
    },
    cta: 'Get Your Personalized Diet Plan'
  },
  tabletTiming: {
  id: 'thyroid-tablet-timing',
  heading: 'Thyroid Tablet and Food: The Timing Rules',
  table: [
    ['Levothyroxine', 'With water only, on an empty stomach, 30–60 minutes before breakfast, at the same time daily'],
    ['Coffee, tea, soy, high-fibre breakfast', 'At least 30–60 minutes after the tablet'],
    ['Calcium or iron supplements', 'About 4 hours apart from the tablet'],
    ['Changing brand or dose', 'Only with your doctor; recheck thyroid tests afterwards']
  ],
  note: 'Based on standard medical guidance (NHS and others). Our GP can review your timing and dose.'
},
sampleDay: {
  id: 'thyroid-sample-day',
  heading: 'Sample Thyroid-Friendly Day',
  intro: 'An example only. Your plan depends on your medicines and health.',
  table: [
    ['On waking', 'Thyroid tablet with a glass of water only'],
    ['45–60 minutes later', 'Breakfast: eggs with vegetables and toast, or oats with milk'],
    ['Mid-morning', 'Coffee or tea if you like, and a fruit'],
    ['Lunch (main meal)', 'Rice or roti, dal or fish, cooked vegetables, yoghurt'],
    ['Afternoon', 'Ginger or herbal tea with a handful of sunflower seeds'],
    ['Dinner (early)', 'Warm vegetable soup with lentils or chicken']
  ]
},
medicalCare: {
  id: 'medical-thyroid-care',
  heading: 'Medical Thyroid Care at RamaCare',
  intro: 'Our female GP, in the same Jumeirah 1 building, diagnoses and manages thyroid conditions, arranges TSH and thyroid blood tests, and prescribes and adjusts medicines.',
  items: [
    { text: 'Thyroid care at RamaCare', href: '/services/thyroid-dysfunction-solutions-dubai/' }
  ],
  note: 'Dr. Shamna Keloth Meethal (BAMS) then plans your diet around your medicine and routine. Consultation from AED 200.'
},
yourVisit: {
  id: 'your-visit',
  heading: 'Your Thyroid Diet Consultation in Jumeirah 1',
  table: [
    ['Diet and Ayurveda', 'Dr. Shamna Keloth Meethal, BAMS, female, DHA-licensed (11+ years)'],
    ['Medical thyroid care', 'Our female GP, same building'],
    ['Consultation', 'From AED 200, 45–60 minutes, in person'],
    ['Insurance', 'Reimbursement basis; itemised invoices provided'],
    ['Address', '12 Al Dhiyafah Road, Jumeirah Terrace Building, Ground Floor, Jumeirah 1, Dubai'],
    ['Nearby', 'A few minutes from Satwa and Al Wasl; about 10 minutes from Jumeirah 2, City Walk and La Mer'],
    ['Hours', 'Every day, 10am–10pm']
  ]
},
  adaptogens: {
    title: 'Ayurvedic Herbs Used in Thyroid Care',
    items: [
      {
        id: 1,
        name: 'Kanchanar Guggulu',
        icon: 'Leaf',
        description: 'A classical formula Ayurvedic physicians use for glandular swellings (Galaganda) and Kapha imbalance. Research is limited to small studies.'
      },
      {
        id: 2,
        name: 'Guggulu',
        icon: 'Droplets',
        description: 'A traditional resin used in Ayurveda for Kapha and Medas (fat tissue) imbalance.'
      },
      {
        id: 3,
        name: 'Ashwagandha',
        icon: 'Sparkles',
        description: 'Traditionally used for stress. It may affect thyroid hormone levels, so it is not suitable for everyone, especially people with an overactive thyroid; take it only if prescribed.'
      }
    ],
    image: {
      src: '/images/th2.jpg', // Placeholder for the herb image
      caption: 'A selection of Ayurvedic herbs for Thyroid health: Ashwagandha root, Ginger, and Guggulu resin'
    },
    cta: 'Consult About Herbal Support'
  },
  faq: {
    title: 'Thyroid Diet: Frequently Asked Questions',
    items: [
      { question: 'What is the best hypothyroidism diet?', answer: 'There is no special thyroid diet. Eat a balanced diet with protein, vegetables and whole grains, get enough iodine from iodised salt, dairy, eggs and fish, and take your thyroid tablet at the right time. Ayurveda adds warm, cooked, lightly spiced food for Kapha.' },
      { question: 'When should I take my thyroid tablet?', answer: 'Take levothyroxine with water on an empty stomach, 30–60 minutes before breakfast, at the same time each day. Keep coffee, soy and high-fibre foods away from it, and take calcium or iron supplements about four hours apart.' },
      { question: 'Can I drink coffee with thyroid medicine?', answer: 'Yes, but wait at least 30–60 minutes after your tablet, as coffee can reduce how well it is absorbed.' },
      { question: 'Should I avoid broccoli, cabbage and cauliflower?', answer: 'No. Cooked cruciferous vegetables in normal portions are fine for most people. Only very large amounts of raw ones may be a concern.' },
      { question: 'Is soy bad for the thyroid?', answer: 'Soy does not need to be avoided, but it can reduce absorption of thyroid medicine, so keep it away from your tablet time and keep your intake consistent.' },
      { question: 'Is Himalayan pink salt good for the thyroid?', answer: 'It contains very little iodine. Iodised table salt is a more reliable source; use it in normal amounts.' },
      { question: 'Should I take iodine, selenium or kelp supplements?', answer: 'Not unless your doctor advises it. Too much iodine can worsen some thyroid conditions, and too much selenium can be harmful.' },
      { question: 'Can Ayurveda cure thyroid problems?', answer: 'No. Thyroid conditions usually need ongoing medical care. Ayurvedic diet and lifestyle advice can support how you feel alongside your treatment. Never stop or change thyroid medicine without your doctor.' },
      { question: 'Can I take Ayurvedic herbs with thyroid medicine?', answer: 'Only if prescribed after the doctor reviews your tests and medicines. Some herbs, such as Ashwagandha, may affect thyroid levels.' },
      { question: 'What about an overactive thyroid (hyperthyroidism)?', answer: 'An overactive thyroid needs medical treatment. Avoid iodine and kelp supplements and limit caffeine. Ayurveda links it to Pitta and favours cooling, regular meals; our GP manages the medical care.' },
      { question: 'Will a thyroid diet help me lose weight?', answer: 'Once thyroid levels are well controlled, weight usually responds to the same diet and activity changes as for anyone else. See our Ayurvedic weight loss treatment page.' },
      { question: 'Which tests do I need?', answer: 'Thyroid blood tests (TSH and often T4) are arranged by our female GP, who also reviews your medicine dose. Vitamin D can be checked at the same time.' },
      { question: 'Is the consultation covered by insurance?', answer: 'It depends on your policy. RamaCare works on a reimbursement basis: you pay at the clinic and we provide itemised invoices for your claim.' },
      { question: 'Do you offer online consultations?', answer: 'No. All consultations are in person at our Jumeirah 1 clinic, every day from 10am to 10pm.' },
      { question: 'Where is RamaCare?', answer: 'At 12 Al Dhiyafah Road, Jumeirah Terrace Building, Ground Floor, Jumeirah 1, Dubai, a few minutes from Satwa and Al Wasl and about 10 minutes from Jumeirah 2, City Walk and La Mer. Consultation from AED 200.' }
    ]
  },
  whyConsult: {
    title: 'Why Patients Choose RamaCare for Thyroid Diet Care',
    items: [
      {
        id: 1,
        title: 'GP Thyroid Care in the Same Building',
        description: 'Our female GP diagnoses and manages thyroid conditions, arranges TSH and thyroid blood tests, and prescribes medicines.',
        icon: 'Award',
      },
      {
        id: 2,
        title: 'Prakriti Assessment',
        description: 'Dr. Shamna Keloth Meethal (BAMS) assesses your constitution and digestion to plan a diet that suits you.',
        icon: 'Users',
      },
      {
        id: 3,
        title: 'Diet and Medical Care Together',
        description: 'Your diet plan is built around your thyroid medicine and reviewed alongside your blood tests.',
        icon: 'Heart',
      }
    ],
    footerInfo: 'DHA-licensed polyclinic • Jumeirah 1 • Insurance by reimbursement'
  },
  authorityFooter: {
    title: 'Get a Thyroid-Friendly Diet Plan',
    description: 'Book a consultation with Dr. Shamna in Jumeirah 1, from AED 200, with our GP in the same building for thyroid tests and medicines.',
    cta: 'Book Your Thyroid Assessment in Jumeirah Today',
    details: [
      { icon: 'MapPin', text: '12 Al Dhiyafah Road, Jumeirah 1, Dubai' },
      { icon: 'Clock', text: 'In-person consultations, every day 10am–10pm' },
      { icon: 'Award', text: 'Itemised invoices for insurance reimbursement' }
    ]
  }
};

export default function AyurvedicDietThyroidPage() {
  const [openFaq, setOpenFaq] = useState(null);

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
        "@id": "https://ramacarepolyclinic.ae/services/ayurvedic-diet-thyroid-dubai/#webpage",
        "url": "https://ramacarepolyclinic.ae/services/ayurvedic-diet-thyroid-dubai/",
        "name": "Ayurvedic Diet for Thyroid Dubai | Foods & Tablet Timing",
        "inLanguage": "en-AE",
        "about": { "@id": "https://ramacarepolyclinic.ae/services/ayurvedic-diet-thyroid-dubai/#diet" },
        "relatedLink": "https://ramacarepolyclinic.ae/services/thyroid-dysfunction-solutions-dubai/",
        "isPartOf": { "@id": "https://ramacarepolyclinic.ae/services/ayurveda-dubai/#webpage" },
        "reviewedBy": { "@id": "https://ramacarepolyclinic.ae/doctors/dr-shamna-keloth-meethal-ayurveda-doctor-dubai/#physician" },
        "lastReviewed": "YYYY-MM-DD",
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ramacarepolyclinic.ae/" },
            { "@type": "ListItem", "position": 2, "name": "Ayurveda", "item": "https://ramacarepolyclinic.ae/services/ayurveda-dubai/" },
            { "@type": "ListItem", "position": 3, "name": "Ayurvedic Diet for Thyroid", "item": "https://ramacarepolyclinic.ae/services/ayurvedic-diet-thyroid-dubai/" }
          ]
        }
      },
      {
        "@type": "Diet",
        "@id": "https://ramacarepolyclinic.ae/services/ayurvedic-diet-thyroid-dubai/#diet",
        "name": "Ayurvedic diet for thyroid",
        "alternateName": ["Thyroid diet", "Hypothyroidism diet", "Diet for underactive thyroid", "Ayurvedic thyroid diet"],
        "description": "Balanced, Kapha-balancing eating guidance for people with thyroid conditions from RamaCare Polyclinic, Jumeirah 1, Dubai: correct levothyroxine timing, iodine from iodised salt, dairy, eggs and fish, selenium from food, cooked vegetables in normal amounts, alongside thyroid care from our GP.",
        "dietFeatures": "Thyroid tablet with water on an empty stomach 30–60 minutes before breakfast; soy, coffee and high-fibre foods kept away from the tablet; calcium and iron about 4 hours apart; balanced meals with protein, vegetables and whole grains",
        "expertConsiderations": "Diet supports, and does not replace, thyroid medicine. Never stop or change thyroid medicine without your doctor. Avoid iodine or kelp supplements unless advised. Herbs only as prescribed, especially in hyperthyroidism.",
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



  return (
    <Layout>
      {/* Sticky Floating Button */}
      <div className="fixed top-1/2 right-0 -translate-y-1/2 z-[999] hidden md:block">
        <Link href="/book-appointment/">
          <motion.div
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            className="bg-[#1F5E4B] text-white px-6 py-4 rounded-l-2xl flex items-center gap-3 shadow-2xl hover:bg-[#164435] transition-all group cursor-pointer"
          >
            <span className="font-bold whitespace-nowrap">Book Assessment</span>
            <LucideIcons.ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </motion.div>
        </Link>
      </div>

      <Head>
        <title key="title">Ayurvedic Diet for Thyroid Dubai | Foods & Tablet Timing</title>
        <meta name="description" content="Ayurvedic diet for thyroid in Jumeirah 1, Dubai: foods to eat and limit, levothyroxine timing, and Ayurvedic advice alongside thyroid care from our GP." key="description" />
        <meta name="robots" content="index, follow" key="robots" />
        <link rel="canonical" href="https://ramacarepolyclinic.ae/services/ayurvedic-diet-thyroid-dubai/" key="canonical" />

        {/* Open Graph Tags */}
        <meta property="og:type" content="article" key="og:type" />
        <meta property="og:title" content="Ayurvedic Diet for Thyroid Dubai | Foods & Tablet Timing" key="og:title" />
        <meta property="og:description" content="Ayurvedic diet for thyroid in Jumeirah 1, Dubai: foods to eat and limit, levothyroxine timing, and Ayurvedic advice alongside thyroid care from our GP." key="og:description" />
        <meta property="og:url" content="https://ramacarepolyclinic.ae/services/ayurvedic-diet-thyroid-dubai/" key="og:url" />
        <meta property="og:image" content="https://ramacarepolyclinic.ae/images/th1.jpg" key="og:image" />
        <meta property="og:image:width" content="1200" key="og:image:width" />
        <meta property="og:image:height" content="630" key="og:image:height" />
        <meta property="og:image:alt" content="Ayurvedic thyroid diet and herbs at RamaCare Polyclinic, Jumeirah 1, Dubai" key="og:image:alt" />
        <meta property="og:site_name" content="RamaCare Polyclinic" key="og:site_name" />
        <meta property="og:locale" content="en_AE" key="og:locale" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content="Ayurvedic Diet for Thyroid Dubai | Foods & Tablet Timing" key="twitter:title" />
        <meta name="twitter:description" content="Ayurvedic diet for thyroid in Jumeirah 1, Dubai: foods to eat and limit, levothyroxine timing, and Ayurvedic advice alongside thyroid care from our GP." key="twitter:description" />
        <meta name="twitter:image" content="https://ramacarepolyclinic.ae/images/th1.jpg" key="twitter:image" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaGraph)
          }}
        />
      </Head>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F5F1EA] to-white py-12 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          {/* Breadcrumbs */}
          <nav className="flex flex-wrap items-center gap-y-1.5 text-xs font-semibold text-[#5F5F5F] mb-6 tracking-wider">
            <a href="/" className="hover:text-[#1F5E4B] transition-colors">Home</a>
            <span className="mx-2">/</span>
            <a href="/services/ayurveda-dubai/" className="hover:text-[#1F5E4B] transition-colors">Ayurveda Treatments</a>
            <span className="mx-2">/</span>
            <span className="text-gray-400">Ayurvedic Diet for Thyroid</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#1A1A1A] leading-tight mb-8">
                {content.hero.title}
              </h1>
              <p className="text-base md:text-lg text-[#5F5F5F] leading-relaxed mb-8">
                {content.hero.description}
              </p>

              {content.hero.summary && (
                <div className="bg-[#E9E2D6] p-6 md:p-8 rounded-lg space-y-4 mb-8">
                  <h3 className="text-xl md:text-2xl font-bold text-[#1F5E4B] mb-4">
                    {content.hero.summary.title}
                  </h3>
                  <p
                    className="text-[#1A1A1A] leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: content.hero.summary.content }}
                  />
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-4">
                {content.hero.ctaButtons?.primary && (
                  <Link
                    href={content.hero.ctaButtons.primary.link}
                    className="inline-flex items-center justify-center px-8 py-4 bg-[#1F5E4B] text-white rounded-xl font-bold text-lg hover:bg-[#164435] transition-colors"
                  >
                    {content.hero.ctaButtons.primary.text}
                  </Link>
                )}
                {content.hero.ctaButtons?.secondary && (
                  <a target="_blank" rel="nofollow noopener noreferrer"
                    href={`https://wa.me/${content.hero.ctaButtons.secondary.phone}`}
                    className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#1F5E4B] border-2 border-[#1F5E4B] rounded-xl font-bold text-lg hover:bg-emerald-50 transition-colors gap-2"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    {content.hero.ctaButtons.secondary.text}
                  </a>
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={content.hero.image.src}
                  alt={content.hero.image.alt}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Local Context Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-12"
          >
            {content.localContext.title}
          </motion.h2>

          <div className="space-y-8">
            {content.localContext.items.map((item, index) => {
              const Icon = LucideIcons[item.icon] || LucideIcons.Activity;

              return (<motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 items-start"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-[#1F5E4B] rounded-full flex items-center justify-center text-white">
                  <Icon size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-lg text-[#4A4A4A] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
              );
            })}
          </div>
        </div>
      </section>
       <AyurvedaInfoSection content={content.tabletTiming} />
      {/* Dietary Strategies Section */}
      <section className="py-16 md:py-24 bg-[#F5F1EA]">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-4">
              {content.dietaryStrategies.title}
            </h2>
            <p className="text-lg md:text-xl text-[#4A4A4A]">
              {content.dietaryStrategies.description}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Foods to Favor */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-emerald-100"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full border-2 border-[#1F5E4B] flex items-center justify-center text-[#1F5E4B]">
                  <LucideIcons.Check size={20} />
                </div>
                <h3 className="text-2xl font-bold text-[#1A1A1A]">{content.dietaryStrategies.favor.title}</h3>
              </div>
              <p className="text-[#4A4A4A] italic mb-2">{content.dietaryStrategies.favor.subtitle}</p>
              <p className="text-sm text-[#666] mb-6">{content.dietaryStrategies.favor.locationInfo}</p>

              <div className="space-y-6">
                {content.dietaryStrategies.favor.items.map((item, idx) => (
                  <div key={idx} className="pl-4 border-l-4 border-[#1F5E4B]">
                    <h4 className="font-bold text-[#1A1A1A] mb-1">{item.title}</h4>
                    <p className="text-[#4A4A4A] leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Foods to Avoid */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-rose-100"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full border-2 border-rose-600 flex items-center justify-center text-rose-600">
                  <LucideIcons.X size={20} />
                </div>
                <h3 className="text-2xl font-bold text-[#1A1A1A]">{content.dietaryStrategies.avoid.title}</h3>
              </div>
              <p className="text-[#4A4A4A] italic mb-6">{content.dietaryStrategies.avoid.subtitle}</p>

              <div className="space-y-6">
                {content.dietaryStrategies.avoid.items.map((item, idx) => (
                  <div key={idx} className="pl-4 border-l-4 border-slate-300">
                    <h4 className="font-bold text-[#1A1A1A] mb-1">{item.title}</h4>
                    <p className="text-[#4A4A4A] leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="text-center">
            <Link
              href="/book-appointment/"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#1F5E4B] text-white rounded-xl font-bold text-lg hover:bg-[#164435] transition-colors shadow-lg"
            >
              {content.dietaryStrategies.cta}
            </Link>
          </div>
        </div>
      </section>

      {/* Adaptogens Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-12"
          >
            {content.adaptogens.title}
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {content.adaptogens.items.map((item, index) => {
              const Icon = LucideIcons[item.icon] || LucideIcons.Activity;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-[#F5F1EA]/50 p-8 rounded-3xl text-center border border-transparent hover:border-[#1F5E4B] transition-all"
                >
                  <div className="w-16 h-16 bg-[#1F5E4B] rounded-full flex items-center justify-center text-white mx-auto mb-6">
                    <Icon size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1F5E4B] mb-4">{item.name}</h3>
                  <p className="text-[#4A4A4A] leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-xl bg-[#F5F1EA]">
              <div className="relative aspect-[21/9] w-full">
                <Image
                  src={content.adaptogens.image.src}
                  alt="Ayurvedic herbs for Thyroid"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-[#EAE4D3] py-4 px-8 text-center text-[#4A4A4A] text-sm italic">
                {content.adaptogens.image.caption}
              </div>
            </div>
          </motion.div>

          <div className="text-center">
            <Link
              href="/book-appointment/"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#1F5E4B] text-white rounded-xl font-bold text-lg hover:bg-[#164435] transition-colors shadow-lg"
            >
              {content.adaptogens.cta}
            </Link>
          </div>
        </div>
      </section>
<AyurvedaInfoSection content={content.sampleDay} />  
<AyurvedaInfoSection content={content.medicalCare} />
      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-[#F5F1EA]">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-12 text-center md:text-left"
          >
            {content.faq.title}
          </motion.h2>

          <div className="space-y-4">
            {content.faq.items.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-bold text-[#1A1A1A]">{item.question}</span>
                  <LucideIcons.ChevronDown
                    size={24}
                    className={`text-[#1F5E4B] transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`}
                  />
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: openFaq === idx ? 'auto' : 0, opacity: openFaq === idx ? 1 : 0 }}
                  className="overflow-hidden"
                >
                  <div
                    className="px-8 pb-6 text-[#4A4A4A] leading-relaxed border-t border-gray-100 pt-4"
                    dangerouslySetInnerHTML={{ __html: item.answer }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
 <AyurvedaInfoSection content={content.yourVisit} />
      {/* Why Consult Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-16 text-center"
          >
            {content.whyConsult.title}
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {content.whyConsult.items.map((item, idx) => {
              const Icon = LucideIcons[item.icon] || LucideIcons.Award;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-[#F5F1EA] p-8 rounded-2xl text-center border border-transparent hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-[#1F5E4B] rounded-full flex items-center justify-center text-white mx-auto mb-6">
                    <Icon size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1F5E4B] mb-4">{item.title}</h3>
                  <p className="text-[#4A4A4A] leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#E9E2D6] py-4 px-8 rounded-lg flex flex-wrap items-center justify-center gap-6 text-[#1F5E4B] text-lg"
          >
            <div className="flex items-center gap-2">
              <LucideIcons.Award size={20} />
              <span className="font-medium text-lg">DHA Licensed</span>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-[#1F5E4B]/30 hidden sm:block"></div>
            <div className="flex items-center gap-2">
              <LucideIcons.ShieldCheck size={20} />
              <span className="font-medium text-lg">Insurance reimbursement</span>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-[#1F5E4B]/30 hidden sm:block"></div>
            <div className="flex items-center gap-2">
              <LucideIcons.MapPin size={20} />
              <span className="font-medium text-lg">Jumeirah 1</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Authority Footer Section */}
      <section id="book-now" className="py-20 md:py-28 bg-[#1F5E4B] text-white text-center relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-white blur-[120px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-white blur-[120px]"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-white"
          >
            {content.authorityFooter.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-white/90 leading-relaxed mb-12"
          >
            {content.authorityFooter.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <Link
              href="/book-appointment/"
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-[#1F5E4B] rounded-lg font-bold text-xl hover:bg-emerald-50 transition-all shadow-2xl"
            >
              <LucideIcons.Calendar className="text-[#1F5E4B]" size={28} />
              {content.authorityFooter.cta}
            </Link>
          </motion.div>

          <div className="pt-8 space-y-2 text-white/70">
            {content.authorityFooter.details.map((detail, idx) => {
              const Icon = LucideIcons[detail.icon] || LucideIcons.Activity;
              return (
                <div key={idx} className="flex items-center justify-center gap-2">
                  <Icon size={18} />
                  <p className="text-base">{detail.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Related Reading */}
      <section className="bg-white py-16 md:py-24 border-t border-[#E9E2D6]/40">
        <div className="container mx-auto px-6 text-center max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-10">
            Related Ayurvedic Guides
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
            <Link href="/services/thyroid-dysfunction-solutions-dubai/" className="bg-[#F5F1EA] hover:bg-[#E9E2D6] p-6 rounded-2xl flex items-center justify-between transition-all group shadow-sm">
              <span className="font-bold text-[#1A1A1A] group-hover:text-[#1F5E4B]">Thyroid Care at RamaCare</span>
              <LucideIcons.ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#1F5E4B] transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/services/ayurvedic-diet-weight-loss-dubai/" className="bg-[#F5F1EA] hover:bg-[#E9E2D6] p-6 rounded-2xl flex items-center justify-between transition-all group shadow-sm">
              <span className="font-bold text-[#1A1A1A] group-hover:text-[#1F5E4B]">Ayurvedic Weight Loss Treatment</span>
              <LucideIcons.ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#1F5E4B] transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/services/ayurvedic-diet-pcos-dubai/" className="bg-[#F5F1EA] hover:bg-[#E9E2D6] p-6 rounded-2xl flex items-center justify-between transition-all group shadow-sm">
              <span className="font-bold text-[#1A1A1A] group-hover:text-[#1F5E4B]">Ayurvedic Diet for PCOS</span>
              <LucideIcons.ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#1F5E4B] transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/services/ayurvedic-hairfall-treatment-dubai/" className="bg-[#F5F1EA] hover:bg-[#E9E2D6] p-6 rounded-2xl flex items-center justify-between transition-all group shadow-sm">
              <span className="font-bold text-[#1A1A1A] group-hover:text-[#1F5E4B]">Ayurvedic Hair Fall Treatment</span>
              <LucideIcons.ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#1F5E4B] transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/services/ayurvedic-diet-plan-dubai/" className="bg-[#F5F1EA] hover:bg-[#E9E2D6] p-6 rounded-2xl flex items-center justify-between transition-all group shadow-sm">
              <span className="font-bold text-[#1A1A1A] group-hover:text-[#1F5E4B]">Ayurvedic Diet Plan</span>
              <LucideIcons.ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#1F5E4B] transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      <ContentReviewBadge doctorName="Dr. Shamna Keloth Meethal" pageSlug="ayurvedic-diet-thyroid-dubai" lastReviewed="2026-01-12" />

    </Layout>
  );
}
