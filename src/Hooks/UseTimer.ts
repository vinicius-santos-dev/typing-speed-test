import { useEffect, useState } from "react";

const useTimer = (seconds: number) => {
  const [timeLeft, setTimeLeft] = useState<number>(seconds);

  useEffect(() => {
    const timerId = setTimeout(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 1);
      }
    }, 1000);

    return () => clearTimeout(timerId);
  }, [timeLeft]);

  return { timeLeft };
};

export default useTimer;
