import React, { useState } from 'react';
import Layout from '../../../components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { useToast } from '../../../components/Toast';
import BookConsultation from '../../../components/BookConsultation';
import { useRouter } from 'next/router';


const SITE_URL = 'https://ramacarepolyclinic.ae';
const PAGE_PATH = '/services/dry-needling-vs-massage-therapy-dubai';

const painCauses = [
  { icon: 'Crosshair', title: 'Trigger Points', text: 'Small, hyperirritable knots within a tight band of muscle fibre that can cause local or referred pain.' },
  { icon: 'CircleDot', title: 'Muscle Knots', text: 'Areas of persistent muscle contraction that feel firm or "ropey" under the skin.' },
  { icon: 'Layers', title: 'Myofascial Pain Syndrome', text: 'A chronic pain condition involving trigger points within the muscle and surrounding fascia.' },
  { icon: 'Zap', title: 'Sports Injuries', text: 'Strains, overuse injuries, and micro-tears from training or competition.' },
  { icon: 'Monitor', title: 'Poor Posture', text: 'Prolonged sitting, screen use, and desk-based work that overloads the neck and upper back.' },
  { icon: 'Repeat', title: 'Repetitive Strain', text: 'Repeated movement patterns at work, in the gym, or during daily activities.' },
  { icon: 'Brain', title: 'Stress-Related Tension', text: 'Chronic stress often manifests physically as tightness in the neck, shoulders, and jaw.' },
  { icon: 'TrendingDown', title: 'Overuse Injuries', text: 'Gradual breakdown of tissue from doing too much, too often, without adequate recovery.' },
];

const dryNeedlingBenefits = [
  'Targeted trigger point release',
  'Reduced local and referred pain',
  'Improved muscle relaxation',
  'Enhanced blood circulation to the treated area',
  'Support for pain modulation via the nervous system',
  'Improved range of motion in some patients',
];

const massageTypes = [
  { name: 'Deep Tissue Massage', text: 'Uses firm, sustained pressure to reach deeper layers of muscle and fascia, often used for chronic tension and muscle tightness.' },
  { name: 'Sports Massage', text: 'Designed for athletes, focusing on injury prevention, performance support, and faster recovery between training sessions.' },
  { name: 'Relaxation Massage', text: 'Lighter, rhythmic strokes intended primarily to reduce stress and promote general wellbeing.' },
];

const massageBenefits = [
  'Improved circulation and lymphatic flow',
  'Reduced muscle tension and stiffness',
  'Lower stress and cortisol levels',
  'Better sleep quality',
  'Enhanced flexibility',
  'Faster recovery after intense physical activity',
  'General relaxation and improved sense of wellbeing',
];

const comparisonTable = [
  { feature: 'Primary purpose', needling: 'Release specific trigger points within muscle tissue', massage: 'Relax soft tissue and support general muscle recovery' },
  { feature: 'Best for', needling: 'Localized, stubborn trigger points and myofascial pain', massage: 'General tension, stress, and broader muscle tightness' },
  { feature: 'Pain relief', needling: 'Targeted, can be felt quickly after treatment', massage: 'Gradual, cumulative relief over sessions' },
  { feature: 'Muscle knots', needling: 'Directly targets the knot at a deep tissue level', massage: 'Helps soften and loosen knots via manual pressure' },
  { feature: 'Trigger points', needling: 'Highly effective for isolated, well-defined points', massage: 'Can help but less precise for deep trigger points' },
  { feature: 'Relaxation', needling: 'Secondary benefit; primary focus is functional release', massage: 'Primary benefit; strong relaxation effect' },
  { feature: 'Sports injuries', needling: 'Useful for tightness linked to overuse or strain', massage: 'Useful for recovery, flexibility, event support' },
  { feature: 'Recovery time', needling: 'Mild soreness for 24–48 hours is common', massage: 'Minimal downtime; some soreness after deep work' },
  { feature: 'Scientific evidence', needling: 'Growing evidence base for myofascial pain', massage: 'Well-established evidence for relaxation/circulation' },
  { feature: 'Session duration', needling: 'Typically 15–30 minutes', massage: 'Typically 30–60 minutes' },
  { feature: 'Treatment frequency', needling: 'Often 1–2x/week during active treatment', massage: 'Weekly to monthly, based on goals' },
];

