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
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

const SITE_URL = 'https://ramacarepolyclinic.ae';
const PAGE_PATH = '/services/prp-hair-treatment-before-and-after/';

// Before/After Slider Component
function BeforeAfterSlider({ beforeImage, afterImage, title, desc, heightClass = 'h-[300px] sm:h-[380px]' }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);
  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);
  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    setSliderPosition(Math.min(100, Math.max(0, x)));
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e) => {
    handleMove(e.touches[0].clientX);
  };

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/15 p-3">
      <div 
        ref={containerRef}
        className={`relative w-full ${heightClass} overflow-hidden cursor-ew-resize select-none rounded-xl`}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}>
        {/* After Image */}
        <img 
          src={afterImage} 
          alt="After PRP Hair Treatment" 
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Before Image */}
        <div 
          className="absolute inset-0 w-full h-full overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}>
          <img 
            src={beforeImage} 
            alt="Before PRP Hair Treatment" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Slider Line & Handle */}
        <div
          className="absolute inset-y-0 w-[56px] pointer-events-none"
          style={{ left: `calc(${sliderPosition}% - 28px)` }}>
          <div className="absolute inset-x-0 top-0 bottom-0 flex justify-center">
            <div className="w-[2px] h-full bg-white shadow-[0_0_4px_rgba(0,0,0,0.5)]"></div>
          </div>
          <button
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center gap-1 w-10 h-10 rounded-full border-2 border-white/20 bg-black/40 backdrop-blur-md cursor-ew-resize text-white pointer-events-auto"
            aria-label="Drag slider to compare before and after">
            <ChevronLeft className="w-3.5 h-3.5 shrink-0" />
            <ChevronRight className="w-3.5 h-3.5 shrink-0" />
          </button>
        </div>

        {/* Labels */}
        <div className="absolute left-3 top-3 rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-bold text-[#1A1A1A] backdrop-blur-sm shadow">
          Before
        </div>
        <div className="absolute right-3 top-3 rounded-full bg-[#1F5E4B]/90 px-2 py-0.5 text-[10px] font-bold text-white backdrop-blur-sm shadow">
          After
        </div>
      </div>
      {(title || desc) && (
        <div className="mt-3 text-white">
          {title && <h4 className="font-bold text-sm mb-0.5">{title}</h4>}
          {desc && <p className="text-[11px] text-white/80 leading-relaxed">{desc}</p>}
        </div>
      )}
    </div>
  );
}

// ---- Page content data exactly matching the doc ----
const timeline = [
  {
    id: 'w12',
    tag: 'Week 1–2',
    title: 'Initial Recovery',
    detail: 'Mild scalp sensitivity or tenderness; no visible hair change yet',
  },
  {
    id: 'w34',
    tag: 'Week 3–4',
    title: 'Shedding Cycle',
    detail: 'Shedding may temporarily increase as follicles cycle out old hairs',
  },
  {
    id: 'm2',
    tag: 'Month 2',
    title: 'Early Regrowth',
    detail: 'Early fine, "baby" hair regrowth may become visible in some patients',
  },
  {
    id: 'm34',
    tag: 'Month 3–4',
    title: 'Noticeable Growth',
    detail: 'Increased hair density and thickness often become more noticeable',
  },
  {
    id: 'm56',
    tag: 'Month 5–6',
    title: 'Thicker Density',
    detail: 'Continued strengthening of existing hair; regrowth becomes easier to see in photos',
  },
  {
    id: 'm6plus',
    tag: 'Month 6+',
    title: 'Stabilization',
    detail: 'Results typically stabilize; maintenance sessions may be recommended',
  },
];

const weekByWeek = [
  {
    period: 'Week 1',
    body: 'The scalp may feel slightly tender or tight, similar to a mild sunburn. Some redness or small bumps at injection sites are common and usually settle within a few days.',
  },
  {
    period: 'Week 2',
    body: 'Most visible scalp reactions resolve. This is often when patients ask, "is it working?" — and the honest answer is that it\'s too early to tell visually, even though cellular changes are underway.',
  },
  {
    period: 'Week 3–4',
    body: 'Interestingly, some patients notice slightly more shedding than usual during this window. This isn\'t a sign of failure — it can reflect the natural hair cycle resetting as follicles respond to the treatment.',
  },
];

const monthByMonth = [
  {
    period: 'Month 1',
    body: 'Little to no visible change is typical. This is normal and expected — hair growth is a slow biological process.',
  },
  {
    period: 'Month 2',
    body: 'Fine, short regrowth (sometimes called "peach fuzz" regrowth) may start appearing along the hairline or part, especially for patients who responded well to the first session.',
  },
  {
    period: 'Month 3',
    body: 'This is often when the first noticeable hair growth after PRP becomes apparent in before-and-after comparison photos, particularly under consistent lighting and angles.',
  },
  {
    period: 'Month 4–6',
    body: 'Density improvements tend to become more visually obvious. Hair that was previously thin and wispy often appears thicker and healthier.',
  },
  {
    period: 'Month 6+',
    body: 'Results generally plateau, and this is the point where our clinicians assess whether maintenance sessions are advisable to preserve the gains.',
  },
];

const candidacyGood = [
  'Early-stage male or female pattern hair loss',
  'Diffuse thinning across the crown or part line',
  'Post-partum or stress-related shedding that hasn\'t fully resolved',
  'Early signs of alopecia where follicles are still present but under-active',
];

const candidacyNotIdeal = [
  'Completely bald patches',
  'Scarring alopecia',
  'Certain underlying blood disorders',
];

