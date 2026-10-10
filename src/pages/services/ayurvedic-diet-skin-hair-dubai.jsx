import React, { useState } from 'react';
import Layout from '../../../components/Layout';
import Head from "next/head";
import Link from 'next/link';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { useToast } from '../../../components/Toast';
import AyurvedaInfoSection from '../../../components/AyurvedaInfoSection'; 
import ContentReviewBadge from '../../../components/ContentReviewBadge';

const content = {
  hero: {
   title: 'Ayurvedic Diet for Healthy Skin and Hair in Dubai',
    mainDescription: 'Hair and skin reflect what you eat and digest. Ayurveda sees hair as a by-product of Asthi Dhatu (bone tissue) and links most skin and hair problems in Dubai\'s heat to aggravated Pitta. This guide from RamaCare Polyclinic in Jumeirah 1 covers foods for your dosha, the nutrients hair and skin need, what to limit, and when to check your blood levels with our GP.',
    summaryBox: {
      title: 'Can Diet Help Hair Fall and Dull Skin in Dubai?',
      description: 'Diet is one part of the picture. Hair needs enough protein, iron, zinc and vitamin D, and skin needs healthy fats, water and vitamin C. In Ayurveda, cooling, Pitta-balancing food, amla, curry leaves and a little ghee are traditionally used for hair and skin. Hard water and sun affect the outside, but low iron, vitamin D or thyroid problems are common hidden causes of hair fall, so it is worth a blood test with our GP. Changes in hair are gradual and take months, not weeks.'
    },
    ctaButtons: {
      primary: { text: 'Book a Skin & Hair Diet Consultation' },
      secondary: { text: 'WhatsApp Consultation', phone: '971566597878' }
    },
    image: '/images/ayurvedic-skin-hair-treatment-dubai.jpg'
  },
  dubaiFactors: {
    title: 'Dubai Factors That Affect Skin and Hair',
    description: 'At RamaCare Polyclinic, we\'ve identified three specific local triggers that an Ayurvedic diet can neutralize:',
    items: [
      { title: 'Hard, Desalinated Water', description: 'Hard water can leave hair dry and the scalp flaky. It affects the outside of the hair; diet and gentle hair care work together.', icon: 'Droplets' },
      { title: 'Sun, Heat and Pool Chlorine', description: 'Strong sun, heat and chlorine dry the skin and scalp; in Ayurveda they aggravate Pitta, linked to redness, breakouts and early greying.', icon: 'Sun' },
      { title: 'Low Vitamin D and Iron', description: 'Despite the sunshine, low vitamin D is common in the UAE because many people spend most of the day indoors; low iron is also common, especially in women. Both are linked to hair fall and are easy to check with a blood test.', icon: 'TestTube' },
      { title: 'Air-Conditioning and Busy Routines', description: 'Long hours in cool, dry air and quick processed meals leave skin dry and diets low in protein and fresh food.', icon: 'Wind' }
    ]
  },
  glowGrow: {
    title: 'What to Eat for Healthy Skin and Hair',
    subtitle: 'Ayurveda nourishes Rasa, Rakta and Asthi Dhatu (plasma, blood and bone tissue), which it links to skin and hair. In everyday terms, that means:',
    favor: {
      title: 'Foods to Favour',
      intro: 'Fresh, home-cooked versions are best:',
      items: [
        { title: 'Protein at Every Meal', description: 'Hair is made of protein (keratin). Include lentils and mung dal, milk or yoghurt, paneer, eggs, fish or chicken, as your diet allows.', icon: 'Egg' },
        { title: 'Iron- and Zinc-Rich Foods', description: 'Spinach and other leafy greens, lentils, pumpkin and sesame seeds, dates and raisins; pair them with vitamin C foods to help absorb iron.', icon: 'Leaf' },
        { title: 'Amla and Vitamin C Fruits', description: 'Amla (Indian gooseberry), oranges and pomegranate are rich in vitamin C, which skin needs to make collagen. Amla is traditionally valued in Ayurveda for hair.', icon: 'Citrus' },
        { title: 'Healthy Fats', description: 'A small spoon of ghee, nuts, sesame and coconut, traditionally used in Ayurveda for dry skin and hair, especially for Vata types.', icon: 'Droplet' },
        { title: 'Curry Leaves, Coconut and Methi', description: 'Curry leaves, fresh coconut and fenugreek (methi) are traditional South Indian foods for hair, easy to add to daily cooking.', icon: 'Sprout' },
        { title: 'Cooling Foods in Summer', description: 'Cucumber, coconut water, sweet ripe fruit and buttermilk help balance Pitta in the Dubai heat.', icon: 'Snowflake' }
      ]
    },
   avoid: {
      title: 'Foods to Limit',
      items: [
        { title: 'Very Spicy, Salty and Fried Food', description: 'These aggravate Pitta in Ayurveda, which is linked to oily, breakout-prone skin, scalp irritation and early greying.', icon: 'Flame' },
        { title: 'Sugar, Sugary Drinks and Refined Flour', description: 'High-sugar diets are linked to acne in many people; Ayurveda sees them as heavy and Kapha-increasing.', icon: 'Candy' },
        { title: 'Excess Fermented and Sour Food', description: 'Large amounts of vinegar, pickles and very sour food can aggravate Pitta and may worsen eczema in the heat.', icon: 'AlertCircle' },
        { title: 'Crash Diets', description: 'Very low-calorie or low-protein diets are a common cause of hair shedding a few months later.', icon: 'TrendingDown' }
      ]
    }
  },
  dubaiScalp: {
    title: 'Ayurvedic Herbs Used for Skin and Hair',
    image: '/images/diet.jpg',
    items: [
      { title: 'Amla', description: 'Indian gooseberry, eaten fresh, as juice or in classical preparations; traditionally used in Ayurveda for hair and to balance Pitta.', icon: 'Citrus' },
      { title: 'Bhringraj', description: 'Traditionally called the "king of hair" in Ayurveda; used as an oil on the scalp or, if suitable, as a medicine prescribed by the doctor.', icon: 'Leaf' },
      { title: 'Brahmi', description: 'Traditionally used for the scalp and to calm the mind, which matters when stress is linked to hair fall.', icon: 'Brain' }
    ],
    note: 'Herbs are prescribed by Dr. Shamna according to your health and any other medicines you take; do not self-medicate.'
  },

  // In the content object:
doshaTable: {
  id: 'skin-hair-by-dosha',
  heading: 'Skin and Hair Foods by Dosha',
  table: [
    ['Vata (dry skin, dry or frizzy hair)', 'Favour warm, cooked, slightly oily food, ghee, nuts, sesame, soups and sweet ripe fruit. Limit raw salads, dry snacks and cold drinks.'],
    ['Pitta (sensitive, red or breakout-prone skin; early greying or thinning)', 'Favour cooling food: cucumber, leafy greens, coconut, sweet fruit, mung dal, rice, a little ghee. Limit very spicy, sour, salty and fried food.'],
    ['Kapha (oily skin, oily scalp, dandruff)', 'Favour lighter, warm, spiced food, vegetables, lentils and barley. Limit sweets, heavy dairy and fried food.']
  ],
  note: 'Not sure of your dosha? Take our dosha test (/services/prakriti-dosha-assessment-dubai/#dosha-quiz).'
},
bloodTests: {
  id: 'blood-tests',
  heading: 'Check Your Blood Levels: Common Hidden Causes of Hair Fall',
  intro: 'Diet works best once medical causes are ruled out. Our GP in the same building can arrange tests for:',
  items: [
    { text: 'iron stores (ferritin) and a blood count' },
    { text: 'vitamin D' },
    { text: 'vitamin B12' },
    { text: 'thyroid function' }
  ],
  note: 'For sudden or patchy hair loss, scalp disease or severe acne, see our dermatologist. Hair loss with irregular periods, acne or excess hair can be linked to PCOS (/services/pcos-treatment-dubai/).'
},
sampleDay: {
  id: 'sample-day',
  heading: 'Sample Day for Healthy Skin and Hair (Pitta, Dubai Summer)',
  intro: 'An example only. Your plan is made for your dosha and health.',
  table: [
    ['Breakfast', 'Oats with milk, soaked almonds and dates, or two eggs with toast'],
    ['Mid-morning', 'Fresh amla or an orange, or coconut water'],
    ['Lunch', 'Rice or chapati, mung dal, a leafy green vegetable with curry leaves, cucumber raita, a little ghee'],
    ['Afternoon', 'A handful of pumpkin and sunflower seeds'],
    ['Dinner (early)', 'Vegetable soup with paneer or fish, and lightly cooked vegetables'],
    ['Through the day', 'Room-temperature water; limit sugary drinks and very spicy snacks']
  ]
},
yourVisit: {
  id: 'your-visit',
  heading: 'Your Skin and Hair Diet Consultation in Jumeirah 1',
  table: [
    ['Ayurvedic doctor', 'Dr. Shamna Keloth Meethal, BAMS, female, DHA-licensed (11+ years)'],
    ['Also in the building', 'Female GP for blood tests; dermatologist for medical skin and hair conditions'],
    ['Consultation', 'From AED 200, 45–60 minutes'],
    ['Address', '12 Al Dhiyafah Road, Jumeirah Terrace Building, Ground Floor, Jumeirah 1, Dubai'],
    ['Nearby', 'A few minutes from Satwa and Al Wasl; about 10 minutes from Jumeirah 2, City Walk and La Mer'],
    ['Hours', 'Every day, 10am–10pm']
  ]
},
  paa: {
    title: 'Skin and Hair Diet: Frequently Asked Questions',
    items: [
      { question: 'What is the best Ayurvedic diet for hair fall and hair growth?', answer: 'A diet with enough protein (dal, dairy, eggs or fish), iron- and zinc-rich foods (leafy greens, lentils, seeds, dates), amla and curry leaves, a little ghee, and cooling, Pitta-balancing food in the heat. Your plan is adjusted to your dosha.' },
      { question: 'Which foods should I avoid for hair fall?', answer: 'Very spicy, salty and fried food, too much sugar, and crash diets. Very low-calorie or low-protein diets are a common cause of hair shedding.' },
      { question: 'What should I eat for glowing skin, by dosha?', answer: 'Vata (dry skin): warm, cooked, slightly oily food and healthy fats. Pitta (sensitive, breakout-prone skin): cooling, sweet and bitter foods; less spicy and sour food. Kapha (oily skin): lighter, warm, less sugary and fried food.' },
      { question: 'Can diet help acne?', answer: 'For some people, cutting sugary drinks, sweets and very oily food helps. Ayurveda links acne to Pitta and Kapha. Persistent or scarring acne should be seen by our dermatologist.' },
      { question: 'Does Dubai\'s hard water cause hair fall?', answer: 'Hard water can make hair dry and the scalp flaky, but it is rarely the main cause of hair fall. Low iron, low vitamin D, thyroid problems, stress, PCOS and genetics are more common causes.' },
      { question: 'Can low vitamin D or iron cause hair fall?', answer: 'Both are linked to hair shedding, and low vitamin D is common in the UAE. Our GP can arrange blood tests for iron (ferritin), vitamin D, B12 and thyroid.' },
      { question: 'Will diet help if I already use a shower filter?', answer: 'Yes. A filter helps the outside of the hair; diet supports the nutrients hair and skin need. They work best together.' },
      { question: 'How long before I see a change?', answer: 'Hair grows slowly, so changes in hair fall usually take three months or more; skin may respond sooner. Experiences vary, and the doctor reviews your progress.' },
      { question: 'Which Ayurvedic herbs help skin and hair?', answer: 'Amla, Bhringraj and Brahmi are commonly used. Dr. Shamna prescribes them according to your health; do not self-medicate.' },
      { question: 'Should I take biotin or hair supplements?', answer: 'Only if a deficiency is found or your doctor advises it. Many hair supplements are unnecessary, and biotin can affect some blood test results.' },
      { question: 'Do I need a dermatologist or an Ayurvedic doctor?', answer: 'See our dermatologist for sudden or patchy hair loss, scalp disease or severe acne. For diet and Ayurvedic care, see Dr. Shamna. Both are in the same Jumeirah 1 building.' },
      { question: 'How much does a skin and hair diet consultation cost?', answer: 'A consultation with Dr. Shamna starts from AED 200 and takes 45–60 minutes. Blood tests, if needed, are arranged by our GP and priced separately.' },
      { question: 'Where can I get an Ayurvedic skin and hair diet plan near Jumeirah 1?', answer: 'At RamaCare Polyclinic, 12 Al Dhiyafah Road, Jumeirah Terrace Building, Ground Floor, Jumeirah 1, Dubai, a few minutes from Satwa and Al Wasl and about 10 minutes from Jumeirah 2, City Walk and La Mer. Open every day, 10am–10pm.' }
    ]
  },
  whyLeader: {
    title: 'Why Patients Choose RamaCare for Skin and Hair',
    items: [
      { title: 'Ayurveda, GP and Dermatology in One Building', description: 'Dr. Shamna (BAMS) plans your diet; our GP can check iron, vitamin D, B12 and thyroid; our dermatologist sees medical skin and hair conditions.', icon: 'Building2' },
      { title: 'Female Doctors', description: 'Our Ayurvedic doctor and GP are both female, which many women prefer for hair, skin and PCOS concerns.', icon: 'UserCheck' },
      { title: 'Scalp and Skin Therapies', description: 'If needed, add Ayurvedic hair fall care (Shiro Abhyanga, Shirolepa) or Ayurvedic skin treatment, with a therapist of your own gender.', icon: 'Sparkles' }
    ]
  },
  ctaFinal: {
    title: "Look After Your Skin and Hair From the Inside",
    subtitle: "Book a consultation with Dr. Shamna in Jumeirah 1, from AED 200, for a diet plan for your dosha, and blood tests through our GP if needed.",
    buttons: {
      appointment: "Book Appointment",
      whatsapp: "WhatsApp Instantly"
    },
    form: {
      submitText: "Book Your Beauty Consultation in Jumeirah Today"
    }
  }
};

