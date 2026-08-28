import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from '../../../components/Layout';
import ContentReviewBadge from '../../../components/ContentReviewBadge';
import {
  ShieldCheck,
  XCircle,
  CheckCircle2,
  Circle,
  Clock,
  DollarSign,
  AlertTriangle,
  Phone,
  MessageCircle,
  ArrowRight,
  ChevronDown,
  Sparkles,
} from 'lucide-react';

/* =====================================================================
   ROOT CANAL VS TOOTH EXTRACTION DUBAI — original page build. Eighth
   distinct layout on the site: a "twin-track" comparison design — teal
   (Root Canal) and gold (Extraction) paired cards running side by side
   through every section that naturally compares the two procedures,
   plus a Day 1 / Week 1 / Month 1 recovery matrix grid. Wide max-w-7xl
   container throughout (not a narrow centered column). Brand tokens:
     teal   #1F5E4B   dark teal #0F3B2E   gold  #D4A574
     ink    #1A1A1A   muted     #5F5F5F
     cream  #F5F1E8   panel     #F9F7F2   urgent #C1443B
   Type scale: hero intro paragraph is 16px (text-base); every other
   paragraph/list is 14px (text-sm) — no 12px body copy anywhere.
   ===================================================================== */

const SEO = {
  title: 'Root Canal vs Tooth Extraction Dubai | RamaCare',
  metaDescription:
    "Deciding between a root canal and tooth extraction in Dubai? Compare pain, cost, recovery, and long-term results with RamaCare's DHA-licensed dental team today.",
  canonical: 'https://ramacarepolyclinic.ae/services/root-canal-vs-tooth-extraction-dubai/',
  ogTitle: 'Root Canal vs Tooth Extraction Dubai — Complete Comparison Guide',
  ogDescription:
    "Not sure whether your tooth can be saved or needs to come out? RamaCare Polyclinic breaks down root canal vs tooth extraction so you can decide with confidence.",
};

const WHATSAPP_NUMBER = '971566597878';
const waLink = (msg) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

const IMAGES = {
  hero: { src: '/images/root-canal-vs-tooth-extraction-dubai-hero.jpg', alt: 'Root Canal vs Tooth Extraction Dubai' },
  rootCanalProcedure: { src: '/images/root-canal-procedure-illustration-dubai.jpg', alt: 'Root canal procedure illustration Dubai' },
  extractionProcedure: { src: '/images/tooth-extraction-procedure-dubai.jpg', alt: 'Tooth extraction procedure Dubai' },
  toothComparison: { src: '/images/healthy-vs-infected-tooth-comparison.jpg', alt: 'Healthy vs infected tooth comparison' },
  rootCanalAnatomy: { src: '/images/root-canal-anatomy-diagram.jpg', alt: 'Root canal anatomy diagram' },
  xrayConsult: { src: '/images/dental-xray-consultation-dubai.jpg', alt: 'Dental X-ray consultation Dubai' },
  dentistExam: { src: '/images/dentist-examining-patient-dubai.jpg', alt: 'Dentist examining patient Dubai' },
  recoveryTimeline: { src: '/images/recovery-timeline-infographic-root-canal-extraction.jpg', alt: 'Recovery timeline infographic root canal extraction' },
  clinic: { src: '/images/ramacare-dental-clinic-dubai.jpg', alt: 'RamaCare dental clinic Dubai' },
  happyPatient: { src: '/images/happy-patient-after-dental-treatment-dubai.jpg', alt: 'Happy patient after dental treatment Dubai' },
};

const COMPARISON = [
  { feature: 'Purpose', rc: 'Removes infected pulp and saves the natural tooth', ext: "Removes a tooth that can't be saved or is causing problems" },
  { feature: 'Pain during procedure', rc: 'Minimal, performed under local anesthesia', ext: 'Minimal, performed under local anesthesia' },
  { feature: 'Post-procedure discomfort', rc: 'Mild soreness for a few days', ext: 'Mild to moderate soreness for several days' },
  { feature: 'Recovery time', rc: '2–3 days for normal activity', ext: '3–7 days, longer for surgical extractions' },
  { feature: 'Procedure time', rc: '60–90 minutes, sometimes over two visits', ext: '20–60 minutes depending on complexity' },
  { feature: 'Cost', rc: 'Moderate to higher, often includes a crown', ext: 'Lower upfront, but may need replacement later' },
  { feature: 'Tooth preservation', rc: 'Yes, keeps your natural tooth', ext: 'No, tooth is permanently removed' },
  { feature: 'Long-term results', rc: 'Functions like a natural tooth with proper crown', ext: 'May require an implant, bridge, or denture' },
  { feature: 'Follow-up needed', rc: 'Crown placement, periodic checkups', ext: 'Possible implant or bridge planning' },
  { feature: 'Best candidates', rc: 'Infected but structurally sound teeth', ext: 'Severely damaged, fractured, or non-restorable teeth' },
];

const RC_STEPS = [
  { name: 'Diagnosis & Anesthesia', desc: 'The dentist confirms the infection, usually with a digital X-ray, then numbs the area completely.' },
  { name: 'Accessing the Pulp', desc: 'A small opening is made to reach the infected pulp chamber.' },
  { name: 'Cleaning the Canals', desc: 'The infected tissue is carefully removed and the canals are cleaned and shaped.' },
  { name: 'Sealing the Tooth', desc: 'The cleaned canals are filled with a biocompatible material to prevent reinfection.' },
  { name: 'Crown Placement', desc: 'A dental crown is usually fitted afterward to restore strength and protect the tooth long-term.' },
];

