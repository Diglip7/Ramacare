import Link from "next/link";
import { Info, MapPin, ExternalLink, CheckCircle2, ChevronRight, Sparkles } from "lucide-react";

// Helper function to render text containing markdown links [text](url) or unbracketed text (url)
function renderFormattedText(text) {
  if (!text || typeof text !== "string") return text;

  // Auto-normalize unbracketed patterns like "Basti therapy (/services/basti-therapy-dubai/)" into "[Basti therapy](/services/basti-therapy-dubai/)"
  let normalizedText = text;
  if (!text.includes("](") && text.includes("(") && text.includes(")")) {
    normalizedText = text.replace(/([A-Za-z0-9\s&,–—'-]+?)\s*\(((\/|#|https?:\/\/)[^)]+)\)/g, "[$1]($2)");
  }

  if (!normalizedText.includes("[") || !normalizedText.includes("](") || !normalizedText.includes(")")) {
    return text;
  }

  const markdownRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = markdownRegex.exec(normalizedText)) !== null) {
    if (match.index > lastIndex) {
      parts.push(normalizedText.substring(lastIndex, match.index));
    }

    const linkText = match[1];
    const linkUrl = match[2];

    if (linkUrl.startsWith("#")) {
      parts.push(
        <a
          key={match.index}
          href={linkUrl}
          className="text-[#1E5A3C] underline hover:text-[#16442d] font-semibold transition-colors"
        >
          {linkText}
        </a>
      );
    } else if (linkUrl.startsWith("/")) {
      parts.push(
        <Link
          key={match.index}
          href={linkUrl}
          className="text-[#1E5A3C] underline hover:text-[#16442d] font-semibold transition-colors"
        >
          {linkText}
        </Link>
      );
    } else {
      parts.push(
        <a
          key={match.index}
          href={linkUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#1E5A3C] underline hover:text-[#16442d] font-semibold transition-colors"
        >
          {linkText}
        </a>
      );
    }

    lastIndex = markdownRegex.lastIndex;
  }

  if (lastIndex < normalizedText.length) {
    parts.push(normalizedText.substring(lastIndex));
  }

  return parts.length > 0 ? parts : text;
}

// Modern, high-conversion Ayurvedic section with dynamic layouts
export default function AyurvedaInfoSection({ content }) {
  if (!content) return null;
  const { id, heading, intro, itemsTitle, items, ordered, table, note, mapUrl } = content;

  // Alternating background styling for visual rhythm across consecutive sections
  const isTintedBg = ['first-visit', 'choose-clinic', 'which-doctor', 'three-doshas', 'dubai-skin'].includes(id);
  const isLinkGrid = Boolean(items && items.length > 2 && items.some((item) => Boolean(item.href)));

  return (
    <section id={id} className={`py-12 md:py-16 ${isTintedBg ? 'bg-[#F9FAF8] border-y border-[#EDF2EE]' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        {heading && (
          <div className="mb-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1F2937] tracking-tight">
              {heading}
            </h2>
            <div className="w-12 h-1 bg-[#1E5A3C] rounded-full mt-3"></div>
          </div>
        )}

        {/* Intro Paragraph */}
        {intro && (
          <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 font-normal max-w-4xl">
            {renderFormattedText(intro)}
          </p>
        )}

        {/* 1. Table Layout (for key-value pairs / comparisons) */}
        {table && (
          <div className="overflow-x-auto rounded-2xl border border-[#E2EAE5] bg-white shadow-xs my-6">
            <table className="w-full text-left text-sm sm:text-base border-collapse">
              <tbody>
                {table.map(([label, value], idx) => (
                  <tr
                    key={idx}
                    className="border-b border-[#EDF2EE] last:border-0 hover:bg-[#F9FCFA] transition-colors duration-150"
                  >
                    <th
                      scope="row"
                      className="bg-[#F3F8F5] text-[#1E5A3C] font-semibold p-4 sm:p-5 align-top w-48 sm:w-64 text-xs sm:text-sm tracking-wide border-r border-[#EDF2EE]"
                    >
                      {renderFormattedText(label)}
                    </th>
                    <td className="p-4 sm:p-5 text-gray-700 leading-relaxed text-sm sm:text-base">
                      {renderFormattedText(value)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Optional Items Heading */}
        {itemsTitle && (
          <h3 className="font-bold text-gray-900 text-base sm:text-lg lg:text-xl mt-6 mb-3 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#1E5A3C]"></span>
            {itemsTitle}
          </h3>
        )}

        {/* 2. Ordered Steps (Timeline Flow instead of repetitive boxes) */}
        {items && items.length > 0 && ordered && (
          <div className="relative pl-6 sm:pl-8 space-y-4 my-6 before:absolute before:left-3 sm:before:left-4 before:top-3 before:bottom-3 before:w-0.5 before:bg-[#D5E5DC]">
            {items.map((item, idx) => {
              const text = item.text || '';
              const firstColon = text.indexOf(': ');
              const hasColon = firstColon > 0 && firstColon < 35;
              const stepTitle = hasColon ? text.substring(0, firstColon) : '';
              const stepDesc = hasColon ? text.substring(firstColon + 2) : text;

              return (
                <div key={idx} className="relative flex items-start gap-4">
                  {/* Step Number Circle */}
                  <div className="absolute -left-6 sm:-left-8 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#1E5A3C] text-white font-bold text-xs sm:text-sm flex items-center justify-center shadow-xs ring-4 ring-white z-10">
                    {idx + 1}
                  </div>
                  {/* Content Container */}
                  <div className="bg-white p-4 sm:p-5 rounded-xl border border-[#E5EFE8] shadow-xs flex-1 hover:border-[#1E5A3C]/30 transition-all">
                    {hasColon ? (
                      <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                        <strong className="text-gray-900 font-semibold">{stepTitle}:</strong>{' '}
                        {renderFormattedText(stepDesc)}
                      </p>
                    ) : (
                      <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                        {renderFormattedText(text)}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* 3. Link Grid (for conditions / hub navigation) */}
        {items && items.length > 0 && !ordered && isLinkGrid && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
            {items.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-4 sm:p-5 rounded-xl border border-[#E5ECE7] hover:border-[#1E5A3C]/40 hover:shadow-xs transition-all duration-200 group"
              >
                <Link
                  href={item.href || '#'}
                  className="text-[#1E5A3C] font-semibold text-sm sm:text-base flex items-center justify-between gap-2 group-hover:underline transition-colors"
                >
                  <span>{item.text}</span>
                  <ChevronRight className="w-4 h-4 text-[#1E5A3C] opacity-70 group-hover:translate-x-1 transition-transform shrink-0" />
                </Link>
              </div>
            ))}
          </div>
        )}

        {/* 4. Unordered Criteria / Tips Grid */}
        {items && items.length > 0 && !ordered && !isLinkGrid && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
            {items.map((item, idx) => {
              const text = item.text || '';
              const firstDot = text.indexOf('. ');
              const hasLeadSentence = firstDot > 0 && firstDot < 40;
              const leadTitle = hasLeadSentence ? text.substring(0, firstDot) : '';
              const restDesc = hasLeadSentence ? text.substring(firstDot + 2) : text;

              return (
                <div
                  key={idx}
                  className="bg-white p-4 sm:p-5 rounded-xl border border-[#E5ECE7] hover:border-[#1E5A3C]/30 hover:shadow-xs transition-all duration-200 flex items-start gap-3.5"
                >
                  <div className="w-6 h-6 rounded-full bg-[#EAF5EE] text-[#1E5A3C] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div className="flex-1 text-sm sm:text-base text-gray-700 leading-relaxed">
                    {item.href ? (
                      <Link href={item.href} className="text-[#1E5A3C] font-semibold hover:underline flex items-center justify-between gap-1 group">
                        <span>{item.text}</span>
                        <ChevronRight className="w-4 h-4 opacity-70 group-hover:translate-x-0.5 transition-transform shrink-0" />
                      </Link>
                    ) : hasLeadSentence ? (
                      <>
                        <strong className="text-gray-900 font-semibold block mb-1">{leadTitle}</strong>
                        <span className="text-gray-600">{renderFormattedText(restDesc)}</span>
                      </>
                    ) : (
                      renderFormattedText(item.text)
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* 5. Highlight Note Callout */}
        {note && (
          <div className="mt-6 flex items-start gap-3.5 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#F0F7F3] to-[#F8FCF9] border-l-4 border-[#1E5A3C] text-gray-700 text-sm sm:text-base shadow-2xs">
            <div className="w-6 h-6 rounded-full bg-[#1E5A3C]/10 text-[#1E5A3C] flex items-center justify-center shrink-0 mt-0.5">
              <Info className="w-4 h-4" />
            </div>
            <div className="leading-relaxed flex-1 text-gray-700">
              {renderFormattedText(note)}
            </div>
          </div>
        )}

        {/* 6. Google Maps Action Button */}
        
        {mapUrl && (
          <div className="mt-6 pt-2">
            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-[#1E5A3C] hover:bg-[#16442d] text-white font-semibold text-sm shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <MapPin className="w-4 h-4 text-[#C9A547]" />
              <span>Open RamaCare Polyclinic in Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>
        )}

      </div>
    </section>
  );
}