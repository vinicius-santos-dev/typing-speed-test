import Cursor from "../Cursor/Cursor";
import styles from "./UserTypings.module.scss";

export default function UserTypings({ userInput }: { userInput: string }) {
  const typedChars = userInput.split("");

  return (
    <div className={styles["c-user-typings"]}>
      {typedChars.map((char, index) => {
        return <span key={`${char}_${index}`}>{char}</span>;
      })}

      <Cursor />
    </div>
  );
}
