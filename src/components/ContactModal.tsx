import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Define types for the component props
interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true); // Start the closing animation
    setTimeout(() => {
      onClose(); // Trigger close after animation
      setIsClosing(false); // Reset closing state
    }, 500); // Set to match exit animation duration
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page reload
    handleClose(); // Close modal after submission
  };

  // Prevent clicks inside the modal from triggering onClose
  const stopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  // Define modal animation variants
  const modalVariants = {
    hidden: { x: "100vw", opacity: 0 }, // Start outside the screen (right)
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    }, // Slide to the left and become fully visible
    exit: {
      x: "100vw",
      opacity: 0,
      transition: { duration: 0.5, ease: "easeIn" },
    }, // Slide out of the screen to the right
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 flex justify-end items-center bg-black bg-opacity-50 z-50"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={modalVariants}
          onClick={handleClose} // Close the modal when clicking outside
        >
          <motion.div
            className="bg-white text-black p-8 h-full w-[50vw] relative"
            onClick={stopPropagation} // Prevent closing when clicking inside modal
          >
            <button onClick={handleClose} className="absolute top-4 right-4">
              Close
            </button>
            <div>
              <h2 className="text-2xl mb-4">I&rsquo;m interested in...</h2>
              <form onSubmit={handleSubmit}>
                <div className="flex flex-wrap gap-2 mb-6">
                  <button type="button" className="border p-2">
                    UI/UX Design
                  </button>
                  <button type="button" className="border p-2">
                    Website
                  </button>
                  <button type="button" className="border p-2">
                    Branding
                  </button>
                  <button type="button" className="border p-2">
                    Design System
                  </button>
                  <button type="button" className="border p-2">
                    Other
                  </button>
                </div>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full mb-4 p-2 border-b"
                />
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full mb-4 p-2 border-b"
                />
                <textarea
                  placeholder="Tell us about your project"
                  className="w-full mb-4 p-2 border-b"
                ></textarea>
                <div className="flex items-center mb-4">
                  <span className="mr-2">📎</span>
                  <button type="button">Add attachment</button>
                </div>
                <button type="submit" className="bg-black text-white px-4 py-2">
                  Send Request
                </button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
