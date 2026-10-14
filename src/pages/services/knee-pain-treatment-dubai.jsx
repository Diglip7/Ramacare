import { useState } from 'react';
import Layout from '../../../components/Layout';
import Head from 'next/head';
import Link from 'next/link';
import { MessageCircle, Calendar, AlertCircle, CheckCircle, Activity, Stethoscope, ScanLine, Leaf, ChevronDown, ChevronUp } from 'lucide-react';
import ContentReviewBadge from '../../../components/ContentReviewBadge';
import DoctorsSection from '../../../components/DoctorsSection';
import BookConsultation from '../../../components/BookConsultation';
import { DOCTORS } from '../../data/doctors';

const SITE = 'https://ramacarepolyclinic.ae';
const CANONICAL_URL = `${SITE}/services/knee-pain-treatment-dubai/`;
const JEENA_ID = `${SITE}/doctors/jeena-mathew-physiotherapist-dubai/#person`;
const PAGE_TITLE = 'Knee Pain Treatment in Jumeirah 1, Dubai | RamaCare';
const PAGE_DESCRIPTION = 'Knee pain and knee arthritis physiotherapy in Jumeirah 1, Dubai, with X-ray and ultrasound scan on site, shockwave and GP care. AED 200. Open till 10pm.';
const WHATSAPP = 'https://wa.me/971566597878?text=Hi%20RamaCare%2C%20I%20would%20like%20to%20book%20a%20knee%20pain%20assessment.';

const conditions = [
  { name: 'Knee osteoarthritis', text: 'Gradual wear of the knee cartilage, causing pain on stairs, stiffness after rest and sometimes swelling. The most common cause of knee pain after 40.' },
  { name: 'ACL and ligament injuries', text: 'Sprains or tears of the knee ligaments (ACL, MCL, PCL), usually from twisting or a sports injury. Rehab rebuilds stability, with or without surgery.' },
  { name: 'Meniscus tears', text: 'Damage to the knee cartilage cushions, with pain on twisting, catching or locking. Many settle with targeted rehab.' },
  { name: 'Runner’s knee (patellofemoral pain)', text: 'Pain around or behind the kneecap with running, squatting, stairs or sitting for long.' },
  { name: 'Patellar tendinopathy (jumper’s knee)', text: 'Pain just below the kneecap from jumping and running sports. Persistent cases may respond to shockwave with loading exercise.' },
  { name: 'IT band and outer knee pain', text: 'Pain on the outside of the knee in runners and cyclists, linked to training load and hip control.' },
  { name: 'Baker’s cyst and knee swelling', text: 'Fluid behind the knee, often linked to arthritis or a meniscus problem. An ultrasound scan can confirm it.' },
  { name: 'Knee pain in children and teens', text: 'Growth-related pain below the kneecap (Osgood-Schlatter) and sports overuse are common in active children.' }
];

const redFlags = [
  'A hot, red, swollen knee with fever (possible infection): seek care the same day',
  'You cannot put weight on the leg after an injury',
  'Rapid swelling with a pop at the time of injury',
  'The knee locks and will not straighten',
  'Calf pain and swelling, especially after surgery or a long flight (possible blood clot)',
  'The knee looks deformed after a fall'
];

const assessment = [
  { icon: Activity, title: 'Physiotherapy assessment (AED 200)', text: 'History, movement, strength, ligament and meniscus tests, and how your knee copes with walking, stairs and squatting. Includes a gait analysis.' },
  { icon: ScanLine, title: 'X-ray and ultrasound scan in the clinic', text: 'X-ray shows arthritis and bone problems. An ultrasound scan can check swelling, tendons and a Baker’s cyst. Both are done at RamaCare when needed; MRI is arranged by referral.' },
  { icon: Stethoscope, title: 'GP review', text: 'Our GP can suggest or prescribe medication where appropriate, arrange blood tests for gout or inflammatory causes, and refer you to an orthopaedic specialist if needed.' }
];

