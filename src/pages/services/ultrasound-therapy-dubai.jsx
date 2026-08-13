import Layout from '../../../components/Layout';
import Head from "next/head";
import Link from "next/link";
import TreatmentHero from '../../../components/TreatmentHero';
import QuickNavigation from '../../../components/QuickNavigation';
import TreatmentOverview from '../../../components/TreatmentOverview';
import HealingJourney from '../../../components/HealingJourney';
import TreatmentBenefits from '../../../components/TreatmentBenefits';
import PatientTestimonials from '../../../components/VideoTestimonials';
import DoctorsSection from '../../../components/DoctorsSection';
import PaymentInsurance from '../../../components/PaymentInsurance';
import FAQSection from '../../../components/Faq';
import BookConsultation from '../../../components/BookConsultation';
import { getSubcategoryContent } from '../../data/subcategoryContent';

const CANONICAL_URL = 'https://ramacarepolyclinic.ae/services/ultrasound-therapy-dubai/';

export default function UltrasoundTherapyPage() {
  const categoryName = 'Physiotherapy';
  const subcategoryName = 'Ultrasound Therapy';
  const content = getSubcategoryContent('physiotherapy-dubai', 'ultrasound-therapy');

  return (
    <Layout>
      <Head>
        <title key="title">Ultrasound Therapy in Dubai for Pain & Recovery | RamaCare</title>
        <meta name="description" content="Looking for ultrasound therapy in Dubai? Get personalized physiotherapy for muscle pain, stiffness, sports injuries and rehabilitation at RamaCare Polyclinic." key="description" />
        <link rel="canonical" href={CANONICAL_URL} />
        <meta name="keywords" content="Ultrasound therapy in Dubai, Therapeutic ultrasound Dubai, Ultrasound physiotherapy Dubai, Pain relief ultrasound therapy, Muscle injury treatment in Dubai, Joint pain therapy in Dubai, Sports injury ultrasound therapy, Physiotherapy ultrasound treatment, Rehabilitation therapy Dubai, Non-surgical pain treatment in Dubai" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
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
                  "name": "Services",
                  "item": "https://ramacarepolyclinic.ae/services/"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Physiotherapy",
                  "item": "https://ramacarepolyclinic.ae/services/physiotherapy-dubai/"
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "name": "Ultrasound Therapy in Dubai",
                  "item": CANONICAL_URL
                }
              ]
            })
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalWebPage",
              "@id": `${CANONICAL_URL}#webpage`,
              "url": CANONICAL_URL,
              "name": "Ultrasound Therapy in Dubai for Pain & Recovery | RamaCare",
              "description": "Looking for ultrasound therapy in Dubai? Get personalized physiotherapy for muscle pain, stiffness, sports injuries and rehabilitation at RamaCare Polyclinic.",
              "mainEntityOfPage": CANONICAL_URL,
              "author": {
                "@type": "MedicalClinic",
                "name": "RamaCare Polyclinic",
                "url": "https://ramacarepolyclinic.ae/"
              },
              "provider": {
                "@type": "MedicalClinic",
                "name": "RamaCare Polyclinic",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "12 Al Dhiyafah Rd - Jumeirah Terrace Building, Ground Floor, Jumeirah 1",
                  "addressLocality": "Jumeirah 1",
                  "addressRegion": "Dubai",
                  "postalCode": "393558",
                  "addressCountry": "AE"
                },
                "telephone": "+971 56 659 7878",
                "areaServed": {
                  "@type": "City",
                  "name": "Dubai"
                }
              }
            })
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalProcedure",
              "@id": `${CANONICAL_URL}#procedure`,
              "name": "Ultrasound Therapy in Dubai",
              "alternateName": "Therapeutic Ultrasound Treatment",
              "url": CANONICAL_URL,
              "mainEntityOfPage": CANONICAL_URL,
              "description": "Ultrasound Therapy in Dubai at RamaCare Polyclinic offers therapeutic ultrasound treatment as part of personalized physiotherapy and rehabilitation programs provided by DHA-licensed physiotherapists.",
              "procedureType": "Physical therapy",
              "bodyLocation": "Musculoskeletal system",
              "howPerformed": "Therapeutic ultrasound is applied by a qualified physiotherapist using a therapeutic ultrasound device over a selected treatment area as part of a broader physiotherapy and rehabilitation program.",
              "preparation": "A professional physiotherapy assessment is required before treatment to determine suitability.",
              "followup": "Follow-up sessions and progress evaluation may be recommended as part of the broader rehabilitation program.",
              "indication": [
                "Muscle pain and stiffness",
                "Joint stiffness",
                "Soft tissue rehabilitation",
                "Sports-related muscle strains",
                "Mobility limitations"
              ],
              "possibleComplication": "Individual suitability varies; a qualified physiotherapist should assess each patient before treatment.",
              "provider": {
                "@type": "MedicalClinic",
                "name": "RamaCare Polyclinic – Physiotherapy Department",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "12 Al Dhiyafah Rd - Jumeirah Terrace Building, Ground Floor, Jumeirah 1",
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
            })
          }}
        />

        {content?.faq?.faqs && content.faq.faqs.length > 0 && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": content.faq.faqs.map(faq => ({
                  "@type": "Question",
                  "name": faq.question,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.answer
                  }
                }))
              })
            }}
          />
        )}
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
      <SafetySection />

      <HealingJourney content={content?.healingJourney} />

      <TreatmentBenefits content={content?.benefits} />

      <FirstVisitSection content={content?.firstVisit} />

      <PatientTestimonials content={content?.testimonials} />

      <DoctorsSection content={content?.doctors} />

      <LocalClinicSection content={content?.localSection} />

      <CostSection content={content?.costSection} />

      <PaymentInsurance content={content?.paymentInsurance} />

      <FAQSection content={content?.faq} />

      <BookConsultation content={content?.bookConsultation} />
    </Layout>
  );
}

