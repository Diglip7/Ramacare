import Layout from '../../../components/Layout';
import Head from 'next/head';
import { useState, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Clock,
  TrendingUp,
  Camera,
  CheckCircle,
  XCircle,
  Info,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Calendar,
  MessageCircle,
  Phone,
  Droplet,
  FlaskConical,
  Scissors,
  Sun,
  Wind,
  Droplets,
  ListChecks,
  RotateCw,
  Award,
  Venus,
  Mars,
  Target,
  Shield,
  Ban,
  Eye,
  Check,
} from 'lucide-react';

// ---- Page content data ----

const outcomeSpectrum = [
  { title: 'Reduced Shedding', desc: 'Noticing fewer hairs on your pillow, in the shower drain, or on your brush.' },
  { title: 'Visible Density Improvement', desc: 'The scalp appearing less see-through in certain areas, often assessed through photos or trichoscopy rather than a quick mirror glance.' },
  { title: 'Stronger-Looking Hair', desc: 'Existing hairs appearing thicker or less fine, without necessarily meaning new follicles have activated.' },
  { title: 'New Hair Growth', desc: 'Genuinely new hairs emerging from follicles that had gone dormant — the most significant but also least guaranteed outcome.' },
];

const immediateEffects = [
  'Mild scalp tenderness at injection sites',
  'Temporary redness of the treated area',
  'Minor swelling, particularly on the forehead or scalp',
  'Small, pinpoint injection-site marks',
  'Temporary discomfort when touching the scalp',
];

const timelineStory = [
  {
    tag: 'Immediately After Treatment',
    body: 'None of this reflects treatment “working” or “not working” — it’s simply the expected response to the injections themselves. Dramatic hair growth should never be expected immediately after a session; the biological process PRP aims to support takes time to unfold.',
    hasBullets: true,
  },
  {
    tag: 'Early Recovery Period',
    body: 'Over the following days, the scalp typically settles, redness fades, and any tenderness resolves. It’s also completely normal to continue experiencing your usual daily hair shedding during this period — PRP does not stop the natural hair cycle overnight, and a stray hair here or there is not a sign of failure. Following your clinician’s aftercare instructions during this window supports a comfortable recovery and reduces unnecessary irritation.',
  },
  {
    tag: 'Early Hair Changes',
    body: 'In the weeks that follow, some patients begin to notice subtle differences — perhaps a little less shedding, or hair that feels slightly less fragile. Others notice nothing at all in this early window, which is also normal. Because hair growth is a slow biological process, it’s best not to read too much into very early changes (or the lack of them) at this stage.',
  },
  {
    tag: 'Intermediate Progress',
    body: 'Around the two-to-four-month mark, some patients start to notice more consistent changes: a gradual shift in hair texture, a possible change in the pattern of shedding, or early signs of density improvement when comparing scalp photos taken under consistent conditions. This is typically when clinics recommend monitoring progress more formally, often alongside a follow-up session, since PRP is generally administered as a series rather than a single treatment.',
  },
  {
    tag: 'Later Results',
    body: 'More noticeable changes — where density improvement becomes apparent to the patient or to people around them — generally require more time, often several months into a full treatment course, and vary considerably between individuals. Whether and how much a person’s hair responds by this stage depends on a combination of factors including the underlying cause of hair loss, the health of the remaining follicles, the degree of thinning already present, age, overall health, the specific treatment plan followed, and simple individual biological variation. Some patients see meaningful change; others see modest change; and some see limited change, which is why ongoing clinical follow-up matters.',
  },
];

const monthByMonth = [
  {
    stage: 'Early Stage',
    period: 'First Few Weeks',
    notice: 'Scalp recovering from injections; shedding pattern usually unchanged; no visible density change expected yet',
    remember: 'This stage reflects healing, not treatment efficacy — it’s too early to judge results',
  },
  {
    stage: 'Developing Stage',
    period: '~1–2 Months',
    notice: 'Some patients report a subtle reduction in shedding; hair may feel marginally different to the touch',
    remember: 'Changes at this point are often inconsistent and can be hard to notice day to day',
  },
  {
    stage: 'Intermediate Stage',
    period: '~2–4 Months',
    notice: 'Possible gradual shifts in texture or shedding pattern; some patients begin seeing early signs in comparison photos',
    remember: 'This is a common point for a follow-up session and formal progress review',
  },
  {
    stage: 'Later Stage',
    period: '4+ Months, Often After Multiple Sessions',
    notice: 'More noticeable density-related change may become apparent in responders; others may see limited change',
    remember: 'Outcomes vary widely; this is when your clinician can meaningfully assess whether the plan should continue or be adjusted',
  },
];

const goodResults = [
  'Reduced excessive shedding compared to your baseline',
  'Improved appearance of hair density, particularly in areas of early-to-moderate thinning',
  'Stronger-looking existing hairs, appearing less fine or fragile',
  'Improved scalp coverage in specific zones',
  'Changes in hair texture, such as feeling less brittle',
  'Stabilization of progressive thinning in some patients — meaning things stop getting worse, even without dramatic new growth',
];

const resultConcepts = [
  { title: 'Hair Density', desc: 'Refers to the number of hairs per unit area of scalp.' },
  { title: 'Hair Shaft Thickness', desc: 'Refers to how thick each individual hair strand is — thicker shafts can make hair look fuller even without more strands.' },
  { title: 'New Follicular Growth', desc: 'Refers to genuinely new hairs emerging from follicles, which is a different (and less consistently achieved) outcome than the two above.' },
];

const photoTips = [
  { title: 'Same Lighting', desc: 'Different lighting can dramatically change how dense or thin hair appears' },
  { title: 'Same Camera Angle', desc: 'Even small angle changes alter how the scalp looks' },
  { title: 'Similar Hair Length', desc: 'Longer hair naturally provides more coverage' },
  { title: 'Similar Styling', desc: 'Wet hair, product use, or combing technique can distort comparisons' },
  { title: 'Same Scalp Area', desc: 'Photos should focus on the identical region each time' },
  { title: 'Comparable Time Intervals', desc: 'Comparing month 1 to month 6 tells a different story than month 1 to month 2' },
  { title: 'Individual Differences', desc: 'Every patient\u2019s biology, hair-loss cause, and starting density are different' },
];

const resultFactors = [
  { title: 'Underlying Cause', desc: 'Genetic thinning, stress-related shedding, and other causes may respond differently' },
  { title: 'Severity of Thinning', desc: 'Earlier-stage thinning with more surviving follicles generally has more to work with' },
  { title: 'Age', desc: 'Follicle activity and general healing response can shift with age' },
  { title: 'Follicle Health', desc: 'Dormant but viable follicles behave differently than follicles that have been inactive for a long time' },
  { title: 'Duration of Hair Loss', desc: 'Longer-standing hair loss may respond differently than recent-onset thinning' },
  { title: 'Overall Health', desc: 'General health status can influence tissue response and healing' },
  { title: 'Nutritional Status', desc: 'Deficiencies affecting hair growth may need to be addressed alongside PRP' },
  { title: 'Hormonal Factors', desc: 'Hormonal imbalances contributing to hair loss may need separate management' },
  { title: 'Scalp Health', desc: 'Conditions like inflammation or infection can affect the treatment area' },
  { title: 'Treatment Protocol', desc: 'The specific technique and preparation method used' },
  { title: 'Number of Sessions', desc: 'A single session versus a full recommended course' },
  { title: 'Follow-Up', desc: 'Consistent attendance at review appointments allows adjustments when needed' },
  { title: 'Individual Biological Response', desc: 'Ultimately, no two people respond identically to the same treatment' },
];

const notIdealCandidate = [
  'Advanced, irreversible follicular loss, where follicles are no longer viable',
  'Certain scarring alopecias, where the follicle structure itself has been replaced by scar tissue',
  'Active scalp conditions that require treatment before any hair-restoration procedure is considered',
  'Unexplained sudden hair loss, which typically warrants diagnostic evaluation first',
  'Conditions better addressed through another medical approach, depending on the underlying cause',
];

const growthCyclePhases = [
  { phase: 'Anagen', sub: 'Growth Phase', desc: 'The active phase where hair follicles produce new hair, lasting years' },
  { phase: 'Catagen', sub: 'Transition Phase', desc: 'A short transitional phase where growth stops' },
  { phase: 'Telogen', sub: 'Resting Phase', desc: 'A resting period before the hair is eventually shed' },
  { phase: 'Exogen', sub: 'Shedding Phase', desc: 'The phase where the resting hair is released and a new cycle can begin' },
];

