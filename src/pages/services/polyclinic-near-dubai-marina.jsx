import React, { useState } from 'react';
import Layout from '../../../components/Layout';
import Head from 'next/head';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { useToast } from '../../../components/Toast';
import { useRouter } from 'next/router';

/* ------------------------------------------------------------------
   Page data — sourced exactly from the Dubai Marina content brief.
   We preserve all SEO titles, canonicals, metadescriptions, and text.
 ------------------------------------------------------------------- */
const SITE_URL = 'https://ramacarepolyclinic.ae';
const PAGE_PATH = '/services/polyclinic-near-dubai-marina';

const whyChoose = [
  { icon: 'ShieldCheck', title: 'DHA Licensed and Regulated', text: "RamaCare Polyclinic operates under a full Dubai Health Authority license, meaning every department, doctor, and treatment protocol meets the regulatory standards set for healthcare providers in Dubai. Patients don't have to take quality on faith — it's independently overseen." },
  { icon: 'Users', title: 'Experienced Multi-Specialty Doctors', text: 'The clinic\'s physicians and specialists bring years of clinical experience across physiotherapy, dentistry, dermatology, general medicine, and Ayurveda. That range matters: a patient dealing with chronic back pain, for instance, might benefit from a physiotherapist\'s assessment alongside an Ayurvedic perspective on inflammation and lifestyle factors — and at RamaCare, both are available without a referral to another building.' },
  { icon: 'UserCheck', title: 'Personalized Treatment Plans', text: 'No two patients respond to treatment the same way. Rather than defaulting to a standard protocol, doctors at RamaCare take time to understand a patient\'s medical history, daily routine, and personal goals before recommending a course of action. A desk-bound marketing professional with neck pain needs a different plan than a personal trainer recovering from a sports injury, even if the diagnosis looks similar on paper.' },
  { icon: 'Microscope', title: 'Modern Medical Facilities', text: 'The clinic is equipped with contemporary diagnostic and treatment tools across departments, from physiotherapy equipment to dermatology devices, supporting accurate assessment and comfortable treatment delivery.' },
  { icon: 'Calendar', title: 'Same-Day Appointments', text: 'Healthcare needs rarely wait for a convenient time. RamaCare prioritizes same-day booking wherever possible, recognizing that early intervention — whether for an acute injury or a skin concern — often leads to better outcomes.' },
  { icon: 'Home', title: 'Family-Friendly Environment', text: 'From pediatric-adjacent general medicine visits to family dental checkups, the clinic is designed so that multiple family members can be seen in one visit, saving time for busy households.' },
  { icon: 'Wallet', title: 'Affordable, Transparent Healthcare', text: 'Costs are discussed upfront, and patients are never left guessing about what a treatment plan will involve before they commit to it.' },
  { icon: 'Navigation', title: 'Convenient Location Near Dubai Marina', text: 'Situated in Jumeirah 1, RamaCare is accessible via Dubai\'s main coastal roads, making it a practical option for residents and professionals based in Dubai Marina, JBR, and the surrounding communities who want quality care without an inconvenient commute across town.' }
];

const departments = [
  {
    key: 'physiotherapy',
    name: 'Physiotherapy',
    text: "RamaCare's physiotherapy department treats a wide range of musculoskeletal conditions, including back pain, neck pain, frozen shoulder, sciatica, sports injuries, and post-surgical rehabilitation. Sessions typically begin with a thorough movement and posture assessment, followed by a treatment approach that may include manual therapy, targeted exercise programs, and modalities suited to the specific injury.\n\nPhysiotherapy benefits anyone dealing with persistent pain, reduced mobility, or recovery needs after an injury or surgery — including desk workers with postural strain, athletes returning from sports injuries, and older adults managing joint stiffness. The goal is always functional improvement, not just temporary symptom relief.",
    cta: 'Book a physiotherapy assessment at RamaCare Polyclinic today.',
    icon: 'Activity'
  },
  {
    key: 'dental',
    name: 'Dental Care',
    text: 'The dental team at RamaCare handles everything from routine checkups and cleanings to tooth pain relief, gum care, and cosmetic concerns. Every visit begins with a proper oral examination so that treatment addresses the actual cause of discomfort rather than just the symptom.\n\nDental care at RamaCare suits anyone overdue for a checkup, dealing with sudden tooth pain, or interested in improving their smile through whitening or other cosmetic options. Treatment plans are explained clearly before any procedure begins, so patients always know what to expect.',
    cta: 'Schedule your dental consultation near Dubai Marina.',
    icon: 'Smile'
  },
  {
    key: 'dermatology',
    name: 'Dermatology & Aesthetic Medicine',
    text: "RamaCare's dermatology services cover both medical skin concerns and aesthetic treatments, including acne, pigmentation, hair loss, and skin rejuvenation options like HydraFacial and skin boosters. Consultations start with a skin assessment to identify underlying causes before recommending a treatment path.\n\nThis department benefits patients dealing with persistent acne, uneven skin tone, thinning hair, or those simply looking to maintain healthier skin as part of a long-term routine. Treatment plans are tailored to skin type and lifestyle rather than applied generically.",
    cta: 'Ask about a personalized skin consultation.',
    icon: 'Sun'
  },
  {
    key: 'general',
    name: 'General Medicine',
    text: "The general medicine department serves as a first point of contact for everyday health concerns — colds, infections, fatigue, digestive issues, and routine health monitoring. Doctors take a whole-person approach, looking beyond the immediate complaint to underlying lifestyle or chronic factors.\n\nGeneral medicine is ideal for anyone who wants a consistent doctor for everyday illnesses, annual checkups, or ongoing management of conditions like high blood pressure. Having a familiar physician who knows your history tends to lead to better long-term outcomes than seeing a different doctor every visit.",
    cta: 'Book a general medicine consultation at RamaCare.',
    icon: 'Stethoscope'
  },
  {
    key: 'ayurveda',
    name: 'Ayurveda',
    text: "RamaCare's Ayurveda practitioners offer traditional treatment approaches for chronic pain, stress, and digestive complaints, and general wellness, often used alongside conventional care rather than as a replacement for it. Consultations assess a patient's constitution and lifestyle before recommending therapies such as Panchakarma or targeted herbal and dietary guidance.\n\nThis service suits patients looking for a complementary approach to chronic conditions, or those interested in preventive wellness rooted in a long-standing traditional system.",
    cta: 'Discuss an integrated Ayurvedic care plan with our team.',
    icon: 'Leaf'
  },
  {
    key: 'preventive',
    name: 'Preventive Health Checkups',
    text: "Preventive checkups at RamaCare are designed to catch potential health issues early, before they become bigger problems. Packages typically cover general health screening, blood work, and consultation with a physician to review results and flag any areas of concern.\n\nThese checkups are valuable for anyone who hasn't had a full health review recently, professionals under regular work stress, or patients with a family history of chronic conditions who want to stay ahead of potential risk factors.",
    cta: 'Book a preventive health checkup near Dubai Marina.',
    icon: 'ClipboardCheck'
  },
  {
    key: 'wellness',
    name: 'Wellness Programs',
    text: "RamaCare's wellness programs combine elements of physiotherapy, nutrition guidance, and lifestyle coaching to support patients working toward long-term health goals, whether that's weight management, stress reduction, or building sustainable exercise habits.\n\nThese programs work well for patients who want structured, ongoing support rather than a single consultation, particularly those managing chronic stress or looking to make lasting lifestyle changes.",
    cta: 'Ask our team about current wellness program options.',
    icon: 'HeartPulse'
  }
];

