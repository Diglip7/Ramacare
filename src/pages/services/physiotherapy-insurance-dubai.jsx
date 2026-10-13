import { useState } from 'react';
import Layout from '../../../components/Layout';
import Head from 'next/head';
import Link from 'next/link';
import { MessageCircle, Calendar, CheckCircle, FileText, ShieldCheck, Stethoscope, ClipboardList, AlertCircle, ChevronDown, ChevronUp } from 'lucide-react';
import ContentReviewBadge from '../../../components/ContentReviewBadge';
import BookConsultation from '../../../components/BookConsultation';

const SITE = 'https://ramacarepolyclinic.ae';
const CANONICAL_URL = `${SITE}/services/physiotherapy-insurance-dubai/`;
const JEENA_ID = `${SITE}/doctors/jeena-mathew-physiotherapist-dubai/#person`;
const PAGE_TITLE = 'Physiotherapy Insurance in Dubai: Coverage & Claims | RamaCare';
const PAGE_DESCRIPTION = 'Does insurance cover physiotherapy in Dubai? Session limits, GP referral and how to claim. RamaCare Jumeirah 1: pay and claim, with all documents provided.';
const WHATSAPP = 'https://wa.me/971566597878?text=Hi%20RamaCare%2C%20please%20check%20my%20insurance%20coverage%20for%20physiotherapy.';

const coverageRows = [
  { plan: 'Basic plan (DHA Essential Benefits Plan)', sessions: 'Usually up to 6 sessions per year', referral: 'GP referral needed', approval: 'Prior approval usually needed', copay: 'Often around 20%' },
  { plan: 'Enhanced or company plans', sessions: 'Often 10 to 20 sessions per year', referral: 'Usually needed', approval: 'Often needed', copay: 'Varies by plan' },
  { plan: 'International plans', sessions: 'Varies widely', referral: 'Often needed', approval: 'Varies', copay: 'Varies by plan' }
];

const steps = [
  { title: 'See our GP for a referral', text: 'Most plans only pay for physiotherapy with a doctor\'s referral. Our GP is in the same clinic and can assess you and write the referral letter.' },
  { title: 'We check your coverage', text: 'Send us your insurance card. We check what your plan covers for physiotherapy and request prior approval if your plan needs it.' },
  { title: 'Have your physiotherapy and pay at the clinic', text: 'RamaCare works on reimbursement only (pay and claim). There is no direct billing. The physiotherapy assessment costs AED 200.' },
  { title: 'Collect your documents', text: 'We give you an itemised invoice, a medical report, progress notes and the GP referral letter, so your claim has what insurers usually ask for.' },
  { title: 'Submit your claim to your insurer', text: 'Submit through your insurer\'s app, website or claim form within their deadline. Keep the original documents in case your insurer asks for them.' }
];

const documents = [
  'GP referral letter for physiotherapy',
  'Itemised invoice and payment receipt',
  'Medical report with your diagnosis and treatment plan',
  'Progress notes during your course of treatment',
  'Prior approval reference, if your plan required one',
  'Copy of your insurance card and Emirates ID',
  'Your bank details for the refund (requested by your insurer)'
];

const rejections = [
  'No doctor\'s referral, or a referral dated after treatment started',
  'Prior approval was needed but not obtained',
  'The yearly physiotherapy session limit has already been used',
  'Missing diagnosis or medical report',
  'No progress notes for a longer course of treatment',
  'Claim submitted after the insurer\'s deadline',
  'Documents not in English or Arabic'
];

