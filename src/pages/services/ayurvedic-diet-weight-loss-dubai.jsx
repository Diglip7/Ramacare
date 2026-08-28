import React, { useState } from 'react';
import Layout from '../../../components/Layout';
import Head from "next/head";
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { useToast } from '../../../components/Toast';
import ContentReviewBadge from '../../../components/ContentReviewBadge';

const content = {
  hero: {
    title: 'Ayurvedic Diet for Weight Loss in Dubai: Sustainable Fat Loss through Metabolic Balance',
    description: 'If you\'ve tried every calorie-counting app and "low-carb" trend in the UAE only to see the weight return, it\'s time for a different approach. An Ayurvedic diet for weight loss in Dubai doesn\'t just focus on the scale; it focuses on your Agni (digestive fire) and the elimination of Ama (metabolic toxins).',
    summary: {
      title: 'The "Answer-First" Summary for Weight Loss',
      question: 'How does Ayurveda help with weight loss in Dubai?',
      answer: 'Unlike restrictive diets, Ayurveda identifies that weight gain is often a result of a sluggish Kapha dosha and poor digestion. By shifting your heaviest meal to midday, incorporating fat-burning spices like ginger and black pepper, and following a "Kapha-pacifying" plan, residents can see visible results within 3 to 6 weeks while improving overall energy and sleep.'
    },
    ctaButtons: {
      primary: { text: 'Start Your 30-Day Transformation' },
      secondary: { text: 'WhatsApp Consultation', phone: '971566597878' }
    },
    trustBadges: [
      { label: 'DHA Compliant', icon: 'CheckCircle2' },
      { label: 'Jumeirah Location', icon: 'CheckCircle2' },
      { label: 'Personalized Plans', icon: 'CheckCircle2' }
    ]
  },
  weightTrap: {
    title: '1. The "Dubai Weight" Trap: Why Standard Diets Fail Here',
    items: [
      {
        title: 'High-Carb, Low-Activity Lifestyle',
        description: 'Long work hours, car-dependent commutes, and restaurant culture create the perfect storm for Kapha imbalance.',
        icon: 'AlertCircle'
      },
      {
        title: 'Weak Digestive Fire (Mandagni)',
        description: 'Air conditioning, late dinners, and irregular meal timing suppress Agni, leading to Ama buildup and stubborn fat.',
        icon: 'TrendingDown'
      },
      {
        title: 'One-Size-Fits-All Plans',
        description: 'Generic keto or fasting plans ignore your unique Prakriti (constitution), causing frustration and rebound weight gain.',
        icon: 'Thermometer'
      }
    ]
  },
  pillars: {
    title: '2. The 3 Pillars of Ayurvedic Fat Loss',
    items: [
      {
        letter: 'A',
        title: 'Kindle Your Digestive Fire (Agni)',
        description: 'Before thinking about calories, we assess your digestive strength. A weak Agni leads to Ama (toxins) that block fat metabolism. We use warm spices (cumin, fennel, ginger) and avoid cold, heavy foods that dampen your metabolic fire.',
        icon: '🔥'
      },
      {
        letter: 'B',
        title: 'Eat with the Sun',
        description: 'Your largest meal should be at lunch (12-1 PM) when Agni is naturally strongest. Dinner should be light and before 7 PM. This simple shift alone can reduce bloating and initiate fat loss within 7-10 days.',
        icon: '☀️'
      },
      {
        letter: 'C',
        title: 'Kapha-Pacifying Foods',
        description: 'Weight gain in Dubai often signals excess Kapha. We prioritize warm, cooked vegetables, mung dal, quinoa, and reduce dairy, fried foods, and refined sugars that aggravate Kapha.',
        icon: '🌿'
      }
    ]
  },
  superfoods: {
    title: '3. Ayurvedic "Superfoods" for Fat Burning in the UAE',
    items: [
      {
        title: 'Triphala',
        description: 'A gentle detoxifier that supports regular elimination and reduces bloating—critical for clearing Ama.',
        icon: '🌿'
      },
      {
        title: 'Guggul',
        description: 'Traditionally used to support healthy cholesterol and stimulate fat metabolism.',
        icon: '🌿'
      },
      {
        title: 'Cinnamon',
        description: 'Helps regulate blood sugar and enhances Agni without overstimulation.',
        icon: '🌿'
      }
    ]
  },
  faqs: {
    title: '4. People Also Ask (PAA) - Weight Loss Dubai',
    items: [
      {
        question: 'Can I follow an Ayurvedic diet if I eat out frequently in Dubai?',
        answer: 'Yes. We teach you how to navigate menus: choose grilled over fried, opt for lentil-based dishes, avoid heavy cream sauces, and request warm water instead of cold beverages.'
      },
      {
        question: 'How long until I see results?',
        answer: 'Most patients notice improved digestion and energy within 10-14 days. Visible fat loss typically begins in 3-4 weeks, with sustained progress over 3 months.'
      },
      {
        question: 'Is this safe alongside my medications?',
        answer: 'Ayurvedic diets are food-based and generally safe. However, we always recommend informing your primary physician, especially if you are on diabetes or thyroid medication.'
      },
      {
        question: 'Do I need to buy special supplements?',
        answer: 'Not necessarily. Many Ayurvedic herbs (cumin, turmeric, ginger) are available in Dubai supermarkets. For clinical-grade formulations like Triphala or Guggul, we provide guidance on sourcing.'
      }
    ]
  },
  clinical: {
    title: '5. Experience Clinical Weight Loss at RamaCare',
    description: 'At RamaCare Polyclinic in Jumeirah, we combine ancient Ayurvedic wisdom with modern diagnostic tools. Our practitioners conduct a full Prakriti and Vikriti assessment, review your lifestyle in the context of Dubai\'s unique climate, and design a personalized Ahara (diet) and Vihara (lifestyle) plan.',
    points: [
      { label: 'Week 1-2', text: 'Initial consultation, dosha analysis, baseline metabolic assessment' },
      { label: 'Week 3-6', text: 'Customized meal plans, herbal support, weekly progress tracking' },
      { label: 'Month 2-3', text: 'Fine-tuning, sustainable habit formation, long-term maintenance strategy' }
    ],
     cta: 'Start Your 30-Day Transformation in Jumeirah Today'
   },
   retargeting: {
     title: 'Still Thinking?',
     cards: [
       { label: '4.9/5 Patient Rating', icon: 'Star', stars: 5 },
       { label: '500+', subLabel: 'Successful Transformations', icon: 'Users' },
       { label: '3-6 Weeks', subLabel: 'To Visible Results', icon: 'Clock' }
     ],
     badge: 'Limited consultation slots this week',
     buttons: {
       confirm: 'Book Now',
       whatsapp: 'WhatsApp Instantly'
     }
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
        <title key="title">Ayurvedic Diet for Weight Loss Dubai | Natural Fat Loss Plans</title>
        <meta name="description" content="Lose weight sustainably without fad diets. Our DHA-licensed Ayurvedic weight loss plans in Dubai target the root cause of obesity by boosting metabolism and balancing Doshas. Visit RamaCare Jumeirah" key="description" />
        
      </Head>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
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
              const Icon = LucideIcons[item.icon];
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
                      <div className="p-6 pt-0 text-[#5F5F5F] leading-relaxed text-sm md:text-[16px] bg-white">
                        {faq.answer}
                      </div>
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

      {/* Section: Still Thinking? */}
      <section className="bg-[#F5F1EA] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl lg:text-[36px] font-bold text-[#1A1A1A] mb-6"
          >
            {content.retargeting.title}
          </motion.h3>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
            {content.retargeting.cards.map((card, idx) => {
              const Icon = LucideIcons[card.icon];
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center justify-center w-[304px] h-[168px]"
                >
                  <Icon className="text-[#1F5E4B] mb-3" size={40} />
                  {card.stars && (
                    <div className="flex gap-1 mb-2">
                      {[...Array(card.stars)].map((_, i) => (
                        <LucideIcons.Star key={i} size={16} className="fill-[#1F5E4B] text-[#1F5E4B]" />
                      ))}
                    </div>
                  )}
                  <p className={`${card.subLabel ? 'text-2xl font-bold' : 'text-sm'} text-[#1A1A1A] mb-1`}>{card.label}</p>
                  {card.subLabel && <p className="text-[#5F5F5F] text-sm">{card.subLabel}</p>}
                </motion.div>
              );
            })}
          </div>

          <div className="flex flex-col items-center gap-8">
            <div className="bg-white px-6 py-3 rounded-full border border-[#E9E2D6] flex items-center gap-2 shadow-sm">
              <LucideIcons.Zap className="text-orange-500 fill-orange-500" size={18} />
              <strong className="text-[#1F5E4B] font-bold text-[18px]">
                {content.retargeting.badge}
              </strong>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
              <button 
                onClick={scrollToForm}
                className="flex-1 bg-[#1F5E4B] text-white px-8 py-4 rounded-lg font-bold text-[16px] hover:bg-[#164435] transition-all shadow-lg"
              >
                {content.retargeting.buttons.confirm}
              </button>
              <a 
                href={`https://wa.me/${content.hero.ctaButtons.secondary.phone}`}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="flex-1 bg-white text-[#1F5E4B] px-8 py-4 rounded-lg font-bold text-[16px] border-2 border-[#1F5E4B] hover:bg-gray-50 transition-all flex items-center justify-center gap-2"
              >
                {content.retargeting.buttons.whatsapp}
              </a>
            </div>
          </div>
        </div>
      </section>

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
                <option value="weight-loss">Weight Loss</option>
                <option value="metabolism">Boost Metabolism</option>
                <option value="detox">Detoxification</option>
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
                <option value="morning">Morning (9 AM - 12 PM)</option>
                <option value="afternoon">Afternoon (12 PM - 4 PM)</option>
                <option value="evening">Evening (4 PM - 8 PM)</option>
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

      <ContentReviewBadge doctorName="Dr. Shamna Keloth Meethal" pageSlug="ayurvedic-diet-weight-loss-dubai" />

      {/* Sticky Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#1F5E4B] text-white py-4 px-6 z-50 shadow-2xl">
        <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="font-bold text-lg">Start Your 30-Day Transformation</p>
            <p className="text-xs text-white/70">Limited slots available this week</p>
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
