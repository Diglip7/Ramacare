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
  Layers,
  Activity,
  ChevronRight,
  Thermometer,
  Award,
  MapPin,
  Building,
  Clock,
  ArrowUpRight,
  HelpCircle
} from 'lucide-react';

/* =====================================================================
   ROSACEA TREATMENT DUBAI — PRECISE CONTENT ALIGNMENT & DISTINCT DESIGN
   Color Palette:
     Base light background: #F5F8F6 (Light Sage off-white)
     Deep forest text/accent: #0F3B2E (Dark Green)
     Mid-tone theme: #1F5E4B (Teal/Green)
     Gold highlights: #D4A574
     Panel off-white: #F9F7F2
   ===================================================================== */

const SEO = {
  title: 'Rosacea Treatment Dubai | RamaCare Polyclinic',
  metaTitle: 'Rosacea Treatment Dubai | Expert Dermatology Care',
  metaDescription: 'Struggling with facial redness? Get expert Rosacea Treatment Dubai at RamaCare Polyclinic with DHA licensed dermatologists. Book your consultation today.',
  canonical: 'https://ramacarepolyclinic.ae/services/rosacea-treatment-dubai/',
  keywords: 'Rosacea Treatment Dubai, Best Rosacea Treatment Dubai, Rosacea Specialist Dubai, Rosacea Clinic Dubai, Dermatologist for Rosacea Dubai, Facial Redness Treatment Dubai, Rosacea Skin Treatment Dubai, Rosacea Laser Treatment Dubai, Rosacea Management Dubai, Chronic Facial Redness Dubai, Sensitive Skin Treatment Dubai, Rosacea Consultation Dubai, Rosacea Care Dubai, Skin Clinic Dubai, Red Face Treatment Dubai, Rosacea Dermatology Dubai',
};

const WHATSAPP_NUMBER = '971566597878';

/* ------------------------------- Global Data Arrays ------------------------------- */

const FAQS = [
  {
    q: 'What causes rosacea?',
    a: 'Rosacea is believed to result from a combination of genetics, immune system activity, and environmental triggers such as heat, sun, alcohol, and stress.'
  },
  {
    q: 'Can rosacea be cured permanently?',
    a: 'There is currently no permanent cure for rosacea. However, with consistent, professional rosacea management, most patients see significant improvement in redness, flare-ups, and overall skin comfort.'
  },
  {
    q: 'What is the best treatment for rosacea?',
    a: 'The best treatment depends on your specific subtype and severity. A combination of topical or oral medication, laser therapy where appropriate, and trigger management typically works best.'
  },
  {
    q: 'Is laser treatment effective for rosacea?',
    a: 'Rosacea laser treatment can be effective in reducing visible blood vessels and persistent redness, particularly for erythematotelangiectatic rosacea. Results vary by individual.'
  },
  {
    q: 'Is rosacea contagious?',
    a: 'No. Rosacea is not contagious. It cannot be spread through contact with another person.'
  },
  {
    q: 'How long does rosacea treatment take to show results?',
    a: 'Timelines vary, but many patients begin noticing improvement within several weeks of starting a personalized treatment plan, with continued improvement over following months.'
  },
  {
    q: 'Can rosacea worsen in Dubai\'s climate?',
    a: 'Yes. Dubai\'s heat, humidity, and intense sun exposure are known rosacea triggers, which is why local trigger management is such an important part of treatment here.'
  },
  {
    q: 'Can skincare products trigger rosacea flare-ups?',
    a: 'Yes, certain fragranced or harsh skincare ingredients can irritate sensitive, rosacea-prone skin and trigger flare-ups.'
  },
  {
    q: 'Which foods should I avoid with rosacea?',
    a: 'Common dietary triggers include spicy foods, alcohol, and hot beverages, though triggers can vary from person to person.'
  },
  {
    q: 'Can rosacea affect the eyes?',
    a: 'Yes, this is known as ocular rosacea, and it can cause dryness, redness, or irritation of the eyes alongside skin symptoms.'
  },
  {
    q: 'Is rosacea a common condition?',
    a: 'Yes, rosacea is a relatively common chronic skin condition, particularly among adults with fair skin, though it can affect people of many skin tones.'
  },
  {
    q: 'Can I wear makeup if I have rosacea?',
    a: 'Generally yes, though it\'s best to use gentle, non-irritating, dermatologist-recommended products to avoid worsening sensitivity.'
  },
  {
    q: 'Is rosacea hereditary?',
    a: 'Genetics can play a role, and having a family member with rosacea may increase your likelihood of developing it.'
  },
  {
    q: 'How can I prevent rosacea flare-ups?',
    a: 'Daily sun protection, gentle skincare, trigger avoidance, and stress management are among the most effective prevention strategies.'
  },
  {
    q: 'When should I consult a dermatologist about rosacea?',
    a: 'If you notice persistent redness, frequent flushing, or bumps that don\'t resolve with basic skincare, it\'s a good time to seek a professional evaluation.'
  },
  {
    q: 'Does stress make rosacea worse?',
    a: 'Yes, emotional stress is a commonly reported trigger for rosacea flare-ups in many patients.'
  },
  {
    q: 'Can men get rosacea too?',
    a: 'Yes, rosacea affects both men and women, although presentation and severity can differ.'
  },
  {
    q: 'Is rosacea the same as acne?',
    a: 'No, though papulopustular rosacea can resemble acne. A dermatologist can distinguish between the two through proper assessment.'
  },
  {
    q: 'Will my rosacea get worse without treatment?',
    a: 'Without management, rosacea symptoms can become more persistent and frequent over time for many individuals, which is why early evaluation is recommended.'
  },
  {
    q: 'Does RamaCare offer follow-up care after treatment?',
    a: 'Yes, ongoing follow-up visits are a core part of our rosacea management approach to help track progress and adjust your plan as needed.'
  }
];

