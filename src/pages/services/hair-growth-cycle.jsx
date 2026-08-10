import Layout from '../../../components/Layout';
import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar,
  CheckCircle,
  MessageCircle,
  Shield,
  Sparkles,
  ArrowRight,
  ChevronDown,
  Info,
  Activity,
  Layers,
  Clock,
  Apple,
  AlertCircle,
  ChevronRight,
  TrendingUp,
  User,
  Users,
  Compass,
  FileText,
  Heart,
  Droplet
} from 'lucide-react';

const SITE_URL = 'https://ramacarepolyclinic.ae';

const navItems = [
  { id: 'what-is-cycle', label: '1. What Is It?' },
  { id: 'four-stages', label: '2. Four Stages' },
  { id: 'shedding-vs-loss', label: '3. Shedding vs Loss' },
  { id: 'prp-support', label: '4. Treatments' },
  { id: 'supportive-foods', label: '5. Nutrition' },
  { id: 'faqs', label: '6. FAQs' }
];

const stages = [
  {
    name: 'Anagen Phase (Growth Stage)',
    description: 'This is the active growth phase, where cells in the hair bulb divide rapidly, pushing the hair shaft upward. Most of the hair on a healthy scalp — generally the majority of follicles at any given time — is in this phase. The length of the anagen phase largely determines how long your hair can naturally grow.',
    duration: '2–7 years',
    color: '#1F5E4B',
    bgColor: 'bg-[#1F5E4B]/10',
    borderColor: 'border-[#1F5E4B]/30',
    icon: Sparkles
  },
  {
    name: 'Catagen Phase (Transition Stage)',
    description: 'A short transitional phase where hair growth slows and the follicle begins to shrink. The hair detaches from its blood supply but remains in place. Only a small percentage of follicles are typically in this phase at any time.',
    duration: '2–3 weeks',
    color: '#C5A880',
    bgColor: 'bg-[#C5A880]/15',
    borderColor: 'border-[#C5A880]/30',
    icon: Compass
  },
  {
    name: 'Telogen Phase (Resting Stage)',
    description: 'During this phase, the follicle is inactive, but the hair strand generally stays in place. This is considered a normal, necessary “rest period” before the follicle prepares for a new growth cycle.',
    duration: '2–3 months',
    color: '#3B82F6',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    icon: Clock
  },
  {
    name: 'Exogen Phase (Shedding Stage)',
    description: 'Sometimes described as part of the telogen phase, exogen is when the old hair is finally released and sheds from the scalp — often to make room for a new hair beginning its own anagen phase underneath.\n\nKey takeaway: Shedding hair isn’t a sign of failure — it’s simply the natural conclusion of one follicle’s cycle before it starts again.',
    duration: 'Ongoing, overlaps with early anagen',
    color: '#EF4444',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200',
    icon: Droplet
  }
];

const timelineData = [
  { stage: 'Anagen', action: 'Active growth; cells divide rapidly to lengthen the hair shaft', duration: 'Roughly 2–7 years' },
  { stage: 'Catagen', action: 'Growth slows; follicle shrinks and detaches from blood supply', duration: 'Roughly 2–3 weeks' },
  { stage: 'Telogen', action: 'Follicle rests; hair remains in place but isn’t growing', duration: 'Roughly 2–3 months' },
  { stage: 'Exogen', action: 'Old hair sheds; new hair may begin growing underneath', duration: 'Ongoing, overlaps with early anagen' }
];

const sheddingVsLoss = [
  { factor: 'Daily hair count', shedding: 'Roughly 50–100 strands per day', loss: 'Noticeably more than usual, over weeks' },
  { factor: 'Pattern', shedding: 'Evenly distributed across scalp', loss: 'Localized thinning, receding, or bald patches' },
  { factor: 'Regrowth', shedding: 'New hair typically replaces shed hair', loss: 'Little to no visible regrowth in thinning areas' },
  { factor: 'Duration', shedding: 'Short-term fluctuations (e.g., seasonal)', loss: 'Persistent over several months' },
  { factor: 'Associated symptoms', shedding: 'None', loss: 'Scalp itching, redness, or visible follicle changes' }
];

const vitaminsData = [
  { nutrient: 'Biotin (B7)', role: 'Supports keratin production' },
  { nutrient: 'Vitamin D', role: 'Linked to follicle cycling activity' },
  { nutrient: 'Iron', role: 'Supports oxygen delivery to hair follicles' },
  { nutrient: 'Zinc', role: 'Supports tissue growth and repair' },
  { nutrient: 'Vitamin E', role: 'Antioxidant support for scalp health' },
  { nutrient: 'Omega-3s', role: 'Supports scalp hydration and inflammation control' }
];

