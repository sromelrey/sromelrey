"use client";

import React, { useEffect, useRef } from "react";
import { Open_Sans } from "next/font/google";

const open = Open_Sans({ subsets: ["latin"] });

export default function About() {
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
      id='about'
      className={`min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 ${open.className}`}
    >
      <div className='max-w-6xl mx-auto text-center space-y-8'>
        {/* Greeting */}
        <div
          className='space-y-4 opacity-0 animate-slidein'
          style={{ animationDelay: "300ms" }}
        >
          <h1 className='text-responsive-6xl font-bold text-white leading-tight'>
            Hi, I&apos;m <span className='gradient-text'>Romel Rey Silva</span>
          </h1>
        </div>

        {/* Title */}
        <div
          className='space-y-4 opacity-0 animate-slidein'
          style={{ animationDelay: "500ms" }}
        >
          <h2 className='text-responsive-5xl font-bold text-[#00B2EB] leading-tight'>
            Frontend Developer
          </h2>
        </div>

        {/* Description */}
        <div
          className='space-y-6 opacity-0 animate-slidein'
          style={{ animationDelay: "700ms" }}
        >
          <p className='text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto'>
            Proficient in{" "}
            <span className='text-[#00B2EB] font-semibold'>ReactJS</span> for
            more than{" "}
            <span className='text-[#D05151] font-semibold'>5 years</span>,
            refining abilities across Front-End, Full-Stack, and Software
            Engineering domains. Embracing adaptability as an ongoing journey.
          </p>
        </div>

        {/* Skills Grid */}
        <div
          className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 opacity-0 animate-slidein'
          style={{ animationDelay: "900ms" }}
        >
          <div className='glass-effect rounded-xl p-6 hover-lift'>
            <div className='text-[#00B2EB] text-4xl mb-4'>⚛️</div>
            <h3 className='text-xl font-bold text-white mb-2'>Frontend</h3>
            <p className='text-gray-300'>
              React, Next.js, TypeScript, Tailwind CSS
            </p>
          </div>

          <div className='glass-effect rounded-xl p-6 hover-lift cursor-context-menu'>
            <div className='text-[#D05151] text-4xl mb-4'>🚀</div>
            <h3 className='text-xl font-bold text-white mb-2'>Full-Stack</h3>
            <p className='text-gray-300'>
              Node.js, Express, MongoDB, PostgreSQL
            </p>
          </div>

          <div className='glass-effect rounded-xl p-6 hover-lift'>
            <div className='text-[#00B2EB] text-4xl mb-4'>🛠️</div>
            <h3 className='text-xl font-bold text-white mb-2'>Engineering</h3>
            <p className='text-gray-300'>System Design, Architecture, DevOps</p>
          </div>
        </div>

        {/* CTA Button */}
        <div
          className='mt-12 opacity-0 animate-slidein'
          style={{ animationDelay: "1100ms" }}
        >
          <button
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className='bg-gradient-to-r from-[#00B2EB] to-[#D05151] text-white px-8 py-4 rounded-full text-lg font-semibold hover-lift animate-glow'
          >
            View My Work
          </button>
        </div>
      </div>
    </section>
  );
}
