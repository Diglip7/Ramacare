import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from '../../../components/Layout';
import ContentReviewBadge from '../../../components/ContentReviewBadge';
import {
  Sparkles,
  ShieldCheck,
  Flame,
  Dna,
  CloudRain,
  Cigarette,
  Wine,
  Scale,
  Pill,
  Stethoscope,
  ScanLine,
  FileSearch,
  Microscope,
  SprayCan,
  Sun,
  Syringe,
  FlaskConical,
  Hand,
  Leaf,
  HeartPulse,
  AlertTriangle,
  ChevronDown,
  Phone,
  MessageCircle,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Smile,
  ShieldOff,
  Droplets,
  Salad,
  Ban,
  ClipboardCheck,
  Check,
  HelpCircle,
  Layers,
  Activity,
  ChevronRight,
  UserCheck,
  ExternalLink
} from 'lucide-react';

/* =====================================================================
   PSORIASIS TREATMENT DUBAI — PRECISE CONTENT ALIGNMENT
   Luxury Medical Branding:
     Teal: #1F5E4B   Dark Green: #0F3B2E   Gold: #D4A574
     Cream: #F5F1E8  Off-White/Panel: #F9F7F2
   ===================================================================== */

const SEO = {
  title: 'Psoriasis Treatment Dubai | RamaCare Polyclinic',
  metaDescription: 'Struggling with psoriasis flare-ups? Get expert Psoriasis Treatment Dubai at RamaCare Polyclinic — DHA-licensed dermatologists. Book a consultation today.',
  canonical: 'https://ramacarepolyclinic.ae/services/psoriasis-treatment-dubai/',
  keywords: 'Psoriasis Treatment Dubai, Best Psoriasis Treatment Dubai, Psoriasis Specialist Dubai, Psoriasis Clinic Dubai, Scalp Psoriasis Treatment Dubai, Ayurvedic Psoriasis Treatment Dubai, Psoriasis Dermatologist Dubai',
};

const WHATSAPP_NUMBER = '971566597878';

/* ------------------------------- Global Data Arrays ------------------------------- */

const FAQS = [
  {
    q: 'Is psoriasis curable?',
    a: 'There is currently no permanent cure for psoriasis, as it is a chronic autoimmune condition. However, with the right combination of treatments, most patients achieve significant symptom control and extended periods of remission.'
  },
  {
    q: 'Is psoriasis contagious?',
    a: 'No. Psoriasis is an autoimmune condition, not an infection, so it cannot be spread through skin contact, sharing towels, or close contact with someone who has it.'
  },
  {
    q: 'Can stress trigger psoriasis?',
    a: 'Yes. Stress is one of the most commonly reported triggers for psoriasis flare-ups, and managing stress is often an important part of a treatment plan.'
  },
  {
    q: 'Can psoriasis affect the scalp?',
    a: "Yes, scalp psoriasis is common and can cause flaking, redness, and thick scale buildup. Our scalp psoriasis treatment Dubai protocols are specifically designed to address this area effectively."
  },
  {
    q: 'What foods help psoriasis?',
    a: "While no single diet cures psoriasis, an anti-inflammatory diet rich in vegetables, fruits, whole grains, and omega-3 fatty acids may help some patients reduce flare-up frequency. It's best to discuss dietary changes with your doctor."
  },
  {
    q: 'Does psoriasis return after treatment?',
    a: 'Psoriasis is a chronic condition that tends to cycle between flare-ups and remission. Treatment controls symptoms effectively, but ongoing management is usually needed to maintain results.'
  },
  {
    q: 'Can children develop psoriasis?',
    a: "Yes, though it's less common than in adults. Guttate psoriasis, in particular, can appear in children and young adults, often following a bacterial infection."
  },
  {
    q: 'What treatments work best for psoriasis?',
    a: 'This depends on the type and severity of your condition. Mild cases often respond well to topical treatments, while moderate to severe cases may require phototherapy or systemic medications. A dermatologist can recommend the best plan for you.'
  },
  {
    q: 'How long does psoriasis treatment take to show results?',
    a: 'Topical treatments may show improvement within a few weeks, while phototherapy and systemic treatments can take several weeks to months for full effect. Consistency is key.'
  },
  {
    q: 'When should I see a dermatologist for psoriasis?',
    a: 'If you notice persistent red, scaly patches, unexplained itching, or joint pain alongside skin symptoms, it\'s a good idea to book a consultation rather than self-treat.'
  },
  {
    q: 'Is psoriasis the same as eczema?',
    a: 'No. While both cause red, itchy skin, psoriasis is driven by immune system-related overproduction of skin cells, while eczema is typically linked to skin barrier issues and allergic triggers. A professional diagnosis helps tell them apart.'
  },
  {
    q: 'Can psoriasis cause joint pain?',
    a: 'Yes. Some patients develop psoriatic arthritis, which causes joint pain, stiffness, and swelling alongside skin symptoms. Early evaluation helps prevent joint damage.'
  },
  {
    q: 'Are Ayurvedic treatments effective for psoriasis?',
    a: 'Ayurvedic approaches may offer supportive benefits for some patients when used alongside conventional dermatological care. They are not a substitute for evidence-based treatment but can complement it under professional guidance.'
  },
  {
    q: 'Does diet alone cure psoriasis?',
    a: 'No. Diet can support overall skin health and may help some patients manage flare-ups, but it is not a standalone cure and should be combined with appropriate medical treatment.'
  },
  {
    q: 'Where can I get reliable Psoriasis Treatment Dubai?',
    a: 'RamaCare Polyclinic offers DHA-licensed dermatology care with personalized, evidence-based treatment plans for all types of psoriasis, from mild plaque psoriasis to more complex cases.'
  }
];

const WHY_CHOOSE_TABLE = [
  { offer: 'DHA-Licensed Doctors', details: "Ensures care meets Dubai Health Authority's clinical and safety standards" },
  { offer: 'Experienced Dermatology Team', details: 'Deep familiarity with diagnosing and managing all psoriasis types' },
  { offer: 'Personalized Treatment Plans', details: 'No generic protocols — care is tailored to your skin, triggers, and lifestyle' },
  { offer: 'Modern Facilities', details: 'Equipped for accurate diagnosis and a full range of treatment options' },
  { offer: 'Evidence-Based Care', details: 'Treatment recommendations grounded in current dermatological guidelines' },
  { offer: 'Patient-Centered Approach', details: 'Time to answer questions and address concerns beyond just prescriptions' },
  { offer: 'Convenient Jumeirah 1 Location', details: 'Easily accessible for patients across Dubai' },
  { offer: 'Comprehensive Follow-Up', details: 'Ongoing monitoring to adjust treatment as your skin responds' }
];

/* ------------------------------- Content Sections ------------------------------- */

