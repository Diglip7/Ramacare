import React, { useState, useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout from "../../../components/Layout";
import ContentReviewBadge from "../../../components/ContentReviewBadge";
import {
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Zap,
  Target,
  Heart,
  Droplets,
  Sun,
  Award,
  ShieldCheck,
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  ArrowRight,
  MessageCircle,
  Calendar,
  MapPin,
  UserCheck,
  HelpCircle,
  FileText,
  DollarSign,
  Activity,
  Layers,
  Check,
  XCircle,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/*  UTILITIES                                                                 */
/* -------------------------------------------------------------------------- */

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

/* -------------------------------------------------------------------------- */
/*  CONTENT & DATA                                                            */
/* -------------------------------------------------------------------------- */

const SITE_URL = "https://ramacarepolyclinic.ae";
const PAGE_PATH = "/services/chemical-peel-treatment-dubai/";

const HERO = {
  eyebrow: "RamaCare Polyclinic · Jumeirah 1, Dubai",
  title: "Chemical Peel Treatment Dubai: Benefits, Procedure, Results & Cost",
  paragraphs: [
    "Many people in Dubai consider Chemical Peel Treatment in Dubai when they notice dullness, uneven tone, visible sun damage, or the lingering marks that acne can leave behind. A chemical peel is a professional skin treatment that uses a carefully selected chemical solution to exfoliate the outer layer of skin, encouraging renewal underneath. It is not a single, one-size-fits-all procedure — different formulations and strengths exist for different skin concerns, and the right choice depends on an individual skin assessment.",
    "Dubai’s climate, with its intense sun exposure and dust, means many residents deal with pigmentation, dryness, and texture changes over time. This is one reason chemical peels remain a frequently searched skin treatment across the city. At RamaCare Polyclinic in Jumeirah 1, chemical peel treatment is approached as a medical skin procedure that begins with a proper consultation, not a walk-in, one-size-fits-all service. This article explains what a chemical peel is, how it works, what it may help with, and what to realistically expect — so you can have an informed conversation with a qualified clinician before deciding whether it’s right for you.",
  ],
};

const QUICK_ANSWER = {
  heading: "What Is a Chemical Peel?",
  body: "A chemical peel uses a professionally selected chemical solution to exfoliate controlled layers of skin. Depending on the formulation and depth, it may be considered for concerns such as uneven skin tone, hyperpigmentation, acne, selected acne marks, dullness, uneven texture, and fine lines. The exact peel type, concentration, and treatment depth should always be determined by a qualified clinician after assessing your skin — not selected based on searches or generic recommendations.",
};

const TOC_ITEMS = [
  { title: "What Is a Chemical Peel?", id: "what-is-a-chemical-peel" },
  { title: "How Does a Chemical Peel Work?", id: "how-does-a-chemical-peel-work" },
  { title: "Chemical Peel Benefits", id: "chemical-peel-benefits" },
  { title: "What Skin Concerns Address?", id: "skin-concerns" },
  { title: "Chemical Peel for Hyperpigmentation", id: "hyperpigmentation" },
  { title: "Chemical Peel for Pigmentation", id: "pigmentation" },
  { title: "Chemical Peel for Acne", id: "acne" },
  { title: "Chemical Peel for Acne Scars", id: "acne-scars" },
  { title: "Types of Chemical Peels", id: "types-of-chemical-peels" },
  { title: "Common Peel Ingredients", id: "common-peel-ingredients" },
  { title: "Who Is a Suitable Candidate?", id: "suitable-candidate" },
  { title: "Who Should Avoid Treatment?", id: "avoid-or-postpone" },
  { title: "Chemical Peel for Face", id: "chemical-peel-for-face" },
  { title: "Chemical Peel Procedure", id: "procedure" },
  { title: "Does a Chemical Peel Hurt?", id: "does-it-hurt" },
  { title: "Chemical Peel Side Effects", id: "side-effects" },
  { title: "Facial Side Effects", id: "side-effects-face" },
  { title: "Recovery Timeline", id: "recovery" },
  { title: "Essential Aftercare", id: "aftercare" },
  { title: "Before and After Expectations", id: "before-and-after" },
  { title: "Results Timeline", id: "results-timeline" },
  { title: "Required Sessions", id: "sessions" },
  { title: "Chemical Peel Cost in Dubai", id: "cost" },
  { title: "Medical Grade Chemical Peels", id: "medical-grade" },
  { title: "Choosing the Best Clinic", id: "choose-clinic" },
  { title: "Chemical Peel Near Me", id: "near-me" },
  { title: "Why Choose RamaCare?", id: "why-ramacare" },
  { title: "Patient Journey", id: "patient-journey" },
  { title: "Frequently Asked Questions", id: "faqs" },
  { title: "Related Treatments", id: "related-links" },
];

const WHAT_IS = {
  heading: "What Is a Chemical Peel?",
  paragraphs: [
    "A chemical peel is a form of controlled chemical exfoliation. A clinician applies a chemical solution to the skin, which loosens and removes dead skin cells from the surface, or in some cases affects deeper layers, depending on the type and strength of peel used. As the treated skin sheds, new skin gradually forms underneath, which may appear smoother, more even, or brighter in selected patients.",
    "It’s important to understand that not all chemical peels are the same. A superficial glycolic acid peel behaves very differently from a medium-depth peel, both in terms of what it can address and how much downtime it involves. This is why chemical peels are customized rather than prescribed generically — the formulation, concentration, and number of layers applied are decisions made after assessing an individual’s skin type, tone, and concern.",
  ],
  callout:
    "Customized, not generic — formulation, concentration, and depth are always determined after an individual skin assessment.",
};

const HOW_IT_WORKS = {
  steps: [
    {
      step: "01",
      label: "Skin Assessment",
      text: "The clinician evaluates skin type, tone, pigmentation, acne activity, texture, sensitivity, current skincare routine, previous procedures, and the patient’s treatment goals.",
    },
    {
      step: "02",
      label: "Selecting the Peel",
      text: "Based on this assessment, an appropriate formulation and strength is selected to match the patient’s skin and objective. No two treatment plans are automatically identical.",
    },
    {
      step: "03",
      label: "Skin Preparation",
      text: "The skin is cleansed and prepared to remove oils and debris that could interfere with even peel application.",
    },
    {
      step: "04",
      label: "Application",
      text: "The selected chemical solution is applied by the clinician in a controlled manner, often in layers, with careful monitoring of the skin’s response.",
    },
    {
      step: "05",
      label: "Controlled Exfoliation",
      text: "The solution acts on the targeted skin layers, loosening the bonds between dead skin cells so that they can shed over the following days.",
    },
    {
      step: "06",
      label: "Post-Treatment Care",
      text: "Aftercare is applied to support comfort and reduce irritation. Following the clinician’s aftercare instructions is important for recovery and for minimizing the risk of complications such as pigmentation changes.",
    },
  ],
};

const BENEFITS = {
  intro: "When appropriately selected and applied, Chemical Peel Benefits may include:",
  items: [
    "Improved skin texture",
    "A more even-looking skin tone",
    "Support for natural skin renewal",
    "Reduction in the appearance of dullness",
    "Improvement in the appearance of selected pigmentation",
    "Improvement in selected acne-related concerns",
    "Softer-looking fine lines",
    "A smoother overall skin appearance",
    "Reduced visibility of certain superficial imperfections",
  ],
  disclaimer:
    "These are potential benefits, not guarantees. Results can vary from person to person, and outcomes depend on skin condition, peel type, and how well aftercare instructions are followed. Chemical peels may help reduce the appearance of certain concerns — they do not eliminate every skin issue permanently.",
};

const SKIN_CONCERNS = {
  intro: "Patients often consider a chemical peel for concerns such as:",
  items: [
    "Uneven skin tone",
    "Dullness & lack of radiance",
    "Sun damage & age spots",
    "Fine lines & early wrinkles",
    "Mild active acne",
    "Post-inflammatory pigmentation",
    "Rough or uneven skin texture",
  ],
  outro:
    "A chemical peel is one option among several in aesthetic dermatology, and whether it is the right choice — compared with alternatives such as microdermabrasion or skin boosters — depends on the specific concern being treated.",
};

const HYPERPIGMENTATION = {
  intro:
    "Chemical Peel for Hyperpigmentation is one of the most common reasons patients in Dubai seek this treatment. Hyperpigmentation refers to patches of skin that appear darker than the surrounding area. It can develop due to several factors, including:",
  items: [
    "Prolonged sun exposure in Dubai's climate",
    "Post-inflammatory pigmentation following acne or skin injury",
    "Acne-related marks & blemishes",
    "General unevenness in skin tone that develops over time",
  ],
  outro:
    "Chemical exfoliation may support skin renewal in a way that can, for some patients, contribute to a more even-looking tone over time. However, pigmentation treatment requires careful assessment, because certain skin types are more prone to developing post-inflammatory hyperpigmentation as a reaction to treatment if the peel type or depth is not correctly matched. Appropriate peel selection, correct treatment depth, consistent sun protection, and proper aftercare are all essential parts of managing pigmentation safely. This is not a concern to self-treat — a clinician needs to evaluate the type of pigmentation involved before recommending any peel.",
};

const PIGMENTATION = {
  intro: "Chemical Peel for Pigmentation is a broader topic than hyperpigmentation alone. Pigmentation concerns can include:",
  table: [
    { type: "General pigmentation", cause: "Natural tone variation, sun exposure" },
    { type: "Hyperpigmentation", cause: "Sun damage, inflammation, ageing" },
    { type: "Post-acne marks", cause: "Healing response after acne lesions" },
    { type: "Melasma", cause: "Hormonal factors, sun exposure" },
    { type: "Sun-related pigmentation", cause: "Cumulative UV exposure" },
  ],
  outro:
    "Different causes often call for different treatment approaches. For example, melasma can behave differently from post-acne marks and may respond differently to chemical exfoliation. A chemical peel is not automatically the right treatment for every type of pigmentation, which is why an accurate diagnosis before treatment matters more than the treatment itself.",
};

const ACNE = {
  paragraphs: [
    "For patients dealing with active acne, chemical exfoliation may help support clearer-looking skin by encouraging cell turnover, which can assist with excess oil and blocked pores in selected, superficial cases. However, the suitability and choice of peel depend heavily on the severity and type of acne present. A chemical peel is not intended to replace standard medical acne management — for moderate to severe or inflammatory acne, a broader treatment plan involving a dermatologist is usually more appropriate, and a peel may only be one component of that plan, if used at all.",
  ],
};

const ACNE_SCARS = {
  intro:
    "Chemical Peel for Acne Scars is a frequently searched term, but the phrase “acne scars” actually covers several different skin changes, including:",
  items: [
    "Post-inflammatory hyperpigmentation (discoloration, not true scarring)",
    "Post-inflammatory erythema (redness left after acne heals)",
    "Superficial textural changes",
    "Atrophic (indented) scars",
    "Deeper, more structurally significant scars",
  ],
  outro:
    "Chemical peels may help with selected superficial concerns, particularly discoloration or mild textural irregularities. However, deeper atrophic scarring generally requires other approaches, such as microneedling, laser resurfacing, or combination treatments, and a peel alone may not be sufficient. A professional assessment is necessary to determine which category your marks fall into before any treatment plan is proposed.",
};

const TYPES = {
  items: [
    {
      title: "Superficial Peels",
      depth: "Surface Layer (Epidermis)",
      color: "bg-emerald-50/80 border-emerald-200 text-emerald-900",
      badge: "Mild / Low Downtime",
      text: "These work at the surface level and are generally associated with mild concerns such as dullness, minor texture irregularities, and selected pigmentation. They typically involve a shorter recovery period compared to deeper peels.",
    },
    {
      title: "Medium-Depth Peels",
      depth: "Papillary Dermis",
      color: "bg-amber-50/80 border-amber-200 text-amber-900",
      badge: "Targeted Correction",
      text: "These affect deeper layers of skin and are generally associated with more noticeable results for certain concerns, but they also require more careful medical assessment, a more structured recovery plan, and closer monitoring.",
    },
    {
      title: "Deeper Peels",
      depth: "Reticular Dermis",
      color: "bg-[#1F5E4B]/10 border-[#1F5E4B]/30 text-[#1F5E4B]",
      badge: "Clinical Supervision",
      text: "Stronger, deeper peels carry a greater risk profile and require appropriate professional supervision, both during application and throughout recovery. These are not suitable for casual or non-clinical settings.",
    },
  ],
  note: "It’s worth noting clearly: chemical peels — of any depth — should never be attempted at home using unregulated products. Peel strength, layering, and neutralization timing all require clinical judgment.",
};

const INGREDIENTS = {
  intro: "Different active ingredients are used in professional peels, each with distinct characteristics:",
  items: [
    { name: "Glycolic acid", tag: "Alpha-Hydroxy Acid (AHA)", text: "Used for surface exfoliation, texture refinement, and skin brightening." },
    { name: "Salicylic acid", tag: "Beta-Hydroxy Acid (BHA)", text: "Penetrates oil-containing pores, often considered for acne-prone skin." },
    { name: "Lactic acid", tag: "Gentle AHA", text: "Gentler exfoliation with hydrating properties, often considered for sensitive skin." },
    { name: "Mandelic acid", tag: "Large-Molecule AHA", text: "Slower penetration, ideal for sensitive or dark pigmentation-prone skin." },
    { name: "Trichloroacetic acid (TCA)", tag: "Medium Peel Solution", text: "Used in medium-depth peels for targeted pigmentation and texture concerns." },
  ],
  note: "Each ingredient has different clinical applications, and combinations or concentrations are matched to the individual by the treating clinician. This article does not recommend any specific ingredient or strength for any reader — that determination belongs in a clinical consultation.",
};

const SUITABLE = {
  intro: "Suitability for a chemical peel depends on several individual factors, including:",
  items: [
    "The specific skin concern being addressed",
    "Skin type and Fitzpatrick scale tone",
    "Skin sensitivity & barrier health",
    "Current medical conditions & medications",
    "Existing skin conditions (eczema, rosacea, active acne)",
    "Previous cosmetic or dermatological procedures",
    "Realistic treatment expectations & downtime flexibility",
  ],
  outro:
    "Patients who may be considered potential candidates often have concerns such as dull skin, uneven texture, selected pigmentation, mild acne, superficial acne marks, or early fine lines. Candidacy is always confirmed during a consultation, not assumed from a search query.",
};

const AVOID = {
  intro: "Certain situations call for caution, delay, or medical review before proceeding, including:",
  items: [
    "Active skin infection or cold sores",
    "Open wounds or broken skin barriers",
    "Significant skin irritation or severe sunburn",
    "Certain active inflammatory skin conditions",
    "Recent aggressive laser or cosmetic treatments",
    "A history of keloid formation or poor wound healing",
    "Certain medications (including recent oral isotretinoin)",
    "Recent excessive sun exposure or tanning",
  ],
  outro:
    "Ultimately, the treating clinician determines — based on your medical history and current skin condition — whether it is appropriate to proceed, postpone, or avoid treatment altogether.",
};

const FACE = {
  paragraphs: [
    "Chemical Peel for Face treatments require particular care because facial skin varies significantly in thickness and sensitivity across different areas. A facial skin assessment typically considers which areas can safely be treated, and the eyes and other sensitive areas are carefully avoided during application. Treatment strength must be individualized to the specific zones being treated — the skin around the cheeks, for instance, often tolerates different concentrations than more delicate areas. This is one of the key reasons professional application matters: uneven application or incorrect strength selection can lead to unwanted irritation or pigment changes in sensitive facial zones.",
  ],
};

const PROCEDURE = {
  steps: [
    { title: "Consultation", text: "Your concerns, medical history, current skincare routine, previous treatments, and expectations are discussed." },
    { title: "Skin Assessment", text: "The clinician evaluates pigmentation, acne activity, texture, sensitivity, tone, and overall skin condition." },
    { title: "Treatment Planning", text: "An appropriate approach is selected based on the assessment, rather than a standard protocol applied to every patient." },
    { title: "Preparation", text: "The skin is cleansed and prepared for even application." },
    { title: "Chemical Peel Application", text: "The selected professional peel is applied according to the individualized treatment plan." },
    { title: "Post-Treatment Care", text: "Personalized aftercare instructions are provided based on the peel used and your skin’s response." },
    { title: "Follow-Up", text: "Your skin’s response is monitored, and any future treatment is discussed only if clinically appropriate." },
  ],
};

const DOES_IT_HURT = {
  paragraphs: [
    "Most patients describe sensations such as tingling, warmth, mild stinging, or tightness during application, rather than significant pain. The intensity of these sensations varies according to the peel type, its strength, the treatment depth, and individual skin sensitivity. It would not be accurate to say the treatment is completely painless — some discomfort during application is common, though it is generally described as tolerable and brief.",
  ],
};

const SIDE_EFFECTS = {
  intro: "Understanding Chemical Peel Side Effects is an essential part of informed decision-making. Common, temporary reactions can include:",
  commonItems: [
    "Temporary redness & warmth",
    "Dryness & skin tightness",
    "Visible peeling or flaking for 3–7 days",
    "Mild swelling in treated areas",
    "Increased temporary skin sensitivity",
  ],
  outro:
    "Less common but potentially more significant complications can include prolonged irritation, infection, changes in pigmentation, scarring, or burns — particularly with deeper peels or when aftercare instructions are not followed. The likelihood of these risks depends on the peel type, its strength, how it was applied, your individual skin condition, and your aftercare routine. This is precisely why professional assessment and supervision matter throughout the entire process, not just during the procedure itself.",
};

const SIDE_EFFECTS_FACE = {
  paragraphs: [
    "Looking specifically at the Side Effects of Chemical Peel on Face, facial skin can temporarily experience redness, flaking, dryness, heightened sensitivity, and increased sensitivity to sun exposure in the days following treatment. Following your clinician’s specific aftercare instructions is important for minimizing these effects. If you experience severe or unexpected symptoms — such as significant pain, blistering, or signs of infection — you should contact your healthcare provider rather than waiting for symptoms to resolve on their own.",
  ],
};

const RECOVERY = {
  intro: "Recovery time is directly related to treatment depth:",
  items: [
    { type: "Superficial Peels", time: "1 to 3 Days", desc: "Limited visible peeling or mild redness, often resolving quickly with minimal impact on daily routine." },
    { type: "Medium-Depth Peels", time: "5 to 7 Days", desc: "More noticeable peeling, flaking, and redness, requiring structured aftercare and sun protection." },
    { type: "Deeper Peels", time: "10 to 14+ Days", desc: "Substantially longer recovery, requiring close clinical follow-up and strict activity modification." },
  ],
  outro:
    "There is no single universal recovery timeline that applies to every patient or every peel — your clinician will explain what to expect based on the specific treatment plan chosen for you.",
};

const AFTERCARE = {
  intro: "Following aftercare guidance closely supports both comfort and results. General principles typically include:",
  items: [
    "Follow your clinician’s specific instructions above all else",
    "Use gentle, non-irritating cleanser and barrier-repair moisturizers",
    "Do NOT pick, pull, or manually scrub peeling skin",
    "Apply broad-spectrum SPF 50+ sun protection consistently",
    "Avoid direct, unnecessary sun exposure during the healing phase",
    "Avoid harsh active ingredients (retinoids, AHAs, BHAs, Vitamin C) until cleared",
    "Avoid other cosmetic treatments until cleared by your clinician",
  ],
  outro:
    "Your individualized aftercare plan always takes priority over general guidance, since it reflects the specific peel and your skin’s response.",
};

const BEFORE_AFTER = {
  paragraphs: [
    "When reviewing Chemical Peel Before and After images, it helps to understand what they realistically represent. Possible improvements some patients notice include brighter-looking skin, a more even-looking tone, smoother texture, reduced appearance of superficial pigmentation, and improvement in selected acne-related marks.",
    "That said, results vary depending on skin condition, the type of peel used, treatment depth, the number of sessions completed, ongoing skincare habits, sun exposure, and individual biological response. No two patients should expect identical outcomes from the same treatment. Any before-and-after material shared by a clinic should be genuine, properly consented to by the patient, and presented in a way that reflects typical rather than best-case-only outcomes.",
  ],
};

const RESULTS_TIMELINE = {
  intro: "A general Chemical Peel Results Timeline looks roughly like this, though it varies by individual and peel type:",
  phases: [
    { phase: "Day 1–2", title: "Immediately After", text: "Skin may appear red, flushed, or feel slightly tight." },
    { phase: "Day 3–7", title: "Early Recovery", text: "Peeling, flaking, or dryness occurs as old skin sheds." },
    { phase: "Day 8–14", title: "After Recovery", text: "New skin emerges, gradually appearing smoother and more even." },
    { phase: "Week 4+", title: "Longer Term", text: "Collagen turnover continues. Additional sessions may be evaluated." },
  ],
  outro:
    "There is no single precise day-by-day timeline that applies universally — your clinician can give you a more specific expectation based on the peel selected for you.",
};

const SESSIONS = {
  paragraphs: [
    "The number of Chemical Peel Sessions required varies based on several factors: the treatment goal, the type of peel used, the underlying skin condition, whether pigmentation or acne is being addressed, textural concerns, and how the skin responded to any previous treatment. There isn’t a fixed number of sessions that applies to every patient. In many cases, a clinician may recommend a treatment series spaced over several weeks, with progress reviewed between sessions before deciding whether further treatment is appropriate.",
  ],
};

const COST = {
  intro:
    "Chemical Peel Cost in Dubai varies from clinic to clinic and patient to patient. Rather than quoting a fixed figure, it’s more useful to understand what typically influences cost:",
  items: [
    "The type & formulation of peel used",
    "The targeted treatment area (face, neck, hands)",
    "The strength or depth of the peel",
    "The number of sessions recommended in your package",
    "The initial consultation and clinical skin assessment",
    "Any complementary post-treatment serums or care products",
    "The individualized nature of your specific treatment plan",
  ],
  outro:
    "When comparing clinics, price alone shouldn’t be the deciding factor. It’s worth comparing based on the clinician’s professional qualifications, whether the treatment is genuinely suited to your skin, the clinical standards followed, the quality of aftercare provided, and how transparently the clinic communicates about expected outcomes and risks. For current pricing specific to your skin and goals, it’s best to contact RamaCare directly for a consultation.",
};

const MEDICAL_GRADE = {
  paragraphs: [
    "The term Medical Grade Chemical Peel Dubai is often used in marketing, but it’s worth understanding what actually matters clinically. A professionally administered chemical peel should be selected and applied based on a proper patient assessment, the specific skin condition being treated, the treatment goal, an appropriately matched formulation and depth, sound clinical judgment during application, and structured aftercare. The formulation itself is only one part of a safe outcome — clinical assessment and supervision throughout the process are what genuinely differentiate a professionally delivered treatment from an over-the-counter or unsupervised option.",
  ],
};

const CHOOSE_CLINIC = {
  intro:
    "Finding the Best Chemical Peel Clinic in Dubai for your needs involves evaluating several factors rather than relying on marketing claims alone:",
  items: [
    { title: "Professional Credentials", text: "Check that the clinic and treating clinicians hold relevant DHA healthcare qualifications and appropriate licensing." },
    { title: "Individual Skin Assessment", text: "A responsible clinic assesses your specific skin rather than recommending the same peel to every patient who walks in." },
    { title: "Treatment Transparency", text: "You should clearly understand the expected benefits, potential risks, recovery process, alternative options, and an approximate treatment plan before proceeding." },
    { title: "Appropriate Aftercare", text: "Clear, individualized post-treatment guidance should be provided as a standard part of the service." },
    { title: "Genuine Results", text: "Any before-and-after photographs shown should be authentic, properly consented, and presented honestly rather than as best-case-only examples." },
    { title: "Patient Safety & Standards", text: "Clinical hygiene standards and appropriate treatment protocols should be evident and easy to ask about." },
  ],
};

const NEAR_ME = {
  paragraphs: [
    "If you’re searching for a “Chemical Peel Near Me” option in Dubai, it helps to evaluate nearby clinics on more than just proximity. Consider the clinic’s location and accessibility, the professional qualifications of its clinicians, whether a proper consultation is offered before treatment, the range of treatment options available, and the quality of follow-up and aftercare support provided.",
    "RamaCare Polyclinic is located in Jumeirah 1, Dubai, offering accessible Chemical Peel Treatment in Dubai within a broader healthcare setting, alongside a formal consultation and skin assessment process for patients considering treatment.",
  ],
};

const WHY_CHOOSE = {
  paragraphs: [
    "RamaCare Polyclinic operates as a DHA-licensed healthcare facility in Jumeirah 1, Dubai, offering aesthetic dermatology services within a broader, multidisciplinary healthcare environment. RamaCare describes its aesthetic dermatology services as personalized according to each patient’s individual skin type, concerns, and goals.",
    "For chemical peel treatment specifically, this translates into a consultation-first approach: your skin is assessed before any peel type or strength is recommended, treatment plans are individualized rather than standardized, and aftercare guidance is provided as part of the overall care pathway — not as an afterthought. RamaCare’s positioning is that of a professional healthcare provider offering aesthetic dermatology as one part of comprehensive patient care, rather than a purely cosmetic walk-in service.",
  ],
};

const PATIENT_JOURNEY = [
  { step: "01", title: "Book Consultation", desc: "Schedule your initial visit at RamaCare Polyclinic Jumeirah 1" },
  { step: "02", title: "Skin Assessment", desc: "Clinician evaluates skin type, tone, active concerns & barrier health" },
  { step: "03", title: "Identify Skin Concern", desc: "Determine exact causes of pigmentation, acne, texture or dullness" },
  { step: "04", title: "Select Peel Solution", desc: "Match precise acid formulation, concentration & layering plan" },
  { step: "05", title: "Clinical Treatment", desc: "Safe, controlled application under professional supervision" },
  { step: "06", title: "Personalized Aftercare", desc: "Receive customized recovery instructions & soothing skincare" },
  { step: "07", title: "Controlled Recovery", desc: "Gentle shedding and skin renewal over 3 to 7 days" },
  { step: "08", title: "Progress Review", desc: "Clinician evaluates skin response & texture improvement" },
  { step: "09", title: "Follow-Up Care", desc: "Maintain results with ongoing skin health regimen" },
];

const FAQS = [
  { q: "What is a chemical peel?", a: "A chemical peel is a professional treatment that uses a chemical solution to exfoliate controlled layers of skin, encouraging renewal underneath. The type and strength used depend on individual skin assessment." },
  { q: "What is Chemical Peel Treatment in Dubai?", a: "It refers to professionally administered chemical peel procedures offered by licensed clinics across Dubai, typically involving a consultation, skin assessment, individualized peel selection, treatment, and structured aftercare." },
  { q: "What are the main Chemical Peel Benefits?", a: "Potential benefits may include improved texture, a more even-looking tone, reduced dullness, and improvement in the appearance of selected pigmentation or acne-related concerns. Results vary by individual." },
  { q: "Can a chemical peel help pigmentation?", a: "Chemical exfoliation may support a more even-looking tone in some patients, but suitability depends on the type of pigmentation involved. A proper assessment is needed before any peel is recommended." },
  { q: "Can a chemical peel help hyperpigmentation?", a: "Some patients see improvement in the appearance of selected hyperpigmentation after professional treatment, though outcomes vary and certain skin types carry a risk of pigmentation changes if not properly assessed." },
  { q: "Can chemical peels help acne?", a: "Chemical peels may support skin cell turnover, which can help with selected superficial acne concerns. They are not a replacement for standard medical acne management in moderate-to-severe cases." },
  { q: "Can a chemical peel improve acne scars?", a: "It depends on the type of mark. Chemical peels may help with superficial discoloration or texture, but deeper atrophic scars generally require other treatment approaches." },
  { q: "What are the Chemical Peel Side Effects?", a: "Common, temporary effects include redness, dryness, tightness, and peeling. Less common risks include prolonged irritation, pigmentation changes, or scarring, depending on peel strength and aftercare." },
  { q: "What are the Side Effects of Chemical Peel on Face?", a: "Facial skin may temporarily show redness, flaking, dryness, and increased sun sensitivity after treatment. Following aftercare instructions helps reduce these effects." },
  { q: "How long does chemical peel recovery take?", a: "Recovery time depends on the peel’s depth. Superficial peels tend to involve shorter recovery, while medium and deeper peels generally require more time and closer supervision." },
  { q: "How many Chemical Peel Sessions are needed?", a: "This varies by treatment goal, peel type, and skin condition. There is no universal number — your clinician may recommend a session series based on your specific plan." },
  { q: "When will I see chemical peel results?", a: "Some changes may become visible as the skin completes its recovery phase, though the exact timeline depends on peel depth and individual healing." },
  { q: "What does Chemical Peel Before and After look like?", a: "Results can include brighter-looking, more even-toned, and smoother skin in some patients. Outcomes vary based on skin condition, peel type, and adherence to aftercare." },
  { q: "How much is Chemical Peel Cost in Dubai?", a: "Cost depends on peel type, treatment area, strength, number of sessions, and your individualized treatment plan. Contact RamaCare directly for current pricing after a consultation." },
  { q: "Is a medical-grade chemical peel safer?", a: "Safety depends more on proper assessment, clinical judgment, and supervision than on marketing terms alone. A qualified clinician selecting and applying the peel appropriately is what matters most." },
  { q: "Can I find a Chemical Peel Near Me in Dubai?", a: "Yes — RamaCare Polyclinic offers chemical peel consultations in Jumeirah 1, Dubai, alongside broader aesthetic dermatology and healthcare services." },
  { q: "Is a chemical peel suitable for all skin types?", a: "Not automatically. Suitability depends on skin type, tone, sensitivity, and current skin condition, which is why a professional assessment is required before any treatment is recommended." },
  { q: "Can I wear makeup after a chemical peel?", a: "Your clinician will advise on timing based on your specific peel and skin response, as treated skin can be more sensitive immediately after treatment." },
  { q: "What should I avoid after a chemical peel?", a: "Generally, avoid picking at peeling skin, unnecessary sun exposure, and harsh or active skincare products until your clinician confirms your skin has sufficiently recovered." },
  { q: "How do I book a chemical peel consultation at RamaCare?", a: "You can call, WhatsApp, or use RamaCare’s online booking option to schedule a consultation and skin assessment at the Jumeirah 1 clinic." },
];

const INTERNAL_LINKS = [
  { text: "Aesthetic Dermatology Services in Dubai", url: "/services/aesthetic-dermatology-dubai/", desc: "Explore our full range of medical & cosmetic dermatology solutions." },
  { text: "Skin Tightening Treatments", url: "/services/skin-tightening-dubai/", desc: "Learn about RF and energy-based skin tightening options." },
  { text: "Microdermabrasion Therapy", url: "/services/microdermabrasion-dubai/", desc: "Discover gentle mechanical exfoliation for instant glow." },
  { text: "Skin Boosters & Hydration", url: "/services/skin-boosters-dubai/", desc: "Deep hyaluronic acid hydration for glowing skin." },
  { text: "Facial Treatments in Dubai", url: "/services/facial-dubai/", desc: "Custom medical facials designed for all skin types." },
  { text: "PRP Facial Therapy", url: "/services/face-prp-in-dubai/", desc: "Platelet-Rich Plasma therapy for natural skin renewal." },
  { text: "Book an Appointment", url: "/book-appointment/", desc: "Schedule your skin consultation with our DHA-licensed team." },
  { text: "Polyclinic in Jumeirah 1", url: "/services/polyclinic-in-jumeirah-1/", desc: "Learn about our healthcare facility in Jumeirah 1, Dubai." },
];

const FINAL_CTA = {
  heading: "Ready to Explore Chemical Peel Treatment Dubai?",
  body: "The appropriate first step is a professional consultation and skin assessment — not a self-selected peel type or strength. A qualified clinician at RamaCare can evaluate your skin, discuss your goals, and explain whether a chemical peel, or an alternative treatment, is more appropriate for your concern.",
  closing: "Every treatment plan begins with understanding your skin — not a promise of guaranteed results.",
};

/* -------------------------------------------------------------------------- */
/*  STRUCTURED DATA (JSON-LD)                                                 */
/* -------------------------------------------------------------------------- */

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalClinic",
      name: "RamaCare Polyclinic",
      url: "https://ramacarepolyclinic.ae/",
      image: "https://ramacarepolyclinic.ae/images/RamaCare%20Polyclinic%20Aesthetic%20Dermatology.jpg",
      description:
        "RamaCare Polyclinic is a DHA-licensed healthcare facility in Jumeirah 1, Dubai, offering aesthetic dermatology services including chemical peel treatment.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "12 Al Dhiyafah Rd, Jumeirah Terrace Building, Ground Floor",
        addressLocality: "Jumeirah 1",
        addressRegion: "Dubai",
        addressCountry: "AE",
      },
      telephone: "+971566597878",
      priceRange: "$$",
      medicalSpecialty: "Dermatology",
    },
    {
      "@type": "MedicalTherapy",
      name: "Chemical Peel Treatment",
      alternateName: "Chemical Peel Treatment Dubai",
      description:
        "A professionally administered chemical exfoliation treatment used to address concerns such as uneven skin tone, hyperpigmentation, dullness, texture, and selected acne-related marks.",
      medicineSystem: "https://schema.org/WesternConventional",
      relevantSpecialty: { "@type": "MedicalSpecialty", name: "Dermatology" },
      provider: { "@type": "MedicalClinic", name: "RamaCare Polyclinic", url: "https://ramacarepolyclinic.ae/" },
    },
    {
      "@type": "MedicalWebPage",
      name: "Chemical Peel Treatment Dubai: Benefits, Procedure, Results & Cost",
      url: SITE_URL + PAGE_PATH,
      description:
        "Explore Chemical Peel Treatment Dubai at RamaCare Polyclinic, Jumeirah 1. Personalized skin assessments for pigmentation, texture and tone. Book a consultation.",
      medicalAudience: { "@type": "MedicalAudience", audienceType: "Patient" },
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
     },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL + "/" },
        { "@type": "ListItem", position: 2, name: "Services", item: SITE_URL + "/services/" },
        { "@type": "ListItem", position: 3, name: "Aesthetic Dermatology", item: SITE_URL + "/services/aesthetic-dermatology-dubai/" },
        { "@type": "ListItem", position: 4, name: "Chemical Peel Treatment Dubai", item: SITE_URL + PAGE_PATH },
      ],
    },
    {
      "@type": "Organization",
      name: "RamaCare Polyclinic",
      url: SITE_URL + "/",
      logo: SITE_URL + "/images/Logo.png",
    },
  ],
};

