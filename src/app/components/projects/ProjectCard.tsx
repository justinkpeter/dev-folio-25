"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./ProjectCard.module.scss";
import useParallax from "@/app/hooks/useParallax";

interface ProjectCardProps {
  name: string;
  cover: string;
  meta: string;
  path: string;
  stack: string[];
  zIndex?: number;
  description?: string;
}

export default function ProjectCard({
  name,
  cover,
  meta,
  path,
  zIndex,
  stack,
  description,
}: ProjectCardProps) {
  const { ref, offset } = useParallax(100);

  return (
    <Link
      href={`/projects/${path}`}
      className={styles.projectCard}
      data-cursor="View project"
    >
      <div className={styles.projectCardInfo}>
        <div>
          <h2>{name}</h2>
          <div className={styles.techStack}>
            <h6>tech stack</h6>
            <ul>
              {stack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </div>
          <div className={styles.description}>
            <h6>description</h6>
            <p>{description}</p>
          </div>
        </div>
        <span className={styles.projectCardLink}>View Project</span>
      </div>
      <div
        ref={ref}
        className={styles.projectCardImage}
        style={{ zIndex: zIndex || 1 }}
      >
        <Image
          src={cover}
          alt={meta}
          fill
          draggable={false}
          style={{ transform: `translateY(${offset}px) scale(1.4)` }}
        />
      </div>
    </Link>
  );
}
