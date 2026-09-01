import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import Layout from '../../../components/Layout';
import ContentReviewBadge from '../../../components/ContentReviewBadge';
import { useToast } from '../../../components/Toast';
import { MessageCircle, Activity, Heart, Zap, MapPin, Activity as ActivityIcon, ArrowRight, ChevronDown } from 'lucide-react';

const UltrasoundShinSplintsPage = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', time: '', area: '' });
  const { showToast, ToastComponent } = useToast();

  const scrollToContact = () => {
    document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const faqs = [
    {
      q: 'Can I run while receiving ultrasound therapy for shin splints?',
      a: 'In most cases, yes, but we may advise reducing your "load" or distance. The ultrasound helps the tissue heal while you stay active, making it a "dynamic recovery" tool.',
    },
    {
      q: 'How many sessions do I need before the Dubai Run?',
      a: 'For shin splints, we usually see significant improvement after 4 sessions. We recommend starting your cluster of treatments at least 2 weeks before a major event.',
    },
    {
      q: 'Does ultrasound help with Achilles Tendonitis too?',
      a: 'Yes. Ultrasound is one of the most effective treatments for Achilles issues because it can penetrate the thick, fibrous tissue of the tendon better than almost any other modality.',
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    
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
          preferredTime: formData.time,
          concern: `Treatment Area: ${formData.area}`,
          source: 'ultrasound-for-shin-splints-dubai'
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        showToast("Appointment request sent! We'll contact you soon.", 'success');
        setFormData({ name: '', phone: '', email: '', time: '', area: '' });
      } else {
        showToast('Failed to submit. Please try again or contact us directly.', 'error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      showToast('Something went wrong. Please try again or contact us directly.', 'error');
    }
  };

  const CANONICAL_URL = 'https://ramacarepolyclinic.ae/services/ultrasound-for-shin-splints-dubai/';

  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalClinic',
        '@id': 'https://ramacarepolyclinic.ae/#clinic',
        name: 'RamaCare Polyclinic',
        url: 'https://ramacarepolyclinic.ae/',
        image: 'https://ramacarepolyclinic.ae/images/Shin.jpg',
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
        '@id': `${CANONICAL_URL}#webpage`,
        url: CANONICAL_URL,
        name: "Runner's Recovery: Ultrasound for Shin Splints in Dubai | RamaCare",
        description: 'Preparing for the Dubai Run or 30x30? Learn how ultrasound therapy at RamaCare Jumeirah 1 accelerates healing for shin splints and running injuries.',
        inLanguage: 'en-AE',
        lastReviewed: '2026-08-29',
        medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
        about: {
          '@type': 'MedicalCondition',
          name: 'Shin Splints (Medial Tibial Stress Syndrome)'
        },
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
        '@id': `${CANONICAL_URL}#physician`,
        name: 'Jeena Mathew',
        medicalSpecialty: 'Physiotherapy',
        honorificSuffix: 'BPT, MPT',
        hasCredential: 'DHA Licensed Physiotherapist',
        worksFor: { '@id': 'https://ramacarepolyclinic.ae/#clinic' },
        url: 'https://ramacarepolyclinic.ae/doctors/jeena-mathew-physiotherapist-dubai/'
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${CANONICAL_URL}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ramacarepolyclinic.ae/' },
          { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://ramacarepolyclinic.ae/services/' },
          { '@type': 'ListItem', position: 3, name: 'Physiotherapy', item: 'https://ramacarepolyclinic.ae/services/physiotherapy-dubai/' },
          { '@type': 'ListItem', position: 4, name: 'Ultrasound for Shin Splints', item: CANONICAL_URL }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': `${CANONICAL_URL}#faq`,
        mainEntity: faqs.map(faq => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.a
          }
        }))
      }
    ]
  };

  return (
    <>
    <Layout>
      <Head>
        <title key="title">Runner's Recovery: Ultrasound for Shin Splints in Dubai | RamaCare</title>
        <meta name="description" content="Preparing for the Dubai Run or 30x30? Learn how ultrasound therapy at RamaCare Jumeirah 1 accelerates healing for shin splints and running injuries." key="description" />
        <meta name="keywords" content="ultrasound for shin splints Dubai, shin splints treatment Dubai, Dubai Run recovery, 30x30 injury, Medial Tibial Stress Syndrome Dubai, running injury physiotherapy Dubai" />
        <link rel="canonical" href={CANONICAL_URL} key="canonical" />

        {/* Open Graph Tags */}
        <meta property="og:type" content="article" key="og:type" />
        <meta property="og:title" content="Runner's Recovery: Ultrasound for Shin Splints in Dubai | RamaCare" key="og:title" />
        <meta property="og:description" content="Preparing for the Dubai Run or 30x30? Learn how ultrasound therapy at RamaCare Jumeirah 1 accelerates healing for shin splints and running injuries." key="og:description" />
        <meta property="og:url" content={CANONICAL_URL} key="og:url" />
        <meta property="og:image" content="https://ramacarepolyclinic.ae/images/Shin.jpg" key="og:image" />
        <meta property="og:image:width" content="1200" key="og:image:width" />
        <meta property="og:image:height" content="630" key="og:image:height" />
        <meta property="og:image:alt" content="Ultrasound for Shin Splints in Dubai - RamaCare Polyclinic" key="og:image:alt" />
        <meta property="og:site_name" content="RamaCare Polyclinic" key="og:site_name" />
        <meta property="og:locale" content="en_AE" key="og:locale" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content="Runner's Recovery: Ultrasound for Shin Splints in Dubai | RamaCare" key="twitter:title" />
        <meta name="twitter:description" content="Preparing for the Dubai Run or 30x30? Learn how ultrasound therapy at RamaCare Jumeirah 1 accelerates healing for shin splints and running injuries." key="twitter:description" />
        <meta name="twitter:image" content="https://ramacarepolyclinic.ae/images/Shin.jpg" key="twitter:image" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700;800&display=swap" rel="stylesheet" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaGraph)
          }}
        />
      </Head>

      {/* ── Section 1: Hero ── */}
      <section
        style={{ background: 'linear-gradient(135deg, #F5F1EA 0%, #ffffff 100%)', overflow: 'hidden', position: 'relative' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-sm font-medium text-[#5F5F5F] flex-wrap">
            <Link href="/" className="hover:text-[#1F5E4B] transition-colors">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/services/" className="hover:text-[#1F5E4B] transition-colors">Services</Link>
            <span aria-hidden="true">/</span>
            <Link href="/services/physiotherapy-dubai/" className="hover:text-[#1F5E4B] transition-colors">Physiotherapy</Link>
            <span aria-hidden="true">/</span>
            <span className="text-[#1F5E4B]">Ultrasound for Shin Splints</span>
          </nav>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>

              {/* H1 */}
              <h1
                style={{
                  fontFamily: "'Nunito Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: 'clamp(36px, 5vw, 60px)',
                  lineHeight: '1.15',
                  color: '#1A1A1A',
                  margin: 0,
                }}
              >
                Ultrasound for Shin Splints Dubai | Fast Recovery for Dubai Run
              </h1>
              
              {/* Intro paragraph — green with internal anchor link */}
              <p
                style={{
                  fontFamily: "'Nunito Sans', sans-serif",
                  fontSize: '18px',
                  lineHeight: '1.6',
                  color: '#5F5F5F',
                  margin: 0,
                }}
              >
                Preparing for the Dubai Run or 30x30? Learn how{' '}
                <Link
                  href="/services/ultrasound-therapy-dubai/"
                  style={{ textDecoration: 'underline', color: '#1F5E4B' }}
                >
                  ultrasound therapy 
                </Link>
                {' '} at RamaCare Jumeirah 1 accelerates healing for shin splints and running injuries.
              </p>

              {/* Sub-heading + body paragraphs */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <h2
                  style={{
                    fontFamily: "'Nunito Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: '24px',
                    lineHeight: '1.3',
                    color: '#1F5E4B',
                    margin: 0,
                  }}
                >
                  Don&apos;t Let Shin Splints Stop Your 30x30 Progress
                </h2>

                <p
                  style={{
                    fontFamily: "'Nunito Sans', sans-serif",
                    fontSize: '16px',
                    lineHeight: '1.7',
                    color: '#5F5F5F',
                    margin: 0,
                  }}
                >
                  Every November, thousands of residents take over Sheikh Zayed Road for the Dubai Run. However, the sudden increase in training intensity—often called the &quot;Dubai 30x30 Push&quot;—leads to a spike in Medial Tibial Stress Syndrome, commonly known as Shin Splints.
                </p>

                <p
                  style={{
                    fontFamily: "'Nunito Sans', sans-serif",
                    fontSize: '16px',
                    lineHeight: '1.7',
                    color: '#5F5F5F',
                    margin: 0,
                  }}
                >
                  At RamaCare Polyclinic, we specialize in &quot;Accelerated Recovery&quot; for the Dubai running community, using clinical ultrasound to get you back on the track in record time.
                </p>
              </div>

              {/* Runner's Advantage highlight box */}
              <div
                style={{
                  backgroundColor: '#E9E2D6',
                  borderRadius: '16px',
                  padding: '24px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Nunito Sans', sans-serif",
                    fontWeight: 600,
                    fontSize: '17px',
                    color: '#1F5E4B',
                    margin: 0,
                  }}
                >
                  The &quot;Runner&apos;s Advantage&quot;:
                </h3>
                <p
                  style={{
                    fontFamily: "'Nunito Sans', sans-serif",
                    fontSize: '15px',
                    lineHeight: '1.7',
                    color: '#5F5F5F',
                    margin: 0,
                  }}
                >
                 <a href="/services/ultrasound-therapy-dubai/" className="text-[#1b5e3f] hover:underline font-semibold">Ultrasound therapy </a> is a key non-invasive modality for competitive runners. It uses high-frequency sound waves to stimulate blood flow to the periosteum (the bone&apos;s outer layer), helping reduce inflammation where traditional icing and rest may prove insufficient.
                </p>
              </div>

              {/* CTA Buttons — side by side */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={scrollToContact}                  className=
                  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive h-10 rounded-md has-[>svg]:px-4 bg-[#1F5E4B] hover:bg-[#1F5E4B]/90 text-white px-8 py-6 text-lg"
                   >
                  Book Your Runner&apos;s Assessment
                  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                <button
                  type="button"
                  onClick={() => window.open('https://wa.me/971566597878', '_blank')}
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-10 rounded-md has-[>svg]:px-4 border-[#1F5E4B] text-[#1F5E4B] hover:bg-[#1F5E4B] hover:text-white px-8 py-6 text-lg"
                >
                  <MessageCircle size={16} />
                  WhatsApp Consultation
                </button>
              </div>
            </div>

            {/* Right — Dubai cityscape photo */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ aspectRatio: '3 / 4' }}>
                <img
                  src="/images/Shin.jpg"
                  alt="Shin splints treatment in Dubai"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center bottom' }}
                />
              </div>
              {/* Decorative blur circles */}
              <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-[#1F5E4B]/5 rounded-full blur-3xl"></div>
              <div className="absolute -z-10 -top-10 -left-10 w-48 h-48 bg-white/60 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: How Ultrasound Heals Running Injuries ── */}
      <section style={{ backgroundColor: '#ffffff', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

          {/* Heading block */}
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2
              style={{
                fontFamily: "'Nunito Sans', sans-serif",
                fontWeight: 700,
                fontSize: 'clamp(28px, 4vw, 48px)',
                color: '#1A1A1A',
                lineHeight: '1.2',
                margin: '0 0 20px 0',
              }}
            >
              How Ultrasound Heals Running Injuries
            </h2>
            <p
              style={{
                fontFamily: "'Nunito Sans', sans-serif",
                fontSize: '18px',
                lineHeight: '1.6',
                color: '#5F5F5F',
                maxWidth: '680px',
                margin: '0 auto',
              }}
            >
              When you run on Dubai&apos;s hard pavement (like the Kite Beach track or the Dubai Canal), your lower legs absorb massive amounts of shock. <a href="/services/ultrasound-therapy-dubai/" className="hover:underline">Ultrasound therapy</a> works on a cellular level to repair this damage:
            </p>
          </div>

          {/* Three feature cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Card 1 */}
            <div className="bg-card text-card-foreground flex flex-col rounded-xl h-full border-2 border-transparent hover:border-[#1F5E4B] transition-all duration-300 shadow-lg hover:shadow-xl">
              <div className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-[data-slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
                <div className="w-16 h-16 bg-[#E9E2D6] rounded-full flex items-center justify-center text-[#1F5E4B] mb-4">
                  <Activity size={24} strokeWidth={2} />
                </div>
                <h4 className="text-xl text-[#1A1A1A] font-semibold">
                  Reduces Bone-Lining Inflammation
                </h4>
              </div>
              <div className="px-6 [&:last-child]:pb-6">
                <p className="text-[#5F5F5F] leading-relaxed">
                  Targets the exact point where the muscle pulls on the shin bone.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-card text-card-foreground flex flex-col rounded-xl h-full border-2 border-transparent hover:border-[#1F5E4B] transition-all duration-300 shadow-lg hover:shadow-xl">
              <div className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-[data-slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
                <div className="w-16 h-16 bg-[#E9E2D6] rounded-full flex items-center justify-center text-[#1F5E4B] mb-4">
                  <Heart size={24} strokeWidth={2} />
                </div>
                <h4 className="text-xl text-[#1A1A1A] font-semibold">
                  Accelerates Tissue Repair
                </h4>
              </div>
              <div className="px-6 [&:last-child]:pb-6">
                <p className="text-[#5F5F5F] leading-relaxed">
                  Increases the production of collagen, the building block of healthy tendons and muscles.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-card text-card-foreground flex flex-col rounded-xl h-full border-2 border-transparent hover:border-[#1F5E4B] transition-all duration-300 shadow-lg hover:shadow-xl">
              <div className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-[data-slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
                <div className="w-16 h-16 bg-[#E9E2D6] rounded-full flex items-center justify-center text-[#1F5E4B] mb-4">
                  <Zap size={24} strokeWidth={2} />
                </div>
                <h4 className="text-xl text-[#1A1A1A] font-semibold">
                  Breaks Down Micro-Scarring
                </h4>
              </div>
              <div className="px-6 [&:last-child]:pb-6">
                <p className="text-[#5F5F5F] leading-relaxed">
                  Prevents the buildup of stiff scar tissue that causes long-term &quot;tightness&quot; in the calves.
                </p>
              </div>
            </div>
          </div>

          {/* Section CTA */}
          <div className="text-center mt-12">
            <button
             onClick={scrollToContact}
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive h-10 rounded-md has-[>svg]:px-4 bg-[#1F5E4B] hover:bg-[#1F5E4B]/90 text-white px-8">
              Start Your Recovery Today
            </button>
          </div>

        </div>
      </section>

    {/* Section 3 — Recovery Timeline */}
    <section className="py-20 bg-[#F5F1EA]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-6 text-[#1A1A1A]" style={{ fontFamily: "'Nunito Sans', sans-serif", fontWeight: 700 }}>
            Recovery Timeline for Dubai Run Participants
          </h2>
          <p
            style={{
              fontFamily: "'Nunito Sans', sans-serif",
              fontSize: '18px',
              lineHeight: '1.6',
              color: '#5F5F5F',
              maxWidth: '640px',
              margin: '0 auto',
            }}
          >
            If the Dubai Run is just weeks away, you need a strategy that works fast. Here is our recommended protocol for Jumeirah-based runners:
          </p>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl shadow-xl overflow-hidden mb-12">
          <div className="overflow-x-auto">
            <table className="w-full caption-bottom text-sm min-w-[600px]">
              <thead className="[&_tr]:border-b" style={{ borderColor: '#E9E2D6' }}>
                <tr style={{ backgroundColor: '#1F5E4B' }}>
                  <th className="h-10 px-2 text-left align-middle font-medium whitespace-nowrap text-white" style={{ width: '30%', paddingLeft: '24px' }}>
                    Stage of Injury
                  </th>
                  <th className="h-10 px-2 text-left align-middle font-medium whitespace-nowrap text-white" style={{ width: '35%' }}>
                    Treatment Plan
                  </th>
                  <th className="h-10 px-2 text-left align-middle font-medium whitespace-nowrap text-white" style={{ width: '35%' }}>
                    Goal
                  </th>
                </tr>
              </thead>
              <tbody className="[&_tr:last-child]:border-0">
                {[
                  {
                    stage: 'Acute Pain (Week 1)',
                    plan: '3 Ultrasound sessions + Rest',
                    goal: 'Targeted inflammation reduction.',
                  },
                  {
                    stage: 'The "Build-Up" (Week 2)',
                    plan: '2 Ultrasound sessions + Low impact',
                    goal: 'Supporting tissue resilience.',
                  },
                  {
                    stage: 'The Final Taper (Week 3)',
                    plan: '1 Session + Full Mobility',
                    goal: 'Supporting recovery for Race Day readiness.',
                  },
                ].map((row, i) => (
                  <tr
                    key={i}
                    className="transition-colors hover:bg-[#F5F1EA] data-[state=selected]:bg-muted"
                    style={{ borderBottom: i < 2 ? '1px solid #E9E2D6' : 'none' }}
                  >
                    <td className="p-2 align-middle whitespace-nowrap" style={{ paddingLeft: '24px', paddingTop: '18px', paddingBottom: '18px' }}>
                      <strong className="text-[#1F5E4B]">{row.stage}</strong>
                    </td>
                    <td className="p-2 align-middle whitespace-nowrap" style={{ paddingTop: '18px', paddingBottom: '18px', color: '#1A1A1A' }}>
                      {row.plan}
                    </td>
                    <td className="p-2 align-middle whitespace-nowrap" style={{ paddingTop: '18px', paddingBottom: '18px', color: '#1A1A1A' }}>
                      {row.goal}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button
            type="button"
                  onClick={() => window.open('https://wa.me/971566597878', '_blank')}
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive h-10 rounded-md has-[>svg]:px-4 bg-[#1F5E4B] hover:bg-[#1F5E4B]/90 text-white px-8"
          >
            <MessageCircle size={16} />
            Discuss Your Timeline on WhatsApp
          </button>
        </div>
      </div>
    </section>

    {/* Section 4 — Why Choose RamaCare */}
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-6 text-[#1A1A1A]" style={{ fontFamily: "'Nunito Sans', sans-serif", fontWeight: 700 }}>
            Why Choose RamaCare for Sports Recovery?
          </h2>
          <p className="text-lg text-[#5F5F5F] max-w-3xl mx-auto leading-relaxed">
            Located in the heart of Jumeirah 1, we are minutes away from the city&apos;s most popular running routes. Our sports recovery center is designed for athletes who need results, not just &quot;rest.&quot;
          </p>
        </div>

        {/* Three image cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Card 1 */}
          <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border-2 border-transparent hover:border-transparent h-full overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="h-48 overflow-hidden">
              <img
                src="/images/dr.jpg"
                alt="Ultrasound therapy equipment"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-[data-slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
              <h4 className="text-xl text-[#1F5E4B]">
                DHA-Certified Specialists
              </h4>
            </div>
            <div className="px-6 [&:last-child]:pb-6">
              <p className="text-[#5F5F5F] leading-relaxed">
                Our physios understand the biomechanics of running on asphalt vs. sand.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border-2 border-transparent hover:border-transparent h-full overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="h-48 overflow-hidden">
              <img
                src="/images/sport1.jpg"
                alt="Sports therapy combo treatment"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-[data-slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
              <h4 className="text-xl text-[#1F5E4B]">
                Combo-Therapies
              </h4>
            </div>
            <div className="px-6 [&:last-child]:pb-6">
              <p className="text-[#5F5F5F] leading-relaxed">
                We often combine ultrasound with Sports Taping (Kinesiology) to support your shin while you continue your 30x30 challenge.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border-2 border-transparent hover:border-transparent h-full overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="h-48 overflow-hidden">
              <img
                src="/images/Shin1.jpg"
                alt="Jumeirah location Dubai"
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center bottom' }}
              />
            </div>
            <div className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-[data-slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
              <h4 className="text-xl text-[#1F5E4B]">
                Hyper-Local Convenience
              </h4>
            </div>
            <div className="px-6 [&:last-child]:pb-6">
              <p className="text-[#5F5F5F] leading-relaxed">
                Located near Jumeirah Terrace, easy for post-run recovery sessions.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>

    {/* Section 5 — FAQ */}
    <section className="py-20 bg-[#F5F1EA]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12">
          <h2 className="text-4xl mb-6 text-[#1A1A1A]" style={{ fontFamily: "'Nunito Sans', sans-serif", fontWeight: 700 }}>
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordion */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-12">
          {faqs.map((faq, i) => (
            <div
              key={i}
              style={{ borderBottom: i < faqs.length - 1 ? '1px solid #E9E2D6' : 'none' }}
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="focus-visible:border-ring focus-visible:ring-[3px] rounded-md py-4 font-medium transition-all outline-none hover:underline  focus-visible:ring-[#1F5E4B]/50 text-left hover:text-[#1F5E4B] px-8 flex items-center justify-between w-full"
                aria-expanded={openFaq === i}
              >
                <span
                  style={{
                    fontFamily: "'Nunito Sans', sans-serif",
                    fontSize: '16px',
                    fontWeight: openFaq === i ? 600 : 400,
                    color: openFaq === i ? '#1F5E4B' : '#1A1A1A',
                    textDecoration: openFaq === i ? 'underline' : 'none',
                  }}
                >
                  {faq.q}
                </span>
                <ChevronDown
                  size={20}
                  color="#1A1A1A"
                  style={{
                    flexShrink: 0,
                    marginLeft: '16px',
                    transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.2s ease',
                  }}
                />
              </button>
              {openFaq === i && (
                <div className="pb-4 text-[#5F5F5F] leading-relaxed pt-4 px-8">
                  <p
                    style={{
                      fontFamily: "'Nunito Sans', sans-serif",
                      fontSize: '15px',
                      lineHeight: '1.7',
                      margin: 0,
                    }}
                  >
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={scrollToContact}
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive h-10 rounded-md bg-[#1F5E4B] hover:bg-[#1F5E4B]/90 text-white px-8"
          >
            Get Your Questions Answered
          </button>
        </div>

      </div>
    </section>

    {/* Section 6 — Booking Form */}
    <section id="booking-form" className="py-20 bg-[#1F5E4B] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left — info */}
          <div>
            <h2
              style={{
                fontFamily: "'Nunito Sans', sans-serif",
                fontWeight: 700,
                fontSize: 'clamp(28px, 4vw, 40px)',
                color: '#ffffff',
                lineHeight: '1.2',
                margin: '0 0 20px 0',
              }}
            >
              Get Race-Ready in Jumeirah 1
            </h2>
            <p
              style={{
                fontFamily: "'Nunito Sans', sans-serif",
                fontSize: '16px',
                lineHeight: '1.7',
                color: 'rgba(255,255,255,0.85)',
                margin: '0 0 40px 0',
              }}
            >
              Don&apos;t ignore the &quot;nagging&quot; pain in your shins. Visit RamaCare today and ensure you cross the finish line on Sheikh Zayed Road pain-free.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {[
                { icon: <MapPin size={20} />, label: 'Location', value: '12 Al Dhiyafah Rd - Jumeirah Terrace Building, Ground Floor, Jumeirah 1 - Dubai' },
                { icon: <ActivityIcon size={20} />, label: 'Specialty', value: 'Sports Physiotherapy & Running Gait Analysis' },
                { icon: <ArrowRight size={20} />, label: 'Next Step', value: "Book Your Runner's Assessment" },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div style={{ color: 'rgba(255,255,255,0.7)', marginTop: '2px', flexShrink: 0 }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Nunito Sans', sans-serif", fontWeight: 700, fontSize: '16px', color: '#ffffff', marginBottom: '2px' }}>
                      {item.label}
                    </div>
                    <div style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '15px', color: 'rgba(255,255,255,0.75)' }}>
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Form card */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h3
              style={{
                fontFamily: "'Nunito Sans', sans-serif",
                fontWeight: 700,
                fontSize: '22px',
                color: '#1A1A1A',
                margin: '0 0 24px 0',
              }}
            >
              Book Your Appointment
            </h3>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {/* Name */}
                <div>
                  <label style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '14px', fontWeight: 600, color: '#1A1A1A', display: 'block', marginBottom: '6px' }}>Name</label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    required
                    minLength={2}
                    maxLength={50}
                    pattern="[a-zA-Z\s'-]+"
                    title="Please enter a valid name (letters, spaces, hyphens only)"
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      border: '1px solid #E9E2D6',
                      borderRadius: '6px',
                      fontSize: '15px',
                      fontFamily: "'Nunito Sans', sans-serif",
                      color: '#1A1A1A',
                      outline: 'none',
                      boxSizing: 'border-box',
                      backgroundColor: '#ffffff',
                    }}
                  />
                </div>
                {/* Phone */}
                <div>
                  <label style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '14px', fontWeight: 600, color: '#1A1A1A', display: 'block', marginBottom: '6px' }}>Phone</label>
                  <input
                    type="tel"
                    placeholder="+971 XX XXX XXXX"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    required
                    minLength={8}
                    maxLength={20}
                    pattern="[0-9+\s-]+"
                    title="Please enter a valid phone number"
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      border: '1px solid #E9E2D6',
                      borderRadius: '6px',
                      fontSize: '15px',
                      fontFamily: "'Nunito Sans', sans-serif",
                      color: '#1A1A1A',
                      outline: 'none',
                      boxSizing: 'border-box',
                      backgroundColor: '#ffffff',
                    }}
                  />
                </div>
                {/* Email */}
                <div>
                  <label style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '14px', fontWeight: 600, color: '#1A1A1A', display: 'block', marginBottom: '6px' }}>Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      border: '1px solid #E9E2D6',
                      borderRadius: '6px',
                      fontSize: '15px',
                      fontFamily: "'Nunito Sans', sans-serif",
                      color: '#1A1A1A',
                      outline: 'none',
                      boxSizing: 'border-box',
                      backgroundColor: '#ffffff',
                    }}
                  />
                </div>
                {/* Preferred Time */}
                <div>
                  <label style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '14px', fontWeight: 600, color: '#1A1A1A', display: 'block', marginBottom: '6px' }}>Preferred Time</label>
                  <select
                    value={formData.time}
                    onChange={e => setFormData({ ...formData, time: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      border: '1px solid #E9E2D6',
                      borderRadius: '6px',
                      fontSize: '15px',
                      fontFamily: "'Nunito Sans', sans-serif",
                      color: formData.time ? '#1A1A1A' : '#9CA3AF',
                      outline: 'none',
                      boxSizing: 'border-box',
                      backgroundColor: '#ffffff',
                      cursor: 'pointer',
                    }}
                  >
                    <option value="" disabled>Select a time</option>
                    <option value="Morning (8am – 12pm)">Morning (8am – 12pm)</option>
                    <option value="Afternoon (12pm – 5pm)">Afternoon (12pm – 5pm)</option>
                    <option value="Evening (5pm – 8pm)">Evening (5pm – 8pm)</option>
                  </select>
                </div>
                {/* Treatment Area */}
                <div>
                  <label style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: '14px', fontWeight: 600, color: '#1A1A1A', display: 'block', marginBottom: '6px' }}>Treatment Area</label>
                  <select
                    value={formData.area}
                    onChange={e => setFormData({ ...formData, area: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      border: '1px solid #E9E2D6',
                      borderRadius: '6px',
                      fontSize: '15px',
                      fontFamily: "'Nunito Sans', sans-serif",
                      color: formData.area ? '#1A1A1A' : '#9CA3AF',
                      outline: 'none',
                      boxSizing: 'border-box',
                      backgroundColor: '#ffffff',
                      cursor: 'pointer',
                    }}
                  >
                    <option value="" disabled>Select area</option>
                    <option value="Shin Splints">Shin Splints</option>
                    <option value="Achilles Tendonitis">Achilles Tendonitis</option>
                    <option value="Knee Pain">Knee Pain</option>
                    <option value="General Assessment">General Assessment</option>
                  </select>
                </div>
                {/* Submit */}
                <button
                  type="submit"
                  style={{
                    width: '100%', padding: '12px 14px', backgroundColor: '#1F5E4B',
                    color: '#ffffff', border: 'none', borderRadius: '6px',
                    fontFamily: "'Nunito Sans', sans-serif", fontWeight: 600, fontSize: '15px',
                    cursor: 'pointer', marginTop: '8px',
                  }}
                >
                  Confirm Appointment Request
                </button>
                {/* WhatsApp */}
                <button
                  type="button"
                  onClick={() => window.open('https://wa.me/971566597878', '_blank')}
                  style={{
                    width: '100%', padding: '12px 14px', backgroundColor: '#ffffff',
                    color: '#1F5E4B', border: '1px solid #1F5E4B', borderRadius: '6px',
                    fontFamily: "'Nunito Sans', sans-serif", fontWeight: 600, fontSize: '15px',
                    cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginTop: '10px',
                  }}
                >
                  <MessageCircle size={16} />
                  Book via WhatsApp Instantly
                </button>
              </form>
          </div>

        </div>
      </div>
    </section>

    <ContentReviewBadge doctorName="Jeena Mathew" pageSlug="ultrasound-for-shin-splints-dubai" />

    </Layout>
    <>{ToastComponent}</>
  </>
  );
};

export default UltrasoundShinSplintsPage;