export default function AyurvedicDietSkinHairDubaiPage() {
  const { showToast, ToastComponent } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    concern: 'hair',
    preferredTime: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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
      "@id": "https://ramacarepolyclinic.ae/services/ayurvedic-diet-skin-hair-dubai/#webpage",
      "url": "https://ramacarepolyclinic.ae/services/ayurvedic-diet-skin-hair-dubai/",
      "name": "Ayurvedic Diet for Skin & Hair Dubai | Foods for Hair Fall",
      "inLanguage": "en-AE",
      "about": { "@id": "https://ramacarepolyclinic.ae/services/ayurvedic-diet-skin-hair-dubai/#diet" },
      "isPartOf": { "@id": "https://ramacarepolyclinic.ae/services/ayurveda-dubai/#webpage" },
      "reviewedBy": { "@id": "https://ramacarepolyclinic.ae/doctors/dr-shamna-keloth-meethal-ayurveda-doctor-dubai/#physician" },
      "lastReviewed": "YYYY-MM-DD",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ramacarepolyclinic.ae/" },
          { "@type": "ListItem", "position": 2, "name": "Ayurveda", "item": "https://ramacarepolyclinic.ae/services/ayurveda-dubai/" },
          { "@type": "ListItem", "position": 3, "name": "Ayurvedic Diet for Skin & Hair", "item": "https://ramacarepolyclinic.ae/services/ayurvedic-diet-skin-hair-dubai/" }
        ]
      }
    },
    {
      "@type": "Diet",
      "@id": "https://ramacarepolyclinic.ae/services/ayurvedic-diet-skin-hair-dubai/#diet",
      "name": "Ayurvedic diet for skin and hair",
      "alternateName": ["Ayurvedic diet for hair fall", "Ayurvedic diet for glowing skin", "Foods for hair growth Ayurveda", "Pitta-balancing diet for skin"],
      "description": "Dosha-based Ayurvedic eating guidance for skin and hair from RamaCare Polyclinic, Jumeirah 1, Dubai: protein, iron, zinc and healthy fats, cooling foods for Pitta, foods to limit, and blood tests through the GP for iron, vitamin D, B12 and thyroid when hair fall is a concern.",
      "dietFeatures": "Foods by dosha (Vata, Pitta, Kapha); adequate protein; iron- and zinc-rich foods; amla and curry leaves; limiting very spicy, fried, salty and sugary food",
      "expertConsiderations": "Hair fall and skin problems can have medical causes such as iron or vitamin D deficiency, thyroid problems, PCOS or skin disease; these should be checked by a doctor.",
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
    const message = encodeURIComponent("Hello RamaCare, I'm interested in the Ayurvedic Diet for Skin & Hair. Please help me book a consultation.");
    window.open(`https://wa.me/${content.hero.ctaButtons.secondary.phone}?text=${message}`, '_blank');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!formData.name || !formData.phone || !formData.email) {
      showToast('Please fill in all required fields (Name, Phone, and Email)', 'error');
      return;
    }

    setIsSubmitting(true);

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
          preferredTime: formData.preferredTime,
          concern: formData.concern,
          source: 'ayurvedic-diet-skin-hair-dubai'
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        showToast('Appointment request submitted successfully! We will contact you soon.', 'success');
        setFormData({
          name: '',
          phone: '',
          email: '',
          concern: 'hair',
          preferredTime: ''
        });
      } else {
        showToast(result.message || 'Failed to submit appointment. Please try again or contact us directly.', 'error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      showToast('An error occurred. Please try again later.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToForm = () => {
    const formSection = document.getElementById('booking-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <Layout>
      {ToastComponent}
      <Head>
        <title key="title">Ayurvedic Diet for Skin & Hair Dubai | Foods for Hair Fall</title>
        <meta name="description" content="Ayurvedic diet for healthy skin and hair in Jumeirah 1, Dubai: foods by dosha, key nutrients, foods to avoid, and blood tests via our GP. From AED 200." key="description" />
        <meta name="robots" content="index, follow" key="robots" />
        <link rel="canonical" href="https://ramacarepolyclinic.ae/services/ayurvedic-diet-skin-hair-dubai/" key="canonical" />

        {/* Open Graph Tags */}
        <meta property="og:type" content="website" key="og:type" />
        <meta property="og:title" content="Ayurvedic Diet for Skin & Hair Dubai | Foods for Hair Fall" key="og:title" />
        <meta property="og:description" content="Ayurvedic diet for healthy skin and hair in Jumeirah 1, Dubai: foods by dosha, key nutrients, foods to avoid, and blood tests via our GP. From AED 200." key="og:description" />
        <meta property="og:url" content="https://ramacarepolyclinic.ae/services/ayurvedic-diet-skin-hair-dubai/" key="og:url" />
        <meta property="og:image" content="https://ramacarepolyclinic.ae/images/ayurvedic-diet-skin-hair-dubai-og.jpg" key="og:image" />
        <meta property="og:image:width" content="1200" key="og:image:width" />
        <meta property="og:image:height" content="630" key="og:image:height" />
        <meta property="og:image:alt" content="Ayurvedic diet for healthy skin and hair from RamaCare Polyclinic, Jumeirah 1, Dubai" key="og:image:alt" />
        <meta property="og:site_name" content="RamaCare Polyclinic" key="og:site_name" />
        <meta property="og:locale" content="en_AE" key="og:locale" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content="Ayurvedic Diet for Skin & Hair Dubai | Foods for Hair Fall" key="twitter:title" />
        <meta name="twitter:description" content="Ayurvedic diet for healthy skin and hair in Jumeirah 1, Dubai: foods by dosha, key nutrients, foods to avoid, and blood tests via our GP. From AED 200." key="twitter:description" />
        <meta name="twitter:image" content="https://ramacarepolyclinic.ae/images/ayurvedic-diet-skin-hair-dubai-og.jpg" key="twitter:image" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaGraph)
          }}
        />
      </Head>

      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-[#F5F1EA] px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          {/* Breadcrumbs */}
          <nav className="flex flex-wrap items-center gap-y-1.5 text-xs font-semibold text-[#5F5F5F] mb-6 tracking-wider">
            <a href="/" className="hover:text-[#1F5E4B] transition-colors">Home</a>
            <span className="mx-2">/</span>
            <a href="/services/ayurveda-dubai/" className="hover:text-[#1F5E4B] transition-colors">Ayurveda</a>
            <span className="mx-2">/</span>
            <span className="text-gray-400">Ayurvedic Diet for Skin & Hair</span>
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
              <p className="mb-8 text-lg leading-relaxed text-[#5F5F5F]">
                {content.hero.mainDescription}
              </p>

              <div className="mb-10 rounded-2xl p-6 sm:p-8 bg-[#E9E2D6] space-y-4">
                <h3 className="text-xl font-bold text-[#1A1A1A]">
                  {content.hero.summaryBox.title}
                </h3>
                <p className="text-base leading-relaxed text-[#1A1A1A]">
                  {content.hero.summaryBox.description}
                </p>
                <p className="text-sm leading-relaxed text-[#5F5F5F] pt-1">
                  Part of our <Link href="/services/ayurvedic-diet-plan-dubai/" className="text-[#1F5E4B] underline font-semibold hover:text-[#16493a]">Ayurvedic diet plan in Dubai</Link> guides: see foods for your dosha and diet plans for other health goals.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={scrollToForm}
                  className="bg-[#1F5E4B] text-white px-10 py-4 rounded-full hover:bg-[#16493a] transition-all duration-300 hover:shadow-xl flex items-center justify-center gap-2 font-bold text-center"
                >
                  {content.hero.ctaButtons.primary.text}
                </button>
                <button
                  onClick={handleWhatsAppClick}
                  className="border-2 border-[#1F5E4B] text-[#1F5E4B] px-10 py-4 rounded-full hover:bg-[#1F5E4B] hover:text-white transition-all duration-300 flex items-center justify-center gap-2 font-bold"
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
              <div className="aspect-[4/3] w-full relative overflow-hidden rounded-[2.5rem] shadow-2xl">
                <img
                  src={content.hero.image}
                  alt="Ayurvedic Treatment for Skin and Hair"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Dubai Factors Section */}
      <section className="bg-white px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="mb-6 text-4xl lg:text-5xl font-bold text-[#1A1A1A]">
              {content.dubaiFactors.title}
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-[#5F5F5F]">
              {content.dubaiFactors.description}
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {content.dubaiFactors.items.map((item, idx) => {
              const Icon = LucideIcons[item.icon];
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-[#F5F1EA] p-8 rounded-2xl flex flex-col items-center space-y-4 transition-all duration-300 hover:shadow-xl"
                >
                  <div className="text-[#1F5E4B]">
                    <Icon size={48} />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1A1A1A] text-center">
                    {item.title}
                  </h3>
                  <p className="text-[#5F5F5F] leading-relaxed text-center">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
        <AyurvedaInfoSection content={content.doshaTable} />  
        <AyurvedaInfoSection content={content.sampleDay} />
      {/* 3. Glow & Grow Section */}
      <section className="bg-[#F5F1EA] px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center space-y-4"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A]">
              {content.glowGrow.title}
            </h2>
            <p className="text-lg sm:text-xl max-w-3xl mx-auto text-[#5F5F5F]">
              {content.glowGrow.subtitle}
            </p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Foods to Favor */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 lg:p-10 shadow-lg flex flex-col h-full"
            >
              <div className="mb-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-[#1F5E4B] mb-2">
                  {content.glowGrow.favor.title}
                </h3>
                <p className="text-sm text-[#5F5F5F]">
                  {content.glowGrow.favor.intro}
                </p>
              </div>
              <div className="space-y-6">
                {content.glowGrow.favor.items.map((item, idx) => {
                  const Icon = LucideIcons[item.icon] || LucideIcons.Check;
                  return (
                    <div key={idx} className="flex gap-4">
                      <div className="flex-shrink-0 mt-1">
                        <div className="bg-[#1F5E4B] text-white p-1 rounded-full">
                          <Icon size={16} />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold text-[#1A1A1A] mb-1 text-lg">{item.title}</h4>
                        <p className="text-[#5F5F5F] leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Foods to Avoid */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 lg:p-10 shadow-lg flex flex-col h-full"
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] mb-8">
                {content.glowGrow.avoid.title}
              </h3>
              <div className="space-y-6">
                {content.glowGrow.avoid.items.map((item, idx) => {
                  const Icon = LucideIcons[item.icon] || LucideIcons.XCircle;
                  return (
                    <div key={idx} className="flex gap-4">
                      <div className="flex-shrink-0 mt-1">
                        <div className="bg-[#5F5F5F]/10 text-[#5F5F5F] p-1 rounded-full">
                          <Icon size={16} />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold text-[#1A1A1A] mb-1 text-lg">{item.title}</h4>
                        <p className="text-[#5F5F5F] leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Dubai Scalp Section */}
      <section className="bg-white px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center text-4xl lg:text-5xl font-bold text-[#1A1A1A]"
          >
            {content.dubaiScalp.title}
          </motion.h2>

          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-video w-full relative overflow-hidden rounded-[2.5rem] shadow-xl">
                <img
                  src={content.dubaiScalp.image}
                  alt="Ayurvedic Secrets for Dubai Scalp"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <div className="space-y-6">
              {content.dubaiScalp.items.map((item, idx) => {
                const Icon = LucideIcons[item.icon] || LucideIcons.Leaf;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-[#F5F1EA] p-6 lg:p-8 rounded-2xl flex items-center gap-6 group hover:bg-[#E9E2D6] transition-colors duration-300"
                  >
                    <div className="bg-[#1F5E4B] text-white p-3 rounded-full flex-shrink-0">
                      <Icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#1A1A1A] mb-1">{item.title}</h3>
                      <p className="text-[#5F5F5F] leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                );
              })}

              {content.dubaiScalp.note && (
                <div className="p-4 bg-[#FAF9F6] rounded-xl border border-[#E9E2D6] text-sm text-[#5F5F5F] italic">
                  <p>{content.dubaiScalp.note}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <AyurvedaInfoSection content={content.bloodTests} />
      {/* 5. PAA Section */}
      <section className="bg-[#F5F1EA] px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A]">
              {content.paa.title}
            </h2>
          </motion.div>

          <div className="space-y-4">
            {content.paa.items.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="rounded-2xl bg-white shadow-sm overflow-hidden"
              >
                <details className="group">
                  <summary className="flex cursor-pointer items-center justify-between px-6 py-5 list-none hover:bg-gray-50 transition-all duration-300">
                    <span className="text-lg font-bold text-[#1A1A1A] pr-4">
                      {item.question}
                    </span>
                    <span className="transition-transform duration-300 group-open:rotate-180">
                      <LucideIcons.ChevronDown size={24} className="text-[#1F5E4B]" />
                    </span>
                  </summary>
                  <div className="px-6 pb-5 text-base leading-relaxed text-[#5F5F5F] bg-white border-t border-gray-100">
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

      {/* 6. Why Leader Section */}
      <section className="bg-white px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A]">
              {content.whyLeader.title}
            </h2>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {content.whyLeader.items.map((item, idx) => {
              const Icon = LucideIcons[item.icon];
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-[#F5F1EA] p-8 rounded-2xl flex flex-col items-center text-center space-y-4 transition-all duration-300 hover:shadow-xl"
                >
                  <div className="text-[#1F5E4B]">
                    <Icon size={40} />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1A1A1A]">
                    {item.title}
                  </h3>
                  <p
                    className="text-[#5F5F5F] leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    <AyurvedaInfoSection content={content.yourVisit} />
      {/* 7. Final CTA Section */}
      <section className="bg-[#1F5E4B] px-4 sm:px-6 lg:px-8 py-16 lg:py-24 text-center">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 max-w-4xl mx-auto leading-tight">
              {content.ctaFinal.title}
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
              {content.ctaFinal.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <button
                onClick={scrollToForm}
                className="bg-white text-[#1F5E4B] px-10 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 font-bold flex items-center justify-center gap-2"
              >
                <LucideIcons.Calendar className="w-5 h-5" />
                {content.ctaFinal.buttons.appointment}
              </button>
              <button
                onClick={handleWhatsAppClick}
                className="border-2 border-white text-white px-10 py-4 rounded-full hover:bg-white/10 transition-all duration-300 font-bold flex items-center justify-center gap-2"
              >
                <LucideIcons.MessageCircle className="w-5 h-5" />
                {content.ctaFinal.buttons.whatsapp}
              </button>
            </div>
          </motion.div>

          {/* Form Container */}
          <motion.div
            id="booking-form"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-[2.5rem] p-8 lg:p-12 shadow-2xl max-w-4xl mx-auto text-left"
          >
            <form className="grid gap-6 md:grid-cols-2" onSubmit={handleSubmit}>
              <div className="flex flex-col">
                <label className="text-sm font-bold text-[#1A1A1A] mb-2 px-1">Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your name"
                  className="bg-[#F5F1EA] border-none rounded-xl p-4 text-[#1A1A1A] focus:ring-2 focus:ring-[#1F5E4B] transition-all outline-none"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-bold text-[#1A1A1A] mb-2 px-1">Phone *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+971..."
                  className="bg-[#F5F1EA] border-none rounded-xl p-4 text-[#1A1A1A] focus:ring-2 focus:ring-[#1F5E4B] transition-all outline-none"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-bold text-[#1A1A1A] mb-2 px-1">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com"
                  className="bg-[#F5F1EA] border-none rounded-xl p-4 text-[#1A1A1A] focus:ring-2 focus:ring-[#1F5E4B] transition-all outline-none"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-bold text-[#1A1A1A] mb-2 px-1">Concern</label>
                <select
                  name="concern"
                  value={formData.concern}
                  onChange={handleInputChange}
                  className="bg-[#F5F1EA] border-none rounded-xl p-4 text-[#1A1A1A] focus:ring-2 focus:ring-[#1F5E4B] transition-all outline-none appearance-none cursor-pointer"
                >
                  <option value="hair">Hair</option>
                  <option value="skin">Skin</option>
                  <option value="both">Both</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-bold text-[#1A1A1A] mb-2 px-1">Preferred Time</label>
                <input
                  type="text"
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleInputChange}
                  placeholder="e.g., Morning, Afternoon"
                  className="bg-[#F5F1EA] border-none rounded-xl p-4 text-[#1A1A1A] focus:ring-2 focus:ring-[#1F5E4B] transition-all outline-none"
                />
              </div>
              <div className="md:col-span-2 mt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#1F5E4B] text-white rounded-full py-5 font-bold text-lg hover:bg-[#16493a] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : content.ctaFinal.form.submitText}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Related Services */}
      <section className="bg-white py-16 md:py-24 border-t border-[#E9E2D6]/40">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-10">
            Related Ayurvedic Therapies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
            <a href="/services/ayurvedic-hairfall-treatment-dubai/" className="bg-[#F5F1EA] hover:bg-[#E9E2D6] p-6 rounded-2xl flex items-center justify-between transition-all group shadow-sm">
              <span className="font-bold text-[#1A1A1A] group-hover:text-[#1F5E4B] text-sm">Ayurvedic Hair Fall Treatment</span>
              <LucideIcons.ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#1F5E4B] transition-transform group-hover:translate-x-1" />
            </a>
            <a href="/services/skin-diseases-treatment-dubai/" className="bg-[#F5F1EA] hover:bg-[#E9E2D6] p-6 rounded-2xl flex items-center justify-between transition-all group shadow-sm">
              <span className="font-bold text-[#1A1A1A] group-hover:text-[#1F5E4B] text-sm">Ayurvedic Skin Treatment</span>
              <LucideIcons.ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#1F5E4B] transition-transform group-hover:translate-x-1" />
            </a>
            <a href="/services/pcos-treatment-dubai/" className="bg-[#F5F1EA] hover:bg-[#E9E2D6] p-6 rounded-2xl flex items-center justify-between transition-all group shadow-sm">
              <span className="font-bold text-[#1A1A1A] group-hover:text-[#1F5E4B] text-sm">Ayurvedic PCOS Treatment</span>
              <LucideIcons.ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#1F5E4B] transition-transform group-hover:translate-x-1" />
            </a>
            <a href="/services/ayurvedic-diet-plan-dubai/" className="bg-[#F5F1EA] hover:bg-[#E9E2D6] p-6 rounded-2xl flex items-center justify-between transition-all group shadow-sm">
              <span className="font-bold text-[#1A1A1A] group-hover:text-[#1F5E4B] text-sm">Ayurvedic Diet Plan</span>
              <LucideIcons.ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#1F5E4B] transition-transform group-hover:translate-x-1" />
            </a>
            <a href="/services/ayurvedic-gut-health-dubai/" className="bg-[#F5F1EA] hover:bg-[#E9E2D6] p-6 rounded-2xl flex items-center justify-between transition-all group shadow-sm">
              <span className="font-bold text-[#1A1A1A] group-hover:text-[#1F5E4B] text-sm">Ayurvedic Gut Health</span>
              <LucideIcons.ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#1F5E4B] transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>

      <ContentReviewBadge doctorName="Dr. Shamna Keloth Meethal" pageSlug="ayurvedic-diet-skin-hair-dubai" lastReviewed="2026-01-12" />

      {/* Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#1F5E4B] py-4 px-4 sm:px-6 shadow-2xl transition-all">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 flex-col sm:flex-row text-center sm:text-left">
          <p className="text-white font-medium text-lg">Ready to restore your natural radiance?</p>
          <button
            onClick={scrollToForm}
            className="whitespace-nowrap rounded-full bg-white px-8 py-3 text-base font-bold text-[#1F5E4B] transition-all hover:bg-gray-100 flex items-center gap-2"
          >
            <LucideIcons.Calendar className="w-5 h-5" />
            Book Now
          </button>
        </div>
      </div>
    </Layout>
  );
}