const conditions = [
  { name: 'Neck Pain', href: '/services/neck-pain-treatment-dubai', text: 'For neck pain linked to tight, well-defined trigger points (common with desk work), dry needling can offer targeted relief. For neck tension linked to stress or general tightness, massage therapy may be more comfortable as a starting point. Many patients benefit from both.' },
  { name: 'Back Pain', href: '/services/back-pain-treatment-dubai', text: 'Chronic myofascial back pain with identifiable trigger points often responds well to dry needling, while general stiffness and muscular fatigue in the back may respond better to massage.' },
  { name: 'Shoulder Pain', href: '/services/shoulder-pain-treatment-dubai', text: 'Trigger points in the upper trapezius and rotator cuff region are common contributors to shoulder pain and can respond well to dry needling. Massage therapy can complement this by improving overall mobility.' },
  { name: 'Tennis Elbow', href: '/services/tennis-elbow-treatment-dubai', text: 'Dry needling is frequently used to address the muscular component around the forearm and elbow, often alongside a structured rehabilitation program.' },
  { name: 'Plantar Fasciitis', href: '/services/plantar-fasciitis-treatment-dubai', text: 'Dry needling of the calf and foot muscles is sometimes used to reduce tension contributing to plantar fascia strain, while massage may help manage surrounding calf tightness.' },
  { name: 'Sciatica', href: '/services/sciatica-treatment-dubai', text: 'Trigger points in the deep gluteal muscles can contribute to sciatic-type symptoms, and dry needling is sometimes used as part of a broader plan. Massage may help ease surrounding muscular guarding.' },
  { name: 'Sports Injuries', href: '/services/sports-injury-rehabilitation-dubai', text: 'Athletes recovering from strains or overuse injuries often benefit from a combination approach — dry needling for specific trigger points and massage for broader recovery.' },
  { name: 'Muscle Tightness', href: null, text: 'General, widespread tightness without a clear trigger point often responds well to massage therapy alone.' },
  { name: 'Office-Related Postural Pain', href: null, text: 'A combination of both treatments frequently works well — massage for overall tension and dry needling for specific problem points that develop from prolonged sitting.' },
  { name: 'Chronic Myofascial Pain', href: null, text: 'Long-standing myofascial pain syndrome often benefits most from a structured, combined approach delivered over several weeks, guided by ongoing physiotherapy assessment.' },
];

const combinedUses = [
  { title: 'Chronic Pain Management', text: 'Long-standing myofascial pain benefits from both precise trigger point release and broader soft tissue relaxation.' },
  { title: 'Sports Rehabilitation', text: 'Athletes need both targeted treatment of injury-related trigger points and general muscle recovery support.' },
  { title: 'Post-Activity Recovery', text: 'A combination helps manage both localized tightness and general fatigue after intense physical activity.' },
];

const whyChoose = [
  'DHA Licensed Clinic — treatments delivered in compliance with Dubai Health Authority clinical standards',
  'Experienced Physiotherapists — trained in both dry needling and a range of manual therapy techniques',
  'Personalized Treatment Plans — no generic protocols; treatment is based on individual assessment',
  'Evidence-Informed Care — approach draws on current physiotherapy research and clinical best practice',
  'Modern Rehabilitation Equipment — supporting a comprehensive, multi-modal recovery approach',
  'Sports Injury Expertise — regular experience treating athletes, gym-goers, and active professionals',
  'Patient-Centered Care — treatment plans built around your goals, lifestyle, and recovery timeline',
  'Convenient Dubai Location — based in Jumeirah 1, easily accessible for residents across the city',
];

const journey = [
  'Initial Consultation — a detailed discussion of your symptoms, medical history, and treatment goals',
  'Physical Assessment — hands-on evaluation of the affected area, including movement analysis',
  'Diagnosis — identifying the underlying source of pain: trigger points, general tension, injury, or postural strain',
  'Treatment Planning — deciding, based on clinical findings, whether dry needling, massage therapy, or a combined approach is most appropriate',
  'Treatment Delivery — sessions carried out by a qualified physiotherapist in a clean, professional clinical setting',
  'Home Exercise Advice — guidance on stretches, posture, and self-care to support recovery between sessions',
  'Progress Monitoring — ongoing assessment to track improvement and adjust the plan as needed',
  'Follow-Up — regular check-ins to ensure your treatment plan continues to match your progress and goals',
];

const faqs = [
  { q: 'What is Dry Needling?', a: 'Dry needling is a physiotherapy technique that uses thin, sterile needles inserted into trigger points within a muscle to help release tension and reduce pain.' },
  { q: 'Is Dry Needling painful?', a: 'Most patients feel a brief muscle twitch or mild discomfort during insertion, followed by possible soreness for a day or two — similar to post-exercise muscle fatigue.' },
  { q: 'Is Massage Therapy better than Dry Needling?', a: 'When weighing Dry Needling vs Massage Therapy Dubai options, neither is universally better. Massage suits broad relaxation and stress relief, while dry needling is more targeted for specific trigger points. The right choice depends on your diagnosis.' },
  { q: 'Which works faster for pain relief?', a: 'Dry needling can sometimes produce a noticeable localized effect within a single session, while massage therapy often provides more gradual, cumulative relief over multiple sessions.' },
  { q: 'Can Dry Needling and Massage Therapy be combined?', a: 'Yes. Many physiotherapy plans combine both techniques, using dry needling for specific trigger points and massage for broader muscle relaxation and recovery.' },
  { q: 'How many sessions are typically needed?', a: 'This varies by condition and severity. Some patients notice improvement within a few sessions, while chronic conditions may require an ongoing plan over several weeks.' },
  { q: 'Is Dry Needling safe?', a: 'When performed by a trained, licensed physiotherapist using sterile, single-use needles, dry needling is considered a safe procedure. Mild bruising or soreness afterward is normal.' },
  { q: 'Does Massage Therapy help with chronic pain?', a: 'Massage therapy can support chronic pain management by reducing muscle tension, improving circulation, and lowering stress — often as part of a broader treatment plan.' },
  { q: 'Can athletes benefit from these treatments?', a: 'Yes. Both dry needling and massage therapy are commonly used in sports physiotherapy for injury recovery, performance support, and maintenance between training sessions.' },
  { q: 'Does insurance cover Dry Needling or Massage Therapy in Dubai?', a: 'Coverage varies by provider and policy. We recommend checking directly with your insurance provider or our reception team to confirm coverage for your specific plan.' },
  { q: 'What conditions respond best to Dry Needling?', a: 'Conditions involving clear, localized trigger points — such as myofascial pain, certain types of neck and shoulder pain, and specific sports-related tightness — often respond well to dry needling.' },
  { q: 'How long does a typical session last?', a: 'Dry needling sessions are usually 15–30 minutes as part of a physiotherapy visit, while massage therapy sessions typically run 30–60 minutes.' },
  { q: 'Who should avoid Dry Needling?', a: 'Patients with certain conditions such as needle phobia, active infections, bleeding disorders, or who are pregnant should discuss suitability with their physiotherapist before treatment.' },
  { q: 'Can Massage Therapy reduce stress?', a: 'Yes, massage therapy has a well-documented calming effect and is widely used to help lower stress and support relaxation alongside physical recovery.' },
  { q: 'How do I book an appointment at RamaCare Polyclinic?', a: 'You can book a physiotherapy assessment through our website, by phone, or via WhatsApp, and our team will help match you with the right treatment plan.' },
];

