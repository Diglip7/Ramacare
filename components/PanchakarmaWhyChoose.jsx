import React from 'react';

const WhyChooseSection = ({ content }) => {
  const defaultContent = {
    title: 'Why Choose RamaCare Polyclinic?',
    intro: 'We provide personalized treatments in a safe, hygienic, and patient-focused environment.',
    features: []
  };

  const { title, intro, features } = content?.whyChoose || defaultContent;

  if (!features || features.length === 0) return null;

  return (
    <section id="why-choose" className="w-full bg-white py-12 md:py-16">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#1F2937] text-center mb-4 md:mb-6">
          {title}
        </h2>

        {/* Intro Text */}
        {intro && (
          <p className="text-sm md:text-base text-[#6B7280] text-center max-w-4xl mx-auto mb-8 md:mb-10 leading-relaxed">
            {intro}
          </p>
        )}

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-gradient-to-br from-[#F9FAFB] to-white rounded-xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-[#E5E7EB] hover:border-[#2D5F3F]/30 group"
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-[#2D5F3F]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#2D5F3F]/20 transition-colors duration-300">
                <svg
                  className="w-6 h-6 text-[#2D5F3F]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>

              {/* Title */}
              <h3 className="text-base md:text-lg font-semibold text-[#1F2937] mb-3 group-hover:text-[#2D5F3F] transition-colors duration-300">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-[#6B7280] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