const WHY_CHOOSE_VALUES = [
  {
    title: 'DHA Licensed Dermatology Professionals',
    desc: 'Your skin is assessed and treated by qualified, licensed dermatology specialists who follow recognized clinical standards.',
    icon: Award
  },
  {
    title: 'Personalized Care',
    desc: 'No generic protocols. Every plan reflects your subtype, skin type, and lifestyle.',
    icon: Smile
  },
  {
    title: 'Advanced Dermatology Technology',
    desc: 'We use modern diagnostic and treatment tools to support accurate assessment and effective care.',
    icon: Microscope
  },
  {
    title: 'Evidence-Based Treatments',
    desc: 'Our approach follows current, evidence-based rosacea management principles rather than trends.',
    icon: CheckCircle2
  },
  {
    title: 'A Modern, Comfortable Clinic',
    desc: 'Designed with patient comfort in mind, from consultation through treatment.',
    icon: Building
  },
  {
    title: 'Patient-Centered Approach',
    desc: 'We take time to explain your condition, your options, and what to realistically expect.',
    icon: HeartPulse
  },
  {
    title: 'Convenient Dubai Location',
    desc: 'Easy to reach for both initial consultations and ongoing follow-up care, making consistent Rosacea Dermatology Dubai visits simple to fit into your schedule.',
    icon: MapPin
  }
];

/* ------------------------------- Content Sections ------------------------------- */

const HERO_CONTENT = {
  title: "Rosacea Treatment Dubai",
  subtitle: "Expert Care for Redness, Flushing & Sensitive Skin",
  paragraphs: [
    "If your cheeks flush at the smallest trigger, or your skin stays red no matter what you try, you're not imagining it — and you're not alone. Rosacea affects millions of adults worldwide, and Dubai's climate can make it particularly stubborn to manage. At RamaCare Polyclinic, our Rosacea Treatment Dubai program is built around one goal: helping you understand your skin and calm it down, with a plan that's designed specifically for you.",
    "This isn't a one-size-fits-all skincare routine. It's a medical approach led by DHA licensed dermatology professionals, backed by evidence-based protocols and modern diagnostic tools. If you've been searching for a trusted dermatologist for rosacea Dubai residents recommend, or an effective facial redness treatment Dubai clinics offer, you're in the right place."
  ]
};

const UNDERSTANDING_CONTENT = {
  title: "Understanding Rosacea: Why It's So Often Misdiagnosed",
  paragraphs: [
    "Rosacea is one of the most misunderstood skin conditions out there. Many people mistake it for acne, sunburn, or simple sensitivity, and end up trying over-the-counter creams that make things worse rather than better. Others assume redness is just \"how their skin is\" and never seek help at all.",
    "The truth is, rosacea is a chronic inflammatory condition that needs a proper diagnosis. Left unmanaged, it tends to progress — flare-ups become more frequent, redness becomes more persistent, and in some cases, visible blood vessels or bumps develop.",
    "Early diagnosis matters. The sooner a dermatologist identifies your rosacea subtype and triggers, the sooner you can get ahead of flare-ups instead of constantly reacting to them.",
    "Dubai's environment adds an extra layer of complexity. The city's intense heat, high humidity, strong sun exposure, and an outdoor-oriented lifestyle are all recognized rosacea triggers. Add in spicy regional cuisine and the everyday stress of city life, and it's easy to see why so many residents struggle to keep their symptoms under control without professional guidance.",
    "That's exactly where a structured, dermatologist-led treatment plan makes the difference — not just calming today's flare-up, but reducing how often they happen in the first place. Working with an experienced rosacea specialist Dubai patients trust is often the turning point for people who've lived with chronic facial redness Dubai's climate makes worse, without ever getting a clear answer why."
  ]
};

const WHAT_IS_CONTENT = {
  title: "What Is Rosacea?",
  paragraphs: [
    "Rosacea is a chronic inflammatory skin condition that mainly affects the face. It typically shows up as persistent redness, flushing, and visible small blood vessels, often alongside heightened skin sensitivity. Some people also develop small red bumps or pimple-like breakouts that can resemble acne, which is why misdiagnosis is so common.",
    "While it can affect anyone, rosacea is most frequently seen in adults with fair skin, though people of all skin tones can develop it. It tends to come and go in cycles — periods of calm followed by flare-ups triggered by heat, sun, certain foods, or stress."
  ],
  subtypesTitle: "The Four Main Subtypes of Rosacea",
  subtypesIntro: "Understanding which subtype you have is central to getting the right treatment.",
  subtypes: [
    {
      name: "Erythematotelangiectatic Rosacea",
      desc: "This subtype is mainly about persistent facial redness and visible blood vessels (telangiectasia), often with a tendency to flush easily. Skin may feel warm, tight, or mildly irritated even without an active breakout."
    },
    {
      name: "Papulopustular Rosacea",
      desc: "Often confused with acne, this subtype involves redness combined with small red bumps and pus-filled pimples, usually across the cheeks, chin, and forehead."
    },
    {
      name: "Phymatous Rosacea",
      desc: "A less common but more advanced subtype where the skin thickens, particularly around the nose, leading to a bumpy, enlarged appearance. This subtype benefits significantly from early intervention."
    },
    {
      name: "Ocular Rosacea",
      desc: "This affects the eyes rather than just the skin, causing dryness, irritation, redness, or a gritty feeling. It's frequently overlooked but can affect eye comfort and health if untreated, so a dermatology-eye care crossover approach is often recommended."
    }
  ]
};

const CAUSES_CONTENT = {
  title: "Causes and Risk Factors",
  paragraphs: [
    "Rosacea doesn't have one single cause — it's usually the result of several overlapping factors.",
    "Genetics play a meaningful role; if a close family member has rosacea, your risk is higher.",
    "Immune system factors are also involved, with research pointing to an overactive inflammatory response in the skin."
  ],
  triggersIntro: "Environmental triggers are where Dubai residents often notice the biggest impact:",
  triggers: [
    "UV exposure and intense sun",
    "High heat and humidity",
    "Alcohol consumption",
    "Spicy foods, common in local and regional cuisine",
    "Emotional stress and anxiety",
    "Hormonal changes, including those related to menopause or pregnancy",
    "Harsh or fragranced skincare products, including some anti-aging actives"
  ],
  outro: "Identifying which of these apply to you is a key part of the assessment process at RamaCare, because trigger management is often just as important as any medication or procedure."
};

const SYMPTOMS_CONTENT = {
  title: "Recognizing the Symptoms of Rosacea",
  intro: "Rosacea symptoms vary from person to person, but common signs include:",
  items: [
    "Persistent redness across the cheeks, nose, chin, or forehead",
    "Frequent flushing that comes on quickly and fades slowly",
    "A burning or stinging sensation, especially with certain products",
    "Small red bumps or pus-filled pimples",
    "Visible thread-like blood vessels near the skin's surface",
    "Increased skin sensitivity and reactivity",
    "Dryness, rough texture, or mild swelling",
    "Eye irritation, dryness, or a gritty sensation (in ocular rosacea)"
  ],
  outro: "If several of these sound familiar, it's worth having your skin properly assessed rather than continuing to guess at a routine."
};

