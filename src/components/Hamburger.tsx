"use client";

import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const HamburgerMenu = () => {
  const [toggle, setToggle] = useState(false);
  const menuRef = useRef(null);
  const navLinksRef = useRef([]);
  const navLinks = [
    { name: "Home", link: "/" },
    { name: "Our Services", link: "/#services" },
    { name: "About Us", link: "/#about" },
    { name: "Portfolio", link: "/#portfolio" },
    { name: "Reviews", link: "/#testimonial" },
    { name: "Contact Us", link: "/#contact" },
  ]; // Your menu links

  const handleClick = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    if (toggle) {
      // Open menu with sliding down effect
      gsap.fromTo(
        menuRef.current,
        { height: 0, opacity: 0 },
        {
          height: "100%",
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
          onStart: () => {
            menuRef.current.style.display = "block"; // Make sure the menu is visible
          },
        }
      );

      // Sequentially reveal each nav link from left to right
      gsap.fromTo(
        navLinksRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
        }
      );
    } else {
      // Close menu with sliding up effect
      gsap.to(menuRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.6,
        ease: "power3.in",
        onComplete: () => {
          menuRef.current.style.display = "none"; // Ensure the menu is not clickable
        },
      });
    }
  }, [toggle]);

  // Springy hover effect
  useEffect(() => {
    const navItems = document.querySelectorAll(".nav-item");

    navItems.forEach((item) => {
      item.addEventListener("mouseenter", () => {
        gsap.to(item, {
          scale: 1.1,
          duration: 0.3,
          ease: "elastic.out(1, 0.5)",
        });
      });

      item.addEventListener("mouseleave", () => {
        gsap.to(item, {
          scale: 1,
          duration: 0.3,
          ease: "elastic.out(1, 0.5)",
        });
      });
    });
  }, [toggle]);

  return (
    <div>
      {/* Hamburger button */}
      <div
        className={`bg-black w-[40px] h-[40px] rounded-full flex flex-col items-center justify-center transition duration-300 ease-in-out cursor-pointer ${
          toggle ? "gap-0 rotate-45" : "gap-2"
        }`}
        onClick={handleClick}
      >
        <div
          className={`bg-white h-[1px] ${
            toggle ? "rotate-90 w-[20px]" : "w-[10px] rotate-0"
          } transition duration-300 ease-in-out`}
        ></div>
        <div className="bg-white h-[1px] w-[20px]"></div>
        <div
          className={`bg-white h-[1px] ${
            toggle ? "rotate-90 w-[20px]" : "w-[10px] rotate-0"
          } transition duration-300 ease-in-out`}
        ></div>
      </div>

      {/* Full-screen menu */}
      <div
        ref={menuRef}
        className="fixed top-0 left-0 w-full h-full bg-black z-50 opacity-0 overflow-auto"
        style={{ pointerEvents: toggle ? "auto" : "none" }}
      >
        <div className="flex justify-between items-center p-4 md:p-6 lg:p-8">
          <div className="text-white text-lg md:text-xl lg:text-2xl font-bold">
            BitTrixDev
          </div>
          <div
            className="text-white cursor-pointer text-lg md:text-xl lg:text-2xl"
            onClick={handleClick}
          >
            CLOSE
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col items-center justify-center h-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6 md:gap-x-8 md:gap-y-7 p-4 md:p-6 lg:p-8">
            {navLinks.map((link, index) => (
              <div key={index} className="relative group">
                <a
                  href={link.link}
                  className="nav-item text-white text-5xl md:text-5xl lg:text-8xl font-bold overflow-hidden transition-all duration-300 ease-in-out hover:text-gray-200"
                  onClick={handleClick}
                  ref={(el) => (navLinksRef.current[index] = el)} // Collect refs
                >
                  {link.name}
                  {/* Underline effect */}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-500 ease-in-out group-hover:w-full"></span>
                </a>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className="absolute right-4 bottom-4 md:right-6 md:bottom-6 lg:right-8 lg:bottom-8 flex space-x-3 md:space-x-5 lg:space-x-5">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-xl md:text-2xl lg:text-3xl hover:text-gray-800 transition-all duration-300 ease-in-out"
            >
              <FaInstagram />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-xl md:text-2xl lg:text-3xl hover:text-gray-800 transition-all duration-300 ease-in-out"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-xl md:text-2xl lg:text-3xl hover:text-gray-800 transition-all duration-300 ease-in-out"
            >
              <FaTwitter />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-xl md:text-2xl lg:text-3xl hover:text-gray-800 transition-all duration-300 ease-in-out"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
