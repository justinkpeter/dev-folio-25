"use client";

import PageTransition from "../components/transitions/PageTransition";
import styles from "./Projects.module.scss";
import { projects } from "../lib/projects";
import Image from "next/image";
import useParallax from "../hooks/useParallax";
import Link from "next/link";

export default function Projects() {
  const { ref: imageRef, offset } = useParallax(100);

  return (
    <PageTransition>
      <div className={styles.projects}>
        <h1>Projects</h1>
        <div className={styles.container}>
          {projects.map((project, i) => (
            <Link
              href={`/projects/${project.path}`}
              className={styles.projectCard}
              key={project.title}
            >
              <div className={styles.projectImageWrapper} ref={imageRef}>
                <Image
                  src={projects[i].cover}
                  alt={projects[i].title}
                  objectFit="cover"
                  fill
                  style={{ transform: `translateY(${offset}px) scale(1.7)` }}
                />
              </div>
              <div className={styles.projectMeta}>
                <div>{projects[i].title}</div>
                <div>{projects[i].meta}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
