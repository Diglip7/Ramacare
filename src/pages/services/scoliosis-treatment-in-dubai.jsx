import { useState } from 'react';
import Layout from '../../../components/Layout';
import Head from 'next/head';
import Link from 'next/link';
import { MessageCircle, Calendar, AlertCircle, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';
import ContentReviewBadge from '../../../components/ContentReviewBadge';
import PatientTestimonials from '../../../components/VideoTestimonials';
import DoctorsSection from '../../../components/DoctorsSection';
import BookConsultation from '../../../components/BookConsultation';
import { DOCTORS } from '../../data/doctors';
import { getSubcategoryContent } from '../../data/subcategoryContent';

const SITE = 'https://ramacarepolyclinic.ae';
const CANONICAL_URL = `${SITE}/services/scoliosis-treatment-in-dubai/`;
const JEENA_ID = `${SITE}/doctors/jeena-mathew-physiotherapist-dubai/#person`;
const PAGE_TITLE = 'Scoliosis Treatment in Jumeirah 1, Dubai | RamaCare';
const PAGE_DESCRIPTION = 'Scoliosis and posture physiotherapy in Jumeirah 1, Dubai, for children, teens and adults. X-ray and GP on site, AED 200 assessment. Open till 10pm.';
const WHATSAPP = 'https://wa.me/971566597878?text=Hi%20RamaCare%2C%20I%20would%20like%20to%20book%20a%20scoliosis%20assessment.';

const types = [
  { name: 'Adolescent idiopathic scoliosis', text: 'The most common type, appearing around puberty with no known cause. It affects about 3 in 100 children under 16 and needs monitoring while the child is still growing.' },
  { name: 'Adult and degenerative scoliosis', text: 'A curve that develops or causes symptoms in adulthood, often with back pain and stiffness as the spine ages.' },
  { name: 'Postural (functional) scoliosis', text: 'A curve caused by posture, muscle imbalance or a leg-length difference rather than the bones themselves. It usually responds well to exercise.' },
  { name: 'Kyphosis (rounded upper back)', text: 'An increased forward curve of the upper back, often linked to posture and desk or phone use. Some types, such as Scheuermann’s, need medical review.' },
  { name: 'Lordosis (sway back)', text: 'An increased inward curve of the lower back, often linked to posture, weak core muscles or tight hips.' },
  { name: 'Living with a brace or after spine surgery', text: 'Exercise and posture support for people wearing a scoliosis brace, and rehabilitation after scoliosis surgery done at another hospital.' }
];

const signs = [
  'One shoulder higher than the other',
  'One shoulder blade sticking out more',
  'Uneven waist or one hip higher',
  'A rib hump when bending forward',
  'Clothes hanging unevenly',
  'Back pain, stiffness or tiredness when standing or sitting for long'
];

const redFlags = [
  'A curve that is getting worse quickly, especially during a growth spurt',
  'Back pain with numbness, weakness, or bladder or bowel changes',
  'Severe pain, night pain, fever or unexplained weight loss',
  'Breathing difficulty linked to a large curve'
];

const assessment = [
  { title: 'Spine and posture assessment (AED 200)', text: 'Our physiotherapist checks shoulder, hip and waist symmetry, the forward-bend test, spinal movement, muscle balance and breathing, and talks through your history and goals.' },
  { title: 'X-ray and GP review', text: 'An X-ray is the standard way to measure a scoliosis curve. X-ray is available at RamaCare, and our GP can review results and refer you to a spine specialist when needed.' },
  { title: 'A plan for your stage', text: 'Monitoring, exercise, brace support or specialist referral, depending on your age, curve size and how much growth is left.' }
];

const treatment = [
  'Scoliosis-specific corrective exercises chosen for your curve pattern',
  'Posture awareness and correction for sitting, standing and school or desk work',
  'Breathing exercises to improve rib and chest movement',
  'Core, back and hip strengthening for spinal support',
  'Mobility work and manual therapy for stiffness and muscle tension',
  'Pain management for adults with curve-related back pain',
  'Support alongside a brace: comfort, skin and posture tips and exercises out of the brace',
  'A home exercise programme and regular re-checks of posture and symmetry'
];

const faqs = [
  { question: 'Where can I get scoliosis treatment in Jumeirah 1?', answer: 'RamaCare Polyclinic offers scoliosis physiotherapy on the ground floor of Jumeirah Terrace Building, 12 Al Dhiyafah Road, Jumeirah 1, Dubai, near Al Satwa. The clinic is step-free and open every day from 10am to 10pm. Call 04 286 2006 or WhatsApp 056 659 7878.' },
  { question: 'Can scoliosis be treated without surgery?', answer: 'Yes, in most cases. Mild curves are usually monitored and treated with exercise; moderate curves in growing children are often treated with a brace plus exercise. Surgery is generally considered only for large or progressing curves, and we refer you to a spine specialist if needed.' },
  { question: 'Can physiotherapy cure scoliosis?', answer: 'No treatment can promise to straighten the spine. Physiotherapy aims to improve posture, strength, breathing and pain, and scoliosis-specific exercise may help limit progression in some mild curves, especially alongside monitoring and bracing when prescribed.' },
  { question: 'How is scoliosis measured?', answer: 'Scoliosis is measured on an X-ray using the Cobb angle. A curve of 10 degrees or more is defined as scoliosis. RamaCare has X-ray in the clinic, and our GP can review the results with you.' },
  { question: 'Do you supply scoliosis braces?', answer: 'No. RamaCare does not make or fit braces. If a brace may be needed, we refer you to a spine specialist and brace provider, and we provide physiotherapy alongside the brace.' },
  { question: 'Who needs a scoliosis brace?', answer: 'Bracing is usually considered for growing children and teenagers with moderate curves, often around 25 to 40 degrees, to help stop the curve getting worse. The decision is made by a spine specialist.' },
  { question: 'Do you offer the Schroth method?', answer: 'Our programme uses scoliosis-specific corrective, postural and breathing exercises. If you are looking specifically for a certified Schroth therapist, ask us on WhatsApp and we will advise you honestly on the best option for your curve.' },
  { question: 'What is adolescent idiopathic scoliosis?', answer: 'It is the most common type of scoliosis, starting around puberty without a known cause. It affects about 3% of children under 16 and needs regular monitoring while the child is still growing.' },
  { question: 'At what age should a child be checked for scoliosis?', answer: 'Signs often appear between about 10 and 15 years, during growth spurts. If you notice uneven shoulders, hips or a rib hump when your child bends forward, book an assessment.' },
  { question: 'Do you treat scoliosis in adults?', answer: 'Yes. Adults with scoliosis, including degenerative scoliosis, often have back pain and stiffness. Physiotherapy focuses on pain, strength, mobility and posture.' },
  { question: 'Can scoliosis cause back pain?', answer: 'It can, especially in adults. Many teenagers with scoliosis have little pain, but adults often notice stiffness and back pain from muscle imbalance and joint changes.' },
  { question: 'What is kyphosis and can physiotherapy help?', answer: 'Kyphosis is an increased forward curve of the upper back, a rounded back. Posture-related kyphosis often responds well to strengthening and posture work. Some types need medical review, and we refer when needed.' },
  { question: 'Can poor posture cause scoliosis?', answer: 'Poor posture does not cause structural scoliosis, but it can cause a postural curve and make symptoms worse. Posture correction is part of every programme.' },
  { question: 'How long does scoliosis treatment take?', answer: 'It depends on your age, curve and goals. Exercise programmes usually run for several months with regular re-checks, and growing children are monitored until they stop growing.' },
  { question: 'How often are sessions needed?', answer: 'Often 1 to 2 sessions a week at first, plus daily home exercises. Sessions reduce as you become confident with your programme.' },
  { question: 'Is scoliosis physiotherapy painful?', answer: 'No. Exercises are gentle and adjusted to your comfort. Some stretching can feel tight but should not be painful.' },
  { question: 'Can I keep doing sport with scoliosis?', answer: 'Usually yes. Staying active is encouraged. Your physiotherapist will advise on any adjustments for your sport.' },
  { question: 'Which languages does the physiotherapist speak?', answer: 'Our physiotherapist, Jeena Mathew, speaks English, Malayalam and Hindi.' },
  { question: 'How much does scoliosis assessment cost?', answer: 'A physiotherapy assessment at RamaCare costs AED 200. Session prices depend on your programme; message us on WhatsApp for details. Tabby is available, and insurance is by reimbursement.' },
  { question: 'Does insurance cover scoliosis physiotherapy?', answer: 'It may, as part of physiotherapy with a referral. RamaCare works on reimbursement: we check your coverage, request prior approval if needed and provide the documents to claim.' }
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
        { '@type': 'ListItem', position: 4, name: 'Scoliosis Treatment', item: CANONICAL_URL }
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
      name: 'Scoliosis',
      alternateName: ['Adolescent idiopathic scoliosis', 'Adult degenerative scoliosis', 'Postural scoliosis', 'Spinal curvature', 'Kyphosis', 'Lordosis'],
      associatedAnatomy: { '@type': 'AnatomicalStructure', name: 'Spine' },
      signOrSymptom: signs.map((n) => ({ '@type': 'MedicalSymptom', name: n })),
      possibleTreatment: [
        { '@type': 'PhysicalTherapy', name: 'Scoliosis-specific corrective exercise' },
        { '@type': 'PhysicalTherapy', name: 'Posture correction' },
        { '@type': 'PhysicalTherapy', name: 'Breathing exercises' },
        { '@type': 'MedicalTherapy', name: 'Bracing (by referral)' }
      ]
    },
    {
      '@type': 'Person',
      '@id': JEENA_ID,
      name: 'Jeena Mathew',
      jobTitle: 'DHA-Licensed Physiotherapist',
      url: `${SITE}/doctors/jeena-mathew-physiotherapist-dubai/`,
      worksFor: { '@id': `${SITE}/#clinic` },
      knowsLanguage: ['English', 'Malayalam', 'Hindi']
    },
    {
      '@type': 'FAQPage',
      '@id': `${CANONICAL_URL}#faq`,
      mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } }))
    }
  ]
};

