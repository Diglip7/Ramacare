import React, { useState } from 'react';
import Link from 'next/link';

const FAQSection = ({ content }) => {
  const [openIndex, setOpenIndex] = useState(null);

  // Default FAQs (fallback if no content provided)
  const defaultFaqs = [
    {
      id: 1,
      question: 'How long does Ayurvedic hairfall treatment take to show results in Dubai?',
      answer: 'Results vary based on individual constitution and severity of hairfall. Most patients notice initial improvements within 4-6 weeks, with significant results visible after 3-4 months of consistent treatment. Ayurveda focuses on addressing root causes rather than quick fixes, ensuring long-lasting results. Our patient data shows 78% experience noticeable improvement by month 3.'
    },
    {
      id: 2,
      question: 'Is Ayurvedic hairfall treatment suitable for all hair types?',
      answer: 'Yes, Ayurvedic treatment is highly personalized and suitable for all hair types - straight, wavy, curly, or coily. Our doctors assess your unique dosha constitution (Vata, Pitta, Kapha) and hair characteristics to create a customized treatment plan. Whether you have fine, thick, oily, or dry hair, Ayurveda offers specific herbs and treatments tailored to your needs.'
    },
    {
      id: 3,
      question: 'What causes hairfall according to Ayurveda?',
      answer: 'Ayurveda identifies multiple root causes of hairfall: dosha imbalances (especially excess Pitta), poor digestion affecting nutrient absorption, stress and hormonal changes, improper diet lacking essential nutrients, use of harsh chemical products, and environmental factors. Our holistic approach addresses these underlying causes rather than just treating symptoms, leading to sustainable hair health improvement.'
    },
    {
      id: 4,
      question: 'Can I combine Ayurvedic hairfall treatment with other treatments?',
      answer: 'While Ayurvedic treatments are comprehensive on their own, they can often complement other natural therapies. However, we recommend consulting with our doctors before combining treatments, especially if you\'re using pharmaceutical medications or chemical treatments. Some combinations may reduce effectiveness or cause interactions. Our team will guide you on the best approach for your specific situation.'
    },
    {
      id: 5,
      question: 'Are the oils and herbs used in treatment locally available in Dubai?',
      answer: 'Yes, we source authentic, high-quality Ayurvedic herbs and oils that meet Dubai\'s regulatory standards. Many ingredients are imported directly from certified suppliers in India, while some are available locally. All products used in our treatments are DHA-approved and meet international quality standards. We also provide guidance on maintaining your treatment at home with products available in Dubai.'
    }
  ];

  // Default resources (fallback if no content provided)
  const defaultResources = [
    {
      id: 1,
      icon: (
        <svg className="w-5 h-5 text-[#047857]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      text: 'Ayurvedic Diet for Hair Health',
      bgColor: 'bg-[#ECFDF5]'
    },
    {
      id: 2,
      icon: (
        <svg className="w-5 h-5 text-[#047857]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      text: 'Panchakarma Detox Treatment',
      bgColor: 'bg-[#EFF6FF]'
    },
    {
      id: 3,
      icon: (
        <svg className="w-5 h-5 text-[#047857]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      text: 'Skin Disease Treatment',
      bgColor: 'bg-[#FEF2F2]'
    },
    {
      id: 4,
      icon: (
        <svg className="w-5 h-5 text-[#047857]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      text: 'Individual Dosha Analysis',
      bgColor: 'bg-[#F5F3FF]'
    }
  ];

  // Use provided content or defaults
  const sectionTitle = content?.title || 'Frequently Asked Questions';
  const sectionDescription = content?.description || '';
  const faqs = content?.faqs || defaultFaqs;
  const resources = content?.resources || defaultResources;
  const resourcesHeading = content?.resourcesHeading !== undefined ? content?.resourcesHeading : 'Complete Skin & Beauty Services';

  // Icon mapping function for resources
  const getResourceIcon = (index) => {
    const icons = [
      <svg key="icon1" className="w-5 h-5 text-[#3d5f4a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>,
      <svg key="icon2" className="w-5 h-5 text-[#3d5f4a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>,
      <svg key="icon3" className="w-5 h-5 text-[#3d5f4a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>,
      <svg key="icon4" className="w-5 h-5 text-[#3d5f4a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ];
    return icons[index % icons.length];
  };

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* FAQ Section */}
      <section id="faq" className="w-full bg-[#E8E3D8] py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-6 md:mb-8">
            {/* Badge */}
            <div className="flex justify-center mb-3">
              <span className="bg-[#FAFAF9] text-[#3d5f4a] px-4 py-2 rounded-full font-medium text-sm">Common Questions</span>
            </div>

            {/* Main Heading */}
            <h2 className="md:text-xl lg:text-2xl font-bold text-[#1F2937] text-center mb-3">
              {sectionTitle}
            </h2>

            {/* Subtitle */}
            <p className="text-sm md:text-base text-[#6B7280] max-w-2xl mx-auto leading-relaxed mb-6">
              {sectionDescription}
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="max-w-3xl mx-auto space-y-3 md:space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={faq.id}
                onClick={() => toggleFAQ(index)}
                className={`bg-white rounded-xl p-4 md:p-5 cursor-pointer transition-all duration-300 ${openIndex === index
                    ? 'border-2 border-[#047857] shadow-lg'
                    : 'border-2 border-[#E5E7EB] shadow-sm hover:border-[#047857]/50 hover:shadow-md hover:-translate-y-0.5'
                  }`}
              >
                {/* Question Header - INCREASED FONT SIZE */}
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-sm md:text-base font-semibold text-[#1F2937] select-none flex-1">
                    {faq.question}
                  </h3>
                  <svg
                    className={`w-5 h-5 md:w-6 md:h-6 text-[#6B7280] flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''
                      }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>

                {/* Answer Content - ALWAYS present in DOM for SEO */}
                <div
                  className={`mt-4 pt-4 border-t border-[#F3F4F6] transition-all duration-300 ${openIndex === index ? 'block opacity-100' : 'hidden md:block md:invisible md:h-0 md:mt-0 md:pt-0 opacity-0'
                    }`}
                >
                  <p className="text-xs md:text-sm text-[#4B5563] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Resources Section */}
      {resourcesHeading && (
        <section className="w-full bg-[#F3F4F6] py-8 md:py-12">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-6 md:mb-8">
              <h2 className="md:text-xl lg:text-2xl font-bold text-[#1F2937] text-center mb-3">
                {resourcesHeading}
              </h2>
            </div>

            {/* Resource Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              {resources.map((resource, index) => {
                const cardContent = (
                  <div className="bg-white rounded-xl p-4 md:p-5 flex items-center justify-between cursor-pointer transition-all duration-300 shadow-sm hover:shadow-lg hover:translate-x-1 hover:border hover:border-[#047857]/30 group">
                    {/* Left Side - Icon + Text */}
                    <div className="flex items-center gap-3 md:gap-4 flex-1">
                      <div className={`${resource.bgColor || 'bg-[#ECFDF5]'} w-10 h-10 md:w-11 md:h-11 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                        {resource.icon || getResourceIcon(index)}
                      </div>
                      {/* UPDATED: Text turns green and increases font size on hover */}
                      <span className="text-xs md:text-sm font-semibold text-[#1F2937] transition-all duration-300 group-hover:text-[#3d5f4a] group-hover:text-sm md:group-hover:text-base">
                        {resource.text}
                      </span>
                    </div>

                    {/* Right Side - Arrow */}
                    <svg
                      className="w-4 h-4 md:w-5 md:h-5 text-[#6B7280] flex-shrink-0 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#047857]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                );

                // If resource has a link, wrap in Link component
                return resource.link ? (
                  <Link key={resource.id || index} href={resource.link}>
                    {cardContent}
                  </Link>
                ) : (
                  <div key={resource.id || index}>
                    {cardContent}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default FAQSection;