const WHO_NEEDS_CONTENT = {
  title: "Who Needs Rosacea Treatment?",
  intro: "Rosacea treatment isn't only for severe cases. You may benefit from a professional evaluation if you:",
  items: [
    "Notice recurring facial redness that doesn't fully fade",
    "Flush easily in response to heat, sun, or spicy food",
    "Have fair or sensitive skin prone to irritation",
    "Are experiencing worsening symptoms over time",
    "Have tried over-the-counter products without improvement",
    "Notice new bumps, visible vessels, or eye irritation alongside redness"
  ],
  outro: "Rosacea affects both men and women, typically emerging in adulthood, and often becomes more noticeable with age if left unmanaged. There's no need to wait until symptoms are severe — earlier Rosacea Treatment Dubai patients pursue tends to be easier to manage than a red face treatment Dubai patients delay until flare-ups become constant."
};

const TREATMENTS_CONTENT = {
  title: "Rosacea Treatments Available at RamaCare",
  intro: "Every treatment plan at RamaCare begins with a proper diagnosis. From there, our dermatologists build a plan around your specific subtype, skin type, and lifestyle — the foundation of any effective Rosacea Treatment Dubai program and true rosacea skin treatment Dubai residents can count on.",
  items: [
    {
      name: "Dermatologist Consultation for Rosacea Treatment Dubai",
      desc: "Your journey starts with a detailed consultation with a DHA licensed dermatologist. This includes a discussion of your symptoms, medical history, lifestyle habits, and possible triggers."
    },
    {
      name: "Comprehensive Skin Assessment",
      desc: "Using modern dermatology tools, we assess your skin's condition, identify your rosacea subtype, and rule out other conditions that can mimic rosacea, such as acne or eczema."
    },
    {
      name: "Prescription Medications",
      desc: "Topical and oral prescription treatments are commonly used to reduce inflammation and control breakouts. These are selected based on your subtype and severity, and are most effective when used consistently as directed."
    },
    {
      name: "Topical Therapy",
      desc: "Medicated topical treatments can help reduce redness, inflammation, and bumps. They're often a first-line approach for milder to moderate presentations."
    },
    {
      name: "Oral Medications",
      desc: "For more persistent or inflammatory rosacea, oral medications may be recommended to help control breakouts from within, particularly for papulopustular rosacea."
    },
    {
      name: "Laser Therapy",
      desc: "Rosacea laser treatment Dubai patients frequently ask about is used to target visible blood vessels and persistent redness. Laser energy works by addressing the dilated vessels beneath the skin's surface, which can lead to a visibly calmer, more even complexion over a series of sessions. Best candidates are those with prominent visible vessels or persistent erythema who have realistic expectations about gradual improvement."
    },
    {
      name: "IPL (Intense Pulsed Light), Where Suitable",
      desc: "IPL can also be used to target redness and vascular changes associated with rosacea, offering an alternative approach depending on your skin type and assessment findings."
    },
    {
      name: "Medical-Grade Skincare: Sensitive Skin Treatment Dubai",
      desc: "We recommend gentle, dermatologist-approved skincare formulated for reactive skin, avoiding common irritants that can worsen rosacea."
    },
    {
      name: "Lifestyle Guidance and Trigger Management",
      desc: "Perhaps the most underrated part of rosacea skin treatment is identifying and managing your personal triggers — something we build into every treatment plan with practical, realistic guidance for Dubai's climate and lifestyle."
    }
  ]
};

const LIFESTYLE_CONTENT = {
  title: "Lifestyle Changes That Help Control Rosacea",
  intro: "Alongside clinical treatment, daily habits play a major role in keeping rosacea calm.",
  items: [
    { title: "Sun protection", desc: "is non-negotiable in Dubai — daily broad-spectrum SPF is one of the most effective ways to prevent flare-ups." },
    { title: "Trigger avoidance", desc: "means paying attention to your personal patterns, whether that's spicy food, alcohol, or overheating." },
    { title: "Gentle skincare", desc: "— avoiding harsh scrubs, alcohol-based toners, and fragranced products — helps protect your skin barrier." },
    { title: "Stress management", desc: "through mindfulness, exercise, or simply better sleep can reduce flare-up frequency for many patients." },
    { title: "Diet considerations", desc: "— including moderating spicy foods and alcohol — can help some individuals notice fewer flushing episodes." },
    { title: "Hydration", desc: ", both from drinking enough water and using the right moisturizer, supports overall skin resilience." },
    { title: "A consistent daily skincare routine", desc: "— simple, gentle, and consistent — tends to outperform a complicated routine with too many active ingredients." }
  ],
  outro: "Building these habits alongside professional Rosacea Management Dubai guidance is usually what separates lasting Rosacea Care Dubai results from short-term fixes."
};

const PROCESS_CONTENT = {
  title: "Your Treatment Process at RamaCare",
  steps: [
    { step: "Step 1", title: "Consultation", desc: "You'll meet with a dermatologist for a thorough Rosacea Consultation Dubai visit to discuss your symptoms, history, and concerns in detail." },
    { step: "Step 2", title: "Skin Examination", desc: "A thorough visual and diagnostic examination helps identify your specific rosacea presentation." },
    { step: "Step 3", title: "Diagnosis", desc: "Your dermatologist confirms your subtype and rules out other conditions that can look similar." },
    { step: "Step 4", title: "Personalized Treatment Plan", desc: "A plan is developed combining medication, procedures, and lifestyle guidance suited to you." },
    { step: "Step 5", title: "Treatment Sessions", desc: "Depending on your plan, this may include topical or oral therapy, laser sessions, or a combination." },
    { step: "Step 6", title: "Home Care Guidance", desc: "You'll receive clear instructions on skincare, sun protection, and trigger management for daily life." },
    { step: "Step 7", title: "Follow-Up", desc: "Regular follow-up visits let us track your progress and adjust your plan as needed." }
  ]
};

const AFTERCARE_CONTENT = {
  title: "Recovery & Aftercare",
  intro: "Aftercare is where much of the long-term success happens. Following treatment, we typically recommend:",
  items: [
    "Gentle, fragrance-free skincare suited to reactive skin",
    "Daily sunscreen, reapplied as needed throughout the day",
    "Regular use of a suitable moisturizer to support the skin barrier",
    "Continued avoidance of known personal triggers",
    "Sticking closely to prescribed medication routines",
    "Attending scheduled follow-up visits so your dermatologist can monitor progress and fine-tune your plan"
  ],
  outro: "Consistency here matters more than intensity — small daily habits tend to outperform occasional intensive efforts."
};

