import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import Layout from "../../../components/Layout";
import { motion, AnimatePresence } from "framer-motion";
import {
  Activity, ArrowRight, Bug, Candy, CheckCircle2, ChevronDown, Circle, Droplets, History, ImageIcon,
  ListOrdered, MapPin, ScanLine, ShieldOff, Sparkles, UtensilsCrossed, Crown, AlertOctagon, ArrowUpRight,
  AlertTriangle, ClipboardList, Eraser, Layers, MessageCircle, Search, Smile, Syringe, Wand2, Gem,
  CircleDot, FlaskConical, Clock, Waves, BadgeCheck, PhoneCall, ShieldAlert, Sun, CalendarClock, Repeat2,
  Info, Wallet, Lock, ShieldCheck, Building2, MessageSquare, Network, HelpCircle, Plus, Minus, Send,
  Navigation, Wind, ChevronLeft, ChevronRight, X, Compass
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  CONTENT — verbatim, kept as constants at the top of the file        */
/* ------------------------------------------------------------------ */
const meta = {
  title: "Dental Tooth Filling in Dubai | RamaCare Polyclinic",
  description:
    "Get Dental Tooth Filling in Dubai at RamaCare Polyclinic. Professional cavity assessment, tooth-colored fillings and restorative care. Book a consultation.",
  url: "/dental-tooth-filling-dubai",
};

/* ------------------------------------------------------------------ */
/*  IMAGE ASSETS & RECOMMENDATIONS MAPPING                             */
/* ------------------------------------------------------------------ */
const IMAGES = {
  hero: {
    src: "/images/Dental Tooth Filling in Dubai consultation.jpg",
    alt: "Dental Tooth Filling in Dubai consultation at RamaCare Polyclinic",
  },
  cavityIllustration: {
    src: "/images/tooth decay and dental cavity anatomy illustration.jpg",
    alt: "tooth decay and dental cavity anatomy illustration",
  },
  examination: {
    src: "/images/dentist examining a cavity before tooth filling.jpg",
    alt: "dentist examining a cavity before tooth filling in Dubai",
  },
  beforeAfterBefore: {
    src: "/images/tooth filling before.jpg",
    alt: "tooth filling before and after dental restoration",
  },
  beforeAfterAfter: {
    src: "/images/tooth filling after.jpg",
    alt: "tooth filling before and after dental restoration",
  },
};

const hero = {
  h1: "Dental Tooth Filling in Dubai for Cavities & Tooth Decay",
  intro: [
    "If a toothache or a small dark spot on your tooth has been on your mind, you're not alone — cavities are one of the most common reasons people visit a dentist. Tooth decay develops gradually, starting as a weak spot in the enamel and, if left untreated, spreading deeper into the tooth. A dental filling is the treatment most patients think of first, and for good reason: when caught early, it's often a straightforward way to remove the decayed portion of a tooth and restore it to a functional, comfortable state. This guide on Dental Tooth Filling in Dubai explains how decay develops, what actually happens during a filling appointment, and when a filling may not be the right treatment at all.",
    "It's worth saying clearly at the outset: not every cavity can be treated with a simple filling. Some decay is shallow and limited to the enamel; other cases have progressed closer to the nerve of the tooth, or the tooth has cracked in a way that changes what's structurally possible. That's why an in-person dental examination — often supported by an X-ray — comes before any treatment plan. At RamaCare Polyclinic in Jumeirah 1, Dubai, our dental team assesses the depth and extent of decay first, then discusses whether a filling, a crown, root canal treatment or another approach is the most appropriate option for that specific tooth.",
  ],
};

const whatIsAFilling = {
  h2: "What Is a Dental Tooth Filling?",
  body: "A dental filling is a restorative treatment used to repair a tooth that has been affected by decay, or in some cases by minor chips or wear. In general terms, the dentist removes the damaged or decayed tooth structure, cleans the area to remove bacteria and debris, and then restores the tooth using an appropriate filling material — commonly a tooth-colored composite resin. The restoration is then shaped to match the natural contour of the tooth, and the bite is checked so the tooth feels comfortable when chewing. The exact steps, materials used and number of visits can vary depending on the size, location and depth of the cavity, which is why a clinical assessment always comes first.",
};

const whyTeethNeedFillings = {
  h2: "Why Do Teeth Need Fillings?",
  intro:
    "Teeth need fillings when decay has broken down enough tooth structure that the area can no longer repair itself naturally. Tooth decay, also called dental caries, begins with plaque — a sticky film of bacteria that constantly forms on tooth surfaces. When these bacteria come into contact with sugars and starches from food, they produce acids. Repeated acid exposure gradually strips minerals from the enamel, the hard outer layer of the tooth, in a process called demineralization.",
  lead:
    "In its earliest stage, this process can sometimes be reversed with fluoride and good oral hygiene, before a cavity ever forms. But once the enamel surface actually breaks down, the damage becomes physical rather than just chemical — a true cavity has formed. If untreated, decay can progress from the enamel into the dentin, the softer layer beneath it, and eventually toward the dental pulp, where the nerve and blood supply of the tooth are located. This general progression looks like:",
  progression: [
    "Plaque",
    "Demineralization",
    "Enamel damage",
    "Dentin involvement",
    "Deeper decay",
    "Pulp involvement",
  ],
  closing:
    "The earlier decay is identified, the more likely it is that a relatively conservative filling can address it. This is one of the main reasons dentists encourage routine check-ups rather than waiting for pain — by the time a cavity causes noticeable discomfort, it has often already reached the dentin. That said, not every cavity that reaches deeper layers automatically requires root canal treatment; this depends entirely on the individual tooth and how the pulp responds, which your dentist evaluates during examination.",
};

const whatCausesToothDecay = {
  h2: "What Causes Tooth Decay?",
  intro: "Understanding what causes tooth decay helps explain why prevention matters as much as treatment.",
  causes: [
    {
      icon: Bug,
      title: "Plaque and bacteria.",
      body: "Your mouth naturally contains bacteria that form plaque on tooth surfaces within hours of brushing. These bacteria metabolize sugars from food and drink and release acids as a by-product, which is the direct mechanical cause of enamel breakdown.",
    },
    {
      icon: Candy,
      title: "Frequent sugar exposure.",
      body: "It isn't only the amount of sugar that matters, but how often the teeth are exposed to it. Sipping sugary drinks throughout the day, or frequent snacking, keeps the mouth in an acidic state for longer periods than eating the same amount of sugar in one sitting.",
    },
    {
      icon: ShieldOff,
      title: "Poor oral hygiene.",
      body: "Inconsistent brushing and flossing allow plaque to build up and mineralize into tartar, which is more difficult to remove and creates a more persistent environment for decay-causing bacteria.",
    },
    {
      icon: Droplets,
      title: "Dry mouth.",
      body: "Saliva helps neutralize acids and wash away food particles. Reduced saliva flow — from certain medications, medical conditions, or dehydration — can increase decay risk because that natural buffering effect is diminished.",
    },
    {
      icon: Sparkles,
      title: "Fluoride exposure.",
      body: "Fluoride helps strengthen enamel and can assist in remineralizing early, very superficial decay before a cavity fully forms. Limited fluoride exposure, whether through toothpaste, water, or professional treatments, can leave enamel more vulnerable.",
    },
    {
      icon: UtensilsCrossed,
      title: "Diet.",
      body: "Frequent consumption of sugary drinks, sticky snacks, and refined carbohydrates gives decay-causing bacteria more fuel, more often.",
    },
    {
      icon: History,
      title: "Previous dental work.",
      body: "Older fillings and restorations can develop tiny gaps or wear at their edges over time. Bacteria can collect along these margins, sometimes leading to recurrent decay around an existing restoration — one reason dentists check old fillings at routine visits.",
    },
  ],
};

const signsYouMayNeedFilling = {
  h2: "Signs You May Need a Filling",
  intro: "Cavities don't always announce themselves the same way in every patient. Common signs include:",
  signs: [
    "Sensitivity to cold foods or drinks",
    "Sensitivity to sweets",
    "A dull or sharp toothache, sometimes intermittent",
    "Food repeatedly getting stuck in the same spot",
    "A visible hole, pit, or dark spot on the tooth",
    "A rough or uneven feeling on the tooth surface when you run your tongue over it",
    "Pain or discomfort when chewing or biting down",
    "A cracked, chipped, or broken area of a tooth",
    "An unpleasant taste localized to one area of the mouth",
  ],
  closing:
    "It's also important to understand that a cavity can exist without causing any noticeable pain at all. A small cavity may not cause noticeable pain at first. Some patients only discover decay during a routine dental examination or X-ray, while others seek treatment after noticing sensitivity to cold, sweets, or pressure when chewing. This variability is exactly why regular dental check-ups matter, even when nothing feels wrong.",
};

const whenToSeeADentist = {
  h2: "When Should You See a Dentist?",
  intro: "You don't need to wait for a full-blown toothache before booking an appointment. Consider scheduling a dental visit if you notice:",
  signs: [
    "Persistent toothache lasting more than a day or two",
    "Increasing sensitivity to hot, cold, or sweet foods",
    "Pain specifically when biting down",
    "A visible cavity or dark spot on a tooth",
    "A broken, chipped, or cracked tooth",
    "Food repeatedly trapping in the same area between teeth",
    "Any dental symptom that lasts several days without improving",
  ],
  urgent:
    "If you experience significant facial swelling, fever, difficulty swallowing, difficulty breathing, or rapidly worsening pain, please seek urgent dental or medical assessment right away rather than waiting for a routine appointment.",
};

const howDentistsDiagnose = {
  h2: "How Dentists Diagnose a Cavity",
  intro: "Diagnosing a cavity properly is a clinical process, not a guess based on symptoms alone.",
  inputs: [
    {
      icon: ClipboardList,
      title: "Medical and dental history.",
      body: "Your dentist will ask about your symptoms, any previous dental treatment, sensitivity patterns, oral hygiene habits, diet, and relevant medical history that could affect treatment planning.",
    },
    {
      icon: Search,
      title: "Clinical examination.",
      body: "During the exam, the dentist checks tooth surfaces for visible decay or discoloration, reviews the condition of any existing restorations, evaluates gum health around the area, and assesses the overall structure of the tooth in question.",
    },
    {
      icon: ScanLine,
      title: "Dental X-rays.",
      body: "X-rays may be recommended when decay is suspected between teeth or deeper within a tooth, since these areas often aren't visible to the naked eye. Not every patient automatically needs an X-ray at every visit — your dentist will recommend one based on your specific clinical picture and history.",
    },
  ],
  closing:
    "Together, this information allows the dentist to determine the size, depth, and location of the decay, which directly shapes the treatment recommendation.",
};

const whatToExpectTreatment = {
  h2: "Dental Tooth Filling in Dubai: What to Expect During Treatment",
  intro:
    "Once decay has been diagnosed, here's a general outline of how a dental tooth filling in Dubai is typically carried out at RamaCare:",
  steps: [
    { icon: MessageCircle, title: "Consultation.", body: "The dentist reviews your concerns and takes a general look at the affected tooth or teeth." },
    { icon: ScanLine, title: "Diagnosis.", body: "Using the clinical exam and, when appropriate, X-rays, the dentist determines the location, size, and depth of the decay, along with the condition of the surrounding tooth structure." },
    { icon: Syringe, title: "Anesthesia.", body: "Local anesthesia may be used when appropriate to keep the area comfortably numb during treatment. Whether it's needed depends on the depth of the cavity and individual patient preference." },
    { icon: Eraser, title: "Removal of decay.", body: "The dentist carefully removes the decayed and damaged tooth structure, taking care to preserve as much healthy tooth as possible." },
    { icon: Droplets, title: "Cleaning and preparation.", body: "The prepared area is cleaned to remove bacteria and debris, creating a suitable surface for the restoration to bond to." },
    { icon: Layers, title: "Filling placement.", body: "The selected filling material is placed into the prepared cavity in layers, depending on the material used." },
    { icon: Wand2, title: "Shaping.", body: "The restoration is shaped and contoured so it blends naturally with the rest of the tooth." },
    { icon: Smile, title: "Bite check.", body: "Finally, the dentist checks how the restored tooth meets the opposing teeth, adjusting as needed so the bite feels even and comfortable." },
  ],
};
const typesOfFillings = {
  h2: "Types of Dental Fillings",
  intro:
    "There isn't a single filling material that's automatically the right choice for every patient. Selection depends on the tooth involved, the size of the restoration, remaining tooth structure, cosmetic considerations, bite forces, and your dentist's clinical judgment.",
  materials: [
    {
      icon: Layers,
      name: "Composite resin",
      trait: "Tooth-colored",
      note: "Blends naturally with surrounding tooth structure",
      swatch: "linear-gradient(135deg, #F3E2C4, #E8C9A0)",
    },
    {
      icon: CircleDot,
      name: "Amalgam",
      trait: "Metallic restoration",
      note: "Durable but less aesthetic, still used selectively",
      swatch: "linear-gradient(135deg, #B8BEC4, #8B9198)",
    },
    {
      icon: FlaskConical,
      name: "Glass ionomer",
      trait: "Tooth-colored material",
      note: "Used in specific situations, including some pediatric or lower-stress-bearing cases",
      swatch: "linear-gradient(135deg, #EFE6D8, #D8C7AE)",
    },
    {
      icon: Gem,
      name: "Ceramic / indirect",
      trait: "Lab-made restoration",
      note: "May be considered for larger areas of missing tooth structure",
      swatch: "linear-gradient(135deg, #F5F0E6, #D4A574)",
    },
  ],
  closing:
    "Your dentist will walk you through which option fits your particular tooth, rather than defaulting to one material for every case.",
};

const compositeWhiteFillings = {
  h2: "Composite / White Tooth Fillings",
  body: [
    "Composite resin is a tooth-colored material made of a mixture of plastic and fine glass particles. Many patients choose composite fillings for aesthetic reasons, since the material can be matched closely to the natural shade of the surrounding tooth, making the restoration far less noticeable than a metallic filling.",
    "Composite fillings can be appropriate for a wide range of cavities, particularly in visible areas like front teeth or the visible surfaces of back teeth. Proper placement matters a great deal with composite material — it needs to be applied in careful layers and bonded correctly to perform well over time. This isn't a claim that composite is always the superior option in every clinical situation; for some larger restorations or specific bite conditions, your dentist may discuss other materials or approaches instead.",
  ],
  shades: ["#FBF3E7", "#F5E6CF", "#EDD8B8", "#E3C79E", "#D4B085", "#C29A6E"],
  matchedIndex: 3,
};

const doesItHurt = {
  h2: "Does a Tooth Filling Hurt?",
  body: [
    "This is one of the most common questions patients ask, and the honest answer is that the experience varies from person to person and from tooth to tooth. Local anesthesia is commonly used to numb the area being treated, so most patients don't feel sharp pain during the procedure itself. You may still notice pressure, mild vibration from dental instruments, or the sensation of water spray — these are normal parts of the process rather than signs that something is wrong.",
    "Some patients experience temporary sensitivity in the treated tooth for a short period after the appointment, particularly to temperature changes, as the tooth adjusts. If you feel any discomfort during treatment, it's important to let your dental team know right away so they can address it.",
  ],
};

const howLongDoesItTake = {
  h2: "How Long Does a Filling Take?",
  body: "Treatment time depends on several factors: the number of teeth being treated, the size of the cavity, its location in the mouth, its depth, the filling material selected, and individual patient factors. If a simple filling is being performed, it can often be completed in a single appointment. More extensive or complex cases may require a different restorative approach or additional visits.",
};

const fillingVsRootCanalVsCrown = {
  h2: "Filling vs Root Canal vs Crown",
  intro:
    "Patients often want to know how a filling compares to other common restorative treatments. Here's a general guide, though the final decision always depends on individual diagnosis:",
  tiers: [
    {
      icon: CircleDot,
      treatment: "Filling",
      when: "Decay is limited and enough healthy tooth structure remains to support the restoration",
    },
    {
      icon: Activity,
      treatment: "Root canal treatment",
      when: "The dental pulp is infected or irreversibly inflamed, often causing persistent pain",
    },
    {
      icon: Crown,
      treatment: "Crown",
      when: "Significant tooth structure has been lost, or the tooth needs greater structural protection after treatment",
    },
  ],
  closing:
    "If the decay has reached the inner part of the tooth, your dentist may discuss whether root canal treatment is more appropriate than a conventional filling. Please don't attempt to self-diagnose based on symptoms alone — pain levels don't always correlate directly with the extent of internal damage, and only a clinical exam (often with an X-ray) can confirm what's actually happening inside the tooth.",
};

const whenFillingNotEnough = {
  h2: "When a Filling May Not Be Enough",
  intro: "A filling may not be the right solution when:",
  flags: [
    "Decay is very extensive and has destroyed a large portion of the tooth",
    "The remaining tooth structure is significantly weakened",
    "The dental pulp has become infected or inflamed",
    "The tooth is significantly cracked or fractured",
    "There simply isn't enough sound tooth structure left to support a filling",
  ],
  alternatives: ["Root canal treatment", "Dental crown", "Inlay or onlay", "Extraction (select cases)"],
  closing:
    "Which path is right depends entirely on the diagnosis for that specific tooth — there's no universal answer that applies to every patient.",
};

const benefitsOfFillings = {
  h2: "Benefits of Dental Fillings",
  intro: "When a filling is the appropriate treatment, it offers several realistic benefits:",
  benefits: [
    "Removes decayed tooth structure and the bacteria within it",
    "Restores the natural shape of the affected tooth",
    "Helps restore normal chewing function",
    "Can reduce sensitivity that was being caused by exposed decay",
    "Helps prevent further structural damage when treated appropriately and in time",
    "Preserves the remaining healthy tooth structure, rather than requiring more extensive treatment",
    "Can improve the appearance of the tooth when a tooth-colored material is used and clinically appropriate",
  ],
  closing:
    "It's worth noting that a filling addresses the cavity that's being treated — it doesn't prevent all future decay elsewhere in the mouth. Ongoing oral hygiene and regular check-ups remain important regardless of how many fillings you have.",
};

const aftercare = {
  h2: "Aftercare: What to Do After a Tooth Filling",
  intro: "Good aftercare supports a smooth recovery and helps your new restoration settle in well.",
  tabs: [
    {
      key: "right-after",
      label: "Right After",
      icon: Sun,
      items: [
        "Follow your dentist's specific instructions for your case",
        "Avoid chewing on the treated side until any numbness has fully worn off",
        "Be cautious with hot foods and drinks while still numb, since you may not sense temperature accurately",
      ],
    },
    {
      key: "ongoing",
      label: "Ongoing Care",
      icon: CalendarClock,
      items: [
        "Continue brushing and flossing as normal, including around the new filling",
        "Keep up with your regular dental check-up schedule",
        "Monitor for any unusual or persistent symptoms in the days that follow",
      ],
    },
  ],
  note:
    "Mild, temporary sensitivity can sometimes occur after a filling, particularly to cold or pressure, and this often settles within a short period.",
  contactIf: [
    "Persistent pain",
    "Severe sensitivity",
    "Pain specifically when biting down",
    "Swelling",
    "A filling that feels noticeably too high",
    "A filling that appears fractured or has come loose",
  ],
};

const howLongFillingsLast = {
  h2: "How Long Do Dental Fillings Last?",
  intro: "There's no single fixed lifespan for a dental filling — longevity genuinely varies based on several factors:",
  factors: [
    "Filling material used",
    "Size of the restoration",
    "Location of the tooth",
    "Chewing or grinding forces",
    "Oral hygiene habits",
    "Diet",
    "Bruxism (grinding or clenching)",
    "Recurrent decay at the edges",
    "Consistency of check-ups",
  ],
  closing:
    "Rather than promising a specific number of years, your dentist will monitor the condition of your existing fillings during routine examinations and let you know if a restoration shows signs of wear, cracking, or recurrent decay that may need attention.",
};

const beforeAfter = {
  h2: "Before & After: What Can You Expect?",
  body:
    "The objective of a dental filling is to restore the treated tooth's structure, function, and comfort — and, where a tooth-colored material is used, its natural appearance. This is a functional and restorative treatment rather than a cosmetic transformation, so it's realistic to expect the tooth to look and feel like a healthy version of itself, not a dramatically different smile.",
  disclosure:
    "Where before-and-after photography is used for educational purposes, it should reflect real patient cases, obtained with appropriate consent, photographed under consistent conditions, and free from misleading editing.",
};

const costInDubai = {
  h2: "Tooth Filling Cost in Dubai",
  intro:
    "Many patients search for a fixed number when researching tooth filling cost in Dubai, but an accurate figure genuinely depends on individual factors, including:",
  factors: [
    "Number of teeth requiring treatment",
    "Size of the cavity or cavities",
    "Location of the affected tooth or teeth",
    "Filling material selected",
    "Overall complexity of the case",
    "Diagnostic requirements, such as X-rays",
    "Whether additional treatment is needed alongside the filling",
  ],
  weigh: [
    "The dentist's qualifications and experience",
    "Thoroughness of the clinical assessment",
    "Quality of materials used",
    "Sterilization and safety standards",
    "Aftercare guidance you receive",
    "How well the clinic plans for long-term dental health",
  ],
  closing:
    "Because these factors vary so much from patient to patient, an accurate cost estimate can typically only be provided after a clinical examination.",
};

const insurance = {
  h2: "Does Dental Insurance Cover Tooth Fillings?",
  body:
    "Whether your dental filling is covered depends on your specific insurance provider and policy. Coverage can be affected by your dental benefits structure, annual limits, whether the clinic is within your insurer's network, waiting periods, and any applicable deductibles or co-payments.",
  factors: ["Dental benefits structure", "Annual limits", "In-network status", "Waiting periods", "Deductibles & co-payments"],
  closing:
    "Because policies differ so widely, we'd recommend confirming your individual benefits directly with your insurance provider — our team can also help clarify what information you may need when you contact us.",
};

const preventingCavities = {
  h2: "How to Reduce Your Risk of Future Cavities",
  intro: "Preventing cavities involves more than brushing alone. Helpful habits include:",
  habits: [
    { icon: Sparkles, label: "Brush twice daily with fluoride toothpaste" },
    { icon: Waves, label: "Clean between teeth daily, using floss or interdental brushes" },
    { icon: Candy, label: "Limit frequent sugary snacks and drinks, especially between meals" },
    { icon: Droplets, label: "Drink water regularly throughout the day" },
    { icon: CalendarClock, label: "Keep up with routine dental examinations, even without symptoms" },
    { icon: Wind, label: "Address dry mouth appropriately if it's an ongoing issue" },
    { icon: ShieldOff, label: "Avoid smoking, which is linked to a range of oral health problems" },
    { icon: ShieldCheck, label: "Protect teeth from excessive forces, such as a nightguard if you grind" },
    { icon: ClipboardList, label: "Follow any preventive care recommendations your dentist gives you" },
  ],
  closing: "Consistent, small habits tend to matter more for long-term oral health than any single treatment.",
};

const whyRamaCare = {
  h2: "Why Choose RamaCare Polyclinic?",
  pillars: [
    {
      icon: Building2,
      title: "Multidisciplinary environment",
      body: "RamaCare Polyclinic, located in Jumeirah 1, Dubai, brings dental care together with other healthcare specialties — including general medicine, dermatology, physiotherapy, and Ayurveda — under one roof.",
    },
    {
      icon: Search,
      title: "Personalized assessment",
      body: "We believe treatment decisions should be based on the condition of the individual tooth in front of us, not a generic protocol. Every recommendation follows a proper clinical examination.",
    },
    {
      icon: MessageSquare,
      title: "Patient-focused communication",
      body: "Our team takes time to explain the diagnosis, the treatment options available, what to expect during the procedure, and clear aftercare guidance.",
    },
    {
      icon: MapPin,
      title: "Convenient Jumeirah 1 location",
      body: "Our clinic is easily accessible from major roads across Dubai, with a calm, welcoming environment designed to help patients feel comfortable from the moment they arrive.",
    },
    {
      icon: Network,
      title: "Multidisciplinary access",
      body: "Should your case benefit from input across specialties, being part of a polyclinic means coordination can happen without needing to visit multiple separate locations.",
    },
  ],
};

const patientJourney = {
  h2: "Patient Journey",
  intro: "Here's what the process generally looks like when you visit RamaCare for a tooth filling assessment:",
  steps: [
    "Book Appointment",
    "Dental Consultation",
    "Clinical Examination",
    "X-ray if Required",
    "Diagnosis",
    "Treatment Discussion",
    "Tooth Filling / Restoration",
    "Bite & Comfort Check",
    "Aftercare Guidance",
    "Follow-Up",
    "Preventive Dental Care",
  ],
  closing: "Each step is designed to make sure you understand what's happening and why, before any treatment begins.",
};

const faqCategories = [
  {
    key: "general",
    label: "General",
    faqs: [
      { q: "What is a dental tooth filling?", a: "A dental filling is a restorative treatment that repairs a tooth affected by decay or certain types of damage. The dentist removes the damaged portion, cleans the area, and restores the tooth with an appropriate filling material, then shapes and adjusts it to fit comfortably." },
      { q: "What causes cavities?", a: "Cavities form when bacteria in plaque metabolize sugars and produce acids that gradually break down tooth enamel. Frequent sugar exposure, poor oral hygiene, dry mouth, and limited fluoride exposure can all increase the risk of decay developing." },
      { q: "How do I know if I need a filling?", a: "Common signs include sensitivity to hot or cold, a visible dark spot or hole, pain when chewing, or a rough tooth surface. However, cavities can also be present without any noticeable symptoms, which is why regular check-ups matter." },
      { q: "Can a cavity exist without pain?", a: "Yes. A small or early-stage cavity may not cause any pain at all. Many patients only discover decay during a routine dental examination or X-ray, before symptoms like sensitivity or toothache develop." },
    ],
  },
  {
    key: "treatment",
    label: "Treatment & Materials",
    faqs: [
      { q: "Does a tooth filling hurt?", a: "Local anesthesia is commonly used to keep the treatment area numb, so most patients don't experience sharp pain during the procedure. You may notice pressure or vibration, and some mild, temporary sensitivity afterward is possible." },
      { q: "How long does a dental filling take?", a: "This depends on the size, depth, and location of the cavity, along with the material used. A straightforward filling can often be completed in a single visit, while more complex cases may take longer or require additional appointments." },
      { q: "What is a composite tooth filling?", a: "A composite filling uses a tooth-colored resin material made from plastic and fine glass particles. It can be shade-matched to your natural tooth, making it a popular choice for restorations in visible areas of the mouth." },
      { q: "Are white fillings better than metal fillings?", a: "Neither material is universally 'better' — the right choice depends on the tooth's location, the size of the restoration, and your dentist's clinical judgment. White composite fillings are often chosen for aesthetic reasons in visible teeth." },
      { q: "How long does a tooth filling last?", a: "Longevity varies based on the material used, the size of the restoration, bite forces, oral hygiene, and diet. There's no fixed lifespan, which is why your dentist checks existing fillings during routine visits." },
      { q: "Can a filling fix a broken tooth?", a: "It depends on how much of the tooth structure remains and where the break is located. Minor chips may be treatable with a filling or bonding, while more significant breaks may require a crown or other restorative approach." },
      { q: "Can a filling fall out?", a: "Yes, this can happen over time, particularly if there's wear at the edges of the filling, new decay develops underneath it, or the tooth experiences significant biting force. Contact your dentist promptly if this occurs." },
      { q: "Why is my tooth sensitive after a filling?", a: "Mild, temporary sensitivity to temperature or pressure is relatively common after a filling and usually settles within a short period. If sensitivity is severe or persists, it's worth having your dentist check the restoration." },
      { q: "When is a root canal needed instead of a filling?", a: "Root canal treatment is usually considered when the dental pulp — the nerve and blood supply inside the tooth — has become infected or irreversibly inflamed, which a simple filling cannot resolve on its own." },
      { q: "When is a crown better than a filling?", a: "A crown may be recommended when significant tooth structure has been lost or when the tooth needs additional structural protection, such as after extensive decay removal or root canal treatment." },
    ],
  },
  {
    key: "cost",
    label: "Cost & Insurance",
    faqs: [
      { q: "How much does a tooth filling cost in Dubai?", a: "Cost depends on factors like the number of teeth involved, cavity size, filling material, and case complexity. Because of this variation, an accurate estimate is typically only possible after a clinical examination." },
      { q: "Does dental insurance cover fillings?", a: "Coverage depends on your specific insurance provider, policy terms, network status, and annual limits. We recommend confirming your individual benefits directly with your insurer before your appointment." },
    ],
  },
  {
    key: "booking",
    label: "Family & Booking",
    faqs: [
      { q: "Can children get dental fillings?", a: "Yes, children can require fillings for cavities in baby or permanent teeth. Treatment approach and material selection may differ slightly for younger patients, and your dentist will tailor the visit to your child's needs." },
      { q: "Can cavities be prevented after getting a filling?", a: "A filling treats the specific cavity in question, but it doesn't prevent decay elsewhere. Ongoing brushing, flossing, a balanced diet, and regular dental check-ups remain important for preventing future cavities." },
      { q: "How do I find a dentist near me in Dubai?", a: "RamaCare Polyclinic in Jumeirah 1 offers dental examinations and restorative treatment, with an easily accessible location off major roads." },
      { q: "How can I book a tooth-filling appointment at RamaCare?", a: "You can book a dental consultation by calling RamaCare Polyclinic, sending a message via WhatsApp, or using our online booking option. Our team will help arrange an appointment time that works for you." },
    ],
  },
];

const bookConsultation = {
  eyebrow: "Don't Ignore a Toothache or Cavity",
  h2: "Ready When You Are",
  body:
    "A toothache or a suspicious dark spot on a tooth is easy to put off, especially when it doesn't hurt yet. But early dental assessment can help determine whether a simple, conservative filling is appropriate, or whether the tooth needs more extensive care before the situation progresses. The sooner decay is evaluated, the more treatment options are usually available.",
  sub:
    "If you're looking for dental tooth filling in Dubai, the RamaCare Polyclinic team in Jumeirah 1 is here to assess your tooth and walk you through what we find, clearly and without pressure.",
  phone: "+971 4 286 2006",
  whatsapp: "+971 56 659 7878",
  address: "Jumeirah Terrace Building, Jumeirah 1, Dubai",
  conclusion:
    "Dental fillings remain one of the most common and effective ways to treat a cavity, but the right approach always depends on the individual tooth — its size, its depth of decay, and the amount of healthy structure that remains. Understanding why cavities develop, recognizing early signs, and attending regular dental check-ups all make it more likely that a straightforward filling, rather than more extensive treatment, will be enough.",
};
/* ------------------------------------------------------------------ */
/*  TABLE OF CONTENTS DATA — grouped into chapters. Only items with     */
/*  `live: true` have a matching section built on the page so far;      */
/*  the rest stay listed (per the full outline) but inactive until      */
/*  their sections are added.                                           */
/* ------------------------------------------------------------------ */
const TOC_GROUPS = [
  {
    category: "Understanding Decay",
    items: [
      { id: "what-is-a-filling", label: "What Is a Dental Tooth Filling?", live: true },
      { id: "why-teeth-need-fillings", label: "Why Do Teeth Need Fillings?", live: true },
      { id: "what-causes-tooth-decay", label: "What Causes Tooth Decay?", live: true },
      { id: "signs-you-need-a-filling", label: "Signs You May Need a Filling", live: true },
      { id: "when-to-see-a-dentist", label: "When Should You See a Dentist?", live: true },
      { id: "how-dentists-diagnose-a-cavity", label: "How Dentists Diagnose a Cavity", live: true },
    ],
  },
  {
    category: "Treatment at RamaCare",
    items: [
      { id: "what-to-expect", label: "Dental Tooth Filling in Dubai: What to Expect", live: true },
      { id: "types-of-fillings", label: "Types of Dental Fillings", live: true },
      { id: "composite-white-fillings", label: "Composite / White Tooth Fillings", live: true },
      { id: "does-a-filling-hurt", label: "Does a Tooth Filling Hurt?", live: true },
      { id: "how-long-does-a-filling-take", label: "How Long Does a Filling Take?", live: true },
      { id: "filling-vs-root-canal-vs-crown", label: "Filling vs Root Canal vs Crown", live: true },
      { id: "when-a-filling-may-not-be-enough", label: "When a Filling May Not Be Enough", live: true },
    ],
  },
  {
    category: "Results & Care",
    items: [
      { id: "benefits-of-fillings", label: "Benefits of Dental Fillings", live: true },
      { id: "aftercare", label: "Aftercare", live: true },
      { id: "how-long-do-fillings-last", label: "How Long Do Fillings Last?", live: true },
      { id: "before-after", label: "Before & After", live: true },
    ],
  },
  {
    category: "Practical Info",
    items: [
      { id: "cost-in-dubai", label: "Tooth Filling Cost in Dubai", live: true },
      { id: "insurance", label: "Insurance", live: true },
      { id: "preventing-future-cavities", label: "Preventing Future Cavities", live: true },
    ],
  },
  {
    category: "Clinic & Booking",
    items: [
      { id: "why-ramacare", label: "Why Choose RamaCare Polyclinic?", live: true },
      { id: "patient-journey", label: "Patient Journey", live: true },
      { id: "faqs", label: "FAQs", live: true },
      { id: "book-consultation", label: "Book a Dental Consultation", live: true },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  BRAND TOKENS — shared across RamaCare pages                        */
/* ------------------------------------------------------------------ */
const BRAND = {
  teal: "#1F5E4B",
  darkTeal: "#0F3B2E",
  gold: "#D4A574",
  cream: "#F5F1E8",
  creamLight: "#F9F7F2",
};
/* single semantic exception — used only for the tiny "decay" marker,   */
/* never elsewhere on the page                                         */
const DECAY = "#B8583C";

const FONT_DISPLAY = "'Nunito Sans', sans-serif";
const FONT_BODY = "'Nunito Sans', sans-serif";

/* ------------------------------------------------------------------ */
/*  SIGNATURE VISUAL — stylised tooth outline, reused across the page  */
/*  at three "stages": decayed / cleaned / restored. This is the       */
/*  page's one recurring visual idea, distinct from other service      */
/*  pages' motifs.                                                     */
/* ------------------------------------------------------------------ */
const TOOTH_PATH =
  "M100,18 C62,18 42,46 46,76 C41,96 22,116 27,155 C30,177 48,182 53,161 C58,140 62,136 66,136 C70,136 72,147 74,168 C76,189 92,191 96,174 C99,161 99,150 100,141 C101,150 101,161 104,174 C108,191 124,189 126,168 C128,147 130,136 134,136 C138,136 142,140 147,161 C152,182 170,177 173,155 C178,116 159,96 154,76 C158,46 138,18 100,18 Z";

function ToothIcon({ stage = "decayed", size = 96 }) {
  const showDecayDot = stage === "decayed";
  const showFill = stage === "restored";
  const strokeColor = stage === "restored" ? BRAND.gold : BRAND.teal;

  return (
    <svg viewBox="0 0 200 210" width={size} height={size * 1.05} className="overflow-visible">
      <path
        d={TOOTH_PATH}
        fill={showFill ? `${BRAND.gold}22` : "none"}
        stroke={strokeColor}
        strokeWidth={4}
        strokeLinejoin="round"
      />
      {showFill && (
        <path
          d="M78,40 C90,32 112,32 124,42 C130,52 128,66 118,70 C104,76 88,72 80,60 C76,52 74,46 78,40 Z"
          fill={BRAND.gold}
          opacity={0.85}
        />
      )}
      {showDecayDot && (
        <motion.circle
          cx={92}
          cy={52}
          r={7}
          fill={DECAY}
          initial={{ scale: 0.6, opacity: 0.5 }}
          animate={{ scale: [0.9, 1.15, 0.9], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        />
      )}
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  REUSABLE — image placeholder card. Drop a real <img> / next/image  */
/*  in here later; the dashed frame marks exactly where it belongs.    */
/* ------------------------------------------------------------------ */
function ImagePlaceholder({ src, alt, label = "Image", ratio = "aspect-[4/5]", className = "" }) {
  if (src) {
    return (
      <div
        className={`relative flex ${ratio} w-full overflow-hidden rounded-[24px] border ${className}`}
        style={{ borderColor: `${BRAND.teal}1f` }}
      >
        <img src={src} alt={alt || label} className="h-full w-full object-cover" />
      </div>
    );
  }
  return (
    <div
      className={`relative flex ${ratio} w-full flex-col items-center justify-center gap-3 overflow-hidden rounded-[24px] border-2 border-dashed ${className}`}
      style={{ borderColor: `${BRAND.teal}33`, backgroundColor: `${BRAND.teal}08` }}
    >
      <div
        className="flex h-12 w-12 items-center justify-center rounded-full"
        style={{ backgroundColor: `${BRAND.teal}14` }}
      >
        <ImageIcon size={20} color={BRAND.teal} strokeWidth={1.6} />
      </div>
      <span className="px-6 text-center text-[12.5px] font-medium leading-snug text-neutral-500">
        {label}
      </span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  SECTION: TABLE OF CONTENTS — Collapsed Horizontal Navigation Bar  */
/*  with Active Scroll Spy and Expandable Multi-Column Drawer         */
/* ------------------------------------------------------------------ */
function TableOfContents() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0); // 0 = All
  const [activeSectionId, setActiveSectionId] = useState("what-is-a-filling");
  const [searchQuery, setSearchQuery] = useState("");
  const scrollContainerRef = useRef(null);

  // Flatten all items with category info for horizontal scrolling list
  const allTopics = TOC_GROUPS.flatMap((g, gi) =>
    g.items.map((item) => ({ ...item, categoryIndex: gi, categoryName: g.category }))
  );

  // Filtered topics for the horizontal rail based on selected category tab
  const visibleRailTopics = activeCategory === 0
    ? allTopics
    : allTopics.filter((t) => t.categoryIndex === activeCategory - 1);

  // Scroll spy effect to highlight active topic and category as user scrolls
  useEffect(() => {
    const allItemIds = allTopics.map((t) => t.id);
    const handleScroll = () => {
      const scrollPos = window.scrollY + 160;
      for (let i = allItemIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(allItemIds[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSectionId(allItemIds[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll rail function for arrow buttons
  const scrollRail = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -280 : 280;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // Custom scroll to section with exact offset so heading is 100% visible below sticky header
  const scrollToSection = (e, id) => {
    if (e) e.preventDefault();
    if (isExpanded) setIsExpanded(false);

    const targetEl = document.getElementById(id);
    if (targetEl) {
      // Calculate absolute position from document top (immune to drawer collapse layout shifts)
      let topPos = 0;
      let curr = targetEl;
      while (curr) {
        topPos += curr.offsetTop;
        curr = curr.offsetParent;
      }
      const yOffset = -140; // sticky main header + sticky TOC bar offset
      const finalY = Math.max(0, topPos + yOffset);
      window.scrollTo({ top: finalY, behavior: "smooth" });
      setActiveSectionId(id);
    }
  };

  const totalSections = allTopics.length;

  const filteredDrawerGroups = searchQuery.trim()
    ? TOC_GROUPS.map((group) => ({
        ...group,
        items: group.items.filter((item) =>
          item.label.toLowerCase().includes(searchQuery.toLowerCase())
        ),
      })).filter((group) => group.items.length > 0)
    : TOC_GROUPS;

  return (
    <nav
      aria-label="Table of contents navigation"
      className="sticky top-[70px] z-40 border-y transition-all duration-300 backdrop-blur-md shadow-xs"
      style={{
        backgroundColor: "rgba(249, 247, 242, 0.96)",
        borderColor: `${BRAND.teal}22`,
        fontFamily: FONT_BODY,
      }}
    >
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        {/* ROW 1: TOP BAR WITH CATEGORY FILTERS & MEGA DRAWER TOGGLE */}
        <div className="flex h-11 items-center justify-between gap-2 border-b text-[12.5px]" style={{ borderColor: `${BRAND.teal}12` }}>
          {/* Category Filter Tabs */}
          <div className="no-scrollbar flex items-center gap-1.5 overflow-x-auto py-1">
            <button
              type="button"
              onClick={() => setActiveCategory(0)}
              className="flex flex-none items-center gap-1.5 rounded-full px-3 py-0.5 font-semibold transition-all"
              style={{
                backgroundColor: activeCategory === 0 ? BRAND.teal : "transparent",
                color: activeCategory === 0 ? "#FFFFFF" : BRAND.darkTeal,
              }}
            >
              All Topics
              <span className="rounded-full bg-white/20 px-1.5 py-0.2 text-[10.5px]">
                {totalSections}
              </span>
            </button>
            {TOC_GROUPS.map((g, gi) => {
              const isActive = activeCategory === gi + 1;
              return (
                <button
                  key={g.category}
                  type="button"
                  onClick={() => {
                    setActiveCategory(gi + 1);
                    const firstLive = g.items.find((it) => it.live);
                    if (firstLive) {
                      scrollToSection(null, firstLive.id);
                    }
                  }}
                  className="flex flex-none items-center gap-1.5 rounded-full px-3 py-0.5 font-medium transition-all hover:bg-[#1F5E4B12]"
                  style={{
                    backgroundColor: isActive ? BRAND.teal : "transparent",
                    color: isActive ? "#FFFFFF" : BRAND.darkTeal,
                  }}
                >
                  <span className="text-[11px] opacity-75">0{gi + 1}</span>
                  <span className="whitespace-nowrap">{g.category}</span>
                </button>
              );
            })}
          </div>

          {/* Right Toggle Drawer Button */}
          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex flex-none items-center gap-1.5 rounded-full border px-3 py-0.5 font-semibold transition-all hover:border-[#1F5E4B] hover:text-[#1F5E4B]"
            style={{
              borderColor: `${BRAND.teal}33`,
              backgroundColor: isExpanded ? BRAND.teal : "#FFFFFF",
              color: isExpanded ? "#FFFFFF" : BRAND.darkTeal,
            }}
          >
            <Compass size={13} />
            <span className="hidden sm:inline">{isExpanded ? "Close Menu" : "Full Outline"}</span>
            <motion.span animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
              <ChevronDown size={13} />
            </motion.span>
          </button>
        </div>

        {/* ROW 2: HORIZONTAL TOPICS SCROLL RAIL WITH ARROWS */}
        <div className="relative flex h-12 items-center overflow-hidden py-1">
          {/* Left Arrow Button */}
          <button
            type="button"
            onClick={() => scrollRail("left")}
            className="absolute left-0 z-20 flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-md border text-neutral-700 hover:bg-[#1F5E4B] hover:text-white transition-all active:scale-95"
            style={{ borderColor: `${BRAND.teal}33` }}
            aria-label="Scroll left"
          >
            <ChevronLeft size={15} />
          </button>

          {/* Scrollable Topics Rail */}
          <div
            ref={scrollContainerRef}
            className="no-scrollbar flex w-full items-center gap-2 overflow-x-auto scroll-smooth px-9"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {visibleRailTopics.map((topic) => {
              const isCurrentActive = activeSectionId === topic.id;
              return topic.live ? (
                <a
                  key={topic.id}
                  href={`#${topic.id}`}
                  onClick={(e) => scrollToSection(e, topic.id)}
                  className="flex flex-none items-center gap-2 rounded-full border px-3.5 py-1 text-[12.5px] font-medium transition-all"
                  style={{
                    borderColor: isCurrentActive ? BRAND.teal : `${BRAND.teal}22`,
                    backgroundColor: isCurrentActive ? BRAND.teal : "#FFFFFF",
                    color: isCurrentActive ? "#FFFFFF" : BRAND.darkTeal,
                    boxShadow: isCurrentActive ? "0 2px 8px rgba(31, 94, 75, 0.2)" : "none",
                  }}
                >
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: isCurrentActive ? BRAND.gold : `${BRAND.teal}66` }}
                  />
                  <span className="whitespace-nowrap">{topic.label}</span>
                </a>
              ) : (
                <span
                  key={topic.id}
                  className="flex flex-none items-center gap-2 rounded-full border px-3 py-1 text-[12px] font-normal text-neutral-400 opacity-60"
                  style={{ borderColor: `${BRAND.teal}15`, backgroundColor: "#FFFFFF" }}
                >
                  <span className="whitespace-nowrap">{topic.label}</span>
                  <span className="text-[9.5px]">Soon</span>
                </span>
              );
            })}
          </div>

          {/* Right Arrow Button */}
          <button
            type="button"
            onClick={() => scrollRail("right")}
            className="absolute right-0 z-20 flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-md border text-neutral-700 hover:bg-[#1F5E4B] hover:text-white transition-all active:scale-95"
            style={{ borderColor: `${BRAND.teal}33` }}
            aria-label="Scroll right"
          >
            <ChevronRight size={15} />
          </button>
        </div>

        {/* EXPANDED MEGA-NAV DRAWER */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden border-t py-6"
              style={{ borderColor: `${BRAND.teal}1a` }}
            >
              <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3
                    className="text-[1.15rem] font-semibold"
                    style={{ fontFamily: FONT_DISPLAY, color: BRAND.darkTeal }}
                  >
                    All Page Topics ({totalSections})
                  </h3>
                  <p className="text-[13px] text-neutral-500">
                    Click any topic to scroll smoothly directly to its section heading.
                  </p>
                </div>

                <div className="relative flex items-center max-w-xs w-full">
                  <Search size={15} className="absolute left-3 text-neutral-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search topics..."
                    className="w-full rounded-full border bg-white py-1.5 pl-9 pr-8 text-[13px] text-neutral-700 outline-none transition-colors focus:border-[#1F5E4B]"
                    style={{ borderColor: `${BRAND.teal}2a` }}
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery("")}
                      className="absolute right-3 text-neutral-400 hover:text-neutral-600"
                    >
                      <X size={14} />
                    </button>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                {filteredDrawerGroups.map((group, gi) => (
                  <div
                    key={group.category}
                    className="flex flex-col rounded-2xl border bg-white p-4 shadow-2xs"
                    style={{ borderColor: `${BRAND.teal}1a` }}
                  >
                    <div
                      className="mb-3 flex items-center justify-between border-b pb-2.5"
                      style={{ borderColor: `${BRAND.teal}12` }}
                    >
                      <span className="flex items-center gap-2">
                        <span
                          className="flex h-5 w-5 items-center justify-center rounded-full text-[10.5px] font-bold"
                          style={{ backgroundColor: `${BRAND.teal}14`, color: BRAND.teal }}
                        >
                          0{gi + 1}
                        </span>
                        <span
                          className="text-[13px] font-bold tracking-tight"
                          style={{ color: BRAND.darkTeal }}
                        >
                          {group.category}
                        </span>
                      </span>
                      <span className="text-[11px] font-medium text-neutral-400">
                        {group.items.length}
                      </span>
                    </div>

                    <div className="space-y-1">
                      {group.items.map((item) => {
                        const isCurrentActive = activeSectionId === item.id;
                        return item.live ? (
                          <a
                            key={item.id}
                            href={`#${item.id}`}
                            onClick={(e) => scrollToSection(e, item.id)}
                            className="flex items-center justify-between gap-2 rounded-xl px-2.5 py-1.5 text-[12.5px] font-medium transition-colors"
                            style={{
                              backgroundColor: isCurrentActive ? `${BRAND.teal}12` : "transparent",
                              color: isCurrentActive ? BRAND.teal : BRAND.darkTeal,
                            }}
                          >
                            <span className="line-clamp-1 hover:text-[#1F5E4B]">{item.label}</span>
                            <span
                              className="h-1.5 w-1.5 flex-none rounded-full"
                              style={{ backgroundColor: isCurrentActive ? BRAND.teal : BRAND.gold }}
                            />
                          </a>
                        ) : (
                          <span
                            key={item.id}
                            className="flex items-center justify-between gap-2 rounded-xl px-2.5 py-1.5 text-[12.5px] text-neutral-400 opacity-60"
                          >
                            <span className="line-clamp-1">{item.label}</span>
                            <span className="text-[10px] text-neutral-300">Soon</span>
                          </span>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex items-center justify-between pt-3 border-t" style={{ borderColor: `${BRAND.teal}12` }}>
                <span className="text-[12px] text-neutral-500">
                  Showing {filteredDrawerGroups.reduce((n, g) => n + g.items.length, 0)} topics
                </span>
                <button
                  type="button"
                  onClick={() => setIsExpanded(false)}
                  className="flex items-center gap-1.5 text-[12.5px] font-semibold"
                  style={{ color: BRAND.teal }}
                >
                  <X size={14} /> Close Menu
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

/* ------------------------------------------------------------------ */
/*  SECTION: HERO — "diagnostic scan frame" instead of a full bleed    */
/*  color panel. Copy sits beside a viewfinder-style card with a tooth */
/*  illustration and an animated scan line, echoing the "assessment    */
/*  before treatment" theme in the copy.                               */
/* ------------------------------------------------------------------ */
function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: BRAND.creamLight, fontFamily: FONT_BODY }}
    >
      {/* faint graph-paper texture, evokes a clinical chart */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `linear-gradient(${BRAND.teal}0d 1px, transparent 1px), linear-gradient(90deg, ${BRAND.teal}0d 1px, transparent 1px)`,
          backgroundSize: "36px 36px",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 pt-8 pb-16 md:px-10 md:pt-10 md:pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Breadcrumb Navigation inside Top Hero section */}
          <nav aria-label="Breadcrumb" className="mb-5">
            <ol className="flex flex-wrap items-center gap-1.5 text-[12.5px] font-medium text-neutral-500">
              <li>
                <Link href="/" className="transition-colors hover:text-[#1F5E4B]">Home</Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/services/dental-dubai" className="transition-colors hover:text-[#1F5E4B]">Dental Services</Link>
              </li>
              <li>/</li>
              <li className="text-[#1F5E4B]" aria-current="page">
                Dental Tooth Filling in Dubai
              </li>
            </ol>
          </nav>

          <div
            className="mb-7 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.13em]"
            style={{ borderColor: `${BRAND.teal}33`, color: BRAND.teal }}
          >
            <MapPin size={13} strokeWidth={2.2} />
            Jumeirah 1, Dubai &middot; Cavity Assessment &amp; Restoration
          </div>

          <h1
            className="max-w-xl text-[2.2rem] leading-[1.14] tracking-tight md:text-[2.9rem] lg:text-[3.1rem]"
            style={{ fontFamily: FONT_DISPLAY, fontWeight: 600, color: BRAND.darkTeal }}
          >
            {hero.h1}
          </h1>

          <div className="mt-8 max-w-xl space-y-5">
            {hero.intro.map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.15 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="text-[14.5px] leading-[1.85] text-neutral-700 md:text-[15.5px]"
              >
                {para}
              </motion.p>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#book-consultation"
              className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[14px] font-semibold text-white shadow-sm transition-transform hover:-translate-y-0.5"
              style={{ backgroundColor: BRAND.teal }}
            >
              Book a Consultation
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#what-is-a-filling"
              className="inline-flex items-center gap-2 text-[14px] font-semibold underline underline-offset-8 transition-colors"
              style={{ color: BRAND.darkTeal, textDecorationColor: `${BRAND.darkTeal}44` }}
            >
              What is a filling, exactly?
            </a>
          </div>
        </motion.div>

        {/* HERO IMAGE & DIAGNOSTIC CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md"
        >
          <div
            className="relative overflow-hidden rounded-[26px] border border-white/20 p-3 shadow-2xl"
            style={{ backgroundColor: BRAND.darkTeal }}
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[20px]">
              <img
                src={IMAGES.hero.src}
                alt={IMAGES.hero.alt}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F3B2E] via-transparent to-transparent opacity-75" />
            </div>

            <div className="p-4 text-center">
              <div className="flex items-center justify-center gap-2 text-[12px] font-semibold uppercase tracking-[0.14em]" style={{ color: BRAND.gold }}>
                <ScanLine size={14} color={BRAND.gold} />
                Cavity Assessment &amp; Restoration
              </div>
              <p className="mt-1 text-[13px] text-white/80">
                Professional dental filling consultation at RamaCare Polyclinic, Jumeirah 1, Dubai
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  SECTION: WHAT IS A DENTAL TOOTH FILLING — decay-to-restoration      */
/*  strip: three stages of the same tooth icon connected by a dashed    */
/*  path, sitting underneath the copy rather than beside it.            */
/* ------------------------------------------------------------------ */
function WhatIsAFilling() {
  const stages = [
    { key: "decayed", label: "Decayed" },
    { key: "cleaned", label: "Cleaned" },
    { key: "restored", label: "Restored" },
  ];

  return (
    <section
      id="what-is-a-filling"
      className="scroll-mt-36 px-6 py-20 md:px-10 md:py-28"
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
            <span
              className="text-[12px] font-semibold uppercase tracking-[0.16em]"
              style={{ color: BRAND.gold }}
            >
              Understanding the Treatment
            </span>
          </div>
          <h2
            className="mt-4 text-[1.9rem] leading-tight md:text-[2.4rem]"
            style={{ fontFamily: FONT_DISPLAY, fontWeight: 600, color: BRAND.darkTeal }}
          >
            {whatIsAFilling.h2}
          </h2>
          <p className="mt-6 text-[15.5px] leading-[1.9] text-neutral-700 md:text-[16.5px]">
            {whatIsAFilling.body}
          </p>
        </motion.div>

        {/* DECAY → CLEANED → RESTORED strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-16 overflow-hidden rounded-[28px] px-8 py-12 md:px-14"
          style={{ backgroundColor: "#FFFFFF" }}
        >
          <div className="relative flex flex-col items-center gap-10 sm:flex-row sm:items-start sm:justify-between">
            {/* connecting dashed line, desktop only */}
            <div
              className="pointer-events-none absolute left-[14%] right-[14%] top-[52px] hidden border-t-2 border-dashed sm:block"
              style={{ borderColor: `${BRAND.teal}33` }}
            />

            {stages.map((s, i) => (
              <div key={s.key} className="relative flex w-full flex-col items-center sm:w-1/3">
                <span
                  className="mb-2 text-[11px] font-semibold uppercase tracking-[0.14em]"
                  style={{ color: BRAND.gold }}
                >
                  Stage {String(i + 1).padStart(2, "0")}
                </span>
                <div
                  className="relative flex h-[136px] w-[136px] items-center justify-center rounded-full"
                  style={{ backgroundColor: BRAND.creamLight }}
                >
                  <ToothIcon stage={s.key} size={78} />
                </div>
                <p className="mt-4 text-[15px] font-semibold" style={{ color: BRAND.darkTeal }}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  SECTION: WHY DO TEETH NEED FILLINGS — a horizontal decay-progression */
/*  stepper (Plaque → ... → Pulp involvement) with a deepening color     */
/*  ramp, plus a reserved image frame for a future clinical photo/       */
/*  illustration.                                                        */
/* ------------------------------------------------------------------ */
function WhyTeethNeedFillings() {
  const stopCount = whyTeethNeedFillings.progression.length;
  // color ramp: healthy teal/gold → decay red, evenly interpolated
  const rampColor = (i) => {
    const t = i / (stopCount - 1);
    // simple manual interpolation between teal and DECAY red
    const from = { r: 0x1f, g: 0x5e, b: 0x4b };
    const to = { r: 0xb8, g: 0x58, b: 0x3c };
    const r = Math.round(from.r + (to.r - from.r) * t);
    const g = Math.round(from.g + (to.g - from.g) * t);
    const b = Math.round(from.b + (to.b - from.b) * t);
    return `rgb(${r},${g},${b})`;
  };

  return (
    <section
      id="why-teeth-need-fillings"
      className="scroll-mt-36 px-6 py-20 md:px-10 md:py-28"
      style={{ backgroundColor: BRAND.creamLight, fontFamily: FONT_BODY }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1fr_0.42fr] lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-8" style={{ backgroundColor: BRAND.gold }} />
              <span
                className="text-[12px] font-semibold uppercase tracking-[0.16em]"
                style={{ color: BRAND.gold }}
              >
                The Root Cause
              </span>
            </div>
            <h2
              className="mt-4 text-[1.9rem] leading-tight md:text-[2.4rem]"
              style={{ fontFamily: FONT_DISPLAY, fontWeight: 600, color: BRAND.darkTeal }}
            >
              {whyTeethNeedFillings.h2}
            </h2>
            <p className="mt-6 text-[15.5px] leading-[1.9] text-neutral-700 md:text-[16.5px]">
              {whyTeethNeedFillings.intro}
            </p>
            <p className="mt-5 text-[15.5px] leading-[1.9] text-neutral-700 md:text-[16.5px]">
              {whyTeethNeedFillings.lead}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <ImagePlaceholder
              src="/images/tooth decay and dental cavity anatomy illustration.jpg"
              alt="tooth decay and dental cavity anatomy illustration"
              label="Clinical illustration — tooth decay and dental cavity anatomy"
            />
          </motion.div>
        </div>

        {/* PROGRESSION STEPPER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-14 overflow-hidden rounded-[28px] px-6 py-10 md:px-12 md:py-14"
          style={{ backgroundColor: BRAND.darkTeal }}
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.1]"
            style={{
              backgroundImage: `radial-gradient(${BRAND.gold} 1px, transparent 1px)`,
              backgroundSize: "22px 22px",
            }}
          />

          <div className="relative flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between sm:gap-2">
            {/* connecting gradient line, desktop */}
            <div
              className="pointer-events-none absolute left-[6%] right-[6%] top-[13px] hidden h-[2px] sm:block"
              style={{
                background: `linear-gradient(90deg, ${rampColor(0)}, ${rampColor(stopCount - 1)})`,
                opacity: 0.5,
              }}
            />

            {whyTeethNeedFillings.progression.map((stage, i) => (
              <div key={stage} className="relative flex flex-1 items-start gap-3 sm:flex-col sm:items-center sm:gap-3 sm:text-center">
                <span
                  className="relative z-10 flex h-7 w-7 flex-none items-center justify-center rounded-full text-[11px] font-semibold text-white"
                  style={{ backgroundColor: rampColor(i) }}
                >
                  {i + 1}
                </span>
                <p className="text-[13.5px] font-medium leading-snug text-white/85 sm:mt-1 sm:max-w-[92px]">
                  {stage}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-10 max-w-3xl text-[15px] leading-[1.9] text-neutral-700 md:text-[16px]"
        >
          {whyTeethNeedFillings.closing}
        </motion.p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  SECTION: WHAT CAUSES TOOTH DECAY — a masonry of icon-led cause      */
/*  cards (natural column flow rather than a uniform grid), each with   */
/*  its own icon so the causes read as distinct rather than repetitive. */
/* ------------------------------------------------------------------ */
function WhatCausesToothDecay() {
  return (
    <section
      id="what-causes-tooth-decay"
      className="scroll-mt-36 px-6 py-20 md:px-10 md:py-28"
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
            <span
              className="text-[12px] font-semibold uppercase tracking-[0.16em]"
              style={{ color: BRAND.gold }}
            >
              Prevention Starts With Understanding
            </span>
          </div>
          <h2
            className="mt-4 text-[1.9rem] leading-tight md:text-[2.4rem]"
            style={{ fontFamily: FONT_DISPLAY, fontWeight: 600, color: BRAND.darkTeal }}
          >
            {whatCausesToothDecay.h2}
          </h2>
          <p className="mt-6 text-[15.5px] leading-[1.9] text-neutral-700 md:text-[16.5px]">
            {whatCausesToothDecay.intro}
          </p>
        </motion.div>

        <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {whatCausesToothDecay.causes.map((cause, i) => {
            const Icon = cause.icon;
            return (
              <motion.article
                key={cause.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="mb-5 break-inside-avoid rounded-2xl border p-6"
                style={{ borderColor: `${BRAND.teal}1f`, backgroundColor: "#FFFFFF" }}
              >
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-xl"
                  style={{ backgroundColor: `${BRAND.teal}12` }}
                >
                  <Icon size={19} color={BRAND.teal} strokeWidth={1.8} />
                </div>
                <h3 className="mt-4 text-[15.5px] font-semibold" style={{ color: BRAND.darkTeal }}>
                  {cause.title}
                </h3>
                <p className="mt-2.5 text-[14px] leading-relaxed text-neutral-600">{cause.body}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  SECTION: SIGNS YOU MAY NEED A FILLING — two-column checklist plus   */
/*  a highlighted "good to know" callout for the pain-free-cavity note, */
/*  with a reserved image frame beside the checklist.                   */
/* ------------------------------------------------------------------ */
function SignsYouMayNeedFilling() {
  return (
    <section
      id="signs-you-need-a-filling"
      className="scroll-mt-36 px-6 py-20 md:px-10 md:py-28"
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
            <span
              className="text-[12px] font-semibold uppercase tracking-[0.16em]"
              style={{ color: BRAND.gold }}
            >
              Know the Signs
            </span>
          </div>
          <h2
            className="mt-4 text-[1.9rem] leading-tight md:text-[2.4rem]"
            style={{ fontFamily: FONT_DISPLAY, fontWeight: 600, color: BRAND.darkTeal }}
          >
            {signsYouMayNeedFilling.h2}
          </h2>
          <p className="mt-6 text-[15.5px] leading-[1.9] text-neutral-700 md:text-[16.5px]">
            {signsYouMayNeedFilling.intro}
          </p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-[1.15fr_0.55fr] lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 gap-x-8 gap-y-1 sm:grid-cols-2"
          >
            {signsYouMayNeedFilling.signs.map((sign, i) => (
              <div
                key={sign}
                className="flex items-start gap-3 border-b py-4"
                style={{ borderColor: `${BRAND.teal}14` }}
              >
                <CheckCircle2 size={18} className="mt-0.5 flex-none" color={BRAND.teal} strokeWidth={1.8} />
                <span className="text-[14.5px] leading-snug text-neutral-700">{sign}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <ImagePlaceholder
              src={IMAGES.examination.src}
              alt={IMAGES.examination.alt}
              label="Dentist examining a cavity before tooth filling in Dubai"
              ratio="aspect-square"
            />
          </motion.div>
        </div>

        {/* "good to know" callout */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-6 overflow-hidden rounded-[24px] px-7 py-8 md:px-10"
          style={{ backgroundColor: BRAND.teal }}
        >
          <div className="flex items-start gap-4">
            <div
              className="flex h-10 w-10 flex-none items-center justify-center rounded-full"
              style={{ backgroundColor: `${BRAND.gold}22` }}
            >
              <Activity size={17} color={BRAND.gold} />
            </div>
            <div>
              <span
                className="text-[11.5px] font-semibold uppercase tracking-[0.14em]"
                style={{ color: BRAND.gold }}
              >
                Good to Know
              </span>
              <p className="mt-2 text-[15px] leading-[1.85] text-white/90">
                {signsYouMayNeedFilling.closing}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
/* ------------------------------------------------------------------ */
/*  SECTION: WHEN SHOULD YOU SEE A DENTIST — signs as a flowing pill    */
/*  cloud (not another checklist), plus a high-contrast urgent-care     */
/*  alert banner that visually breaks from the rest of the page.        */
/* ------------------------------------------------------------------ */
function WhenToSeeADentist() {
  return (
    <section
      id="when-to-see-a-dentist"
      className="scroll-mt-36 px-6 py-20 md:px-10 md:py-28"
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
            <span className="text-[12px] font-semibold uppercase tracking-[0.16em]" style={{ color: BRAND.gold }}>
              Know When to Act
            </span>
          </div>
          <h2
            className="mt-4 text-[1.9rem] leading-tight md:text-[2.4rem]"
            style={{ fontFamily: FONT_DISPLAY, fontWeight: 600, color: BRAND.darkTeal }}
          >
            {whenToSeeADentist.h2}
          </h2>
          <p className="mt-6 text-[15.5px] leading-[1.9] text-neutral-700 md:text-[16.5px]">
            {whenToSeeADentist.intro}
          </p>
        </motion.div>

        {/* flowing pill cloud */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-wrap gap-3"
        >
          {whenToSeeADentist.signs.map((sign, i) => (
            <span
              key={sign}
              className="rounded-full border px-5 py-3 text-[14px] leading-snug"
              style={{
                borderColor: `${BRAND.teal}2a`,
                backgroundColor: "#FFFFFF",
                color: BRAND.darkTeal,
              }}
            >
              {sign}
            </span>
          ))}
        </motion.div>

        {/* urgent care alert */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-10 overflow-hidden rounded-[24px] border-2 px-7 py-7 md:px-9"
          style={{ borderColor: `${DECAY}55`, backgroundColor: `${DECAY}0d` }}
        >
          <div className="flex items-start gap-4">
            <div
              className="flex h-10 w-10 flex-none items-center justify-center rounded-full"
              style={{ backgroundColor: `${DECAY}1a` }}
            >
              <AlertTriangle size={18} color={DECAY} strokeWidth={2} />
            </div>
            <div>
              <span className="text-[11.5px] font-semibold uppercase tracking-[0.14em]" style={{ color: DECAY }}>
                Urgent Care Note
              </span>
              <p className="mt-2 text-[15px] leading-[1.85]" style={{ color: BRAND.darkTeal }}>
                {whenToSeeADentist.urgent}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  SECTION: HOW DENTISTS DIAGNOSE A CAVITY — a converging "funnel":    */
/*  three diagnostic inputs feeding down into a single diagnosis card,  */
/*  instead of a plain 3-column feature grid.                           */
/* ------------------------------------------------------------------ */
function HowDentistsDiagnose() {
  return (
    <section
      id="how-dentists-diagnose-a-cavity"
      className="scroll-mt-36 px-6 py-20 md:px-10 md:py-28"
      style={{ backgroundColor: BRAND.creamLight, fontFamily: FONT_BODY }}
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
            <span className="text-[12px] font-semibold uppercase tracking-[0.16em]" style={{ color: BRAND.gold }}>
              A Clinical Process
            </span>
          </div>
          <h2
            className="mt-4 text-[1.9rem] leading-tight md:text-[2.4rem]"
            style={{ fontFamily: FONT_DISPLAY, fontWeight: 600, color: BRAND.darkTeal }}
          >
            {howDentistsDiagnose.h2}
          </h2>
          <p className="mt-6 text-[15.5px] leading-[1.9] text-neutral-700 md:text-[16.5px]">
            {howDentistsDiagnose.intro}
          </p>
        </motion.div>

        {/* three inputs */}
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {howDentistsDiagnose.inputs.map((input, i) => {
            const Icon = input.icon;
            return (
              <motion.div
                key={input.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-2xl border p-6"
                style={{ borderColor: `${BRAND.teal}1f`, backgroundColor: "#FFFFFF" }}
              >
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-xl"
                  style={{ backgroundColor: `${BRAND.teal}12` }}
                >
                  <Icon size={19} color={BRAND.teal} strokeWidth={1.8} />
                </div>
                <h3 className="mt-4 text-[15.5px] font-semibold" style={{ color: BRAND.darkTeal }}>
                  {input.title}
                </h3>
                <p className="mt-2.5 text-[14px] leading-relaxed text-neutral-600">{input.body}</p>
              </motion.div>
            );
          })}
        </div>

        {/* converging connector */}
        <div className="mx-auto mt-2 hidden h-10 w-px md:block" style={{ backgroundColor: `${BRAND.teal}33` }} />

        {/* diagnosis result card */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto mt-6 max-w-3xl overflow-hidden rounded-[24px] px-8 py-8 text-center md:px-12"
          style={{ backgroundColor: BRAND.darkTeal }}
        >
          <span className="text-[11.5px] font-semibold uppercase tracking-[0.16em]" style={{ color: BRAND.gold }}>
            Diagnosis
          </span>
          <p className="mt-3 text-[15px] leading-[1.85] text-white/85">{howDentistsDiagnose.closing}</p>
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  SECTION: WHAT TO EXPECT DURING TREATMENT — vertical alternating     */
/*  timeline (zigzag left/right on desktop), 8 steps along a central    */
/*  gold line. Distinct from the earlier horizontal 3-stage strip.      */
/* ------------------------------------------------------------------ */
function WhatToExpectTreatment() {
  return (
    <section
      id="what-to-expect"
      className="scroll-mt-36 px-6 py-20 md:px-10 md:py-28"
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
            <span className="text-[12px] font-semibold uppercase tracking-[0.16em]" style={{ color: BRAND.gold }}>
              The Appointment, Step by Step
            </span>
          </div>
          <h2
            className="mt-4 text-[1.9rem] leading-tight md:text-[2.4rem]"
            style={{ fontFamily: FONT_DISPLAY, fontWeight: 600, color: BRAND.darkTeal }}
          >
            {whatToExpectTreatment.h2}
          </h2>
          <p className="mt-6 text-[15.5px] leading-[1.9] text-neutral-700 md:text-[16.5px]">
            {whatToExpectTreatment.intro}
          </p>
        </motion.div>

        {/* vertical zigzag timeline */}
        <div className="relative mt-14">
          <div
            className="absolute left-6 top-0 hidden h-full w-px md:left-1/2 md:block md:-translate-x-1/2"
            style={{ backgroundColor: `${BRAND.gold}44` }}
          />

          <div className="space-y-8 md:space-y-4">
            {whatToExpectTreatment.steps.map((step, i) => {
              const Icon = step.icon;
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.55, delay: (i % 4) * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  className={`relative flex items-start gap-5 md:w-1/2 ${
                    isLeft ? "md:pr-10" : "md:ml-auto md:flex-row-reverse md:pl-10 md:text-right"
                  }`}
                >
                  {/* node */}
                  <span
                    className="absolute -left-0 top-0 flex h-12 w-12 flex-none items-center justify-center rounded-full border-2 md:static"
                    style={{ borderColor: BRAND.gold, backgroundColor: BRAND.creamLight }}
                  >
                    <Icon size={18} color={BRAND.teal} strokeWidth={1.8} />
                  </span>

                  <div className="ml-16 rounded-2xl border bg-white p-5 md:ml-0" style={{ borderColor: `${BRAND.teal}1f` }}>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.14em]" style={{ color: BRAND.gold }}>
                      Step {i + 1}
                    </span>
                    <h3 className="mt-1 text-[15px] font-semibold" style={{ color: BRAND.darkTeal }}>
                      {step.title}
                    </h3>
                    <p className="mt-2 text-[13.5px] leading-relaxed text-neutral-600">{step.body}</p>
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

function TypesOfFillings() {
  return (
    <section
      id="types-of-fillings"
      className="scroll-mt-36 px-6 py-20 md:px-10 md:py-28"
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
            <span
              className="text-[12px] font-semibold uppercase tracking-[0.16em]"
              style={{ color: BRAND.gold }}
            >
              Material Options
            </span>
          </div>
          <h2
            className="mt-4 text-[1.9rem] leading-tight md:text-[2.4rem]"
            style={{ fontFamily: FONT_DISPLAY, fontWeight: 600, color: BRAND.darkTeal }}
          >
            {typesOfFillings.h2}
          </h2>
          <p className="mt-6 text-[15.5px] leading-[1.9] text-neutral-700 md:text-[16.5px]">
            {typesOfFillings.intro}
          </p>
        </motion.div>

        {/* MATERIAL SWATCH BOARD */}
        <div className="mt-14 -mx-6 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4 md:mx-0 md:grid md:grid-cols-4 md:gap-6 md:overflow-visible md:px-0">
          {typesOfFillings.materials.map((m, i) => {
            const Icon = m.icon;
            return (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="flex w-[240px] flex-none snap-start flex-col overflow-hidden rounded-[22px] border md:w-auto"
                style={{ borderColor: `${BRAND.teal}1f`, backgroundColor: "#FFFFFF" }}
              >
                <div className="relative flex h-28 items-center justify-center" style={{ background: m.swatch }}>
                  <div
                    className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/85 backdrop-blur"
                  >
                    <Icon size={16} color={BRAND.darkTeal} strokeWidth={1.8} />
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-2 px-5 py-5">
                  <span
                    className="text-[11px] font-semibold uppercase tracking-[0.1em]"
                    style={{ color: BRAND.gold }}
                  >
                    {m.trait}
                  </span>
                  <h3 className="text-[15.5px] font-semibold" style={{ color: BRAND.darkTeal }}>
                    {m.name}
                  </h3>
                  <p className="text-[13.5px] leading-relaxed text-neutral-600">{m.note}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <p className="mt-8 max-w-3xl text-[14.5px] leading-[1.85] text-neutral-500">
          {typesOfFillings.closing}
        </p>
      </div>
    </section>
  );
}

function CompositeWhiteFillings() {
  return (
    <section
      id="composite-white-fillings"
      className="scroll-mt-36 px-6 py-20 md:px-10 md:py-28"
      style={{ backgroundColor: BRAND.creamLight, fontFamily: FONT_BODY }}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-8" style={{ backgroundColor: BRAND.gold }} />
            <span
              className="text-[12px] font-semibold uppercase tracking-[0.16em]"
              style={{ color: BRAND.gold }}
            >
              Aesthetic Restoration
            </span>
          </div>
          <h2
            className="mt-4 text-[1.9rem] leading-tight md:text-[2.4rem]"
            style={{ fontFamily: FONT_DISPLAY, fontWeight: 600, color: BRAND.darkTeal }}
          >
            {compositeWhiteFillings.h2}
          </h2>
          <div className="mt-6 space-y-5">
            {compositeWhiteFillings.body.map((p, i) => (
              <p key={i} className="text-[15px] leading-[1.9] text-neutral-700 md:text-[15.5px]">
                {p}
              </p>
            ))}
          </div>
        </motion.div>

        {/* SHADE GUIDE STRIP */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-[28px] p-8 md:p-10"
          style={{ backgroundColor: "#FFFFFF", border: `1px solid ${BRAND.teal}1f` }}
        >
          <div className="mb-6 flex items-center gap-2 text-[11.5px] font-semibold uppercase tracking-[0.14em]" style={{ color: BRAND.teal }}>
            <Waves size={14} color={BRAND.gold} />
            Shade Match Guide
          </div>

          <div className="flex items-end gap-2 sm:gap-3">
            {compositeWhiteFillings.shades.map((hex, i) => {
              const isMatch = i === compositeWhiteFillings.matchedIndex;
              return (
                <motion.div
                  key={hex}
                  initial={{ height: 0 }}
                  whileInView={{ height: 64 + i * 6 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  className="relative flex flex-1 items-end justify-center rounded-t-lg"
                  style={{
                    backgroundColor: hex,
                    outline: isMatch ? `2px solid ${BRAND.gold}` : "none",
                    outlineOffset: "2px",
                  }}
                >
                  {isMatch && (
                    <span
                      className="absolute -top-7 whitespace-nowrap rounded-full px-2.5 py-1 text-[10px] font-semibold text-white"
                      style={{ backgroundColor: BRAND.teal }}
                    >
                      Your match
                    </span>
                  )}
                </motion.div>
              );
            })}
          </div>
          <p className="mt-6 text-[13px] leading-relaxed text-neutral-500">
            Composite is shade-matched to sit close to your natural tooth color, rather than one fixed
            shade for every patient.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function ComfortAndDuration() {
  return (
    <section
      className="scroll-mt-36 px-6 py-20 md:px-10 md:py-28"
      style={{ backgroundColor: BRAND.cream, fontFamily: FONT_BODY }}
    >
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[32px]" style={{ backgroundColor: BRAND.darkTeal }}>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* PANEL 1 — DOES IT HURT */}
          <div id="does-a-filling-hurt" className="scroll-mt-36 border-b border-white/10 p-8 md:border-b-0 md:border-r md:p-12" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full" style={{ backgroundColor: `${BRAND.gold}22` }}>
                <Syringe size={17} color={BRAND.gold} />
              </div>
              <span className="text-[11.5px] font-semibold uppercase tracking-[0.14em] text-white/60">
                Comfort
              </span>
            </div>
            <h3 className="mt-5 text-[1.5rem] leading-tight md:text-[1.75rem]" style={{ fontFamily: FONT_DISPLAY, fontWeight: 600, color: "#FFFFFF" }}>
              {doesItHurt.h2}
            </h3>

            {/* comfort gauge */}
            <div className="mt-7">
              <div className="relative h-2 w-full rounded-full" style={{ backgroundColor: "rgba(255,255,255,0.12)" }}>
                <div
                  className="absolute inset-y-0 left-0 rounded-full"
                  style={{ width: "35%", background: `linear-gradient(90deg, ${BRAND.gold}, #E8C9A0)` }}
                />
              </div>
              <div className="mt-2 flex justify-between text-[11px] font-medium text-white/50">
                <span>Numb</span>
                <span>Pressure</span>
                <span>Sensation</span>
              </div>
            </div>

            <div className="mt-7 space-y-4">
              {doesItHurt.body.map((p, i) => (
                <p key={i} className="text-[14px] leading-[1.85] text-white/75">
                  {p}
                </p>
              ))}
            </div>
          </div>

          {/* PANEL 2 — HOW LONG */}
          <div id="how-long-does-a-filling-take" className="scroll-mt-36 p-8 md:p-12">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full" style={{ backgroundColor: `${BRAND.gold}22` }}>
                <Clock size={17} color={BRAND.gold} />
              </div>
              <span className="text-[11.5px] font-semibold uppercase tracking-[0.14em] text-white/60">
                Appointment Length
              </span>
            </div>
            <h3 className="mt-5 text-[1.5rem] leading-tight md:text-[1.75rem]" style={{ fontFamily: FONT_DISPLAY, fontWeight: 600, color: "#FFFFFF" }}>
              {howLongDoesItTake.h2}
            </h3>

            {/* duration indicator */}
            <div className="mt-7 flex items-center gap-4">
              <div className="flex flex-1 items-center gap-2">
                <div className="h-2 flex-1 rounded-full" style={{ backgroundColor: BRAND.gold, opacity: 0.9 }} />
                <span className="text-[11px] font-medium text-white/50 whitespace-nowrap">Simple · single visit</span>
              </div>
            </div>
            <div className="mt-3 flex items-center gap-4">
              <div className="flex flex-1 items-center gap-2">
                <div className="h-2 w-2/3 rounded-full" style={{ backgroundColor: "rgba(255,255,255,0.25)" }} />
                <span className="text-[11px] font-medium text-white/50 whitespace-nowrap">Complex · multiple visits</span>
              </div>
            </div>

            <p className="mt-7 text-[14px] leading-[1.85] text-white/75">{howLongDoesItTake.body}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
function FillingVsRootCanalVsCrown() {
  return (
    <section
      id="filling-vs-root-canal-vs-crown"
      className="scroll-mt-36 px-6 py-20 md:px-10 md:py-28"
      style={{ backgroundColor: BRAND.creamLight, fontFamily: FONT_BODY }}
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
            <span className="text-[12px] font-semibold uppercase tracking-[0.16em]" style={{ color: BRAND.gold }}>
              Comparing Treatments
            </span>
          </div>
          <h2
            className="mt-4 text-[1.9rem] leading-tight md:text-[2.4rem]"
            style={{ fontFamily: FONT_DISPLAY, fontWeight: 600, color: BRAND.darkTeal }}
          >
            {fillingVsRootCanalVsCrown.h2}
          </h2>
          <p className="mt-6 text-[15.5px] leading-[1.9] text-neutral-700 md:text-[16.5px]">
            {fillingVsRootCanalVsCrown.intro}
          </p>
        </motion.div>

        {/* ASCENDING STAIRCASE */}
        <div className="mt-14 flex flex-col items-stretch gap-4 md:flex-row md:items-end md:gap-4">
          {fillingVsRootCanalVsCrown.tiers.map((tier, i) => {
            const Icon = tier.icon;
            const heights = ["md:h-[180px]", "md:h-[220px]", "md:h-[260px]"];
            return (
              <motion.div
                key={tier.treatment}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className={`flex flex-1 flex-col justify-between rounded-2xl border p-6 ${heights[i]}`}
                style={{
                  borderColor: `${BRAND.teal}1f`,
                  backgroundColor: i === 2 ? BRAND.darkTeal : "#FFFFFF",
                }}
              >
                <div>
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-full"
                    style={{ backgroundColor: i === 2 ? `${BRAND.gold}22` : `${BRAND.teal}12` }}
                  >
                    <Icon size={17} color={i === 2 ? BRAND.gold : BRAND.teal} strokeWidth={1.8} />
                  </div>
                  <span
                    className="mt-4 block text-[11px] font-semibold uppercase tracking-[0.12em]"
                    style={{ color: i === 2 ? BRAND.gold : BRAND.gold }}
                  >
                    Step {i + 1}
                  </span>
                  <h3
                    className="mt-1 text-[17px] font-semibold"
                    style={{ color: i === 2 ? "#FFFFFF" : BRAND.darkTeal }}
                  >
                    {tier.treatment}
                  </h3>
                </div>
                <p
                  className="mt-4 text-[13.5px] leading-relaxed"
                  style={{ color: i === 2 ? "rgba(255,255,255,0.8)" : "#525252" }}
                >
                  {tier.when}
                </p>
              </motion.div>
            );
          })}
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-[14.5px] leading-[1.9] text-neutral-600">
          If the decay has reached the inner part of the tooth, your dentist may discuss whether{" "}
          <Link href="/services/root-canal-treatment-dubai" className="font-semibold text-[#1F5E4B] underline underline-offset-4 decoration-[#1F5E4B]44 hover:decoration-[#1F5E4B]">
            root canal treatment in Dubai
          </Link>{" "}
          is more appropriate than a conventional filling. Please don't attempt to self-diagnose based on symptoms alone — pain levels don't always correlate directly with the extent of internal damage, and only a clinical exam (often with an X-ray) can confirm what's actually happening inside the tooth.
        </p>
      </div>
    </section>
  );
}
function WhenFillingNotEnough() {
  return (
    <section
      id="when-a-filling-may-not-be-enough"
      className="scroll-mt-36 px-6 py-20 md:px-10 md:py-28"
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
            <span className="text-[12px] font-semibold uppercase tracking-[0.16em]" style={{ color: BRAND.gold }}>
              A Realistic Limit
            </span>
          </div>
          <h2
            className="mt-4 text-[1.9rem] leading-tight md:text-[2.4rem]"
            style={{ fontFamily: FONT_DISPLAY, fontWeight: 600, color: BRAND.darkTeal }}
          >
            {whenFillingNotEnough.h2}
          </h2>
        </motion.div>

        {/* SIGNAL LIST */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 overflow-hidden rounded-[28px]"
          style={{ backgroundColor: BRAND.darkTeal }}
        >
          <div className="px-7 pt-7 md:px-10 md:pt-9">
            <span className="text-[11.5px] font-semibold uppercase tracking-[0.14em] text-white/50">
              {whenFillingNotEnough.intro}
            </span>
          </div>
          <div className="mt-4 divide-y" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
            {whenFillingNotEnough.flags.map((flag, i) => (
              <div
                key={flag}
                className="flex items-start gap-4 px-7 py-4 md:px-10"
                style={{ borderColor: "rgba(255,255,255,0.08)" }}
              >
                <AlertOctagon size={16} className="mt-0.5 flex-none" color={BRAND.gold} strokeWidth={1.8} />
                <span className="text-[14px] leading-snug text-white/85">{flag}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ALTERNATIVES STRIP */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8"
        >
          <span className="text-[11.5px] font-semibold uppercase tracking-[0.14em]" style={{ color: BRAND.gold }}>
            Possible alternatives your dentist might discuss
          </span>
          <div className="mt-4 flex flex-wrap gap-3">
            {whenFillingNotEnough.alternatives.map((alt) => {
              const linkHref = alt.includes("Root canal")
                ? "/services/root-canal-treatment-dubai"
                : alt.includes("crown") || alt.includes("Crown")
                ? "/services/dental-crown-bridges-dubai"
                : null;

              if (linkHref) {
                return (
                  <a
                    key={alt}
                    href={linkHref}
                    className="inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-[13.5px] font-medium transition-colors hover:border-[#1F5E4B] hover:text-[#1F5E4B]"
                    style={{ borderColor: `${BRAND.teal}2a`, color: BRAND.darkTeal, backgroundColor: "#FFFFFF" }}
                  >
                    {alt}
                    <ArrowUpRight size={13} color={BRAND.teal} />
                  </a>
                );
              }

              return (
                <span
                  key={alt}
                  className="inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-[13.5px] font-medium"
                  style={{ borderColor: `${BRAND.teal}2a`, color: BRAND.darkTeal, backgroundColor: "#FFFFFF" }}
                >
                  {alt}
                  <ArrowUpRight size={13} color={BRAND.teal} />
                </span>
              );
            })}
          </div>
          <p className="mt-6 max-w-3xl text-[14.5px] leading-[1.9] text-neutral-600">
            {whenFillingNotEnough.closing}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function BenefitsOfFillings() {
  return (
    <section
      id="benefits-of-fillings"
      className="scroll-mt-36 px-6 py-20 md:px-10 md:py-28"
      style={{ backgroundColor: BRAND.creamLight, fontFamily: FONT_BODY }}
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
            <span className="text-[12px] font-semibold uppercase tracking-[0.16em]" style={{ color: BRAND.gold }}>
              What a Filling Restores
            </span>
          </div>
          <h2
            className="mt-4 text-[1.9rem] leading-tight md:text-[2.4rem]"
            style={{ fontFamily: FONT_DISPLAY, fontWeight: 600, color: BRAND.darkTeal }}
          >
            {benefitsOfFillings.h2}
          </h2>
          <p className="mt-6 text-[15.5px] leading-[1.9] text-neutral-700 md:text-[16.5px]">
            {benefitsOfFillings.intro}
          </p>
        </motion.div>

        {/* SEAL WALL */}
        <div className="mt-14 flex flex-wrap gap-4">
          {benefitsOfFillings.benefits.map((benefit, i) => (
            <motion.div
              key={benefit}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: (i % 4) * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="flex w-full items-center gap-4 rounded-full border py-3 pl-3 pr-6 sm:w-[calc(50%-8px)]"
              style={{ borderColor: `${BRAND.teal}1f`, backgroundColor: "#FFFFFF" }}
            >
              <span
                className="flex h-10 w-10 flex-none items-center justify-center rounded-full"
                style={{
                  background: `radial-gradient(circle at 35% 30%, ${BRAND.gold}, #B8895A)`,
                }}
              >
                <BadgeCheck size={17} color="#FFFFFF" strokeWidth={2} />
              </span>
              <span className="text-[14px] leading-snug text-neutral-700">{benefit}</span>
            </motion.div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-[14.5px] leading-[1.9] text-neutral-600">
          {benefitsOfFillings.closing}
        </p>
      </div>
    </section>
  );
}
function Aftercare() {
  const [activeTab, setActiveTab] = useState(0);
  const tab = aftercare.tabs[activeTab];
  const ActiveIcon = tab.icon;

  return (
    <section
      id="aftercare"
      className="scroll-mt-36 px-6 py-20 md:px-10 md:py-28"
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
            <span className="text-[12px] font-semibold uppercase tracking-[0.16em]" style={{ color: BRAND.gold }}>
              Recovery
            </span>
          </div>
          <h2
            className="mt-4 text-[1.9rem] leading-tight md:text-[2.4rem]"
            style={{ fontFamily: FONT_DISPLAY, fontWeight: 600, color: BRAND.darkTeal }}
          >
            {aftercare.h2}
          </h2>
          <p className="mt-6 text-[15.5px] leading-[1.9] text-neutral-700 md:text-[16.5px]">
            {aftercare.intro}
          </p>
        </motion.div>

        {/* TAB SWITCHER CARD */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 overflow-hidden rounded-[28px] border"
          style={{ borderColor: `${BRAND.teal}1f`, backgroundColor: "#FFFFFF" }}
        >
          <div className="flex border-b" style={{ borderColor: `${BRAND.teal}14` }}>
            {aftercare.tabs.map((t, i) => {
              const TIcon = t.icon;
              const isActive = i === activeTab;
              return (
                <button
                  key={t.key}
                  type="button"
                  onClick={() => setActiveTab(i)}
                  className="relative flex flex-1 items-center justify-center gap-2 px-4 py-5 text-[14px] font-semibold transition-colors"
                  style={{ color: isActive ? BRAND.darkTeal : "#A3A3A3" }}
                >
                  <TIcon size={16} color={isActive ? BRAND.teal : "#A3A3A3"} />
                  {t.label}
                  {isActive && (
                    <motion.span
                      layoutId="aftercare-underline"
                      className="absolute bottom-0 left-0 h-[3px] w-full"
                      style={{ backgroundColor: BRAND.gold }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={tab.key}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-4 px-7 py-8 md:px-10"
            >
              {tab.items.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={17} className="mt-0.5 flex-none" color={BRAND.teal} strokeWidth={1.8} />
                  <span className="text-[14.5px] leading-snug text-neutral-700">{item}</span>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          <div className="flex items-start gap-3 border-t px-7 py-5 md:px-10" style={{ borderColor: `${BRAND.teal}14`, backgroundColor: BRAND.creamLight }}>
            <Info size={15} className="mt-0.5 flex-none" color={BRAND.gold} />
            <p className="text-[13.5px] leading-relaxed text-neutral-600">{aftercare.note}</p>
          </div>
        </motion.div>

        {/* CONTACT-IF ALERT GRID */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-6 overflow-hidden rounded-[24px] border-2 px-7 py-7 md:px-10"
          style={{ borderColor: `${DECAY}55`, backgroundColor: `${DECAY}0d` }}
        >
          <div className="flex items-center gap-3">
            <ShieldAlert size={18} color={DECAY} strokeWidth={2} />
            <span className="text-[11.5px] font-semibold uppercase tracking-[0.14em]" style={{ color: DECAY }}>
              Contact Your Dentist If You Notice
            </span>
          </div>
          <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
            {aftercare.contactIf.map((flag) => (
              <div key={flag} className="flex items-start gap-2.5">
                <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full" style={{ backgroundColor: DECAY }} />
                <span className="text-[14px] leading-snug" style={{ color: BRAND.darkTeal }}>
                  {flag}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function HowLongFillingsLast() {
  const factors = howLongFillingsLast.factors;
  const radius = 150;

  return (
    <section
      id="how-long-do-fillings-last"
      className="scroll-mt-36 px-6 py-20 md:px-10 md:py-28"
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
            <span className="text-[12px] font-semibold uppercase tracking-[0.16em]" style={{ color: BRAND.gold }}>
              Longevity
            </span>
            <span className="h-px w-8" style={{ backgroundColor: BRAND.gold }} />
          </div>
          <h2
            className="mt-4 text-[1.9rem] leading-tight md:text-[2.4rem]"
            style={{ fontFamily: FONT_DISPLAY, fontWeight: 600, color: BRAND.darkTeal }}
          >
            {howLongFillingsLast.h2}
          </h2>
          <p className="mt-6 text-[15.5px] leading-[1.9] text-neutral-700 md:text-[16.5px]">
            {howLongFillingsLast.intro}
          </p>
        </motion.div>

        {/* RADIAL DIAL — desktop */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto mt-16 hidden"
          style={{ width: radius * 2 + 220, height: radius * 2 + 40 }}
        >
          <div className="hidden md:block">
            {factors.map((factor, i) => {
              const angle = (i / factors.length) * 2 * Math.PI - Math.PI / 2;
              const x = radius * Math.cos(angle);
              const y = radius * Math.sin(angle);
              return (
                <div key={factor}>
                  <svg className="pointer-events-none absolute left-1/2 top-1/2" style={{ overflow: "visible" }}>
                    <line
                      x1={0}
                      y1={0}
                      x2={x}
                      y2={y}
                      stroke={`${BRAND.teal}33`}
                      strokeWidth={1.5}
                      strokeDasharray="3 4"
                    />
                  </svg>
                  <div
                    className="absolute flex w-[130px] -translate-x-1/2 -translate-y-1/2 items-start gap-2 rounded-xl border bg-white px-3 py-2.5"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      borderColor: `${BRAND.teal}1f`,
                    }}
                  >
                    <Repeat2 size={13} className="mt-0.5 flex-none" color={BRAND.gold} />
                    <span className="text-[12px] font-medium leading-snug text-neutral-700">{factor}</span>
                  </div>
                </div>
              );
            })}
          </div>

          <div
            className="absolute left-1/2 top-1/2 flex h-[132px] w-[132px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full text-center"
            style={{ backgroundColor: BRAND.darkTeal }}
          >
            <span className="text-[22px] font-semibold text-white" style={{ fontFamily: FONT_DISPLAY }}>
              Varies
            </span>
            <span className="mt-1 px-4 text-[11px] leading-tight text-white/60">no fixed lifespan</span>
          </div>
        </motion.div>

        {/* MOBILE fallback — simple chip list */}
        <div className="mt-12 flex flex-wrap justify-center gap-2.5 md:hidden">
          {factors.map((factor) => (
            <span
              key={factor}
              className="inline-flex items-center gap-1.5 rounded-full border bg-white px-3.5 py-2 text-[12.5px] font-medium text-neutral-700"
              style={{ borderColor: `${BRAND.teal}1f` }}
            >
              <Repeat2 size={12} color={BRAND.gold} />
              {factor}
            </span>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center text-[14.5px] leading-[1.9] text-neutral-600">
          {howLongFillingsLast.closing}
        </p>
      </div>
    </section>
  );
}

function BeforeAfter() {
  return (
    <section
      id="before-after"
      className="scroll-mt-36 px-6 py-20 md:px-10 md:py-28"
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
            <span className="text-[12px] font-semibold uppercase tracking-[0.16em]" style={{ color: BRAND.gold }}>
              Setting Expectations
            </span>
          </div>
          <h2
            className="mt-4 text-[1.9rem] leading-tight md:text-[2.4rem]"
            style={{ fontFamily: FONT_DISPLAY, fontWeight: 600, color: BRAND.darkTeal }}
          >
            {beforeAfter.h2}
          </h2>
          <p className="mt-6 text-[15.5px] leading-[1.9] text-neutral-700 md:text-[16.5px]">
            {beforeAfter.body}
          </p>
        </motion.div>

        {/* SPLIT PANEL WITH SEAM */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-14 grid grid-cols-1 gap-0 overflow-hidden rounded-[28px] border sm:grid-cols-2"
          style={{ borderColor: `${BRAND.teal}1f` }}
        >
          <div className="relative aspect-square overflow-hidden">
            <img
              src="/images/tooth filling before.jpg"
              alt="tooth filling before and after dental restoration"
              className="h-full w-full object-cover"
            />
            <span
              className="absolute left-4 top-4 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-white"
              style={{ backgroundColor: BRAND.darkTeal }}
            >
              Before
            </span>
          </div>
          <div className="relative aspect-square overflow-hidden">
            <img
              src="/images/tooth filling after.jpg"
              alt="tooth filling before and after dental restoration"
              className="h-full w-full object-cover"
            />
            <span
              className="absolute left-4 top-4 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-white"
              style={{ backgroundColor: BRAND.teal }}
            >
              After
            </span>
          </div>

          {/* center seam badge, desktop */}
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 hidden h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full sm:flex"
            style={{ backgroundColor: BRAND.gold }}>
            <ArrowRight size={16} color="#FFFFFF" />
          </div>
        </motion.div>

        <div className="mx-auto mt-6 flex max-w-3xl items-start gap-3">
          <Info size={15} className="mt-0.5 flex-none" color={BRAND.gold} />
          <p className="text-[13.5px] leading-relaxed text-neutral-500">{beforeAfter.disclosure}</p>
        </div>
      </div>
    </section>
  );
}

function CostInDubai() {
  return (
    <section
      id="cost-in-dubai"
      className="scroll-mt-36 px-6 py-20 md:px-10 md:py-28"
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
            <span className="text-[12px] font-semibold uppercase tracking-[0.16em]" style={{ color: BRAND.gold }}>
              Practical Info
            </span>
          </div>
          <h2
            className="mt-4 text-[1.9rem] leading-tight md:text-[2.4rem]"
            style={{ fontFamily: FONT_DISPLAY, fontWeight: 600, color: BRAND.darkTeal }}
          >
            {costInDubai.h2}
          </h2>
          <p className="mt-6 text-[15.5px] leading-[1.9] text-neutral-700 md:text-[16.5px]">
            {costInDubai.intro}
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          {/* LOCKED ESTIMATE CARD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center justify-center rounded-[28px] px-8 py-12 text-center"
            style={{ backgroundColor: BRAND.darkTeal }}
          >
            <div className="relative flex h-20 w-20 items-center justify-center rounded-full" style={{ backgroundColor: `${BRAND.gold}1f` }}>
              <Wallet size={28} color={BRAND.gold} strokeWidth={1.6} />
              <span
                className="absolute -bottom-1 -right-1 flex h-8 w-8 items-center justify-center rounded-full border-2"
                style={{ backgroundColor: BRAND.darkTeal, borderColor: BRAND.gold }}
              >
                <Lock size={13} color={BRAND.gold} />
              </span>
            </div>
            <span className="mt-6 text-[13px] font-semibold uppercase tracking-[0.14em] text-white/60">
              No fixed price
            </span>
            <p className="mt-2 text-[14.5px] leading-relaxed text-white/80">
              An accurate estimate is unlocked only after a clinical examination.
            </p>
          </motion.div>

          {/* FACTOR STACKS */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl border bg-white p-6"
              style={{ borderColor: `${BRAND.teal}1f` }}
            >
              <span className="text-[11.5px] font-semibold uppercase tracking-[0.12em]" style={{ color: BRAND.gold }}>
                What Affects Cost
              </span>
              <div className="mt-4 space-y-3">
                {costInDubai.factors.map((f) => (
                  <div key={f} className="flex items-start gap-2.5">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full" style={{ backgroundColor: BRAND.teal }} />
                    <span className="text-[13.5px] leading-snug text-neutral-700">{f}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl border p-6"
              style={{ borderColor: `${BRAND.teal}1f`, backgroundColor: BRAND.creamLight }}
            >
              <span className="text-[11.5px] font-semibold uppercase tracking-[0.12em]" style={{ color: BRAND.gold }}>
                Worth Weighing Beyond Price
              </span>
              <div className="mt-4 space-y-3">
                {costInDubai.weigh.map((f) => (
                  <div key={f} className="flex items-start gap-2.5">
                    <CheckCircle2 size={14} className="mt-0.5 flex-none" color={BRAND.teal} />
                    <span className="text-[13.5px] leading-snug text-neutral-700">{f}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        <p className="mx-auto mt-8 max-w-3xl text-[14.5px] leading-[1.9] text-neutral-600">
          {costInDubai.closing}
        </p>
      </div>
    </section>
  );
}
function Insurance() {
  return (
    <section
      id="insurance"
      className="scroll-mt-36 px-6 py-20 md:px-10 md:py-28"
      style={{ backgroundColor: BRAND.creamLight, fontFamily: FONT_BODY }}
    >
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-8" style={{ backgroundColor: BRAND.gold }} />
              <span className="text-[12px] font-semibold uppercase tracking-[0.16em]" style={{ color: BRAND.gold }}>
                Coverage
              </span>
            </div>
            <h2
              className="mt-4 text-[1.7rem] leading-tight md:text-[2.1rem]"
              style={{ fontFamily: FONT_DISPLAY, fontWeight: 600, color: BRAND.darkTeal }}
            >
              {insurance.h2}
            </h2>
            <p className="mt-6 text-[15px] leading-[1.9] text-neutral-700 md:text-[15.5px]">
              {insurance.body}
            </p>
            <p className="mt-4 text-[15px] leading-[1.9] text-neutral-700 md:text-[15.5px]">
              {insurance.closing}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-[24px] border bg-white p-7"
            style={{ borderColor: `${BRAND.teal}1f` }}
          >
            <div className="flex items-center gap-3">
              <ShieldCheck size={18} color={BRAND.teal} />
              <span className="text-[11.5px] font-semibold uppercase tracking-[0.13em]" style={{ color: BRAND.teal }}>
                Coverage Depends On
              </span>
            </div>
            <div className="mt-4 space-y-0">
              {insurance.factors.map((f, i) => (
                <div
                  key={f}
                  className="flex items-center justify-between border-b py-3 text-[13.5px] text-neutral-700 last:border-none"
                  style={{ borderColor: `${BRAND.teal}14` }}
                >
                  {f}
                  <span className="font-serif text-[12px] text-neutral-300" style={{ fontFamily: FONT_DISPLAY }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              ))}
            </div>
            <a
              href="https://wa.me/971566597878?text=Hello%20RamaCare%20Polyclinic!%20I'm%20not%20sure%20if%20I%20need%20a%20tooth%20filling,%20root%20canal,%20or%20crown.%20Can%20your%20team%20help%20clarify?"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex items-center gap-3 rounded-xl px-4 py-3.5 transition-transform hover:scale-[1.01]"
              style={{ backgroundColor: BRAND.teal }}
            >
              <PhoneCall size={15} color="#FFFFFF" />
              <span className="text-[13px] font-medium text-white">Not sure? Our team can help clarify.</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
function PreventingCavities() {
  return (
    <section
      id="preventing-future-cavities"
      className="scroll-mt-36 px-6 py-20 md:px-10 md:py-28"
      style={{ backgroundColor: BRAND.cream, fontFamily: FONT_BODY }}
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
            <span className="text-[12px] font-semibold uppercase tracking-[0.16em]" style={{ color: BRAND.gold }}>
              Prevention
            </span>
            <span className="h-px w-8" style={{ backgroundColor: BRAND.gold }} />
          </div>
          <h2
            className="mt-4 text-[1.9rem] leading-tight md:text-[2.4rem]"
            style={{ fontFamily: FONT_DISPLAY, fontWeight: 600, color: BRAND.darkTeal }}
          >
            {preventingCavities.h2}
          </h2>
          <p className="mt-6 text-[15.5px] leading-[1.9] text-neutral-700 md:text-[16.5px]">
            {preventingCavities.intro}
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {preventingCavities.habits.map((h, i) => {
            const Icon = h.icon;
            return (
              <motion.div
                key={h.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="flex aspect-square flex-col items-center justify-center gap-3 rounded-2xl border bg-white p-4 text-center"
                style={{ borderColor: `${BRAND.teal}1f` }}
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full" style={{ backgroundColor: `${BRAND.teal}12` }}>
                  <Icon size={18} color={BRAND.teal} strokeWidth={1.8} />
                </div>
                <span className="text-[12.5px] font-medium leading-snug text-neutral-700">{h.label}</span>
              </motion.div>
            );
          })}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-[14.5px] leading-[1.9] text-neutral-600">
          {preventingCavities.closing}
        </p>
      </div>
    </section>
  );
}
function WhyRamaCare() {
  return (
    <section
      id="why-ramacare"
      className="scroll-mt-36 px-6 py-20 md:px-10 md:py-28"
      style={{ backgroundColor: BRAND.creamLight, fontFamily: FONT_BODY }}
    >
      <div className="mx-auto max-w-4xl">
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
              The Clinic
            </span>
          </div>
          <h2
            className="mt-4 text-[1.9rem] leading-tight md:text-[2.4rem]"
            style={{ fontFamily: FONT_DISPLAY, fontWeight: 600, color: BRAND.darkTeal }}
          >
            {whyRamaCare.h2}
          </h2>
        </motion.div>

        <div className="mt-14 space-y-3">
          {whyRamaCare.pillars.map((p, i) => {
            const Icon = p.icon;
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, x: isEven ? -16 : 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className={`relative overflow-hidden rounded-2xl border bg-white p-6 md:p-7 ${isEven ? "md:mr-10" : "md:ml-10"}`}
                style={{ borderColor: `${BRAND.teal}1f` }}
              >
                <span
                  className="pointer-events-none absolute -right-2 -top-4 text-[80px] font-semibold leading-none"
                  style={{ fontFamily: FONT_DISPLAY, color: `${BRAND.teal}08` }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="relative flex items-start gap-4">
                  <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl" style={{ backgroundColor: `${BRAND.teal}12` }}>
                    <Icon size={19} color={BRAND.teal} strokeWidth={1.8} />
                  </div>
                  <div>
                    <h3 className="text-[15.5px] font-semibold" style={{ color: BRAND.darkTeal }}>
                      {p.title}
                    </h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-neutral-600">{p.body}</p>
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
function PatientJourney() {
  const scrollRef = useRef(null);

  const scrollRail = (direction) => {
    if (scrollRef.current) {
      const amount = direction === "left" ? -280 : 280;
      scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  return (
    <section
      id="patient-journey"
      className="scroll-mt-36 px-6 py-20 md:px-10 md:py-28"
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
              <span className="text-[12px] font-semibold uppercase tracking-[0.16em]" style={{ color: BRAND.gold }}>
                From Booking to Prevention
              </span>
            </div>
            <h2
              className="mt-4 text-[1.9rem] leading-tight md:text-[2.4rem]"
              style={{ fontFamily: FONT_DISPLAY, fontWeight: 600, color: BRAND.darkTeal }}
            >
              {patientJourney.h2}
            </h2>
            <p className="mt-4 text-[15.5px] leading-[1.9] text-neutral-700">
              {patientJourney.intro}
            </p>
          </motion.div>
        
          {/* ARROW CONTROLS */}
          <div className="flex items-center gap-2 flex-none">
            <button
              type="button"
              onClick={() => scrollRail("left")}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-xs border text-neutral-700 hover:bg-[#1F5E4B] hover:text-white transition-all active:scale-95"
              style={{ borderColor: `${BRAND.teal}22` }}
              aria-label="Previous step">
              <ChevronLeft size={16} />
            </button>
            <button
              type="button"
              onClick={() => scrollRail("right")}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-xs border text-neutral-700 hover:bg-[#1F5E4B] hover:text-white transition-all active:scale-95"
              style={{ borderColor: `${BRAND.teal}22` }}
              aria-label="Next step">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* HORIZONTAL RAIL - HIDE SCROLLBAR COMPLETELY */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          ref={scrollRef}
          className="no-scrollbar relative mt-12 overflow-x-auto py-4 scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div className="relative flex min-w-max items-start gap-0 px-1">
            <div
              className="absolute left-0 right-0 top-[19px] h-px"
              style={{ backgroundColor: `${BRAND.teal}33` }}
            />
            {patientJourney.steps.map((step, i) => (
              <div key={step} className="relative flex w-[180px] flex-none flex-col items-start">
                <span
                  className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 text-[12px] font-bold shadow-xs"
                  style={{
                    borderColor: BRAND.gold,
                    backgroundColor: i === 0 || i === patientJourney.steps.length - 1 ? BRAND.gold : BRAND.creamLight,
                    color: i === 0 || i === patientJourney.steps.length - 1 ? "#FFFFFF" : BRAND.teal,
                  }}
                >
                  {i + 1}
                </span>
                <p className="mt-3 pr-4 text-[13.5px] font-semibold leading-snug" style={{ color: BRAND.darkTeal }}>
                  {step}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <p className="mx-auto mt-8 max-w-3xl text-[14.5px] leading-[1.9] text-neutral-600">
          {patientJourney.closing}
        </p>
      </div>
    </section>
  );
}

function FAQs() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);
  const current = faqCategories[activeCategory];

  return (
    <section
      id="faqs"
      className="scroll-mt-36 px-6 py-20 md:px-10 md:py-28"
      style={{ backgroundColor: BRAND.creamLight, fontFamily: FONT_BODY }}
    >
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8" style={{ backgroundColor: BRAND.gold }} />
            <span className="text-[12px] font-semibold uppercase tracking-[0.16em]" style={{ color: BRAND.gold }}>
              FAQs
            </span>
            <span className="h-px w-8" style={{ backgroundColor: BRAND.gold }} />
          </div>
          <h2
            className="mt-4 text-[1.9rem] leading-tight md:text-[2.4rem]"
            style={{ fontFamily: FONT_DISPLAY, fontWeight: 600, color: BRAND.darkTeal }}
          >
            Frequently Asked Questions
          </h2>
        </motion.div>

        {/* CATEGORY CHIPS */}
        <div className="mt-10 flex flex-wrap justify-center gap-2.5">
          {faqCategories.map((cat, i) => {
            const isActive = i === activeCategory;
            return (
              <button
                key={cat.key}
                type="button"
                onClick={() => {
                  setActiveCategory(i);
                  setOpenFaq(null);
                }}
                className="rounded-full border px-4 py-2 text-[13px] font-medium transition-colors"
                style={{
                  borderColor: isActive ? BRAND.teal : `${BRAND.teal}22`,
                  backgroundColor: isActive ? BRAND.teal : "#FFFFFF",
                  color: isActive ? "#FFFFFF" : BRAND.darkTeal,
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* EXPAND LIST */}
        <div className="mt-8 space-y-2.5">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.key}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="space-y-2.5"
            >
              {current.faqs.map((faq, i) => {
                const isOpen = openFaq === i;
                return (
                  <div
                    key={faq.q}
                    className="overflow-hidden rounded-2xl border bg-white"
                    style={{ borderColor: `${BRAND.teal}1f` }}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    >
                      <span className="text-[14.5px] font-medium" style={{ color: BRAND.darkTeal }}>
                        {faq.q}
                      </span>
                      <span
                        className="flex h-7 w-7 flex-none items-center justify-center rounded-full"
                        style={{ backgroundColor: `${BRAND.teal}12` }}
                      >
                        {isOpen ? <Minus size={13} color={BRAND.teal} /> : <Plus size={13} color={BRAND.teal} />}
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="px-5 pb-4 text-[13.5px] leading-relaxed text-neutral-600">{faq.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
function BookConsultation() {
  return (
    <section
      id="book-consultation"
      className="scroll-mt-36 px-6 py-20 md:px-10 md:py-28"
      style={{ backgroundColor: BRAND.cream, fontFamily: FONT_BODY }}
    >
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[32px] px-8 py-14 md:px-16 md:py-20"
          style={{ backgroundColor: BRAND.darkTeal }}
        >
          {/* diagonal gold accent */}
          <div
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full"
            style={{ background: `radial-gradient(circle, ${BRAND.gold}22, transparent 70%)` }}
          />

          <div className="relative mx-auto max-w-2xl text-center">
            <span className="text-[12px] font-semibold uppercase tracking-[0.16em]" style={{ color: BRAND.gold }}>
              {bookConsultation.eyebrow}
            </span>
            <h2
              className="mt-4 text-[2rem] leading-tight md:text-[2.6rem]"
              style={{ fontFamily: FONT_DISPLAY, fontWeight: 600, color: "#FFFFFF" }}
            >
              {bookConsultation.h2}
            </h2>
            <p className="mt-6 text-[15px] leading-[1.9] text-white/75 md:text-[15.5px]">
              {bookConsultation.body}
            </p>
            <p className="mt-4 text-[15px] leading-[1.9] text-white/75 md:text-[15.5px]">
              {bookConsultation.sub}
            </p>

            <div className="mt-9 flex flex-col items-center gap-4">
              <a
                href="https://wa.me/971566597878?text=Hello%20RamaCare%20Polyclinic!%20I%20would%20like%20to%20book%20a%20Dental%20Tooth%20Filling%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full px-8 py-4 text-[14.5px] font-semibold shadow-sm transition-transform hover:-translate-y-0.5"
                style={{ backgroundColor: BRAND.gold, color: BRAND.darkTeal }}
              >
                Book a Dental Consultation
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>

              <div className="mt-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[13.5px] text-white/70">
                <a href="tel:+97142862006" className="flex items-center gap-2 hover:text-white transition-colors">
                  <PhoneCall size={15} color={BRAND.gold} />
                  {bookConsultation.phone}
                </a>
                <a
                  href="https://wa.me/971566597878?text=Hello%20RamaCare%20Polyclinic!%20I%20have%20a%20question%20about%20Dental%20Tooth%20Filling%20treatment%20in%20Dubai."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Send size={15} color={BRAND.gold} />
                  WhatsApp {bookConsultation.whatsapp}
                </a>
                <span className="flex items-center gap-2">
                  <Navigation size={15} color={BRAND.gold} />
                  {bookConsultation.address}
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CONCLUSION */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-10 max-w-3xl text-center text-[14.5px] leading-[1.9] text-neutral-600"
        >
          {bookConsultation.conclusion}
        </motion.p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  SEO SCHEMAS — Structured JSON-LD Data                             */
/* ------------------------------------------------------------------ */
const clinicSchema = {
  "@context": "https://schema.org",
  "@type": ["Dentist", "MedicalClinic", "LocalBusiness"],
  "@id": "https://ramacarepolyclinic.com/dental-tooth-filling-dubai#clinic",
  "name": "RamaCare Polyclinic",
  "image": "https://ramacarepolyclinic.com/images/ramacare-dental-clinic-jumeirah-1.jpg",
  "url": "https://ramacarepolyclinic.com/dental-tooth-filling-dubai",
  "telephone": "+971-4-286-2006",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Jumeirah Terrace Building, Jumeirah 1",
    "addressLocality": "Dubai",
    "addressRegion": "Dubai",
    "postalCode": "393558",
    "addressCountry": "AE"
  },
  "areaServed": { "@type": "City", "name": "Dubai" },
  "medicalSpecialty": "Dentistry",
  "availableService": {
    "@type": "MedicalProcedure",
    "name": "Dental Tooth Filling",
    "alternateName": ["Tooth Filling", "Dental Filling", "Cavity Filling"]
  },
  "sameAs": ["https://ramacarepolyclinic.com/", "https://ramacarepolyclinic.ae/"]
};

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  "@id": "https://ramacarepolyclinic.com/dental-tooth-filling-dubai#webpage",
  "url": "https://ramacarepolyclinic.com/dental-tooth-filling-dubai",
  "name": "Dental Tooth Filling in Dubai | RamaCare Polyclinic",
  "description": "Get Dental Tooth Filling in Dubai at RamaCare Polyclinic. Professional cavity assessment, tooth-colored fillings and restorative care. Book a consultation.",
  "inLanguage": "en-AE",
  "lastReviewed": "2026-08-19",
  "medicalAudience": { "@type": "Patient" },
  "about": {
    "@type": "MedicalProcedure",
    "name": "Dental Filling",
    "alternateName": "Tooth Filling",
    "procedureType": "https://schema.org/NoninvasiveProcedure",
    "bodyLocation": "Tooth"
  },
  "publisher": { "@id": "https://ramacarepolyclinic.com/dental-tooth-filling-dubai#clinic" },
  "reviewedBy": { "@type": "Organization", "name": "RamaCare Polyclinic Dental Team" }
};

const procedureSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  "name": "Dental Tooth Filling",
  "alternateName": ["Tooth Filling", "Dental Filling", "Composite Filling", "Cavity Filling"],
  "procedureType": "https://schema.org/NoninvasiveProcedure",
  "bodyLocation": "Tooth",
  "howPerformed": "A dentist removes decayed tooth structure, cleans the affected area, restores the tooth using an appropriate filling material such as composite resin, shapes the restoration, and checks the bite.",
  "preparation": "Clinical dental examination and, when clinically indicated, dental X-rays to assess the extent and depth of decay.",
  "followup": "Routine dental check-ups to monitor the restoration and surrounding tooth structure.",
  "provider": { "@id": "https://ramacarepolyclinic.com/dental-tooth-filling-dubai#clinic" }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqCategories.flatMap((cat) => cat.faqs).map((f) => ({
    "@type": "Question",
    "name": f.q,
    "acceptedAnswer": { "@type": "Answer", "text": f.a }
  }))
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ramacarepolyclinic.com/" },
    { "@type": "ListItem", "position": 2, "name": "Dental Services", "item": "https://ramacarepolyclinic.com/services/dental-dubai" },
    { "@type": "ListItem", "position": 3, "name": "Dental Tooth Filling in Dubai", "item": "https://ramacarepolyclinic.com/services/dental-tooth-filling-dubai" }
  ]
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://ramacarepolyclinic.com/#organization",
  "name": "RamaCare Polyclinic",
  "url": "https://ramacarepolyclinic.com/",
  "logo": "https://ramacarepolyclinic.com/images/ramacare-polyclinic-logo.png",
  "telephone": "+971-4-286-2006",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Jumeirah Terrace Building, Jumeirah 1",
    "addressLocality": "Dubai",
    "addressCountry": "AE"
  },
  "medicalSpecialty": ["Dentistry", "Dermatology", "Ayurveda", "Physiotherapy", "General Medicine"],
  "sameAs": ["https://ramacarepolyclinic.ae/"]
};

const schemas = [clinicSchema, webpageSchema, procedureSchema, faqSchema, breadcrumbSchema, organizationSchema];

/* ------------------------------------------------------------------ */
/*  PAGE                                                                 */
/* ------------------------------------------------------------------ */
export default function DentalToothFillingDubai() {
  return (
    <Layout>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700;800;900&display=swap"
          rel="stylesheet"
        />

        {schemas.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </Head>

      <main>
        <Hero />
        <TableOfContents />
        <WhatIsAFilling />
        <WhyTeethNeedFillings />
        <WhatCausesToothDecay />
        <SignsYouMayNeedFilling />
        <WhenToSeeADentist />
        <HowDentistsDiagnose />
        <WhatToExpectTreatment />
        <TypesOfFillings />
        <CompositeWhiteFillings />
        <ComfortAndDuration />
        <FillingVsRootCanalVsCrown />
        <WhenFillingNotEnough />
        <BenefitsOfFillings />
        <Aftercare />
        <HowLongFillingsLast />
        <BeforeAfter />
        <CostInDubai />
        <Insurance />
        <PreventingCavities />
        <WhyRamaCare />
        <PatientJourney />
        <FAQs />
        <BookConsultation />
      </main>
    </Layout>
  );
}