import React, { useState, useEffect } from 'react';
import Layout from '../../../components/Layout';
import Head from "next/head";
import { motion, AnimatePresence } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { useToast } from '../../../components/Toast';
import { useRouter } from 'next/router';
import ContentReviewBadge from '../../../components/ContentReviewBadge';

const content = {
  hero: {
    title: 'Ayurvedic Detox Diet Plan in Dubai: Rejuvenate Your System from the Inside Out',
    description: 'In a city as vibrant and fast-paced as Dubai, our bodies are constantly exposed to environmental pollutants, processed "mall food," and high-stress levels. An Ayurvedic Detox Diet Plan in Dubai is not a restrictive "starvation" diet; it is a clinical process of removing Ama (metabolic waste) while nourishing your cells back to health.',
    summary: {
      title: 'The Answer-First Summary for Body Detox',
      question: 'What is the best way to detox in Dubai?',
      answer: 'Unlike liquid-only cleanses, a true Ayurvedic detox focuses on kindling the digestive fire (Agni). By consuming easily digestible foods like Kitchari, using detoxifying spices like cumin and coriander, and following a specific sequence of internal oleation (using Ghee), residents can clear brain fog, improve skin clarity, and reset their digestion in as little as 5 to 7 days.'
    },
    ctaButtons: {
      primary: { text: 'Start Your Detox Plan' },
      secondary: { text: 'WhatsApp Consultation', phone: '971566597878' }
    },
    trustBadges: [
      { label: 'DHA Licensed', icon: 'CheckCircle2' },
      { label: 'Jumeirah 1 Location', icon: 'MapPin' },
      { label: '5-7 Day Reset', icon: 'Clock' }
    ],
    topBanner: 'Dubai Detox Program – 5 to 7 Day Ayurvedic Reset'
  },
  essential: {
    title: '1. Why a Dubai Detox is Essential in 2026',
    items: [
      {
        title: 'Environmental Ama',
        description: 'Even with high-end air filtration, living in an urban desert environment leads to the accumulation of fine particulates in the respiratory and digestive tracts.',
        icon: 'Wind'
      },
      {
        title: 'Social Toxicity',
        description: 'The frequent dining out and high caffeine consumption common in Dubai\'s corporate sectors (DIFC/Marina) overload the liver and gallbladder.',
        icon: 'Coffee'
      },
      {
        title: 'Circadian Disruption',
        description: 'Late-night city lights and late dinners prevent the body\'s natural nighttime detoxification cycle.',
        icon: 'Moon'
      }
    ]
  },
  phases: {
    title: '2. The Phases of Your Ayurvedic Detox Plan',
    subtitle: 'As a DHA-licensed Ayurvedic clinic, we follow a structured, three-phase clinical detoxification process at our Jumeirah center:',
    items: [
      {
        step: 1,
        title: 'Phase 1: Preparation (Purvakarma)',
        description: 'Before flushing toxins, we must loosen them. For 3 days, eliminate caffeine, white sugar, and red meat. Start your morning with warm lemon water and a pinch of rock salt to stimulate the gallbladder.',
      },
      {
        step: 2,
        title: 'Phase 2: The Main Cleanse (Kitchari Fast)',
        description: 'Kitchari (a balanced mix of mung dal and basmati rice) is the gold standard of Ayurvedic detox. The Benefit: It provides complete protein and fiber, making it easy on the gut while scraping toxins from the intestinal walls. Dubai Tip: Use organic mung beans available at Organic Foods & Café for the highest purity.',
      },
      {
        step: 3,
        title: 'Phase 3: Reintroduction (Paschatkarma)',
        description: 'The most common mistake in Dubai is breaking a detox with a heavy brunch. Gradually reintroduce solid foods, starting with steamed vegetables and light soups, to ensure your Agni stays strong.',
      }
    ]
  },
  spices: {
    title: '3. Top 3 Detoxifying Spices for UAE Residents',
    items: [
      {
        title: 'Coriander (Dhania)',
        description: 'Excellent for the Dubai heat, it is a natural diuretic that helps flush the kidneys and cool the blood.',
        image: '/images/detox.jpg'
      },
      {
        title: 'Cumin (Jeera)',
        description: 'The ultimate gas-buster. It prevents bloating after meals and stimulates digestive enzymes.',
        image: '/images/detox1.jpg'
      },
      {
        title: 'Fennel (Saunf)',
        description: 'Highly effective for sugar cravings—a common struggle for those trying to detox in the UAE.',
        image: '/images/detox2.jpg'
      }
    ]
  },
  faqs: {
    title: '4. People Also Ask (PAA) - Detox Dubai',
    items: [
      {
        question: 'Will I feel tired during an Ayurvedic detox?',
        answer: 'You may experience a healing crisis (slight headache or fatigue) on day 2 as toxins enter the bloodstream. However, by day 4, most of our Jumeirah clients report a massive surge in mental clarity and physical lightness.'
      },
      {
        question: 'Can I do this detox while working a 9-to-5 job in Dubai?',
        answer: 'Yes. Most working professionals in Dubai complete this detox alongside their regular schedule. The key is preparation: eat your Kitchari meals at consistent times, stay hydrated through the day, and avoid scheduling high-stress meetings during Phase 1 when energy dips are most common. Many of our Jumeirah clients complete the full 5–7 day plan during a normal work week by prepping meals the night before.'
      },
      {
        question: 'Is a detox the same as Panchakarma?',
        answer: 'Not quite. A detox diet plan uses food, herbs, and daily routine changes to gently clear Ama (toxins) and can be done independently at home with guidance. Panchakarma is a more intensive, clinic-administered Ayurvedic therapy — including procedures like Virechana, Basti, and Nasya — typically recommended for deeper, long-standing imbalances. Many patients start with a detox diet plan and progress to a full Panchakarma program if needed. Learn more about <a href="/services/panchakarma-treatment-dubai/" class="text-[#1F5E4B] underline font-bold">Panchakarma Treatment in Dubai</a>.'
      }
    ]
  },
  experience: {
    title: '5. Experience a Guided Detox at RamaCare Polyclinic',
    items: [
      {
        title: 'Toxin Assessment',
        description: 'We identify where your toxins are stored (joints, gut, or blood).',
        icon: 'CheckCircle'
      },
      {
        title: 'Custom Spice Blends',
        description: 'We provide the exact ratios of herbs needed for your specific Dosha.',
        icon: 'CheckCircle'
      },
      {
        title: 'Integrated Support',
        description: 'Combine your diet with our infrared sauna or lymphatic drainage for maximum results.',
        icon: 'CheckCircle'
      }
    ]
  },
  authorityFooter: {
    title: 'The Authority Footer',
    description: 'Ready to hit the reset button? Begin your journey with a clinical Ayurvedic Diet Plan Dubai. Our detox programs are the hidden secret of Dubai\'s healthiest residents.',
    buttonText: 'Start Your Body Reset in Jumeirah Today'
  },
  reviewer: {
    name: 'Dr. Shamna Keloth Meethal',
    role: 'BAMS, Ayurveda Doctor (DHA Licensed)'
  }
};

