import React, { useState } from 'react';
import { Leaf, Target, Clock, Users } from 'lucide-react';

const TreatmentOverview = ({ content, subcategoryName }) => {
  const [activeTab, setActiveTab] = useState('problem');
  const [expandedCard, setExpandedCard] = useState(null);

  // Helper function to render HTML content with styled links
  const renderHTMLContent = (html, className = 'text-sm text-[#4B5563] leading-relaxed') => {
    if (!html) return null;
    
    // Check if content contains HTML tags
    const hasHTML = /<[^>]*>/.test(html);
    
    if (hasHTML) {
      // Split by paragraph breaks
      const paragraphs = html.split(/\n\n|<br\s*\/?>/gi).filter(p => p.trim());
      
      if (paragraphs.length <= 1) {
        return (
          <div className={className}>
            <div dangerouslySetInnerHTML={{ 
              __html: html.replace(
                /<a\s/gi, 
                '<a class="font-semibold text-[#2D5F3F] hover:text-[#407D54] transition-colors duration-200" '
              ) 
            }} />
          </div>
        );
      }
      
      // Multiple paragraphs
      return (
        <div className={`${className} space-y-3`}>
          {paragraphs.map((para, index) => (
            <p key={index}>
              <span dangerouslySetInnerHTML={{ 
                __html: para.replace(
                  /<a\s/gi, 
                  '<a class="font-semibold text-[#2D5F3F] hover:text-[#407D54] transition-colors duration-200" '
                ) 
              }} />
            </p>
          ))}
        </div>
      );
    }
    
    // Plain text
    return <p className={className}>{html}</p>;
  };

  const iconMap = {
    Leaf,
    Target,
    Clock,
    Users
  };

  const getIconComponent = (icon, title) => {
    if (typeof icon === 'string' && iconMap[icon]) {
      const IconCmp = iconMap[icon];
      return <IconCmp className="w-6 h-6" />;
    }
    if (icon) {
      return icon;
    }
    const t = title?.toLowerCase() || '';
    if (t.includes('duration')) return <Clock className="w-6 h-6" />;
    if (t.includes('who')) return <Users className="w-6 h-6" />;
    if (t.includes('what')) return <Leaf className="w-6 h-6" />;
    return <Target className="w-6 h-6" />;
  };

  // Default content (fallback if no content prop provided)
  const defaultLeftCards = [
    {
      id: 1,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      title: 'What is it?',
      description: 'A holistic, natural approach to treating hairfall by addressing root causes through dosha balancing, herbal therapies, and lifestyle modifications.'
    },
    {
      id: 2,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Who is it for?',
      description: 'Individuals experiencing excessive shedding, thinning, premature greying, dandruff, or stress-related hairfall. Suitable for both men and women.'
    },
    {
      id: 3,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Duration',
      description: 'Initial improvements in 4-6 weeks. Significant results after 3-4 months. Complete restoration in 6-12 months depending on severity.'
    }
  ];

  const defaultRootCauses = [
    {
      id: 1,
      title: 'Pitta Aggravation',
      description: 'Excess heat in the body travels to scalp, inflaming follicles',
      severity: 'High',
      severityColor: 'bg-[#FEE2E2] text-[#991B1B]'
    },
    {
      id: 2,
      title: 'Vata Imbalance',
      description: 'Causes dryness, poor circulation, and brittleness',
      severity: 'Medium',
      severityColor: 'bg-[#FED7AA] text-[#9A3412]'
    },
    {
      id: 3,
      title: 'Ama Accumulation',
      description: 'Digestive toxins block nutrient absorption to hair roots',
      severity: 'High',
      severityColor: 'bg-[#FEE2E2] text-[#991B1B]'
    },
    {
      id: 4,
      title: 'Stress & Anxiety',
      description: 'Depletes Ojas (vital essence), disrupts hair growth cycles',
      severity: 'Medium',
      severityColor: 'bg-[#FED7AA] text-[#9A3412]'
    },
    {
      id: 5,
      title: 'Poor Diet',
      description: 'Lacking essential nutrients, excessive spicy/sour foods',
      severity: 'Medium',
      severityColor: 'bg-[#FED7AA] text-[#9A3412]'
    }
  ];

  const defaultQuickFacts = [
    { label: 'Treatment Type', value: 'Non-invasive' },
    { label: 'Anesthesia', value: 'Not required' },
    { label: 'Recovery Time', value: 'Immediate' },
    { label: 'Side Effects', value: 'Minimal to none' }
  ];

  const defaultApproachCards = [
    {
      id: 1,
      title: 'Constitutional Assessment',
      description: 'Detailed Prakriti analysis to identify your unique imbalances',
      hasLearnMore: true,
      expandedContent: 'Our expert Ayurvedic physicians conduct a comprehensive analysis of your Prakriti (constitutional type) and Vikriti (current imbalances) to understand the root cause of your hairfall.'
    },
    {
      id: 2,
      title: 'External Therapies',
      description: 'Shirodhara, Shiro Abhyanga, herbal hair packs with medicated oils',
      hasLearnMore: false,
      expandedContent: null
    },
    {
      id: 3,
      title: 'Panchakarma Detox',
      description: 'Deep cleansing to eliminate Ama and reset dosha balance',
      hasLearnMore: true,
      expandedContent: 'Panchakarma treatments help remove accumulated toxins (Ama) from the body, restoring natural dosha balance and promoting healthy hair growth from within.'
    },
    {
      id: 4,
      title: 'Customized Diet Plan',
      description: 'Personalized nutrition to cool Pitta and nourish hair tissue',
      hasLearnMore: true,
      expandedContent: 'Based on your dosha analysis, we create a personalized diet plan that includes Pitta-cooling foods and hair-nourishing nutrients to support healthy hair growth.'
    },
    {
      id: 5,
      title: 'Lifestyle Modifications',
      description: 'Stress management, sleep optimization, daily routines (Dinacharya)',
      hasLearnMore: false,
      expandedContent: null
    }
  ];

  // Use provided content or defaults
  const leftCards = content?.leftCards || defaultLeftCards;
  const rootCauses = content?.rootCauses || defaultRootCauses;
  const quickFacts = content?.quickFacts || defaultQuickFacts;
  const approachCards = content?.approachCards || defaultApproachCards;
  const sectionTitle = content?.title || `Understanding ${subcategoryName || 'Ayurvedic Hairfall Treatment'} in Dubai`;
  
  // Problem tab intro box
  const problemIntro = content?.problemIntro || {
    title: 'Root Causes of Hairfall (Ayurvedic View)',
    description: 'In Ayurveda, hairfall (Khalitya) stems from Pitta dosha imbalance creating excess heat, often aggravated by Vata, weakening hair follicles from the root.'
  };
  
  // Solution tab intro box
  const solutionIntro = content?.solutionIntro || {
    title: 'Our Ayurvedic Approach',
    description: 'We address hairfall comprehensively by restoring dosha balance, eliminating toxins, and nourishing from within using time-tested Ayurvedic principles.'
  };

  return (
    <section id="treatment-info" className="w-full bg-gradient-to-b from-[#F9F7F4] to-white py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Treatment Overview Badge */}
        <div className="flex mb-4">
          <span className="bg-[#E8E3D8] text-[#3d5f4a] px-4 py-2 rounded-full font-medium text-sm">
            Treatment Overview
          </span>
        </div>

        {/* Main Heading */}
        <h2 className="md:text-xl lg:text-2xl font-bold text-[#1F2937] text-left mb-3">
          {sectionTitle}
        </h2>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Left Column */}
          <div className="space-y-5">
            {/* Info Cards */}
            {leftCards.map((card) => (
              <div
                key={card.id}
                className="bg-white rounded-xl p-5 shadow-[-4px_0_8px_rgba(0,0,0,0.04),0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-[-4px_0_12px_rgba(0,0,0,0.06),0_4px_12px_rgba(0,0,0,0.08)] transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  {/* Icon Container */}
                  <div className="w-12 h-12 bg-[#2D5F3F] rounded-lg flex items-center justify-center flex-shrink-0 text-white shadow-sm">
                    <div className="w-6 h-6">
                      {getIconComponent(card.icon, card.title)}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-[#1F2937] mb-2">
                      {card.title}
                    </h3>
                    {card.sections && card.sections.length > 0 ? (
                      <div className="space-y-4">
                        {card.sections.map((section, sIndex) => (
                          <div key={sIndex}>
                            <h4 className="text-sm font-bold text-[#1F2937] mb-2">
                              {section.heading}
                            </h4>
                            <ul className="text-sm text-[#4B5563] leading-relaxed space-y-2 list-none">
                              {section.items.map((item, index) => (
                                <li key={index} className="flex items-start gap-2">
                                  <span className="text-[#047857] mt-1 flex-shrink-0 font-bold">•</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                        {card.description && (
                          <p className="text-sm text-[#4B5563] leading-relaxed mt-3 pt-2 border-t border-gray-100">
                            {card.description}
                          </p>
                        )}
                      </div>
                    ) : card.listItems && card.listItems.length > 0 ? (
                      <div>
                        {card.description && (
                          <p className="text-sm text-[#4B5563] leading-relaxed mb-2">
                            {card.description}
                          </p>
                        )}
                        <ul className="text-sm text-[#4B5563] leading-relaxed space-y-2 list-none">
                          {card.listItems.map((item, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <span className="text-[#047857] mt-1 flex-shrink-0 font-bold">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <div>
                        {card.description && renderHTMLContent(card.description, 'text-sm text-[#4B5563] leading-relaxed')}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Quick Facts Section */}
            <div className="bg-[#2D5F3F] rounded-xl p-5 shadow-lg">
              <h3 className="text-base font-bold text-white mb-4">
                Quick Facts
              </h3>
              <div className="space-y-3">
                {quickFacts.map((fact, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-sm font-medium text-white/90">
                      {fact.label}
                    </span>
                    <span className="text-sm text-white font-bold">
                      {fact.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div>
            {/* Tabs */}
            <div className="flex border-b border-[#E5E7EB] mb-5 bg-white rounded-t-lg overflow-hidden">
              <button
                onClick={() => setActiveTab('problem')}
                className={`flex-1 px-6 py-3 text-sm font-semibold transition-all duration-300 ${
                  activeTab === 'problem'
                    ? 'bg-white text-[#1F2937] border-b-2 border-[#1F2937]'
                    : 'bg-[#F9FAFB] text-[#6B7280] hover:text-[#1F2937] hover:bg-white'
                }`}
              >
                The Problem
              </button>
              <button
                onClick={() => setActiveTab('solution')}
                className={`flex-1 px-6 py-3 text-sm font-semibold transition-all duration-300 ${
                  activeTab === 'solution'
                    ? 'bg-white text-[#1F2937] border-b-2 border-[#1F2937]'
                    : 'bg-[#F9FAFB] text-[#6B7280] hover:text-[#1F2937] hover:bg-white'
                }`}
              >
                Our Solution
              </button>
            </div>

            {/* Tab Content - Optimized for SEO (all content in HTML) */}
            <div className="relative">
              {/* Problem Tab Content */}
              <div className={`${activeTab === 'problem' ? 'block' : 'hidden'} animate-in fade-in duration-300`}>
                {/* Root Causes Box */}
                <div className="bg-[#FEF2F2] border border-[#FEE2E2] rounded-xl p-5 mb-5 shadow-[-2px_0_6px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.04)]">
                  <h3 className="text-base font-bold text-[#7F1D1D] mb-2">
                    {problemIntro.title}
                  </h3>
                  {renderHTMLContent(problemIntro.description, 'text-sm text-[#991B1B] leading-relaxed')}
                </div>

                {/* Cause Cards */}
                <div className="space-y-4">
                  {rootCauses.map((cause) => (
                    <div
                      key={cause.id}
                      className="bg-white border-l-4 border-[#EF4444] rounded-lg p-4 shadow-[-2px_0_6px_rgba(0,0,0,0.04),0_2px_6px_rgba(0,0,0,0.06)] hover:shadow-[-3px_0_8px_rgba(0,0,0,0.06),0_3px_8px_rgba(0,0,0,0.08)] transition-all duration-300"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1">
                          <h4 className="text-sm font-bold text-[#1F2937] mb-1.5">
                            {cause.title}
                          </h4>
                          {renderHTMLContent(cause.description, 'text-sm text-[#4B5563] leading-relaxed')}
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${cause.severityColor} whitespace-nowrap shadow-sm`}>
                          {cause.severity}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Solution Tab Content */}
              <div className={`${activeTab === 'solution' ? 'block' : 'hidden'} animate-in fade-in duration-300`}>
                {/* Intro Box */}
                <div className="bg-[#F0FDF4] rounded-xl p-5 mb-5 shadow-[-2px_0_6px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.04)] border border-[#D1FAE5]">
                  <h3 className="text-base font-bold text-[#065F46] mb-2">
                    {solutionIntro.title}
                  </h3>
                  {renderHTMLContent(solutionIntro.description, 'text-sm text-[#047857] leading-relaxed')}
                </div>

                {/* Treatment Cards */}
                <div className="space-y-4">
                  {approachCards.map((card) => (
                    <div
                      key={card.id}
                      className={`bg-white border-l-4 border-[#2D5F3F] rounded-lg p-4 transition-all duration-300 shadow-[-2px_0_6px_rgba(0,0,0,0.04),0_2px_6px_rgba(0,0,0,0.06)] relative ${
                        expandedCard === card.id
                          ? 'shadow-[-3px_0_8px_rgba(0,0,0,0.06),0_3px_8px_rgba(0,0,0,0.08)]'
                          : 'hover:shadow-[-3px_0_8px_rgba(0,0,0,0.06),0_3px_8px_rgba(0,0,0,0.08)]'
                      }`}
                    >
                      <div className="flex items-start gap-3 pr-10">
                        {/* Content */}
                        <div className="flex-1">
                          <h4 className="text-sm font-bold text-[#1F2937] mb-1.5">
                            {card.title}
                          </h4>
                          {renderHTMLContent(card.description, 'text-sm text-[#4B5563] leading-relaxed')}
                          
                          {/* Expanded Content */}
                          {expandedCard === card.id && card.expandedContent && (
                            <div className="mt-3 pt-3 border-t border-[#E5E7EB]">
                              {renderHTMLContent(card.expandedContent, 'text-sm text-[#1F2937] leading-relaxed')}
                            </div>
                          )}

                          {/* Learn More Link */}
                          {card.hasLearnMore && card.expandedContent && card.expandedContent.trim().length >= 30 && (
                            <button
                              onClick={() => setExpandedCard(expandedCard === card.id ? null : card.id)}
                              className="flex items-center gap-1.5 text-sm font-semibold text-[#047857] hover:text-[#065F46] transition-all duration-300 mt-3"
                            >
                              <span>{expandedCard === card.id ? 'Show less' : 'Learn more'}</span>
                              <svg 
                                className={`w-4 h-4 transition-transform ${expandedCard === card.id ? 'rotate-180' : ''}`}
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </button>
                          )}
                        </div>

                        {/* Checkmark Icon */}
                        <div className="absolute top-3 right-3 w-8 h-8 bg-[#D1FAE5] rounded-full flex items-center justify-center shadow-sm">
                          <svg className="w-4 h-4 text-[#047857]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreatmentOverview;