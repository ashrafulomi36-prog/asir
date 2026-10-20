import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { LearningResources } from "@/components/sections/LearningResources";
import { TeachingDemo } from "@/components/sections/TeachingDemo";
import { Skills } from "@/components/sections/Skills";
import { ExperienceEducation } from "@/components/sections/ExperienceEducation";
import { CompetitiveProgramming } from "@/components/sections/CompetitiveProgramming";
import { Achievements } from "@/components/sections/Achievements";
import { CertificationsLeadership } from "@/components/sections/CertificationsLeadership";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <LearningResources />
        <TeachingDemo />
        <Skills />
        <ExperienceEducation />
        <CompetitiveProgramming />
        <Achievements />
        <CertificationsLeadership />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
