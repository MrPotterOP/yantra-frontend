'use client';

import styles from './styles.module.css';
import Image from 'next/image';
import { useState } from 'react';

import { useRouter } from 'next/navigation';



import Link from 'next/link';
import submitJson from "submitjson";

function ContactForm() {

    const router = useRouter();


    const redirectToThankyou = (name) => {
        sessionStorage.setItem('name', name);
        router.push('/thankyou');
    };

    const sj = new submitJson({
        apiKey: process.env.NEXT_PUBLIC_SUBMIT_JSON_KEY,
        endpoint: process.env.NEXT_PUBLIC_SUBMIT_JSON_ENDPOINT
    });

    const [formErrors, setFormErrors] = useState({});

    // const [formData, setFormData] = useState({
    //     name: '',
    //     mobile: '',
    //     email: '',
    //     state: '',
    //     role: '',
    //     requirement: ''
    // });

    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: '',
        city: '',
        role: '',
        requirement: ''
    });
    
    const [submitStatus, setSubmitStatus] = useState({
        show: false,
        success: false,
        loading: false,
        message: ''
    });

    // const validateInput = (field, value) => {
    //     let error = '';
    //     switch (field) {
    //         case 'name':
    //             if (!value.trim()) error = "Name is required.";
    //             break;
    //         case 'mobile':
    //             if (!/^\d{10}$/.test(value)) error = "Mobile number should be 10 digits long.";
    //             break;
    //         case 'email':
    //             if (!/^[\w.%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) error = "Invalid email address.";
    //             break;
    //         case 'state':
    //             if (value === 'Select State') error = "Please select a valid state.";
    //             break;
    //         case 'role':
    //             if (value === 'Select Role') error = "Please select a valid role.";
    //             break;
    //         case 'requirement':
    //             if (value === 'Select Requirement') error = "Please select a valid requirement.";
    //             break;
    //         default:
    //             break;
    //     }
    //     setFormErrors((prev) => ({ ...prev, [field]: error }));
    // };

    const validateInput = (field, value) => {
        let error = '';
        switch (field) {
            case 'name':
                if (!value.trim()) error = "Name is required.";
                break;
            case 'mobile':
                if (!/^\d{10}$/.test(value)) error = "Mobile number should be 10 digits long.";
                break;
            case 'email':
                if (!/^[\w.%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) error = "Invalid email address.";
                break;
            case 'city':
                if (!value.trim()) error = "City is required.";
                break;
            case 'role':
                if (value === 'Select Role') error = "Please select a valid role.";
                break;
            case 'requirement':
                if (value === 'Select Requirement') error = "Please select a valid requirement.";
                break;
            default:
                break;
        }
        setFormErrors((prev) => ({ ...prev, [field]: error }));
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        validateInput(name, value);
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     // Validate all inputs before submission
    //     Object.keys(formData).forEach((key) => validateInput(key, formData[key]));

    //     // Check if there are any errors
    //     const hasErrors = Object.values(formErrors).some((error) => error !== '');

    //     if (!hasErrors) {
    //         // Set loading state
    //         setSubmitStatus({
    //             show: true,
    //             success: false,
    //             loading: true,
    //             message: 'Submitting your enquiry...'
    //         });

    //         console.log("Form data ready for submission:", formData);

    //         // Submit the form data using the submitJson instance
    //         sj.submit(formData)
    //             .then((response) => {
    //                 if (response.data){
    //                     console.log("Form submitted successfully:", response);
    //                     setSubmitStatus({
    //                         show: true,
    //                         success: true,
    //                         loading: false,
    //                         message: 'Your enquiry has been submitted successfully!'
    //                     });
    //                 }else {
    //                     console.error("Error submitting form:");
    //                     setSubmitStatus({
    //                         show: true,
    //                         success: false,
    //                         loading: false,
    //                         message: 'Failed to submit enquiry. Please try again. or just sent your querry at sales@yantraindia.com'
    //                     });

    //                 }
                    
    //                 // Reset form after successful submission
    //                 setFormData({
    //                     name: '',
    //                     mobile: '',
    //                     email: '',
    //                     state: 'Select State',
    //                     role: 'Select Role',
    //                     requirement: 'Select Requirement'
    //                 });
    //             })
    //             .catch((error) => {
    //                 console.error("Error submitting form:", error);
    //                 setSubmitStatus({
    //                     show: true,
    //                     success: false,
    //                     loading: false,
    //                     message: 'Failed to submit enquiry. Please try again. or just sent your querry at sales@yantraindia.com'
    //                 });
    //             });
    //     } else {
    //         console.log("Please fix form errors before submitting:", formErrors);
    //     }
    // };

    const handleSubmit = (e) => {
        e.preventDefault();

        Object.keys(formData).forEach((key) => validateInput(key, formData[key]));

        const hasErrors = Object.values(formErrors).some((error) => error !== '');

        if (!hasErrors) {
            setSubmitStatus({
                show: true,
                success: false,
                loading: true,
                message: 'Submitting your enquiry...'
            });

            sj.submit(formData)
                .then((response) => {
                    if (response.data) {
                        setSubmitStatus({
                            show: true,
                            success: true,
                            loading: false,
                            message: 'Your enquiry has been submitted successfully!'
                        });

                        redirectToThankyou(formData.name);

                        setFormData({
                            name: '',
                            mobile: '',
                            email: '',
                            city: '',
                            role: '',
                            requirement: ''
                        });
                    } else {
                        setSubmitStatus({
                            show: true,
                            success: false,
                            loading: false,
                            message: 'Failed to submit enquiry. Please try again or email us at sales@yantraindia.com'
                        });
                    }
                })
                .catch((error) => {
                    setSubmitStatus({
                        show: true,
                        success: false,
                        loading: false,
                        message: 'Failed to submit enquiry. Please try again or email us at sales@yantraindia.com'
                    });
                });
        }
    };

    const closeStatusPopup = () => {
        setSubmitStatus({ ...submitStatus, show: false });
    };

    return (
        <section id={styles.contactForm}>
            <div className={styles.contactFormAddress}>
                <div className={styles.contactFormAddress}>
                    <div className={styles.addressBox}>
                        <div className={styles.address}>
                            <p className={styles.linkTitle}>ADDRESS</p>
                            <p>1203, Aston Building, SunderVan Complex Road, Shastri Nagar, Above Mercedes Showroom, Andheri West, Mumbai - 400053</p>
                        </div>
                        <div className={styles.address}>
                            <p className={styles.linkTitle}>SOCIALS</p>

                            <div className={styles.socials}>
                                <Link href={"https://www.instagram.com/yantrawindows/?hl=en"} target="_blank" rel="noreferrer" data-hover="Instagram"><Image src="/images/insta.png" alt="Instagram" width={28} height={28} /></Link>
                                <Link href={"https://www.facebook.com/YantraMumbai/"} target="_blank" rel="noreferrer" data-hover="Facebook"><Image src="/images/fb.png" alt="Facebook" width={28} height={28} /></Link>
                                <Link href={"https://www.linkedin.com/company/yantra-aluminium-window-systems-private-limited/mycompany/"} target="_blank" rel="noreferrer" data-hover="LinkedIn"><Image src="/images/linkedin.png" alt="LinkedIn" width={28} height={28} /></Link>
                                <Link href={"https://www.youtube.com/channel/UC0l8ePP0WfD791MVF4dzwBA"} target="_blank" rel="noreferrer" data-hover="Youtube"><Image src="/images/yt.png" alt="Youtube" width={24} height={24} /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.contactFormBox}>
            {submitStatus.show && (
                            <div
                                className={`${styles.formPopup} ${submitStatus.success ? styles.success : (submitStatus.loading ? styles.loading : styles.error)}`}
                            >
                                <div className={styles.formPopupContent}>
                                    {submitStatus.loading ? (
                                        <div className={styles.loadingSpinner}>
                                            <div className={styles.spinner}></div>
                                            <p>{submitStatus.message}</p>
                                        </div>
                                    ) : (
                                        <>
                                            <p>{submitStatus.message}</p>
                                            <button onClick={closeStatusPopup}>Okay</button>
                                        </>
                                    )}
                                </div>
                            </div>
                        )}

                        <form onSubmit={handleSubmit}>
                            <p className={styles.linkTitle}>ENQUIRY FORM</p>
                            <div className={styles.formInputs}>
                            <div className={styles.inputBox}>
                             <label className={`${formData.name ? styles.active : ''}`}>Name</label>
                             <input
                                 type="text"
                                 name="name"
                                 value={formData.name}
                                 onChange={handleInputChange}
                                 placeholder="Name: John Doe"
                                 required
                             />
                             {formErrors.name && <p className={styles.error}>{formErrors.name}</p>}
                         </div>
                         <div className={styles.inputBox}>
                             <label className={`${formData.mobile ? styles.active : ''}`}>Mobile No.</label>
                             <input
                                 type="text"
                                 name="mobile"
                                 value={formData.mobile}
                                 onChange={handleInputChange}
                                 placeholder="Mobile No: 9292929292"
                                 required
                             />
                             {formErrors.mobile && <p className={styles.error}>{formErrors.mobile}</p>}
                         </div>
                         <div className={styles.inputBox}>
                             <label className={`${formData.email ? styles.active : ''}`}>Email</label>
                             <input
                                 type="email"
                                 name="email"
                                 value={formData.email}
                                 onChange={handleInputChange}
                                 placeholder="Email: mail@example.com"
                                 required
                             />
                             {formErrors.email && <p className={styles.error}>{formErrors.email}</p>}
                         </div>
                                <div className={styles.inputBox}>
                                    <label className={`${formData.city ? styles.active : ''}`}>City</label>
                                    <input
                                        type="text"
                                        name="city"
                                        value={formData.city}
                                        onChange={handleInputChange}
                                        placeholder="City: Mumbai"
                                        required
                                    />
                                    {formErrors.city && <p className={styles.error}>{formErrors.city}</p>}
                                </div>
                            <div className={styles.inputBox}>
                             <label className={`${formData.role ? styles.active : ''}`}>Your Role</label>
                             <select
                                 name="role"
                                 value={formData.role}
                                 onChange={handleInputChange}
                                 required
                             >
                                 <option value="Select Role">Select Role</option>
                                 <option value="Home Owner">Home Owner</option>
                                 <option value="Interior Designer">Interior Designer</option>
                                 <option value="Architect">Architect</option>
                                 <option value="Project Management Consultant">Project Management Consultant</option>
                                 <option value="Others">Others</option>

                             </select>
                             {formErrors.role && <p className={styles.error}>{formErrors.role}</p>}
                         </div>
                         <div className={styles.inputBox}>
                             <label className={`${formData.requirement ? styles.active : ''}`}>Your Requirement</label>
                             <select
                                 name="requirement"
                                 value={formData.requirement}
                                 onChange={handleInputChange}
                                 required>
                                 <option value="Select Requirement">Select Requirement</option>
                                 <option value="Design">Design</option>
                                 <option value="Architecture">Architecture</option>
                                 <option value="Interior">Interior</option>
                                 <option value="Construction">Construction</option>
                             </select>
                             {formErrors.requirement && <p className={styles.error}>{formErrors.requirement}</p>}
                         </div>
                            </div>
                            <button className={styles.cta} type="submit">
                                <p>ENQUIRE NOW</p>
                                <Image src="/images/arrow.png" alt="Arrow" width={28} height={28} />
                            </button>
                        </form>
            </div>
        </section>
    );
}

export default ContactForm;