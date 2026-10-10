import Layout from '../../../components/Layout';
import Head from "next/head";
import Image from 'next/image';
import AyurvedaInfoSection from '../../../components/AyurvedaInfoSection';   // created in the Ayurveda hub work
import Link from 'next/link';   
import TreatmentHero from '../../../components/TreatmentHero';
import QuickNavigation from '../../../components/QuickNavigation';
// import CertificationsSection from '../../../components/CertificationsSection';
import TreatmentOverview from '../../../components/TreatmentOverview';
import HealingJourney from '../../../components/HealingJourney';
import TreatmentBenefits from '../../../components/TreatmentBenefits';
import PatientTestimonials from '../../../components/VideoTestimonials';
import DoctorsSection from '../../../components/DoctorsSection';
// import PricingPackages from '../../../components/PricingPackages';
import PaymentInsurance from '../../../components/PaymentInsurance';
import FAQSection from '../../../components/Faq';
import BookConsultation from '../../../components/BookConsultation';
import { getSubcategoryContent } from '../../data/subcategoryContent';
import ContentReviewBadge from '../../../components/ContentReviewBadge';

import { Check, Info, TrendingUp, Scissors, IndianRupee, Wallet, Target, Sparkles, XCircle, CheckCircle2 } from 'lucide-react';

export default function AyurvedicHairfallTreatmentPage() {
  const categoryName = 'Ayurveda';
  const subcategoryName = 'Ayurvedic Hair Fall Treatment';

  // Get content from data file
  const content = getSubcategoryContent('ayurveda-dubai', 'ayurvedic-hairfall-treatment');

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
        "name": "Ayurveda",
        "item": "https://ramacarepolyclinic.ae/services/ayurveda-dubai/"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Ayurvedic Hairfall Treatment",
        "item": "https://ramacarepolyclinic.ae/services/ayurvedic-hairfall-treatment-dubai/"
      }
    ]
  };

const hairfallSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://ramacarepolyclinic.ae/services/ayurvedic-hairfall-treatment-dubai/#webpage",
      "url": "https://ramacarepolyclinic.ae/services/ayurvedic-hairfall-treatment-dubai/",
      "name": "Ayurvedic Hair Fall & Hair Loss Treatment Dubai | Jumeirah 1",
      "inLanguage": "en-AE",
      "about": { "@id": "https://ramacarepolyclinic.ae/services/ayurvedic-hairfall-treatment-dubai/#therapy" },
      "isPartOf": { "@id": "https://ramacarepolyclinic.ae/services/ayurveda-dubai/#webpage" },
      "reviewedBy": { "@id": "https://ramacarepolyclinic.ae/doctors/dr-shamna-keloth-meethal-ayurveda-doctor-dubai/#physician" },
      "lastReviewed": "YYYY-MM-DD"
    },
    {
      "@type": "MedicalTherapy",
      "@id": "https://ramacarepolyclinic.ae/services/ayurvedic-hairfall-treatment-dubai/#therapy",
      "name": "Ayurvedic hair fall treatment",
      "alternateName": ["Ayurvedic hair loss treatment", "Shiro Abhyanga", "Shirolepa", "Nasya"],
      "description": "Doctor-led Ayurvedic care for hair fall: consultation with a BAMS doctor, scalp therapies with medicated oils (Shiro Abhyanga, Shirolepa, Nasya, Shirodhara, Takradhara), internal herbal medicines and diet guidance, offered as complementary care.",
      "relevantSpecialty": "https://schema.org/Ayurvedic",
      "bodyLocation": "Scalp",
      "provider": { "@id": "https://ramacarepolyclinic.ae/#clinic" }
    },
    {
      "@type": "Physician",
      "@id": "https://ramacarepolyclinic.ae/doctors/dr-shamna-keloth-meethal-ayurveda-doctor-dubai/#physician",
      "name": "Dr. Shamna Keloth Meethal",
      "url": "https://ramacarepolyclinic.ae/doctors/dr-shamna-keloth-meethal-ayurveda-doctor-dubai/",
      "medicalSpecialty": "https://schema.org/Ayurvedic",
      "knowsLanguage": ["en", "ml", "hi"],
      "worksFor": { "@id": "https://ramacarepolyclinic.ae/#clinic" }
    }
  ]
};

  const faqSchema = content?.faq?.faqs?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": content.faq.faqs.map((faq) => ({
          "@type": "Question",
          "name": faq.question.trim(),
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer.trim()
          }
        }))
      }
    : null;

  return (
    <Layout>
      <Head>
        <title key="title">Ayurvedic Hair Fall & Hair Loss Treatment Dubai | Jumeirah 1</title>
        <meta
          name="description"
          content="Ayurvedic hair fall treatment in Jumeirah 1, Dubai: BAMS doctor, Shiro Abhyanga, Shirolepa and Nasya with medicated oils. Dermatologist on site. From AED 200."
          key="description"
        />
        <meta name="robots" content="index, follow" key="robots" />
        <link rel="canonical" href="https://ramacarepolyclinic.ae/services/ayurvedic-hairfall-treatment-dubai/" key="canonical" />

        {/* Open Graph Tags */}
        <meta property="og:type" content="website" key="og:type" />
        <meta property="og:title" content="Ayurvedic Hair Fall & Hair Loss Treatment Dubai | Jumeirah 1" key="og:title" />
        <meta
          property="og:description"
          content="Ayurvedic hair fall treatment in Jumeirah 1, Dubai: BAMS doctor, Shiro Abhyanga, Shirolepa and Nasya with medicated oils. Dermatologist on site. From AED 200."
          key="og:description"
        />
        <meta property="og:url" content="https://ramacarepolyclinic.ae/services/ayurvedic-hairfall-treatment-dubai/" key="og:url" />
        <meta property="og:image" content="https://ramacarepolyclinic.ae/images/hairfall1.jpg" key="og:image" />
        <meta property="og:site_name" content="RamaCare Polyclinic" key="og:site_name" />
        <meta property="og:locale" content="en_AE" key="og:locale" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content="Ayurvedic Hair Fall & Hair Loss Treatment Dubai | Jumeirah 1" key="twitter:title" />
        <meta
          name="twitter:description"
          content="Ayurvedic hair fall treatment in Jumeirah 1, Dubai: BAMS doctor, Shiro Abhyanga, Shirolepa and Nasya with medicated oils. Dermatologist on site. From AED 200."
          key="twitter:description"
        />
        <meta name="twitter:image" content="https://ramacarepolyclinic.ae/images/hairfall1.jpg" key="twitter:image" />

        {/* Structured Data Schemas */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
          <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(hairfallSchema) }}
          />
        {faqSchema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          />
        )}
      </Head>

    <TreatmentHero 
      categoryName={categoryName}
      subcategoryName={subcategoryName}
      hero={content?.hero}
    />
     <QuickNavigation />
    
    <TreatmentOverview 
      subcategoryName={subcategoryName}
      content={content?.overview}
    />
    <AyurvedaInfoSection content={content?.whichDoctor} />
    <AyurvedaInfoSection content={content?.dubaiHairFall} />
    <HealingJourney content={content?.healingJourney} />
    <TreatmentBenefits 
      content={content?.benefits}
    />
    <PatientTestimonials content={content?.testimonials} />

    {/* Custom Section for Hairfall Treatment */}
    <section className="py-12 md:py-16 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Ayurveda and Your Dermatologist, Under One Roof */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-3">Ayurveda and Your Dermatologist, Under One Roof</h2>
            <div className="w-12 h-1 bg-[#2D5A41] mx-auto rounded-full"></div>
          </div>
          <div className="bg-[#F2F0E9] rounded-2xl p-6 md:p-10 border border-[#E5E2D9]">
            <p className="text-sm md:text-base text-[#5F5F5F] mb-6 leading-relaxed">
              At RamaCare, Ayurvedic hair care sits alongside our dermatologist and general physician in the same Jumeirah 1 building. If your hair fall may have a medical cause, we refer you before or alongside Ayurvedic treatment.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Consultation with a BAMS Ayurvedic doctor",
                 "Dermatologist on site for scalp and hair conditions", 
                 "Referral to our general physician when needed", 
                 "Scalp therapies by Kerala-trained, same-gender therapists", 
                 "Diet and routine guidance for Pitta and digestion"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-[#DEDACF] shadow-sm">
                  <Check className="w-4 h-4 text-[#2D5A41] shrink-0" />
                  <span className="text-sm font-medium text-[#1A1A1A]">{item}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm font-bold text-[#2D5A41] flex flex-wrap items-center gap-2">
            Compare options: <Link href="/services/hair-treatment-dubai/">hair loss treatment with our dermatologist</Link> · <Link href="/blog/ayurveda-vs-prp-for-hair-loss-in-dubai-which-treatment-is-ri/">Ayurveda vs PRP for hair loss</Link> · <Link href="/services/ayurvedic-diet-skin-hair-dubai/">Ayurvedic diet for skin and hair</Link>
            </p>
          </div>
        </div>

        {/* Ayurvedic Hair Fall Treatment Cost */}
        <div className="mb-16 bg-white rounded-2xl p-8 border border-[#F2F0E9]">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-6">Ayurvedic Hair Fall Treatment Cost in Dubai</h2>
          <div className="space-y-4 text-[#5F5F5F] leading-relaxed text-sm md:text-base">
            <p>An Ayurvedic hair consultation with Dr. Shamna starts from AED 200 and takes 45–60 minutes, including a scalp and Prakriti assessment and a written plan.</p>
            <div className="bg-[#FAF9F6] p-6 rounded-2xl border border-[#F2F0E9] my-6">
              <p className="font-bold text-[#1A1A1A] mb-4">The cost of therapy depends on:</p>
              <ul className="grid sm:grid-cols-2 gap-3">
                {[
                  "Severity of hair fall and scalp condition",
                  "Number of sessions required for visible improvement",
                  "Type of Ayurvedic therapies recommended",
                  "Use of herbal medicines and internal treatments",
                  "Duration of the personalized treatment plan"
                ].map((fact, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <div className="w-1 h-1 rounded-full bg-[#2D5A41]"></div>
                    {fact}
                  </li>
                ))}
              </ul>
            </div>
            <p>We confirm the full cost in writing before any therapy starts. Insurance is on a reimbursement basis; we provide itemised invoices for your claim.</p>
          </div>
        </div>

        {/* Before & After Results */}
        <div className="bg-[#F2F0E9] rounded-2xl p-6 md:p-12 border border-[#E5E2D9]">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-3">One Patient's Before and After</h2>
            <p className="text-sm text-[#5F5F5F] max-w-2xl mx-auto leading-relaxed">Photos of one RamaCare patient during Ayurvedic hair care, shared with the patient's written consent.</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Before Column */}
            <div className="space-y-6">
              {/* Before Image Div - Ready for your image */}
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-white/40 border border-white/60 relative">
                {/* 
                  To add an actual image:
                  1. Uncomment the <Image /> tag below
                  2. Update the 'src' to your image path (e.g., "/images/before-hair.jpg")
                */}
                <Image src="/images/bef.jpg" alt="Patient's scalp before Ayurvedic hair treatment at RamaCare, Jumeirah 1" fill className="object-cover" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-rose-300">
                </div>
              </div>
            
              <div className="space-y-4 bg-white/40 p-6 rounded-xl border border-white/60">
                <h4 className="font-bold text-rose-600 text-xs uppercase tracking-widest border-b border-rose-100 pb-2">What the patient came in with:</h4>
                <div className="space-y-2">
                  {[
                    "Excessive daily hair fall",
                    "Noticeable hair thinning",
                    "Weak and brittle hair strands",
                    "Dandruff and itchy scalp",
                    "Reduced hair volume and density"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <XCircle className="w-4 h-4 text-rose-400" />
                      <span className="text-sm text-[#5F5F5F]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* After Column */}
            <div className="space-y-6">
              {/* After Image Div - Ready for your image */}
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-white/60 border border-white/80 relative">
                {/* 
                  To add an actual image:
                  1. Uncomment the <Image /> tag below
                  2. Update the 'src' to your image path (e.g., "/images/after-hair.jpg")
                */}
                <Image src="/images/aft.jpg" alt="The same patient's scalp after Ayurvedic hair treatment at RamaCare, Jumeirah 1" fill className="object-cover" />

                <div className="absolute inset-0 flex flex-col items-center justify-center text-[#2D5A41]">
                </div>
              </div>

              <div className="space-y-4 bg-white/60 p-6 rounded-xl border border-white/80">
                <h4 className="font-bold text-[#2D5A41] text-xs uppercase tracking-widest border-b border-emerald-100 pb-2">What this patient noticed:</h4>
                <div className="space-y-2">
                  {[
                     "Less hair fall day to day",
                      "Less dandruff and itching",
                      "Hair felt stronger"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#2D5A41]" />
                      <span className="text-sm font-medium text-[#1A1A1A]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 p-5 bg-white/80 rounded-xl border border-[#DEDACF] text-center">
            <p className="text-xs md:text-sm text-[#5F5F5F] font-medium italic leading-relaxed">
              Individual results vary. These photos show one patient and are not a promise of results.
            </p>
          </div>
        </div>
      </div>
    </section>

     <DoctorsSection content={content?.doctors} customDoctors={content?.doctors?.doctors} />
    
    <PaymentInsurance content={content?.paymentInsurance} />
   <ContentReviewBadge doctorName="Dr. Shamna Keloth Meethal" pageSlug="ayurvedic-hairfall-treatment-dubai" lastReviewed="2026-01-12" />
    <FAQSection content={content?.faq} />
    <BookConsultation content={content?.bookConsultation} />
  </Layout>
  );
}
