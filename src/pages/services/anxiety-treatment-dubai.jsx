import React from 'react';
import Head from 'next/head';
import Layout from '../../../components/Layout';
import ServicePageTemplate from '../../../components/ServicePageTemplate';
import ContentReviewBadge from '../../../components/ContentReviewBadge';
import { subcategoryContent } from '../../data/subcategoryContent';

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

  const CANONICAL_URL = "https://ramacarepolyclinic.ae/services/anxiety-treatment-dubai/";
  const PAGE_TITLE = "Anxiety Treatment Dubai | Supportive Care at RamaCare";
  const PAGE_DESCRIPTION = "Struggling with anxiety? RamaCare Polyclinic Dubai offers personalized Anxiety Treatment Dubai support with DHA-licensed experts. Book your consultation today.";
  const OG_IMAGE = "https://ramacarepolyclinic.ae/images/Healthcare professional discussing anxiety management with a patient.jpg";

  const { breadcrumbs, faqs } = content;

  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `${CANONICAL_URL}#breadcrumb`,
        "itemListElement": (breadcrumbs || []).map(function (b, i) {
          return {
            "@type": "ListItem",
            "position": i + 1,
            "name": b.label,
            "item": b.href && b.href.startsWith('http') ? b.href : "https://ramacarepolyclinic.ae" + b.href
          };
        })
      },
      {
        "@type": "MedicalWebPage",
        "@id": `${CANONICAL_URL}#webpage`,
        "url": CANONICAL_URL,
        "name": PAGE_TITLE,
        "description": PAGE_DESCRIPTION,
        "inLanguage": "en",
        "isPartOf": {
          "@type": "WebSite",
          "url": "https://ramacarepolyclinic.ae/",
          "name": "RamaCare Polyclinic"
        },
        "about": {
          "@type": "MedicalCondition",
          "name": "Anxiety"
        },
        "reviewedBy": {
          "@id": `${CANONICAL_URL}#physician`
        },
        "publisher": {
          "@type": "MedicalOrganization",
          "name": "RamaCare Polyclinic",
          "url": "https://ramacarepolyclinic.ae/"
        }
      },
      {
        "@type": "Physician",
        "@id": `${CANONICAL_URL}#physician`,
        "name": "Jeena Mathew",
        "medicalSpecialty": "Musculoskeletal Physiotherapy",
        "honorificSuffix": "BPT, MPT",
        "hasCredential": "DHA Licensed Physiotherapist",
        "url": "https://ramacarepolyclinic.ae/doctors/jeena-mathew-physiotherapist-dubai/",
        "worksFor": {
          "@type": "MedicalOrganization",
          "name": "RamaCare Polyclinic"
        }
      },
      {
        "@type": "FAQPage",
        "@id": `${CANONICAL_URL}#faq`,
        "mainEntity": (faqs || []).map(function (f) {
          return {
            "@type": "Question",
            "name": f.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": f.answer
            }
          };
        })
      }
    ]
  };

  return (
    <Layout>
      <Head>
        <title key="title">{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_DESCRIPTION} key="description" />
        <meta name="robots" content="index, follow" key="robots" />
        <link rel="canonical" href={CANONICAL_URL} key="canonical" />

        {/* Open Graph Tags */}
        <meta property="og:type" content="website" key="og:type" />
        <meta property="og:title" content={PAGE_TITLE} key="og:title" />
        <meta property="og:description" content={PAGE_DESCRIPTION} key="og:description" />
        <meta property="og:url" content={CANONICAL_URL} key="og:url" />
        <meta property="og:image" content={OG_IMAGE} key="og:image" />
        <meta property="og:image:width" content="1200" key="og:image:width" />
        <meta property="og:image:height" content="630" key="og:image:height" />
        <meta property="og:image:alt" content="Anxiety Treatment in Dubai - RamaCare Polyclinic" key="og:image:alt" />
        <meta property="og:site_name" content="RamaCare Polyclinic" key="og:site_name" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content={PAGE_TITLE} key="twitter:title" />
        <meta name="twitter:description" content={PAGE_DESCRIPTION} key="twitter:description" />
        <meta name="twitter:image" content={OG_IMAGE} key="twitter:image" />

        {/* Structured Data Schemas */}
        <script
          key="schema-graph"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
        />
      </Head>

      <ServicePageTemplate content={content} />
      <ContentReviewBadge doctorName="Jeena Mathew" pageSlug="anxiety-treatment-dubai" />

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
