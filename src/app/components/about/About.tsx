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
            in frontend and UI development across SaaS products. I care as much
            about how an interface feels as how it works, and build with an eye
            for composition, constraint, and craft.
          </p>
          <p>
            I'm comfortable with ambiguity, since it leaves room to make good
            calls as things take shape. I favor momentum over perfection in code
            meant to evolve, and I'm equally comfortable defining a direction as
            I am executing on it.
          </p>
        </div>
      </div>
    </section>
  );
}
