import styles from "./GeneratedWords.module.scss";

export default function GeneratedWords({ words }: { words: string }) {
  return <p className={styles["c-words"]}>{words}</p>;
}