const EXTRACTION_TYPES = [
  { name: 'Simple Extraction', desc: 'Used for teeth that are visible and accessible above the gumline; the tooth is loosened and removed with standard dental instruments.' },
  { name: 'Surgical Extraction', desc: 'Used for teeth that are impacted, broken below the gumline, or not fully erupted, such as many wisdom tooth cases; this involves a small incision and sometimes sectioning the tooth for removal.' },
];

const EXTRACTION_REQUIRED = [
  'A tooth is too badly decayed or fractured to be restored',
  'Advanced gum infection has caused significant bone or tissue loss',
  'Wisdom teeth are impacted or causing crowding',
  'Orthodontic treatment requires more space in the jaw',
];

const RC_BETTER = [
  'The tooth has an infected tooth structure but the surrounding bone and gum are still healthy',
  "There's a cracked tooth with pulp involvement but enough remaining structure to support a crown",
  "A severe cavity has reached the nerve but hasn't destroyed the tooth",
  'You want to preserve your natural bite and smile without altering neighboring teeth',
  "You'd prefer to avoid the additional cost and healing time of a future dental implant",
];

const EXT_BETTER = [
  'Wisdom teeth are impacted, misaligned, or repeatedly causing infection',
  'A tooth is severely fractured below the gumline with no structure left to restore',
  'Advanced gum disease has caused the tooth to become loose or unstable',
  'The tooth is non-restorable even with a root canal and crown',
  'An orthodontist has recommended extraction to correct overcrowding',
];

const RC_PROS = ['Preserves your natural tooth and bite', 'Maintains jawbone structure', 'Usually resolves pain quickly once treated', 'No need for a tooth replacement afterward'];
const RC_CONS = ['Requires a crown for full protection, adding to cost', 'May need more than one visit', 'A treated tooth can occasionally need retreatment years later'];
const EXT_PROS = ['Removes the source of infection or damage immediately', 'Often quicker than multi-step root canal therapy', 'Lower upfront cost in many cases'];
const EXT_CONS = ['Leaves a gap that may require a dental implant, bridge, or denture', 'Can lead to bone loss over time if not replaced', 'Neighboring teeth may shift without a replacement in place'];

const RECOVERY_MATRIX = [
  { stage: 'Day 1', rc: 'Mild numbness wears off within a few hours; slight tenderness when chewing is normal.', ext: 'A blood clot forms at the site; rest is recommended, along with a soft diet and avoiding straws.' },
  { stage: 'Week 1', rc: 'Most patients are back to normal eating and speaking; a temporary filling may still be in place awaiting the crown.', ext: 'Gum tissue begins closing over the socket; swelling and tenderness typically subside.' },
  { stage: 'Month 1', rc: 'The permanent crown is usually fitted, and the tooth functions like any other.', ext: 'Initial healing is complete; if a replacement is planned, discussions around an implant or bridge typically begin around this stage.' },
];

const RC_LONG_TERM = ['Keeps your natural tooth functioning for chewing and speaking', 'Preserves your natural smile and bite alignment', 'With a properly fitted crown, treated teeth commonly last many years'];
const EXT_LONG_TERM = ['Leaves a permanent gap unless a replacement option is chosen', 'Long-term solutions include a dental implant, a bridge, or a removable denture', 'Tooth replacement sooner rather than later helps prevent shifting of neighboring teeth and bone loss'];

const COST_FACTORS = [
  'Which tooth is affected (molars are generally more complex than front teeth)',
  'The complexity of the case, including how many canals are involved',
  'Whether a crown is needed afterward',
  'Whether the extraction is simple or surgical',
  'Diagnostic X-rays required before treatment',
];

const DELAY_RISKS = [
  'Spread of infection to surrounding teeth and tissue',
  'Development of a painful dental abscess',
  'Bone loss around the affected tooth',
  'Increasingly severe pain that becomes harder to manage',
  'Eventual tooth loss that could have been prevented with earlier treatment',
];

const WHY_US = [
  'DHA-licensed dentists with hands-on experience in both endodontic and extraction procedures',
  'Digital X-rays for faster, more precise diagnosis',
  'Modern dental technology and strict sterilization protocols for patient safety',
  'Personalized treatment planning rather than a one-size-fits-all recommendation',
  'Transparent consultation — we explain your options and costs clearly before any treatment begins',
  'Comfortable, patient-first environment designed to ease dental anxiety',
  'Convenient Dubai location, making follow-up visits simple to schedule',
];

const RELATED_SERVICES = [
  { label: 'Dental Veneers Dubai', href: '/services/dental-veneers-dubai/' },
  { label: 'Teeth Bleaching Dubai', href: '/services/teeth-bleaching-dubai/' },
  { label: 'Root Canal Treatment Dubai', href: '/services/root-canal-treatment-dubai/' },
  { label: 'Sensitive Teeth Treatment', href: '/services/sensitive-teeth-treatment-dubai/' },
];