const HERO_CONTENT = {
  title: "Psoriasis Treatment Dubai",
  paragraphs: [
    "If your skin has been breaking out in red, scaly patches that just won't heal, you're not alone — and you don't have to keep guessing what's wrong. Psoriasis is a long-term autoimmune skin condition that affects millions of people worldwide, and searching for reliable Psoriasis Treatment Dubai is often the first real step toward getting your skin, and your confidence, back. Common symptoms include raised red plaques, silvery scales, itching, dryness, and in some cases joint pain. For many patients, flare-ups affect not just the skin but daily comfort, sleep, self-esteem, and social life.",
    "The good news is that psoriasis, while chronic, is very manageable with the right care. Early diagnosis makes a real difference — it helps control flare-ups before they spread, reduces long-term skin damage, and lowers the risk of related complications such as psoriatic arthritis. At RamaCare Polyclinic in Jumeirah 1, Dubai, our DHA-licensed dermatology team takes a personalized approach to every patient, combining evidence-based dermatology with lifestyle and skincare guidance so your treatment plan actually fits your life — not the other way around.",
    "This guide walks you through everything you need to know about psoriasis: what it is, why it happens, how it's diagnosed, and the full range of treatment options available at our psoriasis clinic Dubai patients trust for consistent, personalized care."
  ]
};

const WHAT_IS_CONTENT = {
  title: "What is Psoriasis?",
  paragraphs: [
    "Psoriasis is a chronic autoimmune condition in which the immune system mistakenly speeds up the skin's natural renewal cycle. Normally, skin cells take about a month to form and shed. In psoriasis, this process can happen in just a few days. The result is a build-up of cells on the skin's surface, forming the thick, scaly patches most people associate with the condition.",
    "Because psoriasis is autoimmune rather than infectious, it is not contagious — you cannot catch it from touching someone or sharing personal items with them. This is one of the most common misconceptions patients ask us about, and it's an important one to clear up, since the visible nature of psoriasis often leads to unnecessary social stigma.",
    "It's also worth distinguishing psoriasis from other common skin conditions. Unlike eczema, which is usually linked to skin barrier dysfunction and allergic triggers, psoriasis is driven by immune system signaling. And unlike a fungal infection, psoriasis will not respond to antifungal creams — using the wrong treatment can actually delay proper care. This is why an accurate diagnosis from a qualified skin specialist Dubai patients can trust is so essential before starting any treatment."
  ]
};

const TYPES_CONTENT = {
  title: "Types of Psoriasis",
  intro: "Psoriasis isn't a single, uniform condition — it shows up differently from person to person. Understanding which type you have is central to building an effective treatment plan.",
  items: [
    {
      name: 'Plaque Psoriasis',
      tag: 'Plaque Psoriasis',
      icon: Layers,
      desc: 'The most common form, appearing as raised, red patches covered with silvery-white scales, typically on the elbows, knees, scalp, and lower back.'
    },
    {
      name: 'Guttate Psoriasis',
      tag: 'Guttate Psoriasis',
      icon: Sparkles,
      desc: 'Appears as small, drop-shaped spots, often triggered by a bacterial infection such as strep throat, and more common in children and young adults.'
    },
    {
      name: 'Inverse Psoriasis',
      tag: 'Inverse Psoriasis',
      icon: Hand,
      desc: 'Develops in skin folds (underarms, groin, under the breasts) as smooth, red, shiny patches without the typical scaling.'
    },
    {
      name: 'Pustular Psoriasis',
      tag: 'Pustular Psoriasis',
      icon: AlertTriangle,
      desc: 'A less common form featuring white, pus-filled blisters surrounded by red skin, which can appear on the hands and feet or more widely across the body.'
    },
    {
      name: 'Erythrodermic Psoriasis',
      tag: 'Erythrodermic Psoriasis',
      icon: Flame,
      desc: 'A rare, severe form that causes widespread redness and shedding of skin over large areas of the body; it requires urgent medical attention.'
    },
    {
      name: 'Scalp Psoriasis',
      tag: 'Scalp Psoriasis',
      icon: ScanLine,
      desc: 'Causes flaking, redness, and thick scaling on the scalp, which can extend to the hairline, forehead, and back of the neck. Many patients search specifically for scalp psoriasis treatment Dubai because this type is often mistaken for severe dandruff.'
    },
    {
      name: 'Nail Psoriasis',
      tag: 'Nail Psoriasis',
      icon: Microscope,
      desc: 'Affects the fingernails and toenails, causing pitting, discoloration, thickening, or separation of the nail from the nail bed.'
    }
  ],
  outro: "Some patients experience more than one type at the same time, which is why a thorough evaluation by a psoriasis specialist Dubai residents can rely on matters more than self-diagnosis."
};

const SYMPTOMS_CONTENT = {
  title: "Symptoms of Psoriasis",
  intro: "Psoriasis symptoms vary in severity but commonly include:",
  items: [
    'Red or discolored patches of skin, often covered with thick, silvery scales',
    'Dry, cracked skin that may bleed',
    'Itching, burning, or soreness around affected areas',
    'Thicked, ridged, or pitted nails',
    'Swollen, stiff joints — a possible sign of psoriatic arthritis',
    'Flare-ups that cycle between active periods and remission'
  ],
  outro: "Symptoms can range from a few small, scaly patches to widespread eruptions covering large areas of the body. If you're noticing any combination of these signs, particularly persistent skin rash treatment Dubai searches often lead patients to realize their “stubborn rash” may actually be psoriasis rather than eczema or a simple skin irritation. Recognizing these symptoms early is exactly why so many patients begin researching Psoriasis Treatment Dubai options before the condition has a chance to spread further."
};

const CAUSES_CONTENT = {
  title: "Causes and Risk Factors",
  intro: "Understanding psoriasis causes is a key part of long-term management. Psoriasis is considered a multifactorial autoimmune skin disease, meaning it typically results from a combination of genetic and environmental factors rather than a single cause.",
  items: [
    { name: 'Genetics', icon: Dna, desc: 'A family history of psoriasis increases your likelihood of developing it.' },
    { name: 'Autoimmune response', icon: ShieldCheck, desc: 'The immune system mistakenly attacks healthy skin cells, accelerating cell turnover.' },
    { name: 'Stress', icon: HeartPulse, desc: 'Emotional or physical stress is one of the most frequently reported flare-up triggers.' },
    { name: 'Skin injury', icon: Flame, desc: 'Cuts, sunburn, or vaccinations can trigger new patches at the site of injury (Koebner phenomenon).' },
    { name: 'Infections', icon: Microscope, desc: 'Particularly streptococcal infections, strongly linked to guttate psoriasis.' },
    { name: 'Smoking', icon: Cigarette, desc: 'Increases both the risk of developing psoriasis and the severity of flare-ups.' },
    { name: 'Alcohol', icon: Wine, desc: 'Can interfere with treatment effectiveness and worsen symptoms.' },
    { name: 'Obesity', icon: Scale, desc: 'Associated with more severe disease and reduced response to some treatments.' },
    { name: 'Weather changes', icon: CloudRain, desc: 'Cold, dry weather tends to worsen symptoms, while sunlight can sometimes help.' },
    { name: 'Certain medications', icon: Pill, desc: 'Including lithium, some blood pressure medications, and antimalarial drugs.' }
  ],
  outro: "Because triggers vary so much between individuals, identifying your personal pattern is a key part of long-term psoriasis management."
};

