import styles from "./HoverSlideText.module.scss";

type HoverSlideTextProps = {
  text: string;
  className?: string;
};

export default function HoverSlideText({
  text,
  className = "",
}: HoverSlideTextProps) {
  return (
    <div className={`${styles.container} ${className}`}>
      <span className={styles.wrapper}>
        <span className={styles.text}>{text}</span>
        <span className={styles.text}>{text}</span>
      </span>
    </div>
  );
}
