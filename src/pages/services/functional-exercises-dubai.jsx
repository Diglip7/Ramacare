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
const CANONICAL_URL = `${SITE}/services/functional-exercises-dubai/`;
const JEENA_ID = `${SITE}/doctors/jeena-mathew-physiotherapist-dubai/#person`;
const PAGE_TITLE = 'Functional Exercise Therapy in Jumeirah 1, Dubai | RamaCare';
const PAGE_DESCRIPTION = 'Physiotherapist-led functional training in Jumeirah 1, Dubai: mobility, balance, fall prevention and strength for all ages. One-to-one. Open till 10pm.';
const WHATSAPP = 'https://wa.me/971566597878?text=Hi%20RamaCare%2C%20I%20would%20like%20to%20book%20a%20functional%20exercise%20assessment.';

const programmes = [
  { name: 'Balance and fall prevention', text: 'For people who feel unsteady, have had a fall or are worried about falling. Training covers standing balance, walking, turning and getting up safely.' },
  { name: 'Strength for older adults (sarcopenia)', text: 'Muscle naturally weakens with age. Progressive strength exercise is the main way to slow this and keep you independent with stairs, shopping and getting out of a chair.' },
  { name: 'Mobility and stiffness', text: 'For stiff hips, back, shoulders or neck. Guided mobility work restores the movement you need for daily tasks and exercise.' },
  { name: 'Back, neck and posture strength', text: 'Core, hip and upper-back strength for people with recurring back or neck pain, often linked to desk work and driving.' },
  { name: 'Back to daily life after injury or surgery', text: 'Rebuilding strength, walking and confidence for work, home and family life once the early rehab stage is done.' },
  { name: 'Parkinson’s and stroke movement training', text: 'Exercise focused on walking, balance, turning and everyday movement, as part of neurological rehabilitation.' }
];

const steps = [
  { title: 'Assessment', text: 'Your physiotherapist checks strength, balance, mobility, posture and how you walk (gait analysis), and asks about your goals and health.' },
  { title: 'Your programme', text: 'Exercises are chosen for your condition and goals, not a standard gym plan. Sessions are one-to-one in our exercise area with basic equipment.' },
  { title: 'Guided sessions', text: 'Usually 30 to 40 minutes, 2 to 3 times a week at first. Your physiotherapist corrects your technique and adjusts the difficulty as you improve.' },
  { title: 'Home programme and re-testing', text: 'A short home routine between sessions, and repeated tests so you can see real progress in strength, balance and walking.' }
];

const everyday = [
  'Getting up from a chair or the floor more easily',
  'Climbing stairs with more strength and less fear',
  'Walking further and more steadily',
  'Lifting and carrying shopping or children safely',
  'Turning and reaching without losing balance',
  'Returning to work, sport or exercise with confidence'
];

const safety = [
  'Chest pain, breathlessness or dizziness with exercise',
  'A recent fall with injury, or repeated falls without a clear cause',
  'New weakness, numbness or difficulty speaking',
  'Uncontrolled blood pressure or a recent heart problem'
];

