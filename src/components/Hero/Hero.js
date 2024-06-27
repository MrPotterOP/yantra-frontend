'use client';

import { useState, useEffect } from 'react';
import styles from './styles.module.css';
import Image from 'next/image';

import { motion } from 'framer-motion';


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
    <section id={styles.hero} className={'hero'}>
      <div className={styles.heroBox}>
        <motion.div className={styles.heroImagesSlide}
          initial={{ opacity: 0.6, scale: 1.2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        >
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
        </motion.div>

        <motion.div 
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        className={styles.heroNavigation} onClick={() => setSlide((prevSlide) => ({ ...prevSlide, activeSlide: (prevSlide.activeSlide + 1) % 3 }))}> 
            <Image src="/images/outline-arrow.png" alt="Arrow" width={40} height={40} />
        </motion.div>

        <div className={styles.heroContent}>
          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
          >enabling <br /> innovative living environment</motion.h1>

          <motion.div className={styles.heroSliderBars}
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
          >
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
          </motion.div>
        </div>


        <motion.div className={styles.heroDescriptionBox}
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        >
          <p>
            You have a home to make and we have a product for you. We provide
            tailor-made home solutions for Doors, Windows, Balustrades,
            Retractable & Fixed Glass Roofs, and Pergolas.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;


           