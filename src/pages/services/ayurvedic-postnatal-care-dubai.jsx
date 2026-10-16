import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../../components/Layout';
import {
  MessageCircle,
  Phone,
  Clock,
  ShieldAlert,
  AlertTriangle,
  ChevronDown,
  ExternalLink,
  Activity,
  HeartPulse,
  Stethoscope,
  CheckSquare,
  ArrowRight,
  Search,
  Baby,
  Heart,
  Droplets,
  Calendar,
  Sparkles,
  Utensils
} from 'lucide-react';

const SITE = 'https://ramacarepolyclinic.ae';
const PATH = '/services/ayurvedic-postnatal-care-dubai/';
const URL = `${SITE}${PATH}`;
const TITLE = 'Ayurvedic Postnatal Care in Dubai | RamaCare';
const DESCRIPTION =
  'Explore traditional Ayurvedic postnatal care and its limits. Contact RamaCare Polyclinic in Jumeirah 1, Dubai, to ask about available services.';
const OG_IMAGE = `${SITE}/images/postnatal-consultation-jumeirah-dubai.webp`;

export const faqs = [
  {
    q: 'What is Ayurvedic postnatal care?',
    a: 'It is a set of traditional practices for the weeks after childbirth, usually covering rest, food, gentle body care and daily routines. It is meant to complement medical care, not replace it.',
  },
  {
    q: 'What does Sutika Paricharya mean?',
    a: 'Sutika is a woman who has recently given birth, and paricharya means care or regimen. Together they describe the traditional postnatal care regimen in Ayurveda [1].',
  },
  {
    q: 'When can a mother consider traditional postnatal care?',
    a: "There is no single start date. It depends on how you gave birth, how you are recovering and your clinician's advice. Ask your maternity team first.",
  },
  {
    q: 'Is Ayurvedic massage suitable after a caesarean birth?',
    a: 'Not automatically. Avoid pressure over the incision until the clinician who treated you confirms it is appropriate.',
  },
  {
    q: 'What foods are traditionally recommended after childbirth?',
    a: 'Traditional sources describe warm, freshly cooked, easily digested meals, often with ghee [1]. You still need enough energy, protein, fluids and variety, and any restriction should be agreed with your clinician.',
  },
  {
    q: 'Are Ayurvedic herbs safe while breastfeeding?',
    a: 'Not all herbs have been adequately studied in breastfeeding, and products can vary in content [9][10]. Check any herb or supplement with a healthcare professional first.',
  },
  {
    q: 'Can Ayurvedic postnatal care increase breast milk supply?',
    a: 'There is no reliable evidence that it does, and none can be promised. If feeding is difficult, ask a qualified lactation professional for help [11].',
  },
  {
    q: 'Can traditional postnatal care replace a medical check-up?',
    a: 'No. WHO recommends several postnatal check-ups in the first six weeks, and traditional care does not replace them [6].',
  },
  {
    q: 'What symptoms after childbirth require urgent medical attention?',
    a: 'Heavy bleeding, chest pain, breathlessness, severe headache, fainting, severe abdominal pain, a painful swollen leg, a worsening wound, fever, or thoughts of self-harm. See the safety section above.',
  },
  {
    q: 'Does RamaCare Polyclinic offer Ayurvedic postnatal care in Dubai?',
    a: 'This has not been confirmed on this page. Please contact the clinic to ask what is currently available.',
  },
  {
    q: 'How can I enquire about postpartum care in Jumeirah 1?',
    a: 'Call +971 4 286 2006 or message +971 56 659 7878 on WhatsApp. Bring your discharge summary and a list of any medicines and supplements.',
  },
];

const references = [
  {
    id: 1,
    title: 'Charak Samhita online. Sutika Paricharya.',
    url: 'https://www.carakasamhitaonline.com/index.php/Sutika_Paricharya',
  },
  {
    id: 2,
    title: 'Critical Analysis on Prescribed Guidelines of Sutika Paricharya in Ayurveda. Nepjol.',
    url: 'https://nepjol.info/index.php/jac/article/view/90596',
  },
  {
    id: 3,
    title: 'Role of Sutika Paricharya in postpartum recovery: a case study. Journal of Pharmacognosy and Phytochemistry, 2026.',
    url: 'https://www.phytojournal.com/archives/2026/vol15issue2/PartF/15-2-135-447.pdf',
  },
  {
    id: 4,
    title: 'Clinical evaluation of Saubhagyashunthi Paka and Dashamularishta in Sutika Paricharya: study protocol. Journal of Research in Ayurvedic Sciences, 2019.',
    url: 'https://www.jaypeejournals.com/abstractArticleContentBrowse/JRAS/56/3/4/22404/abstractArticle/Article',
  },
  {
    id: 5,
    title: 'World Health Organization. WHO Recommendations on Postnatal Care of the Mother and Newborn.',
    url: 'https://www.ncbi.nlm.nih.gov/books/NBK190090/',
  },
  {
    id: 6,
    title: 'MIDIRS. WHO publish worldwide guidance on supporting women and babies postnatally, April 2022.',
    url: 'https://midirs.org/latest-news/news/2022/who-publish-worldwide-guidance-on-supporting-women-and-babies-postnatally/',
  },
  {
    id: 7,
    title: 'Summary table of WHO postnatal care recommendations. Global Health Action, 2015.',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4563099/table/T0001',
  },
  {
    id: 8,
    title: 'US Centers for Disease Control and Prevention. Hear Her campaign: urgent maternal warning signs.',
    url: 'https://www.cdc.gov/hearher/about-the-campaign/index.html',
  },
  {
    id: 9,
    title: 'Drugs and Lactation Database (LactMed). Dietary supplements. US National Library of Medicine.',
    url: 'https://www.ncbi.nlm.nih.gov/books/NBK501817/',
  },
  {
    id: 10,
    title: 'Safety of Popular Herbal Supplements in Lactating Women. Journal of Human Lactation.',
    url: 'https://journals.sagepub.com/doi/full/10.1177/0890334415580580',
  },
  {
    id: 11,
    title: 'Systematic Review of the Efficacy of Herbal Galactogogues. University of Illinois Chicago.',
    url: 'https://indigo.uic.edu/articles/journal_contribution/Systematic_Review_of_the_Efficacy_of_Herbal_Galactogogues/10755554/1/files/19267043.pdf',
  },
  {
    id: 12,
    title: 'A review of herbal and pharmaceutical galactagogues for breast-feeding.',
    url: 'https://core.ac.uk/works/42905241',
  },
  {
    id: 13,
    title: 'What is a galactagogue? UF/IFAS Extension.',
    url: 'https://ask.ifas.ufl.edu/publication/FS466',
  },
];

