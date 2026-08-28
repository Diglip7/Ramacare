import React, { useState } from 'react';
import Head from 'next/head';
import { ShieldCheck, Award, Clock, Waves, Info, Heart, Thermometer, AlertTriangle, Activity, Settings, ChevronDown, Phone, MapPin } from 'lucide-react';
import Layout from '../../../components/Layout';
import ContentReviewBadge from '../../../components/ContentReviewBadge';

const UltrasoundSafetyPage = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const whatsappNumber = "971566597878";
  const whatsappMessage = encodeURIComponent("Hello RamaCare, I have a question about the safety of Ultrasound Therapy.");

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    preferredTime: '',
    treatmentArea: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [toast, setToast] = useState({ show: false, type: 'success', message: '' });

  const showToast = (message, type = 'success') => {
    setToast({ show: true, type, message });
    setTimeout(() => setToast(prev => ({ ...prev, show: false })), 3000);
  };

  const validateField = (name, value) => {
    if (name === 'name') {
      if (!value || value.trim().length < 3) return 'Name must be at least 3 characters';
      return '';
    }
    if (name === 'phone') {
      if (!value || !/^[+]?[1-9]\d{1,14}$/.test(value.replace(/\s/g, ''))) return 'Enter a valid phone number';
      return '';
    }
    if (name === 'email') {
      if (!value || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Enter a valid email address';
      return '';
    }
    if (name === 'preferredTime' || name === 'treatmentArea') {
      if (!value || value.trim() === '') return 'This field is required';
      return '';
    }
    return '';
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      const error = validateField(name, value);
      setFormErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleInputBlur = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setFormErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });
    setFormErrors(newErrors);
    
    if (Object.keys(newErrors).length > 0) return;
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const res = await fetch('/api/appointment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source: 'ultrasound-therapy-safety-dubai',
          action: 'request_appointment',
          fullName: formData.name,
          phone: formData.phone,
          email: formData.email,
          preferredTime: formData.preferredTime,
          treatmentArea: formData.treatmentArea
        })
      });
      
      if (res.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', phone: '', email: '', preferredTime: '', treatmentArea: '' });
        showToast('Appointment request submitted successfully!', 'success');
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        setSubmitStatus('error');
        showToast('Failed to submit. Please try again or contact us directly.', 'error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      showToast('Something went wrong. Please try again.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const faqs = [
    {
      question: "Can ultrasound therapy cause burns?",
      answer: "Only if used incorrectly. By using high-quality coupling gel and keeping the transducer in constant motion, the risk of a thermal burn is virtually zero at our clinic."
    },
    {
      question: "Is it safe to have ultrasound therapy every day?",
      answer: "While safe, it is usually not recommended. We prefer giving your tissues 48 hours to process the cellular changes. Daily use can lead to 'tissue saturation,' where the body stops responding to the stimulus."
    },
    {
      question: "Is it safe for elderly patients?",
      answer: "Yes, ultrasound is a favorite for managing arthritis and joint stiffness in older adults because it is gentle and does not require the use of heavy medications that might interact with other prescriptions."
    }
  ];

  return (
    <Layout>
      <Head>
        <title key="title">Ultrasound Therapy Safety & Side Effects Dubai | RamaCare Guide</title>
        <meta name="description" content="Is therapeutic ultrasound safe? Explore the side effects, risks, and medical contraindications for ultrasound therapy at RamaCare Polyclinic, Jumeirah 1." key="description" />
        
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700;800&display=swap" rel="stylesheet" />
      </Head>

      <main className="min-h-screen bg-white" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
        
        {/* Hero Section */}
        <section className="bg-white py-20 md:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Column - Text Content */}
              <div className="space-y-8 order-1 md:order-1">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-[#1A1A1A]">
                  Ultrasound Therapy Safety & Side Effects Dubai | RamaCare Guide
                </h1>
                <p className="text-lg md:text-xl text-[#5F5F5F] leading-relaxed max-w-xl">
                  Is therapeutic ultrasound safe? Explore the side effects, risks, and medical contraindications for ultrasound therapy at RamaCare Polyclinic, Jumeirah 1.
                </p>
                <div className="bg-[#F5F1EA] p-8 rounded-2xl">
                  <h3 className="text-2xl font-bold text-[#1B5E3F] mb-3">
                    A 100% Non-Invasive Safety Profile
                  </h3>
                  <p className="text-[#5F5F5F] leading-relaxed">
                    Therapeutic ultrasound has been used in clinical rehabilitation for over 80 years. It is a non-ionizing technology (unlike X-rays), meaning it does not use radiation. When administered by a DHA-licensed professional at RamaCare, the treatment is exceptionally safe and generally free from side effects.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="#booking-section" className="inline-block py-3 px-6 bg-[#1F5E4B] text-white text-center font-bold rounded-lg shadow-md hover:bg-opacity-90 transition-all">
                    Book Your Safe Assessment Now
                  </a>
                  <a href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} target="_blank" rel="nofollow noopener noreferrer" className="inline-block py-3 px-6 bg-[#E9E2D6] text-[#1A1A1A] text-center font-bold rounded-lg hover:bg-[#dfd5c5] transition-all">
                    WhatsApp Consultation
                  </a>
                </div>
                <div className="grid grid-cols-3 gap-6 pt-8">
                  <div className="flex flex-col items-center text-center">
                    <ShieldCheck className="w-10 h-10 text-[#1F5E4B] mb-2" />
                    <span className="text-sm font-medium text-[#5F5F5F]">DHA Licensed</span>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <Award className="w-10 h-10 text-[#1F5E4B] mb-2"/>
                    <span className="text-sm font-medium text-[#5F5F5F]">ISO-Compliant Equipment</span>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <Clock className="w-10 h-10 text-[#1F5E4B] mb-2" />
                    <span className="text-sm font-medium text-[#5F5F5F]">80+ Years Clinical Technology</span>
                  </div>
                </div>
              </div>
              
              {/* Right Column - Image */}
              <div className="relative order-2 md:order-2">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                  <img src="/images/Safety.jpg" alt="Ultrasound Therapy Safety" className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F5E4B]/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                      <p className="text-lg md:text-xl text-white font-semibold">Non-Invasive • No Radiation • Clinically Safe</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Patient Sensation Section */}
        <section className="bg-[#F5F1EA] py-24 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-sm mb-4">
              <Waves className="w-10 h-10 text-[#1B5E3F]" />
            </div>
            <h2 className="text-[32px] md:text-[42px] font-bold text-[#1B5E3F]">
              The "Patient Sensation" Check:
            </h2>
            <p className="text-[18px] md:text-[22px] text-[#5F5F5F] leading-relaxed max-w-3xl mx-auto">
              During treatment, you should feel a <span className="text-[#1B5E3F] font-semibold">soothing, deep warmth</span> or a <span className="text-[#1B5E3F] font-semibold">slight tingling</span>. It should never feel hot or sharp. If you feel discomfort, our therapists are trained to adjust the intensity immediately to ensure your safety.
            </p>
          </div>
        </section>

        {/* Potential Side Effects Section */}
        <section className="bg-white py-24 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-6">Potential Side Effects (Rare)</h2>
              <p className="text-lg md:text-xl text-[#5F5F5F] max-w-4xl mx-auto">While most patients experience only positive relief, minor and temporary reactions can occur:</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white border border-[#E9E2D6] rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow text-center space-y-4">
                <div className="flex justify-center">
                  <div className="w-14 h-14 bg-[#F5F1EA] rounded-full flex items-center justify-center">
                    <Info className="w-6 h-6 text-[#1B5E3F]" />
                  </div>
                </div>
                <h3 className="text-[#1B5E3F] font-bold text-xl">Mild Skin Redness</h3>
                <p className="text-[#5F5F5F] leading-relaxed">Caused by increased blood flow to the treated area (usually fades in 30 minutes).</p>
              </div>
              <div className="bg-white border border-[#E9E2D6] rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow text-center space-y-4">
                <div className="flex justify-center">
                  <div className="w-14 h-14 bg-[#F5F1EA] rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-[#1B5E3F]" />
                  </div>
                </div>
                <h3 className="text-[#1B5E3F] font-bold text-xl">Temporary Tenderness</h3>
                <p className="text-[#5F5F5F] leading-relaxed">Deep tissue repair can sometimes feel like a "post-gym" ache for a few hours.</p>
              </div>
              <div className="bg-white border border-[#E9E2D6] rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow text-center space-y-4">
                <div className="flex justify-center">
                  <div className="w-14 h-14 bg-[#F5F1EA] rounded-full flex items-center justify-center">
                    <Thermometer className="w-6 h-6 text-[#1B5E3F]" />
                  </div>
                </div>
                <h3 className="text-[#1B5E3F] font-bold text-xl">Slight Warmth</h3>
                <p className="text-[#5F5F5F] leading-relaxed">A lingering heat sensation in the muscle as the thermal energy dissipates.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contraindications Section */}
        <section className="bg-[#F5F1EA] py-24 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-sm">
                <AlertTriangle className="w-10 h-10 text-[#1B5E3F]" />
              </div>
            </div>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-6">Who Should NOT Have Ultrasound Therapy? (Contraindications)</h2>
              <p className="ttext-lg md:text-xl text-[#5F5F5F] max-w-5xl mx-auto">At RamaCare, we perform a mandatory safety screening before your first session. Under DHA safety guidelines, ultrasound therapy is strictly avoided in the following "Red Flag" areas or conditions:</p>
            </div>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-[#E9E2D6]">
              <div className="overflow-x-auto">
                <table className="w-full bg-white text-left">
                  <thead className="bg-[#1B5E3F] text-white">
                    <tr>
                      <th className="px-6 py-4 font-bold text-left">Category</th>
                      <th className="px-6 py-4 font-bold text-left">Why it is Avoided</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[#E9E2D6] hover:bg-[#F5F1EA] transition-colors">
                      <td className="px-6 py-4 font-semibold text-[#1A1A1A]">Pregnancy</td>
                      <td className="px-6 py-4 text-[#5F5F5F]">To avoid any risk of overheating the fetus (when treating the back/abdomen).</td>
                    </tr>
                    <tr className="border-b border-[#E9E2D6] hover:bg-[#F5F1EA] transition-colors">
                      <td className="px-6 py-4 font-semibold text-[#1A1A1A]">Pacemakers</td>
                      <td className="px-6 py-4 text-[#5F5F5F]">Acoustic waves can interfere with the electronic signaling of some cardiac devices.</td>
                    </tr>
                    <tr className="border-b border-[#E9E2D6] hover:bg-[#F5F1EA] transition-colors">
                      <td className="px-6 py-4 font-semibold text-[#1A1A1A]">Malignancy (Cancer)</td>
                      <td className="px-6 py-4 text-[#5F5F5F]">We do not apply ultrasound over known tumors as it may stimulate cellular growth.</td>
                    </tr>
                    <tr className="border-b border-[#E9E2D6] hover:bg-[#F5F1EA] transition-colors">
                      <td className="px-6 py-4 font-semibold text-[#1A1A1A]">Blood Clots (DVT)</td>
                      <td className="px-6 py-4 text-[#5F5F5F]">Deep vibration could potentially dislodge a clot into the bloodstream.</td>
                    </tr>
                    <tr className="border-b border-[#E9E2D6] hover:bg-[#F5F1EA] transition-colors">
                      <td className="px-6 py-4 font-semibold text-[#1A1A1A]">Metal Implants (Specific)</td>
                      <td className="px-6 py-4 text-[#5F5F5F]">While most modern orthopedic pins are safe, we avoid "cemented" implants or plastics.</td>
                    </tr>
                    <tr className="border-b border-[#E9E2D6] hover:bg-[#F5F1EA] transition-colors">
                      <td className="px-6 py-4 font-semibold text-[#1A1A1A]">Growth Plates</td>
                      <td className="px-6 py-4 text-[#5F5F5F]">We do not use high-intensity ultrasound over the epiphyseal (growth) lines in children.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* The RamaCare "Safety-First" Protocol Section */}
        <section className="bg-white py-24 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-6">The RamaCare "Safety-First" Protocol</h2>
              <p className="text-lg md:text-xl text-[#5F5F5F] max-w-4xl mx-auto">To maintain our status as a leading Dubai polyclinic, we follow a rigorous 3-point safety check for every session:</p>
            </div>
            
            <div className="max-w-5xl mx-auto space-y-6">
              {/* Card 1 */}
              <div className="bg-white border border-[#E9E2D6] rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="w-14 h-14 bg-[#1B5E3F] rounded-xl flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-8 h-8 text-white" />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">DHA-Licensed Delivery</h3>
                  <p className="text-[#5F5F5F] leading-relaxed">Only therapists with active Dubai Health Authority licenses operate our equipment.</p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white border border-[#E9E2D6] rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="w-14 h-14 bg-[#1B5E3F] rounded-xl flex items-center justify-center shrink-0">
                  <Activity className="w-8 h-8 text-white" />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">Continuous Motion Technique</h3>
                  <p className="text-[#5F5F5F] leading-relaxed">We never hold the ultrasound probe still. This prevents "hot spots" and ensures the energy is distributed safely and evenly.</p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white border border-[#E9E2D6] rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="w-14 h-14 bg-[#1B5E3F] rounded-xl flex items-center justify-center shrink-0">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">Monthly Calibration</h3>
                  <p className="text-[#5F5F5F] leading-relaxed">Our machines are professionally calibrated every month to ensure the power output matches the digital display—a level of precision rarely found in smaller wellness centers.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Frequently Asked Questions (PAA) Section */}
        <section className="bg-[#F5F1EA] py-24 px-6 lg:px-8">
          <div className="max-w-[832px] mx-auto">
            <div className="text-center mb-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-6">Frequently Asked Questions (PAA)</h2>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="divide-y divide-[#E9E2D6]">
                {faqs.map((faq, index) => (
                  <div key={index} className="py-6 group cursor-pointer" onClick={() => setOpenIndex(openIndex === index ? -1 : index)}>
                    <div className="flex justify-between items-center text-left">
                      <span className={`text-lg md:text-xl font-semibold pr-8 transition-colors ${openIndex === index ? 'text-[#1F5E4B]' : 'text-[#1A1A1A] group-hover:text-[#1F5E4B]'}`}>
                        {faq.question}
                      </span>
                      <ChevronDown className={`h-6 w-6 shrink-0 text-[#1F5E4B] transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} />
                    </div>
                    {openIndex === index && (
                      <div className="mt-4 pb-2 text-[#5F5F5F] leading-relaxed text-base">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final Booking Section */}
        <section id="booking-section" className="bg-[#1F5E4B] py-24 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Your Safety is Our Priority in Jumeirah 1
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-10">
              We believe that informed patients get the best results. If you have questions about your specific medical history, our team is here to provide a transparent, expert opinion.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-white/80 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>Jumeirah 1, Dubai</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5" />
                <span>DHA Licensed Polyclinic</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5" />
                <span>ISO-Compliant Equipment</span>
              </div>
            </div>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-[2rem] shadow-2xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] text-center mb-10">
                Book Your Safe Assessment Now
              </h3>
              
              <form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit} noValidate>
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <div className="space-y-2">
                    <label className="block text-[#1A1A1A] font-semibold">Name</label>
                    <input 
                      type="text" 
                      name="name"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleInputChange}
                      onBlur={handleInputBlur}
                      className={`w-full bg-[#F5F1EA] border-none rounded-xl p-4 text-[#1A1A1A] placeholder:text-[#A1A1A1] outline-none focus:ring-2 focus:ring-[#1F5E4B] transition-all ${formErrors.name ? 'ring-2 ring-red-500' : ''}`}
                    />
                    {formErrors.name && <p className="text-xs text-red-600">{formErrors.name}</p>}
                  </div>
                  {/* Phone Field */}
                  <div className="space-y-2">
                    <label className="block text-[#1A1A1A] font-semibold">Phone</label>
                    <input 
                      type="tel" 
                      name="phone"
                      placeholder="+971 XX XXX XXXX"
                      value={formData.phone}
                      onChange={handleInputChange}
                      onBlur={handleInputBlur}
                      className={`w-full bg-[#F5F1EA] border-none rounded-xl p-4 text-[#1A1A1A] placeholder:text-[#A1A1A1] outline-none focus:ring-2 focus:ring-[#1F5E4B] transition-all ${formErrors.phone ? 'ring-2 ring-red-500' : ''}`}
                    />
                    {formErrors.phone && <p className="text-xs text-red-600">{formErrors.phone}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Email Field */}
                  <div className="space-y-2">
                    <label className="block text-[#1A1A1A] font-semibold">Email</label>
                    <input 
                      type="email" 
                      name="email"
                      placeholder="Your email address"
                      value={formData.email}
                      onChange={handleInputChange}
                      onBlur={handleInputBlur}
                      className={`w-full bg-[#F5F1EA] border-none rounded-xl p-4 text-[#1A1A1A] placeholder:text-[#A1A1A1] outline-none focus:ring-2 focus:ring-[#1F5E4B] transition-all ${formErrors.email ? 'ring-2 ring-red-500' : ''}`}
                    />
                    {formErrors.email && <p className="text-xs text-red-600">{formErrors.email}</p>}
                  </div>
                  {/* Preferred Time */}
                  <div className="space-y-2">
                    <label className="block text-[#1A1A1A] font-semibold">Preferred Time</label>
                    <input 
                      type="text" 
                      name="preferredTime"
                      placeholder="e.g., Morning / Afternoon / Evening"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      onBlur={handleInputBlur}
                      className={`w-full bg-[#F5F1EA] border-none rounded-xl p-4 text-[#1A1A1A] placeholder:text-[#A1A1A1] outline-none focus:ring-2 focus:ring-[#1F5E4B] transition-all ${formErrors.preferredTime ? 'ring-2 ring-red-500' : ''}`}
                    />
                    {formErrors.preferredTime && <p className="text-xs text-red-600">{formErrors.preferredTime}</p>}
                  </div>
                </div>

                {/* Treatment Area */}
                <div className="space-y-2">
                  <label className="block text-[#1A1A1A] font-semibold">Treatment Area</label>
                  <textarea 
                    name="treatmentArea"
                    placeholder="Describe the area needing treatment"
                    value={formData.treatmentArea}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                    className={`w-full bg-[#F5F1EA] border-none rounded-xl p-4 text-[#1A1A1A] placeholder:text-[#A1A1A1] outline-none focus:ring-2 focus:ring-[#1F5E4B] transition-all h-32 resize-none ${formErrors.treatmentArea ? 'ring-2 ring-red-500' : ''}`}
                  ></textarea>
                  {formErrors.treatmentArea && <p className="text-xs text-red-600">{formErrors.treatmentArea}</p>}
                </div>

                {/* Submit Status Messages */}
                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-100 text-green-700 rounded-xl text-center font-medium">
                    Thank you! Your appointment request has been received. We will contact you shortly.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-100 text-red-700 rounded-xl text-center font-medium">
                    Something went wrong. Please try again or contact us via WhatsApp.
                  </div>
                )}

                {/* Form Buttons */}
                <div className="grid md:grid-cols-2 gap-4 pt-4">
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#1F5E4B] text-white font-bold py-4 rounded-xl shadow-lg hover:opacity-90 transition-all text-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Submitting...' : 'Confirm Appointment Request'}
                  </button>
                  <a 
                    href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="w-full bg-[#E9E2D6] text-[#1A1A1A] font-bold py-4 rounded-xl hover:bg-[#dfd5c5] transition-all text-center"
                  >
                    Book via WhatsApp Instantly
                  </a>
                </div>
              </form>
            </div>
            </div>
        </section>

        <ContentReviewBadge doctorName="Jeena Mathew" pageSlug="ultrasound-therapy-safety-dubai" />

      </main>

      {/* Toast Notification */}
      {toast.show && (
        <div className="fixed top-6 right-6 z-[10000] animate-fadeIn">
          <div className={`px-5 py-3.5 rounded-xl shadow-xl border backdrop-blur-sm flex items-center gap-3 ${
            toast.type === 'success' 
              ? 'bg-emerald-600/95 border-emerald-500 text-white' 
              : 'bg-red-600/95 border-red-500 text-white'
          }`}>
            {toast.type === 'success' ? (
              <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
            <span className="font-medium text-sm tracking-wide">{toast.message}</span>
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </Layout>
  );
};

export default UltrasoundSafetyPage;