const conditions = [
  { name: 'Back Pain', text: 'A frequent complaint among desk-based professionals and Dubai Marina residents with active lifestyles. Treatment usually combines physiotherapy assessment with targeted exercises and, where appropriate, manual therapy to address both symptoms and root cause.', category: 'Physiotherapy' },
  { name: 'Neck Pain', text: 'Often linked to poor posture, prolonged screen time, or old injuries. Our physiotherapists assess posture and movement patterns before building a corrective plan.', category: 'Physiotherapy' },
  { name: 'Shoulder Pain', text: 'Can stem from overuse, injury, or joint degeneration. Assessment focuses on range of motion and pinpointing the specific structures involved.', category: 'Physiotherapy' },
  { name: 'Knee Pain', text: 'Common among both athletes and older adults. Treatment ranges from strengthening programs to guidance on activity modification.', category: 'Physiotherapy' },
  { name: 'Frozen Shoulder', text: 'A gradual stiffening of the shoulder joint that benefits from structured physiotherapy to restore mobility over time.', category: 'Physiotherapy' },
  { name: 'Sciatica', text: 'Nerve-related leg and lower back pain that responds well to targeted physiotherapy and posture correction in many cases.', category: 'Physiotherapy' },
  { name: 'Sports Injuries', text: 'From sprains to overuse injuries, our rehabilitation approach focuses on safe, structured return to activity.', category: 'Physiotherapy' },
  { name: 'Arthritis', text: 'Joint pain and stiffness managed through a combination of physiotherapy, lifestyle advice, and, where suitable, Ayurvedic approaches to inflammation.', category: 'General & Ayurveda' },
  { name: 'Acne', text: 'Assessed by our dermatology team to identify triggers, with treatment plans tailored to skin type and severity.', category: 'Dermatology' },
  { name: 'Pigmentation', text: 'Uneven skin tone addressed through dermatological assessment and appropriate topical or in-clinic treatments.', category: 'Dermatology' },
  { name: 'Hair Loss', text: 'Evaluated for underlying causes before recommending options such as PRP or other clinically supported treatments.', category: 'Dermatology' },
  { name: 'Tooth Pain', text: 'Assessed promptly to identify the cause, whether decay, infection, or sensitivity, with same-day relief options where possible.', category: 'Dental' },
  { name: 'Gum Problems', text: 'Early gum issues are addressed through cleaning, guidance, and monitoring to prevent progression.', category: 'Dental' },
  { name: 'Digestive Disorders', text: 'General medicine and Ayurveda consultations both play a role in identifying triggers and building a management plan.', category: 'General & Ayurveda' },
  { name: 'Stress & Anxiety', text: 'Addressed through general medicine consultation, lifestyle guidance, and, for interested patients, complementary Ayurvedic support.', category: 'General & Ayurveda' }
];

const whyChooseReasonList = [
  'Convenient Location & Accessibility — based in Jumeirah 1, reachable via Dubai\'s main coastal roads.',
  'Friendly, Approachable Team — staff take time to explain processes clearly rather than rushing appointments.',
  'Experienced Specialists — doctors across departments bring substantial clinical experience.',
  'Modern Medical Technology — current diagnostic and treatment tools support accurate, efficient care.',
  'Personalized Care — treatment plans reflect individual history, lifestyle, and goals.',
  'Hygiene Standards — strict cleanliness protocols across all treatment areas.',
  'Transparent Communication — costs, timelines, and options discussed openly.',
  'Efficient Scheduling — same-day appointments and manageable wait times.',
  'Follow-Up Support — check-ins to track progress and adjust plans as needed.'
];

