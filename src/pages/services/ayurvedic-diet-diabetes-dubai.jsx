import React, { useState } from 'react';
import Layout from '../../../components/Layout';
import Head from "next/head";
import Image from 'next/image';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { useToast } from '../../../components/Toast';
import ContentReviewBadge from '../../../components/ContentReviewBadge';
import AyurvedaInfoSection from '../../../components/AyurvedaInfoSection';

const content = {
  hero: {
    badge: 'Diabetes Diet Plan',
    title: 'Diabetes Diet Plan in Dubai: Ayurvedic Foods to Eat and Avoid',
    description: 'Food choices make a real difference to blood sugar in type 2 diabetes and prediabetes. This guide from RamaCare Polyclinic in Jumeirah 1 combines the plate method and low-GI eating with the Ayurvedic diet for diabetes, with local Arabic and Indian food swaps. It supports, and does not replace, your medical care: our female GP provides diabetes care and blood tests in the same building.',
    summary: {
      title: 'What Is the Best Diet for Diabetes?',
      content: 'Fill half your plate with vegetables, a quarter with protein (dal, fish, chicken, eggs or paneer) and a quarter with whole-grain carbohydrates such as barley, millet or brown rice. Choose whole fruit over juice, avoid sugary drinks and sweets, eat at regular times and walk after meals. Ayurveda calls diabetes Madhumeha and favours Kapha-reducing, bitter and astringent foods such as bitter gourd and fenugreek. Never change your diabetes medicines without your doctor.'
    },
    ctaButtons: {
      primary: { text: 'Book a Diabetes Diet Consultation', icon: 'Calendar' },
      secondary: { text: 'WhatsApp Consultation', phone: '+971 56 659 7878' }
    },
    image: { src: '/images/diab.jpg', alt: 'Diabetes diet plan with Ayurvedic advice at RamaCare Polyclinic, Jumeirah 1, Dubai' }
  },
  environmentalChallenges: {
    title: '1. The "Dubai Diabetes" Factor: Environmental Challenges',
    items: [
      {
        id: 1,
        title: 'Less Daily Walking', 
        description: 'Driving everywhere and long desk hours mean less activity, and walking after meals is one of the simplest ways to lower blood sugar. Ayurveda links inactivity to Kapha.', 
        icon: 'Car'
      },
      {
        id: 2,
        title: 'Juices, Karak and Sweet Drinks', 
        description: 'Fresh juices, sweetened karak chai and café drinks raise blood sugar quickly. Water, unsweetened tea and buttermilk are better choices.', 
        icon: 'CupSoda'
      },
      {
        id: 3,
        title: 'Stress and Late Meals', 
        description: 'Work stress, poor sleep and late, heavy dinners all make blood sugar harder to control.', 
        icon: 'Clock'
      }
    ]
  },
  dietaryPillars: {
    title: 'Foods to Eat and Avoid With Diabetes',
    subtitle: 'Low-GI, high-fibre foods raise blood sugar more slowly. Ayurveda adds Kapha-reducing, bitter and astringent foods.',
    bannerImage: '/images/diab1.jpg',
    favor: {
      title: 'Foods to Favour',
      description: 'Everyday foods that fit a diabetes diet:',
      items: [
        { title: 'Barley, Millet and Other Whole Grains', description: 'Ayurveda traditionally favours barley (Yava) for Madhumeha. Barley, millet, oats and brown rice raise blood sugar more slowly than white rice or bread.' },
        { title: 'Vegetables and Bitter Foods', description: 'Fill half your plate with vegetables. Bitter gourd (karela), fenugreek leaves and other greens are traditional Ayurvedic choices.' },
        { title: 'Protein at Every Meal', description: 'Dal, chickpeas, eggs, fish, chicken or paneer help keep blood sugar steadier.' }
      ]
    },
    avoid: {
      title: 'Foods to Limit or Avoid',
      items: [
        { title: 'Sweets and Sugary Drinks', description: 'Arabic and Indian sweets, cakes, sweetened karak, soft drinks and fruit juice raise blood sugar quickly.' },
        { title: 'Very Sweet Fruits in Large Amounts', description: 'Dates, mango and grapes are best in small portions with a meal; choose apple, guava, orange or berries more often.' },
        { title: 'Large, Late Dinners', description: 'Keep dinner moderate and early; make lunch your main meal, as Ayurveda advises.' }
      ]
    }
  },
    plateMethod: {
      id: 'plate-method',
      heading: 'The Plate Method for Diabetes',
      table: [
        ['Half the plate', 'Non-starchy vegetables: salad, okra, spinach, cauliflower, beans, bitter gourd'],
        ['A quarter', 'Protein: dal, chickpeas, fish, chicken, eggs or paneer'],
        ['A quarter', 'Whole-grain carbohydrate: barley, millet, brown rice, oats or one whole-wheat roti'],
        ['To drink', 'Water, buttermilk or unsweetened tea']
      ]
    },
    foodSwaps: {
      id: 'dubai-food-swaps',
      heading: 'Diabetes-Friendly Food Swaps in Dubai',
      table: [
        ['Arabic', 'Choose shorbat adas (lentil soup), grilled chicken or fish, fattoush with light dressing, hummus with vegetables. Limit white bread, large rice portions, kunafa and luqaimat.'],
        ['Indian', 'Choose dal, vegetable sabzi, tandoori dishes, raita and whole-wheat roti instead of naan. Keep biryani and rice portions small; limit sweets and fried snacks.'],
        ['Western and cafés', 'Choose eggs, salads with protein and whole-grain bread. Limit pastries, sweetened coffees and smoothies.'],
        ['Drinks', 'Swap juice, soft drinks and sweet karak for water, buttermilk or unsweetened tea.']
      ]
    },
    sampleDay: {
      id: 'sample-day',
      heading: 'Sample Diabetes-Friendly Day',
      intro: 'An example only. Your plan depends on your medicines and blood sugar.',
      table: [
        ['Breakfast', 'Vegetable oats or millet upma, or two eggs with sautéed vegetables and one whole-wheat toast'],
        ['Mid-morning', 'A guava or apple, or a handful of nuts'],
        ['Lunch (main meal)', 'Plate method: vegetables, dal or grilled fish, and a small portion of barley or brown rice'],
        ['After lunch', 'A 10–15 minute walk'],
        ['Afternoon', 'Buttermilk or unsweetened tea with roasted chickpeas'],
        ['Dinner (early)', 'Vegetable soup with paneer, chicken or lentils']
      ]
    },
    safety: {
      id: 'blood-sugar-safety',
      heading: 'Blood Sugar Safety: When to Act',
      items: [
        { text: 'Low blood sugar (shaking, sweating, dizziness, confusion, sudden hunger): follow the plan your doctor gave you, usually a fast-acting sugar such as juice or glucose tablets, then recheck.' },
        { text: 'High blood sugar (strong thirst, passing a lot of urine, blurred vision, unusual tiredness): check your levels and contact your doctor.' },
        { text: 'Seek urgent medical help for vomiting, drowsiness, confusion, difficulty breathing or very high readings.' },
        { text: 'Never stop or change diabetes medicines on your own, and tell your doctor before starting herbs or supplements.' }
      ]
    },
    medicalCare: {
      id: 'medical-diabetes-care',
      heading: 'Medical Diabetes Care at RamaCare',
      intro: 'Diet works alongside medical care. Our female GP, in the same Jumeirah 1 building, provides diabetes diagnosis, medicines, HbA1c and other blood tests, and regular reviews.',
      items: [
        { text: 'Medical diabetes care at RamaCare', href: '/services/diabetes-mellitus-care-dubai/' }
      ],
      note: 'Dr. Shamna Keloth Meethal (BAMS) then plans your diet around your medicines and routine. Consultation from AED 200.'
    },
    yourVisit: {
      id: 'your-visit',
      heading: 'Your Diabetes Diet Consultation in Jumeirah 1',
      table: [
        ['Diet and Ayurveda', 'Dr. Shamna Keloth Meethal, BAMS, female, DHA-licensed (11+ years)'],
        ['Medical diabetes care', 'Our female GP, same building'],
        ['Consultation', 'From AED 200, 45–60 minutes'],
        ['Address', '12 Al Dhiyafah Road, Jumeirah Terrace Building, Ground Floor, Jumeirah 1, Dubai'],
        ['Nearby', 'A few minutes from Satwa and Al Wasl; about 10 minutes from Jumeirah 2, City Walk and La Mer'],
        ['Hours', 'Every day, 10am–10pm']
      ]
    },
  glucoseProtocol: {
    title: 'Ayurvedic Daily Habits for Blood Sugar',
    steps: [
      {
        id: 1,
        title: 'Morning', 
        subtitle: 'Ushapan (warm water)', 
        description: 'Start the day with a glass of warm water. Herbal powders such as Jamun seed or cinnamon should only be taken if your doctor prescribes them, because they can lower blood sugar further with diabetes medicines.',
        icon: 'Sunrise'
      },
      {
        id: 2,
        title: 'Midday', 
        subtitle: 'Main meal at lunch', 
        description: 'Make lunch your largest meal, using the plate method, when Ayurveda considers digestion (Agni) strongest.',
        icon: 'Sun'
      },
      {
        id: 3,
        title: 'After Meals', 
        subtitle: 'A 10–15 minute walk', 
        description: 'A short walk after meals helps lower blood sugar. Ayurveda also advises against long daytime sleep in Madhumeha.',
        icon: 'Moon'
      }
    ]
  },
  faqs: {
    title: 'Diabetes Diet: Frequently Asked Questions',
    subtitle: 'Answers reviewed by Dr. Shamna Keloth Meethal (BAMS), RamaCare Polyclinic, Jumeirah 1',
    items: [
      { question: 'What is the best diabetic diet plan?', answer: 'Use the plate method: half vegetables, a quarter protein and a quarter whole-grain carbohydrate. Choose low-GI grains such as barley, millet or brown rice, whole fruit instead of juice, and avoid sugary drinks and sweets. Eat at regular times and walk after meals.' },
      { question: 'Which foods should I avoid with diabetes?', answer: 'Sugary drinks (including fruit juice and sweetened karak), sweets and desserts, white bread and large portions of white rice, fried snacks, and large late dinners.' },
      { question: 'Can I eat rice if I have diabetes?', answer: 'Yes, in a small portion (about a quarter of your plate) with plenty of vegetables and protein. Brown rice, millet or barley are better choices most of the time.' },
      { question: 'Can I eat dates if I have diabetes?', answer: 'Dates are high in natural sugar. One or two with a meal may fit, if your doctor agrees and your blood sugar is well controlled; avoid eating many at once.' },
      { question: 'Which fruits are best for diabetes?', answer: 'Whole fruits such as apple, guava, orange, pear and berries, in portions. Limit mango, grapes, dates and all fruit juices.' },
      { question: 'What can I drink?', answer: 'Water, unsweetened tea or coffee, buttermilk and herbal teas. Avoid soft drinks, fruit juices and sweetened karak or café drinks.' },
      { question: 'Do bitter gourd, fenugreek, cinnamon or Jamun help diabetes?', answer: 'They are traditional Ayurvedic foods for Madhumeha, and some small studies suggest they may lower blood sugar. In food amounts they are fine; as supplements or powders, take them only if your doctor agrees, because they can cause low blood sugar with diabetes medicines.' },
      { question: 'Can Ayurveda cure type 2 diabetes?', answer: 'No. Diabetes needs ongoing medical care. An Ayurvedic diet and lifestyle plan can support blood sugar management alongside your prescribed treatment; never stop or change diabetes medicines without your doctor.' },
      { question: 'Is an Ayurvedic diet safe with my diabetes medicines?', answer: 'Diet changes are safe and helpful alongside medicines, but they can lower your blood sugar, so your doses may need adjusting. Our GP in the same building can review your medicines and blood tests.' },
      { question: 'How soon will my blood sugar change?', answer: 'Daily readings can change within days or weeks of diet changes. HbA1c reflects about three months, so your doctor usually rechecks it after that. Results vary from person to person.' },
      { question: 'What is the best time to eat for diabetes in Ayurveda?', answer: 'Eat at regular times, make lunch your largest meal, and have a moderate dinner early in the evening. Avoid long gaps followed by large meals.' },
      { question: 'Can diet help prediabetes?', answer: 'Yes. For many people with prediabetes, diet changes, regular activity and modest weight loss lower blood sugar and the risk of developing type 2 diabetes. Our GP can check your HbA1c.' },
      { question: 'Do I need to be vegetarian?', answer: 'No. Fish, chicken and eggs fit well. Ayurveda favours lighter proteins such as dal and fish over heavy red and processed meats.' },
      { question: 'Where can I get a diabetes diet plan near Jumeirah 1?', answer: 'At RamaCare Polyclinic, 12 Al Dhiyafah Road, Jumeirah Terrace Building, Ground Floor, Jumeirah 1, Dubai, a few minutes from Satwa and Al Wasl and about 10 minutes from Jumeirah 2, City Walk and La Mer. Open every day, 10am–10pm.' },
      { question: 'How much does a diabetes diet consultation cost?', answer: 'A consultation with Dr. Shamna starts from AED 200 and takes 45–60 minutes. Medical diabetes care and blood tests are provided by our GP.' }
    ]
  },
  whyChoose: {
    title: 'Why Patients Choose RamaCare for Diabetes Diet Care',
    subtitle: "As a DHA-licensed polyclinic in Jumeirah 1, we don't just provide a PDF diet plan. We offer:",
    features: [
      {
       title: 'Medical Diabetes Care in the Same Building', 
       description: 'Our female GP diagnoses and manages diabetes, prescribes medicines and arranges HbA1c and other blood tests.', 
       icon: 'Stethoscope' 
      },
       { 
        title: 'Diet Plan for Your Body', 
        description: 'Dr. Shamna (BAMS) builds an eating plan around your dosha, routine, food culture and medicines.', 
        icon: 'Leaf' 
      },
      {
        title: 'Progress Reviewed Together',
        description: 'Bring your latest reports; your diet and medical care are reviewed side by side.',
        icon: 'LineChart'
      }
    ],
    trustBadges: [
      { label: 'Licensed by', value: 'DHA Dubai', icon: 'ShieldCheck' },
      { label: 'Doctors', value: 'Female GP and Ayurvedic doctor', icon: 'UserCheck' },
      { label: 'Location', value: 'Jumeirah 1, Dubai', icon: 'MapPin' }
    ]
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
        "name": "Diabetes Diet Plan Dubai | Ayurvedic Foods to Eat & Avoid",
        "inLanguage": "en-AE",
        "about": { "@id": "https://ramacarepolyclinic.ae/services/ayurvedic-diet-diabetes-dubai/#diet" },
        "relatedLink": "https://ramacarepolyclinic.ae/services/diabetes-mellitus-care-dubai/",
        "isPartOf": { "@id": "https://ramacarepolyclinic.ae/services/ayurveda-dubai/#webpage" },
        "reviewedBy": { "@id": "https://ramacarepolyclinic.ae/doctors/dr-shamna-keloth-meethal-ayurveda-doctor-dubai/#physician" },
        "lastReviewed": "YYYY-MM-DD",
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ramacarepolyclinic.ae/" },
            { "@type": "ListItem", "position": 2, "name": "Ayurveda", "item": "https://ramacarepolyclinic.ae/services/ayurveda-dubai/" },
            { "@type": "ListItem", "position": 3, "name": "Diabetes Diet Plan", "item": "https://ramacarepolyclinic.ae/services/ayurvedic-diet-diabetes-dubai/" }
          ]
        }
      },
      {
        "@type": "Diet",
        "@id": "https://ramacarepolyclinic.ae/services/ayurvedic-diet-diabetes-dubai/#diet",
        "name": "Diabetes diet plan with Ayurvedic advice",
        "alternateName": ["Diabetic diet plan", "Ayurvedic diet for diabetes", "Diet for prediabetes", "Madhumeha diet"],
        "description": "Eating guidance for type 2 diabetes and prediabetes from RamaCare Polyclinic, Jumeirah 1, Dubai: the plate method, low-GI carbohydrates, protein and vegetables at every meal, local food swaps and Ayurvedic Kapha-balancing principles, alongside medical diabetes care from our GP.",
        "dietFeatures": "Plate method (half vegetables, a quarter protein, a quarter whole-grain carbohydrate), low-GI grains such as barley and millet, whole fruit in portions, no sugary drinks, regular meal times, walking after meals",
        "expertConsiderations": "Supports, and does not replace, medical diabetes care. Do not stop or change diabetes medicines without your doctor. Some foods and herbs that lower blood sugar can cause low blood sugar with medication.",
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
        <title key="title">Diabetes Diet Plan Dubai | Ayurvedic Foods to Eat & Avoid</title>
        <meta name="description" content="Diabetes diet plan in Jumeirah 1, Dubai: the plate method, Arabic and Indian food swaps, foods to avoid and a sample day, with Ayurvedic advice and GP care." key="description" />
        <meta name="robots" content="index, follow" key="robots" />
        <link rel="canonical" href="https://ramacarepolyclinic.ae/services/ayurvedic-diet-diabetes-dubai/" key="canonical" />

        {/* Open Graph Tags */}
        <meta property="og:type" content="website" key="og:type" />
        <meta property="og:title" content="Diabetes Diet Plan Dubai | Ayurvedic Foods to Eat & Avoid" key="og:title" />
        <meta property="og:description" content="Diabetes diet plan in Jumeirah 1, Dubai: the plate method, Arabic and Indian food swaps, foods to avoid and a sample day, with Ayurvedic advice and GP care." key="og:description" />
        <meta property="og:url" content="https://ramacarepolyclinic.ae/services/ayurvedic-diet-diabetes-dubai/" key="og:url" />
        <meta property="og:image" content="https://ramacarepolyclinic.ae/images/diab.jpg" key="og:image" />
        <meta property="og:image:alt" content="Diabetes diet plan with Ayurvedic advice at RamaCare Polyclinic, Jumeirah 1, Dubai" key="og:image:alt" />
        <meta property="og:image:width" content="1200" key="og:image:width" />
        <meta property="og:image:height" content="630" key="og:image:height" />
        <meta property="og:site_name" content="RamaCare Polyclinic" key="og:site_name" />
        <meta property="og:locale" content="en_AE" key="og:locale" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content="Diabetes Diet Plan Dubai | Ayurvedic Foods to Eat & Avoid" key="twitter:title" />
        <meta name="twitter:description" content="Diabetes diet plan in Jumeirah 1, Dubai: the plate method, Arabic and Indian food swaps, foods to avoid and a sample day, with Ayurvedic advice and GP care." key="twitter:description" />
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
<AyurvedaInfoSection content={content.plateMethod} />  
<AyurvedaInfoSection content={content.foodSwaps} />
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
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center shadow-sm ${index === 0 ? 'bg-orange-50 text-orange-500' :
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
 <AyurvedaInfoSection content={content.sampleDay} />  
 <AyurvedaInfoSection content={content.safety} />  
 <AyurvedaInfoSection content={content.medicalCare} />

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
 <AyurvedaInfoSection content={content.yourVisit} />
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
                  <option value="morning">Morning (10 AM - 1 PM)</option>
<option value="afternoon">Afternoon (1 PM - 5 PM)</option>
<option value="evening">Evening (5 PM - 10 PM)</option>
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
            <a href="/services/diabetes-mellitus-care-dubai/" className="bg-[#F5F1EA] hover:bg-[#E9E2D6] p-6 rounded-2xl flex items-center justify-between transition-all group shadow-sm">
              <span className="font-bold text-[#1A1A1A] group-hover:text-[#1F5E4B]">Medical Diabetes Care</span>
              <LucideIcons.ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#1F5E4B] transition-transform group-hover:translate-x-1" />
            </a>
            <a href="/services/ayurvedic-diet-plan-dubai/" className="bg-[#F5F1EA] hover:bg-[#E9E2D6] p-6 rounded-2xl flex items-center justify-between transition-all group shadow-sm">
              <span className="font-bold text-[#1A1A1A] group-hover:text-[#1F5E4B]">Ayurvedic Diet Plan</span>
              <LucideIcons.ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#1F5E4B] transition-transform group-hover:translate-x-1" />
            </a>
            <a href="/services/ayurvedic-diet-weight-loss-dubai/" className="bg-[#F5F1EA] hover:bg-[#E9E2D6] p-6 rounded-2xl flex items-center justify-between transition-all group shadow-sm">
              <span className="font-bold text-[#1A1A1A] group-hover:text-[#1F5E4B]">Ayurvedic Diet for Weight Loss</span>
              <LucideIcons.ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#1F5E4B] transition-transform group-hover:translate-x-1" />
            </a>
            <a href="/services/ayurvedic-diet-vs-intermittent-fasting-dubai/" className="bg-[#F5F1EA] hover:bg-[#E9E2D6] p-6 rounded-2xl flex items-center justify-between transition-all group shadow-sm">
              <span className="font-bold text-[#1A1A1A] group-hover:text-[#1F5E4B]">Ayurvedic Diet vs Intermittent Fasting</span>
              <LucideIcons.ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#1F5E4B] transition-transform group-hover:translate-x-1" />
            </a>
            <a href="/services/ayurvedic-diet-vs-keto-dubai/" className="bg-[#F5F1EA] hover:bg-[#E9E2D6] p-6 rounded-2xl flex items-center justify-between transition-all group shadow-sm">
              <span className="font-bold text-[#1A1A1A] group-hover:text-[#1F5E4B]">Ayurvedic Diet vs Keto</span>
              <LucideIcons.ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#1F5E4B] transition-transform group-hover:translate-x-1" />
            </a>
            <a href="/services/ayurvedic-diet-pcos-dubai/" className="bg-[#F5F1EA] hover:bg-[#E9E2D6] p-6 rounded-2xl flex items-center justify-between transition-all group shadow-sm">
              <span className="font-bold text-[#1A1A1A] group-hover:text-[#1F5E4B]">Ayurvedic Diet for PCOS</span>
              <LucideIcons.ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#1F5E4B] transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>

      <ContentReviewBadge doctorName="Dr. Shamna Keloth Meethal" pageSlug="ayurvedic-diet-diabetes-dubai" lastReviewed="2026-01-12" />

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
                Diabetes diet consultation in Jumeirah 1 – book with Dr. Shamna
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