const faqs = [
  { question: 'Does insurance cover physiotherapy in Dubai?', answer: 'Yes, most health insurance plans in Dubai cover physiotherapy, but with limits. Basic plans usually cover up to 6 sessions a year with a GP referral and prior approval; better plans often cover 10 to 20 sessions. Always check your own table of benefits.' },
  { question: 'Does RamaCare offer direct billing for physiotherapy?', answer: 'No. RamaCare works on reimbursement only. You pay at the clinic and claim the cost back from your insurer. We provide the documents for your claim and help with coverage checks and prior approval.' },
  { question: 'How does pay and claim (reimbursement) work?', answer: 'You pay for your sessions at the clinic, collect your invoice, medical report and progress notes, and submit them to your insurer. The insurer then refunds the covered amount, minus any co-payment, to your bank account.' },
  { question: 'How many physiotherapy sessions does insurance cover?', answer: 'It depends on your plan. The DHA Essential Benefits Plan usually covers up to 6 sessions a year. Enhanced and company plans often cover 10 to 20 sessions. Your table of benefits shows your exact limit.' },
  { question: 'Do I need a referral for insurance to cover physiotherapy?', answer: 'Usually yes. Most plans need a referral from a GP or specialist. RamaCare\'s GP works in the same clinic and can assess you and write the referral letter.' },
  { question: 'What is prior approval and do I need it?', answer: 'Prior approval (pre-authorisation) means your insurer agrees to cover treatment before it starts. Many plans need it for physiotherapy. If your plan does, RamaCare requests it for you.' },
  { question: 'Can RamaCare check my insurance coverage?', answer: 'Yes. Send a photo of your insurance card on WhatsApp and our team will check what your plan covers for physiotherapy before you start.' },
  { question: 'What documents do I need to claim physiotherapy?', answer: 'Usually a doctor\'s referral, an itemised invoice and receipt, a medical report, progress notes, a copy of your insurance card and your bank details. RamaCare provides the invoice, medical report, progress notes and GP referral.' },
  { question: 'How much will I pay upfront?', answer: 'The physiotherapy assessment at RamaCare costs AED 200. You pay at the clinic and claim it back. How much you get back depends on your plan and any co-payment.' },
  { question: 'What is a co-payment?', answer: 'A co-payment (co-insurance) is the share of each session your plan does not pay, often around 20% on basic plans. It is deducted from your refund.' },
  { question: 'How long does a reimbursement claim take?', answer: 'It depends on your insurer. Many process claims within a few weeks once all documents are submitted. Missing documents are the most common cause of delays.' },
  { question: 'Why do physiotherapy claims get rejected?', answer: 'The most common reasons are no referral, no prior approval when it was required, the yearly session limit already used, a missing medical report or progress notes, and submitting after the deadline.' },
  { question: 'Is there a deadline to submit my claim?', answer: 'Yes. Every policy has a cut-off period for reimbursement claims. Check your policy and submit as soon as you have your documents.' },
  { question: 'Is ultrasound covered by insurance?', answer: 'Therapeutic ultrasound used during physiotherapy is usually covered as part of your physiotherapy sessions. A diagnostic ultrasound scan is a separate test that is often covered with a doctor\'s request. RamaCare offers both.' },
  { question: 'Does insurance cover physiotherapy after surgery or a sports injury?', answer: 'Usually yes, within your plan\'s session limit and with a referral. Some plans also need prior approval for longer rehab programmes.' },
  { question: 'Does insurance cover dry needling, shockwave or massage?', answer: 'It depends on your plan. Some insurers cover these as part of physiotherapy, others do not. Ask us to check your coverage before treatment.' },
  { question: 'Can I have physiotherapy without insurance?', answer: 'Yes. You can self-pay without a referral. The physiotherapy assessment costs AED 200.' },
  { question: 'Do unused physiotherapy sessions carry over to next year?', answer: 'Usually no. Session limits normally reset when your policy renews.' },
  { question: 'Where is RamaCare located?', answer: 'Ground floor, Jumeirah Terrace Building, 12 Al Dhiyafah Road, Jumeirah 1, Dubai, near Al Satwa. Open every day from 10am to 10pm. Call 04 286 2006 or WhatsApp 056 659 7878.' }
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
        { '@type': 'ListItem', position: 4, name: 'Physiotherapy Insurance', item: CANONICAL_URL }
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
      about: { '@type': 'Thing', name: 'Health insurance coverage and reimbursement claims for physiotherapy in Dubai' },
      reviewedBy: { '@id': JEENA_ID },
      lastReviewed: '2026-10-15', // change to the deploy date
      publisher: { '@id': `${SITE}/#clinic` }
    },
    {
      '@type': 'HowTo',
      '@id': `${CANONICAL_URL}#howto`,
      name: 'How to claim physiotherapy from insurance in Dubai (reimbursement)',
      step: steps.map((s, i) => ({ '@type': 'HowToStep', position: i + 1, name: s.title, text: s.text }))
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
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer }
      }))
    }
  ]
};

