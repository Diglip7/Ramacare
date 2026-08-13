import React, { useState } from 'react';
import Layout from '../../../components/Layout';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';

const SITE_URL = 'https://ramacarepolyclinic.ae';
const PAGE_PATH = '/services/prp-vs-hair-mesotherapy-dubai';

const quickCompareTable = [
  { icon: 'Droplet', feature: 'Source', prp: "Your own blood plasma", meso: 'External vitamin, mineral, and amino acid formula' },
  { icon: 'Target', feature: 'Best For', prp: 'Thinning with active follicles, early-to-moderate hair loss', meso: 'Diffuse thinning, scalp nourishment, general hair health support' },
  { icon: 'Syringe', feature: 'Procedure', prp: 'Blood draw, centrifuge processing, scalp injections', meso: 'Customized nutrient blend delivered via micro-injections' },
  { icon: 'Layers', feature: 'Ingredients', prp: 'Concentrated autologous platelets', meso: 'Vitamins, minerals, amino acids, and other nourishing compounds' },
  { icon: 'Repeat', feature: 'Sessions', prp: 'Series of sessions plus maintenance', meso: 'Series of sessions, often more frequent initially' },
  { icon: 'Clock', feature: 'Recovery', prp: 'Minimal, a few days', meso: 'Minimal, similar or slightly shorter' },
  { icon: 'CalendarClock', feature: 'Maintenance', prp: 'Periodic touch-ups recommended', meso: 'Periodic touch-ups recommended' },
  { icon: 'UserCheck', feature: 'Ideal Candidate', prp: 'Active follicles, seeking a biologically based approach', meso: 'Thinning hair, scalp nourishment focus, or as a PRP complement' },
];

const prpGrowthFactors = [
  'A small blood sample is drawn, similar to a routine blood test',
  'The sample is spun in a centrifuge to concentrate the platelets',
  'The platelet-rich plasma is injected into areas of thinning',
  'Growth factors in the platelets are believed to support the follicle’s growth phase and improve local blood supply'
];

const growthCyclePhases = [
  { name: 'Anagen', text: 'Active growth phase', angle: -90 },
  { name: 'Catagen', text: 'Transition phase', angle: 0 },
  { name: 'Telogen', text: 'Resting phase', angle: 90 },
  { name: 'Exogen', text: 'Shedding phase', angle: 180 },
];

const mesoIngredients = [
  'Biotin',
  'B-Vitamins',
  'Zinc',
  'Amino Acids',
  'Hyaluronic Acid',
  'Minerals'
];

const mesoWorks = [
  'A specialist assesses your scalp and hair loss pattern to determine an appropriate formula',
  'A customized blend of vitamins, minerals, and amino acids is prepared',
  'The solution is delivered via a series of fine micro-injections across the treatment area',
  'Sessions are usually repeated over a series of weeks to build a cumulative nourishing effect'
];

const keyDifferences = [
  { criteria: 'Source', prp: 'Your own blood plasma', meso: 'External vitamin, mineral, and amino acid formula' },
  { criteria: 'Best For', prp: 'Thinning with active follicles, early-to-moderate hair loss', meso: 'Diffuse thinning, scalp nourishment, general hair health support' },
  { criteria: 'Procedure', prp: 'Blood draw, centrifuge processing, scalp injections', meso: 'Customized nutrient blend delivered via micro-injections' },
  { criteria: 'Ingredients', prp: 'Concentrated autologous platelets', meso: 'Vitamins, minerals, amino acids, and other nourishing compounds' },
  { criteria: 'Sessions', prp: 'Series of sessions plus maintenance', meso: 'Series of sessions, often more frequent initially' },
  { criteria: 'Recovery', prp: 'Minimal, a few days', meso: 'Minimal, similar or slightly shorter' },
  { criteria: 'Maintenance', prp: 'Periodic touch-ups recommended', meso: 'Periodic touch-ups recommended' },
  { criteria: 'Ideal Candidate', prp: 'Active follicles, seeking a biologically based approach', meso: 'Thinning hair, scalp nourishment focus, or as a PRP complement' }
];

const patternMatch = [
  { pattern: 'Which Treatment Is Better for Early Hair Loss?', rec: 'PRP & Mesotherapy', text: 'For early-stage thinning, both PRP and Hair Mesotherapy are commonly discussed as first-line, non-surgical options. PRP tends to be favored when the primary goal is stimulating follicle activity biologically, while Mesotherapy is often favored when nutrient delivery and scalp health are a bigger part of the picture.' },
  { pattern: 'Which Treatment Is Better for Hair Thinning?', rec: 'PRP or Mesotherapy', text: 'For diffuse thinning — hair that’s becoming finer and less dense across a broader area, rather than receding in a specific pattern — Hair Mesotherapy is sometimes highlighted for its nutrient-focused approach, since diffuse thinning can be linked to nutritional or circulatory factors at the scalp level. PRP remains a strong option here too, particularly when a patient wants a treatment built around their own biology rather than an external formula.' },
  { pattern: 'Which Option May Be Better for Men?', rec: 'PRP', text: 'Male pattern hair loss most often follows a predictable pattern tied to hormone sensitivity, and PRP is frequently discussed in this context because of its role in supporting follicles affected by that process. That said, Mesotherapy is also used by men, particularly when general scalp health or nutrient support is part of the treatment goal.' },
  { pattern: 'Which Option May Be Better for Women?', rec: 'Mesotherapy', text: 'Women experiencing diffuse thinning — which is a common pattern in female hair loss — sometimes respond well to Hair Mesotherapy’s nutrient-based approach, especially where nutritional factors are suspected to play a role. PRP is equally used by women and is not restricted by gender.' },
];

