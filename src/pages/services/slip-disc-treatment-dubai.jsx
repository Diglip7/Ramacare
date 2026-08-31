import React from 'react';
import Head from 'next/head';
import Layout from '../../../components/Layout';
import ServicePageTemplate from '../../../components/ServicePageTemplate';
import { subcategoryContent } from '../../data/subcategoryContent';

export default function SlipDiscTreatmentPage() {
  const content = subcategoryContent['slip-disc-treatment-dubai'];
  
  if (!content) {
    return (
      <Layout>
        <div className="py-24 text-center">
          <p className="text-red-500">Service data not found.</p>
        </div>
      </Layout>
    );
  }

  const CANONICAL_URL = "https://ramacarepolyclinic.ae/services/slip-disc-treatment-dubai/";
  const PAGE_TITLE = "Slip Disc Treatment Dubai | RamaCare Polyclinic";
  const PAGE_DESCRIPTION = "Get expert Slip Disc Treatment Dubai at RamaCare Polyclinic. DHA-licensed physiotherapists, personalized recovery plans. Book your assessment in Dubai today.";
  const OG_IMAGE = "https://ramacarepolyclinic.ae/images/spine-anatomy-illustration-slip-disc.jpg";

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
        "medicalAudience": { "@type": "Patient" },
        "about": { "@type": "MedicalCondition", "name": "Herniated Disc (Slip Disc)" },
        "reviewedBy": { "@id": `${CANONICAL_URL}#physician` },
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
        "medicalSpecialty": "Physiotherapy",
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
            "acceptedAnswer": { "@type": "Answer", "text": f.answer }
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
        <meta property="og:image:alt" content="Spine anatomy diagram showing disc position relevant to slip disc treatment Dubai" key="og:image:alt" />
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
    </Layout>
  );
}
