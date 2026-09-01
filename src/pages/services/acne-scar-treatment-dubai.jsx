import React from 'react';
import Head from 'next/head';
import Layout from '../../../components/Layout';
import ServicePageTemplate from '../../../components/ServicePageTemplate';
import { subcategoryContent } from '../../data/subcategoryContent';
import { DOCTOR_GROUPS } from '../../data/doctors';

export default function AcneScarTreatmentPage() {
  const content = subcategoryContent['acne-scar-treatment-dubai'];

  if (!content) {
    return (
      <Layout>
        <div className="py-24 text-center">
          <p className="text-red-500">Service data not found.</p>
        </div>
      </Layout>
    );
  }

  const { seo, breadcrumbs, faqs, types, treatmentOptions, signsSymptoms } = content;

  const typesList = types?.list || [];

  // Page-specific JSON-LD schemas
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.answer
      }
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((b, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": b.label,
      "item": b.href.startsWith('http') ? b.href : `https://ramacarepolyclinic.ae${b.href}`
    }))
  };

  const medicalConditionSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    "name": "Acne Scarring",
    "alternateName": typesList.map(t => t.name) || [],
    "possibleTreatment": treatmentOptions.list.map(t => ({
      "@type": "MedicalTherapy",
      "name": t.name,
      "description": t.description
    })),
    "signOrSymptom": signsSymptoms.list.map(s => ({
      "@type": "MedicalSymptom",
      "name": s.name
    }))
  };

  const medicalTherapySchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": treatmentOptions.list.map((item, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "item": {
        "@type": "MedicalTherapy",
        "name": item.name,
        "description": item.description
      }
    }))
  };

  const physicianSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": DOCTOR_GROUPS.DERMA.map((doc, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "item": {
        "@type": "Physician",
        "name": doc.name,
        "image": `https://ramacarepolyclinic.ae${doc.image}`,
        "telephone": "+971566597878",
        "medicalSpecialty": "Dermatology"
      }
    }))
  };

  const clinicSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "RamaCare Polyclinic",
    "url": "https://ramacarepolyclinic.ae/",
    "logo": "https://ramacarepolyclinic.ae/images/Logo.png",
    "telephone": "+971566597878",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "12 Al Dhiyafah Rd - Jumeirah Terrace Building, Ground Floor, Jumeirah 1",
      "addressLocality": "Dubai",
      "addressCountry": "AE"
    }
  };

  const medicalProcedureSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Acne Scar Treatment in Dubai",
    "description": "Personalized, evidence-based acne scar treatment combining microneedling, RF microneedling, fractional CO2 laser, chemical peels, PRP therapy, subcision, and dermal fillers, tailored to individual scar type, skin tone, and severity.",
    "url": "https://ramacarepolyclinic.ae/services/acne-scar-treatment-dubai/",
    "procedureType": "https://schema.org/NoninvasiveProcedure",
    "bodyLocation": "Face",
    "reviewedBy": {
      "@type": "Person",
      "name": "Sonita Sinaga",
      "jobTitle": "Licensed & Certified Aesthetic Therapist",
      "url": "https://ramacarepolyclinic.ae/doctors/sonita-sinaga-aesthetic-therapist-dubai/"
    },
    "provider": {
      "@type": "MedicalClinic",
      "name": "RamaCare Polyclinic",
      "url": "https://ramacarepolyclinic.ae/",
      "image": "https://ramacarepolyclinic.ae/images/Acne scar treatment Dubai.jpg",
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

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": seo.title,
    "url": `https://ramacarepolyclinic.ae/services${seo.slug}`,
    "description": seo.metaDescription,
    "image": [
      {
        "@type": "ImageObject",
        "url": "https://ramacarepolyclinic.ae/images/acne-scar-hero.jpg",
        "caption": "Personalized skin assessment and treatment planning",
        "description": "Acne scar treatment Dubai consultation at RamaCare Polyclinic"
      },
      {
        "@type": "ImageObject",
        "url": "https://ramacarepolyclinic.ae/images/acne-scar-dermatologist.jpg",
        "caption": "Expert assessment of scar type and skin tone",
        "description": "Dermatologist examining acne scar"
      },
      {
        "@type": "ImageObject",
        "url": "https://ramacarepolyclinic.ae/images/acne-scar-diagram.jpg",
        "caption": "Illustration of common acne scar patterns",
        "description": "Acne scar types illustration"
      }
    ],
    "reviewedBy": {
      "@type": "Person",
      "name": "Sonita Sinaga",
      "jobTitle": "Licensed & Certified Aesthetic Therapist",
      "url": "https://ramacarepolyclinic.ae/doctors/sonita-sinaga-aesthetic-therapist-dubai/"
    },
    "author": {
      "@type": "MedicalOrganization",
      "name": "RamaCare Polyclinic Editorial Team",
      "url": "https://ramacarepolyclinic.ae"
    }
  };

  return (
    <Layout>
      <Head>
        <title key="title">{seo.title}</title>
        <meta name="description" content={seo.metaDescription} key="description" />
        <meta name="keywords" content={seo.keywords} />
        <meta name="robots" content="index, follow" key="robots" />
        <link rel="canonical" href={seo.canonical} key="canonical" />

        {/* OpenGraph */}
        <meta property="og:type" content="website" key="og:type" />
        <meta property="og:title" content={seo.title} key="og:title" />
        <meta property="og:description" content={seo.metaDescription} key="og:description" />
        <meta property="og:url" content={seo.canonical} key="og:url" />
        <meta property="og:image" content="https://ramacarepolyclinic.ae/images/Acne scar treatment Dubai.jpg" key="og:image" />
        <meta property="og:image:width" content="1200" key="og:image:width" />
        <meta property="og:image:height" content="630" key="og:image:height" />
        <meta property="og:image:alt" content="Acne Scar Treatment in Dubai - RamaCare Polyclinic" key="og:image:alt" />
        <meta property="og:site_name" content="RamaCare Polyclinic" key="og:site_name" />
        <meta property="og:locale" content="en_AE" key="og:locale" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content={seo.title} key="twitter:title" />
        <meta name="twitter:description" content={seo.metaDescription} key="twitter:description" />
        <meta name="twitter:image" content="https://ramacarepolyclinic.ae/images/Acne scar treatment Dubai.jpg" key="twitter:image" />

        {/* Structured Data Schemas */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalConditionSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalTherapySchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalProcedureSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      </Head>
      <ServicePageTemplate content={content} />
    </Layout>
  );
}