const WHEN_TO_SEE_CONTENT = {
  title: "When Should You See a Doctor?",
  intro: "Not every patch of dry skin needs a clinic visit, but there are clear signs that it's time to see a dermatologist rather than wait it out:",
  items: [
    'Symptoms that persist for more than a few weeks despite home care',
    'Itching or burning severe enough to disrupt sleep or daily activities',
    'Lesions that are spreading or covering larger areas of the body',
    'New joint pain, stiffness, or swelling, which may indicate psoriatic arthritis',
    'Flare-ups that keep recurring despite over-the-counter treatments',
    'Skin symptoms that are affecting your confidence, work, or social life'
  ],
  outro: "Psoriasis tends to progress unpredictably, and self-treating with the wrong products can sometimes make symptoms worse. Getting a professional evaluation early is one of the most effective ways to bring the condition under control."
};

const DIAGNOSIS_CONTENT = {
  title: "Diagnosis of Psoriasis",
  intro: "Diagnosing psoriasis accurately is the foundation of effective treatment. At RamaCare Polyclinic, our diagnostic approach typically includes:",
  items: [
    { icon: FileSearch, name: 'Medical history review', desc: 'Understanding your symptom timeline, family history, and possible triggers.' },
    { icon: Stethoscope, name: 'Physical examination', desc: 'Assessing the appearance, location, and pattern of skin lesions.' },
    { icon: ScanLine, name: 'Dermoscopy', desc: 'A magnified, non-invasive examination of the skin surface to assess scale and vascular patterns.' },
    { icon: Microscope, name: 'Skin biopsy (if required)', desc: 'In less typical cases, a small skin sample may be examined to confirm diagnosis and rule out other conditions.' },
    { icon: ShieldCheck, name: 'Differential diagnosis', desc: 'Ruling out conditions with similar appearances, such as eczema, fungal infections, or seborrheic dermatitis.' }
  ],
  outro: "This careful, evidence-based process ensures your treatment plan is built around an accurate diagnosis rather than guesswork — a core part of how our psoriasis dermatologist Dubai team practices patient-centered dermatology."
};

const TREATMENTS_CONTENT = {
  title: "Psoriasis Treatment Dubai – Treatment Options at RamaCare Polyclinic",
  intro: "There is no single universal cure for psoriasis, but there are many effective ways to control it — and our dermatology team builds an individualized treatment plan around the type, severity, and location of your symptoms, as well as your lifestyle and treatment preferences. Here's an overview of what modern Psoriasis Treatment Dubai patients can expect at our clinic.",
  items: [
    {
      name: 'Scalp Psoriasis Treatment Dubai',
      icon: ScanLine,
      desc: "Scalp involvement needs a slightly different approach than body plaques, since hair can make applying topical treatment more difficult and scale build-up tends to be thicker. Our scalp psoriasis treatment Dubai protocols typically combine medicated shampoos containing salicylic acid or coal tar with targeted topical solutions, gentle scale-softening techniques, and guidance on hair care habits that won't aggravate the scalp further. For more resistant cases, we may recommend short courses of topical corticosteroids specifically formulated for scalp use."
    },
    {
      name: 'Topical Medications',
      icon: SprayCan,
      desc: 'For mild to moderate psoriasis, topical treatments are often the first line of defense:',
      subItems: [
        { label: 'Corticosteroids', desc: 'Reduce inflammation, redness, and itching in affected areas.' },
        { label: 'Vitamin D analogues', desc: 'Help slow down excessive skin cell production.' },
        { label: 'Calcineurin inhibitors', desc: 'Particularly useful for sensitive areas like the face and skin folds.' },
        { label: 'Coal tar preparations', desc: 'A traditional but still effective option for reducing scaling and itching.' },
        { label: 'Salicylic acid', desc: 'Helps soften and remove thick scales, often used alongside other treatments.' },
        { label: 'Moisturizers and emollients', desc: 'Support the skin barrier and reduce dryness, cracking, and irritation between flare-ups.' }
      ]
    },
    {
      name: 'Phototherapy',
      icon: Sun,
      desc: 'Controlled exposure to specific wavelengths of ultraviolet light can slow skin cell turnover and reduce inflammation. Phototherapy is typically considered for moderate cases that haven\'t responded fully to topical treatment alone, with sessions carefully scheduled and monitored by our clinical team.'
    },
    {
      name: 'Systemic Medications',
      icon: Syringe,
      desc: 'For moderate to severe psoriasis, or cases involving psoriatic arthritis, oral or injectable systemic medications may be recommended. These work throughout the body to reduce immune system overactivity and are prescribed only after a careful risk-benefit discussion.'
    },
    {
      name: 'Biologic Therapy (Overview)',
      icon: FlaskConical,
      desc: 'Biologic medications target specific parts of the immune system involved in psoriasis, representing one of the more advanced options for chronic psoriasis treatment in patients with moderate to severe disease who haven\'t responded well to other therapies. Suitability is assessed case-by-case.'
    },
    {
      name: 'Nail Psoriasis Care',
      icon: Hand,
      desc: 'Nail involvement is treated with a combination of topical therapy, and in some cases, treatments directed at the nail bed itself, alongside guidance on protecting nails from further trauma.'
    },
    {
      name: 'Ayurvedic Supportive Care',
      icon: Leaf,
      desc: 'For patients interested in complementary approaches, our team also offers Ayurvedic psoriasis treatment Dubai options as supportive care alongside conventional dermatology — including herbal formulations and detoxification-focused therapies aimed at reducing inflammation and supporting skin health. These are offered as an adjunct to, not a replacement for, evidence-based dermatological care, as part of a natural psoriasis treatment approach where appropriate.'
    },
    {
      name: 'Lifestyle Counseling',
      icon: HeartPulse,
      desc: 'Because triggers like stress, diet, smoking, and alcohol can significantly affect flare-up frequency, our dermatology team also provides practical lifestyle counseling as part of your overall psoriasis management plan.'
    }
  ],
  outro: "Every plan we build is individualized — what works well for plaque psoriasis on the elbows may not be the right approach for scalp or nail involvement, which is why a proper consultation matters more than following a generic protocol found online."
};

