import { useState, useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import Layout from "../../../components/Layout";
import ContentReviewBadge from "../../../components/ContentReviewBadge";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ImageIcon,
  Layers,
  Search,
  Sparkles,
  TrendingUp,
  Users,
  Zap,
  ShieldCheck,
  MapPin,
  AlertTriangle,
  Flame,
  Snowflake,
  Scissors,
  Sparkle,
  Eye,
  ClipboardList,
  Stethoscope,
  Meh,
  ThumbsUp,
  Ban,
  Flag,
  Pin,
  PenLine,
  CheckCircle2,
} from "lucide-react";

/* CONTENT — verbatim */
const meta = {
  title: "Skin Tag Removal in Dubai | RamaCare Polyclinic",
  description:
    "Explore Skin Tag Removal in Dubai at RamaCare Polyclinic. Get a professional skin assessment and personalised removal options. Book your consultation today.",
  url: "/skin-tag-removal-dubai",
};

/* JSON-LD SCHEMAS FOR SEO */
const medicalClinicSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "name": "RamaCare Polyclinic",
  "url": "https://ramacarepolyclinic.ae/services/skin-tag-removal-dubai",
  "image": "https://ramacarepolyclinic.ae/images/ramacare-clinic-exterior.jpg",
  "telephone": "+971-56-659-7878",
  "priceRange": "$$",
  "medicalSpecialty": "Dermatology",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Jumeirah 1",
    "addressLocality": "Jumeirah 1",
    "addressRegion": "Dubai",
    "addressCountry": "AE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "25.2285",
    "longitude": "55.2588"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "21:00"
    }
  ],
  "sameAs": [
    "https://www.instagram.com/ramacarepolyclinic",
    "https://www.facebook.com/ramacarepolyclinic"
  ]
};

const medicalWebPageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  "name": "Skin Tag Removal in Dubai",
  "url": "https://ramacarepolyclinic.ae/services/skin-tag-removal-dubai",
  "description": "Information on skin tag causes, clinical assessment, removal methods, recovery, and cost considerations at RamaCare Polyclinic, Dubai.",
  "medicalAudience": {
    "@type": "MedicalAudience",
    "audienceType": "Patient"
  },
  "about": {
    "@type": "MedicalCondition",
    "name": "Skin Tag (Acrochordon)"
  },
  "lastReviewed": "2026-08-22",
  "publisher": {
    "@type": "MedicalOrganization",
    "name": "RamaCare Polyclinic"
  }
};

const medicalConditionSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalCondition",
  "name": "Skin Tag",
  "alternateName": "Acrochordon",
  "description": "A skin tag is a generally benign, soft skin growth that commonly develops in areas of skin friction such as the neck, underarms, groin, eyelids, and skin folds.",
  "signOrSymptom": [
    { "@type": "MedicalSignOrSymptom", "name": "Soft flesh-coloured growth" },
    { "@type": "MedicalSignOrSymptom", "name": "Growth attached by a narrow stalk" },
    { "@type": "MedicalSignOrSymptom", "name": "Irritation from friction or jewellery" }
  ],
  "possibleTreatment": [
    { "@type": "MedicalProcedure", "name": "Electrocautery" },
    { "@type": "MedicalProcedure", "name": "Cryotherapy" },
    { "@type": "MedicalProcedure", "name": "Snip Excision" },
    { "@type": "MedicalProcedure", "name": "Laser-Based Removal" }
  ]
};

const medicalProcedureSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Electrocautery Skin Tag Removal",
    "procedureType": "https://schema.org/PercutaneousProcedure",
    "bodyLocation": "Skin",
    "howPerformed": "Controlled electrical energy is applied to the skin tag under local anaesthetic where appropriate, typically causing temporary crusting or redness during healing.",
    "preparation": "Clinical assessment of the lesion to confirm suitability for this technique.",
    "followup": "Aftercare guidance on wound care, avoiding sun exposure, and monitoring healing.",
    "status": "https://schema.org/EventStatusType/ClinicallyAvailable"
  },
  {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Cryotherapy Skin Tag Removal",
    "procedureType": "https://schema.org/PercutaneousProcedure",
    "bodyLocation": "Skin",
    "howPerformed": "Controlled freezing is used to treat targeted tissue, suitable for selected benign skin lesions.",
    "preparation": "Clinical assessment of the lesion to confirm suitability for cryotherapy.",
    "followup": "Aftercare guidance on temporary blistering, redness, and wound protection.",
    "status": "https://schema.org/EventStatusType/ClinicallyAvailable"
  },
  {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Snip Excision Skin Tag Removal",
    "procedureType": "https://schema.org/PercutaneousProcedure",
    "bodyLocation": "Skin",
    "howPerformed": "A clinician removes the tag using a sterile cutting instrument under local anaesthetic where appropriate.",
    "preparation": "Clinical assessment of stalked lesion suitability for mechanical removal.",
    "followup": "Aftercare guidance on small wound care and clean dressing application.",
    "status": "https://schema.org/EventStatusType/ClinicallyAvailable"
  },
  {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Laser-Based Skin Tag Removal",
    "procedureType": "https://schema.org/PercutaneousProcedure",
    "bodyLocation": "Skin",
    "howPerformed": "Concentrated light or energy is applied to selected skin tag lesions based on individual assessment.",
    "preparation": "Clinical evaluation of skin type, lesion characteristics, and laser suitability.",
    "followup": "Aftercare guidance on skin barrier recovery and sun protection.",
    "status": "https://schema.org/EventStatusType/ClinicallyAvailable"
  }
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://ramacarepolyclinic.ae/"
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
      "name": "Skin Tag Removal in Dubai",
      "item": "https://ramacarepolyclinic.ae/services/skin-tag-removal-dubai"
    }
  ]
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  "name": "RamaCare Polyclinic",
  "url": "https://ramacarepolyclinic.ae",
  "logo": "https://ramacarepolyclinic.ae/images/ramacare-logo.png",
  "telephone": "+971-56-659-7878",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Jumeirah 1",
    "addressLocality": "Jumeirah 1",
    "addressRegion": "Dubai",
    "addressCountry": "AE"
  }
};

const hero = {
  h1: "Skin Tag Removal in Dubai",
  intro: [
    "If you've noticed a small, soft growth of skin on your neck, underarm, eyelid, or along a bra line or collar, you're not alone — skin tags are one of the most common benign skin findings in adults. Many people in Dubai search for skin tag removal in Dubai simply because these growths catch on jewellery, rub against clothing, or bother them cosmetically. Skin tags themselves are usually harmless, but that doesn't mean every bump on your skin is automatically a skin tag.",
    "At RamaCare Polyclinic, our approach starts with a proper look at the growth before any treatment is discussed. A clinician will examine the lesion, ask about how long it has been there and whether it has changed, and confirm that what you're seeing is, in fact, consistent with a skin tag rather than another type of skin lesion. Only then do we talk about removal options — which may include electrocautery, cryotherapy, snip excision, or a laser-based approach, depending on the size, location, and characteristics of the tag. This page walks you through what skin tags are, why they form, how they're assessed, what removal actually involves, and when a growth deserves a closer look before anyone reaches for a treatment tool. Trying to remove a skin tag yourself at home is never advisable, and we'll explain why.",
  ],
};

const quickAnswer = {
  label: "What Is a Skin Tag?",
  body: "A skin tag, medically called an acrochordon, is typically a small, soft, flesh-coloured growth that hangs off the skin, often attached by a thin stalk (a \"pedunculated lesion\"). Skin tags most commonly appear in areas where skin rubs against skin or clothing — the neck, underarms, groin, eyelids, chest, and skin folds. They are generally benign. That said, diagnosis should be confirmed by a clinician whenever the appearance is uncertain, since several other types of skin growths can look similar at first glance.",
};

const TOC = [
  { id: "what-is-a-skin-tag", label: "What Is a Skin Tag?", live: true },
  { id: "what-causes-skin-tags", label: "What Causes Skin Tags?", live: true },
  { id: "are-skin-tags-harmful", label: "Are Skin Tags Harmful?", live: true },
  { id: "where-they-appear", label: "Where Do Skin Tags Commonly Appear?", live: true },
  { id: "when-to-consider-removal", label: "When Should You Consider Removal?", live: true },
  { id: "why-examine-first", label: "Why a Growth Should Be Examined First", live: true },
  { id: "which-treatment", label: "Which Treatment Is Right for You?", live: true },
  { id: "removal-methods", label: "Skin Tag Removal Methods", live: true },
  { id: "comparison-table", label: "Treatment Comparison Table", live: true },
  { id: "how-assessed", label: "How Skin Tags Are Assessed at RamaCare", live: true },
  { id: "what-happens", label: "What Happens During Treatment?", live: true },
  { id: "is-it-painful", label: "Is Skin Tag Removal Painful?", live: true },
  { id: "recovery-aftercare", label: "Recovery and Aftercare", live: true },
  { id: "before-after", label: "Skin Tag Removal Before and After", live: true },
  { id: "side-effects-risks", label: "Side Effects and Risks", live: true },
  { id: "grow-back", label: "Can Skin Tags Grow Back?", live: true },
  { id: "multiple-tags", label: "Multiple Skin Tags", live: true },
  { id: "face-neck-eyelids", label: "Removal on Face, Neck, Eyelids & Underarms", live: true },
  { id: "cost-in-dubai", label: "Skin Tag Removal Cost in Dubai", live: true },
  { id: "benefits", label: "Benefits of Professional Removal", live: true },
  { id: "home-removal", label: "Should You Remove a Skin Tag at Home?", live: true },
  { id: "when-see-dermatologist", label: "When Should You See a Dermatologist?", live: true },
  { id: "why-ramacare", label: "Why Choose RamaCare Polyclinic?", live: true },
  { id: "patient-journey", label: "Patient Journey", live: true },
  { id: "faqs", label: "FAQs", live: true },
  { id: "internal-links", label: "Internal Links", live: true },
  { id: "final-cta", label: "Final CTA", live: true },
  { id: "conclusion", label: "Conclusion", live: true },
];

const whatIsASkinTag = {
  h2: "What Is a Skin Tag?",
  paragraphs: [
    "A skin tag is a small, soft, usually flesh-coloured or slightly darker growth of skin. In medical terms it's known as an acrochordon, and it's made up of a core of blood vessels and collagen fibres surrounded by an outer layer of skin. Most skin tags are just a few millimetres in size, though some can grow larger over time. They tend to be soft to the touch and often dangle slightly from a narrow stalk, which is why they're sometimes described as having a \"skin stalk.\"",
    "Skin tags are extremely common — many adults develop at least one over the course of their lives, and some people develop several. They are not the same thing as moles, warts, or other types of skin lesions, although a growth can sometimes resemble more than one of these at a glance. This is exactly why a dermatological examination matters before anyone assumes a growth is \"just a skin tag.\"",
  ],
};

