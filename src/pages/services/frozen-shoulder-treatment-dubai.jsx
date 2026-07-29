import Layout from '../../../components/Layout';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Activity,
  Calendar,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Clock,
  MapPin,
  MessageCircle,
  Phone,
  Shield,
  Target,
  Users,
  Zap,
  ArrowRight,
  Plus,
  Minus,
  Info
} from 'lucide-react';

export default function FrozenShoulderTreatmentPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: 'Can frozen shoulder heal without surgery?',
      answer: 'Yes. Most cases improve with structured physiotherapy, and surgery is generally reserved for patients who don\'t respond after several months of conservative treatment.'
    },
    {
      question: 'Is physiotherapy painful?',
      answer: 'Some sessions may involve mild discomfort, especially during the frozen stage, but your physiotherapist will always work within your pain tolerance.'
    },
    {
      question: 'How many sessions are required?',
      answer: 'This varies by stage and severity. Many patients need weekly sessions over several months, with home exercises in between.'
    },
    {
      question: 'What causes frozen shoulder?',
      answer: 'It\'s often linked to diabetes, prior injury, prolonged immobility, or underlying thyroid conditions, though sometimes no clear cause is identified.'
    },
    {
      question: 'Is surgery necessary?',
      answer: 'Rarely. Surgery is typically considered only when physiotherapy hasn\'t produced meaningful improvement after an extended period.'
    },
    {
      question: 'Can diabetes cause frozen shoulder?',
      answer: 'Diabetes is one of the strongest known risk factors, likely due to changes in the joint capsule\'s collagen structure.'
    },
    {
      question: 'Is exercise enough on its own?',
      answer: 'Exercise is essential, but combining it with manual therapy and other modalities generally produces better results than exercise alone.'
    },
    {
      question: 'How long does frozen shoulder usually last?',
      answer: 'Without treatment, it can take one to three years to resolve. Structured physiotherapy often shortens this timeline.'
    },
    {
      question: 'Can frozen shoulder come back after recovery?',
      answer: 'It\'s uncommon in the same shoulder, though some patients later develop it in the opposite shoulder.'
    },
    {
      question: 'Does frozen shoulder affect both shoulders at once?',
      answer: 'It\'s possible but not common. Most cases affect one shoulder at a time.'
    },
    {
      question: 'What\'s the difference between frozen shoulder and a rotator cuff tear?',
      answer: 'A rotator cuff tear usually limits active movement more than passive movement, while frozen shoulder restricts both equally.'
    },
    {
      question: 'Can I keep working with frozen shoulder?',
      answer: 'Most patients continue working, though tasks involving overhead reaching or heavy lifting may need modification during treatment.'
    },
    {
      question: 'Should I rest my shoulder completely?',
      answer: 'Complete rest can actually worsen stiffness. Guided, gentle movement is generally more effective than immobilization.'
    },
    {
      question: 'Is frozen shoulder more common in women?',
      answer: 'Yes, particularly in women over 40, though the exact reason isn\'t fully understood.'
    },
    {
      question: 'Can younger people get frozen shoulder?',
      answer: 'It\'s less common, but it can occur, especially after injury, surgery, or prolonged immobilization.'
    },
    {
      question: 'What happens if frozen shoulder is left untreated?',
      answer: 'Some patients recover on their own over one to three years, though many are left with lingering stiffness or reduced range of motion.'
    },
    {
      question: 'Will I need an MRI for diagnosis?',
      answer: 'Not always. Many cases are diagnosed through physical examination and history alone, with imaging reserved for unclear or complex presentations.'
    },
    {
      question: 'Can dry needling help with frozen shoulder?',
      answer: 'Yes, it can help reduce muscle guarding and tension around the shoulder, complementing manual therapy and stretching.'
    },
    {
      question: 'How soon should I see a physiotherapist after symptoms start?',
      answer: 'As early as possible. Early treatment tends to shorten the freezing stage and reduce overall recovery time.'
    },
    {
      question: 'Do injections help with frozen shoulder?',
      answer: 'Some patients benefit from corticosteroid injections for pain relief, though this is typically discussed with a physician alongside physiotherapy.'
    }
  ];

  return (
    <Layout>
      <Head>
        <title key="title">Frozen Shoulder Treatment Dubai | Expert Physiotherapy</title>
        <meta name="description" content="Struggling with shoulder stiffness or pain? Get expert frozen shoulder treatment in Dubai at RamaCare Polyclinic. DHA-licensed physios. Book now!" key="description" />
        <meta name="keywords" content="Frozen Shoulder Treatment Dubai, Frozen Shoulder Specialist Dubai, Frozen Shoulder Physiotherapy Dubai, Frozen Shoulder Pain Treatment, Shoulder Pain Clinic Dubai, Adhesive Capsulitis Treatment Dubai, Shoulder Mobility Treatment Dubai, Shoulder Rehabilitation Dubai, Best Frozen Shoulder Treatment, Frozen Shoulder Recovery, Physiotherapy for Frozen Shoulder, Shoulder Joint Stiffness, Shoulder Pain Relief Dubai, Frozen Shoulder Doctor Dubai, Shoulder Stiffness Treatment Dubai, Frozen Shoulder Exercises Dubai" key="keywords" />

        {/* Social SEO */}
        <meta property="og:title" content="Frozen Shoulder Treatment Dubai | RamaCare Polyclinic" key="og:title" />
        <meta property="og:description" content="Expert, DHA-licensed physiotherapy for frozen shoulder in Dubai. Personalized care to restore mobility and relieve pain. Book your consultation today." key="og:description" />
        <meta property="og:type" content="website" key="og:type" />

        <meta name="twitter:title" content="Frozen Shoulder Treatment Dubai - RamaCare Polyclinic" key="twitter:title" />
        <meta name="twitter:description" content="Shoulder stiffness slowing you down? RamaCare's DHA-licensed physiotherapists offer proven, non-surgical frozen shoulder treatment in Dubai." key="twitter:description" />

        {/* Schema Markup */}
        <script
          key="schema1"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalWebPage",
              "about": {
                "@type": "MedicalCondition",
                "name": "Frozen Shoulder",
                "alternateName": "Adhesive Capsulitis",
                "description": "A condition in which the connective tissue capsule surrounding the shoulder joint becomes thickened, inflamed, and tight, causing progressive pain and restricted range of motion.",
                "signOrSymptom": [
                  { "@type": "MedicalSignOrSymptom", "name": "Shoulder pain" },
                  { "@type": "MedicalSignOrSymptom", "name": "Restricted shoulder range of motion" },
                  { "@type": "MedicalSignOrSymptom", "name": "Night pain" },
                  { "@type": "MedicalSignOrSymptom", "name": "Difficulty lifting the arm" },
                  { "@type": "MedicalSignOrSymptom", "name": "Shoulder stiffness" }
                ],
                "riskFactor": [
                  { "@type": "MedicalRiskFactor", "name": "Diabetes" },
                  { "@type": "MedicalRiskFactor", "name": "Shoulder immobilization" },
                  { "@type": "MedicalRiskFactor", "name": "Thyroid disorders" },
                  { "@type": "MedicalRiskFactor", "name": "Age between 40 and 60" }
                ],
                "possibleTreatment": {
                  "@type": "MedicalTherapy",
                  "name": "Physiotherapy for Frozen Shoulder"
                }
              }
            })
          }}
        />

        <script
          key="schema2"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalTherapy",
              "name": "Frozen Shoulder Physiotherapy Treatment",
              "description": "A structured, evidence-based physiotherapy program for adhesive capsulitis combining manual therapy, joint mobilization, dry needling, electrotherapy, ultrasound therapy, and progressive exercise, provided by DHA licensed physiotherapists at RamaCare Polyclinic in Dubai.",
              "usedToTreat": {
                "@type": "MedicalCondition",
                "name": "Frozen Shoulder (Adhesive Capsulitis)"
              },
              "provider": {
                "@type": "MedicalClinic",
                "name": "RamaCare Polyclinic",
                "url": "https://ramacarepolyclinic.ae/"
              }
            })
          }}
        />

        <script
          key="schema3"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            })
          }}
        />

        <script
          key="schema4"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
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
                  "name": "Frozen Shoulder Treatment Dubai",
                  "item": "https://ramacarepolyclinic.ae/services/frozen-shoulder-treatment-dubai"
                }
              ]
            })
          }}
        />

        <script
          key="schema5"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalClinic",
              "name": "RamaCare Polyclinic",
              "url": "https://ramacarepolyclinic.ae/",
              "medicalSpecialty": "Physiotherapy",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Jumeirah 1",
                "addressRegion": "Dubai",
                "addressCountry": "AE"
              },
              "priceRange": "$$",
              "hasMap": "https://www.google.com/maps/place/RamaCare+Polyclinic"
            })
          }}
        />
      </Head>

      {/* Hero Section - Enhanced Gradient with Animated Shapes */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1F5E4B] via-[#2A7D63] to-[#1F5E4B]">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute w-96 h-96 bg-white/5 rounded-full -top-20 -left-20 blur-3xl"
            animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute w-72 h-72 bg-white/10 rounded-full bottom-20 right-20 blur-2xl"
            animate={{ y: [0, -15, 0], x: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white space-y-8"
            >
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium"
                >
                  <Activity className="w-4 h-4" />
                  <span>Advanced Physiotherapy Care</span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                >
                  Frozen Shoulder Treatment Dubai
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl"
                >
                  Restore Your Shoulder Movement Without Surgery
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="space-y-4"
              >
                <p className="text-lg text-white/80 leading-relaxed max-w-xl">
                  If you can't reach behind your back, lift your arm to brush your hair, or sleep on one side without pain, you may be dealing with frozen shoulder. This condition creeps up slowly, and by the time most patients seek help, simple movements have already become a daily struggle.
                </p>
                <p className="text-lg text-white/80 leading-relaxed max-w-xl">
                  At RamaCare Polyclinic, we see this pattern often. Someone ignores mild shoulder stiffness for weeks, hoping it will resolve on its own. Then one morning, reaching for a seatbelt or a cupboard becomes almost impossible. That delay matters, because frozen shoulder responds far better to treatment when it's caught early.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#book-now"
                  className="inline-flex items-center justify-center gap-2 bg-white text-[#1F5E4B] px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  <Calendar className="w-5 h-5" />
                  Book Consultation
                </a>
                <a
                  href="https://wa.me/971566597878"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-white" />
                  <span className="text-white/90">DHA Licensed</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-white" />
                  <span className="text-white/90">Non-Surgical</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <figure>
                  <img
                    src="/images/frozen-shoulder-treatment-dubai-physiotherapy.jpg"
                    alt="Physiotherapist assessing frozen shoulder treatment Dubai patient range of motion"
                    title="Frozen Shoulder Treatment Dubai - RamaCare Polyclinic"
                    className="w-full h-[500px] object-cover"
                  />
                  <figcaption className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg text-sm text-[#1A1A1A]">
                    A RamaCare physiotherapist evaluating shoulder mobility as part of a personalized treatment plan.
                  </figcaption>
                </figure>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-xl"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#1F5E4B]/10 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-[#1F5E4B]" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#1F5E4B]">500+</p>
                    <p className="text-sm text-gray-600">Happy Patients</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What is Frozen Shoulder Section - Asymmetric Split Layout */}
      <section className="py-20 px-4 bg-white" id="treatment-info">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-[#1F5E4B]/10 text-[#1F5E4B] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Info className="w-4 h-4" />
              Understanding
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
              What is Frozen Shoulder?
            </h2>
            <p className="text-xl text-[#5F5F5F] max-w-3xl">
              Understanding the condition that's limiting your movement
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-6 pr-0 lg:pr-8"
            >
              <div className="p-6 bg-gradient-to-br from-[#1F5E4B]/5 to-[#1F5E4B]/10 rounded-2xl border border-[#1F5E4B]/20">
                <p className="text-lg text-[#5F5F5F] leading-relaxed">
                  Frozen shoulder, medically known as adhesive capsulitis, is a condition where the connective tissue surrounding your shoulder joint — called the joint capsule — becomes thickened, inflamed, and tight. This capsule normally allows your arm to move freely in almost every direction.
                </p>
              </div>
              <p className="text-lg text-[#5F5F5F] leading-relaxed">
                When it stiffens, movement becomes restricted and painful. Scar-like bands of tissue, sometimes called adhesions, can also form inside the joint space, further limiting motion.
              </p>
              <p className="text-lg text-[#5F5F5F] leading-relaxed">
                Unlike a simple muscle strain, frozen shoulder doesn't usually improve with rest alone. It tends to follow a slow, three-stage pattern, often taking months to fully resolve without proper care. This is exactly why seeking frozen shoulder treatment Dubai early, rather than waiting it out, tends to produce better long-term results.
              </p>
              <p className="text-lg text-[#5F5F5F] leading-relaxed">
                The exact trigger isn't always clear. In many cases, it develops after a period of reduced shoulder movement, such as recovery from surgery, a fracture, or even prolonged desk work with poor posture.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 space-y-4"
            >
              {[
                {
                  icon: Shield,
                  title: "Pain & Stiffness",
                  desc: "Develops gradually, worsening over time"
                },
                {
                  icon: Target,
                  title: "Joint Capsule",
                  desc: "Becomes thickened and inflamed"
                },
                {
                  icon: Activity,
                  title: "Adhesions",
                  desc: "Scar tissue forms, limiting movement"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group p-6 bg-white rounded-2xl border border-gray-200 hover:border-[#1F5E4B]/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#1F5E4B]/20 to-[#1F5E4B]/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-7 h-7 text-[#1F5E4B]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#1A1A1A] mb-1 group-hover:text-[#1F5E4B] transition-colors">{item.title}</h3>
                      <p className="text-[#5F5F5F]">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Symptoms Section - Symptom Cards with Borders */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#1F5E4B] to-[#1F4E3B]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Symptoms of Frozen Shoulder
                </h2>
                <p className="text-xl text-white/80 max-w-2xl">
                  Frozen shoulder symptoms usually build gradually rather than appearing overnight. Common signs include:
                </p>
              </div>
              <div className="hidden md:block">
                <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center">
                  <Activity className="w-10 h-10 text-white" />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {[
              { icon: Zap, text: "Dull, aching pain deep in the shoulder, often worse at the start of movement" },
              { icon: Target, text: "Progressive stiffness that limits how far you can raise or rotate your arm" },
              { icon: Clock, text: "Night pain that disrupts sleep, especially when lying on the affected side" },
              { icon: Users, text: "Difficulty with everyday tasks like fastening a bra, reaching a back pocket, or zipping a dress" },
              { icon: Activity, text: "Trouble lifting the arm overhead, such as reaching a shelf" },
              { icon: Shield, text: "A noticeable 'catching' sensation during certain movements" },
              { icon: Target, text: "Reduced shoulder strength, secondary to guarding against pain" }
            ].map((symptom, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group flex items-start gap-4 bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors">
                  <symptom.icon className="w-5 h-5 text-white" />
                </div>
                <span className="text-white/90 leading-relaxed">{symptom.text}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12 space-y-4" >
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
              <p className="text-white/90 text-lg leading-relaxed">
                Many patients describe the sensation as their shoulder being "locked" or "stuck". Sleeping discomfort is often the symptom that finally pushes people to seek help, since chronic sleep disruption affects energy, mood, and work performance.
              </p>
            </div>
            <p className="text-white/80 text-lg leading-relaxed">
              If any of these symptoms sound familiar, it's worth booking a proper assessment rather than pushing through the discomfort. Early frozen shoulder treatment Dubai visits tend to catch the condition while it's still in the more manageable freezing stage, which can make the entire recovery process shorter and less painful.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Causes Section - Timeline Style Cards */}
      <section className="py-20 px-4 bg-[#F9F7F2]" id="how-it-works">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
              Causes of Frozen Shoulder
            </h2>
            <p className="text-xl text-[#5F5F5F] max-w-3xl mx-auto">
              Several factors can increase the likelihood of developing this condition
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Diabetes",
                desc: "People with diabetes are significantly more likely to develop frozen shoulder, possibly due to changes in collagen structure within the joint capsule.",
                color: "from-rose-100 to-rose-50"
              },
              {
                title: "Injury or Immobilization",
                desc: "A shoulder fracture, dislocation, or any injury that forces you to keep your arm still for an extended period can trigger stiffness.",
                color: "from-blue-100 to-blue-50"
              },
              {
                title: "Post-surgical Recovery",
                desc: "Shoulder, breast, or chest surgery sometimes leads to reduced arm movement, setting the stage for capsule tightening.",
                color: "from-purple-100 to-purple-50"
              },
              {
                title: "Age",
                desc: "Frozen shoulder most commonly affects people between 40 and 60 years old.",
                color: "from-amber-100 to-amber-50"
              },
              {
                title: "Poor Posture",
                desc: "Prolonged slouching or forward-head posture, common among office workers, can alter shoulder mechanics over time.",
                color: "from-teal-100 to-teal-50"
              },
              {
                title: "Rotator Cuff Problems",
                desc: "Underlying tendon irritation or partial tears sometimes coexist with, or contribute to, capsule stiffness.",
                color: "from-indigo-100 to-indigo-50"
              },
              {
                title: "Thyroid Disorders",
                desc: "Both hypothyroidism and hyperthyroidism have been linked to a higher incidence of adhesive capsulitis.",
                color: "from-emerald-100 to-emerald-50"
              }
            ].map((cause, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group bg-white p-7 rounded-2xl border border-gray-200 hover:border-[#1F5E4B]/30 hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${cause.color} rounded-xl flex items-center justify-center mb-4`}>
                  <div className="w-6 h-6 bg-white rounded-lg shadow-sm flex items-center justify-center">
                    <span className="text-[#1F5E4B] font-bold">{index + 1}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-3 group-hover:text-[#1F5E4B] transition-colors">{cause.title}</h3>
                <p className="text-[#5F5F5F] leading-relaxed">{cause.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-gradient-to-r from-[#1F5E4B] to-[#2A7D63] text-white p-8 rounded-2xl" >
            <p className="text-lg leading-relaxed">
              In many patients, more than one of these factors overlaps. A person with diabetes who also spends long hours at a desk, for example, may face a compounded risk. This is why our assessment always looks at your broader health picture rather than treating the shoulder in isolation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stages Section - Vertical Timeline */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
              Stages of Frozen Shoulder
            </h2>
            <p className="text-xl text-[#5F5F5F] max-w-3xl mx-auto">
              Frozen shoulder typically progresses through three distinct stages
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#1F5E4B]/20 via-[#1F5E4B] to-[#1F5E4B]/20 rounded-full"></div>

            {[
              {
                stage: "1",
                name: "Freezing Stage",
                desc: "Pain gradually increases; shoulder motion becomes more limited",
                duration: "6 weeks to 9 months"
              },
              {
                stage: "2",
                name: "Frozen Stage",
                desc: "Pain may ease slightly, but stiffness dominates; daily tasks become difficult",
                duration: "4 to 6 months"
              },
              {
                stage: "3",
                name: "Thawing Stage",
                desc: "Motion gradually returns; strength and flexibility slowly improve",
                duration: "6 months to 2 years"
              }
            ].map((stage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className={`relative mb-12 flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                  <div className="group bg-gradient-to-br from-[#F9F7F2] to-white p-8 rounded-2xl border border-gray-200 hover:border-[#1F5E4B]/30 hover:shadow-xl transition-all duration-300">
                    <div className="inline-flex items-center gap-2 bg-[#1F5E4B]/10 text-[#1F5E4B] px-3 py-1 rounded-full text-sm font-semibold mb-3">
                      <Clock className="w-4 h-4" />
                      {stage.duration}
                    </div>
                    <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3 group-hover:text-[#1F5E4B] transition-colors">{stage.name}</h3>
                    <p className="text-[#5F5F5F] leading-relaxed">{stage.desc}</p>
                  </div>
                </div>
                <div className="w-2/12 flex justify-center">
                  <div className="relative z-10 w-20 h-20 bg-gradient-to-br from-[#1F5E4B] to-[#2A7D63] rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {stage.stage}
                  </div>
                </div>
                <div className="w-5/12"></div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-lg text-[#5F5F5F] leading-relaxed text-center"
          >
            <p className="bg-[#F9F7F2] p-6 rounded-2xl border border-gray-200">
              This timeline can feel discouraging, but it's important to know that early, consistent physiotherapy can shorten the overall recovery period and reduce how severe the frozen stage becomes. Left untreated, some patients never fully regain their pre-injury range of motion.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who is at Risk Section - Radial Cards */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#F5F1E8] to-[#F9F7F2]" id="when-to-consider">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
              Who is at Risk?
            </h2>
            <p className="text-xl text-[#5F5F5F] max-w-3xl mx-auto">
              While frozen shoulder can affect almost anyone, certain groups face a higher likelihood
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
            {[
              { icon: Users, text: "Office workers who spend long hours at a desk with limited shoulder movement" },
              { icon: Activity, text: "Athletes recovering from overuse injuries or shoulder trauma" },
              { icon: Users, text: "Elderly individuals, due to natural changes in joint tissue elasticity" },
              { icon: Target, text: "Diabetic patients, who have a notably higher incidence rate" },
              { icon: Users, text: "Women over 40, who are statistically more likely to develop this condition than men" }
            ].map((risk, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group flex flex-col items-center text-center p-7 bg-white rounded-2xl border border-gray-200 hover:border-[#1F5E4B]/30 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#1F5E4B]/20 to-[#1F5E4B]/10 rounded-full flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <risk.icon className="w-8 h-8 text-[#1F5E4B]" />
                </div>
                <p className="text-[#1A1A1A] font-medium leading-relaxed">{risk.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-lg text-[#5F5F5F] leading-relaxed"
          >
            <p className="text-center bg-white p-8 rounded-2xl border border-gray-200">
              Interestingly, the shoulder that isn't your dominant arm is affected just as often as your dominant side, which suggests the condition is more about underlying tissue changes than overuse in the traditional sense. Knowing your personal risk profile helps our team anticipate how your recovery might progress and tailor your frozen shoulder treatment Dubai plan accordingly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Diagnosis Section - Split with Side Panel */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
              How We Diagnose Frozen Shoulder
            </h2>
            <p className="text-xl text-[#5F5F5F] max-w-3xl">
              Accurate diagnosis is the foundation of effective treatment
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-6"
            >
              <p className="text-lg text-[#5F5F5F] leading-relaxed">
                At RamaCare, our approach typically includes:
              </p>
              <div className="space-y-4">
                {[
                  { num: "01", text: "Physical examination: Our physiotherapist checks both active movement (what you can do yourself) and passive movement (what we can move for you), since frozen shoulder classically restricts both." },
                  { num: "02", text: "Medical history review: We ask about diabetes, thyroid conditions, past injuries, and recent surgeries, since these often reveal contributing factors." },
                  { num: "03", text: "Range of motion testing: Precise measurements track how much movement you've lost and help monitor your progress at each visit." },
                  { num: "04", text: "Ultrasound imaging: This can help rule out rotator cuff tears or tendon inflammation that may mimic or coexist with frozen shoulder." },
                  { num: "05", text: "MRI scanning: For complex or long-standing cases, MRI provides a more detailed view of the joint capsule and surrounding soft tissue." },
                  { num: "06", text: "X-ray, if needed: This helps rule out arthritis or bone-related causes of stiffness, particularly in older patients." }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="group flex gap-4 p-6 bg-[#F9F7F2] rounded-2xl border border-gray-200 hover:border-[#1F5E4B]/30 hover:bg-white transition-all duration-300"
                  >
                    <div className="text-2xl font-bold text-[#1F5E4B] w-10 flex-shrink-0">{item.num}</div>
                    <span className="text-[#1A1A1A] leading-relaxed">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5"
            >
              <div className="sticky top-24 bg-gradient-to-br from-[#1F5E4B] to-[#2A7D63] text-white p-8 rounded-2xl shadow-xl">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                  <Info className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Important Note</h3>
                <p className="text-lg leading-relaxed">
                  Most patients don't need every test on this list. Our physiotherapists start with a thorough physical examination and only recommend imaging when something in your history or movement pattern suggests it's necessary. This keeps your diagnostic process efficient and avoids unnecessary costs or delays before starting treatment.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Treatment Section - Tiled Cards with Icons */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#F9F7F2] to-white" id="benefits">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
              Frozen Shoulder Treatment at RamaCare
            </h2>
            <p className="text-xl text-[#5F5F5F] max-w-3xl mx-auto">
              Our treatment is built around a structured, evidence-based physiotherapy program
            </p>
          </motion.div>

          <div className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Activity,
                  title: "Physiotherapy",
                  desc: "Forms the backbone of treatment, combining hands-on techniques with guided movement to gradually restore range of motion. Explore our full <a href=\"https://ramacarepolyclinic.ae/services/physiotherapy-dubai\" className=\"text-[#1F5E4B] font-semibold hover:underline\">physiotherapy Dubai</a> services for related conditions we treat.",
                  color: "from-cyan-50 to-blue-50"
                },
                {
                  icon: Target,
                  title: "Manual Therapy",
                  desc: "Skilled hands-on techniques help loosen tight capsule tissue and improve joint gliding, particularly useful during the frozen stage.",
                  color: "from-emerald-50 to-green-50"
                },
                {
                  icon: Shield,
                  title: "Stretching Protocols",
                  desc: "Gentle, progressive stretches are introduced once pain is controlled, helping the capsule regain flexibility without triggering flare-ups.",
                  color: "from-purple-50 to-pink-50"
                }
              ].map((treatment, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  className="group bg-white p-7 rounded-2xl border border-gray-200 hover:border-[#1F5E4B]/30 hover:shadow-xl transition-all duration-300"
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${treatment.color} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <treatment.icon className="w-7 h-7 text-[#1F5E4B]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-3 group-hover:text-[#1F5E4B] transition-colors">{treatment.title}</h3>
                  <p className="text-[#5F5F5F] leading-relaxed" dangerouslySetInnerHTML={{ __html: treatment.desc }} />
                </motion.div>
              ))}
            </div>

            <figure className="my-8">
              <img
                src="/images/shoulder-manual-therapy-mobilization-dubai.jpg"
                alt="Manual therapy joint mobilization for frozen shoulder treatment Dubai"
                title="Manual Therapy for Frozen Shoulder - RamaCare"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
              <figcaption className="text-center text-[#5F5F5F] mt-3">
                Hands-on joint mobilization helps restore normal shoulder mechanics.
              </figcaption>
            </figure>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Zap,
                  title: "Joint Mobilization",
                  desc: "Controlled, graded movements applied by your physiotherapist help restore normal joint mechanics, especially effective during the thawing stage.",
                  color: "from-amber-50 to-yellow-50"
                },
                {
                  icon: Activity,
                  title: "Dry Needling",
                  desc: "For patients with muscle guarding or trigger points around the shoulder blade and upper back, dry needling can reduce muscle tension and improve movement tolerance. Learn more about <a href=\"https://ramacarepolyclinic.ae/services/physiotherapy-dubai/dry-needling-dubai\" className=\"text-[#1F5E4B] font-semibold hover:underline\">dry needling Dubai</a>.",
                  color: "from-rose-50 to-red-50"
                },
                {
                  icon: Shield,
                  title: "Electrotherapy",
                  desc: "Modalities like TENS can help manage pain signals during the freezing stage, when discomfort is often most intense. Learn more about <a href=\"https://ramacarepolyclinic.ae/services/physiotherapy-dubai/electrotherapy-dubai\" className=\"text-[#1F5E4B] font-semibold hover:underline\">electrotherapy Dubai</a>.",
                  color: "from-indigo-50 to-violet-50"
                }
              ].map((treatment, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  className="group bg-white p-7 rounded-2xl border border-gray-200 hover:border-[#1F5E4B]/30 hover:shadow-xl transition-all duration-300"
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${treatment.color} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <treatment.icon className="w-7 h-7 text-[#1F5E4B]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-3 group-hover:text-[#1F5E4B] transition-colors">{treatment.title}</h3>
                  <p className="text-[#5F5F5F] leading-relaxed" dangerouslySetInnerHTML={{ __html: treatment.desc }} />
                </motion.div>
              ))}
            </div>

            <figure className="my-8">
              <img
                src="/images/ultrasound-therapy-frozen-shoulder-dubai.jpg"
                alt="Ultrasound therapy session for frozen shoulder treatment Dubai patient"
                title="Ultrasound Therapy for Shoulder Pain - RamaCare Dubai"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
              <figcaption className="text-center text-[#5F5F5F] mt-3">
                Therapeutic ultrasound supports tissue healing around the shoulder joint.
              </figcaption>
            </figure>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Target,
                  title: "Ultrasound Therapy",
                  desc: "Therapeutic ultrasound may support tissue healing and reduce localized inflammation around the joint capsule. See our dedicated <a href=\"https://ramacarepolyclinic.ae/services/physiotherapy-dubai/ultrasound-therapy-dubai\" className=\"text-[#1F5E4B] font-semibold hover:underline\">ultrasound therapy Dubai</a> page for details.",
                  color: "from-teal-50 to-cyan-50"
                },
                {
                  icon: Activity,
                  title: "Exercise Program",
                  desc: "A structured, progressive set of exercises is introduced in phases, matched to your current stage and pain tolerance.",
                  color: "from-lime-50 to-green-50"
                },
                {
                  icon: Shield,
                  title: "Home Rehabilitation",
                  desc: "Consistency between clinic visits matters. We provide a clear home program so progress continues between sessions.",
                  color: "from-orange-50 to-amber-50"
                }
              ].map((treatment, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  className="group bg-white p-7 rounded-2xl border border-gray-200 hover:border-[#1F5E4B]/30 hover:shadow-xl transition-all duration-300"
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${treatment.color} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <treatment.icon className="w-7 h-7 text-[#1F5E4B]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-3 group-hover:text-[#1F5E4B] transition-colors">{treatment.title}</h3>
                  <p className="text-[#5F5F5F] leading-relaxed" dangerouslySetInnerHTML={{ __html: treatment.desc }} />
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-lg text-[#5F5F5F] leading-relaxed"
          >
            <p className="bg-[#1F5E4B]/5 p-6 rounded-2xl border border-[#1F5E4B]/20">
              Each of these treatments is recommended based on your specific stage, pain level, and functional goals, not applied indiscriminately. Our physiotherapists reassess regularly and adjust your plan as your shoulder responds.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section - Alternating Cards */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#1F5E4B] to-[#1F4E3B]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Benefits of Physiotherapy
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Physiotherapy remains the most well-supported first-line approach for frozen shoulder
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: CheckCircle, title: "Pain Relief", text: "Through targeted manual techniques and modalities" },
              { icon: Activity, title: "Increased Mobility", text: "Allowing a gradual return to daily activities" },
              { icon: Zap, title: "Faster Recovery", text: "Compared to a 'wait and see' approach" },
              { icon: Target, title: "Better Function", text: "For tasks like dressing, reaching, and lifting" },
              { icon: Shield, title: "Prevention", text: "Of recurrence through improved posture and shoulder mechanics" }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
                className="group flex items-center gap-6 bg-white/5 backdrop-blur-sm p-7 rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/20 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-white/20 to-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-white/80">{benefit.text}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-white/90 text-lg leading-relaxed"
          >
            <p className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10 text-center">
              While physiotherapy cannot guarantee a fixed recovery timeline, it consistently supports better outcomes than inactivity, particularly when started during the early freezing stage.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Exercises Section - Two Column with Callout */}
      <section className="py-20 px-4 bg-white" id="recovery-aftercare">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-[#1F5E4B] rounded-xl flex items-center justify-center">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A]">
                Exercises for Frozen Shoulder
              </h2>
            </div>
            <p className="text-xl text-[#5F5F5F] max-w-3xl">
              Your physiotherapist will guide you through exercises appropriate to your stage of recovery
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-5"
            >
              {[
                {
                  title: "Pendulum Exercise",
                  desc: "Lean forward slightly, letting your affected arm hang and gently swing in small circles. This encourages movement without forcing the joint.",
                  icon: Zap
                },
                {
                  title: "Wall Walk",
                  desc: "Facing a wall, 'walk' your fingers upward as far as comfortable, then slowly lower. This helps rebuild overhead reach.",
                  icon: Target
                },
                {
                  title: "Towel Stretch",
                  desc: "Hold a towel behind your back with both hands, using your unaffected arm to gently pull the affected arm upward.",
                  icon: Shield
                },
                {
                  title: "Cross Body Stretch",
                  desc: "Using your other hand, gently guide your affected arm across your chest to stretch the back of the shoulder.",
                  icon: Activity
                },
                {
                  title: "Finger Walk",
                  desc: "Facing a wall at arm's length, walk your fingers up the surface, using small, controlled movements.",
                  icon: Target
                }
              ].map((exercise, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group flex items-start gap-5 p-6 bg-[#F9F7F2] rounded-2xl border border-gray-200 hover:border-[#1F5E4B]/30 hover:bg-white transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#1F5E4B]/20 to-[#1F5E4B]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <exercise.icon className="w-6 h-6 text-[#1F5E4B]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1A1A1A] mb-2 group-hover:text-[#1F5E4B] transition-colors">{exercise.title}</h3>
                    <p className="text-[#5F5F5F] leading-relaxed">{exercise.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5"
            >
              <div className="sticky top-24 space-y-6">
                <figure>
                  <img
                    src="/images/frozen-shoulder-pendulum-exercise-dubai.jpg"
                    alt="Patient performing pendulum exercise for frozen shoulder recovery in Dubai"
                    title="Frozen Shoulder Exercises Dubai - Pendulum Exercise"
                    className="w-full h-64 object-cover rounded-2xl shadow-lg"
                  />
                  <figcaption className="text-center text-[#5F5F5F] mt-3">
                    The pendulum exercise gently encourages early shoulder movement.
                  </figcaption>
                </figure>

                <div className="bg-gradient-to-br from-[#1F5E4B] to-[#2A7D63] text-white p-6 rounded-2xl shadow-xl">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Safety Advice</h3>
                  <p className="text-base leading-relaxed">
                    Never push into sharp pain. Mild discomfort during stretching is expected, but sharp or worsening pain means you should stop and consult your physiotherapist. Consistency matters more than intensity — short, frequent sessions typically outperform occasional aggressive stretching.
                  </p>
                </div>

                <figure>
                  <img
                    src="/images/frozen-shoulder-towel-stretch-exercise.jpg"
                    alt="Towel stretch home exercise for frozen shoulder rehabilitation Dubai"
                    title="Home Exercises for Frozen Shoulder Recovery"
                    className="w-full h-64 object-cover rounded-2xl shadow-lg"
                  />
                  <figcaption className="text-center text-[#5F5F5F] mt-3">
                    Simple home stretches support progress between clinic visits.
                  </figcaption>
                </figure>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Recovery Timeline Section - Horizontal Timeline */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#F5F1E8] to-[#F9F7F2]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
              Recovery Timeline
            </h2>
            <p className="text-xl text-[#5F5F5F] max-w-3xl mx-auto">
              Every patient's recovery looks a little different
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-2 bg-gradient-to-r from-[#1F5E4B]/20 via-[#1F5E4B] to-[#1F5E4B]/20 rounded-full -translate-y-1/2"></div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {[
                {
                  time: "Weeks 1–2",
                  desc: "Focus on pain control; gentle passive movement begins"
                },
                {
                  time: "Weeks 3–6",
                  desc: "Mobility work increases; manual therapy intensifies"
                },
                {
                  time: "Weeks 7–12",
                  desc: "Active exercises progress; functional tasks become easier"
                },
                {
                  time: "Months 3–6",
                  desc: "Continued strengthening; most patients regain functional range"
                },
                {
                  time: "Beyond 6 months",
                  desc: "Ongoing maintenance for complex or long-standing cases"
                }
              ].map((timeline, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative z-10 flex flex-col items-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#1F5E4B] to-[#2A7D63] rounded-full flex items-center justify-center text-white font-bold shadow-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {index + 1}
                  </div>
                  <div className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-[#1F5E4B]/30 hover:shadow-xl transition-all duration-300 text-center">
                    <h3 className="text-lg font-bold text-[#1F5E4B] mb-3">{timeline.time}</h3>
                    <p className="text-[#5F5F5F]">{timeline.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-lg text-[#5F5F5F] leading-relaxed"
          >
            <p className="bg-white p-8 rounded-2xl border border-gray-200 text-center">
              Patients who begin treatment during the freezing stage often see steadier progress than those who wait until the shoulder is fully frozen. There are no guaranteed timelines, since recovery depends on your specific stage, underlying health conditions, and consistency with home exercises.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose RamaCare Section - Feature Grid with Accent */}
      <section className="py-20 px-4 bg-white" id="why-choose-ramacare">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
              Why Choose RamaCare Polyclinic?
            </h2>
            <p className="text-xl text-[#5F5F5F] max-w-3xl mx-auto">
              Choosing the right clinic makes a genuine difference in how effectively frozen shoulder resolves
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "DHA Licensed Physiotherapists",
                desc: "With hands-on experience treating shoulder conditions",
                accent: "from-cyan-500 to-blue-600"
              },
              {
                icon: Target,
                title: "Personalized Treatment Plans",
                desc: "Built around your stage, lifestyle, and goals",
                accent: "from-purple-500 to-pink-600"
              },
              {
                icon: Zap,
                title: "Modern Equipment",
                desc: "Including ultrasound and electrotherapy technology",
                accent: "from-amber-500 to-orange-600"
              },
              {
                icon: Users,
                title: "Patient-Centered Care",
                desc: "With clear communication at every visit",
                accent: "from-emerald-500 to-teal-600"
              },
              {
                icon: Shield,
                title: "Evidence-Based Treatment",
                desc: "Avoiding unnecessary or unproven interventions",
                accent: "from-indigo-500 to-violet-600"
              },
              {
                icon: MapPin,
                title: "Convenient Dubai Location",
                desc: "In Jumeirah 1, easy to reach from across the city",
                accent: "from-rose-500 to-red-600"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${item.accent}`}></div>
                <div className="w-14 h-14 bg-gradient-to-br from-[#1F5E4B]/20 to-[#1F5E4B]/10 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-7 h-7 text-[#1F5E4B]" />
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-3 group-hover:text-[#1F5E4B] transition-colors">{item.title}</h3>
                <p className="text-[#5F5F5F] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-lg text-[#5F5F5F] leading-relaxed"
          >
            <p className="text-center bg-[#F9F7F2] p-8 rounded-2xl border border-gray-200">
              Our physiotherapy team takes time to explain each stage of your recovery, so you understand not just what we're doing, but why. Located in Jumeirah 1, our clinic is easily accessible for patients across Dubai, whether you're coming from Downtown, Jumeirah, or Dubai Marina. Many patients tell us they chose RamaCare for frozen shoulder treatment Dubai care specifically because of how clearly our physiotherapists explain each stage of the process, rather than simply handing over a generic exercise sheet.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section - Accordion with Smooth Transitions */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#F9F7F2] to-white" id="faq">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-[#1F5E4B]/30 transition-all duration-300" >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-[#F9F7F2]/50 transition-all duration-300">
                  <span className="text-lg font-semibold text-[#1A1A1A] pr-4">{faq.question}</span>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${openFaq === index ? 'bg-[#1F5E4B] text-white rotate-180' : 'bg-[#1F5E4B]/10 text-[#1F5E4B]'}`}>
                    {openFaq === index ? (
                      <Minus className="w-5 h-5" />
                    ) : (
                      <Plus className="w-5 h-5" />
                    )}
                  </div>
                </button>
                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6">
                    <p className="text-[#5F5F5F] leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Book Consultation Section - Split with Info Cards */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#1F5E4B] to-[#1F4E3B]" id="book-now">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-white space-y-8"
            >
              <h2 className="text-3xl md:text-4xl font-bold">
                Book Your Consultation
              </h2>
              <p className="text-xl text-white/90 leading-relaxed">
                You don't have to keep adjusting your daily routine around shoulder pain. The earlier you start proper physiotherapy, the more likely you are to regain full movement without unnecessary delays.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                Our DHA licensed physiotherapists at RamaCare Polyclinic in Jumeirah 1 are ready to assess your shoulder and build a treatment plan around your specific stage and goals.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                Message us on WhatsApp or use our online booking system to schedule your frozen shoulder treatment Dubai consultation today. Relief starts with the right first step.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="https://wa.me/971566597878"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-flex items-center justify-center gap-2 bg-white text-[#1F5E4B] px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </a>
                <a
                  href="tel:+97142862006"
                  className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all"
                >
                  <Phone className="w-5 h-5" />
                  Call Us
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <figure>
                <img
                  src="/images/ramacare-physiotherapy-consultation-dubai.jpg"
                  alt="Physiotherapy consultation for shoulder pain clinic Dubai patient"
                  title="Book a Frozen Shoulder Consultation - RamaCare Polyclinic"
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                />
                <figcaption className="text-center text-white/80 mt-3">
                  A personalized consultation is the first step toward lasting shoulder recovery.
                </figcaption>
              </figure>

              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-5 bg-[#F9F7F2] rounded-2xl">
                    <div className="w-12 h-12 bg-[#1F5E4B]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-[#1F5E4B]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#1A1A1A] mb-1">Location</h3>
                      <p className="text-[#5F5F5F] leading-relaxed">
                        Jumeirah Terrace Building, Ground Floor
                        <br />
                        Jumeirah 1, Dubai, 393558
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-5 bg-[#F9F7F2] rounded-2xl">
                    <div className="w-12 h-12 bg-[#1F5E4B]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-[#1F5E4B]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#1A1A1A] mb-1">Clinic Hours</h3>
                      <p className="text-[#5F5F5F] leading-relaxed">
                        Sunday - Saturday: 10:00 AM - 10:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Medical Disclaimer */}
      <section className="py-8 px-4 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm text-gray-600">
            <strong>Medical Disclaimer:</strong> This content is for general educational purposes and does not replace professional medical advice, diagnosis, or treatment. Always consult a qualified healthcare provider regarding your specific condition. Individual results vary, and no treatment outcome is guaranteed.
          </p>
        </div>
      </section>
    </Layout>
  );
}
