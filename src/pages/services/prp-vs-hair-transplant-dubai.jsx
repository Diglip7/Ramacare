import Layout from '../../../components/Layout';
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
  Activity,
  Layers,
  Settings,
  DollarSign,
  HeartPulse,
  UserCheck,
  BadgeAlert,
  Briefcase,
  HelpCircle,
} from 'lucide-react';

const SITE_URL = 'https://ramacarepolyclinic.ae';
const PAGE_PATH = '/services/prp-vs-hair-transplant-dubai/';

// ---- Verbatim content data from the draft ----
const hairLossTypes = [
  { title: 'Androgenetic alopecia (pattern hair loss)', desc: 'the most common cause in both men and women, driven largely by genetics and hormone sensitivity in the follicles', icon: Activity },
  { title: 'Telogen effluvium', desc: 'temporary, diffuse shedding often triggered by stress, illness, or nutritional deficiency', icon: HeartPulse },
  { title: 'Traction alopecia', desc: 'gradual thinning caused by tight hairstyles or repeated pulling', icon: Layers },
  { title: 'Age-related thinning', desc: 'a natural, gradual reduction in hair density over time', icon: Clock }
];

const prpSteps = [
  { text: 'A small blood sample is drawn, similar to a routine blood test', icon: Syringe },
  { text: 'The sample is processed in a centrifuge to separate and concentrate the platelets', icon: FlaskConical },
  { text: 'The platelet-rich plasma is injected into the scalp, targeting areas of thinning', icon: ScanLine },
  { text: 'Growth factors within the platelets are believed to support the follicle\'s growth phase and improve local blood supply', icon: Sparkles }
];

const transplantSteps = [
  { text: 'Mapping the donor area and the recipient (thinning or balding) area', icon: Camera },
  { text: 'Harvesting individual follicular units (FUE) or a strip of scalp tissue that is later divided into grafts (FUT)', icon: Layers },
  { text: 'Creating tiny recipient sites in the treatment area, angled to match natural hair growth direction', icon: Settings },
  { text: 'Placing the harvested grafts into the recipient sites', icon: CheckCircle }
];

const keyDifferences = [
  { label: 'Best For', prp: 'Early to moderate thinning, diffuse hair loss', transplant: 'Advanced hair loss, bald patches, receding hairlines' },
  { label: 'Procedure', prp: 'Non-surgical injections using your own plasma', transplant: 'Surgical relocation of donor follicles' },
  { label: 'Recovery', prp: 'Minimal, usually a few days', transplant: 'Longer, typically one to a few weeks' },
  { label: 'Downtime', prp: 'Very low — most resume routine quickly', transplant: 'Moderate — time off work often recommended' },
  { label: 'Hair Growth Timeline', prp: 'Gradual improvements over months', transplant: 'New growth cycle over several months, following initial shedding' },
  { label: 'Number of Sessions', prp: 'Multiple sessions, often with maintenance visits', transplant: 'Usually a single procedure, occasionally staged for larger areas' },
  { label: 'Maintenance', prp: 'Periodic touch-up sessions recommended', transplant: 'Minimal, though PRP is sometimes used to support results' },
  { label: 'Ideal Candidate', prp: 'Thinning hair with active follicles still present', transplant: 'Bald or significantly thinned areas with healthy donor supply' }
];

const recoveryComparison = [
  { label: 'Typical downtime', prp: 'Minimal — often none', transplant: 'Several days to a couple of weeks' },
  { label: 'Visible healing', prp: 'Mild redness or tenderness, days', transplant: 'Scabbing and redness at both donor and recipient sites, weeks' },
  { label: 'Return to work', prp: 'Usually same day or next day', transplant: 'Often several days off recommended' },
  { label: 'Activity restrictions', prp: '24–48 hours', transplant: '1–4 weeks, depending on the technique used' }
];

const risksComparison = [
  { label: 'Common, mild effects', prp: 'Tenderness, minor swelling, temporary redness', transplant: 'Swelling, scabbing, temporary numbness at donor/recipient sites' },
  { label: 'Less common risks', prp: 'Minor bruising, mild headache', transplant: 'Infection, scarring, unnatural-looking growth if poorly planned' },
  { label: 'Recovery-related risk', prp: 'Very low', transplant: 'Requires careful aftercare to reduce infection risk' }
];

const prpIdealCandidate = [
  'Are in the early to moderate stages of thinning, with follicles still active',
  'Want to slow further hair loss rather than restore density in bald areas',
  'Prefer a non-surgical approach with minimal downtime',
  'Are willing to commit to an ongoing series of sessions and maintenance visits',
  'Have realistic expectations about gradual, modest improvement rather than dramatic transformation'
];

const transplantIdealCandidate = [
  'Have areas of significant or complete baldness, not just thinning',
  'Have a healthy, sufficient donor area to harvest follicles from',
  'Are looking for a more permanent, one-time solution rather than ongoing treatments',
  'Are prepared for a longer recovery period and more involved aftercare',
  'Understand that results take several months to fully mature'
];

const lifestyleFactors = [
  { title: 'Stress levels', desc: 'chronic stress can contribute to shedding and may affect how well either treatment performs', icon: Activity },
  { title: 'Diet and nutrition', desc: 'adequate protein, iron, and overall nutrition support healthy hair growth cycles generally', icon: HeartPulse },
  { title: 'Smoking', desc: 'often associated with poorer healing and circulation, which can affect both PRP response and transplant graft survival', icon: BadgeAlert },
  { title: 'Sun exposure and scalp care', desc: 'protecting the scalp, especially during recovery, supports better healing', icon: Shield },
  { title: 'Consistency with follow-up care', desc: 'skipping recommended maintenance sessions or aftercare steps tends to reduce the durability of results for either treatment', icon: CheckCircle }
];

const consultationQuestions = [
  'What stage is my hair loss at, and which follicles are still active?',
  'What outcome is realistic for someone with my specific pattern of hair loss?',
  'How many sessions or procedures would my treatment plan likely involve?',
  'What does recovery look like for me specifically, given my lifestyle and schedule?',
  'What are the risks, and how are they minimized at this clinic?',
  'Could a combination approach make sense for my case?',
  'What happens if my hair loss continues to progress after treatment?'
];

