import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

function Loader({
  isLoading,
  onLoaded,
}: {
  isLoading: boolean;
  onLoaded: () => void;
}) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      onLoaded(); // Call the onLoaded callback when loading is complete
    }, 2900); // Simulate loading delay
    return () => clearTimeout(timeout); // Cleanup timeout when component unmounts
  }, [onLoaded]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="loader"
          exit={{ scale: 0 }}
          key="motiondivleave"
          transition={{
            duration: 0.45,
            ease: "easeInOut",
          }}
        >
          <motion.svg
            id="logo"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
          >
            <title>Logo</title>
            <g>
              <g id="B" transform="translate(35.000000, 35.000000)">
                <motion.path
                  initial={{ opacity: 0, rotate: 0 }}
                  animate={{ opacity: 1, rotate: 360 }}
                  transition={{
                    duration: 1.5,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                  exit={{ scale: 2 }}
                  fill="url(#grad1)" // Gradient fill
                  d="M10 4h8c2.5 0 4.5 1 6 2.5C26.5 8.5 27 10 27 12c0 2-0.5 3.5-1.5 4.5-1 1-2.5 1.5-4 2 2 0.5 3.5 1.5 4.5 3 1 1.5 1.5 3 1.5 5 0 2-0.5 4-2 5.5-1.5 1.5-3.5 2.5-6 2.5h-8V4zm4 3v7h4c1.5 0 2.5-0.5 3-1.5 0.5-1 0.5-1.5 0-2.5-0.5-1-1.5-1.5-3-1.5h-4zm0 10v8h4c1.5 0 2.5-0.5 3-1.5 0.5-1 0.5-2 0-3-0.5-1-1.5-1.5-3-1.5h-4z"
                />
              </g>
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 1.5,
                  ease: "easeInOut",
                }}
                exit={{ scale: 2 }}
                stroke="url(#grad2)" // Gradient stroke
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M 50, 5
              L 11, 27
              L 11, 72
              L 50, 95
              L 89, 73
              L 89, 28 z"
              />
            </g>
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop
                  offset="0%"
                  style={{ stopColor: "#000", stopOpacity: 1 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#fe5930", stopOpacity: 1 }}
                />
              </linearGradient>
              <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop
                  offset="0%"
                  style={{ stopColor: "#000", stopOpacity: 1 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#fe5930", stopOpacity: 1 }}
                />
              </linearGradient>
            </defs>
          </motion.svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Loader;
