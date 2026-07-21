import React, { useState } from 'react';
import Layout from '../../../components/Layout';
import Head from "next/head";
import Link from "next/link";
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { useToast } from '../../../components/Toast';
import { useRouter } from 'next/router';

/* ------------------------------------------------------------------ */
/*  CONTENT — every section from the SEO brief, nothing left out       */
/* ------------------------------------------------------------------ */

const content = {
  hero: {
    eyebrow: "Dermatology · Scalp & Hair Care",
    title: "Dandruff Treatment Dubai",
    subtitle: "Find out why your scalp is really flaking — before you buy another shampoo.",
    description1: "If you've been searching for reliable Dandruff Treatment Dubai options because of persistent white or yellow flakes, an itchy scalp, or irritation that won't go away, you're not alone. Dandruff is one of the most common scalp conditions seen in clinics across the UAE — and Dubai's hot, humid climate combined with air-conditioned indoor environments can make flaking and scalp sensitivity worse.",
    description2: "While rarely dangerous, dandruff shouldn't simply be ignored — left unmanaged it can lead to ongoing discomfort, scalp inflammation, and in some cases temporary hair shedding. At RamaCare Polyclinic, treatment starts with understanding why your scalp is flaking, because dandruff isn't one condition — it's a symptom with several possible causes.",
    ctaButtons: {
      primary: { text: 'Book a Scalp Consultation' },
      secondary: { text: 'WhatsApp Our Team', phone: '971566597878' }
    },
    image: '/images/dandruff-treatment-dubai-consultation.jpg'
  },
  whatIs: {
    title: "What is Dandruff?",
    paragraphs: [
      "Dandruff is a common scalp condition marked by flaking skin, often with itching. It happens when the scalp's skin-cell turnover speeds up, or an oil-loving yeast on the scalp triggers mild inflammation — causing dead skin cells to shed more visibly than usual.",
    ],
    contagious: "Dandruff is not contagious. You cannot \"catch\" it from sharing a hairbrush, hat, or pillow — although sharing personal items is best avoided for other hygiene reasons."
  },
  distinctions: {
    title: "Three Conditions, Constantly Confused",
    rows: [
      {
        name: "Dry Scalp",
        flake: "Small, dry, powdery",
        cause: "Moisture loss — harsh shampoo, cold air, dehydration",
        itch: "Mild",
        icon: "Wind"
      },
      {
        name: "Dandruff",
        flake: "Larger, oily, yellow-tinged",
        cause: "Malassezia yeast overgrowth on an oilier scalp",
        itch: "Noticeable",
        icon: "Droplets"
      },
      {
        name: "Seborrheic Dermatitis",
        flake: "Thick scaling with redness",
        cause: "Chronic inflammatory form of the same process — can spread to brows, nose, ears",
        itch: "Persistent",
        icon: "Flame"
      }
    ]
  },
  types: {
    title: "Types of Dandruff",
    subtitle: "Identifying which one you have is step one toward lasting relief",
    items: [
      { name: "Dry Skin Dandruff", icon: "Snowflake", description: "Small, white, dry flakes — often worse in air-conditioned, low-humidity environments." },
      { name: "Oily Scalp Dandruff", icon: "Droplet", description: "Larger, greasy, yellowish flakes that cling to the hair and scalp." },
      { name: "Fungal (Malassezia) Dandruff", icon: "Microscope", description: "Driven by an overgrowth of naturally occurring yeast — a common trigger of chronic dandruff." },
      { name: "Seborrheic Dermatitis", icon: "Flame", description: "A more inflamed, red, and scaly variant that often needs targeted medical treatment." },
      { name: "Scalp Psoriasis-Related Flakes", icon: "Layers", description: "Thicker, silvery scales in well-defined patches — frequently mistaken for ordinary dandruff." },
      { name: "Product Build-Up Dandruff", icon: "SprayCan", description: "Flaking from styling product residue, dry shampoo, or infrequent washing rather than an underlying condition." }
    ]
  },
  symptoms: {
    title: "Common Symptoms of Dandruff",
    items: [
      { text: "White flakes on the scalp, hair, and shoulders", icon: "Snowflake" },
      { text: "Yellow, oily-looking flakes", icon: "Droplet" },
      { text: "Itchy scalp, sometimes intense", icon: "Zap" },
      { text: "Redness or visible scalp irritation", icon: "Flame" },
      { text: "Oily scalp with a shiny appearance", icon: "Sparkle" },
      { text: "Dry, tight-feeling scalp", icon: "Wind" },
      { text: "Mild hair shedding from scratching or inflammation", icon: "Scissors" },
      { text: "Discomfort that doesn't improve with regular shampoo", icon: "AlertCircle" }
    ],
    footnote: "Noticing several of these together — especially ongoing itching and flaking — is a strong sign a professional dandruff clinic Dubai evaluation will get you further than another round of trial-and-error shampoos. If discomfort is your main complaint rather than visible flaking, a targeted itchy scalp treatment Dubai plan can often bring relief faster."
  },
  causes: {
    title: "Causes and Risk Factors",
    items: [
      { text: "Excess oil (sebum) production on the scalp", icon: "Droplet" },
      { text: "Malassezia yeast overgrowth", icon: "Microscope" },
      { text: "Dry skin that sheds more visibly as flakes", icon: "Wind" },
      { text: "Dubai's swings between outdoor heat and indoor A/C", icon: "ThermometerSun" },
      { text: "Stress, which worsens inflammatory skin conditions", icon: "BrainCircuit" },
      { text: "Hormonal changes affecting oil gland activity", icon: "Activity" },
      { text: "Sulfate-heavy shampoos, gels, or infrequent washing", icon: "SprayCan" },
      { text: "Poor hygiene — or over-washing with harsh products", icon: "Droplets" },
      { text: "Diet and nutritional factors", icon: "Apple" },
      { text: "Immune system factors influencing inflammation", icon: "ShieldAlert" },
      { text: "Underlying conditions such as eczema or psoriasis", icon: "Layers" }
    ],
    note: "So many factors overlap that self-diagnosing chronic dandruff is often unreliable — which is exactly where a dermatologist's assessment adds real value."
  },
  whenToSee: {
    title: "When Should You See a Dermatologist?",
    subtitle: "Book a dermatologist for dandruff Dubai consultation if:",
    items: [
      "Symptoms persist for several weeks despite anti-dandruff shampoo",
      "Severe itching develops or disrupts your sleep",
      "You notice hair thinning or shedding alongside flaking",
      "Thick, adherent scaling appears on the scalp",
      "Home remedies and over-the-counter products aren't helping",
      "Recurrent dandruff is affecting your confidence or comfort"
    ],
    footer: "Persistent or worsening symptoms can sometimes indicate seborrheic dermatitis, fungal overgrowth, or a coexisting skin condition that needs targeted medical care rather than generic scalp products."
  },
  diagnosis: {
    title: "Diagnosis of Dandruff",
    steps: [
      { id: "01", title: "Medical History", description: "Hair care habits, product use, family history, and how long symptoms have been present.", icon: "ClipboardList" },
      { id: "02", title: "Scalp Examination", description: "A visual and physical assessment of flaking pattern, redness, and overall scalp condition.", icon: "Search" },
      { id: "03", title: "Dermoscopy", description: "Magnified examination that helps distinguish dandruff from look-alike scalp conditions.", icon: "Microscope" },
      { id: "04", title: "Differential Diagnosis", description: "Ruling out psoriasis, eczema, or fungal infection before finalizing your plan.", icon: "GitCompare" },
      { id: "05", title: "Further Evaluation", description: "Additional assessment where the presentation is atypical or treatment-resistant.", icon: "FileSearch" }
    ],
    closing: "This structured approach ensures your Dandruff Treatment Dubai plan is based on an accurate diagnosis, not guesswork."
  },
  treatments: {
    title: "Dandruff Treatment Dubai Options at RamaCare Polyclinic",
    subtitle: "Never one-size-fits-all — built around your diagnosis, severity, and how your scalp responds over time",
    items: [
      { name: "Medicated Shampoos", purpose: "Reduce flaking, oiliness, and yeast overgrowth", icon: "Droplets" },
      { name: "Antifungal Treatments", purpose: "Target Malassezia-related dandruff", icon: "Microscope" },
      { name: "Anti-Inflammatory Medications", purpose: "Calm redness, itching, and irritation", icon: "Flame" },
      { name: "Scalp Exfoliation", purpose: "Gently remove built-up dead skin and product residue", icon: "Sparkles" },
      { name: "Prescription Topical Treatments", purpose: "Address moderate-to-severe or resistant cases", icon: "Pill" },
      { name: "Seborrheic Dermatitis Management", purpose: "Longer-term control of a chronic inflammatory condition", icon: "ShieldCheck" },
      { name: "Lifestyle Recommendations", purpose: "Reduce triggers such as stress and harsh styling habits", icon: "Activity" },
      { name: "Nutrition Advice", purpose: "Support overall skin and scalp health", icon: "Apple" },
      { name: "Hair Care Guidance", purpose: "Correct washing frequency, product choice, and technique", icon: "Waves" },
      { name: "Personalized Consultation", purpose: "Ongoing monitoring and treatment adjustment", icon: "UserCheck" }
    ],
    footer: "Whether you're dealing with a dry scalp treatment Dubai need or an oily scalp treatment Dubai concern, treatment works best when it addresses the root cause rather than only masking symptoms.",
    image: '/images/anti-dandruff-treatment-products.jpg'
  },
  bestOffer: {
    title: "Finding the Best Dandruff Treatment Dubai Has to Offer",
    lead: "Patients often ask how to find the best Dandruff Treatment Dubai has to offer when so many clinics advertise similar-sounding services. In practice, the difference comes down to diagnostic accuracy and follow-up.",
    mid: "For cases involving redness and thicker scaling, our",
    link: "seborrheic dermatitis treatment Dubai protocols",
    tail: "combine medicated topical care with longer-term maintenance, since this condition tends to flare periodically rather than resolve permanently. For patients with a long-standing, treatment-resistant history, we approach chronic dandruff treatment as an ongoing management plan — not a single course of shampoo — adjusting the approach as your scalp responds over several follow-up visits."
  },
  hairLoss: {
    title: "Can Dandruff Cause Hair Loss?",
    intro: "One of the most common questions we hear during Dandruff Treatment Dubai consultations — and it deserves a clear, honest answer.",
    lead: "Dandruff itself doesn't typically cause permanent, genetic-pattern hair loss. But it can contribute to temporary shedding through:",
    items: [
      "Scalp inflammation from conditions like seborrheic dermatitis weakening the hair growth cycle",
      "Frequent scratching damaging hair follicles and increasing breakage",
      "Ongoing irritation left untreated prolonging shedding beyond what's typical"
    ],
    note: "It's important to distinguish this from genetic hair loss (androgenetic alopecia), which follows a different pattern and has different underlying causes.",
    footer: "If shedding continues after your scalp condition improves, further evaluation may be appropriate — something our dermatology team can assess alongside our dedicated"
  },
  benefits: {
    title: "Benefits of Early Treatment",
    items: [
      { text: "Reduced itching and day-to-day discomfort", icon: "Smile" },
      { text: "A healthier, more balanced scalp environment", icon: "Leaf" },
      { text: "Improved confidence in social and professional settings", icon: "ThumbsUp" },
      { text: "Prevention of flare-ups before they become severe", icon: "ShieldCheck" },
      { text: "Better long-term hair health", icon: "Sparkles" },
      { text: "Reduced scalp inflammation and irritation over time", icon: "HeartPulse" }
    ]
  },
  tips: {
    title: "Scalp Care Tips to Prevent Dandruff",
    items: [
      "Wash at a frequency suited to your scalp type — not too often, not too rarely",
      "Choose a shampoo formulated for your specific scalp condition",
      "Avoid excessive styling products, dry shampoos, and heavy gels",
      "Eat a balanced diet that supports overall skin health",
      "Manage stress through routine, sleep, and relaxation",
      "Keep the scalp clean without over-washing or harsh products",
      "Avoid scratching, even when the itch is intense",
      "Follow your dermatologist's guidance over generic advice online"
    ]
  },
  whyChoose: {
    title: "Why Choose RamaCare Polyclinic?",
    items: [
      { text: "DHA-licensed doctors delivering care to Dubai Health Authority standards", icon: "BadgeCheck" },
      { text: "Experienced dermatologists focused on scalp and hair conditions", icon: "Stethoscope" },
      { text: "Personalized treatment plans built around your diagnosis", icon: "UserCheck" },
      { text: "Modern diagnostics, including dermoscopy for accurate assessment", icon: "Microscope" },
      { text: "Comprehensive care — from mild dandruff to seborrheic dermatitis", icon: "ShieldCheck" },
      { text: "Evidence-based treatment, informed by current dermatology practice", icon: "BookOpenCheck" },
      { text: "Patient-focused care with time taken to explain your options", icon: "MessageCircle" },
      { text: "Convenient Dubai location for consultations and follow-ups", icon: "MapPin" },
      { text: "Ongoing follow-up support to monitor and adjust treatment", icon: "CalendarCheck" }
    ],
    image: '/images/ramacare-polyclinic-dermatology-team.jpg'
  },
  faq: {
    title: "Frequently Asked Questions",
    items: [
      { question: "What causes dandruff?", answer: "A combination of factors including excess oil production, overgrowth of the yeast Malassezia, dry skin, product build-up, and underlying conditions such as seborrheic dermatitis." },
      { question: "Is dandruff contagious?", answer: "No. It cannot be spread through contact, sharing combs, or close proximity to someone else." },
      { question: "Can dandruff lead to hair loss?", answer: "Dandruff itself doesn't usually cause permanent hair loss, but scalp inflammation and scratching can contribute to temporary shedding if left untreated." },
      { question: "How long does Dandruff Treatment Dubai take to show results?", answer: "This varies by individual and underlying cause, but many patients notice improvement within a few weeks, with continued improvement over subsequent months." },
      { question: "Which shampoo is best for dandruff?", answer: "It depends on your specific type — dry, oily, or fungal-related. A dermatologist can recommend a medicated shampoo suited to your scalp rather than a generic option." },
      { question: "Can stress worsen dandruff?", answer: "Yes, stress is a known trigger that can worsen inflammatory scalp conditions, including dandruff and seborrheic dermatitis." },
      { question: "Can children develop dandruff?", answer: "Yes, though it's less common than in adults. Cradle cap can affect infants, while older children and teenagers can develop typical dandruff, especially around puberty." },
      { question: "Can dandruff return after treatment?", answer: "It can be a chronic, recurring condition for some people. Ongoing scalp care and, in some cases, maintenance treatment reduce the frequency and severity of flare-ups." },
      { question: "Should I see a dermatologist for dandruff?", answer: "If it's persistent, severe, associated with hair shedding, or unresponsive to over-the-counter products, seeing a dermatologist for an accurate diagnosis is strongly recommended." },
      { question: "How often should I wash my hair if I have dandruff?", answer: "Oily, dandruff-prone scalps often benefit from more frequent washing with a suitable medicated shampoo; drier scalps may need less frequent washing with a gentler formula." },
      { question: "What's the difference between dandruff and scalp psoriasis?", answer: "Scalp psoriasis typically presents with thicker, more defined, silvery-white scales, whereas dandruff flakes tend to be finer and more diffuse. A dermatologist can distinguish between the two." },
      { question: "Is oily scalp or dry scalp worse for dandruff?", answer: "Neither is inherently worse — both can cause dandruff, but through different mechanisms, which is why identifying your scalp type matters." },
      { question: "Can diet affect dandruff?", answer: "Diet can play a supportive role in overall skin and scalp health, though it's usually one of several contributing factors rather than the sole cause." },
      { question: "Does RamaCare Polyclinic treat seborrheic dermatitis as well as dandruff?", answer: "Yes, our dermatology team manages a full spectrum of scalp conditions, from mild dandruff to more persistent seborrheic dermatitis and related inflammatory conditions." },
      { question: "How do I book a Dandruff Treatment Dubai consultation?", answer: "You can book by contacting our clinic through our Contact Us page or calling our team to schedule an appointment with one of our dermatologists." }
    ]
  },
  conclusion: {
    title: "Conclusion",
    paragraph1: "Persistent flaking, itching, or scalp irritation shouldn't be something you simply live with. While dandruff is common and rarely serious, untreated or recurrent cases can affect your comfort, confidence, and scalp health over time. Understanding the underlying cause — whether it's dryness, excess oil, yeast overgrowth, or a related inflammatory condition — is the first step toward lasting relief.",
    paragraph2: "At RamaCare Polyclinic, our dermatology team is committed to providing accurate diagnosis and personalized Dandruff Treatment Dubai plans based on evidence-based dermatological practice, not one-size-fits-all solutions.",
    disclaimer: "Treatment outcomes vary depending on individual diagnosis, scalp condition, and adherence to the recommended plan. This article is for general educational purposes and does not replace a professional medical consultation.",
    cta: "Book Your Scalp Consultation Today"
  }
};