function SafetySection() {
  return (
    <section className="w-full bg-[#FAF9F6] py-12 border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="flex mb-4">
          <span className="bg-[#FEE2E2] text-[#991B1B] px-4 py-1.5 rounded-full font-medium text-xs flex items-center gap-1.5 shadow-sm">
            <svg className="w-3.5 h-3.5 text-[#991B1B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            Safety & Suitability
          </span>
        </div>

        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3" style={{ color: '#1F5E4B' }}>
          When May Therapeutic Ultrasound Not Be Suitable?
        </h2>
        <p className="text-sm md:text-base text-gray-600 mb-8 max-w-3xl">
          Therapeutic ultrasound is not appropriate for every patient or every body area.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <div className="bg-white rounded-xl p-6 md:p-8 shadow-md border border-gray-100 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center text-red-600 mb-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-base font-bold text-gray-900">Clinical Assessment</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                A physiotherapist should assess your medical history and current condition before treatment. Certain medical circumstances may require avoiding ultrasound over specific areas or choosing another treatment approach.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-gray-100">
              <p className="text-xs md:text-sm text-gray-500 font-medium">
                Your clinician can determine the safest and most appropriate treatment plan for your circumstances.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 md:p-8 shadow-md border border-gray-100 flex flex-col justify-between">
            <div className="space-y-4">
              <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
                Tell your physiotherapist about:
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Existing medical conditions',
                  'Recent surgery or injury',
                  'Implanted medical devices',
                  'Pregnancy, when relevant',
                  'Current medications',
                  'Previous physiotherapy or other treatments'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2.5 text-sm md:text-base text-gray-600">
                    <span className="text-[#991B1B] mt-1 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 pt-4 border-t border-gray-100">
              <p className="text-xs md:text-sm text-gray-500 italic">
                Clinical team must verify the final contraindication wording before publication.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FirstVisitSection({ content }) {
  if (!content) return null;
  return (
    <section className="w-full py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="flex mb-4">
          <span className="bg-[#ECFDF5] text-[#1F5E4B] px-4 py-1.5 rounded-full font-medium text-xs flex items-center gap-1.5 shadow-sm">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            First Visit
          </span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3" style={{ color: '#1F5E4B' }}>
          {content.title}
        </h2>
        <p className="text-sm md:text-base text-gray-600 mb-10 max-w-3xl">
          Your first physiotherapy appointment is focused on understanding your symptoms, evaluating your movement and function, and recommending an appropriate personalized plan.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.steps.map((step, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-[#FAF9F6] border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#1F5E4B] text-white flex items-center justify-center font-bold text-sm shadow-md group-hover:scale-105 transition-transform duration-300">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900">{step.title}</h3>
              </div>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LocalClinicSection({ content }) {
  if (!content) return null;
  return (
    <section className="w-full py-12 md:py-16 bg-[#F5F1E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          <div className="flex flex-col justify-center">
            <div className="flex mb-4">
              <span className="bg-[#EFF6FF] text-[#1E40AF] px-4 py-1.5 rounded-full font-medium text-xs flex items-center gap-1.5 shadow-sm">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Clinic Location
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4" style={{ color: '#1F5E4B' }}>
              {content.title}
            </h2>
            <div className="space-y-4 mb-8">
              {content.paragraphs.map((p, i) => (
                <p key={i} className="text-sm md:text-base text-gray-700 leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-5 h-5 text-[#1F5E4B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <h4 className="font-bold text-sm text-gray-900">Clinic Address</h4>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{content.address}</p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-5 h-5 text-[#1F5E4B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h4 className="font-bold text-sm text-gray-900">Clinic Hours</h4>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{content.hours}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 self-stretch">
            <img
              src="/images/ramacare-polyclinic-dubai-clinic.jpg"
              alt="RamaCare Polyclinic physiotherapy treatment"
              className="w-full h-64 md:h-80 object-cover"
              onError={(e) => { e.currentTarget.src = '/images/phy1.jpg'; }}
            />
            <div className="p-6 md:p-8">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Ready to Begin Your Assessment?</h3>
              <p className="text-sm md:text-base text-gray-600 mb-5 leading-relaxed">
                If you have been looking for Ultrasound Therapy in Dubai and would like to understand whether it is a suitable component of your rehabilitation plan, start with a professional physiotherapy assessment at RamaCare Polyclinic.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#book-now"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#1F5E4B] to-[#2D7A60] text-white px-5 py-3 rounded-lg font-semibold text-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Book Physiotherapy Assessment
                </a>
                <a
                  href="https://wa.me/971566597878"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border-2 border-[#25D366] text-[#1F5E4B] px-5 py-3 rounded-lg font-semibold text-sm hover:bg-[#25D366] hover:text-white transition-all duration-300"
                >
                  <svg className="w-5 h-5 text-[#25D366] group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CostSection({ content }) {
  if (!content) return null;
  return (
    <section className="w-full py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex mb-4">
            <span className="bg-[#FEF2F2] text-[#991B1B] px-4 py-1.5 rounded-full font-medium text-xs flex items-center gap-1.5 shadow-sm">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Pricing
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4" style={{ color: '#1F5E4B' }}>
            {content.title}
          </h2>
          <div className="space-y-4 mb-8">
            {content.paragraphs.map((p, i) => (
              <p key={i} className="text-sm md:text-base text-gray-700 leading-relaxed">
                {p}
              </p>
            ))}
          </div>
          {content.link && (
            <Link
              href={content.link.href}
              className="inline-flex items-center gap-2 bg-[#ECFDF5] border border-[#1F5E4B]/20 text-[#1F5E4B] px-5 py-3 rounded-lg font-semibold text-sm hover:bg-[#1F5E4B] hover:text-white transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              {content.link.text}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

