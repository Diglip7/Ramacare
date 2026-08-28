import Head from 'next/head';
import { useState, useRef, useEffect } from 'react';
import Layout from '../../../components/Layout';
import ContentReviewBadge from '../../../components/ContentReviewBadge';

const EximiaSessionsNeededPage = () => {
  const [appointmentData, setAppointmentData] = useState({
    fullName: '',
    phone: '',
    email: '',
    treatmentArea: '',
    preferredDate: '',
    preferredTime: ''
  });
  
  const [appointmentErrors, setAppointmentErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const formRef = useRef(null);
  const [isButtonFixed, setIsButtonFixed] = useState(true);
  const [activeFaq, setActiveFaq] = useState(null);

  const faqData = [
    {
      question: 'How many sessions of Eximia are needed for visible results?',
      answer: 'Most patients begin to see visible changes within 2–3 sessions, with optimal results typically achieved after 6–10 sessions.',
    },
    {
      question: 'How often should I do Eximia sessions?',
      answer: 'During the intensive phase, we recommend 2 sessions per week (spaced 72 hours apart). For maintenance, once every 4–6 weeks is sufficient.',
    },
    {
      question: 'Can I reduce the number of sessions needed?',
      answer: 'Yes! Following post-treatment guidelines like light cardio, staying hydrated, and wearing compression garments can help maximize each session\'s effectiveness.',
    },
    {
      question: 'Is Eximia suitable for full body contouring?',
      answer: 'Absolutely. Eximia can treat multiple areas in one session, making it ideal for comprehensive body transformation including abdomen, thighs, arms, and buttocks.',
    },
    {
      question: 'Are results permanent after completing sessions?',
      answer: 'Yes, the fat cell reduction is permanent. However, maintaining a stable weight and healthy lifestyle is essential to preserve your results long-term.',
    },
  ];

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/971566597878', '_blank');
  };

  useEffect(() => {
    const handleScroll = () => {
      const formSection = document.getElementById('appointment-form');
      if (formSection) {
        const sectionRect = formSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        if (sectionRect.bottom <= windowHeight + 100) {
          setIsButtonFixed(false);
        } else {
          setIsButtonFixed(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const validateAppointmentField = (name, value) => {
    if (name === 'fullName') {
      if (!value || value.trim().length < 3) return 'Full name must be at least 3 characters';
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
    if (name === 'treatmentArea') {
      if (!value) return 'Please select a treatment area';
      return '';
    }
    if (name === 'preferredDate') {
      if (!value) return 'Please select a preferred date';
      const selected = new Date(value);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selected < today) return 'Date cannot be in the past';
      return '';
    }
    return '';
  };

  const handleAppointmentChange = (e) => {
    const { name, value } = e.target;
    setAppointmentData(prev => ({ ...prev, [name]: value }));
    
    if (appointmentErrors[name]) {
      const error = validateAppointmentField(name, value);
      setAppointmentErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleAppointmentBlur = (e) => {
    const { name, value } = e.target;
    const error = validateAppointmentField(name, value);
    setAppointmentErrors(prev => ({ ...prev, [name]: error }));
  };

  const scrollToForm = () => {
    document.getElementById('appointment-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleAppointmentSubmit = async (e) => {
    e.preventDefault();
    
    const newErrors = {};
    Object.keys(appointmentData).forEach(key => {
      const error = validateAppointmentField(key, appointmentData[key]);
      if (error) newErrors[key] = error;
    });
    setAppointmentErrors(newErrors);
    
    if (Object.keys(newErrors).length > 0) return;
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const payload = {
        source: 'EximiaSessionsNeeded',
        action: 'book_appointment',
        fullName: appointmentData.fullName,
        phone: appointmentData.phone,
        email: appointmentData.email,
        treatmentArea: appointmentData.treatmentArea,
        preferredDate: appointmentData.preferredDate,
        preferredTime: appointmentData.preferredTime
      };
      
      const res = await fetch('/api/appointment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      
      if (res.ok) {
        setSubmitStatus('success');
        setAppointmentData({
          fullName: '',
          phone: '',
          email: '',
          treatmentArea: '',
          preferredDate: '',
          preferredTime: ''
        });
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus(null), 5000);
      }
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <Head>
        <title key="title">How Many Sessions of Eximia Needed? | Eximia Treatment Protocol Dubai</title>
        <meta name="description" content="Discover how many sessions of Eximia you need for visible results. Learn about the Eximia treatment protocol in Dubai with instant inch loss technology." key="description" />
        
      </Head>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#F5F1EA] to-[#E9E2D6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A] leading-tight">
                How Many Eximia Sessions Do You Need for Visible Results?
              </h1>
              
              <p className="text-lg text-[#5F5F5F] leading-relaxed">
                One of the most attractive features of the Eximia HR77 Platinum is its speed. Unlike other technologies that require months to show a difference, Eximia is famous for its "instant inch loss." However, for long-term body remodeling and permanent fat cell reduction, a structured protocol is required. At our Dubai clinic, we typically recommend a course of 6 to 10 sessions to achieve your ultimate aesthetic target.
              </p>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#1A1A1A] mt-2 flex-shrink-0"></div>
                  <span className="text-[#1A1A1A]">Instant inch loss technology</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#1A1A1A] mt-2 flex-shrink-0"></div>
                  <span className="text-[#1A1A1A]">Visible results from early sessions</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#1A1A1A] mt-2 flex-shrink-0"></div>
                  <span className="text-[#1A1A1A]">Structured fat reduction protocol</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#1A1A1A] mt-2 flex-shrink-0"></div>
                  <span className="text-[#1A1A1A]">Personalized treatment planning</span>
                </li>
              </ul>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button 
                  onClick={scrollToForm}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#1F5E4B] text-white rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Book Free Consultation
                </button>
                <button 
                  onClick={() => window.open('https://wa.me/971566597878', '_blank')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#1F5E4B] rounded-xl font-semibold border-2 border-[#1F5E4B] shadow-xl hover:shadow-2xl transition-all"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  WhatsApp Consultation
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/session.jpg"
                  alt="Eximia Sessions Results Dubai"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F5E4B]/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* The Eximia Session Roadmap Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-4">
              The Eximia Session Roadmap
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1 - 1st Session */}
            <div className="bg-[#F5F1EA] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#1F5E4B]"></div>
              <div className="mb-6">
                <div className="w-14 h-14 rounded-xl bg-[#1F5E4B] flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">
                The 1st Session (The "Instant" Change)
              </h3>
              <p className="text-[#5F5F5F] leading-relaxed">
                Most patients lose 1–3 cm immediately due to the powerful lymphatic drainage and oxygenation of the skin.
              </p>
            </div>

            {/* Card 2 - 3rd Session */}
            <div className="bg-[#F5F1EA] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#1F5E4B]"></div>
              <div className="mb-6">
                <div className="w-14 h-14 rounded-xl bg-[#1F5E4B] flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">
                The 3rd Session (The Cellulite Shift)
              </h3>
              <p className="text-[#5F5F5F] leading-relaxed">
                By the third visit, the "orange peel" texture of cellulite begins to flatten as the Endoradiomag technology breaks down fibrous bands.
              </p>
            </div>

            {/* Card 3 - 7th Session */}
            <div className="bg-[#F5F1EA] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#1F5E4B]"></div>
              <div className="mb-6">
                <div className="w-14 h-14 rounded-xl bg-[#1F5E4B] flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">
                The 7th Session (The Permanent Sculpt)
              </h3>
              <p className="text-[#5F5F5F] leading-relaxed">
                This is the "Magic Number" for many. By session 7, the Laserporation has effectively emptied fat cells, and your new silhouette is clearly visible.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Recommended Frequency for Best Results Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[#F5F1EA] to-[#E9E2D6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-4">
              Recommended Frequency for Best Results
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1 - Intensive Phase */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="mb-6">
                <div className="w-14 h-14 rounded-full bg-[#1F5E4B] flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">
                Intensive Phase
              </h3>
              <p className="text-[#5F5F5F] leading-relaxed">
                2 sessions per week (spaced 72 hours apart). This is ideal for those prepping for a wedding, holiday, or event in Dubai.
              </p>
            </div>

            {/* Card 2 - Standard Phase */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="mb-6">
                <div className="w-14 h-14 rounded-full bg-[#1F5E4B] flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">
                Standard Phase
              </h3>
              <p className="text-[#5F5F5F] leading-relaxed">
                1 session per week. This is best for gradual body contouring and skin tightening.
              </p>
            </div>

            {/* Card 3 - Maintenance */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="mb-6">
                <div className="w-14 h-14 rounded-full bg-[#1F5E4B] flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">
                Maintenance
              </h3>
              <p className="text-[#5F5F5F] leading-relaxed">
                1 session every 4–6 weeks once your goal is reached.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Factors That Determine Your Personal Protocol Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-4">
              Factors That Determine Your Personal Protocol
            </h2>
          </div>

          <div className="overflow-hidden rounded-2xl shadow-xl border border-[#E9E2D6]">
            <table className="min-w-full divide-y divide-[#E9E2D6]">
              <thead className="bg-[#1F5E4B]">
                <tr>
                  <th className="px-6 py-5 text-left text-base font-bold text-white uppercase tracking-wide">Goal</th>
                  <th className="px-6 py-5 text-left text-base font-bold text-white uppercase tracking-wide">Severity</th>
                  <th className="px-6 py-5 text-left text-base font-bold text-white uppercase tracking-wide">Recommended Sessions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E9E2D6]">
                <tr className="bg-white hover:bg-[#F5F1EA] transition-colors duration-200">
                  <td className="px-6 py-5 text-[#1A1A1A] font-medium">Skin Tightening</td>
                  <td className="px-6 py-5 text-[#5F5F5F]">Mild Laxity</td>
                  <td className="px-6 py-5">
                    <span className="inline-flex items-center justify-center px-6 py-2 bg-[#1F5E4B] text-white font-semibold rounded-full">4–6 Sessions</span>
                  </td>
                </tr>
                <tr className="bg-white hover:bg-[#F5F1EA] transition-colors duration-200">
                  <td className="px-6 py-5 text-[#1A1A1A] font-medium">Cellulite Reduction</td>
                  <td className="px-6 py-5 text-[#5F5F5F]">Grade II - III</td>
                  <td className="px-6 py-5">
                    <span className="inline-flex items-center justify-center px-6 py-2 bg-[#1F5E4B] text-white font-semibold rounded-full">8–10 Sessions</span>
                  </td>
                </tr>
                <tr className="bg-white hover:bg-[#F5F1EA] transition-colors duration-200">
                  <td className="px-6 py-5 text-[#1A1A1A] font-medium">Fat Reduction</td>
                  <td className="px-6 py-5 text-[#5F5F5F]">Small Pockets</td>
                  <td className="px-6 py-5">
                    <span className="inline-flex items-center justify-center px-6 py-2 bg-[#1F5E4B] text-white font-semibold rounded-full">6–8 Sessions</span>
                  </td>
                </tr>
                <tr className="bg-white hover:bg-[#F5F1EA] transition-colors duration-200">
                  <td className="px-6 py-5 text-[#1A1A1A] font-medium">Total Body Contouring</td>
                  <td className="px-6 py-5 text-[#5F5F5F]">Larger Areas</td>
                  <td className="px-6 py-5">
                    <span className="inline-flex items-center justify-center px-6 py-2 bg-[#1F5E4B] text-white font-semibold rounded-full">10–12 Sessions</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      {/* How to Cut Your Session Count in Half Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[#E9E2D6] via-[#F5F1EA] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-4">
              How to Cut Your Session Count in Half
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1 - Post-Treatment Cardio */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 relative group">
              <div className="mb-6">
                <div className="w-16 h-16 rounded-xl bg-[#1F5E4B] flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.182 12.143c.818-.464 1.418-1.206 1.672-2.087l.686-2.394a2.25 2.25 0 00-1.672-2.786l-2.45-.613a1 1 0 00-.99.242l-1.064 1.065a16.088 16.088 0 01-4.243-4.243l1.065-1.064a1 1 0 00.242-.99l-.613-2.45a2.25 2.25 0 00-2.786-1.672l-2.394.686c-.88.254-1.623.854-2.087 1.672l-1.26 2.212a1 1 0 000 .996l1.26 2.212c.464.818 1.206 1.623 2.087 1.672l2.394.686a2.25 2.25 0 002.786-1.672l.613-2.45a1 1 0 00-.242-.99l-1.065-1.064a16.088 16.088 0 014.243-4.243l1.064 1.065a1 1 0 00.99.242l2.45-.613a2.25 2.25 0 001.672-2.786l-.686-2.394c-.254-.88-.854-1.623-1.672-2.087l-2.212-1.26a1 1 0 00-.996 0l-2.212 1.26c-.818.464-1.623 1.206-1.672 2.087l-.686 2.394a2.25 2.25 0 001.672 2.786l2.45.613a1 1 0 00.99-.242l1.064-1.065a16.088 16.088 0 014.243 4.243l-1.065 1.064a1 1 0 00-.242.99l.613 2.45a2.25 2.25 0 002.786 1.672l2.394-.686c.88-.254 1.623-1.206 1.672-2.087l1.26-2.212a1 1 0 000-.996l-1.26-2.212z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">
                Post-Treatment Cardio
              </h3>
              <p className="text-[#5F5F5F] leading-relaxed">
                A 30-minute walk or light swim immediately after your session helps the body "burn" the fat that Eximia just released into your system.
              </p>
            </div>

            {/* Card 2 - The Dry Day Rule */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 relative group">
              <div className="mb-6">
                <div className="w-16 h-16 rounded-xl bg-[#1F5E4B] flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">
                The "Dry Day" Rule
              </h3>
              <p className="text-[#5F5F5F] leading-relaxed">
                Avoid alcohol for 24 hours before and after. Your liver needs to focus entirely on fat metabolism, not toxin filtration.
              </p>
            </div>

            {/* Card 3 - Compression */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 relative group">
              <div className="mb-6">
                <div className="w-16 h-16 rounded-xl bg-[#1F5E4B] flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">
                Compression
              </h3>
              <p className="text-[#5F5F5F] leading-relaxed">
                Wearing light compression leggings or a bodysuit for 2 days after treatment can help "mold" the results.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Frequently Asked Questions Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {/* FAQ Item 1 */}
            <div className="bg-[#F5F1EA] rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <button className="w-full px-6 py-5 flex items-center justify-between text-left" onClick={() => setActiveFaq(activeFaq === 0 ? null : 0)}>
                <span className="text-lg font-semibold text-[#1A1A1A] pr-4">How many sessions of Eximia are needed for visible results?</span>
                <svg className={`w-5 h-5 text-[#1F5E4B] flex-shrink-0 transition-transform duration-300 ${activeFaq === 0 ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeFaq === 0 && (
                <div className="px-6 pb-5">
                  <p className="text-[#5F5F5F] leading-relaxed">Most patients begin to see visible changes within 2–3 sessions, with optimal results typically achieved after 6–10 sessions.</p>
                </div>
              )}
            </div>

            {/* FAQ Item 2 */}
            <div className="bg-[#F5F1EA] rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <button className="w-full px-6 py-5 flex items-center justify-between text-left" onClick={() => setActiveFaq(activeFaq === 1 ? null : 1)}>
                <span className="text-lg font-semibold text-[#1A1A1A] pr-4">How often should I do Eximia sessions?</span>
                <svg className={`w-5 h-5 text-[#1F5E4B] flex-shrink-0 transition-transform duration-300 ${activeFaq === 1 ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeFaq === 1 && (
                <div className="px-6 pb-5">
                  <p className="text-[#5F5F5F] leading-relaxed">Sessions are usually spaced 72 hours apart, depending on your treatment plan.</p>
                </div>
              )}
            </div>

            {/* FAQ Item 3 */}
            <div className="bg-[#F5F1EA] rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <button className="w-full px-6 py-5 flex items-center justify-between text-left" onClick={() => setActiveFaq(activeFaq === 2 ? null : 2)}>
                <span className="text-lg font-semibold text-[#1A1A1A] pr-4">Can I reduce the number of sessions needed?</span>
                <svg className={`w-5 h-5 text-[#1F5E4B] flex-shrink-0 transition-transform duration-300 ${activeFaq === 2 ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeFaq === 2 && (
                <div className="px-6 pb-5">
                  <p className="text-[#5F5F5F] leading-relaxed">Yes, combining treatment with hydration, light exercise, and proper lifestyle habits may improve results.</p>
                </div>
              )}
            </div>

            {/* FAQ Item 4 */}
            <div className="bg-[#F5F1EA] rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <button className="w-full px-6 py-5 flex items-center justify-between text-left" onClick={() => setActiveFaq(activeFaq === 3 ? null : 3)}>
                <span className="text-lg font-semibold text-[#1A1A1A] pr-4">Is Eximia suitable for full body contouring?</span>
                <svg className={`w-5 h-5 text-[#1F5E4B] flex-shrink-0 transition-transform duration-300 ${activeFaq === 3 ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeFaq === 3 && (
                <div className="px-6 pb-5">
                  <p className="text-[#5F5F5F] leading-relaxed">Yes, it can target multiple areas including abdomen, thighs, arms, and flanks.</p>
                </div>
              )}
            </div>

            {/* FAQ Item 5 */}
            <div className="bg-[#F5F1EA] rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <button className="w-full px-6 py-5 flex items-center justify-between text-left" onClick={() => setActiveFaq(activeFaq === 4 ? null : 4)}>
                <span className="text-lg font-semibold text-[#1A1A1A] pr-4">Are results permanent after completing sessions?</span>
                <svg className={`w-5 h-5 text-[#1F5E4B] flex-shrink-0 transition-transform duration-300 ${activeFaq === 4 ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeFaq === 4 && (
                <div className="px-6 pb-5">
                  <p className="text-[#5F5F5F] leading-relaxed">Fat reduction results can be long-lasting when supported by a balanced lifestyle..</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Get Your Personalized Treatment Plan Section */}
      <section id="appointment-form" className="py-16 lg:py-24 bg-gradient-to-br from-[#1F5E4B] to-[#2a7d64] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full translate-x-48 -translate-y-48 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-48 translate-y-48 blur-3xl"></div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Get Your Personalized Treatment Plan
            </h2>
            <p className="text-lg text-white/90 leading-relaxed max-w-3xl mx-auto">
              Stop guessing how many sessions you need. Visit our{' '}
                <a href="https://ramacarepolyclinic.ae/services/eximia-body-contouring-dubai/" className="text-white font-bold border-b-2 border-white/50 hover:border-white transition-all">
                  Eximia Body Contouring Dubai
                </a>{' '}
                page to book a 3D Body Analysis. We use advanced modeling software to show you exactly where you will lose inches and how many sessions it will take to get there.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl">
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 font-medium text-center">
                Your appointment request has been submitted successfully! We'll contact you shortly.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 font-medium text-center">
                Something went wrong. Please try again or contact us directly.
              </div>
            )}
            <form onSubmit={handleAppointmentSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name Field */}
                <div className="space-y-2">
                  <label className="block text-base font-medium text-[#1A1A1A] mb-2">Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={appointmentData.fullName}
                    onChange={handleAppointmentChange}
                    onBlur={handleAppointmentBlur}
                    placeholder="Your full name"
                    className={`w-full px-4 py-3 rounded-lg border-2 border-[#E9E2D6] bg-white text-[#1A1A1A] placeholder-gray-400 focus:border-[#1F5E4B] focus:outline-none transition-colors`}
                  />
                  {appointmentErrors.fullName && <p className="text-red-500 text-xs mt-1">{appointmentErrors.fullName}</p>}
                </div>

                {/* Phone Field */}
                <div className="space-y-2">
                  <label className="block text-base font-medium text-[#1A1A1A] mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={appointmentData.phone}
                    onChange={handleAppointmentChange}
                    onBlur={handleAppointmentBlur}
                    placeholder="+971 XX XXX XXXX"
                    className={`w-full px-4 py-3 rounded-lg border-2 border-[#E9E2D6] bg-white text-[#1A1A1A] placeholder-gray-400 focus:border-[#1F5E4B] focus:outline-none transition-colors`}
                  />
                  {appointmentErrors.phone && <p className="text-red-500 text-xs mt-1">{appointmentErrors.phone}</p>}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Email Field */}
                <div className="space-y-2">
                  <label className="block text-base font-medium text-[#1A1A1A] mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={appointmentData.email}
                    onChange={handleAppointmentChange}
                    onBlur={handleAppointmentBlur}
                    placeholder="your@email.com"
                    className={`w-full px-4 py-3 rounded-lg border-2 border-[#E9E2D6] bg-white text-[#1A1A1A] placeholder-gray-400 focus:border-[#1F5E4B] focus:outline-none transition-colors`}
                  />
                  {appointmentErrors.email && <p className="text-red-500 text-xs mt-1">{appointmentErrors.email}</p>}
                </div>

                {/* Treatment Area Field */}
                <div className="space-y-2">
                  <label className="block text-base font-medium text-[#1A1A1A] mb-2">Treatment Area</label>
                  <select
                    name="treatmentArea"
                    value={appointmentData.treatmentArea}
                    onChange={handleAppointmentChange}
                    onBlur={handleAppointmentBlur}
                    className={`w-full px-4 py-3 rounded-lg border-2 border-[#E9E2D6] bg-white text-[#1A1A1A] focus:border-[#1F5E4B] focus:outline-none transition-colors cursor-pointer`}
                  >
                    <option value="">Select area</option>
                    <option value="Abdomen">Abdomen</option>
                    <option value="Flanks/Love Handles">Flanks/Love Handles</option>
                    <option value="Thighs">Thighs</option>
                    <option value="Buttocks">Buttocks</option>
                    <option value="Arms">Arms</option>
                    <option value="Back">Back</option>
                    <option value="Multiple Areas">Multiple Areas</option>
                  </select>
                  {appointmentErrors.treatmentArea && <p className="text-red-500 text-xs mt-1">{appointmentErrors.treatmentArea}</p>}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Preferred Date */}
                <div className="space-y-2">
                  <label className="block text-base font-medium text-[#1A1A1A] mb-2">Preferred Date</label>
                  <input
                    type="date"
                    name="preferredDate"
                    value={appointmentData.preferredDate}
                    onChange={handleAppointmentChange}
                    onBlur={handleAppointmentBlur}
                    min={new Date().toISOString().split('T')[0]}
                    className={`w-full px-4 py-3 rounded-lg border-2 border-[#E9E2D6] bg-white text-[#1A1A1A] focus:border-[#1F5E4B] focus:outline-none transition-colors cursor-pointer`}
                  />
                  {appointmentErrors.preferredDate && <p className="text-red-500 text-xs mt-1">{appointmentErrors.preferredDate}</p>}
                </div>

                {/* Preferred Time Field */}
                <div className="space-y-2">
                  <label className="block text-base font-medium text-[#1A1A1A] mb-2">Preferred Time</label>
                  <select
                    name="preferredTime"
                    value={appointmentData.preferredTime}
                    onChange={handleAppointmentChange}
                    className={`w-full px-4 py-3 rounded-lg border-2 border-[#E9E2D6] bg-white text-[#1A1A1A] focus:border-[#1F5E4B] focus:outline-none transition-colors cursor-pointer`}
                  >
                    <option value="">Select time</option>
                    <option value="Morning">Morning (9 AM - 12 PM)</option>
                    <option value="Afternoon">Afternoon (12 PM - 4 PM)</option>
                    <option value="Evening">Evening (4 PM - 8 PM)</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-[#1F5E4B] hover:bg-[#2a7d64] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  Confirm Appointment Request
                </button>
                <button
                  type="button"
                  onClick={handleWhatsAppClick}
                  className="w-full px-8 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Book via WhatsApp Instantly
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <ContentReviewBadge doctorName="Sonita Sinaga" pageSlug="how-many-eximia-sessions-needed-dubai" />
    </Layout>
  );
};

export default EximiaSessionsNeededPage;
