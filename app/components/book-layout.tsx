"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BookSpread from "./book-spread";
import BookCover from "./book-cover";
import PageFlip from "./page-flip";
import About from "../(sections)/about";
import Projects from "../(sections)/projects";
import Certificates from "../(sections)/certificates";
import ContactMe from "../(sections)/contact-me";

// Book structure: cover -> first spread (already open) -> contact page (standalone)
const bookPages = [
  {
    id: "cover",
    type: "cover",
    component: BookCover,
  },
  {
    id: "spread-1",
    type: "spread",
    left: { id: "about", component: About, title: "About Me" },
    right: { id: "projects", component: Projects, title: "My Projects" },
  },
  {
    id: "contact",
    type: "single",
    component: ContactMe,
    title: "Let's Connect",
  },
];

export default function BookLayout() {
  const [currentPage, setCurrentPage] = useState(0); // Start with cover (0)
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState<"next" | "prev">("next");

  const handlePageChange = useCallback(
    (direction: "next" | "prev") => {
      if (isFlipping) return;

      setFlipDirection(direction);
      setIsFlipping(true);

      if (direction === "next" && currentPage < bookPages.length - 1) {
        // Page flip animation will handle the actual page change
      } else if (direction === "prev" && currentPage > 0) {
        // Page flip animation will handle the actual page change
      }
    },
    [currentPage, isFlipping]
  );

  const handleFlipComplete = useCallback(() => {
    setIsFlipping(false);

    if (flipDirection === "next" && currentPage < bookPages.length - 1) {
      setCurrentPage(currentPage + 1);
    } else if (flipDirection === "prev" && currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  }, [flipDirection, currentPage]);

  const handleStartReading = () => {
    setCurrentPage(1); // Go to first spread (About + Projects)
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        handlePageChange("next");
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        handlePageChange("prev");
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [currentPage, isFlipping, handlePageChange]);

  // Progress indicator
  const progress = ((currentPage + 1) / bookPages.length) * 100;

  return (
    <div className='book-container'>
      {/* Book cover effect */}
      <div className='book-cover' />

      {/* Progress bar */}
      <motion.div
        className='progress-bar'
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.5 }}
      />

      {/* Page counter */}
      {currentPage > 0 && (
        <div className='page-counter'>
          <span className='current-page'>{currentPage}</span>
          <span className='separator'>/</span>
          <span className='total-pages'>{bookPages.length - 1}</span>
        </div>
      )}

      {/* Navigation dots */}
      {currentPage > 0 && (
        <div className='navigation-dots'>
          {bookPages.slice(1).map((_, index) => (
            <button
              key={index}
              className={`dot ${index + 1 === currentPage ? "active" : ""}`}
              onClick={() => {
                if (!isFlipping) {
                  const targetPage = index + 1;
                  if (targetPage !== currentPage) {
                    setFlipDirection(
                      targetPage > currentPage ? "next" : "prev"
                    );
                    setIsFlipping(true);
                    // The flip animation will handle the page change
                  }
                }
              }}
            />
          ))}
        </div>
      )}

      {/* Book pages */}
      <div className='book-pages'>
        <PageFlip
          isFlipping={isFlipping}
          direction={flipDirection}
          onFlipComplete={handleFlipComplete}
        >
          {currentPage === 0 ? (
            <BookCover key='cover' onStartReading={handleStartReading} />
          ) : currentPage === 1 ? (
            <BookSpread
              key='spread-1'
              spreadNumber={1}
              isActive={true}
              isNext={false}
              isPrevious={false}
              onPageChange={handlePageChange}
              leftPage={<About />}
              rightPage={<Projects />}
            />
          ) : (
            <div key='contact' className='single-page-container'>
              <div className='single-page'>
                <div className='page-content'>
                  <div className='page-number'>3</div>
                  <ContactMe />
                </div>
                <div className='page-shadow' />
              </div>
            </div>
          )}
        </PageFlip>
      </div>

      {/* Book spine effect */}
      <div className='book-spine' />

      {/* Instructions */}
      {currentPage > 0 && (
        <motion.div
          className='instructions'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <p>Use arrow keys or click the navigation buttons to turn pages</p>
        </motion.div>
      )}
    </div>
  );
}