const faqs = [
  { question: 'Is PRP better than a hair transplant?', answer: 'Neither is inherently better — PRP suits early, active thinning, while a hair transplant suits more advanced hair loss or complete baldness. The better fit depends on your individual case.' },
  { question: 'Can PRP regrow lost hair?', answer: 'PRP can support and stimulate existing, active follicles, but it generally cannot regrow hair in areas where follicles have already stopped functioning entirely.' },
  { question: 'Does PRP work after a hair transplant?', answer: 'Yes, PRP is commonly used after a transplant to support healing and encourage transplanted grafts into their new growth cycle, though it isn\'t required for every patient.' },
  { question: 'Which treatment is less painful?', answer: 'PRP is generally described as more comfortable, with mild discomfort during injections. Hair transplants involve more post-procedure soreness, though local anesthesia keeps the procedure itself manageable.' },
  { question: 'How long do PRP results last?', answer: 'PRP results typically require maintenance sessions to sustain, since the stimulating effect on follicles tends to fade gradually without ongoing treatment.' },
  { question: 'Who is not a good candidate for PRP?', answer: 'Patients with completely bald areas and no remaining active follicles, or those with certain blood or clotting conditions, are generally not ideal candidates for PRP — a clinical evaluation can confirm this.' },
  { question: 'Can women choose PRP instead of a transplant?', answer: 'Yes, PRP is commonly used by women with early to moderate thinning, and candidacy is assessed the same way as for men — based on the stage and pattern of hair loss.' },
  { question: 'How long does a hair transplant take to show results?', answer: 'Transplanted hair typically sheds within the first few weeks, then gradually regrows over several months, with more noticeable results usually appearing after six months to a year.' },
  { question: 'Is a hair transplant permanent?', answer: 'Transplanted follicles are generally considered long-lasting since they retain their original resistance to hormonal thinning, though surrounding non-transplanted hair can still change over time.' },
  { question: 'Can I combine PRP and a hair transplant in the same treatment plan?', answer: 'Yes, many specialists recommend combining the two, using PRP to support transplanted grafts and manage thinning in surrounding areas.' },
  { question: 'What is the main difference between FUE and FUT hair transplants?', answer: 'FUE involves extracting individual follicular units directly from the donor area, while FUT involves removing a strip of scalp tissue that is later divided into grafts — the right choice depends on the case.' },
  { question: 'Does PRP hurt more than a hair transplant?', answer: 'Generally no — PRP tends to involve milder, shorter-lived discomfort, while a hair transplant involves a longer window of post-procedure soreness at both donor and recipient sites.' },
  { question: 'How soon can I return to work after each treatment?', answer: 'Most PRP patients return to work the same or next day. Hair transplant patients typically need several days, depending on the extent of the procedure and their job\'s physical demands.' },
  { question: 'Is PRP a one-time treatment?', answer: 'No, PRP is typically delivered as a series of sessions with periodic maintenance visits, rather than a single treatment.' },
  { question: 'What factors affect the cost of PRP versus a hair transplant in Dubai?', answer: 'PRP cost is influenced mainly by the number of sessions and area treated, while hair transplant cost depends more on graft count, technique, and the extent of the procedure — a consultation gives the clearest picture for your case.' }
];

const relatedGuides = [
  { title: 'Hair PRP Treatment in Dubai', desc: 'Explore the full breakdown of the PRP procedure itself, including what a typical session involves.', href: '/services/hair-prp-dubai/' },
  { title: 'PRP Hair Treatment Before and After', desc: 'See a realistic, month-by-month picture of how PRP results typically build over time.', href: '/services/prp-hair-treatment-before-and-after/' },
  { title: 'PRP Hair Treatment Recovery', desc: 'A day-by-day look at what to expect after a PRP session, from the first 24 hours through full recovery.', href: '/services/prp-hair-treatment-recovery/' },
  { title: 'Hair Loss Treatment in Dubai', desc: 'A broader look at hair loss treatment options if you\'re still comparing approaches beyond PRP and transplants.', href: '/services/hair-loss-dubai/' },
  { title: 'Hair Fall Treatment in Dubai', desc: 'Useful if ongoing shedding, rather than pattern baldness, is your primary concern.', href: '/services/hair-treatment-dubai/' },
  { title: 'PRP Hair Treatment Cost in Dubai', desc: 'A transparent look at the factors that typically influence PRP pricing.', href: '/services/hair-prp-cost-dubai/' },
  { title: 'Hair Growth Treatment in Dubai', desc: 'Covers additional treatments that can complement PRP or support results after a transplant.', href: '/services/hair-growth-dubai/' },
  { title: 'Hair Mesotherapy in Dubai', desc: 'Compare mesotherapy\'s approach and recovery profile against PRP to see which suits your goals.', href: '/services/mesotherapy-dubai/' }
];

const navItems = [
  { id: 'hair-loss', label: 'Hair Loss' },
  { id: 'treatments', label: 'How They Work' },
  { id: 'differences', label: 'Key Differences' },
  { id: 'candidacy', label: 'Candidacy' },
  { id: 'faqs', label: 'FAQs' }
];

