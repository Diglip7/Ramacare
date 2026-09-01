import Layout from '../../../components/Layout';
import ContentReviewBadge from '../../../components/ContentReviewBadge';
import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Droplet,
  Calendar,
  CheckCircle,
  ChevronDown,
  MessageCircle,
  Phone,
  Shield,
  Sparkles,
  Users,
  ArrowRight,
  X,
  Check,
  Info,
  AlertCircle,
  Camera,
  Clock,
  TrendingUp,
  Syringe,
  FlaskConical,
  ScanLine,
} from 'lucide-react';

const SITE_URL = 'https://ramacarepolyclinic.ae';
const PAGE_PATH = '/services/prp-hair-treatment-recovery/';

// ---- Recovery content data exactly matching the doc ----
const recoveryTimeline = [
  {
    id: 'd1',
    tag: 'Day 1',
    title: 'Initial Reactions',
    detail: 'Scalp tenderness, tightness, possible mild swelling or redness at injection sites',
  },
  {
    id: 'd23',
    tag: 'Days 2–3',
    title: 'Discomfort Fades',
    detail: 'Swelling and redness typically start improving; mild itchiness as the scalp heals',
  },
  {
    id: 'w1',
    tag: 'Week 1',
    title: 'Resolution',
    detail: 'Most visible scalp reactions resolve; scalp returns to feeling normal to the touch',
  },
  {
    id: 'm1',
    tag: 'Month 1',
    title: 'Follicle Transition',
    detail: 'Little visible hair change yet; some patients notice slightly increased shedding as follicles cycle',
  },
  {
    id: 'm36',
    tag: 'Months 3–6',
    title: 'Gradual Regrowth',
    detail: 'Gradual, cumulative improvements in hair density become more noticeable',
  },
];

const first24HoursList = [
  'Mild to moderate tenderness across the treated scalp',
  'Small red bumps at injection sites, similar to mosquito bites',
  'Slight swelling, occasionally extending toward the forehead',
  'A feeling of tightness across the scalp',
];

const aftercareList = [
  'Avoid washing your hair for at least 24 hours',
  'Skip strenuous exercise for 24–48 hours',
  'Avoid touching, scratching, or massaging the scalp',
  'Skip hair styling products (gels, sprays) for 24–48 hours',
  'Avoid direct sun exposure on the scalp',
  'Sleep with your head slightly elevated the first night, if comfortable',
  'Follow any medication or supplement guidance from your clinician',
];

const avoidList = [
  'Intense workouts or activities that cause heavy sweating',
  'Swimming pools, saunas, and steam rooms',
  'Coloring or chemically treating your hair',
  'Alcohol consumption on the day of treatment',
  'Blood-thinning medications or supplements (unless cleared by your doctor)',
];

const nutritionList = [
  { title: 'Adequate protein intake', desc: 'since hair is largely made of protein' },
  { title: 'Iron-rich foods', desc: 'particularly important for patients with any degree of iron deficiency' },
  { title: 'Hydration', desc: 'which supports general healing' },
  { title: 'Reducing alcohol and heavily processed foods', desc: 'in the days around treatment' },
];

const recoveryFactors = [
  { title: 'Skin sensitivity', desc: 'some scalps are simply more reactive than others' },
  { title: 'Number of injection sites', desc: 'more extensive treatment areas can mean slightly more initial tenderness' },
  { title: 'Adherence to aftercare', desc: 'skipping instructions tends to extend discomfort' },
  { title: 'General health', desc: 'conditions affecting healing or clotting can influence bruising and swelling' },
  { title: 'Individual pain tolerance', desc: 'perception of "mild" versus "moderate" discomfort varies' },
];

const recoveryTips = [
  { desc: 'Stick closely to your clinic\'s aftercare instructions, especially in the first 48 hours' },
  { desc: 'Don\'t skip or delay follow-up sessions without discussing it with your clinician' },
  { desc: 'Keep a simple photo log under consistent lighting to track gradual change accurately' },
  { desc: 'Manage stress and sleep, both of which influence hair growth cycles' },
  { desc: 'Be patient — the biggest recovery mistake is judging results too early' },
];

const recoveryMistakes = [
  'Washing hair too soon and irritating fresh injection sites',
  'Judging results within the first month, before biological changes have had time to appear',
  'Skipping aftercare instructions because symptoms feel mild',
  'Over-exercising in the first 24–48 hours, increasing sweat-related irritation',
  'Panicking over temporary shedding, which is often a normal part of the cycle reset',
  'Missing follow-up sessions, which reduces the cumulative benefit of the protocol',
];

const sideEffectsList = [
  'Scalp tenderness or soreness',
  'Mild swelling, sometimes migrating slightly toward the forehead',
  'Small bruises at injection sites',
  'Temporary redness',
  'Mild headache on the day of treatment',
];

const doctorContactSigns = [
  'Increasing pain rather than gradual improvement',
  'Spreading redness or warmth beyond the treated area',
  'Pus, discharge, or an unpleasant odor at injection sites',
  'Fever or feeling generally unwell',
  'Swelling that worsens after day 2–3 instead of improving',
];

