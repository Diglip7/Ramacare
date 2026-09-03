import React, { useState, useMemo } from 'react';
import { getAllSubcategories } from '../src/data/subcategoryContent';

const BookConsultation = ({ content }) => {
  // Default content
  const defaultContent = {
    badge: 'Start Your Journey',
    title: 'Book Your Free Consultation Today',
    description: 'Take the first step towards better health and wellness. Our DHA-licensed specialists are ready to help.',
    getInTouchTitle: 'Get In Touch',
    requestAppointmentTitle: 'Request Appointment',
    submitButtonText: 'Confirm Free Consultation',
    contactInfo: {
      phone: '+971 04 286 2006',
      whatsapp: '971566597878',
      email: 'query@ramacarepolyclinic.ae',
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
        description: 'Certified Healthcare Facility'
      },
      {
        title: 'Experienced Team',
        description: '15+ Years Combined'
      },
      {
        title: '2,500+ Patients',
        description: 'Successfully Treated'
      },
      {
        title: '4.8/5 Rating',
        description: '500+ Verified Reviews'
      }
    ],
    concerns: [
      { value: 'hair-loss', label: 'Hair Loss' },
      { value: 'thinning', label: 'Hair Thinning' },
      { value: 'baldness', label: 'Baldness' },
      { value: 'scalp-issues', label: 'Scalp Issues' },
      { value: 'other', label: 'Other' }
    ]
  };

  // Use provided content or defaults
  const badge = content?.badge || defaultContent.badge;
  const title = content?.title || defaultContent.title;
  const description = content?.description || defaultContent.description;
  const getInTouchTitle = content?.getInTouchTitle || defaultContent.getInTouchTitle;
  const requestAppointmentTitle = content?.requestAppointmentTitle || defaultContent.requestAppointmentTitle;
  const submitButtonText = content?.submitButtonText || defaultContent.submitButtonText;
  const contactInfo = content?.contactInfo || defaultContent.contactInfo;
  const clinicHours = content?.clinicHours || defaultContent.clinicHours;
  const statCards = content?.statCards || defaultContent.statCards;
  const concerns = content?.concerns || defaultContent.concerns;
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    concern: '',
    additionalInfo: '',
    preferredDate: ''
  });
  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState({ show: false, type: 'success', message: '' });

  const treatmentOptions = useMemo(() => {
    try {
      const all = getAllSubcategories();
      const toTitle = (s) => s.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

      return all.map(({ key }) => {
        const label = toTitle(key).trim();
        return { value: key, label };
      });
    } catch (error) {
      console.error('Error generating treatment options:', error);
      return [];
    }
  }, []);

  const [treatmentQuery, setTreatmentQuery] = useState('');
  const [isTreatmentOpen, setIsTreatmentOpen] = useState(false);
  const filteredOptions = useMemo(
    () => treatmentOptions.filter(o => o.label.toLowerCase().includes(treatmentQuery.trim().toLowerCase())),
    [treatmentOptions, treatmentQuery]
  );
  const showToast = (message, type = 'success') => {
    setToast({ show: true, type, message });
    setTimeout(() => setToast(prev => ({ ...prev, show: false })), 3000);
  };

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isValidPhone = (phone) => /^\+?\d{7,15}$/.test(phone);
  const todayStr = new Date().toISOString().split('T')[0];

  const validateField = (name, value, all) => {
    if (name === 'fullName') {
      if (!value || value.trim().length < 2) return 'Please enter your full name';
      if (!/^[A-Za-z\s'-]+$/.test(value.trim())) return 'Name can only include letters, spaces, apostrophes, hyphens';
      return '';
    }
    if (name === 'phone') {
      if (!value || !isValidPhone(value.trim())) return 'Enter a valid phone (7–15 digits, optional +)';
      return '';
    }
    if (name === 'email') {
      if (!value || !isValidEmail(value.trim())) return 'Enter a valid email address';
      return '';
    }
    if (name === 'concern') {
      if (!value) return 'Select your primary concern';
      return '';
    }
    if (name === 'preferredDate') {
      if (!value) return 'Select a preferred date';
      const selected = new Date(value);
      if (isNaN(selected.getTime())) return 'Select a valid date';
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selected < today) return 'Date cannot be in the past';
      return '';
    }
    if (name === 'additionalInfo') {
      if (value && value.trim().length > 0 && value.trim().length < 10) return 'Please provide at least 10 characters';
      return '';
    }
    return '';
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name === 'phone') value = value.replace(/[^\d+]/g, '');
    if (name === 'fullName') value = value.replace(/[^A-Za-z\s'-]/g, '');
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setErrors(prev => {
      const all = { ...formData, [name]: value };
      const msg = validateField(name, value, all);
      const next = { ...prev };
      if (msg) next[name] = msg; else delete next[name];
      return next;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = Object.keys(formData);
    const newErrors = {};
    fields.forEach((f) => {
      const msg = validateField(f, formData[f], formData);
      if (msg) newErrors[f] = msg;
    });
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;
    try {
      const res = await fetch('/api/appointment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source: 'BookConsultation',
          action: 'book_consultation',
          ...formData
        })
      });
      if (res.ok) {
        showToast('Consultation request submitted successfully', 'success');
        if (typeof window.gtag === 'function') {
          window.gtag('event', 'generate_lead', {
            form_name: 'BookConsultation',
          });
        }
        setFormData({
          fullName: '',
          phone: '',
          email: '',
          concern: '',
          additionalInfo: '',
          preferredDate: ''
        });
        setTreatmentQuery('');
        setErrors({});
      } else {
        showToast('Submission failed. Please try again.', 'error');
      }
    } catch {
      showToast('Submission failed. Please try again.', 'error');
    }
  };

  return (
    <section id="book-now" className="w-full bg-[#CFC8BA] py-8 md:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {toast.show && (
          <div className="fixed top-4 right-4 z-50">
            <div className={`px-4 py-3 rounded-lg text-white shadow-sm ${toast.type === 'success' ? 'bg-emerald-600' : 'bg-red-600'}`}>
              {toast.message}
            </div>
          </div>
        )}
        {/* Section Header */}
        <div className="text-center mb-6 md:mb-8">
          <div className="inline-block mb-3">
            <span className="bg-white text-[#3d5f4a] px-4 py-2 rounded-full font-medium text-sm shadow-sm">{badge}</span>
          </div>
          <h2 className="md:text-xl lg:text-2xl font-bold text-[#1F2937] text-center mb-3">
            {title}
          </h2>
          <p className="text-sm md:text-base text-gray-700 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        {/* Contact & Booking Form Section */}
        <div className="mt-6 md:mt-8">
          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
            {/* LEFT COLUMN - Contact Information */}
            <div>
              {/* Get In Touch Card */}
              <div className="bg-white rounded-2xl p-5 md:p-6 shadow-md mb-4">
                <h3 className="text-base md:text-lg font-medium text-[#2D5F3F] mb-5">{getInTouchTitle}</h3>

                <div className="space-y-4">
                  {/* Phone */}
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="flex items-center gap-4 transition-all duration-200 cursor-pointer group"
                  >
                    <div className="w-12 h-12 bg-[#2D5F3F] rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#244D32] transition-colors">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm md:text-base font-medium text-[#1F2937] mb-0.5">Call Us</p>
                      <p className="text-xs md:text-sm text-[#4B5563]">{contactInfo.phone}</p>
                    </div>
                  </a>

                  {/* WhatsApp */}
                  <a
                    href={`https://wa.me/${contactInfo.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="flex items-center gap-4 transition-all duration-200 cursor-pointer group"
                  >
                    <div className="w-12 h-12 bg-[#2D5F3F] rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#244D32] transition-colors">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm md:text-base font-medium text-[#1F2937] mb-0.5">WhatsApp</p>
                      <p className="text-xs md:text-sm text-[#4B5563]">Chat with us instantly</p>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="flex items-center gap-4 transition-all duration-200 cursor-pointer group"
                  >
                    <div className="w-12 h-12 bg-[#2D5F3F] rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#244D32] transition-colors">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm md:text-base font-medium text-[#1F2937] mb-0.5">Email</p>
                      <p className="text-xs md:text-sm text-[#4B5563]">{contactInfo.email}</p>
                    </div>
                  </a>

                  {/* Location */}
                  <div className="flex items-center gap-4 pt-2">
                    <div className="w-12 h-12 bg-[#2D5F3F] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm md:text-base font-medium text-[#1F2937] mb-0.5">Clinic Address</p>
                      <p className="text-xs md:text-sm text-[#4B5563]">{contactInfo.address.line1}</p>
                      <p className="text-xs md:text-sm text-[#6B7280]">{contactInfo.address.line2}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Clinic Hours Card */}
              <div className="bg-[#2D5F3F] rounded-2xl p-5 md:p-6 text-white shadow-md">
                <h3 className="text-lg md:text-xl font-bold mb-4">Clinic Hours</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm md:text-base text-white">{clinicHours.weekdays}</span>
                    <span className="text-sm md:text-base font-medium text-white">{clinicHours.weekdaysTime}</span>
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t border-white/20">
                    {/* <span className="text-sm md:text-base text-white">{clinicHours.friday}</span>
                    <span className="text-sm md:text-base font-medium text-white">{clinicHours.fridayTime}</span> */}
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN - Appointment Form */}
            <div className="bg-white rounded-2xl p-5 md:p-6 shadow-md">
              <h3 className="text-base md:text-lg font-medium text-[#2D5F3F] mb-5">{requestAppointmentTitle}</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Full Name & Phone Number - Two Columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm md:text-base font-semibold text-[#2D5F3F] mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                      className={`w-full px-4 py-3 border rounded-lg text-sm focus:outline-none transition-all duration-200 bg-[#EFF6FF] text-[#1F2937] placeholder-[#6B7280] ${errors.fullName ? 'border-red-500 focus:border-red-500' : 'border-transparent focus:border-[#2D5F3F] focus:ring-2 focus:ring-[#2D5F3F]/20'}`}
                      pattern="[A-Za-z\s'-]+"
                    />
                    {errors.fullName && (
                      <p className="mt-1.5 text-red-600 text-xs">{errors.fullName}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm md:text-base font-semibold text-[#2D5F3F] mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+971 XX XXX XXXX"
                      required
                      className={`w-full px-4 py-3 border rounded-lg text-sm focus:outline-none transition-all duration-200 bg-[#EFF6FF] text-[#1F2937] placeholder-[#6B7280] ${errors.phone ? 'border-red-500 focus:border-red-500' : 'border-transparent focus:border-[#2D5F3F] focus:ring-2 focus:ring-[#2D5F3F]/20'}`}
                    />
                    {errors.phone && (
                      <p className="mt-1.5 text-red-600 text-xs">{errors.phone}</p>
                    )}
                  </div>
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-sm md:text-base font-semibold text-[#2D5F3F] mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className={`w-full px-4 py-3 border rounded-lg text-sm focus:outline-none transition-all duration-200 bg-[#EFF6FF] text-[#1F2937] placeholder-[#6B7280] ${errors.email ? 'border-red-500 focus:border-red-500' : 'border-transparent focus:border-[#2D5F3F] focus:ring-2 focus:ring-[#2D5F3F]/20'}`}
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-red-600 text-xs">{errors.email}</p>
                  )}
                </div>

                {/* Primary Concern */}
                <div>
                  <label className="block text-sm md:text-base font-semibold text-[#2D5F3F] mb-2">
                    Primary Concern
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={treatmentQuery}
                      onChange={(e) => { setTreatmentQuery(e.target.value); setIsTreatmentOpen(true); }}
                      onFocus={() => setIsTreatmentOpen(true)}
                      onBlur={() => setTimeout(() => setIsTreatmentOpen(false), 200)}
                      placeholder="Search and select treatment"
                      className={`w-full px-4 py-3 border rounded-lg text-sm focus:outline-none transition-all duration-200 bg-white text-[#1F2937] placeholder-[#6B7280] ${errors.concern ? 'border-red-500 focus:border-red-500' : 'border-[#D1D5DB] focus:border-[#2D5F3F] focus:ring-2 focus:ring-[#2D5F3F]/20'}`}
                    />
                    {isTreatmentOpen && (
                      <div className="absolute z-50 mt-1 w-full max-h-52 overflow-auto bg-white border border-gray-200 rounded-lg shadow-lg">
                        {filteredOptions.length === 0 && (
                          <div className="px-4 py-2.5 text-gray-500 text-sm">No matches</div>
                        )}
                        {filteredOptions.map((opt) => (
                          <div
                            key={opt.value}
                            className="px-4 py-2.5 text-sm text-gray-900 hover:bg-[#D5F5E3] hover:text-[#27AE60] cursor-pointer transition-colors"
                            onMouseDown={() => {
                              setFormData(prev => ({ ...prev, concern: opt.value }));
                              setTreatmentQuery(opt.label);
                              setIsTreatmentOpen(false);
                              setErrors(prev => { const next = { ...prev }; delete next.concern; return next; });
                            }}
                          >
                            {opt.label}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  {errors.concern && (
                    <p className="mt-1.5 text-red-600 text-xs">{errors.concern}</p>
                  )}
                </div>

                {/* Additional Information */}
                <div>
                  <label className="block text-sm md:text-base font-semibold text-[#2D5F3F] mb-2">
                    Additional Information
                  </label>
                  <textarea
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Tell us more about your condition, duration, previous treatments tried, etc."
                    className={`w-full px-4 py-3 border rounded-lg text-sm focus:outline-none transition-all duration-200 resize-none bg-[#EFF6FF] text-[#1F2937] placeholder-[#6B7280] ${errors.additionalInfo ? 'border-red-500 focus:border-red-500' : 'border-transparent focus:border-[#2D5F3F] focus:ring-2 focus:ring-[#2D5F3F]/20'}`}
                  />
                  {errors.additionalInfo && (
                    <p className="mt-1.5 text-red-600 text-xs">{errors.additionalInfo}</p>
                  )}
                </div>

                {/* Preferred Date */}
                <div>
                  <label className="block text-sm md:text-base font-semibold text-[#2D5F3F] mb-2">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg text-sm focus:outline-none transition-all duration-200 bg-white text-[#1F2937] placeholder-[#6B7280] ${errors.preferredDate ? 'border-red-500 focus:border-red-500' : 'border-[#D1D5DB] focus:border-[#2D5F3F] focus:ring-2 focus:ring-[#2D5F3F]/20'}`}
                      min={todayStr}
                    />
                    {errors.preferredDate && (
                      <p className="mt-1.5 text-red-600 text-xs">{errors.preferredDate}</p>
                    )}
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#2D5F3F] text-white py-3.5 px-6 rounded-lg text-sm md:text-base font-medium flex items-center justify-center gap-2 hover:bg-[#244D32] transition-all duration-200 mt-5 shadow-md hover:shadow-lg"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>{submitButtonText}</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Privacy Notice */}
                <div className="flex items-center justify-center gap-2 pt-2">
                  <svg className="w-4 h-4 text-[#6B7280]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <p className="text-xs text-[#6B7280]">Your information is secure and confidential</p>
                </div>
              </form>
            </div>
          </div>

          {/* STAT CARDS Grid - After Form */}
          <div className="mt-8 md:mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
              {statCards.map((card, index) => (
                <div key={index} className="bg-white rounded-2xl p-4 md:p-5 shadow-md text-center hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-[#2D5F3F] to-[#3A7B51] rounded-xl flex items-center justify-center mx-auto mb-3">
                    {index === 0 && (
                      <svg className="w-6 h-6 md:w-7 md:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    )}
                    {index === 1 && (
                      <svg className="w-6 h-6 md:w-7 md:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    )}
                    {index === 2 && (
                      <svg className="w-6 h-6 md:w-7 md:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    )}
                    {index === 3 && (
                      <svg className="w-6 h-6 md:w-7 md:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                      </svg>
                    )}
                  </div>
                  <h4 className="text-sm md:text-base font-bold text-gray-900 mb-1.5">{card.title}</h4>
                  <p className="text-xs md:text-sm text-gray-600">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookConsultation;