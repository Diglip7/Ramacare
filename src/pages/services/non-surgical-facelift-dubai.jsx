import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Layout from "../../../components/Layout";
import { motion } from "framer-motion";
import {
  ArrowRight,
  MapPin,
  Quote,
  Layers,
  Droplet,
  Sun,
  Moon,
  Wind,
  Bone,
  Waves,
  Sparkle,
  ImageIcon,
  Target,
  Radio,
  Zap,
  XCircle,
  CheckCircle2,
  TrendingUp,
  Aperture,
  GitFork,
  AlertOctagon,
  Scale,
  FileCheck,
  Hourglass,
  ShieldAlert,
  Wallet,
  PlusCircle,
  MinusCircle,
  UserCog,
  ChevronDown,
  ChevronRight,
  Send,
  Phone,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  META                                                               */
/* ------------------------------------------------------------------ */
const meta = {
  title: "Non-Surgical Facelift in Dubai | RamaCare",
  description:
    "Explore Non-Surgical Facelift in Dubai at RamaCare Polyclinic. Personalized facial rejuvenation options for laxity, volume loss & aging. Book a consultation.",
  url: "/services/non-surgical-facelift-dubai",
};

/* ------------------------------------------------------------------ */
/*  SCHEMA RECOMMENDATIONS (JSON-LD)                                   */
/* ------------------------------------------------------------------ */
const medicalClinicSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "name": "RamaCare Polyclinic",
  "url": "https://www.ramacarepolyclinic.com/services/non-surgical-facelift-dubai",
  "image": "https://www.ramacarepolyclinic.com/images/facial-assessment-non-surgical-facelift.jpg",
  "telephone": "+971566597878",
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
    "longitude": "55.2581"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Saturday", "Sunday"],
      "opens": "09:00",
      "closes": "21:00"
    }
  ],
  "medicalSpecialty": "Dermatology",
  "availableService": {
    "@type": "MedicalProcedure",
    "name": "Non-Surgical Facelift"
  },
  "sameAs": [
    "https://www.instagram.com/ramacarepolyclinic",
    "https://www.facebook.com/ramacarepolyclinic"
  ]
};

const medicalWebPageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  "name": "Non-Surgical Facelift in Dubai | RamaCare",
  "description": "Explore Non-Surgical Facelift in Dubai at RamaCare Polyclinic. Personalized facial rejuvenation options for laxity, volume loss & aging. Book a consultation.",
  "url": "https://www.ramacarepolyclinic.com/services/non-surgical-facelift-dubai",
  "specialty": {
    "@type": "MedicalSpecialty",
    "name": "Dermatology"
  },
  "about": {
    "@type": "MedicalProcedure",
    "name": "Non-Surgical Facelift",
    "alternateName": ["Facelift Without Surgery", "Non-Invasive Facial Rejuvenation"],
    "procedureType": "https://schema.org/NoninvasiveProcedure"
  },
  "publisher": {
    "@type": "MedicalOrganization",
    "name": "RamaCare Polyclinic"
  }
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.ramacarepolyclinic.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Facial Aesthetics",
      "item": "https://www.ramacarepolyclinic.com/services"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Non-Surgical Facelift in Dubai",
      "item": "https://www.ramacarepolyclinic.com/services/non-surgical-facelift-dubai"
    }
  ]
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "RamaCare Polyclinic",
  "url": "https://www.ramacarepolyclinic.com/",
  "logo": "https://www.ramacarepolyclinic.com/images/ramacare-logo.png",
  "telephone": "+971566597878",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Jumeirah 1",
    "addressLocality": "Jumeirah 1",
    "addressRegion": "Dubai",
    "addressCountry": "AE"
  },
  "sameAs": [
    "https://www.instagram.com/ramacarepolyclinic",
    "https://www.facebook.com/ramacarepolyclinic"
  ]
};

/* ------------------------------------------------------------------ */
/*  CONTENT — verbatim                                                 */
/* ------------------------------------------------------------------ */
const hero = {
  eyebrow: "Dubai · Facial Assessment & Rejuvenation",
  h1: "Non-Surgical Facelift in Dubai",
  intro: [
    "When people search for a Non-Surgical Facelift in Dubai, they're usually not looking for one specific procedure — they're looking for options. Maybe you've noticed your skin doesn't sit quite as firmly along the jawline as it used to. Maybe fine lines have settled in around the mouth, or your cheeks look a little flatter than they once did. These are common, entirely normal signs of facial aging, and they don't always require surgery to address.",
    "The term \u201cnon-surgical facelift\u201d is used broadly across the aesthetics industry to describe a range of non-invasive and minimally invasive treatments aimed at improving selected signs of facial aging without an operating theatre or general anesthesia. There is no single treatment that fits every face, because no two faces age in exactly the same way. Skin quality, bone structure, degree of laxity, and personal goals all differ from patient to patient.",
    "At RamaCare Polyclinic in Dubai, this is why treatment planning always begins with a proper facial assessment rather than a fixed package. A non-surgical approach can be a meaningful option for people with mild-to-moderate concerns, but it is genuinely different from surgical facelift surgery, and setting realistic expectations from the outset is part of responsible care.",
  ],
};
const quickAnswer = {
  label: "Quick Answer: What Is a Non-Surgical Facelift?",
  heading: "What Is a Non-Surgical Facelift?",
  body:
    "A non-surgical facelift is a general term for a group of aesthetic treatments designed to improve selected signs of facial aging without traditional facelift surgery. Rather than one fixed procedure, it typically refers to a personalized combination of approaches — which may include skin tightening, volume restoration, wrinkle-softening injectables, or collagen-stimulating treatments — chosen according to the patient's specific concerns. The goal is generally to improve skin firmness, restore some facial balance, and refresh overall appearance, while working within the natural limits of non-surgical technology. Results and suitability vary from person to person, which is why a professional facial assessment is an essential first step before any treatment plan is recommended.",
};

const whatIsNonSurgicalFacelift = {
  h2: "What Is a Non-Surgical Facelift?",
  paragraphs: [
    "A non-surgical facelift isn't a single medical procedure with a fixed protocol — it's an umbrella term the aesthetics field uses to describe treatments that aim to address selected signs of facial aging without cutting, stitching, or general anesthesia. When someone searches for a Non-Surgical Facelift Dubai, they're often really asking: “What can be done about sagging skin, lost volume, or fine lines that doesn't involve going under the knife?”",
    "Depending on individual concerns, a non-surgical treatment plan may draw from several categories: energy-based skin tightening, dermal fillers, botulinum toxin, skin boosters, and other collagen-stimulating approaches. These work through different mechanisms — some restore lost volume, some reduce muscle activity that creates dynamic wrinkles, and others encourage the skin to gradually rebuild its own collagen. None of them physically remove excess skin the way a scalpel can, which is an important distinction to understand from the start.",
  ],
  mechanisms: [
    "Energy-Based Skin Tightening",
    "Dermal Fillers",
    "Botulinum Toxin",
    "Skin Boosters",
    "Collagen-Stimulating Treatments",
  ],
};

const whatCausesFacialAging = {
  h2: "What Causes Facial Aging?",
  intro:
    "Facial aging is a three-dimensional process, which is precisely why no single treatment addresses every aspect of it. Several changes typically happen together over time:",
  layers: [
    {
      label: "Collagen & Elastin Loss",
      icon: Droplet,
      factors: [
        "Declining collagen production — skin gradually loses the structural protein that keeps it firm",
        "Changes in elastin — the fibers responsible for skin's ability to stretch and recoil become less efficient",
        "Skin thinning — the outer layers become more fragile and less resilient",
        "Reduced skin elasticity — skin takes longer to \"bounce back\" after movement",
      ],
    },
    {
      label: "Volume & Redistribution",
      icon: Layers,
      factors: [
        "Facial volume changes — fat compartments in the cheeks and midface can shrink or shift",
        "Fat redistribution — volume that once sat higher on the face can settle lower",
      ],
    },
    {
      label: "Bone Structure",
      icon: Bone,
      factors: [
        "Bone remodeling — the underlying facial skeleton subtly changes shape with age",
      ],
    },
    {
      label: "Movement & Lifestyle",
      icon: Sun,
      factors: [
        "Repeated facial movement — expressions performed thousands of times create dynamic lines that can become etched at rest",
        "Sun exposure — cumulative UV damage accelerates collagen and elastin breakdown",
        "Lifestyle factors — smoking, hydration, sleep, and nutrition all play a role",
      ],
    },
  ],
  closing:
    "Because collagen loss, volume changes, bone remodeling, and skin laxity often occur simultaneously, a treatment that only targets one of these — say, wrinkle-softening injectables — may not fully address someone whose main concern is volume loss or jawline definition. This is exactly why facial assessment matters before any treatment recommendation is made.",
};

const whoMayConsider = {
  h2: "Who May Consider Non-Surgical Facial Rejuvenation?",
  intro: "Non-surgical facial rejuvenation is generally considered by patients concerned about:",
  concerns: [
    "Mild-to-moderate skin laxity",
    "Fine lines and early wrinkles",
    "Loss of cheek volume",
    "Reduced jawline definition",
    "Nasolabial folds or marionette lines",
    "Dull or uneven skin texture",
  ],
  factorsIntro: "Whether it's an appropriate path — and which combination of treatments might help — depends on several individual factors:",
  factors: [
    "Age and skin quality",
    "Facial anatomy and bone structure",
    "Degree of skin laxity",
    "Medical history",
    "Any previous aesthetic procedures",
    "What the patient actually hopes to achieve",
  ],
  closing:
    "Two patients with similar concerns can have very different treatment needs once these factors are considered, which is why generic “one-size-fits-all” facelift packages are generally discouraged in responsible aesthetic practice.",
};

const treatmentOptionsMap = {
  h2: "Non-Surgical Facelift Treatment Options in Dubai",
  intro:
    "There is no single treatment called a “non-surgical facelift.” Instead, different concerns are typically matched with different treatment categories:",
  rows: [
    { concern: "Mild skin laxity", approach: "Energy-based skin tightening" },
    { concern: "Loss of facial volume", approach: "Dermal fillers, where appropriate" },
    { concern: "Dynamic wrinkles", approach: "Botulinum toxin" },
    { concern: "Poor skin hydration or quality", approach: "Skin boosters or selected rejuvenation treatments" },
    { concern: "Fine lines and texture", approach: "Appropriate collagen-stimulating approaches" },
    { concern: "Reduced facial definition", approach: "Combination planning where clinically appropriate" },
  ],
  closing:
    "The right combination — if any combination is appropriate at all — can only be determined after a proper facial assessment. Some patients may only need one treatment category; others may benefit from a phased plan across several visits.",
};

const skinTightening = {
  h2: "Non-Surgical Skin Tightening for the Face",
  paragraphs: [
    "Energy-based skin tightening covers a category of technologies that use controlled heat or acoustic energy to stimulate the skin's own collagen-remodeling process. Depending on what's clinically available and appropriate, this may include:",
    "These approaches generally work by gently heating deeper skin layers to encourage the body to produce new collagen over subsequent weeks. The result, when appropriate, is typically a gradual improvement in skin firmness rather than an immediate, dramatic change. It's important to understand that energy-based devices do not physically reproduce the mechanical lift that surgery achieves by repositioning tissue — they work with the skin's biological response, which is inherently more subtle and takes time to develop.",
  ],
  techniques: ["Radiofrequency-based devices", "Ultrasound-based treatments", "Other energy-based modalities"],
  correction: "It's important to understand that energy-based devices do not physically reproduce the mechanical lift that surgery achieves by repositioning tissue — they work with the skin's biological response, which is inherently more subtle and takes time to develop.",
  icon: Radio,
  imageLabel: "Non-surgical skin tightening treatment in Dubai",
  image: "/images/non-surgical-skin-tightening-treatment.jpg",
  imageAlt: "non-surgical facial skin tightening treatment Dubai",
};

