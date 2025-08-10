import styles from "./ThumbMenu.module.scss";
import clsx from "clsx";
import NavLink from "./NavLink";

const links = [
  {
    href: "/",
    imageSrc: "/img/portfolio.png",
    imageAlt: "Home",
    text: "Home",
  },
  {
    href: "/projects",
    imageSrc: "/img/projects.png",
    imageAlt: "Projects",
    text: "Projects",
  },
  {
    href: "/about",
    imageSrc: "/img/about.png",
    imageAlt: "About",
    text: "About",
  },
];

export default function ThumbMenu({ isOpen }: { isOpen: boolean }) {
  return (
    <div className={clsx(styles.menu, { [styles.open]: isOpen })}>
      <nav>
        {links.map((link) => (
          <NavLink key={link.href} {...link} isOpen={isOpen} />
        ))}
        <hr />
      </nav>
    </div>
  );
}
