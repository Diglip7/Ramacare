import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import Layout from "../../../components/Layout";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Sparkle,
  Star,
  ArrowRight,
  MapPin,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  Smile,
  CheckCircle2,
  Gem,
  Layers,
  Sun,
  Crown,
  AlignCenter,
  Search,
  ScanLine,
  Camera,
  ClipboardCheck,
  ShieldCheck,
  AlertTriangle,
  Phone,
  MessageSquare,
  Stethoscope,
  Building2,
  HeartHandshake,
  Award,
  Clock,
  Info,
  Zap,
  Sliders,
  Check,
  Maximize2,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/*  BRAND TOKENS & TYPOGRAPHY — Harmonized with RamaCare System                */
/* -------------------------------------------------------------------------- */
const BRAND = {
  teal: "#1F5E4B",
  darkTeal: "#0F3B2E",
  gold: "#D4A574",
  goldLight: "#E8CFA6",
  cream: "#F5F1E8",
  creamLight: "#F9F7F2",
  ink: "#0F3B2E",
};

const FONT_DISPLAY = "'Nunito Sans', sans-serif";
const FONT_BODY = "'Nunito Sans', sans-serif";

/* -------------------------------------------------------------------------- */
/*  META DATA                                                                 */
/* -------------------------------------------------------------------------- */
const meta = {
  title: "Hollywood Smile Treatment Dubai | RamaCare",
  description:
    "Explore Hollywood Smile Treatment Dubai at RamaCare Polyclinic with personalized cosmetic dentistry options for a natural, balanced smile. Book a consultation.",
  url: "https://ramacarepolyclinic.ae/services/hollywood-smile-treatment-dubai",
};

/* -------------------------------------------------------------------------- */
/*  IMAGE ASSETS & RECOMMENDATIONS MAPPING                                    */
/* -------------------------------------------------------------------------- */
const IMAGES = {
  hero: {
    src: "/images/Hollywood Smile Treatment Dubai consultation.jpg",
    alt: "Hollywood Smile Treatment Dubai consultation at RamaCare Polyclinic",
  },
  assessment: {
    src: "/images/cosmetic dentist assessing smile design in Dubai.jpg",
    alt: "cosmetic dentist assessing smile design in Dubai",
  },
  planning: {
    src: "/images/dental-veeners1.jpg",
    alt: "Hollywood Smile veneer planning in Dubai",
  },
  digitalDesign: {
    src: "/images/digital smile design for Hollywood Smile treatment.jpg",
    alt: "digital smile design for Hollywood Smile treatment",
  },
  porcelainVeneers: {
    src: "/images/porcelain dental veneers for smile makeover in Dubai.jpg",
    alt: "porcelain dental veneers for smile makeover in Dubai",
  },
  compositeBonding: {
    src: "/images/composite dental bonding for smile enhancement.jpg",
    alt: "composite dental bonding for smile enhancement",
  },
  teethWhitening: {
    src: "/images/teeth-bleaching.jpg",
    alt: "professional teeth whitening for Hollywood Smile treatment in Dubai",
  },
  dentalCrowns: {
    src: "/images/dental-crown.jpg",
    alt: "dental crowns for structural tooth restoration in Dubai",
  },
  orthodontics: {
    src: "/images/braces.jpg",
    alt: "orthodontic braces alignment for smile makeover in Dubai",
  },
  smileResult: {
    src: "/images/Hollywood Smile Treatment Dubai.jpg",
    alt: "Hollywood Smile Treatment Dubai natural-looking smile result",
  },
  dentistConsultation: {
    src: "/images/cosmetic dentistry consultation for smile makeover in Dubai.jpg",
    alt: "cosmetic dentistry consultation for smile makeover in Dubai",
  },
  aftercare: {
    src: "/images/veneer aftercare and maintenance advice from Dubai.jpg",
    alt: "veneer aftercare and maintenance advice from Dubai dentist",
  },
  clinicCTA: {
    src: "/images/RamaCare dental clinic in Jumeirah 1 Dubai.jpg",
    alt: "RamaCare dental clinic in Jumeirah 1 Dubai",
  },
};

/* -------------------------------------------------------------------------- */
/*  DATA CONTENT                                                              */
/* -------------------------------------------------------------------------- */
const heroData = {
  eyebrow: "Jumeirah 1, Dubai · Cosmetic Dentistry Consultation",
  h1: "Hollywood Smile Treatment Dubai for a Natural-Looking Smile",
  intro: [
    "Many patients who ask about a “Hollywood Smile” are not describing a single dental procedure — they are describing a look. Some are mainly bothered by tooth discoloration that whitening toothpaste never seemed to fix. Others are more concerned about uneven tooth edges, a chipped front tooth, small gaps between teeth, or a smile that feels slightly asymmetrical in photos. Because these concerns can have very different causes, cosmetic dentistry should never start with a fixed procedure — it should start with a conversation and an examination.",
    "Hollywood Smile Treatment Dubai is a term patients commonly use to search for cosmetic dentistry that improves the color, shape, size, and alignment of visible teeth. At RamaCare Polyclinic in Jumeirah 1, this typically means reviewing your teeth, gums, and bite before recommending an approach — which may involve veneers, bonding, whitening, or a combination of treatments depending on what your teeth actually need. This page walks through what the term means, what the treatment process generally involves, realistic costs, risks, and what to expect if you book a consultation.",
  ],
};

const whatIsHollywoodSmile = {
  h2: "What Is a Hollywood Smile?",
  paragraphs: [
    "A Hollywood Smile is a widely used cosmetic dentistry term rather than a standardized medical procedure. It generally refers to an aesthetically enhanced smile where tooth color, shape, size, alignment, proportion, and symmetry appear more balanced and cohesive.",
    "Depending on a patient's teeth and goals, achieving this look can involve porcelain or composite veneers, composite bonding, professional teeth whitening, dental crowns in specific structural situations, or orthodontic treatment when misalignment is the primary concern. There is no single formula. Two patients seeking a similar aesthetic outcome may end up with entirely different treatment plans once a dentist evaluates their tooth structure, gum health, and bite.",
  ],
  routes: ["Veneers", "Composite Bonding", "Teeth Whitening", "Dental Crowns", "Orthodontics"],
};

const TOC_ITEMS = [
  { id: "what-is-a-hollywood-smile", label: "What Is a Hollywood Smile?", live: true },
  { id: "what-does-treatment-involve", label: "What Does Hollywood Smile Treatment Involve?", live: true },
  { id: "suitable-candidate", label: "Who May Be a Suitable Candidate?", live: true },
  { id: "dental-assessment-first", label: "Why a Dental Assessment Comes First", live: true },
  { id: "step-by-step-journey", label: "Hollywood Smile Treatment Dubai: Your Step-by-Step Journey", live: true },
  { id: "veneers-vs-hollywood-smile", label: "Are Veneers the Same as a Hollywood Smile?", live: true },
  { id: "porcelain-vs-composite", label: "Porcelain vs Composite Veneers", live: true },
  { id: "digital-smile-design", label: "Digital Smile Design", live: true },
  { id: "how-many-teeth", label: "How Many Teeth Need Treatment?", live: true },
  { id: "does-it-hurt", label: "Does Hollywood Smile Treatment Hurt?", live: true },
  { id: "how-long-does-treatment-take", label: "How Long Does Treatment Take?", live: true },
  { id: "before-and-after", label: "Hollywood Smile Before and After", live: true },
  { id: "potential-benefits", label: "Potential Benefits", live: true },
  { id: "limitations-and-risks", label: "Limitations and Risks", live: true },
  { id: "how-long-do-veneers-last", label: "How Long Do Veneers Last?", live: true },
  { id: "aftercare-and-maintenance", label: "Aftercare and Maintenance", live: true },
  { id: "cost-in-dubai", label: "Hollywood Smile Cost in Dubai", live: true },
  { id: "insurance", label: "Insurance Coverage", live: true },
  { id: "hollywood-smile-vs-whitening", label: "Hollywood Smile vs Teeth Whitening", live: true },
  { id: "why-ramacare", label: "Why Choose RamaCare Polyclinic?", live: true },
  { id: "patient-journey", label: "Patient Journey Roadmap", live: true },
  { id: "faqs", label: "Frequently Asked Questions", live: true },
  { id: "book-consultation", label: "Book a Consultation", live: true },
];

const treatmentOptions = {
  h2: "What Does Hollywood Smile Treatment Involve?",
  intro:
    "Treatment is not identical for every patient. Depending on individual needs, a cosmetic dentist may recommend one or a combination of the following.",
  options: [
    {
      icon: Gem,
      title: "Dental Veneers",
      body: "Thin, custom-made shells bonded to the front surface of a tooth. Can adjust shape, color, size, and proportion without necessarily addressing every tooth in the smile.",
      image: IMAGES.planning,
    },
    {
      icon: Layers,
      title: "Composite Bonding",
      body: "Composite resin applied directly to a tooth to correct minor chips, close small gaps, or reshape an edge. Often more conservative than veneers, sometimes completed in a single visit.",
      image: IMAGES.compositeBonding,
    },
    {
      icon: Sun,
      title: "Teeth Whitening",
      body: "Improves natural tooth color and is often considered before or alongside other cosmetic treatments, so veneer or bonding shade can be matched for overall consistency.",
      image: IMAGES.teethWhitening,
    },
    {
      icon: Crown,
      title: "Dental Crowns",
      body: "Restorative rather than purely cosmetic — considered when a tooth has significant structural damage, a large filling, or has been weakened by a previous root canal.",
      image: IMAGES.dentalCrowns,
    },
    {
      icon: AlignCenter,
      title: "Orthodontic Treatment",
      body: "When the main concern is crooked or misaligned teeth, orthodontics may be a more appropriate long-term option than masking alignment with veneers.",
      image: IMAGES.orthodontics,
    },
  ],
};

const suitableCandidate = {
  h2: "Who May Be Suitable for a Hollywood Smile?",
  intro:
    "Patients typically raise concerns such as discolored or stained teeth, uneven tooth shape, small gaps, worn or chipped edges, mildly uneven proportions, or general smile symmetry. Suitability for cosmetic treatment, however, depends on more than aesthetic preference — it depends on the underlying health of the mouth.",
  concerns: [
    "Discolored or stained teeth",
    "Uneven tooth shape",
    "Small gaps between teeth",
    "Worn or chipped edges",
    "Mildly uneven proportions",
    "General smile symmetry",
  ],
  prerequisites: [
    "Healthy gums without active disease",
    "Adequate remaining natural tooth structure",
    "Good daily oral hygiene habits",
    "A stable bite without severe bruxism",
    "Realistic expectations about outcomes",
  ],
  closing:
    "Active tooth decay, gum disease, significant bite problems, or untreated infection typically need to be addressed first, since cosmetic work placed over unresolved dental issues tends to fail sooner and can complicate future treatment.",
};

