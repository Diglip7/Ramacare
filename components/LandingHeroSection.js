import Image from 'next/image';
import { useModal } from './ModalContext';

export default function HeroSection() {
  const { openModal } = useModal();

  return (
    <section className="relative flex items-center min-h-screen overflow-hidden">
      {/* Background Image Optimized */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/HOME.png"
          alt="Dermal Fillers in Dubai - RamaCare Polyclinic"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 1200px"
          className="object-cover object-center"
        />
      </div>

      <div className="relative z-10 w-full px-6 py-20 md:py-24 lg:py-28 md:px-10 lg:px-16 xl:px-24 bg-white/20">
        <div className="max-w-[1100px] flex flex-col gap-5 text-left">
          {/* Special Offer Badge */}
          <div className="inline-flex items-center self-start border border-[#fca5a5] rounded-[8px] bg-[#fef2f2] px-4 py-2 text-[14px] font-medium tracking-wide text-[#dc2626]">
            <span className="mr-2">🔥</span>
            SPECIAL OFFER: 40% OFF + FREE Consultation (Worth AED 500) – Ends Tonight!
          </div>

          {/* Main Headline */}
          <h1
            className="font-semibold text-black leading-[1.12] tracking-[-0.01em] text-[30px] sm:text-[48px] lg:text-[60px]"
            style={{ fontFamily: "'Montserrat', 'Poppins', 'Inter', sans-serif" }}
          >
            Transform Your Look with Dermal Fillers - From AED 2,200
          </h1>

          {/* Bullet line */}
          <p className="text-[16px] font-normal text-[#374151]">
            ✓ FDA-approved fillers | ✓ Expert dermatologists | ✓ Natural results
          </p>

          {/* Sub copy */}
          <p className="max-w-[600px] text-[15px] leading-relaxed text-[#6b7280]">
            Join 500+ satisfied clients who&apos;ve enhanced their beauty with us @ RamaCare Polyclinic
          </p>

          {/* CTA Buttons - Side by side */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4 w-full max-w-[700px]">
            <a
              href="https://wa.me/971542669345"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-[6px] bg-[#22c55e] px-6 text-[15px] font-medium text-white shadow-sm transition-all duration-200 hover:bg-[#16a34a] w-full sm:w-auto sm:flex-1"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
              Get 40% OFF on WhatsApp
            </a>

            <button
              onClick={openModal}
              className="inline-flex h-12 items-center justify-center rounded-[6px] bg-[#b8860b] px-6 text-[15px] font-medium text-white shadow-sm transition-all duration-200 hover:bg-[#14532d] w-full sm:w-auto sm:flex-1"
            >
              Book Free Consultation
            </button>
          </div>

          {/* Phone contact */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="tel:+971542669345"
              className="inline-flex items-center gap-2 rounded-full border-2 border-[#b8860b] bg-white/90 px-4 py-2 text-[14px] font-medium text-[#b8860b] transition-all duration-200 hover:bg-[#14532d] hover:text-white hover:border-[#14532d]"
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              On Call: +971542669345
            </a>
            <span className="text-[14px] font-normal text-[#6b7280]">
              Available 24/7 for urgent appointments
            </span>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-8 pt-6 text-[14px] font-medium text-[#4b5563]">
            {['Dubai Licensed Clinic', 'FDA-Approved Products', 'Expert Dermatologists'].map(
              (item) => (
                <div key={item} className="flex items-center gap-2">
                  <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border-2 border-[#b8860b] text-[12px] text-[#b8860b]">
                    ✓
                  </div>
                  {item}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
