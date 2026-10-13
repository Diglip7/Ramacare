import React, { useState } from 'react';
import Layout from '../../../components/Layout';
import Head from "next/head";
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { useToast } from '../../../components/Toast';
import ContentReviewBadge from '../../../components/ContentReviewBadge';
import AyurvedaInfoSection from '../../../components/AyurvedaInfoSection';

const content = {
  hero: {
    title: 'Ayurvedic Weight Loss Treatment and Diet in Dubai',
    description: 'Ayurveda links weight gain mainly to excess Kapha, weak digestion (Agni) and the build-up of fat tissue (Medas). At RamaCare Polyclinic in Jumeirah 1, Dubai, Ayurvedic weight loss care starts with a consultation with Dr. Shamna Keloth Meethal (BAMS), with checks by our GP if needed, and combines a Kapha-balancing diet with therapies such as Udwarthanam (herbal powder massage) and herbal steam, given by therapists of your own gender.',
    summary: {
      title: 'How Does Ayurveda Help With Weight Loss?',
      question: 'In short:',
      answer: 'Ayurveda treats weight gain as a Kapha imbalance with weak digestion. A typical plan combines a Kapha-balancing diet (main meal at lunch, light early dinner, warm cooked food, fewer sweets and fried food), regular exercise, and therapies such as Udwarthanam and herbal steam, with Virechana or Basti for some people. Weight loss is gradual and varies from person to person; medical causes such as thyroid problems or PCOS should be checked first.'
    },
    ctaButtons: {
      primary: { text: 'Book a Weight Loss Consultation' },
      secondary: { text: 'WhatsApp Consultation', phone: '971566597878' }
    },
    trustBadges: [
      { label: 'DHA Compliant', icon: 'CheckCircle2' },
      { label: 'Jumeirah Location', icon: 'CheckCircle2' },
      { label: 'Personalized Plans', icon: 'CheckCircle2' }
    ]
  },
  weightTrap: {
    title: 'Why Weight Gain Is Common in Dubai',
    items: [
      {
        title: 'Long Hours and Little Walking',
        description: 'Car commutes, desk jobs and the summer heat leave little daily movement. Ayurveda links this inactivity to Kapha.',
        icon: 'Clock'
      },
      {
        title: 'Late Dinners and Eating Out',
        description: 'Late, heavy restaurant meals and brunches add up. In Ayurveda, weak digestion in the evening (Mandagni) leads to heaviness.',
        icon: 'Utensils'
      },
      {
        title: 'Hidden Medical Causes',
        description: 'Thyroid problems, PCOS, some medicines and poor sleep can make weight harder to lose. Our GP in the same building can check these.',
        icon: 'Stethoscope'
      }
    ]
  },
  pillars: {
    title: 'The Ayurvedic Diet for Weight Loss',
    items: [
      {
        letter: 'A',
        title: 'Support Your Digestion (Agni)',
        description: 'Warm, freshly cooked food, warm water or ginger tea, and spices such as cumin, ginger and black pepper are traditionally used to support digestion. Avoid iced drinks with meals.',
        icon: '🔥'
      },
      {
        letter: 'B',
        title: 'Eat With the Sun',
        description: 'Make lunch your largest meal and keep dinner light and early, ideally by 7–8pm. Many people find this alone reduces evening snacking and bloating.',
        icon: '☀️'
      },
      {
        letter: 'C',
        title: 'Kapha-Balancing Foods',
        description: 'Fill half your plate with vegetables, add protein (dal, fish, chicken, eggs), and keep whole grains such as millet or barley to a quarter. Cut sweets, fried food, refined flour and heavy dairy.',
        icon: '🌿'
      }
    ]
  },

  therapies: {
    id: 'weight-loss-therapies',
    heading: 'Ayurvedic Therapies for Weight Loss at RamaCare',
    intro: 'Chosen by Dr. Shamna after your consultation, and given by Kerala-trained therapists of your own gender.',
    table: [
      ['Udwarthanam', 'A brisk massage with warm herbal powders in upward strokes, traditionally used for Kapha and weight management.'],
      ['Herbal steam (Swedana)', 'Gentle herbal steam, usually after Udwarthanam, to relax the body.'],
      ['Dhanyamla Dhara', 'A warm stream of fermented herbal liquid over the body, traditionally used for heaviness and Vata-Kapha conditions.'],
      ['Virechana or Basti', 'Supervised Panchakarma therapies, for some people, when the doctor finds them suitable.']
    ],
    note: 'Read more: Panchakarma (/services/panchakarma-treatment-dubai/) · Kerala Ayurvedic massage (/services/abhyanga-massage-dubai/).'
  },
  udwarthanamSteps: {
    id: 'udwarthanam-session',
    heading: 'What Happens in an Udwarthanam Session',
    ordered: true,
    items: [
      { text: 'Your first visit is a consultation with Dr. Shamna, who checks that it suits you.' },
      { text: 'Your therapist, always of your own gender, applies warm herbal powder and massages in brisk, upward strokes.' },
      { text: 'You usually rest briefly and then have gentle herbal steam.' },
      { text: 'A warm shower is available afterwards. Sessions last 60–90 minutes.' }
    ]
  },
  sampleDay: {
    id: 'sample-day',
    heading: 'Sample Ayurvedic Weight Loss Day',
    intro: 'An example only. Your plan depends on your health and routine.',
    table: [
      ['On waking', 'Warm water with ginger'],
      ['Breakfast', 'Vegetable oats or millet upma, or two eggs with sautéed vegetables'],
      ['Lunch (main meal)', 'Plenty of vegetables, dal or grilled fish or chicken, and a small portion of millet, barley or brown rice'],
      ['After lunch', 'A 10–15 minute walk'],
      ['Afternoon', 'Buttermilk or herbal tea; a fruit if hungry'],
      ['Dinner (by 7–8pm)', 'Vegetable and lentil soup, or a light plate of cooked vegetables with protein']
    ]
  },
  otherOptions: {
    id: 'other-options',
    heading: 'Other Weight Loss Options at RamaCare',
    items: [
      { text: 'Eximia body contouring, for shaping specific areas, alongside a healthy diet', href: '/services/eximia-body-contouring-dubai/' },
      { text: 'GP checks for thyroid, blood sugar, cholesterol and PCOS', href: '/services/general-physician-dubai/' }
    ]
  },
  yourVisit: {
    id: 'your-visit',
    heading: 'Your Weight Loss Consultation in Jumeirah 1',
    table: [
      ['Doctor', 'Dr. Shamna Keloth Meethal, BAMS, DHA-licensed Ayurvedic doctor (11+ years)'],
      ['Therapists', 'Syamkumar Sasidharan (men) and Mariya Thayyil Muhammed (women), Kerala-trained'],
      ['Consultation', 'From AED 200, 45–60 minutes; therapy prices confirmed when you book'],
      ['Address', '12 Al Dhiyafah Road, Jumeirah Terrace Building, Ground Floor, Jumeirah 1, Dubai'],
      ['Nearby', 'A few minutes from Satwa and Al Wasl; about 10 minutes from Jumeirah 2, City Walk and La Mer'],
      ['Hours', 'Every day, 10am–10pm, including after-work evenings']
    ]
  },
  superfoods: {
    title: 'Ayurvedic Herbs Used in Weight Management',
    items: [
      {
        title: 'Triphala',
        description: 'A classical formula traditionally used for regular digestion.',
        icon: '🌿'
      },
      {
        title: 'Guggulu formulations',
        description: 'Traditionally used in Ayurveda for Kapha and Medas (fat tissue) imbalance.',
        icon: '🌿'
      },
      {
        title: 'Cinnamon and Ginger',
        description: 'Kitchen spices traditionally used to support digestion; fine in food amounts.',
        icon: '🌿'
      }
    ]
  },
  faqs: {
    title: 'Ayurvedic Weight Loss: Frequently Asked Questions',
    items: [
      { question: 'What is Ayurvedic weight loss treatment?', answer: 'A doctor-planned approach that combines a Kapha-balancing diet, daily activity and Ayurvedic therapies such as Udwarthanam (herbal powder massage) and herbal steam, with Virechana or Basti for some people. At RamaCare in Jumeirah 1 it starts with a consultation with Dr. Shamna Keloth Meethal (BAMS).' },
      { question: 'What is Udwarthanam?', answer: 'Udwarthanam is a brisk Ayurvedic massage using warm herbal powders, rubbed in upward strokes. It is traditionally used for Kapha and weight management, and is usually followed by herbal steam.' },
      { question: 'Does Udwarthanam reduce fat?', answer: 'It is traditionally used as part of Ayurvedic weight management and many people find their skin feels firmer, but massage alone does not remove fat. Weight loss comes mainly from diet and activity; therapies support the plan.' },
      { question: 'Which Ayurvedic therapies are used for weight loss?', answer: 'Udwarthanam, herbal steam (Swedana), Dhanyamla Dhara, and for some people Virechana or Basti as part of Panchakarma. The doctor decides which suit you.' },
      { question: 'Is there an Ayurvedic weight loss package in Dubai?', answer: 'Yes. After your consultation, Dr. Shamna plans a programme of therapies and diet for you. Its length and price depend on your needs and are confirmed when you book.' },
      { question: 'How fast will I lose weight?', answer: 'It varies. A steady rate of about 0.5–1 kg a week is generally considered healthy. The doctor reviews your weight and measurements at follow-ups.' },
      { question: 'How can I lose weight in Dubai?', answer: 'Follow a weight loss plan you can keep: make lunch your main meal, eat a light early dinner, cut sugary drinks and late snacks, and walk daily, indoors or early in the morning in summer. If weight is hard to shift, check thyroid and other causes with a doctor, and consider a personal Ayurvedic plan in Jumeirah 1.' },
      { question: 'What should I eat for weight loss in Ayurveda?', answer: 'Warm, freshly cooked meals with plenty of vegetables, protein such as dal, fish, chicken or eggs, and a small portion of whole grains like millet or barley. Make lunch your main meal and keep dinner light and early.' },
      { question: 'Can I follow an Ayurvedic diet if I eat out often in Dubai?', answer: 'Yes. Choose grilled protein, lentil soup, dal and cooked vegetables, keep rice and bread small, skip sugary drinks and desserts, and avoid large late dinners.' },
      { question: 'Should I get blood tests before starting?', answer: 'It is a good idea, especially if weight gain is recent or hard to shift. Our GP in the same building can check thyroid function, blood sugar, cholesterol and, for women, signs of PCOS.' },
      { question: 'Is it safe with my medicines?', answer: 'Diet changes can usually be followed alongside medicines. Herbal medicines are prescribed only after the doctor reviews your health and current medicines.' },
      { question: 'Who gives the therapies?', answer: 'Kerala-trained therapists of your own gender: Syamkumar Sasidharan for men and Mariya Thayyil Muhammed for women.' },
      { question: 'Who should not have Udwarthanam?', answer: 'It may be postponed during pregnancy, fever, skin infections or broken skin, and with some heart conditions. The doctor checks this at your consultation.' },
      { question: 'Do you offer other weight loss options?', answer: 'Yes. RamaCare also offers Eximia body contouring for shaping specific areas, which can be combined with an Ayurvedic diet plan.' },
      { question: 'Where is RamaCare?', answer: 'At 12 Al Dhiyafah Road, Jumeirah Terrace Building, Ground Floor, Jumeirah 1, Dubai, a few minutes from Satwa and Al Wasl and about 10 minutes from Jumeirah 2, City Walk and La Mer. Open every day, 10am–10pm.' },
      { question: 'How much does a weight loss consultation cost?', answer: 'A consultation with Dr. Shamna starts from AED 200 and takes 45–60 minutes. Therapy prices are confirmed when you book.' }
    ]
  },
  clinical: {
    title: 'How Ayurvedic Weight Loss Care Works at RamaCare',
    description: 'Every plan is personal, and its length is set by the doctor. Prices for therapies are confirmed when you book.',
    points: [
      { label: 'Step 1', text: 'Consultation with Dr. Shamna (from AED 200): weight history, Prakriti, digestion and goals.' },
      { label: 'Step 2', text: 'GP checks if needed: thyroid, blood sugar, cholesterol and, for women, PCOS.' },
      { label: 'Step 3', text: 'Your plan: Kapha-balancing diet, activity, and therapies such as Udwarthanam and herbal steam.' },
      { label: 'Step 4', text: 'Follow-ups: weight and measurements reviewed, plan adjusted as you go.' }
    ],
    cta: 'Book a Weight Loss Consultation'
  },

  leadCapture: {
    title: 'Ready to Transform Your Health?',
    subtitle: 'Book your personalized Ayurvedic consultation today',
    form: {
      fields: {
        name: 'Full Name',
        phone: 'Phone Number',
        email: 'Email Address',
        goal: 'Primary Goal',
        time: 'Preferred Time'
      },
      buttons: {
        confirm: 'Confirm Appointment',
        whatsapp: 'Chat on WhatsApp'
      }
    }
  }
};

