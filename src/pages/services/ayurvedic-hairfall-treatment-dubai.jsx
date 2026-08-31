import Layout from '../../../components/Layout';
import Head from "next/head";
import Image from 'next/image';
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
  const subcategoryName = 'Ayurvedic Hairfall Treatment';

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
        "item": "https://ramacarepolyclinic.ae/services/ayurveda-dubai"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Ayurvedic Hairfall Treatment",
        "item": "https://ramacarepolyclinic.ae/services/ayurvedic-hairfall-treatment-dubai/"
      }
    ]
  };

  const medicalProcedureSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Ayurvedic Hair Fall Treatment in Dubai",
    "description": "Holistic, root-cause-based Ayurvedic treatment for hair loss combining herbal scalp therapies (Shiro Abhyanga, Lepam), internal Ayurvedic medicines, dosha balancing, and personalized diet and lifestyle correction to restore healthy, natural hair growth.",
    "url": "https://ramacarepolyclinic.ae/services/ayurvedic-hairfall-treatment-dubai/",
    "procedureType": "https://schema.org/NoninvasiveProcedure",
    "bodyLocation": "Scalp",
    "reviewedBy": {
      "@type": "Physician",
      "name": "Dr. Shamna Keloth Meethal",
      "medicalSpecialty": "Ayurveda",
      "url": "https://ramacarepolyclinic.ae/doctors/dr-shamna-keloth-meethal-ayurveda-doctor-dubai/"
    },
    "provider": {
      "@type": "MedicalClinic",
      "name": "RamaCare Polyclinic",
      "url": "https://ramacarepolyclinic.ae/",
      "image": "https://ramacarepolyclinic.ae/images/hairfall1.jpg",
      "telephone": "+971566597878",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "12 Al Dhiyafah Rd - Jumeirah Terrace Building, Ground Floor",
        "addressLocality": "Jumeirah 1",
        "addressRegion": "Dubai",
        "addressCountry": "AE"
      }
    }
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

  const physicianSchema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": "Dr. Shamna Keloth Meethal",
    "medicalSpecialty": "Ayurveda",
    "url": "https://ramacarepolyclinic.ae/doctors/dr-shamna-keloth-meethal-ayurveda-doctor-dubai/",
    "worksFor": {
      "@type": "MedicalClinic",
      "name": "RamaCare Polyclinic"
    }
  };

  return (
    <Layout>
      <Head>
        <title key="title">Ayurvedic Hair Fall Treatment in Dubai – Safe & Natural</title>
        <meta
          name="description"
          content="Control hair fall naturally with Ayurvedic treatments in Dubai. Herbal remedies, scalp therapies, and personalized care help restore healthy, strong hair."
          key="description"
        />
        <meta
          name="keywords"
          content="Ayurvedic Hair Fall Treatment Dubai, Hair Loss Treatment Ayurveda Dubai, Natural Hair Regrowth Dubai, Herbal Hair Care Dubai, Ayurvedic Hair Therapy Dubai, Hair Strengthening Treatments Dubai, Hair Fall Solutions Dubai, Ayurveda for Hair Loss, Ayurvedic Scalp Treatment Dubai, Hair Growth Oils Dubai, Best Ayurvedic Hair Treatment, Personalized Hair Care Dubai"
          key="keywords"
        />
        <meta name="robots" content="index, follow" key="robots" />
        <link rel="canonical" href="https://ramacarepolyclinic.ae/services/ayurvedic-hairfall-treatment-dubai/" key="canonical" />

        {/* Open Graph Tags */}
        <meta property="og:type" content="website" key="og:type" />
        <meta property="og:title" content="Ayurvedic Hair Fall Treatment in Dubai – Safe & Natural" key="og:title" />
        <meta
          property="og:description"
          content="Control hair fall naturally with Ayurvedic treatments in Dubai. Herbal remedies, scalp therapies, and personalized care help restore healthy, strong hair."
          key="og:description"
        />
        <meta property="og:url" content="https://ramacarepolyclinic.ae/services/ayurvedic-hairfall-treatment-dubai/" key="og:url" />
        <meta property="og:image" content="https://ramacarepolyclinic.ae/images/hairfall1.jpg" key="og:image" />
        <meta property="og:site_name" content="RamaCare Polyclinic" key="og:site_name" />
        <meta property="og:locale" content="en_AE" key="og:locale" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content="Ayurvedic Hair Fall Treatment in Dubai – Safe & Natural" key="twitter:title" />
        <meta
          name="twitter:description"
          content="Control hair fall naturally with Ayurvedic treatments in Dubai. Herbal remedies, scalp therapies, and personalized care help restore healthy, strong hair."
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalProcedureSchema) }}
        />
        {faqSchema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          />
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianSchema) }}
        />
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
    <HealingJourney content={content?.healingJourney} />
    <TreatmentBenefits 
      content={content?.benefits}
    />
    <PatientTestimonials content={content?.testimonials} />

    {/* Custom Section for Hairfall Treatment */}
    <section className="py-12 md:py-16 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Why Ayurvedic Treatment Is Different */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-3">Why Ayurvedic Treatment Is Different</h2>
            <div className="w-12 h-1 bg-[#2D5A41] mx-auto rounded-full"></div>
          </div>
          <div className="bg-[#F2F0E9] rounded-2xl p-6 md:p-10 border border-[#E5E2D9]">
            <p className="text-sm md:text-base text-[#5F5F5F] mb-6 leading-relaxed">
              Unlike conventional methods that focus only on external symptoms, Ayurvedic Hair Fall Treatment in Dubai works on internal healing by:
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Balancing body doshas (Vata, Pitta, Kapha)",
                "Improving scalp blood circulation",
                "Strengthening hair follicles from the root",
                "Supporting digestion and nutrient absorption",
                "Reducing stress-related hair fall"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-[#DEDACF] shadow-sm">
                  <Check className="w-4 h-4 text-[#2D5A41] shrink-0" />
                  <span className="text-sm font-medium text-[#1A1A1A]">{item}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm font-bold text-[#2D5A41] flex items-center gap-2">
              <span>👉</span> This leads to long-term, natural, and sustainable hair growth.
            </p>
          </div>
        </div>

        {/* Ayurvedic Hair Fall Treatment Cost */}
        <div className="mb-16 bg-white rounded-2xl p-8 border border-[#F2F0E9]">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-6">Ayurvedic Hair Fall Treatment Cost in Dubai</h2>
          <div className="space-y-4 text-[#5F5F5F] leading-relaxed text-sm md:text-base">
            <p>The cost of Ayurvedic Hair Fall Treatment in Dubai varies depending on the severity of hair loss, underlying causes, and the type of personalized treatment required.</p>
            <p>Since every individual has a different dosha imbalance, lifestyle pattern, and scalp condition, our treatment plans are fully customized rather than one-size-fits-all.</p>
            <div className="bg-[#FAF9F6] p-6 rounded-2xl border border-[#F2F0E9] my-6">
              <h4 className="font-bold text-[#1A1A1A] mb-4 text-sm md:text-base">Factors that affect treatment cost include:</h4>
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
            <p className="font-medium text-[#1A1A1A]">👉 In general, Ayurvedic hair fall treatment plans may start from a basic consultation and gradually scale based on your individual needs and response to therapy.</p>
            <p className="text-[#2D5A41] font-bold">Unlike temporary cosmetic solutions, Ayurveda focuses on long-term root-cause healing, which makes it a more sustainable investment in your hair and overall health.</p>
          </div>
        </div>

        {/* Before & After Results */}
        <div className="bg-[#F2F0E9] rounded-2xl p-6 md:p-12 border border-[#E5E2D9]">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-3">Before & After Results of Ayurvedic Hair Treatment</h2>
            <p className="text-sm text-[#5F5F5F] max-w-2xl mx-auto leading-relaxed">Our Ayurvedic Hair Fall Treatment in Dubai focuses on delivering visible and long-term improvements by restoring scalp health and strengthening hair from the root.</p>
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
                <Image src="/images/bef.jpg" alt="Weak and brittle hair before treatment" fill className="object-cover" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-rose-300">
                </div>
              </div>
            
              <div className="space-y-4 bg-white/40 p-6 rounded-xl border border-white/60">
                <h4 className="font-bold text-rose-600 text-xs uppercase tracking-widest border-b border-rose-100 pb-2">Before Treatment (Common Conditions):</h4>
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
                <Image src="/images/aft.jpg" alt="Stronger and healthier hair roots after therapy" fill className="object-cover" />

                <div className="absolute inset-0 flex flex-col items-center justify-center text-[#2D5A41]">
                </div>
              </div>

              <div className="space-y-4 bg-white/60 p-6 rounded-xl border border-white/80">
                <h4 className="font-bold text-[#2D5A41] text-xs uppercase tracking-widest border-b border-emerald-100 pb-2">After Treatment (Expected Improvements):</h4>
                <div className="space-y-2">
                  {[
                    "Significant reduction in hair fall",
                    "Stronger and healthier hair roots",
                    "Improved hair thickness and density",
                    "Reduction in dandruff and scalp irritation",
                    "Enhanced natural shine and hair texture"
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
              👉 Results may vary depending on individual condition, but consistent Ayurvedic treatment supports gradual, natural, and sustainable hair regrowth without harsh chemicals.
            </p>
          </div>
        </div>
      </div>
    </section>

     <DoctorsSection content={content?.doctors} customDoctors={content?.doctors?.doctors} />
    
    <PaymentInsurance content={content?.paymentInsurance} />
    <ContentReviewBadge doctorName="Dr. Shamna Keloth Meethal" pageSlug="ayurvedic-hairfall-treatment-dubai" />
    <FAQSection content={content?.faq} />
    <BookConsultation content={content?.bookConsultation} />
  </Layout>
  );
}
