import Head from 'next/head';
import { useState, useRef, useEffect } from 'react';
import Layout from '../../../components/Layout';

const faqData = [
  {
    question: 'Is Eximia better than CoolSculpting?',
    answer: 'It depends on your goal. Eximia offers fat reduction with skin tightening, while CoolSculpting focuses only on fat freezing.'
  },
  {
    question: 'Which treatment is more comfortable?',
    answer: 'Eximia is generally more comfortable, often described as a warm massage, while CoolSculpting can feel intense due to cold suction.'
  },
  {
    question: 'How fast can I see results?',
    answer: 'Eximia may show early inch loss, while CoolSculpting results usually appear after several weeks.'
  },
  {
    question: 'Is there any downtime?',
    answer: 'Eximia has no downtime. CoolSculpting may involve temporary swelling or numbness.'
  },
  {
    question: 'Which is better for cellulite?',
    answer: 'Eximia is more effective as it specifically targets cellulite along with fat reduction.'
  }
];

const EximiaVsCoolSculptingPage = () => {
  const [appointmentData, setAppointmentData] = useState({
    fullName: '',
    phone: '',
    email: '',
    treatmentArea: '',
    preferredDate: ''
  });
  
  const [appointmentErrors, setAppointmentErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const formRef = useRef(null);
  const [openFaq, setOpenFaq] = useState(null);
  const [isButtonFixed, setIsButtonFixed] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const formSection = document.getElementById('appointment-form');
      if (formSection) {
        const sectionRect = formSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Button becomes static when the form section is near the bottom of viewport
        if (sectionRect.bottom <= windowHeight + 100) {
          setIsButtonFixed(false);
        } else {
          setIsButtonFixed(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
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
    e.stopPropagation();
    
    console.log('Form submitted');
    console.log('Appointment data:', appointmentData);
    
    const newErrors = {};
    Object.keys(appointmentData).forEach(key => {
      const error = validateAppointmentField(key, appointmentData[key]);
      if (error) newErrors[key] = error;
    });
    setAppointmentErrors(newErrors);
    console.log('Validation errors:', newErrors);
    
    if (Object.keys(newErrors).length > 0) {
      console.log('Validation failed, stopping submission');
      return;
    } 
    console.log('Validation passed, submitting...');
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const payload = {
        source: 'EximiaVsCoolSculpting',
        action: 'book_appointment',
        fullName: appointmentData.fullName,
        phone: appointmentData.phone,
        email: appointmentData.email,
        treatmentArea: appointmentData.treatmentArea,
        preferredDate: appointmentData.preferredDate
      };

      console.log('Sending payload:', payload);
      console.log('Preferred Date value:', appointmentData.preferredDate);
      console.log('Is valid date?', !isNaN(new Date(appointmentData.preferredDate).getTime()));
      
      const res = await fetch('/api/appointment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
     
      const responseData = await res.json();
      console.log('Response status:', res.status);
      console.log('Response data:', responseData);
      
      if (res.ok) {
        console.log('Submission successful!');
        setSubmitStatus('success');
        setAppointmentData({
          fullName: '',
          phone: '',
          email: '',
          treatmentArea: '',
          preferredDate: ''
        });
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        console.error('Submission failed with status:', res.status);
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

  return (
    <Layout>
      <Head>
        <title key="title">Eximia vs. CoolSculpting Dubai | Which is Best for Fat Loss?</title>
        <meta name="description" content="Compare Eximia HR77 Platinum and CoolSculpting (Cryolipolysis) for non-surgical fat reduction in Dubai. Learn about results, comfort, downtime, and choose the right treatment." key="description" />
      </Head>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24" style={{ backgroundColor: '#F5F1EA' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[var(--text-dark)]">
                Eximia vs. CoolSculpting: Which is Best for Fat Loss in Dubai?
              </h1>
              
              <p className="text-lg leading-relaxed text-[var(--text-light)]">
                Deciding between Eximia HR77 Platinum and CoolSculpting (Cryolipolysis) is the most common dilemma for patients seeking non-surgical body contouring. While both treatments destroy fat cells, they use vastly different technologies—one uses freezing, while the other uses a 4-stage metabolic approach. In this guide, we compare the results, comfort, and downtime to help you choose the right treatment for your body goals.
              </p>

              <ul className="space-y-4 pt-4">
                {[
                  'Non-surgical fat reduction options',
                  'Compare results, comfort & downtime',
                  'Choose the right treatment for your body',
                  'Dubai clinic expert guidance'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="h-6 w-6 text-[#1F5E4B] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-[var(--text-dark)]">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button 
                  onClick={scrollToForm}
                  className="px-8 py-4 bg-[#1F5E4B] text-white rounded-lg font-semibold hover:opacity-90 transition-all shadow-lg">
                  Book Free Consultation
                </button>
                <button 
                  onClick={() => window.open('https://wa.me/971566597878', '_blank')}
                  className="px-8 py-4 bg-white text-[#1F5E4B] rounded-lg font-semibold border-2 border-[#1F5E4B] hover:bg-[#1F5E4B] hover:text-white transition-all">
                  WhatsApp Consultation
                </button>
              </div>
            </div>

            {/* Right Column - Images */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-2 rounded-2xl overflow-hidden shadow-2xl">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/40 to-transparent"></div>
                  <img 
                    src="/images/ex1.jpg" 
                    alt="CoolSculpting Freezing Technology"
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 flex items-end p-6">
                    <div>
                      <h3 className="text-white font-bold text-xl mb-1">CoolSculpting</h3>
                      <p className="text-white/90 text-sm">Freezing Technology</p>
                    </div>
                  </div>
                </div>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/90 via-green-900/40 to-transparent"></div>
                  <img 
                    src="/images/ex2.jpg" 
                    alt="Eximia Warm Sculpting"
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 flex items-end p-6">
                    <div>
                      <h3 className="text-white font-bold text-xl mb-1">Eximia</h3>
                      <p className="text-white/90 text-sm">Warm Sculpting</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Comparison Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16" style={{ color: '#1A1A1A' }}>
            The Technology: Freezing vs. Metabolic Sculpting
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* CoolSculpting Card */}
            <div className="rounded-3xl p-8 space-y-6 border-2 border-transparent hover:border-blue-200 transition-all duration-300 shadow-lg" style={{ backgroundColor: '#F5F1EA' }}>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center p-4">
                  <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L9.5 6.5L5 9l4.5 2.5L12 16l2.5-4.5L19 9l-4.5-2.5L12 2zm0 4.5l1.5 2.5L16 10l-2.5 1-1.5 3-1.5-3L8 10l2.5-1L12 6.5z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold" style={{ color: '#1F5E4B' }}>CoolSculpting</h3>
              </div>
              <div>
                <p className="text-sm uppercase tracking-wider mb-4" style={{ color: '#5F5F5F', fontWeight: '600' }}>THE COLD WAY</p>
                <p className="text-lg leading-relaxed" style={{ color: '#1A1A1A' }}>
                  Uses <strong>Cryolipolysis</strong> to freeze fat cells to approximately <strong>−11°C</strong>. The dead cells are then naturally flushed by the liver over <strong>3–4 months</strong>.
                </p>
              </div>
            </div>

            {/* Eximia Card */}
            <div className="rounded-3xl p-8 space-y-6 border-2 border-transparent hover:border-[#1F5E4B] transition-all duration-300 shadow-lg" style={{ backgroundColor: '#F5F1EA' }}>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center p-4">
                  <svg className="w-8 h-8 text-[#1F5E4B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold" style={{ color: '#1F5E4B' }}>Eximia</h3>
              </div>
              <div>
                <p className="text-sm uppercase tracking-wider mb-4" style={{ color: '#5F5F5F', fontWeight: '600' }}>THE 4-IN-1 WAY</p>
                <p className="text-lg leading-relaxed" style={{ color: '#1A1A1A' }}>
                  Combines <strong>Laserporation</strong> (to "open" fat cells), <strong>Radiofrequency</strong> (to tighten skin), and <strong>Magnetic Vacuum</strong> (to flush fat immediately via the lymphatic system).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-20" style={{ backgroundColor: '#F5F1EA' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[var(--text-dark)]">
            Head-to-Head Comparison
          </h2>
          
          <div className="overflow-hidden rounded-3xl bg-white shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr style={{ backgroundColor: '#F5F1EA' }}>
                    <th className="px-8 py-6 text-lg font-bold text-[var(--text-dark)]">Feature</th>
                    <th className="px-8 py-6 text-lg font-bold text-[var(--primary-green)]">Eximia HR77 Platinum</th>
                    <th className="px-8 py-6 text-lg font-bold text-blue-700">CoolSculpting</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    {
                      feature: 'Primary Goal',
                      eximia: 'Fat Loss + Skin Tightening + Cellulite',
                      cool: 'Permanent Fat Reduction Only'
                    },
                    {
                      feature: 'Pain Level',
                      eximia: 'Comfortable (Feels like a warm massage)',
                      cool: 'Significant cold/suction discomfort'
                    },
                    {
                      feature: 'Results Timeline',
                      eximia: 'Immediate "inch loss" + cumulative',
                      cool: '8–12 weeks for visible change'
                    },
                    {
                      feature: 'Skin Benefits',
                      eximia: 'Significant tightening & smoothing',
                      cool: 'Potential for loose skin after fat loss'
                    },
                    {
                      feature: 'Downtime',
                      eximia: 'Zero (Walk-in, walk-out)',
                      cool: 'Possible bruising, swelling, or numbness'
                    }
                  ].map((row, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition-colors">
                      <td className="px-8 py-6 font-semibold text-[var(--text-dark)]">{row.feature}</td>
                      <td className="px-8 py-6 text-[var(--text-dark)]">{row.eximia}</td>
                      <td className="px-8 py-6 text-[var(--text-dark)]">{row.cool}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Why Dubai Patients Switch Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16" style={{ color: '#1A1A1A' }}>
            Why Dubai Patients are Switching to Eximia
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 - Sagging Skin */}
            <div className="rounded-3xl p-8 space-y-6 shadow-2xl hover:shadow-xl transition-all duration-300" style={{ backgroundColor: '#F5F1EA' }}>
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center p-4" style={{ backgroundColor: '#1F5E4B' }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#1F5E4B' }}>The "Sagging Skin" Factor</h3>
                <p className="text-lg leading-relaxed" style={{ color: '#1A1A1A' }}>
                  When you freeze fat away (CoolSculpting), you are sometimes left with loose skin. Eximia's Radiofrequency phase tightens the skin simultaneously, ensuring a smooth, toned finish.
                </p>
              </div>
            </div>

            {/* Card 2 - Cellulite Treatment */}
            <div className="rounded-3xl p-8 space-y-6 shadow-2xl hover:shadow-xl transition-all duration-300" style={{ backgroundColor: '#F5F1EA' }}>
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center p-4" style={{ backgroundColor: '#1F5E4B' }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#1F5E4B' }}>Cellulite Treatment</h3>
                <p className="text-lg leading-relaxed" style={{ color: '#1A1A1A' }}>
                  CoolSculpting does not treat cellulite. Eximia's Endoradiomag technology is specifically designed to break down the fibrous bands that cause the "orange peel" look.
                </p>
              </div>
            </div>

            {/* Card 3 - No Risk of PAH */}
            <div className="rounded-3xl p-8 space-y-6 shadow-2xl hover:shadow-xl transition-all duration-300" style={{ backgroundColor: '#F5F1EA' }}>
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center p-4" style={{ backgroundColor: '#1F5E4B' }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#1F5E4B' }}>No Risk of PAH</h3>
                <p className="text-lg leading-relaxed" style={{ color: '#1A1A1A' }}>
                  Unlike fat-freezing, which carries a rare risk of Paradoxical Adipose Hyperplasia (fat growing back thicker), Eximia uses light and heat, which is biologically safer for most body types.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verdict Section */}
      <section className="py-20" style={{ backgroundColor: '#F5F1EA' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[var(--text-dark)]">
            The Verdict: Which should you choose?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* CoolSculpting Verdict Card */}
            <div className="bg-white rounded-3xl p-8 space-y-6 shadow-xl border-2 border-blue-100 hover:border-blue-300 transition-all">
              <div className="space-y-4">
                <div className="inline-block px-4 py-2 bg-blue-100 rounded-full">
                  <span className="text-blue-700 font-bold">Choose CoolSculpting if:</span>
                </div>
                <p className="text-lg leading-relaxed text-[var(--text-dark)]">
                  You have one very specific, thick "bulge" of fat and don't mind waiting 3 months to see the result.
                </p>
              </div>
              <button 
                onClick={() => window.open('/services/eximia-vs-coolsculpting-dubai/', '_blank')}
                className="w-full py-3 px-6 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                Learn More <span>→</span>
              </button>
            </div>

            {/* Eximia Verdict Card */}
            <div className="rounded-3xl p-8 space-y-6 shadow-xl border-2 border-transparent transition-all" style={{ backgroundColor: '#1F5E4B' }}>
              <div className="space-y-4">
                <div className="inline-block px-4 py-2 rounded-full" style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}>
                  <span className="text-white font-bold">Choose Eximia if:</span>
                </div>
                <p className="text-lg leading-relaxed text-white">
                  You want a total silhouette transformation, need skin tightening, have cellulite, or want to see results before your next weekend at a Dubai beach club.
                </p>
              </div>
              <button 
                onClick={scrollToForm}
                className="w-full py-3 px-6 bg-white text-[#1F5E4B] rounded-xl font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
              >
                Book Now <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[var(--text-dark)]">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-[var(--beige-bg)] rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <button 
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex justify-between items-center text-left px-8 py-6 focus:outline-none"
                >
                  <span className="text-lg font-bold text-[var(--text-dark)]">{faq.question}</span>
                  <svg 
                    className={`w-6 h-6 text-[var(--primary-green)] transform transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openFaq === index ? 'max-h-96' : 'max-h-0'}`}>
                  <div className="px-8 pb-6">
                    <p className="text-lg text-[var(--text-dark)] leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Book Your Professional Assessment Section */}
      <section id="appointment-form" className="py-20 bg-[var(--beige-bg)]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
                Book Your Professional Assessment
              </h2>
              <p className="text-lg leading-relaxed text-[#5F5F5F] max-w-2xl mx-auto">
                Still unsure? We offer a free body composition analysis at our clinic. Visit our main <a href="https://ramacarepolyclinic.ae/services/eximia-body-contouring-dubai/" className="text-[#1F5E4B] font-bold border-b-2 border-[#1F5E4B]/50 hover:border-[#1F5E4B] transition-all">Eximia Body Contouring Dubai</a> page to see our latest results and book your slot.
              </p>
            </div>

            <form onSubmit={handleAppointmentSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name Field */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-base font-medium text-[#1A1A1A]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={appointmentData.fullName}
                    onChange={handleAppointmentChange}
                    onBlur={handleAppointmentBlur}
                    placeholder="Your full name"
                    className={`w-full px-4 py-3 rounded-xl border-0 bg-[#F5F1EA] text-[#5F5F5F] placeholder-gray-400 focus:ring-2 focus:ring-[var(--primary-green)] transition-all ${appointmentErrors.fullName ? 'ring-2 ring-red-500' : ''}`}
                  />
                  {appointmentErrors.fullName && <p className="text-red-500 text-xs mt-1">{appointmentErrors.fullName}</p>}
                </div>

                {/* Phone Field */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-base font-medium text-[#1A1A1A]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={appointmentData.phone}
                    onChange={handleAppointmentChange}
                    onBlur={handleAppointmentBlur}
                    placeholder="+971 XX XXX XXXX"
                    className={`w-full px-4 py-3 rounded-xl border-0 bg-[#F5F1EA] text-[#5F5F5F] placeholder-gray-400 focus:ring-2 focus:ring-[var(--primary-green)] transition-all ${appointmentErrors.phone ? 'ring-2 ring-red-500' : ''}`}
                  />
                  {appointmentErrors.phone && <p className="text-red-500 text-xs mt-1">{appointmentErrors.phone}</p>}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Email Field */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-base font-medium text-[#1A1A1A]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={appointmentData.email}
                    onChange={handleAppointmentChange}
                    onBlur={handleAppointmentBlur}
                    placeholder="your@email.com"
                    className={`w-full px-4 py-3 rounded-xl border-0 bg-[#F5F1EA] text-[#5F5F5F] placeholder-gray-400 focus:ring-2 focus:ring-[var(--primary-green)] transition-all ${appointmentErrors.email ? 'ring-2 ring-red-500' : ''}`}
                  />
                  {appointmentErrors.email && <p className="text-red-500 text-xs mt-1">{appointmentErrors.email}</p>}
                </div>
                {/* Treatment Interest */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-base font-medium text-[#1A1A1A]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Treatment Interest
                  </label>
                  <select
                    name="treatmentArea"
                    value={appointmentData.treatmentArea}
                    onChange={handleAppointmentChange}
                    onBlur={handleAppointmentBlur}
                    className={`w-full px-4 py-3 rounded-xl border-0 bg-[#F5F1EA] text-[#5F5F5F] focus:ring-2 focus:ring-[var(--primary-green)] transition-all appearance-none cursor-pointer ${appointmentErrors.treatmentArea ? 'ring-2 ring-red-500' : ''}`}
                  >
                    <option value="">Select treatment</option>
                    <option value="eximia">Eximia HR77 Platinum</option>
                    <option value="coolsculpting">CoolSculpting</option>
                  </select>
                  {appointmentErrors.treatmentArea && <p className="text-red-500 text-xs mt-1">{appointmentErrors.treatmentArea}</p>}
                </div>

                {/* Preferred Date */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-base font-medium text-[#1A1A1A]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    name="preferredDate"
                    value={appointmentData.preferredDate}
                    onChange={handleAppointmentChange}
                    onBlur={handleAppointmentBlur}
                    min={new Date().toISOString().split('T')[0]}
                    className={`w-full px-4 py-3 rounded-xl border-0 bg-[#F5F1EA] text-[#5F5F5F] focus:ring-2 focus:ring-[var(--primary-green)] transition-all appearance-none cursor-pointer ${appointmentErrors.preferredDate ? 'ring-2 ring-red-500' : ''}`}
                  />
                  {appointmentErrors.preferredDate && <p className="text-red-500 text-xs mt-1">{appointmentErrors.preferredDate}</p>}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-xl font-semibold text-white transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer relative z-10"
                  style={{ backgroundColor: '#1F5E4B' }}
                >
                  {isSubmitting ? 'Submitting...' : 'Confirm Appointment Request'}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    console.log('WhatsApp button clicked!');
                    window.open('https://wa.me/971566597878', '_blank');
                  }}
                  className="w-full py-4 px-6 rounded-xl font-semibold text-white transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-2 cursor-pointer relative z-10"
                  style={{ backgroundColor: '#1DB954' }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Book via WhatsApp Instantly
                </button>
              </div>

              {submitStatus === 'success' && (
                <div className="p-4 bg-green-100 text-green-700 rounded-xl text-center font-medium">
                  Thank you! Your request has been received. We will contact you shortly.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="p-4 bg-red-100 text-red-700 rounded-xl text-center font-medium">
                  Something went wrong. Please try again or contact us via WhatsApp.
                </div>
              )}
            </form>
          </div>

          {/* Floating/Static Book Free Consultation Button */}
          <div className={`mt-8 text-center ${isButtonFixed ? 'fixed bottom-6 left-1/2 -translate-x-1/2 z-40' : 'static'}`}>
            <button 
              onClick={scrollToForm}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--primary-green)] text-white rounded-full shadow-xl hover:shadow-2xl transition-all font-semibold"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="w-5 h-5"
              >
                <path d="M8 2v4"></path>
                <path d="M16 2v4"></path>
                <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                <path d="M3 10h18"></path>
              </svg>
              <span>Book Free Consultation</span>
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default EximiaVsCoolSculptingPage;
