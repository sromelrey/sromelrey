"use client";
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
//
import React, { useState, useEffect, useCallback } from "react";
import styles from "./carousel.module.css";
import Image from "next/image";

const images = [
  { src: "/certificates/1.png", alt: "Nature" },
  { src: "/certificates/2.png", alt: "Snow" },
  { src: "/certificates/3.png", alt: "Mountains" },
];

const Slide = ({ image, text, activeSlide, index }) => (
  <div
    className={`${activeSlide !== index ? styles.mySlides : styles.mySlide} ${
      styles.fade
    }`}
  >
    <div className={`${styles.numbertext}`}>{`${images.indexOf(image) + 1} / ${
      images.length
    }`}</div>
    <Image
      width={1000}
      height={600}
      className={`${styles.slide_image}`}
      src={image.src}
      alt={image.alt}
    />
    <div className={`${styles.text}`}>{text}</div>
  </div>
);

const Dot = ({ index, active, handleClick }) => (
  <span
    className={`${styles.dot} ${active ? styles.active : ""}`}
    onClick={() => handleClick(index + 1)}
  />
);

const Slideshow = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const handleNextSlide = useCallback(() =>
    setSlideIndex((prevIndex) =>
      prevIndex === images.length ? 1 : prevIndex + 1
    )
  );
  const handlePrevSlide = () =>
    setSlideIndex((prevIndex) =>
      prevIndex === 1 ? images.length : prevIndex - 1
    );
  const handleDotClick = (newIndex) => setSlideIndex(newIndex);

  console.log(slideIndex - 1);
  return (
    <div className={styles.slideshow_container}>
      {images.map((image, index) => (
        <Slide
          key={index}
          index={index}
          activeSlide={slideIndex - 1}
          image={image}
          text={`Caption ${index + 1}`}
        />
      ))}
      <a className={styles.prev} onClick={handlePrevSlide}>
        ❮
      </a>
      <a className={styles.next} onClick={handleNextSlide}>
        ❯
      </a>

      <div style={{ textAlign: "center" }}>
        {images.map((image, index) => (
          <Dot
            key={index}
            index={index}
            active={slideIndex === index + 1}
            handleClick={handleDotClick}
          />
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
