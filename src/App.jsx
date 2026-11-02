import CustomCursor from "@/components/CustomCursor";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Experience from "@/sections/Experience";
import Education from "@/sections/Education";
import Projects from "@/sections/Projects";
import Technologies from "@/sections/Technologies";
import Contact from "@/sections/Contact";

export default function App() {
  return (
    <main id="top">
      <CustomCursor />
      <Header />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Projects />
      <Technologies />
      <Contact />
      <Footer />
    </main>
  );
}
