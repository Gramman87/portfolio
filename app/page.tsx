import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyMe from "@/components/WhyMe";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <WhyMe />
      <Projects />
      <Skills />
      <Experience />
      <Education />
      <Contact />
    </>
  );
}
