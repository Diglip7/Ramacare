import React, { useState } from 'react';
import Layout from '../../../components/Layout';
import ContentReviewBadge from '../../../components/ContentReviewBadge';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { useToast } from '../../../components/Toast';
import BookConsultation from '../../../components/BookConsultation';
import { useRouter } from 'next/router';

/* ------------------------------------------------------------------
   Page data — sourced directly from the Physiotherapy vs Rest for
   Back Pain Recovery content brief.
   Signature motif: a "Recovery Trajectory" line chart — physiotherapy
   climbs steadily over time, rest dips briefly then flattens/declines
   — echoing the brief's own infographic concept of a recovery
   timeline arrow between the two approaches.
------------------------------------------------------------------- */
const SITE_URL = 'https://ramacarepolyclinic.ae';
const PAGE_PATH = '/services/physiotherapy-vs-rest-for-back-pain-recovery';

const jumpLinks = [
  { id: 'understanding', label: '2. Understanding Back Pain' },
  { id: 'rest-meaning', label: '3. What Does "Rest" Mean?' },
  { id: 'physio-meaning', label: '4. What Is Physiotherapy?' },
  { id: 'comparison', label: '5. Comparison Table' },
  { id: 'bed-too-long', label: '6. Staying in Bed Too Long' },
  { id: 'rest-helpful', label: '7. When Is Rest Helpful?' },
  { id: 'physio-better', label: '8. When Is Physiotherapy Better?' },
  { id: 'guidelines', label: '9. Clinical Guidelines' },
  { id: 'mistakes', label: '10. Common Mistakes' },
  { id: 'prevent', label: '11. Preventing Future Pain' },
  { id: 'process', label: '12. Treatment Process' },
  { id: 'faq', label: '14. FAQs' },
];

const backPainTypes = [
  { name: 'Acute Back Pain', text: 'Sudden onset, usually lasting days to a few weeks, often triggered by a specific movement or strain.' },
  { name: 'Chronic Back Pain', text: 'Pain persisting beyond 12 weeks, often involving deeper musculoskeletal or postural factors.' },
  { name: 'Muscle Strain', text: 'Overstretched or torn muscle fibres, commonly from lifting, twisting, or sudden movement.' },
  { name: 'Disc Problems', text: 'Including bulging or herniated discs, which can press on nearby nerves.' },
  { name: 'Sciatica', text: 'Nerve-related pain radiating from the lower back down the leg, usually linked to disc or spinal nerve compression.' },
  { name: 'Postural Pain', text: 'From prolonged sitting, poor desk ergonomics, or weak core musculature.' },
  { name: 'Sports Injuries', text: 'Acute strains or overuse injuries from physical activity.' },
  { name: 'Degenerative Conditions', text: 'Age-related wear such as spondylosis or disc degeneration.' },
];

const restConcepts = [
  { icon: 'BedDouble', title: 'Complete Bed Rest', text: 'Lying down for extended periods, avoiding almost all activity. Once widely recommended, now rarely advised for more than a day or two, if at all.' },
  { icon: 'PauseCircle', title: 'Relative Rest', text: 'Reducing specific aggravating activities (heavy lifting, prolonged sitting) while still moving normally through daily life.' },
  { icon: 'Footprints', title: 'Activity Modification', text: 'Adjusting how you move rather than stopping movement altogether, such as changing lifting technique or taking more breaks.' },
];

const physioElements = [
  { icon: 'ClipboardCheck', title: 'Assessment', text: 'Evaluating your posture, movement patterns, muscle strength, and range of motion to identify the actual source of pain.' },
  { icon: 'Dumbbell', title: 'Exercise Therapy', text: 'Targeted exercises to rebuild strength and flexibility around the spine and supporting muscles.' },
  { icon: 'Hand', title: 'Manual Therapy', text: 'Hands-on techniques including mobilisation and soft tissue work to reduce stiffness and improve movement.' },
  { icon: 'AlignCenter', title: 'Posture Correction', text: 'Practical adjustments to sitting, standing, and lifting habits that reduce ongoing strain.' },
  { icon: 'CircleDot', title: 'Core Strengthening', text: 'Building the deep abdominal and back muscles that stabilise the lumbar spine.' },
  { icon: 'Zap', title: 'Electrotherapy', text: 'Modalities such as ultrasound therapy or TENS used to support pain relief alongside active rehabilitation.' },
  { icon: 'TrendingUp', title: 'Functional Rehabilitation', text: 'Progressively reintroducing the movements needed for work, sport, or daily life.' },
];

const comparisonRows = [
  { criteria: 'Speed of Recovery', physio: 'Often faster for most non-serious back pain, especially beyond the first few days', rest: 'Can feel faster in the first 24–48 hours, but recovery frequently slows afterward' },
  { criteria: 'Pain Relief', physio: 'Gradual but sustained, addresses underlying cause', rest: 'Short-term relief only; pain often returns once activity resumes' },
  { criteria: 'Mobility Improvement', physio: 'Actively improves range of motion', rest: 'No improvement; mobility can decline with prolonged inactivity' },
  { criteria: 'Muscle Strength', physio: 'Builds and maintains strength', rest: 'Strength decreases with extended inactivity' },
  { criteria: 'Risk of Recurrence', physio: "Lower, since underlying weakness/posture issues are addressed", rest: "Higher, since root cause typically isn't resolved" },
  { criteria: 'Return to Work', physio: 'Generally faster due to structured, progressive rehabilitation', rest: 'Often delayed, especially with prolonged bed rest' },
  { criteria: 'Long-Term Outcomes', physio: 'Strong evidence for sustained improvement', rest: 'Poor for chronic or recurring pain if used long-term' },
  { criteria: 'Suitability for Acute Pain', physio: 'Beneficial once the first 1–2 days have passed', rest: 'Useful only briefly, immediately after onset' },
  { criteria: 'Suitability for Chronic Pain', physio: 'Well suited; addresses contributing factors', rest: 'Not recommended; inactivity can worsen chronic pain' },
  { criteria: 'Evidence Support', physio: 'Strong support from WHO, NICE, and APTA guidelines', rest: 'Limited support beyond short-term acute flare-ups' },
];

