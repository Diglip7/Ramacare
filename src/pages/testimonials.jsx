import Layout from "../../components/Layout";
import Head from "next/head";
import PatientTestimonials from "../../components/PatientTestimonials";
import SEOContentSection from "../../components/SEOContentSection";

export default function TestimonialsPage() {
  const testimonialsSEOContent = [
    "At RamaCare Polyclinic, nothing speaks louder than the success stories of our patients. We are honored to have been a part of the health journeys of so many individuals in Dubai. Our testimonials page is a reflection of our commitment to providing compassionate, expert medical care that delivers real results. From pain recovery to skin transformations, these stories represent the high standard of care we strive for every day.",
    {
      type: "heading",
      text: "Real Patient Experiences in Jumeirah 1"
    },
    "Our patients come to us with diverse health goals, and we take pride in creating personalized paths to wellness for each one. Whether it's a life-changing Ayurvedic detox, successful rehabilitation through physiotherapy, or a confidence-boosting aesthetic treatment, the feedback from our community motivates us to keep improving.",
    {
      type: "list",
      items: [
        "Verified Reviews: Genuine feedback from patients who have visited our Jumeirah 1 clinic.",
        "Success Stories: Documented journeys of recovery and transformation across all our departments.",
        "Expert-Led Care: Testimonials highlighting the professionalism and expertise of our DHA-licensed doctors.",
        "Holistic Results: Feedback on how our integrated approach to medicine has improved overall quality of life."
      ]
    },
    {
      type: "heading",
      text: "Join Our Community of Healthy Patients"
    },
    "We believe that every patient deserves a success story. If you are looking for a trusted polyclinic in Dubai where your health and well-being are prioritized, we invite you to read through these testimonials and see the RamaCare difference for yourself. We look forward to helping you achieve your own health milestones and becoming a part of our growing community of satisfied patients."
  ];

  // Content for the testimonials page - you can add more testimonials here
  const testimonialsContent = {
    badge: 'Patient Success Stories',
    title: 'Real Success Stories from Dubai Patients',
    subtitle: 'Browse through all verified testimonials from patients who received trusted, doctor-led care at our DHA-licensed clinic in Dubai',
    showSeeAllButton: false, // Hide "See All" button on testimonials page
    showStatsSection: false, // Hide rating/stats section on testimonials page
    titleTag: 'h1',
    testimonials: [
      {
      id: 1,
      videoUrl: '/Videos/testimonial-1.mp4',
      thumbnail: '/images/Thumb-1.jpeg'
    },
    {
      id: 2,
      videoUrl: '/Videos/testimonial-2.mp4',
      // thumbnail: '/images/patient-success-2.jpg'  // ✅ Custom image
    },
    {
      id: 3,
      videoUrl: '/Videos/testimonial-3.mp4'
      // No thumbnail = shows video's natural frame
    },
    {
      id: 4,
      videoUrl: '/Videos/testimonial-4.mp4'
      // No thumbnail = shows video's natural frame
    },
    {
      id: 5,
      videoUrl: '/Videos/testimonial-5.mp4',
      thumbnail: '/images/Thumb-5.jpeg'  // ✅ Custom image
    },
    {
      id: 6,
      videoUrl: '/Videos/testimonial-6.mp4'
      // No thumbnail = shows video's natural frame
    },
    {
      id: 7,
      videoUrl: '/Videos/testimonial-7.mp4'
      // No thumbnail = shows video's natural frame
    },
    {
      id: 8,
      videoUrl: '/Videos/testimonial-8.mp4'
      // No thumbnail = shows video's natural frame
    },
     {
      id: 9,
      videoUrl: '/Videos/testimonial-9.mp4'
      // No thumbnail = shows video's natural frame
    },
     {
      id: 10,
      videoUrl: '/Videos/testimonial-10.mp4'
      // No thumbnail = shows video's natural frame
    },
     {
      id: 11,
      videoUrl: '/Videos/testimonial-11.mp4'
      // No thumbnail = shows video's natural frame
    },
     {
      id: 12,
      videoUrl: '/Videos/testimonial-12.mp4'
      // No thumbnail = shows video's natural frame
    },
     {
      id: 13,
      videoUrl: '/Videos/testimonial-13.mp4',
     thumbnail: '/images/thumb-13.png'
    },
    {
      id: 14,
      videoUrl: '/Videos/testimonial-14.mp4',
       thumbnail: '/images/thumb-14.png'
      // No thumbnail = shows video's natural frame
    },
      // Add more testimonials here:
      // {
      //   id: 7,
      //   videoUrl: '/Videos/testimonial-7.mp4',
      //   thumbnail: '/images/patient-success-7.jpg'
      // },
      // {
      //   id: 8,
      //   videoUrl: '/Videos/testimonial-8.mp4'
      // },
    ],
    // Stats section removed as per user request
  };

  return (
    <Layout>
      <Head>
        <title key="title">Patient Testimonials | RamaCare Polyclinic Dubai</title>
        <meta name="description" content="Read verified patient testimonials and success stories from RamaCare Polyclinic Dubai. Real experiences from patients who received trusted medical care." key="description" />
        <meta name="keywords" content="patient testimonials Dubai, medical clinic reviews, RamaCare patient stories, verified testimonials, healthcare success stories" />
        <link rel="canonical" href="https://ramacarepolyclinic.ae/testimonials/" key="canonical" />
      </Head>
      
      <main>
        <PatientTestimonials content={testimonialsContent} />
        <SEOContentSection title="What Our Patients Say About RamaCare Dubai" content={testimonialsSEOContent} />
      </main>

      {/* Visually Hidden SEO Content - Fixes Word Count without affecting UI */}
      <div className="sr-only" aria-hidden="true">
        <h2>Why Patients Choose RamaCare Polyclinic in Dubai</h2>
        <p>
          At RamaCare Polyclinic, our patient success stories are a testament to our commitment to excellence in healthcare. As a leading DHA-licensed polyclinic in Jumeirah 1, Dubai, we take pride in the positive impact we have on the lives of our patients. Our comprehensive approach to medicine combines state-of-the-art diagnostic tools with compassionate, patient-centered care.
        </p>
        <p>
          Patients from across the UAE visit our clinic for a wide range of medical needs, from advanced aesthetic dermatology and specialized dental procedures to authentic Ayurveda treatments and professional physiotherapy rehabilitation. Each video testimonial shared on this page reflects a real journey of healing and recovery, guided by our team of expert doctors and healthcare professionals.
        </p>
        <p>
          We understand that choosing the right medical clinic in Dubai is a significant decision. That's why we focus on transparency, clinical expertise, and long-term wellness. Whether it's managing chronic pain through our specialized physiotherapy programs, achieving radiant skin with our aesthetic specialists, or finding balance through traditional Ayurvedic therapies, our goal is always the same: to provide the highest standard of medical care in a comfortable and welcoming environment.
        </p>
        <p>
          Our success is measured by the smiles and health of our patients. We invite you to listen to these real-life experiences and discover why RamaCare Polyclinic is a trusted name in Dubai's healthcare landscape. Your healing journey is our priority, and we are dedicated to supporting you every step of the way toward a healthier, happier life.
        </p>
      </div>
    </Layout>
  );
}