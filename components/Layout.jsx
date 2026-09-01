import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { createPortal } from 'react-dom';
import Header from './Header';
// import PromoBanner from './PromoBanner';
import GoogleReviews from './GoogleReviews';
import Footer from './Footer';

const Layout = ({ children }) => {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [portalTarget, setPortalTarget] = useState(null);

  const isServicesRoute = router.pathname.startsWith('/services');
  const cleanPath = router.pathname.replace(/\/$/, '') || '/';
  const isBlogRoute = router.pathname.startsWith('/blog/') && router.pathname !== '/blog';
  const fontStyle = { fontFamily: "'Nunito Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif" };

  useEffect(() => {
    setMounted(true);

    const setupPortal = () => {
      const faqElement = document.getElementById('faq') || document.getElementById('faqs');
      if (faqElement && faqElement.parentNode) {
        let wrapper = document.getElementById('google-reviews-portal-wrapper');
        if (!wrapper) {
          wrapper = document.createElement('div');
          wrapper.id = 'google-reviews-portal-wrapper';
          wrapper.className = 'w-full';
        }
        if (wrapper.nextSibling !== faqElement) {
          faqElement.parentNode.insertBefore(wrapper, faqElement);
        }
        setPortalTarget(wrapper);
      } else {
        const existingWrapper = document.getElementById('google-reviews-portal-wrapper');
        if (existingWrapper) {
          existingWrapper.remove();
        }
        setPortalTarget(null);
      }
    };

    setupPortal();
    const timer1 = setTimeout(setupPortal, 100);
    const timer2 = setTimeout(setupPortal, 300);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [router.asPath]);

  const isExcludedPage = router.pathname.includes('policy') || router.pathname.includes('confirmed');

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>RamaCare Polyclinic Dubai | Trusted Polyclinic in Dubai</title>
        <meta name="description" content=" RamaCare Polyclinic Dubai provides multi-specialty medical care with experienced doctors, modern diagnostics, and patient-focused treatment in a DHA-licensed clinic." />
        <link rel="canonical" href={`https://ramacarepolyclinic.ae${router.asPath === '/' ? '/' : (router.asPath.split('?')[0].replace(/\/$/, '') + '/')}`} key="canonical" />
        <link rel="icon" href="/images/Logo.png" />
      </Head>
      <Header />
      <main className="flex-grow" style={isServicesRoute ? fontStyle : undefined}>
        {children}
      </main>
      {mounted && portalTarget ? (
        createPortal(<GoogleReviews />, portalTarget)
      ) : (
        mounted && !isExcludedPage && !portalTarget && <GoogleReviews />
      )}
      <Footer />
    </div>
  );
};
export default Layout;