const expectCan = [
  'Reduced hair shedding for many patients',
  'Improved thickness of existing thin hair',
  'Some degree of new fine hair growth in areas with dormant-but-viable follicles',
  'Gradual, not dramatic overnight, change',
];

const expectCannot = [
  'Regrow hair in areas with no active follicles',
  'Reverse advanced, long-standing baldness on its own',
  'Produce permanent results without any maintenance',
];

const resultFactors = [
  { title: 'Stage of hair loss', desc: 'earlier intervention generally responds better than advanced thinning' },
  { title: 'Age', desc: 'younger follicles often respond faster, though older patients can still see meaningful results' },
  { title: 'Underlying health conditions', desc: 'thyroid issues, nutritional deficiencies, and hormonal imbalances can all affect follicle response' },
  { title: 'Consistency of sessions', desc: 'skipping or spacing out sessions too far apart can blunt cumulative benefits' },
  { title: 'Lifestyle factors', desc: 'smoking, poor sleep, and high stress can all interfere with hair growth cycles' },
  { title: 'Genetics', desc: 'pattern hair loss has a strong hereditary component that PRP can support but not override' },
];

const benefits = [
  'Uses your own biological material, minimizing risk of allergic reaction',
  'Minimally invasive with little to no downtime',
  'Can be combined with other hair growth treatment in Dubai options',
  'Supports both hair density and, for some patients, hair quality/thickness',
  'No incisions, stitches, or surgical scarring',
];

const limitations = [
  'Not effective on completely bald, follicle-free scalp areas',
  'Results are gradual and require patience',
  'Multiple sessions are typically needed for meaningful, lasting benefit',
  'Not a permanent, one-time fix — most patients benefit from maintenance visits',
];

const risks = [
  'Mild pain or tenderness at injection sites',
  'Temporary redness or swelling',
  'Slight bruising in rare cases',
  'Temporary headache following the procedure',
];

const aftercare = [
  'Avoid washing your hair for at least 24 hours after treatment',
  'Skip strenuous exercise and excessive sweating for a day or two',
  'Avoid direct sun exposure on the scalp immediately after treatment',
  'Don\'t apply hair styling products for at least 24–48 hours',
  'Follow any specific instructions given by your treating clinician',
];

const lifestyleTips = [
  'Maintain a balanced diet with adequate protein, iron, and biotin',
  'Stay hydrated and prioritize consistent sleep',
  'Reduce smoking and excessive alcohol consumption, both linked to poorer scalp circulation',
  'Manage stress, since chronic stress is a known contributor to hair shedding',
  'Use gentle, sulfate-free hair care products where possible',
];

const photoTips = [
  { title: 'Consistent lighting', desc: 'matters enormously; harsh overhead lighting can exaggerate or hide thinning' },
  { title: 'Same angle and distance', desc: 'should be used for every photo to allow fair comparison' },
  { title: 'Wet vs. dry hair', desc: 'changes how density appears, so compare like with like' },
  { title: 'Styling and parting', desc: 'should stay consistent between photos' },
  { title: 'Time of day', desc: 'should ideally be taken at the same time of day, since scalp appearance can shift slightly with sweat or oil buildup' },
];

const prpVsTransplant = {
  headers: ['PRP Therapy', 'Hair Transplant'],
  rows: [
    { label: 'Invasiveness', values: ['Minimally invasive, injections only', 'Surgical procedure'] },
    { label: 'Downtime', values: ['Little to none', 'Days to weeks'] },
    { label: 'Best for', values: ['Early to moderate thinning', 'Advanced, localized baldness'] },
    { label: 'Results timeline', values: ['Gradual, over months', 'Gradual, over 6–12 months post-surgery'] },
    { label: 'Permanence', values: ['Requires maintenance sessions', 'Generally permanent for transplanted follicles'] },
  ],
};

const myths = [
  { myth: 'PRP works instantly.', reality: 'Visible change typically takes at least two to three months to begin appearing.' },
  { myth: 'PRP can regrow hair on a completely bald scalp.', reality: 'PRP needs at least some dormant-but-viable follicles to stimulate; it can\'t create new follicles from nothing.' },
  { myth: 'One session is enough.', reality: 'Most protocols involve multiple initial sessions plus periodic maintenance.' },
  { myth: 'PRP is only for men.', reality: 'PRP is commonly used for both male and female pattern hair loss.' },
  { myth: 'All PRP treatments are the same.', reality: 'Preparation methods, platelet concentration, and injection technique vary by clinic and can affect outcomes.' },
];

const whyChoose = [
  { title: 'Experienced medical professionals', desc: 'who assess each scalp individually rather than applying a one-size-fits-all protocol' },
  { title: 'Personalized treatment plans', desc: 'built around your specific stage of hair thinning and health history' },
  { title: 'Modern facilities', desc: 'in a convenient Dubai location, easily accessible for patients across the city and nearby areas like Jumeirah' },
  { title: 'Patient-focused care', desc: 'with realistic conversations about what PRP can and cannot achieve for your particular case' },
];

