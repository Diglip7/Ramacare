import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Layout from '../../components/Layout';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle,
  AlertCircle,
  User,
  MessageSquare,
  Calendar,
  Building,
  Award,
  Users,
  Shield,
  Star
} from 'lucide-react';

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    consent: false
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // null, 'success', 'error'
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const validateField = (name, value) => {
    if (name === 'fullName') {
      if (!value || value.trim().length < 2) return 'Please enter your full name';
      if (!/^[A-Za-z\s'-]+$/.test(value.trim())) return 'Name can only include letters, spaces, apostrophes, hyphens';
      return '';
    }
    if (name === 'email') {
      if (!value) return 'Email is required';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Please enter a valid email address';
      return '';
    }
    if (name === 'phone') {
      if (!value) return 'Phone number is required';
      if (!/^\+?\d{7,15}$/.test(value.replace(/[^\d+]/g, ''))) return 'Please enter a valid phone number';
      return '';
    }
    if (name === 'subject') {
      if (!value) return 'Subject is required';
      return '';
    }
    if (name === 'message') {
      if (!value) return 'Message is required';
      if (value.trim().length < 10) return 'Message must be at least 10 characters';
      return '';
    }
    if (name === 'consent') {
      if (!value) return 'Please agree to our privacy policy';
      return '';
    }
    return '';
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    // Sanitize input
    let sanitizedValue = value;
    if (name === 'phone') {
      sanitizedValue = value.replace(/[^\d+]/g, '');
    } else if (name === 'fullName') {
      sanitizedValue = value.replace(/[^A-Za-z\s'-]/g, '');
    }
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : sanitizedValue
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
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
    
    if (Object.keys(newErrors).length > 0) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const response = await fetch('/api/appointment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          source: 'contact-us-page',
          action: 'contact_message',
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          concern: formData.subject,
          additionalInfo: formData.message,
          consent: formData.consent
        }),
      });
      
      const result = await response.json();
      
      if (response.ok && result.success) {
        setSubmitStatus('success');
        // Reset form
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          consent: false
        });
        setErrors({});
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Our Location',
      highlight:  '12 Al Dhiyafah Rd - Jumeirah Terrace Building, Ground Floor, Jumeirah 1 - Dubai'
    },
    {
      icon: Phone,
      title: 'Call Us',
      highlight: '+971 56 659 7878'
    },
    {
      icon: Mail,
      title: 'Email Us',
      highlight: 'query@ramacarepolyclinic.com'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      highlight: 'Sunday - Saturday: 10:00 AM - 10:00 PM'
    }
  ];

  return (
    <div className="force-light">
      <Layout>
        <Head>
        <title key="title">Contact Us | RamaCare Polyclinic Dubai</title>
        <meta name="description" content="Get in touch with RamaCare Polyclinic in Jumeirah 1, Dubai. Book your appointment, find our location, or call us for any inquiries." key="description" />
      </Head>

        <style jsx global>{`
          .force-light {
            --background: #ffffff;
            --foreground: #171717;
            background: #ffffff;
            color: #171717;
          }
          .force-light-text {
            color: #171717 !important;
          }
          .contact-form-input:focus {
            outline: none;
            border-color: #1a5f3f;
            box-shadow: 0 0 0 3px rgba(26, 95, 63, 0.1);
          }
          .submit-btn {
            transition: all 0.3s ease;
            background: linear-gradient(135deg, #1a5f3f 0%, #2d5f3f 100%);
          }
          .submit-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 25px rgba(26, 95, 63, 0.3);
          }
          .submit-btn:disabled {
            opacity: 0.7;
            cursor: not-allowed;
            transform: none;
          }
          .feature-card {
            transition: all 0.3s ease;
          }
          .feature-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          }
          .contact-info-card {
            transition: all 0.3s ease;
          }
          .contact-info-card:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
          }
        `}</style>

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#1a5f3f] via-[#2d5f3f] to-[#1a5f3f] text-white py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                <Phone className="w-5 h-5" />
                <span className="text-sm font-medium">Get in Touch With Our Experts</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Contact <span className="text-[#d4a574]">RamaCare</span>
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-gray-100">
                We're here to answer your questions and help you begin your wellness journey
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-2xl md:text-3xl font-bold text-[#d4a574]">500+</div>
                  <div className="text-sm text-gray-200">Happy Patients</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-2xl md:text-3xl font-bold text-[#d4a574]">15+</div>
                  <div className="text-sm text-gray-200">Years Experience</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-2xl md:text-3xl font-bold text-[#d4a574]">98%</div>
                  <div className="text-sm text-gray-200">Success Rate</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-2xl md:text-3xl font-bold text-[#d4a574]">4.9/5</div>
                  <div className="text-sm text-gray-200">Patient Rating</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Get In <span className="text-[#1a5f3f]">Touch</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Reach out to us through any of these convenient channels. Our team is ready to assist you.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div 
                    key={index} 
                    className="contact-info-card bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl"
                  >
                    <div className="w-16 h-16 bg-[#1a5f3f]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-[#1a5f3f]" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{info.title}</h3>
                    <p className="text-gray-600 mb-1">{info.content}</p>
                    <p className="text-[#1a5f3f] font-medium">{info.highlight}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Main Contact Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column - Contact Form */}
              <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
                <div className="mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    Send Us a <span className="text-[#1a5f3f]">Message</span>
                  </h2>
                  <p className="text-gray-600">
                    Fill out the form below and our team will get back to you within 24 hours.
                  </p>
                </div>

                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-emerald-800">Message Sent Successfully!</h3>
                      <p className="text-emerald-700 text-sm">We'll contact you soon.</p>
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3">
                    <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-red-800">Something went wrong</h3>
                      <p className="text-red-700 text-sm">Please try again or contact us directly.</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <User className="w-5 h-5 text-gray-400" />
                        </div>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="Enter your full name"
                          required
                          className={`contact-form-input w-full pl-12 pr-4 py-3 border rounded-xl focus:ring-2 transition-all bg-white text-gray-900 placeholder-gray-500 ${
                            errors.fullName ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-[#1a5f3f]'
                          }`}
                        />
                      </div>
                      {errors.fullName && (
                        <p className="mt-1 text-red-600 text-sm">{errors.fullName}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <Phone className="w-5 h-5 text-gray-400" />
                        </div>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+971 XX XXX XXXX"
                          required
                          className={`contact-form-input w-full pl-12 pr-4 py-3 border rounded-xl focus:ring-2 transition-all bg-white text-gray-900 placeholder-gray-500 ${
                            errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-[#1a5f3f]'
                          }`}
                        />
                      </div>
                      {errors.phone && (
                        <p className="mt-1 text-red-600 text-sm">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Mail className="w-5 h-5 text-gray-400" />
                      </div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                        className={`contact-form-input w-full pl-12 pr-4 py-3 border rounded-xl focus:ring-2 transition-all bg-white text-gray-900 placeholder-gray-500 ${
                          errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-[#1a5f3f]'
                        }`}
                      />
                    </div>
                    {errors.email && (
                      <p className="mt-1 text-red-600 text-sm">{errors.email}</p>
                    )}
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Building className="w-5 h-5 text-gray-400" />
                      </div>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className={`contact-form-input w-full pl-12 pr-4 py-3 border rounded-xl focus:ring-2 transition-all bg-white text-gray-900 ${
                          errors.subject ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-[#1a5f3f]'
                        }`}
                      >
                        <option value="">Select a subject</option>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Appointment Booking">Appointment Booking</option>
                        <option value="Treatment Information">Treatment Information</option>
                        <option value="Billing & Insurance">Billing & Insurance</option>
                        <option value="Feedback">Feedback</option>
                        <option value="Complaint">Complaint</option>
                        <option value="Career">Career Opportunity</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    {errors.subject && (
                      <p className="mt-1 text-red-600 text-sm">{errors.subject}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Your Message <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute top-4 left-4 pointer-events-none">
                        <MessageSquare className="w-5 h-5 text-gray-400" />
                      </div>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Tell us how we can help you..."
                        required
                        className={`contact-form-input w-full pl-12 pr-4 py-3 border rounded-xl focus:ring-2 transition-all resize-none bg-white text-gray-900 placeholder-gray-500 ${
                          errors.message ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-[#1a5f3f]'
                        }`}
                      />
                    </div>
                    {errors.message && (
                      <p className="mt-1 text-red-600 text-sm">{errors.message}</p>
                    )}
                  </div>

                  {/* Consent */}
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleChange}
                      className="mt-1 w-5 h-5 text-[#1a5f3f] rounded border-gray-300 focus:ring-[#1a5f3f]"
                    />
                    <label className="text-sm text-gray-600">
                      I agree to the processing of my personal data in accordance with the 
                      <a href="/privacy-policy/" className="text-[#1a5f3f] hover:underline ml-1">Privacy Policy</a>
                    </label>
                  </div>
                  {errors.consent && (
                    <p className="text-red-600 text-sm -mt-2">{errors.consent}</p>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="submit-btn w-full py-4 px-6 bg-gradient-to-r from-[#1a5f3f] to-[#2d5f3f] text-white font-semibold rounded-xl hover:from-[#154a3f] hover:to-[#244d32] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* Right Column - Map and Additional Info */}
              <div className="space-y-8">
                {/* Map */}
                <div className="bg-gray-50 rounded-2xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Our Location</h3>
                  <div className="aspect-video bg-gray-200 rounded-xl overflow-hidden mb-4">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.9306612777295!2d55.270577599999996!3d25.2392603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa55e21fe09dd67b1%3A0x3b8c35661422d1a4!2sRama%20Care%20Polyclinic!5e0!3m2!1sen!2sin!4v1773489720526!5m2!1sen!2sin" width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-5 h-5 text-[#1a5f3f]" />
                    <span>Jumeirah 1, Dubai, UAE</span>
                  </div>
                </div>

                {/* Emergency Contact */}
                <div className="bg-gradient-to-br from-[#1a5f3f] to-[#2d5f3f] rounded-2xl p-6 text-white shadow-lg">
                  <h3 className="text-xl font-bold mb-4">Need Immediate Assistance?</h3>
                  <p className="text-gray-100 mb-6">
                    For urgent medical concerns or emergencies, please call us directly.
                  </p>
                  <div className="space-y-4">
                    <a 
                      href="tel:+971566597878"
                      className="block w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 rounded-xl py-3 px-4 text-center font-medium transition-all"
                    >
                      <div className="flex items-center justify-center gap-2">
                        <Phone className="w-5 h-5" />
                        <span>Call Now: +971 56 659 7878</span>
                      </div>
                    </a>
                    <a 
                      href="https://wa.me/971566597878"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="block w-full bg-[#25d366] hover:bg-[#128c7e] rounded-xl py-3 px-4 text-center font-medium transition-all"
                    >
                      <div className="flex items-center justify-center gap-2">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                        </svg>
                        <span>WhatsApp: +971 56 659 7878</span>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Clock className="w-6 h-6 text-[#1a5f3f]" />
                    Working Hours
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-700">Sunday</span>
                      <span className="font-medium text-[#1a5f3f]">10:00 AM - 10:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-700">Monday</span>
                      <span className="font-medium text-[#1a5f3f]">10:00 AM - 10:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-700">Tuesday</span>
                      <span className="font-medium text-[#1a5f3f]">10:00 AM - 10:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-700">Wednesday</span>
                      <span className="font-medium text-[#1a5f3f]">10:00 AM - 10:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-700">Thursday</span>
                      <span className="font-medium text-[#1a5f3f]">10:00 AM - 10:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-700">Friday</span>
                      <span className="font-medium text-[#1a5f3f]">10:00 AM - 10:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-gray-700">Saturday</span>
                      <span className="font-medium text-[#1a5f3f]">10:00 AM - 10:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
};

export default ContactUsPage;