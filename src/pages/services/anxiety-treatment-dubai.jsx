import React from 'react';
import Head from 'next/head';
import Layout from '../../../components/Layout';
import ServicePageTemplate from '../../../components/ServicePageTemplate';
import { subcategoryContent } from '../../data/subcategoryContent';
import { DOCTOR_GROUPS } from '../../data/doctors';

export default function AnxietyTreatmentPage() {
  const content = subcategoryContent['anxiety-treatment-dubai'];

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
    "name": "Anxiety-related physical tension and lifestyle strain",
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
      { name: "Physiotherapy", description: "To address anxiety-related muscle tension, neck guarding, and physical strain." },
      { name: "Ayurvedic wellness consultation", description: "Complementary mind-body routine, diet, and relaxation therapies." },
      { name: "Sleep hygiene guidance", description: "Practical daily steps and routines to support resting cycles." },
      { name: "Breathing exercises", description: "Structured techniques to help manage acute worry in the moment." }
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
        <link rel="canonical" href={seo.canonical} />

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

      {/* External References Section */}
      <section className="py-12 bg-white border-t border-gray-150 px-4">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-sm font-bold text-[#1A1A1A] uppercase tracking-wider mb-3 text-center">
            External References Used for Factual Accuracy
          </h3>
          <p className="text-xs text-[#5F5F5F] text-center mb-6">
            These external medical authorities were referenced to verify factual accuracy; no text was copied.
          </p>
          <ul className="grid sm:grid-cols-2 gap-3 text-xs text-[#5F5F5F] max-w-2xl mx-auto">
            <li className="flex items-start space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4A574] mt-1.5 flex-shrink-0" />
              <a href="https://www.who.int/news-room/fact-sheets/detail/anxiety-disorders" target="_blank" rel="noopener noreferrer" className="text-[#1F5E4B] hover:underline font-medium">
                World Health Organization — Anxiety disorders fact sheet
              </a>
            </li>
            <li className="flex items-start space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4A574] mt-1.5 flex-shrink-0" />
              <a href="https://www.mayoclinic.org/diseases-conditions/anxiety/symptoms-causes/syc-20350961" target="_blank" rel="noopener noreferrer" className="text-[#1F5E4B] hover:underline font-medium">
                Mayo Clinic — Anxiety disorders: symptoms and causes
              </a>
            </li>
            <li className="flex items-start space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4A574] mt-1.5 flex-shrink-0" />
              <a href="https://my.clevelandclinic.org/health/diseases/9536-anxiety-disorders" target="_blank" rel="noopener noreferrer" className="text-[#1F5E4B] hover:underline font-medium">
                Cleveland Clinic — Anxiety disorders: causes, symptoms, treatment
              </a>
            </li>
            <li className="flex items-start space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4A574] mt-1.5 flex-shrink-0" />
              <a href="https://www.nhs.uk/mental-health/conditions/anxiety/" target="_blank" rel="noopener noreferrer" className="text-[#1F5E4B] hover:underline font-medium">
                NHS — Get help with anxiety, fear or panic
              </a>
            </li>
            <li className="flex items-start space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4A574] mt-1.5 flex-shrink-0" />
              <a href="https://www.apa.org/topics/stress/anxiety-difference" target="_blank" rel="noopener noreferrer" className="text-[#1F5E4B] hover:underline font-medium">
                American Psychological Association — What’s the difference between stress and anxiety?
              </a>
            </li>
            <li className="flex items-start space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4A574] mt-1.5 flex-shrink-0" />
              <a href="https://www.nimh.nih.gov/health/topics/anxiety-disorders" target="_blank" rel="noopener noreferrer" className="text-[#1F5E4B] hover:underline font-medium">
                National Institute of Mental Health — Anxiety disorders
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* Medical Disclaimer */}
      <section className="py-10 bg-gray-50 border-t border-gray-150 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs text-gray-500 leading-relaxed">
            <strong className="text-gray-700">Medical Disclaimer:</strong> This content is for general informational purposes only and does not constitute medical, psychiatric, or psychological advice, diagnosis, or treatment. RamaCare Polyclinic provides supportive, lifestyle-based wellness care and does not diagnose anxiety disorders or provide psychotherapy. If you are experiencing significant anxiety, panic attacks, or other mental health symptoms, including thoughts of self-harm, please consult an appropriately licensed mental health professional or seek emergency care. Individual results vary, and no specific outcome is guaranteed.
          </p>
        </div>
      </section>
    </Layout>
  );
}