const hairLossTypes = [
  { title: 'Genetic Hair Loss', desc: 'Also known as androgenetic alopecia, this is one of the more commonly discussed indications for PRP, though response still varies by stage and individual factors.' },
  { title: 'Male Pattern Hair Loss', desc: 'Often involves a receding hairline and crown thinning; PRP may be considered as part of a broader management plan.' },
  { title: 'Female Pattern Hair Loss', desc: 'Typically presents as diffuse thinning rather than a receding hairline, and treatment planning often differs accordingly.' },
  { title: 'Stress-Related Hair Shedding', desc: 'Sometimes called telogen effluvium, this type of shedding is often temporary and may resolve as the underlying stressor is addressed, with PRP\u2019s role considered case by case.' },
  { title: 'Postpartum Hair Shedding', desc: 'A common and often temporary form of shedding related to hormonal shifts after childbirth, which may or may not require active treatment.' },
  { title: 'Other Causes', desc: 'Nutritional deficiencies, thyroid conditions, autoimmune conditions, and other medical causes can all contribute to hair loss and require their own diagnostic pathway.' },
];

const notSeeingResults = [
  'Reassessment of your scalp and hair-loss pattern',
  'Review of the original diagnosis, in case another contributing cause was missed',
  'Review of the treatment plan, including technique, spacing, and protocol',
  'Evaluation of other contributing factors, such as nutrition, hormones, or scalp conditions',
  'Consideration of additional or alternative treatment options, where clinically appropriate',
];

const prpVsMeso = [
  { label: 'Basic Approach', prp: 'Uses the patient\u2019s own concentrated platelets from their blood', other: 'Uses a formulated injectable solution of vitamins, minerals, or other active ingredients' },
  { label: 'Treatment Process', prp: 'Requires a blood draw and processing step before injection', other: 'Typically does not require a blood draw' },
  { label: 'Treatment Planning', prp: 'Usually a series of sessions with spacing determined by response', other: 'Often follows its own separate protocol and session schedule' },
  { label: 'Expected Timeline', prp: 'Gradual changes typically assessed over several months', other: 'Timeline and expected changes depend on the specific formulation used' },
  { label: 'Candidate Suitability', prp: 'Depends on hair-loss cause and follicle health', other: 'Depends on the specific formulation and the patient\u2019s needs' },
  { label: 'Limitations', prp: 'Not effective for all causes of hair loss; results vary', other: 'Efficacy and consistency can vary depending on formulation used' },
];

const prpVsTransplant = [
  { label: 'Treatment Type', prp: 'Non-surgical injectable treatment', other: 'Surgical procedure' },
  { label: 'Surgical Procedure', prp: 'No surgery involved', other: 'Involves relocating hair follicles from a donor area' },
  { label: 'Main Objective', prp: 'Supporting the existing follicular environment', other: 'Physically restoring hair in areas with significant permanent loss' },
  { label: 'Recovery', prp: 'Minimal downtime; mild, short-term scalp sensitivity', other: 'Longer recovery period with specific aftercare requirements' },
  { label: 'Candidate Suitability', prp: 'Often considered for earlier-stage or diffuse thinning', other: 'Often considered when there is stable donor hair and more advanced localized loss' },
  { label: 'Expected Timeline', prp: 'Gradual changes over months', other: 'Growth of transplanted follicles also occurs gradually, typically over many months' },
  { label: 'Long-Term Considerations', prp: 'May require ongoing maintenance sessions', other: 'Transplanted follicles are generally more resistant to further loss, though native hair loss can still progress' },
];

const costFactors = [
  'The number of sessions recommended',
  'The specific treatment protocol followed',
  'The initial consultation and assessment',
  'Follow-up appointments included in the plan',
  'Any patient-specific requirements identified during assessment',
];

const maximizeSteps = [
  'Follow aftercare instructions provided after each session',
  'Attend recommended follow-up appointments so your clinician can track progress and adjust as needed',
  'Manage underlying medical conditions that may be contributing to hair loss',
  'Maintain balanced nutrition, since nutritional status can affect hair health',
  'Avoid excessive heat styling and tight hairstyles that place tension (traction) on the scalp',
  'Manage any active scalp conditions in coordination with your provider',
  'Avoid smoking where relevant, as it can affect circulation and healing',
  'Follow your clinician\'s specific treatment plan rather than self-adjusting the schedule',
  'Track your progress consistently using the methods outlined below',
];

const trackingSteps = [
  'Take baseline photos before your first session',
  'Use the same lighting every time you photograph your scalp',
  'Use the same camera angle and distance',
  'Style your hair the same way for each photo (ideally dry, unstyled)',
  'Photograph the same scalp area consistently',
  'Space your photos at consistent intervals — for example, monthly',
  'Note observations about density in specific zones',
  'Note shedding patterns, such as hair counts on your pillow or in the shower',
  'Bring your photo log to follow-up appointments so your clinician can assess objectively',
];

const commonMistakes = [
  'Expecting instant growth, when the biological process takes months',
  'Comparing yourself to another patient, whose hair-loss cause and severity may be entirely different',
  'Comparing photos taken under different lighting or angles, which distorts the comparison',
  'Stopping treatment too early without professional guidance, before the process has had time to unfold',
  'Focusing only on shedding while ignoring other markers like texture or density',
  'Ignoring the underlying cause of hair loss rather than addressing it alongside treatment',
  'Assuming more treatment automatically means better results, when in some cases the issue is diagnosis or protocol, not quantity',
];

const dubaiFactors = [
  { icon: Sun, label: 'Sun Exposure' },
  { icon: Wind, label: 'Air Conditioning' },
  { icon: Droplets, label: 'Water Quality' },
];

const whyChoose = [
  'Personalized consultation to understand your hair-loss history and concerns',
  'Hair and scalp assessment to help identify contributing factors',
  'Individualized treatment planning rather than a generic, fixed protocol',
  'Patient education, so you understand what to realistically expect at each stage',
  'PRP treatment options discussed as part of a broader hair-health conversation',
  'Follow-up guidance to monitor your progress over time',
  'A convenient Dubai location, making ongoing follow-up practical',
];

const faqs = [
  { question: 'How long does PRP take to show results?', answer: 'Most patients who respond notice subtler changes, like reduced shedding, within a couple of months, with more noticeable changes sometimes taking four to six months or longer. This varies significantly by individual.' },
  { question: 'When will I notice PRP hair treatment results?', answer: "There's no fixed timeline that applies to everyone. Some notice small changes early; others need a full treatment course before seeing anything meaningful, and some may not see significant change at all." },
  { question: 'What do PRP results look like?', answer: 'Results can range from reduced shedding and improved hair texture to visible density improvement in responders. They rarely look like an overnight transformation.' },
  { question: 'Does PRP regrow lost hair?', answer: 'PRP may support existing follicles and, in some patients, contribute to visible improvements, but it does not guarantee regrowth of hair in areas where follicles are no longer viable.' },
  { question: 'Can PRP stop hair loss?', answer: 'PRP may help slow or stabilize thinning in some patients, particularly when combined with addressing the underlying cause, but it does not guarantee a permanent stop to hair loss, especially in progressive conditions.' },
  { question: 'Are PRP results permanent?', answer: 'No treatment can promise permanent results for hair loss, since many causes are progressive. Maintenance sessions are often part of a long-term plan.' },
  { question: 'How many PRP sessions may be needed?', answer: 'This depends on your specific diagnosis and response, and is best determined through consultation rather than a fixed universal number.' },
  { question: 'Does PRP work for everyone?', answer: 'No. Response varies significantly based on the cause and severity of hair loss, follicle health, and individual biology. Some patients see limited benefit.' },
  { question: 'Why am I not seeing PRP results?', answer: "This could relate to your specific hair-loss cause, the stage of your treatment course, or factors outside the treatment itself. It's worth discussing with your clinician rather than assuming the worst." },
  { question: 'Can PRP results vary between men and women?', answer: 'Yes. Men and women often present with different patterns of hair loss (such as receding hairlines versus diffuse thinning), which can influence both suitability and expected outcomes.' },
  { question: 'Does PRP work for genetic hair loss?', answer: 'PRP is commonly discussed in relation to genetic (androgenetic) hair loss, though individual response still varies and it isn’t guaranteed to work for every case.' },
  { question: 'What should I expect after my first PRP session?', answer: 'Mild scalp tenderness, temporary redness, and minor swelling are common in the first day or two. Visible hair changes are not expected this early.' },
  { question: 'Can I compare my results with another patient?', answer: "It's not a reliable comparison. Differences in hair-loss cause, severity, and biology mean two patients can have very different outcomes from a similar treatment plan." },
  { question: 'How should I photograph PRP progress?', answer: 'Use consistent lighting, camera angle, hairstyle, and scalp area at regular intervals — this makes comparisons far more accurate than casual mirror checks.' },
  { question: 'Does Hair Mesotherapy produce different results from PRP?', answer: 'The two treatments use different substances and mechanisms, so outcomes and suitability can differ. A clinician can help determine which, if either, fits your situation.' },
  { question: 'Is PRP better than a hair transplant?', answer: 'Neither is universally “better” — they serve different purposes. PRP is non-surgical and supports the existing follicular environment; a transplant physically relocates viable follicles. Suitability depends on your specific case.' },
  { question: 'How much does PRP hair treatment cost in Dubai?', answer: 'Cost depends on your treatment plan, including the number of sessions and follow-up required. See our PRP Hair Treatment Cost in Dubai page for more detail.' },
  { question: 'What happens if PRP does not work for me?', answer: "Your clinician can reassess your diagnosis, review the treatment protocol, and discuss other options where appropriate — limited results with PRP don't necessarily mean no treatment can help." },
];