const bedRestRisks = [
  { title: 'Muscle Weakness', text: 'Core and back muscles lose strength quickly with inactivity, removing support the spine needs.' },
  { title: 'Stiffness', text: 'Joints and soft tissue tighten, making movement more uncomfortable when you do return to activity.' },
  { title: 'Reduced Circulation', text: 'Less movement means less blood flow to healing tissue, which can slow recovery.' },
  { title: 'Slower Recovery', text: 'Studies comparing bed rest to early activity for acute low back pain found patients who stayed active recovered function faster.' },
  { title: 'Increased Fear of Movement', text: 'Prolonged rest can reinforce the belief that movement is dangerous — fear-avoidance behaviour — which can prolong disability.' },
  { title: 'Chronic Pain Risk', text: 'Inactivity is one of the recognised risk factors for acute back pain progressing into a chronic condition.' },
];

const restHelpfulWhen = [
  'Severe acute strain — immediately following a significant muscle or ligament injury',
  'Sudden flare-up — a short period of reduced activity can help settle intense acute pain',
  'Fever or systemic symptoms — needs urgent medical evaluation, not self-managed rest',
  'Significant trauma — following a fall, accident, or suspected fracture, rest and immediate medical assessment take priority',
  'Temporary pain reduction — brief rest can take the edge off severe pain before easing back into movement',
];

const physioBetterWhen = [
  'Pain has lasted more than a few days without significant improvement',
  'Back pain is recurrent or has happened multiple times before',
  'Sciatica symptoms are present (leg pain, tingling, or numbness)',
  'A slip disc has been diagnosed or is suspected',
  'Pain appears linked to posture or prolonged sitting',
  'The injury is sports-related',
  "There's noticeable weakness, stiffness, or reduced range of motion",
  'Returning to normal activity feels difficult or is being avoided out of fear of re-injury',
];

const guidelines = [
  { org: 'WHO', text: 'Promotes staying physically active and avoiding prolonged bed rest as part of general musculoskeletal health guidance.' },
  { org: 'NICE', text: 'Recommends encouraging people with low back pain to remain physically active and consider structured exercise programmes, rather than extended rest.' },
  { org: 'APTA', text: 'Supports active rehabilitation, including exercise therapy and manual therapy, as first-line management for most non-specific low back pain.' },
];

const mistakes = [
  'Staying in bed for a week — far longer than the short window where rest actually helps',
  'Avoiding all exercise — out of fear of worsening the pain, which often delays recovery instead',
  'Returning to heavy lifting too early — before the muscles and spine have been properly rehabilitated',
  'Ignoring posture — continuing the same sitting habits or lifting technique that contributed to the pain',
  'Using painkillers without rehabilitation — masking the pain without addressing the underlying weakness',
];

const preventFuturePain = [
  'Core strengthening builds the muscular support the spine relies on day to day',
  'Mobility work keeps the spine and surrounding joints moving through their full range, reducing stiffness-related strain',
  "Ergonomic advice addresses desk setup, posture, and lifting technique — particularly relevant given how much of Dubai's workforce spends long hours seated",
  'Exercise progression gradually rebuilds capacity for the activities and loads you need in daily life or sport',
  'Long-term self-management — patients are typically given a home exercise programme so recovery continues between sessions',
];

const process = [
  { title: 'Initial Consultation', text: 'A discussion of your pain history, how it started, and what makes it better or worse.' },
  { title: 'Physical Assessment', text: 'Hands-on evaluation of movement, strength, and flexibility.' },
  { title: 'Movement Analysis', text: 'Observing how you sit, stand, bend, and lift to identify contributing patterns.' },
  { title: 'Diagnosis', text: "A clear clinical picture of what's driving the pain." },
  { title: 'Personalized Rehabilitation Plan', text: 'Combining exercise therapy, manual therapy, and where appropriate, electrotherapy or ultrasound therapy.' },
  { title: 'Home Exercise Program', text: 'Specific exercises to continue progress between visits.' },
  { title: 'Follow-Up and Progression', text: 'Adjusting the plan as strength, mobility, and pain levels improve.' },
];

const whyChoose = [
  'Experienced physiotherapists trained in modern rehabilitation techniques',
  'Evidence-based treatment plans grounded in current clinical guidelines',
  'Personalized programs tailored to your specific diagnosis and lifestyle',
  'A patient-focused approach that explains the reasoning behind each recommendation',
  'A convenient Dubai location for ongoing sessions and follow-up care',
];

