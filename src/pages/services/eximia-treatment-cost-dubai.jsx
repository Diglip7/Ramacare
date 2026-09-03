import Layout from '../../../components/Layout';
import Head from "next/head";
import Image from "next/image";
import { useState } from 'react';

export default function EximiaTreatmentCostPage() {
  const [openIndex, setOpenIndex] = useState(null);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    treatmentArea: '',
    preferredDate: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const validateField = (name, value) => {
    if (name === 'fullName') {
      if (!value || value.trim().length < 3) return 'Full name must be at least 3 characters';
      return '';
    }
    if (name === 'phone') {
      if (!value || !/^[+]?[1-9]\d{1,14}$/.test(value.replace(/\s/g, ''))) return 'Enter a valid phone number (7–15 digits)';
      return '';
    }
    if (name === 'email') {
      if (!value || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Enter a valid email address';
      return '';
    }
    if (name === 'treatmentArea') {
      if (!value) return 'Please select a treatment area';
      return '';
    }
    if (name === 'preferredDate') {
      if (!value) return 'Please select a preferred date';
      const selected = new Date(value);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selected < today) return 'Date cannot be in the past';
      return '';
    }
    return '';
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setErrors(prev => {
      const newErrors = { ...prev };
      const error = validateField(name, value);
      if (error) newErrors[name] = error;
      else delete newErrors[name];
      return newErrors;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });
    setErrors(newErrors);
    
    if (Object.keys(newErrors).length > 0) return;
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const res = await fetch('/api/appointment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source: 'EximiaTreatmentCost',
          action: 'book_appointment',
          ...formData
        })
      });
      
      if (res.ok) {
        setSubmitStatus('success');
        setFormData({
          fullName: '',
          phone: '',
          email: '',
          treatmentArea: '',
          preferredDate: ''
        });
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus(null), 5000);
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/971566597878', '_blank');
  };

  const scrollToForm = () => {
    document.getElementById('appointment-form')?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <Layout>
      <Head>
        <title key="title">Eximia Treatment Cost in Dubai: 2026 Pricing Guide</title>
        <meta name="description" content="Discover the cost of Eximia body contouring treatment in Dubai. Get detailed pricing information, factors affecting cost, and book your consultation at RamaCare Polyclinic." key="description" />
        <meta name="keywords" content="Eximia treatment cost Dubai, Eximia body contouring price, non-surgical body sculpting cost, skin tightening treatment price, fat reduction treatment Dubai, Eximia HR77 cost, body contouring packages Dubai, aesthetic treatment pricing" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "MedicalProcedure",
                  "@id": "https://ramacarepolyclinic.ae/eximia-treatment-cost-dubai#procedure",
                  "name": "Eximia Body Contouring Treatment",
                  "alternateName": "Non-Surgical Body Contouring, Fat Reduction Treatment",
                  "url": "https://ramacarepolyclinic.ae/eximia-treatment-cost-dubai",
                  "mainEntityOfPage": "https://ramacarepolyclinic.ae/eximia-treatment-cost-dubai",
                  "description": "Eximia HR77 is a non-invasive body contouring treatment that combines radiofrequency, ultrasound, vacuum massage, and mechanical stimulation to reduce fat, tighten skin, and improve body contours.",
                  "procedureType": "Non-invasive body contouring procedure",
                  "indication": [
                    "Localized stubborn fat deposits",
                    "Loose, sagging skin",
                    "Cellulite reduction",
                    "Body contouring and shaping"
                  ],
                  "provider": {
                    "@type": "MedicalClinic",
                    "name": "RamaCare Polyclinic – Aesthetic & Dermatology Care",
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
                },
                {
                  "@type": "FAQPage",
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "How much does Eximia treatment cost in Dubai?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Eximia treatment in Dubai typically ranges from AED 700 to AED 2,500 per session, depending on the treatment area, number of sessions, and specific goals."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "How many sessions are needed for Eximia body contouring?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Most patients require 6-12 sessions for optimal results, with treatments spaced 1-2 weeks apart."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Is Eximia treatment painful?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "No, Eximia treatment is completely painless and non-invasive. Most patients find it relaxing and comfortable."
                      }
                    }
                  ]
                }
              ]
            })
          }}
        />
      </Head>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#F5F1EA] to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"></div>
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#1F5E4B]/10 px-5 py-2.5 rounded-full text-sm font-semibold text-[#1F5E4B]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles w-4 h-4">
                  <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>
                  <path d="M20 3v4"/>
                  <path d="M22 5h-4"/>
                  <path d="M4 17v2"/>
                  <path d="M5 18H3"/>
                </svg>
                2026 Updated Pricing Guide
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] leading-[1.1]">
                Eximia Treatment Cost in Dubai: 2026 Pricing Guide
              </h1>

              <p className="text-lg text-[#5F5F5F] leading-relaxed">
                Are you looking to sculpt your body and reduce stubborn fat without the downtime of surgery? Eximia HR77 body contouring is a leading non-invasive solution in the UAE for skin tightening and fat reduction. However, before booking, most patients want to know: <span className="font-semibold text-[#1A1A1A]">How much does Eximia cost in Dubai?</span> On average, prices range from <span className="text-[#1F5E4B] font-medium">AED 700 to AED 2,500 per session</span>, depending on your specific goals.
              </p>

              <div className="space-y-3 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#1F5E4B] flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                  <span className="text-[#1A1A1A] text-[16px] font-medium">Non-surgical body contouring</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#1F5E4B] flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                  <span className="text-[#1A1A1A] text-[16px] font-medium">Skin tightening & cellulite reduction</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#1F5E4B] flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                  <span className="text-[#1A1A1A] text-[16px] font-medium">No downtime treatment</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#1F5E4B] flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                  <span className="text-[#1A1A1A] text-[16px] font-medium">Visible results within a few sessions</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <button 
                  onClick={scrollToForm}
                  className="px-8 py-4 bg-[#1F5E4B] text-white font-semibold rounded-full hover:bg-[#184837] transition-all shadow-lg shadow-[#1F5E4B]/30 hover:shadow-xl hover:shadow-[#1F5E4B]/40 hover:scale-[1.02]"
                >
                  Book Free Consultation
                </button>
                <button 
                  onClick={handleWhatsAppClick}
                  className="px-8 py-4 border-2 border-[#1F5E4B] text-[#1F5E4B] font-semibold rounded-full hover:bg-[#1F5E4B]/5 transition-all flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                  </svg>
                  WhatsApp Consultation
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white p-6">
                <div className="relative aspect-square">
                  <Image
                    src="/images/ex.jpg"
                    alt="Eximia HR77 body contouring treatment anatomy"
                    fill
                    className="object-cover rounded-2xl"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
                  />
                </div>
                <div className="absolute top-8 right-8 bg-white rounded-2xl shadow-lg px-6 py-4">
                  <p className="text-sm text-gray-600 mb-1">Starting from</p>
                  <p className="text-3xl font-bold text-[#1F5E4B]">AED 700</p>
                  <p className="text-sm text-gray-500">per session</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Factors Affecting Pricing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
              Factors Affecting Eximia Pricing in Dubai
            </h2>
            <p className="text-[#5F5F5F] max-w-2xl mx-auto text-lg text-[18px]">
              Understanding what influences the cost of your treatment
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 - The Technology Version */}
            <div className="bg-[#F5F1EA] p-8 rounded-2xl shadow-md hover:shadow-xl transition-all border border-[#E9E2D6]">
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm">
                <svg className="w-8 h-8 text-[#1F5E4B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-3 text-[20px] font-semibold">The Technology Version</h3>
              <p className="text-[#5F5F5F] leading-relaxed text-[16px]">
                Ensure your clinic uses the latest Eximia HR77 Platinum Edition for maximum results.
              </p>
            </div>

            {/* Card 2 - Treatment Area Size */}
            <div className="bg-[#F5F1EA] p-8 rounded-2xl shadow-md hover:shadow-xl transition-all border border-[#E9E2D6]">
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm">
                <svg className="w-8 h-8 text-[#1F5E4B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-3 text-[20px] font-semibold">Treatment Area Size</h3>
              <p className="text-[#5F5F5F] leading-relaxed text-[16px]">
                Smaller areas like the double chin or arms cost less than full abdomen or thighs.
              </p>
            </div>

            {/* Card 3 - Package Bundles */}
            <div className="bg-[#F5F1EA] p-8 rounded-2xl shadow-md hover:shadow-xl transition-all border border-[#E9E2D6]">
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm">
                <svg className="w-8 h-8 text-[#1F5E4B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-3 text-[20px] font-semibold">Package Bundles</h3>
              <p className="text-[#5F5F5F] leading-relaxed text-[16px]">
                Single sessions cost more. Packages of 6 or 10 sessions typically provide 20–30% savings.
              </p>
            </div>

            {/* Card 4 - Practitioner Expertise */}
            <div className="bg-[#F5F1EA] p-8 rounded-2xl shadow-md hover:shadow-xl transition-all border border-[#E9E2D6]">
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm">
                <svg className="w-8 h-8 text-[#1F5E4B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-3 text-[20px] font-semibold">Practitioner Expertise</h3>
              <p className="text-[#5F5F5F] leading-relaxed text-[16px]">
                Treatments by experienced DHA licensed therapists ensure safer procedures and better contouring.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Average Cost Breakdown Section */}
      <section className="py-20 bg-gradient-to-br from-[#F5F1EA] to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4 text-[36px]">
              Average Cost Breakdown
            </h2>
            <p className="text-[#5F5F5F] max-w-2xl mx-auto text-lg text-[18px]">
              Transparent pricing for your treatment plan
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-[#E9E2D6]">
            {/* Table Header */}
            <div className="hidden md:flex border-b border-[#E9E2D6] bg-[#F5F1EA]">
              <div className="flex-1 px-8 py-5 font-bold text-[#1A1A1A] text-[16px] text-left">Treatment Area</div>
              <div className="flex-1 px-8 py-5 font-bold text-[#1A1A1A] text-[16px] text-center">Single Session (Est.)</div>
              <div className="flex-1 px-8 py-5 font-bold text-[#1A1A1A] text-[16px] text-center">Package of 6 (Est.)</div>
            </div>

            {/* Mobile View */}
            <div className="md:hidden">
              {/* Row 1 */}
              <div className="p-6 border-b border-[#E9E2D6] hover:bg-[#F5F1EA]/50 transition-colors">
                <div className="font-semibold text-[#1A1A1A] text-[16px] mb-3">Small Area (Chin/Arms)</div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[#5F5F5F] text-[14px]">Single Session:</span>
                  <span className="text-[#5F5F5F] text-[14px]">AED 700 - 900</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#1A1A1A] font-semibold text-[14px]">Package of 6:</span>
                  <span className="text-[#1F5E4B] font-bold text-[14px]">AED 3,600 - 4,500</span>
                </div>
              </div>

              {/* Row 2 */}
              <div className="p-6 border-b border-[#E9E2D6] hover:bg-[#F5F1EA]/50 transition-colors">
                <div className="font-medium text-[#1A1A1A] text-[16px] mb-3">Large Area (Abdomen/Thighs)</div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[#5F5F5F] text-[14px]">Single Session:</span>
                  <span className="text-[#5F5F5F] text-[14px]">AED 1,200 - 1,500</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#1A1A1A] font-semibold text-[14px]">Package of 6:</span>
                  <span className="text-[#1F5E4B] font-bold text-[14px]">AED 6,500 - 8,000</span>
                </div>
              </div>

              {/* Row 3 */}
              <div className="p-6 hover:bg-[#F5F1EA]/50 transition-colors">
                <div className="font-medium text-[#1A1A1A] text-[16px] mb-3">Full Body Transformation</div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[#5F5F5F] text-[14px]">Single Session:</span>
                  <span className="text-[#5F5F5F] text-[14px]">AED 2,000+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#1A1A1A] font-semibold text-[14px]">Package of 6:</span>
                  <span className="text-[#1F5E4B] font-bold text-[14px]">AED 10,000+</span>
                </div>
              </div>
            </div>

            {/* Desktop View */}
            <div className="hidden md:block">
              {/* Table Row 1 */}
              <div className="flex border-b border-[#E9E2D6] hover:bg-[#F5F1EA]/50 transition-colors">
                <div className="flex-1 px-8 py-6 text-[#1A1A1A] font-semibold text-[16px]">Small Area (Chin/Arms)</div>
                <div className="flex-1 px-8 py-6 text-[#5F5F5F] text-[16px] text-center">AED 700 - 900</div>
                <div className="flex-1 px-8 py-6 text-[#1F5E4B] font-bold text-[16px] text-center">AED 3,600 - 4,500</div>
              </div>

              {/* Table Row 2 */}
              <div className="flex border-b border-[#E9E2D6] hover:bg-[#F5F1EA]/50 transition-colors">
                <div className="flex-1 px-8 py-6 text-[#1A1A1A] font-medium text-[16px]">Large Area (Abdomen/Thighs)</div>
                <div className="flex-1 px-8 py-6 text-[#5F5F5F] text-[16px] text-center">AED 1,200 - 1,500</div>
                <div className="flex-1 px-8 py-6 text-[#1F5E4B] font-bold text-[16px] text-center">AED 6,500 - 8,000</div>
              </div>

              {/* Table Row 3 */}
              <div className="flex hover:bg-[#F5F1EA]/50 transition-colors">
                <div className="flex-1 px-8 py-6 text-[#1A1A1A] font-medium text-[16px]">Full Body Transformation</div>
                <div className="flex-1 px-8 py-6 text-[#5F5F5F] text-[16px] text-center">AED 2,000+</div>
                <div className="flex-1 px-8 py-6 text-[#1F5E4B] font-bold text-[16px] text-center">AED 10,000+</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Is Eximia Worth the Investment Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4 text-[36px]">
              Is Eximia Worth the Investment?
            </h2>
            <p className="text-[#5F5F5F] max-w-2xl mx-auto text-lg text-[18px]">
              Discover the benefits that make this treatment worthwhile
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Zero Downtime */}
            <div className="bg-[#F5F1EA] p-8 rounded-3xl shadow-md hover:shadow-xl transition-all border border-[#E9E2D6]">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                <svg className="w-8 h-8 text-[#1F5E4B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" strokeWidth="2"/>
                  <path strokeLinecap="round" strokeWidth="2" d="M12 6v6l4 2"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">
                Zero Downtime
              </h3>
              <p className="text-[#5F5F5F] text-lg leading-relaxed">
                You can return to work immediately after treatment.
              </p>
            </div>

            {/* 4-in-1 Technology */}
            <div className="bg-[#F5F1EA] p-8 rounded-3xl shadow-md hover:shadow-xl transition-all border border-[#E9E2D6]">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                <svg className="w-8 h-8 text-[#1F5E4B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">
                4-in-1 Technology
              </h3>
              <p className="text-[#5F5F5F] text-lg leading-relaxed">
                Laserporation, Radiofrequency, Vacuum Therapy, and Magnetic stimulation combined.
              </p>
            </div>

            {/* Visible Results */}
            <div className="bg-[#F5F1EA] p-8 rounded-3xl shadow-md hover:shadow-xl transition-all border border-[#E9E2D6]">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                <svg className="w-8 h-8 text-[#1F5E4B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">
                Visible Results
              </h3>
              <p className="text-[#5F5F5F] text-lg leading-relaxed">
                Most patients see measurable body contour improvement after a few sessions.
              </p>
            </div>
          </div>

          {/* Pro Tip */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-[#1F5E4B] p-8 rounded-2xl max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <svg className="w-6 h-6 text-[#1F5E4B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-[#1A1A1A] mb-2 text-lg flex items-center gap-2">
                  <span>💡</span>
                  Pro Tip
                </h4>
                <p className="text-[#5F5F5F] text-lg leading-relaxed">
                  Look for clinics that offer a free body assessment so your treatment plan is personalized to your specific needs and goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gradient-to-br from-[#F5F1EA] to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-[#5F5F5F] text-lg">
              Everything you need to know about Eximia treatment
            </p>
          </div>

          <div className="space-y-4">
            {/* FAQ Item 1 */}
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all overflow-hidden">
              <button 
                onClick={() => toggleFAQ(0)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors focus:outline-none"
              >
                <span className="font-bold text-[#1A1A1A] text-lg pr-4">Does insurance cover Eximia in Dubai?</span>
                <svg 
                  className={`w-5 h-5 text-[#5F5F5F] flex-shrink-0 transition-transform duration-300 ${openIndex === 0 ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
              {openIndex === 0 && (
                <div className="px-6 pb-6">
                  <p className="text-[#5F5F5F] text-base leading-relaxed">
                    Eximia is a cosmetic procedure, so it is not covered under standard health insurance plans.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ Item 2 */}
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all overflow-hidden">
              <button 
                onClick={() => toggleFAQ(1)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors focus:outline-none"
              >
                <span className="font-bold text-[#1A1A1A] text-lg pr-4">How many sessions will I need?</span>
                <svg 
                  className={`w-5 h-5 text-[#5F5F5F] flex-shrink-0 transition-transform duration-300 ${openIndex === 1 ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
              {openIndex === 1 && (
                <div className="px-6 pb-6">
                  <p className="text-[#5F5F5F] text-base leading-relaxed">
                    Most patients require 6 to 10 sessions spaced about 72 hours apart for optimal results.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ Item 3 */}
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all overflow-hidden">
              <button 
                onClick={() => toggleFAQ(2)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors focus:outline-none"
              >
                <span className="font-bold text-[#1A1A1A] text-lg pr-4">Is Eximia painful?</span>
                <svg 
                  className={`w-5 h-5 text-[#5F5F5F] flex-shrink-0 transition-transform duration-300 ${openIndex === 2 ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
              {openIndex === 2 && (
                <div className="px-6 pb-6">
                  <p className="text-[#5F5F5F] text-base leading-relaxed">
                    The treatment is generally comfortable, with most patients describing a warm massage-like sensation.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ Item 4 */}
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all overflow-hidden">
              <button 
                onClick={() => toggleFAQ(3)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors focus:outline-none"
              >
                <span className="font-bold text-[#1A1A1A] text-lg pr-4">How soon can I see results?</span>
                <svg 
                  className={`w-5 h-5 text-[#5F5F5F] flex-shrink-0 transition-transform duration-300 ${openIndex === 3 ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
              {openIndex === 3 && (
                <div className="px-6 pb-6">
                  <p className="text-[#5F5F5F] text-base leading-relaxed">
                    Many patients notice improvement after 1–2 sessions, with gradual contouring over the treatment course.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ Item 5 */}
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all overflow-hidden">
              <button 
                onClick={() => toggleFAQ(4)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors focus:outline-none"
              >
                <span className="font-bold text-[#1A1A1A] text-lg pr-4">Which body areas can be treated?</span>
                <svg 
                  className={`w-5 h-5 text-[#5F5F5F] flex-shrink-0 transition-transform duration-300 ${openIndex === 4 ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
              {openIndex === 4 && (
                <div className="px-6 pb-6">
                  <p className="text-[#5F5F5F] text-base leading-relaxed">
                    Common areas include abdomen, thighs, arms, flanks, and areas with localized fat deposits.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#1F5E4B] to-[#154231] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Content */}
            <div className="py-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Start Your Transformation?
              </h2>
              <p className="text-white/90 text-lg leading-relaxed mb-8">
                For a detailed breakdown of the procedure and to see why we are the top-rated clinic for <a href="https://ramacarepolyclinic.ae/services/eximia-body-contouring-dubai/" className="text-white font-bold border-b-2 border-white/50 hover:border-white transition-all">Eximia Body Contouring Dubai</a>, book your consultation today.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button 
                  onClick={scrollToForm}
                  className="px-8 py-4 bg-white text-[#1F5E4B] font-bold rounded-full hover:bg-gray-100 transition-all shadow-lg"
                >
                  Book Free Consultation
                </button>
                <button 
                  onClick={handleWhatsAppClick}
                  className="px-8 py-4 bg-[#25D366] text-white font-bold rounded-full hover:bg-[#20bd5a] transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Book via WhatsApp
                </button>
              </div>

              <div className="border-t border-white/20 pt-8">
                <div className="grid grid-cols-3 gap-8">
                  <div>
                    <div className="text-3xl font-bold text-white mb-2">500+</div>
                    <div className="text-white/70 text-sm">Happy Clients</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white mb-2">15+</div>
                    <div className="text-white/70 text-sm">Years Combined Experience</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white mb-2">98%</div>
                    <div className="text-white/70 text-sm">Success Rate</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Form */}
            <div id="appointment-form" className="bg-white rounded-3xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-[#1A1A1A] mb-6">
                Book Your Appointment
              </h3>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <div>
                    <p className="font-semibold text-green-800">Appointment Request Submitted!</p>
                    <p className="text-sm text-green-700 mt-1">We'll contact you within 24 hours to confirm your appointment.</p>
                  </div>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3">
                  <svg className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <div>
                    <p className="font-semibold text-red-800">Submission Failed</p>
                    <p className="text-sm text-red-700 mt-1">Please try again or contact us directly at +971 50 123 4567.</p>
                  </div>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">Name</label>
                  <input 
                    type="text" 
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className={`w-full px-4 py-3 bg-[#F5F1EA] rounded-xl border ${errors.fullName ? 'border-red-500' : 'border-[#E9E2D6]'} focus:outline-none focus:ring-2 focus:ring-[#1F5E4B]/50 text-[#1A1A1A]`}
                  />
                  {errors.fullName && <p className="mt-1.5 text-red-600 text-xs">{errors.fullName}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">Phone</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+971 XX XXX XXXX"
                    className={`w-full px-4 py-3 bg-[#F5F1EA] rounded-xl border ${errors.phone ? 'border-red-500' : 'border-[#E9E2D6]'} focus:outline-none focus:ring-2 focus:ring-[#1F5E4B]/50 text-[#1A1A1A]`}
                  />
                  {errors.phone && <p className="mt-1.5 text-red-600 text-xs">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className={`w-full px-4 py-3 bg-[#F5F1EA] rounded-xl border ${errors.email ? 'border-red-500' : 'border-[#E9E2D6]'} focus:outline-none focus:ring-2 focus:ring-[#1F5E4B]/50 text-[#1A1A1A]`}
                  />
                  {errors.email && <p className="mt-1.5 text-red-600 text-xs">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">Treatment Interest</label>
                  <select 
                    name="treatmentArea"
                    value={formData.treatmentArea}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-[#F5F1EA] rounded-xl border ${errors.treatmentArea ? 'border-red-500' : 'border-[#E9E2D6]'} focus:outline-none focus:ring-2 focus:ring-[#1F5E4B]/50 text-[#1A1A1A]`}
                  >
                    <option value="">Select treatment area</option>
                    <option value="abdomen">Abdomen</option>
                    <option value="thighs">Thighs</option>
                    <option value="arms">Arms</option>
                    <option value="buttocks">Buttocks</option>
                    <option value="back">Back</option>
                    <option value="chin">Chin</option>
                  </select>
                  {errors.treatmentArea && <p className="mt-1.5 text-red-600 text-xs">{errors.treatmentArea}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">Preferred Date</label>
                  <input 
                    type="date" 
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                    className={`w-full px-4 py-3 bg-[#F5F1EA] rounded-xl border ${errors.preferredDate ? 'border-red-500' : 'border-[#E9E2D6]'} focus:outline-none focus:ring-2 focus:ring-[#1F5E4B]/50 text-[#1A1A1A]`}
                  />
                  {errors.preferredDate && <p className="mt-1.5 text-red-600 text-xs">{errors.preferredDate}</p>}
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-8 py-4 bg-[#1F5E4B] text-white font-bold rounded-xl hover:bg-[#184837] transition-all shadow-lg flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    <>
                      Confirm Appointment Request
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                      </svg>
                    </>
                  )}
                </button>
                
                <div className="flex items-center justify-center gap-2 pt-2">
                  <svg className="w-4 h-4 text-[#6B7280]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <p className="text-xs text-[#6B7280]">Your information is secure and confidential</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
