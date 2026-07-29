import React, { useState } from 'react';
import Layout from '../../../components/Layout';
import Head from 'next/head';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { useToast } from '../../../components/Toast';
import { useRouter } from 'next/router';

/* ------------------------------------------------------------------
   Page data — sourced directly from the PRP vs Mesotherapy for Hair
   Loss Dubai content brief.
   Signature motif: the hair growth cycle (Anagen → Catagen → Telogen
   → Exogen) presented as labeled phase badges arranged around the
   brief's own growth-cycle infographic — since both treatments work
   by influencing this cycle, it's the most content-accurate visual
   anchor for the page.

   Text sizing: body copy uses text-sm (14px) throughout; hero lead
   paragraphs use text-base (16px) per the readability request.
------------------------------------------------------------------- */
const SITE_URL = 'https://ramacarepolyclinic.ae';
const PAGE_PATH = '/services/prp-vs-mesotherapy-hair-loss-dubai';

const quickCompareTable = [
  { icon: 'Droplet', feature: 'Source', prp: "Patient's own blood (autologous)", meso: 'Vitamin, mineral & amino acid solutions' },
  { icon: 'Syringe', feature: 'Procedure', prp: 'Blood draw → centrifuge → plasma injection', meso: 'Direct micro-injections into the scalp' },
  { icon: 'Target', feature: 'Best for', prp: 'Moderate hair thinning, androgenetic alopecia', meso: 'Early-stage hair thinning, scalp nourishment' },
  { icon: 'Repeat', feature: 'Number of sessions', prp: 'Typically 3–6 initial sessions', meso: 'Typically 4–8 initial sessions' },
  { icon: 'Clock', feature: 'Downtime', prp: 'Minimal (1–2 days mild sensitivity)', meso: 'Minimal to none' },
  { icon: 'Frown', feature: 'Pain level', prp: 'Mild to moderate (numbing cream used)', meso: 'Mild (fine needles or micro-injectors)' },
  { icon: 'TrendingUp', feature: 'Hair growth speed', prp: 'Gradual, visible over 3–6 months', meso: 'Gradual, supports existing growth cycle' },
  { icon: 'Wallet', feature: 'Cost', prp: 'Generally higher per session', meso: 'Generally more affordable per session' },
  { icon: 'CalendarClock', feature: 'Maintenance', prp: 'Periodic maintenance sessions', meso: 'Regular maintenance sessions' },
  { icon: 'UserCheck', feature: 'Ideal candidate', prp: 'Visible thinning, early-to-moderate hair loss', meso: 'Dull, weak, or nutrient-deficient scalp' },
  { icon: 'Sparkles', feature: 'Expected results', prp: 'Improved hair density and thickness', meso: 'Healthier scalp, reduced shedding' },
];

const prpGrowthFactors = [
  'Signal surrounding cells to begin tissue repair',
  'Improve blood flow and oxygen delivery to hair follicles',
  'Encourage follicles in the resting (telogen) phase to shift back into the active growth (anagen) phase',
  'Support collagen stimulation around the follicle, strengthening its structural environment',
];

const growthCyclePhases = [
  { name: 'Anagen', text: 'Active growth phase', angle: -90 },
  { name: 'Catagen', text: 'Transition phase', angle: 0 },
  { name: 'Telogen', text: 'Resting phase', angle: 90 },
  { name: 'Exogen', text: 'Shedding phase', angle: 180 },
];

const mesoIngredients = ['Biotin', 'B-Vitamins', 'Zinc', 'Amino Acids', 'Hyaluronic Acid', 'Minerals'];

const mesoWorks = [
  'Nutrient infusion delivers vitamins and minerals straight to the follicle, bypassing the need for absorption through the digestive system or scalp surface',
  'Improved scalp health reduces the dryness, inflammation, or nutrient deficiency that can contribute to hair thinning',
  'Reduced hair fall is often one of the earliest signs patients notice, typically before density improvements become visible',
  'Follicle nourishment strengthens existing hair, making strands less prone to breakage and shedding',
];

const keyDifferences = [
  { criteria: 'Procedure', prp: 'Blood draw + centrifuge + injection', meso: 'Direct vitamin/mineral injection' },
  { criteria: 'Ingredients', prp: "Patient's own platelets & growth factors", meso: 'Curated nutrient formulations' },
  { criteria: 'Recovery', prp: 'Mild redness, may last 24–48 hours', meso: 'Minimal, usually same-day normal activity' },
  { criteria: 'Results', prp: 'Density and thickness improvement', meso: 'Scalp health and reduced shedding' },
  { criteria: 'Longevity', prp: 'Longer-lasting with maintenance', meso: 'Requires more frequent top-ups' },
  { criteria: 'Safety', prp: 'Very low allergy risk (autologous)', meso: 'Low risk, formulation-dependent' },
  { criteria: 'Scientific evidence', prp: 'Growing body of clinical research', meso: 'Supportive but more limited evidence base' },
];

