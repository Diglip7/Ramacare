import Layout from '../../../components/Layout';
import Head from 'next/head';
import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  BookOpen,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  ArrowUpRight,
  Info,
  AlertTriangle,
  Clock,
  Venus,
  Mars,
  Check,
  X,
  Sparkles,
  Droplet,
  FlaskConical,
  Stethoscope,
  Scissors,
  Camera,
  Search,
  ClipboardList,
  Award,
  Dna,
  Baby,
  Thermometer,
  ShieldAlert,
  Pill,
  TrendingDown,
  Flame,
  Ruler,
  CalendarDays,
  MessageCircle,
  Phone,
} from 'lucide-react';

// ---- Page content data ----

const sections = [
  { id: 'what-is', label: 'What Is Hair Thinning' },
  { id: 'vs-shedding', label: 'Thinning vs Shedding' },
  { id: 'signs', label: 'Common Signs' },
  { id: 'causes', label: 'Causes' },
  { id: 'grow-back', label: 'Can It Grow Back' },
  { id: 'diagnosis', label: 'Diagnosis' },
  { id: 'options', label: 'Treatment Options' },
  { id: 'prp', label: 'PRP for Thinning' },
  { id: 'timeline', label: 'Timeline' },
  { id: 'compare', label: 'Compare Approaches' },
  { id: 'clinic', label: 'Choosing a Clinic' },
  { id: 'faqs', label: 'FAQs' },
];

const thinningCharacteristics = [
  { title: 'Reduced Hair Density', desc: 'Fewer hairs per square centimeter of scalp than before' },
  { title: 'Smaller Hair Diameter', desc: 'Individual strands becoming finer over time, a process called follicular miniaturization' },
  { title: 'Progressive Miniaturization', desc: 'Healthy terminal (thick, pigmented) hairs gradually being replaced by finer, shorter vellus-like hairs in certain conditions' },
  { title: 'Increased Scalp Visibility', desc: 'More scalp showing through, especially under bright or overhead light' },
];

const thinningVsShedding = [
  { label: 'Definition', thinning: 'Refers to reduced hair density or finer strand diameter over time', shedding: 'Refers to hair being released from the scalp, often noticed on a pillow, in the shower drain, or on a brush' },
  { label: 'Onset', thinning: 'Usually develops gradually, over months to years', shedding: 'Can be sudden or gradual, and is sometimes triggered by a specific event (illness, stress, childbirth)' },
  { label: 'Reversibility', thinning: 'May not always be reversible, depending on the cause', shedding: 'Often temporary, especially when linked to a triggering event' },
  { label: 'What It Reflects', thinning: 'Reflects a change in the follicle itself (miniaturization)', shedding: 'Reflects hair completing its natural growth cycle and falling out' },
  { label: 'How Diagnosed', thinning: 'Diagnosed by assessing density, diameter, and pattern', shedding: 'Often assessed by counting or estimating daily hair loss' },
];

const commonSigns = [
  'A part line that appears wider than it used to',
  'More visible scalp, particularly in bright light or in photos',
  'A ponytail or bun that feels noticeably smaller in circumference',
  'Thinning concentrated at the crown or vertex',
  'Recession at the temples or along the hairline',
  'Hair strands that feel finer or softer than before',
  'An overall sense of reduced volume or fullness',
  'Increased scalp visibility right after washing, when hair is wet and flat',
  'Gradual changes noticeable when comparing photographs taken months or years apart',
];

const causesDirectory = [
  { icon: Dna, title: 'Genetic Hair Thinning', body: 'The most common cause of progressive hair thinning is androgenetic alopecia (commonly known as male or female pattern hair loss). This is a genetically influenced condition in which hair follicles gradually shrink over successive growth cycles — a process called follicular miniaturization. Over time, thick terminal hairs are replaced by shorter, finer hairs, and eventually some follicles may stop producing visible hair altogether.' },
  {
    icon: Baby,
    title: 'Hormonal Changes',
    intro: 'Hormonal fluctuations can meaningfully affect hair density, including:',
    bullets: [
      'PCOS (polycystic ovary syndrome), which can involve androgen-related changes affecting hair',
      'Pregnancy, during which hormonal shifts often temporarily increase hair retention',
      'Postpartum changes, when hormone levels normalize and previously retained hairs shed, sometimes perceived as sudden thinning',
      'Menopause, associated with hormonal shifts that can affect hair density in some women',
      'Other hormonal changes related to thyroid function, medication, or endocrine conditions',
    ],
  },
  { icon: AlertTriangle, title: 'Stress-Related Hair Changes', body: 'Significant physical or emotional stress can push a larger-than-usual number of hair follicles into the shedding phase of the growth cycle, a pattern sometimes called telogen effluvium. This can occur weeks after the stressful event itself, and while it often resolves over time, it can affect perceived density in the interim.' },
  {
    icon: Sparkles,
    title: 'Nutritional Factors',
    intro: 'Hair follicles are metabolically active and can be sensitive to nutritional status. Factors sometimes discussed include:',
    bullets: ['Iron levels', 'Vitamin D', 'Vitamin B12', 'Zinc', 'Protein intake'],
    outro: "It's worth being clear here: nutritional deficiencies should be properly evaluated through appropriate testing rather than assumed, and supplementation should not be self-initiated based on a suspicion alone. Correcting a deficiency that doesn't actually exist won't help hair density, and unnecessary supplementation carries its own considerations.",
  },
  { icon: Thermometer, title: 'Thyroid Conditions', body: 'Both underactive and overactive thyroid function can be associated with changes in hair density and texture, which is one reason thyroid function is sometimes included in a broader diagnostic workup for unexplained thinning.' },
  { icon: ShieldAlert, title: 'Alopecia Areata', body: 'This is an autoimmune condition that can cause patchy or, in some cases, more diffuse hair loss. It behaves differently from pattern thinning and typically requires its own diagnostic and management approach.' },
  {
    icon: Droplet,
    title: 'Scalp Conditions',
    intro: 'Ongoing scalp health plays a real role in hair density. Conditions that can contribute include:',
    bullets: ['Seborrheic dermatitis', 'Scalp psoriasis', 'Fungal or other scalp infections', 'Chronic scalp inflammation'],
  },
  { icon: Pill, title: 'Medications', body: 'Certain medications can be associated with hair shedding or thinning as a side effect, which is one reason a full medication history is relevant during assessment.' },
  { icon: TrendingDown, title: 'Rapid Weight Loss', body: 'Significant or rapid weight loss, including after some medical or surgical interventions, can trigger a temporary shedding phase that affects density.' },
  { icon: Clock, title: 'Aging', body: 'Hair density and diameter naturally change with age for many people, independent of other specific conditions.' },
  { icon: Scissors, title: 'Tight Hairstyles', body: 'Consistently tight hairstyles — tight ponytails, braids, or extensions — can contribute to traction-related hair thinning, particularly along the hairline and temples.' },
  { icon: Flame, title: 'Excessive Heat and Chemical Damage', body: 'Frequent heat styling and chemical treatments (coloring, relaxing, perming) can weaken hair shafts over time, contributing to a finer, thinner appearance even when the follicle itself is unaffected.' },
];

const regrowSpectrum = [
  { title: 'Temporary Shedding', desc: 'Such as stress-related telogen effluvium, often improves once the trigger resolves', pos: 10 },
  { title: 'Reversible Thinning', desc: 'Linked to a correctable cause, such as a confirmed nutritional deficiency, may improve once that cause is addressed', pos: 37 },
  { title: 'Progressive Genetic Thinning', desc: 'Androgenetic alopecia tends to be gradual and ongoing, though various approaches may help manage its progression or appearance for some patients', pos: 63 },
  { title: 'Permanent Follicular Loss', desc: 'Where follicles have become dormant or scarred, generally does not respond to non-surgical treatment', pos: 90 },
];

const regrowFactors = [
  'Underlying cause — some causes are more responsive to treatment than others',
  'Duration — thinning that has been present for a shorter time may respond differently than long-standing thinning',
  'Follicle condition — whether the follicle is still active (miniaturized but alive) or has become dormant or scarred',
  'Presence of scarring — scarring alopecias generally carry a different prognosis than non-scarring forms',
  'Medical factors — hormonal, nutritional, or thyroid-related causes may improve once the underlying issue is addressed',
  'Treatment suitability — not every treatment is appropriate for every cause or every patient',
];

const diagnosisSteps = [
  'Medical history — general health, medications, recent illnesses, or major life events',
  'Family history — since pattern hair thinning often runs in families',
  "Hair-loss pattern — where the thinning is occurring and how it's distributed",
  'Scalp examination — checking for redness, scaling, inflammation, or signs of scarring',
  'Hair density assessment — evaluating the current density compared to expected norms',
  'Trichoscopy or dermoscopic assessment, when appropriate, to examine follicles and hair shafts in more detail',
  'Photographic monitoring — establishing a baseline for tracking change over time',
  'Blood tests, when clinically indicated — such as iron studies, thyroid function, or vitamin levels, based on what the clinical picture suggests',
];

const consultationSteps = [
  "Initial consultation — a conversation about your concerns and what you've noticed",
  'Discussion of symptoms — when the thinning started, how it has progressed, and any associated symptoms like itching or shedding',
  'Medical and family history — relevant health background and any family patterns of hair loss',
  'Scalp assessment — a physical examination of the scalp and hair',
  'Evaluation of hair density — comparing density across different areas of the scalp',
  'Possible diagnostic testing — if clinically indicated, based on findings so far',
  'Discussion of treatment options — reviewing what may be appropriate given the findings',
  'Personalized treatment planning — if treatment is pursued, tailoring it to your specific situation',
  'Follow-up and monitoring — tracking progress and adjusting the plan as needed',
];

