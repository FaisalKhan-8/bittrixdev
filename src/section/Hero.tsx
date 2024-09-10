import React, { Suspense, lazy } from "react";

// Lazy load Spline, SideNav, and Marquee components
const Spline = lazy(() => import("@splinetool/react-spline"));
const SideNav = lazy(() => import("@/components/SideNav"));
const Marquee = lazy(() => import("react-fast-marquee"));

// Circle loading spinner component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center h-full w-full bg-black">
    <div className="w-16 h-16 border-8 border-t-8 border-white border-solid rounded-full border-t-transparent animate-spin"></div>
  </div>
);

const Hero = () => {
  return (
    <>
      <div className="h-screen flex items-center justify-center relative">
        <div className="w-full h-full flex items-center justify-center overflow-hidden absolute top-0">
          {/* Add Suspense for Spline to handle loading state with circle spinner */}
          <Suspense fallback={<LoadingSpinner />}>
            <Spline scene="https://prod.spline.design/bUqW5bou1J2TlDJv/scene.splinecode" />
          </Suspense>

          <div className="md:block absolute right-5 top-[30%] hidden">
            {/* Add Suspense for SideNav with circle spinner */}
            <Suspense fallback={<LoadingSpinner />}>
              <SideNav />
            </Suspense>
          </div>
        </div>
      </div>

      {/* Add Suspense for Marquee with circle spinner */}
      <Suspense fallback={<LoadingSpinner />}>
        <Marquee className="mt-5">
          <h1 className="md:text-[10rem] text-[5rem] font-semibold uppercase text-primary-bg-color">
            I can be a React component, multiple React components, or just some
            text.
          </h1>
        </Marquee>
      </Suspense>
    </>
  );
};

export default Hero;
