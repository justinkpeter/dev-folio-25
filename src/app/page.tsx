import styles from "./page.module.scss";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import PageTransition from "./components/transitions/PageTransition";
import Projects from "./components/projects/Projects";
import Personal from "./components/personal/Personal";
import Contact from "./components/contact/Contact";
import { socials } from "./lib/socials";

export default function Home() {
  return (
    <PageTransition>
      <div className={styles.page}>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Personal />
        <Contact links={socials} />
      </div>
    </PageTransition>
  );
}
