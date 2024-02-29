import { useState } from "react";
import useWords  from "./UseWords";
import useTimer from "./UseTimer";
import useTypings from "./UseTypings";

export type State = "start" | "run" | "finish";

const numberOfWords = 30;
const timeLimit = 60;

const useEngine = () => {
  const [state, setState] = useState<State>("start");
  const { words, updateWords } = useWords(numberOfWords);
  const { timeLeft } = useTimer(timeLimit);
  const { typed, cursor, clearTyped, resetTotalTyped, totalTyped } = useTypings(
    state !== "finish"
  );

  return { state, words, timeLeft, typed };
}

export default useEngine;