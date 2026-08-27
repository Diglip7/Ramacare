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

  useEffect(() => {
    setMounted(true);

    const setupPortal = () => {
      const faqElement = document.getElementById('faq') || document.getElementById('faqs');
      if (faqElement) {
        let current = faqElement;
        let sectionAncestor = null;
        while (current) {
          if (current.tagName === 'SECTION') {
            sectionAncestor = current;
            break;
          }
          if (
            current.tagName === 'MAIN' || 
            current.tagName === 'BODY' || 
            current.tagName === 'HTML'
          ) {
            break;
          }
          current = current.parentElement;
        }

        const insertTarget = sectionAncestor || faqElement;
        if (insertTarget && insertTarget.parentNode && insertTarget.parentNode.nodeType === 1) {
          let wrapper = document.getElementById('google-reviews-portal-wrapper');
          if (!wrapper) {
            wrapper = document.createElement('div');
            wrapper.id = 'google-reviews-portal-wrapper';
            wrapper.className = 'w-full';
            insertTarget.parentNode.insertBefore(wrapper, insertTarget);
          }
          setPortalTarget(wrapper);
        } else {
          setPortalTarget(null);
        }
      } else {
        setPortalTarget(null);
      }
    };

    setupPortal();
    const timer = setTimeout(setupPortal, 150);
    return () => clearTimeout(timer);
  }, [router.asPath]);

  const isServicesRoute = router.pathname.startsWith('/services');
  const excludedCategoryRoutes = new Set([
    '/services/ayurveda-dubai/',
    '/services/dental-dubai/',
    '/services/physiotherapy-dubai/',
    '/services/general-physician-dubai/',
    '/services/aesthetic-dermatology-dubai/',
    '/services/facial-dubai/',
  ]);
  const isSubcategoryRoute = isServicesRoute && !excludedCategoryRoutes.has(router.pathname);
  const isBlogRoute = router.pathname.startsWith('/blog/') && router.pathname !== '/blog';
  const fontStyle = { fontFamily: "'Nunito Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif" };
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>RamaCare Polyclinic Dubai | Trusted Polyclinic in Dubai</title>
        <meta name="description" content=" RamaCare Polyclinic Dubai provides multi-specialty medical care with experienced doctors, modern diagnostics, and patient-focused treatment in a DHA-licensed clinic."/>
        <link rel="canonical" href={`https://ramacarepolyclinic.ae${router.asPath === '/' ? '/' : (router.asPath.split('?')[0].replace(/\/$/, '') + '/')}`} key="canonical" />
        <link rel="icon" href="/images/Logo.png" />
      {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" /> */}
      </Head>
      <Header />
      {/* <PromoBanner /> */}
      <main className="flex-grow" style={isSubcategoryRoute ? fontStyle : undefined}>
        {children}
      </main>
      {mounted && portalTarget ? (
        createPortal(<GoogleReviews />, portalTarget)
      ) : (
        mounted && !router.pathname.includes('policy') && !router.pathname.includes('confirmed') && <GoogleReviews />
      )}
      <Footer />
    </div>
  );
};
export default Layout;
