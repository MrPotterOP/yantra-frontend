import Image from "next/image";
import styles from './styles.module.css';


function InfiniteScrollImages() {

    const images = [
        "/images/company1.png",
        "/images/company2.png",
        "/images/company3.png",
        "/images/company4.png",
        "/images/company5.png",
        "/images/company6.png",
        "/images/company7.png",
        "/images/company8.png",
    ];


    return ( 
        <section id={styles.infiniteScrollImages}>

            <div className={styles.scroll}>

                <div>

                    {images.map((image, index) => (
                        <Image
                            key={index}
                            src={image}
                            alt="Company Image"
                            width={200}
                            height={68}
                        />
                    ))}

                </div>


                <div>

                    {images.map((image, index) => (
                        <Image
                            key={index}
                            src={image}
                            alt="Company Image"
                            width={200}
                            height={68}
                        />
                    ))}

                </div>


                
            </div>

        </section>
     );
}

export default InfiniteScrollImages;