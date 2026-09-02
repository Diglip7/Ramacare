import React, { useState } from 'react';
import Layout from '../../../components/Layout';
import Head from 'next/head';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { useToast } from '../../../components/Toast';
import { useRouter } from 'next/router';
import BookConsultation from '../../../components/BookConsultation';
import ContentReviewBadge from '../../../components/ContentReviewBadge';

/* ------------------------------------------------------------------
   Page data — sourced exactly from the Jumeirah Ayurveda content brief.
   We preserve all SEO titles, canonicals, metadescriptions, and text.
 ------------------------------------------------------------------- */
const SITE_URL = 'https://ramacarepolyclinic.ae';
const PAGE_PATH = '/services/ayurvedic-clinic-in-jumeirah/';

const areasServed = [
  'Jumeirah 1',
  'Jumeirah 2',
  'Jumeirah 3',
  'Al Wasl',
  'City Walk',
  'Satwa',
  'Business Bay',
  'Downtown Dubai',
  'Dubai Marina',
  'JBR'
];

const whyChoose = [
  {
    title: 'DHA-Licensed Ayurvedic Care',
    text: 'Every treatment offered at RamaCare is delivered under the oversight of the Dubai Health Authority. Being a DHA-licensed Ayurvedic clinic means our practice meets defined standards for hygiene, documentation, patient safety, and clinical governance. For patients, this translates into peace of mind — you are receiving care within a regulated healthcare framework, not an informal or unregulated setup.'
  },
  {
    title: 'An Experienced BAMS Doctor',
    text: 'Dr. Shamna Keloth Meethal holds a Bachelor of Ayurvedic Medicine and Surgery (BAMS) degree and has spent years refining her approach to patient assessment and treatment planning. Her training draws on classical Ayurvedic texts and methodology, particularly the Kerala tradition of Ayurveda, which is widely regarded for its structured approach to Panchakarma and therapeutic massage.'
  },
  {
    title: 'Personalized Treatment Plans, Not Templates',
    text: 'No two patients receive the exact same treatment plan at RamaCare. Your Prakriti (constitution), current Dosha imbalance, lifestyle, occupation, stress levels, and specific health goals all shape the recommendations you receive. A patient managing chronic back pain will follow a very different path than a patient seeking help with digestive health or stress management, even if both are being treated by the same doctor in the same week.'
  },
  {
    title: 'Traditional Ayurveda Meets Modern Clinical Standards',
    text: 'We do not ask patients to choose between "traditional" and "modern" healthcare. Our approach layers classical Ayurvedic principles — Panchakarma, Abhyanga, Shirodhara, herbal medicine, and lifestyle counseling — on top of modern clinical documentation, hygiene protocols, and where appropriate, coordination with our general medicine and physiotherapy teams.'
  },
  {
    title: 'Evidence-Informed, Responsible Care',
    text: 'We are careful not to overstate what Ayurveda can promise. Treatment plans are based on classical Ayurvedic assessment methods and the doctor\'s clinical judgment, and outcomes vary from person to person depending on the condition, its severity, and individual response to treatment. We do not offer guarantees, and we encourage patients with serious or emergency medical conditions to seek appropriate conventional care alongside or instead of Ayurvedic treatment, as advised by their doctor.'
  },
  {
    title: 'A Family-Friendly Clinic',
    text: 'RamaCare welcomes patients across age groups, from younger adults managing stress and lifestyle-related concerns to older patients seeking support for joint pain or chronic conditions. Many of our patients bring family members along for consultations, and our staff are accustomed to explaining treatments clearly to patients of all backgrounds.'
  },
  {
    title: 'Convenient Jumeirah Location',
    text: 'Being based in Jumeirah 1 means we are within easy reach for patients across Jumeirah 2, Jumeirah 3, Al Wasl, Satwa, and nearby parts of Dubai. Parking, accessibility, and a straightforward booking process are all designed to make visiting the clinic as simple as possible.'
  },
  {
    title: 'A Comfortable, Calm Environment',
    text: 'Ayurvedic therapies like Shirodhara and Abhyanga are meant to be relaxing as well as therapeutic. Our therapy rooms are designed with this in mind — quiet, clean, and private, allowing patients to properly unwind during treatment rather than feeling rushed.'
  },
  {
    title: 'A Long-Term View of Wellness',
    text: 'Rather than treating Ayurveda as a quick fix, we encourage patients to think of it as part of an ongoing wellness strategy — one that includes dietary habits, sleep patterns, stress management, and periodic follow-up rather than a single visit.'
  }
];