const BENEFITS_CONTENT = {
  title: "Benefits of Early Treatment",
  intro: "Starting treatment as soon as symptoms appear offers real, measurable advantages:",
  items: [
    { name: 'Better symptom control', desc: 'Catching flare-ups early often means they respond faster to treatment.' },
    { name: 'Reduced frequency of flare-ups', desc: 'Consistent management helps extend periods of remission.' },
    { name: 'Improved skin appearance', desc: 'Reduces scaling, redness, and visible plaques over time.' },
    { name: 'Better quality of life', desc: 'Less itching, discomfort, and self-consciousness in daily activities.' },
    { name: 'Reduced risk of complications', desc: 'Including psoriatic arthritis and metabolic conditions associated with uncontrolled psoriasis.' }
  ],
  outro: "Psoriasis management is most effective as an ongoing, proactive process rather than something addressed only during severe flare-ups."
};

const PREVENTION_CONTENT = {
  title: "Prevention & Self-Care Tips",
  intro: "While psoriasis can't always be prevented, these habits can meaningfully reduce flare-up frequency and severity:",
  items: [
    'Moisturize regularly, especially after bathing, to support the skin barrier',
    'Identify and avoid your personal triggers where possible',
    'Practice stress management techniques such as light exercise, breathing exercises, or adequate sleep',
    'Maintain a balanced, anti-inflammatory diet',
    'Avoid smoking',
    'Limit alcohol consumption',
    'Use gentle, fragrance-free skincare products',
    'Practice sensible sun protection, since sunburn can trigger flare-ups',
    'Follow your prescribed treatment plan consistently, even during periods of remission'
  ],
  outro: "Small, consistent habits often make a bigger long-term difference than occasional intensive treatment, and they work best alongside — not instead of — a proper Psoriasis Treatment Dubai plan supervised by a qualified dermatologist."
};

const WHY_CHOOSE_CONTENT = {
  title: "Why Choose RamaCare Polyclinic for Psoriasis Treatment Dubai",
  intro: "Choosing the right clinic matters as much as choosing the right treatment. Here's what sets our approach apart:",
  items: WHY_CHOOSE_TABLE,
  outro: "Whether you're newly diagnosed or have been managing psoriasis for years without lasting relief, our team is here to help you find what actually works for your skin — which is why so many patients consider us the best psoriasis treatment in Dubai for consistent, honest care."
};

const FAQS_CONTENT = {
  title: "Frequently Asked Questions",
  items: FAQS
};

const CONCLUSION_CONTENT = {
  title: "Conclusion",
  paragraphs: [
    "Psoriasis can feel frustrating and unpredictable, but it doesn't have to control your life. With an accurate diagnosis and a treatment plan built around your specific symptoms and triggers, most patients see real, lasting improvement.",
    "At RamaCare Polyclinic, our DHA-licensed dermatology team is committed to offering thoughtful, evidence-based Psoriasis Treatment Dubai patients can trust — from topical therapies and phototherapy to systemic options and supportive Ayurvedic care, all guided by an individualized plan built around you.",
    "As with any medical condition, individual results vary, and the right treatment approach depends on a proper clinical evaluation. If you're dealing with persistent skin symptoms, don't wait for them to get worse. Book a consultation with RamaCare Polyclinic's dermatology team today and take the first step toward clearer, healthier skin."
  ],
  disclaimer: "This article is intended for general educational purposes and does not replace professional medical advice. Please consult a qualified dermatologist for diagnosis and treatment tailored to your individual condition."
};

const IMAGES = {
  hero: { src: '/images/psoriasis-treatment-dubai-hero.jpg', alt: 'Dermatologist consulting patient for Psoriasis Treatment Dubai at RamaCare Polyclinic' },
  types: { src: '/images/types-of-psoriasis-diagram.jpg', alt: 'Diagram illustrating different types of psoriasis including plaque and scalp psoriasis' },
  diagnosis: { src: '/images/psoriasis-diagnosis-dermatologist-dubai.jpg', alt: 'Dermatologist performing skin examination as part of psoriasis diagnosis in Dubai' },
  treatment: { src: '/images/scalp-psoriasis-treatment-dubai-clinic.jpg', alt: 'Scalp psoriasis treatment Dubai session at RamaCare Polyclinic dermatology clinic' },
  team: { src: '/images/ramacare-polyclinic-dermatology-team-dubai.jpg', alt: 'RamaCare Polyclinic DHA-licensed dermatology team in Dubai' },
};

/* --------------------------- Helper Subcomponents --------------------------- */