export default function PrpVsTransplantPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [activeSection, setActiveSection] = useState('hair-loss');

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
        <title key="title">PRP vs Hair Transplant in Dubai: Which Is Better? | RamaCare</title>
        <meta
          name="description"
          content="Deciding between PRP vs Hair Transplant in Dubai? Compare costs, recovery, results, and candidacy honestly at RamaCare Polyclinic, Dubai."
          key="description"
        />
        <meta property="og:title" content="PRP vs Hair Transplant in Dubai | RamaCare Polyclinic" key="og:title" />
        <meta
          property="og:description"
          content="Balanced, medically grounded comparison between PRP therapy and surgical hair transplants."
          key="og:description"
        />
        <meta property="og:type" content="website" key="og:type" />
        <meta name="twitter:title" content="PRP vs Hair Transplant Comparison — RamaCare Polyclinic" key="twitter:title" />
        <meta
          name="twitter:description"
          content="Deciding between non-surgical PRP and surgical hair transplants? Learn which suits your stage of hair loss."
          key="twitter:description"
        />

        <script
          key="schema-article"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'MedicalWebPage',
              about: {
                '@type': 'MedicalProcedure',
                name: 'PRP vs Hair Transplant Comparison',
                description:
                  'A balanced comparison between Platelet Rich Plasma therapy and surgical hair transplantation methods.',
                procedureType: 'https://schema.org/NoninvasiveProcedure',
              },
            }),
          }}
        />
        <script
          key="schema-faq"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: faqs.map((f) => ({
                '@type': 'Question',
                name: f.question,
                acceptedAnswer: { '@type': 'Answer', text: f.answer },
              })),
            }),
          }}
        />
        <script
          key="schema-breadcrumb"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ramacarepolyclinic.ae/' },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: 'PRP vs Hair Transplant',
                  item: 'https://ramacarepolyclinic.ae/services/prp-vs-hair-transplant-dubai/',
                },
              ],
            }),
          }}
        />
        <script
          key="schema-clinic"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'MedicalClinic',
              name: 'RamaCare Polyclinic',
              url: 'https://ramacarepolyclinic.ae/',
              medicalSpecialty: 'Dermatology',
              address: { '@type': 'PostalAddress', addressLocality: 'Jumeirah 1', addressRegion: 'Dubai', addressCountry: 'AE' },
              priceRange: '$$',
            }),
          }}
        />
      </Head>
      {/* ============ ELITE PREMIUM HERO WITH SPLIT CARDS ============ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#FDFCF7] via-[#F4F1EA] to-[#E6EFEA] pt-8 md:pt-12 pb-20 lg:pb-28 border-b border-gray-200">
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
          <div className="absolute w-[40rem] h-[40rem] bg-[#1F5E4B]/5 rounded-full -top-40 -left-40 blur-3xl" />
          <div className="absolute w-96 h-96 bg-[#C5A880]/10 rounded-full bottom-10 right-10 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-6 md:mb-8 flex items-center text-xs font-medium text-[#5F5F5F] gap-1.5">
            <Link href="/" className="hover:text-[#1F5E4B] transition-colors">Home</Link>
            <span className="mx-1">/</span>
            <span className="text-[#1F5E4B]">PRP vs Hair Transplant</span>
          </nav>
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#1F5E4B]/10 border border-[#1F5E4B]/20 px-4 py-2 rounded-full text-xs font-bold text-[#1F5E4B] tracking-wide uppercase">
                <Users className="w-3.5 h-3.5" />
                Dermatology &amp; Hair Restoration
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-[#1A1A1A] leading-[1.12]">
                PRP vs Hair Transplant in Dubai: <span className="text-[#1F5E4B]">Which One Fits Your Journey?</span>
              </h1>
              <div className="text-sm md:text-base text-[#5F5F5F] space-y-4 leading-relaxed">
                <p>
                  Hair loss is one of the most common concerns people bring to a dermatologist or hair specialist, and it&apos;s also one of the most confusing to research on your own. Search &quot;PRP vs Hair Transplant in Dubai&quot; and you&apos;ll find dozens of opinions, but very few clear, balanced explanations of how the two treatments actually differ and who each one suits.
                </p>
                <p>
                  Hair thinning can come from several directions — genetics, hormonal shifts, stress, nutritional gaps, or simply age. Because the causes vary so much from person to person, the right treatment isn&apos;t the same for everyone either. Someone in the early stages of thinning may respond well to a non-surgical option, while someone with more extensive, long-standing hair loss may need a different approach altogether.
                </p>
                <p>
                  That&apos;s really the heart of the PRP vs Hair Transplant in Dubai decision: it&apos;s not about which treatment is &quot;better&quot; in the abstract, but which one matches your stage of hair loss, your goals, and your lifestyle. At RamaCare Polyclinic in Dubai, we sit down with every patient to walk through both options honestly, including where each one falls short, before recommending a path forward. This guide breaks down how PRP and hair transplants work, how they compare across results, recovery, cost factors, and candidacy, and how a specialist typically decides which one fits your situation.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/book-appointment/"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#1F5E4B] px-8 py-4 text-sm font-bold text-white hover:bg-[#17493A] transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  <Calendar className="w-4 h-4" /> Book Consultation
                </Link>
                <a
                  href="https://wa.me/971566597878?text=Hello%20RamaCare%20Polyclinic%2C%20I%20would%20like%20to%20ask%20about%20the%20differences%20between%20PRP%20and%20Hair%20Transplant%20options."
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-flex items-center gap-2 rounded-xl border-2 border-[#1F5E4B]/30 px-8 py-4 text-sm font-bold text-[#1F5E4B] bg-white hover:bg-gray-50 transition-all shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5">
                
              <div className="bg-white rounded-3xl p-6 border-2 border-[#1F5E4B]/15 shadow-[0_20px_50px_rgba(31,94,75,0.06)] space-y-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#E6EFEA] rounded-full -mr-8 -mt-8 pointer-events-none" />
                <h3 className="font-bold text-[#1A1A1A] text-lg flex items-center gap-2 border-b border-gray-100 pb-3">
                  <Shield className="w-5 h-5 text-[#1F5E4B]" />
                  Comparative Insights
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 bg-[#E6EFEA]/30 p-4 rounded-2xl border border-[#1F5E4B]/10">
                    <div className="w-8 h-8 rounded-full bg-[#1F5E4B] text-white flex items-center justify-center shrink-0 font-bold text-xs shadow">PRP</div>
                    <p className="text-xs md:text-sm text-[#5F5F5F] leading-relaxed"><strong>Stimulation:</strong> Uses concentrated growth factors to revitalize thinning hair and active follicles.</p>
                  </div>
                  <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-2xl border border-gray-200/60">
                    <div className="w-8 h-8 rounded-full bg-[#C5A880] text-white flex items-center justify-center shrink-0 font-bold text-xs shadow">HT</div>
                    <p className="text-xs md:text-sm text-[#5F5F5F] leading-relaxed"><strong>Relocation:</strong> Surgically redistributes healthy donor follicles into completely bald regions.</p>
                  </div>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md border border-gray-150">
                  <img
                    src="/images/hair-consultation-ramacare-prp1.jpg"
                    alt="Dermatologist consultation for hair loss treatments in Dubai"
                    className="w-full h-[220px] object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============ STICKY NAVIGATION ============ */}
      <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1 overflow-x-auto no-scrollbar py-3">
            {navItems.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={`whitespace-nowrap px-5 py-2.5 rounded-full text-xs md:text-sm font-bold transition-all ${activeSection === s.id
                  ? 'bg-[#1F5E4B] text-white shadow-md'
                  : 'text-[#5F5F5F] hover:bg-[#1F5E4B]/10 hover:text-[#1F5E4B]'
                  }`}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ============ SECTION 1: UNDERSTANDING HAIR LOSS (Premium Grid Cards) ============ */}
      <section id="hair-loss" className="py-24 px-4 bg-white scroll-mt-16">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#1F5E4B]/10 text-[#1F5E4B] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider">
              <Activity className="w-3.5 h-3.5" />
              Scalp Diagnostics
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A]">Understanding Hair Loss</h2>
            <p className="text-[#5F5F5F] leading-relaxed text-sm md:text-base">
              Before comparing treatments, it helps to understand what&apos;s actually happening to the hair. Most hair loss falls into a few broad categories:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {hairLossTypes.map((type, i) => (
                <div key={i} className="group bg-[#FDFCF7] p-5 rounded-2xl border-2 border-gray-150/70 hover:border-[#1F5E4B]/30 hover:shadow-md transition-all duration-300">
                  <div className="w-9 h-9 rounded-xl bg-[#E6EFEA] text-[#1F5E4B] flex items-center justify-center mb-3 group-hover:bg-[#1F5E4B] group-hover:text-white transition-all shadow-sm">
                    <type.icon className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-[#1A1A1A] text-sm mb-1">{type.title}</h4>
                  <p className="text-xs text-[#5F5F5F] leading-relaxed">{type.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-[#5F5F5F] leading-relaxed text-sm md:text-base border-t border-gray-100 pt-4">
              The type and stage of hair loss matters enormously when choosing between treatments. PRP tends to work best where follicles are thinning but still present and active. A hair transplant, by contrast, is designed for areas where follicles have stopped producing hair altogether. A proper diagnosis — not a guess based on how your hairline looks in the mirror — is the starting point for any treatment decision, which is why an initial evaluation with a <Link href="/services/best-hair-specialist-dubai/" className="text-[#1F5E4B] underline font-semibold hover:text-[#2A7D63]">hair specialist in Dubai</Link> is worth doing before committing to either path.
            </p>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1F5E4B]/10 to-transparent rounded-3xl -rotate-2 transform scale-105" />
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white">
              <img
                src="/images/doctor-examining-scalp-ramacare1.jpg"
                alt="Scalp examination under hair diagnostics"
                className="w-full h-[380px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============ TREATMENT OVERVIEW WITH COLORED BORDERS ============ */}
      <section className="py-20 px-4 bg-[#FDFCF7] border-y border-gray-200">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-3xl border-2 border-[#1F5E4B]/15 hover:border-[#1F5E4B]/40 shadow-sm space-y-4 transition-all duration-300">
            <span className="inline-block bg-[#E6EFEA] text-[#1F5E4B] text-xs font-bold uppercase px-3 py-1 rounded-md">Non-Surgical Stimulation</span>
            <h3 className="text-2xl font-bold text-[#1A1A1A]">What Is PRP Hair Treatment?</h3>
            <p className="text-sm text-[#5F5F5F] leading-relaxed">
              PRP, or Platelet Rich Plasma therapy, is a non-surgical treatment that uses a concentrated portion of your own blood platelets to stimulate hair follicles. It&apos;s grown popular as an accessible entry point into hair restoration precisely because it involves no incisions, no grafts, and comparatively little downtime.
            </p>
            <p className="text-sm text-[#5F5F5F] leading-relaxed">
              <Link href="/services/hair-prp-dubai/" className="text-[#1F5E4B] underline font-semibold hover:text-[#2A7D63]">Hair PRP Treatment in Dubai</Link> is typically offered as a series of sessions rather than a single visit, since the growth-factor stimulation builds gradually over repeated treatments. It&apos;s often positioned as a way to slow further thinning and support the health of existing follicles, rather than as a method for creating hair where none currently exists.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border-2 border-[#C5A880]/20 hover:border-[#C5A880]/50 shadow-sm space-y-4 transition-all duration-300">
            <span className="inline-block bg-[#FDF7EE] text-[#C5A880] text-xs font-bold uppercase px-3 py-1 rounded-md">Surgical Relocation</span>
            <h3 className="text-2xl font-bold text-[#1A1A1A]">What Is a Hair Transplant?</h3>
            <p className="text-sm text-[#5F5F5F] leading-relaxed">
              A hair transplant is a surgical procedure that physically relocates hair follicles from a donor area — usually the back or sides of the scalp, where hair tends to be more resistant to hormonal thinning — to the areas experiencing hair loss. Unlike PRP, a transplant can restore visible density in areas that are already bald or significantly thinned, because it introduces new, functioning follicles rather than stimulating existing ones.
            </p>
            <p className="text-sm text-[#5F5F5F] leading-relaxed">
              The two main techniques are Follicular Unit Extraction (FUE) and Follicular Unit Transplantation (FUT), which differ mainly in how the donor follicles are harvested. Both aim for a natural-looking hairline and distribution, but the choice between them depends on factors like the size of the area being treated and the patient&apos;s donor hair characteristics.
            </p>
          </div>
        </div>
      </section>

      {/* ============ SECTION 2: HOW THEY WORK (Premium Alternating Stepper) ============ */}
      <section id="treatments" className="py-24 px-4 bg-white scroll-mt-16">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A]">How the Treatments Work</h2>
            <p className="text-sm text-[#5F5F5F]">A step-by-step comparative look at the clinical biological processes.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* PRP STEPPER */}
            <div className="bg-[#E6EFEA]/30 p-8 rounded-3xl border border-[#1F5E4B]/15 space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#1F5E4B]/5 rounded-full pointer-events-none -mr-10 -mt-10" />
              <h3 className="text-2xl font-bold text-[#1F5E4B] flex items-center gap-2.5 border-b border-[#1F5E4B]/15 pb-4">
                <Syringe className="w-6 h-6" />
                How PRP Works
              </h3>
              <div className="space-y-6 relative pl-4 border-l border-[#1F5E4B]/20 ml-2">
                {prpSteps.map((step, i) => (
                  <div key={i} className="relative group">
                    <span className="absolute -left-[29px] top-0.5 w-6 h-6 rounded-full bg-[#1F5E4B] text-white text-xs font-bold flex items-center justify-center shadow">
                      {i + 1}
                    </span>
                    <div className="flex gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100 group-hover:border-[#1F5E4B]/30 group-hover:shadow transition-all duration-300 ml-4">
                      <div className="w-8 h-8 rounded-lg bg-[#E6EFEA] text-[#1F5E4B] flex items-center justify-center shrink-0">
                        <step.icon className="w-4 h-4" />
                      </div>
                      <p className="text-sm text-[#5F5F5F] leading-relaxed pt-0.5">{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-[#5F5F5F] leading-relaxed italic bg-white p-4 rounded-xl border border-gray-150 shadow-sm">
                Because PRP works with your body&apos;s own biological signaling rather than introducing new tissue, its effects tend to build gradually across a treatment series rather than appearing after one visit.
              </p>
            </div>

            {/* TRANSPLANT STEPPER */}
            <div className="bg-[#FDF7EE]/40 p-8 rounded-3xl border border-[#C5A880]/30 space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#C5A880]/5 rounded-full pointer-events-none -mr-10 -mt-10" />
              <h3 className="text-2xl font-bold text-[#C5A880] flex items-center gap-2.5 border-b border-[#C5A880]/20 pb-4">
                <Settings className="w-6 h-6" />
                How Hair Transplants Work
              </h3>
              <div className="space-y-6 relative pl-4 border-l border-[#C5A880]/30 ml-2">
                {transplantSteps.map((step, i) => (
                  <div key={i} className="relative group">
                    <span className="absolute -left-[29px] top-0.5 w-6 h-6 rounded-full bg-[#C5A880] text-white text-xs font-bold flex items-center justify-center shadow">
                      {i + 5}
                    </span>
                    <div className="flex gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100 group-hover:border-[#C5A880]/30 group-hover:shadow transition-all duration-300 ml-4">
                      <div className="w-8 h-8 rounded-lg bg-[#FDF7EE] text-[#C5A880] flex items-center justify-center shrink-0">
                        <step.icon className="w-4 h-4" />
                      </div>
                      <p className="text-sm text-[#5F5F5F] leading-relaxed pt-0.5">{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-[#5F5F5F] leading-relaxed italic bg-white p-4 rounded-xl border border-gray-150 shadow-sm">
                The transplanted follicles typically shed within the first few weeks — a normal and expected part of the process — before entering a new growth cycle in their relocated position over the following months.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SECTION 3: KEY DIFFERENCES (Vertical comparative cards with visual indicators) ============ */}
      <section id="differences" className="py-24 px-4 bg-[#F9F7F2] scroll-mt-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A]">PRP vs Hair Transplant: Key Differences</h2>
            <p className="text-sm text-[#5F5F5F]">
              PRP is a non-surgical treatment that stimulates existing follicles, while a hair transplant surgically relocates active follicles into thinning or bald areas. PRP suits early, diffuse thinning; transplants suit more advanced or localized hair loss.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* PRP Summary Card */}
            <div className="bg-white p-8 rounded-3xl border-2 border-[#1F5E4B]/15 shadow-sm space-y-5 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                <h4 className="font-bold text-lg text-[#1F5E4B]">PRP Hair Treatment</h4>
                <span className="bg-[#E6EFEA] text-[#1F5E4B] text-[10px] font-bold px-2 py-0.5 rounded-full">Stimulation</span>
              </div>
              <div className="divide-y divide-gray-100">
                {keyDifferences.map((item, i) => (
                  <div key={i} className="flex justify-between items-start gap-4 text-xs md:text-sm py-3">
                    <span className="text-[#1A1A1A] font-bold shrink-0">{item.label}</span>
                    <span className="text-[#5F5F5F] text-right">{item.prp}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hair Transplant Summary Card */}
            <div className="bg-white p-8 rounded-3xl border-2 border-[#C5A880]/20 shadow-sm space-y-5 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                <h4 className="font-bold text-lg text-[#C5A880]">Hair Transplant</h4>
                <span className="bg-[#FDF7EE] text-[#C5A880] text-[10px] font-bold px-2 py-0.5 rounded-full">Surgery</span>
              </div>
              <div className="divide-y divide-gray-100">
                {keyDifferences.map((item, i) => (
                  <div key={i} className="flex justify-between items-start gap-4 text-xs md:text-sm py-3">
                    <span className="text-[#1A1A1A] font-bold shrink-0">{item.label}</span>
                    <span className="text-[#5F5F5F] text-right">{item.transplant}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ EARLY VS ADVANCED HAIR LOSS ============ */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="bg-[#E6EFEA]/20 p-8 rounded-3xl border border-[#1F5E4B]/15 space-y-4">
            <h3 className="text-2xl font-bold text-[#1A1A1A]">Which Treatment Is Better for Early Hair Loss?</h3>
            <p className="text-sm md:text-base text-[#5F5F5F] leading-relaxed">
              For early-stage thinning — where hair is becoming finer or less dense but hasn&apos;t disappeared entirely — PRP is often the first option a specialist will discuss. The logic is straightforward: PRP works by supporting follicles that are still active, so it tends to be most effective before those follicles have gone dormant.
            </p>
            <p className="text-sm md:text-base text-[#5F5F5F] leading-relaxed">
              This is also the stage where <Link href="/services/hair-loss-dubai/" className="text-[#1F5E4B] underline font-semibold hover:text-[#2A7D63]">non-invasive hair loss treatment in Dubai</Link> options in general tend to offer the most favorable outcomes, since there&apos;s more existing biology to work with. Catching thinning early and addressing it proactively, rather than waiting to see how it progresses, generally gives a wider range of treatment choices.
            </p>
          </div>

          <div className="bg-[#FDF7EE]/30 p-8 rounded-3xl border border-[#C5A880]/30 space-y-4">
            <h3 className="text-2xl font-bold text-[#1A1A1A]">Which Option Is Better for Advanced Hair Loss?</h3>
            <p className="text-sm md:text-base text-[#5F5F5F] leading-relaxed">
              Once an area has been bald for an extended period, the follicles there are typically no longer active, and no amount of biological stimulation can restart something that isn&apos;t present. This is where a hair transplant becomes the more realistic option, since it introduces new follicles rather than relying on existing ones.
            </p>
            <p className="text-sm md:text-base text-[#5F5F5F] leading-relaxed">
              That said, &quot;advanced&quot; doesn&apos;t automatically rule out every non-surgical approach. Some patients with advanced loss in one area still have areas of thinning, rather than complete baldness, elsewhere on the scalp — and a specialist may recommend a transplant for the bald regions alongside supportive treatment for the thinning ones.
            </p>
          </div>
        </div>
      </section>

      {/* ============ PRP VS HAIR TRANSPLANT RESULTS ============ */}
      <section className="py-20 px-4 bg-[#F9F7F2] border-y border-gray-200">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="w-12 h-12 rounded-full bg-[#1F5E4B]/10 flex items-center justify-center mx-auto text-[#1F5E4B]">
            <Sparkles className="w-6 h-6" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-[#1A1A1A]">PRP vs Hair Transplant Results</h3>
          <p className="text-sm md:text-base text-[#5F5F5F] leading-relaxed">
            PRP typically produces subtler improvements in hair density and thickness, visible gradually over months. Hair transplant results are generally more dramatic and visible, since new follicles are physically placed in previously bald areas — but they also take months to mature into their final appearance.
          </p>
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm text-sm text-[#5F5F5F] leading-relaxed max-w-3xl mx-auto">
            It&apos;s worth setting expectations honestly for both. PRP is not designed to reverse complete baldness, and results vary from patient to patient depending on how much active follicle activity remains. Hair transplants, while more visually transformative, also depend heavily on the surgeon&apos;s technique, the density and quality of the donor area, and how well the patient follows post-procedure care. For a realistic sense of how PRP outcomes typically progress, our <Link href="/services/prp-hair-treatment-before-and-after/" className="text-[#1F5E4B] underline font-semibold hover:text-[#2A7D63]">PRP Hair Treatment Before and After</Link> guide walks through the month-by-month pattern many patients experience.
          </div>
        </div>
      </section>

      {/* ============ RECOVERY & PROCEDURE TABLES WITH HIGHLIGHTS ============ */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Recovery Comparison Table */}
          <div className="space-y-6 bg-[#FDFCF7] p-8 rounded-3xl border-2 border-gray-200/80">
            <h3 className="text-2xl font-bold text-[#1A1A1A] flex items-center gap-2">
              <Clock className="w-5.5 h-5.5 text-[#1F5E4B]" />
              Recovery Time Comparison
            </h3>
            <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm bg-white">
              <table className="w-full min-w-[400px]">
                <thead>
                  <tr className="bg-[#1F5E4B] text-white text-xs md:text-sm">
                    <th className="px-4 py-3 text-left">Feature</th>
                    <th className="px-4 py-3 text-left">PRP Recovery</th>
                    <th className="px-4 py-3 text-left">Hair Transplant</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-150 text-[#5F5F5F] text-xs md:text-sm">
                  {recoveryComparison.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                      <td className="px-4 py-3 font-bold text-[#1A1A1A]">{row.label}</td>
                      <td className="px-4 py-3">{row.prp}</td>
                      <td className="px-4 py-3">{row.transplant}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs md:text-sm text-[#5F5F5F] leading-relaxed italic">
              PRP recovery is generally quick and low-key, which is one reason it appeals to patients who don&apos;t want treatment to interrupt their routine. For a detailed, day-by-day breakdown of what recovery actually feels like, see our full guide to <Link href="/services/prp-hair-treatment-recovery/" className="text-[#1F5E4B] underline font-semibold hover:text-[#2A7D63]">PRP Hair Treatment Recovery</Link>. Hair transplant recovery takes longer and involves more visible healing, though most of the more noticeable effects — scabbing, redness — resolve within the first couple of weeks.
            </p>
          </div>

          {/* Pain & Comfort Details */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#1A1A1A] flex items-center gap-2">
              <Shield className="w-5.5 h-5.5 text-[#1F5E4B]" />
              Procedure &amp; Comfort Profile
            </h3>
            <div className="space-y-4">
              <div className="bg-white p-5 rounded-2xl border border-gray-150 shadow-sm hover:border-[#1F5E4B]/20 transition-all">
                <h4 className="font-bold text-[#1A1A1A] text-sm mb-1.5 flex items-center gap-2">
                  <Settings className="w-4 h-4 text-[#1F5E4B]" /> Complexity of Procedure
                </h4>
                <p className="text-xs md:text-sm text-[#5F5F5F] leading-relaxed">
                  A PRP session is typically completed within an hour and requires no anesthesia beyond a topical numbing agent, if used at all. A hair transplant is a longer, more involved procedure — often several hours, depending on the number of grafts — and requires local anesthesia across the donor and recipient areas. This difference in complexity is part of why the two treatments sit at different points on the invasiveness spectrum, even though both are performed on an outpatient basis.
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-gray-150 shadow-sm hover:border-[#1F5E4B]/20 transition-all">
                <h4 className="font-bold text-[#1A1A1A] text-sm mb-1.5 flex items-center gap-2">
                  <HeartPulse className="w-4 h-4 text-[#1F5E4B]" /> Pain and Comfort
                </h4>
                <p className="text-xs md:text-sm text-[#5F5F5F] leading-relaxed">
                  PRP is generally well tolerated, with most patients describing the sensation as mild pinching or pressure during the injections, and some tenderness afterward. Hair transplants involve more discomfort during the procedure itself, though local anesthesia keeps this manageable, and post-procedure soreness at the donor and recipient sites is common for the first several days. Neither treatment is typically described as severely painful, but transplants involve a longer window of post-procedure sensitivity.
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-gray-150 shadow-sm hover:border-[#1F5E4B]/20 transition-all">
                <h4 className="font-bold text-[#1A1A1A] text-sm mb-1.5 flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-[#1F5E4B]" /> Downtime and Schedule
                </h4>
                <p className="text-xs md:text-sm text-[#5F5F5F] leading-relaxed">
                  Downtime is one of the more practical, day-to-day factors patients weigh. PRP&apos;s downtime is minimal enough that many patients schedule sessions around a lunch break or a light workday. Hair transplants require more deliberate planning — most clinics recommend at least a few days away from strenuous activity and public appearances, since the donor and recipient areas need visible time to heal before scabbing fully resolves.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ THREE COLUMN CARDS WITH DECORATIVE BORDERS ============ */}
      <section className="py-24 px-4 bg-[#F9F7F2] border-y border-gray-200">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-3xl border-t-4 border-[#1F5E4B] border-x border-b border-gray-150 shadow-sm hover:shadow-md transition-shadow space-y-3">
            <h4 className="font-bold text-base text-[#1A1A1A]">Number of Sessions Required</h4>
            <p className="text-xs md:text-sm text-[#5F5F5F] leading-relaxed">
              PRP is designed around a series of sessions, typically spaced several weeks apart initially, followed by periodic maintenance visits to sustain results. A hair transplant is usually a single procedure, though very large or advanced cases are sometimes staged across more than one session. This is a meaningful difference in commitment: PRP asks for ongoing visits over time, while a transplant front-loads the commitment into one (or occasionally two) larger procedures.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border-t-4 border-[#C5A880] border-x border-b border-gray-150 shadow-sm hover:shadow-md transition-shadow space-y-3">
            <h4 className="font-bold text-base text-[#1A1A1A]">Longevity of Results</h4>
            <p className="text-xs md:text-sm text-[#5F5F5F] leading-relaxed">
              PRP&apos;s effects are generally considered to require maintenance — without periodic touch-up sessions, the stimulating effect on existing follicles tends to fade over time. Hair transplant results, by contrast, are generally considered long-lasting, since the relocated follicles typically retain their original resistance to the hormonal factors that caused hair loss in their original location. That said, &quot;long-lasting&quot; doesn&apos;t mean &quot;immune to future change&quot; — surrounding non-transplanted hair can continue to thin naturally, which is one reason some patients pursue PRP alongside a transplant to support the hair around the transplanted area.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border-t-4 border-[#1F5E4B] border-x border-b border-gray-150 shadow-sm hover:shadow-md transition-shadow space-y-3">
            <h4 className="font-bold text-base text-[#1A1A1A]">Can PRP Be Combined?</h4>
            <p className="text-xs md:text-sm text-[#5F5F5F] leading-relaxed">
              Yes — this is actually one of the more common approaches in modern hair restoration, rather than an either/or decision. PRP is sometimes used before a transplant to assess how existing follicles respond, and more frequently used after a transplant to support the healing process and encourage the transplanted grafts into their new growth cycle. It may also be used on surrounding non-transplanted areas to help manage ongoing thinning that the transplant itself doesn&apos;t address.
            </p>
          </div>
        </div>
      </section>

      {/* ============ RISKS TABLE ============ */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto space-y-6">
          <h3 className="text-2xl font-bold text-[#1A1A1A] text-center">Risks &amp; Side Effects Matrix</h3>
          <div className="overflow-x-auto rounded-2xl border border-gray-250 shadow-sm bg-white">
            <table className="w-full min-w-[550px]">
              <thead>
                <tr className="bg-[#1F5E4B] text-white text-xs md:text-sm">
                  <th className="px-6 py-4 text-left">Risk Assessment</th>
                  <th className="px-6 py-4 text-left">PRP Therapy</th>
                  <th className="px-6 py-4 text-left">Hair Transplant</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-[#5F5F5F] text-xs md:text-sm">
                {risksComparison.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                    <td className="px-6 py-4 font-bold text-[#1A1A1A]">{row.label}</td>
                    <td className="px-6 py-4">{row.prp}</td>
                    <td className="px-6 py-4">{row.transplant}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-center text-[#5F5F5F] max-w-2xl mx-auto leading-relaxed border-t border-gray-100 pt-3">
            Both treatments are generally considered safe when performed by qualified professionals, but as with any medical procedure, risks exist and outcomes aren&apos;t guaranteed. A thorough consultation should always include an honest discussion of what could go wrong, not just the best-case scenario.
          </p>
        </div>
      </section>

      {/* ============ SUCCESS RATES ============ */}
      <section className="py-20 px-4 bg-[#F9F7F2] border-y border-gray-200">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="w-12 h-12 rounded-full bg-[#1F5E4B]/10 flex items-center justify-center mx-auto text-[#1F5E4B]">
            <CheckCircle className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold text-[#1A1A1A]">Success Rates</h3>
          <p className="text-sm md:text-base text-[#5F5F5F] leading-relaxed max-w-3xl mx-auto">
            Success for PRP is typically measured in terms of reduced shedding and modest improvements in hair thickness and density — outcomes that are real but incremental, and that vary based on how much active follicle function remains. Success for hair transplants is generally measured by graft survival rate and the naturalness of the final hairline, which depend heavily on surgical technique and the patient&apos;s own healing response. Neither treatment can promise a specific numerical outcome for an individual patient, and any provider who guarantees an exact result is a red flag worth taking seriously.
          </p>
        </div>
      </section>

      {/* ============ SECTION 4: CANDIDACY (Elite Layout Cards) ============ */}
      <section id="candidacy" className="py-24 px-4 bg-white scroll-mt-16">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A]">Candidacy Guidelines</h2>
            <p className="text-sm text-[#5F5F5F]">Identify which option aligns with your goals and hair condition.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* PRP CANDIDACY */}
            <div className="border-2 border-[#1F5E4B]/20 p-8 rounded-3xl shadow-[0_10px_35px_rgba(31,94,75,0.03)] bg-[#F0F7F4]/40 space-y-6">
              <div className="flex items-center gap-3 border-b border-[#1F5E4B]/15 pb-4">
                <div className="w-10 h-10 rounded-full bg-[#1F5E4B] text-white flex items-center justify-center font-bold shadow">
                  <UserCheck className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-[#1F5E4B]">Ideal Candidate for PRP</h3>
              </div>
              <ul className="space-y-4">
                {prpIdealCandidate.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#5F5F5F] leading-relaxed">
                    <CheckCircle className="w-5 h-5 text-[#1F5E4B] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* TRANSPLANT CANDIDACY */}
            <div className="border-2 border-[#C5A880]/20 p-8 rounded-3xl shadow-[0_10px_35px_rgba(197,168,128,0.03)] bg-[#FDF7EE]/30 space-y-6">
              <div className="flex items-center gap-3 border-b border-[#C5A880]/20 pb-4">
                <div className="w-10 h-10 rounded-full bg-[#C5A880] text-white flex items-center justify-center font-bold shadow">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-[#C5A880]">Ideal Candidate for Transplant</h3>
              </div>
              <ul className="space-y-4">
                {transplantIdealCandidate.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#5F5F5F] leading-relaxed">
                    <CheckCircle className="w-5 h-5 text-[#C5A880] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============ LIFESTYLE FACTORS & QUESTIONS ============ */}
      <section className="py-24 px-4 bg-[#F9F7F2] border-t border-gray-200">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-3xl font-bold text-[#1A1A1A]">Lifestyle Factors That Influence Results</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {lifestyleFactors.map((item, i) => (
                <div key={i} className="bg-white p-5 rounded-2xl border border-gray-150 shadow-sm flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#E6EFEA] text-[#1F5E4B] flex items-center justify-center shrink-0">
                    <item.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-bold text-[#1A1A1A] text-sm mb-0.5">{item.title}</h5>
                    <p className="text-[11px] text-[#5F5F5F] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 bg-white p-8 rounded-3xl border-2 border-gray-200 shadow-xl space-y-5">
            <h4 className="font-bold text-lg text-[#1A1A1A] flex items-center gap-2 border-b border-gray-100 pb-3">
              <Check className="w-5 h-5 text-[#1F5E4B]" />
              Questions to Ask
            </h4>
            <ul className="space-y-3.5">
              {consultationQuestions.map((q, i) => (
                <li key={i} className="flex items-start gap-3 text-xs md:text-sm text-[#5F5F5F] leading-relaxed">
                  <input type="checkbox" readOnly checked className="mt-1 accent-[#1F5E4B] pointer-events-none" />
                  <span>{q}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ============ COST COMPARISON (Premium Metric Box) ============ */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto space-y-6">
          <h3 className="text-3xl font-bold text-[#1A1A1A] text-center">Cost Comparison in Dubai</h3>
          <p className="text-sm md:text-base text-[#5F5F5F] leading-relaxed text-center">
            PRP is generally less expensive per session than a hair transplant, but requires ongoing sessions over time, while a transplant involves a larger upfront cost for what&apos;s typically a one-time procedure. Actual pricing depends on your specific case.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 pt-4">
            <div className="border-2 border-[#1F5E4B]/15 p-6 rounded-2xl bg-[#E6EFEA]/15 shadow-sm space-y-3">
              <h4 className="font-bold text-sm text-[#1F5E4B] mb-2 uppercase tracking-wider flex items-center gap-2">
                <DollarSign className="w-4 h-4" /> PRP Cost Influencers
              </h4>
              <ul className="list-disc pl-5 space-y-2 text-xs text-[#5F5F5F]">
                <li>Number of sessions recommended in your treatment plan</li>
                <li>The extent of the scalp area being treated</li>
                <li>Whether maintenance sessions are bundled into a package</li>
              </ul>
            </div>

            <div className="border-2 border-[#C5A880]/20 p-6 rounded-2xl bg-[#FDF7EE]/20 shadow-sm space-y-3">
              <h4 className="font-bold text-sm text-[#C5A880] mb-2 uppercase tracking-wider flex items-center gap-2">
                <DollarSign className="w-4 h-4" /> Transplant Cost Influencers
              </h4>
              <ul className="list-disc pl-5 space-y-2 text-xs text-[#5F5F5F]">
                <li>Number of grafts required</li>
                <li>The technique used (FUE generally involves more time per graft than FUT)</li>
                <li>The surgeon&apos;s experience and the clinic&apos;s technology</li>
                <li>Whether the case requires more than one session</li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-[#5F5F5F] leading-relaxed text-center pt-2 italic">
            Because pricing depends so much on individual factors, the most reliable way to understand your own cost is a personal consultation rather than a general estimate. Our <Link href="/services/hair-prp-cost-dubai/" className="text-[#1F5E4B] underline font-semibold hover:text-[#2A7D63]">PRP Hair Treatment Cost in Dubai</Link> page breaks down these factors in more depth if you&apos;d like to explore PRP pricing specifically.
          </p>
        </div>
      </section>

      {/* ============ SPECIALIST ASSESSMENT DETAILS ============ */}
      <section className="py-20 px-4 bg-[#F9F7F2] border-t border-gray-150">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h3 className="text-2xl font-bold text-[#1A1A1A]">How a Specialist Determines the Right Option</h3>
          <p className="text-sm md:text-base text-[#5F5F5F] leading-relaxed max-w-3xl mx-auto">
            A qualified specialist typically starts with a scalp examination to assess the pattern, stage, and likely cause of hair loss, sometimes supported by diagnostic tools that evaluate follicle density and activity. From there, the discussion usually covers your goals, your tolerance for downtime and ongoing sessions, your donor hair quality (if a transplant is being considered), and any underlying health factors that could affect either treatment.
          </p>
          <div className="inline-flex items-center gap-2 bg-[#1F5E4B]/10 border border-[#1F5E4B]/20 text-[#1F5E4B] p-4 rounded-xl text-xs md:text-sm leading-relaxed max-w-2xl mx-auto text-left">
            <Info className="w-5 h-5 shrink-0" />
            <span>This is why generic online comparisons — including this one — are a starting point rather than a substitute for a personal evaluation. The right choice genuinely depends on individual factors that only an in-person assessment can capture.</span>
          </div>
        </div>
      </section>

      {/* ============ CLINIC PROFILE DETAILS ============ */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-3xl font-bold text-[#1A1A1A]">Why Patients Choose RamaCare Polyclinic</h3>
            <p className="text-sm md:text-base text-[#5F5F5F] leading-relaxed">
              Deciding between PRP and a hair transplant isn&apos;t a decision to make from a search engine alone — it deserves a real conversation with someone who can examine your scalp and talk through your specific situation. At RamaCare Polyclinic in Dubai, patients choose us for:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: 'Personalized Consultations', desc: 'Assessing your specific stage of hair loss before recommending any treatment.' },
                { title: 'Experienced Medical Staff', desc: 'Explaining the honest trade-offs of each option, not just the benefits.' },
                { title: 'Individual Treatment Planning', desc: 'Creating custom plans, including combined approaches if suited for your case.' },
                { title: 'Modern Facilities', desc: 'Located conveniently in Jumeirah 1, easily accessible for patients across Dubai.' }
              ].map((item, i) => (
                <div key={i} className="border border-gray-150 p-5 rounded-2xl shadow-sm bg-gray-50/50 hover:border-[#1F5E4B]/20 transition-all">
                  <h4 className="font-bold text-sm text-[#1A1A1A] mb-1 flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-[#1F5E4B]" /> {item.title}
                  </h4>
                  <p className="text-xs text-[#5F5F5F] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-[#5F5F5F] leading-relaxed">
              If you&apos;re also curious about broader options beyond these two treatments, our <Link href="/services/hair-regrowth-treatment-dubai/" className="text-[#1F5E4B] underline font-semibold hover:text-[#2A7D63]">hair regrowth treatment in Dubai</Link> and <Link href="/services/mesotherapy-dubai/" className="text-[#1F5E4B] underline font-semibold hover:text-[#2A7D63]">hair mesotherapy in Dubai</Link> pages cover additional approaches some patients consider alongside or instead of PRP and transplants. And if ongoing shedding, rather than pattern baldness, is your main concern, our <Link href="/services/hair-treatment-dubai/" className="text-[#1F5E4B] underline font-semibold hover:text-[#2A7D63]">hair fall treatment in Dubai</Link> guide may be a more relevant starting point.
            </p>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#1F5E4B]/5 to-transparent rounded-3xl rotate-1 transform scale-105" />
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white">
              <img
                src="/images/doctor-examining-scalp-ramacare2.jpg"
                alt="Scalp monitoring and follow-up clinical support"
                className="w-full h-[360px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============ FAQ ACCORDION ============ */}
      <section id="faqs" className="py-24 px-4 bg-[#F9F7F2] scroll-mt-16 border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14 space-y-2">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#1F5E4B]/10 text-[#1F5E4B]">
              <HelpCircle className="w-6 h-6" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A]">Frequently Asked Questions</h2>
          </div>
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
      <section className="py-24 px-4 bg-gradient-to-br from-[#1F5E4B] via-[#2A7D63] to-[#1F5E4B]" id="book-now">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">Ready to Find Out Which Option Fits You?</h2>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            The only way to know for certain whether PRP, a hair transplant, or a combination of both is right for you is a hands-on evaluation with a specialist who can examine your scalp and discuss your goals directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <Link
              href="/book-appointment/"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#1F5E4B] px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/95 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <Calendar className="w-5 h-5" />
              Book Consultation
            </Link>
            <a
              href="https://wa.me/971566597878?text=Hello%20RamaCare%20Polyclinic%2C%20I%20would%20like%20to%20ask%20about%20the%20differences%20between%20PRP%20and%20Hair%20Transplant%20options."
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* ============ CONCLUSION ============ */}
      <section className="py-16 px-4 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-8 text-left space-y-4">
            <h2 className="text-2xl font-bold text-[#1A1A1A]">Conclusion</h2>
            <p className="text-sm md:text-base text-[#5F5F5F] leading-relaxed">
              There&apos;s no single right answer to the PRP vs Hair Transplant in Dubai question — the right treatment depends on your stage of hair loss, how much active follicle function remains, your tolerance for downtime and ongoing sessions, and your personal goals. PRP offers a lower-commitment, non-surgical way to support existing hair, while a hair transplant offers a more permanent solution for areas that have already gone bald. For many patients, the most honest answer is that the two aren&apos;t strictly competitors — they can work together as part of a broader hair restoration plan. Whichever direction feels right on paper, a personal consultation is the most reliable way to turn that general understanding into a specific, realistic plan for your own hair.
            </p>
          </div>
          <div className="md:col-span-4 rounded-2xl overflow-hidden shadow-lg border border-gray-150">
            <img
              src="/images/patient-results-hair-loss-treatment3.jpg"
              alt="Successful hair density results after clinical procedures"
              className="w-full h-[220px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* ============ RELATED GUIDES ============ */}
      <section className="py-16 px-4 bg-[#FDFCF7] border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl font-bold text-[#1A1A1A] mb-8">Related Hair Treatment Guides</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {relatedGuides.map((g, i) => (
              <Link
                key={i}
                href={g.href}
                className="group bg-white rounded-2xl border border-gray-200 p-6 hover:border-[#1F5E4B]/30 hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <h4 className="font-bold text-sm text-[#1A1A1A] mb-2 group-hover:text-[#1F5E4B] transition-colors">{g.title}</h4>
                  <p className="text-[11px] text-[#5F5F5F] leading-relaxed">{g.desc}</p>
                </div>
                <span className="inline-flex items-center gap-1 text-[#1F5E4B] font-bold text-xs mt-4">
                  Learn more <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-250 shadow-lg z-40 p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="hidden md:block">
            <p className="text-sm font-semibold text-[#1A1A1A]">Not sure which treatment fits your hair loss?</p>
            <p className="text-xs text-[#5F5F5F]">Book a scalp assessment today</p>
          </div>
          <Link
            href="/book-appointment/"
            className="flex items-center gap-2 bg-[#1F5E4B] text-white px-6 py-3 rounded-lg shadow-lg hover:bg-[#17493A] hover:shadow-xl transition-all font-semibold whitespace-nowrap"
          >
            <Calendar className="w-5 h-5" />
            Book Consultation
          </Link>
        </div>
      </div>


    </Layout>
  );
}