const relatedGuides = [
  { title: 'Hair PRP Treatment in Dubai', desc: 'An overview of what the PRP procedure itself involves, from consultation through to the injection process.', href: '/services/hair-prp-dubai/' },
  { title: 'PRP Hair Treatment Before and After', desc: 'A closer look at how to interpret progress photography and avoid common comparison mistakes.', href: '/services/prp-hair-treatment-before-and-after/' },
  { title: 'PRP Hair Treatment Recovery', desc: 'What to expect in the days immediately following a PRP session, including aftercare guidance.', href: '/services/prp-hair-treatment-recovery/' },
  { title: 'PRP Hair Treatment Cost in Dubai', desc: 'An explanation of the factors that influence PRP pricing and how treatment plans are structured.', href: '/services/hair-prp-cost-dubai/' },
  { title: 'Hair Loss Treatment in Dubai', desc: 'A broader look at the range of hair-loss treatment options available beyond PRP alone.', href: '/services/hair-treatment-dubai/' },
  { title: 'Hair Fall Treatment in Dubai', desc: 'Guidance specifically addressing excessive hair shedding and its possible causes.', href: '/services/hair-loss-dubai/' },
  { title: 'Hair Regrowth Treatment Dubai', desc: 'An overview of treatments aimed at supporting hair growth beyond PRP.', href: '/services/hair-regrowth-treatment-dubai/' },
  { title: 'Hair Growth Cycle', desc: 'A breakdown of the anagen, catagen, telogen, and exogen phases that underpin how hair treatments work over time.', href: '/services/hair-growth-cycle/' },
  { title: 'Hair Loss Causes', desc: 'A guide to the many possible underlying causes of hair loss, from genetic to hormonal to nutritional.', href: '/services/hair-loss-dubai/' },
  { title: 'PRP vs Hair Mesotherapy', desc: 'A side-by-side comparison of these two injectable scalp treatments.', href: '/services/prp-vs-hair-mesotherapy-dubai/' },
  { title: 'PRP vs Hair Transplant in Dubai', desc: 'A comparison of non-surgical PRP and surgical hair transplantation.', href: '/services/prp-vs-hair-transplant-dubai/' },
  { title: 'Hair Mesotherapy in Dubai', desc: 'An overview of mesotherapy as an alternative or complementary scalp treatment.', href: '/services/mesotherapy-dubai/' },
  { title: 'Best Hair Specialist in Dubai', desc: 'Guidance on what to look for when choosing a hair-loss specialist.', href: '/services/best-hair-specialist-dubai/' },
  { title: 'Hair Loss Clinic Dubai', desc: 'What to expect from a comprehensive hair-loss clinic visit, from diagnosis to treatment planning.', href: '/services/hair-loss-clinic-dubai/' },
];

export default function PrpHairTreatmentResultsPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [openStage, setOpenStage] = useState(0);
  const toggleFaq = (i) => setOpenFaq(openFaq === i ? null : i);

  const typesScrollRef = useRef(null);
  const guidesScrollRef = useRef(null);

  const scrollContainer = (ref, direction) => {
    if (ref.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      ref.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const faqLeft = faqs.filter((_, i) => i % 2 === 0);
  const faqRight = faqs.filter((_, i) => i % 2 === 1);

  return (
    <Layout>
      <Head>
        <title key="title">PRP Hair Treatment Results: Timeline & Expectations</title>
        <meta
          name="description"
          content="Wondering what PRP hair treatment results really look like? Learn the realistic timeline, what to expect, and how to track progress in Dubai."
          key="description"
        />
        <meta property="og:title" content="PRP Hair Treatment Results: Timeline & Expectations | RamaCare Polyclinic" key="og:title" />
        <meta
          property="og:description"
          content="A realistic, honest look at PRP hair treatment results — timeline, month-by-month expectations, and how to track your own progress."
          key="og:description"
        />
        <meta property="og:type" content="website" key="og:type" />
        <meta name="twitter:title" content="PRP Hair Treatment Results — RamaCare Polyclinic" key="twitter:title" />
        <meta
          name="twitter:description"
          content="Realistic PRP hair treatment results: timeline, expectations, and how to track your progress in Dubai."
          key="twitter:description"
        />

        <script
          key="schema-medicalclinic"
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
        <script
          key="schema-webpage"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              name: 'PRP Hair Treatment Results: Timeline & Expectations',
              url: 'https://ramacarepolyclinic.ae/services/prp-hair-treatment-results/',
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
                { '@type': 'ListItem', position: 3, name: 'PRP Hair Treatment Results', item: 'https://ramacarepolyclinic.ae/services/prp-hair-treatment-results/' },
              ],
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
          key="schema-article"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: 'PRP Hair Treatment Results: Timeline, Expectations & Progress',
              about: 'PRP hair treatment results, realistic timeline and expectations',
              publisher: { '@type': 'MedicalClinic', name: 'RamaCare Polyclinic' },
            }),
          }}
        />
      </Head>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-3">
        <nav aria-label="Breadcrumb" className="mb-4 flex items-center text-xs font-medium text-[#5F5F5F] gap-1.5">
          <Link href="/" className="hover:text-[#1F5E4B] transition-colors">Home</Link>
          <span className="mx-1">/</span>
          <Link href="/services/hair-treatment-dubai/" className="hover:text-[#1F5E4B] transition-colors">Hair Treatments</Link>
          <span className="mx-1">/</span>
          <span className="text-[#1F5E4B]">PRP Hair Treatment Results</span>
        </nav>
      </div>

      {/* ============ HERO — full-bleed image with glass quick-answer card ============ */}
      <section className="relative min-h-[640px] flex items-end overflow-hidden">
        <img
          src="/images/hair-growth.jpg"
          alt="Doctor discussing PRP hair treatment options with a patient in Dubai"
          title="PRP Hair Treatment Results — RamaCare Polyclinic"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F2F24] via-[#0F2F24]/80 to-[#0F2F24]/30" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-32 w-full">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-white mb-5">
              <TrendingUp className="w-4 h-4" />
              Realistic Expectations, Not Marketing Promises
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
              PRP Hair Treatment Results: Timeline, Expectations &amp; Progress
            </h1>
            <p className="text-lg text-white/85 leading-relaxed max-w-2xl">
              If you&apos;re researching PRP for hair loss, you&apos;ve probably already seen dramatic before-and-after
              photos online and wondered: will this actually work for me, and how long will it take? It&apos;s a fair
              question, and an important one to answer honestly rather than with marketing promises.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mt-10 max-w-2xl bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 md:p-8"
          >
            <div className="flex items-center gap-2 text-white font-bold mb-3">
              <Clock className="w-5 h-5" />
              Quick Answer: How Long Does PRP Take to Show Hair Results?
            </div>
            <p className="text-white/85 leading-relaxed text-sm md:text-base">
              Most patients who respond to PRP begin noticing subtler signs — such as somewhat reduced shedding or
              slightly stronger-feeling hair — within roughly two to three months, with more noticeable
              density-related changes sometimes becoming apparent over four to six months or longer, often after
              multiple sessions. This is a general pattern, not a guarantee: some people notice changes sooner, some
              later, and some may not respond significantly at all. The actual timeline depends on the cause of your
              hair loss, the severity of thinning, your overall health, and how your body responds to treatment. A
              proper assessment at consultation is the only reliable way to estimate what to expect in your specific
              case.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="flex flex-col sm:flex-row gap-4 mt-8">
            <a
              href="#book-now"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#1F5E4B] px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Calendar className="w-5 h-5" />
              Book a Consultation
            </a>
            <a
              href="https://wa.me/971566597878?text=Hello%20RamaCare%20Polyclinic%2C%20I%20would%20like%20to%20ask%20about%20PRP%20Hair%20Treatment%20results%20and%20book%20a%20consultation."
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      {/* ============ INTRO ============ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto space-y-5">
          <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-lg text-[#5F5F5F] leading-relaxed">
            Hair is deeply personal. When it starts thinning, it&apos;s natural to want quick answers and quick
            results. But Platelet-Rich Plasma (PRP) therapy doesn&apos;t work like a switch that flips overnight
            — it works with your body&apos;s own biology, which means the timeline, the pattern of change, and
            the degree of improvement will differ from person to person. Some patients notice reduced shedding within
            a couple of months. Others need a full course of sessions before they or the people around them start to
            notice a difference. And for some, PRP may only be one part of a broader hair-loss management plan.
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.08 }} className="text-lg text-[#5F5F5F] leading-relaxed">
            At RamaCare Polyclinic in Dubai, we believe patients deserve a realistic picture before they commit to
            any treatment — not an idealized one. This guide walks through what PRP hair treatment results
            generally look like, when changes tend to appear, what influences your individual outcome, and how to
            fairly evaluate your own progress instead of comparing yourself to someone else&apos;s photos. If
            you&apos;re also curious about the procedure itself, our{' '}
            <a href="/services/hair-prp-dubai/" className="text-[#1F5E4B] font-semibold underline decoration-[#1F5E4B]/30 hover:decoration-[#1F5E4B]">
              Hair PRP Treatment in Dubai
            </a>{' '}
            page covers what happens during a session.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            className="text-[#5F5F5F] leading-relaxed bg-[#F9F7F2] border border-gray-200 rounded-2xl p-6 text-sm"
          >
            This article does not promise guaranteed regrowth, permanent results, or a specific percentage of
            improvement — because no responsible clinic can promise that for a biological treatment. What it
            will do is help you understand what&apos;s realistic, what&apos;s not, and what questions to bring to
            your consultation.
          </motion.p>
        </div>
      </section>

      {/* ============ WHAT ARE PRP RESULTS — spectrum bar ============ */}
      <section className="py-20 px-4 bg-[#F9F7F2]">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid lg:grid-cols-12 gap-10 items-center mb-14">
            <div className="lg:col-span-7 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A]">What Are PRP Hair Treatment Results?</h2>
              <p className="text-lg text-[#5F5F5F] leading-relaxed">
                PRP (Platelet-Rich Plasma) therapy involves drawing a small sample of your own blood, processing it
                to concentrate the platelets, and injecting that concentrate into areas of the scalp experiencing
                thinning. The theory behind it is that the growth factors in platelets may help support the hair
                follicle environment.
              </p>
              <p className="text-lg text-[#5F5F5F] leading-relaxed">
                When patients talk about &ldquo;results,&rdquo; they&apos;re usually picturing one thing: more
                visible hair. But in reality, PRP outcomes tend to fall along a spectrum, and it helps to understand
                the different categories before you start treatment:
              </p>
            </div>
            <div className="lg:col-span-5">
              <img
                src="/images/scalp-assessment-hair-loss.jpg"
                alt="Clinician performing a scalp assessment to evaluate hair loss pattern"
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </motion.div>

          {/* spectrum bar */}
          <div className="relative">
            <div className="hidden md:block absolute top-6 left-6 right-6 h-1 rounded-full bg-gradient-to-r from-[#1F5E4B]/20 via-[#1F5E4B]/60 to-[#1F5E4B]" />
            <div className="grid md:grid-cols-4 gap-6">
              {outcomeSpectrum.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative">
                  <div
                    className="hidden md:flex w-3.5 h-3.5 rounded-full border-4 border-[#F9F7F2] mb-4 mx-auto"
                    style={{ backgroundColor: `rgba(31,94,75,${0.25 + i * 0.25})` }}
                  />
                  <div className="bg-white rounded-2xl border border-gray-200 p-6 h-full hover:shadow-lg transition-all">
                    <span className="text-xs font-bold text-[#1F5E4B] uppercase tracking-wide">Stage {i + 1}</span>
                    <h3 className="text-base font-bold text-[#1A1A1A] mt-1 mb-2">{item.title}</h3>
                    <p className="text-sm text-[#5F5F5F] leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 text-[#5F5F5F] leading-relaxed bg-white border border-gray-200 rounded-2xl p-6"
          >
            It&apos;s important to understand that these are not the same thing, and a good outcome for one patient
            may look completely different from a good outcome for another. PRP is also not a guaranteed cure for
            every type of hair loss — its role, and the degree to which it can help, depends heavily on why the
            hair loss is happening in the first place. This is why results should always be assessed over a period
            of months, not days, and ideally under the guidance of the clinician who is following your case.
          </motion.p>
        </div>
      </section>

      {/* ============ TIMELINE — vertical alternating narrative ============ */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">PRP Hair Treatment Results Timeline</h2>
          </motion.div>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#1F5E4B]/15 -translate-x-1/2" />
            <div className="space-y-10">
              {timelineStory.map((stage, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className={`md:grid md:grid-cols-2 md:gap-10 items-start ${i % 2 === 1 ? '' : ''}`}
                >
                  <div className={`${i % 2 === 1 ? 'md:col-start-2' : ''}`}>
                    <div className={`bg-[#F9F7F2] rounded-2xl border border-gray-200 p-7 relative ${i % 2 === 1 ? 'md:mr-0' : ''}`}>
                      <div className="hidden md:block absolute top-7 w-4 h-4 rounded-full bg-[#1F5E4B] border-4 border-white shadow" style={i % 2 === 1 ? { left: '-2.5rem' } : { right: '-2.5rem' }} />
                      <span className="inline-block text-xs font-bold text-[#1F5E4B] uppercase tracking-wide mb-2">{stage.tag}</span>
                      {stage.hasBullets && (
                        <ul className="space-y-2 mb-4">
                          {immediateEffects.map((e, j) => (
                            <li key={j} className="flex items-start gap-2 text-sm text-[#5F5F5F]">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#1F5E4B] mt-2 flex-shrink-0" />
                              {e}
                            </li>
                          ))}
                        </ul>
                      )}
                      <p className="text-[#5F5F5F] leading-relaxed text-sm">
                        {stage.body}
                        {stage.tag === 'Early Recovery Period' && (
                          <>
                            {' '}For a full breakdown of what to do (and avoid) in the days after treatment, see our
                            guide on{' '}
                            <a href="/services/prp-hair-treatment-recovery/" className="text-[#1F5E4B] font-semibold underline decoration-[#1F5E4B]/30 hover:decoration-[#1F5E4B]">
                              PRP Hair Treatment Recovery
                            </a>
                            .
                          </>
                        )}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-10">
            <img
              src="/images/PRP injection being administered.jpg"
              alt="PRP injection being administered to the scalp during a hair treatment session"
              className="w-full h-72 object-cover rounded-2xl shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* ============ MONTH BY MONTH — expandable stage stepper ============ */}
      <section className="py-20 px-4 bg-[#1F5E4B]">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">PRP Results Month by Month</h2>
            <p className="text-white/75 max-w-2xl mx-auto leading-relaxed">
              The table below offers a general, patient-friendly overview. It is not a promise of what will happen
              in your case — actual timing and degree of change vary by individual.
            </p>
          </motion.div>

          <div className="mt-10 flex flex-wrap justify-center gap-2 mb-2">
            {monthByMonth.map((m, i) => (
              <button
                key={i}
                onClick={() => setOpenStage(i)}
                className={`px-5 py-3 rounded-xl font-semibold text-sm transition-all ${openStage === i ? 'bg-white text-[#1F5E4B] shadow-lg' : 'bg-white/10 text-white/80 hover:bg-white/20'
                  }`}
              >
                {m.stage}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={openStage}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-2xl p-8 mt-6"
            >
              <span className="inline-block text-xs font-bold text-[#1F5E4B] uppercase tracking-wide mb-2">{monthByMonth[openStage].period}</span>
              <div className="grid md:grid-cols-2 gap-6 mt-3">
                <div>
                  <h4 className="font-bold text-[#1A1A1A] mb-2 flex items-center gap-2">
                    <Eye className="w-4 h-4 text-[#1F5E4B]" /> What Patients May Notice
                  </h4>
                  <p className="text-[#5F5F5F] leading-relaxed text-sm">{monthByMonth[openStage].notice}</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#1A1A1A] mb-2 flex items-center gap-2">
                    <Info className="w-4 h-4 text-[#1F5E4B]" /> What to Remember
                  </h4>
                  <p className="text-[#5F5F5F] leading-relaxed text-sm">{monthByMonth[openStage].remember}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ============ GOOD RESULTS — checklist + concept chips ============ */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">What Do Good PRP Hair Results Look Like?</h2>
            <p className="text-lg text-[#5F5F5F] leading-relaxed max-w-3xl">
              &ldquo;Good results&rdquo; doesn&apos;t always mean a head full of new hair. In clinical practice,
              meaningful progress can show up in several different ways, including:
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
              {goodResults.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="flex items-start gap-3 bg-[#1F5E4B]/5 border border-[#1F5E4B]/10 rounded-xl p-4"
                >
                  <CheckCircle className="w-5 h-5 text-[#1F5E4B] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-[#5F5F5F] leading-relaxed">{item}</span>
                </motion.div>
              ))}
            </div>
            <div className="lg:col-span-5">
              <img
                src="/images/hair-density-assessment.jpg"
                alt="Clinician assessing hair density during a PRP follow-up appointment"
                className="w-full h-full min-h-[220px] object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>

          <div className="mt-10">
            <p className="text-[#5F5F5F] leading-relaxed mb-5">
              It&apos;s worth understanding the difference between three related but distinct concepts:
            </p>
            <div className="grid md:grid-cols-3 gap-5">
              {resultConcepts.map((c, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-[#F9F7F2] rounded-2xl border border-gray-200 p-6"
                >
                  <h4 className="font-bold text-[#1A1A1A] mb-2">{c.title}</h4>
                  <p className="text-sm text-[#5F5F5F] leading-relaxed">{c.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 text-[#5F5F5F] leading-relaxed bg-amber-50 border border-amber-200 rounded-2xl p-6"
          >
            A patient might see real improvement in shaft thickness and shedding without significant new follicular
            growth, and that can still represent a worthwhile clinical outcome depending on their goals and starting
            point. This is exactly why a single &ldquo;before and after&rdquo; photo can be misleading if you
            don&apos;t know which of these categories actually changed.
          </motion.p>
        </div>
      </section>

      {/* ============ BEFORE & AFTER PHOTOS — phone/camera mockup checklist ============ */}
      <section className="py-20 px-4 bg-[#F9F7F2]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-10 items-start">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-5">
            <div className="bg-[#1A1A1A] rounded-[2rem] p-4 shadow-2xl">
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="/images/prp-before-after-concept.jpg"
                  alt="Conceptual illustration of tracking hair treatment progress over time"
                  className="w-full h-72 object-cover"
                />
                <div className="absolute top-3 left-3 flex items-center gap-2 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1.5">
                  <Camera className="w-4 h-4 text-white" />
                  <span className="text-xs text-white font-semibold">Progress Photo</span>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-7">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">PRP Before and After Photos</h2>
            <p className="text-lg text-[#5F5F5F] leading-relaxed mb-6">
              Before-and-after photographs can be a genuinely useful way to track progress — but only when
              interpreted carefully. When reviewing your own photos, or anyone else&apos;s, keep these factors in
              mind:
            </p>
            <div className="space-y-3">
              {photoTips.map((tip, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="flex items-start gap-3 bg-white rounded-xl border border-gray-200 p-4"
                >
                  <Check className="w-5 h-5 text-[#1F5E4B] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#1A1A1A] text-sm">{tip.title}</span>
                    <span className="text-sm text-[#5F5F5F]"> — {tip.desc}</span>
                  </div>
                </motion.div>
              ))}
            </div>
            <p className="mt-6 text-[#5F5F5F] leading-relaxed text-sm">
              This last point matters more than people often realize. Seeing a compelling transformation photo online
              does not mean you will experience the same outcome — the person in that photo may have had a
              different underlying cause, an earlier stage of thinning, or simply a more favorable individual
              response. For a deeper look at how to properly evaluate progress photography, see our dedicated guide
              to{' '}
              <a href="/services/prp-hair-treatment-before-and-after/" className="text-[#1F5E4B] font-semibold underline decoration-[#1F5E4B]/30 hover:decoration-[#1F5E4B]">
                PRP Hair Treatment Before and After
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* ============ FACTORS AFFECTING RESULTS — tag cloud ============ */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">Factors That Affect PRP Hair Treatment Results</h2>
            <p className="text-lg text-[#5F5F5F] leading-relaxed max-w-3xl">
              PRP outcomes are influenced by a wide combination of factors, which is exactly why results should
              always be considered in the context of a proper hair-loss assessment rather than in isolation:
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {resultFactors.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className={`group bg-[#F9F7F2] border border-gray-200 hover:border-[#1F5E4B]/30 hover:bg-[#1F5E4B]/5 rounded-2xl px-5 py-4 transition-all ${i === resultFactors.length - 1 ? 'sm:col-span-2 lg:col-span-3' : ''
                  }`}
              >
                <h4 className="font-bold text-[#1A1A1A] text-sm mb-1 group-hover:text-[#1F5E4B]">{f.title}</h4>
                <p className="text-xs text-[#5F5F5F] leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 text-[#5F5F5F] leading-relaxed bg-[#1F5E4B]/5 border border-[#1F5E4B]/15 rounded-2xl p-6">
            Because of this complexity, PRP is best approached as one component of a broader, individualized
            hair-loss management plan rather than a standalone quick fix.
          </motion.p>
        </div>
      </section>

      {/* ============ CANDIDACY — badge/pill panels ============ */}
      <section className="py-20 px-4 bg-[#F9F7F2]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-2xl border border-gray-200 p-8">
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-6 h-6 text-[#1F5E4B]" />
              <h3 className="text-xl font-bold text-[#1A1A1A]">Who May Respond Better to PRP?</h3>
            </div>
            <p className="text-[#5F5F5F] leading-relaxed text-sm">
              In general clinical experience, certain patterns are more commonly associated with a favorable
              response, including patients with certain types of hair thinning where follicles are relatively
              preserved, and those in earlier or moderate stages of thinning where there is still active but
              weakened follicular activity to support. That said, this is not a universal patient profile, and
              individual response can still vary significantly even among patients who appear similar on paper.
              Ultimately, whether PRP is a suitable option — and how likely it is to help — can only be
              properly determined by a qualified healthcare professional after a scalp and hair-loss assessment.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-white rounded-2xl border border-gray-200 p-8">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-gray-500" />
              <h3 className="text-xl font-bold text-[#1A1A1A]">Who May Not Be an Ideal Candidate?</h3>
            </div>
            <div className="mb-4 flex items-center gap-2 text-xs font-semibold text-gray-500 uppercase tracking-wide">
              <XCircle className="w-3.5 h-3.5" />
              Situations Worth Flagging at Consultation
            </div>
            <ul className="space-y-2">
              {notIdealCandidate.map((item, i) => (
                <li key={i} className="text-sm text-[#5F5F5F] leading-relaxed flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-[#5F5F5F] leading-relaxed border-t border-gray-100 pt-4">
              This is general information, not a diagnosis of your situation. If any of these apply to you, or if
              you&apos;re unsure which category your hair loss falls into, a proper in-person or medical assessment
              is the necessary next step before pursuing any treatment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ============ GROWTH CYCLE — circular diagram ============ */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">How PRP Supports the Hair Growth Cycle</h2>
            <p className="text-lg text-[#5F5F5F] leading-relaxed max-w-3xl mx-auto">
              Hair grows in cycles, and understanding this cycle helps explain why PRP results take time:
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 relative">
            {growthCyclePhases.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                <div className="bg-[#1F5E4B] text-white rounded-full w-full aspect-square flex flex-col items-center justify-center text-center p-4 shadow-lg">
                  <RotateCw className="w-5 h-5 mb-2 opacity-70" />
                  <span className="font-bold text-sm md:text-base">{p.phase}</span>
                  <span className="text-[10px] md:text-xs text-white/70 mt-0.5">{p.sub}</span>
                </div>
                {i < growthCyclePhases.length - 1 && (
                  <ArrowRight className="hidden md:block w-5 h-5 text-[#1F5E4B]/40 absolute top-1/2 -right-6 -translate-y-1/2" />
                )}
              </motion.div>
            ))}
          </div>
          <div className="grid md:grid-cols-4 gap-5 mt-4">
            {growthCyclePhases.map((p, i) => (
              <p key={i} className="text-xs text-[#5F5F5F] leading-relaxed text-center px-2">
                {p.desc}
              </p>
            ))}
          </div>

          <div className="mt-10 grid md:grid-cols-2 gap-8 items-center">
            <img
              src="/images/Diagram illustrating the four phases.jpg"
              alt="Diagram illustrating the four phases of the natural hair growth cycle"
              className="w-full h-56 object-cover rounded-2xl shadow-lg"
            />
            <p className="text-[#5F5F5F] leading-relaxed text-sm">
              PRP is thought to interact with this cycle at the follicular level, which is precisely why its effects
              unfold gradually rather than instantly — you&apos;re not simply adding hair, you&apos;re
              potentially influencing a biological cycle that operates over months. For a more detailed explanation,
              visit our guide on the{' '}
              <a href="/services/hair-growth-cycle/" className="text-[#1F5E4B] font-semibold underline decoration-[#1F5E4B]/30 hover:decoration-[#1F5E4B]">
                Hair Growth Cycle
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* ============ HAIR LOSS TYPES — horizontal scroll carousel ============ */}
      <section className="py-20 px-4 bg-[#12392D]">
        <style dangerouslySetInnerHTML={{
          __html: `
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}} />
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">PRP Results for Different Types of Hair Loss</h2>
            <p className="text-white/70 leading-relaxed max-w-3xl">
              Not all hair loss is the same, and PRP&apos;s suitability and expected results can vary depending on
              the underlying condition. It&apos;s important not to assume PRP is equally appropriate for every cause
              of thinning — a proper diagnosis matters more than the treatment choice itself.
            </p>
          </motion.div>

          <div className="relative">
            {/* Left scroll control */}
            <button
              onClick={() => scrollContainer(typesScrollRef, 'left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#0F2F24]/60 hover:bg-[#0F2F24]/90 text-white p-3 rounded-full z-10 transition-colors cursor-pointer border border-white/10"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Scrollable container */}
            <div
              ref={typesScrollRef}
              className="flex gap-5 overflow-x-auto pb-4 no-scrollbar snap-x snap-mandatory scroll-smooth px-10"
            >
              {hairLossTypes.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="snap-start flex-shrink-0 w-72 bg-white/5 border border-white/10 rounded-2xl p-6"
                >
                  <h4 className="font-bold text-white mb-2">{t.title}</h4>
                  <p className="text-sm text-white/70 leading-relaxed">{t.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Right scroll control */}
            <button
              onClick={() => scrollContainer(typesScrollRef, 'right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#0F2F24]/60 hover:bg-[#0F2F24]/90 text-white p-3 rounded-full z-10 transition-colors cursor-pointer border border-white/10"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <p className="mt-6 text-white/70 text-sm">
            For a broader overview, see our guide to{' '}
            <a href="/services/hair-loss-dubai/" className="text-white underline decoration-white/30 hover:decoration-white font-semibold">
              Hair Loss Causes
            </a>
            .
          </p>
        </div>
      </section>

      {/* ============ RESULTS IN MEN / WOMEN — editorial split ============ */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-0 border border-gray-200 rounded-2xl overflow-hidden">
          <motion.div initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-gray-200">
            <div className="flex items-center gap-2 text-[#1F5E4B] font-bold mb-4">
              <Mars className="w-5 h-5" /> PRP Results in Men
            </div>
            <p className="text-[#5F5F5F] leading-relaxed text-sm">
              In men, thinning commonly presents as a receding hairline, crown thinning, or diffuse thinning across
              the scalp. Reported changes with PRP can include shifts in density in the treated areas, though the
              degree of visible improvement varies widely between individuals depending on the stage and pattern of
              hair loss present. As with all patients, individual variation is the rule rather than the exception.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="p-8 md:p-10">
            <div className="flex items-center gap-2 text-[#1F5E4B] font-bold mb-4">
              <Venus className="w-5 h-5" /> PRP Results in Women
            </div>
            <p className="text-[#5F5F5F] leading-relaxed text-sm">
              Women more commonly experience diffuse thinning, a widening centre part, or an overall reduction in
              density rather than a receding hairline. Hormonal factors — including those related to pregnancy,
              postpartum changes, or other hormonal shifts — can play a significant role and may need to be
              considered alongside PRP as part of a broader treatment plan.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ============ SESSIONS + DURATION — stat callouts ============ */}
      <section className="py-16 px-4 bg-[#F9F7F2]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-2xl border border-gray-200 p-8">
            <div className="w-12 h-12 rounded-xl bg-[#1F5E4B]/10 flex items-center justify-center mb-4">
              <ListChecks className="w-6 h-6 text-[#1F5E4B]" />
            </div>
            <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">How Many PRP Sessions Are Needed?</h3>
            <p className="text-sm text-[#5F5F5F] leading-relaxed">
              There is no single fixed number of sessions that applies to every patient. Treatment plans vary based
              on the individual&apos;s diagnosis, severity of thinning, and how they respond over time. Many patients
              are recommended a series of initial sessions spaced weeks apart, with periodic maintenance sessions
              discussed afterward depending on progress. The right number of sessions for you should be determined
              through clinical assessment and ongoing evaluation of your response — not a generic protocol
              applied to everyone. Learn more about what a treatment course typically involves on our{' '}
              <a href="/services/hair-prp-dubai/" className="text-[#1F5E4B] font-semibold underline decoration-[#1F5E4B]/30 hover:decoration-[#1F5E4B]">
                Hair PRP Treatment in Dubai
              </a>{' '}
              page.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-white rounded-2xl border border-gray-200 p-8">
            <div className="w-12 h-12 rounded-xl bg-[#1F5E4B]/10 flex items-center justify-center mb-4">
              <Clock className="w-6 h-6 text-[#1F5E4B]" />
            </div>
            <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">How Long Do PRP Hair Results Last?</h3>
            <p className="text-sm text-[#5F5F5F] leading-relaxed">
              How long results last also varies by patient. Because many forms of hair loss — particularly
              genetic hair loss — are progressive by nature, PRP does not permanently halt the underlying
              process for everyone. Some patients benefit from periodic maintenance sessions to help sustain results
              over time, and the underlying cause of hair loss continues to matter throughout. Long-term management,
              rather than a one-time fix, is often the more realistic framing for anyone considering PRP. Claiming
              that PRP permanently stops hair loss would not be an accurate representation of how this treatment
              generally works.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ============ WHAT IF NO RESULTS — diagnostic flow ============ */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">What If I Don&apos;t See Results?</h2>
            <p className="text-lg text-[#5F5F5F] leading-relaxed">
              If you&apos;ve completed several sessions and aren&apos;t seeing the progress you hoped for,
              that&apos;s worth addressing directly with your clinician rather than assuming more sessions are
              automatically the answer. Slow or limited progress may call for:
            </p>
          </motion.div>
          <div className="space-y-3">
            {notSeeingResults.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center gap-4 bg-[#F9F7F2] rounded-xl p-4 border border-gray-200"
              >
                <span className="w-8 h-8 rounded-full bg-[#1F5E4B] text-white text-sm font-bold flex items-center justify-center flex-shrink-0">
                  {i + 1}
                </span>
                <span className="text-sm text-[#5F5F5F] leading-relaxed">{item}</span>
                <ArrowRight className="w-4 h-4 text-[#1F5E4B]/40 ml-auto flex-shrink-0" />
              </motion.div>
            ))}
          </div>
          <p className="mt-6 text-sm text-[#5F5F5F] leading-relaxed bg-amber-50 border border-amber-200 rounded-2xl p-6">
            Limited results are not necessarily a sign that anything went &ldquo;wrong&rdquo; — they may simply
            reflect that PRP alone isn&apos;t sufficient for your particular type of hair loss, and that&apos;s
            valuable information for adjusting your plan.
          </p>
        </div>
      </section>

      {/* ============ PRP VS MESOTHERAPY / TRANSPLANT — scorecards ============ */}
      <section className="py-20 px-4 bg-[#F9F7F2]">
        <div className="max-w-6xl mx-auto space-y-16">
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-3">PRP Results vs Hair Mesotherapy</h2>
              <p className="text-[#5F5F5F] leading-relaxed">
                Patients often ask how PRP compares to hair mesotherapy, another injectable scalp treatment.
                Here&apos;s a general comparison:
              </p>
            </motion.div>
            <div className="space-y-3">
              {prpVsMeso.map((row, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-white rounded-2xl border border-gray-200 overflow-hidden"
                >
                  <div className="px-5 py-2 bg-gray-50 border-b border-gray-200 text-xs font-bold text-[#1A1A1A] uppercase tracking-wide">{row.label}</div>
                  <div className="grid md:grid-cols-2">
                    <div className="p-5 flex items-start gap-3 md:border-r border-gray-100">
                      <Droplet className="w-4 h-4 text-[#1F5E4B] flex-shrink-0 mt-1" />
                      <span className="text-sm text-[#5F5F5F] leading-relaxed">{row.prp}</span>
                    </div>
                    <div className="p-5 flex items-start gap-3">
                      <FlaskConical className="w-4 h-4 text-amber-600 flex-shrink-0 mt-1" />
                      <span className="text-sm text-[#5F5F5F] leading-relaxed">{row.other}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <p className="mt-5 text-sm text-[#5F5F5F]">
              For a deeper comparison, see{' '}
              <a href="/services/prp-vs-hair-mesotherapy-dubai/" className="text-[#1F5E4B] font-semibold underline decoration-[#1F5E4B]/30 hover:decoration-[#1F5E4B]">
                PRP vs Hair Mesotherapy
              </a>
              .
            </p>
          </div>

          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-3">PRP Results vs Hair Transplant</h2>
              <p className="text-[#5F5F5F] leading-relaxed">
                PRP and hair transplantation are fundamentally different treatments with different goals:
              </p>
            </motion.div>
            <div className="space-y-3">
              {prpVsTransplant.map((row, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-white rounded-2xl border border-gray-200 overflow-hidden"
                >
                  <div className="px-5 py-2 bg-gray-50 border-b border-gray-200 text-xs font-bold text-[#1A1A1A] uppercase tracking-wide">{row.label}</div>
                  <div className="grid md:grid-cols-2">
                    <div className="p-5 flex items-start gap-3 md:border-r border-gray-100">
                      <Droplet className="w-4 h-4 text-[#1F5E4B] flex-shrink-0 mt-1" />
                      <span className="text-sm text-[#5F5F5F] leading-relaxed">{row.prp}</span>
                    </div>
                    <div className="p-5 flex items-start gap-3">
                      <Scissors className="w-4 h-4 text-[#1A1A1A] flex-shrink-0 mt-1" />
                      <span className="text-sm text-[#5F5F5F] leading-relaxed">{row.other}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <p className="mt-5 text-sm text-[#5F5F5F]">
              These two approaches are sometimes used together rather than as competing alternatives — a
              decision best made with a qualified clinician. Read more in our guide to{' '}
              <a href="/services/prp-vs-hair-transplant-dubai/" className="text-[#1F5E4B] font-semibold underline decoration-[#1F5E4B]/30 hover:decoration-[#1F5E4B]">
                PRP vs Hair Transplant in Dubai
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* ============ COST AND RESULTS ============ */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gradient-to-br from-[#1F5E4B] to-[#2A7D63] rounded-2xl p-8 md:p-10 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">PRP Hair Treatment Cost and Results</h2>
            <p className="text-white/90 leading-relaxed mb-6">
              It&apos;s worth resisting the temptation to judge PRP purely by price. A lower-cost option that skips
              proper assessment or follows a generic protocol isn&apos;t necessarily better value than a more
              thorough approach tailored to your specific hair-loss pattern. Several factors typically influence
              overall cost, including:
            </p>
            <ul className="grid sm:grid-cols-2 gap-3 mb-6">
              {costFactors.map((f, i) => (
                <li key={i} className="flex items-start gap-2 bg-white/10 rounded-xl p-3 text-sm">
                  <Check className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>
            <p className="text-white/85 leading-relaxed text-sm">
              We won&apos;t list specific prices here, since accurate figures depend on your individual treatment
              plan. For current details, see our{' '}
              <a href="/services/hair-prp-cost-dubai/" className="text-white underline decoration-white/40 hover:decoration-white font-semibold">
                PRP Hair Treatment Cost in Dubai
              </a>{' '}
              page or book a consultation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ============ MAXIMIZE RESULTS — numbered tiles ============ */}
      <section className="py-20 px-4 bg-[#F9F7F2]">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">How to Maximize the Chance of Good Results</h2>
            <p className="text-lg text-[#5F5F5F] leading-relaxed max-w-3xl">
              While no clinic can guarantee outcomes, there are steps patients can take that may support a better
              overall experience and response:
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {maximizeSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="bg-white rounded-2xl border border-gray-200 p-5 hover:border-[#1F5E4B]/30 hover:shadow-lg transition-all">
                <span className="text-2xl font-bold text-[#1F5E4B]/25">{String(i + 1).padStart(2, '0')}</span>
                <p className="text-sm text-[#5F5F5F] leading-relaxed mt-2">{step}</p>
              </motion.div>
            ))}
          </div>
          <p className="mt-8 text-[#5F5F5F] leading-relaxed bg-white border border-gray-200 rounded-2xl p-6">
            None of these steps guarantee a particular result, but they support the conditions under which PRP has
            the best chance of doing what it&apos;s designed to do.
          </p>
        </div>
      </section>

      {/* ============ TRACKING RESULTS ============ */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">How to Track PRP Results</h2>
            <p className="text-lg text-[#5F5F5F] leading-relaxed mb-6">
              Because change is gradual, a structured tracking system is far more reliable than relying on memory or
              daily mirror checks. Consider the following approach:
            </p>
            <ul className="space-y-2.5">
              {trackingSteps.map((step, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#1F5E4B] flex-shrink-0 mt-1" />
                  <span className="text-sm text-[#5F5F5F] leading-relaxed">{step}</span>
                </motion.li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-[#5F5F5F] leading-relaxed bg-[#F9F7F2] border border-gray-200 rounded-2xl p-5">
              Daily mirror checks make it genuinely difficult to notice gradual change — the human eye adapts to
              slow shifts over time, which is why so many patients underestimate their own progress (or lack of it)
              without a structured comparison method.
            </p>
          </div>
          <div className="lg:col-span-5">
            <img
              src="/images/patient-progress-tracking-prp.jpg"
              alt="Patient reviewing a photo log to track PRP hair treatment progress"
              className="w-full h-full min-h-[280px] object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* ============ COMMON MISTAKES — red flag list ============ */}
      <section className="py-20 px-4 bg-[#12392D]">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Common Mistakes When Evaluating PRP Results</h2>
            <p className="text-white/70 leading-relaxed">
              Patients sometimes draw the wrong conclusions about their treatment because of how they&apos;re
              evaluating it. Common pitfalls include:
            </p>
          </motion.div>
          <div className="space-y-3">
            {commonMistakes.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-4"
              >
                <Ban className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-white/80 leading-relaxed">{m}</span>
              </motion.div>
            ))}
          </div>
          <p className="mt-6 text-sm text-white/70 leading-relaxed">
            Avoiding these mistakes leads to a much more accurate — and fair — picture of how your
            treatment is actually going.
          </p>
        </div>
      </section>

      {/* ============ RESULTS IN DUBAI ============ */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 space-y-5">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-2">PRP Hair Treatment Results in Dubai</h2>
            <p className="text-[#5F5F5F] leading-relaxed">
              Dubai has a wide range of clinics offering PRP hair treatment, and results can genuinely differ
              depending on how thoroughly a clinic approaches assessment and planning. When considering PRP hair
              treatment in Dubai, it's worth prioritizing a{' '}
              <a href="/services/best-hair-specialist-dubai/" className="text-[#1F5E4B] font-semibold underline decoration-[#1F5E4B]/30 hover:decoration-[#1F5E4B]">
                hair specialist in Dubai
              </a>{' '}
              who focuses on individualized diagnosis rather than a one-size-fits-all injection protocol. A proper{' '}
              <a href="/services/hair-treatment-dubai/" className="text-[#1F5E4B] font-semibold underline decoration-[#1F5E4B]/30 hover:decoration-[#1F5E4B]">
                hair loss treatment in Dubai
              </a>{' '}
              pathway typically starts with understanding why the hair loss is happening, not simply proceeding
              straight to treatment.
            </p>
            <p className="text-[#5F5F5F] leading-relaxed">
              Given Dubai's climate and lifestyle factors — sun exposure, air conditioning, and water
              quality among them — scalp health considerations may also be part of a well-rounded consultation.
              The most reliable path to a fair outcome assessment is choosing a{' '}
              <a href="/services/hair-loss-clinic-dubai/" className="text-[#1F5E4B] font-semibold underline decoration-[#1F5E4B]/30 hover:decoration-[#1F5E4B]">
                hair clinic in Dubai
              </a>{' '}
              that prioritizes realistic expectations, individualized planning, and consistent follow-up over
              dramatic marketing claims.
            </p>
          </div>
          <div className="lg:col-span-4 space-y-4">
            {dubaiFactors.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3 bg-[#F9F7F2] border border-gray-200 rounded-xl p-4"
              >
                <f.icon className="w-5 h-5 text-[#1F5E4B]" />
                <span className="text-sm font-semibold text-[#1A1A1A]">{f.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHY CHOOSE RAMACARE ============ */}
      <section className="py-20 px-4 bg-[#F9F7F2]">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Award className="w-6 h-6 text-[#1F5E4B]" />
              <h2 className="text-3xl font-bold text-[#1A1A1A]">Why Choose RamaCare Polyclinic?</h2>
            </div>
            <p className="text-lg text-[#5F5F5F] leading-relaxed">
              At RamaCare Polyclinic, our approach to hair-loss consultation and PRP treatment centers on
              understanding each patient&apos;s specific situation before recommending any treatment path. This
              generally includes:
            </p>
          </motion.div>
          <div className="bg-white rounded-2xl border border-gray-200 p-8">
            <div className="grid sm:grid-cols-2 gap-4">
              {whyChoose.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#1F5E4B] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-[#5F5F5F] leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="mt-6 text-[#5F5F5F] leading-relaxed text-center">
            We believe patients make better decisions when they understand both the possibilities and the
            limitations of a treatment — and PRP is no exception.
          </p>
        </div>
      </section>

      {/* ============ FAQ — two-column split accordion ============ */}
      <section className="py-20 px-4 bg-white" id="faqs">
        <div className="max-w-6xl mx-auto">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-12 text-center">
            Frequently Asked Questions
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-4">
              {faqLeft.map((faq, idx) => {
                const index = idx * 2;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: Math.min(idx * 0.04, 0.3) }}
                    className="bg-[#F9F7F2] rounded-2xl border border-gray-200 overflow-hidden"
                  >
                    <button onClick={() => toggleFaq(index)} className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-white transition-colors">
                      <span className="font-bold text-[#1A1A1A] text-sm">{faq.question}</span>
                      <ChevronDown className={`w-5 h-5 text-[#1F5E4B] flex-shrink-0 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {openFaq === index && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                          <p className="px-6 pb-5 text-sm text-[#5F5F5F] leading-relaxed">{faq.answer}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
            <div className="space-y-4">
              {faqRight.map((faq, idx) => {
                const index = idx * 2 + 1;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: Math.min(idx * 0.04, 0.3) }}
                    className="bg-[#F9F7F2] rounded-2xl border border-gray-200 overflow-hidden"
                  >
                    <button onClick={() => toggleFaq(index)} className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-white transition-colors">
                      <span className="font-bold text-[#1A1A1A] text-sm">{faq.question}</span>
                      <ChevronDown className={`w-5 h-5 text-[#1F5E4B] flex-shrink-0 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {openFaq === index && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                          <p className="px-6 pb-5 text-sm text-[#5F5F5F] leading-relaxed">{faq.answer}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ============ MEDICAL DISCLAIMER ============ */}
      <section className="py-12 px-4 bg-[#F9F7F2] border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-2xl border border-gray-200">
            <h3 className="text-lg font-bold text-[#1A1A1A] mb-3 flex items-center gap-2">
              <Info className="w-5 h-5 text-[#1F5E4B]" />
              Medical Disclaimer
            </h3>
            <p className="text-[#5F5F5F] leading-relaxed text-sm">
              PRP hair treatment results vary significantly between individuals, and hair loss can have many
              possible underlying causes, not all of which respond to PRP in the same way. Treatment suitability
              differs from patient to patient and should only be determined following an individual medical
              assessment. The information on this page is educational and general in nature, and it cannot replace
              a consultation with a qualified healthcare professional. If you are experiencing sudden, severe,
              painful, or patchy hair loss, please seek professional medical evaluation promptly rather than relying
              on general online information.
            </p>
          </div>
        </div>
      </section>

      {/* ============ CTA — book consultation ============ */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#1F5E4B] to-[#2A7D63]" id="book-now">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">Book a PRP Hair Consultation in Dubai</h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
              If you&apos;re considering PRP for hair loss, the most useful next step isn&apos;t reading another
              before-and-after gallery — it&apos;s having a conversation with a qualified professional about
              your specific hair and scalp. At RamaCare Polyclinic, our consultations are designed to help you
              understand whether PRP may be suitable for you, what a realistic timeline might look like, and how a
              personalized treatment plan could be structured around your goals.
            </p>
            <p className="text-white/85 max-w-2xl mx-auto leading-relaxed text-sm">
              Book a PRP Hair Consultation in Dubai to discuss your hair-loss concerns, treatment suitability,
              expected timeline, and a plan tailored to you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <a
                href="/book-appointment"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#1F5E4B] px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Calendar className="w-5 h-5" />
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

      {/* ============ RELATED GUIDES — horizontal carousel ============ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl font-bold text-[#1A1A1A] mb-8">Related Hair Treatment Guides</h3>

          <div className="relative">
            {/* Left scroll control */}
            <button
              onClick={() => scrollContainer(guidesScrollRef, 'left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#1F5E4B]/10 hover:bg-[#1F5E4B]/20 text-[#1F5E4B] p-3 rounded-full z-10 transition-colors cursor-pointer border border-[#1F5E4B]/20"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Scrollable container */}
            <div
              ref={guidesScrollRef}
              className="flex gap-5 overflow-x-auto pb-4 no-scrollbar snap-x snap-mandatory scroll-smooth px-10"
            >
              {relatedGuides.map((g, i) => (
                <a
                  key={i}
                  href={g.href}
                  className="group snap-start flex-shrink-0 w-72 bg-[#F9F7F2] rounded-2xl border border-gray-200 p-6 hover:border-[#1F5E4B]/30 hover:shadow-lg transition-all flex flex-col justify-between"
                >
                  <div>
                    <h4 className="font-bold text-[#1A1A1A] mb-2 group-hover:text-[#1F5E4B] transition-colors">{g.title}</h4>
                    <p className="text-sm text-[#5F5F5F] leading-relaxed">{g.desc}</p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[#1F5E4B] font-semibold text-sm mt-4">
                    Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>
              ))}
            </div>

            {/* Right scroll control */}
            <button
              onClick={() => scrollContainer(guidesScrollRef, 'right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#1F5E4B]/10 hover:bg-[#1F5E4B]/20 text-[#1F5E4B] p-3 rounded-full z-10 transition-colors cursor-pointer border border-[#1F5E4B]/20"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
}