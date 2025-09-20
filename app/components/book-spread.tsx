"use client";

import React from "react";
import { motion } from "framer-motion";

interface BookSpreadProps {
  leftPage: React.ReactNode;
  rightPage: React.ReactNode;
  spreadNumber: number;
  isActive: boolean;
  isNext: boolean;
  isPrevious: boolean;
  onPageChange: (direction: "next" | "prev") => void;
}

export default function BookSpread({
  leftPage,
  rightPage,
  spreadNumber,
  isActive,
  isNext,
  isPrevious,
  onPageChange,
}: BookSpreadProps) {
  return (
    <motion.div
      className={`book-spread ${isActive ? "active" : ""} ${
        isNext ? "next" : ""
      } ${isPrevious ? "previous" : ""}`}
      initial={false}
      animate={{
        rotateY: isActive ? 0 : isNext ? 15 : isPrevious ? -15 : 0,
        x: isActive ? 0 : isNext ? 100 : isPrevious ? -100 : 0,
        z: isActive ? 0 : isNext ? -200 : isPrevious ? -200 : 0,
        opacity: isActive ? 1 : isNext ? 0.3 : isPrevious ? 0.3 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
        duration: 0.8,
      }}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
    >
      {/* Left Page */}
      <div className='book-page left-page'>
        <div className='page-content'>
          <div className='page-number left'>{spreadNumber * 2 - 1}</div>
          {leftPage}
        </div>
        <div className='page-shadow left-shadow' />
      </div>

      {/* Book Spine/Binding */}
      <div className='book-binding'>
        <div className='binding-shadow' />
        <div className='binding-holes'>
          {[...Array(6)].map((_, i) => (
            <div key={i} className='binding-hole' />
          ))}
        </div>
      </div>

      {/* Right Page */}
      <div className='book-page right-page'>
        <div className='page-content'>
          <div className='page-number right'>{spreadNumber * 2}</div>
          {rightPage}
        </div>
        <div className='page-shadow right-shadow' />
      </div>

      {/* Page Turn Buttons */}
      {isActive && (
        <>
          <motion.button
            className='page-turn-btn prev-btn'
            onClick={() => onPageChange("prev")}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
              <path
                d='M15 18L9 12L15 6'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </motion.button>

          <motion.button
            className='page-turn-btn next-btn'
            onClick={() => onPageChange("next")}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
              <path
                d='M9 18L15 12L9 6'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </motion.button>
        </>
      )}
    </motion.div>
  );
}
