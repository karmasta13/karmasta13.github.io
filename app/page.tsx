import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Work from "@/components/Work";
import Experience from "@/components/Experience";
import Writing from "@/components/Writing";
import Speaking from "@/components/Speaking";
import Awards from "@/components/Awards";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CvRequestModal from "@/components/CvRequest";
import FloatingActions from "@/components/FloatingActions";

export default function Home() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <About index={1} />
        <Work index={2} />
        <Experience index={3} />
        <Writing index={4} />
        <Speaking index={5} />
        <Awards index={6} />
        <Projects index={7} />
        <Contact index={8} />
      </main>
      <Footer />
      <CvRequestModal />
      <FloatingActions />
    </>
  );
}