const treatments = [
  'Strengthening exercises for the thigh, hip and calf muscles',
  'Manual therapy and joint mobilisation for stiffness',
  'Shockwave therapy for persistent tendon pain such as jumper’s knee',
  'Kinesio taping to support the kneecap and knee during activity',
  'Dry needling for tight thigh and calf muscles',
  'Deep tissue massage by our DHA-licensed physiotherapist, as part of your plan',
  'Electrotherapy (TENS) and therapeutic ultrasound alongside exercise',
  'Gait and running retraining based on your gait analysis',
  'Balance and control training after ligament and meniscus injuries',
  'Weight and activity advice, with our GP’s weight management programme if needed',
  'A home exercise programme to keep progress going'
];

const exercises = [
  { name: 'Quad sets', text: 'Sitting with the leg straight, tighten the thigh to press the back of the knee down. Hold 5 seconds, 10 times.' },
  { name: 'Straight leg raise', text: 'Lying down, keep one knee straight and lift the leg to the height of the other bent knee. 10 times.' },
  { name: 'Sit to stand', text: 'Stand up from a chair without using your hands, then sit down slowly. Start with 5 to 10.' },
  { name: 'Bridges', text: 'Lying on your back with knees bent, lift your hips. Strengthens the hips, which support the knee.' },
  { name: 'Step-ups', text: 'Step up onto a low step and down slowly, keeping the knee in line with your toes.' },
  { name: 'Calf raises', text: 'Rise onto your toes and lower slowly, holding a support for balance.' }
];

const faqs = [
  { question: 'Where can I get knee pain treatment in Jumeirah 1?', answer: 'RamaCare Polyclinic treats knee pain on the ground floor of Jumeirah Terrace Building, 12 Al Dhiyafah Road, Jumeirah 1, Dubai, near Al Satwa. The clinic is step-free and open every day from 10am to 10pm. Call 04 286 2006 or WhatsApp 056 659 7878.' },
  { question: 'How much does a knee pain assessment cost?', answer: 'A physiotherapy assessment at RamaCare costs AED 200, including a gait analysis. Insurance is by reimbursement: we check your coverage and give you the documents to claim.' },
  { question: 'What causes knee pain?', answer: 'The most common causes are knee osteoarthritis, ligament and meniscus injuries, runner’s knee, tendon problems and overuse. Extra body weight and weak thigh and hip muscles add load to the knee.' },
  { question: 'Can physiotherapy help knee pain?', answer: 'Yes. Exercise-based physiotherapy is a first-line treatment for most knee pain, including knee osteoarthritis. It strengthens the muscles that support the knee, improves movement and reduces pain for many people.' },
  { question: 'What is the best treatment for knee arthritis?', answer: 'For most people, regular strengthening exercise, staying active and, if needed, losing weight are the most effective first treatments for knee osteoarthritis. Medication can help with pain, and injections or surgery are considered for some advanced cases.' },
  { question: 'Do I need an X-ray or scan for knee pain?', answer: 'Not always. Many knee problems are diagnosed by examination. RamaCare can do an X-ray and an ultrasound scan in the clinic when needed, and arranges an MRI by referral if a ligament or meniscus tear needs confirming.' },
  { question: 'Can a meniscus tear heal without surgery?', answer: 'Many meniscus tears, especially wear-related ones, improve with physiotherapy and do not need surgery. A knee that keeps locking may need a surgeon’s opinion, and we refer you if so.' },
  { question: 'Can I treat an ACL injury without surgery?', answer: 'Some people, especially those who do not play pivoting sports, manage well with structured rehab. Others need reconstruction. We assess your knee, refer you for a surgical opinion if needed, and provide rehab before and after surgery.' },
  { question: 'Is shockwave therapy good for knee pain?', answer: 'Shockwave may help persistent tendon pain around the knee, such as patellar tendinopathy (jumper’s knee). It is not a treatment for arthritis itself and is used with exercise.' },
  { question: 'Do you offer PRP, hyaluronic acid injections or cryoablation for the knee?', answer: 'No. RamaCare does not give knee injections or perform procedures. If you may benefit from them, our GP or physiotherapist can refer you to a specialist.' },
  { question: 'Do you supply knee braces?', answer: 'No. RamaCare does not supply knee braces. Your physiotherapist can advise whether a brace would help and what type to look for.' },
  { question: 'Can Ayurveda help knee pain?', answer: 'Some patients combine physiotherapy with Ayurvedic therapies such as Janu Basti (warm medicated oil held over the knee) or Kizhi, offered by our Ayurveda doctor in the same clinic.' },
  { question: 'Does losing weight help knee pain?', answer: 'Yes. Every kilogram lost reduces the load through the knees with each step. Our GP runs a weight management programme if you need support.' },
  { question: 'Is walking good for knee pain?', answer: 'Usually yes. Regular walking keeps the knee moving and the muscles strong. If walking makes pain much worse, your physiotherapist will adjust the distance and pace.' },
  { question: 'What exercises help knee pain?', answer: 'Quad sets, straight leg raises, sit-to-stands, bridges, step-ups and calf raises. Start gently and stop any exercise that sharply increases pain.' },
  { question: 'How long does knee pain take to get better?', answer: 'Mild strains often improve in 2 to 6 weeks. Knee osteoarthritis and tendon problems usually need 6 to 12 weeks of regular exercise. Ligament injuries and surgery take longer.' },
  { question: 'When is knee pain an emergency?', answer: 'Seek care the same day for a hot, red, swollen knee with fever, a knee you cannot put weight on after an injury, a locked knee, or calf pain and swelling.' },
  { question: 'Do you treat knee pain in children?', answer: 'Yes. Children and teenagers can be assessed for growth-related knee pain such as Osgood-Schlatter and sports overuse, with exercise adapted to their age.' },
  { question: 'Do you treat knee pain after surgery?', answer: 'Yes. We provide rehab after knee replacement, ACL reconstruction and meniscus surgery done at any hospital, following your surgeon’s protocol.' },
  { question: 'Do you offer home visits?', answer: 'No. Treatment is at our step-free, ground-floor clinic in Jumeirah 1, with parking nearby.' },
  { question: 'Does insurance cover knee physiotherapy?', answer: 'Usually, within your plan’s session limit and with a referral. RamaCare works on reimbursement: we check your coverage, request prior approval if needed and provide the invoice, medical report and progress notes.' }
];

const schemaGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      '@id': `${CANONICAL_URL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
        { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE}/services/` },
        { '@type': 'ListItem', position: 3, name: 'Physiotherapy', item: `${SITE}/services/physiotherapy-dubai/` },
        { '@type': 'ListItem', position: 4, name: 'Knee Pain Treatment', item: CANONICAL_URL }
      ]
    },
    {
      '@type': 'MedicalWebPage',
      '@id': `${CANONICAL_URL}#webpage`,
      url: CANONICAL_URL,
      name: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      inLanguage: 'en',
      isPartOf: { '@id': `${SITE}/#website` },
      breadcrumb: { '@id': `${CANONICAL_URL}#breadcrumb` },
      medicalAudience: { '@type': 'Patient' },
      specialty: 'https://schema.org/Physiotherapy',
      about: { '@id': `${CANONICAL_URL}#condition` },
      reviewedBy: { '@id': JEENA_ID },
      lastReviewed: '2026-10-15', // change to the deploy date
      publisher: { '@id': `${SITE}/#clinic` }
    },
    {
      '@type': 'MedicalCondition',
      '@id': `${CANONICAL_URL}#condition`,
      name: 'Knee pain',
      alternateName: ['Knee osteoarthritis', 'Chronic knee pain', 'Runner’s knee', 'Patellar tendinopathy', 'Meniscus tear', 'Knee ligament injury'],
      associatedAnatomy: { '@type': 'AnatomicalStructure', name: 'Knee joint' },
      possibleTreatment: [
        { '@type': 'PhysicalTherapy', name: 'Exercise-based knee physiotherapy', url: `${SITE}/services/physiotherapy-dubai/` },
        { '@type': 'PhysicalTherapy', name: 'Shockwave therapy' },
        { '@type': 'PhysicalTherapy', name: 'Manual therapy' },
        { '@type': 'PhysicalTherapy', name: 'Dry needling', url: `${SITE}/services/dry-needling-dubai/` },
        { '@type': 'PhysicalTherapy', name: 'Kinesio taping' }
      ]
    },
    {
      '@type': 'Person',
      '@id': JEENA_ID,
      name: 'Jeena Mathew',
      jobTitle: 'DHA-Licensed Physiotherapist',
      url: `${SITE}/doctors/jeena-mathew-physiotherapist-dubai/`,
      worksFor: { '@id': `${SITE}/#clinic` }
    },
    {
      '@type': 'FAQPage',
      '@id': `${CANONICAL_URL}#faq`,
      mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } }))
    }
  ]
};