const dentalAssessment = {
  h2: "Why a Dental Assessment Comes First",
  intro:
    "Cosmetic dentistry should begin with a clinical assessment rather than a predetermined procedure. A typical assessment may include:",
  steps: [
    { icon: Search, title: "Oral examination", body: "Checking teeth, gums, existing restorations, wear patterns, cracks, and decay." },
    { icon: ScanLine, title: "Bite assessment", body: "Reviewing occlusion, since an uneven bite can affect how veneers or crowns perform over time." },
    { icon: Smile, title: "Smile analysis", body: "Evaluating tooth proportions, gum display, facial symmetry, midline, tooth shape, and smile arc." },
    { icon: Camera, title: "Digital scanning or photography", body: "Used in many cases to support treatment planning and patient communication." },
    { icon: ClipboardCheck, title: "Diagnostic X-rays", body: "Recommended when clinically necessary to check root health and bone support." },
  ],
  closing: "Not every patient requires every diagnostic step; your dentist will determine what is relevant to your situation.",
};

const stepByStepJourney = {
  h2: "Hollywood Smile Treatment Dubai: Your Step-by-Step Journey",
  steps: [
    { title: "Consultation", body: "Discussing your concerns and cosmetic goals." },
    { title: "Smile assessment", body: "Evaluating teeth, gums, bite, and facial proportions." },
    { title: "Treatment planning", body: "Reviewing realistic options based on the assessment." },
    { title: "Smile design", body: "Planning tooth shape, size, and shade." },
    { title: "Tooth preparation", body: "Extent depends on treatment selected; not every veneer requires significant reduction." },
    { title: "Temporary restoration", body: "Used when clinically appropriate while final restorations are fabricated." },
    { title: "Final restoration", body: "Placement of veneers, bonding, or another selected treatment." },
    { title: "Bite & aesthetic check", body: "Confirming fit, bite, shape, shade, and comfort." },
    { title: "Maintenance", body: "Ongoing dental care to protect the result long term." },
  ],
};

const veneersVsHollywood = {
  h2: "Are Veneers the Same as a Hollywood Smile?",
  paragraphs: [
    "Veneers are commonly associated with cosmetic smile treatment, but the two terms are not interchangeable. A Hollywood Smile describes an aesthetic goal, while veneers are one possible method of achieving it — not the only one.",
    "Veneers are thin restorations bonded to the visible surface of a tooth. They can be used to modify tooth color, shape, size, and minor spacing, and to improve the appearance of certain irregularities such as uneven edges. Whether veneers are the right choice, or whether bonding, whitening, or another approach is more suitable, depends on the individual assessment described above.",
  ],
};

const porcelainVsComposite = {
  h2: "Porcelain vs Composite Veneers",
  intro:
    "Neither material is universally the better choice. The right option depends on tooth condition, bite, cosmetic goals, budget, and how much maintenance a patient is prepared to commit to.",
  cards: [
    {
      name: "Porcelain Veneers",
      tag: "Laboratory-Made",
      specs: [
        { label: "Material", value: "Dental ceramic" },
        { label: "Appearance", value: "Natural-looking & luminous" },
        { label: "Durability", value: "Generally more durable (10-15+ yrs)" },
        { label: "Process", value: "Laboratory fabrication" },
        { label: "Repairability", value: "May be more complex to repair" },
        { label: "Cost", value: "Typically higher initial cost" },
      ],
    },
    {
      name: "Composite Veneers",
      tag: "Chairside Direct",
      specs: [
        { label: "Material", value: "Composite resin" },
        { label: "Appearance", value: "Natural appearance" },
        { label: "Durability", value: "Generally less durable (5-7 yrs)" },
        { label: "Process", value: "Completed directly at clinic" },
        { label: "Repairability", value: "Easier to repair in chair" },
        { label: "Cost", value: "Typically lower initial cost" },
      ],
    },
  ],
  closing: "Your dentist can walk through how each material would apply to your specific teeth during a consultation.",
};

const digitalDesign = {
  h2: "Digital Smile Design",
  paragraphs: [
    "Digital smile design uses photographs and digital software to help evaluate tooth proportions, smile line, shade, shape, symmetry, and overall facial harmony before any irreversible treatment begins.",
    "It can support communication between dentist and patient by visualizing possible changes, but a digital mock-up should be understood as a planning tool rather than a guarantee of the exact final result, since living tissue, lighting, and laboratory fabrication all introduce natural variation.",
  ],
};

const howManyTeeth = {
  h2: "How Many Teeth Need Treatment?",
  paragraphs: [
    "There is no universal number. Some patients address a single chipped tooth, while others focus on the front six or eight teeth that show most prominently when smiling, and some choose to treat a larger number of visible teeth.",
    "The right number depends on smile width, how much of the mouth is visible when you smile, your cosmetic goals, the condition of individual teeth, and the treatment plan your dentist recommends after assessment.",
  ],
  tiers: [
    { title: "Single Focus", count: "1 Tooth", desc: "Correcting a single chipped, discolored, or uneven tooth to match neighbors." },
    { title: "Social Smile Line", count: "6 – 8 Teeth", desc: "Upper front teeth visible during natural conversation and smiling." },
    { title: "Full Arch Harmony", count: "10 – 12+ Teeth", desc: "Comprehensive visible teeth transformation for full visual balance." },
  ],
};

const comfortAndTimeline = {
  hurtH2: "Does Hollywood Smile Treatment Hurt?",
  hurtParas: [
    "Discomfort varies depending on the procedure. Local anesthesia may be used when teeth are being prepared, and some patients notice mild gum sensitivity, temporary tooth sensitivity, or pressure during fitting of veneers or crowns.",
    "Composite bonding and whitening are generally less involved than procedures requiring tooth preparation. Treatment is not guaranteed to be entirely free of discomfort, and patients should communicate any pain or unusual sensitivity to their dental team promptly so it can be addressed.",
  ],
  timeH2: "How Long Does Treatment Take?",
  timeParas: [
    "Timelines depend on the number of teeth involved, the type of veneer or restoration chosen, whether preparation is required, laboratory fabrication time, gum condition, and whether additional treatments are needed first.",
    "Composite bonding or whitening can sometimes be completed in a shorter timeframe, while laboratory-made porcelain restorations generally require more planning and multiple appointments to allow for proper fabrication and fitting. Your dentist can give you a realistic estimate once your treatment plan is finalized.",
  ],
};

const beforeAfter = {
  h2: "Hollywood Smile Before and After: What Should You Look For?",
  paras: [
    "Before-and-after photographs can help patients understand potential aesthetic changes, but they should be interpreted carefully. Lighting, camera angle, lip position, tooth hydration, and digital editing can all influence how a photo looks.",
    "When reviewing clinical examples, look for consistent photography conditions and be cautious of images that appear heavily retouched. A well-planned outcome should look proportionate to your own face and smile rather than identical to someone else's teeth. What works well for one patient's facial structure and tooth size will not necessarily suit another.",
  ],
};

const benefitsAndLimitations = {
  benefitsH2: "Potential Benefits of Hollywood Smile Treatment",
  benefitsIntro: "Cosmetic dental treatment offers several potential aesthetic advantages when planned carefully:",
  benefits: [
    "More uniform tooth color and brightness",
    "Improved tooth shape and proportion",
    "Better visual symmetry between teeth",
    "Correction of selected minor cosmetic irregularities (small chips or gaps)",
    "Improved overall smile harmony",
    "An outcome personalized to your teeth and facial proportions",
  ],
  benefitsClosing: "Cosmetic dental treatment addresses appearance-related concerns; it is not presented here as something that changes personality, guarantees confidence, or reverses the effects of aging.",
  limitsH2: "What Are the Limitations of Cosmetic Smile Treatment?",
  limitsIntro: "A balanced view of cosmetic dentistry includes its limitations, not only its benefits:",
  limits: [
    "Temporary tooth sensitivity",
    "Chipping or fracture of restorations under excessive force",
    "Staining around restoration margins over time",
    "Gum irritation or bite discomfort during adjustment period",
    "Ongoing need for maintenance and eventual replacement",
  ],
  limitsWarning: "If tooth structure has been removed to prepare a tooth for a veneer or crown, that preparation is generally not reversible. This is an important point to understand before committing to treatment, and your dentist should walk you through it during planning.",
};

const longevityAndMaintenance = {
  longH2: "How Long Do Veneers Last?",
  longParas: [
    "Longevity varies depending on the material used, oral hygiene habits, bite forces, bruxism (teeth grinding), diet, general habits such as nail-biting, and how consistently a patient attends dental check-ups.",
    "There is no guaranteed lifespan for veneers, and restorations may eventually need repair or replacement regardless of material. Regular dental examinations allow your dentist to monitor the condition of your veneers and catch early signs of wear before they become a larger issue.",
  ],
  maintH2: "How to Maintain Your Hollywood Smile",
  tips: [
    "Brush twice daily and clean between teeth with floss or interdental brushes",
    "Attend regular dental check-ups every 6 months",
    "Avoid biting very hard objects, such as ice or pen caps",
    "Don't use your teeth as tools to open packaging",
    "Manage bruxism if your dentist identifies it, often with a night guard",
    "Follow any dentist-specific aftercare instructions",
    "Maintain gum health alongside tooth appearance",
    "Limit habits that contribute to staining, such as heavy coffee or tobacco use",
  ],
  maintClosing: "Veneers and bonding do not make the underlying natural teeth immune to decay, so maintaining oral hygiene remains essential after treatment.",
};

const costAndInsurance = {
  costH2: "Hollywood Smile Cost in Dubai",
  costParas: [
    "Hollywood Smile Treatment Dubai pricing is not a fixed figure, and reputable clinics should not quote a price without an examination. Cost depends on the number of teeth being treated, the material selected (porcelain generally costs more than composite), laboratory fees, whether tooth preparation or gum treatment is required, whether digital smile planning is used, and whether bite correction or additional dental work is needed before cosmetic treatment can begin.",
    "An accurate quotation generally requires a clinical examination and a personalized treatment plan, since two patients with the same cosmetic goal can require very different amounts of work. We would encourage you not to choose a clinic based solely on the lowest advertised price — the material, planning process, and long-term follow-up care all affect the value of treatment, not just the initial number.",
  ],
  insH2: "Does Insurance Cover Hollywood Smile Treatment?",
  insParas: [
    "Cosmetic dentistry is often treated differently from medically necessary restorative care under most insurance policies. Whether any part of your treatment is covered depends on your specific policy, your dental benefits, whether a procedure is classified as medically necessary, the specific treatment involved, your provider network, and your annual coverage limits.",
    "We recommend confirming coverage details with your insurance provider before starting treatment, and our team can help you understand which parts of a proposed plan may or may not typically fall under cosmetic exclusions.",
  ],
};

