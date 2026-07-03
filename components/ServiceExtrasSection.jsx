import React from 'react';

const ServiceExtrasSection = ({ aftercareContent, whyChooseContent }) => {
  return (
    <>
      {/* Recovery & Aftercare Section */}
      {aftercareContent && (
        <section id="recovery-aftercare" className="w-full bg-gradient-to-br from-[#F8FAFC] to-white py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 md:mb-12">
              <div className="inline-flex items-center gap-2 bg-[#2D5F3F]/10 text-[#2D5F3F] px-4 py-2 rounded-full mb-4">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-semibold">Post-Treatment Care</span>
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1F2937] mb-4">
                {aftercareContent.resultsTitle || 'Aftercare Recommendations'}
              </h2>
              {aftercareContent.resultsDescription && (
                <p className="text-base md:text-lg text-[#6B7280] max-w-3xl mx-auto leading-relaxed">
                  {aftercareContent.resultsDescription}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {aftercareContent.resultPoints?.map((point, index) => (
                <div key={index} className="group bg-white rounded-2xl p-6 shadow-sm border border-[#E5E7EB] hover:border-[#2D5F3F]/40 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#2D5F3F] to-[#3A7B51] rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base font-semibold text-[#1F2937] leading-snug group-hover:text-[#2D5F3F] transition-colors duration-300">
                        {point}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {aftercareContent.additionalInfo && (
              <div className="relative overflow-hidden bg-gradient-to-r from-[#2D5F3F] to-[#3A7B51] rounded-2xl p-8 md:p-10 text-white shadow-2xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold">{aftercareContent.additionalInfo.title}</h3>
                  </div>
                  <p className="text-base md:text-lg text-white/90 leading-relaxed max-w-4xl">
                    {aftercareContent.additionalInfo.description}
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Why Choose Our Clinic Section */}
      {whyChooseContent && whyChooseContent.features?.length > 0 && (
        <section id="why-choose-ramacare" className="w-full bg-white py-12 md:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#2D5F3F]/10 to-[#3A7B51]/10 text-[#2D5F3F] px-5 py-2.5 rounded-full mb-6 shadow-sm">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-sm font-semibold tracking-wide uppercase">Why Choose Us</span>
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1F2937] mb-6 leading-tight">
                {whyChooseContent.title}
              </h2>
              {whyChooseContent.intro && (
                <p className="text-base md:text-lg text-[#6B7280] max-w-4xl mx-auto leading-relaxed">
                  {whyChooseContent.intro}
                </p>
              )}
              <div className="mt-8 flex items-center justify-center gap-3">
                <div className="h-1 w-16 bg-gradient-to-r from-transparent to-[#2D5F3F]/30 rounded-full"></div>
                <div className="w-3 h-3 bg-[#2D5F3F] rounded-full"></div>
                <div className="h-1 w-16 bg-gradient-to-l from-transparent to-[#2D5F3F]/30 rounded-full"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {whyChooseContent.features.map((feature, index) => {
                const featureIcons = [
                  <svg key={0} className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>,
                  <svg key={1} className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>,
                  <svg key={2} className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
                  <svg key={3} className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>,
                  <svg key={4} className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
                  <svg key={5} className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>,
                  <svg key={6} className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
                  <svg key={7} className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>,
                  <svg key={8} className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
                  <svg key={9} className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                ];

                return (
                  <div key={feature.id} className="group relative bg-gradient-to-br from-white to-[#F9FAFB] rounded-2xl p-6 shadow-sm border border-[#E5E7EB] hover:border-[#2D5F3F]/50 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#2D5F3F]/5 to-[#3A7B51]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2D5F3F] to-[#3A7B51] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                    <div className="relative z-10">
                      <div className="w-14 h-14 bg-gradient-to-br from-[#2D5F3F] to-[#3A7B51] rounded-2xl flex items-center justify-center text-white mb-5 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                        {featureIcons[index] || featureIcons[0]}
                      </div>
                      <div className="absolute top-4 right-4 text-4xl font-bold text-[#E5E7EB] group-hover:text-[#2D5F3F]/10 transition-colors duration-500">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      <h3 className="text-base font-bold text-[#1F2937] mb-3 group-hover:text-[#2D5F3F] transition-colors duration-500 leading-snug">
                        {feature.title}
                      </h3>
                      {feature.description && (
                        <p className="text-sm text-[#6B7280] leading-relaxed group-hover:text-[#4B5563] transition-colors duration-500">
                          {feature.description}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-12 md:mt-16 text-center">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#F8FAFC] to-[#F1F5F9] rounded-2xl px-8 py-5 shadow-sm border border-[#E5E7EB]">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#2D5F3F] to-[#3A7B51] rounded-full flex items-center justify-center text-white text-xs font-bold border-2 border-white">✓</div>
                  <div className="w-10 h-10 bg-gradient-to-br from-[#3A7B51] to-[#407D54] rounded-full flex items-center justify-center text-white text-xs font-bold border-2 border-white">✓</div>
                  <div className="w-10 h-10 bg-gradient-to-br from-[#407D54] to-[#2D5F3F] rounded-full flex items-center justify-center text-white text-xs font-bold border-2 border-white">✓</div>
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-[#1F2937]">Trusted by 500+ Happy Patients</p>
                  <p className="text-xs text-[#6B7280]">DHA-Licensed • 4.9/5 Rating • Same-Day Appointments</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ServiceExtrasSection;
