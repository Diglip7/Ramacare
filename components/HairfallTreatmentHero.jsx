import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

const HairfallTreatmentHero = () => {
  const procedureSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Ayurvedic Hairfall Treatment in Dubai",
    "description": "Restore natural hair growth through authentic Ayurvedic therapies. Treat the root cause, not just symptoms—with 15+ years of proven expertise in Dubai.",
    "procedureType": "Medical Treatment",
    "relevantSpecialty": {
      "@type": "MedicalSpecialty",
      "name": "Ayurveda"
    },
    "bodyLocation": "Hair, Scalp",
    "howPerformed": "Authentic Ayurvedic therapies performed by DHA-licensed specialists.",
    "preparation": "Consultation with an Ayurvedic doctor is required.",
    "provider": {
      "@type": "MedicalClinic",
      "name": "RamaCare Polyclinic",
      "url": "https://ramacarepolyclinic.ae/",
      "telephone": "+971566597878",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "12 Al Dhiyafah Rd - Jumeirah Terrace Building, Ground Floor, Jumeirah 1",
        "addressLocality": "Dubai",
        "postalCode": "393558",
        "addressCountry": "AE"
      }
    }
  };

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
        "name": "Ayurveda Services",
        "item": "https://ramacarepolyclinic.ae/treatments"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Hairfall Treatment",
        "item": "https://ramacarepolyclinic.ae/services/ayurvedic-hairfall-treatment-dubai/"
      }
    ]
  };

  return (
    <section id="hero-section" className="w-full bg-[#F5F1E8] py-8 md:py-12">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify([procedureSchema, breadcrumbSchema]) }}
        />
      </Head>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 mb-6">
          {/* Left Panel - Content */}
          <div className="bg-[#F5F1E8] rounded-2xl p-4 md:p-6">
            {/* Badges */}
            <div className="flex flex-wrap gap-2 mb-4">
              <div className="flex items-center gap-1.5 bg-white border border-gray-200 rounded-lg px-3 py-1.5 h-8">
                <svg className="w-3.5 h-3.5 bg-gradient-to-br from-[#2D5F3F] to-[#3A7B51] bg-clip-text text-transparent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-xs text-[#1F2937] font-medium">Dubai Healthcare City</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white border border-gray-200 rounded-lg px-3 py-1.5 h-8">
                <svg className="w-3.5 h-3.5 bg-gradient-to-br from-[#047857] to-[#059669] bg-clip-text text-transparent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <span className="text-xs text-[#1F2937] font-medium">DHA Licensed</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white border border-gray-200 rounded-lg px-3 py-1.5 h-8">
                <svg className="w-3.5 h-3.5 bg-gradient-to-br from-[#047857] to-[#059669] bg-clip-text text-transparent" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-xs text-[#1F2937] font-medium">4.9/5 (500+ Reviews)</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1F2937] leading-tight mb-4">
              Ayurvedic Hairfall Treatment in Dubai
            </h1>

            {/* Description */}
            <p className="text-sm md:text-base text-[#1F2937] leading-relaxed mb-6">
              Restore natural hair growth through authentic Ayurvedic therapies. Treat the root cause, not just symptoms—with 15+ years of proven expertise in Dubai.
            </p>

            {/* Statistics Section */}
            <div className="flex flex-wrap gap-3 md:gap-4 mb-6">
              <div className="bg-[#F5F1E8] border border-gray-200 rounded-xl px-4 py-3 min-w-[140px] text-center">
                <div className="text-2xl md:text-3xl font-bold text-[#1F2937] mb-0.5">94%</div>
                <div className="text-xs text-[#6B7280]">Success Rate</div>
              </div>
              <div className="bg-[#F5F1E8] border border-gray-200 rounded-xl px-4 py-3 min-w-[140px] text-center">
                <div className="text-2xl md:text-3xl font-bold text-[#1F2937] mb-0.5">2,500+</div>
                <div className="text-xs text-[#6B7280]">Patients Treated</div>
              </div>
              <div className="bg-[#F5F1E8] border border-gray-200 rounded-xl px-4 py-3 min-w-[140px] text-center">
                <div className="text-2xl md:text-3xl font-bold text-[#1F2937] mb-0.5">15+</div>
                <div className="text-xs text-[#6B7280]">Years Experience</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#047857] to-[#059669] text-white px-5 py-2.5 h-10 rounded-lg font-medium text-sm hover:from-[#036A4F] hover:to-[#047857] transition-all duration-300 shadow-md hover:shadow-lg">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>Book Free Consultation</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <button className="flex items-center justify-center gap-2 bg-white border-2 border-[#047857] px-5 py-2.5 h-10 rounded-lg font-medium text-sm hover:bg-gradient-to-r hover:from-[#047857] hover:to-[#059669] transition-all duration-300 relative overflow-hidden group">
                <span className="relative bg-gradient-to-r from-[#047857] to-[#059669] bg-clip-text text-transparent group-hover:text-white transition-all duration-300">WhatsApp</span>
                <svg className="w-4 h-4 text-[#047857] group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403c-.149-.075-.297-.149-.446-.223-.149-.074-.297-.149-.371-.223-.074-.075-.149-.198-.025-.372.124-.174.297-.347.446-.422.149-.074.297-.198.446-.272.149-.074.223-.149.347-.074.124.074.198.198.223.347.025.149.025.297.025.446 0 .149-.025.297-.05.446-.025.149-.05.223-.124.297-.075.075-.149.05-.223.025z"/>
                </svg>
                <span className="text-xs relative bg-gradient-to-r from-[#047857] to-[#059669] bg-clip-text text-transparent group-hover:text-white transition-all duration-300">+971 56 659 7878</span>
              </button>
            </div>

            {/* Feature Highlights */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 bg-gradient-to-br from-[#047857] to-[#059669] bg-clip-text text-transparent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
                <span className="text-xs text-[#1F2937]">100% Natural</span>
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 bg-gradient-to-br from-[#047857] to-[#059669] bg-clip-text text-transparent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-xs text-[#1F2937]">No Side Effects</span>
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 bg-gradient-to-br from-[#047857] to-[#059669] bg-clip-text text-transparent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-xs text-[#1F2937]">Certified Doctors</span>
              </div>
            </div>
          </div>

          {/* Right Panel - Video Player */}
          <div className="bg-[#F5F1E8] rounded-2xl p-4 md:p-6">
            <div className="relative rounded-2xl overflow-hidden bg-gray-200 aspect-video mb-3">
              {/* Video Thumbnail Optimized */}
              <Image 
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Ayurvedic Hairfall Treatment in Dubai - Scalp therapy"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 1200px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/20"></div>
              
              {/* Play Button */}
              <button className="absolute inset-0 flex items-center justify-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-[#047857] to-[#059669] bg-clip-text text-transparent ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </button>
            </div>

            {/* Video Information Bar */}
            <div className="bg-[#1F2937] rounded-lg px-3 py-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div className="text-white">
                  <div className="text-xs font-medium">Watch: 3-Minute Overview</div>
                  <div className="text-[10px] text-gray-300">See how Ayurvedic treatment works</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Medical Notice */}
        <div className="bg-[#FEF3C7] border-l-4 border-[#F59E0B] rounded-lg p-3 md:p-4">
          <div className="flex items-start gap-2">
            <svg className="w-5 h-5 text-[#92400E] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <p className="text-xs md:text-sm text-[#92400E] leading-relaxed">
              <span className="font-semibold">Medical Notice:</span> Results vary by individual. This treatment is not a cure-all. Consult our qualified Ayurvedic doctors for personalized assessment. DHA-approved facility adhering to Dubai healthcare standards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HairfallTreatmentHero;

