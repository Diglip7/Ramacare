import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { 
  Sparkles, 
  Leaf, 
  Activity, 
  Stethoscope, 
  X, 
  Phone, 
  Calendar, 
  ChevronDown,
  Menu,
  MessageCircle
} from "lucide-react";
import BeginYourHealingJourneySection from './BeginYourHealingJourneySection';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);
  const [dropdownTimeout, setDropdownTimeout] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toast, setToast] = useState({ show: false, type: 'success', message: '' });
  const router = useRouter();

  const showToast = (message, type = 'success') => {
    setToast({ show: true, type, message });
    setTimeout(() => setToast(prev => ({ ...prev, show: false })), 3000);
  };
  
  const treatmentCategories = [
    {
      name: 'Aesthetic Dermatology',
      slug: 'aesthetic-dermatology-dubai',
      subcategories: [
        { name: 'Skin Treatment', slug: 'skin-treatment-dubai' },
        { name: 'Hair Treatment', slug: 'hair-treatment-dubai' },
        { name: 'Laser Treatment', slug: 'laser-treatment-dubai' },
        { name: 'Body Shaping', slug: 'body-shaping-dubai' }
      ],
      icon: Sparkles
    },
    {
      name: 'Dental',
      slug: 'dental-dubai',
      subcategories: [
        { name: 'Composite Veneers', slug: 'composite-veneers' },
        { name: 'Dental Veneers', slug: 'dental-veneers-dubai' },
        { name: 'Root Canal Treatment', slug: 'root-canal-treatment-dubai' },
        { name: 'Snap On Smile', slug: 'snap-on-smile-dubai' },
        { name: 'Teeth Bleaching', slug: 'teeth-bleaching-dubai' },
        { name: 'Teeth Dentures', slug: 'teeth-dentures-dubai' },
        { name: 'Tooth Composite Restoration', slug: 'teeth-composite-restoration-dubai' },
        { name: 'Braces (Metal & Ceramic)', slug: 'braces-metal-ceramic-dubai' },
        { name: 'Dental Crown Bridges', slug: 'dental-crown-bridges-dubai' },
        { name: 'Teeth Scaling & Polishing', slug: 'teeth-scaling-polishing-dubai' },
        { name: 'Gum Disease Treatment', slug: 'gum-disease-treatment-dubai' }
      ],
      icon: Sparkles
    },
    {
      name: 'Ayurveda',
      slug: 'ayurveda-dubai',
      subcategories: [
        { name: 'Ayurvedic Hairfall Treatment', slug: 'ayurvedic-hairfall-treatment-dubai' },
        { name: 'Analysis Of Individual', slug: 'analysis-of-individual-dubai' },
        { name: 'Skin Diseases Treatment', slug: 'skin-diseases-treatment' },
        { name: 'Ayurvedic Diet Plan', slug: 'ayurvedic-diet-plan-dubai' },
        { name: 'Panchakarma Treatment', slug: 'panchakarma-treatment' },
        { name: 'Gastrointestinal Diseases Treatment', slug: 'gastrointestinal-diseases-treatment-dubai' },
        { name: 'PCOS Treatment', slug: 'pcos-treatment-dubai' },
        { name: 'Abhyanga Massage', slug: 'abhyanga-massage-dubai' },
        { name: 'Basti Therapy', slug: 'basti-therapy-dubai' },
        { name: 'Shirodhara Therapy', slug: 'shirodhara-therapy-in-dubai' },
        { name: 'Nasya Therapy', slug: 'nasya-therapy-dubai' },
        { name: 'Ayurvedic Gut Health', slug: 'ayurvedic-gut-health-dubai' },
        { name: 'Ayurvedic Detox Diet Plan', slug: 'ayurvedic-detox-diet-plan-dubai' },
        { name: 'Ayurvedic Diet for Skin & Hair', slug: 'ayurvedic-diet-skin-hair-dubai' },
        { name: 'Ayurvedic Diet vs Intermittent Fasting', slug: 'ayurvedic-diet-vs-intermittent-fasting-dubai' },
        { name: 'Ayurvedic Diet vs Keto', slug: 'ayurvedic-diet-vs-keto-dubai' },
        { name: 'Ayurvedic Diet for PCOS', slug: 'ayurvedic-diet-pcos-dubai' },
        { name: 'Ayurvedic Diet for Diabetes', slug: 'ayurvedic-diet-diabetes-dubai' },
        { name: 'Ayurvedic Diet Plan for Busy Professionals', slug: 'ayurvedic-diet-plan-busy-professionals-dubai' },
        { name: 'Ayurvedic Diet for Weight Loss', slug: 'ayurvedic-diet-weight-loss-dubai' },
        { name: 'Ayurvedic Diet for Dubai Summer', slug: 'ayurvedic-diet-dubai-summer' },
        { name: 'Ayurvedic Diet for Thyroid', slug: 'ayurvedic-diet-thyroid-dubai' }
      ],
      icon: Leaf
    },
    {
      name: 'Physiotherapy',
      slug: 'physiotherapy-dubai',
      subcategories: [
        { name: 'Ultrasound Therapy', slug: 'ultrasound-therapy-dubai' },
        { name: 'Electrotherapy', slug: 'electrotherapy-dubai' },
        { name: 'Pelvic Floor Therapy', slug: 'pelvic-floor-therapy-dubai' },
        { name: 'Scoliosis Treatment', slug: 'scoliosis-treatment-in-dubai' },
        { name: 'Functional Exercises', slug: 'functional-exercises-dubai' },
        { name: 'Dry Needling', slug: 'dry-needling-dubai' },
        // { name: 'Back Pain Treatment', slug: 'back-pain-treatment-dubai' },
        // { name: 'Knee Pain Treatment', slug: 'knee-pain-treatment-dubai' },
        // { name: 'Migraine Treatment', slug: 'migraine-treatment-dubai' },
        // { name: 'Office Neck Treatment', slug: 'office-neck-treatment-dubai' },
        // { name: 'Post Surgery Recovery', slug: 'post-surgery-recovery-dubai' },
        // { name: 'Post Surgery Rehabilitation', slug: 'post-surgery-rehabilitation-dubai' },
        // { name: 'Physiotherapy Insurance', slug: 'physiotherapy-insurance-dubai' },
        // { name: 'Cervical Spondylosis Treatment', slug: 'cervical-spondylosis-treatment-dubai' },
        // { name: 'Frozen Shoulder Treatment', slug: 'frozen-shoulder-treatment-dubai' },
        // { name: 'Neck Pain Treatment', slug: 'neck-pain-treatment-dubai' },
        // { name: 'Plantar Fasciitis Treatment', slug: 'plantar-fasciitis-treatment-dubai' },
        // { name: 'Sciatica Treatment', slug: 'sciatica-treatment-dubai' },
        // { name: 'Shoulder Pain Treatment', slug: 'shoulder-pain-treatment-dubai' },
        // { name: 'Slip Disc Treatment', slug: 'slip-disc-treatment-dubai' },
        // { name: 'Sports Injury Rehabilitation', slug: 'sports-injury-rehabilitation-dubai' },
        // { name: 'Joint Pain Treatment', slug: 'joint-pain-treatment-dubai' },
        // { name: 'Anxiety Treatment', slug: 'anxiety-treatment-dubai' },
        // { name: 'Stress Treatment', slug: 'stress-treatment-dubai' },
        // { name: 'Insomnia Treatment', slug: 'insomnia-treatment-dubai' }
      ],
      icon: Activity
    },
    {
      name: 'General Physician',
      slug: 'general-physician-dubai',
      subcategories: [
        { name: 'Gastrointestinal Disorders', slug: 'gastrointestinal-disorders-dubai' },
        { name: 'Management of Allergy', slug: 'management-of-allergy-dubai' },
        { name: 'Wound Stitching Services', slug: 'wound-stitching-services-dubai' },
        { name: 'Minor Injury Care', slug: 'minor-injury-care' },
        { name: 'Treatment of Acute Infections', slug: 'treatment-of-acute-infections-dubai' },
        { name: 'Dyslipidemia Diagnosis and Treatment', slug: 'dyslipidemia-diagnosis-and-treatment' },
        { name: 'Personalized Slimming Programs', slug: 'personalized-slimming-programs' },
        { name: 'Thyroid Dysfunction Solutions', slug: 'thyroid-dysfunction-solutions-dubai' },
        { name: 'Asthma and COPD Expertise', slug: 'asthma-and-copd-expertise-dubai' },
        { name: 'Diabetes Mellitus Care', slug: 'diabetes-mellitus-care-dubai' },
        { name: 'Specialized Hypertension Management', slug: 'specialized-hypertension-management' },
        { name: 'Expertise in Routine Check-Ups', slug: 'routine-check-ups-dubai' },
        { name: 'Comprehensive Physical Examinations', slug: 'comprehensive-physical-examinations-dubai' }
      ],
      icon: Stethoscope
    },
    {
      name: 'Facial',
      slug: 'facial-dubai',
      subcategories: [
        { name: 'Hydra Facial', slug: 'hydrafacial-dubai' },
        { name: 'Face PRP in Dubai', slug: 'face-prp-in-dubai' },
        { name: 'Golden Elixir Facial', slug: 'golden-elixir-facial-dubai' },
        { name: 'Exosomes Facial Dubai', slug: 'exosomes-facial-dubai' },
        { name: 'Oxygeneo Illuminate Facial', slug: 'oxygeneo-illuminate-facial-dubai' }
      ],
      icon: Sparkles
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isModalOpen || isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen, isMenuOpen]);

  useEffect(() => {
    return () => {
      if (dropdownTimeout) {
        clearTimeout(dropdownTimeout);
      }
    };
  }, [dropdownTimeout]);

  const handleDropdownEnter = (index) => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setOpenDropdown(index);
  };

  const handleDropdownLeave = () => {
    const timeout = setTimeout(() => {
      setOpenDropdown(null);
    }, 200);
    setDropdownTimeout(timeout);
  };

  const handleBookAppointment = () => {
    setIsModalOpen(true);
    setIsMenuOpen(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleTestimonialsClick = (e) => {
    e.preventDefault();
    const testimonialsSection = document.getElementById('testimonials');
    if (testimonialsSection) {
      const headerOffset = 80;
      const elementPosition = testimonialsSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    } else {
      router.push('/#testimonials');
    }
    setIsMenuOpen(false);
  };

  const handleGalleryClick = (e) => {
    e.preventDefault();
    if (router.pathname === '/') {
      const gallerySection = document.getElementById('gallery');
      if (gallerySection) {
        const headerOffset = 80;
        const elementPosition = gallerySection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    } else {
      router.push('/#gallery');
    }
    setIsMenuOpen(false);
  };

  const handleCallNow = () => {
    window.location.href = 'tel:+971042862006';
  };

  return (
    <>
      <style jsx global>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes toastSlideIn {
          from { transform: translateX(120%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        .dropdown-animate { animation: slideDown 0.2s ease-out; }
        .dropdown-container { transition: opacity 0.2s ease-out, transform 0.2s ease-out; }
        .dropdown-bridge { height: 8px; position: absolute; top: 100%; left: 0; right: 0; z-index: 9998; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        
        .dropdown-scroll::-webkit-scrollbar {
          width: 6px;
        }
        .dropdown-scroll::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 3px;
        }
        .dropdown-scroll::-webkit-scrollbar-thumb {
          background: #c1c1c1;
          border-radius: 3px;
        }
        .dropdown-scroll::-webkit-scrollbar-thumb:hover {
          background: #a8a8a8;
        }
        .dropdown-scroll {
          scrollbar-width: thin;
          scrollbar-color: #c1c1c1 #f1f1f1;
        }
        
        .modal-overlay { animation: fadeIn 0.3s ease-out; }
        .modal-content { animation: slideUp 0.3s ease-out; }
      `}</style>
      
      <header className={`bg-white transition-all duration-300 overflow-visible ${isScrolled ? 'shadow-lg sticky top-0 z-50' : 'shadow-sm'}`}>
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

        {/* ===== DESKTOP VIEW (1024px+) - Simple Single Row ===== */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
              <Image src="/images/Logo.png" alt="RamaCare" width={36} height={36} className="object-contain" priority />
              <div>
                <span className="text-lg font-bold text-[#1C4942] leading-tight">RamaCare</span>
              </div>
            </Link>

            {/* Desktop Navigation - Shows at 1280px (xl) and up */}
            <nav className="hidden xl:flex items-center space-x-0.5 flex-1 justify-center overflow-visible">
              {treatmentCategories.map((category, index) => {
                return (
                  <div key={index} className="relative flex-shrink-0" 
                    onMouseEnter={() => handleDropdownEnter(index)} 
                    onMouseLeave={handleDropdownLeave}>
                    <div 
                      className="flex items-center cursor-pointer"
                      onClick={() => setOpenDropdown(openDropdown === index ? null : index)}
                    >
                      <Link 
                        href={`/services/${category.slug}/`} 
                        className="flex items-center space-x-1 px-2 py-1.5 text-gray-700 hover:text-[#1a5f3f] transition-colors text-xs whitespace-nowrap"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span>{category.name}</span>
                      </Link>
                      <ChevronDown className={`w-3 h-3 text-gray-500 transition-transform duration-200 ml-0.5 ${openDropdown === index ? 'rotate-180' : ''}`} />
                    </div>
                    
                    {openDropdown === index && (
                      <div 
                        className="absolute top-full left-0 mt-2 w-64" 
                        style={{ zIndex: 9999 }}
                        onMouseEnter={() => handleDropdownEnter(index)}
                        onMouseLeave={handleDropdownLeave}>
                        <div className="bg-white rounded-lg shadow-2xl border border-gray-200 py-2 dropdown-animate">
                          <div className="px-4 py-3 border-b border-gray-100 bg-gray-50">
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-semibold text-gray-900">{category.name}</span>
                            </div>
                          </div>
                          <div className="max-h-[400px] overflow-y-auto py-1 dropdown-scroll">
                            {category.subcategories.map((subcategory, subIndex) => (
                              <Link 
                                key={subIndex} 
                                href={`/services/${subcategory.slug}/`} 
                                className="block px-4 py-2.5 text-xs text-gray-700 hover:bg-[#D5F5E3] hover:text-[#27AE60] transition-all"
                                onClick={() => setOpenDropdown(null)}>
                                {subcategory.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
             
              <Link href="/testimonials/" className="px-2 py-1.5 text-gray-700 hover:text-[#1a5f3f] transition-colors text-xs whitespace-nowrap flex-shrink-0">
                Testimonials
              </Link>
              <Link href="/blog/" className="px-2 py-1.5 text-gray-700 hover:text-[#1a5f3f] transition-colors text-xs whitespace-nowrap flex-shrink-0">
                Blogs
              </Link>
            </nav>

            {/* Desktop Buttons - Shows at 1280px (xl) and up */}
            <div className="hidden xl:flex items-center space-x-2 flex-shrink-0">
              <button onClick={handleCallNow} className="flex items-center space-x-1.5 px-3 py-1.5 border-2 border-[#1a5f3f] text-[#1a5f3f] rounded-lg hover:bg-[#1a5f3f] hover:text-white transition-all text-xs font-medium">
                <Phone className="w-3.5 h-3.5" />
                <span>Call Now</span>
              </button>
              <button onClick={handleBookAppointment} className="flex items-center space-x-1.5 px-4 py-1.5 bg-[#1a5f3f] text-white rounded-lg hover:bg-[#154a32] transition-all text-xs font-medium">
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Appointment</span>
              </button>
            </div>

            {/* Mobile Menu Button - Shows below 1280px */}
            <button className="xl:hidden p-2 text-gray-700 hover:text-[#1a5f3f] transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* ===== MOBILE MENU OVERLAY (Below 1280px) ===== */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-[9999] xl:hidden">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)}></div>
            
            {/* Slide-out Menu */}
            <div className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl overflow-y-auto scrollbar-hide">
              {/* Menu Header */}
              <div className="sticky top-0 bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between z-10">
                <div className="flex items-center space-x-2">
                  <Image src="/images/Logo.png" alt="RamaCare" width={28} height={28} className="object-contain" priority />
                  <span className="font-bold text-[#1C4942]">RamaCare</span>
                </div>
                <button onClick={() => setIsMenuOpen(false)} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Menu Content */}
              <div className="p-4 space-y-1">
                {/* Treatment Categories */}
                <div className="mb-4">
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2 px-2">Treatments</div>
                  {treatmentCategories.map((category, index) => {
                    const IconComponent = category.icon;
                    return (
                      <div key={index} className="mb-1">
                        <div className="flex items-center">
                          {/* Category Link - Clickable */}
                          <Link 
                            href={`/services/${category.slug}/`}
                            className="flex-1 flex items-center space-x-3 px-3 py-2.5 text-gray-700 hover:bg-gray-50 rounded-l-lg transition-colors text-sm font-medium"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <div className="w-7 h-7 rounded-lg bg-[#1a5f3f]/10 flex items-center justify-center flex-shrink-0">
                              <IconComponent className="w-3.5 h-3.5 text-[#1a5f3f]" />
                            </div>
                            <span className="flex-1">{category.name}</span>
                          </Link>
                          
                          {/* Toggle Button for Subcategories */}
                          <button 
                            onClick={() => setOpenMobileDropdown(openMobileDropdown === index ? null : index)}
                            className="px-2 py-2.5 text-gray-500 hover:text-[#1a5f3f] hover:bg-gray-50 rounded-r-lg transition-colors"
                          >
                            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${openMobileDropdown === index ? 'rotate-180' : ''}`} />
                          </button>
                        </div>
                        
                        {openMobileDropdown === index && (
                          <div className="ml-10 mt-1 space-y-0.5 pb-2 max-h-[300px] overflow-y-auto dropdown-scroll">
                            {category.subcategories.map((subcategory, subIndex) => (
                              <Link 
                                key={subIndex} 
                                href={`/services/${subcategory.slug}/`} 
                                className="block px-3 py-2 text-xs text-gray-600 hover:text-[#1a5f3f] hover:bg-gray-50 rounded-lg transition-all"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {subcategory.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Quick Links */}
                <div className="border-t border-gray-200 pt-4 mb-4">
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2 px-2">Quick Links</div>
                  <Link href="/testimonials/" className="flex items-center space-x-3 px-3 py-2.5 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors text-sm" onClick={() => setIsMenuOpen(false)}>
                    <span className="w-2 h-2 rounded-full bg-[#1a5f3f]"></span>
                    <span>Testimonials</span>
                  </Link>
                  <Link href="/blog/" className="flex items-center space-x-3 px-3 py-2.5 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors text-sm" onClick={() => setIsMenuOpen(false)}>
                    <span className="w-2 h-2 rounded-full bg-[#1a5f3f]"></span>
                    <span>Blogs</span>
                  </Link>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-2 pt-2">
                  <button onClick={handleCallNow} className="w-full flex items-center justify-center space-x-2 px-4 py-3 border-2 border-[#1a5f3f] text-[#1a5f3f] rounded-xl hover:bg-[#1a5f3f] hover:text-white transition-all text-sm font-semibold">
                    <Phone className="w-4 h-4" />
                    <span>Call Now</span>
                  </button>
                  <button onClick={handleBookAppointment} className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-[#1a5f3f] to-[#154a32] text-white rounded-xl hover:shadow-lg transition-all text-sm font-semibold">
                    <Calendar className="w-4 h-4" />
                    <span>Book Appointment</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {isModalOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 modal-overlay" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} onClick={handleCloseModal}>
          <div className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl modal-content scrollbar-hide" onClick={(e) => e.stopPropagation()}>
            <button onClick={handleCloseModal} className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors" aria-label="Close modal">
              <X className="w-6 h-6 text-gray-600" />
            </button>
            <BeginYourHealingJourneySection 
              isModal={true} 
              onClose={handleCloseModal} 
              onSubmissionSuccess={() => showToast('Appointment request submitted successfully!', 'success')}
            />
          </div>
        </div>
      )}
    </>
  );
};
export default Header;
