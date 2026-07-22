import React from 'react';
import Head from 'next/head';
import Layout from '../../../components/Layout';
import ServicePageTemplate from '../../../components/ServicePageTemplate';
import { subcategoryContent } from '../../data/subcategoryContent';
import { DOCTOR_GROUPS } from '../../data/doctors';

export default function InsomniaTreatmentPage() {
  const content = subcategoryContent['insomnia-treatment-dubai'];

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
    "name": "Insomnia and sleep cycle disruption",
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
    "itemListElement": [
      { name: "Sleep hygiene education", description: "Evidence-informed bedtime routines, screen management, and environment setup." },
      { name: "Physiotherapy for sleep", description: "Addressing physical muscle tension, neck pain, and back pain contributing to discomfort at night." },
      { name: "Relaxation techniques", description: "Calming an overactive mind using progressive muscle relaxation and visualization." },
      { name: "Ayurvedic sleep support", description: "Complementary, lifestyle-based routines and wellness recommendations." }
    ].map((item, i) => ({
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
    "itemListElement": DOCTOR_GROUPS.PHYSIO.map((doc, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "item": {
        "@type": "Physician",
        "name": doc.name,
        "image": `https://ramacarepolyclinic.ae${doc.image}`,
        "telephone": "+971566597878",
        "medicalSpecialty": "Physiotherapy"
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

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": seo.title,
    "url": `https://ramacarepolyclinic.ae/services${seo.slug}`,
    "description": seo.metaDescription,
    "reviewedBy": {
      "@type": "Physician",
      "name": "Jeena Mathew",
      "medicalSpecialty": "Physiotherapy",
      "url": "https://ramacarepolyclinic.ae/doctors/1"
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
        <link rel="canonical" href={seo.canonical} key="canonical" />

        {/* OpenGraph */}
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={seo.canonical} />

        {/* Structured Data Schemas */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalConditionSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalTherapySchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      </Head>

      <ServicePageTemplate content={content} />
    </Layout>
  );
}
