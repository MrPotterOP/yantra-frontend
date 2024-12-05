import CTAbanner from "@/components/CTAbanner/CTAbanner";
import Footer from "@/components/Footer/Footer";
import Products from "@/components/Products/Products";

import Header from "@/components/Contact/Header";
import ContactForm from "@/components/Contact/ContactForm";
import ProjectSlider from "@/components/Projects/ProjectsSlider";
import StickyBtns from "@/components/StickyBtns/StickyBtns";

export default function Contact() {
    return (
        <main>
            <Header />
            <ContactForm />
            <ProjectSlider />
            <Products />
            <StickyBtns />

            <CTAbanner />
            <Footer />
        </main>
    );
}

