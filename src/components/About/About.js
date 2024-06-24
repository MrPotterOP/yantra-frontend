'use client';

import styles from './styles.module.css';
import Image from 'next/image';

import { motion } from 'framer-motion';

function About() {
    return ( 
        <section id={styles.about}>
            <div className={styles.aboutTitle}
                
            >
                <motion.p 
                    initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: 'easeInOut' }}
                className={styles.titleText}>ABOUT</motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: 'easeInOut', delay: 0.5 }}
                >We are focused on bringing the best of the world to India.</motion.h1>
            </div>

            <motion.div className={styles.aboutBox}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: 'easeInOut' }}
            >
                <Image src="/images/about.jpg" alt="About Image" width={1000} height={1500}></Image>
                <Image src="/images/about2.jpeg" alt="About Image" width={1000} height={1500}></Image>

                <div className={styles.aboutTextBox}>
                    <motion.p 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: 'easeInOut' }}
                    >With an understanding of the latest international trends, chic design and customisable home solutions,
We bring to you performance-based products, backed by superb engineering. Products that strive towards making your living environment as comfortable as possible.</motion.p>
                </div>

                <div className={styles.aboutTextBox}>
                    <motion.p
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: 'easeInOut' }}
                    >We are focused on bringing the best of the world to India. The products we provide are designed with precision, keeping in mind your every need.
We are dedicated & determined to provide the right fenestration solutions to you, anywhere, every time.</motion.p>
                </div>

            </motion.div>
        </section>
    );
}

export default About;