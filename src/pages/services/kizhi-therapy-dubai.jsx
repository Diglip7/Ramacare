import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import Layout from '../../../components/Layout';
import BookConsultation from '../../../components/BookConsultation';
import ContentReviewBadge from '../../../components/ContentReviewBadge';
import DoctorsSection from '../../../components/DoctorsSection';
import { useToast } from '../../../components/Toast';
import {
  Calendar,
  MessageCircle,
  Clock,
  Sparkles,
  Flame,
  Droplet,
  Leaf,
  ShieldCheck,
  AlertTriangle,
  CheckCircle2,
  ChevronDown,
  Info,
  MapPin,
  HeartPulse,
  Activity,
  Award,
  Stethoscope,
  ArrowRight,
  Sun,
  Layers,
  Thermometer,
  Feather
} from 'lucide-react';

const content = {
  hero: {
    title: "Kizhi Therapy Dubai: A Guide to Ayurvedic Herbal Pouch Therapy",
    subtitle: "Warm, traditional herbal pouch therapy for muscle stiffness, joint mobility, and restorative calm.",
    description1: "If you have ever walked past an Ayurveda clinic and noticed the warm, herbal scent drifting out, there is a fair chance someone was having Kizhi. It is one of the most recognisable treatments in Ayurveda, and one of the most misunderstood. People often ask whether it is a massage, a hot compress, or something closer to medical treatment.",
    description2: "Kizhi therapy is a traditional Ayurvedic treatment in which warm herbal pouches are applied to selected areas of the body, usually with medicated oil. Interest in kizhi therapy Dubai residents can access has grown steadily, particularly among people who spend long hours at a desk, train regularly, or simply want a calmer, more attentive form of care than a standard spa session offers.",
    description3: "This guide explains what the therapy involves, the main types, what a session is actually like, who may want to consider it, and who should wait or speak to a doctor first. It is educational, and it is honest about what is traditionally believed and what has been properly studied.",
    ctaButtons: {
      primary: { text: "Book Kizhi Consultation" },
      secondary: { text: "WhatsApp Us", phone: "971566597878" }
    },
    image: "/images/kizhi-therapy-dubai-ayurveda.jpg",
    imageAlt: "Ayurvedic practitioner applying a warm herbal pouch to a patient's shoulder during a Kizhi therapy session"
  },
  whatIsKizhi: {
    title: "What Is Kizhi Therapy?",
    p1: "Kizhi therapy is a traditional Ayurvedic treatment that uses heated herbal pouches, gently applied to selected areas of the body. The specific ingredients, technique and treatment plan vary according to the individual's needs and the practitioner's assessment.",
    p2: "\"Kizhi\" is a Malayalam word meaning a small bundle or pouch. The pouch is made from a piece of cotton cloth, filled with herbs, leaves, powders or grains, and tied into a bundle. It is warmed, usually with medicated oil, and then applied to the body in a controlled way.",
    p3: "In Ayurvedic teaching, warmth combined with herbal and oil-based preparations is used to address stiffness, heaviness and discomfort. These are traditional ideas. They come from classical Ayurvedic practice and generations of clinical experience, and they are different from conclusions drawn from large modern clinical trials. Some people find the therapy deeply relaxing and comforting. That experience is genuine, but it does not mean the treatment works the same way for everyone.",
    p4: "There is also no single \"Kizhi recipe\". A practitioner may choose different ingredients depending on the area being treated, the person's constitution (what Ayurveda calls prakriti), the season and the reason they came in. That individual selection is one of the things that separates Kizhi from a generic wellness add-on."
  },
  differenceMassage: {
    title: "How Is It Different From a Conventional Massage?",
    p1: "A conventional massage relies mainly on the therapist's hands, with pressure and manipulation of soft tissue. Kizhi relies on the pouch. The practitioner uses it to deliver heat and herbal content, often tapping, pressing or gliding it across the skin in rhythmic movements.",
    p2: "The pace is usually slower, and the pressure is generally gentler than in a deep-tissue massage. Some Kizhi sessions are combined with oil massage (abhyanga) before or after the pouches are used, which can make the two feel connected. We compare them in more detail further down."
  },
  howItWorks: {
    title: "How Does Kizhi Therapy Work?",
    intro: "A Kizhi session works by combining controlled warmth, herbal ingredients and rhythmic application to the skin. In Ayurvedic theory, this is meant to soothe and loosen the area being treated. Modern research has not fully established the mechanisms, so it is more accurate to say the approach is traditionally used for these purposes than to claim a proven physiological effect.",
    steps: [
      {
        number: "01",
        title: "Preparation of the pouches",
        description: "The practitioner selects the filling, cuts and measures the cloth, and ties the bundle securely. Depending on the type, the filling may be dry powder, chopped fresh leaves or cooked grain.",
        icon: Leaf
      },
      {
        number: "02",
        title: "Heating",
        description: "The pouch is warmed, commonly on a heated pan or vessel with medicated oil or a herbal preparation. A well-run clinic checks the temperature before it touches the skin, often on the practitioner's own wrist first.",
        icon: Thermometer
      },
      {
        number: "03",
        title: "Application",
        description: "Using steady, rhythmic movements, the practitioner applies the pouch to the chosen area. Common areas include the neck, shoulders, back, knees and other joints, though this depends on the plan.",
        icon: Layers
      },
      {
        number: "04",
        title: "Adjustment",
        description: "The pouch cools as it is used, so it is reheated and swapped regularly. Pressure and temperature are adjusted throughout, and you should feel able to say if anything is too hot or too firm.",
        icon: Feather
      }
    ],
    note: "The exact approach changes with the type of Kizhi and the individual. Someone with sensitive skin or a low tolerance for heat will be treated differently from a person who prefers firmer pressure and a warmer pouch."
  },
  types: {
    title: "Types of Kizhi Therapy",
    intro: "There are several forms of Kizhi, and clinics in Dubai may offer some but not all of them. One type is not automatically better than another. The right choice depends on the person, the area and the practitioner's judgement.",
    items: [
      {
        id: "podi-kizhi",
        name: "Podi Kizhi",
        subtitle: "Dry Herbal Powder Pouches",
        image: "/images/podi-kizhi-herbal-powder-therapy.jpg",
        imageAlt: "Podi Kizhi dry herbal powder pouch being heated for muscle stiffness treatment",
        description: "Podi Kizhi uses a pouch filled with dry herbal powder (podi means powder). The powder is usually warmed with a little medicated oil in a pan before being tied into the pouch.",
        details: "Because the filling is dry and the pouch can be warmed repeatedly, it is often described as a drier, firmer form of Kizhi. People sometimes explore Podi Kizhi when they want a warm, herbal treatment for a stiff neck, tight shoulders or an achy back. In traditional practice it is used for stiffness and heaviness in the body, but how well it suits you is a question for an assessment, not a leaflet.",
        tag: "Dry & Firm Heat",
        icon: Sparkles
      },
      {
        id: "elakizhi",
        name: "Elakizhi",
        subtitle: "Fresh Medicinal Leaf Pouches",
        image: "/images/elakizhi-fresh-leaves-treatment.jpg",
        imageAlt: "Elakizhi fresh medicinal leaves pouch therapy session in Dubai",
        description: "Elakizhi (also written Ela Kizhi or Elakizhi treatment) uses fresh herbal leaves. Ela means leaf. The leaves are chopped, lightly heated with oil and other ingredients, and tied into pouches.",
        details: "The selection of leaves is where the practitioner's knowledge matters most. Different leaves are traditionally associated with different purposes, and fresh ingredients can vary in quality. A reputable clinic will tell you what is in the pouch, or at least explain why those ingredients were chosen. Elakizhi has a distinctive, fresh, green aroma, which some patients find part of the appeal.",
        tag: "Fresh Herbal Aroma",
        icon: Leaf
      },
      {
        id: "njavarakizhi",
        name: "Njavarakizhi",
        subtitle: "Cooked Medicinal Njavara Rice Pouches",
        image: "/images/njavarakizhi-rice-bolus-massage.jpg",
        imageAlt: "Njavarakizhi cooked medicinal rice bolus therapy for joint strengthening",
        description: "Njavarakizhi (also called Navarakizhi or Njavara Kizhi) is different in kind from the other two. Here the pouches are filled with cooked njavara rice, a medicinal rice variety traditionally grown in Kerala. The rice is cooked in a herbal decoction and milk, then tied into the pouches and applied while warm, usually alongside medicated oil.",
        details: "In traditional Ayurvedic practice, Njavarakizhi is associated with nourishing, strengthening approaches rather than the drying, stimulating feel of Podi Kizhi. It is typically carried out as a structured, supervised treatment, and it is often more involved to prepare. This is one reason it is not available everywhere, and a clinic that offers it should be able to explain how it sources the rice and prepares the mixture.",
        tag: "Nourishing & Strengthening",
        icon: Droplet
      }
    ],
    note: "If you are specifically interested in this form, ask your practitioner how it differs from the other pouch therapies and whether it is appropriate for your situation. You can also read more about our Ayurvedic treatments.",
    noteLinkText: "Explore Ayurvedic Treatments",
    noteLinkHref: "/services/ayurveda-dubai/"
  },
  benefits: {
    title: "Potential Benefits of Kizhi Therapy",
    intro: "It helps to separate what Ayurveda traditionally says, what people commonly report, and what has been established by clinical research. For Kizhi specifically, there is limited high-quality modern evidence, so claims should stay modest.",
    paragraphs: [
      "What people most often describe is a sense of relaxation. Warmth, rhythm and unhurried attention tend to settle the body, and many people leave feeling calmer. That is a real and valuable experience, but it is not the same as treating an underlying condition.",
      "Some also seek Kizhi for temporary comfort from muscle stiffness, such as tight shoulders from desk work or soreness after a heavy gym session. The warmth may make the area feel looser and easier to move, at least for a while. People interested in Kizhi treatment for muscle stiffness often say they notice this softening during or soon after the session.",
      "Others explore Kizhi therapy for joint discomfort, hoping for a warm, soothing approach that supports comfortable movement. Traditionally, Ayurveda uses pouch therapies in this way, and some people feel it is a helpful part of their routine. It should not replace medical evaluation of persistent or worsening joint pain, particularly if there is swelling, redness or an injury behind it.",
      "Other things people mention include a general sense of wellbeing, a pleasant warming sensation, and an enjoyable way to unwind after physical activity."
    ],
    caveatsTitle: "Two honest caveats",
    caveats: [
      "First, results vary, and one person's experience is not a prediction of yours.",
      "Second, Kizhi may support comfort and wellbeing as part of a personalised plan, but it should not be seen as a cure for any disease or a replacement for medical care."
    ]
  },
  whoMayConsider: {
    title: "Who May Consider Kizhi Therapy?",
    intro: "People who may consider Kizhi therapy are generally those looking for a gentle, warmth-based Ayurvedic treatment as part of a broader wellness or recovery routine, after an individual assessment.",
    points: [
      "Someone with general muscle stiffness from long hours at a desk or on the road.",
      "Someone feeling physically tired and wanting a restful, restorative session.",
      "People who train regularly and want to unwind after activity.",
      "Those looking for a calming treatment for relaxation.",
      "People interested in supporting everyday mobility and flexibility as part of a wider plan."
    ],
    example: "A practical example: a person in Dubai who spends ten hours a day at a laptop, and has a tight neck and upper back, may be offered a short course of pouch therapy alongside posture advice and light stretching. A person recovering from a recent sports injury would be assessed quite differently, and might be asked to see a doctor or physiotherapist first.",
    note: "That is why an individual assessment matters. The same treatment name can mean quite different things for different people."
  },
  whoShouldAvoid: {
    title: "Who Should Avoid or Postpone Kizhi Therapy?",
    intro: "Kizhi therapy is not suitable for everyone, and heat-based treatments need extra care. This list is not exhaustive, and your practitioner is the right person to decide what applies to you.",
    warning: "You may be advised to postpone or avoid treatment if you have:",
    contraindications: [
      "Fever or an acute illness. The body is already under stress, and applying heat is usually not appropriate.",
      "Active skin infections, rashes or open wounds in the area to be treated.",
      "A recent or acute injury, such as a fresh sprain, fracture or significant swelling. These need medical evaluation first.",
      "Pregnancy. Whether any pouch therapy is appropriate depends on the stage of pregnancy, the area and the ingredients. Please speak to your doctor and the Ayurveda practitioner before booking.",
      "A significant medical condition, for example heart, kidney or circulation problems, diabetes with reduced skin sensation, or a condition requiring regular medication. Tell your practitioner so they can decide whether to proceed and how.",
      "Sensitivity to heat, or conditions that reduce your ability to feel temperature properly.",
      "Known allergies to herbs, oils, or ingredients such as milk or rice, which are relevant for some forms."
    ],
    advice: "If any healthcare professional has advised you against heat-based therapies, follow that advice and mention it at your consultation. Be as open as you can about your medical history, medicines and supplements. A good practitioner would much rather hear too much than too little."
  },
  sessionSteps: {
    title: "What Happens During a Kizhi Therapy Session in Dubai?",
    intro: "A first session at a reputable Dubai clinic usually follows a clear sequence. Knowing it in advance tends to make first-time patients feel much more at ease.",
    steps: [
      { number: "1", title: "Consultation", text: "You will be asked about your health, daily routine, previous injuries, medication, allergies and what you hope to get from the therapy." },
      { number: "2", title: "Assessment", text: "The practitioner may examine the area, check how you move, and ask about your sleep, digestion and energy, as Ayurvedic assessment looks at the whole person." },
      { number: "3", title: "Choosing the therapy", text: "Based on this, they recommend a type of Kizhi (or decide another approach is more suitable), and explain why." },
      { number: "4", title: "Preparing the herbs", text: "The practitioner prepares the ingredients, which may be powder, fresh leaves or cooked rice." },
      { number: "5", title: "Preparing and heating the pouch", text: "The pouch is tied and warmed with oil or a herbal mixture, and the temperature is checked." },
      { number: "6", title: "Application", text: "You lie comfortably, often on a treatment table, with the area exposed and the rest of your body covered. The practitioner applies the pouch with rhythmic movements, sometimes after an oil massage." },
      { number: "7", title: "Monitoring", text: "Throughout, the practitioner checks your comfort and adjusts temperature and pressure. You should never have to put up with a pouch that is too hot." },
      { number: "8", title: "Aftercare", text: "You may be advised to rest for a short while, avoid cold drinks or air-conditioning directly on the skin, and delay a shower, depending on the clinic's guidance. Follow the specific instructions you are given." }
    ],
    dubaiNote: "As sessions in Dubai often take place in air-conditioned spaces, tell your practitioner if you feel chilly during or after, so the room and covering can be adjusted."
  },
  durationAndFrequency: {
    durationTitle: "How Long Does Kizhi Therapy Take?",
    durationText: "The length of a Kizhi session varies with the therapy type, the area being treated and your treatment plan. Some sessions are relatively short and focused on one area, while others, especially full-body or multi-step treatments, take longer. Because timing differs from clinic to clinic, the most reliable source is the clinic itself. Ask what the session includes (consultation, oil massage, pouch application, rest time) and how long you should allow in total.",
    frequencyTitle: "How Often Should You Have Kizhi Therapy?",
    frequencyText: "There is no universal schedule. How often someone has Kizhi therapy depends on their individual assessment, their goals, the type of Kizhi, their health history and their practitioner's recommendation. Some people have a single session for relaxation. Others are advised to have a short series of sessions over a period of time, and some return occasionally as part of a longer wellness routine. Be cautious about any clinic that gives a fixed number of sessions before assessing you. A fixed package that suits one person's body may not suit yours. A sensible approach is to review progress with your practitioner after a few sessions and decide together whether to continue, change the plan or stop."
  },
  comparison: {
    title: "Kizhi Therapy vs Ayurvedic Massage",
    intro: "Kizhi uses heated herbal pouches as the main tool, while an Ayurvedic massage relies mostly on the practitioner's hands and warm medicated oil. Both can be part of the same visit, and many treatments combine them. Here is how they usually differ:",
    items: [
      {
        aspect: "Technique",
        text: "Ayurvedic massage uses strokes, kneading and pressure with the hands. Kizhi uses pouch application with tapping, pressing and gliding."
      },
      {
        aspect: "Herbal ingredients",
        text: "In massage, the herbal element is mainly in the oil. In Kizhi, the pouch contents (powder, leaves or rice) are a central part of the treatment."
      },
      {
        aspect: "Use of heat",
        text: "Heat is built into Kizhi through the heated pouch. Massage uses warmed oil, but the heat is generally milder."
      },
      {
        aspect: "Objectives",
        text: "Massage is often chosen for general relaxation and body care. Kizhi is traditionally chosen for more targeted, warmth-based care of particular areas."
      },
      {
        aspect: "Practitioner involvement",
        text: "Both need skill. Kizhi requires careful temperature control and preparation of the pouches."
      },
      {
        aspect: "Customisation",
        text: "In both cases, a good practitioner tailors oils, ingredients and pressure to the person."
      }
    ],
    footerNote: "If you are comparing options for Ayurvedic massage Dubai clinics offer, it is worth asking which of the two is closer to what you want. See our page on Ayurvedic massage for how we approach it.",
    linkText: "Ayurvedic massage",
    linkHref: "/services/abhyanga-massage-dubai/"
  },
  chooseClinic: {
    title: "How to Choose a Kizhi Therapy Clinic in Dubai",
    intro: "Choosing a clinic is mostly about trust, safety and clear communication. When you are comparing Ayurveda clinics in Dubai, these are sensible things to look for:",
    criteria: [
      "Qualified Ayurveda practitioners. Ask who will treat you and what their training is.",
      "Appropriate healthcare licensing. Healthcare facilities and practitioners in Dubai are regulated by the Dubai Health Authority (DHA), and you can ask to see licence details.",
      "A proper consultation before treatment, not just a booking and a bed.",
      "A clear explanation of the therapy, the ingredients and what you are likely to feel.",
      "Hygiene standards, including clean linen, clean pouches and safe handling of oils.",
      "Transparent pricing, so you know what is included before you commit.",
      "Sound treatment protocols, with temperature checks and consent.",
      "Practitioner experience with the specific therapy you want.",
      "Personalised recommendations rather than the same package for everyone.",
      "Honest communication about both benefits and limitations."
    ],
    warning: "Be wary of any clinic that promises guaranteed results, describes its treatment as a cure, or pressures you into a large prepaid package. A trustworthy practice will be comfortable telling you when a therapy is not right for you.",
    footerNote: "If you would like to understand the broader approach, our overview of Ayurveda in Dubai and Ayurvedic treatments is a good starting point.",
    links: [
      { text: "Ayurveda in Dubai", href: "/services/ayurveda-dubai/" },
      { text: "Ayurvedic treatments", href: "/services/panchakarma-treatment-dubai/" }
    ]
  },
  whyAssessmentMatters: {
    title: "Why Professional Assessment Matters Before Kizhi Therapy",
    p1: "Kizhi should be chosen because it suits you, not because it is popular. Two people can both say they have \"back pain\" while having very different causes, and the right approach for one may be unsuitable for the other.",
    p2: "An assessment helps the practitioner rule out situations where heat is unwise, choose the right type of Kizhi, set realistic expectations and decide whether you might also need a medical opinion or a physiotherapy review. Where relevant, Ayurvedic care can sit alongside conventional care, and your practitioner can work with your doctor rather than in competition with them. If you have a condition that needs coordinated care, physiotherapy or other wellness treatments may form part of the plan.",
    p3: "Honest assessment is also what protects you. If you have severe or persistent pain, numbness, a recent injury or any symptom that worries you, please see a doctor before booking any form of therapy."
  },
  
  disclaimer: "Disclaimer: This article is for educational purposes only. It does not replace diagnosis, treatment or advice from a qualified healthcare or Ayurveda professional. If you have a medical condition, are pregnant, have a recent injury, a skin problem or a fever, please seek professional advice before starting any treatment. Individual results vary.",
  faqs: [
    {
      question: "What is Kizhi therapy?",
      answer: "Kizhi therapy is a traditional Ayurvedic treatment that uses warm herbal pouches applied to selected areas of the body, usually with medicated oil. The ingredients and technique depend on the type of Kizhi and the individual's needs, as assessed by a practitioner."
    },
    {
      question: "What is Kizhi therapy used for?",
      answer: "Traditionally, Kizhi is used as a warming, soothing therapy for areas of stiffness or heaviness, and as part of general wellness care. Some people choose it for relaxation or comfort after physical activity. It is not a treatment for any specific disease on its own."
    },
    {
      question: "What are the benefits of Kizhi therapy?",
      answer: "People commonly report relaxation, a warm and soothing sensation, and temporary comfort from muscle tightness. Traditional Ayurveda also uses it to support mobility and wellbeing. Evidence from large clinical studies is limited, and results vary from person to person."
    },
    {
      question: "How does Kizhi treatment work?",
      answer: "A practitioner heats herbal pouches and applies them to the body with rhythmic movements, adjusting pressure and temperature as needed. In Ayurvedic theory, this warmth and the herbal content are meant to soothe and loosen the area. Modern research has not fully explained the mechanisms."
    },
    {
      question: "What is the difference between Podi Kizhi and Elakizhi?",
      answer: "Podi Kizhi uses pouches filled with dry herbal powders, while Elakizhi uses fresh herbal leaves, often warmed with oil. Podi Kizhi tends to feel drier and firmer, and Elakizhi has a fresher, leaf-based aroma. Which is suitable depends on your assessment and the practitioner's judgement."
    },
    {
      question: "Is Kizhi therapy suitable for everyone?",
      answer: "No. People with fever, active skin infections, open wounds, recent injuries, heat sensitivity or certain medical conditions may need to postpone or avoid it. Pregnancy also needs individual advice. Always share your medical history and have a consultation before starting."
    },
    {
      question: "How long does a Kizhi therapy session take?",
      answer: "The duration varies according to the type of Kizhi, the area treated and the treatment plan. Some clinics include a consultation and oil massage in the total time. Ask your clinic what is included and how long to allow before you book."
    },
    {
      question: "How often can Kizhi therapy be done?",
      answer: "There is no standard frequency. It depends on your goals, health history, the type of therapy and your practitioner's recommendation. Some people have a single session for relaxation, while others follow a short series. Your plan should be reviewed periodically."
    },
    {
      question: "Is Kizhi therapy painful?",
      answer: "It is generally not meant to be painful. You should feel warmth and gentle pressure. If the pouch feels too hot or the pressure uncomfortable, tell the practitioner straight away so it can be adjusted. Persistent pain during or after treatment should be reported."
    },
    {
      question: "What should I expect after Kizhi treatment?",
      answer: "Many people feel relaxed, warm and a little sleepy, while some notice oil on the skin or a mild herbal scent. Your practitioner may advise rest and simple aftercare. If you feel unwell, notice skin irritation or have any concern, contact the clinic."
    },
    {
      question: "How do I choose a Kizhi therapy clinic in Dubai?",
      answer: "Look for qualified Ayurveda practitioners, appropriate DHA licensing, a proper consultation, clear explanations, good hygiene and transparent pricing. Be cautious of guaranteed results or pressure to buy large packages. A good clinic will explain both the benefits and the limitations."
    },
    {
      question: "Do I need a consultation before Kizhi therapy?",
      answer: "Yes, it is strongly recommended. A consultation helps the practitioner check whether heat-based therapy is safe for you, choose the right type of Kizhi, and set realistic expectations. It is especially important if you have a medical condition, an injury or are pregnant."
    }
  ]
};

