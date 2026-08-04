import React, { useState } from 'react';
import Layout from '../../../components/Layout';
import Link from 'next/link';
import Head from 'next/head';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { useToast } from '../../../components/Toast';
import { useRouter } from 'next/router';

/* ------------------------------------------------------------------
   Page data — sourced directly from the HydraFacial vs Chemical Peel
   Dubai content brief.
   Signature motif: a "skin depth ladder" — since chemical peels are
   literally classified by how deep they penetrate (superficial /
   medium / deep) versus HydraFacial's surface-only action, this is
   visualized directly rather than abstracted into an unrelated icon.

   Text sizing note: body copy uses text-sm (14px) throughout; hero
   lead paragraphs use text-base (16px) per the readability request.
------------------------------------------------------------------- */
const SITE_URL = 'https://ramacarepolyclinic.ae';
const PAGE_PATH = '/services/hydrafacial-vs-chemical-peel-dubai';

const hydrafacialSteps = [
  { title: 'Cleanse & Peel', text: 'A gentle exfoliation step lifts away dead skin cells and reveals fresh skin underneath.' },
  { title: 'Extract', text: 'Painless vortex suction technology clears out dirt, oil, and blackheads from the pores.' },
  { title: 'Hydrate', text: 'Nutrient-rich serums are infused deep into the skin to replenish moisture and antioxidants.' },
];

const peelDepths = [
  { level: 1, name: 'Superficial Peels', acids: 'Glycolic, salicylic, lactic acid', text: 'Target the outermost skin layer — ideal for mild pigmentation, dullness, and acne-prone skin.' },
  { level: 2, name: 'Medium Peels', acids: 'TCA (trichloroacetic acid)', text: 'Reach the middle layer of skin — used for deeper pigmentation, fine lines, and acne scarring.' },
  { level: 3, name: 'Deep Peels', acids: 'Phenol-based', text: 'Used rarely and only under strict medical supervision for significant sun damage or deep wrinkles.' },
];

const quickCompareTable = [
  { feature: 'Treatment purpose', hydra: 'Hydration, gentle exfoliation, glow', peel: 'Exfoliation, pigmentation correction, resurfacing' },
  { feature: 'Procedure', hydra: 'Vortex suction device with serum infusion', peel: 'Topical acid solution applied and neutralized' },
  { feature: 'Downtime', hydra: 'None to minimal', peel: '1–7 days depending on peel depth' },
  { feature: 'Pain level', hydra: 'Little to none; feels like light suction', peel: 'Mild tingling to a warm/stinging sensation' },
  { feature: 'Session duration', hydra: '30–45 minutes', peel: '20–40 minutes' },
  { feature: 'Results', hydra: 'Immediate glow, gradual improvement with repeat sessions', peel: 'Visible peeling/flaking followed by smoother, brighter skin' },
  { feature: 'Ideal skin type', hydra: 'All skin types, including sensitive', peel: 'Normal to oily; sensitive skin needs caution' },
  { feature: 'Acne', hydra: 'Helps with mild breakouts and congestion', peel: 'Effective for active acne and post-acne marks' },
  { feature: 'Pigmentation', hydra: 'Mild improvement', peel: 'More effective for moderate to deep pigmentation' },
  { feature: 'Fine lines', hydra: 'Temporary plumping effect', peel: 'Improves texture and fine lines over multiple sessions' },
  { feature: 'Hydration', hydra: 'Excellent, core benefit of the treatment', peel: 'Can cause temporary dryness during recovery' },
  { feature: 'Recovery', hydra: 'None', peel: 'Redness, peeling, sun sensitivity for several days' },
  { feature: 'Maintenance', hydra: 'Every 4–6 weeks', peel: 'Every 4–8 weeks depending on peel strength' },
  { feature: 'Cost range', hydra: 'Moderate, varies by boosters used', peel: 'Varies by peel depth; superficial peels often lower cost per session' },
];

