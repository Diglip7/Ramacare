import { useState } from 'react';
import Layout from '../../../components/Layout';
import Head from 'next/head';
import Link from 'next/link';
import { MessageCircle, Calendar, AlertCircle, CheckCircle, Activity, Stethoscope, ScanLine, ChevronDown, ChevronUp } from 'lucide-react';
import ContentReviewBadge from '../../../components/ContentReviewBadge';
import DoctorsSection from '../../../components/DoctorsSection';
import BookConsultation from '../../../components/BookConsultation';
import { DOCTORS } from '../../data/doctors';

const SITE = 'https://ramacarepolyclinic.ae';
const CANONICAL_URL = `${SITE}/services/back-pain-treatment-dubai/`;
const JEENA_ID = `${SITE}/doctors/jeena-mathew-physiotherapist-dubai/#person`;
const PAGE_TITLE = 'Back Pain Treatment in Jumeirah 1, Dubai | RamaCare';
const PAGE_DESCRIPTION = 'Chronic, lower and upper back pain physiotherapy in Jumeirah 1, Dubai. GP, X-ray and ultrasound on site. AED 200 assessment. Open daily till 10pm.';
const WHATSAPP = 'https://wa.me/971566597878?text=Hi%20RamaCare%2C%20I%20would%20like%20to%20book%20a%20back%20pain%20assessment.';

const types = [
  { name: 'Lower back pain', text: 'The most common type, from muscle strain, stiff joints, long sitting, lifting or weak core muscles. Most cases are “non-specific” and settle with active treatment.' },
  { name: 'Chronic back pain', text: 'Pain lasting more than 12 weeks. Treatment focuses on exercise, movement confidence and habits, not rest, and usually needs a structured programme.' },
  { name: 'Acute back spasm', text: 'A sudden “locked” back after bending, lifting or twisting. Usually improves within days to weeks with gentle movement and the right advice.' },
  { name: 'Upper and middle back pain', text: 'Pain between the shoulder blades, often from desk posture, phone use and stress. Usually muscular and responds well to treatment.' },
  { name: 'Back pain from desk work and driving', text: 'Long hours sitting in the office or the car load the lower back. Posture, movement breaks and strength work make a big difference.' },
  { name: 'Back pain in pregnancy and after childbirth', text: 'Lower back and pelvic pain are common in pregnancy and after. Safe exercises and positions are adapted to each stage.' }
];

const redFlags = [
  'Loss of bladder or bowel control, or numbness around the groin or buttocks: go to an emergency department now',
  'Weakness or numbness in both legs, or getting worse quickly',
  'Back pain with fever, unexplained weight loss or a history of cancer',
  'Severe pain after a fall, accident or in someone with osteoporosis',
  'Constant pain that is worse at night and not eased by rest',
  'Upper back pain with chest pain, breathlessness or sweating: call 998'
];

const assessment = [
  { icon: Activity, title: 'Physiotherapy assessment (AED 200)', text: 'History, posture, how your back moves, muscle strength and nerve tests for leg symptoms. You leave with a clear explanation and a plan.' },
  { icon: Stethoscope, title: 'GP review if needed', text: 'Our GP can examine you, suggest or prescribe medication where appropriate, and refer you to a spine specialist if needed.' },
  { icon: ScanLine, title: 'X-ray or ultrasound in the clinic', text: 'Scans are not needed for most back pain. When they are, X-ray and ultrasound are done at RamaCare; MRI is arranged by referral.' }
];

const treatments = [
  'Exercise therapy: core, back and hip strengthening matched to your assessment',
  'Manual therapy and spinal mobilisation for stiff joints and muscle spasm',
  'Dry needling for tight muscles and trigger points',
  'Deep tissue massage by our DHA-licensed physiotherapist, as part of your plan',
  'Kinesio taping to support posture during the working day',
  'Cupping alongside physiotherapy for muscle tension',
  'Electrotherapy (TENS) and therapeutic ultrasound with exercise',
  'Posture, desk and car-seat advice for office workers and drivers',
  'Lifting technique and return-to-gym guidance',
  'A short home exercise programme between sessions'
];

const exercises = [
  { name: 'Pelvic tilts', text: 'Lying on your back with knees bent, gently flatten and arch your lower back. 10 slow repeats.' },
  { name: 'Knee to chest', text: 'Lying down, bring one knee towards your chest and hold 20 seconds. Swap sides.' },
  { name: 'Cat and camel', text: 'On hands and knees, slowly round and then arch your back. 10 repeats.' },
  { name: 'Bridges', text: 'Lying on your back, squeeze your buttocks and lift your hips. Hold 5 seconds, 10 times.' },
  { name: 'Bird dog', text: 'On hands and knees, reach one arm forward and the opposite leg back, keeping your back still.' },
  { name: 'Walking', text: 'Short, regular walks are one of the best things for most back pain.' }
];