/* -------------------------------------------------------------------------- */
/*  DESIGN COMPONENTS                                                         */
/* -------------------------------------------------------------------------- */

function Eyebrow({ children, className }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#1F5E4B]",
        className
      )}
    >
      <span aria-hidden className="h-2 w-2 rounded-full bg-[#1F5E4B]" />
      {children}
    </span>
  );
}

function SectionHeader({ id, eyebrow, title, icon: Icon }) {
  return (
    <div className="mb-8 border-b border-slate-200/80 pb-4">
      <Eyebrow>{eyebrow}</Eyebrow>
      <div className="mt-3 flex items-center gap-3">
        {Icon && (
          <div className="p-3 rounded-2xl bg-[#1F5E4B]/10 text-[#1F5E4B] shrink-0">
            <Icon className="w-6 h-6" />
          </div>
        )}
        <h2
          id={`${id}-heading`}
          className="font-sans text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
          {title}
        </h2>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  HORIZONTAL SCROLLABLE QUICK NAVIGATION BAR                                 */
/* -------------------------------------------------------------------------- */

function HorizontalQuickNav({ items }) {
  const navRef = useRef(null);

  const scroll = (direction) => {
    if (navRef.current) {
      const scrollAmount = direction === "left" ? -340 : 340;
      navRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="sticky top-20 z-30 bg-white/95 backdrop-blur-md border-y border-slate-200/90 shadow-xs py-3.5 w-full">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 flex items-center gap-3">
        
        {/* Left Arrow Button */}
        <button
          onClick={() => scroll("left")}
          className="p-2.5 rounded-full bg-[#FAF8F5] hover:bg-[#1F5E4B] hover:text-white text-[#1F5E4B] border border-slate-200 transition-all shrink-0 shadow-2xs cursor-pointer"
          aria-label="Scroll left navigation"
          title="Scroll Left"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Scrollable Pills Container */}
        <div
          ref={navRef}
          className="flex items-center gap-2.5 overflow-x-auto scroll-smooth py-1 px-1 flex-1 text-xs font-semibold whitespace-nowrap scrollbar-none"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {items.map((item, index) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#FAF8F5] text-slate-700 hover:bg-[#1F5E4B] hover:text-white border border-slate-200/80 hover:border-[#1F5E4B] transition-all shrink-0 shadow-2xs group"
            >
              <span className="font-bold text-[#1F5E4B] group-hover:text-white transition-colors">
                {index + 1}.
              </span>
              <span>{item.title}</span>
            </a>
          ))}
        </div>

        {/* Right Arrow Button */}
        <button
          onClick={() => scroll("right")}
          className="p-2.5 rounded-full bg-[#FAF8F5] hover:bg-[#1F5E4B] hover:text-white text-[#1F5E4B] border border-slate-200 transition-all shrink-0 shadow-2xs cursor-pointer"
          aria-label="Scroll right navigation"
          title="Scroll Right"> 
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  MAIN PAGE EXPORT                                                          */
/* -------------------------------------------------------------------------- */

export default function Page() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/971566597878?text=Hello%20RamaCare,%20I'd%20like%20to%20book%20a%20Chemical%20Peel%20consultation.", "_blank");
  };

  return (
    <Layout>
      <Head>
        <title key="title">Chemical Peel Treatment Dubai | RamaCare Polyclinic Jumeirah</title>
        <meta
          key="description"
          name="description"
          content="Explore Chemical Peel Treatment Dubai at RamaCare Polyclinic, Jumeirah 1. Personalized skin assessments for pigmentation, texture and tone. Book a consultation."
        />
        <meta
          key="keywords"
          name="keywords"
          content="Chemical Peel Treatment Dubai, Chemical Peel Dubai, Chemical Peel for Hyperpigmentation, Chemical Peel for Acne, Medical Grade Chemical Peel Dubai, RamaCare Polyclinic, Aesthetic Dermatology Jumeirah"
        />
        <link rel="canonical" href={SITE_URL + PAGE_PATH} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Chemical Peel Treatment Dubai: Benefits, Procedure, Results & Cost" />
        <meta property="og:description" content="Explore Chemical Peel Treatment Dubai at RamaCare Polyclinic, Jumeirah 1. Personalized skin assessments for pigmentation, texture and tone. Book a consultation." />
        <meta property="og:url" content={SITE_URL + PAGE_PATH} />
        <meta property="og:image" content="https://ramacarepolyclinic.ae/images/Chemical%20Peel%20Treatment%20Dubai%20consultation%20session.jpg" key="og:image" />
        <meta property="og:image:width" content="1200" key="og:image:width" />
        <meta property="og:image:height" content="630" key="og:image:height" />
        <meta property="og:image:alt" content="Chemical Peel Treatment Dubai consultation session at RamaCare Polyclinic Jumeirah 1" key="og:image:alt" />
        <meta property="og:site_name" content="RamaCare Polyclinic" />
        <meta property="og:locale" content="en_AE" key="og:locale" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content="Chemical Peel Treatment Dubai: Benefits, Procedure, Results & Cost" key="twitter:title" />
        <meta name="twitter:description" content="Explore Chemical Peel Treatment Dubai at RamaCare Polyclinic, Jumeirah 1. Personalized skin assessments for pigmentation, texture and tone." key="twitter:description" />
        <meta name="twitter:image" content="https://ramacarepolyclinic.ae/images/Chemical%20Peel%20Treatment%20Dubai%20consultation%20session.jpg" key="twitter:image" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
      </Head>

      {/* ============ BREADCRUMB & HERO ============ */}
      <section className="w-full bg-gradient-to-b from-[#F5F1EA]/80 via-[#F5F1EA]/30 to-white pt-8 pb-16">
        <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12">
          <nav aria-label="Breadcrumb" className="text-xs font-medium text-slate-500 mb-6 flex flex-wrap items-center gap-2">
            <Link href="/" className="hover:text-[#1F5E4B] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services/" className="hover:text-[#1F5E4B] transition-colors">Services</Link>
            <span>/</span>
            <Link href="/services/aesthetic-dermatology-dubai/" className="hover:text-[#1F5E4B] transition-colors">Aesthetic Dermatology</Link>
            <span>/</span>
            <span aria-current="page" className="text-[#1F5E4B] font-semibold">Chemical Peel Treatment Dubai</span>
          </nav>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1F5E4B]/10 border border-[#1F5E4B]/20 text-[#1F5E4B] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#1F5E4B]" />
                <span>DHA Licensed Aesthetic Dermatology • Jumeirah 1</span>
              </div>

              <h1 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-slate-900">
                Chemical Peel Treatment Dubai: <span className="text-[#1F5E4B]">Benefits, Procedure, Results & Cost</span>
              </h1>

              <div className="space-y-4 text-base leading-relaxed text-slate-600 font-normal">
                {HERO.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 items-center pt-2">
                <Link
                  href="/book-appointment/"
                  className="inline-flex items-center gap-2.5 rounded-full bg-[#1F5E4B] px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-[#1F5E4B]/20 hover:bg-[#184b3c] transition-all hover:scale-[1.02]"
                >
                  <Calendar className="w-4 h-4" /> Book a Consultation
                </Link>
                <button
                  onClick={handleWhatsApp}
                  className="inline-flex items-center gap-2.5 rounded-full border-2 border-[#1F5E4B] px-7 py-3 text-xs font-bold uppercase tracking-wider text-[#1F5E4B] bg-white hover:bg-[#F5F1EA] transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" /> WhatsApp Clinic
                </button>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#1F5E4B]/10 text-[#1F5E4B]">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">DHA Licensed</p>
                    <p className="text-[11px] text-slate-500">Jumeirah 1 Facility</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#1F5E4B]/10 text-[#1F5E4B]">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">Medical Grade</p>
                    <p className="text-[11px] text-slate-500">Tailored Solutions</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#1F5E4B]/10 text-[#1F5E4B]">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">Consult First</p>
                    <p className="text-[11px] text-slate-500">Expert Clinicians</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              {/* IMAGE 1: HERO CLINICAL CONSULTATION */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-slate-200/80 shadow-2xl shadow-[#1F5E4B]/10 w-full">
                <Image
                  src="/images/Chemical Peel Treatment Dubai consultation session.jpg"
                  alt="Chemical Peel Treatment Dubai consultation session at RamaCare Polyclinic Jumeirah 1"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>

              <div className="absolute -bottom-6 -left-6 max-w-xs rounded-2xl border border-slate-200/80 bg-white/95 p-5 shadow-xl backdrop-blur-sm hidden sm:block">
                <div className="flex items-center gap-3 mb-1">
                  <MapPin className="w-5 h-5 text-[#1F5E4B]" />
                  <span className="font-sans text-lg font-bold text-[#1F5E4B]">RamaCare Polyclinic</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Jumeirah 1, Dubai — Medical skin procedures starting with personal consultation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ QUICK ANSWER BANNER ============ */}
      <section className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12 py-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#1F5E4B] via-[#1A5241] to-[#154637] p-8 md:p-12 text-white shadow-xl">
          <div className="relative z-10 max-w-5xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-white text-xs font-bold uppercase tracking-wider mb-4">
              <Zap className="w-3.5 h-3.5" /> Quick Answer Overview
            </div>
            <h2 className="font-sans text-2xl sm:text-3xl font-extrabold tracking-tight mb-4 text-white">
              {QUICK_ANSWER.heading}
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-white/90 font-normal">
              {QUICK_ANSWER.body}
            </p>
          </div>
        </div>
      </section>

      {/* ============ STICKY HORIZONTAL QUICK NAVIGATION BAR ============ */}
      <HorizontalQuickNav items={TOC_ITEMS} />

      {/* ============ FULL-WIDTH PAGE SECTIONS (EDGE TO EDGE CLEAN FLOW) ============ */}
      <div className="w-full space-y-0">

        {/* 1. WHAT IS A CHEMICAL PEEL */}
        <section id="what-is-a-chemical-peel" className="scroll-mt-36 w-full py-16 px-6 sm:px-10 lg:px-16 bg-white border-t border-slate-200/60">
          <div className="max-w-[1400px] mx-auto">
            <SectionHeader id="what-is" eyebrow="Overview" title={WHAT_IS.heading} icon={Layers} />
            <div className="space-y-4 text-slate-600 leading-relaxed mb-8 text-base sm:text-lg">
              {WHAT_IS.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="grid lg:grid-cols-12 gap-8 items-center mt-8">
              {/* IMAGE 2: MELASMA & PIGMENTATION PEEL */}
              <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-slate-200 h-80 relative shadow-md">
                <Image
                  src="/images/Chemical peel for melasma and facial hyperpigmentation treatment.jpg"
                  alt="Chemical peel for melasma and facial hyperpigmentation treatment at RamaCare Polyclinic Dubai"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-900/85 to-transparent p-4">
                  <p className="text-white text-xs font-medium">Professional Chemical Peel Application in Jumeirah 1</p>
                </div>
              </div>
              <div className="lg:col-span-6 p-8 rounded-2xl bg-[#F5F1EA] border border-[#1F5E4B]/20 flex flex-col justify-center h-full">
                <p className="text-xs font-bold uppercase tracking-wider text-[#1F5E4B] mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5E4B]" /> Key Clinical Takeaway
                </p>
                <p className="text-base sm:text-lg font-semibold text-slate-800 leading-relaxed">
                  {WHAT_IS.callout}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. HOW DOES A CHEMICAL PEEL WORK */}
        <section id="how-does-a-chemical-peel-work" className="scroll-mt-36 w-full py-16 px-6 sm:px-10 lg:px-16 bg-[#FAF8F5] border-t border-slate-200/60">
          <div className="max-w-[1400px] mx-auto">
            <SectionHeader id="how-it-works" eyebrow="Treatment Process" title="How Does a Chemical Peel Work?" icon={Zap} />
            <p className="text-slate-600 mb-8 text-base sm:text-lg">Chemical exfoliation follows a structured 6-step medical protocol:</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {HOW_IT_WORKS.steps.map((st) => (
                <div key={st.step} className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-[#1F5E4B]/40 transition-all flex flex-col justify-between">
                  <div>
                    <span className="inline-block text-xs font-bold text-[#1F5E4B] bg-[#1F5E4B]/10 px-3 py-1 rounded-md mb-3">
                      Step {st.step}
                    </span>
                    <h3 className="font-bold text-slate-900 text-base mb-2">{st.label}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{st.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. CHEMICAL PEEL BENEFITS */}
        <section id="chemical-peel-benefits" className="scroll-mt-36 w-full py-16 px-6 sm:px-10 lg:px-16 bg-white border-t border-slate-200/60">
          <div className="max-w-[1400px] mx-auto">
            <SectionHeader id="benefits" eyebrow="Advantages" title="Chemical Peel Benefits" icon={Sparkles} />
            <p className="text-slate-600 mb-8 text-base sm:text-lg">{BENEFITS.intro}</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {BENEFITS.items.map((b) => (
                <div key={b} className="flex items-start gap-3 p-4 rounded-xl bg-emerald-50/60 border border-emerald-100">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5E4B] shrink-0 mt-0.5" />
                  <span className="text-sm font-semibold text-slate-800">{b}</span>
                </div>
              ))}
            </div>
            <div className="p-6 rounded-2xl bg-amber-50 border-l-4 border-amber-500 text-xs sm:text-sm text-amber-900 leading-relaxed">
              <span className="font-bold">Important Clinical Note: </span>{BENEFITS.disclaimer}
            </div>
          </div>
        </section>

        {/* 4. WHAT SKIN CONCERNS CAN CHEMICAL PEELS ADDRESS */}
        <section id="skin-concerns" className="scroll-mt-36 w-full py-16 px-6 sm:px-10 lg:px-16 bg-[#F5F1EA]/50 border-t border-slate-200/60">
          <div className="max-w-[1400px] mx-auto">
            <SectionHeader id="concerns" eyebrow="Applications" title="What Skin Concerns Can Chemical Peels Address?" icon={Target} />
            <p className="text-slate-600 mb-6 text-base sm:text-lg">{SKIN_CONCERNS.intro}</p>
            <div className="flex flex-wrap gap-3 mb-8">
              {SKIN_CONCERNS.items.map((item) => (
                <span key={item} className="px-5 py-2.5 rounded-full bg-white text-[#1F5E4B] text-xs sm:text-sm font-semibold border border-[#1F5E4B]/20 shadow-2xs">
                  • {item}
                </span>
              ))}
            </div>
            <div className="text-sm text-slate-600 leading-relaxed bg-white p-6 rounded-2xl border border-slate-200 space-y-3 shadow-2xs">
              <p>{SKIN_CONCERNS.outro}</p>
              <p className="text-xs font-semibold text-[#1F5E4B] flex flex-wrap gap-3 pt-3 border-t border-slate-200">
                <span>Related Alternatives:</span>
                <Link href="/services/microdermabrasion-dubai/" className="underline hover:text-[#184b3c]">Microdermabrasion Therapy</Link>
                <span>•</span>
                <Link href="/services/skin-boosters-dubai/" className="underline hover:text-[#184b3c]">Skin Boosters & Hydration</Link>
                <span>•</span>
                <Link href="/services/aesthetic-dermatology-dubai/" className="underline hover:text-[#184b3c]">Aesthetic Dermatology Services</Link>
              </p>
            </div>
          </div>
        </section>

        {/* 5. CHEMICAL PEEL FOR HYPERPIGMENTATION */}
        <section id="hyperpigmentation" className="scroll-mt-36 w-full py-16 px-6 sm:px-10 lg:px-16 bg-white border-t border-slate-200/60">
          <div className="max-w-[1400px] mx-auto">
            <SectionHeader id="hyper" eyebrow="Pigment Care" title="Chemical Peel for Hyperpigmentation" icon={Sun} />
            
            <div className="grid lg:grid-cols-12 gap-8 items-center mb-8">
              <div className="lg:col-span-7 space-y-4">
                <p className="text-slate-600 text-base sm:text-lg">{HYPERPIGMENTATION.intro}</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {HYPERPIGMENTATION.items.map((item) => (
                    <div key={item} className="flex items-center gap-3 p-4 rounded-xl bg-[#FAF8F5] border border-slate-200">
                      <Sun className="w-4 h-4 text-[#1F5E4B] shrink-0" />
                      <span className="text-xs sm:text-sm font-semibold text-slate-800">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* IMAGE 3: DERMATOLOGIST EXAMINING FACIAL PIGMENTATION */}
              <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-slate-200 h-72 relative shadow-md">
                <Image
                  src="/images/DHA-licensed dermatologist examining facial hyperpigmentation prior.jpg"
                  alt="DHA-licensed dermatologist examining facial hyperpigmentation prior to chemical peel treatment in Dubai"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute bottom-0 inset-x-0 bg-slate-900/80 p-3 text-center">
                  <p className="text-white text-xs font-semibold">Dermatologist Pigmentation Assessment</p>
                </div>
              </div>
            </div>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{HYPERPIGMENTATION.outro}</p>
          </div>
        </section>

        {/* 6. CHEMICAL PEEL FOR PIGMENTATION */}
        <section id="pigmentation" className="scroll-mt-36 w-full py-16 px-6 sm:px-10 lg:px-16 bg-[#FAF8F5] border-t border-slate-200/60">
          <div className="max-w-[1400px] mx-auto">
            <SectionHeader id="pigment" eyebrow="Detailed Classification" title="Chemical Peel for Pigmentation" icon={Activity} />
            <p className="text-slate-600 mb-6 text-base sm:text-lg">{PIGMENTATION.intro}</p>
            
            {/* FULL WIDTH STYLED TABLE */}
            <div className="overflow-x-auto rounded-2xl border border-slate-200 mb-8 shadow-xs">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-[#1F5E4B] text-white uppercase font-bold text-xs tracking-wider">
                  <tr>
                    <th className="p-5">Pigmentation Category</th>
                    <th className="p-5">Common Root Cause</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  {PIGMENTATION.table.map((row) => (
                    <tr key={row.type} className="hover:bg-[#FAF8F5] transition-colors">
                      <td className="p-5 font-bold text-slate-900">{row.type}</td>
                      <td className="p-5 text-slate-600">{row.cause}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{PIGMENTATION.outro}</p>
          </div>
        </section>

        {/* 7 & 8. ACNE & ACNE SCARS */}
        <section id="acne" className="scroll-mt-36 w-full py-16 px-6 sm:px-10 lg:px-16 bg-white border-t border-slate-200/60">
          <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-10">
            <div className="flex flex-col justify-between">
              <div>
                <SectionHeader id="acne-sec" eyebrow="Acne Management" title="Chemical Peel for Acne" icon={Droplets} />
                <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                  {ACNE.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
              {/* IMAGE 4: ACNE PRONE SKIN CONSULTATION */}
              <div className="rounded-2xl overflow-hidden border border-slate-200 h-56 relative shadow-xs">
                <Image
                  src="/images/Clinical consultation for acne-prone skin and acne mark.jpg"
                  alt="Clinical consultation for acne-prone skin and acne mark exfoliation in Dubai"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div id="acne-scars" className="scroll-mt-36 flex flex-col justify-between">
              <div>
                <SectionHeader id="scars" eyebrow="Texture & Marks" title="Chemical Peel for Acne Scars" icon={CheckCircle2} />
                <p className="text-slate-600 mb-4 text-sm sm:text-base">{ACNE_SCARS.intro}</p>
                <div className="space-y-2.5 mb-6">
                  {ACNE_SCARS.items.map((it) => (
                    <div key={it} className="flex items-center gap-3 p-3.5 rounded-xl bg-[#FAF8F5] border border-slate-200 text-xs sm:text-sm font-semibold text-slate-800">
                      <Check className="w-4 h-4 text-[#1F5E4B]" />
                      {it}
                    </div>
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">{ACNE_SCARS.outro}</p>
              </div>
              <div className="pt-4 border-t border-slate-200 text-xs sm:text-sm font-semibold text-[#1F5E4B]">
                <Link href="/services/rf-microneedling-dubai/" className="underline hover:text-[#184b3c]">Explore RF Microneedling for Indented Scars →</Link>
              </div>
            </div>
          </div>
        </section>

        {/* 9. TYPES OF CHEMICAL PEELS */}
        <section id="types-of-chemical-peels" className="scroll-mt-36 w-full py-16 px-6 sm:px-10 lg:px-16 bg-gradient-to-b from-[#F5F1EA]/40 to-white border-t border-slate-200/60">
          <div className="max-w-[1400px] mx-auto">
            <SectionHeader id="types" eyebrow="Peel Depth Ladder" title="Types of Chemical Peels" icon={Layers} />
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {TYPES.items.map((t) => (
                <div key={t.title} className={cn("p-6 rounded-2xl border flex flex-col justify-between shadow-2xs", t.color)}>
                  <div>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-white/90 border border-current inline-block mb-3">
                      {t.badge}
                    </span>
                    <h3 className="font-bold text-lg mb-1">{t.title}</h3>
                    <p className="text-xs font-bold text-slate-500 mb-3">{t.depth}</p>
                    <p className="text-xs sm:text-sm leading-relaxed">{t.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-5 rounded-2xl bg-[#F5F1EA] border border-[#1F5E4B]/20 text-xs sm:text-sm text-slate-800 font-semibold">
              <AlertTriangle className="w-4 h-4 text-[#1F5E4B] inline mr-2" />
              {TYPES.note}
            </div>
          </div>
        </section>

        {/* 10. COMMON PEEL INGREDIENTS */}
        <section id="common-peel-ingredients" className="scroll-mt-36 w-full py-16 px-6 sm:px-10 lg:px-16 bg-[#FAF8F5] border-t border-slate-200/60">
          <div className="max-w-[1400px] mx-auto">
            <SectionHeader id="ingredients" eyebrow="Active Formulations" title="Common Peel Ingredients" icon={Droplets} />
            <p className="text-slate-600 mb-8 text-base sm:text-lg">{INGREDIENTS.intro}</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {INGREDIENTS.items.map((ing) => (
                <div key={ing.name} className="p-5 rounded-2xl bg-white border border-slate-200/80 flex flex-col justify-between shadow-2xs">
                  <div>
                    <span className="font-bold text-slate-900 text-base block mb-1">{ing.name}</span>
                    <span className="text-xs font-semibold text-[#1F5E4B] bg-[#1F5E4B]/10 px-2.5 py-0.5 rounded inline-block mb-3">
                      {ing.tag}
                    </span>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{ing.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs sm:text-sm text-slate-500 italic bg-white p-4 rounded-xl border border-slate-200">
              {INGREDIENTS.note}
            </p>
          </div>
        </section>

        {/* 11 & 12. SUITABLE CANDIDATES vs AVOID TREATMENT */}
        <section id="suitable-candidate" className="scroll-mt-36 w-full py-16 px-6 sm:px-10 lg:px-16 bg-white border-t border-slate-200/60">
          <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-10">
            <div className="rounded-3xl border border-emerald-200 bg-emerald-50/30 p-8 md:p-10 shadow-2xs">
              <div className="flex items-center gap-2 text-[#1F5E4B] font-bold text-xs uppercase tracking-wider mb-3">
                <CheckCircle2 className="w-4 h-4" /> Assessment Factors
              </div>
              <h2 className="font-sans text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-4">Who Is a Suitable Candidate?</h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-4">{SUITABLE.intro}</p>
              <ul className="space-y-2.5 mb-6 text-xs sm:text-sm text-slate-800 font-medium">
                {SUITABLE.items.map((it) => (
                  <li key={it} className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#1F5E4B] shrink-0" />
                    {it}
                  </li>
                ))}
              </ul>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-4 border-t border-emerald-200/60">{SUITABLE.outro}</p>
            </div>

            <div id="avoid-or-postpone" className="scroll-mt-36 rounded-3xl border border-amber-200 bg-amber-50/30 p-8 md:p-10 shadow-2xs">
              <div className="flex items-center gap-2 text-amber-700 font-bold text-xs uppercase tracking-wider mb-3">
                <XCircle className="w-4 h-4" /> Caution & Delays
              </div>
              <h2 className="font-sans text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-4">Who Should Avoid or Postpone?</h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-4">{AVOID.intro}</p>
              <ul className="space-y-2.5 mb-6 text-xs sm:text-sm text-slate-800 font-medium">
                {AVOID.items.map((it) => (
                  <li key={it} className="flex items-center gap-2.5">
                    <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                    {it}
                  </li>
                ))}
              </ul>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-4 border-t border-amber-200/60">{AVOID.outro}</p>
            </div>
          </div>
        </section>

        {/* 13. CHEMICAL PEEL FOR FACE */}
        <section id="chemical-peel-for-face" className="scroll-mt-36 w-full py-16 px-6 sm:px-10 lg:px-16 bg-[#FAF8F5] border-t border-slate-200/60">
          <div className="max-w-[1400px] mx-auto">
            <SectionHeader id="face-sec" eyebrow="Facial Care" title="Chemical Peel for Face" icon={UserCheck} />
            <div className="space-y-4 text-slate-600 leading-relaxed text-base sm:text-lg">
              {FACE.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </section>

        {/* 14. CHEMICAL PEEL PROCEDURE AT RAMACARE */}
        <section id="procedure" className="scroll-mt-36 w-full py-16 px-6 sm:px-10 lg:px-16 bg-white border-t border-slate-200/60">
          <div className="max-w-[1400px] mx-auto">
            <SectionHeader id="proc-sec" eyebrow="Clinical Pathway" title="Chemical Peel Procedure at RamaCare" icon={ShieldCheck} />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {PROCEDURE.steps.map((st, i) => (
                <div key={st.title} className="p-6 rounded-2xl bg-[#FAF8F5] border border-slate-200/80 flex flex-col justify-between">
                  <div>
                    <span className="font-sans text-sm font-bold text-[#1F5E4B] shrink-0 w-8 h-8 rounded-full bg-[#1F5E4B]/10 flex items-center justify-center mb-3">
                      {i + 1}
                    </span>
                    <h3 className="font-bold text-slate-900 text-base mb-1">{st.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{st.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 15. DOES A CHEMICAL PEEL HURT */}
        <section id="does-it-hurt" className="scroll-mt-36 w-full py-16 px-6 sm:px-10 lg:px-16 bg-[#FAF8F5] border-t border-slate-200/60">
          <div className="max-w-[1400px] mx-auto">
            <SectionHeader id="pain-sec" eyebrow="Comfort & Sensation" title="Does a Chemical Peel Hurt?" icon={Heart} />
            <div className="space-y-4 text-slate-600 leading-relaxed text-base sm:text-lg">
              {DOES_IT_HURT.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </section>

        {/* 16 & 17. SIDE EFFECTS & FACIAL SIDE EFFECTS */}
        <section id="side-effects" className="scroll-mt-36 w-full py-16 px-6 sm:px-10 lg:px-16 bg-white border-t border-slate-200/60">
          <div className="max-w-[1400px] mx-auto">
            <SectionHeader id="side-sec" eyebrow="Safety & Risks" title="Chemical Peel Side Effects" icon={AlertTriangle} />
            <p className="text-slate-600 mb-6 text-base sm:text-lg">{SIDE_EFFECTS.intro}</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {SIDE_EFFECTS.commonItems.map((item) => (
                <div key={item} className="flex items-center gap-3 p-4 rounded-xl bg-amber-50/60 border border-amber-200 text-xs sm:text-sm font-semibold text-amber-900">
                  <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
                  {item}
                </div>
              ))}
            </div>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8">{SIDE_EFFECTS.outro}</p>
            
            <div id="side-effects-face" className="pt-8 border-t border-slate-200">
              <h3 className="font-sans text-2xl font-bold tracking-tight text-slate-900 mb-3">Side Effects of Chemical Peel on Face</h3>
              {SIDE_EFFECTS_FACE.paragraphs.map((p, i) => (
                <p key={i} className="text-sm sm:text-base text-slate-600 leading-relaxed">{p}</p>
              ))}
            </div>
          </div>
        </section>

        {/* 18. RECOVERY */}
        <section id="recovery" className="scroll-mt-36 w-full py-16 px-6 sm:px-10 lg:px-16 bg-[#FAF8F5] border-t border-slate-200/60">
          <div className="max-w-[1400px] mx-auto">
            <SectionHeader id="rec-sec" eyebrow="Downtime Expectation" title="Recovery Timeline by Peel Depth" icon={Clock} />
            <p className="text-slate-600 mb-8 text-base sm:text-lg">{RECOVERY.intro}</p>
            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              {RECOVERY.items.map((r) => (
                <div key={r.type} className="p-6 rounded-2xl bg-white border border-slate-200 flex flex-col justify-between shadow-2xs">
                  <div>
                    <span className="text-xs font-bold text-[#1F5E4B] block mb-2">{r.type}</span>
                    <p className="font-sans text-2xl font-bold text-slate-900 mb-3">{r.time}</p>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs sm:text-sm text-slate-500 italic">{RECOVERY.outro}</p>
          </div>
        </section>

        {/* 19. AFTERCARE */}
        <section id="aftercare" className="scroll-mt-36 w-full py-16 px-6 sm:px-10 lg:px-16 bg-white border-t border-slate-200/60">
          <div className="max-w-[1400px] mx-auto">
            <SectionHeader id="after-sec" eyebrow="Post-Peel Guidelines" title="Essential Aftercare Instructions" icon={ShieldCheck} />
            <p className="text-slate-600 mb-6 text-base sm:text-lg">{AFTERCARE.intro}</p>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {AFTERCARE.items.map((it) => (
                <div key={it} className="flex items-center gap-3 p-4 rounded-xl bg-emerald-50/70 border border-emerald-200/80 text-xs sm:text-sm font-semibold text-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5E4B] shrink-0" />
                  {it}
                </div>
              ))}
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{AFTERCARE.outro}</p>
          </div>
        </section>

        {/* 20 & 21. BEFORE/AFTER & RESULTS TIMELINE */}
        <section id="before-and-after" className="scroll-mt-36 w-full py-16 px-6 sm:px-10 lg:px-16 bg-[#FAF8F5] border-t border-slate-200/60">
          <div className="max-w-[1400px] mx-auto">
            <SectionHeader id="ba-sec" eyebrow="Results & Progress" title="Chemical Peel Before and After" icon={Activity} />
            
            <div className="grid lg:grid-cols-12 gap-8 items-center mb-10">
              <div className="lg:col-span-7 space-y-4 text-slate-600 leading-relaxed text-base sm:text-lg">
                {BEFORE_AFTER.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              {/* IMAGE 5: GLOWING SKIN RESULTS */}
              <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-slate-200 h-72 relative shadow-md">
                <Image
                  src="/images/professional chemical peel treatment.jpg"
                  alt="Visible skin renewal and even-toned radiant skin after professional chemical peel treatment at RamaCare"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute bottom-0 inset-x-0 bg-slate-900/80 p-3 text-center">
                  <p className="text-white text-xs font-semibold">Post-Recovery Skin Radiance</p>
                </div>
              </div>
            </div>

            <div id="results-timeline" className="pt-8 border-t border-slate-200">
              <h3 className="font-sans text-2xl font-bold tracking-tight text-slate-900 mb-3">Chemical Peel Results Timeline</h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">{RESULTS_TIMELINE.intro}</p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {RESULTS_TIMELINE.phases.map((ph) => (
                  <div key={ph.phase} className="p-5 rounded-2xl bg-white border border-slate-200 flex flex-col justify-between shadow-2xs">
                    <div>
                      <span className="text-xs font-bold text-[#1F5E4B] bg-[#1F5E4B]/10 px-2.5 py-1 rounded inline-block mb-3">
                        {ph.phase}
                      </span>
                      <p className="font-bold text-slate-900 text-sm mb-1">{ph.title}</p>
                      <p className="text-xs text-slate-600 leading-relaxed">{ph.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs sm:text-sm text-slate-500 italic">{RESULTS_TIMELINE.outro}</p>
            </div>
          </div>
        </section>

        {/* 22 & 23. SESSIONS & COST IN DUBAI */}
        <section id="sessions" className="scroll-mt-36 w-full py-16 px-6 sm:px-10 lg:px-16 bg-white border-t border-slate-200/60">
          <div className="max-w-[1400px] mx-auto">
            <SectionHeader id="sess-sec" eyebrow="Sessions & Investment" title="Chemical Peel Sessions & Cost in Dubai" icon={DollarSign} />
            <div className="space-y-4 text-slate-600 leading-relaxed mb-10 text-base sm:text-lg">
              {SESSIONS.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div id="cost" className="pt-8 border-t border-slate-200">
              <h3 className="font-sans text-2xl font-bold tracking-tight text-slate-900 mb-3">Cost Factors in Dubai</h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">{COST.intro}</p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {COST.items.map((it) => (
                  <div key={it} className="flex items-center gap-3 p-4 rounded-xl bg-[#FAF8F5] border border-slate-200 text-xs sm:text-sm font-semibold text-slate-800">
                    <DollarSign className="w-4 h-4 text-[#1F5E4B] shrink-0" />
                    {it}
                  </div>
                ))}
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{COST.outro}</p>
            </div>
          </div>
        </section>

        {/* 24. MEDICAL GRADE CHEMICAL PEEL DUBAI */}
        <section id="medical-grade" className="scroll-mt-36 w-full py-16 px-6 sm:px-10 lg:px-16 bg-[#FAF8F5] border-t border-slate-200/60">
          <div className="max-w-[1400px] mx-auto">
            <SectionHeader id="mg-sec" eyebrow="Clinical Quality" title="Medical Grade Chemical Peel Dubai" icon={Award} />
            <div className="space-y-4 text-slate-600 leading-relaxed text-base sm:text-lg">
              {MEDICAL_GRADE.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </section>

        {/* 25. HOW TO CHOOSE THE BEST CHEMICAL PEEL CLINIC */}
        <section id="choose-clinic" className="scroll-mt-36 w-full py-16 px-6 sm:px-10 lg:px-16 bg-white border-t border-slate-200/60">
          <div className="max-w-[1400px] mx-auto">
            <SectionHeader id="choose-sec" eyebrow="Clinic Selection Guide" title="How to Choose the Best Chemical Peel Clinic in Dubai" icon={Award} />
            <p className="text-slate-600 mb-8 text-base sm:text-lg">{CHOOSE_CLINIC.intro}</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {CHOOSE_CLINIC.items.map((it, i) => (
                <div key={it.title} className="p-6 rounded-2xl bg-[#FAF8F5] border border-slate-200/80 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-[#1F5E4B] block mb-2">0{i + 1}. {it.title}</span>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{it.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 26 & 27. NEAR ME & WHY CHOOSE RAMACARE */}
        <section id="near-me" className="scroll-mt-36 w-full py-16 px-6 sm:px-10 lg:px-16 bg-[#F5F1EA]/50 border-t border-slate-200/60">
          <div className="max-w-[1400px] mx-auto">
            <SectionHeader id="near-sec" eyebrow="Location & Practice" title="Chemical Peel Near Me in Dubai & Why Choose RamaCare" icon={MapPin} />
            <div className="space-y-4 text-slate-600 leading-relaxed mb-10 text-base sm:text-lg">
              {NEAR_ME.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div id="why-ramacare" className="pt-8 border-t border-slate-200">
              <h3 className="font-sans text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-6">Why Choose RamaCare Polyclinic?</h3>
              
              <div className="grid lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4 text-slate-600 leading-relaxed text-base sm:text-lg">
                  {WHY_CHOOSE.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                  <div className="pt-2 text-xs sm:text-sm font-semibold text-[#1F5E4B]">
                    <Link href="/services/polyclinic-in-jumeirah-1/" className="underline hover:text-[#184b3c]">
                      Learn more about our DHA-licensed polyclinic facility in Jumeirah 1 →
                    </Link>
                  </div>
                </div>
                {/* IMAGE 6: RAMACARE AESTHETIC CLINIC FACILITY */}
                <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-slate-200 h-72 relative shadow-md">
                  <Image
                    src="/images/RamaCare Polyclinic aesthetic dermatology treatment.jpg"
                    alt="RamaCare Polyclinic aesthetic dermatology treatment facility in Jumeirah 1, Dubai"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-slate-900/80 p-3 text-center">
                    <p className="text-white text-xs font-semibold">RamaCare Polyclinic Jumeirah 1 Facility</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 28. PATIENT JOURNEY (VISUAL TIMELINE) */}
        <section id="patient-journey" className="scroll-mt-36 w-full py-16 px-6 sm:px-10 lg:px-16 bg-white border-t border-slate-200/60">
          <div className="max-w-[1400px] mx-auto">
            <SectionHeader id="pj-sec" eyebrow="Patient Care Flow" title="Visual Patient Journey" icon={Activity} />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {PATIENT_JOURNEY.map((pj) => (
                <div key={pj.step} className="p-6 rounded-2xl bg-[#FAF8F5] border border-slate-200/80 shadow-2xs flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-[#1F5E4B] bg-[#1F5E4B]/10 px-3 py-1 rounded-md mb-3 inline-block">
                      Step {pj.step}
                    </span>
                    <h3 className="font-bold text-slate-900 text-base mb-2">{pj.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">{pj.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 29. FAQS (ACCORDION) */}
        <section id="faqs" className="scroll-mt-36 w-full py-16 px-6 sm:px-10 lg:px-16 bg-[#FAF8F5] border-t border-slate-200/60">
          <div className="max-w-[1400px] mx-auto">
            <SectionHeader id="faq-sec" eyebrow="Answers & Guidance" title="Frequently Asked Questions" icon={HelpCircle} />
            <div className="space-y-4">
              {FAQS.map((faq, index) => (
                <div key={faq.q} className="rounded-2xl border border-slate-200 overflow-hidden bg-white">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-6 text-left font-bold text-slate-900 text-base hover:bg-[#FAF8F5] transition-colors cursor-pointer"
                  >
                    <span>{index + 1}. {faq.q}</span>
                    <ChevronDown className={cn("w-5 h-5 text-[#1F5E4B] transition-transform duration-200 shrink-0 ml-3", openFaq === index && "rotate-180")} />
                  </button>
                  {openFaq === index && (
                    <div className="p-6 pt-0 text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-[#FAF8F5]/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 30. RELATED TREATMENTS (INTERLINKING CARDS) */}
        <section id="related-links" className="scroll-mt-36 w-full py-16 px-6 sm:px-10 lg:px-16 bg-white border-t border-slate-200/60">
          <div className="max-w-[1400px] mx-auto">
            <SectionHeader id="rel-sec" eyebrow="Internal Linking" title="Related Aesthetic Treatments at RamaCare" icon={ArrowRight} />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {INTERNAL_LINKS.map((link) => (
                <Link
                  key={link.url}
                  href={link.url}
                  className="group p-6 rounded-2xl bg-[#FAF8F5] border border-slate-200 hover:border-[#1F5E4B] shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm group-hover:text-[#1F5E4B] transition-colors flex items-center justify-between">
                      <span>{link.text}</span>
                      <ChevronRight className="w-4 h-4 text-[#1F5E4B] opacity-0 group-hover:opacity-100 transition-opacity shrink-0 ml-1" />
                    </h3>
                    <p className="text-xs text-slate-500 mt-2">{link.desc}</p>
                  </div>
                  <span className="text-xs font-semibold text-[#1F5E4B] underline mt-4 inline-block">
                    Learn More →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

      </div>

      {/* ============ FINAL CTA SECTION ============ */}
      <section className="w-full bg-gradient-to-r from-[#1F5E4B] via-[#1A5241] to-[#154637] py-20 px-6 sm:px-10 lg:px-16 text-white text-center">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 text-white text-xs font-bold uppercase tracking-wider mb-6">
            <Sparkles className="w-4 h-4" /> Consultation First Approach
          </div>
          <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6 text-white">
            {FINAL_CTA.heading}
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-white/90 mb-10 max-w-3xl mx-auto font-normal">
            {FINAL_CTA.body}
          </p>

          

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/book-appointment/"
              className="inline-flex items-center gap-2 rounded-full bg-white text-[#1F5E4B] px-8 py-3.5 text-xs font-bold uppercase tracking-wider shadow-lg hover:bg-[#F5F1EA] transition-all hover:scale-105"
            >
              <Calendar className="w-4 h-4" /> Book Appointment Now
            </Link>
            <button
              onClick={handleWhatsApp}
              className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-white/10 transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
            </button>
          </div>

          <p className="mt-8 text-xs text-white/70 italic">
            {FINAL_CTA.closing}
          </p>
        </div>
      </section>

      {/* Content Reviewer Badge */}
      <ContentReviewBadge doctorName="Sonita Sinaga" pageSlug="/services/chemical-peel-treatment-dubai/" />
    </Layout>
  );
}
