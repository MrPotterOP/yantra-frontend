'use client'

import styles from './styles.module.css';
import Image from 'next/image';
import { useState, useEffect } from 'react';

import { motion } from 'framer-motion';

function Advantages() {
  const [activeIndex, setActiveIndex] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 4);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
        <section id={styles.advantages}>
                    <div className={styles.advantagesBox}>
                        <motion.div 
                        initial={{ opacity: 0.6, scale: 1.2 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: 'easeInOut' }}
                        className={styles.advantagesBg}>
                            <Image
                                src="/images/adv_bg.jpeg"
                                alt="advanyages background"
                                width={1200}
                                height={1400}
                            />
                        </motion.div>

                        <motion.div 
                        initial={{ opacity: 0.6, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: 'easeInOut', delay: 0.5 }}
                        className={styles.advantagesTitle}>
                            <p>WHY CHOOSE US</p>

                            <h1>OUR ADVANTAGES</h1>
                        </motion.div>

                        <motion.div 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: 'easeInOut', delay: 0.5 }}

                        className={styles.advantagesList}>
                            <div className={`${styles.advantagesItem} ${activeIndex === 0 ? styles.active : ''}`} onClick={()=> setActiveIndex(0)} >
                                <div className={styles.advantagesIcon}>
                                    <Image
                                        src="/images/adv_net.png"
                                        alt="advantage icon"
                                        width={80}
                                        height={80}
                                    />
                                    <div className={styles.line}></div>

                                    <h3>NETWORK</h3>
                                </div>
                                <div className={styles.advantagesText}>
                                    
                                    <p>SYNERGY WITH OTHER AGENCIES
        Complete co-ordination between all agencies working on site to give a seamless experience to the end customer.</p>
                                </div>

                                <div className={styles.sliderBar}>
                                    <div className={styles.sliderProgress}></div>
                                </div>
                            </div>

                            <div className={`${styles.advantagesItem} ${activeIndex === 1 ? styles.active : ''}`} onClick={()=> setActiveIndex(1)} >
                                <div className={styles.advantagesIcon}>
                                    <Image
                                        src="/images/adv_war.png"
                                        alt="advantage icon"
                                        width={80}
                                        height={80}
                                    />
                                    <div className={styles.line}></div>
                                    <h3>LIFETIME WARRANTY</h3>
                                </div>
                                <div className={styles.advantagesText}>
                                    <p>A Lifetime warranty for all our services,
        At Yantra, we assure you of an unparalleled home design experience. We
        conduct quality checks at every stage to offer products that are free from
        material and manufacturing defects.</p>
                                </div>

                                <div className={styles.sliderBar}>
                                    <div className={styles.sliderProgress}></div>
                                </div>
                            </div>

                            <div className={`${styles.advantagesItem} ${activeIndex === 2 ? styles.active : ''}`} onClick={()=> setActiveIndex(2)} >
                                <div className={styles.advantagesIcon}>
                                    <Image
                                        src="/images/adv_maint.png"
                                        alt="advantage icon"
                                        width={80}
                                        height={80}
                                    />
                                    <div className={styles.line}></div>

                                    <h3>ANNUAL MAINTENANCE</h3>
                                </div>
                                <div className={styles.advantagesText}>
                                    <p> We offer an Annual Maintenance Contract for all our services when required

        We create products that can withstand the test of time. With our cost-effective Annual Maintenance Contract, our efficient service engineers who undertake servicing at any location and at any time convenient to the customers.
        </p>
                                </div>

                                <div className={styles.sliderBar}>
                                    <div className={styles.sliderProgress}></div>
                                </div>
                            </div>

                            <div className={`${styles.advantagesItem} ${activeIndex === 3 ? styles.active : ''}`} onClick={()=> setActiveIndex(3)}>
                                <div className={styles.advantagesIcon}>
                                    <Image
                                        src="/images/adv_avail.png"
                                        alt="advantage icon"
                                        width={80}
                                        height={80}
                                    />


                                    <div className={styles.line}></div>

                                    <h3>AVAILABILITY</h3>
                                </div>
                                <div className={styles.advantagesText}>
                                    <p>Our availability across India. With a Pan India presence, we, at Yantra, understand our customers requirements and source the best of materials from all across the globe to create world-class products.</p>
                                </div>

                                <div className={styles.sliderBar}>
                                    <div className={styles.sliderProgress}></div>
                                </div>
                            </div>

                        </motion.div>
                    </div>
        </section>
  );
}


export default Advantages;

