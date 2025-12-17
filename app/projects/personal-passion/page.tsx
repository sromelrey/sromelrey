"use client";

import React, { useEffect, useRef } from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import ProjectCard from "../../components/project-card";

const personalProjects = [
 {
  title: "Task Master",
  description:
    "A modern task management application with real-time updates, featuring drag-and-drop functionality, subtask tracking, and time-based task scheduling with overlap prevention.",
  image: "/images/personal-passion/task-master.gif",
  technologies: [
    "TypeScript",
    "Next.js",
    "React",
    "Tailwind CSS",
    "Redux Toolkit",
    "Lucide Icons",
    "Shadcn/ui",
  ],
  liveUrl: "https://task-master-two-delta.vercel.app/", // Update with your actual deployment URL
  githubUrl: "https://github.com/sromelrey/task-master", // Update with your actual repo
  featured: true,
},
  {
    title: "ChronoFlow - Pomodoro Timer",
    description:
      "A modern, feature-rich Pomodoro timer application with productivity tracking, task management, and customizable settings. Built with Next.js 15 and TypeScript.",
    image: "/images/personal-passion/chrono_flow.png",
    technologies: [
      "TypeScript",
      "Next.js",
      "React",
      "Tailwind CSS",
      "shadcn/ui",
      "Web Audio API",
      "next-themes",
    ],
    liveUrl: "https://chrono-flow-sigma.vercel.app/", // Replace with your deployed URL
    githubUrl: "https://github.com/sromelrey/chrono-flow", // Replace with your GitHub repository URL
  },
  {
    title: "Blockchain Explorer",
    description:
      "Real-time blockchain explorer with transaction tracking, wallet monitoring, and market data visualization.",
    image: "/blue_pill.png",
    technologies: ["React", "Web3.js", "Node.js", "MongoDB", "Socket.io"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Music Production App",
    description:
      "Web-based digital audio workstation with virtual instruments, effects processing, and MIDI support.",
    image: "/blue_pill.png",
    technologies: [
      "Web Audio API",
      "React",
      "TypeScript",
      "WebAssembly",
      "Canvas API",
    ],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Computer Vision Tool",
    description:
      "Real-time object detection and image processing application with custom neural network models.",
    image: "/blue_pill.png",
    technologies: ["Python", "OpenCV", "PyTorch", "Flask", "React"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Social Learning Platform",
    description:
      "Interactive learning platform with gamification, peer-to-peer tutoring, and progress tracking.",
    image: "/blue_pill.png",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "Redis", "WebRTC"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

export default function PersonalPassionPage() {
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
              Personal <span className='gradient-text'>Passion</span>
            </h1>
            <p className='text-xl text-gray-300 max-w-3xl'>
              Creative experiments, innovative ideas, and passion projects that
              showcase my creativity and drive for continuous learning. These
              projects represent my curiosity and willingness to explore
              cutting-edge technologies.
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div
          ref={sectionRef}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
        >
          {personalProjects.map((project, index) => (
            <div
              key={index}
              className='opacity-0 animate-slidein'
              style={{ animationDelay: `${(index + 1) * 200}ms` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>

        {/* Innovation Section */}
        <div
          className='mt-20 opacity-0 animate-slidein'
          style={{ animationDelay: "1000ms" }}
        >
          <div className='glass-effect rounded-2xl p-8'>
            <h2 className='text-3xl font-bold text-white mb-8 text-center'>
              Innovation & Learning
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              <div className='text-center'>
                <div className='text-[#00B2EB] text-4xl mb-4'>🚀</div>
                <h3 className='text-xl font-bold text-white mb-3'>
                  Cutting-Edge Tech
                </h3>
                <p className='text-gray-300'>
                  Exploring the latest technologies and frameworks to stay ahead
                  of industry trends.
                </p>
              </div>
              <div className='text-center'>
                <div className='text-[#D05151] text-4xl mb-4'>💡</div>
                <h3 className='text-xl font-bold text-white mb-3'>
                  Creative Solutions
                </h3>
                <p className='text-gray-300'>
                  Innovative approaches to complex problems with unique and
                  elegant solutions.
                </p>
              </div>
              <div className='text-center'>
                <div className='text-[#00B2EB] text-4xl mb-4'>🎯</div>
                <h3 className='text-xl font-bold text-white mb-3'>
                  Skill Development
                </h3>
                <p className='text-gray-300'>
                  Continuous learning through hands-on projects and
                  experimentation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}