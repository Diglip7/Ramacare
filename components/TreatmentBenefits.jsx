import React, { useState } from 'react';

// BenefitCard component to handle individual benefit state
const BenefitCard = ({ benefit, defaultBenefits, hidePercentages }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const fallbackById = defaultBenefits.find(d => d.id === benefit.id && typeof d.percentage === 'number');
  const fallbackByTitle = defaultBenefits.find(d => d.title === benefit.title && typeof d.percentage === 'number');
  const resolvedPercentage =
    typeof benefit.percentage === 'number' && !Number.isNaN(benefit.percentage)
      ? benefit.percentage
      : (fallbackById?.percentage ?? fallbackByTitle?.percentage ?? 80);

  return (
    <div
      className="rounded-lg p-4 md:p-5 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#047857]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="flex items-start gap-3 mb-3 relative z-10">
        <div className="w-10 h-10 md:w-12 md:h-12 bg-[#2D5F3F] rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-md">
          <svg
            className="w-5 h-5 md:w-6 md:h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-sm md:text-base font-normal text-[#1F2937] leading-snug group-hover:text-[#2D5F3F] transition-colors duration-300">
            {benefit.title}
          </h3>
        </div>
      </div>
      {!hidePercentages && (
        <div className="relative z-10">
          <div className="w-full h-2 bg-[#D5D5C8] rounded-full overflow-hidden mb-1.5">
            <div
              className="h-full bg-gradient-to-r from-[#2D5F3F] to-[#3A7B51] rounded-full transition-all duration-700 ease-out group-hover:shadow-md"
              style={{ width: `${resolvedPercentage}%` }}
            ></div>
          </div>
          <div className="flex justify-end">
            <span className="text-xs text-[#6B7280] font-medium">
              {resolvedPercentage}% patients
            </span>
          </div>
        </div>
      )}

      {/* Description with anchor tags */}
      {benefit.description && (
        <div className="relative z-10 mt-4">
          <div className={`text-xs md:text-sm text-[#4B5563] leading-relaxed ${isExpanded ? '' : 'line-clamp-3'}`}>
            <span
              dangerouslySetInnerHTML={{ __html: benefit.description }}
              className="[&>a]:text-[#047857] [&>a]:font-semibold [&>a]:hover:bg-[#047857]/10 [&>a]:hover:px-1 [&>a]:hover:rounded [&>a]:transition-all [&>a]:duration-200"
            />
          </div>
          {benefit.hasLearnMore && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-2 text-xs md:text-sm text-[#2D5F3F] font-semibold hover:text-[#047857] transition-colors duration-200 flex items-center gap-1"
            >
              {isExpanded ? 'Show Less' : 'Learn More'}
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          )}
          {isExpanded && benefit.expandedContent && (
            <div className="mt-3 pt-3 border-t border-[#E5E7EB] text-xs md:text-sm text-[#4B5563] leading-relaxed">
              <span
                dangerouslySetInnerHTML={{ __html: benefit.expandedContent }}
                className="[&>a]:text-[#047857] [&>a]:font-semibold [&>a]:hover:bg-[#047857]/10 [&>a]:hover:px-1 [&>a]:hover:rounded [&>a]:transition-all [&>a]:duration-200"
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const TreatmentBenefits = ({ content }) => {
  const defaultBenefits = [
    {
      id: 1,
      title: 'Strengthens hair roots and follicles naturally',
      percentage: 89
    },
    {
      id: 2,
      title: 'Reduces dandruff and scalp dryness',
      percentage: 92
    },
    {
      id: 3,
      title: 'Improves scalp blood circulation',
      percentage: 85
    },
    {
      id: 4,
      title: 'Balances aggravated Pitta and Vata doshas',
      percentage: 94
    },
    {
      id: 5,
      title: 'Promotes natural hair regrowth',
      percentage: 78
    },
    {
      id: 6,
      title: 'Prevents premature greying',
      percentage: 71
    },
    {
      id: 7,
      title: 'Nourishes scalp with herbal nutrients',
      percentage: 96
    },
    {
      id: 8,
      title: 'Reduces stress-related hair loss',
      percentage: 88
    },
    {
      id: 9,
      title: 'Supports long-term hair health',
      percentage: 91
    }
  ];

  const defaultComparisonData = [
    {
      feature: 'Approach',
      ayurvedic: 'Treats root cause (dosha imbalance)',
      conventional: 'Treats symptoms'
    },
    {
      feature: 'Ingredients',
      ayurvedic: '100% natural herbs & oils',
      conventional: 'Synthetic chemicals'
    },
    {
      feature: 'Side Effects',
      ayurvedic: 'Minimal to none',
      conventional: 'Possible (dryness, irritation)'
    },
    {
      feature: 'Results',
      ayurvedic: 'Gradual, sustainable (3-6 months)',
      conventional: 'Quick but temporary'
    },
    {
      feature: 'Holistic Care',
      ayurvedic: 'Includes diet, lifestyle, stress management',
      conventional: 'Limited to topical application'
    },
    {
      feature: 'Long-term',
      ayurvedic: 'Prevents recurrence',
      conventional: 'May require ongoing use'
    }
  ];

  // Use provided content or defaults
  const sectionTitle = content?.title || 'Clinically-Observed Benefits';
  const sectionDescription = content?.description || 'Based on 15+ years of treating 2,500+ patients at our Ayurvedic clinic in Dubai';
  const benefits = content?.benefits || defaultBenefits;
  const comparisonData = content?.comparisonData || defaultComparisonData;
  const comparisonTitle = content?.comparisonTitle || 'Ayurvedic vs. Conventional Hairfall Treatment';
  const comparisonDescription = content?.comparisonDescription || null;

  // Customizable column headers
  const columnHeaders = content?.comparisonHeaders || {
    feature: 'Aspect',
    ourTreatment: 'Ayurvedic Treatment',
    traditional: 'Conventional Treatment'
  };

  return (
    <section id="benefits" className="w-full bg-white py-8 md:py-10">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="flex justify-center mb-3">
          <span className="bg-[#E8E3D8] text-[#3d5f4a] px-4 py-2 rounded-full font-medium text-sm">
            Treatment Benefits
          </span>
        </div>

        {/* Section Heading */}
        <h2 className="md:text-xl lg:text-2xl font-bold text-[#1F2937] text-center mb-3">
          {sectionTitle}
        </h2>

        {/* Section Description */}
        <p className="text-sm md:text-base text-[#6B7280] text-center max-w-3xl mx-auto mb-12 md:mb-16">
          {sectionDescription}
        </p>

        {/* Benefits Grid - New Horizontal Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mb-12 md:mb-16">
          {benefits.map((benefit) => (
            <BenefitCard key={benefit.id} benefit={benefit} defaultBenefits={defaultBenefits} hidePercentages={content?.hidePercentages} />
          ))}
        </div>

        {/* Comparison Table */}
        <div id="comparison" className="mt-12 md:mt-16">
          <h3 className="md:text-xl lg:text-2xl font-bold text-[#1F2937] text-center mb-8">
            {comparisonTitle}
          </h3>
          {comparisonDescription && (
            <p className="text-sm md:text-base text-[#6B7280] text-center max-w-3xl mx-auto mb-8">
              {comparisonDescription}
            </p>
          )}

          <div className="bg-[#F5F5F0] rounded-lg p-4 md:p-6 overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-[#D5D5C8]">
                    <th className="text-left py-3 px-3 md:px-4 text-xs md:text-sm font-bold text-[#111111] w-1/4">
                      {columnHeaders.feature}
                    </th>
                    <th className="text-left py-3 px-3 md:px-4 text-xs md:text-sm font-bold text-[#2D5F3F] w-[37.5%]">
                      {columnHeaders.ourTreatment}
                    </th>
                    <th className="text-left py-3 px-3 md:px-4 text-xs md:text-sm font-bold text-[#4B5563] w-[37.5%]">
                      {columnHeaders.traditional}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr
                      key={index}
                      className="border-b border-[#E0E0D8] last:border-b-0 hover:bg-[#EBEBDF] transition-colors duration-200"
                    >
                      <td className="py-3 px-3 md:px-4 text-xs md:text-sm text-[#1F2937] font-semibold align-top">
                        {row.feature}
                      </td>
                      <td className="py-3 px-3 md:px-4 align-top">
                        <div className="flex items-start gap-2">
                          <svg
                            className="w-4 h-4 text-[#2D5F3F] flex-shrink-0 mt-0.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2.5}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="text-xs md:text-sm text-[#374151]">
                            {row.ayurvedic}
                          </span>
                        </div>
                      </td>
                      <td className="py-3 px-3 md:px-4 text-xs md:text-sm text-[#6B7280] align-top">
                        {row.conventional}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          {content?.comparisonFooter && (
            <p className="mt-4 text-xs md:text-sm text-[#6B7280] italic text-center max-w-3xl mx-auto">
              {content.comparisonFooter}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default TreatmentBenefits;