const dermalFillers = {
  h2: "Can Dermal Fillers Be Part of a Non-Surgical Facelift?",
  paragraphs: [
    "Dermal fillers can restore selected areas of lost facial volume, which may, in turn, improve overall facial contours and soften the appearance of certain folds — such as nasolabial folds or marionette lines. Filler may be considered for areas such as the cheeks, midface, chin, or jawline, depending on the assessment.",
    "It's worth being clear about what fillers can and cannot do: they add volume to specific points, but they do not literally lift or tighten loose skin across the face. Product selection, technique, and placement matter considerably, and a conservative, anatomy-based approach is generally favored over aggressive volumizing. More filler is not automatically a better result — in fact, over-filling can create an unnatural appearance, which is why treatment planning should always be individualized.",
  ],
  techniques: ["Cheeks", "Midface", "Chin", "Jawline"],
  correction: "Fillers add volume to specific points, but they do not literally lift or tighten loose skin across the face. More filler is not automatically a better result — in fact, over-filling can create an unnatural appearance, which is why treatment planning should always be individualized.",
  icon: Droplet,
  imageLabel: "Dermal filler facial rejuvenation treatment in Dubai",
  image: "/images/dermal-filler-facial-rejuvenation-treatment.jpg",
  imageAlt: "dermal filler facial rejuvenation treatment in Dubai",
};

const botoxSection = {
  h2: "Can Botox Be Used for Facial Rejuvenation?",
  paragraphs: [
    "Botulinum toxin (commonly known by the brand name Botox) works by temporarily reducing the activity of specific facial muscles. It's typically used for dynamic wrinkles — lines that appear with movement, such as forehead lines, frown lines between the brows, and crow's feet around the eyes.",
    "It's important to understand that botulinum toxin addresses muscle movement, not skin laxity or volume. It is not a skin-tightening treatment, and it does not create the effect of a surgical facelift. For patients whose primary concern is sagging skin or lost volume rather than expression lines, other treatment categories are usually more relevant.",
  ],
  techniques: ["Forehead lines", "Frown lines between the brows", "Crow's feet"],
  correction: "It addresses muscle movement, not skin laxity or volume. It is not a skin-tightening treatment, and it does not create the effect of a surgical facelift. For patients whose primary concern is sagging skin or lost volume rather than expression lines, other treatment categories are usually more relevant.",
  icon: Zap,
  imageLabel: "Facial rejuvenation consultation with aesthetic practitioner Dubai",
  image: "/images/facial-rejuvenation-consultation-practitioner.jpg",
  imageAlt: "facial rejuvenation consultation with aesthetic practitioner Dubai",
};

const collagenStimulating = {
  h2: "Treatments That Support Collagen Stimulation",
  intro:
    "Several treatment categories work, at least in part, by encouraging the skin to produce more of its own collagen over time — including certain skin boosters and selected energy-based or micro-injury treatments where clinically appropriate. A few points are worth understanding about this category:",
  points: [
    "Collagen changes happen gradually, not overnight",
    "Results vary from person to person based on skin quality, age, and lifestyle",
    "Multiple sessions are sometimes recommended to build a cumulative effect",
    "Younger, healthier skin often responds differently than more mature, sun-damaged skin",
  ],
  closing: "No treatment can promise a specific, measurable increase in collagen — what's realistic is a gradual improvement in skin quality and firmness over subsequent weeks or months.",
};

const realisticExpectations = {
  h2: "Non-Surgical Facelift in Dubai: What Results Can You Realistically Expect?",
  intro:
    "This is one of the most important questions to answer honestly. A Non-Surgical Facelift in Dubai — whatever combination of treatments it involves — generally aims to produce:",
  outcomes: [
    "Improved skin firmness in treated areas",
    "Subtle enhancement of facial contours",
    "A softer appearance of certain lines and folds",
    "Better balance of facial volume",
    "Improved skin quality, depending on the treatment used",
  ],
  closing:
    "The aim is often to create a refreshed and proportionate appearance rather than dramatically change the face. Results from non-surgical treatments are generally more subtle and gradual than what surgical facelift procedures can achieve, because non-surgical methods work with the skin's existing structure rather than repositioning or removing tissue. Patients who understand this distinction going in tend to be far more satisfied with their outcomes.",
};

const beforeAndAfter = {
  h2: "Non-Surgical Facelift Before and After",
  intro: "Before-and-after photographs can be a useful reference, but they need to be interpreted carefully. Several factors can influence how dramatic — or subtle — a result appears in a photo, including:",
  variables: [
    "Lighting conditions",
    "Camera angle",
    "Facial expression at the moment of capture",
    "Makeup",
    "Skin hydration on the day",
    "Whether multiple treatments were combined",
    "The amount of time that passed between photographs",
  ],
  closing:
    "For photographs to be genuinely useful for comparison, they should ideally be taken under similar lighting, from the same angle and distance, with a similar facial expression, and with minimal digital editing. Even then, it's important to remember that before-and-after images demonstrate one individual's result — they are not a guarantee of what another patient will experience, since every face responds differently to treatment.",
  imageLabel: "non-surgical facelift before and after results Dubai",
  image: "/images/non-surgical-facelift-before-and-after-results.jpg",
  imageAlt: "non-surgical facelift before and after results Dubai",
};

const nonSurgicalVsSurgical = {
  h2: "Non-Surgical Facelift vs Surgical Facelift",
  rows: [
    { factor: "Surgery", nonSurgical: "No traditional surgery", surgical: "Surgical procedure under anesthesia" },
    { factor: "Incisions", nonSurgical: "Generally none for non-invasive treatments; injectables use needles or cannulas", surgical: "Surgical incisions" },
    { factor: "Downtime", nonSurgical: "Often limited, depending on the treatment", surgical: "Typically more significant" },
    { factor: "Results", nonSurgical: "Usually more subtle", surgical: "More substantial, structural lifting" },
    { factor: "Skin Laxity", nonSurgical: "Best suited to selected mild-to-moderate concerns", surgical: "Can address more significant laxity" },
    { factor: "Maintenance", nonSurgical: "Often required at intervals", surgical: "Results are longer-lasting, though aging continues afterward" },
    { factor: "Suitability", nonSurgical: "Depends on the specific concern and treatment", surgical: "Requires surgical consultation and assessment" },
  ],
  closing:
    "Neither option is automatically “better” — they serve different needs. A Facelift Without Surgery Dubai search often reflects a genuine preference to avoid an operation, and for many patients with mild-to-moderate concerns, that preference can be reasonably accommodated. However, patients with significant skin laxity or more advanced facial aging may find that non-surgical treatments offer only limited improvement, and a surgical consultation may be more appropriate for their goals. Being upfront about this distinction is part of responsible patient care.",
};

const whyAssessmentMatters = {
  h2: "Why Facial Assessment Matters Before Treatment",
  intro: "A proper facial assessment goes well beyond looking at one line or one area of volume loss. An experienced practitioner will typically evaluate:",
  points: [
    "Overall skin quality and texture",
    "Facial proportions and symmetry",
    "Areas of volume loss",
    "Degree and location of skin laxity",
    "Patterns of dynamic wrinkling",
    "Jawline, cheek, and chin structure",
    "Previous aesthetic treatments",
    "Medical history, allergies, and current medications",
    "What the patient is hoping to achieve",
  ],
  example:
    "Treating a single area in isolation — without considering how it relates to the rest of the face — can sometimes create an unbalanced result. For example, adding volume to the cheeks without considering the jawline or lower face can shift facial proportions in an unintended way. This is why treatment planning at RamaCare starts with a full facial evaluation rather than a single-area quick fix.",
};

const consultationSteps = {
  h2: "What Happens During a Non-Surgical Facial Rejuvenation Consultation?",
  steps: [
    { title: "Step 1 — Consultation", body: "Your concerns and aesthetic goals are discussed in detail." },
    { title: "Step 2 — Facial Assessment", body: "Skin quality, volume, muscle movement, and laxity are evaluated." },
    { title: "Step 3 — Treatment Discussion", body: "Suitable treatment options are explained, along with the reasoning behind them." },
    { title: "Step 4 — Risk and Benefit Discussion", body: "Expected results, limitations, possible side effects, recovery, and maintenance requirements are covered honestly." },
    { title: "Step 5 — Treatment", body: "Treatment proceeds only when it's clinically appropriate and informed consent has been obtained." },
    { title: "Step 6 — Aftercare", body: "Individualized aftercare instructions are provided based on the specific treatment performed." },
    { title: "Step 7 — Follow-Up", body: "Response to treatment is reviewed where appropriate, and further sessions are discussed if needed." },
  ],
};

const resultsAndRecovery = {
  h2: "When Will You See Results?",
  timelineIntro: "Timelines vary considerably depending on which treatment (or combination of treatments) is used:",
  timeline: [
    { label: "Dermal Fillers", body: "Some injectable treatments, such as dermal fillers, can create a visible change relatively soon after treatment, although temporary swelling may affect how the result looks in the first few days." },
    { label: "Botulinum Toxin", body: "Botulinum toxin typically takes several days to begin working, with its full effect usually visible around one to two weeks later." },
    { label: "Collagen-Stimulating & Energy-Based", body: "Collagen-stimulating and energy-based treatments tend to produce gradual changes that build over several weeks to months, as the skin's own remodeling process takes effect." },
    { label: "Combined Treatments", body: "When multiple treatments are combined, each component may follow its own separate timeline." },
  ],
  timelineClosing: "No treatment can guarantee an exact result by an exact date — individual biology plays a significant role in how quickly, and how visibly, results appear.",
  recoveryH2: "Recovery After a Non-Surgical Facelift",
  recoveryIntro: "Downtime depends entirely on which treatment was performed. Some patients return to normal activities the same day; others may notice temporary effects for several days. Possible temporary effects can include:",
  recoveryEffects: ["Redness", "Swelling", "Tenderness", "Bruising", "Sensitivity", "A feeling of tightness", "Temporary irritation"],
  recoveryClosing: "Following your practitioner's specific aftercare instructions — which may include guidance on sun exposure, skincare products, or activity restrictions — plays an important role in how smoothly recovery goes.",
};

const risksAndSideEffects = {
  h2: "Non-Surgical Facelift Risks and Side Effects",
  intro: "Risk profiles vary considerably by treatment type, and it's important not to underestimate them just because a procedure is non-surgical.",
  injectable: {
    label: "For injectable treatments (fillers, botulinum toxin):",
    sub: "Possible effects can include:",
    items: ["Bruising", "Swelling", "Redness", "Tenderness at the injection site", "Asymmetry", "Infection", "Lumps or irregularities under the skin"],
  },
  energyBased: {
    label: "For energy-based treatments:",
    sub: "Possible effects can include:",
    items: ["Temporary redness", "Sensitivity", "Swelling", "Skin irritation"],
  },
  closing: "Injectable procedures in particular carry uncommon but potentially serious complications, which is why they should only ever be performed by appropriately qualified and experienced professionals in a proper clinical setting. Choosing a provider based on price alone, without regard to qualifications, is not advisable.",
};

