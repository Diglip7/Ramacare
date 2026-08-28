import { useRef, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Layout from "../../../components/Layout";
import ContentReviewBadge from "../../../components/ContentReviewBadge";
import { motion } from "framer-motion";
import { ArrowLeftRight, ArrowRight, ChevronLeft, ChevronRight, MapPin, Quote, Camera, Film, Check, X, Info, ClipboardCheck, TicketCheck, Gauge, CalendarClock, AlertTriangle, Sparkle, RefreshCw, Building2, Award, Users, Route, Receipt, ThumbsUp, ThumbsDown, Phone, Send, Milestone } from "lucide-react";

/* CONTENT — verbatim */
const meta = {
  title: "Zoom Teeth Whitening Treatment in Dubai | RamaCare",
  description:
    "Considering Zoom Teeth Whitening Treatment in Dubai? See realistic results, safety info, and cost factors at RamaCare. Book a consultation today.",
  url: "/services/zoom-teeth-whitening-treatment-dubai",
};

const hero = {
  h1: "Zoom Teeth Whitening Treatment in Dubai: What to Expect",
  intro: [
    "If you’re researching Zoom Teeth Whitening Treatment in Dubai, you’re probably trying to answer a few practical questions at once: what does the treatment actually involve, is it right for your teeth, and what kind of change can you realistically expect? Those are exactly the right questions to ask before booking anything.",
    "Zoom Teeth Whitening is a professional, in-office whitening treatment used to lighten the appearance of natural tooth enamel. At RamaCare Polyclinic in Dubai, we see a wide range of patients — some with mild coffee staining, others with years of tea or tobacco exposure, and some whose teeth have simply darkened gradually with age. Because every mouth starts from a different baseline, no two patients respond to treatment in exactly the same way.",
    "Your starting tooth shade, the type of discoloration you have, your enamel’s natural characteristics, and whether you have existing fillings, crowns, or veneers all influence what whitening can achieve. This is exactly why a proper dental assessment comes before any whitening plan — not after it. This page walks through how the treatment works, what genuinely affects your results, treatment safety, aftercare, and how to set expectations that match what professional whitening can realistically deliver.",
  ],
};

const quickAnswer = {
  label: "What Can You Expect From Zoom Teeth Whitening Treatment in Dubai?",
  body: "This treatment is a professional, in-office procedure that can lighten the appearance of natural tooth enamel, though the degree of change varies from patient to patient. Surface-level stains from coffee, tea, or tobacco often respond differently than discoloration that originates deeper within the tooth. Existing crowns, veneers, and composite fillings generally do not change color the way natural enamel does, which can create shade differences after treatment if this isn’t planned for in advance. A dental assessment before treatment helps determine whether whitening is a suitable option, and honest before-and-after photography — taken under consistent lighting, angle, and camera settings — gives a far more reliable picture of potential outcomes than promotional images alone.",
};

const TOC = [
  { id: "what-is-zoom-whitening", label: "What Is Zoom Teeth Whitening?", live: true },
  { id: "why-teeth-discolor", label: "Why Teeth Discolor", live: true },
  { id: "how-it-works", label: "How It Works", live: true },
  { id: "realistic-results", label: "Realistic Results", live: true },
  { id: "comparing-photos", label: "Comparing Photos", live: true },
  { id: "factors-affecting-results", label: "Factors Affecting Results", live: true },
  { id: "who-is-suitable", label: "Who's Suitable", live: true },
  { id: "when-not-enough", label: "When Not Enough", live: true },
  { id: "why-exam-matters", label: "Why Exam Matters", live: true },
  { id: "appointment", label: "The Appointment", live: true },
  { id: "does-it-hurt", label: "Does It Hurt?", live: true },
  { id: "side-effects", label: "Side Effects", live: true },
  { id: "results-last", label: "How Long Results Last", live: true },
  { id: "aftercare", label: "Aftercare", live: true },
  { id: "cost", label: "Cost in Dubai", live: true },
  { id: "professional-vs-home", label: "Pro vs At-Home", live: true },
  { id: "restorations", label: "Veneers, Crowns & Fillings", live: true },
  { id: "good-result", label: "A Good Result", live: true },
  { id: "benefits", label: "Benefits", live: true },
  { id: "why-ramacare", label: "Why RamaCare", live: true },
  { id: "patient-journey", label: "Patient Journey", live: true },
  { id: "faqs", label: "FAQs", live: true },
  { id: "book-consultation", label: "Book a Consultation", live: true },
];

const whatIsZoomWhitening = {
  h2: "What Is Zoom Teeth Whitening?",
  paragraphs: [
    "Zoom Teeth Whitening is a professional, in-office cosmetic dentistry treatment designed to lighten the visible shade of natural tooth enamel. It's carried out under the supervision of a dental professional, rather than self-administered at home, which allows the treatment to be monitored and adjusted throughout the appointment.",
    "The treatment relies on a whitening gel applied to the front surfaces of the teeth. The exact formulation and activation method used can vary depending on the specific whitening system and clinical protocol your dentist follows, so it's worth discussing the details of your particular treatment plan during your consultation rather than assuming every whitening session works identically.",
    "It's important to understand what whitening is actually doing: it's intended to improve the shade of your existing tooth structure, not to physically remove healthy enamel or alter the shape of your teeth. Whitening changes how light reflects off the tooth surface and how stains within the enamel and underlying dentin appear — it does not reshape, resurface, or restore teeth in the way that veneers or bonding can.",
    "Because this is a cosmetic dental procedure, dental supervision matters. A dentist can assess whether your teeth and gums are healthy enough for treatment, identify anything that needs attention first, and set a shade expectation based on your specific starting point.",
  ],
};

const whyTeethDiscolor = {
  h2: "Why Do Teeth Become Discolored?",
  intro: "Understanding why your teeth have changed color helps explain why whitening results differ so much between patients. Broadly, dental professionals separate discoloration into two categories: extrinsic stains and intrinsic discoloration.",
  extrinsic: {
    title: "Extrinsic Stains",
    intro: "These sit on or near the surface of the enamel and are usually related to what you eat, drink, or are exposed to over time. Common contributors include:",
    items: ["Coffee", "Tea", "Tobacco use", "Certain dark-colored foods and sauces", "Plaque buildup from inconsistent oral hygiene"],
    note: "Extrinsic stains tend to respond more predictably to professional whitening because they sit closer to the tooth surface.",
  },
  intrinsic: {
    title: "Intrinsic Discoloration",
    intro: "This type of discoloration originates from within the tooth structure itself, involving the dentin layer beneath the enamel. It can be caused by:",
    items: [
      "The natural aging process, as enamel thins and dentin becomes more visible",
      "Certain medications taken during tooth development",
      "Dental trauma affecting the internal structure of a tooth",
      "Developmental changes that occurred while teeth were forming",
    ],
    note: "Intrinsic discoloration often responds more slowly, unevenly, or in some cases minimally to whitening, depending on its cause and severity.",
  },
  closing: "Poor oral hygiene can also contribute to a duller or yellowed appearance by allowing plaque and surface debris to build up, which is a separate issue from the natural tooth color underneath. Not all discoloration responds equally to whitening — this is one of the most important things to understand before comparing your teeth to someone else's before-and-after photos.",
};

const howItWorks = {
  h2: "How Does Zoom Teeth Whitening Work?",
  intro: "While treatment protocols can vary between clinics and whitening systems, a professional in-office whitening appointment generally follows a similar structure:",
  steps: [
    { title: "Dental assessment", body: "checking that teeth and gums are healthy enough for whitening" },
    { title: "Shade assessment", body: "recording your starting tooth color using a shade guide, so progress can be measured objectively" },
    { title: "Gum and soft tissue protection", body: "shielding the gums and surrounding soft tissue before the whitening product is applied" },
    { title: "Application of the whitening product", body: "applied directly to the front surfaces of the teeth" },
    { title: "Professional activation or application according to the system used", body: "following the specific protocol for the whitening system your dentist uses" },
    { title: "Monitoring during treatment", body: "the dental team checks in on comfort and how the teeth are responding" },
    { title: "Post-treatment instructions", body: "guidance on what to do (and avoid) immediately afterward" },
  ],
  closing: "It's worth being clear that this process is not identical at every clinic. Different whitening systems, gel concentrations, and clinical protocols exist, and your dentist will explain the specific approach used for your treatment during your consultation.",
};

const realisticResults = {
  h2: "Understanding Realistic Before & After Results",
  intro1: "This is the section most patients are really looking for, so let's be direct about it.",
  intro2: "Before-and-after photographs are meant to illustrate a possible range of outcomes — not a guarantee of what your own results will look like. When you look at before-and-after images from any Zoom Teeth Whitening Treatment in Dubai, you’re seeing one specific patient’s starting shade, discoloration type, and response to treatment. Your own results depend on a different combination of factors.",
  variablesIntro: "Several variables shape how much visible change you can expect:",
  variables: [
    { title: "Starting tooth shade", body: "Naturally darker or more yellow teeth sometimes show a more noticeable initial change than teeth that are already relatively light." },
    { title: "Type of discoloration", body: "Extrinsic staining from coffee, tea, or surface buildup often responds differently than intrinsic discoloration from aging or medication history." },
    { title: "Age", body: "Tooth color naturally shifts over time as enamel thins, which can influence how a tooth responds to whitening." },
    { title: "Enamel characteristics", body: "Enamel thickness and translucency vary from person to person and even from tooth to tooth." },
    { title: "Diet", body: "Frequent consumption of staining foods and beverages can affect both initial results and how long they’re maintained." },
    { title: "Smoking or tobacco use", body: "Tobacco-related staining can be more persistent and may require more maintenance." },
    { title: "Oral hygiene habits", body: "Consistent brushing and cleaning between teeth supports better, more even results." },
    { title: "Treatment adherence", body: "Following your dentist’s pre- and post-treatment instructions plays a role in how the outcome looks and lasts." },
    { title: "Natural tooth color", body: "Everyone’s baseline enamel and dentin color is different, which is why identical treatment can produce different visible outcomes." },
  ],
  closing: "The honest takeaway is this: a before-and-after photo shows what happened for one particular patient, under one particular set of circumstances. It’s a useful reference point, not a promise. This is exactly why we recommend a dental consultation before setting your own expectations — a dentist examining your teeth in person can give you a far more relevant sense of what’s realistic for you specifically than any online gallery can.",
};

const galleryGradients = [
  { before: "linear-gradient(155deg,#8a6642,#6b4d33)", after: "linear-gradient(155deg,#fffdf8,#f3e6cf)" },
  { before: "linear-gradient(155deg,#7c5a3a,#5e4228)", after: "linear-gradient(155deg,#fefaf2,#efe0c2)" },
  { before: "linear-gradient(155deg,#93714c,#6f5537)", after: "linear-gradient(155deg,#fffefb,#f6ecd6)" },
  { before: "linear-gradient(155deg,#7f5f3f,#5c4429)", after: "linear-gradient(155deg,#fdfaf4,#f1e2c4)" },
];

const comparingPhotos = {
  h2: "How Should Before-and-After Photos Be Compared?",
  intro:
    "Not all before-and-after photography is trustworthy, and this matters more than most patients realize. Photography conditions alone can make teeth appear significantly whiter, independent of any actual treatment.",
  criteria: [
    "Similar lighting in both photos",
    "Similar camera settings (exposure, white balance, flash)",
    "The same angle",
    "The same distance from the camera",
    "The same patient in both images",
    "The same facial and head position",
    "Similar lip position",
    "No excessive photo editing",
    "No filters",
    "No artificial tooth enhancement or digital whitening",
  ],
  closing:
    "A photo taken in bright, cool-toned lighting will almost always make teeth look whiter than one taken in warm, dim lighting — regardless of whether any whitening treatment took place. When you’re evaluating before-and-after galleries for professional teeth whitening in Dubai, whether ours or anyone else’s, it’s worth asking whether the comparison photos appear to have been taken under consistent, controlled conditions. This is part of being a genuinely informed patient, and it’s something we take seriously in how we document real results.",
};

const factorsAffectingResults = {
  h2: "What Factors Affect Whitening Results?",
  rows: [
    { factor: "Starting tooth shade", effect: "Darker teeth may respond differently than lighter teeth" },
    { factor: "Type of stain", effect: "Surface (extrinsic) and internal (intrinsic) discoloration can behave differently" },
    { factor: "Age", effect: "Tooth color naturally changes over time as enamel and dentin shift" },
    { factor: "Enamel characteristics", effect: "Natural tooth structure and translucency vary between individuals" },
    { factor: "Diet", effect: "Staining foods and drinks may affect both results and maintenance" },
    { factor: "Tobacco use", effect: "Can contribute to more persistent or recurring stains" },
    { factor: "Oral hygiene", effect: "Plaque buildup and surface debris can affect overall appearance" },
    { factor: "Existing restorations", effect: "Crowns, veneers, and fillings do not whiten like natural enamel" },
    { factor: "Individual response", effect: "Whitening response genuinely varies between patients for reasons not always fully predictable" },
  ],
};

const whoIsSuitable = {
  h2: "Who May Be Suitable for Professional Teeth Whitening?",
  intro: "Professional whitening is often a reasonable option for patients with:",
  items: [
    "Yellowish natural tooth color",
    "Mild to moderate discoloration",
    "Coffee or tea-related surface staining",
    "Tobacco-related surface staining",
    "Age-related yellowing of the enamel",
    "Generally healthy teeth and gums, free of active decay or gum disease",
  ],
  closing:
    "That said, \u201cmay be suitable\u201d is not the same as \u201cis automatically appropriate.\u201d A dental examination should always come before starting treatment, so your dentist can confirm that whitening is a sensible choice for your specific dental health and expectations.",
};

const whenNotEnough = {
  h2: "When Teeth Whitening May Not Be Enough",
  intro: "For some patients, whitening alone won't achieve the kind of change they're hoping for. This is often the case with:",
  items: [
    "Deep intrinsic discoloration that doesn't respond well to surface whitening",
    "Discoloration linked to certain medications taken during tooth development",
    "Severe fluorosis (a specific type of enamel discoloration)",
    "Discolored root-treated (root canal) teeth",
    "Significant enamel defects or developmental irregularities",
    "Existing restorations with a shade that no longer matches surrounding teeth",
  ],
  alternatives: ["Dental bonding", "Veneers", "Crowns", "Other restorative dentistry"],
  closing:
    "Where whitening isn't expected to deliver a meaningful result, your dentist may discuss other options where clinically appropriate. We don't recommend jumping straight to more invasive treatment — the point of an assessment is to find the option that actually fits your situation, not to upsell a bigger procedure.",
};

const whyExamMatters = {
  h2: "Why a Dental Examination Matters Before Whitening",
  intro: "A whitening consultation isn't just about picking a shade goal — it's a genuine dental check that looks at:",
  checks: [
    "Cavities or active decay",
    "Gum disease or gum inflammation",
    "Cracks or structural issues in the teeth",
    "Existing tooth sensitivity",
    "Existing fillings, crowns, or veneers",
    "General enamel condition",
    "Current oral hygiene status",
  ],
  closing:
    "If untreated dental problems are found, these often need attention before cosmetic whitening is considered. Whitening a tooth with an unresolved cavity, for instance, isn't a good idea — and a proper exam is how that gets caught before it becomes a bigger issue.",
};

const appointment = {
  h2: "What Happens During a Zoom Whitening Appointment?",
  steps: [
    { title: "Consultation", body: "We discuss your goals, your dental history, and what you're hoping to achieve." },
    { title: "Dental Examination", body: "Your dentist checks your overall oral health to confirm whitening is appropriate." },
    { title: "Shade Assessment", body: "Your starting tooth color is recorded using a shade guide, giving us an objective baseline." },
    { title: "Preparation", body: "Your gums and soft tissue are protected according to the treatment protocol being used." },
    { title: "Whitening", body: "The professional whitening product is applied to your teeth according to the system in use." },
    { title: "Monitoring", body: "The dental team monitors your comfort and how your teeth are responding throughout the session." },
    { title: "Final Shade Assessment", body: "Your new shade is compared against your starting shade so you can see the measured change." },
    { title: "Aftercare", body: "You'll receive personalized instructions on what to do in the days following treatment." },
  ],
};

const doesItHurt = {
  h2: "Does Zoom Teeth Whitening Hurt?",
  paragraphs: [
    "Most patients tolerate professional whitening reasonably well, but it isn't accurate to describe it as completely painless for everyone. Temporary tooth sensitivity is fairly common during or shortly after treatment, and some patients experience mild gum irritation, particularly if they already have sensitive teeth or exposed dentin.",
    "Sensitivity levels vary quite a bit between individuals — some people notice very little, while others find it more uncomfortable. If you already deal with sensitive teeth, it's important to mention this before treatment begins, since your dentist can often adjust the approach to make the session more comfortable for you.",
  ],
};

const sideEffects = {
  h2: "Zoom Teeth Whitening Side Effects",
  intro: "Like most cosmetic dental procedures, professional whitening can come with some temporary side effects, including:",
  items: [
    "Temporary tooth sensitivity",
    "Mild gum irritation",
    "Temporary general discomfort",
    "Increased sensitivity to hot or cold foods and drinks for a short period afterward",
  ],
  closing:
    "These symptoms typically vary depending on the individual and the specific treatment used, and most resolve on their own within a short time. If you experience symptoms that feel unusual, severe, or that persist longer than expected, it's best to contact your dental professional rather than waiting it out.",
};

const resultsLast = {
  h2: "How Long Do Zoom Whitening Results Last?",
  intro: "Whitening results are not permanent, and it's worth setting that expectation clearly from the start. How long your results last depends on several factors, including:",
  factors: [
    "Diet, particularly frequent coffee, tea, or dark-colored food and drink consumption",
    "Tobacco use",
    "Oral hygiene habits",
    "Age-related changes in tooth color over time",
    "Your natural tooth color and how it tends to shift",
    "Ongoing maintenance, including touch-up whitening where recommended",
  ],
  closing:
    "We won't promise a fixed number of months or years, because it genuinely differs from patient to patient. What we can say is that good maintenance habits generally help preserve results for longer.",
};

const maintenance = {
  h2: "How to Maintain Your Whitening Results",
  intro: "A few practical habits go a long way toward preserving your results:",
  habits: [
    "Maintain regular brushing, ideally twice daily",
    "Clean between your teeth daily",
    "Attend routine dental check-ups and cleanings",
    "Follow the specific aftercare instructions given by your dentist",
    "Limit frequent exposure to heavily staining foods and drinks",
    "Avoid tobacco where possible",
    "Follow any recommendations given for managing sensitivity",
    "Keep your gums healthy through consistent oral hygiene",
  ],
  closing: "Your dentist's specific instructions for your case should always take priority over general advice, since they're tailored to your treatment and your teeth.",
};

const costInDubai = {
  h2: "Zoom Teeth Whitening Treatment in Dubai: Cost Factors",
  intro: "We’re not going to invent a fixed number here, because the honest answer is that the cost of Zoom Teeth Whitening Treatment in Dubai depends on several variables, including:",
  lineItems: [
    "The specific whitening system and protocol used",
    "Whether a dental examination and any preparatory treatment is needed first",
    "The number of appointments required",
    "The whitening protocol recommended for your case",
    "Any additional treatments needed to address underlying oral health issues",
    "Ongoing maintenance recommendations",
  ],
  closing: "A consultation is genuinely the most accurate way to get a treatment recommendation and quotation that reflects your actual dental needs. We’d also encourage you not to choose a clinic purely based on the lowest advertised price — the assessment, materials, and clinical oversight involved matter just as much as the number on a price list.",
};

const proVsAtHome = {
  h2: "Professional Zoom Whitening vs At-Home Whitening",
  professional: {
    label: "Professional Whitening",
    rows: [
      { label: "Supervision", value: "Overseen by a dental professional" },
      { label: "Assessment", value: "Clinical assessment possible before treatment" },
      { label: "Treatment speed", value: "Often faster, completed in-office" },
      { label: "Customization", value: "Can be tailored to your specific case" },
      { label: "Sensitivity monitoring", value: "Managed with professional guidance" },
      { label: "Suitability assessment", value: "A dentist can assess candidacy in person" },
    ],
  },
  atHome: {
    label: "At-Home Whitening",
    rows: [
      { label: "Supervision", value: "Usually self-administered" },
      { label: "Assessment", value: "Depends on the product used" },
      { label: "Treatment speed", value: "Usually more gradual over days or weeks" },
      { label: "Customization", value: "Depends on the product's design" },
      { label: "Sensitivity monitoring", value: "Self-managed by the patient" },
      { label: "Suitability assessment", value: "May be limited or absent" },
    ],
  },
  closing: "Neither option is universally \u201cbetter\u201d for every patient — it depends on your goals, your dental history, and how involved you want a professional to be in the process. This is exactly the kind of decision worth discussing during a consultation.",
};

const restorationsCompatibility = {
  h2: "Can Zoom Whitening Whiten Veneers, Crowns, or Fillings?",
  intro: "This is one of the most commonly misunderstood parts of teeth whitening, so let's be precise: professional whitening changes the color of natural teeth. Existing veneers, crowns, and many tooth-colored restorations generally do not whiten in the same way as natural tooth structure.",
  closing: "This matters because if you have visible restorations and you whiten your natural teeth around them, you can end up with a shade mismatch — your natural teeth may become noticeably lighter while your restorations stay the same color. For patients considering both whitening and cosmetic restorations like veneers, treatment sequencing matters. In many cases, it makes sense to complete whitening first and then match new restorations to your final, stable shade, rather than the other way around. This is something your dentist can plan with you in advance.",
};

const goodResult = {
  h2: "What Makes a Good Whitening Result?",
  intro: "It's worth reframing what \u201csuccess\u201d actually looks like here. A good result isn't necessarily the whitest possible smile — it's one that looks natural and suits you. That typically means:",
  traits: [
    "A brighter, more even natural tooth shade",
    "Consistent appearance across your visible teeth",
    "Healthy-looking gums",
    "Natural translucency preserved at the edges of the teeth",
    "A shade that's appropriate for your face and smile, rather than an artificial, flat white",
    "No unnecessary damage to tooth structure in pursuit of a brighter shade",
  ],
  closing: "Natural teeth have subtle variation and translucency by design — a result that looks slightly \u201ctoo uniform\u201d or unnaturally white can actually look less convincing than one that respects your natural tooth characteristics.",
};

const benefitsAndLimits = {
  h2: "Benefits & Limitations of Professional Whitening",
  benefitsIntro: "When appropriate for your case, professional whitening can offer:",
  benefits: [
    "Brighter-looking natural teeth",
    "A reduction in the appearance of certain surface stains",
    "An overall improvement in smile appearance",
    "Professional supervision throughout the process",
    "A personalized assessment based on your specific dental history",
    "More predictable planning compared with unsupervised, self-administered products",
  ],
  limitsIntro: "For the sake of medical accuracy, it's worth being explicit that whitening:",
  limits: [
    "Does not change the shape of your teeth",
    "Does not straighten teeth or correct alignment",
    "Does not repair cavities or existing decay",
    "Does not replace or repair damaged restorations",
    "Does not whiten veneers or crowns in the same way it whitens natural teeth",
    "May not fully correct deep intrinsic discoloration, depending on its cause",
  ],
  closing: "We'd rather describe this honestly than oversell it — whitening is a genuinely useful cosmetic treatment for the right candidate, and being upfront about what it can and can't do helps you decide if it's right for you.",
};

const whyRamaCare = {
  h2: "Why Choose RamaCare Polyclinic for Teeth Whitening?",
  pillars: [
    { icon: ClipboardCheck, title: "Professional Dental Assessment", body: "Every whitening conversation at RamaCare starts with understanding your oral health first — not with a shade chart." },
    { icon: Sparkle, title: "Personalized Treatment Planning", body: "Your treatment plan reflects your starting tooth shade, the type of staining you have, your current dental condition, and what you’re actually hoping to achieve." },
    { icon: Users, title: "Patient-Centered Care", body: "We aim to clearly explain the treatment itself, its limitations, appropriate aftercare, and realistic expectations — before, during, and after your visit." },
    { icon: Building2, title: "Multispecialty Environment", body: "RamaCare Polyclinic is a multispecialty clinic, meaning that if your assessment uncovers a dental issue outside of cosmetic whitening, there’s a broader team environment to address it." },
    { icon: MapPin, title: "Convenient Dubai Location", body: "RamaCare Polyclinic is based in Jumeirah 1, Dubai, making it accessible for patients across the city looking for a professional teeth whitening dentist in Dubai." },
  ],
};

const patientJourney = {
  h2: "Patient Journey",
  steps: [
    "Book Consultation",
    "Dental Examination",
    "Discuss Whitening Goals",
    "Baseline Shade Assessment",
    "Personalized Treatment Plan",
    "Professional Whitening",
    "Final Shade Assessment",
    "Aftercare Guidance",
    "Maintenance & Follow-Up",
  ],
};

const faqs = [
  { q: "What is Zoom Teeth Whitening?", a: "Zoom Teeth Whitening is a professional, in-office cosmetic dental treatment that uses a whitening gel applied to the natural teeth under dental supervision. It's designed to lighten the visible shade of tooth enamel rather than reshape or restore teeth." },
  { q: "What can I expect from Zoom Teeth Whitening Treatment in Dubai?", a: "You can expect a visible change in tooth shade for most suitable candidates, though the degree varies by patient. Results depend on your starting shade, discoloration type, and individual response to treatment." },
  { q: "How much whiter can teeth become?", a: "This varies significantly between patients and isn't something we can predict without an in-person assessment. Your dentist can give you a more realistic sense of potential change after examining your teeth and discussing your dental history." },
  { q: "Does Zoom Teeth Whitening work on yellow teeth?", a: "Yellowish discoloration often responds reasonably well to professional whitening, particularly when it's related to surface staining or general enamel tone. A dental assessment will confirm suitability for your specific case." },
  { q: "Does Zoom whitening remove coffee and tea stains?", a: "Surface stains from coffee and tea are a type of extrinsic staining, which often responds to professional whitening. Results still vary depending on how long-standing and deep the staining is." },
  { q: "Does Zoom Teeth Whitening work on deep discoloration?", a: "Deep intrinsic discoloration, such as that caused by certain medications or dental trauma, doesn't always respond as well to whitening as surface stains do. In some cases, alternative options may be more appropriate." },
  { q: "Is Zoom Teeth Whitening safe?", a: "Professional whitening carried out under dental supervision is generally considered a well-tolerated cosmetic procedure, though it's not risk-free for everyone. A dental assessment helps identify whether it's a suitable option for you." },
  { q: "Does Zoom whitening cause sensitivity?", a: "Temporary tooth sensitivity is a common, usually short-lived side effect. Some patients notice more than others, and existing sensitivity should be discussed with your dentist before treatment." },
  { q: "How long does professional teeth whitening take?", a: "Appointment length can vary depending on the treatment protocol and your dentist's assessment, so it's best discussed during your consultation rather than assumed in advance." },
  { q: "How long do whitening results last?", a: "Results aren't permanent and their duration depends on diet, oral hygiene, tobacco use, and individual factors. Good maintenance habits generally help preserve results for longer." },
  { q: "Can I eat normally after whitening?", a: "Your dentist will give you specific aftercare instructions, which may include temporarily avoiding certain foods and drinks known to stain teeth or trigger sensitivity." },
  { q: "Can I drink coffee after teeth whitening?", a: "Many dentists recommend limiting staining beverages like coffee for a short period after treatment to help protect your results, though specific guidance should come from your own aftercare instructions." },
  { q: "Can smokers have professional teeth whitening?", a: "Smokers can often still undergo whitening, though tobacco use may lead to more persistent or recurring staining, which is worth discussing openly during your consultation." },
  { q: "Can whitening work on veneers?", a: "No — professional whitening changes the color of natural teeth, but existing veneers generally do not whiten in the same way. This is an important consideration if you have veneers and are considering whitening surrounding natural teeth." },
  { q: "Can whitening work on crowns and fillings?", a: "Crowns and tooth-colored fillings typically do not change shade the way natural enamel does, which can sometimes create a visible mismatch after whitening natural teeth nearby." },
  { q: "Is professional whitening better than home whitening?", a: "Neither option is universally better — professional whitening offers clinical supervision and assessment, while at-home options are typically more gradual and self-managed. The right choice depends on your goals and dental history." },
  { q: "How much does professional teeth whitening cost in Dubai?", a: "Cost depends on factors like the treatment system used, the number of appointments, and any additional dental work needed. A consultation provides the most accurate quotation for your specific case." },
  { q: "Can I get teeth whitening if I have sensitive teeth?", a: "Yes, in many cases, though your dentist may adjust the treatment approach to help manage discomfort. It's important to mention existing sensitivity before treatment begins." },
  { q: "Do I need a dental examination before whitening?", a: "Yes. A dental examination helps confirm that your teeth and gums are healthy enough for whitening and identifies any issues that should be addressed first." },
  { q: "How do I book teeth whitening at RamaCare?", a: "You can book a consultation by phone, WhatsApp, or through our website. Your first visit will include a dental examination and a discussion of your whitening goals before any treatment plan is created." },
];

const finalCta = {
  eyebrow: "Ready to Brighten Your Smile?",
  body: "Professional teeth whitening should always begin with a proper assessment of your teeth and gums — not a shade chart alone. If you’re curious about what Zoom Teeth Whitening Treatment in Dubai could realistically do for your smile, the next step is a consultation, where your dentist can examine your teeth, discuss your goals, and explain what to expect based on your specific starting point.",
  sub: "Book a Teeth Whitening Consultation at RamaCare Polyclinic, call our team, or WhatsApp us to ask a question before booking. We’re located in Jumeirah 1, Dubai, and happy to walk you through the process at your own pace.",
  conclusion: "Professional teeth whitening can lighten the appearance of natural tooth enamel, but it isn’t a one-size-fits-all outcome, and it can’t change tooth shape, repair dental problems, or whiten existing crowns and veneers. Results genuinely vary from patient to patient, shaped by your starting shade, the type of discoloration you have, your enamel characteristics, and how consistently you maintain your results afterward. This is why a dental assessment matters so much before treatment begins, and why anyone considering Zoom Teeth Whitening Treatment in Dubai should treat before-and-after photographs as a helpful reference point rather than a guarantee. If you’d like a realistic, personalized sense of what whitening could do for your own smile, the most useful next step is a consultation with our dental team in Jumeirah 1, Dubai — book one whenever you’re ready.",
};

/* IMAGE ASSETS & RECOMMENDATIONS MAPPING */
const IMAGES = {
  hero: {
    src: "/images/cosmetic-dental-consultation.jpg",
    alt: "Zoom Teeth Whitening Treatment in Dubai consultation",
  },
  beforeAfterBefore: {
    src: "/images/Before and after results of professional teeth whitening.jpg",
    alt: "Before and after results of professional teeth whitening in Dubai",
  },
  beforeAfterAfter: {
    src: "/images/Before and after results of professional teeth whitening1.jpg",
    alt: "Before and after results of professional teeth whitening in Dubai",
  },
  shadeAssessment: {
    src: "/images/teeth-bleaching.jpg",
    alt: "Professional teeth whitening shade assessment in Dubai",
  },
  whiteningConsultation: {
    src: "/images/dental consultation with Dr. Hirbod Gilandoust.jpg",
    alt: "Professional teeth whitening consultation with Dubai dentist",
  },
  treatmentPreparation: {
    src: "/images/teeth-bleaching1.jpg",
    alt: "Professional teeth whitening treatment preparation Dubai",
  },
  whiteningSession: {
    src: "/images/modern-dental-treatment-room.jpg",
    alt: "In-office Zoom whitening session at a Dubai dental clinic",
  },
  stainCauses: {
    src: "/images/Illustration showing common causes of tooth pain.jpg",
    alt: "Common causes of tooth discoloration and dental stains",
  },
  aftercare: {
    src: "/images/dental-checkup-ramacare-polyclinic.jpg",
    alt: "Teeth whitening aftercare advice from Dubai dentist",
  },
  naturalSmile: {
    src: "/images/happy-patient-after-dental-treatment-dubai.jpg",
    alt: "Natural-looking professional teeth whitening result Dubai",
  },
  finalCta: {
    src: "/images/ramaCare Polyclinic Jumeirah Dubai.jpg",
    alt: "RamaCare dental clinic for Zoom Teeth Whitening Treatment in Dubai",
  },
};

/* BRAND TOKENS & TYPOGRAPHY — Harmonized with RamaCare System */
const BRAND = { teal: "#2B7E67", darkTeal: "#1F5E4B", gold: "#D4A574", cream: "#F5F1E8", creamLight: "#F9F7F2" };
const FONT_DISPLAY = "'Nunito Sans', sans-serif";
const FONT_BODY = "'Nunito Sans', sans-serif";

/* SIGNATURE FEATURE — draggable before/after comparison slider */
function BeforeAfterSlider() {
  const [pos, setPos] = useState(50);
  const ref = useRef(null);
  const dragging = useRef(false);
  const update = (clientX) => {
    const rect = ref.current.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(96, Math.max(4, pct)));
  };

  return (
    <div
      ref={ref}
      className="relative aspect-[16/9] w-full select-none overflow-hidden rounded-[28px] shadow-2xl border border-white/20"
      onMouseDown={(e) => { dragging.current = true; update(e.clientX); }}
      onMouseMove={(e) => dragging.current && update(e.clientX)}
      onMouseUp={() => (dragging.current = false)}
      onMouseLeave={() => (dragging.current = false)}
      onTouchStart={(e) => { dragging.current = true; update(e.touches[0].clientX); }}
      onTouchMove={(e) => dragging.current && update(e.touches[0].clientX)}
      onTouchEnd={() => (dragging.current = false)}
    >
      {/* AFTER (base layer) */}
      <div className="absolute inset-0">
        <img
          src={IMAGES.beforeAfterAfter.src}
          alt={IMAGES.beforeAfterAfter.alt}
          className="h-full w-full object-cover"
        />
        <span className="absolute right-4 top-4 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-white shadow-md" style={{ backgroundColor: BRAND.darkTeal }}>
          After
        </span>
      </div>

      {/* BEFORE (clipped layer) */}
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <img
          src={IMAGES.beforeAfterBefore.src}
          alt={IMAGES.beforeAfterBefore.alt}
          className="h-full w-full object-cover"
        />
        <span className="absolute left-4 top-4 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-white shadow-md" style={{ backgroundColor: BRAND.gold }}>
          Before
        </span>
      </div>

      {/* HANDLE */}
      <div className="absolute top-0 h-full w-[3px] bg-white shadow-lg" style={{ left: `${pos}%` }}>
        <div className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-xl">
          <ArrowLeftRight size={16} color={BRAND.darkTeal} />
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-white" style={{ fontFamily: FONT_BODY }}>
      {/* diagonal glow panel */}
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[46%] md:block" style={{ background: "linear-gradient(155deg,#fdf3e3,#f6e4c6)", clipPath: "polygon(18% 0, 100% 0, 100% 100%, 0% 100%)" }} />
      <div className="pointer-events-none absolute right-10 top-16 h-56 w-56 rounded-full blur-3xl" style={{ background: `${BRAND.gold}40` }} />
      <div className="pointer-events-none absolute right-32 bottom-10 h-40 w-40 rounded-full blur-3xl" style={{ background: `${BRAND.teal}25` }} />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 pt-8 pb-16 md:px-10 md:pt-10 md:pb-20 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-5">
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
                Zoom Teeth Whitening Treatment in Dubai
              </li>
            </ol>
          </nav>

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.13em]" style={{ borderColor: `${BRAND.gold}66`, color: "#9C7443" }}>
            <MapPin size={13} /> Dubai &middot; Zoom Teeth Whitening
          </div>
          <h1 className="max-w-3xl text-[2.5rem] leading-[1.12] md:text-[3.25rem]" style={{ fontFamily: FONT_DISPLAY, fontWeight: 600, color: BRAND.darkTeal }}>
            {hero.h1}
          </h1>
          <div className="mt-7 max-w-2xl space-y-4">
            {hero.intro.map((p, i) => (
              <p key={i} className="text-[15.5px] leading-[1.85] md:text-[16.5px] text-neutral-600">{p}</p>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="https://wa.me/971566597878?text=Hello%20RamaCare,%20I'd%20like%20to%20book%20a%20Zoom%20Teeth%20Whitening%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-[15px] font-semibold text-white shadow-md transition-transform hover:-translate-y-0.5"
              style={{ backgroundColor: BRAND.darkTeal }}
            >
              Book via WhatsApp <Send size={16} />
            </a>
            <a
              href="tel:+97142862006"
              className="inline-flex items-center gap-2 rounded-full border-2 px-7 py-3.5 text-[15px] font-semibold transition-all hover:bg-neutral-50"
              style={{ borderColor: BRAND.gold, color: BRAND.darkTeal }}
            >
              <Phone size={16} /> Call Clinic
            </a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }}>
          <BeforeAfterSlider />
          <p className="mt-3 text-center text-[12px] text-neutral-400">Drag to compare — placeholder for real patient photos</p>
        </motion.div>
      </div>
    </section>
  );
}

function QuickAnswer() {
  return (
    <section className="relative overflow-hidden px-6 py-16 md:px-10" style={{ backgroundColor: BRAND.cream, fontFamily: FONT_BODY }}>
      <div className="pointer-events-none absolute left-1/4 top-0 h-64 w-64 -translate-y-1/2 rounded-full blur-3xl" style={{ background: `${BRAND.gold}25` }} />
      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }} className="relative mx-auto max-w-5xl text-center">
        <Quote size={44} className="mx-auto opacity-20" color={BRAND.darkTeal} fill={BRAND.darkTeal} />
        <h2 className="mt-3 text-2xl md:text-[2rem]" style={{ fontFamily: FONT_DISPLAY, fontWeight: 600, color: BRAND.darkTeal }}>
          {quickAnswer.label}
        </h2>
        <p className="mx-auto mt-5 max-w-4xl text-[16px] leading-[1.9] md:text-[17.5px] text-neutral-700">{quickAnswer.body}</p>
      </motion.div>
    </section>
  );
}

