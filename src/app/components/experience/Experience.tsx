import Link from "next/link";
import styles from "./Experience.module.scss";
import experience from "@/app/lib/experience";
import { BemBuilder } from "@/app/lib/BemBuilder";

export default function Experience() {
  const bem = new BemBuilder("experience", styles);
  const experienceImg = (company: string) =>
    `/img/experience/${company.toLowerCase().replace(/\s+/g, "_")}.jpeg`;

  return (
    <section id="experience" className={bem.block()}>
      <div className={bem.element("content")}>
        <span className={bem.element("eyebrow")}>Experience</span>
        <div className={bem.element("bio")}>
          {experience.map((item, index) => (
            <div key={index} className={bem.element("item")}>
              <div className={bem.element("dates")}>{item.dates}</div>
              <div className={bem.element("job")}>
                <div className={bem.element("position")}>
                  <span>{item.position}</span>
                  <div className={bem.element("company")}>
                    <img
                      src={experienceImg(item.company)}
                      alt={item.company}
                      className={bem.element("logo")}
                    />
                    {item.company}
                  </div>
                </div>
                <div className={bem.element("description")}>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
          <div className={bem.element("resume")}>
            <Link href="/resume" target="_blank" data-cursor="View resume">
              See Resume
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
