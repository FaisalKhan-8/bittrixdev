// pages/index.jsx
"use client";

import { useState, Suspense, lazy } from "react";
import Footer from "@/section/Footer";
import Loader from "@/components/Loader";
import CustomCursor from "@/components/CustomCursor";

// Lazy loading sections
const Navbar = lazy(() => import("@/section/Navbar"));
const Hero = lazy(() => import("@/section/Hero"));
const Service = lazy(() => import("@/section/Service"));
const AboutUs = lazy(() => import("@/section/AboutUs"));
const SmartDev = lazy(() => import("@/section/SmartDev"));
const Portfolio = lazy(() => import("@/section/Portfolio"));
const LatestCase = lazy(() => import("@/section/LatestCase"));
const Testimonial = lazy(() => import("@/section/Testimonial"));

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoaderLoaded = () => {
    setIsLoading(false);
    setTimeout(() => setShowContent(true), 450);
  };

  return (
    <div className="overflow-hidden relative">
      {/* Custom cursor */}
      <CustomCursor />

      {/* Show content only when the loader is finished */}
      {showContent && (
        <>
          <Suspense
            fallback={
              <Loader isLoading={isLoading} onLoaded={handleLoaderLoaded} />
            }
          >
            <Navbar />
            <main>
              <Hero />
              <Service />
              <AboutUs />
              <SmartDev />
              <Portfolio />
              <LatestCase />
              <Testimonial />
            </main>
            <Footer />
          </Suspense>
        </>
      )}

      {/* Loader component, it will call onLoaded when done */}
      <Loader isLoading={isLoading} onLoaded={handleLoaderLoaded} />
    </div>
  );
}