const whatCausesSkinTags = {
  h2: "What Causes Skin Tags?",
  intro: "The exact cause of skin tags isn't fully understood, but several factors are commonly associated with their development:",
  items: [
    { icon: Zap, text: "Friction — skin tags often develop where skin repeatedly rubs against skin or clothing, such as the neck, underarms, and groin" },
    { icon: Layers, text: "Skin folds — areas with natural creases are more prone to friction-related growths" },
    { icon: Calendar, text: "Age — skin tags become more common as people get older" },
    { icon: Users, text: "Family tendency — some people appear to have a genetic predisposition toward developing them" },
    { icon: TrendingUp, text: "Weight-related skin folds — additional skin folds can increase friction in certain areas" },
    { icon: Sparkles, text: "Metabolic factors — some research has explored possible links between metabolic health and skin tag development, though this is not a rule that applies to every patient" },
  ],
  closing: "It's worth being clear here: having multiple skin tags does not, by itself, establish a diagnosis of any other medical condition. Many people with several skin tags have no underlying issue at all. If you have concerns about recurring or numerous skin tags, that's a conversation worth having with a clinician — but the presence of skin tags alone isn't diagnostic of anything else.",
};
const areSkinTagsHarmful = {
  h2: "Are Skin Tags Harmful?",
  intro:
    "For the vast majority of patients, skin tags are benign — they are not generally considered a form of skin cancer, and they don't typically cause health problems on their own. That said, \u201charmless\u201d doesn't always mean \u201ctrouble-free\u201d:",
  concerns: [
    "They can become irritated, especially in areas with frequent friction",
    "They can catch on jewellery, necklaces, bra straps, or clothing",
    "They may bleed if they are repeatedly caught or traumatised",
    "Persistent irritation can occasionally lead to redness or mild swelling around the lesion",
  ],
  caveat:
    "Here's the important caveat: a new or changing growth should never automatically be assumed to be a skin tag. Several other skin lesions can resemble an acrochordon in their early stages, and the only reliable way to tell them apart is a clinical examination. If something looks unfamiliar, has changed recently, or doesn't resemble your other skin tags, it deserves a proper look rather than a guess.",
};

const whereTheyAppear = {
  h2: "Where Do Skin Tags Commonly Appear?",
  locations: [
    { name: "Neck", note: "One of the most frequent locations, largely due to friction from collars, scarves, and necklaces." },
    { name: "Underarms", note: "Skin-on-skin friction, along with shaving, can contribute to irritation in this area." },
    { name: "Eyelids", note: "Skin tags can develop along the eyelid margin. Because the eye area is delicate, removal here calls for particular care and appropriate professional expertise." },
    { name: "Groin", note: "Friction and moisture in skin folds can make this a common site." },
    { name: "Chest", note: "Especially in areas with natural skin folds or where clothing creates repeated friction." },
  ],
  closing: "We won't walk through home-removal instructions for any of these areas — regardless of location, skin tags should be assessed and treated by a clinician rather than handled at home.",
};

const whenToConsiderRemoval = {
  h2: "When Should You Consider Skin Tag Removal?",
  reasons: [
    "Cosmetic concerns, particularly on visible areas like the face or neck",
    "Repeated irritation from clothing or jewellery",
    "The tag catching on necklaces, collars, or bra straps",
    "Bleeding after repeated trauma",
    "Discomfort or pain caused by ongoing friction",
    "Interference with shaving, especially in the underarm or neck area",
    "Simple patient preference",
  ],
  closing: "It's worth repeating: removal is not medically required for every skin tag. Many people choose to leave small, non-bothersome tags alone indefinitely, and that's a perfectly reasonable choice.",
};

const whyExamineFirst = {
  h2: "Why Should a Skin Growth Be Examined Before Removal?",
  intro: "This is one of the most important sections on this page, and for good reason. Skin tags can resemble other types of skin lesions, particularly when they are new, unusually shaped, or located somewhere you can't easily see them yourself. Before any removal is discussed, a clinician will typically assess:",
  criteria: [
    { label: "Shape", question: "Is it consistent with a typical pedunculated skin tag?" },
    { label: "Colour", question: "Flesh-toned, or does it show unusual pigmentation?" },
    { label: "Surface", question: "Smooth, or irregular?" },
    { label: "Size", question: "Has it stayed the same, or grown?" },
    { label: "Attachment", question: "Narrow stalk, or broader base?" },
    { label: "Growth history", question: "How long has it been there, and has it changed?" },
    { label: "Symptoms", question: "Bleeding, pain, itching?" },
    { label: "Changes over time", question: "Any recent evolution in appearance?" },
  ],
  redFlags:
    "A clinician should assess a lesion whenever the diagnosis is uncertain, when it is changing, when it bleeds without an obvious cause like friction, when it becomes persistently painful, when it changes colour or shape, when it develops unusual features, or when it simply looks different from your other skin tags.",
  histopathology:
    "In some cases, if tissue is removed, a laboratory examination (histopathology) may be clinically indicated — this doesn't mean every skin tag requires biopsy, but it's a tool your clinician may use when a lesion's appearance raises any uncertainty. This step exists to protect you, not to complicate a straightforward removal.",
};

const whichTreatment = {
  h2: "Skin Tag Removal in Dubai: Which Treatment Is Right for You?",
  intro: "There's no single \u201cbest\u201d method for every patient — the appropriate technique for skin tag removal in Dubai depends on a combination of factors specific to you and the lesion in question:",
  factors: ["Location on the body", "Size of the growth", "Thickness and attachment", "Shape", "Number of lesions being treated", "Skin type", "Clinical diagnosis", "Cosmetic goals", "The treating practitioner's professional assessment"],
  closing: "No single technique is universally superior to the others — the right choice comes from matching the method to the lesion, not from picking a treatment in advance.",
};

const removalMethods = [
  {
    key: "electrocautery",
    name: "Electrocautery",
    icon: Flame,
    body: "Uses controlled electrical energy applied directly to the tissue. May be appropriate for selected lesions, and a local anaesthetic may be used depending on the specific procedure. Temporary crusting or redness at the treatment site is common afterward.",
    image: "/images/electrocautery-skin-tag-removal.jpg",
    imageAlt: "Electrocautery skin tag removal treatment in Dubai",
  },
  {
    key: "cryotherapy",
    name: "Cryotherapy",
    icon: Snowflake,
    body: "Uses controlled freezing to treat the targeted tissue. Commonly used for certain benign skin lesions, though it isn't automatically appropriate for every skin tag. Temporary blistering, redness, or pigmentation changes can occur as the area heals.",
    image: "/images/cryotherapy-skin-tag-removal.jpg",
    imageAlt: "Cryotherapy treatment for skin tag removal in Dubai",
  },
  {
    key: "excision",
    name: "Snip Excision",
    icon: Scissors,
    body: "A clinician removes the tag using a sterile cutting instrument. Particularly relevant for selected pedunculated (stalked) lesions. A local anaesthetic may be used, and some small wound care is typically required afterward.",
    image: "/images/snip-excision-skin-tag-removal.jpg",
    imageAlt: "Professional skin tag snip excision procedure in Dubai",
  },
  {
    key: "laser",
    name: "Laser-Based Removal",
    icon: Sparkle,
    body: "Worth discussing cautiously, because suitability varies significantly by lesion type, location, size, individual skin characteristics, and the equipment available. Laser isn't automatically a \u201cbetter\u201d option — it's simply another tool that may or may not be the right fit.",
    image: "/images/laser-skin-tag-removal.jpg",
    imageAlt: "Laser skin tag removal consultation in Dubai",
  },
];

const comparisonTable = {
  h2: "Skin Tag Removal Methods Compared",
  rows: [
    { method: "Electrocautery", works: "Controlled electrical energy", advantage: "Useful for selected lesions", consideration: "Temporary crusting/redness" },
    { method: "Cryotherapy", works: "Freezes targeted tissue", advantage: "No cutting required", consideration: "Blistering/pigment changes possible" },
    { method: "Snip excision", works: "Removes lesion mechanically", advantage: "Precise for suitable stalked tags", consideration: "Small wound and aftercare needed" },
    { method: "Laser", works: "Concentrated light/energy", advantage: "May suit selected lesions", consideration: "Suitability varies by case" },
  ],
  closing: "The appropriate technique should be selected after clinical examination rather than based solely on price or online comparisons.",
};

const howAssessed = {
  h2: "How Skin Tags Are Assessed at RamaCare",
  steps: [
    { title: "Medical History", body: "We ask how long the growth has been present, whether it has changed, and whether there's been any irritation, bleeding, pain, or previous treatment attempts." },
    { title: "Visual Examination", body: "The clinician examines the lesion directly, assessing its size, shape, colour, and attachment." },
    { title: "Diagnosis", body: "We determine whether the growth appears consistent with a skin tag or whether further evaluation is needed." },
    { title: "Treatment Discussion", body: "Suitable removal options are explained, along with what to realistically expect." },
    { title: "Consent", body: "We discuss the benefits, risks, alternatives, and recovery expectations before proceeding." },
    { title: "Removal", body: "Treatment goes ahead only once it's clinically appropriate to do so." },
  ],
};

const appointmentFlow = {
  h2: "What Happens During a Skin Tag Removal Appointment?",
  body: "A typical visit for skin tag removal in Dubai at RamaCare follows a clear structure: consultation, skin examination, treatment selection, skin preparation, local anaesthetic if appropriate, the removal procedure itself, wound care, and finally aftercare instructions before you leave. The whole process is designed to be efficient and reassuring, without skipping the clinical steps that keep it safe.",
  stages: ["Consultation", "Skin examination", "Treatment selection", "Skin preparation", "Local anaesthetic, if appropriate", "Removal procedure", "Wound care", "Aftercare instructions"],
};

const isPainful = {
  h2: "Is Skin Tag Removal Painful?",
  body: "Comfort levels vary from patient to patient and depend on the removal method used, the size and location of the lesion, and individual pain sensitivity. Local anaesthetic may be used for certain procedures to improve comfort. We won't tell you the procedure is \u201ccompletely painless\u201d — that's simply not a realistic claim for any removal technique — but most patients describe the sensation as brief and manageable, particularly with appropriate numbing where used.",
};

const recoveryAftercare = {
  h2: "Recovery and Aftercare",
  intro: "Recovery time varies depending on which method was used and the individual healing response. Temporary effects can include:",
  effects: ["Redness", "Mild swelling", "Tenderness", "A small scab", "Crusting", "Temporary pigmentation change at the treated site"],
  guidance: ["Keep the area clean", "Avoid unnecessary touching", "Follow the specific wound-care instructions given to you", "Avoid picking at scabs", "Protect healing skin from excessive sun exposure", "Use only the products recommended by your clinician"],
  closing: "There isn't one universal healing timeline that applies to every patient or every method — your clinician will give you a realistic expectation based on your specific treatment.",
};

const beforeAndAfterSkinTag = {
  h2: "Skin Tag Removal Before and After",
  body: "Before-and-after photographs can be a useful way to see how an individual lesion changed after treatment, but results vary between patients and between lesions. For photos to be genuinely comparable, they should ideally use similar lighting, the same angle, the same distance, no filters, and a consistent background. We won't promise that every patient achieves an identical outcome — healing and final appearance depend on your skin, the treatment method, and how the area is cared for afterward.",
};

const sideEffectsRisks = {
  h2: "Skin Tag Removal Side Effects and Risks",
  intro: "As with any minor procedure, there are possible side effects to be aware of:",
  items: ["Redness", "Swelling", "Tenderness", "Minor bleeding", "Infection", "Temporary crusting", "Pigment changes", "Scarring", "Recurrence, or the development of new skin tags elsewhere"],
  closing: "The likelihood and extent of these effects depend on the removal technique used, the lesion's location, your skin type, your individual healing response, and how well aftercare instructions are followed.",
};

const growBack = {
  h2: "Can Skin Tags Grow Back After Removal?",
  body: "A successfully removed individual skin tag does not typically regrow from the same tissue. However, that doesn't mean you're guaranteed to be tag-free for life — new skin tags can develop elsewhere on the body over time. Removing one lesion doesn't prevent future ones from forming, since the same contributing factors (like friction and individual tendency) remain in play. We can't promise permanent prevention, and any clinic that does should be viewed with caution.",
};

