"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface CarouselImage {
  src: string;
  alt: string;
  title?: string;
}

const images: CarouselImage[] = [
  { 
    src: "/certificates/1.png", 
    alt: "Certificate 1",
    title: "React Development Certification"
  },
  { 
    src: "/certificates/2.png", 
    alt: "Certificate 2",
    title: "Full-Stack Development"
  },
  { 
    src: "/certificates/3.png", 
    alt: "Certificate 3",
    title: "Software Engineering"
  },
];

interface SlideProps {
  image: CarouselImage;
  isActive: boolean;
  index: number;
  total: number;
}

const Slide: React.FC<SlideProps> = ({ image, isActive, index, total }) => (
  <div
    className={`absolute inset-0 transition-opacity duration-500 ${
      isActive ? 'opacity-100' : 'opacity-0'
    }`}
  >
    <div className="relative w-full h-full">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        className="object-contain rounded-xl"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1000px"
      />
      <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
        {index + 1} / {total}
      </div>
      {image.title && (
        <div className="absolute bottom-4 left-4 right-4 bg-black/50 text-white p-3 rounded-lg">
          <h3 className="font-semibold">{image.title}</h3>
        </div>
      )}
    </div>
  </div>
);

interface DotProps {
  index: number;
  isActive: boolean;
  onClick: () => void;
}

const Dot: React.FC<DotProps> = ({ index, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`w-3 h-3 rounded-full transition-all duration-300 ${
      isActive 
        ? 'bg-[#00B2EB] scale-125' 
        : 'bg-white/50 hover:bg-white/75'
    }`}
    aria-label={`Go to slide ${index + 1}`}
  />
);

const Carousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  }, []);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Carousel Container */}
      <div className="relative aspect-[16/10] bg-black/20 rounded-xl overflow-hidden glass-effect">
        {images.map((image, index) => (
          <Slide
            key={index}
            image={image}
            isActive={index === currentSlide}
            index={index}
            total={images.length}
          />
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/75 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/75 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
          aria-label="Next slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center space-x-2 mt-6">
        {images.map((_, index) => (
          <Dot
            key={index}
            index={index}
            isActive={index === currentSlide}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