/* horizontal scrubber ToC — hidden scrollbar with transparent arrow controls */
function TableOfContents() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -320 : 320,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative border-y bg-white px-4 py-6 md:px-10" style={{ borderColor: `${BRAND.gold}22`, fontFamily: FONT_BODY }}>
      <div className="mx-auto flex max-w-6xl items-center gap-3">
        <button
          onClick={() => scroll("left")}
          aria-label="Scroll left"
          className="flex h-9 w-9 flex-none items-center justify-center rounded-full border border-neutral-200/80 bg-white/80 text-neutral-600 shadow-sm backdrop-blur transition-all hover:bg-white hover:text-[#1F5E4B] hover:shadow-md active:scale-95"
        >
          <ChevronLeft size={18} />
        </button>

        <div
          ref={scrollRef}
          className="flex-1 overflow-x-auto scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          <div className="relative flex min-w-max items-center gap-0 pb-2 pt-1">
            <div className="absolute left-0 right-0 top-[11px] h-px" style={{ backgroundColor: `${BRAND.darkTeal}18` }} />
            {TOC.map((item) =>
              item.live ? (
                <a key={item.id} href={`#${item.id}`} className="group relative z-10 flex flex-col items-center px-4">
                  <span className="h-3.5 w-3.5 rounded-full ring-4 transition-transform group-hover:scale-125" style={{ backgroundColor: BRAND.gold, ringColor: `${BRAND.gold}30` }} />
                  <span className="mt-2.5 whitespace-nowrap text-[12px] font-semibold transition-colors group-hover:text-[#1F5E4B]" style={{ color: BRAND.darkTeal }}>
                    {item.label}
                  </span>
                </a>
              ) : (
                <span key={item.id} className="group relative z-10 flex flex-col items-center px-4">
                  <span className="h-2 w-2 rounded-full" style={{ backgroundColor: `${BRAND.darkTeal}22` }} />
                  <span className="mt-2.5 whitespace-nowrap text-[11px] text-neutral-400">{item.label}</span>
                </span>
              )
            )}
          </div>
        </div>

        <button
          onClick={() => scroll("right")}
          aria-label="Scroll right"
          className="flex h-9 w-9 flex-none items-center justify-center rounded-full border border-neutral-200/80 bg-white/80 text-neutral-600 shadow-sm backdrop-blur transition-all hover:bg-white hover:text-[#1F5E4B] hover:shadow-md active:scale-95"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </section>
  );
}