const PREVENTIONS_CONTENT = {
  title: "Prevention Tips for Long-Term Skin Comfort",
  intro: "While rosacea can't always be entirely prevented, these habits can meaningfully reduce flare-ups:",
  items: [
    "Apply broad-spectrum SPF daily, even indoors",
    "Avoid overheating — this includes hot showers, saunas, and excessive sun exposure",
    "Cleanse gently, without scrubbing or harsh exfoliants",
    "Maintain a balanced diet and moderate alcohol and spicy food intake",
    "Practice stress-reduction techniques where possible",
    "Avoid harsh or fragranced cosmetic products",
    "Schedule routine dermatologist reviews, even when your skin feels stable"
  ]
};

const COST_CONTENT = {
  title: "Rosacea Treatment Cost in Dubai",
  paragraphs: [
    "Many patients naturally want to know about cost before booking a consultation. Rosacea treatment cost in Dubai depends on several factors: the severity and subtype of your rosacea, the specific treatments recommended, the number of sessions required, any prescribed medications, and the personalized nature of your overall plan.",
    "Because no two rosacea cases are identical, we don't provide generic pricing without an assessment. The most accurate way to understand your treatment cost is through a consultation with our dermatology team, where you'll receive a clear, personalized breakdown based on your specific needs."
  ]
};

const CONCLUSION_CONTENT = {
  title: "Take the First Step Toward Calmer, More Comfortable Skin",
  paragraphs: [
    "Rosacea can feel frustrating, especially when Dubai's climate seems to work against you at every turn. But with the right diagnosis and a consistent, personalized plan, most patients find real, meaningful improvement in their redness, flare-ups, and skin comfort.",
    "At RamaCare Polyclinic, our DHA licensed dermatology team is here to help you understand your skin and manage it with confidence — not guesswork. If you're searching for reliable Rosacea Treatment Dubai options, we invite you to book a consultation and take the first step toward calmer, healthier-looking skin."
  ],
  disclaimer: "This content is for informational purposes only and does not replace professional medical advice. Please consult a licensed dermatologist for diagnosis and treatment tailored to your individual condition."
};

const FAQS_CONTENT = {
  title: "Frequently Asked Questions About Rosacea Treatment Dubai",
  items: FAQS
};

const IMAGES = {
  hero: { src: '/images/Rosacea Treatment Dubai.jpg', alt: 'Rosacea Treatment Dubai — dermatologist consulting with patient' },
  intro: { src: '/images/Woman with facial redness before rosacea consultation.jpg', alt: 'Woman with facial redness before rosacea consultation in Dubai' },
  triggers: { src: '/images/Common rosacea triggers.jpg', alt: 'Common rosacea triggers including sun, heat, and stress in Dubai' },
  subtypes: { src: '/images/types-of-rosacea-subtypes.jpg', alt: 'Clinical reference illustration of facial skin concerns' },
  treatments: { src: '/images/rosacea-laser-treatment-dubai.jpg', alt: 'Rosacea laser treatment Dubai procedure at dermatology clinic' },
  lifestyle: { src: '/images/gentle-skincare-routine-rosacea.jpg', alt: 'Sun protection and gentle skincare routine for rosacea management' },
  whyChoose: { src: '/images/ramacare-clinic-reception-dubai.jpg', alt: 'RamaCare Polyclinic dermatology clinic reception in Dubai' },
  process: { src: '/images/rosacea-treatment-process-journey.jpg', alt: 'Step-by-step rosacea treatment consultation process' },
  benefits: { src: '/images/woman-clear-healthy-skin-after-treatment.jpg', alt: 'Calm skin appearance after dermatology treatment' }
};

/* ================================ MAIN COMPONENT ================================ */

