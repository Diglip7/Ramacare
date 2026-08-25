import React, { useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import Layout from "../../../components/Layout";
import { ChevronLeft, ChevronRight, Calendar, Phone, MessageCircle, MapPin } from "lucide-react";
import { motion } from "framer-motion";

/* -------------------------------------------------------------------------- */
/*  IMAGE ASSETS MAPPING FOR NEXT.JS                                           */
/* -------------------------------------------------------------------------- */

const heroImg = "/images/Under Eye Treatment Dubai.jpg";
const assessmentImg = "/images/under-eye skin assessment in Dubai.jpg";
const darkCirclesImg = "/images/dark circle treatment and under-eye pigmentation.jpg";
const tearTroughImg = "/images/under-eye hollowness and tear trough.jpg";
const aftercareImg = "/images/under-eye treatment aftercare consultation.jpg";
const consultationImg = "/images/ramaCare Polyclinic Jumeirah Dubai.jpg";
const clinicImg = "/images/ramaCare Polyclinic Jumeirah Dubai.jpg";

/* -------------------------------------------------------------------------- */
/*  CONTENT & DATA                                                            */
/* -------------------------------------------------------------------------- */

const TITLE = "Under Eye Treatment Dubai | RamaCare Polyclinic";
const DESCRIPTION =
    "Explore Under Eye Treatment Dubai at RamaCare for personalized care for dark circles, hollows and puffiness. Book a consultation to discuss your concerns.";

const faqs = [
    {
        q: "What causes dark circles under the eyes?",
        a: "Dark circles can result from pigmentation, visible blood vessels beneath thin skin, structural shadowing from hollowness, genetics, aging, or a combination of these factors. Identifying the specific cause is important before deciding on any treatment approach.",
    },
    {
        q: "What is Under Eye Treatment Dubai?",
        a: "Under Eye Treatment Dubai refers to the range of professional approaches available locally for addressing dark circles, hollowness, puffiness, and related concerns, with the specific treatment depending on individual assessment of the underlying cause.",
    },
    {
        q: "Can dark circles be permanently removed?",
        a: "No treatment can guarantee permanent removal of dark circles. Results vary depending on the cause, treatment type, and individual skin response, and ongoing maintenance or lifestyle factors may also play a role.",
    },
    {
        q: "What is the best treatment for dark circles?",
        a: "There isn't a single “best” treatment — the most suitable option depends on whether the main cause is pigmentation, vascular visibility, or structural hollowness, which is determined through professional assessment.",
    },
    {
        q: "Can under-eye pigmentation be treated?",
        a: "Pigmentation may be addressed through a combination of sun protection, appropriate skincare, and selected professional treatments, though pigmentation can be challenging to treat and outcomes vary by individual.",
    },
    {
        q: "Can PRP help with under-eye concerns?",
        a: "PRP may be considered as part of a skin-rejuvenation approach for selected patients, potentially supporting skin quality over time. It is not presented as a treatment that eliminates dark circles on its own.",
    },
    {
        q: "Is under-eye filler suitable for everyone?",
        a: "No. Under-eye filler is a specialized procedure that is not appropriate for every patient, and suitability depends on individual anatomy and a thorough clinical assessment.",
    },
    {
        q: "Can fillers help under-eye hollows?",
        a: "In selected cases of tear-trough volume loss, filler may be considered to help address the shadowing caused by hollowness, though outcomes and suitability vary and require experienced assessment.",
    },
    {
        q: "Can laser treatment improve dark circles?",
        a: "Certain laser-based approaches may be considered for selected pigmentation or skin-quality concerns, depending on individual assessment findings and skin characteristics.",
    },
    {
        q: "What causes under-eye bags?",
        a: "Under-eye bags can relate to genetics, aging, shifts in the natural fat pads beneath the eyes, or skin laxity, and are generally distinct from temporary puffiness caused by fluid retention.",
    },
    {
        q: "Can under-eye puffiness be treated?",
        a: "Treatment approaches depend on whether puffiness is temporary or persistent and what's driving it. A clinician can help determine the likely cause and whether any treatment is appropriate.",
    },
    {
        q: "What are the side effects of under-eye treatments?",
        a: "Possible temporary effects can include redness, mild swelling, sensitivity, bruising, or tightness, depending on the specific treatment performed. Your clinician will discuss relevant risks during consultation.",
    },
    {
        q: "Is under-eye treatment painful?",
        a: "Sensation varies by treatment type and individual tolerance. Many procedures involve manageable discomfort, and numbing may be used where clinically appropriate, but experiences differ between patients.",
    },
    {
        q: "How long does recovery take?",
        a: "Recovery time depends on the specific treatment performed, ranging from no downtime for topical approaches to a short recovery period for injectable or laser-based treatments.",
    },
    {
        q: "How many sessions might I need?",
        a: "This depends on the treatment selected, the severity of your concern, and how your skin responds. Your clinician will discuss a realistic session plan during consultation.",
    },
    {
        q: "When will I see results?",
        a: "Timelines vary by treatment — some approaches show changes relatively soon, while collagen-supporting treatments develop more gradually over several weeks.",
    },
    {
        q: "How much does under-eye treatment cost in Dubai?",
        a: "Cost depends on the treatment type, area, number of sessions, and individual treatment plan. Contact RamaCare directly for current pricing based on your specific needs.",
    },
    {
        q: "Is under-eye treatment suitable for all skin types?",
        a: "Suitability depends on individual factors including skin type, pigmentation tendency, and the specific concern being addressed, and should be confirmed through professional assessment.",
    },
    {
        q: "How do I find an under-eye treatment clinic near me?",
        a: "Look for a clinic with appropriately licensed professionals, a thorough individual assessment process, and transparent communication about benefits, risks, and realistic expectations.",
    },
    {
        q: "How can I book a consultation at RamaCare?",
        a: "You can contact RamaCare Polyclinic by phone or WhatsApp, or visit the clinic in Jumeirah 1, Dubai, to schedule a consultation and discuss your under-eye concerns directly.",
    },
];

const tocItems = [
    { title: "What Is Under Eye Treatment?", id: "what-is-under-eye-treatment" },
    { title: "Causes of Dark Circles", id: "causes" },
    { title: "Types of Concerns", id: "types" },
    { title: "Choosing the Right Approach", id: "choosing-the-right-approach" },
    { title: "Under-Eye Assessment", id: "assessment" },
    { title: "Treatment Options", id: "treatment-options" },
    { title: "Dark Circle Treatment", id: "dark-circle-treatment" },
    { title: "Under-Eye Pigmentation", id: "pigmentation" },
    { title: "Hollows & Tear Troughs", id: "hollows" },
    { title: "Puffiness & Bags", id: "puffiness" },
    { title: "Fine Lines & Wrinkles", id: "fine-lines" },
    { title: "Suitable Candidate", id: "suitable-candidate" },
    { title: "Precautions & Postpone", id: "postpone" },
    { title: "Benefits", id: "benefits" },
    { title: "Recovery & Aftercare", id: "recovery" },
    { title: "Results Timeline", id: "results" },
    { title: "Before & After", id: "before-after" },
    { title: "Required Sessions", id: "sessions" },
    { title: "Treatment Cost", id: "cost" },
    { title: "Choosing a Clinic", id: "choose-clinic" },
    { title: "Why Choose RamaCare?", id: "why-ramacare" },
    { title: "Patient Journey", id: "patient-journey" },
    { title: "FAQs", id: "faqs" },
    { title: "Book a Consultation", id: "book-a-consultation" },
];

const causes = [
    {
        t: "Genetics",
        d: "Some people naturally have a darker or more prominent under-eye area, often visible from a young age and running in families.",
    },
    {
        t: "Pigmentation",
        d: "Increased melanin in the under-eye skin can create a darker or brownish tone, and this tendency varies considerably between skin types.",
    },
    {
        t: "Thin Skin",
        d: "The skin around the eyes is notably thinner and more delicate than skin on the rest of the face, which can make underlying structures more visible.",
    },
    {
        t: "Blood Vessels",
        d: "Because the skin is thin, underlying blood vessels can show through more easily, sometimes contributing to a bluish or purplish appearance.",
    },
    {
        t: "Tear-Trough Hollowness",
        d: "The tear trough is a natural groove that runs from the inner corner of the eye toward the cheek. In some people, this hollow is more pronounced due to anatomy or volume loss, creating a shadow that can look like a dark circle even without pigmentation.",
    },
    {
        t: "Aging",
        d: "Over time, collagen production slows, skin can thin further, natural fat pads may shift or reduce, and elasticity gradually declines — all of which can change the contour and appearance of the under-eye area.",
    },
    {
        t: "Puffiness",
        d: "Morning puffiness can relate to fluid retention overnight, genetics, aging, allergies, or general lifestyle factors, and it isn't always connected to the same causes as dark circles.",
    },
    {
        t: "Sun Exposure",
        d: "Ongoing sun exposure can contribute to pigmentation changes and may accelerate the visible signs of skin aging in this area.",
    },
    {
        t: "Fatigue and Lifestyle",
        d: "Sleep and lifestyle habits can influence how the under-eye area looks day to day, but it's worth noting that not every dark circle is caused by lack of sleep — many people with consistent, healthy sleep still notice pigmentation or structural shadowing that has other causes entirely.",
    },
];

const types = [
    {
        t: "Pigmented Dark Circles",
        d: "These relate primarily to increased pigmentation in the skin itself, giving the area a brown or darker tone regardless of hydration or rest.",
    },
    {
        t: "Vascular Dark Circles",
        d: "These occur when visible blood vessels or underlying tissue contribute to a bluish or reddish tint, often more noticeable in people with thinner skin.",
    },
    {
        t: "Structural Dark Circles",
        d: "Here, hollowness and shadowing — rather than pigmentation — create the appearance of a dark circle. Light casts a shadow into the hollow, which the eye interprets as darkness.",
    },
    {
        t: "Under-Eye Hollows",
        d: "Linked to the tear trough, this concern involves a visible groove or indentation, often related to natural anatomy, aging, or volume loss beneath the skin.",
    },
    {
        t: "Under-Eye Bags",
        d: "Distinct from hollows, bags involve visible puffiness or fullness beneath the eye, sometimes related to shifts in fat pads or skin laxity rather than a groove or shadow.",
    },
    {
        t: "Puffiness",
        d: "Puffiness can be temporary — appearing after a poor night's sleep, high salt intake, or allergies — or more persistent, where it's present consistently regardless of daily habits.",
    },
    {
        t: "Fine Lines",
        d: "Repeated facial movement, sun exposure, and age-related collagen loss can all contribute to fine lines forming in the thin under-eye skin.",
    },
];

const steps = [
    {
        t: "Step 1 — Medical and Skin History",
        d: "The consultation begins with a discussion of your main concern, how long it's been present, any previous treatments you've tried, your current skincare routine, known allergies, medications, and relevant medical history.",
    },
    {
        t: "Step 2 — Visual Assessment",
        d: "The clinician examines pigmentation, skin thickness, texture, hollowness, puffiness, symmetry, and skin laxity to understand what's contributing to the appearance of the area.",
    },
    {
        t: "Step 3 — Identify the Main Cause",
        d: "This step matters more than it might seem. One patient's “dark circles” might be almost entirely pigmentation, while another's may be structural shadowing from hollowness — and these call for different approaches entirely.",
    },
    {
        t: "Step 4 — Treatment Discussion",
        d: "Once the likely cause is identified, the clinician discusses potential treatment options, reasonable alternatives, and what each approach can and cannot realistically achieve.",
    },
    {
        t: "Step 5 — Personalized Plan",
        d: "A treatment strategy is developed based specifically on your concerns, skin condition, and goals, rather than a standard package applied to every patient.",
    },
];

const journey = [
    "Initial Consultation",
    "Under-Eye Assessment",
    "Identify the Main Cause",
    "Discuss Treatment Options",
    "Personalized Treatment Plan",
    "Treatment",
    "Aftercare",
    "Progress Monitoring",
    "Follow-Up",
    "Long-Term Skin Care",
];

const chooseClinic = [
    {
        t: "Professional Credentials",
        d: "Confirm that the clinic and treating professionals hold appropriate healthcare licensing and relevant qualifications for aesthetic and dermatological treatment.",
    },
    {
        t: "Individual Assessment",
        d: "A clinic worth considering will take time to identify your likely underlying cause rather than offering the same procedure to every patient who mentions “dark circles.”",
    },
    {
        t: "Treatment Transparency",
        d: "You should leave a consultation understanding the benefits, risks, reasonable alternatives, expected recovery, and realistic timeline for any treatment being discussed.",
    },
    {
        t: "Genuine Results",
        d: "Before-and-after images shared by a clinic should be authentic, appropriately consented, and presented without misleading editing.",
    },
    {
        t: "Patient Safety",
        d: "Treatment around the eye area calls for particular clinical expertise given the delicacy of the surrounding anatomy — this is a legitimate factor to weigh when choosing where to be treated.",
    },
];

const whyRama = [
    {
        t: "DHA-Licensed Healthcare Environment",
        d: "RamaCare's aesthetic dermatology services are delivered within a DHA-licensed healthcare setting by qualified professionals.",
    },
    {
        t: "Personalized Treatment Planning",
        d: "RamaCare's approach to aesthetic dermatology is built around each patient's individual skin type, concerns, and goals, rather than a standardized package applied to everyone.",
    },
    {
        t: "Jumeirah 1 Location",
        d: "RamaCare Polyclinic is located in Jumeirah 1, Dubai, making professional under-eye assessment accessible within this part of the city.",
    },
    {
        t: "Multidisciplinary Healthcare",
        d: "As a polyclinic, RamaCare offers aesthetic dermatology alongside a broader range of healthcare services, which can be useful when a patient's concern intersects with general health considerations.",
    },
    {
        t: "Patient-Focused Consultation",
        d: "Every discussion begins with understanding your specific concern and its likely cause before any treatment is proposed, so recommendations are based on assessment rather than assumption.",
    },
];

const benefits = [
    "Improved appearance of dark circles",
    "More even-looking pigmentation",
    "Improved skin texture",
    "Reduced appearance of fine lines",
    "Improved overall skin quality",
    "Improved appearance of selected hollowness",
    "A less tired-looking appearance",
    "A treatment plan built around your specific concerns rather than a generic protocol",
];

const approachTable = [
    ["Pigmentation", "Skin assessment, topical care, selected professional treatments"],
    ["Hollowness", "Assessment for volume-restoring approaches"],
    ["Thin skin", "Skin-rejuvenation approaches"],
    ["Puffiness", "Assessment of underlying cause"],
    ["Fine lines", "Skin-rejuvenation or tightening approaches"],
    ["Mixed causes", "Combination treatment plan where appropriate"],
];

/* -------------------------------------------------------------------------- */
/*  VERIFIED SCHEMAS (JSON-LD)                                                */
/* -------------------------------------------------------------------------- */

const clinicSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: "RamaCare Polyclinic",
    url: "https://ramacarepolyclinic.ae/services/under-eye-treatment-dubai",
    image: "https://ramacarepolyclinic.ae/images/RamaCare%20Polyclinic%20Aesthetic%20Dermatology.jpg",
    telephone: "+971566597878",
    address: {
        "@type": "PostalAddress",
        streetAddress: "12 Al Dhiyafah Rd, Jumeirah Terrace Building, Ground Floor",
        addressLocality: "Jumeirah 1",
        addressRegion: "Dubai",
        addressCountry: "AE",
    },
    medicalSpecialty: "Dermatology",
    availableService: {
        "@type": "MedicalTherapy",
        name: "Under Eye Treatment",
        alternateName: "Under Eye Treatment Dubai",
        description:
            "A range of individualized approaches for under-eye concerns such as dark circles, hollowness, puffiness, and fine lines, selected based on professional assessment of the underlying cause.",
    },
};

