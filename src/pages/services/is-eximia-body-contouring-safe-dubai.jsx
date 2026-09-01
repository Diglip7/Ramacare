import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../../components/Layout';
import ContentReviewBadge from '../../../components/ContentReviewBadge';
import { useState } from 'react';
import { CheckCircle2, Calendar, ChevronDown, User, Phone, MapPin, MessageCircle } from 'lucide-react';

const EximiaSafetyPage = () => {
  const [openFaq, setOpenFaq] = useState(null);

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
      const res = await fetch('/api/appointment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source: 'EximiaSafety',
          action: 'book_appointment',
          fullName: appointmentData.fullName,
          phone: appointmentData.phone,
          email: appointmentData.email,
          treatmentArea: appointmentData.treatmentArea,
          preferredDate: appointmentData.preferredDate
        })
      });
      if (res.ok) {
        setSubmitStatus('success');
        setAppointmentData({ fullName: '', phone: '', email: '', treatmentArea: '', preferredDate: '' });
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus(null), 5000);
      }
    } catch {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/971566597878', '_blank');
  };

  const faqData = [
    {
      question: 'Is Eximia treatment safe in Dubai?',
      answer: 'Eximia is a non-invasive, CE-certified technology widely used in aesthetic clinics and considered safe when performed by trained professionals.',
    },
    {
      question: 'Are there any serious side effects?',
      answer: 'Side effects are minimal and temporary, such as mild redness or warmth in the treated area.',
    },
    {
      question: 'Can anyone undergo Eximia treatment?',
      answer: 'Most healthy individuals can undergo the treatment, but a consultation is required to check for contraindications.',
    },
    {
      question: 'Is Eximia safer than liposuction?',
      answer: 'Eximia is non-surgical and avoids anesthesia and surgical risks, making it a safer alternative for suitable candidates.',
    },
    {
      question: 'Do I need a medical consultation before treatment?',
      answer: 'Yes, a proper assessment ensures the treatment is suitable and safe for your body condition.',
    },
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalClinic',
        '@id': 'https://ramacarepolyclinic.ae/#clinic',
        name: 'RamaCare Polyclinic',
        url: 'https://ramacarepolyclinic.ae/',
        image: 'https://ramacarepolyclinic.ae/images/Is-eximia.jpg',
        priceRange: '$$',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '12 Al Dhiyafah Rd, Jumeirah Terrace Building, Ground Floor',
          addressLocality: 'Jumeirah 1, Dubai',
          addressCountry: 'AE'
        },
        medicalSpecialty: 'Aesthetic Dermatology',
        hasCredential: 'DHA Licensed'
      },
      {
        '@type': 'MedicalWebPage',
        '@id': 'https://ramacarepolyclinic.ae/services/is-eximia-body-contouring-safe-dubai/#webpage',
        url: 'https://ramacarepolyclinic.ae/services/is-eximia-body-contouring-safe-dubai/',
        name: 'Eximia Safety Guide: Side Effects & Clinical Facts | RamaCare',
        description: 'Explore Eximia treatment safety and potential side effects of Eximia Dubai. Learn why Eximia Body Contouring Dubai is a safe, non-invasive alternative to surgery.',
        inLanguage: 'en-AE',
        lastReviewed: '2026-08-29',
        medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
        about: { '@type': 'MedicalProcedure', name: 'Eximia Body Contouring' },
        reviewedBy: {
          '@type': 'Person',
          name: 'Sonita Sinaga',
          jobTitle: 'Licensed & Certified Aesthetic Therapist',
          url: 'https://ramacarepolyclinic.ae/doctors/sonita-sinaga/'
        },
        publisher: {
          '@type': 'MedicalClinic',
          name: 'RamaCare Polyclinic',
          url: 'https://ramacarepolyclinic.ae/',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '12 Al Dhiyafah Rd, Jumeirah Terrace Building, Ground Floor',
            addressLocality: 'Jumeirah 1, Dubai',
            addressCountry: 'AE'
          }
        }
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ramacarepolyclinic.ae/' },
          { '@type': 'ListItem', position: 2, name: 'Aesthetic Dermatology', item: 'https://ramacarepolyclinic.ae/services/aesthetic-dermatology-dubai/' },
          { '@type': 'ListItem', position: 3, name: 'Eximia Body Contouring', item: 'https://ramacarepolyclinic.ae/services/eximia-body-contouring-dubai/' },
          { '@type': 'ListItem', position: 4, name: 'Is Eximia Body Contouring Safe?', item: 'https://ramacarepolyclinic.ae/services/is-eximia-body-contouring-safe-dubai/' }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://ramacarepolyclinic.ae/services/is-eximia-body-contouring-safe-dubai/#faq',
        mainEntity: faqData.map((f) => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: { '@type': 'Answer', text: f.answer }
        }))
      }
    ]
  };

  return (
    <Layout>
      <Head>
        <title key="title">Eximia Safety Guide: Side Effects & Clinical Facts | RamaCare</title>
        <meta name="description" content="Explore Eximia treatment safety and potential side effects of Eximia Dubai. Learn why Eximia Body Contouring Dubai is a safe, non-invasive alternative to surgery." key="description" />
        <meta name="keywords" content="Eximia treatment safety, side effects of Eximia Dubai, Eximia Body Contouring Dubai, Non-surgical body sculpting safety, Dubai aesthetic treatment safety" />
        <link rel="canonical" href="https://ramacarepolyclinic.ae/services/is-eximia-body-contouring-safe-dubai/" key="canonical" />

        {/* Open Graph Tags */}
        <meta property="og:type" content="website" key="og:type" />
        <meta property="og:title" content="Eximia Safety Guide: Side Effects & Clinical Facts | RamaCare" key="og:title" />
        <meta property="og:description" content="Explore Eximia treatment safety and potential side effects of Eximia Dubai. Learn why Eximia Body Contouring Dubai is a safe, non-invasive alternative to surgery." key="og:description" />
        <meta property="og:url" content="https://ramacarepolyclinic.ae/services/is-eximia-body-contouring-safe-dubai/" key="og:url" />
        <meta property="og:image" content="https://ramacarepolyclinic.ae/images/Is-eximia.jpg" key="og:image" />
        <meta property="og:image:width" content="1200" key="og:image:width" />
        <meta property="og:image:height" content="630" key="og:image:height" />
        <meta property="og:image:alt" content="Eximia Body Contouring Safety Guide - RamaCare Polyclinic" key="og:image:alt" />
        <meta property="og:site_name" content="RamaCare Polyclinic" key="og:site_name" />
        <meta property="og:locale" content="en_AE" key="og:locale" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content="Eximia Safety Guide: Side Effects & Clinical Facts | RamaCare" key="twitter:title" />
        <meta name="twitter:description" content="Learn why Eximia Body Contouring Dubai is a safe, non-invasive alternative to surgery." key="twitter:description" />
        <meta name="twitter:image" content="https://ramacarepolyclinic.ae/images/Is-eximia.jpg" key="twitter:image" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaGraph)
          }}
        />
      </Head>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24" style={{ backgroundColor: '#F5F1EA' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm font-medium text-[#5F5F5F] flex-wrap">
            <Link href="/" className="hover:text-[#1F5E4B] transition-colors">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/services/aesthetic-dermatology-dubai/" className="hover:text-[#1F5E4B] transition-colors">Aesthetic Dermatology</Link>
            <span aria-hidden="true">/</span>
            <Link href="/services/eximia-body-contouring-dubai/" className="hover:text-[#1F5E4B] transition-colors">Eximia Body Contouring</Link>
            <span aria-hidden="true">/</span>
            <span className="text-[#1F5E4B]">Is Eximia Body Contouring Safe?</span>
          </nav>
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-[#1A1A1A] leading-tight mb-8" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
                Is Eximia Body Contouring Safe? Everything You Need to Know
              </h1>
              <p className="text-lg text-[#5F5F5F] leading-relaxed">
                Before undergoing any aesthetic transformation, safety is the primary concern for our patients. Unlike invasive surgeries such as Liposuction, Eximia HR77 Platinum is a non-invasive, CE-certified technology that has been used globally for years with an excellent safety profile. In this guide, we break down the clinical safety, side effects, and who should (and shouldn't) have the treatment.
              </p>
              <ul className="space-y-4 pt-4">
                {[
                  'Non-invasive & CE-certified technology',
                  'No anesthesia or surgical risks',
                  'Clinically safe fat reduction method',
                  'Trusted by patients in Dubai'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-[#1F5E4B] flex-shrink-0" />
                    <span className="text-[#1A1A1A]">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button 
                  onClick={() => document.getElementById('book-now')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                  className="px-8 py-4 bg-[#1F5E4B] text-white rounded-lg font-semibold hover:opacity-90 transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  Book Free Consultation
                </button>
                <button 
                  onClick={() => window.open('https://wa.me/971566597878', '_blank')}
                  className="px-8 py-4 bg-white text-[#1F5E4B] border-2 border-[#1F5E4B] rounded-lg hover:bg-[#F5F1EA] transition-colors flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  WhatsApp Consultation
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              {/* Decorative Blurs */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#1F5E4B]/10 rounded-full blur-3xl"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#E9E2D6] rounded-full blur-3xl"></div>
              
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/Is-eximia.jpg" 
                  alt="Eximia Body Contouring Dubai Safety" 
                  className="w-full h-[500px] object-cover" 
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F5E4B]/30 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Safe Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-4" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
              Why Eximia is a Safe Alternative to Surgery
            </h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: 'No Anesthesia',
                description: 'There is no risk of allergic reactions to sedatives.',
                icon: (
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )
              },
              {
                title: 'Non-Ionizing Energy',
                description: 'The Laserporation and Radiofrequency used are controlled and do not damage the DNA of the cells.',
                icon: (
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )
              },
              {
                title: 'DHA Compliance',
                description: 'All treatments at our clinic are performed by DHA-licensed therapists in a controlled, clinical environment.',
                icon: (
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                )
              },
              {
                title: 'No "Shelf" Effect',
                description: "Unlike CoolSculpting, which can sometimes cause uneven fat pockets, Eximia's manual vacuum-magnetic head ensures a smooth, even distribution of results.",
                icon: (
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                )
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="bg-[#F5F1EA] p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[#1F5E4B] rounded-lg flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
                  {item.title}
                </h3>
                <p className="text-[#5F5F5F] leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Side Effects Section */}
      <section className="py-20 bg-[#F5F1EA]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-8" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
              Potential Side Effects: What to Expect
            </h2>
            
            <div className="max-w-3xl mx-auto bg-[#1F5E4B]/10 border-l-4 border-[#1F5E4B] p-6 rounded-lg mb-12">
              <p className="text-[#1A1A1A] text-lg font-medium leading-relaxed">
                Side effects are rare and typically "Grade 0" (meaning they don't require medical intervention).
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: 'Redness (Erythema)',
                description: 'A temporary pinkish glow on the skin due to increased blood flow. This usually fades within 30–60 minutes.',
                icon: (
                  <svg className="w-6 h-6 !text-[#1F5E4B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                )
              },
              {
                title: 'Thirst',
                description: 'Because your body is processing liquefied fat, many patients feel a sense of thirst immediately after.',
                icon: (
                  <svg className="w-6 h-6 !text-[#1F5E4B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0a2 2 0 01-2 2H6a2 2 0 01-2-2m16 0l-1.5 1.5m-13-1.5L5 14.5" />
                  </svg>
                )
              },
              {
                title: 'Increased Urination',
                description: 'This is actually a positive sign! It means your lymphatic system is successfully flushing the fat.',
                icon: (
                  <svg className="w-6 h-6 !text-[#1F5E4B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )
              },
              {
                title: 'Skin Warmth',
                description: 'The treated area may feel warm to the touch for an hour, similar to the feeling after a deep-tissue massage.',
                icon: (
                  <svg className="w-6 h-6 !text-[#1F5E4B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                )
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="!bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex gap-6"
              >
                <div className="w-12 h-12 !bg-[#E9E2D6] rounded-lg flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-medium !text-[#1A1A1A] mb-2" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
                    {item.title}
                  </h3>
                  <p className="!text-[#5F5F5F] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contraindications Section */}
      <section className="py-20 !bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold !text-[#1A1A1A] mb-6" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
              Contraindications: Who Should Avoid Eximia?
            </h2>
            <p className="text-lg !text-[#5F5F5F] max-w-3xl mx-auto leading-relaxed">
              While safe for the general population, we prioritize patient health above all. You should avoid this treatment if you have:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
                {
                  title: 'Pregnancy or Breastfeeding',
                  description: 'We recommend waiting 3–6 months post-childbirth.',
                  icon: (
                    <svg className="w-6 h-6 !text-[#1F5E4B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  )
                },
                {
                  title: 'Implanted Devices',
                  description: 'Pacemakers or metal implants in the specific treatment area (due to the Radiofrequency and Magnetic energy).',
                  icon: (
                    <svg className="w-6 h-6 !text-[#1F5E4B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  )
                },
                {
                  title: 'Active Skin Infections',
                  description: 'Open wounds or severe dermatitis in the target area.',
                  icon: (
                    <svg className="w-6 h-6 !text-[#1F5E4B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  )
                },
                {
                  title: 'Major Organ Health Issues',
                  description: 'Severe kidney or liver disease (as these organs are responsible for processing the released fat).',
                  icon: (
                    <svg className="w-6 h-6 !text-[#1F5E4B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                  )
                }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="!bg-[#F5F1EA] p-8 rounded-xl border-2 border-[#E9E2D6] hover:border-[#1F5E4B] transition-all duration-300 flex items-start gap-6"
                >
                  <div className="w-12 h-12 !bg-white rounded-lg flex items-center justify-center flex-shrink-0 border border-[#E9E2D6] shadow-sm">
                    {item.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <svg className="w-5 h-5 !text-[#1F5E4B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" strokeWidth="2"/>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 16v-4m0-4h.01" />
                      </svg>
                      <h3 className="text-xl font-medium !text-[#1A1A1A]" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
                        {item.title}
                      </h3>
                    </div>
                    <p className="!text-[#5F5F5F] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* The Safety Consultation Section */}
      <section className="py-20 !bg-[#F5F1EA]">
        <div className="container mx-auto px-4 text-center">
          <div className="w-20 h-20 !bg-[#1F5E4B] rounded-full flex items-center justify-center mx-auto mb-8">
            <svg className="w-10 h-10 !text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
              <circle cx="9" cy="7" r="4" strokeWidth="2" />
              <polyline points="16 11 18 13 22 9" strokeWidth="2" />
            </svg>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold !text-[#1A1A1A] mb-8" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
            The Safety Consultation
          </h2>
          <div className="max-w-4xl mx-auto !bg-white p-10 rounded-2xl shadow-lg border border-[#E9E2D6]">
            <p className="text-lg !text-[#5F5F5F] leading-relaxed max-w-3xl mx-auto">
              Every patient at <span className="!text-[#1F5E4B] font-medium">RamaCare</span> undergoes a pre-treatment screening. We assess your medical history and body mass index (BMI) to ensure Eximia is the safest and most effective choice for your body type.
            </p>
          </div>
          <div className="flex justify-center gap-2 mt-12">
            <div className="w-2 h-2 !bg-[#1F5E4B] rounded-full"></div>
            <div className="w-2 h-2 !bg-[#1F5E4B] rounded-full opacity-50"></div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 !bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold !text-[#1A1A1A] mb-4" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
              Frequently Asked Questions
            </h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="!bg-[#F5F1EA] rounded-xl border border-[#E9E2D6] hover:border-[#1F5E4B] overflow-hidden transition-all duration-300">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left group hover:!bg-white transition-colors duration-200"
                >
                  <span className="text-lg font-medium !text-[#1A1A1A] pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 !text-[#1F5E4B] transition-transform duration-300 ${openFaq === index ? 'transform rotate-180' : ''}`}
                  />
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${openFaq === index ? 'max-h-96' : 'max-h-0'}`}
                >
                  <div className="px-6 pb-5 !text-[#5F5F5F] leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Book Your Safe Body Transformation Section */}
      <section id="book-now" className="py-20 bg-gradient-to-br from-[#1F5E4B] to-[#1a4d3d] relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6" style={{ fontFamily: "'Nunito Sans', sans-serif", fontWeight: 800 }}>
                Book Your Safe Body Transformation
              </h3>
              <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
                Ready to reshape your body with peace of mind? Visit our main{' '}
                <a href="https://ramacarepolyclinic.ae/services/eximia-body-contouring-dubai/" className="text-white font-bold border-b-2 border-white/50 hover:border-white transition-all">
                  Eximia Body Contouring Dubai
                </a>{' '}
                page to learn about our clinical protocols and book your safety assessment today.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-10 text-left">
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
                  <div>
                    <label className="flex items-center gap-2 mb-2 text-base font-medium text-[#1A1A1A]">
                      <User className="w-5 h-5 text-[#1F5E4B]" />
                      Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={appointmentData.fullName}
                      onChange={handleAppointmentChange}
                      onBlur={handleAppointmentBlur}
                      placeholder="Enter your full name"
                      className={`w-full px-4 py-3 bg-[#F5F1EA] rounded-lg border-2 border-[#E9E2D6] focus:border-[#1F5E4B] focus:outline-none transition-colors text-[#1A1A1A] placeholder:text-gray-400 ${appointmentErrors.fullName ? 'border-red-400' : ''}`}
                    />
                    {appointmentErrors.fullName && <p className="text-red-500 text-xs mt-1">{appointmentErrors.fullName}</p>}
                  </div>
                  <div>
                    <label className="flex items-center gap-2 mb-2 text-base font-medium text-[#1A1A1A]">
                      <Phone className="w-5 h-5 text-[#1F5E4B]" />
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={appointmentData.phone}
                      onChange={handleAppointmentChange}
                      onBlur={handleAppointmentBlur}
                      placeholder="+971 XX XXX XXXX"
                      className={`w-full px-4 py-3 bg-[#F5F1EA] rounded-lg border-2 border-[#E9E2D6] focus:border-[#1F5E4B] focus:outline-none transition-colors text-[#1A1A1A] placeholder:text-gray-400 ${appointmentErrors.phone ? 'border-red-400' : ''}`}
                    />
                    {appointmentErrors.phone && <p className="text-red-500 text-xs mt-1">{appointmentErrors.phone}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="flex items-center gap-2 mb-2 text-base font-medium text-[#1A1A1A]">
                      <svg className="w-5 h-5 text-[#1F5E4B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                      className={`w-full px-4 py-3 bg-[#F5F1EA] rounded-lg border-2 border-[#E9E2D6] focus:border-[#1F5E4B] focus:outline-none transition-colors text-[#1A1A1A] placeholder:text-gray-400 ${appointmentErrors.email ? 'border-red-400' : ''}`}
                    />
                    {appointmentErrors.email && <p className="text-red-500 text-xs mt-1">{appointmentErrors.email}</p>}
                  </div>
                  <div>
                    <label className="flex items-center gap-2 mb-2 text-base font-medium text-[#1A1A1A]">
                      <MapPin className="w-5 h-5 text-[#1F5E4B]" />
                      Treatment Area
                    </label>
                    <select
                      name="treatmentArea"
                      value={appointmentData.treatmentArea}
                      onChange={handleAppointmentChange}
                      onBlur={handleAppointmentBlur}
                      className={`w-full px-4 py-3 bg-[#F5F1EA] rounded-lg border-2 border-[#E9E2D6] focus:border-[#1F5E4B] focus:outline-none transition-colors text-[#1A1A1A] cursor-pointer ${appointmentErrors.treatmentArea ? 'border-red-400' : ''}`}
                    >
                      <option value="">Select treatment area</option>
                      <option value="Abdomen">Abdomen</option>
                      <option value="Flanks/Love Handles">Flanks/Love Handles</option>
                      <option value="Thighs">Thighs</option>
                      <option value="Arms">Arms</option>
                      <option value="Buttocks">Buttocks</option>
                      <option value="Multiple Areas">Multiple Areas</option>
                    </select>
                    {appointmentErrors.treatmentArea && <p className="text-red-500 text-xs mt-1">{appointmentErrors.treatmentArea}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="flex items-center gap-2 mb-2 text-base font-medium text-[#1A1A1A]">
                      <Calendar className="w-5 h-5 text-[#1F5E4B]" />
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      name="preferredDate"
                      value={appointmentData.preferredDate}
                      onChange={handleAppointmentChange}
                      onBlur={handleAppointmentBlur}
                      min={new Date().toISOString().split('T')[0]}
                      className={`w-full px-4 py-3 bg-[#F5F1EA] rounded-lg border-2 border-[#E9E2D6] focus:border-[#1F5E4B] focus:outline-none transition-colors text-[#1A1A1A] cursor-pointer ${appointmentErrors.preferredDate ? 'border-red-400' : ''}`}
                    />
                    {appointmentErrors.preferredDate && <p className="text-red-500 text-xs mt-1">{appointmentErrors.preferredDate}</p>}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 px-8 py-4 bg-[#1F5E4B] text-white rounded-lg font-semibold hover:bg-[#1a4d3d] transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    {isSubmitting ? 'Submitting...' : 'Confirm Appointment Request'}
                  </button>
                  <button
                    type="button"
                    onClick={handleWhatsAppClick}
                    className="flex-1 px-8 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-lg font-semibold transition-colors shadow-lg flex items-center justify-center gap-2"
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
        </div>
      </section>

      {/* Related Services & Disclaimer */}
      <section className="bg-white py-12 px-6 border-t border-[#E9E2D6]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl font-semibold text-[#1A1A1A] mb-5">Explore Related Aesthetic Services</h2>
          <div className="flex flex-wrap gap-2.5">
            <Link href="/services/aesthetic-dermatology-dubai/" className="text-base text-[#1F5E4B] bg-[#F0F7F4] hover:bg-[#1F5E4B] hover:text-white transition-colors px-4 py-2 rounded-full">
              Aesthetic Dermatology Dubai
            </Link>
            <Link href="/services/eximia-body-contouring-dubai/" className="text-base text-[#1F5E4B] bg-[#F0F7F4] hover:bg-[#1F5E4B] hover:text-white transition-colors px-4 py-2 rounded-full">
              Eximia Body Contouring Dubai
            </Link>
            <Link href="/services/how-many-eximia-sessions-needed-dubai/" className="text-base text-[#1F5E4B] bg-[#F0F7F4] hover:bg-[#1F5E4B] hover:text-white transition-colors px-4 py-2 rounded-full">
              How Many Eximia Sessions Needed?
            </Link>
            <Link href="/services/how-eximia-body-contouring-works-dubai/" className="text-base text-[#1F5E4B] bg-[#F0F7F4] hover:bg-[#1F5E4B] hover:text-white transition-colors px-4 py-2 rounded-full">
              How Eximia Works
            </Link>
          </div>
          <p className="text-sm text-[#5F5F5F] leading-relaxed mt-8">
            <span className="font-medium text-[#1A1A1A]">Medical Disclaimer:</span> The clinical safety information and contraindication guidelines provided on this page are for general educational purposes regarding Eximia HR77 Platinum. While non-invasive and CE-certified, individual suitability depends on personal health history and medical evaluation. Patients with contraindications should consult a licensed aesthetic therapist at RamaCare Polyclinic before proceeding with treatment.
          </p>
        </div>
      </section>

      <ContentReviewBadge doctorName="Sonita Sinaga" pageSlug="is-eximia-body-contouring-safe-dubai" />
    </Layout>
  );
};

export default EximiaSafetyPage;
