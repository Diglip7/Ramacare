import { useState } from 'react';
import Layout from '../../../components/Layout';
import Head from 'next/head';
import Link from 'next/link';
import { MessageCircle, Calendar, AlertCircle, Stethoscope, Activity, Leaf, ClipboardList, Baby, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';
import ContentReviewBadge from '../../../components/ContentReviewBadge';
import DoctorsSection from '../../../components/DoctorsSection';
import BookConsultation from '../../../components/BookConsultation';
import { DOCTORS } from '../../data/doctors';

const SITE = 'https://ramacarepolyclinic.ae';
const CANONICAL_URL = `${SITE}/services/migraine-treatment-dubai/`;
const SAHAR_ID = `${SITE}/doctors/dr-sahar-zomorrodi-general-practitioner-dubai/#person`;
const PAGE_TITLE = 'Migraine & Headache Treatment in Jumeirah 1, Dubai | RamaCare';
const PAGE_DESCRIPTION = 'GP-led migraine and headache care in Jumeirah 1, Dubai, for adults and children: diagnosis, medication, physio and Ayurveda. Same-day slots till 10pm.';
const WHATSAPP = 'https://wa.me/971566597878?text=Hi%20RamaCare%2C%20I%20would%20like%20to%20book%20a%20GP%20appointment%20for%20headaches%20or%20migraine.';

const headacheTypes = [
  { name: 'Migraine without aura', text: 'Moderate to severe, often throbbing pain, usually on one side, lasting 4 to 72 hours, with nausea or sensitivity to light and sound.' },
  { name: 'Migraine with aura', text: 'Visual changes such as flashing lights or zigzag lines, or tingling, that come before or with the headache and usually last under an hour.' },
  { name: 'Tension-type headache', text: 'The most common headache: a pressing or tight band around the head, often linked to stress, poor sleep and neck and shoulder tension.' },
  { name: 'Neck-related (cervicogenic) headache', text: 'Pain that starts in the neck and spreads to the back of the head or forehead, often worse with desk work or certain neck movements.' },
  { name: 'Cluster headache', text: 'Very severe pain around one eye, with a watery eye or blocked nose on the same side, in bouts over weeks. Needs medical review.' },
  { name: 'Medication-overuse headache', text: 'Daily or near-daily headaches caused by taking painkillers too often, usually on 10 to 15 or more days a month.' }
];

const redFlags = [
  'A sudden, severe “thunderclap” headache or the worst headache of your life',
  'Headache with fever, a stiff neck or a rash',
  'Weakness, numbness, slurred speech, confusion or loss of vision',
  'Headache after a head injury or fall',
  'A new headache pattern after age 50, or headaches that keep getting worse',
  'Headache in pregnancy or with very high blood pressure'
];

const treatments = [
  { icon: Stethoscope, title: 'GP Diagnosis and Medication', text: 'Our GP takes a full history, examines you, checks blood pressure and, where appropriate, suggests or prescribes medication for attacks or prevention. Most migraines are diagnosed clinically, without scans.' },
  { icon: ClipboardList, title: 'Headache Diary and Triggers', text: 'You record when headaches start, how long they last, what you ate, slept and did, and what medicine you took. The pattern guides your treatment and shows triggers to avoid.' },
  { icon: Activity, title: 'Physiotherapy for Neck and Tension Headaches', text: 'For headaches linked to the neck or muscle tension: manual therapy, deep neck strengthening, posture advice and dry needling of tight neck and shoulder muscles. Assessment AED 200.' },
  { icon: Leaf, title: 'Ayurvedic Support', text: 'Some patients add Ayurvedic therapies such as Shirodhara or Nasya with our Ayurveda doctor, alongside medical care, mainly for stress-related headaches.' },
  { icon: AlertCircle, title: 'Referral to a Neurologist', text: 'For red-flag symptoms, chronic migraine (15 or more headache days a month) or specialist treatments such as preventive injections or nerve blocks, our GP refers you to a neurologist.' }
];

const triggers = [
  'Dehydration and heat, common in Dubai summers',
  'Skipped meals or irregular eating',
  'Poor or irregular sleep, including oversleeping at weekends',
  'Stress, or the let-down after stress',
  'Long screen time and desk posture',
  'Hormonal changes, such as around periods',
  'Too much or too little caffeine',
  'Bright light, strong smells or loud noise',
  'Some foods and alcohol (varies between people)'
];

const prevention = [
  'Drink water regularly through the day, more in hot weather',
  'Eat at regular times and do not skip breakfast',
  'Keep a regular sleep and wake time, including weekends',
  'Take screen breaks every 30 to 45 minutes',
  'Keep regular, moderate exercise',
  'Limit painkillers to fewer than 2 to 3 days a week, unless your doctor advises otherwise',
  'Keep a headache diary to find your triggers'
];

const faqs = [
  { question: 'Where can I get migraine treatment in Jumeirah 1?', answer: 'RamaCare Polyclinic treats migraine and headaches on the ground floor of Jumeirah Terrace Building, 12 Al Dhiyafah Road, Jumeirah 1, Dubai, near Al Satwa. The clinic is open every day from 10am to 10pm, with same-day appointments when slots are free. Call 04 286 2006 or WhatsApp 056 659 7878.' },
  { question: 'Which doctor should I see for migraines in Dubai?', answer: 'Start with a GP. A GP can diagnose most migraines and headaches, prescribe treatment and refer you to a neurologist if you have warning signs, chronic migraine or need specialist treatment. At RamaCare, the GP, physiotherapist and Ayurveda doctor are in the same clinic.' },
  { question: 'Do you treat headaches in children?', answer: 'Yes. Our GP sees children and teenagers with headaches. Common causes include migraine, tension headaches, poor sleep, dehydration, skipped meals and screen time. Children with red-flag symptoms are referred urgently.' },
  { question: 'How do I know if it is a migraine or a normal headache?', answer: 'A migraine is usually moderate to severe, often throbbing and one-sided, lasts 4 to 72 hours, and comes with nausea or sensitivity to light and sound. A tension headache feels like a tight band and is usually milder. Your GP can confirm which type you have.' },
  { question: 'When is a headache an emergency?', answer: 'Get emergency help (call 998) for a sudden, severe thunderclap headache, a headache with fever and stiff neck, weakness, numbness, slurred speech, confusion, vision loss, or a headache after a head injury.' },
  { question: 'Do I need a scan for migraines?', answer: 'Usually not. Migraine is a clinical diagnosis. Scans are needed only if there are warning signs or the pattern of headaches changes. Your GP decides and refers you for imaging if needed.' },
  { question: 'Can a GP prescribe migraine medication?', answer: 'Yes. RamaCare\'s GP can suggest or prescribe medication where appropriate, both for treating attacks and, if needed, for preventing them.' },
  { question: 'Can physiotherapy help migraines?', answer: 'Physiotherapy helps most when headaches are linked to the neck or muscle tension, such as tension-type and neck-related headaches. It can also help some people with migraine who have neck pain. It works alongside medical care, not instead of it.' },
  { question: 'Can dry needling help headaches?', answer: 'Dry needling can help tension and neck-related headaches by releasing tight trigger points in the neck and shoulder muscles, usually combined with exercise and posture work.' },
  { question: 'Can Ayurveda help migraines?', answer: 'Some patients find Ayurvedic therapies such as Shirodhara or Nasya help with relaxation and stress-related headaches. At RamaCare they are offered by our Ayurveda doctor alongside, not instead of, medical assessment.' },
  { question: 'What is a headache diary?', answer: 'A simple record of each headache: date, time, how long it lasted, how bad it was, what you ate, slept and did, and what medicine you took. It helps your doctor confirm the type of headache and find triggers.' },
  { question: 'What triggers migraines?', answer: 'Common triggers are dehydration, heat, skipped meals, poor sleep, stress, screen time, hormonal changes, caffeine changes, bright light and strong smells. Triggers vary from person to person.' },
  { question: 'Can taking too many painkillers cause headaches?', answer: 'Yes. Using painkillers on many days each month can cause medication-overuse headache. If you take painkillers on more than 2 to 3 days a week, see your GP.' },
  { question: 'What is migraine with aura?', answer: 'Aura is a warning phase, usually visual changes like flashing lights or zigzag lines, that comes before or with the headache and usually lasts less than an hour. A first-ever aura, or aura with weakness, should be checked urgently.' },
  { question: 'Do you offer Botox for migraine?', answer: 'No. Botox for chronic migraine is a specialist treatment. If you may benefit from it, our GP can refer you to a neurologist.' },
  { question: 'Is surgery used for migraines?', answer: 'Rarely. Surgery is not a routine migraine treatment. Most people are managed with lifestyle changes, medication and, for some, specialist neurology treatment. RamaCare does not perform surgery.' },
  { question: 'How long does migraine treatment take to work?', answer: 'Treatment for attacks can work within hours. Preventive treatment and trigger changes usually need several weeks to a few months to show their full effect. Your GP reviews progress with you.' },
  { question: 'Are migraines common in the UAE?', answer: 'Yes. Migraine is common in the UAE and the Gulf, and many people are never properly diagnosed. Heat, dehydration, long screen hours and irregular sleep are common triggers here.' },
  { question: 'Can I get a same-day appointment for a headache?', answer: 'Yes, when slots are free. RamaCare is open every day from 10am to 10pm, including weekends, which helps when a headache starts after work.' },
  { question: 'Does insurance cover migraine treatment?', answer: 'Many plans cover GP visits and prescribed medication. RamaCare does not bill insurers directly: you pay at the clinic and claim back with our invoice and medical report. We can check your coverage first.' }
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
        { '@type': 'ListItem', position: 3, name: 'General Physician', item: `${SITE}/services/general-physician-dubai/` },
        { '@type': 'ListItem', position: 4, name: 'Migraine & Headache Treatment', item: CANONICAL_URL }
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
      specialty: 'https://schema.org/PrimaryCare',
      about: { '@id': `${CANONICAL_URL}#condition` },
      reviewedBy: { '@id': SAHAR_ID },
      lastReviewed: '2026-10-15', // change to the deploy date
      publisher: { '@id': `${SITE}/#clinic` }
    },
    {
      '@type': 'MedicalCondition',
      '@id': `${CANONICAL_URL}#condition`,
      name: 'Migraine',
      alternateName: ['Migraine headache', 'Headache', 'Tension-type headache', 'Cervicogenic headache', 'Headache in children'],
      signOrSymptom: ['Throbbing one-sided headache', 'Nausea', 'Sensitivity to light and sound', 'Visual aura'].map((n) => ({ '@type': 'MedicalSymptom', name: n })),
      possibleTreatment: [
        { '@type': 'MedicalTherapy', name: 'GP assessment and medication' },
        { '@type': 'MedicalTherapy', name: 'Trigger management and headache diary' },
        { '@type': 'PhysicalTherapy', name: 'Physiotherapy for neck-related and tension headaches', url: `${SITE}/services/neck-pain-treatment-dubai/` }
      ]
    },
    {
      '@type': 'Physician',
      '@id': SAHAR_ID,
      name: 'Dr. Sahar Zomorrodi',
      jobTitle: 'DHA-Licensed General Practitioner',
      url: `${SITE}/doctors/dr-sahar-zomorrodi-general-practitioner-dubai/`,
      medicalSpecialty: 'https://schema.org/PrimaryCare',
      worksFor: { '@id': `${SITE}/#clinic` }
    },
    {
      '@type': 'FAQPage',
      '@id': `${CANONICAL_URL}#faq`,
      mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } }))
    }
  ]
};

