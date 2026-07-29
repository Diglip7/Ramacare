import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../../../components/Layout';
import BookConsultation from '../../../components/BookConsultation';
import DoctorsSection from '../../../components/DoctorsSection';
import { DOCTOR_GROUPS } from '../../data/doctors';
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

  const seo = {
    title: "Post-Surgery Rehabilitation Dubai | RamaCare Polyclinic",
    metaDescription: "Expert Post-Surgery Rehabilitation Dubai at RamaCare Polyclinic. DHA-licensed physiotherapists, personalized recovery plans. Book your assessment today.",
    canonical: "https://ramacarepolyclinic.ae/services/post-surgery-rehabilitation-dubai/"
  };

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services/" },
    { label: "Physiotherapy", href: "/services/physiotherapy-dubai/" },
    { label: "Post-Surgery Rehabilitation", href: "/services/post-surgery-rehabilitation-dubai/" }
  ];

  const keyBenefits = [
    "Faster, more complete recovery through structured, progressive rehabilitation",
    "Personalized rehabilitation plans built around your specific surgery and healing stage",
    "Supervision by DHA-licensed physiotherapists, following your surgeon's recommended protocol",
    "A clear, staged path back to daily activities, work, or sport"
  ];

  const coreBenefits = [
    { name: "Faster recovery", description: "Guided, progressive loading of healing tissue under professional supervision." },
    { name: "Improved mobility", description: "Restoring natural range of motion in the affected joint or limb." },
    { name: "Better flexibility", description: "Reducing the stiffness that naturally follows surgical immobilization." },
    { name: "Pain reduction", description: "Achieved through appropriate manual therapy and movement." },
    { name: "Scar tissue management", description: "Preventing adhesions and restrictions in movement." },
    { name: "Reduced stiffness", description: "Through early, appropriate mobilization." },
    { name: "Muscle strengthening", description: "Rebuilding strength and volume lost during surgery and immobilization." },
    { name: "Improved balance", description: "Restoring proprioceptive feedback, particularly important after lower limb procedures." },
    { name: "Better circulation", description: "Supporting healing and reducing the risk of deep vein thrombosis (DVT)." },
    { name: "Reduced complications", description: "Minimizing the risk of blood clots or excessive scarring." },
    { name: "Safe return to daily activities", description: "Guided by objective clinical progress rather than guesswork." }
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
    { name: "Ultrasound Therapy", description: "Supporting tissue healing and reducing localized discomfort." },
    { name: "Dry Needling", description: "Addressing muscular tightness and trigger points where appropriate." },
    { name: "Taping", description: "Providing support and feedback to joints and muscles during early rehabilitation." },
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
    "Reduced risk of complications",
    "Faster overall healing",
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
    "DHA-licensed physiotherapists with experience across a wide range of post-surgical conditions",
    "Evidence-based rehabilitation grounded in recognized clinical standards",
    "Personalized recovery plans built around your specific surgery and goals",
    "Modern rehabilitation equipment to support every stage of recovery",
    "Surgeon-guided protocols, ensuring rehabilitation aligns with your operating surgeon's recommendations",
    "Patient-centered care with clear communication throughout your recovery journey",
    "Convenient Jumeirah location, easy to reach for regular appointments"
  ];

  const faqs = [
    { question: "When should rehabilitation start?", answer: "This depends on your specific surgery and your surgeon's protocol. Some procedures call for early mobilization within days, while others require a longer initial protection period before rehabilitation begins." },
    { question: "How many physiotherapy sessions will I need?", answer: "This varies based on your surgery type, healing progress, and personal goals. Your physiotherapist will provide a personalized estimate after your initial assessment." },
    { question: "Can physiotherapy reduce pain after surgery?", answer: "Yes. Appropriate manual therapy, guided movement, and modalities like electrotherapy or ultrasound can all contribute to reduced post-surgical pain." },
    { question: "How long is recovery?", answer: "Recovery timelines vary significantly depending on the surgery performed, your overall health, and how consistently you follow your rehabilitation plan. Your physiotherapist will discuss a realistic timeline based on your specific case." },
    { question: "Can rehabilitation prevent stiffness?", answer: "Yes. Early, appropriately guided movement is one of the most effective ways to prevent excessive post-surgical stiffness." },
    { question: "Is rehabilitation painful?", answer: "Some mild discomfort during certain exercises is common, but rehabilitation should never cause sharp or worsening pain. Your physiotherapist will adjust your program accordingly." },
    { question: "What surgeries need physiotherapy?", answer: "Most orthopedic surgeries — including joint replacements, ligament reconstructions, tendon repairs, and spine procedures — benefit from structured post-surgical physiotherapy." },
    { question: "Can I walk immediately after surgery?", answer: "This depends entirely on your specific procedure and surgeon's instructions. Some surgeries allow early walking with support, while others require a period of restricted weight-bearing." },
    { question: "What exercises are safe?", answer: "Safe exercises depend on your surgery type and healing stage. Your physiotherapist will guide you through appropriate movements at each phase of recovery." },
    { question: "Can rehabilitation improve balance?", answer: "Yes. Balance training is a core component of many rehabilitation programs, particularly following lower limb surgery." },
    { question: "Can elderly patients benefit?", answer: "Yes. Rehabilitation programs are adapted to individual health status and mobility level, making them beneficial for elderly patients recovering from surgery." },
    { question: "Will rehabilitation help me return to sports?", answer: "Yes. Sports-specific rehabilitation programs are designed to help athletes safely and confidently return to training and competition." },
    { question: "What if I miss sessions?", answer: "Missing sessions can slow progress, so it's best to maintain consistency where possible. If you need to reschedule, our team can help adjust your plan accordingly." },
    { question: "Do I need a referral?", answer: "While a referral or surgical report from your surgeon helps us align your rehabilitation with their protocol, you can generally book a physiotherapy assessment directly." },
    { question: "Why choose RamaCare?", answer: "RamaCare Polyclinic combines DHA-licensed physiotherapy expertise with personalized, surgeon-guided rehabilitation plans, making it a trusted choice for Post-Surgery Rehabilitation Dubai patients who want a safe, complete recovery." }
  ];

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(faqSearch.toLowerCase()) ||
    faq.answer.toLowerCase().includes(faqSearch.toLowerCase())
  );

  // SEO schemas
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.answer
      }
    }))
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "Post-Surgery Rehabilitation Dubai",
    "url": "https://ramacarepolyclinic.ae/services/post-surgery-rehabilitation-dubai",
    "description": "DHA-licensed, surgeon-guided post-surgery rehabilitation at RamaCare Polyclinic, Dubai, covering joint replacement, ACL reconstruction, spine surgery, and sports surgery recovery.",
    "medicalAudience": { "@type": "Patient" },
    "about": {
      "@type": "MedicalTherapy",
      "name": "Post-Surgery Rehabilitation",
      "medicineSystem": "https://schema.org/PhysicalTherapy"
    },
    "provider": {
      "@type": "MedicalClinic",
      "name": "RamaCare Polyclinic",
      "url": "https://ramacarepolyclinic.ae",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Jumeirah 1",
        "addressRegion": "Dubai",
        "addressCountry": "AE"
      }
    }
  };

  return (
    <Layout>
      <Head>
        <title key="title">{seo.title}</title>
        <meta name="description" content={seo.metaDescription} key="description" />
        <link rel="canonical" href={seo.canonical} key="canonical" />

        {/* Structured Data Schemas */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
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
            <nav className="flex flex-wrap items-center gap-y-1.5 text-[10px] sm:text-xs font-semibold text-[#5F5F5F] mb-6 uppercase tracking-wider">
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
                  DHA Licensed & Trusted
                </span>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1A1A1A] tracking-tight mb-4 leading-tight">
                  Post-Surgery Rehabilitation Dubai
                </h1>

                <p className="text-[#D4A574] text-base sm:text-lg font-bold tracking-wide mb-6 uppercase">
                  Personalized Post-Operative Physiotherapy & Recovery Protocols
                </p>



                <p className="text-[#5F5F5F] text-sm sm:text-base leading-relaxed mb-8">
                  Surgery is often just the first step toward recovery — what happens afterward matters just as much. RamaCare Polyclinic's Post-Surgery Rehabilitation Dubai program is designed to help you heal faster, move more freely, and regain independence, guided by DHA-licensed physiotherapists working in step with your surgeon's protocol.
                </p>

                {/* Expected outcomes */}
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {keyBenefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start space-x-3 bg-white p-4 rounded-xl shadow-sm border border-gray-150">
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
                <div className="bg-[#FCFDFB] p-4 rounded-3xl border border-gray-150 shadow-lg">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-3">
                    <Image
                      src="/images/Post-surgery rehabilitation dubai.jpg"
                      alt="Post-Surgery Rehabilitation Dubai — physiotherapist assisting knee replacement patient"
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
        <section className="py-12 md:py-20 px-4 bg-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#F9F7F2] p-6 sm:p-8 md:p-12 rounded-3xl shadow-sm border border-[#D4A574]/20 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-3 h-full bg-[#D4A574]" />
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] mb-6 pl-4">Introduction</h2>
              <div className="space-y-6 text-[#5F5F5F] text-base leading-relaxed pl-4">
                <p>
                  Surgery addresses the structural problem — a torn ligament, a worn joint, a fractured bone — but the body still needs guided support to heal properly and regain full function. This is exactly why <strong>Post-Surgery Rehabilitation Dubai</strong> plays such an important role in the overall recovery journey. Without it, many patients experience prolonged stiffness, incomplete strength recovery, or a slower return to the activities that matter to them.
                </p>
                <p>
                  Rehabilitation after surgery serves several essential purposes: preventing complications like blood clots or excessive scar tissue, restoring movement that naturally decreases during recovery, reducing post-operative pain, and helping patients regain the independence to manage daily tasks without assistance. Each of these goals requires a structured, professionally guided approach rather than simply &quot;waiting it out.&quot;
                </p>
                <p>
                  At RamaCare Polyclinic, our physiotherapy team works closely with your surgical history and your surgeon's recommendations to build a rehabilitation plan suited to your specific procedure, healing stage, and personal goals — whether that's walking comfortably again, returning to work, or getting back to sport.
                </p>
                <p>
                  Many patients assume that once the surgery itself is complete, recovery will simply happen on its own with time and rest. In reality, the body needs deliberate, guided input during this window to heal in a way that supports full, lasting function. Muscles that go unused during immobilization weaken quickly, joints that aren't moved through their range can stiffen, and movement patterns can become guarded or compensatory if left unaddressed. Structured rehabilitation directly counters each of these tendencies, which is why it's considered a standard part of orthopedic and sports surgery recovery worldwide, not an optional add-on.
                </p>
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
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-150">
                <h3 className="font-bold text-lg text-[#1A1A1A] mb-3">Why Rehab Matters</h3>
                <p className="text-[#5F5F5F] text-sm leading-relaxed">
                  Rehabilitation matters because surgery, while addressing the underlying structural issue, often results in temporary muscle weakness, joint stiffness, and reduced confidence in movement — all of which need deliberate, guided attention to resolve properly. Left unaddressed, these effects can persist well beyond the expected healing time.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-150">
                <h3 className="font-bold text-lg text-[#1A1A1A] mb-3">Structured Phases</h3>
                <p className="text-[#5F5F5F] text-sm leading-relaxed">
                  The goals of physiotherapy after surgery typically include reducing pain and swelling, restoring range of motion, rebuilding strength, retraining movement patterns, and ultimately supporting a safe return to daily activities or sport. These goals are pursued in a specific sequence, often described as recovery phases, that respects how surgical tissue actually heals.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-150">
                <h3 className="font-bold text-lg text-[#1A1A1A] mb-3">Surgeon Collaboration</h3>
                <p className="text-[#5F5F5F] text-sm leading-relaxed">
                  Following your surgeon's protocol is essential throughout this process. Surgeons provide specific guidance based on the exact procedure performed — weight-bearing restrictions, movement precautions, or timelines for introducing certain exercises — and rehabilitation at RamaCare is always coordinated with these instructions rather than working independently of them.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WHY REHABILITATION IS IMPORTANT AFTER SURGERY */}
        <section className="py-12 md:py-20 px-4 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">Why Rehabilitation Is Important After Surgery</h2>
              <p className="text-base sm:text-lg text-[#5F5F5F]">
                Committing to structured post operative rehabilitation Dubai patients receive offers benefits that extend well beyond simply healing the surgical site — and these benefits are exactly why Post-Surgery Rehabilitation Dubai is considered a core part of recovery rather than an optional extra:
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {coreBenefits.map((b, idx) => (
                <div key={idx} className="p-5 rounded-xl border border-gray-150 bg-[#FCFDFB] flex items-start space-x-3 hover:border-[#1F5E4B]/30 hover:shadow-sm transition-all">
                  <CheckCircle className="w-5 h-5 text-[#1F5E4B] mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-sm text-[#1A1A1A]">{b.name}</h4>
                    <p className="text-xs text-[#5F5F5F] mt-1 leading-relaxed">{b.description}</p>
                  </div>
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
                Our physiotherapy team supports rehabilitation across a wide range of surgical procedures, each requiring its own tailored approach to Post-Surgery Rehabilitation Dubai:
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {conditionsList.map((cond, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white border border-gray-150 hover:shadow-md transition-all flex flex-col justify-between">
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

        {/* SYMPTOMS THAT REQUIRE REHABILITATION */}
        <section className="py-12 md:py-20 px-4 bg-white border-b border-gray-100">
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
                    <div key={idx} className="flex items-center space-x-3 p-3 bg-[#FCFDFB] rounded-xl border border-gray-150">
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
                <div className="bg-[#FCFDFB] p-4 rounded-3xl border border-gray-150 shadow-md">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-3">
                    <Image
                      src="/images/Post-operative rehabilitation exercises.jpg"
                      alt="Post-operative rehabilitation exercises at RamaCare Polyclinic Dubai"
                      title="Post-operative rehabilitation exercises in Jumeirah clinic"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <p className="text-xs text-[#5F5F5F] italic text-center px-2">
                    Post-operative rehabilitation exercises at RamaCare Polyclinic Dubai.
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
                <div key={idx} className="p-5 rounded-xl bg-white border border-gray-150 shadow-sm flex items-start space-x-3">
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

            <p className="text-sm sm:text-base text-[#5F5F5F] leading-relaxed italic text-center max-w-3xl mx-auto border-t border-gray-300/40 pt-6">
              This assessment isn't a one-time event. As your recovery progresses, your physiotherapist will periodically reassess your range of motion, strength, and function to confirm your rehabilitation plan is still matched to where you actually are in the healing process, adjusting the pace or focus of treatment as needed rather than following a fixed schedule regardless of progress.
            </p>
          </div>
        </section>

        {/* CLINICAL OPTIONS */}
        <section className="py-12 md:py-20 px-4 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              {/* Image column */}
              <div className="lg:col-span-5 order-last lg:order-first">
                <div className="bg-[#FCFDFB] p-4 rounded-3xl border border-gray-150 shadow-md">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-3">
                    <Image
                      src="/images/Gait training session.jpg"
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
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">Post-Surgery Rehabilitation Dubai at RamaCare</h2>
                <p className="text-base text-[#5F5F5F] mb-6">
                  Our Post-Surgery Rehabilitation Dubai programs are structured around your specific procedure, healing stage, and personal recovery goals. Your program may include:
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
                <h3 className="font-bold text-lg text-[#1A1A1A] mb-3">What a Personalized Post-Surgery Rehabilitation Dubai Plan Looks Like</h3>
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
                Our physiotherapists draw on a range of evidence-based techniques, selected according to your specific needs:
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-10">
              {techniques.map((t, idx) => (
                <div key={idx} className="bg-white p-5 rounded-2xl border border-gray-150 hover:border-[#1F5E4B]/30 hover:shadow-md transition-all">
                  <h4 className="font-bold text-sm sm:text-base text-[#1A1A1A] mb-2">{t.name}</h4>
                  <p className="text-xs text-[#5F5F5F] leading-relaxed">{t.description}</p>
                </div>
              ))}
            </div>

            <p className="text-[#D4A574] text-xs font-semibold text-center italic">
              These techniques are rarely used in isolation — most Post-Surgery Rehabilitation Dubai plans combine several of them in a specific sequence matched to your healing stage.
            </p>
          </div>
        </section>

        {/* REHABILITATION TIMELINE (STEPS) */}
        <section className="py-12 md:py-20 px-4 bg-white border-b border-gray-100">
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
                    className={`w-full flex justify-between items-center p-5 rounded-2xl text-left border font-bold transition-all ${activePhase === idx
                      ? 'bg-[#1F5E4B] text-white border-[#1F5E4B] shadow-md'
                      : 'bg-[#FCFDFB] text-[#5F5F5F] border-gray-200 hover:border-[#1F5E4B]/30'
                      }`}
                  >
                    <span>{p.phase}: {p.title}</span>
                    <ChevronRight className={`w-4 h-4 transition-transform ${activePhase === idx ? 'translate-x-1' : ''}`} />
                  </button>
                ))}
              </div>

              {/* Display Result Details (Col 8) */}
              <div className="lg:col-span-8">
                <div className="bg-[#F9F7F2] p-6 sm:p-10 rounded-3xl border border-[#D4A574]/20 shadow-sm min-h-[220px] flex flex-col justify-between">
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
                <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-150 shadow-sm hover:shadow-md transition-all">
                  <h4 className="font-bold text-base text-[#1A1A1A] mb-2">{ct.title}</h4>
                  <p className="text-xs text-[#5F5F5F] leading-relaxed">{ct.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BENEFITS OF EARLY REHABILITATION */}
        <section className="py-12 md:py-20 px-4 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              {/* Image column */}
              <div className="lg:col-span-5">
                <div className="bg-[#FCFDFB] p-4 rounded-3xl border border-gray-150 shadow-md">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-3">
                    <Image
                      src="/images/Manual therapy session.jpg"
                      alt="Manual therapy session for shoulder surgery rehabilitation Dubai"
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
                <div className="bg-[#FCFDFB] p-4 rounded-3xl border border-gray-150 shadow-md">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-3">
                    <Image
                      src="/images/Personalized rehabilitation consultation.jpg"
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
        <section className="py-12 md:py-20 px-4 bg-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-6 text-center">Why Choose RamaCare Polyclinic?</h2>
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
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] mb-4">Frequently Asked Questions</h2>
              <p className="text-base sm:text-lg text-[#5F5F5F]">Browse our answers to popular questions regarding post-surgery rehabilitation.</p>
            </div>

            {/* Search Input */}
            <div className="relative max-w-md mx-auto mb-10">
              <input
                type="text"
                placeholder="Search FAQs..."
                value={faqSearch}
                onChange={(e) => setFaqSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#1F5E4B] text-sm"
              />
              <Search className="w-5 h-5 text-[#5F5F5F] absolute left-4 top-1/2 transform -translate-y-1/2" />
            </div>

            {/* Accordions */}
            <div className="space-y-3">
              {filteredFaqs.map((faq, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div key={idx} className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
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
              submitButtonText: 'Confirm Free Consultation',
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
                { title: 'DHA Licensed', description: 'Certified Facility' },
                { title: 'Experienced Team', description: '10+ Years Combined' },
                { title: 'Personalized Plans', description: 'Built Around Assessment' },
                { title: '4.9/5 Rating', description: 'Patient Reviews' }
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
        <section className="py-12 md:py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <DoctorsSection customDoctors={DOCTOR_GROUPS.PHYSIO} />
          </div>
        </section>

        {/* CONCLUSION AND CLINICAL NOTES */}
        <section className="py-12 md:py-20 px-4 bg-[#1F5E4B] text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">Conclusion</h2>
            <div className="text-white/90 text-base sm:text-lg leading-relaxed mb-8">
              Surgery is an important step, but full recovery depends just as much on what happens afterward. Post-Surgery Rehabilitation Dubai at RamaCare Polyclinic combines DHA-licensed physiotherapy expertise, surgeon-guided protocols, and a personalized, phase-based approach to help you heal safely, regain strength, and return to the activities that matter to you.
            </div>
            <div className="w-16 h-0.5 bg-[#D4A574] mx-auto mb-6" />
            <p className="text-sm text-white/80 max-w-xl mx-auto leading-relaxed mb-8">
              If you're preparing for surgery or recovering from a recent procedure, don't leave your recovery to chance. Book your rehabilitation assessment with RamaCare Polyclinic today and take the next step toward a confident, complete recovery.
            </p>
            <div className="flex justify-center gap-4">
              <a href="/book-appointment" className="px-6 py-3 bg-[#D4A574] hover:bg-[#b08455] text-white font-bold rounded-xl text-xs sm:text-sm transition-all shadow-md">
                Book Appointment
              </a>
              <a href="/contact-us" className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-bold border border-white/20 rounded-xl text-xs sm:text-sm transition-all">
                Contact Us
              </a>
            </div>
          </div>
        </section>

        {/* Medical Disclaimer */}
        <section className="py-10 bg-gray-50 border-t border-gray-150 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs text-gray-500 leading-relaxed">
              <strong className="text-gray-700">Medical Disclaimer:</strong> This content is provided for general informational purposes only and does not constitute medical advice. Recovery timelines vary considerably from patient to patient depending on the type of surgery, individual health factors, and adherence to rehabilitation. This content is not intended to replace guidance from your operating surgeon or a personalized assessment from a qualified healthcare professional. Please consult a DHA-licensed physiotherapist or physician at RamaCare Polyclinic, in coordination with your surgeon, for an individualized rehabilitation plan.
            </p>
          </div>
        </section>

        {/* SUPPORTING SEO ASSETS (FOOTER NOTES) */}
        <section className="py-8 bg-gray-100 text-gray-400 text-[10px] px-4 border-t border-gray-200">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-bold text-gray-600 uppercase mb-2">Internal Linking Map</h5>
              <div className="flex flex-wrap gap-x-3 gap-y-1">
                <a href="/services/physiotherapy-dubai" className="hover:text-[#1F5E4B] underline">Physiotherapy Dubai</a>
                <a href="/services/sports-injury-rehabilitation-dubai" className="hover:text-[#1F5E4B] underline">Sports Injury Rehabilitation Dubai</a>
                <a href="/services/knee-pain-treatment-dubai" className="hover:text-[#1F5E4B] underline">Knee Pain Treatment Dubai</a>
                <a href="/services/shoulder-pain-treatment-dubai" className="hover:text-[#1F5E4B] underline">Shoulder Pain Treatment Dubai</a>
                <a href="/services/neck-pain-treatment-dubai" className="hover:text-[#1F5E4B] underline">Neck Pain Treatment Dubai</a>
                <a href="/services/slip-disc-treatment-dubai" className="hover:text-[#1F5E4B] underline">Slip Disc Treatment Dubai</a>
                <a href="/services/frozen-shoulder-treatment-dubai" className="hover:text-[#1F5E4B] underline">Frozen Shoulder Treatment Dubai</a>
                <a href="/services/sciatica-treatment-dubai" className="hover:text-[#1F5E4B] underline">Sciatica Treatment Dubai</a>
                <a href="/services/dry-needling-dubai" className="hover:text-[#1F5E4B] underline">Dry Needling Dubai</a>
                <a href="/services/electrotherapy-dubai" className="hover:text-[#1F5E4B] underline">Electrotherapy Dubai</a>
                <a href="/services/ultrasound-therapy-dubai" className="hover:text-[#1F5E4B] underline">Ultrasound Therapy Dubai</a>
              </div>
            </div>
            <div>
              <h5 className="font-bold text-gray-600 uppercase mb-2">External Reference Alignment Only</h5>
              <p className="leading-relaxed">
                World Health Organization (WHO), American Physical Therapy Association (APTA), American Academy of Orthopaedic Surgeons (AAOS), NHS, Mayo Clinic, Cleveland Clinic.
              </p>
            </div>
          </div>
        </section>
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