const patternMatch = [
  { pattern: 'Early Hair Thinning', rec: 'Mesotherapy', text: 'Frequently recommended first to nourish the scalp and slow shedding before follicle damage progresses.' },
  { pattern: 'Advanced Hair Loss', rec: 'PRP', text: 'Tends to offer more noticeable density improvement for moderate androgenetic alopecia.' },
  { pattern: 'Male Pattern Baldness', rec: 'PRP', text: 'Frequently used to target thinning crown and frontal areas.' },
  { pattern: 'Female Hair Thinning', rec: 'Combined', text: 'Often diffuse in pattern — a combination of mesotherapy (scalp health) with PRP (density) is commonly considered.' },
  { pattern: 'Postpartum Hair Loss', rec: 'Mesotherapy', text: 'Often gentler and suitable during recovery, as postpartum shedding is usually temporary and tied to hormonal shifts.' },
  { pattern: 'Stress-Related Hair Loss', rec: 'Mesotherapy', text: 'Since shedding is often reversible, mesotherapy with lifestyle changes may be sufficient; PRP can support faster recovery in some cases.' },
];

const recStyle = {
  PRP: { bg: 'bg-[#1F5E4B]', text: 'text-white' },
  Mesotherapy: { bg: 'bg-[#F5F1EA]', text: 'text-[#1A1A1A]' },
  Combined: { bg: 'bg-white border border-[#1F5E4B]', text: 'text-[#1F5E4B]' },
};

const prpBenefits = [
  'Natural treatment — uses your own blood, minimizing rejection risk',
  'Minimal downtime — most patients return to normal activities the same day',
  'Improved hair density — particularly effective for early-to-moderate androgenetic alopecia',
  'Long-lasting benefits — results can be sustained with periodic maintenance sessions',
  "Regenerative approach — supports the scalp's natural healing and growth processes",
];

const mesoBenefits = [
  'Quick procedure — sessions are typically shorter than PRP',
  'Nutrient-rich injections — directly address vitamin and mineral deficiencies at the follicle level',
  'Better scalp health — improves the overall environment hair grows in',
  'Suitable for early-stage hair loss — a good preventive or early-intervention option',
  'Affordable maintenance — generally more budget-friendly for ongoing upkeep',
];

const timeline = [
  { stage: 'Week 1', text: 'Initial consultation, scalp assessment, first treatment session.' },
  { stage: 'Month 1', text: 'Reduced hair shedding may become noticeable; scalp condition begins improving.' },
  { stage: 'Month 3', text: 'Early signs of new growth or improved hair thickness in responsive patients.' },
  { stage: 'Month 6', text: 'More visible improvement in hair density; follow-up sessions continue.' },
  { stage: 'Maintenance', text: 'Periodic sessions (typically every few months) to sustain results long-term.' },
];

const sideEffects = ['Mild swelling at injection sites', 'Tenderness or sensitivity on the scalp', 'Slight redness that typically fades within a day or two', 'Temporary discomfort during or shortly after the session'];

const costFactors = ['Severity and pattern of hair loss', 'Number of sessions required', 'Whether combination therapy is recommended', "The doctor's individual assessment and treatment plan"];

const whyChoose = [
  'DHA-licensed specialists with experience in hair loss diagnosis and treatment',
  'Personalized diagnosis — no one-size-fits-all protocols',
  'Modern PRP equipment for precise plasma preparation',
  'High-quality, medical-grade mesotherapy solutions',
  'A comfortable, professional treatment environment',
  'A convenient Dubai location, easy to reach for consultations and follow-ups',
  'Individual treatment plans, built around your hair loss pattern, lifestyle, and goals',
];

const consultProcess = [
  { icon: 'MessageSquare', title: 'Consultation', text: 'Discuss your hair loss history, lifestyle, and concerns with a licensed doctor.' },
  { icon: 'Search', title: 'Hair & Scalp Assessment', text: 'A close evaluation of follicle health, hair density, and scalp condition.' },
  { icon: 'Stethoscope', title: 'Diagnosis', text: 'Identifying the likely cause: genetic, hormonal, nutritional, stress-related, or otherwise.' },
  { icon: 'ClipboardList', title: 'Treatment Recommendation', text: 'PRP, mesotherapy, or a combination, based on your specific case.' },
  { icon: 'Syringe', title: 'Sessions', text: 'Scheduled treatments delivered by trained specialists.' },
  { icon: 'TrendingUp', title: 'Follow-Up', text: 'Progress checks to monitor results and adjust the plan if needed.' },
  { icon: 'ShieldCheck', title: 'Maintenance Plan', text: 'A long-term schedule to sustain results.' },
];

const hairCareTips = [
  'Eat a protein-rich, balanced diet — hair is largely made of protein, and deficiencies can worsen shedding',
  'Manage stress levels — chronic stress is a well-known contributor to hair shedding',
  'Use gentle hair care practices — avoid excessive heat styling, tight hairstyles, and harsh chemical treatments',
  'Attend regular follow-up appointments — consistency matters more than any single session',
  'Seek early intervention — the earlier hair thinning is addressed, the better the response to treatment tends to be',
];

