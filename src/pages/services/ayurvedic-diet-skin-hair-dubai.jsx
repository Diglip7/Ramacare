import React, { useState } from 'react';
import Layout from '../../../components/Layout';
import Head from "next/head";
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { useToast } from '../../../components/Toast';
import ContentReviewBadge from '../../../components/ContentReviewBadge';

const content = {
  hero: {
    title: 'Ayurvedic Diet for Skin & Hair: Countering Dubai\'s Hard Water from Within',
    mainDescription: 'If you have noticed increased hair fall, a flaky scalp, or dull skin since moving to the UAE, you are likely experiencing the "Dubai Beauty Dilemma." While external filters help, the real secret to resilience lies in your internal nutrition. An Ayurvedic Diet for Skin & Hair in Dubai focuses on building Ojas (vitality) and balancing the Pitta dosha to protect your natural beauty from the harsh desert environment.',
    summaryBox: {
      title: 'The "Answer-First" Summary for Beauty & Vitality',
      description: 'Can diet stop hair fall caused by Dubai\'s water? While desalinated water is harsh on the exterior, hair fall in the UAE is often accelerated by "internal dryness" and high Pitta (heat). By incorporating Amla (Indian Gooseberry), healthy fats like Ghee, and cooling herbs that detoxify the blood (Rakta Dhatu), you can strengthen hair follicles and improve skin elasticity within 30 to 60 days.'
    },
    ctaButtons: {
      primary: { text: 'Book Your Beauty Consultation in Jumeirah Today' },
      secondary: { text: 'WhatsApp Consultation', phone: '971566597878' }
    },
    image: '/images/ayurvedic-skin-hair-treatment-dubai.jpg'
  },
  dubaiFactors: {
    title: '1. The "Dubai Factors" Destroying Your Skin and Hair',
    description: 'At RamaCare Polyclinic, we\'ve identified three specific local triggers that an Ayurvedic diet can neutralize:',
    items: [
      {
        title: 'Desalinated Water "Dryness"',
        description: 'The minerals in UAE tap water can strip the skin\'s natural oils. Ayurveda counters this by increasing "internal oleation"—eating specific fats that moisturize your cells from the inside out.',
        icon: 'Droplets'
      },
      {
        title: 'High Chlorine & Heat',
        description: 'The intense Dubai sun and chlorinated pool water aggravate Pitta, leading to scalp inflammation, premature greying, and skin redness.',
        icon: 'Flame'
      },
      {
        title: 'Micro-Nutrient Depletion',
        description: 'The fast-paced lifestyle often leads to a reliance on "dead" or processed foods that lack the silica and biotin found in fresh, Sattvic ingredients.',
        icon: 'AlertCircle'
      }
    ]
  },
  glowGrow: {
    title: '2. The "Glow & Grow" Dietary Protocol',
    subtitle: 'Our approach centers on Rakta-Mansa (Blood and Muscle tissue) nourishment — the Ayurvedic foundation for healthy hair and skin regeneration.',
    favor: {
      title: 'Foods to Favor (The "Radiance" List)',
      intro: 'Available at Organic Foods & Café or Spinneys:',
      items: [
        {
          title: 'The Hair Savior: Amla',
          description: 'High in Vitamin C and antioxidants, Amla is the premier Ayurvedic fruit for preventing hair thinning and greying.',
          icon: 'CheckCircle'
        },
        {
          title: 'Hydrating Seeds',
          description: 'Pumpkin and sunflower seeds are rich in Zinc and Vitamin E, essential for skin repair and hair follicle strength.',
          icon: 'CheckCircle'
        },
        {
          title: 'The "Liquid Gold": Ghee',
          description: 'Consuming a small amount of A2 Ghee helps lubricate the tissues, countering the drying effects of Dubai\'s AC and water.',
          icon: 'CheckCircle'
        },
        {
          title: 'Sweet, Juicy Fruits',
          description: 'Pomegranates and sweet grapes help cool the blood and reduce skin breakouts.',
          icon: 'CheckCircle'
        }
      ]
    },
    avoid: {
      title: 'Foods to Avoid',
      items: [
        {
          title: 'Excessive Spicy & Salty Foods',
          description: 'These increase heat (Pitta) in the body, which "burns" the hair follicles and leads to oily, acne-prone skin.',
          icon: 'XCircle'
        },
        {
          title: 'Fermented Foods (in excess)',
          description: 'While popular, too much vinegar or fermented pickles can aggravate skin conditions like Eczema or Psoriasis in the Dubai heat.',
          icon: 'XCircle'
        }
      ]
    }
  },
  dubaiScalp: {
    title: '3. Ayurvedic Secrets for the "Dubai Scalp"',
    image: '/images/diet.jpg',
    items: [
      {
        title: 'Aloe Vera Juice',
        description: 'A cooling tonic that cleanses the liver (the seat of skin health).',
        icon: 'Leaf'
      },
      {
        title: 'Bhringraj',
        description: 'Known as the "King of Hair," we prescribe this internally to improve blood circulation to the scalp.',
        icon: 'Leaf'
      },
      {
        title: 'Coconut & Curry Leaves',
        description: 'Incorporating these into your cooking provides the essential minerals needed to combat the minerals found in hard water.',
        icon: 'Leaf'
      }
    ]
  },
  paa: {
    title: '4. People Also Ask (PAA) - Dubai Beauty Edition',
    items: [
      {
        question: 'Will an Ayurvedic diet help if I already have a shower filter?',
        answer: 'Yes. A filter only addresses the external contact. An Ayurvedic diet strengthens the "building blocks" of your hair and skin, making them less susceptible to damage from hard water and UV rays.'
      },
      {
        question: 'How soon will I see a reduction in hair fall?',
        answer: 'Hair grows in cycles. Most patients at RamaCare see a significant reduction in "comb-loss" and an increase in skin hydration after one full lunar cycle (28 days) of following their personalized plan.'
      },
      {
        question: 'Is there a specific diet for "Dubai Acne"?',
        answer: 'Yes. Skin breakouts in the UAE are usually due to "Liquid Pitta" (toxins in the blood). We prescribe a Blood Purifying Diet rich in bitter greens and cooling herbs to clear the complexion.'
      }
    ]
  },
  whyLeader: {
    title: '5. Why RamaCare Polyclinic is the Leader in Aesthetic Ayurveda',
    items: [
      {
        title: 'DHA-Licensed Expertise',
        description: 'Your skin and hair health are managed by professionals who understand both clinical dermatology and Ayurvedic science.',
        icon: 'Award'
      },
      {
        title: 'Personalized Dosha Mapping',
        description: 'We don\'t just give you "beauty foods"; we find out why your body is reacting to the Dubai environment.',
        icon: 'UserCheck'
      },
      {
        title: 'Integrative Care',
        description: 'We can combine your diet plan with our in-house Ayurvedic scalp treatments (<a href="/services/shirodhara-therapy-in-dubai/" class="text-[#1F5E4B] underline font-bold">Shirodhara</a>) for maximum results.',
        icon: 'Stethoscope'
      }
    ]
  },
  ctaFinal: {
    title: "Don't let the Dubai environment dictate your confidence",
    subtitle: "Restore your natural radiance with a professional Ayurvedic diet plan in Dubai specifically tailored for skin and hair health.",
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
        "name": "Ayurvedic Diet for Skin & Hair Dubai | Fix Hair Fall Naturally",
        "description": "Combat the effects of Dubai's hard water and harsh climate. Our Ayurvedic diet plans for skin and hair focus on 'Ojas' to restore glow and stop hair fall from within. Visit RamaCare Jumeirah.",
        "inLanguage": "en",
        "isPartOf": {
          "@type": "WebSite",
          "url": "https://ramacarepolyclinic.ae/",
          "name": "RamaCare Polyclinic"
        },
        "about": {
          "@type": "MedicalCondition",
          "name": "Hair Fall / Skin Health (Ojas & Pitta Balance)"
        },
        "lastReviewed": "2026-08-29",
        "reviewedBy": {
          "@id": "https://ramacarepolyclinic.ae/services/ayurvedic-diet-skin-hair-dubai/#physician"
        },
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ramacarepolyclinic.ae/" },
            { "@type": "ListItem", "position": 2, "name": "Ayurveda", "item": "https://ramacarepolyclinic.ae/services/ayurveda-dubai" },
            { "@type": "ListItem", "position": 3, "name": "Ayurvedic Diet for Skin & Hair", "item": "https://ramacarepolyclinic.ae/services/ayurvedic-diet-skin-hair-dubai/" }
          ]
        }
      },
      {
        "@type": "Physician",
        "@id": "https://ramacarepolyclinic.ae/services/ayurvedic-diet-skin-hair-dubai/#physician",
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
        "@id": "https://ramacarepolyclinic.ae/services/ayurvedic-diet-skin-hair-dubai/#faq",
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
        <title key="title">Ayurvedic Diet for Skin & Hair Dubai | Fix Hair Fall Naturally</title>
        <meta name="description" content="Combat the effects of Dubai's hard water and harsh climate. Our Ayurvedic diet plans for skin and hair focus on 'Ojas' to restore glow and stop hair fall from within. Visit RamaCare Jumeirah." key="description" />
        <meta name="robots" content="index, follow" key="robots" />
        <link rel="canonical" href="https://ramacarepolyclinic.ae/services/ayurvedic-diet-skin-hair-dubai/" key="canonical" />

        {/* Open Graph Tags */}
        <meta property="og:type" content="website" key="og:type" />
        <meta property="og:title" content="Ayurvedic Diet for Skin & Hair Dubai | Fix Hair Fall Naturally" key="og:title" />
        <meta property="og:description" content="Combat the effects of Dubai's hard water and harsh climate. Our Ayurvedic diet plans for skin and hair focus on 'Ojas' to restore glow and stop hair fall from within. Visit RamaCare Jumeirah." key="og:description" />
        <meta property="og:url" content="https://ramacarepolyclinic.ae/services/ayurvedic-diet-skin-hair-dubai/" key="og:url" />
        <meta property="og:image" content="https://ramacarepolyclinic.ae/images/ayurvedic-diet-skin-hair-dubai-og.jpg" key="og:image" />
        <meta property="og:image:width" content="1200" key="og:image:width" />
        <meta property="og:image:height" content="630" key="og:image:height" />
        <meta property="og:image:alt" content="Ayurvedic Diet for Skin and Hair in Dubai - RamaCare Polyclinic" key="og:image:alt" />
        <meta property="og:site_name" content="RamaCare Polyclinic" key="og:site_name" />
        <meta property="og:locale" content="en_AE" key="og:locale" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content="Ayurvedic Diet for Skin & Hair Dubai | Fix Hair Fall Naturally" key="twitter:title" />
        <meta name="twitter:description" content="Stop hair fall and restore skin glow with an Ayurvedic diet plan built for Dubai's hard water and harsh climate — DHA-licensed care in Jumeirah." key="twitter:description" />
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
                  const Icon = LucideIcons[item.icon];
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
                  const Icon = LucideIcons[item.icon];
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
                const Icon = LucideIcons[item.icon];
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
            </div>
          </div>
        </div>
      </section>

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
            <a href="/services/shirodhara-therapy-in-dubai/" className="bg-[#F5F1EA] hover:bg-[#E9E2D6] p-6 rounded-2xl flex items-center justify-between transition-all group shadow-sm">
              <span className="font-bold text-[#1A1A1A] group-hover:text-[#1F5E4B] text-sm">Shirodhara Therapy</span>
              <LucideIcons.ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#1F5E4B] transition-transform group-hover:translate-x-1" />
            </a>
            <a href="/services/ayurvedic-hairfall-treatment-dubai/" className="bg-[#F5F1EA] hover:bg-[#E9E2D6] p-6 rounded-2xl flex items-center justify-between transition-all group shadow-sm">
              <span className="font-bold text-[#1A1A1A] group-hover:text-[#1F5E4B] text-sm">Hairfall Treatment</span>
              <LucideIcons.ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#1F5E4B] transition-transform group-hover:translate-x-1" />
            </a>
            <a href="/services/skin-diseases-treatment/" className="bg-[#F5F1EA] hover:bg-[#E9E2D6] p-6 rounded-2xl flex items-center justify-between transition-all group shadow-sm">
              <span className="font-bold text-[#1A1A1A] group-hover:text-[#1F5E4B] text-sm">Skin Diseases Treatment</span>
              <LucideIcons.ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#1F5E4B] transition-transform group-hover:translate-x-1" />
            </a>
            <a href="/services/ayurvedic-gut-health-dubai/" className="bg-[#F5F1EA] hover:bg-[#E9E2D6] p-6 rounded-2xl flex items-center justify-between transition-all group shadow-sm">
              <span className="font-bold text-[#1A1A1A] group-hover:text-[#1F5E4B] text-sm">Ayurvedic Gut Health</span>
              <LucideIcons.ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#1F5E4B] transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>

      <ContentReviewBadge doctorName="Dr. Shamna Keloth Meethal" pageSlug="ayurvedic-diet-skin-hair-dubai" />

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
