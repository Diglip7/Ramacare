import React, { useState } from 'react';
import Layout from '../../../components/Layout';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';

// Color Palette & Branding:
// Brand Green: #1F5E4B (Hover: #17493A)
// Brand Gold/Bronze: #C5A880 (Hover: #B2956D)
// Brand Light Cream: #FDFCF7
// Brand Light Sage: #E6EFEA

export default function BestHairSpecialistPage() {
  const [activeTab, setActiveTab] = useState('dermatologist');
  const [faqOpen, setFaqOpen] = useState(null);
  const [activeGender, setActiveGender] = useState('men');

  const tocItems = [
    { id: 'role', label: 'What Does a Hair Specialist Do?' },
    { id: 'cause', label: 'Why the Cause of Hair Loss Matters' },
    { id: 'signs', label: 'Common Signs You Should See a Hair Specialist' },
    { id: 'diagnose', label: 'How a Hair Specialist Diagnoses Hair Loss' },
    { id: 'questions', label: 'Questions to Ask a Hair Specialist' },
    { id: 'treatments', label: 'Hair Treatment Options' },
    { id: 'cycle', label: 'PRP and the Hair Growth Cycle' },
    { id: 'results', label: 'PRP Hair Treatment Results' },
    { id: 'prp-vs-meso', label: 'PRP vs Hair Mesotherapy' },
    { id: 'prp-vs-transplant', label: 'PRP vs Hair Transplant' },
    { id: 'choose', label: 'How to Choose a Hair Specialist in Dubai' },
    { id: 'redflags', label: 'Red Flags When Choosing a Hair Clinic' },
    { id: 'gender-diff', label: 'Hair Loss in Men vs Women' },
    { id: 'age-diff', label: 'Hair Loss by Age' },
    { id: 'dubai-climate', label: 'Dubai-Specific Considerations' },
    { id: 'why-ramacare', label: 'Why Choose RamaCare Polyclinic?' },
    { id: 'faqs', label: 'Frequently Asked Questions' },
    { id: 'disclaimer', label: 'Medical Disclaimer' },
    { id: 'book-consult', label: 'Book a Hair and Scalp Consultation in Dubai' },
    { id: 'related-guides', label: 'Related Hair Treatment Guides' }
  ];

  const specialistTypes = {
    dermatologist: {
      title: "Dermatologist",
      desc: "A dermatologist is a physician trained in skin, hair, and nail conditions and can diagnose and manage a broad range of scalp and hair disorders, including inflammatory and autoimmune conditions."
    },
    trichologist: {
      title: "Trichologist",
      desc: "A trichologist focuses specifically on hair and scalp health, though qualifications and scope of practice vary by training background."
    },
    surgeon: {
      title: "Hair-Transplant Surgeon",
      desc: "A hair-transplant surgeon performs surgical hair restoration and is relevant once a patient has been assessed as a suitable candidate for transplantation."
    },
    aesthetician: {
      title: "Aesthetic Practitioner",
      desc: "An aesthetic practitioner may offer procedures such as PRP or Hair Mesotherapy as part of a broader aesthetic practice."
    }
  };

  const commonCauses = [
    { title: "Genetic hair loss (androgenetic alopecia)", desc: "the most common cause of progressive thinning in both men and women, typically following a recognizable pattern and influenced by family history." },
    { title: "Telogen effluvium", desc: "a temporary, diffuse shedding that can follow illness, surgery, major stress, or childbirth, usually appearing a few months after the triggering event." },
    { title: "Alopecia areata", desc: "an autoimmune condition that causes patchy hair loss and requires medical evaluation." },
    { title: "Hormonal changes", desc: "including thyroid imbalances, postpartum shifts, or other endocrine factors." },
    { title: "Nutritional deficiencies", desc: "such as low iron or protein intake, which can affect hair growth." },
    { title: "Thyroid-related problems", desc: "both underactive and overactive thyroid function can influence hair density." },
    { title: "Scalp inflammation, seborrheic dermatitis, and psoriasis", desc: "inflammatory scalp conditions that can contribute to shedding and discomfort." },
    { title: "Scalp infections", desc: "including fungal infections that require specific treatment rather than cosmetic procedures." },
    { title: "Traction alopecia", desc: "hair loss caused by prolonged tension from tight hairstyles or certain hair extensions." },
    { title: "Stress-related shedding", desc: "a recognized but often temporary contributor to increased hair fall." },
    { title: "Medication-related hair loss", desc: "some medications list hair thinning as a side effect, which is worth discussing with a clinician rather than self-diagnosing." }
  ];

  const warningSigns = [
    "Increasing hair shedding over several weeks or months",
    "A widening hair part",
    "A receding hairline",
    "Visible scalp through the hair, especially in good lighting",
    "Thinning at the crown",
    "Patchy hair loss in one or more areas",
    "Sudden, noticeable hair shedding",
    "Persistent scalp itching",
    "Scalp redness or irritation",
    "Flaking that does not resolve with regular shampoo",
    "Increased hair breakage",
    "Thinning that has persisted for more than a few months",
    "Noticeable changes in hair texture"
  ];

  const diagnosticSteps = [
    { label: "Medical History", desc: "When the shedding started, how it has changed, current and past medical conditions, medications, and recent life events such as illness or major stress." },
    { label: "Family History", desc: "Since genetic pattern hair loss often runs in families, this history helps place your case in context." },
    { label: "Scalp Examination", desc: "A visual and physical check for redness, scaling, inflammation, or other visible changes." },
    { label: "Hair Density Assessment", desc: "Comparing hair density across different regions of the scalp to identify whether thinning is localized or widespread." },
    { label: "Hair Pull Test, Where Appropriate", desc: "A simple in-clinic test that can help indicate whether shedding is currently active." },
    { label: "Trichoscopy / Dermoscopic Assessment, Where Available", desc: "A magnified view of the scalp and hair shafts that can help characterize certain patterns of hair loss." },
    { label: "Blood Tests, When Clinically Indicated", desc: "Tests such as iron studies or thyroid function may be recommended based on your history and examination findings, rather than ordered automatically for every patient. Not everyone needs the same panel of tests — a responsible clinician tailors this to your specific presentation." }
  ];

  const questionsToAsk = [
    "What may be causing my hair loss?",
    "Is my hair loss temporary or progressive?",
    "What treatment options are appropriate for me specifically?",
    "Do I need blood tests, and if so, why?",
    "Am I a suitable candidate for PRP?",
    "Would Hair Mesotherapy be appropriate for my situation?",
    "How many sessions might realistically be needed?",
    "What results are realistic given my stage of hair loss?",
    "How will my progress be monitored over time?",
    "What happens if the treatment does not produce the expected results?"
  ];

  const ageGroups = [
    { age: "Young adults", desc: "Hair loss at a younger age can still be linked to genetic factors, but sudden or patchy loss at this stage is also worth having assessed rather than assumed to be typical." },
    { age: "Adults", desc: "This is when androgenetic alopecia commonly becomes more noticeable, though lifestyle, stress, and health factors also play a role." },
    { age: "Middle age", desc: "Hormonal changes, cumulative genetic effects, and general health factors can all contribute to changes in hair density." },
    { age: "Older adults", desc: "Hair naturally thins with age for many people, but new, sudden, or unusual patterns of loss still merit a professional opinion." }
  ];

  const dubaiClimatePoints = [
    { title: "Hot weather and sun exposure", desc: "can affect scalp comfort and hair condition over time, though this does not equate to permanent hair loss on its own." },
    { title: "Sweating", desc: "particularly with an active outdoor lifestyle, may affect scalp comfort and hygiene routines." },
    { title: "Frequent swimming", desc: "especially in chlorinated pools, can affect hair texture and dryness." },
    { title: "Lifestyle changes", desc: "such as relocating to Dubai, adjusting to a new climate, or changes in routine — are sometimes reported by patients around the same time as noticing increased shedding, though correlation does not necessarily mean causation." },
    { title: "Hair-care practices", desc: "including heat styling and certain hairstyling habits common in warm climates, can contribute to hair breakage if not managed carefully." }
  ];

  const redFlags = [
    "Guaranteed hair regrowth claims",
    "One-treatment-fits-all packages",
    "No medical assessment before treatment is offered",
    "No explanation of what may be causing your hair loss",
    "Pressure to purchase multi-session packages on the first visit",
    "Unrealistic before-and-after promises",
    "Unclear or unverifiable practitioner qualifications",
    "No discussion of risks or limitations",
    "No follow-up plan after treatment begins"
  ];

  const selectionChecklist = [
    "Relevant medical qualifications — Confirm the practitioner’s medical background and licensing.",
    "Experience with hair-loss conditions — Not just aesthetic procedures, but experience recognizing different causes of hair loss.",
    "Proper diagnosis before treatment — A consultation should include assessment, not just a treatment menu.",
    "Personalized treatment plans — Your plan should reflect your findings, not a standard package.",
    "Transparent explanation of benefits and limitations — Be wary of one-sided sales pitches.",
    "Appropriate follow-up — Hair growth takes time, so ongoing review matters.",
    "Patient safety — Procedures should be performed in a proper clinical setting with appropriate protocols.",
    "Realistic expectations — A trustworthy specialist will tell you what is and isn’t likely, not just what you want to hear.",
    "Relevant before-and-after documentation, where appropriate — Should reflect genuine, individual cases rather than stock imagery.",
    "Clear communication — You should leave the consultation understanding your own situation, not just a sales offer."
  ];

  const ramacareWhy = [
    { title: "Personalized consultation", text: "starting with your specific history and concerns, not a fixed script." },
    { title: "Individual treatment planning", text: "recommendations based on your assessment findings." },
    { title: "Hair and scalp assessment", text: "a structured evaluation rather than an immediate sales conversation." },
    { title: "Patient education", text: "helping you understand what is happening and why, in plain language." },
    { title: "Appropriate treatment selection", text: "matching options such as PRP or Hair Mesotherapy to what is clinically appropriate for you." },
    { title: "Follow-up guidance", text: "supporting you through a treatment timeline that respects how hair actually grows." },
    { title: "Dubai location", text: "based in Jumeirah 1, accessible for residents across the city." },
    { title: "Multispecialty healthcare environment", text: "hair and scalp concerns are sometimes connected to broader health factors, and being part of a wider clinical setting can support that context." }
  ];

  const faqs = [
    { q: "What does a hair specialist do?", a: "A hair specialist assesses the pattern and possible causes of your hair loss through history-taking and scalp examination, then recommends a treatment approach suited to your findings. This may range from lifestyle guidance to medical management or procedures such as PRP." },
    { q: "Which doctor should I see for hair loss?", a: "This depends on your symptoms. A general or dermatology-trained clinician can assess most cases initially and refer you further if a more specific condition, such as an autoimmune or hormonal cause, is suspected." },
    { q: "What is the difference between a dermatologist and a trichologist?", a: "A dermatologist is a physician trained in skin, hair, and nail conditions who can diagnose and treat a wide range of disorders. A trichologist focuses specifically on hair and scalp health, though training backgrounds vary, so it is worth confirming qualifications." },
    { q: "When should I see a hair specialist?", a: "It is reasonable to seek an assessment if you notice increasing shedding, a widening part, patchy loss, scalp irritation, or thinning that has persisted for more than a few months. Sudden or patchy hair loss deserves earlier evaluation." },
    { q: "What tests are used to diagnose hair loss?", a: "Diagnosis typically starts with history-taking and a scalp examination, sometimes supported by a hair pull test or trichoscopy. Blood tests, such as iron or thyroid studies, may be recommended when clinically indicated rather than ordered for everyone automatically." },
    { q: "Can a hair specialist diagnose the cause of hair loss?", a: "A hair specialist can identify likely causes through assessment and, where needed, appropriate testing. Some diagnoses may require referral to another specialist depending on the findings." },
    { q: "Is PRP suitable for everyone?", a: "No. PRP suitability depends on the underlying cause of hair loss, the stage of thinning, and individual health factors, which is why it should only be recommended after assessment." },
    { q: "Does PRP work for genetic hair loss?", a: "PRP is often discussed for early-to-moderate androgenetic (genetic) hair loss, but responses vary between individuals, and it does not work identically for everyone." },
    { q: "How long does PRP take to show results?", a: "Because hair grows in cycles, changes are typically assessed over several months rather than after a single session. Timelines vary by individual." },
    { q: "Is Hair Mesotherapy better than PRP?", a: "Neither is universally “better.” They work through different mechanisms and suit different situations, so the appropriate choice depends on your specific assessment." },
    { q: "Can PRP replace a hair transplant?", a: "Not necessarily. PRP and hair transplantation serve different purposes — PRP supports the scalp environment for existing follicles, while transplantation surgically relocates follicles. The appropriate option depends on the stage of hair loss." },
    { q: "How many PRP sessions might I need?", a: "This varies by individual and is determined as part of a personalized treatment plan based on your assessment and response." },
    { q: "Can hair loss be reversed?", a: "Some causes of hair loss, such as temporary shedding after illness or stress, often improve on their own or with appropriate management. Genetic hair loss is typically managed rather than fully reversed. Outcomes vary by cause and individual." },
    { q: "What causes sudden hair loss?", a: "Sudden hair loss can be linked to stress, illness, hormonal changes, certain medications, or other triggers. It is worth having sudden or significant shedding assessed by a healthcare professional." },
    { q: "Is hair shedding normal?", a: "Some daily hair shedding is a normal part of the hair-growth cycle. It becomes worth discussing with a specialist when shedding noticeably increases, persists, or is accompanied by visible thinning." },
    { q: "How much hair shedding is considered normal?", a: "Shedding varies between individuals, and there is no single number that applies to everyone. A noticeable increase from your own baseline is generally a more useful signal than comparing to an average figure." },
    { q: "Can stress cause hair loss?", a: "Yes, stress is a recognized contributor to a form of temporary hair shedding known as telogen effluvium, which often improves once the underlying stressor resolves, though this should still be confirmed by assessment rather than assumed." },
    { q: "Can women visit a hair specialist?", a: "Yes. Hair loss in women is common and can have several distinct causes, including hormonal changes, nutritional factors, and genetic factors. A specialist assessment applies equally to women and men." },
    { q: "How do I choose a hair specialist in Dubai?", a: "Look for a practitioner who performs a genuine assessment before recommending treatment, explains the possible causes of your hair loss, discusses realistic outcomes, and offers a personalized rather than one-size-fits-all plan." },
    { q: "What should I ask during a hair consultation?", a: "Useful questions include what may be causing your hair loss, whether it is temporary or progressive, what treatment options suit your case, whether tests are needed, and how your progress will be monitored over time." }
  ];

  const relatedGuides = [
    { label: 'Hair PRP Treatment in Dubai', link: '/services/hair-prp-dubai/', desc: 'A detailed look at how PRP hair treatment works, who it may be suitable for, and what a typical treatment course involves — useful if you want to understand this option in more depth.' },
    { label: 'Hair Loss Treatment in Dubai', link: '/services/hair-loss-dubai/', desc: 'An overview of the treatment options available for hair loss in Dubai, useful as a starting point before narrowing down a specific approach.' },
    { label: 'Hair Fall Treatment in Dubai', link: '/services/hair-treatment-dubai/', desc: 'Focused on managing active hair fall, this guide is helpful if shedding rather than pattern baldness is your main concern.' },
    { label: 'Hair Regrowth Treatment Dubai', link: '/services/hair-regrowth-treatment-dubai/', desc: 'Covers approaches aimed at supporting hair growth, useful if you are exploring options beyond addressing shedding alone.' },
    { label: 'Hair Growth Cycle', link: '/services/hair-growth-cycle/', desc: 'Explains the anagen, catagen, telogen, and exogen phases in more depth — helpful for understanding why hair treatments take time to show results.' },
    { label: 'Hair Loss Causes', link: '/services/hair-loss-dubai/', desc: 'A deeper dive into the many possible causes of hair loss, useful if you want to better understand what might be behind your own symptoms before your consultation.' },
    { label: 'PRP Hair Treatment Before and After', link: '/services/prp-hair-treatment-before-and-after/', desc: 'Discusses what realistic outcomes and documentation look like over the course of PRP treatment.' },
    { label: 'PRP Hair Treatment Recovery', link: '/services/prp-hair-treatment-recovery/', desc: 'Covers what to expect in terms of downtime and aftercare following a PRP session.' },
    { label: 'PRP Hair Treatment Cost in Dubai', link: '/services/hair-prp-cost-dubai/', desc: 'Useful if you want to understand the general cost considerations involved in a PRP treatment plan.' },
    { label: 'PRP vs Hair Transplant in Dubai', link: '/services/prp-vs-hair-transplant-dubai/', desc: 'A direct comparison to help you understand when a non-surgical approach may be appropriate versus when surgical restoration may be considered.' },
    { label: 'PRP vs Hair Mesotherapy', link: '/services/prp-vs-hair-mesotherapy-dubai/', desc: 'Compares these two non-surgical options side by side to help clarify which may suit your situation.' },
    { label: 'Hair Mesotherapy in Dubai', link: '/services/mesotherapy-dubai/', desc: 'A closer look at Hair Mesotherapy as a treatment option, including how it differs from PRP.' }
  ];

  return (
    <Layout>
      <Head>
        <title key="title">Best Hair Specialist in Dubai | RamaCare Polyclinic</title>
        <meta
          name="description"
          content="Looking for a qualified hair specialist in Dubai? Learn how hair loss is properly diagnosed and treated, and book a consultation at RamaCare Polyclinic."
          key="description"
        />
        <meta name="keywords" content="Best Hair Specialist in Dubai, Hair specialist Dubai, Hair loss doctor Dubai, Jumeirah hair specialist, PRP hair assessment Dubai, Hair clinic Dubai" />

        {/* JSON-LD Schema Markup */}
        <script
          key="schema-clinic"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalClinic",
              "name": "RamaCare Polyclinic",
              "url": "https://ramacarepolyclinic.ae",
              "image": "https://ramacarepolyclinic.ae/images/hair-scalp-consultation-dubai.jpg",
              "description": "DHA-licensed multi-specialty polyclinic in Jumeirah 1, Dubai, offering physiotherapy, Ayurveda, dermatology and aesthetics, and dental services, including hair and scalp assessment and treatment.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "12 Al Dhiyafah Rd - Jumeirah Terrace Building, Ground Floor, Jumeirah 1",
                "addressLocality": "Jumeirah 1, Dubai",
                "addressRegion": "Dubai",
                "addressCountry": "AE"
              },
              "telephone": "+971 56 659 7878",
              "medicalSpecialty": [
                "Dermatology",
                "Physiotherapy",
                "Ayurveda",
                "Dentistry"
              ],
              "isAcceptingNewPatients": true,
              "priceRange": "$$"
            })
          }}
        />

        <script
          key="schema-webpage"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "@id": "https://ramacarepolyclinic.ae/services/best-hair-specialist-dubai",
              "url": "https://ramacarepolyclinic.ae/services/best-hair-specialist-dubai",
              "name": "Best Hair Specialist in Dubai | RamaCare Polyclinic",
              "description": "Looking for a qualified hair specialist in Dubai? Learn how hair loss is properly diagnosed and treated, and book a consultation at RamaCare Polyclinic.",
              "inLanguage": "en-AE",
              "isPartOf": {
                "@type": "WebSite",
                "url": "https://ramacarepolyclinic.ae",
                "name": "RamaCare Polyclinic"
              },
              "about": {
                "@type": "MedicalCondition",
                "name": "Hair loss"
              },
              "publisher": {
                "@type": "MedicalClinic",
                "name": "RamaCare Polyclinic",
                "url": "https://ramacarepolyclinic.ae"
              }
            })
          }}
        />

        <script
          key="schema-article"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalWebPage",
              "@id": "https://ramacarepolyclinic.ae/services/best-hair-specialist-dubai#article",
              "headline": "Best Hair Specialist in Dubai: How to Choose the Right Expert",
              "description": "A patient-focused guide to evaluating hair specialists in Dubai, understanding the causes of hair loss, and choosing appropriate treatment such as PRP or Hair Mesotherapy.",
              "url": "https://ramacarepolyclinic.ae/services/best-hair-specialist-dubai",
              "mainEntityOfPage": "https://ramacarepolyclinic.ae/services/best-hair-specialist-dubai",
              "inLanguage": "en-AE",
              "about": {
                "@type": "MedicalCondition",
                "name": "Hair loss"
              },
              "audience": {
                "@type": "PatientsAudience"
              },
              "lastReviewed": "2026-08-08",
              "author": {
                "@type": "Organization",
                "name": "RamaCare Polyclinic",
                "url": "https://ramacarepolyclinic.ae"
              },
              "publisher": {
                "@type": "MedicalClinic",
                "name": "RamaCare Polyclinic",
                "url": "https://ramacarepolyclinic.ae",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://ramacarepolyclinic.ae/images/Logo.png"
                }
              },
              "datePublished": "2026-08-08",
              "dateModified": "2026-08-08"
            })
          }}
        />

        <script
          key="schema-breadcrumbs"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://ramacarepolyclinic.ae"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Services",
                  "item": "https://ramacarepolyclinic.ae/services"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Hair Treatment",
                  "item": "https://ramacarepolyclinic.ae/services/hair-treatment-dubai"
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "name": "Best Hair Specialist in Dubai",
                  "item": "https://ramacarepolyclinic.ae/services/best-hair-specialist-dubai"
                }
              ]
            })
          }}
        />

        <script
          key="schema-faqs"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqs.map(item => ({
                "@type": "Question",
                "name": item.q,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": item.a
                }
              }))
            })
          }}
        />
      </Head>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-3">
        <nav aria-label="Breadcrumb" className="mb-4 flex items-center text-xs font-medium text-[#5F5F5F] gap-1.5">
          <Link href="/" className="hover:text-[#1F5E4B] transition-colors">Home</Link>
          <span className="mx-1">/</span>
          <Link href="/services" className="hover:text-[#1F5E4B] transition-colors">Services</Link>
          <span className="mx-1">/</span>
          <Link href="/services/hair-treatment-dubai" className="hover:text-[#1F5E4B] transition-colors">Hair Treatment</Link>
          <span className="mx-1">/</span>
          <span className="text-[#1F5E4B]">Best Hair Specialist in Dubai</span>
        </nav>
      </div>

      {/* ============ ASYMMETRIC ELEGANT HERO SECTION ============ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#FDFCF7] via-[#F4F1EA] to-[#E6EFEA] pt-12 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Content Column */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 space-y-6"
            >
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#1F5E4B]/10 text-[#1F5E4B] text-sm font-bold uppercase tracking-wider">
                <LucideIcons.ShieldCheck className="w-3.5 h-3.5" /> DHA Licensed Clinic in Jumeirah 1
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A] leading-tight">
                Best Hair Specialist in Dubai: How to Choose the Right Expert
              </h1>

              {/* REQUIRED TOP HERO DETAILS (INSERTED HERE) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-y border-gray-200/80 py-4 my-2 text-[#1A1A1A] bg-white/40 p-4 rounded-xl backdrop-blur-xs">
                <div className="flex items-center gap-2">
                  <LucideIcons.MapPin className="w-5 h-5 text-[#1F5E4B] shrink-0" />
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-[#7F7F7F] font-bold">Licensing</p>
                    <p className="font-semibold text-xs md:text-sm">DHA Licensed Polyclinic in Jumeirah 1, Dubai</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <LucideIcons.Search className="w-5 h-5 text-[#C5A880] shrink-0" />
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-[#7F7F7F] font-bold">Specialist Consultation</p>
                    <p className="font-semibold text-xs md:text-sm">Structural Scalp and Hair Assessment</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <LucideIcons.ShieldAlert className="w-5 h-5 text-[#1F5E4B] shrink-0" />
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-[#7F7F7F] font-bold">Clinical Focus</p>
                    <p className="font-semibold text-xs md:text-sm">PRP, Hair Mesotherapy, and Diagnostic Pathways</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <LucideIcons.PhoneCall className="w-5 h-5 text-[#C5A880] shrink-0" />
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-[#7F7F7F] font-bold">Contact Number</p>
                    <a href="tel:(+971) 04 286 2006" className="font-semibold text-xs md:text-sm hover:underline text-[#1F5E4B]">(+971) 04 286 2006</a>
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#5F5F5F] leading-relaxed">
                Hair loss can have many different causes, so choosing a specialist based only on a treatment advertisement may not be enough. A receding hairline, a widening part, or a handful of extra strands in the shower drain can all mean very different things depending on the person. What looks like ordinary shedding to one patient might be genetic pattern hair loss, a temporary reaction to stress or illness, a scalp condition, or a sign of an underlying hormonal or nutritional issue. Because the causes are so varied, the right starting point is not a specific treatment — it is a proper, individualized assessment.
              </p>
              <p className="text-sm sm:text-base text-[#5F5F5F] leading-relaxed">
                This is why patients searching for the best hair specialist in Dubai are usually looking for more than a clinic with a nice website. They want a practitioner who will actually look at their scalp, ask about their history, and explain what is happening before recommending anything. A thorough hair-loss evaluation typically considers the pattern of hair loss, the condition of the scalp, hair density across different areas of the head, where the person sits in their natural hair-growth cycle, relevant medical history, lifestyle factors, family history of hair loss, and possible nutritional or hormonal contributors. Only once these pieces are understood does it make sense to talk about PRP, Hair Mesotherapy, medical management, or any other option.
              </p>
              <p className="text-sm sm:text-base text-[#5F5F5F] leading-relaxed">
                At RamaCare Polyclinic, a DHA-licensed multi-specialty clinic in Jumeirah 1, Dubai, hair and scalp concerns are approached the same way — through assessment first, treatment second. This guide is designed to help you understand what a hair specialist actually does, why an accurate diagnosis matters more than any single procedure, and what to look for — and look out for — when choosing hair specialist care in Dubai. It does not claim that any one clinic or doctor is universally “the best,” because the right specialist for you depends on your specific situation, your goals, and the cause of your hair loss.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/book-appointment/"
                  className="inline-flex items-center justify-center gap-2 bg-[#1F5E4B] text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-[#17493A] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <LucideIcons.Calendar className="w-4 h-4" /> Book Appointment
                </Link>
                <a
                  href="https://wa.me/971566597878?text=Hello%20RamaCare%20Polyclinic%2C%20I%20would%20like%20to%20book%20a%20consultation%20with%20a%20hair%20specialist%20in%20Dubai."
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-flex items-center justify-center gap-2 bg-white border border-gray-300 text-[#1A1A1A] px-8 py-4 rounded-xl font-bold text-sm hover:bg-gray-50 transition-all shadow-sm"
                >
                  <LucideIcons.MessageCircle className="w-4 h-4 text-green-600" /> WhatsApp Consult
                </a>
              </div>
            </motion.div>

            {/* Right Interactive Card / Media Column */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-150 space-y-6 relative z-10">
                <div className="rounded-2xl overflow-hidden h-[300px] sm:h-[400px] lg:h-[480px] shadow-inner relative">
                  {/* IMAGE 1 (HERO) */}
                  <img
                    src="/images/Patient consultation for hair loss.jpg"
                    alt="Patient consultation for hair loss assessment in Dubai"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <h4 className="font-bold text-[#1A1A1A] text-sm uppercase tracking-wide text-center">Individualized Assessment Focus</h4>
                  <p className="text-sm text-[#5F5F5F] leading-relaxed text-center">
                    A personalized hair and scalp consultation is the first step in understanding hair loss.
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#C5A880]/15 rounded-full blur-2xl z-0" />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#1F5E4B]/10 rounded-full blur-2xl z-0" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============ TABLE OF CONTENTS ============ */}
      <section className="bg-white py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FDFCF7] rounded-3xl border border-gray-200/60 p-6 md:p-8">
            <h2 className="text-lg font-bold text-[#1A1A1A] mb-4 flex items-center gap-2">
              <LucideIcons.ListCollapse className="w-5 h-5 text-[#C5A880]" /> Quick Navigation
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {tocItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="flex items-center text-sm font-semibold text-[#5F5F5F] hover:text-[#1F5E4B] transition-all bg-white px-3 py-2.5 rounded-lg border border-gray-150 hover:border-[#1F5E4B]/30 hover:shadow-xs"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880] mr-2 shrink-0" />
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ WHAT DOES A HAIR SPECIALIST DO? ============ */}
      <section id="role" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Header */}
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-bold text-[#1A1A1A]">What Does a Hair Specialist Do?</h2>
            <div className="bg-[#E6EFEA] border-l-4 border-[#1F5E4B] p-5 rounded-r-2xl">
              <p className="text-sm text-[#1A1A1A] leading-relaxed font-medium">
                <strong>What is a hair specialist?</strong> A hair specialist is a healthcare professional who assesses hair loss and scalp conditions, identifies possible causes through examination and history-taking, and recommends treatment options suited to the individual. This may include medical management, procedures such as PRP, or referral for further tests when needed.
              </p>
            </div>
            <p className="text-sm text-[#5F5F5F] leading-relaxed">
              A hair specialist’s role generally includes:
            </p>
          </div>
          {/* Interactive Roles Display */}
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
              {[
                { title: "Hair-loss assessment", text: "understanding when the shedding started, how it has progressed, and what pattern it follows." },
                { title: "Scalp examination", text: "checking for redness, flaking, inflammation, or signs of infection." },
                { title: "Hair-density assessment", text: "comparing density across the scalp to identify localized versus diffuse thinning." },
                { title: "Identifying patterns of hair loss", text: "such as a receding hairline, crown thinning, or patchy loss." },
                { title: "Reviewing medical history", text: "including past illnesses, medications, and family history." },
                { title: "Identifying possible triggers", text: "stress, recent illness, childbirth, crash dieting, or hormonal changes." },
                { title: "Recommending appropriate treatment", text: "based on the findings rather than a fixed package." },
                { title: "Monitoring progress", text: "since hair grows slowly, follow-up review is part of responsible care." }
              ].map((role, idx) => (
                <div key={idx} className="bg-[#FDFCF7] border border-gray-150 p-5 rounded-2xl shadow-xs space-y-2 hover:border-[#C5A880]/45 hover:shadow-sm transition-all">
                  <div className="w-7 h-7 rounded-lg bg-[#C5A880]/15 flex items-center justify-center">
                    <LucideIcons.SearchCheck className="w-4 h-4 text-[#C5A880]" />
                  </div>
                  <h4 className="font-bold text-sm text-[#1A1A1A]">{role.title}</h4>
                  <p className="text-sm text-[#5F5F5F] leading-relaxed">{role.text}</p>
                </div>
              ))}
            </div>

            {/* Practitioner Type Switcher */}
            <div className="lg:col-span-5 bg-[#F4F1EA]/40 rounded-3xl p-6 border border-gray-200 space-y-4">
              <h3 className="text-lg font-bold text-[#1A1A1A]">Hair Specialist vs Dermatologist vs Trichologist vs Hair-Transplant Surgeon vs Aesthetic Practitioner</h3>
              <p className="text-xs text-[#5F5F5F] leading-relaxed">
                These terms are often used loosely, which can be confusing for patients. It helps to understand the general distinctions:
              </p>
              <div className="flex flex-col gap-2.5">
                {Object.keys(specialistTypes).map((key) => (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`w-full text-left px-5 py-4 rounded-xl border transition-all flex justify-between items-center ${activeTab === key
                      ? 'bg-white border-[#1F5E4B] shadow-sm'
                      : 'bg-transparent border-transparent hover:bg-white/40'
                      }`}
                  >
                    <span className="text-sm font-bold text-[#1A1A1A]">
                      {specialistTypes[key].title}
                    </span>
                    <LucideIcons.ArrowRight className={`w-4 h-4 transition-transform ${activeTab === key ? 'text-[#1F5E4B] translate-x-1' : 'text-[#7F7F7F]'}`} />
                  </button>
                ))}
              </div>
              <div className="mt-6 bg-white p-5 rounded-2xl border border-gray-150 min-h-[140px] flex flex-col justify-center">
                <p className="text-sm text-[#5F5F5F] leading-relaxed">
                  {specialistTypes[activeTab].desc}
                </p>
              </div>
              <p className="text-xs text-[#7F7F7F] leading-relaxed mt-4 text-center">
                No single title is automatically the “right” choice for every patient. The more useful question is whether the person you consult will properly assess your specific case — including your hair loss causes — before recommending a treatment path, rather than which title appears on the door.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ WHY THE CAUSE OF HAIR LOSS MATTERS ============ */}
      <section id="cause" className="py-20 bg-[#FDFCF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Header */}
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-bold text-[#1A1A1A]">Why the Cause of Hair Loss Matters</h2>
            <div className="bg-white border border-gray-200 p-5 rounded-2xl shadow-xs">
              <p className="text-sm text-[#1A1A1A] leading-relaxed font-medium">
                <strong>What is the best treatment for hair loss?</strong> There is no single best treatment for hair loss, because the right approach depends on the underlying cause. Genetic hair loss, temporary shedding, scalp conditions, and hormonal issues each respond differently to treatment, which is why diagnosis should come before any procedure is chosen.
              </p>
            </div>
            <p className="text-sm text-[#5F5F5F] leading-relaxed">
              Two people can describe almost identical symptoms — thinning at the crown, more hair on the pillow — and still have completely different underlying causes. Treating the symptom without understanding the cause can waste time, delay appropriate care, and in some cases mask a condition that needs medical attention. This is why a structured discussion of <Link href="/services/hair-loss-dubai/" className="text-[#1F5E4B] hover:underline font-bold">hair loss treatment in Dubai</Link> should always begin with identifying what is actually happening.
            </p>
          </div>

          {/* Causes Accordion-like List */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {commonCauses.map((cause, i) => (
              <div key={i} className="bg-white border border-gray-150 p-5 rounded-2xl hover:border-[#1F5E4B]/40 hover:shadow-sm transition-all duration-300 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="w-6 h-6 rounded-full bg-[#E6EFEA] flex items-center justify-center text-[10px] font-bold text-[#1F5E4B]">
                    {i + 1}
                  </div>
                  <h4 className="font-extrabold text-sm text-[#1A1A1A]">{cause.title}</h4>
                  <p className="text-sm text-[#5F5F5F] leading-relaxed">{cause.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-[#5F5F5F] leading-relaxed max-w-4xl mx-auto">
            Because these causes call for very different responses — from reassurance and time, to topical or oral medical management, to procedures like PRP, to referral for blood tests — a treatment plan that skips the diagnostic step is starting from the wrong end.
          </p>
        </div>
      </section>

      {/* ============ COMMON SIGNS YOU SHOULD SEE A HAIR SPECIALIST ============ */}
      <section id="signs" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12 items-center">
          {/* Text/Intro Column */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl font-bold text-[#1A1A1A]">Common Signs You Should See a Hair Specialist</h2>
            <p className="text-sm text-[#5F5F5F] leading-relaxed">
              Some hair shedding is a normal part of the hair-growth cycle. However, certain signs suggest it is worth booking an assessment rather than waiting:
            </p>

            <div className="bg-[#E6EFEA]/40 border border-[#1F5E4B]/20 p-6 rounded-2xl space-y-3">
              <div className="flex items-center gap-2 text-[#1F5E4B]">
                <LucideIcons.Info className="w-5 h-5 shrink-0" />
                <h4 className="font-bold text-sm">Identifying Hair Loss Early</h4>
              </div>
              <p className="text-sm text-[#5F5F5F] leading-relaxed">
                Assessing hair thinning patterns helps guide the right next step. Treating issues at the first sign of progressive thinning or scalp irritation typically offers more manageable pathways.
              </p>
            </div>

            <p className="text-sm text-[#5F5F5F] leading-relaxed">
              If you recognize several of these signs, it does not automatically mean something serious is happening — but it is a reasonable point to seek a professional opinion rather than guess. Sudden, patchy, or painful hair loss in particular warrants earlier evaluation.
            </p>
          </div>

          {/* Grid of Signs */}
          <div className="lg:col-span-6 bg-[#FDFCF7] border border-gray-200 rounded-3xl p-6 md:p-8">
            <div className="grid sm:grid-cols-2 gap-4">
              {warningSigns.map((sign, index) => (
                <div key={index} className="flex gap-2.5 items-start">
                  <LucideIcons.AlertTriangle className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                  <span className="text-sm text-[#1A1A1A] font-medium leading-relaxed">{sign}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ HOW A HAIR SPECIALIST DIAGNOSES HAIR LOSS ============ */}
      <section id="diagnose" className="py-20 bg-[#F4F1EA]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Header */}
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-bold text-[#1A1A1A]">How a Hair Specialist Diagnoses Hair Loss</h2>
            <div className="bg-white border border-gray-200 p-5 rounded-2xl shadow-xs">
              <p className="text-sm text-[#1A1A1A] leading-relaxed font-medium">
                <strong>How do I choose a hair specialist?</strong> Choosing a hair specialist starts with confirming they perform a proper assessment — including your medical history and a scalp examination — before recommending treatment. A specialist who explains the possible causes of your hair loss, discusses realistic outcomes, and tailors the plan to your findings is generally a better sign than one offering a fixed package.
              </p>
            </div>
            <p className="text-sm text-[#5F5F5F] leading-relaxed">
              A responsible diagnostic process is built around the individual patient rather than a standard script. It typically involves:
            </p>
          </div>
          {/* Step-by-step diagnostic journey */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {diagnosticSteps.map((step, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:border-[#1F5E4B]/40 transition-all flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-3xl font-bold text-[#E6EFEA] block">0{idx + 1}</span>
                  <h4 className="font-extrabold text-sm text-[#1A1A1A]">{step.label}</h4>
                  <p className="text-sm text-[#5F5F5F] leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          {/* IMAGE 2 (DIAGNOSIS) */}
          <div className="bg-white border border-gray-200/80 p-6 rounded-2xl shadow-xs grid md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-3 rounded-xl overflow-hidden h-[150px] shadow-sm">
              <img
                src="/images/scalp-assessment-hair-loss-dubai.jpg"
                alt="Close-up scalp examination during a hair loss assessment"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:col-span-9 space-y-2">
              <h4 className="font-bold text-sm text-[#1A1A1A]">Scalp Assessment for Hair Loss</h4>
              <p className="text-sm text-[#5F5F5F] leading-relaxed">
                Scalp assessment helps identify the pattern and possible cause of hair loss.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ QUESTIONS TO ASK A HAIR SPECIALIST ============ */}
      <section id="questions" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-5">
            <h2 className="text-3xl font-bold text-[#1A1A1A]">Questions to Ask a Hair Specialist</h2>
            <p className="text-sm text-[#5F5F5F] leading-relaxed">
              Coming prepared with a few key questions can help you get more out of a consultation and evaluate whether a clinic’s approach is genuinely individualized:
            </p>
          </div>
          <div className="lg:col-span-7 bg-[#FDFCF7] border border-[#E6E2D8] p-6 md:p-8 rounded-3xl space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              {questionsToAsk.map((q, idx) => (
                <div key={idx} className="flex gap-2.5 items-start">
                  <LucideIcons.HelpCircle className="w-4 h-4 text-[#1F5E4B] shrink-0 mt-0.5" />
                  <p className="text-sm text-[#1A1A1A] font-medium leading-relaxed">{q}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-[#5F5F5F] leading-relaxed border-t border-gray-200/60 pt-4">
              A specialist who is willing to sit with these questions — rather than redirect you straight to a package — is generally demonstrating a more patient-centered approach.
            </p>
          </div>
        </div>
      </section>

      {/* ============ HAIR TREATMENT OPTIONS ============ */}
      <section id="treatments" className="py-20 bg-[#FDFCF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Header */}
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-bold text-[#1A1A1A]">Hair Treatment Options</h2>
            <p className="text-sm text-[#5F5F5F] leading-relaxed">
              Treatment should follow diagnosis, not replace it. Below is an overview of the main options that may be discussed once the cause of hair loss has been assessed.
            </p>
          </div>
          <div className="space-y-8">
            {/* PRP Card */}
            <div className="bg-white rounded-3xl border border-[#E6E2D8] p-8 shadow-sm hover:shadow-md transition-all duration-300 grid md:grid-cols-12 gap-8 items-start relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#1F5E4B]" />
              <div className="md:col-span-5 space-y-4">
                <span className="inline-block bg-[#1F5E4B]/10 text-[#1F5E4B] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">Biological Stimulant</span>
                <h3 className="text-xl font-bold text-[#1A1A1A]">PRP Hair Treatment</h3>
                <p className="text-sm text-[#5F5F5F] leading-relaxed font-light">
                  Platelet-Rich Plasma (PRP) hair treatment involves drawing a small sample of the patient’s own blood, processing it to concentrate the platelets, and injecting the resulting plasma into areas of the scalp experiencing thinning. The platelets contain growth factors that are thought to support the hair-growth environment.
                </p>
                <p className="text-sm text-[#5F5F5F] leading-relaxed pt-2">
                  For a full explanation of the procedure, session planning, and what to expect, see <Link href="/services/hair-prp-dubai/" className="text-[#1F5E4B] font-bold hover:underline">Hair PRP Treatment in Dubai</Link>.
                </p>
              </div>
              <div className="md:col-span-7 bg-[#FDFCF7] border border-[#E6E2D8] rounded-2xl p-6 space-y-4">
                <div className="space-y-3 text-xs text-[#5F5F5F]">
                  <p><strong className="text-[#1A1A1A] font-semibold">Who may benefit:</strong> PRP is generally discussed for patients with early-to-moderate thinning where hair follicles are still active, most often in the context of androgenetic alopecia. Suitability is assessed individually.</p>
                  <p><strong className="text-[#1A1A1A] font-semibold">Why diagnosis matters:</strong> PRP is not equally appropriate for every cause of hair loss. A specialist needs to confirm the underlying cause before recommending it.</p>
                  <p><strong className="text-[#1A1A1A] font-semibold">Expected timeline:</strong> Because hair grows in cycles, visible changes take time and are typically assessed over multiple months rather than after a single session.</p>
                  <p><strong className="text-[#1A1A1A] font-semibold">Limitations:</strong> PRP does not reverse all types of hair loss, and outcomes vary between individuals. It is one option among several, not a universal solution.</p>
                </div>
              </div>
            </div>
            {/* Mesotherapy Card */}
            <div className="bg-white rounded-3xl border border-[#E6E2D8] p-8 shadow-sm hover:shadow-md transition-all duration-300 grid md:grid-cols-12 gap-8 items-start relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#C5A880]" />
              <div className="md:col-span-12 space-y-4">
                <span className="inline-block bg-[#C5A880]/15 text-[#C5A880] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">Nutrient Delivery</span>
                <h3 className="text-xl font-bold text-[#1A1A1A]">Hair Mesotherapy</h3>
                <p className="text-sm text-[#5F5F5F] leading-relaxed font-light">
                  Hair Mesotherapy involves delivering a solution of vitamins, minerals, or other nourishing ingredients directly into the scalp through a series of fine injections. It works on a different principle from PRP, which uses the patient’s own blood-derived plasma rather than an external formulation.
                </p>
                <p className="text-sm text-[#5F5F5F] leading-relaxed border-t border-[#E6E2D8] pt-4 mt-2">
                  Because PRP and Hair Mesotherapy work differently and suit different situations, treatment selection should be individualized rather than based on which option a clinic happens to promote. Learn more about the approach and candidacy considerations on the <Link href="/services/mesotherapy-dubai/" className="text-[#C5A880] font-bold hover:underline">Hair Mesotherapy in Dubai</Link> page.
                </p>
              </div>
            </div>
            {/* Medical Management Card */}
            <div className="bg-white rounded-3xl border border-[#E6E2D8] p-8 shadow-sm hover:shadow-md transition-all duration-300 grid md:grid-cols-12 gap-8 items-start relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gray-400" />
              <div className="md:col-span-12 space-y-4">
                <span className="inline-block bg-gray-100 text-[#1A1A1A] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">Clinical Management</span>
                <h3 className="text-xl font-bold text-[#1A1A1A]">Medical Management</h3>
                <p className="text-sm text-[#5F5F5F] leading-relaxed font-light">
                  Depending on the diagnosis, some patients may be advised toward medical management as part of their care plan. This is a decision made by the treating clinician based on your specific assessment, and it is not something this article can substitute for. No medications or dosages are recommended here — that discussion belongs in a consultation.
                </p>
                <div className="text-xs text-[#7F7F7F] italic border-t border-[#E6E2D8] pt-4 mt-2">
                  Prescriptions are guided strictly by clinical assessments.
                </div>
              </div>
            </div>
            {/* Lifestyle and Nutritional Factors Card */}
            <div className="bg-white rounded-3xl border border-[#E6E2D8] p-8 shadow-sm hover:shadow-md transition-all duration-300 grid md:grid-cols-12 gap-8 items-start relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-green-700" />
              <div className="md:col-span-5 space-y-4">
                <span className="inline-block bg-gray-100 text-[#1A1A1A] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">General Wellness</span>
                <h3 className="text-xl font-bold text-[#1A1A1A]">Lifestyle and Nutritional Factors</h3>
                <p className="text-sm text-[#5F5F5F] leading-relaxed font-light">
                  Alongside any clinical treatment, general hair health can be supported by basic wellness practices. Wellness complements medical care pathways to build the best foundation for recovery.
                </p>
                <div className="text-xs text-[#7F7F7F] italic border-t border-[#E6E2D8] pt-4 mt-2">
                  Wellness complements medical care pathways.
                </div>
              </div>
              <div className="md:col-span-7 bg-[#FDFCF7] border border-[#E6E2D8] rounded-2xl p-6 space-y-4">
                <p className="text-xs font-semibold text-[#1A1A1A]">Key supportive factors:</p>
                <ul className="space-y-2 text-xs text-[#5F5F5F] list-disc pl-4 leading-relaxed font-light">
                  <li>Balanced nutrition with adequate protein intake</li>
                  <li>Addressing any identified nutritional gaps under professional guidance</li>
                  <li>Managing stress where possible</li>
                  <li>Prioritizing adequate sleep</li>
                  <li>Gentle hair care — avoiding excessive heat styling, harsh chemical treatments, and tight hairstyles</li>
                </ul>
                <p className="text-xs text-[#7F7F7F] italic border-t border-[#E6E2D8] pt-3">
                  Nutrition supports overall hair health, but it does not override an underlying genetic or medical cause.
                </p>
              </div>
            </div>
            {/* Hair Transplant Card */}
            <div className="bg-white rounded-3xl border border-[#E6E2D8] p-8 shadow-sm hover:shadow-md transition-all duration-300 grid md:grid-cols-12 gap-8 items-start relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#C5A880]" />
              <div className="md:col-span-12 space-y-4">
                <span className="inline-block bg-[#C5A880]/15 text-[#C5A880] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">Surgical Restoration</span>
                <h3 className="text-xl font-bold text-[#1A1A1A]">Hair Transplant</h3>
                <p className="text-sm text-[#5F5F5F] leading-relaxed font-light">
                  Surgical hair restoration may be considered for patients with more advanced hair loss, particularly once non-surgical options have been discussed and a specialist has assessed donor-area suitability. This is a more involved decision, and the comparison of approaches is covered in detail.
                </p>
                <p className="text-sm text-[#5F5F5F] leading-relaxed pt-4 border-t border-[#E6E2D8] mt-2">
                  Surgical hair restoration may be considered for patients with more advanced hair loss, particularly once non-surgical options have been discussed and a specialist has assessed donor-area suitability. This is a more involved decision, and the comparison of approaches is covered in detail in <Link href="/services/prp-vs-hair-transplant-dubai/" className="text-[#1F5E4B] font-bold hover:underline">PRP vs Hair Transplant in Dubai</Link>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PRP AND THE HAIR GROWTH CYCLE ============ */}
      <section id="cycle" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Header */}
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-bold text-[#1A1A1A]">PRP and the Hair Growth Cycle</h2>
            <p className="text-sm text-[#5F5F5F] leading-relaxed">
              Understanding why hair treatments require patience starts with understanding how hair actually grows. Each hair follicle cycles through distinct phases:
            </p>
          </div>
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Visual Steps Timeline */}
            <div className="lg:col-span-7 space-y-4">
              {[
                { number: "01", phase: "Anagen (Growth Phase)", desc: "The active phase during which the hair follicle produces new hair. This phase can last several years." },
                { number: "02", phase: "Catagen (Transition Phase)", desc: "A short transitional phase where hair growth slows and the follicle begins to shrink." },
                { number: "03", phase: "Telogen (Resting Phase)", desc: "A resting period during which the hair is not actively growing but has not yet shed." },
                { number: "04", phase: "Exogen (Shedding Phase)", desc: "The phase in which the resting hair is released and shed, often coinciding with a new hair beginning to grow." }
              ].map((item, idx) => (
                <div key={idx} className="bg-white border border-[#E6E2D8] p-5 rounded-2xl flex gap-4 items-start shadow-xs hover:border-[#1F5E4B]/40 transition-all duration-300">
                  <span className="text-xl font-bold text-[#D4A574] bg-[#FDFCF7] w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border border-[#E6E2D8]">
                    {item.number}
                  </span>
                  <div className="space-y-1">
                    <p className="text-sm font-bold text-[#1A1A1A]">{item.phase}</p>
                    <p className="text-sm text-[#5F5F5F] leading-relaxed font-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* Explanation box with Infographic */}
            <div className="lg:col-span-5 bg-[#E6EFEA]/30 border border-[#E6E2D8] p-6 rounded-3xl space-y-4">
              <div className="rounded-xl overflow-hidden aspect-[4/3] shadow-inner relative bg-white">
                <img
                  src="/images/Illustration of the anagen catagen telogen exogen hair.jpg"
                  alt="Illustration of the anagen catagen telogen exogen hair growth cycle"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-xs text-[#7F7F7F] text-center italic border-t border-gray-100 pt-2">
                Understanding the hair growth cycle explains why treatment results take time.
              </p>
              <p className="text-sm text-[#5F5F5F] leading-relaxed font-light">
                At any given time, the hairs on your scalp are in different phases of this cycle simultaneously. This is precisely why hair treatments — including PRP — cannot show results overnight. Influencing the growth environment takes time to translate into visible change, since it depends on follicles progressing through their natural cycle. For a deeper explanation, see the <Link href="/services/hair-growth-cycle/" className="underline font-bold text-[#1F5E4B] hover:underline">Hair Growth Cycle</Link> guide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PRP HAIR TREATMENT RESULTS ============ */}
      <section id="results" className="py-20 bg-[#FDFCF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Header */}
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-bold text-[#1A1A1A]">PRP Hair Treatment Results</h2>
            <div className="bg-white border border-gray-200 p-5 rounded-2xl shadow-xs">
              <p className="text-sm text-[#1A1A1A] leading-relaxed font-medium">
                <strong>Can PRP help hair loss?</strong> PRP may support hair density in some patients with early-to-moderate androgenetic alopecia, but results vary from person to person and are not guaranteed. Outcomes depend on the underlying cause, the stage of hair loss, and how the individual responds, which is why a proper assessment matters before starting treatment.
              </p>
            </div>
            <p className="text-sm text-[#5F5F5F] leading-relaxed">
              A few realistic points worth keeping in mind:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              "Results vary between patients, and not everyone responds the same way.",
              "Hair growth is gradual, in keeping with the natural growth cycle described above.",
              "Early-stage thinning may respond differently than more advanced hair loss.",
              "Multiple sessions are often part of a structured treatment plan, spaced according to individual response.",
              "Ongoing maintenance may be discussed depending on how the patient’s hair responds over time."
            ].map((res, i) => (
              <div key={i} className="bg-white border border-gray-200 p-5 rounded-2xl shadow-xs space-y-2">
                <p className="text-sm text-[#5F5F5F] leading-relaxed flex gap-2">
                  <LucideIcons.CheckCircle2 className="w-4 h-4 text-[#1F5E4B] shrink-0 mt-0.5" />
                  {res}
                </p>
              </div>
            ))}
          </div>

          <p className="text-sm text-[#5F5F5F] leading-relaxed max-w-4xl mx-auto">
            For more detail on what a treatment course can look like, see <Link href="/services/prp-hair-treatment-before-and-after/" className="font-bold underline text-[#1F5E4B]">PRP Hair Treatment Before and After</Link>, <Link href="/services/prp-hair-treatment-recovery/" className="font-bold underline text-[#1F5E4B]">PRP Hair Treatment Recovery</Link>, and <Link href="/services/hair-prp-cost-dubai/" className="font-bold underline text-[#1F5E4B]">PRP Hair Treatment Cost in Dubai</Link>. No page on this site guarantees hair regrowth, and any clinic that does should be treated with caution.
          </p>
        </div>
      </section>

      {/* ============ PRP VS HAIR MESOTHERAPY & PRP VS HAIR TRANSPLANT TABLES ============ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* PRP vs Hair Mesotherapy */}
          <div id="prp-vs-meso" className="space-y-6">
            <h2 className="text-3xl font-bold text-[#1A1A1A]">PRP vs Hair Mesotherapy</h2>
            <p className="text-sm text-[#5F5F5F] leading-relaxed">
              Neither option is universally “better” — the appropriate choice depends on the diagnosis and the patient’s goals. A full comparison is available at <Link href="/services/prp-vs-hair-mesotherapy-dubai/" className="underline hover:text-[#1F5E4B] font-semibold">PRP vs Hair Mesotherapy</Link>.
            </p>
            <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
              <table className="w-full text-left border-collapse text-xs md:text-sm">
                <thead>
                  <tr className="bg-[#1F5E4B] text-white">
                    <th className="p-4 font-bold">Feature</th>
                    <th className="p-4 font-bold">PRP</th>
                    <th className="p-4 font-bold">Hair Mesotherapy</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {[
                    { f: "Basic approach", prp: "Uses the patient’s own concentrated plasma", meso: "Uses an injected nutrient/vitamin-based solution" },
                    { f: "Main components", prp: "Platelets and growth factors from the patient’s blood", meso: "Vitamins, minerals, or other nourishing agents" },
                    { f: "Procedure", prp: "Blood draw, processing, then scalp injections", meso: "Series of fine injections of a prepared solution" },
                    { f: "Typical treatment planning", prp: "Individualized session schedule based on assessment", meso: "Individualized session schedule based on assessment" },
                    { f: "Recovery", prp: "Generally minimal downtime; individual response varies", meso: "Generally minimal downtime; individual response varies" },
                    { f: "Suitable candidates", prp: "Determined after diagnosis and scalp assessment", meso: "Determined after diagnosis and scalp assessment" },
                    { f: "Limitations", prp: "Not effective for every cause of hair loss", meso: "Not effective for every cause of hair loss" }
                  ].map((row, idx) => (
                    <tr key={idx} className="hover:bg-gray-50/50">
                      <td className="p-4 font-bold text-[#1A1A1A]">{row.f}</td>
                      <td className="p-4 text-sm text-[#5F5F5F]">{row.prp}</td>
                      <td className="p-4 text-sm text-[#1A1A1A] font-semibold">{row.transplant || row.meso}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* PRP vs Hair Transplant */}
          <div id="prp-vs-transplant" className="space-y-6">
            <h2 className="text-3xl font-bold text-[#1A1A1A]">PRP vs Hair Transplant</h2>
            <p className="text-sm text-[#5F5F5F] leading-relaxed">
              The right path depends on the stage and pattern of hair loss, patient goals, and a specialist’s assessment. Read more in <Link href="/services/prp-vs-hair-transplant-dubai/" className="underline hover:text-[#1F5E4B] font-semibold">PRP vs Hair Transplant in Dubai</Link>.
            </p>
            <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
              <table className="w-full text-left border-collapse text-xs md:text-sm">
                <thead>
                  <tr className="bg-[#C5A880] text-white">
                    <th className="p-4 font-bold">Feature</th>
                    <th className="p-4 font-bold">PRP</th>
                    <th className="p-4 font-bold">Hair Transplant</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {[
                    { f: "Treatment type", prp: "Non-surgical, injection-based", transplant: "Surgical hair restoration" },
                    { f: "Main purpose", prp: "Supports the scalp environment for existing follicles", transplant: "Relocates hair follicles to thinning or bald areas" },
                    { f: "Surgical procedure", prp: "No", transplant: "Yes" },
                    { f: "Recovery", prp: "Minimal downtime", transplant: "Longer recovery period, procedure-dependent" },
                    { f: "Candidate suitability", prp: "Early-to-moderate thinning with active follicles", transplant: "More advanced hair loss with suitable donor area" },
                    { f: "Long-term considerations", prp: "May involve maintenance sessions", transplant: "Considered a longer-term structural change" }
                  ].map((row, idx) => (
                    <tr key={idx} className="hover:bg-gray-50/50">
                      <td className="p-4 font-bold text-[#1A1A1A]">{row.f}</td>
                      <td className="p-4 text-sm text-[#5F5F5F]">{row.prp}</td>
                      <td className="p-4 text-sm text-[#1A1A1A] font-semibold">{row.transplant}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ============ HOW TO CHOOSE A HAIR SPECIALIST IN DUBAI ============ */}
      <section id="choose" className="py-20 bg-[#FDFCF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Selection Checklist */}
            <div className="space-y-6 bg-white p-6 md:p-8 rounded-3xl border border-gray-200 shadow-xs">
              <h3 className="text-2xl font-bold text-[#1A1A1A] flex items-center gap-2">
                <LucideIcons.CheckSquare className="w-6 h-6 text-[#1F5E4B]" /> How to Choose a Hair Specialist in Dubai
              </h3>
              <p className="text-sm text-[#5F5F5F] leading-relaxed">
                This is one of the most important decisions in the process, so it is worth being deliberate about it. Whether you are comparing options for the first time or reconsidering a previous provider, the same hair specialist Dubai evaluation checklist applies:
              </p>
              <div className="space-y-3">
                {selectionChecklist.map((item, idx) => (
                  <div key={idx} className="flex gap-2.5 items-start">
                    <LucideIcons.Check className="w-4 h-4 text-[#1F5E4B] shrink-0 mt-0.5" />
                    <p className="text-sm text-[#1A1A1A] leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-[#5F5F5F] leading-relaxed pt-2 border-t border-gray-100">
                Be cautious of any clinic that recommends the exact same procedure to every patient without first assessing the underlying cause of hair loss. A one-size-fits-all approach is a sign that diagnosis is being skipped.
              </p>
            </div>

            {/* Red Flags */}
            <div id="redflags" className="space-y-6 bg-white p-6 md:p-8 rounded-3xl border border-gray-200 shadow-xs">
              <h3 className="text-2xl font-bold text-red-700 flex items-center gap-2">
                <LucideIcons.OctagonAlert className="w-6 h-6 text-red-500" /> Red Flags When Choosing a Hair Clinic
              </h3>
              <p className="text-sm text-[#5F5F5F] leading-relaxed">
                Watch out for these warning signs, which are common across the hair-restoration industry and not specific to any one clinic:
              </p>
              <div className="space-y-3">
                {redFlags.map((flag, idx) => (
                  <div key={idx} className="flex gap-2.5 items-start">
                    <LucideIcons.XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <p className="text-sm text-[#5F5F5F] leading-relaxed">{flag}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-[#5F5F5F] bg-red-50/45 p-4 rounded-xl leading-relaxed">
                A patient-first clinic will be comfortable slowing down, explaining uncertainty where it exists, and being honest when a treatment may not be the right fit for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ HAIR LOSS IN MEN VS WOMEN & HAIR LOSS BY AGE ============ */}
      <section id="gender-diff" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Men vs Women */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-[#1A1A1A] text-center">Hair Loss in Men vs Women</h2>
            <div className="flex justify-center gap-3">
              <button
                onClick={() => setActiveGender('men')}
                className={`px-6 py-2.5 rounded-full font-bold text-sm border transition-all ${activeGender === 'men'
                  ? 'bg-[#1F5E4B] text-white border-[#1F5E4B]'
                  : 'bg-transparent text-[#1A1A1A] border-gray-300 hover:bg-gray-50'
                  }`}
              >
                Hair Loss in Men
              </button>
              <button
                onClick={() => setActiveGender('women')}
                className={`px-6 py-2.5 rounded-full font-bold text-sm border transition-all ${activeGender === 'women'
                  ? 'bg-[#C5A880] text-white border-[#C5A880]'
                  : 'bg-transparent text-[#1A1A1A] border-gray-300 hover:bg-gray-50'
                  }`}
              >
                Hair Loss in Women
              </button>
            </div>

            <div className="bg-[#FDFCF7] border border-gray-200 rounded-3xl p-6 md:p-8 max-w-3xl mx-auto">
              {activeGender === 'men' ? (
                <div className="space-y-4">
                  <h4 className="font-extrabold text-lg text-[#1A1A1A]">Hair Loss in Men</h4>
                  <p className="text-sm text-[#5F5F5F] leading-relaxed">
                    Male hair loss most commonly follows a recognizable pattern linked to androgenetic alopecia, including:
                  </p>
                  <ul className="space-y-2 text-sm text-[#5F5F5F] list-disc pl-5 leading-relaxed">
                    <li>A receding hairline, often starting at the temples</li>
                    <li>Thinning at the crown</li>
                    <li>A genetic predisposition that frequently runs in families</li>
                  </ul>
                  <p className="text-sm text-[#5F5F5F] leading-relaxed">
                    While this genetic pattern is the most common cause in men, other factors — including scalp conditions, stress, or medical issues — can also contribute and should not be assumed away without assessment.
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  <h4 className="font-extrabold text-lg text-[#1A1A1A]">Hair Loss in Women</h4>
                  <p className="text-sm text-[#5F5F5F] leading-relaxed">
                    Hair loss in women often presents differently and can involve:
                  </p>
                  <ul className="space-y-2 text-sm text-[#5F5F5F] list-disc pl-5 leading-relaxed">
                    <li>Diffuse thinning across the scalp rather than a receding hairline</li>
                    <li>A widening part</li>
                    <li>Hormonal changes, including those related to the menstrual cycle or hormonal conditions</li>
                    <li>Postpartum shedding, which is often temporary</li>
                    <li>Changes around menopause</li>
                    <li>Nutritional factors, such as iron levels</li>
                    <li>Underlying medical causes, including thyroid function</li>
                  </ul>
                  <p className="text-sm text-[#5F5F5F] leading-relaxed">
                    Because the pattern and likely causes differ between men and women — and vary further from person to person — it is important not to assume every patient’s hair loss has the same origin. A proper assessment accounts for the individual, not just general trends by gender.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Hair Loss by Age */}
          <div id="age-diff" className="space-y-6 border-t border-gray-100 pt-16">
            <h2 className="text-3xl font-bold text-[#1A1A1A] text-center">Hair Loss by Age</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {ageGroups.map((group, idx) => (
                <div key={idx} className="bg-[#FDFCF7] border border-[#E6E2D8] p-5 rounded-2xl shadow-xs space-y-2">
                  <span className="w-2 h-2 rounded-full bg-[#C5A880] block" />
                  <h4 className="font-extrabold text-sm text-[#1A1A1A]">{group.age}</h4>
                  <p className="text-sm text-[#5F5F5F] leading-relaxed">{group.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-[#7F7F7F] text-center leading-relaxed max-w-2xl mx-auto pt-2">
              Regardless of age, sudden, patchy, or otherwise unusual hair loss is worth having evaluated rather than attributed automatically to “getting older.”
            </p>
          </div>
        </div>
      </section>

      {/* ============ DUBAI SPECIFIC CLIMATE CONSIDERATIONS ============ */}
      <section id="dubai-climate" className="py-20 bg-[#F4F1EA]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-bold text-[#1A1A1A]">Dubai-Specific Considerations</h2>
            <p className="text-sm text-[#5F5F5F] leading-relaxed">
              Residents of Dubai often ask whether the climate affects hair health. A few practical points are worth understanding:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {dubaiClimatePoints.map((point, index) => (
              <div key={index} className="bg-white border border-[#E6E2D8] p-5 rounded-2xl shadow-xs space-y-2">
                <span className="text-xs font-bold text-[#C5A880] uppercase tracking-wide">Point {index + 1}</span>
                <h4 className="font-bold text-sm text-[#1A1A1A]">{point.title}</h4>
                <p className="text-xs text-[#5F5F5F] leading-relaxed">{point.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-sm text-[#5F5F5F] leading-relaxed max-w-4xl mx-auto">
            None of these factors have been shown to directly cause permanent hair loss on their own, and it would be inaccurate to suggest otherwise. However, they are worth discussing with a specialist as part of a complete picture, particularly if you have noticed scalp irritation, dryness, or breakage alongside general thinning.
          </p>
        </div>
      </section>

      {/* ============ WHY CHOOSE RAMACARE POLYCLINIC ============ */}
      <section id="why-ramacare" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Header */}
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-bold text-[#1A1A1A]">Why Choose RamaCare Polyclinic?</h2>
            <p className="text-sm text-[#5F5F5F] leading-relaxed">
              RamaCare Polyclinic is a DHA-licensed multi-specialty clinic located in Jumeirah 1, Dubai, offering care across physiotherapy, Ayurveda, dermatology and aesthetics, and dental services. Patients searching for a hair specialist Dubai residents can visit locally — including those specifically looking for a hair specialist in Jumeirah — will find hair and scalp care handled within this wider clinical setting rather than as a standalone cosmetic add-on. When it comes to hair and scalp concerns, the approach is built around:
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ramacareWhy.map((why, index) => (
              <div key={index} className="bg-[#FDFCF7] border border-[#E6E2D8] p-5 rounded-2xl shadow-xs space-y-2 hover:border-[#1F5E4B]/40 transition-all duration-300">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1F5E4B] block" />
                <h4 className="font-bold text-sm text-[#1A1A1A]">{why.title}</h4>
                <p className="text-sm text-[#5F5F5F] leading-relaxed">{why.text}</p>
              </div>
            ))}
          </div>

          <p className="text-xs text-[#7F7F7F] text-center italic">
            This section does not include specific practitioner names, success rates, patient volumes, or awards, as these should only be presented when verified and provided directly by the clinic.
          </p>

          {/* Secondary Info & Verification */}
          <div className="bg-[#1F5E4B] rounded-3xl p-8 text-white grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <h4 className="font-bold text-xl">DHA Licensed Multi-Specialty Clinic in Jumeirah</h4>
              <p className="text-sm text-white/80 leading-relaxed">
                Whether you are comparing a hair loss specialist Dubai clinics list, weighing a dedicated hair clinic Dubai option against a multi-specialty setting, or simply looking for accessible hair treatment Dubai residents can reach without crossing the city, the same principle applies: prioritize assessment quality over marketing. A hair loss clinic Dubai patients can trust is one that is transparent about what it can and cannot promise.
              </p>
            </div>

            <div className="lg:col-span-4 bg-white/10 border border-white/20 p-6 rounded-2xl text-center space-y-3 backdrop-blur-xs">
              <LucideIcons.HeartHandshake className="w-10 h-10 mx-auto text-[#C5A880]" />
              <h5 className="font-bold text-sm">Patient-Centric Care</h5>
              <p className="text-xs text-white/85">DHA Licensed clinical setting in Jumeirah 1 serving the Dubai community.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ RELATED GUIDES ============ */}
      <section id="related-guides" className="bg-[#FDFCF7] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl font-bold text-[#1A1A1A]">Related Hair Treatment Guides</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {relatedGuides.map((guide, idx) => (
              <div key={idx} className="bg-white p-5 rounded-xl border border-gray-200 hover:border-[#1F5E4B]/30 hover:shadow-xs transition-all duration-300 flex flex-col justify-between">
                <div className="space-y-2">
                  <h4 className="font-extrabold text-[#1A1A1A] text-sm">
                    <Link href={guide.link} className="text-[#1F5E4B] hover:text-[#17493A] flex items-center gap-1">
                      {guide.label} <LucideIcons.ArrowRight className="w-4 h-4" />
                    </Link>
                  </h4>
                  <p className="text-sm text-[#5F5F5F] leading-relaxed">
                    {guide.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ ACCORDION FAQ SECTION ============ */}
      <section id="faqs" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-[#1A1A1A] mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-2">
          {faqs.map((faq, i) => {
            const isOpen = faqOpen === i;
            return (
              <div key={i} className="border border-gray-200 rounded-xl bg-white overflow-hidden shadow-xs">
                <button
                  onClick={() => setFaqOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 text-left p-5 hover:bg-gray-50/50"
                >
                  <span className="text-sm font-semibold text-[#1A1A1A]">{faq.q}</span>
                  {isOpen ? (
                    <LucideIcons.MinusCircle className="w-5 h-5 text-[#1F5E4B] shrink-0" />
                  ) : (
                    <LucideIcons.PlusCircle className="w-5 h-5 text-[#5F5F5F] shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="p-5 border-t border-[#E6E2D8] bg-[#FDFCF7]">
                    <p className="text-sm text-[#5F5F5F] leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ============ MEDICAL DISCLAIMER & BOOK A HAIR AND SCALP CONSULTATION ============ */}
      <section id="book-consult" className="py-24 bg-[#FDFCF7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Medical Disclaimer Card */}
          <div id="disclaimer" className="bg-amber-50/40 border border-amber-200/60 rounded-2xl p-6 md:p-8 space-y-3 shadow-sm">
            <h4 className="font-bold text-amber-800 text-sm flex items-center gap-2">
              <LucideIcons.AlertTriangle className="w-5 h-5 text-amber-600" /> Medical Disclaimer
            </h4>
            <p className="text-sm text-[#5F5F5F] leading-relaxed font-light">
              Hair loss has many possible causes, and treatment suitability varies from person to person. The information on this page is intended for general educational purposes and cannot replace an individual medical assessment. It is not a diagnosis of your specific condition. Sudden, severe, painful, or patchy hair loss should be evaluated by a qualified healthcare professional rather than managed based on general information alone.
            </p>
          </div>

          <div className="text-center space-y-6">
            <span className="text-xs uppercase tracking-widest font-bold text-[#D4A574]">Scalp Consultation</span>
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-[#1A1A1A] tracking-tight">Book a Hair and Scalp Consultation in Dubai</h2>
            <p className="text-sm md:text-base text-[#5F5F5F] leading-relaxed font-light">
              If you are concerned about hair thinning, increased shedding, or changes in your scalp, the most useful next step is a personalized assessment rather than guessing at a cause or treatment on your own. RamaCare Polyclinic in Jumeirah 1, Dubai offers hair and scalp consultations designed to identify what is actually happening before recommending any treatment path.
            </p>
            <p className="text-sm md:text-base text-[#5F5F5F] leading-relaxed font-light">
              Book a Hair and Scalp Consultation in Dubai to discuss your history, get a proper assessment, and understand which options may be appropriate for your situation.
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Link
                href="/book-appointment/"
                className="inline-flex items-center gap-2 rounded-xl bg-[#1F5E4B] px-8 py-4 text-sm font-bold text-white hover:bg-[#17493A] transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                <LucideIcons.Calendar className="w-4 h-4" /> Book Appointment
              </Link>
              <a
                href="https://wa.me/971566597878?text=Hello%20RamaCare%20Polyclinic%2C%20I%20would%20like%20to%20book%20a%20consultation%20with%20a%20hair%20specialist%20in%20Dubai."
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex items-center gap-2 rounded-xl border border-[#1F5E4B]/30 px-8 py-4 text-sm font-bold text-[#1F5E4B] bg-white hover:bg-gray-50 transition-all shadow-sm"
              >
                <LucideIcons.MessageCircle className="w-4 h-4" /> WhatsApp Us
              </a>
            </div>
          </div>

          <div className="border-t border-[#E6E2D8] pt-12 text-left space-y-6">
            <h4 className="font-bold text-[#1A1A1A] text-xl">Conclusion</h4>
            <p className="text-sm text-[#5F5F5F] leading-relaxed font-light">
              Finding the right hair specialist is not about choosing whichever clinic promises the most dramatic results. It comes down to identifying the actual cause of your hair loss, understanding what you are hoping to achieve, selecting a treatment approach that fits your diagnosis, setting realistic expectations for how and when results may appear, and having your progress monitored over time. Hair loss is rarely a single, simple problem with one universal answer — which is exactly why a careful, individualized assessment matters more than any single procedure.
            </p>
            <p className="text-sm text-[#5F5F5F] leading-relaxed font-light">
              If you are searching for the best hair specialist in Dubai, the most reliable approach is to look for a practitioner who prioritizes diagnosis, communicates clearly, and builds a treatment plan around your specific findings rather than a fixed package. That patient-first process — assessment before treatment — is the foundation of responsible hair and scalp care, and it is the approach RamaCare Polyclinic aims to offer to every patient who walks through its doors in Jumeirah.
            </p>
          </div>
        </div>
      </section>

      {/* Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-250 shadow-lg z-40 p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="hidden md:block">
            <p className="text-sm font-semibold text-[#1A1A1A]">Not sure which treatment fits your hair loss?</p>
            <p className="text-xs text-[#5F5F5F]">Book a scalp assessment today at Jumeirah 1</p>
          </div>
          <Link
            href="/book-appointment/"
            className="flex items-center gap-2 bg-[#1F5E4B] text-white px-6 py-3 rounded-lg shadow-lg hover:bg-[#17493A] hover:shadow-xl transition-all font-semibold whitespace-nowrap"
          >
            <LucideIcons.Calendar className="w-5 h-5" />
            Book Appointment
          </Link>
        </div>
      </div>
    </Layout>
  );
}
