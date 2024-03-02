import styles from "./Card.module.scss";
import Timer from "../Timer/Timer";
import GeneratedWords from "../GeneratedWords/GeneratedWords";
import RestartButton from "../RestartButton/RestartButton";
import Results from "../Results/Results";
import UserTypings from "../UserTypings/UserTypings";
import useEngine from "../../Hooks/UseEngine";
import { calulateAccuracyPercentage } from "../../Utils/Helpers";

export default function Card() {
  const {
    state,
    words,
    timeLeft,
    typed,
    correctWords,
    wrongWords,
    totalTyped,
    restart,
  } = useEngine();

  function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    console.log("event", e);
    
    e.currentTarget.blur();
    restart();
  }

  return (
    <div className={styles["c-card"]}>
      <div className={styles["c-card__container"]}>
        <div className={styles["c-card__main"]}>
          <GeneratedWords words={words} />
          <UserTypings userInput={typed} words={words} />
        </div>
        <div className={styles["c-card__footer"]}>
          <Timer timeLeft={timeLeft} />

          <Results
            wpm={correctWords + wrongWords}
            // correctTyped={380}
            // wrongTyped={0}
            totalTyped={totalTyped}
            correctWords={correctWords}
            wrongWords={wrongWords}
            accuracy={calulateAccuracyPercentage(wrongWords, totalTyped)}
            state={state}
          />

          <RestartButton onRestart={handleClick} />
        </div>
      </div>
    </div>
  );
}
