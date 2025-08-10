import Link from "next/link";
import HoverSlideText from "../typography/HoverSlideText";
import styles from "./NavLink.module.scss";
import clsx from "clsx";

type Props = {
  href: string;
  imageSrc: string;
  imageAlt: string;
  text: string;
  isOpen?: boolean;
};

export default function NavLink({
  href,
  imageSrc,
  imageAlt,
  text,
  isOpen,
}: Props) {
  return (
    <Link
      href={href}
      className={clsx(styles.navLink, { [styles.open]: isOpen })}
      title={text}
    >
      <div className={styles.navLink__image}>
        <img src={imageSrc} alt={imageAlt} />
      </div>
      <div className={styles.navLink__textContainer}>
        {isOpen && (
          <HoverSlideText text={text} className={styles.navLink__text} />
        )}
      </div>
    </Link>
  );
}
