"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./ProjectCard.module.scss";
import { BemBuilder } from "@/app/lib/BemBuilder";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";

interface ProjectCardProps {
  name: string;
  cover: string;
  meta: string;
  path: string;
  zIndex?: number;
  description?: string;
  url?: string;
}

export default function ProjectCard({
  name,
  cover,
  meta,
  path,
  zIndex,
  description,
  url,
}: ProjectCardProps) {
  const bem = new BemBuilder("projectCard", styles);

  return (
    <Link
      href={url || `/projects/${path}`}
      className={bem.block()}
      data-cursor="View project"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className={bem.element("imageContainer")}>
        <div className={bem.element("image")} style={{ zIndex: zIndex || 1 }}>
          <Image src={cover} alt={meta} fill draggable={false} />
        </div>
      </div>
      <div className={bem.element("info")}>
        <h4>{name}</h4>
        <p>{description}</p>
      </div>
      <div className={bem.element("icon")}>
        <FontAwesomeIcon
          icon={faSquareArrowUpRight}
          className={bem.element("socialIcon")}
          size="lg"
        />
      </div>
    </Link>
  );
}
