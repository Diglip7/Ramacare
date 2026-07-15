import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Layout from '../../../components/Layout';
import { Calendar, Phone, CheckCircle2, ArrowRight, ArrowUpRight, Stethoscope, Droplets, Zap, Sun, Shield, Activity, Heart, UserCheck, Sparkles, Microscope, Award, Building, MapPin, Smile, Clock, Layers, ShieldCheck, DollarSign, MessageCircle, Star, Thermometer } from 'lucide-react';

export default function RosaceaTreatmentDubai() {
  const treatments = [
    {
      icon: <Stethoscope className="w-10 h-10 text-[#1F5E4B]" />,
      title: "Dermatologist Consultation",
      description: "Your journey starts with a detailed consultation with a DHA licensed dermatologist. Discussion of symptoms, medical history, lifestyle habits, and triggers."
    },
    {
      icon: <Activity className="w-10 h-10 text-[#1F5E4B]" />,
      title: "Comprehensive Skin Assessment",
      description: "Using modern dermatology tools, we assess your skin's condition, identify your rosacea subtype, and rule out other conditions like acne or eczema."
    },
    {
      icon: <Droplets className="w-10 h-10 text-[#1F5E4B]" />,
      title: "Topical Therapy",
      description: "Medicated topical treatments can help reduce redness, inflammation, and bumps. Often a first-line approach for milder to moderate presentations."
    },
    {
      icon: <Heart className="w-10 h-10 text-[#1F5E4B]" />,
      title: "Oral Medications",
      description: "For more persistent or inflammatory rosacea, oral medications may be recommended to help control breakouts from within, particularly for papulopustular rosacea."
    },
    {
      icon: <Zap className="w-10 h-10 text-[#1F5E4B]" />,
      title: "Laser Therapy",
      description: "Target visible blood vessels and persistent redness. Laser energy works by addressing dilated vessels beneath the skin's surface over a series of sessions."
    },
    {
      icon: <Sun className="w-10 h-10 text-[#1F5E4B]" />,
      title: "IPL (Intense Pulsed Light)",
      description: "Alternative approach to target redness and vascular changes associated with rosacea, depending on your skin type and assessment findings."
    }
  ];

  const lifestyleTips = [
    {
      icon: <Sun className="w-8 h-8 text-[#D4A574]" />,
      title: "Sun Protection",
      description: "Non-negotiable in Dubai — daily broad-spectrum SPF is one of the most effective ways to prevent flare-ups."
    },
    {
      icon: <Shield className="w-8 h-8 text-[#D4A574]" />,
      title: "Trigger Avoidance",
      description: "Pay attention to your personal patterns, whether that's spicy food, alcohol, or overheating."
    },
    {
      icon: <Droplets className="w-8 h-8 text-[#D4A574]" />,
      title: "Gentle Skincare",
      description: "Avoid harsh scrubs, alcohol-based toners, and fragranced products to help protect your skin barrier."
    },
    {
      icon: <Heart className="w-8 h-8 text-[#D4A574]" />,
      title: "Stress Management",
      description: "Mindfulness, exercise, or simply better sleep can reduce flare-up frequency for many patients."
    },
    {
      icon: <Activity className="w-8 h-8 text-[#D4A574]" />,
      title: "Diet Considerations",
      description: "Moderate spicy foods and alcohol to help some individuals notice fewer flushing episodes."
    },
    {
      icon: <CheckCircle2 className="w-8 h-8 text-[#D4A574]" />,
      title: "Consistent Routine",
      description: "Simple, gentle, and consistent daily skincare tends to outperform a complicated routine with too many active ingredients."
    }
  ];

  return (
    <Layout>
      <Head>
        <title>Rosacea Treatment Dubai | RamaCare Polyclinic</title>
        <meta name="title" content="Rosacea Treatment Dubai | Expert Dermatology Care" />
        <meta name="description" content="Struggling with facial redness? Get expert Rosacea Treatment Dubai at RamaCare Polyclinic with DHA licensed dermatologists. Book your consultation today." />
        <meta name="keywords" content="Rosacea Treatment Dubai, Best Rosacea Treatment Dubai, Rosacea Specialist Dubai, Rosacea Clinic Dubai, Dermatologist for Rosacea Dubai, Facial Redness Treatment Dubai, Rosacea Skin Treatment Dubai, Rosacea Laser Treatment Dubai, Rosacea Management Dubai, Chronic Facial Redness Dubai, Sensitive Skin Treatment Dubai, Rosacea Consultation Dubai, Rosacea Care Dubai, Skin Clinic Dubai, Red Face Treatment Dubai, Rosacea Dermatology Dubai" />
        <link rel="canonical" href="https://ramacarepolyclinic.ae/services/rosacea-treatment-dubai/" />
        <meta property="og:title" content="Tired of Facial Redness? Expert Rosacea Care in Dubai" />
        <meta property="og:description" content="RamaCare Polyclinic offers personalized Rosacea Treatment Dubai plans led by DHA licensed dermatologists. Calm your skin, restore your confidence. Book now." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ramacarepolyclinic.ae/services/rosacea-treatment-dubai/" />

        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalClinic",
              "name": "RamaCare Polyclinic",
              "medicalSpecialty": "Dermatology",
              "url": "https://ramacarepolyclinic.ae/services/rosacea-treatment-dubai/",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Dubai",
                "addressCountry": "AE"
              },
              "priceRange": "$$"
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalCondition",
              "name": "Rosacea",
              "alternateName": "Chronic Facial Redness",
              "signOrSymptom": [
                "Facial redness",
                "Flushing",
                "Visible blood vessels",
                "Papules and pustules",
                "Eye irritation"
              ],
              "riskFactor": [
                "Genetics",
                "Sun exposure",
                "Heat",
                "Alcohol",
                "Spicy food",
                "Stress"
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalProcedure",
              "name": "Rosacea Treatment",
              "procedureType": "https://schema.org/PharmacologicalTherapy",
              "howPerformed": "Includes dermatologist consultation, skin assessment, topical and oral medication, and laser therapy where appropriate.",
              "status": "Available at RamaCare Polyclinic, Dubai"
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Can rosacea be cured permanently?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "There is currently no permanent cure for rosacea, but consistent professional management can significantly reduce redness and flare-ups."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is laser treatment effective for rosacea?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Rosacea laser treatment can effectively reduce visible blood vessels and persistent redness for many patients, though results vary by individual."
                  }
                }
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://ramacarepolyclinic.ae/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Dermatology",
                  "item": "https://ramacarepolyclinic.ae/services/aesthetic-dermatology-dubai/"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Rosacea Treatment Dubai",
                  "item": "https://ramacarepolyclinic.ae/services/rosacea-treatment-dubai/"
                }
              ]
            })
          }}
        />
      </Head>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1F5E4B]/10 via-[#F0F7F4] to-white py-20 md:py-28">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4A574]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1F5E4B]/5 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center px-4 py-2 bg-[#1F5E4B]/10 text-[#1F5E4B] text-xs font-bold uppercase tracking-widest rounded-full mb-6">
                DHA Licensed & Trusted
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Rosacea Treatment Dubai: Expert Care for Redness, Flushing & Sensitive Skin
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-6 leading-relaxed">
                If your cheeks flush at the smallest trigger, or your skin stays red no matter what you try, you're not imagining it — and you're not alone. Rosacea affects millions of adults worldwide, and Dubai's climate can make it particularly stubborn to manage.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                At RamaCare Polyclinic, our Rosacea Treatment Dubai program is built around one goal: helping you understand your skin and calm it down, with a plan that's designed specifically for you. This isn't a one-size-fits-all skincare routine. It's a medical approach led by DHA licensed dermatology professionals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="#book-now"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#1F5E4B] hover:bg-[#1a4f3e] text-white rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Your Rosacea Consultation Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </div>
              <div className="flex flex-wrap gap-6 text-sm md:text-base font-semibold text-gray-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5E4B]" />
                  DHA Licensed Dermatology Care
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5E4B]" />
                  Personalized Treatment Plans
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5E4B]" />
                  Modern Diagnostic Technology
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5E4B]" />
                  Convenient Dubai Location
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white p-4 rounded-3xl shadow-xl border border-gray-100">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  {/* Image placeholder - Replace with actual image path later */}
                  <Image
                    src="/images/"
                    alt="Rosacea Treatment Dubai — dermatologist consulting with patient"
                    title="A warm, modern dermatology consultation room in Dubai, a female dermatologist in professional attire gently examining a patient's cheek with a dermatoscope"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Understanding Rosacea Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-white p-4 rounded-3xl shadow-lg border border-gray-100">
                <div className="relative aspect-square rounded-2xl overflow-hidden">
                  {/* Image placeholder - Replace with actual image path later */}
                  <Image
                    src="/images/"
                    alt="Woman with facial redness before rosacea consultation in Dubai"
                    title="Close-up portrait of a woman's face showing mild facial redness across the cheeks and nose"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#F9F7F2] p-8 md:p-12 rounded-3xl shadow-sm border border-[#D4A574]/20"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Understanding Rosacea: Why It's So Often Misdiagnosed
              </h2>
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  Rosacea is one of the most misunderstood skin conditions out there. Many people mistake it for acne, sunburn, or simple sensitivity, and end up trying over-the-counter creams that make things worse rather than better. Others assume redness is just "how their skin is" and never seek help at all.
                </p>
                <p>
                  The truth is, rosacea is a chronic inflammatory condition that needs a proper diagnosis. Left unmanaged, it tends to progress — flare-ups become more frequent, redness becomes more persistent, and in some cases, visible blood vessels or bumps develop.
                </p>
                <p>
                  Early diagnosis matters. The sooner a dermatologist identifies your rosacea subtype and triggers, the sooner you can get ahead of flare-ups instead of constantly reacting to them.
                </p>
                <p>
                  Dubai's environment adds an extra layer of complexity. The city's intense heat, high humidity, strong sun exposure, and an outdoor-oriented lifestyle are all recognized rosacea triggers. Add in spicy regional cuisine and the everyday stress of city life, and it's easy to see why so many residents struggle to keep their symptoms under control without professional guidance.
                </p>
                <p>
                  That's exactly where a structured, dermatologist-led treatment plan makes the difference — not just calming today's flare-up, but reducing how often they happen in the first place. Working with an experienced rosacea specialist Dubai patients trust is often the turning point for people who've lived with chronic facial redness Dubai's climate makes worse, without ever getting a clear answer why.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Is Rosacea Section */}
      <section className="py-20 bg-[#F5F1E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              What Is Rosacea?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12 text-center leading-relaxed">
              Rosacea is a chronic inflammatory skin condition that mainly affects the face. It typically shows up as persistent redness, flushing, and visible small blood vessels, often alongside heightened skin sensitivity. Some people also develop small red bumps or pimple-like breakouts that can resemble acne, which is why misdiagnosis is so common.
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16 text-center leading-relaxed">
              While it can affect anyone, rosacea is most frequently seen in adults with fair skin, though people of all skin tones can develop it. It tends to come and go in cycles — periods of calm followed by flare-ups triggered by heat, sun, certain foods, or stress.
            </p>

            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 text-center">
              The Four Main Subtypes of Rosacea
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10 text-center">
              Understanding which subtype you have is central to getting the right treatment.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  name: "Erythematotelangiectatic Rosacea",
                  desc: "This subtype is mainly about persistent facial redness and visible blood vessels (telangiectasia), often with a tendency to flush easily. Skin may feel warm, tight, or mildly irritated even without an active breakout."
                },
                {
                  name: "Papulopustular Rosacea",
                  desc: "Often confused with acne, this subtype involves redness combined with small red bumps and pus-filled pimples, usually across the cheeks, chin, and forehead."
                },
                {
                  name: "Phymatous Rosacea",
                  desc: "A less common but more advanced subtype where the skin thickens, particularly around the nose, leading to a bumpy, enlarged appearance. This subtype benefits significantly from early intervention."
                },
                {
                  name: "Ocular Rosacea",
                  desc: "This affects the eyes rather than just the skin, causing dryness, irritation, redness, or a gritty feeling. It's frequently overlooked but can affect eye comfort and health if untreated, so a dermatology-eye care crossover approach is often recommended."
                }
              ].map((subtype, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:border-[#1F5E4B]/20 transition-all"
                >
                  <h4 className="text-xl font-bold text-[#1F5E4B] mb-4">{subtype.name}</h4>
                  <p className="text-gray-600 leading-relaxed">{subtype.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Causes and Risk Factors Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Causes and Risk Factors
              </h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  Rosacea doesn't have one single cause — it's usually the result of several overlapping factors.
                </p>
                <p>
                  Genetics play a meaningful role; if a close family member has rosacea, your risk is higher. Immune system factors are also involved, with research pointing to an overactive inflammatory response in the skin.
                </p>
                <p className="font-semibold text-[#1F5E4B]">
                  Environmental triggers are where Dubai residents often notice the biggest impact:
                </p>
                <ul className="space-y-3 ml-4">
                  {[
                    "UV exposure and intense sun",
                    "High heat and humidity",
                    "Alcohol consumption",
                    "Spicy foods, common in local and regional cuisine",
                    "Emotional stress and anxiety",
                    "Hormonal changes, including those related to menopause or pregnancy",
                    "Harsh or fragranced skincare products, including some anti-aging actives"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="mt-1 w-2 h-2 bg-[#1F5E4B] rounded-full flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4">
                  Identifying which of these apply to you is a key part of the assessment process at RamaCare, because trigger management is often just as important as any medication or procedure.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-white p-4 rounded-3xl shadow-lg border border-gray-100">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  {/* Image placeholder - Replace with actual image path later */}
                  <Image
                    src="/images/"
                    alt="Common rosacea triggers including sun, heat, and stress in Dubai"
                    title="Flat-style icon set representing rosacea triggers: sun, spicy food, glass of wine, stress, and heat, arranged in a clean grid"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Recognizing Symptoms Section */}
      <section className="py-20 bg-[#F5F1E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
              Recognizing the Symptoms of Rosacea
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10 text-center">
              Rosacea symptoms vary from person to person, but common signs include:
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Persistent redness across the cheeks, nose, chin, or forehead",
                "Frequent flushing that comes on quickly and fades slowly",
                "A burning or stinging sensation, especially with certain products",
                "Small red bumps or pus-filled pimples",
                "Visible thread-like blood vessels near the skin's surface",
                "Increased skin sensitivity and reactivity",
                "Dryness, rough texture, or mild swelling",
                "Eye irritation, dryness, or a gritty feeling (in ocular rosacea)"
              ].map((symptom, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200"
                >
                  <p className="text-gray-700 leading-relaxed">{symptom}</p>
                </motion.div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                If several of these sound familiar, it's worth having your skin properly assessed rather than continuing to guess at a routine.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who Needs Rosacea Treatment Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
              Who Needs Rosacea Treatment?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10 text-center">
              Rosacea treatment isn't only for severe cases. You may benefit from a professional evaluation if you:
            </p>
            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              {[
                "Notice recurring facial redness that doesn't fully fade",
                "Flush easily in response to heat, sun, or spicy food",
                "Have fair or sensitive skin prone to irritation",
                "Are experiencing worsening symptoms over time",
                "Have tried over-the-counter products without improvement",
                "Notice new bumps, visible vessels, or eye irritation alongside redness"
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="flex items-start gap-3 p-5 bg-[#F9F7F2] rounded-2xl border border-[#D4A574]/20"
                >
                  <CheckCircle2 className="w-6 h-6 text-[#1F5E4B] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 leading-relaxed">{item}</span>
                </motion.div>
              ))}
            </div>
            <div className="bg-[#1F5E4B]/10 p-8 rounded-3xl border border-[#1F5E4B]/20">
              <p className="text-gray-800 text-lg leading-relaxed text-center">
                Rosacea affects both men and women, typically emerging in adulthood, and often becomes more noticeable with age if left unmanaged. There's no need to wait until symptoms are severe — earlier <span className="font-bold text-[#1F5E4B]">Rosacea Treatment Dubai</span> patients pursue tends to be easier to manage than a red face treatment Dubai patients delay until flare-ups become constant.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Rosacea Treatments Available at RamaCare Section */}
      <section className="py-20 bg-[#F5F1E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
              Rosacea Treatments Available at RamaCare
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16 text-center leading-relaxed">
              Every treatment plan at RamaCare begins with a proper diagnosis. From there, our dermatologists build a plan around your specific subtype, skin type, and lifestyle — the foundation of any effective Rosacea Treatment Dubai program and true rosacea skin treatment Dubai residents can count on.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {treatments.map((treatment, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:border-[#1F5E4B]/30 hover:shadow-xl transition-all group"
                >
                  <div className="mb-6 p-4 bg-[#F9F7F2] rounded-full inline-block group-hover:bg-[#1F5E4B]/10 transition-all">
                    {treatment.icon}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">{treatment.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{treatment.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Additional treatment info */}
            <div className="mt-12 grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-[#D4A574]/20"
              >
                <h4 className="text-xl font-bold text-[#1F5E4B] mb-4">Medical-Grade Skincare</h4>
                <p className="text-gray-700 leading-relaxed">
                  We recommend gentle, dermatologist-approved skincare formulated for reactive skin, avoiding common irritants that can worsen rosacea.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-[#D4A574]/20"
              >
                <h4 className="text-xl font-bold text-[#1F5E4B] mb-4">Lifestyle Guidance & Trigger Management</h4>
                <p className="text-gray-700 leading-relaxed">
                  Perhaps the most underrated part of rosacea skin treatment is identifying and managing your personal triggers — something we build into every treatment plan with practical, realistic guidance for Dubai's climate and lifestyle.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lifestyle Changes That Help Control Rosacea Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
              Lifestyle Changes That Help Control Rosacea
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-16 text-center leading-relaxed">
              Alongside clinical treatment, daily habits play a major role in keeping rosacea calm.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {lifestyleTips.map((tip, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-[#F9F7F2] p-8 rounded-2xl shadow-sm border border-[#D4A574]/20 hover:border-[#1F5E4B]/20 transition-all"
                >
                  <div className="mb-4">{tip.icon}</div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">{tip.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{tip.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 bg-[#1F5E4B] text-white p-8 md:p-12 rounded-3xl">
              <p className="text-lg text-white/90 max-w-3xl mx-auto text-center leading-relaxed">
                Hydration, both from drinking enough water and using the right moisturizer, supports overall skin resilience. Building these habits alongside professional <span className="font-bold">Rosacea Management Dubai</span> guidance is usually what separates lasting <span className="font-bold">Rosacea Care Dubai</span> results from short-term fixes.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose RamaCare for Rosacea Treatment Section */}
      <section className="py-20 bg-[#F5F1E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
              Why Choose RamaCare for Rosacea Treatment in Dubai?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16 text-center leading-relaxed">
              Choosing the right clinic matters just as much as choosing the right treatment. It's why so many patients researching the best Rosacea Treatment Dubai has to offer compare clinics carefully before booking.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: <Award className="w-10 h-10 text-[#1F5E4B]" />, title: "DHA Licensed Dermatology Professionals", desc: "Your skin is assessed and treated by qualified, licensed dermatology specialists who follow recognized clinical standards." },
                { icon: <UserCheck className="w-10 h-10 text-[#1F5E4B]" />, title: "Personalized Care", desc: "No generic protocols. Every plan reflects your subtype, skin type, and lifestyle." },
                { icon: <Microscope className="w-10 h-10 text-[#1F5E4B]" />, title: "Advanced Dermatology Technology", desc: "We use modern diagnostic and treatment tools to support accurate assessment and effective care." },
                { icon: <CheckCircle2 className="w-10 h-10 text-[#1F5E4B]" />, title: "Evidence-Based Treatments", desc: "Our approach follows current, evidence-based rosacea management principles rather than trends." },
                { icon: <Building className="w-10 h-10 text-[#1F5E4B]" />, title: "A Modern, Comfortable Clinic", desc: "Designed with patient comfort in mind, from consultation through treatment." },
                { icon: <MessageCircle className="w-10 h-10 text-[#1F5E4B]" />, title: "Patient-Centered Approach", desc: "We take time to explain your condition, your options, and what to realistically expect." },
                { icon: <MapPin className="w-10 h-10 text-[#1F5E4B]" />, title: "Convenient Dubai Location", desc: "Easy to reach for both initial consultations and ongoing follow-up care, making consistent Rosacea Dermatology Dubai visits simple to fit into your schedule." },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:border-[#1F5E4B]/20 hover:shadow-md transition-all group"
                >
                  <div className="mb-4 p-4 bg-[#F9F7F2] rounded-full inline-block group-hover:bg-[#1F5E4B]/10 transition-all">
                    {item.icon}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Image placeholder */}
            <div className="mt-16">
              <div className="bg-white p-4 rounded-3xl shadow-xl border border-gray-100">
                <div className="relative aspect-[16/9] rounded-2xl overflow-hidden">
                  <Image
                    src="/images/"
                    alt="RamaCare Polyclinic dermatology clinic reception in Dubai"
                    title="Bright, modern medical clinic reception area with contemporary furniture, soft neutral tones, welcoming atmosphere, subtle Dubai skyline visible through window, photorealistic."
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 100vw"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits of Professional Rosacea Treatment Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
              Benefits of Professional Rosacea Treatment
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-16 text-center leading-relaxed">
              Choosing a structured, professional approach over trial-and-error skincare offers real advantages:
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: <Sparkles className="w-8 h-8 text-[#D4A574]" />, title: "Noticeably Reduced Redness", desc: "Over time with consistent care." },
                { icon: <ShieldCheck className="w-8 h-8 text-[#D4A574]" />, title: "Fewer Flare-Ups", desc: "Less intense and less frequent episodes." },
                { icon: <Smile className="w-8 h-8 text-[#D4A574]" />, title: "Improved Comfort", desc: "Better day-to-day skin comfort." },
                { icon: <Layers className="w-8 h-8 text-[#D4A574]" />, title: "Calmer Complexion", desc: "A more even, balanced skin tone." },
                { icon: <Star className="w-8 h-8 text-[#D4A574]" />, title: "Increased Confidence", desc: "Feel more comfortable in social and professional settings." },
                { icon: <Heart className="w-8 h-8 text-[#D4A574]" />, title: "Long-Term Skin Health", desc: "Prevent progression of the condition." },
              ].map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-[#F9F7F2] p-8 rounded-2xl shadow-sm border border-[#D4A574]/20 hover:border-[#1F5E4B]/20 transition-all"
                >
                  <div className="mb-4">{benefit.icon}</div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">{benefit.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 bg-[#1F5E4B]/10 p-8 rounded-3xl border border-[#1F5E4B]/20">
              <p className="text-lg text-gray-700 leading-relaxed text-center">
                It's worth noting upfront: results vary depending on rosacea subtype, skin type, lifestyle, and treatment adherence. Rosacea is a manageable, chronic condition rather than one with a guaranteed permanent cure, and our team will always give you an honest picture of what to expect.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Your Treatment Process at RamaCare Section */}
      <section className="py-20 bg-[#F5F1E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
              Your Treatment Process at RamaCare
            </h2>

            {/* Image placeholder */}
            <div className="mb-16">
              <div className="bg-white p-4 rounded-3xl shadow-xl border border-gray-100">
                <div className="relative aspect-[16/9] rounded-2xl overflow-hidden">
                  <Image
                    src="/images/"
                    alt="Step-by-step rosacea treatment consultation process"
                    title="Clean horizontal infographic showing seven simple icons connected by a line representing a patient's treatment journey from consultation to follow-up, minimal medical design style."
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 100vw"
                  />
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: "01", title: "Consultation", desc: "You'll meet with a dermatologist for a thorough Rosacea Consultation Dubai visit to discuss your symptoms, history, and concerns in detail." },
                { step: "02", title: "Skin Examination", desc: "A thorough visual and diagnostic examination helps identify your specific rosacea presentation." },
                { step: "03", title: "Diagnosis", desc: "Your dermatologist confirms your subtype and rules out other conditions that can look similar." },
                { step: "04", title: "Personalized Plan", desc: "A plan is developed combining medication, procedures, and lifestyle guidance suited to you." },
                { step: "05", title: "Treatment Sessions", desc: "Depending on your plan, this may include topical or oral therapy, laser sessions, or a combination." },
                { step: "06", title: "Home Care Guidance", desc: "You'll receive clear instructions on skincare, sun protection, and trigger management for daily life." },
                { step: "07", title: "Follow-Up", desc: "Regular follow-up visits let us track your progress and adjust your plan as needed." },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:border-[#1F5E4B]/20 transition-all"
                >
                  <div className="text-4xl font-bold text-[#1F5E4B] mb-4">{item.step}</div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Recovery & Aftercare Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
              Recovery & Aftercare
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12 text-center leading-relaxed">
              Aftercare is where much of the long-term success happens. Following treatment, we typically recommend:
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                "Gentle, fragrance-free skincare suited to reactive skin",
                "Daily sunscreen, reapplied as needed throughout the day",
                "Regular use of a suitable moisturizer to support the skin barrier",
                "Continued avoidance of known personal triggers",
                "Sticking closely to prescribed medication routines",
                "Attending scheduled follow-up visits so your dermatologist can monitor progress and fine-tune your plan",
              ].map((tip, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex items-start gap-3 p-6 bg-[#F9F7F2] rounded-2xl border border-[#D4A574]/20"
                >
                  <CheckCircle2 className="w-6 h-6 text-[#1F5E4B] flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700 leading-relaxed">{tip}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 bg-[#1F5E4B] text-white p-8 md:p-12 rounded-3xl">
              <p className="text-lg text-white/90 max-w-3xl mx-auto text-center leading-relaxed">
                Consistency here matters more than intensity — small daily habits tend to outperform occasional intensive efforts.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Prevention Tips Section */}
      <section className="py-20 bg-[#F5F1E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
              Prevention Tips for Long-Term Skin Comfort
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-16 text-center leading-relaxed">
              While rosacea can't always be entirely prevented, these habits can meaningfully reduce flare-ups:
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: <Sun className="w-10 h-10 text-[#1F5E4B]" />, desc: "Apply broad-spectrum SPF daily, even indoors" },
                { icon: <Thermometer className="w-10 h-10 text-[#1F5E4B]" />, desc: "Avoid overheating — this includes hot showers, saunas, and excessive sun exposure" },
                { icon: <Droplets className="w-10 h-10 text-[#1F5E4B]" />, desc: "Cleanse gently, without scrubbing or harsh exfoliants" },
                { icon: <Activity className="w-10 h-10 text-[#1F5E4B]" />, desc: "Maintain a balanced diet and moderate alcohol and spicy food intake" },
                { icon: <Heart className="w-10 h-10 text-[#1F5E4B]" />, desc: "Practice stress-reduction techniques where possible" },
                { icon: <Shield className="w-10 h-10 text-[#1F5E4B]" />, desc: "Avoid harsh or fragranced cosmetic products" },
                { icon: <Calendar className="w-10 h-10 text-[#1F5E4B]" />, desc: "Schedule routine dermatologist reviews, even when your skin feels stable" },
              ].map((tip, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:border-[#1F5E4B]/20 transition-all"
                >
                  <div className="mb-4">{tip.icon}</div>
                  <p className="text-gray-700 leading-relaxed">{tip.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Rosacea Treatment Cost Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#F9F7F2] to-white p-8 md:p-12 rounded-3xl shadow-lg border border-[#D4A574]/20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
              Rosacea Treatment Cost in Dubai
            </h2>
            <p className="text-lg text-gray-600 mb-8 text-center leading-relaxed">
              Many patients naturally want to know about cost before booking a consultation. Rosacea treatment cost in Dubai depends on several factors: the severity and subtype of your rosacea, the specific treatments recommended, the number of sessions required, any prescribed medications, and the personalized nature of your overall plan.
            </p>
            <div className="mb-8">
              <div className="flex items-start gap-3 mb-4">
                <CheckCircle2 className="w-6 h-6 text-[#1F5E4B] flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 leading-relaxed">Because no two rosacea cases are identical, we don't provide generic pricing without an assessment.</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#1F5E4B] flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 leading-relaxed">The most accurate way to understand your treatment cost is through a consultation with our dermatology team, where you'll receive a clear, personalized breakdown based on your specific needs.</p>
              </div>
            </div>
            <div className="text-center">
              <a
                href="#book-now"
                className="inline-flex items-center justify-center px-10 py-4 bg-[#1F5E4B] hover:bg-[#1a4f3e] text-white rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book a Consultation to Discuss Your Personalized Plan
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Treatments Section */}
      <section className="py-20 bg-[#F5F1E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
              Related Treatments at RamaCare
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12 text-center">
              Explore other dermatology and skin health services that may complement your rosacea care:
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "Aesthetic Dermatology", href: "/services/aesthetic-dermatology-dubai/" },
                { name: "Acne Treatment", href: "/services/acne-treatment-dubai/" },
                { name: "Acne Scar Treatment", href: "/services/acne-scar-treatment-dubai/" },
                { name: "Melasma Treatment", href: "/services/melasma-treatment-dubai/" },
                { name: "Pigmentation Treatment", href: "/services/pigmentation-treatment-dubai/" },
                { name: "Chemical Peel", href: "/services/chemical-peel-dubai/" },
                { name: "HydraFacial", href: "/services/hydrafacial-dubai/" },
                { name: "Laser Skin Treatments", href: "/services/laser-skin-treatments-dubai/" },
                { name: "PRP Therapy", href: "/services/prp-therapy-dubai/" },
                { name: "General Physician", href: "/services/general-physician-dubai/" },
                { name: "Homepage", href: "/" },
                { name: "Contact Page", href: "/contact-us" }
              ].map((item, idx) => (
                <motion.a
                  key={idx}
                  href={item.href}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="flex items-center justify-between p-6 bg-white rounded-2xl border border-gray-200 hover:border-[#1F5E4B]/20 hover:shadow-md transition-all group"
                >
                  <span className="font-semibold text-gray-800">{item.name}</span>
                  <ArrowUpRight className="w-5 h-5 text-[#1F5E4B] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </motion.a>
              ))}
            </div>
            <div className="mt-12 p-8 bg-white rounded-2xl border border-gray-200">
              <p className="text-sm text-gray-600 leading-relaxed">
                This content is for informational purposes only and does not replace professional medical advice. Please consult a licensed dermatologist for diagnosis and treatment tailored to your individual condition.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Book Now CTA Section */}
      <section id="book-now" className="py-20 bg-[#1F5E4B] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Calm Your Rosacea?</h2>
            <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              Book your consultation today with our DHA-licensed dermatologists and take the first step towards calmer, clearer skin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/book-appointment"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#1F5E4B] hover:bg-gray-100 rounded-xl font-bold text-lg transition-all shadow-lg"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Appointment Online
              </a>
              <a
                href="tel:+971566597878"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/30 rounded-xl font-bold text-lg transition-all"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Us Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
