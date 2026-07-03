import React, { useState, useEffect } from 'react';

const QuickNavigation = ({ navItems }) => {
  const [activeSection, setActiveSection] = useState('treatment-info');

  // Default navigation items
  const defaultNavItems = [
    { id: 'treatment-info', label: 'Treatment Info' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'benefits', label: 'Benefits' },
    { id: 'testimonials', label: 'Success Stories' },
     { id: 'our-doctors', label: 'Our Doctors' },
    // { id: 'pricing', label: 'Pricing' },
    { id: 'faq', label: 'FAQ' },
    { id: 'book-now', label: 'Book Now' },
  ];

  const items = navItems || defaultNavItems;

  useEffect(() => {
    const handleScroll = () => {
      // Update active section based on scroll position
      const sections = items.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 150; // Offset for better detection

      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && sections[i].offsetTop <= scrollPosition) {
          setActiveSection(items[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [items]);

  const handleNavClick = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="bg-white border-b border-[#E5E7EB] relative transition-all duration-300 ease-in-out shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col py-2">
          {/* Quick Navigation Label - Above and centered */}
          <div className="flex items-center justify-center gap-1.5 mb-2 transition-opacity duration-300">
            <svg className="w-4 h-4 bg-gradient-to-br from-[#2D5F3F] to-[#3A7B51] bg-clip-text text-transparent transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <span className="bg-gradient-to-r from-[#2D5F3F] to-[#3A7B51] bg-clip-text text-transparent font-semibold text-sm transition-all duration-300">Quick Navigation</span>
          </div>

          {/* Navigation Links - Centered */}
          <div className="flex items-center justify-center gap-4 lg:gap-8 overflow-x-auto scrollbar-hide h-10">
            {items.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative flex-shrink-0 font-medium text-sm transition-all duration-300 ease-in-out whitespace-nowrap h-full flex items-center ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-[#2D5F3F] to-[#3A7B51] bg-clip-text text-transparent'
                    : 'text-[#6B7280] hover:text-[#1F2937]'
                }`}
              >
                {item.label}
                {/* Active Indicator */}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#2D5F3F] to-[#3A7B51] transition-all duration-300 ease-in-out"></span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default QuickNavigation;

