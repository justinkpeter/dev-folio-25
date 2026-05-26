import styles from "./page.module.scss";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import PageTransition from "./components/transitions/PageTransition";
import Projects from "./components/projects/Projects";

export default function Home() {
  return (
    <PageTransition>
      <div className={styles.page}>
        <Hero />
        <Projects />
        <About />
        <Experience />
      </div>
    </PageTransition>
  );
}