const treatmentOptions = [
  {
    icon: Droplet,
    color: '#1F5E4B',
    title: 'PRP Hair Treatment',
    body: "Platelet-rich plasma (PRP) therapy involves drawing a small sample of the patient's own blood, processing it to concentrate the platelets, and injecting this concentrated plasma into areas of the scalp experiencing thinning. The rationale is that platelets contain growth factors that may support the local scalp environment. PRP is performed in a clinical setting, typically as a series of sessions, and results — where they occur — tend to develop gradually rather than immediately. Recovery is generally short, though mild scalp tenderness or redness can occur in the days after treatment. PRP is not suitable or effective for every cause of thinning, and outcomes vary between individuals.",
    linkText: 'Hair PRP Treatment in Dubai',
    linkHref: '/services/hair-prp-dubai/',
  },
  {
    icon: FlaskConical,
    color: '#2A7D63',
    title: 'Hair Mesotherapy',
    body: "Hair mesotherapy involves injecting a formulation of vitamins, minerals, amino acids, or other nutrients directly into the scalp. The general concept is to deliver supportive ingredients closer to the hair follicles than topical products can reach. It differs from PRP in that it does not use the patient's own blood-derived plasma, and the formulations used can vary. As with PRP, suitability varies by patient and underlying cause.",
    linkText: 'Hair Mesotherapy in Dubai',
    linkHref: '/services/mesotherapy-dubai/',
  },
  {
    icon: Stethoscope,
    color: '#5F5F5F',
    title: 'Medical Management',
    body: 'For some causes of hair thinning — particularly those linked to hormonal, thyroid, or other medical factors — treatment may involve addressing the underlying medical condition itself. This is determined on a case-by-case basis and would be discussed as part of a personalized plan. We do not provide prescription or dosage information on this page, as this must be individualized by a clinician.',
  },
  {
    icon: Sparkles,
    color: '#B08D57',
    title: 'Nutritional Support',
    body: 'Where relevant, nutritional guidance may include maintaining a balanced diet, ensuring adequate protein intake, and correcting any confirmed deficiencies identified through testing. Unnecessary supplementation without a confirmed deficiency is generally not recommended.',
  },
  {
    icon: Scissors,
    color: '#1A1A1A',
    title: 'Hair Transplant',
    body: 'For patients with more advanced or stable pattern hair loss, hair transplantation may be considered as a surgical option. This involves relocating hair follicles from a donor area to areas of thinning or loss. It requires careful candidate assessment, evaluation of donor hair availability, and an understanding that it is a surgical procedure with its own recovery period and limitations. It is not typically the first option considered for early or diffuse thinning.',
    linkText: 'PRP vs Hair Transplant in Dubai',
    linkHref: '/services/prp-vs-hair-transplant-dubai/',
  },
];

const prpProcess = [
  { title: 'Blood Draw', desc: 'A small sample is taken, similar to a routine blood test' },
  { title: 'Processing', desc: 'The sample is spun in a centrifuge to separate and concentrate the platelet-rich plasma' },
  { title: 'Scalp Preparation', desc: 'The treatment area is cleaned and, where needed, a topical numbing approach may be used for comfort' },
  { title: 'Injection', desc: 'The concentrated plasma is injected into the areas of the scalp being treated, typically in a grid-like pattern across the thinning zone' },
];

const timelineTable = [
  { stage: 'Initial (Assessment)', observed: 'Baseline density and scalp evaluation; no treatment effect yet', note: 'This stage establishes what "before" looks like and confirms suitability for treatment' },
  { stage: 'Early (First Weeks)', observed: 'Minimal visible change; some patients notice reduced shedding', note: 'Early weeks are not usually indicative of final outcomes' },
  { stage: 'Developing (Months 2–6)', observed: 'Gradual changes may begin to appear for some patients, if they occur', note: 'Hair growth cycles are slow, so visible change takes time to develop' },
  { stage: 'Longer Term (6+ Months)', observed: 'More meaningful assessment of whether density has improved, stabilized, or continued to change', note: 'Ongoing monitoring and, where relevant, maintenance sessions may be part of the plan' },
];

const improvingResults = [
  'Reduced excessive shedding compared to baseline',
  'Improved appearance of density, especially in previously thin areas',
  'Thicker-looking strands, where finer hairs regain some diameter',
  'Better scalp coverage, particularly noticeable in photographs under consistent lighting',
  'Stabilization of thinning, where progression appears to slow or pause, in some patients',
];

const photoFactors = [
  'Lighting — brighter or more diffuse lighting can make hair appear denser',
  'Hair length — longer hair naturally provides more coverage than shorter hair',
  'Camera angle — small angle changes can dramatically alter how much scalp is visible',
  'Hair styling — product, blow-drying, and parting choices affect apparent volume',
  'Scalp position — head tilt changes how much scalp shows',
  'Time between photographs — natural hair growth over months adds length and fullness independent of any treatment effect',
  "Individual differences — every patient's starting point, cause of thinning, and response to treatment is different",
];

const resultFactors = [
  'Cause of the thinning', 'Severity at the time treatment begins', 'Duration the thinning has been present', 'Age', 'Genetics',
  'Follicle health at baseline', 'Scalp condition, including any inflammation or underlying skin issues', 'Hormonal factors', 'Nutrition',
  'Overall health', 'Treatment selection and whether it matches the underlying cause', 'Consistency with the recommended treatment plan and follow-up schedule',
  'Individual response, which varies from person to person even with similar starting points',
];

const growthCyclePhases = [
  { phase: 'Anagen', sub: 'Growth', desc: 'The active phase during which hair follicles produce hair, typically lasting several years' },
  { phase: 'Catagen', sub: 'Transition', desc: 'A short transitional phase where hair growth slows and the follicle begins to shrink' },
  { phase: 'Telogen', sub: 'Resting', desc: 'A resting phase before the hair eventually sheds' },
  { phase: 'Exogen', sub: 'Shedding', desc: 'The phase during which the resting hair is released from the follicle, making way for a new growth cycle to begin' },
];

const menSigns = [
  'Receding hairline, often starting at the temples',
  'Temple thinning, sometimes an early and subtle sign',
  'Crown thinning, frequently one of the first areas patients notice in mirrors or photos',
  'Male pattern hair loss (androgenetic alopecia), the most common overall cause',
  'Diffuse thinning, which is less pattern-specific and may prompt a broader diagnostic workup',
];

const womenSigns = [
  'Diffuse thinning across the scalp rather than a specific pattern',
  'A widening part line, often one of the earliest noticeable signs',
  'Postpartum changes, related to hormonal shifts after childbirth',
  'Menopause-related changes, linked to hormonal transitions',
  'Hormonal factors more broadly, including PCOS or thyroid-related changes',
  'Nutritional issues, which can be more prevalent in certain life stages',
  'Medical conditions that may contribute to hair changes',
];

const vsTransplant = [
  { label: 'Treatment Type', a: 'Non-surgical (e.g., PRP, mesotherapy, medical management)', b: 'Surgical procedure' },
  { label: 'Main Purpose', a: 'Support existing follicle health and density where suitable', b: 'Relocate hair follicles from donor to thinning/balding areas' },
  { label: 'Surgical Procedure', a: 'No', b: 'Yes' },
  { label: 'Candidate Suitability', a: 'Often considered for early to moderate thinning with active follicles', b: 'Typically considered for more advanced or stable pattern loss with adequate donor supply' },
  { label: 'Recovery', a: 'Minimal, often none to a few days', b: 'Requires a dedicated recovery period' },
  { label: 'Timeline', a: 'Gradual results over months, often requiring maintenance', b: 'Gradual results over months, generally considered longer-lasting once healed' },
  { label: 'Long-Term Considerations', a: 'May require ongoing sessions to maintain effect', b: 'Transplanted follicles are relocated permanently, though surrounding native hair may continue to change over time' },
];

const vsMeso = [
  { label: 'Basic Approach', a: "Uses the patient's own concentrated blood plasma", b: 'Uses injected formulations of vitamins, minerals, or amino acids' },
  { label: 'Procedure', a: 'Blood draw, processing, then scalp injection', b: 'Direct scalp injection of a prepared formulation' },
  { label: 'Treatment Planning', a: 'Individualized based on assessment and follicle health', b: 'Individualized based on assessment and formulation selected' },
  { label: 'Recovery', a: 'Generally short, mild tenderness or redness possible', b: 'Generally short, mild tenderness or redness possible' },
  { label: 'Timeline', a: 'Results, if any, typically develop over several months', b: 'Results, if any, typically develop over several months' },
  { label: 'Candidate Suitability', a: 'Depends on follicle health and cause of thinning', b: 'Depends on follicle health and cause of thinning' },
  { label: 'Limitations', a: 'Not effective for all causes of thinning; results vary', b: 'Not effective for all causes of thinning; results vary' },
];

const costFactors = [
  'Treatment type selected (PRP, mesotherapy, medical management, or a combination)',
  'Number of sessions recommended',
  'Severity of the thinning',
  'Consultation and initial assessment fees',
  'Diagnostic requirements, such as blood testing, if clinically indicated',
  'Treatment plan complexity',
  'Follow-up visits included in the plan',
];

const trackingSteps = [
  'Baseline photographs taken before you start monitoring or treatment',
  'Same lighting conditions each time',
  'Same camera or device, where possible',
  'Same angle for each photo',
  'Similar hairstyle — freshly washed, unstyled hair tends to give the most accurate picture',
  'Same scalp areas photographed consistently (crown, hairline, part line)',
  'Consistent intervals — monthly is often more useful than daily or weekly',
  'Hair density observations noted alongside photos',
  'Shedding observations, such as general patterns rather than exact counts',
  'Professional follow-up, where a clinician can compare findings over time using consistent assessment methods',
];

