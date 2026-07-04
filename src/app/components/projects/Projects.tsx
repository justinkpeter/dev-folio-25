import { projects } from "@/app/lib/projects";
import ProjectCard from "./ProjectCard";
import styles from "./Projects.module.scss";
import { BemBuilder } from "@/app/lib/BemBuilder";

export default function Projects() {
  const bem = new BemBuilder("projects", styles);
  return (
    <section id="projects" className={bem.block()}>
      <div className={bem.element("content")}>
        <span className={bem.element("eyebrow")}>Recent Works</span>
        <div className={bem.element("list")}>
          {projects.slice(0, 3).map((project, i) => (
            <ProjectCard
              key={i}
              name={project.title}
              cover={project.cover}
              meta={project.meta}
              path={project.path}
              description={project.desc}
              url={project.url}
              zIndex={i + 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