const faqs = [
  { q: 'Is PRP better than Mesotherapy for hair loss?', a: 'Neither is universally "better" — PRP tends to suit moderate thinning and density concerns, while mesotherapy is often better for early-stage hair loss and scalp nourishment. The right choice depends on your individual diagnosis.' },
  { q: 'Which treatment gives faster results — PRP or Mesotherapy?', a: 'Mesotherapy patients often notice reduced shedding sooner, while PRP results in improved density typically take a few months to become visible. Both require patience and multiple sessions.' },
  { q: 'Can PRP and Mesotherapy be combined?', a: 'Yes, combination therapy is possible and, for some patients, may offer more comprehensive results. This depends on individual assessment.' },
  { q: 'Is PRP painful?', a: 'Most patients experience mild discomfort, which is manageable with topical numbing cream applied before the procedure.' },
  { q: 'Is Mesotherapy safe?', a: 'When performed by a licensed medical professional using medical-grade products, mesotherapy is considered a safe, minimally invasive procedure.' },
  { q: 'How many sessions are needed for PRP?', a: 'Most patients require an initial series of 3–6 sessions, followed by periodic maintenance treatments.' },
  { q: 'How many sessions are needed for Mesotherapy?', a: 'Typically 4–8 initial sessions, with maintenance sessions afterward to sustain scalp health.' },
  { q: 'Which treatment lasts longer, PRP or Mesotherapy?', a: 'PRP results tend to last longer between sessions, though both treatments require ongoing maintenance for sustained benefits.' },
  { q: 'Which is better for female hair loss?', a: 'Female hair thinning is often diffuse, and many women benefit from a combination approach — this should be determined through a scalp assessment.' },
  { q: 'Can PRP regrow lost hair?', a: "PRP can help stimulate dormant follicles and improve density in areas with thinning hair, but it's not effective on follicles that are fully scarred or permanently inactive." },
  { q: 'What is the recovery time after PRP or Mesotherapy?', a: 'Downtime is minimal for both — most patients resume normal activities within a day, aside from mild, temporary redness or tenderness.' },
  { q: 'Does insurance cover PRP or Mesotherapy for hair loss?', a: 'Coverage varies by insurance provider and policy, as these are typically considered cosmetic or elective treatments. Check with your provider or ask our team during consultation.' },
  { q: 'When will I see results from PRP?', a: 'Most patients begin noticing changes around month 3, with more visible improvement by month 6.' },
  { q: 'When will I see results from Mesotherapy?', a: 'Reduced shedding and improved scalp health are often noticed within the first month, with continued improvement over subsequent sessions.' },
  { q: 'Is PRP suitable for male pattern baldness?', a: 'PRP is commonly used to support hair density in early-to-moderate male pattern baldness, particularly in the crown and frontal scalp areas.' },
  { q: 'Can Mesotherapy help with dandruff or scalp issues?', a: "Mesotherapy's nutrient-based approach can support overall scalp health, which may help with certain scalp conditions — though dedicated dandruff treatment may also be recommended." },
  { q: 'Are PRP and Mesotherapy results permanent?', a: 'No treatment for hair loss is permanent without maintenance. Both PRP and mesotherapy require periodic sessions to sustain results, as hair loss can be an ongoing or progressive condition.' },
  { q: "What's the difference between PRP and hair transplant?", a: 'PRP is a non-surgical, regenerative treatment aimed at strengthening existing follicles, while a hair transplant is a surgical procedure that relocates hair follicles.' },
  { q: 'Who is not a good candidate for PRP or Mesotherapy?', a: 'Patients with certain blood disorders, active scalp infections, or completely scarred/dormant follicles may not be suitable candidates. A medical assessment will determine eligibility.' },
  { q: 'How do I know which treatment is right for me?', a: 'The only reliable way is through a professional hair and scalp assessment with a licensed doctor, who can evaluate your hair loss pattern, cause, and stage before recommending PRP, mesotherapy, or a combination approach.' },
];

const resourceHub = [
  {
    category: 'Services',
    links: [
      { label: 'PRP Hair Treatment Dubai', href: '/services/hair-prp-dubai' },
      { label: 'Hair Mesotherapy Dubai', href: '/services/mesotherapy-dubai' },
      { label: 'Hair Loss Treatment Dubai', href: '/services/hair-loss-dubai' },
      { label: 'Exosomes Facial Dubai', href: '/services/exosomes-facial-dubai' },
      { label: 'Skin Boosters Dubai', href: '/services/skin-boosters-dubai' },
      { label: 'HydraFacial Dubai', href: '/services/hydrafacial-dubai' },
      { label: 'Aesthetic Dermatology Dubai', href: '/services/aesthetic-dermatology-dubai' },
    ],
  },
  {
    category: 'Conditions',
    links: [
      { label: 'Hair Loss Treatment Dubai', href: '/services/hair-loss-dubai' },
      { label: 'Dandruff Treatment Dubai', href: '/services/dandruff-treatment-dubai' },
      { label: 'Stress Treatment Dubai', href: '/services/stress-treatment-dubai' },
    ],
  },
  {
    category: 'Pricing Guides',
    links: [
      { label: 'Hair PRP Cost Dubai', href: '/services/hair-prp-cost-dubai' },
      { label: 'Hair Loss Treatment Cost Dubai', href: '/services/hair-loss-dubai' },
    ],
  },
  {
    category: 'Related Reading',
    links: [
      { label: 'PRP vs Hair Transplant Dubai', href: '/blog/prp-vs-hair-transplant-dubai' },
      { label: 'Exosomes vs PRP Hair Treatment Dubai', href: '/blog/exosomes-vs-prp-hair-treatment-dubai' },
      { label: 'Hair Loss Causes in Dubai', href: '/blog/hair-loss-causes-in-dubai' },
      { label: 'How to Prevent Hair Loss Naturally', href: '/blog/how-to-prevent-hair-loss-naturally' },
    ],
  },
];

