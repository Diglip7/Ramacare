import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { DOCTOR_GROUPS, DOCTORS } from '../src/data/doctors';

const ExpertsSection = ({ content, onBookAppointment }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  // Use content props or defaults
  const badge = content?.badge || 'Expert Medical Team';
  const title = content?.title || 'Meet Our DHA-Licensed Expertise';
  const description = content?.description || 'Highly qualified doctors with decades of combined experience, committed to your healing journey with expertise, compassion, and authentic care.';
  const stats = content?.stats || [
    { value: '30+', label: 'Expert Doctors' },
    { value: '15+', label: 'Years of Combined Experience' },
    { value: '500+', label: 'Successful Treatments' },
    { value: '4.8', label: 'Average Rating' }
  ];
  const ctaSection = content?.ctaSection || {
    title: 'Take the First Step Toward Better Health',
    description: 'Connect with our DHA-licensed specialists at RamaCare Polyclinic, a leading Polyclinic in Dubai, and receive expert guidance tailored specifically to you.',
    primaryButton: 'Book Consultation Now',
    secondaryButton: 'View Our Team'
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

  const normalizeDoctor = (d) => {
    const name = d?.name || '';
    const firstName = d?.firstName || (name.split(' ')[0] || '');
    let ratingNum = 4.8;
    if (typeof d?.rating === 'number' && Number.isFinite(d.rating)) {
      ratingNum = d.rating;
    } else if (typeof d?.rating === 'string') {
      const match = d.rating.match(/[0-9]+(\.[0-9]+)?/);
      if (match) ratingNum = parseFloat(match[0]);
    }
    const ratingLabel = ratingNum.toFixed(1);
    const slug = Object.keys(DOCTORS).find(key => DOCTORS[key]?.id === d?.id) || '';
    const profileHref = d?.urlSlug || (slug ? `/doctors/${slug}/` : '/doctors/');
    return {
      id: d?.id,
      slug,
      profileHref,
      name,
      firstName,
      image: d?.image || '',
      qualifications: d?.qualifications || '',
      specialization: d?.specialization || d?.specializations || d?.title || '',
      experience: d?.experience || d?.patientsTreated || '',
      isDHALicensed: Boolean(d?.isDHALicensed),
      expertise: Array.isArray(d?.expertise) ? d.expertise : [],
      languages: Array.isArray(d?.languages) ? d.languages : [],
      rating: ratingNum,
      ratingLabel,
      _ratingNum: ratingNum,
      _ratingLabel: ratingLabel,
    };
  };

  const isLegacyList = (list) => {
    if (!Array.isArray(list) || list.length !== 3) return false;
    const ids = list.map(d => d.id).sort().join(',');
    if (ids !== '1,2,3') return false;
    // Check if it's the specific legacy set (Shamna, Anan, Jeena)
    const names = list.map(d => d.name || '').join(' ');
    return names.includes('Shamna') && names.includes('Anan') && names.includes('Jeena');
  };

  let rawDoctors = DOCTOR_GROUPS.ALL;
  if (Array.isArray(content) && content.length > 0 && !isLegacyList(content)) {
    rawDoctors = content;
  } else if (Array.isArray(content?.doctors) && content.doctors.length > 0 && !isLegacyList(content.doctors)) {
    rawDoctors = content.doctors;
  } else if (Array.isArray(content?.doctors?.doctors) && content.doctors.doctors.length > 0 && !isLegacyList(content.doctors.doctors)) {
    rawDoctors = content.doctors.doctors;
  }
  const doctors = rawDoctors.filter(Boolean).map(normalizeDoctor);

  const renderStars = (rating = 4.8, size = 'w-4 h-4') => {
    const num = typeof rating === 'number' && Number.isFinite(rating) && rating > 0 ? rating : 4.8;
    return [1, 2, 3, 4, 5].map((star) => {
      const isFull = star <= Math.floor(num);
      const isHalf = !isFull && star === Math.ceil(num) && num % 1 >= 0.5;

      if (isHalf) {
        return (
          <div key={star} className={`relative ${size}`}>
            <svg className={`${size} text-gray-300 absolute inset-0`} fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg className={`${size} text-[#C9A961] absolute inset-0`} fill="currentColor" viewBox="0 0 20 20" style={{ clipPath: 'inset(0 50% 0 0)' }}>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
        );
      }

      return (
        <svg key={star} className={`${size} ${isFull ? 'text-[#C9A961]' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    });
  };

  return (
    <section
      id="experts"
      ref={sectionRef}
      className="relative w-full bg-[#F9FAFB] py-12 sm:py-16 lg:py-20 overflow-hidden font-sans"
      style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 1 Doctor: Two-Column Showcase Layout */}
        {doctors.length === 1 ? (
          (() => {
            const doctor = doctors[0];
            return (
              <div className="lg:grid lg:grid-cols-12 gap-8 lg:gap-12 items-center max-w-6xl mx-auto mb-12">
                {/* Left: Department & Specialist Introduction */}
                <div className="lg:col-span-7 mb-8 lg:mb-0">
                  <div className="inline-block mb-4">
                    <span className="bg-[#E8E3D8] text-[#3d5f4a] px-4 py-1.5 rounded-full font-medium text-sm">{badge}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#111827] leading-tight mb-4">
                    {title}
                  </h2>
                  <p className="text-[15px] sm:text-base text-[#6B7280] leading-relaxed mb-6">
                    {description}
                  </p>

                  {/* Highlights Grid */}
                  <div className="space-y-3.5 mb-6">
                    <div className="flex items-start gap-3.5 bg-white p-4 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-gray-100">
                      <div className="w-8 h-8 rounded-full bg-[#1b5e3f]/10 text-[#1b5e3f] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-[#111827]">Comprehensive 1-on-1 Consultation</h4>
                        <p className="text-xs text-[#6B7280] mt-0.5">Individual assessment based on your symptoms, mobility needs, and clinical health goals.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5 bg-white p-4 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-gray-100">
                      <div className="w-8 h-8 rounded-full bg-[#1b5e3f]/10 text-[#1b5e3f] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-[#111827]">Personalised Treatment Protocol</h4>
                        <p className="text-xs text-[#6B7280] mt-0.5">Customized therapy sessions designed specifically to support comfort, recovery, and function.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5 bg-white p-4 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-gray-100">
                      <div className="w-8 h-8 rounded-full bg-[#1b5e3f]/10 text-[#1b5e3f] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-[#111827]">DHA-Licensed Medical Quality</h4>
                        <p className="text-xs text-[#6B7280] mt-0.5">Certified healthcare standards in our modern Jumeirah 1 clinical facility.</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => {
                        if (onBookAppointment) {
                          onBookAppointment();
                        } else {
                          document.getElementById("appointment")?.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                      className="bg-[#1b5e3f] hover:bg-[#154637] text-white px-6 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-lg"
                    >
                      Book Consultation with {doctor.firstName || doctor.name.split(' ')[0]}
                    </button>
                    <a
                      href="tel:+971566597878"
                      className="bg-white hover:bg-gray-50 text-[#1b5e3f] border border-gray-200 px-5 py-3.5 rounded-xl font-semibold text-sm transition-colors"
                    >
                      Call Clinic: +971 56 659 7878
                    </a>
                  </div>
                </div>

                {/* Right: Full Doctor Card */}
                <div className="lg:col-span-5 flex justify-center">
                  <div className="w-full max-w-md bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-shadow duration-300 flex flex-col">
                    {/* Image Container with Overlay - Fixed Height */}
                    <Link href={doctor.profileHref} className="block relative h-72 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden group flex-shrink-0">
                      {doctor.image ? (
                        <Image
                          src={doctor.image}
                          alt={doctor.name}
                          fill
                          className="object-cover object-[50%_20%] transition-transform duration-500 group-hover:scale-110"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-teal-50 to-blue-50 flex items-center justify-center">
                          <svg className="w-24 h-24 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                      )}

                      {/* Dark gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                      {/* Top Badges */}
                      {doctor.isDHALicensed && (
                        <div className="absolute top-4 right-4 bg-[#C9A961] rounded-full px-3 py-1.5 shadow-lg z-10 flex items-center gap-1.5">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-xs font-medium text-white">DHA Licensed</span>
                        </div>
                      )}

                      {/* Doctor Info at Bottom of Image */}
                      <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                        <div className="flex items-center gap-1.5 mb-3">
                          {renderStars(doctor.rating, 'w-4 h-4')}
                          <span className="text-white text-sm font-medium ml-1">{doctor.ratingLabel}</span>
                        </div>

                        <h3 className="text-xl font-medium text-white mb-1 tracking-tight hover:underline">
                          {doctor.name}
                        </h3>
                        <p className="text-sm text-white/90 font-normal">
                          {doctor.qualifications}
                        </p>
                      </div>
                    </Link>

                    {/* Card Body */}
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="mb-5 pb-5 border-b border-gray-100 flex-shrink-0">
                        <div className="flex items-center gap-2 mb-2">
                          <svg className="w-4 h-4 text-[#1b5e3f]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-xs font-medium text-[#6B7280] uppercase tracking-wide">Specialization</span>
                        </div>
                        <p className="text-base font-normal text-[#111827] mb-3 line-clamp-2">
                          {doctor.specialization}
                        </p>
                        <span className="inline-block bg-[#F9FAFB] text-[#6B7280] px-3 py-1.5 rounded-full text-xs font-normal">
                          {doctor.experience}
                        </span>
                      </div>

                      <div className="mb-5 flex-shrink-0">
                        <h4 className="text-sm font-medium text-[#111827] mb-3">Key Expertise</h4>
                        <ul className="space-y-2.5" style={{ minHeight: '120px' }}>
                          {doctor.expertise.slice(0, 3).map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A961] mt-2 flex-shrink-0"></span>
                              <span className="text-sm text-[#6B7280] leading-relaxed line-clamp-2">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-5 flex-shrink-0">
                        <div className="flex flex-wrap gap-2">
                          {doctor.languages.map((language, idx) => (
                            <span key={idx} className="text-[#1b5e3f] text-xs font-medium">
                              {language}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mt-auto pt-4 border-t border-gray-100 space-y-3.5">
                        <Link
                          href={doctor.profileHref}
                          className="w-full text-center text-[#1b5e3f] hover:text-[#164738] font-semibold text-sm py-2 flex items-center justify-center gap-1.5 transition-colors"
                        >
                          View Full Profile
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                        <button
                          onClick={() => {
                            if (onBookAppointment) {
                              onBookAppointment();
                            } else {
                              document.getElementById("appointment")?.scrollIntoView({
                                behavior: "smooth",
                              });
                            }
                          }}
                          className="w-full bg-[#1b5e3f] hover:bg-[#154637] text-white py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:shadow-sm"
                        >
                          Book with {doctor.firstName || doctor.name.split(' ')[0]}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })()
        ) : (
          <>
            {/* Header Section for 2+ Doctors */}
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-block mb-5 lg:mb-6">
                <span className="bg-[#E8E3D8] text-[#3d5f4a] px-4 py-2 rounded-full font-medium text-sm">{badge}</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#111827] leading-tight max-w-4xl">
                {title.split('\n').map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    {index < title.split('\n').length - 1 && <br />}
                  </React.Fragment>
                ))}
              </h2>
              <p className='text-[15px] text-[#6B7280] leading-relaxed'>
                {description}
              </p>
            </div>

            {/* 2 Doctors: Centered 2-Column Grid */}
            {doctors.length === 2 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
                {doctors.map((doctor) => {
                  return (
                    <div
                      key={doctor.id}
                      className="bg-white rounded-2xl overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-shadow duration-300 flex flex-col"
                    >
                      {/* Image Container with Overlay */}
                      <Link href={doctor.profileHref} className="block relative h-72 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden group flex-shrink-0">
                        {doctor.image ? (
                          <Image
                            src={doctor.image}
                            alt={doctor.name}
                            fill
                            className="object-cover object-[50%_20%] transition-transform duration-500 group-hover:scale-110"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-teal-50 to-blue-50 flex items-center justify-center">
                            <svg className="w-24 h-24 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                          </div>
                        )}

                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                        {doctor.isDHALicensed && (
                          <div className="absolute top-4 right-4 bg-[#C9A961] rounded-full px-3 py-1.5 shadow-lg z-10 flex items-center gap-1.5">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-xs font-medium text-white">DHA Licensed</span>
                          </div>
                        )}

                        <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                          <div className="flex items-center gap-1.5 mb-3">
                            {renderStars(doctor.rating, 'w-4 h-4')}
                            <span className="text-white text-sm font-medium ml-1">{doctor.ratingLabel}</span>
                          </div>

                          <h3 className="text-xl font-medium text-white mb-1 tracking-tight hover:underline">
                            {doctor.name}
                          </h3>

                          <p className="text-sm text-white/90 font-normal">
                            {doctor.qualifications}
                          </p>
                        </div>
                      </Link>

                      {/* Card Body */}
                      <div className="p-6 flex flex-col flex-grow">
                        <div className="mb-5 pb-5 border-b border-gray-100 flex-shrink-0">
                          <div className="flex items-center gap-2 mb-2">
                            <svg className="w-4 h-4 text-[#1b5e3f]" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-xs font-medium text-[#6B7280] uppercase tracking-wide">Specialization</span>
                          </div>
                          <p className="text-base font-normal text-[#111827] mb-3 line-clamp-2">
                            {doctor.specialization}
                          </p>
                          <span className="inline-block bg-[#F9FAFB] text-[#6B7280] px-3 py-1.5 rounded-full text-xs font-normal">
                            {doctor.experience}
                          </span>
                        </div>

                        <div className="mb-5 flex-shrink-0">
                          <h4 className="text-sm font-medium text-[#111827] mb-3">Key Expertise</h4>
                          <ul className="space-y-2.5" style={{ minHeight: '120px' }}>
                            {doctor.expertise.slice(0, 3).map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A961] mt-2 flex-shrink-0"></span>
                                <span className="text-sm text-[#6B7280] leading-relaxed line-clamp-2">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="mb-5 flex-shrink-0">
                          <div className="flex flex-wrap gap-2">
                            {doctor.languages.map((language, idx) => (
                              <span key={idx} className="text-[#1b5e3f] text-xs font-medium">
                                {language}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="mt-auto pt-4 border-t border-gray-100 space-y-3.5">
                          <Link
                            href={doctor.profileHref}
                            className="w-full text-center text-[#1b5e3f] hover:text-[#164738] font-semibold text-sm py-2 flex items-center justify-center gap-1.5 transition-colors"
                          >
                            View Full Profile
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                          <button
                            onClick={() => {
                              if (onBookAppointment) {
                                onBookAppointment();
                              } else {
                                document.getElementById("appointment")?.scrollIntoView({
                                  behavior: "smooth",
                                });
                              }
                            }}
                            className="w-full bg-[#1b5e3f] hover:bg-[#154637] text-white py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:shadow-sm"
                          >
                            Book with {doctor.firstName || doctor.name.split(' ')[0]}
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              /* 3+ Doctors: Slider Grid */
              <div className="relative mb-12">
                <div className="absolute inset-y-0 left-0 flex items-center z-10">
                  <button
                    onClick={() => {
                      const el = document.getElementById('experts-slider');
                      if (!el) return;
                      const visible = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
                      const step = el.offsetWidth / visible;
                      el.scrollBy({ left: -step, behavior: 'smooth' });
                    }}
                    className="rounded-full bg-white shadow-md border border-gray-200 text-[#1b5e3f] hover:text-white hover:bg-[#1b5e3f] p-2"
                    aria-label="Previous"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center z-10">
                  <button
                    onClick={() => {
                      const el = document.getElementById('experts-slider');
                      if (!el) return;
                      const visible = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
                      const step = el.offsetWidth / visible;
                      el.scrollBy({ left: step, behavior: 'smooth' });
                    }}
                    className="rounded-full bg-white shadow-md border border-gray-200 text-[#1b5e3f] hover:text-white hover:bg-[#1b5e3f] p-2"
                    aria-label="Next"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

                {/* Scrollable Container */}
                <div
                  id="experts-slider"
                  className="overflow-x-auto scroll-smooth snap-x snap-mandatory px-1"
                  style={{ scrollBehavior: 'smooth' }}
                >
                  <div className="flex gap-6 items-stretch">
                    {doctors.map((doctor) => {
                      return (
                        <div
                          key={doctor.id}
                          className="snap-start flex-shrink-0 bg-white rounded-2xl overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-shadow duration-300 flex flex-col w-full md:w-1/2 lg:w-1/3"
                        >
                          {/* Image Container with Overlay */}
                          <Link href={doctor.profileHref} className="block relative h-72 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden group flex-shrink-0">
                            {doctor.image ? (
                              <Image
                                src={doctor.image}
                                alt={doctor.name}
                                fill
                                className="object-cover object-[50%_20%] transition-transform duration-500 group-hover:scale-110"
                              />
                            ) : (
                              <div className="w-full h-full bg-gradient-to-br from-teal-50 to-blue-50 flex items-center justify-center">
                                <svg className="w-24 h-24 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                              </div>
                            )}

                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                            {doctor.isDHALicensed && (
                              <div className="absolute top-4 right-4 bg-[#C9A961] rounded-full px-3 py-1.5 shadow-lg z-10 flex items-center gap-1.5">
                                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-xs font-medium text-white">DHA Licensed</span>
                              </div>
                            )}

                            <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                              <div className="flex items-center gap-1.5 mb-3">
                                {renderStars(doctor.rating, 'w-4 h-4')}
                                <span className="text-white text-sm font-medium ml-1">{doctor.ratingLabel}</span>
                              </div>

                              <h3 className="text-xl font-medium text-white mb-1 tracking-tight hover:underline">
                                {doctor.name}
                              </h3>

                              <p className="text-sm text-white/90 font-normal">
                                {doctor.qualifications}
                              </p>
                            </div>
                          </Link>

                          {/* Card Body */}
                          <div className="p-6 flex flex-col flex-grow">
                            <div className="mb-5 pb-5 border-b border-gray-100 flex-shrink-0">
                              <div className="flex items-center gap-2 mb-2">
                                <svg className="w-4 h-4 text-[#1b5e3f]" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-xs font-medium text-[#6B7280] uppercase tracking-wide">Specialization</span>
                              </div>
                              <p className="text-base font-normal text-[#111827] mb-3 line-clamp-2">
                                {doctor.specialization}
                              </p>
                              <span className="inline-block bg-[#F9FAFB] text-[#6B7280] px-3 py-1.5 rounded-full text-xs font-normal">
                                {doctor.experience}
                              </span>
                            </div>

                            <div className="mb-5 flex-shrink-0">
                              <h4 className="text-sm font-medium text-[#111827] mb-3">Key Expertise</h4>
                              <ul className="space-y-2.5" style={{ minHeight: '120px' }}>
                                {doctor.expertise.slice(0, 3).map((item, idx) => (
                                  <li key={idx} className="flex items-start gap-2.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A961] mt-2 flex-shrink-0"></span>
                                    <span className="text-sm text-[#6B7280] leading-relaxed line-clamp-2">{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className="mb-5 flex-shrink-0">
                              <div className="flex flex-wrap gap-2">
                                {doctor.languages.map((language, idx) => (
                                  <span key={idx} className="text-[#1b5e3f] text-xs font-medium">
                                    {language}
                                  </span>
                                ))}
                              </div>
                            </div>

                            <div className="mt-auto pt-4 border-t border-gray-100 space-y-3.5">
                              <Link
                                href={doctor.profileHref}
                                className="w-full text-center text-[#1b5e3f] hover:text-[#164738] font-semibold text-sm py-2 flex items-center justify-center gap-1.5 transition-colors"
                              >
                                View Full Profile
                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                                </svg>
                              </Link>
                              <button
                                onClick={() => {
                                  if (onBookAppointment) {
                                    onBookAppointment();
                                  } else {
                                    document.getElementById("appointment")?.scrollIntoView({
                                      behavior: "smooth",
                                    });
                                  }
                                }}
                                className="w-full bg-[#1b5e3f] hover:bg-[#154637] text-white py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:shadow-sm"
                              >
                                Book with {doctor.firstName || doctor.name.split(' ')[0]}
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </>
        )}
        <style jsx>{`
          #experts-slider {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          #experts-slider::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.1)] transition-shadow duration-300">
              <div className="text-4xl sm:text-5xl font-semibold text-[#1b5e3f] mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-[#6B7280] font-normal">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#1b5e3f] via-[#2d7a56] to-[#1b5e3f] rounded-3xl p-8 sm:p-12 text-center shadow-xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mb-4">
            {ctaSection.title}
          </h2>
          <p className="text-base sm:text-lg text-white/90 font-normal mb-8 max-w-2xl mx-auto">
            {ctaSection.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => {
                if (onBookAppointment) {
                  onBookAppointment();
                } else {
                  document.getElementById("appointment")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }
              }}
              className="bg-[#C9A961] hover:bg-[#B8984E] text-white px-8 py-3.5 rounded-xl font-medium text-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
              {ctaSection.primaryButton}
            </button>
            <button
              onClick={() => {
                window.location.href = '/doctors/';
              }}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-3.5 rounded-xl font-medium text-sm transition-all duration-200"
            >
              {ctaSection.secondaryButton}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertsSection;
