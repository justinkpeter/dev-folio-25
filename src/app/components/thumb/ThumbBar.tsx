import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";
import Marquee from "../marquee/Marquee";
import styles from "./ThumbBar.module.scss";

export default function ThumbBar({
  isOpen,
  toggleOpen,
}: {
  isOpen: boolean;
  toggleOpen: () => void;
}) {
  return (
    <div className={styles.bar}>
      <div className={styles.image}>
        <video src="/memoji.mov" autoPlay loop muted playsInline />
      </div>
      <div className={styles.name}>
        <div>Justin Peter</div>
        <Marquee time={24} pauseOnHover={false}>
          Creative Developer, Maker of Things, Photography Enthusiast, Spotify
          Junkie,
        </Marquee>
      </div>
      <button className={styles.menuButton} onClick={toggleOpen}>
        {isOpen ? <XMarkIcon /> : <Bars3Icon />}
      </button>
    </div>
  );
}