const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    url: "https://ramacarepolyclinic.ae/services/under-eye-treatment-dubai",
    name: "Under Eye Treatment Dubai: Options for Dark Circles, Hollows & Puffiness",
    description:
        "An overview of under-eye treatment options in Dubai, including causes of dark circles, hollowness, and puffiness, and what to expect from professional assessment at RamaCare Polyclinic in Jumeirah 1.",
    medicalAudience: { "@type": "Patient" },
    about: {
        "@type": "MedicalCondition",
        name: "Under-eye concerns (dark circles, hollowness, puffiness)",
    },
    lastReviewed: "2026-08-18",
    reviewedBy: {
        "@type": "Person",
        name: "RamaCare Polyclinic Dermatology Team",
        jobTitle: "Specialist Aesthetic Dermatology Team",
    },
    publisher: { "@type": "MedicalOrganization", name: "RamaCare Polyclinic" },
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://ramacarepolyclinic.ae/" },
        { "@type": "ListItem", position: 2, name: "Aesthetic Dermatology", item: "https://ramacarepolyclinic.ae/services/aesthetic-dermatology-dubai" },
        { "@type": "ListItem", position: 3, name: "Under Eye Treatment Dubai", item: "https://ramacarepolyclinic.ae/services/under-eye-treatment-dubai" },
    ],
};

const orgSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    name: "RamaCare Polyclinic",
    url: "https://ramacarepolyclinic.ae/",
    logo: "https://ramacarepolyclinic.ae/images/Logo.png",
    address: {
        "@type": "PostalAddress",
        streetAddress: "12 Al Dhiyafah Rd, Jumeirah Terrace Building, Ground Floor",
        addressLocality: "Jumeirah 1",
        addressRegion: "Dubai",
        addressCountry: "AE",
    },
    telephone: "+971566597878",
    sameAs: [
        "https://www.instagram.com/ramacarepolyclinic/",
        "https://www.facebook.com/ramacarepolyclinic/",
    ],
};

/* -------------------------------------------------------------------------- */
/*  HELPER UI COMPONENTS (REFINED BALANCED TYPOGRAPHY)                       */
/* -------------------------------------------------------------------------- */

function Eyebrow({ children }) {
    return (
        <p className="eyebrow flex items-center gap-3 text-[#1F5E4B] font-semibold text-xs uppercase tracking-widest">
            <span className="h-0.5 w-7 bg-[#1F5E4B]" />
            {children}
        </p>
    );
}

function SectionTitle({ children, as: Tag = "h2" }) {
    return (
        <Tag className="font-sans text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight text-slate-800">
            {children}
        </Tag>
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
        <div id="table-of-contents" className="sticky top-20 z-30 bg-white/90 backdrop-blur-md border-y border-slate-200/90 shadow-xs py-3 w-full">
            <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 flex items-center gap-3">

                {/* Left Arrow Button */}
                <button
                    onClick={() => scroll("left")}
                    className="p-2.5 rounded-full bg-white/70 hover:bg-[#1F5E4B] hover:text-white text-[#1F5E4B] border border-slate-200/80 transition-all shrink-0 shadow-2xs cursor-pointer backdrop-blur-sm"
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
                    {items.map((item) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            className="inline-flex items-center px-4 py-2 rounded-full bg-slate-100/90 hover:bg-[#1F5E4B] hover:text-white text-slate-700 border border-slate-200/80 transition-all shrink-0 text-xs font-semibold"
                        >
                            <span>{item.title}</span>
                        </a>
                    ))}
                </div>

                {/* Right Arrow Button */}
                <button
                    onClick={() => scroll("right")}
                    className="p-2.5 rounded-full bg-white/70 hover:bg-[#1F5E4B] hover:text-white text-[#1F5E4B] border border-slate-200/80 transition-all shrink-0 shadow-2xs cursor-pointer backdrop-blur-sm"
                    aria-label="Scroll right navigation"
                    title="Scroll Right"
                >
                    <ChevronRight className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
}

/* -------------------------------------------------------------------------- */
/*  PAGE COMPONENT                                                            */
/* -------------------------------------------------------------------------- */