function SectionTag({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-[#1F5E4B]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#1F5E4B]">
      {children}
    </span>
  );
}

/* ================================ MAIN COMPONENT ================================ */

export default function PsoriasisTreatmentPage() {
  const [activeType, setActiveType] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hello RamaCare, I'd like to book a consultation for Psoriasis Treatment Dubai.");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  /* ------------------- Structured Data Schemas ------------------- */
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const medicalConditionSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalWebPage',
        '@id': 'https://ramacarepolyclinic.ae/services/psoriasis-treatment-dubai/#webpage',
        url: 'https://ramacarepolyclinic.ae/services/psoriasis-treatment-dubai/',
        name: 'Psoriasis Treatment Dubai | RamaCare Polyclinic',
        description: 'Struggling with psoriasis flare-ups? Get expert Psoriasis Treatment Dubai at RamaCare Polyclinic — DHA-licensed dermatologists. Book a consultation today.',
        medicalAudience: {
          '@type': 'MedicalAudience',
          audienceType: 'Patient'
        },
        about: {
          '@id': 'https://ramacarepolyclinic.ae/services/psoriasis-treatment-dubai/#condition'
        },
        lastReviewed: '2026-07-14',
        reviewedBy: {
          '@type': 'Physician',
          name: 'RamaCare Polyclinic Dermatology Team',
          medicalSpecialty: 'Dermatology'
        },
        publisher: {
          '@id': 'https://ramacarepolyclinic.ae/#organization'
        }
      },
      {
        '@type': 'MedicalCondition',
        '@id': 'https://ramacarepolyclinic.ae/services/psoriasis-treatment-dubai/#condition',
        name: 'Psoriasis',
        alternateName: TYPES_CONTENT.items.map((t) => t.name),
        description: 'A chronic autoimmune skin condition in which accelerated skin cell turnover leads to red, scaly patches, most commonly on the elbows, knees, scalp, and lower back.',
        signOrSymptom: SYMPTOMS_CONTENT.items.map((s) => ({ '@type': 'MedicalSignOrSymptom', name: s })),
        riskFactor: CAUSES_CONTENT.items.map((c) => ({ '@type': 'MedicalRiskFactor', name: c.name })),
        possibleTreatment: TREATMENTS_CONTENT.items.map((t) => ({
          '@type': 'MedicalTherapy',
          name: t.name,
          description: t.desc
        }))
      },
      {
        '@type': ['MedicalClinic', 'Organization'],
        '@id': 'https://ramacarepolyclinic.ae/#organization',
        name: 'RamaCare Polyclinic',
        url: 'https://ramacarepolyclinic.ae',
        medicalSpecialty: 'Dermatology',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Jumeirah 1',
          addressLocality: 'Dubai',
          addressCountry: 'AE'
        },
        isAcceptingNewPatients: true
      },
      {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://ramacarepolyclinic.ae/'
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Dermatology',
            item: 'https://ramacarepolyclinic.ae/services/aesthetic-dermatology-dubai/'
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Psoriasis Treatment Dubai',
            item: 'https://ramacarepolyclinic.ae/services/psoriasis-treatment-dubai/'
          }
        ]
      }
    ]
  };

  return (
    <Layout>
      <Head>
        <title>{SEO.title}</title>
        <meta name="description" content={SEO.metaDescription} />
        <meta name="keywords" content={SEO.keywords} />
        <link rel="canonical" href={SEO.canonical} />
        <meta property="og:title" content={SEO.title} />
        <meta property="og:description" content={SEO.metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={SEO.canonical} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalConditionSchema) }} />
      </Head>

      <div className="bg-white text-[#1A1A1A] antialiased">
        
        {/* ========================================== */}
        {/* 1. HERO — Split Layout, Clean Brief Content */}
        {/* ========================================== */}
        <section className="relative overflow-hidden bg-[#0F3B2E] py-20 lg:py-28 text-white">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#0F3B2E] via-[#1F5E4B] to-[#0F3B2E]" />
          <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[#D4A574]/15 blur-3xl" />
          <div className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-white/5 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/80">
              <Link href="/" className="hover:text-[#D4A574] transition-colors">Home</Link>
              <span className="text-white/40">/</span>
              <Link href="/services/aesthetic-dermatology-dubai" className="hover:text-[#D4A574] transition-colors">Dermatology</Link>
              <span className="text-white/40">/</span>
              <span aria-current="page" className="text-white">Psoriasis Treatment Dubai</span>
            </nav>

            <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <h1 className="text-4xl font-black leading-[1.1] text-white sm:text-5xl lg:text-[3.5rem] tracking-tight">
                  {HERO_CONTENT.title}
                </h1>
                
                {/* Full Introductory Paragraphs */}
                <div className="mt-8 space-y-5 text-base leading-relaxed text-white/80 max-w-2xl">
                  <p>
                    {HERO_CONTENT.paragraphs[0]}
                  </p>
                  <p>
                    {HERO_CONTENT.paragraphs[1]}
                  </p>
                  <p className="border-l-2 border-[#D4A574] pl-4 italic text-white/90">
                    {HERO_CONTENT.paragraphs[2]}
                  </p>
                </div>

                <div className="mt-10 flex flex-wrap gap-4">
                  <button
                    onClick={handleWhatsApp}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D4A574] hover:bg-[#c29668] px-8 py-4 text-sm font-bold uppercase tracking-wide text-[#0F3B2E] shadow-lg transition-all transform hover:-translate-y-0.5"
                  >
                    <MessageCircle className="h-5 w-5" /> Book Consultation
                  </button>
                  <a
                    href="tel:+971042862006"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition-all"
                  >
                    <Phone className="h-4 w-4" /> Call Now
                  </a>
                </div>
              </div>

              {/* Hero Image */}
              <div className="lg:col-span-5">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-white/10 shadow-2xl bg-white/5">
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

        {/* ============================================== */}
        {/* 2. WHAT IS PSORIASIS — Detailed Editorial Copy */}
        {/* ============================================== */}
        <section className="bg-white py-20 px-4">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black text-[#1A1A1A] sm:text-4xl">{WHAT_IS_CONTENT.title}</h2>
            </div>
            
            <div className="space-y-6 text-base leading-relaxed text-[#5F5F5F]">
              <p>{WHAT_IS_CONTENT.paragraphs[0]}</p>
              
              <div className="my-8 flex items-start gap-4 rounded-2xl bg-[#F9F7F2] border-l-4 border-[#1F5E4B] p-6 shadow-sm">
                <ShieldCheck className="h-6 w-6 flex-shrink-0 text-[#1F5E4B] mt-1" />
                <div>
                  <p className="text-sm leading-relaxed text-[#5F5F5F]">{WHAT_IS_CONTENT.paragraphs[1]}</p>
                </div>
              </div>

              <p>{WHAT_IS_CONTENT.paragraphs[2]}</p>
            </div>
          </div>
        </section>

        {/* ============================================== */}
        {/* 3. TYPES OF PSORIASIS — Interactive Selector  */}
        {/* ============================================== */}
        <section className="bg-[#F5F1E8] py-20 px-4">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="text-3xl font-black text-[#1A1A1A] sm:text-4xl">{TYPES_CONTENT.title}</h2>
              <p className="mt-4 text-base text-[#5F5F5F]">
                {TYPES_CONTENT.intro}
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-12">
              {/* Type Selectors */}
              <div className="flex flex-col gap-2.5 lg:col-span-5">
                {TYPES_CONTENT.items.map((t, idx) => {
                  const IconComp = t.icon;
                  const active = activeType === idx;
                  return (
                    <button
                      key={t.name}
                      onClick={() => setActiveType(idx)}
                      className={`flex items-center gap-4 rounded-2xl border px-5 py-4 text-left transition-all ${
                        active
                          ? 'border-[#1F5E4B] bg-[#1F5E4B] text-white shadow-md'
                          : 'border-gray-200 bg-white text-[#1A1A1A] hover:border-[#1F5E4B]/40'
                      }`}
                    >
                      <span className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl ${active ? 'bg-white/10 text-[#D4A574]' : 'bg-[#1F5E4B]/10 text-[#1F5E4B]'}`}>
                        <IconComp className="h-5 w-5" />
                      </span>
                      <div>
                        <span className="block text-sm font-bold">{t.name}</span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Detail Panel */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                {/* Section Diagram */}
                <div className="relative mb-4 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-gray-200">
                  <Image
                    src={IMAGES.types.src}
                    alt={IMAGES.types.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    className="object-cover"
                  />
                </div>

                <div className="rounded-2xl bg-white p-5 sm:p-6 shadow-sm border border-gray-100 flex-grow flex flex-col justify-center">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeType}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <h3 className="text-2xl font-black text-[#1A1A1A] mb-4">
                        {TYPES_CONTENT.items[activeType].name}
                      </h3>
                      <p className="text-base leading-relaxed text-[#5F5F5F]">
                        {TYPES_CONTENT.items[activeType].desc}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>

            <p className="text-center text-sm text-[#5F5F5F] italic mt-10 max-w-2xl mx-auto">
              {TYPES_CONTENT.outro}
            </p>
          </div>
        </section>

        {/* ============================================== */}
        {/* 4. SYMPTOMS — Checklist + Outro               */}
        {/* ============================================== */}
        <section className="bg-white py-20 px-4">
          <div className="mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black text-[#1A1A1A] sm:text-4xl">{SYMPTOMS_CONTENT.title}</h2>
              <p className="mt-4 text-base text-[#5F5F5F] max-w-xl mx-auto">
                {SYMPTOMS_CONTENT.intro}
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {SYMPTOMS_CONTENT.items.map((s, idx) => (
                <div key={idx} className="flex gap-3 bg-[#F9F7F2] p-5 rounded-2xl border border-gray-100">
                  <Check className="h-5 w-5 text-[#1F5E4B] flex-shrink-0 mt-0.5" />
                  <span className="text-sm font-semibold leading-relaxed text-[#1A1A1A]">{s}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-[#F5F1E8] rounded-2xl p-6 sm:p-8 border border-gray-250">
              <p className="text-sm leading-relaxed text-[#5F5F5F]">
                {SYMPTOMS_CONTENT.outro}
              </p>
            </div>
          </div>
        </section>

        {/* ============================================== */}
        {/* 5. CAUSES & RISK FACTORS                       */}
        {/* ============================================== */}
        <section className="bg-[#F5F1E8] py-20 px-4">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black text-[#1A1A1A] sm:text-4xl">{CAUSES_CONTENT.title}</h2>
              <p className="mt-4 text-base text-[#5F5F5F] max-w-2xl mx-auto">
                {CAUSES_CONTENT.intro}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
              {CAUSES_CONTENT.items.map((c) => {
                const IconComp = c.icon;
                return (
                  <div key={c.name} className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm border border-gray-100">
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[#1F5E4B]/10 text-[#1F5E4B]">
                      <IconComp className="h-5 w-5" />
                    </span>
                    <div>
                      <h4 className="text-base font-bold text-[#1A1A1A]">{c.name}</h4>
                      <p className="mt-1.5 text-sm leading-relaxed text-[#5F5F5F]">{c.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 text-center text-sm text-[#5F5F5F] italic max-w-xl mx-auto">
              {CAUSES_CONTENT.outro}
            </div>
          </div>
        </section>

        {/* ============================================== */}
        {/* 6. WHEN SHOULD YOU SEE A DOCTOR — alert card   */}
        {/* ============================================== */}
        <section className="bg-[#0F3B2E] py-20 px-4 text-white">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-10">
              <AlertTriangle className="mx-auto h-12 w-12 text-[#D4A574] mb-3" />
              <h2 className="text-3xl font-black">{WHEN_TO_SEE_CONTENT.title}</h2>
              <p className="mt-3 text-white/70 text-base max-w-2xl mx-auto">
                {WHEN_TO_SEE_CONTENT.intro}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {WHEN_TO_SEE_CONTENT.items.map((f, idx) => (
                <div key={idx} className="flex items-start gap-3 rounded-2xl bg-white/5 p-4 border border-white/10">
                  <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-[#D4A574]" />
                  <span className="text-sm leading-relaxed text-white/90">{f}</span>
                </div>
              ))}
            </div>

            <p className="text-center text-sm text-white/60 mt-10 leading-relaxed max-w-xl mx-auto">
              {WHEN_TO_SEE_CONTENT.outro}
            </p>
          </div>
        </section>

        {/* ============================================== */}
        {/* 7. DIAGNOSIS — connected timeline               */}
        {/* ============================================== */}
        <section className="bg-white py-20 px-4">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-black text-[#1A1A1A] sm:text-4xl">{DIAGNOSIS_CONTENT.title}</h2>
              <p className="mt-4 text-base text-[#5F5F5F] max-w-xl mx-auto">
                {DIAGNOSIS_CONTENT.intro}
              </p>
            </div>

            <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7 relative pl-8 border-l-2 border-[#1F5E4B]/20 space-y-8">
                {DIAGNOSIS_CONTENT.items.map((step, idx) => {
                  const Icon = step.icon;
                  return (
                    <div key={idx} className="relative">
                      {/* Timeline dot */}
                      <span className="absolute -left-[41px] top-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#1F5E4B] text-white text-xs font-bold">
                        <Icon className="h-3 w-3" />
                      </span>
                      <h4 className="text-base font-bold text-[#1A1A1A]">{step.name}</h4>
                      <p className="mt-1 text-sm leading-relaxed text-[#5F5F5F]">{step.desc}</p>
                    </div>
                  );
                })}
              </div>

              <div className="lg:col-span-5">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-gray-150 shadow-sm">
                  <Image
                    src={IMAGES.diagnosis.src}
                    alt={IMAGES.diagnosis.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 35vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <p className="text-center text-sm text-[#5F5F5F] italic mt-12 max-w-2xl mx-auto">
              {DIAGNOSIS_CONTENT.outro}
            </p>
          </div>
        </section>

        {/* ============================================== */}
        {/* 8. TREATMENT OPTIONS — detailed overview      */}
        {/* ============================================== */}
        <section className="bg-[#F5F1E8] py-20 px-4">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <h2 className="text-3xl font-black text-[#1A1A1A] sm:text-4xl">{TREATMENTS_CONTENT.title}</h2>
              <p className="mt-4 text-base text-[#5F5F5F] leading-relaxed max-w-2xl mx-auto">
                {TREATMENTS_CONTENT.intro}
              </p>
            </div>

            {/* Treatment visual */}
            <div className="relative mb-12 aspect-[21/8] w-full overflow-hidden rounded-3xl shadow-md border border-gray-250">
              <Image
                src={IMAGES.treatment.src}
                alt={IMAGES.treatment.alt}
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {TREATMENTS_CONTENT.items.map((t, idx) => {
                const Icon = t.icon;
                return (
                  <div key={idx} className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-150 flex flex-col gap-4">
                    <div className="flex items-center gap-3.5">
                      <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#1F5E4B]/10 text-[#1F5E4B]">
                        <Icon className="h-5 w-5" />
                      </span>
                      <h3 className="text-lg font-bold text-[#1A1A1A]">{t.name}</h3>
                    </div>
                    <p className="text-sm leading-relaxed text-[#5F5F5F]">{t.desc}</p>
                    
                    {/* Nested bullet points for Topical Medications */}
                    {t.subItems && (
                      <div className="mt-2 grid gap-3 bg-[#F9F7F2] p-5 rounded-2xl border border-gray-100">
                        {t.subItems.map((sub, subIdx) => (
                          <div key={subIdx} className="flex gap-2 text-xs leading-relaxed text-[#5F5F5F]">
                            <span className="font-bold text-[#1F5E4B] flex-shrink-0 mt-0.5">•</span>
                            <p>
                              <strong className="text-[#1A1A1A]">{sub.label}</strong> — {sub.desc}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 text-center max-w-3xl mx-auto">
              <p className="text-sm leading-relaxed text-[#5F5F5F]">
                {TREATMENTS_CONTENT.outro}
              </p>
            </div>
          </div>
        </section>

        {/* ============================================== */}
        {/* 9. BENEFITS OF EARLY TREATMENT                 */}
        {/* ============================================== */}
        <section className="bg-white py-20 px-4">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black text-[#1A1A1A] sm:text-4xl">{BENEFITS_CONTENT.title}</h2>
              <p className="mt-4 text-base text-[#5F5F5F] max-w-xl mx-auto">
                {BENEFITS_CONTENT.intro}
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {BENEFITS_CONTENT.items.map((b, idx) => (
                <div key={idx} className="rounded-2xl border border-gray-100 p-6 text-center shadow-sm bg-[#F9F7F2] flex flex-col justify-between">
                  <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-2xl bg-[#D4A574]/15 text-[#D4A574] mb-4">
                    <TrendingUp className="h-5 w-5" />
                  </div>
                  <h4 className="text-sm font-bold text-[#1A1A1A] mb-2">{b.name}</h4>
                  <p className="text-xs leading-relaxed text-[#5F5F5F]">{b.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-center text-sm text-[#5F5F5F] italic mt-12 max-w-2xl mx-auto">
              {BENEFITS_CONTENT.outro}
            </p>
          </div>
        </section>

        {/* ============================================== */}
        {/* 10. PREVENTIONS & SELF-CARE TIPS               */}
        {/* ============================================== */}
        <section className="bg-[#F5F1E8] py-20 px-4">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black text-[#1A1A1A] sm:text-4xl">{PREVENTION_CONTENT.title}</h2>
              <p className="mt-4 text-base text-[#5F5F5F] max-w-xl mx-auto">
                {PREVENTION_CONTENT.intro}
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-1 md:grid-cols-2">
              {PREVENTION_CONTENT.items.map((tip, idx) => (
                <div key={idx} className="flex items-center gap-3.5 rounded-2xl bg-white p-4 shadow-sm border border-gray-150">
                  <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[#1F5E4B]/10 text-[#1F5E4B]">
                    <Check className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-semibold text-[#1A1A1A]">{tip}</span>
                </div>
              ))}
            </div>

            <p className="text-center text-sm text-[#5F5F5F] mt-10 leading-relaxed max-w-2xl mx-auto border-t border-gray-250 pt-6">
              {PREVENTION_CONTENT.outro}
            </p>
          </div>
        </section>

        {/* ============================================== */}
        {/* 11. WHY CHOOSE RAMACARE — full table compare  */}
        {/* ============================================== */}
        <section className="bg-white py-20 px-4">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black text-[#1A1A1A] sm:text-4xl">{WHY_CHOOSE_CONTENT.title}</h2>
              <p className="mt-4 text-base text-[#5F5F5F] max-w-xl mx-auto">
                {WHY_CHOOSE_CONTENT.intro}
              </p>
            </div>

            <div className="relative mb-12 aspect-[21/8] w-full overflow-hidden rounded-3xl border border-gray-200 shadow-sm">
              <Image
                src={IMAGES.team.src}
                alt={IMAGES.team.alt}
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>

            {/* Offer/Table Ledger */}
            <div className="border border-gray-200 rounded-3xl overflow-hidden shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] bg-[#1F5E4B] text-white text-xs font-bold uppercase tracking-wider px-6 py-4 border-b border-[#1F5E4B]/20">
                <span>What We Offer</span>
                <span className="hidden md:block">Why It Matters</span>
              </div>
              <div className="divide-y divide-gray-150">
                {WHY_CHOOSE_CONTENT.items.map((row, idx) => (
                  <div key={idx} className={`grid grid-cols-1 md:grid-cols-[2fr_3fr] px-6 py-4 gap-2 text-sm ${idx % 2 === 0 ? 'bg-[#F9F7F2]' : 'bg-white'}`}>
                    <div className="font-bold text-[#1A1A1A] flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#1F5E4B] flex-shrink-0" />
                      {row.offer}
                    </div>
                    <div className="text-[#5F5F5F] pl-6 md:pl-0">{row.details}</div>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-center text-sm text-[#5F5F5F] leading-relaxed mt-10 max-w-3xl mx-auto">
              {WHY_CHOOSE_CONTENT.outro}
            </p>
          </div>
        </section>

        {/* ============================================== */}
        {/* 12. FAQ — complete 15 items accordion          */}
        {/* ============================================== */}
        <section className="bg-[#F5F1E8] py-20 px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-black text-[#1A1A1A] sm:text-4xl">{FAQS_CONTENT.title}</h2>
            </div>
            
            <div className="space-y-3">
              {FAQS_CONTENT.items.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={idx} className="overflow-hidden rounded-2xl bg-white shadow-sm border border-gray-200">
                    <button
                      onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                      className="flex w-full items-center gap-4 p-5 text-left transition-colors hover:bg-gray-50"
                    >
                      <span className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-xs font-black ${isOpen ? 'bg-[#1F5E4B] text-white' : 'bg-[#1F5E4B]/10 text-[#1F5E4B]'}`}>
                        {idx + 1}
                      </span>
                      <span className="flex-1 text-sm font-bold text-[#1A1A1A] sm:text-base">{faq.q}</span>
                      <ChevronDown className={`h-5 w-5 flex-shrink-0 text-[#5F5F5F] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <p className="border-t border-gray-100 px-5 pb-5 pt-3 pl-[3.25rem] text-sm leading-relaxed text-[#5F5F5F]">
                            {faq.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============================================== */}
        {/* 13. CONCLUSION SECTION                         */}
        {/* ============================================== */}
        
        <section className="bg-white py-20 px-4 text-center">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-black text-[#1A1A1A] sm:text-4xl mb-8">{CONCLUSION_CONTENT.title}</h2>
            
            <div className="space-y-6 text-base leading-relaxed text-[#5F5F5F] text-left">
              <p>{CONCLUSION_CONTENT.paragraphs[0]}</p>
              <p>{CONCLUSION_CONTENT.paragraphs[1]}</p>
              <p className="font-medium text-[#1A1A1A]">{CONCLUSION_CONTENT.paragraphs[2]}</p>
            </div>

            <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
              <button
                onClick={handleWhatsApp}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1F5E4B] hover:bg-[#164436] text-white px-8 py-4 text-sm font-bold uppercase tracking-wide shadow-xl transition-all"
              >
                <MessageCircle className="h-5 w-5" /> Book on WhatsApp
              </button>
              <a
                href="tel:+971042862006"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-250 hover:bg-gray-50 px-8 py-4 text-sm font-bold uppercase tracking-wide text-[#1A1A1A] transition-all"
              >
                <Phone className="h-4 w-4" /> Call Now
              </a>
            </div>

            <div className="mx-auto mt-12 h-px w-16 bg-gray-200" />
            <p className="mx-auto mt-6 max-w-lg text-xs italic text-gray-400 leading-relaxed text-left border-l-2 border-gray-200 pl-4">
              {CONCLUSION_CONTENT.disclaimer}
            </p>
          </div>
        </section>

        {/* ============================================== */}
        {/* 14. FOOTER CREDITS & INTERNAL LINK MAP          */}
        {/* ============================================== */}
        {/* ============================================== */}
        {/* 14. CLINICAL RESOURCES & RELATED SERVICES      */}
        {/* ============================================== */}
        <footer className="bg-[#F9F7F2] py-16 px-4 border-t border-gray-200">
          <div className="mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-12 gap-12">
              {/* Related Services Column */}
              <div className="lg:col-span-6 space-y-6">
                <h4 className="text-lg font-bold text-[#0F3B2E] mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-[#D4A574] rounded-full inline-block"></span>
                  Related Services & Care
                </h4>
                <p className="text-sm text-[#5F5F5F] mb-4">
                  Explore other dermatology and skin health services at RamaCare Polyclinic that may complement your psoriasis care:
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  <Link href="/services/aesthetic-dermatology-dubai/" className="text-sm text-[#5F5F5F] hover:text-[#1F5E4B] flex items-center gap-1.5 transition-colors font-medium">
                    <ChevronRight className="w-3.5 h-3.5 text-[#D4A574]" /> Dermatology Services
                  </Link>
                  <Link href="/services/hair-loss-dubai/" className="text-sm text-[#5F5F5F] hover:text-[#1F5E4B] flex items-center gap-1.5 transition-colors font-medium">
                    <ChevronRight className="w-3.5 h-3.5 text-[#D4A574]" /> Hair Loss Treatment
                  </Link>
                  <Link href="/services/acne-treatment-dubai/" className="text-sm text-[#5F5F5F] hover:text-[#1F5E4B] flex items-center gap-1.5 transition-colors font-medium">
                    <ChevronRight className="w-3.5 h-3.5 text-[#D4A574]" /> Acne Treatment
                  </Link>
                  <Link href="/services/eczema-treatment-dubai/" className="text-sm text-[#5F5F5F] hover:text-[#1F5E4B] flex items-center gap-1.5 transition-colors font-medium">
                    <ChevronRight className="w-3.5 h-3.5 text-[#D4A574]" /> Eczema Treatment
                  </Link>
                  <Link href="/services/rosacea-treatment-dubai/" className="text-sm text-[#5F5F5F] hover:text-[#1F5E4B] flex items-center gap-1.5 transition-colors font-medium">
                    <ChevronRight className="w-3.5 h-3.5 text-[#D4A574]" /> Rosacea Treatment
                  </Link>
                  <Link href="/services/melasma-treatment-dubai/" className="text-sm text-[#5F5F5F] hover:text-[#1F5E4B] flex items-center gap-1.5 transition-colors font-medium">
                    <ChevronRight className="w-3.5 h-3.5 text-[#D4A574]" /> Melasma Treatment
                  </Link>
                  <Link href="/services/general-physician-dubai/" className="text-sm text-[#5F5F5F] hover:text-[#1F5E4B] flex items-center gap-1.5 transition-colors font-medium">
                    <ChevronRight className="w-3.5 h-3.5 text-[#D4A574]" /> General Physician
                  </Link>
                  <Link href="/about-us/" className="text-sm text-[#5F5F5F] hover:text-[#1F5E4B] flex items-center gap-1.5 transition-colors font-medium">
                    <ChevronRight className="w-3.5 h-3.5 text-[#D4A574]" /> About Us
                  </Link>
                  <Link href="/contact-us/" className="text-sm text-[#5F5F5F] hover:text-[#1F5E4B] flex items-center gap-1.5 transition-colors font-medium col-span-2">
                    <ChevronRight className="w-3.5 h-3.5 text-[#D4A574]" /> Contact Us
                  </Link>
                </div>
              </div>

              {/* External References Column */}
              <div className="lg:col-span-6 space-y-6">
                <h4 className="text-lg font-bold text-[#0F3B2E] mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-[#D4A574] rounded-full inline-block"></span>
                  Clinical Reference Guidelines
                </h4>
                <p className="text-sm text-[#5F5F5F] mb-4">
                  Our clinical protocols align with standard guidelines established by leading dermatology and health organizations:
                </p>
                <ul className="space-y-3">
                  <li>
                    <a href="https://www.aad.org" target="_blank" rel="noopener noreferrer" className="text-sm text-[#5F5F5F] hover:text-[#1F5E4B] flex items-center gap-1.5 transition-colors font-medium">
                      <ExternalLink className="w-3.5 h-3.5 text-[#1F5E4B] flex-shrink-0" />
                      <span>American Academy of Dermatology (AAD) <span className="text-xs text-[#8C8C8C] font-normal">— general psoriasis overview and patient education</span></span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.psoriasis.org" target="_blank" rel="noopener noreferrer" className="text-sm text-[#5F5F5F] hover:text-[#1F5E4B] flex items-center gap-1.5 transition-colors font-medium">
                      <ExternalLink className="w-3.5 h-3.5 text-[#1F5E4B] flex-shrink-0" />
                      <span>National Psoriasis Foundation <span className="text-xs text-[#8C8C8C] font-normal">— news, research and advocacy for psoriasis patients</span></span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.who.int" target="_blank" rel="noopener noreferrer" className="text-sm text-[#5F5F5F] hover:text-[#1F5E4B] flex items-center gap-1.5 transition-colors font-medium">
                      <ExternalLink className="w-3.5 h-3.5 text-[#1F5E4B] flex-shrink-0" />
                      <span>World Health Organization (WHO) <span className="text-xs text-[#8C8C8C] font-normal">— global reports and health topics on chronic conditions</span></span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.mayoclinic.org" target="_blank" rel="noopener noreferrer" className="text-sm text-[#5F5F5F] hover:text-[#1F5E4B] flex items-center gap-1.5 transition-colors font-medium">
                      <ExternalLink className="w-3.5 h-3.5 text-[#1F5E4B] flex-shrink-0" />
                      <span>Mayo Clinic <span className="text-xs text-[#8C8C8C] font-normal">— comprehensive guide to psoriasis types and clinical interventions</span></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
           </footer>
        {/* Content Reviewer Badge */}
        <ContentReviewBadge doctorName="Dr. Sahar Zomorrodi" pageSlug="/services/psoriasis-treatment-dubai/" />
      </div>
    </Layout>
  );
}