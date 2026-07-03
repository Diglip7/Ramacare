import React from 'react';

const TreatmentAdditionalContent = ({ content }) => {
  if (!content) return null;

  const {
    sessionsAndResults,
    professionalBenefits,
    whyChoose,
    causesSection,
    conditionsWeTreat,
    whyChooseSection,
    skinTreatmentContent
  } = content;

  return (
    <div>
      {/* Sessions and Results Section */}
      {sessionsAndResults && (
        <section id="sessions-and-results" className="w-full py-12 md:py-16 bg-gradient-to-b from-white to-[#F9FAFB]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block bg-[#E8E3D8] text-[#2D5F3F] px-4 py-1.5 rounded-full text-sm font-semibold mb-4">{sessionsAndResults.badge || "What to Expect"}</span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#111827] leading-tight mb-6">
                {sessionsAndResults.title}
              </h2>
            </div>
            
            {/* Sessions Needed */}
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-[#E5E7EB] mb-8">
              <p className="text-base md:text-lg text-[#6B7280] mb-4">
                {sessionsAndResults.intro}
              </p>
              {sessionsAndResults.factors && (
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-4">
                  {sessionsAndResults.factors.map((factor, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm md:text-base text-[#4B5563]">
                      <svg className="w-4 h-4 text-[#2D5F3F] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      {factor}
                    </li>
                  ))}
                </ul>
              )}
              {sessionsAndResults.note && (
                <p className="text-base md:text-lg text-[#6B7280] font-medium">
                  {sessionsAndResults.note}
                </p>
              )}
            </div>

            {/* When Results */}
            {sessionsAndResults.whenResults && (
              <div className="bg-gradient-to-r from-[#2D5F3F] to-[#3A7B51] rounded-2xl p-8 md:p-10 text-white shadow-xl">
                <h3 className="text-xl md:text-2xl font-bold mb-4">{sessionsAndResults.whenResults.title}</h3>
                {sessionsAndResults.whenResults.description && (
                  <p className="text-white/90 mb-4">{sessionsAndResults.whenResults.description}</p>
                )}
                {sessionsAndResults.whenResults.examples && (
                  <ul className="space-y-3 mb-6">
                    {sessionsAndResults.whenResults.examples.map((example, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-white flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0a9 9 0 0118 0z" />
                        </svg>
                        <p className="text-white/95">{example}</p>
                      </li>
                    ))}
                  </ul>
                )}
                {sessionsAndResults.whenResults.closing && (
                  <p className="text-white/90 font-medium">{sessionsAndResults.whenResults.closing}</p>
                )}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Professional Benefits Section */}
      {professionalBenefits && (
        <section id="professional-benefits" className="w-full py-12 md:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <span className="inline-block bg-[#E8E3D8] text-[#2D5F3F] px-4 py-1.5 rounded-full text-sm font-semibold mb-4">{professionalBenefits.badge || "Why Professional Care"}</span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#111827] leading-tight mb-6">
                {professionalBenefits.title}
              </h2>
              <div className="text-base md:text-lg text-[#6B7280] max-w-3xl mx-auto">
                {professionalBenefits.intro.split('\n\n').map((p, i) => (
                  <p key={i} className="mb-4">{p}</p>
                ))}
              </div>
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
                  <div className="text-[#6B7280] text-sm md:text-base leading-relaxed mb-4">
                    {point.description.split('\n\n').map((p, i) => (
                      <p key={i} className="mb-2">{p}</p>
                    ))}
                  </div>
                  {point.benefits && (
                    <ul className="space-y-2">
                      {point.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-[#4B5563]">
                          <svg className="w-4 h-4 text-[#2D5F3F] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Why Choose Section */}
      {(whyChoose || whyChooseSection) && (
        <section id="why-choose" className="w-full bg-gradient-to-b from-white to-[#F9FAFB] py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <span className="inline-block bg-[#E8E3D8] text-[#2D5F3F] px-4 py-1.5 rounded-full text-sm font-semibold mb-4">{(whyChoose || whyChooseSection).badge || "Why Choose Us"}</span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#111827] leading-tight mb-6">
                {(whyChoose || whyChooseSection).title}
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  {((whyChoose || whyChooseSection).stats || [
                    { number: "15+", label: "Years Experience" },
                    { number: "5000+", label: "Happy Patients" },
                    { number: "4.9", label: "Patient Rating" },
                    { number: "DHA", label: "Approved" }
                  ]).map((stat, idx) => (
                    <div key={idx} className="bg-white rounded-2xl p-6 shadow-lg border border-[#E5E7EB] text-center">
                      <div className="text-4xl font-bold text-[#2D5F3F] mb-2">{stat.number}</div>
                      <div className="text-[#6B7280] font-medium">{stat.label}</div>
                    </div>
                  ))}
                </div>
                {((whyChoose || whyChooseSection).commitment) && (
                  <div className="bg-gradient-to-br from-[#2D5F3F] to-[#3A7B51] rounded-2xl p-8 text-white shadow-xl">
                    <h3 className="text-xl font-bold mb-4">{(whyChoose || whyChooseSection).commitment.title || "Commitment to Excellence"}</h3>
                    <p className="text-white/90 leading-relaxed">
                      {(whyChoose || whyChooseSection).commitment.description}
                    </p>
                  </div>
                )}
              </div>
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#E5E7EB]">
                {((whyChoose || whyChooseSection)?.points) && (
                  <ul className="space-y-6">
                    {(whyChoose || whyChooseSection).points.map((point, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#2D5F3F] to-[#3A7B51] rounded-full flex items-center justify-center mt-0.5 shadow-lg">
                          <svg
                            className="w-6 h-6 text-white"
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
                        <p className="text-[#111827] font-semibold text-lg">{point}</p>
                      </li>
                    ))}
                  </ul>
                )}
                {((whyChoose || whyChooseSection).note) && (
                  <div className="mt-6 pt-6 border-t border-[#E5E7EB]">
                    <p className="text-[#6B7280] text-sm">{(whyChoose || whyChooseSection).note}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Causes Section */}
      {causesSection && (
        <section id="causes" className="w-full py-12 md:py-16 bg-gradient-to-b from-white to-[#F9FAFB]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <span className="inline-block bg-[#E8E3D8] text-[#2D5F3F] px-4 py-1.5 rounded-full text-sm font-semibold mb-4">{causesSection.badge || "Understanding the Issue"}</span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#111827] leading-tight mb-6">
                {causesSection.title}
              </h2>
              <div className="text-base md:text-lg text-[#6B7280] max-w-3xl mx-auto">
                {causesSection.intro.split('\n\n').map((p, i) => (
                  <p key={i} className="mb-4">{p}</p>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
              {(causesSection.causes || causesSection.conditions).map((cause) => (
                <div
                  key={cause.id}
                  className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-[#E5E7EB] hover:border-[#2D5F3F]/20 transition-all duration-300"
                >
                  <h3 className="text-lg md:text-xl font-bold text-[#2D5F3F] mb-4">{cause.title}</h3>
                  <div className="text-[#6B7280] text-sm md:text-base leading-relaxed mb-4">
                    {cause.description.split('\n\n').map((p, i) => (
                      <p key={i} className="mb-2">{p}</p>
                    ))}
                  </div>
                  {cause.factors && (
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                      {cause.factors.map((factor, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-[#4B5563]">
                          <svg className="w-4 h-4 text-[#2D5F3F] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {factor}
                        </li>
                      ))}
                    </ul>
                  )}
                  {cause.nutrients && (
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                      {cause.nutrients.map((nutrient, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-[#4B5563]">
                          <svg className="w-4 h-4 text-[#2D5F3F] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {nutrient}
                        </li>
                      ))}
                    </ul>
                  )}
                  {cause.concerns && (
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                      {cause.concerns.map((concern, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-[#4B5563]">
                          <svg className="w-4 h-4 text-[#2D5F3F] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {concern}
                        </li>
                      ))}
                    </ul>
                  )}
                  {cause.causes && (
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                      {cause.causes.map((c, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-[#4B5563]">
                          <svg className="w-4 h-4 text-[#2D5F3F] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {c}
                        </li>
                      ))}
                    </ul>
                  )}
                  {cause.items && (
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {cause.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-[#4B5563]">
                          <svg className="w-4 h-4 text-[#2D5F3F] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                  {cause.closing && (
                    <p className="text-[#2D5F3F] font-semibold text-sm md:text-base mt-4 pt-4 border-t border-[#E5E7EB]">
                      {cause.closing}
                    </p>
                  )}
                </div>
              ))}
            </div>
            {(causesSection.whyIdentify || causesSection.whyAssessment) && (
              <div className="mt-10 bg-gradient-to-r from-[#2D5F3F] to-[#3A7B51] rounded-2xl p-8 md:p-10 text-white shadow-xl">
                <h3 className="text-xl md:text-2xl font-bold mb-4">{(causesSection.whyIdentify || causesSection.whyAssessment).title}</h3>
                <div className="text-base md:text-lg leading-relaxed">
                  {(causesSection.whyIdentify || causesSection.whyAssessment).description.split('\n\n').map((p, i) => (
                    <p key={i} className="mb-4">{p}</p>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Conditions We Treat Section */}
      {conditionsWeTreat && (
        <section id="conditions-we-treat" className="w-full py-12 md:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <span className="inline-block bg-[#E8E3D8] text-[#2D5F3F] px-4 py-1.5 rounded-full text-sm font-semibold mb-4">{conditionsWeTreat.badge || "What We Treat"}</span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#111827] leading-tight mb-6">
                {conditionsWeTreat.title}
              </h2>
              <div className="text-base md:text-lg text-[#6B7280] max-w-3xl mx-auto">
                {conditionsWeTreat.intro.split('\n\n').map((p, i) => (
                  <p key={i} className="mb-4">{p}</p>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
              {conditionsWeTreat.conditions.map((condition) => (
                <div
                  key={condition.id}
                  className="bg-gradient-to-br from-white to-[#F9FAFB] rounded-2xl p-6 md:p-8 shadow-lg border border-[#E5E7EB] hover:border-[#2D5F3F]/30 transition-all duration-300"
                >
                  <h3 className="text-lg md:text-xl font-bold text-[#2D5F3F] mb-4">{condition.title}</h3>
                  <div className="text-[#6B7280] text-sm md:text-base leading-relaxed mb-4">
                    {condition.description.split('\n\n').map((p, i) => (
                      <p key={i} className="mb-2">{p}</p>
                    ))}
                  </div>
                  {condition.items && (
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {condition.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-[#4B5563]">
                          <svg className="w-4 h-4 text-[#2D5F3F] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
            {conditionsWeTreat.whyAssessment && (
              <div className="mt-10 bg-gradient-to-r from-[#2D5F3F] to-[#3A7B51] rounded-2xl p-8 md:p-10 text-white shadow-xl">
                <h3 className="text-xl md:text-2xl font-bold mb-4">{conditionsWeTreat.whyAssessment.title}</h3>
                <div className="text-base md:text-lg leading-relaxed">
                  {conditionsWeTreat.whyAssessment.description.split('\n\n').map((p, i) => (
                    <p key={i} className="mb-4">{p}</p>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Skin Treatment Specific Sections */}
      {skinTreatmentContent && (
        <>
          {skinTreatmentContent.map((section, idx) => (
            <section
              key={idx}
              id={section.id}
              className="w-full py-12 md:py-16 bg-gradient-to-b from-white to-[#F9FAFB]"
            >
              <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                  <span className="inline-block bg-[#E8E3D8] text-[#2D5F3F] px-4 py-1.5 rounded-full text-sm font-semibold mb-4">{section.badge}</span>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#111827] mb-6">
                    {section.title}
                  </h2>
                </div>
                <div className="bg-gradient-to-br from-[#F9FAFB] to-white rounded-2xl p-8 md:p-10 shadow-lg border border-[#E5E7EB]">
                  <div className="text-base md:text-lg text-[#6B7280] leading-relaxed">
                    {section.description.split('\n\n').map((p, i) => (
                      <p key={i} className="mb-4">{p}</p>
                    ))}
                  </div>
                  {section.points && (
                    <ul className="space-y-3 mt-4">
                      {section.points.map((point, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <svg className="w-5 h-5 text-[#2D5F3F] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-base text-[#4B5563]">{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </section>
          ))}
        </>
      )}
    </div>
  );
};

export default TreatmentAdditionalContent;