const dailyHabits = [
  'Balanced nutrition, supporting overall follicle health',
  'Adequate protein intake, since hair is primarily composed of protein',
  'Gentle hair care, avoiding excessive brushing or harsh handling',
  'Avoiding excessive heat styling, which can weaken hair shafts',
  'Avoiding consistently tight hairstyles, which can contribute to traction-related thinning',
  'Managing stress, where practical, given its link to certain types of shedding',
  'Treating underlying scalp conditions, such as dandruff or inflammation',
  'Adequate sleep, which supports overall physiological health',
  'Avoiding unnecessary supplementation without a confirmed need',
];

const whenToSee = [
  'Rapid or sudden thinning', 'Sudden, significant shedding', 'Patchy hair loss', 'Scalp pain', 'Visible scalp inflammation or redness',
  'Itching accompanied by significant shedding', 'Hair loss occurring alongside other unexplained symptoms', 'Progressive hairline recession',
  'Worsening crown thinning', "Persistent, unexplained thinning that isn't improving",
];

const clinicChecklist = [
  'Qualified healthcare professionals involved in assessment and treatment',
  'Appropriate assessment rather than treatment offered without diagnosis',
  'Individualized treatment plans rather than generic packages',
  'Realistic expectations communicated clearly, without overpromising',
  'Transparent pricing, with costs explained rather than hidden',
  'Patient safety prioritized throughout the process',
  'Follow-up built into the treatment plan',
  'Evidence-informed recommendations, grounded in what is clinically appropriate for your case',
  'Clear communication about what a treatment can and cannot achieve',
  "No guaranteed results — a trustworthy provider will not promise outcomes that can't be guaranteed",
];

const redFlags = [
  'Guaranteed hair regrowth claims',
  'One-treatment-fits-all packages offered without assessment',
  'Treatment recommended without any diagnosis',
  'High-pressure sales tactics',
  'Before-and-after photos that seem unrealistic or overly dramatic',
  'Unclear or unverifiable practitioner qualifications',
  'No discussion of risks, limitations, or realistic expectations',
];

const whyChoose = [
  'Personalized consultation focused on understanding your specific concerns and history',
  'Hair and scalp assessment conducted as a foundational step before any treatment discussion',
  'Individualized treatment planning, tailored to what the assessment reveals rather than a standard package',
  'Patient education, so you understand your options, their basis, and their limitations',
  'PRP treatment options, available for suitable candidates following assessment',
  'A range of hair treatment options, discussed based on your individual diagnosis',
  'Follow-up guidance, supporting monitoring and adjustment over time',
  'A convenient Dubai location, making ongoing consultations and follow-up practical',
];

const consultDiscussionPoints = [
  "Your hair thinning symptoms and how they've progressed",
  'Possible underlying causes',
  'Your scalp health',
  'Whether you may be a suitable candidate for specific treatments',
  'A realistic expected timeline based on your situation',
  'Personalized treatment options going forward',
];

const faqGroups = [
  {
    key: 'causes',
    label: 'Causes & Diagnosis',
    faqs: [
      { question: 'What is hair thinning?', answer: 'Hair thinning is a gradual reduction in hair density and, often, in the diameter of individual hair strands, resulting in more visible scalp and reduced overall fullness.' },
      { question: 'What causes hair thinning?', answer: 'Causes include genetics (androgenetic alopecia), hormonal changes, stress, nutritional factors, thyroid conditions, alopecia areata, scalp conditions, certain medications, rapid weight loss, aging, tight hairstyles, and excessive heat or chemical damage.' },
      { question: 'Can thinning hair grow back?', answer: 'It depends on the underlying cause, how long the thinning has been present, and the current condition of the hair follicles. Some causes are more responsive to treatment or resolve on their own, while others, such as long-standing genetic thinning with dormant follicles, are less likely to reverse.' },
      { question: 'Why is my hair thinning at the crown?', answer: 'Crown thinning is a common pattern in androgenetic alopecia, though other causes can also contribute; an assessment can help clarify the specific reason in your case.' },
      { question: 'Why is my hair part getting wider?', answer: 'A widening part is a common early sign of diffuse thinning, frequently discussed in women’s hair concerns, and can stem from several possible causes.' },
      { question: 'Can stress cause hair thinning?', answer: 'Significant stress can trigger increased shedding (telogen effluvium), which can affect perceived density, especially when combined with other contributing factors.' },
      { question: 'Can nutritional deficiencies cause thinning hair?', answer: 'Certain deficiencies, such as iron or vitamin D, have been associated with changes in hair density, though this should be confirmed through appropriate testing rather than assumed.' },
    ],
  },
  {
    key: 'treatment',
    label: 'Treatment Options',
    faqs: [
      { question: 'What is the best treatment for thinning hair?', answer: "There isn't a universal \"best\" treatment. The right option depends on the cause, severity, duration, follicle health, and individual circumstances, which is why assessment comes before treatment recommendations." },
      { question: 'Does PRP help thinning hair?', answer: 'PRP may be considered for certain patients with active but miniaturized follicles. It is not effective for every cause of thinning, and results vary between individuals.' },
      { question: 'How many PRP sessions may be recommended?', answer: 'This varies by individual and is determined as part of a personalized treatment plan based on assessment findings.' },
      { question: 'Are PRP results permanent?', answer: 'PRP does not create new hair follicles, and any supportive effect on existing follicles generally requires maintenance sessions over time; results are not considered permanent.' },
      { question: 'Can Hair Mesotherapy help thinning hair?', answer: 'Mesotherapy may be considered for some patients as a way to deliver supportive ingredients to the scalp, though suitability and results vary depending on the underlying cause.' },
      { question: 'Is PRP better than Hair Mesotherapy?', answer: 'Neither is universally "better" — they work differently, and suitability depends on individual assessment rather than a blanket comparison.' },
      { question: 'Can thinning hair require a transplant?', answer: 'In cases of more advanced or stable pattern hair loss with adequate donor hair, a transplant may be considered, though this depends on individual candidacy.' },
    ],
  },
  {
    key: 'who',
    label: 'Who It Affects & Timing',
    faqs: [
      { question: 'How long does hair thinning treatment take?', answer: 'Most treatments require several months before meaningful change, if any, can reasonably be assessed, due to the natural pace of the hair growth cycle.' },
      { question: 'Does hair thinning affect women?', answer: 'Yes — diffuse thinning, a widening part, and hormonally linked changes (such as postpartum or menopause-related thinning) are common concerns among women.' },
      { question: 'Does hair thinning affect men?', answer: 'Yes — male pattern hair loss, including hairline recession and crown thinning, is one of the most common causes of hair thinning in men.' },
      { question: 'When should I see a hair specialist?', answer: 'Consider seeking assessment for rapid or sudden thinning, patchy loss, scalp pain or inflammation, itching with significant shedding, or persistent unexplained thinning.' },
    ],
  },
  {
    key: 'cost',
    label: 'Cost & Monitoring',
    faqs: [
      { question: 'How much does hair thinning treatment cost in Dubai?', answer: 'Cost depends on the treatment type, number of sessions, and individual treatment plan, so it’s best discussed during a consultation rather than estimated generically.' },
      { question: 'How can I monitor my hair-thinning progress?', answer: 'Use consistent baseline photography — same lighting, angle, and hairstyle — at regular intervals, alongside professional follow-up assessments over time.' },
    ],
  },
];

const allFaqsForSchema = faqGroups.flatMap((g) => g.faqs);

const relatedGuides = [
  { title: 'Hair Loss Treatment in Dubai', desc: 'A broader overview of hair loss causes and treatment approaches available in Dubai.', href: '/services/hair-loss-dubai/' },
  { title: 'Hair Fall Treatment in Dubai', desc: 'Explore treatment options specifically focused on managing excessive hair fall.', href: '/services/hair-loss-dubai/' },
  { title: 'Hair Regrowth Treatment Dubai', desc: 'Learn about approaches that may support hair regrowth for suitable candidates.', href: '/services/hair-regrowth-treatment-dubai/' },
  { title: 'Hair PRP Treatment in Dubai', desc: 'Our dedicated page covering PRP therapy in detail, including the procedure and considerations.', href: '/services/hair-prp-dubai/' },
  { title: 'PRP Hair Treatment Results', desc: 'A closer look at what PRP results can and cannot be expected to look like.', href: '/services/prp-hair-treatment-results/' },
  { title: 'PRP Hair Treatment Before and After', desc: 'Guidance on how to interpret before-and-after photos responsibly.', href: '/services/prp-hair-treatment-before-and-after/' },
  { title: 'PRP Hair Treatment Recovery', desc: 'What to expect in the days following a PRP session.', href: '/services/prp-hair-treatment-recovery/' },
  { title: 'PRP Hair Treatment Cost in Dubai', desc: 'An educational look at the factors that influence PRP treatment pricing.', href: '/services/hair-prp-cost-dubai/' },
  { title: 'Hair Growth Cycle', desc: 'Understand the phases hair goes through and why treatments require patience.', href: '/services/hair-growth-cycle/' },
  { title: 'Hair Loss Causes', desc: 'A deeper dive into the many possible causes behind hair loss and thinning.', href: '/services/hair-loss-dubai/' },
  { title: 'Hair Mesotherapy in Dubai', desc: 'Learn about mesotherapy as an alternative or complementary treatment approach.', href: '/services/mesotherapy-dubai/' },
  { title: 'PRP vs Hair Mesotherapy', desc: 'A side-by-side comparison to help you understand the differences between these two options.', href: '/services/prp-vs-hair-mesotherapy-dubai/' },
  { title: 'PRP vs Hair Transplant in Dubai', desc: 'Compare non-surgical and surgical approaches to hair restoration.', href: '/services/prp-vs-hair-transplant-dubai/' },
  { title: 'Best Hair Specialist in Dubai', desc: 'Guidance on finding a qualified professional for your hair and scalp concerns.', href: '/services/best-hair-specialist-dubai/' },
  { title: 'Hair Loss Clinic Dubai', desc: 'An overview of what to look for when choosing a hair loss clinic in Dubai.', href: '/services/hair-loss-clinic-dubai/' },
];

