import Head from 'next/head';
import Layout from '../../../components/Layout';
import ContentReviewBadge from '../../../components/ContentReviewBadge';
import { useState, useEffect } from 'react';
import { CheckCircle2, ArrowRight, Calendar, MessageCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { useToast } from '../../../components/Toast';

const HowEximiaWorksPage = () => {
  const { showToast, ToastComponent } = useToast();
  const [activeFaq, setActiveFaq] = useState(null);
  const [showFixedBtn, setShowFixedBtn] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    preferredTime: 'Morning (9 AM - 12 PM)',
    treatmentArea: 'Abdomen'
  });

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector('footer');
      const formSection = document.getElementById('book-now');
      
      if (!footer || !formSection) return;

      const footerTop = footer.getBoundingClientRect().top;
      const formTop = formSection.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      // Show after 600px scroll, but hide when form is in view or footer is reached
      if (window.scrollY > 600 && formTop > windowHeight && footerTop > windowHeight) {
        setShowFixedBtn(true);
      } else {
        setShowFixedBtn(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBookAppointment = () => {
    const appointmentSection = document.getElementById('book-now');
    if (appointmentSection) {
      appointmentSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToForm = () => {
    const formSection = document.getElementById('book-now');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleFormSubmit = async (e) => {
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
          concern: formData.treatmentArea,
          source: 'how-eximia-body-contouring-works-dubai'
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        showToast('Appointment request submitted successfully!', 'success');
        setFormData({
          name: '',
          phone: '',
          email: '',
          preferredTime: 'Morning (9 AM - 12 PM)',
          treatmentArea: 'Abdomen'
        });
      } else {
        showToast('Failed to submit appointment. Please try again or contact us directly.', 'error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      showToast('An error occurred. Please try again later.', 'error');
    }
  };

  const faqs = [
    {
      question: 'How does Eximia HR77 Platinum actually remove fat?',
      answer: 'It uses a multi-phase process that liquifies fat and removes it through the body\'s natural lymphatic system.'
    },
    {
      question: 'Is the fat removal permanent?',
      answer: 'The treated fat cells are metabolized, but maintaining results depends on lifestyle.'
    },
    {
      question: 'Is Eximia safe for all body types?',
      answer: 'It is generally suitable for most individuals, but consultation is required.'
    },
    {
      question: 'How is this different from fat freezing?',
      answer: 'Eximia uses heat and metabolic stimulation, while fat freezing relies on cold temperatures.'
    },
    {
      question: 'Is there any downtime?',
      answer: 'No, patients can return to daily activities immediately.'
    }
  ];

  const phases = [
    { id: 1, title: 'Preparation', progress: 30 },
    { id: 2, title: 'Emulsification', progress: 50 },
    { id: 3, title: 'Metabolic Flush', progress: 70 },
    { id: 4, title: 'Structural Lift', progress: 40 },
  ];

  return (
    <Layout>
      {ToastComponent}
      <Head>
        <title key="title">How Eximia Body Contouring Works | Science of Sculpting Dubai</title>
        <meta name="description" content="Discover the science behind Eximia HR77 Platinum. Learn how its sequential 4-phase cycle prepare skin, emulsify fat, and lift tissue for natural body contouring." key="description" />
        <meta name="keywords" content="how Eximia works, Eximia HR77 Platinum technology, Eximia body contouring Dubai, non-surgical fat reduction, sequential 4-phase cycle" />
        
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700;800&display=swap" rel="stylesheet" />
      </Head>

      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20" style={{ backgroundColor: '#FFFFFF' }}>
        {/* <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"> */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl tracking-tight" style={{ fontFamily: "'Nunito Sans', sans-serif", fontWeight: 600,fontSize: '60px' }}>
                The Science of Sculpting: How Eximia HR77 Platinum Works
              </h1>
              <p className="text-lg text-[#5F5F5F] leading-relaxed max-w-xl pt-4">
                Eximia HR77 Platinum is not just a single device; it is a multi-technology platform that mimics the body's natural metabolic processes. While traditional treatments like fat-freezing only address one issue, Eximia's 7-day body formula uses a sequential 4-phase cycle to prepare the skin, emulsify fat, drain toxins, and lift tissue simultaneously.
              </p>
              
              <ul className="space-y-4 pt-8">
                {[
                  'Multi-technology fat reduction system',
                  'Non-surgical metabolic fat sculpting',
                  'Skin tightening + cellulite improvement',
                  'Advanced Eximia HR77 Platinum technology'
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#1F5E4B] shrink-0" />
                    <span className="text-[#1A1A1A] text-lg font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <button 
                  onClick={scrollToForm}
                  className="px-8 py-4 bg-[#1F5E4B] text-white rounded-lg font-semibold hover:opacity-90 transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  <Calendar className="w-5 h-5" />
                  Book Free Consultation
                </button>
                <button 
                  onClick={() => window.open('https://wa.me/971566597878', '_blank')}
                  className="px-8 py-4 bg-[#F5F1EA] text-[#1F5E4B] border-2 border-[#1F5E4B]/20 rounded-lg hover:border-[#1F5E4B] transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Consultation
                </button>
              </div>
            </div>

            {/* Right Card */}
            <div className="relative">
              <div className="bg-[#E9E2D6]/40 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-white/20">
                <h2 className="text-center text-[#1F5E4B] font-bold text-xl mb-12 tracking-wide">
                  4-Phase Sequential Cycle
                </h2>
                
                <div className="space-y-10">
                  {phases.map((phase) => (
                    <div key={phase.id} className="flex items-center gap-6 group">
                      <div className="w-12 h-12 rounded-full bg-[#1F5E4B] flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform">
                        {phase.id}
                      </div>
                      
                      <div className="flex-1 space-y-2">
                        <div className="h-2.5 w-full bg-[#1F5E4B]/10 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-[#1F5E4B]/30 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${phase.progress}%` }}
                          />
                        </div>
                      </div>
                      
                      <div className="w-32 text-right">
                        <span className="text-[#1A1A1A] font-medium text-sm md:text-base">
                          {phase.title}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-16 text-center">
                  <a 
                    href="/services/eximia-body-contouring-dubai" 
                    className="inline-flex items-center gap-2 text-[#5F5F5F] hover:text-[#1F5E4B] font-medium transition-colors group"
                  >
                    Sequential Technology Flow
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-[#1F5E4B]/5 rounded-full blur-3xl"></div>
              <div className="absolute -z-10 -top-10 -left-10 w-48 h-48 bg-white/40 rounded-full blur-2xl"></div>
            </div>
          </div>
      </section>

      {/* 4-Phase Detailed Section */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: '#F5F1EA' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-[20px] font-bold text-[#1A1A1A] mb-6" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
              The 4-Phase Sequential Technology
            </h2>
            <p className="text-[18px] text-[#5F5F5F]" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
              The secret to Eximia's #1 ranking in clinical results is the order in which the technologies are applied.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {[
              {
                id: '1',
                title: 'Microdermolift (The Preparation)',
                desc: 'Before fat reduction begins, the skin must be activated. This phase uses gentle exfoliation to remove dead cells and increase oxygenation. By improving skin permeability, it ensures the following laser phases can penetrate deeper into the adipose tissue.'
              },
              {
                id: '2',
                title: 'Laserporation (The Non-Surgical Lipo)',
                desc: 'Using a patented low-level laser and electroporation, this phase creates microscopic "pores" in the fat cell membranes. This process, known as emulsification, allows the fat inside to turn into a liquid state without damaging any surrounding nerves or blood vessels.'
              },
              {
                id: '3',
                title: 'Endoradiomag (The Metabolic Flush)',
                desc: `This is Eximia's "Hero" technology. It combines a 4-motion vacuum massage with Magnetic Rollers and Bipolar Radiofrequency.\n\nThe Magnetism: Energizes iron atoms in the blood to carry more oxygen to the area.\nThe Vacuum: Moves the "liquid fat" released in Phase 2 into the lymphatic system to be flushed out naturally.`
              },
              {
                id: '4',
                title: 'Radioporation (The Structural Lift)',
                desc: 'The final stage focuses on the dermis. High-frequency waves stimulate fibroblasts to produce new collagen and elastin. This ensures that as the fat disappears, the skin remains tight, preventing the "deflated" look often seen after rapid weight loss.'
              }
            ].map((phase, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col">
                <div className="flex items-center gap-5 mb-8">
                  <div className="w-12 h-12 rounded-full bg-[#1F5E4B] flex items-center justify-center text-white font-bold text-xl shrink-0 shadow-md">
                    {phase.id}
                  </div>
                  <h3 className="text-[18px] font-bold text-[#1A1A1A] pt-2" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
                    {phase.title}
                  </h3>
                </div>
                <p className="text-[16px] text-[#5F5F5F] leading-relaxed whitespace-pre-line" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
                  {phase.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Technical Comparison Section */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 xl:px-12">
          <h2 className="text-[20px] font-bold text-[#1A1A1A] text-center mb-12" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
            Technical Comparison: Why It's Unique
          </h2>

          <div className="max-w-[960px] mx-auto overflow-hidden rounded-xl shadow-lg border border-gray-100 bg-white">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-full divide-y divide-gray-100">
                <thead>
                  <tr className="bg-[#1F5E4B] text-white">
                    <th className="px-6 py-4 text-[16px] font-bold">Feature</th>
                    <th className="px-6 py-4 text-[16px] font-bold">Eximia HR77</th>
                    <th className="px-6 py-4 text-[16px] font-bold">Standard Ultrasound</th>
                  </tr>
                </thead>
                <tbody className="text-[#5F5F5F] text-[16px] divide-y divide-gray-100">
                  <tr>
                    <td className="px-6 py-4 font-medium text-[#1A1A1A]">Depth of Action</td>
                    <td className="px-6 py-4 text-[#1F5E4B] font-medium">Subcutaneous & Dermal</td>
                    <td className="px-6 py-4">Surface level only</td>
                  </tr>
                  <tr className="bg-[#F5F1EA]/50">
                    <td className="px-6 py-4 font-medium text-[#1A1A1A]">Fat Removal</td>
                    <td className="px-6 py-4 text-[#1F5E4B] font-medium">4-Phase Emulsification</td>
                    <td className="px-6 py-4">Cavitation only</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-[#1A1A1A]">Circulation</td>
                    <td className="px-6 py-4 text-[#1F5E4B] font-medium">Magnetic Stimulation</td>
                    <td className="px-6 py-4">None</td>
                  </tr>
                  <tr className="bg-[#F5F1EA]/50">
                    <td className="px-6 py-4 font-medium text-[#1A1A1A]">Cellulite</td>
                    <td className="px-6 py-4 text-[#1F5E4B] font-medium">Endodermal Massage</td>
                    <td className="px-6 py-4">Mechanical only</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* What Happens to the Fat Section */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: '#F5F1EA' }}>
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 xl:px-12">
          <h2 className="text-[20px] font-bold text-[#1A1A1A] text-center mb-8" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
            What Happens to the Fat?
          </h2>

          <div className="max-w-[900px] mx-auto bg-white rounded-xl p-8 lg:p-12 shadow-lg border border-white/20">
            <p className="text-lg text-[#5F5F5F] leading-relaxed" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
              A common question in our Dubai clinic is: Where does the fat go? Once the Laserporation phase liquifies the fat, it enters the interstitial fluid. The Endoradiomag then directs it into the lymphatic system. From there, your body processes it through the liver and eliminates it as natural waste. This is why we insist on 30 minutes of light activity post-treatment—it helps "burn" that newly available energy.
            </p>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: '#ffffff' }}>
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 xl:px-12">
          <h2 className="text-[20px] font-bold text-[#1A1A1A] text-center mb-12" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
            Frequently Asked Questions
          </h2>

          <div className="max-w-[896px] mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden border border-[#E9E2D6]">
                <button
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left transition-colors hover:bg-gray-50"
                >
                  <span className="text-[16px] font-bold text-[#1A1A1A]">{faq.question}</span>
                  <div className="text-[#1F5E4B]">
                    {activeFaq === index ? (
                      <ChevronUp className="w-6 h-6" />
                    ) : (
                      <ChevronDown className="w-6 h-6" />
                    )}
                  </div>
                </button>
                {activeFaq === index && (
                  <div className="px-6 pb-5 text-[16px] text-[#5F5F5F] leading-relaxed bg-white border-t border-[#E9E2D6]/50">
                    <div className="pt-4">
                      {faq.answer}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience the Future Form Section */}
      <section id="book-now" className="py-16 lg:py-24" style={{ backgroundColor: '#1F5E4B' }}>
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-[960px] mx-auto text-center mb-12">
            <h3 className="text-[18px] font-bold text-white mb-4" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
              Experience the Future of Body Sculpting
            </h3>
            <p className="text-[18px] text-white/90 leading-relaxed max-w-[768px] mx-auto" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
              Understanding the technology is the first step toward your transformation. Visit our main Eximia Body Contouring Dubai page to see the results of this science in action and book your clinical trial.
            </p>
          </div>

          <div className="max-w-[900px] mx-auto bg-white rounded-2xl p-8 lg:p-12 shadow-xl relative">
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-[#1A1A1A]">Name</label>
                  <input 
                    type="text" 
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-[#F5F1EA] rounded-lg border border-transparent focus:border-[#1F5E4B] focus:bg-white focus:outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-[#1A1A1A]">Email</label>
                  <input 
                    type="email" 
                    placeholder="yourname@email.com"
                    value={formData.email || ''}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-[#F5F1EA] rounded-lg border border-transparent focus:border-[#1F5E4B] focus:bg-white focus:outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-[#1A1A1A]">Phone</label>
                  <input 
                    type="tel" 
                    placeholder="+971 XX XXX XXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-[#F5F1EA] rounded-lg border border-transparent focus:border-[#1F5E4B] focus:bg-white focus:outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-[#1A1A1A]">Preferred Time</label>
                  <select 
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-4 py-3 bg-[#F5F1EA] rounded-lg border border-transparent focus:border-[#1F5E4B] focus:bg-white focus:outline-none transition-all appearance-none"
                  >
                    <option>Morning (9 AM - 12 PM)</option>
                    <option>Afternoon (12 PM - 4 PM)</option>
                    <option>Evening (4 PM - 8 PM)</option>
                  </select>
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="block text-sm font-bold text-[#1A1A1A]">Treatment Area</label>
                  <select 
                    value={formData.treatmentArea}
                    onChange={(e) => setFormData({ ...formData, treatmentArea: e.target.value })}
                    className="w-full px-4 py-3 bg-[#F5F1EA] rounded-lg border border-transparent focus:border-[#1F5E4B] focus:bg-white focus:outline-none transition-all appearance-none"
                  >
                    <option>Abdomen</option>
                    <option>Thighs</option>
                    <option>Arms</option>
                    <option>Full Body</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button 
                  type="submit"
                  className="flex-1 px-8 py-4 bg-[#1F5E4B] text-white rounded-lg font-bold text-[16px] hover:opacity-90 transition-all"
                >
                  Confirm Appointment Request
                </button>
                <button 
                  type="button"
                  onClick={() => window.open('https://wa.me/971566597878', '_blank')}
                  className="flex-1 px-8 py-4 border border-[#1F5E4B] text-[#1F5E4B] rounded-lg font-bold text-[16px] hover:bg-[#1F5E4B]/5 transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Book via WhatsApp Instantly
                </button>
              </div>
            </form>

           {/* Sticky Fixed Consultation Button - Only visible between Hero and Form */}
      {showFixedBtn && (
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50">
          <button 
            onClick={handleBookAppointment}
            className="px-10 py-5 bg-[#1F5E4B] text-white rounded-full font-bold shadow-2xl flex items-center gap-3 hover:scale-110 active:scale-95 transition-all animate-in fade-in slide-in-from-bottom-10"
          >
            <Calendar className="w-6 h-6" />
            Book Your Free Consultation
          </button>
        </div>
      )}
          </div>
        </div>
      </section>

      <ContentReviewBadge doctorName="Sonita Sinaga" pageSlug="how-eximia-body-contouring-works-dubai" />
    </Layout>
  );
};

export default HowEximiaWorksPage;
