import { useState, useEffect } from 'react';
import Layout from '../../../components/Layout';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MessageCircle, Snowflake, Sun, Moon, X, ArrowRight, ShieldCheck, Clock, Users, Star } from 'lucide-react';
import { useToast } from '../../../components/Toast';
import ContentReviewBadge from '../../../components/ContentReviewBadge';
import AyurvedaInfoSection from '../../../components/AyurvedaInfoSection'; 

export default function AyurvedicDietPCOSPage() {
  const { showToast, ToastComponent } = useToast();
  const [openFaq, setOpenFaq] = useState(null);
  const [showBottomBar, setShowBottomBar] = useState(false);

  // FAQ Data
  const faqData = [
    {
      question: "What is the best Ayurvedic diet for PCOS?",
      answer: "Low-GI grains (millet, oats, lentils, brown rice), vegetables at every meal, protein at every meal, healthy fats, and warm, freshly cooked food with an early, light dinner. In Ayurveda this balances Kapha and Vata, which are linked to PCOS."
    },
    {
      question: "What are the foods to avoid with PCOS?",
      answer: "Sugar, sweets and sweet drinks (including fruit juice), white bread and refined flour, fried and heavily processed food, processed meats, and large portions of white rice without vegetables or protein."
    },
    {
      question: "Can I eat white rice with PCOS?",
      answer: "In small portions, with plenty of vegetables and protein on the plate. Brown rice, millet and other whole grains raise blood sugar more slowly, so they are better choices most of the time."
    },
    {
      question: "Is dairy bad for PCOS?",
      answer: "It affects women differently. Some feel better with less milk and cheese; yoghurt and buttermilk are often easier to digest. Ayurveda advises avoiding cold, heavy dairy. Your doctor can help you decide."
    },
    {
      question: "Which fruits are good for PCOS?",
      answer: "Whole fruits such as berries, apple, pear, guava and orange are good choices. Limit fruit juice and very sweet fruits like mango or dates in large amounts."
    },
    {
      question: "Is spearmint tea good for PCOS?",
      answer: "Small studies suggest two cups a day may lower some androgen levels in women with excess hair growth. It is a safe drink for most women, but not a treatment on its own."
    },
    {
      question: "Do cinnamon and fenugreek help PCOS?",
      answer: "Small studies suggest they may help blood sugar. They are safe in food amounts, but supplements or large amounts should be checked with your doctor, especially if you take metformin or diabetes medicines."
    },
    {
      question: "Can I follow an Ayurvedic diet while on metformin or the pill?",
      answer: "Yes. Diet changes work alongside your medicines. Tell your doctors about any herbs or supplements, because some (such as fenugreek) also lower blood sugar."
    },
    {
      question: "Is an Ayurvedic PCOS diet suitable for vegetarians?",
      answer: "Yes. Lentils, chickpeas, beans, paneer, yoghurt, nuts and seeds provide protein. Vegans can use plant proteins and oils instead of dairy and ghee."
    },
    {
      question: "How long does it take to see changes?",
      answer: "Many women notice better energy and digestion within weeks. Changes in cycles and weight take several months; even a 5-10% weight loss often helps PCOS symptoms when weight is a factor."
    },
    {
      question: "What exercise is best for PCOS?",
      answer: "Regular exercise of any kind helps. Aim for about 150 minutes a week of moderate activity, such as brisk walking, swimming or cycling, plus strength training twice a week. In the Dubai summer, exercise indoors or early in the morning."
    },
    {
      question: "Should I try intermittent fasting or keto for PCOS?",
      answer: "Some women do well with a moderate eating window or lower-carb eating, but very long fasts or strict diets can affect cycles and are hard to keep up. See our guides on Ayurvedic diet vs intermittent fasting and vs keto, and speak to a doctor first."
    },
    {
      question: "Which blood tests should I have for PCOS?",
      answer: "Our female GP can arrange hormone tests, blood sugar (HbA1c), cholesterol, thyroid and vitamin D, which help confirm PCOS and track your progress."
    },
    {
      question: "What if I cannot avoid late dinners because of work?",
      answer: "Make lunch your largest meal, have a small snack in the late afternoon, and keep the late dinner light, such as soup or dal with vegetables."
    },
    {
      question: "How much does a PCOS diet consultation cost?",
      answer: "A consultation with Dr. Shamna, our female Ayurvedic doctor, starts from AED 200 and takes 45-60 minutes. Blood tests, if needed, are arranged by our female GP."
    },
    {
      question: "Where can I get a PCOS diet plan near Jumeirah 1?",
      answer: "At RamaCare Polyclinic, 12 Al Dhiyafah Road, Jumeirah Terrace Building, Ground Floor, Jumeirah 1, Dubai, a few minutes from Satwa and Al Wasl and about 10 minutes from Jumeirah 2, City Walk and La Mer. Open every day, 10am-10pm, with female doctors."
    }
  ];

  const faqsForSchema = faqData.map(faq => ({
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
      "@id": "https://ramacarepolyclinic.ae/services/ayurvedic-diet-pcos-dubai/#webpage",
      "url": "https://ramacarepolyclinic.ae/services/ayurvedic-diet-pcos-dubai/",
      "name": "Ayurvedic Diet for PCOS Dubai | Foods to Eat & Avoid",
      "inLanguage": "en-AE",
      "audience": { "@type": "PeopleAudience", "suggestedGender": "female" },
      "about": { "@id": "https://ramacarepolyclinic.ae/services/ayurvedic-diet-pcos-dubai/#diet" },
      "isPartOf": { "@id": "https://ramacarepolyclinic.ae/services/ayurveda-dubai/#webpage" },
      "reviewedBy": { "@id": "https://ramacarepolyclinic.ae/doctors/dr-shamna-keloth-meethal-ayurveda-doctor-dubai/#physician" },
      "lastReviewed": "YYYY-MM-DD",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ramacarepolyclinic.ae/" },
          { "@type": "ListItem", "position": 2, "name": "Ayurveda", "item": "https://ramacarepolyclinic.ae/services/ayurveda-dubai/" },
          { "@type": "ListItem", "position": 3, "name": "Ayurvedic Diet for PCOS", "item": "https://ramacarepolyclinic.ae/services/ayurvedic-diet-pcos-dubai/" }
        ]
      }
    },
    {
      "@type": "Diet",
      "@id": "https://ramacarepolyclinic.ae/services/ayurvedic-diet-pcos-dubai/#diet",
      "name": "Ayurvedic diet for PCOS",
      "alternateName": ["PCOS diet", "PCOD diet", "Ayurvedic PCOS diet plan", "Low-GI diet for PCOS"],
      "description": "Low-glycaemic, high-fibre eating with protein at every meal, healthy fats and Kapha-balancing Ayurvedic principles, for women with PCOS, from RamaCare Polyclinic, Jumeirah 1, Dubai, with a female Ayurvedic doctor and a female GP for tests.",
      "dietFeatures": "Low-GI carbohydrates, vegetables and fibre at every meal, protein at every meal, healthy fats, warm freshly cooked food, early light dinner; limit sugar, sweet drinks, refined flour and fried food",
      "expertConsiderations": "PCOS should be diagnosed and monitored by a doctor. Women on metformin, the contraceptive pill or other medicines should check before adding herbs or supplements.",
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

  const content = {
    challenges: [
      {
        title: "Indoor Life and Low Vitamin D",
        icon: Snowflake,
        description: "Long hours indoors and in cars mean many women in the UAE have low vitamin D, which is linked to insulin resistance. It is easy to check with a blood test."
      },
      {
        title: "Late Dinners and Eating Out" ,
        icon: Sun,
        description: "Late, heavy dinners and frequent restaurant meals make it harder to keep blood sugar steady. Ayurveda advises an early, light dinner."
      },
      {
        title: "Less Activity in the Heat", 
        icon: Moon,
        description: "The summer heat makes outdoor exercise harder, and regular activity is one of the most helpful things for PCOS. Plan indoor or early-morning exercise."
      }
    ],
    dietaryPillars: {
      favor: [
        { title: "Low-GI Grains", description: "Millet, oats, barley, quinoa and brown rice, in moderate portions" },
        { title: "Vegetables at Every Meal", description: "Leafy greens, bitter gourd, broccoli, okra; fill half your plate" },
        { title: "Protein at Every Meal", description: "Lentils, chickpeas, eggs, fish, chicken, paneer or yoghurt" },
        { title: "Healthy Fats", description: "A little ghee, nuts, flaxseeds, sesame and olive oil" },
        { title: "Warm, Cooked Meals", description: "Soups, stews, dal and stir-fries, as Ayurveda advises for Kapha" },
        { title: "Spices and Herbal Teas", description: "Cinnamon, fenugreek, turmeric, ginger; spearmint or fennel tea" }
      ],
      avoid: [
        "Sugar, sweets and sweet drinks, including fruit juice",
        "White bread, pastries and refined flour",
        "Fried and heavily processed food",
        "Processed meats",
        "Large portions of white rice without vegetables or protein",
        "Iced drinks and heavy late-night meals (Ayurvedic advice for Kapha)"
      ],
      avoidNote: "Dairy affects women differently; some do better with less. Your doctor can help you decide."
    },
    routine: [
      {
        time: "6:30 AM",
        title: "Wake-Up Ritual",
        description: "Warm water; soaked fenugreek seeds if your doctor agrees (avoid if you take diabetes medicines without advice).",
        icon: (props) => <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2v4m0 12v4m-7.07-3.93l2.83-2.83m8.48-8.48l2.83-2.83M2 12h4m12 0h4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83" stroke="white" strokeWidth="2" strokeLinecap="round" /></svg>
      },
      {
        time: "8:00 AM",
        title: "Breakfast",
        description: "Vegetable oats upma, or two eggs with sautéed spinach and a slice of whole-grain toast.",
        icon: (props) => <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8zM6 1v3M10 1v3M14 1v3" stroke="white" strokeWidth="2" strokeLinecap="round" /></svg>
      },
      {
        time: "1:00 PM",
        title: "Lunch (Main Meal)",
        description: "Millet or brown rice with dal, a large portion of vegetables, and yoghurt or buttermilk.",
        icon: (props) => <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="4" stroke="white" strokeWidth="2" /><path d="M12 2v4m0 12v4m-7.07-3.93l2.83-2.83m8.48-8.48l2.83-2.83M2 12h4m12 0h4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83" stroke="white" strokeWidth="2" strokeLinecap="round" /></svg>
      },
      {
        time: "4:00 PM",
        title: "Afternoon Snack",
        description: "Spearmint or cinnamon tea, with a handful of nuts or roasted chickpeas.",
        icon: (props) => <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M17 8c0-2.76-2.24-5-5-5s-5 2.24-5 5c0 2.76 2.24 5 5 5s5-2.24 5-5zM12 13v7m-4 0h8" stroke="white" strokeWidth="2" strokeLinecap="round" /></svg>
      },
      {
        time: "7:00 PM",
        title: "Light Dinner",
        description: "Light dinner: Lentil and vegetable soup, or grilled fish or paneer with vegetables.",
        icon: (props) => <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" stroke="white" strokeWidth="2" strokeLinecap="round" /></svg>
      }
    ],
    routineNote: "An example only. Your plan depends on your health, weight goals and medicines.",
    herbs: [
      { name: "Shatavari", use: "Hormonal balance and fertility support." },
      { name: "Ashwagandha", use: "Stress reduction and cortisol management." },
      { name: "Triphala", use: "Gentle detoxification and gut health." },
      { name: "Cinnamon", use: "Blood sugar and insulin sensitivity." }
    ]
  };
  const testsAndDoctors = {
  id: 'pcos-tests',
  heading: 'Female Doctors and Blood Tests for PCOS',
  intro: 'Diet works best alongside medical care. At RamaCare, our female GP can arrange tests to confirm PCOS and track your progress:',
  items: [
    { text: 'hormone tests' },
    { text: 'blood sugar (HbA1c) and cholesterol' },
    { text: 'thyroid function' },
    { text: 'vitamin D' }
  ],
  note: 'Our female Ayurvedic doctor, Dr. Shamna Keloth Meethal (BAMS), then plans your diet and Ayurvedic care. For full PCOS care, see Ayurvedic PCOS treatment (/services/pcos-treatment-dubai/).'
};
const eatingOut = {
  id: 'eating-out',
  heading: 'Eating Out in Dubai With PCOS',
  items: [
    { text: 'Arabic restaurants: grilled chicken or fish, lentil soup, hummus with vegetables, salads; go easy on white bread and rice.' },
    { text: 'Indian restaurants: tandoori dishes, dal, vegetable curries, raita; choose roti over naan and keep rice small.' },
    { text: 'Cafés and brunches: eggs, avocado and whole-grain toast; skip sweet drinks and pastries.' },
    { text: 'Late dinners: keep them light and make lunch your main meal.' }
  ]
};
const yourVisit = {
  id: 'your-visit',
  heading: 'Your PCOS Diet Consultation in Jumeirah 1',
  table: [
    ['Ayurvedic doctor', 'Dr. Shamna Keloth Meethal, BAMS, female, DHA-licensed (11+ years)'],
    ['GP', 'Female GP in the same building, for blood tests'],
    ['Consultation', 'From AED 200, 45–60 minutes'],
    ['Address', '12 Al Dhiyafah Road, Jumeirah Terrace Building, Ground Floor, Jumeirah 1, Dubai'],
    ['Nearby', 'A few minutes from Satwa and Al Wasl; about 10 minutes from Jumeirah 2, City Walk and La Mer'],
    ['Hours', 'Every day, 10am–10pm']
  ]
};

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    preferredTime: '',
    concern: ''
  });

  // Show bottom bar on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowBottomBar(true);
      } else {
        setShowBottomBar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
          preferredTime: formData.preferredTime,
          concern: formData.concern,
          source: 'ayurvedic-diet-pcos-dubai'
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        showToast('Appointment request submitted successfully!', 'success');
        setFormData({
          name: '',
          phone: '',
          email: '',
          preferredTime: '',
          concern: ''
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
        <title key="title">Ayurvedic Diet for PCOS Dubai | Foods to Eat & Avoid</title>
        <meta name="description" content="Ayurvedic diet for PCOS in Jumeirah 1, Dubai: low-GI foods to eat and avoid, a sample day, and care from a female Ayurvedic doctor with a female GP for tests." key="description" />
        <meta name="robots" content="index, follow" key="robots" />
        <link rel="canonical" href="https://ramacarepolyclinic.ae/services/ayurvedic-diet-pcos-dubai/" key="canonical" />

        {/* Open Graph Tags */}
        <meta property="og:type" content="website" key="og:type" />
        <meta property="og:title" content="Ayurvedic Diet for PCOS Dubai | Foods to Eat & Avoid" key="og:title" />
        <meta property="og:description" content="Ayurvedic diet for PCOS in Jumeirah 1, Dubai: low-GI foods to eat and avoid, a sample day, and care from a female Ayurvedic doctor with a female GP for tests." key="og:description" />
        <meta property="og:url" content="https://ramacarepolyclinic.ae/services/ayurvedic-diet-pcos-dubai/" key="og:url" />
        <meta property="og:image" content="https://ramacarepolyclinic.ae/images/pcos1.jpg" key="og:image" />
        <meta property="og:image:width" content="1200" key="og:image:width" />
        <meta property="og:image:height" content="630" key="og:image:height" />
        <meta property="og:image:alt" content="Ayurvedic diet for PCOS from RamaCare Polyclinic, Jumeirah 1, Dubai" key="og:image:alt" />
        <meta property="og:site_name" content="RamaCare Polyclinic" key="og:site_name" />
        <meta property="og:locale" content="en_AE" key="og:locale" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content="Ayurvedic Diet for PCOS Dubai | Foods to Eat & Avoid" key="twitter:title" />
        <meta name="twitter:description" content="A DHA-licensed Ayurvedic diet plan for PCOS in Dubai — balancing hormones, improving insulin sensitivity, and regularizing cycles naturally." key="twitter:description" />
        <meta name="twitter:image" content="https://ramacarepolyclinic.ae/images/pcos1.jpg" key="twitter:image" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaGraph)
          }}
        />
      </Head>

      {/* Hero Section */}
      <section className="bg-[#F5F1EA] py-16 md:py-24 lg:py-32 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumbs */}
          <nav className="flex flex-wrap items-center gap-y-1.5 text-xs font-semibold text-[#5F5F5F] mb-6 tracking-wider">
            <a href="/" className="hover:text-[#1F5E4B] transition-colors">Home</a>
            <span className="mx-2">/</span>
            <a href="/services/ayurveda-dubai/" className="hover:text-[#1F5E4B] transition-colors">Ayurveda</a>
            <span className="mx-2">/</span>
            <span className="text-gray-400">Ayurvedic Diet for PCOS</span>
          </nav>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="order-2 lg:order-1"
            >
              <h1 className="mb-8" style={{
                fontFamily: "'Nunito Sans', sans-serif",
                fontWeight: '700',
                fontSize: '60px',
                lineHeight: '1.2',
                color: '#1A1A1A'
              }}>
                Ayurvedic Diet for PCOS in Dubai: Foods to Eat and Avoid
              </h1>

              <p className="mb-8 leading-relaxed" style={{
                fontFamily: "'Nunito Sans', sans-serif",
                fontSize: '20px',
                fontWeight: '400',
                color: '#5F5F5F',
                lineHeight: '1.7'
              }}>
                PCOS (polycystic ovary syndrome, also called PCOD) is a common hormonal condition in the UAE, often linked to insulin resistance. Diet is one of the most useful things you can change. This guide from RamaCare Polyclinic in Jumeirah 1 combines the evidence-based PCOS diet (low-GI foods, fibre and protein at every meal) with Ayurvedic principles, and is reviewed by our female Ayurvedic doctor, Dr. Shamna Keloth Meethal (BAMS).
              </p>

              {/* Answer-First Summary Box */}
              <div className="mb-8 space-y-4 rounded-2xl p-8" style={{ backgroundColor: '#E9E2D6' }}>
                <h3 className="mb-4" style={{
                  fontFamily: "'Nunito Sans', sans-serif",
                  fontSize: '24px',
                  fontWeight: '700',
                  color: '#1A1A1A'
                }}>
                  Can Diet Help PCOS?
                </h3>

                <p style={{
                  fontFamily: "'Nunito Sans', sans-serif",
                  fontSize: '16px',
                  fontWeight: '400',
                  color: '#5F5F5F',
                  lineHeight: '1.7'
                }}>
                  Yes, diet is one of the most effective ways to manage PCOS symptoms, though it does not cure PCOS. Choose low-GI carbohydrates (millet, oats, lentils, brown rice), fill half your plate with vegetables, include protein at every meal, use healthy fats, and limit sugar, sweet drinks and refined flour. In Ayurveda, PCOS is linked to Kapha and Vata imbalance, so warm, freshly cooked, lightly spiced food and an early, light dinner are favoured. Changes in cycles and weight come gradually over months; our female GP can arrange blood tests to track your progress.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#consultation"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white transition-all duration-300 hover:shadow-lg"
                  style={{
                    fontFamily: "'Nunito Sans', sans-serif",
                    fontWeight: '600',
                    fontSize: '16px',
                    backgroundColor: '#1F5E4B'
                  }}
                >
                  Book Your PCOS Consultation
                </a>
                <a
                  href="https://wa.me/971566597878"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 transition-all duration-300 hover:shadow-lg"
                  style={{
                    fontFamily: "'Nunito Sans', sans-serif",
                    fontWeight: '600',
                    fontSize: '16px',
                    backgroundColor: 'transparent',
                    color: '#1F5E4B',
                    borderColor: '#1F5E4B'
                  }}
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Consultation
                </a>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '4/5' }}>
                <img
                  src="/images/pcos1.jpg"
                  alt="Ayurvedic Diet for PCOS in Dubai - Hormonal Balance at RamaCare"
                  className="w-full h-full object-cover"
                  style={{ minHeight: '500px' }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why PCOS is Different in Dubai Section */}
      <section className="bg-white py-16 md:py-24 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-6" style={{
              fontFamily: "'Nunito Sans', sans-serif",
              fontSize: '48px',
              fontWeight: '700',
              color: '#1A1A1A',
              lineHeight: '1.2'
            }}>
              1. Why PCOS is Different for Women in Dubai
            </h2>

            <p className="max-w-3xl mx-auto" style={{
              fontFamily: "'Nunito Sans', sans-serif",
              fontSize: '20px',
              fontWeight: '400',
              color: '#5F5F5F',
              lineHeight: '1.6'
            }}>
              The unique environmental and lifestyle factors in Dubai create specific challenges for managing PCOS.
            </p>
          </motion.div>

          {/* Three Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {content.challenges.map((challenge, index) => {
              const Icon = challenge.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-2xl p-8 bg-[#F5F1EA]"
                >
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mb-6 bg-[#1F5E4B]">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-[#1A1A1A]">
                    {challenge.title}
                  </h3>
                  <p className="text-[15px] text-[#5F5F5F] leading-relaxed">
                    {challenge.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <a
              href="#consultation"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full transition-all duration-300 hover:opacity-90"
              style={{
                fontFamily: "'Nunito Sans', sans-serif",
                fontWeight: '600',
                fontSize: '16px',
                backgroundColor: '#1F5E4B',
                color: 'white'
              }}
            >
              Get Your Personalized PCOS Plan
            </a>
          </motion.div>
        </div>
      </section>

      {/* Section 2: The Ayurvedic Blueprint */}
      <section className="py-16 md:py-24 bg-[#F5F1EA] px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-6" style={{
              fontFamily: "'Nunito Sans', sans-serif",
              fontSize: '48px',
              fontWeight: '700',
              color: '#1A1A1A',
              lineHeight: '1.2'
            }}>
              2. The Ayurvedic Blueprint: Balancing Kapha & Artava
            </h2>

            <p className="max-w-3xl mx-auto" style={{
              fontFamily: "'Nunito Sans', sans-serif",
              fontSize: '20px',
              fontWeight: '400',
              color: '#5F5F5F',
              lineHeight: '1.6'
            }}>
              In Ayurveda, PCOS is linked to excess "Kapha" (heaviness, sluggishness) and impaired "Artava" (reproductive tissue). The goal is to reduce Kapha with light, warm, spiced foods while avoiding cold, heavy, or mucus-forming items.
            </p>
          </motion.div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Foods to Favor */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#1F5E4B' }}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fill="white" />
                  </svg>
                </div>
                <h3 style={{
                  fontFamily: "'Nunito Sans', sans-serif",
                  fontSize: '24px',
                  fontWeight: '700',
                  color: '#1A1A1A'
                }}>
                  Foods to Favor
                </h3>
              </div>

              <div className="space-y-4">
                {content.dietaryPillars.favor.map((item, index) => (
                  <div key={index} className="rounded-xl p-4 bg-[#F5F1EA]">
                    <p className="mb-1 text-base font-semibold text-[#1F5E4B]">
                      {item.title}
                    </p>
                    <p className="text-sm text-[#5F5F5F]">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Foods to Avoid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#DC2626' }}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" fill="white" />
                  </svg>
                </div>
                <h3 style={{
                  fontFamily: "'Nunito Sans', sans-serif",
                  fontSize: '24px',
                  fontWeight: '700',
                  color: '#1A1A1A'
                }}>
                  Foods to Avoid
                </h3>
              </div>

              <div className="space-y-3">
                {content.dietaryPillars.avoid.map((item, index) => (
                  <div key={index} className="rounded-lg p-3 flex items-start gap-3 bg-[#FEF2F2]">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-0.5">
                      <path d="M12 4L4 12M4 4l8 8" stroke="#DC2626" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    <p className="text-[15px] font-normal text-[#1A1A1A]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              {content.dietaryPillars.avoidNote && (
                <div className="mt-6 pt-6 border-t" style={{ borderColor: '#E9E2D6' }}>
                  <p style={{
                    fontFamily: "'Nunito Sans', sans-serif",
                    fontSize: '14px',
                    fontWeight: '400',
                    color: '#5F5F5F',
                    lineHeight: '1.6'
                  }}>
                    {content.dietaryPillars.avoidNote}
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3: 24-Hour Sample Routine */}
      <section className="py-16 md:py-24 bg-white px-4 md:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-6" style={{
              fontFamily: "'Nunito Sans', sans-serif",
              fontSize: '48px',
              fontWeight: '700',
              color: '#1A1A1A',
              lineHeight: '1.2'
            }}>
              3. A 24-Hour Sample Ayurvedic PCOS Routine for Dubai Residents
            </h2>

            <p className="max-w-3xl mx-auto" style={{
              fontFamily: "'Nunito Sans', sans-serif",
              fontSize: '20px',
              fontWeight: '400',
              color: '#5F5F5F',
              lineHeight: '1.6'
            }}>
              This daily schedule is designed to work with Dubai's unique lifestyle while maintaining Ayurvedic principles.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-[#E9E2D6]" />

            {content.routine.map((step, index) => {
              const isEven = index % 2 === 0;
              const Icon = step.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative mb-12"
                >
                  <div className={`flex items-center gap-8 ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className={`flex-1 ${isEven ? 'text-right' : 'text-left'}`}>
                      <div className="rounded-2xl p-6 inline-block bg-[#F5F1EA]">
                        <div className={`flex items-center gap-3 mb-3 ${isEven ? 'justify-end' : 'justify-start'}`}>
                          {!isEven && (
                            <span className="px-3 py-1 rounded-full bg-[#1F5E4B] text-white text-sm font-semibold">
                              {step.time}
                            </span>
                          )}
                          <h4 className="text-lg font-bold text-[#1A1A1A]">
                            {step.title}
                          </h4>
                          {isEven && (
                            <span className="px-3 py-1 rounded-full bg-[#1F5E4B] text-white text-sm font-semibold">
                              {step.time}
                            </span>
                          )}
                        </div>
                        <p className="text-[15px] text-[#5F5F5F] leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 z-10 bg-[#1F5E4B]">
                      <Icon className="text-white" />
                    </div>

                    <div className="flex-1" />
                  </div>
                </motion.div>
              );
            })}
          </div>

          <p className="text-center text-sm text-[#5F5F5F] mt-8 italic" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
            Note: {content.routineNote}
          </p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <a
              href="#consultation"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full transition-all duration-300 hover:opacity-90"
              style={{
                fontFamily: "'Nunito Sans', sans-serif",
                fontWeight: '600',
                fontSize: '16px',
                backgroundColor: '#1F5E4B',
                color: 'white'
              }}
            >
              Start Your Personalized Routine
            </a>
          </motion.div>
        </div>
      </section>
        <AyurvedaInfoSection content={eatingOut} />

      {/* Section 4: Ayurvedic Herbs for PCOS */}
      <section className="py-16 md:py-24 bg-[#F5F1EA] px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="mb-6" style={{
              fontFamily: "'Nunito Sans', sans-serif",
              fontSize: '48px',
              fontWeight: '700',
              color: '#1A1A1A',
              lineHeight: '1.2'
            }}>
              Ayurvedic Herbs Used for PCOS
            </h2>

            <p className="max-w-3xl mx-auto mb-6" style={{
              fontFamily: "'Nunito Sans', sans-serif",
              fontSize: '20px',
              fontWeight: '400',
              color: '#5F5F5F',
              lineHeight: '1.6'
            }}>
              Ayurveda uses herbs as part of a wider plan, prescribed by the doctor according to your health and any other medicines. Research on herbs in PCOS is still limited.
            </p>

          </motion.div>

          {/* Three Herb Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                name: "Shatavari (Asparagus racemosus)",
                benefits: "Traditionally used in Ayurveda for women's reproductive health."  ,
                evidence: "Studies in PCOS are limited; it is used as part of a doctor-prescribed plan.",
              },
              {
                name: "Ashwagandha (Withania somnifera)",
                benefits: "Traditionally used in Ayurveda for stress, which can affect cycles and cravings." ,
                evidence: "Studies in adults show it may help with stress; it has not been well studied in PCOS itself."
              },
              {
                name: "Triphala (Three Fruits)",
                 benefits: "A classical formula traditionally used for digestion and regular bowels.",
                evidence: "Used for digestive support; take only as prescribed."
              }
            ].map((herb, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl space-y-4 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4 bg-[#1F5E4B]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="white" />
                  </svg>
                </div>

                <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">
                  {herb.name}
                </h3>

                <div>
                  <p className="mb-2 text-[15px] font-semibold text-[#1F5E4B]">Benefits:</p>
                  <p className="text-sm text-[#5F5F5F] leading-relaxed">
                    {herb.benefits}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E9E2D6]">
                  <p className="mb-2 text-[15px] font-semibold text-[#1F5E4B]">Evidence:</p>
                  <p className="text-sm text-[#5F5F5F] leading-relaxed">
                    {herb.evidence}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Herb Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden">
              <img
                src="/images/example.jpg"
                alt="Ayurvedic herbs traditionally used for PCOS care at RamaCare Polyclinic, Jumeirah 1"
                className="w-full h-auto object-cover"
                style={{ maxHeight: '400px' }}
              />
            </div>
          </motion.div>

          {/* Important Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto rounded-2xl p-8" style={{ backgroundColor: '#F5F1EA' }}
          >
            <p style={{
              fontFamily: "'Nunito Sans', sans-serif",
              fontSize: '15px',
              fontWeight: '400',
              color: '#5F5F5F',
              lineHeight: '1.7',
              textAlign: 'center'
            }}>
              <strong style={{ fontWeight: '700', color: '#1A1A1A' }}>Important:</strong> Always consult with a licensed Ayurvedic practitioner before starting herbal supplements, especially if you're on medication (e.g., Metformin, birth control pills). At RamaCare, herbs are prescribed by Dr. Shamna Keloth Meethal, our female Ayurvedic doctor.
            </p>
          </motion.div>
        </div>
      </section>
<AyurvedaInfoSection content={testsAndDoctors} />
      {/* Section 5: People Also Ask (PAA) */}
      <section className="py-16 md:py-24 bg-white px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-6" style={{
              fontFamily: "'Nunito Sans', sans-serif",
              fontSize: '48px',
              fontWeight: '700',
              color: '#1A1A1A',
              lineHeight: '1.2'
            }}>
              PCOS Diet: Frequently Asked Questions
            </h2>

            <p className="max-w-3xl mx-auto" style={{
              fontFamily: "'Nunito Sans', sans-serif",
              fontSize: '20px',
              fontWeight: '400',
              color: '#5F5F5F',
              lineHeight: '1.6'
            }}>
              Common questions from women managing PCOS in Dubai
            </p>
          </motion.div>

          {/* FAQ Accordion */}
          <div className="space-y-4 mb-12">
            {faqData.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-xl overflow-hidden"
                style={{ backgroundColor: '#F5F1EA' }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left transition-all"
                  style={{ backgroundColor: openFaq === index ? 'white' : 'transparent', width: '100%' }}
                >
                  <span style={{
                    fontFamily: "'Nunito Sans', sans-serif",
                    fontSize: '16px',
                    fontWeight: '600',
                    color: '#1A1A1A'
                  }}>
                    {faq.question}
                  </span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className={`flex-shrink-0 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}
                  >
                    <path d="M5 7l5 5 5-5" stroke="#1F5E4B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                    >
                      <div
                        className="px-6 pb-6 pt-0 text-base leading-relaxed text-[#5F5F5F]"
                        style={{
                          fontFamily: "'Nunito Sans', sans-serif",
                          backgroundColor: 'white'
                        }}
                        dangerouslySetInnerHTML={{ __html: faq.answer }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Have More Questions CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl p-8 text-center" style={{ backgroundColor: '#F5F1EA' }}
          >
            <h3 className="mb-3" style={{
              fontFamily: "'Nunito Sans', sans-serif",
              fontSize: '24px',
              fontWeight: '700',
              color: '#1A1A1A'
            }}>
              Have More Questions?
            </h3>
            <p className="mb-6" style={{
              fontFamily: "'Nunito Sans', sans-serif",
              fontSize: '16px',
              fontWeight: '400',
              color: '#5F5F5F',
              lineHeight: '1.6'
            }}>
              Our Ayurvedic specialists are here to help you navigate your PCOS journey with personalized guidance.
            </p>
            <a
              href="#consultation"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full transition-all duration-300 hover:opacity-90"
              style={{
                fontFamily: "'Nunito Sans', sans-serif",
                fontWeight: '600',
                fontSize: '16px',
                backgroundColor: '#1F5E4B',
                color: 'white'
              }}
            >
              Ask Our Specialists
            </a>
          </motion.div>
        </div>
      </section>

      {/* Section 6: The "Hidden" Step */}
      <section className="py-16 md:py-24 bg-[#E9E2D6] px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-6" style={{
                fontFamily: "'Nunito Sans', sans-serif",
                fontSize: '48px',
                fontWeight: '700',
                color: '#1A1A1A',
                lineHeight: '1.2'
              }}>
                Beyond Diet: Daily Routine, Sleep and Movement
              </h2>

              <p className="mb-8" style={{
                fontFamily: "'Nunito Sans', sans-serif",
                fontSize: '18px',
                fontWeight: '400',
                color: '#5F5F5F',
                lineHeight: '1.7'
              }}>
                While food is foundational, PCOS management in Ayurveda also emphasizes <strong style={{ fontWeight: '600', color: '#1A1A1A' }}>Dinacharya</strong> (daily routines) and <strong style={{ fontWeight: '600', color: '#1A1A1A' }}>stress reduction</strong>:
              </p>

              <div className="space-y-8">
                {/* Pranayama */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#1F5E4B' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M9.59 4.59A2 2 0 1111 8H2m10.59 11.41A2 2 0 1014 16H2m15.73-8.27A2.5 2.5 0 1119.5 12H2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-2" style={{
                      fontFamily: "'Nunito Sans', sans-serif",
                      fontSize: '18px',
                      fontWeight: '700',
                      color: '#1A1A1A'
                    }}>
                      Pranayama (Breathwork)
                    </h3>
                    <p style={{
                      fontFamily: "'Nunito Sans', sans-serif",
                      fontSize: '15px',
                      fontWeight: '400',
                      color: '#5F5F5F',
                      lineHeight: '1.7'
                    }}>
                      Nadi Shodhana (alternate-nostril breathing) for 10 minutes a day is a simple Ayurvedic practice to help you relax; stress management is part of PCOS care.
                    </p>
                  </div>
                </div>

                {/* Sleep Hygiene */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#1F5E4B' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zm-1-13h2v6h-2zm0 8h2v2h-2z" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-2" style={{
                      fontFamily: "'Nunito Sans', sans-serif",
                      fontSize: '18px',
                      fontWeight: '700',
                      color: '#1A1A1A'
                    }}>
                      Sleep Hygiene
                    </h3>
                    <p style={{
                      fontFamily: "'Nunito Sans', sans-serif",
                      fontSize: '15px',
                      fontWeight: '400',
                      color: '#5F5F5F',
                      lineHeight: '1.7'
                    }}>
                      Aim for 10 PM–6 AM sleep . Poor sleep disrupts leptin and ghrelin, worsening insulin resistance.
                    </p>
                  </div>
                </div>

                {/* Movement */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#1F5E4B' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-2" style={{
                      fontFamily: "'Nunito Sans', sans-serif",
                      fontSize: '18px',
                      fontWeight: '700',
                      color: '#1A1A1A'
                    }}>
                      Movement
                    </h3>
                    <p style={{
                      fontFamily: "'Nunito Sans', sans-serif",
                      fontSize: '15px',
                      fontWeight: '400',
                      color: '#5F5F5F',
                      lineHeight: '1.7'
                    }}>
                      Regular exercise is one of the most helpful things for PCOS. Mix brisk walking, swimming or cycling with strength training; yoga is a good addition for stress. In summer, exercise indoors or early in the morning.
                    </p>
                  </div>
                </div>
              </div>

              {/* Why This Matters Box */}
              <div className="mt-8 rounded-2xl p-6" style={{ backgroundColor: 'white' }}>
                <p style={{
                  fontFamily: "'Nunito Sans', sans-serif",
                  fontSize: '15px',
                  fontWeight: '400',
                  color: '#5F5F5F',
                  lineHeight: '1.7'
                }}>
                  <strong style={{ fontWeight: '700', color: '#1A1A1A' }}>Why This Matters:</strong> Diet, regular exercise, sleep and stress management work best together for PCOS.
                </p>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/images/pcos2.jpg"
                  alt="Yoga and breathwork for PCOS management in Dubai"
                  className="w-full h-full object-cover"
                  style={{ minHeight: '500px' }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
<AyurvedaInfoSection content={yourVisit} />
      {/* Consultation CTA Section */}
      <section id="consultation" className="py-16 md:py-24 bg-[#F5F1EA] px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-6" style={{
              fontFamily: "'Nunito Sans', sans-serif",
              fontSize: '48px',
              fontWeight: '700',
              color: '#1A1A1A',
              lineHeight: '1.2'
            }}>
              Take the First Step at RamaCare Polyclinic
            </h2>

            <p className="max-w-3xl mx-auto" style={{
              fontFamily: "'Nunito Sans', sans-serif",
              fontSize: '18px',
              fontWeight: '400',
              color: '#5F5F5F',
              lineHeight: '1.7'
            }}>
              Located in the heart of Jumeirah 1, RamaCare Polyclinic offers personalized Ayurvedic consultations for PCOS management, combining ancient wisdom with modern medical standards.
            </p>
          </motion.div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left - Why Choose RamaCare */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="mb-8" style={{
                fontFamily: "'Nunito Sans', sans-serif",
                fontSize: '24px',
                fontWeight: '700',
                color: '#1A1A1A'
              }}>
                Why Choose RamaCare?
              </h3>

              <div className="space-y-4 mb-8">
                {/* Benefit Items */}
                {[
                  'Female Ayurvedic doctor (BAMS) and female GP',
                  'Blood tests arranged by our GP in the same building',
                  'Diet plan for your body and routine',
                  'Female therapists for any therapies',
                  'Jumeirah 1, near Satwa and Al Wasl; open daily 10am–10pm'
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: '#1F5E4B' }}>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <circle cx="6" cy="6" r="3" fill="white" />
                      </svg>
                    </div>
                    <p style={{
                      fontFamily: "'Nunito Sans', sans-serif",
                      fontSize: '16px',
                      fontWeight: '400',
                      color: '#5F5F5F'
                    }}>
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              {/* Contact Information Box */}
              <div className="rounded-2xl p-6" style={{ backgroundColor: 'white' }}>
                <h4 className="mb-4" style={{
                  fontFamily: "'Nunito Sans', sans-serif",
                  fontSize: '18px',
                  fontWeight: '700',
                  color: '#1A1A1A'
                }}>
                  Contact Information
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M10 2C6.13 2 3 5.13 3 9c0 5.25 7 11 7 11s7-5.75 7-11c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" stroke="#1F5E4B" strokeWidth="1.5" />
                    </svg>
                    <span style={{
                      fontFamily: "'Nunito Sans', sans-serif",
                      fontSize: '15px',
                      fontWeight: '400',
                      color: '#5F5F5F'
                    }}>
                      12 Al Dhiyafah Rd - Jumeirah Terrace Building, Ground Floor, Dubai
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M2 3c0-1.1.9-2 2-2h2.5l1.5 3-2 1.5c1.1 2.2 3 4 5.2 5.2L13 9l3 1.5V13c0 1.1-.9 2-2 2-7.18 0-13-5.82-13-13z" stroke="#1F5E4B" strokeWidth="1.5" />
                    </svg>
                    <span style={{
                      fontFamily: "'Nunito Sans', sans-serif",
                      fontSize: '15px',
                      fontWeight: '400',
                      color: '#5F5F5F'
                    }}>
                      056 659 7878 (WhatsApp and call) · 04 286 2006
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M2 5c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V5z" stroke="#1F5E4B" strokeWidth="1.5" />
                      <path d="M2 5l8 6 8-6" stroke="#1F5E4B" strokeWidth="1.5" />
                    </svg>
                    <span style={{
                      fontFamily: "'Nunito Sans', sans-serif",
                      fontSize: '15px',
                      fontWeight: '400',
                      color: '#5F5F5F'
                    }}>
                      query@ramacarepolyclinic.com
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right - Booking Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              id="appointment-form"
              className="bg-white p-8 md:p-10 rounded-2xl shadow-xl"
            >
              <h3 className="mb-6" style={{
                fontFamily: "'Nunito Sans', sans-serif",
                fontSize: '24px',
                fontWeight: '700',
                color: '#1A1A1A'
              }}>
                Book Your PCOS Consultation in Jumeirah 1 Today
              </h3>

              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <label className="block mb-2" style={{
                    fontFamily: "'Nunito Sans', sans-serif",
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#1A1A1A'
                  }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border-2 focus:border-[#1F5E4B] focus:ring-0 transition-colors"
                    style={{
                      fontFamily: "'Nunito Sans', sans-serif",
                      fontSize: '15px',
                      color: '#1A1A1A',
                      borderColor: '#E9E2D6',
                      backgroundColor: '#F5F5F5'
                    }}
                    required
                  />
                </div>

                <div>
                  <label className="block mb-2" style={{
                    fontFamily: "'Nunito Sans', sans-serif",
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#1A1A1A'
                  }}>
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    placeholder="+971"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border-2 focus:border-[#1F5E4B] focus:ring-0 transition-colors"
                    style={{
                      fontFamily: "'Nunito Sans', sans-serif",
                      fontSize: '15px',
                      color: '#1A1A1A',
                      borderColor: '#E9E2D6',
                      backgroundColor: '#F5F5F5'
                    }}
                    required
                  />
                </div>

                <div>
                  <label className="block mb-2" style={{
                    fontFamily: "'Nunito Sans', sans-serif",
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#1A1A1A'
                  }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    placeholder="yourname@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border-2 focus:border-[#1F5E4B] focus:ring-0 transition-colors"
                    style={{
                      fontFamily: "'Nunito Sans', sans-serif",
                      fontSize: '15px',
                      color: '#1A1A1A',
                      borderColor: '#E9E2D6',
                      backgroundColor: '#F5F5F5'
                    }}
                    required
                  />
                </div>

                <div>
                  <label className="block mb-2" style={{
                    fontFamily: "'Nunito Sans', sans-serif",
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#1A1A1A'
                  }}>
                    Preferred Time
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Morning / Afternoon / Evening"
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border-2 focus:border-[#1F5E4B] focus:ring-0 transition-colors"
                    style={{
                      fontFamily: "'Nunito Sans', sans-serif",
                      fontSize: '15px',
                      color: '#1A1A1A',
                      borderColor: '#E9E2D6',
                      backgroundColor: '#F5F5F5'
                    }}
                  />
                </div>

                <div>
                  <label className="block mb-2" style={{
                    fontFamily: "'Nunito Sans', sans-serif",
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#1A1A1A'
                  }}>
                    Your Main Concern
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Irregular periods, weight gain, acne..."
                    value={formData.concern}
                    onChange={(e) => setFormData({ ...formData, concern: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border-2 focus:border-[#1F5E4B] focus:ring-0 transition-colors"
                    style={{
                      fontFamily: "'Nunito Sans', sans-serif",
                      fontSize: '15px',
                      color: '#1A1A1A',
                      borderColor: '#E9E2D6',
                      backgroundColor: '#F5F5F5'
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold transition-all hover:opacity-90"
                  style={{
                    backgroundColor: '#1F5E4B',
                    color: 'white',
                    fontFamily: "'Nunito Sans', sans-serif",
                    fontSize: '16px',
                    fontWeight: '600'
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M2.5 10L17.5 2L9.5 17.5L8 11L2.5 10Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Book Your Consultation
                </button>

                <p className="text-center" style={{
                  fontFamily: "'Nunito Sans', sans-serif",
                  fontSize: '13px',
                  fontWeight: '400',
                  color: '#5F5F5F',
                  lineHeight: '1.5'
                }}>
                  By submitting this form, you agree to receive communications from RamaCare Polyclinic.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Reading */}
      <section className="bg-white py-16 md:py-24 border-t border-[#E9E2D6]/40">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-10">
            Related Ayurvedic Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
            <a href="/services/pcos-treatment-dubai/" className="bg-[#F5F1EA] hover:bg-[#E9E2D6] p-6 rounded-2xl flex items-center justify-between transition-all group shadow-sm">
              <span className="font-bold text-[#1A1A1A] group-hover:text-[#1F5E4B]">Ayurvedic PCOS Treatment</span>
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#1F5E4B] transition-transform group-hover:translate-x-1" />
            </a>
            <a href="/services/ayurvedic-diet-weight-loss-dubai/" className="bg-[#F5F1EA] hover:bg-[#E9E2D6] p-6 rounded-2xl flex items-center justify-between transition-all group shadow-sm">
              <span className="font-bold text-[#1A1A1A] group-hover:text-[#1F5E4B]">Ayurvedic Diet for Weight Loss</span>
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#1F5E4B] transition-transform group-hover:translate-x-1" />
            </a>
            <a href="/services/ayurvedic-diet-vs-intermittent-fasting-dubai/" className="bg-[#F5F1EA] hover:bg-[#E9E2D6] p-6 rounded-2xl flex items-center justify-between transition-all group shadow-sm">
              <span className="font-bold text-[#1A1A1A] group-hover:text-[#1F5E4B]">Ayurvedic Diet vs Intermittent Fasting</span>
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#1F5E4B] transition-transform group-hover:translate-x-1" />
            </a>
            <a href="/services/ayurvedic-diet-vs-keto-dubai/" className="bg-[#F5F1EA] hover:bg-[#E9E2D6] p-6 rounded-2xl flex items-center justify-between transition-all group shadow-sm">
              <span className="font-bold text-[#1A1A1A] group-hover:text-[#1F5E4B]">Ayurvedic Diet vs Keto</span>
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#1F5E4B] transition-transform group-hover:translate-x-1" />
            </a>
            <a href="/services/ayurvedic-diet-skin-hair-dubai/" className="bg-[#F5F1EA] hover:bg-[#E9E2D6] p-6 rounded-2xl flex items-center justify-between transition-all group shadow-sm">
              <span className="font-bold text-[#1A1A1A] group-hover:text-[#1F5E4B]">Ayurvedic Diet for Skin & Hair</span>
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#1F5E4B] transition-transform group-hover:translate-x-1" />
            </a>
            <a href="/services/ayurvedic-diet-plan-dubai/" className="bg-[#F5F1EA] hover:bg-[#E9E2D6] p-6 rounded-2xl flex items-center justify-between transition-all group shadow-sm">
              <span className="font-bold text-[#1A1A1A] group-hover:text-[#1F5E4B]">Ayurvedic Diet Plan</span>
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#1F5E4B] transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>
      <ContentReviewBadge doctorName="Dr. Shamna Keloth Meethal" pageSlug="ayurvedic-diet-pcos-dubai" lastReviewed="2026-01-12" />

      {/* Fixed Bottom Bar */}
      <AnimatePresence>
        {showBottomBar && (
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="fixed bottom-0 left-0 right-0 shadow-2xl z-40"
            style={{ backgroundColor: '#1F5E4B' }}
          >
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
              <p className="text-white flex-1" style={{
                fontFamily: "'Nunito Sans', sans-serif",
                fontSize: '16px',
                fontWeight: '400'
              }}>
                <strong style={{ fontWeight: '600' }}>Struggling with PCOS symptoms in Dubai?</strong> Get a personalized treatment plan.
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="#consultation"
                  className="px-6 py-2 rounded-full bg-white text-sm md:text-base whitespace-nowrap transition-all hover:opacity-90"
                  style={{
                    fontFamily: "'Nunito Sans', sans-serif",
                    fontSize: '16px',
                    fontWeight: '600',
                    color: '#1F5E4B'
                  }}
                >
                  Book Consultation
                </a>
                <button
                  onClick={() => setShowBottomBar(false)}
                  className="text-white hover:opacity-70 transition-opacity"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M15 5L5 15M5 5l10 10" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
}
