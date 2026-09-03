import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const router = useRouter();
  const [isFabOpen, setIsFabOpen] = useState(false);

  const handleSmoothScroll = (event, hash) => {
    event.preventDefault();
    const targetSelector = hash.startsWith('#') ? hash : `#${hash}`;

    if (router.pathname === '/') {
      const target = document.querySelector(targetSelector);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }

    router.push(`/${targetSelector}`);
  };

  // Handle appointment button click
  const handleAppointmentClick = () => {
    setIsFabOpen(false); // Close the FAB menu

    if (router.pathname === '/') {
      const target = document.querySelector('#appointment');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      router.push('/#appointment');
    }
  };

  // Handle call button click
  const handleCallClick = () => {
    setIsFabOpen(false); // Close the FAB menu
    // UPDATE: Replace with your actual phone number
   window.location.href = 'tel:+971566597878';
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className="bg-[#2d2d2d] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
        {/* Main Footer Content - Four Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 mb-6 sm:mb-8">
          {/* Column 1: Ayurveda Dubai */}
          <div className="space-y-3">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">RamaCare</h3>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Premium Polyclinic in Dubai Trusted Healthcare in Jumeirah 1. Authentic Panchakarma, chronic pain relief, and holistic wellness treatments by DHA-licensed experts.
            </p>

            <button className="flex items-center space-x-2 px-4 py-2 bg-[#3d3d3d] text-white rounded-md hover:bg-[#4d4d4d] transition-colors text-sm w-fit">
              <svg className="w-4 h-4 text-yellow-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <span>DHA Licensed Number - 2036418</span>
            </button>

            <button className="flex items-center space-x-2 px-4 py-2 bg-[#3d3d3d] text-white rounded-md hover:bg-[#4d4d4d] transition-colors text-sm w-fit">
              <svg className="w-4 h-4 text-yellow-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <span>Advertisement License No - ZR478282–271025</span>
            </button>

          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-2.5 text-gray-400 text-sm">
              <li>
                <Link
                  href="/about-us/"
                  className="hover:text-[#d4a574] transition-colors inline-block"
                >
                  About Our RamaCare Polyclinic
                </Link>
              </li>
              <li>
                <Link
                  href="/services/"
                  className="hover:text-[#d4a574] transition-colors inline-block"
                >
                  Our Treatments
                </Link>
              </li>
              <li>
                <Link
                  href="/#programs"
                  onClick={(e) => handleSmoothScroll(e, '#programs')}
                  className="hover:text-[#d4a574] transition-colors inline-block"
                >
                  Signature Programs
                </Link>
              </li>
              <li>
                <Link
                  href="/doctors/"
                  className="hover:text-[#d4a574] transition-colors inline-block"
                >
                  Meet Our Experts
                </Link>
              </li>
              <li>
                <Link
                  href="/testimonials/"
                  className="hover:text-[#d4a574] transition-colors inline-block"
                >
                  Patient Testimonials
                </Link>
              </li>
              <li>
                <Link
                  href="/#faq"
                  onClick={(e) => handleSmoothScroll(e, '#faq')}
                  className="hover:text-[#d4a574] transition-colors inline-block">
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/book-appointment/"
                  className="hover:text-[#d4a574] transition-colors inline-block"
                >
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Popular Treatments */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Popular Treatments</h4>
            <ul className="space-y-2 sm:space-y-2.5 text-gray-400 text-sm">
              <li>
                <Link href="/services/ayurveda-dubai/" className="hover:text-[#d4a574] transition-colors inline-block">
                  Ayurveda Treatments Dubai
                </Link>
              </li>
              <li>
                <Link href="/services/aesthetic-dermatology-dubai/" className="hover:text-[#d4a574] transition-colors inline-block">
                  Aesthetic Dermatology Dubai
                </Link>
              </li>
              <li>
                <Link href="/services/dental-dubai/" className="hover:text-[#d4a574] transition-colors inline-block">
                  Dental Treatments Dubai
                </Link>
              </li>
              <li>
                <Link href="/services/physiotherapy-dubai/" className="hover:text-[#d4a574] transition-colors inline-block">
                  Physiotherapy Dubai
                </Link>
              </li>
              <li>
                <Link href="/services/facial-dubai/" className="hover:text-[#d4a574] transition-colors inline-block">
                  Facial Treatments Dubai
                </Link>
              </li>
              <li>
                <Link href="/services/general-physician-dubai/" className="hover:text-[#d4a574] transition-colors inline-block">
                  General Physician Dubai
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Contact Us</h4>
            <ul className="space-y-3 sm:space-y-3.5 text-gray-400 text-sm">
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#d4a574]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <a
                  href="https://maps.google.com/?q=Premium+Polyclinic+Jumeirah+1+Dubai"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="flex-1 hover:text-[#d4a574] transition-colors"
                >
                  12 Al Dhiyafah Rd - Jumeirah Terrace Building, Ground Floor, Jumeirah 1 - Dubai
                </a>
              </li>

              <li className="flex items-center space-x-3">
                <svg className="w-5 h-5 flex-shrink-0 text-[#d4a574]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <a href="tel:+971 56 659 7878" className="hover:text-[#d4a574] transition-colors">
                  +971 56 659 7878
                </a>
              </li>

              <li className="flex items-center space-x-3">
                <svg className="w-5 h-5 flex-shrink-0 text-[#d4a574]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a href="mailto:query@ramacarepolyclinic.ae" className="hover:text-[#d4a574] transition-colors break-all">
                  query@ramacarepolyclinic.ae
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#d4a574]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <div className="flex-1">
                  <div>sun-sat: 10:00 AM - 10:00 PM</div>
                </div>
              </li>
            </ul>

            {/* Follow Us Section */}
            <div className="mt-5 sm:mt-6">
              <h5 className="text-sm font-semibold mb-3">Follow Us</h5>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <a
                  href="https://www.facebook.com/RamaCarePolyClinic/"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="w-9 h-9 sm:w-10 sm:h-10 bg-[#3d3d3d] rounded-full flex items-center justify-center hover:bg-[#d4a574] transition-colors group"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>

                <a
                  href="https://www.instagram.com/ramacarepolyclinic/"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="w-9 h-9 sm:w-10 sm:h-10 bg-[#3d3d3d] rounded-full flex items-center justify-center hover:bg-[#d4a574] transition-colors group"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                <a
                  href="https://www.linkedin.com/company/ramacarepolyclinics/"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="w-9 h-9 sm:w-10 sm:h-10 bg-[#3d3d3d] rounded-full flex items-center justify-center hover:bg-[#d4a574] transition-colors group"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>

                <a
                  href="https://www.youtube.com/@ramacarepolyclinic"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="w-9 h-9 sm:w-10 sm:h-10 bg-[#3d3d3d] rounded-full flex items-center justify-center hover:bg-[#d4a574] transition-colors group"
                  aria-label="YouTube"
                >
                  <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* SEO Keywords Section */}
        <div className="border-t border-gray-600 pt-5 sm:pt-6 mb-5 sm:mb-6">
          <p className="text-[#d4a574] text-xs sm:text-sm text-center leading-relaxed px-2">
            RamaCare Polyclinic is a DHA-licensed healthcare clinic in Jumeirah 1, Dubai, offering Ayurveda, physiotherapy, dermatology, dental care, aesthetic treatments, and holistic wellness services.
          </p>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-600 pt-5 sm:pt-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-xs sm:text-sm space-y-3 md:space-y-0">
          <p className="text-center md:text-left">© 2026 RamaCare Polyclinic. All rights reserved</p>
          <a
            href="https://diglip7.com/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="hover:text-[#d4a574] transition-colors whitespace-nowrap"
          >
            Design by @diglip7
          </a>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <Link href="/refund-and-cancellation-policy/" className="hover:text-[#d4a574] transition-colors whitespace-nowrap">
              Refund & Cancellation Policy
            </Link>
            <Link href="/privacy-policy/" className="hover:text-[#d4a574] transition-colors whitespace-nowrap">
              Privacy Policy
            </Link>
            {/* // <Link href="/disclaimer" className="hover:text-[#d4a574] transition-colors whitespace-nowrap">
            //   Medical Disclaimer
            // </Link> */}
          </div>
        </div>
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 flex flex-col items-center space-y-3">
        {/* CALL BUTTON */}
        <button
          onClick={handleCallClick}
          className={`w-12 h-12 bg-white border-2 border-[#1a5f3f] rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 active:scale-95
            ${isFabOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
          aria-label="Call Us"
        >
          <svg className="w-5 h-5 text-[#1a5f3f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h2l2 5-2 1a16 16 0 007 7l1-2 5 2v2a2 2 0 01-2 2A18 18 0 013 5z" />
          </svg>
        </button>
        {/* CALENDAR BUTTON */}
        <button
          onClick={handleAppointmentClick}
          className={`w-12 h-12 bg-[#d4a574] rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 active:scale-95
            ${isFabOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
          aria-label="Book Appointment"
        >
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M8 7V3m8 4V3M3 11h18M5 5h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z" />
          </svg>
        </button>

        {/* PLUS / CLOSE BUTTON */}
        <button
          onClick={() => setIsFabOpen(!isFabOpen)}
          className="w-14 h-14 bg-[#1a5f3f] rounded-full flex items-center justify-center shadow-xl transition-all duration-300 hover:bg-[#d4a574] hover:scale-110 active:scale-95"
          aria-label={isFabOpen ? "Close menu" : "Open menu"}
        >
          <svg
            className={`w-6 h-6 text-white transition-transform duration-300 ${isFabOpen ? 'rotate-45' : 'rotate-0'
              }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v14M5 12h14" />
          </svg>
        </button>

        {/* SCROLL TO TOP BUTTON */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-11 h-11 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-[#1a5f3f] rounded-full flex items-center justify-center shadow-lg hover:bg-[#d4a574] transition-all duration-300 hover:scale-110 active:scale-95"
          aria-label="Scroll to top"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
