"use client";

import React, { useEffect, useRef } from "react";
import { Open_Sans } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const open = Open_Sans({ subsets: ["latin"] });

export default function Projects() {
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
      id='projects'
      className={`min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 ${open.className}`}
    >
      <div className='max-w-6xl mx-auto text-center space-y-12'>
        {/* Header */}
        <div
          className='space-y-6 opacity-0 animate-slidein'
          style={{ animationDelay: "300ms" }}
        >
          <h1 className='text-responsive-5xl font-bold text-white leading-tight'>
            My Projects
          </h1>
          <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
            The projects are divided into two sections:{" "}
            <span className='text-[#D05151] font-semibold'>
              professional work
            </span>{" "}
            and{" "}
            <span className='text-[#00B2EB] font-semibold'>
              personal passion
            </span>
            , each showcasing distinct facets of my skills and interests.
          </p>
        </div>

        {/* Matrix Quote */}
        <div
          className='space-y-4 opacity-0 animate-slidein'
          style={{ animationDelay: "500ms" }}
        >
          <h2 className='text-responsive-4xl font-bold text-white'>
            <span className='text-[#D05151]'>Choose</span> your{" "}
            <span className='text-[#00B2EB]'>pill</span>
          </h2>
        </div>

        {/* Project Cards */}
        <div
          className='grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12 opacity-0 animate-slidein'
          style={{ animationDelay: "700ms" }}
        >
          {/* Professional Work */}
          <Link href='/projects/professional-work' className='group'>
            <div className='glass-effect rounded-2xl p-8 hover-lift cursor-pointer relative overflow-hidden'>
              <div className='absolute inset-0 bg-gradient-to-br from-[#D05151]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>

              <div className='relative z-10'>
                <div className='mb-6 flex justify-center'>
                  <div className='relative group-hover:scale-110 transition-transform duration-300'>
                    <Image
                      src='/red_pill.png'
                      width={200}
                      height={180}
                      alt='Professional Work Projects'
                      className='animate-float'
                    />
                    <div className='absolute inset-0 bg-[#D05151]/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300'></div>
                  </div>
                </div>

                <h3 className='text-3xl font-bold text-[#D05151] mb-4 group-hover:text-white transition-colors duration-300'>
                  Professional Work
                </h3>

                <p className='text-gray-300 text-lg leading-relaxed'>
                  Enterprise applications, client projects, and production-ready
                  solutions that demonstrate my professional expertise and
                  business acumen.
                </p>

                <div className='mt-6 flex items-center justify-center text-[#D05151] group-hover:text-white transition-colors duration-300'>
                  <span className='mr-2'>Explore Projects</span>
                  <svg
                    className='w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M17 8l4 4m0 0l-4 4m4-4H3'
                    />
                  </svg>
                </div>
              </div>
            </div>
          </Link>

          {/* Personal Passion */}
          <Link href='/projects/personal-passion' className='group'>
            <div className='glass-effect rounded-2xl p-8 hover-lift cursor-pointer relative overflow-hidden'>
              <div className='absolute inset-0 bg-gradient-to-br from-[#00B2EB]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>

              <div className='relative z-10'>
                <div className='mb-6 flex justify-center'>
                  <div className='relative group-hover:scale-110 transition-transform duration-300'>
                    <Image
                      src='/blue_pill.png'
                      width={200}
                      height={180}
                      alt='Personal Passion Projects'
                      className='animate-float'
                    />
                    <div className='absolute inset-0 bg-[#00B2EB]/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300'></div>
                  </div>
                </div>

                <h3 className='text-3xl font-bold text-[#00B2EB] mb-4 group-hover:text-white transition-colors duration-300'>
                  Personal Passion
                </h3>

                <p className='text-gray-300 text-lg leading-relaxed'>
                  Creative experiments, innovative ideas, and passion projects
                  that showcase my creativity and drive for continuous learning.
                </p>

                <div className='mt-6 flex items-center justify-center text-[#00B2EB] group-hover:text-white transition-colors duration-300'>
                  <span className='mr-2'>Explore Projects</span>
                  <svg
                    className='w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M17 8l4 4m0 0l-4 4m4-4H3'
                    />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Stats */}
        <div
          className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 opacity-0 animate-slidein'
          style={{ animationDelay: "900ms" }}
        >
          <div className='glass-effect rounded-xl p-6 text-center'>
            <div className='text-4xl font-bold text-[#00B2EB] mb-2'>5+</div>
            <div className='text-gray-300'>Years Experience</div>
          </div>
          <div className='glass-effect rounded-xl p-6 text-center'>
            <div className='text-4xl font-bold text-[#D05151] mb-2'>50+</div>
            <div className='text-gray-300'>Projects Completed</div>
          </div>
          <div className='glass-effect rounded-xl p-6 text-center'>
            <div className='text-4xl font-bold text-[#00B2EB] mb-2'>100%</div>
            <div className='text-gray-300'>Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
}
