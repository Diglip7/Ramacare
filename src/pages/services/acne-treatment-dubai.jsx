import Layout from '../../../components/Layout';
import Head from "next/head";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import BookConsultation from '../../../components/BookConsultation';
import ContentReviewBadge from '../../../components/ContentReviewBadge';
import { subcategoryContent } from '../../data/subcategoryContent';
import { 
  Sparkles, 
  MapPin, 
  Award, 
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
  AlertCircle,
  Droplets,
  Sun,
  Moon,
  MessageCircle
} from 'lucide-react';

export default function AcneTreatmentPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  // Get content from data file - Single source of truth
  const content = subcategoryContent['acne-treatment-dubai'];
  const { causes, symptoms, benefits, preventionTips, whenToSeeDoctor, faqs, acneTypes, treatmentOptions, treatmentProcess, whoCanBenefit } = content;

  // Map icon names to actual components
  const iconMap = {
    Sparkles,
    Droplets,
    Zap,
    Target,
    Heart,
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

  // All other content arrays removed - now imported from data file
  // This reduces file from 1173 lines to ~400 lines!

  return (
    <Layout>
      <Head>
        <title key="title">Acne Treatment in Dubai | Advanced Solutions for Clear, Healthy Skin</title>
        <meta name="description" content="Expert acne treatment in Dubai with advanced dermatology solutions for clear, healthy, and acne-free skin. Personalized treatments for all skin types." key="description" />
        <meta name="keywords" content="Acne treatment Dubai, Best acne treatment Dubai, Acne scar treatment Dubai, Dermatologist acne treatment, Chemical peel for acne, Laser acne treatment, Hormonal acne treatment" />
        
        
        
      </Head>

      {/* Hero Section with Gradient Background */}
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
                  <Sparkles className="w-4 h-4" />
                  <span>Advanced Solutions for Clear, Healthy & Acne-Free Skin</span>
                </motion.div>
                
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                >
                  Acne Treatment in Dubai
                </motion.h1>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-lg text-white/90 leading-relaxed max-w-xl"
              >
                Acne is one of the most common skin concerns affecting teenagers and adults alike. Persistent breakouts, pimples, acne scars, oily skin, and inflammation can impact skin health, confidence, and overall appearance.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-lg text-white/80 leading-relaxed max-w-xl"
              >
                At Rama Care Polyclinic, we provide advanced and personalized acne treatment in Dubai designed to target the root cause of acne while improving overall skin texture and long-term skin health.
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
                  <Award className="w-5 h-5" />
                  Book Consultation
                </a>
                <a 
                  href="https://wa.me/971566597878" 
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#20BD5A] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Us
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="flex items-center gap-6 pt-4"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-white" />
                  <span className="text-white/90">DHA Licensed</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-white" />
                  <span className="text-white/90">Expert Dermatologists</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-white" />
                  <span className="text-white/90">Advanced Technology</span>
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
                  src="/images/acne.jpg" 
                  alt="Advanced acne scar and pimple treatment in Dubai" 
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
              Why Choose Rama Care for Acne Treatment in Dubai?
            </h2>
            <p className="text-xl text-[#5F5F5F] max-w-3xl mx-auto">
              Patients across Dubai trust Rama Care Polyclinic for professional and personalized skincare solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Target, title: "Personalized acne treatment plans", color: "bg-blue-50 text-blue-600" },
              { icon: Users, title: "Experienced dermatologists and skincare specialists", color: "bg-green-50 text-green-600" },
              { icon: Sparkles, title: "Advanced dermatology and laser technologies", color: "bg-purple-50 text-purple-600" },
              { icon: Shield, title: "Treatments for acne, acne scars, and pigmentation", color: "bg-orange-50 text-orange-600" },
              { icon: Heart, title: "Safe and non-invasive skincare procedures", color: "bg-red-50 text-red-600" },
              { icon: Award, title: "Customized solutions for all skin types", color: "bg-indigo-50 text-indigo-600" },
              { icon: CheckCircle, title: "Modern clinic environment and patient-focused care", color: "bg-teal-50 text-teal-600" },
              { icon: Zap, title: "Focus on long-term skin improvement and prevention", color: "bg-yellow-50 text-yellow-600" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100 hover:border-gray-200">
                <div className={`w-14 h-14 ${item.color} rounded-xl flex items-center justify-center mb-4`}>
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Acne Is Common in Dubai - Simple Design */}
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
                Why Acne Is Common in Dubai
              </h2>
              <p className="text-lg text-[#5F5F5F] leading-relaxed">
                Acne has become increasingly common among Dubai residents due to climate conditions, stress, hormonal changes, pollution, oily skin, and modern lifestyle habits. High humidity, excessive sweating, irregular skincare routines, and prolonged exposure to environmental pollutants can clog pores and trigger breakouts.
              </p>
              <p className="text-lg text-[#5F5F5F] leading-relaxed">
                Stress, lack of sleep, unhealthy eating habits, and hormonal imbalances may also contribute to recurring acne and skin inflammation. Early professional treatment can help prevent permanent acne scars and long-term skin damage.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { icon: Sun, title: "High Humidity", desc: "Climate factor" },
                { icon: Droplets, title: "Excessive Sweating", desc: "Environmental" },
                { icon: AlertCircle, title: "Stress & Lifestyle", desc: "Modern habits" },
                { icon: Moon, title: "Lack of Sleep", desc: "Health factor" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-[#1F5E4B]"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-[#1F5E4B]/10 rounded-lg flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-[#1F5E4B]" />
                    </div>
                    <h3 className="font-semibold text-[#1A1A1A] text-sm">{item.title}</h3>
                  </div>
                  <p className="text-xs text-[#5F5F5F]">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Causes Acne Section - Clean & Simple */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
              What Causes Acne?
            </h2>
            <p className="text-xl text-[#5F5F5F] max-w-3xl mx-auto">
              Acne develops when hair follicles become clogged with oil, bacteria, and dead skin cells.
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
                className="bg-[#F9F7F2] p-6 rounded-lg border-l-4 border-[#1F5E4B]"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#1F5E4B] rounded-lg flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-base font-semibold text-[#1A1A1A] mt-2">
                    {cause}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Types of Acne We Treat */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-[#F9F7F2]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
              Types of Acne We Treat
            </h2>
            <p className="text-xl text-[#5F5F5F] max-w-3xl mx-auto">
              At Rama Care Polyclinic, we provide treatment for different forms of acne and acne-related skin concerns.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {acneTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100">
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">{type.title}</h3>
                <p className="text-[#5F5F5F] mb-4 leading-relaxed">{type.description}</p>
                
                {type.areas && (
                  <div className="space-y-2 mb-4">
                    <h4 className="font-semibold text-[#1A1A1A] mb-2">Common areas affected include:</h4>
                    {type.areas.map((area, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <ArrowRight className="w-4 h-4 text-[#1F5E4B] mt-1 flex-shrink-0" />
                        <span className="text-[#5F5F5F]">{area}</span>
                      </div>
                    ))}
                  </div>
                )}
                
                {type.consequences && (
                  <div className="space-y-2 mb-4">
                    <h4 className="font-semibold text-[#1A1A1A] mb-2">Without proper treatment, cystic acne may lead to:</h4>
                    {type.consequences.map((consequence, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <AlertCircle className="w-4 h-4 text-[#1F5E4B] mt-1 flex-shrink-0" />
                        <span className="text-[#5F5F5F]">{consequence}</span>
                      </div>
                    ))}
                  </div>
                )}
                
                {type.treatments && (
                  <div className="space-y-2">
                    <h4 className="font-semibold text-[#1A1A1A] mb-2">Treatment options may include:</h4>
                    {type.treatments.map((treatment, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <ArrowRight className="w-4 h-4 text-[#1F5E4B] mt-1 flex-shrink-0" />
                        <span className="text-[#5F5F5F]">{treatment}</span>
                      </div>
                    ))}
                  </div>
                )}
                
                {type.focus && (
                  <p className="text-[#1F5E4B] font-medium mt-4 leading-relaxed">{type.focus}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Symptoms Section - Simple Design */}
      <section className="py-20 px-4 bg-[#F9F7F2]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A]">
                Symptoms of Acne
              </h2>
              <p className="text-xl text-[#5F5F5F] leading-relaxed">
                You may benefit from professional acne treatment if you experience:
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4" >
              {symptoms.map((symptom, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-3 bg-white p-4 rounded-lg border border-gray-100"
                >
                  <CheckCircle className="w-5 h-5 text-[#1F5E4B] mt-0.5 flex-shrink-0" />
                  <span className="text-[#1A1A1A] text-sm">{symptom}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* When Should You See a Dermatologist */}
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
                  When Should You See a Dermatologist for Acne?
                </h2>
                <p className="text-lg text-[#5F5F5F] leading-relaxed">
                  Many people delay treatment until acne becomes severe or leaves scars. Early treatment can help prevent permanent skin damage and recurring breakouts.
                </p>
                <p className="text-lg text-[#5F5F5F] leading-relaxed">
                  You should consult a dermatologist if:
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-4">
                {whenToSeeDoctor.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-md" >
                    <AlertCircle className="w-5 h-5 text-[#1F5E4B] mt-0.5 flex-shrink-0" />
                    <span className="text-[#1A1A1A]">{item}</span>
                  </motion.div>
                ))}
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
            className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
              Our Acne Treatment Options in Dubai
            </h2>
            <p className="text-xl text-[#5F5F5F] max-w-3xl mx-auto">
              We provide customized dermatology solutions based on skin type, acne severity, and treatment goals.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatmentOptions.map((option, index) => {
              const IconComponent = iconMap[option.icon];
              return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100 hover:border-[#1F5E4B]/30" >
                <div className="w-14 h-14 bg-[#1F5E4B]/10 rounded-xl flex items-center justify-center mb-6">
                  {IconComponent && <IconComponent className="w-7 h-7 text-[#1F5E4B]" />}
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">{option.title}</h3>
                <p className="text-[#5F5F5F] mb-6 leading-relaxed">{option.description}</p>
                
                {option.benefits && (
                  <div className="space-y-2">
                    <h4 className="font-semibold text-[#1A1A1A] mb-2">Benefits include:</h4>
                    {option.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[#1F5E4B] mt-1 flex-shrink-0" />
                        <span className="text-[#5F5F5F] text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                )}
                
                {option.helps && (
                  <div className="space-y-2">
                    <h4 className="font-semibold text-[#1A1A1A] mb-2">Laser acne treatment may help:</h4>
                    {option.helps.map((item, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[#1F5E4B] mt-1 flex-shrink-0" />
                        <span className="text-[#5F5F5F] text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                )}
                
                {option.suitable && (
                  <div className="space-y-2">
                    <h4 className="font-semibold text-[#1A1A1A] mb-2">This treatment is suitable for:</h4>
                    {option.suitable.map((item, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[#1F5E4B] mt-1 flex-shrink-0" />
                        <span className="text-[#5F5F5F] text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                )}
                
                {option.guidance && (
                  <div className="space-y-2">
                    {option.guidance.map((item, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[#1F5E4B] mt-1 flex-shrink-0" />
                        <span className="text-[#5F5F5F] text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
              );
            })}
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
            className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
              Acne Treatment Process at Rama Care
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
                  {step.description && (
                    <p className="text-[#5F5F5F] mb-2">{step.description}</p>
                  )}
                  {step.items && (
                    <ul className="space-y-1 mb-2">
                      {step.items.map((item, i) => (
                        <li key={i} className="text-[#1F5E4B] text-sm">• {item}</li>
                      ))}
                    </ul>
                  )}
                  {step.conclusion && (
                    <p className="text-[#5F5F5F] text-sm">{step.conclusion}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section - Clean Design */}
      <section className="py-20 px-4 bg-[#F5F1E8]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
              Benefits of Professional Acne Treatment
            </h2>
            <p className="text-xl text-[#5F5F5F] max-w-3xl mx-auto">
              Professional acne treatment can improve both skin health and confidence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#1F5E4B]"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#1F5E4B] mt-0.5 flex-shrink-0" />
                  <p className="text-[#1A1A1A] font-medium text-sm">{benefit}</p>
                </div>
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
              Who Can Benefit From Acne Treatment?
            </h2>
            <p className="text-xl text-[#5F5F5F] max-w-3xl mx-auto">
              Our acne treatments are suitable for:
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
                className="bg-[#F9F7F2] p-6 rounded-xl text-center hover:bg-[#F5F1E8] transition-colors">
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
                Acne Treatment Cost in Dubai
              </h2>
              <p className="text-xl text-[#5F5F5F] max-w-3xl mx-auto">
                The cost of acne treatment in Dubai depends on several factors, including:
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {[
                "Severity of acne",
                "Type of treatment recommended",
                "Number of sessions required",
                "Acne scar treatment needs",
                "Advanced laser or skin procedures are used"
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
              At Rama Care Polyclinic, we provide personalized and affordable acne treatment plans tailored to each patient's skin condition and treatment goals.
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
              Tips to Prevent Acne Naturally
            </h2>
            <p className="text-xl text-[#5F5F5F] max-w-3xl mx-auto">
              Healthy skincare habits can help reduce recurring breakouts and support clearer skin.
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

      {/* FAQ Section - Simple & Clean */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-[#5F5F5F]">
              Common questions about acne treatment in Dubai
            </p>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-[#F9F7F2] rounded-lg overflow-hidden hover:bg-[#F5F1E8] transition-colors"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="text-base font-semibold text-[#1A1A1A] pr-4">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-[#1F5E4B] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#1F5E4B] flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-5 pb-5 pt-0">
                    <p className="text-[#5F5F5F] leading-relaxed text-sm">{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Reviewer Badge */}
      <ContentReviewBadge doctorName="Sonita Sinaga" pageSlug="acne-treatment-dubai" />

      {/* Book Consultation Section */}
      <BookConsultation 
        content={{
          badge: 'Start Your Journey',
          title: 'Book Acne Treatment in Dubai Today',
          description: 'Achieve clear, healthy skin with trusted acne treatment at Rama Care Polyclinic—personalized, safe, and focused on long-term skin improvement.',
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
