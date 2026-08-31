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
    title: 'Ayurvedic Diet Plan for Busy Professionals in Dubai: Sustain High Performance Naturally',
    description: 'In the fast-paced corridors of DIFC, Business Bay, and Dubai Media City, the "hustle" often comes at a physical cost. Late-night emails, back-to-back meetings, and the constant hum of air conditioning lead to what Ayurveda calls a Vata imbalance—manifesting as anxiety, digestive "jitters," and the dreaded 3 PM brain fog.\n\nAn Ayurvedic Diet Plan for Busy Professionals in Dubai is not a time-consuming luxury; it is a bio-hacking tool designed to optimize your cognitive function and physical resilience without disrupting your schedule.',
    ctaButtons: {
      primary: { text: 'Book Executive Wellness Assessment' },
      secondary: { text: 'WhatsApp Consultation', phone: '971566597878' }
    },
    imageCard: {
      title: 'Premium Corporate Wellness',
      subtitle: 'Herbal tea • Laptop • minimal luxury'
    }
  },
  summary: {
    title: 'The "Answer-First" Summary for Corporate Wellness',
    description: 'How can busy Dubai professionals stay healthy with Ayurveda? The key is Consistency over Complexity. By shifting your heaviest caloric intake to the "Business Lunch" window (12:00 PM – 2:00 PM) when digestion is strongest, replacing your third espresso with a Brahmi infusion to lower cortisol, and finishing a light dinner 3 hours before sleep, you can reset your circadian rhythm and sustain peak energy levels throughout the workday.',
    items: [
      {
        title: 'Smart Lunch Timing',
        icon: 'Coffee'
      },
      {
        title: 'Herbal Adaptations',
        icon: 'Leaf'
      },
      {
        title: 'Evening Reset',
        icon: 'Clock'
      }
    ],
    cta: 'Learn More About Our Approach'
  },
  syndrome: {
    title: '1. The "Dubai Executive" Syndrome: Vata & Pitta Imbalance',
    items: [
      {
        title: 'Vata Aggravation (The Overworked Mind)',
        description: 'Constant multitasking and screen time lead to restlessness, dry eyes, and erratic digestion.',
        icon: 'Brain',
        bgColor: 'bg-[#E9F2FF]'
      },
      {
        title: 'Pitta Flare-up (The Burnout)',
        description: 'Tight deadlines and high competition increase "fire" in the system, leading to acidity, irritability, and inflammatory responses.',
        icon: 'Coffee',
        bgColor: 'bg-[#FFF5E9]'
      }
    ]
  },
  protocol: {
    title: '2. The 3-Step "Desk-Side" Ayurvedic Protocol',
    items: [
      {
        letter: 'A',
        title: 'The Power Business Lunch',
        description: 'In Dubai, lunch is often a networking event. The Ayurvedic Choice: When dining at DIFC favorites, opt for warm, cooked meals over raw salads. Raw food requires immense digestive energy—energy your brain needs for that 2 PM presentation.',
        favor: 'Favor: Grilled fish, lentil soups (Dal), or Mediterranean-style roasted vegetables with quinoa.'
      },
      {
        letter: 'B',
        title: 'Smart Caffeine Alternatives',
        description: 'The "third coffee" often leads to a crash. The Switch: Try Tulsi (Holy Basil) Tea or Ashwagandha-infused milk. These are "Adaptogens" that help your body adapt to stress rather than just masking fatigue.',
        favor: 'The "Agni" Tea: Keep a flask of Cumin-Coriander-Fennel (CCF) water at your desk to prevent the bloating caused by sitting for long hours.'
      },
      {
        letter: 'C',
        title: 'Screen Recovery & Eye Care',
        description: 'Digital eye strain is a major professional complaint in Dubai.',
        favor: 'Action: Apply a drop of pure Rose Water or perform a quick <a href="/services/ayurveda-dubai/" class="text-[#1F5E4B] underline font-bold">Netra Tarpana (eye nourishment) at our Jumeirah clinic</a> to soothe the "Pitta" in the eyes caused by blue light.'
      }
    ]
  },
  herbs: {
    title: '3. Top 3 "Cognitive" Herbs for Productivity',
    items: [
      {
        title: 'Brahmi (Gotu Kola)',
        description: 'The premier "Brain Tonic" that enhances memory and focus while calming the nervous system.',
        icon: 'Leaf'
      },
      {
        title: 'Shankhapushpi',
        description: 'Improves concentration and reduces the mental "noise" that prevents deep work.',
        icon: 'Leaf'
      },
      {
        title: 'Jatamansi',
        description: 'Excellent for those who struggle to "switch off" after a long day in the office; it promotes restful, restorative sleep.',
        icon: 'Leaf'
      }
    ],
    footer: 'A professional in a Dubai office holding a cup of herbal tea with a bowl of almonds and walnuts on the desk'
  },
  faq: {
    title: '4. People Also Ask (PAA) - Professional Life Dubai',
    items: [
      {
        question: 'I travel frequently for work; can I still follow an Ayurvedic diet?',
        answer: 'Yes. Ayurveda is about principles, not just recipes. When traveling through DXB, choose warm soups or stews over cold sandwiches and always stay hydrated with room-temperature water to counter the Vata of air travel.'
      },
      {
        question: 'How can I manage my diet during Ramadan or late-night corporate events?',
        answer: 'Focus on "Sattvic" (pure) foods that are easy on the liver. If you must eat late, keep the portion small and sip warm ginger tea afterward to aid the overnight digestive process.'
      },
      {
        question: 'Do you offer corporate wellness consultations at the clinic?',
        answer: 'Yes. RamaCare Polyclinic in Jumeirah 1 provides group assessments and personalized "Office Vitality" plans for teams looking to reduce sick leave and boost collective productivity.'
      }
    ]
  },
  whyChoice: {
    title: "5. Why RamaCare is the Choice for Dubai's Leaders",
    subtitle: 'We understand that your time is your most valuable asset.',
    items: [
      {
        title: 'Efficient Consultations',
        description: 'Our Jumeirah 1 clinic is designed for the professional schedule, providing clear, actionable plans you can implement immediately.',
        icon: 'CheckCircle'
      },
      {
        title: 'Science-Backed Ayurveda',
        description: 'We combine ancient wisdom with an understanding of modern metabolic stress.',
        icon: 'Award'
      },
      {
        title: 'Central Location',
        description: 'Located conveniently in Jumeirah 1, easily accessible from Downtown and DIFC.',
        icon: 'MapPin'
      }
    ],
    badges: ['DHA Licensed', 'Dubai Clinic', 'Expert Reviewed']
  },
  authorityFooter: {
    title: 'The "Authority" Footer',
    description: 'Don\'t wait for burnout to take action. Optimize your career and your health with a strategic <a href="/services/ayurvedic-diet-plan-dubai/" class="underline font-bold text-white">Ayurvedic Diet Plan Dubai</a>.',
    buttonText: 'Book Your Executive Wellness Assessment in Jumeirah Today'
  },
  assessmentForm: {
    title: 'Book Your Executive Wellness Assessment',
    fields: {
      fullName: 'Full Name',
      phoneNumber: 'Phone Number',
      preferredTime: 'Preferred Time',
      primaryConcern: 'Primary Concern'
    },
    buttons: {
      confirm: 'Confirm Appointment',
      whatsapp: 'Book via WhatsApp'
    }
  },
  reviewer: {
    name: 'Shamna',
    role: 'Ayurvedic Specialist at RamaCare Polyclinic, Dubai.'
  }
};

