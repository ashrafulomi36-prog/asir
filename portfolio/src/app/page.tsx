import About from "@/components/About";
import Achievements from "@/components/Achievements";
import Competitive from "@/components/Competitive";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Learning from "@/components/Learning";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import TeachingDemo from "@/components/TeachingDemo";
import { nav, site, teachingDemo } from "@/data/site";

export default function Home() {
  // The Teaching Demo section and its nav link exist only once a video is configured.
  const items = nav.filter((n) => !("optional" in n && n.optional) || teachingDemo !== null);

  return (
    <>
      <Header items={items} brand={site.shortName} />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Learning />
        {teachingDemo && <TeachingDemo demo={teachingDemo} />}
        <Competitive />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
