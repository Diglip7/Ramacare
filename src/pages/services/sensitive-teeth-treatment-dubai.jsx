import React, { useState, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from '../../../components/Layout';
import ContentReviewBadge from '../../../components/ContentReviewBadge';
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Plus,
  Minus,
  CheckCircle2,
  Phone,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  AlertTriangle,
  Sparkles,
  Droplet,
  TrendingDown,
  Bug,
  Wrench,
  Moon,
  Wine,
  Activity,
  Stethoscope,
  FileSearch,
  ScanLine,
  Utensils,
  Target,
  Layers,
  HeartPulse,
  CircleDot,
  Syringe,
  Salad,
} from 'lucide-react';

/* =====================================================================
   SENSITIVE TEETH TREATMENT DUBAI — original page build. Third distinct
   layout language on the site (editorial/magazine read with in-page
   section nav, definition lists, and accordions) — not the diagonal/bento
   style of the psoriasis page, nor the centered/table/stepper style of
   the tooth pain page. Brand tokens reused for consistency:
     teal   #1F5E4B   dark teal #0F3B2E   gold  #D4A574
     ink    #1A1A1A   muted     #5F5F5F
     cream  #F5F1E8   panel     #F9F7F2
   Headings use font-semibold (not font-black) per feedback that prior
   pages read too heavy.
   ===================================================================== */

const SEO = {
  title: 'Sensitive Teeth Treatment Dubai | RamaCare Polyclinic',
  metaDescription:
    'Living with sharp tooth pain from hot or cold foods? Get expert Sensitive Teeth Treatment Dubai at RamaCare Polyclinic — DHA-licensed dentists. Book today.',
  canonical: 'https://ramacarepolyclinic.ae/services/sensitive-teeth-treatment-dubai/',
  keywords:
    'Sensitive Teeth Treatment Dubai, Tooth Sensitivity Treatment Dubai, Sensitive Teeth Dentist Dubai, Enamel Erosion Treatment Dubai, Gum Recession Treatment Dubai, Sensitive Teeth Specialist Dubai, Family Dental Clinic Dubai',
};

const WHATSAPP_NUMBER = '971566597878';

/* Image slots — filenames/alt text match your SEO image recommendations doc.
   Drop real files into /public/images/ using these exact filenames. */
const IMAGES = {
  hero: { src: '/images/sensitive-teeth-treatment-dubai-hero.jpg', alt: 'Sensitive Teeth Treatment Dubai - patient consulting dentist at RamaCare Polyclinic' },
  causes: { src: '/images/causes-of-tooth-sensitivity-dubai.jpg', alt: 'Illustration showing causes of tooth sensitivity including enamel erosion and gum recession' },
  symptoms: { src: '/images/cold-drink-tooth-sensitivity-dubai.jpg', alt: 'Person experiencing tooth sensitivity while drinking a cold beverage in Dubai' },
  treatment: { src: '/images/fluoride-treatment-sensitive-teeth-dubai.jpg', alt: 'Dentist applying fluoride treatment for sensitive teeth at Dubai clinic' },
  team: { src: '/images/ramacare-polyclinic-team-sensitive-teeth-dubai.jpg', alt: 'Friendly RamaCare Polyclinic dental team providing sensitive teeth care in Dubai' },
};

/* ------------------------------- Data ------------------------------- */

const SECTION_NAV = [
  { id: 'what-are', label: 'What Are Sensitive Teeth?' },
  { id: 'causes', label: 'Common Causes' },
  { id: 'symptoms', label: 'Symptoms' },
  { id: 'when-to-visit', label: 'When to Visit' },
  { id: 'diagnosis', label: 'Diagnosis' },
  { id: 'treatment', label: 'Treatment Options' },
  { id: 'prevention', label: 'Prevention' },
  { id: 'benefits', label: 'Benefits of Early Treatment' },
  { id: 'why-us', label: 'Why Choose Us' },
  { id: 'faq', label: 'FAQ' },
];

const DISTINCTIONS = [
  { name: 'Dentin hypersensitivity', desc: 'The medical term for the short, sharp pain triggered when exposed dentin reacts to a stimulus like cold air or hot liquid.' },
  { name: 'How nerves become exposed', desc: 'Enamel erosion, gum recession, or a crack in the tooth can all expose the dentin layer and, in more advanced cases, the nerve itself.' },
  { name: 'Temporary vs chronic sensitivity', desc: 'Some sensitivity is short-lived, such as after a dental cleaning or whitening treatment, while chronic sensitivity that persists for weeks usually points to an ongoing structural issue.' },
  { name: 'Is tooth sensitivity normal?', desc: 'Occasional mild sensitivity isn\'t unusual, but sensitivity that is frequent, sharp, or worsening is not something to consider "normal" and deserves a professional look.' },
];

const CAUSES = [
  { icon: Droplet, name: 'Enamel Erosion', desc: 'Acidic foods, drinks, and stomach acid exposure can gradually wear down the protective enamel layer.' },
  { icon: TrendingDown, name: 'Gum Recession', desc: 'When gums pull back from the tooth, the root surface becomes exposed, and roots lack the same protective enamel coating as the crown.' },
  { icon: Bug, name: 'Tooth Decay', desc: 'Cavities can expose dentin directly, causing sensitivity alongside other symptoms of decay.' },
  { icon: Wrench, name: 'Worn Fillings', desc: 'Aging or cracked fillings can create gaps where dentin becomes exposed to temperature and pressure.' },
  { icon: Moon, name: 'Teeth Grinding (Bruxism)', desc: 'Chronic grinding wears down enamel over time and can also cause micro-cracks in the tooth structure.' },
  { icon: AlertTriangle, name: 'Cracked Teeth', desc: 'Even a small, hard-to-see crack can expose the inner tooth layers and trigger sharp pain.' },
  { icon: Sparkles, name: 'Recent Teeth Whitening', desc: 'Whitening treatments can cause temporary sensitivity as the peroxide-based gel interacts with the tooth surface.' },
  { icon: Wine, name: 'Acidic Foods and Drinks', desc: 'Citrus fruits, soda, and wine can soften and gradually erode enamel with frequent exposure.' },
  { icon: Activity, name: 'Aggressive Brushing', desc: 'Brushing too hard, or using a hard-bristled toothbrush, can wear away enamel and irritate the gumline.' },
  { icon: HeartPulse, name: 'Gum Disease', desc: 'Periodontal disease can cause gum recession and bone loss, both of which contribute to sensitivity.' },
  { icon: Stethoscope, name: 'Dental Procedures', desc: 'Fillings, crowns, or cleanings can cause short-term sensitivity as the tooth adjusts.' },
];