export default function KneePainTreatmentPage() {
  const [openFaq, setOpenFaq] = useState(0);
  const careTeam = [
    DOCTORS['jeena-mathew-physiotherapist-dubai'],
    DOCTORS['dr-sahar-zomorrodi-general-practitioner-dubai'],
    DOCTORS['dr-shamna-keloth-meethal-ayurveda-doctor-dubai']
  ].filter(Boolean);

  return (
    <Layout>
      <Head>
        <title key="title">{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_DESCRIPTION} key="description" />
        <meta name="robots" content="index, follow" key="robots" />
        <link rel="canonical" href={CANONICAL_URL} key="canonical" />
        <meta property="og:type" content="website" key="og:type" />
        <meta property="og:title" content={PAGE_TITLE} key="og:title" />
        <meta property="og:description" content={PAGE_DESCRIPTION} key="og:description" />
        <meta property="og:url" content={CANONICAL_URL} key="og:url" />
        <meta property="og:image" content={`${SITE}/images/knee-pain.jpg`} key="og:image" />
        <meta property="og:image:alt" content="Knee pain treatment in Jumeirah 1, Dubai - RamaCare Polyclinic" key="og:image:alt" />
        <meta property="og:site_name" content="RamaCare Polyclinic" key="og:site_name" />
        <meta property="og:locale" content="en_AE" key="og:locale" />
        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content={PAGE_TITLE} key="twitter:title" />
        <meta name="twitter:description" content={PAGE_DESCRIPTION} key="twitter:description" />
        <meta name="twitter:image" content={`${SITE}/images/knee-pain.jpg`} key="twitter:image" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }} />
      </Head>

      {/* Hero */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm font-medium text-[#5F5F5F] flex-wrap">
            <Link href="/" className="hover:text-[#1F5E4B]">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/services/" className="hover:text-[#1F5E4B]">Services</Link>
            <span aria-hidden="true">/</span>
            <Link href="/services/physiotherapy-dubai/" className="hover:text-[#1F5E4B]">Physiotherapy</Link>
            <span aria-hidden="true">/</span>
            <span className="text-[#1F5E4B]">Knee Pain Treatment</span>
          </nav>
          <p className="inline-block px-4 py-2 rounded-full bg-[#F5F1EA] text-sm text-[#5F5F5F] mb-6">DHA-Licensed Physiotherapy · Jumeirah 1</p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">Knee Pain Treatment in Jumeirah 1, Dubai</h1>
          <p className="text-lg text-[#3F3F3F] leading-relaxed max-w-4xl mb-6">
            RamaCare Polyclinic treats knee pain, including knee osteoarthritis, ligament and meniscus injuries and runner’s knee, at 12 Al Dhiyafah Road, Jumeirah 1, Dubai. A physiotherapy assessment costs AED 200 and includes a gait analysis. If needed, an X-ray or ultrasound scan can be done in the same visit, and our GP can suggest or prescribe medication where appropriate. Treatment is exercise-led, with shockwave, taping, dry needling and Ayurvedic options such as Janu Basti. Open every day, 10am–10pm.
          </p>
          <div className="flex flex-wrap gap-3 mb-8 text-sm">
            {['AED 200 assessment', 'X-ray + ultrasound on site', 'GP in the same clinic', 'Open daily till 10pm', 'Step-free clinic'].map((b) => (
              <span key={b} className="px-4 py-2 rounded-full bg-[#F0F7F4] text-[#1F5E4B] font-medium">{b}</span>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#1F5E4B] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#174a3b]">
              <MessageCircle className="w-5 h-5" /> Book on WhatsApp
            </a>
            <a href="#book-form" className="inline-flex items-center gap-2 border-2 border-[#1F5E4B] text-[#1F5E4B] px-6 py-3 rounded-full font-semibold hover:bg-[#1F5E4B] hover:text-white">
              <Calendar className="w-5 h-5" /> Request Appointment
            </a>
          </div>
        </div>
      </section>

      {/* Conditions */}
      <section className="bg-[#F9F7F2] py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1A1A1A] mb-8">Knee Problems We Treat</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {conditions.map((c) => (
              <div key={c.name} className="bg-white rounded-2xl p-6 border border-gray-200">
                <h3 className="font-bold text-lg text-[#1F5E4B] mb-2">{c.name}</h3>
                <p className="text-[#5F5F5F] leading-relaxed text-sm">{c.text}</p>
              </div>
            ))}
          </div>
          <p className="text-[#5F5F5F] mt-8 max-w-4xl">
            Injured in sport? See <Link href="/services/sports-injury-rehabilitation-dubai/" className="text-[#1F5E4B] font-semibold underline">sports injury rehabilitation</Link>. Had knee surgery? See <Link href="/services/post-surgery-rehabilitation-dubai/" className="text-[#1F5E4B] font-semibold underline">post-surgery rehabilitation</Link>.
          </p>
        </div>
      </section>

      {/* Knee osteoarthritis */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold text-[#1A1A1A] mb-4">Knee Osteoarthritis (Knee Arthritis)</h2>
            <p className="text-[#3F3F3F] leading-relaxed mb-4">Knee osteoarthritis is gradual wear of the cartilage in the knee. It usually causes pain on stairs and after long walks, stiffness when you first get up, and sometimes swelling or creaking. An X-ray in the clinic can show the stage.</p>
            <p className="text-[#3F3F3F] leading-relaxed mb-4">Regular strengthening exercise, staying active and, if needed, losing weight are the most effective first treatments. Physiotherapy builds the thigh and hip muscles that take load off the joint. Medication can help with flare-ups, and injections or knee replacement are considered for some advanced cases, by referral.</p>
            <p className="text-[#5F5F5F]">For arthritis in other joints, see <Link href="/services/arthritis-treatment-dubai/" className="text-[#1F5E4B] font-semibold underline">arthritis treatment</Link>. For weight support, see our GP’s <Link href="/services/personalized-slimming-programs/" className="text-[#1F5E4B] font-semibold underline">weight management programme</Link>.</p>
          </div>
          <div className="bg-[#FEF2F2] border border-red-200 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4 flex items-center gap-2"><AlertCircle className="w-6 h-6 text-[#B4432F]" /> When Is Knee Pain Urgent?</h2>
            <ul className="space-y-2 text-[#3F3F3F]">{redFlags.map((r) => <li key={r} className="flex gap-2"><span className="text-[#B4432F] font-bold">•</span>{r}</li>)}</ul>
            <p className="mt-4 text-[#3F3F3F]">Our GP can see you the same day and arrange an X-ray. For chest pain or breathlessness, call 998.</p>
          </div>
        </div>
      </section>

      {/* Assessment */}
      <section className="bg-[#F9F7F2] py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1A1A1A] mb-8">Knee Assessment at RamaCare</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {assessment.map((a) => (
              <div key={a.title} className="bg-white rounded-2xl p-6 border border-gray-200">
                <a.icon className="w-8 h-8 text-[#1F5E4B] mb-3" />
                <h3 className="font-bold text-lg text-[#1A1A1A] mb-2">{a.title}</h3>
                <p className="text-[#5F5F5F] leading-relaxed">{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-[#1A1A1A] mb-6">How We Treat Knee Pain</h2>
            <ul className="space-y-3">{treatments.map((t) => <li key={t} className="flex gap-3 text-[#3F3F3F]"><CheckCircle className="w-5 h-5 text-[#1F5E4B] flex-none mt-0.5" />{t}</li>)}</ul>
            <p className="text-[#5F5F5F] mt-6">RamaCare does not give knee injections (PRP, hyaluronic acid), perform cryoablation or surgery, or supply knee braces. If you need these, we refer you or advise you.</p>
          </div>
          <div className="space-y-6">
            <div className="bg-[#F0F7F4] rounded-2xl p-8 border border-[#1F5E4B]/15">
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-2 flex items-center gap-2"><Leaf className="w-6 h-6 text-[#1F5E4B]" /> Ayurvedic Options for the Knee</h3>
              <p className="text-[#3F3F3F] leading-relaxed">If you want to combine approaches, our Ayurveda doctor offers Janu Basti (warm medicated oil held over the knee) and <Link href="/services/kizhi-therapy-dubai/" className="text-[#1F5E4B] font-semibold underline">Kizhi therapy</Link>. Unsure which suits you? Read <Link href="/services/ayurveda-vs-physiotherapy-for-arthritis-dubai/" className="text-[#1F5E4B] font-semibold underline">Ayurveda vs physiotherapy for arthritis</Link>.</p>
            </div>
            <div className="bg-[#F9F7F2] rounded-2xl p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">Simple Knee Exercises</h3>
              <ul className="space-y-3">{exercises.map((e) => <li key={e.name} className="text-[#3F3F3F]"><strong>{e.name}:</strong> {e.text}</li>)}</ul>
              <p className="text-sm text-[#5F5F5F] mt-4">Start gently and stop any exercise that sharply increases pain. Your physiotherapist adjusts these to your knee.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick facts */}
      <section className="bg-[#F9F7F2] py-16 px-6">
        <div className="max-w-6xl mx-auto bg-white rounded-2xl p-8 border border-gray-200">
          <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">Quick Facts: Knee Pain Care at RamaCare, Jumeirah 1</h2>
          <ul className="grid md:grid-cols-2 gap-x-8 gap-y-2 text-[#3F3F3F]">
            <li>Physiotherapy assessment with gait analysis: AED 200</li>
            <li>X-ray and ultrasound scan in the clinic; MRI by referral</li>
            <li>GP in the same clinic: medication where appropriate, tests, weight management</li>
            <li>Shockwave, kinesio taping, dry needling, manual therapy</li>
            <li>Ayurveda: Janu Basti and Kizhi</li>
            <li>Insurance: pay and claim; we check your coverage (see <Link href="/services/physiotherapy-insurance-dubai/" className="text-[#1F5E4B] underline">physiotherapy insurance</Link>)</li>
            <li>Step-free, ground floor: 12 Al Dhiyafah Road, Jumeirah Terrace Building, Jumeirah 1</li>
            <li>Open every day 10am–10pm · 04 286 2006 · WhatsApp 056 659 7878</li>
          </ul>
          <p className="text-[#3F3F3F] mt-4 text-right" lang="ar" dir="rtl">علاج آلام الركبة وإصابات أربطة الركبة في جميرا 1، دبي: تقييم العلاج الطبيعي بـ 200 درهم، أشعة سينية وموجات فوق صوتية في العيادة، مفتوح يومياً حتى 10 مساءً.</p>
        </div>
      </section>

      <DoctorsSection
        content={{
          badge: 'Your Care Team',
          title: 'Meet Your Physiotherapist, GP and Ayurveda Doctor',
          description: 'Knee care at RamaCare is led by Jeena Mathew, a DHA-licensed physiotherapist (BPT, MPT), with our GP for imaging, medication and weight management, and our Ayurveda doctor for Janu Basti and Kizhi.'
        }}
        customDoctors={careTeam}
      />

      {/* FAQ */}
      <section className="bg-white py-16 px-6" id="faq">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1A1A1A] mb-8 text-center">Knee Pain in Jumeirah 1: Common Questions</h2>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <div key={f.question} className="border border-gray-200 rounded-xl overflow-hidden">
                <button type="button" onClick={() => setOpenFaq(openFaq === i ? null : i)} aria-expanded={openFaq === i}
                  className="w-full flex justify-between items-center gap-4 p-5 text-left font-semibold text-[#1A1A1A] hover:bg-[#F9F7F2]">
                  <span>{f.question}</span>
                  {openFaq === i ? <ChevronUp className="w-5 h-5 flex-none" /> : <ChevronDown className="w-5 h-5 flex-none" />}
                </button>
                <div className={openFaq === i ? 'px-5 pb-5 text-[#5F5F5F] leading-relaxed' : 'hidden'}>{f.answer}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 mt-10">
            {[
              { text: 'Physiotherapy in Jumeirah 1', link: '/services/physiotherapy-dubai/' },
              { text: 'Joint pain treatment', link: '/services/joint-pain-treatment-dubai/' },
              { text: 'Arthritis treatment', link: '/services/arthritis-treatment-dubai/' },
              { text: 'Sports injury rehabilitation', link: '/services/sports-injury-rehabilitation-dubai/' },
              { text: 'Post-surgery rehabilitation', link: '/services/post-surgery-rehabilitation-dubai/' },
              { text: 'Dry needling', link: '/services/dry-needling-dubai/' }
            ].map((r) => (
              <Link key={r.link} href={r.link} className="px-5 py-2 rounded-full bg-[#F9F7F2] border border-gray-200 text-[#1F5E4B] font-medium hover:border-[#1F5E4B]">{r.text}</Link>
            ))}
          </div>
          <p className="text-xs text-[#5F5F5F] mt-8">Medical disclaimer: general information only. Treatment depends on your assessment, and no result is guaranteed.</p>
        </div>
      </section>

      <ContentReviewBadge
        doctorName="Jeena Mathew"
        doctorRole="DHA Licensed Physiotherapist"
        doctorCredentials="BPT, MPT (Physiotherapy) · DHA Licensed Physiotherapist"
        pageSlug="knee-pain-treatment-dubai"
        customStatement="This page has been reviewed for general information about knee pain and knee osteoarthritis care. Treatment depends on an individual assessment."
      />

      <div id="book-form">
        <BookConsultation
          content={{
            badge: 'Start Your Recovery',
            title: 'Book a Knee Pain Assessment in Jumeirah 1',
            description: 'Physiotherapy assessment with gait analysis: AED 200. X-ray and ultrasound on site. Open every day 10am–10pm.',
            getInTouchTitle: 'Get In Touch',
            requestAppointmentTitle: 'Request Appointment',
            submitButtonText: 'Request Appointment',
            contactInfo: {
              phone: '+971 04 286 2006',
              whatsapp: '971566597878',
              email: 'query@ramacarepolyclinic.com',
              address: { line1: '12 Al Dhiyafah Rd - Jumeirah Terrace Building,', line2: 'Ground Floor, Jumeirah 1 - Dubai' }
            },
            clinicHours: { weekdays: 'Sunday - Saturday:', weekdaysTime: '10:00 AM - 10:00 PM' },
            statCards: [
              { title: 'DHA Licensed', description: 'Facility 2036418' },
              { title: 'AED 200', description: 'Assessment + Gait Analysis' },
              { title: 'X-ray & Scan', description: 'In the Same Clinic' },
              { title: 'Open Daily', description: '10am – 10pm' }
            ]
          }}
        />
      </div>
    </Layout>
  );
}