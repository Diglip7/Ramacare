import React, { useState, useRef } from 'react';
import Layout from '../../../components/Layout';
import ContentReviewBadge from '../../../components/ContentReviewBadge';
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
    description1: "If you've been searching for reliable Dandruff Treatment Dubai options because of persistent white or yellow flakes, an itchy scalp, or scalp irritation that just won't go away, you're not alone. Dandruff is one of the most common scalp conditions seen in dermatology clinics across the UAE, and Dubai's hot, humid climate combined with air-conditioned indoor environments can make flaking and scalp sensitivity worse for many residents.\n\nWhile dandruff is rarely dangerous, it should not simply be ignored. Left unmanaged, it can lead to ongoing discomfort, self-consciousness, scalp inflammation, and in some cases contribute to temporary hair shedding. The good news is that with an accurate diagnosis and the right treatment plan, most people see significant improvement.",
    description2: "At RamaCare Polyclinic, our approach to Dandruff Treatment Dubai starts with understanding why your scalp is flaking — because dandruff is not a single condition, but a symptom with several possible underlying causes. Our dermatology team evaluates your scalp, hair care habits, medical history, and lifestyle factors to build a treatment plan suited to you, rather than offering a one-size-fits-all shampoo recommendation. Early diagnosis genuinely does improve outcomes, helping you avoid the frustrating cycle of trying product after product with little lasting relief.\n\nWhether you need a straightforward flaky scalp treatment or a more comprehensive plan for a stubborn, recurring condition, the right Dandruff Treatment Dubai provider will always start with a proper diagnosis rather than a generic recommendation.\n\nIn this guide, we'll walk through what dandruff actually is, its different types and causes, when to see a dermatologist, how it's diagnosed, and the treatment options available at our clinic — so you can make an informed decision about your scalp health.",
    ctaButtons: {
      primary: { text: 'Book a Scalp Consultation' },
      secondary: { text: 'WhatsApp Our Team', phone: '971566597878' }
    },
    image: '/images/dandruff-treatment-dubai-consultation.jpg'
  },
  whatIs: {
    title: "What is Dandruff?",
    paragraphs: [
      "Dandruff is a common scalp condition characterized by flaking of the skin on the scalp, often accompanied by itching. It occurs when the scalp's natural skin-cell turnover speeds up, or when oil-loving yeast on the scalp triggers mild inflammation, causing dead skin cells to shed more visibly than usual.",
      "Dandruff vs. dry scalp: These are often confused, but they aren't the same thing. Dry scalp produces small, dry flakes typically caused by a lack of moisture, harsh shampoos, cold weather, or dehydration. Dandruff, on the other hand, is frequently associated with an oilier scalp environment where a yeast called Malassezia thrives, producing larger, oilier, yellow-tinged flakes along with itching.",
      "Dandruff vs. seborrheic dermatitis: Seborrheic dermatitis is a more pronounced, chronic inflammatory form of the same underlying process that causes dandruff. It tends to involve more redness, thicker scaling, and can extend beyond the scalp to the eyebrows, sides of the nose, and behind the ears. Many dermatologists consider dandruff a milder form of seborrheic dermatitis affecting only the scalp.",
      "Is dandruff contagious? No. Dandruff is not caused by poor hygiene alone, nor is it contagious. You cannot \"catch\" dandruff from sharing a hairbrush, hat, or pillow with someone who has it, although sharing personal items is generally best avoided for other hygiene reasons."
    ],
    contagious: "Dandruff is not contagious. You cannot \"catch\" dandruff from sharing a hairbrush, hat, or pillow with someone who has it, although sharing personal items is generally best avoided for other hygiene reasons."
  },

  types: {
    title: "Types of Dandruff",
    subtitle: "Identifying which one you have is step one toward lasting relief",
    items: [
      { name: "Dry Skin Dandruff", icon: "Snowflake", description: "Small, white, dry flakes, often worse in air-conditioned or low-humidity environments." },
      { name: "Oily Scalp Dandruff", icon: "Droplet", description: "Larger, greasy, yellowish flakes that stick to the hair and scalp." },
      { name: "Fungal (Malassezia-related) Dandruff", icon: "Microscope", description: "Linked to an overgrowth of yeast naturally present on the scalp, a common trigger of chronic dandruff." },
      { name: "Seborrheic Dermatitis", icon: "Flame", description: "A more inflamed, red, and scaly variant that may need targeted medical treatment." },
      { name: "Scalp Psoriasis-Related Flakes", icon: "Layers", description: "Thicker, silvery scales with well-defined patches, sometimes mistaken for ordinary dandruff." },
      { name: "Product Build-Up Dandruff", icon: "SprayCan", description: "Flaking caused by residue from styling products, dry shampoos, or infrequent washing rather than an underlying skin condition." }
    ]
  },
  symptoms: {
    title: "Common Symptoms of Dandruff",
    items: [
      { text: "White flakes on the scalp, hair, and shoulders", icon: "Snowflake" },
      { text: "Yellow, oily-looking flakes", icon: "Droplet" },
      { text: "Itchy scalp, sometimes intense", icon: "Zap" },
      { text: "Redness or visible scalp irritation", icon: "Flame" },
      { text: "Oily scalp with a shiny appearance", icon: "Sparkles" },
      { text: "Dry, tight-feeling scalp", icon: "Wind" },
      { text: "Mild hair shedding associated with scratching or inflammation", icon: "Scissors" },
      { text: "Persistent scalp discomfort that doesn't improve with regular shampoos", icon: "AlertCircle" }
    ],
    footnote: "If you're noticing several of these symptoms together, especially ongoing itching and flaking, it's a strong sign that a professional dandruff clinic Dubai evaluation would be more effective than continuing to experiment with over-the-counter products alone. For patients whose main complaint is discomfort rather than visible flaking, a targeted itchy scalp treatment Dubai plan can often bring relief faster than switching between shampoos at home."
  },
  causes: {
    title: "Causes and Risk Factors",
    items: [
      { text: "Excess oil (sebum) production on the scalp", icon: "Droplet" },
      { text: "Malassezia yeast, a naturally occurring organism that can overgrow and irritate the scalp", icon: "Microscope" },
      { text: "Dry skin, which sheds more visibly as flakes", icon: "Wind" },
      { text: "Weather changes, including Dubai's shifts between intense heat, humidity, and strong indoor air conditioning", icon: "ThermometerSun" },
      { text: "Stress, which can worsen inflammatory skin conditions", icon: "BrainCircuit" },
      { text: "Hormonal changes affecting oil gland activity", icon: "Activity" },
      { text: "Hair products, including sulfate-heavy shampoos, styling gels, and infrequent washing", icon: "SprayCan" },
      { text: "Poor scalp hygiene or, conversely, over-washing with harsh products", icon: "Droplets" },
      { text: "Diet, with some evidence linking nutritional factors to skin and scalp health", icon: "Apple" },
      { text: "Immune system factors that influence inflammatory skin responses", icon: "ShieldAlert" },
      { text: "Underlying skin conditions such as eczema or psoriasis, which can present with dandruff-like flaking", icon: "Layers" }
    ],
    note: "Because so many factors can overlap, self-diagnosing the cause of chronic dandruff is often unreliable — which is why a dermatologist's assessment adds real value."
  },
  whenToSee: {
    title: "When Should You See a Dermatologist?",
    subtitle: "Book a dermatologist for dandruff Dubai consultation if:",
    items: [
      "Symptoms persist for several weeks despite using anti-dandruff shampoo",
      "Severe itching develops or disrupts sleep",
      "You notice hair thinning or shedding alongside flaking",
      "Thick, adherent scaling appears on the scalp",
      "Home remedies and over-the-counter products fail to help",
      "Recurrent dandruff is affecting your confidence or social comfort"
    ],
    footer: "Persistent or worsening symptoms can sometimes indicate seborrheic dermatitis, fungal overgrowth, or a coexisting skin condition that needs targeted medical care rather than generic scalp products."
  },
  diagnosis: {
    title: "Diagnosis of Dandruff",
    steps: [
      { id: "01", title: "Medical History", description: "Medical history review – including hair care habits, product use, family history of skin conditions, and duration of symptoms.", icon: "ClipboardList" },
      { id: "02", title: "Scalp Examination", description: "Scalp examination – a visual and physical assessment of flaking pattern, redness, and scalp condition.", icon: "Search" },
      { id: "03", title: "Dermoscopy", description: "Dermoscopy – a magnified examination technique that helps distinguish dandruff from other scalp conditions.", icon: "Microscope" },
      { id: "04", title: "Differential Diagnosis", description: "Differential diagnosis – ruling out look-alike conditions such as psoriasis, eczema, or fungal infections.", icon: "GitCompare" },
      { id: "05", title: "Further Evaluation", description: "Further evaluation where necessary, including assessment for fungal infection or scalp psoriasis if the presentation is atypical or treatment-resistant.", icon: "FileSearch" }
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
      { name: "Seborrheic Dermatitis Management", purpose: "Longer-term control of a chronic inflammatory scalp condition", icon: "ShieldCheck" },
      { name: "Lifestyle Recommendations", purpose: "Reduce triggers such as stress and harsh styling habits", icon: "Activity" },
      { name: "Nutrition Advice", purpose: "Support overall skin and scalp health", icon: "Apple" },
      { name: "Hair Care Guidance", purpose: "Correct washing frequency, product choice, and technique", icon: "Waves" },
      { name: "Personalized Dermatology Consultation", purpose: "Ongoing monitoring and treatment adjustment", icon: "UserCheck" }
    ],
    footer: "Whether you're dealing with a dry scalp treatment Dubai need or an oily scalp treatment Dubai concern, the underlying principle is the same: treatment works best when it addresses the root cause rather than only masking symptoms. Our dermatologists explain each recommendation clearly so you understand not just what to do, but why it's being suggested for your scalp specifically.",
    image: '/images/anti-dandruff-treatment-products.jpg'
  },
  bestOffer: {
    title: "Finding the Best Dandruff Treatment Dubai Has to Offer",
    lead: "Patients often ask us how to find the best Dandruff Treatment Dubai has to offer when so many clinics advertise similar-sounding services. In practice, the difference comes down to diagnostic accuracy and follow-up.",
    mid: "For cases involving redness and thicker scaling, our",
    link: "seborrheic dermatitis treatment Dubai protocols",
    tail: "combine medicated topical care with longer-term maintenance, since this condition tends to flare periodically rather than resolve permanently. For patients with a long-standing, treatment-resistant history, we approach chronic dandruff treatment as an ongoing management plan rather than a single course of shampoo — adjusting the approach as your scalp responds over several follow-up visits."
  },
  hairLoss: {
    title: "Can Dandruff Cause Hair Loss?",
    intro: "This is one of the most common questions we hear during Dandruff Treatment Dubai consultations, and it deserves a clear, honest answer.",
    lead: "Dandruff itself does not typically cause permanent, genetic-pattern hair loss. However, it can contribute to temporary hair shedding in a few ways:",
    items: [
      "Scalp inflammation from conditions like seborrheic dermatitis can weaken the hair growth cycle temporarily",
      "Frequent scratching due to itching can damage hair follicles and increase breakage",
      "Ongoing irritation left untreated may prolong shedding beyond what's typical"
    ],
    note: "It's important to distinguish this from genetic hair loss (androgenetic alopecia), which follows a different pattern and has different underlying causes.",
    footer: "If shedding continues after your scalp condition improves, further evaluation for other causes of hair loss due to dandruff-like symptoms may be appropriate — something our dermatology team can assess alongside our dedicated"
  },
  benefits: {
    title: "Benefits of Early Treatment",
    items: [
      { text: "Reduced itching and day-to-day discomfort", icon: "Smile" },
      { text: "A healthier, more balanced scalp environment", icon: "Leaf" },
      { text: "Improved confidence, especially in social and professional settings", icon: "ThumbsUp" },
      { text: "Prevention of flare-ups before they become severe", icon: "ShieldCheck" },
      { text: "Better long-term hair health", icon: "Sparkles" },
      { text: "Reduced scalp inflammation and irritation over time", icon: "HeartPulse" }
    ]
  },
  tips: {
    title: "Scalp Care Tips to Prevent Dandruff",
    items: [
      "Wash your hair at a frequency suited to your scalp type — not too often, not too rarely",
      "Choose a shampoo formulated for your specific scalp condition (dry, oily, or sensitive)",
      "Avoid excessive use of styling products, dry shampoos, and heavy gels",
      "Eat a balanced diet that supports overall skin health",
      "Manage stress through regular routines, sleep, and relaxation techniques",
      "Keep the scalp clean without over-washing or using overly harsh products",
      "Avoid scratching, even when itching is intense, to prevent further irritation",
      "Follow your dermatologist's specific recommendations rather than generic advice found online"
    ]
  },
  whyChoose: {
    title: "Why Choose RamaCare Polyclinic?",
    items: [
      { text: "DHA-licensed doctors delivering care that meets Dubai Health Authority standards", icon: "BadgeCheck" },
      { text: "Experienced dermatologists with a strong understanding of scalp and hair conditions", icon: "Stethoscope" },
      { text: "Personalized treatment plans built around your diagnosis, not generic protocols", icon: "UserCheck" },
      { text: "Modern diagnostic methods, including dermoscopy for accurate scalp assessment", icon: "Microscope" },
      { text: "Comprehensive scalp care, from mild dandruff to more complex conditions like seborrheic dermatitis", icon: "ShieldCheck" },
      { text: "Evidence-based treatment, informed by current dermatological practice", icon: "BookOpenCheck" },
      { text: "Patient-focused care, with time taken to explain your condition and options clearly", icon: "MessageCircle" },
      { text: "Convenient Dubai location, easy to access for consultations and follow-ups", icon: "MapPin" },
      { text: "Ongoing follow-up support to monitor your progress and adjust treatment as needed", icon: "CalendarCheck" }
    ],
    image: '/images/ramacare-polyclinic-dermatology-team.jpg'
  },
  faq: {
    title: "Frequently Asked Questions",
    items: [
      { question: "What causes dandruff?", answer: "Dandruff can be caused by a combination of factors, including excess oil production, an overgrowth of the yeast Malassezia, dry skin, product build-up, and underlying skin conditions such as seborrheic dermatitis." },
      { question: "Is dandruff contagious?", answer: "No, dandruff is not contagious. It cannot be spread through contact, sharing combs, or close proximity to someone else." },
      { question: "Can dandruff lead to hair loss?", answer: "Dandruff itself doesn't usually cause permanent hair loss, but scalp inflammation and scratching can contribute to temporary shedding if left untreated." },
      { question: "How long does Dandruff Treatment Dubai take to show results?", answer: "This varies by individual and underlying cause, but many patients notice improvement within a few weeks of starting a personalized treatment plan, with continued improvement over subsequent months." },
      { question: "Which shampoo is best for dandruff?", answer: "The best shampoo depends on your specific type of dandruff — dry, oily, or fungal-related. A dermatologist can recommend a medicated shampoo suited to your scalp rather than a generic over-the-counter option." },
      { question: "Can stress worsen dandruff?", answer: "Yes, stress is a known trigger that can worsen inflammatory scalp conditions, including dandruff and seborrheic dermatitis." },
      { question: "Can children develop dandruff?", answer: "Yes, though it's less common than in adults. Cradle cap, a related condition, can affect infants, while older children and teenagers can develop typical dandruff, especially around puberty when oil production increases." },
      { question: "Can dandruff return after treatment?", answer: "Dandruff can be a chronic, recurring condition for some people. Ongoing scalp care and, in some cases, maintenance treatment help reduce the frequency and severity of flare-ups." },
      { question: "Should I see a dermatologist for dandruff?", answer: "If your dandruff is persistent, severe, associated with hair shedding, or unresponsive to over-the-counter products, seeing a dermatologist for an accurate diagnosis is strongly recommended." },
      { question: "How often should I wash my hair if I have dandruff?", answer: "This depends on your scalp type. Oily, dandruff-prone scalps often benefit from more frequent washing with a suitable medicated shampoo, while drier scalps may need less frequent washing with a gentler formula." },
      { question: "What's the difference between dandruff and scalp psoriasis?", answer: "Scalp psoriasis typically presents with thicker, more defined, silvery-white scales and well-demarcated patches, whereas dandruff flakes tend to be finer and more diffuse. A dermatologist can distinguish between the two through examination." },
      { question: "Is oily scalp or dry scalp worse for dandruff?", answer: "Neither is inherently \"worst\" — both can cause dandruff, but through different mechanisms, which is why identifying your specific scalp type matters for effective treatment." },
      { question: "Can diet affect dandruff?", answer: "Diet can play a supportive role in overall skin and scalp health, though it's usually one of several contributing factors rather than the sole cause." },
      { question: "Does RamaCare Polyclinic treat seborrheic dermatitis as well as dandruff?", answer: "Yes, our dermatology team manages a full spectrum of scalp conditions, from mild dandruff to more persistent seborrheic dermatitis and related inflammatory conditions." },
      { question: "How do I book a Dandruff Treatment Dubai consultation at RamaCare Polyclinic?", answer: "You can book a consultation by contacting our clinic directly through our Contact Us page or calling our team to schedule an appointment with one of our dermatologists." }
    ]
  },
  conclusion: {
    title: "Conclusion",
    paragraph1: "Persistent flaking, itching, or scalp irritation shouldn't be something you simply live with. While dandruff is common and rarely serious, untreated or recurrent cases can affect your comfort, confidence, and scalp health over time. Understanding the underlying cause — whether it's dryness, excess oil, yeast overgrowth, or a related inflammatory condition — is the first step toward lasting relief.",
    paragraph2: "At RamaCare Polyclinic, our dermatology team is committed to providing accurate diagnosis and personalized Dandruff Treatment Dubai plans based on evidence-based dermatological practice, not one-size-fits-all solutions.\n\nIf you've been struggling with a flaky, itchy, or uncomfortable scalp, a professional evaluation can help you understand what's really going on — and what to do about it.\n\nReady to address your scalp concerns properly? Book a consultation with our dermatology team at RamaCare Polyclinic today and take the first step toward a healthier, flake-free scalp.",
    disclaimer: "Please note: treatment outcomes vary depending on individual diagnosis, scalp condition, and adherence to the recommended plan. This article is for general educational purposes and does not replace a professional medical consultation.",
    cta: "Book Your Scalp Consultation Today"
  }
};