const faqsList = [
  { q: "What are the four stages of the hair growth cycle?", a: "The four stages are Anagen (growth), Catagen (transition), Telogen (resting), and Exogen (shedding). Every hair follicle cycles through these stages independently and repeatedly throughout life." },
  { q: "How long does the hair growth cycle last?", a: "A full cycle can take anywhere from a few months to several years, largely depending on the length of the anagen (growth) phase, which is typically the longest stage." },
  { q: "How long does the anagen phase last?", a: "The anagen phase typically lasts between two and seven years, though this varies by individual and by hair type." },
  { q: "How much hair shedding is normal each day?", a: "Losing roughly 50 to 100 strands a day is generally considered normal, though this can vary based on hair thickness and overall hair volume." },
  { q: "Can stress affect the hair growth cycle?", a: "Yes, significant physical or emotional stress can trigger a condition called telogen effluvium, which pushes more follicles into the resting phase than usual, leading to noticeable shedding weeks later." },
  { q: "Does PRP help the hair growth cycle?", a: "PRP is often discussed as a way to support the growth environment for follicles that are still active, though it doesn’t reactivate follicles that have stopped functioning entirely." },
  { q: "Can the hair growth cycle be improved?", a: "While the basic biology of the cycle can’t be changed, factors like nutrition, scalp health, and stress management may support healthier cycling, and certain treatments may help support weakening follicles." },
  { q: "Can hair grow back naturally?", a: "In many cases involving temporary shedding (such as stress-related or nutritional causes), hair often regrows once the underlying trigger is addressed. Hair loss caused by permanently dormant follicles is more limited in its ability to regrow without treatment." },
  { q: "What foods support healthy hair growth?", a: "Protein, iron, zinc, omega-3 fatty acids, and vitamin C-rich foods are commonly associated with supporting the biological processes behind hair growth." },
  { q: "Can damaged hair follicles recover?", a: "Follicles that are weakened but still active may respond to supportive treatments and improved scalp health, while follicles that have been dormant for a long period are generally more difficult to stimulate." },
  { q: "Is hair loss reversible?", a: "This depends heavily on the cause. Temporary triggers like stress or nutritional deficiency often allow for natural regrowth once resolved, while genetic pattern hair loss is typically progressive and managed rather than fully reversed." },
  { q: "Why does hair fall out more in certain seasons?", a: "Some people experience seasonal shedding, possibly linked to environmental and hormonal changes that cause more follicles to enter the resting phase at once. This is generally temporary." },
  { q: "Does age affect the hair growth cycle?", a: "Yes, the anagen phase naturally shortens with age, which can result in finer, shorter hair growth over time." },
  { q: "How does Hair Mesotherapy affect the hair growth cycle?", a: "Hair Mesotherapy delivers nutrients directly to the scalp’s mid-layer, which may help support a healthier environment for the follicle during its growth phase." },
  { q: "When should I see a specialist about hair loss?", a: "If shedding feels excessive, persistent for more than a few weeks, or is accompanied by visible thinning or scalp symptoms, it’s a good idea to consult a hair specialist for a proper assessment." }
];

