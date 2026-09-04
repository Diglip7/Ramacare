import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';

const TreatmentHero = ({ categoryName, subcategoryName, description, hero }) => {
  // Helper function to parse description into paragraphs and render internal links properly
  const renderTextWithLinks = (text) => {
    if (!text) return null;
    const parts = [];
    const regex = /\{\{([^|]+)\|([^}]+)\}\}|\[([^\]]+)\]\(([^)]+)\)|<a\s+href="([^"]+)"[^>]*>([^<]+)<\/a>/g;
    let lastIndex = 0;
    let match;

    while ((match = regex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(text.substring(lastIndex, match.index));
      }
      const label = match[1] || match[3] || match[6];
      const url = match[2] || match[4] || match[5];
      parts.push(
        <Link
          key={match.index}
          href={url}
          className="font-semibold text-[#2D5F3F] hover:text-[#407D54] underline decoration-2 underline-offset-2 hover:decoration-[#407D54] transition-colors duration-200"
        >
          {label}
        </Link>
      );
      lastIndex = regex.lastIndex;
    }
    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }
    return parts;
  };

  const parseDescription = (desc) => {
    if (!desc) return null;
    const paragraphs = desc.split(/\n\n|<br\s*\/?>/gi).filter(p => p.trim());

    return (
      <div className="text-sm md:text-base text-[#1F2937] leading-relaxed mb-6 space-y-4">
        {paragraphs.map((para, index) => (
          <p key={index}>{renderTextWithLinks(para)}</p>
        ))}
      </div>
    );
  };

  // Categories mapping
  const categories = [
    { name: 'Aesthetic Dermatology', slug: 'aesthetic-dermatology-dubai' },
    { name: 'Dental', slug: 'dental-dubai' },
    { name: 'Ayurveda', slug: 'ayurveda-dubai' },
    { name: 'Physiotherapy', slug: 'physiotherapy-dubai' },
    { name: 'General Physician', slug: 'general-physician-dubai' },
    { name: 'Facial', slug: 'facial-dubai' },
    { name: 'Facial Treatments Dubai', slug: 'facial-dubai' },
  ];
  const categoryData = categories.find(
    (cat) => cat.name === categoryName
  );

  const subcategory = subcategoryName || 'Service';

  // Use hero prop data or fallback
  const heroData = hero || {};
  const heroTitle = heroData.title || `${subcategory} in Dubai`;
  const heroDescription = heroData.description || description || `Professional ${subcategory} services with expert care and proven results. Our experienced team provides personalized treatment plans tailored to your needs—with years of expertise in Dubai.`;
  const heroSubtitle = heroData.subtitle || null;

  // Rating badge
  const rating = heroData.rating || '500+ Happy Clients';

  // CTA Buttons
  const ctaButtons = heroData.ctaButtons || {
    primary: { text: 'Book Free Consultation', link: '#book-now' },
    secondary: { text: 'WhatsApp', phone: '+971 56 659 7878' }
  };

  // Features
  const features = heroData.features || ['Expert Care', 'Proven Results', 'Certified Professionals'];

  // Image
  const image = heroData.image || {
    src: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    alt: `${subcategory} treatment in Dubai - Professional healthcare service`
  };

  // Top Badges
  const topBadges = heroData.topBadges || [
    { icon: 'location', text: 'Premium Medical Facility' },
    { icon: 'building', text: 'Proven Treatment Results' },
    { icon: 'star', text: rating }
  ];

  // Medical Notice
  const medicalNotice = heroData.medicalNotice || {
    text: 'Medical Notice: Results vary by individual. This treatment is not a cure-all. Consult our qualified healthcare professionals for personalized assessment. DHA-approved facility adhering to Dubai healthcare standards.',
    show: true
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://ramacarepolyclinic.ae/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": categoryName || 'Treatments',
        "item": `https://ramacarepolyclinic.ae${categoryData ? `/services/${categoryData.slug}` : '/services'}`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": subcategory,
        "item": `https://ramacarepolyclinic.ae/services/${subcategory.toLowerCase().replace(/\s+/g, '-')}/`
      }
    ]
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </Head>
      <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700;800&display=swap" rel="stylesheet" />
      <section id="hero-section" className="w-full bg-[#F5F1E8] py-8 md:py-12" style={{ fontFamily: "'Nunito Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav className="mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm text-[#6B7280]">
              <li>
                <a href="/" className="hover:text-[#2D5F3F] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </li>
              <li>
                <a
                  href={categoryData ? `/services/${categoryData.slug}` : '/services'}
                  className="hover:text-[#2D5F3F] transition-colors"
                >
                  {categoryName || 'Treatments'}
                </a>
              </li>
              <li>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </li>
              <li className="text-[#1F2937] font-medium" aria-current="page">
                {subcategoryName || 'Service'}
              </li>
            </ol>
          </nav>

          {/* Main Content Grid - 7 Cols Left, 5 Cols Right for Better Balance */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-6">
            {/* Left Panel - Content (Takes 7/12 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1">
              {/* Badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                {topBadges.map((badge, index) => (
                  <div key={index} className="flex items-center gap-1.5 bg-white border border-gray-200 rounded-lg px-3 py-1.5 h-8 shadow-xs">
                    {badge.icon === 'location' && (
                      <svg className="w-3.5 h-3.5 text-[#2D5F3F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    )}
                    {badge.icon === 'building' && (
                      <svg className="w-3.5 h-3.5 text-[#2D5F3F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    )}
                    {badge.icon === 'star' && (
                      <svg className="w-3.5 h-3.5 text-[#2D5F3F]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    )}
                    <span className="text-xs text-[#1F2937] font-medium">{badge.text}</span>
                  </div>
                ))}
              </div>

              {/* Title */}
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#1F2937] leading-tight mb-4">
                {heroTitle}
              </h1>

              {/* Subtitle */}
              {heroSubtitle && (
                <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-[#2D5F3F] leading-snug mb-4">
                  {heroSubtitle}
                </h2>
              )}

              {/* Parsed Description with Links */}
              {parseDescription(heroDescription)}

              {/* Treatment Image - Mobile Only */}
              {image && (
                <div className="block lg:hidden mb-6 relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer">
                  <Image
                    src={image.src}
                    alt={image.alt || `${subcategory} treatment in Dubai`}
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    priority
                    sizes="(max-width: 768px) 100vw, 1200px"
                  />
                </div>
              )}

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                {ctaButtons.primary && (
                  <a
                    href={ctaButtons.primary.link || '#book-now'}
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#2D5F3F] to-[#3A7B51] text-white px-6 py-3.5 rounded-xl font-semibold text-sm hover:from-[#234a32] hover:to-[#2f6441] transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 flex-1 sm:flex-initial"
                  >
                    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="whitespace-nowrap">{ctaButtons.primary.text}</span>
                    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                )}
                {ctaButtons.secondary && (
                  <a
                    href={ctaButtons.secondary.link || `https://wa.me/${ctaButtons.secondary.phone?.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-white border-2 border-[#2D5F3F] text-[#2D5F3F] px-6 py-3.5 rounded-xl font-semibold text-sm hover:bg-[#2D5F3F] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 group flex-1 sm:flex-initial min-w-[180px]"
                  >
                    <svg className="w-5 h-5 flex-shrink-0 text-[#25D366] group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    <span className="font-semibold whitespace-nowrap">{ctaButtons.secondary.phone}</span>
                  </a>
                )}
              </div>

              {/* Features */}
              {features && features.length > 0 && (
                <div className="flex flex-wrap gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-1.5">
                      <svg className="w-4 h-4 text-[#2D5F3F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-xs text-[#1F2937] font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Right Panel - Treatment Image (Takes 5/12 cols, Centered Vertically) */}
            {image && (
              <div className="lg:col-span-5 relative w-full order-1 lg:order-2 hidden lg:block">
                <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white h-[440px] xl:h-[480px] group cursor-pointer">
                  <Image
                    src={image.src}
                    alt={image.alt || `${subcategory} treatment in Dubai`}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    priority
                    sizes="(max-width: 768px) 100vw, 600px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2D5F3F]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Medical Notice Section */}
        {medicalNotice.show && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
            <div className="bg-white/60 backdrop-blur-sm border border-gray-200/80 rounded-xl p-3 md:p-4 shadow-2xs">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#2D5F3F] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-[11px] md:text-xs text-[#4B5563] leading-relaxed italic">
                  {medicalNotice.text}
                </p>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default TreatmentHero;