export default function ScoliosisTreatmentPage() {
  const [openFaq, setOpenFaq] = useState(0);
  const content = getSubcategoryContent('physiotherapy-dubai', 'scoliosis');
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
        <meta property="og:image" content={`${SITE}/images/scoliosis1.jpg`} key="og:image" />
        <meta property="og:image:alt" content="Scoliosis physiotherapy in Jumeirah 1, Dubai - RamaCare Polyclinic" key="og:image:alt" />
        <meta property="og:site_name" content="RamaCare Polyclinic" key="og:site_name" />
        <meta property="og:locale" content="en_AE" key="og:locale" />
        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content={PAGE_TITLE} key="twitter:title" />
        <meta name="twitter:description" content={PAGE_DESCRIPTION} key="twitter:description" />
        <meta name="twitter:image" content={`${SITE}/images/scoliosis1.jpg`} key="twitter:image" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }} />
      </Head>

      {/* Hero */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm font-medium text-[#5F5F5F] flex-wrap">
              <Link href="/" className="hover:text-[#1F5E4B]">Home</Link>
              <span aria-hidden="true">/</span>
              <Link href="/services/" className="hover:text-[#1F5E4B]">Services</Link>
              <span aria-hidden="true">/</span>
              <Link href="/services/physiotherapy-dubai/" className="hover:text-[#1F5E4B]">Physiotherapy</Link>
              <span aria-hidden="true">/</span>
              <span className="text-[#1F5E4B]">Scoliosis Treatment</span>
            </nav>
            <p className="inline-block px-4 py-2 rounded-full bg-[#F5F1EA] text-sm text-[#5F5F5F] mb-6">DHA-Licensed Physiotherapy · Jumeirah 1</p>
            <h1 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">Scoliosis Treatment in Jumeirah 1, Dubai</h1>
            <p className="text-lg text-[#3F3F3F] leading-relaxed max-w-4xl mb-6">
              RamaCare Polyclinic offers scoliosis physiotherapy for children, teenagers and adults at 12 Al Dhiyafah Road, Jumeirah 1, Dubai. A spine and posture assessment costs AED 200. Treatment uses scoliosis-specific corrective, posture and breathing exercises, with X-ray and a GP in the same clinic and referral to a spine specialist or brace provider when needed. We also treat kyphosis and posture problems. Open every day, 10am–10pm.
            </p>
            <div className="flex flex-wrap gap-3 mb-8 text-sm">
              {['Assessment: AED 200', 'X-ray + GP on site', 'Children, teens and adults', 'Open daily till 10pm', 'English, Malayalam, Hindi'].map((b) => (
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
          <div className="lg:col-span-5 relative w-full">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white h-[380px] sm:h-[440px] xl:h-[480px]">
              <img
                src="/images/scoliosis1.jpg"
                alt="Scoliosis physiotherapy in Jumeirah 1, Dubai - RamaCare Polyclinic"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What is scoliosis + signs */}
      <section className="bg-[#F9F7F2] py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-[#1A1A1A] mb-4">What Is Scoliosis?</h2>
            <p className="text-[#3F3F3F] leading-relaxed mb-4">Scoliosis is a sideways curve of the spine, usually with some rotation. It is defined as a curve of 10 degrees or more on an X-ray (the Cobb angle). Most cases start around puberty and have no known cause.</p>
            <p className="text-[#3F3F3F] leading-relaxed">Small curves often need only monitoring and exercise. Moderate curves in growing children may need a brace, and large or fast-progressing curves need a spine specialist. The right plan depends on your age, the size of the curve and how much growing is left.</p>
          </div>
          <div className="bg-white rounded-2xl p-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">Signs Parents Often Notice</h2>
            <ul className="space-y-2">{signs.map((s) => <li key={s} className="flex gap-3 text-[#3F3F3F]"><CheckCircle className="w-5 h-5 text-[#1F5E4B] flex-none mt-0.5" />{s}</li>)}</ul>
          </div>
        </div>
      </section>

      {/* Types */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1A1A1A] mb-8">Spine Curves We Help With</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {types.map((t) => (
              <div key={t.name} className="bg-[#F9F7F2] rounded-2xl p-6 border border-gray-200">
                <h3 className="font-bold text-lg text-[#1F5E4B] mb-2">{t.name}</h3>
                <p className="text-[#5F5F5F] leading-relaxed">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment */}
      <section className="bg-[#F9F7F2] py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1A1A1A] mb-8">Scoliosis Assessment at RamaCare</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {assessment.map((a) => (
              <div key={a.title} className="bg-white rounded-2xl p-6 border border-gray-200">
                <h3 className="font-bold text-lg text-[#1A1A1A] mb-2">{a.title}</h3>
                <p className="text-[#5F5F5F] leading-relaxed">{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment + brace */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-[#1A1A1A] mb-6">Scoliosis Physiotherapy</h2>
            <ul className="space-y-3">{treatment.map((t) => <li key={t} className="flex gap-3 text-[#3F3F3F]"><CheckCircle className="w-5 h-5 text-[#1F5E4B] flex-none mt-0.5" />{t}</li>)}</ul>
            <p className="text-[#5F5F5F] mt-6">Physiotherapy cannot promise to straighten the spine. It aims to improve posture, strength, breathing and comfort, and to support monitoring and bracing when they are needed.</p>
          </div>
          <div className="space-y-6">
            <div className="bg-[#F0F7F4] rounded-2xl p-8 border border-[#1F5E4B]/15">
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">Braces and Specialist Care</h3>
              <p className="text-[#3F3F3F] leading-relaxed">Bracing is usually considered for growing children and teens with moderate curves (often around 25–40 degrees). RamaCare does not make or fit braces. If a brace or a surgical opinion may be needed, we refer you to a spine specialist and brace provider, and we provide physiotherapy alongside the brace.</p>
            </div>
            <div className="bg-[#FEF2F2] border border-red-200 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-3 flex items-center gap-2"><AlertCircle className="w-6 h-6 text-[#B4432F]" /> See a Doctor Promptly If</h3>
              <ul className="space-y-2 text-[#3F3F3F]">{redFlags.map((r) => <li key={r} className="flex gap-2"><span className="text-[#B4432F] font-bold">•</span>{r}</li>)}</ul>
              <p className="mt-3 text-[#3F3F3F]">Our GP can see you the same day and refer you on.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick facts */}
      <section className="bg-[#F9F7F2] py-16 px-6">
        <div className="max-w-6xl mx-auto bg-white rounded-2xl p-8 border border-gray-200">
          <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">Quick Facts: Scoliosis Care at RamaCare, Jumeirah 1</h2>
          <ul className="grid md:grid-cols-2 gap-x-8 gap-y-2 text-[#3F3F3F]">
            <li>Spine and posture assessment: AED 200</li>
            <li>DHA-licensed physiotherapist: Jeena Mathew (BPT, MPT), speaks English, Malayalam and Hindi</li>
            <li>X-ray and GP in the same clinic; spine specialist and brace referral when needed</li>
            <li>Children, teenagers and adults; kyphosis and posture problems too</li>
            <li>Payment: cash, cards or Tabby; insurance by reimbursement</li>
            <li>Step-free, ground floor: 12 Al Dhiyafah Road, Jumeirah Terrace Building, Jumeirah 1</li>
            <li>Open every day 10am–10pm · 04 286 2006 · WhatsApp 056 659 7878</li>
          </ul>
          <p className="text-[#3F3F3F] mt-4 text-right" lang="ar" dir="rtl">علاج الجنف (انحناء العمود الفقري) بالعلاج الطبيعي في جميرا 1، دبي، للأطفال والمراهقين والكبار، مفتوح يومياً حتى 10 مساءً.</p>
        </div>
      </section>

      {/* Patient Testimonials */}
      <PatientTestimonials content={content?.testimonials} />

      <DoctorsSection
        content={{
          badge: 'Your Care Team',
          title: 'Meet Your Physiotherapist and GP',
          description: 'Scoliosis care at RamaCare is led by Jeena Mathew, a DHA-licensed physiotherapist (BPT, MPT), with our GP for X-ray review and specialist referral.'
        }}
        customDoctors={careTeam}
      />

      {/* FAQ */}
      <section className="bg-white py-16 px-6" id="faq">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1A1A1A] mb-8 text-center">Scoliosis in Jumeirah 1: Common Questions</h2>
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
              { text: 'Back pain treatment', link: '/services/back-pain-treatment-dubai/' },
              { text: 'Neck pain treatment', link: '/services/neck-pain-treatment-dubai/' },
              { text: 'Functional exercise therapy', link: '/services/functional-exercises-dubai/' },
              { text: 'Post-surgery rehabilitation', link: '/services/post-surgery-rehabilitation-dubai/' },
              { text: 'Physiotherapy insurance', link: '/services/physiotherapy-insurance-dubai/' }
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
        pageSlug="scoliosis-treatment-in-dubai"
        customStatement="This page has been reviewed for general information about scoliosis physiotherapy. Treatment depends on an individual assessment."
      />

      <div id="book-form">
        <BookConsultation
          content={{
            badge: 'Book an Assessment',
            title: 'Book a Scoliosis Assessment in Jumeirah 1',
            description: 'Spine and posture assessment: AED 200. X-ray and GP on site. Open every day 10am–10pm.',
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
              { title: 'AED 200', description: 'Spine Assessment' },
              { title: 'X-ray & GP', description: 'In the Same Clinic' },
              { title: 'Open Daily', description: '10am – 10pm' }
            ]
          }}
        />
      </div>
    </Layout>
  );
}
