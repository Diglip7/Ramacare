import Layout from '../../../components/Layout';
import Head from "next/head";
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
import ContentReviewBadge from '../../../components/ContentReviewBadge';
import { getSubcategoryContent } from '../../data/subcategoryContent';


const SITE_URL = 'https://ramacarepolyclinic.ae';
const PAGE_PATH = '/services/dental-veneers-dubai/';

export default function dentaldubaiVeneersPage() {
  const categoryName = 'Dental';
  const subcategoryName = 'Dental Veneers';

  // Get content from data file
  const content = getSubcategoryContent('dental-dubai', 'dental-veneers');

  const schemaClinic = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "RamaCare Polyclinic",
    "url": SITE_URL,
    "logo": `${SITE_URL}/images/Logo.png`,
    "image": `${SITE_URL}/images/porcelain dental veneers for smile makeover in Dubai.jpg`,
    "description": "DHA-licensed dental clinic in Jumeirah 1, Dubai providing custom porcelain and composite dental veneers, digital smile design, and smile makeovers.",
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
    "name": "Dental Veneers in Dubai | Trusted Smile Makeover Experts",
    "description": "Transform your smile with dental veneers in Dubai. Expert porcelain and composite solutions for natural, durable, and personalized cosmetic results by certified dentists.",
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
        "name": "Dental Veneers in Dubai",
        "item": `${SITE_URL}${PAGE_PATH}`
      }
    ]
  };

  const schemaFaqs = content?.faq?.items ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": content.faq.items.map(item => ({
      "@type": "Question",
      "name": item.question || item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer || item.a
      }
    }))
  } : null;

  return (
    <Layout>
      <Head>
        <title key="title">Dental Veneers in Dubai | Trusted Smile Makeover Experts</title>
        <meta name="description" content="Transform your smile with dental veneers in Dubai. Expert porcelain and composite solutions for natural, durable, and personalized cosmetic results by certified dentists." key="description" />
        <meta name="keywords" content="dental veneers Dubai, Porcelain veneers Dubai, Composite veneers Dubai, Cosmetic dentistry Dubai, Smile makeover Dubai, Tooth restoration in Dubai, Same-day veneers Dubai, Natural-looking veneers Dubai, Emax veneers Dubai, Affordable veneers Dubai, DHA-licensed dentist in Dubai, Best dental veneers Dubai, dental veneers Jumeirah 1, Best dental veneers Jumeirah 1" />
        
        <link rel="canonical" href={`${SITE_URL}${PAGE_PATH}`} key="canonical" />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="RamaCare Polyclinic" />
        <meta property="og:title" content="Dental Veneers in Dubai | Trusted Smile Makeover Experts" />
        <meta property="og:description" content="Transform your smile with dental veneers in Dubai. Expert porcelain and composite solutions for natural, durable, and personalized cosmetic results." />
        <meta property="og:url" content={`${SITE_URL}${PAGE_PATH}`} />
        <meta property="og:image" content={`${SITE_URL}/images/porcelain dental veneers for smile makeover in Dubai.jpg`} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dental Veneers in Dubai | Trusted Smile Makeover Experts" />
        <meta name="twitter:description" content="Transform your smile with dental veneers in Dubai. Expert porcelain and composite solutions for natural cosmetic results." />
        <meta name="twitter:image" content={`${SITE_URL}/images/porcelain dental veneers for smile makeover in Dubai.jpg`} />

        <script key="schema-clinic" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaClinic) }} />
        <script key="schema-webpage" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaWebPage) }} />
        <script key="schema-breadcrumbs" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumbs) }} />
        {schemaFaqs && <script key="schema-faqs" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFaqs) }} />}
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
      <DoctorsSection content={content?.doctors} />
      <PaymentInsurance content={content?.paymentInsurance} />
      <ContentReviewBadge doctorName="Dr. Hirbod Gilandoust" pageSlug="dental-veneers-dubai" />
      <FAQSection content={content?.faq} />
      <BookConsultation content={content?.bookConsultation} />
    </Layout>
  );
}
