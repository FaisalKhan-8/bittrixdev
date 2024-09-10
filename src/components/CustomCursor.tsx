// components/CustomCursor.jsx
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;

    // Smoothly move the cursor
    const handleMouseMove = (event: any) => {
      gsap.to(cursor, {
        x: event.clientX,
        y: event.clientY,
        duration: 0.2,
        ease: "power3.out",
      });
    };

    // Handle hover effect
    const handleMouseOver = () => setIsHovered(true);
    const handleMouseOut = () => setIsHovered(false);

    // Add event listeners
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);

    return () => {
      // Clean up event listeners
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`fixed w-4 h-4 rounded-full border-2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-50 ${
        isHovered ? "bg-black ring-2 ring-white" : "bg-black"
      }`}
      style={{
        willChange: "transform",
        boxShadow: isHovered ? "0 0 0 4px rgba(255, 255, 255, 0.5)" : "none",
        transition: "background-color 0.2s ease, box-shadow 0.2s ease",
      }}
    />
  );
};

export default CustomCursor;
