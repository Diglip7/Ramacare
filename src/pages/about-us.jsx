import Layout from "../../components/Layout";
import Head from "next/head";
import AboutAyurvedaSection from "../../components/AboutAyurvedaSection";
import WhyAyurvedaDubaiSection from "../../components/WhyAyurvedaDubaiSection";
import ExpertsSection from "../../components/ExpertsSection";
import BeginYourHealingJourneySection from "../../components/BeginYourHealingJourneySection";
import SEOContentSection from "../../components/SEOContentSection";
import { useState, useEffect } from "react";

export default function About() {
  const aboutSEOContent = [
    "RamaCare Polyclinic is a leading DHA-licensed multi-specialty medical center located in Jumeirah 1, Dubai. Our clinic was founded with the vision of providing patient-centered, high-quality healthcare that combines the best of modern medical science with time-tested traditional healing practices. We are committed to excellence in everything we do, from our clinical treatments to our patient support services.",
    {
      type: "heading",
      text: "Our Philosophy of Care"
    },
    "At RamaCare, we believe that true healing involves more than just treating symptoms. We focus on the whole person, taking into account their lifestyle, environment, and individual health goals. Our team of expert doctors in Dubai works collaboratively to ensure that each patient receives a comprehensive and personalized treatment plan.",
    {
      type: "list",
      items: [
        "Patient-Focused Approach: We listen to your concerns and involve you in every decision about your care.",
        "Ethical Medical Practices: We adhere to the highest standards of integrity and transparency in all our treatments.",
        "Modern Technology: Our facility is equipped with advanced medical equipment for accurate diagnosis and effective treatment.",
        "Experienced Specialists: Our DHA-licensed doctors bring years of expertise in their respective fields."
      ]
    },
    {
      type: "heading",
      text: "Serving the Dubai Community"
    },
    "Since our establishment, RamaCare Polyclinic has become a trusted name in the Dubai healthcare landscape. We are proud to serve the diverse community of Jumeirah 1 and the wider Dubai area, offering a welcoming and professional environment for patients of all ages. Whether you are visiting us for preventive care or specialized treatment, your health and well-being are our top priorities.",
    "We invite you to learn more about our services and meet our dedicated team. At RamaCare Polyclinic, we are here to support you on your journey to better health. Discover why we are considered one of the best polyclinics in Dubai for personalized and effective medical care."
  ];

  const [isClient, setIsClient] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toast, setToast] = useState({ show: false, type: 'success', message: '' });

  useEffect(() => {
    setIsClient(true);
  }, []);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, type, message });
    setTimeout(() => setToast(prev => ({ ...prev, show: false })), 3000);
  };

  const handleBookAppointment = () => {
    setIsModalOpen(true);
    showToast('Opening appointment booking...', 'success');
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Custom content for About Us page
  const aboutContent = {
    badge: 'About RamaCare Polyclinic',
    title: 'Authentic Healing Within a Modern Polyclinic',
    description: 'RamaCare Polyclinic is a premier DHA-licensed healthcare facility in Jumeirah 1, Dubai, offering comprehensive medical services with a perfect blend of traditional healing and modern medicine.',
    paragraphs: [
      'RamaCare Polyclinic is a leading multi-specialty clinic in Dubai, offering high-quality healthcare services, including physiotherapy in Dubai, dental care, skin treatments, and general medicine under one roof. We are committed to delivering reliable, patient-focused care in a comfortable and professional environment.',
    'Our clinic is designed to provide convenient access to experienced doctors in Dubai, ensuring every patient receives the right diagnosis and effective treatment. We understand that every patient has unique health concerns, which is why we take a personalized approach to care—listening carefully, evaluating thoroughly, and creating treatment plans tailored to individual needs.',
    'At RamaCare Polyclinic, we combine modern medical technology with a compassionate approach to ensure a seamless healthcare experience. From your first consultation to recovery and follow-up, our team is dedicated to supporting you at every step. Whether you are visiting for routine checkups, pain management, dental care, or skin treatments, we focus on delivering results that improve your overall well-being.'
    
  ],
    stats: [
      { number: '15+', label: 'Years of Excellence' },
      { number: '500+', label: 'Happy Patients' },
      { number: '30+', label: 'Expert Doctors' },
      { number: '98%', label: 'Satisfaction Rate' }
    ],
    ctaText: 'Meet Our Experts',
    image: '/images/about.jpg',
    imageAlt: 'RamaCare Polyclinic facility',
    overlayCard: {
      number: '15+',
      smallText: 'Years of Excellence',
      boldText: 'Trusted Healthcare in Dubai'
    }
  };
const whyContent = {
  badge: 'Our Mission',

  title: 'Your Trusted Polyclinic in Dubai',

  description:
    'Our mission is to provide affordable and high-quality healthcare in Dubai with a strong focus on patient satisfaction, ethical practices, and long-term wellness. We aim to become a trusted choice for individuals and families looking for the best polyclinic in Dubai.',

  // ✅ Keep only supporting content (not overloaded)
  paragraphs: [
    'At RamaCare Polyclinic, our team includes highly qualified and experienced medical specialists in Dubai who are dedicated to providing personalized care.',
    'Our doctors follow evidence-based practices and modern techniques to ensure the best outcomes for our patients.',
    'As a modern medical center in Dubai, we help our patients stay healthy and avoid long-term health complications.'
  ],

  // ✅ MAIN CONTENT → CARDS (matches your UI)
  benefits: [
    {
      icon: 'Droplets',
      title: "Our Mission",
      description:
        "Affordable, high-quality healthcare in Dubai focused on patient satisfaction, ethical practices, and long-term wellness."
    },
    {
      icon: 'Brain',
      title: "Expert Doctors in Dubai You Can Trust",
      description:
        "Highly qualified specialists providing physiotherapy, dental care, skin treatments, and general physician consultations with personalized care."
    },
    {
      icon: 'Sparkles',
      title: "Comprehensive Healthcare Services",
      description:
        "Specialist consultations, preventive health checkups, diagnostic services, and personalized treatment plans—all in one place."
    },
    {
      icon: 'Activity',
      title: "Patient-Centered Care",
      description:
        "Personalized treatment plans, clear communication, and a comfortable, stress-free healthcare experience for every patient."
    },
    {
      icon: 'Heart',
      title: "Focus on Preventive Healthcare",
      description:
        "Regular health checkups, early diagnosis, and healthy lifestyle guidance to prevent long-term health issues."
    },
    {
      icon: 'ShieldCheck',
      title: "Commitment to Quality Healthcare",
      description:
        "International treatment guidelines, advanced medical technology, and continuous improvement ensuring safe, reliable care."
    }
  ],

  image: '/images/why.jpeg',
  imageAlt: 'Professional healthcare team',

  ctaCard: {
    title: 'Expert Doctors in Dubai You Can Trust',
    description:
      'At RamaCare Polyclinic, our team includes highly qualified and experienced medical specialists in Dubai who are dedicated to providing personalized care.'
  },

  bottomSection: {
    title: 'Your Trusted Polyclinic in Dubai',
    description:
      'RamaCare Polyclinic is dedicated to providing trusted and professional healthcare services in Dubai. Whether you need a consultation, treatment, or preventive care, we are here to support your health journey.👉 Your health is our priority.'
  }
};
  const expertsContent = {
    badge: 'Our Medical Team',
    title: 'Meet Our DHA-Licensed Experts',
    description: 'Highly qualified doctors with decades of combined experience, committed to your healing journey with expertise, compassion, and personalized care.',
    stats: [
      { value: '30+', label: 'Expert Doctors' },
      { value: '15+', label: 'Years of Combined Experience' },
      { value: '500+', label: 'Successful Treatments' },
      { value: '4.8', label: 'Average Rating' }
    ],
    ctaSection: {
      title: 'Take the First Step Toward Better Health',
      description: 'Connect with our DHA-licensed specialists at RamaCare Polyclinic, a leading Polyclinic in Dubai, and receive expert guidance tailored specifically to you.',
      primaryButton: 'Book Consultation Now',
      secondaryButton: 'View Our Team'
    }
  };

  // Removed early return for SEO crawlers to see content
  // if (!isClient) {
  //   return null;
  // }

  return (
    <Layout>
      <Head>
        <title key="title">About Us | RamaCare Polyclinic Dubai</title>
        <meta name="description" content="Learn about RamaCare Polyclinic in Dubai. Our mission is to provide high-quality, patient-focused healthcare combining traditional and modern medicine." key="description" />
        <meta name="keywords" content="RamaCare Polyclinic Dubai, About RamaCare, Healthcare Dubai, Medical clinic Jumeirah, DHA licensed doctors, About us healthcare Dubai" />
      </Head>
      
      {/* Hero Section - Custom for About Us */}
      <section className="relative bg-gradient-to-br from-[#1a5f3f] via-[#2d5f3f] to-[#1a5f3f] text-white py-16 md:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <span className="text-sm font-medium">
                About RamaCare Polyclinic
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-text-white leading-tight mb-6">
              <span className="text-[#d4a574]">About Us</span> 
            </h1>
            <p className="text-lg sm:text-xl text-white leading-relaxed max-w-3xl mx-auto">
             Your trusted healthcare partner in Dubai, delivering comprehensive medical care with compassion, expertise, and a strong commitment to patient well-being in Jumeirah 1.
            </p>
          </div>
        </div>
      </section>
                                                                                       
      {/* Main Content Sections */}
      <AboutAyurvedaSection content={aboutContent} />
      <WhyAyurvedaDubaiSection content={whyContent} />
      <ExpertsSection content={expertsContent} onBookAppointment={handleBookAppointment} />
      <SEOContentSection title="About RamaCare: Excellence in Healthcare Dubai" content={aboutSEOContent} />

      {/* Booking Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 modal-overlay animate-fadeIn" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', backdropFilter: 'blur(4px)' }} onClick={handleCloseModal}>
          <div className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl modal-content scrollbar-hide transform animate-scaleIn" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={handleCloseModal} 
              className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>
            <BeginYourHealingJourneySection 
              isModal={true} 
              onClose={handleCloseModal} 
              onSubmissionSuccess={() => {
                handleCloseModal();
                showToast('Appointment booked successfully!', 'success');
              }}
              onSubmissionError={() => {
                showToast('Failed to book appointment. Please try again.', 'error');
              }}
            />
          </div>
        </div>
      )}

      {/* Toast Notifications */}
      {toast.show && (
        <div className="fixed top-6 right-6 z-[10000]" style={{ animation: 'toastSlideIn 0.4s cubic-bezier(0.16, 1, 0.3, 1)' }}>
          <div className={`flex items-center gap-3 px-5 py-3.5 rounded-xl shadow-xl border backdrop-blur-sm transition-all ${
            toast.type === 'success' 
              ? 'bg-emerald-600/95 border-emerald-500 text-white' 
              : 'bg-red-600/95 border-red-500 text-white'
          }`}>
            {toast.type === 'success' ? (
              <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
            ) : (
              <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" /></svg>
            )}
            <span className="font-medium text-sm tracking-wide">{toast.message}</span>
          </div>
        </div>
      )}

      {/* CSS Animations */}
      <style jsx global>{`
        @keyframes toastSlideIn {
          from { transform: translateX(120%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </Layout>
  );
}