/* ------------------------------------------------------------------ */
/*  PAGE                                                                */
/* ------------------------------------------------------------------ */

export default function DandruffTreatmentDubaiPage() {
  const { showToast, ToastComponent } = useToast();
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [activeDistinction, setActiveDistinction] = useState(1);
  const router = useRouter();

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hello RamaCare, I'm interested in Dandruff Treatment. Please help me book a consultation.");
    window.open(`https://wa.me/${content.hero.ctaButtons.secondary.phone}?text=${message}`, '_blank');
  };

  const handleBookAppointment = () => {
    router.push('/book-appointment');
  };

  return (
    <Layout>
      {ToastComponent}
      <Head>
        <title key="title">Dandruff Treatment Dubai | RamaCare Polyclinic</title>
        <meta
          name="description"
          content="Struggling with flaky, itchy scalp? Get expert Dandruff Treatment Dubai at RamaCare Polyclinic. DHA-licensed dermatologists. Book your consultation today."
          key="description"
        />
      </Head>

      {/* ============================================================ */}
      {/* 1. HERO — split, image bleeds to the edge, no card framing     */}
      {/* ============================================================ */}
      <section className="relative bg-[#F5F1EA]">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-[1.1fr_0.9fr]">
          <div className="px-4 sm:px-6 lg:px-8 py-16 lg:py-28 flex flex-col justify-center">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#1F5E4B] mb-5"
            >
              <span className="w-8 h-px bg-[#1F5E4B]" />
              {content.hero.eyebrow}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl font-bold tracking-tight text-[#1A1A1A] sm:text-5xl lg:text-6xl leading-[1.05]"
            >
              {content.hero.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-[#1F5E4B] font-medium mt-4 mb-6"
            >
              {content.hero.subtitle}
            </motion.p>
            <p className="text-base text-[#5F5F5F] leading-relaxed mb-5">{content.hero.description1}</p>
            <p className="text-base text-[#5F5F5F] leading-relaxed mb-8">{content.hero.description2}</p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={handleBookAppointment}
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#2D5A41] hover:bg-[#234733] transition-colors shadow-sm"
              >
                <LucideIcons.Calendar className="w-5 h-5 mr-2" />
                {content.hero.ctaButtons.primary.text}
              </button>
              <button
                onClick={handleWhatsAppClick}
                className="inline-flex items-center justify-center px-6 py-3 border border-[#2D5A41] text-base font-medium rounded-md text-[#2D5A41] bg-white hover:bg-gray-50 transition-colors shadow-sm"
              >
                <LucideIcons.MessageCircle className="w-5 h-5 mr-2" />
                {content.hero.ctaButtons.secondary.text}
              </button>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative min-h-[340px] lg:min-h-full">
            <img
              src={content.hero.image}
              alt="Dermatologist examining scalp for dandruff treatment Dubai consultation"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. WHAT IS DANDRUFF — editorial single column, large lede      */}
      {/* ============================================================ */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-8">{content.whatIs.title}</h2>
          {content.whatIs.paragraphs.map((p, i) => (
            <p key={i} className="text-lg text-[#5F5F5F] leading-relaxed mb-6">{p}</p>
          ))}
          <div className="flex items-start gap-4 bg-[#F0F7F4] rounded-xl p-6 mt-8">
            <LucideIcons.ShieldCheck className="w-6 h-6 text-[#1F5E4B] flex-shrink-0 mt-1" />
            <p className="text-[#1A1A1A] text-sm leading-relaxed font-medium">{content.whatIs.contagious}</p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. DISTINCTIONS — interactive tab compare, not a 3-card grid   */}
      {/* ============================================================ */}
      <section className="py-20 px-6 bg-[#F5F1EA]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] text-center mb-12">{content.distinctions.title}</h2>
          <div className="flex justify-center gap-2 mb-8 flex-wrap">
            {content.distinctions.rows.map((row, index) => {
              const IconComponent = LucideIcons[row.icon];
              const isActive = activeDistinction === index;
              return (
                <button
                  key={index}
                  onClick={() => setActiveDistinction(index)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-bold transition-all ${
                    isActive ? 'bg-[#1A5F3F] text-white shadow-md' : 'bg-white text-[#1A1A1A] hover:bg-[#F0F7F4]'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  {row.name}
                </button>
              );
            })}
          </div>
          <motion.div
            key={activeDistinction}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm"
          >
            <div className="grid sm:grid-cols-3 gap-8">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#1F5E4B] mb-2">Flake type</p>
                <p className="text-[#1A1A1A] font-medium">{content.distinctions.rows[activeDistinction].flake}</p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#1F5E4B] mb-2">Main cause</p>
                <p className="text-[#1A1A1A] font-medium">{content.distinctions.rows[activeDistinction].cause}</p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#1F5E4B] mb-2">Itching</p>
                <p className="text-[#1A1A1A] font-medium">{content.distinctions.rows[activeDistinction].itch}</p>
              </div>
            </div>
          </motion.div>
          <div className="mt-10 rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/images/dandruff-vs-healthy-scalp-comparison.jpg"
              alt="Close-up illustration comparing healthy scalp and flaky dandruff scalp"
              className="w-full h-[280px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. TYPES — numbered horizontal list, not icon-cards            */}
      {/* ============================================================ */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-2">{content.types.title}</h2>
          <p className="text-[#5F5F5F] mb-12">{content.types.subtitle}</p>
          <div className="divide-y divide-[#E9E2D6]">
            {content.types.items.map((item, index) => {
              const IconComponent = LucideIcons[item.icon] || LucideIcons.Circle;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex items-start gap-6 py-6">
                  <span className="text-3xl font-bold text-[#E9E2D6] w-12 flex-shrink-0">{String(index + 1).padStart(2, '0')}</span>
                  <div className="w-10 h-10 bg-[#F0F7F4] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <IconComponent className="w-5 h-5 text-[#1F5E4B]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#1A1A1A] mb-1">{item.name}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      {/* ============================================================ */}
      {/* 5. SYMPTOMS — tag cloud style, not uniform grid                */}
      {/* ============================================================ */}
      <section className="py-20 px-6 bg-[#1A5F3F] text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">{content.symptoms.title}</h2>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {content.symptoms.items.map((item, index) => {
              const IconComponent = LucideIcons[item.icon] || LucideIcons.Circle;
              return (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-5 py-2.5 text-sm font-medium">
                  <IconComponent className="w-4 h-4" />
                  {item.text}
                </motion.span>
              );
            })}
          </div>
          <p className="text-white/80 text-sm leading-relaxed max-w-2xl mx-auto">{content.symptoms.footnote}</p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. CAUSES — two-column checklist ledger                        */}
      {/* ============================================================ */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] text-center mb-12">{content.causes.title}</h2>
          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-1 bg-[#F5F1EA] rounded-2xl p-8 sm:p-10">
            {content.causes.items.map((item, index) => {
              const IconComponent = LucideIcons[item.icon] || LucideIcons.Circle;
              return (
                <div key={index} className="flex items-center gap-3 py-3 border-b border-[#E9E2D6]">
                  <IconComponent className="w-4 h-4 text-[#1F5E4B] flex-shrink-0" />
                  <p className="text-[#1A1A1A] text-sm">{item.text}</p>
                </div>
              );
            })}
          </div>
          <p className="text-center text-[#5F5F5F] text-sm mt-8 italic max-w-2xl mx-auto">{content.causes.note}</p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 7. WHEN TO SEE — alert banner style                            */}
      {/* ============================================================ */}
      <section className="px-6 pb-20 bg-white">
        <div className="max-w-4xl mx-auto border-2 border-[#1A5F3F] rounded-2xl p-8 sm:p-10 relative overflow-hidden">
          <LucideIcons.AlertTriangle className="absolute -right-4 -top-4 w-32 h-32 text-[#F0F7F4]" />
          <div className="relative">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-2">{content.whenToSee.title}</h2>
            <p className="text-[#1F5E4B] font-medium mb-6">{content.whenToSee.subtitle}</p>
            <div className="grid sm:grid-cols-2 gap-3 mb-6">
              {content.whenToSee.items.map((item, index) => (
                <div key={index} className="flex items-start gap-2">
                  <LucideIcons.CheckCircle2 className="w-5 h-5 text-[#1F5E4B] flex-shrink-0 mt-0.5" />
                  <p className="text-[#1A1A1A] text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-[#5F5F5F] leading-relaxed border-t border-[#E9E2D6] pt-5">{content.whenToSee.footer}</p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 8. DIAGNOSIS — vertical connected timeline                     */}
      {/* ============================================================ */}
      <section className="py-20 px-6 bg-[#F5F1EA]">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-10">{content.diagnosis.title}</h2>
              <div className="relative pl-10">
                <div className="absolute left-[15px] top-2 bottom-2 w-px bg-[#1A5F3F]/30" />
                {content.diagnosis.steps.map((step, index) => {
                  const IconComponent = LucideIcons[step.icon] || LucideIcons.Circle;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="relative pb-10 last:pb-0"
                    >
                      <div className="absolute -left-10 w-8 h-8 rounded-full bg-[#1A5F3F] text-white flex items-center justify-center">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <h3 className="text-base font-bold text-[#1A1A1A] mb-1">{step.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                    </motion.div>
                  );
                })}
              </div>
              <p className="text-sm text-[#5F5F5F] italic mt-2">{content.diagnosis.closing}</p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl lg:sticky lg:top-24">
              <img
                src="/images/scalp-dermoscopy-diagnosis-dubai.jpg"
                alt="Dermatologist using dermoscopy tool for scalp treatment Dubai diagnosis"
                className="w-full h-[420px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 9. TREATMENTS — compact data table, not cards                  */}
      {/* ============================================================ */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] text-center mb-3">{content.treatments.title}</h2>
          <p className="text-center text-[#5F5F5F] max-w-2xl mx-auto mb-12">{content.treatments.subtitle}</p>
          <div className="rounded-2xl overflow-hidden shadow-xl mb-10">
            <img src={content.treatments.image} alt="Medicated shampoo and topical treatment for anti-dandruff treatment" className="w-full h-[260px] object-cover" />
          </div>
          <div className="border border-[#E9E2D6] rounded-2xl overflow-hidden">
            <div className="grid grid-cols-[auto_1fr_1.4fr] bg-[#1A5F3F] text-white text-xs font-bold uppercase tracking-wide px-6 py-4">
              <span className="w-6"></span>
              <span>Approach</span>
              <span>Purpose</span>
            </div>
            {content.treatments.items.map((item, index) => {
              const IconComponent = LucideIcons[item.icon] || LucideIcons.Circle;
              return (
                <div
                  key={index}
                  className={`grid grid-cols-[auto_1fr_1.4fr] items-center px-6 py-4 gap-2 ${index % 2 === 0 ? 'bg-[#F5F1EA]' : 'bg-white'}`}
                >
                  <IconComponent className="w-4 h-4 text-[#1F5E4B]" />
                  <span className="font-bold text-[#1A1A1A] text-sm">{item.name}</span>
                  <span className="text-gray-600 text-sm">{item.purpose}</span>
                </div>
              );
            })}
          </div>
          <p className="text-center text-[#5F5F5F] text-sm leading-relaxed mt-8 max-w-3xl mx-auto">{content.treatments.footer}</p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 10. FINDING THE BEST — pull-quote style feature                */}
      {/* ============================================================ */}
      <section className="py-20 px-6 bg-[#F0F7F4]">
        <div className="max-w-4xl mx-auto text-center">
          <LucideIcons.Award className="w-10 h-10 text-[#1F5E4B] mx-auto mb-6" />
          <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-6">{content.bestOffer.title}</h2>
          <p className="text-lg text-[#5F5F5F] leading-relaxed">
            {content.bestOffer.lead} {content.bestOffer.mid}{" "}
            <Link href="/services/psoriasis-treatment-dubai" className="text-[#1F5E4B] font-semibold underline hover:text-[#1A5F3F]">
              {content.bestOffer.link}
            </Link>{" "}
            {content.bestOffer.tail}
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 11. HAIR LOSS — asymmetric split with icon list                */}
      {/* ============================================================ */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-[1fr_1.2fr] gap-12 items-center">
          <div>
            <div className="w-14 h-14 bg-[#F0F7F4] rounded-2xl flex items-center justify-center mb-6">
              <LucideIcons.HelpCircle className="w-7 h-7 text-[#1F5E4B]" />
            </div>
            <h2 className="text-3xl font-bold text-[#1A1A1A] mb-4">{content.hairLoss.title}</h2>
            <p className="text-[#5F5F5F] leading-relaxed mb-4">{content.hairLoss.intro}</p>
            <p className="text-[#1A1A1A] font-medium leading-relaxed">{content.hairLoss.lead}</p>
          </div>
          <div>
            <div className="space-y-3 mb-6">
              {content.hairLoss.items.map((item, index) => (
                <div key={index} className="flex items-start gap-3 bg-[#F5F1EA] p-4 rounded-xl">
                  <LucideIcons.Scissors className="w-5 h-5 text-[#1F5E4B] flex-shrink-0 mt-0.5" />
                  <p className="text-[#1A1A1A] text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-[#5F5F5F] italic mb-4">{content.hairLoss.note}</p>
            <p className="text-sm text-[#5F5F5F]">
              {content.hairLoss.footer}{" "}
              <Link href="/services/hair-loss-dubai" className="text-[#1F5E4B] font-bold underline hover:text-[#1A5F3F]">
                Hair Loss Treatment Dubai
              </Link>{" "}
              services, along with our{" "}
              <Link href="/services/hair-prp-dubai" className="text-[#1F5E4B] font-bold underline hover:text-[#1A5F3F]">
                PRP Hair Treatment Dubai
              </Link>{" "}
              options where appropriate.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 12. BENEFITS — single horizontal scroll strip                  */}
      {/* ============================================================ */}
      <section className="py-20 bg-[#1A5F3F]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">{content.benefits.title}</h2>
        </div>
        <div className="flex gap-5 overflow-x-auto px-6 pb-4 snap-x max-w-7xl mx-auto">
          {content.benefits.items.map((item, index) => {
            const IconComponent = LucideIcons[item.icon] || LucideIcons.Circle;
            return (
              <div
                key={index}
                className="snap-start flex-shrink-0 w-64 bg-white/10 border border-white/15 rounded-2xl p-6 text-white">
                <IconComponent className="w-7 h-7 mb-4" />
                <p className="text-sm font-medium leading-relaxed">{item.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ============================================================ */}
      {/* 13. SCALP CARE TIPS — simple numbered manual page               */}
      {/* ============================================================ */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-10">{content.tips.title}</h2>
          <ol className="space-y-5">
            {content.tips.items.map((item, index) => (
              <li key={index} className="flex gap-4 items-baseline">
                <span className="text-[#1F5E4B] font-bold text-sm w-6 flex-shrink-0">{index + 1}.</span>
                <span className="text-[#1A1A1A] leading-relaxed">{item}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 14. WHY CHOOSE — image left, dense text right, no card wraps   */}
      {/* ============================================================ */}
      <section className="py-20 px-6 bg-[#F5F1EA]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-xl">
          <div className="min-h-[380px]">
            <img src={content.whyChoose.image} alt="RamaCare Polyclinic dermatology team providing scalp care Dubai services" className="w-full h-full object-cover" />
          </div>
          <div className="bg-white p-8 sm:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-8">{content.whyChoose.title}</h2>
            <div className="space-y-4">
              {content.whyChoose.items.map((item, index) => {
                const IconComponent = LucideIcons[item.icon] || LucideIcons.Circle;
                return (
                  <div key={index} className="flex items-start gap-3">
                    <IconComponent className="w-4 h-4 text-[#1F5E4B] flex-shrink-0 mt-1" />
                    <p className="text-[#1A1A1A] text-sm leading-relaxed">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 15. FAQ — accordion (kept, it's the correct pattern for FAQs) */}
      {/* ============================================================ */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] text-center mb-12">{content.faq.title}</h2>
          <div className="space-y-3">
            {content.faq.items.map((item, index) => (
              <div key={index} className="border-b border-[#E9E2D6]">
                <button
                  onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
                  className="w-full py-5 text-left flex items-center justify-between hover:text-[#1F5E4B] transition-colors"
                >
                  <span className="font-bold text-[#1A1A1A] pr-4">{item.question}</span>
                  <LucideIcons.Plus
                    className={`w-5 h-5 text-[#1F5E4B] flex-shrink-0 transition-transform ${activeAccordion === index ? 'rotate-45' : ''}`}
                  />
                </button>
                {activeAccordion === index && (
                  <div className="pb-5">
                    <p className="text-gray-600 leading-relaxed text-sm">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 16. CONCLUSION / CTA                                           */}
      {/* ============================================================ */}
      <section className="bg-[#1A5F3F] py-20 px-6 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{content.conclusion.title}</h2>
          <p className="text-white/90 leading-relaxed mb-4">{content.conclusion.paragraph1}</p>
          <p className="text-white/90 leading-relaxed mb-8">{content.conclusion.paragraph2}</p>
          <button
            onClick={handleBookAppointment}
            className="bg-white text-[#1A5F3F] px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all shadow-xl transform hover:scale-105 inline-flex items-center justify-center mb-8"
          >
            <LucideIcons.Calendar className="w-6 h-6 mr-3" />
            {content.conclusion.cta}
          </button>
          <p className="text-xs text-white/60 max-w-2xl mx-auto leading-relaxed">{content.conclusion.disclaimer}</p>
        </div>
      </section>

      {/* Reviewer + related links */}
      <section className="bg-[#F5F1EA] py-12 px-6 pb-32">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-6">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center overflow-hidden flex-shrink-0 border-2 border-[#1A5F3F]/10">
              <LucideIcons.UserCheck className="w-8 h-8 text-[#1A5F3F]" />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium mb-1">Content Reviewed by</p>
              <div className="flex flex-wrap items-center gap-2">
                <h4 className="text-lg font-bold text-[#1A1A1A]">RamaCare Dermatology Team</h4>
                <span className="text-gray-600 text-sm">, RamaCare Polyclinic, Dubai</span>
                <LucideIcons.CheckCircle className="w-4 h-4 text-teal-600" />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 justify-center text-sm">
            <Link href="/services/aesthetic-dermatology-dubai" className="text-[#1F5E4B] font-medium underline hover:text-[#1A5F3F]">Dermatology Services</Link>
            <span className="text-[#5F5F5F]">·</span>
            <Link href="/services/eczema-treatment-dubai" className="text-[#1F5E4B] font-medium underline hover:text-[#1A5F3F]">Eczema Treatment</Link>
            <span className="text-[#5F5F5F]">·</span>
            <Link href="/services/rosacea-treatment-dubai" className="text-[#1F5E4B] font-medium underline hover:text-[#1A5F3F]">Rosacea Treatment</Link>
            <span className="text-[#5F5F5F]">·</span>
            <Link href="/services/general-physician-dubai" className="text-[#1F5E4B] font-medium underline hover:text-[#1A5F3F]">General Physician</Link>
            <span className="text-[#5F5F5F]">·</span>
            <Link href="/about-us" className="text-[#1F5E4B] font-medium underline hover:text-[#1A5F3F]">About Us</Link>
            <span className="text-[#5F5F5F]">·</span>
            <Link href="/contact-us" className="text-[#1F5E4B] font-medium underline hover:text-[#1A5F3F]">Contact Us</Link>
          </div>
        </div>
      </section>

      {/* Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#E9E2D6] shadow-lg z-40 p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="hidden md:block">
            <p className="text-sm font-bold text-[#1A1A1A]">Ready for a flake-free scalp?</p>
            <p className="text-xs text-[#5F5F5F]">Book your Dandruff Treatment Dubai consultation today</p>
          </div>
          <button
            onClick={handleBookAppointment}
            className="flex items-center gap-2 bg-[#1F5E4B] text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all font-bold whitespace-nowrap"
          >
            <LucideIcons.Calendar className="w-5 h-5" />
            Book Consultation
          </button>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg hover:shadow-xl transition-shadow"
      >
        <LucideIcons.MessageCircle className="w-8 h-8 text-white" />
      </button>
    </Layout>
  );
}