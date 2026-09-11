import React, { useState, useMemo } from 'react';

const FAQSection = ({ content }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const whatsappNumber = "971566597878"; // UAE format
  const whatsappMessage = "Hi, I’d like to know more.";
  const openWhatsApp = () => {
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
      "_blank"
    );
  };

  const rawFaqs = Array.isArray(content?.faqs) ? content.faqs : [
    {
      question: "What is the address of the RamaCare Polyclinic in Jumeirah 1 Dubai?",
      answer: "RamaCare Polyclinic is situated at 12 Al Dhiyafah Road, Jumeirah Terrace Building, Ground Floor, Jumeirah 1, Dubai. Provides medical physiotherapy, Ayurveda, dermatology, dental, and wellness services to patients from Jumeirah 1 and the surrounding areas of Dubai, all within one building."
    },
    {
      question: "Is RamaCare Polyclinic located in Jumeirah 1?",
      answer: "RamaCare Polyclinic is a healthcare clinic situated in Jumeirah 1, Dubai. At this clinic patients are able to obtain a variety of healthcare services in one place, such as physiotherapy, Ayurveda, dermatology and skin care, dental care, and general healthcare. The fact that the clinic is located in Jumeirah 1 means that it is convenient for those patients who are seeking a clinic in Jumeirah."
    },
    {
      question: "What services are offered by RamaCare Polyclinic in Dubai?",
      answer: "RamaCare Polyclinic offers a range of healthcare services in Dubai. These services include physiotherapy, Ayurveda, dermatology and skin care, dental care, family healthcare, and other medical treatments. The service that is best for a patient will depend on the patient’s symptoms, needs, and treatment goals. A consultation is necessary to determine the suitable care for a patient’s specific condition."
    },
    {
      question: "Is the RamaCare Polyclinic licensed by the DHA?",
      answer: "RamaCare Polyclinic holds a license from the DHA. The license number is 2036418. All healthcare professionals at RamaCare Polyclinic are proper. Work within the limits of their individual clinical roles."
    },
    {
      question: "How do I go about booking an appointment at RamaCare Polyclinic in Jumeirah?",
      answer: "You can book an appointment at RamaCare Polyclinic in Jumeirah by using WhatsApp, by phone, or through the appointment system on the website. When you contact the clinic, just let them know the service you need and your preferred time for the appointment. Then the staff will help you find a doctor or a consultation."
    },
    {
      question: "Does RamaCare offer physiotherapy in Jumeirah 1?",
      answer: "Yes, RamaCare Polyclinic provides physiotherapy in Jumeirah 1, Dubai. Physiotherapy can help with pain, sports injuries, mobility issues, rehabilitation needs, and other physical health problems. The physiotherapist will first assess your symptoms, movement patterns, and daily functional needs before recommending a treatment plan."
    },
    {
      question: "What Ayurveda treatments are on offer at RamaCare in Jumeirah?",
      answer: "RamaCare Polyclinic offers Ayurveda consultations and treatments in Jumeirah 1, Dubai. If you have health concerns, an Ayurvedic practitioner may recommend certain therapies, lifestyle changes, and traditional Ayurvedic practices. Each treatment is tailored to the individual after a consultation, ensuring care that fits your unique condition."
    },
    {
      question: "What skin treatments and dermatology services are available at RamaCare in Jumeirah?",
      answer: "RamaCare Polyclinic offers dermatology and skin-care services in Jumeirah 1. The clinic deals with skin problems. The types of services offered can include treatment for acne, pigmentation, uneven skin tone, skin texture, and the signs of aging. These services depend on your needs. A consultation is done to find out which treatment is right for your skin."
    },
    {
      question: "Does RamaCare offer treatment in Jumeirah?",
      answer: "The truth is that RamaCare Polyclinic provides care in Jumeirah 1, Dubai. Dental treatment is part of the clinic's range of healthcare services. It can include an assessment, preventive care, and suitable restorative or other dental procedures. The treatment that is suggested depends on your condition and the results of your consultation."
    },
    {
      question: "Is it possible for me to have a health check-up at RamaCare in Jumeirah?",
      answer: "Yes, you can have a health check-up at RamaCare Polyclinic in Jumeirah 1. This includes health assessments and consultations with a healthcare professional. During your visit, the doctor will review your history, discuss any symptoms you may have, and assess your current health condition. If needed, additional tests or referrals to specialists may be suggested based on your needs."
    },
    {
      question: "Does RamaCare offer healthcare services to families in Jumeirah?",
      answer: "Yes, RamaCare Polyclinic serves families in Jumeirah, Dubai. It provides a range of healthcare services for all ages. These include medicine, dental care, physiotherapy, dermatology, Ayurveda, and other treatments. The services offered depend on each individual’s health needs. Are tailored accordingly."
    },
    {
      question: "What can I expect when I go for my visit to RamaCare Polyclinic?",
      answer: "On your first visit, the focus will be on understanding your health concern, reviewing your medical background, and identifying your treatment needs. Your doctor or healthcare provider will listen to your symptoms, examine you if required, and explain the options. They will also guide you through the steps based on your condition and the type of care you need."
    },
  ];

  const faqs = useMemo(() => {
    if (!Array.isArray(rawFaqs) || rawFaqs.length === 0) return [];

    const seen = new Set();
    const uniqueFaqs = [];

    for (const faq of rawFaqs) {
      const identifier = faq.id ? `id-${faq.id}` : `q-${faq.question?.trim()}`;

      if (!seen.has(identifier)) {
        seen.add(identifier);
        uniqueFaqs.push(faq);
      }
    }

    return uniqueFaqs;
  }, [rawFaqs]);

  const title = content?.title || 'Frequently Asked Questions – RamaCare Polyclinic';
  const description = content?.description || 'Everything you need to know about our treatments and services in Dubai.';

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative w-full py-12 lg:py-16"
      style={{
        backgroundColor: '#E8E6DF',
        minHeight: 'auto',
        overflow: 'visible'
      }}
    >
      <div
        className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8"
        style={{
          width: '100%',
          overflow: 'visible'
        }}
      >
        {/* Badge with hover effect */}
        <div className="flex justify-center mb-3">
          <div
            className="bg-[#E8E3D8] text-[#3d5f4a] px-4 py-2 rounded-full font-medium text-sm"
            style={{
              backgroundColor: '#D1FAE5',
              color: '#065F46'
            }}
          >
            Common Questions
          </div>
        </div>

        {/* Heading */}
        <h2
          className="text-center font-bold mb-3 text-lg sm:text-xl md:text-2xl lg:text-3xl"
          style={{
            color: '#1F2937',
            lineHeight: '1.2'
          }}
        >
          {title}
        </h2>

        {/* Description */}
        <p
          className="text-center mb-6 md:mb-8 max-w-2xl mx-auto text-xs sm:text-sm"
          style={{
            color: '#6B7280',
            lineHeight: '1.6'
          }}
        >
          {description}
        </p>

        {/* FAQ Accordion */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            width: '100%'
          }}
        >
          {faqs && faqs.length > 0 ? faqs.map((faq, index) => (
            <div
              key={faq.id ? `faq-${faq.id}` : `faq-${index}-${faq.question?.substring(0, 20)}`}
              className="transition-all duration-300 ease-in-out group"
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '12px',
                border: hoveredIndex === index ? '2px solid #2D5F3F' : '1px solid #E5E7EB',
                overflow: 'hidden',
                transform: hoveredIndex === index ? 'translateY(-4px) scale(1.02)' : 'translateY(0) scale(1)',
                boxShadow: hoveredIndex === index
                  ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 3px rgba(45, 95, 63, 0.1)'
                  : '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Gradient overlay on hover */}
              <div
                className="absolute inset-0 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: 'linear-gradient(135deg, rgba(209, 250, 229, 0.3) 0%, rgba(167, 243, 208, 0.1) 100%)',
                  opacity: hoveredIndex === index ? 1 : 0,
                  borderRadius: '12px'
                }}
              />

              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="relative w-full flex items-center justify-between text-left transition-all duration-300 ease-in-out"
                style={{
                  padding: '16px 20px',
                  backgroundColor: hoveredIndex === index ? 'rgba(240, 253, 244, 0.5)' : 'transparent'
                }}
              >
                {/* Question number indicator on hover */}
                <div
                  className="absolute left-0 top-0 bottom-0 transition-all duration-300"
                  style={{
                    width: hoveredIndex === index ? '4px' : '0px',
                    background: 'linear-gradient(180deg, #2D5F3F 0%, #3A7B51 100%)',
                    borderRadius: '0 4px 4px 0'
                  }}
                />

                <h3
                  className="flex-1 pr-3 font-semibold text-sm md:text-base transition-colors duration-300"
                  style={{
                    color: hoveredIndex === index ? '#2D5F3F' : '#1F2937',
                    paddingLeft: hoveredIndex === index ? '12px' : '0px',
                    transition: 'all 0.3s ease-in-out'
                  }}
                >
                  {faq.question}
                </h3>

                {/* Enhanced Accordion Button with hover effects */}
                <div
                  className="flex-shrink-0 flex items-center justify-center transition-all duration-300 ease-in-out relative"
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    backgroundColor: hoveredIndex === index || openIndex === index ? '#2D5F3F' : 'rgba(45, 95, 63, 0.1)',
                    transform: hoveredIndex === index ? 'rotate(90deg) scale(1.1)' : openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                    boxShadow: hoveredIndex === index
                      ? '0 4px 6px -1px rgba(45, 95, 63, 0.3), 0 2px 4px -1px rgba(45, 95, 63, 0.2)'
                      : 'none'
                  }}
                >
                  {/* Pulse effect on hover */}
                  {hoveredIndex === index && (
                    <div
                      className="absolute inset-0 rounded-full animate-ping"
                      style={{
                        backgroundColor: '#2D5F3F',
                        opacity: 0.4
                      }}
                    />
                  )}

                  {openIndex === index ? (
                    <svg
                      className="text-white transition-all duration-300 ease-in-out relative z-10"
                      style={{
                        width: '18px',
                        height: '18px',
                        transform: hoveredIndex === index ? 'scale(1.2)' : 'scale(1)'
                      }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M20 12H4"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="transition-all duration-300 ease-in-out relative z-10"
                      style={{
                        width: '18px',
                        height: '18px',
                        color: hoveredIndex === index ? '#FFFFFF' : '#2D5F3F',
                        transform: hoveredIndex === index ? 'scale(1.2)' : 'scale(1)'
                      }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  )}
                </div>
              </button>

              {/* Answer */}
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                style={{
                  transition: 'max-height 0.3s ease-in-out, opacity 0.3s ease-in-out'
                }}
              >
                <div
                  style={{
                    padding: '0 20px 16px 20px',
                    paddingTop: '12px'
                  }}
                >
                  {/* Decorative line */}
                  <div
                    className="mb-3 transition-all duration-300"
                    style={{
                      height: '2px',
                      background: hoveredIndex === index
                        ? 'linear-gradient(90deg, #2D5F3F 0%, #3A7B51 50%, transparent 100%)'
                        : 'linear-gradient(90deg, #E5E7EB 0%, transparent 100%)',
                      width: hoveredIndex === index ? '100%' : '60%'
                    }}
                  />

                  <p
                    className="text-xs sm:text-sm transition-colors duration-300"
                    style={{
                      color: hoveredIndex === index ? '#374151' : '#6B7280',
                      lineHeight: '1.7'
                    }}
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          )) : (
            <div className="text-center py-8 text-sm text-gray-500">
              No FAQs available at the moment.
            </div>
          )}
        </div>

        {/* CTA Card with enhanced hover effects */}
        <div
          className="relative mt-8 text-center transition-all duration-500 group overflow-hidden"
          style={{
            marginTop: '32px',
            padding: '28px 24px',
            backgroundColor: '#FFFFFF',
            borderRadius: '16px',
            border: '1px solid #E5E7EB'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-4px)';
            e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
            e.currentTarget.style.borderColor = '#2D5F3F';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
            e.currentTarget.style.borderColor = '#E5E7EB';
          }}
        >
          {/* Animated gradient background on hover */}
          <div
            className="absolute inset-0 transition-opacity duration-500 pointer-events-none"
            style={{
              background: 'radial-gradient(circle at 50% 50%, rgba(209, 250, 229, 0.4) 0%, transparent 70%)',
              opacity: 0
            }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
          />

          <h3
            className="relative font-bold mb-2 text-base md:text-lg transition-colors duration-300"
            style={{
              color: '#1F2937'
            }}
          >
            Still Have Questions?
          </h3>
          <p
            className="relative mb-5 max-w-xl mx-auto text-xs sm:text-sm"
            style={{
              color: '#6B7280',
              lineHeight: '1.6'
            }}
          >
            Our friendly team is here to help. Reach out via WhatsApp or schedule a consultation to discuss your specific health concerns.
          </p>
          <div className="relative flex flex-col sm:flex-row items-center justify-center gap-2" style={{ gap: '12px' }}>
            {/* Book Consultation Button with ripple effect */}
            <button onClick={() =>
              document.getElementById("appointment")?.scrollIntoView({
                behavior: "smooth",
              })
            }
              className="relative transition-all duration-300 ease-in-out text-sm overflow-hidden group/btn"
              style={{
                padding: '10px 20px',
                height: '42px',
                background: 'linear-gradient(135deg, #2D5F3F 0%, #3A7B51 100%)',
                color: '#FFFFFF',
                borderRadius: '8px',
                minWidth: '150px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px) scale(1.05)';
                e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(45, 95, 63, 0.4), 0 4px 6px -2px rgba(45, 95, 63, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Shine effect on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                  transform: 'translateX(-100%)',
                  animation: 'shine 1.5s infinite'
                }}
              />
              <span className="relative z-10">Book Consultation</span>
            </button>

            {/* WhatsApp Button with hover effects */}
            <button onClick={openWhatsApp}
              className="relative transition-all duration-300 ease-in-out text-sm group/whatsapp overflow-hidden"
              style={{
                padding: '10px 20px',
                height: '42px',
                backgroundColor: '#FFFFFF',
                color: '#3A7B51',
                border: '2px solid #3A7B51',
                borderRadius: '8px',
                minWidth: '150px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px) scale(1.05)';
                e.currentTarget.style.backgroundColor = '#3A7B51';
                e.currentTarget.style.color = '#FFFFFF';
                e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(4, 120, 87, 0.4), 0 4px 6px -2px rgba(4, 120, 87, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.backgroundColor = '#FFFFFF';
                e.currentTarget.style.color = '#047857';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <span className="relative z-10">WhatsApp Us</span>
            </button>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes shine {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(200%);
          }
        }

        @keyframes ping {
          75%, 100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }

        .animate-ping {
          animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </section>
  );
};

export default FAQSection;