const detailedTopics = [
  { icon: 'Droplet', title: 'Skin Hydration', text: 'HydraFacial is the clear winner here. Because the treatment actively infuses hyaluronic acid and hydrating serums into the skin, patients typically leave with visibly plumper, dewier skin. Chemical peels, on the other hand, can temporarily dry out the skin during the healing phase, though the skin barrier usually recovers within a week with proper aftercare.' },
  { icon: 'CircleDot', title: 'Acne & Acne Scars', text: 'For active acne, both treatments can help, but in different ways. HydraFacial gently clears pores and reduces congestion without irritating active breakouts, making it a gentler option for inflamed skin. Chemical peels, particularly salicylic acid-based ones, penetrate deeper into oil glands and are often more effective for controlling breakouts and fading old acne scars.' },
  { icon: 'Sun', title: 'Pigmentation & Melasma', text: 'Pigmentation and melasma typically respond better to chemical peels, especially medium-depth TCA peels, because they work at a deeper skin level to break up excess melanin. HydraFacial can help maintain and brighten skin between peel sessions, but it\u2019s rarely the primary treatment for stubborn pigmentation.' },
  { icon: 'Sparkles', title: 'Fine Lines & Wrinkles', text: 'Neither treatment eliminates wrinkles, but both offer visible improvement in skin texture. HydraFacial gives a temporary plumping effect that softens the appearance of fine lines. Chemical peels stimulate collagen turnover over a series of sessions, offering more gradual but longer-lasting textural improvement.' },
  { icon: 'ShieldCheck', title: 'Sensitive Skin', text: 'HydraFacial is generally the safer starting point for sensitive skin, since it\u2019s non-abrasive and customizable in intensity. Chemical peels can still be used on sensitive skin, but require careful selection of a milder acid and lower concentration — this is where a proper dermatologist consultation matters most.' },
  { icon: 'Scale', title: 'Oily vs Dry Skin', text: 'Oily, acne-prone skin often tolerates chemical peels well and sees strong results in oil control and pore clarity. Dry skin tends to benefit more immediately from HydraFacial\u2019s hydration boost, though a mild lactic acid peel can also help dry, flaky skin shed dead cells without over-stripping moisture.' },
  { icon: 'Clock', title: 'Recovery Time & Downtime', text: 'This is one of the biggest practical differences. HydraFacial has essentially no downtime — many patients go straight back to work or social plans. Chemical peels involve some degree of peeling, redness, or flaking that can last anywhere from a couple of days to a full week, depending on the depth of the peel.' },
  { icon: 'Smile', title: 'Comfort Level', text: 'HydraFacial is comfortable throughout, often compared to a light facial massage. Chemical peels involve a brief tingling or warm sensation while the solution is on, which most patients tolerate well.' },
  { icon: 'Repeat', title: 'Sessions & Maintenance', text: 'Both treatments work best as part of an ongoing skincare plan rather than a one-time fix. HydraFacial is often done monthly for maintenance, while chemical peels are typically spaced 4–8 weeks apart, depending on peel strength and skin response.' },
];

const hydrafacialBenefits = [
  'Deep hydration that leaves skin visibly plumper and dewier',
  'Gentle, non-invasive process suitable for most skin types',
  'No downtime, making it ideal before events or as a lunchtime treatment',
  'Customizable serum boosters targeting specific concerns like dullness or congestion',
  'Immediate visible glow, often noticeable right after the first session',
  'Painless extraction process compared to traditional manual extractions',
];

const peelBenefits = [
  'Targets deeper layers of skin for more noticeable improvement in tone and texture',
  'Effective for pigmentation, melasma, acne scarring, and sun damage',
  'Stimulates natural collagen production over time',
  'Available in multiple strengths, allowing a tailored approach for different skin concerns',
  'Often more effective for long-term correction of stubborn discoloration',
  'Can be combined with other treatments for a comprehensive skin rejuvenation plan',
];

const hydrafacialSideEffects = ['Temporary redness immediately after the session', 'Mild sensitivity in areas with active breakouts', 'Rare allergic reaction to specific serums (a patch test or ingredient review is recommended for known allergies)'];
const peelSideEffects = ['Redness, tightness, and visible peeling for several days', 'Temporary increased sun sensitivity', 'Mild swelling in some cases, particularly with medium-depth peels', 'Rarely, uneven pigmentation changes if aftercare instructions aren\u2019t followed, especially in deeper skin tones'];

const chooseHydrafacial = [
  'You want visible glow with zero downtime, especially before an event',
  'Your main concerns are dullness, dehydration, or mildly clogged pores',
  'You have sensitive skin and want a gentler entry point into medical facials',
  'You\u2019re looking for a regular maintenance treatment alongside other skin therapies',
];
const choosePeel = [
  'You\u2019re dealing with stubborn pigmentation, melasma, or post-acne marks',
  'You have some flexibility for a few days of visible peeling or redness',
  'Your dermatologist has assessed your skin as a good candidate for a specific peel depth',
  'You\u2019re aiming for longer-term textural change rather than an instant glow',
];

const whyChoose = [
  'DHA-Licensed Clinic — all procedures comply with Dubai Health Authority regulations and safety standards',
  'Experienced dermatology team — practitioners assess each patient individually rather than offering a generic protocol',
  'Personalized treatment plans — built around your skin type and goals',
  'Modern equipment — medical-grade devices and pharmaceutical-grade peel solutions',
  'Patient-first approach — clear explanations, realistic expectations, no pressure to commit to add-ons',
  'Convenient Dubai location — easy to reach for consultations and follow-up sessions',
  'Consultation before treatment — every patient is assessed by a qualified dermatologist first',
];

