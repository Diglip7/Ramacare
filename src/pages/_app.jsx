import { useEffect } from "react";
import "../styles/globals.css";
import Script from "next/script";
import { ModalProvider } from "../../components/ModalContext";

export default function App({ Component, pageProps }) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID || "G-VRn7pg1rAC";
  
  useEffect(() => {
    // 1. Delegated click listener for any WhatsApp link or button
    const handleGlobalClick = (event) => {
      try {
        const target = event.target;
        const link = target?.closest ? target.closest('a, button') : null;
        const href = link?.getAttribute('href') || link?.dataset?.href || '';
        
        if (typeof href === 'string' && (href.includes('wa.me') || href.includes('whatsapp.com') || href.startsWith('whatsapp:'))) {
          if (typeof window.gtag === 'function') {
            window.gtag('event', 'whatsapp_click', {
              event_category: 'engagement',
              event_label: href,
              page_location: window.location.href,
            });
          }
          if (window.dataLayer && Array.isArray(window.dataLayer)) {
            window.dataLayer.push({
              event: 'whatsapp_click',
              link_url: href,
              page_location: window.location.href,
            });
          }
        }
      } catch (err) {
        // silent fallback
      }
    };

    // 2. Intercept programmatic window.open calls for WhatsApp links
    if (typeof window !== 'undefined') {
      const originalOpen = window.open;
      if (originalOpen && !window._waOpenTracked) {
        window._waOpenTracked = true;
        window.open = function(url, target, features) {
          if (typeof url === 'string' && (url.includes('wa.me') || url.includes('whatsapp.com') || url.startsWith('whatsapp:'))) {
            if (typeof window.gtag === 'function') {
              window.gtag('event', 'whatsapp_click', {
                event_category: 'engagement',
                event_label: url,
                page_location: window.location.href,
              });
            }
            if (window.dataLayer && Array.isArray(window.dataLayer)) {
              window.dataLayer.push({
                event: 'whatsapp_click',
                link_url: url,
                page_location: window.location.href,
              });
            }
          }
          return originalOpen.apply(this, arguments);
        };
      }
    }

    document.addEventListener('click', handleGlobalClick, { capture: true });
    return () => {
      document.removeEventListener('click', handleGlobalClick, { capture: true });
    };
  }, []);

  return (
    <ModalProvider>

      {/* Google Tag Manager */}
      <Script
        id="google-tag-manager"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
                __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-PM7WDXBW');`,
        }}
      />

      {/* Global GA4 & dataLayer Initialization */}
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            window.gtag = window.gtag || gtag;
            gtag('js', new Date());
            gtag('config', '${gaId}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />
      
      <Component {...pageProps} />
    </ModalProvider>
  );
}
