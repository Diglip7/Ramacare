import React, { useState } from 'react';
import Layout from '../../../components/Layout';
import Head from "next/head";
import Image from 'next/image';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { useToast } from '../../../components/Toast';
import ContentReviewBadge from '../../../components/ContentReviewBadge';
import AyurvedaInfoSection from '../../../components/AyurvedaInfoSection'; 

const content = {
  hero: {
    title: 'Ayurvedic Diet Plan for Busy Professionals in Dubai: Office Meals, Energy and Sleep',
    description: 'Long hours, back-to-back meetings, air-conditioning and late dinners often show up as the 3pm slump, bloating at the desk and poor sleep. In Ayurveda these are signs of disturbed Vata and Pitta. This practical guide from RamaCare Polyclinic in Jumeirah 1 shows how to eat well around a busy Dubai workday, and you can see Dr. Shamna Keloth Meethal (BAMS) after work, up to 10pm.',
    ctaButtons: {
      primary: { text: 'Book Executive Wellness Assessment' },
      secondary: { text: 'WhatsApp Consultation', phone: '971566597878' }
    },
    imageCard: {
      title: 'Ayurveda for office life',
      subtitle: 'Warm lunches • steady energy • better sleep'
    }
  },
  summary: {
    title: 'How Can Busy Professionals Eat Well With Ayurveda?',
    description: 'Keep it simple and consistent. Make lunch your main meal, with protein, vegetables and whole grains, because Ayurveda considers digestion strongest at midday; it also avoids a heavy, carb-rich lunch that often brings on the 3pm slump. Pack a warm lunchbox instead of cold sandwiches, keep nuts or fruit for snacks, cap coffee at one or two cups before 2pm, sip water or CCF tea in the air-conditioning, and finish a light dinner two to three hours before bed.',
    items: [
      {
        title: 'Smart Lunch Timing',
        icon: 'Coffee'
      },
      {
        title: 'Herbal Adaptations',
        icon: 'Leaf'
      },
      {
        title: 'Evening Reset',
        icon: 'Clock'
      }
    ],
    cta: 'Learn More About Our Approach'
  },
  syndrome: {
    title: 'Office Life in Ayurvedic Terms: Vata and Pitta',
    items: [
      {
        title: 'Vata (the overworked mind)', 
        description: 'Multitasking, screens, travel and air-conditioning are linked in Ayurveda to Vata, felt as restlessness, dry eyes, irregular appetite and light sleep.',
        icon: 'Brain',
        bgColor: 'bg-[#E9F2FF]'
      },
      {
       title: 'Pitta (the pressure cooker)', 
       description: 'Tight deadlines, skipped meals and lots of coffee are linked to Pitta, felt as acidity, irritability and feeling overheated.',
        icon: 'Coffee',
        bgColor: 'bg-[#FFF5E9]'
      }
    ]
  },
  protocol: {
    title: 'Three Simple Habits for the Workday',
    items: [
      {
        letter: 'A',
        title: 'Make Lunch the Main Meal', 
        description: 'Whether it is a business lunch or your desk, choose warm, cooked food: grilled fish or chicken, dal or lentil soup, roasted vegetables, and a moderate portion of rice, quinoa or roti. Ayurveda favours cooked over raw food, especially for Vata types, and a balanced lunch helps avoid the afternoon slump.', 
        favor: 'Favour: grilled protein, dal, cooked vegetables, a small portion of whole grains.'
      },
      {
        letter: 'B',
        title: 'Smarter Caffeine', 
        description: 'Keep coffee to one or two cups before 2pm, then switch to tulsi (holy basil) tea, ginger tea or cumin-coriander-fennel (CCF) water from a flask at your desk.', 
        favor: 'Herbal powders or tonics such as Ashwagandha should only be taken if Dr. Shamna prescribes them.'
      },
      {
        letter: 'C',
        title: 'Screen Breaks for Eyes and Neck', 
        description: 'Follow the 20-20-20 rule (every 20 minutes, look 20 feet away for 20 seconds), blink often in air-conditioning, and stand up every hour. For tired eyes, Netra Tarpana (a traditional Ayurvedic eye therapy) is available at RamaCare after a consultation; for neck and shoulder pain, see our <a href="/services/office-neck-treatment-dubai/" class="text-[#1F5E4B] underline font-bold hover:text-[#164435]">physiotherapy team</a>.', 
        favor: 'Do not put home remedies such as rose water into your eyes; ask a doctor first.'
      }
    ]
  },
  // In the content object:
sampleDay: {
  id: 'office-day',
  heading: 'Sample Ayurvedic Workday',
  intro: 'An example only. Your plan depends on your dosha and routine.',
  table: [
    ['7:00am', 'Warm water; a calm breakfast such as oats with nuts, or eggs with toast'],
    ['10:30am', 'CCF tea or herbal tea; a fruit if hungry'],
    ['1:00pm (main meal)', 'Warm lunchbox: dal, vegetables and brown rice or roti, or grilled chicken with quinoa'],
    ['After lunch', 'A 10-minute walk, even inside the office building'],
    ['4:00pm', 'Nuts, roasted chickpeas or buttermilk instead of sweets'],
    ['7:30pm', 'Light dinner: soup or a small plate of cooked vegetables with protein'],
    ['10:30pm', 'Screens off, lights low, sleep']
  ]
},
eatingOut: {
  id: 'business-lunches',
  heading: 'Business Lunches and Eating Out Near DIFC and Business Bay',
  items: [
    { text: 'Choose grilled fish or chicken, lentil soup, dal or roasted vegetables; ask for sauces on the side.' },
    { text: 'Keep bread, rice and desserts to small portions, especially at lunch meetings with an afternoon ahead.' },
    { text: 'Order water or unsweetened iced tea instead of juices or soft drinks.' },
    { text: 'At brunches and late dinners, eat slowly and stop before you feel full.' }
  ]
},
yourVisit: {
  id: 'your-visit',
  heading: 'Your Consultation in Jumeirah 1',
  table: [
    ['Doctor', 'Dr. Shamna Keloth Meethal, BAMS, DHA-licensed Ayurvedic doctor (11+ years)'],
    ['When', 'Every day, 10am–10pm, including after-work evenings'],
    ['Consultation', 'From AED 200, 45–60 minutes'],
    ['Also in the building', 'Physiotherapy for neck and back strain, and a GP'],
    ['Address', '12 Al Dhiyafah Road, Jumeirah Terrace Building, Ground Floor, Jumeirah 1, Dubai'],
    ['From the office', 'About 10–15 minutes from DIFC, Downtown and Business Bay; a few minutes from Satwa, Al Wasl and City Walk']
  ]
},

  herbs: {
    title: 'Ayurvedic Herbs Traditionally Used for Stress and Sleep',
    items: [
      {
        title: 'Brahmi', 
        description: 'Traditionally used in Ayurveda for the mind and to support calm focus.',
        icon: 'Leaf'
      },
      {
        title: 'Shankhapushpi', 
        description: 'Traditionally used in Ayurveda for mental fatigue and restlessness.',
        icon: 'Leaf'
      },
      {
        title: 'Jatamansi', 
        description: 'Traditionally used in Ayurveda when it is hard to switch off and sleep.',
        icon: 'Leaf'
      }
    ],
    footer: 'A professional in a Dubai office holding a cup of herbal tea with a bowl of almonds and walnuts on the desk'
  },
  faq: {
   title: 'Busy Professionals: Frequently Asked Questions',
    items: [
      { question: 'What is a healthy Ayurvedic lunch for the office?', answer: 'A warm, cooked meal with protein, vegetables and a moderate portion of whole grains, such as dal, a vegetable sabzi and brown rice or roti, or grilled fish with roasted vegetables and quinoa. Pack it in an insulated lunchbox.' },
      { question: 'Why do I feel sleepy at 3pm?', answer: 'A large, carb-heavy lunch often brings an afternoon dip in energy, made worse by poor sleep and dehydration. A balanced lunch with protein and vegetables, water, and a short walk afterwards usually help.' },
      { question: 'How can I meal prep for a busy week?', answer: 'Cook a pot of dal or lentil soup and a grain such as brown rice or millet on Sunday, roast a tray of vegetables, and prepare a protein for two or three days. Reheat and pack warm each morning.' },
      { question: 'How many coffees are too many?', answer: 'For most people, one or two cups before early afternoon is a sensible limit. Late coffee can affect sleep. Ayurveda advises against coffee on an empty stomach, especially for Pitta and Vata types.' },
      { question: 'What snacks are best at the desk?', answer: 'Nuts, seeds, fruit, roasted chickpeas or buttermilk. Avoid sweets and biscuits from the office pantry, which bring a quick energy crash.' },
      { question: 'I travel often for work. Can I still follow an Ayurvedic diet?', answer: 'Yes. Choose warm soups, stews or rice and dal over cold sandwiches, drink room-temperature water on flights, and keep regular meal times as much as you can.' },
      { question: 'How do I manage late-night work dinners?', answer: 'Make lunch your largest meal, have a small snack in the late afternoon, and at dinner choose lighter dishes and smaller portions. A warm ginger or fennel tea afterwards is a traditional Ayurvedic habit.' },
      { question: 'Which Ayurvedic herbs help with work stress and sleep?', answer: 'Brahmi, Shankhapushpi, Jatamansi and Ashwagandha are traditionally used, but only take them if Dr. Shamna prescribes them, especially if you take other medicines.' },
      { question: 'What is Netra Tarpana?', answer: 'A traditional Ayurvedic eye therapy in which warm medicated ghee is held over the eyes inside a ring of dough. At RamaCare it is given after a consultation with Dr. Shamna.' },
      { question: 'Can I book an appointment after work?', answer: 'Yes. RamaCare is open every day from 10am to 10pm, and consultations with Dr. Shamna can be booked in the evening.' },
      { question: 'Do you offer corporate wellness consultations?', answer: 'Yes. RamaCare offers group assessments and diet and lifestyle guidance for teams. Contact us to plan a session for your company.' },
      { question: 'How far is RamaCare from DIFC, Downtown and Business Bay?', answer: 'RamaCare Polyclinic is at 12 Al Dhiyafah Road, Jumeirah 1, about 10–15 minutes by car from DIFC, Downtown Dubai and Business Bay, and a few minutes from Satwa, Al Wasl and City Walk.' },
      { question: 'How much does a consultation cost?', answer: 'A consultation with Dr. Shamna starts from AED 200 and takes 45–60 minutes.' }
    ]
  },
  whyChoice: {
  title: 'Why Busy Professionals Choose RamaCare',
  subtitle: 'Care that fits a working day.',
  items: [
    { title: 'After-Work Appointments', 
      description: 'Open every day until 10pm, so you can see Dr. Shamna after the office.', 
      icon: 'Clock' 
    },
    { title: 'Doctor-Led Ayurveda', description: 'Dr. Shamna Keloth Meethal (BAMS, 11+ years) gives a clear, practical plan you can start the next day.', icon: 'UserCheck' },
    { title: 'Close to DIFC and Downtown', description: 'Jumeirah 1, about 10–15 minutes from DIFC, Downtown and Business Bay, with physiotherapy and a GP in the same building.', icon: 'MapPin' }
  ]
  },

  authorityFooter: {
    title: 'Make Your Workday Easier on Your Body',
    description: 'Book a consultation with Dr. Shamna in Jumeirah 1, from AED 200, including after-work slots. For a full plan, see our Ayurvedic diet plan in Dubai.',
    cta: 'Book an After-Work Consultation',
    buttonText: 'Book an After-Work Consultation'
  },
  assessmentForm: {
    title: 'Book Your Executive Wellness Assessment',
    fields: {
      fullName: 'Full Name',
      phoneNumber: 'Phone Number',
      preferredTime: 'Preferred Time',
      primaryConcern: 'Primary Concern'
    },
    buttons: {
      confirm: 'Confirm Appointment',
      whatsapp: 'Book via WhatsApp'
    }
  },
  reviewer: {
    name: 'Shamna',
    role: 'Ayurvedic Specialist at RamaCare Polyclinic, Dubai.'
  }
};

