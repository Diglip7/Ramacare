import React from 'react';

const ContentSection = ({ type, content }) => {
  if (!content) return null;

  // How It Works Section - Card Grid Layout
  if (type === 'howItWorks') {
    return (
      <section id="how-it-works" className="w-full bg-gradient-to-br from-[#F9FAFB] via-white to-[#F9FAFB] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#2D5F3F] to-[#3A7B51] rounded-2xl mb-4 shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937] mb-3">{content.treatmentAreas.title}</h2>
            {content.treatmentAreas.subtitle && (
              <p className="text-lg text-[#2D5F3F] font-semibold mb-4">{content.treatmentAreas.subtitle}</p>
            )}
            <p className="text-base text-[#6B7280] max-w-3xl mx-auto">{content.treatmentAreas.intro}</p>
          </div>

          {/* Treatment Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {content.treatmentAreas.areas.map((area, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-[#2D5F3F] hover:border-[#407D54] hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#ECFDF5] to-[#D1FAE5] rounded-xl flex items-center justify-center group-hover:from-[#2D5F3F] group-hover:to-[#3A7B51] transition-all duration-300">
                    <span className="text-[#2D5F3F] group-hover:text-white font-bold text-lg transition-colors duration-300">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-[#1F2937] mb-2 group-hover:text-[#2D5F3F] transition-colors duration-300 capitalize">
                      {area.title}
                    </h3>
                    <p className="text-sm text-[#6B7280] leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Benefits Box */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-[#E5E7EB] hover:border-[#2D5F3F] transition-all duration-300 mb-8">
            <h3 className="text-xl font-bold text-[#1F2937] mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#2D5F3F] to-[#3A7B51] rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              These therapies may help support:
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {content.benefitsList.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 group/item">
                  <span className="flex-shrink-0 w-6 h-6 bg-[#ECFDF5] rounded-full flex items-center justify-center group-hover/item:bg-[#2D5F3F] transition-colors duration-300">
                    <svg className="w-4 h-4 text-[#2D5F3F] group-hover/item:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-sm text-[#4B5563] capitalize">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Box */}
          <div className="bg-gradient-to-r from-[#2D5F3F] to-[#3A7B51] rounded-2xl p-8 shadow-lg">
            <p className="text-white text-center leading-relaxed">
              As part of holistic care, some patients may also benefit from{' '}
              <a href="/services/panchakarma-treatment-dubai/" className="font-bold underline hover:text-[#D1FAE5] transition-colors">
                Panchakarma Treatment Dubai
              </a>{' '}
              programs for deeper detoxification and dosha balance support.
            </p>
          </div>
        </div>
      </section>
    );
  }

  // Digestive Health Section
  if (type === 'digestiveHealth') {
    return (
      <section id="digestive-health" className="w-full bg-white py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#2D5F3F] to-[#3A7B51] rounded-2xl mb-4 shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937] mb-3">{content.title}</h2>
          </div>

          <div className="bg-gradient-to-br from-[#F9FAFB] to-white rounded-2xl p-8 md:p-10 shadow-lg border border-[#E5E7EB]">
            <p className="text-base text-[#6B7280] leading-relaxed mb-6">{content.description}</p>
            <div className="bg-[#ECFDF5] rounded-xl p-6 border-l-4 border-[#2D5F3F]">
              <p className="text-[#065F46] leading-relaxed" dangerouslySetInnerHTML={{ 
                __html: content.approach.replace(
                  /<a\s/gi, 
                  '<a class="font-bold text-[#2D5F3F] hover:text-[#407D54] underline" '
                ) 
              }} />
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Diet & Lifestyle Section
  if (type === 'dietLifestyle') {
    return (
      <section className="w-full bg-gradient-to-br from-[#F9FAFB] to-white py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#2D5F3F] to-[#3A7B51] rounded-2xl mb-4 shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937] mb-3">{content.beforeAfterCare.title}</h2>
            <p className="text-base text-[#6B7280] max-w-2xl mx-auto">{content.beforeAfterCare.intro}</p>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border-2 border-[#E5E7EB] mb-8">
            <h3 className="text-xl font-bold text-[#1F2937] mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#2D5F3F] to-[#3A7B51] rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              Patients may be advised to:
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {content.beforeAfterCare.after.items.map((item, index) => (
                <div key={index} className="flex items-start gap-3 group/item">
                  <span className="flex-shrink-0 w-6 h-6 bg-[#ECFDF5] rounded-full flex items-center justify-center mt-0.5 group-hover/item:bg-[#2D5F3F] transition-colors duration-300">
                    <span className="text-[#2D5F3F] group-hover/item:text-white text-sm font-bold transition-colors duration-300">•</span>
                  </span>
                  <span className="text-sm text-[#4B5563]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Internal Links */}
          <div className="bg-gradient-to-r from-[#2D5F3F] to-[#3A7B51] rounded-2xl p-8 shadow-lg">
            <p className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
              Explore Related Services
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="/services/ayurveda-dubai/" className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-[#2D5F3F] text-sm font-semibold rounded-full hover:bg-[#ECFDF5] hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
                Ayurveda Treatment Dubai
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="/services/panchakarma-treatment-dubai/" className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-[#2D5F3F] text-sm font-semibold rounded-full hover:bg-[#ECFDF5] hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
                Panchakarma Treatment Dubai
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Recovery & Aftercare Section
  if (type === 'recoveryAftercare') {
    return (
      <section id="cost-and-results" className="w-full bg-white py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#2D5F3F] to-[#3A7B51] rounded-2xl mb-4 shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937] mb-3">{content.costTitle}</h2>
            <p className="text-base text-[#6B7280] max-w-2xl mx-auto">{content.resultsDescription}</p>
          </div>

          <div className="bg-gradient-to-br from-[#F9FAFB] to-white rounded-2xl p-8 md:p-10 shadow-lg border-2 border-[#E5E7EB]">
            <h3 className="text-xl font-bold text-[#1F2937] mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#2D5F3F] to-[#3A7B51] rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              Our aftercare support focuses on:
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {content.resultPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-3 group/item">
                  <span className="flex-shrink-0 w-6 h-6 bg-[#ECFDF5] rounded-full flex items-center justify-center mt-0.5 group-hover/item:bg-[#2D5F3F] transition-colors duration-300">
                    <svg className="w-4 h-4 text-[#2D5F3F] group-hover/item:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-sm text-[#4B5563]">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return null;
};

export default ContentSection;
