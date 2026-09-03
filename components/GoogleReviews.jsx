import React, { useState } from 'react';
import { Star, CheckCircle } from 'lucide-react';

const reviewsData = [
  {
    id: 1,
    name: "Angelica Aquino",
    rating: 5,
    date: "2 days ago",
    text: "I recently had a HydraFacial appointment with Arfah, and I’m extremely satisfied with the treatment. She is naturally skilled, knowledgeable, and was able to assess my skin type and understand exactly what my skin needed. Her professionalism and expertise made the entire experience wonderful. I highly recommend her to anyone looking for exceptional skincare services.\n\nI’d also like to commend Aiza, the receptionist, who was very accommodating and answered all my queries politely. She made the booking process smooth and welcoming.\n\nI will definitely come back for my future treatments and will gladly recommend them to my family and friends.",
    avatar: "A",
    role: "Verified Patient"
  },
  {
    id: 2,
    name: "Emma Bianca Reyes",
    rating: 5,
    date: "18 hours ago",
    text: "Had a great experience at RamaCare Polyclinic! 🥰 Special thanks to Ms. Nodainne for her excellent service during my Oxygeneo and Hydrafacial treatments. She was very professional, gentle, and attentive throughout the session. Highly recommended, and I'll definitely be coming back! 💕",
    avatar: "E",
    role: "Verified Patient"
  },
 {
    id: 3,
    name: "Kranthi Kiran",
    rating: 5,
    date: "1 day ago",
    text: "Really happy with my experience here with Dr.Aprana. She was not only highly professional and knowledgeable, but also took a very personal approach. I never felt rushed, and everything was explained patiently and clearly\n\nWhat stood out most was the genuine care and attention given throughout the treatment. It felt like they were truly focused on my comfort and well-being, rather than just completing the procedure.\n\nExcellent service, friendly approach, and great professionalism. Highly recommended!",
    avatar: "K",
    role: "Verified Patient"
  }
];

export default function GoogleReviews() {
  const googleSearchUrl = "https://www.google.com/search?q=ramacarepolyclinic";
  
  // Track which reviews are expanded
  const [expandedReviews, setExpandedReviews] = useState({});

  const toggleExpand = (id) => {
    setExpandedReviews(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const getExcerpt = (text, maxLength = 160) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  return (
    <section className="py-12 px-4 bg-[#FAF9F5] border-t border-[#e9e2d6]/30 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Summary */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4 pb-6 border-b border-[#e9e2d6]/20">
          <div className="flex items-center gap-3">
            {/* Google Logo */}
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22c-.87-2.6-2.87-4.53-6.19-4.53z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
            </svg>
            <div>
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                Patient Google Reviews
              </h2>
              <div className="flex items-center gap-1.5 mt-0.5">
                <div className="flex gap-0.5 text-amber-400">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                </div>
                <span className="text-xs font-bold text-gray-700">4.8 / 5.0 Rating</span>
                
              </div>
            </div>
          </div>
          
          <a 
            href={googleSearchUrl}
            target="_blank"
            rel="noopener noreferrer" 
            className="inline-flex items-center bg-[#1F5E4B] hover:bg-[#154133] text-white px-4 py-2 rounded-full font-semibold text-xs transition-all shadow-sm hover:shadow-md cursor-pointer"
          >
            Review Us on Google
          </a>
        </div>

        {/* Small Review Cards Grid - 3 items in 1 line on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {reviewsData.map((review) => {
            const isLong = review.text.length > 160;
            const isExpanded = !!expandedReviews[review.id];
            
            return (
              <div 
                key={review.id} 
                className="bg-white p-5 rounded-xl shadow-xs border border-[#e9e2d6]/30 flex flex-col justify-between transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-sm"
              >
                <div>
                  {/* User Info */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-[#1F5E4B]/10 text-[#1F5E4B] flex items-center justify-center font-bold text-xs">
                        {review.avatar}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-xs leading-tight flex items-center gap-1">
                          {review.name}
                          <CheckCircle className="w-3 h-3 text-blue-500 fill-current" />
                        </h4>
                        <p className="text-[10px] text-gray-400">{review.role}</p>
                      </div>
                    </div>
                    <div className="flex gap-0.5 text-amber-400">
                      <Star className="w-3 h-3 fill-current" />
                      <Star className="w-3 h-3 fill-current" />
                      <Star className="w-3 h-3 fill-current" />
                      <Star className="w-3 h-3 fill-current" />
                      <Star className="w-3 h-3 fill-current" />
                    </div>
                  </div>

                  {/* Review Text */}
                  <p className="text-gray-600 text-xs leading-relaxed mb-1 italic whitespace-pre-line">
                    "{isExpanded ? review.text : getExcerpt(review.text)}"
                  </p>
                  
                  {isLong && (
                    <button 
                      onClick={() => toggleExpand(review.id)}
                      className="text-[#1F5E4B] hover:text-[#154133] font-bold text-[10px] uppercase tracking-wider mb-3 cursor-pointer outline-none focus:outline-none"
                    >
                      {isExpanded ? 'Show Less' : 'Read More'}
                    </button>
                  )}
                </div>

                {/* Review Footer */}
                <div className="text-[10px] text-gray-400 pt-2.5 border-t border-gray-100 flex items-center">
                  <span>Verified Google Review</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
