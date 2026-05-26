import { projects } from "@/app/lib/projects";
import ProjectCard from "./ProjectCard";
import styles from "./Projects.module.scss";

export default function Projects() {
  return (
    <div>
      <div className={styles.stickyHeader}>
        <h1>Recent Works</h1>
      </div>
      <div className={styles.projects}>
        {projects.map((project, i) => (
          <ProjectCard
            key={i}
            name={project.title}
            cover={project.cover}
            meta={project.meta}
            path={project.path}
            stack={project.stack}
            description={project.desc}
            zIndex={i + 1}
          />
        ))}
      </div>
    </div>
  );
}