/* magazine-style content column with drop cap + floating marginal stat */
function WhatIsZoomWhitening() {
  const [first, ...rest] = whatIsZoomWhitening.paragraphs;
  return (
    <section id="what-is-zoom-whitening" className="scroll-mt-24 px-6 py-20 md:px-10 md:py-28" style={{ backgroundColor: "#FFFFFF", fontFamily: FONT_BODY }}>
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-[0.32fr_1fr]">
        <div className="hidden lg:block">
          <div className="sticky top-28 rounded-2xl p-7 shadow-sm" style={{ backgroundColor: BRAND.cream }}>
            <span className="text-[12px] font-semibold uppercase tracking-[0.14em]" style={{ color: BRAND.gold }}>Key Point</span>
            <p className="mt-3 text-[15px] leading-relaxed font-medium" style={{ color: BRAND.darkTeal }}>
              Whitening changes shade — not shape. It won't alter crowns, veneers, or fillings the way it lightens natural enamel.
            </p>
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}>
          <span className="text-[12.5px] font-semibold uppercase tracking-[0.16em]" style={{ color: BRAND.gold }}>Understanding the Treatment</span>
          <h2 className="mt-3 text-[2rem] leading-tight md:text-[2.5rem]" style={{ fontFamily: FONT_DISPLAY, fontWeight: 600, color: BRAND.darkTeal }}>
            {whatIsZoomWhitening.h2}
          </h2>

          <p className="mt-7 text-[16.5px] leading-[1.95] md:text-[17.5px] text-neutral-700">
            <span className="mr-1 float-left text-[4rem] font-semibold leading-[0.75]" style={{ fontFamily: FONT_DISPLAY, color: BRAND.gold }}>Z</span>
            {first.replace(/^Zoom/, "oom")}
          </p>
          {rest.map((p, i) => (
            <p key={i} className="mt-5 text-[16px] leading-[1.9] md:text-[17px] text-neutral-700">{p}</p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* Dr. Joy-style before/after card — reused 4× in the gallery below */
function GallerySlider({ index }) {
  const [pos, setPos] = useState(50);
  const ref = useRef(null);
  const dragging = useRef(false);
  const galleryImages = [
    { before: { src: "/images/Professional teeth whitening shade assessment in Dubai.jpg", alt: "Professional teeth whitening shade assessment in Dubai" }, after: { src: "/images/Professional teeth whitening shade assessment in Dubai1.jpg", alt: "Professional teeth whitening consultation with Dubai dentist" } },
    { before: { src: "/images/Professional teeth whitening treatment.jpg", alt: "Professional teeth whitening treatment preparation Dubai" }, after: { src: "/images/In-office Zoom whitening session at a Dubai.jpg", alt: "In-office Zoom whitening session at a Dubai dental clinic" } },
    { before: { src: "/images/Common causes of tooth discoloration and dental stains.jpg", alt: "Common causes of tooth discoloration and dental stains" }, after: { src: "/images/Teeth whitening aftercare advice from Dubai.jpg", alt: "Teeth whitening aftercare advice from Dubai dentist" } },
    { before: { src: "/images/Natural-looking professional teeth whitening.jpg", alt: "Natural-looking professional teeth whitening result Dubai" }, after: { src: "/images/RamaCare dental clinic for Zoom Teeth Whitening Treatment.jpg", alt: "RamaCare dental clinic for Zoom Teeth Whitening Treatment in Dubai" } },
  ];

  const current = galleryImages[index % galleryImages.length];
  const update = (clientX) => {
    const rect = ref.current.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(96, Math.max(4, pct)));
  };

  return (
    <div
      ref={ref}
      className="relative aspect-[16/9] w-full select-none overflow-hidden rounded-2xl shadow-lg border border-neutral-200/80"
      onMouseDown={(e) => { dragging.current = true; update(e.clientX); }}
      onMouseMove={(e) => dragging.current && update(e.clientX)}
      onMouseUp={() => (dragging.current = false)}
      onMouseLeave={() => (dragging.current = false)}
      onTouchStart={(e) => { dragging.current = true; update(e.touches[0].clientX); }}
      onTouchMove={(e) => dragging.current && update(e.touches[0].clientX)}
      onTouchEnd={() => (dragging.current = false)}
    >
      {/* AFTER */}
      <div className="absolute inset-0">
        <img
          src={current.after.src}
          alt={current.after.alt}
          className="h-full w-full object-cover"
        />
        <span className="absolute right-3 top-3 z-10 rounded px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white" style={{ backgroundColor: "rgba(0,0,0,0.65)" }}>After</span>
      </div>

      {/* BEFORE */}
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <img
          src={current.before.src}
          alt={current.before.alt}
          className="h-full w-full object-cover"
        />
        <span className="absolute left-3 top-3 z-10 rounded px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white" style={{ backgroundColor: "rgba(0,0,0,0.65)" }}>Before</span>
      </div>

      {/* HANDLE */}
      <div className="absolute top-0 h-full w-[2px] bg-white shadow-md" style={{ left: `${pos}%` }}>
        <div className="absolute left-1/2 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md">
          <ArrowLeftRight size={14} color={BRAND.darkTeal} />
        </div>
      </div>
    </div>
  );
}

/* tiny "surface vs deep" ring icon for the extrinsic/intrinsic panels */
function DepthRing({ highlight, dark }) {
  const dim = dark ? "rgba(255,255,255,0.18)" : `${BRAND.darkTeal}22`;
  return (
    <svg width="44" height="44" viewBox="0 0 44 44">
      <circle cx="22" cy="22" r="19" fill="none" stroke={highlight === "outer" ? BRAND.gold : dim} strokeWidth="4" />
      <circle cx="22" cy="22" r="10" fill={highlight === "inner" ? BRAND.gold : dim} />
    </svg>
  );
}

/* SECTION 9 — split "surface vs deep" panels, light card vs dark card */
function WhyTeethDiscolor() {
  return (
    <section id="why-teeth-discolor" className="scroll-mt-24 px-6 py-20 md:px-10 md:py-28" style={{ backgroundColor: "#FFFFFF", fontFamily: FONT_BODY }}>
      <div className="mx-auto max-w-6xl">
        <span className="text-[12.5px] font-semibold uppercase tracking-[0.16em]" style={{ color: BRAND.gold }}>Extrinsic vs Intrinsic</span>
        <h2 className="mt-3 max-w-4xl text-[2rem] leading-tight md:text-[2.5rem]" style={{ fontFamily: FONT_DISPLAY, fontWeight: 600, color: BRAND.darkTeal }}>{whyTeethDiscolor.h2}</h2>
        <p className="mt-5 max-w-4xl text-[16.5px] leading-[1.9] md:text-[17.5px] text-neutral-700">{whyTeethDiscolor.intro}</p>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-[28px] p-8 md:p-10 shadow-sm" style={{ backgroundColor: BRAND.cream }}>
            <div className="flex items-center gap-3">
              <DepthRing highlight="outer" />
              <div>
                <span className="text-[12px] font-semibold uppercase tracking-wide" style={{ color: BRAND.gold }}>Surface-Level</span>
                <h3 className="text-[19px] font-semibold" style={{ color: BRAND.darkTeal }}>{whyTeethDiscolor.extrinsic.title}</h3>
              </div>
            </div>
            <p className="mt-4 text-[15.5px] leading-relaxed text-neutral-600">{whyTeethDiscolor.extrinsic.intro}</p>
            <ul className="mt-4 space-y-2.5">
              {whyTeethDiscolor.extrinsic.items.map((it) => (
                <li key={it} className="flex items-center gap-2.5 text-[15px] md:text-[16px] text-neutral-700">
                  <span className="h-2 w-2 rounded-full" style={{ backgroundColor: BRAND.gold }} /> {it}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-[14px] italic text-neutral-500">{whyTeethDiscolor.extrinsic.note}</p>
          </div>

          <div className="rounded-[28px] p-8 md:p-10 text-white shadow-md" style={{ backgroundColor: BRAND.darkTeal }}>
            <div className="flex items-center gap-3">
              <DepthRing highlight="inner" dark />
              <div>
                <span className="text-[12px] font-semibold uppercase tracking-wide" style={{ color: BRAND.gold }}>Beneath the Enamel</span>
                <h3 className="text-[19px] font-semibold text-white">{whyTeethDiscolor.intrinsic.title}</h3>
              </div>
            </div>
            <p className="mt-4 text-[15.5px] leading-relaxed text-white/80">{whyTeethDiscolor.intrinsic.intro}</p>
            <ul className="mt-4 space-y-2.5">
              {whyTeethDiscolor.intrinsic.items.map((it) => (
                <li key={it} className="flex items-start gap-2.5 text-[15px] md:text-[16px] text-white/90">
                  <span className="mt-2 h-2 w-2 flex-none rounded-full" style={{ backgroundColor: BRAND.gold }} /> {it}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-[14px] italic text-white/60">{whyTeethDiscolor.intrinsic.note}</p>
          </div>
        </div>

        <p className="mx-auto mt-10 max-w-5xl text-[16px] leading-[1.9] md:text-[17px] text-neutral-700">{whyTeethDiscolor.closing}</p>
      </div>
    </section>
  );
}

/* SECTION 10 — horizontal film strip with hidden scrollbar & transparent arrow navigation */
function HowItWorks() {
  const stepsRef = useRef(null);
  const scrollSteps = (direction) => {
    if (stepsRef.current) {
      stepsRef.current.scrollBy({
        left: direction === "left" ? -280 : 280,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="how-it-works" className="scroll-mt-24 px-6 py-20 md:px-10 md:py-28" style={{ backgroundColor: BRAND.cream, fontFamily: FONT_BODY }}>
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <Film size={16} color={BRAND.gold} />
              <span className="text-[12px] font-semibold uppercase tracking-[0.16em]" style={{ color: BRAND.gold }}>The Appointment, Frame by Frame</span>
            </div>
            <h2 className="mt-3 max-w-2xl text-[1.9rem] leading-tight md:text-[2.3rem]" style={{ fontFamily: FONT_DISPLAY, fontWeight: 600, color: BRAND.darkTeal }}>{howItWorks.h2}</h2>
          </div>

          {/* Transparent Arrow Navigation Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => scrollSteps("left")}
              aria-label="Previous step"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300/80 bg-white/70 text-neutral-700 shadow-sm backdrop-blur transition-all hover:bg-white hover:text-[#1F5E4B] hover:shadow active:scale-95"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scrollSteps("right")}
              aria-label="Next step"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300/80 bg-white/70 text-neutral-700 shadow-sm backdrop-blur transition-all hover:bg-white hover:text-[#1F5E4B] hover:shadow active:scale-95"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <p className="mt-5 max-w-2xl text-[15.5px] leading-[1.9] text-neutral-700">{howItWorks.intro}</p>

        <div
          ref={stepsRef}
          className="mt-10 flex gap-5 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {howItWorks.steps.map((step, i) => (
            <div key={step.title} className="flex-none" style={{ scrollSnapAlign: "start", width: 250 }}>
              <div className="h-full overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:shadow-md" style={{ border: `1px solid ${BRAND.darkTeal}14` }}>
                <div className="flex justify-between px-3.5 py-2" style={{ backgroundColor: BRAND.darkTeal }}>
                  {Array.from({ length: 6 }).map((_, d) => (<span key={d} className="h-1.5 w-1.5 rounded-full bg-white/30" />))}
                </div>
                <div className="p-5">
                  <span className="text-[26px] font-semibold" style={{ fontFamily: FONT_DISPLAY, color: BRAND.gold }}>{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-2 text-[14.5px] font-semibold" style={{ color: BRAND.darkTeal }}>{step.title}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-neutral-600">{step.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 max-w-3xl text-[15px] leading-[1.9] text-neutral-700">{howItWorks.closing}</p>
      </div>
    </section>
  );
}

/* SECTION 11 — the Dr. Joy-style drag gallery, plus variables + polaroid-style closing quote */
function RealisticResults() {
  return (
    <section id="realistic-results" className="scroll-mt-24 px-6 py-20 md:px-10 md:py-28" style={{ backgroundColor: "#FFFFFF", fontFamily: FONT_BODY }}>
      <div className="mx-auto max-w-6xl">
        <span className="text-[12px] font-semibold uppercase tracking-[0.16em]" style={{ color: BRAND.gold }}>The Section Everyone Skips To</span>
        <h2 className="mt-3 max-w-3xl text-[1.9rem] leading-tight md:text-[2.3rem]" style={{ fontFamily: FONT_DISPLAY, fontWeight: 600, color: BRAND.darkTeal }}>{realisticResults.h2}</h2>
        <p className="mt-5 max-w-2xl text-[15.5px] leading-[1.9] text-neutral-700">{realisticResults.intro1}</p>
        <p className="mt-4 max-w-2xl text-[15.5px] leading-[1.9] text-neutral-700">{realisticResults.intro2}</p>

        <div className="mt-10 flex items-center gap-2">
          <Camera size={15} color={BRAND.gold} />
          <span className="text-[12px] font-semibold uppercase tracking-wide text-neutral-500">Drag each photo to compare</span>
        </div>
        <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {[0, 1, 2, 3].map((i) => <GallerySlider key={i} index={i} />)}
        </div>

        <p className="mt-14 max-w-2xl text-[15.5px] font-medium" style={{ color: BRAND.darkTeal }}>{realisticResults.variablesIntro}</p>
        <div className="mt-6 grid grid-cols-1 gap-x-10 gap-y-5 sm:grid-cols-2">
          {realisticResults.variables.map((v) => (
            <div key={v.title} className="flex gap-4">
              <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full text-[13px] font-semibold" style={{ backgroundColor: `${BRAND.gold}20`, color: "#9C7443" }}>
                {v.title.charAt(0)}
              </span>
              <div>
                <h4 className="text-[14.5px] font-semibold" style={{ color: BRAND.darkTeal }}>{v.title}</h4>
                <p className="mt-1 text-[13.5px] leading-relaxed text-neutral-600">{v.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-14 max-w-2xl rotate-[-1deg] rounded-lg bg-white p-6 shadow-xl" style={{ border: `1px solid ${BRAND.darkTeal}12` }}>
          <p className="text-[15px] italic leading-[1.85]" style={{ color: BRAND.darkTeal }}>{realisticResults.closing}</p>
          <div className="mt-4 h-2 w-16 rounded-full" style={{ backgroundColor: BRAND.gold }} />
        </div>
      </div>
    </section>
  );
}

function ComparingPhotos() {
  return (
    <section id="comparing-photos" className="scroll-mt-24 px-6 py-20 md:px-10 md:py-28" style={{ backgroundColor: BRAND.cream, fontFamily: FONT_BODY }}>
      <div className="mx-auto max-w-5xl">
        <span className="text-[12px] font-semibold uppercase tracking-[0.16em]" style={{ color: BRAND.gold }}>Reading Photos Critically</span>
        <h2 className="mt-3 max-w-3xl text-[1.9rem] leading-tight md:text-[2.3rem]" style={{ fontFamily: FONT_DISPLAY, fontWeight: 600, color: BRAND.darkTeal }}>
          {comparingPhotos.h2}
        </h2>
        <p className="mt-5 max-w-2xl text-[15.5px] leading-[1.9] text-neutral-700">{comparingPhotos.intro}</p>

        {/* CONTACT SHEET */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 rounded-[24px] p-2"
          style={{ backgroundColor: BRAND.darkTeal }}
        >
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
            {comparingPhotos.criteria.map((c, i) => (
              <div key={c} className="flex aspect-square flex-col items-center justify-center gap-2 rounded-xl bg-white/[0.04] p-3 text-center">
                <span className="flex h-7 w-7 items-center justify-center rounded-full" style={{ backgroundColor: `${BRAND.gold}22` }}>
                  <Check size={13} color={BRAND.gold} strokeWidth={2.5} />
                </span>
                <span className="text-[10.5px] font-medium leading-tight text-white/80">{c}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="mt-6 flex items-start gap-3 rounded-2xl border-l-4 bg-white p-5" style={{ borderColor: BRAND.gold }}>
          <Info size={16} className="mt-0.5 flex-none" color={BRAND.gold} />
          <p className="text-[14px] leading-relaxed text-neutral-600">{comparingPhotos.closing}</p>
        </div>
      </div>
    </section>
  );
}
function FactorsAffectingResults() {
  return (
    <section id="factors-affecting-results" className="scroll-mt-24 px-6 py-20 md:px-10 md:py-28" style={{ backgroundColor: "#FFFFFF", fontFamily: FONT_BODY }}>
      <div className="mx-auto max-w-4xl">
        <span className="text-[12px] font-semibold uppercase tracking-[0.16em]" style={{ color: BRAND.gold }}>Why Outcomes Differ</span>
        <h2 className="mt-3 text-[1.9rem] leading-tight md:text-[2.3rem]" style={{ fontFamily: FONT_DISPLAY, fontWeight: 600, color: BRAND.darkTeal }}>
          {factorsAffectingResults.h2}
        </h2>

        <div className="mt-12 overflow-hidden rounded-2xl border" style={{ borderColor: `${BRAND.darkTeal}14` }}>
          {factorsAffectingResults.rows.map((row, i) => (
            <motion.div
              key={row.factor}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: (i % 5) * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-start gap-5 px-6 py-5"
              style={{ backgroundColor: i % 2 === 0 ? BRAND.creamLight : "#FFFFFF", borderTop: i === 0 ? "none" : `1px solid ${BRAND.darkTeal}0d` }}
            >
              <span className="font-serif text-[13px] font-semibold" style={{ fontFamily: FONT_DISPLAY, color: BRAND.gold }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex flex-1 flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
                <span className="text-[14.5px] font-semibold" style={{ color: BRAND.darkTeal }}>{row.factor}</span>
                <span className="text-[13.5px] leading-relaxed text-neutral-600 sm:max-w-[60%] sm:text-right">{row.effect}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
function WhoIsSuitable() {
  return (
    <section id="who-is-suitable" className="scroll-mt-24 px-6 py-20 md:px-10 md:py-28" style={{ backgroundColor: BRAND.creamLight, fontFamily: FONT_BODY }}>
      <div className="mx-auto max-w-4xl text-center">
        <span className="text-[12px] font-semibold uppercase tracking-[0.16em]" style={{ color: BRAND.gold }}>Candidacy</span>
        <h2 className="mx-auto mt-3 max-w-2xl text-[1.9rem] leading-tight md:text-[2.3rem]" style={{ fontFamily: FONT_DISPLAY, fontWeight: 600, color: BRAND.darkTeal }}>
          {whoIsSuitable.h2}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-[15px] leading-[1.9] text-neutral-700">{whoIsSuitable.intro}</p>

        <div className="mx-auto mt-10 flex max-w-2xl flex-wrap justify-center gap-2.5">
          {whoIsSuitable.items.map((item) => (
            <span
              key={item}
              className="inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-[13.5px] font-medium"
              style={{ borderColor: `${BRAND.gold}55`, color: BRAND.darkTeal, backgroundColor: "#FFFFFF" }}
            >
              <Check size={13} color={BRAND.gold} strokeWidth={2.5} />
              {item}
            </span>
          ))}
        </div>
        <div className="mx-auto mt-8 max-w-2xl rounded-2xl p-6 text-left" style={{ backgroundColor: BRAND.darkTeal }}>
          <p className="text-[14px] leading-[1.85] text-white/80">{whoIsSuitable.closing}</p>
        </div>
      </div>
    </section>
  );
}
function WhenNotEnough() {
  return (
    <section id="when-not-enough" className="scroll-mt-24 px-6 py-20 md:px-10 md:py-28" style={{ backgroundColor: "#FFFFFF", fontFamily: FONT_BODY }}>
      <div className="mx-auto max-w-5xl">
        <span className="text-[12px] font-semibold uppercase tracking-[0.16em]" style={{ color: BRAND.gold }}>A Realistic Limit</span>
        <h2 className="mt-3 max-w-2xl text-[1.9rem] leading-tight md:text-[2.3rem]" style={{ fontFamily: FONT_DISPLAY, fontWeight: 600, color: BRAND.darkTeal }}>
          {whenNotEnough.h2}
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 overflow-hidden rounded-[24px]"
          style={{ backgroundColor: BRAND.darkTeal }}
        >
          <div className="px-7 pt-7 md:px-9"><span className="text-[11.5px] font-semibold uppercase tracking-[0.14em] text-white/50">{whenNotEnough.intro}</span></div>
          <div className="mt-4 divide-y" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
            {whenNotEnough.items.map((item) => (
              <div key={item} className="flex items-start gap-4 px-7 py-4 md:px-9" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
                <AlertTriangle size={15} className="mt-0.5 flex-none" color={BRAND.gold} strokeWidth={1.8} />
                <span className="text-[14px] leading-snug text-white/85">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="mt-8">
          <span className="text-[11.5px] font-semibold uppercase tracking-[0.14em]" style={{ color: BRAND.gold }}>Options Your Dentist Might Discuss</span>
          <div className="mt-4 flex flex-wrap gap-3">
            {whenNotEnough.alternatives.map((alt) => (
              <span key={alt} className="rounded-full border px-4 py-2 text-[13.5px] font-medium" style={{ borderColor: `${BRAND.darkTeal}22`, color: BRAND.darkTeal, backgroundColor: BRAND.cream }}>
                {alt}
              </span>
            ))}
          </div>
          <p className="mt-6 max-w-3xl text-[14.5px] leading-[1.9] text-neutral-600">{whenNotEnough.closing}</p>
        </div>
      </div>
    </section>
  );
}
function WhyExamMatters() {
  return (
    <section id="why-exam-matters" className="scroll-mt-24 px-6 py-20 md:px-10 md:py-28" style={{ backgroundColor: BRAND.cream, fontFamily: FONT_BODY }}>
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[12px] font-semibold uppercase tracking-[0.16em]" style={{ borderColor: `${BRAND.gold}66`, color: BRAND.gold }}>
            <ClipboardCheck size={15} color={BRAND.gold} /> Before Anything Cosmetic
          </div>
          <h2 className="mx-auto mt-4 max-w-3xl text-[2rem] leading-tight md:text-[2.6rem]" style={{ fontFamily: FONT_DISPLAY, fontWeight: 600, color: BRAND.darkTeal }}>
            {whyExamMatters.h2}
          </h2>
          <p className="mx-auto mt-5 max-w-4xl text-[16px] leading-[1.9] md:text-[17.5px] text-neutral-700">{whyExamMatters.intro}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyExamMatters.checks.map((c, i) => (
            <motion.div
              key={c}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-3.5 rounded-2xl border bg-white p-5 shadow-sm transition-all hover:shadow-md"
              style={{ borderColor: `${BRAND.darkTeal}18` }}
            >
              <span className="flex h-7 w-7 flex-none items-center justify-center rounded-lg border-2" style={{ borderColor: BRAND.gold, backgroundColor: `${BRAND.gold}18` }}>
                <Check size={14} color={BRAND.gold} strokeWidth={3} />
              </span>
              <span className="text-[15px] font-semibold" style={{ color: BRAND.darkTeal }}>{c}</span>
            </motion.div>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-4xl rounded-2xl p-6 text-center" style={{ backgroundColor: "#FFFFFF" }}>
          <p className="text-[15.5px] leading-[1.9] text-neutral-700">{whyExamMatters.closing}</p>
        </div>
      </div>
    </section>
  );
}
function AppointmentSteps() {
  return (
    <section id="appointment" className="scroll-mt-24 px-6 py-20 md:px-10 md:py-28" style={{ backgroundColor: "#FFFFFF", fontFamily: FONT_BODY }}>
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[12px] font-semibold uppercase tracking-[0.16em]" style={{ borderColor: `${BRAND.gold}66`, color: BRAND.gold }}>
            <TicketCheck size={15} color={BRAND.gold} /> Session Itinerary
          </div>
          <h2 className="mx-auto mt-4 max-w-3xl text-[2rem] leading-tight md:text-[2.6rem]" style={{ fontFamily: FONT_DISPLAY, fontWeight: 600, color: BRAND.darkTeal }}>
            {appointment.h2}
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
          {appointment.steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: (i % 4) * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex items-start gap-5 overflow-hidden rounded-2xl border bg-white p-6 shadow-sm transition-all hover:shadow-md"
              style={{ borderColor: `${BRAND.darkTeal}18` }}
            >
              <div
                className="flex h-12 w-12 flex-none items-center justify-center rounded-xl text-[16px] font-bold shadow-sm"
                style={{ backgroundColor: BRAND.darkTeal, color: BRAND.gold, fontFamily: FONT_DISPLAY }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="flex-1">
                <h3 className="text-[17px] font-semibold" style={{ color: BRAND.darkTeal }}>{step.title}</h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-neutral-600">{step.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
function DoesItHurtAndSideEffects() {
  return (
    <section className="scroll-mt-24 px-6 py-20 md:px-10 md:py-28" style={{ backgroundColor: BRAND.creamLight, fontFamily: FONT_BODY }}>
      <div className="mx-auto max-w-6xl">
        <div id="does-it-hurt" className="scroll-mt-24 grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">
          {/* SENSITIVITY GAUGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto w-full max-w-xs rounded-[24px] p-8 text-center"
            style={{ backgroundColor: BRAND.darkTeal }}
          >
            <div className="mx-auto flex items-center justify-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/50">
              <Gauge size={13} color={BRAND.gold} /> Sensitivity Range
            </div>
            <svg viewBox="0 0 200 110" className="mx-auto mt-5 w-full max-w-[220px]">
              <path d="M 15 100 A 85 85 0 0 1 185 100" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="14" strokeLinecap="round" />
              <path d="M 15 100 A 85 85 0 0 1 185 100" fill="none" stroke={BRAND.gold} strokeWidth="14" strokeLinecap="round" strokeDasharray="220" strokeDashoffset="70" opacity="0.85" />
              <motion.line
                x1="100" y1="100" x2="100" y2="30"
                stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round"
                style={{ transformOrigin: "100px 100px" }}
                initial={{ rotate: -70 }}
                whileInView={{ rotate: 15 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              />
              <circle cx="100" cy="100" r="6" fill={BRAND.gold} />
            </svg>
            <div className="mt-2 flex justify-between text-[10.5px] font-medium text-white/50">
              <span>Minimal</span>
              <span>Noticeable</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-[12px] font-semibold uppercase tracking-[0.16em]" style={{ color: BRAND.gold }}>Comfort</span>
            <h2 className="mt-3 text-[1.9rem] leading-tight md:text-[2.3rem]" style={{ fontFamily: FONT_DISPLAY, fontWeight: 600, color: BRAND.darkTeal }}>
              {doesItHurt.h2}
            </h2>
            <div className="mt-5 space-y-4">
              {doesItHurt.paragraphs.map((p, i) => (
                <p key={i} className="text-[15px] leading-[1.9] text-neutral-700">{p}</p>
              ))}
            </div>
          </motion.div>
        </div>

        {/* SIDE EFFECTS GRID */}
        <div id="side-effects" className="scroll-mt-24 mt-16 border-t pt-16" style={{ borderColor: `${BRAND.darkTeal}14` }}>
          <h3 className="text-[1.5rem] leading-tight" style={{ fontFamily: FONT_DISPLAY, fontWeight: 600, color: BRAND.darkTeal }}>
            {sideEffects.h2}
          </h3>
          <p className="mt-4 max-w-2xl text-[15px] leading-[1.9] text-neutral-700">{sideEffects.intro}</p>
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {sideEffects.items.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-xl border bg-white px-4 py-3.5" style={{ borderColor: `${BRAND.gold}33` }}>
                <AlertTriangle size={15} color={BRAND.gold} className="flex-none" strokeWidth={1.8} />
                <span className="text-[13.5px] font-medium text-neutral-700">{item}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 max-w-3xl text-[14px] leading-[1.9] text-neutral-600">{sideEffects.closing}</p>
        </div>
      </div>
    </section>
  );
}

function ResultsLast() {
  return (
    <section id="results-last" className="scroll-mt-24 px-6 py-20 md:px-10 md:py-28" style={{ backgroundColor: "#FFFFFF", fontFamily: FONT_BODY }}>
      <div className="mx-auto max-w-4xl">
        <span className="text-[12px] font-semibold uppercase tracking-[0.16em]" style={{ color: BRAND.gold }}>Longevity</span>
        <h2 className="mt-3 text-[1.9rem] leading-tight md:text-[2.3rem]" style={{ fontFamily: FONT_DISPLAY, fontWeight: 600, color: BRAND.darkTeal }}>
          {resultsLast.h2}
        </h2>
        <p className="mt-5 max-w-2xl text-[15.5px] leading-[1.9] text-neutral-700">{resultsLast.intro}</p>

        {/* FADING SHADE BAR */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0.9 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 h-8 w-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${BRAND.gold}, ${BRAND.gold}66, #F3E6CF)` }}
        />
        <div className="mt-2 flex justify-between text-[11.5px] font-medium text-neutral-500">
          <span className="flex items-center gap-1.5"><CalendarClock size={12} color={BRAND.gold} /> Just treated</span>
          <span>Months later, without maintenance</span>
        </div>

        <div className="mt-10 flex flex-wrap gap-2.5">
          {resultsLast.factors.map((f) => (
            <span key={f} className="rounded-full border px-4 py-2 text-[13px] font-medium" style={{ borderColor: `${BRAND.darkTeal}18`, color: BRAND.darkTeal, backgroundColor: BRAND.creamLight }}>
              {f}
            </span>
          ))}
        </div>

        <p className="mt-8 max-w-3xl text-[14.5px] leading-[1.9] text-neutral-600">{resultsLast.closing}</p>
      </div>
    </section>
  );
}
function Maintenance() {
  return (
    <section id="aftercare" className="scroll-mt-24 px-6 py-20 md:px-10 md:py-28" style={{ backgroundColor: BRAND.creamLight, fontFamily: FONT_BODY }}>
      <div className="mx-auto max-w-5xl">
        <span className="text-[12px] font-semibold uppercase tracking-[0.16em]" style={{ color: BRAND.gold }}>Keeping the Result</span>
        <h2 className="mt-3 max-w-2xl text-[1.9rem] leading-tight md:text-[2.3rem]" style={{ fontFamily: FONT_DISPLAY, fontWeight: 600, color: BRAND.darkTeal }}>
          {maintenance.h2}
        </h2>
        <p className="mt-5 max-w-2xl text-[15.5px] leading-[1.9] text-neutral-700">{maintenance.intro}</p>

        {/* PEARL STRING */}
        <div className="mt-16 -mx-6 overflow-x-auto px-6 pb-4 md:mx-0 md:overflow-visible md:px-0">
          <div className="relative min-w-max md:min-w-0">
            <div className="absolute left-0 right-0 top-7 hidden h-px md:block" style={{ backgroundColor: `${BRAND.gold}55` }} />
            <div className="flex gap-8 md:grid md:grid-cols-4 md:gap-x-6 md:gap-y-14">
              {maintenance.habits.map((habit, i) => (
                <motion.div
                  key={habit}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, delay: (i % 4) * 0.07, ease: [0.22, 1, 0.36, 1] }}
                  className="relative flex w-[150px] flex-none flex-col items-center text-center md:w-auto"
                >
                  <span
                    className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-2 shadow-sm"
                    style={{ borderColor: BRAND.gold, background: `radial-gradient(circle at 35% 30%, #FFFDF8, ${BRAND.gold}33)` }}
                  >
                    <span className="text-[15px] font-semibold" style={{ fontFamily: FONT_DISPLAY, color: BRAND.darkTeal }}>{i + 1}</span>
                  </span>
                  <p className="mt-3 text-[12.5px] font-medium leading-snug text-neutral-700">{habit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <p className="mx-auto mt-12 max-w-3xl text-[14.5px] leading-[1.9] text-neutral-600">{maintenance.closing}</p>
      </div>
    </section>
  );
}
function CostInDubai() {
  return (
    <section id="cost" className="scroll-mt-24 px-6 py-20 md:px-10 md:py-28" style={{ backgroundColor: "#FFFFFF", fontFamily: FONT_BODY }}>
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} className="lg:col-span-7">
            <span className="text-[12.5px] font-semibold uppercase tracking-[0.16em]" style={{ color: BRAND.gold }}>Investment &amp; Pricing</span>
            <h2 className="mt-3 text-[2rem] leading-tight md:text-[2.6rem]" style={{ fontFamily: FONT_DISPLAY, fontWeight: 600, color: BRAND.darkTeal }}>
              {costInDubai.h2}
            </h2>
            <p className="mt-6 text-[16px] leading-[1.9] md:text-[17px] text-neutral-700">{costInDubai.intro}</p>
            <p className="mt-5 text-[15.5px] leading-[1.9] text-neutral-600">{costInDubai.closing}</p>

            <a
              href="https://wa.me/971566597878?text=Hello%20RamaCare,%20I'd%20like%20to%20inquire%20about%20Zoom%20Teeth%20Whitening%20cost."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full px-8 py-4 text-[15px] font-semibold text-white shadow-md transition-transform hover:-translate-y-0.5"
              style={{ backgroundColor: BRAND.darkTeal }}
            >
              Get Custom Quotation <Send size={16} />
            </a>
          </motion.div>

          {/* RECEIPT CARD */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-lg lg:col-span-5 rounded-[28px] border-2 bg-white p-8 shadow-xl"
            style={{ borderColor: `${BRAND.gold}66` }}
          >
            <div className="flex items-center gap-3 border-b pb-5" style={{ borderColor: `${BRAND.darkTeal}14` }}>
              <Receipt size={22} color={BRAND.gold} />
              <div>
                <span className="text-[11px] font-bold uppercase tracking-[0.14em]" style={{ color: BRAND.gold }}>Pricing Transparency</span>
                <h3 className="text-[18px] font-bold" style={{ color: BRAND.darkTeal }}>What Determines Cost</h3>
              </div>
            </div>
            <div className="mt-6 space-y-4">
              {costInDubai.lineItems.map((item, i) => (
                <div key={item} className="flex items-start justify-between gap-4 text-[14.5px] md:text-[15px]">
                  <span className="font-medium text-neutral-700">{item}</span>
                  <span className="flex-none font-bold text-[#9C7443]" style={{ fontFamily: FONT_DISPLAY }}>{String(i + 1).padStart(2, "0")}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-xl p-4 text-center" style={{ backgroundColor: BRAND.cream }}>
              <span className="text-[12.5px] font-semibold uppercase tracking-[0.12em]" style={{ color: BRAND.darkTeal }}>
                Custom Quote Provided After Assessment
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
function ProVsAtHome() {
  const [mode, setMode] = useState("professional"); // "professional" | "atHome"
  const active = mode === "professional" ? proVsAtHome.professional : proVsAtHome.atHome;

  return (
    <section id="professional-vs-home" className="scroll-mt-24 px-6 py-20 md:px-10 md:py-28" style={{ backgroundColor: BRAND.cream, fontFamily: FONT_BODY }}>
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <span className="text-[12px] font-semibold uppercase tracking-[0.16em]" style={{ color: BRAND.gold }}>Choosing Your Route</span>
          <h2 className="mx-auto mt-3 max-w-xl text-[1.9rem] leading-tight md:text-[2.3rem]" style={{ fontFamily: FONT_DISPLAY, fontWeight: 600, color: BRAND.darkTeal }}>
            {proVsAtHome.h2}
          </h2>
        </div>

        {/* ROCKER SWITCH */}
        <div className="mx-auto mt-10 flex w-full max-w-xs items-center rounded-full p-1.5" style={{ backgroundColor: BRAND.darkTeal }}>
          {["professional", "atHome"].map((key) => {
            const isActive = mode === key;
            const label = key === "professional" ? "Professional" : "At-Home";
            return (
              <button
                key={key}
                type="button"
                onClick={() => setMode(key)}
                className="relative flex-1 rounded-full px-4 py-2.5 text-[12.5px] font-semibold transition-colors"
                style={{ color: isActive ? BRAND.darkTeal : "rgba(255,255,255,0.6)" }}
              >
                {isActive && (
                  <motion.span
                    layoutId="pro-athome-pill"
                    className="absolute inset-0 rounded-full"
                    style={{ backgroundColor: BRAND.gold }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  />
                )}
                <span className="relative">{label}</span>
              </button>
            );
          })}
        </div>

        {/* CARD */}
        <motion.div
          key={mode}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 overflow-hidden rounded-[24px] border bg-white"
          style={{ borderColor: `${BRAND.darkTeal}14` }}
        >
          <div className="px-7 py-4" style={{ backgroundColor: BRAND.darkTeal }}>
            <span className="text-[13px] font-semibold text-white">{active.label}</span>
          </div>
          <div className="divide-y" style={{ borderColor: `${BRAND.darkTeal}0d` }}>
            {active.rows.map((row) => (
              <div key={row.label} className="flex items-center justify-between gap-4 px-7 py-4">
                <span className="text-[12px] font-semibold uppercase tracking-[0.06em]" style={{ color: BRAND.gold }}>{row.label}</span>
                <span className="text-right text-[13.5px] text-neutral-700">{row.value}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-[14.5px] leading-[1.9] text-neutral-600">{proVsAtHome.closing}</p>
      </div>
    </section>
  );
}

function RestorationsCompatibility() {
  const row = ["natural", "natural", "restoration", "natural", "natural", "restoration", "natural"];

  return (
    <section id="restorations" className="scroll-mt-24 px-6 py-20 md:px-10 md:py-28" style={{ backgroundColor: BRAND.darkTeal, fontFamily: FONT_BODY }}>
      <div className="mx-auto max-w-4xl">
        <span className="text-[12px] font-semibold uppercase tracking-[0.16em]" style={{ color: BRAND.gold }}>A Common Mix-Up</span>
        <h2 className="mt-3 max-w-2xl text-[1.9rem] leading-tight md:text-[2.3rem]" style={{ fontFamily: FONT_DISPLAY, fontWeight: 600, color: "#FFFFFF" }}>
          {restorationsCompatibility.h2}
        </h2>
        <p className="mt-5 max-w-2xl text-[15px] leading-[1.9] text-white/70">{restorationsCompatibility.intro}</p>

        {/* SHADE MISMATCH STRIP */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 rounded-[24px] bg-white/[0.04] p-8"
        >
          <div className="flex items-end justify-center gap-2.5">
            {row.map((type, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <motion.div
                  className="h-12 w-8 rounded-t-full sm:h-16 sm:w-10"
                  initial={{ backgroundColor: "#8a6642" }}
                  whileInView={{ backgroundColor: type === "natural" ? "#fdf7ec" : "#8a6642" }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 1, delay: 0.2 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                />
                <span className="text-[9px] font-medium uppercase tracking-[0.06em]" style={{ color: type === "natural" ? BRAND.gold : "rgba(255,255,255,0.4)" }}>
                  {type === "natural" ? "Natural" : "Crown"}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-6 flex justify-center gap-6 text-[11px] text-white/50">
            <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full" style={{ backgroundColor: "#fdf7ec" }} /> Whitens</span>
            <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full" style={{ backgroundColor: "#8a6642" }} /> Stays the same</span>
          </div>
        </motion.div>

        <p className="mx-auto mt-10 max-w-3xl text-[14.5px] leading-[1.9] text-white/70">{restorationsCompatibility.closing}</p>
      </div>
    </section>
  );
}

function GoodResultSpectrum() {
  return (
    <section id="good-result" className="scroll-mt-24 px-6 py-20 md:px-10 md:py-28" style={{ backgroundColor: "#FFFFFF", fontFamily: FONT_BODY }}>
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <span className="text-[12.5px] font-semibold uppercase tracking-[0.16em]" style={{ color: BRAND.gold }}>Redefining Success</span>
          <h2 className="mx-auto mt-3 max-w-3xl text-[2rem] leading-tight md:text-[2.6rem]" style={{ fontFamily: FONT_DISPLAY, fontWeight: 600, color: BRAND.darkTeal }}>
            {goodResult.h2}
          </h2>
          <p className="mx-auto mt-5 max-w-4xl text-[16px] leading-[1.9] md:text-[17.5px] text-neutral-700">{goodResult.intro}</p>
        </div>

        {/* SPECTRUM BAR WITH TARGET ZONE */}
        <div className="mx-auto mt-14 max-w-4xl rounded-2xl border bg-white p-6 shadow-sm" style={{ borderColor: `${BRAND.darkTeal}18` }}>
          <div className="flex items-center justify-between text-[13px] font-semibold mb-3 text-neutral-600">
            <span>Artificial, flat white</span>
            <span className="rounded-full px-3 py-1 text-[12px] uppercase tracking-wider text-white" style={{ backgroundColor: BRAND.darkTeal }}>
              The Target Zone
            </span>
            <span>Natural, translucent</span>
          </div>
          <div className="relative h-4 w-full rounded-full" style={{ background: `linear-gradient(90deg, #FFFFFF 0%, ${BRAND.gold}66 45%, ${BRAND.gold}22 55%, #F3E6CF 100%)` }}>
            <div
              className="absolute top-1/2 h-8 w-[22%] -translate-y-1/2 rounded-full border-2 shadow-md"
              style={{ left: "39%", borderColor: BRAND.darkTeal, backgroundColor: `${BRAND.gold}33` }}
            />
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {goodResult.traits.map((t) => (
            <div key={t} className="flex items-center gap-3.5 rounded-2xl border bg-white p-5 shadow-sm transition-all hover:shadow-md" style={{ borderColor: `${BRAND.darkTeal}18` }}>
              <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full" style={{ backgroundColor: `${BRAND.gold}22` }}>
                <Check size={15} color={BRAND.gold} strokeWidth={2.5} />
              </span>
              <span className="text-[15px] font-medium leading-snug text-neutral-800">{t}</span>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-4xl rounded-2xl p-6 text-center" style={{ backgroundColor: BRAND.cream }}>
          <p className="text-[15.5px] leading-[1.9] text-neutral-700">{goodResult.closing}</p>
        </div>
      </div>
    </section>
  );
}

function BenefitsAndLimits() {
  return (
    <section id="benefits" className="scroll-mt-24 px-6 py-20 md:px-10 md:py-28" style={{ backgroundColor: BRAND.creamLight, fontFamily: FONT_BODY }}>
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <span className="text-[12.5px] font-semibold uppercase tracking-[0.16em]" style={{ color: BRAND.gold }}>Weighing It Up Honestly</span>
          <h2 className="mx-auto mt-3 max-w-3xl text-[2rem] leading-tight md:text-[2.6rem]" style={{ fontFamily: FONT_DISPLAY, fontWeight: 600, color: BRAND.darkTeal }}>
            {benefitsAndLimits.h2}
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* BENEFITS CARD */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
            className="rounded-[28px] border bg-white p-8 md:p-10 shadow-sm"
            style={{ borderColor: `${BRAND.gold}44` }}
          >
            <div className="flex items-center gap-3 border-b pb-5" style={{ borderColor: `${BRAND.darkTeal}14` }}>
              <span className="flex h-10 w-10 items-center justify-center rounded-full" style={{ backgroundColor: `${BRAND.gold}25` }}>
                <ThumbsUp size={20} color={BRAND.gold} />
              </span>
              <h3 className="text-[18px] font-bold" style={{ color: BRAND.darkTeal }}>{benefitsAndLimits.benefitsIntro}</h3>
            </div>
            <div className="mt-6 space-y-4">
              {benefitsAndLimits.benefits.map((b) => (
                <div key={b} className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 flex-none items-center justify-center rounded-full" style={{ backgroundColor: `${BRAND.gold}33` }}>
                    <Check size={13} color={BRAND.darkTeal} strokeWidth={2.5} />
                  </span>
                  <span className="text-[15.5px] leading-relaxed text-neutral-700">{b}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* LIMITATIONS CARD */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="rounded-[28px] p-8 md:p-10 text-white shadow-md"
            style={{ backgroundColor: BRAND.darkTeal }}
          >
            <div className="flex items-center gap-3 border-b pb-5" style={{ borderColor: "rgba(255,255,255,0.14)" }}>
              <span className="flex h-10 w-10 items-center justify-center rounded-full" style={{ backgroundColor: "rgba(255,255,255,0.12)" }}>
                <ThumbsDown size={20} color={BRAND.gold} />
              </span>
              <h3 className="text-[18px] font-bold text-white">{benefitsAndLimits.limitsIntro}</h3>
            </div>
            <div className="mt-6 space-y-4">
              {benefitsAndLimits.limits.map((l) => (
                <div key={l} className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 flex-none items-center justify-center rounded-full" style={{ backgroundColor: "rgba(255,255,255,0.15)" }}>
                    <X size={13} color="#FFFFFF" strokeWidth={2.5} />
                  </span>
                  <span className="text-[15.5px] leading-relaxed text-white/90">{l}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mx-auto mt-12 max-w-4xl rounded-2xl p-6 text-center" style={{ backgroundColor: BRAND.cream }}>
          <p className="text-[15.5px] leading-[1.9] text-neutral-700">{benefitsAndLimits.closing}</p>
        </div>
      </div>
    </section>
  );
}

function WhyRamaCare() {
  return (
    <section id="why-ramacare" className="scroll-mt-24 px-6 py-20 md:px-10 md:py-28" style={{ backgroundColor: "#FFFFFF", fontFamily: FONT_BODY }}>
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <span className="text-[12px] font-semibold uppercase tracking-[0.16em]" style={{ color: BRAND.gold }}>Credentials</span>
          <h2 className="mx-auto mt-3 max-w-2xl text-[1.9rem] leading-tight md:text-[2.3rem]" style={{ fontFamily: FONT_DISPLAY, fontWeight: 600, color: BRAND.darkTeal }}>
            {whyRamaCare.h2}
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-5">
          {whyRamaCare.pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-center text-center"
              >
                <span
                  className="flex h-20 w-20 items-center justify-center rounded-full border-2"
                  style={{ borderColor: BRAND.gold, background: `radial-gradient(circle at 35% 30%, ${BRAND.creamLight}, ${BRAND.gold}22)` }}
                >
                  <Icon size={24} color={BRAND.darkTeal} strokeWidth={1.6} />
                </span>
                <h3 className="mt-4 text-[13.5px] font-semibold" style={{ color: BRAND.darkTeal }}>{p.title}</h3>
                <p className="mt-2 text-[12px] leading-relaxed text-neutral-600">{p.body}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function PatientJourney() {
  const n = patientJourney.steps.length;

  return (
    <section id="patient-journey" className="scroll-mt-24 px-6 py-20 md:px-10 md:py-28" style={{ backgroundColor: BRAND.cream, fontFamily: FONT_BODY }}>
      <div className="mx-auto max-w-3xl">
        <div className="flex items-center gap-2">
          <Route size={16} color={BRAND.gold} />
          <span className="text-[12px] font-semibold uppercase tracking-[0.16em]" style={{ color: BRAND.gold }}>The Route</span>
        </div>
        <h2 className="mt-3 text-[1.9rem] leading-tight md:text-[2.3rem]" style={{ fontFamily: FONT_DISPLAY, fontWeight: 600, color: BRAND.darkTeal }}>
          {patientJourney.h2}
        </h2>

        <div className="relative mt-14">
          <div
            className="absolute left-5 top-0 bottom-0 w-[3px] rounded-full sm:left-1/2 sm:-translate-x-1/2"
            style={{ backgroundColor: `${BRAND.gold}44` }}
          />
          <div className="space-y-8">
            {patientJourney.steps.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: isLeft ? -12 : 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, delay: (i % 5) * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  className={`relative flex items-center gap-4 pl-14 sm:w-1/2 sm:pl-0 ${isLeft ? "sm:pr-10" : "sm:ml-auto sm:flex-row-reverse sm:pl-10 sm:text-right"}`}
                >
                  <span
                    className="absolute left-2.5 top-1/2 z-10 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full border-2 sm:static sm:translate-y-0"
                    style={{ borderColor: BRAND.gold, backgroundColor: i === 0 || i === n - 1 ? BRAND.gold : "#FFFFFF" }}
                  >
                    <Milestone size={11} color={i === 0 || i === n - 1 ? "#FFFFFF" : BRAND.gold} />
                  </span>
                  <div className="rounded-xl border bg-white px-5 py-3.5 shadow-sm" style={{ borderColor: `${BRAND.darkTeal}14` }}>
                    <span className="text-[15px] font-semibold" style={{ color: BRAND.darkTeal }}>{step}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function FlipCard({ q, a }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <button
      type="button"
      onClick={() => setFlipped((f) => !f)}
      className="relative min-h-[190px] w-full text-left [perspective:1200px]"
      aria-expanded={flipped}
    >
      <motion.div
        className="relative h-full w-full [transform-style:preserve-3d]"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* FRONT */}
        <div
          className="absolute inset-0 flex flex-col justify-between rounded-2xl border p-6 shadow-sm transition-all hover:shadow-md [backface-visibility:hidden]"
          style={{ borderColor: `${BRAND.gold}44`, backgroundColor: "#FFFFFF" }}
        >
          <p className="text-[15px] md:text-[16px] font-semibold leading-snug" style={{ color: BRAND.darkTeal }}>{q}</p>
          <span className="text-[12px] font-bold uppercase tracking-wider" style={{ color: BRAND.gold }}>Tap to reveal answer →</span>
        </div>
        {/* BACK */}
        <div
          className="absolute inset-0 flex items-center rounded-2xl p-6 shadow-md [backface-visibility:hidden] [transform:rotateY(180deg)]"
          style={{ backgroundColor: BRAND.darkTeal }}
        >
          <p className="text-[14px] md:text-[15px] leading-relaxed text-white/90">{a}</p>
        </div>
      </motion.div>
    </button>
  );
}

function FAQs() {
  return (
    <section id="faqs" className="scroll-mt-24 px-6 py-20 md:px-10 md:py-28" style={{ backgroundColor: "#FFFFFF", fontFamily: FONT_BODY }}>
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <span className="text-[12.5px] font-semibold uppercase tracking-[0.16em]" style={{ color: BRAND.gold }}>FAQs</span>
          <h2 className="mx-auto mt-3 max-w-3xl text-[2rem] leading-tight md:text-[2.5rem]" style={{ fontFamily: FONT_DISPLAY, fontWeight: 600, color: BRAND.darkTeal }}>
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-[14px] text-neutral-500">Tap any card to flip it over</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {faqs.map((faq) => (
            <FlipCard key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
}

const internalLinks = [
  { text: "Dental Clinic Dubai", href: "/services/dental-dubai", desc: "If your teeth or gums need attention before whitening" },
  { text: "Dentist Dubai", href: "/services/dental-dubai", desc: "Meet the wider team" },
  { text: "Dental Tooth Filling Dubai", href: "/services/dental-tooth-filling-dubai", desc: "If your assessment uncovers a cavity" },
  { text: "Dental Cleaning Dubai", href: "/services/teeth-scaling-polishing-dubai/", desc: "Maintaining results starts with good hygiene" },
  { text: "Dental Veneers Dubai", href: "/services/dental-veneers-dubai", desc: "If whitening alone won't meet your goals" },
  { text: "Dental Crowns Dubai", href: "/services/dental-crown-bridges-dubai", desc: "For mismatched or damaged restorations" },
  { text: "Root Canal Treatment Dubai", href: "/services/root-canal-treatment-dubai", desc: "If discoloration is linked to a root-treated tooth" },
  { text: "Hollywood Smile Dubai", href: "/services/hollywood-smile-treatment-dubai", desc: "For a broader cosmetic change than whitening alone" },
];

function InternalLinks() {
  return (
    <section className="px-6 py-16 md:px-10" style={{ backgroundColor: BRAND.creamLight, fontFamily: FONT_BODY }}>
      <div className="mx-auto max-w-6xl">
        <span className="text-[11.5px] font-semibold uppercase tracking-[0.14em]" style={{ color: BRAND.gold }}>Related Reading</span>
        <div className="mt-5 flex flex-wrap gap-2.5">
          {internalLinks.map((l) => (
            <Link
              key={l.text}
              href={l.href}
              className="group inline-flex items-center gap-2 rounded-full border border-[#1F5E4B]/20 bg-white px-4 py-2 text-[13px] font-medium text-[#1F5E4B] transition-all hover:border-[#1F5E4B] hover:bg-[#1F5E4B]/10 hover:shadow-sm"
              title={l.desc}
            >
              <span>{l.text}</span>
              <ArrowRight size={12} color={BRAND.gold} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  const handleWhatsApp = () => {
    window.open("https://wa.me/971566597878?text=Hello%20RamaCare,%20I'd%20like%20to%20book%20a%20Zoom%20Teeth%20Whitening%20consultation.", "_blank");
  };

  return (
    <section id="book-consultation" className="scroll-mt-24 px-6 py-24 md:px-10 md:py-32" style={{ backgroundColor: BRAND.darkTeal, fontFamily: FONT_BODY }}>
      <div className="mx-auto max-w-3xl text-center">
        {/* STRAP */}
        <div className="mx-auto h-16 w-1 rounded-full" style={{ backgroundColor: `${BRAND.gold}66` }} />

        {/* HANGING PASS */}
        <motion.div
          initial={{ opacity: 0, y: -14, rotate: -2 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative -mt-1 rounded-[24px] bg-white p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
          <span className="absolute -top-3 left-1/2 h-6 w-6 -translate-x-1/2 rounded-full border-4" style={{ backgroundColor: BRAND.darkTeal, borderColor: BRAND.gold }} />
          <span className="text-[12px] font-bold uppercase tracking-[0.18em]" style={{ color: BRAND.gold }}>{finalCta.eyebrow}</span>
          <p className="mt-4 text-[16px] leading-[1.85] md:text-[17.5px] text-neutral-700">{finalCta.body}</p>
          <p className="mt-4 text-[14.5px] leading-relaxed md:text-[15.5px] text-neutral-500">{finalCta.sub}</p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+97142862006"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-[14.5px] font-semibold text-white shadow-md transition-transform hover:-translate-y-0.5"
              style={{ backgroundColor: BRAND.darkTeal }}>
              <Phone size={16} /> Call the Clinic
            </a>
            <button
              onClick={handleWhatsApp}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border-2 px-8 py-4 text-[14.5px] font-semibold transition-all hover:bg-neutral-50"
              style={{ borderColor: BRAND.gold, color: BRAND.darkTeal }}
            >
              <Send size={16} color={BRAND.gold} /> WhatsApp Us
            </button>
          </div>
        </motion.div>

        <p className="mx-auto mt-12 max-w-2xl text-[14.5px] leading-[1.9] md:text-[15.5px] text-white/70">{finalCta.conclusion}</p>
      </div>
    </section>
  );
}

export default function ZoomTeethWhiteningBeforeAfter() {
  const faqSchemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((f) => ({
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
    "url": "https://ramacarepolyclinic.ae/services/zoom-teeth-whitening-treatment-dubai/",
    "telephone": "+971-4-286-2006",
    "priceRange": "$$",
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
    "name": meta.title,
    "url": "https://ramacarepolyclinic.ae/services/zoom-teeth-whitening-treatment-dubai",
    "description": meta.description,
    "medicalAudience": {
      "@type": "Patient"
    },
    "about": {
      "@type": "MedicalProcedure",
      "name": "Zoom Teeth Whitening Treatment"
    },
    "publisher": {
      "@type": "MedicalOrganization",
      "name": "RamaCare Polyclinic"
    }
  };

  const procedureSchemaData = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Zoom Teeth Whitening Treatment",
    "alternateName": "Professional In-Office Teeth Whitening",
    "procedureType": "https://schema.org/NoninvasiveProcedure",
    "bodyLocation": "Teeth",
    "howPerformed": "Professional in-office whitening gel application under dental supervision to lighten natural tooth enamel.",
    "preparation": "Dental assessment and shade evaluation before whitening treatment.",
    "followup": "Post-treatment shade assessment and oral hygiene maintenance."
  };

  const breadcrumbSchemaData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ramacarepolyclinic.ae/" },
      { "@type": "ListItem", "position": 2, "name": "Cosmetic Dentistry", "item": "https://ramacarepolyclinic.ae/services/dental-dubai" },
      { "@type": "ListItem", "position": 3, "name": "Zoom Teeth Whitening Treatment in Dubai", "item": "https://ramacarepolyclinic.ae/services/zoom-teeth-whitening-treatment-dubai" },
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
        <link rel="canonical" href="https://ramacarepolyclinic.ae/services/zoom-teeth-whitening-treatment-dubai" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap" rel="stylesheet" />
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
        <QuickAnswer />
        <TableOfContents />
        <WhatIsZoomWhitening />
        <WhyTeethDiscolor />
        <HowItWorks />
        <RealisticResults />
        <ComparingPhotos />
        <FactorsAffectingResults />
        <WhoIsSuitable />
        <WhenNotEnough />
        <WhyExamMatters />
        <AppointmentSteps />
        <DoesItHurtAndSideEffects />
        <ResultsLast />
        <Maintenance />
        <CostInDubai />
        <ProVsAtHome />
        <RestorationsCompatibility />
        <GoodResultSpectrum />
        <BenefitsAndLimits />
        <WhyRamaCare />
        <PatientJourney />
        <ContentReviewBadge doctorName="Dr. Hirbod Gilandoust" pageSlug="zoom-teeth-whitening-treatment-dubai" />
        <FAQs />
        <InternalLinks />
        <FinalCta />
      </main>
    </Layout>
  );
}