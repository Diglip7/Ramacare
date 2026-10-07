import React, { useState } from 'react';
import Layout from '../../../components/Layout';
import Head from "next/head";
import Link from 'next/link';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { useToast } from '../../../components/Toast';
import { useRouter } from 'next/router';
import ContentReviewBadge from '../../../components/ContentReviewBadge';
import AyurvedaInfoSection from '../../../components/AyurvedaInfoSection';
import AgniQuiz from '../../../components/AgniQuiz';

const content = {
  hero: {
    title: "Ayurvedic Gut Health in Dubai: Your Guide to Agni and Better Digestion",
    description1: "In Ayurveda, gut health depends on Agni, your digestive fire. When Agni is balanced, you feel light and energetic after meals; when it is weak or irregular, undigested residue (Ama) builds up, felt as bloating, heaviness, irregular bowels and tiredness. Classical texts say most disease begins with weak Agni (Roga sarve api mandagnau).",
    description2: "This guide from RamaCare Polyclinic in Jumeirah 1 explains the four types of Agni, the Dubai habits that upset digestion, simple kitchen remedies and when to see a doctor. Take the Agni self-check below, or book a digestive assessment with Dr. Shamna Keloth Meethal (BAMS), from AED 200.",
    ctaButtons: {
      primary: { text: 'Book Digestive Assessment' },
      secondary: { text: 'WhatsApp Us', phone: '971566597878' }
    },
    image: '/images/gut.jpg'
  },
  summary: {
   title: 'How Can I Improve My Gut Health With Ayurveda?',
   question: 'In short:',
   answer: 'Keep your digestive fire (Agni) steady. Eat at regular times, make lunch your largest meal, sip warm water or ginger water before meals instead of iced drinks, avoid incompatible combinations such as fruit with dairy or fish with milk, and keep dinner light and early. In Dubai, balance long hours in air-conditioning with warm, lightly spiced, freshly cooked food.'
  },
  dubaiGut: {
    title: 'Why Digestion Struggles in Dubai',
    items: [
      {
        title: 'The "Ice Water" Habit',
        description: 'Ice-cold drinks with meals during a 45°C summer are, in Ayurvedic terms, like water on a campfire: they dampen Agni and can leave you bloated and heavy.',
        icon: 'Droplets'
      },
      {
        title: 'Social Late-Night Dining',
        description: 'Eating a heavy dinner at 9:00 PM in Downtown or Marina means your body is trying to digest while you sleep. This creates Ama, the heavy, sticky residue that causes morning fatigue and "brain fog."',
        icon: 'Moon'
      },
      {
        title: 'High-Stress Rushing',
        description: 'Eating while standing, driving, or answering emails in DIFC keeps the body in "fight or flight" mode, which shuts down the digestive system (The Enteric Nervous System).',
        icon: 'Activity'
      },
      { 
        title: 'Long Hours in Air-Conditioning', 
        description: 'Cold, dry air all day aggravates Vata in Ayurveda, which shows up as gas, dryness and irregular digestion.', 
        icon: 'Wind' 
      }
    ]
  },
  agniTypes: {
    title: '2. The 4 Types of Agni: Which One is Yours?',
    items: [
      {
        name: 'Vishamagni',
        subtitle: '(Irregular – linked to Vata)',
        description: 'Inconsistent hunger and digestion. One day you can eat anything; the next, everything feels heavy.',
        icon: 'Wind',
        color: 'bg-blue-50',
        iconColor: 'text-blue-600'
      },
      {
        name: 'Tikshnagni',
        subtitle: '(Sharp – linked to Pitta)',
        description: 'Intense hunger that turns into irritability. You can digest large meals but feel acidic or burnt.',
        icon: 'Flame',
        color: 'bg-red-50',
        iconColor: 'text-red-600'
      },
      {
        name: 'Mandagni',
        subtitle: '(Slow – linked to Kapha)',
        description: 'Low appetite, slow metabolism. You feel full quickly and bloated for hours after eating.',
        icon: 'Droplets',
        color: 'bg-[#F0F7F4]',
        iconColor: 'text-teal-600'
      },
      {
        name: 'Samagni',
        subtitle: '(Balanced – the goal)',
        description: 'Regular hunger, smooth digestion, energized after meals. The ideal state of metabolic fire.',
        icon: 'Sparkles',
        color: 'bg-green-50',
        iconColor: 'text-green-600'
      }
    ]
  },
  kitchenPharmacy: {
    title: 'Ayurvedic Kitchen Remedies for Digestion',
    caution: 'Herbal formulas (Deepana-Pachana herbs such as Trikatu or Hingvastak) should only be taken as prescribed by a doctor.',
    items: [
      {
        name: 'CCF Tea',
        badge: 'Traditionally eases bloating',
        description: 'Cumin, coriander and fennel tea, sipped warm through the day; a classic Ayurvedic drink for gas and heaviness.',
        image: '/images/gut1.jpg',
        alt: 'CCF tea (cumin, coriander, fennel) for Ayurvedic gut health in Dubai'
      },
      {
        name: 'Ginger',
        badge: 'Kindles Agni',
        description: 'A thin slice of fresh ginger with a pinch of rock salt, or warm ginger water, before meals is traditionally used to wake up appetite.',
        image: '/images/gut2.jpg',
        alt: 'Fresh ginger used to ignite Agni in Ayurvedic gut health treatment'
      },
      {
        name: 'Ghee',
        badge: 'Traditionally nourishing',
        description: 'A small spoon of ghee with meals is valued in Ayurveda for digestion, especially for Vata and Pitta; the right amount depends on your health.',
        image: '/images/gut3.jpg',
        alt: 'Ghee for digestion in Ayurvedic gut health'
      },
      {
        name: 'Buttermilk (Takra)',
        badge: 'Light and cooling',
        description: 'Thin spiced buttermilk with cumin and coriander after lunch is the classical Ayurvedic drink for digestion, especially in summer.',
        image: '/images/gut4.jpg',
        alt: 'Spiced buttermilk Takra for Ayurvedic digestion'
      }
    ]
  },
  paa: {
    title: 'Gut Health and Agni: Frequently Asked Questions',
    items: [
      { question: 'What is Agni in Ayurveda?', answer: 'Agni is your digestive fire: the force that digests food and turns it into energy and tissue. Ayurveda describes four states: irregular (Vishama), sharp (Tikshna), slow (Manda) and balanced (Sama).' },
      { question: 'How do I know if my Agni is weak?', answer: 'Common signs are heaviness or bloating after meals, a white coating on the tongue in the morning, low appetite, irregular bowels and tiredness after eating. Try the Agni self-check on this page.' },
      { question: 'What is Ama?', answer: 'In Ayurveda, Ama is undigested residue that forms when Agni is weak. It is associated with a coated tongue, heaviness, sluggishness and poor appetite.' },
      { question: 'How can I improve my gut health naturally with Ayurveda?', answer: 'Eat at regular times, make lunch your main meal, sip warm water instead of iced drinks, avoid incompatible food combinations, keep dinner light and early, and manage stress.' },
      { question: 'What is CCF tea and how do I make it?', answer: 'CCF tea is cumin, coriander and fennel seeds (about half a teaspoon each) simmered in water for 5–10 minutes. It is sipped warm through the day and is traditionally used for gas and bloating.' },
      { question: 'Which foods should I avoid for better digestion in Dubai?', answer: 'Iced drinks with meals, heavy late-night dinners, incompatible combinations (fruit with dairy, fish with milk), and lots of raw food in air-conditioned environments.' },
      { question: 'Does air-conditioning affect digestion?', answer: 'In Ayurveda, long hours in cold, dry air aggravate Vata, which can show up as gas, bloating and irregular digestion. Warm, cooked food and warm drinks help balance it.' },
      { question: 'Can Ayurveda help with IBS or acid reflux?', answer: 'Ayurvedic care can support digestion alongside medical care. For treatment of acidity, IBS, bloating and constipation, see our Ayurvedic digestive treatment page; warning signs should be checked by a doctor first.' },
      { question: 'When should I see a doctor about my digestion?', answer: 'See a doctor first if you have weight loss, blood in the stool or black stools, vomiting blood, difficulty swallowing, severe or night-time pain, or a new change in bowel habit lasting weeks. Our GP is in the same building.' },
      { question: 'Can I get gut tests at RamaCare?', answer: 'If needed, our GP can arrange medical tests such as blood tests, stool tests and H. pylori testing. RamaCare does not offer gut microbiome or food-intolerance tests.' },
      { question: 'What happens at a digestive assessment?', answer: 'Dr. Shamna (BAMS) reviews your digestion, diet, routine and stress, reads your pulse, examines your tongue, identifies your Agni type and gives you a personal plan. It takes 45–60 minutes and starts from AED 200.' },
      { question: 'How long before I notice a difference?', answer: 'Many people notice changes in bloating and energy within a few weeks of regular meal timing and simple diet changes. Experiences vary, and longer-standing problems take longer.' }
    ]
  },
  clinicalCare: {
    title: 'Your Digestive Assessment at RamaCare',
    steps: [
      { id: 'Step 1', title: 'Agni Assessment', description: 'Dr. Shamna (BAMS) reviews your digestion, diet, routine and stress and reads your pulse to identify your Agni type.', icon: 'Activity' },
      { id: 'Step 2', title: 'Tongue Examination', description: 'Your tongue\'s coating and colour help the doctor judge your digestion and signs of Ama.', icon: 'Eye' },
      { id: 'Step 3', title: 'Your Personal Plan', description: 'Meal timing, foods and spices for your Agni type and Dubai routine, with herbal medicines or therapies if needed.', icon: 'Utensils' },
      { id: 'Step 4', title: 'Medical Checks if Needed', description: 'If anything needs a medical check, our GP in the same building can examine you and arrange tests.', icon: 'Stethoscope' }
    ]
  },
      whenToSeeDoctor: {
      id: 'when-to-see-a-doctor',
      heading: 'When to See a Doctor About Your Digestion',
      intro: 'Ayurvedic self-care is for everyday digestion. See a doctor first if you have:',
      items: [
        { text: 'unexplained weight loss or loss of appetite' },
        { text: 'blood in the stool, black stools, or vomiting blood' },
        { text: 'difficulty or pain when swallowing' },
        { text: 'severe, constant or night-time abdominal pain' },
        { text: 'a new change in bowel habit lasting several weeks' }
      ],
      note: 'At RamaCare, our general physician is in the same building and can arrange blood tests, stool tests and H. pylori testing if needed (/services/general-physician-dubai/). We do not offer gut microbiome or food-intolerance testing.'
    },
    yourVisit: {
      id: 'your-visit',
      heading: 'Your Ayurvedic Digestive Assessment in Jumeirah 1',
      table: [
        ['Doctor', 'Dr. Shamna Keloth Meethal, BAMS, DHA-licensed Ayurvedic doctor (11+ years)'],
        ['Therapies, if needed', 'Given by Kerala-trained therapists of your own gender, always'],
        ['Consultation', 'From AED 200, 45–60 minutes'],
        ['Address', '12 Al Dhiyafah Road, Jumeirah Terrace Building, Ground Floor, Jumeirah 1, Dubai'],
        ['Nearby', 'A few minutes from Satwa and Al Wasl; about 10 minutes from Jumeirah 2, City Walk and La Mer'],
        ['Hours', 'Every day, 10am–10pm']
      ]
    },
    relatedGuides: {
      id: 'related-guides',
      heading: 'Related Ayurvedic Guides and Treatments',
      items: [
        { text: 'Ayurvedic treatment for acidity, IBS and digestive problems', href: '/services/gastrointestinal-diseases-treatment-dubai/' },
        { text: 'Ayurvedic diet plan in Dubai', href: '/services/ayurvedic-diet-plan-dubai/' },
        { text: 'Take the dosha test (Prakriti and dosha assessment)', href: '/services/prakriti-dosha-assessment-dubai/' },
        { text: 'Ayurvedic summer diet for Dubai', href: '/services/ayurvedic-diet-dubai-summer/' },
        { text: 'Ayurvedic detox diet', href: '/services/ayurvedic-detox-diet-plan-dubai/' },
        { text: 'Basti therapy (for Vata digestion)', href: '/services/basti-therapy-dubai/' }
      ]
    },

      authorityFooter: {
        title: 'Ready to Look After Your Digestion?',
        description: 'Book a digestive assessment with Dr. Shamna in Jumeirah 1, from AED 200, or explore our Ayurvedic diet plan and Ayurvedic digestive treatment.',
        cta: 'Book Your Digestive Assessment'
      }
    };

    export default function AyurvedicGutHealthDubaiPage() {
  const { showToast, ToastComponent } = useToast();
  const [activeAccordion, setActiveAccordion] = useState(1);
  const router = useRouter();

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hello RamaCare, I'm interested in the Ayurvedic Gut Health service. Please help me book an assessment.");
    window.open(`https://wa.me/${content.hero.ctaButtons.secondary.phone}?text=${message}`, '_blank');
  };

  const handleBookAppointment = () => {
    router.push('/book-appointment');
  };

  const faqsForSchema = content.paa.items.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }));

 const schemaData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "MedicalWebPage",
          "@id": "https://ramacarepolyclinic.ae/services/ayurvedic-gut-health-dubai/#webpage",
          "url": "https://ramacarepolyclinic.ae/services/ayurvedic-gut-health-dubai/",
          "name": "Ayurvedic Gut Health Dubai, Jumeirah 1 | Agni & Digestion",
          "description": "An Ayurvedic guide to gut health and Agni (digestive fire) by RamaCare Polyclinic, Jumeirah 1, Dubai: the four types of Agni, Dubai habits that upset digestion, kitchen remedies, an Agni self-check and when to see a doctor.",
          "inLanguage": "en-AE",
          "about": [
            { "@type": "Thing", "name": "Agni (digestive fire) in Ayurveda" },
            { "@type": "Thing", "name": "Gut health" }
          ],
          "isPartOf": { "@id": "https://ramacarepolyclinic.ae/services/ayurveda-dubai/#webpage" },
          "reviewedBy": { "@id": "https://ramacarepolyclinic.ae/doctors/dr-shamna-keloth-meethal-ayurveda-doctor-dubai/#physician" },
          "lastReviewed": "2026-01-12",
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ramacarepolyclinic.ae/" },
              { "@type": "ListItem", "position": 2, "name": "Ayurveda", "item": "https://ramacarepolyclinic.ae/services/ayurveda-dubai/" },
              { "@type": "ListItem", "position": 3, "name": "Ayurvedic Gut Health", "item": "https://ramacarepolyclinic.ae/services/ayurvedic-gut-health-dubai/" }
            ]
          }
        },
        {
          "@type": "Physician",
          "@id": "https://ramacarepolyclinic.ae/doctors/dr-shamna-keloth-meethal-ayurveda-doctor-dubai/#physician",
          "name": "Dr. Shamna Keloth Meethal",
          "gender": "Female",
          "url": "https://ramacarepolyclinic.ae/doctors/dr-shamna-keloth-meethal-ayurveda-doctor-dubai/",
          "medicalSpecialty": "https://schema.org/Ayurvedic",
          "knowsLanguage": ["en", "ml", "hi"],
          "worksFor": { "@id": "https://ramacarepolyclinic.ae/#clinic" }
        },
        {
          "@type": "FAQPage",
          "mainEntity": faqsForSchema
        }
      ]
    };

  return (
    <Layout>
      {ToastComponent}
      <Head>
        <title key="title">Ayurvedic Gut Health Dubai, Jumeirah 1 | Agni & Digestion</title>
        <meta name="description" content="Ayurvedic gut health guide from RamaCare, Jumeirah 1: the 4 types of Agni, Dubai habits that upset digestion, kitchen remedies and a free Agni self-check." key="description" />
        <meta name="robots" content="index, follow" key="robots" />
        <link rel="canonical" href="https://ramacarepolyclinic.ae/services/ayurvedic-gut-health-dubai/" key="canonical" />

        {/* Open Graph Tags */}
        <meta property="og:type" content="website" key="og:type" />
        <meta property="og:title" content="Ayurvedic Gut Health Dubai, Jumeirah 1 | Agni & Digestion" key="og:title" />
        <meta property="og:description" content="Ayurvedic gut health guide from RamaCare, Jumeirah 1: the 4 types of Agni, Dubai habits that upset digestion, kitchen remedies and a free Agni self-check." key="og:description" />
        <meta property="og:url" content="https://ramacarepolyclinic.ae/services/ayurvedic-gut-health-dubai/" key="og:url" />
        <meta property="og:image" content="https://ramacarepolyclinic.ae/images/ayurvedic-gut-health-dubai-og.jpg" key="og:image" />
        <meta property="og:image:width" content="1200" key="og:image:width" />
        <meta property="og:image:height" content="630" key="og:image:height" />
        <meta property="og:image:alt" content="Ayurvedic gut health and Agni guide by RamaCare Polyclinic, Jumeirah 1, Dubai" key="og:image:alt" />
        <meta property="og:site_name" content="RamaCare Polyclinic" key="og:site_name" />
        <meta property="og:locale" content="en_AE" key="og:locale" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content="Ayurvedic Gut Health Dubai, Jumeirah 1 | Agni & Digestion" key="twitter:title" />
        <meta name="twitter:description" content="Ayurvedic gut health guide from RamaCare, Jumeirah 1: the 4 types of Agni, Dubai habits that upset digestion, kitchen remedies and a free Agni self-check." key="twitter:description" />
        <meta name="twitter:image" content="https://ramacarepolyclinic.ae/images/ayurvedic-gut-health-dubai-og.jpg" key="twitter:image" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData)
          }}
        />
      </Head>

      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#F5F1EA] to-white px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          {/* Breadcrumbs */}
          <nav className="flex flex-wrap items-center gap-y-1.5 text-xs font-semibold text-[#5F5F5F] mb-6 lowercase tracking-wider">
            <a href="/" className="hover:text-[#2D5A41] transition-colors">Home</a>
            <span className="mx-2">/</span>
            <a href="/services/ayurveda-dubai/" className="hover:text-[#2D5A41] transition-colors">Ayurveda</a>
            <span className="mx-2">/</span>
            <span className="text-gray-400">Ayurvedic gut health</span>
          </nav>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl font-bold tracking-tight text-[#1A1A1A] sm:text-5xl lg:text-6xl mb-6 leading-tight">
                {content.hero.title}
              </h1>
              <p className="text-lg text-[#5F5F5F] leading-relaxed mb-6">
                {content.hero.description1}
              </p>
              <p className="text-lg text-[#5F5F5F] leading-relaxed mb-6">
                {content.hero.description2}
              </p>
              <p className="text-sm text-[#5F5F5F] leading-relaxed mb-4">
                For Ayurvedic treatment of acidity, IBS and constipation, see <Link href="/services/gastrointestinal-diseases-treatment-dubai/" className="text-[#2D5A41] underline font-semibold hover:text-[#234733]">Ayurvedic digestive treatment in Dubai</Link>.
              </p>
              <p className="text-sm text-[#5F5F5F] leading-relaxed mb-8">
                Part of our <Link href="/services/ayurvedic-diet-plan-dubai/" className="text-[#2D5A41] underline font-semibold hover:text-[#234733]">Ayurvedic diet plan in Dubai</Link> guides: see foods for your dosha and diet plans for other health goals.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={handleBookAppointment}
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#2D5A41] hover:bg-[#234733] transition-colors shadow-sm"
                >
                  <LucideIcons.Calendar className="w-5 h-5 mr-2" />
                  {content.hero.ctaButtons.primary.text}
                </button>
                <button
                  onClick={handleWhatsAppClick}
                  className="inline-flex items-center justify-center px-6 py-3 border border-[#2D5A41] text-base font-medium rounded-md text-[#2D5A41] bg-white hover:bg-gray-50 transition-colors shadow-sm"
                >
                  <LucideIcons.MessageCircle className="w-5 h-5 mr-2" />
                  {content.hero.ctaButtons.secondary.text}
                </button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={content.hero.image}
                alt="Ayurvedic herbs and spices for gut health"
                className="w-full h-[500px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Summary Section */}
      <section className="bg-[#E9E2D6] py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-6">
            {content.summary.title}
          </h2>
          <p className="text-lg text-[#5F5F5F] leading-relaxed">
            <span className="font-bold text-[#1A1A1A]">{content.summary.question}</span> {content.summary.answer}
          </p>
        </div>
      </section>

      {/* 3. Dubai Gut Syndrome Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] text-center mb-12">
            {content.dubaiGut.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {content.dubaiGut.items.map((item, index) => {
              const IconComponent = LucideIcons[item.icon];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-[#F0F7F4] rounded-xl flex items-center justify-center mb-6">
                    <IconComponent className="w-6 h-6 text-[#2D5A41]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. 4 Types of Agni Section */}
      
      <section className="bg-[#F5F1EA] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] text-center mb-12">
            {content.agniTypes.title}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {content.agniTypes.items.map((item, index) => {
              const IconComponent = LucideIcons[item.icon];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`${item.color} p-8 rounded-2xl text-center flex flex-col items-center border border-transparent hover:border-gray-200 transition-all`}
                >
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm">
                    <IconComponent className={`w-6 h-6 ${item.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-1">{item.name}</h3>
                  <p className="text-sm font-medium text-gray-500 mb-4">{item.subtitle}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      <AgniQuiz />

      {/* 5. Kitchen Pharmacy Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] text-center mb-16">
            {content.kitchenPharmacy.title}
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {content.kitchenPharmacy.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-[#E9E2D6]"
              >
                <div className="h-48 overflow-hidden">
                  <img src={item.image} alt={item.alt || item.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-[#1A1A1A]">{item.name}</h3>
                    <span className="text-xs font-bold px-3 py-1 bg-[#1F5E4B] text-white rounded-full">
                      {item.badge}
                    </span>
                  </div>
                  <p className="text-[#5F5F5F] text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          {content.kitchenPharmacy.caution && (
            <p className="text-center text-sm text-[#5F5F5F] mt-8 max-w-2xl mx-auto">
              {content.kitchenPharmacy.caution}
            </p>
          )}
        </div>
      </section>

      {/* 6. PAA Section */}
      <section className="bg-[#F5F1EA] py-20 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] text-center mb-12">
            {content.paa.title}
          </h2>
          
          <div className="space-y-4 mt-12">
            {content.paa.items.map((item, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
                <button
                  onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors">
                  <span className="font-bold text-[#1A1A1A]">{item.question}</span>
                  <LucideIcons.ChevronDown 
                    className={`w-5 h-5 text-gray-400 transition-transform ${activeAccordion === index ? 'rotate-180' : ''}`} 
                  />
                </button>
                {activeAccordion === index && (
                  <div className="px-6 pb-5">
                    <p className="text-gray-600 leading-relaxed text-sm">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Floating Action Button */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="hidden lg:block fixed top-1/2 right-8 -translate-y-1/2 z-40"
          >
            <a href="#agni-quiz"
              className="bg-[#2D5A41] text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all font-bold text-sm">
              Take the Agni Self-Check
            </a>
          </motion.div>
        </div>
      </section>

      {/* 7. Clinical Digestive Care Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] text-center mb-16">
            {content.clinicalCare.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-12 mt-12">
            {content.clinicalCare.steps.map((step, index) => {
              const IconComponent = LucideIcons[step.icon];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative bg-white p-8 rounded-2xl border-2 border-[#1A5F3F] shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="absolute -top-4 left-6 bg-[#1A5F3F] text-white px-4 py-1 rounded-full text-xs font-bold">
                    {step.id}
                  </div>
                  <div className="w-12 h-12 bg-[#F0F7F4] rounded-full flex items-center justify-center mb-6 mt-2">
                    <IconComponent className="w-6 h-6 text-[#1A5F3F]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
<AyurvedaInfoSection content={content.whenToSeeDoctor} />
<AyurvedaInfoSection content={content.yourVisit} />
<AyurvedaInfoSection content={content.relatedGuides} />

      {/* 8. Authority Footer Section */}
      <section className="bg-[#1A5F3F] py-20 px-6 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {content.authorityFooter.title}
          </h2>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-10 max-w-3xl mx-auto">
            {content.authorityFooter.description}
          </p>
          <button
            onClick={handleBookAppointment}
            className="bg-white text-[#1A5F3F] px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all shadow-xl transform hover:scale-105 flex items-center justify-center mx-auto"
          >
            <LucideIcons.Calendar className="w-6 h-6 mr-3" />
            {content.authorityFooter.cta}
          </button>
        </div>
      </section>

      {/* Reviewer Section */}
      <ContentReviewBadge doctorName="Dr. Shamna Keloth Meethal" pageSlug="ayurvedic-gut-health-dubai" lastReviewed="2026-01-12" />


      {/* Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#E9E2D6] shadow-lg z-40 p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="hidden md:block">
            <p className="text-sm font-bold text-[#1A1A1A]">Ready to restore your Agni?</p>
            <p className="text-xs text-[#5F5F5F]">Book your digestive assessment today</p>
          </div>
          <button
            onClick={handleBookAppointment}
            className="flex items-center gap-2 bg-[#1F5E4B] text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all font-bold whitespace-nowrap"
          >
            <LucideIcons.Calendar className="w-5 h-5" />
            Book Assessment
          </button>
        </div>
      </div>


      {/* WhatsApp Floating Button */}
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg hover:shadow-xl transition-shadow"
      >
        <LucideIcons.MessageCircle className="w-8 h-8 text-white" />
      </button>

    </Layout>
  );
}
