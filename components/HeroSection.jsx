import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import Head from 'next/head';

const HeroSection = ({ content }) => {
  const [hoveredStat, setHoveredStat] = useState(null);
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Extract category from content or derive from current path
  const categoryName = content?.titleLine1?.replace(/,/g, '').trim() || 'Service';
  const categoryUrl = typeof window !== 'undefined' ? window.location.pathname : '';

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://ramacarepolyclinic.ae/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://ramacarepolyclinic.ae/services/"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": categoryName,
        "item": `https://ramacarepolyclinic.ae${categoryUrl}`
      }
    ]
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Use content props or defaults
  const badge = content?.badge || 'DHA-Licensed Healthcare Clinic in Dubai';
  const titleLine1 = content?.titleLine1 || 'Expert Ayurveda,';
  const titleHighlight = content?.titleHighlight || '  Physiotherapy & Aesthetic Care ';
  const titleLine2 = content?.titleLine2 || ' in Jumeirah 1';
  const subtitle = content?.subtitle || 'Quality healthcare in Jumeirah 1 is delivered by experienced DHA-licensed doctors focused on personalized treatment, preventive care, and long-term wellness support.';
  const ctaText = content?.ctaText || 'Book Free Consultation';
  const stats = content?.stats || [
    { number: '15+', label: 'Years Combined Experience' },
    { number: '500+', label: 'Happy Patients' },
    { number: '98%', label: 'Success Rate' },
    { number: '150+', label: 'Treatments' }
  ];
  const features = content?.features || [
    'Authentic Classical Healing with Modern Medical Excellence',
    'DHA-Licensed Specialist Doctors Committed to Your Care',
    'Customized Wellness & Treatment Plans Designed Just for You',
    'Prime Jumeirah 1 Location – Your Trusted Polyclinic in Dubai',
  ];
  const whatsappText = content?.whatsappText || 'WhatsApp Now';
  const location = content?.location || 'Heart of Jumeirah 1, Dubai';
  const timing = content?.timing || 'Same Day Appointments';
  const backgroundImage = content?.backgroundImage || '/images/homepage.jpg';
  const backgroundAlt = content?.backgroundAlt || 'Premium healthcare clinic in Dubai';
  const whatsappMessage = content?.whatsappMessage || 'Hello! I would like to book a free consultation at your polyclinic.';
  const appointmentSectionId = content?.appointmentSectionId || 'appointment';

  // Function to scroll to appointment section
  const scrollToAppointment = () => {
    const appointmentSection = document.getElementById(appointmentSectionId);
    if (appointmentSection) {
      appointmentSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Function to open WhatsApp
  const whatsappNumber = "971566597878";
  const openWhatsApp = () => {
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'whatsapp_click', {
        link_url: whatsappUrl,
      });
    }
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </Head>
      {/* ✅ Google Font Import */}
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />

      <section ref={sectionRef} className="relative w-full min-h-[70vh] sm:min-h-[75vh] md:min-h-[80vh] lg:min-h-[82vh] xl:min-h-[85vh] flex items-center justify-center overflow-hidden font-inter">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImage}
            alt={backgroundAlt}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 1200px"
            style={{
              transform: 'scale(1.05)',
            }}
          />
          {/* Gradient Overlay */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/95 via-[#1b5e3f]/90 to-[#1b5e3f]/80"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/50 to-transparent"
          />

          {/* Smooth transition to next section */}
          <div className="absolute bottom-0 left-0 right-0 h-15 bg-gradient-to-b from-transparent to-white pointer-events-none" />
        </div>

        {/* Content Container - Optimized padding */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 w-full py-4 sm:py-6 md:py-8 lg:py-10">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-4 sm:gap-6 items-start">
            {/* Main Content Block */}
            <div className={`max-w-5xl space-y-3 sm:space-y-4 lg:space-y-5 transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
              {/* Top Badge with Glow Animation */}
              <div className="relative inline-block">
                {/* Animated Golden Glow Outline */}
                <div className="absolute inset-0 rounded-full border-4 border-[#c9a961] opacity-60 blur-lg animate-badge-glow"></div>
                <div className="absolute inset-0 rounded-full border-2 border-[#C9A24D] opacity-80 blur-sm animate-badge-glow"></div>

                <div className="relative inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/30 rounded-full px-5 py-2.5 mb-4 sm:mb-6 animate-pulse-glow">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                  <span className="text-white text-xs sm:text-sm md:text-base tracking-wide">{badge}</span>
                </div>
              </div>

              {/* Main Heading */}
              <h1 className="text-white mb-4 sm:mb-5 animate-fadeInUp">
                <span className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight">
                  {titleLine1}
                </span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9a961] to-[#e5d4a5] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight">
                  {titleHighlight}
                </span>
                <span className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight">
                  {titleLine2}
                </span>
              </h1>

              {/* CSS STYLES */}
              <style jsx>{`
                * {
                  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
                }
                
                @keyframes fadeInUp {
                  from {
                    opacity: 0;
                    transform: translateY(20px);
                  }
                  to {
                    opacity: 1;
                    transform: translateY(0);
                  }
                }
                
                @keyframes badge-glow {
                  0%, 100% {
                    opacity: 0.6;
                    transform: scale(1.05);
                  }
                  50% {
                    opacity: 1;
                    transform: scale(1.15);
                  }
                }
                
                @keyframes pulse-glow {
                  0%, 100% {
                    box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
                  }
                  50% {
                    box-shadow: 0 0 30px rgba(255, 255, 255, 0.5);
                  }
                }
                
                .animate-fadeInUp {
                  animation: fadeInUp 1s ease-out;
                  animation-delay: 0.2s;
                  animation-fill-mode: both;
                }
                
                .animate-badge-glow {
                  animation: badge-glow 2s ease-in-out infinite;
                }
                
                .animate-pulse-glow {
                  animation: pulse-glow 2s ease-in-out infinite;
                }
              `}</style>

              {/* Subheading */}
              <p className="text-lg sm:text-xl md:text-2xl text-white/95 mb-6 sm:mb-8 leading-relaxed  " style={{ animationDelay: '0.3s' }}>
                {subtitle}
              </p>

              {/* Stats Cards Row */}
              <div className="grid grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8 lg:mb-10 max-w-4xl" style={{ animationDelay: '0.4s' }}>
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className={`bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl px-3 py-3 sm:px-4 sm:py-4 text-center hover:bg-white/10 transition-all duration-300 ${hoveredStat === index ? 'scale-105 border-white/40' : ''
                      }`}
                    onMouseEnter={() => setHoveredStat(index)}
                    onMouseLeave={() => setHoveredStat(null)}
                  >
                    <div className="text-xl sm:text-2xl text-[#c9a961] mb-1">{stat.number}</div>
                    <div className="text-[10px] sm:text-xs text-white/80">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Feature Checklist */}
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3 md:gap-4 max-w-4xl mb-4 sm:mb-6">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className={`bg-white/10 backdrop-blur-md border border-[#C9A24D]/30 rounded-xl px-3 py-2.5 sm:px-4 sm:py-3 md:px-5 md:py-4 flex items-center space-x-2.5 sm:space-x-3 cursor-pointer transition-all duration-300 ${hoveredFeature === index
                        ? 'scale-105 shadow-2xl border-[#C9A24D]/70 bg-white/20'
                        : 'shadow-lg hover:shadow-xl'
                      }`}
                    onMouseEnter={() => setHoveredFeature(index)}
                    onMouseLeave={() => setHoveredFeature(null)}
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#C9A24D] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[#F5F5F5] text-xs sm:text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-1 sm:pt-2">
                {/* Book Free Consultation Button */}
                <button
                  onClick={scrollToAppointment}
                  className="group relative flex items-center justify-center space-x-2.5 sm:space-x-3 bg-[#c9a961] text-[#F5F5F5] font-normal px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-2xl text-sm sm:text-base shadow-xl transition-all duration-300 overflow-hidden hover:scale-105 cursor-pointer"
                >
                  <span className="absolute inset-[-6px] rounded-2xl bg-[#e5d4a5]/50 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 relative z-10 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="relative z-10">{ctaText}</span>
                </button>

                {/* WhatsApp Button */}
                <button
                  onClick={openWhatsApp}
                  className="group relative flex items-center justify-center space-x-2.5 sm:space-x-3 border-2 border-white/30 bg-white/10 backdrop-blur-md text-[#F5F5F5] font-normal px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-2xl text-sm sm:text-base shadow-xl transition-all duration-300 overflow-hidden hover:scale-105 hover:border-white/50 hover:bg-white/20 hover:shadow-2xl cursor-pointer"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 relative z-10 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  <span className="relative z-10">{whatsappText}</span>
                </button>
              </div>

              {/* Bottom Info Row */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 md:gap-6 text-[#F5F5F5]/90 text-xs sm:text-sm pt-1 sm:pt-2">
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#C9A24D]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span>{location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#C9A24D]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <span>{timing}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Patient Rating Badge */}
        <div className={`absolute top-6 sm:top-8 lg:top-10 xl:top-12 right-4 sm:right-6 lg:right-8 xl:right-12 z-40 hidden xl:block transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0 translate-x-10'
          }`}>
          <div className="bg-white/10 backdrop-blur-md border border-[#C9A24D]/30 rounded-xl px-4 py-3 shadow-2xl transition-all duration-300 hover:scale-105 hover:border-[#C9A24D]/70 hover:bg-white/20">
            <div className="flex items-center gap-3">
              {/* Large Star */}
              <div className="w-11 h-11 bg-[#C9A24D] rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>

              {/* Rating Info */}
              <div>
                <div className="text-2xl text-[#F5F5F5] leading-none mb-0.5">4.8/5</div>
                <div className="text-[10px] text-[#F5F5F5]/70 mb-1.5">Patient Rating</div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3 h-3 text-[#C9A24D]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Lives Transformed Badge */}
        <div className={`absolute bottom-8 sm:bottom-10 lg:bottom-12 xl:bottom-16 right-4 sm:right-6 lg:right-8 xl:right-12 z-40 hidden xl:block transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-x-10'
          }`}>
          <div className="bg-white/10 backdrop-blur-md border border-[#C9A24D]/30 rounded-xl px-4 py-3 flex items-center gap-3 shadow-2xl transition-all duration-300 hover:scale-105 hover:border-[#C9A24D]/70 hover:bg-white/20">
            <div className="w-11 h-11 bg-[#C9A24D]/20 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-[#C9A24D]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
              </svg>
            </div>
            <div>
              <div className="text-[#C9A24D] text-2xl leading-none mb-0.5">500+</div>
              <div className="text-[#F5F5F5] text-[10px]">Lives Transformed</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;