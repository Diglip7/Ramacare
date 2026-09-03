import React, { useState, useEffect, useRef } from 'react';

const PatientTestimonials = ({ content }) => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [playingVideo, setPlayingVideo] = useState(null);
  const videoRefs = useRef({});
  const statsRef = useRef(null);
  const videoMetaRef = useRef({});
  const [zoomVideoId, setZoomVideoId] = useState(null);
  const [isClosing, setIsClosing] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [statsValues, setStatsValues] = useState({
    rating: 0,
    reviews: 0,
    success: 0,
    patients: 0
  });

  // Use content props or defaults
  const badge = content?.badge || 'Patient Success Stories';
  const title = content?.title || 'Real Success Stories from Dubai Patients';
  const subtitle = content?.subtitle || 'Verified testimonials from patients who received trusted, doctor-led care at our DHA-licensed clinic';
  const showSeeAllButton = content?.showSeeAllButton !== false; // Default true
  const showSeeMoreButton = content?.showSeeMoreButton || false;
  const showStatsSection = content?.showStatsSection !== false; // Default true

  // Simple video array - mixed thumbnail support
  // ✅ MIXED APPROACH - NATURAL FRAMES NOW WORKING:
  // - Videos WITH 'thumbnail' property = show your custom image
  // - Videos WITHOUT 'thumbnail' property = show video's natural first frame
  const testimonials = content?.testimonials || [
    {
      id: 1,
      videoUrl: '/Videos/testimonial-1.mp4',
      thumbnail: '/images/Thumb-1.jpeg'
    },
    {
      id: 2,
      videoUrl: '/Videos/testimonial-2.mp4',
      // thumbnail: '/images/patient-success-2.jpg'  // ✅ Custom image
    },
    {
      id: 3,
      videoUrl: '/Videos/testimonial-3.mp4'
      // No thumbnail = shows video's natural frame
    },
    {
      id: 4,
      videoUrl: '/Videos/testimonial-4.mp4'
      // No thumbnail = shows video's natural frame
    },
    {
      id: 5,
      videoUrl: '/Videos/testimonial-5.mp4',
      thumbnail: '/images/Thumb-5.jpeg'  // ✅ Custom image
    },
    {
      id: 6,
      videoUrl: '/Videos/testimonial-6.mp4'
      // No thumbnail = shows video's natural frame
    }
  ];

  const stats = content?.stats || [
    {
      id: 1,
      number: '4.8/5',
      label1: 'Average Rating',
      label2: 'Google Reviews',
      target: 4.9,
      showStars: true
    },
    {
      id: 2,
      number: '500+',
      label1: 'Patient Reviews',
      label2: 'Verified Testimonials',
      target: 500
    },
    {
      id: 3,
      number: '98%',
      label1: 'Success Rate',
      label2: 'Patient Satisfaction',
      target: 98
    },
    {
      id: 4,
      number: '2,500+',
      label1: 'Patients Treated',
      label2: 'Since 2008',
      target: 2500
    }
  ];

  // Intersection Observer for stats animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          animateCounters();
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    const duration = 1500;
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;

    const animate = () => {
      currentStep++;
      const progress = currentStep / steps;
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setStatsValues({
        rating: 4.9 * easeOut,
        reviews: 500 * easeOut,
        success: 98 * easeOut,
        patients: 2500 * easeOut
      });

      if (currentStep < steps) {
        setTimeout(animate, stepDuration);
      } else {
        setStatsValues({
          rating: 4.9,
          reviews: 500,
          success: 98,
          patients: 2500
        });
      }
    };

    animate();
  };

  const handlePlayVideo = (id) => {
    setIsClosing(false);
    setZoomVideoId(id);
  };

  const handleVideoPause = (id) => {
    setPlayingVideo(null);
  };

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape' && zoomVideoId) {
        setIsClosing(true);
        setTimeout(() => {
          setZoomVideoId(null);
          setIsClosing(false);
        }, 200);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [zoomVideoId]);

  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setZoomVideoId(null);
      setIsClosing(false);
    }, 200);
  };

  return (
    <section id="testimonials" className="w-full bg-[#FAF8F5] py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-6 md:mb-8">
          {/* Badge */}
          <div className="flex justify-center mb-3">

            <span className="bg-[#E8E3D8] text-[#3d5f4a] px-4 py-2 rounded-full font-medium text-sm">{badge}</span>

          </div>

          {/* Main Heading */}
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#111827] leading-tight max-w-4xl mx-auto text-center">
            {title}
          </h2>

          {/* Subtitle */}
          <p className="text-sm md:text-base text-[#6B7280] max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Video Grid Section */}
        <div className="mb-8 md:mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className={`bg-white rounded-xl overflow-hidden shadow-md transition-all duration-400 ${hoveredCard === testimonial.id
                  ? 'transform -translate-y-1 shadow-xl'
                  : 'hover:transform hover:-translate-y-1 hover:shadow-xl'
                  }`}
                onMouseEnter={() => setHoveredCard(testimonial.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Video Section */}
                <div className="relative aspect-video bg-black">
                  {/* Mixed Thumbnail Support - Custom image or Video Frame (SEO Optimized) */}
                  {playingVideo !== testimonial.id && (
                    testimonial.thumbnail ? (
                      <img
                        src={testimonial.thumbnail}
                        alt={testimonial.alt || `Patient testimonial video ${testimonial.id} - RamaCare Polyclinic Dubai`}
                        className="absolute inset-0 w-full h-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      // Show video first frame without downloading the whole video (preload="metadata")
                      <video
                        className="absolute inset-0 w-full h-full object-cover"
                        preload="metadata"
                        muted
                        playsInline
                      >
                        <source src={`${testimonial.videoUrl}#t=0.1`} type="video/mp4" />
                      </video>
                    )
                  )}

                  {/* Video Element - Only visible and loaded when clicked (Click-to-Play) */}
                  {playingVideo === testimonial.id && (
                    <video
                      ref={(el) => (videoRefs.current[testimonial.id] = el)}
                      className="absolute inset-0 w-full h-full object-cover"
                      onPause={() => handleVideoPause(testimonial.id)}
                      controls
                      autoPlay
                      playsInline
                      preload="none"
                      poster={testimonial.thumbnail || "/images/Logo.png"}
                    >
                      <source src={testimonial.videoUrl} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )}

                  {/* Play Button Overlay */}
                  {playingVideo !== testimonial.id && (
                    <>
                      <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>

                      <button
                        onClick={() => handlePlayVideo(testimonial.id)}
                        className="absolute inset-0 flex items-center justify-center z-10 cursor-pointer group"
                        aria-label="Play video"
                      >
                        <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white/95 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg ${hoveredCard === testimonial.id ? 'scale-110 bg-white' : 'group-hover:scale-110 group-hover:bg-white'
                          }`}>
                          <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-[#2D5F3F] ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </button>
                      <button
                        onClick={() => setZoomVideoId(testimonial.id)}
                        className="absolute top-2 right-2 z-10 bg-white/95 hover:bg-white transition-all duration-300 rounded-full p-2 shadow-md"
                        aria-label="Zoom video"
                      >
                        <svg className="w-5 h-5 text-[#2D5F3F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6h8a2 2 0 012 2v8M14 14l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                      </button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        {zoomVideoId && (
          <div
            className={`fixed inset-0 z-[100] transition-colors duration-200 ${isClosing ? 'bg-black/0' : 'bg-black/80'}`}
            onClick={closeModal}
          >
            <div className="flex items-center justify-center h-full p-4">
              <div
                className={`relative max-w-[90vw] max-h-[90vh] transition-all duration-200 ${isClosing ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  type="button"
                  onClick={closeModal}
                  className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md transition-transform duration-200 hover:scale-110 active:scale-95 hover:rotate-90 focus:outline-none focus:ring-2 focus:ring-[#1F2937]/30 z-20 pointer-events-auto"
                  aria-label="Close"
                >
                  <svg className="w-5 h-5 text-[#1F2937]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <video
                  className="w-full h-full object-contain max-h-[90vh] max-w-[90vw] z-0"
                  controls
                  playsInline
                  autoPlay
                  preload="metadata"
                  poster={(testimonials.find(t => t.id === zoomVideoId) || {}).thumbnail || "/images/Logo.png"}
                >
                  <source src={(testimonials.find(t => t.id === zoomVideoId) || {}).videoUrl} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        )}

        {/* See All Testimonials Button - Show on homepage */}
        {showSeeAllButton && (
          <div className="flex justify-center mt-8 md:mt-12">
            <a
              href="/testimonials/"
              className="inline-flex items-center px-6 py-3 bg-[#2D5F3F] hover:bg-[#3A7B51] text-white font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 group"
            >
              See All Testimonials
              <svg
                className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        )}

        {/* Statistics Section - Only show if enabled */}
        {showStatsSection && (
          <div ref={statsRef}>
            <div className="bg-white rounded-xl shadow-md overflow-hidden mt-8 md:mt-12">
              <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#F3F4F6]">
                {stats.map((stat, index) => (
                  <div
                    key={stat.id}
                    className="p-6 md:p-8 text-center hover:bg-gradient-to-br hover:from-[#F9FAFB] hover:to-white hover:scale-[1.02] transition-all duration-300"
                  >
                    {/* Number */}
                    <div className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#2D5F3F] to-[#3A7B51] bg-clip-text text-transparent mb-2 leading-none">
                      {index === 0 && hasAnimated && `${statsValues.rating.toFixed(1)}/5`}
                      {index === 1 && hasAnimated && `${Math.round(statsValues.reviews)}+`}
                      {index === 2 && hasAnimated && `${Math.round(statsValues.success)}%`}
                      {index === 3 && hasAnimated && `${Math.round(statsValues.patients).toLocaleString()}+`}
                      {!hasAnimated && stat.number}
                    </div>

                    {/* Label 1 */}
                    <h3 className="text-xs md:text-sm font-semibold text-[#1F2937] mb-1">
                      {stat.label1}
                    </h3>

                    {/* Label 2 */}
                    <p className="text-[9px] md:text-[10px] text-[#6B7280]">
                      {stat.label2}
                    </p>

                    {/* Stars for rating */}
                    {stat.showStars && (
                      <div className="flex items-center justify-center gap-0.5 mt-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg key={star} className="w-3 h-3 sm:w-4 sm:h-4 text-[#FFA500]" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}


      </div>
    </section>
  );
};

export default PatientTestimonials;