const prpVsTransplantRecovery = {
  headers: ['PRP Recovery', 'Hair Transplant Recovery'],
  rows: [
    { label: 'Downtime', values: ['Minimal — often none', 'Several days to weeks'] },
    { label: 'Visible healing', values: ['Mild redness/swelling, days', 'Scabbing, redness, weeks'] },
    { label: 'Return to work', values: ['Usually same day or next day', 'Often several days off recommended'] },
    { label: 'Exercise restriction', values: ['24–48 hours', '1–4 weeks depending on procedure'] },
    { label: 'Discomfort level', values: ['Mild', 'Moderate, sometimes more with surgical sites'] },
  ],
};

const whyChooseRecovery = [
  { title: 'Personalized consultations', desc: 'that set realistic recovery and results expectations from day one' },
  { title: 'Experienced medical professionals', desc: 'who talk you through exactly what to expect, not just a generic printed handout' },
  { title: 'Advanced PRP techniques', desc: 'tailored to your scalp\'s specific needs' },
  { title: 'Individual recovery guidance', desc: 'including how to handle any concerns that come up between sessions' },
  { title: 'Modern facilities', desc: 'in a convenient Dubai location, accessible to patients across the city and nearby areas like Jumeirah' },
];

const faqs = [
  { question: 'How long does PRP hair treatment recovery take?', answer: 'Visible scalp recovery — redness, tenderness, swelling — generally resolves within 3 to 5 days, while full biological healing continues quietly for several months.' },
  { question: 'Can I wash my hair after PRP?', answer: 'Yes, but most clinics recommend waiting at least 24 hours, then washing gently with a mild, sulfate-free shampoo.' },
  { question: 'When can I exercise after PRP?', answer: 'Light activity is usually fine the same day; it\'s best to wait 24–48 hours before resuming intense workouts or activities that cause heavy sweating.' },
  { question: 'Is swelling normal after PRP?', answer: 'Yes, mild swelling — sometimes extending slightly toward the forehead — is a common and temporary response that usually improves within a few days.' },
  { question: 'When will I see hair growth?', answer: 'Most patients notice early regrowth around 2–3 months after treatment, with more visible density improvements typically appearing by months 4–6.' },
  { question: 'Can I return to work the same day?', answer: 'Most patients return to work the same day or the next day, since PRP involves minimal downtime compared to surgical hair restoration options.' },
  { question: 'Is it normal to shed more hair after PRP?', answer: 'Some patients notice temporary increased shedding in the weeks following treatment, which often reflects the hair cycle resetting rather than a negative reaction.' },
  { question: 'How many PRP sessions are needed for full recovery and results?', answer: 'Most protocols involve an initial series of sessions spaced four to six weeks apart, followed by maintenance visits — your clinician can outline a specific plan for you.' },
  { question: 'Does PRP hair treatment hurt during recovery?', answer: 'Discomfort is generally mild and improves within a few days; most patients describe tenderness rather than significant ongoing pain.' },
  { question: 'Can I color my hair during recovery?', answer: 'It\'s best to avoid hair coloring or other chemical treatments for at least a few days after PRP to avoid irritating the scalp.' },
  { question: 'What foods help PRP hair treatment recovery?', answer: 'A balanced diet with adequate protein, iron, and hydration supports general healing, though no specific food guarantees faster results.' },
  { question: 'Can I sleep normally after PRP treatment?', answer: 'Yes, though sleeping with your head slightly elevated on the first night can help minimize swelling for some patients.' },
  { question: 'Are there any long-term recovery restrictions after PRP?', answer: 'No, most restrictions are limited to the first 24 to 48 hours; beyond that, patients typically resume all normal activities.' },
  { question: 'What if my scalp still hurts after a week?', answer: 'Mild tenderness lasting a few extra days can happen, but pain that is worsening or persists well beyond a week should be discussed with your clinician.' },
  { question: 'Is PRP recovery easier than hair transplant recovery?', answer: 'Generally, yes. PRP involves far less downtime, no incisions, and milder temporary side effects compared to surgical hair transplant recovery.' },
];

const relatedGuides = [
  { title: 'Hair PRP Treatment in Dubai', desc: 'Explore our core PRP treatment page for a full breakdown of the procedure itself, before you get to the recovery stage.', href: '/services/hair-prp-dubai/' },
  { title: 'PRP Hair Treatment Before and After', desc: 'See a realistic, month-by-month picture of how results typically build once recovery is behind you.', href: '/services/prp-hair-treatment-before-and-after/' },
  { title: 'Hair Loss Treatment in Dubai', desc: 'A broader look at hair loss treatment options if you\'re still comparing approaches beyond PRP.', href: '/services/hair-loss-dubai/' },
  { title: 'Hair Fall Treatment in Dubai', desc: 'Useful if excessive shedding, rather than pattern thinning, is your primary concern.', href: '/services/hair-treatment-dubai/' },
  { title: 'PRP Hair Treatment Cost in Dubai', desc: 'A transparent look at pricing factors, helpful for planning your full treatment and recovery journey.', href: '/services/hair-prp-cost-dubai/' },
  { title: 'Hair Regrowth Treatment Dubai', desc: 'Covers additional treatments that can complement PRP during and after your recovery period.', href: '/services/hair-regrowth-treatment-dubai/' },
  { title: 'Hair Mesotherapy in Dubai', desc: 'Compare mesotherapy\'s approach and recovery profile against PRP to see which suits your goals.', href: '/services/mesotherapy-dubai/' },
];