export default function HairGrowthCyclePage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      let currentSection = '';
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el && el.offsetTop <= scrollPos) {
          currentSection = item.id;
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleFaq = (index) => setOpenFaq(openFaq === index ? null : index);

  return (
    <Layout>
      <Head>
        <title key="title">Hair Growth Cycle Explained: Stages & Timeline</title>
        <meta
          name="description"
          content="Understand the Hair Growth Cycle — its four stages, timeline & how treatments support healthy regrowth. Book a consultation at RamaCare Polyclinic."
          key="description"
        />
        <meta property="og:title" content="Hair Growth Cycle Explained: Stages & Timeline" key="og:title" />
        <meta
          property="og:description"
          content="Understand the Hair Growth Cycle — its four stages, timeline & how treatments support healthy regrowth. Book a consultation at RamaCare Polyclinic."
          key="og:description"
        />
        <meta property="og:type" content="website" key="og:type" />

        {/* Recommended Schema Markup */}
        <script
          key="schema-article"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'MedicalWebPage',
              name: 'Hair Growth Cycle Explained: Stages & Timeline',
              description: 'Understand the Hair Growth Cycle — its four stages, timeline & how treatments support healthy regrowth.',
              about: {
                '@type': 'MedicalCondition',
                name: 'Hair Growth Cycle',
                description: 'The natural repeating process every hair follicle goes through, consisting of Anagen, Catagen, Telogen, and Exogen stages.'
              }
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
              mainEntity: faqsList.map((f) => ({
                '@type': 'Question',
                name: f.q,
                acceptedAnswer: { '@type': 'Answer', text: f.a },
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
                { '@type': 'ListItem', position: 2, name: 'Hair Treatments', item: 'https://ramacarepolyclinic.ae/services/hair-treatment-dubai/' },
                {
                  '@type': 'ListItem',
                  position: 3,
                  name: 'Hair Growth Cycle',
                  item: 'https://ramacarepolyclinic.ae/services/hair-growth-cycle/',
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
              address: {
                '@type': 'PostalAddress',
                streetAddress: '12 Al Dhiyafah Rd - Jumeirah Terrace Building, Ground Floor, Jumeirah 1',
                addressLocality: 'Jumeirah 1',
                addressRegion: 'Dubai',
                addressCountry: 'AE'
              },
              priceRange: '$$',
            }),
          }}
        />
      </Head>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <nav aria-label="Breadcrumb" className="mb-4 flex items-center text-xs font-medium text-[#5F5F5F] gap-1.5">
          <Link href="/" className="hover:text-[#1F5E4B] transition-colors">Home</Link>
          <span className="mx-1">/</span>
          <Link href="/services/hair-treatment-dubai/" className="hover:text-[#1F5E4B] transition-colors">Hair Treatments</Link>
          <span className="mx-1">/</span>
          <span className="text-[#1F5E4B]">Hair Growth Cycle</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#FDFCF7] via-[#F4F1EA] to-[#E6EFEA] py-20 lg:py-28 border-b border-gray-200">
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
          <div className="absolute w-[40rem] h-[40rem] bg-[#1F5E4B]/5 rounded-full -top-40 -left-40 blur-3xl" />
          <div className="absolute w-96 h-96 bg-[#C5A880]/10 rounded-full bottom-10 right-10 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center gap-2 bg-[#1F5E4B]/10 border border-[#1F5E4B]/20 px-4 py-2 rounded-full text-xs font-bold text-[#1F5E4B] tracking-wide uppercase">
                <Activity className="w-3.5 h-3.5" />
                Trichology &amp; Hair Science
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-[#1A1A1A] leading-[1.12]">
                Hair Growth Cycle
              </h1>
              <div className="text-sm md:text-base text-[#5F5F5F] space-y-4 leading-relaxed">
                <p className="font-semibold text-lg text-[#1F5E4B]">
                  Ever wondered why you find hair on your pillow every morning, yet you’re not going bald? The answer lies in the Hair Growth Cycle — a natural, repeating process every strand on your head goes through, whether you notice it or not.
                </p>
                <p>
                  Understanding this cycle isn’t just biology trivia. It’s the foundation for knowing what’s normal shedding, what might be a warning sign, and which treatments actually make sense for your hair concern. Hair loss can happen for many reasons — genetics, hormones, stress, nutrition, or simply time — and each of these factors interacts with the hair growth cycle differently.
                </p>
                <p>
                  At RamaCare Polyclinic in Dubai, we often find that patients feel far less anxious about their hair once they understand how this cycle actually works. Knowing the difference between everyday shedding and a disrupted growth cycle can completely change how you approach treatment — and whether options like PRP or Hair Mesotherapy make sense for you.
                </p>
                <p>
                  This guide walks through the hair growth cycle stage by stage, in plain language, along with the timeline you can realistically expect and how modern treatments work with — not against — your body’s natural process.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/book-appointment/"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#1F5E4B] px-8 py-4 text-sm font-bold text-white hover:bg-[#17493A] transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  <Calendar className="w-4 h-4" /> Book Appointment
                </Link>
                <a
                  href="https://wa.me/971566597878?text=Hello%20RamaCare%20Polyclinic%2C%20I%20would%20like%20to%20inquire%20about%20the%20Hair%20Growth%20Cycle%20and%20related%2520treatments."
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-flex items-center gap-2 rounded-xl border-2 border-[#1F5E4B]/30 px-8 py-4 text-sm font-bold text-[#1F5E4B] bg-white hover:bg-gray-50 transition-all shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" /> Contact Us
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5"
            >
              <div className="bg-white rounded-3xl p-6 border border-[#1F5E4B]/15 shadow-[0_20px_50px_rgba(31,94,75,0.06)] space-y-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#E6EFEA] rounded-full -mr-8 -mt-8 pointer-events-none" />
                <h3 className="font-extrabold text-[#1A1A1A] text-lg flex items-center gap-2 border-b border-gray-100 pb-3">
                  <Shield className="w-5 h-5 text-[#1F5E4B]" />
                  Educational Diagram
                </h3>
                <div className="rounded-2xl overflow-hidden shadow-md border border-gray-150">
                  <img
                    src="/images/hair-growth-cycle-infographic-dubai.jpg"
                    alt="Diagram of the hair growth cycle stages at RamaCare Polyclinic"
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <p className="text-xs text-[#5F5F5F] text-center italic">
                  Anagen catagen telogen exogen phases illustration Dubai clinic
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============ QUICK HORIZONTAL NAVIGATION ============ */}
      <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-gray-200/80 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-3.5">
            {navItems.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={`whitespace-nowrap px-5 py-2.5 rounded-full text-xs md:text-sm font-bold transition-all duration-200 ${activeSection === s.id
                  ? 'bg-[#1F5E4B] text-white shadow-md'
                  : 'text-[#5F5F5F] hover:bg-[#E6EFEA] hover:text-[#1F5E4B]'
                  }`}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* 1. What Is the Hair Growth Cycle? */}
      <section id="what-is-cycle" className="scroll-mt-28 py-20 bg-white border-b border-gray-100 animate-fadeIn">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#1A1A1A] border-b border-gray-150 pb-3.5">
            What Is the Hair Growth Cycle?
          </h2>
          <div className="bg-[#E6EFEA]/30 border-l-4 border-[#1F5E4B] p-5 rounded-r-2xl space-y-2">
            <span className="text-[#1F5E4B] font-bold text-xs uppercase tracking-wider flex items-center gap-1">
              <Info className="w-4 h-4" /> Quick Answer
            </span>
            <p className="text-[#1A1A1A] font-semibold text-sm md:text-base">
              The hair growth cycle is the natural process each hair follicle goes through — growing, transitioning, resting, and shedding — before starting the cycle again. Every follicle on your scalp moves through this cycle independently, which is why you never lose all your hair at once.
            </p>
          </div>
          <div className="text-sm md:text-base text-[#5F5F5F] space-y-4 leading-relaxed">
            <p>
              Think of your scalp as having thousands of individual follicles, each on its own personal timeline. While one follicle might be in an active growth phase, the one right next to it could be resting or shedding. This staggered pattern is exactly why healthy hair looks full and continuous, even though every strand is quietly cycling through its own stages behind the scenes.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Why the Hair Growth Cycle Matters */}
      <section id="why-it-matters" className="scroll-mt-28 py-20 bg-[#FDFCF7] border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#1A1A1A] border-b border-gray-150 pb-3.5">
            Why the Hair Growth Cycle Matters
          </h2>
          <div className="text-sm md:text-base text-[#5F5F5F] space-y-4 leading-relaxed">
            <p>
              Understanding the hair growth cycle helps answer some of the most common questions patients bring to a <Link href="/services/best-hair-specialist-dubai/" className="text-[#1F5E4B] font-semibold underline hover:text-[#17493A]">hair specialist in Dubai</Link>:
            </p>
            <ul className="space-y-3 pl-2">
              {[
                'Is the hair loss I’m seeing normal, or a sign of something else?',
                'Why do some treatments take months to show results?',
                'Why does hair sometimes seem to “shed more” during certain seasons or life events?',
                'How do treatments like PRP or Hair Mesotherapy actually help?'
              ].map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle className="w-5 h-5 text-[#1F5E4B] shrink-0 mt-0.5" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <p>
              Without this context, hair loss can feel confusing and alarming. With it, patients tend to make more informed, realistic decisions about their hair growth treatment options.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Hair Follicle Anatomy */}
      <section id="follicle-anatomy" className="scroll-mt-28 py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#1A1A1A] border-b border-gray-150 pb-3.5">
            Hair Follicle Anatomy
          </h2>
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 space-y-4">
              <p className="text-sm md:text-base text-[#5F5F5F] leading-relaxed">
                Each hair follicle is a small but complex structure embedded in the skin. Key parts include:
              </p>
              <ul className="space-y-2.5 text-sm md:text-base text-[#5F5F5F]">
                <li><strong>Hair bulb</strong> — the base of the follicle where cell division occurs</li>
                <li><strong>Dermal papilla</strong> — a cluster of cells that supplies nutrients and signals for growth</li>
                <li><strong>Hair shaft</strong> — the visible part of the hair above the scalp</li>
                <li><strong>Sebaceous gland</strong> — attached to the follicle, producing natural oils that condition the scalp</li>
                <li><strong>Arrector pili muscle</strong> — the tiny muscle responsible for “goosebumps,” attached to each follicle</li>
              </ul>
            </div>
            <div className="md:col-span-5">
              <div className="bg-[#FDFCF7] p-6 rounded-2xl border border-[#1F5E4B]/10 shadow-sm text-center">
                <img
                  src="/images/hair-follicle-comparison-illustration.jpg"
                  alt="Hair follicle anatomy diagram for hair growth cycle education"
                  className="rounded-xl mx-auto w-full max-h-64 object-cover shadow-sm"
                />
              </div>
            </div>
          </div>
          <p className="text-sm md:text-base text-[#5F5F5F] leading-relaxed">
            The health of the dermal papilla, in particular, plays a major role in how well a follicle performs through each stage of the hair growth cycle. This is one reason treatments that target the scalp’s nutrient supply — like PRP and Hair Mesotherapy — are often discussed in the context of supporting healthy hair follicles.
          </p>
        </div>
      </section>

      {/* 4. The Four Stages of the Hair Growth Cycle */}
      <section id="four-stages" className="scroll-mt-28 py-20 bg-[#FDFCF7] border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#1A1A1A] border-b border-gray-150 pb-3.5">
            The Four Stages of the Hair Growth Cycle
          </h2>
          <div className="bg-[#E6EFEA]/30 border-l-4 border-[#1F5E4B] p-5 rounded-r-2xl mb-6">
            <span className="text-[#1F5E4B] font-bold text-xs uppercase tracking-wider flex items-center gap-1">
              <Info className="w-4 h-4" /> Quick Answer
            </span>
            <p className="text-[#1A1A1A] font-semibold text-sm md:text-base">
              The four stages of the hair growth cycle are Anagen (growth), Catagen (transition), Telogen (resting), and Exogen (shedding). Each follicle repeats this cycle throughout a person’s lifetime.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stages.map((stage, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-2xl border ${stage.bgColor} ${stage.borderColor} space-y-4 flex flex-col justify-between hover:shadow-md transition-all duration-300`}
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-white shrink-0 shadow-sm"
                      style={{ backgroundColor: stage.color }}
                    >
                      <stage.icon className="w-5 h-5" />
                    </div>
                    <h4 className="font-extrabold text-[#1A1A1A] text-sm md:text-base leading-tight">{stage.name}</h4>
                  </div>
                  <p className="text-xs md:text-sm text-[#5F5F5F] leading-relaxed whitespace-pre-line">
                    {stage.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-gray-200/50 flex justify-between items-center text-xs font-bold">
                  <span className="text-[#5F5F5F]">Duration:</span>
                  <span style={{ color: stage.color }}>{stage.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Hair Growth Timeline */}
      <section id="growth-timeline" className="scroll-mt-28 py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#1A1A1A] border-b border-gray-150 pb-3.5">
            Hair Growth Timeline
          </h2>
          <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-left border-collapse text-xs md:text-sm">
              <thead>
                <tr className="bg-[#1F5E4B] text-white">
                  <th className="p-4 font-bold">Stage</th>
                  <th className="p-4 font-bold">What Happens</th>
                  <th className="p-4 font-bold">Average Duration</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {timelineData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-gray-50/50">
                    <td className="p-4 font-bold text-[#1F5E4B]">{row.stage}</td>
                    <td className="p-4 text-[#5F5F5F]">{row.action}</td>
                    <td className="p-4 text-[#1A1A1A] font-semibold">{row.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#5F5F5F] italic">
            These durations are general averages and can vary from person to person based on genetics, age, health, and other individual factors.
          </p>
        </div>
      </section>

      {/* 6. How Long Does Each Phase Last? */}
      <section id="phase-duration" className="scroll-mt-28 py-20 bg-[#FDFCF7] border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#1A1A1A] border-b border-gray-150 pb-3.5">
            How Long Does Each Phase Last?
          </h2>
          <div className="bg-[#E6EFEA]/30 border-l-4 border-[#1F5E4B] p-5 rounded-r-2xl space-y-2">
            <span className="text-[#1F5E4B] font-bold text-xs uppercase tracking-wider flex items-center gap-1">
              <Info className="w-4 h-4" /> Quick Answer
            </span>
            <p className="text-[#1A1A1A] font-semibold text-sm md:text-base">
              The anagen (growth) phase typically lasts several years, the catagen (transition) phase lasts a few weeks, the telogen (resting) phase lasts a few months, and the exogen (shedding) phase overlaps with the start of a new cycle.
            </p>
          </div>
          <p className="text-sm md:text-base text-[#5F5F5F] leading-relaxed">
            Because roughly 85–90% of scalp hair is usually in the anagen phase at any given time, most people don’t notice the cycle happening at all — until something disrupts the balance, causing more follicles than usual to shift into the resting or shedding phases simultaneously.
          </p>
        </div>
      </section>

      {/* 7. Normal Hair Shedding vs Hair Loss */}
      <section id="shedding-vs-loss" className="scroll-mt-28 py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#1A1A1A] border-b border-gray-150 pb-3.5">
            Normal Hair Shedding vs Hair Loss
          </h2>
          <p className="text-sm md:text-base text-[#5F5F5F]">
            One of the most common concerns we hear at RamaCare Polyclinic is: “Is this normal shedding, or is this hair loss?” Here’s a general comparison:
          </p>
          <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-left border-collapse text-xs md:text-sm">
              <thead>
                <tr className="bg-[#C5A880] text-white">
                  <th className="p-4 font-bold">Factor</th>
                  <th className="p-4 font-bold">Normal Shedding</th>
                  <th className="p-4 font-bold">Possible Hair Loss</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {sheddingVsLoss.map((row, idx) => (
                  <tr key={idx} className="hover:bg-gray-50/50">
                    <td className="p-4 font-bold text-[#1A1A1A]">{row.factor}</td>
                    <td className="p-4 text-[#5F5F5F]">{row.shedding}</td>
                    <td className="p-4 text-[#EF4444] font-semibold">{row.loss}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm md:text-base text-[#5F5F5F] leading-relaxed">
            If shedding feels excessive, prolonged, or is accompanied by visible thinning, it’s worth speaking with a <Link href="/services/best-hair-specialist-dubai/" className="text-[#1F5E4B] font-semibold underline hover:text-[#17493A]">hair specialist in Dubai</Link> rather than waiting to see if it resolves on its own.
          </p>
        </div>
      </section>

      {/* 8. Why Hair Growth Slows Down */}
      <section id="why-growth-slows" className="scroll-mt-28 py-20 bg-[#FDFCF7] border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#1A1A1A] border-b border-gray-150 pb-3.5">
            Why Hair Growth Slows Down
          </h2>
          <p className="text-sm md:text-base text-[#5F5F5F]">
            Several factors can shorten the anagen phase or push more follicles into resting and shedding phases prematurely, including:
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Reduced blood flow and nutrient delivery to the follicle',
              'Hormonal changes affecting follicle sensitivity',
              'Chronic inflammation of the scalp',
              'Nutritional gaps that limit the building blocks needed for hair production',
              'Natural aging, which gradually shortens the anagen phase over time'
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-5 rounded-2xl border border-gray-200 flex items-start gap-3 shadow-sm hover:border-[#1F5E4B]/30 transition-all duration-300">
                <Clock className="w-5 h-5 text-[#C5A880] shrink-0 mt-0.5" />
                <span className="text-sm md:text-base text-[#1A1A1A] leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Common Causes of Hair Loss */}
      <section id="causes-hair-loss" className="scroll-mt-28 py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#1A1A1A] border-b border-gray-150 pb-3.5">
            Common Causes of Hair Loss
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Genetics', desc: 'Androgenetic alopecia (pattern hair loss) is the most common cause, largely inherited.' },
              { title: 'Hormonal changes', desc: 'Pregnancy, postpartum shifts, thyroid disorders, and PCOS can all affect the cycle.' },
              { title: 'Stress', desc: 'Significant physical or emotional stress can trigger a condition called telogen effluvium, pushing more hair into the resting phase at once.' },
              { title: 'Nutritional deficiencies', desc: 'Low iron, vitamin D, zinc, or protein intake can impair healthy follicle function.' },
              { title: 'Medical conditions', desc: 'Autoimmune conditions, scalp infections, and certain skin disorders can disrupt the cycle.' },
              { title: 'Aging', desc: 'The anagen phase naturally shortens with age, often resulting in finer, shorter hair growth over time.' },
              { title: 'Medications', desc: 'Certain drugs, including some used for chemotherapy, blood pressure, or mood disorders, can affect hair growth as a side effect.' }
            ].map((cause, idx) => (
              <div key={idx} className="bg-[#FDFCF7] p-6 rounded-2xl border border-gray-200/80 shadow-sm space-y-2 hover:border-[#1F5E4B]/30 transition-all">
                <h4 className="font-extrabold text-[#1F5E4B] text-base">{cause.title}</h4>
                <p className="text-xs md:text-sm text-[#5F5F5F] leading-relaxed">{cause.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. How PRP Supports the Hair Growth Cycle */}
      <section id="prp-support" className="scroll-mt-28 py-20 bg-[#FDFCF7] border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#1A1A1A] border-b border-gray-150 pb-3.5">
            How PRP Supports the Hair Growth Cycle
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <p className="text-sm md:text-base text-[#5F5F5F] leading-relaxed">
                PRP (Platelet Rich Plasma) uses a concentrated portion of the patient’s own blood, injected into the scalp to potentially support the follicle’s growth environment. The idea behind PRP hair treatment is that growth factors found naturally in platelets may help extend or support the anagen phase in follicles that are still active but weakening.
              </p>
              <p className="text-sm md:text-base text-[#5F5F5F] leading-relaxed">
                PRP doesn’t reverse the cycle or reactivate follicles that have stopped functioning altogether — but it’s frequently discussed as a way to support existing follicles through their natural growth phase. You can read more about the procedure on our <Link href="/services/hair-prp-dubai/" className="text-[#1F5E4B] font-semibold underline hover:text-[#17493A]">Hair PRP Treatment in Dubai</Link> page.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-md">
              <img
                src="/images/prp-scalp-injection-dubai.jpg"
                alt="Dermatologist performing PRP hair treatment in Dubai"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 11. How Hair Mesotherapy Supports Hair Growth */}
      <section id="meso-support" className="scroll-mt-28 py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#1A1A1A] border-b border-gray-150 pb-3.5">
            How Hair Mesotherapy Supports Hair Growth
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-md md:order-2">
              <img
                src="/images/hair-mesotherapy-session-ramacare.jpg"
                alt="Hair mesotherapy session in Dubai polyclinic"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="space-y-4 md:order-1">
              <p className="text-sm md:text-base text-[#5F5F5F] leading-relaxed">
                Hair Mesotherapy delivers a customized blend of vitamins, minerals, and amino acids directly into the scalp’s mid-layer. Rather than relying on the body’s own biological material like PRP, this approach focuses on directly nourishing the follicle environment, which may help support healthier conditions for the anagen phase.
              </p>
              <p className="text-sm md:text-base text-[#5F5F5F] leading-relaxed">
                Because it addresses nutrient delivery specifically, Hair Mesotherapy is often discussed for hair loss connected to nutritional gaps or general scalp health. Learn more on our <Link href="/services/mesotherapy-dubai/" className="text-[#1F5E4B] font-semibold underline hover:text-[#17493A]">Hair Mesotherapy in Dubai</Link> page, or compare the two options directly on our <Link href="/services/prp-vs-hair-mesotherapy-dubai/" className="text-[#1F5E4B] font-semibold underline hover:text-[#17493A]">PRP vs Hair Mesotherapy in Dubai</Link> guide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 12. Hair Growth Cycle After a Hair Transplant */}
      <section id="transplant-cycle" className="scroll-mt-28 py-20 bg-[#FDFCF7] border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#1A1A1A] border-b border-gray-150 pb-3.5">
            Hair Growth Cycle After a Hair Transplant
          </h2>
          <p className="text-sm md:text-base text-[#5F5F5F] leading-relaxed">
            After a hair transplant, transplanted follicles typically go through a temporary shedding phase within the first few weeks — which can be alarming for patients unfamiliar with the process, but is generally considered a normal part of the cycle resetting. New growth usually begins gradually as the follicles enter a fresh anagen phase.
          </p>
          <p className="text-sm md:text-base text-[#5F5F5F] leading-relaxed">
            Because this process takes time and follows the same natural cycle described above, patience is essential. If you’re weighing surgical versus non-surgical options, our <Link href="/services/prp-vs-hair-transplant-dubai/" className="text-[#1F5E4B] font-semibold underline hover:text-[#17493A]">PRP vs Hair Transplant in Dubai</Link> comparison may help clarify which path fits your situation.
          </p>
        </div>
      </section>

      {/* 13 & 14. Gender Differences (Men & Women) */}
      <section id="cycle-men" className="scroll-mt-28 py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#1A1A1A] border-b border-gray-150 pb-3.5">
            Gender Differences in the Hair Growth Cycle
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Men */}
            <div className="bg-[#FDFCF7] p-8 rounded-3xl border border-gray-200 space-y-4 shadow-sm">
              <h3 className="text-xl font-bold text-[#1A1A1A] flex items-center gap-2">
                <User className="w-5 h-5 text-[#1F5E4B]" />
                Hair Growth Cycle in Men
              </h3>
              <p className="text-sm md:text-base text-[#5F5F5F] leading-relaxed">
                In men, pattern hair loss is often linked to genetic sensitivity to hormones, which can gradually shorten the anagen phase in affected follicles — typically starting at the hairline or crown. Over repeated cycles, affected follicles may produce progressively finer, shorter hair. This is why early intervention is frequently discussed as more effective than waiting until hair loss has significantly progressed.
              </p>
            </div>

            {/* Women */}
            <div id="cycle-women" className="bg-[#FDFCF7] p-8 rounded-3xl border border-gray-200 space-y-4 scroll-mt-24 shadow-sm">
              <h3 className="text-xl font-bold text-[#1A1A1A] flex items-center gap-2">
                <Users className="w-5 h-5 text-[#1F5E4B]" />
                Hair Growth Cycle in Women
              </h3>
              <p className="text-sm md:text-base text-[#5F5F5F] leading-relaxed">
                Women more commonly experience diffuse thinning across the scalp rather than a localized pattern. This can be connected to hormonal shifts (such as postpartum changes or menopause), thyroid function, nutritional status, or stress-related disruptions to the growth cycle. Because the underlying cause varies so much, treatment recommendations for women are usually individualized after a thorough scalp assessment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 15. Hair Growth Cycle and Seasonal Hair Loss */}
      <section id="seasonal-loss" className="scroll-mt-28 py-20 bg-[#FDFCF7] border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#1A1A1A] border-b border-gray-150 pb-3.5">
            Hair Growth Cycle and Seasonal Hair Loss
          </h2>
          <p className="text-sm md:text-base text-[#5F5F5F] leading-relaxed">
            Some people notice increased shedding during certain times of year, often in late summer or early autumn. While research on seasonal shedding patterns is still evolving, many specialists believe temporary environmental and hormonal shifts may cause a larger-than-usual number of follicles to enter the telogen phase simultaneously. This kind of shedding is usually temporary and tends to resolve without treatment, though persistent or severe shedding should still be evaluated.
          </p>
        </div>
      </section>

      {/* 16. Foods That Support Healthy Hair Growth */}
      <section id="supportive-foods" className="scroll-mt-28 py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#1A1A1A] border-b border-gray-150 pb-3.5">
            Foods That Support Healthy Hair Growth
          </h2>
          <p className="text-sm md:text-base text-[#5F5F5F] leading-relaxed">
            While diet alone can’t reverse genetic hair loss, proper nutrition supports the biological processes behind the hair growth cycle. Helpful food groups include:
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { food: 'Protein-rich foods', desc: 'eggs, fish, legumes — hair is largely made of protein' },
              { food: 'Iron-rich foods', desc: 'leafy greens, red meat, lentils — supports oxygen delivery to follicles' },
              { food: 'Omega-3 fatty acids', desc: 'salmon, walnuts, flaxseed — supports scalp health' },
              { food: 'Vitamin C-rich foods', desc: 'citrus, berries — supports collagen production and iron absorption' },
              { food: 'Zinc-rich foods', desc: 'nuts, seeds, whole grains — supports follicle repair and function' }
            ].map((item, idx) => (
              <div key={idx} className="bg-[#FDFCF7] p-5 rounded-2xl border border-gray-200 shadow-sm space-y-3 flex flex-col justify-between hover:border-[#1F5E4B]/30 hover:shadow-md transition-all duration-355">
                <h4 className="font-bold text-[#1F5E4B] text-sm md:text-base flex items-center gap-1.5">
                  <Apple className="w-5 h-5 text-[#C5A880] shrink-0" />
                  {item.food}
                </h4>
                <p className="text-xs md:text-sm text-[#5F5F5F] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 17. Vitamins and Minerals for Hair Health */}
      <section id="vitamins-minerals" className="scroll-mt-28 py-20 bg-[#FDFCF7] border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#1A1A1A] border-b border-gray-150 pb-3.5">
            Vitamins and Minerals for Hair Health
          </h2>
          <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-left border-collapse text-xs md:text-sm">
              <thead>
                <tr className="bg-[#1F5E4B] text-white">
                  <th className="p-4 font-bold">Nutrient</th>
                  <th className="p-4 font-bold">Role in Hair Growth</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {vitaminsData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-gray-50/50">
                    <td className="p-4 font-bold text-[#1F5E4B]">{row.nutrient}</td>
                    <td className="p-4 text-[#5F5F5F]">{row.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm md:text-base text-[#5F5F5F] leading-relaxed">
            Deficiencies in any of these can potentially disrupt the normal hair growth cycle, which is why a health and nutrition review is often part of a thorough consultation.
          </p>
        </div>
      </section>

      {/* 18. Lifestyle Tips for Healthy Hair */}
      <section id="lifestyle-tips" className="scroll-mt-28 py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#1A1A1A] border-b border-gray-150 pb-3.5">
            Lifestyle Tips for Healthy Hair
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Manage stress through regular exercise, sleep, and relaxation techniques',
              'Avoid excessive heat styling and tight hairstyles that stress the follicle',
              'Use gentle, sulfate-free hair care products where possible',
              'Stay hydrated and maintain a balanced diet',
              'Get regular checkups if you have a condition known to affect hair health (thyroid issues, anemia, etc.)',
              'Avoid smoking, which has been associated with reduced scalp blood flow'
            ].map((tip, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-[#5F5F5F] text-sm md:text-base leading-relaxed bg-[#FDFCF7] p-5 rounded-2xl border border-gray-200/60 shadow-sm">
                <CheckCircle className="w-5 h-5 text-[#1F5E4B] shrink-0 mt-0.5" />
                <span>{tip}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 19. Myths About the Hair Growth Cycle */}
      <section id="growth-myths" className="scroll-mt-28 py-20 bg-[#FDFCF7] border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#1A1A1A] border-b border-gray-150 pb-3.5">
            Myths About the Hair Growth Cycle
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { myth: 'Myth: Cutting your hair makes it grow faster.', fact: 'Fact: Trimming affects the hair shaft, not the follicle — it has no impact on the growth cycle itself.' },
              { myth: 'Myth: Losing more than 100 hairs a day always means baldness.', fact: 'Fact: Daily shedding fluctuates naturally and isn’t automatically a sign of permanent hair loss.' },
              { myth: 'Myth: Hair loss only happens to older people.', fact: 'Fact: Hair thinning can begin at any age, particularly with genetic, hormonal, or stress-related triggers.' },
              { myth: 'Myth: Once a follicle stops producing hair, nothing can be done.', fact: 'Fact: While dormant follicles are harder to support, treatments like PRP and Hair Mesotherapy are often discussed for follicles that are still active but weakening — which is why earlier evaluation tends to offer more options.' }
            ].map((item, idx) => (
              <div key={idx} className="bg-red-50/50 border border-red-200/60 p-6 rounded-3xl space-y-3 hover:shadow-sm transition-all duration-300">
                <p className="text-red-600 font-bold text-sm md:text-base flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  {item.myth}
                </p>
                <p className="text-[#5F5F5F] text-xs md:text-sm font-semibold pl-7 leading-relaxed">
                  {item.fact}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 20. When to See a Hair Specialist */}
      <section id="when-to-see-specialist" className="scroll-mt-28 py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#1A1A1A] border-b border-gray-150 pb-3.5">
            When to See a Hair Specialist
          </h2>
          <p className="text-sm md:text-base text-[#5F5F5F] leading-relaxed">
            Consider booking a consultation with a <Link href="/services/best-hair-specialist-dubai/" className="text-[#1F5E4B] font-semibold underline hover:text-[#17493A]">hair specialist in Dubai</Link> if you notice:
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Shedding that seems significantly heavier than usual for several weeks',
              'Visible thinning, receding hairline, or bald patches',
              'Scalp itching, redness, or flaking alongside hair loss',
              'Hair loss following a major life event, illness, or medication change',
              'Family history of pattern baldness combined with early thinning'
            ].map((bullet, idx) => (
              <div key={idx} className="bg-[#FDFCF7] p-5 rounded-2xl border border-gray-200 flex items-start gap-2.5 shadow-sm hover:border-[#1F5E4B]/30 transition-all">
                <ChevronRight className="w-5 h-5 text-[#1F5E4B] shrink-0 mt-0.5" />
                <span className="text-sm md:text-base text-[#1A1A1A] leading-relaxed">{bullet}</span>
              </div>
            ))}
          </div>
          <p className="text-sm md:text-base text-[#5F5F5F] leading-relaxed pt-2">
            Early evaluation generally gives specialists more options to work with, since follicles that are still active tend to respond better to supportive treatments than those that have been dormant for a long time.
          </p>
        </div>
      </section>

      {/* 21. Frequently Asked Questions */}
      <section id="faqs" className="scroll-mt-28 py-20 bg-[#FDFCF7] border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#1A1A1A] border-b border-gray-150 pb-3.5">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {faqsList.map((faq, idx) => (
              <div
                key={idx}
                className="border border-gray-200 bg-white rounded-2xl overflow-hidden transition-all duration-350"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-5 text-left font-bold text-sm md:text-base text-[#1A1A1A] hover:bg-gray-50/50"
                >
                  <span>{idx + 1}. {faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#1F5E4B] transition-transform duration-350 ${openFaq === idx ? 'rotate-180' : ''
                      }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="p-5 bg-gray-50/50 text-[#5F5F5F] text-xs md:text-sm leading-relaxed border-t border-gray-200">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 22. Why Choose RamaCare Polyclinic */}
      <section id="why-choose-ramacare" className="scroll-mt-28 py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#1A1A1A] border-b border-gray-150 pb-3.5">
            Why Choose RamaCare Polyclinic
          </h2>
          <p className="text-sm md:text-base text-[#5F5F5F] leading-relaxed">
            Understanding your hair growth cycle is only the first step — knowing what to do with that information is where a trusted clinic makes the difference. At RamaCare Polyclinic, patients across Dubai, including those from areas like Jumeirah, choose us for:
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Personalized hair and scalp assessments that look at your specific stage of hair loss, not just generic symptoms',
              'Evidence-based treatment planning, grounded in a clear understanding of the hair growth cycle',
              'Advanced PRP and Hair Mesotherapy options, tailored to your individual scalp condition',
              'Experienced healthcare professionals who take time to explain the “why” behind every recommendation',
              'Patient-focused care, with honest conversations about realistic outcomes',
              'A convenient Dubai location, making ongoing treatment and maintenance sessions easier to manage'
            ].map((point, idx) => (
              <div key={idx} className="bg-[#FDFCF7] p-6 rounded-2xl border border-gray-200 shadow-sm space-y-2 hover:border-[#1F5E4B]/30 transition-all flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#1F5E4B] shrink-0 mt-0.5" />
                <span className="text-sm md:text-base text-[#5F5F5F] leading-relaxed">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 23. Related Hair Treatment Guides */}
      <section id="related-guides" className="scroll-mt-28 py-20 bg-[#FDFCF7] border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#1A1A1A] border-b border-gray-150 pb-3.5">
            Related Hair Treatment Guides
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { label: 'Hair PRP Treatment in Dubai', link: '/services/hair-prp-dubai/', desc: 'Learn how our core PRP hair treatment works to support the natural growth cycle in active follicles.' },
              { label: 'Hair Loss Treatment in Dubai', link: '/services/hair-loss-dubai/', desc: 'An overview of the full range of hair loss treatments available, tailored to different causes and stages.' },
              { label: 'Hair Fall Treatment in Dubai', link: '/services/hair-treatment-dubai/', desc: 'Explore treatment options aimed specifically at addressing excessive hair fall and shedding.' },
              { label: 'Hair Regrowth Treatment Dubai', link: '/services/hair-regrowth-treatment-dubai/', desc: 'Explore hair regrowth options like PRP, causes of thinning, and realistic timelines at our Dubai clinic.' },
              { label: 'PRP Hair Treatment Before and After', link: '/services/prp-hair-treatment-before-and-after/', desc: 'See real context around what PRP treatment journeys can look like over time.' },
              { label: 'PRP Hair Treatment Recovery', link: '/services/prp-hair-treatment-recovery/', desc: 'Understand what to expect during recovery after a PRP session, including aftercare guidance.' },
              { label: 'PRP Hair Treatment Cost in Dubai', link: '/services/hair-prp-cost-dubai/', desc: 'Review the key factors that influence PRP treatment pricing in Dubai.' },
              { label: 'PRP vs Hair Transplant in Dubai', link: '/services/prp-vs-hair-transplant-dubai/', desc: 'Compare non-surgical PRP with surgical hair transplant options to see which may suit your goals.' },
              { label: 'PRP vs Hair Mesotherapy in Dubai', link: '/services/prp-vs-hair-mesotherapy-dubai/', desc: 'A detailed comparison of two popular non-surgical hair treatments available at our clinic.' },
              { label: 'Hair Mesotherapy in Dubai', link: '/services/mesotherapy-dubai/', desc: 'Learn how this nutrient-based treatment is customized to support individual scalp health needs.' }
            ].map((guide, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-[#1F5E4B]/30 hover:shadow-md transition-all duration-300 flex flex-col justify-between">
                <div className="space-y-2">
                  <h4 className="font-extrabold text-[#1A1A1A] text-sm md:text-base">
                    <Link href={guide.link} className="text-[#1F5E4B] hover:text-[#17493A] flex items-center gap-1">
                      {guide.label} <ArrowRight className="w-4 h-4" />
                    </Link>
                  </h4>
                  <p className="text-xs md:text-sm text-[#5F5F5F] leading-relaxed">
                    {guide.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action (CTA) */}
      <section id="book-appointment" className="scroll-mt-28 bg-gradient-to-br from-[#1F5E4B] to-[#17493A] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 text-center md:text-left relative overflow-hidden">
            <h3 className="text-2xl md:text-3xl font-extrabold">Take the Next Step Toward Healthier Hair</h3>
            <p className="text-sm md:text-base text-gray-200 max-w-2xl leading-relaxed">
              Understanding the hair growth cycle is valuable — but a personalized assessment is what turns that knowledge into an actual plan. Book Appointment with RamaCare Polyclinic today, or Contact Us if you have questions before your visit.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
              <Link
                href="/book-appointment/"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-sm font-bold text-[#1F5E4B] hover:bg-gray-100 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                <Calendar className="w-4 h-4" /> Book Appointment
              </Link>
              <a
                href="https://wa.me/971566597878?text=Hello%20RamaCare%20Polyclinic%2C%20I%20would%20like%20to%20inquire%20about%20the%20Hair%20Growth%20Cycle%20and%20related%2520treatments."
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-8 py-4 text-sm font-bold text-white hover:bg-white/10 transition-all"
              >
                <MessageCircle className="w-4 h-4" /> Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion & Disclosure */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h3 className="text-xl font-bold text-[#1A1A1A]">Conclusion</h3>
          <p className="text-sm md:text-base text-[#5F5F5F] leading-relaxed">
            The hair growth cycle is a continuous, natural process made up of four distinct stages — anagen, catagen, telogen, and exogen — that every hair follicle experiences throughout life. Understanding this cycle helps explain why hair sheds daily, why some hair loss is temporary while other forms are more persistent, and why treatments like PRP and Hair Mesotherapy work gradually rather than instantly.
          </p>
          <p className="text-sm md:text-base text-[#5F5F5F] leading-relaxed">
            If you’ve noticed changes in your hair and aren’t sure whether it reflects a normal part of the hair growth cycle or something worth addressing, a professional evaluation is the most reliable way to find out. The team at RamaCare Polyclinic is ready to assess your scalp, explain where your hair currently stands in its growth cycle, and help you build a realistic, personalized plan going forward.
          </p>

          <div className="bg-gray-50 border border-gray-200 p-5 rounded-2xl">
            <p className="text-xs text-[#7F7F7F] leading-relaxed">
              This content is intended for informational purposes and does not constitute medical advice. Individual hair growth patterns and treatment outcomes vary and are not guaranteed. Please consult a licensed medical professional at RamaCare Polyclinic for a personalized assessment.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
