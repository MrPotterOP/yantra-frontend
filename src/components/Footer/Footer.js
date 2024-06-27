// import Link from "next/link";
// import styles from './styles.module.css';
// import Image from "next/image";

// function Footer() {
//     return ( 
//         <footer id={styles.footer}>
//             <div className={styles.footerMain}>
//                 <div className={styles.footerLinks}>
//                     <p className={styles.linkTitle}>COMPANY</p>

//                     <div className={styles.links}>
//                         <Link href={"#"}>Services</Link>
//                         <Link href={"#"}>Projects</Link>
//                         <Link href={"#"}>Works</Link>
//                     </div>
//                 </div>

//                 <div className={styles.footerLinks}>
//                     <p className={styles.linkTitle}>ABOUT</p>

//                     <div className={styles.links}>
//                         <Link href={"#"}>Contact</Link>
//                         <Link href={"#"}>Mission</Link>
//                         <Link href={"#"}>Careers</Link>
//                     </div>
//                 </div>

//                 <div className={styles.footerLinks}>
//                     <p className={styles.linkTitle}>RESOURCES</p>

//                     <div className={styles.links}>
//                         <Link href={"#"}>Privacy Policy</Link>
//                         <Link href={"#"}>Terms of Sales</Link>
//                         <Link href={"#"}>Work With Us</Link>
//                     </div>
//                 </div>

//                 <div className={styles.footerForm}>
//                     <p className={styles.linkTitle}>SEY HELLO TO US</p>

//                     <div className={styles.inputBox}>

//                         <input type="email" placeholder="name@example.com"></input>

//                         <button className={styles.cta}>
//                             <p>Sey Hello</p>
//                             <Image src="/images/arrow.png" alt="Arrow" width={28} height={28} />
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             <div className={styles.line}></div>

//             <p className={styles.copyright}>Copyright C 2024 | All Rights Reserved</p>
//         </footer>
//     );
// }

// export default Footer;



import Link from "next/link";
import styles from './styles.module.css';
import Image from "next/image";

function Footer() {
    return (
        <footer id={styles.footer}>
            <div className={styles.footerMain}>
                <div className={styles.footerLinks}>
                    <p className={styles.linkTitle}>COMPANY</p>

                    <div className={styles.links}>
                        <Link href={"#"} data-hover="Services"><span>Services</span></Link>
                        <Link href={"#"} data-hover="Projects"><span>Projects</span></Link>
                        <Link href={"#"} data-hover="Works"><span>Works</span></Link>
                    </div>
                </div>

                <div className={styles.footerLinks}>
                    <p className={styles.linkTitle}>ABOUT</p>

                    <div className={styles.links}>
                        <Link href={"#"} data-hover="Contact"><span>Contact</span></Link>
                        <Link href={"#"} data-hover="Mission"><span>Mission</span></Link>
                        <Link href={"#faqs"} data-hover="Careers"><span>Careers</span></Link>
                    </div>
                </div>

                <div className={styles.footerLinks}>
                    <p className={styles.linkTitle}>RESOURCES</p>

                    <div className={styles.links}>
                        <Link href={"#"} data-hover="Privacy Policy"><span>Privacy Policy</span></Link>
                        <Link href={"#"} data-hover="Terms of Sales"><span>Terms of Sales</span></Link>
                        <Link href={"#"} data-hover="Work With Us"><span>Work With Us</span></Link>
                    </div>
                </div>

                <div className={styles.footerForm}>
                    <p className={styles.linkTitle}>SAY HELLO TO US</p>

                    <div className={styles.inputBox}>
                        <input type="email" placeholder="name@example.com"></input>

                        <button className={styles.cta}>
                            <p>Say Hello</p>
                            <Image src="/images/arrow.png" alt="Arrow" width={28} height={28} />
                        </button>
                    </div>
                </div>
            </div>

            <div className={styles.line}></div>

            <p className={styles.copyright}>Copyright © 2024 | All Rights Reserved</p>
        </footer>
    );
}

export default Footer;
