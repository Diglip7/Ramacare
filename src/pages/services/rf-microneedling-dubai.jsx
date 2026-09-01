import React, { useState, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../../components/Layout';
import ContentReviewBadge from '../../../components/ContentReviewBadge';
import {
    Sparkles,
    Calendar,
    Phone,
    ArrowRight,
    CheckCircle2,
    Clock,
    Users,
    Target,
    Heart,
    ShieldCheck,
    Zap,
    ChevronRight,
    ChevronLeft,
    AlertTriangle,
    Droplets,
    Sun,
    Award,
    Activity,
    FileText,
    HelpCircle,
    Check
} from 'lucide-react';

const WhatsAppIcon = ({ className = "w-5 h-5" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.119.554 4.11 1.524 5.845L0 24l6.336-1.503C8.006 23.468 9.948 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.815 0-3.56-.475-5.088-1.378l-.365-.214-3.774.896.911-3.678-.235-.375C2.472 15.688 2 13.882 2 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10z" />
    </svg>
);

export default function RFMicroneedlingDubai() {
    const [openFaq, setOpenFaq] = useState(null);
    const [faqCategory, setFaqCategory] = useState('All');
    const navRef = useRef(null);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const scrollNav = (direction) => {
        if (navRef.current) {
            const scrollAmount = direction === 'left' ? -250 : 250;
            navRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    const faqs = [
        {
            category: "General",
            q: "What is RF microneedling?",
            a: "RF microneedling is a treatment that combines fine microneedles with radiofrequency energy to create a controlled treatment response in targeted skin layers, which may support collagen remodeling, texture, and firmness depending on individual assessment."
        },
        {
            category: "General",
            q: "How does RF microneedling work?",
            a: "Microneedles create controlled microchannels in the skin, allowing radiofrequency energy to deliver controlled heat within targeted tissue layers. This can stimulate the skin's natural healing response, including gradual collagen remodeling over time."
        },
        {
            category: "General",
            q: "What is the difference between RF microneedling and regular microneedling?",
            a: "Traditional microneedling relies only on mechanical micro-injury from the needles. RF microneedling adds radiofrequency energy delivered through the needles, which introduces a thermal component that may provide an additional skin-tightening effect."
        },
        {
            category: "Suitability & Pricing",
            q: "Is RF microneedling suitable for acne scars?",
            a: "It may be considered for selected atrophic (textural) acne scars, though suitability depends on scar type, depth, and overall skin condition. A professional assessment is needed to determine whether it's an appropriate option for your scarring."
        },
        {
            category: "General",
            q: "Can RF microneedling improve skin texture?",
            a: "Collagen remodeling stimulated by treatment may contribute to smoother-looking skin over time, though the degree of improvement varies by individual and skin condition."
        },
        {
            category: "General",
            q: "Can RF microneedling help with fine lines?",
            a: "It may help improve the appearance of selected fine lines through collagen remodeling, though it is not intended to eliminate wrinkles entirely."
        },
        {
            category: "General",
            q: "Can RF microneedling tighten loose skin?",
            a: "It may support mild-to-moderate skin firmness through collagen remodeling, but it is not equivalent to surgical lifting and results are gradual rather than immediate."
        },
        {
            category: "Procedure & Pain",
            q: "Is RF microneedling painful?",
            a: "Sensation varies by individual and can include pressure, warmth, vibration, or mild discomfort. A topical numbing agent may be used, and treatment intensity can often be adjusted for comfort, but the procedure should not be described as painless."
        },
        {
            category: "Procedure & Pain",
            q: "Is numbing cream used?",
            a: "A topical anesthetic may be applied before treatment where clinically appropriate, though this depends on individual assessment and treatment plan."
        },
        {
            category: "Procedure & Pain",
            q: "How long does an RF microneedling session take?",
            a: "Session length varies depending on the treatment area and individual plan; your clinician can provide a specific estimate during consultation."
        },
        {
            category: "Recovery & Results",
            q: "What does the skin look like immediately afterward?",
            a: "It's common to see redness, warmth, and mild swelling immediately after treatment, which are expected short-term reactions as part of the recovery process."
        },
        {
            category: "Recovery & Results",
            q: "How long is RF microneedling recovery?",
            a: "Recovery time varies according to treatment intensity, depth, area treated, and individual skin response, so there is no single recovery timeline that applies to everyone."
        },
        {
            category: "Recovery & Results",
            q: "When will I see results?",
            a: "Results develop gradually as collagen remodeling continues over the following weeks, and individual timelines vary. Completing the recommended treatment plan is generally important for evaluating outcomes."
        },
        {
            category: "Recovery & Results",
            q: "How many sessions are usually needed?",
            a: "The number of sessions depends on treatment goals, skin condition, and individual response, and is determined by your clinician following assessment and follow-up."
        },
        {
            category: "Suitability & Pricing",
            q: "Can RF microneedling be used for enlarged pores?",
            a: "As surrounding skin texture and firmness improve, pores may appear less prominent, although this is a secondary effect rather than a direct pore-reduction treatment."
        },
        {
            category: "Suitability & Pricing",
            q: "Is RF microneedling suitable for all skin types?",
            a: "Suitability depends on individual factors such as skin sensitivity and pigmentation history, and should be determined through professional assessment rather than assumed."
        },
        {
            category: "Recovery & Results",
            q: "What should I avoid after RF microneedling?",
            a: "Patients are generally advised to avoid harsh exfoliation, picking the treated skin, excessive heat or sun exposure, and irritating skincare products, though specific instructions vary by individual."
        },
        {
            category: "Suitability & Pricing",
            q: "How much does RF microneedling cost in Dubai?",
            a: "Cost depends on factors such as treatment area, number of sessions, and individual treatment plan. Contact RamaCare Polyclinic directly for current pricing relevant to your needs."
        },
        {
            category: "Suitability & Pricing",
            q: "Can RF microneedling be combined with other treatments?",
            a: (
                <span>
                    In some cases, a clinician may discuss combining RF microneedling with other skin treatments such as <Link href="/services/face-prp-in-dubai" className="text-[#1F5E4B] font-semibold underline hover:text-[#154637]">PRP treatment</Link> as part of a broader plan, depending on individual skin concerns and assessment findings.
                </span>
            )
        },
        {
            category: "Suitability & Pricing",
            q: "How can I book an RF microneedling consultation at RamaCare?",
            a: "You can contact RamaCare Polyclinic by phone or WhatsApp, or visit the clinic in Jumeirah 1, Dubai, to schedule a skin consultation and discuss whether RF microneedling may be appropriate for you."
        }
    ];

    const filteredFaqs = faqCategory === 'All'
        ? faqs
        : faqs.filter(f => f.category === faqCategory);

    const schema1_MedicalClinic = {
        "@context": "https://schema.org",
        "@type": "MedicalClinic",
        "name": "RamaCare Polyclinic",
        "url": "https://ramacarepolyclinic.ae/services/rf-microneedling-dubai",
        "image": "https://ramacarepolyclinic.ae/images/RamaCare%20Polyclinic%20Aesthetic%20Dermatology.jpg",
        "telephone": "+971566597878",
        "priceRange": "$$",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "12 Al Dhiyafah Rd, Jumeirah Terrace Building, Ground Floor",
            "addressLocality": "Jumeirah 1",
            "addressRegion": "Dubai",
            "addressCountry": "AE"
        },
        "medicalSpecialty": "Dermatology",
        "availableService": {
            "@type": "MedicalTherapy",
            "name": "RF Microneedling",
            "alternateName": "Radiofrequency Microneedling",
            "description": "A treatment combining controlled microneedling with radiofrequency energy to support collagen remodeling, skin texture, and skin firmness."
        }
    };

    const schema2_MedicalWebPage = {
        "@context": "https://schema.org",
        "@type": "MedicalWebPage",
        "url": "https://ramacarepolyclinic.ae/services/rf-microneedling-dubai",
        "name": "RF Microneedling Dubai: Skin Tightening, Texture & Rejuvenation",
        "description": "An overview of RF microneedling, how it works, what it may address, and what to expect before, during, and after treatment at RamaCare Polyclinic in Jumeirah 1, Dubai.",
        "medicalAudience": {
            "@type": "Patient"
        },
        "about": {
            "@type": "MedicalProcedure",
            "name": "RF Microneedling"
        },
        "lastReviewed": "2026-08-17",
        "procedureType": "Aesthetic Dermatology Procedure",
        "howPerformed": "A trained clinician uses an RF microneedling device to create controlled microchannels while delivering radiofrequency thermal energy into the dermis.",
        "preparation": "Skin cleansing and application of topical numbing cream where appropriate.",
        "followup": "Customized clinical aftercare, gentle hydration, sun protection, and progress evaluation.",
        "provider": {
            "@type": "MedicalClinic",
            "name": "RamaCare Polyclinic"
        }
    };   

    const schema3_FAQPage = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(f => ({
            "@type": "Question",
            "name": f.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": typeof f.a === 'string' ? f.a : "In some cases, a clinician may discuss combining RF microneedling with other skin treatments such as PRP treatment as part of a broader plan, depending on individual skin concerns and assessment findings."
            }
        }))
    };

    const schema4_BreadcrumbList = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ramacarepolyclinic.ae/" },
            { "@type": "ListItem", "position": 2, "name": "Aesthetic Dermatology", "item": "https://ramacarepolyclinic.ae/services/aesthetic-dermatology-dubai/" },
            { "@type": "ListItem", "position": 3, "name": "RF Microneedling Dubai", "item": "https://ramacarepolyclinic.ae/services/rf-microneedling-dubai/" }
        ]
    }; 

    const schema5_Organization = {
        "@context": "https://schema.org",
        "@type": "MedicalOrganization",
        "name": "RamaCare Polyclinic",
        "url": "https://ramacarepolyclinic.ae",
        "logo": "https://ramacarepolyclinic.ae/images/Logo.png",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "12 Al Dhiyafah Rd, Jumeirah Terrace Building, Ground Floor",
            "addressLocality": "Jumeirah 1",
            "addressRegion": "Dubai",
            "addressCountry": "AE"
        },
        "telephone": "+971566597878",
        "sameAs": [
            "https://www.instagram.com/ramacarepolyclinic/",
            "https://www.facebook.com/ramacarepolyclinic/"
        ]
    };

    return (
        <Layout>
            <Head>
                <title>RF Microneedling Dubai | RamaCare Polyclinic</title>
                <meta
                    name="description"
                    content="Considering RF Microneedling in Dubai? RamaCare Polyclinic offers personalized skin assessments in Jumeirah 1. Book a consultation to discuss your goals."
                />
                <link rel="canonical" href="https://ramacarepolyclinic.ae/services/rf-microneedling-dubai/" />

                {/* Open Graph Meta Tags */}
                <meta property="og:title" content="RF Microneedling Dubai | RamaCare Polyclinic" key="og:title" />
                <meta property="og:description" content="Considering RF Microneedling in Dubai? RamaCare Polyclinic offers personalized skin assessments in Jumeirah 1. Book a consultation to discuss your goals." key="og:description" />
                <meta property="og:type" content="website" key="og:type" />
                <meta property="og:url" content="https://ramacarepolyclinic.ae/services/rf-microneedling-dubai/" key="og:url" />
                <meta property="og:image" content="https://ramacarepolyclinic.ae/images/RF%20Microneedling%20consultation%20in%20Dubai.jpg" key="og:image" />
                <meta property="og:image:width" content="1200" key="og:image:width" />
                <meta property="og:image:height" content="630" key="og:image:height" />
                <meta property="og:image:alt" content="RF Microneedling consultation in Dubai at RamaCare Polyclinic" key="og:image:alt" />
                <meta property="og:site_name" content="RamaCare Polyclinic" key="og:site_name" />
                <meta property="og:locale" content="en_AE" key="og:locale" />

                {/* Twitter Card Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
                <meta name="twitter:title" content="RF Microneedling Dubai | RamaCare Polyclinic" key="twitter:title" />
                <meta name="twitter:description" content="RF Microneedling combines microneedling with radiofrequency energy to support skin texture and firmness. Personalized assessments at RamaCare Polyclinic, Jumeirah 1." key="twitter:description" />
                <meta name="twitter:image" content="https://ramacarepolyclinic.ae/images/RF%20Microneedling%20consultation%20in%20Dubai.jpg" key="twitter:image" />

                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema1_MedicalClinic) }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema2_MedicalWebPage) }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema3_FAQPage) }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema4_BreadcrumbList) }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema5_Organization) }} />
            </Head>

            <main className="min-h-screen bg-[#FAF9F5] text-[#1A1A1A] font-sans antialiased selection:bg-[#1F5E4B] selection:text-white">
                {/* ============ HERO SECTION ============ */}
                <section className="relative w-full bg-gradient-to-br from-[#0F3B2E] via-[#154637] to-[#1F5E4B] text-white pt-16 pb-28 px-4 sm:px-8 lg:px-16 overflow-hidden border-b border-[#E9E2D6]/20">
                    {/* Glowing background circles */}
                    <div className="absolute top-1/4 -right-20 w-96 h-96 bg-[#C9A961]/10 rounded-full blur-3xl pointer-events-none"></div>
                    <div className="absolute -left-20 bottom-10 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>

                    <div className="max-w-7xl mx-auto relative z-10 space-y-8">
                        {/* Breadcrumbs */}
                        <p className="text-xs font-medium uppercase tracking-wider text-white/60 flex items-center gap-2 flex-wrap">
                            <Link href="/" className="hover:text-[#C9A961] transition-colors">Home</Link>
                            <span className="text-white/30">/</span>
                            <Link href="/services/aesthetic-dermatology-dubai" className="hover:text-[#C9A961] transition-colors">Aesthetic Dermatology</Link>
                            <span className="text-white/30">/</span>
                            <span className="text-[#C9A961]">RF Microneedling Dubai</span>
                        </p>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                            {/* Left Text Column */}
                            <div className="lg:col-span-7 space-y-6">
                                <div className="inline-flex items-center gap-2 bg-[#C9A961]/20 border border-[#C9A961]/40 text-[#C9A961] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest backdrop-blur-md">
                                    <Sparkles className="w-4 h-4 shrink-0 text-[#C9A961]" />
                                    <span>DHA-Licensed Aesthetic Dermatology • Jumeirah 1</span>
                                </div>

                                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white">
                                    RF Microneedling Dubai: <span className="text-[#C9A961]">Skin Tightening</span>, Texture & Rejuvenation
                                </h1>

                                <p className="text-white/85 text-base sm:text-lg leading-relaxed font-light">
                                    Skin texture, firmness, and tone naturally change over time, and concerns like enlarged pores, fine lines, or acne scarring often prompt people to look into non-surgical treatment options. RF microneedling is one such option — a technique that pairs traditional microneedling with radiofrequency energy to encourage a controlled skin response. It has become a frequently searched treatment among people in Dubai exploring ways to support their skin's texture and firmness without surgery. Because skin type, concerns, and medical history vary widely from person to person, a professional assessment is an important first step before deciding whether this treatment is appropriate. At <Link href="/" className="text-[#C9A961] font-semibold underline hover:text-white">RamaCare Polyclinic</Link> in Jumeirah 1, <Link href="/services/aesthetic-dermatology-dubai" className="text-[#C9A961] font-semibold underline hover:text-white">Aesthetic Dermatology Dubai</Link> services are delivered by DHA-licensed professionals within a broader multidisciplinary healthcare setting, allowing treatment plans to be built around each patient's individual skin condition and goals.
                                </p>

                                <div className="flex flex-wrap items-center gap-4 pt-4">
                                    <Link
                                        href="/book-appointment"
                                        className="bg-[#C9A961] hover:bg-[#b0914e] text-white font-bold px-8 py-4 rounded-2xl text-xs tracking-wider uppercase transition-all duration-300 shadow-xl flex items-center gap-2.5 transform active:scale-95"
                                    >
                                        <Calendar className="w-4 h-4 shrink-0" />
                                        <span>Book a Consultation</span>
                                    </Link>
                                    <a
                                        href="https://wa.me/971566597878?text=Hello%20RamaCare%2C%20I%20would%20like%20to%20inquire%20about%20RF%20Microneedling%20consultation."
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-7 py-4 rounded-2xl text-xs tracking-wider uppercase transition-all duration-300 backdrop-blur-md flex items-center gap-2.5"
                                    >
                                        <WhatsAppIcon className="w-5 h-5 shrink-0 text-[#C9A961]" />
                                        <span>WhatsApp Inquiry</span>
                                    </a>
                                </div>
                            </div>

                            {/* Right Image Frame Column */}
                            <div className="lg:col-span-5 relative group">
                                <div className="absolute -bottom-3 -right-3 w-full h-full bg-gradient-to-br from-[#1F5E4B] to-[#C9A961] rounded-[32px] opacity-20 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-500 -z-10"></div>
                                <div className="relative h-80 sm:h-[420px] w-full rounded-[32px] overflow-hidden bg-white shadow-2xl ring-1 ring-[#C9A961]/30 ring-offset-4 ring-offset-[#154637]">
                                    <Image
                                        src="/images/RF Microneedling consultation in Dubai.jpg"
                                        alt="RF Microneedling consultation in Dubai at RamaCare Polyclinic"
                                        fill
                                        priority
                                        className="object-cover transition-transform duration-[1200ms] group-hover:scale-105"/>
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#154637]/60 via-transparent to-transparent"></div>
                                    <div className="absolute bottom-6 left-6 right-6 text-white text-xs font-medium bg-[#154637]/90 backdrop-blur-md p-4 rounded-2xl border border-white/15">
                                        <p className="font-bold text-[#C9A961] mb-1">RamaCare Clinical Standard</p>
                                        <p className="text-white/90">DHA Licensed Aesthetic Dermatology in Jumeirah 1, Dubai</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ============ QUICK ANSWER CARD (FLOATING OVERLAY) ============ */}
                <section className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 -mt-14 relative z-20">
                    <div className="bg-white rounded-[32px] border border-[#E9E2D6] p-8 lg:p-12 shadow-2xl space-y-4 ring-1 ring-[#C9A961]/25 ring-offset-4 ring-offset-[#FAF9F5]">
                        <div className="flex items-center gap-3">
                            <span className="w-1.5 h-6 bg-[#C9A961] rounded-full"></span>
                            <span className="text-[10px] text-[#C9A961] tracking-[0.25em] font-extrabold uppercase">Quick Answer</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#154637]">
                            What Is RF Microneedling?
                        </h2>
                        <p className="text-[#5F5F5F] text-base sm:text-lg leading-relaxed font-light">
                            RF microneedling combines controlled microneedling with radiofrequency energy to create a controlled treatment response within targeted layers of the skin. Fine needles form microchannels while radiofrequency energy delivers controlled heat beneath the surface, which may support the body's natural collagen remodeling process. It may be considered for concerns such as skin texture, mild-to-moderate skin laxity, fine lines, selected acne scars, enlarged pores, and general skin rejuvenation, depending on individual assessment.
                        </p>
                    </div>
                </section>

                {/* ============ STICKY INTERACTIVE QUICK NAVIGATION ============ */}
                <section className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E9E2D6] shadow-sm py-3 px-4 sm:px-8 lg:px-16 my-12">
                    <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
                        <button
                            onClick={() => scrollNav('left')}
                            className="p-2 rounded-full bg-[#FAF9F5] text-[#1F5E4B] hover:bg-[#F5F1EA] border border-[#E9E2D6] shrink-0 transition-colors"
                            aria-label="Scroll left"  >
                            <ChevronLeft className="w-4 h-4" />
                        </button>

                        <div
                            ref={navRef}
                            className="flex items-center gap-2 overflow-x-auto text-xs font-semibold text-[#5F5F5F] py-1 px-2 whitespace-nowrap scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
                        >
                            <a href="#what-is-rf" className="px-4 py-2 rounded-full hover:bg-[#FAF9F5] hover:text-[#1F5E4B] transition-colors border border-transparent hover:border-[#E9E2D6]">What Is RF</a>
                            <a href="#how-it-works" className="px-4 py-2 rounded-full hover:bg-[#FAF9F5] hover:text-[#1F5E4B] transition-colors border border-transparent hover:border-[#E9E2D6]">How It Works</a>
                            <a href="#concerns-addressed" className="px-4 py-2 rounded-full hover:bg-[#FAF9F5] hover:text-[#1F5E4B] transition-colors border border-transparent hover:border-[#E9E2D6]">Concerns Addressed</a>
                            <a href="#benefits" className="px-4 py-2 rounded-full hover:bg-[#FAF9F5] hover:text-[#1F5E4B] transition-colors border border-transparent hover:border-[#E9E2D6]">Benefits</a>
                            <a href="#candidates" className="px-4 py-2 rounded-full hover:bg-[#FAF9F5] hover:text-[#1F5E4B] transition-colors border border-transparent hover:border-[#E9E2D6]">Candidate Suitability</a>
                            <a href="#procedure" className="px-4 py-2 rounded-full hover:bg-[#FAF9F5] hover:text-[#1F5E4B] transition-colors border border-transparent hover:border-[#E9E2D6]">Procedure</a>
                            <a href="#pain" className="px-4 py-2 rounded-full hover:bg-[#FAF9F5] hover:text-[#1F5E4B] transition-colors border border-transparent hover:border-[#E9E2D6]">Does It Hurt?</a>
                            <a href="#recovery" className="px-4 py-2 rounded-full hover:bg-[#FAF9F5] hover:text-[#1F5E4B] transition-colors border border-transparent hover:border-[#E9E2D6]">Recovery & Aftercare</a>
                            <a href="#results-sessions" className="px-4 py-2 rounded-full hover:bg-[#FAF9F5] hover:text-[#1F5E4B] transition-colors border border-transparent hover:border-[#E9E2D6]">Results & Sessions</a>
                            <a href="#comparisons" className="px-4 py-2 rounded-full hover:bg-[#FAF9F5] hover:text-[#1F5E4B] transition-colors border border-transparent hover:border-[#E9E2D6]">Comparisons</a>
                            <a href="#acne-tightening" className="px-4 py-2 rounded-full hover:bg-[#FAF9F5] hover:text-[#1F5E4B] transition-colors border border-transparent hover:border-[#E9E2D6]">Special Focus</a>
                            <a href="#prep-cost" className="px-4 py-2 rounded-full hover:bg-[#FAF9F5] hover:text-[#1F5E4B] transition-colors border border-transparent hover:border-[#E9E2D6]">Prep & Cost</a>
                            <a href="#why-ramacare" className="px-4 py-2 rounded-full hover:bg-[#FAF9F5] hover:text-[#1F5E4B] transition-colors border border-transparent hover:border-[#E9E2D6]">Why RamaCare</a>
                            <a href="#faq" className="px-4 py-2 rounded-full hover:bg-[#FAF9F5] hover:text-[#1F5E4B] transition-colors border border-transparent hover:border-[#E9E2D6]">FAQs</a>
                        </div>

                        <button
                            onClick={() => scrollNav('right')}
                            className="p-2 rounded-full bg-[#FAF9F5] text-[#1F5E4B] hover:bg-[#F5F1EA] border border-[#E9E2D6] shrink-0 transition-colors"
                            aria-label="Scroll right"
                        >
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                </section>

                {/* ============ SECTION 1: WHAT IS RF MICRONEEDLING? ============ */}
                <section id="what-is-rf" className="max-w-7xl mx-auto py-16 px-4 sm:px-8 lg:px-16 scroll-mt-20">
                    <div className="space-y-8">
                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <span className="w-1.5 h-6 bg-[#C9A961] rounded-full"></span>
                                <span className="text-[10px] text-[#C9A961] tracking-[0.25em] font-extrabold uppercase">Dual-Technology Approach</span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#154637]">
                                What Is RF Microneedling?
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                            <div className="lg:col-span-7 space-y-6 text-[#5F5F5F] text-base sm:text-lg leading-relaxed font-light">
                                <p>
                                    RF microneedling is a treatment that combines two established aesthetic technologies: microneedling and radiofrequency (RF) energy. "RF" refers to radiofrequency, a type of energy that generates controlled heat within tissue. "Microneedling" refers to the use of very fine needles to create controlled, superficial micro-injuries in the skin. When combined, fine needles create microchannels that allow radiofrequency energy to be delivered directly into targeted layers of the dermis, rather than only at the skin's surface.
                                </p>
                                <p>
                                    This delivery of thermal energy within the skin, alongside the mechanical micro-injury from the needles, is intended to stimulate the skin's natural healing response, which can include collagen remodeling. Collagen and elastin are structural proteins that support skin firmness and elasticity, and their gradual remodeling is central to how RF microneedling is understood to work.
                                </p>
                                <p>
                                    Traditional microneedling relies solely on the mechanical micro-injury created by the needles to encourage collagen production. RF microneedling adds a thermal component, which is why it is sometimes discussed alongside skin-tightening treatments as well as texture-focused treatments.
                                </p>
                                <div className="bg-[#1F5E4B]/5 border-l-4 border-[#1F5E4B] p-6 rounded-r-2xl text-[#1A1A1A] font-medium text-sm sm:text-base leading-relaxed">
                                    It's worth noting that RF microneedling does not work identically for every skin type or every skin concern — the appropriate treatment depth, intensity, and number of sessions depend on an individualized skin assessment.
                                </div>
                            </div>

                            <div className="lg:col-span-5 relative group">
                                <div className="relative h-96 w-full rounded-[32px] overflow-hidden bg-white shadow-xl border border-[#E9E2D6]">
                                    <Image
                                        src="/images/RF microneedling skin layers and collagen remodeling illustration.jpg"
                                        alt="RF microneedling skin layers and collagen remodeling illustration"
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#154637]/70 via-transparent to-transparent"></div>
                                    <div className="absolute bottom-6 left-6 right-6 text-white text-xs font-medium">
                                        <p className="font-bold text-[#C9A961]">Targeted Subsurface Heat</p>
                                        <p className="text-white/80 mt-1">Direct radiofrequency energy delivery into targeted skin layers</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ============ SECTION 2: HOW DOES IT WORK? (7-STEP WORKFLOW) ============ */}
                <section id="how-it-works" className="bg-[#F5F1EA] py-20 px-4 sm:px-8 lg:px-16 border-y border-[#E9E2D6]/80 scroll-mt-20">
                    <div className="max-w-7xl mx-auto space-y-12">
                        <div className="text-center max-w-3xl mx-auto space-y-3">
                            <span className="bg-[#1F5E4B] text-white text-[10px] tracking-widest font-extrabold uppercase px-4 py-1.5 rounded-full inline-block">
                                Clinical Sequence
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#154637]">
                                How Does RF Microneedling Work?
                            </h2>
                            <p className="text-[#5F5F5F] text-base sm:text-lg font-light leading-relaxed">
                                The RF microneedling process generally follows a structured sequence, though specifics are adjusted based on individual assessment.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { step: "Step 1", title: "Skin Assessment", desc: "Before any treatment is considered, a clinician evaluates the skin's condition, texture, presence of scarring, degree of laxity, pigmentation history, and sensitivity, along with the patient's treatment goals. This assessment helps determine whether RF microneedling is an appropriate option and, if so, how it should be tailored." },
                                { step: "Step 2", title: "Skin Preparation", desc: "The treatment area is cleansed thoroughly to reduce the risk of irritation or infection and to prepare the skin for the procedure." },
                                { step: "Step 3", title: "Numbing", desc: "A topical anesthetic may be applied where clinically appropriate, allowing the skin time to numb before treatment begins." },
                                { step: "Step 4", title: "Microneedle Delivery", desc: "Very fine needles are used to create controlled micro-injuries at treatment depths selected based on the individual's skin assessment and treatment goals." },
                                { step: "Step 5", title: "Radiofrequency Energy", desc: "Radiofrequency energy is delivered through the needles, producing controlled heat within the targeted tissue layers." },
                                { step: "Step 6", title: "Remodeling", desc: "Following treatment, the body's natural healing response is engaged, which can support gradual collagen remodeling over the following weeks." },
                                { step: "Step 7", title: "Recovery", desc: "Short-term skin reactions such as redness, warmth, or mild swelling are common immediately after treatment and typically begin to settle within a period that varies by individual." }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-white rounded-[28px] p-7 border border-[#E9E2D6] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative space-y-4 group">
                                    <div className="inline-block bg-[#C9A961]/15 text-[#1F5E4B] text-[11px] font-extrabold uppercase px-3 py-1 rounded-lg border border-[#C9A961]/30">
                                        {item.step}
                                    </div>
                                    <h3 className="font-extrabold text-[#154637] text-xl group-hover:text-[#C9A961] transition-colors">{item.title}</h3>
                                    <p className="text-[#5F5F5F] text-sm leading-relaxed font-light">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ============ SECTION 3: CONCERNS ADDRESSED ============ */}
                <section id="concerns-addressed" className="max-w-7xl mx-auto py-20 px-4 sm:px-8 lg:px-16 scroll-mt-20">
                    <div className="space-y-12">
                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <span className="w-1.5 h-6 bg-[#C9A961] rounded-full"></span>
                                <span className="text-[10px] text-[#C9A961] tracking-[0.25em] font-extrabold uppercase">Targeted Indications</span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#154637]">
                                What Can RF Microneedling Help With?
                            </h2>
                            <p className="text-[#5F5F5F] text-base sm:text-lg font-light max-w-3xl leading-relaxed">
                                RF microneedling may be considered for several aesthetic concerns based on individual clinical evaluation. Patients looking for overall skin quality can also explore our comprehensive <Link href="/services/skin-treatment-dubai" className="text-[#1F5E4B] font-bold underline hover:text-[#154637]">Skin Treatment Dubai</Link> options:
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { title: "Skin Texture", text: "Collagen remodeling stimulated by the treatment may contribute to smoother-looking skin over time, though the degree of improvement varies by individual and skin condition." },
                                { title: "Acne Scars", text: "RF microneedling may be considered for selected textural (atrophic) acne scars. Not all acne scarring responds the same way — scar type, depth, location, and overall skin condition all influence whether this treatment, or a different approach, is more suitable. This is why RF microneedling for acne scars is generally discussed as part of a broader assessment rather than a one-size-fits-all solution." },
                                { title: "Fine Lines and Wrinkles", text: "Collagen remodeling may help improve the appearance of selected fine lines over time. RF microneedling is not intended to erase wrinkles and is more accurately understood as a texture- and firmness-supporting treatment." },
                                { title: "Enlarged Pores", text: "As surrounding skin texture and firmness improve, pores may appear less prominent, though this is a secondary effect rather than a targeted 'pore-shrinking' treatment." },
                                { title: "Skin Laxity", text: "For mild-to-moderate skin laxity, RF microneedling may be considered as part of a non-surgical approach. It is not equivalent to a surgical lift, and expectations should be discussed and calibrated during consultation." },
                                { title: "Uneven Skin Texture", text: "Beyond specific concerns like scarring, RF microneedling is often discussed in the context of overall skin quality and texture improvement." },
                                { title: "Photodamage", text: "For skin affected by sun exposure over time, RF microneedling may be considered as one component within a broader, individualized skin-rejuvenation plan rather than a standalone solution." }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-white border border-[#E9E2D6] rounded-[28px] p-7 space-y-4 hover:border-[#1F5E4B] hover:shadow-xl transition-all duration-300 group">
                                    <div className="w-12 h-12 rounded-2xl bg-[#FAF9F5] text-[#1F5E4B] flex items-center justify-center font-extrabold text-sm border border-[#E9E2D6] group-hover:bg-[#1F5E4B] group-hover:text-white transition-colors shadow-xs">
                                        {(idx + 1).toString().padStart(2, '0')}
                                    </div>
                                    <h3 className="font-bold text-[#1A1A1A] text-xl group-hover:text-[#1F5E4B] transition-colors">{item.title}</h3>
                                    <p className="text-[#5F5F5F] text-sm leading-relaxed font-light">{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ============ SECTION 4: BENEFITS OF RF MICRONEEDLING ============ */}
                <section id="benefits" className="bg-[#FAF9F5] py-20 px-4 sm:px-8 lg:px-16 border-t border-[#E9E2D6]/80 scroll-mt-20">
                    <div className="max-w-7xl mx-auto space-y-10">
                        <div className="space-y-3">
                            <span className="bg-[#1F5E4B] text-white text-[10px] tracking-widest font-extrabold uppercase px-4 py-1.5 rounded-full inline-block">
                                Treatment Potential
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#154637]">
                                Benefits of RF Microneedling
                            </h2>
                            <p className="text-[#5F5F5F] text-base sm:text-lg font-light">
                                Potential benefits associated with RF microneedling may include:
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                            {[
                                "Improvement in skin texture",
                                "Support for collagen remodeling",
                                "Improved skin firmness",
                                "Smoother-looking skin",
                                "Improvement in the appearance of selected acne scars",
                                "Reduced appearance of certain fine lines",
                                "Refined-looking pores",
                                "General skin rejuvenation",
                                "Improved overall skin quality",
                                "A non-surgical approach to supporting skin tightening"
                            ].map((benefit, idx) => (
                                <div key={idx} className="bg-white p-5 rounded-2xl border border-[#E9E2D6] flex items-center gap-4 hover:shadow-md transition-shadow">
                                    <div className="w-6 h-6 rounded-full bg-[#1F5E4B]/10 text-[#1F5E4B] flex items-center justify-center shrink-0 font-bold text-xs">
                                        ✓
                                    </div>
                                    <span className="text-[#1A1A1A] font-medium text-sm leading-relaxed">{benefit}</span>
                                </div>
                            ))}
                        </div>

                        <div className="bg-gradient-to-r from-[#1F5E4B] to-[#154637] text-white p-8 rounded-[28px] border-l-8 border-l-[#C9A961] shadow-lg space-y-2">
                            <h4 className="font-extrabold text-white text-base">Important Outcome Notice</h4>
                            <p className="text-white/85 text-sm sm:text-base leading-relaxed font-light">
                                Results vary by patient, skin condition, treatment settings, and the number of sessions completed. No specific outcome can be guaranteed, and a personalized consultation is the best way to understand what may be realistic for your skin.
                            </p>
                        </div>
                    </div>
                </section>

                {/* ============ SECTION 5 & 6: SUITABILITY & CONTRAINDICATIONS ============ */}
                <section id="candidates" className="max-w-7xl mx-auto py-20 px-4 sm:px-8 lg:px-16 scroll-mt-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        {/* Who May Be a Good Candidate */}
                        <div className="bg-white border border-[#E9E2D6] rounded-[32px] p-8 lg:p-10 space-y-6 shadow-sm hover:shadow-md transition-shadow">
                            <div className="space-y-2">
                                <div className="flex items-center gap-3">
                                    <span className="w-1.5 h-6 bg-[#1F5E4B] rounded-full"></span>
                                    <span className="text-[10px] text-[#1F5E4B] tracking-[0.25em] font-extrabold uppercase">Evaluation Standard</span>
                                </div>
                                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#154637]">
                                    Who May Be a Good Candidate?
                                </h2>
                            </div>
                            <p className="text-[#5F5F5F] text-base leading-relaxed font-light">
                                Suitability for RF microneedling depends on an individual skin assessment rather than a fixed checklist. People who raise concerns such as mild skin laxity, uneven texture, fine lines, selected acne scars, enlarged pores, early signs of skin aging, or reduced skin firmness may discuss RF microneedling with a clinician as one possible option. That said, this treatment is not automatically appropriate for everyone, and a clinical evaluation of skin condition, medical history, and treatment goals is necessary before any decision is made.
                            </p>
                        </div>

                        {/* Who May Need to Avoid or Postpone Treatment */}
                        <div className="bg-white border border-[#E9E2D6] border-t-4 border-t-[#C9A961] rounded-[32px] p-8 lg:p-10 space-y-6 shadow-sm hover:shadow-md transition-shadow">
                            <div className="space-y-2">
                                <div className="flex items-center gap-3">
                                    <span className="w-1.5 h-6 bg-[#C9A961] rounded-full"></span>
                                    <span className="text-[10px] text-[#C9A961] tracking-[0.25em] font-extrabold uppercase">Clinical Safety</span>
                                </div>
                                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#154637]">
                                    Who May Need to Avoid or Postpone Treatment?
                                </h2>
                            </div>
                            <p className="text-[#5F5F5F] text-base leading-relaxed font-light">
                                Certain conditions may require postponing treatment, further medical review, or consideration of an alternative approach. These can include active skin infection, open wounds, active inflammatory skin conditions, certain uncontrolled skin disorders, poor wound healing, certain medications, or recent aggressive skin procedures, among other factors a clinician may identify during assessment. This is not an exhaustive list, and contraindications should always be confirmed clinically rather than assumed from general information.
                            </p>
                            <div className="bg-[#FAF9F5] p-6 rounded-2xl border border-[#E9E2D6] text-sm text-[#5F5F5F] space-y-2 font-light">
                                <p className="font-bold text-[#1A1A1A]">Medical Disclosure Requirement:</p>
                                <p>
                                    Patients are asked to disclose their full medical history, current medications, existing skin conditions, recent cosmetic treatments, known allergies, and any previous reactions to aesthetic procedures, as this information directly affects whether — and how — treatment should proceed.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ============ SECTION 7: PROCEDURE AT RAMACARE ============ */}
                <section id="procedure" className="bg-[#F5F1EA] py-20 px-4 sm:px-8 lg:px-16 border-y border-[#E9E2D6]/80 scroll-mt-20">
                    <div className="max-w-7xl mx-auto space-y-12">
                        <div className="text-center max-w-3xl mx-auto space-y-3">
                            <span className="bg-[#1F5E4B] text-white text-[10px] tracking-widest font-extrabold uppercase px-4 py-1.5 rounded-full inline-block">
                                Patient Experience
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#154637]">
                                RF Microneedling Procedure at RamaCare
                            </h2>
                            <p className="text-[#5F5F5F] text-base sm:text-lg font-light">
                                Your journey at RamaCare Polyclinic is structured to ensure clinical care at every step:
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { title: "Consultation", text: "The process begins with a discussion of the patient's main skin concern, any previous treatments, current skincare routine, medical history, and expectations for treatment." },
                                { title: "Skin Assessment", text: "The clinician assesses skin texture, elasticity, scarring, pigmentation, sensitivity, and laxity to build a clear picture of the skin's current condition." },
                                { title: "Personalized Treatment Planning", text: "Because skin varies significantly from person to person, treatment settings and target areas are planned individually rather than applied using a standard protocol." },
                                { title: "Preparation", text: "The skin is cleansed, and a topical numbing agent may be applied where clinically appropriate." },
                                { title: "Treatment", text: "The RF microneedling device is used systematically over the selected treatment area according to the personalized plan." },
                                { title: "Immediate Aftercare", text: "Following treatment, temporary effects such as redness, warmth, mild swelling, tightness, or sensitivity are common and generally expected." },
                                { title: "Follow-Up", text: "A follow-up visit may be scheduled to monitor progress, review the skin's response, and determine whether further treatment is appropriate." }
                            ].map((step, idx) => (
                                <div key={idx} className="bg-white rounded-[28px] p-7 border border-[#E9E2D6] shadow-sm space-y-4 hover:shadow-md transition-shadow">
                                    <div className="w-9 h-9 rounded-full bg-[#1F5E4B] text-white flex items-center justify-center font-extrabold text-xs">
                                        {idx + 1}
                                    </div>
                                    <h3 className="font-bold text-[#154637] text-lg">{step.title}</h3>
                                    <p className="text-[#5F5F5F] text-sm leading-relaxed font-light">{step.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ============ SECTION 8: DOES IT HURT? ============ */}
                <section id="pain" className="max-w-7xl mx-auto py-20 px-4 sm:px-8 lg:px-16 scroll-mt-20">
                    <div className="bg-gradient-to-br from-white to-[#FAF9F5] border border-[#E9E2D6] rounded-[36px] p-8 lg:p-12 shadow-md relative overflow-hidden space-y-6">
                        <div className="space-y-2">
                            <div className="flex items-center gap-3">
                                <span className="w-1.5 h-6 bg-[#C9A961] rounded-full"></span>
                                <span className="text-[10px] text-[#C9A961] tracking-[0.25em] font-extrabold uppercase">Comfort & Sensation</span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#154637]">
                                Does RF Microneedling Hurt?
                            </h2>
                        </div>
                        <p className="text-[#5F5F5F] text-base sm:text-lg leading-relaxed font-light">
                            Pain tolerance and sensation vary significantly between individuals. A topical numbing agent may be used to help manage comfort during treatment. Many patients describe sensations such as pressure, warmth, vibration, or mild discomfort during the procedure rather than significant pain. Treatment intensity also influences how sensations are perceived, and clinicians can often adjust settings based on patient comfort where clinically appropriate. RF microneedling should not be described as completely painless, and individual experiences can differ.
                        </p>
                    </div>
                </section>

                {/* ============ SECTION 9 & 10: RECOVERY, AFTERCARE & RESULTS ============ */}
                <section id="recovery" className="bg-[#FAF9F5] py-20 px-4 sm:px-8 lg:px-16 border-t border-[#E9E2D6]/80 scroll-mt-20">
                    <div className="max-w-7xl mx-auto space-y-16">
                        {/* Recovery Overview */}
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <span className="bg-[#1F5E4B] text-white text-[10px] tracking-widest font-extrabold uppercase px-4 py-1.5 rounded-full inline-block">
                                    Post-Procedure Timeline
                                </span>
                                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#154637]">
                                    RF Microneedling Recovery
                                </h2>
                            </div>
                            <p className="text-[#5F5F5F] text-base sm:text-lg leading-relaxed font-light max-w-4xl">
                                Temporary reactions following treatment can include redness, mild swelling, warmth, sensitivity, and a feeling of tightness in the treated area. How quickly these settle varies according to treatment intensity, treatment depth, the area treated, and individual skin response. There is no universal recovery timeline that applies to every patient, which is why aftercare instructions are tailored to the individual and provided directly by the treating clinician.
                            </p>
                        </div>

                        {/* Aftercare Guidelines Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white border border-[#E9E2D6] rounded-[28px] p-8 space-y-6 shadow-sm">
                                <h3 className="font-extrabold text-[#154637] text-xl flex items-center gap-3">
                                    <Clock className="w-5 h-5 text-[#C9A961] shrink-0" />
                                    <span>Immediately After Treatment</span>
                                </h3>
                                <ul className="space-y-4 text-xs sm:text-sm text-[#5F5F5F] font-light leading-relaxed">
                                    <li className="flex items-start gap-3">
                                        <span className="w-5 h-5 rounded-full bg-[#1F5E4B]/10 text-[#1F5E4B] flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">✓</span>
                                        <span>Follow the clinician's specific instructions closely</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-5 h-5 rounded-full bg-[#1F5E4B]/10 text-[#1F5E4B] flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">✓</span>
                                        <span>Avoid unnecessary touching of the treated area</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-5 h-5 rounded-full bg-[#1F5E4B]/10 text-[#1F5E4B] flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">✓</span>
                                        <span>Avoid products that may irritate the skin</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-5 h-5 rounded-full bg-[#1F5E4B]/10 text-[#1F5E4B] flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">✓</span>
                                        <span>Keep the treated skin protected</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-white border border-[#E9E2D6] rounded-[28px] p-8 space-y-6 shadow-sm">
                                <h3 className="font-extrabold text-[#154637] text-xl flex items-center gap-3">
                                    <ShieldCheck className="w-5 h-5 text-[#C9A961] shrink-0" />
                                    <span>During Recovery</span>
                                </h3>
                                <ul className="space-y-4 text-xs sm:text-sm text-[#5F5F5F] font-light leading-relaxed">
                                    <li className="flex items-start gap-3">
                                        <span className="w-5 h-5 rounded-full bg-[#1F5E4B]/10 text-[#1F5E4B] flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">✓</span>
                                        <span>Use gentle, non-irritating skincare</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-5 h-5 rounded-full bg-[#1F5E4B]/10 text-[#1F5E4B] flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">✓</span>
                                        <span>Follow recommended hydration practices</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-5 h-5 rounded-full bg-[#1F5E4B]/10 text-[#1F5E4B] flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">✓</span>
                                        <span>Apply sunscreen as advised by your clinician</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-5 h-5 rounded-full bg-[#1F5E4B]/10 text-[#1F5E4B] flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">✓</span>
                                        <span>Avoid excessive heat or sun exposure where instructed</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-5 h-5 rounded-full bg-[#1F5E4B]/10 text-[#1F5E4B] flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">✓</span>
                                        <span>Avoid picking or otherwise irritating the treated skin</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-5 h-5 rounded-full bg-[#1F5E4B]/10 text-[#1F5E4B] flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">✓</span>
                                        <span>Follow all personalized aftercare instructions provided at your appointment</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <p className="text-xs text-[#5F5F5F] italic bg-white p-5 rounded-2xl border border-[#E9E2D6]">
                            Your clinician's individual instructions should always take priority over general guidance, as they are based on your specific skin response and treatment plan.
                        </p>
                    </div>
                </section>

                {/* ============ SECTION 10 & 11: WHEN RESULTS APPEAR & HOW MANY SESSIONS ============ */}
                <section id="results-sessions" className="max-w-7xl mx-auto py-20 px-4 sm:px-8 lg:px-16 scroll-mt-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        <div className="bg-white border border-[#E9E2D6] rounded-[32px] p-8 lg:p-10 space-y-4 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center gap-3">
                                <span className="w-1.5 h-6 bg-[#C9A961] rounded-full"></span>
                                <span className="text-[10px] text-[#C9A961] tracking-[0.25em] font-extrabold uppercase">Response Development</span>
                            </div>
                            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#154637]">
                                When Will Results Appear?
                            </h2>
                            <p className="text-[#5F5F5F] text-base leading-relaxed font-light">
                                Results from RF microneedling develop gradually rather than immediately. In the initial period after treatment, the skin may appear pink, mildly swollen, or sensitive as part of the expected recovery process. As the body's collagen remodeling response continues over the following weeks, some patients report progressive changes in skin texture and firmness. This process varies considerably between individuals, and completing the recommended treatment plan — rather than judging results after a single session — is generally considered important for evaluating outcomes. No specific result or exact timeline can be guaranteed.
                            </p>
                        </div>

                        <div className="bg-white border border-[#E9E2D6] rounded-[32px] p-8 lg:p-10 space-y-4 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center gap-3">
                                <span className="w-1.5 h-6 bg-[#1F5E4B] rounded-full"></span>
                                <span className="text-[10px] text-[#1F5E4B] tracking-[0.25em] font-extrabold uppercase">Treatment Frequency</span>
                            </div>
                            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#154637]">
                                How Many Sessions Are Needed?
                            </h2>
                            <p className="text-[#5F5F5F] text-base leading-relaxed font-light">
                                There is no single number of sessions that applies universally to every patient. The appropriate number depends on the treatment goal, current skin condition, scar severity where relevant, degree of skin laxity, treatment settings used, and how the individual's skin responds to treatment. A clinician determines whether additional sessions are appropriate based on assessment and follow-up review, rather than a fixed, pre-set protocol.
                            </p>
                        </div>
                    </div>
                </section>

                {/* ============ SECTION 12 & 13: COMPARISON TABLES ============ */}
                <section id="comparisons" className="bg-[#F5F1EA] py-20 px-4 sm:px-8 lg:px-16 border-y border-[#E9E2D6]/80 scroll-mt-20">
                    <div className="max-w-7xl mx-auto space-y-16">
                        {/* RF vs Traditional Microneedling */}
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <span className="bg-[#1F5E4B] text-white text-[10px] tracking-widest font-extrabold uppercase px-4 py-1.5 rounded-full inline-block">
                                    Comparative Analysis
                                </span>
                                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#154637]">
                                    RF Microneedling vs Traditional Microneedling
                                </h2>
                            </div>

                            <div className="overflow-x-auto rounded-[28px] border border-[#E9E2D6] bg-white shadow-md">
                                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                                    <thead>
                                        <tr className="bg-[#154637] text-white">
                                            <th className="p-4 sm:p-5 font-bold uppercase tracking-wider">Feature</th>
                                            <th className="p-4 sm:p-5 font-bold uppercase tracking-wider">Traditional Microneedling</th>
                                            <th className="p-4 sm:p-5 font-bold uppercase tracking-wider">RF Microneedling</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-[#E9E2D6]/60 text-[#5F5F5F] font-light">
                                        <tr className="hover:bg-[#FAF9F5] transition-colors">
                                            <td className="p-4 sm:p-5 font-bold text-[#1A1A1A]">Microneedles</td>
                                            <td className="p-4 sm:p-5">Yes</td>
                                            <td className="p-4 sm:p-5">Yes</td>
                                        </tr>
                                        <tr className="hover:bg-[#FAF9F5] transition-colors">
                                            <td className="p-4 sm:p-5 font-bold text-[#1A1A1A]">Controlled microchannels</td>
                                            <td className="p-4 sm:p-5">Yes</td>
                                            <td className="p-4 sm:p-5">Yes</td>
                                        </tr>
                                        <tr className="hover:bg-[#FAF9F5] transition-colors">
                                            <td className="p-4 sm:p-5 font-bold text-[#1A1A1A]">Radiofrequency energy</td>
                                            <td className="p-4 sm:p-5">No</td>
                                            <td className="p-4 sm:p-5 font-semibold text-[#1F5E4B]">Yes</td>
                                        </tr>
                                        <tr className="hover:bg-[#FAF9F5] transition-colors">
                                            <td className="p-4 sm:p-5 font-bold text-[#1A1A1A]">Collagen remodeling</td>
                                            <td className="p-4 sm:p-5">Yes</td>
                                            <td className="p-4 sm:p-5">Yes</td>
                                        </tr>
                                        <tr className="hover:bg-[#FAF9F5] transition-colors">
                                            <td className="p-4 sm:p-5 font-bold text-[#1A1A1A]">Skin texture focus</td>
                                            <td className="p-4 sm:p-5">Yes</td>
                                            <td className="p-4 sm:p-5">Yes</td>
                                        </tr>
                                        <tr className="hover:bg-[#FAF9F5] transition-colors">
                                            <td className="p-4 sm:p-5 font-bold text-[#1A1A1A]">Skin tightening focus</td>
                                            <td className="p-4 sm:p-5">Limited</td>
                                            <td className="p-4 sm:p-5 font-semibold text-[#1F5E4B]">Can provide an additional RF-based tightening effect</td>
                                        </tr>
                                        <tr className="hover:bg-[#FAF9F5] transition-colors">
                                            <td className="p-4 sm:p-5 font-bold text-[#1A1A1A]">Treatment customization</td>
                                            <td className="p-4 sm:p-5">Yes</td>
                                            <td className="p-4 sm:p-5">Yes</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <p className="text-sm text-[#5F5F5F] leading-relaxed font-light">
                                The most appropriate option depends on the individual's skin concerns and a clinical assessment of their skin condition. RF microneedling is not universally "better" than traditional microneedling — it is a different tool that may be more suitable for certain concerns, particularly where skin firmness is a priority alongside texture.
                            </p>
                        </div>

                        {/* RF vs Other Skin Treatments */}
                        <div className="space-y-6 pt-6">
                            <div className="space-y-2">
                                <span className="bg-[#1F5E4B] text-white text-[10px] tracking-widest font-extrabold uppercase px-4 py-1.5 rounded-full inline-block">
                                    Modality Overview
                                </span>
                                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#154637]">
                                    RF Microneedling vs Other Skin Treatments
                                </h2>
                            </div>

                            <div className="overflow-x-auto rounded-[28px] border border-[#E9E2D6] bg-white shadow-md">
                                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                                    <thead>
                                        <tr className="bg-[#154637] text-white">
                                            <th className="p-4 sm:p-5 font-bold uppercase tracking-wider">Treatment</th>
                                            <th className="p-4 sm:p-5 font-bold uppercase tracking-wider">Common Focus</th>
                                            <th className="p-4 sm:p-5 font-bold uppercase tracking-wider">Main Consideration</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-[#E9E2D6]/60 text-[#5F5F5F] font-light">
                                        <tr className="hover:bg-[#FAF9F5] transition-colors">
                                            <td className="p-4 sm:p-5 font-bold text-[#154637]">RF Microneedling</td>
                                            <td className="p-4 sm:p-5">Texture, selected scars, firmness</td>
                                            <td className="p-4 sm:p-5">Combines microneedling with RF energy</td>
                                        </tr>
                                        <tr className="hover:bg-[#FAF9F5] transition-colors">
                                            <td className="p-4 sm:p-5 font-bold text-[#1A1A1A]">Traditional Microneedling</td>
                                            <td className="p-4 sm:p-5">Texture and collagen remodeling</td>
                                            <td className="p-4 sm:p-5">Does not use RF energy</td>
                                        </tr>
                                        <tr className="hover:bg-[#FAF9F5] transition-colors">
                                            <td className="p-4 sm:p-5 font-bold text-[#1A1A1A]">Chemical Peel</td>
                                            <td className="p-4 sm:p-5">Surface texture and selected pigmentation</td>
                                            <td className="p-4 sm:p-5">Peel formulation and depth matter</td>
                                        </tr>
                                        <tr className="hover:bg-[#FAF9F5] transition-colors">
                                            <td className="p-4 sm:p-5 font-bold text-[#1A1A1A]">Laser Treatment</td>
                                            <td className="p-4 sm:p-5">Selected pigmentation, texture, or rejuvenation concerns</td>
                                            <td className="p-4 sm:p-5">Device and skin characteristics matter</td>
                                        </tr>
                                        <tr className="hover:bg-[#FAF9F5] transition-colors">
                                            <td className="p-4 sm:p-5 font-bold text-[#154637]">
                                                <Link href="/services/microdermabrasion-dubai" className="text-[#154637] font-bold underline hover:text-[#1F5E4B]">
                                                    Microdermabrasion
                                                </Link>
                                            </td>
                                            <td className="p-4 sm:p-5">Superficial exfoliation</td>
                                            <td className="p-4 sm:p-5">Generally more surface-focused</td>
                                        </tr>
                                        <tr className="hover:bg-[#FAF9F5] transition-colors">
                                            <td className="p-4 sm:p-5 font-bold text-[#154637]">
                                                <Link href="/services/skin-boosters-dubai" className="text-[#154637] font-bold underline hover:text-[#1F5E4B]">
                                                    Skin Boosters
                                                </Link>
                                            </td>
                                            <td className="p-4 sm:p-5">Hydration and skin quality</td>
                                            <td className="p-4 sm:p-5">Injectable approach</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <p className="text-sm text-[#5F5F5F] leading-relaxed font-light">
                                Each treatment approach has a different mechanism and is suited to different concerns and skin conditions. Choosing between them — or combining approaches — is best determined through a clinical consultation rather than general comparison.
                            </p>
                        </div>
                    </div>
                </section>

                {/* ============ SPECIAL FOCUS MODULES: ACNE SCARS, TIGHTENING, MEN, SKIN TYPES ============ */}
                <section id="acne-tightening" className="max-w-7xl mx-auto py-20 px-4 sm:px-8 lg:px-16 scroll-mt-20">
                    <div className="space-y-12">
                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <span className="w-1.5 h-6 bg-[#C9A961] rounded-full"></span>
                                <span className="text-[10px] text-[#C9A961] tracking-[0.25em] font-extrabold uppercase">Targeted Applications</span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#154637]">
                                Special Focus Considerations
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                            {/* Acne Scars */}
                            <div className="bg-white border border-[#E9E2D6] border-t-4 border-t-[#1F5E4B] rounded-[28px] p-8 space-y-4 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                                <div className="space-y-4">
                                    <h3 className="text-xl font-bold text-[#154637]">RF Microneedling for Acne Scars</h3>
                                    <p className="text-sm text-[#5F5F5F] leading-relaxed font-light">
                                        Acne scarring is not a single, uniform condition — different scar types (such as icepick, boxcar, or rolling scars) respond differently to treatment, and textural scarring is distinct from post-acne pigmentation. RF microneedling may be considered for selected atrophic (indented) acne scars, where controlled micro-injury combined with radiofrequency energy may support gradual improvement in skin texture around the scarred area. As with other applications, results are generally gradual rather than immediate, and multiple treatment approaches may sometimes be considered together depending on scar characteristics. A professional assessment of scar type, depth, and overall skin condition is essential before determining whether RF microneedling for acne scars is a suitable option for a given patient.
                                    </p>
                                </div>
                                <div className="relative h-55 w-full rounded-2xl overflow-hidden mt-4">
                                    <Image
                                        src="/images/RF microneedling assessment for acne scars in Dubai.jpg"
                                        alt="RF microneedling assessment for acne scars in Dubai"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                            {/* Skin Tightening */}
                            <div className="bg-white border border-[#E9E2D6] border-t-4 border-t-[#C9A961] rounded-[28px] p-8 space-y-4 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                                <div className="space-y-4">
                                    <h3 className="text-xl font-bold text-[#154637]">RF Microneedling for Skin Tightening</h3>
                                    <p className="text-sm text-[#5F5F5F] leading-relaxed font-light">
                                        The radiofrequency component of this treatment is intended to deliver controlled thermal energy within targeted skin layers, which may contribute to collagen remodeling and, in turn, support skin firmness. It is important to distinguish non-surgical <Link href="/services/skin-tightening-dubai" className="text-[#1F5E4B] font-semibold underline hover:text-[#154637]">skin tightening</Link> from surgical lifting procedures — RF microneedling is not a substitute for surgery and works through a gradual, biological remodeling process rather than the immediate, mechanical repositioning of tissue achieved surgically. Setting realistic expectations during consultation is an important part of deciding whether this treatment aligns with a patient's goals.
                                    </p>
                                </div>
                                <div className="relative h-55 w-full rounded-2xl overflow-hidden mt-4">
                                    <Image
                                        src="/images/RF skin tightening consultation.jpg"
                                        alt="RF skin tightening consultation at RamaCare Polyclinic"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                            {/* RF Microneedling for Men */}
                            <div className="bg-white border border-[#E9E2D6] border-t-4 border-t-[#1F5E4B] rounded-[28px] p-8 space-y-4 shadow-sm hover:shadow-md transition-shadow">
                                <h3 className="text-xl font-bold text-[#154637]">RF Microneedling for Men</h3>
                                <p className="text-sm text-[#5F5F5F] leading-relaxed font-light">
                                    RF microneedling is not limited by gender, and male patients raise many of the same concerns as female patients, including acne scarring, uneven skin texture, enlarged pores, fine lines, and early signs of skin laxity. Treatment suitability is based on an individual's skin condition and goals rather than gender, and the same assessment process applies to all patients considering this treatment.
                                </p>
                            </div>

                            {/* Different Skin Types */}
                            <div className="bg-white border border-[#E9E2D6] border-t-4 border-t-[#C9A961] rounded-[28px] p-8 space-y-4 shadow-sm hover:shadow-md transition-shadow">
                                <h3 className="text-xl font-bold text-[#154637]">RF Microneedling and Different Skin Types</h3>
                                <p className="text-sm text-[#5F5F5F] leading-relaxed font-light">
                                    Skin type and pigmentation history are important considerations when selecting any aesthetic treatment, including RF microneedling. Factors such as skin sensitivity, tendency toward pigmentation changes, any history of post-inflammatory pigmentation, current skin condition, and appropriate treatment parameters all influence whether and how treatment should proceed. RF microneedling should not be assumed to be automatically safe or effective for every skin type without assessment — this determination is made on an individual basis by the treating clinician.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ============ PREPARATION, WHAT TO AVOID & COST IN DUBAI ============ */}
                <section id="prep-cost" className="bg-[#FAF9F5] py-20 px-4 sm:px-8 lg:px-16 border-t border-[#E9E2D6]/80 scroll-mt-20">
                    <div className="max-w-7xl mx-auto space-y-16">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            {/* Preparation */}
                            <div className="bg-white border border-[#E9E2D6] rounded-[32px] p-8 space-y-6 shadow-sm">
                                <h2 className="text-2xl font-extrabold text-[#154637]">How to Prepare for RF Microneedling</h2>
                                <ul className="space-y-3.5 text-xs sm:text-sm text-[#5F5F5F] font-light leading-relaxed">
                                    <li className="flex items-start gap-3"><span className="w-5 h-5 rounded-full bg-[#1F5E4B]/10 text-[#1F5E4B] flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">✓</span><span>Discuss all current medications with your clinician</span></li>
                                    <li className="flex items-start gap-3"><span className="w-5 h-5 rounded-full bg-[#1F5E4B]/10 text-[#1F5E4B] flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">✓</span><span>Disclose any recent cosmetic or dermatological procedures</span></li>
                                    <li className="flex items-start gap-3"><span className="w-5 h-5 rounded-full bg-[#1F5E4B]/10 text-[#1F5E4B] flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">✓</span><span>Inform the clinician about any active skin conditions</span></li>
                                    <li className="flex items-start gap-3"><span className="w-5 h-5 rounded-full bg-[#1F5E4B]/10 text-[#1F5E4B] flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">✓</span><span>Follow any pre-treatment skincare instructions provided</span></li>
                                    <li className="flex items-start gap-3"><span className="w-5 h-5 rounded-full bg-[#1F5E4B]/10 text-[#1F5E4B] flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">✓</span><span>Avoid unnecessary skin irritation in the days before treatment</span></li>
                                    <li className="flex items-start gap-3"><span className="w-5 h-5 rounded-full bg-[#1F5E4B]/10 text-[#1F5E4B] flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">✓</span><span>Follow sun-protection guidance as advised</span></li>
                                    <li className="flex items-start gap-3"><span className="w-5 h-5 rounded-full bg-[#1F5E4B]/10 text-[#1F5E4B] flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">✓</span><span>Arrive with clean skin if instructed to do so</span></li>
                                </ul>
                                <p className="text-xs text-[#5F5F5F] italic border-t border-[#E9E2D6]/40 pt-4 font-light">
                                    Specific medication guidance should always come from your treating clinician rather than general information, since individual health circumstances vary.
                                </p>
                            </div>

                            {/* What to Avoid */}
                            <div className="bg-white border border-[#E9E2D6] rounded-[32px] p-8 space-y-6 shadow-sm">
                                <h2 className="text-2xl font-extrabold text-[#154637]">What to Avoid After RF Microneedling</h2>
                                <p className="text-sm text-[#5F5F5F] leading-relaxed font-light">
                                    Following treatment, patients are generally advised to avoid harsh exfoliation, picking or scratching the treated area, excessive heat exposure, excessive sun exposure, irritating skincare products, and any unapproved cosmetic procedures during the recovery period. Individual aftercare instructions can vary based on treatment intensity and personal skin response, so instructions provided directly by your clinician should always be followed.
                                </p>
                            </div>
                        </div>

                        {/* Pricing Section */}
                        <div className="bg-gradient-to-br from-[#1F5E4B] via-[#154637] to-[#0F3B2E] text-white rounded-[32px] p-8 sm:p-12 shadow-xl border border-[#C9A961]/30 space-y-4">
                            <span className="text-[10px] text-[#C9A961] tracking-widest font-extrabold uppercase block">Investment Transparency</span>
                            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                                How Much Does RF Microneedling Cost in Dubai?
                            </h2>
                            <p className="text-white/85 text-base leading-relaxed font-light">
                                RF microneedling pricing in Dubai is not fixed and depends on multiple factors, including the treatment area, the number of sessions recommended, the specific device or protocol used, the treatment intensity selected, findings from clinical assessment, and whether additional treatments are incorporated into the overall plan. Because every treatment plan is individualized, we encourage patients to contact RamaCare Polyclinic directly for current pricing information relevant to their specific needs.
                            </p>
                        </div>
                    </div>
                </section>

                {/* ============ SECTION 14: WHY CHOOSE RAMACARE & PATIENT JOURNEY ============ */}
                <section id="why-ramacare" className="max-w-7xl mx-auto py-20 px-4 sm:px-8 lg:px-16 scroll-mt-20 space-y-16">
                    <div className="space-y-10">
                        <div className="space-y-3">
                            <span className="bg-[#1F5E4B] text-white text-[10px] tracking-widest font-extrabold uppercase px-4 py-1.5 rounded-full inline-block">
                                Clinical Advantage
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#154637]">
                                Why Choose RamaCare Polyclinic?
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="bg-white p-7 rounded-[28px] border border-[#E9E2D6] space-y-3 shadow-xs hover:shadow-md transition-shadow">
                                    <h3 className="font-bold text-[#154637] text-lg">DHA-Licensed Healthcare Environment</h3>
                                    <p className="text-[#5F5F5F] text-sm leading-relaxed font-light">
                                        RamaCare's aesthetic dermatology services are delivered by DHA-licensed professionals within a regulated healthcare setting.
                                    </p>
                                </div>
                                <div className="bg-white p-7 rounded-[28px] border border-[#E9E2D6] space-y-3 shadow-xs hover:shadow-md transition-shadow">
                                    <h3 className="font-bold text-[#154637] text-lg">Personalized Treatment Planning</h3>
                                    <p className="text-[#5F5F5F] text-sm leading-relaxed font-light">
                                        Aesthetic treatment plans at <Link href="/" className="text-[#1F5E4B] font-semibold underline hover:text-[#154637]">RamaCare Polyclinic</Link> are customized according to each patient's individual skin type, concerns, and goals, rather than applied as a standard protocol.
                                    </p>
                                </div>
                                <div className="bg-white p-7 rounded-[28px] border border-[#E9E2D6] space-y-3 shadow-xs hover:shadow-md transition-shadow">
                                    <h3 className="font-bold text-[#154637] text-lg">Jumeirah 1 Location</h3>
                                    <p className="text-[#5F5F5F] text-sm leading-relaxed font-light">
                                        RamaCare Polyclinic is located at 12 Al Dhiyafah Rd, Jumeirah Terrace Building, Ground Floor, Jumeirah 1, Dubai, making professional skin assessment accessible within this part of the city.
                                    </p>
                                </div>
                                <div className="bg-white p-7 rounded-[28px] border border-[#E9E2D6] space-y-3 shadow-xs hover:shadow-md transition-shadow">
                                    <h3 className="font-bold text-[#154637] text-lg">Multidisciplinary Healthcare</h3>
                                    <p className="text-[#5F5F5F] text-sm leading-relaxed font-light">
                                        As a polyclinic, RamaCare combines aesthetic dermatology with a broader range of healthcare services, supporting a more complete view of each patient's overall health where relevant.
                                    </p>
                                </div>
                                <div className="bg-white p-7 rounded-[28px] border border-[#E9E2D6] space-y-3 shadow-xs hover:shadow-md transition-shadow sm:col-span-2">
                                    <h3 className="font-bold text-[#154637] text-lg">Patient-Focused Consultation</h3>
                                    <p className="text-[#5F5F5F] text-sm leading-relaxed font-light">
                                        Every treatment discussion begins with a consultation, allowing patients to ask questions, understand realistic expectations, and receive an individualized recommendation before any decision is made.
                                    </p>
                                </div>
                            </div>

                            <div className="lg:col-span-5 relative group">
                                <div className="relative h-[480px] w-full rounded-[32px] overflow-hidden bg-white shadow-xl border border-[#E9E2D6]">
                                    <Image
                                        src="/images/RamaCare Polyclinic aesthetic dermatology clinic.jpg"
                                        alt="RamaCare Polyclinic aesthetic dermatology clinic in Jumeirah 1 Dubai"
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#154637]/75 via-transparent to-transparent"></div>
                                    <div className="absolute bottom-6 left-6 right-6 text-white text-xs font-medium bg-[#154637]/90 backdrop-blur-md p-4 rounded-2xl border border-white/15">
                                        <p className="font-bold text-[#C9A961]">RamaCare Polyclinic Jumeirah 1</p>
                                        <p className="text-white/80 mt-1">12 Al Dhiyafah Rd, Jumeirah Terrace Building, Ground Floor, Dubai</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Patient Journey Visual Roadmap */}
                    <div className="bg-[#FAF9F5] border border-[#E9E2D6] rounded-[32px] p-8 sm:p-12 space-y-8 shadow-sm">
                        <h3 className="text-2xl font-extrabold text-[#154637] text-center">Patient Journey Roadmap</h3>
                        <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm font-semibold text-[#1F5E4B]">
                            {["Consultation", "Skin Assessment", "Treatment Suitability Evaluation", "Personalized Treatment Plan", "Skin Preparation", "RF Microneedling Treatment", "Aftercare", "Recovery", "Progress Review", "Additional Treatment if Appropriate"].map((step, idx, arr) => (
                                <React.Fragment key={idx}>
                                    <span className="bg-white px-4 py-2.5 rounded-2xl border border-[#E9E2D6] shadow-xs text-[#1A1A1A] font-medium">
                                        <span className="text-[#C9A961] font-bold mr-1.5">{idx + 1}.</span>{step}
                                    </span>
                                    {idx < arr.length - 1 && <ChevronRight className="w-4 h-4 text-[#C9A961] shrink-0" />}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ============ SECTION 15: FREQUENTLY ASKED QUESTIONS ============ */}
                <section id="faq" className="bg-[#F5F1EA] py-20 px-4 sm:px-8 lg:px-16 border-t border-[#E9E2D6]/80 scroll-mt-20">
                    <div className="max-w-7xl mx-auto space-y-10">
                        <div className="text-center max-w-3xl mx-auto space-y-3">
                            <span className="bg-[#1F5E4B] text-white text-[10px] tracking-widest font-extrabold uppercase px-4 py-1.5 rounded-full inline-block">
                                Clear Guidance
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#154637]">
                                Frequently Asked Questions
                            </h2>
                        </div>

                        {/* Category Filter Tabs */}
                        <div className="flex items-center justify-center gap-2 flex-wrap">
                            {['All', 'General', 'Procedure & Pain', 'Recovery & Results', 'Suitability & Pricing'].map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setFaqCategory(cat)}
                                    className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${faqCategory === cat
                                        ? 'bg-[#1F5E4B] text-white shadow-md'
                                        : 'bg-white text-[#5F5F5F] border border-[#E9E2D6] hover:bg-[#FAF9F5]'
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        <div className="max-w-4xl mx-auto space-y-4">
                            {filteredFaqs.map((faq, idx) => (
                                <div key={idx} className="bg-white border border-[#E9E2D6] rounded-2xl overflow-hidden shadow-xs">
                                    <button
                                        onClick={() => toggleFaq(idx)}
                                        className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-[#154637] text-base hover:text-[#C9A961] transition-colors"
                                    >
                                        <span>{faq.q}</span>
                                        <ChevronRight className={`w-5 h-5 text-[#1F5E4B] shrink-0 transition-transform duration-300 ${openFaq === idx ? 'rotate-90' : ''}`} />
                                    </button>
                                    {openFaq === idx && (
                                        <div className="px-6 pb-6 text-[#5F5F5F] text-sm leading-relaxed font-light border-t border-[#E9E2D6]/40 pt-4">
                                            {faq.a}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ============ SECTION 16: BOOK A CONSULTATION / FINAL CTA ============ */}
                <section className="bg-gradient-to-br from-[#0F3B2E] via-[#154637] to-[#1F5E4B] text-white py-20 px-4 sm:px-8 lg:px-16 relative overflow-hidden">
                    <div className="max-w-7xl mx-auto text-center space-y-8 relative z-10">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                            Ready to Explore RF Microneedling?
                        </h2>
                        <p className="text-white/85 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed font-light">
                            Deciding whether RF microneedling is right for your skin starts with a professional consultation. During this visit, a clinician can assess your skin condition, discuss your goals, and help you understand what may be realistic for your situation. To take the next step, you can <Link href="/book-appointment" className="text-[#C9A961] font-semibold underline hover:text-white">book an appointment</Link> directly online.
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                            <Link
                                href="/book-appointment"
                                className="bg-[#C9A961] hover:bg-[#b0914e] text-white font-bold px-8 py-4 rounded-2xl text-xs tracking-wider uppercase transition-all duration-300 shadow-xl flex items-center gap-2.5 transform active:scale-95"
                            >
                                <Calendar className="w-4 h-4 shrink-0" />
                                <span>Book an Appointment</span>
                            </Link>
                            <a
                                href="tel:+97142862006"
                                className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-7 py-4 rounded-2xl text-xs tracking-wider uppercase transition-all duration-300 flex items-center gap-2.5"
                            >
                                <Phone className="w-4 h-4 shrink-0" />
                                <span>Call RamaCare Polyclinic</span>
                            </a>
                            <a
                                href="https://wa.me/971566597878?text=Hello%20RamaCare%2C%20I%20would%20like%20to%20book%20an%20RF%20Microneedling%20consultation."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-7 py-4 rounded-2xl text-xs tracking-wider uppercase transition-all duration-300 flex items-center gap-2.5"
                            >
                                <WhatsAppIcon className="w-5 h-5 shrink-0 text-[#C9A961]" />
                                <span>WhatsApp the Clinic</span>
                            </a>
                        </div>
                    </div>
                    </section>
                {/* Content Reviewer Badge */}
                <ContentReviewBadge doctorName="Sonita Sinaga" pageSlug="/services/rf-microneedling-dubai/" />
            </main>
        </Layout>
    );
}