export default function AyurvedicDietPlanBusyProfessionalsPage() {
  const { showToast, ToastComponent } = useToast();
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    preferredTime: '',
    primaryConcern: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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
        "@id": "https://ramacarepolyclinic.ae/services/ayurvedic-diet-plan-busy-professionals-dubai/#webpage",
        "url": "https://ramacarepolyclinic.ae/services/ayurvedic-diet-plan-busy-professionals-dubai/",
        "name": "Ayurvedic Diet for Busy Professionals Dubai | Optimize Focus & Energy",
        "description": "Stop the burnout. Our DHA-licensed Ayurvedic diet plans for Dubai professionals target DIFC/Business Bay lifestyles. Balance stress, improve sleep, and boost productivity. Visit RamaCare Jumeirah 1.",
        "inLanguage": "en",
        "isPartOf": {
          "@type": "WebSite",
          "url": "https://ramacarepolyclinic.ae/",
          "name": "RamaCare Polyclinic"
        },
        "about": {
          "@type": "MedicalCondition",
          "name": "Work-Related Stress & Burnout (Vata-Pitta Imbalance)"
        },
        "lastReviewed": "2026-08-29",
        "reviewedBy": {
          "@id": "https://ramacarepolyclinic.ae/services/ayurvedic-diet-plan-busy-professionals-dubai/#physician"
        },
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ramacarepolyclinic.ae/" },
            { "@type": "ListItem", "position": 2, "name": "Ayurveda", "item": "https://ramacarepolyclinic.ae/services/ayurveda-dubai/" },
            { "@type": "ListItem", "position": 3, "name": "Ayurvedic Diet for Busy Professionals", "item": "https://ramacarepolyclinic.ae/services/ayurvedic-diet-plan-busy-professionals-dubai/" }
          ]
        }
      },
      {
        "@type": "Physician",
        "@id": "https://ramacarepolyclinic.ae/services/ayurvedic-diet-plan-busy-professionals-dubai/#physician",
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
        "@id": "https://ramacarepolyclinic.ae/services/ayurvedic-diet-plan-busy-professionals-dubai/#faq",
        "mainEntity": faqsForSchema
      }
    ]
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hello RamaCare, I'm interested in the Ayurvedic Diet Plan for Busy Professionals. Please help me book a consultation.");
    window.open(`https://wa.me/${content.hero.ctaButtons.secondary.phone}?text=${message}`, '_blank');
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.fullName || !formData.phone || !formData.email) {
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
          fullName: formData.fullName,
          phone: formData.phone,
          email: formData.email,
          preferredTime: formData.preferredTime,
          concern: formData.primaryConcern,
          source: 'ayurvedic-diet-plan-busy-professionals-dubai'
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        showToast('Appointment request submitted successfully! We will contact you soon.', 'success');
        setFormData({
          fullName: '',
          phone: '',
          email: '',
          preferredTime: '',
          primaryConcern: ''
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
    const formSection = document.getElementById('assessment-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <Layout>
      {ToastComponent}
      <Head>
        <title key="title">Ayurvedic Diet for Busy Professionals Dubai | Optimize Focus & Energy</title>
        <meta name="description" content="Stop the burnout. Our DHA-licensed Ayurvedic diet plans for Dubai professionals target DIFC/Business Bay lifestyles. Balance stress, improve sleep, and boost productivity. Visit RamaCare Jumeirah 1." key="description" />
        <meta name="robots" content="index, follow" key="robots" />
        <link rel="canonical" href="https://ramacarepolyclinic.ae/services/ayurvedic-diet-plan-busy-professionals-dubai/" key="canonical" />

        {/* Open Graph Tags */}
        <meta property="og:type" content="website" key="og:type" />
        <meta property="og:title" content="Ayurvedic Diet for Busy Professionals Dubai | Optimize Focus & Energy" key="og:title" />
        <meta property="og:description" content="Stop the burnout. Our DHA-licensed Ayurvedic diet plans for Dubai professionals target DIFC/Business Bay lifestyles. Balance stress, improve sleep, and boost productivity. Visit RamaCare Jumeirah 1." key="og:description" />
        <meta property="og:url" content="https://ramacarepolyclinic.ae/services/ayurvedic-diet-plan-busy-professionals-dubai/" key="og:url" />
        <meta property="og:image" content="https://ramacarepolyclinic.ae/images/diet3.jpg" key="og:image" />
        <meta property="og:image:width" content="1200" key="og:image:width" />
        <meta property="og:image:height" content="630" key="og:image:height" />
        <meta property="og:image:alt" content="Ayurvedic Diet Plan for Busy Professionals in Dubai - RamaCare Polyclinic" key="og:image:alt" />
        <meta property="og:site_name" content="RamaCare Polyclinic" key="og:site_name" />
        <meta property="og:locale" content="en_AE" key="og:locale" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content="Ayurvedic Diet for Busy Professionals Dubai | Optimize Focus & Energy" key="twitter:title" />
        <meta name="twitter:description" content="A DHA-licensed Ayurvedic approach for DIFC and Business Bay professionals — balance stress, improve sleep, and sustain energy through the workday." key="twitter:description" />
        <meta name="twitter:image" content="https://ramacarepolyclinic.ae/images/diet3.jpg" key="twitter:image" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaGraph)
          }}
        />
      </Head>

      {/* Hero Section */}
      <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumbs */}
          <nav className="flex flex-wrap items-center gap-y-1.5 text-xs font-semibold text-[#5F5F5F] mb-6 tracking-wider">
            <a href="/" className="hover:text-[#1F5E4B] transition-colors">Home</a>
            <span className="mx-2">/</span>
            <a href="/services/ayurveda-dubai/" className="hover:text-[#1F5E4B] transition-colors">Ayurveda</a>
            <span className="mx-2">/</span>
            <span className="text-gray-400">Ayurvedic Diet for Busy Professionals</span>
          </nav>

          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center w-full">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-[42px] sm:text-[54px] lg:text-[60px] font-semibold text-[#1A1A1A] mb-8 leading-[1.15] tracking-[-0.02em] max-w-[720px]">
              {content.hero.title}
            </h1>
            <p className="text-[#5F5F5F] mb-6 text-lg whitespace-pre-line ">
              {content.hero.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToForm}
                className="bg-[#1F5E4B] text-white px-8 py-4 rounded-lg hover:bg-[#16493a] transition-all duration-300 hover:shadow-xl flex items-center justify-center gap-2"
              >
                <LucideIcons.Calendar className="w-4 h-4" />
                {content.hero.ctaButtons.primary.text}
              </button>
              <button
                onClick={handleWhatsAppClick}
                className="border-2 border-[#1F5E4B] text-[#1F5E4B] px-8 py-4 rounded-lg hover:bg-[#1F5E4B] hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
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
            <div className="bg-[#E9E2D6] rounded-2xl p-8 shadow-2xl relative">
              <div className="aspect-square rounded-xl flex flex-col items-center justify-center text-center relative overflow-hidden">
                {/* Image placeholder - replace src with your image */}
                <Image
                  src="/images/diet3.jpg"
                  alt="Ayurvedic Diet Plan for Busy Professionals"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

      {/* Summary Section */}
      <section className="bg-[#E9E2D6] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-[#1A1A1A] mb-6 leading-tight tracking-tight"
          >
            {content.summary.title}
          </motion.h2>
          <p className="text-[#1A1A1A] text-lg leading-relaxed mb-8">
            {content.summary.description.split('Consistency over Complexity').map((part, i) => (
              <React.Fragment key={i}>
                {part}
                {i === 0 && <strong className="font-bold">Consistency over Complexity</strong>}
              </React.Fragment>
            ))}
          </p>

          <div className="grid sm:grid-cols-3 gap-6 mb-8 mt-10">
            {content.summary.items.map((item, idx) => {
              const Icon = LucideIcons[item.icon];
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-8 rounded-2xl shadow-sm flex flex-col items-center gap-4"
                >
                  <div className="text-[#1F5E4B]">
                    <Icon size={32} />
                  </div>
                  <span className="font-medium text-[#1A1A1A]">{item.title}</span>
                </motion.div>
              );
            })}
          </div>

          <a href="/services/ayurveda-dubai/" className="inline-block mt-8 bg-[#1F5E4B] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#16493a] transition-all duration-300">
            {content.summary.cta}
          </a>
        </div>
      </section>

      {/* Section 1: Syndrome */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-[40px] font-bold text-[#1A1A1A] mb-12 text-center tracking-tight"
          >
            {content.syndrome.title}
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {content.syndrome.items.map((item, idx) => {
              const Icon = LucideIcons[item.icon];
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`${item.bgColor} p-8 rounded-2xl flex flex-col gap-6 shadow-lg border border-[#E9E2D6]`}
                >
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-[#1F5E4B] shadow-sm">
                    <Icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1A1A1A] mb-4 tracking-tight">{item.title}</h3>
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

      {/* Section 2: Protocol */}
      <section className="bg-[#F5F1EA] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-[#1A1A1A] mb-12 text-center tracking-tight"
          >
            {content.protocol.title}
          </motion.h2>

          <div className="space-y-8">
            {content.protocol.items.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4 tracking-tight">
                  {step.letter}. {step.title}
                </h3>
                <p className="text-[#5F5F5F] text-base leading-relaxed mb-4">
                  {step.description}
                </p>
                {step.favor && (
                  <div className="bg-[#E9E2D6] p-4 rounded-lg border-l-4 border-[#1F5E4B]">
                    <p 
                      className="text-[#1A1A1A] text-base leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: step.favor }}
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Cognitive Herbs */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-[#1A1A1A] mb-12 text-center tracking-tight"
          >
            {content.herbs.title}
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {content.herbs.items.map((herb, idx) => {
              const Icon = LucideIcons[herb.icon];
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-gradient-to-br from-[#F5F1EA] to-white p-8 rounded-2xl shadow-lg border border-[#E9E2D6]/50 flex flex-col items-start text-left"
                >
                  <Icon size={48} className="text-[#1F5E4B] mb-4" />
                  <div>
                    <h3 className="text-xl font-bold text-[#1A1A1A] mb-4 tracking-tight">{herb.title}</h3>
                    <p className="text-[#5F5F5F] text-base leading-relaxed">
                      {herb.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#E9E2D6] p-8 rounded-2xl text-center flex flex-col items-center gap-4"
          >
            <LucideIcons.Eye size={64} className="text-[#1F5E4B] mx-auto mb-4" />
            <p className="text-[#1A1A1A] text-lg leading-relaxed max-w-3xl">
              {content.herbs.footer}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 4: FAQ (PAA) */}
      <section className="bg-[#F5F1EA] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-[#1A1A1A] mb-12 text-center tracking-tight"
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
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-xl shadow-md border border-[#E9E2D6] overflow-hidden"
              >
                <details className="group">
                  <summary className="flex justify-between items-center px-6 py-4 cursor-pointer list-none hover:bg-[#F5F1EA] transition-colors duration-200">
                    <span className="font-bold text-[#1A1A1A] text-base sm:text-lg pr-4">{item.question}</span>
                    <span className="transition-transform duration-300 group-open:rotate-180 shrink-0">
                      <LucideIcons.ChevronDown className="text-[#1F5E4B] w-5 h-5" />
                    </span>
                  </summary>
                  <div className="px-6 py-4 text-[#5F5F5F] text-base leading-relaxed bg-[#FDFBF9] border-t border-[#E9E2D6]">
                    {item.answer}
                  </div>
                </details>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Why RamaCare */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-[#1A1A1A] mb-12 tracking-tight"
          >
            {content.whyChoice.title}
          </motion.h2>
          <p className="text-[#5F5F5F] text-lg mb-12 max-w-3xl mx-auto">{content.whyChoice.subtitle}</p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {content.whyChoice.items.map((item, idx) => {
              const Icon = LucideIcons[item.icon];
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex flex-col items-center group"
                >
                  <div className="w-16 h-16 bg-[#F5F1EA] rounded-full flex items-center justify-center text-[#1F5E4B] mb-8 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <Icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-4 tracking-tight">{item.title}</h3>
                  <p className="text-[#5F5F5F] text-base leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {content.whyChoice.badges.map((badge, idx) => (
              <div 
                key={idx}
                className="bg-[#F5F1EA] px-8 py-3 rounded-full text-[#1A1A1A] font-bold text-sm flex items-center gap-3 border border-[#E9E2D6] shadow-sm hover:shadow-md transition-all cursor-default"
              >
                <LucideIcons.CheckCircle size={18} className="text-[#1F5E4B]" />
                {badge}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Authority Footer */}
      <section className="bg-[#1F5E4B] py-20 px-4 sm:px-6 lg:px-8 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight">
            {content.authorityFooter.title}
          </motion.h2>
          <p 
            className="text-lg mb-10 max-w-2xl mx-auto leading-relaxed"
            dangerouslySetInnerHTML={{ __html: content.authorityFooter.description }}
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToForm}
            className="bg-white text-[#1F5E4B] px-10 py-4 rounded-lg font-bold text-lg shadow-xl hover:bg-[#F5F1EA] transition-all">
            {content.authorityFooter.buttonText}
          </motion.button>
        </div>
      </section>

      {/* Section 7: Assessment Form */}
      <section id="assessment-form" className="bg-[#F5F1EA] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-bold text-[#1A1A1A] mb-8 text-center tracking-tight">
            {content.assessmentForm.title}
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-[#5F5F5F] mb-2">
                {content.assessmentForm.fields.fullName}
              </label>
              <input
                type="text"
                id="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-[#E9E2D6] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1F5E4B]"
                placeholder="Enter your full name"
                required/>
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-[#5F5F5F] mb-2">
                {content.assessmentForm.fields.phoneNumber}
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-[#E9E2D6] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1F5E4B]"
                placeholder="Enter your phone number"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#5F5F5F] mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-[#E9E2D6] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1F5E4B]"
                placeholder="Enter your email address"
                required
              />
            </div>
            <div>
              <label htmlFor="preferredTime" className="block text-sm font-medium text-[#5F5F5F] mb-2">
                {content.assessmentForm.fields.preferredTime}
              </label>
              <select
                id="preferredTime"
                value={formData.preferredTime}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-[#E9E2D6] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1F5E4B] bg-white"
              >
                <option value="">Select a time</option>
                <option value="morning">Morning</option>
                <option value="afternoon">Afternoon</option>
                <option value="evening">Evening</option>
              </select>
            </div>
            <div>
              <label htmlFor="primaryConcern" className="block text-sm font-medium text-[#5F5F5F] mb-2">
                {content.assessmentForm.fields.primaryConcern}
              </label>
              <textarea
                id="primaryConcern"
                value={formData.primaryConcern}
                onChange={handleInputChange}
                rows="4"
                className="w-full px-4 py-3 border border-[#E9E2D6] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1F5E4B]"
                placeholder="Describe your main health concerns..."
              ></textarea>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-[#1F5E4B] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#163f35] transition-all shadow-md flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <LucideIcons.CheckCircle size={20} />
                {isSubmitting ? 'Submitting...' : content.assessmentForm.buttons.confirm}
              </button>
              <button
                type="button"
                onClick={handleWhatsAppClick}
                className="flex-1 bg-[#25D366] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#1eaf52] transition-all shadow-md flex items-center justify-center gap-2"
              >
                <LucideIcons.MessageCircle size={20} />
                {content.assessmentForm.buttons.whatsapp}
              </button>
            </div>
          </form>
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
            <a href="/services/ayurvedic-diet-vs-intermittent-fasting-dubai/" className="bg-[#F5F1EA] hover:bg-[#E9E2D6] p-6 rounded-2xl flex items-center justify-between transition-all group shadow-sm">
              <span className="font-bold text-[#1A1A1A] group-hover:text-[#1F5E4B]">Diet vs. Fasting</span>
              <LucideIcons.ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#1F5E4B] transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>

      <ContentReviewBadge doctorName="Dr. Shamna Keloth Meethal" pageSlug="ayurvedic-diet-plan-busy-professionals-dubai" />

      {/* Bottom Sticky CTA for Mobile */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden">
        <a
          href={`https://wa.me/${content.hero.ctaButtons.secondary.phone}`}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform animate-pulse">
          <LucideIcons.MessageCircle size={32} />
        </a>
      </div>

      <div className="bg-[#1F5E4B] text-white py-4 px-6 text-center text-sm md:text-base hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <p>Ready to optimize your health and performance?</p>
          <button 
            onClick={scrollToForm}
            className="bg-white text-[#1F5E4B] px-6 py-2 rounded-lg font-bold hover:bg-gray-100 transition-all flex items-center gap-2"
          >
            <LucideIcons.Calendar size={18} />
            Book Assessment Now
          </button>
        </div>
      </div>
    </Layout>
  );
}
