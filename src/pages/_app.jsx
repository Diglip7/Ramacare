import "../styles/globals.css";
import Head from "next/head";
import Script from "next/script";
import { useRouter } from "next/router";
import { ModalProvider } from "../../components/ModalContext";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const gaId = process.env.NEXT_PUBLIC_GA_ID || "G-VRn7pg1rAC";
  const isServicesRoute = router.pathname.startsWith("/services");
  const isLandingPageRoute = router.pathname === "/best-fillers-in-dubai";
  
  const excludedCategoryRoutes = new Set([
    "/services/ayurveda-dubai/",
    "/services/dental-dubai/",
    "/services/physiotherapy-dubai/",
    "/services/general-physician-dubai/",
    "/services/aesthetic-dermatology-dubai/",
    "/services/facial-dubai/",
  ]);
  
  const isSubcategoryRoute = isServicesRoute && !excludedCategoryRoutes.has(router.pathname);
  
  return (
    <ModalProvider>
      <Head>
        {isLandingPageRoute && (
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        )}
        {isSubcategoryRoute && (
          <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700;800;900&display=swap" rel="stylesheet" />
        )}
      </Head>

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