export default function PhysiotherapyInsuranceDubai() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <Layout>
      <Head>
        <title key="title">{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_DESCRIPTION} key="description" />
        <link rel="canonical" href={CANONICAL_URL} key="canonical" />
        <meta property="og:type" content="website" key="og:type" />
        <meta property="og:title" content={PAGE_TITLE} key="og:title" />
        <meta property="og:description" content={PAGE_DESCRIPTION} key="og:description" />
        <meta property="og:url" content={CANONICAL_URL} key="og:url" />
        <meta property="og:image" content={`${SITE}/images/ultrasound.jpg`} key="og:image" />
        <meta property="og:image:alt" content="Physiotherapy insurance claims at RamaCare Polyclinic, Jumeirah 1, Dubai" key="og:image:alt" />
        <meta property="og:site_name" content="RamaCare Polyclinic" key="og:site_name" />
        <meta property="og:locale" content="en_AE" key="og:locale" />
        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content={PAGE_TITLE} key="twitter:title" />
        <meta name="twitter:description" content={PAGE_DESCRIPTION} key="twitter:description" />
        <meta name="twitter:image" content={`${SITE}/images/ultrasound.jpg`} key="twitter:image" />
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
            <span className="text-[#1F5E4B]">Physiotherapy Insurance</span>
          </nav>
          <p className="inline-block px-4 py-2 rounded-full bg-[#F5F1EA] text-sm text-[#5F5F5F] mb-6">DHA-Licensed Physiotherapy · Jumeirah 1</p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">Does Insurance Cover Physiotherapy in Dubai?</h1>
          <p className="text-lg text-[#3F3F3F] leading-relaxed max-w-4xl mb-6">
            Yes, most health insurance plans in Dubai cover physiotherapy, within limits. Basic plans usually cover up to 6 sessions a year with a GP referral and prior approval; enhanced plans often cover 10 to 20. At RamaCare Polyclinic in Jumeirah 1, physiotherapy works on <strong>reimbursement (pay and claim)</strong>: you pay at the clinic and we give you the documents to claim from your insurer.
          </p>
          <div className="bg-[#F9F7F2] border-l-4 border-[#1F5E4B] rounded-xl p-6 max-w-4xl mb-8">
            <p className="font-bold text-[#1F5E4B] mb-2">How insurance works at RamaCare</p>
            <ul className="space-y-1 text-[#3F3F3F]">
              <li>• Reimbursement only. There is no direct billing.</li>
              <li>• We check your coverage and request prior approval if your plan needs it.</li>
              <li>• Our GP in the same clinic can write your physiotherapy referral.</li>
              <li>• We provide the invoice, medical report and progress notes for your claim.</li>
              <li>• Physiotherapy assessment: AED 200. Open every day, 10am–10pm.</li>
            </ul>
          </div>
          <div className="flex flex-wrap gap-4">
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#1F5E4B] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#174a3b]">
              <MessageCircle className="w-5 h-5" /> Check My Coverage on WhatsApp
            </a>
            <a href="#book-form" className="inline-flex items-center gap-2 border-2 border-[#1F5E4B] text-[#1F5E4B] px-6 py-3 rounded-full font-semibold hover:bg-[#1F5E4B] hover:text-white">
              <Calendar className="w-5 h-5" /> Request Appointment
            </a>
          </div>
        </div>
      </section>

      {/* Coverage table */}
      <section className="bg-[#F9F7F2] py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1A1A1A] mb-4">How Many Physiotherapy Sessions Does Insurance Cover?</h2>
          <p className="text-[#5F5F5F] mb-8 max-w-3xl">Typical limits in Dubai. Your own table of benefits is the final word, so we always check it with you.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-left bg-white rounded-2xl overflow-hidden border border-gray-200">
              <thead className="bg-[#1F5E4B] text-white">
                <tr>
                  <th className="p-4">Type of plan</th>
                  <th className="p-4">Sessions per year</th>
                  <th className="p-4">Referral</th>
                  <th className="p-4">Prior approval</th>
                  <th className="p-4">Co-payment</th>
                </tr>
              </thead>
              <tbody>
                {coverageRows.map((r, i) => (
                  <tr key={r.plan} className={i % 2 ? 'bg-[#F9F7F2]' : 'bg-white'}>
                    <td className="p-4 font-semibold">{r.plan}</td>
                    <td className="p-4">{r.sessions}</td>
                    <td className="p-4">{r.referral}</td>
                    <td className="p-4">{r.approval}</td>
                    <td className="p-4">{r.copay}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1A1A1A] mb-8">How to Claim Physiotherapy from Insurance at RamaCare</h2>
          <ol className="grid md:grid-cols-5 gap-6">
            {steps.map((s, i) => (
              <li key={s.title} className="bg-[#F9F7F2] rounded-2xl p-6 border border-gray-200">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#1F5E4B] text-white font-bold mb-4">{i + 1}</span>
                <h3 className="font-bold text-[#1A1A1A] mb-2">{s.title}</h3>
                <p className="text-sm text-[#5F5F5F] leading-relaxed">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Documents + rejections */}
      <section className="bg-[#F9F7F2] py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4 flex items-center gap-2"><FileText className="w-6 h-6 text-[#1F5E4B]" /> Documents for Your Claim</h2>
            <ul className="space-y-3">
              {documents.map((d) => (
                <li key={d} className="flex gap-3 text-[#3F3F3F]"><CheckCircle className="w-5 h-5 text-[#1F5E4B] flex-none mt-0.5" />{d}</li>
              ))}
            </ul>
            <p className="text-sm text-[#5F5F5F] mt-4">Insurers usually accept documents in English or Arabic only. Keep the originals until your claim is paid.</p>
          </div>
          <div className="bg-white rounded-2xl p-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4 flex items-center gap-2"><AlertCircle className="w-6 h-6 text-[#B4432F]" /> Why Physiotherapy Claims Get Rejected</h2>
            <ul className="space-y-3">
              {rejections.map((r) => (
                <li key={r} className="flex gap-3 text-[#3F3F3F]"><span className="text-[#B4432F] font-bold">•</span>{r}</li>
              ))}
            </ul>
            <p className="text-sm text-[#5F5F5F] mt-4">We check your coverage, request prior approval when needed and give you a complete set of documents to avoid these problems.</p>
          </div>
        </div>
      </section>

      {/* Help + ultrasound */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl p-8 bg-[#1F5E4B] text-white">
            <ShieldCheck className="w-8 h-8 mb-3" />
            <h2 className="text-xl font-bold mb-2">Coverage Check and Prior Approval</h2>
            <p className="text-white/90 leading-relaxed">Send us your insurance card before your first session. We check your physiotherapy benefit and, if your plan needs it, request prior approval for you.</p>
          </div>
          <div className="rounded-2xl p-8 bg-[#F9F7F2] border border-gray-200">
            <Stethoscope className="w-8 h-8 mb-3 text-[#1F5E4B]" />
            <h2 className="text-xl font-bold text-[#1A1A1A] mb-2">GP Referral in the Same Clinic</h2>
            <p className="text-[#5F5F5F] leading-relaxed">Our GP can assess you and write the physiotherapy referral most insurers ask for, so you do not need a separate appointment elsewhere. See our <Link href="/services/general-physician-dubai/" className="text-[#1F5E4B] font-semibold underline">GP in Jumeirah 1</Link>.</p>
          </div>
          <div className="rounded-2xl p-8 bg-[#F9F7F2] border border-gray-200">
            <ClipboardList className="w-8 h-8 mb-3 text-[#1F5E4B]" />
            <h2 className="text-xl font-bold text-[#1A1A1A] mb-2">Is Ultrasound Covered?</h2>
            <p className="text-[#5F5F5F] leading-relaxed">Therapeutic ultrasound during physiotherapy is usually covered as part of your sessions. A diagnostic ultrasound scan is a separate test, often covered with a doctor&apos;s request. Read about <Link href="/services/ultrasound-therapy-dubai/" className="text-[#1F5E4B] font-semibold underline">ultrasound therapy</Link>.</p>
          </div>
        </div>
      </section>

      {/* Quick facts */}
      <section className="bg-[#F9F7F2] py-16 px-6">
        <div className="max-w-6xl mx-auto bg-white rounded-2xl p-8 border border-gray-200">
          <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">Quick Facts: Physiotherapy Insurance at RamaCare, Jumeirah 1</h2>
          <ul className="grid md:grid-cols-2 gap-x-8 gap-y-2 text-[#3F3F3F]">
            <li>Payment: reimbursement only (pay and claim); no direct billing</li>
            <li>Coverage check: yes, send your insurance card on WhatsApp</li>
            <li>Prior approval: requested by RamaCare when your plan needs it</li>
            <li>GP referral: available in the same clinic</li>
            <li>Documents: itemised invoice, medical report, progress notes</li>
            <li>Physiotherapy assessment: AED 200</li>
            <li>Address: 12 Al Dhiyafah Road, Jumeirah Terrace Building, Jumeirah 1, Dubai</li>
            <li>Open every day, 10am to 10pm · 04 286 2006 · WhatsApp 056 659 7878</li>
          </ul>
          <p className="text-[#3F3F3F] mt-4 text-right" lang="ar" dir="rtl">
            هل يغطي التأمين العلاج الطبيعي في دبي؟ نعم ضمن حدود الخطة. في راما كير جميرا 1 الدفع ثم المطالبة من شركة التأمين، ونوفر لك جميع المستندات.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 px-6" id="faq">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1A1A1A] mb-8 text-center">Physiotherapy Insurance in Dubai: Common Questions</h2>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <div key={f.question} className="border border-gray-200 rounded-xl overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex justify-between items-center gap-4 p-5 text-left font-semibold text-[#1A1A1A] hover:bg-[#F9F7F2]"
                  aria-expanded={openFaq === i}
                >
                  <span>{f.question}</span>
                  {openFaq === i ? <ChevronUp className="w-5 h-5 flex-none" /> : <ChevronDown className="w-5 h-5 flex-none" />}
                </button>
                <div className={openFaq === i ? 'px-5 pb-5 text-[#5F5F5F] leading-relaxed' : 'hidden'}>{f.answer}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="bg-[#F9F7F2] py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1A1A1A] mb-6">Related Pages</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { text: 'Physiotherapy in Jumeirah 1', link: '/services/physiotherapy-dubai/' },
              { text: 'Physiotherapy cost in Dubai', link: '/services/physiotherapy-cost-dubai/' },
              { text: 'GP in Jumeirah 1', link: '/services/general-physician-dubai/' },
              { text: 'Sports injury rehabilitation', link: '/services/sports-injury-rehabilitation-dubai/' },
              { text: 'Post-surgery rehabilitation', link: '/services/post-surgery-rehabilitation-dubai/' },
              { text: 'Ultrasound therapy', link: '/services/ultrasound-therapy-dubai/' }
            ].map((r) => (
              <Link key={r.link} href={r.link} className="px-5 py-2 rounded-full bg-white border border-gray-200 text-[#1F5E4B] font-medium hover:border-[#1F5E4B]">{r.text}</Link>
            ))}
          </div>
          <p className="text-xs text-[#5F5F5F] mt-8 max-w-4xl">
            Insurance disclaimer: coverage, session limits, co-payments and approval rules are set by each insurer and plan and can change. This page is general guidance and does not guarantee that a claim will be paid. Please check your table of benefits or ask us to check your coverage before treatment.
          </p>
        </div>
      </section>

      <ContentReviewBadge
        doctorName="Jeena Mathew"
        doctorRole="DHA Licensed Physiotherapist"
        doctorCredentials="BPT, MPT (Physiotherapy) · DHA Licensed Physiotherapist"
        pageSlug="physiotherapy-insurance-dubai"
        customStatement="This guide explains how physiotherapy insurance and reimbursement claims usually work in Dubai. Coverage depends on your own plan; please check your table of benefits."
      />

      <div id="book-form">
        <BookConsultation
          content={{
            badge: 'Check Coverage or Book',
            title: 'Book Physiotherapy in Jumeirah 1',
            description: 'Physiotherapy assessment AED 200. Pay and claim from your insurer; we provide the documents. Open every day 10am–10pm.',
            getInTouchTitle: 'Get In Touch',
            requestAppointmentTitle: 'Request Appointment',
            submitButtonText: 'Request Appointment',
            contactInfo: {
              phone: '+971 04 286 2006',
              whatsapp: '971566597878',
              email: 'query@ramacarepolyclinic.com',
              address: {
                line1: '12 Al Dhiyafah Rd - Jumeirah Terrace Building,',
                line2: 'Ground Floor, Jumeirah 1 - Dubai'
              }
            },
            clinicHours: {
              weekdays: 'Sunday - Saturday:',
              weekdaysTime: '10:00 AM - 10:00 PM'
            },
            statCards: [
              { title: 'Reimbursement', description: 'Pay and Claim' },
              { title: 'AED 200', description: 'Physiotherapy Assessment' },
              { title: 'GP Referral', description: 'In the Same Clinic' },
              { title: 'Open Daily', description: '10am – 10pm' }
            ]
          }}
        />
      </div>
    </Layout>
  );
}