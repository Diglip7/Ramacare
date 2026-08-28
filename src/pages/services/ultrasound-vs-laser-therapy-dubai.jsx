import React, { useState } from 'react';
import Head from 'next/head';
import { MessageCircle, ChevronDown, ChevronUp, Phone, MapPin, Award } from 'lucide-react';
import Layout from '../../../components/Layout';
import ContentReviewBadge from '../../../components/ContentReviewBadge';
import Footer from '../../../components/Footer';

const UltrasoundVsLaserPage = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(2); // Default open "How many sessions"
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error'
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    preferredTime: '',
    injuryType: ''
  });

  const [recommendationData, setRecommendationData] = useState({
    painArea: '',
    duration: '',
    activity: ''
  });

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleRecommendationChange = (e) => {
    const { name, value } = e.target;
    setRecommendationData(prev => ({ ...prev, [name]: value }));
  };

  const handleRecommendationSubmit = (e) => {
    e.preventDefault();
    const { painArea, duration, activity } = recommendationData;
    
    const message = `Hello RamaCare, I'm looking for a treatment recommendation.
- Pain Area: ${painArea || 'Not specified'}
- Duration: ${duration || 'Not specified'}
- Activity: ${activity || 'Not specified'}
Which treatment (Ultrasound or Laser) would be best for me?`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/appointment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          phone: formData.phoneNumber,
          email: formData.email,
          preferredTime: formData.preferredTime,
          concern: formData.injuryType,
          source: 'Ultrasound vs Laser Therapy Page'
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          fullName: '',
          phoneNumber: '',
          email: '',
          preferredTime: '',
          injuryType: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const faqData = [
    {
      question: "Which is better: ultrasound or laser therapy?",
      answer: "Neither is universally 'better' — it depends on your injury. Ultrasound penetrates deeper (up to 5cm) and is ideal for muscle and joint pain. Laser therapy works on superficial layers and is better for inflammation and nerve pain. At RamaCare, we assess your condition and recommend the most effective option."
    },
    {
      question: "Can I use both ultrasound and laser therapy together?",
      answer: "Yes! In fact, combining both modalities often yields superior results. We use laser therapy to reduce surface inflammation and ultrasound to heal deep tissue injuries. This hybrid approach is commonly recommended by our physiotherapists for comprehensive recovery."
    },
    {
      question: "How many sessions will I need?",
      answer: "Treatment duration varies based on injury severity and chronicity. Acute injuries may respond in 3-5 sessions, while chronic conditions might require 8-12 sessions. During your initial assessment at RamaCare, we'll provide a personalized treatment plan with expected timelines."
    },
    {
      question: "Is ultrasound therapy painful?",
      answer: "No, ultrasound therapy is generally comfortable. Most patients describe it as a gentle warming sensation. The treatment is non-invasive and should not cause pain. If you experience any discomfort, inform your therapist immediately so they can adjust the settings."
    },
    {
      question: "What conditions can laser therapy treat?",
      answer: "Class IV Laser therapy is effective for treating tendinitis, ligament sprains, plantar fasciitis, carpal tunnel syndrome, tennis elbow, and superficial wounds. It's particularly effective for reducing inflammation and accelerating cellular repair in surface-level injuries."
    },
    {
      question: "How long does each treatment session take?",
      answer: "Laser therapy sessions typically last 2-5 minutes per treatment area, while ultrasound therapy takes 5-10 minutes. If you're receiving a hybrid treatment combining both modalities, expect a session of 15-20 minutes plus initial assessment time."
    },
    {
      question: "Are there any side effects?",
      answer: "Both ultrasound and laser therapies are considered very safe with minimal side effects. Some patients may experience mild redness or temporary increased sensitivity in the treated area. These effects typically resolve within a few hours. Our trained physiotherapists monitor your response throughout treatment."
    },
    {
      question: "Can I continue exercising during treatment?",
      answer: "This depends on your specific injury. For Dubai Run participants and athletes, we often recommend modified activity rather than complete rest. Your physiotherapist will provide specific guidelines based on your condition and recovery progress."
    }
  ];

  const whatsappNumber = "971566597878";
  const whatsappMessage = encodeURIComponent("Hello RamaCare, I want to know the difference between Ultrasound and Laser Therapy.");

  return (
    <Layout>
      <Head>
        <title key="title">Choosing Between Ultrasound and Laser Therapy | RamaCare</title>
        <meta name="description" content="Comparing Ultrasound and Laser therapy for pain? Learn which deep-tissue healing method is best for your injury at RamaCare Polyclinic, Jumeirah 1." key="description" />
        
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700;800&display=swap" rel="stylesheet" />
      </Head>

      <main className="min-h-screen bg-white" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
        
        {/* Top Banner Section */}
        <div className="bg-[#1F5E4B] text-white py-4 px-4">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold">Dubai Run Injury? Fix It Before It Gets Worse</h3>
              <p className="text-sm text-white/80">Advanced Ultrasound & Laser Therapy in Jumeirah 1</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs bg-white/20 px-3 py-1.5 rounded-full font-medium whitespace-nowrap">
                Same-Day Appointments Available
              </span>
              <button 
                onClick={() => scrollToSection('booking-section')}
                className="bg-white text-[#1F5E4B] px-6 py-2.5 rounded-lg font-medium hover:bg-white/90 transition-colors flex items-center gap-2 cursor-pointer">
                Check Which Treatment You Need
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-white py-12 md:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              
              {/* Left Column - Text Content */}
              <div className="space-y-6 order-1 md:order-1">
                {/* Main Heading */}
                <h1 className="text-3xl md:text-5xl font-semibold leading-tight mb-4 text-[#1A1A1A]">
                  Ultrasound vs. Laser Therapy Dubai | Deep Tissue Healing at RamaCare
                </h1>

                {/* Intro Paragraph */}
                <p className="text-lg text-[#5F5F5F] leading-relaxed">
                  Comparing Ultrasound and Laser therapy for pain? Learn which deep-tissue healing method is best for your injury at RamaCare Polyclinic, Jumeirah 1.
                </p>

                {/* Subheading */}
                <h2 className="text-2xl md:text-3xl font-semibold text-[#1F5E4B]">
                  Light vs. Sound: Which Heals Faster?
                </h2>

                {/* Description Paragraphs */}
                <p className="text-base text-[#5F5F5F] leading-relaxed">
                  In the world of non-invasive rehabilitation, two technologies lead the way: Cold Laser (Level IV Laser) and Therapeutic Ultrasound. While both aim to reduce pain and speed up recovery, they use entirely different energy sources to interact with your cells.
                </p>

                <p className="text-base text-[#5F5F5F] leading-relaxed">
                  At RamaCare Polyclinic, we help patients in Dubai choose the right modality based on the depth and type of their injury.
                </p>

                {/* Info Box */}
                <div className="bg-[#F5F1EA] p-6 rounded-xl">
                  <h4 className="font-semibold text-[#1B5E3F] mb-3">The Core Difference:</h4>
                  <ul className="space-y-2">
                    <li className="text-sm text-[#5F5F5F]">
                      <span className="font-semibold text-[#1A1A1A]">Laser Therapy</span> uses <span className="font-semibold text-[#1A1A1A]">Photons (Light)</span> to trigger a chemical reaction in the cells (Biostimulation).
                    </li>
                    <li className="text-sm text-[#5F5F5F]">
                      <span className="font-semibold text-[#1A1A1A]">Ultrasound Therapy</span> uses <span className="font-semibold text-[#1A1A1A]">Acoustic Waves (Sound)</span> to create a thermal and mechanical reaction in the tissue.
                    </li>
                  </ul>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button 
                    onClick={() => scrollToSection('booking-section')}
                    className="bg-[#1F5E4B] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#1F5E4B]/90 transition-all shadow-lg cursor-pointer"
                  >
                    Book Injury Assessment
                  </button>
                  <a href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} target="_blank" rel="nofollow noopener noreferrer" className="bg-[#F5F1EA] text-[#1F5E4B] px-8 py-4 rounded-lg font-medium hover:bg-[#E9E2D6] transition-all flex items-center justify-center gap-2">
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp Instantly
                  </a>
                </div>
              </div>
              
              {/* Right Column - Comparison Cards */}
              <div className="relative order-2 md:order-2">
                <div className="grid grid-cols-2 gap-4">
                  
                  {/* Laser Therapy Card */}
                  <div className="bg-gradient-to-br from-[#1F5E4B]/10 to-[#1F5E4B]/5 p-6 rounded-2xl text-center">
                    <div className="mb-4">
                      <div className="w-16 h-16 mx-auto bg-[#1F5E4B] rounded-full flex items-center justify-center mb-4">
                        <div className="w-8 h-8 bg-white/20 rounded-full"></div>
                      </div>
                      <img 
                        src="/images/Laser1.jpg" 
                        alt="Laser Therapy Device" 
                        className="w-full h-40 object-cover rounded-lg mb-3"
                      />
                    </div>
                    <h4 className="font-semibold text-[#1F5E4B] mb-2">Laser Therapy</h4>
                    <p className="text-sm text-[#5F5F5F]">Light beams penetrating surface (up to 2cm)</p>
                  </div>

                  {/* Ultrasound Therapy Card */}
                  <div className="bg-gradient-to-br from-[#1F5E4B]/10 to-[#1F5E4B]/5 p-6 rounded-2xl text-center">
                    <div className="mb-4">
                      <div className="w-16 h-16 mx-auto bg-[#1F5E4B] rounded-full flex items-center justify-center mb-4">
                        <div className="w-8 h-8 bg-white/20 rounded-full"></div>
                      </div>
                      <img 
                        src="/images/Ultra.jpg" 
                        alt="Ultrasound Therapy Machine" 
                        className="w-full h-40 object-cover rounded-lg mb-3"
                      />
                    </div>
                    <h4 className="font-semibold text-[#1F5E4B] mb-2">Ultrasound Therapy</h4>
                    <p className="text-sm text-[#5F5F5F]">Deep wave penetration (up to 5cm)</p>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Technical Comparison Section */}
        <section className="bg-[#F5F1EA] py-16 md:py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
                Technical Comparison: Laser vs. Ultrasound
              </h2>
              <p className="text-[#5F5F5F] text-lg">
                Understanding the key differences to make an informed decision
              </p>
            </div>

            <div className="overflow-x-auto rounded-[20px] shadow-xl">
              <table className="w-full text-left border-collapse bg-white min-w-[800px]">
                <thead>
                  <tr className="bg-[#1F5E4B] text-white">
                    <th className="py-6 px-8 font-semibold text-lg">Feature</th>
                    <th className="py-6 px-8 font-semibold text-lg text-center">Ultrasound Therapy</th>
                    <th className="py-6 px-8 font-semibold text-lg text-center">Laser Therapy (Class IV)</th>
                  </tr>
                </thead>
                <tbody className="text-[#1A1A1A]">
                  <tr className="border-b border-[#F1F5F2]">
                    <td className="py-5 px-8 font-bold">Energy Source</td>
                    <td className="py-5 px-8 text-center text-[#5F5F5F]">High-frequency sound waves.</td>
                    <td className="py-5 px-8 text-center text-[#5F5F5F]">Focused light beams (Photons).</td>
                  </tr>
                  <tr className="bg-[#F1F5F2]/30 border-b border-[#F1F5F2]">
                    <td className="py-5 px-8 font-bold">Depth of Penetration</td>
                    <td className="py-5 px-8 text-center font-medium">
                      <span className="text-[#1F5E4B] mr-2">✓</span>
                      Up to 5cm (Deep Muscle/Bone).
                    </td>
                    <td className="py-5 px-8 text-center text-[#5F5F5F]">Up to 2cm (Superficial/Skin).</td>
                  </tr>
                  <tr className="border-b border-[#F1F5F2]">
                    <td className="py-5 px-8 font-bold">Primary Effect</td>
                    <td className="py-5 px-8 text-center text-[#5F5F5F]">Deep heating + Micro-vibration.</td>
                    <td className="py-5 px-8 text-center text-[#5F5F5F]">Cellular energy boost (ATP).</td>
                  </tr>
                  <tr className="bg-[#F1F5F2]/30 border-b border-[#F1F5F2]">
                    <td className="py-5 px-8 font-bold">Best For</td>
                    <td className="py-5 px-8 text-center text-[#5F5F5F]">Deep injuries (Hips, Lower Back).</td>
                    <td className="py-5 px-8 text-center text-[#5F5F5F]">Surface injuries (Skin, Ligaments).</td>
                  </tr>
                  <tr className="border-b border-[#F1F5F2]">
                    <td className="py-5 px-8 font-bold">Sensation</td>
                    <td className="py-5 px-8 text-center text-[#5F5F5F]">Soothing warmth.</td>
                    <td className="py-5 px-8 text-center text-[#5F5F5F]">Usually no sensation (Cold Laser).</td>
                  </tr>
                  <tr>
                    <td className="py-5 px-8 font-bold">Treatment Time</td>
                    <td className="py-5 px-8 text-center text-[#5F5F5F]">5 – 10 minutes.</td>
                    <td className="py-5 px-8 text-center text-[#5F5F5F]">2 – 5 minutes.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* When to Choose Section */}
        <section className="bg-white py-16 md:py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              
              {/* Ultrasound Card */}
              <div className="bg-[#F1F5F2] rounded-[32px] p-8 md:p-12 flex flex-col">
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-16 h-16 bg-[#1F5E4B] rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#1F5E4B]">When to Choose Ultrasound Therapy</h3>
                </div>

                <div className="space-y-4 flex-grow mb-10">
                  <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-semibold text-[#1A1A1A] mb-1">Deep Muscle Injuries</h4>
                    <p className="text-sm text-[#5F5F5F]">Hamstring strains, rotator cuff damage, lower back pain</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-semibold text-[#1A1A1A] mb-1">Joint Problems</h4>
                    <p className="text-sm text-[#5F5F5F]">Hip flexor pain, frozen shoulder, knee tendinitis</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-semibold text-[#1A1A1A] mb-1">Chronic Conditions</h4>
                    <p className="text-sm text-[#5F5F5F]">Arthritis, bursitis, scar tissue breakdown</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-semibold text-[#1A1A1A] mb-1">Post-Surgery Recovery</h4>
                    <p className="text-sm text-[#5F5F5F]">Healing deep tissue after orthopedic procedures</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-semibold text-[#1A1A1A] mb-1">Athletic Injuries</h4>
                    <p className="text-sm text-[#5F5F5F]">Dubai Run injuries, sports trauma requiring deep penetration</p>
                  </div>
                </div>

                <div className="bg-[#D9E2DC] p-4 rounded-lg mt-6 border border-[#1F5E4B]/10">
                  <p className="text-sm text-[#1A1A1A] font-semibold flex items-center gap-2">
                    <span>✓</span> <span className="font-bold text-[#1A1A1A]">Best for:</span> Deep tissue healing, chronic pain, post-run recovery
                  </p>
                </div>
              </div>

              {/* Laser Card */}
              <div className="bg-[#F5F1EA] rounded-[32px] p-8 md:p-12 flex flex-col">
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-16 h-16 bg-[#1F5E4B] rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#1F5E4B]">When to Choose Laser Therapy</h3>
                </div>

                <div className="space-y-4 flex-grow mb-10">
                  <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-semibold text-[#1A1A1A] mb-1">Superficial Injuries</h4>
                    <p className="text-sm text-[#5F5F5F]">Skin wounds, superficial burns, minor abrasions</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-semibold text-[#1A1A1A] mb-1">Nerve Pain</h4>
                    <p className="text-sm text-[#5F5F5F]">Neuropathy, carpal tunnel syndrome, sciatica (surface level)</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-semibold text-[#1A1A1A] mb-1">Ligament Strains</h4>
                    <p className="text-sm text-[#5F5F5F]">Ankle sprains, wrist ligament damage</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-semibold text-[#1A1A1A] mb-1">Inflammation Reduction</h4>
                    <p className="text-sm text-[#5F5F5F]">Tendinitis, plantar fasciitis, tennis elbow</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-semibold text-[#1A1A1A] mb-1">Quick Relief</h4>
                    <p className="text-sm text-[#5F5F5F]">Fast treatment sessions for acute pain and inflammation</p>
                  </div>
                </div>

                <div className="bg-[#E9E2D6] p-4 rounded-lg mt-6 border border-[#1A1A1A]/5">
                  <p className="text-sm text-[#1A1A1A] font-semibold flex items-center gap-2">
                    <span>✓</span> <span className="font-bold text-[#1A1A1A]">Best for:</span> Surface injuries, quick relief, nerve pain
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Recommendation Form Section */}
        <section id="booking-section" className="bg-[#F5F1EA] py-12 md:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
                Confused Which One You Need?
              </h2>
              <p className="text-[#5F5F5F] text-lg">
                Get a quick expert recommendation based on your injury
              </p>
            </div>

            <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-xl">
              <form className="space-y-6" onSubmit={handleRecommendationSubmit}>
                <div>
                  <label className="block text-sm font-bold text-[#1A1A1A] mb-2">Where is your pain located?</label>
                  <select 
                    name="painArea"
                    value={recommendationData.painArea}
                    onChange={handleRecommendationChange}
                    className="w-full bg-[#F5F1EA]/50 border-none rounded-lg p-4 text-[#5F5F5F] focus:ring-2 focus:ring-[#1F5E4B] transition-all">
                    <option value="">Select pain area</option>
                    <option value="Lower Back">Lower Back</option>
                    <option value="Shoulder / Rotator Cuff">Shoulder / Rotator Cuff</option>
                    <option value="Knee / Ankle">Knee / Ankle</option>
                    <option value="Muscle Strain (Hamstring/Calf)">Muscle Strain (Hamstring/Calf)</option>
                    <option value="Nerve Pain (Sciatica/Carpal Tunnel)">Nerve Pain (Sciatica/Carpal Tunnel)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#1A1A1A] mb-2">How long have you had this pain?</label>
                  <select 
                    name="duration"
                    value={recommendationData.duration}
                    onChange={handleRecommendationChange}
                    className="w-full bg-[#F5F1EA]/50 border-none rounded-lg p-4 text-[#5F5F5F] focus:ring-2 focus:ring-[#1F5E4B] transition-all"
                  >
                    <option value="">Select duration</option>
                    <option value="Less than 1 week (Acute)">Less than 1 week (Acute)</option>
                    <option value="1 - 4 weeks (Sub-acute)">1 - 4 weeks (Sub-acute)</option>
                    <option value="More than 1 month (Chronic)">More than 1 month (Chronic)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#1A1A1A] mb-2">What's your primary activity?</label>
                  <select 
                    name="activity"
                    value={recommendationData.activity}
                    onChange={handleRecommendationChange}
                    className="w-full bg-[#F5F1EA]/50 border-none rounded-lg p-4 text-[#5F5F5F] focus:ring-2 focus:ring-[#1F5E4B] transition-all"
                  >
                    <option value="">Select activity</option>
                    <option value="Office Worker (Sedentary)">Office Worker (Sedentary)</option>
                    <option value="Active / Sports (Dubai Run, etc.)">Active / Sports (Dubai Run, etc.)</option>
                    <option value="Post-Surgery Recovery">Post-Surgery Recovery</option>
                  </select>
                </div>
                <button type="submit" className="w-full bg-[#1F5E4B] text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-[#1F5E4B]/90 transition-all shadow-lg">
                  Get My Treatment Plan
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7-7 7" />
                  </svg>
                </button>
                <p className="text-[10px] text-[#5F5F5F] text-center mt-4">
                  Your information is secure and will only be used to provide treatment recommendations
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* Hybrid Approach Section */}
        <section className="bg-white py-12 md:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-[#F1F5F2] text-[#1F5E4B] px-4 py-2 rounded-full text-sm font-medium mb-6">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Doctor Recommended Protocol
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
                The "Hybrid" Approach at RamaCare
              </h2>
              <p className="text-[#5F5F5F] text-lg max-w-3xl mx-auto">
                Why choose one when you can benefit from both? Our expert physiotherapists often combine both modalities for comprehensive healing.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16 relative">
              {/* Step 1 */}
              <div className="bg-[#F1F5F2] p-8 rounded-2xl relative">
                <div className="w-10 h-10 bg-[#1F5E4B] text-white rounded-full flex items-center justify-center font-bold absolute -top-4 -left-4 shadow-lg">1</div>
                <h3 className="text-xl font-bold text-[#1F5E4B] mb-4">Laser for Surface</h3>
                <p className="text-sm text-[#1A1A1A] leading-relaxed mb-6">
                  Start with Class IV Laser to reduce inflammation and stimulate cellular repair at the surface level.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-sm text-[#5F5F5F]">
                    <div className="w-1.5 h-1.5 bg-[#1F5E4B] rounded-full"></div>
                    Quick pain relief
                  </li>
                  <li className="flex items-center gap-2 text-sm text-[#5F5F5F]">
                    <div className="w-1.5 h-1.5 bg-[#1F5E4B] rounded-full"></div>
                    Reduces inflammation
                  </li>
                </ul>
                <div className="hidden md:block absolute top-1/2 -right-4 -translate-y-1/2 z-10">
                  <svg className="w-8 h-8 text-[#1F5E4B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-[#F1F5F2] p-8 rounded-2xl relative">
                <div className="w-10 h-10 bg-[#1F5E4B] text-white rounded-full flex items-center justify-center font-bold absolute -top-4 -left-4 shadow-lg">2</div>
                <h3 className="text-xl font-bold text-[#1F5E4B] mb-4">Ultrasound for Depth</h3>
                <p className="text-sm text-[#1A1A1A] leading-relaxed mb-6">
                  Follow with Therapeutic Ultrasound to penetrate deep into muscles, tendons, and joints.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-sm text-[#5F5F5F]">
                    <div className="w-1.5 h-1.5 bg-[#1F5E4B] rounded-full"></div>
                    Deep tissue healing
                  </li>
                  <li className="flex items-center gap-2 text-sm text-[#5F5F5F]">
                    <div className="w-1.5 h-1.5 bg-[#1F5E4B] rounded-full"></div>
                    Enhanced circulation
                  </li>
                </ul>
                <div className="hidden md:block absolute top-1/2 -right-4 -translate-y-1/2 z-10">
                  <svg className="w-8 h-8 text-[#1F5E4B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-[#D9E2DC] p-8 rounded-2xl relative border-2 border-[#1F5E4B]/10">
                <div className="w-10 h-10 bg-[#1F5E4B] text-white rounded-full flex items-center justify-center font-bold absolute -top-4 -left-4 shadow-lg">3</div>
                <h3 className="text-xl font-bold text-[#1F5E4B] mb-4">Combined Healing</h3>
                <p className="text-sm text-[#1A1A1A] leading-relaxed mb-6">
                  Achieve optimal recovery through comprehensive treatment addressing multiple tissue layers.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-sm text-[#5F5F5F]">
                    <div className="w-1.5 h-1.5 bg-[#1F5E4B] rounded-full"></div>
                    Faster recovery
                  </li>
                  <li className="flex items-center gap-2 text-sm text-[#5F5F5F]">
                    <div className="w-1.5 h-1.5 bg-[#1F5E4B] rounded-full"></div>
                    Long-term results
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-[#F5F1EA] p-8 md:p-10 rounded-[32px] text-center max-w-5xl mx-auto">
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">Why the Hybrid Approach Works Best</h3>
              <p className="text-[#5F5F5F] text-base mb-8 max-w-4xl mx-auto">
                Most injuries affect multiple tissue layers. By combining laser therapy for surface-level inflammation and ultrasound for deep tissue healing, we address the complete injury profile for superior outcomes.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button 
                  onClick={() => scrollToSection('booking-section')}
                  className="bg-[#1F5E4B] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#1F5E4B]/90 transition-all shadow-lg cursor-pointer"
                >
                  Book Hybrid Treatment
                </button>
                <a 
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello RamaCare, I'd like to speak to a specialist about ultrasound vs laser therapy.")}`}
                  target="_blank" 
                  rel="nofollow noopener noreferrer" 
                  className="bg-white text-[#1F5E4B] border border-[#1F5E4B]/10 px-8 py-4 rounded-xl font-bold hover:bg-white/90 transition-all shadow-md inline-flex items-center justify-center"
                >
                  Speak to a Specialist
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-[#F5F1EA] py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-[#5F5F5F]">
                Everything you need to know about ultrasound and laser therapy
              </p>
            </div>

            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? -1 : index)}
                    className="w-full px-8 py-6 flex items-center justify-between text-left"
                  >
                    <span className="font-semibold text-[#1A1A1A] text-lg pr-4">{faq.question}</span>
                    {openFaqIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-[#1F5E4B] shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[#1F5E4B] shrink-0" />
                    )}
                  </button>
                  {openFaqIndex === index && (
                    <div className="px-8 pb-6 border-t border-[#F1F5F2]">
                      <p className="pt-6 text-[#5F5F5F] leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="bg-[#F5F1EA] py-12 md:py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 text-center relative overflow-hidden">
              {/* Background Glow Effect */}
              <div className="absolute inset-0 bg-[#1F5E4B] rounded-full blur-[100px] opacity-10 scale-125 -translate-y-1/2"></div>
              
              <div className="relative z-10">
                <div className="inline-block mb-6 p-4 bg-[#F1F5F2] rounded-full text-[#1F5E4B]">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
                  Still in Pain After Dubai Run?
                </h2>
                
                <p className="text-lg text-[#5F5F5F] mb-8 max-w-2xl mx-auto">
                  Ignoring it now can turn into a long-term injury. Don't wait until it gets worse — get expert help today.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a href="tel:+971566597878" className="inline-flex items-center justify-center gap-2 bg-[#1F5E4B] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#1F5E4B]/90 transition-all shadow-lg cursor-pointer">
                    <Phone className="w-5 h-5" />
                    Talk to a Physiotherapist Now
                  </a>
                  <button 
                    onClick={() => scrollToSection('booking-section')}
                    className="inline-flex items-center justify-center gap-2 bg-white text-[#1F5E4B] border border-[#1F5E4B]/10 px-8 py-4 rounded-xl font-bold hover:bg-white/90 transition-all shadow-md cursor-pointer"
                  >
                    Book Assessment
                  </button>
                </div>

                <p className="text-sm text-[#5F5F5F]/80 mt-8 flex items-center justify-center gap-4 flex-wrap">
                  <span>Same-day appointments available</span>
                  <span className="w-1.5 h-1.5 bg-[#5F5F5F]/20 rounded-full"></span>
                  <span>DHA Licensed</span>
                  <span className="w-1.5 h-1.5 bg-[#5F5F5F]/20 rounded-full"></span>
                  <span>Expert physiotherapists</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Experts Section */}
        <section className="bg-[#1F5E4B] py-16 md:py-24 px-4 relative overflow-hidden">
          {/* Subtle Background Pattern/Glow */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[length:30px_30px]"></div>
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              
              {/* Left Column - Info */}
              <div className="text-white space-y-8">
                <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                  Consult the Technology Experts in Jumeirah 1
                </h2>
                <p className="text-white/90 text-lg leading-relaxed max-w-xl">
                  Don't guess which high-tech treatment you need. Visit RamaCare Polyclinic for a diagnostic assessment, and let us use the right "Wave" to fix your pain.
                </p>

                <div className="space-y-4">
                  <div className="bg-white/10 p-4 rounded-xl flex items-start gap-4 backdrop-blur-sm border border-white/10">
                    <MapPin className="w-6 h-6 text-white shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold">Location</h4>
                      <p className="text-sm text-white/80">Jumeirah 1, Dubai</p>
                    </div>
                  </div>
                  <div className="bg-white/10 p-4 rounded-xl flex items-start gap-4 backdrop-blur-sm border border-white/10">
                    <Award className="w-6 h-6 text-white shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold">Clinic</h4>
                      <p className="text-sm text-white/80">RamaCare Polyclinic (DHA Licensed)</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
                  <img 
                    src="/images/Laser1.jpg" 
                    alt="Clinic Interior" 
                    className="w-full h-64 object-cover"/>
                </div>
              </div>

              {/* Right Column - Form */}
              <div className="bg-white p-8 md:p-10 rounded-[32px] shadow-2xl">
                <h3 className="text-2xl font-bold text-[#1A1A1A] mb-2">Book Your Assessment</h3>
                <p className="text-[#5F5F5F] text-sm mb-8">Get expert diagnosis and personalized treatment plan</p>

                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#1A1A1A]">Full Name</label>
                    <input 
                      type="text" 
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Enter your full name" 
                      required
                      className="w-full bg-[#F5F1EA] border-none rounded-xl p-4 text-[#1A1A1A] focus:ring-2 focus:ring-[#1F5E4B] transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#1A1A1A]">Phone Number</label>
                    <input 
                      type="tel" 
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      placeholder="+971 XX XXX XXXX" 
                      required
                      className="w-full bg-[#F5F1EA] border-none rounded-xl p-4 text-[#1A1A1A] focus:ring-2 focus:ring-[#1F5E4B] transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#1A1A1A]">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="yourname@example.com" 
                      required
                      className="w-full bg-[#F5F1EA] border-none rounded-xl p-4 text-[#1A1A1A] focus:ring-2 focus:ring-[#1F5E4B] transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#1A1A1A]">Preferred Time</label>
                    <select 
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-[#F5F1EA] border-none rounded-xl p-4 text-[#5F5F5F] focus:ring-2 focus:ring-[#1F5E4B] transition-all"
                    >
                      <option value="">Select preferred time</option>
                      <option value="morning">Morning (9 AM - 12 PM)</option>
                      <option value="afternoon">Afternoon (12 PM - 4 PM)</option>
                      <option value="evening">Evening (4 PM - 8 PM)</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#1A1A1A]">Type of Injury</label>
                    <input 
                      type="text" 
                      name="injuryType"
                      value={formData.injuryType}
                      onChange={handleInputChange}
                      placeholder="e.g., Lower back pain, knee injury" 
                      required
                      className="w-full bg-[#F5F1EA] border-none rounded-xl p-4 text-[#1A1A1A] focus:ring-2 focus:ring-[#1F5E4B] transition-all"
                    />
                  </div>

                  {submitStatus === 'success' && (
                    <div className="p-4 bg-green-50 text-green-700 rounded-xl text-sm font-medium text-center">
                      Appointment request sent successfully! We'll contact you soon.
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="p-4 bg-red-50 text-red-700 rounded-xl text-sm font-medium text-center">
                      Something went wrong. Please try again or WhatsApp us.
                    </div>
                  )}

                  <div className="space-y-4 pt-4">
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-[#1F5E4B] text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-[#1F5E4B]/90 transition-all shadow-lg disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      ) : (
                        <>
                          Confirm Appointment
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7-7 7" />
                          </svg>
                        </>
                      )}
                    </button>
                    <a 
                      href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} 
                      target="_blank" 
                      rel="nofollow noopener noreferrer" 
                      className="w-full bg-[#F5F1EA] text-[#1F5E4B] font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-[#E9E2D6] transition-all"
                    >
                      <MessageCircle className="w-5 h-5" />
                      WhatsApp Instantly
                    </a>
                  </div>

                  <div className="pt-6 border-t border-[#F1F5F2]">
                    <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-[10px] text-[#5F5F5F] font-medium">
                      <span className="flex items-center gap-1"><Award className="w-3 h-3" /> DHA Licensed</span>
                      <span className="flex items-center gap-1">• Expert Physios</span>
                      <span className="flex items-center gap-1">• Same-Day Available</span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        <ContentReviewBadge doctorName="Jeena Mathew" pageSlug="ultrasound-vs-laser-therapy-dubai" />

      </main>
      
    </Layout>
  );
};

export default UltrasoundVsLaserPage;