const faqs = [
  { q: 'Which is better for acne — HydraFacial or a chemical peel?', a: 'It depends on the type of acne. Mild, congestion-related acne often responds well to HydraFacial\u2019s gentle extraction process, while active acne and post-acne marks are usually better addressed with a salicylic acid-based chemical peel. A dermatologist can determine which suits your specific case.' },
  { q: 'Which is better for pigmentation, HydraFacial or chemical peel?', a: 'Chemical peels, particularly medium-depth options, are generally more effective for moderate to deep pigmentation, since they work at a deeper skin layer than HydraFacial.' },
  { q: 'Which treatment gives longer-lasting results?', a: 'Chemical peels tend to offer more long-term textural change due to collagen stimulation, while HydraFacial results are more immediate but require regular maintenance sessions to sustain the glow.' },
  { q: 'Which treatment hurts more?', a: 'HydraFacial is virtually painless, feeling like a light facial massage. Chemical peels may cause a mild tingling or warm sensation during application, which is generally well tolerated.' },
  { q: 'Can I combine HydraFacial and a chemical peel?', a: 'Yes, many patients benefit from combining both, following a schedule designed by a dermatologist to avoid over-treating the skin.' },
  { q: 'How many sessions do I need to see results?', a: 'HydraFacial often shows visible results after a single session, with ongoing sessions recommended for maintenance. Chemical peels usually require a series of sessions, spaced weeks apart, for noticeable long-term improvement.' },
  { q: 'Which treatment has less downtime?', a: 'HydraFacial has little to no downtime, while chemical peels typically involve a few days of peeling or redness depending on the depth of the peel used.' },
  { q: 'Is HydraFacial safe for all skin types?', a: 'HydraFacial is generally considered safe and suitable for most skin types, including sensitive skin, though a dermatologist should still review your skin history beforehand.' },
  { q: 'Are chemical peels suitable for sensitive skin?', a: 'Sensitive skin can often tolerate a mild, superficial peel, but the concentration and type must be carefully selected by a qualified professional to minimize irritation.' },
  { q: 'Which treatment is better before a big event like a wedding?', a: 'HydraFacial is usually recommended closer to an event since it has no downtime, while chemical peels are better scheduled several weeks in advance to allow full recovery.' },
  { q: 'Does HydraFacial help with fine lines and wrinkles?', a: 'HydraFacial can temporarily plump the skin, softening the appearance of fine lines, though it isn\u2019t a substitute for treatments specifically targeting deeper wrinkles.' },
  { q: 'Will my skin peel visibly after a chemical peel?', a: 'Depending on the peel depth, some visible flaking or peeling is common for a few days, which is a normal part of the skin renewal process.' },
  { q: 'How often should I repeat these treatments?', a: 'HydraFacial is commonly repeated every 4–6 weeks, while chemical peels are usually spaced 4–8 weeks apart, depending on the strength used and your skin\u2019s response.' },
  { q: 'Do results vary from person to person?', a: 'Yes. Skin type, underlying conditions, and how well aftercare instructions are followed all influence results. A dermatologist can give you a realistic idea of what to expect based on your specific skin.' },
  { q: 'How do I know which treatment is right for me?', a: 'The only reliable way to settle the HydraFacial vs Chemical Peel Dubai question for your own skin is through an in-person consultation, where a qualified dermatologist can examine your skin and recommend the treatment — or combination of treatments — best suited to your goals.' },
];

const links = {
  acne: '/services/acne-treatment-dubai',
  pigmentation: '/services/pigmentation-dubai',
  melasma: '/services/melasma-treatment-dubai',
  aestheticDermatology: '/services/aesthetic-dermatology-dubai',
  skinBoosters: '/services/skin-boosters-dubai',
  prpFacial: '/services/face-prp-in-dubai',
  exosomesFacial: '/services/exosomes-facial-dubai',
  rosacea: '/services/rosacea-treatment-dubai',
  eczema: '/services/skin-allergy-dubai',
  psoriasis: '/services/psoriasis-treatment-dubai',
  bookAppointment: '/book-appointment',
};

