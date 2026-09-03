import React from 'react';

const ServiceWhyChoose = ({ content, customExpectationTitle }) => {
  if (!content) return null;

  const { title, intro, features, closingParagraph } = content;
  if (!title || !intro || !features) return null;

  const introParagraphs = intro.split('\n\n').filter(Boolean);
  const expectationTitle = customExpectationTitle || 'What You Can Expect at RamaCare';
  return (
    <section id="why-choose-us" className="w-full bg-gradient-to-b from-white to-[#F9FAFB] py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Left column: Why Patients Choose... */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#E5E7EB]">
            <div className="mb-6">
              <span className="inline-block bg-[#E8E3D8] text-[#2D5F3F] px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Why Choose Us</span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#111827] leading-tight mb-6">
                {title}
              </h2>
              
              {/* Decorative element */}
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px flex-1 bg-gradient-to-r from-[#2D5F3F]/50 to-transparent"></div>
                <div className="w-8 h-8 rounded-full bg-[#2D5F3F]/10 flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#2D5F3F]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="h-px flex-1 bg-gradient-to-l from-[#2D5F3F]/50 to-transparent"></div>
              </div>
            </div>
            
            {/* Intro paragraphs */}
            <div className="space-y-4">
              {introParagraphs.map((paragraph, idx) => (
                <p 
                  key={idx} 
                  className="text-[#6B7280] leading-relaxed text-sm md:text-base"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Right column: What You Can Expect / Custom Title */}
          <div className="bg-gradient-to-br from-[#2D5F3F]/5 to-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#2D5F3F]/20">
            <h3 className="text-xl md:text-2xl font-bold text-[#2D5F3F] mb-6">
              {expectationTitle}
            </h3>
            <ul className="space-y-5">
              {features.map((feature, index) => (
                <li key={feature.id} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#2D5F3F] rounded-full flex items-center justify-center mt-0.5">
                    <svg 
                      className="w-5 h-5 text-white" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24">
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M5 13l4 4L19 7" 
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[#111827] font-semibold text-base">{feature.title}</p>
                    {feature.description && (
                      <p className="text-[#6B7280] text-sm mt-1">{feature.description}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
            
            {/* Closing paragraph if available */}
            {closingParagraph && (
              <p className="mt-8 text-[#6B7280] leading-relaxed text-sm md:text-base border-t border-[#2D5F3F]/20 pt-6">
                {closingParagraph}
              </p>
            )}

            <div className="mt-6 pt-4 border-t border-[#2D5F3F]/20">
              <p className="text-xs md:text-sm text-[#2D5F3F] font-semibold">
                Looking for multi-specialty care in Jumeirah 1? Visit our <a href="/services/polyclinic-in-jumeirah-1/" className="underline font-bold hover:text-[#17493B]">Jumeirah 1 Polyclinic Authority Hub</a> to view all DHA-licensed doctors, clinic directions, and parking details.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceWhyChoose;
