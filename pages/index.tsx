
import AboutMe from "./components/mainComponent/AboutMe";
import Contact from "./components/mainComponent/Contact";
import Hero from "./components/mainComponent/Hero";
import Projects from "./components/mainComponent/Projects";
import Skills from "./components/mainComponent/Skills";
import { MainLayout } from "./layouts/MainLayout";
import Section from "./layouts/Section";


export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <Section id="about" title="About Me">
        <AboutMe />
      </Section>
      <Section id="skills" title="Skills">
        <Skills />
      </Section>
      <Section id="projects" title="Projects">
        <Projects />
      </Section>
      <Section id="contact" title="Contact">
        <Contact />
      </Section>
    </MainLayout>
  );
}
