"use client";

import React, { useEffect, useRef } from "react";
import { Open_Sans } from "next/font/google";
import Carousel from "../components/carousel/index";

const open = Open_Sans({ subsets: ["latin"] });

export default function Certificates() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slidein");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id='certificates'
      className={`min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 ${open.className}`}
    >
      <div className='max-w-6xl mx-auto text-center space-y-12'>
        {/* Header */}
        <div
          className='space-y-8 opacity-0 animate-slidein'
          style={{ animationDelay: "300ms" }}
        >
          <div className='glass-effect rounded-2xl p-8 max-w-4xl mx-auto'>
            <h1 className='text-responsive-5xl font-bold text-white mb-6 leading-tight'>
              Give me six hours to chop down a tree and I will spend the first
              four sharpening the axe.
            </h1>
            <p className='text-2xl text-[#00B2EB] font-semibold'>
              ~ Abraham Lincoln
            </p>
          </div>
        </div>

        {/* Certificates Section */}
        <div
          className='space-y-8 opacity-0 animate-slidein'
          style={{ animationDelay: "500ms" }}
        >
          <h2 className='text-responsive-4xl font-bold text-white'>
            Certifications & <span className='gradient-text'>Achievements</span>
          </h2>
          <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
            Continuous learning and professional development are at the core of
            my approach. Here are some of the certifications that validate my
            expertise.
          </p>
        </div>

        {/* Carousel */}
        <div
          className='opacity-0 animate-slidein'
          style={{ animationDelay: "700ms" }}
        >
          <Carousel />
        </div>

        {/* Additional Info */}
        <div
          className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 opacity-0 animate-slidein'
          style={{ animationDelay: "900ms" }}
        >
          <div className='glass-effect rounded-xl p-6 text-left'>
            <div className='text-[#00B2EB] text-3xl mb-4'>🎯</div>
            <h3 className='text-xl font-bold text-white mb-3'>
              Continuous Learning
            </h3>
            <p className='text-gray-300'>
              I believe in staying current with the latest technologies and best
              practices through continuous education and certification programs.
            </p>
          </div>

          <div className='glass-effect rounded-xl p-6 text-left'>
            <div className='text-[#D05151] text-3xl mb-4'>🏆</div>
            <h3 className='text-xl font-bold text-white mb-3'>
              Professional Growth
            </h3>
            <p className='text-gray-300'>
              Each certification represents a milestone in my professional
              journey, demonstrating commitment to excellence and mastery of new
              skills.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div
          className='mt-12 opacity-0 animate-slidein'
          style={{ animationDelay: "1100ms" }}
        >
          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className='bg-gradient-to-r from-[#00B2EB] to-[#D05151] text-white px-8 py-4 rounded-full text-lg font-semibold hover-lift animate-glow'
          >
            Let&apos;s Work Together
          </button>
        </div>
      </div>
    </section>
  );
}
