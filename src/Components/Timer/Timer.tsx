import styles from "./Timer.module.scss";

export default function Timer({ timeLeft }: { timeLeft: number }) {
  return <span className={styles["c-timer"]}>Time Left: {timeLeft}s</span>;
}
