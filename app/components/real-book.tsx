"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import About from "../(sections)/about";
import Projects from "../(sections)/projects";
import Certificates from "../(sections)/certificates";
import ContactMe from "../(sections)/contact-me";

interface BookPageProps {
  children: React.ReactNode;
  pageNumber: number;
  isLeftPage?: boolean;
  isRightPage?: boolean;
  isActive: boolean;
  isFlipping: boolean;
  flipDirection?: "next" | "prev";
  isThisPageFlipping?: boolean;
}

function BookPage({
  children,
  pageNumber,
  isLeftPage = false,
  isRightPage = false,
  isActive,
  isFlipping,
  flipDirection,
  isThisPageFlipping = false,
}: BookPageProps) {
  const getAnimationClass = () => {
    if (!isThisPageFlipping) return "";

    if (flipDirection === "next") {
      return isLeftPage ? "flipping-next" : "";
    } else {
      return isRightPage ? "flipping-prev" : "";
    }
  };

  return (
    <div
      className={`book-page ${isLeftPage ? "left-page" : ""} ${
        isRightPage ? "right-page" : ""
      } ${isActive ? "active" : ""} ${getAnimationClass()}`}
      style={{
        transformStyle: "preserve-3d",
        backfaceVisibility: "hidden",
      }}
    >
      <div className='page-content'>
        <div className={`page-number ${isLeftPage ? "left" : "right"}`}>
          {pageNumber}
        </div>
        {children}
      </div>
      <div className='page-shadow' />
    </div>
  );
}

