import { useEffect, useState } from 'react';

export default function StatsSection() {
  const [slots, setSlots] = useState(7);
  const [viewers, setViewers] = useState(34);
  const [minutes, setMinutes] = useState(3);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlots((prev) => Math.max(3, prev + (Math.random() > 0.7 ? -1 : 0)));
      setViewers((prev) =>
        Math.min(50, Math.max(20, prev + (Math.random() > 0.5 ? 1 : -1))),
      );
      setMinutes((prev) =>
        Math.max(1, prev + (Math.random() > 0.6 ? 1 : -1)),
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const stats = [
    {
      icon: (
        <svg
          width="42"
          height="42"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#B8860B"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      value: '500+',
      label: 'Happy Patients',
    },
    {
      icon: (
        <svg
          width="42"
          height="42"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#B8860B"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="8" r="6" />
          <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
        </svg>
      ),
      value: '4.9★',
      label: 'Google Rating',
    },
    {
      icon: (
        <svg
          width="42"
          height="42"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#B8860B"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      value: '100%',
      label: 'DHA Licensed',
    },
    {
      icon: (
        <svg
          width="42"
          height="42"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#B8860B"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
      value: '15+',
      label: 'Years combined Experience',
    },
  ];

  return (
    <section className="w-full font-sans">
      {/* Urgency bar */}
      <div className="w-full border-y border-[#fecaca] bg-gradient-to-r from-[#fff8f8] to-[#fff5f5]">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-5 px-4 py-3 sm:gap-8 md:gap-12 lg:px-6">
          {/* Slots */}
          <div className="flex items-center gap-2 text-[13px] text-[#111111] sm:text-sm">
            <svg
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ef4444"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            <span className="whitespace-nowrap">
              Only <span className="font-semibold">{slots} slots</span> left
              this week!
            </span>
          </div>

          {/* Divider */}
          <div className="hidden h-[18px] w-px bg-[#fca5a5] md:block" />

          {/* Viewers */}
          <div className="flex items-center gap-2 text-[13px] text-[#111111] sm:text-sm">
            <svg
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#B8860B"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            <span className="whitespace-nowrap">
              <span className="font-semibold">{viewers} people</span> viewing
              this offer now
            </span>
          </div>

          {/* Divider */}
          <div className="hidden h-[18px] w-px bg-[#fca5a5] md:block" />

          {/* Last booking */}
          <div className="flex items-center gap-2 text-[13px] text-[#111111] sm:text-sm">
            <span className="inline-block h-[9px] w-[9px] rounded-full bg-[#22C55E] shadow-[0_0_6px_#22C55E]" />
            <span className="whitespace-nowrap">
              Last booking:{' '}
              <span className="font-semibold">{minutes} minutes ago</span>
            </span>
          </div>
        </div>
      </div>

      {/* Stats row */}
      <div className="w-full bg-white py-12 md:py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-2 gap-x-8 gap-y-6 md:grid-cols-4 md:gap-x-16 md:gap-y-0 lg:gap-x-24 xl:gap-x-32">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex items-stretch justify-center"
              >
                <div className="flex min-w-[140px] flex-col items-center justify-center gap-2 px-4 py-4 sm:min-w-[160px] sm:px-6 md:px-4 lg:px-8">
                  {stat.icon}
                  <span className="mt-1 text-[28px] font-bold leading-none text-[#B8860B] md:text-[30px]">
                    {stat.value}
                  </span>
                  <span className="mt-0.5 text-[13px] font-normal tracking-[0.02em] text-[#777777]">
                    {stat.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