export default function AyurvedicDietPlanBusyProfessionalsPage() {
  const { showToast, ToastComponent } = useToast();
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    preferredTime: '',
    primaryConcern: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const faqsForSchema = content.faq.items.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }));

  const schemaGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://ramacarepolyclinic.ae/services/ayurvedic-diet-plan-busy-professionals-dubai/#webpage",
      "url": "https://ramacarepolyclinic.ae/services/ayurvedic-diet-plan-busy-professionals-dubai/",
      "name": "Ayurvedic Diet Plan for Busy Professionals Dubai | Office Meals",
      "inLanguage": "en-AE",
      "audience": { "@type": "Audience", "audienceType": "Office workers and busy professionals in Dubai" },
      "about": { "@id": "https://ramacarepolyclinic.ae/services/ayurvedic-diet-plan-busy-professionals-dubai/#diet" },
      "isPartOf": { "@id": "https://ramacarepolyclinic.ae/services/ayurveda-dubai/#webpage" },
      "reviewedBy": { "@id": "https://ramacarepolyclinic.ae/doctors/dr-shamna-keloth-meethal-ayurveda-doctor-dubai/#physician" },
      "lastReviewed": "YYYY-MM-DD",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ramacarepolyclinic.ae/" },
          { "@type": "ListItem", "position": 2, "name": "Ayurveda", "item": "https://ramacarepolyclinic.ae/services/ayurveda-dubai/" },
          { "@type": "ListItem", "position": 3, "name": "Ayurvedic Diet for Busy Professionals", "item": "https://ramacarepolyclinic.ae/services/ayurvedic-diet-plan-busy-professionals-dubai/" }
        ]
      }
    },
    {
      "@type": "Diet",
      "@id": "https://ramacarepolyclinic.ae/services/ayurvedic-diet-plan-busy-professionals-dubai/#diet",
      "name": "Ayurvedic diet plan for busy professionals",
      "alternateName": ["Ayurvedic office diet", "Healthy office lunch plan", "Ayurvedic meal prep for work"],
      "description": "Practical Ayurvedic eating for office workers in Dubai from RamaCare Polyclinic, Jumeirah 1: a main meal at lunch, warm meal-prep lunchboxes, steady snacks, smarter caffeine habits, hydration in air-conditioned offices, travel and sleep routines, with consultations up to 10pm.",
      "dietFeatures": "Main meal at midday with protein, vegetables and whole grains; warm home-cooked lunchboxes; nuts or fruit instead of sweets; water and herbal teas; light, early dinner",
      "expertConsiderations": "Herbs such as Brahmi, Ashwagandha or Jatamansi should only be taken if prescribed, especially with other medicines.",
      "endorsers": { "@id": "https://ramacarepolyclinic.ae/doctors/dr-shamna-keloth-meethal-ayurveda-doctor-dubai/#physician" }
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

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hello RamaCare, I'm interested in the Ayurvedic Diet Plan for Busy Professionals. Please help me book a consultation.");
    window.open(`https://wa.me/${content.hero.ctaButtons.secondary.phone}?text=${message}`, '_blank');
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.fullName || !formData.phone || !formData.email) {
      showToast('Please fill in all required fields (Name, Phone, and Email)', 'error');
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/appointment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          phone: formData.phone,
          email: formData.email,
          preferredTime: formData.preferredTime,
          concern: formData.primaryConcern,
          source: 'ayurvedic-diet-plan-busy-professionals-dubai'
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        showToast('Appointment request submitted successfully! We will contact you soon.', 'success');
        setFormData({
          fullName: '',
          phone: '',
          email: '',
          preferredTime: '',
          primaryConcern: ''
        });
      } else {
        showToast(result.message || 'Failed to submit appointment. Please try again or contact us directly.', 'error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      showToast('An error occurred. Please try again later.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToForm = () => {
    const formSection = document.getElementById('assessment-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <Layout>
      {ToastComponent}
      <Head>
        <title key="title">Ayurvedic Diet Plan for Busy Professionals Dubai | Office Meals</title>
        <meta name="description" content="Ayurvedic diet plan for busy professionals in Dubai: office lunches, meal prep, the 3pm slump, travel and sleep. Evening appointments to 10pm in Jumeirah 1." key="description" />
        <meta name="robots" content="index, follow" key="robots" />
        <link rel="canonical" href="https://ramacarepolyclinic.ae/services/ayurvedic-diet-plan-busy-professionals-dubai/" key="canonical" />

        {/* Open Graph Tags */}
        <meta property="og:type" content="website" key="og:type" />
        <meta property="og:title" content="Ayurvedic Diet Plan for Busy Professionals Dubai | Office Meals" key="og:title" />
        <meta property="og:description" content="Ayurvedic diet plan for busy professionals in Dubai: office lunches, meal prep, the 3pm slump, travel and sleep. Evening appointments to 10pm in Jumeirah 1." key="og:description" />
        <meta property="og:url" content="https://ramacarepolyclinic.ae/services/ayurvedic-diet-plan-busy-professionals-dubai/" key="og:url" />
        <meta property="og:image" content="https://ramacarepolyclinic.ae/images/diet3.jpg" key="og:image" />
        <meta property="og:image:width" content="1200" key="og:image:width" />
        <meta property="og:image:height" content="630" key="og:image:height" />
        <meta property="og:image:alt" content="Ayurvedic office lunch and herbal tea for busy professionals, RamaCare Polyclinic, Jumeirah 1, Dubai" key="og:image:alt" />
        <meta property="og:site_name" content="RamaCare Polyclinic" key="og:site_name" />
        <meta property="og:locale" content="en_AE" key="og:locale" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content="Ayurvedic Diet Plan for Busy Professionals Dubai | Office Meals" key="twitter:title" />
        <meta name="twitter:description" content="A DHA-licensed Ayurvedic approach for DIFC and Business Bay professionals — balance stress, improve sleep, and sustain energy through the workday." key="twitter:description" />
        <meta name="twitter:image" content="https://ramacarepolyclinic.ae/images/diet3.jpg" key="twitter:image" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaGraph)
          }}
        />
      </Head>

      {/* Hero Section */}
      <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumbs */}
          <nav className="flex flex-wrap items-center gap-y-1.5 text-xs font-semibold text-[#5F5F5F] mb-6 tracking-wider">
            <a href="/" className="hover:text-[#1F5E4B] transition-colors">Home</a>
            <span className="mx-2">/</span>
            <a href="/services/ayurveda-dubai/" className="hover:text-[#1F5E4B] transition-colors">Ayurveda</a>
            <span className="mx-2">/</span>
            <span className="text-gray-400">Ayurvedic Diet for Busy Professionals</span>
          </nav>

          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center w-full">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-[42px] sm:text-[54px] lg:text-[60px] font-semibold text-[#1A1A1A] mb-8 leading-[1.15] tracking-[-0.02em] max-w-[720px]">
              {content.hero.title}
            </h1>
            <p className="text-[#5F5F5F] mb-6 text-lg whitespace-pre-line ">
              {content.hero.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToForm}
                className="bg-[#1F5E4B] text-white px-8 py-4 rounded-lg hover:bg-[#16493a] transition-all duration-300 hover:shadow-xl flex items-center justify-center gap-2"
              >
                <LucideIcons.Calendar className="w-4 h-4" />
                {content.hero.ctaButtons.primary.text}
              </button>
              <button
                onClick={handleWhatsAppClick}
                className="border-2 border-[#1F5E4B] text-[#1F5E4B] px-8 py-4 rounded-lg hover:bg-[#1F5E4B] hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                {content.hero.ctaButtons.secondary.text}
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-[#E9E2D6] rounded-2xl p-8 shadow-2xl relative">
              <div className="aspect-square rounded-xl flex flex-col items-center justify-center text-center relative overflow-hidden">
                {/* Image placeholder - replace src with your image */}
                <Image
                  src="/images/diet3.jpg"
                  alt="Ayurvedic Diet Plan for Busy Professionals"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

      {/* Summary Section */}
      <section className="bg-[#E9E2D6] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-[#1A1A1A] mb-6 leading-tight tracking-tight"
          >
            {content.summary.title}
          </motion.h2>
          <p className="text-[#1A1A1A] text-lg leading-relaxed mb-8">
            {content.summary.description.split('Consistency over Complexity').map((part, i) => (
              <React.Fragment key={i}>
                {part}
                {i === 0 && <strong className="font-bold">Consistency over Complexity</strong>}
              </React.Fragment>
            ))}
          </p>

          <div className="grid sm:grid-cols-3 gap-6 mb-8 mt-10">
            {content.summary.items.map((item, idx) => {
              const Icon = LucideIcons[item.icon];
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-8 rounded-2xl shadow-sm flex flex-col items-center gap-4"
                >
                  <div className="text-[#1F5E4B]">
                    <Icon size={32} />
                  </div>
                  <span className="font-medium text-[#1A1A1A]">{item.title}</span>
                </motion.div>
              );
            })}
          </div>

          <a href="/services/ayurveda-dubai/" className="inline-block mt-8 bg-[#1F5E4B] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#16493a] transition-all duration-300">
            {content.summary.cta}
          </a>
        </div>
      </section>

      {/* Section 1: Syndrome */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-[40px] font-bold text-[#1A1A1A] mb-12 text-center tracking-tight"
          >
            {content.syndrome.title}
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {content.syndrome.items.map((item, idx) => {
              const Icon = LucideIcons[item.icon];
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`${item.bgColor} p-8 rounded-2xl flex flex-col gap-6 shadow-lg border border-[#E9E2D6]`}
                >
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-[#1F5E4B] shadow-sm">
                    <Icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1A1A1A] mb-4 tracking-tight">{item.title}</h3>
                    <p className="text-[#5F5F5F] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 2: Protocol */}
      <section className="bg-[#F5F1EA] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-[#1A1A1A] mb-12 text-center tracking-tight"
          >
            {content.protocol.title}
          </motion.h2>

          <div className="space-y-8">
            {content.protocol.items.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4 tracking-tight">
                  {step.letter}. {step.title}
                </h3>
                <p 
                  className="text-[#5F5F5F] text-base leading-relaxed mb-4"
                  dangerouslySetInnerHTML={{ __html: step.description }}
                />
                {step.favor && (
                  <div className="bg-[#E9E2D6] p-4 rounded-lg border-l-4 border-[#1F5E4B]">
                    <p 
                      className="text-[#1A1A1A] text-base leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: step.favor }}
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AyurvedaInfoSection content={content.sampleDay} />  
      <AyurvedaInfoSection content={content.eatingOut} />

      {/* Section 3: Cognitive Herbs */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-[#1A1A1A] mb-12 text-center tracking-tight"
          >
            {content.herbs.title}
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {content.herbs.items.map((herb, idx) => {
              const Icon = LucideIcons[herb.icon];
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-gradient-to-br from-[#F5F1EA] to-white p-8 rounded-2xl shadow-lg border border-[#E9E2D6]/50 flex flex-col items-start text-left"
                >
                  <Icon size={48} className="text-[#1F5E4B] mb-4" />
                  <div>
                    <h3 className="text-xl font-bold text-[#1A1A1A] mb-4 tracking-tight">{herb.title}</h3>
                    <p className="text-[#5F5F5F] text-base leading-relaxed">
                      {herb.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#E9E2D6] p-8 rounded-2xl text-center flex flex-col items-center gap-4"
          >
            <LucideIcons.Eye size={64} className="text-[#1F5E4B] mx-auto mb-4" />
            <p className="text-[#1A1A1A] text-lg leading-relaxed max-w-3xl">
              {content.herbs.footer}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 4: FAQ (PAA) */}
      <section className="bg-[#F5F1EA] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-[#1A1A1A] mb-12 text-center tracking-tight"
          >
            {content.faq.title}
          </motion.h2>

          <div className="space-y-4">
            {content.faq.items.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-xl shadow-md border border-[#E9E2D6] overflow-hidden"
              >
                <details className="group">
                  <summary className="flex justify-between items-center px-6 py-4 cursor-pointer list-none hover:bg-[#F5F1EA] transition-colors duration-200">
                    <span className="font-bold text-[#1A1A1A] text-base sm:text-lg pr-4">{item.question}</span>
                    <span className="transition-transform duration-300 group-open:rotate-180 shrink-0">
                      <LucideIcons.ChevronDown className="text-[#1F5E4B] w-5 h-5" />
                    </span>
                  </summary>
                  <div className="px-6 py-4 text-[#5F5F5F] text-base leading-relaxed bg-[#FDFBF9] border-t border-[#E9E2D6]">
                    {item.answer}
                  </div>
                </details>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Why RamaCare */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-[#1A1A1A] mb-12 tracking-tight"
          >
            {content.whyChoice.title}
          </motion.h2>
          <p className="text-[#5F5F5F] text-lg mb-12 max-w-3xl mx-auto">{content.whyChoice.subtitle}</p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {content.whyChoice.items.map((item, idx) => {
              const Icon = LucideIcons[item.icon];
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex flex-col items-center group"
                >
                  <div className="w-16 h-16 bg-[#F5F1EA] rounded-full flex items-center justify-center text-[#1F5E4B] mb-8 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <Icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-4 tracking-tight">{item.title}</h3>
                  <p className="text-[#5F5F5F] text-base leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Section 6: Authority Footer */}
      <section className="bg-[#1F5E4B] py-20 px-4 sm:px-6 lg:px-8 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight">
            {content.authorityFooter.title}
          </motion.h2>
          <p 
            className="text-lg mb-10 max-w-2xl mx-auto leading-relaxed"
            dangerouslySetInnerHTML={{ __html: content.authorityFooter.description }}
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToForm}
            className="bg-white text-[#1F5E4B] px-10 py-4 rounded-lg font-bold text-lg shadow-xl hover:bg-[#F5F1EA] transition-all">
            {content.authorityFooter.buttonText}
          </motion.button>
        </div>
      </section>
      <AyurvedaInfoSection content={content.yourVisit} />
      {/* Section 7: Assessment Form */}
      <section id="assessment-form" className="bg-[#F5F1EA] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-bold text-[#1A1A1A] mb-8 text-center tracking-tight">
            {content.assessmentForm.title}
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-[#5F5F5F] mb-2">
                {content.assessmentForm.fields.fullName}
              </label>
              <input
                type="text"
                id="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-[#E9E2D6] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1F5E4B]"
                placeholder="Enter your full name"
                required/>
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-[#5F5F5F] mb-2">
                {content.assessmentForm.fields.phoneNumber}
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-[#E9E2D6] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1F5E4B]"
                placeholder="Enter your phone number"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#5F5F5F] mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-[#E9E2D6] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1F5E4B]"
                placeholder="Enter your email address"
                required
              />
            </div>
            <div>
              <label htmlFor="preferredTime" className="block text-sm font-medium text-[#5F5F5F] mb-2">
                {content.assessmentForm.fields.preferredTime}
              </label>
              <select
                id="preferredTime"
                value={formData.preferredTime}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-[#E9E2D6] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1F5E4B] bg-white"
              >
                <option value="">Select a time</option>
                <option value="morning">Morning (10 AM - 1 PM)</option>
                <option value="afternoon">Afternoon (1 PM - 5 PM)</option>
                <option value="evening">After work (5 PM - 10 PM)</option>
              </select>
            </div>
            <div>
              <label htmlFor="primaryConcern" className="block text-sm font-medium text-[#5F5F5F] mb-2">
                {content.assessmentForm.fields.primaryConcern}
              </label>
              <textarea
                id="primaryConcern"
                value={formData.primaryConcern}
                onChange={handleInputChange}
                rows="4"
                className="w-full px-4 py-3 border border-[#E9E2D6] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1F5E4B]"
                placeholder="Describe your main health concerns..."
              ></textarea>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-[#1F5E4B] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#163f35] transition-all shadow-md flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <LucideIcons.CheckCircle size={20} />
                {isSubmitting ? 'Submitting...' : content.assessmentForm.buttons.confirm}
              </button>
              <button
                type="button"
                onClick={handleWhatsAppClick}
                className="flex-1 bg-[#25D366] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#1eaf52] transition-all shadow-md flex items-center justify-center gap-2"
              >
                <LucideIcons.MessageCircle size={20} />
                {content.assessmentForm.buttons.whatsapp}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Related Reading */}
      <section className="bg-white py-16 md:py-24 border-t border-[#E9E2D6]/40">
        <div className="container mx-auto px-6 text-center max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-10">
            Related Ayurvedic Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
            <a href="/services/ayurvedic-diet-plan-dubai/" className="bg-[#F5F1EA] hover:bg-[#E9E2D6] p-6 rounded-2xl flex items-center justify-between transition-all group shadow-sm">
              <span className="font-bold text-[#1A1A1A] group-hover:text-[#1F5E4B]">Ayurvedic Diet Plan</span>
              <LucideIcons.ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#1F5E4B] transition-transform group-hover:translate-x-1" />
            </a>
            <a href="/services/office-neck-treatment-dubai/" className="bg-[#F5F1EA] hover:bg-[#E9E2D6] p-6 rounded-2xl flex items-center justify-between transition-all group shadow-sm">
              <span className="font-bold text-[#1A1A1A] group-hover:text-[#1F5E4B]">Office Neck Pain Physiotherapy</span>
              <LucideIcons.ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#1F5E4B] transition-transform group-hover:translate-x-1" />
            </a>
            <a href="/services/ayurvedic-gut-health-dubai/" className="bg-[#F5F1EA] hover:bg-[#E9E2D6] p-6 rounded-2xl flex items-center justify-between transition-all group shadow-sm">
              <span className="font-bold text-[#1A1A1A] group-hover:text-[#1F5E4B]">Ayurvedic Gut Health</span>
              <LucideIcons.ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#1F5E4B] transition-transform group-hover:translate-x-1" />
            </a>
            <a href="/services/ayurvedic-diet-vs-intermittent-fasting-dubai/" className="bg-[#F5F1EA] hover:bg-[#E9E2D6] p-6 rounded-2xl flex items-center justify-between transition-all group shadow-sm">
              <span className="font-bold text-[#1A1A1A] group-hover:text-[#1F5E4B]">Ayurvedic Diet vs Intermittent Fasting</span>
              <LucideIcons.ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#1F5E4B] transition-transform group-hover:translate-x-1" />
            </a>
            <a href="/services/ayurvedic-diet-weight-loss-dubai/" className="bg-[#F5F1EA] hover:bg-[#E9E2D6] p-6 rounded-2xl flex items-center justify-between transition-all group shadow-sm">
              <span className="font-bold text-[#1A1A1A] group-hover:text-[#1F5E4B]">Ayurvedic Diet for Weight Loss</span>
              <LucideIcons.ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#1F5E4B] transition-transform group-hover:translate-x-1" />
            </a>
            <a href="/services/abhyanga-massage-dubai/" className="bg-[#F5F1EA] hover:bg-[#E9E2D6] p-6 rounded-2xl flex items-center justify-between transition-all group shadow-sm">
              <span className="font-bold text-[#1A1A1A] group-hover:text-[#1F5E4B]">Kerala Ayurvedic Massage</span>
              <LucideIcons.ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#1F5E4B] transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>

      <ContentReviewBadge doctorName="Dr. Shamna Keloth Meethal" pageSlug="ayurvedic-diet-plan-busy-professionals-dubai" lastReviewed="2026-01-12" />

      {/* Bottom Sticky CTA for Mobile */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden">
        <a
          href={`https://wa.me/${content.hero.ctaButtons.secondary.phone}`}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform animate-pulse">
          <LucideIcons.MessageCircle size={32} />
        </a>
      </div>

      <div className="bg-[#1F5E4B] text-white py-4 px-6 text-center text-sm md:text-base hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <p>Ready to optimize your health and performance?</p>
          <button 
            onClick={scrollToForm}
            className="bg-white text-[#1F5E4B] px-6 py-2 rounded-lg font-bold hover:bg-gray-100 transition-all flex items-center gap-2"
          >
            <LucideIcons.Calendar size={18} />
            Book Assessment Now
          </button>
        </div>
      </div>
    </Layout>
  );
}
