"use client";

import React, { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className='fixed bottom-8 right-8 z-50 w-12 h-12 bg-gradient-to-r from-[#00B2EB] to-[#D05151] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-glow'
          aria-label='Scroll to top'
        >
          <ChevronUp className='w-6 h-6 mx-auto' />
        </button>
      )}
    </>
  );
}