export default function AyurvedicDetoxDietPlanPage() {
  const { showToast, ToastComponent } = useToast();
  const [openFaq, setOpenFaq] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupData, setPopupData] = useState({ name: '', email: '' });
  const router = useRouter();

  const faqsForSchema = content.faqs.items.map(faq => ({
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
        "@id": "https://ramacarepolyclinic.ae/services/ayurvedic-detox-diet-plan-dubai/#webpage",
        "url": "https://ramacarepolyclinic.ae/services/ayurvedic-detox-diet-plan-dubai/",
        "name": "Ayurvedic Detox Diet Plan Dubai | Clinical Body Cleansing",
        "description": "Flush out toxins and reset your metabolism. Our DHA-licensed Ayurvedic detox diet plans in Dubai focus on clearing Ama (toxins) and restoring gut health. Visit RamaCare Jumeirah 1.",
        "inLanguage": "en",
        "isPartOf": {
          "@type": "WebSite",
          "url": "https://ramacarepolyclinic.ae/",
          "name": "RamaCare Polyclinic"
        },
        "about": {
          "@type": "MedicalCondition",
          "name": "Metabolic Detoxification / Ama Clearance"
        },
        "image": "https://ramacarepolyclinic.ae/images/detox3.png",
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://ramacarepolyclinic.ae/images/detox3.png"
        },
        "lastReviewed": "2026-08-29",
        "reviewedBy": {
          "@id": "https://ramacarepolyclinic.ae/services/ayurvedic-detox-diet-plan-dubai/#physician"
        },
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ramacarepolyclinic.ae/" },
            { "@type": "ListItem", "position": 2, "name": "Ayurveda", "item": "https://ramacarepolyclinic.ae/services/ayurveda-dubai" },
            { "@type": "ListItem", "position": 3, "name": "Ayurvedic Detox Diet Plan", "item": "https://ramacarepolyclinic.ae/services/ayurvedic-detox-diet-plan-dubai/" }
          ]
        }
      },
      {
        "@type": "Physician",
        "@id": "https://ramacarepolyclinic.ae/services/ayurvedic-detox-diet-plan-dubai/#physician",
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
        "@id": "https://ramacarepolyclinic.ae/services/ayurvedic-detox-diet-plan-dubai/#faq",
        "mainEntity": faqsForSchema
      }
    ]
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPopupOpen(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hello RamaCare, I'm interested in the Ayurvedic Detox Diet Plan. Please help me book a consultation.");
    window.open(`https://wa.me/${content.hero.ctaButtons.secondary.phone}?text=${message}`, '_blank');
  };

  const handleBookAppointment = () => {
    router.push('/book-appointment');
  };

  const handleWhatsAppDownloadSubmit = (e) => {
    e.preventDefault();

    if (!popupData.name || !popupData.email) {
      showToast('Please fill in all fields', 'error');
      return;
    }

    const message = encodeURIComponent(`Hello RamaCare, my name is ${popupData.name} (${popupData.email}) and I would like to get my free 5-Day Detox Plan PDF!`);
    window.open(`https://wa.me/971566597878?text=${message}`, '_blank');

    showToast('Redirecting to WhatsApp to send your details...', 'success');
    setIsPopupOpen(false);
    setPopupData({ name: '', email: '' });
  };

  return (
    <Layout>
      {ToastComponent}
      <Head>
        <title key="title">Ayurvedic Detox Diet Plan Dubai | Clinical Body Cleansing</title>
        <meta name="description" content="Flush out toxins and reset your metabolism. Our DHA-licensed Ayurvedic detox diet plans in Dubai focus on clearing Ama (toxins) and restoring gut health. Visit RamaCare Jumeirah 1." key="description" />
        <meta name="robots" content="index, follow" key="robots" />
        <link rel="canonical" href="https://ramacarepolyclinic.ae/services/ayurvedic-detox-diet-plan-dubai/" key="canonical" />

        {/* Open Graph Tags */}
        <meta property="og:type" content="website" key="og:type" />
        <meta property="og:title" content="Ayurvedic Detox Diet Plan Dubai | Clinical Body Cleansing" key="og:title" />
        <meta property="og:description" content="Flush out toxins and reset your metabolism. Our DHA-licensed Ayurvedic detox diet plans in Dubai focus on clearing Ama (toxins) and restoring gut health. Visit RamaCare Jumeirah 1." key="og:description" />
        <meta property="og:url" content="https://ramacarepolyclinic.ae/services/ayurvedic-detox-diet-plan-dubai/" key="og:url" />
        <meta property="og:image" content="https://ramacarepolyclinic.ae/images/detox3.png" key="og:image" />
        <meta property="og:image:width" content="1200" key="og:image:width" />
        <meta property="og:image:height" content="630" key="og:image:height" />
        <meta property="og:image:alt" content="Ayurvedic Detox Diet Plan in Dubai - RamaCare Polyclinic" key="og:image:alt" />
        <meta property="og:site_name" content="RamaCare Polyclinic" key="og:site_name" />
        <meta property="og:locale" content="en_AE" key="og:locale" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content="Ayurvedic Detox Diet Plan Dubai | Clinical Body Cleansing" key="twitter:title" />
        <meta name="twitter:description" content="Reset your metabolism with a DHA-licensed Ayurvedic detox diet plan in Dubai — clearing Ama (toxins) and restoring gut health in as little as 5–7 days." key="twitter:description" />
        <meta name="twitter:image" content="https://ramacarepolyclinic.ae/images/detox3.png" key="twitter:image" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaGraph)
          }}
        />
      </Head>

      {/* Lead Capture Popup */}
      <AnimatePresence>
        {isPopupOpen && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white rounded-3xl p-8 max-w-md w-full relative shadow-2xl"
            >
              <button
                onClick={() => setIsPopupOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <LucideIcons.X size={20} />
              </button>

              <div className="text-left">
                <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4 leading-tight">
                  Wait! Don't Miss This
                </h3>
                <p className="text-[#5F5F5F] mb-6 text-base leading-relaxed">
                  Submit your details to receive your free 5-Day Detox Plan PDF instantly via WhatsApp.
                </p>

                <form onSubmit={handleWhatsAppDownloadSubmit} className="space-y-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    required
                    value={popupData.name}
                    onChange={(e) => setPopupData(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#E9E2D6] focus:border-[#1F5E4B] outline-none transition-all text-[#1A1A1A]"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                    value={popupData.email}
                    onChange={(e) => setPopupData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#E9E2D6] focus:border-[#1F5E4B] outline-none transition-all text-[#1A1A1A]"
                  />
                  <button
                    type="submit"
                    className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white py-3 rounded-full font-bold text-base transition-all flex items-center justify-center gap-2"
                  >
                    <LucideIcons.MessageCircle size={20} />
                    Get PDF via WhatsApp
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Top Banner */}
      <div className="bg-[#F2EFE9] py-3 px-4 border-b border-[#E9E2D6] hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <p className="text-[#1A1A1A] text-sm md:text-base flex-1 text-center font-medium">
            {content.hero.topBanner}
          </p>
          <button
            onClick={handleBookAppointment}
            className="bg-[#1F5E4B] text-white px-6 py-2 rounded-full text-base font-bold hover:bg-[#163f35] transition-all"
          >
            Start Your Detox Plan
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        {/* Breadcrumbs */}
        <nav className="flex flex-wrap items-center gap-y-1.5 text-xs font-semibold text-[#5F5F5F] mb-6  tracking-wider">
          <a href="/" className="hover:text-[#1F5E4B] transition-colors">Home</a>
          <span className="mx-2">/</span>
          <a href="/services/ayurveda-dubai/" className="hover:text-[#1F5E4B] transition-colors">Ayurveda</a>
          <span className="mx-2">/</span>
          <span className="text-gray-400">Ayurvedic detox diet plan</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-6 leading-tight">
              {content.hero.title}
            </h1>
            <p className="text-[#5F5F5F] text-lg mb-10 leading-relaxed">
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
                onClick={handleBookAppointment}
                className="bg-[#1F5E4B] text-white px-8 py-4 rounded-full font-bold hover:bg-[#163f35] transition-all shadow-lg flex items-center justify-center gap-2"
              >
                {content.hero.ctaButtons.primary.text}
              </button>
              <button
                onClick={handleWhatsAppClick}
                className="bg-white text-[#1F5E4B] px-8 py-4 rounded-full font-bold border-2 border-[#1F5E4B] hover:bg-[#1F5E4B] hover:text-white transition-all text-center flex items-center justify-center gap-2"
              >
                <LucideIcons.MessageCircle size={20} />
                {content.hero.ctaButtons.secondary.text}
              </button>
            </div>

            {/* Trust Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-8 border-t border-[#E9E2D6]/40">
              <div className="flex items-center gap-2">
                <LucideIcons.ShieldCheck className="w-5 h-5 text-[#1F5E4B]" />
                <span className="text-xs font-semibold text-gray-700">DHA Licensed Facility</span>
              </div>
              <div className="flex items-center gap-2">
                <LucideIcons.Clock className="w-5 h-5 text-[#1F5E4B]" />
                <span className="text-xs font-semibold text-gray-700">15+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <LucideIcons.Users className="w-5 h-5 text-[#1F5E4B]" />
                <span className="text-xs font-semibold text-gray-700">500+ Resets Done</span>
              </div>
              <div className="flex items-center gap-2">
                <LucideIcons.Star className="w-5 h-5 text-[#1F5E4B]" />
                <span className="text-xs font-semibold text-gray-700">4.8/5 Patient Rating</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-[32px] shadow-2xl w-full max-w-[500px] ml-auto mr-4 mb-4">
              <img
                src="/images/detox3.png"
                alt="Ayurvedic detox bowl with herbs"
                className="rounded-[32px] shadow-2xl w-full h-auto"
              />
              {/* Floating Card */}
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-[24px] shadow-2xl hidden md:block z-10 border border-[#F5F1EA]">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#1F5E4B] rounded-full flex items-center justify-center text-white shadow-lg">
                    <LucideIcons.Check size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] text-[#5F5F5F] font-bold uppercase tracking-widest mb-1">Quick Results</p>
                    <p className="text-lg font-bold text-[#1A1A1A]">5-7 Days</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 1: Why a Dubai Detox */}
      <section className="bg-[#F5F1EA] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-[40px] font-bold text-[#1A1A1A] mb-12 text-center"
          >
            {content.essential.title}
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {content.essential.items.map((item, idx) => {
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-10 rounded-[24px] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all"
                >
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">
                    {item.title}
                  </h3>
                  <p className="text-[#5F5F5F] leading-relaxed text-base">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 2: The Phases */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-[40px] font-bold text-[#1A1A1A] mb-4"
            >
              {content.phases.title}
            </motion.h2>
            <p className="text-[#5F5F5F] text-lg mb-12 max-w-3xl mx-auto leading-relaxed">
              {content.phases.subtitle}
            </p>
          </div>

          <div className="space-y-8 mb-20 max-w-5xl mx-auto">
            {content.phases.items.map((phase, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex gap-6 items-start"
              >
                <div className="w-16 h-16 bg-[#1F5E4B] rounded-full flex items-center justify-center text-white text-xl font-bold shrink-0 shadow-lg">
                  {phase.step}
                </div>
                <div className="bg-[#F5F1EA] p-8 md:p-10 rounded-[32px] flex-1 border border-[#E9E2D6]">
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">{phase.title}</h3>
                  <p className="text-[#1F5E4B] italic mb-4 text-base leading-relaxed font-medium">
                    {idx === 0 ? 'Before flushing toxins, we must loosen them.' : idx === 1 ? 'Kitchari (a balanced mix of mung dal and basmati rice) is the gold standard of Ayurvedic detox.' : 'The most common mistake in Dubai is breaking a detox with a heavy brunch.'}
                  </p>
                  <p className="text-[#5F5F5F] leading-relaxed whitespace-pre-line text-base">
                    {phase.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-[32px] overflow-hidden shadow-2xl max-w-5xl mx-auto"
          >
            <img
              src="/images/a-diet.jpg"
              alt="Ayurvedic detox diet bowl with wholesome ingredients"
              className="w-full h-[300px] sm:h-[450px] object-cover rounded-[32px]"
            />
          </motion.div>
        </div>
      </section>

      {/* Section 3: Top 3 Spices */}
      <section className="bg-[#F5F1EA] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-12 text-center"
          >
            {content.spices.title}
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {content.spices.items.map((spice, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-white rounded-[32px] overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-[#E9E2D6]/50" >
                <div className="h-64 overflow-hidden">
                  <img
                    src={spice.image}
                    alt={spice.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">{spice.title}</h3>
                  <p className="text-[#5F5F5F] leading-relaxed text-base">
                    {spice.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: FAQs */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-12 text-center">
            {content.faqs.title}
          </motion.h2>

          <div className="space-y-4 max-w-4xl mx-auto">
            {content.faqs.items.map((faq, idx) => (
              <div key={idx} className="bg-[#F5F1EA] rounded-2xl overflow-hidden transition-all duration-300">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-[#E9E2D6] transition-colors"
                >
                  <span className="font-bold text-[#1A1A1A] text-lg pr-4">{faq.question}</span>
                  <LucideIcons.ChevronDown className={`text-[#1F5E4B] transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div
                        className="px-6 pb-6 text-[#5F5F5F] leading-relaxed text-base"
                        dangerouslySetInnerHTML={{ __html: faq.answer }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Experience RamaCare */}
      <section className="bg-[#F5F1EA] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-12 text-center">
            {content.experience.title}
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {content.experience.items.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm text-center flex flex-col items-center"
              >
                <div className="w-16 h-16 bg-[#1F5E4B] rounded-full flex items-center justify-center text-white mb-6">
                  <LucideIcons.Check size={32} />
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">{item.title}</h3>
                <p className="text-[#5F5F5F] leading-relaxed text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Authority Footer (CTA) */}
      <section className="bg-[#1F5E4B] text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-8"
          >
            {content.authorityFooter.title}
          </motion.h2>
          <p className="text-lg md:text-xl text-[#F2EFE9] mb-12 leading-relaxed">
            {content.authorityFooter.description}
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleBookAppointment}
            className="bg-white text-[#1F5E4B] px-10 py-5 rounded-full font-bold text-lg md:text-xl shadow-xl hover:bg-gray-50 transition-all"
          >
            {content.authorityFooter.buttonText}
          </motion.button>
        </div>
      </section>

      {/* Related Services */}
      <section className="bg-white py-16 md:py-24 border-t border-[#E9E2D6]/40">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] text-center mb-10">
            Related Ayurvedic Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a href="/services/panchakarma-treatment-dubai/" className="bg-[#F5F1EA] hover:bg-[#E9E2D6] p-6 rounded-2xl flex items-center justify-between transition-all group shadow-sm">
              <span className="font-bold text-[#1A1A1A] group-hover:text-[#1F5E4B]">Panchakarma Treatment</span>
              <LucideIcons.ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#1F5E4B] transition-transform group-hover:translate-x-1" />
            </a>
            <a href="/services/ayurvedic-gut-health-dubai/" className="bg-[#F5F1EA] hover:bg-[#E9E2D6] p-6 rounded-2xl flex items-center justify-between transition-all group shadow-sm">
              <span className="font-bold text-[#1A1A1A] group-hover:text-[#1F5E4B]">Ayurvedic Gut Health</span>
              <LucideIcons.ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#1F5E4B] transition-transform group-hover:translate-x-1" />
            </a>
            <a href="/services/ayurvedic-diet-plan-dubai/" className="bg-[#F5F1EA] hover:bg-[#E9E2D6] p-6 rounded-2xl flex items-center justify-between transition-all group shadow-sm">
              <span className="font-bold text-[#1A1A1A] group-hover:text-[#1F5E4B]">Ayurvedic Diet Plan</span>
              <LucideIcons.ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#1F5E4B] transition-transform group-hover:translate-x-1" />
            </a>
            <a href="/services/pcos-treatment-dubai/" className="bg-[#F5F1EA] hover:bg-[#E9E2D6] p-6 rounded-2xl flex items-center justify-between transition-all group shadow-sm">
              <span className="font-bold text-[#1A1A1A] group-hover:text-[#1F5E4B]">PCOS Treatment</span>
              <LucideIcons.ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#1F5E4B] transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>

      {/* Content Reviewer Badge */}
      <ContentReviewBadge doctorName="Dr. Shamna Keloth Meethal" pageSlug="ayurvedic-detox-diet-plan-dubai" />
    </Layout>
  );
}
