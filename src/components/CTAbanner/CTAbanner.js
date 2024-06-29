
import styles from './styles.module.css';

import Image from 'next/image';
import Link from 'next/link';


function CTAbanner() {



       


    return ( 

        

        <section id={`${styles.banner}`} className={'footer'}>
            <div className={styles.bannerBox}>
                <Image className={styles.bannerBg} src={"/images/bannerBg.jpg"} width={1100} height={900} alt="building architecture"></Image>

                <div className={styles.bgGrad}></div>

                <div className={styles.bannerContext}>

                    <div className={styles.contextBox}>
                        <h1>Experience the Best in Window Innovation</h1>

                        <Link href="https://calendly.com/yantrawindows/visit-to-the-yantra-experience-centre-andheri-west" target={"_blank"} >
                            <p>Book a Visit With Us</p>
                            <Image src="/images/arrow.png" alt="Arrow" width={28} height={28} />
                        </Link>


                    </div>

                </div>
            </div>
        </section>
    );
}

export default CTAbanner;