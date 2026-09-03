import React from 'react';
import Script from "next/script";
import Head from 'next/head';
import Link from 'next/link';

export default function RequestConfirmed() {
  return (
    <>
      <Head>
        <title key="title">Request Confirmed | Best Fillers in Dubai - RamaCare Polyclinic</title>
        <meta name="description" content="Thank you for your interest in our dermal fillers treatment. Our team will contact you shortly." key="description" />
        <meta name="robots" content="noindex, nofollow" />

        <link rel="icon" type="image/png" href="/images/Logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>

      {/* Google Tag Manager */}
      <Script id="google-tag-manager" strategy="beforeInteractive">
        {`
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PM7WDXBW');
`}
      </Script>

      <div className="font-sans min-h-screen bg-gradient-to-br from-[#fff8f0] via-[#fce8e8] to-[#fff0f0] flex items-center justify-center px-6 py-12">

        {/* GTM Noscript */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PM7WDXBW"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />

        <div className="max-w-lg w-full text-center">
          {/* Success Icon with Animation */}
          <div className="mx-auto mb-8 animate-bounce">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#B8860B]/10 shadow-lg">
              <svg
                className="h-14 w-14 text-[#B8860B]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
          </div>

          {/* Heading */}
          <h1
            className="mb-4 font-bold text-[#0d0d0d] leading-tight tracking-tight"
            style={{
              fontSize: 'clamp(28px, 5vw, 42px)',
              fontFamily: "'Inter', sans-serif"
            }}
          >
            Request Confirmed
          </h1>

          {/* Subheading */}
          <p
            className="mb-8 text-[#555555] leading-relaxed"
            style={{
              fontSize: 'clamp(16px, 3vw, 18px)',
              fontFamily: "'Inter', sans-serif"
            }}
          >
            Thank you for reaching out. Our team will contact you shortly to discuss the next steps.
          </p>

          {/* Trust Indicators */}
          <div className="mb-10 flex flex-wrap justify-center gap-4">
            {[
              { icon: '✓', text: 'DHA Licensed Clinic' },
              { icon: '✓', text: 'Expert Dermatologists' },
              { icon: '✓', text: 'FDA-Approved Fillers' }
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 rounded-lg bg-white/80 px-4 py-2 shadow-sm"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#B8860B] text-[12px] text-white">
                  {item.icon}
                </span>
                <span className="text-[13px] font-medium text-[#444444]">{item.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Button - Return to Landing Page */}
          <Link
            href="/best-fillers-in-dubai"
            className="group inline-flex h-14 items-center justify-center rounded-[8px] bg-[#B8860B] px-8 text-[16px] font-semibold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#a0740b] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#B8860B] focus:ring-offset-2"
          >
            Return to Website
            <svg
              className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>

          {/* Additional Info */}
          <p
            className="mt-8 text-[13px] text-[#888888]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Need immediate assistance?{' '}
            <a
              href="tel:+971542669345"
              className="font-semibold text-[#B8860B] hover:underline"
            >
              Call us at +971 54 266 9345
            </a>
          </p>
        </div>
      </div>

      <style jsx global>{`
        .font-sans {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
        }
      `}</style>
    </>
  );
}