export default function RealBook() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState<"next" | "prev">("next");
  const [flippingPageIndex, setFlippingPageIndex] = useState<number | null>(
    null
  );

  // Book structure: About (left) + Projects (right) -> Certificates (left) + Contact (right)
  const bookPages = [
    {
      id: "about",
      component: About,
      title: "About Me",
      pageNumber: 1,
      isLeft: true,
    },
    {
      id: "projects",
      component: Projects,
      title: "My Projects",
      pageNumber: 2,
      isRight: true,
    },
    {
      id: "certificates",
      component: Certificates,
      title: "Certificates",
      pageNumber: 3,
      isLeft: true,
    },
    {
      id: "contact",
      component: ContactMe,
      title: "Let's Connect",
      pageNumber: 4,
      isRight: true,
    },
  ];

  const handlePageTurn = useCallback(
    (direction: "next" | "prev") => {
      if (isFlipping) return;

      setFlipDirection(direction);
      setIsFlipping(true);

      // Determine which page should flip (always flip the right page)
      let pageToFlip: number;
      if (direction === "next" && currentPage < bookPages.length - 2) {
        pageToFlip = currentPage + 1; // Flip the right page
        setFlippingPageIndex(pageToFlip);
      } else if (direction === "prev" && currentPage > 0) {
        pageToFlip = currentPage + 1; // Flip the right page
        setFlippingPageIndex(pageToFlip);
      } else {
        setIsFlipping(false);
        return;
      }

      // Add delay for realistic page turning feel
      setTimeout(() => {
        if (direction === "next" && currentPage < bookPages.length - 2) {
          setCurrentPage(currentPage + 2);
        } else if (direction === "prev" && currentPage > 0) {
          setCurrentPage(currentPage - 2);
        }
        setIsFlipping(false);
        setFlippingPageIndex(null);
      }, 1000); // Match CSS animation duration (1s)
    },
    [currentPage, isFlipping, bookPages.length]
  );

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        handlePageTurn("next");
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        handlePageTurn("prev");
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [handlePageTurn]);

  const getCurrentSpread = () => {
    const leftPage = bookPages[currentPage];
    const rightPage = bookPages[currentPage + 1];
    return { leftPage, rightPage };
  };

  const getNextSpread = () => {
    if (flipDirection === "next" && currentPage < bookPages.length - 2) {
      const leftPage = bookPages[currentPage + 2];
      const rightPage = bookPages[currentPage + 3];
      return { leftPage, rightPage };
    } else if (flipDirection === "prev" && currentPage > 0) {
      const leftPage = bookPages[currentPage - 2];
      const rightPage = bookPages[currentPage - 1];
      return { leftPage, rightPage };
    }
    return { leftPage: null, rightPage: null };
  };

  const { leftPage, rightPage } = getCurrentSpread();
  const { leftPage: nextLeftPage, rightPage: nextRightPage } = getNextSpread();
  const LeftComponent = leftPage?.component;
  const RightComponent = rightPage?.component;
  const NextLeftComponent = nextLeftPage?.component;
  const NextRightComponent = nextRightPage?.component;

  return (
    <div className='real-book-container'>
      {/* Book binding/spine */}
      <div className='book-spine' />

      {/* Book pages */}
      <div className='book-pages-container'>
        <div className='book-spread'>
          {/* Always show the left page */}
          {LeftComponent && (
            <BookPage
              pageNumber={leftPage.pageNumber}
              isLeftPage={true}
              isActive={true}
              isFlipping={false}
              flipDirection={flipDirection}
              isThisPageFlipping={false}
            >
              <LeftComponent />
            </BookPage>
          )}

          {/* Show current right page when not flipping */}
          {RightComponent && !isFlipping && (
            <BookPage
              pageNumber={rightPage.pageNumber}
              isRightPage={true}
              isActive={true}
              isFlipping={false}
              flipDirection={flipDirection}
              isThisPageFlipping={false}
            >
              <RightComponent />
            </BookPage>
          )}

          {/* Show next right page behind the flipping page */}
          {isFlipping && NextRightComponent && (
            <BookPage
              pageNumber={nextRightPage.pageNumber}
              isRightPage={true}
              isActive={false}
              isFlipping={false}
              flipDirection={flipDirection}
              isThisPageFlipping={false}
            >
              <NextRightComponent />
            </BookPage>
          )}

          {/* Show flipping right page when animation is active */}
          {isFlipping && flippingPageIndex !== null && (
            <BookPage
              pageNumber={bookPages[flippingPageIndex].pageNumber}
              isRightPage={true}
              isActive={false}
              isFlipping={true}
              flipDirection={flipDirection}
              isThisPageFlipping={true}
            >
              {React.createElement(bookPages[flippingPageIndex].component)}
            </BookPage>
          )}
        </div>
      </div>

      {/* Bottom Navigation Controls */}
      <div className='bottom-navigation'>
        <button
          className={`nav-btn prev-btn ${currentPage === 0 ? "disabled" : ""}`}
          onClick={() => handlePageTurn("prev")}
          disabled={currentPage === 0 || isFlipping}
        >
          <svg width='20' height='20' viewBox='0 0 24 24' fill='none'>
            <path
              d='M15 18L9 12L15 6'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
          <span>Previous</span>
        </button>

        <div className='navigation-dots'>
          {Array.from(
            { length: Math.ceil(bookPages.length / 2) },
            (_, index) => (
              <button
                key={index}
                className={`dot ${
                  Math.floor(currentPage / 2) === index ? "active" : ""
                }`}
                onClick={() => {
                  if (!isFlipping) {
                    const targetPage = index * 2;
                    if (targetPage !== currentPage) {
                      setFlipDirection(
                        targetPage > currentPage ? "next" : "prev"
                      );
                      setIsFlipping(true);
                      setTimeout(() => {
                        setCurrentPage(targetPage);
                        setIsFlipping(false);
                      }, 800);
                    }
                  }
                }}
              />
            )
          )}
        </div>

        <button
          className={`nav-btn next-btn ${
            currentPage >= bookPages.length - 2 ? "disabled" : ""
          }`}
          onClick={() => handlePageTurn("next")}
          disabled={currentPage >= bookPages.length - 2 || isFlipping}
        >
          <span>Next</span>
          <svg width='20' height='20' viewBox='0 0 24 24' fill='none'>
            <path
              d='M9 18L15 12L9 6'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </button>
      </div>

      {/* Page indicator */}
      <div className='page-indicator'>
        <span className='current-spread'>
          {Math.floor(currentPage / 2) + 1}
        </span>
        <span className='separator'>/</span>
        <span className='total-spreads'>{Math.ceil(bookPages.length / 2)}</span>
      </div>

      {/* Instructions */}
      <div className='book-instructions'>
        <p>Use arrow keys or click the navigation buttons to turn pages</p>
      </div>
    </div>
  );
}
