import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { MessageCircle, Calendar, Phone, Check, Zap, Activity, Target, Users, ChevronDown, ChevronUp, MapPin, Award, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from '../../../components/Layout';
import ContentReviewBadge from '../../../components/ContentReviewBadge';

const UltrasoundFrequencyScience = () => {
  const [activeTab, setActiveTab] = useState('1mhz'); // '1mhz' or '3mhz'
  const [openFaqIndex, setOpenFaqIndex] = useState(1); // Default open second one
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error'
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    injuryType: '',
    preferredTime: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/appointment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.name,
          phone: formData.phone,
          email: formData.email,
          preferredTime: formData.preferredTime,
          concern: formData.injuryType,
          source: '1MHz vs 3MHz Ultrasound Science Page'
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          phone: '',
          email: '',
          injuryType: '',
          preferredTime: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const faqData = [
    {
      question: "Which frequency is better for scar tissue?",
      answer: "3MHz is usually superior for scar tissue. Since most scars are superficial, the rapid heating of 3MHz helps break down fibrotic \"knots\" and makes the scar more flexible."
    },
    {
      question: "Does 1MHz feel different from 3MHz?",
      answer: "Most patients feel very little difference. You might feel a slightly more \"localized\" warmth with 3MHz, whereas 1MHz feels like a broader, deeper heat. Neither should ever feel painful."
    },
    {
      question: "Can you use both frequencies in one session?",
      answer: "Yes. For complex joints like the Shoulder, we may use 1MHz to reach the deep joint capsule and then switch to 3MHz to treat the more superficial rotator cuff tendons."
    }
  ];
  
  const whatsappNumber = "971566597878";
  const whatsappMessage = encodeURIComponent("Hello RamaCare, I want to know more about 1MHz vs 3MHz Ultrasound Therapy.");

  // Animation variants for the rings
  const ringVariants = {
    animate: (i) => ({
      y: [0, 240],
      opacity: [0, 0.8, 0.4, 0],
      scale: [0.6, 1.2, 1.8, 2.2],
      transition: {
        duration: 4,
        repeat: Infinity,
        delay: i * 1.3,
        ease: "linear"
      }
    }),
    animate3MHz: (i) => ({
      y: [0, 100],
      opacity: [0, 0.8, 0.4, 0],
      scale: [0.6, 1.1, 1.4, 1.6],
      transition: {
        duration: 2,
        repeat: Infinity,
        delay: i * 0.6,
        ease: "linear"
      }
    })
  };

  const tableData = [
    {
      feature: "Depth of Reach",
      mhz1: "3cm to 5cm",
      mhz3: "0.5cm to 2cm"
    },
    {
      feature: "Absorption Rate",
      mhz1: "Slower absorption (travels further).",
      mhz3: "Rapid absorption (heats 3x faster)."
    },
    {
      feature: "Ideal For",
      mhz1: "Large muscle groups & deep joints.",
      mhz3: "Tendons, ligaments, and skin."
    },
    {
      feature: "Typical Target",
      mhz1: "Hip, Lower Back, Hamstrings.",
      mhz3: "Wrist, Ankle, Elbow, Scar Tissue."
    },
    {
      feature: "Heating Power",
      mhz1: "Gentle, consistent deep heat.",
      mhz3: "Intense, localized superficial heat."
    }
  ];

  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalClinic',
        '@id': 'https://ramacarepolyclinic.ae/#clinic',
        name: 'RamaCare Polyclinic',
        url: 'https://ramacarepolyclinic.ae/',
        image: 'https://ramacarepolyclinic.ae/images/1mhz-vs-3mhz-ultrasound-therapy-dubai.jpg',
        priceRange: '$$',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '12 Al Dhiyafah Rd, Jumeirah Terrace Building, Ground Floor',
          addressLocality: 'Jumeirah 1, Dubai',
          addressCountry: 'AE'
        },
        medicalSpecialty: 'Physiotherapy',
        hasCredential: 'DHA Licensed'
      },
      {
        '@type': 'MedicalWebPage',
        '@id': 'https://ramacarepolyclinic.ae/services/1mhz-vs-3mhz-ultrasound-therapy-science/#webpage',
        url: 'https://ramacarepolyclinic.ae/services/1mhz-vs-3mhz-ultrasound-therapy-science/',
        name: '1MHz vs 3MHz Ultrasound Therapy Science | RamaCare Dubai',
        description: 'Understanding the physics of healing. Learn the difference between 1MHz and 3MHz ultrasound frequencies and how RamaCare uses sound waves to repair deep tissue in Jumeirah.',
        inLanguage: 'en-AE',
        lastReviewed: '2026-08-29',
        medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
        about: { '@type': 'MedicalProcedure', name: 'Therapeutic Ultrasound (Frequency-Calibrated)' },
        reviewedBy: {
          '@type': 'Person',
          name: 'Jeena Mathew',
          jobTitle: 'Musculoskeletal Physiotherapy Specialist',
          url: 'https://ramacarepolyclinic.ae/doctors/jeena-mathew-physiotherapist-dubai/'
        },
        publisher: {
          '@type': 'MedicalClinic',
          name: 'RamaCare Polyclinic',
          url: 'https://ramacarepolyclinic.ae/',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '12 Al Dhiyafah Rd, Jumeirah Terrace Building, Ground Floor',
            addressLocality: 'Jumeirah 1, Dubai',
            addressCountry: 'AE'
          }
        }
      },
      {
        '@type': 'Physician',
        '@id': 'https://ramacarepolyclinic.ae/services/1mhz-vs-3mhz-ultrasound-therapy-science/#physician',
        name: 'Jeena Mathew',
        medicalSpecialty: 'Physiotherapy',
        honorificSuffix: 'BPT, MPT',
        hasCredential: 'DHA Licensed Physiotherapist',
        worksFor: { '@id': 'https://ramacarepolyclinic.ae/#clinic' },
        url: 'https://ramacarepolyclinic.ae/doctors/jeena-mathew-physiotherapist-dubai/'
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ramacarepolyclinic.ae/' },
          { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://ramacarepolyclinic.ae/services/' },
          { '@type': 'ListItem', position: 3, name: 'Physiotherapy', item: 'https://ramacarepolyclinic.ae/services/physiotherapy-dubai' },
          { '@type': 'ListItem', position: 4, name: '1MHz vs 3MHz Ultrasound Therapy Science', item: 'https://ramacarepolyclinic.ae/services/1mhz-vs-3mhz-ultrasound-therapy-science/' }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://ramacarepolyclinic.ae/services/1mhz-vs-3mhz-ultrasound-therapy-science/#faq',
        mainEntity: faqData.map((f) => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: { '@type': 'Answer', text: f.answer }
        }))
      }
    ]
  };

  return (
    <Layout>
      <Head>
        <title key="title">1MHz vs 3MHz Ultrasound Therapy Science | RamaCare Dubai</title>
        <meta name="description" content="Understanding the physics of healing. Learn the difference between 1MHz and 3MHz ultrasound frequencies and how RamaCare uses sound waves to repair deep tissue in Jumeirah." key="description" />
        <meta name="keywords" content="1MHz vs 3MHz ultrasound, ultrasound frequency science, deep tissue ultrasound therapy, superficial ultrasound therapy, ultrasound therapy Dubai" />
        <link rel="canonical" href="https://ramacarepolyclinic.ae/services/1mhz-vs-3mhz-ultrasound-therapy-science/" key="canonical" />

        {/* Open Graph Tags */}
        <meta property="og:type" content="article" key="og:type" />
        <meta property="og:title" content="1MHz vs 3MHz Ultrasound Therapy Science | RamaCare Dubai" key="og:title" />
        <meta property="og:description" content="Understanding the physics of healing. Learn the difference between 1MHz and 3MHz ultrasound frequencies and how RamaCare uses sound waves to repair deep tissue in Jumeirah." key="og:description" />
        <meta property="og:url" content="https://ramacarepolyclinic.ae/services/1mhz-vs-3mhz-ultrasound-therapy-science/" key="og:url" />
        <meta property="og:image" content="https://ramacarepolyclinic.ae/images/1mhz-vs-3mhz-ultrasound-therapy-dubai.jpg" key="og:image" />
        <meta property="og:image:width" content="1200" key="og:image:width" />
        <meta property="og:image:height" content="630" key="og:image:height" />
        <meta property="og:image:alt" content="1MHz vs 3MHz ultrasound therapy frequency comparison at RamaCare Polyclinic Dubai" key="og:image:alt" />
        <meta property="og:site_name" content="RamaCare Polyclinic" key="og:site_name" />
        <meta property="og:locale" content="en_AE" key="og:locale" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content="1MHz vs 3MHz Ultrasound Therapy Science | RamaCare" key="twitter:title" />
        <meta name="twitter:description" content="Deep or shallow? Learn how RamaCare calibrates ultrasound frequency to the exact depth of your injury." key="twitter:description" />
        <meta name="twitter:image" content="https://ramacarepolyclinic.ae/images/1mhz-vs-3mhz-ultrasound-therapy-dubai.jpg" key="twitter:image" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaGraph)
          }}
        />
      </Head>

      <main className="min-h-screen bg-[#FDFBF7]" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
        
        {/* Hero Section */}
        <section className="relative bg-[#F5F1EA] overflow-hidden">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-16 py-16 lg:py-24">
            {/* Breadcrumb Navigation */}
            <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm font-medium text-[#5F5F5F] flex-wrap">
              <Link href="/" className="hover:text-[#1F5E4B] transition-colors">Home</Link>
              <span aria-hidden="true">/</span>
              <Link href="/services/" className="hover:text-[#1F5E4B] transition-colors">Services</Link>
              <span aria-hidden="true">/</span>
              <Link href="/services/physiotherapy-dubai" className="hover:text-[#1F5E4B] transition-colors">Physiotherapy</Link>
              <span aria-hidden="true">/</span>
              <span className="text-[#1F5E4B]">1MHz vs 3MHz Ultrasound Science</span>
            </nav>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              
              {/* Left Column */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#1A1A1A] leading-[1.1]">
                    1MHz vs 3MHz Ultrasound Therapy Science | RamaCare Dubai
                  </h1>
                  <p className="text-lg lg:text-xl text-[#5F5F5F] leading-relaxed max-w-2xl">
                    Understanding the physics of healing. Learn the difference between 1MHz and 3MHz ultrasound frequencies and how RamaCare uses sound waves to repair deep tissue in Jumeirah.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl lg:text-3xl font-bold text-[#1A1A1A]">
                    Not All Sound Waves are Created Equal
                  </h2>
                  <p className="text-base lg:text-lg text-[#1A1A1A] leading-relaxed">
                    In therapeutic ultrasound, the "frequency" (measured in Megahertz or MHz) determines two critical factors: How deep the wave goes and how fast the tissue heats up. At RamaCare Polyclinic, we don't use a "one-size-fits-all" setting. Our DHA-licensed therapists calibrate the frequency based on the exact anatomical depth of your injury.
                  </p>
                </div>

                {/* Golden Rule Box */}
                <div className="bg-[#E9E1D3] p-8 rounded-2xl space-y-4 border border-[#DED4C1]">
                  <h3 className="text-2xl font-bold text-[#1F5E4B]">The Golden Rule of Frequency:</h3>
                  <ul className="space-y-2 text-base lg:text-lg text-[#1A1A1A]">
                    <li className="flex items-start gap-3 text-[#1A1A1A]">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#1F5E4B] shrink-0" />
                      <span>The Lower the Frequency (1MHz), the deeper the penetration.</span>
                    </li>
                    <li className="flex items-start gap-3 text-[#1A1A1A]">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#1F5E4B] shrink-0" />
                      <span>The Higher the Frequency (3MHz), the more superficial (shallow) the penetration.</span>
                    </li>
                  </ul>
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-4">
                  <button 
                    onClick={() => document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' })}
                    className="flex items-center gap-2 bg-[#1F5E4B] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#164235] transition-all shadow-lg shadow-[#1F5E4B]/20"
                  >
                    <Calendar size={20} />
                    Book Precision Assessment
                  </button>
                  <a 
                    href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="flex items-center gap-2 bg-white text-[#1A1A1A] border-2 border-[#E9E1D3] px-8 py-4 rounded-xl font-bold hover:bg-[#F5F1EA] transition-all"
                  >
                    <MessageCircle size={20} />
                    WhatsApp Now
                  </a>
                </div>
              </div>

              {/* Right Column - Interactive Graphic */}
              <div className="relative">
                <div className="bg-white p-8 lg:p-12 rounded-[40px] shadow-2xl shadow-black/5 border border-white/50">
                  {/* Legend */}
                  <div className="flex flex-wrap gap-6 justify-center mb-8">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-[#1F5E4B]" />
                      <span className="text-sm font-bold text-[#5F5F5F]">1MHz (Deep)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-[#E9E2D6] border-2 border-[#1F5E4B]" />
                      <span className="text-sm font-bold text-[#5F5F5F]">3MHz (Shallow)</span>
                    </div>
                  </div>

                  {/* Layers Graphic */}
                  <div className="relative h-[400px] rounded-2xl overflow-hidden border border-[#E9E1D3]">
                    {/* Layer Labels */}
                    <div className="absolute left-4 top-0 h-full flex flex-col justify-between py-6 z-10 pointer-events-none">
                      <span className="text-xs font-bold text-[#1A1A1A]  tracking-wider">Skin (0-0.5cm)</span>
                      <span className="text-xs font-bold text-[#1A1A1A]  tracking-wider">Fat/Connective (0.5-2cm)</span>
                      <span className="text-xs font-bold text-[#1A1A1A]  tracking-wider">Muscle (2-5cm)</span>
                      <span className="text-xs font-bold text-[#1A1A1A]  tracking-wider">Deep Tissue/Bone (5cm-+)</span>
                    </div>

                    {/* Background Layers */}
                    <div className="absolute inset-0 flex flex-col">
                      <div className="h-[12.5%] bg-[#F5F1EA]" />
                      <div className="h-[37.5%] bg-[#EDE5D8]" />
                      <div className="h-[25%] bg-[#E5EEED]" />
                      <div className="h-[25%] bg-gradient-to-b from-[#D1E5E2] to-[#B5D1CD]" />
                    </div>

                    {/* Animation Container */}
                    <div className="absolute inset-0 flex justify-center">
                      {/* 1MHz Column */}
                      <div className="relative w-24 h-full flex flex-col items-center">
                        <div className="w-24 h-12 bg-[#1F5E4B] rounded-b-xl shadow-lg z-20 mb-4" />
                        {[0, 1, 2, 3].map((i) => (
                          <motion.div
                            key={`ring-1mhz-${i}`}
                            custom={i}
                            variants={ringVariants}
                            animate="animate"
                            className="absolute top-16 w-12 h-6 border-2 border-[#1F5E4B]/40 rounded-[50%]"
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Penetration Cards */}
                  <div className="grid grid-cols-2 gap-4 mt-8">
                    <div className="bg-[#1F5E4B]/5 border border-[#1F5E4B]/20 p-4 rounded-xl text-center flex flex-col justify-center min-h-[90px]">
                      <div className="text-2xl font-bold text-[#1F5E4B] mb-1 leading-none">3-5cm</div>
                      <div className="text-[10px] font-bold text-[#5F5F5F] uppercase tracking-widest">1MHz Penetration</div>
                    </div>
                    <div className="bg-[#E9E2D6] border border-[#1F5E4B]/20 p-4 rounded-xl text-center flex flex-col justify-center min-h-[90px]">
                      <div className="text-2xl font-bold text-[#1F5E4B] mb-1 leading-none">0.5-2cm</div>
                      <div className="text-[10px] font-bold text-[#5F5F5F] uppercase tracking-widest">3MHz Penetration</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Breakdown Section */}
        <section className="bg-white py-16 lg:py-24 px-6">
          <div className="max-w-[1440px] mx-auto space-y-12 px-6 lg:px-16">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-[#1A1A1A]">
                1MHz vs. 3MHz: The Technical Breakdown
              </h2>
            </div>

            <div className="max-w-[1440px] mx-auto bg-white rounded-3xl shadow-2xl border border-[#E9E2D6] overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#1F5E4B] text-white sticky top-0 z-10">
                      <th className="py-6 px-6 lg:px-8 font-bold uppercase tracking-wider text-sm">Feature</th>
                      <th className="py-6 px-6 lg:px-8 font-bold uppercase tracking-wider text-sm">1MHz (Deep Recovery)</th>
                      <th className="py-6 px-6 lg:px-8 font-bold uppercase tracking-wider text-sm">3MHz (Surface Recovery)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E9E2D6]">
                    {tableData.map((row, idx) => (
                      <tr key={idx} className="hover:bg-[#F5F1EA] transition-colors group">
                        <td className="py-6 px-6 lg:px-8 font-bold text-[#1A1A1A] text-base lg:text-lg">{row.feature}</td>
                        <td className="py-6 px-6 lg:px-8 text-[#1A1A1A] text-base lg:text-lg leading-relaxed">{row.mhz1}</td>
                        <td className="py-6 px-6 lg:px-8 text-[#1A1A1A] text-base lg:text-lg leading-relaxed">{row.mhz3}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* How Sound Waves Actually Repair Tissue Section */}
        <section className="bg-[#F5F1EA] py-16 lg:py-24 px-6">
          <div className="max-w-[1440px] mx-auto space-y-16">
            <div className="text-center space-y-6 max-w-[987px] mx-auto">
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-[#1A1A1A] leading-tight mb-6" style={{ color: 'rgb(26, 26, 26)' }}>
                How Sound Waves Actually Repair Tissue
              </h2>
              <p className="text-base lg:text-xl text-[#1A1A1A] max-w-4xl mx-auto leading-relaxed">
                When the ultrasound probe touches your skin, it sends millions of vibrations into your body. This triggers two primary biological responses:
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Card 1 - Thermal Effect */}
              <div className="bg-white p-8 lg:p-10 rounded-3xl shadow-xl border border-[#E9E2D6] space-y-6 flex flex-col hover:shadow-2xl transition-shadow">
                <div className="w-16 h-16 bg-[#1F5E4B] rounded-2xl flex items-center justify-center text-white">
                  <Zap size={32} />
                </div>
                <div className="space-y-4 flex-grow">
                  <h3 className="text-2xl lg:text-3xl font-bold text-[#1F5E4B] mb-6">
                    1. The Thermal Effect (Continuous Mode)
                  </h3>
                  <p className="text-lg text-[#5F5F5F] leading-relaxed">
                    The waves cause "Micro-Friction" between your cells, raising the internal temperature by approximately <span className="bg-[#E9E1D3] px-2 py-0.5 rounded font-bold text-[#1A1A1A]">4°C</span>.
                  </p>
                </div>
                <div className="bg-[#F5F1EA] border-l-4 border-[#1F5E4B] p-6 rounded-xl space-y-2">
                  <p className="text-xs font-black text-[#1F5E4B] uppercase tracking-widest">The Result:</p>
                  <p className="text-[#5F5F5F] leading-relaxed">
                    This heat makes collagen fibers more "extensible" (stretchy), which is essential for fixing stiff joints or old "Office Neck" injuries common in Dubai's corporate world.
                  </p>
                </div>
              </div>

              {/* Card 2 - Non-Thermal Effect */}
              <div className="bg-white p-8 lg:p-10 rounded-3xl shadow-xl border border-[#E9E2D6] space-y-6 flex flex-col hover:shadow-2xl transition-shadow">
                <div className="w-16 h-16 bg-[#1F5E4B] rounded-2xl flex items-center justify-center text-white">
                  <Activity size={32} />
                </div>
                <div className="space-y-4 flex-grow">
                  <h3 className="text-2xl lg:text-3xl font-bold text-[#1F5E4B] mb-6">
                    2. The Non-Thermal Effect (Pulsed Mode)
                  </h3>
                  <p className="text-lg text-[#5F5F5F] leading-relaxed">
                    Even without heat, ultrasound works via <span className="font-bold text-[#1A1A1A]">Acoustic Streaming</span> and <span className="font-bold text-[#1A1A1A]">Stable Cavitation</span>.
                  </p>
                </div>
                <div className="bg-[#F5F1EA] border-l-4 border-[#1F5E4B] p-6 rounded-xl space-y-2">
                  <p className="text-xs font-black text-[#1F5E4B] uppercase tracking-widest">The Result:</p>
                  <p className="text-[#5F5F5F] leading-relaxed">
                    Tiny gas bubbles in your tissue vibrate, which "kicks" your cell membranes into gear. This speeds up the production of ATP (cellular fuel) and proteins, effectively "fast-forwarding" your body's natural healing clock.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Clinical Applications Section */}
        <section className="bg-white py-16 lg:py-24 px-6">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
            <div className="text-center">
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-[#1A1A1A] mb-4">
                Clinical Applications at RamaCare Jumeirah
              </h2>
            </div>

            <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12">
              {/* 1MHz Clinical Use Card */}
              <div className="bg-gradient-to-br from-[#1F5E4B] to-[#1F5E4B]/80 rounded-3xl shadow-2xl p-8 lg:p-10 text-white space-y-6">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-white">
                  <Target size={32} />
                </div>
                <div className="space-y-4 flex-grow">
                  <h3 className="text-2xl lg:text-3xl font-bold">When we use 1MHz:</h3>
                  <p className="text-base lg:text-lg text-white/90 leading-relaxed mb-6">
                    If a patient comes to our Jumeirah 1 clinic with <span className="font-bold text-white">Sciatica</span> or a <span className="font-bold text-white">Deep Quadriceps Strain</span>, we use 1MHz. At this frequency, the energy can bypass the fat layers and reach the deep muscle-bone interface where the real damage is located.
                  </p>
                </div>
                <div className="pt-6 border-t border-white/10 flex flex-wrap gap-2">
                  {['Hip Pain', 'Lower Back', 'Hamstrings'].map((tag) => (
                    <span key={tag} className="px-4 py-2 bg-white/10 rounded-full text-sm font-semibold tracking-wide text-white">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* 3MHz Clinical Use Card */}
              <div className="bg-gradient-to-br from-[#E9E2D6] to-[#F5F1EA] p-8 lg:p-10 rounded-3xl text-[#1A1A1A] space-y-6 shadow-2xl border-2 border-[#1F5E4B]/10 flex flex-col">
                <div className="w-16 h-16 bg-[#1F5E4B]/5 rounded-2xl flex items-center justify-center text-[#1F5E4B]">
                  <Users size={32} />
                </div>
                <div className="space-y-4 flex-grow">
                  <h3 className="text-2xl lg:text-3xl font-bold text-[#1F5E4B]">When we use 3MHz:</h3>
                  <p className="text-base lg:text-lg text-[#1A1A1A] leading-relaxed mb-6">
                    For <span className="font-bold text-[#1A1A1A]">Tennis Elbow</span> or <span className="font-bold text-[#1A1A1A]">Ankle Sprains</span> (common among Dubai runners), we switch to 3MHz. Because these structures are close to the skin, 3MHz ensures the energy isn't wasted by going too deep; instead, it concentrates the healing power exactly on the superficial ligaments.
                  </p>
                </div>
                <div className="pt-6 border-t border-[#DED4C1] flex flex-wrap gap-2">
                  {['Tennis Elbow', 'Ankle Sprains', 'Scar Tissue'].map((tag) => (
                    <span key={tag} className="px-4 py-2 bg-[#1F5E4B]/10 rounded-full text-sm font-semibold text-[#1F5E4B] tracking-wide">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-[#F5F1EA] py-16 lg:py-24 px-6">
          <div className="max-w-[1440px] mx-auto space-y-12">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-[#1A1A1A] text-center mb-4">
              Frequently Asked Questions (PAA)
            </h2>
            
            <div className="max-w-[896px] mx-auto space-y-4">
              {faqData.map((faq, idx) => (
                <div 
                  key={idx} 
                  className="bg-white rounded-2xl shadow-lg border border-[#E9E2D6] overflow-hidden transition-all duration-300"
                >
                  <button 
                    onClick={() => setOpenFaqIndex(openFaqIndex === idx ? -1 : idx)}
                    className="w-full px-6 lg:px-8 py-6 flex items-center justify-between text-left hover:bg-[#F5F1EA] transition-colors group"
                  >
                    <span className="text-lg lg:text-xl font-semibold text-[#1A1A1A]">
                      {faq.question}
                    </span>
                    <div className={`text-[#1F5E4B] transition-transform duration-200 ${openFaqIndex === idx ? 'rotate-180' : ''}`}>
                      <ChevronDown size={20} className="w-5 h-5" />
                    </div>
                  </button>
                  <AnimatePresence>
                    {openFaqIndex === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 lg:px-8 pb-6 text-base lg:text-lg text-[#1A1A1A] leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section id="booking-form" className="bg-[#1F5E4B] py-16 lg:py-24 px-6 relative overflow-hidden">
          <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10 px-6 lg:px-16">
            
            {/* Left Column */}
            <div className="space-y-12 text-white">
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight" style={{ color: '#FFFFFF' }}>
                  Precision Healing in the Heart of Dubai
                </h2>
                <p className="text-xl text-white/80 leading-relaxed max-w-xl">
                  At RamaCare, we believe in "Physics-Based Physiotherapy." We don't just move a probe; we target the exact depth of your pain.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-lg">Location:</p>
                    <p className="text-white/70">12 Al Dhiyafah Rd - Jumeirah Terrace Building, Ground Floor, Jumeirah 1 - Dubai</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                    <Zap size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-lg">Equipment:</p>
                    <p className="text-white/70">Advanced Dual-Frequency Medical Ultrasound</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                    <Award size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-lg">Expertise:</p>
                    <p className="text-white/70">DHA Licensed Clinical Specialists</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                    <Calendar size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-lg">Next Step:</p>
                    <p className="text-white/70">Book a Precision Assessment</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-10">
              <h3 className="text-3xl font-bold text-[#1F5E4B]">Book Your Assessment</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-sm font-semibold text-[#1A1A1A] ml-1">Name</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    className="w-full bg-[#F5F1EA] border border-[#E9E2D6] px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1F5E4B] transition-all"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="phone" className="text-sm font-semibold text-[#1A1A1A] ml-1">Phone</label>
                  <input 
                    type="tel" 
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+971 XX XXX XXXX"
                    className="w-full bg-[#F5F1EA] border border-[#E9E2D6] px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1F5E4B] transition-all"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-sm font-semibold text-[#1A1A1A] ml-1">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    className="w-full bg-[#F5F1EA] border border-[#E9E2D6] px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1F5E4B] transition-all"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="injuryType" className="text-sm font-semibold text-[#1A1A1A] ml-1">Injury Type</label>
                  <select 
                    id="injuryType"
                    name="injuryType"
                    required
                    value={formData.injuryType}
                    onChange={handleInputChange}
                    className="w-full bg-[#F5F1EA] border border-[#E9E2D6] px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1F5E4B] transition-all appearance-none cursor-pointer"
                  >
                    <option value="">Select injury type</option>
                    <option value="Sciatica">Deep Pain (Sciatica, Lower Back)</option>
                    <option value="Neck Pain">Surface Injury (Ankle, Elbow, Wrist)</option>
                    <option value="Back Pain">Scar Tissue</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="preferredTime" className="text-sm font-semibold text-[#1A1A1A] ml-1">Preferred Time</label>
                  <input 
                    type="text" 
                    id="preferredTime"
                    name="preferredTime"
                    required
                    value={formData.preferredTime}
                    onChange={handleInputChange}
                    placeholder="e.g., Morning, Afternoon, Evening"
                    className="w-full bg-[#F5F1EA] border border-[#E9E2D6] px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1F5E4B] transition-all"
                  />
                </div>
                
                {submitStatus === 'success' && (
                  <p className="text-green-600 font-bold text-center">Appointment request sent successfully!</p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-red-600 font-bold text-center">Error sending request. Please try again.</p>
                )}

                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 bg-[#1F5E4B] text-white px-6 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#164235] transition-all shadow-lg disabled:opacity-50"
                  >
                    <Calendar size={18} />
                    {isSubmitting ? 'Sending...' : 'Confirm Booking'}
                  </button>
                  <a 
                    href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="flex-1 bg-[#F5F1EA] text-[#1A1A1A] px-6 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#EDE5D8] transition-all"
                  >
                    <MessageCircle size={18} />
                    WhatsApp Instantly
                  </a>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Content Reviewer Badge */}
        <ContentReviewBadge doctorName="Jeena Mathew" pageSlug="1mhz-vs-3mhz-ultrasound-therapy-science" />

      </main>

      {/* Exit Intent Popup */}
      <AnimatePresence>
        {showPopup && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop with blur */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowPopup(false)}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            />
            
            {/* Modal Content */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white rounded-[32px] shadow-2xl max-w-md w-full mx-4 p-8 relative z-10 animate-in zoom-in-95"
              style={{ width: '448px' }}
            >
              {/* Close Button */}
              <button 
                onClick={() => setShowPopup(false)}
                className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Close"
              >
                <X size={24} />
              </button>

              <div className="text-center space-y-6">
                {/* Icon Container */}
                <div className="w-20 h-20 bg-[#1F5E4B]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessageCircle size={36} className="text-[#1F5E4B]" />
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl lg:text-[30px] font-bold text-[#1A1A1A] leading-tight mb-3">
                    Still confused between 1MHz & 3MHz?
                  </h3>
                  <p className="text-base lg:text-[18px] text-[#5F5F5F] leading-relaxed">
                    Get expert guidance from our DHA-licensed therapists. We'll help you understand which frequency is right for your injury.
                  </p>
                </div>

                <div className="pt-4 space-y-4">
                  <a 
                    href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="w-full bg-[#1F5E4B] text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 hover:bg-[#164235] transition-all shadow-lg"
                  >
                    <MessageCircle size={20} />
                    WhatsApp Our Experts
                  </a>
                  <button 
                    onClick={() => setShowPopup(false)}
                    className="w-full text-[#5F5F5F] font-semibold py-2 hover:text-[#1A1A1A] transition-colors"
                  >
                    Continue Reading
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default UltrasoundFrequencyScience;
