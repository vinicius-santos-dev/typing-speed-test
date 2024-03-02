import { useCallback, useEffect, useState } from "react";
import useWords from "./UseWords";
import useTimer from "./UseTimer";
import useTypings from "./UseTypings";
import { countCorrectWords, countWrongWords } from "../Utils/Helpers";

export type State = "start" | "run" | "finish";

const numberOfWords = 30;
const timeLimit = 10;

const useEngine = () => {
  const [state, setState] = useState<State>("start");
  const { words, updateWords } = useWords(numberOfWords);
  const { timeLeft, startCountdown, resetCountdown } = useTimer(timeLimit);
  const { typed, cursor, clearTyped, resetTotalTyped, totalTyped } = useTypings(
    state !== "finish"
  );
  const [wrongWords, setWrongWords] = useState(0);
  const [correctWords, setCorrectWords] = useState(0);

  const isStarting = state === "start" && cursor > 0;
  const areWordsFinished = cursor === words.length;

  const sumCorrectWords = useCallback(() => {
    const wordsReached = words.substring(0, cursor);
    setCorrectWords((prevCorrectWords) => prevCorrectWords + countCorrectWords(typed, wordsReached));
  }, [typed, words, cursor]);

  const sumWrongWords = useCallback(() => {
    const wordsReached = words.substring(0, cursor);

    setWrongWords((prevWrongWords) => prevWrongWords + countWrongWords(typed, wordsReached));
  }, [typed, words, cursor]);

  // as soon user starts typing, start timer
  useEffect(() => {
    if (isStarting) {
      setState("run");
      startCountdown();
    }
  }, [isStarting, startCountdown, cursor]);

  //when the time is up, stop the timer
  useEffect(() => {
    if (timeLeft === 0) {
      setState("finish");
      sumCorrectWords();
      sumWrongWords();
    }
  }, [timeLeft, sumCorrectWords, sumWrongWords, resetCountdown]);

  //when the words are all filled up, generate new words
  useEffect(() => {
    if (areWordsFinished) {
      sumCorrectWords();
      sumWrongWords();
      updateWords();
      clearTyped();
    }
  }, [
    cursor,
    words,
    clearTyped,
    typed,
    areWordsFinished,
    updateWords,
    sumCorrectWords,
    sumWrongWords,
  ]);

  const restart = useCallback(() => {
    setState("start");
    resetCountdown();
    resetTotalTyped();
    setState("start");
    setCorrectWords(0);
    setWrongWords(0);
    updateWords();
    clearTyped();
  }
  , [clearTyped, updateWords, resetCountdown, resetTotalTyped]);

  return { state, words, timeLeft, typed, correctWords, wrongWords, totalTyped, restart };
};

export default useEngine;
