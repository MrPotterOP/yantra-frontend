'use client'

import styles from './styles.module.css';
import Image from 'next/image';

import {motion, useTransform, useScroll} from 'framer-motion';
import { useRef, useEffect, useState } from 'react';


function Products() {


    // const ref = useRef(null);

    // const { scrollYProgress } = useScroll({
    //     target: ref
    // });

    // const [till, setTill] = useState("-75%");

    // const x = useTransform(scrollYProgress, [0, 1], ["0%", till]);

    // useEffect(()=>{
    //     setTill(window.innerWidth <= 800 ? "0%" : "-75%");
    // }, [])



    return ( 
        <section id={styles.products} >

            <div className={styles.productsTitle}>
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                >We Offer products like</motion.h1>
            </div>

            <motion.div 
             className={styles.productsBox}>

                <div
                 className={styles.product}>
                    <div className={styles.productImage}>
                        <Image src="/images/product1.jpg" alt="Product Image" width={500} height={900} />

                        <div className={styles.productFeatures}>
                                <ul>
                                    <li>Sliding</li>
                                    <li>Minimal Sliding Windows</li>
                                    <li>Exclusive Facades</li>
                                    <li>Casement</li>
                                    <li>Pivot</li>
                                    <li>Slide - Fold</li>
                                    <li>louvers</li>
                                </ul>
                        </div>
                    </div>

                    <div className={styles.productContext}>
                        <h4>Aluminium Doors & Windows</h4>

                        <p>Combines modern aesthetics with superior functionality, offering durability, energy efficiency, and customizable options to enhance any space.</p>
                    </div>
                </div>

                <div className={styles.product}>
                    <div className={styles.productImage}>
                        <Image src="/images/product2.jpg" alt="Product Image" width={500} height={900} />

                        <div className={styles.productFeatures}>
                                <ul>
                                    <li>Automated</li>
                                    <li>Manual</li>
                                </ul>
                        </div>
                    </div>

                    <div className={styles.productContext}>
                        <h4>Vertical Sliding Doors & Windows</h4>
                        <p>Designed for smooth operation and space efficiency, these solutions provide a blend of modern convenience and timeless style, perfect for any architectural setting.</p>
                    </div>
                </div>

                <div className={styles.product}>
                    <div className={styles.productImage}>
                        <Image src="/images/product3.jpg" alt="Product Image" width={500} height={900} />

                        <div className={styles.productFeatures}>
                                <ul>
                                    <li>Seamless </li>
                                    <li>With Frame</li>
                                </ul>
                        </div>
                    </div>

                    <div className={styles.productContext}>
                        <h4>Balustrades</h4>
                        <p>Whether you prefer the uninterrupted view of seamless designs or the classic strength of framed options, our balustrades offer the perfect balance of style and security.</p>
                    </div>
                </div>

                <div className={styles.product}>
                    <div className={styles.productImage}>
                        <Image src="/images/product4.jpg" alt="Product Image" width={500} height={900} />

                        <div className={styles.productFeatures}>
                                <ul>
                                    <li>Freestanding</li>
                                    <li>Lean - To</li>
                                    <li>Sunroof</li>
                                    <li>SolarGlide</li>

                                </ul>
                        </div>
                    </div>

                    <div className={styles.productContext}>
                        <h4>Retractable Sunroofs, Structures by Libart</h4>
                        <p>These innovative solutions provide flexible, stylish coverage that adapts to your needs, offering protection and enhancing outdoor living.</p>
                    </div>
                </div>

                <div className={styles.product}>
                    <div className={styles.productImage}>
                        <Image src="/images/product5.jpeg" alt="Product Image" width={500} height={900} />

                        <div className={styles.productFeatures}>
                                <ul>
                                    <li>Glass houses </li>
                                    <li>Glass houses with Built in Blinds </li>
                                    <li>Fixed Glass Roofs</li>
                                </ul>
                        </div> 

                    </div>

                    <div className={styles.productContext}>
                            <h4>Fixed Glass Roofs & Glass Houses</h4>
                            <p>Experience the luxury of natural light with our fixed glass roofs and climate-controlled glass houses.</p>
                    </div>
                </div>


                <div className={styles.product}>
                    <div className={styles.productImage}>
                        <Image src="/images/product6.jpg" alt="Product Image" width={500} height={900} />

                        <div className={styles.productFeatures}>
                                <ul>
                                    <li>Bioclimatic Pegolas</li>
                                    <li>Fixed pergolas by Aluminco</li>
                                    <li>Retractable Fabric screen Roofs</li>
                                </ul>
                        </div> 
            
                    </div>

                    <div className={styles.productContext}>
                            <h4>Retractable & Fixed Pergolas</h4>
                            <p>Choose from bioclimatic pergolas with adjustable louvres, fixed pergolas by Aluminco, or retractable fabric screen roofs. Each option offers durable construction and stylish design for year-round comfort.</p>
                        </div>
                </div>

                {/* <div className={styles.scrollNav}>
                    <Image src="/images/outline-arrow.png" alt="Arrow" width={40} height={40} />
                </div> */}


            </motion.div>

        </section>
    );
}

export default Products;