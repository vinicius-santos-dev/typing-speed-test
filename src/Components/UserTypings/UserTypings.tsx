import styles from "./UserTypings.module.scss";

export default function UserTypings({
  userInput,
  words,
}: {
  userInput: string;
  words: string;
}) {
  const typedChars = userInput.split("");

  return (
    <div className={styles["c-user-typings"]}>
      {typedChars.map((char, index) => {
        return (
          <Character
            key={`${char}_${index}`}
            actual={char}
            expected={words[index]}
          ></Character>
        );
      })}
      {/* <Cursor /> */}
    </div>
  );
}

function Character({ actual, expected }: { actual: string; expected: string }) {
  const isCorrect = actual === expected;
  const isWhiteSpace = expected === " ";

  return (
    <span
      className={
        isCorrect && !isWhiteSpace
          ? styles["success"]
          : !isCorrect && !isWhiteSpace
          ? styles["error"]
          : !isCorrect && isWhiteSpace ?
          styles["whitespace"] : ""
      }
    >
      {expected}
    </span>
  );
}
