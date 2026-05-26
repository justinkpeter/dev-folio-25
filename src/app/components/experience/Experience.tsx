import Link from "next/link";
import styles from "./Experience.module.scss";
import experience from "@/app/lib/experience";

export default function Experience() {
  return (
    <div className={styles.experience}>
      <div className={styles.title}>experience</div>
      <div className={styles.experience__list}>
        {experience.map((item, index) => (
          <div key={index} className={styles.experience__item}>
            <div className={styles.experience__position}>{item.position}</div>
            <div className={styles.experience__details}>
              <div>{item.company}</div>
              <div>◼︎</div>
              <div>{item.dates}</div>
            </div>
            <div className={styles.experience__stack}>
              {item.stack.map((tech) => (
                <span key={tech} className={styles.experience__tag}>
                  {tech}
                  {item.stack.indexOf(tech) !== item.stack.length - 1 && " // "}
                </span>
              ))}
            </div>
            <div className={styles.experience__description}>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
        <div className={styles.experience__resume}>
          <Link href="/resume" target="_blank" data-cursor="View resume">
            View Resume
          </Link>
        </div>
      </div>
    </div>
  );
}
