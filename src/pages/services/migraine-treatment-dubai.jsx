import Layout from '../../../components/Layout';
import Head from "next/head";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import BookConsultation from '../../../components/BookConsultation';
import { subcategoryContent } from '../../data/subcategoryContent';
import { 
  Target, 
  MapPin, 
  Award, 
  Phone, 
  ArrowRight, 
  CheckCircle, 
  Clock, 
  Users, 
  Heart, 
  Shield, 
  Zap,
  ChevronDown,
  ChevronUp,
  AlertCircle,
  Sparkles,
  Brain,
  Eye,
  Droplets
} from 'lucide-react';

export default function MigraineTreatmentPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  // Get content from data file - Single source of truth
  const content = subcategoryContent['migraine-treatment-dubai'];
  const { advantages, migraineFactors, symptoms, headacheTypes, whenToSeeDoctor, treatmentOptions, treatmentProcess, benefits, whoCanBenefit, preventionTips, faqs } = content;

  // Map icon names to actual components
  const iconMap = {
    Target,
    Zap,
    Heart,
    Shield,
    Sparkles,
    Brain,
    Eye,
    Droplets
  };

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <Layout>
      <Head>
        <title key="title">Migraine Treatment in Dubai | Headache Relief</title>
        <meta name="description" content="Expert migraine treatment in Dubai with personalized care for chronic headaches and wellness support at Rama Care Polyclinic." key="description" />
        <meta name="keywords" content="Migraine treatment Dubai, Chronic migraine treatment, Headache treatment Dubai, Tension headache treatment, Stress-related headache Dubai, Migraine specialist Dubai, Physiotherapy for migraine" />
        
        
        
      </Head>

      {/* Hero Section - Unique Diagonal Design */}
      <section className="relative bg-white overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-[#E8F5E9] to-transparent"></div>
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#1F5E4B]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-64 h-64 bg-[#2A7D63]/5 rounded-full blur-2xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 md:pt-32 md:pb-20 lg:pt-40 lg:pb-24">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content - Spans 7 columns */}
            <div className="lg:col-span-7 space-y-6 md:space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                {/* Badge with Icon */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-3 bg-white border-2 border-[#1F5E4B]/20 px-5 py-2.5 rounded-full shadow-sm"
                >
                  <div className="w-8 h-8 bg-[#1F5E4B] rounded-full flex items-center justify-center">
                    <Brain className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-[#1F5E4B] font-semibold text-sm">Neurological Headache Care</span>
                </motion.div>
                
                {/* Main Heading */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="space-y-2"
                >
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#1A1A1A] leading-[1.1]">
                    Migraine <span className="text-[#1b5e3f]">Treatment</span>
                  </h1>
                </motion.div>

                {/* Subtitle */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-lg md:text-xl text-[#1F5E4B] font-medium leading-relaxed"
                >
                  Personalized Care for Chronic Headaches, Migraine Relief & Better Quality of Life
                </motion.p>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-base md:text-lg text-[#5F5F5F] leading-relaxed max-w-2xl hidden sm:block"
                >
                  Migraines are more than just a headache. It is a neurological condition that can cause intense pain, nausea, sensitivity to light and sound, fatigue, and difficulty performing daily activities.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-wrap gap-4"
                >
                  <a
                    href="#book-now"
                    className="group inline-flex items-center gap-3 bg-[#1F5E4B] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#2A7D63] transition-all hover:shadow-lg hover:-translate-y-0.5"
                  >
                    <Clock className="w-5 h-5" />
                    <span>Book Consultation</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a rel="nofollow noopener noreferrer" target="_blank" href="https://wa.me/971566597878"
                    className="inline-flex items-center gap-3 border-2 border-[#1F5E4B] text-[#1F5E4B] px-8 py-4 rounded-lg font-semibold hover:bg-[#1F5E4B] hover:text-white transition-all hover:-translate-y-0.5"
                  >
                    <Phone className="w-5 h-5" />
                    <span>WhatsApp</span>
                  </a>
                </motion.div>
              </motion.div>

              {/* Stats with Icons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="grid grid-cols-2 gap-6 pt-8 border-t-2 border-[#E9E2D6]"
              >
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-[#E8F5E9] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-[#1F5E4B]" />
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-bold text-[#1A1A1A]">500+</div>
                    <div className="text-xs md:text-sm text-[#5F5F5F]">Patients Treated</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-[#FFF3E0] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-[#E65100]" />
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-bold text-[#1A1A1A]">95%</div>
                    <div className="text-xs md:text-sm text-[#5F5F5F]">Success Rate</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Visual - Spans 5 columns */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="lg:col-span-5 hidden lg:block"
            >
              <div className="relative">
                {/* Main Feature Card */}
                <div className="bg-gradient-to-br from-[#1F5E4B] to-[#2A7D63] rounded-2xl p-8 text-white shadow-2xl">
                  <div className="space-y-6">
                    <div className="text-center">
                      <Brain className="w-20 h-20 mx-auto opacity-30 mb-4" />
                      <h3 className="text-2xl font-bold mb-2">Comprehensive Care</h3>
                      <p className="text-white/80 text-sm">Multi-disciplinary approach to migraine relief</p>
                    </div>
                    
                    {/* Service List */}
                    <div className="space-y-3">
                      {['Personalized Treatment Plans', 'Non-Surgical Approach', 'Holistic Wellness Support'].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                          <CheckCircle className="w-5 h-5 flex-shrink-0" />
                          <span className="font-medium text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, type: 'spring' }}
                  className="absolute -top-4 -right-4 bg-white rounded-xl shadow-xl p-4 border-2 border-[#1F5E4B]/20"
                >
                  <div className="flex items-center gap-2">
                    <Target className="w-6 h-6 text-[#1F5E4B]" />
                    <div>
                      <div className="text-sm font-bold text-[#1A1A1A]">Expert</div>
                      <div className="text-xs text-[#5F5F5F]">Specialists</div>
                    </div>
                  </div>
                </motion.div>

                {/* Bottom Accent Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                  className="absolute -bottom-6 -left-6 bg-[#E3F2FD] rounded-xl shadow-lg p-4 border-2 border-[#1565C0]/20"
                >
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-[#1565C0]" />
                    <span className="text-sm font-semibold text-[#1565C0]">Safe & Effective</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introduction Section - Bento Grid Layout */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Large Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 bg-gradient-to-br from-[#1F5E4B] to-[#2A7D63] p-8 md:p-12 rounded-3xl text-white"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Expert Migraine Treatment at Rama Care Polyclinic
              </h2>
              <div className="space-y-4 text-white/90 leading-relaxed text-lg">
                <p>
                  At Rama Care Polyclinic, we provide comprehensive and personalized migraine treatment in Dubai focused on identifying triggers, reducing headache frequency, and improving long-term health naturally and effectively.
                </p>
                <p>
                  Our experienced healthcare professionals provide customized treatment plans that may include medical management, <a href="/services/physiotherapy-dubai" className="text-white underline hover:text-white/80 font-medium">physiotherapy</a>, stress management, lifestyle guidance, wellness therapies, and holistic support to help patients manage migraines safely and improve their daily comfort.
                </p>
              </div>
            </motion.div>

            {/* Small Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-[#FAFAF8] p-8 rounded-3xl border border-gray-100"
            >
              <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">Personalized Care</h3>
              <p className="text-[#5F5F5F] leading-relaxed">
                Whether you suffer from chronic migraines, tension headaches, stress-related headaches, or recurring migraine attacks, our specialists focus on personalized and result-oriented care tailored to your condition and lifestyle.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Advantages Section - Horizontal Scroll Cards */}
      <section className="py-24 bg-gradient-to-b from-[#FAFAF8] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
              Why Choose Rama Care for Migraine Treatment in Dubai?
            </h2>
            <p className="text-xl text-[#5F5F5F] max-w-3xl mx-auto">
              Patients across Dubai trust Rama Care Polyclinic for compassionate and holistic migraine management solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all border-2 border-transparent hover:border-[#1F5E4B]/30"
              >
                <div className="w-12 h-12 bg-[#1F5E4B]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#1F5E4B] transition-colors">
                  <CheckCircle className="w-6 h-6 text-[#1F5E4B] group-hover:text-white transition-colors" />
                </div>
                <p className="text-[#1A1A1A] font-semibold text-sm leading-relaxed">{advantage}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Is Migraine Section - Split with Visual List */}
      <section className="py-24 bg-gradient-to-br from-[#F8F9FA] via-white to-[#FAFAF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8 sticky top-32"
            >
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
                  What Is a <span className="text-[#1F5E4B]">Migraine?</span>
                </h2>
                <div className="space-y-4 text-[#5F5F5F] leading-relaxed text-lg">
                  <p>
                    Migraine is a neurological condition characterized by recurring headache attacks that may range from moderate to severe. Migraines are often accompanied by symptoms such as nausea, vomiting, dizziness, sensitivity to light, and visual disturbances.
                  </p>
                  <p>
                    Migraine attacks may last for several hours or even days and can significantly affect physical, emotional, and mental well-being.
                  </p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-xl border-l-4 border-[#1F5E4B]">
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-4 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-[#1F5E4B]" />
                  Why Migraines Are Common in Dubai
                </h3>
                <p className="text-[#5F5F5F] mb-4">
                  Modern lifestyle habits and environmental factors contribute to increasing migraine cases among Dubai residents. Long working hours, stress, dehydration, excessive screen exposure, poor sleep, heat, and irregular eating patterns may trigger migraine attacks.
                </p>
                <p className="text-sm text-[#5F5F5F]">
                  Early treatment and trigger management can help reduce migraine frequency and severity. Patients suffering from stress-related muscular tension may also benefit from <a href="/services/back-pain-treatment-dubai" className="text-[#1F5E4B] hover:underline font-medium">back pain treatment in Dubai</a> and posture rehabilitation support.
                </p>
              </div>
            </motion.div>

            {/* Right - Trigger List */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-[#1A1A1A] mb-8">Common Migraine Triggers</h3>
              <div className="grid gap-4">
                {migraineFactors.map((factor, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ x: 10, scale: 1.02 }}
                    className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border-2 border-transparent hover:border-[#1F5E4B]/30 cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#1F5E4B] to-[#2A7D63] rounded-full flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform">
                        {index + 1}
                      </div>
                      <span className="text-[#1A1A1A] font-medium flex-1">{factor}</span>
                      <ArrowRight className="w-5 h-5 text-[#1F5E4B] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Symptoms Section - Grid with Hover Effects */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block bg-[#1F5E4B]/10 px-6 py-2 rounded-full mb-4">
              <span className="text-[#1F5E4B] font-semibold">Symptom Awareness</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
              Common Symptoms of Migraine
            </h2>
            <p className="text-xl text-[#5F5F5F] max-w-3xl mx-auto">
              Migraine symptoms vary between individuals but may include:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {symptoms.map((symptom, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="group relative bg-gradient-to-br from-[#FAFAF8] to-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1F5E4B] to-[#2A7D63] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center flex-shrink-0 group-hover:bg-[#1F5E4B] transition-colors">
                    <AlertCircle className="w-6 h-6 text-[#1F5E4B] group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-[#1A1A1A] font-semibold pt-3">{symptom}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-[#5F5F5F] text-lg">
              Patients experiencing recurring headaches should seek medical evaluation for proper diagnosis and treatment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Types of Headaches Section - Horizontal Scroll Cards */}
      <section className="py-24 bg-gradient-to-br from-[#F8F9FA] to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
              Types of Headaches We Treat
            </h2>
            <p className="text-xl text-[#5F5F5F] max-w-3xl mx-auto">
              At Rama Care Polyclinic, we provide treatment for different types of headaches and migraine-related conditions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {headacheTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group bg-white p-8 md:p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all border-2 border-transparent hover:border-[#1F5E4B]/30 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#1F5E4B]/10 to-transparent rounded-bl-full"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#1F5E4B] to-[#2A7D63] rounded-xl flex items-center justify-center">
                      <span className="text-white text-xl font-bold">{index + 1}</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-[#1A1A1A] flex-1">{type.title}</h3>
                  </div>
                  <p className="text-[#5F5F5F] mb-6 leading-relaxed text-lg">{type.description}</p>
                  {type.focus && (
                    <div className="bg-[#FAFAF8] p-4 rounded-xl border-l-4 border-[#1F5E4B]">
                      <p className="text-[#1F5E4B] font-medium leading-relaxed">{type.focus}</p>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* When to See Doctor Section - Clean Light Design */}
      <section className="py-24 bg-gradient-to-br from-[#F8F9FA] via-white to-[#FAFAF8] relative overflow-hidden">
        {/* Subtle Decorative Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-64 h-64 border-2 border-[#1F5E4B] rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 border-2 border-[#1F5E4B] rounded-full"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block bg-[#1F5E4B]/10 px-6 py-2 rounded-full mb-4">
              <span className="text-[#1F5E4B] font-semibold">Medical Attention</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
              When Should You See a Doctor for Migraines?
            </h2>
            <p className="text-xl text-[#5F5F5F] max-w-3xl mx-auto">
              Frequent or severe headaches should not be ignored. Early diagnosis and treatment can help prevent worsening symptoms and improve quality of life.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whenToSeeDoctor.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all border-2 border-transparent hover:border-[#1F5E4B]/30 cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#1F5E4B] to-[#2A7D63] rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <span className="text-white font-bold text-sm">{index + 1}</span>
                    </div>
                    <span className="text-[#1A1A1A] font-medium">{item}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 text-center bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
            >
              <p className="text-[#5F5F5F] text-lg">
                Professional medical care and <a href="/services/physiotherapy-dubai" className="text-[#1F5E4B] hover:underline font-semibold">physiotherapy treatment</a> may help reduce migraine frequency and improve daily comfort.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Treatment Options - Clean White Cards */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block bg-[#1F5E4B]/10 px-6 py-2 rounded-full mb-4">
              <span className="text-[#1F5E4B] font-semibold">Comprehensive Care</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
              Our Migraine Treatment Options in Dubai
            </h2>
            <p className="text-xl text-[#5F5F5F] max-w-3xl mx-auto">
              At Rama Care Polyclinic, we provide personalized treatment strategies designed according to the patient's symptoms, triggers, lifestyle, and overall health condition.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatmentOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group bg-gradient-to-br from-white to-[#FAFAF8] p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all border-2 border-transparent hover:border-[#1F5E4B]/30 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#1F5E4B]/5 to-transparent rounded-bl-full"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#1F5E4B] to-[#2A7D63] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                    {(() => { const IconComp = iconMap[option.icon]; return IconComp ? <IconComp className="w-8 h-8 text-white" /> : null; })()}
                  </div>
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">{option.title}</h3>
                  <p className="text-[#5F5F5F] leading-relaxed">{option.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Process - Timeline */}
      <section className="py-24 bg-gradient-to-b from-[#FAFAF8] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
              Migraine Treatment Process at Rama Care
            </h2>
            <p className="text-xl text-[#5F5F5F] max-w-3xl mx-auto">
              Our structured approach ensures comprehensive care and long-term migraine relief.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {treatmentProcess.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative" >
                  {/* Timeline Line */}
                  {index < treatmentProcess.length - 1 && (
                    <div className="absolute left-6 top-20 w-0.5 h-full bg-gradient-to-b from-[#1F5E4B] to-[#1F5E4B]/20"></div>
                  )}
                  
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 relative">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#1F5E4B] to-[#2A7D63] text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg group-hover:scale-110 transition-transform">
                        {step.step}
                      </div>
                    </div>
                    <div className="bg-white p-8 rounded-2xl flex-1 shadow-lg hover:shadow-xl transition-all border-2 border-transparent group-hover:border-[#1F5E4B]/30">
                      <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3">{step.title}</h3>
                      <p className="text-[#5F5F5F] leading-relaxed text-lg">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section - Grid with Icons */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
              Benefits of Professional Migraine Treatment
            </h2>
            <p className="text-xl text-[#5F5F5F] max-w-3xl mx-auto">
              Professional migraine care can help improve both physical and emotional health.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group bg-gradient-to-br from-[#1F5E4B] to-[#2A7D63] p-6 rounded-2xl text-white shadow-lg hover:shadow-2xl transition-all cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-white/30 transition-colors">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <p className="text-white font-semibold text-sm leading-relaxed pt-3">{benefit}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Can Benefit - Clean List */}
      <section className="py-24 bg-gradient-to-br from-[#F8F9FA] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
              Who Can Benefit From Migraine Treatment?
            </h2>
            <p className="text-xl text-[#5F5F5F] max-w-3xl mx-auto">
              Our migraine treatment programs are suitable for:
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-6">
                {whoCanBenefit.map((person, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-10 h-10 bg-[#1F5E4B]/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#1F5E4B] transition-colors">
                      <Users className="w-5 h-5 text-[#1F5E4B] group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-[#1A1A1A] font-medium">{person}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Section - Premium Card */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative bg-gradient-to-br from-[#1F5E4B] to-[#2A7D63] p-8 md:p-12 rounded-3xl shadow-2xl text-white overflow-hidden"
            >
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-24 -mb-24"></div>
              
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Migraine Treatment Cost in Dubai
                </h2>
                <p className="text-white/90 leading-relaxed mb-8 text-lg">
                  The cost of migraine treatment in Dubai depends on several factors, including:
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {[
                    "Severity and frequency of migraines",
                    "Diagnostic evaluations required",
                    "Type of treatment recommended",
                    "Physiotherapy or wellness sessions needed",
                    "Duration of care and support"
                  ].map((factor, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-xl"
                    >
                      <ArrowRight className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                      <span className="text-white">{factor}</span>
                    </motion.div>
                  ))}
                </div>
                <p className="text-white/90 leading-relaxed">
                  At Rama Care Polyclinic, we provide personalized and affordable migraine treatment plans tailored to each patient's symptoms, health condition, and treatment goals.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Prevention Tips Section - Grid Layout */}
      <section className="py-24 bg-gradient-to-b from-[#FAFAF8] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block bg-[#1F5E4B]/10 px-6 py-2 rounded-full mb-4">
              <span className="text-[#1F5E4B] font-semibold">Wellness Tips</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
              Tips to Prevent Migraines Naturally
            </h2>
            <p className="text-xl text-[#5F5F5F] max-w-3xl mx-auto">
              Healthy lifestyle habits can help reduce migraine triggers and improve long-term wellness.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {preventionTips.map((tip, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.03, y: -5 }}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-[#1F5E4B]/30"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#1F5E4B]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-[#1F5E4B]" />
                    </div>
                    <span className="text-[#1A1A1A] font-medium">{tip}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Clean & Bright */}
      <section id="cta-section" className="py-24 bg-gradient-to-br from-[#FAFAF8] via-white to-[#F0F4F3] relative overflow-hidden">
        {/* Subtle Accent */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#1F5E4B]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-[#1F5E4B]/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-block bg-[#1F5E4B]/10 px-6 py-2 rounded-full">
              <span className="text-[#1F5E4B] font-semibold">Start Your Journey</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A]">
              Book Migraine Treatment in Dubai
            </h2>
            
            <div className="space-y-4 text-[#5F5F5F] leading-relaxed text-lg max-w-3xl mx-auto">
              <p>
                If you are struggling with chronic headaches, migraine attacks, stress-related headaches, or recurring neck tension, professional care can help improve your comfort and quality of life.
              </p>
              <p>
                At Rama Care Polyclinic, we provide personalized migraine treatment in Dubai focused on trigger management, headache relief, stress reduction, and long-term wellness support.
              </p>
              <p className="text-[#1A1A1A] font-semibold text-xl">
                Book your consultation today and take the first step toward a healthier, migraine-free life.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 pt-6">
              <a
                href="#book-now"
                className="group inline-flex items-center gap-3 bg-[#1F5E4B] text-white px-10 py-5 rounded-full font-semibold text-lg hover:bg-[#2A7D63] transition-all hover:scale-105 shadow-xl"
              >
                <Clock className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                <span>Book Consultation</span>
              </a>
              <a rel="nofollow noopener noreferrer" target="_blank" href="https://wa.me/971566597878"
                className="group inline-flex items-center gap-3 bg-white text-[#1F5E4B] px-10 py-5 rounded-full font-semibold text-lg hover:bg-[#1F5E4B] hover:text-white transition-all border-2 border-[#1F5E4B] hover:scale-105 shadow-lg">
              
                <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section - Clean Accordion */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block bg-[#1F5E4B]/10 px-6 py-2 rounded-full mb-4">
              <span className="text-[#1F5E4B] font-semibold">Common Questions</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-[#5F5F5F]">
              Common questions about migraine treatment and care
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#FAFAF8] rounded-2xl overflow-hidden border-2 border-transparent hover:border-[#1F5E4B]/30 transition-all"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-[#F5F5F5] transition-colors"
                >
                  <h3 className="text-lg font-semibold text-[#1A1A1A] pr-4">{faq.question}</h3>
                  <div className={`w-10 h-10 bg-[#1F5E4B]/10 rounded-full flex items-center justify-center flex-shrink-0 transition-transform ${openFaq === index ? 'rotate-180' : ''}`}>
                    <ChevronDown className="w-5 h-5 text-[#1F5E4B]" />
                  </div>
                </button>
                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6" >
                    <p className="text-[#5F5F5F] leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Book Consultation Component */}
      <BookConsultation />
    </Layout>
  );
}
