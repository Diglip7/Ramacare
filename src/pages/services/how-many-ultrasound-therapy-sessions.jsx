import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../../components/Layout';
import ContentReviewBadge from '../../../components/ContentReviewBadge';
import { Zap, TrendingUp, Activity, CheckCircle, Award, Users, Calendar, RefreshCcw, Clock, Dumbbell } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '../../../components/Toast';

const UltrasoundSessionsTimelinePage = () => {
  const { showToast, ToastComponent } = useToast();
  const [openFAQ, setOpenFAQ] = useState(null);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    preferredTime: '',
    treatmentArea: ''
  });

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/appointment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          phone: formData.phone,
          email: formData.email,
          preferredTime: formData.preferredTime,
          concern: formData.treatmentArea,
          source: 'how-many-ultrasound-therapy-sessions'
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        showToast('Appointment request submitted successfully! ', 'success');
        setFormData({
          fullName: '',
          phone: '',
          email: '',
          preferredTime: '',
          treatmentArea: ''
        });
      } else {
        showToast('Failed to submit appointment. Please try again or contact us directly.', 'error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      showToast('An error occurred. Please try again later.', 'error');
    }
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/971566597878', '_blank');
  };

  const scrollToForm = () => {
    const formSection = document.getElementById('appointment-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const faqItems = [
    {
      question: 'Will I feel results after just one session?',
      answer: 'Some patients report mild relief after the first session, but consistent results typically appear after 3-5 sessions as the cumulative effect builds.'
    },
    {
      question: 'How often should I come for treatment?',
      answer: 'Most effective protocols involve 2-3 sessions per week, allowing your body time to respond between treatments while maintaining healing momentum.'
    },
    {
      question: 'Is HILT therapy painful?',
      answer: 'No, HILT therapy is non-invasive and painless. Most patients describe a gentle warming sensation during treatment.'
    },
    {
      question: 'Can I combine HILT with other treatments?',
      answer: 'Yes, HILT works excellently alongside physiotherapy, manual therapy, and other rehabilitation methods to accelerate recovery.'
    },
    {
      question: "What if I don't see results after 5 sessions?",
      answer: "While most patients see improvement by session 5, chronic conditions may take longer. Our doctors will assess your progress and adjust the treatment plan accordingly."
    },
    {
      question: 'Are the results permanent?',
      answer: 'HILT promotes genuine tissue healing. Results are long-lasting when combined with proper lifestyle modifications and maintenance care as recommended.'
    }
  ];

  const timelineSteps = [
    { sessions: '3', label: 'Sessions', description: 'First signs of relief' },
    { sessions: '5', label: 'Sessions', description: 'Noticeable pain reduction' },
    { sessions: '10', label: 'Sessions', description: 'Full recovery achieved' }
  ];

  const firstSignResults = [
    {
      icon: Zap,
      title: 'Pain Reduction',
      description: 'Most patients experience a decrease in pain intensity within the first 3-5 sessions'
    },
    {
      icon: TrendingUp,
      title: 'Warmth Increase',
      description: 'Improved blood flow creates a warming sensation, indicating healing has begun'
    },
    {
      icon: Activity,
      title: 'Mobility Improvement',
      description: 'Enhanced range of motion and easier movement as inflammation decreases'
    }
  ];

  const recoveryTimeline = [
    { condition: 'Acute muscle strain', sessions: '4-6 sessions', duration: '2-3 weeks' },
    { condition: 'Chronic lower back pain', sessions: '8-12 sessions', duration: '4-6 weeks' },
    { condition: 'Knee osteoarthritis', sessions: '10-15 sessions', duration: '5-8 weeks' },
    { condition: 'Tennis elbow (lateral epicondylitis)', sessions: '6-10 sessions', duration: '3-5 weeks' },
    { condition: 'Plantar fasciitis', sessions: '8-12 sessions', duration: '4-6 weeks' },
    { condition: 'Shoulder impingement', sessions: '8-12 sessions', duration: '4-6 weeks' },
    { condition: 'Neck pain (cervical spondylosis)', sessions: '8-10 sessions', duration: '4-5 weeks' },
    { condition: 'Post-surgical recovery', sessions: '10-15 sessions', duration: '5-8 weeks' }
  ];

  const healingFactors = [
    {
      icon: Users,
      title: 'Age & Activity Level',
      description: 'Younger, more active patients typically heal faster due to better cellular regeneration'
    },
    {
      icon: Calendar,
      title: 'Injury Chronicity',
      description: 'Chronic conditions (lasting months or years) need more sessions than acute injuries'
    },
    {
      icon: RefreshCcw,
      title: 'Consistency',
      description: 'Following the recommended treatment schedule ensures optimal healing progression'
    },
    {
      icon: Clock,
      title: 'Combined Treatments',
      description: 'Pairing HILT with physiotherapy or other modalities accelerates recovery'
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
        image: 'https://ramacarepolyclinic.ae/images/ultrasound.jpg',
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
        '@id': 'https://ramacarepolyclinic.ae/services/how-many-ultrasound-therapy-sessions/#webpage',
        url: 'https://ramacarepolyclinic.ae/services/how-many-ultrasound-therapy-sessions/',
        name: 'How Many Sessions Until HILT & Ultrasound Therapy Work? | RamaCare Dubai',
        description: 'Evidence-based recovery timeline for HILT (High-Intensity Laser Therapy) & therapeutic ultrasound at RamaCare Polyclinic, Dubai — see typical session counts by condition.',
        inLanguage: 'en-AE',
        lastReviewed: '2026-08-29',
        medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
        about: { '@type': 'MedicalProcedure', name: 'High-Intensity Laser Therapy (HILT) & Therapeutic Ultrasound' },
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
        '@id': 'https://ramacarepolyclinic.ae/services/how-many-ultrasound-therapy-sessions/#physician',
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
          { '@type': 'ListItem', position: 4, name: 'Recovery Timeline', item: 'https://ramacarepolyclinic.ae/services/how-many-ultrasound-therapy-sessions/' }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://ramacarepolyclinic.ae/services/how-many-ultrasound-therapy-sessions/#faq',
        mainEntity: faqItems.map((f) => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: { '@type': 'Answer', text: f.answer }
        }))
      }
    ]
  };

  return (
    <Layout>
      {ToastComponent}
      <Head>
        <title key="title">How Many Sessions Until HILT & Ultrasound Therapy Work? | RamaCare Dubai</title>
        <meta name="description" content="Evidence-based recovery timeline for HILT (High-Intensity Laser Therapy) & therapeutic ultrasound at RamaCare Polyclinic, Dubai — see typical session counts by condition." key="description" />
        <meta name="keywords" content="How many HILT therapy sessions, HILT therapy recovery timeline Dubai, ultrasound therapy session count, high intensity laser therapy Dubai, physiotherapy session count Dubai" />
        <link rel="canonical" href="https://ramacarepolyclinic.ae/services/how-many-ultrasound-therapy-sessions/" key="canonical" />

        {/* Open Graph Tags */}
        <meta property="og:type" content="website" key="og:type" />
        <meta property="og:title" content="How Many Sessions Until HILT Therapy Works? | RamaCare Dubai" key="og:title" />
        <meta property="og:description" content="Evidence-based recovery timeline for HILT (High-Intensity Laser Therapy) & therapeutic ultrasound at RamaCare Polyclinic, Dubai — see typical session counts by condition." key="og:description" />
        <meta property="og:url" content="https://ramacarepolyclinic.ae/services/how-many-ultrasound-therapy-sessions/" key="og:url" />
        <meta property="og:image" content="https://ramacarepolyclinic.ae/images/ultrasound.jpg" key="og:image" />
        <meta property="og:image:width" content="1200" key="og:image:width" />
        <meta property="og:image:height" content="630" key="og:image:height" />
        <meta property="og:image:alt" content="HILT & Ultrasound Therapy Recovery Timeline - RamaCare Polyclinic" key="og:image:alt" />
        <meta property="og:site_name" content="RamaCare Polyclinic" key="og:site_name" />
        <meta property="og:locale" content="en_AE" key="og:locale" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content="How Many Sessions Until HILT Therapy Works? | RamaCare Dubai" key="twitter:title" />
        <meta name="twitter:description" content="Evidence-based recovery timeline for HILT (High-Intensity Laser Therapy) & therapeutic ultrasound at RamaCare Polyclinic, Dubai — see typical session counts by condition." key="twitter:description" />
        <meta name="twitter:image" content="https://ramacarepolyclinic.ae/images/ultrasound.jpg" key="twitter:image" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaGraph)
          }}
        />
      </Head>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white min-h-[90vh] flex items-center py-12 lg:py-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#1A5B4B] rounded-full opacity-5 blur-[100px]" style={{ transform: 'translate(30%, -30%)' }}></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1A5B4B] rounded-full opacity-5 blur-[100px]" style={{ transform: 'translate(-30%, 30%)' }}></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm font-medium text-[#5F5F5F] flex-wrap">
            <Link href="/" className="hover:text-[#1F5E4B] transition-colors">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/services/" className="hover:text-[#1F5E4B] transition-colors">Services</Link>
            <span aria-hidden="true">/</span>
            <Link href="/services/physiotherapy-dubai" className="hover:text-[#1F5E4B] transition-colors">Physiotherapy</Link>
            <span aria-hidden="true">/</span>
            <span className="text-[#1F5E4B]">Recovery Timeline</span>
          </nav>
          <div className="grid gap-8 lg:gap-16 lg:grid-cols-2 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] leading-tight" style={{ fontSize: '48px', fontWeight: 700 }}>
                 How Many Sessions Until HILT Therapy Works?
                </h1>
                <p className="text-lg md:text-xl text-[#5F5F5F] max-w-xl leading-relaxed" style={{ fontSize: '20px', fontWeight: 400 }}>
                 Evidence-based timeline for pain relief and full recovery with High-Intensity Laser Therapy at RamaCare Polyclinic, Dubai
                </p>
              </div>

              {/* Short Answer Box */}
              <div className="bg-[#F5F1EA] rounded-3xl p-8 md:p-10 space-y-6 shadow-xl max-w-[580px]">
                <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-6" style={{ fontSize: '30px', fontWeight: 700 }}>
                  The Short Answer: When Will You Feel Relief?
                </h2>
                <ul className="space-y-6">
                  <li className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-[#1A5B4B] shrink-0"></div>
                    <p className="text-lg text-[#1A1A1A]">
                      <span className="font-semibold" style={{ fontSize: '18px' }}>3 to 5 sessions</span> — Most patients notice pain relief
                    </p>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-[#1A5B4B] shrink-0"></div>
                    <p className="text-lg text-[#1A1A1A]">
                      <span className="font-semibold" style={{ fontSize: '18px' }}>6 to 10 sessions</span> — Typical range for full recovery
                    </p>
                  </li>
                </ul>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button 
                  onClick={scrollToForm}
                  className="px-8 py-4 bg-[#1A5B4B] text-white rounded-xl font-bold text-lg hover:bg-[#14473b] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#1A5B4B]/20"
                >
                  Book Consultation
                </button>
                <button 
                  onClick={handleWhatsAppClick}
                  className="px-8 py-4 bg-white text-[#1A5B4B] border-2 border-[#1A5B4B] rounded-xl font-bold text-lg hover:bg-[#F5F1EA] transition-all flex items-center justify-center gap-2"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  WhatsApp Now
                </button>
              </div>
            </div>

            {/* Right Side - Recovery Timeline */}
            <div className="w-full">
              <div className="bg-[#F5F1EA] rounded-3xl p-12 shadow-2xl relative z-10 w-full" style={{ padding: '48px', minWidth: '624px' }}>
                <h3 className="text-2xl font-bold text-[#1A1A1A] text-center mb-12">Recovery Timeline</h3>
                
                <div className="space-y-8 relative pt-4">
                  {/* Vertical Line */}
                  <div className="absolute left-10 top-16 bottom-16 w-0.5 bg-[#1A5B4B]/20"></div>
                  
                  {timelineSteps.map((step, index) => (
                    <div key={index} className="flex items-start gap-4 relative z-10 transition-transform duration-300 hover:translate-x-2">
                      <div className="w-20 h-20 rounded-full bg-[#1A5B4B] flex items-center justify-center shrink-0 shadow-lg" style={{ backgroundColor: 'rgb(31, 94, 75)' }}>
                        <span className="text-2xl font-bold leading-none text-white">{step.sessions}</span>
                      </div>
                      <div className="flex-1 pt-4">
                        <p className="text-[#5F5F5F] mb-1" style={{ fontSize: '18px', fontWeight: 400 }}>Sessions</p>
                        <p className="text-xl font-bold text-[#1A1A1A]">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="relative h-16 flex items-center justify-center">
        <div className="w-full max-w-xl mx-auto flex items-center gap-4 px-6">
          <div className="flex-1 h-px bg-[#E9E2D6]"></div>
          <div className="w-2 h-2 rounded-full bg-[#1A5B4B]"></div>
          <div className="flex-1 h-px bg-[#E9E2D6]"></div>
        </div>
      </div>

      {/* First Sign of Results Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A]">
              The "First Sign" of Results:
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            {firstSignResults.map((result, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-[#E9E2D6]/50"
              >
                <div className="w-16 h-16 rounded-full bg-[#F5F1EA] flex items-center justify-center text-[#1A5B4B] mb-6">
                  <result.icon className="w-8 h-8" strokeWidth={1.5} />
                </div>
                
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle className="w-5 h-5 text-[#1A5B4B] fill-[#1A5B4B] text-white" />
                  <h3 className="text-xl font-bold text-[#1A1A1A]">{result.title}</h3>
                </div>
                
                <p className="text-[#5F5F5F] leading-relaxed">
                  {result.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Section Divider */}
      <div className="relative h-16 flex items-center justify-center">
        <div className="w-full max-w-xl mx-auto flex items-center gap-4 px-6">
          <div className="flex-1 h-px bg-[#E9E2D6]"></div>
          <div className="w-2 h-2 rounded-full bg-[#1A5B4B]"></div>
          <div className="flex-1 h-px bg-[#E9E2D6]"></div>
        </div>
      </div>

      {/* Clinical Recovery Timeline Section */}
      <section className="py-20 md:py-28 bg-[#E9E2D6]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-[#1A1A1A]">
                Clinical Recovery Timeline by Condition
              </h2>
              <Award className="w-8 h-8 text-[#1A5B4B]" strokeWidth={2} />
            </div>
            <p className="text-[#5F5F5F] text-lg">
              Doctor verified recovery expectations
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl shadow-2xl bg-white border border-[#E9E2D6]/50">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#1A5B4B] text-white">
                    <th className="px-6 py-4 text-left text-white">Condition</th>
                    <th className="px-6 py-4 text-left text-white">Typical Sessions</th>
                    <th className="px-6 py-4 text-left text-white">Duration</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E9E2D6]/50">
                  {recoveryTimeline.map((item, index) => (
                    <tr 
                      key={index}
                      className="hover:bg-[#F5F1EA]/60 transition-colors group"
                    >
                      <td className="px-6 py-4 text-[#1A1A1A] text-[16px]">
                        {item.condition}
                      </td>
                      <td className="px-6 py-4 text-[#1A5B4B] text-[16px]">
                        {item.sessions}
                      </td>
                      <td className="px-6 py-4 text-[#5F5F5F] text-[16px]">
                        {item.duration}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Final Section Divider */}
      <div className="relative h-16 flex items-center justify-center">
        <div className="w-full max-w-xl mx-auto flex items-center gap-4 px-6">
          <div className="flex-1 h-px bg-[#E9E2D6]"></div>
          <div className="w-2 h-2 rounded-full bg-[#1A5B4B]"></div>
          <div className="flex-1 h-px bg-[#E9E2D6]"></div>
        </div>
      </div>

      {/* Factors That Affect Your Healing Speed Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-bold text-[#1A1A1A] mb-4">
              Factors That Affect Your Healing Speed
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            {healingFactors.map((factor, index) => (
              <div 
                key={index}
                className="text-center space-y-4"
              >
                <div className="w-20 h-20 rounded-full bg-[#F5F1EA] flex items-center justify-center text-[#1A5B4B] mx-auto mb-6">
                  <factor.icon className="w-10 h-10" strokeWidth={1.5} />
                </div>
                
                <h3 className="text-xl font-bold text-[#1A1A1A]">
                  {factor.title}
                </h3>
                
                <p className="text-[#5F5F5F] leading-relaxed text-[15px] max-w-[260px] mx-auto">
                  {factor.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Section Divider */}
      <div className="relative h-16 flex items-center justify-center">
        <div className="w-full max-w-xl mx-auto flex items-center gap-4 px-6">
          <div className="flex-1 h-px bg-[#E9E2D6]"></div>
          <div className="w-2 h-2 rounded-full bg-[#1A5B4B]"></div>
          <div className="flex-1 h-px bg-[#E9E2D6]"></div>
        </div>
      </div>

      {/* Why One Session Is Never Enough Section */}
      <section className="py-16 md:py-24 bg-[#F5F1EA]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-12">
              Why One Session Is Never Enough
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <p className="text-lg text-[#5F5F5F] leading-relaxed max-w-xl">
                High-Intensity Laser Therapy works by stimulating your body's natural healing processes at the cellular level. Think of it like strength training for your tissues.
              </p>

              <div className="bg-white rounded-xl p-6 border-l-4 border-[#1A5B4B] shadow-sm mb-6">
                <p className="text-lg italic text-[#1A1A1A] leading-relaxed">
                  "Just as you wouldn't expect to build muscle with one gym session, healing damaged tissue requires consistent cellular stimulation over time."
                </p>
                <p className="mt-4 text-sm font-semibold text-[#5F5F5F]">
                  — Jeena Mathew, DHA Licensed Physiotherapist, RamaCare Polyclinic
                </p>
              </div>

              <div className="space-y-3 text-lg text-[#5F5F5F]">
                <p><span className="font-bold text-[#1A1A1A]">Session 1:</span> Initiates healing response</p>
                <p><span className="font-bold text-[#1A1A1A]">Sessions 2-4:</span> Builds cellular repair momentum</p>
                <p><span className="font-bold text-[#1A1A1A]">Sessions 5+:</span> Consolidates healing and restores function</p>
              </div>
            </div>

            {/* Right Content - Gym for Cells Card */}
            <div className="bg-[#1A5B4B] rounded-3xl p-10 text-white text-center shadow-2xl">
              <Dumbbell className="w-20 h-20 mx-auto mb-6" strokeWidth={1.5} />
              <h3 className="text-3xl font-bold mb-4 text-white">"Gym for Cells"</h3>
              <p className="max-w-sm mx-auto leading-relaxed mb-10 opacity-90">
                Each session strengthens your tissues, builds healing capacity, and restores function
              </p>

              <div className="flex justify-between items-end max-w-xs mx-auto text-sm">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold">1</div>
                  <span>Start</span>
                </div>
                <div className="flex-1 h-px bg-white/20 mx-2 mb-4"></div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold">5</div>
                  <span>Progress</span>
                </div>
                <div className="flex-1 h-px bg-white/20 mx-2 mb-4"></div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold">10</div>
                  <span>Strength</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Section Divider */}
      <div className="relative h-16 flex items-center justify-center">
        <div className="w-full max-w-xl mx-auto flex items-center gap-4 px-6">
          <div className="flex-1 h-px bg-[#E9E2D6]"></div>
          <div className="w-2 h-2 rounded-full bg-[#1A5B4B]"></div>
          <div className="flex-1 h-px bg-[#E9E2D6]"></div>
        </div>
      </div>

      {/* Frequently Asked Questions Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqItems.map((faq, index) => (
              <div 
                key={index}
                className="border border-[#E9E2D6]/50 rounded-2xl overflow-hidden hover:border-[#1A5B4B] transition-colors"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-[#F5F1EA] transition-colors"
                >
                  <span className="text-base md:text-lg text-[#1A1A1A] font-medium pr-4">
                    {faq.question}
                  </span>
                  <svg 
                    className={`w-5 h-5 text-[#1A5B4B] shrink-0 transition-transform duration-300 ${openFAQ === index ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ${openFAQ === index ? 'max-h-96' : 'max-h-0'}`}
                >
                  <div className="px-6 pb-5 pt-2 text-[#5F5F5F] leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Section Divider */}
      <div className="relative h-16 flex items-center justify-center">
        <div className="w-full max-w-xl mx-auto flex items-center gap-4 px-6">
          <div className="flex-1 h-px bg-[#E9E2D6]"></div>
          <div className="w-2 h-2 rounded-full bg-[#1A5B4B]"></div>
          <div className="flex-1 h-px bg-[#E9E2D6]"></div>
        </div>
      </div>

      {/* Start Your Recovery Journey Section */}
      <section id="appointment-form" className="py-20 md:py-28 bg-[#1A5B4B]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6" style={{ fontWeight: 700 }}>
              Start Your Recovery Journey in Jumeirah 1
            </h2>
            <p className="opacity-90 mb-4 text-white" style={{ fontSize: '20px', fontWeight: 400 }}>
              RamaCare Polyclinic has been serving Dubai for over 15 years, offering advanced HILT therapy with experienced medical professionals.
            </p>
            <p className="opacity-90 text-white" style={{ fontSize: '18px', fontWeight: 400 }}>
              Whether you're dealing with chronic pain or a recent injury, our team will create a personalized treatment plan tailored to your condition.
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 max-w-4xl mx-auto mb-12">
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-white" style={{ fontSize: '16px' }}>12 Al Dhiyafah Rd-Jumeirah Terrace Building,Dubai</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-white" style={{ fontSize: '16px' }}>(+971) 04 286 2006</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-white" style={{ fontSize: '16px' }}>Sun-Sat: 10AM-10PM</span>
            </div>
          </div>

          {/* Appointment Form */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-10 shadow-2xl" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
              <h3 className="text-2xl font-bold text-white text-center mb-8" style={{ fontWeight: 700 }}>
                Request an Appointment
              </h3>
              
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-base font-semibold text-white mb-2" style={{ fontWeight: 600 }}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-xl border-0 bg-white text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="Your full name"
                    required
                    style={{ padding: '14px 20px', fontSize: '15px' }}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-base font-semibold text-white mb-2" style={{ fontWeight: 600 }}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-xl border-0 bg-white text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="+971 XX XXX XXXX"
                    required
                    style={{ padding: '14px 20px', fontSize: '15px' }}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-base font-semibold text-white mb-2" style={{ fontWeight: 600 }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-xl border-0 bg-white text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="your.email@example.com"
                    required
                    style={{ padding: '14px 20px', fontSize: '15px' }}
                  />
                </div>

                <div>
                  <label htmlFor="preferredTime" className="block text-base font-semibold text-white mb-2" style={{ fontWeight: 600 }}>
                    Preferred Time
                  </label>
                  <select
                    id="preferredTime"
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-xl border-0 bg-white text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-white/50"
                    required
                    style={{ padding: '14px 20px', fontSize: '15px' }}
                  >
                    <option value="">Select a time</option>
                    <option value="morning">Morning (9AM-12PM)</option>
                    <option value="afternoon">Afternoon (12PM-4PM)</option>
                    <option value="evening">Evening (4PM-9PM)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="treatmentArea" className="block text-base font-semibold text-white mb-2" style={{ fontWeight: 600 }}>
                    Treatment Area
                  </label>
                  <input
                    type="text"
                    id="treatmentArea"
                    value={formData.treatmentArea}
                    onChange={(e) => setFormData({ ...formData, treatmentArea: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-xl border-0 bg-white text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="e.g., Lower back, knee, shoulder"
                    required
                    style={{ padding: '14px 20px', fontSize: '15px' }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-[#E8E3D9] text-[#1A5B4B] rounded-xl font-bold text-base hover:bg-white transition-all shadow-lg opacity-90 hover:opacity-100"
                  style={{ padding: '16px 32px', fontWeight: 700, fontSize: '15px' }}
                >
                  Confirm Appointment Request
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppClick}
                  className="w-full px-8 py-4 bg-transparent text-white border-2 border-white rounded-xl font-bold text-base hover:bg-white/10 transition-all flex items-center justify-center gap-2 opacity-90 hover:opacity-100"
                  style={{ padding: '16px 32px', fontWeight: 700, fontSize: '15px' }}
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Book via WhatsApp Instantly
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services & Disclaimer */}
      <section className="bg-white py-12 px-6 border-t border-[#E9E2D6]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl font-semibold text-[#1A1A1A] mb-5">Explore Related Physiotherapy Services</h2>
          <div className="flex flex-wrap gap-2.5">
            <Link href="/services/physiotherapy-dubai" className="text-base text-[#1F5E4B] bg-[#F0F7F4] hover:bg-[#1F5E4B] hover:text-white transition-colors px-4 py-2 rounded-full">
              Physiotherapy Dubai
            </Link>
            <Link href="/services/ultrasound-therapy-cost-dubai/" className="text-base text-[#1F5E4B] bg-[#F0F7F4] hover:bg-[#1F5E4B] hover:text-white transition-colors px-4 py-2 rounded-full">
              Ultrasound Therapy Cost
            </Link>
            <Link href="/services/professional-vs-home-ultrasound/" className="text-base text-[#1F5E4B] bg-[#F0F7F4] hover:bg-[#1F5E4B] hover:text-white transition-colors px-4 py-2 rounded-full">
              Professional vs Home Ultrasound
            </Link>
            <Link href="/services/physiotherapy-insurance-dubai/" className="text-base text-[#1F5E4B] bg-[#F0F7F4] hover:bg-[#1F5E4B] hover:text-white transition-colors px-4 py-2 rounded-full">
              Physiotherapy Insurance
            </Link>
            <Link href="/services/knee-pain-treatment-dubai/" className="text-base text-[#1F5E4B] bg-[#F0F7F4] hover:bg-[#1F5E4B] hover:text-white transition-colors px-4 py-2 rounded-full">
              Knee Pain Treatment
            </Link>
          </div>
          <p className="text-sm text-[#5F5F5F] leading-relaxed mt-8">
            <span className="font-medium text-[#1A1A1A]">Medical Disclaimer:</span> The recovery timelines provided on this page represent clinical averages based on general patient responses to High-Intensity Laser Therapy (HILT) and therapeutic ultrasound. Actual recovery times depend on individual health factors, severity of condition, adherence to rehabilitation protocols, and lifestyle factors. This content does not constitute medical advice or a guaranteed timeline. Please consult a licensed physiotherapist at RamaCare Polyclinic for an individualized assessment.
          </p>
        </div>
      </section>

      <ContentReviewBadge doctorName="Jeena Mathew" pageSlug="how-many-ultrasound-therapy-sessions" />
    </Layout>
  );
};

export default UltrasoundSessionsTimelinePage;
