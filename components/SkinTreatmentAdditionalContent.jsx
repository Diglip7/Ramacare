import React from 'react';

const SkinTreatmentAdditionalContent = ({ content }) => {
  if (!content) return null;

  const {
    whyChooseSection,
    professionalBenefits,
    whenToConsider,
    choosingRightApproach,
    skinConditions,
    risksAndSafety,
  } = content;

  return (
    <div>
      {/* Risks & Safety Section */}
      {risksAndSafety && (
        <section id="risks-and-safety" className="w-full py-12 md:py-16 bg-gradient-to-b from-[#F9FAFB] to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#111827] mb-6">
                {risksAndSafety.title}
              </h2>
              <p className="text-base md:text-lg text-[#6B7280]">
                {risksAndSafety.intro}
              </p>
            </div>
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-[#E5E7EB]">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6">
                {risksAndSafety.points.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#2D5F3F] flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-base md:text-lg text-[#111827] font-medium">{point}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 p-6 bg-gradient-to-r from-[#2D5F3F] to-[#3A7B51] rounded-2xl text-white text-center">
                <p className="text-base md:text-lg">{risksAndSafety.closing}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Why Choose RamaCare Section */}
      {whyChooseSection && (
        <section id="why-choose-ramacare" className="w-full bg-gradient-to-b from-white to-[#F9FAFB] py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#E5E7EB]">
                <div className="mb-6">
                  <span className="inline-block bg-[#E8E3D8] text-[#2D5F3F] px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Why Choose Us</span>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#111827] leading-tight mb-6">
                    {whyChooseSection.title}
                  </h2>
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
                <div className="space-y-4">
                  <p className="text-[#6B7280] leading-relaxed text-sm md:text-base">
                    {whyChooseSection.intro}
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#2D5F3F]/5 to-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#2D5F3F]/20">
                <h3 className="text-xl md:text-2xl font-bold text-[#2D5F3F] mb-6">What You Can Expect</h3>
                <ul className="space-y-5">
                  {whyChooseSection.features.map((feature) => (
                    <li key={feature.id} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-[#2D5F3F] rounded-full flex items-center justify-center mt-0.5">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
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
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Professional Benefits Section */}
      {professionalBenefits && (
        <section id="professional-benefits" className="w-full py-12 md:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <span className="inline-block bg-[#E8E3D8] text-[#2D5F3F] px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Why Professional Care</span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#111827] leading-tight mb-6">
                {professionalBenefits.title}
              </h2>
              <p className="text-base md:text-lg text-[#6B7280] max-w-3xl mx-auto">
                {professionalBenefits.intro}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {professionalBenefits.points.map((point) => (
                <div
                  key={point.id}
                  className="bg-gradient-to-br from-white to-[#F9FAFB] rounded-2xl p-6 md:p-8 shadow-lg border border-[#E5E7EB] hover:border-[#2D5F3F]/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#2D5F3F] to-[#3A7B51] rounded-2xl flex items-center justify-center text-white mb-5 shadow-lg">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-[#111827] mb-3">{point.title}</h3>
                  <p className="text-[#6B7280] text-sm md:text-base leading-relaxed">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* When to Consider Section */}
      {whenToConsider && (
        <section id="when-to-consider" className="w-full py-12 md:py-16 bg-gradient-to-b from-[#F9FAFB] to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#111827] mb-6">
                {whenToConsider.title}
              </h2>
              <p className="text-base md:text-lg text-[#6B7280]">
                {whenToConsider.intro}
              </p>
            </div>
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-[#E5E7EB]">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {whenToConsider.points.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#2D5F3F] flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-base md:text-lg text-[#111827] font-medium">{point}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 p-6 bg-gradient-to-r from-[#2D5F3F] to-[#3A7B51] rounded-2xl text-white text-center">
                <p className="text-base md:text-lg">{whenToConsider.closing}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Choosing Right Approach Section */}
      {choosingRightApproach && (
        <section id="choosing-right-approach" className="w-full py-12 md:py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#111827] mb-6">
                {choosingRightApproach.title}
              </h2>
            </div>
            <div className="bg-gradient-to-br from-[#F9FAFB] to-white rounded-2xl p-8 md:p-10 shadow-lg border border-[#E5E7EB]">
              <div className="text-base md:text-lg text-[#6B7280] leading-relaxed mb-6 space-y-4" dangerouslySetInnerHTML={{ __html: choosingRightApproach.content }}></div>
              <style>{`
                #choosing-right-approach ul {
                  margin: 0.75rem 0 1rem 1.25rem;
                  padding: 0;
                }
                #choosing-right-approach li {
                  margin: 0.35rem 0;
                  padding-left: 0.25rem;
                  list-style-type: disc;
                  color: #4b5563;
                }
                #choosing-right-approach b {
                  color: #111827;
                  font-weight: 700;
                }
              `}</style>
              <div className="p-6 bg-[#ECFDF5] rounded-xl border-l-4 border-[#2D5F3F]">
                <p className="text-[#2D5F3F] font-semibold text-base md:text-lg">{choosingRightApproach.closing}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Skin Conditions Section */}
      {skinConditions && (
        <section id="skin-conditions" className="w-full py-12 md:py-16 bg-gradient-to-b from-white to-[#F9FAFB]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <span className="inline-block bg-[#E8E3D8] text-[#2D5F3F] px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Conditions We Treat</span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#111827] leading-tight mb-6">
                {skinConditions.title}
              </h2>
              <p className="text-base md:text-lg text-[#6B7280] max-w-3xl mx-auto">
                {skinConditions.intro}
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
              {skinConditions.conditions.map((condition) => (
                <div
                  key={condition.id}
                  className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-[#E5E7EB] hover:border-[#2D5F3F]/20 transition-all duration-300"
                >
                  <h3 className="text-xl md:text-2xl font-bold text-[#2D5F3F] mb-4">{condition.title}</h3>
                  <p className="text-[#6B7280] text-sm md:text-base leading-relaxed mb-5">{condition.description}</p>
                  <h4 className="text-sm font-semibold text-[#111827] mb-3">Common Concerns:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {condition.commonConcerns.map((concern, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-[#2D5F3F] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-[#4B5563] text-sm">{concern}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            {skinConditions.earlyTreatment && (
              <div className="mt-10 bg-gradient-to-r from-[#2D5F3F] to-[#3A7B51] rounded-2xl p-8 md:p-10 text-white shadow-xl">
                <h3 className="text-xl md:text-2xl font-bold mb-4">{skinConditions.earlyTreatment.title}</h3>
                <p className="text-base md:text-lg leading-relaxed">{skinConditions.earlyTreatment.description}</p>
              </div>
            )}
          </div>
        </section>
      )}
    </div>
  );
};

export default SkinTreatmentAdditionalContent;