const recStyle = {
  PRP: { bg: 'bg-[#1F5E4B]', text: 'text-white' },
  Mesotherapy: { bg: 'bg-[#FDFCF7] border border-[#C5A880]', text: 'text-[#C5A880]' },
  'PRP & Mesotherapy': { bg: 'bg-[#C5A880]', text: 'text-white' },
  'PRP or Mesotherapy': { bg: 'bg-[#E6EFEA]', text: 'text-[#1F5E4B]' },
};

const prpBenefits = [
  'Uses your own biological material, with no external formula involved',
  'Well-studied approach within non-surgical hair restoration',
  'Minimal downtime and a straightforward in-office procedure',
  'May support existing follicles’ growth phase and local blood supply',
  'Can be combined with other hair treatments, including transplants',
];

const mesoBenefits = [
  'Formula can be customized to the patient’s specific scalp and hair concerns',
  'Directly delivers nutrients associated with hair health to the follicle level',
  'Minimal downtime, often with a gentle injection experience',
  'May support overall scalp health, not just hair density',
  'Can complement other treatments, including PRP, as part of a broader plan',
];

const timeline = [
  { stage: 'PRP Results', text: 'PRP results often build over three to six months following a treatment series as new growth cycles activate.' },
  { stage: 'Mesotherapy Results', text: 'Mesotherapy improvements in hair quality and shedding may become noticeable somewhat earlier, though both require patience.' },
  { stage: 'Consistent Schedule', text: 'Both treatments require multiple initial sessions followed by maintenance visits for visible benefits.' },
];

const recoveryComparison = [
  { label: 'Typical downtime', prp: 'Minimal — often none', meso: 'Minimal — often none' },
  { label: 'Visible after-effects', prp: 'Mild redness, tenderness, small bumps', meso: 'Mild redness or slight swelling at injection points' },
  { label: 'Return to normal routine', prp: 'Usually same day or next day', meso: 'Usually same day' },
  { label: 'Activity restrictions', prp: '24–48 hours', meso: 'Often 24 hours' }
];

const risksComparison = [
  { label: 'Common, mild effects', prp: 'Tenderness, minor swelling, temporary redness', meso: 'Mild redness, slight swelling at injection sites' },
  { label: 'Less common risks', prp: 'Minor bruising, mild headache', meso: 'Allergic reaction to a formula ingredient, minor bruising' },
  { label: 'Recovery-related risk', prp: 'Very low', meso: 'Very low, though formula sensitivity should be discussed beforehand' }
];

const costFactors = [
  'Number of sessions in your treatment plan',
  'The area of the scalp being treated',
  'Whether maintenance sessions are bundled into a package',
  'Complexity and customization of the Mesotherapy formula used',
  'Whether it is used alone or alongside another treatment'
];

const whyChoose = [
  'Personalized consultations that assess your hair loss pattern before recommending any treatment',
  'Experienced medical professionals who explain the honest trade-offs of each option, not just the benefits',
  'Tailored treatment recommendations, including whether a combined approach might suit your case',
  'Advanced hair restoration techniques across both PRP and Mesotherapy',
  'Patient-focused care that prioritizes realistic expectations over overpromising results',
  'A convenient Dubai location, accessible to patients across the city and nearby areas like Jumeirah'
];

const consultProcess = [
  { icon: 'UserCheck', title: 'History Review', text: 'A review of your hair loss history and any relevant medical background.' },
  { icon: 'Search', title: 'Scalp Assessment', text: 'A visual and sometimes diagnostic assessment of your scalp and follicle activity.' },
  { icon: 'ClipboardCheck', title: 'Goal Discussion', text: 'A detailed discussion of your goals, timeline, and realistic expectations.' },
  { icon: 'FileText', title: 'Treatment Plan', text: 'An honest explanation of which treatment — or combination — is likely to suit your case.' }
];

const causes = [
  { title: 'Androgenetic alopecia (pattern hair loss)', desc: 'the most common cause in both men and women, linked to genetics and hormone sensitivity in the follicles' },
  { title: 'Telogen effluvium', desc: 'temporary, diffuse shedding often triggered by stress, illness, or nutritional deficiency' },
  { title: 'Nutritional or lifestyle-related thinning', desc: 'hair that’s become finer or sheds more due to diet, sleep, or stress factors' },
  { title: 'Age-related thinning', desc: 'a gradual, natural reduction in hair density over time' }
];

