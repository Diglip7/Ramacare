import React, { useState } from 'react';
import {
  CheckCircle2,
  ShieldCheck,
  Zap,
  Activity,
  HeartPulse,
  Sparkles,
  Target,
  Stethoscope,
  Users,
  Award,
  ChevronDown,
  ChevronUp,
  Clock
} from 'lucide-react';

const DetailedServiceContent = ({ content }) => {
  if (!content || content.length === 0) return null;

  const getIcon = (type, index) => {
    const iconClass = "w-7 h-7 text-[#1a5f3f]";
    switch (type) {
      case 'why-choose': return <ShieldCheck className={iconClass} />;
      case 'suitability': return <Users className={iconClass} />;
      case 'early-intervention': return <Clock className={iconClass} />;
      case 'process': return <Stethoscope className={iconClass} />;
      case 'comparison': return <Award className={iconClass} />;
      case 'benefits-grid':
        if (index % 4 === 0) return <Zap className={iconClass} />;
        if (index % 4 === 1) return <Activity className={iconClass} />;
        if (index % 4 === 2) return <HeartPulse className={iconClass} />;
        return <Sparkles className={iconClass} />;
      default: return <CheckCircle2 className={iconClass} />;
    }
  };

  // Original untouched section renderer for first 3 sections
  const renderOriginalSection = (section, index) => {
    const isEven = index % 2 === 0;
    switch (section.type) {
      case 'why-choose':
      case 'process':
      case 'comparison':
      case 'suitability':
      case 'early-intervention':
      case 'benefits-grid':
        if (section.type === 'benefits-grid') {
          return (
            <section key={index} id={section.title.toLowerCase().replace(/\s+/g, '-')} className={`py-20 ${isEven ? 'bg-white' : 'bg-gray-50/50'}`}>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{section.title}</h2>
                  <p className="text-lg text-gray-600 leading-relaxed">{section.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {section.items.map((item, i) => (
                    <div key={i} className="group p-8 bg-white rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#1a5f3f]/30 transition-all duration-500">
                      <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#1a5f3f] group-hover:text-white transition-all duration-300">
                        {getIcon('benefits-grid', i)}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#1a5f3f] transition-colors">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          );
        } else {
          return (
            <section key={index} id={section.title.toLowerCase().replace(/\s+/g, '-')} className={`py-20 ${isEven ? 'bg-white' : 'bg-gray-50/50'}`}>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  <div className={isEven ? 'order-1' : 'order-1 lg:order-2'}>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1a5f3f]/10 rounded-full text-[#1a5f3f] text-sm font-bold mb-6 uppercase tracking-wider">
                      {getIcon(section.type, 0)}
                      {section.type.replace('-', ' ')}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                      {section.title}
                    </h2>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                      {section.description}
                    </p>

                    <div className="grid grid-cols-1 gap-4">
                      {section.items.map((item, i) => (
                        <div key={i} className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-[#1a5f3f]/20 transition-all duration-300">
                          <div className="w-6 h-6 bg-[#1a5f3f] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <CheckCircle2 className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-gray-700 font-semibold leading-snug">
                            {typeof item === 'string' ? item : item.title}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className={isEven ? 'order-2' : 'order-2 lg:order-1'}>
                    <div className="relative group">
                      <div className="absolute -inset-4 bg-gradient-to-tr from-[#1a5f3f]/20 to-[#c9a961]/20 rounded-[2.5rem] blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                      <div className="relative aspect-[4/3] bg-white rounded-[2rem] border border-gray-100 shadow-2xl overflow-hidden flex flex-col items-center justify-center p-12 text-center">
                        <div className="w-20 h-20 bg-[#1a5f3f]/10 rounded-3xl flex items-center justify-center mb-8 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                          {getIcon(section.type, 0)}
                        </div>

                        <p className="text-gray-500 italic leading-relaxed">
                          {section.footerText}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        }
      default:
        return null;
    }
  };

  // Render two sections merged side-by-side
  const renderMergedSection = (leftSection, rightSection, groupIndex) => {
    const isGroupEven = groupIndex % 2 === 0;

    return (
      <section key={groupIndex} id={`${leftSection.title.toLowerCase().replace(/\s+/g, '-')}-${rightSection.title.toLowerCase().replace(/\s+/g, '-')}`} className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Side - First Section */}
            <div className={`bg-white p-10 shadow-lg border-l-4 transition-all duration-300 hover:shadow-xl ${isGroupEven ? 'border-[#1a5f3f]' : 'border-[#c9a961]'}`}>
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-14 h-14 flex items-center justify-center ${isGroupEven ? 'bg-[#1a5f3f] text-white' : 'bg-[#c9a961] text-gray-900'}`}>
                  {getIcon(leftSection.type, 0)}
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {leftSection.title}
                </h2>
              </div>

              <p className="text-gray-600 leading-relaxed mb-6">
                {leftSection.description}
              </p>

              {leftSection.subtitle && (
                <h4 className="text-lg font-bold text-gray-900 mb-4 uppercase tracking-wider">
                  {leftSection.subtitle}
                </h4>
              )}

              <div className="grid grid-cols-1 gap-3 mb-6">
                {leftSection.items.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-gray-50/50 transition-all duration-300 hover:bg-gray-100">
                    <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: isGroupEven ? '#1a5f3f' : '#c9a961' }} />
                    <span className="text-gray-700 font-medium leading-snug">
                      {typeof item === 'string' ? item : item.title}
                    </span>
                  </div>
                ))}
              </div>

              {leftSection.footerText && (
                <div className={`p-5 italic leading-relaxed text-gray-700 ${isGroupEven ? 'bg-[#1a5f3f]/5 border-l-4 border-[#1a5f3f]' : 'bg-[#c9a961]/5 border-l-4 border-[#c9a961]'}`}>
                  {leftSection.footerText}
                </div>
              )}
            </div>

            {/* Right Side - Second Section */}
            <div className={`bg-white p-10 shadow-lg border-l-4 transition-all duration-300 hover:shadow-xl ${isGroupEven ? 'border-[#c9a961]' : 'border-[#1a5f3f]'}`}>
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-14 h-14 flex items-center justify-center ${isGroupEven ? 'bg-[#c9a961] text-gray-900' : 'bg-[#1a5f3f] text-white'}`}>
                  {getIcon(rightSection.type, 1)}
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {rightSection.title}
                </h2>
              </div>

              <p className="text-gray-600 leading-relaxed mb-6">
                {rightSection.description}
              </p>

              {rightSection.subtitle && (
                <h4 className="text-lg font-bold text-gray-900 mb-4 uppercase tracking-wider">
                  {rightSection.subtitle}
                </h4>
              )}

              <div className="grid grid-cols-1 gap-3 mb-6">
                {rightSection.items.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-gray-50/50 transition-all duration-300 hover:bg-gray-100">
                    <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: isGroupEven ? '#c9a961' : '#1a5f3f' }} />
                    <span className="text-gray-700 font-medium leading-snug">
                      {typeof item === 'string' ? item : item.title}
                    </span>
                  </div>
                ))}
              </div>

              {rightSection.footerText && (
                <div className={`p-5 italic leading-relaxed text-gray-700 ${isGroupEven ? 'bg-[#c9a961]/5 border-l-4 border-[#c9a961]' : 'bg-[#1a5f3f]/5 border-l-4 border-[#1a5f3f]'}`}>
                  {rightSection.footerText}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  };

  // Split content: first 2 sections untouched, rest merged in pairs
  const originalSections = content.slice(0, 2);
  const newDesignSections = content.slice(2);

  // Create pairs of sections to merge
  const mergedSections = [];
  for (let i = 0; i < newDesignSections.length; i += 2) {
    if (newDesignSections[i + 1]) {
      mergedSections.push([newDesignSections[i], newDesignSections[i + 1]]);
    } else {
      mergedSections.push([newDesignSections[i]]);
    }
  }

  return (
    <div className="detailed-service-content overflow-hidden">
      {/* Original untouched sections */}
      {originalSections.map((section, index) => renderOriginalSection(section, index))}

      {/* Merged sections */}
      {mergedSections.map((sections, groupIndex) =>
        sections.length === 2
          ? renderMergedSection(sections[0], sections[1], groupIndex)
          : renderOriginalSection(sections[0], 3 + groupIndex) // Fallback if odd number
      )}
    </div>
  );
};

export default DetailedServiceContent;