const comparisonMatrix = {
  h2: "Hollywood Smile vs Teeth Whitening & Restorative Treatments",
  rows: [
    { treatment: "Teeth Whitening", purpose: "Changes natural tooth shade", scope: "Color only", prep: "None" },
    { treatment: "Dental Bonding", purpose: "Modifies selected tooth shape, chips, or gaps", scope: "Local shape & color", prep: "Minimal" },
    { treatment: "Veneers", purpose: "Changes the appearance of visible tooth surface", scope: "Shape, size, color, spacing", prep: "Minimal to Moderate" },
    { treatment: "Crowns", purpose: "Restores structurally compromised teeth", scope: "360° structural support", prep: "Full coverage prep" },
    { treatment: "Orthodontics", purpose: "Changes tooth alignment & arch positioning", scope: "Root & alignment", prep: "No tooth removal" },
  ],
  closing: "Whitening cannot change tooth shape or close gaps, and veneers are not simply a whitening procedure — they involve altering the visible surface of the tooth itself. Understanding this distinction helps set realistic expectations before choosing a treatment path.",
};

const whyRamaCare = {
  h2: "Why Choose RamaCare Polyclinic?",
  pillars: [
    {
      icon: Stethoscope,
      title: "Professional Dental Care",
      body: "Cosmetic dental treatment should be carried out by qualified dental professionals who prioritize oral health alongside aesthetics, rather than treating appearance in isolation.",
    },
    {
      icon: HeartHandshake,
      title: "Personalized Smile Planning",
      body: "At RamaCare, treatment recommendations are based on your facial proportions, tooth condition, bite, oral health status, and personal goals — not a standardized package.",
    },
    {
      icon: Building2,
      title: "Multidisciplinary Environment",
      body: "As a multispecialty polyclinic, RamaCare allows cosmetic dental concerns to be considered alongside general oral health, addressing decay or gum issues in the same care pathway.",
    },
    {
      icon: ShieldCheck,
      title: "Patient-Centered Communication",
      body: "We aim to explain treatment options, realistic limitations, cost considerations, and maintenance requirements clearly before any treatment begins.",
    },
  ],
  location: "RamaCare Polyclinic is based in Jumeirah 1, Dubai, making consultations accessible for patients across the city.",
};

const faqsData = [
  { q: "What is a Hollywood Smile?", a: "It's a commonly used cosmetic dentistry term for a smile with improved color, shape, size, and symmetry. It isn't one fixed procedure — it's an aesthetic goal that can be reached through different combinations of dental treatment." },
  { q: "What does Hollywood Smile treatment involve?", a: "Depending on your teeth, it may involve veneers, composite bonding, teeth whitening, crowns for structurally compromised teeth, or orthodontic treatment. Your dentist determines the right combination after an examination of your teeth, gums, and bite." },
  { q: "Is Hollywood Smile the same as veneers?", a: "Not exactly. Hollywood Smile describes the aesthetic outcome, while veneers are one possible way to achieve it. Some patients reach similar goals through bonding or whitening instead, depending on their dental condition." },
  { q: "Who is suitable for a Hollywood Smile?", a: "Patients with healthy gums, adequate tooth structure, a stable bite, and realistic expectations are generally good candidates. Active decay, gum disease, or untreated infection usually need to be resolved before cosmetic treatment begins." },
  { q: "What are Hollywood Smile veneers?", a: "These are thin, custom-made shells bonded to the front of teeth to adjust color, shape, size, and minor spacing. They can be made from porcelain or composite resin, depending on your goals and clinical situation." },
  { q: "Are porcelain or composite veneers better?", a: "Neither is universally better. Porcelain is generally more durable and often costs more; composite is usually more affordable and easier to repair. The right choice depends on your teeth, bite, and budget." },
  { q: "How many teeth usually need treatment?", a: "There's no fixed number. Some patients treat one tooth, others treat the front six or eight, and some treat more. It depends on your smile width, visible teeth, and cosmetic goals." },
  { q: "Does Hollywood Smile Treatment Dubai hurt?", a: "Discomfort varies by procedure. Local anesthesia may be used for tooth preparation, and mild sensitivity or gum tenderness can occur afterward. It should not be assumed to be entirely pain-free, and any discomfort should be reported to your dentist." },
  { q: "How long does Hollywood Smile treatment take?", a: "Timing depends on the number of teeth, material, and whether laboratory fabrication is needed. Bonding or whitening can be quicker, while porcelain veneers usually require multiple appointments over a longer period." },
  { q: "Are veneers permanent?", a: "Veneers are long-term restorations, but they are not permanent in the sense of lasting a lifetime without maintenance. They may eventually need repair or replacement, and tooth preparation involved in placing them is generally not reversible." },
  { q: "How long do veneers last?", a: "Lifespan varies with material, oral hygiene, bite forces, and habits like grinding. There's no guaranteed duration, but regular dental check-ups help monitor their condition and catch issues early." },
  { q: "Can veneers damage natural teeth?", a: "Veneers themselves don't damage healthy teeth, but preparation may involve removing a thin layer of enamel, which is generally not reversible. Poor oral hygiene after treatment can still lead to decay under or around a veneer." },
  { q: "Can I get a Hollywood Smile if I have cavities?", a: "Active cavities typically need to be treated first. Placing cosmetic restorations over untreated decay can allow the problem to progress underneath, so a full oral health assessment usually comes before cosmetic planning." },
  { q: "Can I get veneers if I have gum disease?", a: "Gum disease generally needs to be stabilized or treated first, since inflamed or unhealthy gums can affect how veneers fit and how long they last. Your dentist will assess gum health during your consultation." },
  { q: "Can veneers fix crooked teeth?", a: "Veneers can sometimes mask minor alignment irregularities, but significant crookedness is often better addressed with orthodontic treatment. Covering seriously misaligned teeth with veneers isn't always the most conservative or stable long-term option." },
  { q: "What is the difference between veneers and teeth whitening?", a: "Whitening changes the natural shade of your existing teeth but can't alter their shape. Veneers change the visible surface of the tooth itself, addressing shape, size, and color together." },
  { q: "How much does Hollywood Smile Treatment Dubai cost?", a: "Cost depends on the number of teeth, material chosen, laboratory fees, and any additional treatment needed beforehand. An accurate quote requires an in-person or virtual examination and a personalized treatment plan." },
  { q: "Does insurance cover Hollywood Smile treatment?", a: "Coverage varies by policy, since cosmetic dentistry is often treated differently from medically necessary care. Check with your insurance provider about which parts of your plan, if any, may be covered." },
  { q: "Can I eat normally after getting veneers?", a: "Most patients return to normal eating once any post-treatment sensitivity settles, though it's generally wise to avoid biting very hard foods or objects directly with veneers to reduce the risk of chipping." },
  { q: "How do I book a Hollywood Smile consultation at RamaCare?", a: "You can call RamaCare Polyclinic, send a WhatsApp message, or use the online booking option to schedule a smile assessment at our Jumeirah 1, Dubai location." },
];

