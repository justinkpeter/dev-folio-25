import { projects } from "./lib/projects";

export default function sitemap() {
  const projectRoutes = projects.map((project) => ({
    url: `https://justinpeter.dev/projects/${project.path}`,
    lastModified: new Date(),
  }));

  return [
    { url: "https://justinpeter.dev", lastModified: new Date() },
    { url: "https://justinpeter.dev/projects", lastModified: new Date() },
    ...projectRoutes,
  ];
}