const faqs = [
  { q: 'Is bed rest good for back pain?', a: 'Only briefly. Short-term rest (a day or two) can help with a severe acute flare-up, but prolonged bed rest generally slows recovery and can weaken supporting muscles.' },
  { q: 'How long should I rest before starting physiotherapy?', a: 'Most guidelines suggest no more than 1–2 days of reduced activity before gradually reintroducing movement, followed by physiotherapy if pain persists beyond a few days.' },
  { q: 'When should I start physiotherapy for back pain?', a: 'If pain lasts more than a few days, keeps recurring, or is accompanied by leg pain, numbness, or weakness, a physiotherapy assessment is worth booking promptly.' },
  { q: 'Can exercise worsen back pain?', a: 'Poorly chosen or incorrectly performed exercise can aggravate pain, which is why a professional assessment matters — a physiotherapist tailors movement to your specific condition rather than a generic routine.' },
  { q: 'Is walking helpful for back pain?', a: 'For most non-serious back pain, gentle walking is generally encouraged and can support circulation and mobility without overloading the spine.' },
  { q: 'What if I have a slip disc?', a: 'A slip disc requires proper diagnosis. Many cases respond well to physiotherapy and conservative management, though more severe nerve compression may need further medical evaluation.' },
  { q: 'What if I have sciatica?', a: 'Sciatica often benefits from physiotherapy, including targeted exercise and manual therapy, though a professional assessment is important to confirm the cause before starting treatment.' },
  { q: 'How many physiotherapy sessions are typically needed?', a: 'This varies by condition and severity — your physiotherapist will outline an expected timeline after your initial assessment.' },
  { q: 'Can physiotherapy prevent back pain from recurring?', a: 'Yes, core strengthening, posture correction, and ongoing exercise significantly reduce the likelihood of recurrence for many patients.' },
  { q: 'When should I see a doctor urgently instead of trying rest or physiotherapy?', a: 'Seek urgent medical care if back pain follows significant trauma, or is accompanied by fever, unexplained weight loss, loss of bladder or bowel control, or progressive leg weakness.' },
  { q: 'Is physiotherapy painful?', a: "Physiotherapy is generally designed to work within a manageable pain range; some mild discomfort during exercise is normal, but treatment shouldn't cause sharp or severe pain." },
  { q: 'Can I combine rest and physiotherapy?', a: 'Yes — a short initial rest period followed by physiotherapy-guided movement is a common and reasonable approach for many acute cases.' },
  { q: 'Does chronic back pain respond to physiotherapy?', a: 'Yes, physiotherapy is generally considered a first-line, evidence-supported approach for chronic non-specific low back pain.' },
  { q: 'Is physiotherapy suitable for postural back pain from desk jobs?', a: 'Yes, physiotherapy commonly addresses posture-related pain through ergonomic advice, mobility work, and targeted strengthening.' },
  { q: 'Should I avoid lifting anything while recovering from back pain?', a: "Heavy or improperly performed lifting should generally be avoided until cleared by a physiotherapist, though complete avoidance of all lifting isn't usually necessary or helpful long-term." },
  { q: "What's the difference between acute and chronic back pain treatment?", a: 'Acute back pain often responds to brief rest followed by early movement, while chronic back pain typically needs a longer, structured rehabilitation programme addressing underlying contributing factors.' },
  { q: 'Can sports injuries causing back pain be treated with physiotherapy?', a: 'Yes, sports-related back injuries are commonly managed through physiotherapy, often combined with a structured return-to-activity plan.' },
  { q: 'Will I need imaging (X-ray or MRI) before starting physiotherapy?', a: 'Not always — many cases of back pain are assessed clinically first, with imaging reserved for cases where red-flag symptoms or a specific structural concern are suspected.' },
];

const resourceHub = [
  {
    category: 'Primary Services',
    links: [
      { label: 'Physiotherapy Dubai', href: '/services/physiotherapy-dubai' },
      { label: 'Dry Needling Dubai', href: '/services/dry-needling-dubai' },
      { label: 'Electrotherapy Dubai', href: '/services/electrotherapy-dubai' },
      { label: 'Ultrasound Therapy Dubai', href: '/services/ultrasound-therapy-dubai' },
      { label: 'Sports Injury Rehabilitation Dubai', href: '/services/sports-injury-rehabilitation-dubai' },
      { label: 'Post-Surgery Rehabilitation Dubai', href: '/services/post-surgery-rehabilitation-dubai' },
    ],
  },
  {
    category: 'Condition Pages',
    links: [
      { label: 'Back Pain Treatment Dubai', href: '/services/back-pain-treatment-dubai' },
      { label: 'Neck Pain Treatment Dubai', href: '/services/neck-pain-treatment-dubai' },
      { label: 'Shoulder Pain Treatment Dubai', href: '/services/shoulder-pain-treatment-dubai' },
      { label: 'Knee Pain Treatment Dubai', href: '/services/knee-pain-treatment-dubai' },
      { label: 'Sciatica Treatment Dubai', href: '/services/sciatica-treatment-dubai' },
      { label: 'Slip Disc Treatment Dubai', href: '/services/slip-disc-treatment-dubai' },
      { label: 'Cervical Spondylosis Treatment Dubai', href: '/services/cervical-spondylosis-treatment-dubai' },
      { label: 'Joint Pain Treatment Dubai', href: '/services/joint-pain-treatment-dubai' },
      { label: 'Arthritis Treatment Dubai', href: '/services/arthritis-treatment-dubai' },
      { label: 'Frozen Shoulder Treatment Dubai', href: '/services/frozen-shoulder-treatment-dubai' },
    ],
  },
  {
    category: 'Related Comparisons',
    links: [
      { label: 'Dry Needling vs Massage Therapy Dubai', href: '/services/dry-needling-vs-massage-therapy-dubai' },
      { label: 'Ayurveda vs Physiotherapy for Back Pain Dubai', href: '/services/ayurveda-vs-physiotherapy-for-back-pain-dubai' },
    ],
  },
  {
    category: 'Guides',
    links: [
      { label: 'Back Pain Exercises Guide', href: '/blog/back-pain-exercises-guide' },
      { label: 'Sciatica Recovery Guide', href: '/blog/sciatica-recovery-guide' },
      { label: 'Posture Correction Tips', href: '/blog/posture-correction-tips' },
      { label: 'Desk Job Back Pain Prevention', href: '/blog/desk-job-back-pain-prevention' },
      { label: 'Stretching Exercises for Lower Back Pain', href: '/blog/stretching-exercises-lower-back-pain' },
    ],
  },
  {
    category: 'Get in Touch',
    links: [
      { label: 'Contact Page', href: '/contact-us' },
      { label: 'Book Appointment', href: '/book-appointment' },
      { label: 'Physiotherapist Profiles', href: '/doctors' },
    ],
  },
];