const SYMPTOMS_TABLE = [
  { trigger: 'Hot foods or drinks', sensation: 'Sudden, sharp discomfort' },
  { trigger: 'Cold drinks or ice', sensation: 'Quick, stinging pain' },
  { trigger: 'Sweet foods', sensation: 'Brief sharp sensitivity' },
  { trigger: 'Cold air', sensation: 'Sudden twinge, especially outdoors' },
  { trigger: 'Brushing', sensation: 'Sharp pain at the gumline' },
  { trigger: 'Flossing', sensation: 'Localized discomfort near exposed roots' },
  { trigger: 'Eating', sensation: 'Discomfort when chewing near an affected tooth' },
  { trigger: 'General trigger exposure', sensation: 'Pain that fades quickly once the stimulus is removed' },
];

const WHEN_TO_VISIT = [
  'Sensitivity that persists for more than a week or two',
  'Severe or worsening pain rather than a brief twinge',
  'Visible swelling of the gums or face',
  'A cracked or chipped tooth',
  'Bleeding gums alongside sensitivity',
  'Difficulty chewing on one side of your mouth',
  'Sudden onset of sensitivity with no clear cause',
  'Sensitivity that develops or worsens after a recent dental procedure',
];

const DIAGNOSIS_STEPS = [
  { icon: Stethoscope, name: 'Dental Examination', desc: 'A visual and physical check of the affected teeth and surrounding gum tissue.' },
  { icon: FileSearch, name: 'Medical & Dental History', desc: 'Reviewing prior treatments, diet, oral hygiene habits, and any recent procedures.' },
  { icon: ScanLine, name: 'Digital X-Rays', desc: "Imaging to rule out decay, cracks, or issues beneath the gumline that aren't visible during a routine exam." },
  { icon: Utensils, name: 'Bite Assessment', desc: 'Checking for uneven pressure or grinding patterns that may be contributing to enamel wear.' },
  { icon: Activity, name: 'Gum Examination', desc: 'Assessing for recession, inflammation, or early signs of gum disease.' },
  { icon: Sparkles, name: 'Enamel Evaluation', desc: 'Identifying visible erosion, thinning, or wear patterns on the tooth surface.' },
  { icon: Target, name: 'Assessment of Exposed Dentin', desc: 'Pinpointing exactly which teeth and surfaces are reacting to stimuli, which helps target treatment precisely.' },
];

const TREATMENTS = [
  { icon: Droplet, name: 'Desensitizing Toothpaste', desc: 'Formulated with compounds that help block the dentin tubules, reducing the transmission of pain signals to the nerve over consistent use.' },
  { icon: Sparkles, name: 'Fluoride Treatment', desc: 'In-clinic fluoride application strengthens weakened enamel and helps re-mineralize areas where the protective surface has thinned. A concentrated fluoride varnish or gel is applied directly to the affected teeth, reducing nerve sensitivity by reinforcing the tooth\'s natural barrier against hot, cold, and sweet triggers.' },
  { icon: Layers, name: 'Dental Bonding', desc: 'When sensitivity is caused by a small area of exposed dentin, root surface, or minor enamel loss, a tooth-coloured composite resin can be bonded over the exposed area. This covers the sensitive spot, blocks the exposed dentin tubules, and restores a smooth, natural-looking tooth surface.' },
  { icon: HeartPulse, name: 'Gum Grafting (If Indicated)', desc: 'For patients with more advanced gum recession, exposed root surfaces may not respond fully to conservative treatment. In these cases, a gum graft can help cover the exposed root, protect it from further recession, and reduce sensitivity at the gumline. This option is only recommended after a full periodontal assessment.' },
  { icon: CircleDot, name: 'Dental Fillings', desc: 'Where sensitivity is linked to decay or a worn, cracked filling, replacing or placing a new filling removes the damaged tissue and seals the tooth, eliminating the pathway through which hot, cold, or sweet stimuli reach the nerve.' },
  { icon: Syringe, name: 'Root Canal Treatment (When Required)', desc: 'In cases where sensitivity has progressed to persistent, lingering pain — often a sign that decay or damage has reached the nerve — root canal treatment may be necessary. This removes the affected nerve tissue and resolves pain that restorative treatments alone cannot address. Root canal treatment is only recommended after diagnostic imaging confirms it is required.' },
  { icon: Moon, name: 'Night Guards for Teeth Grinding', desc: 'For patients whose sensitivity is linked to bruxism, a custom-fitted night guard cushions the teeth during sleep, reducing the pressure and friction that gradually wears down enamel. This helps prevent further sensitivity from developing while protecting existing dental work.' },
  { icon: Activity, name: 'Treatment of Gum Disease', desc: 'When gum disease is contributing to recession and sensitivity, treatment focuses on addressing the underlying infection and inflammation first — through professional cleaning, scaling and root planing, or further periodontal care where needed. Managing gum disease helps stabilize the gumline and prevent sensitivity from worsening.' },
  { icon: Salad, name: 'Lifestyle and Dietary Advice', desc: 'Your dentist may recommend practical adjustments to diet and daily habits, such as reducing frequent exposure to acidic foods and drinks, spacing out consumption of sugary or acidic items, and reviewing brushing technique. These small changes can meaningfully reduce the rate of further enamel wear.' },
  { icon: ShieldCheck, name: 'Personalized Preventive Care', desc: 'Once the underlying cause of sensitivity has been treated, an ongoing preventive plan — tailored to your specific risk factors — helps reduce the likelihood of sensitivity returning. This may include a customized recall schedule, targeted fluoride use, or monitoring of areas prone to recession or wear.' },
];

const PREVENTION_TIPS = [
  'Use a proper brushing technique, with gentle, circular motions rather than aggressive scrubbing',
  'Choose a soft-bristled toothbrush to avoid wearing down enamel and irritating the gumline',
  'Use a fluoride toothpaste to help strengthen enamel over time',
  'Reduce frequent exposure to acidic foods and drinks',
  'Avoid excessive or unsupervised use of whitening products',
  'Attend regular dental checkups so early enamel wear or gum recession can be caught sooner',
  'Wear a night guard if you grind your teeth',
  'Maintain good overall oral hygiene, including regular flossing',
];

