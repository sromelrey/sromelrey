"use client";

import React from "react";
import { motion } from "framer-motion";

interface BookCoverProps {
  onStartReading: () => void;
}

export default function BookCover({ onStartReading }: BookCoverProps) {
  return (
    <motion.div
      className='book-cover-page'
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className='cover-content'>
        {/* Book Title */}
        <motion.div
          className='book-title'
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h1 className='title-main'>Romel Rey Silva</h1>
          <h2 className='title-subtitle'>Frontend Developer</h2>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          className='cover-decoration'
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 1, duration: 1.2, ease: "easeOut" }}
        >
          <div className='decorative-circle circle-1' />
          <div className='decorative-circle circle-2' />
          <div className='decorative-circle circle-3' />
        </motion.div>

        {/* Author Info */}
        <motion.div
          className='author-info'
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <p className='author-description'>
            A journey through code, creativity, and innovation
          </p>
          <p className='author-tagline'>
            5+ years of ReactJS expertise • Full-Stack Development • Software
            Engineering
          </p>
        </motion.div>

        {/* Start Reading Button */}
        <motion.button
          className='start-reading-btn'
          onClick={onStartReading}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 10px 30px rgba(0, 178, 235, 0.4)",
          }}
          whileTap={{ scale: 0.95 }}
        >
          <span>Start Reading</span>
          <svg width='20' height='20' viewBox='0 0 24 24' fill='none'>
            <path
              d='M9 18L15 12L9 6'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </motion.button>

        {/* Book Details */}
        <motion.div
          className='book-details'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <div className='detail-item'>
            <span className='detail-label'>Portfolio</span>
            <span className='detail-value'>2024 Edition</span>
          </div>
          <div className='detail-item'>
            <span className='detail-label'>Pages</span>
            <span className='detail-value'>4 Chapters</span>
          </div>
          <div className='detail-item'>
            <span className='detail-label'>Genre</span>
            <span className='detail-value'>Professional</span>
          </div>
        </motion.div>
      </div>

      {/* Cover Background Effects */}
      <div className='cover-bg-effects'>
        <div className='bg-gradient-1' />
        <div className='bg-gradient-2' />
        <div className='bg-pattern' />
      </div>
    </motion.div>
  );
}
