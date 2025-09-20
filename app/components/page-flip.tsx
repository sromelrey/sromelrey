"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PageFlipProps {
  children: React.ReactNode;
  isFlipping: boolean;
  direction: "next" | "prev";
  onFlipComplete: () => void;
}

export default function PageFlip({
  children,
  isFlipping,
  direction,
  onFlipComplete,
}: PageFlipProps) {
  const [flipProgress, setFlipProgress] = useState(0);

  useEffect(() => {
    if (isFlipping) {
      const duration = 1000; // 1 second flip
      const startTime = Date.now();

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function for realistic page flip
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        setFlipProgress(easeProgress);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setFlipProgress(0);
          onFlipComplete();
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isFlipping, onFlipComplete]);

  const getFlipTransform = () => {
    if (!isFlipping) return {};

    const rotateY =
      direction === "next" ? flipProgress * 180 : -flipProgress * 180;
    const translateZ = Math.sin(flipProgress * Math.PI) * 50;
    const scaleX = 1 - Math.sin(flipProgress * Math.PI) * 0.1;

    return {
      rotateY,
      translateZ,
      scaleX,
      transformOrigin: direction === "next" ? "left center" : "right center",
    };
  };

  const getShadowOpacity = () => {
    if (!isFlipping) return 0;
    return Math.sin(flipProgress * Math.PI) * 0.3;
  };

  return (
    <div className='page-flip-container'>
      <motion.div
        className='page-flip-content'
        animate={getFlipTransform()}
        transition={{ duration: 0 }}
        style={{
          transformStyle: "preserve-3d",
          backfaceVisibility: "hidden",
        }}
      >
        {children}
      </motion.div>

      {/* Page curl shadow effect */}
      <AnimatePresence>
        {isFlipping && (
          <motion.div
            className='page-curl-shadow'
            initial={{ opacity: 0 }}
            animate={{ opacity: getShadowOpacity() }}
            exit={{ opacity: 0 }}
            style={{
              background: `radial-gradient(ellipse at ${
                direction === "next" ? "0%" : "100%"
              } 50%, rgba(0,0,0,0.4) 0%, transparent 70%)`,
            }}
          />
        )}
      </AnimatePresence>

      {/* Page edge highlight */}
      <AnimatePresence>
        {isFlipping && (
          <motion.div
            className='page-edge-highlight'
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: Math.sin(flipProgress * Math.PI) * 0.8,
              scale: 1,
            }}
            exit={{ opacity: 0, scale: 0 }}
            style={{
              left: direction === "next" ? "0%" : "100%",
              transform: `translateX(${direction === "next" ? "-50%" : "50%"})`,
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