const BENEFITS = [
  { name: 'Reduced discomfort', desc: 'Less day-to-day pain when eating, drinking, or breathing in cold air' },
  { name: 'Better oral health', desc: 'Treating the underlying cause protects enamel, gums, and nerve health' },
  { name: 'Prevention of tooth damage', desc: 'Early intervention can stop enamel erosion or gum recession from progressing further' },
  { name: 'Improved eating comfort', desc: 'The ability to enjoy hot and cold foods without hesitation' },
  { name: 'Better quality of life', desc: 'Reduced anxiety around brushing, eating, and everyday activities' },
  { name: 'Lower risk of future complications', desc: 'Preventing sensitivity from progressing into decay, infection, or nerve damage' },
];

const WHY_US = [
  { name: 'DHA-Licensed Dentists', desc: 'Our team is licensed by the Dubai Health Authority, meeting strict clinical and safety standards.' },
  { name: 'Experienced Dental Professionals', desc: 'A team with extensive experience diagnosing and treating tooth sensitivity of all severities, making us a trusted Sensitive Teeth Specialist Dubai option for complex cases.' },
  { name: 'Modern Diagnostic Technology', desc: 'Digital X-rays and thorough clinical assessment tools for accurate evaluation.' },
  { name: 'Personalized Treatment Plans', desc: 'Every plan is built around your specific diagnosis, not a generic protocol.' },
  { name: 'Evidence-Based Care', desc: 'Treatment recommendations grounded in accepted dental practice, not exaggerated promises.' },
  { name: 'Comfortable Patient Experience', desc: 'A calm, reassuring environment for patients who may feel anxious about sensitive teeth.' },
  { name: 'Family-Friendly Clinic', desc: 'As a trusted Family Dental Clinic Dubai, we treat patients of all ages.' },
  { name: 'Convenient Dubai Location', desc: 'Easily accessible for residents across the city.' },
  { name: 'Comprehensive Follow-Up Care', desc: "Ongoing monitoring to ensure sensitivity doesn't return." },
];

const FAQS = [
  { q: 'Why are my teeth suddenly sensitive?', a: 'Sudden sensitivity can result from enamel erosion, gum recession, a new cavity, a cracked tooth, or a recent dental procedure. A dental exam is needed to identify the exact cause.' },
  { q: 'Can tooth sensitivity go away on its own?', a: 'Mild, occasional sensitivity — such as brief discomfort after a dental cleaning — can sometimes settle on its own. However, sensitivity caused by enamel erosion, gum recession, decay, or a cracked tooth will not resolve without treatment, since these underlying causes tend to remain or worsen over time without intervention.' },
  { q: 'Which toothpaste is best for sensitive teeth?', a: 'Desensitizing toothpastes containing compounds such as potassium nitrate or stannous fluoride can help reduce mild sensitivity by blocking the dentin tubules over consistent use. That said, toothpaste alone cannot correct an underlying issue like a cavity, crack, or significant gum recession — a dentist can advise which product is appropriate alongside any other treatment you may need.' },
  { q: 'Is tooth sensitivity a sign of cavities?', a: "It can be, but it isn't always. Sensitivity is one of several possible signs of a cavity, particularly if it's localized to one tooth or worsens when biting down. However, sensitivity is also commonly caused by enamel wear, gum recession, or a cracked tooth, so a dental exam is the only reliable way to confirm the cause." },
  { q: 'Can whitening cause sensitivity?', a: 'Yes, temporary sensitivity is a common and generally expected side effect of teeth whitening, caused by the peroxide-based gel temporarily affecting the tooth surface. This usually settles within a few days. If sensitivity from whitening is severe or doesn\'t improve, it\'s worth having it checked by a dentist.' },
  { q: 'Does gum recession cause sensitivity?', a: "Yes. When gums recede, the root surface of the tooth becomes exposed. Unlike the crown, roots aren't covered by enamel, so they're more vulnerable to temperature and pressure, which is why gum recession is one of the most common causes of tooth sensitivity." },
  { q: 'Do I need a root canal for sensitive teeth?', a: 'Not usually. Most sensitivity is caused by exposed dentin from enamel wear or gum recession and can be managed with more conservative treatments. Root canal treatment is only considered when sensitivity is linked to nerve involvement, typically indicated by persistent, lingering pain rather than a brief reaction to a trigger — and only after a proper examination and imaging confirm this is the cause.' },
  { q: 'Can children develop tooth sensitivity?', a: "Yes, children can experience tooth sensitivity, often linked to early enamel wear, a new cavity, or the eruption of adult teeth. Because the cause can differ from what's typical in adults, it's best evaluated by a dentist experienced in treating younger patients." },
  { q: 'How long does treatment for sensitive teeth take?', a: 'This depends entirely on the cause. Some treatments, like fluoride application or desensitizing toothpaste, can be completed in a single visit with results building over a few weeks. Others, such as gum grafting or root canal treatment, involve a longer process. Your dentist will outline a timeline specific to your diagnosis during your consultation.' },
  { q: 'When should I visit a dentist for sensitive teeth?', a: 'You should book an appointment if sensitivity lasts more than a week or two, feels severe or is worsening, appears alongside swelling or bleeding gums, or develops suddenly without an obvious cause. See the "When Should You Visit a Dentist?" section above for a full list of warning signs.' },
  { q: 'Are acidic foods really that harmful to my teeth?', a: 'Yes. Frequent exposure to acidic foods and drinks — such as citrus fruits, soda, and wine — gradually softens and erodes enamel, which is one of the leading contributors to tooth sensitivity. Occasional consumption is unlikely to cause significant harm, but frequent or prolonged exposure increases the risk of enamel wear over time.' },
  { q: 'Can aggressive brushing cause sensitive teeth?', a: 'Yes. Brushing too hard, or using a hard-bristled toothbrush, can wear down enamel and irritate or recede the gumline, both of which expose dentin and lead to sensitivity. A soft-bristled brush and gentle, circular brushing technique are generally recommended to help prevent this.' },
  { q: 'Is sensitivity after a filling normal?', a: 'Mild sensitivity to hot, cold, or pressure for a few days to a couple of weeks after a filling is common and usually resolves on its own as the tooth settles. If sensitivity is severe, doesn\'t improve after a few weeks, or worsens, it should be checked by your dentist.' },
  { q: 'Can a night guard help with tooth sensitivity?', a: 'Yes, particularly if sensitivity is linked to teeth grinding (bruxism). A custom-fitted night guard reduces the pressure and friction on your teeth during sleep, which helps prevent further enamel wear and protects against sensitivity caused or worsened by grinding.' },
  { q: 'How can I tell if my sensitivity needs urgent attention?', a: 'Sensitivity that comes with visible swelling, facial swelling, severe or throbbing pain, a cracked or chipped tooth, or bleeding gums should be assessed promptly rather than waiting. These signs can point to an infection, fracture, or advancing decay that benefits from timely evaluation.' },
];

const RELATED_LINKS = [
  { label: 'Dental Services Dubai', href: '/services/dental-dubai' },
  { label: 'Tooth Pain Treatment Dubai', href: '/services/tooth-pain-treatment-dubai' },
  { label: 'Root Canal Treatment Dubai', href: '/services/root-canal-treatment-dubai' },
  { label: 'Gum Disease Treatment Dubai', href: '/services/gum-disease-treatment-dubai' },
  { label: 'Teeth Whitening Dubai', href: '/services/teeth-whitening-dubai' },
  { label: 'Composite Veneers Dubai', href: '/services/composite-veneers-dubai' },
  { label: 'General Physician', href: '/services/general-physician-dubai' },
];

/* --------------------------- Small building blocks --------------------------- */

function Eyebrow({ children }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#1F5E4B]/8 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-[#1F5E4B]">
      {children}
    </span>
  );
}

function SectionHeading({ id, eyebrow, title }) {
  return (
    <div className="mb-8 scroll-mt-28" id={id}>
      {eyebrow && <div className="mb-3"><Eyebrow>{eyebrow}</Eyebrow></div>}
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1A1A1A] leading-snug">
        {title}
      </h2>
    </div>
  );
}

/* ================================ PAGE ================================ */

export default function SensitiveTeethTreatmentPage() {
  const [openFaq, setOpenFaq] = useState(0);
  const [openTreatment, setOpenTreatment] = useState(0);
  const diagnosisScrollRef = useRef(null);
  const navScrollRef = useRef(null);

  const scrollDiagnosis = (direction) => {
    const el = diagnosisScrollRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * 280, behavior: 'smooth' });
  };

  const scrollNav = (direction) => {
    const el = navScrollRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * 220, behavior: 'smooth' });
  };

  // Lets desktop users scroll the pill nav sideways with a normal mouse wheel,
  // since it has no vertical content of its own to scroll.
  const handleNavWheel = (e) => {
    const el = navScrollRef.current;
    if (!el) return;
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      e.preventDefault();
      el.scrollLeft += e.deltaY;
    }
  };

  // JSON-LD
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ramacarepolyclinic.ae/' },
      { '@type': 'ListItem', position: 2, name: 'Dental Services', item: 'https://ramacarepolyclinic.ae/services/dental-dubai' },
      { '@type': 'ListItem', position: 3, name: 'Sensitive Teeth Treatment Dubai', item: SEO.canonical },
    ],
  };

  const medicalConditionSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalCondition',
    name: 'Tooth Sensitivity (Dentin Hypersensitivity)',
    signOrSymptom: SYMPTOMS_TABLE.map((s) => ({ '@type': 'MedicalSignOrSymptom', name: s.trigger })),
    riskFactor: CAUSES.map((c) => ({ '@type': 'MedicalRiskFactor', name: c.name })),
    possibleTreatment: TREATMENTS.map((t) => ({
      '@type': 'MedicalTherapy',
      name: t.name,
      description: t.desc,
    })),
  };

  const dentistSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dentist',
    name: 'RamaCare Polyclinic — Dental Services',
    url: SEO.canonical,
    telephone: '+971566597878',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '12 Al Dhiyafah Rd - Jumeirah Terrace Building, Ground Floor, Jumeirah 1',
      addressLocality: 'Dubai',
      addressCountry: 'AE',
    },
  };

  const clinicSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    name: 'RamaCare Polyclinic',
    url: 'https://ramacarepolyclinic.ae/',
    logo: 'https://ramacarepolyclinic.ae/images/Logo.png',
    telephone: '+971566597878',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '12 Al Dhiyafah Rd - Jumeirah Terrace Building, Ground Floor, Jumeirah 1',
      addressLocality: 'Dubai',
      addressCountry: 'AE',
    },
  };

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: SEO.title,
    url: SEO.canonical,
    description: 'Comprehensive guide to tooth sensitivity — causes, symptoms, diagnosis, and treatment options including fluoride treatment, dental bonding, gum grafting, and desensitizing care — at RamaCare Polyclinic, Jumeirah 1, Dubai.',
    medicalAudience: {
      '@type': 'Patient'
    },
    about: {
      '@type': 'MedicalCondition',
      name: 'Dentin Hypersensitivity'
    },
    reviewedBy: {
      '@type': 'Physician',
      name: 'Dr. Hirbod Gilandoust',
      medicalSpecialty: 'Dentistry',
      url: 'https://ramacarepolyclinic.ae/doctors/dr-hirbod-gilandoust-dentist-dubai/'
    },
    publisher: {
      '@type': 'MedicalClinic',
      name: 'RamaCare Polyclinic',
      url: 'https://ramacarepolyclinic.ae/',
      telephone: '+971566597878',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '12 Al Dhiyafah Rd - Jumeirah Terrace Building, Ground Floor',
        addressLocality: 'Jumeirah 1',
        addressRegion: 'Dubai',
        addressCountry: 'AE'
      }
    }
  };

  const physicianSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Physician",
      "name": "Dr. Hirbod Gilandoust",
      "medicalSpecialty": "Esthetic Dentistry & Dental Surgery",
      "url": "https://ramacarepolyclinic.ae/doctors/dr-hirbod-gilandoust-dentist-dubai/",
      "worksFor": {
        "@type": "MedicalClinic",
        "name": "RamaCare Polyclinic"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Physician",
      "name": "Dr. Aparna Balakrishnan",
      "medicalSpecialty": "Cosmetic Dentistry",
      "url": "https://ramacarepolyclinic.ae/doctors/dr-aparna-balakrishnan-cosmetic-dentist-dubai/",
      "worksFor": {
        "@type": "MedicalClinic",
        "name": "RamaCare Polyclinic"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Physician",
      "name": "Soumya Abraham",
      "medicalSpecialty": "DHA Licensed Nurse",
      "url": "https://ramacarepolyclinic.ae/doctors/soumya-abraham-dha-licensed-nurse-dubai/",
      "worksFor": {
        "@type": "MedicalClinic",
        "name": "RamaCare Polyclinic"
      }
    }
  ];

  return (
    <Layout>
      <Head>
        <title>{SEO.title}</title>
        <meta name="description" content={SEO.metaDescription} />
        <meta name="keywords" content={SEO.keywords} />
        <meta name="robots" content="index, follow" key="robots" />
        <link rel="canonical" href={SEO.canonical} key="canonical" />

        {/* Open Graph Tags */}
        <meta property="og:type" content="website" key="og:type" />
        <meta property="og:title" content={SEO.title} key="og:title" />
        <meta property="og:description" content={SEO.metaDescription} key="og:description" />
        <meta property="og:url" content={SEO.canonical} key="og:url" />
        <meta property="og:image" content="https://ramacarepolyclinic.ae/images/sensitive-teeth-treatment-dubai-hero.jpg" key="og:image" />
        <meta property="og:image:width" content="1200" key="og:image:width" />
        <meta property="og:image:height" content="630" key="og:image:height" />
        <meta property="og:site_name" content="RamaCare Polyclinic" key="og:site_name" />
        <meta property="og:locale" content="en_AE" key="og:locale" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content={SEO.title} key="twitter:title" />
        <meta name="twitter:description" content={SEO.metaDescription} key="twitter:description" />
        <meta name="twitter:image" content="https://ramacarepolyclinic.ae/images/sensitive-teeth-treatment-dubai-hero.jpg" key="twitter:image" />

        {/* Structured Data Schemas */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalConditionSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(dentistSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianSchema) }} />
      </Head>

      <div className="bg-white text-[#1A1A1A] antialiased">
        <style jsx global>{`
          .scroll-hide {
            scrollbar-width: none; /* Firefox */
            -ms-overflow-style: none; /* IE / old Edge */
          }
          .scroll-hide::-webkit-scrollbar {
            display: none; /* Chrome, Safari, new Edge */
          }
        `}</style>

        {/* ============================ HERO — Split Layout, Left-aligned ============================ */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#F9F7F2] to-white px-4 pb-16 pt-12 sm:pt-20">
          {/* Decorative background grid and shapes */}
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

          <div className="relative mx-auto max-w-7xl">
            <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm font-medium text-[#5F5F5F]">
              <a href="/" className="hover:text-[#1F5E4B] transition-colors">Home</a>
              <span aria-hidden="true" className="text-gray-300">/</span>
              <a href="/services/dental-dubai" className="hover:text-[#1F5E4B] transition-colors">Dental Services</a>
              <span aria-hidden="true" className="text-gray-300">/</span>
              <span aria-current="page" className="text-[#1F5E4B]">Sensitive Teeth Treatment Dubai</span>
            </nav>

            <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <div className="mb-4">
                  <Eyebrow>DHA-Licensed Dental Care</Eyebrow>
                </div>
                <h1 className="text-3xl font-extrabold leading-tight text-[#1A1A1A] sm:text-5xl tracking-tight">
                  Sensitive Teeth Treatment Dubai
                </h1>
                <p className="mt-6 text-base leading-relaxed text-[#5F5F5F]">
                  If a sip of cold water or a spoonful of ice cream sends a sudden jolt through your
                  teeth, you already know how disruptive tooth sensitivity can be. Searching for
                  reliable Sensitive Teeth Treatment Dubai is often the first step people take once
                  that occasional twinge turns into a daily discomfort that affects what they eat,
                  drink, and even how they brush. Tooth sensitivity is extremely common, but that
                  doesn't mean it should be ignored — persistent sensitivity is frequently a sign of
                  an underlying issue that needs proper evaluation rather than just a change in
                  toothpaste.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-[#5F5F5F]">
                  At RamaCare Polyclinic in Dubai, we see patients regularly who have been managing
                  sensitive teeth for months, sometimes years, without ever finding out why.
                  Sensitivity can stem from something as simple as worn enamel or as significant as a
                  cracked tooth or exposed root surface, and each of these causes calls for a
                  different Tooth Sensitivity Treatment Dubai approach. This guide explains what
                  tooth sensitivity actually is, what typically causes it, when it's time to see a
                  dentist, and the treatment options available so you can understand your symptoms
                  before your visit. Whether you're dealing with mild discomfort or searching for a
                  trusted Sensitive Teeth Dentist Dubai, this page is designed to give you clear,
                  medically accurate information you can rely on.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello RamaCare, I'd like to book a consultation for Sensitive Teeth Treatment Dubai.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#1F5E4B] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#17493B]"
                  >
                    Book a Consultation <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href="tel:+971042862006"
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#1F5E4B]/25 px-6 py-3.5 text-sm font-semibold text-[#1F5E4B] hover:bg-[#F9F7F2]"
                  >
                    <Phone className="h-4 w-4" /> Call Now
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-gray-100 shadow-xl bg-[#F9F7F2]">
                  <Image
                    src={IMAGES.hero.src}
                    alt={IMAGES.hero.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================ IN-PAGE SECTION NAV ============================ */}
        <section className="sticky top-0 z-20 border-y border-gray-100 bg-white/95 backdrop-blur px-4 py-3">
          <div className="mx-auto flex max-w-7xl items-center gap-2">
            <button
              type="button"
              onClick={() => scrollNav(-1)}
              aria-label="Scroll section nav left"
              className="hidden h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-gray-200 text-[#1F5E4B] transition-colors hover:bg-[#F9F7F2] sm:flex"
            >
              <ChevronLeft className="h-3.5 w-3.5" />
            </button>

            <div
              ref={navScrollRef}
              onWheel={handleNavWheel}
              className="flex gap-2 overflow-x-auto scroll-hide"
            >
              {SECTION_NAV.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="flex-shrink-0 rounded-full bg-[#F9F7F2] px-3.5 py-1.5 text-xs font-medium text-[#1A1A1A] hover:bg-[#1F5E4B]/10"
                >
                  {s.label}
                </a>
              ))}
            </div>

            <button
              type="button"
              onClick={() => scrollNav(1)}
              aria-label="Scroll section nav right"
              className="hidden h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-gray-200 text-[#1F5E4B] transition-colors hover:bg-[#F9F7F2] sm:flex"
            >
              <ChevronRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </section>

        {/* ============================ WHAT ARE SENSITIVE TEETH — definition list ============================ */}
        <section className="px-4 py-16">
          <div className="mx-auto max-w-5xl">
            <SectionHeading id="what-are" eyebrow="The Basics" title="What Are Sensitive Teeth?" />
            <p className="text-base leading-relaxed text-[#5F5F5F]">
              Tooth sensitivity, clinically known as dentin hypersensitivity, occurs when the
              protective layers of a tooth — enamel on the crown and cementum on the root — wear
              down or become damaged, exposing the underlying dentin. Dentin contains microscopic
              tubules that lead directly to the tooth's nerve. When these tubules are exposed to
              temperature changes, sweetness, or even air, they transmit a quick, sharp signal to
              the nerve, which is felt as sudden pain.
            </p>
            <p className="mt-4 text-sm font-semibold text-[#1A1A1A]">
              A few important distinctions help explain how sensitivity behaves:
            </p>
            <dl className="mt-4 divide-y divide-gray-100 border-y border-gray-100">
              {DISTINCTIONS.map((d) => (
                <div key={d.name} className="grid gap-1 py-4 sm:grid-cols-[260px_1fr] sm:gap-6">
                  <dt className="text-sm sm:text-base font-bold text-[#1F5E4B]">{d.name}</dt>
                  <dd className="text-sm leading-relaxed text-[#5F5F5F]">{d.desc}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 text-sm leading-relaxed text-[#5F5F5F]">
              Understanding which category your symptoms fall into is a helpful starting point,
              but only a clinical examination can confirm the cause and guide the right Sensitive
              Teeth Treatment Dubai plan for your specific situation.
            </p>
          </div>
        </section>

        {/* ============================ COMMON CAUSES — image + numbered rows ============================ */}
        <section className="bg-[#F9F7F2] px-4 py-16">
          <div className="mx-auto max-w-7xl">
            <SectionHeading id="causes" eyebrow="11 Contributing Factors" title="Common Causes of Tooth Sensitivity" />
            <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-5 lg:sticky lg:top-28">
                <p className="text-base leading-relaxed text-[#5F5F5F]">
                  There isn't a single cause behind sensitive teeth — it's usually the result of
                  one or more contributing factors. Understanding these Tooth Sensitivity Causes
                  can help you and your dentist pinpoint what's happening.
                </p>
                <div className="relative mt-6 aspect-[4/3] w-full overflow-hidden rounded-2xl border border-gray-150 shadow-md bg-white">
                  <Image
                    src={IMAGES.causes.src}
                    alt={IMAGES.causes.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 30vw"
                    className="object-contain"
                  />
                </div>
                <p className="mt-6 text-sm leading-relaxed text-[#5F5F5F]">
                  Because these causes often overlap, self-treating with over-the-counter products
                  alone may mask the discomfort without addressing what's actually happening
                  beneath the surface — which is exactly why professional Sensitive Teeth
                  Treatment Dubai starts with identifying the real cause.
                </p>
              </div>

              <ol className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
                {CAUSES.map((c, i) => {
                  const Icon = c.icon;
                  return (
                    <li key={c.name} className="flex gap-4 rounded-xl bg-white p-4 border border-gray-100 shadow-sm">
                      <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[#1F5E4B]/10 text-xs font-semibold text-[#1F5E4B]">
                        {i + 1}
                      </span>
                      <div>
                        <h4 className="flex items-center gap-2 text-sm sm:text-base font-bold text-[#1A1A1A]">
                          <Icon className="h-4 w-4 text-[#D4A574]" /> {c.name}
                        </h4>
                        <p className="mt-1.5 text-sm leading-relaxed text-[#5F5F5F]">{c.desc}</p>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        </section>

        {/* ============================ SYMPTOMS — minimal lined table + image ============================ */}
        <section className="px-4 py-16">
          <div className="mx-auto max-w-7xl">
            <SectionHeading id="symptoms" eyebrow="Trigger Patterns" title="Symptoms of Sensitive Teeth" />
            <p className="text-base leading-relaxed text-[#5F5F5F]">
              Tooth sensitivity can show up differently from person to person, but most patients
              describe a similar pattern of triggers.
            </p>

            <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-8 overflow-x-auto">
                <table className="w-full border-collapse text-left text-sm">
                  <thead>
                    <tr className="border-b-2 border-[#1F5E4B]">
                      <th className="py-3 pr-4 font-semibold text-[#1A1A1A]">Trigger</th>
                      <th className="py-3 font-semibold text-[#1A1A1A]">Typical Sensation</th>
                    </tr>
                  </thead>
                  <tbody>
                    {SYMPTOMS_TABLE.map((row) => (
                      <tr key={row.trigger} className="border-b border-gray-100">
                        <td className="py-3 pr-4 font-medium text-[#1A1A1A]">{row.trigger}</td>
                        <td className="py-3 text-[#5F5F5F]">{row.sensation}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="lg:col-span-4">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-gray-150 shadow-md">
                  <Image
                    src={IMAGES.symptoms.src}
                    alt={IMAGES.symptoms.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 30vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <p className="mt-6 text-sm leading-relaxed text-[#5F5F5F]">
              This pattern — a quick, sharp reaction that fades soon after the trigger is removed
              — is the hallmark of dentin hypersensitivity, though a dentist should confirm this
              is truly the cause rather than a deeper infection or crack. Identifying your
              specific trigger pattern, whether it's tooth pain from cold foods or discomfort
              while brushing, is often the first clue your dentist uses to shape the right
              Sensitive Teeth Treatment Dubai approach.
            </p>
          </div>
        </section>

        {/* ============================ WHEN TO VISIT — simple checklist + authority note ============================ */}
        <section className="bg-[#0F3B2E] px-4 py-16 text-white">
          <div className="mx-auto max-w-5xl">
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#D4A574]">Know the Signs</span>
            <h2 id="when-to-visit" className="mt-2 scroll-mt-28 text-2xl sm:text-3xl font-bold tracking-tight text-white leading-snug">
              When Should You Visit a Dentist?
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/75">
              Mild, occasional sensitivity can sometimes be managed with an over-the-counter
              desensitizing toothpaste, but certain signs mean it's time to book a professional
              evaluation:
            </p>
            <ul className="mt-6 space-y-2.5">
              {WHEN_TO_VISIT.map((w) => (
                <li key={w} className="flex items-start gap-2.5 text-sm leading-relaxed text-white/90">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#D4A574]" />
                  {w}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-white/75">
              According to general guidance from organizations such as the{' '}
              <a href="https://www.ada.org/" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#D4A574]">
                American Dental Association (ADA)
              </a>{' '}
              and the{' '}
              <a href="https://www.mayoclinic.org/" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#D4A574]">
                Mayo Clinic
              </a>
              , persistent tooth sensitivity should be evaluated by a dentist rather than managed indefinitely with home remedies, since it can sometimes indicate a treatable underlying condition. RamaCare Polyclinic offers timely appointments for patients experiencing any of these warning signs.
            </p>
          </div>
        </section>

        {/* ============================ DIAGNOSIS — horizontal scroll strip ============================ */}
        <section className="px-4 py-16">
          <div className="mx-auto max-w-7xl">
            <SectionHeading id="diagnosis" eyebrow="7-Step Process" title="Diagnosis of Tooth Sensitivity" />
            <p className="text-base leading-relaxed text-[#5F5F5F]">
              An accurate diagnosis is the first step toward effective and lasting relief. At
              RamaCare Polyclinic, our dentists use a structured process to identify exactly
              what's causing your discomfort before recommending treatment.
            </p>

            <div className="relative mt-8">
              <div ref={diagnosisScrollRef} className="flex gap-4 overflow-x-auto scroll-hide pb-4">
                {DIAGNOSIS_STEPS.map((d, i) => {
                  const Icon = d.icon;
                  return (
                    <div key={d.name} className="w-72 flex-shrink-0 rounded-2xl border border-gray-150 p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-2">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#1F5E4B] text-[10px] font-semibold text-white">
                          {i + 1}
                        </span>
                        <Icon className="h-4 w-4 text-[#D4A574]" />
                      </div>
                      <h4 className="mt-3 text-sm sm:text-base font-bold text-[#1A1A1A]">{d.name}</h4>
                      <p className="mt-2 text-sm leading-relaxed text-[#5F5F5F]">{d.desc}</p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => scrollDiagnosis(-1)}
                  aria-label="Scroll diagnosis steps left"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-[#1F5E4B] transition-colors hover:bg-[#F9F7F2]"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => scrollDiagnosis(1)}
                  aria-label="Scroll diagnosis steps right"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-[#1F5E4B] transition-colors hover:bg-[#F9F7F2]"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-[#5F5F5F]">
              This diagnostic process ensures your Sensitive Teeth Treatment Dubai plan addresses
              the actual source of the problem rather than simply masking the symptoms — the
              difference between temporary comfort and lasting dental sensitivity treatment.
            </p>
          </div>
        </section>

        {/* ============================ TREATMENT — accordion ============================ */}
        <section className="bg-[#F9F7F2] px-4 py-16">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              id="treatment"
              eyebrow="Personalized Plans"
              title="Sensitive Teeth Treatment Dubai: Options at RamaCare Polyclinic"
            />

            <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-5">
                <h3 className="text-lg font-bold text-[#1A1A1A]">
                  How RamaCare Personalizes Sensitive Teeth Treatment Dubai Plans
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#5F5F5F]">
                  Treatment for sensitive teeth is never one-size-fits-all — it depends entirely on
                  what's causing the sensitivity in the first place. A patient with mild enamel wear
                  needs a very different approach than someone with gum recession or a cracked tooth.
                  Below is an overview of the treatments most commonly used for effective Sensitive
                  Teeth Treatment Dubai patients can count on.
                </p>

                <div className="relative mt-6 aspect-[4/3] w-full overflow-hidden rounded-2xl border border-gray-150 shadow-md bg-white">
                  <Image
                    src={IMAGES.treatment.src}
                    alt={IMAGES.treatment.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 30vw"
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="divide-y divide-gray-200 rounded-2xl bg-white border border-gray-100 shadow-sm">
                  {TREATMENTS.map((t, idx) => {
                    const Icon = t.icon;
                    const isOpen = openTreatment === idx;
                    return (
                      <div key={t.name}>
                        <button
                          onClick={() => setOpenTreatment(isOpen ? -1 : idx)}
                          className="flex w-full items-center gap-3 px-5 py-4 text-left font-sans"
                        >
                          <Icon className="h-4 w-4 flex-shrink-0 text-[#1F5E4B]" />
                          <span className="flex-1 text-sm sm:text-base font-bold text-[#1A1A1A]">{t.name}</span>
                          {isOpen ? <Minus className="h-4 w-4 text-[#5F5F5F]" /> : <Plus className="h-4 w-4 text-[#5F5F5F]" />}
                        </button>
                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.18 }}
                            >
                              <p className="px-5 pb-4 pl-12 text-sm leading-relaxed text-[#5F5F5F]">{t.desc}</p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <p className="mt-8 text-sm leading-relaxed text-[#5F5F5F] italic">
              Please note: Treatment recommendations vary from patient to patient based on
              clinical findings. The information above is educational and general in nature; only
              a qualified dentist can determine the right treatment plan after an in-person
              examination.
            </p>
          </div>
        </section>

        {/* ============================ PREVENTION + BENEFITS — side by side ============================ */}
        <section className="px-4 py-16">
          <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
            <div>
              <SectionHeading id="prevention" eyebrow="Daily Habits" title="Can Tooth Sensitivity Be Prevented?" />
              <p className="text-sm leading-relaxed text-[#5F5F5F]">
                While not every case of tooth sensitivity is avoidable, many of the most common
                causes can be reduced with consistent daily habits:
              </p>
              <ul className="mt-5 space-y-2.5">
                {PREVENTION_TIPS.map((tip) => (
                  <li key={tip} className="flex items-start gap-2.5 text-sm leading-relaxed text-[#1A1A1A]">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#1F5E4B]" />
                    {tip}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm leading-relaxed text-[#5F5F5F]">
                These habits won't reverse existing damage, but they can meaningfully slow its
                progression and reduce the likelihood of needing more involved Sensitive Teeth
                Treatment Dubai later on.
              </p>
            </div>

            <div>
              <SectionHeading id="benefits" eyebrow="Why Not Wait" title="Benefits of Early Treatment" />
              <p className="text-sm leading-relaxed text-[#5F5F5F]">
                Addressing tooth sensitivity sooner rather than later offers several real
                advantages, and lasting sensitive teeth relief tends to come faster the earlier
                you start:
              </p>
              <ul className="mt-5 space-y-3">
                {BENEFITS.map((b) => (
                  <li key={b.name}>
                    <p className="text-sm sm:text-base font-bold text-[#1A1A1A]">{b.name}</p>
                    <p className="text-sm leading-relaxed text-[#5F5F5F]">{b.desc}</p>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm leading-relaxed text-[#5F5F5F]">
                Early evaluation is one of the simplest ways to avoid more complex and costly
                treatment down the line, and it's the fastest route to lasting Sensitive Teeth
                Treatment Dubai results.
              </p>
            </div>
          </div>
        </section>

        {/* ============================ WHY CHOOSE US — bordered list + image ============================ */}
        <section className="bg-[#F9F7F2] px-4 py-16">
          <div className="mx-auto max-w-7xl">
            <SectionHeading id="why-us" eyebrow="Our Promise" title="Why Choose RamaCare Polyclinic?" />
            <p className="text-base leading-relaxed text-[#5F5F5F]">
              Choosing the right clinic for Sensitive Teeth Treatment Dubai makes a real
              difference in both comfort and long-term results. Here's what sets RamaCare
              Polyclinic apart:
            </p>

            <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-8">
                <ul className="divide-y divide-gray-200 rounded-2xl bg-white border border-gray-100 shadow-sm">
                  {WHY_US.map((w) => (
                    <li key={w.name} className="flex items-start gap-3 px-5 py-4">
                      <ShieldCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#1F5E4B]" />
                      <div>
                        <p className="text-sm sm:text-base font-bold text-[#1A1A1A]">{w.name}</p>
                        <p className="mt-1 text-sm leading-relaxed text-[#5F5F5F]">{w.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-4">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-gray-150 shadow-md bg-white">
                  <Image
                    src={IMAGES.team.src}
                    alt={IMAGES.team.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 30vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <p className="mt-8 text-sm leading-relaxed text-[#5F5F5F]">
              If you're looking for the Best Dentist Dubai for sensitive teeth and lasting relief,
              our team is ready to help you get back to enjoying your favorite foods without
              discomfort.
            </p>
            <p className="mt-3 text-sm font-semibold text-[#1F5E4B]">
              Struggling with sensitive teeth? Book an appointment with RamaCare Polyclinic today
              and get lasting relief.
            </p>
          </div>
        </section>

        <ContentReviewBadge doctorName="Dr. Hirbod Gilandoust" pageSlug="sensitive-teeth-treatment-dubai" />

        {/* ============================ FAQ — simple single-column accordion ============================ */}
        <section className="px-4 py-16">
          <div className="mx-auto max-w-5xl">
            <SectionHeading id="faq" eyebrow="Common Questions" title="Frequently Asked Questions" />
            <p className="text-sm leading-relaxed text-[#5F5F5F]">
              Below are the questions patients most often ask us when researching Sensitive Teeth
              Treatment Dubai before booking a visit.
            </p>

            <div className="mt-6 divide-y divide-gray-100 border-t border-gray-100">
              {FAQS.map((f, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={f.q}>
                    <button
                      onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                      className="flex w-full items-center gap-3 py-4 text-left"
                    >
                      <span className="flex-1 text-sm sm:text-base font-bold text-[#1A1A1A]">
                        {idx + 1}. {f.q}
                      </span>
                      <ChevronDown className={`h-4 w-4 flex-shrink-0 text-[#5F5F5F] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.18 }}
                        >
                          <p className="pb-4 text-sm leading-relaxed text-[#5F5F5F]">{f.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============================ RELATED SERVICES — internal links ============================ */}
        <section className="bg-[#F9F7F2] px-4 py-12">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#5F5F5F]">Related Dental Services</p>
            <div className="mt-4 flex flex-wrap justify-center gap-2.5">
              {RELATED_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="rounded-full border border-[#1F5E4B]/15 bg-white px-3.5 py-1.5 text-xs font-medium text-[#1F5E4B] hover:bg-[#1F5E4B]/5"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ============================ CONCLUSION / CTA — split two-column ============================ */}
        <section id="book" className="px-4 py-16">
          <div className="mx-auto grid max-w-7xl gap-10 rounded-2xl border border-gray-100 p-8 sm:p-10 md:grid-cols-[1.3fr_1fr] md:items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#1F5E4B]/70">Conclusion</span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-[#1A1A1A]">
                Don't Let Sensitive Teeth Limit What You Eat and Drink
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[#5F5F5F]">
                Sensitive teeth are common, but persistent discomfort is never something to simply
                live with. Whether your sensitivity comes from worn enamel, gum recession, a
                cavity, or another cause, an accurate diagnosis is the foundation of effective,
                lasting relief. Professional Sensitive Teeth Treatment Dubai — guided by a proper
                clinical evaluation and a personalized treatment plan — offers a far more reliable
                path forward than trial-and-error with over-the-counter products alone.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#5F5F5F]">
                At RamaCare Polyclinic, our DHA-licensed dental team is here to help you
                understand exactly what's causing your sensitivity and guide you toward the right
                treatment, with clear communication and genuine care at every step.
              </p>
              <p className="mt-3 text-sm font-semibold text-[#1A1A1A]">
                Don't let sensitive teeth limit what you eat and drink. Book your appointment with
                RamaCare Polyclinic today and take the first step toward lasting comfort.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[#5F5F5F] italic">
                This article is intended for general educational purposes and does not replace
                professional dental advice. Treatment recommendations vary based on individual
                diagnosis — please consult a qualified dentist for an accurate assessment of your
                condition.
              </p>
            </div>

            <div className="rounded-xl bg-[#1F5E4B] p-6 text-center">
              <p className="text-sm font-semibold text-white">Ready for lasting relief?</p>
              <div className="mt-5 flex flex-col gap-3">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello RamaCare, I'd like to book an appointment for Sensitive Teeth Treatment Dubai.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#D4A574] px-5 py-3 text-sm font-semibold text-[#0F3B2E]"
                >
                  <MessageCircle className="h-4 w-4" /> Book on WhatsApp
                </a>
                <a
                  href="tel:+971566597878"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
                >
                  <Phone className="h-4 w-4" /> +971 56 659 7878
                </a>
              </div>
            </div>
          </div>
        </section>

      </div>
    </Layout>
  );
}