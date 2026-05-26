import PageTransition from "@/app/components/transitions/PageTransition";
import styles from "./SelectedProject.module.scss";
import { projects } from "@/app/lib/projects";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default async function SelectedProject({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const selectedProject = projects.find((project) => project.path === slug);
  const imagePath = "/img/projects/" + slug + "/";

  return (
    <PageTransition>
      <h1 className={styles.projectTitle}>{selectedProject?.title || slug}</h1>
      <div className={styles.selectedProject}>
        <div className={styles.projectDetails}>
          <div className={styles.techStack}>
            <h4>Tech Stack</h4>
            <ul>
              {selectedProject?.stack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </div>
          <div className={styles.summary}>
            <h4>Description</h4>
            <p>{selectedProject?.desc}</p>
            <Link
              href={selectedProject?.url || "#"}
              className={styles.projectLink}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="take me there"
            >
              visit site <ArrowUpRightIcon strokeWidth={3} />
            </Link>
          </div>
        </div>
        <div className={styles.projectViews}>
          {[1, 2, 3, 4].map((num) => (
            <div key={num} className={styles.imageContainer}>
              <img
                src={imagePath + num + ".png"}
                alt={selectedProject?.title}
                className={styles.projectImage}
              />
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