const treatments = [
  {
    title: 'Panchakarma',
    text: 'Panchakarma is Ayurveda\'s classical detoxification and rejuvenation therapy, made up of a sequence of preparatory and cleansing procedures designed to help remove accumulated toxins (Ama) from the body. It is often recommended for patients dealing with chronic fatigue, joint stiffness, skin concerns, or a general sense of imbalance that hasn\'t responded well to other approaches.\n\nThe process typically begins with preparatory therapies such as internal oleation and Abhyanga, followed by cleansing procedures selected based on your Dosha and health concerns. Patients considering Panchakarma at our Ayurvedic Clinic in Jumeirah undergo a detailed assessment first, since the intensity and type of Panchakarma therapy must be matched carefully to the individual\'s constitution and current health status.',
    who: 'patients with chronic joint pain, skin disorders, digestive sluggishness, or those seeking a structured seasonal detox under professional supervision.',
    cta: 'Book a consultation with Dr. Shamna Keloth Meethal to discuss a personalized Panchakarma plan.',
    whatsappMsg: 'Hello RamaCare, I would like to book a consultation with Dr. Shamna Keloth Meethal to discuss a personalized Panchakarma plan.'
  },
  {
    title: 'Abhyanga Massage',
    text: 'Abhyanga is a full-body therapeutic oil massage using warm, herb-infused oils selected according to your Dosha type. Unlike a typical spa massage, Abhyanga follows specific strokes and pressure points rooted in Ayurvedic anatomy, intended to improve circulation, ease muscular tension, and support the nervous system.\n\nMany patients describe Abhyanga as deeply relaxing, but its purpose in Ayurveda goes beyond relaxation — it is often used as a preparatory therapy before Panchakarma, or as a standalone treatment for stress, poor circulation, and general fatigue.',
    who: 'individuals with high stress levels, muscular stiffness, poor sleep, or those wanting a preventive wellness routine.',
    cta: 'Schedule an Abhyanga consultation at RamaCare Polyclinic.',
    whatsappMsg: 'Hello RamaCare, I would like to schedule an Abhyanga consultation.'
  },
  {
    title: 'Shirodhara',
    text: 'Shirodhara involves a continuous, gentle stream of warm medicated oil poured over the forehead, targeting the region associated with the nervous system in Ayurvedic tradition. It is one of the most requested therapies among patients dealing with stress, anxiety, tension headaches, and disturbed sleep.\n\nThe oil used, its temperature, and the duration of the session are adjusted based on your individual assessment. Sessions are typically performed in a quiet, dedicated therapy room to help patients fully relax throughout the treatment.',
    who: 'patients experiencing stress, mild anxiety, insomnia, or tension-related headaches, as part of a broader treatment plan.',
    cta: 'Ask our team whether Shirodhara could be part of your care plan.',
    whatsappMsg: 'Hello RamaCare, I would like to ask whether Shirodhara could be part of my care plan.'
  },
  {
    title: 'Ayurvedic Consultation',
    text: 'Every treatment pathway at our clinic begins with a detailed Ayurvedic consultation. This is not a brief symptom check — it typically includes a discussion of your medical history, current complaints, digestion, sleep, stress levels, occupation, and lifestyle habits, alongside a physical assessment.\n\nThe consultation is where Dr. Shamna Keloth Meethal identifies your Prakriti (natural constitution) and any current Dosha imbalance, which then informs every subsequent recommendation — from diet and lifestyle adjustments to specific therapies.',
    who: 'anyone new to Ayurveda, or existing patients wanting a reassessment of their treatment plan.',
    cta: 'Book your Ayurvedic consultation in Jumeirah to start with a proper, individualised assessment.',
    whatsappMsg: 'Hello RamaCare, I would like to book an Ayurvedic consultation in Jumeirah.'
  },
  {
    title: 'Dosha Assessment',
    text: 'Dosha assessment is the process of identifying the balance of Vata, Pitta, and Kapha in your body — the three fundamental energies described in Ayurvedic physiology. This assessment considers your physical build, digestion, sleep patterns, emotional tendencies, and current symptoms.\n\nUnderstanding your Dosha balance helps explain why certain foods, routines, or stressors affect you the way they do, and forms the foundation for any personalized treatment plan, from dietary guidance to therapy selection.',
    who: 'patients wanting to understand recurring health patterns, or those beginning a longer-term wellness plan.',
    cta: 'Ask about a dedicated Dosha Assessment session during your next visit to our Ayurvedic Clinic in Jumeirah.',
    whatsappMsg: 'Hello RamaCare, I would like to ask about a dedicated Dosha Assessment session during my next visit.'
  },
  {
    title: 'Digestive Wellness',
    text: 'Ayurveda places significant emphasis on Agni, or digestive fire, viewing balanced digestion as central to overall health. Our digestive wellness approach typically combines dietary counseling, herbal support, and lifestyle adjustments tailored to your specific digestive complaints.\n\nPatients often seek this pathway for bloating, acidity, irregular bowel habits, or a general sense of sluggish digestion that hasn\'t been fully resolved through other approaches.',
    who: 'patients with mild to moderate digestive discomfort, gastritis-type symptoms, or IBS-related concerns, alongside appropriate medical evaluation where needed.',
    cta: 'Speak with our Ayurvedic doctor about a personalized digestive wellness plan.',
    whatsappMsg: 'Hello RamaCare, I would like to speak with your Ayurvedic doctor about a personalized digestive wellness plan.'
  },
  {
    title: 'Pain Management',
    text: 'Chronic pain — whether in the joints, back, neck, or related to conditions like arthritis or sciatica — is one of the most common reasons patients visit our Ayurvedic Clinic in Jumeirah. Our approach typically combines external therapies such as Abhyanga and localized treatments with internal herbal support and guided lifestyle modification.\n\nTreatment plans are built around the specific joint or region affected, the duration of the complaint, and the patient\'s overall constitution, rather than applying a single generic pain protocol.',
    who: 'patients with chronic joint pain, mild to moderate back or neck pain, or long-standing stiffness, used alongside physiotherapy or medical care as appropriate.',
    cta: 'Discuss a personalized Ayurvedic pain management plan with our team.',
    whatsappMsg: 'Hello RamaCare, I would like to discuss a personalized Ayurvedic pain management plan with your team.'
  },
  {
    title: 'Women\'s Wellness',
    text: 'Ayurveda offers a distinct perspective on women\'s health, addressing concerns such as hormonal balance, menstrual irregularities, and PCOS-related symptoms through a combination of herbal support, dietary guidance, and lifestyle counseling.\n\nOur women\'s wellness consultations take a private, unhurried approach, allowing patients to discuss sensitive concerns comfortably before any treatment plan is suggested.',
    who: 'women experiencing menstrual irregularities, PCOS-related symptoms, or hormonal imbalance, always in coordination with appropriate gynecological care.',
    cta: 'Book a private women\'s wellness consultation to discuss your specific concerns.',
    whatsappMsg: 'Hello RamaCare, I would like to book a private women\'s wellness consultation.'
  },
  {
    title: 'Stress Management',
    text: 'Modern lifestyles bring persistent stress, and Ayurveda addresses this through a combination of therapies such as Shirodhara and Abhyanga, alongside dietary and lifestyle counseling aimed at supporting the nervous system.\n\nRather than treating stress as an isolated symptom, our approach looks at sleep quality, work patterns, and daily routine as part of a broader picture.',
    who: 'patients experiencing high stress, mild anxiety, or sleep disturbances affecting daily functioning.',
    cta: 'Speak with our Ayurvedic doctor about a personalized stress management plan.',
    whatsappMsg: 'Hello RamaCare, I would like to speak with your Ayurvedic doctor about a personalized stress management plan.'
  }
];