/* ------------------------------------------------------------------
   JSON-LD schema — Physician schema intentionally omitted per the
   brief's own note ("added per named practitioner profile once
   assigned to this page").
------------------------------------------------------------------- */
function buildSchema() {
  const medicalWebPage = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    url: SITE_URL + PAGE_PATH,
    name: 'Physiotherapy vs Rest for Back Pain Recovery | RamaCare',
    description: 'Physiotherapy vs Rest for Back Pain Recovery: discover when exercise helps, when rest is useful, and when to see a physiotherapist in Dubai.',
    inLanguage: 'en-AE',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
  };

  const medicalCondition = {
    '@context': 'https://schema.org',
    '@type': 'MedicalCondition',
    name: 'Back Pain',
    possibleTreatment: [
      { '@type': 'MedicalTherapy', name: 'Physiotherapy' },
      { '@type': 'MedicalTherapy', name: 'Rest' },
    ],
    signOrSymptom: ['Lower back pain', 'Sciatica', 'Muscle stiffness', 'Reduced mobility'],
  };

  const medicalTherapy = {
    '@context': 'https://schema.org',
    '@type': 'MedicalTherapy',
    name: 'Physiotherapy',
    relevantSpecialty: 'Physiotherapy',
  };

  const medicalClinic = {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    name: 'RamaCare Polyclinic',
    url: SITE_URL + '/',
    address: { '@type': 'PostalAddress', streetAddress: 'Jumeirah 1', addressLocality: 'Dubai', addressCountry: 'AE' },
    medicalSpecialty: 'Physiotherapy',
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL + '/' },
      { '@type': 'ListItem', position: 2, name: 'Physiotherapy Dubai', item: SITE_URL + '/services/physiotherapy-dubai' },
      { '@type': 'ListItem', position: 3, name: 'Physiotherapy vs Rest for Back Pain Recovery', item: SITE_URL + PAGE_PATH },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return [medicalWebPage, medicalCondition, medicalTherapy, medicalClinic, breadcrumb, faqSchema];
}

/* ------------------------------------------------------------------
   Recovery Trajectory chart — the page's signature visual
------------------------------------------------------------------- */
function RecoveryChart() {
  return (
    <div className="rounded-2xl border border-[#E9E2D6] bg-white p-6">
      <svg viewBox="0 0 400 160" className="w-full h-auto" preserveAspectRatio="xMidYMid meet">
        {/* axis */}
        <line x1="30" y1="130" x2="380" y2="130" stroke="#E9E2D6" strokeWidth="1.5" />
        <line x1="30" y1="20" x2="30" y2="130" stroke="#E9E2D6" strokeWidth="1.5" />
        {/* physiotherapy line — steady climb */}
        <path d="M30,110 C90,95 150,60 230,45 C290,34 330,26 380,20" fill="none" stroke="#1F5E4B" strokeWidth="3" strokeLinecap="round" />
        {/* rest line — brief dip relief then flat/decline */}
        <path d="M30,110 C60,85 90,80 140,90 C200,102 280,112 380,118" fill="none" stroke="#C9B78E" strokeWidth="3" strokeLinecap="round" strokeDasharray="1 7" />
        {/* end dots */}
        <circle cx="380" cy="20" r="4" fill="#1F5E4B" />
        <circle cx="380" cy="118" r="4" fill="#C9B78E" />
      </svg>
      <div className="flex justify-between text-[10px] text-[#5F5F5F] px-1 -mt-2">
        <span>Day 0</span>
        <span>Day 1–2</span>
        <span>Day 3–7</span>
        <span>Week 2+</span>
      </div>
      <div className="flex items-center justify-center gap-6 mt-4">
        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#1A1A1A]">
          <span className="w-3 h-0.5 bg-[#1F5E4B] rounded-full" /> Physiotherapy
        </span>
        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#1A1A1A]">
          <span className="w-3 h-0.5 bg-[#C9B78E] rounded-full" /> Rest Only
        </span>
      </div>
    </div>
  );
}

