import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import InfiniteScrollImages from "@/components/InfiniteScrollImages/InfiniteScrollImages";
import About from "@/components/About/About";
import Advantages from "@/components/Advantages/Advantages";
import Products from "@/components/Products/Products";
import Services from "@/components/Services/Services";
import Projects from "@/components/Projects/Projects";
import Team from "@/components/Team/Team";
import FAQs from "@/components/FAQs/FAQs";
import CTAbanner from "@/components/CTAbanner/CTAbanner";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <InfiniteScrollImages />
      <About />
      <Advantages />
      <Services />
      <Products />
      <Projects />
      <Team />
      <FAQs />
      <CTAbanner />
      <Footer />
    </main>
  );
}
