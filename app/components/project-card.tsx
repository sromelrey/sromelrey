"use client";

import React from "react";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export default function ProjectCard({
  title,
  description,
  image,
  technologies,
  liveUrl,
  githubUrl,
  featured = false,
}: ProjectCardProps) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl glass-effect hover-lift ${
        featured ? "ring-2 ring-[#00B2EB]" : ""
      }`}
    >
      {/* Project Image */}
      <div className='relative h-48 overflow-hidden'>
        <Image
          src={image}
          alt={title}
          fill
          className='object-cover transition-transform duration-500 group-hover:scale-110'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

        {/* Featured Badge */}
        {featured && (
          <div className='absolute top-4 left-4 bg-[#00B2EB] text-white px-3 py-1 rounded-full text-sm font-semibold'>
            Featured
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className='p-6'>
        <h3 className='text-xl font-bold text-white mb-3 group-hover:text-[#00B2EB] transition-colors duration-300'>
          {title}
        </h3>

        <p className='text-gray-300 mb-4 leading-relaxed'>{description}</p>

        {/* Technologies */}
        <div className='flex flex-wrap gap-2 mb-6'>
          {technologies.map((tech, index) => (
            <span
              key={index}
              className='px-3 py-1 bg-white/10 text-white text-sm rounded-full border border-white/20'
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className='flex gap-3'>
          {liveUrl && (
            <a
              href={liveUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-2 px-4 py-2 bg-[#00B2EB] text-white rounded-lg hover:bg-[#00B2EB]/80 transition-colors duration-300'
            >
              <ExternalLink className='w-4 h-4' />
              Live Demo
            </a>
          )}

          {githubUrl && (
            <a
              href={githubUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-2 px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors duration-300 border border-white/20'
            >
              <Github className='w-4 h-4' />
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