const faqs = [
  { question: 'Where can I get back pain treatment in Jumeirah 1?', answer: 'RamaCare Polyclinic treats back pain on the ground floor of Jumeirah Terrace Building, 12 Al Dhiyafah Road, Jumeirah 1, Dubai, near Al Satwa. The clinic is step-free and open every day from 10am to 10pm. Call 04 286 2006 or WhatsApp 056 659 7878.' },
  { question: 'How much does a back pain assessment cost?', answer: 'A physiotherapy assessment at RamaCare costs AED 200. Insurance is by reimbursement: we check your coverage and give you the documents to claim.' },
  { question: 'What is the best treatment for chronic back pain?', answer: 'For most people, an active, exercise-based physiotherapy programme is the most effective first treatment for chronic back pain, combined with hands-on treatment and changes to daily habits. Medication can help in flare-ups.' },
  { question: 'Can back pain go away on its own?', answer: 'Many new episodes of back pain improve within a few weeks, especially if you stay gently active. If pain lasts more than 2 to 3 weeks, keeps returning or spreads down the leg, get it assessed.' },
  { question: 'When should I worry about back pain?', answer: 'Seek urgent care for loss of bladder or bowel control, numbness around the groin, weakness in both legs, back pain with fever or weight loss, severe pain after a fall, or upper back pain with chest pain or breathlessness.' },
  { question: 'Which doctor should I see for back pain?', answer: 'For most back pain, a physiotherapist is the right first step. At RamaCare, our GP is in the same clinic and can examine you, suggest or prescribe medication where appropriate and refer you to a spine specialist if needed.' },
  { question: 'What causes upper left side back pain?', answer: 'Most upper back pain is muscular, from posture or strain. Pain on the upper left side can occasionally come from the heart, lungs or kidney, so get urgent help if it comes with chest pain, breathlessness, fever or feeling unwell.' },
  { question: 'Do you offer back pain injections?', answer: 'No. RamaCare does not give back pain injections. If you may need an injection, we refer you to a specialist. Dry needling, which uses fine needles without medicine, is available for muscle trigger points.' },
  { question: 'Do I need an X-ray or MRI for back pain?', answer: 'Usually not. Most back pain is diagnosed by examination. X-ray and ultrasound can be done at RamaCare when needed, and MRI is arranged by referral for warning signs or leg symptoms that are not improving.' },
  { question: 'Is bed rest good for back pain?', answer: 'No. Long bed rest slows recovery. Short rests are fine, but staying gently active and walking help most back pain settle faster.' },
  { question: 'How many physiotherapy sessions will I need?', answer: 'An acute back spasm may need a few sessions. Chronic back pain usually needs a programme over 6 to 12 weeks, with a home exercise plan between visits.' },
  { question: 'Can office work cause back pain?', answer: 'Yes. Long hours sitting, a low screen and few movement breaks load the lower back. Posture changes, breaks every 30 to 45 minutes and core strength help.' },
  { question: 'Is dry needling good for back pain?', answer: 'Dry needling can help when tight muscles and trigger points add to back pain. It works best combined with exercise.' },
  { question: 'What exercises help lower back pain?', answer: 'Gentle pelvic tilts, knee-to-chest stretches, cat and camel, bridges, bird dog and regular walking. Stop any exercise that sharply increases pain or leg symptoms.' },
  { question: 'Is heat or ice better for back pain?', answer: 'Both can ease pain. Many people prefer heat for muscle spasm and stiffness. Use either for short periods and keep moving.' },
  { question: 'Can I go to the gym with back pain?', answer: 'Often yes, with changes. Your physiotherapist will tell you which exercises to keep, adapt or pause, and how to build back up safely.' },
  { question: 'Does back pain come back?', answer: 'It can. Keeping up your exercises, staying active, lifting well and improving desk posture lower the chance of another episode.' },
  { question: 'Is my back pain sciatica or a slipped disc?', answer: 'If pain spreads below the knee with tingling or numbness, it may be sciatica, often from a slipped disc. The assessment checks this. See our pages on sciatica and slipped disc treatment.' },
  { question: 'Do you treat back pain in pregnancy?', answer: 'Yes. Physiotherapy can help back and pelvic pain in pregnancy and after childbirth, with exercises and positions adapted to each stage.' },
  { question: 'Can I have treatment after work?', answer: 'Yes. RamaCare is open every day until 10pm, including weekends, with same-day appointments when slots are free.' },
  { question: 'Does insurance cover back pain physiotherapy?', answer: 'Usually, within your plan’s session limit and with a referral. RamaCare works on reimbursement: we check your coverage, request prior approval if needed and provide the invoice, medical report and progress notes.' }
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
        { '@type': 'ListItem', position: 4, name: 'Back Pain Treatment', item: CANONICAL_URL }
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
      name: 'Back pain',
      alternateName: ['Chronic back pain', 'Lower back pain', 'Upper back pain', 'Non-specific low back pain', 'Back spasm'],
      associatedAnatomy: { '@type': 'AnatomicalStructure', name: 'Spine' },
      possibleTreatment: [
        { '@type': 'PhysicalTherapy', name: 'Exercise-based back physiotherapy', url: `${SITE}/services/physiotherapy-dubai/` },
        { '@type': 'PhysicalTherapy', name: 'Manual therapy and spinal mobilisation' },
        { '@type': 'PhysicalTherapy', name: 'Dry needling', url: `${SITE}/services/dry-needling-dubai/` },
        { '@type': 'PhysicalTherapy', name: 'Kinesio taping' },
        { '@type': 'PhysicalTherapy', name: 'Posture and ergonomic advice' }
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

export default function BackPainTreatmentPage() {
  const [openFaq, setOpenFaq] = useState(0);
  const careTeam = [
    DOCTORS['jeena-mathew-physiotherapist-dubai'],
    DOCTORS['dr-sahar-zomorrodi-general-practitioner-dubai']
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
        <meta property="og:image" content={`${SITE}/images/back-pain.jpg`} key="og:image" />
        <meta property="og:image:alt" content="Back pain physiotherapy in Jumeirah 1, Dubai - RamaCare Polyclinic" key="og:image:alt" />
        <meta property="og:site_name" content="RamaCare Polyclinic" key="og:site_name" />
        <meta property="og:locale" content="en_AE" key="og:locale" />
        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content={PAGE_TITLE} key="twitter:title" />
        <meta name="twitter:description" content={PAGE_DESCRIPTION} key="twitter:description" />
        <meta name="twitter:image" content={`${SITE}/images/back-pain.jpg`} key="twitter:image" />
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
            <span className="text-[#1F5E4B]">Back Pain Treatment</span>
          </nav>
          <p className="inline-block px-4 py-2 rounded-full bg-[#F5F1EA] text-sm text-[#5F5F5F] mb-6">DHA-Licensed Physiotherapy · Jumeirah 1</p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">Back Pain Treatment in Jumeirah 1, Dubai</h1>
          <p className="text-lg text-[#3F3F3F] leading-relaxed max-w-4xl mb-6">
            RamaCare Polyclinic treats chronic, lower and upper back pain with physiotherapy at 12 Al Dhiyafah Road, Jumeirah 1, Dubai. A physiotherapy assessment costs AED 200. Treatment is exercise-led, with manual therapy, dry needling, taping and posture advice for desk workers and drivers. Our GP can suggest or prescribe medication where appropriate, and an X-ray or ultrasound can be done in the same visit if needed. Open every day, 10am–10pm.
          </p>
          <div className="flex flex-wrap gap-3 mb-8 text-sm">
            {['AED 200 assessment', 'GP + X-ray + ultrasound on site', 'Open daily till 10pm', 'Same-day appointments', 'Step-free clinic'].map((b) => (
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

      {/* Types */}
      <section className="bg-[#F9F7F2] py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1A1A1A] mb-4">Types of Back Pain We Treat</h2>
          <p className="text-[#5F5F5F] mb-8 max-w-3xl">About 80% of back pain is “non-specific”: no single damaged structure, and it usually responds well to active physiotherapy.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {types.map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-6 border border-gray-200">
                <h3 className="font-bold text-lg text-[#1F5E4B] mb-2">{t.name}</h3>
                <p className="text-[#5F5F5F] leading-relaxed">{t.text}</p>
              </div>
            ))}
          </div>
          <p className="text-[#5F5F5F] mt-8 max-w-4xl">
            Pain spreading down the leg? See <Link href="/services/sciatica-treatment-dubai/" className="text-[#1F5E4B] font-semibold underline">sciatica treatment</Link>. Diagnosed with a disc problem? See <Link href="/services/slip-disc-treatment-dubai/" className="text-[#1F5E4B] font-semibold underline">slipped disc treatment</Link>. Curved spine? See <Link href="/services/scoliosis-treatment-in-dubai/" className="text-[#1F5E4B] font-semibold underline">scoliosis treatment</Link>.
          </p>
        </div>
      </section>

      {/* Red flags */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto bg-[#FEF2F2] border border-red-200 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4 flex items-center gap-2"><AlertCircle className="w-6 h-6 text-[#B4432F]" /> When to Worry About Back Pain</h2>
          <ul className="space-y-2 text-[#3F3F3F]">{redFlags.map((r) => <li key={r} className="flex gap-2"><span className="text-[#B4432F] font-bold">•</span>{r}</li>)}</ul>
          <p className="mt-4 text-[#3F3F3F]">For other severe or worsening pain, our GP can see you the same day.</p>
        </div>
      </section>

      {/* Assessment */}
      <section className="bg-[#F9F7F2] py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1A1A1A] mb-8">Back Pain Assessment at RamaCare</h2>
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

      {/* Treatment + exercises */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-[#1A1A1A] mb-6">Physiotherapy Treatment for Back Pain</h2>
            <ul className="space-y-3">{treatments.map((t) => <li key={t} className="flex gap-3 text-[#3F3F3F]"><CheckCircle className="w-5 h-5 text-[#1F5E4B] flex-none mt-0.5" />{t}</li>)}</ul>
            <p className="text-[#5F5F5F] mt-6">RamaCare does not give back pain injections, use traction machines or perform surgery. If you need these, we refer you.</p>
          </div>
          <div className="bg-[#F9F7F2] rounded-2xl p-8 border border-gray-200">
            <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">Simple Exercises for Lower Back Pain</h3>
            <ul className="space-y-3">{exercises.map((e) => <li key={e.name} className="text-[#3F3F3F]"><strong>{e.name}:</strong> {e.text}</li>)}</ul>
            <p className="text-sm text-[#5F5F5F] mt-4">Start gently. Stop any exercise that sharply increases pain or causes leg symptoms, and get assessed.</p>
          </div>
        </div>
      </section>

      {/* Quick facts */}
      <section className="bg-[#F9F7F2] py-16 px-6">
        <div className="max-w-6xl mx-auto bg-white rounded-2xl p-8 border border-gray-200">
          <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">Quick Facts: Back Pain Care at RamaCare, Jumeirah 1</h2>
          <ul className="grid md:grid-cols-2 gap-x-8 gap-y-2 text-[#3F3F3F]">
            <li>Physiotherapy assessment: AED 200</li>
            <li>DHA-licensed physiotherapist: Jeena Mathew (BPT, MPT, 8+ years)</li>
            <li>GP in the same clinic: medication where appropriate and referrals</li>
            <li>X-ray and ultrasound in the clinic; MRI by referral</li>
            <li>Dry needling, cupping, kinesio taping, deep tissue massage</li>
            <li>Insurance: pay and claim; we check your coverage (see <Link href="/services/physiotherapy-insurance-dubai/" className="text-[#1F5E4B] underline">physiotherapy insurance</Link>)</li>
            <li>Step-free, ground floor: 12 Al Dhiyafah Road, Jumeirah Terrace Building, Jumeirah 1</li>
            <li>Open every day 10am–10pm · 04 286 2006 · WhatsApp 056 659 7878</li>
          </ul>
          <p className="text-[#3F3F3F] mt-4 text-right" lang="ar" dir="rtl">علاج آلام الظهر في جميرا 1، دبي: تقييم العلاج الطبيعي بـ 200 درهم، طبيب عام وأشعة في نفس العيادة، مفتوح يومياً حتى 10 مساءً.</p>
        </div>
      </section>

      <DoctorsSection
        content={{
          badge: 'Your Care Team',
          title: 'Meet Your Physiotherapist and GP',
          description: 'Back pain care at RamaCare is led by Jeena Mathew, a DHA-licensed physiotherapist (BPT, MPT), with our GP for medication, X-ray, ultrasound and referrals.'
        }}
        customDoctors={careTeam}
      />

      {/* FAQ */}
      <section className="bg-white py-16 px-6" id="faq">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1A1A1A] mb-8 text-center">Back Pain in Jumeirah 1: Common Questions</h2>
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
              { text: 'Sciatica treatment', link: '/services/sciatica-treatment-dubai/' },
              { text: 'Slipped disc treatment', link: '/services/slip-disc-treatment-dubai/' },
              { text: 'Neck pain treatment', link: '/services/neck-pain-treatment-dubai/' },
              { text: 'Dry needling', link: '/services/dry-needling-dubai/' },
              { text: 'Ayurveda vs physiotherapy for back pain', link: '/services/ayurveda-vs-physiotherapy-for-back-pain-dubai/' }
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
        pageSlug="back-pain-treatment-dubai"
        customStatement="This page has been reviewed for general information about back pain physiotherapy. Treatment depends on an individual assessment."
      />

      <div id="book-form">
        <BookConsultation
          content={{
            badge: 'Start Your Recovery',
            title: 'Book a Back Pain Assessment in Jumeirah 1',
            description: 'Physiotherapy assessment AED 200. GP, X-ray and ultrasound on site. Open every day 10am–10pm.',
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
              { title: 'AED 200', description: 'Physiotherapy Assessment' },
              { title: 'GP & Imaging', description: 'In the Same Clinic' },
              { title: 'Open Daily', description: '10am – 10pm' }
            ]
          }}
        />
      </div>
    </Layout>
  );
}