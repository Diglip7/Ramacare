import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const AboutAyurvedaSection = ({ content }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Use content props or defaults - ORIGINAL CONTENT PRESERVED
  const badge = content?.badge || 'About RamaCare Polyclinic';
  const title = content?.title || 'Modern healthcare combined with holistic healing for long-term wellbeing.';
  const description = content?.description || 'RamaCare Polyclinic brings together modern medicine and traditional healing to provide complete, family-focused care in Dubai. Our team of DHA-licensed doctors, therapists, and specialists works closely with each patient to understand their concerns and recommend the most suitable treatment.';
  const paragraphs = content?.paragraphs || [
    'RamaCare Polyclinic brings together modern medicine and traditional healing to provide complete, family-focused care in Dubai. Our team of DHA-licensed doctors, therapists, and specialists works closely with each patient to understand their concerns and recommend the most suitable treatment.',
    'We offer a wide range of services under one roof, including general medicine, dermatology, aesthetic treatments, dental care, physiotherapy, and Ayurveda. This allows you to access the care you need without visiting multiple clinics.',
    'Instead of focusing only on symptoms, we aim to identify the root cause of your condition and create personalized treatment plans that support long-term health. Every treatment is delivered with a strong focus on safety, clear communication, and patient comfort at our Jumeirah 1 facility.'
  ];
  const stats = content?.stats || [
    { number: '500+', label: 'Happy Patients' },
    { number: '98%', label: 'Patient Satisfaction' },
    { number: '12+', label: 'Specialized Treatment Categories' }
  ];
  const ctaText = content?.ctaText || 'Meet Our Experts';
  const imagePath = content?.image || '/images/about.jpg';
  const imageAlt = content?.imageAlt || 'Ayurvedic medicine bottle';
  const overlayCard = content?.overlayCard || {
    number: '15+',
    smallText: 'Years of Excellence',
    boldText: 'Trusted Healthcare Clinic for Modern & Holistic Care'
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="about-ramacare"
      ref={sectionRef}
      className="relative w-full bg-[#F7F6F1] py-16 md:py-20 lg:py-24 xl:py-28 overflow-hidden"
     >
      {/* FIXED: Changed max-width to match screenshot layout */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-20">
        {/* FIXED: Changed grid columns ratio - image takes less space (40%), text takes more (60%) */}
        <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-10 md:gap-12 lg:gap-12 xl:gap-16 items-center">

          {/* Left Column - Image with Overlay Card */}
          <div className={`hidden lg:block order-2 lg:order-1 relative transform transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl w-full group" style={{ aspectRatio: '4/5' }}>
              <Image
                src={imagePath}
                alt={imageAlt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 45vw"
                priority /> 
              {/* Overlay Card - Bottom Left */}
              <div className="absolute bottom-5 left-5 sm:bottom-6 sm:left-6 bg-white rounded-2xl p-3.5 sm:p-4 shadow-2xl flex items-center gap-3 z-10 backdrop-blur-sm bg-white/95 transform transition-all duration-500 hover:scale-105 max-w-[240px]">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#3d5f4a] rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                  <span className="text-white text-base sm:text-lg font-bold leading-none">{overlayCard.number}</span>
                </div>
                <div className="pr-1">
                  <div className="text-xs text-gray-600 font-normal leading-tight">{overlayCard.smallText}</div>
                  <div className="text-sm font-semibold text-[#111111] leading-tight mt-0.5">{overlayCard.boldText}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className={`order-1 lg:order-2 transform transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            {/* Small Badge */}
            <div className="inline-block mb-5 lg:mb-6">
              <span className="bg-[#E8E3D8] text-[#3d5f4a] px-4 py-2 rounded-full font-medium text-sm">
                {badge}
              </span>
            </div>

            {/* Main Heading - FIXED: Proper font size with better line wrapping */}
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#111827] leading-tight max-w-4xl mb-4 lg:mb-6">
              {title}
            </h2>

            {/* Paragraph Content */}
            <div className="space-y-5 text-[#4a5568] mb-8 lg:mb-9">
              {paragraphs.map((paragraph, index) => (
                <p key={index} className="text-base font-normal leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
            
            {/* Inline image for small screens */}
            <div className="lg:hidden relative rounded-3xl overflow-hidden shadow-2xl w-full group mb-8">
              <div className="relative" style={{ aspectRatio: '4/5' }}>
                <Image
                  src={imagePath}
                  alt={imageAlt}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw"
                  priority
                  />
                <div className="absolute bottom-4 left-4 right-4 bg-white rounded-2xl p-3.5 sm:p-4 shadow-2xl flex items-center gap-3 z-10 backdrop-blur-sm bg-white/95">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#3d5f4a] rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                    <span className="text-white text-base sm:text-lg font-bold leading-none">{overlayCard.number}</span>
                  </div>
                  <div className="pr-1">
                    <div className="text-xs text-gray-600 font-normal leading-tight">{overlayCard.smallText}</div>
                    <div className="text-sm font-semibold text-[#111111] leading-tight mt-0.5">{overlayCard.boldText}</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Statistics Card */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-lg mb-8 lg:mb-9 transform transition-all duration-500 hover:shadow-xl">
              <div className="grid grid-cols-3 gap-4 sm:gap-6">
                {stats.map((stat, index) => (
                  <div 
                    key={index} 
                    className={`text-center ${index < stats.length - 1 ? 'border-r border-gray-200' : ''}`}>
                    <div className="text-3xl sm:text-4xl font-bold text-[#3d5f4a] mb-1 leading-none tracking-tight">{stat.number}</div>
                    <div className="text-sm text-gray-700 font-normal leading-tight mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Call-to-Action Button */}
           <button onClick={() => {
                window.location.href = '/doctors/';
              }}
  className="bg-[#3d5f4a] hover:bg-[#2d4a37] text-white px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center gap-3 group">
  <span>{ctaText}</span>
  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
  </svg>
</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAyurvedaSection;