const multipleTags = {
  h2: "Can Multiple Skin Tags Be Removed?",
  body: "Yes, in many cases multiple lesions can be treated during one or more appointments, depending on the number of tags, their size and location, the diagnosis for each, the treatment method chosen, your comfort during the procedure, and the practitioner's assessment. We can't confirm same-day removal of every lesion without an in-person assessment first — the plan is built around what's appropriate for your specific case.",
};

const areasCatalog = {
  h2: "Skin Tag Removal on Face, Neck, Eyelids and Underarms",
  cards: [
    { name: "Face", note: "Cosmetic precision matters here, and technique is chosen with visible healing in mind." },
    { name: "Neck", note: "A very common site, given friction from collars and jewellery, and one of the more frequently requested areas for removal." },
    { name: "Eyelids", note: "The eye area is delicate and requires appropriate professional expertise; this is not an area to consider for any form of self-treatment." },
    { name: "Underarms", note: "Friction and shaving-related irritation are common contributors here, and aftercare tends to focus on minimising further friction during healing." },
  ],
};

const costInDubaiSkinTag = {
  h2: "Skin Tag Removal Cost in Dubai",
  intro: "We won't quote a fixed number here, because skin tag removal cost in Dubai genuinely depends on several variables:",
  factors: ["Number of skin tags being treated", "Size of the lesion(s)", "Location on the body", "Removal technique selected", "The consultation itself", "Number of sessions required", "Whether additional testing is clinically necessary"],
  closing: "Publicly listed prices across Dubai clinics can vary substantially depending on the procedure and provider, so we'd rather not present a generic market figure as though it were RamaCare's own fee. The most accurate way to understand your cost is to come in for an assessment, after which we can give you a personalised quotation based on your specific case.",
};

const benefitsSkinTag = {
  h2: "Benefits of Professional Skin Tag Removal",
  items: ["Addresses unwanted skin growths through a controlled, clinical method", "Reduces repeated irritation from friction or clothing", "Can improve cosmetic appearance in visible areas", "Can make shaving easier in affected areas like the underarm or neck", "Allows for proper clinical assessment before any treatment begins", "Uses controlled professional techniques rather than guesswork", "Provides clear aftercare guidance to support healing"],
};

const homeRemoval = {
  h2: "Should You Remove a Skin Tag at Home?",
  intro: "We'd strongly advise against it, and we mean that calmly rather than as a scare tactic. Please avoid:",
  avoid: ["Cutting a skin tag yourself", "Tying it off", "Burning it", "Applying acids or unverified online products", "Using household tools of any kind"],
  closing: "The risks of DIY removal include bleeding, infection, scarring, an incorrect assumption about what the growth actually is, and — perhaps most importantly — a delayed assessment of a lesion that might have needed a closer look in the first place. None of this is meant to alarm you; it's simply that a two-minute clinical examination is a much safer starting point than a home remedy.",
};

const whenSeeDermatologist = {
  h2: "When Should You See a Dermatologist?",
  intro: "Book a professional evaluation if a skin growth:",
  flags: ["Changes rapidly", "Changes colour", "Has an unusual shape", "Bleeds repeatedly, without an obvious friction-related cause", "Becomes persistently painful", "Develops an ulcer", "Looks different from your existing skin tags", "Simply can't be confidently identified as a skin tag by you"],
  closing: "A changing or suspicious lesion should be assessed by a clinician — not removed for cosmetic reasons before anyone has confirmed what it actually is.",
};

const whyRamaCareSkinTag = {
  h2: "Why Choose RamaCare Polyclinic for Skin Tag Removal?",
  pillars: [
    { title: "Professional Clinical Assessment", body: "Every lesion is assessed before any removal is discussed, so you know what you're dealing with before deciding on treatment." },
    { title: "Personalised Treatment", body: "The removal method is selected according to the lesion's characteristics and your individual needs, rather than defaulting to a single technique for everyone." },
    { title: "Multispecialty Environment", body: "Where clinically relevant, patients can access broader medical care within the same polyclinic setting." },
    { title: "Patient Education", body: "We take the time to explain risks, aftercare, and realistic expectations, so there are no surprises after your appointment." },
    { title: "Dubai Location", body: "RamaCare Polyclinic is based in Jumeirah 1, Dubai, making skin tag removal Dubai appointments accessible for patients across the city." },
  ],
};

const patientJourneySkinTag = {
  h2: "Patient Journey",
  steps: ["Book Consultation", "Skin Lesion Assessment", "Confirm Likely Diagnosis", "Discuss Removal Options", "Select Appropriate Technique", "Skin Tag Removal", "Aftercare Instructions", "Healing / Follow-Up", "Long-Term Skin Monitoring"],
};

const faqsSkinTag = [
  { q: "What is a skin tag?", a: "A skin tag, or acrochordon, is a small, soft, usually flesh-coloured growth of skin that often hangs from a thin stalk. They commonly form in areas of friction like the neck, underarms, and skin folds, and are generally benign." },
  { q: "Are skin tags dangerous?", a: "Most skin tags are benign and not considered a form of skin cancer. However, a new or changing growth shouldn't be assumed to be a skin tag without examination, since other lesions can resemble one." },
  { q: "What causes skin tags?", a: "The exact cause isn't fully understood, but friction, skin folds, age, family tendency, and metabolic factors are commonly associated with their development. Having several skin tags doesn't by itself indicate another condition." },
  { q: "Can skin tags disappear on their own?", a: "Skin tags don't typically resolve on their own the way some other minor skin issues might. If a tag bothers you, removal is a personal choice best discussed with a clinician rather than waiting for it to go away." },
  { q: "Can I remove a skin tag at home?", a: "This isn't advisable. Cutting, tying off, burning, or using unverified products can lead to bleeding, infection, scarring, or a missed opportunity to properly assess an unfamiliar growth." },
  { q: "Is skin tag removal painful?", a: "Comfort varies by method, size, location, and individual sensitivity. Local anaesthetic may be used for certain procedures. It would be inaccurate to describe any method as completely painless." },
  { q: "What is the best method for removing a skin tag?", a: "There isn't one universal \u201cbest\u201d method. Electrocautery, cryotherapy, snip excision, and laser-based treatment each suit different lesions, and the right choice depends on clinical assessment." },
  { q: "Can skin tags be removed from the neck?", a: "Yes, the neck is one of the most common sites for removal, given how frequently friction from collars and jewellery contributes to their development there." },
  { q: "Can skin tags be removed from the eyelid?", a: "Yes, though the eye area is delicate and eyelid procedures require particular care and appropriate professional expertise." },
  { q: "Can multiple skin tags be removed at once?", a: "Often, yes — depending on the number, size, and location of the lesions, along with your comfort and the practitioner's assessment. Confirmed during your consultation, not promised in advance." },
  { q: "How long does skin tag removal take?", a: "Procedure time varies by method and the number of lesions being treated, but most in-office removals are relatively quick, often completed within a single appointment." },
  { q: "What does skin tag removal cost in Dubai?", a: "Cost depends on the number of lesions, their size and location, the technique used, and whether additional testing is needed. A personalised quotation is provided after your assessment." },
  { q: "What happens after skin tag removal?", a: "You'll receive specific aftercare instructions covering wound care, activity limits, and what to expect as the area heals, including possible redness, crusting, or mild tenderness." },
  { q: "Can skin tags grow back?", a: "An individually removed skin tag typically doesn't regrow from the same tissue, but new skin tags can develop elsewhere over time, since the underlying contributing factors remain." },
  { q: "Can skin tag removal leave a scar?", a: "Scarring is a possible outcome depending on the technique, lesion size, location, and your individual healing response. It isn't guaranteed, but it isn't ruled out either." },
  { q: "What are the side effects of skin tag removal?", a: "Possible effects include redness, swelling, tenderness, minor bleeding, infection, temporary crusting, pigment changes, and rarely, scarring." },
  { q: "Should every skin growth be removed?", a: "No. Removal is optional for most skin tags and is usually driven by cosmetic preference or irritation rather than medical necessity — unless a lesion shows features that warrant closer evaluation." },
  { q: "When should I see a dermatologist for a skin tag?", a: "See a clinician if a growth changes rapidly, changes colour, bleeds without obvious cause, becomes persistently painful, or simply looks different from your other skin tags." },
  { q: "Can skin tags be confused with other skin lesions?", a: "Yes, which is exactly why clinical assessment matters before removal. Several benign and less common lesions can resemble a skin tag, especially early on." },
  { q: "How do I book a skin tag removal consultation at RamaCare?", a: "You can call RamaCare Polyclinic directly, send a WhatsApp message, or use the online booking option to schedule a consultation and skin lesion assessment." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqsSkinTag.map((faq) => ({
    "@type": "Question",
    "name": faq.q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.a
    }
  }))
};

const internalLinksSkinTag = [
  {
    prefix: "If you're unsure whether a growth is a skin tag or another type of lesion, consider starting with a ",
    linkText: "dermatology consultation in Dubai",
    suffix: " before choosing a removal procedure.",
    url: "/services/acne-treatment-dubai",
  },
  {
    prefix: "Learn more about our broader approach to ",
    linkText: "skin diseases treatment in Dubai",
    suffix: ".",
    url: "/services/skin-diseases-treatment",
  },
  {
    prefix: "If the growth in question is a mole rather than a skin tag, see our page on ",
    linkText: "mole removal in Dubai",
    suffix: ".",
    url: "/services/mole-removal-dubai",
  },
  {
    prefix: "Warts can sometimes be mistaken for skin tags — read about ",
    linkText: "wart removal in Dubai",
    suffix: " for comparison.",
    url: "/services/nail-fungus-dubai",
  },
  {
    prefix: "Interested in other non-surgical options? Explore ",
    linkText: "laser skin treatment in Dubai",
    suffix: ".",
    url: "/services/laser-treatment-dubai",
  },
  {
    prefix: "For broader cosmetic skin goals, see ",
    linkText: "skin rejuvenation in Dubai",
    suffix: ".",
    url: "/services/laser-rejuvenation-dubai",
  },
  {
    prefix: "Curious about aesthetic dermatology more generally? Visit our ",
    linkText: "aesthetic dermatology Dubai",
    suffix: " page.",
    url: "/services/aesthetic-dermatology-dubai",
  },
  {
    prefix: "Return to the ",
    linkText: "RamaCare Polyclinic homepage",
    suffix: " to explore our full range of services.",
    url: "/",
  },
];

const finalCtaSkinTag = {
  eyebrow: "Want to Have a Skin Growth Checked?",
  body: "If you have a skin tag — or a growth you're not entirely sure about — the safest first step is a proper assessment, not a guess. Our clinicians can examine the lesion, confirm what it is, and talk you through appropriate removal options if you'd like to proceed. Book a dermatology consultation with RamaCare Polyclinic, call us directly, or send a WhatsApp message to get started.",
  sub: "There's no pressure to treat anything you're not ready for — just clear, professional guidance so you can make an informed decision.",
  conclusion: "Skin tags are usually benign growths that develop where skin experiences repeated friction, and for many patients, removal is simply a matter of comfort or cosmetic preference rather than medical necessity. Several removal methods exist — electrocautery, cryotherapy, snip excision, and laser-based treatment — and the right one depends on the specific lesion, not a one-size-fits-all approach. What matters most is that clinical assessment comes before removal, since not every growth that looks like a skin tag actually is one. Attempting removal at home introduces risks that simply aren't worth taking. If you're considering skin tag removal in Dubai, the most reliable path forward starts with a proper consultation — book an assessment with RamaCare Polyclinic to discuss your options.",
};
/* BRAND */
const BRAND = { teal: "#1F5E4B", darkTeal: "#0F3B2E", gold: "#D4A574", cream: "#F5F1E8", creamLight: "#F9F7F2" };
const FONT_DISPLAY = "'Nunito Sans', system-ui, sans-serif";
const FONT_BODY = "'Nunito Sans', system-ui, sans-serif";



