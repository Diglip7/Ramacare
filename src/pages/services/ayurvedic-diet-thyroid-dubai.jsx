import React, { useState } from 'react';
import Layout from '../../../components/Layout';
import Head from "next/head";
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';

const content = {
  hero: {
    badge: 'Ayurvedic Diet for Thyroid',
    title: 'Ayurvedic Diet for Thyroid in Dubai: Rebalancing Your Metabolism Naturally',
    description: 'Thyroid dysfunction—whether it manifests as unexplained weight gain, chronic fatigue, or thinning hair—is a significant concern for many women and men in the UAE. An Ayurvedic Diet for Thyroid in Dubai offers a personalized, holistic alternative to lifelong symptom management by addressing the "Dosha" imbalances at the root of hormonal health.',
    summary: {
      title: 'The "Answer-First" Summary for Thyroid Health',
      content: 'Can Ayurveda help with Thyroid issues in Dubai? <strong className="text-[#1A1A1A]">Yes.</strong> Ayurveda views thyroid disorders (specifically Hypothyroidism) as a Kapha and Medha (fat tissue) imbalance that slows the Agni (metabolism). By incorporating "warming" spices like ginger and black pepper, iodine-rich natural foods, and adaptogenic herbs like Ashwagandha, residents can improve energy levels and support glandular function within 2 to 4 months of clinical guidance.'
    },
    ctaButtons: {
          primary: {
            text: 'Book Thyroid Consultation',
            icon: 'calendar',
            link: '/book-appointment'
          },
      secondary: {
        text: 'WhatsApp Consultation',
        phone: '971566597878',
        icon: 'whatsapp'
      }
    },
    image: {
      src: '/images/th1.jpg',
      alt: 'Ayurvedic Diet for Thyroid in Dubai'
    }
  },
  localContext: {
    title: '1. The "Dubai Thyroid" Connection: Why It Happens Here',
    items: [
      {
        id: 1,
        icon: 'Activity',
        title: 'The Stress-Thyroid Axis:',
        description: 'The fast-paced DIFC/Business Bay lifestyle keeps cortisol high, which directly suppresses the conversion of T4 to T3 (the active thyroid hormone).'
      },
      {
        id: 2,
        icon: 'Sun',
        title: 'Vitamin D & Iodine Gaps:',
        description: 'Despite the UAE sun, many stay indoors, and a diet of processed "mall food" often lacks the trace minerals necessary for thyroid health.'
      },
      {
        id: 3,
        icon: 'Wind',
        title: 'The AC "Cold" Factor:',
        description: 'Constant air conditioning can further dampen an already sluggish metabolism in hypothyroid patients, leading to increased "dampness" or Ama in the body.'
      }
    ]
  },
  dietaryStrategies: {
    title: '2. Dietary Strategies for Hypothyroidism (Kapha Imbalance)',
    description: 'If you feel sluggish, cold, and are gaining weight easily, your diet needs to be "stimulating" and "warming."',
    favor: {
      title: 'Foods to Favor',
      subtitle: 'The "Metabolic Spark" List',
      locationInfo: 'Available at Waitrose, Spinneys, and Organic Foods & Café:',
      items: [
        {
          title: 'Warming Spices:',
          description: 'Ginger, black pepper, cinnamon, and cloves. These "kindle" the digestive fire and improve cellular metabolism.'
        },
        {
          title: 'Iodine-Rich Whole Foods:',
          description: 'Seaweed, saltwater fish (local UAE varieties like Hamour in moderation), and Himalayan pink salt.'
        },
        {
          title: 'Selenium Sources:',
          description: '2-3 Brazil nuts daily are a "nutrient bomb" for converting thyroid hormones.'
        },
        {
          title: 'Warming Grains:',
          description: 'Buckwheat and Quinoa are lighter and easier to digest than heavy wheat.'
        }
      ]
    },
    avoid: {
      title: 'Foods to Avoid',
      subtitle: 'The "Goitrogen" Alert',
      items: [
        {
          title: 'Raw Cruciferous Veggies:',
          description: 'Broccoli, cabbage, and kale contain goitrogens that can interfere with thyroid function when eaten raw. Tip: Always steam these for at least 5-10 minutes.'
        },
        {
          title: 'Soy Products:',
          description: 'High consumption of soy can block thyroid hormone absorption.'
        },
        {
          title: 'Excessive Cold Water:',
          description: 'Drink warm or room-temperature water infused with ginger to keep the metabolism active.'
        }
      ]
    },
    cta: 'Get Your Personalized Diet Plan'
  },
  adaptogens: {
    title: '3. Ayurvedic Adaptogens for Hormonal Support',
    items: [
      {
        id: 1,
        name: 'Ashwagandha',
        icon: 'Leaf',
        description: 'Known as the "king of adaptogens," Ashwagandha helps regulate TSH (thyroid-stimulating hormone) levels and reduces cortisol, which can interfere with thyroid function.'
      },
      {
        id: 2,
        name: 'Guggulu',
        icon: 'Droplets',
        description: 'A traditional resin used to enhance thyroid function and reduce cholesterol levels often elevated in hypothyroid conditions.'
      },
      {
        id: 3,
        name: 'Kanchanar Guggulu',
        icon: 'Sparkles',
        description: 'Specifically formulated for glandular health, this compound helps reduce swelling and supports healthy thyroid tissue function.'
      }
    ],
    image: {
      src: '/images/th2.jpg', // Placeholder for the herb image
      caption: 'A selection of Ayurvedic herbs for Thyroid health: Ashwagandha root, Ginger, and Guggulu resin'
    },
    cta: 'Consult About Herbal Support'
  },
  faq: {
    title: '4. People Also Ask (PAA) - Thyroid Dubai Edition',
    items: [
      {
        question: 'Can Ayurveda cure thyroid permanently?',
        answer: 'While "cure" is a strong term, many patients experience significant improvement and, in some cases, can reduce or eliminate medication under proper clinical supervision. Ayurveda focuses on rebalancing the root cause—your metabolic fire (Agni) and doshas—rather than just suppressing symptoms. Consistent dietary changes, herbal support, and lifestyle adjustments can lead to sustained hormonal balance.'
      },
      {
        question: 'How long does it take to see results?',
        answer: 'Most patients notice improvements in energy levels, sleep quality, and digestion within 4-6 weeks. Thyroid marker changes (TSH, T3, T4) typically begin to shift within 2-4 months of adherence to the prescribed diet and herbal regimen. It is essential to remain consistent and under professional guidance throughout this period.'
      },
      {
        question: 'What is the best diet for hypothyroidism in Dubai?',
        answer: 'A warming, Kapha-reducing diet that includes ginger, black pepper, seaweed, Brazil nuts, and steamed cruciferous vegetables. Avoid raw salads, cold smoothies, and excessive soy. Prioritize warm, cooked meals and avoid skipping breakfast to maintain metabolic momentum.'
      },
      {
        question: 'Can I continue my thyroid medication while doing Ayurvedic treatment?',
        answer: 'Yes. We never advise discontinuing prescribed medication without consulting your endocrinologist. Ayurvedic treatment works alongside conventional medicine. As your thyroid function improves, your doctor may adjust your dosage accordingly. Always coordinate between your GP and Ayurvedic practitioner.'
      },
      {
        question: 'Is this covered by Dubai health insurance?',
        answer: 'Many insurance providers in Dubai now cover alternative medicine consultations, including Ayurveda, especially if prescribed by a DHA-licensed practitioner. We recommend checking with your provider (such as Daman, Nextcare, or AXA) regarding coverage for complementary therapies.'
      },
      {
        question: 'Where is RamaCare Polyclinic located?',
        answer: 'We are based in Jumeirah 1, Dubai, with easy access from Sheikh Zayed Road and Downtown Dubai. Our clinic offers both in-person consultations and telemedicine appointments for your convenience.'
      }
    ]
  },
  whyConsult: {
    title: '5. Why Consult a Specialist at RamaCare Polyclinic?',
    items: [
      {
        id: 1,
        title: 'DHA-Licensed Practitioners',
        icon: 'Award',
        description: 'All our Ayurvedic doctors are fully licensed by the Dubai Health Authority, ensuring world-class standards and patient safety.'
      },
      {
        id: 2,
        title: 'Prakriti Mapping',
        icon: 'Users',
        description: 'We start with a comprehensive constitutional analysis (Prakriti) to customize your treatment plan based on your unique body type and imbalances.'
      },
      {
        id: 3,
        title: 'Holistic Integration',
        icon: 'Heart',
        description: 'We coordinate with your endocrinologist and GP to ensure seamless care, combining the best of modern medicine and ancient wisdom.'
      }
    ],
     footerInfo: 'DHA Licensed • Insurance Accepted • Jumeirah 1'
  },
  authorityFooter: {
    title: 'The "Authority" Footer',
    description: 'Regain your energy and take control of your metabolism with a professional Ayurvedic Diet Plan Dubai. Our Jumeirah-based team is ready to guide you back to balance.',
    cta: 'Book Your Thyroid Assessment in Jumeirah Today',
    details: [
      { icon: 'MapPin', text: 'Located in Jumeirah 1, Dubai' },
      { icon: 'Activity', text: 'Available for in-person and telemedicine consultations' },
      { icon: 'Award', text: 'DHA-Licensed • Insurance Accepted' }
    ]
  },
  popup: {
    title: 'Still struggling with thyroid symptoms?',
    description: 'Don\'t leave without taking the first step toward better health. Book a consultation with our DHA-licensed Ayurvedic specialists today.',
    ctaPrimary: 'Book Consultation Now',
    ctaSecondary: 'WhatsApp Us',
    footer: 'Located in Jumeirah 1 • DHA Licensed • Insurance Accepted'
  }
};

export default function AyurvedicDietThyroidPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 3000); // Show popup after 3 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout>
      {/* Sticky Floating Button */}
      <div className="fixed top-1/2 right-0 -translate-y-1/2 z-[999] hidden md:block">
        <Link href="/book-appointment">
          <motion.div
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            className="bg-[#1F5E4B] text-white px-6 py-4 rounded-l-2xl flex items-center gap-3 shadow-2xl hover:bg-[#164435] transition-all group cursor-pointer"
          >
            <span className="font-bold whitespace-nowrap">Book Assessment</span>
            <LucideIcons.ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </motion.div>
        </Link>
      </div>

      <Head>
        <title key="title">Ayurvedic Diet for Thyroid Dubai | Natural Hormonal Balance | RamaCare</title>
        <meta name="description" content="Restore your metabolism naturally. Our DHA-licensed Ayurvedic thyroid diet plans in Dubai target the root cause of Hypothyroidism and Hyperthyroidism. Visit RamaCare Polyclinic in Jumeirah 1." key="description" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
{
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  "@id": "https://ramacarepolyclinic.ae/services/ayurvedic-diet-thyroid-dubai/#procedure",
  "name": "Ayurvedic Diet for Thyroid in Dubai",
  "alternateName": "Natural Thyroid Management Program",
  "url": "https://ramacarepolyclinic.ae/services/ayurvedic-diet-thyroid-dubai/",
  "mainEntityOfPage": "https://ramacarepolyclinic.ae/services/ayurvedic-diet-thyroid-dubai/",
  "description": "Restore your metabolism naturally. Our DHA-licensed Ayurvedic thyroid diet plans in Dubai target the root cause of Hypothyroidism and Hyperthyroidism. Visit RamaCare Polyclinic in Jumeirah 1.",
  "procedureType": "Therapeutic dietary consultation",
  "bodyLocation": "Whole body",
  "howPerformed": "The treatment includes an Ayurvedic consultation to assess body constitution (dosha) and thyroid function, followed by personalized diet recommendations using traditional Ayurvedic nutrition principles tailored to hormonal balance.",
  "provider": {
    "@type": "MedicalClinic",
    "name": "RamaCare Polyclinic – Ayurvedic & Wellness Department",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "12 Al Dhiyafah Rd - Jumeirah Terrace Building, Ground Floor, Jumeirah 1",
      "addressLocality": "Jumeirah 1",
      "addressRegion": "Dubai",
      "postalCode": "393558",
      "addressCountry": "AE"
    },
    "telephone": "+971 56 659 7878",
    "areaServed": {
      "@type": "City",
      "name": "Dubai"
    },
    "priceRange": "$$"
  }
}
            `,
          }}
        />
      </Head>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F5F1EA] to-white py-12 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#1A1A1A] leading-tight mb-8">
                {content.hero.title}
              </h1>
              <p className="text-base md:text-lg text-[#5F5F5F] leading-relaxed mb-8">
                {content.hero.description}
              </p>

              {content.hero.summary && (
                <div className="bg-[#E9E2D6] p-6 md:p-8 rounded-lg space-y-4 mb-8">
                  <h3 className="text-xl md:text-2xl font-bold text-[#1F5E4B] mb-4">
                  {content.hero.summary.title}
                </h3>
                <p 
                  className="text-[#1A1A1A] leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: content.hero.summary.content }}
                />
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4">
              {content.hero.ctaButtons?.primary && (
                <Link 
                  href={content.hero.ctaButtons.primary.link}
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#1F5E4B] text-white rounded-xl font-bold text-lg hover:bg-[#164435] transition-colors"
                >
                  {content.hero.ctaButtons.primary.text}
                </Link>
              )}
              {content.hero.ctaButtons?.secondary && (
                <a target="_blank" rel="nofollow noopener noreferrer" 
                  href={`https://wa.me/${content.hero.ctaButtons.secondary.phone}`}
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#1F5E4B] border-2 border-[#1F5E4B] rounded-xl font-bold text-lg hover:bg-emerald-50 transition-colors gap-2"
                >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    {content.hero.ctaButtons.secondary.text}
                  </a>
                )}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={content.hero.image.src}
                  alt={content.hero.image.alt}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Local Context Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-12"
          >
            {content.localContext.title}
          </motion.h2>

          <div className="space-y-8">
            {content.localContext.items.map((item, index) => {
              const Icon = LucideIcons[item.icon] || LucideIcons.Activity;
              
              return (                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6 items-start"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-[#1F5E4B] rounded-full flex items-center justify-center text-white">
                    <Icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-lg text-[#4A4A4A] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Dietary Strategies Section */}
      <section className="py-16 md:py-24 bg-[#F5F1EA]">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-4">
              {content.dietaryStrategies.title}
            </h2>
            <p className="text-lg md:text-xl text-[#4A4A4A]">
              {content.dietaryStrategies.description}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Foods to Favor */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-emerald-100"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full border-2 border-[#1F5E4B] flex items-center justify-center text-[#1F5E4B]">
                  <LucideIcons.Check size={20} />
                </div>
                <h3 className="text-2xl font-bold text-[#1A1A1A]">{content.dietaryStrategies.favor.title}</h3>
              </div>
              <p className="text-[#4A4A4A] italic mb-2">{content.dietaryStrategies.favor.subtitle}</p>
              <p className="text-sm text-[#666] mb-6">{content.dietaryStrategies.favor.locationInfo}</p>
              
              <div className="space-y-6">
                {content.dietaryStrategies.favor.items.map((item, idx) => (
                  <div key={idx} className="pl-4 border-l-4 border-[#1F5E4B]">
                    <h4 className="font-bold text-[#1A1A1A] mb-1">{item.title}</h4>
                    <p className="text-[#4A4A4A] leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Foods to Avoid */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-rose-100"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full border-2 border-rose-600 flex items-center justify-center text-rose-600">
                  <LucideIcons.X size={20} />
                </div>
                <h3 className="text-2xl font-bold text-[#1A1A1A]">{content.dietaryStrategies.avoid.title}</h3>
              </div>
              <p className="text-[#4A4A4A] italic mb-6">{content.dietaryStrategies.avoid.subtitle}</p>
              
              <div className="space-y-6">
                {content.dietaryStrategies.avoid.items.map((item, idx) => (
                  <div key={idx} className="pl-4 border-l-4 border-slate-300">
                    <h4 className="font-bold text-[#1A1A1A] mb-1">{item.title}</h4>
                    <p className="text-[#4A4A4A] leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="text-center">
            <Link 
              href="/book-appointment"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#1F5E4B] text-white rounded-xl font-bold text-lg hover:bg-[#164435] transition-colors shadow-lg"
            >
              {content.dietaryStrategies.cta}
            </Link>
          </div>
        </div>
      </section>

      {/* Adaptogens Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-12"
          >
            {content.adaptogens.title}
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {content.adaptogens.items.map((item, index) => {
              const Icon = LucideIcons[item.icon] || LucideIcons.Activity;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-[#F5F1EA]/50 p-8 rounded-3xl text-center border border-transparent hover:border-[#1F5E4B] transition-all"
                >
                  <div className="w-16 h-16 bg-[#1F5E4B] rounded-full flex items-center justify-center text-white mx-auto mb-6">
                    <Icon size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1F5E4B] mb-4">{item.name}</h3>
                  <p className="text-[#4A4A4A] leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-xl bg-[#F5F1EA]">
              <div className="relative aspect-[21/9] w-full">
                <Image
                  src={content.adaptogens.image.src}
                  alt="Ayurvedic herbs for Thyroid"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-[#EAE4D3] py-4 px-8 text-center text-[#4A4A4A] text-sm italic">
                {content.adaptogens.image.caption}
              </div>
            </div>
          </motion.div>

          <div className="text-center">
            <Link 
              href="/book-appointment"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#1F5E4B] text-white rounded-xl font-bold text-lg hover:bg-[#164435] transition-colors shadow-lg"
            >
              {content.adaptogens.cta}
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-[#F5F1EA]">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-12 text-center md:text-left"
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
                transition={{ delay: idx * 0.05 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-bold text-[#1A1A1A]">{item.question}</span>
                  <LucideIcons.ChevronDown 
                    size={24} 
                    className={`text-[#1F5E4B] transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`}
                  />
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: openFaq === idx ? 'auto' : 0, opacity: openFaq === idx ? 1 : 0 }}
                  className="overflow-hidden"
                >
                  <div className="px-8 pb-6 text-[#4A4A4A] leading-relaxed border-t border-gray-100 pt-4">
                    {item.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Consult Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-16 text-center"
          >
            {content.whyConsult.title}
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {content.whyConsult.items.map((item, idx) => {
              const Icon = LucideIcons[item.icon] || LucideIcons.Award;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-[#F5F1EA] p-8 rounded-2xl text-center border border-transparent hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-[#1F5E4B] rounded-full flex items-center justify-center text-white mx-auto mb-6">
                    <Icon size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1F5E4B] mb-4">{item.title}</h3>
                  <p className="text-[#4A4A4A] leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#E9E2D6] py-4 px-8 rounded-lg flex flex-wrap items-center justify-center gap-6 text-[#1F5E4B] text-lg"
          >
            <div className="flex items-center gap-2">
              <LucideIcons.Award size={20} />
              <span className="font-medium text-lg">DHA Licensed</span>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-[#1F5E4B]/30 hidden sm:block"></div>
            <div className="flex items-center gap-2">
              <LucideIcons.ShieldCheck size={20} />
              <span className="font-medium text-lg">Insurance Accepted</span>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-[#1F5E4B]/30 hidden sm:block"></div>
            <div className="flex items-center gap-2">
              <LucideIcons.MapPin size={20} />
              <span className="font-medium text-lg">Jumeirah 1</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Authority Footer Section */}
      <section id="book-now" className="py-20 md:py-28 bg-[#1F5E4B] text-white text-center relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-white blur-[120px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-white blur-[120px]"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-white"
          >
            {content.authorityFooter.title}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-white/90 leading-relaxed mb-12"
          >
            {content.authorityFooter.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <Link
              href="/book-appointment"
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-[#1F5E4B] rounded-lg font-bold text-xl hover:bg-emerald-50 transition-all shadow-2xl"
            >
              <LucideIcons.Calendar className="text-[#1F5E4B]" size={28} />
              {content.authorityFooter.cta}
            </Link>
          </motion.div>

          <div className="pt-8 space-y-2 text-white/70">
            {content.authorityFooter.details.map((detail, idx) => {
              const Icon = LucideIcons[detail.icon] || LucideIcons.Activity;
              return (
                <div key={idx} className="flex items-center justify-center gap-2">
                  <Icon size={18} />
                  <p className="text-base">{detail.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Exit/Intent Popup */}
      {showPopup && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowPopup(false)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="relative bg-white rounded-[32px] shadow-2xl max-w-lg w-full overflow-hidden text-center p-8 md:p-12"
          >
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <LucideIcons.X size={24} />
            </button>

            <div className="w-20 h-20 bg-[#1F5E4B] rounded-3xl flex items-center justify-center text-white mx-auto mb-8 shadow-lg shadow-emerald-200">
              <LucideIcons.Calendar size={40} />
            </div>

            <h3 className="text-2xl md:text-[30px] font-bold text-[#1A1A1A] mb-6 leading-tight">
              {content.popup.title}
            </h3>
            
            <p className="text-base text-[#5F5F5F] mb-6 leading-relaxed">
              {content.popup.description}
            </p>

            <div className="space-y-3">
              <Link
                href="/book-appointment"
                onClick={() => setShowPopup(false)}
                className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-[#1F5E4B] text-white rounded-lg font-bold text-lg hover:bg-[#164435] transition-all shadow-lg">
                <LucideIcons.Calendar size={20} />
                {content.popup.ctaPrimary}
              </Link>
              <a rel="nofollow noopener noreferrer" target="_blank" href="https://wa.me/971566597878"
                className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-[#25D366] text-white rounded-lg font-bold text-lg hover:bg-[#1ebc57] transition-all shadow-lg"
              >
                <LucideIcons.MessageCircle size={20} />
                {content.popup.ctaSecondary}
              </a>
            </div>

            <p className="mt-6 text-sm text-[#5F5F5F] font-medium">
              {content.popup.footer}
            </p>
          </motion.div>
        </div>
      )}
    </Layout>
  );
}