const longevityAndCost = {
  longevity: {
    h2: "How Long Do Non-Surgical Facelift Results Last?",
    intro: "There is no single, universal answer to how long results last — it genuinely depends on several factors:",
    factors: [
      "The specific treatment or product used",
      "The area treated",
      "Skin condition and starting point",
      "Individual metabolism",
      "Lifestyle factors, including sun exposure and smoking",
      "The natural aging process, which continues regardless of treatment",
      "Whether a maintenance plan is followed",
    ],
    closing: "It's important to understand that non-surgical facial rejuvenation generally does not stop the aging process — it addresses selected signs of aging for a period of time, after which further treatment or maintenance sessions may be considered if the patient wishes to sustain the result.",
  },
  cost: {
    h2: "Non-Surgical Facelift Cost in Dubai",
    intro: "We won't invent a fixed number here, because an honest answer is that cost genuinely depends on the individual treatment plan. Several factors typically influence pricing for a Non-Surgical Facelift Cost Dubai inquiry:",
    factors: [
      "Which treatment or combination of treatments is selected",
      "The number of facial areas being treated",
      "The quantity of product used, for injectable treatments",
      "The specific technology used, for energy-based treatments",
      "The number of sessions required",
      "The complexity of the assessment and planning involved",
      "Whether combination treatments are recommended",
      "Any follow-up sessions built into the plan",
    ],
    closing: "A consultation is genuinely the best way to receive an accurate, personalized quotation, because pricing without an assessment would simply be a guess. We'd also encourage patients not to choose a clinic or treatment based solely on the lowest advertised price — qualifications, safety standards, and the quality of the assessment matter far more to your outcome than the number on a price list.",
  },
};

const benefitsAndCannotDo = {
  h2: "Potential Benefits & What a Non-Surgical Facelift Cannot Do",
  benefitsH2: "Potential Benefits of Non-Surgical Facial Rejuvenation",
  benefitsIntro: "For appropriately selected patients, potential benefits may include:",
  benefits: [
    "No traditional facelift surgery or general anesthesia",
    "Potentially limited downtime, depending on the specific procedure",
    "Targeted treatment of specific concerns rather than a blanket approach",
    "Gradual or more immediate improvements depending on the modality chosen",
    "Ability to address multiple aging concerns through a combined plan",
    "Personalized treatment planning based on individual anatomy",
    "Potentially natural-looking enhancement when treatment is conservative and well-planned",
  ],
  cannotDoH2: "What a Non-Surgical Facelift Cannot Do",
  cannotDoIntro: "Setting realistic expectations is one of the most important parts of this page, and one of the most important parts of any consultation. A non-surgical approach:",
  cannotDo: [
    "Does not reproduce every effect of surgical facelift surgery",
    "Cannot remove significant amounts of excess or sagging skin",
    "Cannot stop the natural aging process",
    "Does not guarantee permanent results",
    "May be insufficient for patients with significant skin laxity, who may need a surgical consultation instead",
    "Does not mean every wrinkle or fold will respond to the same treatment",
    "Is not improved by simply adding “more” treatment — over-treatment can create an unnatural result rather than a better one",
  ],
};

const additionalAssessment = {
  h2: "Who May Need Additional Assessment Before Treatment?",
  intro: "Suitability for non-surgical facial treatments may need special consideration for people with:",
  items: [
    "Certain underlying medical conditions",
    "Active skin infections in the treatment area",
    "Significant inflammation",
    "Certain known allergies",
    "Pregnancy or breastfeeding, depending on the specific treatment",
    "Previous facial implants or fillers from other providers",
    "Certain medications, including blood thinners",
    "Bleeding or clotting concerns",
  ],
  closing: "This is not an exhaustive list, and it isn't intended as medical advice — it's a reminder that your practitioner needs a full and honest medical history before recommending or performing any treatment.",
};

const whyRamaCare = {
  h2: "Why Choose RamaCare Polyclinic for Facial Rejuvenation?",
  pillars: [
    { title: "Professional Assessment.", body: "Every treatment plan at RamaCare begins with genuinely understanding your concerns, skin quality, and facial anatomy — not a pre-set package." },
    { title: "Personalized Treatment Plans.", body: "We avoid one-size-fits-all facelift bundles. Your plan reflects your specific face, not a generic template." },
    { title: "Patient Education.", body: "You'll be walked through the realistic benefits, limitations, recovery expectations, risks, and maintenance needs of any recommended treatment before you decide anything." },
    { title: "Multidisciplinary Care.", body: "As a polyclinic, RamaCare offers the advantage of a broader healthcare environment where relevant, supporting a more complete view of patient wellbeing where appropriate." },
    { title: "Dubai Location.", body: "RamaCare Polyclinic is based in Jumeirah 1, Dubai, making facial rejuvenation consultations accessible for patients across the city searching for Non-Surgical Facelift Near Me." },
  ],
};

const patientJourney = {
  h2: "Patient Journey",
  steps: [
    "Book Consultation",
    "Facial Assessment",
    "Discuss Concerns & Goals",
    "Treatment Suitability Review",
    "Personalized Treatment Plan",
    "Non-Surgical Treatment",
    "Aftercare",
    "Progress Review",
    "Maintenance, If Appropriate",
  ],
};

const faqs = [
  {
    q: "What is a non-surgical facelift?",
    a: "It's a general term for aesthetic treatments — such as skin tightening, dermal fillers, botulinum toxin, or collagen-stimulating treatments — used to address selected signs of facial aging without surgery. The specific combination depends on individual assessment.",
  },
  {
    q: "Is a non-surgical facelift the same as a surgical facelift?",
    a: "No. A Non-Surgical Facelift in Dubai works with the skin's existing structure and generally produces more subtle, gradual results, while surgical facelift surgery physically repositions tissue and can address more significant laxity.",
  },
  {
    q: "Who is suitable for non-surgical facial rejuvenation?",
    a: "Patients with mild-to-moderate skin laxity, fine lines, or volume loss are often reasonable candidates, though suitability depends on individual anatomy, skin quality, and medical history, which is why an assessment is necessary.",
  },
  {
    q: "Can a non-surgical facelift tighten loose skin?",
    a: "Certain energy-based treatments can encourage gradual collagen remodeling, which may improve mild skin firmness over time. However, they cannot remove significant excess skin the way surgery can.",
  },
  {
    q: "Can fillers create a facelift effect?",
    a: "Dermal fillers can restore volume and improve facial contours in specific areas, which may create a refreshed appearance. They do not lift loose skin across the whole face.",
  },
  {
    q: "Can Botox lift the face?",
    a: "Botulinum toxin reduces the activity of specific muscles to soften dynamic wrinkles. It does not tighten skin or create a structural lifting effect.",
  },
  {
    q: "What treatments are used for facial skin tightening?",
    a: "Depending on clinical appropriateness, options may include radiofrequency-based devices, ultrasound-based treatments, or other energy-based modalities, typically discussed in detail during assessment.",
  },
  {
    q: "How long do non-surgical facelift results last?",
    a: "Duration varies by treatment type, product, area treated, and individual factors like metabolism and lifestyle. There's no single universal timeframe, and most approaches require some form of maintenance.",
  },
  {
    q: "Is a non-surgical facelift painful?",
    a: "Sensations vary by treatment. Some patients experience mild discomfort, tenderness, or pressure during injectable or energy-based treatments; numbing options may be used depending on the procedure.",
  },
  {
    q: "What is the recovery time?",
    a: "Recovery depends entirely on the treatment performed. Some patients resume normal activities immediately, while others may notice temporary redness, swelling, or tenderness for a few days.",
  },
  {
    q: "Are there side effects?",
    a: "Yes, and they vary by treatment. Injectables can cause bruising, swelling, or asymmetry; energy-based treatments can cause temporary redness or sensitivity. Your practitioner will explain the specific risks for your plan.",
  },
  {
    q: "What does a non-surgical facelift cost in Dubai?",
    a: "Cost depends on the treatment selected, number of areas treated, product quantities, and number of sessions. An accurate quotation requires a consultation and assessment.",
  },
  {
    q: "Can I return to work after treatment?",
    a: "Many patients return to normal activities the same day or within a day or two, depending on the treatment used. Your practitioner will give you specific guidance based on your plan.",
  },
  {
    q: "Can non-surgical treatments address jawline definition?",
    a: "In some cases, dermal fillers or skin-tightening treatments may help improve the appearance of jawline definition, depending on the underlying cause of the concern and the results of your assessment.",
  },
  {
    q: "What happens during the consultation?",
    a: "Your concerns and goals are discussed, followed by a facial assessment covering skin quality, volume, and laxity. Suitable options, along with their risks and realistic outcomes, are explained before any decision is made.",
  },
  {
    q: "Can different treatments be combined?",
    a: "Yes, when clinically appropriate, treatments such as skin tightening, fillers, and botulinum toxin can sometimes be combined as part of a broader plan, based on individual assessment.",
  },
  {
    q: "Will the result look natural?",
    a: "A conservative, well-planned approach is generally aimed at a natural, proportionate appearance rather than a dramatic change. Over-treatment can work against this goal.",
  },
  {
    q: "Is a non-surgical facelift suitable for older patients?",
    a: "It can be, but suitability depends on the degree of skin laxity and volume loss rather than age alone. Patients with more advanced facial aging may be advised to consider a surgical consultation instead.",
  },
  {
    q: "When might surgery be more appropriate?",
    a: "Surgery may be more suitable for patients with significant skin laxity, substantial excess skin, or facial aging that non-surgical treatments are unlikely to meaningfully address. This is assessed on an individual basis.",
  },
  {
    q: "How do I book a consultation at RamaCare?",
    a: "You can book a consultation by calling RamaCare Polyclinic, messaging via WhatsApp, or using the online booking option to schedule a facial assessment with our team.",
  },
];

const internalLinks = [
  { label: "Skin Tightening Dubai", href: "/services/skin-tightening-dubai" },
  { label: "Botox in Dubai", href: "/services/botox-dubai" },
  { label: "Dermal Fillers Dubai", href: "/services/fillers-in-dubai" },
  { label: "RF Microneedling Dubai", href: "/services/rf-microneedling-dubai" },
  { label: "Microneedling Dubai", href: "/services/microneedling-skin-renewal-dubai" },
  { label: "Under-Eye Treatment Dubai", href: "/services/under-eye-treatment-dubai" },
  { label: "Chemical Peel Treatment Dubai", href: "/services/chemical-peel-treatment-dubai" },
];