const navItems = [
  { id: 'timeline', label: 'Recovery Timeline' },
  { id: 'aftercare', label: 'Aftercare & Tips' },
  { id: 'side-effects', label: 'Side Effects' },
  { id: 'compare', label: 'PRP vs Transplant' },
  { id: 'faqs', label: 'FAQs' },
];

export default function PrpHairRecoveryPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [activeTab, setActiveTab] = useState('24h');
  const [activeSection, setActiveSection] = useState('timeline');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    );
    navItems.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const toggleFaq = (index) => setOpenFaq(openFaq === index ? null : index);

  return (
    <Layout>
      <Head>
        <title key="title">PRP Hair Treatment Recovery: What to Expect Day by Day | Dubai</title>
        <meta
          name="description"
          content="A day-by-day PRP hair treatment recovery timeline, aftercare instructions, and guidance on normal vs. concerning symptoms, medically reviewed by RamaCare Polyclinic."
          key="description"
        />
        <meta
          name="keywords"
          content="PRP hair treatment recovery Dubai, PRP aftercare instructions, PRP hair treatment side effects, PRP recovery timeline, hair PRP downtime, PRP hair treatment day by day recovery"
          key="keywords"
        />
        <link rel="canonical" href="https://ramacarepolyclinic.ae/services/prp-hair-treatment-recovery/" />
        <meta name="robots" content="index, follow" key="robots" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="PRP Hair Treatment Recovery: What to Expect Day by Day | RamaCare Polyclinic" key="og:title" />
        <meta
          property="og:description"
          content="A day-by-day PRP hair treatment recovery timeline, aftercare instructions, and guidance on normal vs. concerning symptoms, medically reviewed by RamaCare Polyclinic."
          key="og:description"
        />
        <meta property="og:type" content="article" key="og:type" />
        <meta property="og:url" content="https://ramacarepolyclinic.ae/services/prp-hair-treatment-recovery/" key="og:url" />
        <meta property="og:image" content="https://ramacarepolyclinic.ae/images/hair-consultation-ramacare-prp.jpg" key="og:image" />
        <meta property="og:image:width" content="1200" key="og:image:width" />
        <meta property="og:image:height" content="630" key="og:image:height" />
        <meta property="og:site_name" content="RamaCare Polyclinic" key="og:site_name" />
        <meta property="og:locale" content="en_AE" key="og:locale" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content="PRP Hair Treatment Recovery: What to Expect Day by Day | RamaCare Polyclinic" key="twitter:title" />
        <meta
          name="twitter:description"
          content="A day-by-day PRP hair treatment recovery timeline, aftercare instructions, and guidance on normal vs. concerning symptoms, medically reviewed by RamaCare Polyclinic."
          key="twitter:description"
        />
        <meta name="twitter:image" content="https://ramacarepolyclinic.ae/images/hair-consultation-ramacare-prp.jpg" key="twitter:image" />

        {/* Structured JSON-LD Schema (@graph: MedicalWebPage, Physician, FAQPage, MedicalClinic) */}
        <script
          key="schema-graph"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'MedicalWebPage',
                  '@id': 'https://ramacarepolyclinic.ae/services/prp-hair-treatment-recovery/#webpage',
                  url: 'https://ramacarepolyclinic.ae/services/prp-hair-treatment-recovery/',
                  name: 'PRP Hair Treatment Recovery: What to Expect Day by Day',
                  description:
                    'A day-by-day PRP hair treatment recovery timeline, aftercare instructions, and guidance on normal vs. concerning symptoms, medically reviewed by RamaCare Polyclinic.',
                  inLanguage: 'en',
                  isPartOf: {
                    '@type': 'WebSite',
                    url: 'https://ramacarepolyclinic.ae/',
                    name: 'RamaCare Polyclinic',
                  },
                  about: {
                    '@type': 'MedicalProcedure',
                    name: 'Platelet Rich Plasma (PRP) Hair Therapy',
                  },
                  reviewedBy: {
                    '@id': 'https://ramacarepolyclinic.ae/services/prp-hair-treatment-recovery/#physician',
                  },
                  breadcrumb: {
                    '@type': 'BreadcrumbList',
                    itemListElement: [
                      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ramacarepolyclinic.ae/' },
                      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://ramacarepolyclinic.ae/services/' },
                      {
                        '@type': 'ListItem',
                        position: 3,
                        name: 'PRP Hair Treatment Recovery',
                        item: 'https://ramacarepolyclinic.ae/services/prp-hair-treatment-recovery/',
                      },
                    ],
                  },
                },
                {
                  '@type': 'Physician',
                  '@id': 'https://ramacarepolyclinic.ae/services/prp-hair-treatment-recovery/#physician',
                  name: 'Dr. Sahar Zomorrodi',
                  jobTitle: 'General Practitioner & Aesthetic Specialist',
                  medicalSpecialty: 'General Practice',
                  honorificSuffix: 'MD',
                  hasCredential: 'DHA Licensed General Practitioner',
                  worksFor: {
                    '@type': 'MedicalOrganization',
                    name: 'RamaCare Polyclinic',
                    url: 'https://ramacarepolyclinic.ae/',
                  },
                  url: 'https://ramacarepolyclinic.ae/doctors/dr-sahar-zomorrodi-general-practitioner-dubai/',
                },
                {
                  '@type': 'FAQPage',
                  '@id': 'https://ramacarepolyclinic.ae/services/prp-hair-treatment-recovery/#faq',
                  mainEntity: faqs.map((f) => ({
                    '@type': 'Question',
                    name: f.question,
                    acceptedAnswer: { '@type': 'Answer', text: f.answer },
                  })),
                },
                {
                  '@type': 'MedicalClinic',
                  '@id': 'https://ramacarepolyclinic.ae/#organization',
                  name: 'RamaCare Polyclinic',
                  url: 'https://ramacarepolyclinic.ae/',
                  telephone: '+971566597878',
                  medicalSpecialty: 'Dermatology',
                  address: {
                    '@type': 'PostalAddress',
                    streetAddress: '12 Al Dhiyafah Rd, Jumeirah Terrace Building, Ground Floor',
                    addressLocality: 'Jumeirah 1, Dubai',
                    addressCountry: 'AE',
                  },
                  priceRange: '$$',
                },
              ],
            }),
          }}
        />
      </Head>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-3">
        <nav aria-label="Breadcrumb" className="mb-4 flex items-center text-xs font-medium text-[#5F5F5F] gap-1.5">
          <Link href="/" className="hover:text-[#1F5E4B] transition-colors">Home</Link>
          <span className="mx-1">/</span>
          <Link href="/services/" className="hover:text-[#1F5E4B] transition-colors">Services</Link>
          <span className="mx-1">/</span>
          <span className="text-[#1F5E4B]">PRP Hair Treatment Recovery</span>
        </nav>
      </div>

      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1F5E4B] via-[#2A7D63] to-[#1F5E4B]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute w-[28rem] h-[28rem] bg-white/5 rounded-full -top-32 -right-24 blur-3xl"
            animate={{ y: [0, 25, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute w-72 h-72 bg-white/10 rounded-full bottom-0 left-10 blur-2xl"
            animate={{ y: [0, -18, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7 text-white space-y-6"
            >
              <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold">
                <Clock className="w-4 h-4" />
                PRP Recovery Support
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-[3.2rem] font-bold leading-[1.15]">
                PRP Hair Treatment Recovery: <span className="text-white/80">What to Expect Day by Day</span>
              </h1>
              <div className="text-sm md:text-base text-white/90 space-y-4 leading-relaxed">
                <p>
                  Booking a PRP session is the easy part. What most people actually worry about afterward is recovery — how much downtime to plan for, whether it&apos;s safe to wash their hair the next morning, and when it&apos;s okay to hit the gym again. If you&apos;ve searched &quot;PRP hair treatment recovery,&quot; you&apos;re probably trying to plan around it rather than just wondering out of curiosity, and that&apos;s a smart way to approach any treatment.
                </p>
                <p>
                  The good news is that PRP (Platelet Rich Plasma) recovery is generally mild compared to more invasive hair restoration procedures. Still, recovery isn&apos;t identical for everyone — your scalp sensitivity, how your body responds to the injections, and how closely you follow aftercare instructions all play a role in how smooth those first few days feel.
                </p>
                <p>
                  At RamaCare Polyclinic in Dubai, we walk every patient through exactly what to expect before they leave the clinic, because knowing what&apos;s normal (and what isn&apos;t) makes the whole recovery process far less stressful. Whether you&apos;re already booked in or still exploring <Link href="/services/hair-loss-dubai/" className="text-white underline font-semibold">hair loss treatment in Dubai</Link> options, this guide covers the full PRP hair treatment recovery timeline — from the first 24 hours through the months that follow — along with aftercare instructions, common mistakes to avoid, and honest answers to the questions patients ask us most.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a
                  href="#book-now"
                  className="inline-flex items-center justify-center gap-2 bg-white text-[#1F5E4B] px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <Calendar className="w-5 h-5" />
                  Book Consultation
                </a>
                <a
                  href="https://wa.me/971566597878?text=Hello%20RamaCare%20Polyclinic%2C%20I%20would%20like%20to%20ask%20about%20PRP%20Hair%20Treatment%20Recovery%20and%20book%20a%20consultation."
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/15">
                <img
                  src="/images/hair-consultation-ramacare-prp.jpg"
                  alt="PRP hair restoration recovery consultation at RamaCare Dubai"
                  className="w-full h-[320px] sm:h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F5E4B]/20 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============ STICKY SECTION NAV ============ */}
      <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1 overflow-x-auto no-scrollbar py-3">
            {navItems.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                  activeSection === s.id
                    ? 'bg-[#1F5E4B] text-white'
                    : 'text-[#5F5F5F] hover:bg-[#1F5E4B]/10 hover:text-[#1F5E4B]'
                }`}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ============ WHAT HAPPENS AFTER PRP HAIR TREATMENT ============ */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-5"
          >
            <div className="inline-flex items-center gap-2 bg-[#1F5E4B]/10 text-[#1F5E4B] px-4 py-2 rounded-full text-sm font-semibold">
              <Info className="w-4 h-4" />
              Initial Stage
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A]">What Happens After PRP Hair Treatment?</h2>
            <p className="text-lg text-[#5F5F5F] leading-relaxed">
              Right after your session, your scalp will likely feel tight, tender, or mildly swollen — similar to how skin reacts after a series of small injections, because that&apos;s essentially what&apos;s happened. The concentrated platelets are now sitting in the treated areas of your scalp, and your body starts responding to those growth factors almost immediately at a cellular level, even though nothing is visible yet.
            </p>
            <p className="text-lg text-[#5F5F5F] leading-relaxed">
              Most patients are able to leave the clinic and go about a fairly normal day, which is one of the reasons <Link href="/services/hair-prp-dubai/" className="text-[#1F5E4B] underline font-semibold">Hair PRP Treatment in Dubai</Link> is popular compared to more invasive hair restoration options. That said, &quot;normal day&quot; doesn&apos;t mean zero precautions — a short list of aftercare steps in the first 24 hours makes a real difference to comfort and outcomes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
              <img
                src="/images/Centrifuged platelet rich plasma prepared.jpg"
                alt="Centrifuged platelet rich plasma prepared for scalp injections"
                className="w-full h-[280px] sm:h-[350px] object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============ PRP HAIR TREATMENT RECOVERY TIMELINE ============ */}
      <section className="py-20 px-4 bg-[#F9F7F2]" id="timeline">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
            <div className="inline-flex items-center gap-2 bg-[#1F5E4B]/10 text-[#1F5E4B] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Clock className="w-4 h-4" />
              Timeline
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">PRP Hair Treatment Recovery Timeline</h2>
            <p className="text-lg text-[#5F5F5F] max-w-3xl">
              Most of the visible recovery — redness, tenderness, minor swelling — resolves within 3 to 5 days. Full biological recovery, where follicles are actively responding, continues quietly for months afterward.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {recoveryTimeline.map((stage, i) => (
              <motion.div
                key={stage.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block text-xs font-bold text-[#1F5E4B] uppercase tracking-wide mb-2">{stage.tag}</span>
                  <h3 className="text-base font-bold text-[#1A1A1A] mb-2">{stage.title}</h3>
                  <p className="text-sm text-[#5F5F5F] leading-relaxed">{stage.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ STAGE BY STAGE DETAILS WITH TABS ============ */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">Recovery Stages In Detail</h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {[
              { key: '24h', label: 'First 24 Hours' },
              { key: 'week', label: 'First Week' },
              { key: 'month', label: 'First Month' },
              { key: 'longterm', label: 'Long-Term Recovery' },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-5 py-3 rounded-xl font-bold transition-all text-sm md:text-base ${
                  activeTab === tab.key ? 'bg-[#1F5E4B] text-white shadow-lg' : 'bg-[#F9F7F2] text-[#5F5F5F] border border-gray-200 hover:border-[#1F5E4B]/30'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="bg-[#F9F7F2] rounded-2xl p-6 md:p-8 border border-gray-200 text-sm md:text-base text-[#5F5F5F] space-y-4 leading-relaxed"
            >
              {activeTab === '24h' && (
                <div>
                  <h4 className="text-lg font-bold text-[#1A1A1A] mb-3">Recovery During the First 24 Hours</h4>
                  <p className="mb-4">The first day is when most of the temporary discomfort happens. It&apos;s common to notice:</p>
                  <ul className="list-disc pl-5 mb-4 space-y-1">
                    {first24HoursList.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  <p>Most of this settles within 24 to 48 hours. We generally advise patients to skip washing their hair, avoid touching or scratching the scalp unnecessarily, and skip strenuous activity on day one.</p>
                </div>
              )}
              {activeTab === 'week' && (
                <div>
                  <h4 className="text-lg font-bold text-[#1A1A1A] mb-3">Recovery During the First Week</h4>
                  <p>By day 3 or 4, most patients notice the redness and tenderness fading significantly. Some mild itchiness can appear as the micro-injection sites heal — this is a normal part of the PRP hair treatment healing process and not a sign of infection on its own (though persistent, worsening symptoms are worth flagging to your clinician).</p>
                  <p className="mt-3">By the end of week one, the scalp typically looks and feels completely normal, and most patients have resumed their full daily routine, including normal hair washing and styling.</p>
                </div>
              )}
              {activeTab === 'month' && (
                <div>
                  <h4 className="text-lg font-bold text-[#1A1A1A] mb-3">Recovery During the First Month</h4>
                  <p>Visible scalp symptoms are usually long gone by this point, but this is also when some patients notice a temporary increase in shedding. This can be unsettling if you&apos;re not expecting it, but it often reflects the natural hair growth cycle resetting as follicles respond to treatment, rather than a sign that the treatment isn&apos;t working — if ongoing shedding is a bigger concern for you generally, our <Link href="/services/hair-treatment-dubai/" className="text-[#1F5E4B] underline font-semibold">hair treatment in Dubai</Link> page covers that topic in more depth.</p>
                  <p className="mt-3">This is a good time to keep any follow-up sessions on schedule, since consistency during the first month of your hair PRP sessions tends to support more predictable results later on.</p>
                </div>
              )}
              {activeTab === 'longterm' && (
                <div>
                  <h4 className="text-lg font-bold text-[#1A1A1A] mb-3">Long-Term Recovery and Hair Growth</h4>
                  <p>&quot;Recovery&quot; in the visible, skin-level sense wraps up within about a week. But the biological process — follicles shifting into more active growth phases — continues quietly for months. Most patients begin noticing hair regrowth after PRP around the two-to-three-month mark, with more visible density improvements typically appearing between months four and six.</p>
                  <p className="mt-3">If you want a deeper look at how results build over that longer window, our guide on <Link href="/services/prp-hair-treatment-before-and-after/" className="text-[#1F5E4B] underline font-semibold">PRP Hair Treatment Before and After</Link> walks through the month-by-month pattern in detail.</p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ============ WHAT IS NORMAL AFTER PRP ============ */}
      <section className="py-20 px-4 bg-[#F9F7F2]" id="side-effects">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">What Is Normal After PRP?</h2>
            <p className="text-lg text-[#5F5F5F] max-w-3xl mx-auto">
              Mild tenderness, small red bumps, slight swelling, and minor itchiness in the first few days are all considered normal. Symptoms that are mild, localized to the scalp, and improving day over day are expected.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm space-y-4">
              <h3 className="text-xl font-bold text-[#1A1A1A]">Temporary Side Effects</h3>
              <p className="text-sm text-[#5F5F5F]">Common, short-lived PRP treatment side effects include:</p>
              <ul className="space-y-2">
                {sideEffectsList.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-[#5F5F5F]">
                    <CheckCircle className="w-5 h-5 text-[#1F5E4B] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-[#5F5F5F] leading-relaxed pt-2">
                These typically resolve within a few days without any specific treatment beyond basic comfort measures like avoiding pressure on the scalp.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm space-y-4">
              <h3 className="text-xl font-bold text-[#1A1A1A] text-red-700">Signs You Should Contact Your Doctor</h3>
              <p className="text-sm text-[#5F5F5F]">While complications are uncommon with PRP, contact your clinic if you notice any of the following:</p>
              <ul className="space-y-2">
                {doctorContactSigns.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-[#5F5F5F]">
                    <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-[#5F5F5F] leading-relaxed pt-2">
                Trust your instincts here — it&apos;s always better to check in with a qualified <Link href="/services/best-hair-specialist-dubai/" className="text-[#1F5E4B] underline font-semibold">hair specialist in Dubai</Link> than to wait out something that doesn&apos;t feel right.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ AFTERCARE INSTRUCTIONS ============ */}
      <section className="py-20 px-4 bg-white" id="aftercare">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#1F5E4B]/10 text-[#1F5E4B] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Shield className="w-4 h-4" />
              Aftercare Checklist
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-6">PRP Hair Treatment Aftercare Instructions</h2>
            <ul className="space-y-3.5 mb-6">
              {aftercareList.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm md:text-base text-[#5F5F5F]">
                  <Check className="w-5 h-5 text-[#1F5E4B] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[#5F5F5F] text-sm leading-relaxed">
              Following these hair PRP aftercare instructions closely in the first 48 hours tends to make the rest of recovery noticeably smoother.
            </p>
          </div>

          <div className="bg-[#F9F7F2] p-8 rounded-2xl border border-gray-200 space-y-6">
            <h3 className="text-xl font-bold text-[#1A1A1A]">Activities to Avoid After PRP</h3>
            <p className="text-sm text-[#5F5F5F]">For the first day or two, it&apos;s best to avoid:</p>
            <ul className="space-y-3">
              {avoidList.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-[#5F5F5F]">
                  <X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ============ ACTIVITIES IN DETAIL ============ */}
      <section className="py-20 px-4 bg-[#F9F7F2] border-t border-gray-100">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-3">
            <h4 className="font-bold text-lg text-[#1A1A1A]">Washing Your Hair After PRP</h4>
            <p className="text-sm text-[#5F5F5F] leading-relaxed">
              Most clinics recommend waiting at least 24 hours before washing your hair, and using a gentle, sulfate-free shampoo when you do. Avoid scrubbing the scalp vigorously for the first few days — a light, gentle massage-free wash is enough. Hot water can also aggravate tenderness, so lukewarm water is a better choice early in recovery.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-3">
            <h4 className="font-bold text-lg text-[#1A1A1A]">Exercise After PRP</h4>
            <p className="text-sm text-[#5F5F5F] leading-relaxed">
              Light activity is generally fine the same day, but it&apos;s best to wait 24–48 hours before resuming intense exercise. Sweating heavily can irritate freshly treated injection sites and increase the risk of minor infection if bacteria comes into contact with the scalp. A short walk is usually fine; a heavy gym session is better postponed by a day or two.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-3">
            <h4 className="font-bold text-lg text-[#1A1A1A]">Sun Exposure and Swimming</h4>
            <p className="text-sm text-[#5F5F5F] leading-relaxed">
              Direct sun exposure on an already sensitive scalp can increase irritation, so a hat (worn loosely, without rubbing) or shade is a good idea for the first couple of days. Swimming pools and the ocean should generally be avoided for at least 48 hours, both because of chlorine/salt irritation and because of infection risk at injection sites.
            </p>
          </div>
        </div>
      </section>

      {/* ============ DIET AND NUTRITION ============ */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A]">Diet and Nutrition During Recovery</h2>
            <p className="text-lg text-[#5F5F5F] leading-relaxed">
              While diet alone won&apos;t dramatically change your PRP results, supporting your body with good nutrition is a sensible habit during recovery and beyond:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {nutritionList.map((item, i) => (
                <div key={i} className="border border-gray-150 p-4 rounded-xl shadow-sm bg-gray-50/50">
                  <h4 className="font-bold text-[#1F5E4B] text-sm mb-1">{item.title}</h4>
                  <p className="text-xs text-[#5F5F5F] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-[#5F5F5F] leading-relaxed">
              Some patients ask about supplements like biotin, zinc, or vitamin D. These may support general hair health, but they aren&apos;t a substitute for addressing an underlying cause of hair loss, and megadosing isn&apos;t recommended. It&apos;s worth discussing any supplement plan with your clinician during your hair PRP consultation, especially if you&apos;re taking other medications. If you&apos;re also weighing budget alongside your recovery plan, our <Link href="/services/hair-prp-cost-dubai/" className="text-[#1F5E4B] underline font-semibold">PRP Hair Treatment Cost in Dubai</Link> page breaks down what typically factors into pricing.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#1A1A1A]">Factors That Affect Recovery</h3>
            <p className="text-sm text-[#5F5F5F] leading-relaxed">Recovery experience varies from patient to patient based on:</p>
            <div className="space-y-3">
              {recoveryFactors.map((item, i) => (
                <div key={i} className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#1F5E4B]/10 text-[#1F5E4B] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">{i+1}</span>
                  <div>
                    <h5 className="font-bold text-[#1A1A1A] text-sm">{item.title}</h5>
                    <p className="text-xs text-[#5F5F5F] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ REGROWTH NOTE ============ */}
      <section className="py-16 px-4 bg-[#F9F7F2] border-y border-gray-150">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h3 className="text-2xl font-bold text-[#1A1A1A]">When Will New Hair Growth Be Visible?</h3>
          <p className="text-lg text-[#5F5F5F] leading-relaxed">
            Most patients start noticing early regrowth around 2–3 months post-treatment, with more visible density improvements by months 4–6.
          </p>
          <p className="text-sm text-[#5F5F5F] leading-relaxed italic max-w-2xl mx-auto">
            It&apos;s important to separate &quot;recovery&quot; (the healing of the scalp itself, done within about a week) from &quot;results&quot; (the biological hair growth process, which takes months). Expecting visible hair growth within the recovery window itself is one of the most common sources of disappointment — not because PRP isn&apos;t working, but because expectations were set around the wrong timeframe.
          </p>
        </div>
      </section>

      {/* ============ TIPS FOR BETTER RESULTS & MISTAKES ============ */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="bg-[#1F5E4B]/5 border border-[#1F5E4B]/15 p-8 rounded-2xl space-y-6 shadow-sm">
            <h3 className="text-2xl font-bold text-[#1F5E4B] flex items-center gap-2">
              <CheckCircle className="w-6 h-6" /> Recovery Tips for Better Results
            </h3>
            <ul className="space-y-3.5">
              {recoveryTips.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[#5F5F5F] leading-relaxed">
                  <Check className="w-5 h-5 text-[#1F5E4B] shrink-0 mt-0.5" />
                  <span>{item.desc}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-[#5F5F5F] border-t border-gray-200 pt-3">
              Ask about complementary options like <Link href="/services/hair-regrowth-treatment-dubai/" className="text-[#1F5E4B] underline font-semibold">hair regrowth treatment in Dubai</Link> or <Link href="/services/mesotherapy-dubai/" className="text-[#1F5E4B] underline font-semibold">hair mesotherapy in Dubai</Link> if you&apos;re looking to support your PRP results further.
            </p>
          </div>

          <div className="bg-red-50/30 border border-red-100 p-8 rounded-2xl space-y-6 shadow-sm">
            <h3 className="text-2xl font-bold text-red-800 flex items-center gap-2">
              <AlertCircle className="w-6 h-6" /> Common Recovery Mistakes
            </h3>
            <ul className="space-y-3.5">
              {recoveryMistakes.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[#5F5F5F] leading-relaxed">
                  <X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ============ COMPARISON TABLE — PRP vs Transplant Recovery ============ */}
      <section className="py-20 px-4 bg-[#F9F7F2]" id="compare">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">PRP Recovery vs Hair Transplant Recovery</h2>
            <p className="text-lg text-[#5F5F5F] max-w-2xl mx-auto">
              If you&apos;re weighing these two paths, our team can walk you through both during a consultation, including how each fits your lifestyle and recovery tolerance.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-2xl border border-gray-200 overflow-x-auto shadow-sm">
            <table className="w-full min-w-[500px]">
              <thead>
                <tr className="bg-[#1F5E4B] text-white">
                  <th className="text-left px-6 py-4 font-semibold text-sm">&nbsp;</th>
                  {prpVsTransplantRecovery.headers.map((h, i) => (
                    <th key={i} className="text-left px-6 py-4 font-semibold text-sm">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {prpVsTransplantRecovery.rows.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F9F7F2]'}>
                    <td className="px-6 py-4 font-bold text-[#1A1A1A] text-sm">{row.label}</td>
                    {row.values.map((v, j) => (
                      <td key={j} className="px-6 py-4 text-[#5F5F5F] text-sm leading-relaxed">
                        {v}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* ============ WHY CHOOSE RAMACARE ============ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-6">
              Why Patients Choose RamaCare Polyclinic for PRP Recovery Support
            </motion.h3>
            <div className="space-y-4">
              {whyChooseRecovery.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="p-5 border border-gray-150 rounded-2xl shadow-sm bg-[#F9F7F2]/40 hover:border-[#1F5E4B]/20 transition-all"
                >
                  <h4 className="font-bold text-[#1A1A1A] mb-1">{item.title}</h4>
                  <p className="text-sm text-[#5F5F5F] leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5 rounded-2xl overflow-hidden shadow-xl border border-gray-100">
            <img
              src="/images/Medical professional examining scalp.jpg"
              alt="Medical professional examining scalp during hair restoration recovery"
              className="w-full h-[340px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* ============ FAQ ACCORDION ============ */}
      <section className="py-20 px-4 bg-[#F9F7F2]" id="faqs">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">Frequently Asked Questions</h2>
          </motion.div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: Math.min(index * 0.03, 0.4) }}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-7 py-5 text-left flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
                >
                  <span className="font-bold text-[#1A1A1A] text-sm md:text-base">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-[#1F5E4B] flex-shrink-0 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="px-7 pb-5 text-[#5F5F5F] leading-relaxed text-sm md:text-base border-t border-gray-100 pt-3 bg-gray-50/50">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#1F5E4B] to-[#2A7D63]" id="book-now">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">Ready to Plan Your PRP Recovery?</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              If you&apos;d like personalized advice on what to expect — before, during, and after treatment — the next step is a one-on-one consultation with our team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <a
                href="https://wa.me/971566597878?text=Hello%20RamaCare%20Polyclinic%2C%20I%20would%20like%20to%20ask%20about%20PRP%20Hair%20Treatment%20Recovery%20and%20book%20a%20consultation."
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#1F5E4B] px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <MessageCircle className="w-5 h-5" />
                Book Appointment
              </a>
              <a
                href="/contact-us"
                className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all"
              >
                <Phone className="w-5 h-5" />
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============ CONCLUSION ============ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-8 text-left">
            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">Conclusion</h2>
            <p className="text-sm md:text-base text-[#5F5F5F] leading-relaxed">
              Understanding PRP hair treatment recovery in advance takes a lot of the guesswork — and worry — out of the process. Most of the visible recovery wraps up within about a week, while the deeper biological response that drives actual hair growth unfolds gradually over several months. Following your aftercare instructions closely in those first 48 hours, staying consistent with your session schedule, and giving your scalp realistic time to respond all make a genuine difference in how smoothly your PRP hair treatment recovery goes. If you still have questions specific to your situation, a personal consultation is always the most reliable way to get a clear answer.
            </p>
          </div>
          <div className="md:col-span-4 rounded-xl overflow-hidden shadow-lg border border-gray-100">
            <img
              src="/images/patient-results-hair-loss-treatment1.jpg"
              alt="Satisfied patient showing hair density results"
              className="w-full h-[220px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* ============ RELATED GUIDES ============ */}
      <section className="py-16 px-4 bg-[#F9F7F2]">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl font-bold text-[#1A1A1A] mb-8">Related Hair Treatment Guides</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {relatedGuides.map((g, i) => (
              <Link
                key={i}
                href={g.href}
                className="group bg-white rounded-2xl border border-gray-200 p-6 hover:border-[#1F5E4B]/30 hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <h4 className="font-bold text-[#1A1A1A] mb-2 group-hover:text-[#1F5E4B] transition-colors">{g.title}</h4>
                  <p className="text-sm text-[#5F5F5F] leading-relaxed">{g.desc}</p>
                </div>
                <span className="inline-flex items-center gap-1 text-[#1F5E4B] font-semibold text-sm mt-4">
                  Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContentReviewBadge doctorName="Dr. Sahar Zomorrodi" pageSlug="prp-hair-treatment-recovery" />

      {/* ============ MEDICAL DISCLAIMER ============ */}
      <section className="py-12 px-4 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#F9F7F2] p-6 rounded-2xl border border-gray-200">
            <h3 className="text-lg font-bold text-[#1A1A1A] mb-3 flex items-center gap-2">
              <Info className="w-5 h-5 text-[#1F5E4B]" />
              Medical Disclaimer
            </h3>
            <p className="text-[#5F5F5F] leading-relaxed text-sm">
              This content is for informational purposes only and does not replace professional medical advice,
              diagnosis, or treatment. Always consult a qualified healthcare provider regarding any medical
              condition. Individual results vary, and no specific outcome is guaranteed.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