const faqs = [
  { question: 'Where can I do functional exercise therapy in Jumeirah 1?', answer: 'RamaCare Polyclinic offers physiotherapist-led functional exercise therapy on the ground floor of Jumeirah Terrace Building, 12 Al Dhiyafah Road, Jumeirah 1, Dubai, near Al Satwa. The clinic is step-free and open every day from 10am to 10pm. Call 04 286 2006 or WhatsApp 056 659 7878.' },
  { question: 'What is functional exercise therapy?', answer: 'Functional exercise therapy uses movements you need in daily life, such as standing up, walking, lifting and reaching, to build strength, balance and mobility. At RamaCare it is prescribed and supervised by a DHA-licensed physiotherapist after an assessment.' },
  { question: 'How is it different from functional training at a gym?', answer: 'A gym trainer focuses on fitness. A physiotherapist assesses your condition first, builds exercise around pain, injury, balance or medical needs, and measures your progress. Functional exercise therapy is a treatment, not a workout class.' },
  { question: 'Who is functional exercise therapy for?', answer: 'It suits older adults wanting better balance and strength, people with back or neck pain, anyone stiff or deconditioned, people returning to daily life after injury or surgery, and people with Parkinson’s disease or after a stroke.' },
  { question: 'Can exercise help prevent falls?', answer: 'Yes. Balance and strength training is one of the most effective ways to reduce the risk of falls in older adults. Your programme is built around your own balance tests.' },
  { question: 'What is sarcopenia and can exercise help?', answer: 'Sarcopenia is the loss of muscle strength and mass that comes with age. Regular, progressive strength exercise is the main way to slow it and stay independent. Our physiotherapist adapts the exercise to your health and ability.' },
  { question: 'Is it safe for older adults?', answer: 'Yes, when it starts with an assessment and is supervised. Exercises begin at a level you can manage and progress gradually. Our GP is in the same clinic if anything needs a medical check.' },
  { question: 'Can functional exercise help back pain?', answer: 'Yes. Strengthening the core, hips and upper back and improving how you move is a key part of treatment for many types of back pain.' },
  { question: 'Do I need to be fit to start?', answer: 'No. Programmes start from your current level, whether that is getting out of a chair or returning to running.' },
  { question: 'How long is a session and how often should I come?', answer: 'Sessions usually last 30 to 40 minutes, 2 to 3 times a week at first, with a home routine in between. The frequency reduces as you improve.' },
  { question: 'How soon will I see results?', answer: 'Many people notice easier movement within a few weeks. Strength and balance usually take 6 to 12 weeks of regular exercise to improve clearly.' },
  { question: 'Are sessions one-to-one or group classes?', answer: 'Sessions are one-to-one with our physiotherapist. RamaCare does not run group classes.' },
  { question: 'Do you have equipment at the clinic?', answer: 'Yes. Sessions take place in our exercise area with basic equipment. Most exercises can also be done at home with little or no equipment.' },
  { question: 'Can it help with Parkinson’s disease or after a stroke?', answer: 'Yes. Exercise focused on walking, balance and everyday movement is an important part of neurological rehabilitation, alongside any medical care you receive.' },
  { question: 'Can I do this after surgery?', answer: 'Yes, once your surgeon allows it. Functional exercise is often the later stage of post-surgery rehabilitation, helping you get back to daily life and work.' },
  { question: 'Do you analyse how I walk?', answer: 'Yes. Your assessment includes a gait analysis, so your programme can target the way you walk, turn and balance.' },
  { question: 'How much does it cost?', answer: 'The physiotherapy assessment costs AED 200. Session prices depend on your programme; message us on WhatsApp for current prices. Tabby instalments are available, and insurance is by reimbursement.' },
  { question: 'Does insurance cover functional exercise therapy?', answer: 'It may, as part of physiotherapy with a referral. RamaCare works on reimbursement: we check your coverage, request prior approval if needed and provide the documents to claim.' },
  { question: 'Can I come after work?', answer: 'Yes. RamaCare is open every day until 10pm, including weekends.' }
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
        { '@type': 'ListItem', position: 4, name: 'Functional Exercise Therapy', item: CANONICAL_URL }
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
      about: { '@id': `${CANONICAL_URL}#therapy` },
      reviewedBy: { '@id': JEENA_ID },
      lastReviewed: '2026-10-15', // change to the deploy date
      publisher: { '@id': `${SITE}/#clinic` }
    },
    {
      '@type': 'PhysicalTherapy',
      '@id': `${CANONICAL_URL}#therapy`,
      name: 'Functional exercise therapy',
      alternateName: ['Functional training', 'Exercise therapy', 'Balance training', 'Fall prevention exercise', 'Mobility training', 'Strength training for sarcopenia'],
      url: CANONICAL_URL
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

export default function FunctionalExercisesPage() {
  const [openFaq, setOpenFaq] = useState(0);
  const content = getSubcategoryContent('physiotherapy-dubai', 'functional-exercises');
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
        <meta property="og:image" content={`${SITE}/images/excercise1.jpg`} key="og:image" />
        <meta property="og:image:alt" content="Physiotherapist-led functional exercise therapy in Jumeirah 1, Dubai - RamaCare Polyclinic" key="og:image:alt" />
        <meta property="og:site_name" content="RamaCare Polyclinic" key="og:site_name" />
        <meta property="og:locale" content="en_AE" key="og:locale" />
        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content={PAGE_TITLE} key="twitter:title" />
        <meta name="twitter:description" content={PAGE_DESCRIPTION} key="twitter:description" />
        <meta name="twitter:image" content={`${SITE}/images/excercise1.jpg`} key="twitter:image" />
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
              <span className="text-[#1F5E4B]">Functional Exercise Therapy</span>
            </nav>
            <p className="inline-block px-4 py-2 rounded-full bg-[#F5F1EA] text-sm text-[#5F5F5F] mb-6">DHA-Licensed Physiotherapy · Jumeirah 1</p>
            <h1 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">Functional Exercise Therapy in Jumeirah 1, Dubai</h1>
            <p className="text-lg text-[#3F3F3F] leading-relaxed max-w-4xl mb-6">
              RamaCare Polyclinic offers physiotherapist-led functional exercise therapy at 12 Al Dhiyafah Road, Jumeirah 1, Dubai. After an assessment with gait analysis (AED 200), our DHA-licensed physiotherapist builds a one-to-one programme for balance and fall prevention, strength in older adults, mobility, back and neck strength, or getting back to daily life after injury or surgery. Open every day, 10am–10pm, in a step-free clinic.
            </p>
            <div className="flex flex-wrap gap-3 mb-8 text-sm">
              {['Assessment with gait analysis: AED 200', 'One-to-one sessions', 'All ages, incl. older adults', 'Open daily till 10pm', 'Step-free clinic'].map((b) => (
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
                src="/images/excercise1.jpg"
                alt="Physiotherapist-led functional exercise therapy in Jumeirah 1, Dubai - RamaCare Polyclinic"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What it is */}
      <section className="bg-[#F9F7F2] py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-[#1A1A1A] mb-4">What Is Functional Exercise Therapy?</h2>
            <p className="text-[#3F3F3F] leading-relaxed mb-4">Functional exercise trains the movements you use every day, such as standing up, walking, turning, lifting and reaching, instead of working one muscle at a time. It builds strength, balance, mobility and coordination together.</p>
            <p className="text-[#3F3F3F] leading-relaxed">At RamaCare it is a physiotherapy treatment: your exercises are chosen after an assessment, supervised one-to-one, and adjusted around pain, injury, balance or medical needs.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left bg-white rounded-2xl overflow-hidden border border-gray-200">
              <thead className="bg-[#1F5E4B] text-white">
                <tr><th className="p-4"> </th><th className="p-4">Physiotherapist-led (RamaCare)</th><th className="p-4">Gym functional training</th></tr>
              </thead>
              <tbody>
                {[
                  ['Starts with', 'A clinical assessment and gait analysis', 'A fitness chat or none'],
                  ['Built around', 'Your condition, pain, balance and goals', 'General fitness'],
                  ['Supervised by', 'A DHA-licensed physiotherapist', 'A trainer'],
                  ['Progress', 'Re-tested strength, balance and walking', 'Varies'],
                  ['Medical back-up', 'GP in the same clinic', 'None']
                ].map((r, i) => (
                  <tr key={r[0]} className={i % 2 ? 'bg-[#F9F7F2]' : 'bg-white'}>
                    <td className="p-4 font-semibold">{r[0]}</td><td className="p-4">{r[1]}</td><td className="p-4">{r[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Programmes */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1A1A1A] mb-8">Who It Helps</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programmes.map((p) => (
              <div key={p.name} className="bg-[#F9F7F2] rounded-2xl p-6 border border-gray-200">
                <h3 className="font-bold text-lg text-[#1F5E4B] mb-2">{p.name}</h3>
                <p className="text-[#5F5F5F] leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
          <p className="text-[#5F5F5F] mt-8 max-w-4xl">
            Related: <Link href="/services/back-pain-treatment-dubai/" className="text-[#1F5E4B] font-semibold underline">back pain treatment</Link>, <Link href="/services/post-surgery-rehabilitation-dubai/" className="text-[#1F5E4B] font-semibold underline">post-surgery rehabilitation</Link>, <Link href="/services/sports-injury-rehabilitation-dubai/" className="text-[#1F5E4B] font-semibold underline">sports injury rehabilitation</Link> and <Link href="/services/physiotherapy-dubai/" className="text-[#1F5E4B] font-semibold underline">physiotherapy in Jumeirah 1</Link>.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-[#F9F7F2] py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1A1A1A] mb-8">How It Works at RamaCare</h2>
          <ol className="grid md:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <li key={s.title} className="bg-white rounded-2xl p-6 border border-gray-200">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#1F5E4B] text-white font-bold mb-4">{i + 1}</span>
                <h3 className="font-bold text-[#1A1A1A] mb-2">{s.title}</h3>
                <p className="text-sm text-[#5F5F5F] leading-relaxed">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Everyday + safety */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-[#F0F7F4] rounded-2xl p-8 border border-[#1F5E4B]/15">
            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">What It Helps With Day to Day</h2>
            <ul className="space-y-3">{everyday.map((e) => <li key={e} className="flex gap-3 text-[#3F3F3F]"><CheckCircle className="w-5 h-5 text-[#1F5E4B] flex-none mt-0.5" />{e}</li>)}</ul>
          </div>
          <div className="bg-[#FEF2F2] border border-red-200 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4 flex items-center gap-2"><AlertCircle className="w-6 h-6 text-[#B4432F]" /> See a Doctor First If You Have</h2>
            <ul className="space-y-2 text-[#3F3F3F]">{safety.map((r) => <li key={r} className="flex gap-2"><span className="text-[#B4432F] font-bold">•</span>{r}</li>)}</ul>
            <p className="mt-4 text-[#3F3F3F]">Our GP is in the same clinic and can check you before you start. For chest pain, call 998.</p>
          </div>
        </div>
      </section>

      {/* Quick facts */}
      <section className="bg-[#F9F7F2] py-16 px-6">
        <div className="max-w-6xl mx-auto bg-white rounded-2xl p-8 border border-gray-200">
          <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">Quick Facts: Functional Exercise at RamaCare, Jumeirah 1</h2>
          <ul className="grid md:grid-cols-2 gap-x-8 gap-y-2 text-[#3F3F3F]">
            <li>Physiotherapy assessment with gait analysis: AED 200</li>
            <li>One-to-one sessions with a DHA-licensed physiotherapist (no group classes)</li>
            <li>Sessions about 30–40 minutes, usually 2–3 times a week at first</li>
            <li>Exercise area with basic equipment; home programme included</li>
            <li>GP in the same clinic for medical checks</li>
            <li>Payment: cash, cards or Tabby; insurance by reimbursement</li>
            <li>Step-free, ground floor: 12 Al Dhiyafah Road, Jumeirah Terrace Building, Jumeirah 1</li>
            <li>Open every day 10am–10pm · 04 286 2006 · WhatsApp 056 659 7878</li>
          </ul>
          <p className="text-[#3F3F3F] mt-4 text-right" lang="ar" dir="rtl">العلاج بالتمارين الوظيفية في جميرا 1، دبي: تمارين التوازن والقوة والحركة بإشراف أخصائية علاج طبيعي، مفتوح يومياً حتى 10 مساءً.</p>
        </div>
      </section>
      
      {/* Patient Testimonials */}
      <PatientTestimonials content={content?.testimonials} />

      <DoctorsSection
        content={{
          badge: 'Your Care Team',
          title: 'Meet Your Physiotherapist and GP',
          description: 'Functional exercise at RamaCare is led by Jeena Mathew, a DHA-licensed physiotherapist (BPT, MPT), with our GP in the same clinic for medical checks.'
        }}
        customDoctors={careTeam}
      />

      {/* FAQ */}
      <section className="bg-white py-16 px-6" id="faq">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1A1A1A] mb-8 text-center">Functional Exercise in Jumeirah 1: Common Questions</h2>
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
              { text: 'Post-surgery rehabilitation', link: '/services/post-surgery-rehabilitation-dubai/' },
              { text: 'Sports injury rehabilitation', link: '/services/sports-injury-rehabilitation-dubai/' },
              { text: 'Back pain treatment', link: '/services/back-pain-treatment-dubai/' },
              { text: 'Knee pain treatment', link: '/services/knee-pain-treatment-dubai/' },
              { text: 'Physiotherapy insurance', link: '/services/physiotherapy-insurance-dubai/' }
            ].map((r) => (
              <Link key={r.link} href={r.link} className="px-5 py-2 rounded-full bg-[#F9F7F2] border border-gray-200 text-[#1F5E4B] font-medium hover:border-[#1F5E4B]">{r.text}</Link>
            ))}
          </div>
          <p className="text-xs text-[#5F5F5F] mt-8">Medical disclaimer: general information only. Programmes depend on your assessment, and no result is guaranteed.</p>
        </div>
      </section>

      <ContentReviewBadge
        doctorName="Jeena Mathew"
        doctorRole="DHA Licensed Physiotherapist"
        doctorCredentials="BPT, MPT (Physiotherapy) · DHA Licensed Physiotherapist"
        pageSlug="functional-exercises-dubai"
        customStatement="This page has been reviewed for general information about physiotherapist-led functional exercise. Programmes depend on an individual assessment."
      />

      <div id="book-form">
        <BookConsultation
          content={{
            badge: 'Start Moving Better',
            title: 'Book a Functional Exercise Assessment in Jumeirah 1',
            description: 'Assessment with gait analysis: AED 200. One-to-one sessions. Open every day 10am–10pm.',
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
              { title: 'One-to-One', description: 'Physiotherapist-Led' },
              { title: 'Open Daily', description: '10am – 10pm' }
            ]
          }}
        />
      </div>
    </Layout>
  );
}
