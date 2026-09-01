import { useState } from 'react';
import Layout from '../../../components/Layout';
import ContentReviewBadge from '../../../components/ContentReviewBadge';
import Head from "next/head";
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, HeartPulse, Sparkles, Zap, Wind, Shield, Heart, Droplets, Baby, Coffee, Utensils, Activity, ChevronDown, Send } from 'lucide-react';

export default function EximiaBellyFatReductionPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    area: '',
    time: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateField = (name, value) => {
    if (name === 'name') {
      if (!value || value.trim().length < 3) return 'Name must be at least 3 characters';
      return '';
    }
    if (name === 'email') {
      if (!value || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Enter a valid email address';
      return '';
    }
    if (name === 'phone') {
      if (!value || !/^[+]?[1-9]\d{1,14}$/.test(value.replace(/\s/g, ''))) return 'Enter a valid phone number (7–15 digits)';
      return '';
    }
    if (name === 'area') {
      if (!value) return 'Please select an area of concern';
      return '';
    }
    if (name === 'time') {
      if (!value) return 'Please select a preferred time';
      return '';
    }
    return '';
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const scrollToForm = () => {
    document.getElementById('consultation-form')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });
    setErrors(newErrors);
    
    if (Object.keys(newErrors).length > 0) return;
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const res = await fetch('/api/appointment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source: 'EximiaBellyFatReduction',
          action: 'book_appointment',
          fullName: formData.name,
          phone: formData.phone,
          email: formData.email,
          concern: formData.area,
          preferredTime: formData.time
        })
      });
      
      if (res.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          area: '',
          time: ''
        });
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus(null), 5000);
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const faqs = [
    {
      question: "Is Eximia effective for belly fat reduction in Dubai?",
      answer: "Eximia is commonly used for localized abdominal fat and body contouring without surgery."
    },
    {
      question: "How many sessions are needed for belly fat?",
      answer: "Most patients undergo 6–10 sessions depending on fat thickness and goals."
    },
    {
      question: "Can Eximia tighten loose abdominal skin?",
      answer: "Yes, the radiofrequency phase supports collagen production and skin tightening."
    },
    {
      question: "Is there any downtime after the treatment?",
      answer: "No, patients can resume daily activities immediately."
    },
    {
      question: "Is Eximia suitable after pregnancy?",
      answer: "It is often chosen for post-pregnancy body contouring, especially for mild skin laxity."
    }
  ];

  const mummyTummyFeatures = [
    {
      icon: Heart,
      title: "Diastasis Recti Support",
      content: "While it doesn't fix muscle separation, the skin tightening and lymphatic drainage help the abdomen look flatter and more supported."
    },
    {
      icon: Droplets,
      title: "C-Section Scars",
      content: "The increased circulation can help improve the appearance of scar tissue over time."
    },
    {
      icon: Baby,
      title: "Zero Pain",
      content: "Unlike surgical options, you can go from your session straight to picking up your children or heading to the office."
    }
  ];

  const phases = [
    {
      number: "01",
      icon: Sparkles,
      title: "Microdermolift",
      content: "Exfoliates the skin to increase oxygenation, preparing the abdomen to absorb treatment deeply."
    },
    {
      number: "02",
      icon: Zap,
      title: "Laserporation (The Fat Breaker)",
      content: "Uses low-level laser and electroporation to create temporary pores in fat cells, allowing 'liquid fat' to escape without damaging tissue."
    },
    {
      number: "03",
      icon: Wind,
      title: "Endoradiomag (The Flush)",
      content: "A 4-motion vacuum massage with magnetic rollers that moves that liquid fat into the lymphatic system for permanent removal."
    },
    {
      number: "04",
      icon: Shield,
      title: "Radioporation (The Tightener)",
      content: "Boosts collagen and elastin to ensure that as you lose inches, you don't end up with sagging skin."
    }
  ];

  const CANONICAL_URL = "https://ramacarepolyclinic.ae/services/eximia-belly-fat-reduction-dubai/";
  const PAGE_TITLE = "Eximia Belly Fat Reduction in Dubai | RamaCare Polyclinic";
  const PAGE_DESCRIPTION = "Effective Eximia belly fat reduction in Dubai. Lose belly fat and sculpt your body with our non-surgical treatment at RamaCare Polyclinic.";
  const OG_IMAGE = "https://ramacarepolyclinic.ae/images/b2.jpg";

  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `${CANONICAL_URL}#breadcrumb`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ramacarepolyclinic.ae/" },
          { "@type": "ListItem", "position": 2, "name": "Aesthetic Dermatology", "item": "https://ramacarepolyclinic.ae/services/aesthetic-dermatology-dubai/" },
          { "@type": "ListItem", "position": 3, "name": "Eximia Body Contouring", "item": "https://ramacarepolyclinic.ae/services/eximia-body-contouring-dubai/" },
          { "@type": "ListItem", "position": 4, "name": "Eximia Belly Fat Reduction", "item": CANONICAL_URL }
        ]
      },
      {
        "@type": "MedicalProcedure",
        "@id": `${CANONICAL_URL}#procedure`,
        "name": "Eximia Belly Fat Reduction",
        "description": "Targeted non-surgical abdominal sculpting using Eximia HR77 Platinum's 4-phase technology to reduce belly fat and love handles while tightening skin, delivered by DHA-licensed specialists in Dubai.",
        "reviewedBy": {
          "@type": "Person",
          "name": "Sonita Sinaga",
          "jobTitle": "Licensed & Certified Aesthetic Therapist",
          "url": "https://ramacarepolyclinic.ae/doctors/sonita-sinaga-aesthetic-therapist-dubai/"
        },
        "provider": {
          "@type": "MedicalClinic",
          "name": "RamaCare Polyclinic",
          "url": "https://ramacarepolyclinic.ae/",
          "telephone": "+971566597878",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "12 Al Dhiyafah Rd, Jumeirah Terrace Building, Ground Floor",
            "addressLocality": "Jumeirah 1",
            "addressRegion": "Dubai",
            "addressCountry": "AE"
          }
        },
        "areaServed": { "@type": "City", "name": "Dubai" }
      },
      {
        "@type": "FAQPage",
        "@id": `${CANONICAL_URL}#faq`,
        "mainEntity": faqs.map(f => ({
          "@type": "Question",
          "name": f.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.answer
          }
        }))
      }
    ]
  };

  return (
    <Layout>
      <Head>
        <title key="title">{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_DESCRIPTION} key="description" />
        <meta name="keywords" content="Eximia belly fat reduction Dubai, lose belly fat Dubai, fat reduction treatment Dubai, non-surgical liposuction alternative Dubai, mummy tummy treatment Dubai, post-pregnancy belly fat Dubai, love handles reduction Dubai, abdominal skin tightening Dubai" />
        <meta name="robots" content="index, follow" key="robots" />
        <link rel="canonical" href={CANONICAL_URL} key="canonical" />

        {/* Open Graph Tags */}
        <meta property="og:type" content="website" key="og:type" />
        <meta property="og:title" content={PAGE_TITLE} key="og:title" />
        <meta property="og:description" content={PAGE_DESCRIPTION} key="og:description" />
        <meta property="og:url" content={CANONICAL_URL} key="og:url" />
        <meta property="og:image" content={OG_IMAGE} key="og:image" />
        <meta property="og:image:width" content="1200" key="og:image:width" />
        <meta property="og:image:height" content="630" key="og:image:height" />
        <meta property="og:image:alt" content="Eximia Belly Fat Reduction Dubai - Non-Surgical Abdominal Contouring" key="og:image:alt" />
        <meta property="og:site_name" content="RamaCare Polyclinic" key="og:site_name" />
        <meta property="og:locale" content="en_AE" key="og:locale" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content={PAGE_TITLE} key="twitter:title" />
        <meta name="twitter:description" content="Lose belly fat and sculpt your body with our non-surgical treatment at RamaCare Polyclinic." key="twitter:description" />
        <meta name="twitter:image" content={OG_IMAGE} key="twitter:image" />

        {/* Structured Data Schemas */}
        <script
          key="schema-graph"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
        />
      </Head>

      <section className="bg-[#F5F1EA] px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-[#1A1A1A]">
                Eximia for Belly Fat: Targeted Abdominal Sculpting in Dubai
              </h1>
              
              <p className="text-lg text-[#5F5F5F] mb-8 leading-relaxed">
                The abdomen is the most common area for "stubborn" fat that resists even the strictest Dubai fitness routines. Whether it's post-pregnancy skin laxity or localized pockets of fat on the flanks (love handles), Eximia HR77 Platinum offers a clinically proven, non-surgical alternative to Liposuction. By combining four distinct technologies, it doesn't just "melt" fat; it reshapes the entire midsection.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  "Targets stubborn belly fat & love handles",
                  "Non-surgical alternative to liposuction",
                  "Skin tightening + fat reduction combined",
                  "Visible inch loss from early sessions"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#2D5F3F]" />
                    <span className="text-[#1A1A1A] font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={scrollToForm}
                  type="button"
                  className="bg-[#2D5F3F] text-white px-8 py-4 rounded-xl font-semibold text-center hover:bg-[#234A32] transition-colors shadow-lg cursor-pointer"
                >
                  Book Free Consultation
                </button>
                <a 
                  href="https://wa.me/971566597878"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="border-2 border-[#2D5F3F] text-[#2D5F3F] px-8 py-4 rounded-xl font-semibold text-center hover:bg-[#2D5F3F] hover:text-white transition-all flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp Consultation
                </a>
              </div>
            </motion.div>

            {/* Right Side - Before & After Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-[#E5E1D8]/60 backdrop-blur-sm rounded-[40px] p-8 relative overflow-hidden aspect-square flex flex-col items-center justify-center text-center">
                <div className="absolute top-10 right-10 w-40 h-40 bg-[#D1D1D1]/40 rounded-full" />
                <div className="absolute bottom-10 left-10 w-32 h-32 bg-[#D1D1D1]/40 rounded-full" />
                
                {/* Before & After Images Container */}
                <div className="relative z-10 w-full h-full flex gap-4">
                  {/* Before Image */}
                  <div className="flex-1 relative overflow-hidden rounded-2xl">
                    <img 
                      src="/images/b1.jpg" 
                      alt="Before Eximia belly fat treatment" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-2 left-0 right-0 bg-black/60 text-white py-2 text-center">
                      <span className="text-sm font-semibold">BEFORE</span>
                    </div>
                  </div>
                  
                  {/* After Image */}
                  <div className="flex-1 relative overflow-hidden rounded-2xl">
                    <img 
                      src="/images/b2.jpg" 
                      alt="After Eximia belly fat treatment" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-2 left-0 right-0 bg-black/60 text-white py-2 text-center">
                      <span className="text-sm font-semibold">AFTER</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4-Phase Technology Section */}
      <section className="bg-[#F5F1EA] px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 text-[#1A1A1A]"
          >
            How the 4-Phase Technology Destroys Abdominal Fat
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {phases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02, y: -5 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                className="relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 group overflow-hidden"
              >
                {/* Hover Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#2D5F3F]/5 to-[#E9E2D6]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Phase Number Overlay */}
                <span className="absolute top-8 right-8 text-6xl font-bold text-[#1F5E4B] opacity-10 group-hover:opacity-20 transition-opacity duration-300 select-none z-0">
                  {phase.number}
                </span>

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className="bg-[#2D5F3F] text-white p-3 rounded-xl shadow-md">
                      <phase.icon className="w-6 h-6" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">{phase.title}</h3>
                  <p className="text-[#5F5F5F] leading-relaxed text-base">
                    {phase.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expected Results Section */}
      <section className="bg-[#F5F1EA] px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 text-[#1A1A1A]"
            style={{ fontFamily: "'Nunito Sans', sans-serif" }}
          >
            Expected Results for the Midsection
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#1F5E4B] text-white">
                    <th className="px-6 py-4 font-semibold text-sm uppercase tracking-wider text-left">Measurement</th>
                    <th className="px-6 py-4 font-semibold text-sm uppercase tracking-wider text-left">What to Expect</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="px-8 py-6 font-semibold text-[#1A1A1A]" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>Immediate Inch Loss</td>
                    <td className="px-8 py-6 text-[#5F5F5F]" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>1–3 cm reduction after session #1</td>
                  </tr>
                  <tr>
                    <td className="px-8 py-6 font-semibold text-[#1A1A1A]" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>Total Waistline Reduction</td>
                    <td className="px-8 py-6 text-[#5F5F5F]" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>5–12 cm over a full 10-session course</td>
                  </tr>
                  <tr>
                    <td className="px-8 py-6 font-semibold text-[#1A1A1A]" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>Skin Quality</td>
                    <td className="px-8 py-6 text-[#5F5F5F]" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>Visible tightening of "mummy tummy" or loose skin</td>
                  </tr>
                  <tr>
                    <td className="px-8 py-6 font-semibold text-[#1A1A1A]" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>Muscle Definition</td>
                    <td className="px-8 py-6 text-[#5F5F5F]" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>Enhanced visibility of abdominal muscles</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Eximia for the "Mummy Tummy" Section */}
      <section className="bg-[#F5F1EA] px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 text-[#1A1A1A]"
            style={{ fontFamily: "'Nunito Sans', sans-serif" }}
          >
            Why Choose Eximia for the "Mummy Tummy"?
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6">
            {mummyTummyFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02, y: -5 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                className="relative bg-[#E9E2D6] p-8 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 group overflow-hidden"
                style={{ 
                  background: "linear-gradient(135deg, rgba(233, 226, 214, 0.5) 0%, rgba(245, 241, 234, 0.1) 100%)"
                }}
              >
                <div className="relative z-10">
                  <div className="bg-[#2D5F3F] text-white p-3 rounded-xl w-fit mb-6 shadow-md">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">{feature.title}</h3>
                  <p className="text-[#5F5F5F] leading-relaxed text-sm md:text-base">
                    {feature.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips for Faster Belly Fat Loss Section */}
      <section className="bg-[#F5F1EA] px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 text-[#1A1A1A]"
            style={{ fontFamily: "'Nunito Sans', sans-serif" }}
          >
            Tips for Faster Belly Fat Loss
          </motion.h2>

          {/* 72-Hour Rule Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-3xl shadow-xl mb-6 border-4 border-[#1F5E4B] text-center"
          >
            <p className="text-lg text-[#5F5F5F] leading-relaxed">
              To get the best results from your treatment, we recommend following the <span className="font-bold text-[#1F5E4B]">"Eximia 72-Hour Rule"</span>:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* The Window Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.02, y: -5 }}
              viewport={{ once: true }}
              className="bg-[#E9E2D6] p-8 rounded-2xl shadow-md transition-all duration-300"
              style={{ background: "#E9E2D6" }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#1F5E4B] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">1</div>
                <h3 className="text-xl font-semibold text-[#1A1A1A]">The Window</h3>
              </div>
              <p className="text-[#5F5F5F] leading-relaxed">
                Fat cells remain "open" for 72 hours post-session.
              </p>
            </motion.div>

            {/* The Action Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.02, y: -5 }}
              viewport={{ once: true }}
              className="bg-[#E9E2D6] p-8 rounded-2xl shadow-md transition-all duration-300"
              style={{ background: "#E9E2D6" }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#1F5E4B] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">2</div>
                <h3 className="text-xl font-semibold text-[#1A1A1A]">The Action</h3>
              </div>
              <p className="text-[#5F5F5F] leading-relaxed">
                Avoid heavy carbohydrates and sugar for these 3 days to force your body to burn the released fat for energy instead of storing new calories.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[#F5F1EA] px-4 sm:px-6 lg:px-8 py-16 pb-24">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 text-[#1A1A1A]"
            style={{ fontFamily: "'Nunito Sans', sans-serif" }}
          >
            Frequently Asked Questions
          </motion.h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-md overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-[#1A1A1A] pr-8">{faq.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-[#1F5E4B] transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} 
                  />
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 pt-0 text-[#5F5F5F] leading-relaxed">
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

      {/* Final CTA / Consultation Form Section */}
      <section id="consultation-form" className="bg-[#F5F1EA] px-4 sm:px-6 lg:px-8 py-16 pb-24">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-[#1A1A1A]"
              style={{ fontFamily: "'Nunito Sans', sans-serif" }}
            >
              Start Your Abdominal Transformation
            </motion.h2>
            <p className="text-lg text-[#5F5F5F] leading-relaxed max-w-2xl mx-auto">
              Stop struggling with stubborn bulges. Visit our main{' '}
              <a href="https://ramacarepolyclinic.ae/services/eximia-body-contouring-dubai/" className="underline font-semibold text-[#1F5E4B] hover:text-[#2D5F3F]">
                Eximia Body Contouring Dubai
              </a>{' '}
              page to see our belly fat success stories and book your 3D body assessment.
            </p>
          </div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-white p-8 lg:p-10 rounded-3xl shadow-2xl overflow-hidden"
          >
            {/* Background Decorative Circles */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-gradient-to-br from-[#1F5E4B]/5 to-transparent -mr-32 -mt-32 opacity-50" />
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-gradient-to-tr from-[#2D5F3F]/5 to-transparent -ml-24 -mb-24 opacity-50" />

            <div className="relative z-10 grid gap-6">
              {/* Success/Error Messages */}
              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-xl flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Appointment request submitted successfully! We'll contact you soon.</span>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-xl flex items-center gap-2">
                  <span>Something went wrong. Please try again or call us directly.</span>
                </div>
              )}

              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-[#1A1A1A] mb-2 ml-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your full name"
                  required
                  disabled={isSubmitting}
                  className={`w-full px-5 py-4 bg-[#F5F1EA] border-none rounded-xl text-[#1A1A1A] placeholder:text-gray-400 focus:ring-2 focus:ring-[#1F5E4B] transition-all ${errors.name ? 'ring-2 ring-red-400' : ''}`}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600 ml-1">{errors.name}</p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-[#1A1A1A] mb-2 ml-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your email address"
                  required
                  disabled={isSubmitting}
                  className={`w-full px-5 py-4 bg-[#F5F1EA] border-none rounded-xl text-[#1A1A1A] placeholder:text-gray-400 focus:ring-2 focus:ring-[#1F5E4B] transition-all ${errors.email ? 'ring-2 ring-red-400' : ''}`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600 ml-1">{errors.email}</p>
                )}
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="block text-sm font-bold text-[#1A1A1A] mb-2 ml-1">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+971 XX XXX XXXX"
                  required
                  disabled={isSubmitting}
                  className={`w-full px-5 py-4 bg-[#F5F1EA] border-none rounded-xl text-[#1A1A1A] placeholder:text-gray-400 focus:ring-2 focus:ring-[#1F5E4B] transition-all ${errors.phone ? 'ring-2 ring-red-400' : ''}`}
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600 ml-1">{errors.phone}</p>
                )}
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {/* Area of Concern */}
                <div>
                  <label htmlFor="area" className="block text-sm font-bold text-[#1A1A1A] mb-2 ml-1">Area of Concern</label>
                  <select
                    id="area"
                    name="area"
                    value={formData.area}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    className={`w-full px-5 py-4 bg-[#F5F1EA] border-none rounded-xl text-[#1A1A1A] focus:ring-2 focus:ring-[#1F5E4B] transition-all appearance-none cursor-pointer ${errors.area ? 'ring-2 ring-red-400' : ''}`}
                  >
                    <option value="" disabled>Select area</option>
                    <option value="abdomen">Belly Fat</option>
                    <option value="flanks">Love Handles</option>
                    <option value="mummy-tummy">Post-Pregnancy</option>
                    <option value="other">Overall Abdomen</option>
                  </select>
                  {errors.area && (
                    <p className="mt-1 text-sm text-red-600 ml-1">{errors.area}</p>
                  )}
                </div>

                {/* Preferred Time */}
                <div>
                  <label htmlFor="time" className="block text-sm font-bold text-[#1A1A1A] mb-2 ml-1">Preferred Time</label>
                  <select
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    className={`w-full px-5 py-4 bg-[#F5F1EA] border-none rounded-xl text-[#1A1A1A] focus:ring-2 focus:ring-[#1F5E4B] transition-all appearance-none cursor-pointer ${errors.time ? 'ring-2 ring-red-400' : ''}`}
                  >
                    <option value="" disabled>Select time</option>
                    <option value="morning">Morning (9AM - 12PM)</option>
                    <option value="afternoon">Afternoon (12PM - 4PM)</option>
                    <option value="evening">Evening (4PM - 8PM)</option>
                  </select>
                  {errors.time && (
                    <p className="mt-1 text-sm text-red-600 ml-1">{errors.time}</p>
                  )}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`bg-[#2D5F3F] text-white px-6 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#1F5E4B] transition-all shadow-lg group ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <>
                      <Activity className="w-5 h-5 animate-spin" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      <span>Confirm Appointment Request</span>
                    </>
                  )}
                </button>
                <a
                  href="https://wa.me/971566597878"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="border-2 border-[#2D5F3F] text-[#2D5F3F] px-6 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#2D5F3F] hover:text-white transition-all"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Book via WhatsApp
                </a>
              </div>
            </div>
          </motion.form>
        </div>
      </section>

      <ContentReviewBadge doctorName="Sonita Sinaga" pageSlug="eximia-belly-fat-reduction-dubai" />
    </Layout>
  );
}
