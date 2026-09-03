export default function WhyUsSection() {

  const cards = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#B8860B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="6" />
          <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
        </svg>
      ),
      title: 'Our Expert Dermatologists',
      desc: 'Board-certified specialists with 10+ years of experience in aesthetic treatments',
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#B8860B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      title: 'Premium FDA-Approved Products',
      desc: 'We only use the highest quality, internationally certified dermal fillers',
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#B8860B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
      title: 'Natural-Looking Results',
      desc: 'Subtle enhancements that highlight your natural beauty, never overdone',
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#B8860B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ),
      title: 'Loved by more than 500 patients',
      desc: 'Join hundreds of satisfied clients who trust us with their aesthetic needs',
    },
  ];

  return (
    <section className="flex w-full flex-col items-center bg-white px-5 py-16 font-sans sm:px-6 md:py-20">
      <h2 className="text-center text-[32px] font-semibold leading-tight tracking-[-0.02em] text-[#0d0d0d] sm:text-[40px] lg:text-[48px]">
        Why RamaCare Polyclinic
      </h2>
      <p className="mt-3 max-w-xl px-2 text-center text-[15px] font-normal text-[#666666] md:text-[16px]">
        Discover Exceptional Aesthetic Treatments Near You
      </p>
      <div className="mt-10 grid w-full max-w-[1200px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => (
          <div
            key={card.title}
            className="group flex h-full flex-col items-center rounded-2xl bg-[#ffe4e4] px-6 py-8 text-center transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-sm">
              {card.icon}
            </div>
            <h3 className="mb-2 text-[15px] font-semibold leading-tight text-[#111111]">
              {card.title}
            </h3>
            <p className="text-[13px] font-normal leading-relaxed text-[#666666]">
              {card.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