export default function AyurvedicPostnatalCareDubai() {
  const [openFaq, setOpenFaq] = useState(null);
  const [faqSearch, setFaqSearch] = useState('');

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/971566597878', '_blank', 'noopener,noreferrer');
  };

  const handleCall = () => {
    window.location.href = 'tel:+97142862006';
  };

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.q.toLowerCase().includes(faqSearch.toLowerCase()) ||
      faq.a.toLowerCase().includes(faqSearch.toLowerCase())
  );

  const schemaMedicalWebPage = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalWebPage',
        '@id': `${URL}#webpage`,
        url: URL,
        name: 'Ayurvedic Postnatal Care in Dubai, Jumeirah 1',
        description: DESCRIPTION,
        inLanguage: 'en-AE',
        isPartOf: { '@id': `${SITE}/#website` },
        about: { '@type': 'Thing', name: 'Postnatal care' },
        audience: { '@type': 'PeopleAudience', audienceType: 'New mothers and families' },
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: `${SITE}/images/postnatal-consultation-jumeirah-dubai.webp`,
        },
        publisher: { '@id': `${SITE}/#clinic` },
        datePublished: '2026-04-15',
        dateModified: '2026-04-15',
        lastReviewed: '2026-04-15',
        reviewedBy: {
          '@type': 'Person',
          name: 'RamaCare Clinical Review Team',
          url: `${SITE}/doctors/`,
        },
        breadcrumb: { '@id': `${URL}#breadcrumb` },
      },
      {
        '@type': 'MedicalClinic',
        '@id': `${SITE}/#clinic`,
        name: 'RamaCare Polyclinic',
        url: `${SITE}/`,
        telephone: '+97142862006',
        email: 'query@ramacarepolyclinic.ae',
        image: `${SITE}/images/postnatal-consultation-jumeirah-dubai.webp`,
        address: {
          '@type': 'PostalAddress',
          streetAddress: '12 Al Dhiyafah Road, Jumeirah Terrace Building, Ground Floor',
          addressLocality: 'Jumeirah 1',
          addressRegion: 'Dubai',
          addressCountry: 'AE',
        },
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '10:00',
          closes: '22:00',
        },
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'customer service',
          telephone: '+971566597878',
          availableLanguage: ['English', 'Malayalam', 'Hindi'],
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${URL}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
          { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE}/services/` },
          { '@type': 'ListItem', position: 3, name: 'Ayurveda in Dubai', item: `${SITE}/services/ayurveda-dubai/` },
          { '@type': 'ListItem', position: 4, name: 'Ayurvedic Postnatal Care in Dubai', item: URL },
        ],
      },
    ],
  };

  const schemaFaqPage = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${URL}#faq`,
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is Ayurvedic postnatal care?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'It is a set of traditional practices for the weeks after childbirth, usually covering rest, food, gentle body care and daily routines. It is meant to complement medical care, not replace it.',
        },
      },
      {
        '@type': 'Question',
        name: 'What does Sutika Paricharya mean?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sutika is a woman who has recently given birth, and paricharya means care or regimen. Together they describe the traditional postnatal care regimen in Ayurveda.',
        },
      },
      {
        '@type': 'Question',
        name: 'When can a mother consider traditional postnatal care?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "There is no single start date. It depends on how you gave birth, how you are recovering and your clinician's advice. Ask your maternity team first.",
        },
      },
      {
        '@type': 'Question',
        name: 'Is Ayurvedic massage suitable after a caesarean birth?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Not automatically. Avoid pressure over the incision until the clinician who treated you confirms it is appropriate.',
        },
      },
      {
        '@type': 'Question',
        name: 'What foods are traditionally recommended after childbirth?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Traditional sources describe warm, freshly cooked, easily digested meals, often with ghee. You still need enough energy, protein, fluids and variety, and any restriction should be agreed with your clinician.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are Ayurvedic herbs safe while breastfeeding?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Not all herbs have been adequately studied in breastfeeding, and products can vary in content. Check any herb or supplement with a healthcare professional first.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can Ayurvedic postnatal care increase breast milk supply?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'There is no reliable evidence that it does, and none can be promised. If feeding is difficult, ask a qualified lactation professional for help.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can traditional postnatal care replace a medical check-up?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. WHO recommends several postnatal check-ups in the first six weeks, and traditional care does not replace them.',
        },
      },
      {
        '@type': 'Question',
        name: 'What symptoms after childbirth require urgent medical attention?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Heavy bleeding, chest pain, breathlessness, severe headache, fainting, severe abdominal pain, a painful swollen leg, a worsening wound, fever, or thoughts of self-harm. See the safety section above.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does RamaCare Polyclinic offer Ayurvedic postnatal care in Dubai?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'This has not been confirmed on this page. Please contact the clinic to ask what is currently available.',
        },
      },
      {
        '@type': 'Question',
        name: 'How can I enquire about postpartum care in Jumeirah 1?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Call +971 4 286 2006 or message +971 56 659 7878 on WhatsApp. Bring your discharge summary and a list of any medicines and supplements.',
        },
      },
    ],
  };

  return (
    <Layout>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href={URL} />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <link rel="alternate" hrefLang="en-ae" href={URL} />
        <link rel="alternate" hrefLang="x-default" href={URL} />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="RamaCare Polyclinic" />
        <meta property="og:locale" content="en_AE" />
        <meta property="og:url" content={URL} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="675" />
        <meta property="og:image:alt" content="Healthcare professional talking with a new mother in a calm consultation room" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <meta name="twitter:image" content={OG_IMAGE} />
        <meta name="twitter:image:alt" content="Healthcare professional talking with a new mother in a calm consultation room" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMedicalWebPage) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFaqPage) }}
        />
      </Head>

      {/* HERO SECTION */}
      <section className="relative bg-[#FAF8F5] pt-10 sm:pt-14 pb-16 sm:pb-24 px-4 sm:px-8 lg:px-12 overflow-hidden">
        <div className="w-full max-w-[1440px] mx-auto">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-xs font-semibold text-stone-500">
              <li>
                <Link href="/" className="hover:text-[#1F5E4B] transition-colors">Home</Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/services/" className="hover:text-[#1F5E4B] transition-colors">Services</Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/services/ayurveda-dubai/" className="hover:text-[#1F5E4B] transition-colors">Ayurveda in Dubai</Link>
              </li>
              <li>/</li>
              <li aria-current="page" className="text-[#1F5E4B] font-bold">
                Ayurvedic Postnatal Care in Dubai
              </li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left 7 Columns: Editorial Title & Verbatim Lead Text */}
            <div className="lg:col-span-7 space-y-6">
              {/* Exact H1 */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[54px] font-extrabold text-[#1A1A1A] tracking-tight leading-[1.14]">
                Ayurvedic Postnatal Care in Dubai, Jumeirah 1
              </h1>

              <div className="w-24 h-1.5 bg-[#1F5E4B] rounded-full"></div>

              {/* Verbatim Intro Paragraphs */}
              <div className="space-y-4 text-stone-800 text-base sm:text-lg leading-relaxed">
                <p>
                  The weeks after a baby is born ask a lot of a new mother. Her body is healing, sleep is broken, feeding is being established and the days rarely follow a plan. Ayurvedic postnatal care is a set of traditional practices meant to support a mother&apos;s wellbeing during this time. They usually include rest, warm and easily digested food, gentle body care and a daily routine shaped around the individual. In Ayurveda, this care is known as Sutika Paricharya.
                </p>

                <p>
                  Recovery looks different for every mother. It depends on how the baby was born, whether there were complications, medical history, how the baby is being fed and how much help is available at home. Traditional care can sit alongside recommended postnatal check-ups, but it does not replace them, and it cannot promise faster recovery, more milk or any particular outcome.
                </p>

                <p>
                  This page explains what traditional postnatal care involves, how it differs from evidence-based maternity care, what to ask before trying any practice, and which symptoms need medical attention first. RamaCare Polyclinic is a DHA-licensed clinic in Jumeirah 1 with an Ayurveda department, and you are welcome to contact the team to ask whether postnatal-related Ayurvedic services are available. This page does not present them as a confirmed service.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#1F5E4B] hover:bg-[#143D31] text-white font-bold text-sm shadow-md hover:shadow-lg transition cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Enquire on WhatsApp</span>
                </button>
                <button
                  type="button"
                  onClick={handleCall}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-stone-50 text-stone-900 border border-stone-300 font-bold text-sm shadow-2xs hover:shadow-xs transition cursor-pointer"
                >
                  <Phone className="w-4 h-4 text-[#1F5E4B]" />
                  <span>Call +971 4 286 2006</span>
                </button>
              </div>
            </div>

            {/* Right 5 Columns: Figure 1 */}
            <div className="lg:col-span-5">
              <figure className="relative bg-white p-3 sm:p-4 rounded-3xl shadow-xl border border-stone-200/80">
                <div className="relative aspect-16/9 rounded-2xl overflow-hidden bg-stone-100">
                  <picture className="w-full h-full block">
                    <source srcSet="/images/postnatal-consultation-jumeirah-dubai.webp" type="image/webp" />
                    <img
                      src="/images/postnatal-consultation-jumeirah-dubai.webp"
                      alt="Healthcare professional talking with a new mother in a calm consultation room"
                      width={1200}
                      height={675}
                      fetchPriority="high"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                  </picture>
                </div>
                <figcaption className="text-center text-xs font-semibold text-stone-600 mt-3 italic">
                  A check-in with a clinician comes first.
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: WHAT IS AYURVEDIC POSTNATAL CARE? */}
      <section id="what-is" className="py-16 sm:py-24 px-4 sm:px-8 lg:px-12 bg-white border-t border-stone-200">
        <div className="w-full max-w-[1440px] mx-auto">
          {/* Centered Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1A1A1A] tracking-tight">
              What Is Ayurvedic Postnatal Care?
            </h2>
            <div className="w-16 h-1 bg-[#1F5E4B] rounded-full mx-auto mt-4"></div>
          </div>

          {/* Full-Width Expansive Container */}
          <div className="w-full bg-[#FAF8F5] rounded-3xl p-8 sm:p-12 lg:p-16 border border-stone-200 shadow-sm">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Left 7 Columns: Classical Regimen Concepts */}
              <div className="lg:col-span-7 space-y-5 text-stone-800 text-base sm:text-lg leading-relaxed">
                <p>
                  Ayurvedic texts call a woman who has just given birth a Sutika, and the postnatal period Sutika Kala. In classical descriptions the period begins after the placenta is delivered, and later scholarly summaries describe the puerperium as lasting about six weeks <sup><a href="#ref-1" className="text-[#1F5E4B] font-bold">[1]</a><a href="#ref-2" className="text-[#1F5E4B] font-bold">[2]</a></sup>. Paricharya means care or regimen, so Sutika Paricharya is the care regimen for this period.
                </p>

                <p>
                  Classical sources describe two central ideas: Vata, one of the three doshas, and agni, the digestive capacity <sup><a href="#ref-1" className="text-[#1F5E4B] font-bold">[1]</a></sup>. Traditional routines draw on these ideas to recommend particular foods, oils, rest and daily habits. Ghee, for example, is described as the most widely used fat in contemporary postnatal care within the tradition <sup><a href="#ref-1" className="text-[#1F5E4B] font-bold">[1]</a></sup>.
                </p>

                <p>
                  In practice, traditional postnatal routines tend to touch on rest, food, comfort, gentle body care and family support. Details vary between traditions, regions and practitioners, so no single programme is &ldquo;the&rdquo; Ayurvedic postnatal plan.
                </p>
              </div>

              {/* Right 5 Columns: Clinical Evidence Demarcation Panel */}
              <div className="lg:col-span-5 bg-white p-8 sm:p-10 rounded-2xl border border-stone-200 shadow-sm space-y-4">
                <p className="text-stone-900 font-medium text-base sm:text-lg leading-relaxed">
                  It is important to separate tradition from clinical evidence. The available Ayurvedic literature includes classical text reviews, a single published case study and a study protocol for a non-controlled trial <sup><a href="#ref-2" className="text-[#1F5E4B] font-bold">[2]</a><a href="#ref-3" className="text-[#1F5E4B] font-bold">[3]</a><a href="#ref-4" className="text-[#1F5E4B] font-bold">[4]</a></sup>. These describe how the practice is understood. They are not proof that a given routine speeds recovery or prevents complications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHY POSTNATAL RECOVERY NEEDS INDIVIDUALISED CARE */}
      <section id="individualised-care" className="py-16 sm:py-24 px-4 sm:px-8 lg:px-12 bg-[#FAF8F5] border-t border-stone-200">
        <div className="w-full max-w-[1440px] mx-auto">
          {/* Centered Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1A1A1A] tracking-tight">
              Why Postnatal Recovery Needs Individualised Care
            </h2>
            <div className="w-16 h-1 bg-[#1F5E4B] rounded-full mx-auto mt-4"></div>
          </div>

          <div className="w-full space-y-5 text-stone-800 text-base sm:text-lg leading-relaxed mb-10">
            <p>
              The World Health Organization describes the postnatal period as a critical phase for mothers and babies, and recommends that care covers both physical and emotional recovery <sup><a href="#ref-5" className="text-[#1F5E4B] font-bold">[5]</a><a href="#ref-6" className="text-[#1F5E4B] font-bold">[6]</a></sup>. Its guidance includes at least 24 hours of care in a facility after birth and a minimum of three additional postnatal check-ups in the first six weeks <sup><a href="#ref-6" className="text-[#1F5E4B] font-bold">[6]</a></sup>. WHO also notes that around three in ten women worldwide do not receive postnatal care in the first days after birth <sup><a href="#ref-6" className="text-[#1F5E4B] font-bold">[6]</a></sup>.
            </p>

            <p>
              Routine postnatal contacts typically ask about bleeding, wound healing, pain, bladder and bowel function, breast pain, breastfeeding progress, sleep, emotional wellbeing and family support <sup><a href="#ref-7" className="text-[#1F5E4B] font-bold">[7]</a></sup>. Many of the factors that shape recovery appear on that list:
            </p>
          </div>

          {/* The 8 Verbatim Recovery Factors as a Full-Width 4-Column Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10 w-full">
            {[
              { title: 'Vaginal delivery or caesarean birth', icon: Activity },
              { title: 'Blood loss and anaemia', icon: Droplets },
              { title: 'Perineal discomfort or surgical wounds', icon: ShieldAlert },
              { title: 'Pain and mobility', icon: HeartPulse },
              { title: 'Breastfeeding or other feeding arrangements', icon: Baby },
              { title: 'Sleep disruption and fatigue', icon: Clock },
              { title: 'Existing medical conditions', icon: Stethoscope },
              { title: 'Emotional wellbeing and the support available', icon: Heart },
            ].map((factor, idx) => {
              const FactorIcon = factor.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-2xl border border-stone-200/90 shadow-2xs flex items-center gap-4 transition-all duration-300 hover:shadow-md"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#1F5E4B]/10 text-[#1F5E4B] flex items-center justify-center shrink-0">
                    <FactorIcon className="w-5 h-5" />
                  </div>
                  <span className="font-bold text-stone-900 text-sm sm:text-base leading-snug">{factor.title}</span>
                </div>
              );
            })}
          </div>

          {/* Verbatim Concluding Paragraph in Full-Width Card */}
          <div className="w-full bg-white p-8 sm:p-10 rounded-2xl border border-stone-200 text-stone-800 text-base sm:text-lg leading-relaxed shadow-2xs">
            <p>
              Your maternity team is best placed to guide recovery, particularly if there were complications. There is no fixed timeline that every mother should follow, and a routine that suits one mother may be unsuitable for another.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: TRADITIONAL AYURVEDIC PRACTICES AFTER CHILDBIRTH */}
      <section id="traditional-practices" className="relative py-20 sm:py-28 px-4 sm:px-8 lg:px-12 bg-white border-t border-stone-200 overflow-hidden">
        {/* Ambient Luxury Background Accents */}
        <div className="absolute top-0 left-1/4 -translate-x-1/2 w-[520px] h-[520px] bg-[#1F5E4B]/4 rounded-full blur-[120px] pointer-events-none -z-0" />
        <div className="absolute bottom-0 right-1/4 translate-x-1/2 w-[520px] h-[520px] bg-[#C9A961]/8 rounded-full blur-[120px] pointer-events-none -z-0" />

        <div className="w-full max-w-[1440px] mx-auto relative z-10">
          {/* Centered Section Header */}
          <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#1F5E4B]/10 via-[#C9A961]/15 to-[#1F5E4B]/10 border border-[#1F5E4B]/15 text-[#1F5E4B] text-xs font-extrabold tracking-wider uppercase mb-4 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#C9A961]" />
              <span>Classical Ayurvedic Traditions • Clinical Context</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-black text-[#1A1A1A] tracking-tight leading-[1.18]">
              Traditional Ayurvedic Practices After Childbirth
            </h2>

            <div className="flex items-center justify-center gap-2 my-5">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-[#1F5E4B] rounded-full" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#C9A961] shadow-xs" />
              <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-[#1F5E4B] rounded-full" />
            </div>

            {/* Exact introductory sentence in elevated clinical neutrality card */}
            <div className="max-w-3xl mx-auto p-4 sm:p-5 rounded-2xl bg-[#FAF8F5]/90 border border-stone-200/90 shadow-2xs">
              <p className="text-stone-700 text-base sm:text-lg italic leading-relaxed">
                The practices below are described neutrally. Whether any of them is available, or suitable for you, depends on your circumstances and on the practitioner.
              </p>
            </div>
          </div>

          <div className="space-y-8 w-full">
            {/* SUB-SECTION 1: REST AND DAILY ROUTINES (with Image 2) - Full Width */}
            <div className="relative w-full bg-gradient-to-br from-[#FAF8F5] via-white to-[#FAF8F5] p-8 sm:p-12 lg:p-14 rounded-3xl border border-stone-200/90 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
              {/* Subtle decorative top border accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1F5E4B] via-[#C9A961] to-[#1F5E4B]" />

              <div className="grid lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#1F5E4B] text-white text-xs font-black shadow-xs">
                      01
                    </span>
                    <span className="text-xs font-extrabold uppercase tracking-widest text-[#1F5E4B]">
                      Foundational Pillar
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
                    Rest and Daily Routines
                  </h3>

                  <div className="space-y-4 text-stone-800 text-base sm:text-lg leading-relaxed">
                    <p>
                      Traditional care puts weight on rest, less physical strain, a gradual return to activity and practical help from family. Many mothers find this part of the tradition the most useful, and it matches the wider message that new mothers need support.
                    </p>
                    <p className="p-5 rounded-2xl bg-white border border-stone-200/90 shadow-2xs">
                      Rest does not have to mean complete inactivity. Some clinicians recommend gentle movement early on, and the right level depends on your delivery. Ask your own team what is appropriate for you.
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <figure className="relative bg-white p-3.5 sm:p-4 rounded-3xl shadow-md border border-stone-200/80 group">
                    <div className="relative aspect-3/2 rounded-2xl overflow-hidden bg-stone-100">
                      <picture className="w-full h-full block">
                       
                        <source srcSet="/images/postpartum-rest-and-warm-food.webp" type="image/webp" />
                        <img
                          src="/images/postpartum-rest-and-warm-food.webp"
                          alt="New mother resting at home with a warm meal and her baby sleeping nearby"
                          width={1200}
                          height={800}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                      </picture>
                    </div>
                    <figcaption className="text-center text-xs sm:text-sm font-semibold text-stone-600 mt-3.5 italic px-2">
                      Rest and simple, warm food feature in many traditional routines.
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>

            {/* SUB-SECTIONS 2 & 3: MASSAGE & DIET (Expansive Dual-Track Columns) */}
            <div className="grid lg:grid-cols-2 gap-8 items-stretch w-full">
              {/* SUB-SECTION 2: TRADITIONAL POSTNATAL MASSAGE */}
              <div className="relative bg-white p-8 sm:p-12 rounded-3xl border border-stone-200/90 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group overflow-hidden">
                {/* Subtle Top Accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#1F5E4B]/40 to-transparent group-hover:via-[#1F5E4B] transition-all duration-500" />
                
                <div className="space-y-6">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-[#1F5E4B]/10 text-[#1F5E4B] flex items-center justify-center font-bold shadow-2xs group-hover:bg-[#1F5E4B] group-hover:text-white transition-colors duration-300">
                        <HeartPulse className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-[11px] font-extrabold tracking-widest uppercase text-[#1F5E4B] block">
                          Traditional Practice
                        </span>
                        <span className="text-xs font-semibold text-stone-500">
                          External Therapies
                        </span>
                      </div>
                    </div>
                    <span className="text-2xl font-black text-stone-200 group-hover:text-[#1F5E4B]/30 transition-colors">
                      02
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-stone-900 tracking-tight">
                    Traditional Postnatal Massage
                  </h3>

                  <div className="space-y-4 text-stone-800 text-base sm:text-lg leading-relaxed">
                    <p>
                      Some Ayurvedic traditions include oil massage after childbirth. Whether it is suitable depends on an individual assessment, especially after a caesarean birth, significant perineal injury, heavy bleeding, infection or other complications.
                    </p>
                    <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-amber-950 text-base sm:text-lg leading-relaxed">
                      <p>
                        No pressure should be applied over a surgical wound or healing tissue. Massage has not been shown to reposition organs, prevent prolapse, dissolve fat or guarantee faster recovery. If you are considering it, ask your obstetrician, midwife or treating doctor first, and tell the therapist about your delivery.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* SUB-SECTION 3: TRADITIONAL POSTPARTUM DIET */}
              <div className="relative bg-[#FAF8F5] p-8 sm:p-12 rounded-3xl border border-stone-200/90 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group overflow-hidden">
                {/* Subtle Top Accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C9A961]/50 to-transparent group-hover:via-[#C9A961] transition-all duration-500" />

                <div className="space-y-6">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-[#C9A961]/20 text-[#7D5E15] flex items-center justify-center font-bold shadow-2xs group-hover:bg-[#C9A961] group-hover:text-stone-950 transition-colors duration-300">
                        <Utensils className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-[11px] font-extrabold tracking-widest uppercase text-[#7D5E15] block">
                          Traditional Practice
                        </span>
                        <span className="text-xs font-semibold text-stone-500">
                          Nourishment & Agni
                        </span>
                      </div>
                    </div>
                    <span className="text-2xl font-black text-stone-200 group-hover:text-[#C9A961]/40 transition-colors">
                      03
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-stone-900 tracking-tight">
                    Traditional Postpartum Diet
                  </h3>

                  <div className="space-y-4 text-stone-800 text-base sm:text-lg leading-relaxed">
                    <p>
                      Traditional sources describe warm, freshly cooked, easily digested meals, often with ghee, as central to postnatal eating{' '}
                      <sup>
                        <a
                          href="#ref-1"
                          className="inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold text-[#1F5E4B] bg-white border border-[#1F5E4B]/20 rounded hover:bg-[#1F5E4B] hover:text-white transition-colors"
                          title="Reference 1: Charak Samhita online. Sutika Paricharya."
                        >
                          [1]
                        </a>
                      </sup>
                      . Many mothers find warm, simple food comforting in the early days.
                    </p>
                    <div className="p-5 rounded-2xl bg-white border border-stone-200/90 text-stone-800 text-base sm:text-lg leading-relaxed shadow-2xs">
                      <p>
                        Whatever the tradition, a mother still needs enough energy, protein, fluids and variety, particularly while breastfeeding. Restrictive diets, detox plans and unsupervised herbal regimes are not appropriate after childbirth. Any dietary change should be agreed with your clinician.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* SUB-SECTION 4: GENTLE MOVEMENT AND EVERYDAY SUPPORT - Full Width */}
            <div className="relative w-full bg-white p-8 sm:p-12 lg:p-14 rounded-3xl border border-stone-200/90 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group">
              {/* Subtle Top Accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1F5E4B] via-[#C9A961] to-[#1F5E4B]" />

              <div className="grid lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-[#1F5E4B]/10 text-[#1F5E4B] flex items-center justify-center shrink-0 shadow-2xs group-hover:bg-[#1F5E4B] group-hover:text-white transition-colors duration-300">
                      <Activity className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#1F5E4B]/10 text-[#1F5E4B] text-xs font-black">
                          04
                        </span>
                        <span className="text-[11px] font-extrabold tracking-widest uppercase text-[#1F5E4B]">
                          Integrated Care
                        </span>
                      </div>
                      <span className="text-xs font-semibold text-stone-500">
                        Mobility & Clinical Support
                      </span>
                    </div>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
                    Gentle Movement and Everyday Support
                  </h3>
                </div>

                <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-[#FAF8F5] border border-stone-200/90 shadow-2xs">
                  <p className="text-stone-800 text-base sm:text-lg leading-relaxed">
                    Activity should resume gradually, in line with your delivery and clinical advice. WHO postnatal guidance includes counselling on rest and gentle exercise as part of routine care{' '}
                    <sup>
                      <a
                        href="#ref-7"
                        className="inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold text-[#1F5E4B] bg-white border border-[#1F5E4B]/20 rounded hover:bg-[#1F5E4B] hover:text-white transition-colors"
                        title="Reference 7: Summary table of WHO postnatal care recommendations."
                      >
                        [7]
                      </a>
                    </sup>
                    . Pelvic-floor support and{' '}
                    <Link
                      href="/services/physiotherapy-dubai/"
                      className="inline-flex items-center gap-1 text-[#1F5E4B] font-bold underline underline-offset-4 decoration-2 decoration-[#1F5E4B]/40 hover:decoration-[#1F5E4B] hover:text-[#143D31] transition-all"
                    >
                      <span>physiotherapy at RamaCare</span>
                      <ArrowRight className="w-4 h-4 inline shrink-0" />
                    </Link>{' '}
                    can help some mothers, but the right programme is individual, and this page does not suggest a fixed routine.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: AYURVEDIC POSTNATAL CARE AFTER VAGINAL BIRTH AND CAESAREAN BIRTH */}
      <section id="birth-types" className="py-16 sm:py-24 px-4 sm:px-8 lg:px-12 bg-[#FAF8F5] border-t border-stone-200">
        <div className="w-full max-w-[1440px] mx-auto">
          {/* Centered Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1A1A1A] tracking-tight">
              Ayurvedic Postnatal Care After Vaginal Birth and Caesarean Birth
            </h2>
            <div className="w-16 h-1 bg-[#1F5E4B] rounded-full mx-auto mt-4"></div>
          </div>

          <div className="w-full space-y-6">
            {/* Dual Full-Width Cards */}
            <div className="grid md:grid-cols-2 gap-8 w-full">
              {/* Card 1: Vaginal Birth */}
              <div className="bg-white p-8 sm:p-12 rounded-3xl border border-stone-200 shadow-sm space-y-4">
                <p className="text-stone-800 text-base sm:text-lg leading-relaxed">
                  After a vaginal birth, common considerations include perineal discomfort, bleeding, pelvic-floor symptoms and fatigue. A tear or episiotomy needs careful hygiene and monitoring while it heals.
                </p>
              </div>

              {/* Card 2: Caesarean Birth */}
              <div className="bg-white p-8 sm:p-12 rounded-3xl border border-stone-200 shadow-sm space-y-4">
                <p className="text-stone-800 text-base sm:text-lg leading-relaxed">
                  After a caesarean birth, the surgical wound, infection prevention, pain control and activity guidance matter most. Avoid pressure or massage over the incision until the clinician who treated you confirms it is appropriate. This page does not give a waiting period, because it depends on the individual.
                </p>
              </div>
            </div>

            {/* Shared Clinical Safety Banner - Full Width */}
            <div className="w-full p-6 sm:p-8 rounded-2xl bg-amber-50/90 border-l-4 border-amber-600 text-amber-950 font-medium text-base sm:text-lg leading-relaxed shadow-2xs">
              For both types of birth, persistent or worsening pain, wound problems or heavy bleeding need medical assessment, not traditional treatment alone.
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: POSTNATAL NUTRITION, BREASTFEEDING, AND HERBAL PREPARATIONS */}
      <section id="nutrition-breastfeeding" className="py-16 sm:py-24 px-4 sm:px-8 lg:px-12 bg-white border-t border-stone-200">
        <div className="w-full max-w-[1440px] mx-auto">
          {/* Centered Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1A1A1A] tracking-tight">
              Postnatal Nutrition, Breastfeeding, and Herbal Preparations
            </h2>
            <div className="w-16 h-1 bg-[#1F5E4B] rounded-full mx-auto mt-4"></div>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center w-full">
            {/* Left 7 Columns: Verbatim Narrative */}
            <div className="lg:col-span-7 space-y-5 text-stone-800 text-base sm:text-lg leading-relaxed">
              <p>
                Good nutrition and hydration help recovery, and many traditional foods are simply nourishing meals. The question is where cultural custom ends and medically established guidance begins.
              </p>

              <p>
                Breastfeeding deserves particular care. No Ayurvedic food, herb or massage should be presented as a way to increase milk supply. A systematic review of herbal milk-supply products found too little good evidence to base recommendations on <sup><a href="#ref-11" className="text-[#1F5E4B] font-bold">[11]</a></sup>, and another review described a lack of high-quality trials and mixed results, including for shatavari, a herb often used in Ayurveda <sup><a href="#ref-12" className="text-[#1F5E4B] font-bold">[12]</a></sup>.
              </p>

              <p>
                Safety is a separate concern. In the US National Library of Medicine&apos;s lactation database, dietary supplements do not require proof of safety or effectiveness before sale, and labelled and actual ingredients can differ <sup><a href="#ref-9" className="text-[#1F5E4B] font-bold">[9]</a></sup>. The database also describes two infants who became unwell after their mothers drank large amounts of a herbal lactation tea; they improved after it was stopped <sup><a href="#ref-9" className="text-[#1F5E4B] font-bold">[9]</a></sup>. Herbal products can also cause side effects or interact with medicines. Fenugreek, for instance, can cause nausea and diarrhoea <sup><a href="#ref-13" className="text-[#1F5E4B] font-bold">[13]</a></sup>.
              </p>

              <div className="p-6 rounded-2xl bg-[#FAF8F5] border-l-4 border-[#1F5E4B] text-stone-900 font-medium">
                If you struggle with feeding, ask for help from a qualified lactation professional. Review any herbal product or supplement with a healthcare professional before using it, and never stop prescribed medicine on your own.
              </div>
            </div>

            {/* Right 5 Columns: Figure 3 */}
            <div className="lg:col-span-5">
              <figure className="relative bg-[#FAF8F5] p-4 sm:p-5 rounded-3xl shadow-xl border border-stone-200">
                <div className="relative aspect-3/2 rounded-2xl overflow-hidden bg-stone-100">
                  <picture className="w-full h-full block">
                    <source srcSet="/images/postnatal-recovery-discussion.webp" type="image/webp" />
                    <img
                      src="/images/postnatal-recovery-discussion.webp"
                      alt="Doctor discussing postnatal recovery with a new mother"
                      width={1200}
                      height={800}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                  </picture>
                </div>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: EMOTIONAL WELLBEING AFTER CHILDBIRTH */}
      <section id="emotional-wellbeing" className="py-16 sm:py-24 px-4 sm:px-8 lg:px-12 bg-[#FAF8F5] border-t border-stone-200">
        <div className="w-full max-w-[1440px] mx-auto">
          {/* Centered Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1A1A1A] tracking-tight">
              Emotional Wellbeing After Childbirth
            </h2>
            <div className="w-16 h-1 bg-[#1F5E4B] rounded-full mx-auto mt-4"></div>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center w-full">
            {/* Left 5 Columns: Figure 4 */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <figure className="relative bg-white p-4 sm:p-5 rounded-3xl shadow-xl border border-stone-200">
                <div className="relative aspect-3/2 rounded-2xl overflow-hidden bg-stone-100">
                  <picture className="w-full h-full block">
                    <source srcSet="/images/family-support-after-childbirth.webp" type="image/webp" />
                    <img
                      src="/images/family-support-after-childbirth.webp"
                      alt="Partner helping a new mother with the baby at home"
                      width={1200}
                      height={800}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                  </picture>
                </div>
                <figcaption className="text-center text-xs font-semibold text-stone-600 mt-3 italic">
                  Practical help matters as much as any treatment.
                </figcaption>
              </figure>
            </div>

            {/* Right 7 Columns: Verbatim Narrative */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6 text-stone-800 text-base sm:text-lg leading-relaxed">
              <p>
                Mood changes are common after birth, and exhaustion, hormones, worry and a major life change all play a part. WHO guidance lists emotional wellbeing and family support among the things to ask about at postnatal visits <sup><a href="#ref-7" className="text-[#1F5E4B] font-bold">[7]</a></sup>. Struggling does not mean you have failed.
              </p>

              <p>
                Persistent sadness, severe anxiety, feeling unable to cope, or losing interest in your baby or daily life deserve assessment by a healthcare professional. Ayurvedic care is not a substitute for professional mental-health care.
              </p>

              <div className="p-6 rounded-2xl bg-rose-50 border-2 border-rose-300 text-rose-950 font-medium">
                <p>
                  If you have thoughts of harming yourself or your baby, feel severely confused or are seeing or hearing things that are not there, seek urgent help now. Go to the nearest emergency department or call the emergency ambulance number.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: SAFETY PRECAUTIONS AND WHEN TO SEEK MEDICAL CARE */}
      <section id="safety-precautions" className="py-16 sm:py-24 px-4 sm:px-8 lg:px-12 bg-white border-t border-stone-200">
        <div className="w-full max-w-[1440px] mx-auto">
          {/* Centered Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1A1A1A] tracking-tight">
              Safety Precautions and When to Seek Medical Care
            </h2>
            <div className="w-16 h-1 bg-rose-700 rounded-full mx-auto mt-4 mb-5"></div>
            <p className="text-stone-800 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
              Complications can follow either vaginal or caesarean birth, and some can be serious. The US Centers for Disease Control and Prevention runs a campaign on urgent maternal warning signs, stressing that mothers and those around them should act quickly on symptoms that feel wrong <sup><a href="#ref-8" className="text-[#1F5E4B] font-bold">[8]</a></sup>. Seek urgent medical assessment for any of these:
            </p>
          </div>

          {/* The 8 Urgent Warning Signs Grid - Full Width 4-Column Layout */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10 w-full">
            {[
              'Heavy bleeding, or bleeding that is increasing rapidly',
              'Chest pain or difficulty breathing',
              'Severe headache, visual changes or fainting',
              'Fever with other concerning symptoms',
              'Severe or worsening abdominal pain',
              'A painful, swollen leg',
              'Worsening redness, discharge or pain around a surgical wound',
              'Severe emotional distress, confusion or thoughts of self-harm',
            ].map((symptom, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-rose-50/70 border-l-4 border-rose-600 border-t border-r border-b border-rose-200 shadow-2xs flex items-start gap-3.5 transition-all duration-300 hover:shadow-md"
              >
                <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                <span className="font-bold text-stone-900 text-sm sm:text-base leading-snug">{symptom}</span>
              </div>
            ))}
          </div>

          {/* Verbatim Concluding Paragraphs - Full Width */}
          <div className="w-full p-8 rounded-3xl bg-stone-50 border border-stone-200 text-stone-800 text-base sm:text-lg leading-relaxed space-y-4">
            <p>
              This list is not complete. Follow your maternity team&apos;s discharge instructions and local emergency guidance. Emergency symptoms need emergency care, not an Ayurvedic appointment.
            </p>
            <p className="p-5 rounded-xl bg-amber-50 text-amber-950 text-sm sm:text-base font-medium border border-amber-200">
              Your baby also needs urgent assessment if feeding stops going well, or if there is fast breathing, fever, a low temperature or jaundice <sup><a href="#ref-5" className="text-[#1F5E4B] font-bold">[5]</a></sup>.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 8: WHO SHOULD SEEK MEDICAL ADVICE BEFORE AYURVEDIC POSTNATAL TREATMENTS? */}
      <section id="who-should-seek" className="py-16 sm:py-24 px-4 sm:px-8 lg:px-12 bg-[#FAF8F5] border-t border-stone-200">
        <div className="w-full max-w-[1440px] mx-auto">
          {/* Centered Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1A1A1A] tracking-tight">
              Who Should Seek Medical Advice Before Ayurvedic Postnatal Treatments?
            </h2>
            <div className="w-16 h-1 bg-[#1F5E4B] rounded-full mx-auto mt-4 mb-5"></div>
            <p className="text-stone-800 text-base sm:text-lg max-w-3xl mx-auto">
              Talk to your doctor or midwife before massage, heat-based therapies, herbal products or other procedures if you have:
            </p>
          </div>

          {/* 7 Checklist Cards - Full Width 3-Column Layout */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 w-full">
            {[
              'Had a caesarean birth or a significant perineal injury',
              'Lost a lot of blood or have anaemia',
              'Developed an infection or a wound-healing problem',
              'Ongoing heavy bleeding or significant pain',
              'High blood pressure or another delivery-related complication',
              'A history of relevant medical conditions',
              'Questions about breastfeeding or medicine interactions',
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-stone-200 shadow-2xs flex items-start gap-3.5 transition-all duration-300 hover:shadow-md hover:border-[#1F5E4B]/40"
              >
                <div className="w-8 h-8 rounded-full bg-[#1F5E4B]/10 flex items-center justify-center shrink-0 text-[#1F5E4B] mt-0.5">
                  <CheckSquare className="w-4 h-4" />
                </div>
                <span className="text-stone-800 font-medium text-sm sm:text-base leading-snug">{item}</span>
              </div>
            ))}
          </div>

          <div className="text-xs sm:text-sm text-stone-500 italic text-center max-w-2xl mx-auto">
            This list is for general awareness, not diagnosis. It cannot replace a clinical assessment.
          </div>
        </div>
      </section>

      {/* SECTION 9: AYURVEDIC POSTNATAL CARE AT RAMACARE POLYCLINIC, JUMEIRAH 1 */}
      <section id="availability" className="py-16 sm:py-24 px-4 sm:px-8 lg:px-12 bg-white border-t border-stone-200">
        <div className="w-full max-w-[1440px] mx-auto">
          {/* Centered Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1A1A1A] tracking-tight">
              Ayurvedic Postnatal Care at RamaCare Polyclinic, Jumeirah 1
            </h2>
            <div className="w-16 h-1 bg-[#1F5E4B] rounded-full mx-auto mt-4"></div>
          </div>

          {/* Full-Width Dual Column Layout */}
          <div className="grid lg:grid-cols-12 gap-10 items-stretch w-full">
            {/* Left 7 Columns: Polyclinic Overview & Availability Statement */}
            <div className="lg:col-span-7 bg-[#FAF8F5] p-8 sm:p-12 rounded-3xl border border-stone-200 space-y-6 flex flex-col justify-between">
              <div className="space-y-5 text-stone-800 text-base sm:text-lg leading-relaxed">
                <p>
                  RamaCare Polyclinic is a DHA-licensed clinic at 12 Al Dhiyafah Road, Jumeirah Terrace Building, Ground Floor, Jumeirah 1, Dubai. Patients at the Ayurveda department are first seen by a BAMS-qualified doctor, and therapies are given by a therapist of the same gender. The clinic also has a{' '}
                  <Link
                    href="/services/general-physician-dubai/"
                    className="text-[#1F5E4B] font-bold underline underline-offset-4 hover:text-[#143D31]"
                  >
                    general physician
                  </Link>
                  ,{' '}
                  <Link
                    href="/services/physiotherapy-dubai/"
                    className="text-[#1F5E4B] font-bold underline underline-offset-4 hover:text-[#143D31]"
                  >
                    physiotherapists
                  </Link>{' '}
                  and a dermatologist in the same building.
                </p>

                <p>
                  Ayurveda at RamaCare is described as complementary care, and the clinic asks patients to tell the doctor if they are pregnant or breastfeeding.
                </p>

                <div className="p-5 rounded-2xl bg-white border border-[#C9A961]/40 text-stone-900 font-medium text-base">
                  Availability of postnatal-specific Ayurvedic care at RamaCare has not been confirmed on this page. Please contact the clinic to ask what is offered and whether a consultation would suit your situation.
                </div>
              </div>

              <div className="pt-2 text-sm text-stone-700">
                Ayurveda services: see the{' '}
                <Link
                  href="/services/ayurveda-dubai/"
                  className="text-[#1F5E4B] font-bold underline underline-offset-4 hover:text-[#143D31]"
                >
                  Ayurveda in Dubai
                </Link>{' '}
                page or review{' '}
                <Link
                  href="/services/polyclinic-in-jumeirah-1/"
                  className="text-[#1F5E4B] font-bold underline underline-offset-4 hover:text-[#143D31]"
                >
                  visiting our Jumeirah 1 clinic
                </Link>
                .
              </div>
            </div>

            {/* Right 5 Columns: Verified Contact Details Card */}
            <div className="lg:col-span-5 bg-white p-8 sm:p-12 rounded-3xl border border-stone-200 shadow-sm space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200">
                  <span className="text-xs font-bold text-stone-500 block mb-1 uppercase tracking-wider">Phone</span>
                  <a href="tel:+97142862006" className="font-bold text-[#1F5E4B] text-lg hover:underline flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    +971 4 286 2006
                  </a>
                </div>

                <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200">
                  <span className="text-xs font-bold text-stone-500 block mb-1 uppercase tracking-wider">WhatsApp</span>
                  <a href="https://wa.me/971566597878" target="_blank" rel="noopener noreferrer" className="font-bold text-[#1F5E4B] text-lg hover:underline flex items-center gap-2">
                    <MessageCircle className="w-5 h-5 text-[#25D366]" />
                    +971 56 659 7878
                  </a>
                </div>

                <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200">
                  <span className="text-xs font-bold text-stone-500 block mb-1 uppercase tracking-wider">Email</span>
                  <a href="mailto:query@ramacarepolyclinic.ae" className="font-bold text-[#1F5E4B] text-base hover:underline block">
                    query@ramacarepolyclinic.ae
                  </a>
                </div>

                <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200">
                  <span className="text-xs font-bold text-stone-500 block mb-1 uppercase tracking-wider">Hours</span>
                  <span className="font-bold text-stone-800 text-sm sm:text-base flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#1F5E4B]" />
                    every day, 10am to 10pm, as listed on the Ayurveda page
                  </span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="w-full py-3.5 px-6 rounded-2xl bg-[#1F5E4B] hover:bg-[#143D31] text-white font-bold text-sm shadow-md transition flex items-center justify-center gap-2 cursor-pointer">
                  <MessageCircle className="w-4 h-4" />
                  <span>Enquire on WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10: FREQUENTLY ASKED QUESTIONS ABOUT AYURVEDIC POSTNATAL CARE (EXPANSIVE 2-COLUMN GRID) */}
      <section id="faqs" className="py-16 sm:py-24 px-4 sm:px-8 lg:px-12 bg-[#FAF8F5] border-t border-stone-200">
        <div className="w-full max-w-[1440px] mx-auto">
          {/* Centered Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1A1A1A] tracking-tight">
              Frequently Asked Questions About Ayurvedic Postnatal Care
            </h2>
            <div className="w-16 h-1 bg-[#1F5E4B] rounded-full mx-auto mt-4 mb-6"></div>

            {/* Interactive Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <Search className="w-4 h-4 text-stone-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={faqSearch}
                onChange={(e) => setFaqSearch(e.target.value)}
                placeholder="Search postnatal questions..."
                className="w-full pl-11 pr-4 py-3.5 rounded-full bg-white border border-stone-300 text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#1F5E4B] shadow-2xs"
              />
            </div>
          </div>

          {/* All 11 Exact FAQs as an Expansive 2-Column Grid Across Desktop */}
          <div className="grid lg:grid-cols-2 gap-5 items-start w-full">
            {filteredFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl border border-stone-200 overflow-hidden transition-all duration-300 shadow-2xs hover:shadow-md hover:border-[#1F5E4B]/40"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                    className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 cursor-pointer hover:bg-stone-50/50 transition-colors"
                  >
                    <span className="font-bold text-stone-900 text-sm sm:text-base leading-snug">
                      {idx + 1}. {faq.q}
                    </span>
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'bg-[#1F5E4B] text-white rotate-180' : 'bg-stone-100 text-stone-600'
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 sm:px-7 pb-6 pt-1 text-stone-700 text-sm sm:text-base leading-relaxed border-t border-stone-100">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 11: REFERENCES FOR THE LIVE PAGE (SECTION M) - FULL WIDTH 3-COLUMN GRID */}
      <section id="references" aria-labelledby="references-title" className="py-16 sm:py-20 px-4 sm:px-8 lg:px-12 bg-white border-t border-stone-200">
        <div className="w-full max-w-[1440px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 id="references-title" className="text-2xl sm:text-3xl font-extrabold text-[#1A1A1A] tracking-tight">
              References
            </h2>
            <div className="w-16 h-1 bg-[#1F5E4B] rounded-full mx-auto mt-4"></div>
          </div>

          <ol className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs text-stone-700 list-decimal pl-5 w-full">
            {references.map((ref) => (
              <li key={ref.id} id={`ref-${ref.id}`} className="scroll-mt-24 p-4 rounded-2xl bg-stone-50 border border-stone-100 hover:border-stone-300 transition shadow-2xs">
                <a
                  href={ref.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#1F5E4B] hover:underline font-medium leading-relaxed inline-flex items-start gap-1.5"
                >
                  <span>{ref.title}</span>
                  <ExternalLink className="w-3.5 h-3.5 shrink-0 text-stone-400 mt-0.5" />
                </a>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* SECTION 12: CONTACT RAMACARE POLYCLINIC - EXPANSIVE FULL WIDTH */}
      <section id="contact-ramacare" className="py-16 sm:py-24 px-4 sm:px-8 lg:px-12 bg-[#143D31] text-[#FAF8F5] relative overflow-hidden">
        <div className="w-full max-w-[1440px] mx-auto relative z-10">
          <div className="w-full bg-[#11352a] rounded-3xl p-8 sm:p-14 lg:p-16 border border-white/10 shadow-2xl text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Contact RamaCare Polyclinic
            </h2>
            <div className="w-20 h-1 bg-[#C9A961] rounded-full mx-auto"></div>

            <p className="text-stone-200 text-base sm:text-lg leading-relaxed max-w-4xl mx-auto">
              If you would like to ask about Ayurvedic or other support after childbirth, RamaCare Polyclinic in Jumeirah 1 is happy to hear from you. Contact the team to find out what is currently available and what a suitable consultation could involve. There is no pressure, and your maternity team&apos;s advice always comes first.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <button
                type="button"
                onClick={handleWhatsApp}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#C9A961] hover:bg-[#d5b66d] text-stone-950 font-bold text-sm sm:text-base shadow-md transition cursor-pointer"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Message on WhatsApp (+971 56 659 7878)</span>
              </button>
              <button
                type="button"
                onClick={handleCall}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-sm sm:text-base shadow-xs transition cursor-pointer"
              >
                <Phone className="w-5 h-5 text-[#C9A961]" />
                <span>Call Clinic (+971 4 286 2006)</span>
              </button>
              <Link
                href="/book-appointment/"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#C9A961] hover:text-white underline underline-offset-4"
              >
                <span>book an appointment</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Medical Review Sign-Off Requirement Note */}
            <div className="pt-8 border-t border-white/10 text-xs text-stone-300 italic max-w-3xl mx-auto">
              Medical review: this page must be reviewed by an appropriately qualified maternal-health professional before publication.
            </div>
          </div>
        </div>
      </section>

      {/* MOBILE STICKY BOTTOM BAR */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-2xl z-40 p-3.5 md:hidden border-t border-stone-200">
        <div className="flex items-center justify-between gap-3">
          <div className="text-left">
            <p className="text-xs font-bold text-[#1A1A1A]">Ayurvedic Postnatal Care</p>
            <p className="text-[11px] text-[#7D5E15] font-semibold">RamaCare Polyclinic • Jumeirah 1</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleWhatsApp}
              className="p-2.5 rounded-2xl bg-[#25D366] text-white shadow-sm"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </button>
            <a
              href="#contact-ramacare"
              className="flex items-center gap-1.5 bg-[#1F5E4B] text-white px-4 py-2.5 rounded-2xl font-bold text-xs shadow-md"
            >
              <Calendar className="w-4 h-4" />
              <span>Enquire Now</span>
            </a>
          </div>
        </div>
      </div>

      {/* FLOATING WHATSAPP BUTTON (DESKTOP) */}
      <button
        onClick={handleWhatsApp}
        className="hidden md:flex fixed bottom-6 right-6 z-50 items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
      </button>
    </Layout>
  );
}
