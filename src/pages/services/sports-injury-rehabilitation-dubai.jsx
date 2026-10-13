import React from 'react';
import Head from 'next/head';
import Layout from '../../../components/Layout';
import ServicePageTemplate from '../../../components/ServicePageTemplate';
import { subcategoryContent } from '../../data/subcategoryContent';
import { DOCTORS } from '../../data/doctors';

const SITE = "https://ramacarepolyclinic.ae";
const CANONICAL_URL = `${SITE}/services/sports-injury-rehabilitation-dubai/`;
const JEENA_ID = `${SITE}/doctors/jeena-mathew-physiotherapist-dubai/#person`;

export default function SportsInjuryRehabilitationPage() {
  const content = subcategoryContent['sports-injury-rehabilitation-dubai'];

  if (!content) {
    return (
      <Layout>
        <div className="py-24 text-center">
          <p className="text-red-500">Service data not found.</p>
        </div>
      </Layout>
    );
  }

  const PAGE_TITLE = content.seo.title;
  const PAGE_DESCRIPTION = content.seo.metaDescription;
  const OG_IMAGE = `${SITE}/images/sports-physiotherapist-treating-athlete-dubai.jpg`;

  // Physiotherapist first, then GP (same-visit examination and X-ray for new injuries)
  const pageDoctors = [
    DOCTORS['jeena-mathew-physiotherapist-dubai'],
    DOCTORS['dr-sahar-zomorrodi-general-practitioner-dubai']
  ].filter(Boolean);

  const { breadcrumbs, faqs } = content;

  const therapy = (name, path) => ({
    "@type": "PhysicalTherapy",
    name,
    ...(path ? { url: `${SITE}${path}` } : {})
  });

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
            "item": b.href && b.href.startsWith('http') ? b.href : SITE + b.href
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
        "isPartOf": { "@id": `${SITE}/#website` },
        "breadcrumb": { "@id": `${CANONICAL_URL}#breadcrumb` },
        "specialty": "https://schema.org/Physiotherapy",
        "about": { "@id": `${CANONICAL_URL}#condition` },
        "reviewedBy": { "@id": JEENA_ID },
        "lastReviewed": "2026-10-15", // change to the deploy date
        "publisher": { "@id": `${SITE}/#clinic` }
      },
      {
        "@type": "MedicalCondition",
        "@id": `${CANONICAL_URL}#condition`,
        "name": "Sports injury",
        "alternateName": ["Sports-related musculoskeletal injury", "Athletic injury"],
        "possibleTreatment": [
          therapy("Sports injury rehabilitation and exercise therapy", "/services/physiotherapy-dubai/"),
          therapy("Return-to-sport testing"),
          therapy("Deep tissue sports massage"),
          therapy("Manual therapy"),
          therapy("Shockwave therapy"),
          therapy("Kinesio taping"),
          therapy("Dry needling", "/services/dry-needling-dubai/"),
          therapy("Post-surgery rehabilitation", "/services/post-surgery-rehabilitation-dubai/")
        ]
      },
      {
        "@type": "Person",
        "@id": JEENA_ID,
        "name": "Jeena Mathew",
        "jobTitle": "DHA-Licensed Physiotherapist",
        "url": `${SITE}/doctors/jeena-mathew-physiotherapist-dubai/`,
        "worksFor": { "@id": `${SITE}/#clinic` },
        "hasCredential": [
          { "@type": "EducationalOccupationalCredential", "credentialCategory": "Bachelor of Physiotherapy (BPT)" },
          { "@type": "EducationalOccupationalCredential", "credentialCategory": "Master of Physiotherapy (MPT)" }
        ]
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
        <meta property="og:image:alt" content="Sports injury physiotherapy in Jumeirah 1, Dubai - RamaCare Polyclinic" key="og:image:alt" />
        <meta property="og:site_name" content="RamaCare Polyclinic" key="og:site_name" />
        <meta property="og:locale" content="en_AE" key="og:locale" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content={PAGE_TITLE} key="twitter:title" />
        <meta name="twitter:description" content={PAGE_DESCRIPTION} key="twitter:description" />
        <meta name="twitter:image" content={OG_IMAGE} key="twitter:image" />

        {/* Structured Data */}
        <script
          key="schema-graph"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
        />
      </Head>

      <ServicePageTemplate content={{ ...content, doctors: pageDoctors }} />
    </Layout>
  );
}