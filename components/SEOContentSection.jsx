import React from 'react';
import {
  CheckCircle2,
  MapPin,
  Clock,
  Calendar,
  UserCheck,
  ShieldCheck,
  FileText,
  CreditCard,
  Languages,
  Car,
  Award,
  Phone
} from 'lucide-react';

const getFactIcon = (label = '') => {
  const l = label.toLowerCase();
  if (l.includes('address') || l.includes('location')) return <MapPin className="w-4 h-4 text-[#1F5E4B]" />;
  if (l.includes('hour') || l.includes('time') || l.includes('opening')) return <Clock className="w-4 h-4 text-[#1F5E4B]" />;
  if (l.includes('appoint') || l.includes('slot') || l.includes('schedule')) return <Calendar className="w-4 h-4 text-[#1F5E4B]" />;
  if (l.includes('physio') || l.includes('doctor') || l.includes('therapist') || l.includes('specialist') || l.includes('dentist') || l.includes('practitioner') || l.includes('nurse')) return <UserCheck className="w-4 h-4 text-[#1F5E4B]" />;
  if (l.includes('insur')) return <ShieldCheck className="w-4 h-4 text-[#1F5E4B]" />;
  if (l.includes('referral')) return <FileText className="w-4 h-4 text-[#1F5E4B]" />;
  if (l.includes('price') || l.includes('cost') || l.includes('fee')) return <CreditCard className="w-4 h-4 text-[#1F5E4B]" />;
  if (l.includes('language')) return <Languages className="w-4 h-4 text-[#1F5E4B]" />;
  if (l.includes('park')) return <Car className="w-4 h-4 text-[#1F5E4B]" />;
  if (l.includes('licen')) return <Award className="w-4 h-4 text-[#1F5E4B]" />;
  if (l.includes('book') || l.includes('call') || l.includes('whatsapp') || l.includes('contact')) return <Phone className="w-4 h-4 text-[#1F5E4B]" />;
  return <CheckCircle2 className="w-4 h-4 text-[#1F5E4B]" />;
};

const SEOContentSection = ({ title, content }) => {
  if (!content || content.length === 0) return null;

  return (
    <section className="w-full bg-[#FAF8F5] border-t border-[#EAE5DB] py-16 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        {title && (
          <div className="mb-10 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#EAF3EE] text-[#1F5E4B] mb-3.5 border border-[#D5E6DC]">
              <span className="w-2 h-2 rounded-full bg-[#1F5E4B]"></span>
              Clinic Information &amp; Local Guide
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#111827] tracking-tight">
              {title}
            </h2>
            <div className="w-14 h-1 bg-[#1F5E4B] rounded-full mt-3.5"></div>
          </div>
        )}

        <div className="space-y-5">
          {content.map((paragraph, index) => {
            // 1. Subheading element
            if (paragraph?.type === 'heading') {
              return (
                <div key={index} className="pt-4 pb-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1F2937] flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#1F5E4B]"></span>
                    {paragraph.text}
                  </h3>
                </div>
              );
            }

            // 2. List element (turns raw bullet list into sleek modern 2-col cards)
            if (paragraph?.type === 'list') {
              return (
                <ul key={index} className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6 list-none p-0">
                  {paragraph.items.map((item, i) => {
                    const isStr = typeof item === 'string';
                    const colonIdx = isStr ? item.indexOf(': ') : -1;
                    const hasLabel = colonIdx > 0 && colonIdx < 35;
                    const label = hasLabel ? item.slice(0, colonIdx) : '';
                    const rest = hasLabel ? item.slice(colonIdx + 2) : item;

                    return (
                      <li
                        key={i}
                        className="bg-white rounded-2xl p-4.5 sm:p-5 border border-[#E8E4DC] shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:border-[#1F5E4B]/50 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex items-start gap-3.5 group"
                      >
                        <div className="w-9 h-9 rounded-xl bg-[#EAF3EE] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#1F5E4B] group-hover:text-white transition-all duration-200 [&_svg]:group-hover:text-white shadow-xs">
                          {getFactIcon(label)}
                        </div>
                        <div className="flex-1 min-w-0">
                          {hasLabel ? (
                            <>
                              <span className="block text-xs font-bold uppercase tracking-wider text-[#1F5E4B] mb-1">
                                {label}
                              </span>
                              <span className="text-sm sm:text-[15px] text-[#2D3748] leading-relaxed font-normal block">
                                {rest}
                              </span>
                            </>
                          ) : (
                            <span className="text-sm sm:text-[15px] text-[#2D3748] leading-relaxed font-normal block pt-1">
                              {item}
                            </span>
                          )}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              );
            }

            // 3. Arabic element detection
            const isArabicText =
              (typeof paragraph === 'string' && /[\u0600-\u06FF]/.test(paragraph)) ||
              (React.isValidElement(paragraph) &&
                (paragraph.props?.lang === 'ar' ||
                  paragraph.props?.dir === 'rtl' ||
                  (paragraph.props?.children &&
                    (typeof paragraph.props?.children === 'string'
                      ? /[\u0600-\u06FF]/.test(paragraph.props?.children)
                      : (paragraph.props?.children?.props?.lang === 'ar' ||
                         paragraph.props?.children?.props?.dir === 'rtl')))));

            if (isArabicText) {
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-5 sm:p-6 border border-[#E0EBE4] border-r-4 border-r-[#1F5E4B] shadow-[0_2px_8px_rgba(0,0,0,0.03)] my-4 text-[#1F2937] leading-loose text-base sm:text-lg text-right"
                  dir="rtl"
                  lang="ar"
                >
                  <div className="flex items-center gap-2 mb-2 justify-end text-xs font-semibold uppercase tracking-wider text-[#1F5E4B]">
                    <span>دليل العيادة المحلي</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1F5E4B]"></span>
                  </div>
                  {paragraph}
                </div>
              );
            }

            // 4. Standard text or JSX element paragraph
            return (
              <p
                key={index}
                className="text-[#374151] text-[15px] sm:text-base leading-relaxed sm:leading-7 [&_a]:text-[#007474] hover:[&_a]:text-[#004d4d] [&_a]:font-semibold [&_a]:underline [&_a]:underline-offset-4 [&_a]:decoration-[#007474]/35 hover:[&_a]:decoration-[#007474] transition-colors"
              >
                {paragraph}
              </p>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SEOContentSection;
