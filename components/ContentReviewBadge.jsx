import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, CheckCircle2, Award, Calendar, ExternalLink } from 'lucide-react';

export default function ContentReviewBadge({ doctorName, doctorRole, doctorCredentials, profileUrl, doctorImage, category, pageSlug, customStatement }) {
  const contextStr = ((doctorName || '') + ' ' + (category || '') + ' ' + (pageSlug || '')).toLowerCase();

  // Location and General Clinic Pages do NOT display a Content Reviewer Badge
  const isLocationOrClinicPage = contextStr.includes('polyclinic-in-jumeirah') ||
    contextStr.includes('polyclinic-near-jbr') ||
    contextStr.includes('polyclinic-near-dubai-marina') ||
    contextStr.includes('ayurvedic-clinic-in-jumeirah') ||
    contextStr.includes('clinic-in-business-bay');

  if (isLocationOrClinicPage) {
    return null;
  }

  const isExplicitJeena = doctorName && (doctorName.toLowerCase().includes('jeena') || doctorName.toLowerCase().includes('jheen') || doctorName.toLowerCase().includes('mathew'));
  const isExplicitShamna = doctorName && doctorName.toLowerCase().includes('shamna');
  const isExplicitSonita = doctorName && (doctorName.toLowerCase().includes('sonita') || doctorName.toLowerCase().includes('sinaga'));
  const isExplicitNodainne = doctorName && (doctorName.toLowerCase().includes('nodainne') || doctorName.toLowerCase().includes('guerrero'));
  const isExplicitSahar = doctorName && doctorName.toLowerCase().includes('sahar');
  const isExplicitHirbod = doctorName && doctorName.toLowerCase().includes('hirbod');
  const isExplicitAparna = doctorName && doctorName.toLowerCase().includes('aparna');

  const isGenericTitle = !doctorName || (!isExplicitJeena && !isExplicitShamna && !isExplicitSonita && !isExplicitNodainne && !isExplicitSahar && !isExplicitHirbod && !isExplicitAparna);

  let isJeena = isExplicitJeena;
  let isShamna = isExplicitShamna;
  let isSonita = isExplicitSonita;
  let isNodainne = isExplicitNodainne;
  let isSahar = isExplicitSahar;
  let isHirbod = isExplicitHirbod;
  let isAparna = isExplicitAparna;

  if (isGenericTitle) {
    // 1. Physiotherapy & Rehabilitation
    if (contextStr.includes('physio') || contextStr.includes('joint') || contextStr.includes('knee') || contextStr.includes('back') || contextStr.includes('shoulder') || contextStr.includes('neck') || contextStr.includes('sciatica') || contextStr.includes('disc') || contextStr.includes('rehab') || contextStr.includes('ultrasound') || contextStr.includes('spine') || contextStr.includes('post-surgery') || contextStr.includes('plantar') || contextStr.includes('cervical') || contextStr.includes('arthritis') || contextStr.includes('stress') || contextStr.includes('anxiety') || contextStr.includes('insomnia') || contextStr.includes('dry-needling') || contextStr.includes('electrotherapy')) {
      isJeena = true;
    }
    // 2. Ayurveda & Ayurvedic Comparisons
    else if (contextStr.includes('ayurveda') || contextStr.includes('panchakarma') || contextStr.includes('abhyanga') || contextStr.includes('gut') || contextStr.includes('basti') || contextStr.includes('shirodhara') || contextStr.includes('nasya')) {
      isShamna = true;
    }
    // 3. Dental & Teeth Treatments
    else if (contextStr.includes('dental') || contextStr.includes('teeth') || contextStr.includes('veneer') || contextStr.includes('root-canal') || contextStr.includes('crown') || contextStr.includes('braces') || contextStr.includes('smile') || contextStr.includes('filling')) {
      isHirbod = true;
    }
    // 4. Aesthetic Skincare, Facial, Microneedling & Laser (Sonita Sinaga)
    else if (contextStr.includes('acne-scar') || contextStr.includes('hydrafacial') || contextStr.includes('microneedling') || contextStr.includes('chemical-peel') || contextStr.includes('under-eye') || contextStr.includes('facelift') || contextStr.includes('eximia') || contextStr.includes('skin-renewal')) {
      isSonita = true;
    }
    // 5. Hair Loss, PRP Hair & Medical Dermatology (Melasma, Rosacea, Psoriasis, Dandruff, Skin Tag, Botox)
    else if (contextStr.includes('hair') || contextStr.includes('prp') || contextStr.includes('melasma') || contextStr.includes('rosacea') || contextStr.includes('psoriasis') || contextStr.includes('dandruff') || contextStr.includes('skin-tag') || contextStr.includes('botox')) {
      isSahar = true;
    }
    // 6. Default for General Medicine
    else {
      isSahar = true;
    }
  }

  let name = 'Dr. Sahar Zomorrodi';
  let role = 'General Practitioner & Aesthetic Specialist';
  let credentials = 'MD · DHA Licensed General Practitioner';
  let experience = '10+ Years Clinical Experience';
  let link = '/doctors/dr-sahar-zomorrodi-general-practitioner-dubai';
  let image = '/images/dr-sahar-zomorrodi-general-practitioner-dubai.png';
  let statement = 'This medical guide has been reviewed for clinical accuracy, diagnostic integrity, and DHA healthcare standards by Dr. Sahar Zomorrodi.';

  if (isJeena) {
    name = 'Jeena Mathew';
    role = 'Musculoskeletal Physiotherapy Specialist';
    credentials = 'BPT, MPT (Physiotherapy) · DHA Licensed Physiotherapist';
    experience = '8+ Years Clinical Experience · 600+ Patients Treated';
    link = '/doctors/jeena-mathew-physiotherapist-dubai';
    image = '/images/Jeena Mathew.jpeg';
    statement = 'This physiotherapy guide has been clinically reviewed and verified for medical accuracy, evidence-based joint care protocols, and DHA guidelines by Jeena Mathew to ensure safe, effective patient care.';
  } else if (isShamna) {
    name = 'Dr. Shamna Keloth Meethal';
    role = 'Ayurveda & Holistic Health Specialist';
    credentials = 'BAMS · DHA Licensed Ayurveda Doctor';
    experience = '11+ Years Clinical Experience · 800+ Patients Treated';
    link = '/doctors/dr-shamna-keloth-meethal-ayurveda-doctor-dubai';
    image = '/images/Dr Shamna Keloth Meethal.jpeg';
    statement = 'This Ayurvedic medical guide has been reviewed for clinical authenticity and DHA healthcare standards by Dr. Shamna Keloth Meethal to support holistic wellness and evidence-based patient guidance.';
  } else if (isSonita) {
    name = 'Sonita Sinaga';
    role = 'Licensed & Certified Aesthetic Therapist';
    credentials = 'NCLC Laser Certified · Licensed Aesthetic Therapist';
    experience = '14+ Years Clinical Experience';
    link = '/doctors/sonita-sinaga-aesthetic-therapist-dubai';
    image = '/images/Sonita.jpeg';
    statement = `This aesthetic dermatology & skincare guide has been clinically reviewed for treatment safety, ${contextStr.includes('prp') ? 'PRP protocols' : 'laser protocols'}, and skincare excellence by Sonita Sinaga.`;
  } else if (isNodainne) {
    name = 'Nodainne Baves Guerrero';
    role = 'Certified Aesthetic & Beauty Therapist';
    credentials = 'Certified Aesthetic & Skincare Specialist';
    experience = 'Professional Aesthetic & Skincare Experience';
    link = '/doctors/nodainne-baves-guerrero-beauty-therapist-dubai';
    image = '/images/Nodainne Baves Guerrero.jpeg';
    statement = 'This aesthetic & facial care guide has been reviewed for clinical skincare standards and treatment safety by Nodainne Baves Guerrero.';
  } else if (isSahar) {
    name = 'Dr. Sahar Zomorrodi';
    role = 'General Practitioner & Aesthetic Specialist';
    credentials = 'MD · DHA Licensed General Practitioner';
    experience = '10+ Years Clinical Experience';
    link = '/doctors/dr-sahar-zomorrodi-general-practitioner-dubai';
    image = '/images/dr-sahar-zomorrodi-general-practitioner-dubai.png';
    if (contextStr.includes('insomnia') || contextStr.includes('sleep')) {
      statement = 'This sleep wellness guide has been clinically reviewed for medical accuracy, safety, and DHA standards by Dr. Sahar Zomorrodi.';
    } else if (contextStr.includes('dermatology') || contextStr.includes('acne') || contextStr.includes('skin') || contextStr.includes('botox') || contextStr.includes('melasma') || contextStr.includes('rosacea')) {
      statement = 'This medical & dermatology guide has been clinically reviewed for medical accuracy, safety, and DHA standards by Dr. Sahar Zomorrodi.';
    } else {
      statement = 'This medical guide has been clinically reviewed for medical accuracy, safety, and DHA standards by Dr. Sahar Zomorrodi.';
    }
  } else if (isHirbod) {
    name = 'Dr. Hirbod Gilandoust';
    role = 'Specialist Cosmetic Dentist';
    credentials = 'DDS · DHA Licensed Specialist Dentist';
    experience = '12+ Years Clinical Experience';
    link = '/doctors/dr-hirbod-gilandoust-dentist-dubai';
    image = '/images/Hirbod.jpeg';
    statement = 'This dental care guide has been reviewed for clinical precision, safety, and DHA dental protocols by Dr. Hirbod Gilandoust.';
  } else if (isAparna) {
    name = 'Dr. Aparna Balakrishnan';
    role = 'Cosmetic & General Dentist';
    credentials = 'BDS · DHA Licensed Dentist';
    experience = '10+ Years Clinical Experience';
    link = '/doctors/dr-aparna-balakrishnan-cosmetic-dentist-dubai';
    image = '/images/Dr Aparna.jpg';
    statement = 'This dental treatment guide has been clinically reviewed for medical accuracy and patient safety by Dr. Aparna Balakrishnan.';
  }

  // Override props if explicitly provided
  if (doctorImage) {
    image = doctorImage;
  }
  if (customStatement) {
    statement = customStatement;
  }

  return (
    <section className="bg-[#F9F7F4] py-12 px-4 sm:px-6 lg:px-8 border-t border-[#E0D8CC]/60">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-[#E0D8CC] transition-all hover:shadow-md">
        
        {/* Top Header Badge Row */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-gray-100">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1F5E4B]/10 text-[#1F5E4B] text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-[#1F5E4B]" />
            <span>Medically & Clinically Reviewed</span>
          </div>
          <div className="inline-flex items-center gap-1.5 text-xs text-[#5F5F5F] font-medium bg-[#F5F1EA] px-3 py-1 rounded-full">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#1F5E4B]" />
            <span>DHA Licensed Polyclinic Standards</span>
          </div>
        </div>

        {/* Middle Doctor Profile Section */}
        <div className="py-6 flex flex-col sm:flex-row items-center sm:items-start gap-5">
          {/* Prominent High-Resolution Avatar Photo with Crisp Face Framing */}
          <div className="relative flex-shrink-0">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-[#1F5E4B] shadow-lg bg-gradient-to-b from-[#F5F1EA] to-white flex items-center justify-center">
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  if (!e.currentTarget.dataset.retried) {
                    e.currentTarget.dataset.retried = 'true';
                    e.currentTarget.src = '/images/Sahar.png';
                  }
                }}
                style={{
                  imageRendering: '-webkit-optimize-contrast',
                  WebkitBackfaceVisibility: 'hidden'
                }}
              />
            </div>
            <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-[#1F5E4B] text-white rounded-full flex items-center justify-center border-2 border-white shadow-md" title="DHA Licensed Specialist">
              <CheckCircle2 className="w-4 h-4" />
            </div>
          </div>

          {/* Doctor Info & Review Statement */}
          <div className="flex-1 text-center sm:text-left">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-1">
              <h3 className="text-lg sm:text-xl font-bold text-[#1A1A1A]">
                Content Reviewed by <Link href={link} className="text-[#1F5E4B] hover:underline decoration-[#1F5E4B]/40">{name}</Link>
              </h3>
            </div>

            <p className="text-xs sm:text-sm font-semibold text-[#D4A574] uppercase tracking-wide mb-1">
              {role}
            </p>

            <p className="text-xs text-[#5F5F5F] mb-3">
              {credentials} • <span className="text-[#1F5E4B] font-medium">{experience}</span>
            </p>

            <div className="bg-[#F9F7F4] p-4 rounded-2xl border-l-4 border-[#1F5E4B] text-xs sm:text-sm text-[#5F5F5F] leading-relaxed italic">
              "{statement}"
            </div>
          </div>
        </div>

        {/* Bottom CTA Action Bar */}
        <div className="pt-5 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-[#5F5F5F]">
            <Award className="w-4 h-4 text-[#1F5E4B]" />
            <span>RamaCare Medical Review Board • Jumeirah 1, Dubai</span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href={link}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#1F5E4B] hover:bg-[#154a32] text-white transition-all text-xs font-bold shadow-sm"
            >
              <span>View Doctor Profile</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