const journeySteps = [
  { step: '1', title: 'Appointment Booking', text: 'Book online, by phone, or via WhatsApp for a time that fits your schedule.' },
  { step: '2', title: 'Medical Consultation', text: 'Discuss your symptoms, history, and goals with the relevant specialist.' },
  { step: '3', title: 'Clinical Assessment', text: 'A thorough physical or diagnostic evaluation to understand the underlying issue.' },
  { step: '4', title: 'Diagnosis', text: 'A clear explanation of what\'s causing your symptoms, in plain language.' },
  { step: '5', title: 'Personalized Treatment Plan', text: 'A plan built around your specific condition, lifestyle, and preferences.' },
  { step: '6', title: 'Treatment', text: 'Delivered by experienced clinicians using appropriate modern techniques.' },
  { step: '7', title: 'Follow-Up Care', text: 'Progress reviews and plan adjustments to support lasting results.' }
];

const polyclinicBenefits = [
  'One clinic, multiple specialties — physiotherapy, dental, dermatology, general medicine, and Ayurveda all in a single location.',
  'Better communication between doctors — specialists coordinate on cases spanning multiple departments.',
  'Coordinated treatment — fewer gaps and contradictions between providers\' recommendations.',
  'Faster diagnosis — relevant specialists looped in without long referral delays.',
  'Time-saving — fewer separate trips across the city for different health needs.',
  'Family healthcare — multiple family members seen in a single visit.',
  'Better patient outcomes — coordinated, continuous care catches issues earlier.'
];

const comparisonData = [
  { factor: 'Specialists available', rama: 'Multiple specialties, one location', other: 'Spread across different clinics' },
  { factor: 'Coordinated care', rama: 'Doctors can consult on shared cases', other: 'Rarely coordinated' },
  { factor: 'Referrals', rama: 'Fast, in-house', other: 'Often delayed' },
  { factor: 'Communication', rama: 'Centralized patient history', other: 'Repeated at every new clinic' },
  { factor: 'Convenience', rama: 'One visit for multiple needs', other: 'Multiple trips, multiple bookings' },
  { factor: 'Personalization', rama: 'Plans built around full patient history', other: 'Limited to each provider\'s own records' },
  { factor: 'Family healthcare', rama: 'Multiple members seen together', other: 'Separate bookings needed' }
];

const faqs = [
  { q: 'Is RamaCare Polyclinic close to Dubai Marina?', a: 'Yes, RamaCare Polyclinic is located in Jumeirah 1, a convenient distance from Dubai Marina via the main coastal roads, making it accessible for Marina residents and professionals.' },
  { q: 'Do you offer same-day appointments?', a: 'Yes, same-day appointments are available for most departments, subject to doctor availability.' },
  { q: 'Which specialties are available at RamaCare?', a: 'Physiotherapy, dental care, dermatology and aesthetic medicine, general medicine, and Ayurveda are all offered on-site.' },
  { q: 'Is physiotherapy available at RamaCare?', a: 'Yes, our physiotherapy department treats back pain, neck pain, sports injuries, frozen shoulder, sciatica, and more.' },
  { q: 'Do you provide dental care?', a: 'Yes, from routine checkups and cleanings to tooth pain relief and cosmetic dentistry.' },
  { q: 'Is Ayurveda available at the clinic?', a: 'Yes, our Ayurveda practitioners offer treatments for chronic pain, stress, and digestive concerns, often alongside conventional care.' },
  { q: 'Are walk-ins accepted?', a: 'We recommend booking ahead to guarantee availability, though same-day requests are accommodated whenever possible.' },
  { q: 'Do you offer preventive health checkups?', a: 'Yes, preventive checkup packages are available, including screening and physician review.' },
  { q: 'What insurance plans are accepted?', a: 'Please contact our front desk or check our website for the most current list of accepted insurance providers.' },
  { q: 'Is the clinic DHA licensed?', a: 'Yes, RamaCare Polyclinic operates under a full Dubai Health Authority license.' },
  { q: 'How do I book an appointment?', a: 'You can book via our website, by phone, or through WhatsApp.' },
  { q: 'What are your clinic timings?', a: 'Please check our website or contact us directly for current operating hours.' },
  { q: 'Do you provide family healthcare services?', a: 'Yes, multiple family members can be seen during the same visit across different departments.' },
  { q: 'Is parking available near the clinic?', a: 'Parking options are available near the clinic in Jumeirah 1; our team can provide specific guidance when you book.' },
  { q: 'Do you treat sports injuries?', a: 'Yes, our physiotherapy team manages sports injuries and rehabilitation programs.' },
  { q: 'Can I get a dermatology consultation for acne or pigmentation?', a: 'Yes, our dermatology department assesses and treats both acne and pigmentation concerns.' },
  { q: 'Is hair loss treatment available?', a: 'Yes, hair loss is evaluated by our dermatology team, with treatment options discussed based on the underlying cause.' },
  { q: 'Do you treat digestive issues?', a: 'Yes, both our general medicine and Ayurveda departments address digestive complaints.' },
  { q: 'Can I bring my children for a checkup?', a: 'Yes, general medicine consultations are available for family members of all ages.' },
  { q: 'How experienced are your doctors?', a: 'Our multi-specialty team brings substantial clinical experience across their respective fields, within a DHA-licensed setting.' }
];

