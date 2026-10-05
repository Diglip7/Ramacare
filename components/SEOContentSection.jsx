import React from 'react';

const SEOContentSection = ({ title, content }) => {
  if (!content || content.length === 0) return null;

  return (
   <section className="w-full bg-white py-10 lg:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-700 text-sm sm:text-base leading-relaxed space-y-3 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-gray-900 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-gray-900 [&_h3]:pt-2 [&_ul]:list-disc [&_ul]:pl-5 [&_a]:text-[#007474] hover:[&_a]:underline [&_a]:font-medium">
      {title && <h2>{title}</h2>}
      <div className="space-y-3">
        {content.map((paragraph, index) => {
          if (React.isValidElement(paragraph)) {
            return <p key={index}>{paragraph}</p>;
          }
          if (typeof paragraph === 'string') {
            return <p key={index}>{paragraph}</p>;
          }
          if (paragraph?.type === 'heading') {
            return <h3 key={index}>{paragraph.text}</h3>;
          }
          if (paragraph?.type === 'list') {
            return (
              <ul key={index}>
                {paragraph.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            );
          }
          return null;
        })}
      </div>
       </div>
    </section>
  );
};

export default SEOContentSection;
