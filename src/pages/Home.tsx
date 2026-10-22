import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import ServicesMarquee from "../components/Services/ServicesMarquee";
import About from "../components/About/About";
import Projects from "../components/Projects/Projects";
import Experience from "../components/Experience/Experience";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <ServicesMarquee />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default Home;