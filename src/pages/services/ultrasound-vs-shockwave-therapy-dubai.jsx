import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Calendar, MessageCircle, Clock, Shield, MapPin, Zap, CheckCircle2, Radio, Award, UserCheck, Lock, ChevronDown, Activity, Droplet, Heart, Zap as ZapIcon, Waves, TrendingUp } from 'lucide-react';
import Layout from '../../../components/Layout';
import ContentReviewBadge from '../../../components/ContentReviewBadge';
import { useToast } from '../../../components/Toast';

const UltrasoundVsShockwavePage = () => {
  const whatsappNumber = "971566597878";
  const whatsappMessage = encodeURIComponent("Hello RamaCare, I'm interested in learning about Ultrasound vs. Shockwave therapy.");
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', preferredTime: '', treatmentArea: '' });
  const [showModal, setShowModal] = useState(true);
  const [bannerClosed, setBannerClosed] = useState(false);
  const { showToast, ToastComponent } = useToast();

  const handleBookFreeAssessment = () => {
    window.location.href = '#book-now';
    setShowModal(false);
  };

  const handleMaybeLater = () => {
    setShowModal(false);
  };

  const closeBanner = () => {
    setBannerClosed(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
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
          concern: 'Ultrasound vs Shockwave Therapy',
          treatmentArea: formData.treatmentArea,
          source: 'ultrasound-vs-shockwave-therapy-dubai'
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        showToast("Appointment request sent! We'll contact you soon.", 'success');
        setFormData({ name: '', phone: '', email: '', preferredTime: '', treatmentArea: '' });
      } else {
        showToast('Failed to submit. Please try again or contact us directly.', 'error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      showToast('Something went wrong. Please try again or contact us directly.', 'error');
    }
  };

  return (
    <>
    <Layout>
      <Head>
        <title key="title">Ultrasound vs. Shockwave Therapy Dubai | RamaCare Comparison Guide</title>
        <meta name="description" content="Confused between Ultrasound and Shockwave therapy? Learn the key differences in depth, intensity, and results to choose the right recovery path at RamaCare Jumeirah." key="description" />
        
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700;800&display=swap" rel="stylesheet" />
      </Head>

      {/* Fixed Top Banner */}
      {!bannerClosed && (
        <div className="fixed top-0 left-0 right-0 z-40 bg-[#1F5E4B] text-white shadow-lg">
          <div className="container mx-auto px-4 md:px-8 max-w-[1440px]">
            <div className="flex items-center justify-between py-3 md:py-4 gap-4">
              <div className="flex items-center gap-4">
                <div className="text-left">
                  <p className="text-[13px] md:text-[14px] font-medium opacity-90">
                    Ready to start your recovery journey?
                  </p>
                  <p className="text-[11px] md:text-[12px] opacity-70">
                    Book your technology consultation at RamaCare Jumeirah
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => window.location.href = '#book-now'}
                  className="bg-white text-[#1F5E4B] px-4 md:px-6 py-2 md:py-3 rounded-lg font-bold text-[13px] md:text-[14px] hover:bg-gray-50 transition-colors whitespace-nowrap shadow-md"
                >
                  Book Now
                </button>
                <button 
                  onClick={closeBanner}
                  className="text-white/70 hover:text-white transition-colors p-1"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <main className="min-h-screen" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-secondary to-white pt-16 pb-24 overflow-hidden">
          <div className="container mx-auto px-4 md:px-8 max-w-[1440px]">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              {/* Left Column: Content */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6 pt-8"
              >
                {/* H1 */}
                <h1 className="text-[48px] md:text-[52px] lg:text-[60px] font-bold text-[#1A1A1A] leading-tight">
                  Ultrasound vs. Shockwave Therapy Dubai
                </h1>

                {/* Subtitle */}
                <p className="text-[14px] text-[#6B7280]">
                  RamaCare Comparison Guide
                </p>

                {/* H2 subheading */}
                <h2 className="text-[28px] md:text-[30px] font-bold text-[#1F5E4B] leading-[1.3]">
                  The Battle of the Waves: Heat vs. Force
                </h2>

                {/* Body paragraphs */}
                <div className="space-y-4 text-[17px] md:text-[18px] text-[#5F5F5F] leading-relaxed">
                  <p>
                    Both Ultrasound and Shockwave therapy use acoustic (sound) energy to heal the body, but they do so in fundamentally different ways. Choosing the wrong one can lead to slower recovery or unnecessary discomfort.
                  </p>
                  <p>
                    At RamaCare Polyclinic, we use both technologies. Here is the simple breakdown:
                  </p>
                  
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#1F5E4B] flex-shrink-0 mt-0.5" />
                      <span><strong className="text-[#1A1A1A]">Ultrasound</strong> is like a gentle, deep-heating massage for your cells.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#1F5E4B] flex-shrink-0 mt-0.5" />
                      <span><strong className="text-[#1A1A1A]">Shockwave</strong> is like a controlled "micro-trauma" that restarts the healing process in stubborn, old injuries.</span>
                    </li>
                  </ul>
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-4 pt-2">
                  <a 
                    href="#book-now"
                    className="inline-flex items-center justify-center gap-2 bg-[#1F5E4B] text-white text-[15px] font-bold px-8 py-4 rounded-lg hover:bg-opacity-90 transition-colors"
                  >
                    <Calendar className="w-5 h-5" />
                    Book Technology Consultation
                  </a>
                  <a 
                    href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-flex items-center justify-center gap-2 bg-white/50 text-[#1F5E4B] text-[15px] font-bold px-8 py-4 rounded-lg border border-[#1F5E4B]/30 hover:bg-white/70 transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp Consultation
                  </a>
                </div>
              </motion.div>

              {/* Right Column: Image Card */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative lg:mt-8"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-[500px] mx-auto">
                  {/* Background Image with Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F5E4B]/80 to-transparent"></div>
                  <Image 
                    src="/images/Shockwave.jpg"
                    alt="Ultrasound vs Shockwave Therapy Equipment"
                    width={500}
                    height={350}
                    className="w-full h-auto object-cover"
                  />
                  
                  {/* Legend Cards - positioned at bottom */}
                  <div className="absolute bottom-4 left-4 right-4 space-y-3">
                    <div className="bg-white/95 backdrop-blur-sm rounded-lg px-5 py-3.5 flex items-center gap-3 shadow-lg">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#4ADE80] flex-shrink-0"></div>
                      <p className="text-[#1A1A1A] text-[13px] font-medium">
                        <strong>Ultrasound:</strong> Gentle Heat (5cm depth)
                      </p>
                    </div>
                    <div className="bg-white/95 backdrop-blur-sm rounded-lg px-5 py-3.5 flex items-center gap-3 shadow-lg">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#1F5E4B] flex-shrink-0"></div>
                      <p className="text-[#1A1A1A] text-[13px] font-medium">
                        <strong>Shockwave:</strong> Powerful Force (12cm depth)
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Head-to-Head Comparison Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-8 max-w-[1440px]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-[36px] md:text-[40px] lg:text-[48px] font-bold text-[#1A1A1A] leading-tight mb-4">
                Head-to-Head Comparison
              </h2>
              <p className="text-[16px] md:text-[18px] text-[#6B7280] max-w-2xl mx-auto">
                Understand the key differences to make the right choice for your recovery
              </p>
            </motion.div>

            {/* Comparison Table */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-5xl mx-auto"
            >
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-[#E9E2D6]">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#F5F1E8]">
                      <th className="px-6 py-4 text-[15px] font-bold text-[#1A1A1A] border-b border-gray-200">Feature</th>
                      <th className="px-6 py-4 text-[15px] font-bold text-[#1A1A1A] border-b border-gray-200">Ultrasound Therapy</th>
                      <th className="px-6 py-4 text-[15px] font-bold text-[#1A1A1A] border-b border-gray-200">Shockwave Therapy (ESWT)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { feature: 'Primary Sensation', ultrasound: 'Soothing, deep warmth.', shockwave: 'Rapid "tapping" or "thumping" pulses.' },
                      { feature: 'Mechanism', ultrasound: 'Thermal (Heat) + Micro-vibration.', shockwave: 'Mechanical (Pressure) pulses.' },
                      { feature: 'Best For', ultrasound: 'Acute injuries (Fresh sprains/swelling).', shockwave: 'Chronic injuries (Old, stubborn pain).' },
                      { feature: 'Depth of Reach', ultrasound: 'Up to 5cm (Muscle/Tendon).', shockwave: 'Up to 12cm (Deep Bone/Calcifications).' },
                      { feature: 'Typical Sessions', ultrasound: '8–12 sessions (2-3 times per week).', shockwave: '3–6 sessions (Once per week).' },
                      { feature: 'Pain Level', ultrasound: 'Zero pain (Very relaxing).', shockwave: 'Mildly uncomfortable but tolerable.' }
                    ].map((row, idx) => (
                      <tr 
                        key={idx} 
                        className={`${idx % 2 === 0 ? 'bg-[#F9FAFB]' : 'bg-white'} hover:bg-[#F5F1EA]/30 transition-colors border-b border-gray-100 last:border-b-0`}
                      >
                        <td className="px-6 py-4 font-semibold text-[14px] text-[#1A1A1A]">{row.feature}</td>
                        <td className="px-6 py-4 text-[14px] text-[#5F5F5F] align-middle">{row.ultrasound}</td>
                        <td className="px-6 py-4 text-[14px] text-[#5F5F5F] align-middle">{row.shockwave}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap justify-center gap-6 mt-12">
                <div className="flex items-center gap-2 bg-[#F5F1E8] px-5 py-3 rounded-full">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5E4B]" />
                  <span className="text-[14px] font-medium text-[#1A1A1A]">DHA Licensed</span>
                </div>
                <div className="flex items-center gap-2 bg-[#F5F1E8] px-5 py-3 rounded-full">
                  <MapPin className="w-4 h-4 text-[#1F5E4B]" />
                  <span className="text-[14px] font-medium text-[#1A1A1A]">Jumeirah Location</span>
                </div>
                <div className="flex items-center gap-2 bg-[#F5F1E8] px-5 py-3 rounded-full">
                  <Award className="w-4 h-4 text-[#1F5E4B]" />
                  <span className="text-[14px] font-medium text-[#1A1A1A]">Certified Equipment</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Which Therapy Do You Need Section */}
        <section className="py-16 md:py-24 bg-[#F9FAFB]">
          <div className="container mx-auto px-4 md:px-8 max-w-[1440px]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-[36px] md:text-[40px] lg:text-[48px] font-bold text-[#1A1A1A] leading-tight mb-4">
                Which Therapy Do You Need?
              </h2>
              <p className="text-[17px] md:text-[18px] text-[#5F5F5F] max-w-2xl mx-auto">
                Choose the right treatment based on your condition and recovery stage
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-6 md:gap-8 max-w-[1200px] mx-auto">
              {/* Card 1: When to Choose Ultrasound Therapy */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 h-full"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#DCFCE7] flex items-center justify-center flex-shrink-0">
                    <Waves className="w-6 h-6 text-[#1F5E4B]" />
                  </div>
                  <h3 className="text-[20px] md:text-[24px] font-bold text-[#1A1A1A] leading-tight flex-1">
                    When to Choose Ultrasound Therapy
                  </h3>
                </div>

                <ul className="space-y-3 mb-8">
                  {[
                    'Acute / New injuries or high inflammation',
                    'Recent Sports Strains: Hamstring or calf tears',
                    'Acute Bursitis: Swollen joints',
                    'Muscle Spasms: Neck/upper back',
                    'Post-Surgery: Tissues too delicate'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#4ADE80] flex-shrink-0 mt-0.5" />
                      <span className="text-[15px] text-[#5F5F5F]">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-[#F0FDF4] rounded-xl p-5 border border-[#DCFCE7] mt-auto">
                  <p className="text-[14px] text-[#1A1A1A]">
                    <strong>Best for:</strong> Recent injuries requiring gentle, soothing treatment
                  </p>
                </div>
              </motion.div>

              {/* Card 2: When to Choose Shockwave Therapy */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 h-full"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#F3F4F6] flex items-center justify-center flex-shrink-0">
                    <ZapIcon className="w-6 h-6 text-[#1F5E4B]" />
                  </div>
                  <h3 className="text-[20px] md:text-[24px] font-bold text-[#1A1A1A] leading-tight flex-1">
                    When to Choose Shockwave Therapy
                  </h3>
                </div>

                <ul className="space-y-3 mb-8">
                  {[
                    'Chronic / old injuries',
                    'Plantar Fasciitis',
                    'Calcific Tendonitis',
                    'Tennis/Golfer\'s Elbow',
                    'Achilles Tendinopathy'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#1F5E4B] flex-shrink-0 mt-0.5" />
                      <span className="text-[15px] text-[#5F5F5F]">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-[#F9FAFB] rounded-xl p-5 border border-gray-200 mt-auto">
                  <p className="text-[14px] text-[#1A1A1A]">
                    <strong>Best for:</strong> Stubborn pain that hasn't responded to other treatments
                  </p>
                </div>
              </motion.div>

              {/* Card 3: Combined Approach */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-br from-[#1F5E4B] to-[#2D7A64] rounded-2xl p-6 md:p-8 shadow-xl text-white h-full"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <div className="flex -space-x-2">
                      <Waves className="w-6 h-6 text-white" />
                      <ZapIcon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-[20px] md:text-[24px] font-bold leading-tight flex-1">
                    Combined Approach
                  </h3>
                </div>

                <div className="space-y-6 mb-8">
                  <div className="bg-white/10 rounded-lg p-4 md:p-5 backdrop-blur-sm border border-white/20">
                    <h4 className="text-[15px] md:text-[16px] font-semibold mb-2">RamaCare Signature Recovery</h4>
                    <p className="text-[13px] md:text-[14px] text-white/90">
                      Our unique combination therapy protocol for optimal results
                    </p>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-[13px] font-bold">1</span>
                    </div>
                    <div>
                      <p className="text-[14px] md:text-[15px] font-medium">
                        <strong>Shockwave</strong> to restart deep healing
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-[13px] font-bold">2</span>
                    </div>
                    <div>
                      <p className="text-[14px] md:text-[15px] font-medium">
                        <strong>Ultrasound</strong> to soothe and support
                      </p>
                    </div>
                  </div>

                  <div className="bg-white/10 rounded-lg p-4 md:p-5 backdrop-blur-sm border border-white/20 mt-auto">
                    <p className="text-[13px] md:text-[14px] text-white/90">
                      <strong>Ideal for:</strong> Complex injuries requiring both deep tissue regeneration and surface-level healing
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-8 max-w-[1440px]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-12">
                <h2 className="text-[36px] md:text-[40px] lg:text-[48px] font-bold text-[#1A1A1A] leading-tight mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-[16px] md:text-[18px] text-[#6B7280]">
                  Get answers to common questions about therapy options
                </p>
              </div>
            
              {/* Outer beige container */}
              <div className="bg-[#F5F1EA] rounded-2xl p-6 md:p-8 shadow-lg mb-8">
                <div className="space-y-4">
                  {[
                    {
                      q: "Is Shockwave therapy better than Ultrasound?",
                      a: "Neither is \"better\"—it depends on the stage of your injury. Shockwave is more powerful for \"restarting\" healing in chronic cases, while Ultrasound is superior for soothing acute inflammation and reducing swelling."
                    },
                    {
                      q: "Why is Shockwave therapy more expensive per session?",
                      a: "Shockwave therapy uses more advanced technology that delivers powerful mechanical pulses deep into tissues. While it costs more per session, you typically need fewer treatments (3-6 sessions) compared to ultrasound (8-12 sessions), making the overall cost comparable."
                    },
                    {
                      q: "Does insurance cover both treatments in Dubai?",
                      a: "Coverage varies by provider and plan. Both therapies may be covered when prescribed by a DHA-licensed physician for specific medical conditions. We recommend checking with your insurance provider, and our team can help with pre-authorization if needed."
                    }
                  ].map((faq, index) => (
                    <details key={index} className="group bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300">
                      <summary className="flex justify-between items-center text-left px-6 py-5 cursor-pointer list-none focus:outline-none hover:bg-gray-50 transition-colors">
                        <span className="text-[17px] md:text-[18px] font-semibold text-[#1A1A1A] pr-8">{faq.q}</span>
                        <ChevronDown className="w-5 h-5 text-[#1F5E4B] flex-shrink-0 group-open:rotate-180 transition-transform duration-300" />
                      </summary>
                      <div className="px-6 pb-5 pt-2">
                        <p className="text-[15px] md:text-[16px] text-[#5F5F5F] leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>

              {/* Still have questions box */}
              <div className="bg-gradient-to-r from-[#1F5E4B]/5 to-[#E9E2D6] rounded-xl p-6 border border-[#E9E2D6]">
                <div className="flex flex-col md:flex-row items-center justify-between gap-5">
                  <div className="text-center md:text-left">
                    <h3 className="text-[16px] md:text-[17px] font-semibold text-[#1A1A1A] mb-1.5">
                      Still have questions?
                    </h3>
                    <p className="text-[14px] md:text-[15px] text-[#5F5F5F]">
                      Our DHA-licensed specialists are here to help you understand which therapy is right for you.
                    </p>
                  </div>
                  <a 
                    href="#book-now"
                    className="inline-flex items-center justify-center bg-[#1F5E4B] text-white text-[14px] md:text-[15px] font-bold px-6 py-3.5 rounded-lg hover:bg-opacity-90 transition-colors whitespace-nowrap shadow-md"
                  >
                    Ask an Expert
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section id="book-now" className="bg-gradient-to-br from-[#1F5E4B] to-[#2D7A64] py-16 md:py-24 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 md:px-8 max-w-[1440px] relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Column: Content */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <h2 className="text-[36px] md:text-[40px] lg:text-[48px] font-bold text-white leading-tight">
                    Get the Right Diagnosis in Jumeirah 1
                  </h2>
                  <p className="text-[16px] md:text-[18px] lg:text-[20px] text-white/90 leading-relaxed">
                    Stop guessing which therapy you need. Our DHA-licensed team will perform a physical assessment and diagnostic check to determine which wave technology will get you back to your best.
                  </p>
                </div>

                {/* Info Cards */}
                <div className="space-y-6 pt-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-[16px] md:text-[17px]">RamaCare Polyclinic, Jumeirah 1</p>
                      <p className="text-white/70 text-[14px] md:text-[15px]">Conveniently located in the heart of Dubai</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <Award className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-[16px] md:text-[17px]">Advanced Acoustic Medicine</p>
                      <p className="text-white/70 text-[14px] md:text-[15px]">Latest technology and certified practitioners</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <Activity className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-[16px] md:text-[17px]">Technology Consultation</p>
                      <p className="text-white/70 text-[14px] md:text-[15px]">Personalized assessment and treatment plan</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Form */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl max-w-md mx-auto w-full">
                <div className="mb-6">
                  <h3 className="text-[26px] md:text-[30px] font-bold text-[#1A1A1A] mb-2">
                    Book Your Consultation
                  </h3>
                  <p className="text-[14px] md:text-[15px] text-[#6B7280]">
                    Fill in your details and we'll contact you within 24 hours
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label className="block text-[13px] md:text-[14px] font-bold text-[#1A1A1A]">Full Name *</label>
                    <input 
                      type="text" 
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      required
                      minLength={2}
                      maxLength={50}
                      pattern="[a-zA-Z\s'-]+"
                      title="Please enter a valid name (letters, spaces, hyphens only)"
                      className="w-full px-4 py-3.5 bg-[#F5F1E8]/50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#1F5E4B] focus:ring-2 focus:ring-[#1F5E4B]/20 transition-all text-[14px]"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-[13px] md:text-[14px] font-bold text-[#1A1A1A]">Email Address *</label>
                    <input 
                      type="email" 
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full px-4 py-3.5 bg-[#F5F1E8]/50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#1F5E4B] focus:ring-2 focus:ring-[#1F5E4B]/20 transition-all text-[14px]"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-[13px] md:text-[14px] font-bold text-[#1A1A1A]">Phone Number *</label>
                    <input 
                      type="tel" 
                      placeholder="+971 XX XXX XXXX"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      required
                      minLength={8}
                      maxLength={20}
                      pattern="[0-9+\s-]+"
                      title="Please enter a valid phone number"
                      className="w-full px-4 py-3.5 bg-[#F5F1E8]/50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#1F5E4B] focus:ring-2 focus:ring-[#1F5E4B]/20 transition-all text-[14px]"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-[13px] md:text-[14px] font-bold text-[#1A1A1A]">Preferred Time</label>
                    <input 
                      type="text" 
                      placeholder="e.g., Morning / Afternoon / Evening"
                      value={formData.preferredTime}
                      onChange={e => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full px-4 py-3.5 bg-[#F5F1E8]/50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#1F5E4B] focus:ring-2 focus:ring-[#1F5E4B]/20 transition-all text-[14px]"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-[13px] md:text-[14px] font-bold text-[#1A1A1A]">Treatment Area</label>
                    <input 
                      type="text" 
                      placeholder="e.g., Knee, Shoulder, Lower Back"
                      value={formData.treatmentArea}
                      onChange={e => setFormData({ ...formData, treatmentArea: e.target.value })}
                      className="w-full px-4 py-3.5 bg-[#F5F1E8]/50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#1F5E4B] focus:ring-2 focus:ring-[#1F5E4B]/20 transition-all text-[14px]"
                    />
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-[#1F5E4B] text-white px-8 py-4 rounded-xl font-bold hover:bg-opacity-90 transition-all shadow-lg text-[15px]"
                  >
                    Confirm Appointment Request
                  </button>
            
                  <a 
                    href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="flex items-center justify-center gap-3 bg-white text-[#1F5E4B] px-8 py-4 rounded-xl font-bold border-2 border-[#25D366] hover:bg-[#F5F5F5] transition-all shadow-lg text-[15px]"
                  >
                    <MessageCircle className="w-5 h-5 text-[#25D366]" />
                    Book via WhatsApp Instantly
                  </a>

                  <p className="text-[11px] text-[#9CA3AF] text-center leading-relaxed mt-2">
                    By submitting, you agree to be contacted by RamaCare Polyclinic regarding your appointment
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>

        <ContentReviewBadge doctorName="Jeena Mathew" pageSlug="ultrasound-vs-shockwave-therapy-dubai" />

        {/* Popup Modal */}
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 md:p-8 relative"
            >
              <button 
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>

              <div className="text-center mb-6">
                <div className="w-16 h-16 rounded-full bg-[#F5F1EA] flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-[#1F5E4B]" />
                </div>
                <h3 className="text-[26px] md:text-[30px] font-bold text-[#1A1A1A] mb-3">
                  Still unsure?
                </h3>
                <p className="text-[15px] md:text-[16px] text-[#5F5F5F] leading-relaxed">
                  Book a free assessment and let our experts guide you to the right therapy
                </p>
              </div>

              <div className="bg-[#F5F1EA] rounded-xl p-4 space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5E4B] flex-shrink-0 mt-0.5" />
                  <p className="text-[14px] md:text-[15px] text-[#5F5F5F]">Free physical assessment</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5E4B] flex-shrink-0 mt-0.5" />
                  <p className="text-[14px] md:text-[15px] text-[#5F5F5F]">Expert diagnosis by DHA-licensed professionals</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5E4B] flex-shrink-0 mt-0.5" />
                  <p className="text-[14px] md:text-[15px] text-[#5F5F5F]">Personalized treatment recommendation</p>
                </div>
              </div>

              <button 
                onClick={handleBookFreeAssessment}
                className="w-full bg-[#1F5E4B] text-white px-8 py-4 rounded-xl font-bold text-[15px] md:text-[16px] hover:bg-opacity-90 transition-all shadow-lg mb-3"
              >
                Book Free Assessment
              </button>

              <button 
                onClick={handleMaybeLater}
                className="w-full bg-transparent text-[#5F5F5F] px-8 py-3 rounded-lg font-medium text-[14px] md:text-[15px] hover:bg-gray-50 transition-all"
              >
                Maybe later
              </button>
            </motion.div>
          </div>
        )}

      </main>
    </Layout>
    {ToastComponent}
    </>
  );
};

export default UltrasoundVsShockwavePage;