export default function AyurvedicDietWeightLossPage() {
  const { showToast, ToastComponent } = useToast();
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    goal: '',
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
        "@id": "https://ramacarepolyclinic.ae/services/ayurvedic-diet-weight-loss-dubai/#webpage",
        "url": "https://ramacarepolyclinic.ae/services/ayurvedic-diet-weight-loss-dubai/",
        "name": "Ayurvedic Weight Loss Treatment Dubai | Udwarthanam & Diet",
        "inLanguage": "en-AE",
        "about": [
          { "@id": "https://ramacarepolyclinic.ae/services/ayurvedic-diet-weight-loss-dubai/#therapy" },
          { "@id": "https://ramacarepolyclinic.ae/services/ayurvedic-diet-weight-loss-dubai/#diet" }
        ],
        "isPartOf": { "@id": "https://ramacarepolyclinic.ae/services/ayurveda-dubai/#webpage" },
        "reviewedBy": { "@id": "https://ramacarepolyclinic.ae/doctors/dr-shamna-keloth-meethal-ayurveda-doctor-dubai/#physician" },
        "lastReviewed": "2026-01-12",
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ramacarepolyclinic.ae/" },
            { "@type": "ListItem", "position": 2, "name": "Ayurveda", "item": "https://ramacarepolyclinic.ae/services/ayurveda-dubai/" },
            { "@type": "ListItem", "position": 3, "name": "Ayurvedic Weight Loss Treatment", "item": "https://ramacarepolyclinic.ae/services/ayurvedic-diet-weight-loss-dubai/" }
          ]
        }
      },
      {
        "@type": "MedicalTherapy",
        "@id": "https://ramacarepolyclinic.ae/services/ayurvedic-diet-weight-loss-dubai/#therapy",
        "name": "Ayurvedic weight loss treatment",
        "alternateName": ["Udwarthanam", "Udvartanam", "Ayurvedic slimming treatment", "Ayurvedic weight loss programme", "Dhanyamla Dhara", "Herbal steam (Swedana)"],
        "description": "Doctor-planned Ayurvedic weight loss care at RamaCare Polyclinic, Jumeirah 1, Dubai: consultation with a BAMS doctor, GP checks when needed, Udwarthanam (herbal powder massage), herbal steam, Dhanyamla Dhara, and Virechana or Basti when suitable, given by same-gender therapists, with a Kapha-balancing diet plan.",
        "relevantSpecialty": "https://schema.org/Ayurvedic",
        "provider": { "@id": "https://ramacarepolyclinic.ae/#clinic" }
      },
      {
        "@type": "Diet",
        "@id": "https://ramacarepolyclinic.ae/services/ayurvedic-diet-weight-loss-dubai/#diet",
        "name": "Ayurvedic diet for weight loss",
        "dietFeatures": "Main meal at lunch, light early dinner, plate method with vegetables and protein, Kapha-balancing warm and lightly spiced food, fewer sweets, fried food and refined flour",
        "expertConsiderations": "Medical causes of weight gain such as thyroid problems, PCOS or medicines should be checked by a doctor. Herbal medicines only as prescribed."
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

  const scrollToForm = () => {
    const element = document.getElementById('booking-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
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
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.name,
          phone: formData.phone,
          email: formData.email,
          preferredTime: formData.time,
          concern: formData.goal,
          source: 'ayurvedic-diet-weight-loss-dubai'
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        showToast('Appointment request submitted successfully!', 'success');
        setFormData({ name: '', phone: '', email: '', goal: '', time: '' });
      } else {
        showToast(result.message || 'Failed to submit appointment.', 'error');
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
        <title key="title">Ayurvedic Weight Loss Treatment Dubai | Udwarthanam & Diet</title>
        <meta name="description" content="Ayurvedic weight loss treatment in Jumeirah 1, Dubai: Udwarthanam, herbal steam and a Kapha diet plan by a BAMS doctor, with GP checks and same-gender therapists." key="description" />
        <meta name="robots" content="index, follow" key="robots" />
        <link rel="canonical" href="https://ramacarepolyclinic.ae/services/ayurvedic-diet-weight-loss-dubai/" key="canonical" />

        {/* Open Graph Tags */}
        <meta property="og:type" content="website" key="og:type" />
        <meta property="og:title" content="Ayurvedic Weight Loss Treatment Dubai | Udwarthanam & Diet" key="og:title" />
        <meta property="og:description" content="Ayurvedic weight loss treatment in Jumeirah 1, Dubai: Udwarthanam, herbal steam and a Kapha diet plan by a BAMS doctor, with GP checks and same-gender therapists." key="og:description" />
        <meta property="og:url" content="https://ramacarepolyclinic.ae/services/ayurvedic-diet-weight-loss-dubai/" key="og:url" />
        <meta property="og:image" content="https://ramacarepolyclinic.ae/images/diet1.jpg" key="og:image" />
        <meta property="og:image:width" content="1200" key="og:image:width" />
        <meta property="og:image:height" content="630" key="og:image:height" />
        <meta property="og:image:alt" content="Ayurvedic weight loss treatment with Udwarthanam at RamaCare Polyclinic, Jumeirah 1, Dubai" key="og:image:alt" />
        <meta property="og:site_name" content="RamaCare Polyclinic" key="og:site_name" />
        <meta property="og:locale" content="en_AE" key="og:locale" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content="Ayurvedic Weight Loss Treatment Dubai | Udwarthanam & Diet" key="twitter:title" />
        <meta name="twitter:description" content="Ayurvedic weight loss treatment in Jumeirah 1, Dubai: Udwarthanam, herbal steam and a Kapha diet plan by a BAMS doctor, with GP checks and same-gender therapists." key="twitter:description" />
        <meta name="twitter:image" content="https://ramacarepolyclinic.ae/images/diet1.jpg" key="twitter:image" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaGraph)
          }}
        />
      </Head>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav className="flex flex-wrap items-center gap-y-1.5 text-xs font-semibold text-[#5F5F5F] mb-6 tracking-wider">
            <a href="/" className="hover:text-[#1F5E4B] transition-colors">Home</a>
            <span className="mx-2">/</span>
            <a href="/services/ayurveda-dubai/" className="hover:text-[#1F5E4B] transition-colors">Ayurveda</a>
            <span className="mx-2">/</span>
            <span className="text-gray-400">Ayurvedic Diet for Weight Loss</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl font-bold tracking-tight text-[#1A1A1A] sm:text-6xl mb-8 leading-tight">
                {content.hero.title}
              </h1>
              <p className="text-lg leading-relaxed text-[#5F5F5F] mb-10">
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
                  onClick={scrollToForm}
                  className="bg-[#1F5E4B] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#164435] transition-all shadow-lg"
                >
                  {content.hero.ctaButtons.primary.text}
                </button>
                <a
                  href={`https://wa.me/${content.hero.ctaButtons.secondary.phone}`}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="bg-white text-[#1F5E4B] px-8 py-4 rounded-lg font-bold border-2 border-[#1F5E4B] hover:bg-gray-50 transition-all text-center"
                >
                  {content.hero.ctaButtons.secondary.text}
                </a>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-6">
                {content.hero.trustBadges.map((badge, idx) => {
                  const Icon = LucideIcons[badge.icon];
                  return (
                    <div key={idx} className="flex items-center gap-2 text-sm text-[#1A1A1A] font-medium">
                      <Icon size={18} className="text-[#1F5E4B]" />
                      {badge.label}
                    </div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-3xl bg-[#F2EFE9] flex items-center justify-center shadow-xl overflow-hidden relative">
                {/* Image placeholder - replace src with your image */}
                <Image
                  src="/images/diet1.jpg"
                  alt="Ayurvedic Diet for Weight Loss"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 1: Dubai Weight Trap */}
      <section className="bg-[#F9F7F2] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-5xl mb-16 text-center"
          >
            {content.weightTrap.title}
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {content.weightTrap.items.map((item, idx) => {
              const Icon = (item.icon && LucideIcons[item.icon]) || LucideIcons.AlertCircle;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="mb-6 text-[#1F5E4B]">
                    <Icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-4 leading-snug">
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

      {/* Section 2: 3 Pillars */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-5xl mb-16 text-center"
          >
            {content.pillars.title}
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6 relative">
            {content.pillars.items.map((item, idx) => (
              <React.Fragment key={idx}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-[#F9F7F2] p-10 rounded-2xl relative"
                >
                  <div className="text-3xl mb-6">{item.icon}</div>
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">
                    {item.letter}. {item.title}
                  </h3>
                  <p className="text-[#5F5F5F] leading-relaxed text-sm">
                    {item.description}
                  </p>
                </motion.div>
                {idx < content.pillars.items.length - 1 && (
                  <div className="hidden lg:flex items-center justify-center text-gray-300 absolute top-1/2 -translate-y-1/2" style={{ left: `${(idx + 1) * 33.33 - 1}%` }}>
                    <LucideIcons.ArrowRight size={24} />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      <AyurvedaInfoSection content={content.therapies} />
      <AyurvedaInfoSection content={content.udwarthanamSteps} />

      {/* Section 3: Superfoods */}
      <section className="bg-[#F9F7F2] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-5xl mb-16 text-center"
          >
            {content.superfoods.title}
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {content.superfoods.items.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-10 rounded-2xl shadow-sm text-center"
              >
                <div className="w-12 h-12 bg-[#F9F7F2] rounded-full flex items-center justify-center mx-auto mb-6 text-[#1F5E4B]">
                  <LucideIcons.Leaf size={24} />
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">
                  {item.title}
                </h3>
                <p className="text-[#5F5F5F] leading-relaxed text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <button
              onClick={scrollToForm}
              className="bg-[#1F5E4B] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#164435] transition-all shadow-lg"
            >
              {content.hero.ctaButtons.primary.text}
            </button>
          </motion.div>
        </div>
      </section>
      <AyurvedaInfoSection content={content.sampleDay} />
      <AyurvedaInfoSection content={content.otherOptions} />

      {/* Section 4: FAQs */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-[48px] font-bold text-[#1A1A1A] mb-4 text-center"
          >
            {content.faqs.title}
          </motion.h2>

          <div className="space-y-4">
            {content.faqs.items.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-[#F9F7F2] rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-5 md:py-5 md:px-6 text-left"
                >
                  <span className="text-lg md:text-[20px] font-semibold text-[#1A1A1A] pr-8">{faq.question}</span>
                  <LucideIcons.ChevronDown
                    className={`text-[#1F5E4B] transition-transform shrink-0 ${openFaq === idx ? 'rotate-180' : ''}`}
                    size={20}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                    >
                      <div
                        className="p-6 pt-0 text-[#5F5F5F] leading-relaxed text-sm md:text-[16px] bg-white"
                        dangerouslySetInnerHTML={{ __html: faq.answer }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Clinical Weight Loss */}
      <section className="bg-[#F9F7F2] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-[48px] font-bold text-[#1A1A1A] mb-4 text-center"
          >
            {content.clinical.title}
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-lg md:text-[20px] leading-relaxed text-[#5F5F5F] mb-6">
                At <strong className="font-bold text-[#5F5F5F]">RamaCare Polyclinic</strong> in Jumeirah, we combine ancient Ayurvedic wisdom with modern diagnostic tools. Our practitioners conduct a full Prakriti and Vikriti assessment, review your lifestyle in the context of Dubai's unique climate, and design a personalized Ahara (diet) and Vihara (lifestyle) plan.
              </p>

              <div className="space-y-6 mb-10">
                {content.clinical.points.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-[#1F5E4B] mt-2.5 shrink-0" />
                    <p className="text-[#1A1A1A] text-base md:text-[18px]">
                      <strong className="font-bold text-[#1A1A1A]">{point.label}:</strong> {point.text}
                    </p>
                  </div>
                ))}
              </div>

              <button
                onClick={scrollToForm}
                className="bg-[#1F5E4B] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#164435] transition-all shadow-lg"
              >
                {content.clinical.cta}
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-3xl bg-[#F2EFE9] flex items-center justify-center shadow-xl overflow-hidden relative">
                {/* Image placeholder - replace src with your image */}
                <Image
                  src="/images/diet2.jpg"
                  alt="Clinical Weight Loss at RamaCare"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <AyurvedaInfoSection content={content.yourVisit} />
      {/* Section: Booking Form */}
      <section id="booking-form" className="bg-[#1F5E4B] py-16 md:py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-[48px] font-bold mb-4 leading-tight text-white"
          >
            {content.leadCapture.title}
          </motion.h2>
          <p className="text-lg md:text-[20px] text-[#F5F1EA]">
            {content.leadCapture.subtitle}
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl bg-white p-8 md:p-12 rounded-[32px] shadow-2xl text-[#1A1A1A]"
        >
          <form onSubmit={handleFormSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="space-y-2">
                <label className="text-sm font-bold ml-1">{content.leadCapture.form.fields.name}</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-4 rounded-xl bg-[#F5F5F5] border border-transparent focus:border-[#1F5E4B] focus:bg-white outline-none transition-all"
                  required
                />
              </div>
              <div className="space-y-2 text-left">
                <label className="text-sm font-bold ml-1">{content.leadCapture.form.fields.phone}</label>
                <input
                  type="tel"
                  placeholder="+971 XX XXX XXXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-4 rounded-xl bg-[#F5F5F5] border border-transparent focus:border-[#1F5E4B] focus:bg-white outline-none transition-all"
                  required
                />
              </div>
            </div>

            <div className="space-y-2 text-left">
              <label className="text-sm font-bold ml-1">{content.leadCapture.form.fields.email}</label>
              <input
                type="email"
                placeholder="yourname@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-4 rounded-xl bg-[#F5F5F5] border border-transparent focus:border-[#1F5E4B] focus:bg-white outline-none transition-all"
                required
              />
            </div>

            <div className="space-y-2 text-left">
              <label className="text-sm font-bold ml-1">{content.leadCapture.form.fields.goal}</label>
              <select
                value={formData.goal}
                onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                className="w-full px-4 py-4 rounded-xl bg-[#F5F5F5] border border-transparent focus:border-[#1F5E4B] focus:bg-white outline-none transition-all appearance-none cursor-pointer"
                required
              >
                <option value="">Select your goal</option>
                <option value="weight-loss">Weight loss</option>
                <option value="udwarthanam">Udwarthanam / therapies</option>
                <option value="diet">Diet plan</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="space-y-2 text-left">
              <label className="text-sm font-bold ml-1">{content.leadCapture.form.fields.time}</label>
              <select
                value={formData.time}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                className="w-full px-4 py-4 rounded-xl bg-[#F5F5F5] border border-transparent focus:border-[#1F5E4B] focus:bg-white outline-none transition-all appearance-none cursor-pointer"
                required
              >
                <option value="">Select preferred time</option>
                <option value="morning">Morning (10 AM - 1 PM)</option>
                <option value="afternoon">Afternoon (1 PM - 5 PM)</option>
                <option value="evening">After work (5 PM - 10 PM)</option>
              </select>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                type="submit"
                className="flex-1 bg-[#1F5E4B] text-white px-8 py-4 rounded-lg font-bold text-lg transition-all hover:opacity-80"
              >
                {content.leadCapture.form.buttons.confirm}
              </button>
              <a
                href={`https://wa.me/${content.hero.ctaButtons.secondary.phone}`}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="flex-1 bg-white text-[#1F5E4B] px-8 py-4 rounded-lg font-bold text-lg border-2 border-[#1F5E4B] transition-all flex items-center justify-center hover:opacity-80"
              >
                {content.leadCapture.form.buttons.whatsapp}
              </a>
            </div>
          </form>
        </motion.div>
      </section>

      {/* Related Reading */}
      <section className="bg-white py-16 md:py-24 border-t border-[#E9E2D6]/40">
        <div className="container mx-auto px-6 text-center max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-10">
            Related Ayurvedic Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
            <a href="/services/ayurvedic-diet-plan-dubai/" className="bg-[#F5F1EA] hover:bg-[#E9E2D6] p-6 rounded-2xl flex items-center justify-between transition-all group shadow-sm">
              <span className="font-bold text-[#1A1A1A] group-hover:text-[#1F5E4B]">Ayurvedic Diet Plan</span>
              <LucideIcons.ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#1F5E4B] transition-transform group-hover:translate-x-1" />
            </a>
            <a href="/services/ayurvedic-gut-health-dubai/" className="bg-[#F5F1EA] hover:bg-[#E9E2D6] p-6 rounded-2xl flex items-center justify-between transition-all group shadow-sm">
              <span className="font-bold text-[#1A1A1A] group-hover:text-[#1F5E4B]">Ayurvedic Gut Health</span>
              <LucideIcons.ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#1F5E4B] transition-transform group-hover:translate-x-1" />
            </a>
            <a href="/services/ayurvedic-diet-vs-keto-dubai/" className="bg-[#F5F1EA] hover:bg-[#E9E2D6] p-6 rounded-2xl flex items-center justify-between transition-all group shadow-sm">
              <span className="font-bold text-[#1A1A1A] group-hover:text-[#1F5E4B]">Ayurvedic Diet vs Keto</span>
              <LucideIcons.ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#1F5E4B] transition-transform group-hover:translate-x-1" />
            </a>
            <a href="/services/ayurvedic-diet-vs-intermittent-fasting-dubai/" className="bg-[#F5F1EA] hover:bg-[#E9E2D6] p-6 rounded-2xl flex items-center justify-between transition-all group shadow-sm">
              <span className="font-bold text-[#1A1A1A] group-hover:text-[#1F5E4B]">Ayurvedic Diet vs Intermittent Fasting</span>
              <LucideIcons.ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#1F5E4B] transition-transform group-hover:translate-x-1" />
            </a>
            <a href="/services/ayurvedic-diet-pcos-dubai/" className="bg-[#F5F1EA] hover:bg-[#E9E2D6] p-6 rounded-2xl flex items-center justify-between transition-all group shadow-sm">
              <span className="font-bold text-[#1A1A1A] group-hover:text-[#1F5E4B]">Ayurvedic Diet for PCOS</span>
              <LucideIcons.ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#1F5E4B] transition-transform group-hover:translate-x-1" />
            </a>
            <a href="/services/panchakarma-treatment-dubai/" className="bg-[#F5F1EA] hover:bg-[#E9E2D6] p-6 rounded-2xl flex items-center justify-between transition-all group shadow-sm">
              <span className="font-bold text-[#1A1A1A] group-hover:text-[#1F5E4B]">Panchakarma Treatment</span>
              <LucideIcons.ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#1F5E4B] transition-transform group-hover:translate-x-1" />
            </a>
            <a href="/services/eximia-body-contouring-dubai/" className="bg-[#F5F1EA] hover:bg-[#E9E2D6] p-6 rounded-2xl flex items-center justify-between transition-all group shadow-sm">
              <span className="font-bold text-[#1A1A1A] group-hover:text-[#1F5E4B]">Eximia Body Contouring</span>
              <LucideIcons.ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#1F5E4B] transition-transform group-hover:translate-x-1" />
            </a>
            <a href="/services/ayurveda-dubai/" className="bg-[#F5F1EA] hover:bg-[#E9E2D6] p-6 rounded-2xl flex items-center justify-between transition-all group shadow-sm">
              <span className="font-bold text-[#1A1A1A] group-hover:text-[#1F5E4B]">Ayurvedic Clinic in Dubai</span>
              <LucideIcons.ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#1F5E4B] transition-transform group-hover:translate-x-1" />
            </a>
            <a href="/services/ayurvedic-detox-diet-plan-dubai/" className="bg-[#F5F1EA] hover:bg-[#E9E2D6] p-6 rounded-2xl flex items-center justify-between transition-all group shadow-sm">
              <span className="font-bold text-[#1A1A1A] group-hover:text-[#1F5E4B]">Ayurvedic Detox Diet</span>
              <LucideIcons.ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#1F5E4B] transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>

      <ContentReviewBadge doctorName="Dr. Shamna Keloth Meethal" pageSlug="ayurvedic-diet-weight-loss-dubai" lastReviewed="2026-01-12" />

      {/* Sticky Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#1F5E4B] text-white py-4 px-6 z-50 shadow-2xl">
        <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="font-bold text-lg">Ayurvedic weight loss consultation in Jumeirah 1</p>
            <p className="text-xs text-white/70">Open daily 10am–10pm</p>
          </div>
          <div className="flex gap-4">
            <button
              onClick={scrollToForm}
              className="bg-white text-[#1F5E4B] px-6 py-2.5 rounded-lg font-bold text-sm hover:bg-gray-100 transition-all"
            >
              Book Now
            </button>
            <a
              href={`https://wa.me/${content.hero.ctaButtons.secondary.phone}`}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="bg-transparent text-white px-6 py-2.5 rounded-lg font-bold text-sm border-2 border-white/30 hover:bg-white/10 transition-all flex items-center justify-center"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