export default function KizhiTherapyDubaiPage() {
  const router = useRouter();
  const { ToastComponent } = useToast();
  const [activeFaq, setActiveFaq] = useState(0);

  const handleBookAppointment = () => {
    router.push('/book-appointment');
  };

  const handleWhatsApp = () => {
    const msg = encodeURIComponent("Hello RamaCare Polyclinic, I'm interested in Kizhi Therapy (Ayurvedic Herbal Pouch Therapy). Please assist me with booking a consultation.");
    window.open(`https://wa.me/${content.hero.ctaButtons.secondary.phone}?text=${msg}`, '_blank');
  };

  // Structured Data Schemas
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": ["Article", "MedicalWebPage"],
    "@id": "https://ramacarepolyclinic.ae/services/kizhi-therapy-dubai/#article",
    "mainEntityOfPage": "https://ramacarepolyclinic.ae/services/kizhi-therapy-dubai/",
    "headline": "Kizhi Therapy Dubai: A Guide to Ayurvedic Herbal Pouch Therapy",
    "description": "A clear guide to kizhi therapy Dubai patients ask about: types, benefits, safety and what to expect in a first Ayurvedic herbal pouch session.",
    "image": "https://ramacarepolyclinic.ae/images/kizhi.jpg",
    "inLanguage": "en-AE",
    "datePublished": "2026-03-01",
    "dateModified": "2026-03-15",
    "lastReviewed": "2026-03-15",
    "author": {
      "@type": "Organization",
      "name": "RamaCare Editorial Team"
    },
    "reviewedBy": {
      "@type": "Person",
      "name": "Dr. Shamna Keloth Meethal",
      "jobTitle": "DHA-licensed Ayurveda Practitioner"
    },
    "publisher": {
      "@type": "Organization",
      "name": "RamaCare Polyclinic",
      "logo": {
        "@type": "ImageObject",
        "url": "https://ramacarepolyclinic.ae/images/Logo.png"
      }
    },
    "about": {
      "@type": "MedicalTherapy",
      "name": "Kizhi therapy (Ayurvedic herbal pouch therapy)"
    }
  };

  const breadcrumbSchema = {
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
        "name": "Ayurveda Treatments",
        "item": "https://ramacarepolyclinic.ae/services/ayurveda-dubai/"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Kizhi Therapy Dubai",
        "item": "https://ramacarepolyclinic.ae/services/kizhi-therapy-dubai/"
      }
    ]
  };

  const clinicSchema = {
    "@context": "https://schema.org",
    "@type": ["MedicalClinic", "LocalBusiness"],
    "@id": "https://ramacarepolyclinic.ae/#clinic",
    "name": "RamaCare Polyclinic",
    "url": "https://ramacarepolyclinic.ae/",
    "logo": "https://ramacarepolyclinic.ae/images/Logo.png",
    "image": "https://ramacarepolyclinic.ae/images/RamaCare%20Polyclinic%20Jumeirah%201.jpg",
    "telephone": "+971-56-659-7878",
    "medicalSpecialty": "Ayurveda",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "12 Al Dhiyafah Road, Jumeirah Terrace Building, Ground Floor",
      "addressLocality": "Jumeirah 1",
      "addressRegion": "Dubai",
      "addressCountry": "AE"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "10:00",
        "closes": "22:00"
      }
    ],
    "areaServed": {
      "@type": "City",
      "name": "Dubai"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": content.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const imageSchema = {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    "contentUrl": "https://ramacarepolyclinic.ae/images/kizhi.jpg",
    "url": "https://ramacarepolyclinic.ae/images/kizhi.jpg",
    "caption": "Ayurvedic practitioner applying a warm herbal pouch to a patient's shoulder during a Kizhi therapy session",
    "width": 1200,
    "height": 675
  };

  return (
    <Layout>
      {ToastComponent}
      <Head>
        <title key="title">Kizhi Therapy Dubai: Benefits, Types & What to Expect</title>
        <meta
          name="description"
          content="A clear guide to kizhi therapy Dubai patients ask about: types, benefits, safety and what to expect in a first Ayurvedic herbal pouch session."
          key="description"
        />
        <meta name="robots" content="index, follow" key="robots" />
        <link rel="canonical" href="https://ramacarepolyclinic.ae/services/kizhi-therapy-dubai/" key="canonical" />

        {/* Open Graph Tags */}
        <meta property="og:type" content="article" key="og:type" />
        <meta property="og:title" content="Kizhi Therapy Dubai: Benefits, Types & What to Expect" key="og:title" />
        <meta
          property="og:description"
          content="A clear guide to kizhi therapy Dubai patients ask about: types, benefits, safety and what to expect in a first Ayurvedic herbal pouch session."
          key="og:description"
        />
        <meta property="og:url" content="https://ramacarepolyclinic.ae/services/kizhi-therapy-dubai/" key="og:url" />
        <meta property="og:image" content="https://ramacarepolyclinic.ae/images/kizhi.jpg" key="og:image" />
        <meta property="og:site_name" content="RamaCare Polyclinic" key="og:site_name" />
        <meta property="og:locale" content="en_AE" key="og:locale" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content="Kizhi Therapy Dubai: Benefits, Types & What to Expect" key="twitter:title" />
        <meta
          name="twitter:description"
          content="A clear guide to kizhi therapy Dubai patients ask about: types, benefits, safety and what to expect in a first Ayurvedic herbal pouch session."
          key="twitter:description"
        />
        <meta name="twitter:image" content="https://ramacarepolyclinic.ae/images/kizhi.jpg" key="twitter:image" />

        {/* JSON-LD Schemas */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(imageSchema) }} />
      </Head>

       {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F5F1EA] via-white to-[#F5F1EA] py-14 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-[#E9E2D6]">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center space-x-2 text-xs sm:text-sm text-[#5F5F5F] mb-6">
            <Link href="/" className="hover:text-[#1A5F3F] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services/ayurveda-dubai/" className="hover:text-[#1A5F3F] transition-colors">Ayurveda</Link>
            <span>/</span>
            <span className="text-[#1A5F3F] font-semibold">Kizhi Therapy Dubai</span>
          </nav>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7"
            >
              {/* Category Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A5F3F]/10 text-[#1A5F3F] text-xs font-semibold uppercase tracking-wider mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Authentic Ayurvedic Therapy</span>
              </div>

              {/* H1 Heading */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] leading-tight mb-6">
                {content.hero.title}
              </h1>

              {/* Hero Paragraphs */}
              <div className="space-y-4 text-base sm:text-lg text-gray-700 leading-relaxed mb-8">
                <p>{content.hero.description1}</p>
                <p>{content.hero.description2}</p>
                <p className="text-sm sm:text-base text-[#5F5F5F] bg-[#E9E2D6]/40 p-3.5 rounded-lg border-l-3 border-[#1A5F3F]">
                  {content.hero.description3}
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3.5 pt-2">
                <button
                  onClick={handleBookAppointment}
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#1A5F3F] hover:bg-[#144930] text-white font-bold text-base shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
                >
                  <Calendar className="w-5 h-5" />
                  {content.hero.ctaButtons.primary.text}
                </button>
                <button
                  onClick={handleWhatsApp}
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-white hover:bg-gray-50 text-[#1A5F3F] border-2 border-[#1A5F3F] font-bold text-base shadow-xs hover:shadow-md transition-all"
                >
                  <MessageCircle className="w-5 h-5 text-[#25D366]" />
                  {content.hero.ctaButtons.secondary.text}
                </button>
              </div>
            </motion.div>

            {/* Right Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-5"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                <img
                  src={content.hero.image}
                  alt={content.hero.imageAlt}
                  className="w-full h-[360px] sm:h-[440px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-xs text-xs sm:text-sm text-gray-800 shadow-lg border border-gray-100">
                  <div className="flex items-start gap-2.5">
                    <Leaf className="w-4 h-4 text-[#1A5F3F] shrink-0 mt-0.5" />
                    <p className="leading-snug">
                      <strong className="text-[#1A5F3F] block font-semibold mb-0.5">Ayurvedic Herbal Pouch Application</strong>
                      Warm medicated herbal boluses applied rhythmically to alleviate stiffness & promote deep muscular relaxation.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. WHAT IS KIZHI THERAPY */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1A1A1A] tracking-tight">
              {content.whatIsKizhi.title}
            </h2>
            <div className="w-12 h-1 bg-[#1A5F3F] rounded-full mx-auto mt-3"></div>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 bg-[#F9FAF8] p-6 sm:p-8 rounded-2xl border border-[#EDF2EE] space-y-5 text-gray-700 text-base sm:text-lg leading-relaxed shadow-xs">
              <p className="font-medium text-[#1A1A1A]">{content.whatIsKizhi.p1}</p>
              <p>{content.whatIsKizhi.p2}</p>
              <p>{content.whatIsKizhi.p3}</p>
              <div className="p-4 rounded-xl bg-[#EAF5EE] border-l-4 border-[#1A5F3F] text-sm sm:text-base text-gray-800">
                {content.whatIsKizhi.p4}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border-2 border-gray-100">
                <img
                  src="/images/kizhi-therapy-session-procedure-dubai.jpg"
                  alt="Ayurvedic practitioner preparing and applying warm herbal Kizhi pouches in Dubai clinic"
                  className="w-full h-[360px] sm:h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-white/90 backdrop-blur-xs text-xs text-gray-700">
                  <span className="font-bold text-[#1A5F3F] block">Traditional Herbal Bolus Preparation</span>
                  Warm herbal bundles prepared with specific medicinal leaves and oils tailored to the patient.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DIFFERENCE FROM CONVENTIONAL MASSAGE */}
      <section className="py-14 sm:py-16 px-4 sm:px-6 lg:px-8 bg-[#F5F1EA]/60 border-y border-[#E9E2D6]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1A1A1A] mb-3">
              {content.differenceMassage.title}
            </h2>
            <div className="w-12 h-1 bg-[#1A5F3F] rounded-full mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-[#E9E2D6] shadow-xs hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#1A5F3F]/10 flex items-center justify-center mb-5 text-[#1A5F3F]">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">Hands vs. Pouch Technique</h3>
              <p className="text-gray-700 text-base leading-relaxed">
                {content.differenceMassage.p1}
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-[#E9E2D6] shadow-xs hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#1A5F3F]/10 flex items-center justify-center mb-5 text-[#1A5F3F]">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">Pace & Combination with Abhyanga</h3>
              <p className="text-gray-700 text-base leading-relaxed">
                {content.differenceMassage.p2}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. HOW DOES KIZHI THERAPY WORK */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1A1A1A] mb-4">
              {content.howItWorks.title}
            </h2>
            <div className="w-12 h-1 bg-[#1A5F3F] rounded-full mx-auto mb-4"></div>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              {content.howItWorks.intro}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.howItWorks.steps.map((step, idx) => {
              const IconComp = step.icon;
              return (
                <div
                  key={idx}
                  className="relative bg-[#F9FAF8] p-6 sm:p-7 rounded-2xl border border-[#E5ECE7] hover:border-[#1A5F3F]/40 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-[#1A5F3F]">{step.number}</span>
                      <div className="w-10 h-10 rounded-full bg-[#EAF5EE] flex items-center justify-center text-[#1A5F3F]">
                        <IconComp className="w-5 h-5" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-[#1A1A1A] mb-2">{step.title}</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 p-5 rounded-2xl bg-[#F5F1EA] border-l-4 border-[#1A5F3F] text-sm text-gray-700 w-full">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-[#1A5F3F] shrink-0 mt-0.5" />
              <span>{content.howItWorks.note}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TYPES OF KIZHI THERAPY */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#F9FAF8] border-y border-[#EDF2EE]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A5F3F]/10 text-[#1A5F3F] text-xs font-semibold uppercase tracking-wider mb-3">
              Traditional Formulations
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1A1A1A] mb-4">
              {content.types.title}
            </h2>
            <div className="w-12 h-1 bg-[#1A5F3F] rounded-full mx-auto mb-4"></div>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              {content.types.intro}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {content.types.items.map((type, idx) => {
              const IconComponent = type.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-[#E2EAE5] overflow-hidden flex flex-col justify-between shadow-xs hover:shadow-md hover:border-[#1A5F3F]/40 transition-all"
                >
                  {type.image && (
                    <div className="h-52 overflow-hidden relative">
                      <img
                        src={type.image}
                        alt={type.imageAlt}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <span className="absolute top-3 left-3 text-xs font-bold px-3 py-1 bg-[#1A5F3F] text-white rounded-full shadow-xs">
                        {type.tag}
                      </span>
                    </div>
                  )}

                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                    <div>
                      {!type.image && (
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-xs font-bold px-3 py-1 bg-[#1A5F3F] text-white rounded-full">
                            {type.tag}
                          </span>
                          <div className="w-10 h-10 rounded-full bg-[#EAF5EE] text-[#1A5F3F] flex items-center justify-center">
                            <IconComponent className="w-5 h-5" />
                          </div>
                        </div>
                      )}
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="text-2xl font-bold text-[#1A1A1A]">{type.name}</h3>
                        {type.image && (
                          <div className="w-8 h-8 rounded-full bg-[#EAF5EE] text-[#1A5F3F] flex items-center justify-center">
                            <IconComponent className="w-4 h-4" />
                          </div>
                        )}
                      </div>
                      <p className="text-xs font-semibold text-[#5F5F5F] uppercase tracking-wider mb-4">{type.subtitle}</p>
                      <p className="text-gray-700 text-sm leading-relaxed mb-4">{type.description}</p>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">{type.details}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {content.types.note && (
            <div className="mt-8 p-5 sm:p-6 rounded-2xl bg-white border border-[#E2EAE5] shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start sm:items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#EAF5EE] text-[#1A5F3F] flex items-center justify-center shrink-0">
                  <Info className="w-5 h-5" />
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {content.types.note}
                </p>
              </div>
              {content.types.noteLinkHref && (
                <Link
                  href={content.types.noteLinkHref}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1A5F3F] hover:text-[#144930] bg-[#EAF5EE] hover:bg-[#d9ede0] px-4 py-2.5 rounded-xl transition-colors shrink-0 self-start sm:self-center"
                >
                  <span>{content.types.noteLinkText || "Learn more"}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              )}
            </div>
          )}
        </div>
      </section>

      {/* 6. POTENTIAL BENEFITS */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1A1A1A] mb-4">
              {content.benefits.title}
            </h2>
            <div className="w-12 h-1 bg-[#1A5F3F] rounded-full mx-auto mb-4"></div>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
              {content.benefits.intro}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {content.benefits.paragraphs.map((para, idx) => (
              <div
                key={idx}
                className="bg-[#F9FAF8] p-6 sm:p-7 rounded-2xl border border-[#EDF2EE] hover:border-[#1A5F3F]/30 hover:shadow-xs transition-all flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#EAF5EE] text-[#1A5F3F] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{para}</p>
              </div>
            ))}
          </div>

          {/* Honest Caveats Box */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#F5F1EA] border border-[#E9E2D6] shadow-xs">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-[#C9A547] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-lg font-bold text-[#1A1A1A] mb-2">{content.benefits.caveatsTitle}</h4>
                <ul className="space-y-2 text-sm sm:text-base text-gray-700">
                  {content.benefits.caveats.map((c, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#1A5F3F] font-bold">•</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. WHO MAY CONSIDER */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#F9FAF8] border-y border-[#EDF2EE]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1A1A1A] mb-4">
              {content.whoMayConsider.title}
            </h2>
            <div className="w-12 h-1 bg-[#1A5F3F] rounded-full mx-auto mb-4"></div>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
              {content.whoMayConsider.intro}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
            {content.whoMayConsider.points.map((point, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-[#E5ECE7] flex items-start gap-3.5 shadow-xs hover:border-[#1A5F3F]/30 transition-all"
              >
                <div className="w-6 h-6 rounded-full bg-[#EAF5EE] text-[#1A5F3F] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{point}</p>
              </div>
            ))}
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E2EAE5] shadow-xs space-y-3 text-sm sm:text-base text-gray-700 leading-relaxed">
            <p><strong className="text-[#1A1A1A] text-base">Practical Context:</strong> {content.whoMayConsider.example}</p>
            <p className="text-xs sm:text-sm text-gray-500 italic">{content.whoMayConsider.note}</p>
          </div>
        </div>
      </section>

      {/* 8. WHO SHOULD AVOID OR POSTPONE */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 text-red-700 text-xs font-bold uppercase tracking-wider mb-3">
              <AlertTriangle className="w-3.5 h-3.5" />
              Safety & Contraindications
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1A1A1A] mb-4">
              {content.whoShouldAvoid.title}
            </h2>
            <div className="w-12 h-1 bg-[#1A5F3F] rounded-full mx-auto mb-4"></div>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
              {content.whoShouldAvoid.intro}
            </p>
          </div>

          <div className="mb-4 font-semibold text-[#1A1A1A] text-base">
            {content.whoShouldAvoid.warning}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
            {content.whoShouldAvoid.contraindications.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#FFFDFD] p-5 sm:p-6 rounded-2xl border border-red-100 hover:border-red-200 transition-all flex items-start gap-3.5"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-red-600 shrink-0 mt-2"></div>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{item}</p>
              </div>
            ))}
          </div>

          <div className="p-6 rounded-2xl bg-[#F5F1EA] border-l-4 border-[#1A5F3F] text-sm text-gray-800 leading-relaxed">
            {content.whoShouldAvoid.advice}
          </div>
        </div>
      </section>

      {/* 9. WHAT HAPPENS DURING A SESSION */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#F9FAF8] border-y border-[#EDF2EE]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1A1A1A] mb-4">
              {content.sessionSteps.title}
            </h2>
            <div className="w-12 h-1 bg-[#1A5F3F] rounded-full mx-auto mb-4"></div>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
              {content.sessionSteps.intro}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {content.sessionSteps.steps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-[#E5EFE8] shadow-xs hover:border-[#1A5F3F]/30 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-full bg-[#1A5F3F] text-white font-bold text-sm flex items-center justify-center shadow-xs mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{step.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-5 rounded-2xl bg-white border border-[#E2EAE5] text-sm text-gray-700 flex items-start gap-3 shadow-xs">
            <Sun className="w-5 h-5 text-[#C9A547] shrink-0 mt-0.5" />
            <div>
              <strong className="text-gray-900 block font-semibold mb-0.5">Dubai Climate & Comfort Consideration</strong>
              <p>{content.sessionSteps.dubaiNote}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. DURATION & FREQUENCY */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-[#F9FAF8] p-8 rounded-2xl border border-[#EDF2EE] shadow-xs">
            <div className="w-12 h-12 rounded-xl bg-[#EAF5EE] text-[#1A5F3F] flex items-center justify-center mb-5">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3">
              {content.durationAndFrequency.durationTitle}
            </h3>
            <p className="text-gray-700 text-base leading-relaxed">
              {content.durationAndFrequency.durationText}
            </p>
          </div>

          <div className="bg-[#F9FAF8] p-8 rounded-2xl border border-[#EDF2EE] shadow-xs">
            <div className="w-12 h-12 rounded-xl bg-[#EAF5EE] text-[#1A5F3F] flex items-center justify-center mb-5">
              <Calendar className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3">
              {content.durationAndFrequency.frequencyTitle}
            </h3>
            <p className="text-gray-700 text-base leading-relaxed">
              {content.durationAndFrequency.frequencyText}
            </p>
          </div>
        </div>
      </section>

      {/* 11. COMPARISON: KIZHI VS AYURVEDIC MASSAGE */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#F5F1EA]/60 border-y border-[#E9E2D6]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1A1A1A] mb-4">
              {content.comparison.title}
            </h2>
            <div className="w-12 h-1 bg-[#1A5F3F] rounded-full mx-auto mb-4"></div>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
              {content.comparison.intro}
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-[#E2EAE5] bg-white shadow-xs mb-6">
            <table className="w-full text-left text-sm sm:text-base border-collapse">
              <thead>
                <tr className="bg-[#F3F8F5] border-b border-[#EDF2EE]">
                  <th className="p-4 sm:p-5 font-bold text-[#1A5F3F] w-1/3">Key Dimension</th>
                  <th className="p-4 sm:p-5 font-bold text-[#1A5F3F] w-2/3 border-l border-[#EDF2EE]">Ayurvedic Massage vs Kizhi Comparison</th>
                </tr>
              </thead>
              <tbody>
                {content.comparison.items.map((row, idx) => (
                  <tr key={idx} className="border-b border-[#EDF2EE] last:border-0 hover:bg-[#F9FCFA]">
                    <td className="p-4 sm:p-5 font-semibold text-gray-900 bg-[#F9FAF8] border-r border-[#EDF2EE] align-top">
                      {row.aspect}
                    </td>
                    <td className="p-4 sm:p-5 text-gray-700 leading-relaxed">
                      {row.text}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-center text-sm sm:text-base text-gray-600">
            <span>{content.comparison.footerNote} </span>
            <Link href={content.comparison.linkHref} className="text-[#1A5F3F] font-bold underline hover:text-[#144930]">
              {content.comparison.linkText}
            </Link>
          </div>
        </div>
      </section>

      {/* 12. HOW TO CHOOSE A CLINIC IN DUBAI */}
      
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1A1A1A] mb-4">
              {content.chooseClinic.title}
            </h2>
            <div className="w-12 h-1 bg-[#1A5F3F] rounded-full mx-auto mb-4"></div>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
              {content.chooseClinic.intro}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {content.chooseClinic.criteria.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#F9FAF8] p-5 rounded-xl border border-[#E5ECE7] flex items-start gap-3"
              >
                <div className="w-6 h-6 rounded-full bg-[#EAF5EE] text-[#1A5F3F] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>

          <div className="p-6 rounded-2xl bg-amber-50/70 border-l-4 border-amber-500 text-sm text-amber-950 mb-6">
            {content.chooseClinic.warning}
          </div>

          <div className="text-center text-sm text-gray-600 mb-4">
            {content.chooseClinic.footerNote}
          </div>

          {/* Related Links */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {content.chooseClinic.links.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#EAF5EE] text-[#1A5F3F] text-sm font-semibold hover:bg-[#1A5F3F] hover:text-white transition-colors"
              >
                <span>{link.text}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 13. WHY PROFESSIONAL ASSESSMENT MATTERS */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#F9FAF8] border-y border-[#EDF2EE]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] mb-3">
              {content.whyAssessmentMatters.title}
            </h2>
            <div className="w-12 h-1 bg-[#1A5F3F] rounded-full mx-auto"></div>
          </div>
          <div className="bg-white p-8 sm:p-10 rounded-2xl border border-[#E2EAE5] space-y-4 text-gray-700 text-base leading-relaxed shadow-xs">
            <p>{content.whyAssessmentMatters.p1}</p>
            <p>{content.whyAssessmentMatters.p2}</p>
            <div className="p-5 rounded-xl bg-[#EAF5EE] border-l-4 border-[#1A5F3F] font-medium text-gray-900">
              {content.whyAssessmentMatters.p3}
            </div>
          </div>
        </div>
      </section>

      {/* 15. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#F9FAF8] border-y border-[#EDF2EE]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1A1A1A] mb-4">
              Frequently Asked Questions About Kizhi Therapy in Dubai
            </h2>
            <div className="w-12 h-1 bg-[#1A5F3F] rounded-full mx-auto mb-4"></div>
            <p className="text-gray-700 text-sm sm:text-base">
              Clear answers to the most common questions about Ayurvedic herbal pouch therapy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {content.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-2xs transition-all h-fit"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full px-5 sm:px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
                >
                  <span className="font-bold text-sm sm:text-base text-[#1A1A1A]">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 transition-transform shrink-0 ${
                      activeFaq === idx ? 'rotate-180 text-[#1A5F3F]' : ''
                    }`}
                  />
                </button>
                {activeFaq === idx && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-gray-700 text-xs sm:text-sm leading-relaxed border-t border-gray-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 16. CLINICAL STAFF SECTION */}
      <DoctorsSection />

      {/* 17. CONTENT REVIEW BADGE */}
      <ContentReviewBadge
        doctorName="Dr. Shamna Keloth Meethal"
        pageSlug="kizhi-therapy-dubai"
        lastReviewed="2026-01-12"
      />

      {/* 18. BOOK CONSULTATION SECTION */}
      <BookConsultation />

      {/* Sticky Bottom Bar on Mobile */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#E9E2D6] shadow-lg z-40 p-3 sm:p-4 md:hidden">
        <div className="flex items-center justify-between gap-3">
          <div className="text-left">
            <p className="text-xs font-bold text-[#1A1A1A]">Kizhi Therapy Dubai</p>
            <p className="text-[10px] text-[#5F5F5F]">Ayurvedic Herbal Pouches</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleWhatsApp}
              className="p-2.5 rounded-lg bg-[#25D366] text-white shadow-xs"
              aria-label="WhatsApp">
              <MessageCircle className="w-5 h-5" />
            </button>
            <button
              onClick={handleBookAppointment}
              className="flex items-center gap-1.5 bg-[#1A5F3F] text-white px-4 py-2.5 rounded-lg font-bold text-xs shadow-md">
              <Calendar className="w-4 h-4" />
              <span>Book Assessment</span>
            </button>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button (Desktop) */}
      <button
        onClick={handleWhatsApp}
        className="hidden md:flex fixed bottom-6 right-6 z-50 items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
      </button>
    </Layout>
  );
}
