import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Calendar, MessageCircle, Clock, Shield, MapPin, Zap, CheckCircle2, Radio, Award, UserCheck, Lock, ChevronDown, Activity, Droplet, Heart } from 'lucide-react';
import Layout from '../../../components/Layout';
import { useToast } from '../../../components/Toast';

const PostSurgeryRecoveryPage = () => {
  const whatsappNumber = "971566597878";
  const whatsappMessage = encodeURIComponent("Hello RamaCare, I'm interested in Post-Surgery Recovery using Ultrasound Therapy.");
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', surgeryType: '', time: '' });
  const { showToast, ToastComponent } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/appointment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.name,
          phone: formData.phone,
          email: formData.email,
          preferredTime: formData.time,
          concern: 'Post-Surgery Recovery',
          surgeryType: formData.surgeryType,
          source: 'post-surgery-recovery-dubai'
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        showToast("Appointment request sent! We'll contact you within 1 hour.", 'success');
        setFormData({ name: '', phone: '', email: '', surgeryType: '', time: '' });
      } else {
        showToast('Failed to submit. Please try again or contact us directly.', 'error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      showToast('Something went wrong. Please try again or contact us directly.', 'error');
    }
  };

  return (
    <>
    <Layout>
      <Head>
        <title key="title">Post-Op Healing: Ultrasound for Scar Tissue in Dubai | RamaCare</title>
        <meta name="description" content="Speed up your post-surgical healing in Dubai. Learn how RamaCare's ultrasound therapy prevents scar tissue stiffness and accelerates tissue repair after surgery." key="description" />
        
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700;800&display=swap" rel="stylesheet" />
      </Head>

      <main className="min-h-screen" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
        {/* Hero Section */}
        <section className="relative bg-white overflow-hidden">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-20">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Left Column: Content */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                {/* H1 — Figma: ~60px, font-normal, tight leading */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight text-[#1A1A1A] font-semibold">
                  Post-Surgery Recovery Dubai | Ultrasound for Scar Tissue at RamaCare
                </h1>

                {/* Description */}
                <p className="text-[16px] text-[#5F5F5F] leading-[1.7]">
                  Speed up your post-surgical healing in Dubai. Learn how RamaCare's <a href="/services/ultrasound-therapy-dubai/" className="text-[#1F5E4B] hover:underline font-semibold">ultrasound therapy</a> prevents scar tissue stiffness and accelerates tissue repair after surgery.
                </p>

                {/* H2 subheading */}
                <h2 className="text-[28px] md:text-[32px] font-semibold text-[#1F5E4B] leading-[1.25]">
                  The Critical Role of Ultrasound in Post-Op Recovery
                </h2>

                {/* Body paragraphs */}
                <div className="space-y-4 text-[16px] text-[#5F5F5F] leading-[1.7]">
                  <p>
                    After any surgery—whether it is an ACL reconstruction, rotator cuff repair, or a standard orthopedic procedure—the body begins a complex healing process. However, the biggest risk during this time is the formation of <strong className="text-[#1A1A1A] font-semibold">Adhesions</strong> (thick, disorganized scar tissue) that can limit your range of motion forever.
                  </p>
                  <p>
                    At RamaCare Polyclinic, we use therapeutic <a href="/services/ultrasound-therapy-dubai/" className="text-[#1F5E4B] hover:underline font-semibold">ultrasound therapy</a> as a primary tool in post-surgical rehabilitation to ensure your new tissue grows back flexible, strong, and pain-free.
                  </p>
                </div>

                {/* Buttons — Figma: dark green + bright green, bold, large padding */}
                <div className="flex flex-wrap gap-4 pt-2">
                  <a 
                    href="#book-now"
                    className="inline-flex items-center justify-center gap-2 bg-[#1F5E4B] text-white text-[15px] font-bold px-7 py-[14px] rounded-lg hover:bg-[#164a38] transition-colors"
                  >
                    <Calendar className="w-[18px] h-[18px]" />
                    Book Your Post-Op Assessment
                  </a>
                  <a 
                    href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white text-[15px] font-bold px-7 py-[14px] rounded-lg hover:bg-[#20bd5a] transition-colors"
                  >
                    <MessageCircle className="w-[18px] h-[18px]" />
                    WhatsApp Now
                  </a>
                </div>

                {/* Trust Badges — Figma: single row, CheckCircle icon, no border-top gap */}
                <div className="flex flex-wrap gap-x-8 gap-y-3 pt-4 text-[14px] font-medium text-[#1A1A1A]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-[18px] h-[18px] text-[#1F5E4B]" />
                    <span>DHA Licensed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-[18px] h-[18px] text-[#1F5E4B]" />
                    <span>Post-Surgery Experts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-[18px] h-[18px] text-[#1F5E4B]" />
                    <span>Dubai Athletes Choice</span>
                  </div>
                </div>
              </motion.div>

              {/* Right Column: Green card — Figma: flat #2D7A64, large icon circle, legend at bottom */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative w-full lg:mt-40"
              >
                <div className="w-full rounded-[16px] overflow-hidden bg-[#2D7A64] flex flex-col items-center justify-center py-16 px-10 gap-10">
                  {/* Large icon circle */}
                  <div className="w-[160px] h-[160px] bg-[#1F5E4B]/60 rounded-full flex items-center justify-center">
                    <svg className="w-[90px] h-[90px] text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                    </svg>
                  </div>

                  {/* Legend row */}
                  <div className="flex flex-col items-center gap-3">
                    <div className="flex items-center gap-4 text-white text-[13px]">
                      <div className="flex items-center gap-2">
                        <div className="w-[10px] h-[10px] bg-[#FF6B6B] rounded-full"></div>
                        <span>Scar Tissue</span>
                      </div>
                      <div className="w-12 h-px bg-white/50"></div>
                      <div className="flex items-center gap-2">
                        <span>Smooth Recovery</span>
                        <div className="w-[10px] h-[10px] bg-[#4ADE80] rounded-full"></div>
                      </div>
                    </div>
                    <p className="text-white/80 text-[13px] text-center">Ultrasound therapy accelerates healing</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Remodeling Phase Section */}
        <section className="bg-[#EAE4D9] py-16 md:py-24">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 flex justify-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white w-full max-w-[780px] px-12 py-10 rounded-2xl shadow-md space-y-6"
            >
              {/* Heading */}
              <h2 className="text-[28px] md:text-[32px] font-semibold text-[#1F5E4B] leading-[1.3]">
                The "Remodeling" Phase:
              </h2>

              {/* Body */}
              <p className="text-[15px] text-[#5F5F5F] leading-[1.7]">
                <a href="/services/ultrasound-therapy-dubai/" className="text-[#1F5E4B] hover:underline font-semibold">Ultrasound therapy</a> is most effective during the <strong className="text-[#1A1A1A] font-semibold">Remodeling Phase</strong> of healing (usually 2–6 weeks post-op). It uses high-frequency vibrations to "reorganize" collagen fibers, ensuring they lay down in a neat, functional pattern rather than a messy, stiff clump.
              </p>

              {/* Timeline */}
              <div className="pt-6">
                <div className="relative flex items-start justify-between">
                  {/* Background line — behind circles, centered at circle midpoint */}
                  <div className="absolute top-[26px] left-[26px] right-[26px] h-[2px] z-0"
                    style={{ background: 'linear-gradient(to right, #e5e7eb 0%, #1F5E4B 20%, #1F5E4B 80%, #e5e7eb 100%)' }}
                  />

                  {[
                    { week: 'Week 1',  label: 'Inflammation',     active: false },
                    { week: 'Week 2',  label: 'Remodeling Begins', active: true  },
                    { week: 'Week 3-4',label: 'Peak Treatment',   active: true  },
                    { week: 'Week 5-6',label: 'Tissue Strength',  active: true  },
                    { week: 'Week 6+', label: 'Maintenance',      active: false }
                  ].map((item, idx) => (
                    <div key={idx} className="flex flex-col items-center relative z-10 w-[52px]">
                      {/* Circle */}
                      <div className={`w-[52px] h-[52px] rounded-full flex items-center justify-center text-[15px] font-semibold shadow-sm border-2 ${
                        item.active
                          ? 'bg-[#1F5E4B] text-white border-[#1F5E4B]'
                          : 'bg-white text-[#9CA3AF] border-[#D1D5DB]'
                      }`}>
                        {idx + 1}
                      </div>
                      {/* Labels */}
                      <div className="mt-3 text-center w-[80px] -ml-[14px]">
                        <p className="font-semibold text-[13px] text-[#1A1A1A] leading-tight">{item.week}</p>
                        <p className="text-[12px] text-[#6B7280] mt-0.5 leading-tight">{item.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* How Ultrasound Accelerates Recovery */}
        <section className="bg-white py-16 md:py-24">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">

            {/* Section heading — 48px bold */}
            <h2
              className="text-center text-[#1A1A1A] mb-14"
              style={{ fontSize: '48px', fontWeight: 700, lineHeight: 1.2 }}
            >
              How Ultrasound Accelerates Surgical Recovery
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: <Activity className="w-6 h-6" />,
                  title: 'Increased Protein Synthesis:',
                  body: <>The "acoustic streaming" effect of <a href="/services/ultrasound-therapy-dubai/" className="text-[#1F5E4B] hover:underline font-semibold">ultrasound therapy</a> stimulates the cells (fibroblasts) responsible for producing the proteins needed to close and strengthen surgical wounds.</>
                },
                {
                  icon: <Droplet className="w-6 h-6" />,
                  title: 'Reduction of Edema (Swelling):',
                  body: <>Post-op swelling can trap nerves and cause immense pain. <a href="/services/ultrasound-therapy-dubai/" className="text-[#1F5E4B] hover:underline font-semibold">Ultrasound therapy</a> helps move interstitial fluid back into the lymphatic system, visibly reducing swelling in the joint.</>
                },
                {
                  icon: <Shield className="w-6 h-6" />,
                  title: 'Softening Internal Scar Tissue:',
                  body: <>It prevents internal "internal snagging" where the skin or muscle sticks to the surgical hardware (screws/plates) or the bone. <a href="/services/ultrasound-therapy-dubai/" className="text-[#1F5E4B] hover:underline font-semibold">Ultrasound therapy</a> softens internal scar tissue effectively.</>
                }
              ].map((card, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-[#EAE4D9] rounded-2xl p-8 flex flex-col gap-5"
                >
                  {/* Icon circle — Figma: dark green #1F5E4B, ~52px, all 3 same color */}
                  <div
                    className="w-[52px] h-[52px] rounded-full flex items-center justify-center text-white flex-shrink-0"
                    style={{ backgroundColor: '#1F5E4B' }}
                  >
                    {card.icon}
                  </div>
                  {/* Title */}
                  <h3
                    className="text-[#1A1A1A]"
                    style={{ fontSize: '16px', fontWeight: 600, lineHeight: 1.5 }}
                  >
                    {card.title}
                  </h3>
                  {/* Body */}
                  <p
                    className="text-[#5F5F5F]"
                    style={{ fontSize: '15px', lineHeight: 1.75 }}
                  >
                    {card.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Common Post-Surgical Cases Section */}
        <section className="bg-[#EAE4D9] py-16 md:py-24">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">

            {/* Heading */}
            <h2
              className="text-center text-[#1A1A1A] mb-14"
              style={{ fontSize: '48px', fontWeight: 700, lineHeight: 1.2 }}
            >
              Common Post-Surgical Cases We Treat in Jumeirah 1
            </h2>

            <div className="grid md:grid-cols-2 gap-6">

              {/* Card 1 — ACL & Knee Replacements */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0 }}
                className="group relative rounded-2xl p-8 text-white flex flex-col gap-4 overflow-hidden cursor-pointer"
                style={{ backgroundColor: '#1F5E4B' }}
              >
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10 flex flex-col gap-4">
                  <h3 style={{ fontSize: '20px', fontWeight: 700, lineHeight: 1.4 }}>ACL &amp; Knee Replacements</h3>
                  <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.90)', lineHeight: 1.7 }}>
                    Reducing stiffness in the knee capsule for a faster return to walking.
                  </p>
                  <a href="#book-now" className="inline-flex items-center gap-1 text-white hover:underline" style={{ fontSize: '14px', fontWeight: 600 }}>
                    Learn More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </a>
                </div>
              </motion.div>

              {/* Card 2 — Rotator Cuff & Shoulder Surgery */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="group relative rounded-2xl p-8 text-white flex flex-col gap-4 overflow-hidden cursor-pointer"
                style={{ backgroundColor: '#2D7A64' }}
              >
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10 flex flex-col gap-4">
                  <h3 style={{ fontSize: '20px', fontWeight: 700, lineHeight: 1.4 }}>Rotator Cuff &amp; Shoulder Surgery</h3>
                  <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.90)', lineHeight: 1.7 }}>
                    Preventing &quot;Frozen Shoulder&quot; by maintaining tissue elasticity.
                  </p>
                  <a href="#book-now" className="inline-flex items-center gap-1 text-white hover:underline" style={{ fontSize: '14px', fontWeight: 600 }}>
                    Learn More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </a>
                </div>
              </motion.div>

              {/* Card 3 — Abdominal Surgery Recovery */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="group relative rounded-2xl p-8 text-white flex flex-col gap-4 overflow-hidden cursor-pointer"
                style={{ backgroundColor: '#3D8B6F' }}
              >
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10 flex flex-col gap-4">
                  <h3 style={{ fontSize: '20px', fontWeight: 700, lineHeight: 1.4 }}>Abdominal Surgery Recovery</h3>
                  <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.90)', lineHeight: 1.7 }}>
                    Gently managing deep-tissue adhesions to improve core mobility.
                  </p>
                  <a href="#book-now" className="inline-flex items-center gap-1 text-white hover:underline" style={{ fontSize: '14px', fontWeight: 600 }}>
                    Learn More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </a>
                </div>
              </motion.div>

              {/* Card 4 — Fracture Healing Support */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="group relative rounded-2xl p-8 text-white flex flex-col gap-4 overflow-hidden cursor-pointer"
                style={{ backgroundColor: '#4A9E80' }}
              >
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10 flex flex-col gap-4">
                  <h3 style={{ fontSize: '20px', fontWeight: 700, lineHeight: 1.4 }}>Fracture Healing Support</h3>
                  <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.90)', lineHeight: 1.7 }}>
                    Low-intensity pulsed <a href="/services/ultrasound-therapy-dubai/" className="underline font-semibold text-white">ultrasound therapy</a> (LIPUS) can actually help speed up bone knitting in non-union fractures.
                  </p>
                  <a href="#book-now" className="inline-flex items-center gap-1 text-white hover:underline" style={{ fontSize: '14px', fontWeight: 600 }}>
                    Learn More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </a>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Safe-Start Protocol Table */}
        <section className="bg-white py-16 md:py-24">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
            <div className="text-center mb-12">
              <h2
                className="text-[#1A1A1A] mb-5"
                style={{ fontSize: '48px', fontWeight: 700, lineHeight: 1.2 }}
              >
                The RamaCare &quot;Safe-Start&quot; Protocol
              </h2>
              <p className="text-[#5F5F5F] max-w-3xl mx-auto" style={{ fontSize: '17px', lineHeight: 1.7 }}>
                Timing is everything in post-surgical care. We follow a strict safety timeline to ensure the surgical site is ready for <a href="/services/ultrasound-therapy-dubai/" className="text-[#1F5E4B] hover:underline font-semibold">ultrasound therapy</a>:
              </p>
            </div>

            <div className="bg-[#F9F5F0] rounded-2xl shadow-lg overflow-hidden border border-gray-100">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#1F5E4B] text-white">
                    <th className="px-8 py-5 text-lg font-semibold">Post-Op Timing</th>
                    <th className="px-8 py-5 text-lg font-semibold">Treatment Goal</th>
                    <th className="px-8 py-5 text-lg font-semibold">Ultrasound Mode</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="bg-[#F5F1E8]">
                    <td className="px-8 py-6 font-bold text-[#1A1A1A]">Days 1–14</td>
                    <td className="px-8 py-6 text-[#5F5F5F]">Reduce Swelling</td>
                    <td className="px-8 py-6 text-[#5F5F5F]">Non-Thermal (Pulsed)</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-8 py-6 font-bold text-[#1A1A1A]">Weeks 3–6</td>
                    <td className="px-8 py-6 text-[#5F5F5F]">Stimulate Repair</td>
                    <td className="px-8 py-6 text-[#5F5F5F]">Low-Thermal</td>
                  </tr>
                  <tr className="bg-[#F5F1E8]">
                    <td className="px-8 py-6 font-bold text-[#1A1A1A]">Week 6+</td>
                    <td className="px-8 py-6 text-[#5F5F5F]">Break Scar Tissue</td>
                    <td className="px-8 py-6 text-[#5F5F5F]">Continuous Thermal</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-[#EAE4D9] py-16 md:py-24">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
            <div className="max-w-4xl mx-auto">
              <h2
                className="text-[#1A1A1A] text-center mb-3"
                style={{ fontSize: '56px', fontWeight: 700, lineHeight: 1.15 }}>
                Frequently Asked Questions
              </h2>
              <p className="text-center text-[#5F5F5F] mb-12" style={{ fontSize: '15px' }}>People Also Ask (PAA)</p>
            
              <div className="space-y-4">
                {[
                  {
                    q: "Is it safe to use ultrasound over surgical metal plates or screws?",
                    a: "Yes. Unlike Microwave or Shortwave diathermy, therapeutic ultrasound does not heat up metal implants significantly. It is 100% safe for patients with orthopedic hardware, provided it is administered by a DHA-licensed professional."
                  },
                  {
                    q: "Does ultrasound help reduce the appearance of surgical scars?",
                    a: "While our primary goal is internal healing, ultrasound does improve the blood supply to the skin, which can lead to a flatter, softer, and less prominent external scar."
                  },
                  {
                    q: "When can I start ultrasound after my surgery?",
                    a: "Typically, we wait until the surgical staples or sutures are removed (usually 10–14 days). However, we can begin treating the surrounding muscles almost immediately to prevent compensatory stiffness."
                  }
                ].map((faq, index) => (
                  <details key={index} className="group bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300">
                    <summary className="flex justify-between items-center text-left px-8 py-6 cursor-pointer list-none focus:outline-none hover:bg-[#F9F5F0]/50 transition-colors">
                      <span className="text-lg md:text-xl font-semibold text-[#1A1A1A] pr-8">{faq.q}</span>
                      <ChevronDown className="w-6 h-6 text-[#1F5E4B] flex-shrink-0 group-open:rotate-180 transition-transform duration-300" />
                    </summary>
                    <div className="px-6 md:px-8 pb-6">
                      <p className="text-lg text-[#5F5F5F] leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section id="book-now" className="bg-[#1F5E4B] py-20">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Column: Content */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <h2 className="text-3xl md:text-4xl lg:text-[48px] font-semibold text-white leading-tight">
                    Recover Faster, Move Better
                  </h2>
                  <p className="text-base md:text-lg lg:text-[20px] text-white/90 leading-relaxed">
                    If you have recently had surgery in Dubai, don't leave your recovery to chance. Let the specialists at RamaCare Polyclinic design a high-tech healing plan for you.
                  </p>
                </div>

                {/* Info Cards */}
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-white/70 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-white font-bold text-base">Location</p>
                      <p className="text-white/70 text-sm">12 Al Dhiyafah Rd - Jumeirah Terrace Building, Ground Floor, Jumeirah 1 - Dubai</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Award className="w-6 h-6 text-white/70 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-white font-bold text-base">Specialty</p>
                      <p className="text-white/70 text-sm">Orthopedic & Post-Surgical Rehabilitation</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-white/70 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-white font-bold text-base">Next Step</p>
                      <p className="text-white/70 text-sm">Book Your Post-Op Assessment</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Form */}
              <div className="bg-white rounded-2xl p-8 md:p-10 shadow-2xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="block text-[16px] font-bold text-[#1A1A1A]">Name</label>
                    <input 
                      type="text" 
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      required
                      minLength={2}
                      maxLength={50}
                      pattern="[a-zA-Z\s'-]+"
                      title="Please enter a valid name (letters, spaces, hyphens only)"
                      className="w-full px-6 py-4 bg-[#F5F1E8]/50 border border-transparent rounded-xl focus:outline-none focus:border-[#1F5E4B] transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-[16px] font-bold text-[#1A1A1A]">Phone</label>
                    <input 
                      type="tel" 
                      placeholder="+971 XX XXX XXXX"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      required
                      minLength={8}
                      maxLength={20}
                      pattern="[0-9+\s-]+"
                      title="Please enter a valid phone number"
                      className="w-full px-6 py-4 bg-[#F5F1E8]/50 border border-transparent rounded-xl focus:outline-none focus:border-[#1F5E4B] transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-[16px] font-bold text-[#1A1A1A]">Email</label>
                    <input 
                      type="email" 
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full px-6 py-4 bg-[#F5F1E8]/50 border border-transparent rounded-xl focus:outline-none focus:border-[#1F5E4B] transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-[16px] font-bold text-[#1A1A1A]">Surgery Type</label>
                    <select 
                      value={formData.surgeryType}
                      onChange={e => setFormData({ ...formData, surgeryType: e.target.value })}
                      required
                      className="w-full px-6 py-4 bg-[#F5F1E8]/50 border border-transparent rounded-xl focus:outline-none focus:border-[#1F5E4B] transition-colors"
                    >
                      <option value="">Select surgery type</option>
                      <option value="ACL/Knee">ACL/Knee Reconstruction</option>
                      <option value="Rotator Cuff">Rotator Cuff/Shoulder</option>
                      <option value="Abdominal">Abdominal Surgery</option>
                      <option value="Fracture">Fracture/Bone Surgery</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="block text-[16px] font-bold text-[#1A1A1A]">Preferred Time</label>
                    <select 
                      value={formData.time}
                      onChange={e => setFormData({ ...formData, time: e.target.value })}
                      required
                      className="w-full px-6 py-4 bg-[#F5F1E8]/50 border border-transparent rounded-xl focus:outline-none focus:border-[#1F5E4B] transition-colors"
                    >
                      <option value="">Select preferred time</option>
                      <option value="Morning">Morning</option>
                      <option value="Afternoon">Afternoon</option>
                      <option value="Evening">Evening</option>
                    </select>
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-[#1F5E4B] text-white px-10 py-4 rounded-xl font-bold hover:bg-[#164a38] transition-all shadow-lg text-lg"
                  >
                    Confirm Appointment
                  </button>
            
                  <a 
                    href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="flex items-center justify-center gap-3 bg-[#25D366] text-white px-10 py-4 rounded-xl font-bold hover:bg-[#20bd5a] transition-all shadow-lg text-lg"
                  >
                    <MessageCircle className="w-6 h-6" />
                    WhatsApp Instantly
                  </a>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
    {ToastComponent}
    </>
  );
};
export default PostSurgeryRecoveryPage;