/* ------------------------------------------------------------------
   JSON-LD schema — types recommended in Appendix B
------------------------------------------------------------------- */
function buildSchema() {
  const medicalWebPage = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    url: SITE_URL + PAGE_PATH,
    name: 'PRP vs Mesotherapy for Hair Loss Dubai',
    description: "Weighing PRP vs Mesotherapy for Hair Loss Dubai? Compare benefits, results, recovery & costs with RamaCare Polyclinic's expert guide.",
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: [{ '@type': 'MedicalTherapy', name: 'PRP' }, { '@type': 'MedicalTherapy', name: 'Mesotherapy' }],
  };

  const article = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'PRP vs Mesotherapy for Hair Loss Dubai',
    author: { '@type': 'Organization', name: 'RamaCare Polyclinic' },
    publisher: { '@type': 'Organization', name: 'RamaCare Polyclinic' },
    datePublished: '2026-07-01',
    dateModified: '2026-07-01',
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL + '/' },
      { '@type': 'ListItem', position: 2, name: 'Aesthetic Dermatology', item: SITE_URL + '/services/aesthetic-dermatology-dubai' },
      { '@type': 'ListItem', position: 3, name: 'Hair Loss Treatment', item: SITE_URL + '/services/hair-loss-dubai' },
      { '@type': 'ListItem', position: 4, name: 'PRP vs Mesotherapy', item: SITE_URL + PAGE_PATH },
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

  return [medicalWebPage, article, breadcrumb, faqSchema];
}

/* ------------------------------------------------------------------
   Small building blocks
------------------------------------------------------------------- */
function IconTile({ name, className = 'w-4 h-4 text-[#1F5E4B]' }) {
  const Icon = LucideIcons[name] || LucideIcons.Circle;
  return <Icon className={className} />;
}

function polarPos(angleDeg, radius) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: 50 + radius * Math.cos(rad), y: 50 + radius * Math.sin(rad) };
}