/* ------------------------------------------------------------------ */
/*  PAGE                                                                */
/* ------------------------------------------------------------------ */

export default function DandruffTreatmentDubaiPage() {
  const { showToast, ToastComponent } = useToast();
  const [activeAccordion, setActiveAccordion] = useState(null);
  const router = useRouter();
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - 300 : scrollLeft + 300;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hello RamaCare, I'm interested in Dandruff Treatment. Please help me book a consultation.");
    window.open(`https://wa.me/${content.hero.ctaButtons.secondary.phone}?text=${message}`, '_blank');
  };

  const handleBookAppointment = () => {
    router.push('/book-appointment');
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: content.faq.items.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  const medicalConditionSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalWebPage',
        '@id': 'https://ramacarepolyclinic.ae/services/dandruff-treatment-dubai/#webpage',
        url: 'https://ramacarepolyclinic.ae/services/dandruff-treatment-dubai/',
        name: 'Dandruff Treatment Dubai | RamaCare Polyclinic',
        description: 'Struggling with flaky, itchy scalp? Get expert Dandruff Treatment Dubai at RamaCare Polyclinic. DHA-licensed dermatologists. Book your consultation today.',
        medicalAudience: {
          '@type': 'MedicalAudience',
          audienceType: 'Patient'
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
        '@id': 'https://ramacarepolyclinic.ae/services/dandruff-treatment-dubai/#condition',
        name: 'Dandruff',
        alternateName: 'Pityriasis Capitis',
        description: 'A common scalp condition characterized by flaking of the skin on the scalp, often accompanied by itching.',
        signOrSymptom: content.symptoms.items.map((s) => ({ '@type': 'MedicalSignOrSymptom', name: s.text })),
        riskFactor: content.causes.items.map((c) => ({ '@type': 'MedicalRiskFactor', name: c.text }))
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
            name: 'Dermatology Services',
            item: 'https://ramacarepolyclinic.ae/services/aesthetic-dermatology-dubai/'
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Dandruff Treatment Dubai',
            item: 'https://ramacarepolyclinic.ae/services/dandruff-treatment-dubai/'
          }
        ]
      }
    ]
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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalConditionSchema) }} />
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
            <p className="text-base text-[#5F5F5F] leading-relaxed mb-5 whitespace-pre-line">{content.hero.description1}</p>
            <p className="text-base text-[#5F5F5F] leading-relaxed mb-8 whitespace-pre-line">{content.hero.description2}</p>
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
          {content.whatIs.paragraphs.map((p, i) => {
            const parts = p.split(':');
            if (parts.length > 1 && (p.startsWith("Dandruff vs. ") || p.startsWith("Is dandruff contagious?"))) {
              return (
                <p key={i} className="text-base text-[#5F5F5F] leading-relaxed mb-6">
                  <strong className="text-[#1A1A1A] font-bold block sm:inline mr-1">{parts[0]}:</strong>
                  {parts.slice(1).join(':')}
                </p>
              );
            }
            return (
              <p key={i} className="text-lg text-[#5F5F5F] leading-relaxed mb-6">{p}</p>
            );
          })}
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
            <Link href="/services/dandruff-treatment-dubai" className="text-[#1F5E4B] font-semibold underline hover:text-[#1A5F3F]">
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
      <section className="py-20 bg-[#1A5F3F] relative overflow-hidden">
        <style dangerouslySetInnerHTML={{__html: `
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}} />
        
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">{content.benefits.title}</h2>
          {/* Scroll Arrows */}
          <div className="flex gap-2">
            <button
              onClick={() => scroll('left')}
              aria-label="Scroll left"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white flex items-center justify-center transition-all focus:outline-none"
            >
              <LucideIcons.ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              aria-label="Scroll right"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white flex items-center justify-center transition-all focus:outline-none"
            >
              <LucideIcons.ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        <div className="relative max-w-7xl mx-auto">
          <div 
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto px-6 pb-4 snap-x no-scrollbar scroll-smooth"
          >
            {content.benefits.items.map((item, index) => {
              const IconComponent = LucideIcons[item.icon] || LucideIcons.Circle;
              return (
                <div
                  key={index}
                  className="snap-start flex-shrink-0 w-64 bg-white/10 border border-white/15 rounded-2xl p-6 text-white"
                >
                  <IconComponent className="w-7 h-7 mb-4" />
                  <p className="text-sm font-medium leading-relaxed">{item.text}</p>
                </div>
              );
            })}
          </div>
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
      {/* 16. CONCLUSION — simple centered final pitch                   */}
      {/* ============================================================ */}
      <section className="bg-[#1A5F3F] text-white py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{content.conclusion.title}</h2>
          <p className="text-white/90 leading-relaxed mb-4">{content.conclusion.paragraph1}</p>
          <p className="text-white/90 leading-relaxed mb-8 whitespace-pre-line">{content.conclusion.paragraph2}</p>
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

      {/* Reviewer Section */}
      <section className="bg-[#F5F1EA] py-12 px-6">
        <div className="max-w-3xl mx-auto">
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
        </div>
      </section>

      {/* ============================================== */}
      {/* 17. CLINICAL RESOURCES & RELATED SERVICES      */}
      {/* ============================================== */}
      <footer className="bg-[#F9F7F2] py-16 px-4 border-t border-gray-200">
        <div className="mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-12 text-left">
            {/* Related Services Column */}
            <div className="lg:col-span-6 space-y-6">
              <h4 className="text-lg font-bold text-[#1A5F3F] mb-4 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-[#D4A574] rounded-full inline-block"></span>
                Related Services & Care
              </h4>
              <p className="text-sm text-[#5F5F5F] mb-4">
                Explore other dermatology and skin health services at RamaCare Polyclinic that may complement your scalp care:
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                <Link href="/services/aesthetic-dermatology-dubai/" className="text-sm text-[#5F5F5F] hover:text-[#1F5E4B] flex items-center gap-1.5 transition-colors font-medium">
                  <LucideIcons.ChevronRight className="w-3.5 h-3.5 text-[#D4A574]" /> Dermatology Services
                </Link>
                <Link href="/services/hair-loss-dubai/" className="text-sm text-[#5F5F5F] hover:text-[#1F5E4B] flex items-center gap-1.5 transition-colors font-medium">
                  <LucideIcons.ChevronRight className="w-3.5 h-3.5 text-[#D4A574]" /> Hair Loss Treatment
                </Link>
                <Link href="/services/hair-prp-dubai/" className="text-sm text-[#5F5F5F] hover:text-[#1F5E4B] flex items-center gap-1.5 transition-colors font-medium">
                  <LucideIcons.ChevronRight className="w-3.5 h-3.5 text-[#D4A574]" /> PRP Hair Treatment
                </Link>
                <Link href="/services/psoriasis-treatment-dubai/" className="text-sm text-[#5F5F5F] hover:text-[#1F5E4B] flex items-center gap-1.5 transition-colors font-medium">
                  <LucideIcons.ChevronRight className="w-3.5 h-3.5 text-[#D4A574]" /> Psoriasis Treatment
                </Link>
                <Link href="/services/skin-diseases-treatment/" className="text-sm text-[#5F5F5F] hover:text-[#1F5E4B] flex items-center gap-1.5 transition-colors font-medium">
                  <LucideIcons.ChevronRight className="w-3.5 h-3.5 text-[#D4A574]" /> Eczema Treatment
                </Link>
                <Link href="/services/rosacea-treatment-dubai/" className="text-sm text-[#5F5F5F] hover:text-[#1F5E4B] flex items-center gap-1.5 transition-colors font-medium">
                  <LucideIcons.ChevronRight className="w-3.5 h-3.5 text-[#D4A574]" /> Rosacea Treatment
                </Link>
                <Link href="/services/general-physician-dubai/" className="text-sm text-[#5F5F5F] hover:text-[#1F5E4B] flex items-center gap-1.5 transition-colors font-medium">
                  <LucideIcons.ChevronRight className="w-3.5 h-3.5 text-[#D4A574]" /> General Physician
                </Link>
                <Link href="/doctors/" className="text-sm text-[#5F5F5F] hover:text-[#1F5E4B] flex items-center gap-1.5 transition-colors font-medium">
                  <LucideIcons.ChevronRight className="w-3.5 h-3.5 text-[#D4A574]" /> About Us
                </Link>
                <Link href="/contact-us/" className="text-sm text-[#5F5F5F] hover:text-[#1F5E4B] flex items-center gap-1.5 transition-colors font-medium col-span-2">
                  <LucideIcons.ChevronRight className="w-3.5 h-3.5 text-[#D4A574]" /> Contact Us
                </Link>
              </div>
            </div>

            {/* External References Column */}
            <div className="lg:col-span-6 space-y-6">
              <h4 className="text-lg font-bold text-[#1A5F3F] mb-4 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-[#D4A574] rounded-full inline-block"></span>
                Clinical Reference Guidelines
              </h4>
              <p className="text-sm text-[#5F5F5F] mb-4">
                Our clinical protocols align with standard guidelines established by leading dermatology and health organizations:
              </p>
              <ul className="space-y-3">
                <li>
                  <a href="https://www.aad.org" target="_blank" rel="noopener noreferrer" className="text-sm text-[#5F5F5F] hover:text-[#1F5E4B] flex items-center gap-1.5 transition-colors font-medium">
                    <LucideIcons.ExternalLink className="w-3.5 h-3.5 text-[#1F5E4B] flex-shrink-0" />
                    <span>American Academy of Dermatology (AAD) <span className="text-xs text-[#8C8C8C] font-normal">— general patient education on dandruff and seborrheic dermatitis</span></span>
                  </a>
                </li>
                <li>
                  <a href="https://www.mayoclinic.org" target="_blank" rel="noopener noreferrer" className="text-sm text-[#5F5F5F] hover:text-[#1F5E4B] flex items-center gap-1.5 transition-colors font-medium">
                    <LucideIcons.ExternalLink className="w-3.5 h-3.5 text-[#1F5E4B] flex-shrink-0" />
                    <span>Mayo Clinic <span className="text-xs text-[#8C8C8C] font-normal">— overview of dandruff causes, symptoms, and self-care</span></span>
                  </a>
                </li>
                <li>
                  <a href="https://www.who.int" target="_blank" rel="noopener noreferrer" className="text-sm text-[#5F5F5F] hover:text-[#1F5E4B] flex items-center gap-1.5 transition-colors font-medium">
                    <LucideIcons.ExternalLink className="w-3.5 h-3.5 text-[#1F5E4B] flex-shrink-0" />
                    <span>World Health Organization (WHO) <span className="text-xs text-[#8C8C8C] font-normal">— global reports and health topics on chronic conditions</span></span>
                  </a>
                </li>
                <li>
                  <a href="https://www.bad.org.uk" target="_blank" rel="noopener noreferrer" className="text-sm text-[#5F5F5F] hover:text-[#1F5E4B] flex items-center gap-1.5 transition-colors font-medium">
                    <LucideIcons.ExternalLink className="w-3.5 h-3.5 text-[#1F5E4B] flex-shrink-0" />
                    <span>British Association of Dermatologists <span className="text-xs text-[#8C8C8C] font-normal">— clinical guidelines and patient information sheets on scalp conditions</span></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      {/* Content Reviewer Badge */}
      <ContentReviewBadge doctorName="Dr. Sahar Zomorrodi" pageSlug="/services/dandruff-treatment-dubai/" />

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