/* SPECIMEN LABEL — a torn/perforated tag, used for every list item across this batch */
function SpecimenTag({ children }) {
  return (
    <span
      className="relative inline-flex items-center rounded-[3px] border-l-4 bg-white px-3.5 py-2 text-[12.5px] font-medium leading-snug shadow-[0_2px_6px_rgba(15,59,46,0.06)]"
      style={{ borderColor: BRAND.gold, color: BRAND.darkTeal }}
    >
      {children}
    </span>
  );
}

/* TAPED MARGIN NOTE — taped paper aesthetic with 100% razor-sharp unrotated text */
function MarginNote({ children, tone = "gold" }) {
  const color = tone === "gold" ? BRAND.gold : BRAND.teal;
  return (
    <div className="relative">
      {/* Rotated taped card background shape */}
      <div
        className="absolute inset-0 -rotate-1 rounded-[2px] border shadow-[0_8px_20px_rgba(15,59,46,0.08)]"
        style={{ borderColor: `${color}44`, backgroundColor: "#FFFDF7" }}
      />
      {/* Rotated tape accent */}
      <span className="absolute -top-2.5 left-6 z-10 h-4 w-10 rotate-2 opacity-70" style={{ backgroundColor: `${color}55` }} />

      {/* 100% Unrotated text content layer for razor-sharp rendering */}
      <div className="relative z-10 flex items-start gap-3 p-5">
        <PenLine size={15} className="mt-0.5 flex-none" color={color} strokeWidth={1.8} />
        <p className="text-[13.5px] font-semibold leading-[1.85] text-[#0F3B2E]">{children}</p>
      </div>
    </div>
  );
}

/* CHART STAMP ROW — a rubber-stamped chart entry, used in the healing section */
function StampRow({ icon: Icon, label }) {
  return (
    <div className="flex items-center gap-3 border-b py-3" style={{ borderColor: `${BRAND.teal}14` }}>
      <span
        className="flex h-8 w-8 flex-none items-center justify-center rounded-full border-2"
        style={{ borderColor: BRAND.teal, color: BRAND.teal, transform: "rotate(-6deg)" }}
      >
        <Icon size={13} strokeWidth={2.2} />
      </span>
      <span className="text-[13px] font-medium text-neutral-700">{label}</span>
    </div>
  );
}

function ImagePanel({ label, ratio = "aspect-[4/3]", className = "" }) {
  return (
    <div className={`relative overflow-hidden ${ratio} w-full rounded-[24px] border ${className}`} style={{ borderColor: `${BRAND.teal}22`, backgroundColor: `${BRAND.teal}06` }}>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-6 text-center">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl" style={{ backgroundColor: `${BRAND.teal}15` }}>
          <ImageIcon size={20} color={BRAND.teal} strokeWidth={1.8} />
        </div>
        <span className="text-[12px] font-medium text-neutral-500">{label}</span>
      </div>
    </div>
  );
}