const related = [
  { label: 'Dry Needling Dubai', href: '/services/dry-needling-dubai' },
  { label: 'Physiotherapy Dubai', href: '/services/physiotherapy-dubai' },
  { label: 'Sports Injury Rehabilitation Dubai', href: '/services/sports-injury-rehabilitation-dubai' },
  { label: 'Neck Pain Treatment Dubai', href: '/services/neck-pain-treatment-dubai' },
  { label: 'Back Pain Treatment Dubai', href: '/services/back-pain-treatment-dubai' },
  { label: 'Shoulder Pain Treatment Dubai', href: '/services/shoulder-pain-treatment-dubai' },
  { label: 'Tennis Elbow Treatment Dubai', href: '/services/tennis-elbow-treatment-dubai' },
  { label: 'Plantar Fasciitis Treatment Dubai', href: '/services/plantar-fasciitis-treatment-dubai' },
  { label: 'Sciatica Treatment Dubai', href: '/services/sciatica-treatment-dubai' },
  { label: 'Electrotherapy Dubai', href: '/services/electrotherapy-dubai' },
  { label: 'Ultrasound Therapy Dubai', href: '/services/ultrasound-therapy-dubai' },
  { label: 'Contact Us', href: '/contact-us' },
  { label: 'Book Appointment', href: '/book-appointment' },
  { label: 'Home Page', href: '/' },
];
/* ------------------------------------------------------------------
   JSON-LD schema — the @graph structure specified in the brief,
   with the FAQPage expanded to all 15 items (brief sampled 6).
------------------------------------------------------------------- */
function buildSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalClinic',
        '@id': SITE_URL + '/#clinic',
        name: 'RamaCare Polyclinic',
        url: SITE_URL + '/',
        image: SITE_URL + '/images/dry-needling-vs-massage-therapy-dubai.jpg',
        priceRange: '$$',
        address: { '@type': 'PostalAddress', streetAddress: 'Jumeirah 1', addressLocality: 'Dubai', addressCountry: 'AE' },
        medicalSpecialty: 'Physiotherapy',
        hasCredential: 'DHA Licensed',
      },
      {
        '@type': 'MedicalWebPage',
        '@id': SITE_URL + PAGE_PATH + '/#webpage',
        url: SITE_URL + PAGE_PATH,
        name: 'Dry Needling vs Massage Therapy Dubai | Which Is Right?',
        description: 'Comparing Dry Needling vs Massage Therapy Dubai? Learn the key differences, benefits & best uses. Book a physiotherapy assessment at RamaCare today.',
        inLanguage: 'en-AE',
        lastReviewed: '2026-07-15',
        medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
        about: [
          { '@id': SITE_URL + PAGE_PATH + '/#dryneedling' },
          { '@id': SITE_URL + PAGE_PATH + '/#massage' },
        ],
      },
      {
        '@type': 'MedicalTherapy',
        '@id': SITE_URL + PAGE_PATH + '/#dryneedling',
        name: 'Dry Needling',
        alternateName: 'Trigger Point Dry Needling',
        description: 'A physiotherapy technique using fine sterile needles inserted into trigger points to reduce muscle pain and tension.',
        relevantSpecialty: 'Physiotherapy',
      },
      {
        '@type': 'MedicalTherapy',
        '@id': SITE_URL + PAGE_PATH + '/#massage',
        name: 'Massage Therapy',
        description: 'Manual soft tissue therapy involving pressure and manipulation of muscles to relieve tension and support recovery.',
        relevantSpecialty: 'Physiotherapy',
      },
      {
        '@type': 'MedicalCondition',
        name: 'Myofascial Pain Syndrome',
        associatedAnatomy: 'Muscle and fascia',
        possibleTreatment: [
          { '@id': SITE_URL + PAGE_PATH + '/#dryneedling' },
          { '@id': SITE_URL + PAGE_PATH + '/#massage' },
        ],
      },
      {
        '@type': 'MedicalProcedure',
        name: 'Dry Needling Procedure',
        procedureType: 'https://schema.org/PercutaneousProcedure',
        bodyLocation: 'Musculoskeletal system',
        preparation: 'Clinical assessment by a licensed physiotherapist prior to treatment',
      },
      {
        '@type': 'Service',
        serviceType: 'Physiotherapy',
        provider: { '@id': SITE_URL + '/#clinic' },
        areaServed: { '@type': 'City', name: 'Dubai' },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Physiotherapy Services',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'MedicalTherapy', name: 'Dry Needling' } },
            { '@type': 'Offer', itemOffered: { '@type': 'MedicalTherapy', name: 'Massage Therapy' } },
          ],
        },
      },
      {
        '@type': 'Physician',
        name: 'RamaCare Physiotherapy Team',
        medicalSpecialty: 'Physiotherapy',
        worksFor: { '@id': SITE_URL + '/#clinic' },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL + '/' },
          { '@type': 'ListItem', position: 2, name: 'Physiotherapy', item: SITE_URL + '/services/physiotherapy-dubai' },
          { '@type': 'ListItem', position: 3, name: 'Dry Needling vs Massage Therapy Dubai', item: SITE_URL + PAGE_PATH },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    ],
  };
}

