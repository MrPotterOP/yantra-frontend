'use client'

import styles from './styles.module.css';
import { motion, useInView } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

function Tnc() {
    const [active, setActive] = useState(0);

    const terms = ["MATERIAL", "SCOPE OF WORK", "FINISH", "GLASS SPECIFICATIONS", "WINDOW SPECIFICATIONS", "ORDER CONFIRMATION", "PRICING", "DELIVERY", "WARRANTY", "PAYMENT", "INSTALLATION", "COMPLETION CERTIFICATE"];

    // Create refs for each section
    const refs = useRef(terms.map(() => useRef(null)));

    // Create an array of inView states for each section
    const inViewStates = terms.map((_, i) => useInView(refs.current[i], { triggerOnce: false }));

    useEffect(() => {
        // Find the index of the first section that is in view
        const activeIndex = inViewStates.findIndex(inView => inView);
        if (activeIndex !== -1) {
            setActive(activeIndex);
        }
    }, [inViewStates]);


    const hidden = {
        opacity: 0,
        y: 50
    }

    const show = {
        opacity: 1,
        y: 0
    }

    const transition = {
        duration: 1,
        ease: 'easeInOut'
    }

    const variants = {
        hidden,
        show
    }


    return (
        <section id={styles.tnc}>
            <div className={styles.tncNav}>
                {terms.map((term, i) => (
                    <motion.p 
                    initial={{ opacity: 0, y: -20 }}
                    transition={{ delay: i * 0.1 + 0.3, type: 'spring', stiffness: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    key={term} className={`${styles.tncNavText} ${active === i-1 ? styles.active : ''}`} onClick={() => (i > 0) ? refs.current[i-1].current.scrollIntoView({ behavior: 'smooth' }) : refs.current[i].current.scrollIntoView({ behavior: 'smooth' })}>
                        {term}
                    </motion.p>
                ))}
            </div>

            <div className={styles.tncContent}>
                <motion.div
                 initial={hidden}
                 whileInView={show}
                 viewport={{ once: true }}
                 transition={transition}
                 className={styles.tncText} ref={refs.current[0]}>
                    <p><span>Material </span>content included in this quotation is based on the details received,
                    as listed below. Quantities, dimensions, and product descriptions are detailed hereinafter.</p>
                </motion.div>

                <motion.div
                initial={hidden}
                 whileInView={show}
                 viewport={{ once: true }}
                 transition={transition}
                 className={styles.tncText} ref={refs.current[1]}>
                    <p><span>Scope of Work </span>Designing, Providing, Fabricating, and fixing of Windows.</p>
                </motion.div>

                <motion.div 
                initial={hidden}
                 whileInView={show}
                 viewport={{ once: true }}
                 transition={transition}
                className={styles.tncText} ref={refs.current[2]}>
                    <p><span>Finish </span>As approved by Architect / Interior Designer from Powder Coating / Anodizing or Wooden Coating (If mentioned in Offer)</p>
                </motion.div>

                <motion.div 
                initial={hidden}
                 whileInView={show}
                 viewport={{ once: true }}
                 transition={transition}
                className={styles.tncText} ref={refs.current[3]}>
                    <p><span>Glass Specifications </span>Glasses to be provided are stated in the window offer.</p>
                </motion.div>

                <motion.div
                initial={hidden}
                 whileInView={show}
                 viewport={{ once: true }}
                 transition={transition}
                 className={styles.tncText} ref={refs.current[4]}>
                    <p><span>Window Specifications </span>The Windows are manufactured according to the specification as approved by the customer. <br /> <br />  Screen or Louvers, Exhaust Fans not included in the offer. (Unless Specified) <br /> <br /> We are not responsible for any consequences caused due to any deviation from the Normal/Standard Design and/or Installation Method done on request from the Client/Architect which we may not be in a position to foresee while agreeing to such deviations, also such deviation would void the warranty offered by <strong>Yantra Aluminium Window Systems Pvt Ltd</strong></p>
                </motion.div>

                <motion.div
                initial={hidden}
                 whileInView={show}
                 viewport={{ once: true }}
                 transition={transition}
                 className={styles.tncText} ref={refs.current[5]}>
                    <p><span>Order Confirmation </span>Order will be considered as confirmed only on receipt of the following <br /> <br /> 

                    The Offer Duly Stamped and Signed on Every Page, Confirming The Techno- Commercial Details Viz: Billing Address, Delivery Address, Glass Thickness, The Opening Direction, The Fittings, The Fabrication Sizes, The Elevation And The Price. <br /> <br />

                    Advance Payment as mentioned in payment schedule.
                    </p>
                </motion.div>

                <motion.div
                initial={hidden}
                 whileInView={show}
                 viewport={{ once: true }}
                 transition={transition}
                 className={styles.tncText} ref={refs.current[6]}>
                    <p><span>Pricing </span>All statutory duties & taxes, whether central, state or local shall be levied @ rate prevailing on the date of delivery. In case of multiple deliveries in the same project, spread over a period of time, the taxes & duties levied may be different based on prevailing rate at the time of each delivery. <br /> <br />
                    This Offer may change with the change in the Dimension, Elevation, Glass Type, and Hardware Type etc., which may please be noted. <br /> <br />
                    Offers Based On Rough Dimensions The Invoice Value Will Differ From This Quotation Value As The Rates May Change As Per The Final Sizes Of Windows/Doors Delivered At Site. However, all the terms and discount offered shall remain unchanged. <br /> <br />
                    The Price offered is valid for 6 Days from the date of the Quotation. <br /> <br />
                    As a standard practice we do not change the value of window in case of 5% change
                    In size (Either reduction or addition)
                    </p>
                </motion.div>

                <motion.div
                initial={hidden}
                 whileInView={show}
                 viewport={{ once: true }}
                 transition={transition}
                 className={styles.tncText} ref={refs.current[7]}>
                    <p><span>Delivery </span>Material to be delivered in 90-120 days after final order confirmation and advance. <br /> <br />
                    Complete Installation Handover to be done within 15-20 days depending on site clearances. <br /> <br />
                    above dates depend on site clearances. <br /> <br />
                    When window frames and/or glasses are delivered at site, either in part or full quantities, any defect such as scratch marks etc. should be brought to our notice within 3 days from the delivery date. We will not be responsible for any defects/scratches, after this period other than manufacturing defects.
                    </p>
                </motion.div>

                <motion.div
                initial={hidden}
                 whileInView={show}
                 viewport={{ once: true }}
                 transition={transition}
                 className={styles.tncText} ref={refs.current[8]}>
                    <p><span>Warranty </span>One Year from the date of Supply of Windows, the warranty is only towards Manufacturing Defects, the warranty does not cover Glass Breakage and Regular Wear &Tear. Lifelong Support from our Team and Associates. <br /> <br />
                    Post completion we would recommend to continue with AMC from our company for maintenance of windows as hardware is exposed to corrosive climate and regular cleaning would keep their life longer. <br /> <br />
                    All hardware used in Sliding windows - Rollers, Multi Point locking, handles locks, Drainage T REX device and Casement for casement windows - Handles,Hinges,Stayarms, Multi point locks from our authorized associates. <br /> <br />
                    Powder coating paint used from either akzoNobel / jotun unless specified and will have 10-25 years of warranty against color fading / peeling off depending on the finish.
                    </p>
                </motion.div>

                <motion.div
                initial={hidden}
                 whileInView={show}
                 viewport={{ once: true }}
                 transition={transition}
                 className={styles.tncText} ref={refs.current[9]}>
                    <p><span>Payment </span>75% Advance along with confirmed order. <br /> <br />
                    20% Before material ready for despatch from International production center <br /> <br />
                    5% on work completion <br /> <br />

                    The Cheque, payable at Mumbai, shall be drawn in favor of <strong>Yantra Aluminium Window Systems Pvt Ltd. Subject to Mumbai Jurisdiction</strong>. <br /> <br />
                    If any clarifications regarding the offer are required; please feel free to contact us at our Office or E-mail us at sales@yantraindia.com
                    </p>
                </motion.div>

                <motion.div
                initial={hidden}
                 whileInView={show}
                 viewport={{ once: true }}
                 transition={transition}
                 className={styles.tncText} ref={refs.current[10]}>
                    <p><span>Installation </span>Additional Cleaning will be charged. <br />
                    Storage at Site: Adequate safe, secured &well ventilated space to be provided by the Client (F.O.C.) <br /> <br />
                    While fixing the windows, we may resort to chipping and removal of plaster prior to anchoring. We will not do re-Plastering at all such location, but will have to be done by the Client. <br /> <br />
                    Electricity connection, wherever required/Installation is carried out, shall be provided free of charge by the Client at site. <br /> <br />
                    Scaffolding, if required, is to be provided free of cost by the Customer at site, erected in position. <br /> <br />
                    All glass movement considered is from either Lift / Staircase. Any additional lifting required from outside building will be in client scope. <br /> <br />
                    If applicable, the place of living for Installation workers with electricity connection & portable water facility shall be provided by the customer free of charge. <br /> <br />
                    In case of site outside Mumbai, in case of outstation site the customer shall make arrangement of stay for our Installation Team at Site, free of Charge.
                    </p>
                </motion.div>

                <motion.div
                initial={hidden}
                 whileInView={show}
                 viewport={{ once: true }}
                 transition={transition}
                 className={styles.tncText} ref={refs.current[11]}>
                    <p><span>Completion Certificate </span>The Buyer will examine the Installation Work done at site and notify the CERTIFIED INSTALLER in writing of any error, damage (Windows/Glasses). <br /> <br />
                    If the customer fails to notify the same within 7 days of Installation the customer shall not be entitled to any claim whatsoever. <br /> <br />
                    On Deduction of TDS, TDS Certificate has to be issued within 1 month from the end of the month as per Income Tax Rule without any further reminder from us.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

export default Tnc;
