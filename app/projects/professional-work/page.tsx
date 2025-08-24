"use client";

import React, { useEffect, useRef } from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import ProjectCard from "../../components/project-card";

const professionalProjects = [
  {
    title: "Enterprise Dashboard",
    description:
      "A comprehensive analytics dashboard for enterprise clients, featuring real-time data visualization, user management, and advanced reporting capabilities.",
    image: "/red_pill.png",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "D3.js"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "E-commerce Platform",
    description:
      "Full-stack e-commerce solution with payment processing, inventory management, and customer analytics.",
    image: "/red_pill.png",
    technologies: ["Next.js", "Stripe", "MongoDB", "Redis", "AWS"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "CRM System",
    description:
      "Customer relationship management system with lead tracking, sales pipeline, and automated workflows.",
    image: "/red_pill.png",
    technologies: ["React", "Express", "MySQL", "Socket.io", "JWT"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Financial Analytics Tool",
    description:
      "Advanced financial analytics platform with portfolio management, risk assessment, and market data integration.",
    image: "/red_pill.png",
    technologies: ["React", "Python", "Pandas", "Chart.js", "Docker"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

export default function ProfessionalWorkPage() {
  const sectionRef = useRef<HTMLDivElement>(null);

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
    <div className='min-h-screen bg-gradient-to-br from-[#081C29] to-[#0C2332] pt-20'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        {/* Header */}
        <div className='mb-12'>
          <Link
            href='/'
            className='inline-flex items-center gap-2 text-[#00B2EB] hover:text-white transition-colors duration-300 mb-8'
          >
            <ArrowLeft className='w-5 h-5' />
            Back to Portfolio
          </Link>

          <div
            className='opacity-0 animate-slidein'
            style={{ animationDelay: "300ms" }}
          >
            <h1 className='text-5xl md:text-6xl font-bold text-white mb-6'>
              Professional <span className='gradient-text'>Work</span>
            </h1>
            <p className='text-xl text-gray-300 max-w-3xl'>
              Enterprise applications, client projects, and production-ready
              solutions that demonstrate my professional expertise and business
              acumen. Each project showcases different aspects of full-stack
              development and problem-solving skills.
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div
          ref={sectionRef as React.RefObject<HTMLDivElement>}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
        >
          {professionalProjects.map((project, index) => (
            <div
              key={index}
              className='opacity-0 animate-slidein'
              style={{ animationDelay: `${(index + 1) * 200}ms` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div
          className='mt-20 opacity-0 animate-slidein'
          style={{ animationDelay: "1000ms" }}
        >
          <div className='glass-effect rounded-2xl p-8'>
            <h2 className='text-3xl font-bold text-white mb-8 text-center'>
              Professional Impact
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
              <div className='text-center'>
                <div className='text-4xl font-bold text-[#00B2EB] mb-2'>
                  25+
                </div>
                <div className='text-gray-300'>Enterprise Clients</div>
              </div>
              <div className='text-center'>
                <div className='text-4xl font-bold text-[#D05151] mb-2'>
                  $2M+
                </div>
                <div className='text-gray-300'>Revenue Generated</div>
              </div>
              <div className='text-center'>
                <div className='text-4xl font-bold text-[#00B2EB] mb-2'>
                  99.9%
                </div>
                <div className='text-gray-300'>Uptime</div>
              </div>
              <div className='text-center'>
                <div className='text-4xl font-bold text-[#D05151] mb-2'>
                  50K+
                </div>
                <div className='text-gray-300'>Active Users</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