export default function HairThinningTreatmentDubaiPage() {
  const [openCause, setOpenCause] = useState(null);
  const [compareMode, setCompareMode] = useState('transplant');
  const [faqGroup, setFaqGroup] = useState('causes');
  const [openFaq, setOpenFaq] = useState(null);

  const navRef = useRef(null);
  const scrollNav = (direction) => {
    if (navRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200;
      navRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const toggleCause = (i) => setOpenCause(openCause === i ? null : i);
  const toggleFaq = (i) => setOpenFaq(openFaq === i ? null : i);
  const activeGroup = faqGroups.find((g) => g.key === faqGroup);
  const compareRows = compareMode === 'transplant' ? vsTransplant : vsMeso;
  const compareLabel = compareMode === 'transplant' ? 'Hair Transplant' : 'Hair Mesotherapy';

  return (
    <Layout>
      <Head>
        <title key="title">Hair Thinning Treatment Dubai | RamaCare Polyclinic</title>
        <meta
          name="description"
          content="Explore Hair Thinning Treatment Dubai at RamaCare Polyclinic. Learn causes, assessment methods, and personalized options to support hair density."
          key="description"
        />
        <meta property="og:title" content="Hair Thinning Treatment Dubai: Causes, Options & Results | RamaCare Polyclinic" key="og:title" />
        <meta
          property="og:description"
          content="A clinical, honest guide to hair thinning in Dubai — causes, diagnosis, treatment options, and realistic expectations."
          key="og:description"
        />
        <meta property="og:type" content="website" key="og:type" />
        <meta name="twitter:title" content="Hair Thinning Treatment Dubai — RamaCare Polyclinic" key="twitter:title" />
        <meta
          name="twitter:description"
          content="Causes, diagnosis, and treatment options for hair thinning in Dubai, explained clearly."
          key="twitter:description"
        />

        <script
          key="schema-medicalclinic"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'MedicalClinic',
              name: 'RamaCare Polyclinic',
              url: 'https://ramacarepolyclinic.ae/',
              medicalSpecialty: 'Dermatology',
              address: { '@type': 'PostalAddress', addressLocality: 'Jumeirah 1', addressRegion: 'Dubai', addressCountry: 'AE' },
              priceRange: '$$',
            }),
          }}
        />
        <script
          key="schema-webpage"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              name: 'Hair Thinning Treatment Dubai: Causes, Options & Results',
              url: 'https://ramacarepolyclinic.ae/services/hair-thinning-treatment-dubai/',
            }),
          }}
        />
        <script
          key="schema-breadcrumb"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ramacarepolyclinic.ae/' },
                { '@type': 'ListItem', position: 2, name: 'Hair Treatments', item: 'https://ramacarepolyclinic.ae/services/hair-treatments-dubai/' },
                { '@type': 'ListItem', position: 3, name: 'Hair Thinning Treatment Dubai', item: 'https://ramacarepolyclinic.ae/services/hair-thinning-treatment-dubai/' },
              ],
            }),
          }}
        />
        <script
          key="schema-faq"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: allFaqsForSchema.map((f) => ({
                '@type': 'Question',
                name: f.question,
                acceptedAnswer: { '@type': 'Answer', text: f.answer },
              })),
            }),
          }}
        />
      </Head>

      {/* ============ HERO — minimal editorial ============ */
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-3">
          <nav aria-label="Breadcrumb" className="mb-4 flex items-center text-xs font-medium text-[#5F5F5F] gap-1.5">
            <Link href="/">Home</Link>
            <span className="mx-1">/</span>
            <Link href="/services/hair-treatment-dubai/">Hair Treatments</Link>
            <span className="mx-1">/</span>
            <span>Hair Thinning Treatment Dubai</span>
          </nav>
        </div>}
      <section className="bg-[#F9F7F2] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-16 items-start">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="space-y-8">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#1F5E4B] mb-5">
                <span className="w-8 h-px bg-[#1F5E4B]" />
                RamaCare Polyclinic &middot; Hair &amp; Scalp
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-[#1A1A1A] leading-tight mb-6">
                Hair Thinning Treatment Dubai: Causes, Options &amp; Results
              </h1>
              <div className="space-y-6 text-[#5F5F5F] leading-relaxed text-base font-light font-sans">
                <p>
                  If you&apos;ve noticed more scalp visibility through your hair, a part line that seems to be spreading, or a ponytail that feels noticeably thinner than it used to, you&apos;re not imagining things — and you&apos;re not alone. Hair thinning is one of the most common concerns patients bring to hair and scalp consultations, and it can show up gradually, sometimes over months or years, long before it becomes obvious to anyone but you.
                </p>
                <p>
                  Some people notice it first in photographs, where overhead lighting reveals more scalp than expected. Others notice it while styling their hair, when a part that used to sit neatly suddenly looks wider. Some feel it when they gather their hair into a ponytail and realize it&apos;s not as thick as it once was. These are all common, valid signals — and they can stem from a wide range of underlying causes, from genetics and hormones to nutrition, stress, scalp health, or a combination of factors.
                </p>
                <p>
                  At RamaCare Polyclinic in Dubai, hair thinning is approached as a clinical question rather than a cosmetic inconvenience. That means starting with a proper assessment — understanding what is actually happening to your hair and scalp — before discussing what treatment options, if any, may be appropriate. This page is designed to walk you through hair thinning in detail: what it is, why it happens, how it&apos;s assessed, what treatments exist, and what realistic expectations look like.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a
                  href="#book-now"
                  className="inline-flex items-center justify-center gap-2 bg-[#1F5E4B] text-white px-7 py-3.5 rounded-xl font-bold hover:bg-[#1a4f40] transition-all"
                >
                  <CalendarDays className="w-4 h-4" />
                  Book a Consultation
                </a>
                <a
                  href="https://wa.me/971566597878?text=Hello%20RamaCare%20Polyclinic%2C%20I%20would%20like%20to%20book%20a%20consultation%20for%20Hair%20Thinning%20Treatment%20Dubai."
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-flex items-center justify-center gap-2 bg-white border-2 border-[#1F5E4B]/20 text-[#1F5E4B] px-7 py-3.5 rounded-xl font-bold hover:border-[#1F5E4B] transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="space-y-8">
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-2 text-[#1F5E4B] font-bold text-sm mb-3">
                  <Info className="w-4 h-4" />
                  Quick Answer
                </div>
                <p className="text-xs text-[#5F5F5F] font-semibold uppercase tracking-wide mb-2">What Is the Best Treatment for Thinning Hair?</p>
                <p className="text-sm text-[#5F5F5F] leading-relaxed">
                  There is no single &ldquo;best&rdquo; treatment for thinning hair that applies to everyone. The
                  right approach depends on the underlying cause, how long the thinning has been occurring, its
                  severity, the current condition of the hair follicles, your medical history, and your individual
                  goals. A proper assessment is the only reliable way to determine which path is appropriate for
                  you.
                </p>
              </div>

              {/* Styled Image Overlay Card */}
              <div className="relative border border-gray-200 rounded-3xl p-6 bg-white shadow-lg max-w-md mx-auto">
                <img
                  src="/images/hair-thinning-consultation-dubai.jpg"
                  alt="Doctor consulting with a patient about hair thinning at RamaCare Polyclinic Dubai"
                  className="w-full h-80 object-cover rounded-2xl mb-4"
                />
                <p className="text-xs text-[#5F5F5F] leading-relaxed italic text-center">
                  "A personalized consultation is the first step in understanding hair thinning."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sticky Horizontal Editorial Index */}
      <div className="sticky top-20 bg-white/95 backdrop-blur-md border-b border-[#E9E2D6] z-30 py-4 px-6 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center gap-6 text-xs font-bold uppercase tracking-wider relative overflow-hidden">
          <span className="text-[#1F5E4B] font-extrabold border-r border-[#E9E2D6] pr-6 shrink-0 flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-[#D4A574]" /> Editorial Index
          </span>

          <div className="relative flex-grow flex items-center overflow-hidden">
            {/* Scroll Left Button */}
            <button
              onClick={() => scrollNav('left')}
              className="absolute left-0 z-10 bg-gradient-to-r from-white via-white/80 to-transparent pr-4 pl-1 text-[#5F5F5F] hover:text-[#1F5E4B] transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div
              ref={navRef}
              className="flex gap-6 overflow-x-auto scrollbar-none py-1 px-6 w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            >
              {sections.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="flex items-center gap-2 text-[#5F5F5F] hover:text-[#1F5E4B] transition-colors shrink-0"
                >
                  <span className="font-serif text-[#D4A574]">•</span>
                  <span>{item.label}</span>
                </a>
              ))}
            </div>

            {/* Scroll Right Button */}
            <button
              onClick={() => scrollNav('right')}
              className="absolute right-0 z-10 bg-gradient-to-l from-white via-white/80 to-transparent pl-4 pr-1 text-[#5F5F5F] hover:text-[#1F5E4B] transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* ============ MAIN LAYOUT — Editorial Content ============ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* MAIN CONTENT */}
        <div className="space-y-20">
          {/* WHAT IS HAIR THINNING */}
          <section id="what-is">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-4">What Is Hair Thinning?</h2>
            <p className="text-[#5F5F5F] leading-relaxed mb-3">
              Hair thinning refers to a gradual reduction in hair density and, often, in the diameter of individual
              hair strands. It&apos;s different from going bald in a specific spot — thinning is usually diffuse
              or pattern-based, meaning the overall volume of hair looks and feels reduced rather than disappearing
              entirely from one area.
            </p>
            <p className="text-[#5F5F5F] leading-relaxed mb-6">A few things characterize hair thinning clinically:</p>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {thinningCharacteristics.map((c, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="border border-gray-200 rounded-xl p-5"
                >
                  <div className="w-8 h-8 rounded-full border-2 border-[#1F5E4B] text-[#1F5E4B] text-xs font-bold flex items-center justify-center mb-3">{i + 1}</div>
                  <h4 className="font-bold text-[#1A1A1A] text-sm mb-1">{c.title}</h4>
                  <p className="text-xs text-[#5F5F5F] leading-relaxed">{c.desc}</p>
                </motion.div>
              ))}
            </div>
            <p className="text-sm text-[#5F5F5F] leading-relaxed bg-[#F9F7F2] rounded-xl p-5">
              It&apos;s important to understand that a person can experience meaningful hair thinning without ever
              developing an obvious bald patch. The hair may still be present across the scalp, just in a visibly
              reduced, finer, or less dense form. This is one reason thinning can be underestimated by the person
              experiencing it — the change is often subtle at first, and comparison photos over months or years
              are usually more revealing than day-to-day observation.
            </p>
          </section>

          {/* THINNING VS SHEDDING */}
          <section id="vs-shedding">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-4">Hair Thinning vs Hair Shedding</h2>
            <p className="text-[#5F5F5F] leading-relaxed mb-6">
              Patients often use &ldquo;thinning&rdquo; and &ldquo;shedding&rdquo; interchangeably, but they describe
              different things — and understanding the distinction matters for how a concern is assessed.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-t border-gray-200 min-w-[560px]">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 pr-4 text-xs font-bold uppercase tracking-wide text-gray-400 w-1/5">&nbsp;</th>
                    <th className="text-left py-3 pr-4 text-sm font-bold text-[#1A1A1A]">Hair Thinning</th>
                    <th className="text-left py-3 text-sm font-bold text-[#1A1A1A]">Hair Shedding</th>
                  </tr>
                </thead>
                <tbody>
                  {thinningVsShedding.map((row, i) => (
                    <tr key={i} className="border-b border-gray-100">
                      <td className="py-4 pr-4 text-xs font-bold text-gray-400 align-top">{row.label}</td>
                      <td className="py-4 pr-4 text-sm text-[#5F5F5F] leading-relaxed align-top">{row.thinning}</td>
                      <td className="py-4 text-sm text-[#5F5F5F] leading-relaxed align-top">{row.shedding}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-6 text-sm text-[#5F5F5F] leading-relaxed">
              Shedding and thinning are not mutually exclusive — they frequently occur together. A period of
              increased shedding can contribute to a perception of reduced density, and ongoing follicular
              miniaturization can make regrowing hairs progressively finer, which compounds the appearance of
              thinning. Persistent or progressive changes in either shedding or density are worth discussing with a
              professional rather than monitored indefinitely on your own.
            </p>
          </section>

          {/* COMMON SIGNS */}
          <section id="signs">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-4">Common Signs of Hair Thinning</h2>
            <p className="text-[#5F5F5F] leading-relaxed mb-6">
              Many patients don&apos;t realize how many small signs can add up to a pattern worth assessing. Common
              indicators include:
            </p>
            <div className="border border-gray-200 rounded-2xl overflow-hidden">
              {commonSigns.map((s, i) => (
                <div key={i} className={`flex items-start gap-3 px-5 py-3.5 ${i % 2 === 1 ? 'bg-[#F9F7F2]' : 'bg-white'}`}>
                  <Search className="w-4 h-4 text-[#1F5E4B] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-[#5F5F5F] leading-relaxed">{s}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-[#5F5F5F] leading-relaxed">
              None of these signs alone confirms a specific diagnosis, but a cluster of them — especially if
              progressive — is a reasonable prompt to seek a professional scalp and hair assessment.
            </p>
          </section>

          {/* CAUSES — encyclopedia grid */}
          <section id="causes">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-4">Hair Thinning Causes</h2>
            <p className="text-[#5F5F5F] leading-relaxed mb-6">
              Hair thinning is rarely caused by just one factor. A thorough assessment typically considers several
              possible contributors.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {causesDirectory.map((cause, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  className={`border rounded-xl overflow-hidden ${openCause === i ? 'border-[#1F5E4B]/40 sm:col-span-2' : 'border-gray-200'}`}
                >
                  <button onClick={() => toggleCause(i)} className="w-full flex items-center gap-3 px-5 py-4 text-left hover:bg-[#F9F7F2] transition-colors">
                    <cause.icon className="w-4 h-4 text-[#1F5E4B] flex-shrink-0" />
                    <span className="font-semibold text-[#1A1A1A] text-sm flex-1">{cause.title}</span>
                    <ChevronDown className={`w-4 h-4 text-[#1F5E4B] flex-shrink-0 transition-transform ${openCause === i ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {openCause === i && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                        <div className="px-5 pb-5 text-sm text-[#5F5F5F] leading-relaxed space-y-3">
                          {cause.body && <p>{cause.body}</p>}
                          {cause.intro && <p>{cause.intro}</p>}
                          {cause.bullets && (
                            <ul className="space-y-1.5">
                              {cause.bullets.map((b, j) => (
                                <li key={j} className="flex items-start gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#1F5E4B] mt-2 flex-shrink-0" />
                                  {b}
                                </li>
                              ))}
                            </ul>
                          )}
                          {cause.outro && <p>{cause.outro}</p>}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
            <p className="mt-6 text-sm text-[#5F5F5F]">
              For a broader look at underlying causes, see our detailed guide on{' '}
              <a href="/services/hair-loss-dubai/" className="text-[#1F5E4B] font-semibold underline decoration-[#1F5E4B]/30 hover:decoration-[#1F5E4B]">
                Hair Loss Causes
              </a>
              .
            </p>
          </section>

          {/* CAN IT GROW BACK — spectrum */}
          <section id="grow-back">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-4">Can Thinning Hair Grow Back?</h2>
            <p className="text-[#5F5F5F] leading-relaxed mb-8">
              This is one of the most common questions patients ask, and the honest answer is: it depends. It helps
              to think of hair changes across a spectrum:
            </p>

            <div className="relative mb-4">
              <div className="h-2 rounded-full bg-gradient-to-r from-[#1F5E4B] via-amber-400 to-gray-400" />
              {regrowSpectrum.map((item, i) => (
                <div key={i} className="absolute -top-1" style={{ left: `${item.pos}%` }}>
                  <div className="w-4 h-4 rounded-full bg-white border-2 border-[#1A1A1A] -translate-x-1/2" />
                </div>
              ))}
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
              {regrowSpectrum.map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                  <h4 className="font-bold text-[#1A1A1A] text-sm mb-1">{item.title}</h4>
                  <p className="text-xs text-[#5F5F5F] leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <p className="mt-8 mb-4 text-[#5F5F5F] leading-relaxed">Several factors influence whether hair density can improve, stabilize, or continue to decline:</p>
            <div className="grid sm:grid-cols-2 gap-2">
              {regrowFactors.map((f, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-[#5F5F5F]">
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#1F5E4B] flex-shrink-0 mt-1" />
                  {f}
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-[#5F5F5F] leading-relaxed">
              We are not able to tell you which category your hair thinning falls into without an assessment —
              this is precisely why diagnosis comes before treatment discussion.
            </p>
          </section>

          {/* DIAGNOSIS & CONSULTATION */}
          <section id="diagnosis">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-4">How Hair Thinning Is Diagnosed</h2>
            <div className="grid md:grid-cols-[1.8fr_1.2fr] gap-8 items-start">
              <div>
                <p className="text-[#5F5F5F] leading-relaxed mb-6">
                  A proper diagnostic process for hair thinning is more than a quick glance at the scalp. It typically
                  includes:
                </p>
                <div className="space-y-2 mb-8">
                  {diagnosisSteps.map((step, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-start gap-3 border-b border-dashed border-gray-200 pb-2"
                    >
                      <span className="w-4 h-4 rounded-sm border-2 border-[#1F5E4B] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-[#5F5F5F] leading-relaxed">{step}</span>
                    </motion.div>
                  ))}
                </div>
                <p className="text-sm text-[#5F5F5F] leading-relaxed mb-8">
                  Not every patient requires every test. The diagnostic approach is tailored to what the initial history
                  and examination suggest, rather than applying the same standard battery of tests to everyone.
                </p>
              </div>

              {/* Consultation Image */}
              <div className="border border-gray-200 rounded-3xl p-4 bg-white shadow-md">
                <img
                  src="/images/scalp-examination-hair-thinning-dubai.jpg"
                  alt="Clinician examining scalp for signs of hair thinning"
                  className="w-full h-64 object-cover rounded-2xl"
                />
                <p className="text-xs text-[#5F5F5F] leading-relaxed italic text-center mt-3">
                  "A thorough scalp examination helps identify possible causes of thinning."
                </p>
              </div>
            </div>

            <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">What Happens During a Hair Thinning Consultation?</h3>
            <p className="text-[#5F5F5F] leading-relaxed mb-6">
              If you&apos;re considering a consultation at RamaCare Polyclinic, here&apos;s a general idea of what
              the process typically looks like:
            </p>
            <div className="space-y-2">
              {consultationSteps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-start gap-3 border-b border-dashed border-gray-200 pb-2"
                >
                  <span className="text-xs font-bold text-[#1F5E4B] w-5 flex-shrink-0">{i + 1}</span>
                  <span className="text-sm text-[#5F5F5F] leading-relaxed">{step}</span>
                </motion.div>
              ))}
            </div>
            <p className="mt-6 text-sm text-[#5F5F5F] leading-relaxed">
              This structured approach exists because hair thinning is not a one-size-fits-all concern, and jumping
              straight to a treatment without understanding the cause rarely serves the patient well.
            </p>
          </section>

          {/* TREATMENT OPTIONS */}
          <section id="options">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-4">Hair Thinning Treatment Options</h2>
            <p className="text-[#5F5F5F] leading-relaxed mb-8">
              Once a cause (or set of contributing factors) has been identified, several treatment pathways may be
              discussed, depending on suitability.
            </p>
            <div className="space-y-5">
              {treatmentOptions.map((opt, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="flex gap-5 pl-5 py-1"
                  style={{ borderLeft: `3px solid ${opt.color}` }}
                >
                  <opt.icon className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: opt.color }} />
                  <div>
                    <h4 className="font-bold text-[#1A1A1A] mb-1.5">{opt.title}</h4>
                    <p className="text-sm text-[#5F5F5F] leading-relaxed">{opt.body}</p>
                    {opt.linkHref && (
                      <a href={opt.linkHref} className="inline-flex items-center gap-1 text-sm text-[#1F5E4B] font-semibold mt-2 hover:underline">
                        {opt.linkText} <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* PRP FOR THINNING HAIR */}
          <section id="prp">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-4">PRP for Thinning Hair</h2>
            <p className="text-[#5F5F5F] leading-relaxed mb-3">
              Because PRP is one of the more frequently discussed options for thinning hair, it deserves a closer
              look. PRP may be considered for certain patterns of thinning, particularly where follicles are
              miniaturized but still active — meaning they are producing finer hair rather than having stopped
              entirely. The treatment generally involves:
            </p>

            <div className="grid sm:grid-cols-4 gap-4 my-8">
              {prpProcess.map((step, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative">
                  <div className="w-10 h-10 rounded-full border-2 border-[#1F5E4B] text-[#1F5E4B] flex items-center justify-center font-bold text-sm mb-3">{i + 1}</div>
                  {i < prpProcess.length - 1 && <div className="hidden sm:block absolute top-5 left-10 right-0 border-t-2 border-dashed border-[#1F5E4B]/20" />}
                  <h4 className="font-bold text-[#1A1A1A] text-sm mb-1">{step.title}</h4>
                  <p className="text-xs text-[#5F5F5F] leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="grid md:grid-cols-[1.8fr_1.2fr] gap-8 items-center my-6">
              <div>
                <p className="text-[#5F5F5F] leading-relaxed mb-3">
                  Treatment plans vary considerably between patients — the number of sessions, spacing between
                  sessions, and whether PRP is combined with other approaches all depend on individual assessment
                  findings. Because PRP works by supporting the existing follicular environment rather than creating new
                  follicles, results depend heavily on the health of the follicles being treated — this is part of
                  why an accurate diagnosis matters so much before starting.
                </p>
                <p className="text-[#5F5F5F] leading-relaxed mb-4">
                  Results, when they occur, tend to develop gradually over multiple months, and regular follow-up is an
                  important part of monitoring whether the treatment plan is working as expected.
                </p>
              </div>

              {/* PRP Image */}
              <div className="border border-gray-200 rounded-3xl p-4 bg-white shadow-md">
                <img
                  src="/images/prp-hair-treatment-dubai.jpg"
                  alt="PRP hair treatment being performed on a patient's scalp"
                  className="w-full h-52 object-cover rounded-2xl"
                />
                <p className="text-xs text-[#5F5F5F] leading-relaxed italic text-center mt-3">
                  "PRP therapy involves injecting concentrated plasma into targeted scalp areas."
                </p>
              </div>
            </div>

            <p className="text-sm text-[#5F5F5F] leading-relaxed bg-[#F9F7F2] rounded-xl p-5">
              Related reading:{' '}
              <a href="/services/prp-hair-treatment-results/" className="text-[#1F5E4B] font-semibold underline decoration-[#1F5E4B]/30 hover:decoration-[#1F5E4B]">
                PRP Hair Treatment Results
              </a>
              ,{' '}
              <a href="/services/prp-hair-treatment-before-and-after/" className="text-[#1F5E4B] font-semibold underline decoration-[#1F5E4B]/30 hover:decoration-[#1F5E4B]">
                PRP Hair Treatment Before and After
              </a>
              ,{' '}
              <a href="/services/prp-hair-treatment-recovery/" className="text-[#1F5E4B] font-semibold underline decoration-[#1F5E4B]/30 hover:decoration-[#1F5E4B]">
                PRP Hair Treatment Recovery
              </a>
              ,{' '}
              <a href="/services/hair-prp-cost-dubai/" className="text-[#1F5E4B] font-semibold underline decoration-[#1F5E4B]/30 hover:decoration-[#1F5E4B]">
                PRP Hair Treatment Cost in Dubai
              </a>
              .
            </p>
          </section>

          {/* TIMELINE */}
          <section id="timeline">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-4">Hair Thinning Treatment Timeline</h2>
            <p className="text-[#5F5F5F] leading-relaxed mb-6">
              Patients often want a clear timeline, and while individual experiences vary, here is a general
              framework used to set expectations:
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-gray-200 rounded-2xl overflow-hidden">
              {timelineTable.map((row, i) => (
                <div key={i} className={`p-5 ${i > 0 ? 'border-t sm:border-t-0 sm:border-l border-gray-200' : ''}`}>
                  <span className="inline-block text-xs font-bold text-[#1F5E4B] uppercase tracking-wide mb-2">{row.stage}</span>
                  <p className="text-xs text-[#5F5F5F] leading-relaxed mb-3">{row.observed}</p>
                  <p className="text-xs text-[#5F5F5F]/80 leading-relaxed border-t border-dashed border-gray-200 pt-3">{row.note}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-[#5F5F5F]">
              This timeline is general and educational — it is not a guarantee of what will happen in any
              individual case, and some patients may not experience meaningful change at all, depending on the
              underlying cause.
            </p>

            <h3 className="text-xl font-bold text-[#1A1A1A] mt-10 mb-4">What Do Improving Hair Density Results Look Like?</h3>
            <div className="grid sm:grid-cols-2 gap-2 mb-4">
              {improvingResults.map((r, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-[#5F5F5F]">
                  <Check className="w-4 h-4 text-[#1F5E4B] flex-shrink-0 mt-0.5" />
                  {r}
                </div>
              ))}
            </div>
            <p className="text-sm text-[#5F5F5F] leading-relaxed">
              It&apos;s worth noting that visual improvement and actual follicular change are not always identical
              — perceived improvement can be influenced by styling, lighting, and hair length, which is why
              photographic monitoring under consistent conditions is valuable. See more in our{' '}
              <a href="/services/prp-hair-treatment-results/" className="text-[#1F5E4B] font-semibold underline decoration-[#1F5E4B]/30 hover:decoration-[#1F5E4B]">
                PRP Hair Treatment Results
              </a>{' '}
              guide.
            </p>

            <h3 className="text-xl font-bold text-[#1A1A1A] mt-10 mb-4 flex items-center gap-2">
              <Camera className="w-5 h-5 text-[#1F5E4B]" /> PRP Before and After Photos
            </h3>
            <p className="text-[#5F5F5F] leading-relaxed mb-4">
              Before-and-after photos are commonly used in hair treatment marketing, and while they can be
              informative, they should be interpreted carefully. Several factors can significantly affect how
              &ldquo;after&rdquo; photos look compared to &ldquo;before&rdquo; photos:
            </p>
            <div className="border border-gray-200 rounded-2xl divide-y divide-gray-100">
              {photoFactors.map((f, i) => (
                <div key={i} className="flex items-start gap-3 px-5 py-3 text-sm text-[#5F5F5F] leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1F5E4B] mt-2 flex-shrink-0" />
                  {f}
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-[#5F5F5F] leading-relaxed">
              Because of these variables, another patient&apos;s before-and-after result should never be used to
              predict your own outcome. See our detailed{' '}
              <a href="/services/prp-hair-treatment-before-and-after/" className="text-[#1F5E4B] font-semibold underline decoration-[#1F5E4B]/30 hover:decoration-[#1F5E4B]">
                PRP Hair Treatment Before and After
              </a>{' '}
              page for a closer look at how to evaluate these images critically.
            </p>

            <h3 className="text-xl font-bold text-[#1A1A1A] mt-10 mb-4">Factors That Affect Hair Thinning Treatment Results</h3>
            <p className="text-[#5F5F5F] leading-relaxed mb-4">Treatment outcomes are influenced by a wide range of factors, including:</p>
            <div className="columns-1 sm:columns-3 gap-6 text-sm text-[#5F5F5F]">
              {resultFactors.map((f, i) => (
                <div key={i} className="mb-2 break-inside-avoid">{f}</div>
              ))}
            </div>
            <p className="mt-4 text-sm text-[#5F5F5F] leading-relaxed">
              Because so many variables are involved, treatment planning is necessarily individualized rather than
              standardized.
            </p>

            <h3 className="text-xl font-bold text-[#1A1A1A] mt-10 mb-6">Hair Growth Cycle and Thinning</h3>
            <p className="text-[#5F5F5F] leading-relaxed mb-6">Understanding the natural hair growth cycle helps explain why hair treatments generally require patience:</p>
            <div className="grid md:grid-cols-[1.8fr_1.2fr] gap-8 items-center">
              <div>
                <div className="flex items-center justify-between max-w-2xl">
                  {growthCyclePhases.map((p, i) => (
                    <div key={i} className="flex items-center flex-1">
                      <div className="w-14 h-14 rounded-full border-2 border-[#1F5E4B] flex flex-col items-center justify-center text-center flex-shrink-0">
                        <span className="text-[10px] font-bold text-[#1F5E4B]">{p.phase}</span>
                      </div>
                      {i < growthCyclePhases.length - 1 && <div className="flex-1 border-t-2 border-dashed border-[#1F5E4B]/30 mx-1" />}
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4 max-w-2xl">
                  {growthCyclePhases.map((p, i) => (
                    <p key={i} className="text-xs text-[#5F5F5F] leading-relaxed">{p.desc}</p>
                  ))}
                </div>
                <p className="mt-6 text-sm text-[#5F5F5F] leading-relaxed">
                  Because each hair follicle moves through this cycle independently and the anagen phase alone can last
                  years, any treatment aimed at supporting hair density needs time — often several months —
                  before meaningful change can reasonably be assessed. This is one of the most common points of
                  confusion for patients expecting faster results. Learn more in our full{' '}
                  <a href="/services/hair-growth-cycle/" className="text-[#1F5E4B] font-semibold underline decoration-[#1F5E4B]/30 hover:decoration-[#1F5E4B]">
                    Hair Growth Cycle
                  </a>{' '}
                  guide.
                </p>
              </div>

              {/* Hair Growth Cycle Image */}
              <div className="border border-gray-200 rounded-3xl p-4 bg-white shadow-md">
                <img
                  src="/images/hair-growth-cycle-diagram.jpg"
                  alt="Diagram illustrating the anagen, catagen, telogen, and exogen phases of hair growth"
                  className="w-full h-52 object-cover rounded-2xl"
                />
                <p className="text-xs text-[#5F5F5F] leading-relaxed italic text-center mt-3">
                  "Understanding the hair growth cycle explains why treatment results take time."
                </p>
              </div>
            </div>
          </section>

          {/* MEN / WOMEN */}
          <section>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-2xl p-7">
                <div className="flex items-center gap-2 text-[#1F5E4B] font-bold mb-4">
                  <Mars className="w-5 h-5" /> Hair Thinning in Men
                </div>
                <p className="text-sm text-[#5F5F5F] leading-relaxed mb-4">In men, hair thinning commonly follows recognizable patterns, including:</p>
                <ul className="space-y-2 mb-4">
                  {menSigns.map((s, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[#5F5F5F]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1F5E4B] mt-2 flex-shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-[#5F5F5F] leading-relaxed border-t border-gray-100 pt-4">
                  Diagnosis matters before choosing a treatment path because male pattern thinning, diffuse thinning
                  from other causes, and inflammatory scalp conditions can all present with somewhat overlapping
                  symptoms but require different management approaches.
                </p>
              </div>
              <div className="border border-gray-200 rounded-2xl p-7">
                <div className="flex items-center gap-2 text-[#1F5E4B] font-bold mb-4">
                  <Venus className="w-5 h-5" /> Hair Thinning in Women
                </div>
                <p className="text-sm text-[#5F5F5F] leading-relaxed mb-4">Women often experience hair thinning differently than men, commonly presenting as:</p>
                <ul className="space-y-2 mb-4">
                  {womenSigns.map((s, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[#5F5F5F]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1F5E4B] mt-2 flex-shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-[#5F5F5F] leading-relaxed border-t border-gray-100 pt-4">
                  Because diffuse thinning in women often has multiple potential contributing causes, unexplained or
                  progressive thinning is generally worth a proper assessment rather than assumption or
                  self-treatment.
                </p>
              </div>
            </div>
          </section>

          {/* COMPARE APPROACHES — toggle */}
          <section id="compare">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-4">Comparing Approaches</h2>
            <p className="text-[#5F5F5F] leading-relaxed mb-6">
              Not every case of thinning requires — or is suitable for — surgical intervention. See how the
              general approaches compare:
            </p>
            <div className="flex gap-2 mb-6">
              <button
                onClick={() => setCompareMode('transplant')}
                className={`px-5 py-2.5 rounded-full text-sm font-bold border transition-all ${compareMode === 'transplant' ? 'bg-[#1F5E4B] text-white border-[#1F5E4B]' : 'border-gray-200 text-[#5F5F5F]'}`}
              >
                Non-Surgical vs Hair Transplant
              </button>
              <button
                onClick={() => setCompareMode('meso')}
                className={`px-5 py-2.5 rounded-full text-sm font-bold border transition-all ${compareMode === 'meso' ? 'bg-[#1F5E4B] text-white border-[#1F5E4B]' : 'border-gray-200 text-[#5F5F5F]'}`}
              >
                PRP vs Hair Mesotherapy
              </button>
            </div>
            <AnimatePresence mode="wait">
              <motion.div key={compareMode} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} className="overflow-x-auto">
                <table className="w-full border-t border-gray-200 min-w-[560px]">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 pr-4 text-xs font-bold uppercase tracking-wide text-gray-400 w-1/5">&nbsp;</th>
                      <th className="text-left py-3 pr-4 text-sm font-bold text-[#1A1A1A]">{compareMode === 'transplant' ? 'Non-Surgical Hair Treatments' : 'PRP'}</th>
                      <th className="text-left py-3 text-sm font-bold text-[#1A1A1A]">{compareLabel}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {compareRows.map((row, i) => (
                      <tr key={i} className="border-b border-gray-100">
                        <td className="py-4 pr-4 text-xs font-bold text-gray-400 align-top">{row.label}</td>
                        <td className="py-4 pr-4 text-sm text-[#5F5F5F] leading-relaxed align-top">{row.a}</td>
                        <td className="py-4 text-sm text-[#5F5F5F] leading-relaxed align-top">{row.b}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </motion.div>
            </AnimatePresence>
            <p className="mt-6 text-sm text-[#5F5F5F]">
              {compareMode === 'transplant' ? (
                <>
                  The right choice depends entirely on individual assessment findings. Read a deeper comparison on
                  our{' '}
                  <a href="/services/prp-vs-hair-transplant-dubai/" className="text-[#1F5E4B] font-semibold underline decoration-[#1F5E4B]/30 hover:decoration-[#1F5E4B]">
                    PRP vs Hair Transplant in Dubai
                  </a>{' '}
                  page.
                </>
              ) : (
                <>
                  Both approaches require a personalized treatment plan rather than a one-size-fits-all protocol. See
                  our full comparison on{' '}
                  <a href="/services/prp-vs-hair-mesotherapy-dubai/" className="text-[#1F5E4B] font-semibold underline decoration-[#1F5E4B]/30 hover:decoration-[#1F5E4B]">
                    PRP vs Hair Mesotherapy
                  </a>
                  .
                </>
              )}
            </p>
          </section>

          {/* COST */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-4">Hair Thinning Treatment Cost in Dubai</h2>
            <p className="text-[#5F5F5F] leading-relaxed mb-6">
              We intentionally do not list fixed prices here, because cost genuinely depends on several individual
              factors:
            </p>
            <div className="grid sm:grid-cols-2 gap-2 mb-6">
              {costFactors.map((f, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-[#5F5F5F]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1F5E4B] mt-2 flex-shrink-0" />
                  {f}
                </div>
              ))}
            </div>
            <p className="text-sm text-[#5F5F5F] leading-relaxed">
              Because pricing is tied to your individualized treatment plan, the most accurate way to understand cost
              is through a consultation. For general guidance on PRP pricing specifically, see our{' '}
              <a href="/services/hair-prp-cost-dubai/" className="text-[#1F5E4B] font-semibold underline decoration-[#1F5E4B]/30 hover:decoration-[#1F5E4B]">
                PRP Hair Treatment Cost in Dubai
              </a>{' '}
              page.
            </p>
          </section>

          {/* TRACK + HABITS */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-4">How to Track Hair Thinning</h2>
            <p className="text-[#5F5F5F] leading-relaxed mb-6">
              If you&apos;re concerned about hair thinning — whether or not you&apos;ve started treatment —
              tracking change accurately over time is more useful than daily observation, which can be misleading
              due to lighting, styling, and even how recently you washed your hair. A more reliable method includes:
            </p>
            <div className="grid sm:grid-cols-2 gap-2 mb-6">
              {trackingSteps.map((s, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-[#5F5F5F]">
                  <Camera className="w-3.5 h-3.5 text-[#1F5E4B] flex-shrink-0 mt-1" />
                  {s}
                </div>
              ))}
            </div>
            <p className="text-sm text-[#5F5F5F] leading-relaxed mb-10">
              Daily self-checking often causes more anxiety than insight, since natural day-to-day variation in
              shedding and appearance is normal and doesn&apos;t necessarily reflect a meaningful trend.
            </p>

            <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">Daily Habits That Support Healthy Hair</h3>
            <p className="text-[#5F5F5F] leading-relaxed mb-6">
              While daily habits alone are unlikely to reverse genetically driven hair thinning, they can support
              overall hair and scalp health:
            </p>
            <div className="grid sm:grid-cols-2 gap-2">
              {dailyHabits.map((h, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-[#5F5F5F]">
                  <Check className="w-3.5 h-3.5 text-[#1F5E4B] flex-shrink-0 mt-1" />
                  {h}
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-[#5F5F5F] leading-relaxed">
              These habits are supportive, not curative — they should be viewed as part of a broader approach
              rather than a standalone treatment for progressive or genetic thinning.
            </p>
          </section>

          {/* WHEN TO SEE SPECIALIST */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-4">When Should You See a Hair Specialist?</h2>
            <p className="text-[#5F5F5F] leading-relaxed mb-6">
              While gradual, mild thinning is common and not always urgent, certain signs warrant more prompt
              professional evaluation:
            </p>
            <div className="grid sm:grid-cols-2 gap-2 mb-6">
              {whenToSee.map((w, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-[#5F5F5F] bg-amber-50 border-l-2 border-amber-400 pl-3 py-1.5">
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-600 flex-shrink-0 mt-0.5" />
                  {w}
                </div>
              ))}
            </div>
            <p className="text-sm text-[#5F5F5F] leading-relaxed">
              If any of these apply to you, it&apos;s worth arranging an assessment sooner rather than continuing to
              monitor on your own. Learn more about finding the right professional on our{' '}
              <a href="/services/best-hair-specialist-dubai/" className="text-[#1F5E4B] font-semibold underline decoration-[#1F5E4B]/30 hover:decoration-[#1F5E4B]">
                Best Hair Specialist in Dubai
              </a>{' '}
              page.
            </p>
          </section>

          {/* CHOOSING A CLINIC */}
          <section id="clinic">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-4">How to Choose a Hair Thinning Clinic in Dubai</h2>
            <p className="text-[#5F5F5F] leading-relaxed mb-6">
              Choosing where to seek treatment matters as much as choosing whether to seek treatment. Consider the
              following when evaluating a clinic:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-2xl p-6">
                <h4 className="font-bold text-[#1A1A1A] mb-4 flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#1F5E4B]" /> Look For
                </h4>
                <ul className="space-y-2">
                  {clinicChecklist.map((c, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[#5F5F5F] leading-relaxed">
                      <Check className="w-3.5 h-3.5 text-[#1F5E4B] flex-shrink-0 mt-1" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border border-gray-200 rounded-2xl p-6">
                <h4 className="font-bold text-[#1A1A1A] mb-1 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-500" /> Red Flags to Watch For
                </h4>
                <p className="text-xs text-[#5F5F5F] mb-4">Be cautious of clinics or providers that show any of the following:</p>
                <ul className="space-y-2">
                  {redFlags.map((r, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[#5F5F5F] leading-relaxed">
                      <X className="w-3.5 h-3.5 text-red-400 flex-shrink-0 mt-1" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* HAIR THINNING IN DUBAI */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-4">Hair Thinning Treatment in Dubai</h2>
            <p className="text-[#5F5F5F] leading-relaxed">
              Dubai has a wide range of hair and skin clinics, which makes it especially important to prioritize
              proper assessment and individualized planning over marketing claims when choosing where to seek a hair
              thinning treatment in Dubai. A reliable{' '}
              <a href="/services/best-hair-specialist-dubai/" className="text-[#1F5E4B] font-semibold underline decoration-[#1F5E4B]/30 hover:decoration-[#1F5E4B]">
                hair specialist in Dubai
              </a>{' '}
              will begin with a thorough evaluation rather than moving straight to a specific procedure, and a
              trustworthy{' '}
              <a href="/services/hair-loss-clinic-dubai/" className="text-[#1F5E4B] font-semibold underline decoration-[#1F5E4B]/30 hover:decoration-[#1F5E4B]">
                hair loss clinic in Dubai
              </a>{' '}
              will be transparent about what a given treatment can realistically offer based on your individual
              diagnosis. Whether you&apos;re exploring a{' '}
              <a href="/services/hair-loss-clinic-dubai/" className="text-[#1F5E4B] font-semibold underline decoration-[#1F5E4B]/30 hover:decoration-[#1F5E4B]">
                hair clinic in Dubai
              </a>{' '}
              for the first time or comparing options for{' '}
              <a href="/services/hair-loss-dubai/" className="text-[#1F5E4B] font-semibold underline decoration-[#1F5E4B]/30 hover:decoration-[#1F5E4B]">
                hair treatment in Dubai
              </a>
              , the same principle applies: assessment before treatment, and realistic expectations throughout.
            </p>
          </section>

          {/* WHY CHOOSE RAMACARE */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-4">Why Choose RamaCare Polyclinic?</h2>
            <p className="text-[#5F5F5F] leading-relaxed mb-6">
              RamaCare Polyclinic approaches hair thinning as a clinical concern that deserves a structured,
              individualized process:
            </p>
            <div className="border border-gray-200 rounded-2xl overflow-hidden">
              {whyChoose.map((item, i) => (
                <div key={i} className={`flex items-start gap-3 px-5 py-3.5 ${i % 2 === 1 ? 'bg-[#F9F7F2]' : 'bg-white'}`}>
                  <ClipboardList className="w-4 h-4 text-[#1F5E4B] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-[#5F5F5F] leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-[#5F5F5F] leading-relaxed">
              We do not make claims about success rates, patient volumes, awards, or guaranteed outcomes, because
              responsible hair care starts with honest expectations.
            </p>
          </section>
        </div>
      </div>

      {/* Editorial Layout: FAQ & Footer Content (Google Reviews portal will auto-inject right before this section) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="space-y-20">
          <section id="faqs">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-6">Frequently Asked Questions</h2>
            <div className="flex flex-wrap gap-2 mb-6">
              {faqGroups.map((g) => (
                <button
                  key={g.key}
                  onClick={() => {
                    setFaqGroup(g.key);
                    setOpenFaq(null);
                  }}
                  className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all ${faqGroup === g.key ? 'bg-[#1F5E4B] text-white border-[#1F5E4B]' : 'border-gray-200 text-[#5F5F5F] hover:border-[#1F5E4B]/40'
                    }`}
                >
                  {g.label}
                </button>
              ))}
            </div>
            <AnimatePresence mode="wait">
              <motion.div key={faqGroup} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} className="divide-y divide-gray-100 border-t border-b border-gray-100">
                {activeGroup.faqs.map((faq, index) => (
                  <div key={index}>
                    <button onClick={() => toggleFaq(index)} className="w-full py-4 text-left flex items-center gap-4 hover:bg-[#F9F7F2] transition-colors px-2">
                      <span className="font-semibold text-[#1A1A1A] text-sm flex-1">{faq.question}</span>
                      <ChevronDown className={`w-4 h-4 text-[#1F5E4B] flex-shrink-0 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {openFaq === index && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                          <p className="pb-4 px-2 text-sm text-[#5F5F5F] leading-relaxed">{faq.answer}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </section>

          {/* MEDICAL DISCLAIMER */}
          <section className="bg-[#F9F7F2] rounded-2xl p-6">
            <h3 className="text-lg font-bold text-[#1A1A1A] mb-3 flex items-center gap-2">
              <Info className="w-5 h-5 text-[#1F5E4B]" />
              Medical Disclaimer
            </h3>
            <p className="text-[#5F5F5F] leading-relaxed text-sm">
              Hair thinning can result from a wide range of causes, and treatment suitability differs significantly
              from person to person. The information on this page is intended for general educational purposes and
              cannot replace an in-person clinical assessment. If you are experiencing sudden, severe, painful, or
              patchy hair loss, please seek a professional evaluation promptly rather than relying on general
              information online.
            </p>
          </section>
        </div>
      </div>

      {/* ============ CTA — with discussion points ============ */}
      <section className="py-20 px-4 bg-[#1F5E4B]" id="book-now">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5">Book a Hair Thinning Consultation in Dubai</h2>
            <p className="text-lg text-white/85 max-w-2xl mx-auto leading-relaxed">
              If you&apos;ve noticed changes in your hair density and want a clearer understanding of what&apos;s
              happening, a consultation at RamaCare Polyclinic is a good place to start. During your visit, we can
              discuss:
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-3 mb-10 max-w-2xl mx-auto">
            {consultDiscussionPoints.map((p, i) => (
              <div key={i} className="flex items-start gap-2.5 bg-white/10 rounded-xl p-3.5 text-sm text-white/90">
                <Check className="w-4 h-4 flex-shrink-0 mt-0.5" />
                {p}
              </div>
            ))}
          </div>
          <p className="text-center text-white/80 text-sm max-w-2xl mx-auto mb-8">
            We won&apos;t promise guaranteed regrowth, a permanent cure, or results that work for everyone —
            what we can offer is an honest, structured assessment and a treatment plan built around your individual
            circumstances.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/book-appointment"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#1F5E4B] px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <CalendarDays className="w-5 h-5" />
              Book Appointment
            </a>
            <a
              href="/contact-us"
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all"
            >
              <Phone className="w-5 h-5" />
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* ============ RELATED GUIDES — index list ============ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-[#1A1A1A] mb-8">Related Hair Treatment Guides</h3>
          <div className="grid sm:grid-cols-2 gap-x-8">
            {relatedGuides.map((g, i) => (
              <a key={i} href={g.href} className="group flex items-start gap-3 py-3 border-b border-gray-100">
                <span className="text-xs font-bold text-[#1F5E4B]/40 w-6 flex-shrink-0 mt-0.5">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h4 className="font-semibold text-[#1A1A1A] text-sm group-hover:text-[#1F5E4B] transition-colors">{g.title}</h4>
                  <p className="text-xs text-[#5F5F5F] leading-relaxed mt-0.5">{g.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}