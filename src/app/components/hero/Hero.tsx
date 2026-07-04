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
import Link from "next/link";

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
            <Link
              href="https://www.linkedin.com/in/justinkmpeter"
              target="_blank"
              className={bem.element("socialLink")}
              title="LinkedIn"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className={bem.element("socialIcon")}
              />
            </Link>
            <Link
              href="https://github.com/justinkpeter"
              target="_blank"
              className={bem.element("socialLink")}
              title="GitHub"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className={bem.element("socialIcon")}
              />
            </Link>
            <Link
              href="https://www.instagram.com/justincrediblemoments"
              target="_blank"
              className={bem.element("socialLink")}
              title="Instagram"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className={bem.element("socialIcon")}
              />
            </Link>
          </div>
          <div className={bem.element("curve")}>
            <BezierCurveLine strength={0.25} />
          </div>
        </div>
      </div>
    </section>
  );
}
