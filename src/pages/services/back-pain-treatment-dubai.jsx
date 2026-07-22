import Layout from '../../../components/Layout';
import Head from "next/head";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import BookConsultation from '../../../components/BookConsultation';
import DoctorsSection from '../../../components/DoctorsSection';
import { subcategoryContent } from '../../data/subcategoryContent';
import { 
  Activity, 
  MapPin, 
  Award, 
  Calendar, 
  Phone, 
  ArrowRight, 
  CheckCircle, 
  Clock, 
  Users, 
  Target, 
  Heart, 
  Shield, 
  Zap,
  ChevronDown,
  ChevronUp,
  AlertTriangle,
  MessageCircle
} from 'lucide-react';

export default function BackPainTreatmentPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  // Get content from data file - Single source of truth
  const content = subcategoryContent['back-pain-treatment-dubai'];
  const { treatmentTypes, treatmentOptions, treatmentProcess, whoCanBenefit, causes, symptoms, whenToSeeSpecialist, preventionTips, faqs } = content;

  // Map icon names to actual components
  const iconMap = {
    Activity,
    Zap,
    Heart,
    Target,
    Users,
    Shield
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
        <title key="title">Back Pain Treatment in Dubai | Advanced Physiotherapy & Non-Surgical Care</title>
        <meta name="description" content="Expert back pain treatment in Dubai with advanced physiotherapy, posture correction, and non-surgical rehabilitation for lasting pain relief and improved mobility." key="description" />
        <meta name="keywords" content="Back pain treatment Dubai, Physiotherapy for back pain, Lower back pain treatment, Sciatica treatment Dubai, Posture correction Dubai, Non-surgical back pain treatment, Back pain specialist Dubai" />
        
        
        
      </Head>

      {/* Hero Section with Parallax Effect */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1F5E4B] via-[#2A7D63] to-[#1F5E4B]">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute w-96 h-96 bg-white/5 rounded-full -top-20 -left-20 blur-3xl"
            style={{ transform: `translateY(${scrollY * 0.3}px)` }}
          ></div>
          <div 
            className="absolute w-72 h-72 bg-white/10 rounded-full bottom-20 right-20 blur-2xl"
            style={{ transform: `translateY(${scrollY * -0.2}px)` }}
          ></div>
          <div 
            className="absolute w-64 h-64 bg-white/8 rounded-full top-1/2 left-1/3 blur-xl"
            style={{ transform: `translateY(${scrollY * 0.15}px)` }}
          ></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white space-y-8"
            >
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium"
                >
                  <Award className="w-4 h-4" />
                  <span>Advanced Physiotherapy & Non-Surgical Care</span>
                </motion.div>
                
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                >
                  Back Pain Treatment in Dubai
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl"
                >
                  Advanced Physiotherapy & Non-Surgical Care for Lasting Pain Relief
                </motion.p>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-lg text-white/80 leading-relaxed max-w-xl"
              >
                Back pain can affect every aspect of daily life, from sitting and walking to sleeping and working comfortably. Whether caused by long office hours, poor posture, sports injuries, muscle strain, or spinal conditions, chronic back pain can reduce mobility, productivity, and overall quality of life.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <a 
                  href="#book-now" 
                  className="inline-flex items-center justify-center gap-2 bg-white text-[#1F5E4B] px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <Calendar className="w-5 h-5" />
                  Book Consultation
                </a>
                <a 
                  href="https://wa.me/971566597878"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-white" />
                  <span className="text-white/90">DHA Licensed</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-white" />
                  <span className="text-white/90">Expert Physiotherapists</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-white" />
                  <span className="text-white/90">Non-Surgical</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/back-pain.jpg" 
                  alt="Back Pain Treatment in Dubai" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              
              {/* Floating Stats Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-xl"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#1F5E4B]/10 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-[#1F5E4B]" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#1F5E4B]">500+</p>
                    <p className="text-sm text-gray-600">Happy Patients</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Rama Care Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
              Why Choose Rama Care for Back Pain Treatment in Dubai?
            </h2>
            <p className="text-xl text-[#5F5F5F] max-w-3xl mx-auto">
              Rama Care Polyclinic is trusted by patients across Dubai for effective and patient-focused back pain therapy solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Target, title: "Personalized treatment plans for every patient", color: "bg-blue-50 text-blue-600" },
              { icon: Users, title: "Experienced physiotherapists and rehabilitation experts", color: "bg-green-50 text-green-600" },
              { icon: Activity, title: "Advanced physiotherapy and electrotherapy techniques", color: "bg-purple-50 text-purple-600" },
              { icon: Shield, title: "Non-surgical and drug-free treatment options", color: "bg-orange-50 text-orange-600" },
              { icon: Heart, title: "Modern pain management therapies", color: "bg-red-50 text-red-600" },
              { icon: Award, title: "Posture correction and spinal rehabilitation support", color: "bg-indigo-50 text-indigo-600" },
              { icon: CheckCircle, title: "Comfortable and patient-friendly environment", color: "bg-teal-50 text-teal-600" },
              { icon: Zap, title: "Holistic approach focused on long-term recovery", color: "bg-yellow-50 text-yellow-600" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100 hover:border-gray-200"
              >
                <div className={`w-14 h-14 ${item.color} rounded-xl flex items-center justify-center mb-4`}>
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Back Pain Is Common in Dubai */}
      <section className="py-20 px-4 bg-[#F5F1E8]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A]">
                Why Back Pain Is Common in Dubai
              </h2>
              <p className="text-lg text-[#5F5F5F] leading-relaxed">
                Back pain has become increasingly common among Dubai residents due to modern lifestyles and work habits. Long sitting hours, desk jobs, prolonged driving, stress, lack of exercise, and poor posture contribute significantly to spinal discomfort and muscular strain.
              </p>
              <p className="text-lg text-[#5F5F5F] leading-relaxed">
                Many office workers, drivers, gym-goers, and individuals with sedentary routines experience chronic lower back pain, neck stiffness, and posture-related issues that worsen over time without proper treatment. Early physiotherapy and rehabilitation can help prevent long-term complications and restore healthy movement patterns.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { icon: Clock, title: "Long Sitting Hours", desc: "8+ hours daily" },
                { icon: Activity, title: "Sedentary Lifestyle", desc: "Limited movement" },
                { icon: Target, title: "Poor Posture", desc: "Desk work strain" },
                { icon: Zap, title: "Stress & Tension", desc: "Mental & physical" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-md text-center"
                >
                  <div className="w-12 h-12 bg-[#1F5E4B]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <item.icon className="w-6 h-6 text-[#1F5E4B]" />
                  </div>
                  <h3 className="font-semibold text-[#1A1A1A] mb-1">{item.title}</h3>
                  <p className="text-sm text-[#5F5F5F]">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Common Causes Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
              Common Causes of Back Pain
            </h2>
            <p className="text-xl text-[#5F5F5F] max-w-3xl mx-auto">
              Back pain may develop suddenly due to injury or gradually because of lifestyle and posture-related problems.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {causes.map((cause, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start gap-3 p-4 bg-[#F9F7F2] rounded-lg hover:bg-[#F5F1E8] transition-colors">
                <CheckCircle className="w-5 h-5 text-[#1F5E4B] mt-0.5 flex-shrink-0" />
                <span className="text-[#1A1A1A]">{cause}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Types of Back Pain We Treat */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-[#F9F7F2]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
              Types of Back Pain We Treat
            </h2>
            <p className="text-xl text-[#5F5F5F] max-w-3xl mx-auto">
              At Rama Care Polyclinic, we provide treatment for various acute and chronic spinal conditions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {treatmentTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100"
              >
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">{type.title}</h3>
                <p className="text-[#5F5F5F] mb-4 leading-relaxed">{type.description}</p>
                
                {type.focus && (
                  <p className="text-[#1F5E4B] font-medium mb-4 leading-relaxed">{type.focus}</p>
                )}
                
                {type.treatment && (
                  <p className="text-[#1F5E4B] font-medium mb-4 leading-relaxed">{type.treatment}</p>
                )}
                
                {type.symptoms && (
                  <div className="space-y-2 mb-4">
                    <h4 className="font-semibold text-[#1A1A1A] mb-2">Symptoms may include:</h4>
                    {type.symptoms.map((symptom, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <ArrowRight className="w-4 h-4 text-[#1F5E4B] mt-1 flex-shrink-0" />
                        <span className="text-[#5F5F5F]">{symptom}</span>
                      </div>
                    ))}
                  </div>
                )}
                
                {type.benefits && (
                  <div className="space-y-2">
                    <h4 className="font-semibold text-[#1A1A1A] mb-2">Our non-surgical rehabilitation programs help:</h4>
                    {type.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <ArrowRight className="w-4 h-4 text-[#1F5E4B] mt-1 flex-shrink-0" />
                        <span className="text-[#5F5F5F]">{benefit}</span>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Symptoms Section */}
      <section className="py-20 px-4 bg-[#1F5E4B]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Symptoms of Back Pain
              </h2>
              <p className="text-xl text-white/80 leading-relaxed">
                You may benefit from professional back pain treatment if you experience:
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {symptoms.map((symptom, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20"
                >
                  <CheckCircle className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                  <span className="text-white/90">{symptom}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* When Should You See a Specialist */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-[#F9F7F2] to-[#F5F1E8] rounded-2xl p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A]">
                  When Should You See a Back Pain Specialist?
                </h2>
                <p className="text-lg text-[#5F5F5F] leading-relaxed">
                  Many people ignore early symptoms until the pain becomes chronic. Seeking timely medical care can help prevent long-term complications.
                </p>
                <p className="text-lg text-[#5F5F5F] leading-relaxed">
                  You should consult a back pain specialist in Dubai if:
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                {whenToSeeSpecialist.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-md"
                  >
                    <AlertTriangle className="w-5 h-5 text-[#1F5E4B] mt-0.5 flex-shrink-0" />
                    <span className="text-[#1A1A1A]">{item}</span>
                  </motion.div>
                ))}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 }}
                  className="text-lg font-semibold text-[#1F5E4B] mt-6"
                >
                  Early diagnosis and physiotherapy can significantly improve recovery outcomes.
                </motion.p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Options */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#F9F7F2] to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
              Our Back Pain Treatment Options in Dubai
            </h2>
            <p className="text-xl text-[#5F5F5F] max-w-3xl mx-auto">
              We offer evidence-based physiotherapy and rehabilitation programs designed to improve mobility, reduce inflammation, and support long-term spinal health.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatmentOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100 hover:border-[#1F5E4B]/30"
              >
                <div className="w-14 h-14 bg-[#1F5E4B]/10 rounded-xl flex items-center justify-center mb-6">
                  {(() => { const IconComp = iconMap[option.icon]; return IconComp ? <IconComp className="w-7 h-7 text-[#1F5E4B]" /> : null; })()}
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">{option.title}</h3>
                <p className="text-[#5F5F5F] mb-6 leading-relaxed">{option.description}</p>
                
                {option.benefits && (
                  <div className="space-y-2">
                    <h4 className="font-semibold text-[#1A1A1A] mb-2">Benefits:</h4>
                    {option.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[#1F5E4B] mt-1 flex-shrink-0" />
                        <span className="text-[#5F5F5F] text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                )}
                
                {option.note && (
                  <p className="text-[#1F5E4B] font-medium mt-4 text-sm leading-relaxed">{option.note}</p>
                )}
                
                {option.treatments && (
                  <div className="space-y-2">
                    <h4 className="font-semibold text-[#1A1A1A] mb-2">We may use:</h4>
                    {option.treatments.map((treatment, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[#1F5E4B] mt-1 flex-shrink-0" />
                        <span className="text-[#5F5F5F] text-sm">{treatment}</span>
                      </div>
                    ))}
                  </div>
                )}
                
                {option.conditions && (
                  <div className="space-y-2 mt-4">
                    <h4 className="font-semibold text-[#1A1A1A] mb-2">Recommended for:</h4>
                    {option.conditions.map((condition, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[#1F5E4B] mt-1 flex-shrink-0" />
                        <span className="text-[#5F5F5F] text-sm">{condition}</span>
                      </div>
                    ))}
                  </div>
                )}
                
                {option.therapies && (
                  <div className="space-y-2">
                    <h4 className="font-semibold text-[#1A1A1A] mb-2">Supportive therapies may include:</h4>
                    {option.therapies.map((therapy, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[#1F5E4B] mt-1 flex-shrink-0" />
                        <span className="text-[#5F5F5F] text-sm">{therapy}</span>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
              Back Pain Treatment Process at Rama Care
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {treatmentProcess.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative"
              >
                {index < treatmentProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-[#1F5E4B] to-transparent z-0"></div>
                )}
                <div className="bg-[#F9F7F2] p-6 rounded-xl relative z-10">
                  <div className="w-12 h-12 bg-[#1F5E4B] text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold text-[#1A1A1A] mb-3">{step.title}</h3>
                  <p className="text-[#5F5F5F] leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-[#1F5E4B]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Benefits of Professional Back Pain Treatment
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Professional treatment can improve overall comfort, mobility, and quality of life.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Long-term pain relief",
              "Improved posture and spinal alignment",
              "Better flexibility and movement",
              "Reduced muscle stiffness",
              "Faster recovery from injuries",
              "Improved physical performance",
              "Better sleep and daily comfort",
              "Prevention of chronic spinal issues"
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20"
              >
                <CheckCircle className="w-6 h-6 text-white mb-3" />
                <p className="text-white font-medium">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Can Benefit */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
              Who Can Benefit From Back Pain Treatment?
            </h2>
            <p className="text-xl text-[#5F5F5F] max-w-3xl mx-auto">
              Our treatment programs are suitable for:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whoCanBenefit.map((person, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#F9F7F2] p-6 rounded-xl text-center hover:bg-[#F5F1E8] transition-colors"
              >
                <Users className="w-8 h-8 text-[#1F5E4B] mx-auto mb-3" />
                <p className="text-[#1A1A1A] font-medium">{person}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Section */}
      <section className="py-20 px-4 bg-[#F5F1E8]">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
                Back Pain Treatment Cost in Dubai
              </h2>
              <p className="text-xl text-[#5F5F5F] max-w-3xl mx-auto">
                The cost of back pain treatment in Dubai depends on several factors, including:
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {[
                "Severity of the condition",
                "Number of physiotherapy sessions required",
                "Type of therapy recommended",
                "Duration of rehabilitation",
                "Advanced treatment techniques used"
              ].map((factor, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 bg-[#F9F7F2] p-4 rounded-lg"
                >
                  <CheckCircle className="w-5 h-5 text-[#1F5E4B] mt-0.5 flex-shrink-0" />
                  <span className="text-[#1A1A1A]">{factor}</span>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center text-lg text-[#5F5F5F] leading-relaxed max-w-4xl mx-auto"
            >
              At Rama Care Polyclinic, we provide affordable and personalized treatment plans designed according to individual patient needs. Our specialists explain the recommended therapy program and expected treatment duration during consultation.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Prevention Tips */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
              Tips to Prevent Back Pain
            </h2>
            <p className="text-xl text-[#5F5F5F] max-w-3xl mx-auto">
              Simple lifestyle improvements can help reduce the risk of recurring spinal pain.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {preventionTips.map((tip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3 bg-[#F9F7F2] p-6 rounded-xl hover:bg-[#F5F1E8] transition-colors"
              >
                <Shield className="w-5 h-5 text-[#1F5E4B] mt-0.5 flex-shrink-0" />
                <span className="text-[#1A1A1A]">{tip}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-[#F9F7F2]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
              Frequently Asked Questions – Back Pain Treatment in Dubai
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-md"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-[#F9F7F2] transition-colors"
                >
                  <span className="text-lg font-semibold text-[#1A1A1A] pr-4">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-[#1F5E4B] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#1F5E4B] flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-[#5F5F5F] leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <DoctorsSection content={content?.doctors} />

      {/* Book Consultation Section */}
      <BookConsultation 
        content={{
          badge: 'Start Your Journey',
          title: 'Book Back Pain Treatment in Dubai Today',
          description: 'Restore your mobility and live pain-free with trusted back pain treatment at Rama Care Polyclinic—safe, personalized, and focused on long-term results.',
          getInTouchTitle: 'Get In Touch',
          requestAppointmentTitle: 'Request Appointment',
          submitButtonText: 'Confirm Free Consultation',
          contactInfo: {
            phone: '+971 04 286 2006',
            whatsapp: '971566597878',
            email: 'query@ramacarepolyclinic.com',
            address: {
              line1: '12 Al Dhiyafah Rd - Jumeirah Terrace Building,',
              line2: 'Ground Floor, Jumeirah 1 - Dubai'
            }
          },
          clinicHours: {
            weekdays: 'Sunday - Saturday:',
            weekdaysTime: '10:00 AM - 10:00 PM',
            friday: 'Friday:',
            fridayTime: '10:00 AM - 8:00 PM'
          },
          statCards: [
            {
              title: 'DHA Licensed',
              description: 'Certified dental Facility'
            },
            {
              title: 'Experienced Team',
              description: '10+ Years Combined'
            },
            {
              title: '1,200+ Procedures',
              description: 'Completed'
            },
            {
              title: '4.8/5 Rating',
              description: 'Patient Reviews'
            }
          ]
        }}
      />
    </Layout>
  );
}