export default function PrpVsMesotherapyPage() {
  const { showToast, ToastComponent } = useToast();
  const [openFaq, setOpenFaq] = useState(null);
  const router = useRouter();

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hello RamaCare, I'd like to book a hair loss consultation to discuss PRP vs Mesotherapy.");
    window.open(`https://wa.me/971566597878?text=${message}`, '_blank');
  };
  const handleBookAppointment = () => router.push('/book-appointment/');

  const schemaBlocks = buildSchema();

  return (
    <Layout>
      {ToastComponent}
      <Head>
        <title key="title">PRP vs Mesotherapy for Hair Loss Dubai | RamaCare</title>
        <meta
          name="description"
          content="Weighing PRP vs Mesotherapy for Hair Loss Dubai? Compare benefits, results, recovery & costs with RamaCare Polyclinic's expert guide. Book a consultation today."
          key="description"
        />
        <link rel="canonical" href={SITE_URL + PAGE_PATH} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="PRP vs Mesotherapy for Hair Loss Dubai | RamaCare" />
        <meta
          property="og:description"
          content="Weighing PRP vs Mesotherapy for Hair Loss Dubai? Compare benefits, results, recovery & costs with RamaCare Polyclinic's expert guide."
        />
        <meta property="og:url" content={SITE_URL + PAGE_PATH} />
        <meta property="og:image" content={SITE_URL + '/images/hair-consultation-ramacare-prp-mesotherapy.jpg'} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="PRP vs Mesotherapy for Hair Loss Dubai | RamaCare" />
        {schemaBlocks.map((block, i) => (
          <script key={`schema-${i}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }} />
        ))}
      </Head>

      {/* ============ HERO ============ */}
      <section className="max-w-7xl mx-auto px-6 pt-8 pb-4">
        <p className="text-xs font-medium text-[#5F5F5F] mb-6">
          Home <span className="mx-1.5">/</span> Aesthetic Dermatology <span className="mx-1.5">/</span> Hair Loss Treatment <span className="mx-1.5">/</span>{' '}
          <span className="text-[#1F5E4B]">PRP vs Mesotherapy</span>
        </p>
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-semibold text-[#1A1A1A] leading-[1.2] mb-6">
              PRP vs Mesotherapy for Hair Loss Dubai
            </h1>
            <p className="text-base text-[#5F5F5F] leading-relaxed mb-4">
              If you&apos;ve started noticing more hair on your pillow, in the shower drain, or on your hairbrush, you&apos;re not alone. Hair loss affects a large number of men and women across Dubai, and it&apos;s rarely caused by just one thing.
            </p>
            <p className="text-base text-[#5F5F5F] leading-relaxed mb-8">
              PRP hair treatment and hair mesotherapy are the two non-surgical options that come up most often — but they work in different ways, suit different stages of hair loss, and deliver different types of results. This guide breaks it all down.
            </p>
            <div className="flex flex-wrap gap-3">
              <button onClick={handleBookAppointment} className="inline-flex items-center gap-2 rounded-md bg-[#1F5E4B] px-6 py-3 text-sm font-medium text-white hover:bg-[#17493A] transition-colors">
                <LucideIcons.Calendar className="w-4 h-4" /> Book a Hair Consultation
              </button>
              <button onClick={handleWhatsAppClick} className="inline-flex items-center gap-2 rounded-md border border-[#1F5E4B] px-6 py-3 text-sm font-medium text-[#1F5E4B] bg-white hover:bg-gray-50 transition-colors">
                <LucideIcons.MessageCircle className="w-4 h-4" /> WhatsApp Us
              </button>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="rounded-2xl overflow-hidden">
            <img
              src="/images/hair-consultation-ramacare-prp-mesotherapy.jpg"
              alt="Hair consultation for PRP vs Mesotherapy for Hair Loss Dubai at RamaCare Polyclinic"
              className="w-full h-[320px] sm:h-[380px] object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* ============ Quick comparison table — icon-labeled rows ============ */}
      <section className="bg-[#F5F1EA] py-16 px-6 mt-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] mb-2">Quick Comparison: PRP vs Mesotherapy</h2>
          <p className="text-sm text-[#5F5F5F] leading-relaxed mb-8">A side-by-side snapshot before we get into the details.</p>

          <div className="rounded-xl border border-[#E9E2D6] bg-white overflow-hidden">
            <div className="grid grid-cols-[auto_1fr_1fr] gap-x-4 px-5 py-3 border-b border-[#E9E2D6] bg-[#FBFAF7]">
              <div className="w-32 shrink-0" />
              <p className="text-xs font-semibold uppercase tracking-widest text-[#1F5E4B]">PRP</p>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#8a7856]">Mesotherapy</p>
            </div>
            {quickCompareTable.map((row, i) => (
              <div key={row.feature} className={`grid grid-cols-[auto_1fr_1fr] gap-x-4 px-5 py-4 items-start ${i !== quickCompareTable.length - 1 ? 'border-b border-gray-100' : ''}`}>
                <div className="flex items-center gap-2 pr-2 w-32 shrink-0">
                  <IconTile name={row.icon} />
                  <p className="text-sm font-medium text-[#1A1A1A]">{row.feature}</p>
                </div>
                <p className="text-sm text-[#5F5F5F] leading-relaxed">{row.prp}</p>
                <p className="text-sm text-[#5F5F5F] leading-relaxed">{row.meso}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-[#5F5F5F] leading-relaxed mt-4">Results vary by patient and depend on the underlying cause and severity of hair loss.</p>

          <div className="rounded-2xl overflow-hidden mt-10">
            <img
              src="/images/prp-vs-mesotherapy-comparison-chart-dubai.jpg"
              alt="PRP vs Mesotherapy for hair loss Dubai comparison chart"
              className="w-full h-[220px] sm:h-[300px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* ============ What is PRP ============ */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] mb-4">What Is PRP Hair Treatment?</h2>
        <p className="text-sm text-[#5F5F5F] leading-relaxed mb-4">
          PRP stands for Platelet-Rich Plasma. As a form of PRP hair therapy Dubai patients increasingly turn to, it&apos;s a regenerative treatment that uses a concentrated portion of your own blood to stimulate hair follicles.
        </p>
        <p className="text-sm text-[#5F5F5F] leading-relaxed mb-8">
          Because PRP uses your own biological material, it&apos;s considered a natural, regenerative medicine approach rather than a synthetic one. The growth factors in the plasma are believed to encourage dormant hair follicles to re-enter the active growth phase, improve blood circulation to the scalp, and support thicker, stronger hair strands over time.
        </p>

        <div className="grid sm:grid-cols-3 gap-3 mb-10">
          {['Blood Drawn', 'Centrifuged', 'Plasma Injected'].map((step, i) => (
            <div key={step} className="flex items-center gap-3">
              <div className="flex-1 rounded-xl bg-[#F0F7F4] px-4 py-4 text-center">
                <p className="text-xs font-semibold text-[#1F5E4B] mb-1">Step {i + 1}</p>
                <p className="text-sm font-semibold text-[#1A1A1A]">{step}</p>
              </div>
              {i < 2 && <LucideIcons.ArrowRight className="w-4 h-4 text-[#1F5E4B]/40 hidden sm:block shrink-0" />}
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <div className="rounded-2xl overflow-hidden">
            <img src="/images/prp-hair-treatment-procedure-ramacare.jpg" alt="PRP hair treatment procedure for hair loss Dubai at RamaCare Polyclinic" className="w-full h-[220px] object-cover" />
          </div>
          <div className="rounded-2xl overflow-hidden">
            <img src="/images/prp-blood-centrifuge-preparation-dubai.jpg" alt="PRP preparation process for PRP hair treatment Dubai" className="w-full h-[220px] object-cover" />
          </div>
        </div>

        <p className="text-sm font-semibold text-[#1A1A1A] mt-8 mb-3">How PRP Works</p>
        <ul className="space-y-2.5">
          {prpGrowthFactors.map((f) => (
            <li key={f} className="flex gap-2.5 text-sm text-[#1A1A1A]/85 leading-relaxed">
              <LucideIcons.Check className="w-4 h-4 text-[#1F5E4B] shrink-0 mt-0.5" /> {f}
            </li>
          ))}
        </ul>
      </section>

      {/* ============ Hair growth cycle — signature circular motif ============ */}
      <section className="bg-[#F0F7F4] py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] mb-3">Why the Hair Growth Cycle Matters</h2>
          <p className="text-sm text-[#5F5F5F] leading-relaxed max-w-2xl mx-auto mb-10">
            Hair doesn&apos;t grow continuously — it cycles through growth, rest, and shedding phases. PRP and mesotherapy both aim to influence this cycle, which is why results build gradually across multiple sessions rather than appearing overnight.
          </p>

          <div className="relative max-w-md mx-auto aspect-square mb-8">
            <div className="absolute inset-6 rounded-full overflow-hidden">
              <img
                src="/images/hair-growth-cycle-infographic-dubai.jpg"
                alt="Hair growth cycle infographic showing anagen and telogen phases"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#1F5E4B]/25" />
            {growthCyclePhases.map((p) => {
              const pos = polarPos(p.angle, 50);
              return (
                <div
                  key={p.name}
                  className="absolute -translate-x-1/2 -translate-y-1/2 bg-white rounded-full shadow-md px-3 py-1.5 text-center"
                  style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
                >
                  <p className="text-[11px] font-semibold text-[#1F5E4B] whitespace-nowrap">{p.name}</p>
                </div>
              );
            })}
          </div>
          <div className="grid sm:grid-cols-4 gap-3 text-left max-w-2xl mx-auto">
            {growthCyclePhases.map((p) => (
              <div key={p.name} className="bg-white rounded-lg px-4 py-3">
                <p className="text-sm font-semibold text-[#1A1A1A]">{p.name}</p>
                <p className="text-xs text-[#5F5F5F] mt-0.5">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ What is Mesotherapy ============ */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] mb-4">What Is Hair Mesotherapy?</h2>
        <p className="text-sm text-[#5F5F5F] leading-relaxed mb-4">
          Hair Mesotherapy Dubai is a nutrient-delivery treatment. Instead of relying on the body&apos;s own plasma, it uses a customized blend of vitamins, amino acids, minerals, and hyaluronic acid injected directly into the middle layer of the scalp (the mesoderm).
        </p>
        <p className="text-sm text-[#5F5F5F] leading-relaxed mb-6">
          The goal is straightforward: nourish the scalp and hair follicles at the source through targeted nutrient injections, rather than relying on topical products that often fail to penetrate deeply enough.
        </p>
        <div className="flex flex-wrap gap-2 mb-8">
          {mesoIngredients.map((ing) => (
            <span key={ing} className="text-sm text-[#8a7856] bg-[#F5F1EA] px-3.5 py-1.5 rounded-full">{ing}</span>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-8 items-start">
          <div className="rounded-2xl overflow-hidden order-2 sm:order-1">
            <img src="/images/hair-mesotherapy-session-ramacare.jpg" alt="Hair mesotherapy for hair loss Dubai treatment session" className="w-full h-[260px] object-cover" />
          </div>
          <div className="order-1 sm:order-2">
            <p className="text-sm font-semibold text-[#1A1A1A] mb-3">How Mesotherapy Works</p>
            <ul className="space-y-2.5">
              {mesoWorks.map((m) => (
                <li key={m} className="flex gap-2.5 text-sm text-[#1A1A1A]/85 leading-relaxed">
                  <LucideIcons.Check className="w-4 h-4 text-[#8a7856] shrink-0 mt-0.5" /> {m}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ============ Key differences — compact diverging list ============ */}
      <section className="bg-[#F5F1EA] py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] text-center mb-10">Key Differences Between PRP and Mesotherapy</h2>
          <div className="rounded-2xl overflow-hidden mb-10">
            <img src="/images/hair-follicle-comparison-illustration.jpg" alt="Healthy vs thinning hair follicle illustration for hair loss treatment Dubai" className="w-full h-[220px] object-cover" />
          </div>
          {keyDifferences.map((row) => (
            <div key={row.criteria} className="grid grid-cols-[1fr_auto_1fr] gap-3 sm:gap-6 py-4 border-b border-[#E9E2D6] items-start">
              <p className="text-sm text-[#5F5F5F] leading-relaxed text-right">{row.prp}</p>
              <span className="text-[10px] font-semibold uppercase tracking-wider text-[#1A1A1A] pt-0.5 w-20 sm:w-28 text-center">{row.criteria}</span>
              <p className="text-sm text-[#5F5F5F] leading-relaxed text-left">{row.meso}</p>
            </div>
          ))}
          <p className="text-sm text-[#5F5F5F] leading-relaxed mt-6 text-center">
            Both treatments fall under non-surgical treatment categories, and neither is a permanent, one-time fix. They work best as part of an ongoing, medically supervised plan.
          </p>
        </div>
      </section>

      {/* ============ Pattern matcher ============ */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] text-center mb-2">What Fits Your Hair Loss Pattern?</h2>
        <p className="text-sm text-[#5F5F5F] leading-relaxed text-center mb-10 max-w-2xl mx-auto">
          A general guide — though your doctor&apos;s assessment always takes priority over general guidelines.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {patternMatch.map((p) => {
            const style = recStyle[p.rec];
            return (
              <div key={p.pattern} className="rounded-xl border border-[#E9E2D6] p-5">
                <p className="text-sm font-semibold text-[#1A1A1A] mb-2">{p.pattern}</p>
                <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3 ${style.bg} ${style.text}`}>{p.rec}</span>
                <p className="text-sm text-[#5F5F5F] leading-relaxed">{p.text}</p>
              </div>
            );
          })}
        </div>
        <p className="text-sm text-[#5F5F5F] leading-relaxed mt-8 text-center max-w-2xl mx-auto">
          A DHA-licensed doctor at RamaCare Polyclinic will assess your hair and scalp condition before recommending a customized treatment plan — this comparison is meant to inform your questions during consultation, not replace a professional diagnosis.
        </p>
      </section>

      {/* ============ Benefits ============ */}
      <section className="bg-[#F0F7F4] py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-4">Benefits of PRP</h3>
              <ul className="space-y-2.5">
                {prpBenefits.map((b) => (
                  <li key={b} className="flex gap-2.5 text-sm text-[#1A1A1A]/85 leading-relaxed">
                    <LucideIcons.Check className="w-4 h-4 text-[#1F5E4B] shrink-0 mt-0.5" /> {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-4">Benefits of Mesotherapy</h3>
              <ul className="space-y-2.5">
                {mesoBenefits.map((b) => (
                  <li key={b} className="flex gap-2.5 text-sm text-[#1A1A1A]/85 leading-relaxed">
                    <LucideIcons.Check className="w-4 h-4 text-[#8a7856] shrink-0 mt-0.5" /> {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden">
            <img src="/images/hair-density-improvement-graphic-dubai.jpg" alt="Hair density improvement graphic PRP vs Mesotherapy Dubai" className="w-full h-[220px] sm:h-[280px] object-cover" />
          </div>
        </div>
      </section>

      {/* ============ Can both be combined ============ */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] mb-4">Can PRP and Mesotherapy Be Combined?</h2>
        <div className="rounded-xl border-l-4 border-[#1F5E4B] bg-[#F0F7F4] px-6 py-5">
          <p className="text-sm text-[#1A1A1A] leading-relaxed">
            Yes — in many cases, combination therapy offers better outcomes than either treatment alone. PRP addresses follicle stimulation and growth factor delivery, while mesotherapy supports overall scalp nourishment and health. Combining both isn&apos;t right for everyone though — it depends on your hair loss pattern, scalp condition, and overall health. RamaCare&apos;s specialists evaluate whether a combined protocol would benefit your specific case.
          </p>
        </div>
      </section>

      {/* ============ Timeline ============ */}
      <section className="bg-[#F5F1EA] py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] mb-8">Treatment Timeline</h2>
          <div className="grid sm:grid-cols-5 gap-3">
            {timeline.map((t, i) => (
              <div key={t.stage} className="relative">
                <div className="bg-white rounded-xl p-4 h-full">
                  <p className="text-xs font-semibold text-[#1F5E4B] mb-1.5">{t.stage}</p>
                  <p className="text-sm text-[#5F5F5F] leading-relaxed">{t.text}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-[#5F5F5F] leading-relaxed mt-6">
            Timelines vary based on the severity of hair loss, the treatment protocol chosen, and individual response — your doctor will outline a more specific schedule during consultation.
          </p>
        </div>
      </section>

      {/* ============ Side effects & cost ============ */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold text-[#1A1A1A] mb-4">Side Effects &amp; Recovery</h2>
          <p className="text-sm text-[#5F5F5F] leading-relaxed mb-4">Both treatments are minimally invasive, but mild, temporary side effects are common:</p>
          <ul className="space-y-2">
            {sideEffects.map((s) => (
              <li key={s} className="flex gap-2.5 text-sm text-[#5F5F5F] leading-relaxed">
                <LucideIcons.Dot className="w-4 h-4 text-[#1F5E4B] shrink-0" /> {s}
              </li>
            ))}
          </ul>
          <p className="text-sm text-[#5F5F5F] leading-relaxed mt-4">
            Aftercare generally includes avoiding harsh hair products for 24–48 hours, skipping intense workouts on the treatment day, and avoiding direct sun exposure on the scalp immediately after the session.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-[#1A1A1A] mb-4">Cost Comparison</h2>
          <p className="text-sm text-[#5F5F5F] leading-relaxed mb-4">Pricing for both treatments in Dubai depends on several factors:</p>
          <ul className="space-y-2 mb-4">
            {costFactors.map((c) => (
              <li key={c} className="flex gap-2.5 text-sm text-[#5F5F5F] leading-relaxed">
                <LucideIcons.Dot className="w-4 h-4 text-[#1F5E4B] shrink-0" /> {c}
              </li>
            ))}
          </ul>
          <p className="text-sm text-[#5F5F5F] leading-relaxed">
            We recommend booking a consultation for an accurate, personalized quote. View our{' '}
            <a href="/services/hair-prp-cost-dubai" className="text-[#1F5E4B] underline underline-offset-4">hair PRP cost guide</a> or{' '}
            <a href="/services/hair-loss-dubai" className="text-[#1F5E4B] underline underline-offset-4">hair loss treatment costs</a> for a general overview.
          </p>
        </div>
      </section>

      {/* ============ Why choose RamaCare ============ */}
      <section className="bg-[#1F5E4B] py-16 px-6 text-white">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Why Choose RamaCare Polyclinic?</h2>
            <p className="text-sm text-white/75 leading-relaxed mb-6">
              When it comes to deciding between PRP vs Mesotherapy for Hair Loss Dubai, the clinic and clinician you choose matter just as much as the treatment itself.
            </p>
            <ul className="space-y-2.5">
              {whyChoose.map((w) => (
                <li key={w} className="flex gap-2.5 text-sm text-white/85 leading-relaxed">
                  <LucideIcons.Check className="w-4 h-4 text-white/70 shrink-0 mt-0.5" /> {w}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl overflow-hidden">
            <img src="/images/doctor-examining-scalp-ramacare-dubai.jpg" alt="DHA-licensed doctor examining scalp for hair restoration Dubai" className="w-full h-[300px] object-cover" />
          </div>
        </div>
      </section>

      {/* ============ Consultation process ============ */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] mb-8">Hair Loss Consultation Process</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {consultProcess.map((c, i) => (
            <div key={c.title} className="rounded-xl border border-[#E9E2D6] p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-6 rounded-full bg-[#F0F7F4] text-[#1F5E4B] text-xs font-semibold flex items-center justify-center shrink-0">{i + 1}</span>
                <IconTile name={c.icon} className="w-4 h-4 text-[#1F5E4B]" />
              </div>
              <p className="text-sm font-semibold text-[#1A1A1A]">{c.title}</p>
              <p className="text-sm text-[#5F5F5F] leading-relaxed mt-1">{c.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============ Hair care tips ============ */}
      <section className="bg-[#F5F1EA] py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] mb-6">Hair Care Tips to Support Your Treatment</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {hairCareTips.map((t) => (
              <div key={t} className="flex gap-2.5 bg-white rounded-lg px-4 py-3.5">
                <LucideIcons.Check className="w-4 h-4 text-[#1F5E4B] shrink-0 mt-0.5" />
                <p className="text-sm text-[#5F5F5F] leading-relaxed">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FAQ — toggle-switch list ============ */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] mb-8">Frequently Asked Questions</h2>
        <div>
          {faqs.map((f, i) => {
            const isOpen = openFaq === i;
            return (
              <div key={f.q} className="border-b border-gray-100 py-4">
                <button onClick={() => setOpenFaq(isOpen ? null : i)} className="w-full flex items-center gap-3 text-left">
                  {isOpen ? (
                    <LucideIcons.ToggleRight className="w-5 h-5 text-[#1F5E4B] shrink-0" />
                  ) : (
                    <LucideIcons.ToggleLeft className="w-5 h-5 text-[#5F5F5F] shrink-0" />
                  )}
                  <span className="text-sm font-medium text-[#1A1A1A] flex-1">{f.q}</span>
                </button>
                {isOpen && <p className="text-sm text-[#5F5F5F] leading-relaxed mt-2 pl-8">{f.a}</p>}
              </div>
            );
          })}
        </div>
      </section>

      {/* ============ Resource hub ============ */}
      <section className="bg-[#F5F1EA] py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl font-semibold text-[#1A1A1A] mb-8">Explore More</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8">
            {resourceHub.map((group) => (
              <div key={group.category}>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#1F5E4B] mb-3">{group.category}</p>
                <ul className="space-y-2">
                  {group.links.map((l) => (
                    <li key={l.label}><a href={l.href} className="text-sm text-[#5F5F5F] hover:text-[#1F5E4B] hover:underline">{l.label}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* ============ Conclusion + final CTA ============ */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] mb-4">Take the Next Step Toward Healthier Hair</h2>
        <p className="text-sm text-[#5F5F5F] leading-relaxed mb-4">
          Deciding between PRP vs Mesotherapy for Hair Loss Dubai isn&apos;t something you need to figure out alone. The most effective approach starts with an accurate diagnosis — understanding why your hair is thinning before deciding how to treat it.
        </p>
        <p className="text-sm text-[#5F5F5F] leading-relaxed mb-8">
          At RamaCare Polyclinic, our DHA-licensed specialists offer a thorough hair and scalp assessment, honest guidance, and a treatment plan built specifically around your needs — not a generic package.
        </p>
        <div className="rounded-2xl overflow-hidden mb-8 max-w-2xl mx-auto">
          <img src="/images/patient-results-hair-loss-treatment-ramacare.jpg" alt="Patient results after hair loss treatment Dubai at RamaCare" className="w-full h-[260px] object-cover" />
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          <button onClick={handleBookAppointment} className="inline-flex items-center gap-2 rounded-md bg-[#1F5E4B] px-6 py-3 text-sm font-medium text-white hover:bg-[#17493A] transition-colors">
            <LucideIcons.Calendar className="w-4 h-4" /> Book a Hair Loss Consultation
          </button>
          <button onClick={handleWhatsAppClick} className="inline-flex items-center gap-2 rounded-md border border-[#1F5E4B] px-6 py-3 text-sm font-medium text-[#1F5E4B] bg-white hover:bg-gray-50 transition-colors">
            <LucideIcons.MessageCircle className="w-4 h-4" /> Message Us on WhatsApp
          </button>
        </div>
        <p className="text-xs text-[#5F5F5F] leading-relaxed mt-10 text-left">
          <span className="font-medium text-[#1A1A1A]">Medical Disclaimer:</span> This article is intended for general informational purposes only and does not constitute medical advice. Results from PRP and mesotherapy treatments vary by patient and depend on individual health, hair loss cause, and severity. Please consult a licensed physician at RamaCare Polyclinic for a personalized diagnosis and treatment recommendation before undergoing any procedure.
        </p>
      </section>

      {/* Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#E9E2D6] shadow-lg z-40 p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="hidden md:block">
            <p className="text-sm font-semibold text-[#1A1A1A]">Not sure which treatment fits your hair loss?</p>
            <p className="text-xs text-[#5F5F5F]">Book a scalp assessment today</p>
          </div>
          <button
            onClick={handleBookAppointment}
            className="flex items-center gap-2 bg-[#1F5E4B] text-white px-6 py-3 rounded-lg shadow-lg hover:bg-[#17493A] hover:shadow-xl transition-all font-semibold whitespace-nowrap"
          >
            <LucideIcons.Calendar className="w-5 h-5" />
            Book Consultation
          </button>
        </div>
      </div>
    </Layout>
  );
}