const managedConditions = [
  { name: 'Arthritis', text: 'Ayurveda addresses arthritis-related joint stiffness and discomfort through a combination of external oil therapies, internal herbal support, and dietary guidance intended to support joint health over time, alongside conventional medical management where appropriate.', link: '/services/arthritis-treatment-dubai' },
  { name: 'Joint Pain', text: 'General joint pain, whether from overuse, age-related wear, or inflammation, is commonly approached through Abhyanga, localized therapies, and lifestyle modification tailored to the affected joint and the patient\'s constitution.', link: '/services/joint-pain-treatment-dubai' },
  { name: 'Back Pain', text: 'Persistent back pain is assessed for posture, occupation-related strain, and Dosha imbalance, with treatment plans often combining external therapies with guidance on daily movement and ergonomics.', link: '/services/back-pain-treatment-dubai' },
  { name: 'Neck Pain', text: 'Neck stiffness and discomfort, often linked to prolonged desk work, is addressed through targeted massage therapy and lifestyle counseling aimed at reducing recurring strain.', link: '/services/neck-pain-treatment-dubai' },
  { name: 'Sciatica', text: 'Sciatica-related discomfort is approached with a combination of Ayurvedic therapies and lifestyle advice, often alongside physiotherapy referral for a more comprehensive approach to nerve-related pain.', link: '/services/sciatica-treatment-dubai' },
  { name: 'Migraine', text: 'Recurring headaches and migraines are evaluated in the context of stress, sleep, and digestion, with therapies like Shirodhara sometimes included as part of a broader management plan.', link: '/services/migraine-treatment-dubai' },
  { name: 'Stress', text: 'Ongoing stress is addressed through calming therapies, herbal support, and lifestyle counseling designed to support the nervous system and improve daily resilience.', link: '/services/stress-treatment-dubai' },
  { name: 'Anxiety', text: 'Mild anxiety-related symptoms may be supported through Ayurvedic lifestyle counseling and calming therapies, always considered alongside appropriate medical or mental health care when needed.', link: '/services/anxiety-treatment-dubai' },
  { name: 'Insomnia', text: 'Sleep difficulties are approached by examining daily routine, stress levels, and Dosha imbalance, with therapies and lifestyle changes aimed at supporting more restful sleep.', link: '/services/insomnia-treatment-dubai' },
  { name: 'Digestive Disorders', text: 'General digestive complaints, including bloating and irregularity, are managed through dietary counseling, herbal support, and attention to digestive fire (Agni).', link: '/services/ayurvedic-gut-health-dubai' },
  { name: 'IBS', text: 'Irritable Bowel Syndrome-related symptoms may be supported through Ayurvedic dietary and lifestyle guidance, used alongside appropriate medical evaluation and management.', link: '/services/ayurvedic-gut-health-dubai' },
  { name: 'Gastritis', text: 'Gastritis-related discomfort is approached through dietary modification and herbal support intended to soothe digestive irritation, alongside medical care as needed.', link: '/services/ayurvedic-gut-health-dubai' },
  { name: 'PCOS', text: 'PCOS-related hormonal symptoms may be supported through a combination of herbal guidance, dietary counseling, and lifestyle changes, always in coordination with appropriate gynecological care.', link: '/services/pcos-treatment-dubai' },
  { name: 'Hair Loss', text: 'Hair thinning and hair loss concerns are assessed in the context of Dosha imbalance, nutrition, and stress, with Ayurvedic approaches used to support scalp and hair health.', link: '/services/hair-loss-dubai' },
  { name: 'Skin Disorders', text: 'Chronic skin concerns are approached through internal and external Ayurvedic therapies aimed at supporting skin health from within, alongside dermatological care where needed.', link: '/services/skin-diseases-treatment' }
];

const benefits = [
  'A holistic approach that looks at physical symptoms alongside diet, sleep, stress, and lifestyle, rather than treating each in isolation.',
  'Personalized care, since treatment plans are built around your specific Dosha and constitution rather than a standard protocol.',
  'Practical lifestyle guidance that patients can apply beyond the clinic, including daily routine and dietary recommendations.',
  'Dietary recommendations tailored to your digestive strength and current imbalances.',
  'Support for stress reduction through therapies designed to calm the nervous system.',
  'A long-term view of wellness, encouraging preventive habits rather than only reactive treatment.',
  'Integrative healthcare, since Ayurveda at RamaCare works alongside physiotherapy, general medicine, and dermatology when needed.',
  'An emphasis on preventive care, helping patients address early imbalances before they become more significant concerns.'
];