const faqs = [
  { q: "Which is better, PRP or Hair Mesotherapy?", a: "Neither is universally better — PRP uses your own blood platelets to stimulate follicles biologically, while Mesotherapy delivers external nutrients to nourish the scalp. The better fit depends on your specific hair loss pattern and goals." },
  { q: "Can PRP and Mesotherapy be combined?", a: "Yes, some specialists combine both as part of a broader treatment plan, though it isn’t necessary for every patient." },
  { q: "Which treatment lasts longer?", a: "Neither treatment offers permanent results on its own — both generally require periodic maintenance sessions to sustain their effects over time." },
  { q: "Is Hair Mesotherapy painful?", a: "Most patients describe Hair Mesotherapy injections as a mild pinching or pressure sensation, generally well tolerated without significant discomfort." },
  { q: "How many PRP sessions are needed?", a: "Most PRP protocols involve an initial series of several sessions spaced weeks apart, followed by periodic maintenance visits — your specialist can outline a specific plan for your case." },
  { q: "Does Mesotherapy work for genetic hair loss?", a: "Mesotherapy may support scalp health and existing follicles in genetic hair loss, but it’s generally not designed to reverse the underlying hormonal process driving pattern hair loss." },
  { q: "Can women benefit from both treatments?", a: "Yes, both PRP and Hair Mesotherapy are commonly used by women, and candidacy is based on hair loss pattern and goals rather than gender." },
  { q: "What ingredients are used in Hair Mesotherapy?", a: "Formulas often include vitamins, amino acids, and minerals selected to support hair and scalp health, customized based on the patient’s assessment." },
  { q: "Is PRP safe?", a: "PRP is generally considered safe since it uses the patient’s own blood, though as with any injectable treatment, mild side effects like tenderness or swelling can occur." },
  { q: "How soon will I see results from Hair Mesotherapy?", a: "Improvements in hair quality and shedding are often gradual, typically noticeable over the course of a treatment series rather than after a single session." },
  { q: "Which treatment has more research behind it?", a: "PRP has a broader body of clinical interest as a biologically based approach, while Hair Mesotherapy is more commonly discussed in terms of clinical experience with nutrient delivery; a specialist can speak to the specific evidence relevant to your case." },
  { q: "Can PRP or Mesotherapy replace a hair transplant?", a: "No, neither is designed to replace a transplant for areas of complete baldness — both work by supporting follicles that are still present and active, unlike a transplant, which relocates new follicles into the area." },
  { q: "Do I need to prepare for either treatment beforehand?", a: "Your specialist may advise avoiding certain blood thinners or supplements beforehand, and both treatments generally require minimal special preparation otherwise." },
  { q: "Is one treatment more expensive than the other in Dubai?", a: "Neither treatment is inherently far more expensive — cost for both depends mainly on the number of sessions and any customization involved, which a consultation can clarify." },
  { q: "Can I switch from one treatment to the other if it isn’t working?", a: "Yes, if your specialist finds one treatment isn’t producing the expected response, adjusting your plan — including switching approaches or combining treatments — is a normal part of ongoing hair restoration care." }
];

const relatedGuides = [
  { label: 'Hair PRP Treatment in Dubai', link: '/services/hair-prp-dubai/', desc: 'Explore the full breakdown of the PRP procedure itself, including what a typical session involves.' },
  { label: 'Hair Mesotherapy in Dubai', link: '/services/mesotherapy-dubai/', desc: 'Learn more about the Mesotherapy formula, procedure, and what a typical treatment plan looks like.' },
  { label: 'PRP Hair Treatment Before and After', link: '/services/prp-hair-treatment-before-and-after/', desc: 'See a realistic, month-by-month picture of how PRP results typically build over time.' },
  { label: 'PRP Hair Treatment Recovery', link: '/services/prp-hair-treatment-recovery/', desc: 'A day-by-day look at what to expect after a PRP session, from the first 24 hours through full recovery.' },
  { label: 'PRP Hair Treatment Cost in Dubai', link: '/services/hair-prp-cost-dubai/', desc: 'A transparent look at the factors that typically influence PRP pricing.' },
  { label: 'Hair Loss Treatment in Dubai', link: '/services/hair-loss-dubai/', desc: 'A broader look at hair loss treatment options if you’re still comparing approaches beyond PRP and Mesotherapy.' },
  { label: 'Hair Fall Treatment in Dubai', link: '/services/hair-loss-dubai/', desc: 'Useful if ongoing shedding, rather than pattern thinning, is your primary concern.' },
  { label: 'PRP vs Hair Transplant in Dubai', link: '/services/prp-vs-hair-transplant-dubai/', desc: 'Compare PRP against surgical hair restoration if your hair loss is more advanced.' },
  { label: 'Hair Growth Treatment in Dubai', link: '/services/hair-growth-dubai/', desc: 'Covers additional treatments that can complement PRP or Mesotherapy as part of a broader hair restoration plan.' }
];

function polarPos(angleDeg, radius) {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    x: 50 + radius * Math.cos(rad),
    y: 50 + radius * Math.sin(rad),
  };
}

function IconTile({ name, className = "w-4 h-4 text-[#1F5E4B]" }) {
  const IconComponent = LucideIcons[name] || LucideIcons.HelpCircle;
  return <IconComponent className={className} />;
}

