import { State } from "../../Hooks/UseEngine";
import styles from "./Results.module.scss";

export default function Results({
  wpm,
  correctTyped,
  wrongTyped,
  totalTyped,
  correctWords,
  wrongWords,
  accuracy,
  state,
}: {
  wpm: number;
  correctTyped: number;
  wrongTyped: number;
  totalTyped: number;
  correctWords: number;
  wrongWords: number;
  accuracy: number;
  state: State;
}) {
  if (state !== "finish") {
    return null;
  }

  return (
    <div className={styles["c-results"]}>
      <p className={styles["success"]}>{wpm} WPM</p>
      <p>
        Typed: {totalTyped} (
        <span className={styles["success"]}>{correctTyped}</span> |
        <span className={styles["fail"]}> {wrongTyped}</span>)
      </p>
      <p>
        Correct words: <span className={styles["success"]}>{correctWords}</span>
      </p>
      <p>
        Wrong words: <span className={styles["fail"]}>{wrongWords}</span>
      </p>
      <p>Accuracy: {accuracy}%</p>
    </div>
  );
}
