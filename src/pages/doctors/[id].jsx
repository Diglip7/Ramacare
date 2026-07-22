import React, { useEffect, useRef, useState } from 'react';
import Layout from '../../../components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import BeginYourHealingJourneySection from '../../../components/BeginYourHealingJourneySection';
import { DOCTORS } from '../../../src/data/doctors';

const DoctorProfilePage = ({ doctor }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toast, setToast] = useState({ show: false, type: 'success', message: '' });
  
  const showToast = (message, type = 'success') => {
    setToast({ show: true, type, message });
    setTimeout(() => setToast(prev => ({ ...prev, show: false })), 3000);
  };
  const sectionRef = useRef(null);

  // Sample doctor data - in a real scenario this would come from props or API
  const sampleDoctor = {
    id: 1,
    name: 'Dr. John Smith',
    firstName: 'John',
    image: '/images/default-doctor.jpg',
    qualifications: 'MD, PhD (Internal Medicine)',
    rating: 4.9,
    specialization: 'Internal Medicine & Diagnostics',
    experience: '12+ Years Experience | DHA Licensed',
    expertise: [
      'Comprehensive internal medicine and diagnostic services',
      'Chronic disease management and prevention',
      'Successfully treated 700+ patients with evidence-based medicine'
    ],
    languages: ['English'],
    biography: 'Dr. John Smith is a board-certified internist with over 12 years of experience in internal medicine. He specializes in complex diagnostic challenges and chronic disease management. Dr. Smith is passionate about providing compassionate, evidence-based care to his patients.',
    education: [
      'MD from Harvard Medical School',
      'Residency in Internal Medicine at Johns Hopkins Hospital',
      'Fellowship in Advanced Diagnostics at Mayo Clinic'
    ],
    certifications: [
      'Board Certified in Internal Medicine',
      'DHA License #12345',
      'Advanced Cardiac Life Support (ACLS)'
    ]
  };

  const currentDoctor = doctor || sampleDoctor;

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
        <title key="title">{currentDoctor.name} - Doctor Profile - RamaCare</title>
        <meta name="description" content={`Learn more about ${currentDoctor.name}, ${currentDoctor.specialization} at RamaCare`} />
        <link rel="canonical" href={`https://ramacarepolyclinic.ae/doctors/${currentDoctor.id}`} key="canonical" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Physician",
              "name": currentDoctor.name,
              "image": `https://ramacarepolyclinic.ae${currentDoctor.image}`,
              "description": currentDoctor.biography,
              "medicalSpecialty": currentDoctor.specialization,
              "telephone": "+971566597878",
              "memberOf": {
                "@type": "MedicalClinic",
                "name": "RamaCare Polyclinic",
                "url": "https://ramacarepolyclinic.ae/"
              },
              "knowsLanguage": currentDoctor.languages,
              "occupationalCredential": [
                ...currentDoctor.education.map(edu => ({
                  "@type": "EducationalOccupationalCredential",
                  "credentialCategory": "degree",
                  "name": edu
                })),
                ...currentDoctor.certifications.map(cert => ({
                  "@type": "EducationalOccupationalCredential",
                  "credentialCategory": "certification",
                  "name": cert
                }))
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": currentDoctor.rating.toString(),
                "reviewCount": "542",
                "bestRating": "5",
                "worstRating": "1"
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "12 Al Dhiyafah Rd - Jumeirah Terrace Building, Ground Floor, Jumeirah 1",
                "addressLocality": "Dubai",
                "postalCode": "393558",
                "addressCountry": "AE"
              }
            })
          }}
        />
      </Head>
      
      <main>
        <section 
          id="doctor-profile" 
          ref={sectionRef}
          className="relative w-full bg-[#F9FAFB] py-12 sm:py-16 lg:py-20 overflow-hidden font-sans"
          style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Back to all doctors */}
            <div className="mb-8">
              <button 
                onClick={() => window.location.href = '/doctors/'}
                className="flex items-center gap-2 text-[#1b5e3f] hover:text-[#2d7a56] font-medium"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to All Doctors
              </button>
            </div>

            {/* Doctor Profile Header */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.08)] mb-12">
              <div className="lg:flex">
                {/* Doctor Image and Info */}
                <div className="lg:w-1/3 p-8 bg-gradient-to-br from-gray-50 to-gray-100">
                  <div className="relative w-full h-80 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden mx-auto">
                    {currentDoctor.image ? (
                      <Image 
                        src={currentDoctor.image} 
                        alt={currentDoctor.name}
                        fill
                        priority
                        sizes="(max-width: 768px) 100vw, 400px"
                        className="object-cover object-[50%_20%]"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-teal-50 to-blue-50 flex items-center justify-center">
                        <svg className="w-24 h-24 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                    )}
                  </div>
                  
                  <div className="mt-6 text-center">
                    <h1 className="text-2xl font-bold text-[#111827] mb-2">{currentDoctor.name}</h1>
                    <p className="text-lg text-[#6B7280] mb-4">{currentDoctor.qualifications}</p>
                    
                    <div className="flex items-center justify-center gap-1.5 mb-4">
                      {renderStars(currentDoctor.rating, 'w-5 h-5')}
                      <span className="text-[#111827] font-medium ml-1">{currentDoctor.rating}</span>
                    </div>
                    
                    <div className="inline-block bg-[#F9FAFB] text-[#6B7280] px-4 py-2 rounded-full text-sm font-medium mb-4">
                      {currentDoctor.experience}
                    </div>
                    
                    <div className="flex flex-wrap justify-center gap-2 mb-6">
                      {currentDoctor.languages.map((language, idx) => (
                        <span key={idx} className="bg-[#E8E3D8] text-[#3d5f4a] text-xs font-medium px-3 py-1.5 rounded-full">
                          {language}
                        </span>
                      ))}
                    </div>
                    
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="w-full bg-gradient-to-r from-[#1b5e3f] via-[#2d7a56] to-[#1b5e3f] text-white px-6 py-3.5 rounded-xl font-medium text-sm transition-all duration-200 hover:shadow-md"
                    >
                      Book Appointment with {currentDoctor.firstName}
                    </button>
                  </div>
                </div>
                
                {/* Doctor Details */}
                <div className="lg:w-2/3 p-8">
                  <div className="mb-8">
                    <h2 className="text-xl font-bold text-[#111827] mb-4 border-b pb-2">Biography</h2>
                    <p className="text-[#4B5563] leading-relaxed">
                      {currentDoctor.biography}
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h2 className="text-xl font-bold text-[#111827] mb-4 border-b pb-2">Expertise</h2>
                      <ul className="space-y-3">
                        {currentDoctor.expertise.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A961] mt-2 flex-shrink-0"></span>
                            <span className="text-[#4B5563]">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h2 className="text-xl font-bold text-[#111827] mb-4 border-b pb-2">Education</h2>
                      <ul className="space-y-3">
                        {currentDoctor.education.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <svg className="w-5 h-5 text-[#1b5e3f] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path d="M12 14l9-5-9-5-9 5 9 5z" />
                              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                            </svg>
                            <span className="text-[#4B5563]">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <h2 className="text-xl font-bold text-[#111827] mb-4 border-b pb-2">Certifications</h2>
                    <div className="flex flex-wrap gap-3">
                      {currentDoctor.certifications.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 bg-[#F3F4F6] px-4 py-2 rounded-lg text-sm text-[#4B5563]">
                          <svg className="w-4 h-4 text-[#C9A961]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <BeginYourHealingJourneySection />
          </div>
        </section>
      </main>
    </Layout>
  );
};

export async function getStaticPaths() {
  const paths = Object.values(DOCTORS).map(doctor => ({
    params: { id: doctor.id.toString() }
  }));
  
  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const doctorId = parseInt(params.id);
  const doctor = Object.values(DOCTORS).find(d => d.id === doctorId);
  
  // Add default biography, education, certifications if not present
  const doctorWithDefaults = {
    ...doctor,
    biography: doctor.biography || `${doctor.name} is a dedicated professional with expertise in ${doctor.specialization}.`,
    education: doctor.education || [doctor.qualifications],
    certifications: doctor.certifications || (doctor.isDHALicensed ? ['DHA Licensed'] : [])
  };
  
  return {
    props: {
      doctor: doctorWithDefaults
    }
  };
}

export default DoctorProfilePage;
