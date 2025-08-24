"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-effect shadow-lg" : "bg-transparent"
      }`}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo */}
          <div className='flex-shrink-0'>
            <Link
              href='https://github.com/sromelrey'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center space-x-2 text-white hover:text-[#00B2EB] transition-colors duration-300'
            >
              <span className='text-xl font-bold'>sromelrey</span>
              <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
                <path
                  fillRule='evenodd'
                  d='M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z'
                  clipRule='evenodd'
                />
              </svg>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-8'>
            <button
              onClick={() => scrollToSection("about")}
              className='text-white hover:text-[#00B2EB] transition-colors duration-300 font-medium text-lg relative group'
            >
              About
              <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00B2EB] transition-all duration-300 group-hover:w-full'></span>
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className='text-white hover:text-[#00B2EB] transition-colors duration-300 font-medium text-lg relative group'
            >
              Projects
              <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00B2EB] transition-all duration-300 group-hover:w-full'></span>
            </button>
            <button
              onClick={() => scrollToSection("certificates")}
              className='text-white hover:text-[#00B2EB] transition-colors duration-300 font-medium text-lg relative group'
            >
              Certificates
              <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00B2EB] transition-all duration-300 group-hover:w-full'></span>
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className='text-white hover:text-[#00B2EB] transition-colors duration-300 font-medium text-lg relative group'
            >
              Let&apos;s Talk
              <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00B2EB] transition-all duration-300 group-hover:w-full'></span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className='md:hidden'>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className='text-white hover:text-[#00B2EB] transition-colors duration-300'
            >
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M6 18L18 6M6 6l12 12'
                  />
                ) : (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className='md:hidden glass-effect rounded-lg mt-2 mb-4 animate-fadein'>
            <div className='px-2 pt-2 pb-3 space-y-1'>
              <button
                onClick={() => scrollToSection("about")}
                className='block w-full text-left px-3 py-2 text-white hover:text-[#00B2EB] hover:bg-white/10 rounded-md transition-colors duration-300'
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className='block w-full text-left px-3 py-2 text-white hover:text-[#00B2EB] hover:bg-white/10 rounded-md transition-colors duration-300'
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("certificates")}
                className='block w-full text-left px-3 py-2 text-white hover:text-[#00B2EB] hover:bg-white/10 rounded-md transition-colors duration-300'
              >
                Certificates
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className='block w-full text-left px-3 py-2 text-white hover:text-[#00B2EB] hover:bg-white/10 rounded-md transition-colors duration-300'
              >
                Let&apos;s Talk
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