const journeySteps = [
  { step: '1', title: 'Appointment Booking', text: 'Reach out by phone, WhatsApp, or through our website to schedule a consultation at a time that suits you. Same-day appointments are available for many patients.' },
  { step: '2', title: 'Detailed Consultation', text: 'Your first visit involves an in-depth conversation with Dr. Shamna Keloth Meethal about your health history, current concerns, and lifestyle.' },
  { step: '3', title: 'Dosha Assessment', text: 'Your Prakriti and current Dosha imbalance are assessed through physical examination and discussion.' },
  { step: '4', title: 'Lifestyle Evaluation', text: 'Sleep, diet, stress, occupation, and daily routine are reviewed to understand contributing factors to your condition.' },
  { step: '5', title: 'Personalized Treatment Plan', text: 'Based on the above, a treatment plan is created, which may include therapies, herbal support, and lifestyle recommendations.' },
  { step: '6', title: 'Therapy Sessions', text: 'Treatments such as Abhyanga, Shirodhara, or Panchakarma are scheduled and delivered in our dedicated therapy rooms.' },
  { step: '7', title: 'Follow-Up Care', text: 'Progress is reviewed at follow-up visits, and your treatment plan is adjusted as needed based on your response.' }
];

const whyPatientsChooseList = [
  'An experienced, DHA-licensed Ayurvedic doctor who takes time with every patient',
  'A convenient Jumeirah 1 location, easily accessible from surrounding communities',
  'Personalized treatment plans rather than standardized packages',
  'A comfortable, private clinic environment',
  'Ethical, transparent medical care with no exaggerated promises',
  'Modern clinical facilities alongside traditional Ayurvedic therapy rooms',
  'Simple appointment booking, including same-day availability',
  'A family-friendly approach suited to patients of different ages'
];

const faqs = [
  { q: 'What is Ayurveda?', a: 'Ayurveda is a traditional system of medicine originating in India, focused on balancing the body\'s constitution (Dosha) through diet, lifestyle, herbal medicine, and therapeutic treatments.' },
  { q: 'Is Ayurveda safe?', a: 'When practiced by a licensed, qualified Ayurvedic doctor and tailored to your individual health status, Ayurveda is generally considered safe. It\'s important to disclose your full medical history and any medications during consultation.' },
  { q: 'Who can benefit from Ayurvedic treatment?', a: 'Patients dealing with chronic pain, digestive issues, stress, skin concerns, or those seeking preventive wellness support may benefit, following a proper individual assessment.' },
  { q: 'What is Panchakarma?', a: 'Panchakarma is a classical Ayurvedic detoxification therapy involving a sequence of preparatory and cleansing procedures tailored to the individual.' },
  { q: 'How long does treatment take?', a: 'Duration varies significantly depending on the condition, the therapy recommended, and individual response. This is discussed in detail during your consultation.' },
  { q: 'Is Dosha Assessment included in the consultation?', a: 'Yes, Dosha assessment is a core part of the initial Ayurvedic consultation at RamaCare Polyclinic.' },
  { q: 'Do you offer Shirodhara?', a: 'Yes, Shirodhara is one of our regularly offered therapies, recommended based on individual assessment.' },
  { q: 'Can Ayurveda help with stress?', a: 'Ayurveda offers therapies and lifestyle guidance that may support stress management, though it should not replace mental health care for more serious conditions.' },
  { q: 'Can Ayurveda support digestive health?', a: 'Yes, digestive wellness is a common focus area, addressed through dietary counseling, herbal support, and lifestyle changes.' },
  { q: 'Do I need multiple sessions?', a: 'Most treatment plans, especially for chronic conditions, involve multiple sessions. The exact number is determined after your initial assessment.' },
  { q: 'Is RamaCare Polyclinic DHA Licensed?', a: 'Yes, RamaCare Polyclinic is a DHA-licensed clinic, and our Ayurvedic treatments are delivered under this regulatory framework.' },
  { q: 'How do I book an appointment?', a: 'You can book an appointment by calling the clinic, messaging us on WhatsApp, or visiting our website at ramacarepolyclinic.ae.' },
  { q: 'What are your clinic timings?', a: 'Please contact us directly or check our website for current clinic timings, as these may be updated periodically.' },
  { q: 'Which insurance plans are accepted?', a: 'Insurance acceptance varies. Please contact our reception team directly to confirm whether your specific insurance provider is accepted.' },
  { q: 'Where is the clinic located?', a: 'RamaCare Polyclinic is located in Jumeirah 1, Dubai, easily accessible from Jumeirah 2, Jumeirah 3, Al Wasl, and nearby areas.' },
  { q: 'Do I need a doctor\'s referral to visit the Ayurvedic clinic?', a: 'No referral is required. You can book a consultation directly with our Ayurvedic doctor.' },
  { q: 'Can Ayurveda be combined with physiotherapy or other treatments?', a: 'Yes, in many cases Ayurvedic care can be coordinated with physiotherapy or other departments at our clinic, based on clinical judgment.' },
  { q: 'Is Ayurvedic treatment suitable for children?', a: 'Some Ayurvedic approaches can be adapted for younger patients, but this is assessed individually during consultation.' },
  { q: 'What should I bring to my first consultation?', a: 'Please bring any relevant medical records, a list of current medications, and be ready to discuss your health history and lifestyle in detail.' },
  { q: 'Does Ayurveda guarantee a cure for chronic conditions?', a: 'No responsible Ayurvedic practice can guarantee outcomes. Treatment plans aim to support the body\'s balance and wellbeing, and results vary based on the individual and condition.' }
];

export default function AyurvedicClinicJumeirahPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const router = useRouter();

  const handleWhatsAppClick = (messageText = "Hello RamaCare, I'm interested in Ayurvedic services in Jumeirah and would like to book a consultation.") => {
    const message = encodeURIComponent(messageText);
    window.open(`https://wa.me/971566597878?text=${message}`, '_blank');
  };

  const handleBookAppointment = () => {
    const element = document.getElementById('book-now');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      router.push('/book-appointment');
    }
  };
  const handleCall = () => window.open('tel:+97142862006', '_self');

  const bookConsultationContent = {
    badge: 'Ayurvedic Consultation',
    title: 'Book Your Ayurvedic Consultation in Jumeirah Today',
    description: 'If you are ready to explore personalized, DHA-licensed Ayurvedic care, RamaCare Polyclinic is here to help. Schedule your consultation with Dr. Shamna Keloth Meethal today.',
    getInTouchTitle: 'Get In Touch',
    requestAppointmentTitle: 'Request Appointment',
    submitButtonText: 'Confirm Consultation',
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
      { title: 'DHA Licensed', description: 'Certified Clinic' },
      { title: 'Dr. Shamna', description: 'Experienced BAMS' },
      { title: 'Personalized', description: 'Dosha Diagnostic' },
      { title: 'Integrated', description: 'Multi-Specialty Care' }
    ],
    concerns: [
      { value: 'panchakarma', label: 'Panchakarma Detox' },
      { value: 'abhyanga', label: 'Abhyanga Massage' },
      { value: 'shirodhara', label: 'Shirodhara Therapy' },
      { value: 'digestive', label: 'Digestive Wellness' },
      { value: 'pain', label: 'Pain Management' },
      { value: 'womens', label: 'Women\'s Wellness' },
      { value: 'stress', label: 'Stress Management' }
    ]
  };

  const schemaClinic = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "RamaCare Polyclinic",
    "url": SITE_URL,
    "logo": `${SITE_URL}/images/Logo.png`,
    "image": `${SITE_URL}/images/Ayurvedic wellness consultation.jpg`,
    "description": "DHA-licensed Ayurvedic clinic in Jumeirah 1, Dubai offering authentic Panchakarma, Abhyanga, Shirodhara, and holistic consultations by experienced BAMS doctor.",
    "telephone": "+97142862006",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "12 Al Dhiyafah Rd - Jumeirah Terrace Building, Ground Floor, Jumeirah 1",
      "addressLocality": "Dubai",
      "addressRegion": "Dubai",
      "addressCountry": "AE"
    },
    "priceRange": "$$"
  };

  const schemaWebPage = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "@id": `${SITE_URL}${PAGE_PATH}`,
    "url": `${SITE_URL}${PAGE_PATH}`,
    "name": "Ayurvedic Clinic in Jumeirah | RamaCare Polyclinic",
    "description": "Visit RamaCare Polyclinic, a DHA-licensed Ayurvedic Clinic in Jumeirah offering personalized Ayurveda, Panchakarma & holistic care. Book today.",
    "inLanguage": "en-AE",
    "publisher": {
      "@type": "MedicalClinic",
      "name": "RamaCare Polyclinic",
      "url": SITE_URL
    }
  };

  const schemaBreadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": SITE_URL
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": `${SITE_URL}/services`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Ayurvedic Clinic in Jumeirah",
        "item": `${SITE_URL}${PAGE_PATH}`
      }
    ]
  };

  const schemaFaqs = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  };

  return (
    <Layout>
      <Head>
        <title key="title">Ayurvedic Clinic in Jumeirah | RamaCare Polyclinic</title>
        <meta
          name="description"
          content="Visit RamaCare Polyclinic, a DHA-licensed Ayurvedic Clinic in Jumeirah offering personalized Ayurveda, Panchakarma & holistic care. Book today."
          key="description"
        />
        <link rel="canonical" href={SITE_URL + PAGE_PATH} key="canonical" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="RamaCare Polyclinic" />
        <meta property="og:title" content="Ayurvedic Clinic in Jumeirah — RamaCare Polyclinic" />
        <meta
          property="og:description"
          content="Authentic, DHA-licensed Ayurvedic care in Jumeirah 1, Dubai. Personalized treatment plans from an experienced BAMS doctor. Book your consultation today."
        />
        <meta property="og:url" content={SITE_URL + PAGE_PATH} />
        <meta property="og:image" content={SITE_URL + '/images/Ayurvedic wellness consultation.jpg'} />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ayurvedic Clinic in Jumeirah — RamaCare Polyclinic" />
        <meta name="twitter:description" content="Authentic, DHA-licensed Ayurvedic care in Jumeirah 1, Dubai. Book your consultation today." />
        <meta name="twitter:image" content={SITE_URL + '/images/Ayurvedic wellness consultation.jpg'} />

        <script key="schema-clinic" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaClinic) }} />
        <script key="schema-webpage" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaWebPage) }} />
        <script key="schema-breadcrumbs" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumbs) }} />
        <script key="schema-faqs" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFaqs) }} />
      </Head>

      {/* ============ LIGHT MINIMALIST ZEN LAYOUT ============ */}
      <div className="bg-[#FAF9F5] text-[#2C2722] font-sans antialiased min-h-screen">

        {/* HERO / HEADER SECTION — CLEAN & LIGHT BACKGROUND */}
        <section className="bg-white border-b border-gray-100 pt-12 pb-16 px-6">
          <div className="max-w-6xl mx-auto">
            {/* Center Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-6 flex justify-center items-center gap-2 text-sm font-semibold tracking-wider text-[#8A817C] uppercase">
              <Link href="/" className="hover:text-[#1F5E4B] transition-colors">Home</Link>
              <span aria-hidden="true" className="text-gray-300">|</span>
              <Link href="/services" className="hover:text-[#1F5E4B] transition-colors">Services</Link>
              <span aria-hidden="true" className="text-gray-300">|</span>
              <span aria-current="page" className="text-[#1F5E4B]">Ayurvedic Clinic in Jumeirah</span>
            </nav>

            <div className="text-center max-w-5xl mx-auto">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.2] text-[#1F2937] tracking-tight mb-8">
                Ayurvedic Clinic in Jumeirah | Authentic Holistic Care at RamaCare Polyclinic
              </h1>

              {/* Balanced Non-Heavy Profile Box */}
              <div className="grid md:grid-cols-12 gap-8 text-left items-center mt-12 bg-[#FAF9F5] border border-gray-200/60 rounded-3xl p-6 sm:p-8">
                <div className="md:col-span-8 space-y-4 text-sm sm:text-base text-[#5F5F5F] leading-relaxed">
                  <p>
                    If you have been searching for an authentic <strong>Ayurvedic Clinic in Jumeirah</strong>, RamaCare Polyclinic offers a quieter, more personal alternative to hurried consultations and generic treatment plans. Located in Jumeirah 1, our clinic brings together traditional Ayurveda and modern medical support under one roof, guided by an experienced, DHA-licensed Ayurvedic doctor.
                  </p>
                  <p>
                    Ayurveda is a centuries-old system of medicine that looks at health as a balance between body, mind, and lifestyle, rather than treating symptoms in isolation. At RamaCare, this means your treatment plan is built around your unique constitution, your daily habits, and the specific concerns you bring to us — not a one-size-fits-all protocol.
                  </p>
                </div>

                <div className="md:col-span-4 bg-white border border-gray-200/50 rounded-2xl p-6 shadow-sm">
                  <span className="text-xs uppercase text-[#D4A574] font-bold tracking-wider">Ayurveda Doctor</span>
                  <h4 className="text-lg font-bold mt-1 text-[#1F2937]">Dr. Shamna Keloth Meethal</h4>
                  <p className="text-xs text-[#5F5F5F] mt-1">BAMS, DHA Licensed</p>
                  <p className="text-sm text-[#5F5F5F] leading-relaxed mt-4">
                    Dr. Shamna Keloth Meethal leads our Ayurveda department with a calm, thorough approach to patient care. Every consultation begins with genuine listening.
                  </p>
                  <div className="mt-6 flex flex-col gap-2">
                    <button onClick={handleBookAppointment} className="w-full bg-[#1F5E4B] text-white py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-[#17493B] transition-colors">
                      Book Appointment
                    </button>
                    <button
                      onClick={() => handleWhatsAppClick("Hello RamaCare, I would like to book an Ayurvedic consultation in Jumeirah with Dr. Shamna Keloth Meethal.")}
                      className="w-full border border-gray-200 text-[#1F5E4B] py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-gray-50 transition-colors"
                    >
                      WhatsApp Us
                    </button>
                  </div>
                </div>
              </div>

              <div className="text-left mt-8 space-y-4 text-sm sm:text-base text-[#5F5F5F] leading-relaxed max-w-5xl mx-auto">
                <p>
                  We also understand that patients often want holistic healthcare without giving up access to conventional medical support. That is why RamaCare Polyclinic brings Ayurveda together with general medicine, <Link href="/services/physiotherapy-dubai" className="text-[#1F5E4B] underline">physiotherapy</Link>, <Link href="/services/skin-treatment-dubai" className="text-[#1F5E4B] underline">dermatology</Link>, and dental care, so your wellness journey is supported from multiple angles.
                </p>
                <p>
                  For residents of Jumeirah, Al Wasl, City Walk, and the surrounding communities, our clinic offers a convenient, welcoming space with same-day appointments available for many services. Whether you are exploring Ayurveda for the first time or looking to continue a treatment plan you have followed for years, RamaCare Polyclinic is here to guide you with care that is both traditional in spirit and responsibly modern in practice.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION: WHY CHOOSE — BALANCED GRID WITHOUT EMPTY COLUMNS */}
        <section className="py-20 px-6 bg-[#FAF9F5] border-b border-gray-100">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[#1F5E4B] font-bold text-xs uppercase tracking-[0.2em] block mb-2">Qualifications</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1F2937]">
                Why Choose RamaCare as Your Ayurvedic Clinic in Jumeirah
              </h2>
              <p className="mt-3 text-[#5F5F5F] text-sm sm:text-base leading-relaxed">
                Choosing the right Ayurvedic clinic is an important decision, especially when you are trusting a provider with your long-term health. RamaCare Polyclinic has built its Ayurveda practice around proper licensing, genuine experience, and personalized care.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {whyChoose.map((w, idx) => (
                <div key={w.title} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
                  <div>
                    <span className="text-2xl font-bold text-[#D4A574]/40 block mb-3">0{idx + 1}</span>
                    <h4 className="text-base font-bold text-[#1F2937] mb-2">{w.title}</h4>
                    <p className="text-sm text-[#5F5F5F] leading-relaxed">{w.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION: AYURVEDIC TREATMENTS — GOLD BORDERED INDEX CARDS */}
        <section className="py-20 px-6 bg-white border-b border-gray-100">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[#1F5E4B] font-bold text-xs uppercase tracking-[0.2em] block mb-2">Core Services</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1F2937]">Ayurvedic Treatments We Offer</h2>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {treatments.map((t) => (
                <div key={t.title} className="bg-[#FAF9F5] p-6 rounded-2xl border border-gray-200/50 shadow-sm flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-[#1F2937] mb-3">{t.title}</h3>
                    <p className="text-sm text-[#5F5F5F] leading-relaxed mb-4 whitespace-pre-line">{t.text}</p>
                    <p className="text-xs text-[#8A817C] leading-relaxed mb-4 border-l-2 border-[#1F5E4B] pl-2.5">
                      <strong className="text-[#1F5E4B]">Who may benefit:</strong> {t.who}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-gray-200/50">
                    <button
                      onClick={() => handleWhatsAppClick(t.whatsappMsg)}
                      className="text-xs font-bold text-[#1F5E4B] uppercase tracking-wider hover:underline block text-left"
                    >
                      {t.cta} →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION: CONDITIONS WE COMMONLY MANAGE */}
        <section className="py-20 px-6 bg-[#FAF9F5] border-b border-gray-100">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12 text-center">
              <span className="text-[#1F5E4B] font-bold text-xs uppercase tracking-[0.2em] block mb-2">Clinical Scope</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1F2937]">Conditions Commonly Managed with Ayurveda</h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {managedConditions.map((c) => (
                <div key={c.name} className="bg-white p-6 rounded-xl border border-gray-200/50 hover:border-[#1F5E4B] transition-colors duration-150">
                  <h4 className="text-base font-bold text-[#1F2937] mb-3">{c.name}</h4>
                  <p className="text-sm text-[#5F5F5F] leading-relaxed mb-4">{c.text}</p>
                  <Link href={c.link} className="text-xs font-bold text-[#1F5E4B] uppercase tracking-wider hover:underline">
                    View Condition Details
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION: BENEFITS OF CHOOSING AYURVEDA */}
        <section className="py-20 px-6 bg-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <span className="text-[#1F5E4B] font-bold text-xs uppercase tracking-[0.2em] block mb-2">Holistic Value</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1F2937]">Benefits of Choosing Ayurveda</h2>
              <p className="mt-3 text-[#5F5F5F] text-sm sm:text-base leading-relaxed">
                Patients choose Ayurveda for different reasons, but a few benefits come up consistently among those who visit our clinic:
              </p>
            </div>

            <ul className="space-y-4">
              {benefits.map((b) => (
                <li key={b} className="flex gap-4 items-start bg-[#FAF9F5] p-5 rounded-xl border border-gray-200/50">
                  <div className="flex h-5 w-5 items-center justify-center bg-[#1F5E4B] text-white text-xs font-bold shrink-0 mt-0.5 rounded-full">
                    ✓
                  </div>
                  <span className="text-sm sm:text-base text-[#2C2722] font-semibold leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SECTION: CONSULTATION PROCESS */}
        <section className="py-20 px-6 bg-[#FAF9F5] border-b border-gray-100">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16 text-center">
              <span className="text-[#1F5E4B] font-bold text-xs uppercase tracking-[0.2em] block mb-2">Workflow</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1F2937]">Our Ayurvedic Consultation Process</h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {journeySteps.map((step) => (
                <div key={step.step} className="bg-white p-6 rounded-2xl border border-gray-200/40 relative flex flex-col justify-between">
                  <span className="text-4xl font-bold text-[#D4A574]/20 block mb-4">{step.step}</span>
                  <div>
                    <h4 className="text-base font-extrabold text-[#1F2937] mb-2">{step.title}</h4>
                    <p className="text-sm text-[#5F5F5F] leading-relaxed">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION: WHY PATIENTS IN JUMEIRAH CHOOSE RAMACARE */}
        <section className="py-20 px-6 bg-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 text-center">
              <span className="text-[#D4A574] font-bold text-xs uppercase tracking-[0.2em] block mb-2">Patient Feedback</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1F2937]">Why Patients in Jumeirah Choose RamaCare</h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {whyPatientsChooseList.map((reason) => (
                <div key={reason} className="flex gap-3 bg-[#FAF9F5] p-4 rounded-xl border border-gray-200/50">
                  <div className="text-[#1F5E4B] font-bold mt-0.5 shrink-0">✓</div>
                  <span className="text-sm sm:text-base text-[#2C2722] font-semibold leading-relaxed">{reason}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION: INTEGRATION DEPT */}
        <section className="py-20 px-6 bg-[#FAF9F5] border-b border-gray-100">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <span className="text-[#1F5E4B] font-bold text-xs uppercase tracking-[0.2em] block">Integrated Care</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1F2937]">Traditional Ayurveda + Modern Healthcare</h2>
            <div className="space-y-4 text-sm sm:text-base text-[#5F5F5F] leading-relaxed text-left bg-white p-8 border border-gray-200/50 rounded-2xl">
              <p>
                One of the features that sets RamaCare Polyclinic apart as an Ayurvedic Clinic in Jumeirah is our integrated model of care. Ayurveda is practiced here as a complete, classical system — not diluted or simplified — but patients also have access to General Medicine, Physiotherapy, Dermatology, and Dental Care within the same clinic.
              </p>
              <p>
                This matters in practice. A patient with chronic back pain, for example, may benefit from Ayurvedic therapies alongside physiotherapy-guided exercises. A patient with a skin condition may combine Ayurvedic internal support with dermatological evaluation when needed. Rather than working in silos, our practitioners can coordinate care where appropriate, always based on clinical judgment and the patient&apos;s specific situation.
              </p>
              <p>
                We are careful not to suggest that combining these disciplines guarantees faster or better outcomes in every case — every patient responds differently, and coordination between departments is offered where it is clinically relevant, not as a blanket promise.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION: FAQS */}
        <section className="py-20 px-6 bg-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-[#1F5E4B] font-bold text-xs uppercase tracking-[0.2em] block mb-2">FAQs</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1F2937]">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-4">
              {faqs.map((f, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={f.q} className="bg-[#FAF9F5] p-6 rounded-2xl border border-gray-200/60">
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between gap-4 text-left focus:outline-none"
                    >
                      <span className="text-sm sm:text-base font-extrabold text-[#1F2937] flex-1">{f.q}</span>
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#1F5E4B]/10 text-[#1F5E4B]">
                        {isOpen ? (
                          <LucideIcons.Minus className="w-4 h-4 shrink-0" />
                        ) : (
                          <LucideIcons.Plus className="w-4 h-4 shrink-0" />
                        )}
                      </div>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.18 }}>
                          <p className="text-sm sm:text-base text-[#5F5F5F] leading-relaxed pt-3 mt-3 border-t border-gray-200/35">{f.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION: AREAS SERVED */}
        <section className="py-16 px-6 bg-[#FAF9F5] border-b border-gray-100">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-[#1F5E4B] font-bold text-xs uppercase tracking-[0.2em] block mb-2">Location Scope</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1F2937] mb-6">Areas We Serve</h2>
            <p className="text-sm sm:text-base text-[#5F5F5F] leading-relaxed max-w-2xl mx-auto mb-8">
              RamaCare Polyclinic is proud to serve as a trusted Ayurvedic Clinic in Jumeirah 1, conveniently positioned for patients across the wider Jumeirah community and beyond. We regularly welcome patients from:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {areasServed.map((a) => (
                <span key={a} className="text-sm font-semibold text-[#2C2722] bg-white border border-gray-200/60 px-5 py-2.5 rounded-full">{a}</span>
              ))}
            </div>
            <p className="text-sm text-[#5F5F5F] mt-8 max-w-2xl mx-auto font-medium">
              Whether you live nearby or are coming from a neighboring community, our clinic&apos;s location and appointment system are designed to make visiting for Ayurvedic care as straightforward as possible.
            </p>
          </div>
        </section>

        {/* SECTION: PATIENT EXPERIENCE */}
        <section className="py-20 px-6 bg-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <span className="text-[#1F5E4B] font-bold text-xs uppercase tracking-[0.2em] block mb-2">Clinic Environment</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1F2937] mb-6">The Patient Experience at RamaCare</h2>
              <p className="text-sm sm:text-base text-[#5F5F5F] leading-relaxed">
                From the moment you walk in, our goal is to make you feel comfortable rather than rushed. Our reception and clinical staff are trained to explain procedures clearly, answer questions patiently, and ensure your consultation feels unhurried.
              </p>
              <p className="text-sm sm:text-base text-[#5F5F5F] leading-relaxed mt-4">
                Therapy rooms are kept calm and private, supporting the relaxation that treatments like Shirodhara and Abhyanga are meant to provide. Consultations with Dr. Shamna Keloth Meethal typically involve genuine two-way conversation, giving you space to ask questions about your Dosha, treatment plan, or expected timeline.
              </p>
              <p className="text-sm sm:text-base text-[#5F5F5F] leading-relaxed mt-4">
                Follow-up support is built into our process — treatment plans are reviewed and adjusted based on how you respond, rather than following a fixed schedule regardless of progress.
              </p>
            </div>

            <div>
              <span className="text-[#D4A574] font-bold text-xs uppercase tracking-[0.2em] block mb-2">Our Standard</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1F2937] mb-4">Our Commitment to Trustworthy, Ethical Care</h2>
              <div className="space-y-4 text-sm sm:text-base text-[#5F5F5F] leading-relaxed">
                <p>
                  At RamaCare Polyclinic, we take the responsibility of practicing medicine seriously, even within a traditional system like Ayurveda.
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Our Ayurvedic care is delivered by a <strong>DHA-licensed doctor</strong> holding a recognized <strong>BAMS qualification</strong> (<Link href="/about-us" className="text-[#1F5E4B] underline">About Us</Link> / <Link href="/doctors" className="text-[#1F5E4B] underline">Doctors</Link>).</li>
                  <li>Our approach is <strong>evidence-informed</strong>, drawing on classical Ayurvedic methodology while remaining transparent about the limits of what any treatment can promise.</li>
                  <li>We practice <strong>ethical healthcare communication</strong> — we do not promise guaranteed cures, and we encourage patients with serious symptoms to seek appropriate conventional medical evaluation.</li>
                  <li>Every treatment plan is <strong>personalized</strong>, based on individual assessment rather than generic packages.</li>
                  <li>We prioritize <strong>patient education</strong>, ensuring you understand your Dosha, your treatment plan, and what to realistically expect.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: DISCLAIMER */}
        <section className="max-w-4xl mx-auto px-6 py-12">
          <p className="text-sm text-[#8A817C] leading-relaxed">
            <strong className="text-[#2C2722]">Medical Disclaimer:</strong> The information on this page is intended for general educational purposes and does not constitute medical advice. Ayurvedic treatment plans vary based on individual assessment, medical history, and response to therapy. Results are not guaranteed and may differ between patients. Please consult Dr. Shamna Keloth Meethal or another qualified healthcare professional before beginning any treatment, particularly if you have an existing medical condition, are pregnant, or are taking medication. In case of a medical emergency, please seek immediate care from an appropriate emergency service.
          </p>
        </section>
        <ContentReviewBadge doctorName="Dr. Shamna Keloth Meethal" pageSlug="ayurvedic-clinic-in-jumeirah" />
        {/* SECTION: EXISTING BOOKING COMPONENT INTEGRATED */}
        <BookConsultation content={bookConsultationContent} />
      </div>
    </Layout>
  );
}
