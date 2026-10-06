import React from 'react';

const BastiTherapySections = ({ sectionType, content }) => {
  if (!content) return null;

  // Conditions Treated Section
  if (sectionType === 'conditions') {
    const conditions = content.conditionsTreated || [];
    const internalLinks = content.internalLinks || [];

    if (conditions.length === 0 && internalLinks.length === 0) return null;

    return (
      <section id="conditions-treated" className="w-full bg-gradient-to-br from-white via-[#F9FAFB] to-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#2D5F3F] to-[#3A7B51] rounded-2xl mb-4 shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937] mb-3">Conditions Commonly Treated</h2>
            <p className="text-base text-[#6B7280] max-w-2xl mx-auto">{content.conditionsSubtitle || 'Common reasons patients see our Ayurveda team'}</p>
          </div>
          
          {/* Conditions Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {conditions.map((condition, index) => (
              <div
                key={condition.id}
                className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-[#2D5F3F] hover:border-[#407D54] hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#ECFDF5] to-[#D1FAE5] rounded-xl flex items-center justify-center group-hover:from-[#2D5F3F] group-hover:to-[#3A7B51] transition-all duration-300">
                    <span className="text-[#2D5F3F] group-hover:text-white font-bold text-lg transition-colors duration-300">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-[#1F2937] mb-2 group-hover:text-[#2D5F3F] transition-colors duration-300">
                      {condition.title}
                    </h3>
                    <p className="text-sm text-[#6B7280] leading-relaxed">
                      {condition.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Internal Links */}
          {internalLinks.length > 0 && (
            <div className="bg-gradient-to-r from-[#2D5F3F] to-[#3A7B51] rounded-2xl p-6 md:p-8 shadow-lg">
              <p className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
                Explore Related Services
              </p>
              <div className="flex flex-wrap gap-3">
                {internalLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.link}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-[#2D5F3F] text-sm font-semibold rounded-full hover:bg-[#ECFDF5] hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
                  >
                    {link.text}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    );
  }

  // Types of Therapy Section
  if (sectionType === 'types') {
    if (!content.types || content.types.length === 0) return null;

    return (
      <section id="treatment-process" className="w-full bg-gradient-to-b from-[#F9FAFB] via-white to-[#F9FAFB] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#2D5F3F] to-[#3A7B51] rounded-2xl mb-4 shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26 3.67 1.26 4.93 0V5l-1-1a2 2 0 00-1.414-.586" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937] mb-3">{content.title}</h2>
            {content.description && (
              <p className="text-base text-[#6B7280] max-w-3xl mx-auto">{content.description}</p>
            )}
          </div>

          {/* Types Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {content.types.map((type, index) => (
              <div
                key={type.id}
                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-[#2D5F3F] hover:-translate-y-2 overflow-hidden"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#ECFDF5]/0 to-[#D1FAE5]/0 group-hover:from-[#ECFDF5]/30 group-hover:to-[#D1FAE5]/30 transition-all duration-500"></div>
                
                <div className="relative">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-[#2D5F3F] to-[#3A7B51] rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-2xl">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-[#1F2937] mb-4 group-hover:text-[#2D5F3F] transition-colors duration-300">
                    {type.title}
                  </h3>
                  <p className="text-sm text-[#6B7280] leading-relaxed mb-4">
                    {type.description}
                  </p>
                  
                  {/* Decorative Line */}
                  <div className="w-0 group-hover:w-full h-1 bg-gradient-to-r from-[#2D5F3F] to-[#3A7B51] transition-all duration-500 rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Why Choose Us Section
  if (sectionType === 'whyChoose') {
    if (!content.features || content.features.length === 0) return null;

    return (
      <section id="why-choose-us" className="w-full bg-gradient-to-br from-[#ECFDF5] via-white to-[#F9FAFB] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#2D5F3F] to-[#3A7B51] rounded-2xl mb-4 shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937] mb-3">{content.title}</h2>
            {content.intro && (
              <p className="text-base text-[#6B7280] max-w-3xl mx-auto">{content.intro}</p>
            )}
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.features.map((feature, index) => (
              <div
                key={feature.id}
                className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#2D5F3F] hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#2D5F3F] to-[#3A7B51] rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-semibold text-[#2D5F3F] bg-[#ECFDF5] px-2 py-1 rounded-full">{String(index + 1).padStart(2, '0')}</span>
                      <h3 className="text-lg font-bold text-[#1F2937] group-hover:text-[#2D5F3F] transition-colors duration-300">{feature.title}</h3>
                    </div>
                    <p className="text-sm text-[#6B7280] leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return null;
};

export default BastiTherapySections;