const faqs = [
  { question: 'How soon will I see PRP hair treatment before and after results?', answer: 'Most patients begin noticing early changes around the two-to-three-month mark, with more visible density improvements by months four to six.' },
  { question: 'Is PRP hair treatment painful?', answer: 'Most patients describe mild discomfort rather than significant pain, often compared to a series of small pinpricks. Topical numbing may be used to improve comfort.' },
  { question: 'How many PRP sessions will I need?', answer: 'This varies by individual, but many protocols start with three to four sessions spaced four to six weeks apart, followed by maintenance visits.' },
  { question: 'Does PRP hair treatment really work?', answer: 'For appropriately selected patients with early-to-moderate thinning and viable follicles, PRP can support noticeable improvements in hair density and reduced shedding, though results vary by individual.' },
  { question: 'Are PRP hair treatment results permanent?', answer: 'Results are generally not permanent without maintenance; most clinicians recommend periodic follow-up sessions to sustain benefits over time.' },
  { question: 'Can women get PRP hair treatment?', answer: 'Yes, PRP is commonly used to treat female pattern hair loss and diffuse thinning.' },
  { question: 'What is the recovery time after PRP?', answer: 'Downtime is minimal; most patients resume normal activities the same day, avoiding strenuous exercise for about 24–48 hours.' },
  { question: 'Does PRP hurt more than a hair transplant?', answer: 'PRP is generally less invasive and involves significantly less discomfort and downtime than a surgical hair transplant.' },
  { question: 'Who is not a good candidate for PRP?', answer: 'Patients with completely bald areas, certain blood disorders, active scalp infections, or very advanced hair loss may not be ideal candidates.' },
  { question: 'Can PRP be combined with other hair treatments?', answer: 'Yes, PRP is often combined with treatments like hair mesotherapy or used alongside a hair transplant for enhanced support.' },
  { question: 'How much does PRP hair treatment cost in Dubai?', answer: 'Cost varies based on the number of sessions and individual treatment plan. Visit our PRP Hair Treatment Cost in Dubai page for a fuller breakdown, or book a consultation for an accurate estimate for your specific case.' },
  { question: 'What does the before-and-after photo timeline typically show?', answer: 'It typically shows minimal change in the first month, early fine regrowth by month two to three, and more noticeable density by month four to six.' },
  { question: 'Is PRP hair treatment safe?', answer: 'Since PRP uses your own blood, the risk of allergic reaction is low, though mild, temporary side effects like tenderness or redness can occur.' },
  { question: 'Will my hair loss come back after stopping PRP?', answer: 'Hair loss may gradually resume its natural progression without maintenance, since PRP supports but doesn\'t permanently alter the underlying cause of thinning.' },
  { question: 'How do I know if PRP is right for me?', answer: 'The best way to know is through an in-person scalp evaluation and consultation with a qualified clinician who can assess your hair loss pattern and follicle health.' },
];

const relatedGuides = [
  { title: 'Hair PRP Treatment in Dubai', desc: 'Explore our core PRP treatment page for a full breakdown of the procedure, technique, and what to expect during your visit.', href: '/services/hair-prp-dubai/' },
  { title: 'Hair Loss Treatment in Dubai', desc: 'A broader look at the range of hair loss treatment options available beyond PRP, useful if you\'re still comparing approaches.', href: '/services/hair-loss-dubai/' },
  { title: 'Hair Fall Treatment in Dubai', desc: 'Focused specifically on managing excessive hair fall and shedding, a common concern that often precedes visible thinning.', href: '/services/hair-treatment-dubai/' },
  { title: 'PRP Hair Treatment Cost in Dubai', desc: 'A transparent look at what influences PRP pricing, so you can plan your treatment budget with clarity.', href: '/services/hair-prp-cost-dubai/' },
  { title: 'Hair Growth Treatment in Dubai', desc: 'Covers additional hair growth-focused treatments that can complement or support your PRP results.', href: '/services/hair-growth-dubai/' },
  { title: 'Hair Mesotherapy in Dubai', desc: 'Learn how mesotherapy compares to PRP and whether combining the two could suit your specific hair goals.', href: '/services/mesotherapy-dubai/' },
];

const navItems = [
  { id: 'timeline', label: 'Timeline' },
  { id: 'candidacy', label: 'Candidacy' },
  { id: 'expectations', label: 'Expectations' },
  { id: 'compare', label: 'PRP vs Transplant' },
  { id: 'myths', label: 'Myths' },
  { id: 'faqs', label: 'FAQs' },
];

export default function PrpHairBeforeAfterPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [activeTab, setActiveTab] = useState('week');
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
        <title key="title">PRP Hair Treatment Before and After Results | Dubai</title>
        <meta
          name="description"
          content="A realistic, medically-reviewed breakdown of PRP hair treatment timelines, candidacy, and how to correctly interpret before-and-after results."
          key="description"
        />
        <meta
          name="keywords"
          content="PRP hair treatment before and after Dubai, PRP hair results timeline, Platelet rich plasma hair Dubai, PRP hair regrowth results, Hair PRP before after photos, PRP vs hair transplant Dubai, PRP hair treatment realistic results"
          key="keywords"
        />
        <link rel="canonical" href="https://ramacarepolyclinic.ae/services/prp-hair-treatment-before-and-after/" />
        <meta name="robots" content="index, follow" key="robots" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="PRP Hair Treatment Before and After Results | RamaCare Polyclinic" key="og:title" />
        <meta
          property="og:description"
          content="A realistic, medically-reviewed breakdown of PRP hair treatment timelines, candidacy, and how to correctly interpret before-and-after results."
          key="og:description"
        />
        <meta property="og:type" content="article" key="og:type" />
        <meta property="og:url" content="https://ramacarepolyclinic.ae/services/prp-hair-treatment-before-and-after/" key="og:url" />
        <meta property="og:image" content="https://ramacarepolyclinic.ae/images/patient-results-hair-loss-treatment.jpg" key="og:image" />
        <meta property="og:image:width" content="1200" key="og:image:width" />
        <meta property="og:image:height" content="630" key="og:image:height" />
        <meta property="og:site_name" content="RamaCare Polyclinic" key="og:site_name" />
        <meta property="og:locale" content="en_AE" key="og:locale" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content="PRP Hair Treatment Before and After Results | RamaCare Polyclinic" key="twitter:title" />
        <meta
          name="twitter:description"
          content="A realistic, medically-reviewed breakdown of PRP hair treatment timelines, candidacy, and how to correctly interpret before-and-after results."
          key="twitter:description"
        />
        <meta name="twitter:image" content="https://ramacarepolyclinic.ae/images/patient-results-hair-loss-treatment.jpg" key="twitter:image" />

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
                  '@id': 'https://ramacarepolyclinic.ae/services/prp-hair-treatment-before-and-after/#webpage',
                  url: 'https://ramacarepolyclinic.ae/services/prp-hair-treatment-before-and-after/',
                  name: 'PRP Hair Treatment Before and After: What Real Results Actually Look Like',
                  description:
                    'A realistic, medically-reviewed breakdown of PRP hair treatment timelines, candidacy, and how to correctly interpret before-and-after results.',
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
                    '@id': 'https://ramacarepolyclinic.ae/services/prp-hair-treatment-before-and-after/#physician',
                  },
                  breadcrumb: {
                    '@type': 'BreadcrumbList',
                    itemListElement: [
                      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ramacarepolyclinic.ae/' },
                      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://ramacarepolyclinic.ae/services/' },
                      {
                        '@type': 'ListItem',
                        position: 3,
                        name: 'PRP Hair Treatment Before and After',
                        item: 'https://ramacarepolyclinic.ae/services/prp-hair-treatment-before-and-after/',
                      },
                    ],
                  },
                },
                {
                  '@type': 'Physician',
                  '@id': 'https://ramacarepolyclinic.ae/services/prp-hair-treatment-before-and-after/#physician',
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
                  '@id': 'https://ramacarepolyclinic.ae/services/prp-hair-treatment-before-and-after/#faq',
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
          <span className="text-[#1F5E4B]">PRP Hair Treatment Before and After</span>
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
                <Droplet className="w-4 h-4" />
                Platelet Rich Plasma Therapy
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-[3.2rem] font-bold leading-[1.15]">
                PRP Hair Treatment Before and After: <span className="text-white/80">What Real Results Actually Look Like</span>
              </h1>
              <div className="text-sm md:text-base text-white/90 space-y-4 leading-relaxed">
                <p>
                  If you&apos;ve spent any time scrolling through hair restoration forums or Instagram, you&apos;ve probably noticed the same thing we have: everyone wants to see proof before they commit. That&apos;s exactly why &quot;PRP hair treatment before and after&quot; is one of the most searched phrases among people considering Platelet Rich Plasma therapy — and it&apos;s a fair thing to want. You&apos;re not just buying a treatment, you&apos;re investing time, money, and a bit of hope into your hair.
                </p>
                <p>
                  At RamaCare Polyclinic in Dubai, we get asked about before-and-after results almost every single day, usually before anything else. People want to know: How much regrowth is normal? When does it start showing? Does it work the same for everyone? These are good questions, and they deserve honest answers rather than glossy marketing photos.
                </p>
                <p>
                  PRP (Platelet Rich Plasma) therapy works by using a concentrated part of your own blood — rich in growth factors — to stimulate dormant hair follicles and support the natural hair growth cycle. It isn&apos;t a magic fix, and it isn&apos;t instant. Results build gradually over several months, and how much change you see depends on things like the stage of your hair loss, your general health, and how consistently you follow the recommended session schedule.
                </p>
                <p>
                  This guide walks through exactly what to expect at each stage — week by week and month by month — what influences your results, how PRP compares to other hair restoration treatments, and how to interpret before-and-after photos (yours or anyone else&apos;s) with a realistic eye. Whether you&apos;re just starting to research <Link href="/services/hair-loss-dubai/" className="text-white underline font-semibold">hair loss treatment in Dubai</Link> or you&apos;re ready to book a consultation, our goal is to give you the clearest, most medically grounded picture we can.
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
                  href="https://wa.me/971566597878?text=Hello%20RamaCare%20Polyclinic%2C%20I%20would%20like%20to%20ask%20about%20PRP%20Hair%20Treatment%20before%20and%20after%20journeys."
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
              className="lg:col-span-5"
            >
              <BeforeAfterSlider 
                beforeImage="/images/prp-hair-treatment-procedure.jpg"
                afterImage="/images/patient-results-hair-loss-treatment.jpg"
                title="Interactive Before & After Results"
                desc="Drag the slider to compare hair restoration and density progress."
                heightClass="h-[320px] sm:h-[400px]"
              />
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

      {/* ============ WHAT IS PRP — alternating block ============ */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 bg-[#1F5E4B]/10 text-[#1F5E4B] px-4 py-2 rounded-full text-sm font-semibold">
              <Info className="w-4 h-4" />
              What Is PRP?
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A]">What Is PRP Hair Treatment?</h2>
            <p className="text-lg text-[#5F5F5F] leading-relaxed">
              PRP hair treatment is a non-surgical procedure that uses your own blood plasma, processed to concentrate platelets, then injected into areas of the scalp experiencing thinning or shedding. Platelets release growth factors that are believed to encourage blood flow to hair follicles, extend the growth (anagen) phase of the hair cycle, and support the health of follicles that are still active but weakened.
            </p>
            <p className="text-lg text-[#5F5F5F] leading-relaxed">
              It&apos;s a treatment rooted in regenerative medicine principles that have also been used in orthopedics and dermatology for years, which is part of why it&apos;s gained credibility as a <Link href="/services/hair-thinning-treatment-dubai/" className="text-[#1F5E4B] underline font-semibold">hair thinning treatment</Link> option rather than a fringe remedy.
            </p>
            <p className="text-lg text-[#5F5F5F] leading-relaxed">
              At RamaCare Polyclinic, PRP is typically positioned as part of a broader hair restoration Dubai strategy — sometimes on its own, sometimes alongside our core <Link href="/services/hair-prp-dubai/" className="text-[#1F5E4B] underline font-semibold">Hair PRP Treatment in Dubai</Link> service, depending on what a patient&apos;s scalp examination shows.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="bg-gradient-to-br from-[#1F5E4B] to-[#2A7D63] rounded-2xl p-8 text-white space-y-5 shadow-xl">
              <h3 className="text-xl font-bold">How PRP Works on the Scalp</h3>
              <p className="text-white/90 text-sm leading-relaxed">
                The process itself is straightforward, even if the biology behind it is more complex:
              </p>
              {[
                { icon: Syringe, text: 'A small blood sample is drawn, similar to a routine blood test.' },
                { icon: FlaskConical, text: 'The sample is spun in a centrifuge to separate the platelet-rich plasma from red blood cells and other components.' },
                { icon: ScanLine, text: 'The concentrated plasma is then injected into the treatment areas of the scalp using fine needles.' },
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-5 h-5" />
                  </div>
                  <p className="text-white/90 leading-relaxed pt-2 text-sm md:text-base">{step.text}</p>
                </div>
              ))}
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
              <img
                src="/images/prp-blood-centrifuge-preparation.jpg"
                alt="PRP centrifuge preparation process at RamaCare Dubai"
                className="w-full h-[220px] object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============ HOW PRP WORKS ON THE SCALP TEXT ============ */}
      <section className="py-12 px-4 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto space-y-4">
          <p className="text-lg text-[#5F5F5F] leading-relaxed">
            The theory — supported by a growing body of Platelet Rich Plasma therapy research — is that these concentrated growth factors signal follicles to shift from a resting phase back into an active growth phase, and improve the microenvironment around hair roots, including blood supply and follicle nutrition.
          </p>
          <p className="text-lg text-[#5F5F5F] leading-relaxed">
            It&apos;s worth being clear-eyed here: PRP works best as a stimulator of follicles that still have growth potential. It&apos;s much less effective on scalp areas that are completely bald with no follicle activity left, which is why the initial consultation and scalp assessment matter so much.
          </p>
        </div>
      </section>

      {/* ============ CANDIDACY — contrast panel ============ */}
      <section className="py-20 px-4 bg-[#F9F7F2]" id="candidacy">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">Who Is an Ideal Candidate?</h2>
            <p className="text-xl text-[#5F5F5F] max-w-3xl mx-auto">
              PRP tends to work best for people who are in the earlier-to-moderate stages of hair thinning rather than advanced baldness. Good candidates typically include those experiencing:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border-2 border-[#1F5E4B]/20 p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-full bg-[#1F5E4B]/10 flex items-center justify-center">
                  <Check className="w-6 h-6 text-[#1F5E4B]" />
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A]">Good Candidates Typically Include</h3>
              </div>
              <ul className="space-y-4">
                {candidacyGood.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#1F5E4B] flex-shrink-0 mt-0.5" />
                    <span className="text-[#5F5F5F] leading-relaxed text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border-2 border-gray-200 p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-full bg-gray-100 flex items-center justify-center">
                  <X className="w-6 h-6 text-gray-500" />
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A]">May Not Be Suitable For</h3>
              </div>
              <ul className="space-y-4">
                {candidacyNotIdeal.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                    <span className="text-[#5F5F5F] leading-relaxed text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm text-[#5F5F5F] leading-relaxed border-t border-gray-100 pt-4">
                People with completely bald patches, scarring alopecia, or certain underlying blood disorders may not be suitable candidates, which is why sitting down with a qualified <Link href="/services/best-hair-specialist-dubai/" className="text-[#1F5E4B] underline font-semibold">hair specialist in Dubai</Link> for an in-person consultation and scalp evaluation is a necessary first step — not a formality.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============ BEFORE & AFTER TIMELINE ============ */}
      <section className="py-20 px-4 bg-white" id="timeline">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
            <div className="inline-flex items-center gap-2 bg-[#1F5E4B]/10 text-[#1F5E4B] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Clock className="w-4 h-4" />
              The Timeline
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">PRP Hair Treatment Before and After Timeline</h2>
            <p className="text-xl text-[#5F5F5F] max-w-3xl">
              This is the part most people searching &quot;PRP hair treatment before and after&quot; really want to understand. Here&apos;s a general, realistic outline of how results tend to unfold. Individual results vary, and this table should be read as a general pattern rather than a guarantee.
            </p>
          </motion.div>

          <div className="relative">
            <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-[#1F5E4B]/15" />
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {timeline.map((stage, i) => (
                <motion.div
                  key={stage.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative"
                >
                  <div className="hidden md:flex w-4 h-4 rounded-full bg-[#1F5E4B] border-4 border-white shadow relative z-10 mb-4" />
                  <div className="bg-[#F9F7F2] rounded-2xl border border-gray-200 p-5 h-full hover:border-[#1F5E4B]/30 hover:shadow-lg transition-all flex flex-col justify-between">
                    <div>
                      <span className="inline-block text-xs font-bold text-[#1F5E4B] uppercase tracking-wide mb-2">{stage.tag}</span>
                      <h3 className="text-base font-bold text-[#1A1A1A] mb-2">{stage.title}</h3>
                      <p className="text-sm text-[#5F5F5F] leading-relaxed">{stage.detail}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ WEEK / MONTH TABS ============ */}
      <section className="py-20 px-4 bg-[#F9F7F2]">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">Recovery & Results Timeline</h2>
            <p className="text-xl text-[#5F5F5F]">Switch views to see what&apos;s typically happening at each stage.</p>
          </motion.div>

          <div className="flex justify-center gap-2 mb-8">
            {[
              { key: 'week', label: 'Week-by-Week Recovery' },
              { key: 'month', label: 'Month-by-Month Results Details' },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-6 py-3 rounded-xl font-bold transition-all ${
                  activeTab === tab.key ? 'bg-[#1F5E4B] text-white shadow-lg' : 'bg-white text-[#5F5F5F] border border-gray-200 hover:border-[#1F5E4B]/30'
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
              className="space-y-4"
            >
              {(activeTab === 'week' ? weekByWeek : monthByMonth).map((item, i) => (
                <div key={i} className="bg-white rounded-2xl border border-gray-200 p-6 flex gap-5 shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-[#1F5E4B] text-white flex items-center justify-center font-bold flex-shrink-0 text-sm">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#1A1A1A] mb-1">{item.period}</h4>
                    <p className="text-[#5F5F5F] leading-relaxed text-sm md:text-base">{item.body}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ============ SETTING REALISTIC EXPECTATIONS ============ */}
      <section className="py-20 px-4 bg-white" id="expectations">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">Setting Realistic Expectations</h2>
            <p className="text-xl text-[#5F5F5F] max-w-3xl mx-auto">
              We think this section matters more than any other on this page. PRP is a legitimate, evidence-supported treatment, but it is not a cure for baldness, and it doesn&apos;t work identically for every person. Reputable clinics — including ours — avoid promising guaranteed regrowth, because no ethical medical provider can promise a specific biological outcome.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="bg-[#1F5E4B] p-8 md:p-10">
              <h3 className="text-xl font-bold text-white mb-6">What You Can Reasonably Expect</h3>
              <ul className="space-y-4">
                {expectCan.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                    <span className="text-white/90 leading-relaxed text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="bg-[#1A1A1A] p-8 md:p-10">
              <h3 className="text-xl font-bold text-white mb-6">What PRP Is Unlikely to Do</h3>
              <ul className="space-y-4">
                {expectCannot.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-white/60 flex-shrink-0 mt-0.5" />
                    <span className="text-white/70 leading-relaxed text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============ FACTORS AFFECTING RESULTS ============ */}
      <section className="py-20 px-4 bg-[#F9F7F2]">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">Factors That Affect Your Results</h2>
            <p className="text-xl text-[#5F5F5F] max-w-3xl">Before-and-after outcomes vary quite a bit from person to person, and several factors influence why:</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {resultFactors.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white rounded-2xl border border-gray-200 p-6 hover:border-[#1F5E4B]/30 hover:shadow-lg transition-all"
              >
                <span className="text-3xl font-bold text-[#1F5E4B]/25">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="text-lg font-bold text-[#1A1A1A] mt-3 mb-2">{f.title}</h3>
                <p className="text-[#5F5F5F] leading-relaxed text-sm md:text-base">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SESSIONS CALLOUT ============ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#1F5E4B] to-[#2A7D63] rounded-2xl p-8 md:p-10 text-white flex flex-col md:flex-row items-center gap-8 shadow-xl"
          >
            <div className="w-20 h-20 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-10 h-10" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">How Many Sessions Do You Need?</h3>
              <p className="text-white/90 leading-relaxed text-sm md:text-base">
                Most hair PRP treatment protocols involve an initial series, commonly spaced four to six weeks apart, followed by periodic maintenance sessions. The exact number isn&apos;t one-size-fits-all — it depends on your scalp assessment, the extent of thinning, and how your follicles respond after the first couple of sessions.
              </p>
              <p className="text-white/80 leading-relaxed text-xs md:text-sm mt-3">
                During your hair PRP consultation at RamaCare Polyclinic, our clinical team will outline a session plan tailored to your specific scalp condition rather than applying a generic package to everyone. You can also review typical pricing structures on our <Link href="/services/hair-prp-cost-dubai/" className="text-white underline font-semibold">PRP Hair Treatment Cost in Dubai</Link> page while you plan.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============ BENEFITS & LIMITATIONS ============ */}
      <section className="py-20 px-4 bg-[#F9F7F2]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
            <h3 className="text-xl font-bold text-[#1A1A1A] mb-5 flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-[#1F5E4B]" /> Benefits of PRP Hair Treatment
            </h3>
            <ul className="space-y-3">
              {benefits.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#1F5E4B] flex-shrink-0 mt-0.5" />
                  <span className="text-[#5F5F5F] leading-relaxed text-sm md:text-base">{b}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
            <h3 className="text-xl font-bold text-[#1A1A1A] mb-5 flex items-center gap-2">
              <AlertCircle className="w-6 h-6 text-amber-600" /> Limitations of PRP
            </h3>
            <ul className="space-y-3">
              {limitations.map((l, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span className="text-[#5F5F5F] leading-relaxed text-sm md:text-base">{l}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ============ RISKS + AFTERCARE ============ */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#1F5E4B] to-[#1F4E3B]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="text-2xl font-bold text-white mb-2">Risks and Side Effects</h3>
            <p className="text-white/70 mb-6 text-sm md:text-base">PRP is generally considered a low-risk procedure since it uses the patient&apos;s own blood, but like any injectable treatment, it can carry some temporary side effects, including:</p>
            <ul className="space-y-3">
              {risks.map((r, i) => (
                <li key={i} className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-4">
                  <AlertCircle className="w-5 h-5 text-white/70 flex-shrink-0 mt-0.5" />
                  <span className="text-white/90 text-sm md:text-base">{r}</span>
                </li>
              ))}
            </ul>
            <p className="text-white/80 text-xs md:text-sm mt-5 leading-relaxed">
              Serious complications are uncommon when the procedure is performed by trained medical professionals using sterile technique, which is why choosing a licensed clinic matters as much as choosing the treatment itself.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <h3 className="text-2xl font-bold text-white mb-2">Aftercare Tips</h3>
            <ul className="space-y-3">
              {aftercare.map((a, i) => (
                <li key={i} className="flex items-start gap-3 bg-white/10 border border-white/10 rounded-xl p-4">
                  <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-white/90 text-sm md:text-base">{a}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ============ LIFESTYLE TIPS — horizontal chip strip ============ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-2xl font-bold text-[#1A1A1A] mb-6">
            Lifestyle Tips to Support Results
          </motion.h3>
          <div className="flex flex-wrap gap-3">
            {lifestyleTips.map((tip, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="flex items-center gap-2 bg-[#1F5E4B]/5 border border-[#1F5E4B]/15 rounded-full px-5 py-3 shadow-sm hover:border-[#1F5E4B]/30 transition-all"
              >
                <TrendingUp className="w-4 h-4 text-[#1F5E4B] flex-shrink-0" />
                <span className="text-sm text-[#1A1A1A]">{tip}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ READING BEFORE/AFTER PHOTOS ============ */}
      <section className="py-20 px-4 bg-[#F9F7F2]">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
            <div className="inline-flex items-center gap-2 bg-[#1F5E4B]/10 text-[#1F5E4B] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Camera className="w-4 h-4" />
              Reading the Evidence
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">How to Read Before-and-After Photos</h2>
            <p className="text-xl text-[#5F5F5F] max-w-3xl">
              Before-and-after photos are genuinely useful, but they can also be misleading if not captured properly. When evaluating your own progress — or anyone else&apos;s photos online — keep these guidelines in mind:
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {photoTips.map((tip, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white rounded-2xl border border-gray-200 p-6 text-center hover:border-[#1F5E4B]/30 hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <h4 className="font-bold text-[#1A1A1A] mb-2">{tip.title}</h4>
                  <p className="text-sm text-[#5F5F5F] leading-relaxed">{tip.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 text-center text-[#5F5F5F] bg-amber-50 border border-amber-200 rounded-2xl p-6 text-sm md:text-base leading-relaxed"
          >
            If a clinic&apos;s before-and-after gallery uses dramatically different lighting, angles, or styling
            between the two photos, treat those results with healthy skepticism.
          </motion.p>
        </div>
      </section>

      {/* ============ WHY RESULTS DIFFER BETWEEN PATIENTS ============ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-6">Why Results Differ Between Patients</h3>
            <p className="text-lg text-[#5F5F5F] leading-relaxed">
              Two patients with seemingly similar hair loss patterns can have very different PRP outcomes. This usually comes down to a combination of follicle viability, hormonal factors, how the body metabolizes and responds to growth factors, and how consistently the treatment plan was followed. It&apos;s one of the reasons ethical clinics avoid showing only their most dramatic results as if they represent the average patient.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ============ COMPARISON TABLE — PRP vs Transplant ============ */}
      <section className="py-20 px-4 bg-[#F9F7F2]" id="compare">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">PRP vs Hair Transplant</h2>
            <p className="text-xl text-[#5F5F5F] max-w-2xl mx-auto">
              Many patients actually use both approaches at different stages — PRP to strengthen surrounding hair after a transplant, for example, rather than choosing one over the other exclusively.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-2xl border border-gray-200 overflow-x-auto shadow-sm">
            <table className="w-full min-w-[500px]">
              <thead>
                <tr className="bg-[#1F5E4B] text-white">
                  <th className="text-left px-6 py-4 font-semibold text-sm">&nbsp;</th>
                  {prpVsTransplant.headers.map((h, i) => (
                    <th key={i} className="text-left px-6 py-4 font-semibold text-sm">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {prpVsTransplant.rows.map((row, i) => (
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-6 bg-white rounded-2xl border border-gray-200 p-6 shadow-sm"
          >
            <h4 className="font-bold text-[#1A1A1A] mb-2">PRP vs Hair Mesotherapy</h4>
            <p className="text-[#5F5F5F] leading-relaxed text-sm md:text-base">
              Hair mesotherapy involves injecting a cocktail of vitamins, minerals, and amino acids into the scalp, while PRP uses your own concentrated platelets. Some clinics combine both approaches. Mesotherapy tends to focus on nourishing the scalp environment, while PRP focuses more directly on stimulating follicle activity through growth factors. Neither is universally &ldquo;better&rdquo; — the right choice depends on your specific hair and scalp assessment. Learn more on our dedicated <Link href="/services/mesotherapy-dubai/" className="text-[#1F5E4B] underline font-semibold">Hair mesotherapy</Link> guide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ============ SUCCESS RATE / RESEARCH ============ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-[#F9F7F2] rounded-2xl border border-gray-200 p-7 shadow-sm">
            <h4 className="font-bold text-[#1A1A1A] mb-2">PRP Success Rate</h4>
            <p className="text-[#5F5F5F] leading-relaxed text-sm">
              It&apos;s tempting to want a single success-rate number, but responsible clinics are cautious here, because reported outcomes vary significantly across studies depending on patient selection, PRP preparation method, and number of sessions. What&apos;s fair to say is that a meaningful proportion of appropriately selected patients — particularly those treated in earlier stages of thinning — report visible improvement in hair density and reduced shedding. We avoid citing a specific percentage as a guarantee, since your personal outcome depends on your unique scalp biology.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-[#F9F7F2] rounded-2xl border border-gray-200 p-7 shadow-sm">
            <h4 className="font-bold text-[#1A1A1A] mb-2">What the Research Says</h4>
            <p className="text-[#5F5F5F] leading-relaxed text-sm">
              PRP for hair restoration has been examined in peer-reviewed medical literature over the past decade, with a number of studies exploring its effects on hair density, thickness, and follicle activity. While findings are generally encouraging for appropriately selected patients, researchers also note variability in study design, PRP preparation protocols, and patient populations — which is part of why the medical community continues to describe PRP as a &ldquo;supportive&rdquo; or &ldquo;adjunctive&rdquo; hair restoration option rather than a guaranteed standalone cure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ============ MYTHS — flip-style cards ============ */}
      <section className="py-20 px-4 bg-[#F9F7F2]" id="myths">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">Common Myths About PRP</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-5">
            {myths.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm"
              >
                <div className="flex items-start gap-3 p-5 bg-red-50 border-b border-red-100">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <p className="text-red-800 font-semibold text-sm md:text-base">Myth: {m.myth}</p>
                </div>
                <div className="flex items-start gap-3 p-5">
                  <Check className="w-5 h-5 text-[#1F5E4B] flex-shrink-0 mt-0.5" />
                  <p className="text-[#5F5F5F] leading-relaxed text-sm md:text-base"><strong>Reality:</strong> {m.reality}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHY CHOOSE RAMACARE — horizontal strip ============ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-6">
              Why Patients Choose RamaCare Polyclinic
            </motion.h3>
            <p className="text-sm md:text-base text-[#5F5F5F] leading-relaxed mb-6">
              Choosing where to have PRP hair treatment done matters just as much as choosing to have it done at all. At RamaCare Polyclinic in Dubai, patients typically choose us because of:
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {whyChoose.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="p-5 border border-gray-100 rounded-2xl shadow-sm bg-[#F9F7F2]/50 hover:border-[#1F5E4B]/20 transition-all"
                >
                  <h4 className="font-bold text-[#1A1A1A] mb-2">{item.title}</h4>
                  <p className="text-sm text-[#5F5F5F] leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
            <p className="text-sm text-[#5F5F5F] leading-relaxed mt-6">
              We&apos;d rather set accurate expectations during your hair PRP consultation than oversell results you might not achieve — that&apos;s part of practicing responsible, ethical medicine.
            </p>
          </div>
          <div className="lg:col-span-5 rounded-2xl overflow-hidden shadow-xl border border-gray-100">
            <img
              src="/images/doctor-examining-scalp-ramacare.jpg"
              alt="Medical scalp evaluation at RamaCare Polyclinic Dubai"
              className="w-full h-[320px] object-cover"
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">Ready to Explore PRP Hair Treatment?</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              If you&apos;re thinking about PRP and want a clear, honest assessment of whether it&apos;s right for your hair and scalp, the next step is a proper in-person consultation. Our team can evaluate your hair loss pattern, walk you through a personalized session plan, and answer any remaining questions about your PRP hair treatment before and after journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <a
                href="https://wa.me/971566597878?text=Hello%20RamaCare%20Polyclinic%2C%20I%20would%20like%20to%20ask%20about%20PRP%20Hair%20Treatment%20before%20and%20after%20journeys."
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
              Understanding what PRP hair treatment before and after results genuinely look like — rather than relying on cherry-picked photos — is one of the most important steps you can take before booking a session. Results build gradually, typically becoming noticeable between months two and six, and they depend heavily on your individual scalp condition, follicle health, and consistency with your treatment plan. PRP isn&apos;t a guaranteed fix for every type of hair loss, but for many patients with early-to-moderate thinning, it can be a genuinely supportive part of a broader hair restoration strategy. If you&apos;re weighing your options for hair loss treatment in Dubai, a personalized consultation remains the most reliable way to understand what realistic PRP hair treatment before and after results could look like for you specifically.
            </p>
          </div>
          <div className="md:col-span-4 rounded-xl overflow-hidden shadow-lg border border-gray-100">
            <img
              src="/images/patient-results-hair-loss-treatment.jpg"
              alt="Patient results after hair loss treatment in Dubai"
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
                className="group bg-white rounded-2xl border border-gray-200 p-6 hover:border-[#1F5E4B]/30 hover:shadow-lg transition-all flex flex-col justify-between">
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

      <ContentReviewBadge doctorName="Dr. Sahar Zomorrodi" pageSlug="prp-hair-treatment-before-and-after" />

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