/* ------------------------------------------------------------------
   Small building blocks
------------------------------------------------------------------- */
function IconTile({ name, className = 'w-5 h-5 text-[#1F5E4B]' }) {
  const Icon = LucideIcons[name] || LucideIcons.Circle;
  return <Icon className={className} />;
}

function SpectrumBar({ position }) {
  // position: 0 = fully Dry Needling, 100 = fully Massage
  return (
    <div className="relative h-1.5 rounded-full bg-gradient-to-r from-[#1F5E4B] to-[#D9CBAE] overflow-visible">
      <span
        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-white border-2 border-[#1A1A1A] shadow"
        style={{ left: `${position}%` }}
      />
    </div>
  );
}

export default function DryNeedlingVsMassagePage() {
  const { showToast, ToastComponent } = useToast();
  const [openCondition, setOpenCondition] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);
  const router = useRouter();

  const handleWhatsAppClick = (context = 'a physiotherapy assessment') => {
    const message = encodeURIComponent(`Hello RamaCare, I'd like to book ${context} at RamaCare Polyclinic.`);
    window.open(`https://wa.me/971566597878?text=${message}`, '_blank');
  };
  const handleBookAppointment = () => router.push('/book-appointment');

  const schema = buildSchema();

  return (
    <Layout>
      {ToastComponent}
      <Head>
        <title key="title">Dry Needling vs Massage Therapy Dubai | Which Is Right?</title>
        <meta
          name="description"
          content="Comparing Dry Needling vs Massage Therapy Dubai? Learn the key differences, benefits & best uses. Book a physiotherapy assessment at RamaCare today."
          key="description"
        />
        <link rel="canonical" href={SITE_URL + PAGE_PATH} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Dry Needling vs Massage Therapy Dubai | Which Is Right?" />
        <meta
          property="og:description"
          content="Comparing Dry Needling vs Massage Therapy Dubai? Learn the key differences, benefits & best uses. Book a physiotherapy assessment at RamaCare today."
        />
        <meta property="og:url" content={SITE_URL + PAGE_PATH} />
        <meta property="og:image" content={SITE_URL + '/images/dry-needling-vs-massage-therapy-dubai.jpg'} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dry Needling vs Massage Therapy Dubai | Which Is Right?" />
        <meta
          name="twitter:description"
          content="Comparing Dry Needling vs Massage Therapy Dubai? Learn the key differences, benefits & best uses. Book a physiotherapy assessment at RamaCare today."
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </Head>

      {/* ============ HERO — spectrum motif, image right ============ */}
      <section className="max-w-7xl mx-auto px-6 pt-8 pb-4">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-sm font-medium text-[#5F5F5F]">
          <Link href="/" className="hover:text-[#1F5E4B]">Home</Link>
          <span aria-hidden="true">/</span>
          <Link href="/services/physiotherapy-dubai" className="hover:text-[#1F5E4B]">Physiotherapy</Link>
          <span aria-hidden="true">/</span>
          <span className="text-[#1F5E4B]">Dry Needling vs Massage Therapy Dubai</span>
        </nav>
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-semibold text-[#1A1A1A] leading-[1.18] mb-6">
              Dry Needling vs Massage Therapy Dubai
            </h1>
            <p className="text-base text-[#5F5F5F] leading-relaxed mb-4">
              If you&apos;ve been comparing Dry Needling vs Massage Therapy Dubai treatment options, you&apos;re not alone. Both approaches are widely used to manage muscle pain, but they work in very different ways, target different structures, and suit different types of patients.
            </p>
            <p className="text-base text-[#5F5F5F] leading-relaxed mb-8">
              Neither treatment is universally &quot;better&quot; — the right choice depends on your diagnosis, the source of your pain, your activity level, and your treatment goals. This guide breaks down both options side by side.
            </p>

            {/* Spectrum motif */}
            <div className="rounded-xl border border-[#E9E2D6] bg-white p-5 mb-8">
              <div className="flex items-center justify-between text-sm font-semibold uppercase tracking-widest mb-3">
                <span className="text-[#1F5E4B]">Precision · Dry Needling</span>
                <span className="text-[#8a7856]">Pressure · Massage</span>
              </div>
              <SpectrumBar position={30} />
              <p className="text-sm text-[#5F5F5F] mt-3">Every condition sits somewhere on this spectrum — your physiotherapist helps place yours.</p>
            </div>

            <div className="flex flex-wrap gap-3">
              <button onClick={handleBookAppointment} className="inline-flex items-center gap-2 rounded-md bg-[#1F5E4B] px-6 py-3 text-sm font-medium text-white hover:bg-[#17493A] transition-colors">
                <LucideIcons.Calendar className="w-4 h-4" /> Book a Physiotherapy Assessment
              </button>
              <button onClick={() => handleWhatsAppClick()} className="inline-flex items-center gap-2 rounded-md border border-[#1F5E4B] px-6 py-3 text-sm font-medium text-[#1F5E4B] bg-white hover:bg-gray-50 transition-colors">
                <LucideIcons.MessageCircle className="w-4 h-4" /> WhatsApp Us
              </button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="rounded-2xl overflow-hidden">
            <img
              src="/images/dry-needling-vs-massage-therapy-dubai.jpg"
              alt="Physiotherapist comparing dry needling vs massage therapy Dubai treatment for a patient at RamaCare Polyclinic"
              title="dry-needling-vs-massage-therapy-dubai-ramacare"
              className="w-full h-[320px] sm:h-[400px] object-cover"
            />
          </motion.div>
        </div>
        <p className="text-sm text-[#5F5F5F] italic mt-3">
          Comparing Dry Needling vs Massage Therapy Dubai — RamaCare Polyclinic physiotherapy team
        </p>
      </section>

      {/* ============ Understanding muscle pain — glossary grid ============ */}
      <section className="bg-[#F5F1EA] py-16 px-6 mt-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] mb-3">Understanding Muscle Pain: What&apos;s Actually Happening</h2>
          <p className="text-base text-[#5F5F5F] leading-relaxed mb-10 max-w-3xl">
            Before comparing Dry Needling vs Massage Therapy Dubai as treatment options, it helps to understand what&apos;s driving the pain in the first place. Muscle pain rarely appears out of nowhere — it usually develops gradually as a result of one or more of the following:
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {painCauses.map((c) => (
              <div key={c.title} className="bg-white rounded-lg p-5">
                <IconTile name={c.icon} className="w-5 h-5 text-[#1F5E4B] mb-3" />
                <p className="text-base font-semibold text-[#1A1A1A]">{c.title}</p>
                <p className="text-base text-[#5F5F5F] leading-relaxed mt-1">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ What is Dry Needling ============ */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-11 h-11 rounded-full bg-[#F0F7F4] flex items-center justify-center shrink-0">
            <LucideIcons.Crosshair className="w-5 h-5 text-[#1F5E4B]" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A]">What Is Dry Needling?</h2>
        </div>
        <p className="text-base text-[#5F5F5F] leading-relaxed mb-4">
          Dry needling is a technique used by trained physiotherapists to treat trigger points and muscle tightness. It involves inserting thin, sterile, single-use needles directly into or near a trigger point within the muscle. Unlike acupuncture, which is rooted in traditional Chinese medicine and works along energy meridians, dry needling is grounded in Western anatomical and neurophysiological principles — hence the &quot;dry&quot; in the name, referring to the fact that no medication or injection fluid is used.
        </p>
        <p className="text-base font-semibold text-[#1A1A1A] mb-2 mt-6">How It Works</p>
        <p className="text-base text-[#5F5F5F] leading-relaxed mb-6">
          When the needle is inserted into a trigger point, it can trigger a local twitch response — a brief involuntary contraction of the muscle fibre. This response is thought to help disrupt the dysfunctional contraction cycle within the muscle, promoting relaxation, improved blood flow, and reduced pain sensitivity in the area.
        </p>

        <div className="grid sm:grid-cols-2 gap-10 items-start">
          <div>
            <p className="text-base font-semibold text-[#1A1A1A] mb-3">Key Benefits</p>
            <ul className="space-y-2">
              {dryNeedlingBenefits.map((b) => (
                <li key={b} className="flex gap-2.5 text-base text-[#1A1A1A]/85 leading-relaxed">
                  <LucideIcons.Check className="w-4 h-4 text-[#1F5E4B] shrink-0 mt-0.5" /> {b}
                </li>
              ))}
            </ul>
            <div className="mt-6 space-y-3 text-sm text-[#5F5F5F] leading-relaxed">
              <p><span className="font-semibold text-[#1A1A1A]">Who performs it:</span> In a clinical setting, dry needling should only be performed by trained and licensed physiotherapists. At RamaCare, dry needling is delivered exclusively by qualified physiotherapists following a proper clinical assessment.</p>
              <p><span className="font-semibold text-[#1A1A1A]">Evidence base:</span> A growing body of physiotherapy research supports dry needling as part of a broader treatment plan for myofascial pain, particularly combined with exercise-based rehabilitation.</p>
              <p><span className="font-semibold text-[#1A1A1A]">Safety and hygiene:</span> Reputable clinics use single-use, sterile, individually packaged needles for every session. Mild soreness, bruising, or temporary fatigue is common and typically resolves within a day or two.</p>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden">
            <img
              src="/images/dry-needling-trigger-point-shoulder-ramacare.jpg"
              alt="Dry needling trigger point treatment Dubai physiotherapist"
              className="w-full h-[320px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* ============ What is Massage Therapy ============ */}
      <section className="bg-[#F0F7F4] py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center shrink-0">
              <LucideIcons.Hand className="w-5 h-5 text-[#1F5E4B]" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A]">What Is Massage Therapy?</h2>
          </div>
          <p className="text-base text-[#5F5F5F] leading-relaxed mb-8 max-w-3xl">
            As the second half of the Dry Needling vs Massage Therapy Dubai comparison, massage therapy is a manual, hands-on soft tissue technique that uses pressure, kneading, and manipulation of muscles and connective tissue to relieve tension, support circulation, and promote relaxation. It comes in several distinct forms depending on the desired outcome.
          </p>

          <div className="grid sm:grid-cols-3 gap-5 mb-10">
            {massageTypes.map((m) => (
              <div key={m.name} className="bg-white rounded-xl p-5">
                <p className="text-base font-semibold text-[#1A1A1A] mb-2">{m.name}</p>
                <p className="text-sm text-[#5F5F5F] leading-relaxed">{m.text}</p>
              </div>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 gap-10 items-start">
            <div className="rounded-2xl overflow-hidden order-2 sm:order-1">
              <img
                src="/images/deep-tissue-massage-session-ramacare.jpg"
                alt="Deep tissue massage therapy Dubai session at RamaCare"
                className="w-full h-[280px] object-cover"
              />
            </div>
            <div className="order-1 sm:order-2">
              <p className="text-base font-semibold text-[#1A1A1A] mb-3">Key Benefits</p>
              <ul className="space-y-2">
                {massageBenefits.map((b) => (
                  <li key={b} className="flex gap-2.5 text-base text-[#1A1A1A]/85 leading-relaxed">
                    <LucideIcons.Check className="w-4 h-4 text-[#1F5E4B] shrink-0 mt-0.5" /> {b}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-[#5F5F5F] leading-relaxed mt-4">
                Massage therapy tends to have a broader, more generalized effect on the body compared to the highly localized action of dry needling, making it a strong option for patients who want overall muscle relaxation, stress relief, or recovery support alongside physiotherapy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ Comparison table — neutral, icon-prefixed ============ */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] mb-2">Dry Needling vs Massage Therapy Dubai — Side-by-Side Comparison</h2>
        <p className="text-base text-[#5F5F5F] leading-relaxed mb-8">
          The table below summarizes the key differences to help you compare Dry Needling vs Massage Therapy Dubai treatment options at a glance.
        </p>

        <div className="rounded-xl overflow-hidden mb-8">
          <img
            src="/images/dry-needling-vs-massage-comparison-chart.jpg"
            alt="Dry needling vs massage therapy Dubai comparison chart"
            className="w-full h-[200px] object-cover"
          />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-base min-w-[640px]">
            <thead>
              <tr className="border-b-2 border-[#1A1A1A]">
                <th className="text-left px-4 py-3 font-medium text-[#5F5F5F]">Feature</th>
                <th className="text-left px-4 py-3 font-medium text-[#1A1A1A]">
                  <span className="inline-flex items-center gap-1.5"><LucideIcons.Crosshair className="w-4 h-4 text-[#1F5E4B]" /> Dry Needling</span>
                </th>
                <th className="text-left px-4 py-3 font-medium text-[#1A1A1A]">
                  <span className="inline-flex items-center gap-1.5"><LucideIcons.Hand className="w-4 h-4 text-[#8a7856]" /> Massage Therapy</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonTable.map((row) => (
                <tr key={row.feature} className="border-b border-gray-100">
                  <td className="px-4 py-3.5 font-medium text-[#1A1A1A] align-top">{row.feature}</td>
                  <td className="px-4 py-3.5 text-[#5F5F5F] align-top">{row.needling}</td>
                  <td className="px-4 py-3.5 text-[#5F5F5F] align-top">{row.massage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="text-center mt-8">
          <button onClick={handleBookAppointment} className="inline-flex items-center gap-2 rounded-md bg-[#1F5E4B] px-6 py-3 text-sm font-medium text-white hover:bg-[#17493A] transition-colors">
            <LucideIcons.Calendar className="w-4 h-4" /> Book a Physiotherapy Assessment
          </button>
        </div>
      </section>

      {/* ============ Condition-by-condition — accordion ============ */}
      <section className="bg-[#F5F1EA] py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] mb-2">Which Treatment Is Better for Different Conditions?</h2>
          <p className="text-base text-[#5F5F5F] leading-relaxed mb-8">
            There&apos;s no single answer to the Dry Needling vs Massage Therapy Dubai question that applies to every patient. Tap a condition below — though a proper diagnosis from a physiotherapist is always recommended before starting treatment.
          </p>
          <div className="space-y-2">
            {conditions.map((c, i) => {
              const isOpen = openCondition === i;
              return (
                <div key={c.name} className="bg-white rounded-lg overflow-hidden">
                  <button onClick={() => setOpenCondition(isOpen ? null : i)} className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left">
                    <span className="text-base font-semibold text-[#1A1A1A]">{c.name}</span>
                    <LucideIcons.ChevronDown className={`w-4 h-4 text-[#1F5E4B] shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-4">
                      <p className="text-base text-[#5F5F5F] leading-relaxed">{c.text}</p>
                      {c.href && (
                        <a href={c.href} className="inline-flex items-center gap-1 text-sm font-medium text-[#1F5E4B] underline underline-offset-4 mt-2">
                          Learn more <LucideIcons.ArrowRight className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <p className="text-xs text-[#5F5F5F] leading-relaxed mt-6">
            In each case, combined treatment may provide additional benefit compared to either technique alone, but this should always be guided by an assessment rather than self-selected.
          </p>
          <div className="text-center mt-8">
            <button onClick={() => handleWhatsAppClick('a physiotherapy consultation')} className="inline-flex items-center gap-2 rounded-md border border-[#1F5E4B] px-6 py-3 text-sm font-medium text-[#1F5E4B] bg-white hover:bg-gray-50 transition-colors">
              <LucideIcons.MessageCircle className="w-4 h-4" /> Consult Our Physiotherapist
            </button>
          </div>
        </div>
      </section>

      {/* ============ Can they be combined — overlapping circles ============ */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] text-center mb-4">Can Dry Needling and Massage Therapy Be Combined?</h2>
        <p className="text-base text-[#5F5F5F] leading-relaxed text-center max-w-2xl mx-auto mb-12">
          Yes — and for many patients, this is where the real value lies. Rather than viewing Dry Needling vs Massage Therapy Dubai as an either/or decision, it&apos;s often more useful to think of the two as complementary tools within an integrated physiotherapy approach.
        </p>

        <div className="relative h-56 sm:h-64 max-w-lg mx-auto mb-12">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-40 h-40 sm:w-48 sm:h-48 rounded-full bg-[#1F5E4B]/90 flex items-center justify-center text-white text-base font-semibold text-center p-4">
            Dry Needling
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-40 h-40 sm:w-48 sm:h-48 rounded-full bg-[#D9CBAE]/80 flex items-center justify-center text-[#1A1A1A] text-base font-semibold text-center p-4">
            Massage Therapy
          </div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white border-2 border-[#1A1A1A] flex items-center justify-center text-[10px] sm:text-sm font-semibold text-center text-[#1A1A1A] px-2 z-10">
            Combined Plan
          </div>
        </div>

        <p className="text-base text-[#5F5F5F] leading-relaxed text-center max-w-2xl mx-auto mb-10">
          A physiotherapist might use dry needling to address a specific, deep trigger point that&apos;s driving pain, and then follow with massage techniques to relax the surrounding muscle group, improve circulation, and support overall recovery.
        </p>

        <div className="grid sm:grid-cols-3 gap-5">
          {combinedUses.map((u) => (
            <div key={u.title} className="rounded-xl border border-[#E9E2D6] p-5">
              <p className="text-base font-semibold text-[#1A1A1A] mb-1.5">{u.title}</p>
              <p className="text-sm text-[#5F5F5F] leading-relaxed">{u.text}</p>
            </div>
          ))}
        </div>
        <p className="text-base text-[#5F5F5F] leading-relaxed text-center max-w-2xl mx-auto mt-8">
          At RamaCare Polyclinic, treatment planning is always personalized. Where clinically appropriate, our physiotherapy team may recommend a combined approach as part of a broader Physiotherapy Dubai program, rather than defaulting to a single technique for every patient.
        </p>
        <div className="text-center mt-8">
          <button onClick={handleBookAppointment} className="inline-flex items-center gap-2 rounded-md bg-[#1F5E4B] px-6 py-3 text-sm font-medium text-white hover:bg-[#17493A] transition-colors">
            <LucideIcons.Calendar className="w-4 h-4" /> Find the Right Treatment for Your Pain
          </button>
        </div>
      </section>

      {/* ============ Why choose RamaCare ============ */}
      <section className="bg-[#1F5E4B] py-16 px-6 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-2">Why Choose RamaCare Polyclinic?</h2>
          <p className="text-white/75 leading-relaxed mb-8 max-w-3xl">
            RamaCare Polyclinic is a DHA-licensed multi-specialty clinic located in Jumeirah 1, Dubai, offering physiotherapy alongside Ayurveda, dermatology/aesthetics, and dental services.
          </p>
          <div className="grid sm:grid-cols-2 gap-x-10 gap-y-1">
            {whyChoose.map((w) => (
              <div key={w} className="flex gap-2.5 py-2.5 border-b border-white/10">
                <LucideIcons.Check className="w-4 h-4 text-white/70 shrink-0 mt-0.5" />
                <p className="text-base text-white/85 leading-relaxed">{w}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <button onClick={handleBookAppointment} className="inline-flex items-center gap-2 rounded-md bg-white text-[#1F5E4B] px-6 py-3 text-sm font-semibold hover:bg-gray-100 transition-colors">
              <LucideIcons.Calendar className="w-4 h-4" /> Schedule Your Consultation
            </button>
          </div>
        </div>
      </section>

      {/* ============ Treatment journey — horizontal rail ============ */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] mb-8">Your Treatment Journey at RamaCare</h2>

        <div className="rounded-2xl overflow-hidden mb-10">
          <img
            src="/images/physiotherapy-assessment-consultation-ramacare.jpg"
            alt="Physiotherapy assessment Dubai before dry needling treatment"
            className="w-full h-[240px] object-cover"
          />
        </div>

        <div className="overflow-x-auto pb-2">
          <div className="flex gap-0 min-w-[900px]">
            {journey.map((step, i) => {
              const [title, text] = step.split(' — ');
              return (
                <div key={title} className="flex-1 relative pr-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-6 rounded-full bg-[#1F5E4B] text-white text-[11px] font-semibold flex items-center justify-center shrink-0">{i + 1}</span>
                    {i < journey.length - 1 && <span className="flex-1 h-px bg-[#E9E2D6]" />}
                  </div>
                  <p className="text-base font-semibold text-[#1A1A1A]">{title}</p>
                  <p className="text-sm text-[#5F5F5F] leading-relaxed mt-1 max-w-[200px]">{text}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center mt-10">
          <button onClick={handleBookAppointment} className="inline-flex items-center gap-2 rounded-md bg-[#1F5E4B] px-6 py-3 text-sm font-medium text-white hover:bg-[#17493A] transition-colors">
            <LucideIcons.Calendar className="w-4 h-4" /> Book Your Appointment Today
          </button>
        </div>
      </section>

      {/* ============ FAQ — dot-indicator single column ============ */}
      <section className="bg-[#F5F1EA] py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] mb-8">Frequently Asked Questions</h2>
          <div>
            {faqs.map((f, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={f.q} className="border-b border-[#E9E2D6] py-4">
                  <button onClick={() => setOpenFaq(isOpen ? null : i)} className="w-full flex items-center gap-3 text-left">
                    <span className={`w-2 h-2 rounded-full shrink-0 transition-colors ${isOpen ? 'bg-[#1F5E4B]' : 'bg-[#E9E2D6]'}`} />
                    <span className="text-base font-medium text-[#1A1A1A] flex-1">{f.q}</span>
                    <LucideIcons.ChevronDown className={`w-4 h-4 text-[#5F5F5F] shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && <p className="text-base text-[#5F5F5F] leading-relaxed mt-2 pl-5">{f.a}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ Related treatments ============ */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-xl font-semibold text-[#1A1A1A] mb-5">Explore Related Services</h2>
        <div className="flex flex-wrap gap-2.5">
          {related.map((r) => (
            <a key={r.label} href={r.href} className="text-base text-[#1F5E4B] bg-[#F0F7F4] hover:bg-[#1F5E4B] hover:text-white transition-colors px-4 py-2 rounded-full">
              {r.label}
            </a>
          ))}
        </div>
      </section>

      {/* ============ Conclusion + final CTA ============ */}
      <section className="max-w-5xl mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] mb-4">Conclusion</h2>
        <p className="text-base text-[#5F5F5F] leading-relaxed mb-4">
          Choosing between Dry Needling vs Massage Therapy Dubai ultimately comes down to your specific condition, symptoms, and recovery goals. Dry needling offers a targeted approach for well-defined trigger points and myofascial pain, while massage therapy provides broader relaxation, stress relief, and recovery support. For many patients, a combined, personalized approach delivers the most well-rounded results.
        </p>
        <p className="text-base text-[#5F5F5F] leading-relaxed mb-8">
          Rather than guessing which treatment is right for you, the safest and most effective path forward is a proper assessment by a qualified physiotherapist who can evaluate your specific condition and recommend the appropriate technique — or combination of techniques.
        </p>
        <button onClick={() => handleWhatsAppClick('a physiotherapy assessment')} className="inline-flex items-center gap-2 rounded-md bg-[#1F5E4B] px-6 py-3 text-sm font-medium text-white hover:bg-[#17493A] transition-colors">
          <LucideIcons.MessageCircle className="w-4 h-4" /> WhatsApp Now to Book Your Assessment
        </button>
        <p className="text-sm text-[#5F5F5F] leading-relaxed mt-10 text-left">
          <span className="font-medium text-[#1A1A1A]">Medical Disclaimer:</span> The information provided on this page is for educational purposes only and does not constitute medical advice. It is not intended to replace professional medical consultation, diagnosis, or treatment. Treatment recommendations, including the choice between dry needling, massage therapy, or a combined approach, require an individual clinical assessment by a qualified healthcare professional. Treatment outcomes vary from person to person, and no specific results are guaranteed. Please consult a licensed physiotherapist at RamaCare Polyclinic or another qualified provider before beginning any treatment program.
        </p>
      </section>

      {/* Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#E9E2D6] shadow-lg z-40 p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="hidden md:block">
            <p className="text-base font-semibold text-[#1A1A1A]">Not sure which treatment fits?</p>
            <p className="text-sm text-[#5F5F5F]">Book a physiotherapy assessment today</p>
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