'use client';

import { useState, useEffect } from 'react';
import styles from './styles.module.css';
import Image from 'next/image';

function Hero() {
  const [slide, setSlide] = useState({
    activeSlide: 0,
    reset: false,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prevSlide) => {
        const newSlide = (prevSlide.activeSlide + 1) % 3;
        return { activeSlide: newSlide, reset: newSlide === 0 };
      });
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id={styles.hero}>
      <div className={styles.heroBox}>
        <div className={styles.heroImagesSlide}>
          <Image
            className={slide.activeSlide === 0 ? styles.active : ''}
            src="/images/hero1.jpeg"
            alt="Hero Image"
            width={2000}
            height={1900}
          />
          <Image
            className={slide.activeSlide === 1 ? styles.active : ''}
            src="/images/hero2.jpg"
            alt="Hero Image"
            width={2000}
            height={1180}
          />
          <Image
            className={slide.activeSlide === 2 ? styles.active : ''}
            src="/images/hero3.jpg"
            alt="Hero Image"
            width={2000}
            height={1180}
          />
        </div>

        <div className={styles.heroContent}>
          <h1>enabling <br /> innovative living environment</h1>

          <div className={styles.heroSliderBars}>
            {[0, 1, 2].map((item, index) => (
              <div
                key={index}
                className={`${styles.sliderBar} ${
                  slide.activeSlide === index ? styles.active : ''
                }`}
              >
                <div className={styles.sliderBarProgress}></div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.heroDescriptionBox}>
          <p>
            You have a home to make and we have a product for you. We provide
            tailor-made home solutions for Doors, Windows, Balustrades,
            Retractable & Fixed Glass Roofs, and Pergolas.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
