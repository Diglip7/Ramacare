import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../../../components/Layout';
import BookConsultation from '../../../components/BookConsultation';
import ContentReviewBadge from '../../../components/ContentReviewBadge';
import DoctorsSection from '../../../components/DoctorsSection';
import { DOCTORS } from '../../data/doctors';
import {
  Calendar,
  CheckCircle,
  ChevronDown,
  ChevronRight,
  Search,
  AlertTriangle,
  Activity,
  Heart,
  Shield,
  FileText,
  UserCheck,
  TrendingUp,
  MapPin,
  Clock,
  ExternalLink
} from 'lucide-react';

export default function PostSurgeryRehabilitationPage() {
  const [activePhase, setActivePhase] = useState(0);
  const [faqSearch, setFaqSearch] = useState('');
  const [activeFaq, setActiveFaq] = useState(null);

  const CANONICAL_URL = "https://ramacarepolyclinic.ae/services/post-surgery-rehabilitation-dubai/";

  const SITE = "https://ramacarepolyclinic.ae";
  const JEENA_ID = `${SITE}/doctors/jeena-mathew-physiotherapist-dubai/#person`;

  const seo = {
    title: "Post-Surgery Rehabilitation in Jumeirah 1, Dubai | RamaCare",
    metaDescription: "Physiotherapy after surgery done at any hospital: knee and hip replacement, ACL, shoulder, spine. Jumeirah 1, Dubai. AED 200 assessment. Open till 10pm.",
    canonical: CANONICAL_URL,
    ogImage: "https://ramacarepolyclinic.ae/images/Physiotherapist%20assisting%20a%20patient%20after%20knee%20replacement%20surgery.jpg"
  };

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services/" },
    { label: "Physiotherapy", href: "/services/physiotherapy-dubai/" },
    { label: "Post-Surgery Rehabilitation", href: "/services/post-surgery-rehabilitation-dubai/" }
  ];

  const keyBenefits = [
    "Rehab after surgery done at any hospital in Dubai or abroad",
    "Your surgeon's protocol followed, with progress reports sent to your surgeon on request",
    "Assessment by a DHA-licensed physiotherapist for AED 200, with X-ray and a GP in the same clinic",
    "Step-free, ground-floor clinic in Jumeirah 1, open every day 10am–10pm"
  ];

  const coreBenefits = [
    "Regain movement in the operated joint or limb",
    "Rebuild the strength lost during surgery and immobilisation",
    "Reduce stiffness with early, appropriate movement",
    "Manage pain and swelling with hands-on treatment and exercise",
    "Keep scar tissue mobile so it does not restrict movement",
    "Improve balance and walking, especially after leg or spine surgery",
    "Build confidence to move without fear of damaging the repair",
    "A clear, staged return to daily activities, work or sport"
  ];

  const conditionsList = [
    { name: "Knee Replacement", description: "Restoring range of motion, strength, and walking ability following total or partial knee replacement." },
    { name: "Hip Replacement", description: "Rebuilding strength and mobility while respecting hip precautions during early recovery." },
    { name: "ACL Reconstruction", description: "A structured, sports-focused rehabilitation pathway supporting return to pivoting and cutting activities." },
    { name: "Meniscus Surgery", description: "Restoring knee function and protecting the joint surface during recovery." },
    { name: "Rotator Cuff Repair", description: "Carefully progressed shoulder rehabilitation respecting tissue healing timelines." },
    { name: "Shoulder Arthroscopy", description: "Restoring shoulder mobility and strength following minimally invasive shoulder procedures." },
    { name: "Spine Surgery", description: "Supporting safe movement and core stability following spinal procedures." },
    { name: "Disc Surgery", description: "Guided rehabilitation to restore function while protecting the surgical site." },
    { name: "Fracture Fixation", description: "Restoring strength and movement following surgical repair of broken bones." },
    { name: "Ligament Repair", description: "Rebuilding joint stability after surgical ligament reconstruction." },
    { name: "Tendon Repair", description: "Carefully staged loading to protect healing tendon tissue while restoring function." },
    { name: "Sports Surgery", description: "Sport-specific rehabilitation supporting a safe, confident return to competition." },
    { name: "Foot & Ankle Surgery", description: "Restoring walking mechanics and lower limb function." },
    { name: "Hand Surgery", description: "Fine motor and functional rehabilitation to support daily tasks and work activities." }
  ];

  const symptoms = [
    "Joint stiffness that limits normal movement",
    "Muscle weakness around the surgical site",
    "Ongoing pain beyond the expected initial recovery period",
    "Swelling that persists or fluctuates",
    "Difficulty walking normally",
    "Limited range of motion in the affected joint",
    "Noticeable muscle loss or atrophy",
    "Balance issues, particularly after lower limb surgery",
    "Difficulty climbing stairs",
    "Difficulty returning to sports or previous activity levels"
  ];

  const assessmentSteps = [
    { name: "Medical history review", description: "Understanding your overall health background." },
    { name: "Surgical report review", description: "Examining details of the procedure performed." },
    { name: "Surgeon protocol review", description: "Aligning rehabilitation with your surgeon's specific recommendations." },
    { name: "Pain assessment", description: "Understanding current pain levels and patterns." },
    { name: "Range of motion testing", description: "Measuring joint mobility against expected recovery milestones." },
    { name: "Muscle strength assessment", description: "Identifying areas of weakness needing focused attention." },
    { name: "Functional movement testing", description: "Assessing how you move as a whole." },
    { name: "Walking assessment", description: "Reviewing gait mechanics and any compensatory patterns." },
    { name: "Goal setting", description: "Establishing clear, personalized recovery targets together." }
  ];

  const servicesOffered = [
    "Individualized treatment plans tailored to your surgery type and current condition",
    "One-on-one physiotherapy with dedicated, focused attention each session",
    "Progressive exercise programs that advance as your healing allows",
    "Pain management strategies appropriate to your stage of recovery",
    "Functional rehabilitation focused on real-world movement and independence",
    "Home exercise guidance to support progress between clinic visits",
    "Recovery monitoring to track progress and adjust your plan as needed"
  ];

  const techniques = [
    { name: "Manual Therapy", description: "Hands-on techniques to reduce pain and improve joint and soft tissue mobility." },
    { name: "Joint Mobilization", description: "Gentle, graded movement techniques to restore normal joint mechanics." },
    { name: "Therapeutic Exercise", description: "Targeted exercises designed to restore strength, flexibility, and control." },
    { name: "Strength Training", description: "Progressive resistance work to rebuild muscle lost during surgery and immobilization." },
    { name: "Stretching", description: "Techniques to restore flexibility and reduce post-surgical stiffness." },
    { name: "Balance Training", description: "Exercises to rebuild stability, particularly important after lower limb procedures." },
    { name: "Gait Training", description: "Restoring normal, efficient walking mechanics after surgery affecting the legs or spine." },
    { name: "Neuromuscular Re-education", description: "Retraining the connection between muscles and the nervous system for coordinated movement." },
    { name: "Electrotherapy", description: "Supporting pain relief and muscle activation." },
    { name: "Ultrasound Therapy", description: "Therapeutic ultrasound for soft tissue and scar areas, used together with exercise." },
    { name: "Dry Needling", description: "Addressing muscular tightness and trigger points where appropriate." },
    { name: "Kinesio Taping", description: "Support and feedback for joints and muscles during early rehabilitation." },
    { name: "Scar Mobilisation", description: "Gentle massage and movement once the wound has healed, to keep the scar soft and mobile." },
    { name: "Soft Tissue Release", description: "Reducing muscle tension and improving tissue mobility around the surgical area." },
    { name: "Functional Training", description: "Practicing real-world movements relevant to daily life, work, or sport." }
  ];

  const phases = [
    { phase: "Phase 1", title: "Pain Control", desc: "The initial priority is managing pain and swelling while protecting the surgical site during early healing." },
    { phase: "Phase 2", title: "Restore Movement", desc: "As the acute phase settles, focus shifts to regaining range of motion in the affected joint or limb." },
    { phase: "Phase 3", title: "Strength Building", desc: "Progressive strengthening exercises rebuild muscle lost during surgery and the initial recovery period." },
    { phase: "Phase 4", title: "Functional Recovery", desc: "Patients begin practicing everyday movements — walking, climbing stairs, reaching — with proper mechanics." },
    { phase: "Phase 5", title: "Return to Sports / Daily Activities", desc: "A final stage of functional testing and gradual reintroduction supports a safe, confident return to your normal activities or sport." }
  ];

  const commonlyTreated = [
    { title: "ACL Surgery", desc: "Rehabilitation focuses on restoring knee stability, quadriceps strength, and confidence in pivoting movements, typically following a structured multi-month protocol before return to sport." },
    { title: "Knee Replacement", desc: "Early rehabilitation emphasizes regaining range of motion and walking ability, followed by progressive strengthening to support long-term joint function." },
    { title: "Hip Replacement", desc: "Rehabilitation respects specific hip precautions in early recovery while progressively rebuilding strength and normal walking mechanics." },
    { title: "Shoulder Surgery", desc: "Whether following rotator cuff repair or shoulder arthroscopy, rehabilitation carefully progresses from protecting the repair to restoring full shoulder function." },
    { title: "Spine Surgery", desc: "Rehabilitation focuses on safe movement patterns, core stability, and gradual return to daily activities while protecting the surgical site." },
    { title: "Fracture Surgery", desc: "Rehabilitation restores strength and movement in the affected limb, addressing any stiffness or weakness from the period of immobilization." },
    { title: "Sports Surgery", desc: "A sport-specific rehabilitation pathway supports athletes in safely returning to training and competition." }
  ];

  const earlyBenefits = [
    "Earlier return to walking and daily tasks",
    "Problems spotted and referred early",
    "Better mobility in the affected area",
    "Better muscle strength retention and recovery",
    "Less pain throughout the recovery process",
    "Lower risk of long-term stiffness",
    "Better confidence in movement",
    "Improved overall quality of life during recovery"
  ];

  const homeTips = [
    "Follow your surgeon's specific instructions closely",
    "Attend all scheduled physiotherapy sessions consistently",
    "Complete home exercises as prescribed by your physiotherapist",
    "Support healing with good nutrition",
    "Stay well hydrated",
    "Prioritize good quality sleep to support tissue repair",
    "Walk as recommended by your care team",
    "Practice safe movement techniques, particularly during early recovery",
    "Use ice and elevation where appropriate and advised by your care team"
  ];

  const whyChooseUs = [
    "Rehab after surgery done at any hospital, following your surgeon's protocol",
    "Progress reports sent to your surgeon on request",
    "Assessment by a DHA-licensed physiotherapist (Jeena Mathew, BPT, MPT, 8+ years) for AED 200",
    "In-house X-ray and a GP who can suggest or prescribe medication where appropriate",
    "Insurance: we check your coverage and request prior approval; you pay and claim with our invoice, medical report and progress notes",
    "Step-free, ground-floor clinic on Al Dhiyafah Road, Jumeirah 1, with parking nearby",
    "Open every day 10am–10pm, with same-day appointments when slots are free"
  ];

  const faqs = [
    { question: "Where can I get post-surgery physiotherapy in Jumeirah 1?", answer: "RamaCare Polyclinic provides post-surgery rehabilitation on the ground floor of Jumeirah Terrace Building, 12 Al Dhiyafah Road, Jumeirah 1, Dubai, near Al Satwa. The clinic is step-free and open every day from 10am to 10pm. Call 04 286 2006 or WhatsApp 056 659 7878." },
    { question: "Can I do my rehab at RamaCare if my surgery was at another hospital?", answer: "Yes. Most of our post-surgery patients had their operation at another hospital in Dubai or abroad. Bring your surgeon's discharge notes and rehab protocol, and we follow them." },
    { question: "How much does a post-surgery physiotherapy assessment cost?", answer: "A physiotherapy assessment at RamaCare costs AED 200. Insurance is by reimbursement: we check your coverage, request prior approval if needed, and give you the documents to claim." },
    { question: "When should physiotherapy start after surgery?", answer: "It depends on the operation and your surgeon's instructions. After knee or hip replacement and ACL reconstruction, gentle rehab usually starts within days. After some repairs, such as rotator cuff surgery, the joint is protected for several weeks first." },
    { question: "Will you send updates to my surgeon?", answer: "Yes. On request, we send a progress report to your surgeon so your rehab stays aligned with their plan." },
    { question: "What should I bring to my first session?", answer: "Your surgeon's notes or discharge summary, any rehab protocol or restrictions, scans if you have them, a list of medicines, and loose clothing that lets us see the operated area." },
    { question: "How long does rehab take after knee replacement?", answer: "Most people walk with less support within a few weeks, and many return to most daily activities in about 3 months. Full recovery of strength often takes up to a year. Your surgeon's plan comes first." },
    { question: "How long does rehab take after ACL reconstruction?", answer: "ACL rehab usually takes 6 to 12 months before a full return to pivoting sports. The decision to return should be based on strength, hop and movement tests, not only on time." },
    { question: "How long does rehab take after hip replacement?", answer: "Many people walk with less support within a few weeks and return to most daily activities in about 3 months, following the hip precautions their surgeon gives." },
    { question: "Is physiotherapy after surgery painful?", answer: "Some discomfort during exercises is normal, but treatment should not cause sharp or worsening pain. Your physiotherapist adjusts the plan to your pain level and healing stage." },
    { question: "What warning signs after surgery need urgent care?", answer: "Contact your surgeon or go to emergency straight away if you have calf pain or swelling, chest pain or breathlessness, fever, or a red, hot or leaking wound. Call 998 for chest pain or breathing problems." },
    { question: "Can physiotherapy reduce stiffness after surgery?", answer: "Yes. Early, appropriate movement guided by a physiotherapist is one of the best ways to limit stiffness after surgery." },
    { question: "How can I reduce scar tissue after surgery?", answer: "Once the wound has fully healed, gentle scar massage and regular movement help keep the scar soft and mobile. Your physiotherapist shows you how and when to start." },
    { question: "Does insurance cover physiotherapy after surgery?", answer: "Usually yes, within your plan's session limit and with a referral. Some plans need prior approval. RamaCare checks your coverage, requests approval when needed and provides the invoice, medical report and progress notes for your claim." },
    { question: "Do you offer home physiotherapy after surgery?", answer: "No. Treatment is at our clinic, which is on the ground floor with step-free access and parking nearby, so it is easy to reach on crutches or with a walker." },
    { question: "Can I have an X-ray at RamaCare after fracture surgery?", answer: "Yes. RamaCare has in-house X-ray, and our GP can arrange it when needed, for example to check healing after fracture fixation." },
    { question: "How many sessions will I need?", answer: "It depends on the surgery and your goals. Smaller procedures may need a few weeks of sessions; joint replacement and ACL rehab need several months, with a home programme between visits." },
    { question: "Can elderly patients benefit from rehab after surgery?", answer: "Yes. Rehab is adapted to age, health and mobility, and focuses on walking, balance and independence at home." },
    { question: "Will rehab help me return to sport?", answer: "Yes. Sport-specific training and return-to-sport testing are part of rehab after ACL, meniscus, shoulder and other sports surgeries." },
    { question: "Can I have physiotherapy before surgery?", answer: "Yes. Prehab before a planned operation, such as knee replacement or ACL reconstruction, can help you go into surgery stronger and recover more smoothly." },
    { question: "Do I need a referral?", answer: "Not to book. Your surgeon's notes help us follow their protocol. If your insurer needs a referral, our GP is in the same clinic." },
    { question: "What if I miss sessions?", answer: "Missing sessions can slow progress. If you need to reschedule, we adjust the plan, and sessions run until 10pm every day to fit around work." }
  ];

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(faqSearch.toLowerCase()) ||
    faq.answer.toLowerCase().includes(faqSearch.toLowerCase())
  );

  // SEO schemas
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `${CANONICAL_URL}#breadcrumb`,
        "itemListElement": breadcrumbs.map(function (b, i) {
          return { "@type": "ListItem", "position": i + 1, "name": b.label, "item": SITE + b.href };
        })
      },
      {
        "@type": "MedicalWebPage",
        "@id": `${CANONICAL_URL}#webpage`,
        "url": CANONICAL_URL,
        "name": seo.title,
        "description": seo.metaDescription,
        "inLanguage": "en",
        "isPartOf": { "@id": `${SITE}/#website` },
        "breadcrumb": { "@id": `${CANONICAL_URL}#breadcrumb` },
        "medicalAudience": { "@type": "Patient" },
        "specialty": "https://schema.org/Physiotherapy",
        "about": { "@id": `${CANONICAL_URL}#therapy` },
        "reviewedBy": { "@id": JEENA_ID },
        "lastReviewed": "2026-10-15", // change to the deploy date
        "publisher": { "@id": `${SITE}/#clinic` }
      },
      {
        "@type": "PhysicalTherapy",
        "@id": `${CANONICAL_URL}#therapy`,
        "name": "Post-surgery rehabilitation",
        "alternateName": ["Post-operative physiotherapy", "Post-op rehab", "Rehabilitation after knee replacement", "ACL reconstruction rehabilitation", "Hip replacement rehabilitation", "Rotator cuff repair rehabilitation"],
        "url": CANONICAL_URL
      },
      {
        "@type": "Person",
        "@id": JEENA_ID,
        "name": "Jeena Mathew",
        "jobTitle": "DHA-Licensed Physiotherapist",
        "url": `${SITE}/doctors/jeena-mathew-physiotherapist-dubai/`,
        "worksFor": { "@id": `${SITE}/#clinic` },
        "hasCredential": [
          { "@type": "EducationalOccupationalCredential", "credentialCategory": "Bachelor of Physiotherapy (BPT)" },
          { "@type": "EducationalOccupationalCredential", "credentialCategory": "Master of Physiotherapy (MPT)" }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": `${CANONICAL_URL}#faq`,
        "mainEntity": faqs.map(function (f) {
          return { "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } };
        })
      }
    ]
  };

  return (
    <Layout>
      <Head>
        <title key="title">{seo.title}</title>
        <meta name="description" content={seo.metaDescription} key="description" />
        <meta name="robots" content="index, follow" key="robots" />
        <link rel="canonical" href={seo.canonical} key="canonical" />

        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.metaDescription} />
        <meta property="og:url" content={seo.canonical} />
        <meta property="og:image" content={seo.ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="RamaCare Polyclinic" />
        <meta property="og:locale" content="en_AE" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.metaDescription} />
        <meta name="twitter:image" content={seo.ogImage} />

        {/* Structured Data Schemas */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaGraph)
          }}
        />
      </Head>

      <div className="bg-white text-[#1A1A1A] antialiased">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#1F5E4B]/10 via-[#F0F7F4] to-white pt-10 pb-16 md:pt-14 md:pb-24">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#D4A574]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1F5E4B]/5 rounded-full blur-3xl" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumbs */}
            <nav className="flex flex-wrap items-center gap-y-1.5 text-[10px] sm:text-xs font-semibold text-[#5F5F5F] mb-6 lowercase tracking-wider">
              {breadcrumbs.map((b, i) => (
                <React.Fragment key={i}>
                  {i > 0 && <span className="mx-2">/</span>}
                  <a href={b.href} className="hover:text-[#1F5E4B] transition-colors">{b.label}</a>
                </React.Fragment>
              ))}
            </nav>

            <div className="grid lg:grid-cols-12 gap-12 items-center">
              {/* Left Column (Content) */}
              <div className="lg:col-span-7 text-left">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#1F5E4B]/10 text-[#1F5E4B] text-xs font-bold uppercase tracking-wider mb-6">
                  DHA-Licensed Physiotherapy · Jumeirah 1
                </span>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1A1A1A] tracking-tight mb-4 leading-tight">
                  Post-Surgery Rehabilitation in Jumeirah 1, Dubai
                </h1>

                <p className="text-[#D4A574] text-base sm:text-lg font-bold tracking-wide mb-6 uppercase">
                  Personalized Post-Operative Physiotherapy & Recovery Protocols
                </p>

                <p className="text-[#5F5F5F] text-sm sm:text-base leading-relaxed mb-8">
                  RamaCare Polyclinic provides physiotherapy after surgery done at any hospital, at 12 Al Dhiyafah Road, Jumeirah 1, Dubai. A physiotherapy assessment costs AED 200. We follow your surgeon's protocol after knee or hip replacement, ACL reconstruction, shoulder, spine and fracture surgery, and send progress reports to your surgeon on request. X-ray and a GP are in the same step-free, ground-floor clinic. Open every day, 10am–10pm.
                </p>

                {/* Expected outcomes */}
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {keyBenefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start space-x-3 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                      <CheckCircle className="w-5 h-5 text-[#1F5E4B] mt-0.5 flex-shrink-0" />
                      <span className="text-[#1A1A1A] text-xs sm:text-sm font-medium leading-normal">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <a href="#book-now" className="px-8 py-4 bg-[#1F5E4B] hover:bg-[#153f32] text-white font-bold rounded-xl text-sm transition-all shadow-md">
                    Book Your Rehabilitation Assessment Today →
                  </a>
                </div>
              </div>

              {/* Right Column (Hero Image) */}
              <div className="lg:col-span-5 relative">
                <div className="bg-[#FCFDFB] p-4 rounded-3xl shadow-lg">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-3">
                    <Image
                      src="/images/Physiotherapist assisting a patient after knee replacement surgery.jpg"
                      alt="Physiotherapist helping a patient after knee replacement at RamaCare, Jumeirah 1"
                      title="Physiotherapist assisting a patient after knee replacement surgery"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <p className="text-xs text-[#5F5F5F] italic text-center px-2">
                    Physiotherapist assisting a patient after knee replacement surgery to rebuild strength.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-white to-[#F9F7F2]/50">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              {/* Left Column - Visual Highlight Sidebar */}
              <div className="lg:col-span-4 lg:sticky lg:top-8">
                <div className="bg-[#1F5E4B] text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#D4A574]/15 rounded-full -ml-12 -mb-12" />

                  <span className="text-xs text-[#D4A574] font-bold uppercase tracking-wider block mb-2">
                    Clinical Focus
                  </span>
                  <h3 className="text-2xl font-extrabold mb-6 leading-tight">
                    Bridging the Gap Between Surgery & Recovery
                  </h3>

                  <div className="space-y-6">
                    <div className="border-l-2 border-[#D4A574] pl-4">
                      <h4 className="font-bold text-sm text-white/90">Objective Protocol</h4>
                      <p className="text-xs text-white/70 mt-1">Guided by your operating surgeon's specific timelines and weight-bearing instructions.</p>
                    </div>
                    <div className="border-l-2 border-[#D4A574] pl-4">
                      <h4 className="font-bold text-sm text-white/90">Active Recovery</h4>
                      <p className="text-xs text-white/70 mt-1">Restoring normal biomechanics to prevent joint compensation and stiffness.</p>
                    </div>
                    <div className="border-l-2 border-[#D4A574] pl-4">
                      <h4 className="font-bold text-sm text-white/90">DHA-Licensed Care</h4>
                      <p className="text-xs text-white/70 mt-1">Physiotherapy administered by certified professionals in Jumeirah.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Styled Text & Myth Buster */}
              <div className="lg:col-span-8 space-y-8">
                <div>
                  <h2 className="text-3xl font-extrabold text-[#1A1A1A] tracking-tight mb-6 flex items-center gap-3">
                    <span className="w-8 h-1 bg-[#1F5E4B] rounded-full inline-block"></span>
                    Understanding Post-Surgery Recovery
                  </h2>
                  <p className="text-lg text-[#1F5E4B] font-semibold leading-relaxed mb-6">
                    Surgery addresses the structural problem — a torn ligament, a worn joint, a fractured bone — but the body still needs guided support to heal properly and regain full function.
                  </p>
                  <div className="space-y-6 text-[#5F5F5F] text-base leading-relaxed">
                    <p>
                      This is why rehabilitation is such an important part of recovery. Without it, many people are left with stiffness, weakness or a slower return to the activities that matter to them.
                    </p>
                    <p>
                      Rehabilitation after surgery serves several essential purposes: preventing complications like blood clots or excessive scar tissue, restoring movement that naturally decreases during recovery, reducing post-operative pain, and helping patients regain the independence to manage daily tasks without assistance. Each of these goals requires a structured, professionally guided approach rather than simply &quot;waiting it out.&quot;
                    </p>
                    <p>
                      At RamaCare Polyclinic, our physiotherapy team works closely with your surgical history and your surgeon's recommendations to build a rehabilitation plan suited to your specific procedure, healing stage, and personal goals — whether that's walking comfortably again, returning to work, or getting back to sport.
                    </p>
                  </div>
                </div>

                {/* Myth vs Reality Card */}
                <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-2 h-full bg-[#D4A574]" />
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <span className="text-xs text-red-500 font-extrabold uppercase tracking-wider block mb-1">Common Assumption</span>
                      <h4 className="font-bold text-sm text-[#1A1A1A] mb-2">"Time and rest are enough to heal after surgery."</h4>
                      <p className="text-xs text-[#5F5F5F] leading-relaxed">
                        Many assume recovery happens automatically on its own. However, muscles go unused and weaken quickly, while joints naturally stiffen and form restrictive scar tissue.
                      </p>
                    </div>
                    <div className="sm:border-l sm:border-gray-200/60 sm:pl-6">
                      <span className="text-xs text-[#1F5E4B] font-extrabold uppercase tracking-wider block mb-1">Clinical Reality</span>
                      <h4 className="font-bold text-sm text-[#1A1A1A] mb-2">Structured input is required for optimal loading.</h4>
                      <p className="text-xs text-[#5F5F5F] leading-relaxed">
                        To heal in a way that supports full, lasting function, tissue needs progressive, safe loading. This is why rehabilitation is standard for orthopedic and sports surgeries.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT IS POST-SURGERY REHABILITATION */}
        <section className="py-12 md:py-20 px-4 bg-[#F5F1E8]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
                What Is Post-Surgery Rehabilitation?
              </h2>
              <p className="text-base sm:text-lg text-[#5F5F5F] leading-relaxed">
                Post-surgery rehabilitation is a structured, progressive physiotherapy process designed to restore movement, strength, and function following an operation. It bridges the gap between the surgical procedure itself and a full return to normal activity.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-bold text-lg text-[#1A1A1A] mb-3">Why Rehab Matters</h3>
                <p className="text-[#5F5F5F] text-sm leading-relaxed">
                  Rehabilitation matters because surgery, while addressing the underlying structural issue, often results in temporary muscle weakness, joint stiffness, and reduced confidence in movement — all of which need deliberate, guided attention to resolve properly. Left unaddressed, these effects can persist well beyond the expected healing time.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-bold text-lg text-[#1A1A1A] mb-3">Structured Phases</h3>
                <p className="text-[#5F5F5F] text-sm leading-relaxed">
                  The goals of physiotherapy after surgery typically include reducing pain and swelling, restoring range of motion, rebuilding strength, retraining movement patterns, and ultimately supporting a safe return to daily activities or sport. These goals are pursued in a specific sequence, often described as recovery phases, that respects how surgical tissue actually heals.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-bold text-lg text-[#1A1A1A] mb-3">Surgeon Collaboration</h3>
                <p className="text-[#5F5F5F] text-sm leading-relaxed">
                  Following your surgeon's protocol is essential throughout this process. Surgeons provide specific guidance based on the exact procedure performed — weight-bearing restrictions, movement precautions, or timelines for introducing certain exercises — and rehabilitation at RamaCare is always coordinated with these instructions rather than working independently of them.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WHY REHABILITATION IS IMPORTANT AFTER SURGERY */}
        <section className="py-12 md:py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">Why Rehabilitation Is Important After Surgery</h2>
              <p className="text-base sm:text-lg text-[#5F5F5F]">
                Structured rehabilitation after surgery helps you:
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {coreBenefits.map((benefit, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-[#FCFDFB] shadow-sm flex items-start space-x-3 hover:shadow-md hover:bg-white transition-all">
                  <CheckCircle className="w-5 h-5 text-[#1F5E4B] mt-0.5 flex-shrink-0" />
                  <span className="text-sm font-medium text-[#1A1A1A] leading-relaxed">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONDITIONS WE HELP AFTER SURGERY */}
        <section className="py-12 md:py-20 px-4 bg-[#F5F1E8]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">Conditions We Help After Surgery</h2>
              <p className="text-base sm:text-lg text-[#5F5F5F]">
                We provide rehab after these operations, wherever your surgery was done:
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {conditionsList.map((cond, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#1F5E4B]/5 text-[#1F5E4B] font-bold text-sm flex items-center justify-center mb-4">
                      {idx + 1}
                    </div>
                    <h4 className="font-bold text-base text-[#1A1A1A] mb-2">{cond.name}</h4>
                    <p className="text-xs text-[#5F5F5F] leading-relaxed">{cond.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SURGERY ELSEWHERE, WARNING SIGNS, SCAR TISSUE, QUICK FACTS */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8">
            <div className="bg-[#F0F7F4] rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-[#1A1A1A] mb-3">Surgery at Another Hospital? Rehab Here</h2>
              <p className="text-gray-700 leading-relaxed">Most of our post-surgery patients had their operation elsewhere in Dubai or abroad. Bring your discharge summary and your surgeon&apos;s rehab protocol. We follow it, and on request we send progress reports to your surgeon. The clinic is on the ground floor with step-free access and parking nearby, which matters on crutches or with a walker. We do not offer home visits.</p>
            </div>
            <div className="bg-[#FEF2F2] rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-[#1A1A1A] mb-3">Warning Signs After Surgery</h2>
              <ul className="space-y-2 text-gray-700">
                <li>• Calf pain, swelling or redness in the leg (possible blood clot)</li>
                <li>• Chest pain or sudden breathlessness: call 998</li>
                <li>• Fever, or a wound that is red, hot, swollen or leaking</li>
                <li>• New numbness, weakness or pain that is quickly getting worse</li>
              </ul>
              <p className="text-gray-700 mt-3">These need your surgeon or emergency care straight away, not physiotherapy.</p>
            </div>
            <div className="bg-[#F9F7F2] rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-[#1A1A1A] mb-3">Scar Tissue After Surgery</h2>
              <p className="text-gray-700 leading-relaxed">Once the wound has fully healed, gentle scar massage, stretching and regular movement help keep the scar soft so it does not limit the joint. Therapeutic ultrasound may be used alongside exercise. Your physiotherapist shows you how and when to start.</p>
            </div>
            <div className="bg-[#F9F7F2] rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-[#1A1A1A] mb-3">Quick Facts</h2>
              <ul className="space-y-2 text-gray-700">
                <li>Address: Ground floor, Jumeirah Terrace Building, 12 Al Dhiyafah Road, Jumeirah 1, Dubai (step-free)</li>
                <li>Physiotherapy assessment: AED 200</li>
                <li>Open every day, 10am to 10pm</li>
                <li>X-ray and GP in the same clinic; progress reports to your surgeon on request</li>
                <li>Insurance: coverage check and prior approval by RamaCare; pay and claim with our documents (see <a href="/services/physiotherapy-insurance-dubai/" className="text-[#1F5E4B] font-semibold underline">physiotherapy insurance</a>)</li>
                <li>Book: 04 286 2006 or WhatsApp 056 659 7878</li>
              </ul>
              <p className="text-gray-700 mt-4 text-right" lang="ar" dir="rtl">العلاج الطبيعي بعد العمليات في جميرا 1، دبي: تقييم بـ 200 درهم، مفتوح يومياً حتى 10 مساءً.</p>
            </div>
          </div>
        </section>

        {/* SYMPTOMS THAT REQUIRE REHABILITATION */}
        <section className="py-12 md:py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              {/* Checklist column */}
              <div className="lg:col-span-7">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">Symptoms That May Require Rehabilitation</h2>
                <p className="text-base text-[#5F5F5F] mb-6">
                  Certain signs after surgery suggest that structured physiotherapy would be beneficial:
                </p>
                <div className="grid sm:grid-cols-2 gap-3 mb-6">
                  {symptoms.map((s, idx) => (
                    <div key={idx} className="flex items-center space-x-3 p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#D4A574] flex-shrink-0" />
                      <span className="text-xs sm:text-sm font-semibold text-gray-700">{s}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-[#5F5F5F] italic">
                  If you're noticing any of these signs, a rehabilitation assessment can help identify the right next steps.
                </p>
              </div>

              {/* Image column */}
              <div className="lg:col-span-5">
                <div className="bg-[#FCFDFB] p-4 rounded-3xl shadow-md">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-3">
                    <Image
                      src="/images/Post-operative rehabilitation exercises in a Dubai physiotherapy clinic.jpg"
                      alt="Post-operative rehabilitation exercises at RamaCare, Jumeirah 1"
                      title="Post-operative rehabilitation exercises in Jumeirah clinic"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <p className="text-xs text-[#5F5F5F] italic text-center px-2">
                    Post-operative rehabilitation exercises at RamaCare, Jumeirah 1.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* OUR ASSESSMENT PROCESS */}
        <section className="py-12 md:py-20 px-4 bg-[#F5F1E8]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">Our Assessment Process</h2>
              <p className="text-base sm:text-lg text-[#5F5F5F]">
                A thorough assessment ensures your rehabilitation plan is built around your actual surgical history and current condition, not a generic template. At RamaCare, this typically includes:
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
              {assessmentSteps.map((step, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-[#1F5E4B]/10 text-[#1F5E4B] font-bold text-xs flex items-center justify-center flex-shrink-0">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#1A1A1A]">{step.name}</h4>
                    <p className="text-xs text-[#5F5F5F] leading-normal mt-0.5">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-sm sm:text-base text-[#5F5F5F] leading-relaxed italic text-center max-w-3xl mx-auto border-t border-gray-200/50 pt-6">
              This assessment isn't a one-time event. As your recovery progresses, your physiotherapist will periodically reassess your range of motion, strength, and function to confirm your rehabilitation plan is still matched to where you actually are in the healing process, adjusting the pace or focus of treatment as needed rather than following a fixed schedule regardless of progress.
            </p>
          </div>
        </section>

        {/* CLINICAL OPTIONS */}
        <section className="py-12 md:py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              {/* Image column */}
              <div className="lg:col-span-5 order-last lg:order-first">
                <div className="bg-[#FCFDFB] p-4 rounded-3xl shadow-md">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-3">
                    <Image
                      src="/images/Gait training session after orthopedic surgery.jpg"
                      alt="Gait training session during post-surgery rehabilitation in Dubai"
                      title="Gait training session after orthopedic surgery"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <p className="text-xs text-[#5F5F5F] italic text-center px-2">
                    Gait training session during post-surgery rehabilitation in Dubai.
                  </p>
                </div>
              </div>

              {/* Text column */}
              <div className="lg:col-span-7">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">Post-Surgery Rehabilitation at RamaCare</h2>
                <p className="text-base text-[#5F5F5F] mb-6">
                  Every programme is built around your procedure, healing stage, surgeon's protocol and goals. It may include:
                </p>
                <div className="grid sm:grid-cols-2 gap-3 mb-6">
                  {servicesOffered.map((serv, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-[#1F5E4B] mt-0.5 flex-shrink-0" />
                      <span className="text-xs sm:text-sm font-semibold text-gray-700">{serv}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-[#5F5F5F] italic leading-relaxed mb-6">
                  Every rehabilitation plan is personalized according to five key factors: your surgery type, your current healing stage, your pain level, your functional goals, and your broader medical history — ensuring the program fits you specifically, not a generic post-surgical template.
                </p>
                <h3 className="font-bold text-lg text-[#1A1A1A] mb-3">What a Personalised Rehab Plan Looks Like</h3>
                <p className="text-sm text-[#5F5F5F] leading-relaxed">
                  No two recovery plans at RamaCare look identical, because no two patients arrive with the same combination of surgery, healing progress, and goals. A footballer recovering from ACL reconstruction and an office worker recovering from spine surgery will follow very different exercise progressions, timelines, and functional targets, even if both plans share the same underlying phase-based structure.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PHYSIOTHERAPY TECHNIQUES USED */}
        <section className="py-12 md:py-20 px-4 bg-[#F5F1E8]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">Physiotherapy Techniques Used</h2>
              <p className="text-base sm:text-lg text-[#5F5F5F]">
                Your physiotherapist chooses from these techniques, based on your surgery and healing stage:
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-10">
              {techniques.map((t, idx) => (
                <div key={idx} className="bg-white p-5 rounded-2xl shadow-sm hover:shadow-md transition-all">
                  <h4 className="font-bold text-sm sm:text-base text-[#1A1A1A] mb-2">{t.name}</h4>
                  <p className="text-xs text-[#5F5F5F] leading-relaxed">{t.description}</p>
                </div>
              ))}
            </div>

            <p className="text-[#D4A574] text-xs font-semibold text-center italic">
              These techniques are combined in a sequence that matches your healing stage.
            </p>
          </div>
        </section>

        {/* REHABILITATION TIMELINE (STEPS) */}
        <section className="py-12 md:py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">Rehabilitation Timeline</h2>
              <p className="text-base sm:text-lg text-[#5F5F5F]">Select a recovery phase below to view its clinical focus.</p>
            </div>

            <div className="grid lg:grid-cols-12 gap-12 items-start">
              {/* Stepper buttons (Col 4) */}
              <div className="lg:col-span-4 space-y-3">
                {phases.map((p, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActivePhase(idx)}
                    className={`w-full flex justify-between items-center p-5 rounded-2xl text-left font-bold transition-all ${activePhase === idx
                      ? 'bg-[#1F5E4B] text-white shadow-md'
                      : 'bg-white text-[#5F5F5F] shadow-sm hover:shadow-md hover:text-[#1F5E4B]'
                      }`}
                  >
                    <span>{p.phase}: {p.title}</span>
                    <ChevronRight className={`w-4 h-4 transition-transform ${activePhase === idx ? 'translate-x-1' : ''}`} />
                  </button>
                ))}
              </div>

              {/* Display Result Details (Col 8) */}
              <div className="lg:col-span-8">
                <div className="bg-[#F9F7F2] p-6 sm:p-10 rounded-3xl shadow-sm min-h-[220px] flex flex-col justify-between">
                  <div>
                    <span className="text-xs text-[#D4A574] font-bold uppercase tracking-wider block mb-1">Clinical Goal</span>
                    <h3 className="text-2xl font-black text-[#1F5E4B] mb-4">
                      {phases[activePhase].phase}: {phases[activePhase].title}
                    </h3>
                    <p className="text-[#5F5F5F] text-base sm:text-lg leading-relaxed mb-6">
                      {phases[activePhase].desc}
                    </p>
                  </div>
                  <div className="border-t border-gray-200/50 pt-4 text-xs text-[#5F5F5F]">
                    Timelines vary considerably depending on the type of surgery performed and your surgeon's specific recommendations — your physiotherapist will provide guidance tailored to your individual recovery.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TYPICAL RECOVERY MILESTONES */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] mb-4 text-center">Typical Recovery Times After Common Surgeries</h2>
            <p className="text-gray-600 text-center mb-8">A general guide only. Your surgeon&apos;s instructions always come first.</p>
            <div className="overflow-x-auto rounded-2xl shadow-sm">
              <table className="w-full text-left overflow-hidden">
                <thead className="bg-[#1F5E4B] text-white">
                  <tr><th className="p-4">Surgery</th><th className="p-4">Rehab usually starts</th><th className="p-4">Typical return to daily activities</th></tr>
                </thead>
                <tbody>
                  {[
                    ["Knee replacement", "Within days", "About 3 months; strength keeps improving for up to a year"],
                    ["Hip replacement", "Within days", "About 3 months, following hip precautions"],
                    ["ACL reconstruction", "Within days", "Daily life in weeks; pivoting sport usually 6 to 12 months, after testing"],
                    ["Rotator cuff repair", "After a protected period set by your surgeon", "Several months; full strength can take longer"],
                    ["Meniscus surgery", "Within days", "A few weeks to a few months, depending on the repair"],
                    ["Fracture fixation", "As your surgeon allows weight-bearing", "Varies by bone and fixation"],
                    ["Spine surgery", "As advised by your surgeon", "Varies by procedure"]
                  ].map(function (r, i) {
                    return (
                      <tr key={i} className={i % 2 ? 'bg-[#F9F7F2]' : 'bg-white'}>
                        <td className="p-4 font-semibold">{r[0]}</td><td className="p-4">{r[1]}</td><td className="p-4">{r[2]}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CONDITIONS COMMONLY TREATED */}
        <section className="py-12 md:py-20 px-4 bg-[#F5F1E8]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">Conditions Commonly Treated</h2>
              <p className="text-base sm:text-lg text-[#5F5F5F]">
                Our clinical protocols are built to safely and progressively restore full capability for these primary post-operative scenarios:
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {commonlyTreated.map((ct, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                  <h4 className="font-bold text-base text-[#1A1A1A] mb-2">{ct.title}</h4>
                  <p className="text-xs text-[#5F5F5F] leading-relaxed">{ct.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BENEFITS OF EARLY REHABILITATION */}
        <section className="py-12 md:py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              {/* Image column */}
              <div className="lg:col-span-5">
                <div className="bg-[#FCFDFB] p-4 rounded-3xl shadow-md">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-3">
                    <Image
                      src="/images/Manual therapy session during shoulder surgery rehabilitation.jpg"
                      alt="Manual therapy after shoulder surgery at RamaCare"
                      title="Manual therapy session during shoulder surgery rehabilitation"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <p className="text-xs text-[#5F5F5F] italic text-center px-2">
                    Manual therapy session during shoulder surgery rehabilitation.
                  </p>
                </div>
              </div>

              {/* Text column */}
              <div className="lg:col-span-7">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">Benefits of Early Rehabilitation</h2>
                <p className="text-base text-[#5F5F5F] mb-6">
                  Starting rehabilitation promptly after surgery, as guided by your surgeon and physiotherapist, offers meaningful advantages:
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {earlyBenefits.map((b, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-[#1F5E4B]" />
                      <span className="text-xs sm:text-sm font-semibold text-gray-700">{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HOME CARE TIPS AFTER SURGERY */}
        <section className="py-12 md:py-20 px-4 bg-[#F5F1E8]">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              {/* Text column */}
              <div className="lg:col-span-7">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">Home Care Tips After Surgery</h2>
                <p className="text-base text-[#5F5F5F] mb-6">
                  Supporting your rehabilitation between clinic visits makes a meaningful difference to your overall recovery:
                </p>
                <div className="grid sm:grid-cols-2 gap-3 mb-6">
                  {homeTips.map((tip, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-[#1F5E4B]" />
                      <span className="text-xs sm:text-sm font-semibold text-gray-700">{tip}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm sm:text-base text-[#5F5F5F] italic leading-relaxed">
                  These habits matter just as much as your clinic-based sessions. Rehabilitation is most effective when it's treated as a continuous process rather than something that only happens during appointments — the small, consistent choices you make at home between sessions often determine how smoothly and quickly your recovery progresses.
                </p>
              </div>

              {/* Image column */}
              <div className="lg:col-span-5">
                <div className="bg-[#FCFDFB] p-4 rounded-3xl shadow-md">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-3">
                    <Image
                      src="/images/Personalized rehabilitation consultation with a DHA-licensed physiotherapist.jpg"
                      alt="Personalized post-surgery rehabilitation consultation with DHA-licensed physiotherapist"
                      title="Personalized post-surgery rehabilitation consultation"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <p className="text-xs text-[#5F5F5F] italic text-center px-2">
                    Personalized post-surgery rehabilitation consultation with a DHA-licensed physiotherapist.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="py-12 md:py-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-6 text-center">Why Choose RamaCare for Post-Surgery Rehab in Jumeirah 1?</h2>
            <div className="space-y-4 max-w-2xl mx-auto">
              {whyChooseUs.map((w, idx) => (
                <div key={idx} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#1F5E4B] mt-0.5 flex-shrink-0" />
                  <span className="text-[#1A1A1A] text-sm sm:text-base font-medium leading-relaxed">{w}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEARCHABLE FAQ SECTION */}
        <section className="py-12 md:py-20 px-4 bg-[#F5F1E8]">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] mb-4">Post-Surgery Rehab in Jumeirah 1: Common Questions</h2>
              <p className="text-base sm:text-lg text-[#5F5F5F]">Browse our answers to popular questions regarding post-surgery rehabilitation.</p>
            </div>

            {/* Search Input */}
            <div className="relative max-w-md mx-auto mb-10">
              <input
                type="text"
                placeholder="Search FAQs..."
                value={faqSearch}
                onChange={(e) => setFaqSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white shadow-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1F5E4B]/30 text-sm"
              />
              <Search className="w-5 h-5 text-[#5F5F5F] absolute left-4 top-1/2 transform -translate-y-1/2" />
            </div>

            {/* Accordions */}
            <div className="space-y-3">
              {filteredFaqs.map((faq, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <button
                      onClick={() => setActiveFaq(isOpen ? null : idx)}
                      className="w-full flex justify-between items-center p-5 text-left font-bold text-[#1A2521] hover:text-[#1F5E4B] transition-colors text-sm sm:text-base"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown className={`w-5 h-5 text-[#5F5F5F] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="px-5 pb-5 pt-1 text-[#5F5F5F] text-base leading-relaxed border-t border-gray-100">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}

              {filteredFaqs.length === 0 && (
                <div className="text-center py-8">
                  <p className="text-[#5F5F5F] text-sm">No matching questions found.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* CLINICAL BOOKING APPOINTMENT / LEAD FORM */}
        <div id="book-now">
          <BookConsultation
            content={{
              badge: 'Start Your Recovery',
              title: seo.title.replace('| RamaCare Polyclinic', '').trim(),
              description: 'Get back to comfortable, independent movement with evidence-based post-surgery rehabilitation care at RamaCare Polyclinic.',
              getInTouchTitle: 'Get In Touch',
              requestAppointmentTitle: 'Request Appointment',
              submitButtonText: 'Request Appointment',
              contactInfo: {
                phone: '+971 04 286 2006',
                whatsapp: '971566597878',
                email: 'query@ramacarepolyclinic.com',
                address: {
                  line1: '12 Al Dhiyafah Rd - Jumeirah Terrace Building,',
                  line2: 'Ground Floor, Jumeirah 1 - Dubai'
                }
              },
              clinicHours: {
                weekdays: 'Sunday - Saturday:',
                weekdaysTime: '10:00 AM - 10:00 PM',
                friday: 'Friday:',
                fridayTime: '10:00 AM - 8:00 PM'
              },
              statCards: [
                { title: 'DHA Licensed', description: 'Facility 2036418' },
                { title: 'AED 200', description: 'Physiotherapy Assessment' },
                { title: 'Any Hospital', description: 'Surgery Done Elsewhere Welcome' },
                { title: 'Open Daily', description: '10am – 10pm' }
              ],
              concerns: [
                { value: 'post-surgery-rehabilitation-dubai', label: 'Post-Surgery Rehab' },
                { value: 'knee-pain-treatment-dubai', label: 'Knee replacement / ACL' },
                { value: 'shoulder-pain-treatment-dubai', label: 'Shoulder surgery' },
                { value: 'back-pain-treatment-dubai', label: 'Spine / Disc surgery' }
              ]
            }}
          />
        </div>

        {/* DOCTORS SHOWCASE */}
        <DoctorsSection
          content={{
            badge: 'Your Care Team',
            title: 'Meet Your Physiotherapist and GP',
            description: 'Post-surgery rehab at RamaCare is led by Jeena Mathew, a DHA-licensed physiotherapist (BPT, MPT), with our GP for X-ray, medication where appropriate and referrals.'
          }}
          customDoctors={[DOCTORS['jeena-mathew-physiotherapist-dubai'], DOCTORS['dr-sahar-zomorrodi-general-practitioner-dubai']].filter(Boolean)}
        />

        {/* CONCLUSION AND CLINICAL NOTES */}
        <section className="py-12 md:py-20 px-4 bg-[#1F5E4B] text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">Conclusion</h2>
            <div className="text-white/90 text-base sm:text-lg leading-relaxed mb-8">
              Surgery fixes the structure; rehabilitation restores the function. At RamaCare Polyclinic in Jumeirah 1, a DHA-licensed physiotherapist follows your surgeon's protocol after surgery done at any hospital, with X-ray and a GP in the same step-free clinic, open every day until 10pm.
            </div>
            <div className="w-16 h-0.5 bg-[#D4A574] mx-auto mb-6" />
            <p className="text-sm text-white/80 max-w-xl mx-auto leading-relaxed mb-8">
              If you're preparing for surgery or recovering from a recent procedure, don't leave your recovery to chance. Book your rehabilitation assessment with RamaCare Polyclinic today and take the next step toward a confident, complete recovery.
            </p>
            <div className="flex justify-center gap-4">
              <a href="/book-appointment/" className="px-6 py-3 bg-[#D4A574] hover:bg-[#b08455] text-white font-bold rounded-xl text-xs sm:text-sm transition-all shadow-md">
                Book Appointment
              </a>
              <a href="/contact-us/" className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-bold border border-white/20 rounded-xl text-xs sm:text-sm transition-all">
                Contact Us
              </a>
            </div>
          </div>
        </section>

        {/* Medical Disclaimer */}
        <section className="py-10 bg-gray-50 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs text-gray-500 leading-relaxed">
              <strong className="text-gray-700">Medical Disclaimer:</strong> This content is provided for general informational purposes only and does not constitute medical advice. Recovery timelines vary considerably from patient to patient depending on the type of surgery, individual health factors, and adherence to rehabilitation. This content is not intended to replace guidance from your operating surgeon or a personalized assessment from a qualified healthcare professional. Please consult a DHA-licensed physiotherapist or physician at RamaCare Polyclinic, in coordination with your surgeon, for an individualized rehabilitation plan.
            </p>
          </div>
        </section>

        {/* CLINICAL RESOURCES & RELATED SERVICES */}
        <section className="py-12 bg-[#F9F7F2] border-t border-[#D4A574]/20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {/* Internal Links Column */}
              <div>
                <h4 className="text-lg font-bold text-[#1A1A1A] mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-[#1F5E4B] rounded-full inline-block"></span>
                  Related Treatments & Services
                </h4>
                <p className="text-sm text-[#5F5F5F] mb-4">
                  Explore other specialized physiotherapy and rehabilitation services available at RamaCare Polyclinic:
                </p>
                <div className="grid sm:grid-cols-2 gap-x-4 gap-y-2">
                  <a href="/services/physiotherapy-dubai/" className="text-sm text-[#5F5F5F] hover:text-[#1F5E4B] flex items-center gap-1.5 transition-colors font-medium">
                    <ChevronRight className="w-3.5 h-3.5 text-[#D4A574]" /> Physiotherapy Dubai
                  </a>
                  <a href="/services/sports-injury-rehabilitation-dubai/" className="text-sm text-[#5F5F5F] hover:text-[#1F5E4B] flex items-center gap-1.5 transition-colors font-medium">
                    <ChevronRight className="w-3.5 h-3.5 text-[#D4A574]" /> Sports Injury Rehab
                  </a>
                  <a href="/services/knee-pain-treatment-dubai/" className="text-sm text-[#5F5F5F] hover:text-[#1F5E4B] flex items-center gap-1.5 transition-colors font-medium">
                    <ChevronRight className="w-3.5 h-3.5 text-[#D4A574]" /> Knee Pain Treatment
                  </a>
                  <a href="/services/shoulder-pain-treatment-dubai/" className="text-sm text-[#5F5F5F] hover:text-[#1F5E4B] flex items-center gap-1.5 transition-colors font-medium">
                    <ChevronRight className="w-3.5 h-3.5 text-[#D4A574]" /> Shoulder Pain Treatment
                  </a>
                  <a href="/services/neck-pain-treatment-dubai/" className="text-sm text-[#5F5F5F] hover:text-[#1F5E4B] flex items-center gap-1.5 transition-colors font-medium">
                    <ChevronRight className="w-3.5 h-3.5 text-[#D4A574]" /> Neck Pain Treatment
                  </a>
                  <a href="/services/slip-disc-treatment-dubai/" className="text-sm text-[#5F5F5F] hover:text-[#1F5E4B] flex items-center gap-1.5 transition-colors font-medium">
                    <ChevronRight className="w-3.5 h-3.5 text-[#D4A574]" /> Slip Disc Treatment
                  </a>
                  <a href="/services/frozen-shoulder-treatment-dubai/" className="text-sm text-[#5F5F5F] hover:text-[#1F5E4B] flex items-center gap-1.5 transition-colors font-medium">
                    <ChevronRight className="w-3.5 h-3.5 text-[#D4A574]" /> Frozen Shoulder Rehab
                  </a>
                  <a href="/services/sciatica-treatment-dubai/" className="text-sm text-[#5F5F5F] hover:text-[#1F5E4B] flex items-center gap-1.5 transition-colors font-medium">
                    <ChevronRight className="w-3.5 h-3.5 text-[#D4A574]" /> Sciatica Treatment
                  </a>
                  <a href="/services/dry-needling-dubai/" className="text-sm text-[#5F5F5F] hover:text-[#1F5E4B] flex items-center gap-1.5 transition-colors font-medium">
                    <ChevronRight className="w-3.5 h-3.5 text-[#D4A574]" /> Dry Needling Dubai
                  </a>
                  <a href="/services/electrotherapy-dubai/" className="text-sm text-[#5F5F5F] hover:text-[#1F5E4B] flex items-center gap-1.5 transition-colors font-medium">
                    <ChevronRight className="w-3.5 h-3.5 text-[#D4A574]" /> Electrotherapy Dubai
                  </a>
                  <a href="/services/ultrasound-therapy-dubai/" className="text-sm text-[#5F5F5F] hover:text-[#1F5E4B] flex items-center gap-1.5 transition-colors font-medium col-span-2">
                    <ChevronRight className="w-3.5 h-3.5 text-[#D4A574]" /> Ultrasound Therapy Dubai
                  </a>
                </div>
              </div>

              {/* External Links Column */}
              <div>
                <h4 className="text-lg font-bold text-[#1A1A1A] mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-[#D4A574] rounded-full inline-block"></span>
                  Clinical Reference Guidelines
                </h4>
                <p className="text-sm text-[#5F5F5F] mb-4">
                  Our treatment guidelines are aligned with global standards and resources established by leading health organizations:
                </p>
                <ul className="space-y-2.5">
                  <li>
                    <a href="https://www.who.int" target="_blank" rel="noopener noreferrer" className="text-sm text-[#5F5F5F] hover:text-[#1F5E4B] flex items-center gap-1.5 transition-colors font-medium">
                      <ExternalLink className="w-3.5 h-3.5 text-[#1F5E4B]" />
                      <span>World Health Organization (WHO) <span className="text-xs text-[#8C8C8C] font-normal">— post-surgical recovery and rehabilitation guidance</span></span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.apta.org" target="_blank" rel="noopener noreferrer" className="text-sm text-[#5F5F5F] hover:text-[#1F5E4B] flex items-center gap-1.5 transition-colors font-medium">
                      <ExternalLink className="w-3.5 h-3.5 text-[#1F5E4B]" />
                      <span>American Physical Therapy Association (APTA) <span className="text-xs text-[#8C8C8C] font-normal">— post-operative rehabilitation standards</span></span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.aaos.org" target="_blank" rel="noopener noreferrer" className="text-sm text-[#5F5F5F] hover:text-[#1F5E4B] flex items-center gap-1.5 transition-colors font-medium">
                      <ExternalLink className="w-3.5 h-3.5 text-[#1F5E4B]" />
                      <span>American Academy of Orthopaedic Surgeons (AAOS) <span className="text-xs text-[#8C8C8C] font-normal">— orthopedic surgery and recovery information</span></span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.nhs.uk" target="_blank" rel="noopener noreferrer" className="text-sm text-[#5F5F5F] hover:text-[#1F5E4B] flex items-center gap-1.5 transition-colors font-medium">
                      <ExternalLink className="w-3.5 h-3.5 text-[#1F5E4B]" />
                      <span>NHS <span className="text-xs text-[#8C8C8C] font-normal">— post-surgical physiotherapy guidance</span></span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.mayoclinic.org" target="_blank" rel="noopener noreferrer" className="text-sm text-[#5F5F5F] hover:text-[#1F5E4B] flex items-center gap-1.5 transition-colors font-medium">
                      <ExternalLink className="w-3.5 h-3.5 text-[#1F5E4B]" />
                      <span>Mayo Clinic <span className="text-xs text-[#8C8C8C] font-normal">— post-operative recovery information</span></span>
                    </a>
                  </li>
                  <li>
                    <a href="https://my.clevelandclinic.org" target="_blank" rel="noopener noreferrer" className="text-sm text-[#5F5F5F] hover:text-[#1F5E4B] flex items-center gap-1.5 transition-colors font-medium">
                      <ExternalLink className="w-3.5 h-3.5 text-[#1F5E4B]" />
                      <span>Cleveland Clinic <span className="text-xs text-[#8C8C8C] font-normal">— orthopedic rehabilitation resources</span></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Content Reviewer Badge */}
        <ContentReviewBadge doctorName="Jeena Mathew" pageSlug="post-surgery-rehabilitation-dubai" />
      </div>
    </Layout>
  );
}

// Framer motion stub for compatibility if not globally imported
function AnimatePresence({ children }) {
  return <>{children}</>;
}

function motion_div({ children, ...props }) {
  return <div {...props}>{children}</div>;
}
const motion = {
  div: motion_div
};