const finalCta = {
  eyebrow: "Ready to Explore Your Facial Rejuvenation Options?",
  body: "If you've been considering a Non-Surgical Facelift in Dubai, the most useful next step is a proper facial assessment rather than guessing which treatment might help. Our team can walk you through what's realistic for your skin, your concerns, and your goals — honestly, without overselling.",
  sub: "There's no pressure — just a clear, personalized plan built around your face. We're located in Jumeirah 1, Dubai.",
  conclusion: "A non-surgical facelift isn't one treatment — it's a personalized combination drawn from categories like skin tightening, dermal fillers, botulinum toxin, and collagen-stimulating treatments, each chosen to address specific signs of facial aging. What works well for one patient may not suit another, because facial anatomy, skin quality, and goals differ from person to person. A Non-Surgical Facelift in Dubai can be a meaningful option for the right patient, but only after a genuine professional assessment and an honest conversation about what's achievable.",
};
/* ------------------------------------------------------------------ */
/*  TABLE OF CONTENTS — full outline, grouped; only `live: true` items */
/*  have a built section so far.                                       */
/* ------------------------------------------------------------------ */
const TOC_GROUPS = [
  {
    category: "Understanding Aging",
    items: [
      { id: "what-is-a-non-surgical-facelift", label: "What Is a Non-Surgical Facelift?", live: true },
      { id: "what-causes-facial-aging", label: "What Causes Facial Aging?", live: true },
      { id: "who-may-consider", label: "Who May Consider Non-Surgical Facial Rejuvenation?", live: true },
    ],
  },
  {
    category: "Treatment Options",
    items: [
      { id: "treatment-options", label: "Non-Surgical Facelift Treatment Options", live: true },
      { id: "skin-tightening", label: "Skin Tightening Treatments", live: true },
      { id: "dermal-fillers", label: "Dermal Fillers and Facial Volume", live: true },
      { id: "botox-dynamic-wrinkles", label: "Botox and Dynamic Wrinkles", live: true },
      { id: "collagen-stimulating", label: "Collagen-Stimulating Treatments", live: true },
    ],
  },
  {
    category: "Making the Decision",
    items: [
      { id: "non-surgical-vs-surgical", label: "Non-Surgical Facelift vs Surgical Facelift", live: true },
      { id: "treatment-assessment", label: "Treatment Assessment at RamaCare", live: true },
    ],
  },
  {
    category: "The Experience",
    items: [
      { id: "what-happens-during-treatment", label: "What Happens During Treatment?", live: true },
      { id: "results-and-expectations", label: "Results and Expectations", live: true },
      { id: "before-and-after", label: "Before and After", live: true },
      { id: "recovery-and-aftercare", label: "Recovery and Aftercare", live: true },
      { id: "risks-and-side-effects", label: "Risks and Side Effects", live: true },
      { id: "how-long-results-last", label: "How Long Do Results Last?", live: true },
    ],
  },
  {
    category: "Practical & Booking",
    items: [
      { id: "cost-in-dubai", label: "Non-Surgical Facelift Cost in Dubai", live: true },
      { id: "why-ramacare", label: "Why Choose RamaCare?", live: true },
      { id: "patient-journey", label: "Patient Journey", live: true },
      { id: "faqs", label: "FAQs", live: true },
      { id: "book-consultation", label: "Book a Consultation", live: true },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  BRAND TOKENS — Harmonized with RamaCare System                    */
/* ------------------------------------------------------------------ */
const BRAND = {
  teal: "#2B7E67",
  darkTeal: "#1F5E4B",
  gold: "#D4A574",
  goldLight: "#E8CFA6",
  cream: "#F5F1E8",
  creamLight: "#F9F7F2",
  ink: "#1F5E4B",
  stone: "#F9F7F2",
  stoneDeep: "#F5F1E8",
  graphite: "#1F5E4B",
  clay: "#D4A574",
  claySoft: "#E8CFA6",
  sage: "#2B7E67",
};

const FONT_DISPLAY = "'Nunito Sans', sans-serif";
const FONT_BODY = "'Nunito Sans', sans-serif";

/* ------------------------------------------------------------------ */
/*  SIGNATURE VISUAL — "The Structural Map": a minimal line-drawn face */
/*  outline with marker points at jaw, cheek, and brow. Reused as the  */
/*  page's one recurring motif.                                        */
/* ------------------------------------------------------------------ */
function StructuralMap({ size = 240, tone = "light" }) {
  const stroke = tone === "light" ? `${BRAND.claySoft}` : `${BRAND.stone}55`;
  const dot = tone === "light" ? BRAND.clay : BRAND.stone;

  const markers = [
    { cx: 78, cy: 92, delay: 0 }, // brow
    { cx: 150, cy: 88, delay: 0.3 }, // brow
    { cx: 52, cy: 150, delay: 0.6 }, // cheek
    { cx: 176, cy: 150, delay: 0.9 }, // cheek
    { cx: 72, cy: 210, delay: 1.2 }, // jaw
    { cx: 156, cy: 210, delay: 1.5 }, // jaw
    { cx: 114, cy: 232, delay: 1.8 }, // chin
  ];

  return (
    <svg viewBox="0 0 228 260" width={size} height={size * (260 / 228)} className="overflow-visible">
      <path
        d="M114 20 C60 20 34 62 34 108 C34 150 44 178 60 202 C76 226 96 240 114 240 C132 240 152 226 168 202 C184 178 194 150 194 108 C194 62 168 20 114 20 Z"
        fill="none"
        stroke={stroke}
        strokeWidth={1.4}
      />
      <path d="M84 118 C90 112 98 112 104 118" fill="none" stroke={stroke} strokeWidth={1.2} strokeLinecap="round" />
      <path d="M124 118 C130 112 138 112 144 118" fill="none" stroke={stroke} strokeWidth={1.2} strokeLinecap="round" />
      <path d="M108 176 C114 180 120 180 126 176" fill="none" stroke={stroke} strokeWidth={1.2} strokeLinecap="round" />
      {markers.map((m, i) => (
        <motion.circle
          key={i}
          cx={m.cx}
          cy={m.cy}
          r={3.5}
          fill={dot}
          initial={{ opacity: 0.3, scale: 0.7 }}
          animate={{ opacity: [0.3, 1, 0.3], scale: [0.7, 1.15, 0.7] }}
          transition={{ duration: 2.6, repeat: Infinity, delay: m.delay, ease: "easeInOut" }}
        />
      ))}
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  REUSABLE — image placeholder                                       */
/* ------------------------------------------------------------------ */
function Photo({ src, alt, label, ratio = "aspect-[4/5]", className = "", figNote }) {
  if (!src) {
    return (
      <div
        className={`relative flex ${ratio} w-full flex-col items-center justify-center gap-3 overflow-hidden rounded-[6px] border ${className}`}
        style={{ borderColor: `${BRAND.graphite}18`, backgroundColor: `${BRAND.clay}0d` }}
      >
        <div className="flex h-11 w-11 items-center justify-center rounded-full" style={{ backgroundColor: `${BRAND.clay}18` }}>
          <ImageIcon size={18} color={BRAND.clay} strokeWidth={1.6} />
        </div>
        <span className="px-6 text-center text-[12px] font-medium leading-snug" style={{ color: `${BRAND.graphite}88` }}>
          {label}
        </span>
      </div>
    );
  }
  return (
    <div className={`relative overflow-hidden rounded-[6px] border ${ratio} w-full ${className}`} style={{ borderColor: `${BRAND.graphite}14` }}>
      <Image src={src} alt={alt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
      {figNote && (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-4 py-3">
          <span className="text-[11px] font-medium text-white/90">{figNote}</span>
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  SECTION: HERO — editorial "consultation room" split. A stone panel */
/*  with the Structural Map sits beside the copy, labeled like a       */
/*  clinical reference plate rather than a marketing spotlight.        */
/* ------------------------------------------------------------------ */
function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: BRAND.stone, fontFamily: FONT_BODY }}>
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 pt-8 pb-16 md:px-10 md:pt-12 md:pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}>
          {/* VISIBLE BREADCRUMB NAVIGATION */}
          <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-1.5 text-[12.5px] font-medium text-neutral-600">
            <a href="/" className="transition-colors hover:text-[#1F5E4B]">Home</a>
            <ChevronRight size={12} style={{ color: BRAND.clay }} />
            <a href="/services" className="transition-colors hover:text-[#1F5E4B]">Facial Aesthetics</a>
            <ChevronRight size={12} style={{ color: BRAND.clay }} />
            <span style={{ color: BRAND.clay }} className="font-semibold">Non-Surgical Facelift in Dubai</span>
          </nav>

          <div
            className="mb-7 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em]"
            style={{ borderColor: `${BRAND.clay}44`, color: BRAND.clay }}
          >
            <MapPin size={13} strokeWidth={2.2} />
            {hero.eyebrow}
          </div>

          <h1 className="max-w-2xl text-[2.8rem] leading-[1.1] tracking-tight md:text-[3.6rem]" style={{ fontFamily: FONT_DISPLAY, fontWeight: 600, color: BRAND.graphite }}>
            {hero.h1}
          </h1>

          <div className="mt-8 max-w-2xl space-y-5">
            {hero.intro.map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.15 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="text-[16px] leading-[1.85] text-neutral-700 md:text-[17px]"
              >
                {para}
              </motion.p>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="/book-appointment"
              className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[13.5px] font-semibold uppercase tracking-[0.06em] text-white shadow-sm transition-transform hover:-translate-y-0.5"
              style={{ backgroundColor: BRAND.graphite }}
            >
              Book a Consultation
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="tel:+971566597878"
              className="group inline-flex items-center gap-2 rounded-full border px-7 py-3.5 text-[13.5px] font-semibold uppercase tracking-[0.06em] transition-transform hover:-translate-y-0.5"
              style={{ borderColor: `${BRAND.graphite}33`, color: BRAND.graphite, backgroundColor: "#FFFFFF" }}
            >
              <Phone size={15} color={BRAND.clay} />
              Call Clinic
            </a>
          </div>
        </motion.div>

        {/* REAL HERO PHOTO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md"
        >
          <Photo
            src="/images/non-surgical-facelift-hero-consultation.jpg"
            alt="Non-Surgical Facelift in Dubai consultation at RamaCare"
            label="Hero consultation photo"
            ratio="aspect-[4/5]"
            className="shadow-[0_24px_60px_rgba(42,39,36,0.18)]"
          />
          {/* floating reference tag, small nod to the structural theme without dominating */}
          <div
            className="absolute -bottom-5 -left-5 hidden items-center gap-2.5 rounded-[4px] border bg-white px-4 py-3 shadow-lg sm:flex"
            style={{ borderColor: `${BRAND.graphite}14` }}
          >
            <StructuralMap size={40} tone="light" />
            <span className="text-[11px] font-medium leading-tight" style={{ color: BRAND.graphite }}>
              Jaw · Cheek · Brow<br />assessment points
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  SECTION: QUICK ANSWER — a "field note" card with a folded corner   */
/*  and an oversized quote mark, distinct from a banner or callout.    */
/* ------------------------------------------------------------------ */
function QuickAnswer() {
  return (
    <section className="px-6 py-16 md:px-10" style={{ backgroundColor: BRAND.stoneDeep, fontFamily: FONT_BODY }}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto max-w-5xl overflow-hidden rounded-[4px] bg-white px-8 py-10 shadow-[0_18px_44px_rgba(42,39,36,0.08)] md:px-12 md:py-12"
      >
        {/* folded corner */}
        <div
          className="absolute right-0 top-0 h-10 w-10"
          style={{ background: `linear-gradient(135deg, transparent 50%, ${BRAND.stoneDeep} 50%)` }}
        />
        <Quote size={30} color={BRAND.claySoft} fill={BRAND.claySoft} className="opacity-40" />
        <span className="mt-2 block text-[12px] font-semibold uppercase tracking-[0.16em]" style={{ color: BRAND.clay }}>
          {quickAnswer.label}
        </span>
        <h2 className="mt-2 text-[1.8rem] leading-tight md:text-[2.2rem]" style={{ fontFamily: FONT_DISPLAY, fontWeight: 600, color: BRAND.graphite }}>
          {quickAnswer.heading}
        </h2>
        <p className="mt-5 text-[16px] leading-[1.85] text-neutral-700 md:text-[17.5px]">{quickAnswer.body}</p>
      </motion.div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  SECTION: TABLE OF CONTENTS — compact 1-line quick navigation bar   */
/* ------------------------------------------------------------------ */
function TableOfContents() {
  const quickNav = [
    { id: "what-is-a-non-surgical-facelift", label: "What Is It" },
    { id: "what-causes-facial-aging", label: "Aging Causes" },
    { id: "who-may-consider", label: "Candidacy" },
    { id: "treatment-options", label: "Treatment Options" },
    { id: "skin-tightening", label: "Skin Tightening" },
    { id: "dermal-fillers", label: "Dermal Fillers" },
    { id: "botox-dynamic-wrinkles", label: "Botox" },
    { id: "collagen-stimulating", label: "Collagen" },
    { id: "non-surgical-vs-surgical", label: "Vs Surgery" },
    { id: "treatment-assessment", label: "Assessment" },
    { id: "results-timeline-recovery", label: "Recovery" },
    { id: "risks-and-side-effects", label: "Safety & Risks" },
    { id: "cost-in-dubai", label: "Cost in Dubai" },
    { id: "why-ramacare", label: "Why RamaCare" },
    { id: "faq", label: "FAQs" },
    { id: "book-consultation", label: "Book Consultation" },
  ];

  return (
    <section className="px-6 py-6 md:py-7 border-y shadow-xs" style={{ backgroundColor: BRAND.stone, borderColor: `${BRAND.graphite}14`, fontFamily: FONT_BODY }}>
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2.5 flex-none">
          <span className="h-2 w-2 rounded-full" style={{ backgroundColor: BRAND.clay }} />
          <span className="text-[12px] font-bold uppercase tracking-[0.16em]" style={{ color: BRAND.graphite }}>
            Quick Jump Navigation:
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {quickNav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-[13px] font-medium transition-all hover:-translate-y-0.5 hover:shadow-xs"
              style={{
                borderColor: `${BRAND.clay}44`,
                color: BRAND.graphite,
                backgroundColor: "#FFFFFF",
              }}
            >
              {item.label}
              <ArrowRight size={12} color={BRAND.clay} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  SECTION: WHAT IS A NON-SURGICAL FACELIFT — hub-and-spoke mechanism */
/*  map: a central "Non-Surgical Facelift" hub with five mechanisms    */
/*  branching outward, each reaching a different aging concern         */
/*  through a different route.                                         */
/* ------------------------------------------------------------------ */
function WhatIsNonSurgicalFacelift() {
  const n = whatIsNonSurgicalFacelift.mechanisms.length;
  const radius = 140;

  return (
    <section
      id="what-is-a-non-surgical-facelift"
      className="scroll-mt-24 px-6 py-20 md:px-10 md:py-28"
      style={{ backgroundColor: "#FFFFFF", fontFamily: FONT_BODY }}
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="text-[12px] font-semibold uppercase tracking-[0.16em]" style={{ color: BRAND.clay }}>
            An Umbrella Term
          </span>
          <h2 className="mt-3 text-[2rem] leading-tight md:text-[2.5rem]" style={{ fontFamily: FONT_DISPLAY, fontWeight: 600, color: BRAND.graphite }}>
            {whatIsNonSurgicalFacelift.h2}
          </h2>
          <div className="mt-6 space-y-4 text-left">
            {whatIsNonSurgicalFacelift.paragraphs.map((p, i) => (
              <p key={i} className="text-[16px] leading-[1.85] text-neutral-700 md:text-[17px]">
                {p}
              </p>
            ))}
          </div>
        </motion.div>

        {/* HUB-AND-SPOKE MAP — desktop */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto mt-16 hidden md:block"
          style={{ width: radius * 2 + 240, height: radius * 2 + 40 }}
        >
          {whatIsNonSurgicalFacelift.mechanisms.map((m, i) => {
            const angle = (i / n) * 2 * Math.PI - Math.PI / 2;
            const x = radius * Math.cos(angle);
            const y = radius * Math.sin(angle);
            return (
              <div key={m}>
                <svg className="pointer-events-none absolute left-1/2 top-1/2" style={{ overflow: "visible" }}>
                  <line x1={0} y1={0} x2={x} y2={y} stroke={`${BRAND.clay}55`} strokeWidth={1.5} />
                </svg>
                <div
                  className="absolute flex w-[150px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[4px] border bg-white px-3 py-3 text-center shadow-[0_6px_18px_rgba(42,39,36,0.06)]"
                  style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)`, borderColor: `${BRAND.graphite}14` }}
                >
                  <span className="text-[12px] font-semibold leading-snug" style={{ color: BRAND.graphite }}>
                    {m}
                  </span>
                </div>
              </div>
            );
          })}

          <div
            className="absolute left-1/2 top-1/2 flex h-[128px] w-[128px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full text-center"
            style={{ backgroundColor: BRAND.graphite }}
          >
            <span className="px-4 text-[13.5px] font-semibold leading-tight text-white">Non-Surgical Facelift</span>
          </div>
        </motion.div>

        {/* MOBILE fallback */}
        <div className="mt-12 flex flex-col items-center gap-3 md:hidden">
          <div className="rounded-[4px] px-6 py-3 text-center text-[13.5px] font-semibold text-white" style={{ backgroundColor: BRAND.graphite }}>
            Non-Surgical Facelift
          </div>
          <div className="mt-2 grid w-full grid-cols-2 gap-2.5">
            {whatIsNonSurgicalFacelift.mechanisms.map((m) => (
              <div key={m} className="rounded-[4px] border bg-white px-3 py-3 text-center text-[12px] font-medium" style={{ borderColor: `${BRAND.graphite}14`, color: BRAND.graphite }}>
                {m}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  SECTION: WHAT CAUSES FACIAL AGING — a "cross-section" of the face: */
/*  four horizontal strata from surface to bone, each carrying its own */
/*  contributing factors, visually arguing why one treatment can't     */
/*  cover every layer at once.                                        */
/* ------------------------------------------------------------------ */
function WhatCausesFacialAging() {
  return (
    <section
      id="what-causes-facial-aging"
      className="scroll-mt-24 px-6 py-20 md:px-10 md:py-28"
      style={{ backgroundColor: BRAND.stoneDeep, fontFamily: FONT_BODY }}
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <span className="text-[12px] font-semibold uppercase tracking-[0.16em]" style={{ color: BRAND.clay }}>
            A Layered Process
          </span>
          <h2 className="mt-3 text-[2rem] leading-tight md:text-[2.5rem]" style={{ fontFamily: FONT_DISPLAY, fontWeight: 600, color: BRAND.graphite }}>
            {whatCausesFacialAging.h2}
          </h2>
          <p className="mt-5 text-[16px] leading-[1.85] text-neutral-700 md:text-[17px]">{whatCausesFacialAging.intro}</p>
        </motion.div>

        {/* CROSS-SECTION STRATA */}
        <div className="mt-14 overflow-hidden rounded-[4px] border" style={{ borderColor: `${BRAND.graphite}18` }}>
          {whatCausesFacialAging.layers.map((layer, i) => {
            const Icon = layer.icon;
            const depth = i / (whatCausesFacialAging.layers.length - 1);
            const bg = `rgba(31,94,75,${0.04 + depth * 0.12})`;
            return (
              <motion.div
                key={layer.label}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col gap-3 border-t px-6 py-6 sm:flex-row sm:items-center sm:gap-8 sm:px-9"
                style={{ backgroundColor: bg, borderColor: i === 0 ? "transparent" : `${BRAND.graphite}12` }}
              >
                <div className="flex flex-none items-center gap-3 sm:w-[230px]">
                  <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full" style={{ backgroundColor: "#FFFFFF", border: `1px solid ${BRAND.graphite}18` }}>
                    <Icon size={17} color={BRAND.clay} strokeWidth={1.7} />
                  </span>
                  <span className="text-[14.5px] font-semibold uppercase tracking-[0.04em]" style={{ color: BRAND.graphite }}>
                    {layer.label}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {layer.factors.map((f) => (
                    <span
                      key={f}
                      className="rounded-full border px-3.5 py-1.5 text-[13.5px] font-medium"
                      style={{ borderColor: `${BRAND.graphite}22`, color: BRAND.graphite, backgroundColor: "#FFFFFF" }}
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        <p className="mx-auto mt-10 max-w-4xl text-[16px] leading-[1.85] text-neutral-700 md:text-[17px]">
          {whatCausesFacialAging.closing}
        </p>
      </div>
    </section>
  );
}
function WhoMayConsider() {
  return (
    <section id="who-may-consider" className="scroll-mt-24 px-6 py-20 md:px-10 md:py-28" style={{ backgroundColor: "#FFFFFF", fontFamily: FONT_BODY }}>
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <span className="text-[12px] font-semibold uppercase tracking-[0.16em]" style={{ color: BRAND.clay }}>Candidacy</span>
          <h2 className="mt-3 text-[2rem] leading-tight md:text-[2.5rem]" style={{ fontFamily: FONT_DISPLAY, fontWeight: 600, color: BRAND.graphite }}>
            {whoMayConsider.h2}
          </h2>
          <p className="mt-5 text-[16px] leading-[1.85] text-neutral-700 md:text-[17px]">{whoMayConsider.intro}</p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <motion.div
            initial={{ opacity: 0, x: -14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <Photo
              src="/images/facial-assessment-non-surgical-facelift.jpg"
              alt="facial assessment for non-surgical facelift treatment in Dubai"
              label="Facial assessment photo"
              ratio="aspect-[4/5]"
            />
          </motion.div>

          <div>
            <span className="text-[12px] font-semibold uppercase tracking-[0.12em]" style={{ color: BRAND.graphite }}>
              Common Concerns
            </span>
            <div className="mt-3 flex flex-wrap gap-2.5">
              {whoMayConsider.concerns.map((c, i) => (
                <motion.span
                  key={c}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  className="rounded-full border px-4 py-2 text-[14.5px] font-medium"
                  style={{ borderColor: `${BRAND.clay}44`, color: BRAND.graphite, backgroundColor: BRAND.stone }}
                >
                  {c}
                </motion.span>
              ))}
            </div>

            <span className="mt-8 block text-[12px] font-semibold uppercase tracking-[0.12em]" style={{ color: BRAND.graphite }}>
              {whoMayConsider.factorsIntro}
            </span>
            <div className="mt-3 space-y-0">
              {whoMayConsider.factors.map((f, i) => (
                <div key={f} className="flex items-center gap-4 border-t py-3" style={{ borderColor: `${BRAND.graphite}14` }}>
                  <span className="font-serif text-[14px] font-semibold" style={{ fontFamily: FONT_DISPLAY, color: BRAND.claySoft }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[15px] font-medium" style={{ color: BRAND.graphite }}>{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="mx-auto mt-10 max-w-4xl text-[16px] leading-[1.85] text-neutral-700 md:text-[17px]">{whoMayConsider.closing}</p>
      </div>
    </section>
  );
}
function TreatmentOptionsMap() {
  const rowHeight = 64;
  const height = treatmentOptionsMap.rows.length * rowHeight;

  return (
    <section
      id="treatment-options"
      className="scroll-mt-24 px-6 py-20 md:px-10 md:py-28"
      style={{ backgroundColor: BRAND.stoneDeep, fontFamily: FONT_BODY }}
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <span className="text-[12px] font-semibold uppercase tracking-[0.16em]" style={{ color: BRAND.clay }}>
            Matching Concern to Approach
          </span>
          <h2 className="mt-3 text-[2rem] leading-tight md:text-[2.5rem]" style={{ fontFamily: FONT_DISPLAY, fontWeight: 600, color: BRAND.graphite }}>
            {treatmentOptionsMap.h2}
          </h2>
          <p className="mt-5 text-[16px] leading-[1.85] text-neutral-700 md:text-[17px]">{treatmentOptionsMap.intro}</p>
        </motion.div>

        {/* WIRING DIAGRAM — desktop */}
        <div className="relative mt-14 hidden md:block" style={{ height }}>
          <svg className="pointer-events-none absolute inset-0 h-full w-full" preserveAspectRatio="none">
            {treatmentOptionsMap.rows.map((_, i) => {
              const y = i * rowHeight + rowHeight / 2;
              return (
                <motion.path
                  key={i}
                  d={`M 260 ${y} C 440 ${y}, 440 ${y}, 620 ${y}`}
                  fill="none"
                  stroke={`${BRAND.clay}66`}
                  strokeWidth={1.5}
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                />
              );
            })}
          </svg>
          <div className="relative flex justify-between">
            <div className="w-[250px] space-y-0">
              {treatmentOptionsMap.rows.map((r, i) => (
                <div key={r.concern} className="flex items-center rounded-[3px] border bg-white px-4" style={{ height: rowHeight - 12, marginBottom: 12, borderColor: `${BRAND.graphite}18` }}>
                  <span className="text-[14.5px] font-medium" style={{ color: BRAND.graphite }}>{r.concern}</span>
                </div>
              ))}
            </div>
            <div className="w-[280px] space-y-0">
              {treatmentOptionsMap.rows.map((r) => (
                <div key={r.approach} className="flex items-center rounded-[3px] border-2 px-4" style={{ height: rowHeight - 12, marginBottom: 12, borderColor: BRAND.clay, backgroundColor: `${BRAND.clay}0d` }}>
                  <span className="text-[14.5px] font-semibold" style={{ color: BRAND.graphite }}>{r.approach}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* MOBILE fallback */}
        <div className="mt-12 space-y-3 md:hidden">
          {treatmentOptionsMap.rows.map((r) => (
            <div key={r.concern} className="rounded-[4px] border bg-white p-4" style={{ borderColor: `${BRAND.graphite}18` }}>
              <span className="text-[13px] font-medium text-neutral-500">{r.concern}</span>
              <div className="mt-1 flex items-center gap-2">
                <ArrowRight size={14} color={BRAND.clay} />
                <span className="text-[15px] font-semibold" style={{ color: BRAND.graphite }}>{r.approach}</span>
              </div>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-12 max-w-4xl text-[16px] leading-[1.85] text-neutral-700 md:text-[17px]">{treatmentOptionsMap.closing}</p>
      </div>
    </section>
  );
}

function MechanismCard({ data, reverse, ratio }) {
  const Icon = data.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14 ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}
    >
      <Photo src={data.image} alt={data.imageAlt} label={data.imageLabel} ratio={ratio || "aspect-[5/4]"} />

      <div>
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full" style={{ backgroundColor: `${BRAND.clay}14` }}>
            <Icon size={18} color={BRAND.clay} strokeWidth={1.7} />
          </span>
          <h3 className="text-[1.6rem] leading-tight md:text-[1.9rem]" style={{ fontFamily: FONT_DISPLAY, fontWeight: 600, color: BRAND.graphite }}>
            {data.h2}
          </h3>
        </div>

        <div className="mt-5 space-y-4">
          {data.paragraphs.map((p, i) => (
            <p key={i} className="text-[15.5px] leading-[1.85] text-neutral-700 md:text-[16.5px]">{p}</p>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-2.5">
          {data.techniques.map((t) => (
            <span key={t} className="rounded-full border px-3.5 py-1.5 text-[13.5px] font-medium" style={{ borderColor: `${BRAND.graphite}22`, color: BRAND.graphite, backgroundColor: BRAND.stone }}>
              {t}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-start gap-2.5 rounded-[4px] border-l-2 py-3 pl-4" style={{ borderColor: BRAND.clay }}>
          <XCircle size={16} className="mt-0.5 flex-none" color={BRAND.clay} strokeWidth={1.8} />
          <p className="text-[14.5px] leading-relaxed text-neutral-700">{data.correction}</p>
        </div>
      </div>
    </motion.div>
  );
}

function TreatmentMechanisms() {
  return (
    <section
      id="skin-tightening"
      className="scroll-mt-24 px-6 py-20 md:px-10 md:py-28"
      style={{ backgroundColor: "#FFFFFF", fontFamily: FONT_BODY }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-4xl">
          <span className="text-[12px] font-semibold uppercase tracking-[0.16em]" style={{ color: BRAND.clay }}>
            Three Common Mechanisms
          </span>
          <h2 className="mt-3 text-[2rem] leading-tight md:text-[2.5rem]" style={{ fontFamily: FONT_DISPLAY, fontWeight: 600, color: BRAND.graphite }}>
            How the Main Approaches Actually Work
          </h2>
        </div>

        <div className="mt-16 space-y-20">
          <div id="dermal-fillers" className="scroll-mt-24">
            <MechanismCard data={skinTightening} reverse={false} ratio="aspect-[4/5]" />
          </div>
          <div className="border-t pt-20" style={{ borderColor: `${BRAND.graphite}14` }}>
            <MechanismCard data={dermalFillers} reverse={true} />
          </div>
          <div id="botox-dynamic-wrinkles" className="scroll-mt-24 border-t pt-20" style={{ borderColor: `${BRAND.graphite}14` }}>
            <MechanismCard data={botoxSection} reverse={false} />
          </div>
        </div>
      </div>
    </section>
  );
}
function CollagenStimulating() {
  const bars = [
    { label: "Multiple sessions", height: 88 },
    { label: "Skin quality & age", height: 62 },
    { label: "Cumulative effect", height: 100 },
    { label: "Lifestyle factors", height: 48 },
  ];

  return (
    <section id="collagen-stimulating" className="scroll-mt-24 px-6 py-20 md:px-10 md:py-28" style={{ backgroundColor: BRAND.stoneDeep, fontFamily: FONT_BODY }}>
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-16 lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-[12px] font-semibold uppercase tracking-[0.16em]" style={{ color: BRAND.clay }}>
              A Gradual Biological Process
            </span>
            <h2 className="mt-3 text-[2rem] leading-tight md:text-[2.4rem]" style={{ fontFamily: FONT_DISPLAY, fontWeight: 600, color: BRAND.graphite }}>
              {collagenStimulating.h2}
            </h2>
            <p className="mt-5 text-[16px] leading-[1.85] text-neutral-700">{collagenStimulating.intro}</p>
            <div className="mt-5 space-y-3">
              {collagenStimulating.points.map((p) => (
                <div key={p} className="flex items-start gap-2.5">
                  <TrendingUp size={16} color={BRAND.clay} className="mt-1 flex-none" />
                  <span className="text-[15px] leading-snug text-neutral-700">{p}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* GROWTH BARS */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-[4px] border bg-white p-8"
            style={{ borderColor: `${BRAND.graphite}18` }}
          >
            <div className="flex h-[160px] items-end justify-around gap-4 border-b" style={{ borderColor: `${BRAND.graphite}18` }}>
              {bars.map((b, i) => (
                <motion.div
                  key={b.label}
                  initial={{ height: 0 }}
                  whileInView={{ height: b.height }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.9, delay: 0.15 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="w-8 rounded-t-[3px] sm:w-10"
                  style={{ backgroundColor: i === 2 ? BRAND.clay : BRAND.claySoft }}
                />
              ))}
            </div>
            <div className="mt-3 flex justify-around gap-2 text-center">
              {bars.map((b) => (
                <span key={b.label} className="w-[70px] text-[11.5px] font-medium leading-tight text-neutral-700">{b.label}</span>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.08em]" style={{ color: `${BRAND.graphite}77` }}>
              <span>Week 1</span>
              <span>Week 12+</span>
            </div>
          </motion.div>
        </div>

        <p className="mx-auto mt-10 max-w-4xl text-[16px] leading-[1.85] text-neutral-700">{collagenStimulating.closing}</p>
      </div>
    </section>
  );
}
function RealisticExpectations() {
  return (
    <section id="results-and-expectations" className="scroll-mt-24 px-6 py-20 md:px-10 md:py-28" style={{ backgroundColor: "#FFFFFF", fontFamily: FONT_BODY }}>
      <div className="mx-auto max-w-6xl">
        <span className="text-[12px] font-semibold uppercase tracking-[0.16em]" style={{ color: BRAND.clay }}>Setting Expectations</span>
        <h2 className="mt-3 text-[2rem] leading-tight md:text-[2.4rem]" style={{ fontFamily: FONT_DISPLAY, fontWeight: 600, color: BRAND.graphite }}>
          {realisticExpectations.h2}
        </h2>
        <p className="mt-5 text-[16px] leading-[1.85] text-neutral-700">{realisticExpectations.intro}</p>

        {/* ENGRAVED PLATES */}
        <div className="mt-10 space-y-3">
          {realisticExpectations.outcomes.map((o, i) => (
            <motion.div
              key={o}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-5 rounded-[4px] border-l-4 px-6 py-4"
              style={{ borderColor: BRAND.clay, backgroundColor: BRAND.stone }}
            >
              <span className="font-serif text-[16px] font-semibold" style={{ fontFamily: FONT_DISPLAY, color: BRAND.claySoft }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-[15.5px] font-medium" style={{ color: BRAND.graphite }}>{o}</span>
            </motion.div>
          ))}
        </div>

        {/* SUBTLETY SPECTRUM */}
        <div className="mt-12">
          <div className="h-2.5 w-full rounded-full" style={{ background: `linear-gradient(90deg, ${BRAND.claySoft}, ${BRAND.graphite})` }} />
          <div className="relative mt-2">
            <div className="absolute left-[26%] top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white shadow-md" style={{ backgroundColor: BRAND.clay }} />
          </div>
          <div className="mt-3 flex justify-between text-[13px] font-medium" style={{ color: BRAND.graphite }}>
            <span>Subtle, gradual refresh <br className="hidden sm:block" />(non-surgical sits here)</span>
            <span className="text-right">Substantial, structural lift</span>
          </div>
        </div>

        <p className="mt-10 text-[16px] leading-[1.85] text-neutral-700">{realisticExpectations.closing}</p>
      </div>
    </section>
  );
}
function BeforeAndAfter() {
  return (
    <section id="before-and-after" className="scroll-mt-24 px-6 py-20 md:px-10 md:py-28" style={{ backgroundColor: BRAND.stoneDeep, fontFamily: FONT_BODY }}>
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <span className="text-[12px] font-semibold uppercase tracking-[0.16em]" style={{ color: BRAND.clay }}>Reading Photos Critically</span>
          <h2 className="mt-3 text-[2rem] leading-tight md:text-[2.4rem]" style={{ fontFamily: FONT_DISPLAY, fontWeight: 600, color: BRAND.graphite }}>
            {beforeAndAfter.h2}
          </h2>
          <p className="mt-5 text-[16px] leading-[1.85] text-neutral-700">{beforeAndAfter.intro}</p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 lg:items-center">
          <Photo src={beforeAndAfter.image} alt={beforeAndAfter.imageAlt} label={beforeAndAfter.imageLabel} ratio="aspect-[4/5]" />

          <div className="flex flex-wrap gap-2.5">
            {beforeAndAfter.variables.map((v, i) => (
              <motion.span
                key={v}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="inline-flex items-center gap-1.5 rounded-full border bg-white px-4 py-2 text-[14px] font-medium"
                style={{ borderColor: `${BRAND.clay}44`, color: BRAND.graphite }}
              >
                <Aperture size={13} color={BRAND.clay} />
                {v}
              </motion.span>
            ))}
          </div>
        </div>

        <p className="mx-auto mt-10 max-w-4xl text-[16px] leading-[1.85] text-neutral-700">{beforeAndAfter.closing}</p>
      </div>
    </section>
  );
}
function NonSurgicalVsSurgical() {
  return (
    <section id="non-surgical-vs-surgical" className="scroll-mt-24 px-6 py-20 md:px-10 md:py-28" style={{ backgroundColor: "#FFFFFF", fontFamily: FONT_BODY }}>
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <span className="text-[12px] font-semibold uppercase tracking-[0.16em]" style={{ color: BRAND.clay }}>The Key Decision</span>
          <h2 className="mx-auto mt-3 max-w-3xl text-[2rem] leading-tight md:text-[2.4rem]" style={{ fontFamily: FONT_DISPLAY, fontWeight: 600, color: BRAND.graphite }}>
            {nonSurgicalVsSurgical.h2}
          </h2>
        </div>

        {/* FORK HEADER */}
        <div className="mt-12 flex items-center justify-center gap-4">
          <GitFork size={22} color={BRAND.clay} strokeWidth={1.6} className="rotate-90" />
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4 sm:gap-8">
          <div className="text-center">
            <span className="text-[14.5px] font-semibold uppercase tracking-[0.08em]" style={{ color: BRAND.clay }}>Non-Surgical</span>
          </div>
          <div className="text-center">
            <span className="text-[14.5px] font-semibold uppercase tracking-[0.08em]" style={{ color: BRAND.graphite }}>Surgical Facelift</span>
          </div>
        </div>

        {/* DEPARTURE-BOARD ROWS */}
        <div className="mt-4 overflow-hidden rounded-[4px] border" style={{ borderColor: `${BRAND.graphite}18` }}>
          {nonSurgicalVsSurgical.rows.map((row, i) => (
            <motion.div
              key={row.factor}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: (i % 7) * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="border-t"
              style={{ borderColor: i === 0 ? "transparent" : `${BRAND.graphite}12`, backgroundColor: i % 2 === 0 ? BRAND.stone : "#FFFFFF" }}
            >
              <div className="px-5 pt-3.5 text-center text-[12px] font-semibold uppercase tracking-[0.06em]" style={{ color: `${BRAND.graphite}88` }}>
                {row.factor}
              </div>
              <div className="grid grid-cols-2 gap-4 px-6 pb-4 pt-1 sm:gap-8">
                <p className="text-[14.5px] leading-relaxed md:text-[15.5px]" style={{ color: BRAND.graphite }}>{row.nonSurgical}</p>
                <p className="text-[14.5px] leading-relaxed text-neutral-600 md:text-[15.5px]">{row.surgical}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-4xl text-[16px] leading-[1.85] text-neutral-700">{nonSurgicalVsSurgical.closing}</p>
      </div>
    </section>
  );
}
function WhyAssessmentMatters() {
  return (
    <section id="treatment-assessment" className="scroll-mt-24 px-6 py-20 md:px-10 md:py-28" style={{ backgroundColor: BRAND.graphite, fontFamily: FONT_BODY }}>
      <div className="mx-auto max-w-6xl">
        <span className="text-[12px] font-semibold uppercase tracking-[0.16em]" style={{ color: BRAND.claySoft }}>Before Any Recommendation</span>
        <h2 className="mt-3 text-[2rem] leading-tight md:text-[2.4rem]" style={{ fontFamily: FONT_DISPLAY, fontWeight: 600, color: "#FFFFFF" }}>
          {whyAssessmentMatters.h2}
        </h2>
        <p className="mt-5 text-[16px] leading-[1.85] text-white/80">{whyAssessmentMatters.intro}</p>

        {/* SPINE LIST */}
        <div className="relative mt-12 pl-8">
          <div className="absolute left-2 top-1 bottom-1 w-px" style={{ backgroundColor: `${BRAND.claySoft}44` }} />
          <div className="space-y-4">
            {whyAssessmentMatters.points.map((p, i) => (
              <motion.div
                key={p}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: (i % 9) * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex items-center gap-4"
              >
                <span className="absolute -left-8 h-3.5 w-3.5 rounded-full border-2" style={{ borderColor: BRAND.claySoft, backgroundColor: BRAND.graphite }} />
                <span className="text-[15.5px] text-white/90">{p}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* EXAMPLE CALLOUT */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 flex items-start gap-4 rounded-[4px] border-l-4 bg-white/[0.04] p-6"
          style={{ borderColor: BRAND.claySoft }}
        >
          <AlertOctagon size={18} className="mt-0.5 flex-none" color={BRAND.claySoft} strokeWidth={1.8} />
          <p className="text-[15px] leading-relaxed text-white/80">{whyAssessmentMatters.example}</p>
        </motion.div>
      </div>
    </section>
  );
}
function ConsultationSteps() {
  return (
    <section id="what-happens-during-treatment" className="scroll-mt-24 px-6 py-20 md:px-10 md:py-28" style={{ backgroundColor: "#FFFFFF", fontFamily: FONT_BODY }}>
      <div className="mx-auto max-w-6xl">
        <span className="text-[12px] font-semibold uppercase tracking-[0.16em]" style={{ color: BRAND.clay }}>The Consultation</span>
        <h2 className="mt-3 max-w-3xl text-[2rem] leading-tight md:text-[2.4rem]" style={{ fontFamily: FONT_DISPLAY, fontWeight: 600, color: BRAND.graphite }}>
          {consultationSteps.h2}
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {consultationSteps.steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: (i % 4) * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-[4px] border bg-white pt-6"
              style={{ borderColor: `${BRAND.graphite}18` }}
            >
              <span
                className="absolute -top-3 left-4 flex h-6 items-center rounded-[3px] px-2.5 text-[11px] font-semibold text-white"
                style={{ backgroundColor: BRAND.clay }}
              >
                <FileCheck size={12} className="mr-1" /> {String(i + 1).padStart(2, "0")}
              </span>
              <div className="px-5 pb-5 pt-3">
                <h3 className="text-[15.5px] font-semibold" style={{ color: BRAND.graphite }}>{s.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-neutral-700">{s.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
function ResultsAndRecovery() {
  return (
    <section id="results-timeline-recovery" className="scroll-mt-24 px-6 py-20 md:px-10 md:py-28" style={{ backgroundColor: BRAND.stoneDeep, fontFamily: FONT_BODY }}>
      <div className="mx-auto max-w-6xl">
        <span className="text-[12px] font-semibold uppercase tracking-[0.16em]" style={{ color: BRAND.clay }}>Timing & Recovery</span>
        <h2 className="mt-3 max-w-3xl text-[2rem] leading-tight md:text-[2.4rem]" style={{ fontFamily: FONT_DISPLAY, fontWeight: 600, color: BRAND.graphite }}>
          {resultsAndRecovery.h2}
        </h2>

        <div id="how-long-results-last-onset" />
        <p className="mt-5 max-w-4xl text-[16px] leading-[1.85] text-neutral-700">{resultsAndRecovery.timelineIntro}</p>

        <div className="mt-8 space-y-3">
          {resultsAndRecovery.timeline.map((t, i) => (
            <motion.div
              key={t.label}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-1.5 rounded-[4px] border-l-4 bg-white px-6 py-4 sm:flex-row sm:items-baseline sm:gap-6"
              style={{ borderColor: BRAND.clay }}
            >
              <span className="flex-none text-[14.5px] font-semibold uppercase tracking-[0.04em] sm:w-[240px]" style={{ color: BRAND.graphite }}>{t.label}</span>
              <span className="text-[14.5px] leading-relaxed text-neutral-700 md:text-[15.5px]">{t.body}</span>
            </motion.div>
          ))}
        </div>
        <p className="mt-6 max-w-4xl text-[15px] leading-[1.85] text-neutral-700">{resultsAndRecovery.timelineClosing}</p>

        <div id="recovery-and-aftercare" className="scroll-mt-24 mt-14 border-t pt-14" style={{ borderColor: `${BRAND.graphite}14` }}>
          <h3 className="text-[1.6rem] leading-tight md:text-[1.9rem]" style={{ fontFamily: FONT_DISPLAY, fontWeight: 600, color: BRAND.graphite }}>
            Recovery After a Non-Surgical Facelift
          </h3>
          <p className="mt-4 max-w-4xl text-[16px] leading-[1.85] text-neutral-700">{resultsAndRecovery.recoveryIntro}</p>

          <div className="mt-6 flex flex-wrap gap-2.5">
            {resultsAndRecovery.recoveryEffects.map((e) => (
              <span key={e} className="rounded-full border px-4 py-2 text-[14px] font-medium" style={{ borderColor: `${BRAND.clay}44`, color: BRAND.graphite, backgroundColor: "#FFFFFF" }}>
                {e}
              </span>
            ))}
          </div>
          <p className="mt-6 max-w-4xl text-[15px] leading-[1.85] text-neutral-700">{resultsAndRecovery.recoveryClosing}</p>
        </div>
      </div>
    </section>
  );
}
function RisksAndSideEffects() {
  return (
    <section id="risks-and-side-effects" className="scroll-mt-24 px-6 py-20 md:px-10 md:py-28" style={{ backgroundColor: "#FFFFFF", fontFamily: FONT_BODY }}>
      <div className="mx-auto max-w-6xl">
        <span className="text-[12px] font-semibold uppercase tracking-[0.16em]" style={{ color: BRAND.clay }}>Safety</span>
        <h2 className="mt-3 max-w-3xl text-[2rem] leading-tight md:text-[2.4rem]" style={{ fontFamily: FONT_DISPLAY, fontWeight: 600, color: BRAND.graphite }}>
          {risksAndSideEffects.h2}
        </h2>
        <p className="mt-5 max-w-4xl text-[16px] leading-[1.85] text-neutral-700">{risksAndSideEffects.intro}</p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {[risksAndSideEffects.injectable, risksAndSideEffects.energyBased].map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-[4px] border p-7"
              style={{ borderColor: `${BRAND.graphite}18`, backgroundColor: i === 0 ? BRAND.stone : "#FFFFFF" }}
            >
              <div className="flex items-center gap-2.5">
                <ShieldAlert size={18} color={BRAND.clay} strokeWidth={1.8} />
                <span className="text-[15px] font-semibold" style={{ color: BRAND.graphite }}>{cat.label}</span>
              </div>
              <p className="mt-1 text-[13px] text-neutral-500">{cat.sub}</p>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {cat.items.map((it) => (
                  <span key={it} className="rounded-full border px-3.5 py-1.5 text-[13px] font-medium" style={{ borderColor: `${BRAND.graphite}22`, color: BRAND.graphite, backgroundColor: "#FFFFFF" }}>
                    {it}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 border-2 border-dashed rounded-[4px] p-6" style={{ borderColor: `${BRAND.clay}66` }}>
          <p className="text-[15px] leading-relaxed text-neutral-700">{risksAndSideEffects.closing}</p>
        </div>
      </div>
    </section>
  );
}
function LongevityAndCost() {
  return (
    <section id="how-long-results-last" className="scroll-mt-24 px-6 py-20 md:px-10 md:py-28" style={{ backgroundColor: BRAND.stoneDeep, fontFamily: FONT_BODY }}>
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-[4px] border bg-white p-8"
            style={{ borderColor: `${BRAND.graphite}18` }}
          >
            <div className="flex items-center gap-2.5">
              <Hourglass size={18} color={BRAND.clay} />
              <h3 className="text-[17px] font-semibold" style={{ color: BRAND.graphite }}>{longevityAndCost.longevity.h2}</h3>
            </div>
            <p className="mt-3 text-[14.5px] leading-relaxed text-neutral-700">{longevityAndCost.longevity.intro}</p>
            <div className="mt-4 space-y-0">
              {longevityAndCost.longevity.factors.map((f, i) => (
                <div key={f} className="flex items-start gap-3 border-t py-3" style={{ borderColor: `${BRAND.graphite}12` }}>
                  <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full" style={{ backgroundColor: BRAND.clay }} />
                  <span className="text-[14px] text-neutral-700">{f}</span>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-[3px] px-4 py-3 text-center text-[12.5px] font-semibold uppercase tracking-[0.08em]" style={{ backgroundColor: BRAND.stone, color: BRAND.graphite }}>
              Duration: genuinely varies
            </div>
            <p className="mt-4 text-[14px] leading-relaxed text-neutral-700">{longevityAndCost.longevity.closing}</p>
          </motion.div>

          <motion.div
            id="cost-in-dubai"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="scroll-mt-24 rounded-[4px] p-8"
            style={{ backgroundColor: BRAND.graphite }}
          >
            <div className="flex items-center gap-2.5">
              <Wallet size={18} color={BRAND.claySoft} />
              <h3 className="text-[17px] font-semibold text-white">{longevityAndCost.cost.h2}</h3>
            </div>
            <p className="mt-3 text-[14.5px] leading-relaxed text-white/80">{longevityAndCost.cost.intro}</p>
            <div className="mt-4 space-y-0">
              {longevityAndCost.cost.factors.map((f) => (
                <div key={f} className="flex items-start gap-3 border-t py-3" style={{ borderColor: "rgba(255,255,255,0.12)" }}>
                  <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full" style={{ backgroundColor: BRAND.claySoft }} />
                  <span className="text-[14px] text-white/90">{f}</span>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-[3px] border-2 border-dashed px-4 py-3 text-center text-[12.5px] font-semibold uppercase tracking-[0.08em] text-white" style={{ borderColor: `${BRAND.claySoft}88` }}>
              Quote provided after consultation
            </div>
            <p className="mt-4 text-[14px] leading-relaxed text-white/70">{longevityAndCost.cost.closing}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
function BenefitsAndCannotDo() {
  return (
    <section id="benefits-and-limitations" className="scroll-mt-24 px-6 py-20 md:px-10 md:py-28" style={{ backgroundColor: "#FFFFFF", fontFamily: FONT_BODY }}>
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <span className="text-[12px] font-semibold uppercase tracking-[0.16em]" style={{ color: BRAND.clay }}>An Honest Account</span>
          <h2 className="mx-auto mt-3 max-w-3xl text-[2rem] leading-tight md:text-[2.4rem]" style={{ fontFamily: FONT_DISPLAY, fontWeight: 600, color: BRAND.graphite }}>
            {benefitsAndCannotDo.h2}
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-14">
          <div>
            <span className="text-[13px] font-semibold uppercase tracking-[0.1em]" style={{ color: BRAND.clay }}>Can offer</span>
            <div className="mt-4 space-y-3.5">
              {benefitsAndCannotDo.benefits.map((b) => (
                <div key={b} className="flex items-start gap-3">
                  <PlusCircle size={17} color={BRAND.clay} className="mt-0.5 flex-none" strokeWidth={1.8} />
                  <span className="text-[15px] leading-snug text-neutral-700 md:text-[16px]">{b}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <span className="text-[13px] font-semibold uppercase tracking-[0.1em]" style={{ color: `${BRAND.graphite}88` }}>Cannot do</span>
            <div className="mt-4 space-y-3.5">
              {benefitsAndCannotDo.cannotDo.map((c) => (
                <div key={c} className="flex items-start gap-3">
                  <MinusCircle size={17} color={`${BRAND.graphite}88`} className="mt-0.5 flex-none" strokeWidth={1.8} />
                  <span className="text-[15px] leading-snug text-neutral-600 md:text-[16px]">{c}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AdditionalAssessmentAndWhyRamaCare() {
  return (
    <section id="who-needs-additional-assessment" className="scroll-mt-24 px-6 py-20 md:px-10 md:py-28" style={{ backgroundColor: BRAND.stoneDeep, fontFamily: FONT_BODY }}>
      <div className="mx-auto max-w-6xl">
        <div className="rounded-[4px] border-l-4 bg-white p-8" style={{ borderColor: BRAND.clay }}>
          <div className="flex items-center gap-2.5">
            <UserCog size={18} color={BRAND.clay} />
            <h3 className="text-[17px] font-semibold" style={{ color: BRAND.graphite }}>{additionalAssessment.h2}</h3>
          </div>
          <p className="mt-3 text-[15.5px] leading-relaxed text-neutral-700">{additionalAssessment.intro}</p>
          <div className="mt-4 flex flex-wrap gap-2.5">
            {additionalAssessment.items.map((it) => (
              <span key={it} className="rounded-full border px-4 py-2 text-[13.5px] font-medium" style={{ borderColor: `${BRAND.clay}44`, color: BRAND.graphite, backgroundColor: BRAND.stone }}>
                {it}
              </span>
            ))}
          </div>
          <p className="mt-4 text-[14px] leading-relaxed text-neutral-600">{additionalAssessment.closing}</p>
        </div>

        <div id="why-ramacare" className="scroll-mt-24 mt-16">
          <span className="text-[12px] font-semibold uppercase tracking-[0.16em]" style={{ color: BRAND.clay }}>Why RamaCare</span>
          <h2 className="mt-3 max-w-3xl text-[2rem] leading-tight md:text-[2.4rem]" style={{ fontFamily: FONT_DISPLAY, fontWeight: 600, color: BRAND.graphite }}>
            {whyRamaCare.h2}
          </h2>
          <div className="mt-8 divide-y" style={{ borderColor: `${BRAND.graphite}14` }}>
            {whyRamaCare.pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col gap-1.5 py-5 sm:flex-row sm:items-baseline sm:gap-8"
              >
                <span className="flex-none text-[15px] font-semibold sm:w-[240px]" style={{ color: BRAND.graphite }}>{p.title}</span>
                <span className="text-[15px] leading-relaxed text-neutral-700">{p.body}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PatientJourney() {
  return (
    <section id="patient-journey" className="scroll-mt-24 px-6 py-20 md:px-10 md:py-28" style={{ backgroundColor: "#FFFFFF", fontFamily: FONT_BODY }}>
      <div className="mx-auto max-w-6xl">
        <span className="text-[12px] font-semibold uppercase tracking-[0.16em]" style={{ color: BRAND.clay }}>The Path</span>
        <h2 className="mt-3 text-[2rem] leading-tight md:text-[2.4rem]" style={{ fontFamily: FONT_DISPLAY, fontWeight: 600, color: BRAND.graphite }}>
          {patientJourney.h2}
        </h2>

        <div className="mt-12 flex flex-wrap items-center gap-x-3 gap-y-4">
          {patientJourney.steps.map((step, i) => (
            <div key={step} className="flex items-center gap-3">
              <motion.span
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-full border px-4.5 py-2.5 text-[14.5px] font-medium"
                style={{
                  borderColor: i === 0 || i === patientJourney.steps.length - 1 ? BRAND.clay : `${BRAND.graphite}22`,
                  backgroundColor: i === 0 || i === patientJourney.steps.length - 1 ? BRAND.clay : BRAND.stone,
                  color: i === 0 || i === patientJourney.steps.length - 1 ? "#FFFFFF" : BRAND.graphite,
                }}
              >
                {step}
              </motion.span>
              {i < patientJourney.steps.length - 1 && <ArrowRight size={14} color={`${BRAND.graphite}44`} />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQs() {
  const [open, setOpen] = useState(null);
  return (
    <section id="faq" className="scroll-mt-24 px-6 py-20 md:px-10 md:py-28" style={{ backgroundColor: BRAND.stoneDeep, fontFamily: FONT_BODY }}>
      <div className="mx-auto max-w-5xl">
        <span className="text-[12px] font-semibold uppercase tracking-[0.16em]" style={{ color: BRAND.clay }}>FAQs</span>
        <h2 className="mt-3 text-[2rem] leading-tight md:text-[2.4rem]" style={{ fontFamily: FONT_DISPLAY, fontWeight: 600, color: BRAND.graphite }}>
          Frequently Asked Questions
        </h2>

        <div className="mt-10 divide-y" style={{ borderColor: `${BRAND.graphite}18` }}>
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={faq.q} className="py-5">
                <button type="button" onClick={() => setOpen(isOpen ? null : i)} className="flex w-full items-center justify-between gap-4 text-left">
                  <span className="text-[16px] font-medium md:text-[17px]" style={{ color: BRAND.graphite }}>{faq.q}</span>
                  <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.25 }} className="flex-none">
                    <ChevronDown size={18} color={BRAND.clay} />
                  </motion.span>
                </button>
                {isOpen && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 border-l-2 pl-4 text-[15px] leading-relaxed text-neutral-700 md:text-[15.5px]"
                    style={{ borderColor: BRAND.clay }}
                  >
                    {faq.a}
                  </motion.p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function InternalLinksAndFinalCta() {
  const handleWhatsApp = () => {
    window.open("https://wa.me/971566597878", "_blank");
  };

  return (
    <>
      <section className="px-6 py-14 md:px-10" style={{ backgroundColor: "#FFFFFF", fontFamily: FONT_BODY }}>
        <div className="mx-auto max-w-6xl">
          <span className="text-[12px] font-semibold uppercase tracking-[0.14em]" style={{ color: BRAND.clay }}>Related Reading</span>
          <div className="mt-4 flex flex-wrap gap-2.5">
            {internalLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="inline-flex items-center gap-2 rounded-full border px-4.5 py-2.5 text-[14px] font-medium transition-all hover:-translate-y-0.5 hover:shadow-xs hover:border-[#1F5E4B] hover:text-[#1F5E4B]"
                style={{ borderColor: `${BRAND.graphite}18`, color: BRAND.graphite }}
              >
                {item.label} <ArrowRight size={13} color={BRAND.clay} />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="book-consultation" className="scroll-mt-24 px-6 py-24 md:px-10 md:py-28" style={{ backgroundColor: BRAND.graphite, fontFamily: FONT_BODY }}>
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-[12px] font-semibold uppercase tracking-[0.16em]" style={{ color: BRAND.claySoft }}>{finalCta.eyebrow}</span>
          <p className="mt-5 text-[17px] leading-[1.85] text-white/90 md:text-[18.5px]">{finalCta.body}</p>
          <p className="mt-4 text-[15px] leading-relaxed text-white/70">{finalCta.sub}</p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">

            <a
              href="https://wa.me/971566597878?text=Hello%20RamaCare%2C%20I%20would%20like%20to%20book%20a%20consultation%20for%20Non-Surgical%20Facelift%20in%20Dubai."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 px-8 py-4 text-[14px] font-semibold uppercase tracking-[0.05em] text-white transition-transform hover:-translate-y-0.5"
              style={{ borderColor: BRAND.claySoft }}
            >
              <Send size={16} color={BRAND.claySoft} /> WhatsApp Us
            </a>
            <a
              href="tel:+971566597878"
              className="inline-flex items-center gap-2 rounded-full border px-8 py-4 text-[14px] font-semibold uppercase tracking-[0.05em] text-white/90 transition-transform hover:-translate-y-0.5"
              style={{ borderColor: `${BRAND.claySoft}55` }}
            >
              <Phone size={16} color={BRAND.claySoft} /> Call Clinic
            </a>
          </div>

          <p className="mx-auto mt-10 max-w-2xl text-[14px] leading-[1.85] text-white/60">{finalCta.conclusion}</p>
        </div>
      </section>
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  PAGE                                                               */
/* ------------------------------------------------------------------ */
export default function NonSurgicalFacelift() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a,
      },
    })),
  };

  return (
    <Layout>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <link rel="canonical" href={`https://www.ramacarepolyclinic.com${meta.url}`} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap"
          rel="stylesheet"
        />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalClinicSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalWebPageSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </Head>

      <main>
        <Hero />
        <QuickAnswer />
        <TableOfContents />
        <WhatIsNonSurgicalFacelift />
        <WhatCausesFacialAging />
        <WhoMayConsider />
        <TreatmentOptionsMap />
        <TreatmentMechanisms />
        <CollagenStimulating />
        <RealisticExpectations />
        <BeforeAndAfter />
        <NonSurgicalVsSurgical />
        <WhyAssessmentMatters />
        <ConsultationSteps />
        <ResultsAndRecovery />
        <RisksAndSideEffects />
        <LongevityAndCost />
        <BenefitsAndCannotDo />
        <AdditionalAssessmentAndWhyRamaCare />
        <PatientJourney />
        <FAQs />
        <InternalLinksAndFinalCta />
      </main>
    </Layout>
  );
}