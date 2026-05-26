import styles from "./Footer.module.scss";
import HoverSlideText from "../typography/HoverSlideText";
import Link from "next/link";
import clsx from "clsx";

export default function Footer() {
  return (
    <div className={styles.footerWrapper}>
      <div id="contact" className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.navigation}>
            <div className={styles.contact}>
              <div className={styles.cta}>
                want to reach out? don&apos;t be shy
              </div>
              <HoverSlideText className={clsx(styles.email)}>
                <a href="mailto:hello@justinpeter.dev">hello@justinpeter.dev</a>
              </HoverSlideText>
            </div>
            <div className={styles.links}>
              <div className={styles.navigationTitle}>navigation</div>
              <Link href="/">
                <HoverSlideText text="Home" />
              </Link>
              <Link href="/about">
                <HoverSlideText text="About" />
              </Link>
              <Link href="/resume">
                <HoverSlideText text="Resume" />
              </Link>
              <Link href="/projects">
                <HoverSlideText text="Projects" />
              </Link>
            </div>
            <div className={styles.socials}>
              <div className={styles.navigationTitle}>socials</div>
              <Link
                href="https://www.linkedin.com/in/justinkmpeter/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <HoverSlideText text="LinkedIn" />
              </Link>
              <Link
                href="https://github.com/justinkpeter/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <HoverSlideText text="Github" />
              </Link>
              <Link
                href="https://www.instagram.com/justincrediblemoments/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <HoverSlideText text="Instagram" />
              </Link>
            </div>
          </div>
          <div className={styles.copyright}>
            <div className={styles.devFolio}> Dev Folio</div>
            <div>© {new Date().getFullYear()}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
