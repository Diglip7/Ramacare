import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../../components/Layout';
import ContentReviewBadge from '../../../components/ContentReviewBadge';
import { useState, useEffect } from 'react';
import { Calendar, MessageCircle } from 'lucide-react';
import { useToast } from '../../../components/Toast';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <button
        className="w-full flex items-center justify-between p-6 lg:p-8 text-left group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold text-[#1A1A1A] pr-4 group-hover:text-[#1F5E4B] transition-colors duration-300">
          {question}
        </span>
        <svg
          className={`w-6 h-6 text-[#1F5E4B] flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="px-6 lg:px-8 pb-8 pt-2">
          <p className="text-base text-[#5F5F5F] leading-relaxed">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
};

const StickyBottomBar = ({ onBookNow, onWhatsApp }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past a certain point
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white shadow-2xl border-t-2 border-[#1F5E4B]">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h4 className="text-base font-semibold text-[#1A1A1A] mb-1" style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '16px' }}>
              Ready for Medical-Grade Treatment?
            </h4>
            <p className="text-sm text-[#5F5F5F]">
              Book your professional assessment today
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            <button
              className="bg-[#1F5E4B] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#164a3b] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
              onClick={onBookNow}
            >
              <Calendar className="w-5 h-5" />
              Book Now
            </button>
            
            <button
              className="bg-[#25D366] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#1FAC4F] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
              onClick={onWhatsApp}
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </button>
            
            <button
              className="hidden md:flex w-10 h-10 rounded-full hover:bg-[#F5F1EA] flex items-center justify-center transition-colors duration-300"
              aria-label="Close"
              onClick={() => setIsVisible(false)}
            >
              <svg className="w-5 h-5 text-[#5F5F5F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProfessionalVsHomeUltrasoundPage = () => {
  const { showToast, ToastComponent } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    preferredTime: '',
    treatmentArea: ''
  });

  const handleBookAppointment = () => {
    const appointmentSection = document.getElementById('book-appointment');
    if (appointmentSection) {
      appointmentSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToForm = () => {
    const formSection = document.getElementById('book-appointment');
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
          source: 'professional-vs-home-ultrasound'
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
      question: 'Are home ultrasound machines effective for sciatica?',
      answer: 'Generally, no. Sciatica involves the sciatic nerve located deep within the gluteal muscles. A home device cannot reach the depth required to reduce the inflammation around that nerve.'
    },
    {
      question: 'Is clinical ultrasound therapy painful?',
      answer: 'Not at all. While professional machines are much more powerful than home units, the treatment is painless. You will feel a soothing, deep warmth, but never a sharp sensation.'
    },
    {
      question: 'How do I know if a clinic is using professional equipment?',
      answer: 'In Dubai, always look for the DHA (Dubai Health Authority) License on the machine or in the clinic. All equipment at RamaCare is certified and regularly calibrated for medical accuracy.'
    }
  ];

  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalClinic',
        '@id': 'https://ramacarepolyclinic.ae/#clinic',
        name: 'RamaCare Polyclinic',
        url: 'https://ramacarepolyclinic.ae/',
        image: 'https://ramacarepolyclinic.ae/images/ultrasound.jpg',
        priceRange: '$$',
        address: { '@type': 'PostalAddress', streetAddress: 'Jumeirah 1', addressLocality: 'Dubai', addressCountry: 'AE' },
        medicalSpecialty: 'Physiotherapy',
        hasCredential: 'DHA Licensed',
      },
      {
        '@type': 'MedicalWebPage',
        '@id': 'https://ramacarepolyclinic.ae/services/professional-vs-home-ultrasound/#webpage',
        url: 'https://ramacarepolyclinic.ae/services/professional-vs-home-ultrasound/',
        name: 'Professional vs. Home Ultrasound Therapy | RamaCare Dubai Guide',
        description: 'Thinking of buying a home ultrasound device in Dubai? Discover the critical differences in power, frequency, and safety between home units and clinical-grade therapy.',
        inLanguage: 'en-AE',
        lastReviewed: '2026-08-29',
        medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
        about: { '@type': 'MedicalProcedure', name: 'Therapeutic Ultrasound' },
        reviewedBy: {
          '@type': 'Person',
          name: 'Jeena Mathew',
          jobTitle: 'Musculoskeletal Physiotherapy Specialist',
          url: 'https://ramacarepolyclinic.ae/doctors/jeena-mathew-physiotherapist-dubai/',
        },
        publisher: {
          '@type': 'MedicalClinic',
          name: 'RamaCare Polyclinic',
          url: 'https://ramacarepolyclinic.ae/',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '12 Al Dhiyafah Rd, Jumeirah Terrace Building, Ground Floor',
            addressLocality: 'Jumeirah 1, Dubai',
            addressCountry: 'AE',
          },
        },
      },
      {
        '@type': 'Physician',
        '@id': 'https://ramacarepolyclinic.ae/services/professional-vs-home-ultrasound/#physician',
        name: 'Jeena Mathew',
        medicalSpecialty: 'Physiotherapy',
        honorificSuffix: 'BPT, MPT',
        hasCredential: 'DHA Licensed Physiotherapist',
        worksFor: { '@id': 'https://ramacarepolyclinic.ae/#clinic' },
        url: 'https://ramacarepolyclinic.ae/doctors/jeena-mathew-physiotherapist-dubai/',
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ramacarepolyclinic.ae/' },
          { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://ramacarepolyclinic.ae/services/' },
          { '@type': 'ListItem', position: 3, name: 'Physiotherapy', item: 'https://ramacarepolyclinic.ae/services/physiotherapy-dubai' },
          { '@type': 'ListItem', position: 4, name: 'Professional vs Home Ultrasound', item: 'https://ramacarepolyclinic.ae/services/professional-vs-home-ultrasound/' },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://ramacarepolyclinic.ae/services/professional-vs-home-ultrasound/#faq',
        mainEntity: faqs.map((f) => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: { '@type': 'Answer', text: f.answer },
        })),
      },
    ],
  };

  return (
    <Layout>
      {ToastComponent}
      <Head>
        <title key="title">Professional vs. Home Ultrasound Therapy | RamaCare Dubai Guide</title>
        <meta name="description" content="Thinking of buying a home ultrasound device in Dubai? Discover the critical differences in power, frequency, and safety between home units and clinical-grade therapy." key="description" />
        <meta name="keywords" content="professional ultrasound therapy Dubai, home ultrasound device, clinical ultrasound therapy, therapeutic ultrasound Dubai, physiotherapy ultrasound treatment, medical-grade ultrasound, pain relief therapy Dubai" />
        <link rel="canonical" href="https://ramacarepolyclinic.ae/services/professional-vs-home-ultrasound/" key="canonical" />

        {/* Open Graph Tags */}
        <meta property="og:type" content="website" key="og:type" />
        <meta property="og:title" content="Professional vs. Home Ultrasound Therapy | RamaCare Dubai Guide" key="og:title" />
        <meta property="og:description" content="Thinking of buying a home ultrasound device in Dubai? Discover the critical differences in power, frequency, and safety between home units and clinical-grade therapy." key="og:description" />
        <meta property="og:url" content="https://ramacarepolyclinic.ae/services/professional-vs-home-ultrasound/" key="og:url" />
        <meta property="og:image" content="https://ramacarepolyclinic.ae/images/ultrasound.jpg" key="og:image" />
        <meta property="og:image:width" content="1200" key="og:image:width" />
        <meta property="og:image:height" content="630" key="og:image:height" />
        <meta property="og:image:alt" content="Professional vs Home Ultrasound Therapy - RamaCare Polyclinic" key="og:image:alt" />
        <meta property="og:site_name" content="RamaCare Polyclinic" key="og:site_name" />
        <meta property="og:locale" content="en_AE" key="og:locale" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content="Professional vs. Home Ultrasound Therapy | RamaCare Dubai Guide" key="twitter:title" />
        <meta name="twitter:description" content="Thinking of buying a home ultrasound device in Dubai? Discover the critical differences in power, frequency, and safety between home units and clinical-grade therapy." key="twitter:description" />
        <meta name="twitter:image" content="https://ramacarepolyclinic.ae/images/ultrasound.jpg" key="twitter:image" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaGraph)
          }}
        />

        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700;800&display=swap" rel="stylesheet" />
        <style>{`
          @keyframes wave-flow {
            0%, 100% {
              transform: translateX(0);
            }
            50% {
              transform: translateX(-20px);
            }
          }
          .wave-all {
            animation: wave-flow 3s ease-in-out infinite;
          }
          
          @keyframes wave-flow-deep {
            0%, 100% {
              transform: translateX(0);
            }
            50% {
              transform: translateX(-30px);
            }
          }
          .wave-all-deep {
            animation: wave-flow-deep 2.5s ease-in-out infinite;
          }
        `}</style>
      </Head>

      {/* Hero Section */}
      <section className="min-h-screen bg-[#F5F1EA] px-6 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm font-medium text-[#5F5F5F] flex-wrap">
            <Link href="/" className="hover:text-[#1F5E4B] transition-colors">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/services/" className="hover:text-[#1F5E4B] transition-colors">Services</Link>
            <span aria-hidden="true">/</span>
            <Link href="/services/physiotherapy-dubai" className="hover:text-[#1F5E4B] transition-colors">Physiotherapy</Link>
            <span aria-hidden="true">/</span>
            <span className="text-[#1F5E4B]">Professional vs Home Ultrasound</span>
          </nav>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <h1 
                className="text-4xl lg:text-5xl xl:text-6xl font-semibold text-[#1A1A1A] leading-tight" 
               
              >
                Professional vs. Home Ultrasound Therapy | RamaCare Dubai Guide
              </h1>
              
              <p 
                className="text-lg text-[#5F5F5F] leading-relaxed max-w-xl" 
                style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '18px' }}
              >
                Thinking of buying a home ultrasound device in Dubai? Discover the critical differences in power, frequency, and safety between home units and clinical-grade therapy.
              </p>

              <div className="space-y-6 pt-4">
                <h2 
                  className="text-2xl font-bold text-[#1A1A1A] leading-tight" 
                  style={{ fontFamily: "'Nunito Sans', sans-serif", fontWeight: 700, fontSize: '28px' }}
                >
                  Can You Get the Same Results at Home?
                </h2>
                
                <p 
                  className="text-base text-[#5F5F5F] leading-relaxed" 
                  style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '16px' }}
                >
                  With the rise of portable wellness tech, many Dubai residents ask: "Why should I pay for clinical sessions when I can buy a device online?" While home devices are marketed for "pain relief," they lack the acoustic power and frequency control required to treat medical conditions like sciatica, ligament tears, or deep muscle inflammation.
                </p>
              </div>

              {/* Power Gap Summary Box */}
              <div className="bg-[#E9E2D6] rounded-2xl p-8 space-y-4">
                <h3 
                  className="text-xl font-semibold text-[#1A1A1A]" 
                >
                  The "Power Gap" Summary:
                </h3>
                
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#1F5E4B] shrink-0 mt-2" />
                    <div>
                      <span className="font-semibold text-[#1A1A1A]" style={{ fontSize: '16px' }}>Home Devices:</span>
                      <span className="text-[#5F5F5F] ml-2" style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '15px' }}>
                        Usually limited to low-intensity, "surface-level" vibrations.
                      </span>
                    </div>
                  </li>
                  
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#1F5E4B] shrink-0 mt-2" />
                    <div>
                      <span className="font-semibold text-[#1A1A1A]" style={{ fontSize: '16px' }}>Clinical Ultrasound (RamaCare):</span>
                      <span className="text-[#5F5F5F] ml-2" style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '15px' }}>
                        High-intensity, adjustable waves that penetrate up to 5cm deep into the muscle and bone.
                      </span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <button 
                  onClick={scrollToForm}
                  className="px-8 py-4 bg-[#1F5E4B] text-white rounded-full font-semibold hover:bg-[#164a3b] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                  style={{ fontFamily: "'Nunito Sans', sans-serif", fontWeight: 600, fontSize: '16px' }}
                >
                  <Calendar className="w-5 h-5" />
                  Book Professional Assessment
                </button>
                
                <button 
                  onClick={() => window.open('https://wa.me/971566597878', '_blank')}
                  className="px-8 py-4 bg-white text-[#1F5E4B] border-2 border-[#1F5E4B] rounded-full font-semibold hover:bg-[#1F5E4B]/5 transition-all duration-300 flex items-center justify-center gap-2"
                  style={{ fontFamily: "'Nunito Sans', sans-serif", fontWeight: 600, fontSize: '16px' }}
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Consultation
                </button>
              </div>
            </div>

            {/* Right Visual Card */}
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
                <div className="grid grid-cols-2 gap-8">
                  {/* Home Device Column */}
                  <div className="space-y-4">
                    <h3 
                      className="text-center text-[#5F5F5F] font-semibold" 
                      style={{ fontFamily: "'Nunito Sans', sans-serif", fontWeight: 600, fontSize: '16px' }}
                    >
                      Home Device
                    </h3>
                    
                    <div className="bg-[#F5F1EA] rounded-2xl p-6 h-64 flex items-end justify-center relative overflow-hidden">
                      {/* Shallow waves visualization - SVG with animation */}
                      <svg className="absolute top-8 left-8 right-8 w-[calc(100%-4rem)] h-36" viewBox="0 0 300 100" preserveAspectRatio="none">
                        <g className="wave-all">
                          <path 
                            d="M 0 30 Q 35 25, 70 30 T 140 30 T 210 30 T 280 30" 
                            stroke="#1F5E4B" 
                            strokeWidth="1.5" 
                            fill="none" 
                            opacity="0.4"
                            strokeLinecap="round"
                          />
                          <path 
                            d="M 0 45 Q 30 40, 60 45 T 120 45 T 180 45 T 240 45" 
                            stroke="#1F5E4B" 
                            strokeWidth="1.5" 
                            fill="none" 
                            opacity="0.35"
                            strokeLinecap="round"
                          />
                          <path 
                            d="M 0 60 Q 25 55, 50 60 T 100 60 T 150 60 T 200 60" 
                            stroke="#1F5E4B" 
                            strokeWidth="1.5" 
                            fill="none" 
                            opacity="0.3"
                            strokeLinecap="round"
                          />
                          <path 
                            d="M 0 75 Q 20 70, 40 75 T 80 75 T 120 75" 
                            stroke="#1F5E4B" 
                            strokeWidth="1.5" 
                            fill="none" 
                            opacity="0.25"
                            strokeLinecap="round"
                          />
                        </g>
                      </svg>
                      
                      <div className="bg-white/95 backdrop-blur-sm rounded-lg px-6 py-3 shadow-md z-10 mb-4">
                        <span className="text-sm font-medium text-[#1A1A1A]" style={{ fontSize: '14px' }}>
                          0.5cm - 1cm depth
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-center text-sm text-[#5F5F5F]" style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '14px' }}>
                      Surface level only
                    </p>
                  </div>

                  {/* Clinical Grade Column */}
                  <div className="space-y-4">
                    <h3 
                      className="text-center text-[#1F5E4B] font-semibold" 
                      style={{ fontFamily: "'Nunito Sans', sans-serif", fontWeight: 600, fontSize: '16px' }}
                    >
                      Clinical Grade
                    </h3>
                    
                    <div className="bg-gradient-to-b from-[#E8F5E9]/80 to-[#C8E6C9]/60 rounded-2xl p-6 h-64 flex items-end justify-center relative overflow-hidden">
                      {/* Deep waves visualization - SVG with animation */}
                      <svg className="absolute top-4 left-4 right-4 w-[calc(100%-2rem)] h-52" viewBox="0 0 300 170" preserveAspectRatio="none">
                        <g className="wave-all-deep">
                          <path 
                            d="M 0 8 Q 38 3, 76 8 T 152 8 T 228 8 T 300 8" 
                            stroke="#1F5E4B" 
                            strokeWidth="2" 
                            fill="none" 
                            opacity="0.85"
                            strokeLinecap="round"
                          />
                          <path 
                            d="M 0 20 Q 38 15, 76 20 T 152 20 T 228 20 T 300 20" 
                            stroke="#1F5E4B" 
                            strokeWidth="2" 
                            fill="none" 
                            opacity="0.8"
                            strokeLinecap="round"
                          />
                          <path 
                            d="M 0 32 Q 38 27, 76 32 T 152 32 T 228 32 T 300 32" 
                            stroke="#1F5E4B" 
                            strokeWidth="2" 
                            fill="none" 
                            opacity="0.75"
                            strokeLinecap="round"
                          />
                          <path 
                            d="M 0 44 Q 38 39, 76 44 T 152 44 T 228 44 T 300 44" 
                            stroke="#1F5E4B" 
                            strokeWidth="2" 
                            fill="none" 
                            opacity="0.7"
                            strokeLinecap="round"
                          />
                          <path 
                            d="M 0 56 Q 38 51, 76 56 T 152 56 T 228 56 T 300 56" 
                            stroke="#1F5E4B" 
                            strokeWidth="2" 
                            fill="none" 
                            opacity="0.65"
                            strokeLinecap="round"
                          />
                          <path 
                            d="M 0 68 Q 38 63, 76 68 T 152 68 T 228 68 T 300 68" 
                            stroke="#1F5E4B" 
                            strokeWidth="2" 
                            fill="none" 
                            opacity="0.6"
                            strokeLinecap="round"
                          />
                          <path 
                            d="M 0 80 Q 38 75, 76 80 T 152 80 T 228 80 T 300 80" 
                            stroke="#1F5E4B" 
                            strokeWidth="2" 
                            fill="none" 
                            opacity="0.55"
                            strokeLinecap="round"
                          />
                          <path 
                            d="M 0 92 Q 38 87, 76 92 T 152 92 T 228 92 T 300 92" 
                            stroke="#1F5E4B" 
                            strokeWidth="2" 
                            fill="none" 
                            opacity="0.5"
                            strokeLinecap="round"
                          />
                          <path 
                            d="M 0 104 Q 38 99, 76 104 T 152 104 T 228 104 T 300 104" 
                            stroke="#1F5E4B" 
                            strokeWidth="2" 
                            fill="none" 
                            opacity="0.45"
                            strokeLinecap="round"
                          />
                          <path 
                            d="M 0 116 Q 38 111, 76 116 T 152 116 T 228 116 T 300 116" 
                            stroke="#1F5E4B" 
                            strokeWidth="2" 
                            fill="none" 
                            opacity="0.4"
                            strokeLinecap="round"
                          />
                        </g>
                      </svg>
                      
                      <div className="bg-white/95 backdrop-blur-sm rounded-lg px-6 py-3 shadow-md z-10 mb-4">
                        <span className="text-sm font-medium text-[#1F5E4B]" style={{ fontSize: '14px' }}>
                          3cm - 5cm depth
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-center text-sm font-medium text-[#1F5E4B]" style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '14px' }}>
                      Deep tissue penetration
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-[#1F5E4B]/5 rounded-full blur-3xl"></div>
              <div className="absolute -z-10 -top-10 -left-10 w-48 h-48 bg-white/60 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="bg-white px-6 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h2 
              className="text-3xl lg:text-5xl font-semibold text-[#1A1A1A]" 
              style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '48px' }}
            >
              Clinical vs. Home Ultrasound: The Comparison Table
            </h2>
            
            <p 
              className="text-lg text-[#5F5F5F] max-w-3xl mx-auto" 
              style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '18px', marginTop: '24px' }}
            >
              At RamaCare Polyclinic, we use advanced therapeutic ultrasound systems. Here is how they compare to the average consumer-grade "Home Ultrasound" wand.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#F5F1EA]">
                    <th className="px-6 py-5 text-left text-[16px] font-bold text-[#1A1A1A]" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
                      Feature
                    </th>
                    <th className="px-6 py-5 text-left text-[18px] font-semibold text-[#5F5F5F]" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
                      Home Ultrasound Device
                    </th>
                    <th className="px-6 py-5 text-left text-[18px] font-medium text-[#1F5E4B]" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
                      Professional Clinical Ultrasound
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      feature: 'Power Intensity',
                      home: { text: 'Fixed (Very Low)', type: 'negative' },
                      clinical: { text: 'Adjustable (0.1 to 3.0 W/cm²)', type: 'positive' }
                    },
                    {
                      feature: 'Depth of Reach',
                      home: { text: '0.5cm – 1cm (Skin level)', type: 'negative' },
                      clinical: { text: '3cm – 5cm (Deep Tissue)', type: 'positive' }
                    },
                    {
                      feature: 'Frequency Options',
                      home: { text: 'Single Frequency', type: 'negative' },
                      clinical: { text: 'Dual Frequency (1MHz & 3MHz)', type: 'positive' }
                    },
                    {
                      feature: 'DHA Regulation',
                      home: { text: 'None (Consumer Grade)', type: 'negative' },
                      clinical: { text: 'DHA-Licensed Medical Device', type: 'positive' }
                    },
                    {
                      feature: 'Safety Sensors',
                      home: { text: 'Basic', type: 'negative' },
                      clinical: { text: 'Real-time Thermal Feedback', type: 'positive' }
                    },
                    {
                      feature: 'Results',
                      home: { text: 'Temporary "Soothing"', type: 'negative' },
                      clinical: { text: 'Supports Cellular Repair & Healing (Results vary by individual)', type: 'positive' }
                    }
                  ].map((row, idx) => (
                    <tr 
                      key={idx} 
                      className={`border-b border-[#E9E2D6]/30 hover:bg-[#F5F1EA]/30 transition-colors duration-300`}
                    >
                      <td className="px-6 py-5 text-[15px] font-semibold text-[#1A1A1A]" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
                        {row.feature}
                      </td>
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-3">
                          <svg className="w-5 h-5 text-red-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                          <span className="text-[16px] text-[#5F5F5F]" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
                            {row.home.text}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-3">
                          <svg className="w-5 h-5 text-[#1F5E4B] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-[16px] text-[#1F5E4B]" style={{ fontFamily: "'Nunito Sans', sans-serif", fontWeight: 500 }}>
                            {row.clinical.text}
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="text-center mt-8">
            <button className="px-8 py-4 bg-[#1F5E4B] text-white rounded-full font-semibold hover:bg-[#164a3b] transition-all duration-300 shadow-lg inline-flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Clinical Advantage
            </button>
          </div>
        </div>
      </section>

      {/* 3 Reasons Section */}
      <section className="bg-[#F5F1EA] px-6 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 
              className="text-3xl lg:text-5xl font-semibold text-[#1A1A1A]" 
             
            >
              3 Reasons Why "Home Ultrasound" Often Fails
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                number: '1',
                icon: (
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 9V11M12 17H12.01M10.29 3.86L1.82 18C1.62566 18.3399 1.52124 18.7284 1.52124 19.1238C1.52124 19.5192 1.62566 19.9077 1.82124 20.25C2.01683 20.5923 2.29556 20.8764 2.63009 21.0749C2.96462 21.2734 3.34429 21.3798 3.73 21.38H20.27C20.6557 21.3798 21.0354 21.2734 21.37 21.0749C21.7045 20.8764 21.9832 20.5923 22.1788 20.25C22.3744 19.9077 22.4788 19.5192 22.4788 19.1238C22.4788 18.7284 22.3744 18.3399 22.18 18L13.71 3.86C13.5148 3.52696 13.2375 3.25327 12.905 3.06547C12.5725 2.87767 12.1959 2.78207 11.815 2.7885C11.4341 2.79493 11.0627 2.90316 10.739 3.10202C10.4153 3.30088 10.1508 3.58322 9.97 3.92L10.29 3.86Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
                title: 'The Frequency Fallacy',
                description: 'Most home units operate at a fixed frequency that only warms the skin. To treat a hip injury or deep back pain, you need a 1MHz frequency which has the "punch" to reach deep tissues. Home devices rarely provide this level of penetration.'
              },
              {
                number: '2',
                icon: (
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.5 14.5C8.5 16.433 10.067 18 12 18C13.933 18 15.5 16.433 15.5 14.5C15.5 12.567 12 8.5 12 8.5C12 8.5 8.5 12.567 8.5 14.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
                title: 'Risk of "Periosteal Burns"',
                description: 'Professional machines at RamaCare have built-in safety sensors. If a home device is used incorrectly (held still for too long), it can cause a "bone burn" or periosteal pain. Our DHA-licensed physiotherapists are trained in the "continuous motion" technique to ensure safety.'
              },
              {
                number: '3',
                icon: (
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
                title: 'Lack of "Cavitation" Control',
                description: 'Medical ultrasound creates "Stable Cavitation"—tiny bubbles that speed up cellular repair. Home devices are often too weak to trigger this biological process, meaning you are getting warmth but no actual healing.'
              }
            ].map((reason, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 bg-[#1F5E4B] rounded-2xl flex items-center justify-center">
                    {reason.icon}
                  </div>
                  <div className="w-10 h-10 bg-[#E9E2D6] rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-[#1F5E4B]" style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '20px' }}>
                      {reason.number}
                    </span>
                  </div>
                </div>
                
                <h3 
                  className="text-xl font-semibold text-[#1A1A1A] mb-4" 
                  style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '20px' }}
                >
                  {reason.title}
                </h3>
                
                <p 
                  className="text-base leading-relaxed" 
                  style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '16px', color: '#5F5F5F' }}
                >
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* When is Home Device Okay Section */}
      <section className="bg-white px-6 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 bg-[#E9E2D6] rounded-2xl flex items-center justify-center">
              <svg className="w-8 h-8 text-[#1F5E4B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>

          <h2 
            className="text-3xl lg:text-4xl font-semibold text-[#1A1A1A]"
          >
            When is a Home Device "Okay"?
          </h2>

          <div className="bg-[#F5F1EA] rounded-3xl p-10 lg:p-12">
            <p className="text-lg xl:text-xl text-[#5F5F5F] leading-relaxed">
              A home device is acceptable for very minor, surface-level muscle soreness or as a "placebo" for relaxation. However, if you are recovering from a sports injury at the Dubai Run or post-surgical trauma, relying on a home device can actually <span className="font-semibold text-[#1F5E4B]">delay your recovery</span>, leading to permanent scar tissue stiffness.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 bg-[#1F5E4B]/10 px-6 py-3 rounded-full">
            <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium text-[#1F5E4B]">
              Important: Medical conditions require medical-grade equipment
            </span>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[#F5F1EA] px-6 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 
              className="text-3xl lg:text-5xl font-semibold text-[#1A1A1A]"
            >
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                question: 'Are home ultrasound machines effective for sciatica?',
                answer: 'Generally, no. Sciatica involves the sciatic nerve located deep within the gluteal muscles. A home device cannot reach the depth required to reduce the inflammation around that nerve.'
              },
              {
                question: 'Is clinical ultrasound therapy painful?',
                answer: 'Not at all. While professional machines are much more powerful than home units, the treatment is painless. You will feel a soothing, deep warmth, but never a sharp sensation.'
              },
              {
                question: 'How do I know if a clinic is using professional equipment?',
                answer: 'In Dubai, always look for the DHA (Dubai Health Authority) License on the machine or in the clinic. All equipment at RamaCare is certified and regularly calibrated for medical accuracy.'
              }
            ].map((faq, idx) => (
              <FAQItem key={idx} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#1F5E4B] px-6 py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12 space-y-6">
            <h2 
              className="text-3xl lg:text-5xl font-semibold text-white"
            >
              Experience Medical-Grade Healing in Jumeirah 1
            </h2>
            
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Don't settle for "surface-level" relief. Invest in technology that actually repairs your tissue.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: (
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                title: 'Location',
                description: 'Jumeirah 1 (Near Jumeirah Terrace)'
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                ),
                title: 'Status',
                description: 'DHA Licensed Medical Facility'
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                ),
                title: 'Next Step',
                description: 'Book a Professional Assessment'
              }
            ].map((item, idx) => (
              <div 
                key={idx}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-200">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl" id="book-appointment">
            <h3 className="text-2xl font-semibold text-[#1A1A1A] mb-8 text-center">
              Request an Appointment
            </h3>

            <form className="space-y-6" onSubmit={handleFormSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#1A1A1A] mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-[#F5F1EA] rounded-xl border-2 border-transparent focus:border-[#1F5E4B] focus:bg-white transition-all duration-300 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#1A1A1A] mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    placeholder="+971 XX XXX XXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-[#F5F1EA] rounded-xl border-2 border-transparent focus:border-[#1F5E4B] focus:bg-white transition-all duration-300 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#1A1A1A] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-[#F5F1EA] rounded-xl border-2 border-transparent focus:border-[#1F5E4B] focus:bg-white transition-all duration-300 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#1A1A1A] mb-2">
                    Preferred Time
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-[#F5F1EA] rounded-xl border-2 border-transparent focus:border-[#1F5E4B] focus:bg-white transition-all duration-300 outline-none appearance-none cursor-pointer"
                  >
                    <option value="">Select a time</option>
                    <option value="morning">Morning (9 AM - 12 PM)</option>
                    <option value="afternoon">Afternoon (12 PM - 4 PM)</option>
                    <option value="evening">Evening (4 PM - 8 PM)</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-[#1A1A1A] mb-2">
                    Treatment Area
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Lower back, Shoulder"
                    value={formData.treatmentArea}
                    onChange={(e) => setFormData({ ...formData, treatmentArea: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-[#F5F1EA] rounded-xl border-2 border-transparent focus:border-[#1F5E4B] focus:bg-white transition-all duration-300 outline-none"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-[#1F5E4B] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#164a3b] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
                >
                  <Calendar className="w-5 h-5" />
                  Confirm Appointment Request
                </button>
                
                <button
                  type="button"
                  onClick={() => {
                    const message = `Hello RamaCare, I'm interested in booking an appointment for ultrasound therapy. Please help me schedule a consultation.`;
                    window.open(`https://wa.me/971566597878?text=${encodeURIComponent(message)}`, '_blank');
                  }}
                  className="flex-1 bg-white text-[#1F5E4B] border-2 border-[#1F5E4B] rounded-full px-8 py-4 font-semibold hover:bg-[#1F5E4B]/5 transition-all duration-300 flex items-center justify-center gap-2 shadow-md"
                >
                  <MessageCircle className="w-5 h-5" />
                  Book via WhatsApp Instantly
                </button>
              </div>
            </form>

            <p className="text-xs text-gray-500 text-center mt-6">
              🏥 RamaCare Polyclinic • Dubai • Licensed Medical Facility
            </p>
          </div>
        </div>
      </section>

      {/* Related Services & Disclaimer */}
      <section className="bg-white py-12 px-6 border-t border-[#E9E2D6]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl font-semibold text-[#1A1A1A] mb-5">Explore Related Physiotherapy Services</h2>
          <div className="flex flex-wrap gap-2.5">
            <Link href="/services/physiotherapy-dubai" className="text-base text-[#1F5E4B] bg-[#F0F7F4] hover:bg-[#1F5E4B] hover:text-white transition-colors px-4 py-2 rounded-full">
              Physiotherapy Dubai
            </Link>
            <Link href="/services/dry-needling-vs-massage-therapy-dubai/" className="text-base text-[#1F5E4B] bg-[#F0F7F4] hover:bg-[#1F5E4B] hover:text-white transition-colors px-4 py-2 rounded-full">
              Dry Needling vs Massage Therapy
            </Link>
            <Link href="/services/physiotherapy-vs-rest-for-back-pain-recovery/" className="text-base text-[#1F5E4B] bg-[#F0F7F4] hover:bg-[#1F5E4B] hover:text-white transition-colors px-4 py-2 rounded-full">
              Physiotherapy vs Rest for Back Pain
            </Link>
            <Link href="/services/knee-pain-treatment-dubai/" className="text-base text-[#1F5E4B] bg-[#F0F7F4] hover:bg-[#1F5E4B] hover:text-white transition-colors px-4 py-2 rounded-full">
              Knee Pain Treatment
            </Link>
            <Link href="/services/sciatica-treatment-dubai/" className="text-base text-[#1F5E4B] bg-[#F0F7F4] hover:bg-[#1F5E4B] hover:text-white transition-colors px-4 py-2 rounded-full">
              Sciatica Treatment
            </Link>
          </div>
          <p className="text-sm text-[#5F5F5F] leading-relaxed mt-8">
            <span className="font-medium text-[#1A1A1A]">Medical Disclaimer:</span> The information provided on this page is for educational purposes only and does not constitute medical advice. It is not intended to replace professional medical consultation, diagnosis, or treatment. Treatment outcomes vary by individual, and no specific results are guaranteed. Please consult a licensed physiotherapist at RamaCare Polyclinic or another qualified provider before beginning any ultrasound or physical therapy program.
          </p>
        </div>
      </section>
      
      <ContentReviewBadge doctorName="Jeena Mathew" pageSlug="professional-vs-home-ultrasound" />

      <StickyBottomBar 
        onBookNow={() => {
          const formSection = document.getElementById('book-appointment');
          if (formSection) {
            formSection.scrollIntoView({ behavior: 'smooth' });
            // Focus on first input field
            setTimeout(() => {
              const firstInput = formSection.querySelector('input');
              if (firstInput) firstInput.focus();
            }, 500);
          }
        }} 
        onWhatsApp={() => {
          const message = `Hello RamaCare, I'm interested in booking an appointment for ultrasound therapy. Please help me schedule a consultation.`;
          window.open(`https://wa.me/971566597878?text=${encodeURIComponent(message)}`, '_blank');
        }} 
      />
    </Layout>
  );
};
export default ProfessionalVsHomeUltrasoundPage;
