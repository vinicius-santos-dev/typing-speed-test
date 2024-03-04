export function countCorrectWords(actual: string, expected: string) {
  const actualWords = actual.split(" ");
  const expectedWords = expected.split(" ");

  return expectedWords.reduce(
    (correctWords: number, expectedWord: string, i: number) => {
      const actualWord = actualWords[i];
      if (
        actualWord === expectedWord &&
        actualWord !== "" &&
        expectedWord !== ""
      ) {
        correctWords++;
      }
      return correctWords;
    },
    0
  );
}

export function countWrongWords(actual: string, expected: string) {
  const actualWords = actual.split(" ");
  const expectedWords = expected.split(" ");

  return expectedWords.reduce(
    (wrongWords: number, expectedWord: string, i: number) => {
      const actualWord = actualWords[i];
      if (actualWord !== expectedWord) {
        wrongWords++;
      }
      return wrongWords;
    },
    0
  );
}

export function countCorrects(actual: string, expected: string) {
  const expectedChars = expected.split("");

  return expectedChars.reduce(
    (corrects: number, expectedChar: string, i: number) => {
      const actualChar = actual[i];
      if (actualChar === expectedChar) {
        corrects++;
      }
      return corrects;
    },
    0
  );
}

export function countErrors(actual: string, expected: string) {
  const expectedChars = expected.split("");

  return expectedChars.reduce(
    (errors: number, expectedChar: string, i: number) => {
      const actualChar = actual[i];
      if (actualChar !== expectedChar) {
        errors++;
      }
      return errors;
    },
    0
  );
}

export function calulateAccuracyPercentage(errors: number, total: number) {
  if (total > 0) {
    const corrects = total - errors;
    return Math.floor((corrects / total) * 100);
  }

  return 0;
}