export default function RosaceaTreatmentDubaiPage() {
  const [activeSubtype, setActiveSubtype] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hello RamaCare, I'd like to book a consultation for Rosacea Treatment Dubai.");
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
        '@id': 'https://ramacarepolyclinic.ae/services/rosacea-treatment-dubai/#webpage',
        url: 'https://ramacarepolyclinic.ae/services/rosacea-treatment-dubai/',
        name: SEO.metaTitle,
        description: SEO.metaDescription,
        medicalAudience: {
          '@type': 'MedicalAudience',
          audienceType: 'Patient'
        },
        about: {
          '@id': 'https://ramacarepolyclinic.ae/services/rosacea-treatment-dubai/#condition'
        },
        lastReviewed: '2026-07-23',
        reviewedBy: {
          '@type': 'Physician',
          name: 'RamaCare Polyclinic Dermatology Team',
          medicalSpecialty: 'Dermatology'
        }
      },
      {
        '@type': 'MedicalCondition',
        '@id': 'https://ramacarepolyclinic.ae/services/rosacea-treatment-dubai/#condition',
        name: 'Rosacea',
        alternateName: 'Chronic Facial Redness',
        description: 'A chronic inflammatory skin condition affecting the face, showing persistent redness, flushing, and small blood vessels.',
        signOrSymptom: SYMPTOMS_CONTENT.items.map((s) => ({ '@type': 'MedicalSignOrSymptom', name: s })),
        riskFactor: CAUSES_CONTENT.triggers.map((t) => ({ '@type': 'MedicalRiskFactor', name: t }))
      },
      {
        '@type': 'MedicalProcedure',
        '@id': 'https://ramacarepolyclinic.ae/services/rosacea-treatment-dubai/#procedure',
        name: 'Rosacea Treatment',
        procedureType: 'https://schema.org/PharmacologicalTherapy',
        howPerformed: 'Includes dermatologist consultation, skin assessment, topical and oral medication, and laser therapy where appropriate.',
        status: 'Available at RamaCare Polyclinic, Dubai'
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
            name: 'Rosacea Treatment Dubai',
            item: 'https://ramacarepolyclinic.ae/services/rosacea-treatment-dubai/'
          }
        ]
      }
    ]
  };

  return (
    <Layout>
      <Head>
        <title>{SEO.title}</title>
        <meta name="title" content={SEO.metaTitle} />
        <meta name="description" content={SEO.metaDescription} />
        <meta name="keywords" content={SEO.keywords} />
        <link rel="canonical" href={SEO.canonical} />
        <meta property="og:title" content="Tired of Facial Redness? Expert Rosacea Care in Dubai" />
        <meta property="og:description" content="RamaCare Polyclinic offers personalized Rosacea Treatment Dubai plans led by DHA licensed dermatologists. Calm your skin, restore your confidence. Book now." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={SEO.canonical} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalConditionSchema) }} />
      </Head>

      <div className="bg-[#F5F8F6] text-[#1A1A1A] antialiased">

        {/* ========================================== */}
        {/* 1. HERO — Soft Sage Light Canvas with Gold Accent */}
        {/* ========================================== */}
        <section className="relative overflow-hidden py-20 lg:py-28 bg-gradient-to-b from-[#E9EFEA] via-[#F5F8F6] to-white">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4A574]/8 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#1F5E4B]/5 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb trail */}
            <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1F5E4B]">
              <Link href="/" className="hover:text-[#D4A574] transition-colors">Home</Link>
              <span className="text-[#1F5E4B]/30">/</span>
              <Link href="/services/aesthetic-dermatology-dubai" className="hover:text-[#D4A574] transition-colors">Dermatology</Link>
              <span className="text-[#1F5E4B]/30">/</span>
              <span aria-current="page" className="text-gray-500">Rosacea Treatment Dubai</span>
            </nav>

            <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <span className="inline-flex items-center gap-2 rounded-full bg-[#1F5E4B]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#1F5E4B] mb-5">
                  <Sparkles className="w-3.5 h-3.5" /> DHA Licensed Dermatology Care
                </span>

                <h1 className="text-4xl font-black leading-[1.15] text-[#0F3B2E] sm:text-5xl lg:text-[3.25rem] tracking-tight">
                  {HERO_CONTENT.title}: <span className="block text-[#1F5E4B] text-3xl sm:text-4xl mt-3 font-normal font-sans italic">{HERO_CONTENT.subtitle}</span>
                </h1>

                <div className="mt-8 space-y-5 text-base leading-relaxed text-[#5F5F5F] max-w-2xl">
                  <p>{HERO_CONTENT.paragraphs[0]}</p>
                  <p className="border-l-2 border-[#D4A574] pl-4 italic text-[#0F3B2E] font-medium">
                    {HERO_CONTENT.paragraphs[1]}
                  </p>
                </div>

                <div className="mt-10 flex flex-wrap gap-4">
                  <button
                    onClick={handleWhatsApp}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1F5E4B] hover:bg-[#0F3B2E] px-8 py-4 text-sm font-bold uppercase tracking-wide text-white shadow-lg transition-all transform hover:-translate-y-0.5"
                  >
                    <MessageCircle className="h-5 w-5" /> Book Your Rosacea Consultation Today →
                  </button>
                </div>

                {/* 4 core features bullet grid */}
                <div className="mt-12 grid grid-cols-2 gap-4 border-t border-gray-200/60 pt-8">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-[#D4A574]" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0F3B2E]">DHA Licensed Care</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-[#D4A574]" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0F3B2E]">Personalized Plans</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-[#D4A574]" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0F3B2E]">Modern Technology</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-[#D4A574]" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0F3B2E]">Jumeirah Location</span>
                  </div>
                </div>
              </div>

              {/* Hero Right Visual Column */}
              <div className="lg:col-span-5">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] border border-[#1F5E4B]/15 shadow-xl bg-white p-2">
                  <div className="relative w-full h-full overflow-hidden rounded-[2.2rem]">
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
          </div>
        </section>

        {/* ============================================== */}
        {/* 2. UNDERSTANDING ROSACEA — Editorial Asymmetric Grid */}
        {/* ============================================== */}
        <section className="bg-white py-20 px-4">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-12 lg:items-center">

              <div className="lg:col-span-5 order-last lg:order-first">
                <div className="relative aspect-square w-full max-w-md mx-auto overflow-hidden rounded-[2.5rem] border border-gray-100 shadow-lg p-2 bg-white">
                  <div className="relative w-full h-full overflow-hidden rounded-[2.2rem]">
                    <Image
                      src={IMAGES.intro.src}
                      alt={IMAGES.intro.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 35vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <h2 className="text-3xl font-black text-[#0F3B2E] sm:text-4xl leading-tight mb-8">
                  {UNDERSTANDING_CONTENT.title}
                </h2>

                <div className="space-y-6 text-base leading-relaxed text-[#5F5F5F]">
                  <p>{UNDERSTANDING_CONTENT.paragraphs[0]}</p>
                  <p className="font-semibold text-[#0F3B2E] border-l-4 border-[#1F5E4B] pl-4">
                    {UNDERSTANDING_CONTENT.paragraphs[1]}
                  </p>
                  <p>{UNDERSTANDING_CONTENT.paragraphs[2]}</p>
                  <p>{UNDERSTANDING_CONTENT.paragraphs[3]}</p>
                  <p className="bg-[#F5F8F6] p-6 rounded-2xl border border-[#1F5E4B]/10 text-sm leading-relaxed italic text-[#0F3B2E]">
                    {UNDERSTANDING_CONTENT.paragraphs[4]}
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ============================================== */}
        {/* 3. WHAT IS ROSACEA — Subtypes Grid Panel         */}
        {/* ============================================== */}
        <section className="bg-[#F5F8F6] py-20 px-4 border-t border-b border-gray-100">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <h2 className="text-3xl font-black text-[#0F3B2E] sm:text-4xl">{WHAT_IS_CONTENT.title}</h2>
              <div className="mt-6 space-y-4 text-base text-[#5F5F5F] leading-relaxed">
                <p>{WHAT_IS_CONTENT.paragraphs[0]}</p>
                <p>{WHAT_IS_CONTENT.paragraphs[1]}</p>
              </div>
            </div>

            <div className="bg-white rounded-[2.5rem] p-8 sm:p-12 shadow-sm border border-gray-100/80">
              <div className="text-center mb-10">
                <h3 className="text-2xl font-black text-[#0F3B2E]">{WHAT_IS_CONTENT.subtypesTitle}</h3>
                <p className="text-sm text-[#5F5F5F] mt-2">{WHAT_IS_CONTENT.subtypesIntro}</p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {WHAT_IS_CONTENT.subtypes.map((sub, idx) => {
                  return (
                    <div
                      key={sub.name}
                      className="group relative rounded-2xl bg-[#F9F7F2] p-6 border border-gray-150 transition-all hover:border-[#1F5E4B]/35 hover:shadow-md flex flex-col justify-between"
                    >
                      <div>
                        <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#D4A574] mb-3">Subtype 0{idx + 1}</span>
                        <h4 className="text-base font-bold text-[#0F3B2E] group-hover:text-[#1F5E4B] transition-colors mb-3">{sub.name}</h4>
                        <p className="text-xs leading-relaxed text-[#5F5F5F]">{sub.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================== */}
        {/* 4. CAUSES & RISK FACTORS — Triggers Layout     */}
        {/* ============================================== */}
        <section className="bg-white py-20 px-4">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-12 lg:items-center">

              <div className="lg:col-span-7">
                <h2 className="text-3xl font-black text-[#0F3B2E] sm:text-4xl mb-6">{CAUSES_CONTENT.title}</h2>
                <div className="space-y-4 text-base leading-relaxed text-[#5F5F5F]">
                  <p>{CAUSES_CONTENT.paragraphs[0]}</p>
                  <p>{CAUSES_CONTENT.paragraphs[1]}</p>
                  <p>{CAUSES_CONTENT.paragraphs[2]}</p>
                </div>

                <div className="mt-8 bg-[#F9F7F2] p-6 rounded-2xl border border-gray-150">
                  <p className="text-sm font-bold text-[#0F3B2E] mb-4">{CAUSES_CONTENT.triggersIntro}</p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {CAUSES_CONTENT.triggers.map((trig, idx) => (
                      <div key={idx} className="flex gap-2.5 items-center text-xs text-[#5F5F5F] font-semibold">
                        <span className="w-1.5 h-1.5 bg-[#D4A574] rounded-full flex-shrink-0" />
                        <span>{trig}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="mt-6 text-sm text-[#5F5F5F] italic">{CAUSES_CONTENT.outro}</p>
              </div>

              {/* Triggers Image */}
              <div className="lg:col-span-5">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] border border-gray-150 shadow-sm p-2 bg-white">
                  <div className="relative w-full h-full overflow-hidden rounded-[1.8rem]">
                    <Image
                      src={IMAGES.triggers.src}
                      alt={IMAGES.triggers.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 35vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ============================================== */}
        {/* 5. SYMPTOMS — Grid Checklists                 */}
        {/* ============================================== */}
        <section className="bg-[#F5F8F6] py-20 px-4 border-t border-b border-gray-100">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black text-[#0F3B2E] sm:text-4xl">{SYMPTOMS_CONTENT.title}</h2>
              <p className="mt-4 text-base text-[#5F5F5F] max-w-xl mx-auto">{SYMPTOMS_CONTENT.intro}</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {SYMPTOMS_CONTENT.items.map((sym, idx) => (
                <div key={idx} className="flex gap-3 bg-white p-5 rounded-2xl border border-gray-150/80 shadow-xs">
                  <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[#1F5E4B]/10 text-[#1F5E4B]">
                    <CheckCircle2 className="h-4 w-4" />
                  </span>
                  <span className="text-xs font-semibold leading-relaxed text-[#0F3B2E]">{sym}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center text-sm text-[#5F5F5F] italic max-w-xl mx-auto bg-[#F9F7F2] p-5 rounded-xl border border-gray-200">
              {SYMPTOMS_CONTENT.outro}
            </div>
          </div>
        </section>

        {/* ============================================== */}
        {/* 6. WHO NEEDS ROSACEA TREATMENT — split block   */}
        {/* ============================================== */}
        <section className="bg-white py-20 px-4">
          <div className="mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black text-[#0F3B2E] sm:text-4xl">{WHO_NEEDS_CONTENT.title}</h2>
              <p className="mt-3 text-base text-[#5F5F5F] max-w-xl mx-auto">{WHO_NEEDS_CONTENT.intro}</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {WHO_NEEDS_CONTENT.items.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 rounded-2xl bg-[#F9F7F2] p-5 border border-gray-150">
                  <CheckCircle2 className="h-5 w-5 text-[#D4A574] flex-shrink-0 mt-0.5" />
                  <span className="text-xs leading-relaxed text-[#5F5F5F] font-semibold">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 bg-[#0F3B2E] text-white p-6 sm:p-8 rounded-[2rem] text-center border border-white/10 shadow-lg">
              <p className="text-sm leading-relaxed text-white/90 max-w-3xl mx-auto">
                {WHO_NEEDS_CONTENT.outro}
              </p>
            </div>
          </div>
        </section>

        {/* ============================================== */}
        {/* 7. TREATMENTS AVAILABLE — Detailed Grid Panels  */}
        {/* ============================================== */}
        <section className="bg-[#F5F8F6] py-20 px-4 border-t border-b border-gray-100">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto mb-14 max-w-3xl text-center">
              <h2 className="text-3xl font-black text-[#0F3B2E] sm:text-4xl">{TREATMENTS_CONTENT.title}</h2>
              <p className="mt-4 text-base text-[#5F5F5F] leading-relaxed max-w-2xl mx-auto">{TREATMENTS_CONTENT.intro}</p>
            </div>

            {/* Treatments Image Visual */}
            <div className="relative mb-12 aspect-[21/8] w-full overflow-hidden rounded-[2.5rem] shadow-md border border-gray-200 p-2 bg-white">
              <div className="relative w-full h-full overflow-hidden rounded-[2.2rem]">
                <Image
                  src={IMAGES.treatments.src}
                  alt={IMAGES.treatments.alt}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {TREATMENTS_CONTENT.items.map((treat, idx) => (
                <div key={idx} className="bg-white rounded-3xl p-6 shadow-sm border border-gray-150/80 flex flex-col justify-between hover:border-[#1F5E4B]/20 transition-all">
                  <div>
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#1F5E4B]/10 text-[#1F5E4B] mb-4">
                      <Stethoscope className="h-4 w-4" />
                    </span>
                    <h4 className="text-base font-bold text-[#0F3B2E] mb-3">{treat.name}</h4>
                    <p className="text-xs leading-relaxed text-[#5F5F5F]">{treat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================== */}
        {/* 8. LIFESTYLE CHANGES — 2 Column Layout         */}
        {/* ============================================== */}
        <section className="bg-white py-20 px-4">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-12 lg:items-center">

              <div className="lg:col-span-7">
                <h2 className="text-3xl font-black text-[#0F3B2E] sm:text-4xl mb-6">{LIFESTYLE_CONTENT.title}</h2>
                <p className="text-base text-[#5F5F5F] mb-8">{LIFESTYLE_CONTENT.intro}</p>

                <div className="space-y-4">
                  {LIFESTYLE_CONTENT.items.map((tip, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-[#F9F7F2] p-4 rounded-xl border border-gray-150">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#D4A574]/15 text-[#D4A574] mt-0.5">
                        <CheckCircle2 className="h-3 w-3" />
                      </span>
                      <span className="text-xs text-[#5F5F5F] leading-relaxed">
                        <strong className="text-[#0F3B2E] font-bold">{tip.title}</strong> {tip.desc}
                      </span>
                    </div>
                  ))}
                </div>

                <p className="mt-8 text-sm font-semibold text-[#0F3B2E] border-t border-gray-150 pt-4">{LIFESTYLE_CONTENT.outro}</p>
              </div>

              {/* Lifestyle Image */}
              <div className="lg:col-span-5">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] border border-gray-150 shadow-sm p-2 bg-white">
                  <div className="relative w-full h-full overflow-hidden rounded-[1.8rem]">
                    <Image
                      src={IMAGES.lifestyle.src}
                      alt={IMAGES.lifestyle.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 35vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ============================================== */}
        {/* 9. WHY CHOOSE RAMACARE — Elegant Grid Deck     */}
        {/* ============================================== */}
        <section className="bg-[#F5F8F6] py-20 px-4 border-t border-b border-gray-100">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black text-[#0F3B2E] sm:text-4xl">Why Choose RamaCare for Rosacea Treatment in Dubai?</h2>
              <p className="mt-4 text-base text-[#5F5F5F] max-w-2xl mx-auto">
                Choosing the right clinic matters just as much as choosing the right treatment. It's why so many patients researching the best Rosacea Treatment Dubai has to offer compare clinics carefully before booking. Here's what sets RamaCare Polyclinic — a trusted rosacea clinic Dubai residents recommend, rather than just another skin clinic Dubai visitors find online — apart:
              </p>
            </div>

            <div className="relative mb-12 aspect-[21/8] w-full overflow-hidden rounded-[2.5rem] border border-gray-200 shadow-sm p-2 bg-white">
              <div className="relative w-full h-full overflow-hidden rounded-[2.2rem]">
                <Image
                  src={IMAGES.whyChoose.src}
                  alt={IMAGES.whyChoose.alt}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {WHY_CHOOSE_VALUES.map((val, idx) => {
                const Icon = val.icon;
                return (
                  <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-150/80 hover:border-[#1F5E4B]/20 transition-all">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1F5E4B]/10 text-[#1F5E4B] mb-4">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h4 className="text-base font-bold text-[#0F3B2E] mb-2">{val.title}</h4>
                    <p className="text-xs leading-relaxed text-[#5F5F5F]">{val.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============================================== */}
        {/* 10. TREATMENT PROCESS — Step Journey Timeline  */}
        {/* ============================================== */}
        <section className="bg-white py-20 px-4">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black text-[#0F3B2E] sm:text-4xl">{PROCESS_CONTENT.title}</h2>
            </div>

            <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7 space-y-6 pl-8 border-l border-[#1F5E4B]/20 relative">
                {PROCESS_CONTENT.steps.map((st, idx) => (
                  <div key={idx} className="relative">
                    <span className="absolute -left-[45px] top-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-[#1F5E4B] text-white text-xs font-bold">
                      {idx + 1}
                    </span>
                    <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-[#D4A574] mb-1">{st.step}</span>
                    <h4 className="text-sm font-bold text-[#0F3B2E]">{st.title}</h4>
                    <p className="mt-1 text-xs leading-relaxed text-[#5F5F5F]">{st.desc}</p>
                  </div>
                ))}
              </div>

              <div className="lg:col-span-5">
                <div className="relative aspect-square w-full overflow-hidden rounded-[2rem] border border-gray-150 shadow-sm p-2 bg-white">
                  <div className="relative w-full h-full overflow-hidden rounded-[1.8rem]">
                    <Image
                      src={IMAGES.process.src}
                      alt={IMAGES.process.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 35vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================== */}
        {/* 11. AFTERCARE & RECOVERY                       */}
        {/* ============================================== */}
        <section className="bg-[#F5F8F6] py-20 px-4 border-t border-b border-gray-100">
          <div className="mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black text-[#0F3B2E] sm:text-4xl">{AFTERCARE_CONTENT.title}</h2>
              <p className="mt-4 text-base text-[#5F5F5F] max-w-xl mx-auto">{AFTERCARE_CONTENT.intro}</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {AFTERCARE_CONTENT.items.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-white p-5 rounded-2xl border border-gray-150">
                  <CheckCircle2 className="h-5 w-5 text-[#D4A574] flex-shrink-0 mt-0.5" />
                  <span className="text-xs leading-relaxed text-[#5F5F5F] font-semibold">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 bg-white p-6 rounded-2xl border border-gray-200 text-center max-w-2xl mx-auto">
              <p className="text-xs leading-relaxed text-[#5F5F5F] font-medium">{AFTERCARE_CONTENT.outro}</p>
            </div>
          </div>
        </section>

        {/* ============================================== */}
        {/* 12. PREVENTIONS                                */}
        {/* ============================================== */}
        <section className="bg-white py-20 px-4">
          <div className="mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black text-[#0F3B2E] sm:text-4xl">{PREVENTIONS_CONTENT.title}</h2>
              <p className="mt-4 text-base text-[#5F5F5F] max-w-xl mx-auto">{PREVENTIONS_CONTENT.intro}</p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-2">
              {PREVENTIONS_CONTENT.items.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-[#F9F7F2] p-4 rounded-xl border border-gray-150">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#1F5E4B]/10 text-[#1F5E4B] flex-shrink-0">
                    <CheckCircle2 className="h-4 w-4" />
                  </span>
                  <span className="text-xs font-semibold text-[#0F3B2E]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================== */}
        {/* 13. ROSACEA TREATMENT COST                     */}
        {/* ============================================== */}
        <section className="bg-[#0F3B2E] py-20 px-4 text-white">
          <div className="mx-auto max-w-4xl text-center">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#D4A574]/15 text-[#D4A574] mb-6 mx-auto">
              <DollarSignIcon className="h-5 w-5" />
            </span>
            <h2 className="text-3xl font-black mb-6">{COST_CONTENT.title}</h2>
            <div className="mt-8 space-y-6 text-sm leading-relaxed text-white/80 max-w-2xl mx-auto text-left">
              <p>{COST_CONTENT.paragraphs[0]}</p>
              <p className="border-l-2 border-[#D4A574] pl-4 italic text-white font-medium">{COST_CONTENT.paragraphs[1]}</p>
            </div>

            <div className="mt-10">
              <button
                onClick={handleWhatsApp}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D4A574] hover:bg-[#c29668] px-8 py-4 text-sm font-bold uppercase tracking-wide text-[#0F3B2E] shadow-lg transition-all"
              >
                <MessageCircle className="h-5 w-5" /> Book a Consultation to Discuss Your Plan
              </button>
            </div>
          </div>
        </section>

        {/* ============================================== */}
        {/* 14. FAQ — 20 Accordion Items                  */}
        {/* ============================================== */}
        <section className="bg-[#F5F8F6] py-20 px-4 border-t border-b border-gray-100">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-black text-[#0F3B2E] sm:text-4xl">{FAQS_CONTENT.title}</h2>
            </div>

            <div className="space-y-3">
              {FAQS_CONTENT.items.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={idx} className="overflow-hidden rounded-2xl bg-white shadow-xs border border-gray-150">
                    <button
                      onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                      className="flex w-full items-center gap-4 p-5 text-left transition-colors hover:bg-[#F9F7F2]/50"
                    >
                      <span className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-xs font-black ${isOpen ? 'bg-[#1F5E4B] text-white' : 'bg-[#1F5E4B]/10 text-[#1F5E4B]'}`}>
                        {idx + 1}
                      </span>
                      <span className="flex-1 text-xs font-bold text-[#0F3B2E] sm:text-sm">{faq.q}</span>
                      <ChevronDown className={`h-4.5 w-4.5 flex-shrink-0 text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <p className="border-t border-gray-100 px-5 pb-5 pt-3 pl-[3.25rem] text-xs leading-relaxed text-[#5F5F5F]">
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
        {/* 15. CONCLUSION / FINAL CTA                      */}
        {/* ============================================== */}
        <section className="bg-white py-20 px-4 text-center">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-black text-[#0F3B2E] sm:text-4xl mb-8 leading-tight">{CONCLUSION_CONTENT.title}</h2>

            <div className="space-y-6 text-base leading-relaxed text-[#5F5F5F] text-left">
              <p>{CONCLUSION_CONTENT.paragraphs[0]}</p>
              <p className="font-semibold text-[#0F3B2E]">{CONCLUSION_CONTENT.paragraphs[1]}</p>
            </div>

            <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
              <button
                onClick={handleWhatsApp}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1F5E4B] hover:bg-[#0F3B2E] text-white px-8 py-4 text-sm font-bold uppercase tracking-wide shadow-xl transition-all"
              >
                <MessageCircle className="h-5 w-5" /> Book Your Rosacea Consultation at RamaCare Polyclinic →
              </button>
            </div>

            <div className="mx-auto mt-12 h-px w-16 bg-gray-200" />
            <p className="mx-auto mt-6 max-w-xl text-xs italic text-gray-400 leading-relaxed text-left border-l-2 border-gray-200 pl-4">
              {CONCLUSION_CONTENT.disclaimer}
            </p>
          </div>
        </section>

        {/* ============================================== */}
        {/* 16. RELATED TREATMENTS FOOTER SECTION           */}
        {/* ============================================== */}
        <footer className="bg-[#F9F7F2] py-16 px-4 border-t border-gray-200">
          <div className="mx-auto max-w-5xl space-y-10">

            {/* Related Treatments Links */}
            <div className="space-y-4">
              <h5 className="text-xs font-bold uppercase tracking-wider text-center text-gray-400">Related Treatments at RamaCare</h5>
              <div className="flex flex-wrap gap-x-4 gap-y-2 justify-center text-xs text-[#5F5F5F] font-semibold">
                <Link href="/services/aesthetic-dermatology-dubai" className="hover:text-[#1F5E4B] transition-colors underline">Aesthetic Dermatology</Link>
                <span>•</span>
                <Link href="/services/acne-treatment-dubai" className="hover:text-[#1F5E4B] transition-colors underline">Acne Treatment</Link>
                <span>•</span>
                <Link href="/services/acne-scar-treatment-dubai" className="hover:text-[#1F5E4B] transition-colors underline">Acne Scar Treatment</Link>
                <span>•</span>
                <Link href="/services/melasma-treatment-dubai" className="hover:text-[#1F5E4B] transition-colors underline">Melasma Treatment</Link>
                <span>•</span>
                <Link href="/services/pigmentation-dubai" className="hover:text-[#1F5E4B] transition-colors underline">Pigmentation Treatment</Link>
                <span>•</span>
                <Link href="/services/hydrafacial-vs-chemical-peel-dubai" className="hover:text-[#1F5E4B] transition-colors underline">Chemical Peel</Link>
                <span>•</span>
                <Link href="/services/hydrafacial-dubai" className="hover:text-[#1F5E4B] transition-colors underline">HydraFacial</Link>
                <span>•</span>
                <Link href="/services/laser-treatment-dubai" className="hover:text-[#1F5E4B] transition-colors underline">Laser Skin Treatments</Link>
                <span>•</span>
                <Link href="/services/face-prp-in-dubai" className="hover:text-[#1F5E4B] transition-colors underline">PRP Therapy</Link>
                <span>•</span>
                <Link href="/services/general-physician-dubai" className="hover:text-[#1F5E4B] transition-colors underline">General Physician</Link>
                <span>•</span>
                <Link href="/" className="hover:text-[#1F5E4B] transition-colors underline">Homepage</Link>
                <span>•</span>
                <Link href="/contact-us" className="hover:text-[#1F5E4B] transition-colors underline">Contact Page</Link>
              </div>
            </div>
          </div>
           </footer>
        {/* Content Reviewer Badge */}
        <ContentReviewBadge doctorName="Dr. Sahar Zomorrodi" pageSlug="/services/rosacea-treatment-dubai/" />

        {/* Sticky Consultation Bar */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-xl z-40 p-4 transform translate-y-0 transition-transform">
          <div className="mx-auto max-w-7xl flex items-center justify-between gap-4">
            <div className="hidden md:block">
              <p className="text-sm font-bold text-[#0F3B2E]">Rosacea Treatment Dubai | RamaCare Polyclinic</p>
              <p className="text-xs text-[#5F5F5F]">Calm your skin redness and restore your confidence with DHA licensed experts.</p>
            </div>
            <button
              onClick={handleWhatsApp}
              className="flex items-center gap-2 bg-[#1F5E4B] hover:bg-[#0F3B2E] text-white px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all font-bold whitespace-nowrap text-sm"
            >
              <MessageCircle className="w-5 h-5" /> Book Appointment
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

/* --------------------------- Secondary Icons --------------------------- */
function DollarSignIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  );
}
