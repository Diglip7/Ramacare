import React, { useState } from 'react';
import Head from 'next/head';
import { MessageCircle, Calendar, Check, Zap, Activity, Waves, Clock, ChevronDown, ChevronUp, AlertCircle, Flame, HeartPulse, MapPin, Award, Sparkles, X, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from '../../../components/Layout';
import ContentReviewBadge from '../../../components/ContentReviewBadge';
import { useToast } from '../../../components/Toast';

const ThermalVsMechanicalUltrasound = () => {
  const { showToast, ToastComponent } = useToast();
  const [openFaq, setOpenFaq] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    time: '',
    injury: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const scrollToForm = (e) => {
    if (e) e.preventDefault();
    const formSection = document.getElementById('booking-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone) {
      showToast('Please fill in all required fields (Name, Email, Phone)', 'error');
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
          preferredTime: formData.time,
          concern: formData.injury,
          source: 'thermal-vs-mechanical-ultrasound-therapy-dubai'
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        showToast('Appointment request submitted successfully! We will contact you soon.', 'success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          time: '',
          injury: ''
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

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const whatsappNumber = "971566597878";
  const whatsappMessage = encodeURIComponent("Hello RamaCare, I want to know more about Thermal vs Mechanical Ultrasound Therapy.");

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "Is mechanical ultrasound the same as Shockwave?",
      answer: "No. While both use mechanical energy, mechanical ultrasound uses high-frequency sound waves that are much gentler. Shockwave uses \"Pressure Pulses\" that are more aggressive and better for breaking down calcified bone spurs."
    },
    {
      question: "Will the thermal mode burn my skin?",
      answer: "Not at RamaCare. We use a high-quality conductive gel and a \"Constant Motion\" technique. Because the heat is generated inside the tissue rather than on the surface, your skin remains safe while your muscles get the benefit."
    },
    {
      question: "Can I choose which mode I want?",
      answer: "Our therapists will decide the mode based on a physical assessment. If your injury is \"hot\" (swollen/red), we will always start with Mechanical to avoid aggravating the inflammation."
    }
  ];

  return (
    <Layout>
      {ToastComponent}
      <Head>
        <title key="title">Thermal vs. Mechanical Ultrasound Therapy Dubai | RamaCare Guide</title>
        <meta name="description" content="Should you use Thermal or Mechanical ultrasound? Learn how RamaCare Jumeirah uses different ultrasound modes to treat acute swelling versus chronic stiffness." key="description" />
        
      </Head>

      <main className="min-h-screen bg-white" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
        
        {/* Section 1: Hero */}
        <section className="bg-[#F5F1EA] py-16 lg:py-24">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-12 items-center">
              
              {/* Left Column: Content */}
              <div>
                <h1 className="text-4xl lg:text-6xl mb-6 font-semibold text-[var(--clinic-text-dark)] leading-tight">
                  One Technology, Two Healing Powers
                </h1>
                
                <p className="text-lg text-[#5F5F5F] mb-4 leading-relaxed">
                  Therapeutic ultrasound is not a single-speed treatment. Depending on whether your injury is fresh and swollen or old and stiff, our DHA-licensed therapists switch between two primary modes: <span className="font-bold text-[#1A1A1A]">Thermal (Continuous)</span> and <span className="font-bold text-[#1A1A1A]">Mechanical (Pulsed)</span>.
                </p>
                
                <p className="text-lg text-[#5F5F5F] mb-8 leading-relaxed">
                  At RamaCare Polyclinic, we use this "Dual-Mode" approach to ensure we never overheat an acute injury while providing enough energy to melt away chronic tension.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <button 
                    onClick={scrollToForm}
                    className="bg-[#1F5E4B] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#164235] transition-all"
                  >
                    Book Your Healing Assessment
                  </button>
                  <a 
                    href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="flex items-center justify-center gap-2 bg-white text-[#1A1A1A] border border-[#E9E1D3] px-8 py-4 rounded-xl font-bold hover:bg-[#F5F1EA] transition-all"
                  >
                    <MessageCircle size={20} />
                    WhatsApp Consultation
                  </a>
                </div>
                
                {/* Badges */}
                <div className="flex flex-wrap gap-6">
                  <div className="flex items-center gap-2 text-[#5F5F5F] font-semibold text-sm">
                    <Check size={18} className="text-[#1F5E4B] stroke-[3]" />
                    <span>DHA Approved</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#5F5F5F] font-semibold text-sm">
                    <Check size={18} className="text-[#1F5E4B] stroke-[3]" />
                    <span>Sports Injury Specialists</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#5F5F5F] font-semibold text-sm">
                    <Check size={18} className="text-[#1F5E4B] stroke-[3]" />
                    <span>Dubai Run Recovery Experts</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Wave Comparison Graphic */}
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                  <h3 className="text-2xl font-bold text-[#1A1A1A] text-center mb-6">Wave Comparison</h3>
                  
                  {/* Thermal Section */}
                  <div className="mb-8">
                    <p className="mb-3 text-[#5F5F5F]">
                      <strong className="text-[#1F5E4B]">Thermal (Continuous)</strong>
                    </p>
                    <div className="bg-[#F5F1EA] rounded-lg p-3 h-20 flex items-center overflow-hidden">
                      <svg width="100%" height="40" viewBox="0 0 400 40" preserveAspectRatio="none">
                        <motion.path
                          d="M 0 20 Q 10 0 20 20 T 40 20 T 60 20 T 80 20 T 100 20 T 120 20 T 140 20 T 160 20 T 180 20 T 200 20 T 220 20 T 240 20 T 260 20 T 280 20 T 300 20 T 320 20 T 340 20 T 360 20 T 380 20 T 400 20"
                          fill="none"
                          stroke="#1F5E4B"
                          strokeWidth="2"
                          animate={{
                            x: [-20, 0]
                          }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Mechanical Section */}
                  <div>
                    <p className="mb-3 text-[#5F5F5F]">
                      <strong className="text-[#1F5E4B]">Mechanical (Pulsed)</strong>
                    </p>
                    <div className="bg-[#F5F1EA] rounded-lg p-3 h-20 flex items-center overflow-hidden">
                      <svg width="100%" height="40" viewBox="0 0 400 40" preserveAspectRatio="none">
                        {[0, 1, 2, 3, 4, 5].map((i) => (
                          <motion.path
                            key={i}
                            d={`M ${i * 70} 20 Q ${i * 70 + 10} 0 ${i * 70 + 20} 20 T ${i * 70 + 40} 20`}
                            fill="none"
                            stroke="#1F5E4B"
                            strokeWidth="2"
                            animate={{
                              x: [-20, 0],
                              opacity: [0.3, 1, 0.3]
                            }}
                            transition={{
                              x: { duration: 1.5, repeat: Infinity, ease: "linear" },
                              opacity: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }
                            }}
                          />
                        ))}
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Understanding the Two Modes */}
        <section className="bg-white py-16 lg:py-24">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl lg:text-5xl font-semibold text-[#1A1A1A] tracking-tight">Understanding the Two Modes</h2>
              <p className="text-lg lg:text-xl text-[#5F5F5F]">Each mode serves a distinct healing purpose</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              
              {/* Mode 1: Thermal Ultrasound */}
              <div className="bg-gradient-to-br from-[#F5F1EA] to-[#EDE5D8] p-8 rounded-2xl shadow-lg space-y-8 flex flex-col">
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 bg-[#1F5E4B] rounded-full flex items-center justify-center text-white shrink-0">
                    <Zap size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#1A1A1A]">Mode 1: Thermal Ultrasound</h3>
                    <p className="text-[#5F5F5F] text-sm">(Deep Heat)</p>
                  </div>
                </div>

                <div className="space-y-6 flex-grow">
                  <div className="space-y-2">
                    <h4 className="text-base font-bold text-[#1F5E4B]">The Setting</h4>
                    <p className="text-lg font-bold text-[#5F5F5F]">Continuous Wave (100% Duty Cycle)</p>
                    <p className="text-base text-[#5F5F5F] leading-relaxed">
                      In this mode, the ultrasound wand delivers a steady stream of sound waves that cause the molecules in your tissue to vibrate rapidly, creating deep internal heat.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-base font-bold text-[#1F5E4B]">Best For</h4>
                    <p className="text-base text-[#5F5F5F] leading-relaxed">Chronic pain, "Office Neck," and old sports injuries.</p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-base font-bold text-[#1F5E4B]">The Goal</h4>
                    <p className="text-base text-[#5F5F5F] leading-relaxed">To increase the <span className="italic">"extensibility"</span> of muscles and tendons.</p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-base font-bold text-[#1F5E4B]">Why it works</h4>
                    <p className="text-base text-[#5F5F5F] leading-relaxed">
                      The heat increases blood flow and relaxes "locked" muscle fibers, making it easier for our physiotherapists to stretch and mobilize the joint.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 mt-6">
                  <p className="text-base text-[#5F5F5F]">
                    <span className="font-bold text-[#1A1A1A]">Sensation:</span> A deep, soothing warmth that penetrates up to 5cm.
                  </p>
                </div>
              </div>

              {/* Mode 2: Mechanical Ultrasound */}
              <div className="bg-gradient-to-br from-[#F5F1EA] to-[#EDE5D8] p-8 rounded-2xl shadow-lg space-y-8 flex flex-col">
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 bg-[#1F5E4B] rounded-full flex items-center justify-center text-white shrink-0">
                    <Waves size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#1A1A1A]">Mode 2: Mechanical Ultrasound</h3>
                    <p className="text-[#5F5F5F] text-sm">(Non-Thermal)</p>
                  </div>
                </div>

                <div className="space-y-6 flex-grow">
                  <div className="space-y-2">
                    <h4 className="text-base font-bold text-[#1F5E4B]">The Setting</h4>
                    <p className="text-lg font-bold text-[#5F5F5F]">Pulsed Wave (20% or 50% Duty Cycle)</p>
                    <p className="text-base text-[#5F5F5F] leading-relaxed">
                      In this mode, the sound waves are delivered in short "bursts" with gaps in between. This prevents heat from building up while still providing the physical vibration needed for healing.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-base font-bold text-[#1F5E4B]">Best For</h4>
                    <p className="text-base text-[#5F5F5F] leading-relaxed">Acute injuries, fresh sprains, and heavy swelling.</p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-base font-bold text-[#1F5E4B]">The Goal</h4>
                    <p className="text-base text-[#5F5F5F] leading-relaxed">To reduce edema (fluid buildup) and kickstart cellular repair.</p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-base font-bold text-[#1F5E4B]">Why it works</h4>
                    <p className="text-base text-[#5F5F5F] leading-relaxed">
                      It uses Cavitation (micro-bubbles) and Acoustic Streaming to move inflammatory fluids out of the injured area and "wake up" the cells responsible for tissue repair.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 mt-6">
                  <p className="text-base text-[#5F5F5F]">
                    <span className="font-bold text-[#1A1A1A]">Sensation:</span> Usually no sensation at all, or a very light "buzzing."
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Section 3: Comparison Table */}
        <section className="bg-[#F5F1EA] py-16 lg:py-24">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold text-[#1A1A1A]">Comparison: Which Mode Does Your Injury Need?</h2>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-[#E9E2D6]">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#1F5E4B] text-white">
                      <th className="px-6 py-4 text-left">Feature</th>
                      <th className="px-6 py-4 text-left">Thermal (Continuous)</th>
                      <th className="px-6 py-4 text-left">Mechanical (Pulsed)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr className="hover:bg-[#FDFBF7] transition-colors border-b border-[#E9E2D6]">
                      <td className="py-6 px-8 font-bold text-[#1A1A1A]">Primary Effect</td>
                      <td className="py-6 px-8 text-[#5F5F5F]">Deep tissue heating.</td>
                      <td className="py-6 px-8 text-[#5F5F5F]">Cellular stimulation/vibration.</td>
                    </tr>
                    <tr className="bg-[#F5F1EA]  transition-colors border-b border-[#E9E2D6]">
                      <td className="py-6 px-8 font-bold text-[#1A1A1A]">Inflammation</td>
                      <td className="py-6 px-8 text-[#5F5F5F]">Avoid in fresh inflammation.</td>
                      <td className="py-6 px-8 text-[#5F5F5F]">Perfect for fresh inflammation.</td>
                    </tr>
                    <tr className="hover:bg-[#FDFBF7] transition-colors border-b border-[#E9E2D6]">
                      <td className="py-6 px-8 font-bold text-[#1A1A1A]">Blood Flow</td>
                      <td className="py-6 px-8 text-[#5F5F5F]">Massive increase (Vasodilation).</td>
                      <td className="py-6 px-8 text-[#5F5F5F]">Micro-circulation boost.</td>
                    </tr>
                    <tr className="bg-[#F5F1EA] transition-colors border-b border-[#E9E2D6]">
                      <td className="py-6 px-8 font-bold text-[#1A1A1A]">Best Used For</td>
                      <td className="py-6 px-8 text-[#5F5F5F]">Chronic Stiffness / Scar Tissue.</td>
                      <td className="py-6 px-8 text-[#5F5F5F]">Swelling / Acute Sprains / Tears.</td>
                    </tr>
                    <tr className="hover:bg-[#FDFBF7] transition-colors">
                      <td className="py-6 px-8 font-bold text-[#1A1A1A]">Typical Condition</td>
                      <td className="py-6 px-8 text-[#5F5F5F]">Sciatica, Frozen Shoulder.</td>
                      <td className="py-6 px-8 text-[#5F5F5F]">Ankle Sprain, Bruising, Post-Op.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Bottom Wave Graphics with Color Separation */}
            <div className="mt-8 grid md:grid-cols-2 gap-8 p-8 bg-[#F5F1EA] rounded-2xl">
              <div className="text-center space-y-4">
                <p className="mb-3 text-center text-[#5F5F5F]">
                  <strong className="text-[#1F5E4B]">Steady Wave (Thermal)</strong>
                </p>
                <div className="h-20 flex items-center justify-center overflow-hidden">
                  <svg width="100%" height="60" viewBox="0 0 300 60" preserveAspectRatio="none">
                    <motion.path
                      d="M 0 30 Q 7.5 10 15 30 T 30 30 T 45 30 T 60 30 T 75 30 T 90 30 T 105 30 T 120 30 T 135 30 T 150 30 T 165 30 T 180 30 T 195 30 T 210 30 T 225 30 T 240 30 T 255 30 T 270 30 T 285 30 T 300 30"
                      fill="none"
                      stroke="#1F5E4B"
                      strokeWidth="2"
                      animate={{ x: [-15, 0] }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                  </svg>
                </div>
              </div>
              <div className="text-center space-y-4">
                <p className="mb-3 text-center text-[#5F5F5F]">
                  <strong className="text-[#1F5E4B]">Broken Wave (Mechanical)</strong>
                </p>
                <div className="h-20 flex items-center justify-center gap-8 overflow-hidden">
                  {[0, 1, 2, 3].map((i) => (
                    <svg key={i} width="40" height="60" viewBox="0 0 40 60">
                      <motion.path
                        d="M 0 30 Q 10 10 20 30 T 40 30"
                        fill="none"
                        stroke="#1F5E4B"
                        strokeWidth="2"
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
                      />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Precision Dose Strategy */}
        <section className="bg-white py-16 lg:py-24">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl mb-4 text-[#1A1A1A] font-bold">The RamaCare "Precision Dose" Strategy</h2>
            </div>

            <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#1F5E4B] to-[#164435] rounded-2xl p-8 shadow-2xl relative overflow-hidden">
              <div className="relative z-10">
                <p className="text-white text-xl leading-relaxed mb-8">
                  In Dubai's high-performance sports culture, we often see injuries that are in transition. For a runner at Kite Beach who has an old injury that just flared up, we may use a <span className="font-bold">Hybrid Protocol:</span>
                </p>

                <div>
                  {/* Step 1 */}
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-lg">
                      <Clock className="text-[#1F5E4B]" size={24} />
                    </div>
                    <div className="flex-grow bg-white/10 backdrop-blur rounded-lg p-4">
                      <h3 className="text-lg font-bold text-white flex items-center gap-2">
                        <Check size={18} className="text-white" />
                        Step 1: Mechanical Mode for 5 minutes
                      </h3>
                      <p className="text-white/70">To flush out the new swelling.</p>
                    </div>
                  </div>

                  {/* Perfectly Centered Connecting Line between divs */}
                  <div className="flex items-center justify-center py-4">
                    <div className="w-px h-8 bg-white/30" />
                  </div>

                  {/* Step 2 */}
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-lg">
                      <Clock className="text-[#1F5E4B]" size={24} />
                    </div>
                    <div className="flex-grow bg-white/10 backdrop-blur rounded-lg p-4">
                      <h3 className="text-lg font-bold text-white flex items-center gap-2">
                        <Check size={18} className="text-white" />
                        Step 2: Thermal Mode for 5 minutes
                      </h3>
                      <p className="text-white/70">To relax the underlying chronic muscle knot.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-white/10">
                  <p className="text-white text-lg ">
                    This level of "Dosage Control" is what differentiates a medical polyclinic like RamaCare from a standard massage or wellness center.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: FAQ */}
        <section className="bg-[#FDFBF7] py-16 lg:py-24">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-[#5F5F5F]">Everything you need to know about ultrasound therapy</p>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors">
                    <span className="font-semibold text-[#1A1A1A] text-lg">{faq.question}</span>
                    {openFaq === index ? (
                      <ChevronUp className="text-[#5F5F5F] shrink-0" size={20} />
                    ) : (
                      <ChevronDown className="text-[#5F5F5F] shrink-0" size={20} />
                    )}
                  </button>
                  <AnimatePresence>
                    {openFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6 text-[#5F5F5F] leading-relaxed border-t border-gray-50 pt-0">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6: Awareness Campaign */}
        <section className="bg-white py-16 lg:py-24">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-4">Awareness Campaign</h2>
              <p className="text-lg text-[#5F5F5F]">Educational ads for Dubai runners and athletes</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {/* Card 1 */}
              <div className="bg-gradient-to-br from-[#1F5E4B] to-[#164435] rounded-2xl p-8 text-white shadow-lg hover:shadow-2xl transition-shadow cursor-pointer">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-10">
                  <AlertCircle size={24} className="text-white" />
                </div>
                <div className="mt-auto">
                  <h3 className="text-2xl font-bold mb-3">Dubai Run Injury?</h3>
                  <p className="text-white/70 text-base leading-relaxed">
                    Swelling vs Stiffness — Different Treatment Needed
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-gradient-to-br from-[#2D7359] to-[#1F5E4B] rounded-2xl p-8 text-white shadow-lg hover:shadow-2xl transition-shadow cursor-pointer">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-10">
                  <Flame size={24} className="text-white" />
                </div>
                <div className="mt-auto">
                  <h3 className="text-2xl font-bold mb-3">Heat or No Heat?</h3>
                  <p className="text-white/70 text-base leading-relaxed">
                    Using the wrong ultrasound mode can delay recovery
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-gradient-to-br from-[#164435] to-[#0D2B23] rounded-2xl p-8 text-white shadow-lg hover:shadow-2xl transition-shadow cursor-pointer">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-10">
                  <HeartPulse size={24} className="text-white" />
                </div>
                <div className="mt-auto">
                  <h3 className="text-2xl font-bold mb-3">Still in Pain After Running?</h3>
                  <p className="text-white/70 text-base leading-relaxed">
                    Your injury might need Mechanical, not Thermal therapy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Final CTA - Targeted Healing */}
        <section id="booking-form" className="bg-[#1F5E4B] py-16 lg:py-24 text-white scroll-mt-20">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">Targeted Healing in Jumeirah 1</h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                Don't guess with your recovery. Let our experts at RamaCare Polyclinic apply the exact mode your body needs to heal.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-12 mb-16">
              <div className="flex items-center gap-3">
                <MapPin size={20} className="text-white/60" />
                <div className="text-left">
                  <p className="text-xs uppercase tracking-widest text-white/60 font-bold">Location</p>
                  <p className="font-semibold">Jumeirah 1, Dubai</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Award size={20} className="text-white/60" />
                <div className="text-left">
                  <p className="text-xs uppercase tracking-widest text-white/60 font-bold">Standard</p>
                  <p className="font-semibold">DHA-Approved Protocols</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Sparkles size={20} className="text-white/60" />
                <div className="text-left">
                  <p className="text-xs uppercase tracking-widest text-white/60 font-bold">Expertise</p>
                  <p className="font-semibold">Advanced Tissue Modalities</p>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-stretch max-w-6xl mx-auto">
              {/* Left: Booking Form */}
              <div className="bg-white rounded-2xl p-8 lg:p-10 text-[#1A1A1A] shadow-2xl h-full">
                <h3 className="text-2xl font-bold mb-8">Book Your Healing Assessment</h3>
                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div>
                    <label className="block text-[15px] font-bold mb-2">Name</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name" 
                      className="w-full h-12 bg-[#F5F1EA] border-none rounded-lg px-4 text-base focus:ring-2 focus:ring-[#1F5E4B] transition-all placeholder:text-[#A1A1A1]"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[15px] font-bold mb-2">Email</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com" 
                      className="w-full h-12 bg-[#F5F1EA] border-none rounded-lg px-4 text-base focus:ring-2 focus:ring-[#1F5E4B] transition-all placeholder:text-[#A1A1A1]"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[15px] font-bold mb-2">Phone</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+971 XX XXX XXXX" 
                      className="w-full h-12 bg-[#F5F1EA] border-none rounded-lg px-4 text-base focus:ring-2 focus:ring-[#1F5E4B] transition-all placeholder:text-[#A1A1A1]"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[15px] font-bold mb-2">Preferred Time</label>
                    <input 
                      type="text" 
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      placeholder="e.g., Morning, Afternoon, Evening" 
                      className="w-full h-12 bg-[#F5F1EA] border-none rounded-lg px-4 text-base focus:ring-2 focus:ring-[#1F5E4B] transition-all placeholder:text-[#A1A1A1]"
                    />
                  </div>
                  <div>
                    <label className="block text-[15px] font-bold mb-2">Injury Type</label>
                    <textarea 
                      name="injury"
                      value={formData.injury}
                      onChange={handleInputChange}
                      placeholder="Describe your injury" 
                      rows="3"
                      className="w-full bg-[#F5F1EA] border-none rounded-lg px-4 py-3 text-base focus:ring-2 focus:ring-[#1F5E4B] transition-all placeholder:text-[#A1A1A1] resize-none"
                    />
                  </div>
                  <div className="pt-2 space-y-4">
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-[52px] bg-[#1F5E4B] text-white font-bold rounded-lg hover:bg-[#164435] transition-all flex items-center justify-center text-base disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={20} className="animate-spin mr-2" />
                          Submitting...
                        </>
                      ) : 'Confirm Appointment'}
                    </button>
                    <a 
                      href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="flex items-center justify-center gap-2 w-full h-[52px] bg-white text-[#1A1A1A] border border-[#E9E1D3] font-bold rounded-lg hover:bg-[#F5F1EA] transition-all text-base"
                    >
                      <MessageCircle size={20} />
                      WhatsApp Instantly
                    </a>
                  </div>
                </form>
              </div>

              {/* Right: Precision Healing Card */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-10 h-full flex flex-col items-center justify-center text-center border border-white/20">
                <div className="bg-white/20 rounded-full p-10 inline-block mb-8 relative">
                  <Sparkles size={72} className="text-white" />
                  <motion.div 
                    className="absolute inset-0 rounded-full border-2 border-white/20"
                    animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-white">Precision Healing</h3>
                <p className="text-xl text-white/90 leading-relaxed max-w-sm">
                  Experience the difference of targeted ultrasound therapy customized to your specific injury needs.
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Retargeting Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 w-[384px] bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100"
          >
            <div className="bg-[#1F5E4B] text-white px-4 py-2 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-bold">
                <Clock size={14} />
                <span>Limited Daily Slots – Jumeirah Clinic</span>
              </div>
              <button onClick={() => setShowPopup(false)} className="hover:bg-white/10 p-1 rounded transition-colors">
                <X size={16} />
              </button>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">Still deciding? Let our therapist assess your injury.</h3>
              <p className="text-[#5F5F5F] mb-6">Get expert guidance on the right ultrasound mode for your recovery.</p>
              
              <div className="space-y-3">
                <button 
                  onClick={() => {
                    scrollToForm();
                    setShowPopup(false);
                  }}
                  className="w-full bg-[#1F5E4B] text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-[#164435] transition-all text-sm"
                >
                  <Calendar size={16} />
                  Book Free Assessment
                </button>
                <a 
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="flex items-center justify-center gap-2 w-full bg-white text-[#1A1A1A] border-2 border-[#E9E1D3] font-bold py-3 rounded-lg hover:bg-[#F5F1EA] transition-all text-sm"
                >
                  <MessageCircle size={16} />
                  WhatsApp Now
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
        <ContentReviewBadge doctorName="Jeena Mathew" pageSlug="thermal-vs-mechanical-ultrasound-therapy-dubai" />
      </Layout>
  );
};

export default ThermalVsMechanicalUltrasound;
