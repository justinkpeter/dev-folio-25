"use client";

import { BemBuilder } from "@/app/lib/BemBuilder";
import styles from "./Hero.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import BezierCurveLine from "./BezierCurveLine";

export default function Hero() {
  const bem = new BemBuilder("hero", styles);

  return (
    <section className={bem.block()}>
      <div className={bem.element("content")}>
        <div className={bem.element("intro")}>
          <div className={bem.element("role")}>creative developer</div>
          <h1 className={bem.element("name")}>Justin Peter</h1>
          <div className={bem.element("tagline")}>
            A builder and engineer who never loses sight of who the work is for.
          </div>
          <div className={bem.element("availability")}>
            Currently looking for the next big thing to work on.
          </div>
        </div>
        <div className={bem.element("meta")}>
          <div className={bem.element("location")}>Piedmont Triad, NC</div>
          <div className={bem.element("socials")}>
            <FontAwesomeIcon
              icon={faLinkedin}
              className={bem.element("socialIcon")}
            />
            <FontAwesomeIcon
              icon={faGithub}
              className={bem.element("socialIcon")}
            />
            <FontAwesomeIcon
              icon={faInstagram}
              className={bem.element("socialIcon")}
            />
          </div>
        </div>
        <BezierCurveLine strength={0.25} />
      </div>
    </section>
  );
}
