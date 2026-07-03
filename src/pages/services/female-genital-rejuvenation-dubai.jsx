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
import TreatmentAdditionalContent from '../../../components/TreatmentAdditionalContent';
import SkinTreatmentAdditionalContent from '../../../components/SkinTreatmentAdditionalContent';
import ServiceExtrasSection from '../../../components/ServiceExtrasSection';
import { getSubcategoryContent } from '../../data/subcategoryContent';


export default function FemaleGenitalRejuvenationPage() {
  const categoryName = 'Aesthetic Dermatology';
  const subcategoryName = 'Female Genital Rejuvenation';

  // Get content from data file - nested path
  const content = getSubcategoryContent('aesthetic-dermatology-dubai', 'laser-treatment/female-genital-rejuvenation');
   const navItems = [
    { id: 'treatment-info', label: 'Treatment Info' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'benefits', label: 'Benefits' },
    { id: 'which-option-right', label: 'Which Option Right?' },
    { id: 'when-to-consider', label: 'Ideal Candidate' },
    { id: 'recovery-aftercare', label: 'Aftercare' },
    { id: 'why-choose-ramacare', label: 'Why Us' },
    { id: 'testimonials', label: 'Success Stories' },
    { id: 'our-doctors', label: 'Our Doctors' },
    { id: 'faq', label: 'FAQ' },
    { id: 'book-now', label: 'Book Now' },
  ];

  return (
    <Layout>
      <Head>
  <title key="title">Female Genital Rejuvenation for Comfort and Confidence</title>
  <meta name="description" content="Female genital rejuvenation restores vaginal health, tightness, and comfort using safe, minimally invasive treatments under expert medical supervision." key="description" />
  <meta name="keywords" content="Female genital rejuvenation, Vaginal tightening treatment, Non-surgical genital rejuvenation, Vaginal health therapy, Intimate wellness treatment, Minimally invasive vaginal care, Vaginal laxity treatment, Medical genital rejuvenation, Women’s intimate care, Expert genital treatment" />
  
  <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "MedicalCondition",
          "@id": "https://ramacarepolyclinic.ae/services/female-genital-rejuvenation-dubai/#condition",
          "name": "Female Genital Laxity, Discomfort & Aesthetic Concerns",
          "alternateName": "Vaginal Laxity, Pelvic Floor Weakness & Genital Aesthetic Concerns",
          "url": "https://ramacarepolyclinic.ae/services/female-genital-rejuvenation-dubai/",
          "description": "Female genital laxity, vaginal looseness, discomfort during intercourse, urinary leakage, and aesthetic concerns of the external genitalia can occur due to aging, childbirth, hormonal changes, or other pelvic floor weakening factors.",
          "possibleTreatment": {
            "@type": "MedicalTherapy",
            "name": "Genital Rejuvenation Therapy",
            "description": "Genital rejuvenation therapy uses non‑surgical or minimally invasive medical techniques — such as focused energy devices, laser therapy, or injectables — to tighten, tone, and improve the functional and aesthetic condition of the vaginal and external genital tissues."
          }
        },
        {
          "@type": "MedicalProcedure",
          "@id": "https://ramacarepolyclinic.ae/services/female-genital-rejuvenation-dubai/#procedure",
          "name": "Female Genital Rejuvenation in Dubai",
          "alternateName": "Vaginal Tightening & Aesthetic Genital Therapy",
          "url": "https://ramacarepolyclinic.ae/services/female-genital-rejuvenation-dubai/",
          "mainEntityOfPage": "https://ramacarepolyclinic.ae/services/female-genital-rejuvenation-dubai/",
          "description": "Female genital rejuvenation at RamaCare Polyclinic in Dubai is a customized medical or aesthetic procedure aimed at improving genital laxity, enhancing tissue tone and elasticity, and addressing functional or cosmetic concerns of the vaginal and external genital region.",
          "procedureType": "Minimally invasive pelvic floor and aesthetic therapy",
          "howPerformed": "After a clinical consultation and assessment of individual anatomy and goals, a trained clinician uses non‑surgical technologies such as fractional laser, radiofrequency, or energy‑based devices to stimulate tissue remodeling, collagen production, and tightening of the vaginal and external genital tissues. The approach is tailored for comfort and safety.",
          "preparation": "Patients should provide a complete medical and gynecologic history, discuss any medications, hormonal therapies, or recent treatments, and follow clinician instructions for pre‑procedure hygiene. Avoiding sexual intercourse and certain topical products before treatment may be advised.",
          "followup": "Follow‑up care typically includes monitoring outcomes, scheduling maintenance sessions if needed, and providing guidance on pelvic floor exercises, topical care, and activity restrictions to support healing and optimal results.",
          "indication": [
            "Vaginal laxity or looseness",
            "Decreased sensation during intercourse",
            "Mild stress urinary leakage",
            "External genital aesthetic concerns",
            "Post‑childbirth pelvic floor weakening"
          ],
          "provider": {
            "@type": "MedicalClinic",
            "name": "RamaCare Polyclinic – Aesthetic & Dermatology Care",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Jumeirah Terrace Building, Ground Floor",
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
      ]
    })
  }}
/>
</Head>

      <TreatmentHero 
        categoryName={categoryName}
        subcategoryName={subcategoryName}
        hero={content?.hero}
      />
        <QuickNavigation navItems={navItems} />
    
    <TreatmentOverview 
      subcategoryName={subcategoryName}
      content={content?.overview}
    />
      <HealingJourney content={content?.healingJourney} />
      <TreatmentBenefits 
        content={content?.benefits}
      />
       <TreatmentAdditionalContent 
              content={{
                skinTreatmentContent: content?.skinTreatmentContent,
              }} 
            />
            <SkinTreatmentAdditionalContent 
              content={{
                whyChooseSection: content?.whyChooseSection,
                 whenToConsider: content?.whenToConsider,
              }} 
            />
            <ServiceExtrasSection aftercareContent={content?.aftercareContent} />
       <PatientTestimonials content={content?.testimonials} />
       <DoctorsSection content={content?.doctors} />
    
    <PaymentInsurance content={content?.paymentInsurance} />
      <FAQSection content={content?.faq} />
      <BookConsultation content={content?.bookConsultation} />
    </Layout>
  );
}