export default function PhysiotherapyVsRestPage() {
  const { showToast, ToastComponent } = useToast();
  const [openFaq, setOpenFaq] = useState(null);
  const [openCategory, setOpenCategory] = useState(null);
  const router = useRouter();

  const handleWhatsAppClick = (context = 'a back pain assessment') => {
    const message = encodeURIComponent(`Hello RamaCare, I'd like to book ${context} at RamaCare Polyclinic.`);
    window.open(`https://wa.me/971566597878?text=${message}`, '_blank');
  };
  const handleBookAppointment = () => router.push('/book-appointment');

  const schemaBlocks = buildSchema();

  return (
    <Layout>
      {ToastComponent}
      <Head>
        <title key="title">Physiotherapy vs Rest for Back Pain Recovery | RamaCare</title>
        <meta
          name="description"
          content="Physiotherapy vs Rest for Back Pain Recovery: discover when exercise helps, when rest is useful, and when to see a physiotherapist in Dubai."
          key="description"
        />
        <link rel="canonical" href={SITE_URL + PAGE_PATH} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Physiotherapy vs Rest for Back Pain Recovery | RamaCare" />
        <meta
          property="og:description"
          content="Physiotherapy vs Rest for Back Pain Recovery: discover when exercise helps, when rest is useful, and when to see a physiotherapist in Dubai."
        />
        <meta property="og:url" content={SITE_URL + PAGE_PATH} />
        <meta property="og:image" content={SITE_URL + '/images/physiotherapy-vs-rest-back-pain-recovery-infographic.jpg'} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Physiotherapy vs Rest for Back Pain Recovery | RamaCare" />
        <meta
          name="twitter:description"
          content="Physiotherapy vs Rest for Back Pain Recovery: discover when exercise helps, when rest is useful, and when to see a physiotherapist in Dubai."
        />
        {schemaBlocks.map((block, i) => (
          <script key={`schema-${i}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }} />
        ))}
      </Head>

      {/* ============ HERO — chart-led ============ */}
      <section className="max-w-6xl mx-auto px-6 pt-10 pb-16">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-sm font-medium text-[#5F5F5F]">
          <Link href="/" className="hover:text-[#1F5E4B]">Home</Link>
          <span aria-hidden="true">/</span>
          <Link href="/services/physiotherapy-dubai" className="hover:text-[#1F5E4B]">Physiotherapy Dubai</Link>
          <span aria-hidden="true">/</span>
          <span className="text-[#1F5E4B]">Physiotherapy vs Rest for Back Pain Recovery</span>
        </nav>
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-semibold text-[#1A1A1A] leading-[1.2] mb-6">
              Physiotherapy vs Rest for Back Pain Recovery
            </h1>
            <p className="text-lg leading-relaxed text-[#5F5F5F] mb-4">
              Back pain is one of the most common reasons people visit a doctor or physiotherapist, and it&apos;s also one of the most confusing conditions to manage on your own. When it strikes, the instinct for most people is to lie down, cancel plans, and wait it out. But is that actually the right call?
            </p>
            <p className="text-base leading-relaxed text-[#5F5F5F] mb-8">
              A generation ago, doctors often recommended extended bed rest for back pain. Today, most clinical guidelines lean the other way — toward staying as active as safely possible and starting rehabilitation early. Neither position is universally correct — the right answer depends on what&apos;s actually causing your pain, how severe it is, and how long it&apos;s been going on.
            </p>
            <button onClick={() => handleWhatsAppClick('a back pain assessment')} className="inline-flex items-center gap-2 rounded-md bg-[#1F5E4B] px-6 py-3 text-base font-medium text-white hover:bg-[#17493A] transition-colors">
              <LucideIcons.Calendar className="w-4 h-4" /> Book a Back Pain Assessment
            </button>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
            <RecoveryChart />
          </motion.div>
        </div>
      </section>

      {/* ============ Why this comparison matters ============ */}
      <section className="bg-[#F5F1EA] py-14 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] mb-4">Why This Comparison Matters</h2>
          <p className="text-base text-[#5F5F5F] leading-relaxed mb-4">
            Back pain is one of the leading causes of missed work and reduced quality of life worldwide, and Dubai&apos;s largely desk-based, commute-heavy work culture makes lower back and lumbar strain especially common. For decades, the default advice was simple: rest until the pain passes. That belief is now outdated for most cases.
          </p>
          <p className="text-base text-[#5F5F5F] leading-relaxed">
            Current evidence increasingly supports early, guided movement and rehabilitation over prolonged inactivity for most non-serious back pain. But &quot;most cases&quot; isn&apos;t &quot;all cases&quot; — some genuine flare-ups do call for a short period of rest before movement resumes. The goal of this comparison isn&apos;t to tell you rest is wrong or physiotherapy is always right; it&apos;s to help you understand which approach fits your specific situation.
          </p>
        </div>
      </section>

      {/* ============ Jump links (non-sticky) ============ */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#1F5E4B] mb-4">Jump To a Section</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2">
          {jumpLinks.map((j) => (
            <a key={j.id} href={`#${j.id}`} className="text-base text-[#5F5F5F] hover:text-[#1F5E4B] hover:underline">{j.label}</a>
          ))}
        </div>
      </section>

      {/* ============ Understanding back pain ============ */}
      <section id="understanding" className="scroll-mt-16 bg-[#F0F7F4] py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] mb-3">Understanding Back Pain</h2>
          <p className="text-base text-[#5F5F5F] leading-relaxed mb-10 max-w-3xl">
            Back pain isn&apos;t one single condition — it covers a wide range of causes, each of which responds differently to rest or rehabilitation. Knowing which of these is behind your pain changes the entire conversation.
          </p>
          <div className="grid sm:grid-cols-2 gap-8 items-start">
            <div className="grid sm:grid-cols-1 gap-4">
              {backPainTypes.map((t) => (
                <div key={t.name} className="bg-white rounded-lg px-5 py-4">
                  <p className="text-base font-semibold text-[#1A1A1A]">{t.name}</p>
                  <p className="text-base text-[#5F5F5F] leading-relaxed mt-1">{t.text}</p>
                </div>
              ))}
            </div>
            <div className="relative rounded-2xl overflow-hidden lg:sticky lg:top-24 h-[350px] sm:h-[500px] lg:h-[650px] w-full">
              <Image
                src="/images/spine-anatomy-illustration-lower-back-pain.jpg"
                alt="Spine anatomy illustration showing lumbar region and nerve pathways"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============ What does rest mean ============ */}
      <section id="rest-meaning" className="scroll-mt-16 max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] mb-3">What Does &quot;Rest&quot; Mean for Back Pain?</h2>
        <p className="text-base text-[#5F5F5F] leading-relaxed mb-10 max-w-3xl">
          Rest isn&apos;t a single, well-defined concept, and part of the confusion around back pain recovery comes from conflating very different things under one word.
        </p>
        <div className="grid lg:grid-cols-[1fr_0.9fr] gap-10 items-start">
          <div className="grid sm:grid-cols-3 gap-4">
            {restConcepts.map((r, i) => (
              <div key={r.title} className="rounded-xl p-5" style={{ opacity: 1 - i * 0.12, background: i === 0 ? '#EDE6D6' : i === 1 ? '#F0F7F4' : '#E5F0EA' }}>
                <LucideIcons.Circle className="hidden" />
                {React.createElement(LucideIcons[r.icon] || LucideIcons.Circle, { className: 'w-5 h-5 text-[#1F5E4B] mb-3' })}
                <p className="text-base font-semibold text-[#1A1A1A]">{r.title}</p>
                <p className="text-base text-[#5F5F5F] leading-relaxed mt-1.5">{r.text}</p>
              </div>
            ))}
          </div>
          <div className="relative rounded-2xl overflow-hidden h-[300px] sm:h-[350px] lg:h-full lg:min-h-[380px] w-full lg:self-stretch">
            <Image
              src="/images/person-resting-lower-back-pain.jpg"
              alt="Person resting with lower back pain at home"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 mt-8">
          <div className="rounded-xl border-l-4 border-[#1F5E4B] bg-[#F0F7F4] px-5 py-4">
            <p className="text-base font-semibold text-[#1A1A1A] mb-1.5">When Short-Term Rest May Help</p>
            <p className="text-base text-[#5F5F5F] leading-relaxed">
              A brief period — generally no more than 1–2 days — of reduced activity can help calm a severe acute flare-up, particularly right after an injury, before gradually reintroducing movement.
            </p>
          </div>
          <div className="rounded-xl border-l-4 border-amber-400 bg-amber-50 px-5 py-4">
            <p className="text-base font-semibold text-[#1A1A1A] mb-1.5">Risks of Prolonged Inactivity</p>
            <p className="text-base text-amber-900 leading-relaxed">
              Extending rest beyond this short window tends to work against recovery. Muscles weaken, joints stiffen, and fear-avoidance can build, making the eventual return to activity harder rather than easier.
            </p>
          </div>
        </div>
      </section>

      {/* ============ What is physiotherapy ============ */}
      <section id="physio-meaning" className="scroll-mt-16 bg-[#F5F1EA] py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] mb-3">What Is Physiotherapy for Back Pain?</h2>
          <p className="text-base text-[#5F5F5F] leading-relaxed mb-8 max-w-3xl">
            Physiotherapy is a structured, evidence-based rehabilitation approach built around restoring movement, strength, and function — not just easing pain temporarily. Unlike rest, which is passive, physiotherapy is an active process — which is precisely why it tends to produce more durable results for most non-emergency back pain.
          </p>
          <div className="grid lg:grid-cols-[1fr_0.9fr] gap-10 items-start">
            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-4">
              {physioElements.map((e) => (
                <div key={e.title} className="flex gap-3">
                  {React.createElement(LucideIcons[e.icon] || LucideIcons.Circle, { className: 'w-4 h-4 text-[#1F5E4B] shrink-0 mt-0.5' })}
                  <div>
                    <p className="text-base font-semibold text-[#1A1A1A]">{e.title}</p>
                    <p className="text-base text-[#5F5F5F] leading-relaxed">{e.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative rounded-2xl overflow-hidden h-[320px] sm:h-[400px] lg:h-full lg:min-h-[480px] w-full lg:self-stretch">
              <Image
                src="/images/physiotherapist-guiding-back-pain-exercises-dubai.jpg"
                alt="Physiotherapist guiding back pain exercises in Dubai clinic"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============ Comparison table ============ */}
      <section id="comparison" className="scroll-mt-16 max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] text-center mb-2">Physiotherapy vs Rest for Back Pain Recovery — Comparison Table</h2>
        <p className="text-base text-[#5F5F5F] leading-relaxed text-center mb-10 max-w-2xl mx-auto">
          Here&apos;s how Physiotherapy vs Rest for Back Pain Recovery compares across the criteria that matter most for actual recovery.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-base min-w-[640px]">
            <thead>
              <tr className="border-b-2 border-[#1A1A1A]">
                <th className="text-left px-4 py-3 font-medium text-[#5F5F5F]">Criteria</th>
                <th className="text-left px-4 py-3 font-medium text-[#1A1A1A]">
                  <span className="inline-flex items-center gap-1.5"><LucideIcons.Activity className="w-4 h-4 text-[#1F5E4B]" /> Physiotherapy</span>
                </th>
                <th className="text-left px-4 py-3 font-medium text-[#1A1A1A]">
                  <span className="inline-flex items-center gap-1.5"><LucideIcons.BedDouble className="w-4 h-4 text-[#8a7856]" /> Rest</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.criteria} className="border-b border-gray-100">
                  <td className="px-4 py-3.5 font-medium text-[#1A1A1A] align-top">{row.criteria}</td>
                  <td className="px-4 py-3.5 text-[#5F5F5F] align-top">{row.physio}</td>
                  <td className="px-4 py-3.5 text-[#5F5F5F] align-top">{row.rest}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-base text-[#5F5F5F] leading-relaxed mt-8 text-center max-w-2xl mx-auto">
          In short: rest has a real but narrow role, mainly in the first day or two after a severe flare-up. Physiotherapy is the stronger option for almost everything that follows — including recovery from more serious causes such as sciatica or a slip disc, once red flags have been ruled out.
        </p>
        <div className="relative rounded-2xl overflow-hidden mt-8 bg-white border border-[#E9E2D6] h-[300px] sm:h-[450px] lg:h-[600px] w-full">
          <Image
            src="/images/physiotherapy-vs-rest-back-pain-recovery-infographic.jpg"
            alt="Physiotherapy vs Rest for Back Pain Recovery comparison infographic"
            fill
            sizes="(max-width: 1024px) 100vw, 80vw"
            className="object-contain"
          />
        </div>
      </section>

      {/* ============ Staying in bed too long — warning list ============ */}
      <section id="bed-too-long" className="scroll-mt-16 bg-amber-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] mb-2">What Happens if You Stay in Bed Too Long?</h2>
          <p className="text-base text-[#5F5F5F] leading-relaxed mb-8">
            Extended bed rest tends to backfire for most types of back pain, and the reasons are well documented:
          </p>
          <div className="space-y-3">
            {bedRestRisks.map((r) => (
              <div key={r.title} className="flex gap-3 border-l-4 border-amber-400 bg-white rounded-r-lg px-5 py-3.5">
                <LucideIcons.AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <p className="text-base font-semibold text-[#1A1A1A]">{r.title}</p>
                  <p className="text-base text-[#5F5F5F] leading-relaxed mt-0.5">{r.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ Rest helpful / physio better — decision cards ============ */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div id="rest-helpful" className="scroll-mt-16 grid lg:grid-cols-2 gap-6">
          <div className="rounded-2xl bg-[#F5F1EA] p-6">
            <div className="flex items-center gap-2.5 mb-4">
              <LucideIcons.PauseCircle className="w-5 h-5 text-[#8a7856]" />
              <h2 className="text-lg font-semibold text-[#1A1A1A]">When Is Rest Helpful?</h2>
            </div>
            <ul className="space-y-2.5">
              {restHelpfulWhen.map((r) => (
                <li key={r} className="flex gap-2.5 text-base text-[#1A1A1A]/85 leading-relaxed">
                  <LucideIcons.Check className="w-4 h-4 text-[#8a7856] shrink-0 mt-0.5" /> {r}
                </li>
              ))}
            </ul>
            <p className="text-base text-[#5F5F5F] leading-relaxed mt-4 italic">
              The key word throughout is short-term — generally no more than a day or two before gradually reintroducing movement.
            </p>
          </div>
          <div id="physio-better" className="scroll-mt-16 rounded-2xl bg-[#1F5E4B] text-white p-6">
            <div className="flex items-center gap-2.5 mb-4">
              <LucideIcons.Activity className="w-5 h-5 text-white/80" />
              <h2 className="text-lg font-semibold">When Is Physiotherapy Better?</h2>
            </div>
            <ul className="space-y-2.5">
              {physioBetterWhen.map((p) => (
                <li key={p} className="flex gap-2.5 text-base text-white/85 leading-relaxed">
                  <LucideIcons.Check className="w-4 h-4 text-white/70 shrink-0 mt-0.5" /> {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ============ Clinical guidelines — citation cards ============ */}
      <section id="guidelines" className="scroll-mt-16 bg-[#F0F7F4] py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] mb-2">What Do Clinical Guidelines Recommend?</h2>
          <p className="text-base text-[#5F5F5F] leading-relaxed mb-8 max-w-3xl">
            Major clinical bodies have shifted their guidance on back pain management over the past two decades, moving away from prolonged rest and toward early activity and rehabilitation.
          </p>
          <div className="grid sm:grid-cols-3 gap-5">
            {guidelines.map((g) => (
              <div key={g.org} className="bg-white rounded-xl p-5">
                <p className="text-base font-semibold text-[#1F5E4B] mb-2">{g.org}</p>
                <p className="text-base text-[#5F5F5F] leading-relaxed">{g.text}</p>
              </div>
            ))}
          </div>
          <p className="text-base text-[#5F5F5F] leading-relaxed mt-8">
            Across these guidelines, the consistent theme is the same: short-term rest has a narrow, situational role, while early, guided movement — the foundation of physiotherapy — is the better-supported approach for most patients.
          </p>
        </div>
      </section>

      {/* ============ Common mistakes ============ */}
      <section id="mistakes" className="scroll-mt-16 max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] mb-8">Common Mistakes People Make</h2>
        <div className="space-y-3">
          {mistakes.map((m) => (
            <div key={m} className="flex gap-3">
              <LucideIcons.X className="w-4 h-4 text-red-400 shrink-0 mt-1" />
              <p className="text-base text-[#5F5F5F] leading-relaxed">{m}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============ Prevent future pain ============ */}
      <section id="prevent" className="scroll-mt-16 bg-[#F5F1EA] py-16 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] mb-4">Can Physiotherapy Prevent Future Back Pain?</h2>
            <p className="text-base text-[#5F5F5F] leading-relaxed mb-6">
              Yes, in many cases — physiotherapy isn&apos;t only about recovering from the current episode, it&apos;s also about reducing the odds of it happening again:
            </p>
            <ul className="space-y-2.5">
              {preventFuturePain.map((p) => (
                <li key={p} className="flex gap-2.5 text-base text-[#1A1A1A]/85 leading-relaxed">
                  <LucideIcons.Check className="w-4 h-4 text-[#1F5E4B] shrink-0 mt-0.5" /> {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative rounded-2xl overflow-hidden h-[320px] sm:h-[400px] lg:h-full lg:min-h-[450px] w-full lg:self-stretch">
            <Image
              src="/images/core-strengthening-exercise-back-pain-dubai.jpg"
              alt="Core strengthening exercise for back pain recovery"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ============ Treatment process — alternating vertical timeline ============ */}
      <section id="process" className="scroll-mt-16 max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] mb-10">Treatment Process at RamaCare Polyclinic</h2>
        <div className="relative">
          <div className="hidden sm:block absolute left-1/2 top-0 bottom-0 w-px bg-[#E9E2D6] -translate-x-1/2" />
          <div className="space-y-8">
            {process.map((p, i) => {
              const left = i % 2 === 0;
              return (
                <div key={p.title} className={`sm:grid sm:grid-cols-2 sm:gap-10 items-center`}>
                  <div className={left ? 'sm:text-right sm:pr-10' : 'sm:col-start-2 sm:pl-10'}>
                    <p className="text-sm font-semibold text-[#1F5E4B] mb-1">Step {i + 1}</p>
                    <p className="text-base font-semibold text-[#1A1A1A]">{p.title}</p>
                    <p className="text-base text-[#5F5F5F] leading-relaxed mt-1">{p.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="relative rounded-2xl overflow-hidden mt-10 h-[300px] sm:h-[450px] lg:h-[550px] w-full">
          <Image
            src="/images/back-pain-assessment-ramacare-dubai.jpg"
            alt="Back pain assessment at RamaCare Polyclinic Dubai"
            fill
            sizes="(max-width: 1024px) 100vw, 80vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* ============ Why choose RamaCare ============ */}
      <section className="bg-[#1F5E4B] py-16 px-6 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Why Choose RamaCare Polyclinic?</h2>
          <p className="text-white/75 leading-relaxed mb-8 max-w-2xl mx-auto">
            RamaCare Polyclinic is a DHA-licensed clinic in Jumeirah 1, Dubai, offering experienced Physiotherapist Dubai services built around evidence-based rehabilitation rather than generic advice to simply &quot;rest it out.&quot;
          </p>
          <div className="grid sm:grid-cols-2 gap-3 text-left max-w-2xl mx-auto">
            {whyChoose.map((w) => (
              <div key={w} className="flex gap-2.5 bg-white/10 rounded-lg px-4 py-3">
                <LucideIcons.Check className="w-4 h-4 text-white/70 shrink-0 mt-0.5" />
                <p className="text-base text-white/85 leading-relaxed">{w}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FAQ — connected timeline dots ============ */}
      <section id="faq" className="scroll-mt-16 max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] mb-8">Frequently Asked Questions</h2>
        <div className="relative pl-6 border-l-2 border-[#E9E2D6]">
          {faqs.map((f, i) => {
            const isOpen = openFaq === i;
            return (
              <div key={f.q} className="relative pb-7 last:pb-0">
                <span className={`absolute -left-[29px] top-1 w-3 h-3 rounded-full border-2 border-white transition-colors ${isOpen ? 'bg-[#1F5E4B]' : 'bg-[#E9E2D6]'}`} />
                <button onClick={() => setOpenFaq(isOpen ? null : i)} className="w-full flex items-start justify-between gap-3 text-left">
                  <span className="text-base font-medium text-[#1A1A1A]">{f.q}</span>
                  <LucideIcons.ChevronDown className={`w-4 h-4 text-[#1F5E4B] shrink-0 mt-0.5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && <p className="text-base text-[#5F5F5F] leading-relaxed mt-2">{f.a}</p>}
              </div>
            );
          })}
        </div>
      </section>

      {/* ============ Resource hub — collapsible categories ============ */}
      <section className="bg-[#F5F1EA] py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl font-semibold text-[#1A1A1A] mb-6">Explore More</h2>
          <div className="space-y-2">
            {resourceHub.map((group, gi) => {
              const isOpen = openCategory === gi;
              return (
                <div key={group.category} className="bg-white rounded-lg overflow-hidden">
                  <button onClick={() => setOpenCategory(isOpen ? null : gi)} className="w-full flex items-center justify-between px-5 py-4 text-left">
                    <span className="text-base font-semibold text-[#1A1A1A]">{group.category}</span>
                    <LucideIcons.ChevronDown className={`w-4 h-4 text-[#1F5E4B] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-4 flex flex-wrap gap-2">
                      {group.links.map((l) => (
                        <a key={l.label} href={l.href} className="text-sm text-[#1F5E4B] bg-[#F0F7F4] hover:bg-[#1F5E4B] hover:text-white transition-colors px-3 py-1.5 rounded-full">
                          {l.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ Conclusion + final CTA ============ */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <p className="text-base text-[#5F5F5F] leading-relaxed mb-8">
          If your back pain has lasted more than a couple of days, keeps coming back, or involves symptoms like leg pain, numbness, or stiffness, don&apos;t wait it out on the sofa. Get a proper assessment for lower back pain, sciatica, slip disc, neck pain, postural pain, or a sports-related back injury.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <button onClick={handleBookAppointment} className="inline-flex items-center gap-2 rounded-md bg-[#1F5E4B] px-6 py-3 text-base font-medium text-white hover:bg-[#17493A] transition-colors">
            <LucideIcons.Calendar className="w-4 h-4" /> Book a Physiotherapy Consultation
          </button>
          <button onClick={() => handleWhatsAppClick('a physiotherapy consultation')} className="inline-flex items-center gap-2 rounded-md border border-[#1F5E4B] px-6 py-3 text-base font-medium text-[#1F5E4B] bg-white hover:bg-gray-50 transition-colors">
            <LucideIcons.Users className="w-4 h-4" /> Talk to Our Physiotherapists
          </button>
          <button onClick={() => handleWhatsAppClick()} className="inline-flex items-center gap-2 rounded-md border border-[#1F5E4B] px-6 py-3 text-base font-medium text-[#1F5E4B] bg-white hover:bg-gray-50 transition-colors">
            <LucideIcons.MessageCircle className="w-4 h-4" /> WhatsApp Now
          </button>
        </div>
        <p className="text-xs text-[#5F5F5F] leading-relaxed mt-10 text-left">
          <span className="font-medium text-[#1A1A1A]">Medical Disclaimer:</span> This page is for educational purposes only and does not replace professional medical advice. It is not a substitute for professional diagnosis or treatment. Individual treatment recommendations, including whether rest, physiotherapy, or a combination is appropriate, require assessment by a qualified healthcare professional.
        </p>
      </section>

      <ContentReviewBadge doctorName="Jeena Mathew" pageSlug="physiotherapy-vs-rest-for-back-pain-recovery" />

      {/* Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#E9E2D6] shadow-lg z-40 p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="hidden md:block">
            <p className="text-base font-semibold text-[#1A1A1A]">Rest, physio, or both?</p>
            <p className="text-xs text-[#5F5F5F]">Get a proper assessment today</p>
          </div>
          <button
            onClick={handleBookAppointment}
            className="flex items-center gap-2 bg-[#1F5E4B] text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all font-semibold whitespace-nowrap"
          >
            <LucideIcons.Calendar className="w-5 h-5" />
            Book Assessment
          </button>
        </div>
      </div>

      <div className="pb-24" />
      <BookConsultation />
    </Layout>
  );
}