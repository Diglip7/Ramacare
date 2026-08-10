import React, { useEffect, useRef, useState } from 'react';
import Layout from '../../../components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import BeginYourHealingJourneySection from '../../../components/BeginYourHealingJourneySection';
import SEOContentSection from '../../../components/SEOContentSection';
import { DOCTOR_GROUPS, DOCTORS } from '../../../src/data/doctors';

const AllDoctorsPage = ({ content }) => {
  const doctorsSEOContent = [
    "At RamaCare Polyclinic, our team of DHA-licensed doctors in Dubai is the heart of our healthcare services. We take pride in bringing together highly qualified specialists who are dedicated to providing ethical, patient-centered care. Each of our physicians brings years of experience and a deep commitment to clinical excellence, ensuring that our patients in Jumeirah 1 receive the best possible medical attention.",
    {
      type: "heading",
      text: "Expert Medical Specialists in Jumeirah 1"
    },
    "Our doctors specialize in a variety of fields, allowing us to offer a holistic approach to your health. From modern medicine to traditional Ayurveda, our team works collaboratively to provide comprehensive solutions for your well-being.",
    {
      type: "list",
      items: [
        "Expert Physiotherapists: Specialists in mobility restoration and pain management.",
        "Ayurvedic Practitioners: Dedicated to authentic healing and lifestyle balance.",
        "General Physicians: Your trusted partners for primary care and preventive medicine.",
        "Dermatology Specialists: Experts in advanced skin and aesthetic treatments.",
        "Dental Surgeons: Providing premium oral healthcare and cosmetic enhancements."
      ]
    },
    {
      type: "heading",
      text: "Why Consult Our Doctors?"
    },
    "When you consult a doctor at RamaCare Polyclinic, you are choosing a healthcare provider who listens. We believe that a strong doctor-patient relationship is essential for effective healing. Our specialists take the time to explain your diagnosis and involve you in the development of your treatment plan. With over 37 years of combined experience, our medical team is equipped to handle both simple and complex health concerns with the highest level of professionalism."
  ];

  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toast, setToast] = useState({ show: false, type: 'success', message: '' });
  const [expandedExpertise, setExpandedExpertise] = useState({});

  const showToast = (message, type = 'success') => {
    setToast({ show: true, type, message });
    setTimeout(() => setToast(prev => ({ ...prev, show: false })), 3000);
  };

  const toggleExpertise = (doctorId) => {
    setExpandedExpertise(prev => ({
      ...prev,
      [doctorId]: !prev[doctorId]
    }));
  };
  const sectionRef = useRef(null);

  // Use content props or defaults
  const badge = content?.badge || 'Expert Medical Team';
  const title = content?.title || 'Find A Doctor';
  const description = content?.description || 'Your trusted healthcare partner in Dubai, delivering comprehensive medical care with compassion, expertise, and a strong commitment to patient well-being in Jumeirah 1.';
  const stats = content?.stats || [
    { value: '3', label: 'Expert Physicians' },
    { value: '37+', label: 'Years Combined Experience' },
    { value: '500+', label: 'Successful Treatments' },
    { value: '4.9', label: 'Average Rating' }
  ];
  const ctaSection = content?.ctaSection || {
    title: 'Ready to Consult our Expert Physician?',
    description: 'Schedule a one-on-one consultation with our DHA-licensed doctors for personalized care.',
    primaryButton: 'Book Consultation Now',
    secondaryButton: 'View All Doctors'
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

  // Define all doctors here - you can expand this list
  const doctors = content?.doctors || DOCTOR_GROUPS.ALL;

  const renderStars = (rating, size = 'w-4 h-4') => {
    return [1, 2, 3, 4, 5].map((star) => {
      const isFull = star <= Math.floor(rating);
      const isHalf = !isFull && star === Math.ceil(rating) && rating % 1 >= 0.5;

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
    <Layout>
      <Head>
        <title key="title">All Doctors - RamaCare</title>
        <meta name="description" content="Meet all our expert doctors at RamaCare" key="description" />

      </Head>

      <main style={{ fontFamily: "'Nunito Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif" }}>
        <section
          id="all-doctors"
          ref={sectionRef}
          className="relative w-full bg-[#F9FAFB] py-12 sm:py-16 lg:py-20 overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header Section */}
            <div className="text-center max-w-3xl mx-auto mb-12">
              {/* <div className="inline-block mb-5 lg:mb-6">
               
                <span className="bg-[#E8E3D8] text-[#3d5f4a] px-4 py-2 rounded-full font-medium text-sm">{badge}</span>
              </div> */}

              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#111827] leading-tight max-w-4xl">
                {title.split('\n').map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    {index < title.split('\n').length - 1 && <br />}
                  </React.Fragment>
                ))}
              </h1>

              <p className='text-[15px] text-[#6B7280] leading-relaxed'>
                {description}
              </p>
            </div>

            {/* Doctor Cards Grid - Premium Horizontal/Wide Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {doctors.map((doctor) => {
                const slug = Object.keys(DOCTORS).find(k => DOCTORS[k].id === doctor.id) || doctor.id;
                return (
                  <div key={doctor.id} className="bg-white rounded-3xl overflow-hidden border border-[#E9E2D6]/80 hover:shadow-[0_12px_35px_rgba(31,94,75,0.06)] transition-all duration-300 flex flex-col sm:flex-row group">
                    {/* Image Container */}
                    <div className="relative w-full sm:w-[42%] h-64 sm:h-auto min-h-[260px] bg-[#FAF9F5] overflow-hidden shrink-0">
                      {doctor.image ? (
                        <Image
                          src={doctor.image}
                          alt={doctor.name}
                          fill
                          className="object-cover object-[50%_20%] transition-transform duration-700 group-hover:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full bg-[#1F5E4B]/5 flex items-center justify-center">
                          <svg className="w-20 h-20 text-[#1F5E4B]/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                      )}

                      {/* DHA Licensed Badge */}
                      {doctor.isDHALicensed && (
                        <div className="absolute top-4 left-4 bg-[#C9A961] rounded-full px-3 py-1 shadow-md z-10 flex items-center gap-1">
                          <span className="text-[9px] uppercase tracking-wider font-semibold text-white">DHA Licensed</span>
                        </div>
                      )}
                    </div>

                    {/* Card Content */}
                    <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between">
                      <div>
                        {/* Name & Specialization */}
                        <div className="mb-4">
                          <h3 className="text-xl font-bold text-[#1A1A1A] group-hover:text-[#1F5E4B] transition-colors leading-tight">
                            <Link href={`/doctors/${slug}`}>
                              {doctor.name}
                            </Link>
                          </h3>
                          <p className="text-xs font-semibold text-[#1F5E4B] tracking-wide mt-1.5">
                            {doctor.specialization}
                          </p>
                        </div>

                        {/* Experience & Qualifications */}
                        <div className="space-y-1 mb-4 text-xs text-[#5F5F5F]">
                          <p className="font-semibold text-gray-700">{doctor.qualifications}</p>
                          <p className="opacity-80">{doctor.experience.split('|')[0].trim()}</p>
                        </div>

                        {/* Key Expertise list */}
                        <ul className="space-y-2 mb-6 border-t border-gray-100 pt-4">
                          {(doctor.expertise || []).slice(0, 2).map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs text-[#5F5F5F] leading-relaxed">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A961] mt-1.5 flex-shrink-0"></span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Single Elegant CTA */}
                      <Link
                        href={`/doctors/${slug}`}
                        className="w-full text-center bg-[#FAF9F5] border border-[#E9E2D6] hover:bg-[#1F5E4B] hover:text-white hover:border-[#1F5E4B] text-[#1A1A1A] py-3.5 rounded-xl font-semibold text-sm transition-all duration-300"
                      >
                        View Full Profile
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>


          </div>
        </section>
        <SEOContentSection title="Our Medical Experts in Dubai" content={doctorsSEOContent} />
      </main>

      {/* Appointment Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-[9999] p-4">
          <div className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="p-6">
              <BeginYourHealingJourneySection
                isModal={true}
                onClose={() => setIsModalOpen(false)}
                onSubmissionSuccess={() => {
                  setIsModalOpen(false);
                  showToast('Appointment booked!', 'success');
                }}
              />
            </div>
          </div>
        </div>
      )}
      {/* Toast Notification */}
      {toast.show && (
        <div className="fixed top-4 right-4 z-[10000] animate-fadeIn">
          <div className={`px-3 py-2 rounded-full text-xs font-medium text-white shadow-md ${toast.type === 'success' ? 'bg-emerald-600' : 'bg-red-600'}`}>
            {toast.message}
          </div>
        </div>
      )}
    </Layout>
  );
};

export default AllDoctorsPage;