const PROCESS = [
  { name: 'Consultation', desc: "You'll describe your symptoms and dental history to our team." },
  { name: 'Examination', desc: 'A dentist examines the affected tooth and surrounding gum tissue.' },
  { name: 'X-Rays', desc: 'Digital imaging shows the extent of the damage or infection below the surface.' },
  { name: 'Diagnosis', desc: "Your dentist explains exactly what's happening and why." },
  { name: 'Treatment Options', desc: "You'll be walked through whether root canal or extraction is appropriate, along with costs and timelines." },
  { name: 'Procedure', desc: 'Treatment is carried out under local anesthesia in a comfortable setting.' },
  { name: 'Follow-Up', desc: 'A review appointment ensures healing is on track, whether that means crown placement or discussing replacement options.' },
];

const EDUCATION_TIPS = [
  'Maintain consistent dental hygiene — brushing twice daily and flossing helps prevent decay before it reaches the pulp',
  "Keep up with regular checkups so problems are caught while they're still minor and easily treatable",
  "Don't delay treatment once you notice pain, sensitivity, or swelling — early intervention often means simpler, less invasive care",
  'Follow a tooth-friendly diet, limiting sugary and acidic foods that accelerate dental decay',
  'Ask about preventive dentistry options at your next visit, including sealants and fluoride treatments for at-risk teeth',
  'Read our guide on how to prevent tooth decay for more everyday habits that protect your teeth long-term',
];

const FAQS = [
  { q: 'Is a root canal painful?', a: "Not during the procedure itself, since it's performed under local anesthesia. Some mild soreness is normal for a day or two afterward, but it's generally far less uncomfortable than the toothache that led you to treatment." },
  { q: 'Which is cheaper, root canal or extraction?', a: 'Extraction usually has a lower upfront cost, but if you need a replacement tooth afterward — such as an implant or bridge — the total cost can end up comparable to or higher than a root canal with a crown.' },
  { q: 'Can I save my tooth instead of having it extracted?', a: 'In many cases, yes, if the tooth structure is still sound enough to support a root canal and crown. A dentist can confirm this after an examination and X-ray.' },
  { q: 'How long does recovery take after each treatment?', a: 'Root canal recovery is usually just a few days of mild soreness. Extraction recovery typically takes about a week for initial healing, with full bone healing over a few months.' },
  { q: 'Is tooth extraction permanent?', a: "Yes, once a tooth is removed it doesn't grow back, which is why replacement options like implants, bridges, or dentures are usually discussed if the gap needs to be filled." },
  { q: 'Will I need a dental implant after extraction?', a: "Not always, but it's commonly recommended to prevent shifting of neighboring teeth and bone loss over time, especially for visible or functional teeth." },
  { q: 'How many visits are required for a root canal?', a: 'Many root canals can be completed in one visit, though more complex cases or crown placement may require a second appointment.' },
  { q: 'Can an infected tooth heal without treatment?', a: "No. A pulp infection doesn't resolve on its own and typically worsens over time, potentially leading to an abscess or spreading to surrounding tissue." },
  { q: 'Which option lasts longer, root canal or extraction?', a: 'The answer usually favors the root canal: a successfully treated tooth, protected by a crown, can last many years or even a lifetime. An extracted tooth is gone permanently, so "lasting longer" depends on whichever replacement option you choose afterward.' },
  { q: 'Does insurance cover root canal or extraction treatment?', a: 'Coverage varies by provider and plan. Our team can help you understand your options during your consultation, though you should also check directly with your insurer.' },
  { q: 'What happens if I ignore a severe toothache?', a: 'Ignoring persistent pain can allow the underlying infection to spread, potentially leading to an abscess, bone loss, or eventually losing the tooth altogether.' },
  { q: 'Is a root canal better than extraction for a cracked tooth?', a: "It depends on how deep the crack extends. If the crack hasn't reached below the gumline and enough structure remains, a root canal is usually preferred over extraction." },
  { q: 'Do wisdom teeth always need to be extracted?', a: "Not always — some wisdom teeth erupt normally and cause no issues. Extraction is typically recommended when they're impacted, misaligned, or repeatedly causing infection." },
  { q: "What's the difference between simple and surgical extraction?", a: 'A simple extraction removes a visible, accessible tooth with standard instruments, while a surgical extraction is needed for teeth that are impacted or broken below the gumline.' },
  { q: 'How soon can I eat normally after a root canal or extraction?', a: 'Most patients can eat soft foods within a day for both procedures, gradually returning to a normal diet as soreness subsides — usually within a few days to a week.' },
  { q: 'Can a tooth that had a root canal get infected again?', a: "It's uncommon, but reinfection can occasionally occur, which is why regular checkups and a properly fitted crown are important for long-term success." },
  { q: 'Is emergency dental treatment available for severe tooth pain?', a: 'Yes, our team offers emergency dental treatment Dubai patients can access for urgent issues like severe pain, swelling, or a knocked-out or broken tooth.' },
  { q: "What's the best way to prevent needing either treatment?", a: 'Consistent oral hygiene, regular dental checkups, and prompt attention to any pain or sensitivity are the most effective ways to catch problems early, often avoiding the need for a root canal or extraction altogether.' },
];

function Eyebrow({ children }) {
  return <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#1F5E4B]/70">{children}</span>;
}

function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-8">
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="mt-2 text-2xl font-semibold leading-snug text-[#1A1A1A] sm:text-[1.75rem]">{title}</h2>
      {subtitle && <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#5F5F5F]">{subtitle}</p>}
    </div>
  );
}

function TrackLabel({ side, children }) {
  const isRC = side === 'rc';
  return (
    <div className="flex items-center gap-2">
      {isRC ? <ShieldCheck className="h-5 w-5 text-[#1F5E4B]" /> : <XCircle className="h-5 w-5 text-[#8A6A3F]" />}
      <h3 className="text-base font-semibold" style={{ color: isRC ? '#1F5E4B' : '#8A6A3F' }}>{children}</h3>
    </div>
  );
}