/* -------------------------------------------------------------------------- */
/*  UNIQUE VISUAL SIGNATURE — "The Pulsing Smile Arc Motif"                    */
/* -------------------------------------------------------------------------- */
function SmileArc({ size = 280, pointCount = 8 }) {
  const width = size;
  const height = size * 0.5;
  const arcPath = `M ${width * 0.08} ${height * 0.25} Q ${width * 0.5} ${height * 1.05} ${width * 0.92} ${height * 0.25}`;
  const points = Array.from({ length: pointCount }, (_, i) => {
    const t = i / (pointCount - 1);
    const x = width * 0.08 + t * width * 0.84;
    const y =
      (1 - t) * (1 - t) * (height * 0.25) +
      2 * (1 - t) * t * (height * 1.05) +
      t * t * (height * 0.25);
    return { x, y, delay: i * 0.18 };
  });

  return (
    <svg viewBox={`0 0 ${width} ${height}`} width={width} height={height} className="overflow-visible">
      <path d={arcPath} fill="none" stroke={`${BRAND.gold}66`} strokeWidth={1.5} strokeLinecap="round" />
      {points.map((p, i) => (
        <motion.circle
          key={i}
          cx={p.x}
          cy={p.y}
          r={i === Math.floor(pointCount / 2) ? 5 : 3}
          fill={BRAND.gold}
          initial={{ opacity: 0.25, scale: 0.7 }}
          animate={{ opacity: [0.25, 1, 0.25], scale: [0.7, 1.1, 0.7] }}
          transition={{ duration: 2.4, repeat: Infinity, delay: p.delay, ease: "easeInOut" }}
        />
      ))}
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/*  SECTION 1: HERO — "Marquee Spotlight Stage" with Real Photography          */
/* -------------------------------------------------------------------------- */
function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: BRAND.cream, fontFamily: FONT_BODY }}>
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 pt-8 pb-16 md:px-10 md:pt-10 md:pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* BREADCRUMB UI */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-[13px] font-medium text-neutral-500">
              <li>
                <Link href="/" className="transition-colors hover:text-[#1F5E4B]">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/services/dental-dubai" className="transition-colors hover:text-[#1F5E4B]">
                  Dental Services
                </Link>
              </li>
              <li>/</li>
              <li className="text-[#1F5E4B]" aria-current="page">
                Hollywood Smile Treatment Dubai
              </li>
            </ol>
          </nav>

          <div
            className="mb-7 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[11.5px] font-semibold uppercase tracking-[0.16em]"
            style={{ borderColor: `${BRAND.teal}33`, color: BRAND.teal, backgroundColor: `${BRAND.teal}0d` }}
          >
            <MapPin size={13} strokeWidth={2.2} />
            {heroData.eyebrow}
          </div>

          <h1
            className="max-w-xl text-[2.15rem] leading-[1.16] tracking-tight md:text-[2.8rem] lg:text-[3rem]"
            style={{ fontFamily: FONT_DISPLAY, fontWeight: 700, color: BRAND.darkTeal }}
          >
            {heroData.h1}
          </h1>

          <div className="mt-8 max-w-xl space-y-5">
            {heroData.intro.map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.15 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="text-[14.5px] leading-[1.9] text-neutral-700 md:text-[15.5px]"
              >
                {para}
              </motion.p>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#book-consultation"
              className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[13.5px] font-semibold uppercase tracking-[0.08em] text-white shadow-md transition-transform hover:-translate-y-0.5"
              style={{ backgroundColor: BRAND.teal }}
            >
              Book a Consultation
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#what-is-a-hollywood-smile"
              className="inline-flex items-center gap-2 text-[14px] font-semibold underline underline-offset-8"
              style={{ color: BRAND.darkTeal, textDecorationColor: BRAND.gold }}
            >
              What does the term mean?
            </a>
          </div>
        </motion.div>

        {/* HERO SPOTLIGHT PANEL WITH REAL IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md"
        >
          <div
            className="relative overflow-hidden rounded-[28px] border p-3 shadow-2xl"
            style={{ backgroundColor: BRAND.darkTeal, borderColor: `${BRAND.gold}44` }}
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[20px]">
              <img
                src={IMAGES.hero.src}
                alt={IMAGES.hero.alt}
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F3B2E] via-transparent to-transparent" />
            </div>

            <div className="relative p-6 text-center">
              <div className="mb-3 flex items-center justify-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em]" style={{ color: BRAND.gold }}>
                <Star size={13} color={BRAND.gold} fill={BRAND.gold} />
                Now Reviewing
              </div>

              <div className="flex justify-center my-3">
                <SmileArc size={220} pointCount={8} />
              </div>

              <p className="text-[12.5px] font-medium text-white/80">
                Color · Shape · Alignment · Symmetry
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  SECTION 2: TABLE OF CONTENTS — Short UI Simple Horizontal Navigation Bar   */
/* -------------------------------------------------------------------------- */
function TableOfContents() {
  const [activeSectionId, setActiveSectionId] = useState("what-is-a-hollywood-smile");
  const scrollContainerRef = useRef(null);

  const tocPills = [
    { id: "what-is-a-hollywood-smile", label: "What Is a Hollywood Smile?" },
    { id: "what-does-treatment-involve", label: "Treatment Options" },
    { id: "suitable-candidate", label: "Who Is Suitable?" },
    { id: "dental-assessment-first", label: "Assessment First" },
    { id: "step-by-step-journey", label: "Step-by-Step Journey" },
    { id: "veneers-vs-hollywood-smile", label: "Veneers vs Goal" },
    { id: "porcelain-vs-composite", label: "Porcelain vs Composite" },
    { id: "digital-smile-design", label: "Digital Design" },
    { id: "how-many-teeth", label: "Teeth Count" },
    { id: "does-it-hurt", label: "Comfort & Time" },
    { id: "before-and-after", label: "Before & After" },
    { id: "potential-benefits", label: "Benefits & Risks" },
    { id: "how-long-do-veneers-last", label: "Longevity & Care" },
    { id: "cost-in-dubai", label: "Cost & Insurance" },
    { id: "why-ramacare", label: "Why RamaCare" },
    { id: "faqs", label: "FAQs" },
    { id: "book-consultation", label: "Book Consultation" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 160;
      for (let i = tocPills.length - 1; i >= 0; i--) {
        const el = document.getElementById(tocPills[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSectionId(tocPills[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollRail = (direction) => {
    if (scrollContainerRef.current) {
      const amount = direction === "left" ? -260 : 260;
      scrollContainerRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  const scrollToSection = (e, id) => {
    if (e) e.preventDefault();
    const targetEl = document.getElementById(id);
    if (targetEl) {
      let topPos = 0;
      let curr = targetEl;
      while (curr) {
        topPos += curr.offsetTop;
        curr = curr.offsetParent;
      }
      const finalY = Math.max(0, topPos - 130);
      window.scrollTo({ top: finalY, behavior: "smooth" });
      setActiveSectionId(id);
    }
  };

  return (
    <nav
      aria-label="Table of contents horizontal navigation"
      className="sticky top-[70px] z-40 border-y backdrop-blur-md shadow-xs transition-all"
      style={{
        backgroundColor: "rgba(249, 247, 242, 0.95)",
        borderColor: `${BRAND.teal}22`,
        fontFamily: FONT_BODY,
      }}
    >
      <div className="mx-auto flex h-12 max-w-7xl items-center gap-2 px-3 sm:px-6 lg:px-8">
        {/* Left Badge */}
        <div className="flex flex-none items-center gap-1.5 rounded-full px-3 py-1 text-[11.5px] font-bold uppercase tracking-[0.1em]" style={{ backgroundColor: `${BRAND.teal}14`, color: BRAND.darkTeal }}>
          <Sparkles size={12} color={BRAND.teal} />
          <span className="hidden md:inline">Quick Navigation</span>
          <span className="md:hidden">Topics</span>
        </div>

        {/* Scroll Left Button */}
        <button
          type="button"
          onClick={() => scrollRail("left")}
          className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-white shadow-sm border text-neutral-700 hover:bg-[#1F5E4B] hover:text-white transition-all active:scale-95"
          style={{ borderColor: `${BRAND.teal}22` }}
          aria-label="Scroll topics left"
        >
          <ChevronLeft size={14} />
        </button>

        {/* Horizontal Scroll Pill Rail */}
        <div
          ref={scrollContainerRef}
          className="no-scrollbar flex w-full items-center gap-2 overflow-x-auto scroll-smooth py-1"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {tocPills.map((item) => {
            const isActive = activeSectionId === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => scrollToSection(e, item.id)}
                className="flex flex-none items-center gap-1.5 rounded-full border px-3.5 py-1 text-[12px] font-semibold transition-all whitespace-nowrap"
                style={{
                  borderColor: isActive ? BRAND.teal : `${BRAND.teal}1f`,
                  backgroundColor: isActive ? BRAND.teal : "#FFFFFF",
                  color: isActive ? "#FFFFFF" : BRAND.darkTeal,
                  boxShadow: isActive ? "0 2px 8px rgba(31, 94, 75, 0.2)" : "none",
                }}
              >
                <span
                  className="h-1.5 w-1.5 rounded-full flex-none"
                  style={{ backgroundColor: isActive ? BRAND.gold : `${BRAND.teal}44` }}
                />
                {item.label}
              </a>
            );
          })}
        </div>

        {/* Scroll Right Button */}
        <button
          type="button"
          onClick={() => scrollRail("right")}
          className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-white shadow-sm border text-neutral-700 hover:bg-[#1F5E4B] hover:text-white transition-all active:scale-95"
          style={{ borderColor: `${BRAND.teal}22` }}
          aria-label="Scroll topics right"
        >
          <ChevronRight size={14} />
        </button>
      </div>
    </nav>
  );
}

/* -------------------------------------------------------------------------- */
/*  SECTION 3: WHAT IS A HOLLYWOOD SMILE? — With Smile Assessment Image        */
/* -------------------------------------------------------------------------- */
function WhatIsHollywoodSmile() {
  return (
    <section
      id="what-is-a-hollywood-smile"
      className="scroll-mt-24 px-6 py-20 md:px-10 md:py-28"
      style={{ backgroundColor: BRAND.cream, fontFamily: FONT_BODY }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-8" style={{ backgroundColor: BRAND.gold }} />
              <span className="text-[12px] font-semibold uppercase tracking-[0.16em]" style={{ color: BRAND.teal }}>
                Defining the Term
              </span>
            </div>
            <h2
              className="mt-4 text-[1.9rem] leading-tight md:text-[2.3rem]"
              style={{ fontFamily: FONT_DISPLAY, fontWeight: 700, color: BRAND.darkTeal }}
            >
              {whatIsHollywoodSmile.h2}
            </h2>
            <div className="mt-6 space-y-5">
              {whatIsHollywoodSmile.paragraphs.map((p, i) => (
                <p key={i} className="text-[15px] leading-[1.9] text-neutral-700 md:text-[15.5px]">
                  {p}
                </p>
              ))}
            </div>
          </motion.div>

          {/* ASSESSMENT PHOTO & ROUTE MAP */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden rounded-[28px] border shadow-xl bg-white p-3"
            style={{ borderColor: `${BRAND.teal}1a` }}
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[20px] mb-6">
              <img
                src={IMAGES.assessment.src}
                alt={IMAGES.assessment.alt}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="p-4 rounded-[20px]" style={{ backgroundColor: BRAND.darkTeal }}>
              <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em]" style={{ color: BRAND.gold }}>
                <Smile size={14} color={BRAND.gold} />
                One Goal, Several Possible Routes
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {whatIsHollywoodSmile.routes.map((route) => (
                  <span
                    key={route}
                    className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[12px] font-medium text-white"
                    style={{ borderColor: `${BRAND.gold}44`, backgroundColor: "rgba(255,255,255,0.05)" }}
                  >
                    <CheckCircle2 size={12} color={BRAND.gold} /> {route}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  SECTION 4: WHAT DOES TREATMENT INVOLVE? — "Mood Board & Veneer Images"   */
/* -------------------------------------------------------------------------- */
function TreatmentOptions() {
  const tilts = ["-rotate-1", "rotate-1", "-rotate-1", "rotate-1", "-rotate-1"];

  return (
    <section
      id="what-does-treatment-involve"
      className="scroll-mt-24 px-6 py-20 md:px-10 md:py-28"
      style={{ backgroundColor: BRAND.creamLight, fontFamily: FONT_BODY }}
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-8" style={{ backgroundColor: BRAND.gold }} />
            <span className="text-[12px] font-semibold uppercase tracking-[0.16em]" style={{ color: BRAND.teal }}>
              The Design Board
            </span>
          </div>
          <h2 className="mt-4 text-[1.9rem] leading-tight md:text-[2.3rem]" style={{ fontFamily: FONT_DISPLAY, fontWeight: 700, color: BRAND.darkTeal }}>
            {treatmentOptions.h2}
          </h2>
          <p className="mt-6 text-[15px] leading-[1.9] text-neutral-700 md:text-[15.5px]">{treatmentOptions.intro}</p>
        </motion.div>

        {/* MOOD BOARD POLAROIDS & REAL IMAGES */}
        <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {treatmentOptions.options.map((opt, i) => {
            const Icon = opt.icon;
            return (
              <motion.div
                key={opt.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className={`relative ${tilts[i]} rounded-[20px] border bg-white p-3.5 pb-6 shadow-md transition-transform hover:rotate-0 hover:shadow-xl flex flex-col justify-between`}
                style={{ borderColor: `${BRAND.teal}1a` }}
              >
                <span
                  className="absolute -top-2.5 left-1/2 z-10 h-5 w-5 -translate-x-1/2 rounded-full border-2 shadow-xs"
                  style={{ backgroundColor: BRAND.teal, borderColor: BRAND.creamLight }}
                />
                
                {opt.image ? (
                  <div className="relative aspect-[5/4] w-full overflow-hidden rounded-[14px]">
                    <img src={opt.image.src} alt={opt.image.alt} className="h-full w-full object-cover" />
                  </div>
                ) : (
                  <div className="relative aspect-[5/4] w-full overflow-hidden rounded-[14px] flex items-center justify-center p-6 text-center" style={{ backgroundColor: BRAND.creamLight }}>
                    <Icon size={32} color={BRAND.teal} strokeWidth={1.5} />
                  </div>
                )}

                <div className="mt-4 flex items-start gap-3 px-2">
                  <div className="flex h-9 w-9 flex-none items-center justify-center rounded-full" style={{ backgroundColor: `${BRAND.teal}14` }}>
                    <Icon size={16} color={BRAND.teal} strokeWidth={1.8} />
                  </div>
                  <div>
                    <h3 className="text-[14.5px] font-bold" style={{ fontFamily: FONT_DISPLAY, color: BRAND.darkTeal }}>
                      {opt.title}
                    </h3>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-neutral-600">{opt.body}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  SECTION 5: WHO MAY BE SUITABLE? — "Rope Divider Double Docket"           */
/* -------------------------------------------------------------------------- */
function SuitableCandidate() {
  return (
    <section
      id="suitable-candidate"
      className="scroll-mt-24 px-6 py-20 md:px-10 md:py-28"
      style={{ backgroundColor: BRAND.cream, fontFamily: FONT_BODY }}
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8" style={{ backgroundColor: BRAND.gold }} />
            <span className="text-[12px] font-semibold uppercase tracking-[0.16em]" style={{ color: BRAND.teal }}>
              Candidacy Requirements
            </span>
            <span className="h-px w-8" style={{ backgroundColor: BRAND.gold }} />
          </div>
          <h2 className="mt-4 text-[1.9rem] leading-tight md:text-[2.3rem]" style={{ fontFamily: FONT_DISPLAY, fontWeight: 700, color: BRAND.darkTeal }}>
            {suitableCandidate.h2}
          </h2>
          <p className="mt-6 text-[15px] leading-[1.9] text-neutral-700 md:text-[15.5px]">{suitableCandidate.intro}</p>
        </motion.div>

        <div className="relative mt-14 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-0">
          <div
            className="pointer-events-none absolute left-1/2 top-2 hidden h-[calc(100%-16px)] w-px -translate-x-1/2 md:block"
            style={{
              backgroundImage: `radial-gradient(circle, ${BRAND.gold} 2px, transparent 2.5px)`,
              backgroundSize: "1px 16px",
              backgroundRepeat: "repeat-y",
              opacity: 0.7,
            }}
          />

          {/* CONCERNS */}
          <motion.div
            initial={{ opacity: 0, x: -14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="md:pr-12"
          >
            <span className="text-[11.5px] font-bold uppercase tracking-[0.14em]" style={{ color: BRAND.teal }}>
              What Patients Usually Raise
            </span>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {suitableCandidate.concerns.map((c) => (
                <span
                  key={c}
                  className="rounded-full border px-4 py-2 text-[13px] font-medium shadow-2xs"
                  style={{ borderColor: `${BRAND.teal}33`, color: BRAND.darkTeal, backgroundColor: "#FFFFFF" }}
                >
                  {c}
                </span>
              ))}
            </div>
          </motion.div>

          {/* PREREQUISITES */}
          <motion.div
            initial={{ opacity: 0, x: 14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="md:pl-12"
          >
            <span className="text-[11.5px] font-bold uppercase tracking-[0.14em]" style={{ color: BRAND.teal }}>
              What Candidacy Actually Requires
            </span>
            <div className="mt-5 space-y-2.5">
              {suitableCandidate.prerequisites.map((p) => (
                <div key={p} className="flex items-center gap-3 rounded-xl border bg-white px-4 py-3 shadow-2xs" style={{ borderColor: `${BRAND.teal}14` }}>
                  <CheckCircle2 size={16} color={BRAND.teal} className="flex-none" />
                  <span className="text-[13.5px] font-medium" style={{ color: BRAND.darkTeal }}>{p}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mx-auto mt-12 max-w-3xl rounded-2xl border p-5 text-center shadow-xs" style={{ backgroundColor: "#FFFFFF", borderColor: `${BRAND.gold}88` }}>
          <p className="text-[14px] leading-[1.8] text-neutral-700">
            <strong style={{ color: BRAND.darkTeal }}>Medical Priority Notice:</strong> {suitableCandidate.closing}
          </p>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  SECTION 6: WHY A DENTAL ASSESSMENT COMES FIRST — "Consultation Photo"     */
/* -------------------------------------------------------------------------- */
function DentalAssessmentFirst() {
  return (
    <section
      id="dental-assessment-first"
      className="scroll-mt-24 px-6 py-20 md:px-10 md:py-28"
      style={{ backgroundColor: BRAND.darkTeal, fontFamily: FONT_BODY }}
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-8" style={{ backgroundColor: BRAND.gold }} />
            <span className="text-[12px] font-semibold uppercase tracking-[0.16em]" style={{ color: BRAND.gold }}>
              Before Any Procedure
            </span>
          </div>
          <h2 className="mt-4 text-[1.9rem] leading-tight md:text-[2.3rem]" style={{ fontFamily: FONT_DISPLAY, fontWeight: 700, color: "#FFFFFF" }}>
            {dentalAssessment.h2}
          </h2>
          <p className="mt-6 text-[15px] leading-[1.9] text-white/80 md:text-[15.5px]">{dentalAssessment.intro}</p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14 items-center">
          {/* DOSSIER BOARD */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-[24px] p-7 pt-10 md:p-9 md:pt-12 shadow-2xl"
            style={{ backgroundColor: BRAND.creamLight }}
          >
            <span
              className="absolute -top-3.5 left-1/2 h-7 w-20 -translate-x-1/2 rounded-md shadow-md"
              style={{ backgroundColor: BRAND.gold }}
            />
            <div className="divide-y" style={{ borderColor: `${BRAND.teal}14` }}>
              {dentalAssessment.steps.map((step) => {
                const Icon = step.icon;
                return (
                  <div key={step.title} className="flex items-start gap-4 py-4 first:pt-0 last:pb-0">
                    <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full" style={{ backgroundColor: `${BRAND.teal}14` }}>
                      <Icon size={16} color={BRAND.teal} strokeWidth={1.8} />
                    </span>
                    <div>
                      <h3 className="text-[14.5px] font-bold" style={{ color: BRAND.darkTeal }}>
                        {step.title}
                      </h3>
                      <p className="mt-1 text-[13px] leading-relaxed text-neutral-600">{step.body}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* REAL CONSULTATION PHOTO */}
          <motion.div
            initial={{ opacity: 0, rotate: -2, scale: 0.95 }}
            whileInView={{ opacity: 1, rotate: -2, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden rounded-[24px] border-2 p-2 shadow-2xl bg-white"
            style={{ borderColor: BRAND.gold }}
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[18px]">
              <img
                src={IMAGES.dentistConsultation.src}
                alt={IMAGES.dentistConsultation.alt}
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center text-[14.5px] leading-[1.9] text-white/60">
          {dentalAssessment.closing}
        </p>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  SECTION 7: STEP-BY-STEP JOURNEY — "Film Reel Strip"                        */
/* -------------------------------------------------------------------------- */
function StepByStepJourney() {
  const sprockets = Array.from({ length: 22 });
  const scrollRef = useRef(null);

  const scrollRail = (direction) => {
    if (scrollRef.current) {
      const amount = direction === "left" ? -300 : 300;
      scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  return (
    <section
      id="step-by-step-journey"
      className="scroll-mt-24 px-6 py-20 md:px-10 md:py-28"
      style={{ backgroundColor: BRAND.cream, fontFamily: FONT_BODY }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-8" style={{ backgroundColor: BRAND.gold }} />
              <span className="text-[12px] font-semibold uppercase tracking-[0.16em]" style={{ color: BRAND.teal }}>
                Reel by Reel
              </span>
            </div>
            <h2 className="mt-4 text-[1.9rem] leading-tight md:text-[2.3rem]" style={{ fontFamily: FONT_DISPLAY, fontWeight: 700, color: BRAND.darkTeal }}>
              {stepByStepJourney.h2}
            </h2>
          </motion.div>

          {/* ARROW CONTROLS */}
          <div className="flex items-center gap-2 flex-none">
            <button
              type="button"
              onClick={() => scrollRail("left")}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-xs border text-neutral-700 hover:bg-[#1F5E4B] hover:text-white transition-all active:scale-95"
              style={{ borderColor: `${BRAND.teal}22` }}
              aria-label="Previous step"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              type="button"
              onClick={() => scrollRail("right")}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-xs border text-neutral-700 hover:bg-[#1F5E4B] hover:text-white transition-all active:scale-95"
              style={{ borderColor: `${BRAND.teal}22` }}
              aria-label="Next step"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* FILM STRIP CONTAINER */}
        <div className="relative mt-12 overflow-hidden rounded-[24px] shadow-2xl" style={{ backgroundColor: BRAND.darkTeal }}>
          <div className="flex justify-around px-4 pt-3">
            {sprockets.map((_, i) => (
              <span key={i} className="h-2 w-2 rounded-xs" style={{ backgroundColor: `${BRAND.gold}44` }} />
            ))}
          </div>

          <div
            ref={scrollRef}
            className="no-scrollbar overflow-x-auto px-6 py-8 scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
            <div className="flex min-w-max items-start gap-8 px-2">
              {stepByStepJourney.steps.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  className="flex w-[160px] flex-none flex-col items-center text-center"
                >
                  <div
                    className="flex h-20 w-20 items-center justify-center rounded-full border-2 shadow-inner"
                    style={{ borderColor: BRAND.gold, backgroundColor: `${BRAND.gold}1a` }}
                  >
                    <span className="text-[20px] font-bold" style={{ fontFamily: FONT_DISPLAY, color: BRAND.gold }}>
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="mt-4 text-[14px] font-bold text-white">{step.title}</h3>
                  <p className="mt-1.5 text-[12px] leading-relaxed text-white/60">{step.body}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="flex justify-around px-4 pb-3">
            {sprockets.map((_, i) => (
              <span key={i} className="h-2 w-2 rounded-xs" style={{ backgroundColor: `${BRAND.gold}44` }} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  SECTION 8: VENEERS VS HOLLYWOOD SMILE                                     */
/* -------------------------------------------------------------------------- */
function VeneersVsHollywood() {
  return (
    <section
      id="veneers-vs-hollywood-smile"
      className="scroll-mt-24 px-6 py-20 md:px-10 md:py-28"
      style={{ backgroundColor: BRAND.creamLight, fontFamily: FONT_BODY }}
    >
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8" style={{ backgroundColor: BRAND.gold }} />
            <span className="text-[12px] font-semibold uppercase tracking-[0.16em]" style={{ color: BRAND.teal }}>
              A Common Distinction
            </span>
            <span className="h-px w-8" style={{ backgroundColor: BRAND.gold }} />
          </div>
          <h2 className="mt-4 text-[1.9rem] leading-tight md:text-[2.3rem]" style={{ fontFamily: FONT_DISPLAY, fontWeight: 700, color: BRAND.darkTeal }}>
            {veneersVsHollywood.h2}
          </h2>
        </motion.div>

        <div className="relative mt-14 grid grid-cols-1 items-center gap-6 sm:grid-cols-[1fr_auto_1fr]">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-[24px] p-8 text-center shadow-xl"
            style={{ backgroundColor: BRAND.darkTeal }}
          >
            <span className="text-[11px] font-bold uppercase tracking-[0.16em]" style={{ color: BRAND.gold }}>
              The Goal
            </span>
            <p className="mt-3 text-[22px] font-bold text-white" style={{ fontFamily: FONT_DISPLAY }}>
              Hollywood Smile
            </p>
            <p className="mt-2 text-[13px] text-white/60">An aesthetic outcome</p>
          </motion.div>

          <div className="flex justify-center">
            <span
              className="flex h-14 w-14 items-center justify-center rounded-full text-[22px] font-bold shadow-md"
              style={{ backgroundColor: BRAND.gold, color: BRAND.darkTeal }}
            >
              ≠
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-[24px] border p-8 text-center shadow-md bg-white"
            style={{ borderColor: `${BRAND.teal}22` }}
          >
            <span className="text-[11px] font-bold uppercase tracking-[0.16em]" style={{ color: BRAND.teal }}>
              One Method
            </span>
            <p className="mt-3 text-[22px] font-bold" style={{ fontFamily: FONT_DISPLAY, color: BRAND.darkTeal }}>
              Dental Veneers
            </p>
            <p className="mt-2 text-[13px] text-neutral-600">One way to reach it</p>
          </motion.div>
        </div>

        <div className="mx-auto mt-12 max-w-3xl space-y-4">
          {veneersVsHollywood.paragraphs.map((p, i) => (
            <p key={i} className="text-[15px] leading-[1.9] text-neutral-700 md:text-[15.5px]">
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  SECTION 9: PORCELAIN VS COMPOSITE VENEERS — With Real Material Photos     */
/* -------------------------------------------------------------------------- */
function PorcelainVsComposite() {
  return (
    <section
      id="porcelain-vs-composite"
      className="scroll-mt-24 px-6 py-20 md:px-10 md:py-28"
      style={{ backgroundColor: BRAND.cream, fontFamily: FONT_BODY }}
    >
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-8" style={{ backgroundColor: BRAND.gold }} />
            <span className="text-[12px] font-semibold uppercase tracking-[0.16em]" style={{ color: BRAND.teal }}>
              Material Choice
            </span>
          </div>
          <h2 className="mt-4 text-[1.9rem] leading-tight md:text-[2.3rem]" style={{ fontFamily: FONT_DISPLAY, fontWeight: 700, color: BRAND.darkTeal }}>
            {porcelainVsComposite.h2}
          </h2>
          <p className="mt-6 text-[15px] leading-[1.9] text-neutral-700 md:text-[15.5px]">{porcelainVsComposite.intro}</p>
        </motion.div>

        {/* MATERIAL PHOTO SHOWCASE */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 mb-10">
          <div className="overflow-hidden rounded-[20px] border bg-white p-2 shadow-md" style={{ borderColor: `${BRAND.teal}1a` }}>
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[14px] mb-3">
              <img src={IMAGES.porcelainVeneers.src} alt={IMAGES.porcelainVeneers.alt} className="h-full w-full object-cover" />
            </div>
            <p className="text-center text-[12.5px] font-bold" style={{ color: BRAND.darkTeal }}>Porcelain Veneers Fabrication</p>
          </div>
          <div className="overflow-hidden rounded-[20px] border bg-white p-2 shadow-md" style={{ borderColor: `${BRAND.teal}1a` }}>
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[14px] mb-3">
              <img src={IMAGES.compositeBonding.src} alt={IMAGES.compositeBonding.alt} className="h-full w-full object-cover" />
            </div>
            <p className="text-center text-[12.5px] font-bold" style={{ color: BRAND.darkTeal }}>Composite Resin Bonding</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {porcelainVsComposite.cards.map((card, i) => (
            <motion.div
              key={card.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden rounded-[24px] border bg-white shadow-md"
              style={{ borderColor: `${BRAND.teal}1a` }}
            >
              <div className="flex items-center justify-between px-7 py-5" style={{ backgroundColor: i === 0 ? BRAND.darkTeal : BRAND.teal }}>
                <h3 className="text-[17px] font-bold text-white" style={{ fontFamily: FONT_DISPLAY }}>
                  {card.name}
                </h3>
                <span className="rounded-full bg-white/20 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-white">
                  {card.tag}
                </span>
              </div>
              <div className="divide-y" style={{ borderColor: `${BRAND.teal}0e` }}>
                {card.specs.map((s) => (
                  <div key={s.label} className="flex items-center justify-between px-7 py-4">
                    <span className="text-[12px] font-bold uppercase tracking-[0.06em]" style={{ color: BRAND.teal }}>
                      {s.label}
                    </span>
                    <span className="text-right text-[13.5px] font-medium text-neutral-800">
                      {s.value}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center text-[14.5px] leading-[1.9] text-neutral-600">
          {porcelainVsComposite.closing}
        </p>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  SECTION 10: DIGITAL SMILE DESIGN — With Digital Room Photo                 */
/* -------------------------------------------------------------------------- */
function DigitalSmileDesign() {
  return (
    <section
      id="digital-smile-design"
      className="scroll-mt-24 px-6 py-20 md:px-10 md:py-28"
      style={{ backgroundColor: BRAND.creamLight, fontFamily: FONT_BODY }}
    >
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 items-center">
          <div className="relative rounded-[28px] border bg-white p-8 md:p-10 shadow-sm overflow-hidden" style={{ borderColor: `${BRAND.teal}1a` }}>
            <div className="absolute top-4 left-4 h-4 w-4 border-t-2 border-l-2" style={{ borderColor: BRAND.teal }} />
            <div className="absolute top-4 right-4 h-4 w-4 border-t-2 border-r-2" style={{ borderColor: BRAND.teal }} />
            <div className="absolute bottom-4 left-4 h-4 w-4 border-b-2 border-l-2" style={{ borderColor: BRAND.teal }} />
            <div className="absolute bottom-4 right-4 h-4 w-4 border-b-2 border-r-2" style={{ borderColor: BRAND.teal }} />

            <div className="flex items-center gap-3">
              <span className="h-px w-8" style={{ backgroundColor: BRAND.gold }} />
              <span className="text-[12px] font-semibold uppercase tracking-[0.16em]" style={{ color: BRAND.teal }}>
                CAD & Digital Simulation
              </span>
            </div>
            <h2 className="mt-4 text-[1.8rem] leading-tight md:text-[2.2rem]" style={{ fontFamily: FONT_DISPLAY, fontWeight: 700, color: BRAND.darkTeal }}>
              {digitalDesign.h2}
            </h2>
            <div className="mt-6 space-y-4 text-[15px] leading-[1.9] text-neutral-700">
              {digitalDesign.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-[28px] border-2 p-2 shadow-2xl bg-white" style={{ borderColor: BRAND.gold }}>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[22px]">
              <img src={IMAGES.digitalDesign.src} alt={IMAGES.digitalDesign.alt} className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  SECTION 11: HOW MANY TEETH NEED TREATMENT?                                */
/* -------------------------------------------------------------------------- */
function HowManyTeeth() {
  return (
    <section
      id="how-many-teeth"
      className="scroll-mt-24 px-6 py-20 md:px-10 md:py-28"
      style={{ backgroundColor: BRAND.cream, fontFamily: FONT_BODY }}
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-8" style={{ backgroundColor: BRAND.gold }} />
            <span className="text-[12px] font-semibold uppercase tracking-[0.16em]" style={{ color: BRAND.teal }}>
              Treatment Scope
            </span>
          </div>
          <h2 className="mt-4 text-[1.9rem] leading-tight md:text-[2.3rem]" style={{ fontFamily: FONT_DISPLAY, fontWeight: 700, color: BRAND.darkTeal }}>
            {howManyTeeth.h2}
          </h2>
          <div className="mt-5 space-y-4 text-[15px] leading-[1.9] text-neutral-700">
            {howManyTeeth.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {howManyTeeth.tiers.map((tier, i) => (
            <div key={i} className="rounded-2xl border bg-white p-7 shadow-xs flex flex-col justify-between" style={{ borderColor: `${BRAND.teal}1a` }}>
              <div>
                <span className="text-[1.4rem] font-extrabold block mb-1" style={{ color: BRAND.gold }}>
                  {tier.count}
                </span>
                <h3 className="text-[1.15rem] font-bold" style={{ fontFamily: FONT_DISPLAY, color: BRAND.darkTeal }}>
                  {tier.title}
                </h3>
                <p className="mt-3 text-[13.5px] leading-relaxed text-neutral-600">{tier.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  SECTION 12 & 13: COMFORT, TIMELINE & BEFORE AFTER                          */
/* -------------------------------------------------------------------------- */
function ComfortTimelineBeforeAfter() {
  return (
    <section
      id="does-it-hurt"
      className="scroll-mt-24 px-6 py-20 md:px-10 md:py-28"
      style={{ backgroundColor: BRAND.creamLight, fontFamily: FONT_BODY }}
    >
      <div className="mx-auto max-w-6xl space-y-16">
        {/* HURT */}
        <div>
          <div className="flex items-center gap-3">
            <span className="h-px w-8" style={{ backgroundColor: BRAND.gold }} />
            <span className="text-[12px] font-semibold uppercase tracking-[0.16em]" style={{ color: BRAND.teal }}>
              Patient Comfort
            </span>
          </div>
          <h2 className="mt-4 text-[1.9rem] leading-tight md:text-[2.3rem]" style={{ fontFamily: FONT_DISPLAY, fontWeight: 700, color: BRAND.darkTeal }}>
            {comfortAndTimeline.hurtH2}
          </h2>
          <div className="mt-5 space-y-4 max-w-3xl text-[15px] leading-[1.9] text-neutral-700">
            {comfortAndTimeline.hurtParas.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>

        {/* TIMELINE */}
        <div id="how-long-does-treatment-take" className="scroll-mt-24 pt-8 border-t" style={{ borderColor: `${BRAND.teal}1a` }}>
          <div className="flex items-center gap-3">
            <span className="h-px w-8" style={{ backgroundColor: BRAND.gold }} />
            <span className="text-[12px] font-semibold uppercase tracking-[0.16em]" style={{ color: BRAND.teal }}>
              Timeline Expectations
            </span>
          </div>
          <h2 className="mt-4 text-[1.9rem] leading-tight md:text-[2.3rem]" style={{ fontFamily: FONT_DISPLAY, fontWeight: 700, color: BRAND.darkTeal }}>
            {comfortAndTimeline.timeH2}
          </h2>
          <div className="mt-5 space-y-4 max-w-3xl text-[15px] leading-[1.9] text-neutral-700">
            {comfortAndTimeline.timeParas.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>

        {/* BEFORE AFTER & SMILE RESULT PHOTO */}
        <div id="before-and-after" className="scroll-mt-24 pt-8 border-t" style={{ borderColor: `${BRAND.teal}1a` }}>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1fr] lg:gap-12 items-center">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-8" style={{ backgroundColor: BRAND.gold }} />
                <span className="text-[12px] font-semibold uppercase tracking-[0.16em]" style={{ color: BRAND.teal }}>
                  Real Results Analysis
                </span>
              </div>
              <h2 className="mt-4 text-[1.9rem] leading-tight md:text-[2.3rem]" style={{ fontFamily: FONT_DISPLAY, fontWeight: 700, color: BRAND.darkTeal }}>
                {beforeAfter.h2}
              </h2>
              <div className="mt-5 space-y-4 text-[15px] leading-[1.9] text-neutral-700">
                {beforeAfter.paras.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-[24px] border-2 p-2 shadow-2xl bg-white" style={{ borderColor: BRAND.gold }}>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[18px]">
                <img src={IMAGES.smileResult.src} alt={IMAGES.smileResult.alt} className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  SECTION 14 & 15: BENEFITS & LIMITATIONS                                   */
/* -------------------------------------------------------------------------- */
function BenefitsAndLimitations() {
  return (
    <section
      id="potential-benefits"
      className="scroll-mt-24 px-6 py-20 md:px-10 md:py-28"
      style={{ backgroundColor: BRAND.cream, fontFamily: FONT_BODY }}
    >
      <div className="mx-auto max-w-6xl space-y-16">
        {/* BENEFITS */}
        <div>
          <div className="flex items-center gap-3">
            <span className="h-px w-8" style={{ backgroundColor: BRAND.gold }} />
            <span className="text-[12px] font-semibold uppercase tracking-[0.16em]" style={{ color: BRAND.teal }}>
              Expected Advantages
            </span>
          </div>
          <h2 className="mt-4 text-[1.9rem] leading-tight md:text-[2.3rem]" style={{ fontFamily: FONT_DISPLAY, fontWeight: 700, color: BRAND.darkTeal }}>
            {benefitsAndLimitations.benefitsH2}
          </h2>
          <p className="mt-3 text-[15px] text-neutral-700">{benefitsAndLimitations.benefitsIntro}</p>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {benefitsAndLimitations.benefits.map((b, i) => (
              <div key={i} className="flex items-start gap-3 rounded-xl border bg-white p-4 shadow-2xs" style={{ borderColor: `${BRAND.teal}14` }}>
                <CheckCircle2 size={18} color={BRAND.teal} className="flex-none mt-0.5" />
                <span className="text-[14px] font-medium text-neutral-800">{b}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-[13px] text-neutral-500 italic">{benefitsAndLimitations.benefitsClosing}</p>
        </div>

        {/* LIMITATIONS */}
        <div id="limitations-and-risks" className="scroll-mt-24 pt-8 border-t" style={{ borderColor: `${BRAND.teal}1a` }}>
          <div className="flex items-center gap-3">
            <span className="h-px w-8" style={{ backgroundColor: BRAND.gold }} />
            <span className="text-[12px] font-semibold uppercase tracking-[0.16em]" style={{ color: BRAND.teal }}>
              Balanced Advisory
            </span>
          </div>
          <h2 className="mt-4 text-[1.9rem] leading-tight md:text-[2.3rem]" style={{ fontFamily: FONT_DISPLAY, fontWeight: 700, color: BRAND.darkTeal }}>
            {benefitsAndLimitations.limitsH2}
          </h2>
          <p className="mt-3 text-[15px] text-neutral-700">{benefitsAndLimitations.limitsIntro}</p>
          <div className="mt-6 space-y-3 max-w-3xl">
            {benefitsAndLimitations.limits.map((item, i) => (
              <div key={i} className="flex items-center gap-3 rounded-xl border bg-white p-3.5 shadow-2xs" style={{ borderColor: `${BRAND.teal}12` }}>
                <AlertTriangle size={16} color={BRAND.gold} className="flex-none" />
                <span className="text-[13.5px] font-medium text-neutral-800">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-2xl border p-5 max-w-3xl bg-white shadow-xs" style={{ borderColor: `${BRAND.gold}88` }}>
            <p className="text-[13.5px] leading-relaxed text-neutral-700">
              <strong style={{ color: BRAND.darkTeal }}>Irreversibility Notice:</strong> {benefitsAndLimitations.limitsWarning}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  SECTION 16 & 17: LONGEVITY & MAINTENANCE — With Aftercare Photo            */
/* -------------------------------------------------------------------------- */
function LongevityAndMaintenance() {
  return (
    <section
      id="how-long-do-veneers-last"
      className="scroll-mt-24 px-6 py-20 md:px-10 md:py-28"
      style={{ backgroundColor: BRAND.creamLight, fontFamily: FONT_BODY }}
    >
      <div className="mx-auto max-w-6xl space-y-16">
        {/* LONGEVITY */}
        <div>
          <div className="flex items-center gap-3">
            <span className="h-px w-8" style={{ backgroundColor: BRAND.gold }} />
            <span className="text-[12px] font-semibold uppercase tracking-[0.16em]" style={{ color: BRAND.teal }}>
              Lifespan Expectations
            </span>
          </div>
          <h2 className="mt-4 text-[1.9rem] leading-tight md:text-[2.3rem]" style={{ fontFamily: FONT_DISPLAY, fontWeight: 700, color: BRAND.darkTeal }}>
            {longevityAndMaintenance.longH2}
          </h2>
          <div className="mt-5 space-y-4 max-w-3xl text-[15px] leading-[1.9] text-neutral-700">
            {longevityAndMaintenance.longParas.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>

        {/* AFTERCARE WITH PHOTO */}
        <div id="aftercare-and-maintenance" className="scroll-mt-24 pt-8 border-t" style={{ borderColor: `${BRAND.teal}1a` }}>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 items-center">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-8" style={{ backgroundColor: BRAND.gold }} />
                <span className="text-[12px] font-semibold uppercase tracking-[0.16em]" style={{ color: BRAND.teal }}>
                  Long-Term Aftercare
                </span>
              </div>
              <h2 className="mt-4 text-[1.9rem] leading-tight md:text-[2.3rem]" style={{ fontFamily: FONT_DISPLAY, fontWeight: 700, color: BRAND.darkTeal }}>
                {longevityAndMaintenance.maintH2}
              </h2>
              <div className="mt-6 space-y-3">
                {longevityAndMaintenance.tips.slice(0, 5).map((tip, i) => (
                  <div key={i} className="flex items-start gap-3 rounded-xl border bg-white p-3.5 shadow-2xs" style={{ borderColor: `${BRAND.teal}14` }}>
                    <CheckCircle2 size={16} color={BRAND.teal} className="flex-none mt-0.5" />
                    <span className="text-[13.5px] font-medium text-neutral-800">{tip}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-[24px] border-2 p-2 shadow-2xl bg-white" style={{ borderColor: BRAND.gold }}>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[18px]">
                <img src={IMAGES.aftercare.src} alt={IMAGES.aftercare.alt} className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  SECTION 18 & 19: COST & INSURANCE                                         */
/* -------------------------------------------------------------------------- */
function CostAndInsurance() {
  return (
    <section
      id="cost-in-dubai"
      className="scroll-mt-24 px-6 py-20 md:px-10 md:py-28"
      style={{ backgroundColor: BRAND.cream, fontFamily: FONT_BODY }}
    >
      <div className="mx-auto max-w-6xl space-y-16">
        {/* COST */}
        <div>
          <div className="flex items-center gap-3">
            <span className="h-px w-8" style={{ backgroundColor: BRAND.gold }} />
            <span className="text-[12px] font-semibold uppercase tracking-[0.16em]" style={{ color: BRAND.teal }}>
              Pricing Factors
            </span>
          </div>
          <h2 className="mt-4 text-[1.9rem] leading-tight md:text-[2.3rem]" style={{ fontFamily: FONT_DISPLAY, fontWeight: 700, color: BRAND.darkTeal }}>
            {costAndInsurance.costH2}
          </h2>
          <div className="mt-5 space-y-4 max-w-3xl text-[15px] leading-[1.9] text-neutral-700">
            {costAndInsurance.costParas.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>

        {/* INSURANCE */}
        <div id="insurance" className="scroll-mt-24 pt-8 border-t" style={{ borderColor: `${BRAND.teal}1a` }}>
          <div className="flex items-center gap-3">
            <span className="h-px w-8" style={{ backgroundColor: BRAND.gold }} />
            <span className="text-[12px] font-semibold uppercase tracking-[0.16em]" style={{ color: BRAND.teal }}>
              Coverage Policy
            </span>
          </div>
          <h2 className="mt-4 text-[1.9rem] leading-tight md:text-[2.3rem]" style={{ fontFamily: FONT_DISPLAY, fontWeight: 700, color: BRAND.darkTeal }}>
            {costAndInsurance.insH2}
          </h2>
          <div className="mt-5 space-y-4 max-w-3xl text-[15px] leading-[1.9] text-neutral-700">
            {costAndInsurance.insParas.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  SECTION 20: COMPARISON MATRIX                                             */
/* -------------------------------------------------------------------------- */
function ComparisonMatrix() {
  return (
    <section
      id="hollywood-smile-vs-whitening"
      className="scroll-mt-24 px-6 py-20 md:px-10 md:py-28"
      style={{ backgroundColor: BRAND.creamLight, fontFamily: FONT_BODY }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center gap-3">
          <span className="h-px w-8" style={{ backgroundColor: BRAND.gold }} />
          <span className="text-[12px] font-semibold uppercase tracking-[0.16em]" style={{ color: BRAND.teal }}>
            Comparative Blueprint
          </span>
        </div>
        <h2 className="mt-4 text-[1.9rem] leading-tight md:text-[2.3rem]" style={{ fontFamily: FONT_DISPLAY, fontWeight: 700, color: BRAND.darkTeal }}>
          {comparisonMatrix.h2}
        </h2>

        <div className="mt-10 overflow-x-auto rounded-3xl border bg-white shadow-xs" style={{ borderColor: `${BRAND.teal}1a` }}>
          <table className="w-full text-left text-[14px]">
            <thead>
              <tr style={{ backgroundColor: BRAND.darkTeal, color: "#FFFFFF" }}>
                <th className="p-4 sm:p-5 font-bold">Treatment</th>
                <th className="p-4 sm:p-5 font-bold">Main Purpose</th>
                <th className="p-4 sm:p-5 font-bold">Aesthetic Scope</th>
                <th className="p-4 sm:p-5 font-bold">Tooth Preparation</th>
              </tr>
            </thead>
            <tbody className="divide-y text-neutral-700" style={{ borderColor: `${BRAND.teal}12` }}>
              {comparisonMatrix.rows.map((row, i) => (
                <tr key={i} className="hover:bg-[#1F5E4B08] transition-colors">
                  <td className="p-4 sm:p-5 font-bold" style={{ color: BRAND.darkTeal }}>{row.treatment}</td>
                  <td className="p-4 sm:p-5">{row.purpose}</td>
                  <td className="p-4 sm:p-5">{row.scope}</td>
                  <td className="p-4 sm:p-5">{row.prep}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-6 text-center text-[13.5px] text-neutral-600 max-w-3xl mx-auto">
          {comparisonMatrix.closing}
        </p>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  SECTION 21: WHY CHOOSE RAMACARE POLYCLINIC?                               */
/* -------------------------------------------------------------------------- */
function WhyRamaCare() {
  return (
    <section
      id="why-ramacare"
      className="scroll-mt-24 px-6 py-20 md:px-10 md:py-28"
      style={{ backgroundColor: BRAND.cream, fontFamily: FONT_BODY }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-[12px] font-semibold uppercase tracking-[0.16em]" style={{ color: BRAND.teal }}>
            Pillars of Excellence
          </span>
          <h2 className="mt-3 text-[1.9rem] leading-tight md:text-[2.3rem]" style={{ fontFamily: FONT_DISPLAY, fontWeight: 700, color: BRAND.darkTeal }}>
            {whyRamaCare.h2}
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {whyRamaCare.pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div key={i} className="rounded-2xl border bg-white p-6 shadow-xs" style={{ borderColor: `${BRAND.teal}1a` }}>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl mb-4" style={{ backgroundColor: `${BRAND.teal}14` }}>
                  <Icon size={20} color={BRAND.teal} />
                </div>
                <h3 className="text-[1.05rem] font-bold mb-2" style={{ fontFamily: FONT_DISPLAY, color: BRAND.darkTeal }}>
                  {pillar.title}
                </h3>
                <p className="text-[13px] leading-relaxed text-neutral-600">{pillar.body}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center text-[13.5px] font-medium text-neutral-600">
          📍 {whyRamaCare.location}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  SECTION 22: PATIENT JOURNEY ROADMAP                                       */
/* -------------------------------------------------------------------------- */
function PatientJourney() {
  const scrollRef = useRef(null);
  const steps = [
    "Book Consultation",
    "Dental Examination",
    "Smile & Bite Assessment",
    "Discuss Cosmetic Goals",
    "Treatment Planning",
    "Digital Smile Planning",
    "Tooth Preparation",
    "Temporary Restoration",
    "Final Restoration",
    "Bite & Aesthetic Check",
    "Aftercare & Maintenance",
  ];

  const scrollRail = (direction) => {
    if (scrollRef.current) {
      const amount = direction === "left" ? -280 : 280;
      scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  return (
    <section
      id="patient-journey"
      className="scroll-mt-24 px-6 py-20 md:px-10 md:py-28"
      style={{ backgroundColor: BRAND.creamLight, fontFamily: FONT_BODY }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between mb-10">
          <div>
            <span className="text-[12px] font-semibold uppercase tracking-[0.16em]" style={{ color: BRAND.teal }}>
              Care Pathway
            </span>
            <h2 className="mt-2 text-[1.9rem] leading-tight md:text-[2.3rem]" style={{ fontFamily: FONT_DISPLAY, fontWeight: 700, color: BRAND.darkTeal }}>
              Patient Journey Roadmap
            </h2>
          </div>

          {/* ARROW CONTROLS */}
          <div className="flex items-center gap-2 flex-none">
            <button
              type="button"
              onClick={() => scrollRail("left")}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-xs border text-neutral-700 hover:bg-[#1F5E4B] hover:text-white transition-all active:scale-95"
              style={{ borderColor: `${BRAND.teal}22` }}
              aria-label="Previous step"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              type="button"
              onClick={() => scrollRail("right")}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-xs border text-neutral-700 hover:bg-[#1F5E4B] hover:text-white transition-all active:scale-95"
              style={{ borderColor: `${BRAND.teal}22` }}
              aria-label="Next step"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="no-scrollbar flex overflow-x-auto gap-3 py-4 px-2 scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {steps.map((step, i) => (
            <div key={i} className="flex flex-none items-center gap-3">
              <div className="flex items-center gap-2 rounded-full border bg-white px-4 py-2 text-[12.5px] font-bold shadow-xs" style={{ borderColor: `${BRAND.teal}22`, color: BRAND.darkTeal }}>
                <span className="flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold text-white" style={{ backgroundColor: BRAND.teal }}>
                  {i + 1}
                </span>
                <span className="whitespace-nowrap">{step}</span>
              </div>
              {i < steps.length - 1 && <ChevronRight size={16} className="text-neutral-400 flex-none" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  SECTION 23: FAQS                                                          */
/* -------------------------------------------------------------------------- */
function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section
      id="faqs"
      className="scroll-mt-24 px-6 py-20 md:px-10 md:py-28"
      style={{ backgroundColor: BRAND.cream, fontFamily: FONT_BODY }}
    >
      <div className="mx-auto max-w-4xl">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[12px] font-semibold uppercase tracking-[0.16em]" style={{ color: BRAND.teal }}>
            Got Questions?
          </span>
          <h2 className="mt-3 text-[1.9rem] leading-tight md:text-[2.3rem]" style={{ fontFamily: FONT_DISPLAY, fontWeight: 700, color: BRAND.darkTeal }}>
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqsData.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="overflow-hidden rounded-2xl border bg-white transition-all shadow-2xs"
                style={{ borderColor: `${BRAND.teal}1a` }}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between p-5 text-left font-bold text-[15px]"
                  style={{ color: BRAND.darkTeal }}
                >
                  <span className="pr-4">{faq.q}</span>
                  <ChevronDown
                    size={18}
                    className={`flex-none transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    color={BRAND.teal}
                  />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="px-5 pb-5 pt-1 border-t text-[14px] leading-relaxed text-neutral-600"
                      style={{ borderColor: `${BRAND.teal}10` }}
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  SECTION 24: BOOK CONSULTATION (CTA) — With Clinic Photo                   */
/* -------------------------------------------------------------------------- */
function BookConsultation() {
  return (
    <section
      id="book-consultation"
      className="scroll-mt-24 px-6 py-20 md:px-10 md:py-28"
      style={{ backgroundColor: BRAND.darkTeal, fontFamily: FONT_BODY }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 items-center">
          <div className="text-white">
            <span className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.14em]" style={{ backgroundColor: `${BRAND.gold}22`, color: BRAND.gold }}>
              <Sparkles size={12} /> Ready to Explore Your Smile Options?
            </span>
            <h2 className="mt-4 text-[2.1rem] leading-tight md:text-[2.8rem]" style={{ fontFamily: FONT_DISPLAY, fontWeight: 700 }}>
              Book Your Hollywood Smile Assessment
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-white/80">
              Hollywood Smile treatment should begin with an honest look at your teeth, gums, bite, and cosmetic goals — not a predetermined package. Schedule your consultation at RamaCare Polyclinic in Jumeirah 1, Dubai.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="tel:+97142862006"
                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[13.5px] font-bold uppercase tracking-[0.08em] text-white shadow-md transition-transform hover:-translate-y-0.5"
                style={{ backgroundColor: BRAND.teal }}
              >
                <Phone size={16} /> Call Clinic 
              </a>
              <a
                href="https://wa.me/971566597878?text=Hello%20RamaCare%20Polyclinic!%20I%20would%20like%20to%20book%20a%20Hollywood%20Smile%20consultation%20in%20Dubai."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border px-7 py-3.5 text-[13.5px] font-bold text-white transition-all hover:bg-white/10"
                style={{ borderColor: "rgba(255,255,255,0.3)" }}
              >
                <MessageSquare size={16} /> WhatsApp Us
              </a>
            </div>

            <div className="mt-8 text-[12.5px] text-white/60">
              📍 RamaCare Polyclinic, Jumeirah 1, Dubai · Open Sun–Sat
            </div>
          </div>

          {/* CLINIC PHOTO */}
          <div className="overflow-hidden rounded-[28px] border-2 p-2 shadow-2xl bg-white" style={{ borderColor: BRAND.gold }}>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[22px]">
              <img
                src={IMAGES.clinicCTA.src}
                alt={IMAGES.clinicCTA.alt}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  MAIN PAGE COMPONENT                                                       */
/* -------------------------------------------------------------------------- */
export default function HollywoodSmileTreatmentDubai() {
  const faqSchemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqsData.map((f) => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a,
      },
    })),
  };

  const dentistSchemaData = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": "RamaCare Polyclinic",
    "image": "https://ramacarepolyclinic.ae/images/ramaCare%20Polyclinic%20Jumeirah%20Dubai.jpg",
    "url": meta.url,
    "telephone": "+971-4-286-2006",
    "priceRange": "$$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jumeirah Terrace Building, Jumeirah 1",
      "addressLocality": "Jumeirah 1",
      "addressRegion": "Dubai",
      "addressCountry": "AE",
    },
    "medicalSpecialty": "Dentistry",
    "sameAs": [
      "https://ramacarepolyclinic.ae/",
      "https://ramacarepolyclinic.ae/"
    ]
  };

  const pageSchemaData = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "Hollywood Smile Treatment Dubai for a Natural-Looking Smile",
    "url": meta.url,
    "description": meta.description,
    "medicalAudience": {
      "@type": "Patient"
    },
    "about": {
      "@type": "MedicalProcedure",
      "name": "Hollywood Smile Treatment"
    },
    "publisher": {
      "@type": "MedicalOrganization",
      "name": "RamaCare Polyclinic"
    }
  };

  const procedureSchemaData = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Dental Veneers",
    "procedureType": "https://schema.org/NoninvasiveProcedure",
    "bodyLocation": "Teeth",
    "howPerformed": "Thin custom-made shells are bonded to the front surface of the tooth to adjust color, shape, size, and proportion, following a clinical assessment.",
    "preparation": "Dental examination, bite assessment, and smile analysis prior to treatment.",
    "followup": "Routine dental check-ups to monitor fit, wear, and longevity."
  };

  const breadcrumbSchemaData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ramacarepolyclinic.ae/" },
      { "@type": "ListItem", "position": 2, "name": "Cosmetic Dentistry", "item": "https://ramacarepolyclinic.ae/services/dental-dubai" },
      { "@type": "ListItem", "position": 3, "name": "Hollywood Smile Treatment Dubai", "item": meta.url },
    ],
  };

  const organizationSchemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "RamaCare Polyclinic",
    "url": "https://ramacarepolyclinic.ae/",
    "logo": "https://ramacarepolyclinic.ae/images/Logo.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jumeirah Terrace Building, Jumeirah 1",
      "addressLocality": "Jumeirah 1",
      "addressRegion": "Dubai",
      "addressCountry": "AE"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+971-4-286-2006",
      "contactType": "customer service"
    },
    "sameAs": [
      "https://ramacarepolyclinic.ae/"
    ]
  };

  return (
    <Layout>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <link rel="canonical" href={meta.url} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(dentistSchemaData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchemaData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(procedureSchemaData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchemaData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchemaData) }}
        />
      </Head>

      <main>
        <Hero />
        <TableOfContents />
        <WhatIsHollywoodSmile />
        <TreatmentOptions />
        <SuitableCandidate />
        <DentalAssessmentFirst />
        <StepByStepJourney />
        <VeneersVsHollywood />
        <PorcelainVsComposite />
        <DigitalSmileDesign />
        <HowManyTeeth />
        <ComfortTimelineBeforeAfter />
        <BenefitsAndLimitations />
        <LongevityAndMaintenance />
        <CostAndInsurance />
        <ComparisonMatrix />
        <WhyRamaCare />
        <PatientJourney />
        <FAQs />
        <BookConsultation />
      </main>
    </Layout>
  );
}