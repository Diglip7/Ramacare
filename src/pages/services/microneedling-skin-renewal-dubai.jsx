import React, { useState, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../../components/Layout';
import BookConsultation from '../../../components/BookConsultation';
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
    FileText
} from 'lucide-react';

const WhatsAppIcon = ({ className = "w-5 h-5" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.119.553 4.11 1.519 5.84L0 24l6.328-1.48C7.99 23.46 9.943 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.848 0-3.575-.494-5.077-1.353l-.364-.208-3.77.882.901-3.674-.234-.378C2.536 15.772 2 13.948 2 12 2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
    </svg>
);

export default function MicroneedlingSkinRenewalServicePage() {
    const [activeFaq, setActiveFaq] = useState(null);
    const [faqSearch, setFaqSearch] = useState('');
    const [faqCategory, setFaqCategory] = useState('All');

    const navRef = useRef(null);

    const scrollNav = (direction) => {
        if (navRef.current) {
            const scrollAmount = direction === 'left' ? -280 : 280;
            navRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    const toggleFaq = (index) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "MedicalClinic",
                "@id": "https://ramacarepolyclinic.ae/#clinic",
                "name": "RamaCare Polyclinic Dubai",
                "url": "https://ramacarepolyclinic.ae/",
                "logo": "https://ramacarepolyclinic.ae/images/Logo.png",
                "image": "https://ramacarepolyclinic.ae/images/RamaCare%20Polyclinic%20Jumeirah%201.jpg",
                "telephone": "+971 56 659 7878",
                "priceRange": "$$",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "12 Al Dhiyafah Rd - Jumeirah Terrace Building, Ground Floor, Jumeirah 1",
                    "addressLocality": "Jumeirah 1",
                    "addressRegion": "Dubai",
                    "postalCode": "393558",
                    "addressCountry": "AE"
                },
                "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": "25.2325",
                    "longitude": "55.2686"
                },
                "openingHoursSpecification": [
                    {
                        "@type": "OpeningHoursSpecification",
                        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                        "opens": "10:00",
                        "closes": "22:00"
                    }
                ]
            },
            {
                "@type": "MedicalProcedure",
                "@id": "https://ramacarepolyclinic.ae/services/microneedling-skin-renewal-dubai/#procedure",
                "name": "Microneedling & Skin Renewal in Dubai",
                "alternateName": "Collagen Induction Therapy Dubai",
                "url": "https://ramacarepolyclinic.ae/services/microneedling-skin-renewal-dubai/",
                "description": "Professional microneedling and skin renewal therapy at RamaCare Polyclinic Dubai. Controlled collagen remodeling for acne scarring, fine lines, and skin texture.",
                "procedureType": "Aesthetic Dermatology Procedure",
                "howPerformed": "A trained clinician uses a professional-grade device with fine, sterile needles to create controlled micro-injuries in the skin, triggering natural collagen and elastin remodeling.",
                "preparation": "Thorough skin cleansing and application of topical numbing cream where appropriate.",
                "followup": "Customized clinical aftercare, gentle hydration, sun protection, and ongoing progress review.",
                "indication": [
                    "Uneven or rough skin texture",
                    "Textural acne scarring",
                    "Fine lines and early signs of ageing",
                    "Enlarged or visible pores",
                    "Mild skin laxity",
                    "Uneven skin tone and clarity"
                ],
                "provider": {
                    "@type": "MedicalClinic",
                    "name": "RamaCare Polyclinic Dubai"
                }
            },
            {
                "@type": "MedicalTherapy",
                "@id": "https://ramacarepolyclinic.ae/services/microneedling-skin-renewal-dubai/#therapy",
                "name": "Microneedling & Skin Renewal",
                "description": "A professionally assessed aesthetic treatment designed to support the skin's natural collagen remodeling process."
            },
            {
                "@type": "MedicalCondition",
                "@id": "https://ramacarepolyclinic.ae/services/microneedling-skin-renewal-dubai/#condition",
                "name": "Textural Acne Scars and Skin Irregularities",
                "description": "Cosmetic skin concerns including textural acne scarring, early fine lines, mild skin laxity, and uneven skin surface texture."
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://ramacarepolyclinic.ae/services/microneedling-skin-renewal-dubai/#breadcrumb",
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
                        "item": "https://ramacarepolyclinic.ae/services/"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "Aesthetic Dermatology",
                        "item": "https://ramacarepolyclinic.ae/services/aesthetic-dermatology-dubai/"
                    },
                    {
                        "@type": "ListItem",
                        "position": 4,
                        "name": "Microneedling & Skin Renewal",
                        "item": "https://ramacarepolyclinic.ae/services/microneedling-skin-renewal-dubai/"
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://ramacarepolyclinic.ae/services/microneedling-skin-renewal-dubai/#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "What is microneedling?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Microneedling is a professional aesthetic procedure that uses fine, sterile needles to create controlled micro-injuries in the skin, which may stimulate the skin's natural healing and collagen remodeling process."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is Microneedling & Skin Renewal?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Microneedling & Skin Renewal refers to using microneedling as part of a broader approach to supporting the skin's natural regeneration process, which may gradually improve skin texture and overall skin quality, depending on individual response."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is microneedling suitable for acne scars?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "It may help improve the appearance of certain textural acne scars. Suitability depends on scar type and depth, which is assessed during a consultation."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can microneedling improve skin texture?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "It may contribute to smoother-looking skin texture over a series of sessions, as part of the skin's natural remodeling response. Results vary between individuals."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Does microneedling help fine lines?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "It may be considered as part of a broader skin-rejuvenation plan to support improvements in the appearance of fine lines, though it's not typically used as a standalone solution for deeper wrinkles."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can microneedling reduce the appearance of pores?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Improvements in surrounding skin texture may make pores appear less prominent, though pore size itself is not structurally altered."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is microneedling painful?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Sensation varies by individual. Topical numbing may be used where appropriate, and most patients describe pressure or mild discomfort rather than sharp pain."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How long does a microneedling session take?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Session length varies depending on the treatment area and your specific plan. Your clinician can give you a time estimate during your consultation."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What does the skin look like immediately afterward?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "It's common to see some redness, warmth, and mild swelling immediately after treatment. These reactions are typically temporary."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How long is microneedling recovery?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Recovery time varies based on treatment intensity and individual skin response. Your clinician will explain what to expect for your specific treatment."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "When will I see results?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Results generally develop gradually over several weeks as the skin remodels itself. There is no fixed timeline, as this depends on the concern being treated and individual healing."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How many microneedling sessions are needed?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "This depends on your specific skin concern, scar depth (if relevant), and how your skin responds. Your clinician will recommend an appropriate schedule after assessment."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can I wear makeup after microneedling?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Your clinician will advise on when it's appropriate to resume makeup use, as this depends on your skin's healing and treatment depth."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What should I avoid after treatment?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Generally, harsh skincare products, excessive heat, unprotected sun exposure, and picking at the treated skin should be avoided. Specific instructions will be provided based on your treatment."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is microneedling safe?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "When performed by a trained professional in an appropriate clinical setting, microneedling is a widely used aesthetic procedure. Suitability is assessed individually, and it isn't appropriate for everyone."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can everyone have microneedling?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "No. Suitability depends on skin condition, medical history, and other individual factors. Some conditions may require the treatment to be postponed or avoided. A consultation is required to determine suitability."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is professional microneedling better than home devices?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Professional treatment offers sterility, precise depth control, and clinical assessment that at-home devices generally cannot replicate. We do not recommend performing invasive skin procedures at home."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can microneedling be combined with other treatments?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "In some cases, a clinician may discuss combining microneedling with other treatments as part of an individualized plan. This is determined on a case-by-case basis."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How much does microneedling cost in Dubai?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Pricing depends on the treatment area, intensity, and number of sessions recommended for your specific plan. Please contact RamaCare Polyclinic directly for current pricing information."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How do I book a microneedling consultation at RamaCare?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "You can contact RamaCare Polyclinic directly by phone or WhatsApp, or use our online booking option, to schedule a consultation and discuss your skin concerns with a qualified professional."
                        }
                    }
                ]
            }
        ]
    };

    const faqData = [
        {
            q: "What is microneedling?",
            a: "Microneedling is a professional aesthetic procedure that uses fine, sterile needles to create controlled micro-injuries in the skin, which may stimulate the skin's natural healing and collagen remodeling process.",
            category: "General"
        },
        {
            q: "What is Microneedling & Skin Renewal?",
            a: "Microneedling & Skin Renewal refers to using microneedling as part of a broader approach to supporting the skin's natural regeneration process, which may gradually improve skin texture and overall skin quality, depending on individual response.",
            category: "General"
        },
        {
            q: "Is microneedling suitable for acne scars?",
            a: "It may help improve the appearance of certain textural acne scars. Suitability depends on scar type and depth, which is assessed during a consultation.",
            category: "Suitability"
        },
        {
            q: "Can microneedling improve skin texture?",
            a: "It may contribute to smoother-looking skin texture over a series of sessions, as part of the skin's natural remodeling response. Results vary between individuals.",
            category: "Benefits"
        },
        {
            q: "Does microneedling help fine lines?",
            a: "It may be considered as part of a broader skin-rejuvenation plan to support improvements in the appearance of fine lines, though it's not typically used as a standalone solution for deeper wrinkles.",
            category: "Benefits"
        },
        {
            q: "Can microneedling reduce the appearance of pores?",
            a: "Improvements in surrounding skin texture may make pores appear less prominent, though pore size itself is not structurally altered.",
            category: "Benefits"
        },
        {
            q: "Is microneedling painful?",
            a: "Sensation varies by individual. Topical numbing may be used where appropriate, and most patients describe pressure or mild discomfort rather than sharp pain.",
            category: "Procedure"
        },
        {
            q: "How long does a microneedling session take?",
            a: "Session length varies depending on the treatment area and your specific plan. Your clinician can give you a time estimate during your consultation.",
            category: "Procedure"
        },
        {
            q: "What does the skin look like immediately afterward?",
            a: "It's common to see some redness, warmth, and mild swelling immediately after treatment. These reactions are typically temporary.",
            category: "Recovery"
        },
        {
            q: "How long is microneedling recovery?",
            a: "Recovery time varies based on treatment intensity and individual skin response. Your clinician will explain what to expect for your specific treatment.",
            category: "Recovery"
        },
        {
            q: "When will I see results?",
            a: "Results generally develop gradually over several weeks as the skin remodels itself. There is no fixed timeline, as this depends on the concern being treated and individual healing.",
            category: "Results"
        },
        {
            q: "How many microneedling sessions are needed?",
            a: "This depends on your specific skin concern, scar depth (if relevant), and how your skin responds. Your clinician will recommend an appropriate schedule after assessment.",
            category: "Procedure"
        },
        {
            q: "Can I wear makeup after microneedling?",
            a: "Your clinician will advise on when it's appropriate to resume makeup use, as this depends on your skin's healing and treatment depth.",
            category: "Recovery"
        },
        {
            q: "What should I avoid after treatment?",
            a: "Generally, harsh skincare products, excessive heat, unprotected sun exposure, and picking at the treated skin should be avoided. Specific instructions will be provided based on your treatment.",
            category: "Recovery"
        },
        {
            q: "Is microneedling safe?",
            a: "When performed by a trained professional in an appropriate clinical setting, microneedling is a widely used aesthetic procedure. Suitability is assessed individually, and it isn't appropriate for everyone.",
            category: "Safety"
        },
        {
            q: "Can everyone have microneedling?",
            a: "No. Suitability depends on skin condition, medical history, and other individual factors. Some conditions may require the treatment to be postponed or avoided. A consultation is required to determine suitability.",
            category: "Suitability"
        },
        {
            q: "Is professional microneedling better than home devices?",
            a: "Professional treatment offers sterility, precise depth control, and clinical assessment that at-home devices generally cannot replicate. We do not recommend performing invasive skin procedures at home.",
            category: "Safety"
        },
        {
            q: "Can microneedling be combined with other treatments?",
            a: "In some cases, a clinician may discuss combining microneedling with other treatments as part of an individualized plan. This is determined on a case-by-case basis.",
            category: "Procedure"
        },
        {
            q: "How much does microneedling cost in Dubai?",
            a: "Pricing depends on the treatment area, intensity, and number of sessions recommended for your specific plan. Please contact RamaCare Polyclinic directly for current pricing information.",
            category: "Booking"
        },
        {
            q: "How do I book a microneedling consultation at RamaCare?",
            a: "You can contact RamaCare Polyclinic directly by phone or WhatsApp, or use our online booking option, to schedule a consultation and discuss your skin concerns with a qualified professional.",
            category: "Booking"
        }
    ];

    const filteredFaqs = faqData.filter(faq => {
        const matchesCategory = faqCategory === 'All' || faq.category === faqCategory;
        const matchesSearch = faq.q.toLowerCase().includes(faqSearch.toLowerCase()) ||
            faq.a.toLowerCase().includes(faqSearch.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const whatsappMessage = encodeURIComponent("Hello RamaCare Polyclinic! I would like to book a consultation for Microneedling & Skin Renewal.");

    return (
        <Layout>
            <Head>
                <title key="title">Microneedling & Skin Renewal in Dubai | RamaCare Polyclinic</title>
                <meta
                    name="description"
                    content="Explore Microneedling & Skin Renewal at RamaCare Polyclinic Dubai. Personalized skin assessments. Book your consultation today."
                    key="description"
                />
                <meta name="keywords" content="Microneedling Dubai, Skin Renewal Dubai, Collagen Induction Therapy, Microneedling for Acne Scars Dubai, Skin Texture Improvement Dubai, RamaCare Polyclinic" />
                <link rel="canonical" href="https://ramacarepolyclinic.ae/services/microneedling-skin-renewal-dubai/" key="canonical" />

                {/* Open Graph Meta Tags */}
                <meta property="og:title" content="Microneedling & Skin Renewal in Dubai | RamaCare Polyclinic" key="og:title" />
                <meta property="og:description" content="Explore Microneedling & Skin Renewal at RamaCare Polyclinic Dubai. Personalized skin assessments. Book your consultation today." key="og:description" />
                <meta property="og:type" content="website" key="og:type" />
                <meta property="og:url" content="https://ramacarepolyclinic.ae/services/microneedling-skin-renewal-dubai/" key="og:url" />
                <meta property="og:image" content="https://ramacarepolyclinic.ae/images/Microneedling%20%26%20Skin%20Renewal%20consultation.jpg" key="og:image" />
                <meta property="og:image:width" content="1200" key="og:image:width" />
                <meta property="og:image:height" content="630" key="og:image:height" />
                <meta property="og:image:alt" content="Microneedling and Skin Renewal consultation at RamaCare Polyclinic Dubai" key="og:image:alt" />
                <meta property="og:site_name" content="RamaCare Polyclinic" key="og:site_name" />
                <meta property="og:locale" content="en_AE" key="og:locale" />

                {/* Twitter Card Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
                <meta name="twitter:title" content="Microneedling & Skin Renewal in Dubai | RamaCare Polyclinic" key="twitter:title" />
                <meta name="twitter:description" content="Personalized, doctor-assessed microneedling and skin renewal treatment in Dubai — honest expectations, no exaggerated promises." key="twitter:description" />
                <meta name="twitter:image" content="https://ramacarepolyclinic.ae/images/Microneedling%20%26%20Skin%20Renewal%20consultation.jpg" key="twitter:image" />

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
                />
            </Head>
            <div className="w-full bg-[#FAF8F5] text-[#1A1A1A] font-sans antialiased selection:bg-[#1F5E4B] selection:text-white">

                {/* TOP HERO SECTION - RICH LUXURY EMERALD MESH */}
                <header className="w-full relative bg-gradient-to-br from-[#0D2B22] via-[#1F5E4B] to-[#144234] text-white pt-14 pb-24 px-4 sm:px-8 lg:px-16 overflow-hidden shadow-2xl">
                    {/* Subtle Ambient Radial Highlights */}
                    <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#C5A880_1px,transparent_1px)] [background-size:28px_28px]"></div>
                    <div className="absolute -top-36 -right-36 w-96 h-96 rounded-full bg-[#C5A880]/15 blur-3xl"></div>
                    <div className="absolute -bottom-36 -left-36 w-96 h-96 rounded-full bg-[#1F5E4B]/40 blur-3xl"></div>

                    <div className="max-w-[1400px] mx-auto relative z-10">
                        {/* Breadcrumb Navigation */}
                        <nav className="flex items-center text-xs sm:text-sm text-emerald-100/80 mb-8 space-x-2 overflow-x-auto pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                            <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">Home</Link>
                            <ChevronRight className="w-3.5 h-3.5 opacity-60" />
                            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
                            <ChevronRight className="w-3.5 h-3.5 opacity-60" />
                            <Link href="/services/aesthetic-dermatology-dubai" className="hover:text-white transition-colors">Aesthetic Dermatology</Link>
                            <ChevronRight className="w-3.5 h-3.5 opacity-60" />
                            <span className="text-white font-semibold">Microneedling & Skin Renewal</span>
                        </nav>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                            {/* Hero Left Column */}
                            <div className="lg:col-span-7 space-y-6">
                                <div className="inline-flex items-center space-x-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full text-xs font-semibold text-white backdrop-blur-md">
                                    <Sparkles className="w-4 h-4 text-emerald-300" />
                                    <span>Aesthetic Dermatology Dubai • RamaCare Polyclinic</span>
                                </div>

                                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                                    Microneedling & Skin Renewal
                                </h1>

                                <div className="space-y-4 text-emerald-50/95 text-base sm:text-lg leading-relaxed font-normal">
                                    <p>
                                        If you've noticed changes in your skin's texture, visible acne scarring, fine lines, enlarged pores, or the general effects of sun exposure over the years, you may have come across microneedling as a possible option. At RamaCare Polyclinic Dubai, Microneedling & Skin Renewal is offered as a professionally assessed treatment designed to support the skin's own collagen remodeling process — not as an automatic solution for every skin concern.
                                    </p>
                                    <p>
                                        We understand that skin concerns are personal, and no two patients arrive with the same combination of history, skin type, and goals. That's why treatment at RamaCare always begins with a proper conversation and assessment, rather than a one-size-fits-all recommendation. Our clinicians take time to understand what's bothering you about your skin, review relevant medical history, and only then discuss whether microneedling — alone or alongside other options — makes sense for you.
                                    </p>
                                </div>

                                {/* Common Concerns Grid */}
                                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 space-y-4 shadow-lg">
                                    <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-emerald-100 flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                                        <span>Common concerns patients bring to this conversation include:</span>
                                    </h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-white">
                                        {[
                                            "Uneven or rough skin texture",
                                            "Acne scars, particularly textural scarring",
                                            "Fine lines and early signs of ageing",
                                            "Enlarged or more visible pores",
                                            "Mild skin laxity",
                                            "Skin that looks uneven in tone or clarity",
                                            "Visible signs of photodamage from sun exposure"
                                        ].map((concern, idx) => (
                                            <div key={idx} className={`flex items-center space-x-2.5 bg-white/10 p-3 rounded-xl border border-white/15 ${idx === 6 ? 'sm:col-span-2' : ''}`}>
                                                <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0" />
                                                <span>{concern}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Callout Notice */}
                                <div className="bg-white/10 border-l-4 border-emerald-300 p-4 rounded-r-2xl backdrop-blur-sm">
                                    <p className="text-white font-medium text-sm sm:text-base italic">
                                        "If any of this sounds familiar, the next step isn't booking a treatment — it's booking a conversation."
                                    </p>
                                </div>

                                {/* Hero Interactive Action Buttons */}
                                <div className="pt-2 flex flex-col sm:flex-row gap-4">
                                    <a
                                        href="#book-consultation"
                                        className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-[#C5A880] hover:bg-[#b8986c] text-[#0D2B22] font-bold text-base shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
                                    >
                                        <Calendar className="w-5 h-5" />
                                        <span>Book a Microneedling Consultation</span>
                                    </a>
                                    <a
                                        href={`https://wa.me/971566597878?text=${whatsappMessage}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold text-base shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
                                    >
                                        <WhatsAppIcon className="w-5 h-5" />
                                        <span>Chat on WhatsApp</span>
                                    </a>
                                </div>
                            </div>

                            {/* Hero Image Right Column */}
                            <div className="lg:col-span-5">
                                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 bg-emerald-950 group">
                                    <img
                                        src="/images/Microneedling & Skin Renewal consultation.jpg"
                                        alt="Microneedling & Skin Renewal consultation at RamaCare Polyclinic Dubai"
                                        className="w-full h-auto object-cover max-h-[520px] group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex items-end p-6 sm:p-8">
                                        <div className="text-white text-xs sm:text-sm bg-black/70 backdrop-blur-md p-4 rounded-2xl border border-white/20 w-full space-y-1">
                                            <p className="font-bold text-emerald-300 text-sm">RamaCare Aesthetic Care Dubai</p>
                                            <p className="text-emerald-100 text-xs">Individualized dermatological skin assessment prior to treatment.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* STICKY QUICK NAVIGATION BAR WITH TRANSPARENT ARROWS & HIDDEN SCROLLBAR */}
                <div className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
                    <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16 relative flex items-center py-2.5">

                        {/* Left Transparent Scroll Arrow */}
                        <button
                            onClick={() => scrollNav('left')}
                            aria-label="Scroll Left"
                            className="flex items-center justify-center p-2 text-[#1F5E4B] hover:text-[#144234] bg-white/70 hover:bg-white backdrop-blur-md rounded-full border border-gray-200/80 shadow-sm transition-all shrink-0 mr-2 z-10 active:scale-95"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>

                        {/* Scrollable Container with Hidden Scrollbar */}
                        <div
                            ref={navRef}
                            className="flex items-center space-x-6 overflow-x-auto py-1 text-xs sm:text-sm font-semibold text-[#5F5F5F] scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden flex-grow"
                        >
                            <span className="text-[#1F5E4B] font-bold uppercase tracking-wider shrink-0 flex items-center gap-1.5 bg-[#1F5E4B]/10 px-3 py-1 rounded-lg">
                                <Sparkles className="w-3.5 h-3.5" />
                                <span>Navigation:</span>
                            </span>
                            <a href="#what-is-microneedling" className="hover:text-[#1F5E4B] shrink-0 transition-colors py-1">What Is It</a>
                            <a href="#how-it-works" className="hover:text-[#1F5E4B] shrink-0 transition-colors py-1">How It Works</a>
                            <a href="#what-it-helps" className="hover:text-[#1F5E4B] shrink-0 transition-colors py-1">What It Helps</a>
                            <a href="#benefits" className="hover:text-[#1F5E4B] shrink-0 transition-colors py-1">Benefits</a>
                            <a href="#suitability" className="hover:text-[#1F5E4B] shrink-0 transition-colors py-1">Candidate Suitability</a>
                            <a href="#treatment-process" className="hover:text-[#1F5E4B] shrink-0 transition-colors py-1">7-Step Process</a>
                            <a href="#comfort" className="hover:text-[#1F5E4B] shrink-0 transition-colors py-1">Comfort & Sensation</a>
                            <a href="#recovery" className="hover:text-[#1F5E4B] shrink-0 transition-colors py-1">Aftercare</a>
                            <a href="#results" className="hover:text-[#1F5E4B] shrink-0 transition-colors py-1">Results Timeline</a>
                            <a href="#comparison" className="hover:text-[#1F5E4B] shrink-0 transition-colors py-1">Treatment Matrix</a>
                            <a href="#pro-vs-home" className="hover:text-[#1F5E4B] shrink-0 transition-colors py-1">Pro vs Home</a>
                            <a href="#why-ramacare" className="hover:text-[#1F5E4B] shrink-0 transition-colors py-1">Why RamaCare</a>
                            <a href="#faqs" className="hover:text-[#1F5E4B] shrink-0 transition-colors py-1">FAQs</a>
                        </div>

                        {/* Right Transparent Scroll Arrow */}
                        <button
                            onClick={() => scrollNav('right')}
                            aria-label="Scroll Right"
                            className="flex items-center justify-center p-2 text-[#1F5E4B] hover:text-[#144234] bg-white/70 hover:bg-white backdrop-blur-md rounded-full border border-gray-200/80 shadow-sm transition-all shrink-0 ml-2 z-10 active:scale-95"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* SECTION: WHAT IS MICRONEEDLING? */}
                <section id="what-is-microneedling" className="w-full bg-white py-20 px-4 sm:px-8 lg:px-16 scroll-mt-20 border-b border-gray-100">
                    <div className="max-w-[1400px] mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                            <div className="lg:col-span-7 space-y-6">
                                <div className="inline-block bg-[#1F5E4B]/10 text-[#1F5E4B] text-xs font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-lg">
                                    Clinical Foundations
                                </div>
                                <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A] tracking-tight">
                                    What Is Microneedling?
                                </h2>
                                <div className="prose max-w-none text-[#5F5F5F] leading-relaxed text-base sm:text-lg space-y-4">
                                    <p>
                                        Microneedling, sometimes referred to as collagen induction therapy, is a professional aesthetic procedure that uses a device fitted with fine, sterile needles to create controlled micro-injuries in the skin. These micro-channels are extremely small and are made in a structured, clinically controlled way — this is quite different from what an <Link href="/services/derma-roller-dubai" className="text-[#1F5E4B] underline font-semibold hover:text-[#164537]">at-home roller or device</Link> can achieve.
                                    </p>
                                    <p>
                                        The idea behind microneedling is fairly simple: the skin has a natural healing response. When it detects these tiny, controlled injuries, it begins a repair process that involves the production of collagen and elastin — two proteins that give skin its structure, firmness, and smoothness. Over time, this healing response can contribute to changes in skin texture and overall skin quality.
                                    </p>
                                    <p>
                                        It's important to be clear about what microneedling does and doesn't do. It does not “create new skin” or replace the skin's surface. What it does is stimulate a biological healing response within the existing skin, encouraging the dermis to remodel itself gradually. This is why microneedling is generally considered a supportive, gradual treatment rather than an instant fix.
                                    </p>
                                    <p>
                                        Professional microneedling differs from at-home devices in several important ways, including needle depth control, sterility standards, and the ability of a trained clinician to assess your skin and adjust the treatment accordingly. We'll cover this distinction in more detail later in this page.
                                    </p>
                                </div>
                            </div>

                            <div className="lg:col-span-5">
                                <div className="relative rounded-3xl overflow-hidden shadow-xl border border-gray-200 group">
                                    <img
                                        src="/images/professional microneedling treatment in Dubai.jpg"
                                        alt="professional microneedling treatment in Dubai"
                                        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="p-5 bg-[#1F5E4B] text-white">
                                        <p className="text-xs font-semibold uppercase tracking-wider text-emerald-200">Clinical Mechanism</p>
                                        <p className="text-base font-semibold">Controlled Micro-Injuries Triggering Collagen & Elastin Remodeling</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION: HOW DOES MICRONEEDLING WORK? */}
                <section id="how-it-works" className="w-full bg-[#F5F1EA] py-20 px-4 sm:px-8 lg:px-16 scroll-mt-20 border-b border-emerald-900/10">
                    <div className="max-w-[1400px] mx-auto">
                        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
                            <span className="text-[#1F5E4B] text-xs font-semibold uppercase tracking-wider bg-white px-3.5 py-1.5 rounded-lg inline-block border border-gray-200">
                                Biological Mechanism
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A]">
                                How Does Microneedling Work?
                            </h2>
                            <p className="text-[#5F5F5F] text-base sm:text-lg leading-relaxed">
                                Understanding the process can help set realistic expectations. Here's a general step-by-step overview of how a microneedling session typically unfolds:
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { num: "01", title: "Skin assessment", desc: "Your clinician examines your skin, discusses your concerns, and reviews relevant medical history." },
                                { num: "02", title: "Cleansing and preparation", desc: "The treatment area is thoroughly cleansed to reduce the risk of irritation or infection." },
                                { num: "03", title: "Topical numbing where appropriate", desc: "Depending on the treatment area and your comfort level, a topical numbing cream may be applied." },
                                { num: "04", title: "Controlled microneedling", desc: "A sterile, professional-grade device is used to create controlled micro-injuries in the skin, with depth adjusted based on your skin's condition and the concern being addressed." },
                                { num: "05", title: "The skin's healing response begins", desc: "Almost immediately, the body starts its natural repair process." },
                                { num: "06", title: "Collagen and elastin remodeling", desc: "Over the following weeks, the dermis undergoes gradual remodeling as new collagen forms." },
                                { num: "07", title: "Gradual improvement over time", desc: "Changes in skin texture typically develop progressively rather than appearing overnight." },
                                { num: "08", title: "Follow-up and maintenance", desc: "Your clinician may review your progress and discuss whether further sessions are appropriate." }
                            ].map((step, idx) => (
                                <div key={idx} className="bg-white rounded-2xl p-6 shadow-md border border-gray-200 hover:border-[#1F5E4B] hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                                    <div>
                                        <span className="text-2xl font-bold text-[#1F5E4B] block mb-2">{step.num}</span>
                                        <h3 className="text-base font-bold text-[#1A1A1A] mb-2">{step.title}</h3>
                                        <p className="text-[#5F5F5F] text-sm leading-relaxed">{step.desc}</p>
                                    </div>
                                    <div className="mt-5 pt-3 border-t border-gray-100 text-xs font-semibold text-[#1F5E4B]">
                                        Step {idx + 1} of 8
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Diagram Image & Concluding Note */}
                        <div className="mt-14 bg-[#1F5E4B] text-white rounded-3xl p-8 sm:p-12 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                            <div className="lg:col-span-5">
                                <img
                                    src="/images/microneedling skin layers and collagen remodeling.jpg"
                                    alt="microneedling skin layers and collagen remodeling illustration"
                                    className="rounded-2xl border border-white/20 shadow-lg object-cover w-full h-auto max-h-64"/>
                            </div>
                            <div className="lg:col-span-7 space-y-4">
                                <span className="bg-white/20 text-white text-xs font-semibold uppercase px-3.5 py-1 rounded-full">
                                    Biological Process Realities
                                </span>
                                <h3 className="text-2xl font-bold">Gradual Dermal Remodeling</h3>
                                <p className="text-emerald-50 text-base sm:text-lg leading-relaxed">
                                    Because skin renewal is a biological process, visible changes generally build up over several weeks, not within a single session.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION: WHAT CAN IT HELP WITH? */}
                <section id="what-it-helps" className="w-full bg-white py-20 px-4 sm:px-8 lg:px-16 scroll-mt-20">
                    <div className="max-w-[1400px] mx-auto">
                        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
                            <span className="text-[#1F5E4B] text-xs font-semibold uppercase tracking-wider bg-[#1F5E4B]/10 px-3.5 py-1.5 rounded-lg inline-block">
                                Target Indications
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A]">
                                Microneedling & Skin Renewal: What Can It Help With?
                            </h2>
                            <p className="text-[#5F5F5F] text-base sm:text-lg leading-relaxed">
                                Microneedling & Skin Renewal is generally considered for a defined set of cosmetic skin concerns. It's worth understanding how each concern relates to the treatment, since expectations differ depending on what you're addressing.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-[#FAF8F5] rounded-3xl p-8 shadow-sm border border-gray-200 hover:shadow-md hover:border-[#1F5E4B]/40 transition-all">
                                <div className="w-12 h-12 rounded-2xl bg-[#1F5E4B] text-white flex items-center justify-center font-bold text-lg mb-5 shadow-sm">
                                    01
                                </div>
                                <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">Acne Scars</h3>
                                <p className="text-[#5F5F5F] text-sm leading-relaxed">
                                    Microneedling may help improve the appearance of certain types of <Link href="/services/acne-treatment-dubai" className="text-[#1F5E4B] underline font-semibold hover:text-[#164537]">acne scarring</Link>, particularly textural scars where the skin's surface has an uneven contour. Not all acne scars respond the same way — scar depth, age, and type (textural versus pigmented) all influence how a clinician approaches treatment planning.
                                </p>
                            </div>

                            <div className="bg-[#FAF8F5] rounded-3xl p-8 shadow-sm border border-gray-200 hover:shadow-md hover:border-[#1F5E4B]/40 transition-all">
                                <div className="w-12 h-12 rounded-2xl bg-[#1F5E4B] text-white flex items-center justify-center font-bold text-lg mb-5 shadow-sm">
                                    02
                                </div>
                                <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">Uneven Skin Texture</h3>
                                <p className="text-[#5F5F5F] text-sm leading-relaxed">
                                    Rough or uneven-feeling skin texture is one of the more common reasons patients ask about microneedling. The controlled collagen remodeling triggered by treatment may contribute to smoother-looking skin over a series of sessions, though the degree of change varies between individuals.
                                </p>
                            </div>

                            <div className="bg-[#FAF8F5] rounded-3xl p-8 shadow-sm border border-gray-200 hover:shadow-md hover:border-[#1F5E4B]/40 transition-all">
                                <div className="w-12 h-12 rounded-2xl bg-[#1F5E4B] text-white flex items-center justify-center font-bold text-lg mb-5 shadow-sm">
                                    03
                                </div>
                                <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">Fine Lines and Early Wrinkles</h3>
                                <p className="text-[#5F5F5F] text-sm leading-relaxed">
                                    Microneedling is sometimes included as part of a broader skin-rejuvenation plan aimed at softening the appearance of fine lines. It is not typically presented as a standalone solution for deeper, more established wrinkles, and your clinician can advise on realistic expectations for your specific skin.
                                </p>
                            </div>

                            <div className="bg-[#FAF8F5] rounded-3xl p-8 shadow-sm border border-gray-200 hover:shadow-md hover:border-[#1F5E4B]/40 transition-all">
                                <div className="w-12 h-12 rounded-2xl bg-[#1F5E4B] text-white flex items-center justify-center font-bold text-lg mb-5 shadow-sm">
                                    04
                                </div>
                                <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">Enlarged Pores</h3>
                                <p className="text-[#5F5F5F] text-sm leading-relaxed">
                                    Pores don't shrink, but improvements in the texture of the surrounding skin can sometimes make them appear less prominent. This is a gradual, cosmetic effect rather than a structural change to the pore itself.
                                </p>
                            </div>

                            <div className="bg-[#FAF8F5] rounded-3xl p-8 shadow-sm border border-gray-200 hover:shadow-md hover:border-[#1F5E4B]/40 transition-all">
                                <div className="w-12 h-12 rounded-2xl bg-[#1F5E4B] text-white flex items-center justify-center font-bold text-lg mb-5 shadow-sm">
                                    05
                                </div>
                                <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">Mild Skin Laxity</h3>
                                <p className="text-[#5F5F5F] text-sm leading-relaxed">
                                    For patients noticing early, mild skin laxity, microneedling may be considered as part of a wider discussion around <Link href="/services/skin-tightening-dubai" className="text-[#1F5E4B] underline font-semibold hover:text-[#164537]">skin firmness</Link>. Expectations here should remain realistic — this is a supportive treatment, not a substitute for more invasive procedures aimed at significant tightening.
                                </p>
                            </div>

                            <div className="bg-[#FAF8F5] rounded-3xl p-8 shadow-sm border border-gray-200 hover:shadow-md hover:border-[#1F5E4B]/40 transition-all">
                                <div className="w-12 h-12 rounded-2xl bg-[#1F5E4B] text-white flex items-center justify-center font-bold text-lg mb-5 shadow-sm">
                                    06
                                </div>
                                <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">Uneven Skin Appearance</h3>
                                <p className="text-[#5F5F5F] text-sm leading-relaxed">
                                    Some patients simply feel their skin looks uneven or lacks clarity, without a single defining concern. In these cases, microneedling may be considered as one component of an individualized skin-rejuvenation plan, alongside appropriate skincare and, where relevant, other treatments.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION: BENEFITS OF MICRONEEDLING */}
                <section id="benefits" className="w-full bg-[#1F5E4B] text-white py-20 px-4 sm:px-8 lg:px-16 scroll-mt-20 shadow-xl">
                    <div className="max-w-[1400px] mx-auto">
                        <div className="max-w-3xl mb-10 space-y-3">
                            <span className="bg-white/15 text-white text-xs font-semibold uppercase px-3.5 py-1.5 rounded-lg border border-white/20 inline-block">
                                Potential Outcomes
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-bold text-white">
                                Benefits of Microneedling
                            </h2>
                            <p className="text-emerald-50 text-base sm:text-lg leading-relaxed">
                                Based on its underlying mechanism, microneedling may offer the following potential benefits. As with any aesthetic treatment, outcomes vary between individuals depending on skin type, concern, and treatment plan.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
                            {[
                                "Improved skin texture over time",
                                "A smoother-looking skin surface",
                                "Support for the skin's natural collagen remodeling process",
                                "Improved appearance of selected types of acne scarring",
                                "A reduction in the appearance of fine lines, as part of a broader plan",
                                "Refined-looking pores",
                                "General improvement in overall skin quality",
                                "Gradual, progressive skin rejuvenation",
                                "The ability to personalize treatment intensity to your skin's needs"
                            ].map((benefit, idx) => (
                                <div key={idx} className="bg-white/10 p-5 rounded-2xl border border-white/15 flex items-start space-x-3.5 hover:bg-white/15 transition-all">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-300 shrink-0 mt-0.5" />
                                    <span className="text-emerald-50 text-sm sm:text-base font-medium leading-snug">{benefit}</span>
                                </div>
                            ))}
                        </div>

                        <div className="bg-white/10 border border-white/20 rounded-2xl p-6 text-emerald-50 text-xs sm:text-sm">
                            <p className="font-bold text-white mb-1">Clinical Disclaimer:</p>
                            <p>
                                These are potential benefits associated with the treatment mechanism — not guarantees. Your clinician will discuss what's realistic for your specific skin during your consultation.
                            </p>
                        </div>
                    </div>
                </section>

                {/* SECTION: CANDIDATE SUITABILITY */}
                <section id="suitability" className="w-full bg-[#FAF8F5] py-20 px-4 sm:px-8 lg:px-16 scroll-mt-20 border-b border-gray-200">
                    <div className="max-w-[1400px] mx-auto space-y-12">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                            {/* WHO MAY BE A CANDIDATE */}
                            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-gray-200 flex flex-col justify-between">
                                <div>
                                    <div className="inline-block bg-[#1F5E4B]/10 text-[#1F5E4B] text-xs font-semibold uppercase px-3.5 py-1.5 rounded-lg mb-4">
                                        Evaluation Criteria
                                    </div>
                                    <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] mb-4">
                                        Who May Be a Candidate?
                                    </h2>
                                    <p className="text-[#5F5F5F] text-sm sm:text-base mb-6 leading-relaxed">
                                        Suitability for microneedling is determined on an individual basis. Several factors are taken into account, including:
                                    </p>
                                    <ul className="space-y-3.5 text-sm sm:text-base text-[#1A1A1A] mb-6">
                                        {[
                                            "Your current skin condition",
                                            "The primary concern you'd like to address",
                                            "Your general and dermatological medical history",
                                            "Any active skin conditions",
                                            "Previous cosmetic or dermatological procedures",
                                            "Current medications",
                                            "Your skin's healing capacity",
                                            "Your expectations for the outcome"
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex items-start space-x-3">
                                                <CheckCircle2 className="w-5 h-5 text-[#1F5E4B] shrink-0 mt-0.5" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="bg-[#F5F1EA] p-5 rounded-2xl border border-gray-200 text-xs sm:text-sm text-[#5F5F5F]">
                                    <p className="font-bold text-[#1F5E4B] mb-1">Consultation Requirement:</p>
                                    <p>
                                        A consultation is a necessary first step before any treatment is recommended. This isn't a formality — it's how your clinician determines whether microneedling is appropriate for you, and if so, how the treatment should be tailored.
                                    </p>
                                </div>
                            </div>

                            {/* WHO MAY NOT BE SUITABLE */}
                            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-gray-200 flex flex-col justify-between">
                                <div>
                                    <div className="inline-block bg-gray-100 text-[#1A1A1A] text-xs font-semibold uppercase px-3.5 py-1.5 rounded-lg mb-4">
                                        Safety Contraindications
                                    </div>
                                    <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] mb-4">
                                        Who May Not Be Suitable?
                                    </h2>
                                    <p className="text-[#5F5F5F] text-sm sm:text-base mb-6 leading-relaxed">
                                        There are situations where microneedling may need to be postponed, avoided, or reviewed carefully by a clinician before proceeding. These can include, but are not limited to:
                                    </p>
                                    <ul className="space-y-3.5 text-sm sm:text-base text-[#1A1A1A] mb-6">
                                        {[
                                            "Active skin infections",
                                            "An active inflammatory skin flare-up",
                                            "Open wounds or broken skin in the treatment area",
                                            "Certain uncontrolled skin conditions",
                                            "A history of poor wound healing",
                                            "Certain medications that affect skin healing or bleeding",
                                            "Recent aggressive cosmetic procedures in the same area",
                                            "Other factors identified by your clinician during assessment"
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex items-start space-x-3">
                                                <AlertTriangle className="w-5 h-5 text-[#5F5F5F] shrink-0 mt-0.5" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="bg-[#F5F1EA] p-5 rounded-2xl border border-gray-200 text-xs sm:text-sm text-[#5F5F5F]">
                                    <p className="font-bold text-[#1A1A1A] mb-1">Medical Disclosure:</p>
                                    <p>
                                        This is not an exhaustive list. It's essential that you disclose your full medical history, current medications, any active skin conditions, and details of recent cosmetic procedures during your consultation, so your clinician can make an informed and safe recommendation.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION: TREATMENT PROCESS */}
                <section id="treatment-process" className="w-full bg-gradient-to-b from-[#FAF8F5] via-white to-[#FAF8F5] py-20 px-4 sm:px-8 lg:px-16 scroll-mt-20 relative overflow-hidden">
                    {/* Background Decorative Blur Orbs */}
                    <div className="absolute top-1/4 -left-20 w-80 h-80 bg-[#1F5E4B]/5 rounded-full blur-3xl pointer-events-none"></div>
                    <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-[#C9A961]/10 rounded-full blur-3xl pointer-events-none"></div>

                    <div className="max-w-[1200px] mx-auto space-y-12 relative z-10">
                        {/* Section Header */}
                        <div className="text-center max-w-3xl mx-auto space-y-3">
                            <span className="text-[#1F5E4B] text-xs font-semibold uppercase tracking-wider bg-[#1F5E4B]/10 px-3.5 py-1.5 rounded-lg inline-block">
                                Clinical Protocol
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A]">
                                Microneedling Treatment Process at RamaCare
                            </h2>
                        </div>

                        {/* Step Navigator Overview */}
                        <div className="hidden lg:grid grid-cols-7 gap-2 bg-white p-3 rounded-2xl border border-gray-200/80 shadow-xs">
                            {[
                                { step: "01", name: "Consultation" },
                                { step: "02", name: "Assessment" },
                                { step: "03", name: "Preparation" },
                                { step: "04", name: "Procedure" },
                                { step: "05", name: "Post-Care" },
                                { step: "06", name: "Recovery" },
                                { step: "07", name: "Follow-Up" }
                            ].map((nav, idx) => (
                                <a
                                    key={idx}
                                    href={`#step-${idx + 1}`}
                                    className="flex flex-col items-center p-2.5 rounded-xl hover:bg-[#1F5E4B]/10 transition-all duration-200 group text-center"
                                >
                                    <span className="text-[11px] font-bold text-[#1F5E4B] group-hover:scale-110 transition-transform">
                                        Step {nav.step}
                                    </span>
                                    <span className="text-xs font-semibold text-[#5F5F5F] group-hover:text-[#1A1A1A] truncate w-full mt-0.5">
                                        {nav.name}
                                    </span>
                                </a>
                            ))}
                        </div>

                        {/* Vertical Timeline Process */}
                        <div className="relative">
                            {/* Vertical Connecting Line (Desktop) */}
                            <div className="hidden md:block absolute left-[31px] top-8 bottom-8 w-0.5 bg-gradient-to-b from-[#1F5E4B] via-[#2A7E65] to-[#1F5E4B]/20 rounded-full z-0"></div>

                            <div className="space-y-6 sm:space-y-8 relative z-10">
                                {[
                                    {
                                        step: "Step 1",
                                        title: "Consultation",
                                        text: "Your visit starts with a conversation. Your clinician will ask about your skin concerns, any previous treatments you've had, your current skincare routine, relevant medical history, medications, and what you're hoping to achieve.",
                                        icon: FileText
                                    },
                                    {
                                        step: "Step 2",
                                        title: "Skin Assessment",
                                        text: "Your clinician will evaluate your skin's texture, any scarring, pigmentation, sensitivity, signs of photodamage, and overall condition. This assessment directly informs the treatment plan.",
                                        icon: Activity
                                    },
                                    {
                                        step: "Step 3",
                                        title: "Treatment Preparation",
                                        text: "The treatment area is cleansed thoroughly. Depending on clinical judgment and the area being treated, a topical numbing cream may be applied and given time to take effect.",
                                        icon: Droplets
                                    },
                                    {
                                        step: "Step 4",
                                        title: "Microneedling Procedure",
                                        text: "A professional-grade device is used to create controlled microscopic channels in the skin. Your clinician adjusts needle depth and treatment intensity based on your skin's condition and the concern being addressed.",
                                        icon: Zap
                                    },
                                    {
                                        step: "Step 5",
                                        title: "Immediate Post-Treatment Care",
                                        text: "It's common to notice some temporary reactions immediately after treatment, including redness, warmth, mild swelling, tightness, or general sensitivity in the treated area. These are typical short-term responses to the procedure.",
                                        icon: ShieldCheck
                                    },
                                    {
                                        step: "Step 6",
                                        title: "Recovery",
                                        text: "Recovery time varies depending on treatment intensity and how your individual skin responds. Your clinician will give you a general idea of what to expect based on your specific treatment.",
                                        icon: Clock
                                    },
                                    {
                                        step: "Step 7",
                                        title: "Follow-Up",
                                        text: "A follow-up conversation can help assess how your skin has responded and whether additional sessions are appropriate for your goals.",
                                        icon: CheckCircle2
                                    }
                                ].map((item, idx) => (
                                    <div
                                        key={idx}
                                        id={`step-${idx + 1}`}
                                        className="relative flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-8 group scroll-mt-28"
                                    >
                                        {/* Step Icon Badge & Node */}
                                        <div className="flex items-center space-x-4 md:space-x-0 shrink-0 z-10">
                                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1F5E4B] via-[#154637] to-[#0E3025] text-white flex items-center justify-center font-bold shadow-md shadow-[#1F5E4B]/20 group-hover:scale-105 group-hover:shadow-lg transition-all duration-300 border-2 border-white ring-4 ring-[#1F5E4B]/10">
                                                <item.icon className="w-7 h-7 text-white" />
                                            </div>
                                            <div className="md:hidden flex items-center space-x-2">
                                                <span className="bg-[#1F5E4B]/10 border border-[#1F5E4B]/20 text-[#1F5E4B] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                                    {item.step}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Content Card */}
                                        <div className="flex-1 w-full bg-white rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-xl border border-gray-200/80 hover:border-[#1F5E4B]/30 transition-all duration-300 relative overflow-hidden">
                                            {/* Large Watermark Step Number */}
                                            <span className="absolute top-2 right-5 text-5xl sm:text-7xl font-black text-[#1F5E4B]/5 group-hover:text-[#1F5E4B]/12 select-none pointer-events-none transition-colors duration-300">
                                                {`0${idx + 1}`}
                                            </span>

                                            {/* Hover Accent Line */}
                                            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#1F5E4B] via-[#2A7E65] to-[#C9A961] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                            <div className="relative z-10 space-y-3">
                                                <div className="hidden md:flex items-center space-x-3">
                                                    <span className="bg-[#1F5E4B]/10 border border-[#1F5E4B]/20 text-[#1F5E4B] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                                        {item.step}
                                                    </span>
                                                </div>
                                                <h3 className="text-xl sm:text-2xl font-bold text-[#1A1A1A] group-hover:text-[#1F5E4B] transition-colors duration-300">
                                                    {item.title}
                                                </h3>
                                                <p className="text-[#5F5F5F] text-sm sm:text-base leading-relaxed">
                                                    {item.text}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION: DOES MICRONEEDLING HURT? */}
                <section id="comfort" className="w-full bg-[#FAF8F5] py-20 px-4 sm:px-8 lg:px-16 scroll-mt-20 border-y border-gray-200">
                    <div className="max-w-[1400px] mx-auto">
                        <div className="bg-white rounded-3xl p-8 sm:p-14 shadow-lg border border-gray-200 space-y-6">
                            <div className="inline-block bg-[#1F5E4B]/10 text-[#1F5E4B] text-xs font-semibold uppercase px-3.5 py-1.5 rounded-lg">
                                Patient Sensation & Comfort
                            </div>
                            <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A]">
                                Does Microneedling Hurt?
                            </h2>
                            <div className="prose max-w-none text-[#5F5F5F] text-base sm:text-lg leading-relaxed space-y-4">
                                <p>
                                    This is one of the most common questions patients ask, and it deserves an honest answer: sensation during microneedling varies from person to person. Depending on the treatment area and your personal comfort level, a topical numbing cream may be applied beforehand to help minimize discomfort.
                                </p>
                                <p>
                                    During treatment, most patients describe feeling pressure, vibration, or mild discomfort rather than sharp pain. Sensitivity can vary depending on the area being treated and individual pain tolerance. Treatment intensity also plays a role — your clinician can adjust the device settings based on how you're tolerating the procedure.
                                </p>
                                <p>
                                    We won't tell you the treatment is completely painless, because that wouldn't be accurate. What we can tell you is that your comfort is taken into account throughout, and you're encouraged to communicate with your clinician during the session.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION: RECOVERY AND AFTERCARE */}
                <section id="recovery" className="w-full bg-[#F5F1EA] py-20 px-4 sm:px-8 lg:px-16 scroll-mt-20 border-b border-emerald-900/10">
                    <div className="max-w-[1400px] mx-auto space-y-12">
                        <div className="text-center max-w-3xl mx-auto space-y-3">
                            <span className="text-[#1F5E4B] text-xs font-semibold uppercase tracking-wider bg-white px-3.5 py-1.5 rounded-lg inline-block border border-gray-200">
                                Post-Treatment Care
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A]">
                                Microneedling Recovery and Aftercare
                            </h2>
                            <p className="text-[#5F5F5F] text-base sm:text-lg leading-relaxed">
                                Aftercare plays an important role in how your skin responds to treatment. Here's a general overview — your clinician will provide specific instructions tailored to your treatment depth and skin condition.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* FIRST 24 HOURS */}
                            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-md border border-gray-200">
                                <div className="flex items-center space-x-4 mb-6">
                                    <span className="w-12 h-12 rounded-2xl bg-[#1F5E4B] text-white flex items-center justify-center font-bold text-base shadow-sm">
                                        24h
                                    </span>
                                    <h3 className="text-2xl font-bold text-[#1A1A1A]">First 24 Hours</h3>
                                </div>
                                <ul className="space-y-3.5 text-sm sm:text-base text-[#5F5F5F]">
                                    {[
                                        "Follow your clinician's specific instructions closely",
                                        "Avoid unnecessarily touching the treated area",
                                        "Avoid harsh or active skincare products",
                                        "Avoid excessive heat exposure where advised (such as saunas or hot showers)"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start space-x-3">
                                            <CheckCircle2 className="w-5 h-5 text-[#1F5E4B] shrink-0 mt-0.5" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* FOLLOWING DAYS */}
                            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-md border border-gray-200">
                                <div className="flex items-center space-x-4 mb-6">
                                    <span className="w-12 h-12 rounded-2xl bg-[#1F5E4B] text-white flex items-center justify-center font-bold text-base shadow-sm">
                                        Days
                                    </span>
                                    <h3 className="text-2xl font-bold text-[#1A1A1A]">Following Days</h3>
                                </div>
                                <ul className="space-y-3.5 text-sm sm:text-base text-[#5F5F5F]">
                                    {[
                                        "Use gentle, non-irritating skincare products",
                                        "Maintain appropriate skin hydration",
                                        "Apply sunscreen daily as recommended by your clinician",
                                        "Avoid picking or irritating the treated skin",
                                        "Follow the individualized aftercare plan provided to you"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start space-x-3">
                                            <CheckCircle2 className="w-5 h-5 text-[#1F5E4B] shrink-0 mt-0.5" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 text-[#5F5F5F] text-sm sm:text-base leading-relaxed shadow-sm">
                            <p>
                                Redness typically settles within a few days for most patients, though this varies. Sun protection deserves particular attention during the healing period, since freshly treated skin can be more sensitive to UV exposure. Your clinician will walk you through exactly what your skin needs during recovery.
                            </p>
                        </div>
                    </div>
                </section>

                {/* SECTION: RESULTS & BEFORE AND AFTER */}
                <section id="results" className="w-full bg-white py-20 px-4 sm:px-8 lg:px-16 scroll-mt-20">
                    <div className="max-w-[1400px] mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                            {/* WHEN WILL I SEE RESULTS */}
                            <div className="bg-[#FAF8F5] rounded-3xl p-8 sm:p-10 shadow-sm border border-gray-200 space-y-6 flex flex-col justify-between">
                                <div className="space-y-5">
                                    <span className="bg-[#1F5E4B]/10 text-[#1F5E4B] text-xs font-semibold uppercase px-3.5 py-1.5 rounded-lg inline-block">
                                        Timeline Realities
                                    </span>
                                    <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A]">
                                        When Will I See Results?
                                    </h2>
                                    <p className="text-[#5F5F5F] text-sm sm:text-base leading-relaxed">
                                        Microneedling is generally a gradual treatment, and it's important to approach it with that mindset. Here's what typically happens:
                                    </p>
                                    <ul className="space-y-3 text-sm sm:text-base text-[#5F5F5F]">
                                        {[
                                            "Initial redness usually settles over the following several days",
                                            "Changes in skin texture develop progressively, not immediately",
                                            "Collagen remodeling is a biological process that takes time to unfold",
                                            "Multiple sessions may sometimes be recommended, depending on your concern",
                                            "Results depend heavily on what's being treated — acne scars, texture, and fine lines may all respond differently",
                                            "Your individual healing response and skincare habits after treatment also influence the outcome"
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex items-start space-x-2.5">
                                                <CheckCircle2 className="w-5 h-5 text-[#1F5E4B] shrink-0 mt-0.5" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <p className="text-xs sm:text-sm text-[#5F5F5F] pt-4 border-t border-gray-200 italic">
                                        We won't give you a fixed timeline promising results within a set number of days, because that wouldn't be medically accurate. Your clinician can give you a general sense of what to expect based on your specific treatment plan and skin condition.
                                    </p>
                                </div>
                                <img
                                    src="/images/skin renewal and collagen remodeling after microneedling.jpg"
                                    alt="skin renewal and collagen remodeling after microneedling"
                                    className="w-full h-60 object-cover rounded-2xl mt-4 border border-gray-200"/>
                            </div>

                            {/* BEFORE AND AFTER */}
                            <div className="bg-[#FAF8F5] rounded-3xl p-8 sm:p-10 shadow-sm border border-gray-200 space-y-6 flex flex-col justify-between">
                                <div className="space-y-5">
                                    <span className="bg-gray-100 text-[#1A1A1A] text-xs font-semibold uppercase px-3.5 py-1.5 rounded-lg inline-block">
                                        Realistic Expectations
                                    </span>
                                    <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A]">
                                        Microneedling Before and After
                                    </h2>
                                    <p className="text-[#5F5F5F] text-sm sm:text-base leading-relaxed">
                                        Before-and-after images are common in aesthetic marketing, but they should be interpreted carefully. A number of factors can influence how “dramatic” a before-and-after comparison looks, including:
                                    </p>
                                    <ul className="space-y-3 text-sm sm:text-base text-[#5F5F5F]">
                                        {[
                                            "Lighting differences between photographs",
                                            "Camera angle and distance",
                                            "Skin preparation (makeup, hydration, or skincare products) at the time each photo was taken",
                                            "The amount of time elapsed between the two photographs",
                                            "The number of treatment sessions completed",
                                            "Natural individual variation in skin response"
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex items-start space-x-2.5">
                                                <CheckCircle2 className="w-5 h-5 text-[#5F5F5F] shrink-0 mt-0.5" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <p className="text-xs sm:text-sm text-[#5F5F5F] pt-4 border-t border-gray-200 italic">
                                        We encourage patients to evaluate microneedling based on realistic, clinically documented progress rather than heavily edited or selectively lit social media images. During your consultation, your clinician can discuss what a realistic outcome might look like for your specific skin and concern.
                                    </p>
                                </div>
                                <img
                                    src="/images/microneedling consultation with aesthetic healthcare professional.jpg"
                                    alt="microneedling consultation with aesthetic healthcare professional"
                                    className="w-full h-60 object-cover rounded-2xl mt-4 border border-gray-200"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION: TREATMENT COMPARISON TABLE */}
                <section id="comparison" className="w-full bg-[#FAF8F5] py-20 px-4 sm:px-8 lg:px-16 scroll-mt-20 border-y border-gray-200">
                    <div className="max-w-[1400px] mx-auto space-y-10">
                        <div className="text-center max-w-3xl mx-auto space-y-3">
                            <span className="text-[#1F5E4B] text-xs font-semibold uppercase tracking-wider bg-[#1F5E4B]/10 px-3.5 py-1.5 rounded-lg inline-block">
                                Aesthetic Modalities
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A]">
                                Microneedling vs Other Skin Treatments
                            </h2>
                            <p className="text-[#5F5F5F] text-base sm:text-lg leading-relaxed">
                                Different skin treatments serve different purposes, and the right choice depends on your specific concern and skin condition. Here's a general comparison:
                            </p>
                        </div>

                        <div className="bg-white rounded-3xl shadow-sm overflow-hidden border border-gray-200">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-[#1F5E4B] text-white text-base uppercase tracking-wider">
                                            <th className="py-5 px-8 font-bold">Treatment</th>
                                            <th className="py-5 px-8 font-bold">Common Purpose</th>
                                            <th className="py-5 px-8 font-bold">Key Consideration</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 text-sm sm:text-base text-[#1A1A1A]">
                                        <tr className="hover:bg-[#F5F1EA] transition-colors">
                                            <td className="py-5 px-8 font-bold text-[#1F5E4B]">Microneedling</td>
                                            <td className="py-5 px-8">Texture, selected acne scars, fine lines</td>
                                            <td className="py-5 px-8">Gradual collagen remodeling</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50 transition-colors">
                                            <td className="py-5 px-8 font-semibold">Chemical Peels</td>
                                            <td className="py-5 px-8">Texture and selected pigmentation concerns</td>
                                            <td className="py-5 px-8">Peel depth and skin suitability matter</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50 transition-colors">
                                            <td className="py-5 px-8 font-semibold">Laser Treatments</td>
                                            <td className="py-5 px-8">Various pigmentation, texture, or rejuvenation concerns</td>
                                            <td className="py-5 px-8">Device and skin type considerations</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50 transition-colors">
                                            <td className="py-5 px-8 font-semibold">
                                                <Link href="/services/microdermabrasion-dubai" className="text-[#1F5E4B] underline hover:text-[#164537]">Microdermabrasion</Link>
                                            </td>
                                            <td className="py-5 px-8">Surface exfoliation</td>
                                            <td className="py-5 px-8">Generally more superficial</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50 transition-colors">
                                            <td className="py-5 px-8 font-semibold">
                                                <Link href="/services/skin-boosters-dubai" className="text-[#1F5E4B] underline hover:text-[#164537]">Skin Boosters</Link>
                                            </td>
                                            <td className="py-5 px-8">Hydration and skin-quality concerns</td>
                                            <td className="py-5 px-8">Injectable treatment</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50 transition-colors">
                                            <td className="py-5 px-8 font-semibold">
                                                <Link href="/services/face-prp-in-dubai" className="text-[#1F5E4B] underline hover:text-[#164537]">PRP-Based Treatments</Link>
                                            </td>
                                            <td className="py-5 px-8">Selected rejuvenation indications</td>
                                            <td className="py-5 px-8">Uses autologous blood-derived components</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 text-sm sm:text-base text-[#5F5F5F] leading-relaxed shadow-sm">
                            <p>
                                No single treatment is universally “better” than another — the right approach depends on your skin condition, the concern you're addressing, and your goals. Your clinician can help you understand which option, or combination of options, may be appropriate after assessing your skin.
                            </p>
                        </div>
                    </div>
                </section>

                {/* SECTION: DEEP DIVES */}
                <section className="w-full bg-white py-20 px-4 sm:px-8 lg:px-16">
                    <div className="max-w-[1400px] mx-auto space-y-16">
                        {/* MICRONEEDLING FOR ACNE SCARS */}
                        <div className="bg-[#FAF8F5] rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-200 space-y-5">
                            <span className="bg-[#1F5E4B]/10 text-[#1F5E4B] text-xs font-semibold uppercase px-3.5 py-1.5 rounded-lg inline-block">
                                Specialized Focus
                            </span>
                            <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A]">
                                Microneedling for Acne Scars
                            </h2>
                            <div className="prose max-w-none text-[#5F5F5F] text-base sm:text-lg leading-relaxed space-y-4">
                                <p>
                                    Acne scars are not all the same, and this matters when discussing Microneedling for Acne Scars Dubai with patients. Broadly speaking, acne marks can be textural (where the skin's surface has physical unevenness, such as depressed or pitted areas) or pigmented (where discoloration remains after a breakout has healed, without significant textural change).
                                </p>
                                <p>
                                    Microneedling is generally more relevant to textural scarring, where the goal is to support the skin's remodeling process in areas of uneven contour. Pigmented marks often respond differently and may require a different treatment approach altogether.
                                </p>
                                <p>
                                    This is why scar type matters so much in treatment planning. A clinician will look closely at the specific scarring pattern during assessment, and in some cases, multiple treatment approaches may be considered together — either sequentially or as part of a broader plan — rather than relying on microneedling alone.
                                </p>
                                <p>
                                    Setting realistic expectations is particularly important with acne scarring. Improvement tends to be gradual and partial rather than complete, and outcomes vary depending on scar depth, age, and how the individual's skin responds to treatment. Professional assessment is the only reliable way to understand what's realistic for your specific scarring.
                                </p>
                            </div>
                        </div>

                        {/* MICRONEEDLING FOR SKIN TEXTURE AND FINE LINES */}
                        <div className="bg-[#FAF8F5] rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-200 space-y-5">
                            <span className="bg-[#1F5E4B]/10 text-[#1F5E4B] text-xs font-semibold uppercase px-3.5 py-1.5 rounded-lg inline-block">
                                Rejuvenation Scope
                            </span>
                            <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A]">
                                Microneedling for Skin Texture and Fine Lines
                            </h2>
                            <p className="text-[#5F5F5F] text-base sm:text-lg leading-relaxed">
                                Microneedling for Skin Texture concerns is one of the more common reasons patients consider this treatment. It may be considered for:
                            </p>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base text-[#1A1A1A]">
                                {[
                                    "Rough or uneven-feeling skin texture",
                                    "Fine lines, particularly in the early stages",
                                    "Mild signs of photodamage from sun exposure",
                                    "Skin that appears uneven or lacks clarity",
                                    "Enlarged or more visible pores"
                                ].map((item, idx) => (
                                    <li key={idx} className="bg-white p-4 rounded-2xl border border-gray-200 flex items-center space-x-3 shadow-sm">
                                        <CheckCircle2 className="w-5 h-5 text-[#1F5E4B] shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-[#5F5F5F] text-sm sm:text-base leading-relaxed pt-2">
                                As with other applications, results here are gradual and individual. Texture-related changes tend to build up across a series of sessions rather than resolving after one treatment, and your skincare routine between sessions can also influence how your skin responds.
                            </p>
                        </div>

                        {/* SESSIONS & FREQUENCY DUAL CARDS */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                            {/* HOW MANY SESSIONS ARE NEEDED */}
                            <div className="bg-[#FAF8F5] rounded-3xl p-8 sm:p-10 shadow-sm border border-gray-200 space-y-5">
                                <h2 className="text-2xl font-bold text-[#1A1A1A]">
                                    How Many Sessions Are Needed?
                                </h2>
                                <p className="text-[#5F5F5F] text-sm sm:text-base leading-relaxed">
                                    There's no universal number of sessions that applies to everyone, and any source suggesting otherwise should be treated with caution. The number of sessions recommended for you depends on several factors, including:
                                </p>
                                <ul className="space-y-3 text-sm sm:text-base text-[#5F5F5F]">
                                    {[
                                        "The specific skin concern being addressed",
                                        "Scar depth, where relevant",
                                        "How your skin responds to initial treatment",
                                        "The treatment intensity used",
                                        "Your overall goals",
                                        "Your clinician's ongoing clinical assessment"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start space-x-2.5">
                                            <CheckCircle2 className="w-5 h-5 text-[#1F5E4B] shrink-0 mt-0.5" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-xs sm:text-sm text-[#5F5F5F] pt-3 border-t border-gray-200">
                                    Your clinician will discuss an appropriate treatment schedule with you based on these factors, and this schedule may be adjusted as your skin responds over time.
                                </p>
                            </div>

                            {/* HOW OFTEN CAN MICRONEEDLING BE DONE */}
                            <div className="bg-[#FAF8F5] rounded-3xl p-8 sm:p-10 shadow-sm border border-gray-200 space-y-5">
                                <h2 className="text-2xl font-bold text-[#1A1A1A]">
                                    How Often Can Microneedling Be Done?
                                </h2>
                                <p className="text-[#5F5F5F] text-sm sm:text-base leading-relaxed">
                                    Similarly, there's no single interval that applies universally. How often microneedling can be repeated depends on:
                                </p>
                                <ul className="space-y-3 text-sm sm:text-base text-[#5F5F5F]">
                                    {[
                                        "The depth of treatment used",
                                        "How your skin has responded to previous sessions",
                                        "The area being treated",
                                        "Your clinician's specific treatment protocol",
                                        "Your recovery between sessions"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start space-x-2.5">
                                            <CheckCircle2 className="w-5 h-5 text-[#1F5E4B] shrink-0 mt-0.5" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-xs sm:text-sm text-[#5F5F5F] pt-3 border-t border-gray-200">
                                    Rather than following a generic interval, your clinician will assess your skin at each follow-up visit and advise on appropriate timing for any subsequent sessions.
                                </p>
                            </div>

                        </div>
                    </div>
                </section>

                {/* SECTION: PROFESSIONAL MICRONEEDLING VS AT-HOME DEVICES */}
                <section id="pro-vs-home" className="w-full bg-[#1F5E4B] text-white py-20 px-4 sm:px-8 lg:px-16 scroll-mt-20 shadow-xl">
                    <div className="max-w-[1400px] mx-auto space-y-10">
                        <div className="max-w-3xl space-y-3">
                            <span className="bg-white/15 text-white text-xs font-semibold uppercase px-3.5 py-1.5 rounded-lg border border-white/20 inline-block">
                                Safety Distinction
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-bold text-white">
                                Professional Microneedling vs At-Home Devices
                            </h2>
                            <p className="text-emerald-50 text-base sm:text-lg leading-relaxed">
                                It's worth addressing directly: professional microneedling and at-home rollers or devices are not the same thing, and they shouldn't be treated as interchangeable. Key differences include:
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                            {[
                                { title: "Sterility", text: "Clinical settings follow strict sterility protocols that are difficult to replicate at home." },
                                { title: "Device quality", text: "Professional-grade devices offer more precise and consistent needle depth control." },
                                { title: "Clinical assessment", text: "A trained clinician evaluates your skin before deciding whether, and how, to proceed." },
                                { title: "Treatment depth", text: "Needle depth can be adjusted based on the specific concern and area, which home devices generally cannot match safely." },
                                { title: "Infection prevention", text: "Professional environments are designed to minimize infection risk during an invasive procedure." },
                                { title: "Skin-specific treatment planning", text: "Your treatment is tailored to your skin, not applied generically." },
                                { title: "Professional aftercare guidance", text: "You receive individualized instructions based on what was actually done to your skin." }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/15 hover:bg-white/15 transition-all">
                                    <h3 className="font-bold text-white text-lg mb-2">{item.title}</h3>
                                    <p className="text-emerald-50 text-sm leading-relaxed">{item.text}</p>
                                </div>
                            ))}
                        </div>

                        <div className="bg-white/10 border-l-4 border-white p-6 rounded-r-3xl text-white">
                            <h4 className="font-bold text-white text-base mb-1">Clinical Safety Warning</h4>
                            <p className="text-emerald-50 text-sm sm:text-base leading-relaxed">
                                We do not recommend attempting invasive skin procedures at home. Microneedling involves creating controlled injuries in the skin, and this should only be performed by a trained professional in an appropriate clinical setting.
                            </p>
                        </div>
                    </div>
                </section>

                {/* SECTION: WHY CHOOSE RAMACARE POLYCLINIC DUBAI? */}
                <section id="why-ramacare" className="w-full bg-[#F5F1EA] py-20 px-4 sm:px-8 lg:px-16 scroll-mt-20 border-b border-emerald-900/10">
                    <div className="max-w-[1400px] mx-auto space-y-10">
                        <div className="max-w-3xl space-y-3">
                            <span className="bg-[#1F5E4B] text-white text-xs font-semibold uppercase px-3.5 py-1.5 rounded-lg inline-block">
                                Clinical Excellence
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A]">
                                Why Choose RamaCare Polyclinic Dubai?
                            </h2>
                            <p className="text-[#5F5F5F] text-base sm:text-lg leading-relaxed">
                                <Link href="/" className="text-[#1F5E4B] font-bold underline hover:text-[#164537]">RamaCare Polyclinic</Link> is a multidisciplinary healthcare provider based in Dubai, offering aesthetic dermatology services within a broader clinical environment. When it comes to Microneedling & Skin Renewal, here's what patients can expect from us:
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                            {[
                                "A professional healthcare environment for your treatment",
                                "Patient-focused consultations that start with listening, not selling",
                                "Personalized treatment planning based on your specific skin and goals",
                                "Access to a multidisciplinary healthcare setting, should other concerns need attention",
                                "Appropriate clinical assessment before any treatment is recommended",
                                "Individualized aftercare guidance tailored to your treatment",
                                "A convenient Dubai location",
                                "A consistent focus on realistic, honest treatment expectations"
                            ].map((item, idx) => (
                                <div key={idx} className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm hover:border-[#1F5E4B] transition-all">
                                    <span className="text-[#1F5E4B] font-bold text-xl block mb-2">0{idx + 1}</span>
                                    <p className="text-[#1A1A1A] text-sm sm:text-base font-semibold leading-snug">{item}</p>
                                </div>
                            ))}
                        </div>

                        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 text-[#5F5F5F] text-sm sm:text-base leading-relaxed shadow-sm">
                            <p>
                                We believe patients deserve accurate information, not exaggerated promises. Our approach is to help you understand your options clearly, so you can make an informed decision about your skin.
                            </p>
                        </div>
                    </div>
                </section>

                {/* SECTION: PATIENT JOURNEY FLOW */}
                <section className="w-full bg-white py-20 px-4 sm:px-8 lg:px-16 border-b border-gray-100">
                    <div className="max-w-[1400px] mx-auto text-center space-y-8">
                        <span className="text-[#1F5E4B] text-xs font-semibold uppercase tracking-wider bg-[#1F5E4B]/10 px-3.5 py-1.5 rounded-lg inline-block">
                            Clinical Roadmap
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A]">
                            Patient Journey
                        </h2>
                        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm font-semibold text-[#1A1A1A] pt-4">
                            {[
                                "Consultation",
                                "Skin Assessment",
                                "Treatment Planning",
                                "Skin Preparation",
                                "Microneedling Procedure",
                                "Aftercare Guidance",
                                "Recovery",
                                "Progress Review",
                                "Additional Treatment if Appropriate"
                            ].map((step, idx, arr) => (
                                <React.Fragment key={idx}>
                                    <span className="bg-[#FAF8F5] text-[#1F5E4B] px-4 py-3 rounded-2xl border border-gray-200 shadow-sm hover:border-[#1F5E4B] transition-all">
                                        {step}
                                    </span>
                                    {idx < arr.length - 1 && (
                                        <ChevronRight className="w-4 h-4 text-[#1F5E4B] shrink-0" />
                                    )}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SECTION: FAQS ACCORDION */}
                <section id="faqs" className="w-full bg-[#FAF8F5] py-20 px-4 sm:px-8 lg:px-16 scroll-mt-20">
                    <div className="max-w-[1400px] mx-auto space-y-12">
                        <div className="text-center max-w-3xl mx-auto space-y-3">
                            <span className="text-[#1F5E4B] text-xs font-semibold uppercase tracking-wider bg-[#1F5E4B]/10 px-3.5 py-1.5 rounded-lg inline-block">
                                Patient Inquiries
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A]">
                                Frequently Asked Questions
                            </h2>
                            <p className="text-[#5F5F5F] text-base sm:text-lg">
                                Comprehensive answers to all 20 common patient questions about Microneedling & Skin Renewal.
                            </p>

                            {/* FAQ Search & Category Filter */}
                            <div className="mt-8 space-y-4">
                                <input
                                    type="text"
                                    placeholder="Search FAQs..."
                                    value={faqSearch}
                                    onChange={(e) => setFaqSearch(e.target.value)}
                                    className="w-full max-w-lg px-5 py-3.5 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1F5E4B] shadow-sm text-sm"
                                />
                                <div className="flex flex-wrap justify-center gap-2">
                                    {['All', 'General', 'Suitability', 'Benefits', 'Procedure', 'Recovery', 'Results', 'Safety', 'Booking'].map((cat) => (
                                        <button
                                            key={cat}
                                            onClick={() => setFaqCategory(cat)}
                                            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${faqCategory === cat
                                                ? 'bg-[#1F5E4B] text-white shadow-sm'
                                                : 'bg-white text-[#5F5F5F] border border-gray-200 hover:bg-gray-100'
                                                }`}
                                        >
                                            {cat}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4 max-w-5xl mx-auto">
                            {filteredFaqs.map((faq, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm hover:border-[#1F5E4B]/50 transition-all"
                                >
                                    <button
                                        onClick={() => toggleFaq(idx)}
                                        className="w-full p-6 text-left font-bold text-[#1A1A1A] text-base sm:text-lg flex justify-between items-center space-x-4 focus:outline-none"
                                    >
                                        <span className="flex items-center space-x-3.5">
                                            <span className="text-[#1F5E4B] text-sm sm:text-base font-bold">Q{idx + 1}.</span>
                                            <span>{faq.q}</span>
                                        </span>
                                        <span className="text-[#1F5E4B] text-2xl font-bold">
                                            {activeFaq === idx ? '−' : '+'}
                                        </span>
                                    </button>
                                    {activeFaq === idx && (
                                        <div className="px-6 pb-6 pt-2 text-[#5F5F5F] text-sm sm:text-base leading-relaxed border-t border-gray-100 bg-[#FAF8F5]">
                                            {faq.a}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SECTION: CONCLUSION & FINAL CTA */}
                <section id="book-consultation" className="w-full bg-[#1F5E4B] text-white py-20 px-4 sm:px-8 lg:px-16 scroll-mt-20 relative overflow-hidden shadow-2xl">
                    <div className="max-w-[1400px] mx-auto text-center space-y-10 relative z-10">
                        <div className="max-w-3xl mx-auto space-y-4">
                            <span className="bg-white/15 text-white text-xs font-semibold uppercase px-3.5 py-1.5 rounded-lg border border-white/20 inline-block">
                                Next Steps
                            </span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                                Conclusion
                            </h2>
                            <p className="text-emerald-50 text-base sm:text-lg leading-relaxed">
                                Choosing to explore Microneedling & Skin Renewal starts with an honest conversation about your skin, not a guaranteed outcome. Whether you're concerned about acne scarring, uneven texture, fine lines, or the general effects of time and sun exposure, the right next step is a professional assessment — one that takes your medical history, skin type, and expectations seriously. At RamaCare Polyclinic Dubai, we focus on individualized planning and realistic guidance, so you can make an informed decision about whether this treatment is right for you.
                            </p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 sm:p-12 max-w-3xl mx-auto space-y-6 shadow-xl">
                            <h3 className="text-2xl sm:text-3xl font-bold text-white">
                                Ready to explore professional skin renewal?
                            </h3>
                            <p className="text-emerald-50 text-base sm:text-lg">
                                Book a consultation at RamaCare Polyclinic Dubai to discuss your skin concerns and find out whether microneedling is appropriate for you.
                            </p>
                            <div className="pt-2 flex flex-col sm:flex-row justify-center gap-4">
                                <Link
                                    href="/book-appointment"
                                    className="inline-flex items-center justify-center gap-2 px-9 py-4 rounded-2xl bg-[#C5A880] hover:bg-[#b8986c] text-[#0D2B22] font-bold text-base shadow-xl transition-all"
                                >
                                    <Calendar className="w-5 h-5" />
                                    <span>Book Your Appointment Today</span>
                                </Link>
                                <a
                                    href={`https://wa.me/971566597878?text=${whatsappMessage}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 px-9 py-4 rounded-2xl bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold text-base shadow-xl transition-all"
                                >
                                    <WhatsAppIcon className="w-5 h-5" />
                                    <span>WhatsApp Us Now</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* INLINE BOOK CONSULTATION FORM */}
                <section className="w-full py-16 bg-white border-t border-gray-200">
                    <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16">
                        <BookConsultation />
                    </div>
                </section>

                {/* FLOATING ACTION BUTTON FOR WHATSAPP */}
                <a
                    href={`https://wa.me/971566597878?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#20BD5A] transition-all transform hover:scale-110 flex items-center justify-center space-x-2 group"
                    aria-label="Chat on WhatsApp"
                >
                    <WhatsAppIcon className="w-6 h-6" />
                    <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 text-xs font-semibold pr-1">
                        WhatsApp Doctor
                    </span>
             </a>
            {/* Content Reviewer Badge */}
                <ContentReviewBadge doctorName="Sonita Sinaga" pageSlug="/services/microneedling-skin-renewal-dubai/" />

            </div>
        </Layout>
    );
}