export default function RootCanalVsExtractionPage() {
  const [openFaq, setOpenFaq] = useState(0);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };

  const medicalWebPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: SEO.title,
    url: SEO.canonical,
    description: SEO.metaDescription,
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Root Canal vs Tooth Extraction Dubai',
    author: { '@type': 'Organization', name: 'RamaCare Polyclinic' },
    publisher: { '@type': 'Organization', name: 'RamaCare Polyclinic' },
    image: `https://ramacarepolyclinic.ae${IMAGES.hero.src}`,
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ramacarepolyclinic.ae/' },
      { '@type': 'ListItem', position: 2, name: 'Dental Dubai', item: 'https://ramacarepolyclinic.ae/services/dental-dubai/' },
      { '@type': 'ListItem', position: 3, name: 'Root Canal vs Tooth Extraction Dubai', item: SEO.canonical },
    ],
  };

  const rootCanalProcedureSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: 'Root Canal Treatment',
    procedureType: 'Endodontic Treatment',
    preparation: 'Diagnosis and local anesthesia following digital X-ray confirmation of infection.',
    followup: 'Crown placement and periodic checkups.',
  };

  const extractionProcedureSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: 'Tooth Extraction',
    procedureType: 'Simple or Surgical Dental Extraction',
    preparation: 'Clinical examination and X-ray to assess tooth position and complexity.',
    followup: 'Socket healing; possible dental implant, bridge, or denture planning.',
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'RamaCare Polyclinic',
    url: 'https://ramacarepolyclinic.ae/',
    medicalSpecialty: 'Dentistry',
    telephone: '+971566597878',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '12 Al Dhiyafah Rd - Jumeirah Terrace Building, Ground Floor, Jumeirah 1',
      addressLocality: 'Dubai',
      addressCountry: 'AE',
    },
  };

  return (
    <Layout>
      <Head>
        <title>{SEO.title}</title>
        <meta name="description" content={SEO.metaDescription} />
        <link rel="canonical" href={SEO.canonical} />
        <meta property="og:title" content={SEO.ogTitle} />
        <meta property="og:description" content={SEO.ogDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={SEO.canonical} />
        <meta property="og:image" content={`https://ramacarepolyclinic.ae${IMAGES.hero.src}`} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalWebPageSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(rootCanalProcedureSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(extractionProcedureSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      </Head>

      <div className="bg-white text-[#1A1A1A] antialiased">

        <section className="px-4 pb-12 pt-12 sm:pt-16">
          <div className="mx-auto max-w-7xl">
            <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-medium text-[#5F5F5F]">
              <a href="/" className="hover:text-[#1F5E4B]">Home</a>
              <span aria-hidden="true">/</span>
              <a href="/services/dental-dubai/" className="hover:text-[#1F5E4B]">Dental Dubai</a>
              <span aria-hidden="true">/</span>
              <span aria-current="page" className="text-[#1F5E4B]">Root Canal vs Tooth Extraction Dubai</span>
            </nav>

            <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <Eyebrow>Dental Treatment Comparison</Eyebrow>
                <h1 className="mt-3 text-3xl font-semibold leading-tight text-[#1A1A1A] sm:text-4xl">
                  Root Canal vs Tooth Extraction Dubai
                </h1>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#5F5F5F]">
                  Nobody plans on needing a dental procedure, so when a dentist tells you that a
                  tooth either needs a root canal or has to come out, it can feel like a lot to
                  process in one sitting. Choosing between root canal vs tooth extraction Dubai
                  dentists recommend is one of the most common forks in the road we see at
                  RamaCare Polyclinic, and it's also one of the most misunderstood decisions in
                  dentistry — patients often assume extraction is the "easier" option, when in
                  many cases saving the natural tooth is both more comfortable and better for
                  long-term oral health.
                </p>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#5F5F5F]">
                  This guide walks you through what each treatment actually involves, when a
                  tooth can realistically be saved, when removal genuinely is the safer choice,
                  and what recovery, pain, and cost look like for both. Saving a natural tooth is
                  almost always preferable when it's possible, since nothing replicates its
                  function quite like the original — but there are situations where extraction is
                  the more responsible, healthier decision. That's exactly why a proper diagnosis
                  from a qualified dentist matters more than guesswork or advice from a forum.
                </p>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#5F5F5F]">
                  If you're currently dealing with a severe toothache, swelling, or a tooth that's
                  been bothering you for weeks, don't wait for it to get worse.
                </p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={waLink("Hello RamaCare, I'd like to book an appointment to discuss root canal vs tooth extraction.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#1F5E4B] px-6 py-3 text-sm font-semibold text-white hover:bg-[#17493A] transition-colors duration-200"
                  >
                    Book an Appointment <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href="tel:+971042862006"
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#1F5E4B]/25 px-6 py-3 text-sm font-semibold text-[#1F5E4B] hover:bg-[#F9F7F2] transition-colors duration-200"
                  >
                    <Phone className="h-4 w-4" /> Call Now
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl lg:sticky lg:top-24 bg-[#F9F7F2] border border-gray-200/60 shadow-sm">
                  <Image src={IMAGES.hero.src} alt={IMAGES.hero.alt} fill sizes="(max-width: 1024px) 100vw, 480px" className="object-cover" priority />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#F9F7F2] px-4 py-16">
          <div className="mx-auto max-w-7xl">
            <SectionHeading eyebrow="At a Glance" title="Quick Comparison Table: Root Canal vs Tooth Extraction Dubai" />
            <div className="grid gap-8 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <div className="overflow-x-auto rounded-2xl border border-gray-100 bg-white">
                  <table className="w-full min-w-[560px] border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b border-gray-100">
                        <th className="px-5 py-3 font-semibold text-[#1A1A1A]">Feature</th>
                        <th className="px-5 py-3"><span className="flex items-center gap-1.5 font-semibold text-[#1F5E4B]"><ShieldCheck className="h-4 w-4" /> Root Canal</span></th>
                        <th className="px-5 py-3"><span className="flex items-center gap-1.5 font-semibold text-[#8A6A3F]"><XCircle className="h-4 w-4" /> Extraction</span></th>
                      </tr>
                    </thead>
                    <tbody>
                      {COMPARISON.map((row, i) => (
                        <tr key={row.feature} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F9F7F2]/60'}>
                          <td className="px-5 py-3 font-medium text-[#1A1A1A]">{row.feature}</td>
                          <td className="px-5 py-3 text-[#5F5F5F]">{row.rc}</td>
                          <td className="px-5 py-3 text-[#5F5F5F]">{row.ext}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="lg:col-span-4">
                <div className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl lg:sticky lg:top-24 bg-white border border-gray-200/60 shadow-sm">
                  <Image src={IMAGES.toothComparison.src} alt={IMAGES.toothComparison.alt} fill sizes="(max-width: 1024px) 100vw, 340px" className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-16">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              title="What Is Root Canal Treatment? What Is Tooth Extraction?"
              subtitle="Understanding what happens during each procedure starts here — root canal treatment (also known as endodontic treatment) removes an infected pulp while keeping the natural tooth in place, while tooth extraction removes a tooth that can no longer be repaired or is causing broader oral health problems."
            />
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-2xl border-t-4 border-[#1F5E4B] bg-[#1F5E4B]/5 p-6 sm:p-8">
                <TrackLabel side="rc">Root Canal Treatment</TrackLabel>
                <div className="relative mt-4 aspect-[16/9] w-full overflow-hidden rounded-xl">
                  <Image src={IMAGES.rootCanalProcedure.src} alt={IMAGES.rootCanalProcedure.alt} fill sizes="(max-width: 1024px) 100vw, 480px" className="object-cover" />
                </div>
                <h4 className="mt-5 text-sm font-semibold text-[#1A1A1A]">Infected Pulp, Cleaning, and Sealing</h4>
                <p className="mt-1 text-sm leading-relaxed text-[#5F5F5F]">The process typically follows these steps:</p>
                <div className="mt-3 space-y-3">
                  {RC_STEPS.map((s, i) => (
                    <div key={s.name} className="flex items-start gap-3">
                      <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#1F5E4B] text-[10px] font-bold text-white">{i + 1}</span>
                      <div>
                        <p className="text-sm font-semibold text-[#1A1A1A]">{s.name}</p>
                        <p className="text-sm leading-relaxed text-[#5F5F5F]">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-[#5F5F5F]">
                  Root canal therapy has a high success rate when performed correctly and followed
                  by a well-fitted crown, and most treated teeth go on to function for many years,
                  sometimes a lifetime, with normal care.
                </p>
                <div className="relative mt-5 aspect-[16/9] w-full overflow-hidden rounded-xl">
                  <Image src={IMAGES.rootCanalAnatomy.src} alt={IMAGES.rootCanalAnatomy.alt} fill sizes="(max-width: 1024px) 100vw, 480px" className="object-cover" />
                </div>
              </div>

              <div className="rounded-2xl border-t-4 border-[#D4A574] bg-[#D4A574]/5 p-6 sm:p-8">
                <TrackLabel side="ext">Tooth Extraction</TrackLabel>
                <div className="relative mt-4 aspect-[16/9] w-full overflow-hidden rounded-xl">
                  <Image src={IMAGES.extractionProcedure.src} alt={IMAGES.extractionProcedure.alt} fill sizes="(max-width: 1024px) 100vw, 480px" className="object-cover" />
                </div>
                <p className="mt-5 text-sm leading-relaxed text-[#5F5F5F]">
                  It's a more conservative decision than it sounds when the alternative is
                  ongoing infection, pain, or damage to surrounding teeth.
                </p>
                <h4 className="mt-4 text-sm font-semibold text-[#1A1A1A]">Simple vs Surgical Extraction</h4>
                <div className="mt-3 space-y-3">
                  {EXTRACTION_TYPES.map((t) => (
                    <div key={t.name}>
                      <p className="text-sm font-semibold text-[#1A1A1A]">{t.name}</p>
                      <p className="text-sm leading-relaxed text-[#5F5F5F]">{t.desc}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-sm font-semibold text-[#1A1A1A]">When extraction is required:</p>
                <ul className="mt-2 space-y-2">
                  {EXTRACTION_REQUIRED.map((r) => (
                    <li key={r} className="flex items-start gap-2 text-sm leading-relaxed text-[#1A1A1A]">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#8A6A3F]" />
                      {r}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm leading-relaxed text-[#5F5F5F]">
                  <strong className="text-[#1A1A1A]">Healing Process: </strong>
                  After extraction, a blood clot forms in the socket, which is essential for
                  healing — this is why dentists advise against rinsing forcefully or using
                  straws in the first 24 hours. Most patients see the gum tissue closing over
                  within one to two weeks, with complete bone healing taking several months.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#F9F7F2] px-4 py-16">
          <div className="mx-auto max-w-7xl">
            <SectionHeading title="When Is Each Option the Better Choice?" />
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-2xl bg-white p-6 sm:p-8">
                <TrackLabel side="rc">When Is Root Canal the Better Option?</TrackLabel>
                <p className="mt-3 text-sm leading-relaxed text-[#5F5F5F]">A root canal tends to be the stronger choice when:</p>
                <ul className="mt-3 space-y-2.5">
                  {RC_BETTER.map((r) => (
                    <li key={r} className="flex items-start gap-2.5 text-sm leading-relaxed text-[#1A1A1A]">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#1F5E4B]" />
                      {r}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm leading-relaxed text-[#5F5F5F]">
                  Choosing tooth preservation through root canal therapy also helps maintain
                  jawbone density, since your natural tooth root continues to stimulate the bone
                  the way an extracted socket cannot.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 sm:p-8">
                <TrackLabel side="ext">When Is Extraction the Better Option?</TrackLabel>
                <p className="mt-3 text-sm leading-relaxed text-[#5F5F5F]">Extraction becomes the more sensible option when:</p>
                <ul className="mt-3 space-y-2.5">
                  {EXT_BETTER.map((r) => (
                    <li key={r} className="flex items-start gap-2.5 text-sm leading-relaxed text-[#1A1A1A]">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#8A6A3F]" />
                      {r}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm leading-relaxed text-[#5F5F5F]">
                  In these cases, trying to save the tooth would likely mean repeated treatments
                  with a poor long-term outcome, so extraction — followed by a replacement plan if
                  needed — is usually the more practical path.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-16">
          <div className="mx-auto max-w-7xl">
            <SectionHeading title="Pros and Cons" subtitle="Weighing the pros and cons is often the fastest way to settle this question in your own mind." />
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-2xl border border-gray-100 p-6 sm:p-8">
                <TrackLabel side="rc">Root Canal Treatment</TrackLabel>
                <div className="mt-4 grid gap-6 sm:grid-cols-2">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-[#1F5E4B]">Pros</p>
                    <ul className="mt-2 space-y-2">
                      {RC_PROS.map((p) => (
                        <li key={p} className="flex items-start gap-2 text-sm leading-relaxed text-[#1A1A1A]">
                          <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-[#1F5E4B]" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-[#5F5F5F]">Cons</p>
                    <ul className="mt-2 space-y-2">
                      {RC_CONS.map((c) => (
                        <li key={c} className="flex items-start gap-2 text-sm leading-relaxed text-[#1A1A1A]">
                          <Circle className="mt-1.5 h-2 w-2 flex-shrink-0 fill-current text-[#5F5F5F]" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-gray-100 p-6 sm:p-8">
                <TrackLabel side="ext">Tooth Extraction</TrackLabel>
                <div className="mt-4 grid gap-6 sm:grid-cols-2">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-[#8A6A3F]">Pros</p>
                    <ul className="mt-2 space-y-2">
                      {EXT_PROS.map((p) => (
                        <li key={p} className="flex items-start gap-2 text-sm leading-relaxed text-[#1A1A1A]">
                          <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-[#8A6A3F]" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-[#5F5F5F]">Cons</p>
                    <ul className="mt-2 space-y-2">
                      {EXT_CONS.map((c) => (
                        <li key={c} className="flex items-start gap-2 text-sm leading-relaxed text-[#1A1A1A]">
                          <Circle className="mt-1.5 h-2 w-2 flex-shrink-0 fill-current text-[#5F5F5F]" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#F9F7F2] px-4 py-16">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              title="Pain Comparison"
              subtitle="Both procedures are performed under local anesthesia, so patients typically feel little to nothing during the treatment itself — this holds true even for patients with sensitive teeth."
            />
            <h3 className="text-base font-semibold text-[#1A1A1A]">Which Hurts Less?</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#5F5F5F]">The difference tends to show up afterward:</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="flex items-start gap-3 rounded-xl bg-white p-4">
                <ShieldCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#1F5E4B]" />
                <p className="text-sm leading-relaxed text-[#1A1A1A]">
                  <strong>Root canal</strong> — mild soreness around the treated tooth for one to
                  three days, usually manageable with over-the-counter pain relief.
                </p>
              </div>
              <div className="flex items-start gap-3 rounded-xl bg-white p-4">
                <XCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#8A6A3F]" />
                <p className="text-sm leading-relaxed text-[#1A1A1A]">
                  <strong>Extraction</strong> — some swelling and tenderness at the socket site,
                  particularly with surgical extractions, generally easing within a few days to a
                  week.
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-[#5F5F5F]">
              Your dentist will walk you through pain management options for either treatment, and
              most patients describe both as far less uncomfortable than the toothache that
              brought them in.
            </p>
          </div>
        </section>

        <section className="px-4 py-16">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <SectionHeading title="Recovery Time Comparison" subtitle="Recovery is one of the biggest practical differences between the two — here's what to expect at each stage." />
                <div className="grid gap-4 sm:grid-cols-3">
                  {RECOVERY_MATRIX.map((r) => (
                    <div key={r.stage} className="rounded-2xl border border-gray-100 p-5">
                      <p className="flex items-center gap-2 text-sm font-semibold text-[#1A1A1A]"><Clock className="h-4 w-4 text-[#D4A574]" /> {r.stage}</p>
                      <div className="mt-3 rounded-lg bg-[#1F5E4B]/5 p-3">
                        <p className="text-xs font-semibold text-[#1F5E4B]">Root Canal</p>
                        <p className="mt-1 text-sm leading-relaxed text-[#5F5F5F]">{r.rc}</p>
                      </div>
                      <div className="mt-2 rounded-lg bg-[#D4A574]/10 p-3">
                        <p className="text-xs font-semibold text-[#8A6A3F]">Extraction</p>
                        <p className="mt-1 text-sm leading-relaxed text-[#5F5F5F]">{r.ext}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-4">
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl lg:sticky lg:top-24 bg-white border border-gray-200/60 shadow-sm">
                  <Image src={IMAGES.recoveryTimeline.src} alt={IMAGES.recoveryTimeline.alt} fill sizes="(max-width: 1024px) 100vw, 340px" className="object-contain" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#F9F7F2] px-4 py-16">
          <div className="mx-auto max-w-7xl">
            <SectionHeading title="Long-Term Results" />
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-2xl bg-white p-6 sm:p-8">
                <TrackLabel side="rc">Root Canal</TrackLabel>
                <ul className="mt-4 space-y-2.5">
                  {RC_LONG_TERM.map((r) => (
                    <li key={r} className="flex items-start gap-2.5 text-sm leading-relaxed text-[#1A1A1A]">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#1F5E4B]" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl bg-white p-6 sm:p-8">
                <TrackLabel side="ext">Extraction</TrackLabel>
                <ul className="mt-4 space-y-2.5">
                  {EXT_LONG_TERM.map((r) => (
                    <li key={r} className="flex items-start gap-2.5 text-sm leading-relaxed text-[#1A1A1A]">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#8A6A3F]" />
                      {r}
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-sm leading-relaxed text-[#5F5F5F]">
                  Our dental implants vs bridges Dubai guide breaks down how to choose between
                  replacement options.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-16">
          <div className="mx-auto max-w-7xl">
            <SectionHeading eyebrow="Budgeting" title="Cost Comparison" />
            <p className="text-sm leading-relaxed text-[#5F5F5F]">
              Cost is often the deciding factor. Our detailed root canal cost Dubai and tooth
              extraction cost Dubai guides break down typical price ranges, but both vary
              depending on several factors, so it's difficult to quote an exact figure without an
              in-person assessment. Pricing typically depends on:
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {COST_FACTORS.map((f) => (
                <div key={f} className="flex items-start gap-2.5 rounded-xl bg-[#F9F7F2] p-4 text-sm leading-relaxed text-[#1A1A1A]">
                  <DollarSign className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#1F5E4B]" />
                  {f}
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm leading-relaxed text-[#5F5F5F]">
              While extraction often looks cheaper upfront, it's worth factoring in the potential
              future cost of a dental implant, bridge, or denture if you'll need to replace the
              missing tooth. A root canal with a crown can sometimes work out comparable in total
              cost while preserving your natural tooth. The only way to get an accurate,
              personalized estimate is a consultation with our dental team, where we'll walk you
              through the exact costs before you commit to anything.
            </p>
          </div>
        </section>

        <section className="bg-[#C1443B] px-4 py-16 text-white">
          <div className="mx-auto max-w-7xl">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-6 w-6" />
              <h2 className="text-2xl font-semibold sm:text-[1.75rem]">Risks of Delaying Treatment</h2>
            </div>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/85">
              Putting off treatment for either condition rarely makes things easier. Left
              untreated, an infected tooth or gum infection can lead to:
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {DELAY_RISKS.map((r) => (
                <div key={r} className="flex items-start gap-2.5 rounded-xl bg-white/10 p-4 text-sm leading-relaxed">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white" />
                  {r}
                </div>
              ))}
            </div>
            <p className="mt-6 max-w-3xl text-sm leading-relaxed text-white/85">
              If you're experiencing persistent tooth pain, swelling, or sensitivity, it's worth
              treating it as a priority rather than waiting for it to resolve on its own — dental
              infections don't go away without treatment.
            </p>
          </div>
        </section>

        <section className="px-4 py-16">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <SectionHeading title="Why Choose RamaCare Polyclinic?" />
                <p className="text-sm leading-relaxed text-[#5F5F5F]">
                  Deciding between saving a tooth and removing it is a decision worth making with
                  a team you trust. Every dentist on our team at RamaCare Polyclinic offers:
                </p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {WHY_US.map((w) => (
                    <div key={w} className="flex items-start gap-2.5 rounded-xl bg-[#F9F7F2] p-4 text-sm leading-relaxed text-[#1A1A1A]">
                      <ShieldCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#1F5E4B]" />
                      {w}
                    </div>
                  ))}
                </div>
                <p className="mt-5 text-sm leading-relaxed text-[#5F5F5F]">
                  We believe in ethical, evidence-based dentistry — recommending what's genuinely
                  right for your tooth, not the option that's simply more convenient for us.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[#5F5F5F]">
                  If you're also dealing with related concerns, our team can help with:
                </p>
                <div className="mt-3 flex flex-wrap gap-2.5">
                  {RELATED_SERVICES.map((s) => (
                    <a key={s.href} href={s.href} className="rounded-full border border-[#1F5E4B]/15 bg-[#F9F7F2] px-3.5 py-1.5 text-xs font-medium text-[#1F5E4B] hover:bg-[#1F5E4B]/10">
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl lg:sticky lg:top-24">
                  <Image src={IMAGES.clinic.src} alt={IMAGES.clinic.alt} fill sizes="(max-width: 1024px) 100vw, 400px" className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#F9F7F2] px-4 py-16">
          <div className="mx-auto max-w-7xl">
            <SectionHeading title="Your Appointment Process, Step by Step" />
            <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-7">
                <div className="space-y-3">
                  {PROCESS.map((p, i) => (
                    <div key={p.name} className="flex items-start gap-4 rounded-xl bg-white p-4">
                      <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[#1F5E4B] text-xs font-bold text-white">{i + 1}</span>
                      <div>
                        <p className="text-sm font-semibold text-[#1A1A1A]">{p.name}</p>
                        <p className="mt-0.5 text-sm leading-relaxed text-[#5F5F5F]">{p.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
                  <Image src={IMAGES.xrayConsult.src} alt={IMAGES.xrayConsult.alt} fill sizes="(max-width: 1024px) 100vw, 41.66vw" className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-16">
          <div className="mx-auto max-w-7xl">
            <SectionHeading title="Patient Education Tips" subtitle="A few habits go a long way toward avoiding this decision altogether in the future." />
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {EDUCATION_TIPS.map((t) => (
                <div key={t} className="flex items-start gap-2.5 rounded-xl border border-gray-100 p-4 text-sm leading-relaxed text-[#1A1A1A]">
                  <Sparkles className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#D4A574]" />
                  {t}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#F9F7F2] px-4 py-16">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <Eyebrow>Conclusion</Eyebrow>
                <h2 className="mt-2 text-2xl font-semibold text-[#1A1A1A] sm:text-[1.75rem]">
                  There's Rarely a Universally "Right" Answer
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-[#5F5F5F]">
                  When it comes to root canal vs tooth extraction Dubai patients face, the right
                  answer depends on how much of the tooth structure remains, how far the infection
                  or damage has spread, and your own priorities around preserving your natural
                  smile. Root canal treatment is generally the preferred path whenever a tooth can
                  realistically be saved, since nothing fully replaces a natural tooth's function.
                  Extraction becomes the more responsible choice when a tooth is too compromised
                  to restore safely.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[#5F5F5F]">
                  The only way to know which path is right for your specific tooth is a proper
                  examination and diagnosis from a qualified dentist — not a guess based on
                  symptoms alone. Our team at RamaCare Polyclinic will walk you through your root
                  canal or extraction options honestly, without pressuring you toward one
                  treatment over the other.
                </p>
                <p className="mt-3 text-sm font-semibold text-[#1A1A1A]">
                  Dealing with tooth pain or unsure which treatment you need? Book an Appointment
                  with RamaCare Polyclinic today, or reach out to our team on WhatsApp for a quick
                  initial inquiry before your visit.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={waLink("Hello RamaCare, I'd like to book an appointment for a dental assessment.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#1F5E4B] px-6 py-3 text-sm font-semibold text-white hover:bg-[#17493A] transition-colors duration-200"
                  >
                    <MessageCircle className="h-4 w-4" /> Book an Appointment
                  </a>
                  <a
                    href="tel:+971042862006"
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#1F5E4B]/25 px-6 py-3 text-sm font-semibold text-[#1F5E4B] hover:bg-white transition-colors duration-200"
                  >
                    <Phone className="h-4 w-4" /> Call Now
                  </a>
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
                  <Image src={IMAGES.happyPatient.src} alt={IMAGES.happyPatient.alt} fill sizes="(max-width: 1024px) 100vw, 400px" className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-16">
          <div className="mx-auto max-w-7xl">
            <SectionHeading eyebrow="Common Questions" title="Frequently Asked Questions" />
            <div className="grid gap-x-10 md:grid-cols-2">
              {[FAQS.slice(0, 9), FAQS.slice(9)].map((col, colIdx) => (
                <div key={colIdx} className="divide-y divide-gray-100">
                  {col.map((f, i) => {
                    const idx = colIdx * 9 + i;
                    const isOpen = openFaq === idx;
                    return (
                      <div key={f.q}>
                        <button onClick={() => setOpenFaq(isOpen ? -1 : idx)} className="flex w-full items-center gap-3 py-4 text-left">
                          <span className="flex-1 text-sm font-semibold text-[#1A1A1A]">{idx + 1}. {f.q}</span>
                          <ChevronDown className={`h-4 w-4 flex-shrink-0 text-[#5F5F5F] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.18 }}>
                              <p className="pb-4 text-sm leading-relaxed text-[#5F5F5F]">{f.a}</p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </section>

        <ContentReviewBadge doctorName="Dr. Hirbod Gilandoust" pageSlug="root-canal-vs-tooth-extraction-dubai" />

        <section className="bg-[#F9F7F2] px-4 py-10">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm italic leading-relaxed text-[#5F5F5F]">
              Medical Disclaimer: This article is intended for general informational purposes only
              and does not constitute dental or medical advice. Results vary by patient, and
              treatment suitability for a root canal, extraction, or any related procedure can
              only be determined through an in-person examination by a qualified dentist. All
              treatments at RamaCare Polyclinic are performed by DHA-licensed dentists in
              accordance with Dubai Health Authority regulations and established sterilization
              protocols.
            </p>
          </div>
        </section>

      </div>
    </Layout>
  );
}