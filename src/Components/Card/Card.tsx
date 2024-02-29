import styles from "./Card.module.scss";
import Timer from "../Timer/Timer";
import GeneratedWords from "../GeneratedWords/GeneratedWords";
import RestartButton from "../RestartButton/RestartButton";
import Results from "../Results/Results";
import { useState } from "react";
import UserTypings from "../UserTypings/UserTypings";
import useEngine from "../../Hooks/UseEngine";

export default function Card() {
  const { state, words, timeLeft, typed } = useEngine();

  // const [timeLeft, setTimeLeft] = useState(60);

  // function handleTimeLeft() {
  //   if (timeLeft > 0) {
  //     setTimeLeft(timeLeft - 1);
  //   }
  // }

  // setTimeout(handleTimeLeft, 1000);

  function handleClick() {
    console.log("Restart");
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

          {timeLeft === 0 && (
            <Results
              wpm={75}
              // correctTyped={380}
              // wrongTyped={0}
              totalTyped={380}
              correctWords={75}
              wrongWords={0}
              accuracy={100}
            />
          )}

          <RestartButton onRestart={handleClick} />
        </div>
      </div>
    </div>
  );
}