export default function MigraineTreatmentPage() {
  const [openFaq, setOpenFaq] = useState(0);
  const careTeam = [
    DOCTORS['dr-sahar-zomorrodi-general-practitioner-dubai'],
    DOCTORS['jeena-mathew-physiotherapist-dubai'],
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
        <meta property="og:image" content={`${SITE}/images/migraine-treatment.jpg`} key="og:image" />
        <meta property="og:image:alt" content="Migraine and headache treatment in Jumeirah 1, Dubai - RamaCare Polyclinic" key="og:image:alt" />
        <meta property="og:site_name" content="RamaCare Polyclinic" key="og:site_name" />
        <meta property="og:locale" content="en_AE" key="og:locale" />
        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content={PAGE_TITLE} key="twitter:title" />
        <meta name="twitter:description" content={PAGE_DESCRIPTION} key="twitter:description" />
        <meta name="twitter:image" content={`${SITE}/images/migraine-treatment.jpg`} key="twitter:image" />
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
            <Link href="/services/general-physician-dubai/" className="hover:text-[#1F5E4B]">General Physician</Link>
            <span aria-hidden="true">/</span>
            <span className="text-[#1F5E4B]">Migraine & Headache Treatment</span>
          </nav>
          <p className="inline-block px-4 py-2 rounded-full bg-[#F5F1EA] text-sm text-[#5F5F5F] mb-6">DHA-Licensed GP · Jumeirah 1</p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">Migraine & Headache Treatment in Jumeirah 1, Dubai</h1>
          <p className="text-lg text-[#3F3F3F] leading-relaxed max-w-4xl mb-6">
            RamaCare Polyclinic offers GP-led care for migraines and headaches in adults and children at 12 Al Dhiyafah Road, Jumeirah 1, Dubai. Our GP diagnoses the type of headache, suggests or prescribes medication where appropriate and helps you find your triggers. Physiotherapy for neck and tension headaches and Ayurvedic therapies are available in the same clinic, and we refer you to a neurologist when needed. Open every day, 10am–10pm, with same-day appointments.
          </p>
          <div className="bg-[#FEF2F2] border-l-4 border-[#B4432F] rounded-xl p-5 max-w-4xl mb-8">
            <p className="font-bold text-[#B4432F] mb-1">Emergency? Call 998</p>
            <p className="text-[#3F3F3F]">A sudden, severe “thunderclap” headache, or a headache with fever and stiff neck, weakness, confusion, speech or vision problems, needs emergency care, not a clinic appointment.</p>
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
          <h2 className="text-3xl font-bold text-[#1A1A1A] mb-4">Types of Headache We Treat</h2>
          <p className="text-[#5F5F5F] mb-8 max-w-3xl">Not every headache is a migraine. Knowing the type decides the treatment.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {headacheTypes.map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-6 border border-[#EBE6DD] shadow-xs">
                <h3 className="font-bold text-lg text-[#1F5E4B] mb-2">{t.name}</h3>
                <p className="text-[#5F5F5F] leading-relaxed">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Red flags */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto bg-[#FEF2F2] border border-red-200 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4 flex items-center gap-2"><AlertCircle className="w-6 h-6 text-[#B4432F]" /> When Is a Headache an Emergency?</h2>
          <ul className="space-y-2 text-[#3F3F3F]">
            {redFlags.map((r) => <li key={r} className="flex gap-2"><span className="text-[#B4432F] font-bold">•</span>{r}</li>)}
          </ul>
          <p className="mt-4 text-[#3F3F3F]">For any of these, call 998 or go to an emergency department. For headaches that are frequent, changing or not responding to painkillers, book a GP appointment.</p>
        </div>
      </section>

      {/* Treatment */}
      <section className="bg-[#F9F7F2] py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1A1A1A] mb-8">How We Treat Migraines and Headaches at RamaCare</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {treatments.map((t) => (
              <div key={t.title} className="bg-white rounded-2xl p-6 border border-[#EBE6DD] shadow-xs">
                <t.icon className="w-8 h-8 text-[#1F5E4B] mb-3" />
                <h3 className="font-bold text-lg text-[#1A1A1A] mb-2">{t.title}</h3>
                <p className="text-[#5F5F5F] leading-relaxed">{t.text}</p>
              </div>
            ))}
          </div>
          <p className="text-[#5F5F5F] mt-8 max-w-4xl">
            Related care at RamaCare: <Link href="/services/neck-pain-treatment-dubai/" className="text-[#1F5E4B] font-semibold underline">neck pain treatment</Link>, <Link href="/services/dry-needling-dubai/" className="text-[#1F5E4B] font-semibold underline">dry needling</Link>, <Link href="/services/shirodhara-therapy-in-dubai/" className="text-[#1F5E4B] font-semibold underline">Shirodhara</Link>, <Link href="/services/nasya-therapy-dubai/" className="text-[#1F5E4B] font-semibold underline">Nasya therapy</Link>, <Link href="/services/stress-treatment-dubai/" className="text-[#1F5E4B] font-semibold underline">stress treatment</Link> and <Link href="/services/insomnia-treatment-dubai/" className="text-[#1F5E4B] font-semibold underline">insomnia treatment</Link>.
          </p>
        </div>
      </section>

      {/* Children */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-3xl font-bold text-[#1A1A1A] mb-4 flex items-center gap-2"><Baby className="w-7 h-7 text-[#1F5E4B]" /> Headaches in Children</h2>
            <p className="text-[#3F3F3F] leading-relaxed mb-4">Our GP sees children and teenagers with headaches. Migraine is common in children and often shorter than in adults, sometimes with tummy pain or vomiting. Tension headaches, dehydration, skipped meals, poor sleep, screen time and eyesight problems are other common causes.</p>
            <p className="text-[#3F3F3F] leading-relaxed">Bring a short headache diary if you can. Children with warning signs, such as morning vomiting, headaches waking them from sleep, clumsiness or behaviour change, are referred urgently.</p>
          </div>
          <div className="bg-[#F9F7F2] rounded-2xl p-8 border border-[#EBE6DD] shadow-xs">
            <h3 className="text-xl font-bold text-[#1A1A1A] mb-3 flex items-center gap-2"><ClipboardList className="w-6 h-6 text-[#1F5E4B]" /> How to Keep a Headache Diary</h3>
            <ul className="space-y-2 text-[#3F3F3F]">
              {['Date, start time and how long it lasted', 'How bad it was (0 to 10) and where it hurt', 'Other symptoms: nausea, light sensitivity, aura', 'Sleep, meals, water and screen time that day', 'Any medicine taken and whether it helped', 'For women: where you are in your cycle'].map((d) => (
                <li key={d} className="flex gap-2"><CheckCircle className="w-5 h-5 text-[#1F5E4B] flex-none mt-0.5" />{d}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Triggers and prevention */}
      <section className="bg-[#F9F7F2] py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 border border-[#EBE6DD] shadow-xs">
            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">Common Migraine Triggers in Dubai</h2>
            <ul className="space-y-2 text-[#3F3F3F]">{triggers.map((t) => <li key={t} className="flex gap-2"><span className="text-[#1F5E4B] font-bold">•</span>{t}</li>)}</ul>
          </div>
          <div className="bg-white rounded-2xl p-8 border border-[#EBE6DD] shadow-xs">
            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">Tips to Prevent Migraines</h2>
            <ul className="space-y-2 text-[#3F3F3F]">{prevention.map((t) => <li key={t} className="flex gap-2"><CheckCircle className="w-5 h-5 text-[#1F5E4B] flex-none mt-0.5" />{t}</li>)}</ul>
          </div>
        </div>
      </section>

      {/* Quick facts */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto bg-[#F9F7F2] rounded-2xl p-8 border border-[#EBE6DD] shadow-xs">
          <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">Quick Facts: Migraine Care at RamaCare, Jumeirah 1</h2>
          <ul className="grid md:grid-cols-2 gap-x-8 gap-y-2 text-[#3F3F3F]">
            <li>Who treats you: DHA-licensed GP, with physiotherapy and Ayurveda in the same clinic</li>
            <li>Adults and children seen</li>
            <li>Medication suggested or prescribed where appropriate; neurologist referral when needed</li>
            <li>Physiotherapy assessment for neck and tension headaches: AED 200</li>
            <li>Same-day appointments; open every day, 10am to 10pm</li>
            <li>Insurance: pay and claim; we check your coverage</li>
            <li>Address: 12 Al Dhiyafah Road, Jumeirah Terrace Building, Jumeirah 1, Dubai (near Al Satwa)</li>
            <li>Book: 04 286 2006 · WhatsApp 056 659 7878</li>
          </ul>
          <p className="text-[#3F3F3F] mt-4 text-right" lang="ar" dir="rtl">علاج الصداع والصداع النصفي في جميرا 1، دبي: طبيب عام مرخص من هيئة الصحة، للكبار والأطفال، مفتوح يومياً حتى 10 مساءً.</p>
        </div>
      </section>

      {/* Care team */}
      <DoctorsSection
        content={{
          badge: 'Your Care Team',
          title: 'Meet Your GP, Physiotherapist and Ayurveda Doctor',
          description: 'Migraine care at RamaCare is led by our DHA-licensed GP, with physiotherapy for neck and tension headaches and Ayurvedic support in the same clinic.'
        }}
        customDoctors={careTeam}
      />

      {/* FAQ */}
      <section className="bg-white py-16 px-6" id="faq">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1A1A1A] mb-8 text-center">Migraine & Headaches in Jumeirah 1: Common Questions</h2>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <div key={f.question} className="border border-[#EBE6DD] rounded-xl overflow-hidden shadow-xs">
                <button type="button" onClick={() => setOpenFaq(openFaq === i ? null : i)} aria-expanded={openFaq === i}
                  className="w-full flex justify-between items-center gap-4 p-5 text-left font-semibold text-[#1A1A1A] hover:bg-[#F9F7F2]">
                  <span>{f.question}</span>
                  {openFaq === i ? <ChevronUp className="w-5 h-5 flex-none" /> : <ChevronDown className="w-5 h-5 flex-none" />}
                </button>
                <div className={openFaq === i ? 'px-5 pb-5 text-[#5F5F5F] leading-relaxed' : 'hidden'}>{f.answer}</div>
              </div>
            ))}
          </div>
          <p className="text-xs text-[#5F5F5F] mt-8">Medical disclaimer: this page is general information and does not replace a consultation. Treatment depends on your assessment, and no result is guaranteed.</p>
        </div>
      </section>

      <ContentReviewBadge
        doctorName="Dr. Sahar Zomorrodi"
        pageSlug="migraine-treatment-dubai"
        customStatement="This page has been medically reviewed for general information about migraine and headache care. Diagnosis and treatment depend on an individual consultation."
      />

      <div id="book-form">
        <BookConsultation
          content={{
            badge: 'Book Your GP Appointment',
            title: 'Book Migraine & Headache Care in Jumeirah 1',
            description: 'GP appointments for adults and children, with same-day slots when available. Open every day 10am–10pm.',
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
              { title: 'GP-Led', description: 'Adults and Children' },
              { title: 'Same-Day', description: 'Appointments' },
              { title: 'Open Daily', description: '10am – 10pm' }
            ]
          }}
        />
      </div>
    </Layout>
  );
}