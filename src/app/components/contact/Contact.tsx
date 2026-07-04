"use client";

import Link from "next/link";
import styles from "./Contact.module.scss";

import { BemBuilder } from "@/app/lib/BemBuilder";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface ContactLink {
  label: string;
  value: string;
  href: string;
  icon: IconDefinition;
}

export interface ContactProps {
  /** Eyebrow label, e.g. "Contact" */
  eyebrow?: string;
  description?: string;
  links: ContactLink[];
}

// Convenience presets matching the reference screenshot's default link set.
export const DEFAULT_CONTACT_LINKS: Omit<ContactLink, "href" | "value">[] = [
  { label: "Email", icon: faEnvelope },
  { label: "GitHub", icon: faGithub },
  { label: "LinkedIn", icon: faLinkedin },
];

export default function Contact({
  eyebrow = "Contact",
  description = "You can reach me via the links below.",
  links,
}: ContactProps) {
  const bem = new BemBuilder("contact", styles);

  return (
    <section id="contact" className={bem.block()}>
      <div className={bem.element("content")}>
        <span className={bem.element("eyebrow")}>{eyebrow}</span>
        <p className={bem.element("description")}>{description}</p>

        <ul className={bem.element("links")}>
          {links.map(({ label, value, href, icon }) => (
            <li key={label} className={bem.element("link")}>
              <Link
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={bem.element("linkAnchor")}
              >
                <FontAwesomeIcon
                  icon={icon}
                  className={bem.element("linkIcon")}
                />
                <span className={bem.element("linkLabel")}>{label}</span>
                <span className={bem.element("linkValue")}>
                  {value}
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className={bem.element("linkArrow")}
                  />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
