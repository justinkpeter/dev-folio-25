import styles from "./About.module.scss";

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.aboutTitle}>
        <span className={styles.label}>About</span>
      </div>
      <div className={styles.aboutContainer}>
        <p>
          Anyone can center a div— I'm more interested in centering an
          experience. My work isn't just about where a button sits, but about
          how the person behind the screen feels.
        </p>
        <p>
          Imagination is how I process the world, connect with people, and build
          things that shouldn't work — but somehow do. I've collaborated with
          product teams and engineering squads to bring concepts to life,
          blending creativity with clean, intentional purpose.
        </p>
        <p>
          Outside of code, I'm a photography enthusiast, a Spotify junkie, and a
          Fortnite player who takes it way too seriously. Winning under
          pressure? Kinda my thing.
        </p>
      </div>
    </section>
  );
}
