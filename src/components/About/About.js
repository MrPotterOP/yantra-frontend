import styles from './styles.module.css';
import Image from 'next/image';

function About() {
    return ( 
        <section id={styles.about}>
            <div className={styles.aboutTitle}>
                <p className={styles.titleText}>ABOUT</p>

                <h1>We are focused on bringing the best of the world to India.</h1>
            </div>

            <div className={styles.aboutBox}>
                <Image src="/images/about.jpg" alt="About Image" width={1000} height={1500}></Image>
                <Image src="/images/about2.jpeg" alt="About Image" width={1000} height={1500}></Image>

                <div className={styles.aboutTextBox}>
                    <p>With an understanding of the latest international trends, chic design and customisable home solutions,
We bring to you performance-based products, backed by superb engineering. Products that strive towards making your living environment as comfortable as possible.</p>
                </div>

                <div className={styles.aboutTextBox}>
                    <p>We are focused on bringing the best of the world to India. The products we provide are designed with precision, keeping in mind your every need.
We are dedicated & determined to provide the right fenestration solutions to you, anywhere, every time.</p>
                </div>

            </div>
        </section>
    );
}

export default About;