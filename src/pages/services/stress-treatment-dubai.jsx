import React from 'react';
import Head from 'next/head';
import Layout from '../../../components/Layout';
import ServicePageTemplate from '../../../components/ServicePageTemplate';
import { subcategoryContent } from '../../data/subcategoryContent';

export default function StressTreatmentPage() {
  const content = subcategoryContent['stress-treatment-dubai'];

  if (!content) {
    return (
      <Layout>
        <div className="py-24 text-center">
          <p className="text-red-500">Service data not found.</p>
        </div>
      </Layout>
    );
  }

  const CANONICAL_URL = "https://ramacarepolyclinic.ae/services/stress-treatment-dubai/";
  const PAGE_TITLE = "Stress Treatment Dubai | Supportive Care at RamaCare";
  const PAGE_DESCRIPTION = "Feeling overwhelmed by stress? RamaCare Polyclinic Dubai offers personalized Stress Treatment Dubai support with DHA-licensed professionals. Book today.";
  const OG_IMAGE = "https://ramacarepolyclinic.ae/images/stress-treatment-dubai-og.jpg";

  const { breadcrumbs, faqs } = content;

  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
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
          "name": "Stress"
        },
        "lastReviewed": "2026-08-29",
        "reviewedBy": {
          "@id": `${CANONICAL_URL}#physician`
        },
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "@id": `${CANONICAL_URL}#breadcrumb`,
          "itemListElement": (breadcrumbs || []).map((b, i) => ({
            "@type": "ListItem",
            "position": i + 1,
            "name": b.label,
            "item": b.href && b.href.startsWith('http') ? b.href : `https://ramacarepolyclinic.ae${b.href}`
          }))
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
        "mainEntity": (faqs || []).map((f) => ({
          "@type": "Question",
          "name": f.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.answer
          }
        }))
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
        <meta property="og:image:alt" content="Stress Treatment in Dubai - RamaCare Polyclinic" key="og:image:alt" />
        <meta property="og:site_name" content="RamaCare Polyclinic" key="og:site_name" />
        <meta property="og:locale" content="en_AE" key="og:locale" />

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
    </Layout>
  );
}