export default function UnderEyePage() {
    return (
        <Layout>
            <Head>
                <title>{TITLE}</title>
                <meta name="description" content={DESCRIPTION} />
                <meta property="og:title" content={TITLE} />
                <meta property="og:description" content={DESCRIPTION} />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://ramacarepolyclinic.ae/services/under-eye-treatment-dubai" />
                <meta name="twitter:card" content="summary_large_image" />
                <link rel="canonical" href="https://ramacarepolyclinic.ae/services/under-eye-treatment-dubai" />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
            </Head>

            <main className="bg-slate-50 text-slate-800">
                {/* HERO */}
                <section className="relative overflow-hidden bg-gradient-to-br from-[#09281F] via-[#124235] to-[#1F5E4B] text-white pt-16 pb-24 px-5 sm:px-8">
                    {/* Subtle Blurred Background Image */}
                    <img
                        src={clinicImg}
                        alt="RamaCare Polyclinic Jumeirah Dubai backdrop"
                        className="absolute inset-0 w-full h-full object-cover opacity-20 blur-xs scale-105 pointer-events-none"
                    />

                    {/* Light Green Glowing Ambient Orbs */}
                    <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-emerald-400/30 blur-3xl" />
                    <div className="pointer-events-none absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-teal-300/20 blur-3xl" />
                    <div className="pointer-events-none absolute top-1/3 right-10 h-72 w-72 rounded-full bg-emerald-300/25 blur-3xl" />

                    <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-12 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-16">
                        <div className="relative">
                            <nav aria-label="Breadcrumb" className="mb-8 text-xs tracking-wide text-emerald-100/80">
                                <ol className="flex flex-wrap items-center gap-2">
                                    <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                                    <li aria-hidden>/</li>
                                    <li><Link href="/services/aesthetic-dermatology-dubai" className="hover:text-white transition-colors">Aesthetic Dermatology</Link></li>
                                    <li aria-hidden>/</li>
                                    <li className="text-emerald-200 font-semibold">Under Eye Treatment Dubai</li>
                                </ol>
                            </nav>
                            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-400/20 border border-emerald-300/30 backdrop-blur-md text-emerald-200 text-xs font-bold uppercase tracking-widest mb-4">
                                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                RamaCare Polyclinic &middot; Jumeirah 1, Dubai
                            </div>
                            <h1 className="mt-4 font-sans text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug tracking-tight text-white">
                                Under Eye Treatment Dubai: Options for Dark Circles, Hollows &amp; Puffiness
                            </h1>
                            <p className="mt-7 max-w-xl text-base leading-relaxed text-emerald-50/90 font-normal">
                                Explore Under Eye Treatment Dubai at RamaCare for personalized care for dark circles,
                                hollows and puffiness. Book a consultation to discuss your concerns.
                            </p>
                            <div className="mt-9 flex flex-wrap gap-4">
                                <a
                                    href="#book-a-consultation"
                                    className="rounded-full bg-white text-[#1F5E4B] px-8 py-3.5 text-xs font-bold uppercase tracking-wider shadow-xl hover:bg-[#F5F1EA] transition-all hover:scale-105"
                                >
                                    Book a Consultation
                                </a>
                                <a
                                    href="#table-of-contents"
                                    className="rounded-full border-2 border-white/40 px-7 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-white/15 transition-all backdrop-blur-sm"
                                >
                                    Explore this guide
                                </a>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="overflow-hidden rounded-[2rem] rounded-tr-[6rem] shadow-2xl border-2 border-emerald-300/30">
                                <img
                                    src={heroImg}
                                    alt="Under Eye Treatment Dubai consultation at RamaCare Polyclinic"
                                    width={1600}
                                    height={1200}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <div className="mt-4 grid grid-cols-3 gap-3 text-center text-[0.7rem] uppercase tracking-[0.16em] text-emerald-100">
                                <span className="rounded-xl border border-emerald-300/30 bg-emerald-950/40 backdrop-blur-md py-3 font-semibold">DHA-Licensed</span>
                                <span className="rounded-xl border border-emerald-300/30 bg-emerald-950/40 backdrop-blur-md py-3 font-semibold">Jumeirah 1</span>
                                <span className="rounded-xl border border-emerald-300/30 bg-emerald-950/40 backdrop-blur-md py-3 font-semibold">Assessment-led</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* INTRODUCTION */}
                <section id="introduction" className="bg-[#F5F1EA]/70 border-b border-slate-200/80">
                    <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
                        <Eyebrow>Overview</Eyebrow>
                        <div className="mt-8 grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
                            <p className="font-sans text-xl sm:text-2xl font-semibold leading-relaxed text-slate-800">
                                Some people notice dark circles even after a full night's sleep. Others see a hollow
                                beneath the eyes that casts a shadow no matter how well-rested they are, while some
                                are mainly bothered by puffiness that seems worse in the morning.
                            </p>
                            <div className="space-y-5 text-[1.02rem] leading-relaxed text-slate-600">
                                <p>
                                    Under-eye concerns are common, but they don't all come from the same cause, which is
                                    part of why so many people search for Under Eye Treatment Dubai without finding a
                                    single clear answer. Pigmentation, thin skin, visible blood vessels, volume loss, and
                                    fluid retention can each contribute to how tired or aged the under-eye area looks,
                                    sometimes on their own and sometimes together.
                                </p>
                                <p>
                                    This matters because the right approach for one person may do very little for someone
                                    else &mdash; dark circles caused mainly by pigmentation typically call for a different
                                    strategy than hollowness caused by volume loss under the skin. At RamaCare Polyclinic
                                    in Jumeirah 1,{" "}
                                    <Link href="/services/aesthetic-dermatology-dubai" className="text-[#1F5E4B] font-semibold underline decoration-[#1F5E4B] underline-offset-4">
                                        Aesthetic Dermatology Dubai
                                    </Link>{" "}
                                    consultations start by identifying what's actually driving the concern before any treatment is
                                    discussed, since understanding the cause is what makes a treatment plan genuinely
                                    useful rather than a guess.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* WHAT IS */}
                <section id="what-is-under-eye-treatment" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 bg-white">
                    <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                        <div className="relative">
                            <div className="absolute -left-4 -top-4 h-full w-full rounded-[2rem] border-2 border-[#1F5E4B]/30" aria-hidden />
                            <img
                                src={darkCirclesImg}
                                alt="dark circle treatment and under-eye pigmentation"
                                width={1408}
                                height={1008}
                                loading="lazy"
                                className="relative rounded-[2rem] object-cover shadow-md border border-slate-200"/>
                        </div>
                        <div>
                            <Eyebrow>The Basics</Eyebrow>
                            <SectionTitle>What Is Under Eye Treatment?</SectionTitle>
                            <p className="mt-6 text-[1.02rem] leading-relaxed text-slate-600">
                                Under eye treatment isn't one single procedure &mdash; it's a category of approaches used
                                depending on what's causing the concern. Depending on individual assessment, treatment
                                may involve professional skincare, topical treatments, PRP (platelet-rich plasma),
                                dermal fillers, laser-based approaches, or other skin-rejuvenation techniques. Because
                                dark circles, hollows, puffiness, and fine lines each have different underlying causes,
                                treatment selection depends on a clinical evaluation of your specific skin and concern
                                rather than a one-size-fits-all product or procedure.
                            </p>
                        </div>
                    </div>
                </section>

                {/* STICKY HORIZONTAL QUICK NAVIGATION BAR */}
                <HorizontalQuickNav items={tocItems} />

                {/* CAUSES - UNIFORM ELEGANT GRID */}
                <section id="causes" className="w-full bg-[#FAF8F5] py-14 sm:py-16 border-b border-slate-200/80">
                    <div className="w-full max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
                        <div className="max-w-3xl mb-8">
                            <Eyebrow>Underlying Causes</Eyebrow>
                            <SectionTitle>Why Do Dark Circles and Under-Eye Concerns Develop?</SectionTitle>
                            <p className="mt-3 text-slate-600 text-base leading-relaxed">
                                The skin under the eyes behaves differently from skin elsewhere on the face, and several
                                factors can influence how it looks over time.
                            </p>
                        </div>

                        {/* UNIFORM 3-COLUMN CARD GRID */}
                        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                            {causes.map((c, idx) => {
                                const causeIcons = [
                                    <svg key="1" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 15c6.667-6 13.333 0 20-6"/><path d="M2 9c6.667 6 13.333 0 20 6"/><path d="M7 12h10"/></svg>,
                                    <svg key="2" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>,
                                    <svg key="3" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>,
                                    <svg key="4" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>,
                                    <svg key="5" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>,
                                    <svg key="6" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
                                    <svg key="7" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/></svg>,
                                    <svg key="8" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2"/><path d="M12 21v2"/><path d="M4.22 4.22l1.42 1.42"/><path d="M18.36 18.36l1.42 1.42"/><path d="M1 12h2"/><path d="M21 12h2"/><path d="M4.22 19.78l1.42-1.42"/><path d="M18.36 5.64l1.42-1.42"/></svg>,
                                    <svg key="9" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>,
                                ];

                                return (
                                    <article
                                        key={c.t}
                                        className="group bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/80 shadow-2xs hover:border-[#1F5E4B]/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                                    >
                                        <div>
                                            <div className="flex items-center justify-between gap-4 mb-4">
                                                <div className="w-9 h-9 rounded-xl bg-[#1F5E4B]/10 text-[#1F5E4B] flex items-center justify-center shrink-0 group-hover:bg-[#1F5E4B] group-hover:text-white transition-colors duration-300">
                                                    {causeIcons[idx % causeIcons.length]}
                                                </div>
                                                <span className="font-mono text-xs font-bold text-slate-400 group-hover:text-[#1F5E4B] transition-colors">
                                                    0{idx + 1}
                                                </span>
                                            </div>

                                            <h3 className="font-sans text-lg font-bold text-slate-800 mb-2 group-hover:text-[#1F5E4B] transition-colors">
                                                {c.t}
                                            </h3>
                                            <p className="text-sm leading-relaxed text-slate-600 font-normal">
                                                {c.d}
                                            </p>
                                        </div>
                                    </article>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* TYPES - UNIFORM ELEGANT GRID */}
                <section id="types" className="w-full bg-[#FAF8F5] py-14 sm:py-16 border-b border-slate-200/80 text-slate-800">
                    <div className="w-full max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
                        {/* Section Header */}
                        <div className="max-w-3xl mb-8">
                            <Eyebrow>Types of Concerns</Eyebrow>
                            <SectionTitle>Common Types of Under-Eye Concerns</SectionTitle>
                            <p className="mt-3 text-slate-600 text-base leading-relaxed">
                                Under-eye concerns vary significantly in their underlying mechanisms. Identifying whether a condition is pigmentary, vascular, or structural ensures the proposed care matches your specific anatomy.
                            </p>
                        </div>

                        {/* UNIFORM 3-COLUMN CARD GRID */}
                        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                            {types.map((t, idx) => (
                                <article
                                    key={t.t}
                                    className="bg-white border border-slate-200/80 p-6 sm:p-7 rounded-2xl shadow-2xs hover:border-[#1F5E4B]/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
                                >
                                    <div>
                                        <div className="flex items-center justify-between gap-4 mb-3">
                                            <span className="inline-block px-3 py-1 rounded-full bg-[#1F5E4B]/10 text-[#1F5E4B] text-xs font-bold uppercase tracking-wider">
                                                Type 0{idx + 1}
                                            </span>
                                            <span className="font-mono text-xs font-bold text-slate-400 group-hover:text-[#1F5E4B] transition-colors">
                                                0{idx + 1}
                                            </span>
                                        </div>
                                        <h3 className="font-sans text-lg font-bold text-slate-800 mb-2 group-hover:text-[#1F5E4B] transition-colors">
                                            {t.t}
                                        </h3>
                                        <p className="text-sm leading-relaxed text-slate-600 font-normal">
                                            {t.d}
                                        </p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CHOOSING APPROACH */}
                <section id="choosing-the-right-approach" className="mx-auto max-w-5xl px-5 py-20 text-center sm:px-8 bg-white">
                    <p className="eyebrow justify-center text-[#1F5E4B] font-semibold text-xs uppercase tracking-widest mb-3">Choosing An Approach</p>
                    <SectionTitle>Under Eye Treatment Dubai: Choosing the Right Approach</SectionTitle>
                    <p className="mt-6 text-[1.02rem] leading-relaxed text-slate-600 max-w-4xl mx-auto">
                        There is no universal Under Eye Treatment Dubai patients can expect to receive regardless
                        of their concern &mdash; what works well for pigmentation may do very little for structural
                        hollowness, and vice versa. Treatment selection typically depends on several factors,
                        including the main concern being addressed, overall skin quality, degree of pigmentation,
                        extent of hollowness or puffiness, age-related changes, medical history, any previous
                        treatments, and realistic patient expectations. Because these factors vary so much between
                        individuals, a professional consultation is the step that actually determines whether a
                        given treatment is appropriate &mdash; not general information found online.
                    </p>
                </section>

                {/* ASSESSMENT */}
                <section id="assessment" className="bg-[#F5F1EA]/60 border-y border-slate-200/80">
                    <div className="mx-auto grid max-w-7xl gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[0.85fr_1.15fr]">
                        <div className="lg:sticky lg:top-24 lg:self-start">
                            <img
                                src={assessmentImg}
                                alt="under-eye skin assessment in Dubai"
                                width={1200}
                                height={1408}
                                loading="lazy"
                                className="rounded-[2rem] rounded-bl-[6rem] object-cover shadow-xl border border-slate-200"
                            />
                        </div>
                        <div>
                            <Eyebrow>Clinical Assessment</Eyebrow>
                            <SectionTitle>Under-Eye Assessment at RamaCare</SectionTitle>
                            <ol className="mt-10 space-y-6">
                                {steps.map((s) => (
                                    <li key={s.t} className="relative border-l-2 border-[#1F5E4B]/40 pl-8">
                                        <span className="absolute -left-[7px] top-2 h-3 w-3 rounded-full bg-[#1F5E4B]" />
                                        <h3 className="font-semibold text-lg sm:text-xl text-slate-800">{s.t}</h3>
                                        <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.d}</p>
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </div>
                </section>

                {/* NEW CLEAN ELEGANT TREATMENT OPTIONS SHOWCASE */}
                <section id="treatment-options" className="w-full bg-white py-20 border-b border-slate-200/80">
                    <div className="w-full max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
                        <div className="max-w-3xl mb-12">
                            <Eyebrow>Treatment Options</Eyebrow>
                            <SectionTitle>Under-Eye Treatment Options</SectionTitle>
                            <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
                                Options are recommended following clinical evaluation of your specific concern:
                            </p>
                        </div>

                        {/* CLEAN 2-COLUMN FEATURE DECK */}
                        <div className="grid gap-8 lg:grid-cols-2">

                            {/* Option 1: Skincare */}
                            <article className="bg-[#FAF8F5] p-8 sm:p-10 rounded-3xl border-l-4 border-l-[#1F5E4B] border-y border-r border-slate-200/80 shadow-xs">
                                <h3 className="font-sans text-xl sm:text-2xl font-bold text-slate-800 mb-4">
                                    Professional Skincare and Topical Treatment
                                </h3>
                                <p className="text-[0.98rem] leading-relaxed text-slate-600 mb-4">
                                    For certain pigmentation or general skin-quality concerns, appropriate topical products
                                    may be recommended as part of a broader plan. This is not a substitute for medical
                                    treatment where one is needed, and no specific medication is prescribed without
                                    individual clinical assessment. Patients interested in broader skin care in Dubai can explore RamaCare's{" "}
                                    <Link href="/services/skin-treatment-dubai" className="text-[#1F5E4B] font-semibold underline decoration-[#1F5E4B] underline-offset-4">
                                        Skin Treatment Dubai
                                    </Link>{" "}
                                    services.
                                </p>
                            </article>

                            {/* Option 2: PRP */}
                            <article className="bg-[#FAF8F5] p-8 sm:p-10 rounded-3xl border-l-4 border-l-[#1F5E4B] border-y border-r border-slate-200/80 shadow-xs">
                                <h3 className="font-sans text-xl sm:text-2xl font-bold text-slate-800 mb-4">
                                    PRP (Platelet-Rich Plasma)
                                </h3>
                                <p className="text-[0.98rem] leading-relaxed text-slate-600 mb-4">
                                    PRP involves drawing a small sample of the patient's own blood, processing it to
                                    concentrate platelets, and reintroducing it to targeted areas. It may be considered as
                                    part of a skin-rejuvenation approach around the under-eye area in selected patients,
                                    potentially supporting skin quality over time.{" "}
                                    <Link href="/services/face-prp-in-dubai" className="text-[#1F5E4B] font-semibold underline decoration-[#1F5E4B] underline-offset-4">
                                        PRP Treatment
                                    </Link>{" "}
                                    is not presented as a treatment that eliminates dark circles, and its role depends on the underlying cause being addressed.
                                </p>
                            </article>

                            {/* Option 3: Dermal Fillers */}
                            <article className="bg-[#FAF8F5] p-8 sm:p-10 rounded-3xl border-l-4 border-l-[#1F5E4B] border-y border-r border-slate-200/80 shadow-xs">
                                <h3 className="font-sans text-xl sm:text-2xl font-bold text-slate-800 mb-4">
                                    Dermal Fillers
                                </h3>
                                <p className="text-[0.98rem] leading-relaxed text-slate-600">
                                    In selected cases of under-eye hollowness or tear-trough volume loss, dermal fillers may
                                    be considered to help address the shadowing effect created by hollow areas. This is a
                                    specialized procedure that is not appropriate for everyone, and outcomes depend heavily
                                    on individual anatomy and the experience of the person performing the assessment. No
                                    specific cosmetic outcome can be promised in advance.
                                </p>
                            </article>

                            {/* Option 4: Laser-Based Treatments */}
                            <article className="bg-[#FAF8F5] p-8 sm:p-10 rounded-3xl border-l-4 border-l-[#1F5E4B] border-y border-r border-slate-200/80 shadow-xs">
                                <h3 className="font-sans text-xl sm:text-2xl font-bold text-slate-800 mb-4">
                                    Laser-Based Treatments
                                </h3>
                                <p className="text-[0.98rem] leading-relaxed text-slate-600">
                                    Certain laser-based approaches may be considered for selected pigmentation or
                                    skin-quality concerns in the under-eye area, depending on assessment findings. The most
                                    suitable device or technique depends on the individual case and is discussed during
                                    consultation rather than assumed in advance.
                                </p>
                            </article>

                            {/* Option 5: Skin Rejuvenation Banner (Full Width 2 cols) */}
                            <article className="lg:col-span-2 bg-[#1F5E4B] text-white p-8 sm:p-10 lg:p-12 rounded-3xl shadow-md">
                                <h3 className="font-sans text-2xl sm:text-3xl font-extrabold text-white mb-4">
                                    Skin Rejuvenation Treatments
                                </h3>
                                <p className="text-[1.02rem] leading-relaxed text-white/90">
                                    Broader skin-rejuvenation approaches may support overall skin quality, texture, and
                                    the appearance of fine lines, and can sometimes be incorporated alongside more
                                    targeted treatments, including RamaCare's{" "}
                                    <Link href="/services/facial-dubai" className="underline text-emerald-200 font-semibold underline-offset-4">
                                        Facial Treatments
                                    </Link>
                                    . As with other options, the most useful approach depends on what's actually causing the concern.
                                </p>
                            </article>

                        </div>
                    </div>
                </section>

                {/* DARK CIRCLE TREATMENT + TABLE */}
                <section id="dark-circle-treatment" className="border-y border-slate-200 bg-[#FAF8F5]">
                    <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8">
                        <Eyebrow>Dark Circle Care</Eyebrow>
                        <SectionTitle>Dark Circle Treatment in Dubai</SectionTitle>
                        <p className="mt-5 text-[1.02rem] leading-relaxed text-slate-600">
                            Dark circles are one of the most commonly searched under-eye concerns, but as the sections
                            above outline, they don't all share the same cause &mdash; which is exactly why treatment
                            approaches differ.
                        </p>
                        <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs">
                            <table className="w-full text-left text-sm">
                                <thead>
                                    <tr className="bg-[#1F5E4B] text-white uppercase font-semibold text-xs tracking-wider">
                                        <th scope="col" className="px-6 py-4 font-bold">Main Concern</th>
                                        <th scope="col" className="px-6 py-4 font-bold">Possible Treatment Approach</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-200">
                                    {approachTable.map(([a, b]) => (
                                        <tr key={a} className="hover:bg-[#FAF8F5] transition-colors">
                                            <th scope="row" className="px-6 py-4 font-semibold text-slate-800">{a}</th>
                                            <td className="px-6 py-4 text-slate-600">{b}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="mt-6 text-sm leading-relaxed text-slate-500 italic">
                            Not every treatment listed here is appropriate for every patient &mdash; the table reflects
                            general treatment directions, and your clinician will determine which, if any, apply to
                            your specific situation after assessment.
                        </p>
                    </div>
                </section>

                {/* PIGMENTATION */}
                <section id="pigmentation" className="mx-auto max-w-5xl px-5 py-20 sm:px-8 bg-white">
                    <Eyebrow>Pigmentation Care</Eyebrow>
                    <SectionTitle>Under-Eye Pigmentation Treatment</SectionTitle>
                    <p className="mt-6 text-[1.02rem] leading-relaxed text-slate-600">
                        Under-eye pigmentation can stem from several overlapping factors, including natural
                        hyperpigmentation tendencies, cumulative sun exposure, post-inflammatory pigmentation
                        (which can follow irritation or minor injury), genetics, and inherently thin skin that makes
                        underlying tissue more visible. Pigmentation in this area can be genuinely difficult to
                        treat and may require a comprehensive approach that combines sun protection, appropriate
                        skincare, and, in selected cases, professional treatments such as{" "}
                        <Link href="/services/laser-rejuvenation-dubai" className="text-[#1F5E4B] font-semibold underline underline-offset-4">
                            Skin Rejuvenation
                        </Link>{" "}
                        &mdash; rather than expecting a single product or session to resolve it. Daily sun protection
                        is consistently emphasized as part of managing pigmentation, since ongoing UV exposure can
                        undo gradual improvement. It's also important to set realistic expectations: complete
                        removal of pigmentation is not something that can be promised, and outcomes vary based on
                        the underlying cause and skin type.
                    </p>
                </section>

                {/* HOLLOWS */}
                <section id="hollows" className="bg-[#F5F1EA]/60 border-y border-slate-200/80">
                    <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:items-center">
                        <div>
                            <Eyebrow>Tear Troughs &amp; Volume</Eyebrow>
                            <SectionTitle>Under-Eye Hollows and Tear Troughs</SectionTitle>
                            <div className="mt-6 space-y-5 text-[1.02rem] leading-relaxed text-slate-600">
                                <p>
                                    The tear trough is the natural groove running from the inner corner of the eye down
                                    toward the upper cheek. In some people, this groove is subtle; in others, it's more
                                    pronounced due to individual anatomy or age-related volume loss beneath the skin. As
                                    the face ages, natural fat pads and supportive tissue can shift or diminish, which may
                                    deepen this hollow and cast a more noticeable shadow &mdash; a shadow the eye often reads
                                    as a dark circle, even when pigmentation isn't the main driver.
                                </p>
                                <p>
                                    This is why hollowness can sometimes make dark circles look more prominent than
                                    pigmentation alone would suggest. In selected patients, filler may be considered to
                                    help address this structural shadowing, but it is not appropriate for everyone.
                                    Under-eye anatomy varies considerably between individuals, and this area requires
                                    careful, experienced assessment before any volume-restoring approach is considered.
                                </p>
                            </div>
                        </div>
                        <figure className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-md">
                            <img
                                src={tearTroughImg}
                                alt="under-eye hollowness and tear trough anatomy illustration"
                                width={1408}
                                height={1008}
                                loading="lazy"
                                className="rounded-[1.4rem]"
                            />
                            <figcaption className="px-2 pb-1 pt-4 text-xs uppercase font-semibold tracking-[0.16em] text-slate-500">
                                Tear trough anatomy &mdash; illustrative
                            </figcaption>
                        </figure>
                    </div>
                </section>

                {/* PUFFINESS + FINE LINES */}
                <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 bg-white">
                    <div className="grid gap-6 lg:grid-cols-2">
                        <article id="puffiness" className="rounded-3xl border border-slate-200 bg-[#FAF8F5] p-9 shadow-2xs">
                            <Eyebrow>Puffiness &amp; Bags</Eyebrow>
                            <h2 className="mt-4 font-bold text-2xl sm:text-3xl text-slate-800">Under-Eye Puffiness and Bags</h2>
                            <div className="mt-5 space-y-4 text-[0.98rem] leading-relaxed text-slate-600">
                                <p>
                                    Puffiness and bags are related but not identical concerns. Puffiness often refers to a
                                    temporary swelling &mdash; common after a poor night's sleep, high sodium intake,
                                    allergies, or crying &mdash; that tends to resolve within hours. Persistent bags, on the
                                    other hand, are less about short-term fluid changes and more often related to
                                    genetics, aging, shifts in the fat compartments beneath the eyes, or skin laxity that
                                    no longer holds its earlier contour.
                                </p>
                                <p>
                                    Because these have different underlying mechanisms, treatment depends heavily on
                                    identifying which type of puffiness or bagginess is present. It's important to be
                                    clear that non-surgical treatments cannot be expected to remove every type of
                                    under-eye bag &mdash; some structural bags are better addressed through other means
                                    entirely, which is another reason individual assessment matters before deciding on any
                                    treatment path.
                                </p>
                            </div>
                        </article>
                        <article id="fine-lines" className="rounded-3xl bg-[#1F5E4B] p-9 text-white shadow-md">
                            <p className="eyebrow text-emerald-300 font-semibold text-xs uppercase tracking-widest">Fine Lines &amp; Wrinkles</p>
                            <h2 className="mt-4 font-bold text-2xl sm:text-3xl text-white">Under-Eye Fine Lines and Wrinkles</h2>
                            <p className="mt-5 text-[0.98rem] leading-relaxed text-white/90">
                                Fine lines in the under-eye area commonly develop from a combination of collagen loss
                                over time, the cumulative effect of repeated facial movements like smiling and
                                squinting, ongoing sun exposure, and skin dryness in this thin, delicate area. Potential
                                approaches may include skin-rejuvenation treatments,{" "}
                                <Link href="/services/skin-tightening-dubai" className="underline text-emerald-200 underline-offset-4 font-semibold">
                                    skin tightening
                                </Link>
                                , consistent professional skincare, and selected aesthetic treatments aimed at
                                supporting skin quality. As with other concerns discussed here, complete wrinkle removal
                                isn't a realistic promise &mdash; the goal of these approaches is generally to support skin
                                quality and soften the appearance of fine lines over time, not erase them entirely.
                            </p>
                        </article>
                    </div>
                </section>

                {/* SUITABILITY */}
                <section className="border-y border-slate-200 bg-[#FAF8F5]">
                    <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-2">
                        <div id="suitable-candidate">
                            <Eyebrow>Candidate Suitability</Eyebrow>
                            <h2 className="mt-4 font-bold text-2xl sm:text-3xl text-slate-800">Who May Be Suitable?</h2>
                            <p className="mt-5 text-[0.98rem] leading-relaxed text-slate-600">
                                Under-eye treatment may be considered for adults concerned about dark circles,
                                pigmentation, hollowness, puffiness, fine lines, a generally tired-looking appearance,
                                or overall skin texture in this area. That said, suitability isn't something that can be
                                determined from a description alone &mdash; it requires an individual assessment of your
                                specific skin, anatomy, and goals to understand which, if any, treatment approach makes
                                sense for you.
                            </p>
                        </div>
                        <div id="postpone" className="rounded-3xl border border-amber-300 bg-amber-50/60 p-8 shadow-2xs">
                            <Eyebrow>Precautions &amp; Safety</Eyebrow>
                            <h2 className="mt-4 font-bold text-2xl sm:text-3xl text-slate-800">Who May Need to Postpone Treatment?</h2>
                            <p className="mt-5 text-[0.98rem] leading-relaxed text-slate-700">
                                Certain situations may call for postponing treatment or seeking medical review first,
                                including active infection, open wounds, significant skin irritation, an active
                                inflammatory skin condition, a recent aggressive cosmetic procedure in the area, certain
                                medications, or uncontrolled medical conditions. This isn't an exhaustive list of every
                                possible contraindication, and any relevant factors should be confirmed directly with
                                your clinician rather than assumed from general information.
                            </p>
                            <p className="mt-4 text-[0.98rem] leading-relaxed text-slate-700">
                                You'll be asked to disclose your current medications, known allergies, existing medical
                                conditions, any previous cosmetic procedures, and any past reactions to treatments
                                &mdash; this information directly shapes what's safe and appropriate for you.
                            </p>
                        </div>
                    </div>
                </section>

                {/* EDITORIAL TREATMENT BENEFITS SECTION */}
                <section id="benefits" className="w-full bg-white py-20 border-b border-slate-200/80">
                    <div className="w-full max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
                        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
                            
                            {/* Sticky Left Column (Header + Description + Disclaimer) */}
                            <div className="lg:col-span-5 lg:sticky lg:top-28">
                                <Eyebrow>Treatment Benefits</Eyebrow>
                                <SectionTitle>Benefits of Professional Under-Eye Treatment</SectionTitle>
                                <p className="mt-5 text-[1.02rem] leading-relaxed text-slate-600">
                                    Depending on the treatment and underlying cause addressed, potential benefits may include:
                                </p>

                                {/* Disclaimer Box */}
                                <div className="mt-8 p-5 bg-[#FAF8F5] border-l-4 border-[#1F5E4B] rounded-r-2xl">
                                    <p className="text-xs leading-relaxed text-slate-500 italic">
                                        Results vary from person to person, and no treatment can promise permanent results, a
                                        guaranteed transformation, or complete removal of a given concern.
                                    </p>
                                </div>
                            </div>

                            {/* Right Column (2-Column Staggered Checklist Cards) */}
                            <div className="lg:col-span-7">
                                <ul className="grid gap-4 sm:grid-cols-2">
                                    {benefits.map((b) => (
                                        <li
                                            key={b}
                                            className="group bg-[#FAF8F5] p-5 sm:p-6 rounded-2xl border border-slate-200/80 shadow-2xs hover:border-[#1F5E4B]/50 hover:bg-white hover:shadow-md transition-all duration-300 flex items-start gap-4"
                                        >
                                            <div className="w-7 h-7 rounded-full bg-[#1F5E4B]/10 text-[#1F5E4B] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#1F5E4B] group-hover:text-white transition-colors">
                                                <svg
                                                    className="w-4 h-4"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <polyline points="20 6 9 17 4 12" />
                                                </svg>
                                            </div>
                                            <span className="font-semibold text-slate-800 text-sm sm:text-base leading-snug group-hover:text-[#1F5E4B] transition-colors">
                                                {b}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                        </div>
                    </div>
                </section>

                {/* RECOVERY */}
                <section id="recovery" className="bg-[#F5F1EA]/60 border-y border-slate-200/80">
                    <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                        <div>
                            <Eyebrow>Recovery &amp; Aftercare</Eyebrow>
                            <SectionTitle>Recovery and Aftercare</SectionTitle>
                            <div className="mt-6 space-y-5 text-[1.02rem] leading-relaxed text-slate-600">
                                <p>
                                    Recovery depends heavily on which treatment was performed &mdash; a topical skincare
                                    adjustment involves essentially no downtime, while injectable or laser-based approaches
                                    typically involve some temporary recovery period. Possible temporary effects can
                                    include redness, mild swelling, sensitivity, bruising, tightness, or temporary
                                    irritation, and these tend to vary based on the specific treatment and individual
                                    healing response.
                                </p>
                                <p>
                                    General aftercare guidance often includes following your clinician's specific
                                    instructions, avoiding unnecessary touching of the treated area, using only the
                                    skincare products recommended for your recovery period, protecting the skin from
                                    direct sunlight, avoiding products that could cause irritation, and attending any
                                    follow-up appointments that are advised. There's no single recovery timeline that
                                    applies to every patient or every procedure &mdash; your clinician will explain what to
                                    expect based on your specific treatment.
                                </p>
                            </div>
                        </div>
                        <img
                            src={aftercareImg}
                            alt="under-eye treatment aftercare consultation"
                            width={1408}
                            height={1008}
                            loading="lazy"
                            className="rounded-[2rem] rounded-tl-[6rem] object-cover shadow-md border border-slate-200"
                        />
                    </div>
                </section>

                {/* RESULTS / BEFORE-AFTER / SESSIONS */}
                <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 bg-white">
                    <div className="grid gap-6 lg:grid-cols-3">
                        <article id="results" className="rounded-3xl border border-slate-200 bg-[#FAF8F5] p-8 shadow-2xs">
                            <Eyebrow>Expected Timeline</Eyebrow>
                            <h2 className="mt-4 font-bold text-xl sm:text-2xl text-slate-800">
                                When Can You Expect Under-Eye Treatment Results?
                            </h2>
                            <p className="mt-4 text-sm leading-relaxed text-slate-600">
                                How quickly you notice a change depends on several factors: the type of treatment
                                performed, the underlying cause being addressed, your skin's condition, individual
                                healing, the number of sessions involved, lifestyle factors, and how closely aftercare
                                guidance is followed. Some approaches, such as certain injectable treatments, may produce
                                a visible change relatively soon after treatment, while collagen-supporting treatments
                                like PRP or skin-rejuvenation approaches tend to develop more gradually over subsequent
                                weeks as the skin responds. No specific result or timeline can be guaranteed in advance
                                &mdash; your clinician can give you a more individualized sense of what to expect during
                                your consultation.
                            </p>
                        </article>
                        <article id="before-after" className="rounded-3xl border border-slate-200 bg-[#F5F1EA]/60 p-8 shadow-2xs">
                            <Eyebrow>Before &amp; After Guidelines</Eyebrow>
                            <h2 className="mt-4 font-bold text-xl sm:text-2xl text-slate-800">Under Eye Treatment Before and After</h2>
                            <p className="mt-4 text-sm leading-relaxed text-slate-600">
                                When reviewing before-and-after images &mdash; whether from RamaCare or any clinic &mdash;
                                it's worth knowing what genuine, trustworthy documentation looks like. Authentic
                                comparisons generally involve consistent lighting between the two images, a similar
                                facial expression, a matching camera angle, and appropriate patient consent for the
                                images to be shared. Real, unedited patient images with no misleading retouching are the
                                standard to look for. It's also worth remembering that before-and-after photos represent
                                individual examples of what occurred for that specific patient &mdash; they illustrate a
                                possibility, not a promise of what your own results will look like.
                            </p>
                        </article>
                        <article id="sessions" className="rounded-3xl bg-[#1F5E4B] p-8 text-white shadow-md">
                            <p className="eyebrow text-emerald-300 font-semibold text-xs uppercase tracking-widest">Required Sessions</p>
                            <h2 className="mt-4 font-bold text-xl sm:text-2xl text-white">How Many Sessions Are Needed?</h2>
                            <p className="mt-4 text-sm leading-relaxed text-white/90">
                                There's no universal number of sessions that applies to every patient or treatment type.
                                The number required depends on the treatment selected, the severity of the concern, the
                                degree of pigmentation or hollowness present, overall skin quality, how your skin
                                responds to initial treatment, and your specific goals. Your clinician determines whether
                                additional sessions are appropriate based on ongoing assessment and how your skin
                                responds over time &mdash; not a fixed package decided before any evaluation takes place.
                            </p>
                        </article>
                    </div>
                </section>

                {/* COST */}
                <section id="cost" className="border-y border-slate-200 bg-[#FAF8F5]">
                    <div className="mx-auto max-w-4xl px-5 py-20 sm:px-8">
                        <Eyebrow>Cost &amp; Pricing Factors</Eyebrow>
                        <SectionTitle>Under Eye Treatment Cost in Dubai</SectionTitle>
                        <p className="mt-6 text-[1.02rem] leading-relaxed text-slate-600">
                            We don't publish a fixed Under Eye Treatment Cost Dubai figure here, because cost genuinely
                            varies depending on the treatment type selected, the specific area being treated, the
                            number of sessions recommended, the products or devices used, and the overall complexity
                            of your concern. Consultation findings also factor into the final treatment plan and
                            associated cost. We'd encourage you to contact RamaCare directly for current pricing
                            relevant to your specific situation.
                        </p>
                        <p className="mt-5 text-[1.02rem] leading-relaxed text-slate-600">
                            It's also worth thinking beyond price when comparing clinics. Professional qualifications,
                            the thoroughness of the consultation and assessment process, whether the proposed
                            treatment is actually suitable for your concern, the quality of aftercare support, and
                            overall transparency matter more to your outcome and safety than price alone.
                        </p>
                    </div>
                </section>

                {/* HOW TO CHOOSE */}
                <section id="choose-clinic" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 bg-white">
                    <div className="max-w-3xl">
                        <Eyebrow>Choosing a Clinic</Eyebrow>
                        <SectionTitle>How to Choose an Under-Eye Clinic in Dubai</SectionTitle>
                    </div>
                    <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {chooseClinic.map((c) => (
                            <div key={c.t} className="bg-[#FAF8F5] p-7 rounded-2xl border border-slate-200/80 shadow-2xs flex flex-col justify-between">
                                <div>
                                    <h3 className="font-semibold text-lg sm:text-xl text-slate-800 mb-2">{c.t}</h3>
                                    <p className="text-sm leading-relaxed text-slate-600">{c.d}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

              {/* WHY RAMACARE */}
<section id="why-ramacare" className="relative overflow-hidden bg-[#1F5E4B] px-5 py-24 text-white sm:px-8">
    {/* ambient gold glow, top-right */}
    <div className="pointer-events-none absolute -right-40 -top-40 h-[420px] w-[420px] rounded-full bg-[#D4A574]/20 blur-3xl" />
    {/* faint dot texture */}
    <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{ backgroundImage: "radial-gradient(#D4A574 1px, transparent 1px)", backgroundSize: "24px 24px" }}
    />

    <div className="relative mx-auto max-w-7xl">
        {/* asymmetric header: eyebrow+heading left, supporting copy right */}
        <div className="grid grid-cols-1 gap-8 border-b border-white/15 pb-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-12">
            <div>
                <div className="flex items-center gap-3">
                    <span className="h-px w-8 bg-[#D4A574]" />
                    <p className="eyebrow text-xs font-semibold uppercase tracking-widest text-[#D4A574]">
                        Why RamaCare
                    </p>
                </div>
                <h2 className="mt-5 font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-[2.75rem]">
                    Why Choose RamaCare Polyclinic?
                </h2>
            </div>

            <p className="text-[15px] leading-relaxed text-white/75 lg:text-right lg:text-[16px]">
                More about the clinic and its wider services is available on the{" "}
                <Link
                    href="/"
                    className="font-semibold text-[#D4A574] underline underline-offset-4 transition-colors hover:text-white"
                >
                    RamaCare Homepage
                </Link>
                .
            </p>
        </div>

        {/* numbered reason cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {whyRama.map((w, i) => (
                <motion.article
                    key={w.t}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    className="group relative overflow-hidden rounded-2xl border border-white/15 bg-white/[0.06] p-7 backdrop-blur-md transition-colors hover:border-[#D4A574]/50 hover:bg-white/[0.09]"
                >
                    {/* ghost numeral */}
                    <span
                        aria-hidden="true"
                        className="pointer-events-none absolute -right-2 -top-4 select-none font-serif text-[5rem] font-semibold leading-none text-white/[0.06]"
                    >
                        {String(i + 1).padStart(2, "0")}
                    </span>

                    <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#D4A574]/40 text-[13px] font-semibold text-[#D4A574]">
                        {String(i + 1).padStart(2, "0")}
                    </span>

                    <h3 className="relative mt-4 text-lg font-semibold text-white sm:text-xl">
                        {w.t}
                    </h3>
                    <p className="relative mt-3 text-sm leading-relaxed text-white/80">
                        {w.d}
                    </p>
                    {/* gold underline on hover */}
                    <span className="relative mt-5 block h-px w-10 origin-left scale-x-100 bg-[#D4A574]/40 transition-transform group-hover:scale-x-150" />
                </motion.article>
            ))}
        </div>
    </div>
</section>

                {/* PATIENT JOURNEY ROADMAP */}
                <section id="patient-journey" className="w-full bg-[#FAF8F5]/80 py-20 border-y border-slate-200/80">
                    <div className="w-full max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
                        <div className="max-w-3xl mb-12">
                            <Eyebrow>Patient Journey</Eyebrow>
                            <SectionTitle>Your Care Roadmap at RamaCare</SectionTitle>
                            <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
                                From your initial consultation through aftercare and long-term maintenance, every step is guided by professional clinical assessment:
                            </p>
                        </div>

                        {/* STEP ROADMAP GRID */}
                        <ol className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                            {journey.map((step, idx) => (
                                <li
                                    key={step}
                                    className="group bg-white p-6 rounded-2xl border border-slate-200/80 shadow-2xs hover:border-[#1F5E4B]/50 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                                >
                                    <div>
                                        <div className="w-8 h-8 rounded-full bg-[#1F5E4B]/10 text-[#1F5E4B] font-bold text-xs flex items-center justify-center mb-4 group-hover:bg-[#1F5E4B] group-hover:text-white transition-colors">
                                            {idx + 1}
                                        </div>
                                        <h3 className="font-semibold text-slate-800 text-base leading-snug group-hover:text-[#1F5E4B] transition-colors">
                                            {step}
                                        </h3>
                                    </div>
                                    <span className="mt-4 block h-0.5 w-6 bg-slate-200 group-hover:w-full group-hover:bg-[#1F5E4B] transition-all duration-300" />
                                </li>
                            ))}
                        </ol>
                    </div>
                </section>

                {/* FAQ */}
                <section id="faqs" className="border-y border-slate-200 bg-[#F5F1EA]/60">
                    <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.7fr_1.3fr]">
                        <div className="lg:sticky lg:top-24 lg:self-start">
                            <Eyebrow>Frequently Asked Questions</Eyebrow>
                            <SectionTitle>Frequently Asked Questions</SectionTitle>
                        </div>
                        <div className="divide-y divide-slate-200 border-y border-slate-200">
                            {faqs.map((f) => (
                                <details key={f.q} className="group py-5">
                                    <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-left font-semibold text-base sm:text-lg text-slate-800 marker:hidden">
                                        {f.q}
                                        <span
                                            aria-hidden
                                            className="mt-1 shrink-0 text-[#1F5E4B] font-bold text-xl transition-transform group-open:rotate-45"
                                        >
                                            +
                                        </span>
                                    </summary>
                                    <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600">{f.a}</p>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section id="book-a-consultation" className="relative overflow-hidden bg-gradient-to-r from-[#1F5E4B] via-[#1A5241] to-[#154637] text-white">
                    <img
                        src={clinicImg}
                        alt="RamaCare Polyclinic Jumeirah Dubai aesthetic dermatology clinic"
                        width={1600}
                        height={1008}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover opacity-20"
                    />
                    <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
                        <div>
                            <p className="eyebrow text-emerald-300 font-semibold text-xs uppercase tracking-widest">Next Step</p>
                            <h2 className="mt-5 font-sans text-3xl sm:text-4xl font-bold leading-tight text-white">
                                Ready to Discuss Your Under-Eye Concerns?
                            </h2>
                            <p className="mt-6 max-w-2xl text-[1.02rem] leading-relaxed text-white/90">
                                The right treatment for dark circles, hollowness, or puffiness genuinely depends on what's
                                causing them &mdash; which is something a description alone can't tell you. A professional
                                consultation is the step that turns general information into a plan that actually fits
                                your skin.
                            </p>
                            <p className="mt-8 text-xs uppercase tracking-[0.16em] font-bold text-emerald-200">
                                To take the next step, choose an option below:
                            </p>
                            
                            {/* INTERACTIVE CTA BUTTON GRID */}
                            <div className="mt-5 grid gap-4 sm:grid-cols-2">
                                <Link
                                    href="/book-appointment"
                                    className="group rounded-2xl bg-white text-[#1F5E4B] p-5 text-sm font-bold shadow-xl hover:bg-[#FAF8F5] transition-all hover:scale-[1.02] flex items-center justify-between"
                                >
                                    <div className="flex items-center gap-3">
                                        <Calendar className="w-5 h-5 text-[#1F5E4B] shrink-0" />
                                        <span>Book an Appointment</span>
                                    </div>
                                    <ChevronRight className="w-4 h-4 text-[#1F5E4B] group-hover:translate-x-1 transition-transform" />
                                </Link>

                                <a
                                    href="tel:(+971) 04 286 2006"
                                    className="group rounded-2xl border border-white/30 bg-white/10 backdrop-blur-md text-white p-5 text-sm font-bold shadow-md hover:bg-white/20 transition-all hover:scale-[1.02] flex items-center justify-between"
                                >
                                    <div className="flex items-center gap-3">
                                        <Phone className="w-5 h-5 text-emerald-300 shrink-0" />
                                        <span>Call (+971) 04 286 2006</span>
                                    </div>
                                    <ChevronRight className="w-4 h-4 text-emerald-300 group-hover:translate-x-1 transition-transform" />
                                </a>

                                <a
                                    href="https://wa.me/971566597878?text=Hello%20RamaCare%20Polyclinic,%20I%20would%20like%20to%20book%20a%20consultation%20for%20Under%20Eye%20Treatment%20in%20Dubai."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group rounded-2xl border border-white/30 bg-white/10 backdrop-blur-md text-white p-5 text-sm font-bold shadow-md hover:bg-white/20 transition-all hover:scale-[1.02] flex items-center justify-between"
                                >
                                    <div className="flex items-center gap-3">
                                        <MessageCircle className="w-5 h-5 text-emerald-300 shrink-0" />
                                        <span>WhatsApp the Clinic</span>
                                    </div>
                                    <ChevronRight className="w-4 h-4 text-emerald-300 group-hover:translate-x-1 transition-transform" />
                                </a>

                                <a
                                    href="https://maps.google.com/?q=RamaCare+Polyclinic+Jumeirah+1+Dubai"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group rounded-2xl border border-white/30 bg-white/10 backdrop-blur-md text-white p-5 text-sm font-bold shadow-md hover:bg-white/20 transition-all hover:scale-[1.02] flex items-center justify-between"
                                >
                                    <div className="flex items-center gap-3">
                                        <MapPin className="w-5 h-5 text-emerald-300 shrink-0" />
                                        <span>Visit Jumeirah 1 Clinic</span>
                                    </div>
                                    <ChevronRight className="w-4 h-4 text-emerald-300 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </div>
                        <img
                            src={consultationImg}
                            alt="under-eye treatment consultation at RamaCare Polyclinic"
                            width={1200}
                            height={1408}
                            loading="lazy"
                            className="rounded-[2rem] rounded-br-[6rem] object-cover shadow-2xl border border-white/20"
                        />
                    </div>
                </section>

                {/* CONCLUSION */}
                <section id="conclusion" className="mx-auto max-w-4xl px-5 py-20 sm:px-8 bg-white">
                    <Eyebrow>Conclusion</Eyebrow>
                    <p className="mt-6 text-[1.05rem] leading-relaxed text-slate-600">
                        Under-eye concerns rarely have a single explanation, and dark circles, hollowness, and
                        puffiness can each stem from different underlying causes &mdash; sometimes overlapping,
                        sometimes entirely separate. Because of this, treatment works best when it's individualized
                        rather than applied as a standard routine. A professional assessment helps identify what's
                        actually driving your specific concern and which options, if any, are realistically
                        appropriate for you. As with any aesthetic treatment, results vary between patients, and no
                        approach can promise a permanent or universal outcome. RamaCare Polyclinic in Jumeirah 1
                        takes a consultation-based approach to Under Eye Treatment Dubai, starting with
                        understanding your concern before recommending any path forward. If you're ready to have
                        that conversation, the team is available to schedule an assessment.
                    </p>
                </section>
            </main>
        </Layout>
    );
}