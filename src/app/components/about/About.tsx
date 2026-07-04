"use client";

import { BemBuilder } from "@/app/lib/BemBuilder";
import styles from "./About.module.scss";

export default function About() {
  const bem = new BemBuilder("about", styles);

  return (
    <section id="about" className={bem.block()}>
      <div className={bem.element("content")}>
        <span className={bem.element("eyebrow")}>About</span>
        <div className={bem.element("bio")}>
          <p>
            I'm a full-stack software engineer with{" "}
            {new Date().getFullYear() - 2020}+ years of experience specializing
            in frontend and UI development across SaaS products. Alongside
            engineering, I've spent the past several years working as a
            photographer and videographer, a background that shapes how I think
            about interfaces, since composition, constraints, and delivery
            matter as much on screen as they do behind a lens.
          </p>
          <p>
            I'm comfortable navigating ambiguity when specs aren't fully
            defined. I believe in intentional progress over perfection,
            especially in code that's meant to evolve. Using Atomic Design
            methodologies with a composition over configuration approach means
            that I'm familiar with making both design and engineering decisions,
            with no spec to follow but the system I'm building.
          </p>
        </div>
      </div>
    </section>
  );
}