export default function PrpVsHairMesotherapyPage() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <Layout>
      <Head>
        <title key="title">PRP vs Hair Mesotherapy in Dubai: Compare Options</title>
        <meta
          name="description"
          content="Weighing PRP vs Hair Mesotherapy in Dubai? Compare results, recovery & cost factors, then book a consult with RamaCare Polyclinic today."
          key="description"
        />
        <meta property="og:title" content="PRP vs Hair Mesotherapy in Dubai: Compare Options" key="og:title" />
        <meta
          property="og:description"
          content="Weighing PRP vs Hair Mesotherapy in Dubai? Compare results, recovery & cost factors, then book a consult with RamaCare Polyclinic today."
          key="og:description"
        />
        <meta property="og:type" content="website" key="og:type" />

        {/* Recommended Schema Markup */}
        <script
          key="schema-faq"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: faqs.map((f) => ({
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
                  name: 'PRP vs Hair Mesotherapy',
                  item: 'https://ramacarepolyclinic.ae/services/prp-vs-hair-mesotherapy-dubai/',
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
          <Link href="/services/hair-treatment-dubai/" className="hover:text-[#1F5E4B] transition-colors">Hair Treatments</Link>
          <span className="mx-1">/</span>
          <span className="text-[#1F5E4B]">PRP vs Hair Mesotherapy</span>
        </nav>
      </div>

      {/* ============ ELITE PREMIUM HERO WITH SPLIT CARDS ============ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#FDFCF7] via-[#F4F1EA] to-[#E6EFEA] border-b border-gray-200">
        <div className="grid md:grid-cols-2 min-h-[480px]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative bg-[#1F5E4B] flex items-center justify-center px-8 py-16 md:py-0"
          >
            <div className="text-white text-center max-w-sm">
              <div className="w-16 h-16 mx-auto rounded-full bg-white/15 flex items-center justify-center mb-5">
                <LucideIcons.Droplet className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold mb-2">PRP</h2>
              <p className="text-white/80 text-sm leading-relaxed">Your own blood, concentrated, to stimulate follicles biologically.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative bg-gradient-to-br from-[#C5A880] via-[#B2956D] to-[#C5A880] flex items-center justify-center px-8 py-16 md:py-0"
          >
            <div className="text-white text-center max-w-sm">
              <div className="w-16 h-16 mx-auto rounded-full bg-white/15 flex items-center justify-center mb-5">
                <LucideIcons.FlaskConical className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Hair Mesotherapy</h2>
              <p className="text-white/80 text-sm leading-relaxed">A customized nutrient blend delivered straight to the scalp.</p>
            </div>
          </motion.div>

          {/* Center VS badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden md:block"
          >
            <div className="w-20 h-20 rounded-full bg-white shadow-2xl flex items-center justify-center border-4 border-[#FDFCF7]">
              <LucideIcons.Scale className="w-8 h-8 text-[#1A1A1A]" />
            </div>
          </motion.div>
        </div>

        <div className="relative bg-[#FDFCF7] border-b border-gray-200 px-4 py-14">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="max-w-7xl mx-auto text-center space-y-5 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-5xl font-bold text-[#1A1A1A] leading-tight">PRP vs Hair Mesotherapy in Dubai</h1>
            <p className="text-sm md:text-base text-[#5F5F5F] leading-relaxed max-w-2xl mx-auto">
              If you’ve started researching hair restoration options, you’ve probably run into two names that keep coming up: PRP and Hair Mesotherapy. Both are non-surgical, both involve injections into the scalp, and both are marketed as ways to support hair growth — which makes them genuinely easy to confuse, even though they work in different ways.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <Link
                href="/book-appointment/"
                className="inline-flex items-center justify-center gap-2 bg-[#1F5E4B] text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-[#17493A] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <LucideIcons.Calendar className="w-5 h-5" />
                Book Consultation
              </Link>
              <a
                  href="https://wa.me/971566597878?text=Hello%20RamaCare%20Polyclinic%2C%20I%20would%20like%20to%20ask%20about%20the%20differences%20between%20PRP%20and%20Hair%20Mesotherapy%20treatments."
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-[#1F5E4B] text-[#1F5E4B] px-8 py-4 rounded-xl font-bold text-sm hover:bg-[#1F5E4B]/5 transition-all"
              >
                <LucideIcons.MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============ INTRO ============ */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <p className="text-sm md:text-base text-[#5F5F5F] leading-relaxed">
            Hair thinning and hair loss can stem from a range of causes — genetics, hormonal changes, stress, nutritional gaps, or simply the natural aging process. Because the underlying cause varies so much from person to person, the treatment that works well for one patient isn’t automatically the right fit for another. That’s exactly why comparing PRP vs Hair Mesotherapy in Dubai matters: understanding what each treatment actually does, rather than just what it’s called, is the difference between a well-informed decision and a guess.
          </p>
          <p className="text-sm md:text-base text-[#5F5F5F] leading-relaxed">
            At RamaCare Polyclinic in Dubai, we walk patients through both options honestly — including where each one has limitations — before recommending a path forward. This guide breaks down how PRP and Hair Mesotherapy work, what ingredients and techniques each one uses, how their results and recovery compare, and how a specialist typically decides which treatment fits a given patient.
          </p>
        </div>
      </section>

      {/* ============ UNDERSTANDING HAIR LOSS ============ */}
      <section className="py-16 bg-[#FDFCF7] border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] mb-4">Understanding Hair Loss</h2>
          <p className="text-sm text-[#5F5F5F] leading-relaxed mb-6">
            Before comparing treatments, it helps to understand what’s actually driving the hair loss. Common categories include:
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {causes.map((c, i) => (
              <div key={i} className="flex items-start gap-4 bg-white rounded-2xl border border-[#E6EFEA] p-5 shadow-sm">
                <span className="w-8 h-8 rounded-lg bg-[#1F5E4B] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-bold text-[#1A1A1A] text-sm mb-1">{c.title}</h3>
                  <p className="text-xs md:text-sm text-[#5F5F5F] leading-relaxed">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-[#5F5F5F] leading-relaxed mt-6 bg-white border border-gray-200 rounded-2xl p-6">
            Both PRP and Hair Mesotherapy are generally aimed at supporting existing follicles rather than creating new ones, which means they tend to work best on thinning hair rather than areas of complete baldness. A proper diagnosis from a <Link href="/services/best-hair-specialist-dubai/" className="text-[#1F5E4B] font-semibold underline hover:text-[#17493A]">hair specialist in Dubai</Link> is the right starting point before choosing between them, since the ideal treatment depends heavily on the underlying cause and stage of your hair loss.
          </p>
        </div>
      </section>

      {/* ============ WHAT IS PRP ============ */}
      <section className="py-16 bg-white border-b border-gray-150">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] mb-4">What Is PRP Hair Treatment?</h2>
          <p className="text-sm text-[#5F5F5F] leading-relaxed mb-8">
            PRP, or Platelet Rich Plasma therapy, uses a concentrated portion of your own blood platelets, drawn and processed on the spot, to stimulate hair follicles. Because it comes from your own blood, it’s often described as a biologically based approach rather than one relying on external formulas.
          </p>

          <div className="grid sm:grid-cols-3 gap-3 mb-10">
            {['Blood Drawn', 'Centrifuged', 'Plasma Injected'].map((step, i) => (
              <div key={step} className="flex items-center gap-3">
                <div className="flex-1 rounded-xl bg-[#E6EFEA]/45 px-4 py-4 text-center border border-[#E6EFEA]">
                  <p className="text-xs font-semibold text-[#1F5E4B] mb-1">Step {i + 1}</p>
                  <p className="text-sm font-semibold text-[#1A1A1A]">{step}</p>
                </div>
                {i < 2 && <LucideIcons.ArrowRight className="w-4 h-4 text-[#1F5E4B]/40 hidden sm:block shrink-0" />}
              </div>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div className="rounded-2xl overflow-hidden shadow-sm">
              <img src="/images/prp-hair-treatment-procedure-ramacare1.jpg" alt="PRP hair treatment procedure for hair loss Dubai at RamaCare Polyclinic" className="w-full h-[220px] object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-sm">
              <img src="/images/PRP preparation process for PRP hair.jpg" alt="PRP preparation process for PRP hair treatment Dubai" className="w-full h-[220px] object-cover" />
            </div>
          </div>

          <p className="text-sm font-semibold text-[#1A1A1A] mt-8 mb-3">How PRP Works</p>
          <ul className="space-y-2.5">
            {prpGrowthFactors.map((f, i) => (
              <li key={i} className="flex gap-2.5 text-sm text-[#5F5F5F] leading-relaxed">
                <LucideIcons.Check className="w-4 h-4 text-[#1F5E4B] shrink-0 mt-0.5" /> {f}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ============ Hair growth cycle — signature circular motif ============ */}
      <section className="bg-[#E6EFEA]/30 py-16 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] mb-3">Why the Hair Growth Cycle Matters</h2>
          <p className="text-sm text-[#5F5F5F] leading-relaxed max-w-2xl mx-auto mb-10">
            Hair doesn’t grow continuously — it cycles through growth, rest, and shedding phases. PRP and mesotherapy both aim to influence this cycle, which is why results build gradually across multiple sessions rather than appearing overnight.
          </p>

          <div className="relative max-w-xs mx-auto aspect-square mb-8">
            <div className="absolute inset-5 rounded-full overflow-hidden shadow-md">
              <img
                src="/images/hair growth cycle infographic.jpg"
                alt="Hair growth cycle infographic showing anagen and telogen phases"
                className="w-full h-full object-cover"/>
            </div>
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#1F5E4B]/20" />
            {growthCyclePhases.map((p) => {
              const pos = polarPos(p.angle, 50);
              return (
                <div
                  key={p.name}
                  className="absolute -translate-x-1/2 -translate-y-1/2 bg-white rounded-full shadow-md px-3 py-1 text-center border border-gray-100"
                  style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
                >
                  <p className="text-[10px] font-bold text-[#1F5E4B] whitespace-nowrap">{p.name}</p>
                </div>
              );
            })}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-left max-w-2xl mx-auto">
            {growthCyclePhases.map((p) => (
              <div key={p.name} className="bg-white rounded-xl px-4 py-3 border border-gray-150 shadow-xs">
                <p className="text-sm font-semibold text-[#1A1A1A]">{p.name}</p>
                <p className="text-xs text-[#5F5F5F] mt-0.5">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHAT IS MESOTHERAPY ============ */}
      <section className="py-16 bg-white border-b border-gray-150">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] mb-4">What Is Hair Mesotherapy?</h2>
          <p className="text-sm text-[#5F5F5F] leading-relaxed mb-6">
            Hair Mesotherapy is a non-surgical treatment that delivers a customized blend of vitamins, minerals, amino acids, and other nourishing compounds directly into the scalp via micro-injections. Unlike PRP, which uses your own blood, Mesotherapy relies on externally formulated solutions chosen to address specific concerns — such as poor circulation, nutrient deficiency at the follicle level, or general scalp health.
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            {mesoIngredients.map((ing) => (
              <span key={ing} className="text-xs text-[#C5A880] bg-[#FDFCF7] border border-[#C5A880]/30 px-3 py-1.5 rounded-full font-semibold">{ing}</span>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 gap-8 items-center">
            <div className="rounded-2xl overflow-hidden order-2 sm:order-1 shadow-sm">
              <img src="/images/Hair mesotherapy for hair loss Dubai.jpg" alt="Hair mesotherapy for hair loss Dubai treatment session" className="w-full h-[260px] object-cover" />
            </div>
            <div className="order-1 sm:order-2 space-y-4">
              <p className="text-sm font-semibold text-[#1A1A1A]">How Hair Mesotherapy Works</p>
              <ul className="space-y-3">
                {mesoWorks.map((m, i) => (
                  <li key={i} className="flex gap-2.5 text-xs md:text-sm text-[#5F5F5F] leading-relaxed">
                    <LucideIcons.Check className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" /> {m}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============ KEY DIFFERENCES TABLE ============ */}
      <section className="bg-[#FDFCF7] py-16 border-y border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] text-center mb-8">PRP vs Hair Mesotherapy: Key Differences</h2>
          <div className="rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm mb-6">
            <div className="grid grid-cols-[1.2fr_2fr_2fr] gap-x-4 px-5 py-4 border-b border-gray-200 bg-[#E6EFEA]/30">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1A1A1A]">Feature</span>
              <p className="text-xs font-bold uppercase tracking-wider text-[#1F5E4B]">PRP Hair Treatment</p>
              <p className="text-xs font-bold uppercase tracking-wider text-[#C5A880]">Hair Mesotherapy</p>
            </div>
            {keyDifferences.map((row, i) => (
              <div key={i} className={`grid grid-cols-[1.2fr_2fr_2fr] gap-x-4 px-5 py-4 items-start ${i !== keyDifferences.length - 1 ? 'border-b border-gray-150' : ''}`}>
                <p className="text-xs md:text-sm font-bold text-[#1A1A1A]">{row.criteria}</p>
                <p className="text-xs md:text-sm text-[#5F5F5F] leading-relaxed">{row.prp}</p>
                <p className="text-xs md:text-sm text-[#5F5F5F] leading-relaxed">{row.meso}</p>
              </div>
            ))}
          </div>
          <div className="rounded-2xl overflow-hidden mt-8 shadow-sm">
            <img
              src="/images/PRP vs Mesotherapy for hair loss Dubai.jpg"
              alt="PRP vs Mesotherapy for hair loss Dubai comparison chart"
              className="w-full h-[220px] sm:h-[300px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* ============ MATCHUPS / WHAT FITS ============ */}
      <section className="py-16 bg-white border-b border-gray-150">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] text-center mb-10">Which Treatment Fits Your Hair Loss Pattern?</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {patternMatch.map((p) => {
              const style = recStyle[p.rec];
              return (
                <div key={p.pattern} className="rounded-2xl border border-gray-200 p-6 bg-white shadow-sm flex flex-col justify-between hover:border-[#1F5E4B]/40 transition-all duration-300">
                  <div className="space-y-3">
                    <p className="text-sm md:text-base font-extrabold text-[#1A1A1A] leading-tight">{p.pattern}</p>
                    <p className="text-xs md:text-sm text-[#5F5F5F] leading-relaxed">{p.text}</p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-[10px] text-[#7F7F7F] font-bold uppercase tracking-wider">Suggested:</span>
                    <span className={`text-[11px] font-bold px-3 py-1 rounded-full ${style.bg} ${style.text}`}>{p.rec}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ RESULTS TIMELINE ============ */}
      <section className="bg-[#E6EFEA]/20 py-16 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] mb-6 text-center">PRP vs Hair Mesotherapy Results Timeline</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {timeline.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-5 border border-gray-200 shadow-xs">
                <p className="text-xs font-bold text-[#1F5E4B] mb-2 uppercase tracking-wide">{t.stage}</p>
                <p className="text-xs md:text-sm text-[#5F5F5F] leading-relaxed">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ RECOVERY & SESSIONS ============ */}
      <section className="py-16 bg-white border-b border-gray-150">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] mb-4">Recovery Time &amp; Sessions Comparison</h2>
          <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-left border-collapse text-xs md:text-sm">
              <thead>
                <tr className="bg-[#C5A880] text-white">
                  <th className="p-4 font-bold">Recovery Metric</th>
                  <th className="p-4 font-bold">PRP Recovery</th>
                  <th className="p-4 font-bold">Hair Mesotherapy Recovery</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {recoveryComparison.map((row, idx) => (
                  <tr key={idx} className="hover:bg-gray-50/50">
                    <td className="p-4 font-bold text-[#1A1A1A]">{row.label}</td>
                    <td className="p-4 text-[#5F5F5F]">{row.prp}</td>
                    <td className="p-4 text-[#1A1A1A] font-semibold">{row.meso}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 pt-4">
            <div className="bg-[#FDFCF7] p-5 rounded-2xl border border-gray-200">
              <h4 className="font-bold text-[#1F5E4B] text-sm mb-2">Number of Sessions Required</h4>
              <p className="text-xs text-[#5F5F5F] leading-relaxed">
                PRP is typically delivered as an initial series of sessions spaced several weeks apart, followed by maintenance visits over time. Hair Mesotherapy often follows a similar structure, though initial sessions may be scheduled slightly more frequently, depending on the formula and the patient’s response.
              </p>
            </div>
            <div className="bg-[#FDFCF7] p-5 rounded-2xl border border-gray-200">
              <h4 className="font-bold text-[#1F5E4B] text-sm mb-2">Maintenance Treatments</h4>
              <p className="text-xs text-[#5F5F5F] leading-relaxed">
                Both PRP and Hair Mesotherapy generally benefit from periodic maintenance sessions to sustain results over time. Skipping maintenance tends to allow the treatment’s effect to gradually fade, since neither treatment permanently alters the follicle in the way a surgical procedure does.
              </p>
            </div>
            <div className="bg-[#FDFCF7] p-5 rounded-2xl border border-gray-200">
              <h4 className="font-bold text-[#1F5E4B] text-sm mb-2">Pain and Comfort</h4>
              <p className="text-xs text-[#5F5F5F] leading-relaxed">
                Both treatments involve fine needle injections into the scalp, and most patients describe the sensation as mild pinching or pressure rather than significant pain. PRP is sometimes described as slightly more uncomfortable during the injection phase due to the concentration of the solution, while Mesotherapy injections are often described as very fine and comparatively gentle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ BENEFITS & RISKS ============ */}
      <section className="bg-[#FDFCF7] py-16 border-y border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] text-center">Benefits &amp; Risks</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-gray-150 shadow-xs">
              <h3 className="text-lg font-bold text-[#1F5E4B] mb-4 flex items-center gap-1.5"><LucideIcons.Sparkles className="w-5 h-5" /> Benefits of PRP</h3>
              <ul className="space-y-2">
                {prpBenefits.map((b, i) => (
                  <li key={i} className="flex gap-2.5 text-xs md:text-sm text-[#5F5F5F] leading-relaxed">
                    <LucideIcons.Check className="w-4 h-4 text-[#1F5E4B] shrink-0 mt-0.5" /> {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-150 shadow-xs">
              <h3 className="text-lg font-bold text-[#C5A880] mb-4 flex items-center gap-1.5"><LucideIcons.Apple className="w-5 h-5" /> Benefits of Hair Mesotherapy</h3>
              <ul className="space-y-2">
                {mesoBenefits.map((b, i) => (
                  <li key={i} className="flex gap-2.5 text-xs md:text-sm text-[#5F5F5F] leading-relaxed">
                    <LucideIcons.Check className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" /> {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm mt-6">
            <table className="w-full text-left border-collapse text-xs md:text-sm">
              <thead>
                <tr className="bg-[#EF4444] text-white">
                  <th className="p-4 font-bold">Risks and Possible Side Effects</th>
                  <th className="p-4 font-bold">PRP</th>
                  <th className="p-4 font-bold">Hair Mesotherapy</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {risksComparison.map((row, idx) => (
                  <tr key={idx} className="hover:bg-gray-50/50">
                    <td className="p-4 font-bold text-[#1A1A1A]">{row.label}</td>
                    <td className="p-4 text-[#5F5F5F]">{row.prp}</td>
                    <td className="p-4 text-[#EF4444] font-semibold">{row.meso}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-red-50/40 border border-red-200 p-5 rounded-2xl space-y-2">
            <h4 className="font-extrabold text-[#1A1A1A] text-sm flex items-center gap-2">
              <LucideIcons.AlertCircle className="w-5 h-5 text-red-500" /> Limitations of Both Treatments
            </h4>
            <p className="text-xs text-[#5F5F5F] leading-relaxed">
              Neither PRP nor Hair Mesotherapy is designed to regrow hair in areas of complete, long-standing baldness, since both rely on supporting follicles that are still present and at least somewhat active. Results are generally gradual rather than dramatic, and neither treatment offers a permanent, one-time fix — both require an ongoing series and maintenance to sustain results.
            </p>
          </div>
        </div>
      </section>

      {/* ============ COMBINATION & COSTS ============ */}
      <section className="py-16 bg-white border-b border-gray-150">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] mb-4">Can PRP and Mesotherapy Be Combined?</h2>
            <div className="rounded-2xl border-l-4 border-[#1F5E4B] bg-[#E6EFEA]/30 px-6 py-5">
              <p className="text-sm font-semibold text-[#1A1A1A] mb-1">Quick Answer:</p>
              <p className="text-sm text-[#5F5F5F] leading-relaxed">
                Yes, some specialists combine PRP and Hair Mesotherapy as part of a broader treatment plan, using PRP’s biological stimulation alongside Mesotherapy’s targeted nutrient delivery. Combining the two isn’t necessary for every patient, but it’s a legitimate approach some specialists recommend, particularly when a patient’s hair loss appears to involve both follicle-level stimulation needs and nutritional or scalp-health factors.
              </p>
            </div>
          </div>
          <div className="border-t border-gray-150 pt-8">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] mb-4">Cost Comparison in Dubai</h2>
            <div className="rounded-2xl border-l-4 border-[#C5A880] bg-[#FDFCF7] px-6 py-5 mb-6">
              <p className="text-sm font-semibold text-[#1A1A1A] mb-1">Quick Answer:</p>
              <p className="text-sm text-[#5F5F5F] leading-relaxed">
                Both PRP and Hair Mesotherapy are generally priced per session, with total cost depending on the number of sessions in your plan rather than a single flat fee. Neither treatment is inherently far more expensive than the other, though specific pricing depends on your clinic and treatment plan.
              </p>
            </div>
            <p className="text-sm font-semibold text-[#1A1A1A] mb-3">Factors that influence cost:</p>
            <ul className="grid sm:grid-cols-2 gap-3">
              {costFactors.map((c, i) => (
                <div key={i} className="flex gap-2.5 bg-[#FDFCF7] rounded-xl px-4 py-3.5 border border-gray-200">
                  <LucideIcons.Check className="w-4 h-4 text-[#1F5E4B] shrink-0 mt-0.5" />
                  <p className="text-xs md:text-sm text-[#5F5F5F] leading-relaxed">{c}</p>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ============ SPECIALIST CHOICES & CONSULTATION ============ */}
      <section className="bg-[#FDFCF7] py-16 border-y border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] mb-4">How Specialists Choose the Right Treatment</h2>
            <p className="text-sm text-[#5F5F5F] leading-relaxed">
              A specialist typically starts by examining your scalp and hair loss pattern, sometimes supported by diagnostic tools that assess follicle density and activity. From there, the conversation usually covers your goals, whether nutrient deficiency or biological stimulation seems to be the bigger factor in your case, your tolerance for the treatment schedule, and any relevant health history.
            </p>
            <p className="text-sm text-[#5F5F5F] leading-relaxed mt-4">
              This is also where patients sometimes learn that neither PRP nor Mesotherapy is the ideal fit — for more advanced hair loss, a specialist may instead discuss a surgical option, and our guide comparing <Link href="/services/prp-vs-hair-transplant-dubai/" className="text-[#1F5E4B] font-semibold underline hover:text-[#17493A]">PRP vs Hair Transplant in Dubai</Link> covers that comparison in depth if it’s relevant to your situation.
            </p>
          </div>
          <div className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] mb-6">What to Expect During a Consultation</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {consultProcess.map((c, i) => (
                <div key={i} className="rounded-xl border border-gray-200 p-4 bg-white shadow-xs">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-6 rounded-full bg-[#E6EFEA] text-[#1F5E4B] text-xs font-semibold flex items-center justify-center shrink-0">{i + 1}</span>
                    <IconTile name={c.icon} className="w-4 h-4 text-[#1F5E4B]" />
                  </div>
                  <p className="text-sm font-semibold text-[#1A1A1A]">{c.title}</p>
                  <p className="text-xs text-[#5F5F5F] leading-relaxed mt-1">{c.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ WHY CHOOSE RAMACARE ============ */}
      <section className="bg-[#1F5E4B] py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-semibold">Why Patients Choose RamaCare Polyclinic</h2>
            <p className="text-sm text-white/75 leading-relaxed">
              Choosing between PRP and Hair Mesotherapy isn’t a decision to make based on a generic comparison alone — it deserves a real evaluation from someone who can examine your scalp and talk through your specific goals. At RamaCare Polyclinic in Dubai, patients choose us for:
            </p>
            <ul className="space-y-2.5">
              {whyChoose.map((w, i) => (
                <li key={i} className="flex gap-2.5 text-xs md:text-sm text-white/85 leading-relaxed">
                  <LucideIcons.Check className="w-4 h-4 text-white/70 shrink-0 mt-0.5" /> {w}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-5 rounded-2xl overflow-hidden shadow-md">
            <img src="/images/DHA-licensed doctor examining scalp for hair.jpg" alt="DHA-licensed doctor examining scalp for hair restoration Dubai" className="w-full h-[300px] object-cover" />
          </div>
        </div>
      </section>

      {/* ============ RELATED GUIDES ============ */}
      <section className="bg-[#FDFCF7] py-16 border-y border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-xl font-semibold text-[#1A1A1A] mb-8">Related Hair Treatment Guides</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {relatedGuides.map((guide, idx) => (
              <div key={idx} className="bg-white p-5 rounded-xl border border-gray-200 hover:border-[#1F5E4B]/30 hover:shadow-xs transition-all duration-300 flex flex-col justify-between">
                <div className="space-y-2">
                  <h4 className="font-extrabold text-[#1A1A1A] text-sm">
                    <Link href={guide.link} className="text-[#1F5E4B] hover:text-[#17493A] flex items-center gap-1">
                      {guide.label} <LucideIcons.ArrowRight className="w-4 h-4" />
                    </Link>
                  </h4>
                  <p className="text-xs text-[#5F5F5F] leading-relaxed">
                    {guide.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FAQ — TOGGLE-SWITCH LIST ============ */}
      <section id="faqs" className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-1">
          {faqs.map((f, i) => {
            const isOpen = openFaq === i;
            return (
              <div key={i} className="border-b border-gray-100 py-4">
                <button onClick={() => setOpenFaq(isOpen ? null : i)} className="w-full flex items-center gap-3 text-left">
                  {isOpen ? (
                    <LucideIcons.ToggleRight className="w-5 h-5 text-[#1F5E4B] shrink-0" />
                  ) : (
                    <LucideIcons.ToggleLeft className="w-5 h-5 text-[#5F5F5F] shrink-0" />
                  )}
                  <span className="text-sm font-semibold text-[#1A1A1A] flex-1">{f.q}</span>
                </button>
                {isOpen && <p className="text-xs md:text-sm text-[#5F5F5F] leading-relaxed mt-2 pl-8">{f.a}</p>}
              </div>
            );
          })}
        </div>
      </section>

      {/* ============ CONCLUSION & FINAL CTA ============ */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A]">Ready to Find Out Which Treatment Fits You?</h2>
          <p className="text-sm text-[#5F5F5F] leading-relaxed max-w-4xl mx-auto">
            The most reliable way to know whether PRP, Hair Mesotherapy, or a combination of both suits your hair goals is a hands-on evaluation with a specialist who can examine your scalp directly. Book Appointment or Contact Us at RamaCare Polyclinic to schedule your consultation.
          </p>
          <p className="text-sm text-[#5F5F5F] leading-relaxed max-w-4xl mx-auto">
            There’s no single, universal answer to the PRP vs Hair Mesotherapy in Dubai comparison — both are non-surgical, low-downtime treatments that support existing hair rather than replacing what’s already been lost, and the better fit depends on your specific hair loss pattern, underlying cause, and personal goals. PRP draws on your own blood biology, while Hair Mesotherapy delivers a customized nutrient blend directly to the scalp, and for some patients, combining the two makes more sense than choosing just one. Whichever direction feels right after reading this guide, a personal consultation is the most reliable way to turn general understanding into a specific, realistic plan for your hair.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-4">
            <Link href="/book-appointment/" className="inline-flex items-center gap-2 rounded-xl bg-[#1F5E4B] px-8 py-4 text-sm font-bold text-white hover:bg-[#17493A] transition-colors">
              <LucideIcons.Calendar className="w-4 h-4" /> Book Consultation
            </Link>
            <a href="https://wa.me/971566597878?text=Hello%20RamaCare%20Polyclinic%2C%20I%20would%20like%20to%20ask%20about%20the%20differences%20between%20PRP%20and%20Hair%20Mesotherapy%20treatments." target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-2 rounded-xl border border-[#1F5E4B] px-8 py-4 text-sm font-bold text-[#1F5E4B] bg-white hover:bg-gray-50 transition-colors">
              <LucideIcons.MessageCircle className="w-4 h-4" /> Contact Us
            </a>
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
            <LucideIcons.Calendar className="w-5 h-5" />
            Book Consultation
          </Link>
        </div>
      </div>
    </Layout>
  );
}