function ClinicalImage({ src, alt, ratio = "aspect-[4/3]", className = "" }) {
  const [imgError, setImgError] = useState(false);

  const filename = src
    ? src.split("/").pop()
    : alt
      ? `${alt.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}.jpg`
      : "clinical-photo.jpg";

  if (!src || imgError) {
    return (
      <div
        className={`relative flex flex-col items-center justify-center gap-2 overflow-hidden ${ratio} w-full rounded-[24px] border p-6 text-center shadow-sm ${className}`}
        style={{ borderColor: `${BRAND.teal}22`, backgroundColor: `${BRAND.teal}06` }}
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-xl" style={{ backgroundColor: `${BRAND.teal}15` }}>
          <ImageIcon size={20} color={BRAND.teal} strokeWidth={1.8} />
        </div>
        <span className="font-mono text-[12.5px] font-semibold" style={{ color: BRAND.darkTeal }}>
          {filename}
        </span>
        {alt && <span className="text-[11.5px] leading-relaxed text-neutral-500 max-w-xs">{alt}</span>}
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${ratio} w-full rounded-[24px] border ${className}`} style={{ borderColor: `${BRAND.teal}22` }}>
      <Image
        src={src}
        alt={alt || "RamaCare Polyclinic Dermatology"}
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-cover"
        onError={() => setImgError(true)}
      />
    </div>
  );
}

function BlurOrbs({ variant = "hero" }) {
  const sets = {
    hero: [
      { color: BRAND.gold, size: 420, top: "-10%", left: "58%", opacity: 0.28 },
      { color: BRAND.teal, size: 340, top: "40%", left: "-8%", opacity: 0.16 },
    ],
    quick: [{ color: BRAND.gold, size: 300, top: "-20%", left: "20%", opacity: 0.22 }],
    causes: [
      { color: BRAND.teal, size: 380, top: "-15%", left: "70%", opacity: 0.14 },
      { color: BRAND.gold, size: 260, top: "60%", left: "-5%", opacity: 0.18 },
    ],
  };
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {sets[variant].map((o, i) => (
        <div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{ backgroundColor: o.color, width: o.size, height: o.size, top: o.top, left: o.left, opacity: o.opacity }}
        />
      ))}
    </div>
  );
}
/* ------------------------------------------------------------------ */
/*  SECTION: HERO — animated gradient-mesh background with drifting    */
/*  blurred orbs, a depth-framed photo (offset border + glow), and a   */
/*  trust strip instead of a single floating card.                     */
/* ------------------------------------------------------------------ */
function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-6 pb-16 md:px-10 md:pt-8 md:pb-20" style={{ fontFamily: FONT_BODY }}>
      {/* BACKGROUND IMAGE LAYER WITH LEFT FOCAL ALIGNMENT */}
      <div className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">
        <Image
          src="/images/dermatologist-consultation-skin-treatment-dubai.jpg"
          alt="RamaCare Dermatology consultation ambiance"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-90 blur-[1px] scale-105"
          style={{ objectPosition: "20% center" }}
        />
      </div>

      {/* SEAMLESS SOFT OVERLAY: STRONGER ON LEFT FOR TEXT READABILITY, CLEAR ON RIGHT FOR PHOTO */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background: `linear-gradient(90deg, rgba(245, 241, 232, 0.88) 0%, rgba(245, 241, 232, 0.75) 45%, rgba(255, 255, 255, 0.42) 100%)`,
        }}
      />

      {/* ANIMATED DRIFTING SOFT ORBS */}
      <motion.div
        className="pointer-events-none absolute -left-32 top-[-10%] h-[440px] w-[440px] rounded-full blur-[100px]"
        style={{ backgroundColor: `${BRAND.gold}30` }}
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute right-[-6%] top-[15%] h-[400px] w-[400px] rounded-full blur-[100px]"
        style={{ backgroundColor: `${BRAND.teal}20` }}
        animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* faint dot-grid texture over the overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage: `radial-gradient(${BRAND.darkTeal}14 1px, transparent 1px)`,
          backgroundSize: "26px 26px",
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        {/* VISUAL BREADCRUMBS */}
        <nav aria-label="Breadcrumb" className="mb-5 flex flex-wrap items-center gap-2 text-[12.5px] font-medium text-neutral-600">
          <Link href="/" className="transition-colors hover:text-[#1F5E4B]">
            Home
          </Link>
          <span className="text-neutral-400">/</span>
          <Link href="/services/aesthetic-dermatology-dubai/" className="transition-colors hover:text-[#1F5E4B]">
            Aesthetic Dermatology
          </Link>
          <span className="text-neutral-400">/</span>
          <span style={{ color: BRAND.darkTeal }} className="font-semibold">
            Skin Tag Removal in Dubai
          </span>
        </nav>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.35fr_0.65fr]">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}>
            <div
              className="mb-5 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[11.5px] font-semibold uppercase tracking-[0.14em] backdrop-blur-sm"
              style={{ borderColor: `${BRAND.gold}55`, color: "#9C7443", backgroundColor: "rgba(255,255,255,0.75)" }}
            >
              <Sparkles size={13} color={BRAND.gold} /> Dermatology &middot; RamaCare Polyclinic
            </div>

            <h1 className="max-w-2xl text-[2.4rem] leading-[1.12] md:text-[3.2rem]" style={{ fontFamily: FONT_DISPLAY, fontWeight: 700, color: "#0B2B22" }}>
              {hero.h1}
            </h1>

            <div className="mt-6 max-w-2xl space-y-4">
              {hero.intro.map((p, i) => (
                <p
                  key={i}
                  className="text-[15.5px] font-semibold leading-[1.85] text-[#0F3B2E]"
                >
                  {p}
                </p>
              ))}
            </div>
            <Link
              href="/book-appointment/"
              className="group mt-8 inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[14px] font-semibold text-white shadow-[0_14px_30px_rgba(15,59,46,0.25)] transition-transform hover:-translate-y-0.5"
              style={{ backgroundColor: BRAND.teal }}
            >
              Book a Consultation
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </Link>

            {/* TRUST STRIP — replaces the single floating card */}
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 border-t pt-6" style={{ borderColor: `${BRAND.darkTeal}18` }}>
              {[
                { icon: ShieldCheck, label: "Assessed First", sub: "Every growth examined before removal" },
                { icon: Sparkles, label: "Personalised", sub: "Method matched to your lesion" },
                { icon: Users, label: "Multispecialty", sub: "Full polyclinic care in Jumeirah 1" },
              ].map((t) => {
                const TIcon = t.icon;
                return (
                  <div key={t.label} className="flex items-start gap-2.5">
                    <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full" style={{ backgroundColor: `${BRAND.teal}14` }}>
                      <TIcon size={14} color={BRAND.teal} strokeWidth={2} />
                    </span>
                    <div>
                      <p className="text-[12px] font-semibold" style={{ color: BRAND.darkTeal }}>{t.label}</p>
                      <p className="text-[11px] leading-tight text-neutral-600">{t.sub}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* DEPTH-FRAMED PHOTO */}
          <motion.div
            initial={{ opacity: 0, scale: 0.93 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-md"
          >
            {/* offset gold frame sitting behind the photo */}
            <div
              className="absolute -bottom-4 -right-4 h-full w-full rounded-[28px] border-2"
              style={{ borderColor: `${BRAND.gold}66` }}
            />
            {/* soft glow behind the whole composition */}
            <div className="pointer-events-none absolute -inset-6 -z-10 rounded-full blur-3xl" style={{ backgroundColor: `${BRAND.teal}20` }} />

            <ClinicalImage
              src="/images/skin-tag-removal-dubai-hero.jpg"
              alt="Skin Tag Removal in Dubai consultation at RamaCare Polyclinic"
              ratio="aspect-[4/5]"
              className="relative shadow-[0_30px_70px_rgba(15,59,46,0.22)]"
            />

            {/* scan-line accent, echoes the clinical/diagnostic theme without a static card */}
            <motion.div
              className="pointer-events-none absolute left-6 right-6 h-px"
              style={{ background: `linear-gradient(90deg, transparent, ${BRAND.gold}, transparent)` }}
              initial={{ top: "8%" }}
              animate={{ top: ["8%", "92%", "8%"] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* small pinned badge, bottom-left, replacing the boxier "assessed first" card */}
            <div
              className="absolute -bottom-6 left-6 flex items-center gap-2.5 rounded-full border px-4 py-2.5 shadow-lg backdrop-blur-md"
              style={{ borderColor: `${BRAND.teal}22`, backgroundColor: "rgba(255,255,255,0.92)" }}
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full" style={{ backgroundColor: `${BRAND.teal}14` }}>
                <ShieldCheck size={13} color={BRAND.teal} />
              </span>
              <span className="text-[11.5px] font-semibold" style={{ color: BRAND.darkTeal }}>Every growth assessed first</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
function QuickAnswer() {
  return (
    <section className="relative overflow-hidden px-6 pb-16 pt-4 md:px-10" style={{ fontFamily: FONT_BODY }}>
      <BlurOrbs variant="quick" />
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto max-w-6xl overflow-hidden rounded-[28px] border p-8 shadow-[0_20px_50px_rgba(15,59,46,0.08)] backdrop-blur-md md:p-11"
        style={{ borderColor: `${BRAND.gold}33`, backgroundColor: "rgba(255,255,255,0.85)" }}
      >
        <span
          className="pointer-events-none absolute -right-4 -top-6 select-none text-[110px] font-semibold leading-none"
          style={{ fontFamily: FONT_DISPLAY, color: `${BRAND.gold}18` }}
        >
          ?
        </span>
        <div className="relative flex items-start gap-5">
          <div className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl" style={{ backgroundColor: `${BRAND.teal}12` }}>
            <Search size={20} color={BRAND.teal} />
          </div>
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-wide" style={{ color: BRAND.gold }}>Quick Answer</span>
            <h2 className="mt-1 text-[19px] font-semibold" style={{ fontFamily: FONT_DISPLAY, color: BRAND.darkTeal }}>{quickAnswer.label}</h2>
            <p className="mt-3 text-[14px] leading-[1.9] text-neutral-600">{quickAnswer.body}</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function TableOfContents() {
  const navRef = useRef(null);

  const scrollNav = (direction) => {
    if (navRef.current) {
      navRef.current.scrollBy({
        left: direction === "left" ? -220 : 220,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="px-4 py-3 md:px-10 md:py-6" style={{ fontFamily: FONT_BODY }}>
      <div className="mx-auto max-w-6xl rounded-2xl border bg-white px-3.5 py-3 md:px-6 md:py-4 shadow-[0_4px_20px_rgba(15,59,46,0.04)]" style={{ borderColor: `${BRAND.teal}18` }}>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
          {/* Header Badge */}
          <div className="flex flex-none items-center justify-between border-b pb-2 sm:border-b-0 sm:border-r sm:pb-0 sm:pr-4" style={{ borderColor: `${BRAND.teal}1f` }}>
            <div className="flex items-center gap-2">
              <MapPin size={15} color={BRAND.gold} />
              <span className="text-[12px] font-semibold uppercase tracking-wider md:text-[12.5px]" style={{ color: BRAND.darkTeal }}>
                Quick Jump
              </span>
            </div>
            <span className="text-[11px] font-medium text-neutral-400 sm:hidden">
              Swipe topics &rarr;
            </span>
          </div>

          {/* Scrollable Container with Arrows */}
          <div className="relative flex flex-1 items-center overflow-hidden">
            {/* Left Arrow */}
            <button
              onClick={() => scrollNav("left")}
              aria-label="Scroll left"
              className="group absolute left-0 z-10 hidden h-8 w-8 items-center justify-center rounded-full border border-white/40 bg-white/80 shadow-md backdrop-blur-md transition-all hover:bg-white active:scale-95 sm:flex"
              style={{ borderColor: `${BRAND.teal}22` }}
            >
              <ChevronLeft size={16} color={BRAND.darkTeal} strokeWidth={2.2} />
            </button>

            {/* Scrollable Topics Row */}
            <div
              ref={navRef}
              className="flex flex-1 items-center gap-2 overflow-x-auto px-0.5 py-1 sm:px-9 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            >
              {TOC.filter((item) => item.live).map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="inline-flex flex-none items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-[12px] font-medium transition-colors hover:bg-[#1F5E4B] hover:text-white active:bg-[#1F5E4B] active:text-white"
                  style={{ borderColor: `${BRAND.teal}22`, color: BRAND.darkTeal, backgroundColor: BRAND.creamLight }}
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Right Arrow */}
            <button
              onClick={() => scrollNav("right")}
              aria-label="Scroll right"
              className="group absolute right-0 z-10 hidden h-8 w-8 items-center justify-center rounded-full border border-white/40 bg-white/80 shadow-md backdrop-blur-md transition-all hover:bg-white active:scale-95 sm:flex"
              style={{ borderColor: `${BRAND.teal}22` }}
            >
              <ChevronRight size={16} color={BRAND.darkTeal} strokeWidth={2.2} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatIsASkinTag() {
  const [first, ...rest] = whatIsASkinTag.paragraphs;
  return (
    <section id="what-is-a-skin-tag" className="scroll-mt-24 relative overflow-hidden px-6 py-20 md:px-10 md:py-24" style={{ backgroundColor: "#FFFFFF", fontFamily: FONT_BODY }}>
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_0.75fr]">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}>
          <span className="text-[11.5px] font-semibold uppercase tracking-wide" style={{ color: BRAND.gold }}>Understanding the Growth</span>
          <h2 className="mt-2 text-[1.9rem] font-semibold leading-tight md:text-[2.2rem]" style={{ fontFamily: FONT_DISPLAY, color: BRAND.darkTeal }}>{whatIsASkinTag.h2}</h2>

          <p className="mt-6 text-[15px] leading-[1.95] text-neutral-700">
            <span className="mr-1 float-left text-[3.4rem] font-semibold leading-[0.75]" style={{ fontFamily: FONT_DISPLAY, color: BRAND.gold }}>
              A
            </span>
            {first.replace(/^A /, "")}
          </p>
          {rest.map((p, i) => (
            <p key={i} className="mt-4 text-[14.5px] leading-[1.9] text-neutral-700">{p}</p>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="pointer-events-none absolute -inset-6 rounded-full blur-3xl" style={{ backgroundColor: `${BRAND.gold}22` }} />
          <ClinicalImage
            src="/images/skin-tag-assessment-dubai.jpg"
            alt="Clinical Skin Tag Assessment in Dubai"
            ratio="aspect-[4/3]"
          />
        </motion.div>
      </div>
    </section>
  );
}
function WhatCausesSkinTags() {
  return (
    <section id="what-causes-skin-tags" className="scroll-mt-24 relative overflow-hidden px-6 py-20 md:px-10 md:py-24" style={{ backgroundColor: BRAND.creamLight, fontFamily: FONT_BODY }}>
      <BlurOrbs variant="causes" />
      <div className="relative mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <span className="text-[11.5px] font-semibold uppercase tracking-[0.16em]" style={{ color: BRAND.gold }}>Why They Form</span>
          <h2 className="mt-2 text-[1.9rem] font-semibold leading-tight md:text-[2.3rem]" style={{ fontFamily: FONT_DISPLAY, color: BRAND.darkTeal }}>{whatCausesSkinTags.h2}</h2>
          <p className="mt-4 text-[14.5px] leading-[1.9] text-neutral-700">{whatCausesSkinTags.intro}</p>
        </div>

        {/* FEATURE MATRIX GRID */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whatCausesSkinTags.items.map((it, i) => {
            const Icon = it.icon;
            const parts = it.text.split(" — ");
            const title = parts[0];
            const description = parts[1] || parts[0];
            return (
              <motion.div
                key={it.text}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className="group relative flex flex-col justify-between rounded-2xl border bg-white p-6 shadow-[0_10px_30px_rgba(15,59,46,0.05)] transition-all hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,59,46,0.12)]"
                style={{ borderColor: `${BRAND.teal}1f` }}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl transition-colors group-hover:bg-[#1F5E4B] group-hover:text-white" style={{ backgroundColor: `${BRAND.teal}12` }}>
                      <Icon size={20} color={BRAND.teal} className="transition-colors group-hover:text-white" strokeWidth={1.8} />
                    </span>
                  </div>
                  <h3 className="mt-5 text-[16px] font-semibold" style={{ color: BRAND.darkTeal }}>{title}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-neutral-600">{description}</p>
                </div>
                <div className="mt-6 h-0.5 w-full rounded-full transition-all group-hover:w-full" style={{ backgroundColor: `${BRAND.gold}44` }} />
              </motion.div>
            );
          })}
        </div>

        {/* CLINICAL NOTE */}
        <div className="mt-12 rounded-2xl border-l-4 p-6 shadow-sm bg-white" style={{ borderColor: BRAND.teal }}>
          <div className="flex items-center gap-2 mb-2">
            <ShieldCheck size={18} color={BRAND.teal} />
            <span className="text-[12.5px] font-semibold uppercase tracking-wider" style={{ color: BRAND.teal }}>Clinical Clarification</span>
          </div>
          <p className="text-[14px] leading-[1.9] text-neutral-700">{whatCausesSkinTags.closing}</p>
        </div>
      </div>
    </section>
  );
}
function HarmfulAndLocations() {
  return (
    <section id="are-skin-tags-harmful" className="scroll-mt-24 px-6 py-20 md:px-10 md:py-24" style={{ backgroundColor: "#FFFFFF", fontFamily: FONT_BODY }}>
      <div className="mx-auto max-w-6xl">
        <span className="text-[11.5px] font-semibold uppercase tracking-wide" style={{ color: BRAND.gold }}>Understanding the Risk</span>
        <h2 className="mt-2 max-w-3xl text-[1.9rem] font-semibold leading-tight md:text-[2.2rem]" style={{ fontFamily: FONT_DISPLAY, color: BRAND.darkTeal }}>
          {areSkinTagsHarmful.h2}
        </h2>

        <div className="mt-8">
          <p className="text-[14.5px] leading-[1.9] text-neutral-700">{areSkinTagsHarmful.intro}</p>
          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {areSkinTagsHarmful.concerns.map((c) => (
              <div key={c} className="flex items-start gap-3 rounded-xl border p-4 bg-neutral-50/50" style={{ borderColor: `${BRAND.teal}14` }}>
                <ShieldCheck size={16} color={BRAND.teal} className="mt-0.5 flex-none" strokeWidth={1.8} />
                <span className="text-[13.5px] leading-snug text-neutral-700">{c}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex items-start gap-3 rounded-2xl border-l-4 p-6 shadow-sm" style={{ borderColor: BRAND.gold, backgroundColor: BRAND.creamLight }}>
          <AlertTriangle size={18} className="mt-0.5 flex-none" color={BRAND.gold} />
          <p className="text-[13.5px] leading-relaxed text-neutral-700">{areSkinTagsHarmful.caveat}</p>
        </div>

        {/* LOCATION STRIP */}
        <div id="where-they-appear" className="scroll-mt-24 mt-16 border-t pt-14" style={{ borderColor: `${BRAND.teal}14` }}>
          <span className="text-[11.5px] font-semibold uppercase tracking-[0.16em]" style={{ color: BRAND.gold }}>Common Locations</span>
          <h3 className="mt-2 text-[1.8rem] font-semibold leading-tight md:text-[2.1rem]" style={{ fontFamily: FONT_DISPLAY, color: BRAND.darkTeal }}>
            {whereTheyAppear.h2}
          </h3>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whereTheyAppear.locations.map((loc, i) => (
              <motion.div
                key={loc.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="rounded-2xl border p-5 transition-all hover:shadow-sm"
                style={{ borderColor: `${BRAND.teal}1f`, backgroundColor: BRAND.creamLight }}
              >
                <div className="flex items-center gap-2">
                  <MapPin size={15} color={BRAND.gold} />
                  <span className="text-[14px] font-semibold" style={{ color: BRAND.darkTeal }}>{loc.name}</span>
                </div>
                <p className="mt-2 text-[13px] leading-relaxed text-neutral-600">{loc.note}</p>
              </motion.div>
            ))}
          </div>

          <p className="mt-8 text-[14px] leading-[1.9] text-neutral-600">{whereTheyAppear.closing}</p>
        </div>
      </div>
    </section>
  );
}
function CriterionTile({ label, question }) {
  return (
    <div
      className="rounded-xl border p-4 bg-white shadow-sm"
      style={{ borderColor: `${BRAND.teal}22` }}
    >
      <span className="text-[13px] font-semibold" style={{ color: BRAND.darkTeal }}>{label}</span>
      <p className="mt-1.5 text-[12px] leading-relaxed text-neutral-600">{question}</p>
    </div>
  );
}

function WhenAndWhyExamine() {
  return (
    <section id="when-to-consider-removal" className="scroll-mt-24 px-6 py-20 md:px-10 md:py-24" style={{ backgroundColor: BRAND.creamLight, fontFamily: FONT_BODY }}>
      <div className="mx-auto max-w-6xl">
        <span className="text-[11.5px] font-semibold uppercase tracking-wide" style={{ color: BRAND.gold }}>Deciding &amp; Diagnosing</span>
        <h2 className="mt-2 max-w-3xl text-[1.9rem] font-semibold leading-tight md:text-[2.2rem]" style={{ fontFamily: FONT_DISPLAY, color: BRAND.darkTeal }}>
          {whenToConsiderRemoval.h2}
        </h2>

        <p className="mt-4 max-w-3xl text-[14.5px] leading-[1.9] text-neutral-700">Removal is a personal decision in most cases, not a medical necessity. Patients typically consider it for reasons such as:</p>

        <div className="mt-6 flex flex-wrap gap-2.5">
          {whenToConsiderRemoval.reasons.map((r) => (
            <span key={r} className="rounded-full px-4 py-2 text-[13px] font-medium text-white" style={{ backgroundColor: BRAND.teal }}>
              {r}
            </span>
          ))}
        </div>
        <p className="mt-5 text-[13.5px] leading-relaxed text-neutral-500">{whenToConsiderRemoval.closing}</p>

        {/* WHY EXAMINE FIRST */}
        <div id="why-examine-first" className="scroll-mt-24 mt-16 border-t pt-14" style={{ borderColor: `${BRAND.teal}18` }}>
          <span className="text-[11.5px] font-semibold uppercase tracking-[0.16em]" style={{ color: BRAND.gold }}>Assessment Protocol</span>
          <h3 className="mt-2 text-[1.8rem] font-semibold leading-tight md:text-[2.1rem]" style={{ fontFamily: FONT_DISPLAY, color: BRAND.darkTeal }}>
            {whyExamineFirst.h2}
          </h3>
          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-[14px] leading-[1.9] text-neutral-700">{whyExamineFirst.intro}</p>
              <ClinicalImage
                src="/images/dermatologist-examining-skin-tag.jpg"
                alt="Dermatologist examining a skin tag before removal in Dubai"
                ratio="aspect-[4/3]"
                className="mt-6"
              />
            </div>

            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wide text-neutral-500 flex items-center gap-2 mb-3">
                <Eye size={13} color={BRAND.gold} /> Assessment Criteria
              </span>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {whyExamineFirst.criteria.map((c) => (
                  <CriterionTile key={c.label} label={c.label} question={c.question} />
                ))}
              </div>

              <div className="mt-6 flex items-start gap-3 rounded-2xl border-l-4 bg-white p-5" style={{ borderColor: BRAND.gold }}>
                <AlertTriangle size={15} className="mt-0.5 flex-none" color={BRAND.gold} />
                <p className="text-[13.5px] leading-[1.9] text-neutral-600">{whyExamineFirst.redFlags}</p>
              </div>
              <div className="mt-3 flex items-start gap-3 rounded-2xl p-5" style={{ backgroundColor: `${BRAND.teal}0d` }}>
                <ClipboardList size={15} className="mt-0.5 flex-none" color={BRAND.teal} />
                <p className="text-[13px] leading-relaxed text-neutral-600">{whyExamineFirst.histopathology}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TreatmentMethodsHub() {
  const [active, setActive] = useState(0);
  const [showCompare, setShowCompare] = useState(false);
  const method = removalMethods[active];
  const Icon = method.icon;

  return (
    <section id="which-treatment" className="scroll-mt-24 px-6 py-20 md:px-10 md:py-24" style={{ backgroundColor: "#FFFFFF", fontFamily: FONT_BODY }}>
      <div className="mx-auto max-w-6xl">
        <span className="text-[11.5px] font-semibold uppercase tracking-wide" style={{ color: BRAND.gold }}>Choosing a Method</span>
        <h2 className="mt-2 max-w-3xl text-[1.9rem] font-semibold leading-tight md:text-[2.2rem]" style={{ fontFamily: FONT_DISPLAY, color: BRAND.darkTeal }}>
          {whichTreatment.h2}
        </h2>
        <p className="mt-4 max-w-3xl text-[14.5px] leading-[1.9] text-neutral-700">{whichTreatment.intro}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {whichTreatment.factors.map((f) => (
            <span key={f} className="rounded-full border px-3.5 py-1.5 text-[12px] font-medium" style={{ borderColor: `${BRAND.teal}22`, color: BRAND.darkTeal, backgroundColor: BRAND.creamLight }}>
              {f}
            </span>
          ))}
        </div>

        {/* METHOD SELECTOR */}
        <div id="removal-methods" className="scroll-mt-24 mt-16 border-t pt-14" style={{ borderColor: `${BRAND.teal}14` }}>
          <span className="text-[11.5px] font-semibold uppercase tracking-[0.16em]" style={{ color: BRAND.gold }}>Removal Options</span>
          <h3 className="mt-2 text-[1.8rem] font-semibold leading-tight md:text-[2.1rem]" style={{ fontFamily: FONT_DISPLAY, color: BRAND.darkTeal }}>
            Skin Tag Removal Methods
          </h3>
          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[0.4fr_0.6fr] lg:items-start">
            <div className="-mx-6 flex gap-2 overflow-x-auto px-6 pb-2 lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0 lg:pb-0">
              {removalMethods.map((m, i) => {
                const MIcon = m.icon;
                const isActive = i === active;
                return (
                  <button
                    key={m.key}
                    onClick={() => setActive(i)}
                    className="flex flex-none items-center gap-3 rounded-xl border px-4 py-3.5 text-left transition-colors lg:w-full"
                    style={{ borderColor: isActive ? BRAND.teal : `${BRAND.teal}1f`, backgroundColor: isActive ? BRAND.teal : "#FFFFFF" }}
                  >
                    <MIcon size={17} color={isActive ? "#FFFFFF" : BRAND.teal} strokeWidth={1.8} />
                    <span className="whitespace-nowrap text-[13px] font-semibold" style={{ color: isActive ? "#FFFFFF" : BRAND.darkTeal }}>
                      {m.name}
                    </span>
                  </button>
                );
              })}
            </div>

            <motion.div key={method.key} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
              <ClinicalImage src={method.image} alt={method.imageAlt} ratio="aspect-[16/10]" />
              <div className="mt-4 flex items-center gap-2">
                <Icon size={17} color={BRAND.gold} />
                <h3 className="text-[15.5px] font-semibold" style={{ color: BRAND.darkTeal }}>{method.name}</h3>
              </div>
              <p className="mt-3 text-[13.5px] leading-relaxed text-neutral-700">{method.body}</p>
            </motion.div>
          </div>
        </div>

        {/* COMPARE TOGGLE */}
        <div id="comparison-table" className="scroll-mt-24 mt-14 border-t pt-10" style={{ borderColor: `${BRAND.teal}14` }}>
          <button
            onClick={() => setShowCompare((v) => !v)}
            className="flex items-center gap-2 rounded-full border px-5 py-2.5 text-[13px] font-semibold"
            style={{ borderColor: `${BRAND.teal}33`, color: BRAND.teal }}
          >
            <ChevronDown size={15} style={{ transform: showCompare ? "rotate(180deg)" : "none", transition: "transform 0.2s" }} />
            {showCompare ? "Hide" : "Compare"} all four methods
          </button>

          {showCompare && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {comparisonTable.rows.map((row) => (
                <div key={row.method} className="rounded-2xl border p-5" style={{ borderColor: `${BRAND.teal}1f`, backgroundColor: BRAND.creamLight }}>
                  <span className="text-[13.5px] font-semibold" style={{ color: BRAND.darkTeal }}>{row.method}</span>
                  <div className="mt-3 space-y-2 text-[12.5px] text-neutral-600">
                    <p><span className="font-medium" style={{ color: BRAND.teal }}>How it works — </span>{row.works}</p>
                    <p><span className="font-medium" style={{ color: BRAND.teal }}>Advantage — </span>{row.advantage}</p>
                    <p><span className="font-medium" style={{ color: BRAND.gold }}>Consider — </span>{row.consideration}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
          <p className="mt-6 text-[13.5px] leading-relaxed text-neutral-500">{comparisonTable.closing}</p>
        </div>
      </div>
    </section>
  );
}

function TheVisit() {
  return (
    <section id="how-assessed" className="scroll-mt-24 px-6 py-20 md:px-10 md:py-24" style={{ backgroundColor: "#FFFFFF", fontFamily: FONT_BODY }}>
      <div className="mx-auto max-w-6xl">
        <span className="text-[11.5px] font-semibold uppercase tracking-[0.16em]" style={{ color: BRAND.gold }}>Clinical Assessment</span>
        <h2 className="mt-2 max-w-3xl text-[1.9rem] font-semibold leading-tight md:text-[2.2rem]" style={{ fontFamily: FONT_DISPLAY, color: BRAND.darkTeal }}>
          {howAssessed.h2}
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-1">
          <div className="space-y-5">
            {howAssessed.steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex items-start gap-4 border-b pb-4"
                style={{ borderColor: `${BRAND.teal}14` }}
              >
                <CheckCircle2 size={18} color={BRAND.teal} className="mt-0.5 flex-none" />
                <div>
                  <span className="text-[14px] font-semibold" style={{ color: BRAND.darkTeal }}>{s.title}</span>
                  <p className="mt-1 text-[13.5px] leading-relaxed text-neutral-600">{s.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* APPOINTMENT FLOW */}
        <div id="what-happens" className="scroll-mt-24 mt-14 border-t pt-14" style={{ borderColor: `${BRAND.teal}14` }}>
          <span className="text-[11.5px] font-semibold uppercase tracking-[0.16em]" style={{ color: BRAND.gold }}>Appointment Flow</span>
          <h3 className="mt-2 text-[1.8rem] font-semibold leading-tight md:text-[2.1rem]" style={{ fontFamily: FONT_DISPLAY, color: BRAND.darkTeal }}>
            {appointmentFlow.h2}
          </h3>
          <p className="mt-4 max-w-3xl text-[14px] leading-[1.9] text-neutral-700">{appointmentFlow.body}</p>
          <div className="mt-6 flex flex-wrap items-center gap-2">
            {appointmentFlow.stages.map((s, i) => (
              <div key={s} className="flex items-center gap-2">
                <SpecimenTag>{s}</SpecimenTag>
                {i < appointmentFlow.stages.length - 1 && <span className="text-neutral-300">→</span>}
              </div>
            ))}
          </div>
        </div>

        {/* IS IT PAINFUL */}
        <div id="is-it-painful" className="scroll-mt-24 mt-14 border-t pt-14" style={{ borderColor: `${BRAND.teal}14` }}>
          <span className="text-[11.5px] font-semibold uppercase tracking-[0.16em]" style={{ color: BRAND.gold }}>Patient Comfort</span>
          <h3 className="mt-2 text-[1.8rem] font-semibold leading-tight md:text-[2.1rem]" style={{ fontFamily: FONT_DISPLAY, color: BRAND.darkTeal }}>
            {isPainful.h2}
          </h3>
          <div className="mt-6 rounded-2xl border p-6 shadow-sm" style={{ borderColor: `${BRAND.teal}1f`, backgroundColor: BRAND.creamLight }}>
            <p className="text-[14px] leading-[1.9] text-neutral-700">{isPainful.body}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
function HealingChart() {
  return (
    <section id="recovery-aftercare" className="scroll-mt-24 px-6 py-20 md:px-10 md:py-24" style={{ backgroundColor: BRAND.creamLight, fontFamily: FONT_BODY }}>
      <div className="mx-auto max-w-6xl">
        <span className="text-[11.5px] font-semibold uppercase tracking-[0.16em]" style={{ color: BRAND.gold }}>Recovery &amp; Care</span>
        <h2 className="mt-2 max-w-3xl text-[1.9rem] font-semibold leading-tight md:text-[2.2rem]" style={{ fontFamily: FONT_DISPLAY, color: BRAND.darkTeal }}>
          {recoveryAftercare.h2}
        </h2>
        <p className="mt-4 max-w-3xl text-[14px] leading-[1.9] text-neutral-700">{recoveryAftercare.intro}</p>

        <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* CHART — temporary effects, stamped */}
          <div className="rounded-[4px] border bg-white p-6" style={{ borderColor: `${BRAND.teal}1f` }}>
            <span className="text-[11px] font-semibold uppercase tracking-[0.1em]" style={{ color: BRAND.gold }}>Temporary Effects</span>
            <div className="mt-3">
              {recoveryAftercare.effects.map((e) => (
                <StampRow key={e} icon={Meh} label={e} />
              ))}
            </div>
          </div>

          {/* CHART — aftercare guidance, stamped */}
          <div className="rounded-[4px] border bg-white p-6" style={{ borderColor: `${BRAND.teal}1f` }}>
            <span className="text-[11px] font-semibold uppercase tracking-[0.1em]" style={{ color: BRAND.gold }}>Aftercare Guidance</span>
            <div className="mt-3">
              {recoveryAftercare.guidance.map((g) => (
                <StampRow key={g} icon={ShieldCheck} label={g} />
              ))}
            </div>
          </div>
        </div>
        <p className="mt-6 max-w-3xl text-[13.5px] leading-[1.9] text-neutral-600">{recoveryAftercare.closing}</p>

        {/* BEFORE/AFTER */}
        <div id="before-after" className="scroll-mt-24 mt-14 border-t pt-14" style={{ borderColor: `${BRAND.teal}18` }}>
          <span className="text-[11.5px] font-semibold uppercase tracking-[0.16em]" style={{ color: BRAND.gold }}>Clinical Results</span>
          <div className="mt-4 grid grid-cols-1 gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
            <ClinicalImage
              src="/images/skin-tag-removal-before-after.jpg"
              alt="Skin tag removal before and after results in Dubai"
              ratio="aspect-[4/3]"
            />
            <div>
              <h3 className="text-[1.8rem] font-semibold leading-tight md:text-[2.1rem]" style={{ fontFamily: FONT_DISPLAY, color: BRAND.darkTeal }}>
                {beforeAndAfterSkinTag.h2}
              </h3>
              <p className="mt-3 text-[13.5px] leading-[1.9] text-neutral-700">{beforeAndAfterSkinTag.body}</p>
            </div>
          </div>
        </div>

        {/* SIDE EFFECTS */}
        <div id="side-effects-risks" className="scroll-mt-24 mt-14 border-t pt-14" style={{ borderColor: `${BRAND.teal}18` }}>
          <span className="text-[11.5px] font-semibold uppercase tracking-[0.16em]" style={{ color: BRAND.gold }}>Safety &amp; Risks</span>
          <h3 className="mt-2 text-[1.8rem] font-semibold leading-tight md:text-[2.1rem]" style={{ fontFamily: FONT_DISPLAY, color: BRAND.darkTeal }}>
            {sideEffectsRisks.h2}
          </h3>
          <p className="mt-3 max-w-3xl text-[13.5px] leading-[1.9] text-neutral-700">{sideEffectsRisks.intro}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {sideEffectsRisks.items.map((it) => (
              <SpecimenTag key={it}>{it}</SpecimenTag>
            ))}
          </div>
          <p className="mt-5 max-w-3xl text-[13px] leading-[1.9] text-neutral-600">{sideEffectsRisks.closing}</p>
        </div>

        {/* GROW BACK */}
        <div id="grow-back" className="scroll-mt-24 mt-14 border-t pt-14" style={{ borderColor: `${BRAND.teal}18` }}>
          <span className="text-[11.5px] font-semibold uppercase tracking-[0.16em]" style={{ color: BRAND.gold }}>Recurrence</span>
          <h3 className="mt-2 text-[1.8rem] font-semibold leading-tight md:text-[2.1rem]" style={{ fontFamily: FONT_DISPLAY, color: BRAND.darkTeal }}>
            {growBack.h2}
          </h3>
          <div className="mt-4 rounded-2xl border p-6 shadow-sm" style={{ borderColor: `${BRAND.teal}1f`, backgroundColor: "#FFFFFF" }}>
            <p className="text-[14px] leading-[1.9] text-neutral-700">{growBack.body}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
function ScopeAndAreas() {
  const [active, setActive] = useState(0);

  return (
    <section id="multiple-tags" className="scroll-mt-24 px-6 py-20 md:px-10 md:py-24" style={{ backgroundColor: "#FFFFFF", fontFamily: FONT_BODY }}>
      <div className="mx-auto max-w-6xl">
        <span className="text-[11.5px] font-semibold uppercase tracking-[0.16em]" style={{ color: BRAND.gold }}>Scope &amp; Treatment Areas</span>
        <h2 className="mt-2 max-w-3xl text-[1.9rem] font-semibold leading-tight md:text-[2.2rem]" style={{ fontFamily: FONT_DISPLAY, color: BRAND.darkTeal }}>
          {multipleTags.h2}
        </h2>
        <p className="mt-4 max-w-3xl text-[14px] leading-[1.9] text-neutral-700">{multipleTags.body}</p>

        <div id="face-neck-eyelids" className="scroll-mt-24 mt-14 border-t pt-14" style={{ borderColor: `${BRAND.teal}14` }}>
          <span className="text-[11.5px] font-semibold uppercase tracking-[0.16em]" style={{ color: BRAND.gold }}>Targeted Areas</span>
          <h3 className="mt-2 text-[1.8rem] font-semibold leading-tight md:text-[2.1rem]" style={{ fontFamily: FONT_DISPLAY, color: BRAND.darkTeal }}>
            {areasCatalog.h2}
          </h3>

          {/* CARD CATALOG */}
          <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-8">
            {/* fanned tab selectors */}
            <div className="flex flex-wrap gap-2 lg:flex-col lg:w-44 flex-none">
              {areasCatalog.cards.map((c, i) => (
                <button
                  key={c.name}
                  onClick={() => setActive(i)}
                  className="rounded-full lg:rounded-[3px] border-l-2 lg:border-l-4 px-4 py-2.5 text-left text-[12.5px] font-semibold transition-all shadow-sm"
                  style={{
                    borderColor: BRAND.gold,
                    backgroundColor: i === active ? BRAND.darkTeal : BRAND.creamLight,
                    color: i === active ? "#FFFFFF" : BRAND.darkTeal,
                  }}
                >
                  {c.name}
                </button>
              ))}
             </div>

             {/* stacked cards */}
              <div className="relative min-h-[210px] w-full max-w-lg flex-1">
              {areasCatalog.cards.map((c, i) => {
                const offset = i - active;
                const isActive = i === active;
                return (
                  <motion.div
                    key={c.name}
                    animate={{
                      rotate: isActive ? 0 : offset * 3,
                      x: isActive ? 0 : offset * 8,
                      y: isActive ? 0 : Math.abs(offset) * 5,
                      scale: isActive ? 1 : 0.95,
                      zIndex: isActive ? 20 : 10 - Math.abs(offset),
                      opacity: isActive ? 1 : 0,
                      pointerEvents: isActive ? "auto" : "none",
                    }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 rounded-2xl md:rounded-[6px] border bg-white p-6 sm:p-7 shadow-[0_16px_36px_rgba(15,59,46,0.12)]"
                    style={{ borderColor: `${BRAND.teal}1f` }}
                    >
                    <div className="flex items-center gap-2">
                      <Pin size={15} color={BRAND.gold} />
                      <span className="font-serif text-[17px] font-semibold" style={{ fontFamily: FONT_DISPLAY, color: BRAND.darkTeal }}>
                        {c.name}
                      </span>
                    </div>
                    <p className="mt-3.5 text-[14px] leading-relaxed text-neutral-700">{c.note}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PracticalMatters() {
  return (
    <section id="cost-in-dubai" className="scroll-mt-24 px-6 py-20 md:px-10 md:py-24" style={{ backgroundColor: BRAND.creamLight, fontFamily: FONT_BODY }}>
      <div className="mx-auto max-w-6xl">
        <span className="text-[11.5px] font-semibold uppercase tracking-[0.16em]" style={{ color: BRAND.gold }}>Pricing &amp; Considerations</span>
        <h2 className="mt-2 max-w-3xl text-[1.9rem] font-semibold leading-tight md:text-[2.2rem]" style={{ fontFamily: FONT_DISPLAY, color: BRAND.darkTeal }}>
          {costInDubaiSkinTag.h2}
        </h2>
        <p className="mt-4 max-w-3xl text-[14px] leading-[1.9] text-neutral-700">{costInDubaiSkinTag.intro}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {costInDubaiSkinTag.factors.map((f) => (
            <SpecimenTag key={f}>{f}</SpecimenTag>
          ))}
        </div>
        <div className="mt-6 max-w-2xl">
          <MarginNote tone="gold">{costInDubaiSkinTag.closing}</MarginNote>
        </div>

        {/* BENEFITS */}
        <div id="benefits" className="scroll-mt-24 mt-14 border-t pt-14" style={{ borderColor: `${BRAND.teal}18` }}>
          <span className="text-[11.5px] font-semibold uppercase tracking-[0.16em]" style={{ color: BRAND.gold }}>Key Advantages</span>
          <h3 className="mt-2 text-[1.8rem] font-semibold leading-tight md:text-[2.1rem]" style={{ fontFamily: FONT_DISPLAY, color: BRAND.darkTeal }}>
            {benefitsSkinTag.h2}
          </h3>
          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {benefitsSkinTag.items.map((b) => (
              <div key={b} className="flex items-start gap-2.5">
                <ThumbsUp size={15} color={BRAND.teal} className="mt-0.5 flex-none" strokeWidth={1.8} />
                <span className="text-[13.5px] leading-snug text-neutral-700">{b}</span>
              </div>
            ))}
          </div>
        </div>

        {/* HOME REMOVAL WARNING */}
        <div id="home-removal" className="scroll-mt-24 mt-14 rounded-[12px] p-8 shadow-md" style={{ backgroundColor: BRAND.darkTeal }}>
          <span className="text-[11.5px] font-semibold uppercase tracking-[0.16em]" style={{ color: BRAND.gold }}>Safety Advisory</span>
          <div className="mt-2 flex items-center gap-2.5">
            <Ban size={20} color={BRAND.gold} />
            <h3 className="text-[1.8rem] font-semibold leading-tight text-white md:text-[2rem]" style={{ fontFamily: FONT_DISPLAY }}>{homeRemoval.h2}</h3>
          </div>
          <p className="mt-4 text-[14px] leading-[1.9] text-white/85">{homeRemoval.intro}</p>
          <div className="mt-5 flex flex-wrap gap-2.5">
            {homeRemoval.avoid.map((a) => (
              <span key={a} className="rounded-[4px] border-l-4 bg-white/[0.08] px-4 py-2.5 text-[13px] font-medium text-white/90" style={{ borderColor: BRAND.gold }}>
                {a}
              </span>
            ))}
          </div>
          <p className="mt-6 text-[13px] leading-[1.9] text-white/70">{homeRemoval.closing}</p>
        </div>

        {/* WHEN TO SEE A DERMATOLOGIST */}
        <div id="when-see-dermatologist" className="scroll-mt-24 mt-14 border-t pt-14" style={{ borderColor: `${BRAND.teal}18` }}>
          <span className="text-[11.5px] font-semibold uppercase tracking-[0.16em]" style={{ color: BRAND.gold }}>Indications</span>
          <h3 className="mt-2 text-[1.8rem] font-semibold leading-tight md:text-[2.1rem]" style={{ fontFamily: FONT_DISPLAY, color: BRAND.darkTeal }}>
            {whenSeeDermatologist.h2}
          </h3>
          <p className="mt-3 text-[14px] leading-[1.9] text-neutral-700">{whenSeeDermatologist.intro}</p>
          <div className="mt-5 space-y-3">
            {whenSeeDermatologist.flags.map((f) => (
              <div key={f} className="flex items-start gap-3">
                <Flag size={15} color={BRAND.gold} className="mt-0.5 flex-none" strokeWidth={1.8} />
                <span className="text-[13.5px] leading-snug text-neutral-700">{f}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 max-w-3xl text-[13.5px] leading-[1.9] text-neutral-600">{whenSeeDermatologist.closing}</p>
        </div>
      </div>
    </section>
  );
}

function WhyRamaCareAndJourney() {
  return (
    <section id="why-ramacare" className="scroll-mt-24 px-6 py-20 md:px-10 md:py-24" style={{ backgroundColor: "#FFFFFF", fontFamily: FONT_BODY }}>
      <div className="mx-auto max-w-6xl">
        <span className="text-[11.5px] font-semibold uppercase tracking-[0.16em]" style={{ color: BRAND.gold }}>Why Choose RamaCare</span>
        <h2 className="mt-2 max-w-3xl text-[1.9rem] font-semibold leading-tight md:text-[2.2rem]" style={{ fontFamily: FONT_DISPLAY, color: BRAND.darkTeal }}>
          {whyRamaCareSkinTag.h2}
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-5">
            {whyRamaCareSkinTag.pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex items-start gap-4 border-b pb-4"
                style={{ borderColor: `${BRAND.teal}14` }}
              >
                <ShieldCheck size={18} color={BRAND.teal} className="mt-0.5 flex-none" />
                <div>
                  <span className="text-[14px] font-semibold" style={{ color: BRAND.darkTeal }}>{p.title}</span>
                  <p className="mt-1 text-[13.5px] leading-relaxed text-neutral-600">{p.body}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <ClinicalImage
            src="/images/skin-tag-removal-aftercare-consultation.jpg"
            alt="Skin tag removal aftercare consultation in Dubai"
            ratio="aspect-[4/5]"
            className="shadow-[0_20px_44px_rgba(15,59,46,0.12)]"
          />
        </div>

        {/* PATIENT JOURNEY */}
        <div id="patient-journey" className="scroll-mt-24 mt-14 border-t pt-14" style={{ borderColor: `${BRAND.teal}18` }}>
          <span className="text-[11.5px] font-semibold uppercase tracking-[0.16em]" style={{ color: BRAND.gold }}>Patient Journey</span>
          <h3 className="mt-2 text-[1.8rem] font-semibold leading-tight md:text-[2.1rem]" style={{ fontFamily: FONT_DISPLAY, color: BRAND.darkTeal }}>
            {patientJourneySkinTag.h2}
          </h3>
          <div className="mt-6 flex flex-wrap items-center gap-2">
            {patientJourneySkinTag.steps.map((s, i) => (
              <div key={s} className="flex items-center gap-2">
                <SpecimenTag>{s}</SpecimenTag>
                {i < patientJourneySkinTag.steps.length - 1 && <span className="text-neutral-300">→</span>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
function FAQsSkinTag() {
  const [active, setActive] = useState(0);

  return (
    <section id="faqs" className="scroll-mt-24 px-6 py-20 md:px-10 md:py-24" style={{ backgroundColor: BRAND.creamLight, fontFamily: FONT_BODY }}>
      <div className="mx-auto max-w-6xl">
        <span className="text-[11.5px] font-semibold uppercase tracking-[0.16em]" style={{ color: BRAND.gold }}>Common Questions</span>
        <h2 className="mt-2 text-[1.9rem] font-semibold leading-tight md:text-[2.2rem]" style={{ fontFamily: FONT_DISPLAY, color: BRAND.darkTeal }}>
          Frequently Asked Questions
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="max-h-[520px] space-y-1.5 overflow-y-auto pr-1 lg:max-h-[560px] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {faqsSkinTag.map((f, i) => {
              const isActive = i === active;
              return (
                <button
                  key={f.q}
                  onClick={() => setActive(i)}
                  className="flex w-full items-center gap-3 rounded-[3px] border-l-4 px-4 py-3 text-left transition-colors"
                  style={{
                    borderColor: BRAND.gold,
                    backgroundColor: isActive ? BRAND.darkTeal : "#FFFFFF",
                  }}
                >
                  <span className="font-serif text-[12px] font-semibold" style={{ fontFamily: FONT_DISPLAY, color: isActive ? BRAND.gold : "#B8895A" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[12.5px] font-medium leading-snug" style={{ color: isActive ? "#FFFFFF" : BRAND.darkTeal }}>
                    {f.q}
                  </span>
                </button>
              );
            })}
          </div>

          <motion.div
            key={active}
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="h-fit rounded-[6px] border bg-white p-7 shadow-[0_16px_36px_rgba(15,59,46,0.08)] lg:sticky lg:top-24"
            style={{ borderColor: `${BRAND.teal}1f` }}>
            <Stethoscope size={18} color={BRAND.gold} />
            <p className="mt-3 font-serif text-[16px] font-semibold leading-snug" style={{ fontFamily: FONT_DISPLAY, color: BRAND.darkTeal }}>
              {faqsSkinTag[active].q}
            </p>
            <p className="mt-3 text-[13.5px] leading-relaxed text-neutral-600">{faqsSkinTag[active].a}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function InternalLinksAndFinalCtaSkinTag() {
  const handleWhatsApp = () => {
    window.open("https://wa.me/971566597878?text=Hello%20RamaCare,%20I'd%20like%20to%20book%20a%20skin%20tag%20assessment.", "_blank");
  };

  return (
    <>
      <section id="internal-links" className="scroll-mt-24 px-6 py-16 md:px-10" style={{ backgroundColor: "#FFFFFF", fontFamily: FONT_BODY }}>
        <div className="mx-auto max-w-6xl">

          <h2 className="mt-2 text-[1.8rem] font-semibold leading-tight md:text-[2.1rem]" style={{ fontFamily: FONT_DISPLAY, color: BRAND.darkTeal }}>
            Related Treatments &amp; Care Guides
          </h2>

          <ul className="mt-8 space-y-3.5">
            {internalLinksSkinTag.map((l, i) => (
              <li key={i} className="flex items-start gap-3 rounded-xl border p-4 shadow-sm transition-all hover:border-[#1F5E4B] hover:bg-[#F9F7F2]" style={{ borderColor: `${BRAND.teal}18` }}>
                <ArrowRight size={16} color={BRAND.teal} className="mt-0.5 flex-none" />
                <p className="text-[14px] leading-relaxed text-neutral-700">
                  {l.prefix}
                  <Link href={l.url} className="font-semibold underline underline-offset-4 transition-colors hover:text-[#D4A574]" style={{ color: BRAND.darkTeal }}>
                    {l.linkText}
                  </Link>
                  {l.suffix}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="final-cta" className="scroll-mt-24 px-6 py-20 md:px-10 md:py-28" style={{ backgroundColor: BRAND.creamLight, fontFamily: FONT_BODY }}>
        <div className="mx-auto grid max-w-7xl grid-cols-1 overflow-hidden rounded-[8px] shadow-[0_24px_60px_rgba(15,59,46,0.14)] lg:grid-cols-2">
          <div className="relative min-h-[280px] lg:min-h-0">
            <ClinicalImage
              src="/images/skin-tag-removal-final-cta-consultation.jpg"
              alt="Book a skin tag removal consultation in Dubai at RamaCare"
              ratio="aspect-square"
              className="h-full min-h-[280px]"
            />
          </div>
          <div className="flex flex-col justify-center p-8 md:p-12" style={{ backgroundColor: BRAND.darkTeal }}>
            <span className="text-[11px] font-semibold uppercase tracking-[0.16em]" style={{ color: BRAND.gold }}>{finalCtaSkinTag.eyebrow}</span>
            <p className="mt-4 text-[14.5px] leading-[1.9] text-white/85">{finalCtaSkinTag.body}</p>
            <p className="mt-3 text-[13px] leading-relaxed text-white/55">{finalCtaSkinTag.sub}</p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/book-appointment/"
                className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-[13px] font-semibold transition-transform hover:-translate-y-0.5"
                style={{ backgroundColor: BRAND.gold, color: BRAND.darkTeal }}
              >
                <ArrowRight size={15} /> Book a Consultation
              </Link>
              <button
                onClick={handleWhatsApp}
                className="inline-flex items-center gap-2 rounded-full border-2 px-7 py-3 text-[13px] font-semibold text-white transition-transform hover:-translate-y-0.5"
                style={{ borderColor: BRAND.gold }}
              >
                WhatsApp Us
              </button>
            </div>
          </div>
        </div>

        {/* CONCLUSION */}
        <div id="conclusion" className="scroll-mt-24 mx-auto mt-14 max-w-3xl">
          <MarginNote tone="teal">{finalCtaSkinTag.conclusion}</MarginNote>
        </div>
      </section>
    </>
  );
}
export default function SkinTagRemovalDubai() {
  return (
    <Layout>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <link rel="canonical" href={`https://ramacarepolyclinic.ae/services${meta.url}`} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:url" content={`https://ramacarepolyclinic.ae/services${meta.url}`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://ramacarepolyclinic.ae/images/skin-tag-removal-consultation-hero.jpg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700;800;900&display=swap" rel="stylesheet" />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalClinicSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalWebPageSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalConditionSchema) }} />
        {medicalProcedureSchemas.map((schema, i) => (
          <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        ))}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      </Head>
      <main>
        <Hero />
        <QuickAnswer />
        <TableOfContents />
        <WhatIsASkinTag />
        <WhatCausesSkinTags />
        <HarmfulAndLocations />
        <WhenAndWhyExamine />
        <TreatmentMethodsHub />
        <TheVisit />
        <HealingChart />
        <ScopeAndAreas />
        <PracticalMatters />
        <WhyRamaCareAndJourney />
        <FAQsSkinTag />
        <InternalLinksAndFinalCtaSkinTag />
        {/* Content Reviewer Badge */}
        <ContentReviewBadge doctorName="Dr. Sahar Zomorrodi" pageSlug="/services/skin-tag-removal-dubai/" />
      </main>
    </Layout>
  );
}