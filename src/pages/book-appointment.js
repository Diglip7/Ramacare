import React from 'react';
import Head from 'next/head';
import Layout from '../../components/Layout';
import BeginYourHealingJourneySection from '../../components/BeginYourHealingJourneySection';
import SEOContentSection from '../../components/SEOContentSection';
import {
  Calendar,
  Clock,
  MapPin,
  Phone,
  Award,
  Users,
  Shield,
  Star,
  CheckCircle
} from 'lucide-react';

const AppointmentPage = () => {
  const appointmentSEOContent = [
    "Booking an appointment at RamaCare Polyclinic is the first step toward receiving high-quality, personalized healthcare in Dubai. Our facility in Jumeirah 1 is designed to provide a seamless and stress-free experience for our patients. Whether you are seeking a consultation with a specialist or a routine health checkup, we offer flexible scheduling to accommodate your busy lifestyle.",
    {
      type: "heading",
      text: "What to Expect During Your First Visit"
    },
    "When you visit RamaCare Polyclinic, you will be welcomed by our professional and friendly staff. Our team will guide you through the registration process and ensure that you are comfortable before meeting with your doctor. During your consultation, our DHA-licensed specialists will perform a thorough assessment and discuss your health concerns in detail.",
    {
      type: "list",
      items: [
        "Personalized Assessment: A detailed review of your medical history and current symptoms.",
        "Expert Consultation: Direct access to specialized doctors in various medical fields.",
        "Diagnostic Support: On-site diagnostic tools for quick and accurate health evaluations.",
        "Transparent Communication: Clear explanations of your diagnosis and treatment options."
      ]
    },
    {
      type: "heading",
      text: "Convenient Healthcare in the Heart of Dubai"
    },
    "Located in Jumeirah Terrace Building, Jumeirah 1, our clinic is easily accessible with ample parking for our patients. We are open seven days a week from 10:00 AM to 10:00 PM to ensure that you can access medical care when you need it most. We also offer same-day appointments for urgent health concerns. Book your appointment today and experience the RamaCare difference."
  ];

  // Stats data for the hero section
  const stats = [
    { number: '500+', label: 'Happy Patients' },
    { number: '15+', label: 'Years Combined Experience' },
    { number: '98%', label: 'Success Rate' },
    { number: '30+', label: 'Expert Doctors' }
  ];

  // Features for why choose us section
  const features = [
    {
      icon: Award,
      title: 'DHA Licensed',
      description: 'Fully licensed and regulated by Dubai Health Authority'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Experienced professionals with 15+ years expertise'
    },
    {
      icon: Shield,
      title: 'Secure Booking',
      description: 'Your information is protected and confidential'
    },
    {
      icon: Star,
      title: '4.8/5 Rating',
      description: '500+ verified patient reviews'
    }
  ];

  return (
    <Layout>
      <Head>
        <title key="title">Book Your Appointment | RamaCare Polyclinic</title>
        <meta name="description" content="Schedule your personalized consultation with our DHA-licensed experts at RamaCare Polyclinic, a trusted Polyclinic in Dubai." key="description" />
        <meta name="keywords" content="book appointment Dubai, medical appointment, healthcare booking, RamaCare booking, polyclinic appointment" />

        <link rel="icon" type="image/png" href="/images/Logo.png" />
      </Head>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1a5f3f] via-[#2d5f3f] to-[#1a5f3f] text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <Calendar className="w-5 h-5" />
              <span className="text-sm font-medium">Book Your Appointment</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Schedule Your <span className="text-[#d4a574]">Health Consultation</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-gray-100">
              Connect with our DHA-licensed experts and take the first step toward better health
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-2xl md:text-3xl font-bold text-[#d4a574]">{stat.number}</div>
                  <div className="text-sm text-gray-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-[#1a5f3f]">RamaCare</span> for Your Appointment
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience premium healthcare with our comprehensive medical services and expert care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-[#1a5f3f]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-[#1a5f3f]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Alternative <span className="text-[#1a5f3f]">Ways to Book</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Prefer to speak with us directly? We're here to help through multiple channels
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Call Us */}
            <div className="bg-gradient-to-br from-[#1a5f3f] to-[#2d5f3f] rounded-2xl p-8 text-white text-center shadow-lg">
              <Phone className="w-12 h-12 mx-auto mb-4 text-[#d4a574]" />
              <h3 className="text-2xl font-bold mb-2">Call Us Directly</h3>
              <p className="text-gray-100 mb-6">Speak with our friendly staff for immediate assistance</p>
              <a
                href="tel:+971566597878"
                className="inline-block bg-[#d4a574] text-[#1a5f3f] px-6 py-3 rounded-xl font-semibold hover:bg-[#c19463] transition-colors"
              >
                +971 56 659 7878
              </a>
            </div>

            {/* WhatsApp */}
            <div className="bg-gradient-to-br from-[#1a5f3f] to-[#2d5f3f] rounded-2xl p-8 text-white text-center shadow-lg">
              <svg className="w-12 h-12 mx-auto mb-4 text-[#d4a574]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              <h3 className="text-2xl font-bold mb-2">WhatsApp</h3>
              <p className="text-gray-100 mb-6">Chat with us instantly for quick booking</p>
              <a
                href="https://wa.me/971566597878"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-block bg-[#d4a574] text-[#1a5f3f] px-6 py-3 rounded-xl font-semibold hover:bg-[#c19463] transition-colors"
              >
                Chat Now
              </a>
            </div>

            {/* Email */}
            <div className="bg-gradient-to-br from-[#1a5f3f] to-[#2d5f3f] rounded-2xl p-8 text-white text-center shadow-lg">
              <svg className="w-12 h-12 mx-auto mb-4 text-[#d4a574]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <h3 className="text-2xl font-bold mb-2">Email Us</h3>
              <p className="text-gray-100 mb-6">Send us your details and we'll contact you</p>
              <a
                href="mailto:query@ramacarepolyclinic.ae"
                className="inline-block bg-[#d4a574] text-[#1a5f3f] px-6 py-3 rounded-xl font-semibold hover:bg-[#c19463] transition-colors"
              >
                Send Email
              </a>
            </div>
          </div>

          {/* Location and Hours */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <MapPin className="w-8 h-8 text-[#1a5f3f]" />
                <h3 className="text-2xl font-bold text-gray-900">Our Location</h3>
              </div>
              <p className="text-gray-700 mb-4">
                12 Al Dhiyafah Rd - Jumeirah Terrace Building, Ground Floor, Jumeirah 1 - Dubai
              </p>
              <div className="aspect-video bg-gray-200 rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.8474444444445!2d55.2792833!3d25.1055556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6bdfbdfbdfdf%3A0x3e5f6bdfbdfbdfdf!2sJumeirah%20Terrace%20Building!5e0!3m2!1sen!2sae!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>

            <div className="bg-[#1a5f3f] rounded-2xl p-8 text-white">
              <div className="flex items-center gap-4 mb-6">
                <Clock className="w-8 h-8 text-[#d4a574]" />
                <h3 className="text-2xl font-bold">Working Hours</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-white/20">
                  <span>Sunday - Saturday</span>
                  <span className="font-medium text-[#d4a574]">10:00 AM - 10:00 PM</span>
                </div>
                <div className="mt-6 p-4 bg-white/10 rounded-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="w-5 h-5 text-[#d4a574]" />
                    <span className="font-medium">Same-day appointments available</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-[#d4a574]" />
                    <span className="font-medium">Flexible scheduling for professionals</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Booking Form Section */}
      <section className="py-16 bg-gradient-to-br from-[#1a5f3f] to-[#2d5f3f] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to <span className="text-[#d4a574]">Book Your Appointment</span>?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-100">
              Fill out the form below and our team will confirm your appointment shortly
            </p>
          </div>

          <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
            <BeginYourHealingJourneySection />
          </div>
        </div>
      </section>
      <SEOContentSection title="Schedule Your Health Journey Today" content={appointmentSEOContent} />
    </Layout>
  );
};

export default AppointmentPage;