/* ------------------------------------------------------------------
   JSON-LD schema — the types recommended in the brief
------------------------------------------------------------------- */
function buildSchema() {
  const medicalWebPage = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    url: SITE_URL + PAGE_PATH,
    name: 'HydraFacial vs Chemical Peel Dubai: Which Skin Treatment Is Right for You?',
    description: 'Confused between HydraFacial vs Chemical Peel Dubai? Compare benefits, downtime, cost & results with RamaCare\u2019s dermatology team. Book a consult today.',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
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

  const hydrafacialProcedure = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: 'HydraFacial',
    procedureType: 'https://schema.org/NoninvasiveProcedure',
    bodyLocation: 'Face',
    preparation: 'Consultation and skin assessment by a dermatologist',
    followup: 'No downtime; monthly maintenance sessions typical',
  };

  const chemicalPeelProcedure = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: 'Chemical Peel',
    procedureType: 'https://schema.org/NoninvasiveProcedure',
    bodyLocation: 'Face',
    preparation: 'Dermatologist assessment to determine peel type and strength',
    followup: 'Sun protection and gentle skincare during peeling/recovery period',
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL + '/' },
      { '@type': 'ListItem', position: 2, name: 'Aesthetic Dermatology', item: SITE_URL + links.aestheticDermatology },
      { '@type': 'ListItem', position: 3, name: 'HydraFacial vs Chemical Peel Dubai', item: SITE_URL + PAGE_PATH },
    ],
  };

  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'RamaCare Polyclinic',
    url: SITE_URL + '/',
    medicalSpecialty: 'Dermatology',
    hasCredential: 'DHA Licensed',
  };

  return [medicalWebPage, faqSchema, hydrafacialProcedure, chemicalPeelProcedure, breadcrumb, organization];
}

/* ------------------------------------------------------------------
   Small building blocks
------------------------------------------------------------------- */
function IconTile({ name, className = 'w-5 h-5 text-[#1F5E4B]' }) {
  const Icon = LucideIcons[name] || LucideIcons.Circle;
  return <Icon className={className} />;
}

export default function HydraFacialVsChemicalPeelPage() {
  const { showToast, ToastComponent } = useToast();
  const [openTopic, setOpenTopic] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);
  const router = useRouter();

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hello RamaCare, I'd like to book a skin consultation to discuss HydraFacial vs Chemical Peel.");
    window.open(`https://wa.me/971566597878?text=${message}`, '_blank');
  };
  const handleBookAppointment = () => router.push(links.bookAppointment);

  const schemaBlocks = buildSchema();

  return (
    <Layout>
      {ToastComponent}
      <Head>
        <title key="title">HydraFacial vs Chemical Peel Dubai | RamaCare</title>
        <meta
          name="description"
          content="Confused between HydraFacial vs Chemical Peel Dubai? Compare benefits, downtime, cost & results with RamaCare's dermatology team. Book a consult today."
          key="description"
        />
        <link rel="canonical" href={SITE_URL + PAGE_PATH} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="HydraFacial vs Chemical Peel Dubai — Full Comparison Guide" />
        <meta
          property="og:description"
          content="Not sure whether HydraFacial or a chemical peel suits your skin better? RamaCare Polyclinic breaks down the differences so you can choose with confidence."
        />
        <meta property="og:url" content={SITE_URL + PAGE_PATH} />
        <meta property="og:image" content={SITE_URL + '/images/hydrafacial-vs-chemical-peel-dubai-hero.jpg'} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="HydraFacial vs Chemical Peel Dubai — Full Comparison Guide" />
        {schemaBlocks.map((block, i) => (
          <script key={`schema-${i}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }} />
        ))}
      </Head>

      {/* ============ HERO ============ */}
      <section className="max-w-7xl mx-auto px-6 pt-8 pb-4">
        <nav aria-label="Breadcrumb" className="text-xs font-medium text-[#5F5F5F] mb-6 flex items-center gap-1.5">
          <Link href="/" className="hover:text-[#1F5E4B] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/services/aesthetic-dermatology-dubai/" className="hover:text-[#1F5E4B] transition-colors">Aesthetic Dermatology</Link>
          <span>/</span>
          <span aria-current="page" className="text-[#1F5E4B]">HydraFacial vs Chemical Peel</span>
        </nav>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-semibold text-[#1A1A1A] leading-[1.2] mb-6">
              HydraFacial vs Chemical Peel Dubai: Which Skin Treatment Is Right for You?
            </h1>
            <p className="text-base text-[#5F5F5F] leading-relaxed mb-4">
              If you&apos;ve been researching how to get smoother, brighter, more even-toned skin, you&apos;ve probably come across two names again and again: HydraFacial and chemical peels. Both are popular in Dubai&apos;s skincare scene, both promise a visible glow-up, and both are backed by real clinical evidence.
            </p>
            <p className="text-base text-[#5F5F5F] leading-relaxed mb-8">
              At RamaCare Polyclinic, a DHA-licensed clinic in Dubai, the &quot;right&quot; answer genuinely depends on your skin type, your goals, and how much downtime you can afford. This guide breaks it all down honestly.
            </p>
            <div className="flex flex-wrap gap-3">
              <button onClick={handleBookAppointment} className="inline-flex items-center gap-2 rounded-md bg-[#1F5E4B] px-6 py-3 text-sm font-medium text-white hover:bg-[#17493A] transition-colors">
                <LucideIcons.Calendar className="w-4 h-4" /> Book a Consultation
              </button>
              <button onClick={handleWhatsAppClick} className="inline-flex items-center gap-2 rounded-md border border-[#1F5E4B] px-6 py-3 text-sm font-medium text-[#1F5E4B] bg-white hover:bg-gray-50 transition-colors">
                <LucideIcons.MessageCircle className="w-4 h-4" /> WhatsApp Us
              </button>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="rounded-2xl overflow-hidden">
            <img
              src="/images/hydrafacial-vs-chemical-peel-dubai-hero.jpg"
              alt="HydraFacial vs Chemical Peel Dubai"
              className="w-full h-[320px] sm:h-[380px] object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* ============ What Is HydraFacial ============ */}
      <section className="bg-[#F5F1EA] py-16 px-6 mt-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] mb-4">What Is HydraFacial?</h2>
          <p className="text-sm text-[#5F5F5F] leading-relaxed mb-4">
            HydraFacial Dubai is a medical-grade, multi-step facial treatment that combines cleansing, exfoliation, extraction, and hydration into a single, machine-assisted session. It uses a patented device with a vortex-style tip that gently suctions out dead skin cells and debris from the pores while simultaneously infusing the skin with serums containing antioxidants, hyaluronic acid, and peptides.
          </p>
          <p className="text-sm text-[#5F5F5F] leading-relaxed mb-8">
            The entire process typically takes 30 to 45 minutes, involves no needles or downtime, and is often described as more of a &quot;spa-like medical facial&quot; than an aggressive treatment.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            {hydrafacialSteps.map((s, i) => (
              <React.Fragment key={s.title}>
                <div className="flex-1 rounded-xl bg-white p-5">
                  <p className="text-xs font-semibold text-[#1F5E4B] mb-1">Step {i + 1}</p>
                  <p className="text-sm font-semibold text-[#1A1A1A]">{s.title}</p>
                  <p className="text-sm text-[#5F5F5F] leading-relaxed mt-1">{s.text}</p>
                </div>
                {i < hydrafacialSteps.length - 1 && (
                  <div className="hidden sm:flex items-center text-[#1F5E4B]/40">
                    <LucideIcons.ArrowRight className="w-5 h-5" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 gap-8 items-start">
            <div className="rounded-2xl overflow-hidden">
              <img src="/images/hydrafacial-procedure-ramacare-dubai.jpg" alt="HydraFacial Dubai procedure at RamaCare Polyclinic" className="w-full h-[260px] object-cover" />
            </div>
            <div>
              <p className="text-sm font-semibold text-[#1A1A1A] mb-2">Best Candidates</p>
              <p className="text-sm text-[#5F5F5F] leading-relaxed">
                HydraFacial is generally suited to people with mild dullness, dehydration, clogged pores, or early signs of aging who want quick, low-risk results without taking time off work. It&apos;s also a popular pre-event choice, since there&apos;s no peeling or visible recovery period.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ What Is a Chemical Peel — depth ladder ============ */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] mb-4">What Is a Chemical Peel?</h2>
        <p className="text-sm text-[#5F5F5F] leading-relaxed mb-4">
          A Chemical Peel Dubai uses a controlled application of an acid solution to remove the outer layers of damaged skin, encouraging the growth of smoother, more evenly toned skin underneath. Unlike HydraFacial, which works mainly on the surface, peels penetrate to different depths depending on the acid concentration used.
        </p>
        <p className="text-sm text-[#5F5F5F] leading-relaxed mb-8">
          A dermatologist selects the peel type and strength based on your skin tone, sensitivity, and the specific concern being treated — this is not a one-size-fits-all treatment.
        </p>

        {/* Depth ladder — signature visual */}
        <div className="rounded-2xl border border-[#E9E2D6] bg-white p-6 mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#1F5E4B] mb-5">Peel Depth, Layer by Layer</p>
          <div className="space-y-3">
            {peelDepths.map((d) => (
              <div key={d.name} className="flex items-stretch gap-4">
                <div
                  className="w-2 rounded-full shrink-0"
                  style={{ background: d.level === 1 ? '#BFE0CF' : d.level === 2 ? '#6FA98D' : '#1F5E4B', minHeight: '64px' }}
                />
                <div className="flex-1 pb-1">
                  <p className="text-sm font-semibold text-[#1A1A1A]">{d.name} <span className="text-xs font-normal text-[#5F5F5F]">— {d.acids}</span></p>
                  <p className="text-sm text-[#5F5F5F] leading-relaxed mt-1">{d.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 items-start">
          <div>
            <p className="text-sm font-semibold text-[#1A1A1A] mb-2">Best Candidates</p>
            <p className="text-sm text-[#5F5F5F] leading-relaxed">
              Chemical peels tend to work well for people dealing with acne scarring, uneven skin tone, sun damage, or fine lines who are prepared for a short recovery period. Medium-depth peels are often recommended when HydraFacial alone isn&apos;t enough to address deeper discoloration — see our{' '}
              <a href={links.pigmentation} className="text-[#1F5E4B] underline underline-offset-4">Pigmentation Treatment Dubai</a> program.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden">
            <img src="/images/chemical-peel-treatment-session-ramacare.jpg" alt="Chemical Peel Dubai treatment session" className="w-full h-[240px] object-cover" />
          </div>
        </div>
      </section>

      {/* ============ Quick Comparison Table ============ */}
      <section className="bg-[#F0F7F4] py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] mb-2">Quick Comparison Table: HydraFacial vs Chemical Peel Dubai</h2>
          <p className="text-sm text-[#5F5F5F] leading-relaxed mb-8">
            A full side-by-side look at both treatments across the factors patients ask about most.
          </p>
          <div className="overflow-x-auto rounded-xl border border-[#E9E2D6] bg-white">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#E9E2D6]">
                  <th className="sticky left-0 bg-white text-left px-4 py-3 font-medium text-[#5F5F5F] min-w-[140px]">Feature</th>
                  <th className="text-left px-4 py-3 font-medium text-[#1A1A1A] min-w-[220px]">HydraFacial</th>
                  <th className="text-left px-4 py-3 font-medium text-[#1A1A1A] min-w-[220px]">Chemical Peel</th>
                </tr>
              </thead>
              <tbody>
                {quickCompareTable.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FBFAF7]'}>
                    <td className="sticky left-0 px-4 py-3 font-medium text-[#1A1A1A] align-top" style={{ background: 'inherit' }}>{row.feature}</td>
                    <td className="px-4 py-3 text-[#5F5F5F] align-top">{row.hydra}</td>
                    <td className="px-4 py-3 text-[#5F5F5F] align-top">{row.peel}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="rounded-2xl overflow-hidden mt-10">
            <img
              src="/images/hydrafacial-vs-chemical-peel-comparison-chart.jpg"
              alt="HydraFacial vs Chemical Peel Dubai comparison chart"
              className="w-full h-[240px] sm:h-[300px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* ============ Detailed Comparison — expandable topic tiles ============ */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] mb-2">HydraFacial vs Chemical Peel Dubai: Detailed Comparison</h2>
        <p className="text-sm text-[#5F5F5F] leading-relaxed mb-8">Tap any topic for the full comparison.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {detailedTopics.map((t, i) => {
            const isOpen = openTopic === i;
            return (
              <div key={t.title} className={`rounded-xl border p-5 transition-colors ${isOpen ? 'border-[#1F5E4B] bg-[#F0F7F4]' : 'border-[#E9E2D6] bg-white'}`}>
                <button onClick={() => setOpenTopic(isOpen ? null : i)} className="w-full flex items-start justify-between gap-3 text-left">
                  <span className="flex items-center gap-2.5">
                    <IconTile name={t.icon} className="w-4 h-4 text-[#1F5E4B] shrink-0" />
                    <span className="text-sm font-semibold text-[#1A1A1A]">{t.title}</span>
                  </span>
                  <LucideIcons.Plus className={`w-4 h-4 text-[#1F5E4B] shrink-0 transition-transform ${isOpen ? 'rotate-45' : ''}`} />
                </button>
                {isOpen && <p className="text-sm text-[#5F5F5F] leading-relaxed mt-3">{t.text}</p>}
              </div>
            );
          })}
        </div>
      </section>

      {/* Before/after texture image */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="rounded-2xl overflow-hidden">
          <img
            src="/images/glowing-skin-treatment-results-dubai.jpg"
            alt="Glowing skin treatment Dubai results"
            className="w-full h-[220px] sm:h-[280px] object-cover"
          />
        </div>
      </div>

      {/* ============ Benefits ============ */}
      <section className="bg-[#F5F1EA] py-16 px-6 mt-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6">
            <div className="flex items-center gap-2.5 mb-4">
              <LucideIcons.Droplet className="w-5 h-5 text-[#1F5E4B]" />
              <h3 className="text-lg font-semibold text-[#1A1A1A]">Benefits of HydraFacial</h3>
            </div>
            <ul className="space-y-2.5">
              {hydrafacialBenefits.map((b) => (
                <li key={b} className="flex gap-2.5 text-sm text-[#1A1A1A]/85 leading-relaxed">
                  <LucideIcons.Check className="w-4 h-4 text-[#1F5E4B] shrink-0 mt-0.5" /> {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-xl p-6">
            <div className="flex items-center gap-2.5 mb-4">
              <LucideIcons.Sun className="w-5 h-5 text-[#8a7856]" />
              <h3 className="text-lg font-semibold text-[#1A1A1A]">Benefits of Chemical Peel</h3>
            </div>
            <ul className="space-y-2.5">
              {peelBenefits.map((b) => (
                <li key={b} className="flex gap-2.5 text-sm text-[#1A1A1A]/85 leading-relaxed">
                  <LucideIcons.Check className="w-4 h-4 text-[#8a7856] shrink-0 mt-0.5" /> {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ============ Possible Side Effects ============ */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] mb-2">Possible Side Effects</h2>
        <p className="text-sm text-[#5F5F5F] leading-relaxed mb-8">
          Safety is a core part of any honest HydraFacial vs Chemical Peel Dubai discussion, so here&apos;s what to realistically expect from each.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          <div className="rounded-xl border border-[#E9E2D6] p-5">
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#1F5E4B] bg-[#F0F7F4] px-2.5 py-1 rounded-full mb-3">Low Risk</span>
            <p className="text-sm font-semibold text-[#1A1A1A] mb-2">HydraFacial</p>
            <ul className="space-y-2">
              {hydrafacialSideEffects.map((s) => <li key={s} className="text-sm text-[#5F5F5F] leading-relaxed">{s}</li>)}
            </ul>
          </div>
          <div className="rounded-xl border border-amber-200 p-5">
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full mb-3">Moderate Risk</span>
            <p className="text-sm font-semibold text-[#1A1A1A] mb-2">Chemical Peel</p>
            <ul className="space-y-2">
              {peelSideEffects.map((s) => <li key={s} className="text-sm text-[#5F5F5F] leading-relaxed">{s}</li>)}
            </ul>
          </div>
        </div>
        <div className="flex gap-3 rounded-lg border border-amber-200 bg-amber-50 px-5 py-4">
          <LucideIcons.AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <p className="text-sm text-amber-900 leading-relaxed">
            <span className="font-semibold">When to contact a doctor:</span> Contact your dermatologist or clinic promptly if you notice unusual swelling, blistering, signs of infection, prolonged redness beyond the expected recovery window, or any reaction more severe than explained during consultation.
          </p>
        </div>
      </section>

      {/* ============ Who Should Choose — profile cards ============ */}
      <section className="bg-[#F0F7F4] py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6">
            <h3 className="text-lg font-semibold text-[#1A1A1A] mb-4">Who Should Choose HydraFacial?</h3>
            <ul className="space-y-2.5">
              {chooseHydrafacial.map((c) => (
                <li key={c} className="flex gap-2.5 text-sm text-[#1A1A1A]/85 leading-relaxed">
                  <LucideIcons.ArrowRight className="w-4 h-4 text-[#1F5E4B] shrink-0 mt-0.5" /> {c}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-xl p-6">
            <h3 className="text-lg font-semibold text-[#1A1A1A] mb-4">Who Should Choose Chemical Peel?</h3>
            <ul className="space-y-2.5">
              {choosePeel.map((c) => (
                <li key={c} className="flex gap-2.5 text-sm text-[#1A1A1A]/85 leading-relaxed">
                  <LucideIcons.ArrowRight className="w-4 h-4 text-[#8a7856] shrink-0 mt-0.5" /> {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ============ Can Both Be Combined ============ */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] mb-4">Can Both Treatments Be Combined?</h2>
        <div className="rounded-xl border-l-4 border-[#1F5E4B] bg-[#F0F7F4] px-6 py-5 mb-5">
          <p className="text-sm text-[#1A1A1A] leading-relaxed">
            Yes — in many cases, combining HydraFacial and chemical peels can give more balanced results than relying on a single treatment. A dermatologist might recommend a course of chemical peels to address pigmentation, with HydraFacial sessions in between to maintain hydration and calm the skin during the peeling cycle.
          </p>
        </div>
        <p className="text-sm text-[#5F5F5F] leading-relaxed mb-6">
          That said, combination therapy isn&apos;t automatically right for everyone. Layering two active treatments too close together can overwhelm the skin barrier, especially for those with sensitive or reactive skin. This is exactly why a proper assessment at our{' '}
          <a href={links.aestheticDermatology} className="text-[#1F5E4B] underline underline-offset-4">Aesthetic Dermatology Dubai</a> department matters.
        </p>
        <p className="text-sm text-[#5F5F5F] leading-relaxed mb-4">For deeper rejuvenation, our team may also discuss:</p>
        <div className="flex flex-wrap gap-2.5">
          <a href={links.skinBoosters} className="text-sm text-[#1F5E4B] bg-white border border-[#E9E2D6] px-4 py-2 rounded-full hover:border-[#1F5E4B]">Skin Boosters Dubai</a>
          <a href={links.prpFacial} className="text-sm text-[#1F5E4B] bg-white border border-[#E9E2D6] px-4 py-2 rounded-full hover:border-[#1F5E4B]">PRP Facial Dubai</a>
          <a href={links.exosomesFacial} className="text-sm text-[#1F5E4B] bg-white border border-[#E9E2D6] px-4 py-2 rounded-full hover:border-[#1F5E4B]">Exosomes Facial Dubai</a>
        </div>
      </section>

      {/* ============ Why Choose RamaCare ============ */}
      <section className="bg-[#1F5E4B] py-16 px-6 text-white">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Why Choose RamaCare Polyclinic?</h2>
            <p className="text-sm text-white/75 leading-relaxed mb-6">
              Choosing the right skin clinic Dubai matters just as much as choosing between the treatments themselves — the equipment, hygiene standards, and expertise behind your facial treatment can make a real difference to both safety and results.
            </p>
            <ul className="space-y-2.5">
              {whyChoose.map((w) => (
                <li key={w} className="flex gap-2.5 text-sm text-white/85 leading-relaxed">
                  <LucideIcons.Check className="w-4 h-4 text-white/70 shrink-0 mt-0.5" /> {w}
                </li>
              ))}
            </ul>
            <p className="text-sm text-white/70 leading-relaxed mt-6">
              We also treat related skin concerns including{' '}
              <a href={links.rosacea} className="underline underline-offset-4 text-white">Rosacea</a>,{' '}
              <a href={links.eczema} className="underline underline-offset-4 text-white">Eczema</a>, and{' '}
              <a href={links.psoriasis} className="underline underline-offset-4 text-white">Psoriasis</a> — so if your skin concern goes beyond a facial or peel, our dermatology team can guide you toward the right long-term solution.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden">
            <img
              src="/images/dermatologist-consultation-skin-treatment-dubai.jpg"
              alt="Dermatologist consultation for skin treatment Dubai"
              className="w-full h-[300px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* ============ Conclusion ============ */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] mb-4">Conclusion</h2>
        <p className="text-sm text-[#5F5F5F] leading-relaxed mb-4">
          When it comes to HydraFacial vs Chemical Peel Dubai, there isn&apos;t a single universal winner — it genuinely comes down to your skin concerns, your tolerance for downtime, and your treatment goals. HydraFacial is the better choice if you want gentle, hydrating, no-downtime results, especially for dullness or mild congestion. Chemical peels tend to outperform HydraFacial for deeper pigmentation, acne scarring, and long-term textural change, though they come with a short recovery period.
        </p>
        <p className="text-sm text-[#5F5F5F] leading-relaxed mb-8">
          The safest and most effective way to decide is a proper consultation with a qualified dermatologist. Our team at RamaCare Polyclinic is here to walk you through your options honestly, so you can make a confident, informed decision.
        </p>
        <button onClick={handleBookAppointment} className="inline-flex items-center gap-2 rounded-md bg-[#1F5E4B] px-6 py-3 text-sm font-medium text-white hover:bg-[#17493A] transition-colors">
          <LucideIcons.Calendar className="w-4 h-4" /> Book an Appointment
        </button>
      </section>

      {/* ============ FAQ — card grid ============ */}
      <section className="bg-[#F5F1EA] py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] mb-8 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {faqs.map((f, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={f.q} className="bg-white rounded-xl p-5">
                  <button onClick={() => setOpenFaq(isOpen ? null : i)} className="w-full flex items-start justify-between gap-3 text-left">
                    <span className="text-sm font-semibold text-[#1A1A1A]">{f.q}</span>
                    <LucideIcons.ChevronDown className={`w-4 h-4 text-[#1F5E4B] shrink-0 mt-0.5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <p className={`text-sm text-[#5F5F5F] leading-relaxed mt-2 ${isOpen ? '' : 'line-clamp-2'}`}>{f.a}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ Medical Disclaimer ============ */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <p className="text-xs text-[#5F5F5F] leading-relaxed">
          <span className="font-medium text-[#1A1A1A]">Medical Disclaimer:</span> This article is intended for general informational purposes only and does not constitute medical advice. Results from HydraFacial and chemical peel treatments vary between individuals, and no specific outcome is guaranteed. All treatments at RamaCare Polyclinic are performed in accordance with Dubai Health Authority (DHA) regulations, and treatment suitability is determined only after a consultation with a qualified dermatologist. For general reference on skin treatment safety and best practices, patients may also consult resources published by the American Academy of Dermatology, Mayo Clinic, and Cleveland Clinic.
        </p>
      </section>

      {/* Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#E9E2D6] shadow-lg z-40 p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="hidden md:block">
            <p className="text-sm font-semibold text-[#1A1A1A]">Not sure which treatment fits your skin?</p>
            <p className="text-xs text-[#5F5F5F]">Book a dermatology consultation today</p>
          </div>
          <button
            onClick={handleBookAppointment}
            className="w-full md:w-auto flex items-center justify-center gap-2 bg-[#1F5E4B] text-white px-6 py-3 rounded-lg shadow-lg hover:bg-[#17493A] hover:shadow-xl transition-all font-semibold whitespace-nowrap text-center"
          >
            <LucideIcons.Calendar className="w-5 h-5" />
            Book Consultation
          </button>
        </div>
      </div>
    </Layout>
  );
}