const areasServed = ['Dubai Marina', 'Jumeirah Beach Residence (JBR)', 'Bluewaters Island', 'Palm Jumeirah', 'Dubai Harbour', 'Jumeirah 1', 'Jumeirah 2', 'Al Wasl', 'Business Bay', 'Downtown Dubai'];

/* ------------------------------------------------------------------
   JSON-LD schemas
 ------------------------------------------------------------------- */
function buildSchemas() {
  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    name: 'RamaCare Polyclinic',
    url: SITE_URL + '/',
    telephone: '+971566597878',
    priceRange: 'AED',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Jumeirah Terrace Building, Jumeirah 1',
      addressLocality: 'Dubai',
      addressCountry: 'AE'
    },
    medicalSpecialty: ['GeneralPractice', 'Physiotherapy', 'Dermatology', 'Dentistry', 'Ayurveda'],
    areaServed: areasServed.map(a => ({ '@type': 'Place', name: a }))
  };

  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL + '/' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: SITE_URL + '/services' },
      { '@type': 'ListItem', position: 3, name: 'Polyclinic Near Dubai Marina', item: SITE_URL + PAGE_PATH }
    ]
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a
      }
    }))
  };

  return [localBusiness, breadcrumbs, faqSchema];
}

export default function PolyclinicNearDubaiMarinaPage() {
  const { showToast, ToastComponent } = useToast();
  const [activeTab, setActiveTab] = useState('physiotherapy');
  const [openCondition, setOpenCondition] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);
  const [filterCategory, setFilterCategory] = useState('All');
  const router = useRouter();

  const handleWhatsAppClick = (context = 'an appointment') => {
    const message = encodeURIComponent(`Hello RamaCare, I'm near Dubai Marina and would like to book ${context}.`);
    window.open(`https://wa.me/971566597878?text=${message}`, '_blank');
  };

  const handleBookAppointment = () => router.push('/book-appointment');
  const handleCall = () => window.open('tel:+97142862006', '_self');

  const schemas = buildSchemas();

  // Get active tab content
  const activeDept = departments.find(d => d.key === activeTab) || departments[0];

  // Filter conditions
  const filteredConditions = filterCategory === 'All' 
    ? conditions 
    : conditions.filter(c => c.category === filterCategory);

  // Helper for dynamically checking icon rendering namespaces safely
  const renderIcon = (name, className = 'w-6 h-6') => {
    const Icon = LucideIcons[name] || LucideIcons.Circle;
    return <Icon className={className} />;
  };

  return (
    <Layout>
      {ToastComponent}
      <Head>
        <title key="title">Polyclinic Near Dubai Marina | RamaCare Polyclinic</title>
        <meta
          name="description"
          content="Trusted polyclinic near Dubai Marina offering physiotherapy, dental, dermatology, Ayurveda & GP care in Jumeirah 1. Book same-day appointments today."
          key="description"
        />
        <link rel="canonical" href={SITE_URL + PAGE_PATH} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Polyclinic Near Dubai Marina — RamaCare Polyclinic, Jumeirah 1" />
        <meta
          property="og:description"
          content="DHA-licensed multi-specialty polyclinic near Dubai Marina. Physiotherapy, dental, dermatology, general medicine & Ayurveda under one roof."
        />
        <meta property="og:url" content={SITE_URL + PAGE_PATH} />
        <meta name="twitter:card" content="summary_large_image" />
        {schemas.map((s, i) => (
          <script key={`schema-${i}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
        ))}
      </Head>

      <div className="bg-white text-[#1A1A1A] antialiased">
        
        {/* ============ HERO — split dynamic grid ============ */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#F9F7F2] to-white px-4 pb-16 pt-12 sm:pt-20">
          <div className="absolute inset-0 opacity-[0.4] pointer-events-none">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
                  <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#1F5E4B" strokeWidth="0.5" strokeOpacity="0.1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#1F5E4B]/5 blur-3xl pointer-events-none"></div>

          <div className="relative max-w-7xl mx-auto px-6">
            <nav aria-label="Breadcrumb" className="mb-8 flex justify-center lg:justify-start items-center gap-2 text-sm font-medium text-[#5F5F5F]">
              <Link href="/" className="hover:text-[#1F5E4B] transition-colors">Home</Link>
              <span aria-hidden="true" className="text-gray-300">/</span>
              <Link href="/services" className="hover:text-[#1F5E4B] transition-colors">Services</Link>
              <span aria-hidden="true" className="text-gray-300">/</span>
              <span aria-current="page" className="text-[#1F5E4B]">Polyclinic Near Dubai Marina</span>
            </nav>

            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 text-center lg:text-left">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#1F5E4B]/8 px-3 py-1 text-sm font-semibold uppercase tracking-[0.12em] text-[#1F5E4B] mb-5">
                  SEO Landing Page — Publication Ready
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A1A1A] leading-tight mb-6 tracking-tight">
                  Polyclinic Near Dubai Marina <span className="block mt-1 text-[#1F5E4B] font-semibold text-2xl sm:text-3xl">Trusted Multi-Specialty Healthcare at RamaCare Polyclinic</span>
                </h1>
                <div className="space-y-4 text-sm sm:text-base text-[#5F5F5F] leading-relaxed">
                  <p>
                    If you&apos;re searching for a reliable polyclinic near Dubai Marina, RamaCare Polyclinic in Jumeirah 1 offers a convenient alternative to driving across the city for different specialists. Just a short distance from the Marina&apos;s residential towers and business hubs, RamaCare brings together physiotherapy, dental care, dermatology, general medicine, and Ayurveda under a single roof.
                  </p>
                  <p>
                    Many Dubai Marina residents juggle demanding work schedules, family responsibilities, and busy social lives, which makes healthcare that fits into a real routine especially valuable. RamaCare was built around that reality. The clinic is DHA licensed, staffed by experienced multi-specialty doctors, and structured so that patients can move between departments without repeating their history at every stop.
                  </p>
                  <p>
                    Same-day appointments are available for most departments, so a nagging backache, a chipped tooth, or a stubborn breakout doesn&apos;t have to wait for next week&apos;s schedule to clear. Every consultation begins with an honest conversation about symptoms and goals, followed by a treatment plan that&apos;s realistic for the patient&apos;s lifestyle rather than a one-size-fits-all protocol.
                  </p>
                  <p>
                    Families also find the clinic practical. Parents can bring children for routine checkups while booking their own physiotherapy or dermatology visit on the same trip. That kind of coordinated, family-friendly healthcare is harder to find at single-specialty clinics scattered across the city.
                  </p>
                  <p>
                    Whether you live in Dubai Marina, JBR, or nearby Jumeirah, RamaCare Polyclinic aims to be the healthcare partner you turn to for everyday medical needs — not just an occasional stop when something goes wrong.
                  </p>
                </div>

                <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-8">
                  <button onClick={handleBookAppointment} className="inline-flex items-center gap-2 rounded-lg bg-[#1F5E4B] px-8 py-3.5 text-sm font-semibold text-white shadow-lg hover:bg-[#17493B] hover:shadow-xl transition-all hover:-translate-y-0.5 duration-200">
                    <LucideIcons.Calendar className="w-4 h-4" /> Book Appointment
                  </button>
                  <button onClick={() => handleWhatsAppClick()} className="inline-flex items-center gap-2 rounded-lg border border-[#1F5E4B]/30 bg-white px-8 py-3.5 text-sm font-semibold text-[#1F5E4B] hover:bg-[#F9F7F2] transition-colors">
                    <LucideIcons.MessageCircle className="w-4 h-4" /> WhatsApp Us
                  </button>
                </div>
              </div>

              {/* Right Route Map visual */}
              <div className="lg:col-span-5">
                <div className="max-w-xl mx-auto rounded-3xl border border-gray-100 bg-white/90 p-6 shadow-2xl backdrop-blur-sm ring-1 ring-gray-100">
                  <h3 className="text-lg font-bold text-[#1A1A1A] mb-5 text-center lg:text-left">Quick Access Route</h3>
                  <div className="flex items-center justify-between gap-3 mb-6">
                    <div className="text-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#D4A574]/10 text-[#D4A574] mx-auto mb-2">
                        <LucideIcons.MapPin className="w-6 h-6" />
                      </div>
                      <p className="text-sm font-bold text-[#1A1A1A]">Dubai Marina</p>
                    </div>
                    <div className="flex-1 flex items-center gap-1.5 px-2">
                      <span className="flex-1 border-t-2 border-dashed border-[#1F5E4B]/20" />
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1F5E4B]/10 text-[#1F5E4B]">
                        <LucideIcons.Car className="w-4 h-4 shrink-0" />
                      </div>
                      <span className="flex-1 border-t-2 border-dashed border-[#1F5E4B]/20" />
                    </div>
                    <div className="text-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1F5E4B]/10 text-[#1F5E4B] mx-auto mb-2">
                        <LucideIcons.Building2 className="w-6 h-6" />
                      </div>
                      <p className="text-sm font-bold text-[#1A1A1A]">RamaCare</p>
                    </div>
                  </div>
                  <p className="text-sm text-[#5F5F5F] font-medium text-center bg-[#F9F7F2] py-2.5 rounded-lg border border-[#E9E2D6]/40">
                    Accessible via coastal roads (Beach Rd / SZR)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ WHY CHOOSE — GRID CARD MODULES ============ */}
        <section className="bg-[#F9F7F2] py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#1F5E4B]/8 px-3 py-1 text-sm font-semibold uppercase tracking-[0.12em] text-[#1F5E4B] mb-3">
                RamaCare Standards
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1A1A1A]">
                Why Choose RamaCare Polyclinic Near Dubai Marina
              </h2>
              <p className="mt-4 text-sm sm:text-base text-[#5F5F5F] leading-relaxed max-w-3xl">
                Choosing where to get medical care is rarely just about proximity — though for a polyclinic near Dubai Marina, location certainly helps. It&apos;s really about trust, consistency, and whether a clinic treats you as a person rather than a case number. Here&apos;s what sets RamaCare apart.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {whyChoose.map((w) => (
                <div key={w.title} className="group relative rounded-2xl border border-gray-100 bg-gradient-to-tr from-white to-[#F9F7F2]/30 p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1F5E4B]/10 text-[#1F5E4B] group-hover:bg-[#1F5E4B] group-hover:text-white transition-colors duration-300 mb-4">
                    {renderIcon(w.icon, 'w-6 h-6')}
                  </div>
                  <p className="text-base font-bold text-[#1A1A1A]">{w.title}</p>
                  <p className="text-sm text-[#5F5F5F] leading-relaxed mt-2">{w.text}</p>
                </div>
              ))}
            </div>

            <p className="mt-8 text-sm sm:text-base text-[#5F5F5F] leading-relaxed max-w-3xl font-medium border-l-4 border-[#1F5E4B] pl-4">
              Together, these factors are why RamaCare has become a go-to polyclinic near Dubai Marina for people who want dependable, coordinated healthcare rather than a fragmented experience across multiple providers.
            </p>
          </div>
        </section>

        {/* ============ HEALTHCARE SERVICES — INTERACTIVE TABS SYSTEM ============ */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#1F5E4B]/8 px-3 py-1 text-sm font-semibold uppercase tracking-[0.12em] text-[#1F5E4B] mb-3">
                Our Specialties
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1A1A1A]">Healthcare Services Available</h2>
            </div>

            {/* Selector list */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {departments.map((dept) => {
                const isActive = activeTab === dept.key;
                return (
                  <button
                    key={dept.key}
                    onClick={() => setActiveTab(dept.key)}
                    className={`relative px-5 py-3 rounded-xl text-sm font-bold transition-all duration-200 flex items-center gap-2 border ${
                      isActive
                        ? 'bg-[#1F5E4B] text-white border-[#1F5E4B] shadow-md'
                        : 'bg-[#F9F7F2] text-[#5F5F5F] border-gray-200/80 hover:bg-gray-100'
                    }`}
                  >
                    {renderIcon(dept.icon, 'w-4 h-4')}
                    {dept.name}
                    {isActive && (
                      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#1F5E4B] rotate-45" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Swap Panel */}
            <div className="bg-[#F9F7F2] rounded-3xl p-6 sm:p-10 border border-gray-200/40 min-h-[300px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1F5E4B]/10 text-[#1F5E4B]">
                          {renderIcon(activeDept.icon, 'w-5 h-5')}
                        </div>
                        <h3 className="text-xl sm:text-2xl font-extrabold text-[#1A1A1A]">{activeDept.name}</h3>
                      </div>
                      <div className="text-sm sm:text-base text-[#5F5F5F] leading-relaxed space-y-4 whitespace-pre-line">
                        {activeDept.text}
                      </div>
                    </div>
                    <div className="w-full lg:w-auto shrink-0 bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                      <p className="text-sm font-semibold text-[#1A1A1A] mb-4">Need prompt specialist care?</p>
                      <button
                        onClick={() => handleWhatsAppClick(activeDept.name.toLowerCase())}
                        className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#1F5E4B] px-6 py-3.5 text-sm font-bold text-white shadow hover:bg-[#17493B] transition-colors"
                      >
                        {activeDept.cta}
                      </button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* ============ CONDITIONS WE TREAT — FILTER GRID ============ */}
        <section className="bg-[#F9F7F2] py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#1F5E4B]/8 px-3 py-1 text-sm font-semibold uppercase tracking-[0.12em] text-[#1F5E4B] mb-3">
                  Clinical Scope
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1A1A1A]">Conditions We Commonly Treat</h2>
              </div>

              {/* Filters */}
              <div className="flex flex-wrap gap-2">
                {['All', 'Physiotherapy', 'Dermatology', 'Dental', 'General & Ayurveda'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setFilterCategory(cat)}
                    className={`px-4 py-2 rounded-lg text-sm font-bold transition-all border ${
                      filterCategory === cat
                        ? 'bg-[#D4A574] text-white border-[#D4A574]'
                        : 'bg-white text-[#5F5F5F] border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <AnimatePresence>
                {filteredConditions.map((c) => {
                  const isOpen = openCondition === c.name;
                  return (
                    <motion.div
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      key={c.name}
                      className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
                    >
                      <button
                        onClick={() => setOpenCondition(isOpen ? null : c.name)}
                        className="w-full flex items-center justify-between gap-4 p-5 text-left focus:outline-none"
                      >
                        <span className="text-sm sm:text-base font-extrabold text-[#1A1A1A]">{c.name}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold uppercase tracking-wider text-[#1F5E4B] bg-[#1F5E4B]/5 px-2.5 py-1 rounded-md">
                            {c.category}
                          </span>
                          <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#1F5E4B]/10 text-[#1F5E4B]">
                            {isOpen ? <LucideIcons.Minus className="w-3.5 h-3.5" /> : <LucideIcons.Plus className="w-3.5 h-3.5" />}
                          </div>
                        </div>
                      </button>
                      {isOpen && (
                        <div className="px-5 pb-5 pt-1 border-t border-gray-50 text-sm text-[#5F5F5F] leading-relaxed">
                          {c.text}
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* ============ WHY DUBAI MARINA RESIDENTS CHOOSE US ============ */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#1F5E4B]/8 px-3 py-1 text-sm font-semibold uppercase tracking-[0.12em] text-[#1F5E4B] mb-3">
                Patient Confidence
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1A1A1A]">Why Dubai Marina Residents Choose RamaCare</h2>
              <p className="mt-4 text-[#5F5F5F] text-sm sm:text-base leading-relaxed">
                Dubai Marina is home to a dense mix of residents, working professionals, and visitors — all with different schedules and healthcare priorities. RamaCare has structured its services around that reality.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {whyChooseReasonList.map((reason) => (
                <div key={reason} className="flex items-start gap-3 bg-[#F9F7F2] rounded-2xl border border-gray-200/40 p-4">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1F5E4B] text-white mt-0.5 text-xs font-bold">
                    ✓
                  </div>
                  <span className="text-sm sm:text-base text-[#1A1A1A] font-semibold leading-relaxed">{reason}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ TREATMENT PROCESS — JOURNEY MAP ============ */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#1F5E4B] via-[#103D30] to-[#0A241C] py-20 px-6 text-white">
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
          <div className="relative max-w-6xl mx-auto">
            <div className="border-b border-white/10 pb-6 mb-12">
              <span className="text-sm font-bold uppercase tracking-[0.14em] text-[#D4A574]">Our Workflow</span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl text-white">Our Treatment Process</h2>
            </div>
            <div className="relative">
              <div className="hidden lg:block absolute top-5 left-0 right-0 h-px bg-white/20" />
              <div className="grid sm:grid-cols-2 lg:grid-cols-7 gap-6">
                {journeySteps.map((s, i) => (
                  <motion.div
                    key={s.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="relative bg-white/5 rounded-2xl p-5 border border-white/10 backdrop-blur-sm"
                  >
                    <span className="relative z-10 w-9 h-9 rounded-full bg-white text-[#1F5E4B] text-sm font-bold flex items-center justify-center mb-3 shadow-md">{s.step}</span>
                    <p className="text-sm sm:text-base font-bold text-white">{s.title}</p>
                    <p className="text-sm text-white/70 leading-relaxed mt-2">{s.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============ COMPARISON & BENEFITS ============ */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#1F5E4B]/8 px-3 py-1 text-sm font-semibold uppercase tracking-[0.12em] text-[#1F5E4B] mb-3">
                Integrated Care
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1A1A1A] mb-6">Benefits of Choosing a Multi-Specialty Polyclinic</h2>
              <p className="text-sm sm:text-base text-[#5F5F5F] leading-relaxed mb-8">
                Choosing a polyclinic near Dubai Marina rather than juggling several standalone clinics offers real practical advantages:
              </p>
              <ul className="space-y-4">
                {polyclinicBenefits.map((b) => (
                  <li key={b} className="flex gap-3 text-sm sm:text-base text-[#1A1A1A] font-semibold leading-relaxed bg-[#F9F7F2] p-4 rounded-2xl border border-gray-100">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1F5E4B]/10 text-[#1F5E4B] mt-0.5">
                      ✓
                    </div>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#1F5E4B]/8 px-3 py-1 text-sm font-semibold uppercase tracking-[0.12em] text-[#1F5E4B] mb-3">
                Comparative View
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1A1A1A] mb-6">RamaCare vs. Visiting Multiple Clinics</h2>
              <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gradient-to-r from-[#0F3B2E] to-[#1F5E4B] text-white">
                      <th className="text-left px-5 py-4 font-bold text-white text-sm">Factor</th>
                      <th className="text-left px-5 py-4 font-bold text-white text-sm bg-white/10">RamaCare Polyclinic</th>
                      <th className="text-left px-5 py-4 font-bold text-white/80 text-sm">Multiple Separate Clinics</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((row, i) => (
                      <tr key={row.factor} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F9F7F2]/50'}>
                        <td className="px-5 py-4 border-b border-gray-100 font-extrabold text-[#1A1A1A] text-sm">{row.factor}</td>
                        <td className="px-5 py-4 border-b border-gray-100 text-[#1F5E4B] text-sm font-bold bg-[#1F5E4B]/5">
                          ✓ {row.rama}
                        </td>
                        <td className="px-5 py-4 border-b border-gray-100 text-[#5F5F5F] text-sm">
                          {row.other}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* ============ PATIENT EXPERIENCE & ETHICAL COMMITMENT ============ */}
        <section className="py-20 px-6 bg-[#F9F7F2]">
          <div className="max-w-5xl mx-auto space-y-16">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#1F5E4B]/8 px-3 py-1 text-sm font-semibold uppercase tracking-[0.12em] text-[#1F5E4B] mb-3">
                Our Environment
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1A1A1A] mb-6">Patient Experience at RamaCare</h2>
              <p className="text-sm sm:text-base text-[#5F5F5F] leading-relaxed">
                From the moment you walk in, the goal is a calm, comfortable experience. The reception area is designed for ease rather than clinical sterility, with a friendly team ready to guide you through check-in. Consultation rooms are modern and private, giving doctors and patients space for an unhurried conversation about symptoms and options. Treatment areas are kept to strict cleanliness standards, and every department follows clear protocols for patient safety. After treatment, our team follows up to check on progress, answer questions, and adjust care plans as needed — because good healthcare doesn&apos;t end when you walk out the door.
              </p>
            </div>

            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#1F5E4B]/8 px-3 py-1 text-sm font-semibold uppercase tracking-[0.12em] text-[#1F5E4B] mb-3">
                Clinical Integrity
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1A1A1A] mb-4">Our Commitment to Ethical, Evidence-Based Care</h2>
              <p className="text-sm sm:text-base text-[#5F5F5F] leading-relaxed">
                RamaCare Polyclinic is built on a foundation of DHA-licensed practice, experienced specialists, and evidence-based treatment approaches. We believe in ethical medical practice, transparent patient education, and personalized care that respects each patient&apos;s individual circumstances.
              </p>
            </div>
          </div>
        </section>

        {/* ============ NEIGHBORING AREAS SERVED ============ */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#1F5E4B]/8 px-3 py-1 text-sm font-semibold uppercase tracking-[0.12em] text-[#1F5E4B] mb-3">
              Locations Served
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1A1A1A] mb-6">Nearby Areas We Serve</h2>
            <p className="text-sm sm:text-base text-[#5F5F5F] leading-relaxed max-w-3xl mx-auto">
              RamaCare Polyclinic welcomes patients from Dubai Marina, Jumeirah Beach Residence (JBR), Bluewaters Island, Palm Jumeirah, Dubai Harbour, Jumeirah 1, Jumeirah 2, Al Wasl, Business Bay, and Downtown Dubai. Wherever you&apos;re based across these communities, our Jumeirah 1 location offers a practical, centrally accessible option for multi-specialty healthcare.
            </p>
          </div>
        </section>

        {/* ============ FAQS ============ */}
        <section className="py-20 px-6 bg-[#F9F7F2]">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#1F5E4B]/8 px-3 py-1 text-sm font-semibold uppercase tracking-[0.12em] text-[#1F5E4B] mb-3">
                FAQs
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1A1A1A]">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-4">
              {faqs.map((f, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={f.q} className="rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm">
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between gap-4 p-5 text-left focus:outline-none"
                    >
                      <span className="text-sm sm:text-base font-extrabold text-[#1A1A1A] flex-1">{f.q}</span>
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#1F5E4B]/10 text-[#1F5E4B]">
                        {isOpen ? (
                          <LucideIcons.Minus className="w-4 h-4 shrink-0" />
                        ) : (
                          <LucideIcons.Plus className="w-4 h-4 shrink-0" />
                        )}
                      </div>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.18 }}>
                          <p className="text-sm sm:text-base text-[#5F5F5F] leading-relaxed px-5 pb-5 pt-1 border-t border-gray-50 bg-[#F9F7F2]/10">{f.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============ FINAL CTA ============ */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#1F5E4B]/8 px-3 py-1 text-sm font-semibold uppercase tracking-[0.12em] text-[#1F5E4B] mb-3">
              Scheduling
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1A1A1A] mb-4">Book Your Appointment Today</h2>
            <p className="text-sm sm:text-base text-[#5F5F5F] leading-relaxed mb-10 max-w-2xl mx-auto">
              If you&apos;ve been searching for a dependable polyclinic near Dubai Marina, RamaCare Polyclinic in Jumeirah 1 is ready to help — with multi-specialty care, experienced doctors, and same-day appointments designed around your schedule.
            </p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto">
              <button onClick={handleBookAppointment} className="flex flex-col items-center gap-3 rounded-2xl bg-[#F9F7F2] border border-gray-200/60 px-4 py-6 shadow-sm hover:border-[#1F5E4B] hover:shadow-md transition-all duration-200">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1F5E4B]/10 text-[#1F5E4B]">
                  <LucideIcons.Calendar className="w-5 h-5" />
                </div>
                <span className="text-sm font-bold text-[#1A1A1A]">Book Online</span>
              </button>
              <button onClick={() => handleWhatsAppClick()} className="flex flex-col items-center gap-3 rounded-2xl bg-[#F9F7F2] border border-gray-200/60 px-4 py-6 shadow-sm hover:border-[#1F5E4B] hover:shadow-md transition-all duration-200">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#25D366]/10 text-[#25D366]">
                  <LucideIcons.MessageCircle className="w-5 h-5" />
                </div>
                <span className="text-sm font-bold text-[#1A1A1A]">WhatsApp</span>
              </button>
              <button onClick={handleCall} className="flex flex-col items-center gap-3 rounded-2xl bg-[#F9F7F2] border border-gray-200/60 px-4 py-6 shadow-sm hover:border-[#1F5E4B] hover:shadow-md transition-all duration-200">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1F5E4B]/10 text-[#1F5E4B]">
                  <LucideIcons.Phone className="w-5 h-5" />
                </div>
                <span className="text-sm font-bold text-[#1A1A1A]">Call Clinic</span>
              </button>
              <Link href="/contact-us" className="flex flex-col items-center gap-3 rounded-2xl bg-[#F9F7F2] border border-gray-200/60 px-4 py-6 shadow-sm hover:border-[#1F5E4B] hover:shadow-md transition-all duration-200">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D4A574]/10 text-[#D4A574]">
                  <LucideIcons.MapPin className="w-5 h-5" />
                </div>
                <span className="text-sm font-bold text-[#1A1A1A]">Visit Us</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ============ DISCLAIMER ============ */}
        <section className="max-w-4xl mx-auto px-6 py-12 border-t border-gray-200/40">
          <p className="text-sm text-[#5F5F5F] leading-relaxed">
            <span className="font-bold text-[#1A1A1A]">Medical Disclaimer:</span> The information provided on this page is intended for general educational purposes only and does not constitute medical advice. It is not a substitute for professional diagnosis or treatment. Please consult a qualified physician at RamaCare Polyclinic or another licensed healthcare provider for advice specific to your medical condition. In case of a medical emergency, contact your local emergency services immediately.
          </p>
        </section>

        {/* Sticky Bottom Bar */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200/50 shadow-xl z-40 p-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
            <div className="hidden md:block">
              <p className="text-sm font-bold text-[#1A1A1A]">Polyclinic Near Dubai Marina</p>
              <p className="text-sm font-medium text-[#5F5F5F]">Trusted Multi-Specialty Healthcare</p>
            </div>
            <button
              onClick={handleBookAppointment}
              className="flex items-center gap-2 bg-[#1F5E4B] text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all font-semibold whitespace-nowrap hover:-translate-y-0.5 duration-150"
            >
              <LucideIcons.Calendar className="w-5 h-5" />
              Book Appointment
            </button>
          </div>
        </div>

        {/* WhatsApp Floating Button */}
        <button
          onClick={() => handleWhatsAppClick()}
          className="fixed bottom-24 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg hover:shadow-xl transition-shadow hover:scale-105 duration-200"
        >
          <LucideIcons.MessageCircle className="w-8 h-8 text-white" />
        </button>

      </div>
    </Layout>
  );
}
