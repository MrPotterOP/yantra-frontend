import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import InfiniteScrollImages from "@/components/InfiniteScrollImages/InfiniteScrollImages";
import About from "@/components/About/About";
import Advantages from "@/components/Advantages/Advantages";
import Products from "@/components/Products/Products";
import Projects from "@/components/Projects/Projects";
import Team from "@/components/Team/Team";
import FAQs from "@/components/FAQs/FAQs";
import CTAbanner from "@/components/CTAbanner/CTAbanner";
import Footer from "@/components/Footer/Footer";



export const metadata = {
  title: "Home | Yantra - WINDOWS DOORS SKYLIGHTS BALUSTRADES",
  openGraph: {
    type: 'website',
    title: "Home | Yantra - WINDOWS DOORS SKYLIGHTS BALUSTRADES",
    description: "Discover Yantra's custom home solutions, including doors, windows, balustrades, retractable & fixed glass roofs, and pergolas. We offer lifetime warranties, annual maintenance contracts, and a Pan India presence. Visit us to enhance your living spaces with innovative designs",
    url: 'https://www.yantraindia.com/',
    image: '/images/about.jpg',
  },
  viewport: 'width=device-width, initial-scale=1.0',
  charSet: 'utf-8',
  themeColor: '#FFFFFF',
  mobileWebAppCapable: 'yes',
  language: 'en-US'

}

export default function Home() {


  



  return (
    <main>
      <Navbar />
      <Hero />
      <InfiniteScrollImages />
      <About />
      <Advantages />
      <Products />
      <Projects />
      <Team />
      <FAQs />
      <CTAbanner />
      <Footer />
    </main>
  );
}
