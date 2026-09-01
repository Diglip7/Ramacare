import Layout from '../../../components/Layout';
import ContentReviewBadge from '../../../components/ContentReviewBadge';
import Head from "next/head";
import Image from "next/image";
import { useState } from 'react';

// Before/After Card Component
function BeforeAfterCard({ item }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const cardRef = useState(null);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);
  const handleMouseMove = (e) => {
    if (!isDragging || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    setSliderPosition(Math.min(100, Math.max(0, x)));
  };

  const handleTouchMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.touches[0].clientX - rect.left) / rect.width) * 100;
    setSliderPosition(Math.min(100, Math.max(0, x)));
  };

  return (
    <div className="group relative rounded-2xl overflow-hidden shadow-lg">
      {/* Before/After Slider Container */}
      <div 
        ref={cardRef}
        className="relative w-full h-[400px] overflow-hidden cursor-ew-resize select-none"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      >
        {/* After Image (Full Width Background) */}
        <img 
          src={item.afterImage} 
          alt="After" 
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Before Image (Clipped) */}
        <div 
          className="absolute inset-0 w-full h-full overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img 
            src={item.beforeImage} 
            alt="Before" 
            className="w-full h-full object-cover grayscale"
          />
        </div>

        {/* Slider Handle */}
        <div
          className="absolute inset-y-0 w-[56px] pointer-events-none"
          style={{ left: `calc(${sliderPosition}% - 28px)` }}
        >
          {/* Vertical Line Container - Full Height */}
          <div className="absolute inset-x-0 top-0 bottom-0 flex justify-center">
            <div 
              className="w-[2px] h-full bg-current opacity-100"
              style={{ 
                boxShadow: 'rgba(0, 0, 0, 0.5) 0px 0px 4px',
                backgroundColor: 'currentColor'
              }}
            ></div>
          </div>

          {/* Center Handle Button */}
          <button
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex place-content-center place-items-center gap-[8px] px-0 shrink-0 w-[56px] h-[56px] rounded-full border-solid border-[2px] pointer-events-auto backdrop-blur-[7px] cursor-ew-resize"
            style={{ 
              backgroundColor: 'rgba(0, 0, 0, 0.125)',
              boxShadow: 'rgba(0, 0, 0, 0.35) 0px 0px 4px',
              borderColor: 'rgba(255, 255, 255, 0.2)'
            }}
            aria-label="Drag to move or focus and use arrow keys"
            role="slider"
            aria-valuenow={Math.round(sliderPosition)}
            aria-valuemin="0"
            aria-valuemax="100"
          >
            {/* Left Arrow Triangle */}
            <div 
              className="w-0 h-0"
              style={{ 
                borderTop: '8px solid transparent',
                borderRight: '10px solid currentColor',
                borderBottom: '8px solid transparent',
                color: 'rgb(255, 255, 255)'
              }}
            ></div>

            {/* Right Arrow Triangle */}
            <div 
              className="w-0 h-0 transform rotate-180"
              style={{ 
                borderTop: '8px solid transparent',
                borderRight: '10px solid currentColor',
                borderBottom: '8px solid transparent',
                color: 'rgb(255, 255, 255)'
              }}
            ></div>
          </button>
        </div>

        {/* Before Label */}
        <div className="absolute left-4 top-4 rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-[#1A1A1A] backdrop-blur-sm shadow-lg">
          <span>Before</span>
        </div>

        {/* After Label */}
        <div className="absolute right-4 top-4 rounded-full bg-[#1F5E4B]/90 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm shadow-lg">
          <span>After</span>
        </div>

        {/* Measurement Badge */}
        <div className="absolute bottom-4 right-4">
          <span className="px-4 py-2 bg-white/90 backdrop-blur-sm text-[#1A1A1A] text-sm rounded-full shadow-lg">
            {item.measurement}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function EximiaBeforeAfterPage() {
  const [filter, setFilter] = useState('all');
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  const containerRef = useState(null);
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

  const filteredGallery = filter === 'all' 
    ? galleryData 
    : galleryData.filter(item => item.category === filter);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/971566597878', '_blank');
  };

  const scrollToForm = () => {
    document.getElementById('appointment-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    e.preventDefault();
  };

  const handleTouchStart = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e) => {
    if (!isDragging || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.touches[0].clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setSliderPosition(percentage);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

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
    setAppointmentData(prev => ({
      ...prev,
      [name]: value
    }));
    setAppointmentErrors(prev => {
      const newErrors = { ...prev };
      const error = validateAppointmentField(name, value);
      if (error) newErrors[name] = error;
      else delete newErrors[name];
      return newErrors;
    });
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
          source: 'EximiaBeforeAfter',
          action: 'book_appointment',
          fullName: appointmentData.fullName,
          phone: appointmentData.phone,
          email: appointmentData.email || 'not-provided@example.com',
          treatmentArea: appointmentData.treatmentArea,
          preferredDate: appointmentData.preferredDate
        })
      });
      
      if (res.ok) {
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
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <Head>
        <title key="title">Eximia Results: Real Patient Before and After | RamaCare</title>
        <meta name="description" content="See real Eximia body contouring results in Dubai. Most patients see 1-3 cm reduction after first session with zero downtime." key="description" />
        
        
        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "MedicalWebPage",
                  "name": "Eximia Before and After Results Dubai",
                  "description": "Real Eximia body contouring before and after results from RamaCare Polyclinic Dubai",
                  "url": "https://ramacare.ae/eximia-before-and-after-results-dubai"
                },
                {
                  "@type": "MedicalProcedure",
                  "name": "Eximia Body Contouring Dubai",
                  "description": "Non-surgical body contouring with immediate inch loss and skin tightening",
                  "provider": {
                    "@type": "MedicalClinic",
                    "name": "RamaCare Polyclinic",
                    "address": {
                      "@type": "PostalAddress",
                      "streetAddress": "Shop #15, Building 6, Al Meydan Road, Opposite Safa Park",
                      "addressLocality": "Dubai",
                      "addressRegion": "Dubai",
                      "postalCode": "393558",
                      "addressCountry": "AE"
                    },
                    "telephone": "+971 56 659 7878"
                  },
                  "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Eximia Treatments",
                    "itemListElement": [
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "MedicalProcedure",
                          "name": "Eximia Body Contouring"
                        }
                      }
                    ]
                  }
                }
              ]
            })
          }}
        />
      </Head>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#F5F1EA] to-[#E9E2D6]">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"></div>
        
        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            
            {/* Left Content */}
            <div>
              <h1 className="text-4xl font-bold leading-tight text-[#1A1A1A] lg:text-5xl xl:text-6xl mb-6">
                Eximia Before and After: What Results Can You Really Expect?
              </h1>
              
              <p className="mb-8 text-lg leading-relaxed text-[#5F5F5F]">
                When choosing a body contouring treatment in Dubai, the most important question is: Does it actually work? Unlike traditional methods, Eximia HR77 Platinum provides a 4-stage approach that delivers both immediate "inch loss" and long-term skin tightening. Most patients at our clinic see a measurable difference of 1–3 cm after their very first session.
              </p>

              {/* Benefits Grid */}
              <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 mb-8">
                <div className="flex items-start gap-3">
                  <svg className="mt-1 h-5 w-5 flex-shrink-0 text-[#1F5E4B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <span className="text-[#1A1A1A] text-sm">Visible contour improvement</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="mt-1 h-5 w-5 flex-shrink-0 text-[#1F5E4B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <span className="text-[#1A1A1A] text-sm">1–3 cm reduction possible</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="mt-1 h-5 w-5 flex-shrink-0 text-[#1F5E4B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <span className="text-[#1A1A1A] text-sm">Non-surgical body sculpting</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="mt-1 h-5 w-5 flex-shrink-0 text-[#1F5E4B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <span className="text-[#1A1A1A] text-sm">No downtime</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-4 sm:flex-row">
                <button 
                  onClick={scrollToForm}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1F5E4B] px-8 py-4 text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:translate-x-[0.469264px]"
                >
                  <svg className="h-5 w-5 lucide lucide-calendar" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
                    <line x1="16" x2="16" y1="2" y2="6"/>
                    <line x1="8" x2="8" y1="2" y2="6"/>
                    <line x1="3" x2="21" y1="10" y2="10"/>
                  </svg>
                  Book Free Consultation
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </button>
                <button 
                  onClick={() => window.open('https://wa.me/971566597878', '_blank')}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-[#1F5E4B] shadow-md transition-all duration-300 hover:shadow-lg border-2 border-[#1F5E4B]"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  WhatsApp Consultation
                </button>
              </div>
            </div>

            {/* Right Content - Before/After Slider */}
            <div className="relative">
              <div 
                ref={containerRef}
                className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-white shadow-2xl lg:aspect-square"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleMouseUp}
              >
                {/* After Image (Background) */}
                <div className="absolute inset-0">
                  <Image
                    src="/images/After1.jpeg"
                    alt="Eximia after treatment"
                    fill
                    className="object-cover select-none"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    draggable={false}
                  />
                </div>

                {/* Before Image (Clipped) */}
                <div 
                  className="absolute inset-0 overflow-hidden"
                  style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                >
                  <Image
                    src="/images/Before1.jpeg"
                    alt="Eximia before treatment"
                    fill
                    className="object-cover select-none"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    draggable={false}
                  />
                </div>

                {/* Slider Handle */}
                <div
                  className="absolute inset-y-0 w-[56px] pointer-events-none"
                  style={{ left: `calc(${sliderPosition}% - 28px)` }}
                >
                  {/* Vertical Line Container - Full Height */}
                  <div className="absolute inset-x-0 top-0 bottom-0 flex justify-center">
                    <div 
                      className="w-[2px] h-full bg-current opacity-100"
                      style={{ 
                        boxShadow: 'rgba(0, 0, 0, 0.5) 0px 0px 4px',
                        backgroundColor: 'currentColor'
                      }}
                    ></div>
                  </div>

                  {/* Center Handle Button */}
                  <button
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex place-content-center place-items-center gap-[8px] px-0 shrink-0 w-[56px] h-[56px] rounded-full border-solid border-[2px] pointer-events-auto backdrop-blur-[7px] cursor-ew-resize"
                    style={{ 
                      backgroundColor: 'rgba(0, 0, 0, 0.125)',
                      boxShadow: 'rgba(0, 0, 0, 0.35) 0px 0px 4px',
                      borderColor: 'rgba(255, 255, 255, 0.2)'
                    }}
                    aria-label="Drag to move or focus and use arrow keys"
                    role="slider"
                    aria-valuenow={Math.round(sliderPosition)}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    {/* Left Arrow Triangle */}
                    <div 
                      className="w-0 h-0"
                      style={{ 
                        borderTop: '8px solid transparent',
                        borderRight: '10px solid currentColor',
                        borderBottom: '8px solid transparent',
                        color: 'rgb(255, 255, 255)'
                      }}
                    ></div>

                    {/* Right Arrow Triangle */}
                    <div 
                      className="w-0 h-0 transform rotate-180"
                      style={{ 
                        borderTop: '8px solid transparent',
                        borderRight: '10px solid currentColor',
                        borderBottom: '8px solid transparent',
                        color: 'rgb(255, 255, 255)'
                      }}
                    ></div>
                  </button>
                </div>

                {/* Before Label */}
                <div className="absolute left-4 top-4 rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-[#1A1A1A] backdrop-blur-sm shadow-lg">
                  <span>Before</span>
                </div>

                {/* After Label */}
                <div className="absolute right-4 top-4 rounded-full bg-[#1F5E4B]/90 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm shadow-lg">
                  <span>After</span>
                </div>

                {/* Results Badge */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 transform">
                  <div className="rounded-2xl bg-white px-6 py-4 text-center shadow-xl border-2 border-[#E9E2D6]">
                    <p className="text-[#1F5E4B] text-2xl block">1-3 cm</p>
                    <p className="text-sm text-[#5F5F5F]">Average reduction per session</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Results Timeline Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl lg:text-5xl text-[#1A1A1A] mb-16 text-center font-bold">
            The Results Timeline: What Happens and When?
          </h2>

          {/* Timeline Cards Grid */}
          <div className="grid gap-8 md:grid-cols-3 relative">
            {/* Connection Line - Desktop Only */}
            <div className="hidden md:block absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-[#1F5E4B]/20 via-[#1F5E4B]/50 to-[#1F5E4B]/20 z-0"></div>

            {/* Card 1 - Immediate Results */}
            <div className="relative" style={{ opacity: 1, transform: 'none' }}>
              <div className="bg-[#F5F1EA] rounded-2xl pt-8 pb-8 px-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full border-t-4 border-[#1F5E4B] relative group z-10">
                {/* Icon Badge */}
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-[#1F5E4B] rounded-full p-4 shadow-xl transition-all duration-300 group-hover:rotate-180">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                </div>

                {/* Step Number */}
                <div className="absolute top-4 right-4 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-sm z-20">
                  <span className="text-[#1F5E4B] font-semibold">1</span>
                </div>

                <div className="mt-6">
                  <h3 className="text-xl text-[#1A1A1A] mb-4 text-center font-bold">
                    Immediate (After 1 Session)
                  </h3>
                  <p className="text-[#5F5F5F] leading-relaxed text-center text-base">
                    Reduced bloating and a "tighter" feeling in the skin due to Microdermolift and oxygenation.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 - 7-Day Mark */}
            <div className="relative" style={{ opacity: 1, transform: 'none' }}>
              <div className="bg-[#F5F1EA] rounded-2xl pt-8 pb-8 px-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full border-t-4 border-[#1F5E4B] relative group z-10">
                {/* Icon Badge */}
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-[#1F5E4B] rounded-full p-4 shadow-xl transition-all duration-300 group-hover:rotate-180">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                    </svg>
                  </div>
                </div>

                {/* Step Number */}
                <div className="absolute top-4 right-4 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-sm z-20">
                  <span className="text-[#1F5E4B] font-semibold">2</span>
                </div>

                <div className="mt-6">
                  <h3 className="text-xl text-[#1A1A1A] mb-4 text-center font-bold">
                    The 7-Day Mark (After 2-3 Sessions)
                  </h3>
                  <p className="text-[#5F5F5F] leading-relaxed text-center text-base">
                    Noticeable reduction in localized fat pockets. The "orange peel" texture of cellulite begins to smooth out.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 - Transformation Phase */}
            <div className="relative" style={{ opacity: 1, transform: 'none' }}>
              <div className="bg-[#F5F1EA] rounded-2xl pt-8 pb-8 px-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full border-t-4 border-[#1F5E4B] relative group z-10">
                {/* Icon Badge */}
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-[#1F5E4B] rounded-full p-4 shadow-xl transition-all duration-300 group-hover:rotate-180">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
                    </svg>
                  </div>
                </div>

                {/* Step Number */}
                <div className="absolute top-4 right-4 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-sm z-20">
                  <span className="text-[#1F5E4B] font-semibold">3</span>
                </div>

                <div className="mt-6">
                  <h3 className="text-xl text-[#1A1A1A] mb-4 text-center font-bold">
                    The Transformation Phase (6–10 Sessions)
                  </h3>
                  <p className="text-[#5F5F5F] leading-relaxed text-center text-base">
                    This is where the Radioporation technology has fully stimulated new collagen. Patients typically see a significant change in their silhouette and clothing size.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline Progress Bar */}
          <div className="mt-16 max-w-2xl mx-auto">
            <div className="h-2 bg-[#1F5E4B] rounded-full w-full"></div>
            <div className="flex justify-between mt-4 text-sm text-[#5F5F5F]">
              <span>Session 1</span>
              <span>Sessions 2-3</span>
              <span>Sessions 6-10</span>
            </div>
          </div>
        </div>
      </section>

      {/* Clinically Observed Improvements Section */}
      <section className="py-20 bg-[#F5F1EA]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl lg:text-5xl text-[#1A1A1A] mb-4 text-center font-bold">
            Clinically Observed Improvements
          </h2>

          {/* Table Container */}
          <div className="overflow-hidden rounded-2xl shadow-xl bg-white mt-12">
            <table className="min-w-full">
              {/* Table Header */}
              <thead className="bg-[#E9E2D6]">
                <tr>
                  <th className="px-8 py-5 text-left text-[#1A1A1A] text-sm font-semibold">Feature</th>
                  <th className="px-8 py-5 text-left text-[#1A1A1A] text-sm font-semibold">What you will see</th>
                  <th className="px-8 py-5 text-left text-[#1A1A1A] text-sm font-semibold">Expected Outcome</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E9E2D6]">
                {/* Row 1 - Fat Reduction */}
                <tr className="bg-white hover:bg-[#F5F1EA] transition-colors duration-200">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-[#1F5E4B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                      <span className="text-[#1A1A1A] text-sm">Fat Reduction</span>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-sm text-[#5F5F5F]">Slimmer waist, arms, or thighs</td>
                  <td className="px-8 py-6">
                    <span className="inline-flex items-center rounded-full bg-[#1F5E4B]/10 px-4 py-2 text-sm text-[#1F5E4B]">
                      3–7 cm loss over a full course
                    </span>
                  </td>
                </tr>

                {/* Row 2 - Cellulite */}
                <tr className="bg-white hover:bg-[#F5F1EA] transition-colors duration-200">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-[#1F5E4B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                      <span className="text-[#1A1A1A] text-sm">Cellulite</span>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-sm text-[#5F5F5F]">Smoother, firmer skin surface</td>
                  <td className="px-8 py-6">
                    <span className="inline-flex items-center rounded-full bg-[#1F5E4B]/10 px-4 py-2 text-sm text-[#1F5E4B]">
                      Visible reduction in Grade I–III cellulite
                    </span>
                  </td>
                </tr>

                {/* Row 3 - Skin Laxity */}
                <tr className="bg-white hover:bg-[#F5F1EA] transition-colors duration-200">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-[#1F5E4B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                      <span className="text-[#1A1A1A] text-sm">Skin Laxity</span>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-sm text-[#5F5F5F]">"Lifted" appearance</td>
                  <td className="px-8 py-6">
                    <span className="inline-flex items-center rounded-full bg-[#1F5E4B]/10 px-4 py-2 text-sm text-[#1F5E4B]">
                      Improved elasticity in sagging areas
                    </span>
                  </td>
                </tr>

                {/* Row 4 - Water Retention */}
                <tr className="bg-white hover:bg-[#F5F1EA] transition-colors duration-200">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-[#1F5E4B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                      <span className="text-[#1A1A1A] text-sm">Water Retention</span>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-sm text-[#5F5F5F]">Less "puffiness"</td>
                  <td className="px-8 py-6">
                    <span className="inline-flex items-center rounded-full bg-[#1F5E4B]/10 px-4 py-2 text-sm text-[#1F5E4B]">
                      Immediate relief from heavy-leg sensation
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Note Box */}
          <div className="mt-12 max-w-3xl mx-auto">
            <div className="rounded-2xl bg-white p-8 shadow-lg border-l-4 border-[#1F5E4B]">
              <p className="text-[#5F5F5F] leading-relaxed text-sm">
                <span className="text-[#1F5E4B] font-semibold">Note:</span> Individual results may vary based on body composition, lifestyle, and adherence to treatment protocol. These improvements are typically observed across a full treatment course.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Maximize Your Eximia Results Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl lg:text-5xl text-[#1A1A1A] mb-6 text-center font-bold">
            How to Maximize Your Eximia Results
          </h2>
          <p className="text-lg text-[#5F5F5F] max-w-3xl mx-auto mb-16 text-center">
            To move your results from "good" to "incredible," we recommend the following 2026 "Bio-hacking" tips for our Dubai patients.
          </p>

          {/* Tips Grid */}
          <div className="grid gap-8 md:grid-cols-3">
            {/* Card 1 - Hydration */}
            <div className="group bg-[#F5F1EA] rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden h-full">
              {/* Background Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>

              {/* Icon */}
              <div className="mb-6 inline-flex items-center justify-center">
                <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-4 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
                  </svg>
                </div>
              </div>

              <h3 className="text-xl text-[#1A1A1A] mb-4 font-bold">Hydration is Mandatory</h3>
              <p className="text-[#5F5F5F] leading-relaxed">
                Drink 2–3 liters of water daily. Eximia "liquefies" fat, but your lymphatic system needs water to flush it out.
              </p>

              {/* Decorative Icon Background */}
              <div className="absolute bottom-0 right-0 w-32 h-32 opacity-5">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" className="w-full h-full text-[#1F5E4B]">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 6v6l4 2"/>
                </svg>
              </div>
            </div>

            {/* Card 2 - Walking */}
            <div className="group bg-[#F5F1EA] rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden h-full">
              {/* Background Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>

              {/* Icon */}
              <div className="mb-6 inline-flex items-center justify-center">
                <div className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl p-4 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-3-9 3-9M15 20l3-9-3-9"/>
                  </svg>
                </div>
              </div>

              <h3 className="text-xl text-[#1A1A1A] mb-4 font-bold">The 30-Minute Walk</h3>
              <p className="text-[#5F5F5F] leading-relaxed">
                Engage in light cardio immediately after your treatment to boost metabolism.
              </p>

              {/* Decorative Icon Background */}
              <div className="absolute bottom-0 right-0 w-32 h-32 opacity-5">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" className="w-full h-full text-[#1F5E4B]">
                  <path d="M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 11 3.8 11 8c0 2.85-.26 4.88-1.5 6.62M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 13 7.8 13 12c0 2.85.26 4.88 1.5 6.62M8 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C2.63 6 1 7.8 1 12c0 2.85.26 4.88 1.5 6.62M16 16v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C10.63 2 9 3.8 9 8c0 2.85.26 4.88 1.5 6.62"/>
                </svg>
              </div>
            </div>

            {/* Card 3 - Avoid Caffeine/Alcohol */}
            <div className="group bg-[#F5F1EA] rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden h-full">
              {/* Background Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-orange-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>

              {/* Icon */}
              <div className="mb-6 inline-flex items-center justify-center">
                <div className="bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl p-4 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" strokeWidth="2"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 9l6 6M15 9l-6 6"/>
                  </svg>
                </div>
              </div>

              <h3 className="text-xl text-[#1A1A1A] mb-4 font-bold">Avoid Caffeine / Alcohol</h3>
              <p className="text-[#5F5F5F] leading-relaxed">
                For 24 hours post-treatment, avoid these to allow the body to process fat cells efficiently.
              </p>

              {/* Decorative Icon Background */}
              <div className="absolute bottom-0 right-0 w-32 h-32 opacity-5">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" className="w-full h-full text-[#1F5E4B]">
                  <circle cx="12" cy="12" r="9"/>
                  <path d="M4.93 4.93l14.14 14.14"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Pro Tip Box */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-[#1F5E4B] to-[#2d8a6e] rounded-2xl p-8 shadow-2xl text-white">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="bg-white/20 rounded-full p-3 backdrop-blur-sm">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"/>
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Pro Tip</h4>
                  <p className="leading-relaxed opacity-90">
                    Combining all three recommendations can accelerate your results by up to 40%. Many of our Dubai clients report seeing visible changes within the first week when following this protocol.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Is it a Permanent Solution Section */}
      <section className="py-20 bg-[#F5F1EA]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-3xl lg:text-5xl text-[#1A1A1A] mb-6 font-medium leading-tight">
                Is it a Permanent Solution?
              </h2>
              <p className="text-lg text-[#5F5F5F] leading-relaxed mb-8">
                Yes—the fat cells treated by the Laserporation phase are effectively metabolized. However, to maintain your new silhouette in a lifestyle-heavy city like Dubai, a balanced diet is essential. Eximia is a "body sculptor," not a weight-loss tool.
              </p>

              <div className="space-y-4">
                {/* Point 1 */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#1F5E4B] rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                    </svg>
                  </div>
                  <p className="text-[#1A1A1A] pt-2">Treated fat cells are permanently metabolized</p>
                </div>

                {/* Point 2 */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#1F5E4B] rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                    </svg>
                  </div>
                  <p className="text-[#1A1A1A] pt-2">Long-term collagen stimulation</p>
                </div>

                {/* Point 3 */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#1F5E4B] rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                    </svg>
                  </div>
                  <p className="text-[#1A1A1A] pt-2">Sustainable results with healthy lifestyle</p>
                </div>
              </div>
            </div>

            {/* Right Card - Key to Longevity */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <div className="flex items-start gap-4 mb-8">
                <div className="flex-shrink-0 w-14 h-14 bg-[#E8F1ED] rounded-full flex items-center justify-center">
                  <svg className="w-7 h-7 text-[#1F5E4B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl text-[#1A1A1A] mb-2 font-medium">Key to Longevity</h3>
                  <p className="text-[#5F5F5F]">Healthy lifestyle + hydration improves treatment longevity</p>
                </div>
              </div>

              {/* Progress Bars */}
              <div className="space-y-6">
                {/* Treatment Effectiveness */}
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-[#1A1A1A]">Treatment Effectiveness</span>
                    <span className="text-[#1F5E4B] font-semibold text-sm">95%</span>
                  </div>
                  <div className="h-2 bg-[#E9E2D6] rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#1F5E4B] to-[#2d8a6e] rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>

                {/* Results Sustainability */}
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-[#1A1A1A]">Results Sustainability</span>
                    <span className="text-[#1F5E4B] font-semibold text-sm">85%</span>
                  </div>
                  <div className="h-2 bg-[#E9E2D6] rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#1F5E4B] to-[#2d8a6e] rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>

                {/* Patient Satisfaction */}
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-[#1A1A1A]">Patient Satisfaction</span>
                    <span className="text-[#1F5E4B] font-semibold text-sm">98%</span>
                  </div>
                  <div className="h-2 bg-[#E9E2D6] rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#1F5E4B] to-[#2d8a6e] rounded-full" style={{ width: '98%' }}></div>
                  </div>
                </div>
              </div>

              {/* Quote */}
              <div className="mt-8 pt-8 border-t border-[#E9E2D6]">
                <p className="text-[#5F5F5F] italic leading-relaxed">
                  "Think of Eximia as your body's sculpting artist—it shapes and refines, but you maintain the masterpiece."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before / After Gallery Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl text-[#1A1A1A] mb-4 font-medium" style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif' }}>
              Before / After Gallery
            </h2>
            <p className="text-lg text-[#5F5F5F] max-w-2xl mx-auto">
              Real results from our Dubai clinic patients
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button 
              className={`px-6 py-3 rounded-full transition-all duration-300 capitalize ${
                filter === 'all' 
                  ? 'bg-[#1F5E4B] text-white shadow-lg' 
                  : 'bg-[#E9E2D6] text-[#1A1A1A] hover:bg-[#1F5E4B] hover:text-white'
              }`}
              onClick={() => setFilter('all')}
            >
              All
            </button>
            <button 
              className={`px-6 py-3 rounded-full transition-all duration-300 capitalize ${
                filter === 'abdomen' 
                  ? 'bg-[#1F5E4B] text-white shadow-lg' 
                  : 'bg-[#E9E2D6] text-[#1A1A1A] hover:bg-[#1F5E4B] hover:text-white'
              }`}
              onClick={() => setFilter('abdomen')}
            >
              Abdomen
            </button>
            <button 
              className={`px-6 py-3 rounded-full transition-all duration-300 capitalize ${
                filter === 'thighs' 
                  ? 'bg-[#1F5E4B] text-white shadow-lg' 
                  : 'bg-[#E9E2D6] text-[#1A1A1A] hover:bg-[#1F5E4B] hover:text-white'
              }`}
              onClick={() => setFilter('thighs')}
            >
              Thighs
            </button>
            <button 
              className={`px-6 py-3 rounded-full transition-all duration-300 capitalize ${
                filter === 'arms' 
                  ? 'bg-[#1F5E4B] text-white shadow-lg' 
                  : 'bg-[#E9E2D6] text-[#1A1A1A] hover:bg-[#1F5E4B] hover:text-white'
              }`}
              onClick={() => setFilter('arms')}
            >
              Arms
            </button>
          </div>

          {/* Gallery Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredGallery.map((item, index) => (
              <BeforeAfterCard key={index} item={item} />
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <p className="text-[#5F5F5F] mb-6">See yourself in our next success story</p>
            <button className="px-8 py-4 bg-[#1F5E4B] text-white rounded-full font-semibold shadow-lg hover:bg-[#1F5E4B]/90 transition-all duration-300">
              View Full Gallery
            </button>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions Section */}
      <section className="py-20 bg-[#F5F1EA]">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl text-[#1A1A1A] mb-4 font-medium" style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif', fontSize: '48px' }}>
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {/* FAQ Item 1 */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <button 
                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 group"
                onClick={() => setActiveFaq(activeFaq === 0 ? null : 0)}
              >
                <span className="text-[18px] text-[#1A1A1A] pr-8" style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif' }}>How soon can I see Eximia results in Dubai?</span>
                <svg 
                  className={`w-6 h-6 text-[#1F5E4B] transform transition-transform duration-300 ${activeFaq === 0 ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
              {activeFaq === 0 && (
                <div className="px-8 pb-6 text-[#5F5F5F]" style={{ fontSize: '16px', fontFamily: 'ui-sans-serif, system-ui, sans-serif' }} leading-relaxed>
                 Many patients notice subtle contour improvement after the first session, with gradual results across multiple sessions.
                </div>
              )}
            </div>

            {/* FAQ Item 2 */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <button 
                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 group"
                onClick={() => setActiveFaq(activeFaq === 1 ? null : 1)}
              >
                <span className="text-[18px] text-[#1A1A1A] pr-8" style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif' }}>How many sessions are usually required?</span>
                <svg 
                  className={`w-6 h-6 text-[#1F5E4B] transform transition-transform duration-300 ${activeFaq === 1 ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
              {activeFaq === 1 && (
                <div className="px-8 pb-6 text-[#5F5F5F]" style={{ fontSize: '16px', fontFamily: 'ui-sans-serif, system-ui, sans-serif' }} leading-relaxed>
                  Most treatment plans include 6–10 sessions depending on body area and fat distribution.
                </div>
              )}
            </div>

            {/* FAQ Item 3 */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <button 
                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 group"
                onClick={() => setActiveFaq(activeFaq === 2 ? null : 2)}
              >
                <span className="text-[18px] text-[#1A1A1A] pr-8" style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif' }}>Is Eximia treatment painful?</span>
                <svg 
                  className={`w-6 h-6 text-[#1F5E4B] transform transition-transform duration-300 ${activeFaq === 2 ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
              {activeFaq === 2 && (
                <div className="px-8 pb-6 text-[#5F5F5F]" style={{ fontSize: '16px', fontFamily: 'ui-sans-serif, system-ui, sans-serif' }} leading-relaxed>
                 The procedure is generally comfortable and often described as a warm massage-like sensation.
                </div>
              )}
            </div>

            {/* FAQ Item 4 */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <button 
                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 group"
                onClick={() => setActiveFaq(activeFaq === 3 ? null : 3)}
              >
                <span className="text-[18px] text-[#1A1A1A] pr-8" style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif' }}>Can Eximia reduce cellulite?</span>
                <svg 
                  className={`w-6 h-6 text-[#1F5E4B] transform transition-transform duration-300 ${activeFaq === 3 ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
              {activeFaq === 3 && (
                <div className="px-8 pb-6 text-[#5F5F5F]" style={{ fontSize: '16px', fontFamily: 'ui-sans-serif, system-ui, sans-serif' }} leading-relaxed>
                 Yes, the combined technologies help improve skin texture and reduce visible cellulite.
                </div>
              )}
            </div>

            {/* FAQ Item 5 */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <button 
                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 group"
                onClick={() => setActiveFaq(activeFaq === 4 ? null : 4)}
              >
                <span className="text-[18px] text-[#1A1A1A] pr-8" style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif' }}>Are results permanent?</span>
                <svg 
                  className={`w-6 h-6 text-[#1F5E4B] transform transition-transform duration-300 ${activeFaq === 4 ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
              {activeFaq === 4 && (
                <div className="px-8 pb-6 text-[#5F5F5F]" style={{ fontSize: '16px', fontFamily: 'ui-sans-serif, system-ui, sans-serif' }} leading-relaxed>
                 Fat cells treated are metabolized by the body, but maintaining results requires healthy lifestyle habits.
                </div>
              )}
            </div>

            {/* FAQ Item 6 */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <button 
                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 group"
                onClick={() => setActiveFaq(activeFaq === 5 ? null : 5)}
              >
                <span className="text-[18px] text-[#1A1A1A] pr-8" style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif' }}>Which body areas can be treated?</span>
                <svg 
                  className={`w-6 h-6 text-[#1F5E4B] transform transition-transform duration-300 ${activeFaq === 5 ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
              {activeFaq === 5 && (
                <div className="px-8 pb-6 text-[#5F5F5F]" style={{ fontSize: '16px', fontFamily: 'ui-sans-serif, system-ui, sans-serif' }} leading-relaxed>
                  Common areas include abdomen, thighs, arms, flanks, and localized fat pockets.
                </div>
              )}
            </div>
          </div>

          {/* CTA Box */}
          <div className="mt-16 bg-gradient-to-r from-[#1F5E4B] to-[#2d8a6e] rounded-2xl p-8 shadow-2xl text-center">
            <h3 className="text-2xl mb-4 text-white/90">Still Have Questions?</h3>
            <p className="mb-6 text-white/90">Our expert team in Dubai is here to help you understand the process</p>
            <button 
              onClick={() => window.open('https://wa.me/971566597878', '_blank')}
              className="bg-white text-[#1F5E4B] px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-semibold"
            >
              Talk to a Specialist
            </button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#1F5E4B] to-[#2d8a6e] relative overflow-hidden">
        {/* Diagonal Stripe Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full bg-[repeating-linear-gradient(45deg,white,white_2px,transparent_2px,transparent_20px)]"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl text-white mb-6 font-medium" style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif' }}>
              See the Transformation for Yourself
            </h2>
            <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
              Are you ready to be our next success story? View our clinic's <a href="https://ramacarepolyclinic.ae/services/eximia-body-contouring-dubai/" className="text-white font-bold border-b-2 border-white/50 hover:border-white transition-all">Eximia Body Contouring Dubai</a> gallery and book a free body assessment to see how many centimeters you could lose.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 items-start">
            {/* Left Column - Cards */}
            <div className="space-y-6">
              {/* Book Free Consultation Card */}
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-[#1F5E4B] rounded-full flex items-center justify-center">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#1A1A1A] mb-1">Book Free Consultation</h3>
                    <p className="text-[#5F5F5F] text-sm">Get a personalized body assessment and treatment plan</p>
                  </div>
                </div>
                <button 
                  onClick={scrollToForm}
                  className="w-full py-4 bg-[#1F5E4B] text-white rounded-xl font-semibold shadow-lg hover:bg-[#184837] transition-all duration-300"
                >
                  Schedule Free Consultation
                </button>
              </div>
            
              {/* WhatsApp Consultation Card */}
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center">
                    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#1A1A1A] mb-1">WhatsApp Consultation</h3>
                    <p className="text-[#5F5F5F] text-sm">Chat with our specialists instantly</p>
                  </div>
                </div>
                <button 
                  onClick={() => window.open('https://wa.me/971566597878', '_blank')}
                  className="w-full py-4 bg-[#25D366] text-white rounded-xl font-semibold shadow-lg hover:bg-[#1ebc57] transition-all duration-300"
                >
                  Start WhatsApp Chat
                </button>
              </div>

              {/* Stats Box */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-white mb-1">500+</div>
                    <div className="text-sm text-white/80">Happy Patients</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white mb-1">98%</div>
                    <div className="text-sm text-white/80">Satisfaction</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white mb-1">15+</div>
                    <div className="text-sm text-white/80">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Appointment Form */}
            <div className="bg-white rounded-2xl p-8 shadow-2xl" id="appointment-form">
              <h3 className="text-2xl font-semibold text-[#1A1A1A] mb-6">Request an Appointment</h3>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700">
                  Thank you! We'll contact you within 24 hours to confirm your appointment.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700">
                  Something went wrong. Please try again or contact us directly.
                </div>
              )}
              
              <form onSubmit={handleAppointmentSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label className="flex items-center gap-2 text-[#1A1A1A] font-medium mb-2">
                    <svg className="w-5 h-5 text-[#5F5F5F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                    </svg>
                    Name
                  </label>
                  <input 
                    type="text" 
                    name="fullName"
                    value={appointmentData.fullName}
                    onChange={handleAppointmentChange}
                    placeholder="Your full name"
                    className={`w-full px-4 py-3 bg-[#F5F1EA] text-[#1A1A1A] placeholder-[#9CA3AF] rounded-xl border-0 focus:ring-2 focus:ring-[#1F5E4B] focus:bg-white transition-all ${appointmentErrors.fullName ? 'ring-2 ring-red-500' : ''}`}
                  />
                  {appointmentErrors.fullName && (
                    <p className="mt-1 text-sm text-red-600">{appointmentErrors.fullName}</p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label className="flex items-center gap-2 text-[#1A1A1A] font-medium mb-2">
                    <svg className="w-5 h-5 text-[#5F5F5F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                    Email
                  </label>
                  <input 
                    type="email" 
                    name="email"
                    value={appointmentData.email}
                    onChange={handleAppointmentChange}
                    placeholder="your@email.com"
                    className={`w-full px-4 py-3 bg-[#F5F1EA] text-[#1A1A1A] placeholder-[#9CA3AF] rounded-xl border-0 focus:ring-2 focus:ring-[#1F5E4B] focus:bg-white transition-all ${appointmentErrors.email ? 'ring-2 ring-red-500' : ''}`}
                  />
                  {appointmentErrors.email && (
                    <p className="mt-1 text-sm text-red-600">{appointmentErrors.email}</p>
                  )}
                </div>

                {/* Phone Field */}
                <div>
                  <label className="flex items-center gap-2 text-[#1A1A1A] font-medium mb-2">
                    <svg className="w-5 h-5 text-[#5F5F5F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                    Phone
                  </label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={appointmentData.phone}
                    onChange={handleAppointmentChange}
                    placeholder="+971 XX XXX XXXX"
                    className={`w-full px-4 py-3 bg-[#F5F1EA] text-[#1A1A1A] placeholder-[#9CA3AF] rounded-xl border-0 focus:ring-2 focus:ring-[#1F5E4B] focus:bg-white transition-all ${appointmentErrors.phone ? 'ring-2 ring-red-500' : ''}`}
                  />
                  {appointmentErrors.phone && (
                    <p className="mt-1 text-sm text-red-600">{appointmentErrors.phone}</p>
                  )}
                </div>

                {/* Treatment Area Field */}
                <div>
                  <label className="flex items-center gap-2 text-[#1A1A1A] font-medium mb-2">
                    <svg className="w-5 h-5 text-[#5F5F5F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    Treatment Area
                  </label>
                  <select 
                    name="treatmentArea"
                    value={appointmentData.treatmentArea}
                    onChange={handleAppointmentChange}
                    className={`w-full px-4 py-3 bg-[#F5F1EA] text-[#1A1A1A] rounded-xl border-0 focus:ring-2 focus:ring-[#1F5E4B] focus:bg-white transition-all appearance-none cursor-pointer ${appointmentErrors.treatmentArea ? 'ring-2 ring-red-500' : ''}`}
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%235F5F5F'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1.5rem 1.5rem', paddingRight: '3rem' }}
                  >
                    <option value="">Select treatment area</option>
                    <option value="abdomen">Abdomen</option>
                    <option value="thighs">Thighs</option>
                    <option value="arms">Arms</option>
                    <option value="buttocks">Buttocks</option>
                    <option value="back">Back</option>
                  </select>
                  {appointmentErrors.treatmentArea && (
                    <p className="mt-1 text-sm text-red-600">{appointmentErrors.treatmentArea}</p>
                  )}
                </div>

                {/* Preferred Date Field */}
                <div>
                  <label className="flex items-center gap-2 text-[#1A1A1A] font-medium mb-2">
                    <svg className="w-5 h-5 text-[#5F5F5F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                    </svg>
                    Preferred Date
                  </label>
                  <input 
                    type="date" 
                    name="preferredDate"
                    value={appointmentData.preferredDate}
                    onChange={handleAppointmentChange}
                    className={`w-full px-4 py-3 bg-[#F5F1EA] text-[#1A1A1A] rounded-xl border-0 focus:ring-2 focus:ring-[#1F5E4B] focus:bg-white transition-all ${appointmentErrors.preferredDate ? 'ring-2 ring-red-500' : ''}`}
                  />
                  {appointmentErrors.preferredDate && (
                    <p className="mt-1 text-sm text-red-600">{appointmentErrors.preferredDate}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 bg-[#1F5E4B] text-white rounded-xl font-semibold shadow-lg hover:bg-[#184837] transition-all duration-300 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'Submitting...' : 'Confirm Appointment Request'}
                </button>

                {/* Disclaimer */}
                <p className="text-center text-sm text-[#5F5F5F]">We'll contact you within 24 hours to confirm your appointment</p>
              </form>
            </div>
          </div>

          {/* Footer Info */}
          <div className="mt-16 text-center text-white/80 text-sm">
            <p>Located in Jumeirah 1, Dubai · Open 7 Days a Week · Free Parking Available</p>
          </div>
        </div>
      </section>

      <ContentReviewBadge doctorName="Sonita Sinaga" pageSlug="eximia-before-and-after-results-dubai" />
    </Layout>
  );
}

// Gallery Data
const galleryData = [
  {
    category: 'abdomen',
    beforeImage: '/images/Before2.jpeg',
    afterImage: '/images/After2.jpeg',
    measurement: '-3.5 cm'
  },
  {
    category: 'thighs',
    beforeImage: '/images/Before3.jpeg',
    afterImage: '/images/After3.jpeg',
    measurement: '-2.8 cm'
  },
  {
    category: 'arms',
    beforeImage: '/images/Before4.jpeg',
    afterImage: '/images/After4.jpeg',
    measurement: '-2.2 cm'
  }
];
